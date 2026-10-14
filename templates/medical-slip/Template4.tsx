import React from "react";
import { MedicalSlipData } from "../../data/mockData";

/*
 * Pathology report - Shri Sai Pathology letterhead.
 *
 * Results come from the `labResults` textarea so a report can carry any number
 * of tests. One line per row:
 *
 *   # SECTION HEADING            -> centred heading with a "Ref. Value" caption
 *   > Sub heading                -> label row with no value (e.g. "Blood Group")
 *   ^ SUB-SECTION                -> small centred bold heading (e.g. "PHYSICAL")
 *   * Note text                  -> italic note spanning the width
 *   ===                          -> page break; the letterhead, patient header,
 *                                   signatory and disclaimer repeat on each page
 *   ~ NAME | VALUE | NAME | VALUE -> two-column row (urine examination layout)
 *   NAME | VALUE | UNIT | FLAG | REF VALUE
 *   - NAME | ...                 -> same, indented under a sub heading
 *
 * A non-empty FLAG (H / L) prints the value bold and underlined, the way the
 * printed reports mark an out-of-range result.
 */

const SERIF = "'Times New Roman', Times, serif";
const MAROON = "#7c3b36";
const NAVY = "#24417e";
const FOOTER_BLUE = "#24417e";

type Row =
  | { kind: "section"; title: string }
  | { kind: "sub"; title: string }
  | { kind: "subsection"; title: string }
  | { kind: "note"; title: string }
  | { kind: "pagebreak" }
  | {
      kind: "pair";
      leftName: string;
      leftValue: string;
      rightName: string;
      rightValue: string;
    }
  | {
      kind: "result";
      indent: boolean;
      name: string;
      value: string;
      unit: string;
      flag: string;
      ref: string;
    };

export function parseResults(raw: string): Row[] {
  return `${raw ?? ""}`
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line): Row => {
      if (line.startsWith("===")) {
        return { kind: "pagebreak" };
      }
      if (line.startsWith("#")) {
        return { kind: "section", title: line.replace(/^#+\s*/, "") };
      }
      if (line.startsWith(">")) {
        return { kind: "sub", title: line.replace(/^>\s*/, "") };
      }
      if (line.startsWith("^")) {
        return { kind: "subsection", title: line.replace(/^\^\s*/, "") };
      }
      if (line.startsWith("*")) {
        return { kind: "note", title: line.replace(/^\*\s*/, "") };
      }
      if (line.startsWith("~")) {
        const cell = line
          .replace(/^~\s*/, "")
          .split("|")
          .map((part) => part.trim());
        return {
          kind: "pair",
          leftName: cell[0] ?? "",
          leftValue: cell[1] ?? "",
          rightName: cell[2] ?? "",
          rightValue: cell[3] ?? ""
        };
      }

      const indent = line.startsWith("-");
      const body = indent ? line.replace(/^-\s*/, "") : line;
      const cell = body.split("|").map((part) => part.trim());

      return {
        kind: "result",
        indent,
        name: cell[0] ?? "",
        value: cell[1] ?? "",
        unit: cell[2] ?? "",
        flag: cell[3] ?? "",
        ref: cell[4] ?? ""
      };
    });
}

/* Page-break rows never reach the renderer - splitPages consumes them. */
type PageRow = Exclude<Row, { kind: "pagebreak" }>;

export function splitPages(rows: Row[]): PageRow[][] {
  const pages: PageRow[][] = [[]];
  rows.forEach((row) => {
    if (row.kind === "pagebreak") {
      if (pages[pages.length - 1].length > 0) {
        pages.push([]);
      }
    } else {
      pages[pages.length - 1].push(row);
    }
  });
  if (pages.length > 1 && pages[pages.length - 1].length === 0) {
    pages.pop();
  }
  return pages;
}

interface MedicalSlipTemplateProps {
  data: MedicalSlipData;
}

function ReportPage({ data, rows }: { data: MedicalSlipData; rows: PageRow[] }) {
  const text = (key: keyof MedicalSlipData) => `${data[key] ?? ""}`.trim();

  const logoPath = text("labLogoPath");

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111",
    fontFamily: SERIF,
    padding: "7mm 9mm 6mm"
  };

  const cell: React.CSSProperties = {
    padding: "2.5px 4px",
    fontSize: "12px",
    verticalAlign: "baseline"
  };

  const headerField = (label: string, value: string, labelWidth: string) => (
    <div style={{ display: "flex", gap: "8px", fontSize: "12px", lineHeight: 1.6 }}>
      <span style={{ width: labelWidth, flexShrink: 0 }}>{label}</span>
      <span style={{ fontWeight: "bold", overflowWrap: "anywhere" }}>{value}</span>
    </div>
  );

  return (
    <div className="doc-page" style={pageStyle}>
      {/* ══════════════ Emblem ══════════════ */}
      {logoPath ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={logoPath}
            alt={text("labName") || "Pathology"}
            style={{ height: "74px", width: "auto", objectFit: "contain" }}
          />
        </div>
      ) : null}

      {/* ══════════════ Name banner ══════════════ */}
      <div
        style={{
          background: MAROON,
          color: "#fff",
          textAlign: "center",
          padding: "5px 8px",
          marginTop: "4px"
        }}
      >
        <span style={{ fontSize: "27px", fontWeight: "bold", letterSpacing: "0.5px" }}>
          {text("labName")}
        </span>
      </div>

      {/* ══════════════ Address banner ══════════════ */}
      <div
        style={{
          background: NAVY,
          color: "#fff",
          textAlign: "center",
          padding: "4px 8px",
          marginTop: "3px",
          fontSize: "12px"
        }}
      >
        {text("labAddress")}
        {text("labPhone") ? <> &nbsp;&#9742; : {text("labPhone")}</> : null}
      </div>

      {/* ══════════════ Patient header ══════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: "18px",
          marginTop: "11px"
        }}
      >
        <div>
          {headerField("Pt's Name", text("labPatientName"), "72px")}
          {headerField("Ref. By Dr.", text("labRefByDoctor"), "72px")}
        </div>
        <div>
          {headerField("Report Date", text("labReportDate"), "84px")}
          {headerField("Sample No.", text("labSampleNo"), "84px")}
        </div>
      </div>

      {/* ══════════════ Results ══════════════ */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
          marginTop: "10px"
        }}
      >
        <colgroup>
          <col style={{ width: "34%" }} />
          <col style={{ width: "13%" }} />
          <col style={{ width: "16%" }} />
          <col style={{ width: "6%" }} />
          <col style={{ width: "31%" }} />
        </colgroup>
        <tbody>
          {rows.map((row, index) => {
            if (row.kind === "section") {
              return (
                <tr key={index}>
                  {/* Spans every column so the heading centres on the sheet, not
                      on the first four columns. "Ref. Value" is then placed over
                      the reference column rather than flowing after the title. */}
                  <td colSpan={5} style={{ ...cell, paddingTop: "10px" }}>
                    <div style={{ position: "relative", textAlign: "center" }}>
                      <span
                        style={{ fontSize: "17px", fontWeight: "bold", letterSpacing: "0.4px" }}
                      >
                        {row.title}
                      </span>
                      <span
                        style={{
                          position: "absolute",
                          left: "84.5%",
                          bottom: "1px",
                          transform: "translateX(-50%)",
                          fontSize: "12px",
                          whiteSpace: "nowrap"
                        }}
                      >
                        Ref. Value
                      </span>
                    </div>
                  </td>
                </tr>
              );
            }

            if (row.kind === "sub") {
              return (
                <tr key={index}>
                  <td colSpan={5} style={{ ...cell, paddingTop: "6px" }}>
                    {row.title}
                  </td>
                </tr>
              );
            }

            if (row.kind === "subsection") {
              return (
                <tr key={index}>
                  <td
                    colSpan={5}
                    style={{
                      ...cell,
                      paddingTop: "8px",
                      paddingBottom: "2px",
                      textAlign: "center"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        color: "#4a4a4a"
                      }}
                    >
                      {row.title}
                    </span>
                  </td>
                </tr>
              );
            }

            if (row.kind === "note") {
              return (
                <tr key={index}>
                  <td
                    colSpan={5}
                    style={{
                      ...cell,
                      paddingTop: "10px",
                      paddingBottom: "6px",
                      textAlign: "center",
                      fontStyle: "italic",
                      fontWeight: "bold"
                    }}
                  >
                    {row.title}
                  </td>
                </tr>
              );
            }

            if (row.kind === "pair") {
              return (
                <tr key={index}>
                  <td colSpan={5} style={cell}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "28% 24% 28% 20%",
                        columnGap: "4px"
                      }}
                    >
                      <span style={{ paddingLeft: "12px" }}>{row.leftName}</span>
                      <span style={{ fontWeight: "bold" }}>{row.leftValue}</span>
                      <span>{row.rightName}</span>
                      <span style={{ fontWeight: "bold" }}>{row.rightValue}</span>
                    </div>
                  </td>
                </tr>
              );
            }

            const flagged = Boolean(row.flag);
            return (
              <tr key={index}>
                <td style={{ ...cell, paddingLeft: row.indent ? "30px" : "12px" }}>{row.name}</td>
                <td
                  style={{
                    ...cell,
                    textAlign: "right",
                    fontWeight: flagged ? "bold" : "normal",
                    textDecoration: flagged ? "underline" : "none"
                  }}
                >
                  {row.value}
                </td>
                <td style={{ ...cell, fontSize: "11px" }}>{row.unit}</td>
                <td style={{ ...cell, textAlign: "center", fontWeight: "bold" }}>{row.flag}</td>
                <td style={{ ...cell, textAlign: "center" }}>
                  {row.ref ? `( ${row.ref} )` : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ flex: 1 }} />

      {/* ══════════════ Signatory ══════════════ */}
      <div style={{ textAlign: "right", marginTop: "6px" }}>
        {text("labSignaturePath") ? (
          <img
            src={text("labSignaturePath")}
            alt="Signature"
            style={{
              width: "150px",
              height: "auto",
              objectFit: "contain",
              display: "block",
              marginLeft: "auto",
              marginBottom: "2px"
            }}
          />
        ) : (
          <div style={{ height: "30px" }} />
        )}
        <div style={{ fontSize: "13px", fontWeight: "bold" }}>{text("labSignatoryName")}</div>
        <div style={{ fontSize: "12px" }}>{text("labSignatoryQualification")}</div>
      </div>

      {/* ══════════════ Disclaimer ══════════════ */}
      {text("labDisclaimer") ? (
        <div
          style={{
            border: `1.5px solid ${FOOTER_BLUE}`,
            color: FOOTER_BLUE,
            textAlign: "center",
            fontSize: "12.5px",
            fontWeight: "bold",
            padding: "5px 8px",
            marginTop: "8px"
          }}
        >
          {text("labDisclaimer")}
        </div>
      ) : null}
    </div>
  );
}

export default function Template4({ data }: MedicalSlipTemplateProps) {
  const pages = splitPages(parseResults(`${data.labResults ?? ""}`));

  return (
    <>
      {pages.map((rows, index) => (
        <ReportPage key={index} data={data} rows={rows} />
      ))}
    </>
  );
}

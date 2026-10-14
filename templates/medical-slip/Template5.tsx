import React from "react";
import { MedicalSlipData } from "../../data/mockData";

/*
 * Radiology report - KT MRI & CT Scan Center letterhead.
 *
 * The findings are free prose rather than a table, so `radFindings` is a
 * textarea: one paragraph per line, blank lines preserved as spacing.
 *
 * The footer facility strip is `radFacilities`, one column per line:
 *   IMAGE_PATH | CAPTION | bullet ; bullet ; bullet
 * Any part may be empty - a column with no image just prints its bullets, which
 * is how the strip degrades until the equipment photos are dropped in.
 */

const SANS = "Arial, Helvetica, sans-serif";
const DEVANAGARI =
  "'Nirmala UI', 'Kohinoor Devanagari', 'Devanagari Sangam MN', 'Noto Sans Devanagari', Mangal, Arial, sans-serif";
const RED = "#b32017";
const RULE = "#111";

interface Facility {
  image: string;
  caption: string;
  bullets: string[];
}

export function parseFacilities(raw: string): Facility[] {
  return `${raw ?? ""}`
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const cell = line.split("|").map((part) => part.trim());
      return {
        image: cell[0] ?? "",
        caption: cell[1] ?? "",
        bullets: (cell[2] ?? "")
          .split(";")
          .map((part) => part.trim())
          .filter(Boolean)
      };
    });
}

interface MedicalSlipTemplateProps {
  data: MedicalSlipData;
}

export default function Template5({ data }: MedicalSlipTemplateProps) {
  const text = (key: keyof MedicalSlipData) => `${data[key] ?? ""}`.trim();
  const lines = (key: keyof MedicalSlipData) =>
    text(key)
      .split("\n")
      .map((line) => line.trim());

  const logoPath = text("radLogoPath");
  const isoPath = text("radIsoPath");
  const facilities = parseFacilities(`${data.radFacilities ?? ""}`);

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111",
    fontFamily: SANS,
    padding: "8mm 8mm 7mm"
  };

  const hi: React.CSSProperties = { fontFamily: DEVANAGARI };

  const infoCell: React.CSSProperties = {
    border: `1px solid ${RULE}`,
    padding: "5px 9px",
    fontSize: "11px",
    verticalAlign: "middle"
  };

  return (
    <div className="doc-page" style={pageStyle}>
      {/* ══════════════ Letterhead ══════════════ */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        <div style={{ width: "40%", flexShrink: 0 }}>
          {logoPath ? (
            <img
              src={logoPath}
              alt={text("radCentreName") || "Diagnostic centre"}
              style={{ width: "100%", maxHeight: "150px", objectFit: "contain", objectPosition: "left top" }}
            />
          ) : null}
          {text("radTagline") ? (
            <p style={{ margin: "2px 0 0", fontSize: "9.5px", fontStyle: "italic", color: RED }}>
              {text("radTagline")}
            </p>
          ) : null}
          {text("radTaglineHindi") ? (
            <p style={{ ...hi, margin: "1px 0 0", fontSize: "10.5px", fontWeight: "bold" }}>
              {text("radTaglineHindi")}
            </p>
          ) : null}
        </div>

        <div style={{ flex: 1, display: "flex", justifyContent: "center", paddingTop: "4px" }}>
          {isoPath ? (
            <img
              src={isoPath}
              alt="ISO registered"
              style={{ height: "46px", width: "auto", objectFit: "contain" }}
            />
          ) : null}
        </div>

        <div style={{ flexShrink: 0, textAlign: "right", fontSize: "10px", lineHeight: 1.45 }}>
          {lines("radAddress").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>

      {/* Rule with the REPORT tab sitting on it */}
      <div style={{ position: "relative", marginTop: "6px" }}>
        <div style={{ borderTop: `1.5px solid ${RULE}` }} />
        <div
          style={{
            position: "absolute",
            top: "-9px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            border: `1px dashed ${RULE}`,
            padding: "1px 10px",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.5px"
          }}
        >
          {text("radReportLabel") || "REPORT"}
        </div>
      </div>

      {/* ══════════════ Patient box ══════════════ */}
      <table
        style={{
          width: "82%",
          margin: "18px auto 0",
          borderCollapse: "collapse",
          tableLayout: "fixed"
        }}
      >
        <colgroup>
          <col style={{ width: "27%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "33%" }} />
        </colgroup>
        <tbody>
          <tr>
            <td style={infoCell}>I.D. NO</td>
            <td style={{ ...infoCell, borderLeft: 0, borderRight: 0 }}>{text("radIdNo")}</td>
            <td style={{ ...infoCell, borderLeft: 0, textAlign: "center" }}>
              {text("radReportDate")}
            </td>
          </tr>
          <tr>
            <td style={{ ...infoCell, borderTop: 0 }}>PATIENT NAME</td>
            <td style={{ ...infoCell, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
              {text("radPatientName")}
            </td>
            <td style={{ ...infoCell, borderTop: 0, borderLeft: 0, textAlign: "center" }}>
              {text("radAgeSex")}
            </td>
          </tr>
          <tr>
            <td style={{ ...infoCell, borderTop: 0 }}>REF. BY</td>
            <td colSpan={2} style={{ ...infoCell, borderTop: 0, borderLeft: 0 }}>
              {text("radRefBy")}
            </td>
          </tr>
        </tbody>
      </table>

      {/* ══════════════ Study title ══════════════ */}
      <div style={{ textAlign: "center", marginTop: "22px" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "0.5px",
            borderBottom: `1.6px solid ${RULE}`,
            paddingBottom: "2px"
          }}
        >
          {text("radStudyTitle")}
        </span>
      </div>

      {/* ══════════════ Findings ══════════════ */}
      <div style={{ marginTop: "26px", paddingLeft: "10px", paddingRight: "10px" }}>
        {lines("radFindings").map((line, index) =>
          line ? (
            <p key={index} style={{ margin: "0 0 14px", fontSize: "13px", lineHeight: 1.5 }}>
              {line}
            </p>
          ) : (
            <div key={index} style={{ height: "8px" }} />
          )
        )}

        {lines("radImpression").filter(Boolean).length > 0 ? (
          <div style={{ marginTop: "18px" }}>
            <p
              style={{
                margin: "0 0 8px",
                fontSize: "15px",
                fontWeight: "bold",
                textDecoration: "underline"
              }}
            >
              {text("radImpressionLabel") || "IMPRESSION"}
            </p>
            <ul style={{ margin: 0, paddingLeft: "34px" }}>
              {lines("radImpression")
                .filter(Boolean)
                .map((point, index) => (
                  <li
                    key={index}
                    style={{
                      margin: "0 0 6px",
                      fontSize: "13px",
                      fontWeight: "bold",
                      lineHeight: 1.45
                    }}
                  >
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        ) : null}

        {text("radAdvice") ? (
          <p style={{ margin: "18px 0 0", fontSize: "13px", lineHeight: 1.5 }}>
            <b>{text("radAdviceLabel") || "ADV"}</b> - {text("radAdvice")}
          </p>
        ) : null}
      </div>

      {/* ══════════════ Signatory - signed by hand ══════════════ */}
      <div style={{ textAlign: "center", marginTop: "40px", paddingRight: "12%" }}>
        <div style={{ height: "26px" }} />
        <div style={{ fontSize: "14px", fontWeight: "bold" }}>{text("radSignatoryName")}</div>
        <div style={{ fontSize: "13px", fontWeight: "bold" }}>
          {text("radSignatoryQualification")}
        </div>
      </div>

      <div style={{ flex: 1 }} />

      {/* ══════════════ Facility strip ══════════════ */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <span
          style={{
            background: RED,
            color: "#fff",
            fontSize: "10.5px",
            fontWeight: "bold",
            letterSpacing: "0.3px",
            padding: "2px 10px"
          }}
        >
          {text("radDisclaimer")}
        </span>
      </div>

      <div style={{ borderTop: `1px solid ${RED}`, marginTop: "3px", paddingTop: "5px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
          <span
            style={{
              ...hi,
              fontSize: "12px",
              fontWeight: "bold",
              flexShrink: 0,
              paddingTop: "6px"
            }}
          >
            {text("radFacilitiesHeading")}
          </span>

          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: `repeat(${Math.max(1, facilities.length)}, 1fr)`,
              columnGap: "8px"
            }}
          >
            {facilities.map((facility, index) => (
              <div key={index} style={{ display: "flex", gap: "5px", alignItems: "flex-start" }}>
                {facility.image ? (
                  <div style={{ flexShrink: 0, textAlign: "center", width: "62px" }}>
                    <img
                      src={facility.image}
                      alt={facility.caption || "Equipment"}
                      style={{ width: "62px", height: "44px", objectFit: "contain" }}
                    />
                    {facility.caption ? (
                      <div style={{ fontSize: "7px", color: RED, marginTop: "1px" }}>
                        {facility.caption}
                      </div>
                    ) : null}
                  </div>
                ) : null}
                <div style={{ minWidth: 0 }}>
                  {facility.bullets.map((bullet, bulletIndex) => (
                    <div
                      key={bulletIndex}
                      style={{
                        ...hi,
                        fontSize: "8px",
                        lineHeight: 1.6,
                        display: "flex",
                        gap: "3px"
                      }}
                    >
                      <span style={{ color: RED, flexShrink: 0 }}>&#10148;</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

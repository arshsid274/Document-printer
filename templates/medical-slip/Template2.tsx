import React from "react";
import { MedicalSlipData } from "../../data/mockData";

/*
 * "Clinical Summary" - blank urology intake sheet.
 *
 * Everything below the patient header is pre-printed stationery that the
 * consultant completes by hand, so the symptom lists come from the `sections`
 * textarea rather than being hard-coded:
 *
 *   # Section Heading
 *   Left Symptom | Right Symptom
 *   Left Only    |
 *                | Right Only
 *
 * Each pair becomes one row of: Symptom | Duration | Symptom | Duration.
 */

const SANS = "Arial, Helvetica, sans-serif";
const BORDER = "#8f8f8f";
const HEAD_BG = "#6f6f6f";

export interface SummaryCell {
  name: string;
  duration: string;
}

export interface SummarySection {
  title: string;
  rows: Array<[SummaryCell, SummaryCell]>;
}

/* "Frequency = 10 days" fills the Duration column beside the symptom; a bare
   name leaves it blank for the consultant to write in. */
function toCell(raw: string): SummaryCell {
  const [name = "", duration = ""] = `${raw}`.split("=").map((part) => part.trim());
  return { name, duration };
}

export function parseSections(raw: string): SummarySection[] {
  const sections: SummarySection[] = [];

  `${raw ?? ""}`.split("\n").forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line) {
      return;
    }

    if (line.startsWith("#")) {
      sections.push({ title: line.replace(/^#+\s*/, ""), rows: [] });
      return;
    }

    /* A row before any heading still needs somewhere to go. */
    if (sections.length === 0) {
      sections.push({ title: "", rows: [] });
    }

    const [left = "", right = ""] = line.split("|").map((part) => part.trim());
    sections[sections.length - 1].rows.push([toCell(left), toCell(right)]);
  });

  return sections;
}

interface MedicalSlipTemplateProps {
  data: MedicalSlipData;
}

export default function Template2({ data }: MedicalSlipTemplateProps) {
  const text = (key: keyof MedicalSlipData) => `${data[key] ?? ""}`.trim();

  const logoPath = text("logoPath");
  const sections = parseSections(`${data.sections ?? ""}`);
  const illnessRowCount = Math.max(0, Number(data.previousIllnessRows) || 0);

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111",
    fontFamily: SANS,
    padding: "9mm 8mm 8mm"
  };

  const headCell: React.CSSProperties = {
    background: HEAD_BG,
    color: "#fff",
    border: `1px solid ${BORDER}`,
    padding: "3px 6px",
    fontSize: "9.5px",
    fontWeight: "bold",
    textAlign: "center"
  };

  const blankHead: React.CSSProperties = {
    border: `1px solid ${BORDER}`,
    padding: "3px 6px"
  };

  const nameCell: React.CSSProperties = {
    border: `1px solid ${BORDER}`,
    padding: "4px 6px",
    fontSize: "10.5px",
    textAlign: "center"
  };

  /* Blank unless the symptom carries "= duration"; otherwise the consultant
     writes it in by hand. */
  const durationCell: React.CSSProperties = {
    border: `1px solid ${BORDER}`,
    padding: "4px 6px",
    height: "17px",
    fontSize: "10.5px",
    textAlign: "center"
  };

  const field = (label: string, key: keyof MedicalSlipData) => (
    <div style={{ display: "flex", gap: "6px", fontSize: "10px", lineHeight: 1.5 }}>
      <span style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>{label}</span>
      <span style={{ whiteSpace: "nowrap" }}>:-</span>
      <span style={{ overflowWrap: "anywhere" }}>{text(key)}</span>
    </div>
  );

  return (
    <div className="doc-page" style={pageStyle}>
      {/* ══════════════ Letterhead ══════════════ */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        {logoPath ? (
          <img
            src={logoPath}
            alt={text("centreName") || "Centre"}
            style={{ width: "130px", height: "auto", objectFit: "contain", flexShrink: 0 }}
          />
        ) : null}
        <div style={{ flex: 1, minWidth: 0, textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: "17px", fontWeight: "bold", lineHeight: 1.2 }}>
            {text("centreName")}
          </h1>
          {text("addressLine") ? (
            <p style={{ margin: "5px 0 0", fontSize: "9.5px", lineHeight: 1.35 }}>
              {text("addressLine")}
            </p>
          ) : null}
        </div>
        <div style={{ width: "56px", flexShrink: 0 }} />
      </div>

      <div style={{ borderTop: `1px solid ${BORDER}`, marginTop: "8px" }} />

      {/* ══════════════ Title ══════════════ */}
      <div style={{ textAlign: "center", marginTop: "9px" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "13px",
            fontWeight: "bold",
            borderBottom: "1.2px solid #111",
            paddingBottom: "1px"
          }}
        >
          {text("summaryTitle") || "Clinical Summary"}
        </span>
      </div>

      {/* ══════════════ Patient header ══════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "14px",
          rowGap: "2px",
          marginTop: "10px"
        }}
      >
        {field("UD No", "udNo")}
        {field("OP No", "opNo")}
        {field("Date", "visitDate")}
        {field("Patient Name", "patientName")}
        {field("Age/Sex", "ageSex")}
        {field("Pat. Type", "patType")}
        {field("Address", "patientAddress")}
        <div style={{ gridColumn: "span 2" }}>{field("Consultant", "consultant")}</div>
      </div>

      {/* ══════════════ Symptom sections ══════════════ */}
      <div style={{ marginTop: "10px" }}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ marginTop: sectionIndex === 0 ? 0 : "10px" }}>
            {section.title ? (
              <p style={{ margin: "0 0 3px", fontSize: "11.5px", fontWeight: "bold" }}>
                {section.title}
              </p>
            ) : null}
            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "25%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "25%" }} />
                <col style={{ width: "25%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th style={headCell}>Symptoms</th>
                  <th style={headCell}>Duration</th>
                  <th style={headCell}>Symptoms</th>
                  <th style={headCell}>Duration</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map(([left, right], rowIndex) => (
                  <tr key={rowIndex}>
                    {left.name ? (
                      <td style={nameCell}>{left.name}</td>
                    ) : (
                      <td style={blankHead} />
                    )}
                    {left.name ? (
                      <td style={durationCell}>{left.duration}</td>
                    ) : (
                      <td style={blankHead} />
                    )}
                    {right.name ? (
                      <td style={nameCell}>{right.name}</td>
                    ) : (
                      <td style={blankHead} />
                    )}
                    {right.name ? (
                      <td style={durationCell}>{right.duration}</td>
                    ) : (
                      <td style={blankHead} />
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* ══════════════ Previous illnesses ══════════════ */}
      {illnessRowCount > 0 ? (
        <div style={{ marginTop: "12px" }}>
          <p style={{ margin: "0 0 3px", fontSize: "11.5px", fontWeight: "bold" }}>
            Previous Illnesses
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: "14%" }} />
              <col style={{ width: "14%" }} />
              <col style={{ width: "13%" }} />
              <col style={{ width: "13%" }} />
              <col style={{ width: "14%" }} />
              <col style={{ width: "32%" }} />
            </colgroup>
            <thead>
              <tr>
                {["Date", "BP", "Wt.", "PR", "Temp", "Remarks"].map((label) => (
                  <th key={label} style={headCell}>
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: illnessRowCount }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: 6 }, (_, cellIndex) => (
                    <td key={cellIndex} style={{ ...durationCell, height: "22px" }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      <div style={{ flex: 1 }} />
    </div>
  );
}

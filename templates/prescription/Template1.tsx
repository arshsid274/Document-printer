import React from "react";
import { PrescriptionData } from "../../data/mockData";
import {
  GREEN,
  PAD,
  RULE,
  ParkFooterRule,
  ParkMasthead,
  ParkPatientBlock,
  ParkSignature,
  labelStyle,
  pageStyle,
  sectionTitleStyle,
} from "../shared/ParkComponents";

interface PrescriptionTemplateProps {
  data: PrescriptionData;
}

export default function Template1({ data }: PrescriptionTemplateProps) {
  const medicines = [1, 2, 3, 4, 5, 6]
    .map((n) => ({
      name: `${data[`med${n}Name`] ?? ""}`.trim(),
      dosage: `${data[`med${n}Dosage`] ?? ""}`.trim(),
      duration: `${data[`med${n}Duration`] ?? ""}`.trim(),
    }))
    // keep a row if any of its three cells was filled in – dropping a row because
    // only the dosage was typed would silently lose what the user entered
    .filter((med) => med.name || med.dosage || med.duration);

  const th: React.CSSProperties = {
    fontSize: "10.5px",
    fontWeight: "bold",
    letterSpacing: "0.6px",
    color: "#333",
    textAlign: "left",
    padding: "0 0 5px",
    borderBottom: `1px solid ${RULE}`,
  };

  const td: React.CSSProperties = {
    fontSize: "13px",
    padding: "9px 0 8px",
    borderBottom: "1px dotted #8f8f8f", // light dotted rules print faint – keep it dark enough to survive
    verticalAlign: "top",
  };

  return (
    <div style={pageStyle}>
      <ParkMasthead data={data} />
      <ParkPatientBlock data={data} />

      {/* ══════════════ Body ══════════════ */}
      <div style={{ flex: 1, padding: `12px ${PAD}px 0`, display: "flex", flexDirection: "column" }}>
        {`${data.complaints ?? ""}`.trim() ? (
          <section style={{ marginBottom: "10px" }}>
            <p style={sectionTitleStyle}>CHIEF COMPLAINTS</p>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.4, whiteSpace: "pre-wrap" }}>
              {data.complaints}
            </p>
          </section>
        ) : null}

        {`${data.diagnosis ?? ""}`.trim() ? (
          <section style={{ marginBottom: "12px" }}>
            <p style={sectionTitleStyle}>DIAGNOSIS</p>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.4, whiteSpace: "pre-wrap" }}>
              {data.diagnosis}
            </p>
          </section>
        ) : null}

        {/* Rx – heading and column headers only exist when there is something to list */}
        {medicines.length > 0 ? (
          <>
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "2px" }}
            >
              <span
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "30px",
                  fontStyle: "italic",
                  fontWeight: "bold",
                  lineHeight: 0.95,
                  color: GREEN,
                }}
              >
                Rx
              </span>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
              <colgroup>
                <col style={{ width: "26px" }} />
                <col />
                <col style={{ width: "170px" }} />
                <col style={{ width: "96px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th style={th}>#</th>
                  <th style={th}>MEDICINE</th>
                  <th style={th}>DOSAGE</th>
                  <th style={th}>DURATION</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((med, index) => (
                  <tr key={index}>
                    <td style={{ ...td, fontWeight: "bold" }}>{index + 1}.</td>
                    <td style={{ ...td, fontWeight: "bold" }}>{med.name}</td>
                    <td style={td}>{med.dosage}</td>
                    <td style={td}>{med.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : null}

        {`${data.advice ?? ""}`.trim() ? (
          <section style={{ marginTop: "16px" }}>
            <p style={sectionTitleStyle}>ADVICE</p>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.45, whiteSpace: "pre-wrap" }}>
              {data.advice}
            </p>
          </section>
        ) : null}

        {`${data.followUp ?? ""}`.trim() ? (
          <p style={{ margin: "14px 0 0", fontSize: "13px" }}>
            <span style={{ ...labelStyle, fontSize: "11.5px" }}>Follow-up&nbsp;:</span>{" "}
            <span style={{ fontWeight: "bold" }}>{data.followUp}</span>
          </p>
        ) : null}

        <ParkSignature data={data} />
      </div>

      <ParkFooterRule />
    </div>
  );
}

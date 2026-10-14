import React from "react";
import { MedicalSlipData } from "../../data/mockData";

/*
 * OPD consultation letterhead - the clinic's pre-printed prescription sheet.
 *
 * Everything below the patient block is blank: the consultant writes the Rx,
 * findings and advice by hand. The printed furniture is the vertical rule that
 * splits the writing area, the ruled footer and the standing notices.
 */

const SANS = "Arial, Helvetica, sans-serif";
/* Arial carries no Devanagari glyphs - name the fallbacks so the Hindi renders
   the same on macOS, Windows and Linux instead of picking whatever. */
const DEVANAGARI =
  "'Nirmala UI', 'Kohinoor Devanagari', 'Devanagari Sangam MN', 'Noto Sans Devanagari', Mangal, Arial, sans-serif";
const RULE = "#111";
/* The patient block's divider and the writing-area divider are one line. */
const SPLIT = "31%";

interface MedicalSlipTemplateProps {
  data: MedicalSlipData;
}

export default function Template3({ data }: MedicalSlipTemplateProps) {
  const text = (key: keyof MedicalSlipData) => `${data[key] ?? ""}`.trim();
  const lines = (key: keyof MedicalSlipData) =>
    text(key)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

  const logoPath = text("logoPath");
  const hi: React.CSSProperties = { fontFamily: DEVANAGARI };

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111",
    fontFamily: SANS,
    padding: "7mm 7mm 6mm"
  };

  const doctorBlock = (
    nameKey: keyof MedicalSlipData,
    qualsKey: keyof MedicalSlipData,
    specKey: keyof MedicalSlipData,
    credsKey: keyof MedicalSlipData,
    regKey: keyof MedicalSlipData,
    align: "left" | "right"
  ) => (
    <div style={{ fontSize: "8.5px", lineHeight: 1.45, textAlign: align }}>
      <div style={{ ...hi, fontSize: "17px", fontWeight: "bold", lineHeight: 1.2 }}>
        {text(nameKey)}
      </div>
      <div style={{ fontSize: "9px", fontWeight: "bold", marginTop: "1px" }}>{text(qualsKey)}</div>
      {text(specKey) ? <div style={hi}>{text(specKey)}</div> : null}
      {lines(credsKey).map((line, index) => (
        <div key={index} style={hi}>
          {line}
        </div>
      ))}
      {text(regKey) ? (
        <div style={{ fontSize: "9px", fontWeight: "bold", marginTop: "2px" }}>{text(regKey)}</div>
      ) : null}
    </div>
  );

  const timingBox = (children: React.ReactNode, extra: React.CSSProperties = {}) => (
    <div
      style={{
        borderRight: `1px solid ${RULE}`,
        padding: "5px 6px",
        fontSize: "9px",
        lineHeight: 1.5,
        textAlign: "center",
        whiteSpace: "pre-wrap",
        ...extra
      }}
    >
      {children}
    </div>
  );

  const row = (label: string, value: string, labelWidth: string) => (
    <div style={{ display: "flex", gap: "5px", fontSize: "9.5px", lineHeight: 1.85 }}>
      <span style={{ fontWeight: "bold", width: labelWidth, flexShrink: 0 }}>{label}</span>
      <span style={{ flexShrink: 0 }}>:</span>
      <span style={{ overflowWrap: "anywhere" }}>{value}</span>
    </div>
  );

  return (
    <div className="doc-page" style={pageStyle}>
      {/* ══════════════ Masthead ══════════════ */}
      <h1
        style={{
          ...hi,
          margin: 0,
          fontSize: "27px",
          fontWeight: "bold",
          lineHeight: 1.1,
          textAlign: "center"
        }}
      >
        {text("opdCentreName")}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: "12px",
          marginTop: "2px"
        }}
      >
        <span style={{ ...hi, fontSize: "10px" }}>{text("opdCentreAddress")}</span>
        <span style={{ ...hi, fontSize: "11px", fontWeight: "bold" }}>
          {text("opdCentreMobile")}
        </span>
      </div>

      {/* Consultants either side of the certification mark */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 132px 1fr",
          alignItems: "flex-start",
          columnGap: "8px",
          marginTop: "4px"
        }}
      >
        {doctorBlock(
          "opdDoc1Name",
          "opdDoc1Quals",
          "opdDoc1Spec",
          "opdDoc1Credentials",
          "opdDoc1Reg",
          "left"
        )}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "10px" }}>
          {logoPath ? (
            <img
              src={logoPath}
              alt={text("opdCentreName") || "Centre"}
              style={{ width: "128px", height: "auto", objectFit: "contain" }}
            />
          ) : null}
        </div>
        {doctorBlock(
          "opdDoc2Name",
          "opdDoc2Quals",
          "opdDoc2Spec",
          "opdDoc2Credentials",
          "opdDoc2Reg",
          "right"
        )}
      </div>

      {/* ══════════════ Consulting hours ══════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.05fr 1fr",
          border: `1px solid ${RULE}`,
          marginTop: "6px"
        }}
      >
        {timingBox(<span style={hi}>{text("opdTimingLeft")}</span>)}
        {timingBox(
          <>
            <span style={{ ...hi, fontSize: "10px" }}>{text("opdTimingCentreHindi")}</span>
            <br />
            <span style={{ fontSize: "11.5px", fontWeight: "bold" }}>{text("opdTimingCentre")}</span>
          </>
        )}
        {timingBox(<span style={hi}>{text("opdTimingRight")}</span>, { borderRight: 0 })}
      </div>

      {/* ══════════════ Patient block ══════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `${SPLIT} 1fr`,
          border: `1px solid ${RULE}`,
          borderTop: 0
        }}
      >
        <div style={{ padding: "5px 8px", borderRight: `1px solid ${RULE}` }}>
          {row("Reg No.", text("opdRegNo"), "62px")}
          {row("Patient ID", text("opdPatientId"), "62px")}
          {row("Date", text("opdDate"), "62px")}
          {row("Token No", text("opdTokenNo"), "62px")}
          <div style={{ display: "flex", gap: "16px", fontSize: "9.5px", lineHeight: 1.85 }}>
            <span>
              <b>Wt</b> : {text("opdWeight")}
            </span>
            <span>
              <b>BP</b> : {text("opdBp")}
            </span>
          </div>
        </div>
        <div style={{ padding: "5px 8px" }}>
          <div style={{ display: "flex", gap: "26px", fontSize: "9.5px", lineHeight: 1.85 }}>
            <span>
              <b>Name</b> : {text("patientName")}
            </span>
            <span>
              <b>Age/Sex</b> : {text("ageSex")}
            </span>
          </div>
          {row("Guardian", text("opdGuardian"), "92px")}
          {row("Address", text("patientAddress"), "92px")}
          {row("Doctor Name", text("opdDoctorName"), "92px")}
          {row("Provisional Diagnosis", text("opdDiagnosis"), "126px")}
        </div>
      </div>

      {/* ══════════════ Writing area - blank, split by the printed rule ══════ */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: `${SPLIT} 1fr`,
          borderLeft: `1px solid ${RULE}`,
          borderRight: `1px solid ${RULE}`,
          borderBottom: `1px solid ${RULE}`
        }}
      >
        <div style={{ borderRight: `1px solid ${RULE}` }} />
        <div style={{ padding: "4px 10px" }}>
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "34px",
              fontWeight: "bold",
              lineHeight: 1
            }}
          >
            R<span style={{ fontSize: "24px" }}>x</span>
          </span>
        </div>
      </div>

      {/* ══════════════ Review line ══════════════ */}
      <p style={{ ...hi, margin: "5px 0 0", fontSize: "10px", textAlign: "center" }}>
        {text("opdReviewLine")}
      </p>

      {/* ══════════════ Standing notices ══════════════ */}
      <div style={{ borderTop: `1px solid ${RULE}`, marginTop: "4px", paddingTop: "3px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "16px"
          }}
        >
          <span style={{ ...hi, fontSize: "9.5px" }}>{text("opdFooterNote")}</span>
          <span style={{ ...hi, fontSize: "13px", fontWeight: "bold" }}>
            {text("opdHolidayNote")}
          </span>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${RULE}`, marginTop: "3px", paddingTop: "3px" }}>
        {lines("opdLegalNotes").map((line, index) => (
          <p key={index} style={{ ...hi, margin: 0, fontSize: "9px", lineHeight: 1.5 }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

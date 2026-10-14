import React from "react";
import { MedicalSlipData } from "../../data/mockData";

/*
 * Discharge Summary - Aaditya Urology Center letterhead.
 *
 * A dense single-sheet form: letterhead, a bordered patient block, then a
 * left-label / right-value body (Final Diagnosis, Procedures, Condition,
 * Instructions, Medications, Follow Up, H/O), closed by the acknowledgement
 * line. Medications come from a textarea, one per line.
 */

const SANS = "Arial, Helvetica, sans-serif";
const RULE = "#111";
const SOFT = "#555";

interface MedicalSlipTemplateProps {
  data: MedicalSlipData;
}

export default function Template6({ data }: MedicalSlipTemplateProps) {
  const text = (key: keyof MedicalSlipData) => `${data[key] ?? ""}`.trim();
  const lines = (key: keyof MedicalSlipData) =>
    text(key)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

  const logoPath = text("logoPath");

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111",
    fontFamily: SANS,
    padding: "8mm 9mm 7mm"
  };

  /* One "Label :- value" cell in the patient block. */
  const info = (label: string, value: string, labelWidth = "92px") => (
    <div style={{ display: "flex", gap: "5px", fontSize: "9px", lineHeight: 1.5 }}>
      <span style={{ fontWeight: "bold", width: labelWidth, flexShrink: 0 }}>{label}</span>
      <span style={{ flexShrink: 0 }}>:-</span>
      <span style={{ overflowWrap: "anywhere" }}>{value}</span>
    </div>
  );

  /* One body section: bold label on the left, wrapped value on the right. */
  const section = (label: string, value: React.ReactNode) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "150px 12px 1fr",
        columnGap: "6px",
        marginTop: "10px",
        fontSize: "10px",
        lineHeight: 1.45
      }}
    >
      <div style={{ fontWeight: "bold" }}>{label}</div>
      <div style={{ fontWeight: "bold" }}>:-</div>
      <div>{value}</div>
    </div>
  );

  const paras = (key: keyof MedicalSlipData) =>
    lines(key).map((line, index) => (
      <div key={index} style={{ marginBottom: "2px" }}>
        {line}
      </div>
    ));

  return (
    <div className="doc-page" style={pageStyle}>
      {/* ══════════════ Letterhead ══════════════ */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
        {logoPath ? (
          <img
            src={logoPath}
            alt={text("centreName") || "Centre"}
            style={{ width: "78px", height: "auto", objectFit: "contain", flexShrink: 0 }}
          />
        ) : null}
        <div style={{ flex: 1, minWidth: 0, textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: "16px", fontWeight: "bold", lineHeight: 1.2 }}>
            {text("centreName")}
          </h1>
          {text("addressLine") ? (
            <p style={{ margin: "4px 0 0", fontSize: "9px", lineHeight: 1.3 }}>
              {text("addressLine")}
            </p>
          ) : null}
        </div>
        <div style={{ width: "78px", flexShrink: 0 }} />
      </div>

      {/* ══════════════ Title + Print Date ══════════════ */}
      <div
        style={{
          border: `1px solid ${RULE}`,
          marginTop: "10px",
          padding: "5px 8px",
          position: "relative"
        }}
      >
        <div style={{ textAlign: "center", fontSize: "13px", fontWeight: "bold", letterSpacing: "0.5px" }}>
          {text("dsTitle") || "DISCHARGE SUMMARY"}
        </div>
        {text("dsPrintDate") ? (
          <div
            style={{
              position: "absolute",
              right: "8px",
              bottom: "-16px",
              fontSize: "9px"
            }}
          >
            <b>Print Date :</b> {text("dsPrintDate")}
          </div>
        ) : null}
      </div>

      {/* ══════════════ Patient block ══════════════ */}
      <div
        style={{
          borderBottom: `1px solid ${RULE}`,
          marginTop: "22px",
          paddingBottom: "8px",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr 1.1fr",
          columnGap: "14px",
          rowGap: "3px"
        }}
      >
        <div style={{ display: "grid", rowGap: "3px" }}>
          {info("UHID No", text("dsUhidNo"), "84px")}
          {info("Patient Name", text("patientName"), "84px")}
          {info("Doctor Name", text("dsDoctorName"), "84px")}
          {info("Location", text("location"), "84px")}
          {info("Address", text("patientAddress"), "84px")}
        </div>
        <div style={{ display: "grid", rowGap: "3px", alignContent: "start" }}>
          {info("IP No", text("dsIpNo"), "60px")}
          {info("Father", text("dsFatherName"), "60px")}
          {info("Age/Sex", text("ageSex"), "60px")}
        </div>
        <div style={{ display: "grid", rowGap: "3px", alignContent: "start" }}>
          {info("Admit Date", text("dsAdmitDate"), "120px")}
          {info("Operation/Surgery Date", text("dsSurgeryDate"), "120px")}
          {info("Discharge Type", text("dsDischargeType"), "120px")}
          {info("Exp.Dis.Date", text("dsExpDischargeDate"), "120px")}
        </div>
      </div>

      {/* ══════════════ Body ══════════════ */}
      <div style={{ flex: 1 }}>
        {text("dsFinalDiagnosis") ? section("FInal Diagnosis", paras("dsFinalDiagnosis")) : null}
        {text("dsProcedures") ? section("Procedures", paras("dsProcedures")) : null}
        {text("dsCondition")
          ? section("Condition at Discharge", <span>{text("dsCondition")}</span>)
          : null}
        {text("dsInstructions")
          ? section("Discharge instructions", paras("dsInstructions"))
          : null}
        {lines("dsMedications").length > 0
          ? section(
              "Discharge Medications",
              <div>
                {lines("dsMedications").map((line, index) => (
                  <div key={index} style={{ marginBottom: "2px" }}>
                    {line}
                  </div>
                ))}
              </div>
            )
          : null}
        {text("dsFollowUp")
          ? section("Follow UP Appointments", paras("dsFollowUp"))
          : null}
        {text("dsHistory") ? (
          section(
            "H/O",
            <div style={{ fontSize: "9.5px", lineHeight: 1.4 }}>{paras("dsHistory")}</div>
          )
        ) : null}
      </div>

      {/* ══════════════ Acknowledgement ══════════════ */}
      {text("dsAckLine") ? (
        <p
          style={{
            margin: "14px 0 0",
            fontSize: "10px",
            color: SOFT,
            borderTop: `1px solid ${RULE}`,
            paddingTop: "6px"
          }}
        >
          {text("dsAckLine")}
        </p>
      ) : null}
    </div>
  );
}

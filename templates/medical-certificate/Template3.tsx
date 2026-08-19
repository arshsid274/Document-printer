import React from "react";
import { MedicalCertificateData } from "../../data/mockData";

const SANS = "Arial, Helvetica, sans-serif";
const DEVANAGARI =
  "'Nirmala UI', 'Kohinoor Devanagari', 'Devanagari Sangam MN', 'Noto Sans Devanagari', Mangal, Arial, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";
const RULE = "#111";
const BLUE = "#124ca3";
const SPLIT = "31%";

interface MedicalCertificateTemplateProps {
  data: MedicalCertificateData;
}

export default function Template3({ data }: MedicalCertificateTemplateProps) {
  const text = (key: keyof MedicalCertificateData) => `${data[key] ?? ""}`.trim();
  const lines = (key: keyof MedicalCertificateData) =>
    text(key)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

  const hi: React.CSSProperties = { fontFamily: DEVANAGARI };
  const smallBilingual: React.CSSProperties = {
    fontSize: "7.8px",
    lineHeight: 1.28,
    color: "#222"
  };

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111",
    fontFamily: SANS,
    padding: "6.4mm 7mm 5.5mm"
  };

  const doctorBlock = (
    nameHi: keyof MedicalCertificateData,
    nameEn: keyof MedicalCertificateData,
    quals: keyof MedicalCertificateData,
    specHi: keyof MedicalCertificateData,
    specEn: keyof MedicalCertificateData,
    credsHi: keyof MedicalCertificateData,
    credsEn: keyof MedicalCertificateData,
    reg: keyof MedicalCertificateData,
    align: "left" | "right"
  ) => (
    <div style={{ textAlign: align, lineHeight: 1.2 }}>
      <div style={{ ...hi, fontSize: "17px", fontWeight: "bold" }}>{text(nameHi)}</div>
      <div style={{ fontSize: "10px", fontWeight: "bold", marginTop: "1px" }}>{text(nameEn)}</div>
      <div style={{ fontSize: "8.8px", fontWeight: "bold", marginTop: "2px" }}>{text(quals)}</div>
      <div style={{ ...hi, fontSize: "8.2px", marginTop: "2px" }}>{text(specHi)}</div>
      <div style={{ fontSize: "7.4px" }}>{text(specEn)}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6px",
          marginTop: "4px",
          textAlign: align,
          ...smallBilingual
        }}
      >
        <div style={hi}>
          {lines(credsHi).map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div>
          {lines(credsEn).map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
      <div style={{ fontSize: "9px", fontWeight: "bold", marginTop: "3px" }}>{text(reg)}</div>
    </div>
  );

  const timingBox = (hiText: string, enText: string, last = false) => (
    <div
      style={{
        borderRight: last ? 0 : `1px solid ${RULE}`,
        padding: "4px 6px 5px",
        textAlign: "center",
        minHeight: "24mm",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div style={{ ...hi, fontSize: "9px", lineHeight: 1.32, whiteSpace: "pre-wrap" }}>{hiText}</div>
      <div style={{ fontSize: "7.7px", lineHeight: 1.25, marginTop: "2px", whiteSpace: "pre-wrap" }}>
        {enText}
      </div>
    </div>
  );

  const detailRow = (label: string, value: string, labelWidth = "72px") => (
    <div style={{ display: "flex", gap: "5px", fontSize: "9.5px", lineHeight: 1.82 }}>
      <span style={{ width: labelWidth, flexShrink: 0, fontWeight: "bold" }}>{label}</span>
      <span>:</span>
      <span style={{ minWidth: 0, overflowWrap: "anywhere" }}>{value}</span>
    </div>
  );

  const generatedSection = (
    title: string,
    titleHi: string,
    content: string,
    color: string = "#111"
  ) => (
    <section style={{ marginBottom: "13px" }}>
      <div
        style={{
          display: "inline-block",
          borderBottom: `1px solid ${color}`,
          color,
          fontSize: "11px",
          fontWeight: "bold",
          letterSpacing: "0.2px",
          paddingBottom: "1px"
        }}
      >
        {title} <span style={{ ...hi, fontWeight: "bold" }}>{titleHi}</span>
      </div>
      <div
        style={{
          marginTop: "5px",
          color,
          fontSize: "11.2px",
          lineHeight: 1.45,
          whiteSpace: "pre-wrap"
        }}
      >
        {content}
      </div>
    </section>
  );

  return (
    <div className="doc-page" style={pageStyle}>
      <h1
        style={{
          ...hi,
          margin: 0,
          fontSize: "27px",
          fontWeight: "bold",
          lineHeight: 1.05,
          textAlign: "center"
        }}
      >
        {text("aadityaCentreNameHi")}
      </h1>
      <div style={{ textAlign: "center", fontSize: "11px", fontWeight: "bold", marginTop: "1px" }}>
        {text("aadityaCentreNameEn")}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "start",
          gap: "12px",
          marginTop: "2px"
        }}
      >
        <div>
          <div style={{ ...hi, fontSize: "9.5px" }}>{text("aadityaAddressHi")}</div>
          <div style={{ fontSize: "8.2px", marginTop: "1px" }}>{text("aadityaAddressEn")}</div>
        </div>
        <div style={{ fontSize: "10px", fontWeight: "bold", whiteSpace: "nowrap" }}>
          {text("aadityaMobile")}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 100px 1fr",
          alignItems: "start",
          columnGap: "8px",
          marginTop: "4px"
        }}
      >
        {doctorBlock(
          "aadityaDoc1NameHi",
          "aadityaDoc1NameEn",
          "aadityaDoc1Quals",
          "aadityaDoc1SpecHi",
          "aadityaDoc1SpecEn",
          "aadityaDoc1CredentialsHi",
          "aadityaDoc1CredentialsEn",
          "aadityaDoc1Reg",
          "left"
        )}

        <div style={{ display: "flex", justifyContent: "center", paddingTop: "9px" }}>
          {text("aadityaLogoPath") ? (
            <img
              src={text("aadityaLogoPath")}
              alt={text("aadityaCentreNameEn") || "Aaditya Urology Centre"}
              style={{ width: "88px", height: "88px", objectFit: "contain", filter: "grayscale(1)" }}
            />
          ) : null}
        </div>

        {doctorBlock(
          "aadityaDoc2NameHi",
          "aadityaDoc2NameEn",
          "aadityaDoc2Quals",
          "aadityaDoc2SpecHi",
          "aadityaDoc2SpecEn",
          "aadityaDoc2CredentialsHi",
          "aadityaDoc2CredentialsEn",
          "aadityaDoc2Reg",
          "right"
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.05fr 1fr",
          border: `1px solid ${RULE}`,
          marginTop: "6px"
        }}
      >
        {timingBox(text("aadityaTimingLeftHi"), text("aadityaTimingLeftEn"))}
        {timingBox(text("aadityaTimingCentreHi"), text("aadityaTimingCentreEn"))}
        {timingBox(text("aadityaTimingRightHi"), text("aadityaTimingRightEn"), true)}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `${SPLIT} 1fr`,
          border: `1px solid ${RULE}`,
          borderTop: 0
        }}
      >
        <div style={{ padding: "5px 8px", borderRight: `1px solid ${RULE}` }}>
          {detailRow("Reg No.", text("aadityaRegNo"))}
          {detailRow("Patient ID", text("aadityaPatientId"))}
          {detailRow("Date", text("aadityaOpdDate"))}
          {detailRow("Token No", text("aadityaTokenNo"))}
          <div style={{ display: "flex", gap: "16px", fontSize: "9.5px", lineHeight: 1.82 }}>
            <span>
              <b>Wt</b> : {text("aadityaWeight")}
            </span>
            <span>
              <b>BP</b> : {text("aadityaBp")}
            </span>
          </div>
        </div>

        <div style={{ padding: "5px 8px" }}>
          <div style={{ display: "flex", gap: "26px", fontSize: "9.5px", lineHeight: 1.82 }}>
            <span>
              <b>Name</b> : {text("aadityaPatientName")}
            </span>
            <span>
              <b>Age/Sex</b> : {text("aadityaAgeSex")}
            </span>
          </div>
          {detailRow("Guardian", text("aadityaGuardian"), "118px")}
          {detailRow("Address", text("aadityaAddress"), "118px")}
          {detailRow("Doctor Name", text("aadityaConsultDoctor"), "118px")}
          {detailRow("Provisional Diagnosis", text("aadityaProvisionalDiagnosis"), "118px")}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: `${SPLIT} 1fr`,
          borderLeft: `1px solid ${RULE}`,
          borderRight: `1px solid ${RULE}`,
          borderBottom: `1px solid ${RULE}`,
          minHeight: "166mm"
        }}
      >
        <div style={{ borderRight: `1px solid ${RULE}`, padding: "14px 11px 8px" }}>
          {generatedSection("Admission Advice", "भर्ती सलाह", text("aadityaAdmissionAdvice"), BLUE)}
          {generatedSection("Clinical Notes", "क्लिनिकल नोट्स", text("aadityaClinicalNotes"))}
        </div>

        <div style={{ padding: "7px 12px 8px" }}>
          <div
            style={{
              fontFamily: SERIF,
              fontSize: "34px",
              fontWeight: "bold",
              lineHeight: 1,
              marginBottom: "2px"
            }}
          >
            R<span style={{ fontSize: "24px" }}>x</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.95fr", gap: "22px" }}>
            <div>
              {generatedSection("Investigations", "जांच", text("aadityaInvestigations"), BLUE)}
              {generatedSection("Diagnosis", "निदान", text("aadityaDiagnosisTyped"), BLUE)}
            </div>
            <div>
              {generatedSection("Procedure Advice", "प्रक्रिया सलाह", text("aadityaSurgeryAdvice"))}
              {generatedSection("Medicine Advice", "दवा सलाह", text("aadityaMedicationAdvice"), BLUE)}
            </div>
          </div>
        </div>
      </div>

      <p style={{ margin: "5px 0 0", fontSize: "10px", textAlign: "center" }}>
        <span>{text("aadityaReviewLineEn")}</span>{" "}
        <span style={hi}>{text("aadityaReviewLineHi")}</span>
      </p>

      <div style={{ borderTop: `1px solid ${RULE}`, marginTop: "4px", paddingTop: "3px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "16px",
            alignItems: "baseline"
          }}
        >
          <div style={{ fontSize: "8.5px", lineHeight: 1.35 }}>
            <div>{text("aadityaFooterNoteEn")}</div>
            <div style={hi}>{text("aadityaFooterNoteHi")}</div>
          </div>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            <div style={{ fontSize: "11px" }}>{text("aadityaHolidayEn")}</div>
            <div style={{ ...hi, fontSize: "13px" }}>{text("aadityaHolidayHi")}</div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${RULE}`, marginTop: "3px", paddingTop: "3px" }}>
        {lines("aadityaLegalNotesEn").map((line, index) => (
          <p key={`en-${index}`} style={{ margin: 0, fontSize: "8px", lineHeight: 1.35 }}>
            {line}
          </p>
        ))}
        {lines("aadityaLegalNotesHi").map((line, index) => (
          <p key={`hi-${index}`} style={{ ...hi, margin: 0, fontSize: "8.5px", lineHeight: 1.35 }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

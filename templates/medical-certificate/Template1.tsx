import React from "react";
import { MedicalCertificateData } from "../../data/mockData";

/*
 * "Certificate of Attendance" - the clinic letterhead format:
 *   header (logo left / clinic block right) - rule - centred underlined title -
 *   certify block - attendance line - diagnosis - remarks - closing statement -
 *   doctor block - signature and seal strip with scanned stamp/signature assets.
 */

const SERIF = "'Times New Roman', Times, serif";
const SANS = "Arial, Helvetica, sans-serif";
const RULE = "#7a7a7a";
const STAMP_PATH = "/images/logos/Bg_Remove_Stamp_Joseph.png";
const SIGNATURE_PATH = "/images/logos/bgremove_sateesh.png";

const pageStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "297mm",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  color: "#111",
  fontFamily: SANS,
  padding: "14mm 13mm 12mm",
};

/* The body of this form is set entirely in bold - matching the printed sheet. */
const line: React.CSSProperties = {
  margin: 0,
  fontSize: "12.5px",
  fontWeight: "bold",
  lineHeight: 1.6,
  overflowWrap: "anywhere",
};

interface MedicalCertificateTemplateProps {
  data: MedicalCertificateData;
}

export default function Template1({ data }: MedicalCertificateTemplateProps) {
  const text = (key: keyof MedicalCertificateData) => `${data[key] ?? ""}`.trim();

  const logoPath = text("logoPath");
  const clinicName = text("clinicName");
  const clinicAddress = text("clinicAddress");
  const clinicPhone = text("clinicPhone");
  const patientName = text("patientName");
  const registrationLabel = text("registrationLabel") || "Registration No";
  const registrationNo = text("registrationNo");
  const emiratesId = text("emiratesId");
  const dateOfBirth = text("dateOfBirth");
  const ageGender = text("ageGender");
  const nationality = text("nationality");
  const patientPhone = text("patientPhone");
  const insuranceProvider = text("insuranceProvider");
  const memberPolicyNo = text("memberPolicyNo");
  const company = text("company");
  const attendedAt = text("attendedAt");
  const attendedOn = text("attendedOn");
  const diagnosisCodes = text("diagnosisCodes");
  const remarks = text("remarks");
  const closingStatement = text("closingStatement");
  const doctorName = text("doctorName");
  const specialty = text("specialty");
  const licenseLabel = text("licenseLabel") || "License No";
  const licenseNo = text("licenseNo");

  return (
    <div style={pageStyle}>
      {/* ══════════════ Letterhead ══════════════ */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
        <div style={{ width: "42%", flexShrink: 0 }}>
          {logoPath ? (
            <img
              src={logoPath}
              alt={clinicName || "Clinic"}
              style={{
                width: "335px",
                maxHeight: "108px",
                objectFit: "contain",
                objectPosition: "Right center",
                display: "block",
                filter: "grayscale(1)",
              }}
            />
          ) : null}
        </div>

        <div style={{ flex: 1, minWidth: 0, fontFamily: SERIF }}>
          {clinicName ? (
            <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "3px" }}>
              {clinicName}
            </div>
          ) : null}
          {clinicAddress ? (
            <div style={{ fontSize: "10.5px", lineHeight: 1.45, whiteSpace: "pre-wrap" }}>
              {clinicAddress}
            </div>
          ) : null}
          {clinicPhone ? (
            <div style={{ fontSize: "10.5px", lineHeight: 1.45, whiteSpace: "pre-wrap" }}>
              {clinicPhone}
            </div>
          ) : null}
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${RULE}`, marginTop: "10px" }} />

      {/* ══════════════ Title ══════════════ */}
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <div
          style={{
            display: "inline-block",
            fontSize: "13px",
            fontWeight: "bold",
            letterSpacing: "0.3px",
            borderBottom: "1.2px solid #111",
            paddingBottom: "1px",
          }}
        >
          CERTIFICATE OF ATTENDANCE
        </div>
        <div style={{ fontFamily: SERIF, fontSize: "12px", fontStyle: "italic", marginTop: "3px" }}>
          To whom it may concern
        </div>
      </div>

      {/* ══════════════ Body ══════════════ */}
      <div style={{ flex: 1, marginTop: "30px" }}>
        <p style={line}>This is to certify that</p>
        {patientName ? <p style={line}>Name : {patientName}</p> : null}
        {registrationNo ? (
          <p style={line}>
            {registrationLabel}: {registrationNo}
          </p>
        ) : null}
        {emiratesId ? <p style={line}>Emirates ID : {emiratesId}</p> : null}
        {dateOfBirth ? <p style={line}>Date of Birth : {dateOfBirth}</p> : null}
        {ageGender ? <p style={line}>Age / Gender : {ageGender}</p> : null}
        {nationality ? <p style={line}>Nationality : {nationality}</p> : null}
        {patientPhone ? <p style={line}>Phone No : {patientPhone}</p> : null}
        {insuranceProvider ? (
          <p style={line}>Insurance Provider : {insuranceProvider}</p>
        ) : null}
        {memberPolicyNo ? <p style={line}>Member ID / Policy No : {memberPolicyNo}</p> : null}
        <p style={line}>Company:{company ? ` ${company}` : ""}</p>

        {attendedAt || attendedOn ? (
          <p style={{ ...line, marginTop: "34px" }}>
            Has attended{attendedAt ? ` ${attendedAt}` : ""}
            {attendedOn ? ` on ${attendedOn}` : ""}
          </p>
        ) : null}

        {diagnosisCodes ? (
          <p style={{ ...line, marginTop: "34px", whiteSpace: "pre-wrap" }}>
            And has been diagnosed with {diagnosisCodes}
          </p>
        ) : null}

        <p style={{ ...line, marginTop: diagnosisCodes ? "14px" : "34px" }}>
          Remarks:{remarks ? ` ${remarks}` : ""}
        </p>

        {closingStatement ? (
          <p style={{ ...line, marginTop: "34px" }}>{closingStatement}</p>
        ) : null}

        {/* Doctor block */}
        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 230px",
            alignItems: "start",
            columnGap: "28px",
          }}
        >
          <div>
            {doctorName ? <p style={line}>Doctor&apos;s Name: {doctorName}</p> : null}
            {specialty ? <p style={line}>Specialty: {specialty}</p> : null}
            {licenseNo ? (
              <p style={line}>
                {licenseLabel}: {licenseNo}
              </p>
            ) : null}
          </div>
          <img
            src={STAMP_PATH}
            alt="Dr. Joseph Polyclinic stamp"
            style={{
              width: "20use thees codehere 0px",
              height: "96px",
              objectFit: "cover",
              justifySelf: "center",
              transform: "rotate(-9deg)",
              transformOrigin: "center",
            }}
          />
        </div>

        {/* Signature / seal strip */}
        <div
          style={{
            marginTop: "78px",
            display: "grid",
            gridTemplateColumns: "145px 1fr 145px",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          <p style={line}>Signature:</p>
          <img
            src={SIGNATURE_PATH}
            alt="Dr T S Sateesh signature"
            style={{
              width: "330px",
              height: "158px",
              objectFit: "cover",
              justifySelf: "center",
              
            }}
          />
          <p style={{ ...line, justifySelf: "middle" }}>Seal:</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { MedicalCertificateData } from "../../data/mockData";
import {
  PAD,
  RULE,
  ParkFooterRule,
  ParkMasthead,
  labelStyle,
  pageStyle,
  sectionTitleStyle,
} from "../shared/ParkComponents";

interface MedicalCertificateTemplateProps {
  data: MedicalCertificateData;
}

const body: React.CSSProperties = {
  margin: 0,
  fontSize: "13px",
  lineHeight: 1.65,
  whiteSpace: "pre-wrap",
};

const strong: React.CSSProperties = {
  fontWeight: "bold",
  letterSpacing: "0.2px",
};

export default function Template2({ data }: MedicalCertificateTemplateProps) {
  const text = (key: keyof MedicalCertificateData) => `${data[key] ?? ""}`.trim();

  const patientTitle = text("patientTitle");
  const patientName = text("patientName");
  const ageYears = text("ageYears");
  const guardianName = text("guardianName");
  const address = text("address");
  const identificationMark = text("identificationMark");
  const diagnosis = text("diagnosis");
  const treatedFrom = text("treatedFrom");
  const treatedTo = text("treatedTo");
  const restDays = text("restDays");
  const fitFrom = text("fitFrom");
  const remarks = text("remarks");
  const doctorName = text("doctorName");
  const doctorQualification = text("doctorQualification");
  const doctorRegNo = text("doctorRegNo");

  /* Real certificates print both pronouns and the issuer strikes one through -
     the form has no gender field, so reproducing that is honest rather than a guess. */
  const pronoun = "He / She";

  return (
    <div style={pageStyle}>
      <ParkMasthead data={data} />

      {/* ══════════════ Title ══════════════ */}
      <div style={{ padding: `10px ${PAD}px 0`, textAlign: "center" }}>
        <h1
          style={{
            margin: 0,
            display: "inline-block",
            fontSize: "17px",
            fontWeight: "bold",
            letterSpacing: "2.4px",
            borderBottom: `1.6px solid ${RULE}`,
            paddingBottom: "3px",
          }}
        >
          MEDICAL CERTIFICATE
        </h1>
      </div>

      {/* ══════════════ Certificate no. / date ══════════════ */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          padding: `14px ${PAD}px 0`,
        }}
      >
        <span style={{ fontSize: "12.5px" }}>
          <span style={labelStyle}>Certificate No.&nbsp;:</span>{" "}
          <span style={strong}>{text("certificateNo")}</span>
        </span>
        <span style={{ fontSize: "12.5px" }}>
          <span style={labelStyle}>Date&nbsp;:</span> <span style={strong}>{text("date")}</span>
        </span>
      </div>

      {/* ══════════════ Body ══════════════ */}
      <div style={{ flex: 1, padding: `14px ${PAD}px 0`, display: "flex", flexDirection: "column" }}>
        <p style={{ ...body, textAlign: "justify" }}>
          This is to certify that I have examined{" "}
          {patientTitle ? (
            <span style={{ fontStyle: "italic", fontSize: "12px" }}>{patientTitle}&nbsp;</span>
          ) : null}
          <span style={strong}>{patientName}</span>
          {ageYears ? (
            <>
              , aged <span style={strong}>{ageYears}</span> years
            </>
          ) : null}
          {guardianName ? (
            <>
              , <span style={strong}>{guardianName}</span>
            </>
          ) : null}
          {address ? (
            <>
              , resident of <span style={strong}>{address}</span>
            </>
          ) : null}
          .
        </p>

        {identificationMark ? (
          <p style={{ ...body, marginTop: "8px" }}>
            <span style={labelStyle}>Identification Mark&nbsp;:</span>{" "}
            <span style={strong}>{identificationMark}</span>
          </p>
        ) : null}

        {diagnosis ? (
          <section style={{ marginTop: "14px" }}>
            <p style={sectionTitleStyle}>DIAGNOSIS</p>
            <p style={body}>{diagnosis}</p>
          </section>
        ) : null}

        {treatedFrom || treatedTo || restDays ? (
          <p style={{ ...body, marginTop: "14px", textAlign: "justify" }}>
            {pronoun} was under my treatment
            {treatedFrom ? (
              <>
                {" "}
                from <span style={strong}>{treatedFrom}</span>
              </>
            ) : null}
            {treatedTo ? (
              <>
                {" "}
                to <span style={strong}>{treatedTo}</span>
              </>
            ) : null}
            {restDays ? (
              <>
                {" "}
                and was advised complete rest for <span style={strong}>{restDays}</span>
              </>
            ) : null}
            .
          </p>
        ) : null}

        {fitFrom ? (
          <p style={{ ...body, marginTop: "10px", textAlign: "justify" }}>
            {pronoun} is now fit to resume normal duties with effect from{" "}
            <span style={strong}>{fitFrom}</span>.
          </p>
        ) : null}

        {remarks ? (
          <section style={{ marginTop: "14px" }}>
            <p style={sectionTitleStyle}>REMARKS</p>
            <p style={body}>{remarks}</p>
          </section>
        ) : null}

        {/* Signature block - pushed to the foot of the sheet, leaving room to sign by hand */}
        <div style={{ marginTop: "auto", paddingTop: "46px", display: "flex", justifyContent: "flex-end" }}>
          <div style={{ minWidth: "230px", textAlign: "center" }}>
            <div style={{ height: "44px" }} />
            <div style={{ borderTop: `1.2px solid ${RULE}`, marginBottom: "5px" }} />
            {doctorName ? (
              <div style={{ fontSize: "13px", fontWeight: "bold", letterSpacing: "0.3px" }}>
                {doctorName}
              </div>
            ) : null}
            {doctorQualification ? (
              <div style={{ fontSize: "11.5px", marginTop: "2px" }}>{doctorQualification}</div>
            ) : null}
            {doctorRegNo ? (
              <div style={{ fontSize: "11.5px", marginTop: "2px" }}>
                Reg. No.&nbsp;: {doctorRegNo}
              </div>
            ) : null}
            <div style={{ ...labelStyle, fontSize: "10.5px", marginTop: "4px" }}>
              Signature &amp; Seal
            </div>
          </div>
        </div>
      </div>

      <ParkFooterRule />
    </div>
  );
}

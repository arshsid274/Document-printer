import React from "react";
import { PrescriptionData } from "../../data/mockData";

interface PrescriptionTemplateProps {
  data: PrescriptionData;
}

/* Park Hospital letterhead – green sampled from the supplied logo artwork. */
const GREEN = "#015930";
const RULE = "#1a1a1a";
const ARIAL = "Arial, Helvetica, sans-serif";
/* Arial carries no Devanagari glyphs – name the fallbacks so the address line
   renders the same on macOS, Windows and Linux instead of picking whatever. */
const DEVANAGARI =
  "'Nirmala UI', 'Kohinoor Devanagari', 'Devanagari Sangam MN', 'Noto Sans Devanagari', Mangal, Arial, sans-serif";

const BAR_H = 74; // masthead height
const PAD = 26; // page side margin (≈7mm)

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

  const hasSignature = Boolean(
    `${data.doctorName ?? ""}`.trim() ||
      `${data.doctorQualification ?? ""}`.trim() ||
      `${data.doctorRegNo ?? ""}`.trim()
  );
  const department = `${data.department ?? ""}`.trim();
  const patientTitle = `${data.patientTitle ?? ""}`.trim();

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111",
    fontFamily: ARIAL,
  };

  const label: React.CSSProperties = {
    fontSize: "10.5px",
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#333",
    whiteSpace: "nowrap",
  };

  const value: React.CSSProperties = {
    fontSize: "12.5px",
    fontWeight: "bold",
    letterSpacing: "0.2px",
    // fixed grid tracks never grow – let a long unbroken value wrap instead of
    // running under the next column's label
    overflowWrap: "anywhere",
  };

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

  const sectionTitle: React.CSSProperties = {
    fontSize: "10.5px",
    fontWeight: "bold",
    fontStyle: "italic",
    letterSpacing: "0.4px",
    color: "#333",
    margin: "0 0 3px",
  };

  return (
    <div style={pageStyle}>
      {/* ══════════════ Masthead ══════════════ */}
      <div
        style={{
          minHeight: `${BAR_H}px`, // grows rather than letting a long department spill out of the green
          background: GREEN,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `0 ${PAD}px`,
        }}
      >
        <img
          src="/images/logos/park-logo.png"
          alt="Park Hospital"
          style={{ height: "46px", width: "auto", display: "block", flexShrink: 0 }}
        />
        {department ? (
          <div
            style={{
              textAlign: "right",
              color: "#fff",
              lineHeight: 1.05,
              minWidth: 0,
              paddingLeft: "12px",
            }}
          >
            <div style={{ fontSize: "9px", letterSpacing: "1.6px" }}>DEPARTMENT OF</div>
            <div
              style={{
                fontSize: "23px",
                fontWeight: "bold",
                letterSpacing: "1.4px",
                textTransform: "uppercase", // the letterhead sets this line in caps
              }}
            >
              {department}
            </div>
          </div>
        ) : null}
      </div>

      {/* address / phones */}
      <div
        style={{
          padding: `6px ${PAD}px 7px`, // side padding so a long address never touches the page edge
          textAlign: "center",
          fontFamily: DEVANAGARI,
          fontSize: "11.5px",
          fontWeight: "bold",
          color: "#111",
        }}
      >
        {data.addressLine}
      </div>

      {/* ══════════════ Patient block ══════════════ */}
      <div style={{ padding: `0 ${PAD}px` }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "78px 250px 40px 1fr 56px 100px",
            alignItems: "baseline",
            rowGap: "9px",
            columnGap: "6px",
          }}
        >
          <span style={label}>Patient&apos;s Name</span>
          <span style={value}>
            {patientTitle ? (
              <>
                <span style={{ fontWeight: "normal", fontStyle: "italic", fontSize: "11.5px" }}>
                  {patientTitle}
                </span>
                &nbsp;&nbsp;
              </>
            ) : null}
            {data.patientName}
          </span>
          <span style={label}>Pt.ID.</span>
          <span style={value}>{data.patientId}</span>
          <span style={label}>Age/Sex</span>
          <span style={value}>{data.ageSex}</span>

          <span style={label}>Ref. by Dr.</span>
          <span style={value}>{data.refByDoctor}</span>
          <span />
          <span />
          <span style={label}>Date</span>
          <span style={value}>{data.date}</span>
        </div>

        <div style={{ borderTop: `1.4px solid ${RULE}`, marginTop: "9px" }} />
      </div>

      {/* ══════════════ Body ══════════════ */}
      <div style={{ flex: 1, padding: `12px ${PAD}px 0`, display: "flex", flexDirection: "column" }}>
        {`${data.complaints ?? ""}`.trim() ? (
          <section style={{ marginBottom: "10px" }}>
            <p style={sectionTitle}>CHIEF COMPLAINTS</p>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.4, whiteSpace: "pre-wrap" }}>
              {data.complaints}
            </p>
          </section>
        ) : null}

        {`${data.diagnosis ?? ""}`.trim() ? (
          <section style={{ marginBottom: "12px" }}>
            <p style={sectionTitle}>DIAGNOSIS</p>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.4, whiteSpace: "pre-wrap" }}>
              {data.diagnosis}
            </p>
          </section>
        ) : null}

        {/* Rx – heading and column headers only exist when there is something to list */}
        {medicines.length > 0 ? (
          <>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "2px" }}>
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
            <p style={sectionTitle}>ADVICE</p>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.45, whiteSpace: "pre-wrap" }}>
              {data.advice}
            </p>
          </section>
        ) : null}

        {`${data.followUp ?? ""}`.trim() ? (
          <p style={{ margin: "14px 0 0", fontSize: "13px" }}>
            <span style={{ ...label, fontSize: "11.5px" }}>Follow-up&nbsp;:</span>{" "}
            <span style={{ fontWeight: "bold" }}>{data.followUp}</span>
          </p>
        ) : null}

        {/* signature – pinned above the bottom margin */}
        {hasSignature ? (
          <div style={{ marginTop: "auto", paddingTop: "26px", textAlign: "right" }}>
            <div style={{ display: "inline-block", textAlign: "left", minWidth: "210px" }}>
              <div style={{ borderTop: `1px solid ${RULE}`, marginBottom: "5px" }} />
              {`${data.doctorName ?? ""}`.trim() ? (
                <div style={{ fontSize: "13.5px", fontWeight: "bold" }}>{data.doctorName}</div>
              ) : null}
              {`${data.doctorQualification ?? ""}`.trim() ? (
                <div style={{ fontSize: "11.5px", color: "#333" }}>{data.doctorQualification}</div>
              ) : null}
              {`${data.doctorRegNo ?? ""}`.trim() ? (
                <div style={{ fontSize: "11.5px", color: "#333" }}>Reg. No. {data.doctorRegNo}</div>
              ) : null}
            </div>
          </div>
        ) : (
          <div style={{ marginTop: "auto" }} />
        )}
      </div>

      {/* ══════════════ Footer rule ══════════════ */}
      <div style={{ height: "9px", background: GREEN, marginTop: "22px" }} />
    </div>
  );
}

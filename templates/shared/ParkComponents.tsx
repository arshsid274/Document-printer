import React from "react";
import { PrescriptionData } from "../../data/mockData";

/*
 * Park Hospital letterhead, shared by every prescription template.
 * Green sampled from the supplied logo artwork; layout follows the printed sheet
 * (green masthead bar, Devanagari address line, two-row patient block, rule).
 */

export const GREEN = "#015930";
export const RULE = "#1a1a1a";
export const ARIAL = "Arial, Helvetica, sans-serif";
/* Arial carries no Devanagari glyphs – name the fallbacks so the address line
   renders the same on macOS, Windows and Linux instead of picking whatever. */
export const DEVANAGARI =
  "'Nirmala UI', 'Kohinoor Devanagari', 'Devanagari Sangam MN', 'Noto Sans Devanagari', Mangal, Arial, sans-serif";

export const BAR_H = 74; // masthead height
export const PAD = 26; // page side margin (≈7mm)

export const pageStyle: React.CSSProperties = {
  width: "100%",
  minHeight: "297mm",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  background: "#fff",
  color: "#111",
  fontFamily: ARIAL,
};

export const labelStyle: React.CSSProperties = {
  fontSize: "10.5px",
  fontStyle: "italic",
  fontWeight: "bold",
  color: "#333",
  whiteSpace: "nowrap",
};

export const valueStyle: React.CSSProperties = {
  fontSize: "12.5px",
  fontWeight: "bold",
  letterSpacing: "0.2px",
  // fixed grid tracks never grow – let a long unbroken value wrap instead of
  // running under the next column's label
  overflowWrap: "anywhere",
};

export const sectionTitleStyle: React.CSSProperties = {
  fontSize: "10.5px",
  fontWeight: "bold",
  fontStyle: "italic",
  letterSpacing: "0.4px",
  color: "#333",
  margin: "0 0 3px",
};

/* The masthead only needs the two letterhead fields, so every Park sheet
   (prescription, medical certificate, ...) can share it. */
export interface ParkLetterheadData {
  [key: string]: string | number;
  department: string;
  addressLine: string;
}

/** Green bar: logo left, DEPARTMENT OF <name> right. Plus the address line under it. */
export function ParkMasthead({ data }: { data: ParkLetterheadData }) {
  const department = `${data.department ?? ""}`.trim();

  return (
    <>
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
    </>
  );
}

/** Two-row patient block, closed by the horizontal rule. */
export function ParkPatientBlock({ data }: { data: PrescriptionData }) {
  const patientTitle = `${data.patientTitle ?? ""}`.trim();

  return (
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
        <span style={labelStyle}>Patient&apos;s Name</span>
        <span style={valueStyle}>
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
        <span style={labelStyle}>Pt.ID.</span>
        <span style={valueStyle}>{data.patientId}</span>
        <span style={labelStyle}>Age/Sex</span>
        <span style={valueStyle}>{data.ageSex}</span>

        <span style={labelStyle}>Ref. by Dr.</span>
        <span style={valueStyle}>{data.refByDoctor}</span>
        <span />
        <span />
        <span style={labelStyle}>Date</span>
        <span style={valueStyle}>{data.date}</span>
      </div>

      <div style={{ borderTop: `1.4px solid ${RULE}`, marginTop: "9px" }} />
    </div>
  );
}

/* The signature block (rule + doctor name / qualification / Reg. No.) was removed
   from both prescription templates – the sheets are signed by hand. The
   doctorName / doctorQualification / doctorRegNo keys stay on PrescriptionData so
   the block can be restored without a data migration. */

/** Green rule closing the sheet. */
export function ParkFooterRule() {
  return <div style={{ height: "9px", background: GREEN, marginTop: "22px" }} />;
}

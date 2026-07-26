import React from "react";
import { UltrasoundReportData } from "../../data/mockData";

interface UltrasoundReportTemplateProps {
  data: UltrasoundReportData;
}

/*
 * Geometry and colours below are digitised from the original letterhead
 * (Ultrasound.pdf – header artwork Im1 and the page's text operators),
 * expressed in CSS px on a 794 x 1123 A4 page (210mm = 794px).
 */

// ── palette sampled from the scan ──────────────────────────────────────────
const PANEL = "#3d3d3a"; // charcoal masthead panel
const BAND = "#75b3ac"; // seafoam arch band
const NAME_INK = "#eef4f6"; // centre name (pale blue-white)
const WHITE_INK = "#fbfbfb"; // address / qualification lines
const CREAM_INK = "#f7f8cf"; // radiologist name + designation
const ID_INK = "#3b4242"; // report-id stamp
const FOOTER_BG = "#7cc0b8";
const FOOTER_EDGE = "#66aaa2";

// ── fonts ─────────────────────────────────────────────────────────────────
const ARIAL = "Arial, Helvetica, sans-serif";
const CALIBRI = "Calibri, Candara, 'Segoe UI', 'Trebuchet MS', Arial, sans-serif";
const MS_SANS = "'Microsoft Sans Serif', Arial, Helvetica, sans-serif";
const SCRIPT = "'Segoe Script', 'Brush Script MT', 'Apple Chancery', cursive";
const CONDENSED_SERIF = "Georgia, 'Times New Roman', serif";

// ── page metrics ──────────────────────────────────────────────────────────
const HEADER_H = 250; // letterhead artwork height
const COL_W = 590.5; // justified column width, as measured off the original
/* The original was typed with lopsided margins (31.9mm left / 22mm right).
   Keep its column width – so every measured line break is preserved – but centre
   it, giving equal margins on both sides. */
const TEXT_L = (794 - COL_W) / 2; // 101.75
const TEXT_R = TEXT_L;
/* Offsets measured from the original's left margin, so they travel with the column. */
const META_RIGHT_COL = 419.2; // date / age-sex column
const SIG_INDENT = 407.5; // signature block

/* Body type scale. The original was typed at 12pt (16px) findings; everything
   below is expressed as `measured * S` so the whole report can be re-tuned from
   one number. S < 1 tightens the type and frees up white space at the foot. */
const S = 0.88;
const sz = (measured: number) => `${+(measured * S).toFixed(2)}px`;

/* Masthead insets. The original ran the radiologist block off the right edge;
   mirroring the centre-name inset keeps the letterhead balanced instead. */
const HEAD_L = 45.5;
const HEAD_R = 794 - HEAD_L; // 748.5

/** baseline -> line-box top, for line-height:1 (ascent ≈ 0.847em) */
const topFor = (baseline: number, fontSize: number) => baseline - fontSize * 0.847;

/* Arch: charcoal panel's bottom edge, apex at x≈400. */
const ARCH_TOP =
  "M0 223C90 178 240 133 392 130.3C470 129.5 530 136 584 150.7C650 166 730 203 794 240";
/* Band underside – broad at the left edge (28px), tapering to 5px at the right. */
const ARCH_BOTTOM =
  "L794 245C730 208 650 172 584 160.4C530 146 470 143.5 392 144.4C240 147 90 205 0 251Z";

function Letterhead({ data }: UltrasoundReportTemplateProps) {
  return (
    <svg
      viewBox={`0 0 794 ${HEADER_H}`}
      preserveAspectRatio="none"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: `${HEADER_H}px`, display: "block" }}
    >
      <path d={`M0 0H794V240C730 203 650 166 584 150.7C530 136 470 129.5 392 130.3C240 133 90 178 0 223Z`} fill={PANEL} />
      <path d={`${ARCH_TOP}${ARCH_BOTTOM}`} fill={BAND} />

      {/* centre name – condensed serif, width locked to the original 301px */}
      <text
        x={HEAD_L}
        y="73.5"
        textLength="301"
        lengthAdjust="spacingAndGlyphs"
        fontFamily={CONDENSED_SERIF}
        fontSize="35"
        fontWeight="bold"
        fill={NAME_INK}
      >
        {data.clinicName}
      </text>
      <text x={HEAD_L} y="99.5" fontFamily={ARIAL} fontSize="15.5" fontWeight="bold" fill={WHITE_INK}>
        {data.clinicAddress}
      </text>
      <text x={HEAD_L} y="120.2" fontFamily={ARIAL} fontSize="15.5" fontWeight="bold" fill={WHITE_INK}>
        Mob.: {data.clinicPhone}
      </text>

      {/* radiologist block – right-aligned to the page edge */}
      <text x={HEAD_R - 4} y="59" textAnchor="end" fontFamily={SCRIPT} fontSize="28" fontStyle="italic" fill={CREAM_INK}>
        {data.doctorName}
      </text>
      <text x={HEAD_R} y="80.5" textAnchor="end" fontFamily={ARIAL} fontSize="14.6" fill={WHITE_INK}>
        {data.doctorQualification}
      </text>
      <text x={HEAD_R} y="100.5" textAnchor="end" fontFamily={ARIAL} fontSize="14.6" fill={WHITE_INK}>
        {data.doctorHospital}
      </text>
      <text x={HEAD_R} y="118" textAnchor="end" fontFamily={ARIAL} fontSize="14.6" fontWeight="bold" fill={CREAM_INK}>
        {data.doctorDesignation}
      </text>
    </svg>
  );
}

export default function Template1({ data }: UltrasoundReportTemplateProps) {
  const findings = [
    data.liver,
    data.gallBladder,
    data.cbd,
    data.pancreas,
    data.spleen,
    data.diaphragm,
    data.rightKidney,
    data.leftKidney,
    data.urinaryBladder,
    data.prostate,
    data.uterus,
    data.adnexa,
    data.retroperitoneum,
    data.lymphNodes,
    data.ascites,
  ]
    .map((finding) => `${finding ?? ""}`.trim())
    .filter(Boolean);

  const impressionPoints = `${data.impression ?? ""}`
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const pageStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    background: "#fff",
    color: "#000",
    fontFamily: ARIAL,
  };

  /** absolutely-placed line, positioned by its baseline */
  const line = (baseline: number, fontSize: number, extra: React.CSSProperties): React.CSSProperties => ({
    position: "absolute",
    top: `${topFor(baseline, fontSize)}px`,
    fontSize: `${fontSize}px`,
    lineHeight: 1,
    whiteSpace: "nowrap",
    ...extra,
  });

  return (
    <div style={pageStyle}>
      {/* ══════════════ Letterhead ══════════════ */}
      <div style={{ position: "relative", height: `${HEADER_H}px` }}>
        <Letterhead data={data} />

        {/* logo – sits in the gap between the two text blocks (slot x 377–476) */}
        <img
          src="/images/logos/care-logo.png"
          alt={`${data.clinicName} logo`}
          style={{ position: "absolute", left: "371px", top: "46px", height: "89px", width: "auto" }}
        />

        {/* report id stamp – rides the arch on the left flank */}
        <div style={line(176, 14, { left: `${TEXT_L}px`, fontWeight: "bold", color: ID_INK, letterSpacing: "0.2px" })}>
          {data.reportId}
        </div>

        {/* REPORT – centred on the text column */}
        <div
          style={line(170.8, 16 * S, {
            left: `${TEXT_L}px`,
            width: `${COL_W}px`,
            textAlign: "center",
            fontWeight: "bold",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          })}
        >
          REPORT
        </div>

        {/* patient / referral rows */}
        <div style={line(219.4, 18 * S, { left: `${TEXT_L}px`, fontFamily: CALIBRI, fontWeight: "bold" })}>
          PATIENT NAME- {data.patientName}
        </div>
        <div
          style={line(220, 18 * S, {
            left: `${TEXT_L + META_RIGHT_COL}px`,
            fontFamily: CALIBRI,
            fontWeight: "bold",
          })}
        >
          {data.reportDate}
        </div>
        <div style={line(255, 18 * S, { left: `${TEXT_L}px`, fontFamily: CALIBRI, fontWeight: "bold" })}>
          REF BY- {data.referredBy}
        </div>
        <div
          style={line(255.5, 18 * S, {
            left: `${TEXT_L + META_RIGHT_COL + 4.6}px`,
            fontFamily: CALIBRI,
            fontWeight: "bold",
          })}
        >
          AGE/SEX {data.ageSex}
        </div>

        {/* study title */}
        <div
          style={line(296.5, 18.7 * S, {
            left: `${TEXT_L}px`,
            width: `${COL_W}px`,
            textAlign: "center",
            fontWeight: "bold",
          })}
        >
          {data.studyTitle}
        </div>
      </div>

      {/* ══════════════ Findings ══════════════ */}
      <div style={{ position: "relative", flex: 1, paddingLeft: `${TEXT_L}px`, paddingRight: `${TEXT_R}px` }}>
        <section
          style={{
            marginTop: "56.4px", // first baseline lands on 321
            fontSize: sz(16),
            lineHeight: sz(18.1),
            textAlign: "justify",
            whiteSpace: "pre-wrap",
          }}
        >
          {findings.map((finding, index) => (
            <p key={index} style={{ margin: `0 0 ${sz(11.6)}` }}>
              {finding}
            </p>
          ))}
        </section>

        <h3
          style={{
            margin: `${sz(19.9)} 0 0`,
            fontSize: sz(17.3),
            lineHeight: 1,
            fontFamily: MS_SANS,
            fontWeight: "bold",
            textDecoration: "underline",
            textUnderlineOffset: "2px",
          }}
        >
          IMPRESSION
        </h3>

        <ul
          style={{
            margin: `${sz(15.2)} 0 0`,
            paddingLeft: sz(60),
            listStyleType: "disc",
            fontFamily: MS_SANS,
            fontSize: sz(17.3),
            lineHeight: 1.2,
            fontWeight: "bold",
          }}
        >
          {impressionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {/* signature */}
        <div
          style={{
            position: "relative",
            marginTop: sz(46),
            marginLeft: `${SIG_INDENT}px`,
            fontFamily: MS_SANS,
            fontSize: sz(17.3),
            lineHeight: sz(21.1),
            fontWeight: "bold",
          }}
        >
          {/* scanned signature, sitting over the name as on the original */}
          <img
            src="/images/logos/sarwat-signature.png"
            alt=""
            style={{ position: "absolute", left: sz(34), top: `-${sz(14)}`, width: sz(44), height: "auto" }}
          />
          <div>{data.signatoryName}</div>
          <div>{data.signatoryQualification}</div>
        </div>
      </div>

      {/* ══════════════ Footer bar ══════════════ */}
      <div style={{ marginTop: "auto" }}>
        <div style={{ height: "2px", background: FOOTER_EDGE }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "31px",
            padding: "0 30px",
            background: FOOTER_BG,
            color: "#fff",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          <span style={{ fontStyle: "italic" }}>{data.footerTiming}</span>
          <span>{data.footerNote}</span>
        </div>
      </div>
    </div>
  );
}

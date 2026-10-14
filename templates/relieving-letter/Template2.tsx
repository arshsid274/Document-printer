import React from "react";
import { RelievingLetter2Data } from "../../data/mockData";

/*
 * "Experience Cum Relieving Letter" - corporate HR letterhead style
 * (modelled on the Teleperformance letter). Wordmark masthead, a thin rule,
 * date, centred underlined heading, three body paragraphs assembled from the
 * fields, a "For <company>" sign-off with signatory block, and a small legal
 * footer repeating the registered-office details.
 */

const INK = "#1a1a1a";
const MUTED = "#555";
const RULE = "#cfcfcf";

function text(value: string | number): string {
  return `${value ?? ""}`.trim();
}

function lines(value: string | number): string[] {
  return `${value ?? ""}`
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

/* Brand social glyphs, as on the original letterhead. Matched to a line by the
   host in its URL, so "linkedin.com/…", "twitter.com/…", "facebook.com/…" each
   get their icon; anything else (the plain website) renders with no icon. */
function SocialIcon({ line }: { line: string }) {
  const host = line.toLowerCase();
  const box: React.CSSProperties = { width: "2.7mm", height: "2.7mm", flexShrink: 0 };
  if (host.includes("linkedin")) {
    return (
      <svg viewBox="0 0 24 24" style={box} fill="#0A66C2" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }
  if (host.includes("twitter") || host.includes("x.com")) {
    return (
      <svg viewBox="0 0 24 24" style={box} fill="#1DA1F2" aria-hidden="true">
        <path d="M23.95 4.57a10 10 0 0 1-2.82.78 4.96 4.96 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.49A13.98 13.98 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57A4.9 4.9 0 0 1 .96 9.1v.06a4.93 4.93 0 0 0 3.95 4.83 4.93 4.93 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 19.54a13.94 13.94 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A9.9 9.9 0 0 0 24 4.59l-.05-.02Z" />
      </svg>
    );
  }
  if (host.includes("facebook")) {
    return (
      <svg viewBox="0 0 24 24" style={box} fill="#1877F2" aria-hidden="true">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07Z" />
      </svg>
    );
  }
  return null;
}

interface Props {
  data: RelievingLetter2Data;
}

export default function Template2({ data }: Props) {
  const logoPath = text(data.logoPath);
  const sig = text(data.signaturePath);
  const subject = text(data.pronounSubject) || "He";
  const possessive = text(data.pronounPossessive) || "His";
  const name = `${text(data.salutation)} ${text(data.employeeName)}`.trim();

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    padding: "16mm 16mm 10mm",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: INK,
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "0.9rem",
    lineHeight: 1.6
  };

  const body: React.CSSProperties = { margin: "0 0 4.5mm", textAlign: "justify" };

  return (
    <div className="usg-sheet" style={pageStyle}>
      {/* ══════════════ Masthead: TP logo + wordmark (left), social (right) ══════ */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "3mm" }}>
          {logoPath ? (
            <img
              src={logoPath}
              alt={text(data.companyShortName) || "Company"}
              style={{ height: "12mm", width: "auto", objectFit: "contain" }}
            />
          ) : null}
          {text(data.companyShortName) ? (
            <div style={{ fontSize: "1.45rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
              {text(data.companyShortName)}
            </div>
          ) : null}
        </div>
        {lines(data.headerRightLines).length > 0 ? (
          <div style={{ fontSize: "0.68rem", color: MUTED, lineHeight: 1.7 }}>
            {lines(data.headerRightLines).map((line, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "1.5mm" }}
              >
                <SocialIcon line={line} />
                <span>{line}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div style={{ borderTop: `1px solid ${RULE}`, margin: "4mm 0 0" }} />

      {/* ══════════════ Date ══════════════ */}
      <p style={{ margin: "10mm 0 0", fontWeight: 700 }}>{text(data.letterDate)}</p>

      {/* ══════════════ Heading ══════════════ */}
      <div style={{ textAlign: "center", margin: "12mm 0 10mm" }}>
        <span
          style={{
            fontWeight: 700,
            textDecoration: "underline",
            textUnderlineOffset: "2px",
            letterSpacing: "0.02em"
          }}
        >
          {text(data.heading) || "TO WHOMSOEVER IT MAY CONCERN"}
        </span>
      </div>

      {/* ══════════════ Body ══════════════ */}
      <p style={body}>
        This is to certify that <strong>{name}</strong>, EMP Code -{" "}
        <strong>{text(data.empCode)}</strong> was working with us from{" "}
        <strong>{text(data.fromDate)}</strong> to <strong>{text(data.toDate)}</strong>.{" "}
        {possessive} last designation with the company was{" "}
        <strong>{text(data.designation)}</strong>. {subject} has been relieved from{" "}
        {possessive.toLowerCase()} services on{" "}
        <strong>{text(data.relievedDate) || text(data.toDate)}</strong> with{" "}
        <strong>{text(data.companyLegalName)}</strong> at the closing of business hours.
      </p>

      {text(data.noticeClause) ? <p style={body}>{text(data.noticeClause)}</p> : null}

      {text(data.closingLine) ? <p style={body}>{text(data.closingLine)}</p> : null}

      {/* ══════════════ Sign-off ══════════════ */}
      <div style={{ marginTop: "8mm" }}>
        <p style={{ margin: 0, fontWeight: 700 }}>For {text(data.companyLegalName)}</p>
        {sig ? (
          <img
            src={sig}
            alt="Authorised signatory signature"
            style={{ marginTop: "3mm", height: "13mm", width: "auto", objectFit: "contain", display: "block" }}
          />
        ) : (
          <div style={{ height: "14mm" }} />
        )}
        <p style={{ margin: 0, fontWeight: 700 }}>{text(data.signatoryName)}</p>
        {text(data.signatoryTitle) ? (
          <p style={{ margin: 0, fontWeight: 700 }}>{text(data.signatoryTitle)}</p>
        ) : null}
      </div>

      {/* push the footer to the foot of the sheet */}
      <div style={{ flex: 1 }} />

      {/* ══════════════ Legal footer ══════════════ */}
      <div style={{ borderTop: `1px solid ${RULE}`, paddingTop: "3mm", marginTop: "8mm" }}>
        <p style={{ margin: 0, fontSize: "0.66rem", color: MUTED, lineHeight: 1.45 }}>
          <strong style={{ color: INK }}>{text(data.companyLegalName)}</strong>
          {text(data.companyFormerName) ? ` ${text(data.companyFormerName)}` : ""}
        </p>
        {text(data.registeredOffice) ? (
          <p style={{ margin: "0.5mm 0 0", fontSize: "0.66rem", color: MUTED, lineHeight: 1.45 }}>
            {text(data.registeredOffice)}
          </p>
        ) : null}
        {text(data.contactLine) ? (
          <p style={{ margin: "0.5mm 0 0", fontSize: "0.66rem", color: MUTED, lineHeight: 1.45 }}>
            {text(data.contactLine)}
          </p>
        ) : null}
      </div>
    </div>
  );
}

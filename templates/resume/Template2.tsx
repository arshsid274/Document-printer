import React from "react";
import { ResumeData } from "../../data/mockData";

/*
 * Single-column "Rezi"-style resume: blue name, icon contact row, uppercase
 * section headings separated by thin full-width rules, blue job/degree titles.
 * ATS-friendly (one column, plain flow). Reuses the ResumeData field set; only
 * the sections this design shows are rendered (summary, experience, education,
 * skills), so achievements / languages / interests are simply left out here.
 */

const ACCENT = "#2f54eb";
const HEAD = "#2b2b2b";
const BODY = "#3a3d42";
const MUTED = "#6b7076";
const DIVIDER = "#e4e6e9";

function splitLines(value: string | number): string[] {
  return `${value ?? ""}`
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function text(value: string | number): string {
  return `${value ?? ""}`.trim();
}

interface ResumeTemplateProps {
  data: ResumeData;
}

/* ── minimal contact icons ── */
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: "3mm", height: "3mm", flexShrink: 0 }}
      fill="none"
      stroke={MUTED}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const PIN = (
  <>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>
);
const MAIL = (
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>
);
const PHONE = (
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
);
const LINK = (
  <>
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
    <path d="M10 9v12M10 14c0-3 6-3 6 0v7" />
  </>
);

function Rule() {
  return <div style={{ borderTop: `1px solid ${DIVIDER}`, margin: "4.5mm 0" }} />;
}

function Heading({ title }: { title: string }) {
  return (
    <h2
      style={{
        margin: "0 0 2.2mm",
        fontSize: "0.82rem",
        fontWeight: 800,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        color: HEAD
      }}
    >
      {title}
    </h2>
  );
}

export default function Template2({ data }: ResumeTemplateProps) {
  const experiences = [
    {
      title: text(data.exp1Title),
      company: text(data.exp1Company),
      period: text(data.exp1Period),
      location: text(data.exp1Location),
      details: splitLines(data.exp1Details)
    },
    {
      title: text(data.exp2Title),
      company: text(data.exp2Company),
      period: text(data.exp2Period),
      location: text(data.exp2Location),
      details: splitLines(data.exp2Details)
    },
    {
      title: text(data.exp3Title),
      company: text(data.exp3Company),
      period: text(data.exp3Period),
      location: text(data.exp3Location),
      details: splitLines(data.exp3Details)
    }
  ].filter((entry) => entry.title || entry.company);

  const education = [
    {
      degree: text(data.edu1Degree),
      institution: text(data.edu1Institution),
      period: text(data.edu1Period),
      location: text(data.edu1Location)
    },
    {
      degree: text(data.edu2Degree),
      institution: text(data.edu2Institution),
      period: text(data.edu2Period),
      location: text(data.edu2Location)
    }
  ].filter((entry) => entry.degree || entry.institution);

  const skills = splitLines(data.skills);

  const contactItems = [
    { glyph: PIN, label: text(data.location) },
    { glyph: MAIL, label: text(data.email) },
    { glyph: PHONE, label: text(data.phone) },
    { glyph: LINK, label: text(data.linkedin) }
  ].filter((item) => item.label);

  const metaLine = (period: string, location: string) =>
    [period, location].filter(Boolean).join(", ");

  const bullets = (points: string[]) =>
    points.length > 0 ? (
      <ul style={{ margin: "1.4mm 0 0", paddingLeft: "4.6mm" }}>
        {points.map((point, i) => (
          <li key={i} style={{ margin: "0 0 1mm", fontSize: "0.76rem", lineHeight: 1.45, color: BODY }}>
            {point}
          </li>
        ))}
      </ul>
    ) : null;

  return (
    <div
      style={{
        width: "100%",
        minHeight: "297mm",
        boxSizing: "border-box",
        padding: "13mm 14mm",
        background: "#fff",
        color: BODY,
        fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif'
      }}
    >
      {/* ── Header ── */}
      <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: 800, color: ACCENT, letterSpacing: "0.01em" }}>
        {text(data.fullName) || "Full Name"}
      </h1>
      {contactItems.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5mm 6mm",
            marginTop: "2.2mm",
            fontSize: "0.74rem",
            color: MUTED
          }}
        >
          {contactItems.map((item) => (
            <span key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: "1.4mm" }}>
              <Icon>{item.glyph}</Icon>
              {item.label}
            </span>
          ))}
        </div>
      ) : null}

      <Rule />

      {/* ── Summary ── */}
      {text(data.summary) ? (
        <>
          <section>
            <Heading title="Professional Summary" />
            <p style={{ margin: 0, fontSize: "0.79rem", lineHeight: 1.55, color: BODY }}>
              {text(data.summary)}
            </p>
          </section>
          <Rule />
        </>
      ) : null}

      {/* ── Experience ── */}
      {experiences.length > 0 ? (
        <>
          <section>
            <Heading title="Professional Experience" />
            {experiences.map((entry, index) => (
              <div key={index} style={{ marginBottom: index === experiences.length - 1 ? 0 : "4mm" }}>
                <p style={{ margin: 0, fontSize: "0.86rem", lineHeight: 1.35 }}>
                  <span style={{ fontWeight: 700, color: ACCENT }}>{entry.title}</span>
                  {entry.company ? (
                    <span style={{ color: HEAD, fontWeight: 600 }}> | {entry.company}</span>
                  ) : null}
                </p>
                {metaLine(entry.period, entry.location) ? (
                  <p style={{ margin: "0.6mm 0 0", fontSize: "0.73rem", color: MUTED }}>
                    {metaLine(entry.period, entry.location)}
                  </p>
                ) : null}
                {bullets(entry.details)}
              </div>
            ))}
          </section>
          <Rule />
        </>
      ) : null}

      {/* ── Education ── */}
      {education.length > 0 ? (
        <>
          <section>
            <Heading title="Education" />
            {education.map((entry, index) => (
              <div key={index} style={{ marginBottom: index === education.length - 1 ? 0 : "3mm" }}>
                <p style={{ margin: 0, fontSize: "0.86rem", lineHeight: 1.35 }}>
                  <span style={{ fontWeight: 700, color: ACCENT }}>{entry.degree}</span>
                  {entry.institution ? (
                    <span style={{ color: HEAD, fontWeight: 600 }}> | {entry.institution}</span>
                  ) : null}
                </p>
                {metaLine(entry.period, entry.location) ? (
                  <p style={{ margin: "0.6mm 0 0", fontSize: "0.73rem", color: MUTED }}>
                    {metaLine(entry.period, entry.location)}
                  </p>
                ) : null}
              </div>
            ))}
          </section>
          <Rule />
        </>
      ) : null}

      {/* ── Skills ── each line "Label: rest" bolds the label, like the reference ── */}
      {skills.length > 0 ? (
        <section>
          <Heading title="Expert-Level Skills" />
          <div style={{ display: "grid", rowGap: "1.4mm" }}>
            {skills.map((line, i) => {
              const colon = line.indexOf(":");
              if (colon > 0) {
                return (
                  <p key={i} style={{ margin: 0, fontSize: "0.78rem", lineHeight: 1.45, color: BODY }}>
                    <span style={{ fontWeight: 700, color: HEAD }}>{line.slice(0, colon + 1)}</span>
                    {line.slice(colon + 1)}
                  </p>
                );
              }
              return (
                <p key={i} style={{ margin: 0, fontSize: "0.78rem", lineHeight: 1.45, color: BODY }}>
                  {line}
                </p>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
}

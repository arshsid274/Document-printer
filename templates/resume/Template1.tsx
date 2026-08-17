import React from "react";
import { ResumeData } from "../../data/mockData";

interface ResumeTemplateProps {
  data: ResumeData;
}

const ACCENT = "#2178de";
const INK = "#16181d";
const BODY = "#3c4046";
const MUTED = "#585d64";
const DIVIDER = "#c9ced5";

function splitLines(value: string | number): string[] {
  return `${value ?? ""}`
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function text(value: string | number): string {
  return `${value ?? ""}`.trim();
}

/* ── Inline icons (lucide-style outlines) ── */

function Icon({
  children,
  color = MUTED,
  size = "3mm"
}: {
  children: React.ReactNode;
  color?: string;
  size?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      style={{ width: size, height: size, flexShrink: 0 }}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const CALENDAR = (
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </>
);

const PIN = (
  <>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </>
);

const PHONE = (
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
);

const MAIL = (
  <>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </>
);

const LINK = (
  <>
    <path d="M9 17H7A5 5 0 0 1 7 7h2" />
    <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
    <path d="M8 12h8" />
  </>
);

/* ── Building blocks ── */

function SectionHeading({ title }: { title: string }) {
  return (
    <h2
      style={{
        margin: "0 0 2.5mm",
        fontSize: "0.95rem",
        fontWeight: 800,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: INK,
        borderBottom: `2.5px solid ${INK}`,
        paddingBottom: "1.6mm"
      }}
    >
      {title}
    </h2>
  );
}

function MetaRow({ period, location }: { period: string; location: string }) {
  if (!period && !location) return null;
  const itemStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "1.4mm"
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5mm", marginTop: "1mm", fontSize: "0.72rem", color: MUTED }}>
      {period ? (
        <span style={itemStyle}>
          <Icon size="2.7mm">{CALENDAR}</Icon>
          {period}
        </span>
      ) : null}
      {location ? (
        <span style={itemStyle}>
          <Icon size="2.7mm">{PIN}</Icon>
          {location}
        </span>
      ) : null}
    </div>
  );
}

function RatingBars({ value }: { value: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <div style={{ display: "flex", gap: "1.2mm" }}>
      {[1, 2, 3, 4, 5].map((step) => (
        <span
          key={step}
          style={{
            width: "1.6mm",
            height: "4.2mm",
            borderRadius: "0.8mm",
            transform: "skewX(-14deg)",
            background: step <= filled ? ACCENT : "#d7dce2"
          }}
        />
      ))}
    </div>
  );
}

export default function Template1({ data }: ResumeTemplateProps) {
  const skills = splitLines(data.skills);

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

  const achievements = [
    { title: text(data.ach1Title), body: text(data.ach1Text) },
    { title: text(data.ach2Title), body: text(data.ach2Text) },
    { title: text(data.ach3Title), body: text(data.ach3Text) },
    { title: text(data.ach4Title), body: text(data.ach4Text) }
  ].filter((entry) => entry.title);

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

  const courses = [
    { title: text(data.course1Title), body: text(data.course1Text) },
    { title: text(data.course2Title), body: text(data.course2Text) }
  ].filter((entry) => entry.title);

  const interests = [
    { title: text(data.int1Title), body: text(data.int1Text) },
    { title: text(data.int2Title), body: text(data.int2Text) }
  ].filter((entry) => entry.title);

  const languages = [
    { name: text(data.lang1Name), level: text(data.lang1Level), rating: Number(data.lang1Rating) || 0 },
    { name: text(data.lang2Name), level: text(data.lang2Level), rating: Number(data.lang2Rating) || 0 },
    { name: text(data.lang3Name), level: text(data.lang3Level), rating: Number(data.lang3Rating) || 0 }
  ].filter((entry) => entry.name);

  const contactItems = [
    { glyph: PHONE, label: text(data.phone) },
    { glyph: MAIL, label: text(data.email) },
    { glyph: LINK, label: text(data.linkedin) },
    { glyph: PIN, label: text(data.location) }
  ].filter((item) => item.label);

  const sectionGap: React.CSSProperties = { marginTop: "5.5mm" };
  const rightBodyText: React.CSSProperties = { margin: 0, fontSize: "0.76rem", lineHeight: 1.5, color: BODY };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "297mm",
        boxSizing: "border-box",
        padding: "10mm 11mm",
        background: "#fff",
        color: INK,
        fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* ── Header ── */}
      <header>
        <h1 style={{ margin: 0, fontSize: "1.85rem", fontWeight: 800, letterSpacing: "0.02em", textTransform: "uppercase" }}>
          {text(data.fullName) || "Full Name"}
        </h1>
        {text(data.jobTitle) ? (
          <p style={{ margin: "1mm 0 0", fontSize: "0.95rem", fontWeight: 700, color: ACCENT }}>{text(data.jobTitle)}</p>
        ) : null}
        {contactItems.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2mm 5mm",
              marginTop: "2mm",
              fontSize: "0.76rem",
              fontWeight: 600,
              color: "#2b2e33"
            }}
          >
            {contactItems.map((item) => (
              <span key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: "1.4mm" }}>
                <Icon color={ACCENT} size="2.9mm">
                  {item.glyph}
                </Icon>
                {item.label}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      {/* ── Two-column body ── */}
      <div style={{ display: "flex", gap: "8mm", marginTop: "5mm", alignItems: "flex-start", flex: 1 }}>
        {/* ── Left column ── */}
        <div style={{ flex: "62 1 0", minWidth: 0 }}>
          {text(data.summary) ? (
            <section>
              <SectionHeading title="Summary" />
              <p style={{ margin: 0, fontSize: "0.8rem", lineHeight: 1.55, color: BODY }}>{text(data.summary)}</p>
            </section>
          ) : null}

          {experiences.length > 0 ? (
            <section style={sectionGap}>
              <SectionHeading title="Experience" />
              {experiences.map((entry, index) => (
                <div key={`${entry.title}-${index}`} style={{ marginBottom: index === experiences.length - 1 ? 0 : "4.5mm" }}>
                  <p style={{ margin: 0, fontSize: "0.95rem", fontWeight: 600 }}>{entry.title}</p>
                  {entry.company ? (
                    <p style={{ margin: "0.6mm 0 0", fontSize: "0.84rem", fontWeight: 700, color: ACCENT }}>{entry.company}</p>
                  ) : null}
                  <MetaRow period={entry.period} location={entry.location} />
                  {entry.details.length > 0 ? (
                    <ul style={{ margin: "1.5mm 0 0", paddingLeft: "4.5mm", fontSize: "0.79rem", lineHeight: 1.5, color: BODY }}>
                      {entry.details.map((point) => (
                        <li key={point} style={{ marginBottom: "1mm" }}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </section>
          ) : null}

          {languages.length > 0 ? (
            <section style={sectionGap}>
              <SectionHeading title="Languages" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "10mm", rowGap: "3mm" }}>
                {languages.map((lang) => (
                  <div key={lang.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "4mm" }}>
                    <div>
                      <p style={{ margin: 0, fontSize: "0.82rem", fontWeight: 700 }}>{lang.name}</p>
                      {lang.level ? <p style={{ margin: "0.4mm 0 0", fontSize: "0.72rem", color: MUTED }}>{lang.level}</p> : null}
                    </div>
                    <RatingBars value={lang.rating} />
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        {/* ── Right column ── */}
        <div style={{ flex: "38 1 0", minWidth: 0 }}>
          {achievements.length > 0 ? (
            <section>
              <SectionHeading title="Key Achievements" />
              {achievements.map((entry, index) => (
                <div
                  key={entry.title}
                  style={
                    index === achievements.length - 1
                      ? undefined
                      : { borderBottom: `1px dashed ${DIVIDER}`, paddingBottom: "2.6mm", marginBottom: "2.6mm" }
                  }
                >
                  <p style={{ margin: 0, fontSize: "0.82rem", fontWeight: 700 }}>{entry.title}</p>
                  {entry.body ? <p style={{ ...rightBodyText, marginTop: "1mm" }}>{entry.body}</p> : null}
                </div>
              ))}
            </section>
          ) : null}

          {skills.length > 0 ? (
            <section style={sectionGap}>
              <SectionHeading title="Skills" />
              <p style={{ margin: 0, fontSize: "0.8rem", lineHeight: 1.6, color: BODY }}>{skills.join(", ")}</p>
            </section>
          ) : null}

          {education.length > 0 ? (
            <section style={sectionGap}>
              <SectionHeading title="Education" />
              {education.map((entry, index) => (
                <div key={`${entry.degree}-${index}`} style={{ marginBottom: index === education.length - 1 ? 0 : "3.5mm" }}>
                  <p style={{ margin: 0, fontSize: "0.88rem", fontWeight: 600 }}>{entry.degree}</p>
                  {entry.institution ? (
                    <p style={{ margin: "0.6mm 0 0", fontSize: "0.8rem", fontWeight: 700, color: ACCENT }}>{entry.institution}</p>
                  ) : null}
                  <MetaRow period={entry.period} location={entry.location} />
                </div>
              ))}
            </section>
          ) : null}

          {courses.length > 0 ? (
            <section style={sectionGap}>
              <SectionHeading title="Training / Courses" />
              {courses.map((entry, index) => (
                <div key={entry.title} style={{ marginBottom: index === courses.length - 1 ? 0 : "3mm" }}>
                  <p style={{ margin: 0, fontSize: "0.8rem", fontWeight: 700, color: ACCENT }}>{entry.title}</p>
                  {entry.body ? <p style={{ ...rightBodyText, marginTop: "1mm" }}>{entry.body}</p> : null}
                </div>
              ))}
            </section>
          ) : null}

          {interests.length > 0 ? (
            <section style={sectionGap}>
              <SectionHeading title="Interests" />
              {interests.map((entry, index) => (
                <div key={entry.title} style={{ marginBottom: index === interests.length - 1 ? 0 : "3mm" }}>
                  <p style={{ margin: 0, fontSize: "0.82rem", fontWeight: 700 }}>{entry.title}</p>
                  {entry.body ? <p style={{ ...rightBodyText, marginTop: "1mm" }}>{entry.body}</p> : null}
                </div>
              ))}
            </section>
          ) : null}
        </div>
      </div>
    </div>
  );
}

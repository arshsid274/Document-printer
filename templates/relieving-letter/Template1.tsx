import React from "react";
import { RelievingLetterData } from "../../data/mockData";
import { DatcoDocHeader, DatcoFooterBar } from "../shared/DatcoComponents";

interface RelievingLetterTemplateProps {
  data: RelievingLetterData;
}

function parseDateValue(value: string): Date | null {
  const normalized = `${value ?? ""}`.trim();
  if (!normalized) return null;
  const strictDateMatch = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (strictDateMatch) {
    const [, year, month, day] = strictDateMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatLongDate(value: string): string {
  const parsed = parseDateValue(value);
  if (!parsed) return value;
  const day = `${parsed.getDate()}`.padStart(2, "0");
  const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(parsed);
  const year = parsed.getFullYear();
  return `${day} ${month} ${year}`;
}

const ROLES_SECTIONS = [
  {
    title: "1. Fire Safety Supervision",
    points: [
      "Monitor fire safety systems and ensure all installations comply with approved fire safety plans and regulations.",
      "Supervise fire protection works such as fire alarm systems, sprinkler systems, hydrant lines, extinguishers, and emergency exits.",
      "Coordinate with engineers, contractors, and site teams to ensure fire safety measures are properly implemented.",
    ],
  },
  {
    title: "2. Fire Safety Compliance & Inspection",
    points: [
      "Conduct regular inspections to ensure compliance with fire safety standards and statutory regulations.",
      "Ensure adherence to National Building Code (NBC), local fire authority guidelines, and other government safety norms.",
      "Verify materials and fire protection equipment to ensure they meet approved specifications.",
    ],
  },
  {
    title: "3. Risk Assessment & Hazard Control",
    points: [
      "Conduct fire risk assessments to identify potential hazards.",
      "Recommend corrective actions to eliminate or reduce fire risks.",
      "Investigate fire incidents and prepare detailed reports with preventive measures.",
    ],
  },
  {
    title: "4. Emergency Preparedness & Response",
    points: [
      "Develop and implement emergency evacuation plans.",
      "Conduct fire drills and emergency response training for employees and workers.",
      "Always ensure proper maintenance and accessibility of firefighting equipment.",
    ],
  },
  {
    title: "5. Safety Training & Awareness",
    points: [
      "Provide fire safety training programs for staff and workers.",
      "Educate employees on proper use of fire extinguishers and emergency procedures.",
      "Promote fire safety awareness across the workplace.",
    ],
  },
  {
    title: "6. Documentation & Reporting",
    points: [
      "Maintain fire safety records, inspection reports, and compliance documents.",
      "Prepare daily/weekly/monthly safety reports.",
      "Update the safety logs and ensure documentation is audit-ready.",
    ],
  },
  {
    title: "7. Coordination with Authorities",
    points: [
      "Liaise with Fire & Rescue Services and government authorities during inspections.",
      "Ensure timely renewal of fire safety certificates and approvals.",
      "Support management during statutory audits and compliance checks.",
    ],
  },
  {
    title: "8. Monitoring & Maintenance of Fire Systems",
    points: [
      "Conduct on-site verification of fire protection installations.",
      "Record variations and deviations from approved fire safety layouts.",
      "Update drawings and reports based on site execution.",
    ],
  },
];

export default function Template1({ data }: RelievingLetterTemplateProps) {
  const companyName = `${data.companyName || "DATCO CIVIL"}`.toUpperCase();
  const letterDate = formatLongDate(`${data.letterDate || ""}`);
  const joiningDate = formatLongDate(`${data.joiningDate || ""}`);
  const relievingDate = formatLongDate(`${data.relievingDate || ""}`);
  const referenceCode = `DATCO/HR/RL/${data.employeeId || "0000"}`;

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111111",
    fontFamily: "Arial, Helvetica, sans-serif",
  };

  const innerPad: React.CSSProperties = {
    padding: "8mm 12mm 6mm",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>

      {/* ══════════════ PAGE 1 – Relieving Letter ══════════════ */}
      <div style={pageStyle}>
        <div style={innerPad}>
          <DatcoDocHeader />

          <section style={{ marginTop: "6mm", borderBottom: "1px solid #000", paddingBottom: "3mm", textAlign: "center" }}>
            <h2 style={{ margin: 0, fontSize: "1.3rem", fontWeight: "bold", letterSpacing: "0.03em" }}>
              SERVICE CERTIFICATE
            </h2>
          </section>

          <section style={{ marginTop: "6mm", fontSize: "0.94rem", lineHeight: 1.65 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Ref: {referenceCode}</p>
              <p style={{ margin: 0, fontWeight: 600 }}>Date: {letterDate}</p>
            </div>

            <p style={{ margin: 0, marginTop: "6mm", fontWeight: 600 }}>To Whom It May Concern,</p>

            <p style={{ margin: 0, marginTop: "5mm" }}>
              This is to certify that <strong>{data.employeeName}</strong> (Employee ID:{" "}
              <strong>{data.employeeId}</strong>) was employed with <strong>{companyName}</strong> as{" "}
              <strong>{data.designation}</strong> from <strong>{joiningDate}</strong> to{" "}
              <strong>{relievingDate}</strong>.
            </p>

            <p style={{ margin: 0, marginTop: "4.5mm" }}>
              During the above period, the employee carried out assigned responsibilities with good
              conduct and professionalism. His/Her dedication and commitment to the role were highly
              appreciated. All duties and handover formalities have been completed, and the employee
              is hereby relieved from services of the company effective{" "}
              <strong>{relievingDate}</strong>.
            </p>
          </section>

          <h2 style={{ margin: "5mm 0 3mm", fontSize: "1rem", fontWeight: "bold", textDecoration: "underline", textAlign: "center" }}>
            {data.designation || "Fire & Safety Officer"} – Roles &amp; Responsibilities
          </h2>

          <div style={{ fontSize: "0.88rem", lineHeight: "1.58" }}>
            {ROLES_SECTIONS.slice(0, 4).map((sec) => (
              <div key={sec.title} style={{ marginBottom: "3mm" }}>
                <p style={{ margin: 0, fontWeight: "bold" }}>{sec.title}</p>
                <ul style={{ margin: "1mm 0 0", paddingLeft: "5mm", listStyleType: "disc" }}>
                  {sec.points.map((pt) => (
                    <li key={pt} style={{ marginBottom: "0.5mm" }}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <DatcoFooterBar />
      </div>

      {/* ══════════════ PAGE 2 – Roles & Responsibilities (continued) ══════════════ */}
      <div style={pageStyle}>
        <div style={innerPad}>
          <DatcoDocHeader />

          <div style={{ fontSize: "0.88rem", lineHeight: "1.58", marginTop: "4mm" }}>
            {ROLES_SECTIONS.slice(4).map((sec) => (
              <div key={sec.title} style={{ marginBottom: "3mm" }}>
                <p style={{ margin: 0, fontWeight: "bold" }}>{sec.title}</p>
                <ul style={{ margin: "1mm 0 0", paddingLeft: "5mm", listStyleType: "disc" }}>
                  {sec.points.map((pt) => (
                    <li key={pt} style={{ marginBottom: "0.5mm" }}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ margin: "6mm 0 0", fontSize: "0.94rem", lineHeight: 1.65 }}>
            We thank <strong>{data.employeeName}</strong> for the contributions made and wish all
            success in future endeavors.
          </p>

          <footer style={{ marginTop: "10mm", fontSize: "0.94rem" }}>
            <p style={{ margin: 0, fontWeight: 600 }}>For {companyName}</p>
            <img
              src="/images/logos/signatur2.png"
              alt="Authorised Signatory Signature"
              style={{ marginTop: "2.5mm", height: "12mm", width: "auto", objectFit: "contain", display: "block" }}
            />
            <p style={{ margin: 0, marginTop: "2mm", fontWeight: 600 }}>T. A. DAVIS</p>
            <p style={{ margin: 0 }}>PWD Contractor</p>
            <p style={{ margin: 0 }}>DATCO CIVIL Civil</p>
          </footer>
        </div>

        <DatcoFooterBar />
      </div>

    </div>
  );
}

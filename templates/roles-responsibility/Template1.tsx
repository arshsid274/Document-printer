import React from "react";
import { RolesResponsibilityData } from "../../data/mockData";
import { DatcoDocHeader, DatcoFooterBar } from "../shared/DatcoComponents";

interface RolesResponsibilityTemplateProps {
  data: RolesResponsibilityData;
}

const SECTIONS = [
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

export default function Template1({ data }: RolesResponsibilityTemplateProps) {
  const position = `${data.position || "Fire & Safety Officer"}`;

  const pageStyle: React.CSSProperties = {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#111111",
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    background: "#fff",
  };

  const innerPad: React.CSSProperties = {
    padding: "8mm 14mm 6mm",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={pageStyle}>
      <div style={innerPad}>
        <DatcoDocHeader />

        <h2
          style={{
            margin: "4mm 0 5mm",
            fontSize: "1rem",
            fontWeight: "bold",
            textDecoration: "underline",
            textAlign: "center",
          }}
        >
          {position} – Roles &amp; Responsibilities
        </h2>

        <div style={{ fontSize: "0.88rem", lineHeight: "1.58", flex: 1 }}>
          {SECTIONS.map((sec) => (
            <div key={sec.title} style={{ marginBottom: "3mm" }}>
              <p style={{ margin: 0, fontWeight: "bold" }}>{sec.title}</p>
              <ul style={{ margin: "1mm 0 0", paddingLeft: "5mm", listStyleType: "disc" }}>
                {sec.points.map((pt) => (
                  <li key={pt} style={{ marginBottom: "0.5mm" }}>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <DatcoFooterBar />
    </div>
  );
}

import React from "react";
import { PrescriptionData } from "../../data/mockData";
import {
  ParkFooterRule,
  ParkMasthead,
  ParkPatientBlock,
  PAD,
  pageStyle,
} from "../shared/ParkComponents";

interface PrescriptionTemplateProps {
  data: PrescriptionData;
}

/**
 * Blank prescription: the Park Hospital letterhead and the patient block only.
 * The body is left empty for the doctor to write on, with the signature held at
 * the foot of the sheet.
 */
export default function Template2({ data }: PrescriptionTemplateProps) {
  return (
    <div style={pageStyle}>
      <ParkMasthead data={data} />
      <ParkPatientBlock data={data} />

      {/* body deliberately empty – space to write the prescription by hand */}
      <div style={{ flex: 1, padding: `12px ${PAD}px 0`, display: "flex", flexDirection: "column" }} />

      <ParkFooterRule />
    </div>
  );
}

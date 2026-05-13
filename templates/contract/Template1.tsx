import React from "react";
import { ContractData } from "../../data/mockData";

interface ContractTemplateProps {
  data: ContractData;
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

function formatEuro(value: number | string): string {
  const numeric = typeof value === "number" ? value : Number(value);
  if (Number.isNaN(numeric)) return `${value}`;
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numeric);
}

function GlobalBuildersHeader() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: "3mm",
      }}
    >
      <img
        src="/images/logos/Global%20Builders.png"
        alt="Global Builders"
        style={{
          height: "12mm",
          width: "auto",
          objectFit: "contain",
          display: "block",
        }}
      />
    </header>
  );
}

function GlobalBuildersFooter({ page, total }: { page: number; total: number }) {
  return (
    <footer
      style={{
        marginTop: "auto",
        paddingTop: "3mm",
        fontSize: "0.72rem",
        color: "#222",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        Global Builders Construction Limited, Benghazi, Libya Zaho Tower Benghazi 6th floor,
        Office 601 434F+GCC
      </div>
      <div style={{ textAlign: "right", marginTop: "2mm", fontSize: "0.78rem" }}>
        Page {page} of {total}
      </div>
    </footer>
  );
}

export default function Template1({ data }: ContractTemplateProps) {
  const letterDate = formatLongDate(`${data.letterDate || ""}`);
  const commencementDate = formatLongDate(`${data.commencementDate || ""}`);
  const completionDate = formatLongDate(`${data.completionDate || ""}`);
  const handoverDate = formatLongDate(`${data.handoverDate || ""}`);

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "0.88rem",
    lineHeight: 1.45,
  };

  const innerPad: React.CSSProperties = {
    padding: "10mm 14mm 8mm",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  const pageWrapper = (index: number): React.CSSProperties => ({
    breakBefore: (index === 0 ? "auto" : "page") as React.CSSProperties["breakBefore"],
    pageBreakBefore: index === 0 ? "auto" : "always",
  });

  const body: React.CSSProperties = {
    margin: 0,
    textAlign: "justify",
  };

  const sectionHeading: React.CSSProperties = {
    margin: "3.5mm 0 1.5mm",
    fontSize: "0.95rem",
    fontWeight: 700,
  };

  const subItem: React.CSSProperties = {
    margin: "1.5mm 0 0 7mm",
    textAlign: "justify",
  };

  const tableCellHead: React.CSSProperties = {
    borderTop: "1px solid #111",
    borderBottom: "1.5px solid #111",
    borderLeft: "1px solid #111",
    borderRight: "1px solid #111",
    padding: "1.5mm 2.5mm",
    fontWeight: 700,
    background: "#ffffff",
    textAlign: "left",
    verticalAlign: "top",
    fontSize: "0.88rem",
  };

  const tableCell: React.CSSProperties = {
    border: "1px solid #111",
    padding: "1.5mm 2.5mm",
    verticalAlign: "top",
    fontSize: "0.88rem",
    lineHeight: 1.4,
  };

  const tableRefCell: React.CSSProperties = {
    ...tableCell,
    width: "14mm",
    fontWeight: 700,
    textAlign: "left",
  };

  const TOTAL_PAGES = 5;

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* ══════════════════ PAGE 1 ══════════════════ */}
      <div style={pageWrapper(0)}>
      <div style={pageStyle}>
        <div style={innerPad}>
        <GlobalBuildersHeader />

        <p style={{ margin: 0 }}>Date: {letterDate}</p>
        <p style={{ margin: 0 }}>Ref: {data.letterRef}</p>

        <p style={{ margin: "4mm 0 0", fontWeight: 700 }}>To</p>
        <p style={{ margin: 0 }}>{data.toCompany}</p>
        <p style={{ margin: 0 }}>{data.toAddressLine1}</p>
        <p style={{ margin: 0 }}>{data.toAddressLine2}</p>
        <p style={{ margin: 0 }}>{data.toAddressLine3}</p>

        <div
          style={{
            marginTop: "4mm",
            display: "grid",
            gridTemplateColumns: "30mm 1fr",
            rowGap: "1mm",
          }}
        >
          <span style={{ fontWeight: 700 }}>Attention:</span>
          <span>{data.attentionName}</span>
          <span />
          <span>{data.attentionTitle}</span>
        </div>

        <div
          style={{
            marginTop: "3.5mm",
            display: "grid",
            gridTemplateColumns: "32mm 1fr",
            rowGap: "1mm",
          }}
        >
          <span style={{ fontWeight: 700 }}>Subject:</span>
          <span>Letter of Award</span>
          <span style={{ fontWeight: 700 }}>Project:</span>
          <span>{data.projectName}</span>
          <span style={{ fontWeight: 700 }}>Contract Title:</span>
          <span>
            {data.contractNumber} – {data.contractTitle}
          </span>
        </div>

        <p style={{ ...body, marginTop: "4mm" }}>
          With reference to the above-mentioned tender for the Supply, Installation, Testing
          and Commissioning of Primary Surveillance Radar (PSR), Secondary Surveillance Radar
          (MSSR), and DVOR/DME Systems at New Benghazi International Airport, Libya, your
          Proposal Ref: {data.proposalRef} dated {data.proposalDate} and other communications
          exchanged to date, we, <strong>{data.employerName}</strong> (herein referred to as
          the &ldquo;Employer&rdquo;), hereby award to{" "}
          <strong>{data.contractorName}</strong> (hereinafter referred to as the
          &ldquo;Contractor&rdquo;) the contract (hereinafter referred to as the
          &ldquo;Contract&rdquo;) for the Supply, Installation, Testing and Commissioning of
          Primary Surveillance Radar (PSR), Secondary Surveillance Radar (MSSR), and DVOR/DME
          Systems at New Benghazi International Airport, Libya (hereinafter referred to as the
          &ldquo;Works&rdquo;).
        </p>

        <p style={{ ...body, marginTop: "3mm" }}>
          Capitalized terms used herein shall have the meaning as ascribed to them in the
          Contract Conditions and Schedules.
        </p>

        <h3 style={sectionHeading}>1. THE CONTRACT</h3>
        <p style={subItem}>
          1.1. The Employer will enter into a formal Contract with the Contractor.
        </p>
        <p style={subItem}>
          1.2. The terms and conditions and other provisions of the Contract shall be those
          set forth in the Contract Conditions and Schedules thereto (together the
          &ldquo;Contract&rdquo;), which will be circulated to the Contractor within thirty
          (30) days following the issuance of this Letter of Award. The General Conditions
          shall be the FIDIC Conditions of Contract for Plant and Design-Build, Second Edition
          2017.
        </p>
        <p style={subItem}>
          1.3. Until the formal Contract is executed, this Letter of Award following the
          written acceptance of the Contractor, shall be binding on both the Employer and the
          Contractor. All Services/Works performed by the Contractor under the Letter of
          Award, prior to execution of the formal Contract, shall be covered by the provisions
          of the Contract.
        </p>

        <GlobalBuildersFooter page={1} total={TOTAL_PAGES} />
        </div>
      </div>
      </div>

      {/* ══════════════════ PAGE 2 ══════════════════ */}
      <div style={pageWrapper(1)}>
      <div style={pageStyle}>
        <div style={innerPad}>
        <GlobalBuildersHeader />

        <h3 style={{ ...sectionHeading, marginTop: 0 }}>2. THE SCOPE</h3>
        <p style={body}>
          The scope of the Works shall include, but not be limited to, the Supply,
          Installation, Testing, and Commissioning of Primary Surveillance Radar (PSR),
          Secondary Surveillance Radar (MSSR), and DVOR/DME Systems at New Benghazi
          International Airport, Libya, as detailed in Annexure A – Scope Confirmation.
        </p>

        <h3 style={sectionHeading}>3. TERMS OF PAYMENT</h3>
        <p style={subItem}>
          3.1 The terms of payment shall be in accordance with the provisions of the Contract.
        </p>
        <p style={subItem}>
          3.2 The Lump Sum Price for the Works is €{formatEuro(data.lumpSumPrice)} (
          {data.lumpSumPriceWords}), comprising:
          <br />
          €{formatEuro(data.supplyPrice)} for the Supply of Materials and Equipment, and
          <br />
          €{formatEuro(data.installPrice)} for Installation, Testing, Commissioning, and
          Associated Services at Site.
        </p>
        <p style={{ ...body, marginTop: "3mm" }}>
          All above mentioned amounts are excluding VAT &amp; Taxes.
        </p>

        <h3 style={sectionHeading}>4 TIME OF COMPLETION</h3>
        <p style={subItem}>
          4.1 The Commencement Date of the Contract shall be {commencementDate}.
        </p>
        <p style={subItem}>
          4.2 The Time for Completion of the Works/Services shall be {completionDate}, with an
          extended period for final handover of the Project up to {handoverDate}.
        </p>

        <h3 style={sectionHeading}>5 INSURANCE POLICIES</h3>
        <p style={body}>
          The Contractor shall provide and maintain insurance policies in accordance with the
          agreed terms of the Contract.
        </p>

        <h3 style={sectionHeading}>6 GOVERNING LAW</h3>
        <p style={body}>
          This Letter of Award shall be governed by the laws of United Arab Emirates, as
          applicable in the Emirate of Abu Dhabi. The courts of Abu Dhabi Global Market shall
          have exclusive jurisdiction.
        </p>

        <h3 style={sectionHeading}>7 ACKNOWLEDGEMENT</h3>
        <p style={body}>
          Please confirm, no later than (2) working days from the date hereof, your acceptance
          of this Letter of Award and that you are proceeding accordingly to commence and
          perform the Works.
        </p>
        <p style={{ ...body, marginTop: "3mm" }}>
          Your acceptance of this Letter of Award should be sent via email to{" "}
          <span style={{ textDecoration: "underline", color: "#1155cc" }}>
            {data.acknowledgementEmail}
          </span>{" "}
          marked to the attention of {data.acknowledgementAttn}.
        </p>

        <div
          style={{
            marginTop: "7mm",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10mm",
          }}
        >
          <div>
            <p style={{ margin: 0 }}>Regards,</p>
            <div style={{ height: "12mm" }} />
            <p style={{ margin: 0, fontWeight: 700 }}>{data.employerSignatoryName}</p>
            <p style={{ margin: 0 }}>{data.employerSignatoryTitle}</p>
            <p style={{ margin: 0 }}>{data.employerCompany}</p>
          </div>
          <div>
            <p style={{ margin: 0 }}>Agreed and accepted:</p>
            <div style={{ height: "12mm" }} />
            <p style={{ margin: 0, fontWeight: 700 }}>{data.contractorSignatoryName}</p>
            <p style={{ margin: 0 }}>{data.contractorSignatoryTitle}</p>
          </div>
        </div>

        <p style={{ margin: "5mm 0 0", fontSize: "0.78rem" }}>Encl: Standard T&amp;C&apos;s</p>

        <GlobalBuildersFooter page={2} total={TOTAL_PAGES} />
        </div>
      </div>
      </div>

      {/* ══════════════════ PAGE 3 ══════════════════ */}
      <div style={pageWrapper(2)}>
      <div style={pageStyle}>
        <div style={innerPad}>
        <GlobalBuildersHeader />

        <p style={{ margin: 0, fontSize: "0.85rem" }}>
          Particular Conditions based on FIDIC 2017 Yellow Book
        </p>

        <div style={{ marginTop: "12mm", textAlign: "center" }}>
          <h2
            style={{
              margin: 0,
              fontSize: "1.15rem",
              fontWeight: 700,
              textDecoration: "underline",
            }}
          >
            Attachment A
          </h2>
          <p style={{ margin: "5mm 0 0", fontWeight: 700 }}>
            Contract No. {data.contractNumber}
          </p>
          <p style={{ margin: "5mm 0 0" }}>
            <strong>Contract Title:</strong> {data.contractTitle}
          </p>
        </div>

        <h3 style={{ ...sectionHeading, marginTop: "6mm", fontWeight: 700 }}>
          Annex A – Scope Confirmation
        </h3>
        <h4 style={{ margin: "3mm 0 1.5mm", fontSize: "0.92rem", fontWeight: 700 }}>
          A.1 General Scope Confirmation
        </h4>

        <p style={body}>
          The Contractor ({data.contractorName}) shall confirm that the proposed solution:
        </p>

        <ul style={{ margin: "2mm 0 0 6mm", paddingLeft: "4mm", listStyleType: "disc" }}>
          <li>
            Provides a complete and integrated system for:
            <ul style={{ margin: "1mm 0 0 0", paddingLeft: "5mm", listStyleType: "'– '" }}>
              <li>Primary Surveillance Radar (PSR)</li>
              <li>Secondary Surveillance Radar (MSSR – Mode S)</li>
              <li>DVOR / DME systems</li>
            </ul>
          </li>
          <li style={{ marginTop: "2mm" }}>
            Includes all systems, subsystems, equipment, infrastructure, and services required
            for the installation, operation, and use of the above systems within the air
            traffic control environment
          </li>
          <li style={{ marginTop: "2mm" }}>
            Is aligned with:
            <ul style={{ margin: "1mm 0 0 0", paddingLeft: "5mm", listStyleType: "'– '" }}>
              <li>ICAO Annex 10, Volume I (Radio Navigation Aids)</li>
              <li>ICAO Annex 10, Volume IV (Surveillance Systems)</li>
              <li>Applicable provisions of ICAO Annex 14 (Aerodromes) where relevant to interfaces</li>
              <li>Libyan Civil Aviation Authority (LYCAA) requirements</li>
            </ul>
          </li>
          <li style={{ marginTop: "2mm" }}>
            Meets all applicable performance requirements in accordance with ICAO Annex 10,
            including surveillance performance, Mode S capability, and navigation accuracy
          </li>
        </ul>

        <GlobalBuildersFooter page={3} total={TOTAL_PAGES} />
        </div>
      </div>
      </div>

      {/* ══════════════════ PAGE 4 ══════════════════ */}
      <div style={pageWrapper(3)}>
      <div style={pageStyle}>
        <div style={innerPad}>
        <GlobalBuildersHeader />

        <p style={body}>
          The Contractor confirms that the proposed systems are complete and that no
          additional equipment, works, or services within the defined PSR, MSSR, and DVOR/DME
          scope are required to achieve operational functionality, performance, compliance,
          certification, and readiness for use.
        </p>

        <h4 style={{ margin: "4mm 0 1.5mm", fontSize: "0.92rem", fontWeight: 700 }}>
          A.2 System Scope and Interfaces
        </h4>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ ...tableCellHead, width: "14mm" }}>Ref</th>
              <th style={tableCellHead}>Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableRefCell}>A1</td>
              <td style={tableCell}>
                Delivery of complete PSR, MSSR (Mode S), and DVOR/DME systems, including
                supply, installation, testing, commissioning, and acceptance
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A2</td>
              <td style={tableCell}>
                Provision of all system functions required for operation, including monitoring,
                control, and performance of each system
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A3</td>
              <td style={tableCell}>
                Provision of all required system interfaces for PSR, MSSR, and DVOR/DME systems
                to enable integration with the existing or planned Air Traffic Management
                (ATM) / ATC systems operated by the ANSP, including surveillance data output,
                status monitoring, and control interfaces as applicable, in accordance with
                applicable international standards and protocols, and including responsibility
                for data output integrity and interface compatibility.
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A4</td>
              <td style={tableCell}>
                Provision of power supply systems required for operation of the supplied PSR,
                MSSR (Mode S), and DVOR/DME systems, including UPS systems as mentioned on
                contract offer appropriate capacity, redundancy, and autonomy, and internal
                power distribution to ensure continuous and reliable operation.
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A5</td>
              <td style={tableCell}>
                This includes interface with upstream power supply and standby generator
                systems, ensuring compatibility, load coordination, and continuity of power
                supply to the systems.
              </td>
            </tr>
          </tbody>
        </table>

        <h4 style={{ margin: "4mm 0 1.5mm", fontSize: "0.92rem", fontWeight: 700 }}>
          A.3 Infrastructure and Installation Works
        </h4>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ ...tableCellHead, width: "14mm" }}>Ref</th>
              <th style={tableCellHead}>Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableRefCell}>A6</td>
              <td style={tableCell}>
                Provision of equipment shelters required for PSR, MSSR, and DVOR/DME systems,
                including environmental control systems (HVAC, temperature, humidity).
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A7</td>
              <td style={tableCell}>
                Provision of civil works and foundations required for system installation,
                including antenna bases, towers, and mounting structures
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A8</td>
              <td style={tableCell}>
                Provision of grounding and lightning protection systems required for equipment
                protection and operational reliability
              </td>
            </tr>
          </tbody>
        </table>

        <GlobalBuildersFooter page={4} total={TOTAL_PAGES} />
        </div>
      </div>
      </div>

      {/* ══════════════════ PAGE 5 ══════════════════ */}
      <div style={pageWrapper(4)}>
      <div style={pageStyle}>
        <div style={innerPad}>
        <GlobalBuildersHeader />

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            fontSize: "0.9rem",
          }}
        >
          <tbody>
            <tr>
              <td style={tableRefCell}>A9</td>
              <td style={tableCell}>
                Provision of cabling systems, fiber optic links, and associated infrastructure
                required for system connectivity
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A10</td>
              <td style={tableCell}>
                Provision of power distribution from the defined point of connection,
                including internal distribution, protection, cabling, and all equipment
                required for system operation.
                <br />
                <br />
                The point of connection to the upstream power source shall be defined, and all
                required interfaces with external power systems, including standby generator
                systems, shall be incorporated to ensure uninterrupted operation of the PSR,
                MSSR, and DVOR/DME systems.
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A11</td>
              <td style={tableCell}>
                Installation of all systems in accordance with manufacturer requirements and
                applicable standards
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A12</td>
              <td style={tableCell}>
                Inclusion of all installation, integration, testing, commissioning, system
                acceptance, and handover activities required to achieve operational readiness
                of the PSR, MSSR, and DVOR/DME systems
              </td>
            </tr>
          </tbody>
        </table>

        <h4 style={{ margin: "4mm 0 1.5mm", fontSize: "0.92rem", fontWeight: 700 }}>
          A.4 Performance, Compliance, and Certification
        </h4>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ ...tableCellHead, width: "14mm" }}>Ref</th>
              <th style={tableCellHead}>Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableRefCell}>A13</td>
              <td style={tableCell}>
                Confirmation that the systems meet applicable ICAO Annex 10 performance
                requirements
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A14</td>
              <td style={tableCell}>
                Capability of the systems to achieve certification and operational approval by
                the Libyan Civil Aviation Authority (LYCAA)
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A15</td>
              <td style={tableCell}>
                Inclusion of all required testing and validation activities, including Factory
                Acceptance Testing (FAT), Site Acceptance Testing (SAT), and flight
                calibration, where applicable
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A16</td>
              <td style={tableCell}>
                Coordination with relevant authorities and stakeholders is required for
                testing, calibration, certification, and operational approval processes.
              </td>
            </tr>
          </tbody>
        </table>

        <h4 style={{ margin: "4mm 0 1.5mm", fontSize: "0.92rem", fontWeight: 700 }}>
          A.5 Lifecycle and Support
        </h4>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr>
              <th style={{ ...tableCellHead, width: "14mm" }}>Ref</th>
              <th style={tableCellHead}>Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableRefCell}>A17</td>
              <td style={tableCell}>
                Provision of a warranty covering all supplied systems and works for a minimum
                of 24 months.
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A18</td>
              <td style={tableCell}>
                Provision of training, spare parts, and support required for operation and
                maintenance
              </td>
            </tr>
            <tr>
              <td style={tableRefCell}>A19</td>
              <td style={tableCell}>
                Provision of maintenance and technical support capability appropriate for the
                systems provided
              </td>
            </tr>
          </tbody>
        </table>

        <GlobalBuildersFooter page={5} total={TOTAL_PAGES} />
        </div>
      </div>
      </div>
    </div>
  );
}

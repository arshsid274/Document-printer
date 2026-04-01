import { OfferLetterData } from "../../data/mockData";
import { DatcoDocHeader, DatcoFooterBar } from "../shared/DatcoComponents";

interface OfferLetterTemplateProps {
  data: OfferLetterData;
}

function parseDateValue(value: string): Date | null {
  const normalized = `${value ?? ""}`.trim();
  if (!normalized) return null;
  const m = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatShortDate(value: string): string {
  const d = parseDateValue(value);
  if (!d) return value;
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

function formatLongDate(value: string): string {
  const d = parseDateValue(value);
  if (!d) return value;
  return `${String(d.getDate()).padStart(2, "0")} ${new Intl.DateTimeFormat("en-GB", { month: "long" }).format(d)} ${d.getFullYear()}`;
}

const inrNumber = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

/** Page break for print + visible divider on screen */
function PageDivider() {
  return (
    <>
      <div
        className="no-print"
        style={{
          height: "12px",
          background: "#d1d5db",
          borderTop: "1px solid #9ca3af",
          borderBottom: "1px solid #9ca3af",
        }}
      />
      <div style={{ pageBreakBefore: "always", breakBefore: "page", height: 0 }} />
    </>
  );
}


export default function Template3({ data }: OfferLetterTemplateProps) {
  const companyName = `${data.companyName || "DATCO CIVIL"}`.toUpperCase();
  const letterDate   = formatLongDate(`${data.offerDate || ""}`);
  const joiningShort = formatShortDate(`${data.joiningDate || ""}`);
  const candidateName = `${data.candidateName || ""}`;
  const firstName     = candidateName.trim().split(/\s+/)[0] || candidateName;
  const position      = `${data.position || "Fire & Safety Officer"}`;
  const monthlySalary = Number(data.monthlySalary) || 0;
  const fromName      = `${data.fromName || ""}`;
  const fromTitle     = `${data.fromTitle || ""}`;

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
    padding: "12mm 14mm 8mm 14mm",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>

      {/* ══════════════════════ PAGE 1 ══════════════════════ */}
      <div style={pageStyle}>
        <div style={innerPad}>
        <DatcoDocHeader />

        <div style={{ fontSize: "0.9rem", lineHeight: "1.7", flex: 1 }}>

          {/* Ref + Date row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>Ref: {data.referenceNumber as string}</p>
            <p style={{ margin: 0, fontWeight: 600, whiteSpace: "nowrap" }}>Date: {letterDate}</p>
          </div>

          {/* To block */}
          <div style={{ marginTop: "6mm", fontWeight: "bold" }}>
            <p style={{ margin: 0 }}>MR. {candidateName.toUpperCase()}</p>
            {data.toAddressLine1 && <p style={{ margin: 0 }}>{data.toAddressLine1 as string}</p>}
            {data.toAddressLine2 && <p style={{ margin: 0 }}>{data.toAddressLine2 as string}</p>}
            {data.toAddressLine3 && <p style={{ margin: 0 }}>{data.toAddressLine3 as string}</p>}
            {data.toPincode       && <p style={{ margin: 0 }}>{data.toPincode as string}</p>}
            {data.toPhone         && <p style={{ margin: 0 }}>Phone No: {data.toPhone as string}</p>}
          </div>

          <p style={{ marginTop: "6mm", marginBottom: 0, fontWeight: "bold", textDecoration: "underline" }}>
            Subject: Appointment as {position}
          </p>

          <p style={{ marginTop: "6mm", marginBottom: 0 }}>Dear <strong>MR. {candidateName.toUpperCase()}</strong>,</p>

          <p style={{ marginTop: "5mm", marginBottom: 0, textAlign: "justify" }}>
            We are pleased to inform you that you have been appointed as{" "}
            <strong>{position}</strong> at{" "}
            <strong>{fromName} – {companyName} Constructions</strong> with effect from{" "}
            <strong>{joiningShort}</strong>. Your employment will be governed by the following
            terms and conditions:
          </p>

          <ol style={{ marginTop: "5mm", marginBottom: 0, paddingLeft: "10mm", lineHeight: "1.75", textAlign: "justify", listStyleType: "decimal" }}>
            <li style={{ marginBottom: "3.5mm" }}>
              <strong>Designation &amp; Responsibilities</strong>: You will serve as a{" "}
              <strong>{position}</strong> and will be responsible for overseeing Fire &amp; Safety
              construction activities, ensuring compliance with safety standards, coordinating with
              contractors and engineers, and supervising on-site labor.
            </li>
            <li style={{ marginBottom: "3.5mm" }}>
              <strong>Place of Work</strong>: Your initial posting will be at{" "}
              <strong>{(data.workLocation as string) || "the assigned project site"}</strong>, but
              you may be required to work at other project sites as per company requirements.
            </li>
            <li style={{ marginBottom: "3.5mm" }}>
              <strong>Salary &amp; Benefits</strong>: You will receive a monthly salary of{" "}
              <strong>Rs.&nbsp;{inrNumber.format(monthlySalary)}/-</strong>. Company salary date is
              between 10<sup>th</sup> – 20<sup>th</sup>.
            </li>
            <li style={{ marginBottom: "3.5mm" }}>
              <strong>Accommodation &amp; Site Facilities</strong>: Basic site accommodation and
              transportation facilities will be provided by the company during the tenure of your
              posting at the project site, subject to availability and company policy.
            </li>
            <li style={{ marginBottom: 0 }}>
              <strong>Performance Appraisal</strong>: Your performance will be reviewed periodically
              by your reporting manager. Based on satisfactory performance, you will be eligible for
              increments and career progression opportunities as per company norms.
            </li>
          </ol>
        </div>
        </div>
        <DatcoFooterBar />
      </div>

      {/* ── screen-only page divider ── */}
      <PageDivider />

      {/* ══════════════════════ PAGE 2 ══════════════════════ */}
      <div style={pageStyle}>
        <div style={innerPad}>
        <DatcoDocHeader />

        <div style={{ fontSize: "0.9rem", lineHeight: "1.6", flex: 1 }}>
          <ol start={6} style={{ marginTop: 0, marginBottom: 0, paddingLeft: "10mm", textAlign: "justify", listStyleType: "decimal", lineHeight: "1.6" }}>
            <li style={{ marginBottom: "2.5mm" }}>
              <strong>Working Hours</strong>: Your standard working hours will be{" "}
              <strong>{(data.workingHours as string) || "8am-5pm"}</strong> from{" "}
              <strong>{(data.workingDays as string) || "Monday – Saturday"}</strong> with
              occasional overtime as per project demands.
            </li>
            <li style={{ marginBottom: "2.5mm" }}>
              <strong>Probation Period</strong>: You will be on probation for a period of{" "}
              <strong>{(data.probationMonths as string) || "3"} months</strong> after which your
              performance will be reviewed for confirmation.
            </li>
            <li style={{ marginBottom: "2.5mm" }}>
              <strong>Leave &amp; Holidays</strong>: You will be entitled to leave as per company
              policy. Any additional leave should be approved by your reporting manager.
            </li>
            <li style={{ marginBottom: "2.5mm" }}>
              <strong>Code of Conduct</strong>: You are expected to adhere to the company's rules,
              regulations, and ethical standards always.
            </li>
            <li style={{ marginBottom: 0 }}>
              <strong>Termination</strong>: Either party may terminate this appointment by
              providing <strong>30 days</strong> written notice or equivalent salary in lieu
              thereof.
            </li>
          </ol>

          <p style={{ marginTop: "4mm", marginBottom: 0, textAlign: "justify" }}>
            Kindly sign and return a copy of this letter as a token of your acceptance of the
            appointment.
          </p>
          <p style={{ marginTop: "2mm", marginBottom: 0, textAlign: "justify" }}>
            We look forward to your valuable contribution to our company.
          </p>

          {/* Signature */}
          <div style={{ marginTop: "7mm" }}>
            <p style={{ margin: 0 }}>Best Regards,</p>
            <img
              src="/images/logos/signatur2.png"
              alt="Authorised Signature"
              style={{ height: "44px", marginTop: "3px", marginBottom: "1px", display: "block" }}
            />
            <p style={{ margin: 0, fontWeight: "bold" }}>{fromName.toUpperCase()}</p>
            {fromTitle && <p style={{ margin: 0 }}>{fromTitle}</p>}
            <p style={{ margin: 0 }}>{companyName} Civil</p>
          </div>

          {/* Acknowledgement box */}
          <div style={{ marginTop: "8mm", border: "1px solid #111", padding: "4mm", pageBreakInside: "avoid", breakInside: "avoid" }}>
            <p style={{ margin: 0, fontWeight: "bold", fontSize: "0.92rem" }}>
              Acknowledgement &amp; Acceptance:
            </p>
            <p style={{ marginTop: "3mm", marginBottom: 0, textAlign: "justify" }}>
              I, <strong>{candidateName.toUpperCase()}</strong>, accept the terms and conditions
              mentioned above and agree to join as <strong>{position}</strong> on{" "}
              <strong>{joiningShort}</strong>.
            </p>
            <div style={{ marginTop: "4mm" }}>
              <p style={{ margin: 0 }}>Signature:</p>
              <img
                src="/images/logos/anderson_signature.png"
                alt="Anderson Varghese Signature"
                style={{ height: "40px", display: "block", marginTop: "2px", marginBottom: "2px" }}
              />
            </div>
            <p style={{ marginTop: "2mm", marginBottom: 0 }}>Date: {joiningShort}</p>
          </div>
        </div>
        </div>
        <DatcoFooterBar />
      </div>

    </div>
  );
}

import { RelievingLetterData } from "../../data/mockData";

interface RelievingLetterTemplateProps {
  data: RelievingLetterData;
}

function parseDateValue(value: string): Date | null {
  const normalized = `${value ?? ""}`.trim();
  if (!normalized) {
    return null;
  }

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
  if (!parsed) {
    return value;
  }

  const day = `${parsed.getDate()}`.padStart(2, "0");
  const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(parsed);
  const year = parsed.getFullYear();

  return `${day} ${month} ${year}`;
}

export default function Template1({ data }: RelievingLetterTemplateProps) {
  const companyName = `${data.companyName || "DATCO CIVIL"}`.toUpperCase();
  const letterDate = formatLongDate(`${data.letterDate || ""}`);
  const joiningDate = formatLongDate(`${data.joiningDate || ""}`);
  const relievingDate = formatLongDate(`${data.relievingDate || ""}`);
  const referenceCode = `DATCO/HR/RL/${data.employeeId || "0000"}`;

  return (
    <article
      className="min-h-[257mm] bg-white px-[12mm] pb-[10mm] pt-[8mm] text-[#111111]"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <header className="text-center">
        <img
          src="/images/logos/datco-header.svg"
          alt="DATCO CIVIL Header"
          className="mx-auto h-auto w-full max-w-[165mm] object-contain"
        />
      </header>

      <section className="mt-[6mm] border-b border-black pb-[3mm] text-center">
        <h2 className="m-0 text-[1.3rem] font-bold tracking-[0.03em]">RELIEVING LETTER</h2>
      </section>

      <section className="mt-[6mm] text-[0.94rem] leading-[1.65]">
        <div className="flex items-start justify-between gap-3 max-[700px]:flex-col">
          <p className="m-0 font-semibold">Ref: {referenceCode}</p>
          <p className="m-0 font-semibold">Date: {letterDate}</p>
        </div>

        <p className="mb-0 mt-[6mm] font-semibold">To Whom It May Concern,</p>

        <p className="mb-0 mt-[5mm]">
          This is to certify that <strong>{data.employeeName}</strong> (Employee ID:{" "}
          <strong>{data.employeeId}</strong>) was employed with <strong>{companyName}</strong> as{" "}
          <strong>{data.designation}</strong> from <strong>{joiningDate}</strong> to{" "}
          <strong>{relievingDate}</strong>.
        </p>

        <p className="mb-0 mt-[4.5mm]">
          During the above period, the employee carried out assigned responsibilities with good
          conduct and professionalism. All duties and handover formalities have been completed, and
          the employee is hereby relieved from services of the company effective{" "}
          <strong>{relievingDate}</strong>.
        </p>

        <p className="mb-0 mt-[4.5mm]">
          We thank <strong>{data.employeeName}</strong> for the contributions made and wish all
          success in future endeavors.
        </p>
      </section>

      <footer className="mt-[16mm] text-[0.94rem]">
        <p className="m-0 font-semibold">For {companyName}</p>
        <img
          src="/images/logos/signatur2.png"
          alt="Authorised Signatory Signature"
          className="mt-[2.5mm] h-[12mm] w-auto object-contain"
        />
        <p className="mt-[2mm] m-0">Human Resources Department</p>
        <p className="m-0 text-[0.84rem] text-[#3b3b3b]">Authorised Signatory</p>
      </footer>

      <footer className="mt-[10mm] border-t border-black pt-[2.5mm] text-center text-[0.78rem] text-[#303030]">
        <p className="m-0">{companyName}</p>
        <p className="m-0">This is a system generated relieving letter.</p>
      </footer>
    </article>
  );
}

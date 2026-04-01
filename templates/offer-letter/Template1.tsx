import { OfferLetterData } from "../../data/mockData";

interface OfferLetterTemplateProps {
  data: OfferLetterData;
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

function ordinalSuffix(day: number): string {
  if (day > 3 && day < 21) {
    return "th";
  }

  if (day % 10 === 1) {
    return "st";
  }

  if (day % 10 === 2) {
    return "nd";
  }

  if (day % 10 === 3) {
    return "rd";
  }

  return "th";
}

interface LongDateParts {
  day: number;
  suffix: string;
  month: string;
  year: number;
}

function formatLongDate(value: string): string {
  const parsed = parseDateValue(value);
  if (!parsed) {
    return value;
  }

  const day = parsed.getDate();
  const month = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(parsed);
  const year = parsed.getFullYear();

  return `${day}${ordinalSuffix(day)} ${month} ${year}`;
}

function getLongDateParts(value: string): LongDateParts | null {
  const parsed = parseDateValue(value);
  if (!parsed) {
    return null;
  }

  const day = parsed.getDate();

  return {
    day,
    suffix: ordinalSuffix(day),
    month: new Intl.DateTimeFormat("en-GB", { month: "long" }).format(parsed),
    year: parsed.getFullYear()
  };
}

function formatCompactDate(value: string): string {
  const parsed = parseDateValue(value);
  if (!parsed) {
    return value;
  }

  const day = `${parsed.getDate()}`.padStart(2, "0");
  const month = `${parsed.getMonth() + 1}`.padStart(2, "0");
  const year = parsed.getFullYear();

  return `${day}-${month}-${year}`;
}

const inrNumber = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

export default function Template1({ data }: OfferLetterTemplateProps) {
  const referenceCode = `${data.referenceNumber || "S0126566"}`;
  const candidateName = `${data.candidateName || "Somnath Chatterjee"}`;
  const firstName = candidateName.trim().split(/\s+/)[0] || "Somnath";
  const appointmentDateSource = `${data.offerDate || data.certificateDate || "2019-06-12"}`;
  const joiningDateSource = `${data.joiningDate || data.offerDate || "2019-06-15"}`;
  const appointmentDate = formatLongDate(appointmentDateSource);
  const compactDate = formatCompactDate(appointmentDateSource);
  const joiningDate = formatLongDate(joiningDateSource);
  const appointmentDateParts = getLongDateParts(appointmentDateSource);
  const joiningDateParts = getLongDateParts(joiningDateSource);
  const designation = `${data.position || "Planning Engineer"}`;
  const annualSalary = Number(data.annualSalary) || 120000;
  const monthlySalary = Math.max(10000, Math.round(annualSalary / 12));
  const company = `${data.companyName || "DATCO CIVIL"}`.toUpperCase();
  const signatoryName = `${data.signatoryName || "Authorized Signatory"}`;
  const signatoryDesignation = `${data.signatoryDesignation || "Authorised Signatory"}`;

  return (
    <article
      className="bg-white px-[11mm] pb-[4mm] pt-[8mm] text-[#111111]"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="flex flex-col">
        <header>
          <div className="text-center">
            <img 
              src="/images/logos/apexlogo.png" 
              alt="DATCO CIVIL Logo" 
              style={{ height: '80px', margin: '0 auto', display: 'block' }}
            />
          </div>

          <div className="mt-[7mm] grid grid-cols-3 gap-2 text-[0.93rem] font-bold max-[700px]:grid-cols-1">
            <p className="m-0">Vendor Code : {referenceCode}</p>
            <p className="m-0 text-center max-[700px]:text-left">PAN : AAQCA7197M</p>
            <p className="m-0 text-right max-[700px]:text-left">GST: 24AAQCA7197M1ZV</p>
          </div>

          <div className="mt-[6mm] text-center text-black">
            <h2 className="m-0 text-[1.5rem] font-bold underline">Appointment Letter</h2>
            <h3 className="mt-2 text-[1rem] font-bold underline">To Whom It May Concern</h3>
          </div>

          <div className="mt-[8mm] flex items-start justify-between gap-3 text-[1rem] leading-[1.45]">
            <div className="max-w-[68%] font-bold">
              <p className="m-0 underline">To,</p>
              <p className="m-0 underline">{candidateName}</p>
              <p className="m-0 underline">Vill+P.O.- Majadiha, P.S.- Onda</p>
              <p className="m-0 underline">Dist- Bankura.</p>
            </div>
            <p className="m-0 text-right font-bold underline">
              Date:{" "}
              {appointmentDateParts ? (
                <>
                  {appointmentDateParts.day}
                  <sup className="text-[0.65em] align-super">{appointmentDateParts.suffix}</sup>{" "}
                  {appointmentDateParts.month} {appointmentDateParts.year}
                </>
              ) : (
                appointmentDate
              )}
            </p>
          </div>
        </header>

        <section className="mt-[9mm] text-[0.97rem] leading-[1.65] text-black">
          <p className="m-0">Dear {firstName},</p>
          <p className="mb-0 mt-5">
            This is with reference to your application and the subsequent discussion you had with
            us at the interview on {appointmentDate}, on the following terms and conditions.
          </p>

          <ol className="mb-0 mt-4 list-decimal pl-[20px]">
            <li className="mb-3 pl-1">
              <span className="font-bold">Designation</span>- {designation}.
            </li>
            <li className="mb-3 pl-1">
              <span className="font-bold">Job Location</span>- Ranchi.
            </li>
            <li className="mb-3 pl-1">
              <span className="font-bold">Commencement of Employment</span>- Your employment will be
              effective from{" "}
              {joiningDateParts ? (
                <>
                  {joiningDateParts.day}
                  <sup className="text-[0.65em] align-super">{joiningDateParts.suffix}</sup>{" "}
                  {joiningDateParts.month}, {joiningDateParts.year}.
                </>
              ) : (
                `${joiningDate}.`
              )}
            </li>
            <li className="mb-3 pl-1">
              <span className="font-bold">Salary and Compensations</span>- Your salary will be Rs.-{" "}
              {inrNumber.format(monthlySalary)}/- per month. After completion of probationary period (6 Months) you will be eligible to
              leave, as per company norms.
            </li>
            <li className="mb-0 pl-1">
              <span className="font-bold">Working Hours</span>- The working days will be Monday to
              Saturday and Sunday is off. Working hours will be 9 A.M to 7 P.M.
            </li>
          </ol>

          <p className="mb-0 mt-4">
            We congratulate you on your appointment and wish you a long career with us. We assure
            you have a great journey and get our full support for your professional growth and
            development.
          </p>
        </section>

        <section className="mt-[10mm] text-[0.98rem] leading-[1.45]">
          <p className="mb-1 font-bold">Sincerely</p>
          <img 
            src="/images/logos/signature.png" 
            alt="Signature" 
            style={{ height: '50px', marginTop: '-4px', marginBottom: '-4px' }}
          />
          <p className="mb-0 mt-2 font-bold">M/s. {company}</p>
          <p className="m-0 font-bold">Date: {compactDate}</p>
        </section>

        <footer className="mt-auto pt-[7mm] text-center">
          <p className="m-0 text-[0.98rem] font-bold tracking-[0.03em] text-[#4a4a4a]">
            DATCO CIVIL
          </p>
          <p className="mt-1 text-[0.67rem] leading-[1.45] text-[#3a3a3a]">
            Registered Office: 3rd Floor, K P House, Opp. Dhanvantri Ground, P.N Marg, Jamnagar -
            361 008. Ph.: 0288 - 2560077
          </p>
          <p className="mb-0 mt-1 text-[0.67rem] leading-[1.4] text-[#3a3a3a]">
            CIN: U01692GJ2016PLC092865 | www.apexltd.in
          </p>
          <p className="mt-2 m-0 text-[0.85rem] font-bold text-[#111]">
            Thoduparamban House, Vallakkunnu, P. O. Kallettumkara
          </p>
          <div className="mt-2.5 flex w-full items-center justify-between">
            <span className="block h-[8px] w-[23mm] bg-[#4cbadf]" />
            <span className="block h-[8px] w-[23mm] bg-[#4cbadf]" />
          </div>
        </footer>
      </div>
    </article>
  );
}

import { SalarySlipData } from "../../data/mockData";

interface SalarySlipTemplate1Props {
  data: SalarySlipData;
}

const amountFormat = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const currencyWithDecimals = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const currencyFormat = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
});

const singleDigits = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

const tensDigits = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function toNumber(value: string | number, fallback = 0): number {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  const parsed = Number(`${value ?? ""}`.replace(/,/g, ""));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseMonthValue(value: string): Date | null {
  const normalized = `${value ?? ""}`.trim();
  if (!normalized) {
    return null;
  }

  const strictMonthMatch = normalized.match(/^(\d{4})-(\d{2})$/);
  if (strictMonthMatch) {
    const [, year, month] = strictMonthMatch;
    return new Date(Number(year), Number(month) - 1, 1);
  }

  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatPaySlipMonth(value: string): string {
  const parsed = parseMonthValue(value);
  if (!parsed) {
    return value;
  }

  const monthName = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(parsed);
  const shortYear = `${parsed.getFullYear()}`.slice(-2);
  return `${monthName}-${shortYear}`;
}

function getDaysInMonth(value: string): number {
  const parsed = parseMonthValue(value);
  if (!parsed) {
    return 30;
  }

  return new Date(parsed.getFullYear(), parsed.getMonth() + 1, 0).getDate();
}

function twoDigitsToWords(value: number): string {
  if (value < 20) {
    return singleDigits[value];
  }

  const tens = Math.floor(value / 10);
  const remainder = value % 10;
  return `${tensDigits[tens]}${remainder ? ` ${singleDigits[remainder]}` : ""}`.trim();
}

function numberToWordsIndian(value: number): string {
  if (value === 0) {
    return "zero";
  }

  if (value < 0) {
    return `minus ${numberToWordsIndian(Math.abs(value))}`;
  }

  if (value < 100) {
    return twoDigitsToWords(value);
  }

  if (value < 1000) {
    const hundreds = Math.floor(value / 100);
    const remainder = value % 100;
    return `${singleDigits[hundreds]} hundred${remainder ? ` ${twoDigitsToWords(remainder)}` : ""}`.trim();
  }

  if (value < 100000) {
    const thousands = Math.floor(value / 1000);
    const remainder = value % 1000;
    return `${numberToWordsIndian(thousands)} thousand${remainder ? ` ${numberToWordsIndian(remainder)}` : ""}`.trim();
  }

  if (value < 10000000) {
    const lakhs = Math.floor(value / 100000);
    const remainder = value % 100000;
    return `${numberToWordsIndian(lakhs)} lakh${remainder ? ` ${numberToWordsIndian(remainder)}` : ""}`.trim();
  }

  const crores = Math.floor(value / 10000000);
  const remainder = value % 10000000;
  return `${numberToWordsIndian(crores)} crore${remainder ? ` ${numberToWordsIndian(remainder)}` : ""}`.trim();
}

function titleCase(value: string): string {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Template1({ data }: SalarySlipTemplate1Props) {
  const basicSalary = Math.max(0, toNumber(data.basicSalary));
  const hra = Math.max(0, toNumber(data.hra));
  const transportAllowance = Math.max(0, toNumber(data.transportAllowance));
  const medicalAllowance = Math.max(0, toNumber(data.medicalAllowance));

  const pfDeduction = Math.max(0, toNumber(data.pfDeduction));
  const esiDeduction = Math.max(0, toNumber(data.esiDeduction));
  const tdsDeduction = Math.max(0, toNumber(data.tdsDeduction));
  const professionalTax = Math.max(0, toNumber(data.professionalTax));

  const totalEarnings = basicSalary + hra + transportAllowance + medicalAllowance;
  const totalDeductions = pfDeduction + esiDeduction + tdsDeduction + professionalTax;
  const netPay = Math.max(0, totalEarnings - totalDeductions);
  const netPayInWords = `${titleCase(numberToWordsIndian(Math.round(netPay)))} Only`;

  const workingDays = Math.max(0, Math.round(toNumber(data.workingDays, getDaysInMonth(data.month))));
  const paySlipMonth = formatPaySlipMonth(data.month);
  const rateOfWorkmen = toNumber(data.rateOfWorkmen);

  const employeeRows = [
    { label: "Employee Name", value: `${data.employeeName}` },
    { label: "Project Name", value: `${data.projectName}` },
    { label: "Designation", value: `${data.designation}` },
    { label: "Rate of Workmen", value: `${currencyWithDecimals.format(rateOfWorkmen)}` },
    { label: "Bank Name", value: `${data.bankName}` },
    { label: "Account No", value: `${data.accountNo}` },
    { label: "PF A/C No", value: `${data.pfAccountNo}` },
    { label: "UAN No", value: `${data.uanNo}` }
  ];

  const payrollRows = [
    {
      earningsLabel: "Basic Salary",
      earningsAmount: basicSalary,
      deductionLabel: "PF",
      deductionAmount: pfDeduction
    },
    {
      earningsLabel: "HRA",
      earningsAmount: hra,
      deductionLabel: "ESI",
      deductionAmount: esiDeduction
    },
    {
      earningsLabel: "Transport Allowances",
      earningsAmount: transportAllowance,
      deductionLabel: "TDS",
      deductionAmount: tdsDeduction
    },
    {
      earningsLabel: "Medical",
      earningsAmount: medicalAllowance,
      deductionLabel: "Professional Tax",
      deductionAmount: professionalTax
    }
  ];

  return (
    <article
      className="min-h-[257mm] bg-white px-[12mm] pb-[8mm] pt-[8mm] text-black"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
    >
      <header className="text-center">
        <img
          src="/images/logos/datco-header.svg"
          alt="DATCO CIVIL Header"
          className="mx-auto h-auto w-full max-w-[165mm] object-contain"
        />
      </header>

      <main className="mx-auto mt-[8mm] max-w-[160mm] text-[0.9rem]">
        <h2 className="m-0 text-center text-[1.35rem] font-bold underline">PAY SLIP</h2>

        <section className="mt-[8mm] text-[0.95rem]">
          <p className="m-0 font-bold">PAN No-{data.panNumber}</p>
          <p className="mt-[3mm]">{data.principalEmployer}</p>
          <p className="mt-[2.5mm]">Engage Through {data.engagedThrough}</p>
        </section>

        <section className="mt-[4mm]">
          <table className="w-full border-collapse text-[0.92rem]">
            <tbody>
              <tr>
                <td className="border border-black px-2.5 py-1.5">Working Days: {workingDays} Days</td>
                <td className="border border-black px-2.5 py-1.5 text-right">Pay Slip Month: {paySlipMonth}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-[8mm]">
          <table className="w-full border-collapse text-[0.9rem]">
            <tbody>
              {employeeRows.map((row) => (
                <tr key={row.label}>
                  <th className="w-1/2 border border-black px-2.5 py-1.5 text-center font-bold">
                    {row.label}
                  </th>
                  <td className="w-1/2 border border-black px-2.5 py-1.5 text-center">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-[5mm]">
          <table className="w-full border-collapse text-[0.9rem]">
            <thead>
              <tr>
                <th className="w-1/4 border border-black px-2.5 py-1.5 text-center font-bold">Earnings</th>
                <th className="w-1/4 border border-black px-2.5 py-1.5 text-center font-bold">Amount</th>
                <th className="w-1/4 border border-black px-2.5 py-1.5 text-center font-bold">Deductions</th>
                <th className="w-1/4 border border-black px-2.5 py-1.5 text-center font-bold">Amount</th>
              </tr>
            </thead>
            <tbody>
              {payrollRows.map((row) => (
                <tr key={row.earningsLabel}>
                  <th className="border border-black px-2.5 py-1.5 text-left font-bold">{row.earningsLabel}</th>
                  <td className="border border-black px-2.5 py-1.5 text-center">
                    {amountFormat.format(row.earningsAmount)}
                  </td>
                  <th className="border border-black px-2.5 py-1.5 text-center font-bold">{row.deductionLabel}</th>
                  <td className="border border-black px-2.5 py-1.5 text-center">
                    {amountFormat.format(row.deductionAmount)}
                  </td>
                </tr>
              ))}
              <tr>
                <th className="border border-black px-2.5 py-1.5 text-center font-bold">Total Earnings</th>
                <td className="border border-black px-2.5 py-1.5 text-center font-bold">
                  {amountFormat.format(totalEarnings)}
                </td>
                <th className="border border-black px-2.5 py-1.5 text-center font-bold">Total Deductions</th>
                <td className="border border-black px-2.5 py-1.5 text-center font-bold">
                  {amountFormat.format(totalDeductions)}
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <table className="w-full border-collapse text-[0.95rem]">
            <tbody>
              <tr>
                <th className="w-1/2 border border-black px-2.5 py-1.5 text-left font-bold">Net Pay</th>
                <td className="w-1/2 border border-black px-2.5 py-1.5 text-right font-bold">
                  {currencyFormat.format(netPay)}
                </td>
              </tr>
              <tr>
                <th className="border border-black px-2.5 py-1.5 text-left font-bold">In Words</th>
                <td className="border border-black px-2.5 py-1.5 font-bold">{netPayInWords}</td>
              </tr>
            </tbody>
          </table>
        </section>

      </main>
    </article>
  );
}

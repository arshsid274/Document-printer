import React from "react";
import { SalarySlipData } from "../../data/mockData";
import { DatcoDocHeader, DatcoFooterBar } from "../shared/DatcoComponents";

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
  return `${monthName}-${parsed.getFullYear()}`;
}

function getDaysInMonth(value: string): number {
  const parsed = parseMonthValue(value);
  if (!parsed) {
    return 30;
  }

  return new Date(parsed.getFullYear(), parsed.getMonth() + 1, 0).getDate();
}

function getWorkingDaysInMonth(value: string): number {
  const parsed = parseMonthValue(value);
  if (!parsed) return 26;
  const year = parsed.getFullYear();
  const month = parsed.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();
  let sundays = 0;
  for (let d = 1; d <= totalDays; d++) {
    if (new Date(year, month, d).getDay() === 0) sundays++;
  }
  return totalDays - sundays;
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

// ─── identical data from BatchTemplate ───────────────────────────────────────
const BASE: Omit<SalarySlipData, "month" | "workingDays" | "deductions"> = {
  companyName: "DATCO CIVIL",
  employeeName: "Anderson Varghese",
  employeeId: "EMP-0988",
  basicSalary: 7500,
  allowances: 7500,
  issueDate: "",
  panNumber: "BWUPA3029E",
  principalEmployer: "",
  engagedThrough: "M/s. DATCO CIVIL",
  projectName: "Khatan WSS Project :LE 200816",
  designation: "Fire & Safety Officer",
  rateOfWorkmen: 576.92,
  bankName: "Bank Of Baroda",
  accountNo: "52148100008038",
  pfAccountNo: "NA",
  uanNo: "101619878937",
  hra: 3000,
  transportAllowance: 1600,
  medicalAllowance: 2900,
  pfDeduction: 0,
  esiDeduction: 0,
  tdsDeduction: 0,
  professionalTax: 0,
  companyEmail: "davisvibin@gmail.com",
};

const SLIPS = [
  { month: "2021-07", lwp: 0 },
  { month: "2021-09", lwp: 2 },
  { month: "2021-11", lwp: 0 },
  { month: "2022-02", lwp: 3 },
  { month: "2022-06", lwp: 0 },
  { month: "2022-10", lwp: 0 },
  { month: "2024-04", lwp: 0 },
  { month: "2024-08", lwp: 0 },
  { month: "2024-11", lwp: 1 },
];

function calendarDays(month: string): number {
  const [year, m] = month.split("-").map(Number);
  return new Date(year, m, 0).getDate();
}

function lwpAmount(lwpDays: number, month: string): number {
  return Math.round((15000 / calendarDays(month)) * lwpDays);
}

// ─── single page renderer ─────────────────────────────────────────────────────
function SlipPage({ data, pageBreak }: { data: SalarySlipData; pageBreak: boolean }) {
  const basicSalary = Math.max(0, toNumber(data.basicSalary));
  const hra = Math.max(0, toNumber(data.hra));
  const transportAllowance = Math.max(0, toNumber(data.transportAllowance));
  const specialAllowance = Math.max(0, toNumber(data.medicalAllowance));

  const pfDeduction = Math.max(0, toNumber(data.pfDeduction));
  const esiDeduction = Math.max(0, toNumber(data.esiDeduction));
  const tdsDeduction = Math.max(0, toNumber(data.tdsDeduction));
  const professionalTax = Math.max(0, toNumber(data.professionalTax));

  const lwpDeduction = Math.max(0, toNumber(data.deductions));

  const totalEarnings = basicSalary + hra + transportAllowance + specialAllowance;
  const medicalInsuranceDeduction = 600;
  const totalDeductions = pfDeduction + esiDeduction + tdsDeduction + professionalTax + medicalInsuranceDeduction + lwpDeduction;
  const netPay = Math.max(0, totalEarnings - totalDeductions);
  const netPayInWords = `${titleCase(numberToWordsIndian(Math.round(netPay)))} Only`;

  const totalDays = getDaysInMonth(data.month);
  const lwpDays = totalDays > 0 && lwpDeduction > 0 ? Math.round(lwpDeduction * totalDays / 15000) : 0;
  const workingDays = totalDays - lwpDays;
  const paySlipMonth = formatPaySlipMonth(data.month);
  const rateOfWorkmen = totalEarnings / 26;

  const employeeRows = [
    { label: "Employee Name", value: `${data.employeeName}` },
    { label: "Employee ID", value: `${data.employeeId}` },
    { label: "Project Name", value: `${data.projectName}` },
    { label: "Designation", value: `${data.designation}` },
    { label: "Rate of Workmen", value: `${currencyWithDecimals.format(rateOfWorkmen)}` },
    { label: "Bank Name", value: `${data.bankName}` },
    { label: "Account No", value: `${data.accountNo}` },
    { label: "LWP Days", value: lwpDays > 0 ? `${lwpDays} Day${lwpDays !== 1 ? "s" : ""}` : "0" }
  ];

  const payrollRows = [
    { earningsLabel: "Basic Salary", earningsAmount: basicSalary, deductionLabel: "Medical Insurance", deductionAmount: medicalInsuranceDeduction },
    { earningsLabel: "HRA", earningsAmount: hra, deductionLabel: "LWP Days", deductionAmount: lwpDeduction },
    { earningsLabel: "Transport Allowances", earningsAmount: transportAllowance, deductionLabel: "TDS", deductionAmount: tdsDeduction },
    { earningsLabel: "Special Allowance", earningsAmount: specialAllowance, deductionLabel: "Other Deductions", deductionAmount: 0 }
  ];

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
    breakBefore: pageBreak ? "page" : "auto",
  };

  const innerPad: React.CSSProperties = {
    padding: "6mm 12mm 4mm",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={pageStyle}>
      <div style={innerPad}>
        <DatcoDocHeader />

        <div style={{ marginTop: "4mm", fontSize: "0.85rem", flex: 1 }}>
          <h2 style={{ margin: 0, textAlign: "center", fontSize: "1.1rem", fontWeight: "bold", textDecoration: "underline" }}>PAY SLIP</h2>

          <section style={{ marginTop: "3mm", fontSize: "0.85rem" }}>
            <p style={{ margin: 0, fontWeight: "bold" }}>PAN No-{data.panNumber}</p>
            {data.principalEmployer && <p style={{ marginTop: "1.5mm" }}>{data.principalEmployer}</p>}
            <p style={{ marginTop: "1.5mm" }}>{data.engagedThrough}</p>
          </section>

          <section style={{ marginTop: "2.5mm" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #000", padding: "4px 8px" }}>Working Days: {workingDays} Days</td>
                  <td style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "right" }}>Pay Slip Month: {paySlipMonth}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section style={{ marginTop: "3mm" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <tbody>
                {employeeRows.map((row) => (
                  <tr key={row.label}>
                    <th style={{ width: "50%", border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>
                      {row.label}
                    </th>
                    <td style={{ width: "50%", border: "1px solid #000", padding: "4px 8px", textAlign: "center" }}>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section style={{ marginTop: "3mm" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <thead>
                <tr>
                  <th style={{ width: "25%", border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>Earnings</th>
                  <th style={{ width: "25%", border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>Amount</th>
                  <th style={{ width: "25%", border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>Deductions</th>
                  <th style={{ width: "25%", border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {payrollRows.map((row) => (
                  <tr key={row.earningsLabel}>
                    <th style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "left", fontWeight: "bold" }}>{row.earningsLabel}</th>
                    <td style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "center" }}>
                      {amountFormat.format(row.earningsAmount)}
                    </td>
                    <th style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>{row.deductionLabel}</th>
                    <td style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "center" }}>
                      {amountFormat.format(row.deductionAmount)}
                    </td>
                  </tr>
                ))}
                <tr>
                  <th style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>Total Earnings</th>
                  <td style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>
                    {amountFormat.format(totalEarnings)}
                  </td>
                  <th style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>Total Deductions</th>
                  <td style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "center", fontWeight: "bold" }}>
                    {amountFormat.format(totalDeductions)}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem" }}>
              <tbody>
                <tr>
                  <th style={{ width: "50%", border: "1px solid #000", padding: "4px 8px", textAlign: "left", fontWeight: "bold" }}>Net Pay</th>
                  <td style={{ width: "50%", border: "1px solid #000", padding: "4px 8px", textAlign: "right", fontWeight: "bold" }}>
                    {currencyFormat.format(netPay)}
                  </td>
                </tr>
                <tr>
                  <th style={{ border: "1px solid #000", padding: "4px 8px", textAlign: "left", fontWeight: "bold" }}>In Words</th>
                  <td style={{ border: "1px solid #000", padding: "4px 8px", fontWeight: "bold" }}>{netPayInWords}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section style={{ marginTop: "auto", paddingTop: "5mm", textAlign: "right" }}>
            <p style={{ fontWeight: "bold", margin: 0 }}>For DATCO CIVIL</p>
            <img
              src="/images/logos/signatur2.png"
              alt="Authorised Signatory Signature"
              style={{ marginLeft: "auto", height: "auto", width: "100%", maxWidth: "30mm", objectFit: "contain", display: "block" }}
            />
            <p style={{ fontWeight: "bold", margin: 0 }}>Authorised Signatory</p>
            <p style={{ margin: 0 }}>Human Resources Department</p>
          </section>
        </div>
      </div>

      <DatcoFooterBar />
    </div>
  );
}

export default function Template1({ data: _ }: SalarySlipTemplate1Props) {
  return (
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {SLIPS.map((s, i) => {
        const deductions = lwpAmount(s.lwp, s.month);
        const slipData: SalarySlipData = {
          ...BASE,
          month: s.month,
          workingDays: calendarDays(s.month),
          deductions,
        };
        return <SlipPage key={s.month} data={slipData} pageBreak={i > 0} />;
      })}
    </div>
  );
}

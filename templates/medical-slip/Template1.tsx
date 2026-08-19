import React from "react";
import { MedicalSlipData } from "../../data/mockData";

/*
 * "Sale Bill" - hospital pharmacy / consumables invoice.
 *
 * Rows come from the `items` textarea, one line per row, columns split on "|":
 *
 *   NAME | HSN | CATEGORY | BATCH | EXPIRY | RATE | QTY | GST% | NET AMOUNT?
 *
 * NET AMOUNT is optional; blank means rate x qty x (1 + gst/100), which is the
 * arithmetic the printed bills use.
 *
 * Totals follow the printed footer exactly:
 *   Sale Amt (per slab) = sum of the GST-inclusive row amounts in that slab
 *   Taxable Amt         = Sale Amt / (1 + gst/100)
 *   Tax                 = Sale Amt - Taxable Amt      (CGST = SGST = Tax/2)
 *   Net Amount          = sum of Taxable Amt          <- excludes GST
 *   Net Payable         = round(Net Amount + Total GST), the delta being Round Off
 */

const SANS = "Arial, Helvetica, sans-serif";
const BORDER = "#9a9a9a";
const HEAD_BG = "#b9b9b9";

export interface SlipRow {
  name: string;
  hsn: string;
  category: string;
  batch: string;
  expiry: string;
  rate: number;
  qty: number;
  gst: number;
  amount: number;
}

const toNumber = (value: string) => {
  const parsed = Number(`${value}`.replace(/[^0-9.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const round2 = (value: number) => Math.round(value * 100) / 100;

export function parseRows(raw: string): SlipRow[] {
  return `${raw ?? ""}`
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const cell = line.split("|").map((part) => part.trim());
      const rate = toNumber(cell[5] ?? "");
      const qty = toNumber(cell[6] ?? "");
      const gst = toNumber(cell[7] ?? "");
      const explicit = `${cell[8] ?? ""}`.trim();

      return {
        name: cell[0] ?? "",
        hsn: cell[1] ?? "",
        category: cell[2] ?? "",
        batch: cell[3] ?? "",
        expiry: cell[4] ?? "",
        rate,
        qty,
        gst,
        amount: explicit ? toNumber(explicit) : round2(rate * qty * (1 + gst / 100))
      };
    });
}

const money = (value: number) =>
  value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const money3 = (value: number) =>
  value.toLocaleString("en-IN", { minimumFractionDigits: 3, maximumFractionDigits: 3 });

/* Indian numbering, matching the printed "Rupees (In Words)" line. */
const ONES = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
  "Eighteen", "Nineteen"
];
const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

function underThousand(value: number): string {
  const parts: string[] = [];
  const hundreds = Math.floor(value / 100);
  const rest = value % 100;

  if (hundreds) {
    parts.push(`${ONES[hundreds]} Hundred`);
  }
  if (rest < 20) {
    if (rest) parts.push(ONES[rest]);
  } else {
    parts.push(TENS[Math.floor(rest / 10)]);
    if (rest % 10) parts.push(ONES[rest % 10]);
  }
  return parts.join(" ");
}

export function amountInWords(value: number): string {
  const whole = Math.floor(Math.abs(value));
  if (whole === 0) {
    return "Zero Only";
  }

  const groups: Array<[number, string]> = [
    [Math.floor(whole / 10000000), "Crore"],
    [Math.floor((whole % 10000000) / 100000), "Lakh"],
    [Math.floor((whole % 100000) / 1000), "Thousand"],
    [whole % 1000, ""]
  ];

  const words = groups
    .filter(([count]) => count > 0)
    .map(([count, label]) => `${underThousand(count)}${label ? ` ${label}` : ""}`)
    .join(" ");

  return `${words} Only`;
}

interface MedicalSlipTemplateProps {
  data: MedicalSlipData;
}

/* Roughly how many item-row heights the GST summary + totals + footer occupy.
   Used to decide whether that block still fits under the last page of items. */
const SUMMARY_ROW_EQUIVALENT = 14;

export default function Template1({ data }: MedicalSlipTemplateProps) {
  const text = (key: keyof MedicalSlipData) => `${data[key] ?? ""}`.trim();

  const rows = parseRows(`${data.items ?? ""}`);
  const logoPath = text("logoPath");
  const isInterState = text("supplyType").toLowerCase().startsWith("inter");

  /* Page 1 carries the bill header, so it fits fewer rows than the rest. */
  const firstPageRows = Math.max(1, Number(data.rowsFirstPage) || 36);
  const laterPageRows = Math.max(1, Number(data.rowsPerPage) || 42);

  const pages: SlipRow[][] = [rows.slice(0, firstPageRows)];
  for (let index = firstPageRows; index < rows.length; index += laterPageRows) {
    pages.push(rows.slice(index, index + laterPageRows));
  }

  const lastCapacity = pages.length === 1 ? firstPageRows : laterPageRows;
  const summaryNeedsOwnPage =
    pages[pages.length - 1].length + SUMMARY_ROW_EQUIVALENT > lastCapacity;
  const totalPages = pages.length + (summaryNeedsOwnPage ? 1 : 0);

  /* One line per distinct GST slab, computed across every page. */
  const slabs = Array.from(new Set(rows.map((row) => row.gst)))
    .sort((a, b) => a - b)
    .map((gst) => {
      const sale = round2(
        rows.filter((row) => row.gst === gst).reduce((sum, row) => sum + row.amount, 0)
      );
      const taxable = round2(sale / (1 + gst / 100));
      return { gst, sale, taxable, tax: round2(sale - taxable) };
    });

  const netAmount = round2(slabs.reduce((sum, slab) => sum + slab.taxable, 0));
  const totalGst = round2(slabs.reduce((sum, slab) => sum + slab.tax, 0));
  const netPayable = Math.round(netAmount + totalGst);
  const roundOff = round2(netPayable - (netAmount + totalGst));

  const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "297mm",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    color: "#111",
    fontFamily: SANS,
    padding: "9mm 8mm 8mm"
  };

  const th: React.CSSProperties = {
    background: HEAD_BG,
    border: `1px solid ${BORDER}`,
    padding: "4px 4px",
    fontSize: "9px",
    fontWeight: "bold",
    textAlign: "center"
  };

  const td: React.CSSProperties = {
    border: `1px solid ${BORDER}`,
    padding: "4px 4px",
    fontSize: "9px",
    verticalAlign: "middle",
    overflowWrap: "anywhere"
  };

  const num: React.CSSProperties = { ...td, textAlign: "right" };
  const mid: React.CSSProperties = { ...td, textAlign: "center" };

  const field = (label: string, value: string, labelWidth = "82px") =>
    value ? (
      <div style={{ display: "flex", gap: "5px", fontSize: "9.5px", lineHeight: 1.6 }}>
        <span style={{ fontWeight: "bold", width: labelWidth, flexShrink: 0 }}>{label}</span>
        <span style={{ flexShrink: 0 }}>:-</span>
        <span style={{ overflowWrap: "anywhere" }}>{value}</span>
      </div>
    ) : null;

  const totalLine = (label: string, value: string, bold = false) => (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        fontSize: "10px",
        fontWeight: bold ? "bold" : "normal",
        lineHeight: 1.9
      }}
    >
      <span style={{ fontWeight: "bold", width: "96px", flexShrink: 0 }}>{label}</span>
      <span style={{ width: "18px", flexShrink: 0 }}>:-</span>
      <span style={{ flex: 1, textAlign: "right" }}>{value}</span>
    </div>
  );

  const letterhead = (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      {logoPath ? (
        <img
          src={logoPath}
          alt={text("centreName") || "Centre"}
          style={{ width: "58px", height: "58px", objectFit: "contain", flexShrink: 0 }}
        />
      ) : null}
      <div style={{ flex: 1, minWidth: 0, textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "18px", fontWeight: "bold", lineHeight: 1.2 }}>
          {text("centreName")}
        </h1>
        {text("addressLine") ? (
          <p style={{ margin: "5px 0 0", fontSize: "9.5px", lineHeight: 1.35 }}>
            {text("addressLine")}
          </p>
        ) : null}
      </div>
      <div style={{ width: "58px", flexShrink: 0 }} />
    </div>
  );

  const billHeader = (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          marginTop: "7px",
          fontSize: "9.5px"
        }}
      >
        <span>
          <b>GSTIN</b>&nbsp; :-{text("gstin")}
        </span>
        <span>
          <b>DL No</b>&nbsp; :-{text("dlNo")}
        </span>
      </div>

      <div style={{ borderTop: `1px solid ${BORDER}`, marginTop: "3px" }} />

      <div style={{ textAlign: "center", marginTop: "7px" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "12.5px",
            fontWeight: "bold",
            borderBottom: "1.1px solid #111",
            paddingBottom: "1px"
          }}
        >
          {text("billTitle") || "Sale Bill"}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          columnGap: "12px",
          marginTop: "9px"
        }}
      >
        <div>
          {field("UHID No", text("uhidNo"))}
          {field("Bill No", text("billNo"))}
          {field("Patient Name", text("patientName"))}
          {field("Consultant", text("consultant"))}
        </div>
        <div>
          {field("Bill Date", text("billDate"), "68px")}
          {field("IP No", text("ipNo"), "68px")}
          {field("Location", text("location"), "68px")}
        </div>
        <div>
          {field("Print Date", text("printDate"), "80px")}
          {field("Payment Mode", text("paymentMode"), "80px")}
        </div>
      </div>
    </>
  );

  const itemTable = (pageRows: SlipRow[]) => (
    <table
      style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", marginTop: "9px" }}
    >
      <colgroup>
        <col style={{ width: "23%" }} />
        <col style={{ width: "10%" }} />
        <col style={{ width: "12%" }} />
        <col style={{ width: "12%" }} />
        <col style={{ width: "12%" }} />
        <col style={{ width: "9%" }} />
        <col style={{ width: "6%" }} />
        <col style={{ width: "7%" }} />
        <col style={{ width: "11%" }} />
      </colgroup>
      <thead>
        <tr>
          <th style={th}>Item Name</th>
          <th style={th}>HSN Code</th>
          <th style={th}>Category</th>
          <th style={th}>Batch No</th>
          <th style={th}>Exp Date</th>
          <th style={th}>Sale Rate</th>
          <th style={th}>Qty</th>
          <th style={th}>GST %</th>
          <th style={th}>Net Amount</th>
        </tr>
      </thead>
      <tbody>
        {pageRows.map((row, index) => (
          <tr key={index}>
            <td style={td}>{row.name}</td>
            <td style={mid}>{row.hsn}</td>
            <td style={mid}>{row.category}</td>
            <td style={mid}>{row.batch}</td>
            <td style={mid}>{row.expiry}</td>
            <td style={num}>{money(row.rate)}</td>
            <td style={num}>{money(row.qty)}</td>
            <td style={num}>{money(row.gst)}</td>
            <td style={num}>{money(row.amount)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const summaryBlock = (
    <>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginTop: "14px" }}>
        <table style={{ borderCollapse: "collapse", tableLayout: "fixed", flex: 1 }}>
          <colgroup>
            <col style={{ width: "11%" }} />
            <col style={{ width: "17%" }} />
            <col style={{ width: "19%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "13%" }} />
            <col style={{ width: "14%" }} />
          </colgroup>
          <thead>
            <tr>
              <th style={th}>GST %</th>
              <th style={th}>Sale Amt</th>
              <th style={th}>Taxable Amt</th>
              <th style={th}>Tax</th>
              <th style={th}>CGST</th>
              <th style={th}>SGST</th>
              <th style={th}>IGST</th>
            </tr>
          </thead>
          <tbody>
            {slabs.map((slab) => (
              <tr key={slab.gst}>
                <td style={mid}>{money(slab.gst).replace(/\.00$/, "")}</td>
                <td style={num}>{money(slab.sale)}</td>
                <td style={num}>{money(slab.taxable)}</td>
                <td style={num}>{money(slab.tax)}</td>
                <td style={num}>{money3(isInterState ? 0 : slab.tax / 2)}</td>
                <td style={num}>{money3(isInterState ? 0 : slab.tax / 2)}</td>
                <td style={num}>{money3(isInterState ? slab.tax : 0)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ width: "232px", flexShrink: 0 }}>
          {totalLine("Net Amount", money(netAmount))}
          {totalLine("Total  GST", money(totalGst))}
          {totalLine("Round Off", money(roundOff))}
          {totalLine("Net Payable", money(netPayable), true)}
        </div>
      </div>

      <p style={{ margin: "12px 0 0", fontSize: "9.5px" }}>
        <b>Rupees (In Words)</b> : {amountInWords(netPayable)}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "20px",
          marginTop: "14px"
        }}
      >
        <p style={{ margin: 0, fontSize: "9.5px" }}>
          <b>Created By</b> :-&nbsp; {text("createdBy")}
        </p>
        {/* Label only - signature and PAID stamp go on the printed sheet */}
        <p style={{ margin: 0, fontSize: "9.5px" }}>Authorized Signatory</p>
      </div>
    </>
  );

  const pageFooter = (pageNumber: number) => {
    const format = text("pageLabel") || "Page {n} of {m}";
    return (
      <p style={{ margin: "10px 0 0", fontSize: "8.5px", textAlign: "right" }}>
        {format.replace("{n}", `${pageNumber}`).replace("{m}", `${totalPages}`)}
      </p>
    );
  };

  /* Each sheet is a direct child of #print-root so print rules break between
     them and never inside one. */
  const sheet = (key: string, pageNumber: number, children: React.ReactNode) => (
    <div
      key={key}
      className="doc-page"
      style={pageStyle}
    >
      {children}
      <div style={{ flex: 1 }} />
      {pageFooter(pageNumber)}
    </div>
  );

  return (
    <>
      {pages.map((pageRows, index) =>
        sheet(`page-${index}`, index + 1, (
          <>
            {letterhead}
            {index === 0 ? billHeader : null}
            {itemTable(pageRows)}
            {!summaryNeedsOwnPage && index === pages.length - 1 ? summaryBlock : null}
          </>
        ))
      )}
      {summaryNeedsOwnPage
        ? sheet("page-summary", totalPages, (
            <>
              {letterhead}
              {summaryBlock}
            </>
          ))
        : null}
    </>
  );
}

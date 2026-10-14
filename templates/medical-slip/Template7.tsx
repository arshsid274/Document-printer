import React from "react";
import { MedicalSlipData } from "../../data/mockData";

/*
 * Pharmacy cash-memo - dot-matrix / thermal receipt style.
 *
 * A narrow monospace slip: invocation, store header, GSTIN / DL / phone, a
 * patient + bill block, then the itemised rows. Amounts are printed as given
 * (they carry the store's own per-line discount, so they are NOT recomputed
 * from MRP x qty); the net is the rounded sum. Row format:
 *
 *   NAME | PACK | BATCH | EXP | QTY | MRP | AMOUNT
 */

const MONO = "'Courier New', 'DejaVu Sans Mono', monospace";

interface Row {
  name: string;
  pack: string;
  batch: string;
  exp: string;
  qty: string;
  mrp: string;
  amount: number;
}

function parseRows(raw: string): Row[] {
  return `${raw ?? ""}`
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const c = line.split("|").map((p) => p.trim());
      return {
        name: c[0] ?? "",
        pack: c[1] ?? "",
        batch: c[2] ?? "",
        exp: c[3] ?? "",
        qty: c[4] ?? "",
        mrp: c[5] ?? "",
        amount: Number(`${c[6] ?? ""}`.replace(/[^0-9.-]/g, "")) || 0
      };
    });
}

const money = (v: number) =>
  v.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const ONES = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
  "Eighteen", "Nineteen"
];
const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

function underThousand(n: number): string {
  const out: string[] = [];
  const h = Math.floor(n / 100);
  const r = n % 100;
  if (h) out.push(`${ONES[h]} Hundred`);
  if (r < 20) {
    if (r) out.push(ONES[r]);
  } else {
    out.push(TENS[Math.floor(r / 10)]);
    if (r % 10) out.push(ONES[r % 10]);
  }
  return out.join(" ");
}

function amountInWords(value: number): string {
  const whole = Math.floor(Math.abs(value));
  if (whole === 0) return "Zero Only";
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

export default function Template7({ data }: MedicalSlipTemplateProps) {
  const text = (key: keyof MedicalSlipData) => `${data[key] ?? ""}`.trim();

  const rows = parseRows(`${data.msItems ?? ""}`);
  const total = Math.round(rows.reduce((sum, r) => sum + r.amount, 0) * 100) / 100;
  const net = Math.round(total);

  const pageStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    background: "#fff",
    color: "#1a1a1a",
    fontFamily: MONO,
    padding: "8mm 0",
    display: "flex",
    justifyContent: "center"
  };

  /* The slip itself: a narrow monospace column, like a till roll. */
  const slip: React.CSSProperties = {
    width: "94mm",
    fontFamily: MONO,
    fontSize: "11px",
    lineHeight: 1.55,
    letterSpacing: "0.2px"
  };

  const rule = (dashed = true) => (
    <div
      style={{
        borderTop: `1px ${dashed ? "dashed" : "solid"} #555`,
        margin: "5px 0"
      }}
    />
  );

  const th: React.CSSProperties = {
    fontSize: "9.5px",
    fontWeight: "bold",
    textAlign: "left",
    padding: "0 3px",
    whiteSpace: "nowrap"
  };
  const td: React.CSSProperties = {
    fontSize: "9.5px",
    padding: "1px 3px",
    verticalAlign: "top",
    whiteSpace: "nowrap"
  };
  const tdName: React.CSSProperties = { ...td, whiteSpace: "normal", overflowWrap: "anywhere" };
  const num: React.CSSProperties = { ...td, textAlign: "right" };
  const thNum: React.CSSProperties = { ...th, textAlign: "right" };

  return (
    <div style={pageStyle}>
      <div style={slip}>
        {/* ═════════ Header ═════════ */}
        <div style={{ textAlign: "center" }}>
          {text("msInvocation") ? (
            <div style={{ fontSize: "10px" }}>{text("msInvocation")}</div>
          ) : null}
          <div style={{ fontSize: "17px", fontWeight: "bold", letterSpacing: "1.5px" }}>
            {text("msStoreName")}
          </div>
          {text("msAddress") ? (
            <div style={{ fontSize: "10.5px" }}>{text("msAddress")}</div>
          ) : null}
          {text("msTime") ? (
            <div style={{ fontSize: "10.5px", textAlign: "right" }}>TIME:{text("msTime")}</div>
          ) : null}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", marginTop: "2px" }}>
          <span>GSTIN : {text("msGstin")}</span>
          <span>Phone : {text("msPhone")}</span>
        </div>
        {text("msDlNo") ? <div>DL.NO.:{text("msDlNo")}</div> : null}

        {rule()}

        {/* ═════════ Patient / bill ═════════ */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
          <span>PT.NAME :{text("msPatientName")}</span>
          <span>BILL NO :{text("msBillNo")}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
          <span>DR.NAME :{text("msDoctorName")}</span>
          <span>DATE :{text("msDate")}</span>
        </div>

        {rule()}

        {/* ═════════ Items ═════════ */}
        <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "11%" }} />
            <col style={{ width: "7%" }} />
            <col style={{ width: "16%" }} />
            <col style={{ width: "16%" }} />
          </colgroup>
          <thead>
            <tr>
              <th style={th}>DESCRIPTION</th>
              <th style={th}>BATCH</th>
              <th style={th}>EXP</th>
              <th style={thNum}>QTY</th>
              <th style={thNum}>M.R.P</th>
              <th style={thNum}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td style={tdName}>{r.name}</td>
                <td style={td}>{r.batch}</td>
                <td style={td}>{r.exp}</td>
                <td style={num}>{r.qty}</td>
                <td style={num}>{r.mrp}</td>
                <td style={num}>{money(r.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {rule()}

        {/* ═════════ Totals ═════════ */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>NO.of Product: {rows.length}</span>
          <span>
            TOTAL&nbsp; : <b>{money(total)}</b>
          </span>
        </div>
        <div style={{ textAlign: "right", fontSize: "13px", fontWeight: "bold" }}>
          NET AMOUNT: {money(net)}
        </div>

        {rule()}

        <div>Rs. {amountInWords(net)}</div>

        {rule()}

        {/* ═════════ Footer ═════════ */}
        <div style={{ textAlign: "right", marginTop: "2px" }}>
          FOR {text("msStoreName")}
        </div>
        <div style={{ marginTop: "10px" }}>
          {[text("msFooter1"), text("msFooter2"), text("msFooter3")]
            .filter(Boolean)
            .map((line, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                <span>{line}</span>
                {i === 1 ? <span>(Signature)</span> : null}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

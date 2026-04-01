import React from "react";
import { BillData } from "../../data/mockData";

function toNum(v: string | number, fb = 0): number {
  if (typeof v === "number" && isFinite(v)) return v;
  const n = Number(`${v ?? ""}`.replace(/,/g, ""));
  return isFinite(n) ? n : fb;
}

export default function Template1({ data }: { data: BillData }) {
  const items = [
    { barcode: `${data.item1Barcode}`, name: `${data.item1Name}`, qty: toNum(data.item1Qty), price: toNum(data.item1Price) },
    { barcode: `${data.item2Barcode}`, name: `${data.item2Name}`, qty: toNum(data.item2Qty), price: toNum(data.item2Price) },
    { barcode: `${data.item3Barcode}`, name: `${data.item3Name}`, qty: toNum(data.item3Qty), price: toNum(data.item3Price) },
    { barcode: `${data.item4Barcode}`, name: `${data.item4Name}`, qty: toNum(data.item4Qty), price: toNum(data.item4Price) },
    { barcode: `${data.item5Barcode}`, name: `${data.item5Name}`, qty: toNum(data.item5Qty), price: toNum(data.item5Price) },
  ].filter(item => item.name && item.name !== "undefined" && item.name !== "");

  const netAmount = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const vatRate = 0.05;
  const taxableAmount = netAmount / (1 + vatRate);
  const vatAmount = netAmount - taxableAmount;
  const cashReceived = toNum(data.cashReceived);
  const change = cashReceived - netAmount;
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  const wrap: React.CSSProperties = {
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "11px",
    color: "#000",
    width: "300px",
    margin: "0 auto",
    padding: "14px 12px",
    background: "#fff",
    lineHeight: 1.5,
  };

  const hr: React.CSSProperties = { borderTop: "1px dashed #000", margin: "6px 0" };
  const bold: React.CSSProperties = { fontWeight: "bold" };
  const center: React.CSSProperties = { textAlign: "center" };

  return (
    <div style={wrap}>

      {/* ── Store Header ── */}
      <div style={{ ...center, marginBottom: "6px" }}>
        <div style={{ ...bold, fontSize: "14px" }}>{data.storeName}</div>
        <div>{data.storeMall}</div>
        <div>{data.storeAddress}</div>
        <div>TEL: {data.storePhone} &nbsp; FAX: {data.storeFax}</div>
      </div>
      <div style={{ ...center, marginBottom: "3px" }}>TRN# {data.trnNumber}</div>
      <div style={{ ...center, ...bold, marginBottom: "4px" }}>
        TAX INVOICE / فاتورة ضريبية
      </div>

      <div style={hr} />

      {/* ── Transaction Details ── */}
      <table style={{ width: "100%", fontSize: "11px", borderCollapse: "collapse" }}>
        <tbody>
          {([
            ["Invoice No", `${data.invoiceNo}`, "رقم الفاتورة"],
            ["Date", `${data.date}`, "التاريخ"],
            ["Time", `${data.time}`, "الوقت"],
            ["Terminal", `${data.terminal}`, "الطرفية"],
            ["Cashier", `${data.cashier}`, "المحاسب"],
            ["Shift No", `${data.shiftNo}`, "رقم الوردية"],
            ["Location", `${data.location}`, "الموقع"],
          ] as [string, string, string][]).map(([label, value, arabic]) => (
            <tr key={label}>
              <td style={{ width: "36%", paddingBottom: "1px" }}>{label}</td>
              <td style={{ width: "4%", paddingBottom: "1px" }}>:</td>
              <td style={{ paddingBottom: "1px" }}>{value}</td>
              <td style={{ textAlign: "right", paddingBottom: "1px" }}>{arabic}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={hr} />

      {/* ── Items Column Headers ── */}
      <table style={{ width: "100%", fontSize: "10px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", ...bold, width: "38%", paddingBottom: "2px" }}>
              Barcode<br /><span>الباركود</span>
            </th>
            <th style={{ textAlign: "center", ...bold, width: "10%", paddingBottom: "2px" }}>
              Qty<br /><span>الكمية</span>
            </th>
            <th style={{ textAlign: "right", ...bold, width: "22%", paddingBottom: "2px" }}>
              RSP<br /><span>السعر</span>
            </th>
            <th style={{ textAlign: "right", ...bold, width: "22%", paddingBottom: "2px" }}>
              Amount<br /><span>المبلغ</span>
            </th>
          </tr>
        </thead>
      </table>

      <div style={hr} />

      {/* ── Items ── */}
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: "6px" }}>
          <div style={{ ...bold, fontSize: "11px" }}>{item.name}</div>
          <table style={{ width: "100%", fontSize: "10px", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ width: "38%" }}>{item.barcode}</td>
                <td style={{ textAlign: "center", width: "10%" }}>{item.qty}</td>
                <td style={{ textAlign: "right", width: "22%" }}>{item.price.toFixed(2)}</td>
                <td style={{ textAlign: "right", width: "20%" }}>{(item.qty * item.price).toFixed(2)}</td>
                <td style={{ textAlign: "right", width: "10%", fontSize: "9px" }}>T5</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      <div style={hr} />

      {/* ── Net Amount ── */}
      <div style={{ display: "flex", justifyContent: "space-between", ...bold, marginBottom: "4px" }}>
        <span>Net Amount :</span>
        <span>{netAmount.toFixed(2)}</span>
        <span>:صافي الإجمالي</span>
      </div>

      <div style={hr} />

      {/* ── Tax Table ── */}
      <table style={{ width: "100%", fontSize: "10px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", ...bold, paddingBottom: "2px" }}>
              Tax<br />Code<br /><span style={{ fontSize: "9px" }}>كود<br />الضريبة</span>
            </th>
            <th style={{ textAlign: "right", ...bold, paddingBottom: "2px" }}>
              Taxable<br />Amount<br /><span style={{ fontSize: "9px" }}>المبلغ الخاضع<br />للضريبة</span>
            </th>
            <th style={{ textAlign: "right", ...bold, paddingBottom: "2px" }}>
              VAT<br />Amount<br /><span style={{ fontSize: "9px" }}>مبلغ<br />الضريبة</span>
            </th>
            <th style={{ textAlign: "right", ...bold, paddingBottom: "2px" }}>
              Net<br />Amount<br /><span style={{ fontSize: "9px" }}>صافي<br />الإجمالي</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T5</td>
            <td style={{ textAlign: "right" }}>{taxableAmount.toFixed(2)}</td>
            <td style={{ textAlign: "right" }}>{vatAmount.toFixed(2)}</td>
            <td style={{ textAlign: "right" }}>{netAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div style={hr} />

      {/* ── Settlement ── */}
      <div style={{ ...bold, marginBottom: "1px" }}>SETTLEMENT</div>
      <div style={{ marginBottom: "3px", fontSize: "10px" }}>تسوية</div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1px" }}>
        <span>DHS</span>
        <span>: {cashReceived.toFixed(2)} X 1.00 = {cashReceived.toFixed(2)}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1px" }}>
        <span>Payment Received :</span>
        <span>{cashReceived.toFixed(2)}</span>
      </div>
      <div style={{ fontSize: "10px", marginBottom: "1px" }}>تم استلام الدفع</div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1px" }}>
        <span>Balance Paid :</span>
        <span>{(-change).toFixed(2)}</span>
      </div>
      <div style={{ fontSize: "10px", marginBottom: "2px" }}>تم ارجاع الرصيد</div>
      <div style={{ borderTop: "1px dashed #000", margin: "3px 0" }} />
      <div style={{ textAlign: "right", marginBottom: "4px" }}>00.00</div>

      <div style={hr} />

      <div style={{ marginBottom: "4px" }}>Total Qty Scanned : {totalQty}</div>

      <div style={hr} />

      {/* ── Footer ── */}
      <div style={{ ...center, fontSize: "10px" }}>
        <div>NO EXCHANGE ON LINGERIE &amp; ELECTRONICS</div>
        <div>KEEP BILL FOR EXCHANGE WITHIN 24 HRS</div>
        <div>NO CASH REFUND, THANK YOU VISIT AGAIN</div>
      </div>

    </div>
  );
}

"use client";

/** Shared DATCO branded header — matches Liceria & Co. style */
export function DatcoDocHeader() {
  return (
    <header style={{ marginBottom: "5mm", fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* Top row: logo+name left | contact right */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "2.5mm" }}>

        {/* Left: logo only */}
        <img
          src="/images/logos/Datco_Logo-removebg-preview.png"
          alt="DATCO"
          style={{ height: "13.65mm", width: "auto", objectFit: "contain" }}
        />

        {/* Right: contact info with icons */}
        <div style={{ textAlign: "right", fontSize: "0.85rem", color: "#111", lineHeight: "1.75", fontWeight: "bold" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2mm" }}>
            <span>9446144967 / 7994282695</span>
            {/* phone icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#c0392b" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2mm" }}>
            <span>davisvibin@gmail.com</span>
            {/* envelope icon */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#c0392b" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom divider: short red accent + dark line */}
      <div style={{ display: "flex", height: "2.5px" }}>
        <div style={{ width: "35mm", background: "#c0392b", borderRadius: "2px 0 0 2px" }} />
        <div style={{ flex: 1, background: "#1e2748" }} />
      </div>
    </header>
  );
}

/** Tiled red footer bar — normal flow, full width */
export function DatcoFooterBar() {
  return (
    <div style={{ width: "100%", boxSizing: "border-box" }}>
      <div style={{ textAlign: "center", padding: "2mm 0 1.5mm", fontSize: "0.85rem", fontWeight: "bold", color: "#111", fontFamily: "Arial, Helvetica, sans-serif" }}>
        Thoduparamban House, Vallakkunnu, P. O. Kallettumkara
      </div>
      <div style={{ height: "9mm", width: "100%", background: "linear-gradient(to right, #e8191a 0%, #cc1818 20%, #b31616 40%, #991414 60%, #801212 80%, #6b0f0f 100%)" }} />
    </div>
  );
}

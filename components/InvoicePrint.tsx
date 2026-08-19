"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface InvoicePrintProps {
  children: React.ReactNode;
}

export default function InvoicePrint({ children }: InvoicePrintProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    pageStyle: `
    @page {
      size: A4;
      margin: 8mm;
    }

    @media print {
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      #print-root {
        width: 100%;
        max-width: none;
        margin: 0;
        box-sizing: border-box;
      }

      #print-root > * {
        page-break-inside: avoid;
        break-inside: avoid-page;
      }

      .no-print {
        display: none !important;
      }
    }
  `,
  });

  return (
    <div className="w-full">
      <div className="no-print mb-3.5 flex justify-center">
        <button
          type="button"
          onClick={() => handlePrint?.()}
          className="cursor-pointer rounded-full bg-gradient-to-r from-[#1958b7] to-[#0b80aa] px-6 py-3 text-body-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_4px_14px_rgba(25,88,183,0.30)] transition-all hover:opacity-90 active:scale-95"
        >
          Print PDF
        </button>
      </div>

      {/* Visual wrapper (screen only): overflow-hidden clips corners on screen */}
      <div className="paper-sheet mx-auto w-full max-w-[190mm] overflow-hidden rounded-[2px] bg-white max-[700px]:max-w-full">
        {/* Print target: no overflow-hidden so footer bar is never clipped */}
        <div ref={printRef} id="print-root">
          {children}
        </div>
      </div>
    </div>
  );
}

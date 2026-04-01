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
      margin: 0;
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
        width: 190mm;
        max-width: 190mm;
        margin: 0 auto;
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
          className="cursor-pointer rounded-[10px] bg-gradient-to-r from-[#1958b7] to-[#0b80aa] px-5 py-2.5 font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
        >
          Print PDF
        </button>
      </div>

      {/* Visual wrapper (screen only): overflow-hidden clips corners on screen */}
      <div className="mx-auto w-full max-w-[190mm] overflow-hidden rounded-md bg-white shadow-[0_16px_30px_rgba(17,32,61,0.12)] max-[700px]:max-w-full">
        {/* Print target: no overflow-hidden so footer bar is never clipped */}
        <div ref={printRef} id="print-root">
          {children}
        </div>
      </div>
    </div>
  );
}

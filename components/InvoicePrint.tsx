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

      /* react-to-print prints a cloned copy in its own iframe and does NOT
         reliably carry the globals.css @media print rules, so the sheet-height
         caps that keep a document on the right number of pages must be repeated
         here. Without them the templates' inline 297mm min-height overflows the
         printable area and spills a mostly-blank extra page (very visible in
         Safari). Values mirror app/globals.css. */
      .usg-sheet {
        min-height: 250mm !important;
        page-break-inside: avoid;
        break-inside: avoid;
      }

      .doc-page {
        height: auto !important;
        padding: 2mm 3mm !important;
        page-break-inside: avoid;
        break-inside: avoid;
      }

      .doc-page:only-child {
        min-height: 265mm !important;
      }

      .doc-page:not(:only-child) {
        min-height: 245mm !important;
      }

      .doc-page + .doc-page {
        page-break-before: always;
        break-before: page;
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

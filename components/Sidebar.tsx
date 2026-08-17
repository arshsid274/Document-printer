"use client";

import { DocumentType, SidebarOption } from "../data/mockData";

interface SidebarProps {
  items: SidebarOption[];
  selected: DocumentType;
  onSelect: (documentType: DocumentType) => void;
}

export default function Sidebar({ items, selected, onSelect }: SidebarProps) {
  return (
    <aside className="no-print scrollbar-hide fixed left-0 top-0 h-screen w-[255px] overflow-y-auto bg-gradient-to-b from-rail-top to-rail-bottom text-white shadow-[4px_0_24px_rgba(17,32,61,0.18)] max-[1100px]:static max-[1100px]:h-auto max-[1100px]:w-full">
      <div className="p-6">
        <h1 className="m-0 text-headline-md leading-tight text-white">Document Printer</h1>
        <p className="mb-6 mt-1.5 font-mono text-label-mono uppercase tracking-[0.14em] text-white/60">
          Choose a document type
        </p>

        <nav className="flex flex-col gap-1.5" aria-label="Document types">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`rounded-full px-4 py-2.5 text-left font-mono text-label-mono transition-all duration-200 active:scale-[0.98] ${
                selected === item.id
                  ? "bg-white font-bold text-nav-active shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

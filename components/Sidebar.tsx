"use client";

import { DocumentType, SidebarOption } from "../data/mockData";

interface SidebarProps {
  items: SidebarOption[];
  selected: DocumentType;
  onSelect: (documentType: DocumentType) => void;
}

export default function Sidebar({ items, selected, onSelect }: SidebarProps) {
  return (
    <aside className="no-print fixed left-0 top-0 h-screen w-[255px] overflow-y-auto border-r border-white/20 bg-gradient-to-b from-[#0e2854] to-[#153b79] text-white max-[1100px]:static max-[1100px]:h-auto max-[1100px]:w-full">
      <div className="p-6">
        <h1 className="m-0 text-[1.35rem] tracking-[0.2px]">Document Printer</h1>
        <p className="mb-5 mt-2 text-sm text-white/85">Choose a document type</p>

        <nav className="flex flex-col gap-2.5" aria-label="Document types">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`rounded-[10px] border px-3 py-2.5 text-left transition-colors ${
                selected === item.id
                  ? "border-white bg-white font-semibold text-[#11315f]"
                  : "border-white/25 bg-white/10 text-white hover:bg-white/15"
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

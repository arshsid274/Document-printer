"use client";

import { TemplateMeta } from "../data/mockData";

interface TemplateSelectorProps {
  templates: TemplateMeta[];
  selectedTemplate: string;
  onSelect: (templateId: string) => void;
}

export default function TemplateSelector({
  templates,
  selectedTemplate,
  onSelect
}: TemplateSelectorProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_6px_18px_rgba(17,32,61,0.06)]">
      <h2 className="mb-3 text-base font-semibold text-slate-900">Template Version</h2>
      <div className="grid grid-cols-2 gap-2.5 max-[700px]:grid-cols-1">
        {templates.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => onSelect(template.id)}
            className={`rounded-lg border px-3 py-2.5 text-sm transition-colors ${
              selectedTemplate === template.id
                ? "border-[#1958b7] bg-[#e4eefc] font-semibold text-[#1958b7]"
                : "border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100"
            }`}
          >
            {template.label}
          </button>
        ))}
      </div>
    </section>
  );
}

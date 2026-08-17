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
    <section className="rounded-lg border border-border-whisper bg-white p-5 shadow-[0_2px_10px_rgba(17,32,61,0.06)]">
      <h2 className="mb-4 text-title-sm text-on-surface">Template Version</h2>
      <div className="grid grid-cols-2 gap-3 max-[700px]:grid-cols-1">
        {templates.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => onSelect(template.id)}
            className={`flex items-center justify-center rounded-lg border-2 p-3 text-center font-mono text-label-mono transition-all duration-200 active:scale-[0.98] ${
              selectedTemplate === template.id
                ? "border-calibrated-blue bg-surface-container font-bold text-calibrated-blue"
                : "border-border-whisper bg-white text-on-surface-variant hover:bg-surface-container-low"
            }`}
          >
            {template.label}
          </button>
        ))}
      </div>
    </section>
  );
}

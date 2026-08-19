"use client";

import { DynamicField } from "../data/mockData";

interface DynamicFormProps {
  fields: DynamicField[];
  values: Record<string, string | number>;
  onChange: (key: string, value: string | number) => void;
}

/* Flat field styling: no box, only a 2px bottom rule that turns
   Calibrated Blue on focus. */
const fieldClassName =
  "w-full border-b-2 border-border-whisper bg-transparent px-0 py-1.5 text-body-base text-on-surface outline-none transition-colors placeholder:text-muted-steel focus:border-calibrated-blue";

export default function DynamicForm({ fields, values, onChange }: DynamicFormProps) {
  /* Never index into an undefined map: a document type wired into the sidebar
     before its defaults exist should render blank fields, not crash the app. */
  const safeValues = values ?? {};
  return (
    <section className="mt-4 rounded-lg border border-border-whisper bg-white p-5 shadow-[0_2px_10px_rgba(17,32,61,0.06)]">
      <h2 className="mb-4 text-title-sm text-on-surface">Document Details</h2>
      <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
        {fields.map((field) => (
          <label key={field.key} className="grid gap-1">
            <span className="font-mono text-label-mono uppercase text-muted-steel">
              {field.label}
            </span>
            {field.type === "textarea" ? (
              <textarea
                rows={3}
                value={safeValues[field.key] ?? ""}
                onChange={(event) => onChange(field.key, event.target.value)}
                className={`${fieldClassName} resize-y leading-snug`}
              />
            ) : (
              <input
                type={field.type}
                value={safeValues[field.key] ?? ""}
                onChange={(event) => {
                  const rawValue = event.target.value;
                  if (field.type === "number") {
                    onChange(field.key, rawValue === "" ? 0 : Number(rawValue));
                    return;
                  }
                  onChange(field.key, rawValue);
                }}
                className={fieldClassName}
              />
            )}
          </label>
        ))}
      </form>
    </section>
  );
}

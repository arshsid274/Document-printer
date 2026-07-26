"use client";

import { DynamicField } from "../data/mockData";

interface DynamicFormProps {
  fields: DynamicField[];
  values: Record<string, string | number>;
  onChange: (key: string, value: string | number) => void;
}

export default function DynamicForm({ fields, values, onChange }: DynamicFormProps) {
  return (
    <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_6px_18px_rgba(17,32,61,0.06)]">
      <h2 className="mb-3 text-base font-semibold text-slate-900">Document Details</h2>
      <form className="grid gap-2.5" onSubmit={(event) => event.preventDefault()}>
        {fields.map((field) => (
          <label key={field.key} className="grid gap-1.5 text-sm text-slate-600">
            <span>{field.label}</span>
            {field.type === "textarea" ? (
              <textarea
                rows={3}
                value={values[field.key] ?? ""}
                onChange={(event) => onChange(field.key, event.target.value)}
                className="w-full resize-y rounded-lg border border-slate-300 bg-white px-2.5 py-2.5 leading-snug text-slate-800 outline-none transition-shadow focus:border-[#1958b7] focus:ring-4 focus:ring-[#1958b7]/15"
              />
            ) : (
            <input
              type={field.type}
              value={values[field.key] ?? ""}
              onChange={(event) => {
                const rawValue = event.target.value;
                if (field.type === "number") {
                  onChange(field.key, rawValue === "" ? 0 : Number(rawValue));
                  return;
                }
                onChange(field.key, rawValue);
              }}
              className="w-full rounded-lg border border-slate-300 bg-white px-2.5 py-2.5 text-slate-800 outline-none transition-shadow focus:border-[#1958b7] focus:ring-4 focus:ring-[#1958b7]/15"
            />
            )}
          </label>
        ))}
      </form>
    </section>
  );
}

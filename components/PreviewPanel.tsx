import React from "react";

interface PreviewPanelProps {
  children: React.ReactNode;
}

export default function PreviewPanel({ children }: PreviewPanelProps) {
  return (
    <section className="grid gap-3.5">
      <div className="no-print text-center">
        <h2 className="m-0 text-xl font-semibold text-slate-900">Live Preview</h2>
        <p className="mt-1.5 text-sm text-slate-500">A4 layout with print-ready formatting</p>
      </div>
      <div className="flex w-full items-start justify-center p-1.5">{children}</div>
    </section>
  );
}

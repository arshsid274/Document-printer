"use client";

interface GlobalErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalErrorPage({ error, reset }: GlobalErrorPageProps) {
  return (
    <html lang="en">
      <body className="m-0 bg-slate-100">
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">A critical error occurred</h2>
            <p className="mt-2 text-sm text-slate-600">
              {error.message || "An unexpected issue occurred while rendering the app."}
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-4 rounded-lg bg-[#1958b7] px-4 py-2 text-sm font-medium text-white"
            >
              Reload
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

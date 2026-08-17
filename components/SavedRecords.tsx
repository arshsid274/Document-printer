"use client";

import { useEffect, useRef, useState } from "react";
import { DocumentType } from "../data/mockData";

/*
 * Named records per document type, kept in localStorage.
 *
 * The auto-save in page.tsx only ever holds the *current* values for each
 * document type, so filling the form in again overwrites what was there. This
 * lets a set of values be stored under a name and pulled back later.
 *
 * Storage is deliberately behind readStore / writeStore: swapping localStorage
 * for a server (Mongo, or anything else) is a change to those two functions
 * plus making the callers async - the component itself would not change.
 */

const STORAGE_KEY = "document-printer.savedRecords.v1";

export interface SavedRecord {
  id: string;
  name: string;
  savedAt: string;
  values: Record<string, string | number>;
}

type RecordStore = Partial<Record<DocumentType, SavedRecord[]>>;

function readStore(): RecordStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? (parsed as RecordStore) : {};
  } catch {
    return {};
  }
}

function writeStore(store: RecordStore) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    /* quota exceeded or storage disabled - the in-memory list still works */
  }
}

function createId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `rec-${Date.now()}-${Math.round(Math.random() * 1e6)}`;
}

interface SavedRecordsProps {
  documentType: DocumentType;
  currentValues: Record<string, string | number>;
  onLoad: (values: Record<string, string | number>) => void;
}

const fieldClassName =
  "w-full border-b-2 border-border-whisper bg-transparent px-0 py-1.5 text-body-base text-on-surface outline-none transition-colors placeholder:text-muted-steel focus:border-calibrated-blue";

export default function SavedRecords({
  documentType,
  currentValues,
  onLoad
}: SavedRecordsProps) {
  const [store, setStore] = useState<RecordStore>({});
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const importInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setStore(readStore());
  }, []);

  /* Clear any "Saved"/"Loaded" note when the user moves to another document. */
  useEffect(() => {
    setStatus("");
    setName("");
  }, [documentType]);

  const records = store[documentType] ?? [];

  const commit = (next: RecordStore, note: string) => {
    setStore(next);
    writeStore(next);
    setStatus(note);
  };

  const handleSave = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setStatus("Give the record a name first.");
      return;
    }

    const record: SavedRecord = {
      id: createId(),
      name: trimmed,
      savedAt: new Date().toLocaleString(),
      values: { ...currentValues }
    };

    /* Saving under an existing name replaces it rather than piling up duplicates. */
    const existing = records.filter(
      (item) => item.name.toLowerCase() !== trimmed.toLowerCase()
    );

    commit({ ...store, [documentType]: [record, ...existing] }, `Saved "${trimmed}".`);
    setName("");
  };

  const handleDelete = (id: string, recordName: string) => {
    commit(
      { ...store, [documentType]: records.filter((item) => item.id !== id) },
      `Deleted "${recordName}".`
    );
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "document-printer-records.json";
    anchor.click();
    URL.revokeObjectURL(url);
    setStatus("Exported all saved records.");
  };

  const handleImport = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(`${reader.result}`);
        if (typeof parsed !== "object" || parsed === null) {
          throw new Error("not an object");
        }

        /* Merge per document type so an import never wipes records the file
           happens not to mention. */
        const merged: RecordStore = { ...store };
        (Object.keys(parsed) as DocumentType[]).forEach((key) => {
          const incoming = (parsed as RecordStore)[key];
          if (!Array.isArray(incoming)) {
            return;
          }
          const mine = merged[key] ?? [];
          const mineIds = new Set(mine.map((item) => item.id));
          merged[key] = [...mine, ...incoming.filter((item) => !mineIds.has(item.id))];
        });

        commit(merged, "Import complete.");
      } catch {
        setStatus("That file could not be read as saved records.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <section className="mt-4 rounded-lg border border-border-whisper bg-white p-5 shadow-[0_2px_10px_rgba(17,32,61,0.06)]">
      <h2 className="mb-4 text-title-sm text-on-surface">Saved Records</h2>

      <div className="grid gap-1">
        <span className="font-mono text-label-mono uppercase text-muted-steel">
          Save current details as
        </span>
        <div className="flex items-end gap-2">
          <input
            type="text"
            value={name}
            placeholder="e.g. Ref 1042"
            onChange={(event) => setName(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSave();
              }
            }}
            className={fieldClassName}
          />
          <button
            type="button"
            onClick={handleSave}
            className="shrink-0 rounded-lg bg-calibrated-blue px-4 py-2 font-mono text-label-mono font-bold text-white transition-all hover:opacity-90 active:scale-[0.98]"
          >
            SAVE
          </button>
        </div>
      </div>

      {records.length > 0 ? (
        <ul className="mt-4 grid gap-2">
          {records.map((record) => (
            <li
              key={record.id}
              className="flex items-center justify-between gap-3 rounded-lg border border-border-whisper bg-surface-container-low px-3 py-2"
            >
              <div className="min-w-0">
                <div className="truncate text-body-sm font-semibold text-on-surface">
                  {record.name}
                </div>
                <div className="font-mono text-label-mono text-muted-steel">{record.savedAt}</div>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    onLoad(record.values);
                    setStatus(`Loaded "${record.name}".`);
                  }}
                  className="rounded-lg border-2 border-border-whisper px-2.5 py-1.5 font-mono text-label-mono text-on-surface-variant transition-all hover:bg-surface-container active:scale-[0.98]"
                >
                  LOAD
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(record.id, record.name)}
                  className="rounded-lg border-2 border-border-whisper px-2.5 py-1.5 font-mono text-label-mono text-on-surface-variant transition-all hover:border-[#ba1a1a] hover:text-[#ba1a1a] active:scale-[0.98]"
                >
                  DELETE
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-body-sm text-on-surface-variant">
          No saved records for this document yet.
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2 border-t border-border-whisper pt-4">
        <button
          type="button"
          onClick={handleExport}
          className="rounded-lg border-2 border-border-whisper px-3 py-1.5 font-mono text-label-mono text-on-surface-variant transition-all hover:bg-surface-container active:scale-[0.98]"
        >
          EXPORT .JSON
        </button>
        <button
          type="button"
          onClick={() => importInputRef.current?.click()}
          className="rounded-lg border-2 border-border-whisper px-3 py-1.5 font-mono text-label-mono text-on-surface-variant transition-all hover:bg-surface-container active:scale-[0.98]"
        >
          IMPORT .JSON
        </button>
        <input
          ref={importInputRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              handleImport(file);
            }
            event.target.value = "";
          }}
        />
      </div>

      {status ? (
        <p className="mt-3 font-mono text-label-mono text-muted-steel">{status}</p>
      ) : null}
    </section>
  );
}

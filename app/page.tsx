"use client";

import { useEffect, useMemo, useState } from "react";
import DynamicForm from "../components/DynamicForm";
import InvoicePrint from "../components/InvoicePrint";
import PreviewPanel from "../components/PreviewPanel";
import SavedRecords from "../components/SavedRecords";
import Sidebar from "../components/Sidebar";
import TemplateSelector from "../components/TemplateSelector";
import {
  DocumentDataMap,
  DocumentType,
  defaultTemplateSelection,
  documentOptions,
  formFieldRegistry,
  mockData,
  templateRegistry
} from "../data/mockData";
import BankStatementTemplate1 from "../templates/bank-statement/Template1";
import OfferLetterTemplate1 from "../templates/offer-letter/Template1";
import OfferLetterTemplate2 from "../templates/offer-letter/Template2";
import OfferLetterTemplate3 from "../templates/offer-letter/Template3";
import RelievingLetterTemplate1 from "../templates/relieving-letter/Template1";
import RolesResponsibilityTemplate1 from "../templates/roles-responsibility/Template1";
import BillTemplate1 from "../templates/bill/Template1";
import ContractTemplate1 from "../templates/contract/Template1";
import SalarySlipTemplate1 from "../templates/salary-slip/Template1";
import SalarySlipTemplate2 from "../templates/salary-slip/Template2";
import SalarySlipBatchTemplate from "../templates/salary-slip/BatchTemplate";
import MicrosoftSalesChatTemplate1 from "../templates/microsoft-sales-chat/Template1";
import UltrasoundReportTemplate1 from "../templates/ultrasound-report/Template1";
import PrescriptionTemplate1 from "../templates/prescription/Template1";
import PrescriptionTemplate2 from "../templates/prescription/Template2";
import ResumeTemplate1 from "../templates/resume/Template1";
import MedicalCertificateTemplate1 from "../templates/medical-certificate/Template1";
import MedicalCertificateTemplate2 from "../templates/medical-certificate/Template2";

type EditableDocumentValues = Record<string, string | number>;
/* Bump this whenever the defaults in mockData change: stored form data is merged
   OVER the defaults, so an existing browser keeps showing its old saved values
   until the key changes. v21 = updated medical certificate diagnosis. */
const FORM_DATA_STORAGE_KEY = "document-printer.formData.v21";
const TEMPLATE_STORAGE_KEY = "document-printer.templateSelection.v1";
const ACTIVE_DOCUMENT_STORAGE_KEY = "document-printer.activeDocument.v1";

function isObjectRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeFormDataWithDefaults(rawValue: unknown): DocumentDataMap {
  const merged: DocumentDataMap = {
    "salary-slip": { ...mockData["salary-slip"] },
    "offer-letter": { ...mockData["offer-letter"] },
    "relieving-letter": { ...mockData["relieving-letter"] },
    "bank-statement": { ...mockData["bank-statement"] },
    "roles-responsibility": { ...mockData["roles-responsibility"] },
    "microsoft-sales-chat": { ...mockData["microsoft-sales-chat"] },
    "bill": { ...mockData["bill"] },
    "contract": { ...mockData["contract"] },
    "ultrasound-report": { ...mockData["ultrasound-report"] },
    "prescription": { ...mockData["prescription"] },
    "medical-certificate": { ...mockData["medical-certificate"] },
    "resume": { ...mockData["resume"] }
  };

  if (!isObjectRecord(rawValue)) {
    return merged;
  }

  (Object.keys(merged) as DocumentType[]).forEach((documentType) => {
    const candidate = rawValue[documentType];
    if (!isObjectRecord(candidate)) {
      return;
    }

    const mergedDocumentValues = {
      ...merged[documentType],
      ...(candidate as Record<string, string | number>)
    };

    (merged as Record<DocumentType, Record<string, string | number>>)[documentType] =
      mergedDocumentValues;
  });

  return merged;
}

function mergeTemplateSelectionWithDefaults(rawValue: unknown): Record<DocumentType, string> {
  const merged = { ...defaultTemplateSelection };

  if (!isObjectRecord(rawValue)) {
    return merged;
  }

  (Object.keys(merged) as DocumentType[]).forEach((documentType) => {
    const candidate = rawValue[documentType];
    if (typeof candidate !== "string") {
      return;
    }

    const isValidTemplate = templateRegistry[documentType].some((template) => template.id === candidate);
    if (isValidTemplate) {
      merged[documentType] = candidate;
    }
  });

  return merged;
}

export default function HomePage() {
  const [selectedDocument, setSelectedDocument] = useState<DocumentType>("salary-slip");
  const [selectedTemplateByDocument, setSelectedTemplateByDocument] = useState(
    defaultTemplateSelection
  );
  const [formDataByDocument, setFormDataByDocument] = useState<DocumentDataMap>(mockData);
  const [hasHydratedStorage, setHasHydratedStorage] = useState(false);

  const activeTemplate = selectedTemplateByDocument[selectedDocument];
  const templateOptions = templateRegistry[selectedDocument];
  const fieldOptions = formFieldRegistry[selectedDocument];
  const activeValues: EditableDocumentValues = formDataByDocument[selectedDocument];

  useEffect(() => {
    try {
      const storedFormData = localStorage.getItem(FORM_DATA_STORAGE_KEY);
      if (storedFormData) {
        setFormDataByDocument(mergeFormDataWithDefaults(JSON.parse(storedFormData)));
      }

      const storedTemplateSelection = localStorage.getItem(TEMPLATE_STORAGE_KEY);
      if (storedTemplateSelection) {
        setSelectedTemplateByDocument(
          mergeTemplateSelectionWithDefaults(JSON.parse(storedTemplateSelection))
        );
      }

      const storedActiveDocument = localStorage.getItem(ACTIVE_DOCUMENT_STORAGE_KEY);
      if (
        storedActiveDocument &&
        documentOptions.some((option) => option.id === storedActiveDocument)
      ) {
        setSelectedDocument(storedActiveDocument as DocumentType);
      }
    } catch {
      setFormDataByDocument(mockData);
      setSelectedTemplateByDocument(defaultTemplateSelection);
      setSelectedDocument("salary-slip");
    } finally {
      setHasHydratedStorage(true);
    }
  }, []);

  useEffect(() => {
    if (!hasHydratedStorage) {
      return;
    }
    localStorage.setItem(FORM_DATA_STORAGE_KEY, JSON.stringify(formDataByDocument));
  }, [formDataByDocument, hasHydratedStorage]);

  useEffect(() => {
    if (!hasHydratedStorage) {
      return;
    }
    localStorage.setItem(TEMPLATE_STORAGE_KEY, JSON.stringify(selectedTemplateByDocument));
  }, [hasHydratedStorage, selectedTemplateByDocument]);

  useEffect(() => {
    if (!hasHydratedStorage) {
      return;
    }
    localStorage.setItem(ACTIVE_DOCUMENT_STORAGE_KEY, selectedDocument);
  }, [hasHydratedStorage, selectedDocument]);

  /* Merged over the current values, so a record saved before a field existed
     still loads and simply leaves that newer field at its default. */
  const handleLoadRecord = (values: Record<string, string | number>) => {
    setFormDataByDocument((previous) => ({
      ...previous,
      [selectedDocument]: {
        ...previous[selectedDocument],
        ...values
      }
    }));
  };

  const handleFieldChange = (key: string, value: string | number) => {
    setFormDataByDocument((previous) => {
      const currentValues = previous[selectedDocument];

      return {
        ...previous,
        [selectedDocument]: {
          ...currentValues,
          [key]: value
        }
      };
    });
  };

  const templatePreview = useMemo(() => {
    if (selectedDocument === "salary-slip") {
      if (activeTemplate === "template2") {
        return <SalarySlipTemplate2 data={formDataByDocument["salary-slip"]} />;
      }
      if (activeTemplate === "template3") {
        return <SalarySlipBatchTemplate data={formDataByDocument["salary-slip"]} />;
      }
      return <SalarySlipTemplate1 data={formDataByDocument["salary-slip"]} />;
    }

    if (selectedDocument === "offer-letter") {
      if (activeTemplate === "template2") {
        return <OfferLetterTemplate2 data={formDataByDocument["offer-letter"]} />;
      }
      if (activeTemplate === "template3") {
        return <OfferLetterTemplate3 data={formDataByDocument["offer-letter"]} />;
      }
      return <OfferLetterTemplate1 data={formDataByDocument["offer-letter"]} />;
    }

    if (selectedDocument === "roles-responsibility") {
      return <RolesResponsibilityTemplate1 data={formDataByDocument["roles-responsibility"]} />;
    }

    if (selectedDocument === "relieving-letter") {
      return <RelievingLetterTemplate1 data={formDataByDocument["relieving-letter"]} />;
    }

    if (selectedDocument === "bill") {
      return <BillTemplate1 data={formDataByDocument["bill"]} />;
    }

    if (selectedDocument === "contract") {
      return <ContractTemplate1 data={formDataByDocument["contract"]} />;
    }

    if (selectedDocument === "ultrasound-report") {
      return <UltrasoundReportTemplate1 data={formDataByDocument["ultrasound-report"]} />;
    }

    if (selectedDocument === "medical-certificate") {
      if (activeTemplate === "template2") {
        return <MedicalCertificateTemplate2 data={formDataByDocument["medical-certificate"]} />;
      }
      return <MedicalCertificateTemplate1 data={formDataByDocument["medical-certificate"]} />;
    }

    if (selectedDocument === "resume") {
      return <ResumeTemplate1 data={formDataByDocument["resume"]} />;
    }

    if (selectedDocument === "prescription") {
      if (activeTemplate === "template2") {
        return <PrescriptionTemplate2 data={formDataByDocument["prescription"]} />;
      }
      return <PrescriptionTemplate1 data={formDataByDocument["prescription"]} />;
    }

    if (selectedDocument === "microsoft-sales-chat") {
      return <MicrosoftSalesChatTemplate1 data={formDataByDocument["microsoft-sales-chat"]} />;
    }

    return <BankStatementTemplate1 data={formDataByDocument["bank-statement"]} />;
  }, [activeTemplate, formDataByDocument, selectedDocument]);

  return (
    <div className="min-h-screen">
      <Sidebar
        items={documentOptions}
        selected={selectedDocument}
        onSelect={(documentType) => setSelectedDocument(documentType)}
      />

      <main className="grid min-h-screen grid-cols-1 min-[1101px]:ml-[255px] min-[1101px]:grid-cols-[minmax(320px,420px)_1fr]">
        <section className="no-print studio-scroll border-b border-border-whisper bg-studio-mist p-6 min-[1101px]:h-screen min-[1101px]:overflow-y-auto min-[1101px]:border-b-0 min-[1101px]:border-r max-[700px]:p-3.5">
          <TemplateSelector
            templates={templateOptions}
            selectedTemplate={activeTemplate}
            onSelect={(templateId) =>
              setSelectedTemplateByDocument((previous) => ({
                ...previous,
                [selectedDocument]: templateId
              }))
            }
          />
          {fieldOptions.length > 0 ? (
            <>
              {/* Above the form: the field list runs to thousands of pixels on
                  some documents, and save / load is no use if it is never seen. */}
              <SavedRecords
                documentType={selectedDocument}
                currentValues={activeValues}
                onLoad={handleLoadRecord}
              />
              <DynamicForm
                fields={fieldOptions}
                values={activeValues}
                onChange={handleFieldChange}
              />
            </>
          ) : (
            <section className="mt-4 rounded-lg border border-border-whisper bg-white p-5 text-body-sm text-on-surface-variant shadow-[0_2px_10px_rgba(17,32,61,0.06)]">
              This template is static and has no editable form fields.
            </section>
          )}
        </section>

        {/* Own scroll container on desktop: working down the form no longer
            scrolls the sheet out of view. */}
        <section className="preview-stage studio-scroll p-6 min-[1101px]:h-screen min-[1101px]:overflow-y-auto max-[700px]:p-3.5">
          <PreviewPanel>
            {selectedDocument === "salary-slip" && activeTemplate === "template3" ? (
              templatePreview
            ) : (
              <InvoicePrint>{templatePreview}</InvoicePrint>
            )}
          </PreviewPanel>
        </section>
      </main>
    </div>
  );
}

export interface SalarySlipData {
  [key: string]: string | number;
  employeeName: string;
  employeeId: string;
  month: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  companyName: string;
  issueDate: string;
  panNumber: string;
  principalEmployer: string;
  engagedThrough: string;
  workingDays: number;
  projectName: string;
  designation: string;
  rateOfWorkmen: number;
  bankName: string;
  accountNo: string;
  pfAccountNo: string;
  uanNo: string;
  hra: number;
  transportAllowance: number;
  medicalAllowance: number;
  pfDeduction: number;
  esiDeduction: number;
  tdsDeduction: number;
  professionalTax: number;
}

export interface OfferLetterData {
  [key: string]: string | number;
  candidateName: string;
  position: string;
  joiningDate: string;
  employmentEndDate: string;
  internalJobTitle: string;
  referenceNumber: string;
  certificateDate: string;
  signatoryName: string;
  signatoryDesignation: string;
  annualSalary: number;
  managerName: string;
  companyName: string;
  offerDate: string;
}

export interface RelievingLetterData {
  [key: string]: string | number;
  employeeName: string;
  employeeId: string;
  designation: string;
  joiningDate: string;
  relievingDate: string;
  companyName: string;
  letterDate: string;
}

export interface BankStatementData {
  [key: string]: string | number;
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  statementPeriod: string;
  openingBalance: number;
  totalCredits: number;
  totalDebits: number;
  closingBalance: number;
  issueDate: string;
}

export interface MicrosoftSalesChatData {
  [key: string]: string | number;
}

export interface DocumentDataMap {
  "salary-slip": SalarySlipData;
  "offer-letter": OfferLetterData;
  "relieving-letter": RelievingLetterData;
  "bank-statement": BankStatementData;
  "microsoft-sales-chat": MicrosoftSalesChatData;
}

export type DocumentType = keyof DocumentDataMap;

export interface SidebarOption {
  id: DocumentType;
  label: string;
}

export interface TemplateMeta {
  id: string;
  label: string;
}

export type FieldInputType = "text" | "number" | "date" | "month";

export interface DynamicField {
  key: string;
  label: string;
  type: FieldInputType;
}

export const documentOptions: SidebarOption[] = [
  { id: "offer-letter", label: "Offer Letter" },
  { id: "relieving-letter", label: "Relieving Letter" },
  { id: "salary-slip", label: "Salary Slip" },
  { id: "bank-statement", label: "Bank Statement" },
  { id: "microsoft-sales-chat", label: "Microsoft Sales Chat" }
];

export const templateRegistry: Record<DocumentType, TemplateMeta[]> = {
  "salary-slip": [
    { id: "template1", label: "Template 1" },
    { id: "template2", label: "Template 2" }
  ],
  "offer-letter": [
    { id: "template1", label: "Template 1" },
    { id: "template2", label: "Template 2" }
  ],
  "relieving-letter": [{ id: "template1", label: "Template 1" }],
  "bank-statement": [{ id: "template1", label: "Template 1" }],
  "microsoft-sales-chat": [{ id: "template1", label: "Template 1" }]
};

export const defaultTemplateSelection: Record<DocumentType, string> = {
  "salary-slip": "template1",
  "offer-letter": "template1",
  "relieving-letter": "template1",
  "bank-statement": "template1",
  "microsoft-sales-chat": "template1"
};

export const formFieldRegistry: Record<DocumentType, DynamicField[]> = {
  "salary-slip": [
    { key: "companyName", label: "Company Name", type: "text" },
    { key: "panNumber", label: "PAN No", type: "text" },
    { key: "principalEmployer", label: "Principal Employer", type: "text" },
    { key: "engagedThrough", label: "Engage Through", type: "text" },
    { key: "employeeName", label: "Employee Name", type: "text" },
    { key: "employeeId", label: "Employee ID", type: "text" },
    { key: "projectName", label: "Project Name", type: "text" },
    { key: "designation", label: "Designation", type: "text" },
    { key: "month", label: "Salary Month", type: "month" },
    { key: "workingDays", label: "Working Days", type: "number" },
    { key: "rateOfWorkmen", label: "Rate of Workmen", type: "number" },
    { key: "bankName", label: "Bank Name", type: "text" },
    { key: "accountNo", label: "Account No", type: "text" },
    { key: "pfAccountNo", label: "PF A/C No", type: "text" },
    { key: "uanNo", label: "UAN No", type: "text" },
    { key: "basicSalary", label: "Basic Salary", type: "number" },
    { key: "hra", label: "HRA", type: "number" },
    { key: "transportAllowance", label: "Transport Allowances", type: "number" },
    { key: "medicalAllowance", label: "Medical", type: "number" },
    { key: "pfDeduction", label: "PF Deduction", type: "number" },
    { key: "esiDeduction", label: "ESI Deduction", type: "number" },
    { key: "tdsDeduction", label: "TDS Deduction", type: "number" },
    { key: "professionalTax", label: "Professional Tax", type: "number" },
    { key: "allowances", label: "Allowances", type: "number" },
    { key: "deductions", label: "Deductions", type: "number" },
    { key: "issueDate", label: "Issue Date", type: "date" }
  ],
  "offer-letter": [
    { key: "companyName", label: "Company Name", type: "text" },
    { key: "candidateName", label: "Candidate Name", type: "text" },
    { key: "referenceNumber", label: "Reference Number", type: "text" },
    { key: "certificateDate", label: "Certificate Date", type: "date" },
    { key: "position", label: "Position", type: "text" },
    { key: "internalJobTitle", label: "Internal Job Title", type: "text" },
    { key: "joiningDate", label: "Joining Date", type: "date" },
    { key: "employmentEndDate", label: "Employment End Date", type: "date" },
    { key: "annualSalary", label: "Annual Salary", type: "number" },
    { key: "managerName", label: "Reporting Manager", type: "text" },
    { key: "signatoryName", label: "Signatory Name", type: "text" },
    { key: "signatoryDesignation", label: "Signatory Designation", type: "text" },
    { key: "offerDate", label: "Offer Date", type: "date" }
  ],
  "relieving-letter": [
    { key: "companyName", label: "Company Name", type: "text" },
    { key: "employeeName", label: "Employee Name", type: "text" },
    { key: "employeeId", label: "Employee ID", type: "text" },
    { key: "designation", label: "Designation", type: "text" },
    { key: "joiningDate", label: "Joining Date", type: "date" },
    { key: "relievingDate", label: "Relieving Date", type: "date" },
    { key: "letterDate", label: "Letter Date", type: "date" }
  ],
  "bank-statement": [
    { key: "bankName", label: "Bank Name", type: "text" },
    { key: "accountHolderName", label: "Account Holder Name", type: "text" },
    { key: "accountNumber", label: "Account Number", type: "text" },
    { key: "statementPeriod", label: "Statement Period", type: "month" },
    { key: "openingBalance", label: "Opening Balance", type: "number" },
    { key: "totalCredits", label: "Total Credits", type: "number" },
    { key: "totalDebits", label: "Total Debits", type: "number" },
    { key: "closingBalance", label: "Closing Balance", type: "number" },
    { key: "issueDate", label: "Issue Date", type: "date" }
  ],
  "microsoft-sales-chat": []
};

export const mockData: DocumentDataMap = {
  "salary-slip": {
    companyName: "DATCO CIVIL",
    employeeName: "Afzal Ahmad",
    employeeId: "EMP-200816",
    month: "2023-02",
    basicSalary: 17000,
    allowances: 8000,
    deductions: 1800,
    issueDate: "2023-02-28",
    panNumber: "BWUPA3029E",
    principalEmployer: "M/s. Larsen & Tubro Limited-WET IC",
    engagedThrough: "M/s. DATCO CIVIL",
    workingDays: 31,
    projectName: "Khatan WSS Project :LE 200816",
    designation: "Safety Supervisior",
    rateOfWorkmen: 607.15,
    bankName: "Bank Of Baroda",
    accountNo: "52148100008038",
    pfAccountNo: "NA",
    uanNo: "101619878937",
    hra: 4000,
    transportAllowance: 4000,
    medicalAllowance: 0,
    pfDeduction: 1800,
    esiDeduction: 0,
    tdsDeduction: 0,
    professionalTax: 0
  },
  "offer-letter": {
    companyName: "Northstar Technologies Pvt Ltd",
    candidateName: "Riya Kapoor",
    referenceNumber: "OCT/GGN/101803162/2026",
    certificateDate: "2026-02-10",
    position: "Software Engineer II",
    internalJobTitle: "Technical Support Associate",
    joiningDate: "2026-03-15",
    employmentEndDate: "2028-09-25",
    annualSalary: 1450000,
    managerName: "Neha Verma",
    signatoryName: "Govind Singh Negi",
    signatoryDesignation: "Deputy Manager Human Resources",
    offerDate: "2026-02-10"
  },
  "relieving-letter": {
    companyName: "DATCO CIVIL",
    employeeName: "Karan Mehta",
    employeeId: "EMP-0988",
    designation: "Senior Analyst",
    joiningDate: "2022-07-20",
    relievingDate: "2026-02-12",
    letterDate: "2026-02-13"
  },
  "bank-statement": {
    bankName: "Axis Federal Bank",
    accountHolderName: "Rohan Desai",
    accountNumber: "010245678912",
    statementPeriod: "2026-01",
    openingBalance: 85000,
    totalCredits: 42000,
    totalDebits: 35800,
    closingBalance: 91200,
    issueDate: "2026-02-05"
  },
  "microsoft-sales-chat": {}
};

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
  companyEmail: string;
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
  fromName: string;
  fromTitle: string;
  fromAddressLine1: string;
  fromAddressLine2: string;
  fromAddressLine3: string;
  fromEmail: string;
  fromPhone: string;
  toAddressLine1: string;
  toAddressLine2: string;
  toAddressLine3: string;
  toPincode: string;
  toPhone: string;
  monthlySalary: number;
  workLocation: string;
  workingHours: string;
  workingDays: string;
  probationMonths: string;
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
  companyPhone: string;
  companyEmail: string;
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

export interface BillData {
  [key: string]: string | number;
  storeName: string;
  storeMall: string;
  storeAddress: string;
  storePhone: string;
  storeFax: string;
  trnNumber: string;
  invoiceNo: string;
  date: string;
  time: string;
  terminal: string;
  cashier: string;
  shiftNo: string;
  location: string;
  item1Barcode: string;
  item1Name: string;
  item1Qty: number;
  item1Price: number;
  item2Barcode: string;
  item2Name: string;
  item2Qty: number;
  item2Price: number;
  item3Barcode: string;
  item3Name: string;
  item3Qty: number;
  item3Price: number;
  item4Barcode: string;
  item4Name: string;
  item4Qty: number;
  item4Price: number;
  item5Barcode: string;
  item5Name: string;
  item5Qty: number;
  item5Price: number;
  cashReceived: number;
}

export interface RolesResponsibilityData {
  [key: string]: string | number;
  position: string;
  employeeName: string;
  employeeId: string;
}

export interface ContractData {
  [key: string]: string | number;
  letterDate: string;
  letterRef: string;
  toCompany: string;
  toAddressLine1: string;
  toAddressLine2: string;
  toAddressLine3: string;
  attentionName: string;
  attentionTitle: string;
  projectName: string;
  contractNumber: string;
  contractTitle: string;
  proposalRef: string;
  proposalDate: string;
  employerName: string;
  employerShortName: string;
  contractorName: string;
  lumpSumPrice: number;
  lumpSumPriceWords: string;
  supplyPrice: number;
  installPrice: number;
  commencementDate: string;
  completionDate: string;
  handoverDate: string;
  acknowledgementEmail: string;
  acknowledgementAttn: string;
  employerSignatoryName: string;
  employerSignatoryTitle: string;
  employerCompany: string;
  contractorSignatoryName: string;
  contractorSignatoryTitle: string;
}

export interface UltrasoundReportData {
  [key: string]: string | number;
  clinicName: string;
  clinicAddress: string;
  clinicPhone: string;
  doctorName: string;
  doctorQualification: string;
  doctorHospital: string;
  doctorDesignation: string;
  reportId: string;
  patientName: string;
  reportDate: string;
  referredBy: string;
  ageSex: string;
  studyTitle: string;
  liver: string;
  gallBladder: string;
  cbd: string;
  pancreas: string;
  spleen: string;
  diaphragm: string;
  rightKidney: string;
  leftKidney: string;
  urinaryBladder: string;
  prostate: string;
  uterus: string;
  adnexa: string;
  retroperitoneum: string;
  lymphNodes: string;
  ascites: string;
  impression: string;
  signatoryName: string;
  signatoryQualification: string;
  footerTiming: string;
  footerNote: string;
}

export interface PrescriptionData {
  [key: string]: string | number;
  department: string;
  addressLine: string;
  patientTitle: string;
  patientName: string;
  patientId: string;
  ageSex: string;
  refByDoctor: string;
  date: string;
  complaints: string;
  diagnosis: string;
  med1Name: string;
  med1Dosage: string;
  med1Duration: string;
  med2Name: string;
  med2Dosage: string;
  med2Duration: string;
  med3Name: string;
  med3Dosage: string;
  med3Duration: string;
  med4Name: string;
  med4Dosage: string;
  med4Duration: string;
  med5Name: string;
  med5Dosage: string;
  med5Duration: string;
  med6Name: string;
  med6Dosage: string;
  med6Duration: string;
  advice: string;
  followUp: string;
  doctorName: string;
  doctorQualification: string;
  doctorRegNo: string;
}

export interface ResumeData {
  [key: string]: string | number;
  fullName: string;
  jobTitle: string;
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  summary: string;
  skills: string;
  exp1Title: string;
  exp1Company: string;
  exp1Period: string;
  exp1Location: string;
  exp1Details: string;
  exp2Title: string;
  exp2Company: string;
  exp2Period: string;
  exp2Location: string;
  exp2Details: string;
  exp3Title: string;
  exp3Company: string;
  exp3Period: string;
  exp3Location: string;
  exp3Details: string;
  ach1Title: string;
  ach1Text: string;
  ach2Title: string;
  ach2Text: string;
  ach3Title: string;
  ach3Text: string;
  ach4Title: string;
  ach4Text: string;
  edu1Degree: string;
  edu1Institution: string;
  edu1Period: string;
  edu1Location: string;
  edu2Degree: string;
  edu2Institution: string;
  edu2Period: string;
  edu2Location: string;
  course1Title: string;
  course1Text: string;
  course2Title: string;
  course2Text: string;
  int1Title: string;
  int1Text: string;
  int2Title: string;
  int2Text: string;
  lang1Name: string;
  lang1Level: string;
  lang1Rating: number;
  lang2Name: string;
  lang2Level: string;
  lang2Rating: number;
  lang3Name: string;
  lang3Level: string;
  lang3Rating: number;
}

export interface MedicalCertificateData {
  [key: string]: string | number;
  /* Certificate of Attendance (Template 1) - clinic letterhead format */
  logoPath: string;
  clinicName: string;
  clinicAddress: string;
  clinicPhone: string;
  registrationLabel: string;
  registrationNo: string;
  emiratesId: string;
  dateOfBirth: string;
  ageGender: string;
  nationality: string;
  patientPhone: string;
  insuranceProvider: string;
  memberPolicyNo: string;
  company: string;
  attendedAt: string;
  attendedOn: string;
  diagnosisCodes: string;
  closingStatement: string;
  specialty: string;
  licenseLabel: string;
  licenseNo: string;
  /* Fitness / sick-leave certificate (Template 2) - Park Hospital letterhead */
  department: string;
  addressLine: string;
  certificateNo: string;
  date: string;
  patientTitle: string;
  patientName: string;
  ageYears: string;
  guardianName: string;
  address: string;
  identificationMark: string;
  diagnosis: string;
  treatedFrom: string;
  treatedTo: string;
  restDays: string;
  fitFrom: string;
  remarks: string;
  doctorName: string;
  doctorQualification: string;
  doctorRegNo: string;
}

export interface DocumentDataMap {
  "salary-slip": SalarySlipData;
  "offer-letter": OfferLetterData;
  "relieving-letter": RelievingLetterData;
  "bank-statement": BankStatementData;
  "microsoft-sales-chat": MicrosoftSalesChatData;
  "roles-responsibility": RolesResponsibilityData;
  "bill": BillData;
  "contract": ContractData;
  "ultrasound-report": UltrasoundReportData;
  "prescription": PrescriptionData;
  "medical-certificate": MedicalCertificateData;
  "resume": ResumeData;
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

export type FieldInputType = "text" | "number" | "date" | "month" | "textarea" | "image";

export interface DynamicField {
  key: string;
  label: string;
  type: FieldInputType;
}

export const documentOptions: SidebarOption[] = [
  { id: "offer-letter", label: "Offer Letter" },
  { id: "relieving-letter", label: "Relieving Letter" },
  { id: "resume", label: "Resume" },
  { id: "salary-slip", label: "Salary Slip" },
  { id: "bank-statement", label: "Bank Statement" },
  { id: "roles-responsibility", label: "Roles & Responsibility" },
  { id: "contract", label: "Contract" },
  { id: "bill", label: "Bill" },
  { id: "ultrasound-report", label: "Ultrasound Report" },
  { id: "prescription", label: "Prescription" },
  { id: "medical-certificate", label: "Medical Certificate" },
  { id: "microsoft-sales-chat", label: "Microsoft Sales Chat" }
];

export const templateRegistry: Record<DocumentType, TemplateMeta[]> = {
  "salary-slip": [
    { id: "template1", label: "Template 1" },
    { id: "template2", label: "Template 2" },
    { id: "template3", label: "Batch Slips (9 Months)" }
  ],
  "offer-letter": [
    { id: "template1", label: "Template 1" },
    { id: "template2", label: "Template 2" },
    { id: "template3", label: "Template 3 (DATCO)" }
  ],
  "relieving-letter": [{ id: "template1", label: "Template 1" }],
  "bank-statement": [{ id: "template1", label: "Template 1" }],
  "roles-responsibility": [{ id: "template1", label: "Template 1" }],
  "microsoft-sales-chat": [{ id: "template1", label: "Template 1" }],
  "bill": [{ id: "template1", label: "Template 1" }],
  "contract": [{ id: "template1", label: "Template 1" }],
  "ultrasound-report": [{ id: "template1", label: "Template 1 (Care Diagnostic Centre)" }],
  "prescription": [
    { id: "template1", label: "Template 1 (Park Hospital)" },
    { id: "template2", label: "Template 2 (Blank – letterhead only)" }
  ],
  "medical-certificate": [
    { id: "template1", label: "Template 1 (Certificate of Attendance)" },
    { id: "template2", label: "Template 2 (Fitness – Park Hospital)" }
  ],
  "resume": [{ id: "template1", label: "Template 1" }]
};

export const defaultTemplateSelection: Record<DocumentType, string> = {
  "salary-slip": "template1",
  "offer-letter": "template1",
  "relieving-letter": "template1",
  "bank-statement": "template1",
  "roles-responsibility": "template1",
  "microsoft-sales-chat": "template1",
  "bill": "template1",
  "contract": "template1",
  "ultrasound-report": "template1",
  "prescription": "template1",
  "medical-certificate": "template1",
  "resume": "template1"
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
    { key: "medicalAllowance", label: "Special Allowance", type: "number" },
    { key: "pfDeduction", label: "PF Deduction", type: "number" },
    { key: "esiDeduction", label: "ESI Deduction", type: "number" },
    { key: "tdsDeduction", label: "TDS Deduction", type: "number" },
    { key: "professionalTax", label: "Professional Tax", type: "number" },
    { key: "allowances", label: "Allowances", type: "number" },
    { key: "deductions", label: "Deductions", type: "number" },
    { key: "issueDate", label: "Issue Date", type: "date" },
    { key: "companyEmail", label: "Company Email", type: "text" }
  ],
  "offer-letter": [
    { key: "companyName", label: "Company Name", type: "text" },
    { key: "offerDate", label: "Offer Date", type: "date" },
    { key: "fromName", label: "From: Name", type: "text" },
    { key: "fromTitle", label: "From: Title", type: "text" },
    { key: "fromAddressLine1", label: "From: Address Line 1", type: "text" },
    { key: "fromAddressLine2", label: "From: Address Line 2", type: "text" },
    { key: "fromAddressLine3", label: "From: Address Line 3", type: "text" },
    { key: "fromEmail", label: "From: Email", type: "text" },
    { key: "fromPhone", label: "From: Phone", type: "text" },
    { key: "candidateName", label: "Candidate Name", type: "text" },
    { key: "toAddressLine1", label: "To: Address Line 1", type: "text" },
    { key: "toAddressLine2", label: "To: Address Line 2", type: "text" },
    { key: "toAddressLine3", label: "To: Address Line 3", type: "text" },
    { key: "toPincode", label: "To: Pincode", type: "text" },
    { key: "toPhone", label: "To: Phone No", type: "text" },
    { key: "position", label: "Position / Designation", type: "text" },
    { key: "joiningDate", label: "Joining Date", type: "date" },
    { key: "monthlySalary", label: "Monthly Salary (₹)", type: "number" },
    { key: "workLocation", label: "Work Location", type: "text" },
    { key: "workingHours", label: "Working Hours", type: "text" },
    { key: "workingDays", label: "Working Days", type: "text" },
    { key: "probationMonths", label: "Probation Period (months)", type: "text" },
    { key: "referenceNumber", label: "Reference Number", type: "text" },
    { key: "internalJobTitle", label: "Internal Job Title", type: "text" },
    { key: "employmentEndDate", label: "Employment End Date", type: "date" },
    { key: "annualSalary", label: "Annual Salary", type: "number" },
    { key: "managerName", label: "Reporting Manager", type: "text" },
    { key: "signatoryName", label: "Signatory Name", type: "text" },
    { key: "signatoryDesignation", label: "Signatory Designation", type: "text" },
    { key: "certificateDate", label: "Certificate Date", type: "date" }
  ],
  "relieving-letter": [
    { key: "companyName", label: "Company Name", type: "text" },
    { key: "employeeName", label: "Employee Name", type: "text" },
    { key: "employeeId", label: "Employee ID", type: "text" },
    { key: "designation", label: "Designation", type: "text" },
    { key: "joiningDate", label: "Joining Date", type: "date" },
    { key: "relievingDate", label: "Relieving Date", type: "date" },
    { key: "letterDate", label: "Letter Date", type: "date" },
    { key: "companyPhone", label: "Company Phone", type: "text" },
    { key: "companyEmail", label: "Company Email", type: "text" }
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
  "roles-responsibility": [
    { key: "position", label: "Position / Designation", type: "text" },
    { key: "employeeName", label: "Employee Name", type: "text" },
    { key: "employeeId", label: "Employee ID", type: "text" }
  ],
  "microsoft-sales-chat": [],
  "bill": [
    { key: "storeName", label: "Store Name", type: "text" },
    { key: "storeMall", label: "Mall / Location Name", type: "text" },
    { key: "storeAddress", label: "Store Address", type: "text" },
    { key: "storePhone", label: "Store Phone", type: "text" },
    { key: "storeFax", label: "Store Fax", type: "text" },
    { key: "trnNumber", label: "TRN Number", type: "text" },
    { key: "invoiceNo", label: "Invoice No", type: "text" },
    { key: "date", label: "Date", type: "text" },
    { key: "time", label: "Time", type: "text" },
    { key: "terminal", label: "Terminal", type: "text" },
    { key: "cashier", label: "Cashier", type: "text" },
    { key: "shiftNo", label: "Shift No", type: "text" },
    { key: "location", label: "Location Code", type: "text" },
    { key: "item1Name", label: "Item 1 Name", type: "text" },
    { key: "item1Barcode", label: "Item 1 Barcode", type: "text" },
    { key: "item1Qty", label: "Item 1 Qty", type: "number" },
    { key: "item1Price", label: "Item 1 Price", type: "number" },
    { key: "item2Name", label: "Item 2 Name", type: "text" },
    { key: "item2Barcode", label: "Item 2 Barcode", type: "text" },
    { key: "item2Qty", label: "Item 2 Qty", type: "number" },
    { key: "item2Price", label: "Item 2 Price", type: "number" },
    { key: "item3Name", label: "Item 3 Name", type: "text" },
    { key: "item3Barcode", label: "Item 3 Barcode", type: "text" },
    { key: "item3Qty", label: "Item 3 Qty", type: "number" },
    { key: "item3Price", label: "Item 3 Price", type: "number" },
    { key: "item4Name", label: "Item 4 Name", type: "text" },
    { key: "item4Barcode", label: "Item 4 Barcode", type: "text" },
    { key: "item4Qty", label: "Item 4 Qty", type: "number" },
    { key: "item4Price", label: "Item 4 Price", type: "number" },
    { key: "item5Name", label: "Item 5 Name", type: "text" },
    { key: "item5Barcode", label: "Item 5 Barcode", type: "text" },
    { key: "item5Qty", label: "Item 5 Qty", type: "number" },
    { key: "item5Price", label: "Item 5 Price", type: "number" },
    { key: "cashReceived", label: "Cash Received (AED)", type: "number" }
  ],
  "contract": [
    { key: "letterDate", label: "Letter Date", type: "date" },
    { key: "letterRef", label: "Reference No.", type: "text" },
    { key: "toCompany", label: "To: Company", type: "text" },
    { key: "toAddressLine1", label: "To: Address Line 1", type: "text" },
    { key: "toAddressLine2", label: "To: Address Line 2", type: "text" },
    { key: "toAddressLine3", label: "To: Address Line 3", type: "text" },
    { key: "attentionName", label: "Attention: Name", type: "text" },
    { key: "attentionTitle", label: "Attention: Title", type: "text" },
    { key: "projectName", label: "Project", type: "text" },
    { key: "contractNumber", label: "Contract No.", type: "text" },
    { key: "contractTitle", label: "Contract Title", type: "text" },
    { key: "proposalRef", label: "Proposal Ref.", type: "text" },
    { key: "proposalDate", label: "Proposal Date (dd.mm.yyyy)", type: "text" },
    { key: "employerName", label: "Employer (full legal name)", type: "text" },
    { key: "employerShortName", label: "Employer (short)", type: "text" },
    { key: "contractorName", label: "Contractor", type: "text" },
    { key: "lumpSumPrice", label: "Lump Sum Price (€)", type: "number" },
    { key: "lumpSumPriceWords", label: "Lump Sum Price (in words)", type: "text" },
    { key: "supplyPrice", label: "Supply Price (€)", type: "number" },
    { key: "installPrice", label: "Install/Test/Commission (€)", type: "number" },
    { key: "commencementDate", label: "Commencement Date", type: "date" },
    { key: "completionDate", label: "Time for Completion", type: "date" },
    { key: "handoverDate", label: "Final Handover Date", type: "date" },
    { key: "acknowledgementEmail", label: "Acknowledgement Email", type: "text" },
    { key: "acknowledgementAttn", label: "Acknowledgement Attn.", type: "text" },
    { key: "employerSignatoryName", label: "Employer Signatory Name", type: "text" },
    { key: "employerSignatoryTitle", label: "Employer Signatory Title", type: "text" },
    { key: "employerCompany", label: "Employer Company (signature)", type: "text" },
    { key: "contractorSignatoryName", label: "Contractor Signatory Name", type: "text" },
    { key: "contractorSignatoryTitle", label: "Contractor Signatory Title", type: "text" }
  ],
  "ultrasound-report": [
    { key: "clinicName", label: "Centre Name", type: "text" },
    { key: "clinicAddress", label: "Centre Address", type: "text" },
    { key: "clinicPhone", label: "Mobile No", type: "text" },
    { key: "doctorName", label: "Radiologist Name (header)", type: "text" },
    { key: "doctorQualification", label: "Radiologist Qualification", type: "text" },
    { key: "doctorHospital", label: "Radiologist Hospital", type: "text" },
    { key: "doctorDesignation", label: "Radiologist Designation", type: "text" },
    { key: "reportId", label: "Report ID", type: "text" },
    { key: "patientName", label: "Patient Name", type: "text" },
    { key: "reportDate", label: "Report Date", type: "text" },
    { key: "referredBy", label: "Referred By", type: "text" },
    { key: "ageSex", label: "Age / Sex", type: "text" },
    { key: "studyTitle", label: "Study Title", type: "text" },
    { key: "liver", label: "Liver", type: "textarea" },
    { key: "gallBladder", label: "Gall Bladder", type: "textarea" },
    { key: "cbd", label: "CBD / PV / Porta", type: "textarea" },
    { key: "pancreas", label: "Pancreas", type: "textarea" },
    { key: "spleen", label: "Spleen", type: "textarea" },
    { key: "diaphragm", label: "Diaphragm", type: "textarea" },
    { key: "rightKidney", label: "Right Kidney", type: "textarea" },
    { key: "leftKidney", label: "Left Kidney", type: "textarea" },
    { key: "urinaryBladder", label: "Urinary Bladder", type: "textarea" },
    { key: "prostate", label: "Prostate (male only)", type: "textarea" },
    { key: "uterus", label: "Uterus (female only)", type: "textarea" },
    { key: "adnexa", label: "Adnexa / Ovaries (female only)", type: "textarea" },
    { key: "retroperitoneum", label: "Retroperitoneum", type: "textarea" },
    { key: "lymphNodes", label: "Lymph Nodes", type: "textarea" },
    { key: "ascites", label: "Ascites", type: "textarea" },
    { key: "impression", label: "Impression (one line per bullet)", type: "textarea" },
    /* signatoryName / signatoryQualification are no longer form fields: the signature
       is printed from the scanned image (dr-signature-block.png), which carries its
       own name and qualification. The data keys remain, feeding the image's alt text. */
    { key: "footerTiming", label: "Footer: Timing", type: "text" },
    { key: "footerNote", label: "Footer: Note", type: "text" }
  ],
  "prescription": [
    { key: "department", label: "Department (header, right)", type: "text" },
    { key: "addressLine", label: "Address / Phone line", type: "text" },
    { key: "patientTitle", label: "Patient Title", type: "text" },
    { key: "patientName", label: "Patient's Name", type: "text" },
    { key: "patientId", label: "Pt. ID", type: "text" },
    { key: "ageSex", label: "Age / Sex", type: "text" },
    { key: "refByDoctor", label: "Ref. by Dr.", type: "text" },
    { key: "date", label: "Date", type: "text" },
    { key: "complaints", label: "Chief Complaints", type: "textarea" },
    { key: "diagnosis", label: "Diagnosis", type: "textarea" },
    { key: "med1Name", label: "Medicine 1", type: "text" },
    { key: "med1Dosage", label: "Medicine 1 – Dosage", type: "text" },
    { key: "med1Duration", label: "Medicine 1 – Duration", type: "text" },
    { key: "med2Name", label: "Medicine 2", type: "text" },
    { key: "med2Dosage", label: "Medicine 2 – Dosage", type: "text" },
    { key: "med2Duration", label: "Medicine 2 – Duration", type: "text" },
    { key: "med3Name", label: "Medicine 3", type: "text" },
    { key: "med3Dosage", label: "Medicine 3 – Dosage", type: "text" },
    { key: "med3Duration", label: "Medicine 3 – Duration", type: "text" },
    { key: "med4Name", label: "Medicine 4", type: "text" },
    { key: "med4Dosage", label: "Medicine 4 – Dosage", type: "text" },
    { key: "med4Duration", label: "Medicine 4 – Duration", type: "text" },
    { key: "med5Name", label: "Medicine 5", type: "text" },
    { key: "med5Dosage", label: "Medicine 5 – Dosage", type: "text" },
    { key: "med5Duration", label: "Medicine 5 – Duration", type: "text" },
    { key: "med6Name", label: "Medicine 6", type: "text" },
    { key: "med6Dosage", label: "Medicine 6 – Dosage", type: "text" },
    { key: "med6Duration", label: "Medicine 6 – Duration", type: "text" },
    { key: "advice", label: "Advice", type: "textarea" },
    { key: "followUp", label: "Follow-up", type: "text" }
    /* No doctorName / doctorQualification / doctorRegNo fields: the printed
       signature block was removed from both prescription templates, so these
       would be controls that change nothing. The data keys still exist. */
  ],
  "medical-certificate": [
    /* ── Template 1 – Certificate of Attendance ── */
    { key: "clinicName", label: "Clinic Name (letterhead)", type: "text" },
    { key: "clinicAddress", label: "Clinic Address", type: "textarea" },
    { key: "clinicPhone", label: "Clinic Phone(s)", type: "textarea" },
    { key: "logoPath", label: "Logo path (e.g. /images/logos/mine.png)", type: "text" },
    { key: "registrationLabel", label: "Registration Label", type: "text" },
    { key: "registrationNo", label: "Registration No.", type: "text" },
    { key: "emiratesId", label: "Emirates ID / Residence ID", type: "text" },
    { key: "dateOfBirth", label: "Date of Birth", type: "text" },
    { key: "ageGender", label: "Age / Gender", type: "text" },
    { key: "nationality", label: "Nationality", type: "text" },
    { key: "patientPhone", label: "Patient Phone No.", type: "text" },
    { key: "insuranceProvider", label: "Insurance Provider", type: "text" },
    { key: "memberPolicyNo", label: "Member ID / Policy No.", type: "text" },
    { key: "company", label: "Company", type: "text" },
    { key: "attendedAt", label: "Has attended (clinic legal name)", type: "text" },
    { key: "attendedOn", label: "Attended on (date)", type: "text" },
    { key: "diagnosisCodes", label: "Diagnosed with (ICD codes)", type: "text" },
    { key: "closingStatement", label: "Closing Statement", type: "text" },
    { key: "specialty", label: "Doctor's Specialty", type: "text" },
    { key: "licenseLabel", label: "Licence Label (e.g. DHA license No)", type: "text" },
    { key: "licenseNo", label: "Licence No.", type: "text" },
    /* ── Template 2 – Fitness certificate on the Park letterhead ── */
    { key: "department", label: "Department (header, right)", type: "text" },
    { key: "addressLine", label: "Address / Phone line", type: "text" },
    { key: "certificateNo", label: "Certificate No.", type: "text" },
    { key: "date", label: "Date", type: "text" },
    { key: "patientTitle", label: "Patient Title", type: "text" },
    { key: "patientName", label: "Patient's Name", type: "text" },
    { key: "ageYears", label: "Age (years)", type: "text" },
    { key: "guardianName", label: "S/o – D/o – W/o", type: "text" },
    { key: "address", label: "Resident of (address)", type: "text" },
    { key: "identificationMark", label: "Identification Mark", type: "text" },
    { key: "diagnosis", label: "Diagnosis", type: "textarea" },
    { key: "treatedFrom", label: "Under treatment – From", type: "text" },
    { key: "treatedTo", label: "Under treatment – To", type: "text" },
    { key: "restDays", label: "Rest advised (e.g. 5 days)", type: "text" },
    { key: "fitFrom", label: "Fit to resume duty from", type: "text" },
    { key: "remarks", label: "Remarks", type: "textarea" },
    { key: "doctorName", label: "Doctor's Name", type: "text" },
    { key: "doctorQualification", label: "Doctor's Qualification", type: "text" },
    { key: "doctorRegNo", label: "Registration No.", type: "text" }
  ],
  "resume": [
    { key: "fullName", label: "Full Name", type: "text" },
    { key: "jobTitle", label: "Headline (Role | Focus | Focus)", type: "text" },
    { key: "phone", label: "Phone", type: "text" },
    { key: "email", label: "Email", type: "text" },
    { key: "linkedin", label: "LinkedIn / Website", type: "text" },
    { key: "location", label: "Location", type: "text" },
    { key: "summary", label: "Summary", type: "textarea" },
    { key: "exp1Title", label: "Experience 1 – Job Title", type: "text" },
    { key: "exp1Company", label: "Experience 1 – Company", type: "text" },
    { key: "exp1Period", label: "Experience 1 – Period", type: "text" },
    { key: "exp1Location", label: "Experience 1 – Location", type: "text" },
    { key: "exp1Details", label: "Experience 1 – Highlights (one per line)", type: "textarea" },
    { key: "exp2Title", label: "Experience 2 – Job Title", type: "text" },
    { key: "exp2Company", label: "Experience 2 – Company", type: "text" },
    { key: "exp2Period", label: "Experience 2 – Period", type: "text" },
    { key: "exp2Location", label: "Experience 2 – Location", type: "text" },
    { key: "exp2Details", label: "Experience 2 – Highlights (one per line)", type: "textarea" },
    { key: "exp3Title", label: "Experience 3 – Job Title", type: "text" },
    { key: "exp3Company", label: "Experience 3 – Company", type: "text" },
    { key: "exp3Period", label: "Experience 3 – Period", type: "text" },
    { key: "exp3Location", label: "Experience 3 – Location", type: "text" },
    { key: "exp3Details", label: "Experience 3 – Highlights (one per line)", type: "textarea" },
    { key: "ach1Title", label: "Key Achievement 1 – Title", type: "text" },
    { key: "ach1Text", label: "Key Achievement 1 – Description", type: "textarea" },
    { key: "ach2Title", label: "Key Achievement 2 – Title", type: "text" },
    { key: "ach2Text", label: "Key Achievement 2 – Description", type: "textarea" },
    { key: "ach3Title", label: "Key Achievement 3 – Title", type: "text" },
    { key: "ach3Text", label: "Key Achievement 3 – Description", type: "textarea" },
    { key: "ach4Title", label: "Key Achievement 4 – Title", type: "text" },
    { key: "ach4Text", label: "Key Achievement 4 – Description", type: "textarea" },
    { key: "skills", label: "Skills (one per line)", type: "textarea" },
    { key: "edu1Degree", label: "Education 1 – Degree", type: "text" },
    { key: "edu1Institution", label: "Education 1 – Institution", type: "text" },
    { key: "edu1Period", label: "Education 1 – Period", type: "text" },
    { key: "edu1Location", label: "Education 1 – Location", type: "text" },
    { key: "edu2Degree", label: "Education 2 – Degree", type: "text" },
    { key: "edu2Institution", label: "Education 2 – Institution", type: "text" },
    { key: "edu2Period", label: "Education 2 – Period", type: "text" },
    { key: "edu2Location", label: "Education 2 – Location", type: "text" },
    { key: "course1Title", label: "Training / Course 1 – Title", type: "text" },
    { key: "course1Text", label: "Training / Course 1 – Description", type: "textarea" },
    { key: "course2Title", label: "Training / Course 2 – Title", type: "text" },
    { key: "course2Text", label: "Training / Course 2 – Description", type: "textarea" },
    { key: "int1Title", label: "Interest 1 – Title", type: "text" },
    { key: "int1Text", label: "Interest 1 – Description", type: "textarea" },
    { key: "int2Title", label: "Interest 2 – Title", type: "text" },
    { key: "int2Text", label: "Interest 2 – Description", type: "textarea" },
    { key: "lang1Name", label: "Language 1 – Name", type: "text" },
    { key: "lang1Level", label: "Language 1 – Level", type: "text" },
    { key: "lang1Rating", label: "Language 1 – Rating (0–5)", type: "number" },
    { key: "lang2Name", label: "Language 2 – Name", type: "text" },
    { key: "lang2Level", label: "Language 2 – Level", type: "text" },
    { key: "lang2Rating", label: "Language 2 – Rating (0–5)", type: "number" },
    { key: "lang3Name", label: "Language 3 – Name", type: "text" },
    { key: "lang3Level", label: "Language 3 – Level", type: "text" },
    { key: "lang3Rating", label: "Language 3 – Rating (0–5)", type: "number" }
  ]
};

export const mockData: DocumentDataMap = {
  "salary-slip": {
    companyName: "DATCO CIVIL",
    employeeName: "Anderson Varghese",
    employeeId: "EMP-0988",
    month: "2023-02",
    basicSalary: 7500,
    allowances: 7500,
    deductions: 0,
    issueDate: "2023-02-28",
    panNumber: "BWUPA3029E",
    principalEmployer: "",
    engagedThrough: "M/s. DATCO CIVIL",
    workingDays: 26,
    projectName: "Khatan WSS Project :LE 200816",
    designation: "Fire & Safety Officer",
    rateOfWorkmen: 576.92,
    bankName: "Bank Of Baroda",
    accountNo: "52148100008038",
    pfAccountNo: "NA",
    uanNo: "101619878937",
    hra: 3000,
    transportAllowance: 1600,
    medicalAllowance: 2900,
    pfDeduction: 0,
    esiDeduction: 0,
    tdsDeduction: 0,
    professionalTax: 0,
    companyEmail: "davisvibin@gmail.com"
  },
  "offer-letter": {
    companyName: "DATCO CIVIL",
    candidateName: "Anderson Varghese",
    referenceNumber: "DATCO/HR/OL/2026",
    certificateDate: "2021-07-02",
    position: "Fire & Safety Officer",
    internalJobTitle: "Fire & Safety Officer",
    joiningDate: "2021-07-02",
    employmentEndDate: "",
    annualSalary: 180000,
    managerName: "",
    signatoryName: "T. A. Davis",
    signatoryDesignation: "PWD Contractor",
    offerDate: "2021-07-02",
    fromName: "T. A. Davis",
    fromTitle: "PWD Contractor",
    fromAddressLine1: "Thoduparamban House",
    fromAddressLine2: "Vallakkunnu",
    fromAddressLine3: "P.O. Kallettumkara",
    fromEmail: "davisvibin@gmail.com",
    fromPhone: "9446144967",
    toAddressLine1: "Marathampilly house",
    toAddressLine2: "Vallakkunnu",
    toAddressLine3: "P.O. Muriyad",
    toPincode: "680683",
    toPhone: "",
    monthlySalary: 15000,
    workLocation: "The Construction of Public Library, Thrissur",
    workingHours: "8am-5pm",
    workingDays: "Monday - Saturday",
    probationMonths: "3"
  },
  "relieving-letter": {
    companyName: "DATCO CIVIL",
    employeeName: "Anderson Varghese",
    employeeId: "EMP-0988",
    designation: "Fire & Safety Officer",
    joiningDate: "2021-07-02",
    relievingDate: "2025-12-15",
    letterDate: "2025-12-15",
    companyPhone: "9446144967 / 7994282695",
    companyEmail: "davisvibin@gmail.com"
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
  "roles-responsibility": {
    position: "Fire & Safety Officer",
    employeeName: "Anderson Varghese",
    employeeId: "EMP-0988"
  },
  "microsoft-sales-chat": {},
  "bill": {
    storeName: "AL MADINA HYPERMARKETS",
    storeMall: "SHOPPERS MALL",
    storeAddress: "JEBEL ALT IND. AREA 1, DUBAI, UAE",
    storePhone: "04-8846600",
    storeFax: "04-8846660",
    trnNumber: "100203642200003",
    invoiceNo: "154",
    date: "01/04/2026",
    time: "19:08:33",
    terminal: "12",
    cashier: "MUHAMMED SHA",
    shiftNo: "1",
    location: "JBL-HYPR5-SHPRS",
    item1Name: "SUJUAN NITRILE RUBBER GLOVES",
    item1Barcode: "02683012614",
    item1Qty: 1,
    item1Price: 3.00,
    item2Name: "VAULTEX VHT WHITE SAFETY HELMET",
    item2Barcode: "02671582555",
    item2Qty: 1,
    item2Price: 10.00,
    item3Name: "WORKLAND ROH SAFETY VEST",
    item3Barcode: "08677722583",
    item3Qty: 1,
    item3Price: 11.00,
    item4Name: "VAULTEX LABOUR CPV WORKING DRESS",
    item4Barcode: "10657472347",
    item4Qty: 1,
    item4Price: 29.00,
    item5Name: "NEW STYLE NS-2 MENS SAFETY SHOES",
    item5Barcode: "03662422486",
    item5Qty: 1,
    item5Price: 30.00,
    cashReceived: 100.00
  },
  "contract": {
    letterDate: "",
    letterRef: "GBC/MGT/LOA/26/0113",
    toCompany: "Midline General Trading Fze",
    toAddressLine1: "Plot no 11009 S11010,",
    toAddressLine2: "Building no S110 4333,",
    toAddressLine3: "United Arab Emirates",
    attentionName: "Mr. Essay Bousayf",
    attentionTitle: "General Manager",
    projectName: "New Benghazi International Airport, Libya",
    contractNumber: "BIA/PSR/049/2026",
    contractTitle: "Supply, Installation, Testing and Commissioning of Primary Surveillance Radar (PSR), Secondary Surveillance Radar (MSSR), and DVOR/DME Systems at New Benghazi International Airport, Libya.",
    proposalRef: "MID160126/0104",
    proposalDate: "16.02.2026",
    employerName: "Global Builders Construction Limited Libya [GBC]",
    employerShortName: "GBC",
    contractorName: "Midline General Trading FZE",
    lumpSumPrice: 13087729.22,
    lumpSumPriceWords: "Euro Thirteen Million Eighty Seven Thousand Seven Hundred Twenty Nine and Twenty Two Cents Only",
    supplyPrice: 11300000,
    installPrice: 1787729.22,
    commencementDate: "2026-06-06",
    completionDate: "2027-01-31",
    handoverDate: "2027-03-31",
    acknowledgementEmail: "procurement01@globalbuilders.ae",
    acknowledgementAttn: "Mohamed Al Khyeli",
    employerSignatoryName: "Mohamed Al Khyeli",
    employerSignatoryTitle: "Chairman",
    employerCompany: "Global Builders Construction Limited",
    contractorSignatoryName: "Mr. Essay Bousayf",
    contractorSignatoryTitle: "General Manager"
  },
  "ultrasound-report": {
    clinicName: "Care Diagnostic Centre",
    clinicAddress: "Near Kali Mandir, Daudpur, Gorakhpur",
    clinicPhone: "9569865981",
    doctorName: "Dr. (Mrs.) Sarwat Ali",
    doctorQualification: "MBBS, DMRD",
    doctorHospital: "KEM Hospital Mumbai",
    doctorDesignation: "Consultant Radiologist",
    reportId: "ID-UX2231222",
    patientName: "MRS. ANJUM FATIMA",
    reportDate: "24 JULY 2026",
    referredBy: "DR.ONKAR RAI (M.D.MED.)",
    ageSex: "42Y/F",
    studyTitle: "USG: WHOLE ABDOMEN (FEMALE)",
    liver:
      "Liver- Normal in size (13.9 cm) and shape. Homogeneous echotexture. No IHBR dilatation / focal SOL is seen.",
    gallBladder:
      "Gall bladder - Partially distended.  A 12.0 mm calculus is seen in neck of gall bladder. Wall appears thickened.  Sludge seen in gall bladder.",
    cbd: "CBD –3.0mm (normal).   PV - normal.  porta - normal",
    pancreas:
      "Pancreas is normal in thickness. Clearly defined margins are seen. Pancreatic duct is not dilated.",
    spleen: "Spleen is normal in size (8.4 cm) and echotexture.  No focal lesion is seen.",
    diaphragm: "Diaphragmatic movements are within normal limits on both side.",
    rightKidney:
      "Right kidney- normal in size (9.5x3.4 cm),outline and cortical echotexture. Renal parenchymal width is normal. Cortico-medullary differentiation is normal. No backpressure changes are seen. Perinephric spaces are normal. Ureter – normal.",
    leftKidney:
      "Left kidney- normal in size (9.8x4.5 cm), Perinephric spaces are normal. Mild left hydronephrosis is seen. Left ureter is dilated. A 10.4 mm calculus is seen in distal third of left ureter. Mild cortical thinning is seen in left kidney.",
    urinaryBladder:
      "Urinary bladder is partially filled. Wall is smooth and regular. Lumen is echofree.",
    prostate: "",
    uterus:
      "Uterus is retroverted and normal in size (6.9x3.9x4.6 cm) and shape. Myometrium and endometrium is normal. No definite evidence of myoma is seen. Endometrial cavity is free.",
    adnexa: "B/L adnexa /ovaries are normal.",
    retroperitoneum:
      "Retroperitoneal vessels are normal. No retroperitoneal or mesenteric lymphnodes are seen. Psoas muscles are normal.",
    lymphNodes: "",
    ascites: "No evidence of ascitis is seen in abdomen.",
    impression:
      "Cholelithiasis with cholecystitis & sludge in gall bladder.\nMild left hydroureteronephrosis due to distal left ureteric calculus.\nMild cortical thinning is seen in left kidney.",
    signatoryName: "Dr.Sarwat Ali",
    signatoryQualification: "M.B.B.S.DMRD",
    footerTiming: "Timing : Monday to Saturday - 09 AM to 07 PM",
    footerNote: "This report is not for medico legal purpose"
  },
  "prescription": {
    department: "MEDICINE",
    addressLine:
      "हनुमान मंदिर रोड, बेतियाहाता, गोरखपुर, फोन : 05512200698, 05517960339, 9839965677",
    patientTitle: "Mrs.",
    patientName: "ANJUM FATIMA",
    patientId: "6311",
    ageSex: "42 Y / F",
    refByDoctor: "DR.ONKAR RAI (M.D.MED.)",
    date: "24/07/2026",
    complaints: "Fever with body ache since 3 days.",
    diagnosis: "Acute viral fever.",
    med1Name: "Tab. Paracetamol 500 mg",
    med1Dosage: "1 - 0 - 1  (after food)",
    med1Duration: "5 days",
    med2Name: "Cap. Omeprazole 20 mg",
    med2Dosage: "1 - 0 - 0  (before food)",
    med2Duration: "10 days",
    med3Name: "Tab. Cetirizine 10 mg",
    med3Dosage: "0 - 0 - 1  (at bedtime)",
    med3Duration: "5 days",
    med4Name: "Syp. Antacid",
    med4Dosage: "2 tsp  (SOS)",
    med4Duration: "7 days",
    med5Name: "",
    med5Dosage: "",
    med5Duration: "",
    med6Name: "",
    med6Dosage: "",
    med6Duration: "",
    advice: "Plenty of oral fluids. Light diet. Review if fever persists beyond 3 days.",
    followUp: "31/07/2026",
    doctorName: "DR. ONKAR RAI",
    doctorQualification: "M.D. (Medicine)",
    doctorRegNo: ""
  },
  "medical-certificate": {
    logoPath: "/images/logos/bg_removed jospeh logo.png",
    clinicName: "Dr. Joseph's Polyclinic, Karama",
    clinicAddress: "Al Jaber Bldg., 1st & 2nd Floor, ADCB Metro Station, Exit 1,\nKarama, Dubai",
    clinicPhone: "+971 4 337 8828\n+971 4 335 8426",
    registrationLabel: "Member Registration No",
    registrationNo: "AMBRIG00163235",
    emiratesId: "",
    dateOfBirth: "",
    ageGender: "",
    nationality: "",
    patientPhone: "",
    insuranceProvider: "",
    memberPolicyNo: "",
    company: "",
    attendedAt: "Dr. Joseph Polyclinic (BR of Amber Clinics L.L.C)",
    attendedOn: "Thursday Jul 30, 2026",
    diagnosisCodes:
      "R51.9 - Headache, unspecified\nG43.009 - Migraine w/o aura, not intractable, w/o status migrainosus",
    closingStatement: "This is a certificate of attendance .",
    specialty: "",
    licenseLabel: "License No",
    licenseNo: "DHA-P-0244087",
    department: "MEDICINE",
    addressLine:
      "हनुमान मंदिर रोड, बेतियाहाता, गोरखपुर, फोन : 05512200698, 05517960339, 9839965677",
    certificateNo: "MC/2026/0418",
    date: "24/07/2026",
    patientTitle: "Mrs.",
    patientName: "ASHKANA SHARAFUDEEN",
    ageYears: "36",
    guardianName: "W/o Mr. Imran Ahmed",
    address: "H. No. 214, Betiahata, Gorakhpur, Uttar Pradesh - 273001",
    identificationMark: "Mole on the left forearm",
    diagnosis: "G43.009 - Migraine without aura, not intractable, without status migrainosus.",
    treatedFrom: "17/08/2026",
    treatedTo: "18/08/2026",
    restDays: "2 days",
    fitFrom: "19/08/2026",
    remarks: "Advised rest in a quiet, darkened room and avoidance of known migraine triggers.",
    doctorName: "Dr T S Sateesh",
    doctorQualification: "MBBS, DLO (GP)",
    doctorRegNo: "DHA-P-0244087"
  },
  "resume": {
    fullName: "Anderson Varghese",
    jobTitle: "Fire & Safety Officer | Construction Site Safety | NEBOSH Certified",
    phone: "9446144967",
    email: "anderson.varghese@gmail.com",
    location: "Thrissur, Kerala",
    linkedin: "linkedin.com/in/anderson-varghese",
    summary:
      "Fire & Safety Officer with 6+ years of experience across construction sites in Kerala. Proven record includes an incident-free four-year project tenure, first-submission statutory audit clearances and safety training delivered to 200+ workers, backed by NEBOSH certification and strong documentation discipline.",
    skills:
      "Fire Risk Assessment\nEmergency Evacuation Planning\nFire Alarm & Sprinkler Systems\nSafety Audits & NBC Compliance\nFire Drills & Safety Training\nIncident Investigation & Reporting",
    exp1Title: "Fire & Safety Officer",
    exp1Company: "DATCO CIVIL",
    exp1Period: "07/2021 - 12/2025",
    exp1Location: "Thrissur, Kerala",
    exp1Details:
      "Supervised fire protection works for the Public Library construction project, covering alarm systems, hydrant lines and extinguisher placement.\nConducted weekly site inspections to ensure compliance with NBC and local fire authority guidelines.\nPlanned and led quarterly fire drills, cutting full-site evacuation time by 35%.\nMaintained audit-ready fire safety records that cleared every statutory inspection at first submission.",
    exp2Title: "Safety Assistant",
    exp2Company: "VKC Builders",
    exp2Period: "06/2019 - 06/2021",
    exp2Location: "Kochi, Kerala",
    exp2Details:
      "Ran daily toolbox talks and PPE compliance checks for a 120-worker residential site.\nTracked maintenance and accessibility of firefighting equipment across four active blocks.\nAssisted incident investigations and drafted corrective-action reports for management.",
    exp3Title: "",
    exp3Company: "",
    exp3Period: "",
    exp3Location: "",
    exp3Details: "",
    ach1Title: "Incident-Free Project Record",
    ach1Text:
      "Maintained zero lost-time fire incidents across the Public Library project, Thrissur, over a four-year site tenure.",
    ach2Title: "Faster Emergency Response",
    ach2Text:
      "Cut full-site evacuation drill time by 35% through revised assembly-point planning and quarterly drills.",
    ach3Title: "Audit-Ready Compliance",
    ach3Text:
      "Cleared every statutory fire authority inspection at first submission with complete, up-to-date documentation.",
    ach4Title: "Workforce Safety Training",
    ach4Text:
      "Trained 200+ workers and staff in extinguisher handling, evacuation procedure and fire watch duties.",
    edu1Degree: "Diploma in Fire & Industrial Safety",
    edu1Institution: "St. Thomas Institute of Safety Management",
    edu1Period: "2018 - 2019",
    edu1Location: "Thrissur, Kerala",
    edu2Degree: "B.Sc. Chemistry",
    edu2Institution: "University of Calicut",
    edu2Period: "2015 - 2018",
    edu2Location: "Malappuram, Kerala",
    course1Title: "NEBOSH International General Certificate",
    course1Text:
      "Internationally recognised certification covering hazard identification, risk assessment and control of workplace safety risks.",
    course2Title: "First Aid & CPR – St. John Ambulance",
    course2Text:
      "Certified in emergency first response, CPR and casualty handling for construction site environments.",
    int1Title: "Fire Safety Awareness",
    int1Text:
      "Running community and workplace awareness sessions on fire prevention, focused on building a prevention-first safety culture.",
    int2Title: "Mentoring Junior Safety Staff",
    int2Text:
      "Coaching trainee safety assistants on inspection routines, documentation discipline and emergency preparedness.",
    lang1Name: "Malayalam",
    lang1Level: "Native",
    lang1Rating: 5,
    lang2Name: "English",
    lang2Level: "Advanced",
    lang2Rating: 4,
    lang3Name: "Hindi",
    lang3Level: "Intermediate",
    lang3Rating: 3
  }
};

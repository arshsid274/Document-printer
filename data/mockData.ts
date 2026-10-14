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

export interface RelievingLetter2Data {
  [key: string]: string | number;
  logoPath: string;
  companyShortName: string;
  headerRightLines: string;
  companyLegalName: string;
  companyFormerName: string;
  registeredOffice: string;
  contactLine: string;
  letterDate: string;
  heading: string;
  salutation: string;
  employeeName: string;
  empCode: string;
  fromDate: string;
  toDate: string;
  designation: string;
  relievedDate: string;
  pronounSubject: string;
  pronounPossessive: string;
  noticeClause: string;
  closingLine: string;
  signaturePath: string;
  signatoryName: string;
  signatoryTitle: string;
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
  /* Aaditya OPD generated consultation sheet (Template 3) */
  aadityaLogoPath: string;
  aadityaCentreNameHi: string;
  aadityaCentreNameEn: string;
  aadityaAddressHi: string;
  aadityaAddressEn: string;
  aadityaMobile: string;
  aadityaDoc1NameHi: string;
  aadityaDoc1NameEn: string;
  aadityaDoc1Quals: string;
  aadityaDoc1SpecHi: string;
  aadityaDoc1SpecEn: string;
  aadityaDoc1CredentialsHi: string;
  aadityaDoc1CredentialsEn: string;
  aadityaDoc1Reg: string;
  aadityaDoc2NameHi: string;
  aadityaDoc2NameEn: string;
  aadityaDoc2Quals: string;
  aadityaDoc2SpecHi: string;
  aadityaDoc2SpecEn: string;
  aadityaDoc2CredentialsHi: string;
  aadityaDoc2CredentialsEn: string;
  aadityaDoc2Reg: string;
  aadityaTimingLeftHi: string;
  aadityaTimingLeftEn: string;
  aadityaTimingCentreHi: string;
  aadityaTimingCentreEn: string;
  aadityaTimingRightHi: string;
  aadityaTimingRightEn: string;
  aadityaRegNo: string;
  aadityaPatientId: string;
  aadityaOpdDate: string;
  aadityaTokenNo: string;
  aadityaWeight: string;
  aadityaBp: string;
  aadityaPatientName: string;
  aadityaAgeSex: string;
  aadityaGuardian: string;
  aadityaAddress: string;
  aadityaConsultDoctor: string;
  aadityaProvisionalDiagnosis: string;
  aadityaAdmissionAdvice: string;
  aadityaClinicalNotes: string;
  aadityaInvestigations: string;
  aadityaDiagnosisTyped: string;
  aadityaSurgeryAdvice: string;
  aadityaMedicationAdvice: string;
  aadityaReviewLineHi: string;
  aadityaReviewLineEn: string;
  aadityaFooterNoteHi: string;
  aadityaFooterNoteEn: string;
  aadityaHolidayHi: string;
  aadityaHolidayEn: string;
  aadityaLegalNotesHi: string;
  aadityaLegalNotesEn: string;
}

export interface MedicalSlipData {
  [key: string]: string | number;
  logoPath: string;
  centreName: string;
  addressLine: string;
  supplyType: string;
  pageLabel: string;
  /* Sale Bill (Template 1) */
  gstin: string;
  dlNo: string;
  billTitle: string;
  uhidNo: string;
  billNo: string;
  billDate: string;
  printDate: string;
  paymentMode: string;
  ipNo: string;
  location: string;
  createdBy: string;
  paidStampPath: string;
  rowsFirstPage: number;
  rowsPerPage: number;
  /* Optional further Sale Bills, appended after the first (Template 1) */
  items2: string;
  billNo2: string;
  billDate2: string;
  printDate2: string;
  items3: string;
  billNo3: string;
  billDate3: string;
  printDate3: string;
  /* OPD consultation letterhead (Template 3) */
  opdCentreName: string;
  opdCentreAddress: string;
  opdCentreMobile: string;
  opdDoc1Name: string;
  opdDoc1Quals: string;
  opdDoc1Spec: string;
  opdDoc1Credentials: string;
  opdDoc1Reg: string;
  opdDoc2Name: string;
  opdDoc2Quals: string;
  opdDoc2Spec: string;
  opdDoc2Credentials: string;
  opdDoc2Reg: string;
  opdTimingLeft: string;
  opdTimingCentreHindi: string;
  opdTimingCentre: string;
  opdTimingRight: string;
  opdRegNo: string;
  opdPatientId: string;
  opdDate: string;
  opdTokenNo: string;
  opdWeight: string;
  opdBp: string;
  opdGuardian: string;
  opdDoctorName: string;
  opdDiagnosis: string;
  opdReviewLine: string;
  opdFooterNote: string;
  opdLegalNotes: string;
  opdHolidayNote: string;
  /* Pathology report (Template 4) */
  labLogoPath: string;
  labName: string;
  labAddress: string;
  labPhone: string;
  labPatientName: string;
  labRefByDoctor: string;
  labReportDate: string;
  labSampleNo: string;
  labResults: string;
  labSignaturePath: string;
  labSignatoryName: string;
  labSignatoryQualification: string;
  labDisclaimer: string;
  /* Radiology report (Template 5) */
  radLogoPath: string;
  radIsoPath: string;
  radCentreName: string;
  radTagline: string;
  radTaglineHindi: string;
  radAddress: string;
  radReportLabel: string;
  radIdNo: string;
  radReportDate: string;
  radPatientName: string;
  radAgeSex: string;
  radRefBy: string;
  radStudyTitle: string;
  radFindings: string;
  radAdviceLabel: string;
  radAdvice: string;
  radImpressionLabel: string;
  radImpression: string;
  radSignatoryName: string;
  radSignatoryQualification: string;
  radDisclaimer: string;
  radFacilitiesHeading: string;
  radFacilities: string;
  /* Discharge Summary (Template 6) */
  dsTitle: string;
  dsPrintDate: string;
  dsUhidNo: string;
  dsIpNo: string;
  dsAdmitDate: string;
  dsFatherName: string;
  dsDoctorName: string;
  dsSurgeryDate: string;
  dsDischargeType: string;
  dsExpDischargeDate: string;
  dsFinalDiagnosis: string;
  dsProcedures: string;
  dsCondition: string;
  dsInstructions: string;
  dsMedications: string;
  dsFollowUp: string;
  dsHistory: string;
  dsAckLine: string;
  /* Pharmacy receipt (Template 7) */
  msInvocation: string;
  msStoreName: string;
  msAddress: string;
  msTime: string;
  msGstin: string;
  msPhone: string;
  msDlNo: string;
  msPatientName: string;
  msBillNo: string;
  msDoctorName: string;
  msDate: string;
  msItems: string;
  msFooter1: string;
  msFooter2: string;
  msFooter3: string;
  /* One line per row: NAME | HSN | CATEGORY | BATCH | EXPIRY | RATE | QTY | GST% | AMOUNT?
     AMOUNT is optional - left blank it is computed as rate x qty x (1 + gst/100). */
  items: string;
  /* Template 2 - Clinical Summary intake sheet */
  summaryTitle: string;
  udNo: string;
  opNo: string;
  visitDate: string;
  patientName: string;
  ageSex: string;
  patType: string;
  patientAddress: string;
  consultant: string;
  /* "# Heading" starts a section; other lines are "left symptom | right symptom" */
  sections: string;
  previousIllnessRows: number;
}

export interface DocumentDataMap {
  "salary-slip": SalarySlipData;
  "offer-letter": OfferLetterData;
  "relieving-letter": RelievingLetterData;
  "relieving-letter-2": RelievingLetter2Data;
  "bank-statement": BankStatementData;
  "microsoft-sales-chat": MicrosoftSalesChatData;
  "roles-responsibility": RolesResponsibilityData;
  "bill": BillData;
  "contract": ContractData;
  "ultrasound-report": UltrasoundReportData;
  "prescription": PrescriptionData;
  "medical-certificate": MedicalCertificateData;
  "medical-slip": MedicalSlipData;
  "resume": ResumeData;
  "resume-2": ResumeData;
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
  { id: "relieving-letter-2", label: "Relieving Letter 2" },
  { id: "resume", label: "Resume" },
  { id: "resume-2", label: "Resume 2" },
  { id: "salary-slip", label: "Salary Slip" },
  { id: "bank-statement", label: "Bank Statement" },
  { id: "roles-responsibility", label: "Roles & Responsibility" },
  { id: "contract", label: "Contract" },
  { id: "bill", label: "Bill" },
  { id: "ultrasound-report", label: "Ultrasound Report" },
  { id: "prescription", label: "Prescription" },
  { id: "medical-certificate", label: "Medical Certificate" },
  { id: "medical-slip", label: "Medical Slip" },
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
  "relieving-letter-2": [{ id: "template1", label: "Template 1 (Experience Cum Relieving)" }],
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
    { id: "template2", label: "Template 2 (Fitness – Park Hospital)" },
    { id: "template3", label: "Template 3 (Aaditya OPD Generated)" }
  ],
  "medical-slip": [
    { id: "template1", label: "Template 1 (Itemised Supply Slip)" },
    { id: "template2", label: "Template 2 (Clinical Summary)" },
    { id: "template3", label: "Template 3 (OPD Letterhead)" },
    { id: "template4", label: "Template 4 (Pathology Report)" },
    { id: "template5", label: "Template 5 (Radiology Report)" },
    { id: "template6", label: "Template 6 (Discharge Summary)" },
    { id: "template7", label: "Template 7 (Pharmacy Receipt)" }
  ],
  "resume": [{ id: "template1", label: "Template 1" }],
  "resume-2": [{ id: "template1", label: "Template 1 (Single Column)" }]
};

export const defaultTemplateSelection: Record<DocumentType, string> = {
  "salary-slip": "template1",
  "offer-letter": "template1",
  "relieving-letter": "template1",
  "relieving-letter-2": "template1",
  "bank-statement": "template1",
  "roles-responsibility": "template1",
  "microsoft-sales-chat": "template1",
  "bill": "template1",
  "contract": "template1",
  "ultrasound-report": "template1",
  "prescription": "template1",
  "medical-certificate": "template1",
  "medical-slip": "template6",
  "resume": "template1",
  "resume-2": "template1"
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
  "relieving-letter-2": [
    { key: "companyShortName", label: "Masthead wordmark", type: "text" },
    { key: "logoPath", label: "Logo path", type: "text" },
    { key: "headerRightLines", label: "Header right lines (web / social, one per line)", type: "textarea" },
    { key: "letterDate", label: "Letter Date", type: "text" },
    { key: "heading", label: "Heading", type: "text" },
    { key: "salutation", label: "Salutation (Mr. / Ms.)", type: "text" },
    { key: "employeeName", label: "Employee Name", type: "text" },
    { key: "empCode", label: "EMP Code", type: "text" },
    { key: "fromDate", label: "Working from (date)", type: "text" },
    { key: "toDate", label: "Working to (date)", type: "text" },
    { key: "designation", label: "Last Designation", type: "text" },
    { key: "relievedDate", label: "Relieved on (date)", type: "text" },
    { key: "pronounSubject", label: "Pronoun - subject (He / She)", type: "text" },
    { key: "pronounPossessive", label: "Pronoun - possessive (His / Her)", type: "text" },
    { key: "noticeClause", label: "Notice-period clause (paragraph)", type: "textarea" },
    { key: "closingLine", label: "Closing line", type: "text" },
    { key: "signatoryName", label: "Signatory Name", type: "text" },
    { key: "signatoryTitle", label: "Signatory Title", type: "text" },
    { key: "signaturePath", label: "Signature image path", type: "text" },
    { key: "companyLegalName", label: "Company legal name", type: "text" },
    { key: "companyFormerName", label: "Company former name", type: "text" },
    { key: "registeredOffice", label: "Registered office (footer)", type: "textarea" },
    { key: "contactLine", label: "Footer contact line", type: "text" }
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
    { key: "doctorRegNo", label: "Registration No.", type: "text" },
    /* -- Template 3 – Aaditya generated OPD sheet -- */
    { key: "aadityaLogoPath", label: "Aaditya: Logo path", type: "text" },
    { key: "aadityaCentreNameHi", label: "Aaditya: Centre name (Hindi)", type: "text" },
    { key: "aadityaCentreNameEn", label: "Aaditya: Centre name (English)", type: "text" },
    { key: "aadityaAddressHi", label: "Aaditya: Address (Hindi)", type: "text" },
    { key: "aadityaAddressEn", label: "Aaditya: Address (English)", type: "text" },
    { key: "aadityaMobile", label: "Aaditya: Mobile", type: "text" },
    { key: "aadityaDoc1NameHi", label: "Aaditya: Doctor 1 name (Hindi)", type: "text" },
    { key: "aadityaDoc1NameEn", label: "Aaditya: Doctor 1 name (English)", type: "text" },
    { key: "aadityaDoc1Quals", label: "Aaditya: Doctor 1 degrees", type: "text" },
    { key: "aadityaDoc1SpecHi", label: "Aaditya: Doctor 1 speciality (Hindi)", type: "text" },
    { key: "aadityaDoc1SpecEn", label: "Aaditya: Doctor 1 speciality (English)", type: "text" },
    { key: "aadityaDoc1CredentialsHi", label: "Aaditya: Doctor 1 credentials (Hindi)", type: "textarea" },
    { key: "aadityaDoc1CredentialsEn", label: "Aaditya: Doctor 1 credentials (English)", type: "textarea" },
    { key: "aadityaDoc1Reg", label: "Aaditya: Doctor 1 reg. no.", type: "text" },
    { key: "aadityaDoc2NameHi", label: "Aaditya: Doctor 2 name (Hindi)", type: "text" },
    { key: "aadityaDoc2NameEn", label: "Aaditya: Doctor 2 name (English)", type: "text" },
    { key: "aadityaDoc2Quals", label: "Aaditya: Doctor 2 degrees", type: "text" },
    { key: "aadityaDoc2SpecHi", label: "Aaditya: Doctor 2 speciality (Hindi)", type: "text" },
    { key: "aadityaDoc2SpecEn", label: "Aaditya: Doctor 2 speciality (English)", type: "text" },
    { key: "aadityaDoc2CredentialsHi", label: "Aaditya: Doctor 2 credentials (Hindi)", type: "textarea" },
    { key: "aadityaDoc2CredentialsEn", label: "Aaditya: Doctor 2 credentials (English)", type: "textarea" },
    { key: "aadityaDoc2Reg", label: "Aaditya: Doctor 2 reg. no.", type: "text" },
    { key: "aadityaTimingLeftHi", label: "Aaditya: Timing left (Hindi)", type: "textarea" },
    { key: "aadityaTimingLeftEn", label: "Aaditya: Timing left (English)", type: "textarea" },
    { key: "aadityaTimingCentreHi", label: "Aaditya: Timing centre (Hindi)", type: "text" },
    { key: "aadityaTimingCentreEn", label: "Aaditya: Timing centre (English)", type: "text" },
    { key: "aadityaTimingRightHi", label: "Aaditya: Timing right (Hindi)", type: "textarea" },
    { key: "aadityaTimingRightEn", label: "Aaditya: Timing right (English)", type: "textarea" },
    { key: "aadityaRegNo", label: "Aaditya: Reg. no.", type: "text" },
    { key: "aadityaPatientId", label: "Aaditya: Patient ID", type: "text" },
    { key: "aadityaTokenNo", label: "Aaditya: Token no.", type: "text" },
    { key: "aadityaPatientName", label: "Aaditya: Patient name", type: "text" },
    { key: "aadityaAgeSex", label: "Aaditya: Age / sex", type: "text" },
    { key: "aadityaGuardian", label: "Aaditya: Guardian", type: "text" },
    { key: "aadityaAddress", label: "Aaditya: Patient address", type: "text" },
    { key: "aadityaConsultDoctor", label: "Aaditya: Consultation doctor", type: "text" },
    { key: "aadityaOpdDate", label: "Aaditya: OPD date", type: "text" },
    { key: "aadityaWeight", label: "Aaditya: Weight", type: "text" },
    { key: "aadityaBp", label: "Aaditya: BP", type: "text" },
    { key: "aadityaProvisionalDiagnosis", label: "Aaditya: Provisional diagnosis", type: "text" },
    { key: "aadityaAdmissionAdvice", label: "Aaditya: Admission advice", type: "textarea" },
    { key: "aadityaClinicalNotes", label: "Aaditya: Clinical notes", type: "textarea" },
    { key: "aadityaInvestigations", label: "Aaditya: Investigations", type: "textarea" },
    { key: "aadityaDiagnosisTyped", label: "Aaditya: Diagnosis typed", type: "textarea" },
    { key: "aadityaSurgeryAdvice", label: "Aaditya: Surgery / procedure advice", type: "textarea" },
    { key: "aadityaMedicationAdvice", label: "Aaditya: Medication advice", type: "textarea" },
    { key: "aadityaReviewLineHi", label: "Aaditya: Review line (Hindi)", type: "text" },
    { key: "aadityaReviewLineEn", label: "Aaditya: Review line (English)", type: "text" },
    { key: "aadityaFooterNoteHi", label: "Aaditya: Footer note (Hindi)", type: "text" },
    { key: "aadityaFooterNoteEn", label: "Aaditya: Footer note (English)", type: "text" },
    { key: "aadityaHolidayHi", label: "Aaditya: Holiday (Hindi)", type: "text" },
    { key: "aadityaHolidayEn", label: "Aaditya: Holiday (English)", type: "text" },
    { key: "aadityaLegalNotesHi", label: "Aaditya: Legal notes (Hindi)", type: "textarea" },
    { key: "aadityaLegalNotesEn", label: "Aaditya: Legal notes (English)", type: "textarea" }
  ],
  "medical-slip": [
    { key: "centreName", label: "Centre Name (header)", type: "text" },
    { key: "addressLine", label: "Address Line", type: "text" },
    { key: "logoPath", label: "Logo path", type: "text" },
    { key: "supplyType", label: "Supply Type (Intra-state / Inter-state)", type: "text" },
    { key: "gstin", label: "GSTIN", type: "text" },
    { key: "dlNo", label: "DL No", type: "text" },
    { key: "billTitle", label: "Bill Title", type: "text" },
    { key: "uhidNo", label: "UHID No", type: "text" },
    { key: "billNo", label: "Bill No", type: "text" },
    { key: "billDate", label: "Bill Date", type: "text" },
    { key: "printDate", label: "Print Date", type: "text" },
    { key: "paymentMode", label: "Payment Mode", type: "text" },
    { key: "ipNo", label: "IP No", type: "text" },
    { key: "location", label: "Location (ward / room)", type: "text" },
    { key: "createdBy", label: "Created By", type: "text" },
    { key: "paidStampPath", label: "Paid stamp image path", type: "text" },
    { key: "rowsFirstPage", label: "Item rows on page 1", type: "number" },
    { key: "rowsPerPage", label: "Item rows on later pages", type: "number" },
    { key: "billNo2", label: "Bill 2: Bill No", type: "text" },
    { key: "billDate2", label: "Bill 2: Bill Date", type: "text" },
    { key: "printDate2", label: "Bill 2: Print Date", type: "text" },
    {
      key: "items2",
      label: "Bill 2 items - same format; leave blank for a single bill",
      type: "textarea"
    },
    { key: "billNo3", label: "Bill 3: Bill No", type: "text" },
    { key: "billDate3", label: "Bill 3: Bill Date", type: "text" },
    { key: "printDate3", label: "Bill 3: Print Date", type: "text" },
    {
      key: "items3",
      label: "Bill 3 items - same format; leave blank to omit",
      type: "textarea"
    },
    /* -- Template 3: OPD letterhead -- */
    { key: "opdCentreName", label: "OPD: Centre Name (Hindi)", type: "text" },
    { key: "opdCentreAddress", label: "OPD: Centre Address (Hindi)", type: "text" },
    { key: "opdCentreMobile", label: "OPD: Mobile line", type: "text" },
    { key: "opdDoc1Name", label: "OPD: Doctor 1 Name", type: "text" },
    { key: "opdDoc1Quals", label: "OPD: Doctor 1 Degrees", type: "text" },
    { key: "opdDoc1Spec", label: "OPD: Doctor 1 Speciality", type: "text" },
    { key: "opdDoc1Credentials", label: "OPD: Doctor 1 Past posts (one per line)", type: "textarea" },
    { key: "opdDoc1Reg", label: "OPD: Doctor 1 Reg. No.", type: "text" },
    { key: "opdDoc2Name", label: "OPD: Doctor 2 Name", type: "text" },
    { key: "opdDoc2Quals", label: "OPD: Doctor 2 Degrees", type: "text" },
    { key: "opdDoc2Spec", label: "OPD: Doctor 2 Speciality", type: "text" },
    { key: "opdDoc2Credentials", label: "OPD: Doctor 2 Past posts (one per line)", type: "textarea" },
    { key: "opdDoc2Reg", label: "OPD: Doctor 2 Reg. No.", type: "text" },
    { key: "opdTimingLeft", label: "OPD: Timing box - left", type: "textarea" },
    { key: "opdTimingCentreHindi", label: "OPD: Timing box - centre (Hindi)", type: "text" },
    { key: "opdTimingCentre", label: "OPD: Timing box - centre (English)", type: "text" },
    { key: "opdTimingRight", label: "OPD: Timing box - right", type: "textarea" },
    { key: "opdRegNo", label: "OPD: Reg. No.", type: "text" },
    { key: "opdPatientId", label: "OPD: Patient ID", type: "text" },
    { key: "opdDate", label: "OPD: Date", type: "text" },
    { key: "opdTokenNo", label: "OPD: Token No", type: "text" },
    { key: "opdWeight", label: "OPD: Weight", type: "text" },
    { key: "opdBp", label: "OPD: BP", type: "text" },
    { key: "opdGuardian", label: "OPD: Guardian", type: "text" },
    { key: "opdDoctorName", label: "OPD: Doctor Name (consultation)", type: "text" },
    { key: "opdDiagnosis", label: "OPD: Provisional Diagnosis", type: "text" },
    { key: "opdReviewLine", label: "OPD: Review line", type: "text" },
    { key: "opdFooterNote", label: "OPD: Footer note (left of holiday)", type: "text" },
    { key: "opdLegalNotes", label: "OPD: Legal notes (one per line)", type: "textarea" },
    { key: "opdHolidayNote", label: "OPD: Holiday note", type: "text" },
    /* -- Template 4: pathology report -- */
    { key: "labLogoPath", label: "LAB: Emblem path", type: "text" },
    { key: "labName", label: "LAB: Lab Name (banner)", type: "text" },
    { key: "labAddress", label: "LAB: Address (banner)", type: "text" },
    { key: "labPhone", label: "LAB: Phone", type: "text" },
    { key: "labPatientName", label: "LAB: Pt's Name", type: "text" },
    { key: "labRefByDoctor", label: "LAB: Ref. By Dr.", type: "text" },
    { key: "labReportDate", label: "LAB: Report Date", type: "text" },
    { key: "labSampleNo", label: "LAB: Sample No.", type: "text" },
    {
      key: "labResults",
      label:
        "LAB: Results - #Section / >Sub / ^Centred / *Note / === new page / ~NAME|VALUE|NAME|VALUE / NAME | VALUE | UNIT | FLAG | REF",
      type: "textarea"
    },
    { key: "labSignatoryName", label: "LAB: Signatory Name", type: "text" },
    { key: "labSignaturePath", label: "LAB: Signature image path", type: "text" },
    { key: "labSignatoryQualification", label: "LAB: Signatory Qualification", type: "text" },
    { key: "labDisclaimer", label: "LAB: Footer disclaimer", type: "text" },
    /* -- Template 5: radiology report -- */
    { key: "radLogoPath", label: "RAD: Logo path", type: "text" },
    { key: "radIsoPath", label: "RAD: ISO mark path", type: "text" },
    { key: "radCentreName", label: "RAD: Centre name (alt text)", type: "text" },
    { key: "radTagline", label: "RAD: Tagline (English)", type: "text" },
    { key: "radTaglineHindi", label: "RAD: Tagline (Hindi)", type: "text" },
    { key: "radAddress", label: "RAD: Address block (one per line)", type: "textarea" },
    { key: "radReportLabel", label: "RAD: Report tab label", type: "text" },
    { key: "radIdNo", label: "RAD: I.D. No", type: "text" },
    { key: "radReportDate", label: "RAD: Report date", type: "text" },
    { key: "radPatientName", label: "RAD: Patient name", type: "text" },
    { key: "radAgeSex", label: "RAD: Age / Sex", type: "text" },
    { key: "radRefBy", label: "RAD: Ref. By", type: "text" },
    { key: "radStudyTitle", label: "RAD: Study title", type: "text" },
    { key: "radFindings", label: "RAD: Findings (one paragraph per line)", type: "textarea" },
    { key: "radAdviceLabel", label: "RAD: Advice label", type: "text" },
    { key: "radAdvice", label: "RAD: Advice", type: "text" },
    { key: "radImpressionLabel", label: "RAD: Impression label", type: "text" },
    { key: "radImpression", label: "RAD: Impression (one bullet per line)", type: "textarea" },
    { key: "radSignatoryName", label: "RAD: Signatory name", type: "text" },
    { key: "radSignatoryQualification", label: "RAD: Signatory qualification", type: "text" },
    { key: "radDisclaimer", label: "RAD: Footer disclaimer banner", type: "text" },
    { key: "radFacilitiesHeading", label: "RAD: Facilities heading (Hindi)", type: "text" },
    {
      key: "radFacilities",
      label: "RAD: Facilities - IMAGE | CAPTION | bullet ; bullet ; bullet",
      type: "textarea"
    },
    /* -- Template 6: discharge summary -- */
    { key: "dsTitle", label: "DS: Title", type: "text" },
    { key: "dsPrintDate", label: "DS: Print Date", type: "text" },
    { key: "dsUhidNo", label: "DS: UHID No", type: "text" },
    { key: "dsIpNo", label: "DS: IP No", type: "text" },
    { key: "dsAdmitDate", label: "DS: Admit Date", type: "text" },
    { key: "dsFatherName", label: "DS: Father", type: "text" },
    { key: "dsDoctorName", label: "DS: Doctor Name", type: "text" },
    { key: "dsSurgeryDate", label: "DS: Operation / Surgery Date", type: "text" },
    { key: "dsDischargeType", label: "DS: Discharge Type", type: "text" },
    { key: "dsExpDischargeDate", label: "DS: Exp. Discharge Date", type: "text" },
    { key: "dsFinalDiagnosis", label: "DS: Final Diagnosis", type: "textarea" },
    { key: "dsProcedures", label: "DS: Procedures", type: "textarea" },
    { key: "dsCondition", label: "DS: Condition at Discharge", type: "text" },
    { key: "dsInstructions", label: "DS: Discharge Instructions (one per line)", type: "textarea" },
    { key: "dsMedications", label: "DS: Discharge Medications (one per line)", type: "textarea" },
    { key: "dsFollowUp", label: "DS: Follow Up (one per line)", type: "textarea" },
    { key: "dsHistory", label: "DS: H/O (history, labs, USG)", type: "textarea" },
    { key: "dsAckLine", label: "DS: Acknowledgement line", type: "text" },
    /* -- Template 7: pharmacy receipt -- */
    { key: "msInvocation", label: "RX: Invocation line", type: "text" },
    { key: "msStoreName", label: "RX: Store Name", type: "text" },
    { key: "msAddress", label: "RX: Address", type: "text" },
    { key: "msTime", label: "RX: Time", type: "text" },
    { key: "msGstin", label: "RX: GSTIN", type: "text" },
    { key: "msPhone", label: "RX: Phone", type: "text" },
    { key: "msDlNo", label: "RX: DL No", type: "text" },
    { key: "msPatientName", label: "RX: Patient Name", type: "text" },
    { key: "msBillNo", label: "RX: Bill No", type: "text" },
    { key: "msDoctorName", label: "RX: Doctor Name", type: "text" },
    { key: "msDate", label: "RX: Date", type: "text" },
    {
      key: "msItems",
      label: "RX: Items - NAME | PACK | BATCH | EXP | QTY | MRP | AMOUNT",
      type: "textarea"
    },
    { key: "msFooter1", label: "RX: Footer line 1", type: "text" },
    { key: "msFooter2", label: "RX: Footer line 2 (gets Signature)", type: "text" },
    { key: "msFooter3", label: "RX: Footer line 3", type: "text" },
    { key: "pageLabel", label: "Page Label format ({n} of {m})", type: "text" },
    {
      key: "items",
      label: "Items - one per line: NAME | HSN | CATEGORY | BATCH | EXPIRY | RATE | QTY | GST% | AMOUNT(optional)",
      type: "textarea"
    },
    { key: "summaryTitle", label: "Summary Title", type: "text" },
    { key: "udNo", label: "UD No", type: "text" },
    { key: "opNo", label: "OP No", type: "text" },
    { key: "visitDate", label: "Date", type: "text" },
    { key: "patientName", label: "Patient Name", type: "text" },
    { key: "ageSex", label: "Age / Sex", type: "text" },
    { key: "patType", label: "Pat. Type", type: "text" },
    { key: "patientAddress", label: "Patient Address", type: "text" },
    { key: "consultant", label: "Consultant", type: "text" },
    {
      key: "sections",
      label: "Symptom sections - \"# Heading\" starts a section, then \"left | right\" per row",
      type: "textarea"
    },
    { key: "previousIllnessRows", label: "Previous Illnesses - blank row count", type: "number" }
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
  ],
  "resume-2": [
    { key: "fullName", label: "Full Name", type: "text" },
    { key: "location", label: "Location", type: "text" },
    { key: "email", label: "Email", type: "text" },
    { key: "phone", label: "Phone", type: "text" },
    { key: "linkedin", label: "LinkedIn / Website", type: "text" },
    { key: "summary", label: "Professional Summary", type: "textarea" },
    { key: "exp1Title", label: "Experience 1 – Job Title", type: "text" },
    { key: "exp1Company", label: "Experience 1 – Company", type: "text" },
    { key: "exp1Period", label: "Experience 1 – Period", type: "text" },
    { key: "exp1Location", label: "Experience 1 – Location", type: "text" },
    { key: "exp1Details", label: "Experience 1 – Bullets (one per line)", type: "textarea" },
    { key: "exp2Title", label: "Experience 2 – Job Title", type: "text" },
    { key: "exp2Company", label: "Experience 2 – Company", type: "text" },
    { key: "exp2Period", label: "Experience 2 – Period", type: "text" },
    { key: "exp2Location", label: "Experience 2 – Location", type: "text" },
    { key: "exp2Details", label: "Experience 2 – Bullets (one per line)", type: "textarea" },
    { key: "exp3Title", label: "Experience 3 – Job Title", type: "text" },
    { key: "exp3Company", label: "Experience 3 – Company", type: "text" },
    { key: "exp3Period", label: "Experience 3 – Period", type: "text" },
    { key: "exp3Location", label: "Experience 3 – Location", type: "text" },
    { key: "exp3Details", label: "Experience 3 – Bullets (one per line)", type: "textarea" },
    { key: "edu1Degree", label: "Education 1 – Degree", type: "text" },
    { key: "edu1Institution", label: "Education 1 – Institution", type: "text" },
    { key: "edu1Period", label: "Education 1 – Period", type: "text" },
    { key: "edu1Location", label: "Education 1 – Subtitle / Location", type: "text" },
    { key: "edu2Degree", label: "Education 2 – Degree", type: "text" },
    { key: "edu2Institution", label: "Education 2 – Institution", type: "text" },
    { key: "edu2Period", label: "Education 2 – Period", type: "text" },
    { key: "edu2Location", label: "Education 2 – Subtitle / Location", type: "text" },
    {
      key: "skills",
      label: "Skills - one per line, 'Label: items' bolds the label",
      type: "textarea"
    }
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
  "relieving-letter-2": {
    logoPath: "/images/logos/teleperformance-tp.png",
    companyShortName: "Teleperformance",
    headerRightLines:
      "teleperformance.in\nlinkedin.com/company/teleperformance\ntwitter.com//TPIndiaOfficial\nfacebook.com//TPIndiaOfficial",
    companyLegalName: "Teleperformance Global Business Private Limited",
    companyFormerName: "(Formerly known as CRM Services India Private Limited)",
    registeredOffice:
      "Registered Office: Teleperformance Towers, Plot CST No.1406-A/28, Mindspace, Goregaon- West, Mumbai - 400104, Maharashtra, India",
    contactLine:
      "Tel: +91-22-66776000 | Fax: +91-22-66776010 | CIN: U72900MH2001PTC395416 | Email: contactus@teleperformance.com",
    letterDate: "May 28, 2024",
    heading: "TO WHOMSOEVER IT MAY CONCERN",
    salutation: "Mr.",
    employeeName: "Md Asif",
    empCode: "100000000644068",
    fromDate: "May 23, 2022",
    toDate: "May 05, 2024",
    designation: "Customer Service Associate- Voice",
    relievedDate: "May 05, 2024",
    pronounSubject: "He",
    pronounPossessive: "His",
    noticeClause:
      "This is to highlight that Mr. Md Asif did not serve the complete notice period however has cleared his dues as per Terms & Conditions of the employment.",
    closingLine: "We wish him all the best in all his future endeavors.",
    signaturePath: "/images/logos/alpana-signature.png",
    signatoryName: "Alpana Suneja",
    signatoryTitle: "Senior Vice President- Human Resources"
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
    registrationNo: "REG00012345",
    emiratesId: "",
    dateOfBirth: "12/03/1984",
    ageGender: "42 / Female",
    nationality: "India",
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
    patientName: "ANJUM FATIMA",
    ageYears: "42",
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
    doctorRegNo: "DHA-P-0244087",
    aadityaLogoPath: "/images/logos/aaditya-logo.png",
    aadityaCentreNameHi: "आदित्य यूरोलाजी सेन्टर एण्ड मैटरनिटी होम",
    aadityaCentreNameEn: "Aaditya Urology Centre and Maternity Home",
    aadityaAddressHi: "10 नं0 बोरिंग बनकटवा रोड, गोरखनाथ, गोरखपुर",
    aadityaAddressEn: "10 No. Boring Bankatwa Road, Gorakhnath, Gorakhpur",
    aadityaMobile: "Mo.: 9956390836, 8354885346",
    aadityaDoc1NameHi: "डा0 अरविन्द तिवारी",
    aadityaDoc1NameEn: "Dr. Arvind Tiwari",
    aadityaDoc1Quals: "M.B.B.S., M.S., M.Ch., D.N.B.",
    aadityaDoc1SpecHi: "(यूरोलाजिस्ट सर्जन)",
    aadityaDoc1SpecEn: "(Urologist Surgeon)",
    aadityaDoc1CredentialsHi:
      "पूर्व : वरिष्ठ रेजिडेन्ट\nके0 जी0 एम0 सी0, लखनऊ\nएस0 एल0 जे0 हास्पिटल, नई दिल्ली\nसी0 एम0 सी0, वैलोर\nजिपमेर, पाण्डीचेरी",
    aadityaDoc1CredentialsEn:
      "Former Senior Resident\nK.G.M.C., Lucknow\nS.L.J. Hospital, New Delhi\nC.M.C., Vellore\nJIPMER, Pondicherry",
    aadityaDoc1Reg: "Reg. No. 36482 (MCI-UP)",
    aadityaDoc2NameHi: "डा0 पूनम तिवारी",
    aadityaDoc2NameEn: "Dr. Poonam Tiwari",
    aadityaDoc2Quals: "M.B.B.S., D.G.O. (Lucknow)",
    aadityaDoc2SpecHi: "(स्त्री एवं प्रसूति रोग विशेषज्ञ)",
    aadityaDoc2SpecEn: "(Gynaecology and Obstetrics Specialist)",
    aadityaDoc2CredentialsHi:
      "पूर्व : रेजिडेन्ट डाक्टर\nके0 जी0 एम0 सी0, लखनऊ\nपरामर्श चिकित्सक\nगवर्नमेंट मैटरनिटी हॉस्पिटल, पाण्डीचेरी",
    aadityaDoc2CredentialsEn:
      "Former Resident Doctor\nK.G.M.C., Lucknow\nConsultant Physician\nGovernment Maternity Hospital, Pondicherry",
    aadityaDoc2Reg: "Reg. No. 040728 (MCI-UP)",
    aadityaTimingLeftHi: "परामर्श समय :\nसोमवार से शनिवार\nदोपहर 2 बजे से 7 बजे तक",
    aadityaTimingLeftEn: "Consultation Time:\nMonday to Saturday\n2:00 PM to 7:00 PM",
    aadityaTimingCentreHi: "कृपया पहले से समय लेकर आयें",
    aadityaTimingCentreEn: "Consultation By Appointment",
    aadityaTimingRightHi:
      "परामर्श समय :\nसोमवार से शुक्रवार\nदोपहर 11 बजे से 5 बजे तक\nशनिवार - दोपहर 12 बजे से 3 बजे तक",
    aadityaTimingRightEn:
      "Consultation Time:\nMonday to Friday\n11:00 AM to 5:00 PM\nSaturday - 12:00 PM to 3:00 PM",
    aadityaRegNo: "23240030110",
    aadityaPatientId: "23240006255",
    aadityaOpdDate: "11-Jul-2023 10:54 AM",
    aadityaTokenNo: "14",
    aadityaWeight: "76 kg",
    aadityaBp: "147/95",
    aadityaPatientName: "Mr RAJSAGAR",
    aadityaAgeSex: "25 Y/Male",
    aadityaGuardian: "BHARAT PRASAD",
    aadityaAddress: "JAFRA BAZAR, Gorakhpur",
    aadityaConsultDoctor: "Dr. Arvind Tiwari",
    aadityaProvisionalDiagnosis: "Right ureteric calculus with renal colic",
    aadityaAdmissionAdvice: "Admission advised in Urology Ward\nभर्ती की सलाह - यूरोलॉजी वार्ड",
    aadityaClinicalNotes:
      "DTPA renal scan advised\nHydronephrotic right kidney\nRelative renal function: 25%\nRight PUJ obstruction\nNon-obstructive / normal functioning left kidney",
    aadityaInvestigations: "USG / PCNL profile\nRIRS fitness",
    aadityaDiagnosisTyped:
      "Right upper ureteric stone\nPoorly functioning right kidney",
    aadityaSurgeryAdvice:
      "Surgical profile\nCardiology consent\nURS / PCNL planned",
    aadityaMedicationAdvice:
      "Rx generated digitally\nAnalgesic and antibiotic as advised\nReview with reports",
    aadityaReviewLineHi: "दिन के बाद दिखाना है।",
    aadityaReviewLineEn: "Review after 5 days.",
    aadityaFooterNoteHi:
      "नोट - रिपोर्ट दिखाने का समय दोपहर 3 से 5 बजे तक / एम्बुलेंस सुविधा 24 घण्टे उपलब्ध",
    aadityaFooterNoteEn:
      "Report review time: 3 PM to 5 PM / Ambulance facility available 24 hours",
    aadityaHolidayHi: "रविवार अवकाश",
    aadityaHolidayEn: "Sunday Holiday",
    aadityaLegalNotesHi:
      "इस प्रतिष्ठान से सम्बन्धित किसी भी विवाद का निस्तारण केवल गोरखपुर न्याय क्षेत्र के अधीन होगा।\nडाक्टर द्वारा लिखी गयी किसी भी दवा एवं सूई से कोई परेशानी होने पर दवा रोक कर हॉस्पिटल में सम्पर्क करें।",
    aadityaLegalNotesEn:
      "Any dispute related to this establishment shall be subject to Gorakhpur jurisdiction only.\nIf any prescribed medicine or injection causes discomfort, stop it and contact the hospital."
  },
  "medical-slip": {
    logoPath: "/images/logos/aaditya-logo.png",
    centreName: "Aaditya Urology Center and maternity Home",
    addressLine:
      "310, Bankatwa Road, 10 No. Boring, Gorakhnath, Gorakhpur, Uttar Pradesh 273015",
    summaryTitle: "Clinical Summary",
    udNo: "UD-2231222",
    opNo: "OP-00012345678",
    visitDate: "24-Jul-2026",
    patientName: "Mrs. ANJUM FATIMA",
    ageSex: "42 Y/Female",
    patType: "Normal",
    patientAddress: "Betiahata, Gorakhpur, Uttar Pradesh",
    consultant: "Dr. Onkar Rai (M.D.MED.)",
    previousIllnessRows: 8,
    sections:
      "# Lower Urinary Trace\nThin Stream | Frequency = 10 days\nPoor Flow | Hesitancy\nIntermittency | Urgency = 10 days\nTerminal Dribble | Urge Incontinence\nFeeling of Incomplete Voiding | Dysuria = 10 days\nUrinary Retention | Nocturia\n | Incontinence\n# Upper Urinary Trace\nPain = 20 days |\nFever = 4 days |\nOedema |",
    supplyType: "Intra-state",
    gstin: "09AAACA0000A1Z0",
    dlNo: "UP/GKP/2020/20-B/21-B",
    billTitle: "Sale Bill",
    uhidNo: "UD-00012345678",
    billNo: "SB-4246",
    billDate: "19-Aug-2026 01:41 PM",
    printDate: "19-Aug-2026 01:41 PM",
    paymentMode: "Cash",
    ipNo: "IP-00000000531",
    location: "2F/Private Room/PVT 07/1",
    createdBy: "Mr Sanjay Singh",
    paidStampPath: "/images/logos/paid-stamp.png",
    pageLabel: "Page {n} of {m}",
    rowsFirstPage: 29,
    rowsPerPage: 33,
    billNo2: "SB-4284",
    billDate2: "19-Aug-2026 03:15 PM",
    printDate2: "19-Aug-2026 03:16 PM",
    items2:
      "TAZOMAC 4.5g | 300412 | INJECTION | LTC2305A | 28 Oct 2027 | 235.90 | 2.00 | 12.00\nMIKACIN 500MG | 300400 | INJECTION | TAA52320A | 28 Jan 2028 | 113.00 | 2.00 | 0.00\nN.S 100 | 300412 | IVF | NSF23056 | 28 Dec 2027 | 17.50 | 2.00 | 12.00\nDISPO 20ML | 300412 | SYRING | G221020753 | 28 Jan 2028 | 22.32 | 2.00 | 12.00\nNEEDLE | 300412 | SURGICAL | 51212R | 28 Nov 2027 | 1.79 | 2.00 | 12.00",
    billNo3: "SB-4313",
    billDate3: "20-Aug-2026 09:56 AM",
    printDate3: "20-Aug-2026 09:56 AM",
    items3:
      "SENSICLAV 1.2 G | 300400 | INJECTION | G36243 | 28 Jan 2028 | 157.00 | 2.00 | 0.00\nMIKACIN 500MG | 300400 | INJECTION | TAA52320A | 28 Jan 2028 | 113.00 | 2.00 | 0.00\nDISPO 20ML | 300412 | SYRING | G221020753 | 28 Jan 2027 | 22.32 | 2.00 | 12.00\nDULCOLEX | 300400 | SUPPOSITORY | T204325 | 28 Oct 2027 | 35.20 | 4.00 | 0.00",
    opdCentreName: "आदित्य यूरोलाजी सेन्टर एण्ड मैटरनिटी होम",
    opdCentreAddress: "१० नं0 बोरिंग बनकटवा रोड , गोरखनाथ , गोरखपुर",
    opdCentreMobile: "मो :- 9956390836, 8354885346",
    opdDoc1Name: "डा0 अरविन्द तिवारी",
    opdDoc1Quals: "M.B.B.S , M.S , M.Ch. , D.N.B",
    opdDoc1Spec: "(यूरोलाजिस्ट सर्जन)",
    opdDoc1Credentials:
      "पूर्व : वरिष्ठ रेजिडेन्ट\n: के0 जी0 एम0 सी0, लखनऊ\n: एस0 एल0 जे0 हास्पिटल, नई दिल्ली\n: सी0 एम0 सी0, वैलोर\n: जिपमेर, पाण्डीचेरी",
    opdDoc1Reg: "Reg. No. 36482 (MCI-UP)",
    opdDoc2Name: "डा0 पूनम तिवारी",
    opdDoc2Quals: "M.B.B.S , D.G.O. ( Lucknow )",
    opdDoc2Spec: "(स्त्री एवं प्रसूति रोग विशेषज्ञ)",
    opdDoc2Credentials:
      "पूर्व : रेजिडेन्ट डाक्टर\n: के0 जी0 एम0 सी0, लखनऊ\n: परामर्श चिकित्सक\nगर्वन्मेन्ट मैटरनिटी हास्पिटल, पाण्डीचेरी",
    opdDoc2Reg: "Reg. No. 040728 (MCI-UP)",
    opdTimingLeft: "परामर्श समय :\nसोमवार से शनिवार –\nदोपहर 2 बजे से 7 बजे तक",
    opdTimingCentreHindi: "कृप्या पहले से समय लेकर आयें",
    opdTimingCentre: "Consultation By Appointment",
    opdTimingRight:
      "परामर्श समय :\nसोमवार से शुक्रवार –\nदोपहर 11 बजे से 5 बजे तक\nशनिवार– दोपहर 12 बजे से 3 बजे तक",
    opdRegNo: "00000030110",
    opdPatientId: "00000006255",
    opdDate: "19-Aug-2026 10:54 AM",
    opdTokenNo: "14",
    opdWeight: "",
    opdBp: "",
    opdGuardian: "IMRAN AHMED",
    opdDoctorName: "Dr. Onkar Rai (M.D.MED.)",
    opdDiagnosis: "",
    opdReviewLine: "........................दिन के बाद दिखाना है ।",
    opdFooterNote: "नोट – रिपोर्ट दिखाने का समय दोपहर 3 से 5 बजे तक / एम्बुलेस सुविधा 24 घण्टे उपलब्ध",
    opdLegalNotes:
      "इस प्रतिष्ठान से सम्बन्धित किसी भी विवाद का निस्तासण केवल गोरखपुर न्याय क्षेत्र के अधीन होगा ।\nडाक्टर द्वारा लिखी गयी किसी भी दवा एवं सूई से कोई परेशानी होने पर दवा रोक कर हास्पिटल में सम्पर्क करे ।",
    opdHolidayNote: "रविवार अवकास",
    labLogoPath: "/images/logos/shri-sai-pathology.png",
    labName: "श्री साईं पैथालोजी",
    labAddress:
      "आदित्य यूरोलॉजी सेन्टर एण्ड मैटरनिटी होम, 10 नं0 बोरिंग, बनकटवा रोड, गोरखनाथ, गोरखपुर",
    labPhone: "2257219",
    labPatientName: "ANJUM FATIMA   ( 42 Y/F )",
    labRefByDoctor: "ARVIND TIWARI, M.S.,M.C.H.",
    labReportDate: "19/08/26",
    labSampleNo: "A-36/11 /Lab Sample",
    labResults:
      "# HAEMATOLOGY\nHaemoglobin | 8.2 | Gm% | L | 12 - 18\nRBC Count | 3.4 | mill/cumm | L | 3.8 - 4.8\nHaematocrit (PCV) | 26 | % | L | 36 - 46\nMCV | 68 | fL | L | 80 - 100\nMCH | 22 | pg | L | 27 - 33\nMCHC | 29 | g/dL | L | 32 - 36\nRDW | 17.5 | % | H | 11.5 - 14.5\nTotal Leukocyte Count | 7,800 | /Cumm |  | 4000 - 11000\n> Diff. Leukocyte Count\n- Neutrophils | 60 | % |  | 40 - 75\n- Lymphocytes | 32 | % |  | 20 - 45\n- Monocytes | 04 | % |  | 1 - 10\n- Eosinophils | 03 | % |  | 1 - 8\n- Basophils | 01 | % |  | 0 - 1\nPlatelet Count | 4.3 | lac/cumm | H | 1.5 - 4\nReticulocyte Count | 0.8 | % |  | 0.5 - 2.5\nBleeding Time | 3 min 10 sec |  |  | 2 - 7 min\nCoagulation Time | 7 min 20 sec |  |  | 5 - 11 min\n> Blood Group\n- ABO Group | \"B\"\n- Rh Group | \"Positive\"\n===\n# BLOOD CHEMISTRY\nSerum Glucose (Random) | 88 | mg% |  | 60 - 160\nSerum Urea | 24 | mg% |  | 13 - 45\nS. Creatinine | 0.8 | mg% |  | 0.6 - 1.3\nS. Bilirubin (Total) | 0.6 | mg% |  | 0.2 - 1\nSGPT | 22 | U/L |  | 6 - 40\nSGOT | 20 | U/L |  | 8 - 37\nPT (Test) / INR | 3.4 / 1.0 | sec |  | INR ~1.0\n# IRON STUDIES\nSerum Iron | 28 | µg/dL | L | 37 - 145\nTIBC | 460 | µg/dL | H | 250 - 400\nTransferrin Saturation | 6 | % | L | 15 - 45\nSerum Ferritin | 6 | ng/mL | L | 12 - 150",
    labSignatoryName: "DR. MANGLESH K. SRIVASTAVA",
    labSignaturePath: "/images/logos/shri-sai-signature.png",
    labSignatoryQualification: "M.D PATH",
    labDisclaimer:
      "This report is not valid for medico-legal purpose, In case of any discrepancy kindly do not hesitate in asking for a review.",
    radLogoPath: "/images/logos/kt-diagnostic.png",
    radIsoPath: "",
    radCentreName: "KT MRI & CT Scan Center",
    radTagline: "Our emphasis, excellence in diagnosis",
    radTaglineHindi: "हमारी प्राथमिकता, निदान में गुणवत्ता",
    radAddress: "Opposite Veer Bhadur Singh Sports College\nKhajanchi Bargadwa By-Pass Road\nGorakhpur-273003\nPh. Reception :  8417000900\nPh. Manager :  8417000898\nPh. Directors :  9415212566, 9415211286\nE-mail : knspl.gkp@gmail.com",
    radReportLabel: "REPORT",
    radIdNo: "UX2231222",
    radReportDate: "24 July 2026",
    radPatientName: "MRS. ANJUM FATIMA",
    radAgeSex: "AGE/SEX 42Y/F",
    radRefBy: "DR.ONKAR RAI (M.D.MED.)",
    radStudyTitle: "X-RAY KUB",
    radFindings: "Suboptimal study due to poor bowel preparation.\nA radio-opaque shadow measuring approx 13 mm noted around left transverse process of L3 vertebrae ? Proximal ureteric calculus.\nAnother Radio-opaque shadow measuring approx 15 mm noted in midline in lower pelvic region superior to pubic symphysis concerning for urethral calculus.\nLumbo-sacral spine and pelvis appear normal.\nParaspinal soft tissues are normal.\nBilateral sacroiliac and hip joints are visualized normally.",
    radAdviceLabel: "ADV",
    radAdvice: "CLINICAL CORRELATION & CT KUB for further evaluation.",
    radImpressionLabel: "IMPRESSION",
    radImpression:
      "",
    radSignatoryName: "Dr. Piyush Srivastava",
    radSignatoryQualification: "D.M.R.D.(Radiodiagnosis)",
    radDisclaimer: "THIS REPORT IS NOT FOR MEDICO LEGAL PURPOSE",
    radFacilitiesHeading: "उपलब्ध सुविधाएं",
    radFacilities: " | Siemens C.T. Scan | CT Scan मस्तिष्क, पेट, सीना आदि ; CT Angiography ; Digital X-ray\n | Philips 1.5 T MRI | MRI Scan ; 4D Colour Dopler ; CT/USG Guded Biopsy/FNAC\n | Siemens Accuson S 2000 | ECG, ECO Cardiography ; Dr. Lal Path Lab ; 24 H Ambulance\n | Siemens X-Ray | ",
    dsTitle: "DISCHARGE SUMMARY",
    dsPrintDate: "17-Jul-2023 02:42 PM",
    dsUhidNo: "UD-00012345678",
    dsIpNo: "IP-00000000531",
    dsAdmitDate: "12 Jul 2023 7:22 PM",
    dsFatherName: "W/o Mr. Imran Ahmed",
    dsDoctorName: "Dr. Arvind Tiwari",
    dsSurgeryDate: "13/7/23",
    dsDischargeType: "Normal",
    dsExpDischargeDate: "17/07/23",
    dsFinalDiagnosis:
      "PROSTATIC URETHRAL CALCULUS WITH LEFT UPPER URETERIC STONE WITH GRADE IV HYDRONEPHROSIS WITH POOR FUNCTIONING KIDNEY.",
    dsProcedures:
      "LARGE 2 CM PROSTATIC URETHRAL CALCULUS WITH LEFT UPPER URETRIC STONE.\nCLT & LEFT URSL DONE. BUT STONE CLEARENCE NOT GETTING SO LEFT MID POSTERIOR CALYX PUNCTURE DONE. VISIBLE STONES REMOVED. LEFT DJ STENT PASSED.\nCLT + (L) PCNL - 13/07/23",
    dsCondition: "SATISFACTORY",
    dsInstructions: "TAKE REST\nEAT SOFT DIET / BLAND DIET\nAVOID CONSTIPATION",
    dsMedications: "1 - TAB - LMF-FORT - 625 - MG - 1 BD X 7 DAYS\n2 - TAB - L-CIN - 500 - MG - 1 OD X 10 DAYS\n3 - CAP - SOMPRAZ-D - 1 OD X 10 DAYS\n4 - CAP - BECASULE - 1 OD X 10 DAYS\n5 - TAB - SILOSURE-SF - 1 HS X 10 DAYS\n6 - TAB - SUMO - 1 BD - SOS / USE FOR PAIN\n7 - SYP - LACZOOM - 20 ML - HS - SOS / USE FOR CONSTIPATION",
    dsFollowUp: "REVIEW AFTER 10 DAYS\nDJ STENT REMOVAL AFTER 3 WEEKS",
    dsHistory: "11/07/2023\nHB- 13.4 GM% TLC - 11200/CUMM DLC N- 76% L-19% M-01 % E-04% B-00%, BLOOD GROUP-\"B\" POSITIVE, HIV-NEGATIVE, HBS Ag-NEGATIVE, HCV-NEGATIVE, S-GLUCOSE-81.5 MG%, S-CRETININE-1.16 MG%, URINE SUGAR-NIL, S-UREA-30.6 MG%, S-BILIRUBIN-0.99 MG%, SGPT-44.5 U/L, SGOT-38.2 U/L.\nUSG REPORT - 03/07/2023\nIMPRESSION - 1 - MILD HEPATOMEGALY WITH GRADE I FATTY CHANGES IN LIVER & INFLAMMATORY BOWEL PATHOLOGY.\n2 - RIGHT KIDNEY IS TOWARDS UPPER NORMAL LIMITS IN MEASUREMENT AND SHOWS SLIGHTLY VARIATED CORTICAL ECHOTEXTURE WITH PERSISTENT MINIMAL PC FULLNESS POSSIBLY WITH EARLY LOBULATIONS. PLEASE R/O NEPHRITIS.\n3 - ENLARGED GROSSLY HYDRONEPHROTIC LT KIDNEY WITH REDUCED PARENCHYMAL WIDTH (6.8MM) WITH UPPER URETEROLITHIASIS (14.5 X 3.5) MM.\n4 - PROSTATIC URETHRA SHOWS (8.5 X 6) MM 2 HYPERECHOIC AREA WITH SHADOWING AND TWINKLING ARTIFACT ON CD. FINDINGS S/O PROSTATIC URETHRAL STONE.",
    dsAckLine:
      "I/We have been explained the medications and precautions required for my patient in detail by the attending nursing staff.",
    msInvocation: "SHRI GANESHAYA NAMAH",
    msStoreName: "ADITYA MEDICAL STORE",
    msAddress: "BORINNO,10,BANKATVA ROAD,",
    msTime: "20:12",
    msGstin: "09ADTPT6997K1Z2",
    msPhone: "9569865981",
    msDlNo: "UP53200000542 & UP53210000542",
    msPatientName: "MR. ASHISH VERMA",
    msBillNo: "A011689",
    msDoctorName: "SUMA RAMAKRISHNA",
    msDate: "20/08/2026",
    msItems:
      "LINA-DOSE-D-10 |  | LGQ01/253/20 | 12/27 | 10 | 234.37 | 2343.70\nKETODILA SOAP |  | EA26003 | 12/27 | 5 | 88.09 | 440.45\nYAXODERMA DUSTING POWDER |  | CL26021A | 02/28 | 4 | 159.00 | 636.00\nGLICOSUM-1 |  | ABTSA06 | 11/27 | 10 | 42.00 | 420.00\nCALCIQUICK-D3 60K |  | ALD6164 | 03/28 | 3 | 131.54 | 394.62\nATORVANEED ASP 75/10 |  | DCG06001 | 05/28 | 10 | 78.00 | 780.00\nVITAMIN-C CHEWABLE TABLETS 500MG |  | LIA26061 | 02/28 | 7 | 24.68 | 172.76\nVOLTEND M 0.3 |  | VAM250101 | 12/26 | 29 | 185.00 | 5365.00\nKAPIVA SHILAJIT GOLD RESIN 20g |  | KSGA-109 | 05/28 | 2 | 1549.00 | 3098.00",
    msFooter1: "1-SUBJECT TO GORAKHPUR JURISDICTION ONLY",
    msFooter2: "2-PLEASE VERIFY MEDICINE FROM PRESCRIPTION",
    msFooter3: "3-NO RETURN,NO EXCHANGE",
    items:
      "5% DEXT | 300412 | IVF | DAF22185 | 28 Aug 2028 | 33.04 | 1.00 | 12.00\nD N S | 300412 | IVF | DSAF23100 | 28 Sep 2027 | 34.02 | 1.00 | 12.00\nN.S 500 | 300412 | IVF | NSF23023 | 28 Jun 2028 | 31.07 | 1.00 | 12.00\nR.L | 300412 | IVF | RLPF23054 | 28 Dec 2027 | 50.36 | 4.00 | 12.00\nSUMOL IV 100ML | 300412 | IVF | ABZ1002 | 28 Jul 2027 | 294.64 | 1.00 | 12.00\nPERINORAM 2ML | 300400 | INJECTION | GE273006 | 28 Jan 2027 | 5.96 | 1.00 | 0.00\nTROPIN | 300405 | INJECTION | KMO38072 | 28 Dec 2027 | 4.08 | 1.00 | 5.00\nLICOLET/PYROLET | 300412 | INJECTION | P22S113 | 28 Sep 2028 | 13.61 | 1.00 | 12.00\nBUTADOL 2ML | 300412 | INJECTION | KP095025 | 28 May 2027 | 72.14 | 1.00 | 12.00\nMYE PYROLATE 5ML | 300412 | INJECTION | P24161 | 28 Jan 2027 | 77.14 | 2.00 | 12.00\nMEZOLAM VAIL | 300412 | INJECTION | M90511 | 28 Oct 2028 | 29.46 | 1.00 | 12.00\nTRAMAZAC | 300412 | INJECTION | HG125 | 28 Feb 2028 | 21.02 | 1.00 | 12.00\nDYNAPAR | 300400 | INJECTION | D122S122 | 28 Sep 2027 | 33.46 | 1.00 | 0.00\nLASIX 2ML | 300400 | INJECTION | 2123062 | 28 Jun 2027 | 11.96 | 1.00 | 0.00\nTRENEXA/TEXAKIND | 300400 | INJECTION | TNA2242 | 28 Feb 2028 | 64.20 | 2.00 | 0.00\nDEXONA 2ML | 300400 | INJECTION | WAO2132 | 28 May 2028 | 11.57 | 1.00 | 0.00\nEMESET 4ML | 300412 | INJECTION | JHH155 | 28 Jul 2028 | 25.95 | 1.00 | 12.00\nIV SET | 300412 | IVF | G130120906 | 28 Mar 2028 | 290.18 | 1.00 | 12.00\nUROBAG | 300405 | SURGICAL | G230450527 | 28 Jul 2027 | 300.95 | 2.00 | 5.00\nB P BLADE | 300412 | SURGICAL | FTVYTFR7T | 28 Aug 2027 | 4.46 | 1.00 | 12.00\nCRANIOTOMY DROP | 300412 | SURGICAL | 2210DD0 | 28 Jun 2028 | 802.00 | 1.00 | 0.00\nABGEL | 300400 | SURGICAL | 111622 | 28 Aug 2027 | 92.86 | 1.00 | 12.00\nNYLUS 2-0 CUT | 300412 | SUTURE | LB2306 | 28 Sep 2027 | 166.07 | 1.00 | 12.00\nLOX2% ADRELINE | 300412 | INJECTION | SU1478187 | 28 Feb 2028 | 30.04 | 1.00 | 12.00\nANIWIN 0.5% VAIL | 300412 | INJECTION | B12573 | 28 Apr 2027 | 83.56 | 1.00 | 12.00\nD J STENT | 300412 | SURGICAL | 2023240176 | 28 Dec 2028 | 705.36 | 1.00 | 12.00\nCALIGNO JELLY | 300412 | GEL | XT-257 | 28 Sep 2028 | 30.27 | 1.00 | 12.00\nE.C.G ELECOTRADE | 300412 | SURGICAL | ETSN278 | 28 Dec 2028 | 24.11 | 3.00 | 12.00\nD-WATER 5ML | 300412 | LIQUID | 2225287 | 28 Nov 2028 | 2.57 | 6.00 | 12.00\nENDOCATRACHE TUBE | 300412 | SURGICAL | B202331 | 28 May 2028 | 291.07 | 4.00 | 12.00\nSUCTION CATH 14,16 NO | 300412 | SURGICAL | G221011049 | 28 Oct 2027 | 71.43 | 1.00 | 12.00\nGLOVES ROMSONS | 300412 | SURGICAL | 1322036 | 28 Dec 2028 | 62.50 | 6.00 | 12.00\nDISPO 10ML | 300412 | SYRING | 22K19K60 | 28 Dec 2028 | 22.32 | 3.00 | 12.00\nDISPO 5ML | 300412 | SYRING | G221120729 | 28 Jun 2027 | 8.35 | 3.00 | 12.00\nDISPO 3ML | 300412 | SYRING | G230220618 | 28 Jun 2027 | 7.14 | 3.00 | 12.00\nDISPO 20ML | 300412 | SYRING | G221020753 | 28 Jan 2028 | 22.32 | 1.00 | 12.00\nN.S 3LTR | 300412 | IVF | SIL30727 | 28 Mar 2028 | 531.25 | 4.00 | 12.00\nFOLICY16,18,14,20,12 | 300412 | SURGICAL | 817A1010 | 28 Nov 2027 | 297.32 | 3.00 | 12.00\nFORTWIN | 300412 | INJECTION | TAZ23011 | 28 Aug 2028 | 35.65 | 1.00 | 12.00\nFENTANYL | 300412 | INJECTION | T140512T | 28 Jan 2027 | 45.23 | 1.00 | 12.00\nNEOROF 1 | 300412 | INJECTION | T236897 | 28 Nov 2027 | 160.09 | 1.00 | 12.00\nNEOVAC 4MG | 300405 | INJECTION | KLKL4545 | 28 Aug 2027 | 86.19 | 1.00 | 5.00\nSENSICLAV 1.2 G | 300400 | INJECTION | G36243 | 28 Nov 2027 | 157.00 | 2.00 | 0.00\nTETVAC | 300405 | INJECTION | A0153822 | 28 Jun 2027 | 12.04 | 1.00 | 5.00\nNOZIA | 300400 | INJECTION | CJY1028 | 28 Mar 2027 | 60.60 | 1.00 | 0.00\nTRENEXA/TEXAKIND | 300400 | INJECTION | TNA2245 | 28 Nov 2028 | 64.20 | 2.00 | 0.00\nR.L | 300412 | IVF | RLPF23054 | 28 Feb 2027 | 50.36 | 1.00 | 12.00\nVIGGO | 300412 | SURGICAL | G22110752 | 28 Feb 2027 | 223.21 | 1.00 | 12.00\nEASYFIX | 300412 | SURGICAL | IVME06-042 | 28 Oct 2027 | 53.57 | 1.00 | 12.00\nDISPO 20ML | 300412 | SYRING | G23511094 | 28 May 2028 | 23.21 | 2.00 | 12.00\nENEMA | 300412 | LIQUID | SPE-57 | 28 Sep 2027 | 42.86 | 1.00 | 12.00\nSAFTYREZAR BLADE | 300400 | CONSUMABLE | G230110021 | 28 Feb 2027 | 36.50 | 1.00 | 0.00\nDISPO 3ML | 300412 | SYRING | G230220618 | 28 May 2028 | 7.14 | 4.00 | 12.00\nIV SET | 300412 | IVF | G230420824 | 28 Mar 2028 | 290.18 | 1.00 | 12.00\nCRANIOTOMY DROP | 300400 | SURGICAL | 2305AB0 | 28 Apr 2028 | 802.00 | 1.00 | 0.00\nGUIDE WIRE | 300400 | SURGICAL | 221011V | 28 Jun 2028 | 2226.00 | 1.00 | 0.00\nSPINAL NEEDIL | 300412 | SURGICAL | 2204016 | 28 May 2028 | 191.96 | 1.00 | 12.00\nTAZOMAC 4.5g | 300412 | INJECTION | LTC2305A | 28 Jan 2028 | 235.90 | 1.00 | 12.00\nN.S 100 | 300412 | IVF | NSF23056 | 28 Mar 2028 | 17.50 | 1.00 | 12.00\nDISPO 20ML | 300412 | SYRING | 320202NJH1 | 28 Jan 2028 | 22.32 | 1.00 | 12.00\nABGEL | 300412 | SURGICAL | 1116222 | 28 Jun 2027 | 92.86 | 1.00 | 12.00\nE.C.G ELECOTRADE | 300412 | SURGICAL | ETSN278-12 | 28 Jun 2028 | 24.11 | 1.00 | 12.00"
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
  },
  "resume-2": {
    fullName: "Charles Bloomberg",
    jobTitle: "",
    phone: "(621) 799-5548",
    email: "charlesbloomberg@gmail.com",
    location: "Seoul, South Korea",
    linkedin: "in/cbloomberg",
    summary:
      "Passion for building inspiring companies through industry-leading tech, design, and execution. An experienced early-stage global executive with an economics degree from the University of Wisconsin - Madison. Looking to join as a global startup consultant.",
    skills:
      "Leadership: Speaking, Fundraising, Product Development, Communication, Partnerships, International Marketing\nFront End: HTML, CSS, Bootstrap, Webflow\nFields of Interest: Early-Stage Fundraising, Global Entrepreneurship, Web Design, Growth",
    exp1Title: "CEO & Founder",
    exp1Company: "Rezi",
    exp1Period: "August 2015 - Present",
    exp1Location: "Seoul, South Korea",
    exp1Details:
      "Built Rezi - the most loved resume software in the world, trusted by over 2,227,254 users.\nFounded Rezi at the age of 22. At 23, successfully globalized into South Korea growing to be South Korea's leading English resume company, the most awarded global startup in South Korea, and securing over $650,000 in investment, grants, and awards.\nCollaborated with the development team to engineer scalable partnership strategies such as redemption-code-based access which resulted in over 50,000 new users in 1 month with zero marketing dollars spent.\nAccountable for developing new business models as a response towards market conditions and opportunities which resulted in the development of 3 new core departments including e-learning, global recruiting, and data-vending.\n13 full time employees; 2,227,254 users; $650,000 total raised investment; $40,000,000 valuation.",
    exp2Title: "Web Developer",
    exp2Company: "Kaplan",
    exp2Period: "May 2015 - November 2015",
    exp2Location: "La Crosse, WI",
    exp2Details:
      "Executed website redesign of kaplancleantech.com using Expression Engine as a CMS while working with marketing and sales teams. Optimized 3 landing page variants using HTML, A/B testing software and customer feedback to increase leads for sales teams.\nLead the developing SEO strategies monitoring campaigns using MOZ Analytics for a 500k budget. Maintained performance through site analysis, and new keyword research. Prepared analytics and ranking reports presented to management.\nExecuted Google Analytics tracking campaigns to maximize the effectiveness of 5 email re-marketing initiatives deployed using Salesforce software. Used Salesforce Object Query Language, C, and Python to search for data for specific information.",
    exp3Title: "Marketing Analyst",
    exp3Company: "Kaplan",
    exp3Period: "November 2014 - May 2015",
    exp3Location: "La Crosse, WI",
    exp3Details:
      "Relied and implement Tableau dashboards to track 6 marketing KPIs. Used data to create reports circulated amongst leadership. Collaborated with marketing specialists to improve marketing strategies to maximize ROI such as introducing Facebook retargeting.\nUsed SurveyMonkey to collect over 100 customer feedbacks used to conduct analysis, identify market trends, and calculate NPS. Used customer feedback data and optimization software to present and suggest website improvements to management.\nManaged mobile 2 PPC strategy efforts, using Google AdWords Editor and Marin, by teaching marketing specialists best practices to prepare for the behavioral shift towards increased reliance on mobile.",
    ach1Title: "", ach1Text: "", ach2Title: "", ach2Text: "",
    ach3Title: "", ach3Text: "", ach4Title: "", ach4Text: "",
    edu1Degree: "Bachelor of Science in Economics",
    edu1Institution: "University of Wisconsin - Madison",
    edu1Period: "Powers-Knapp Scholar, 2014",
    edu1Location: "",
    edu2Degree: "", edu2Institution: "", edu2Period: "", edu2Location: "",
    course1Title: "", course1Text: "", course2Title: "", course2Text: "",
    int1Title: "", int1Text: "", int2Title: "", int2Text: "",
    lang1Name: "", lang1Level: "", lang1Rating: 0,
    lang2Name: "", lang2Level: "", lang2Rating: 0,
    lang3Name: "", lang3Level: "", lang3Rating: 0
  }
};

/* ═══════════════════════════════════════════════
   COMPLIANCE PRO — COMPLETE SCRIPT
   India Tax & Labour Calendar TY 2026-27
═══════════════════════════════════════════════ */

'use strict';

// ═══════════════════════════════════════════════
// COMPLETE COMPLIANCE DATA — TY 2026-27 (eztax.in)
// ═══════════════════════════════════════════════
const CALENDAR_DATA = {
  "2026-4": [
    {day:7,title:"TCS Payment for March 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961 — Section 206C",description:"Tax Collected at Source (TCS) payment for March 2026. Submit via Challan ITNS 281 on income tax portal.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1% per month + penalty u/s 271CA up to tax amount"},
    {day:9,title:"Setup Online GST Accounting for TY 2026-27",category:"GST",form_name:"—",act_law:"GST Act 2017",description:"Set up GST-ready accounting software for Tax Year 2026-27 (Apr 2026–Mar 2027).",priority:"MEDIUM",frequency:"ANNUAL",penalty:"No direct penalty, but non-compliance with GST records attracts ₹10,000–₹1,00,000"},
    {day:10,title:"IT eFiling Start Date — FY 2025-26 (AY 2026-27)",category:"Income Tax",form_name:"ITR-1 / ITR-2 / ITR-3 / ITR-4",act_law:"Income Tax Act 1961 — Section 139",description:"IT e-Filing portal opens for FY 2025-26. Due date: ITR-1/2: 31 Jul 2026. ITR-3/4: 31 Aug 2026.",priority:"HIGH",frequency:"ANNUAL",penalty:"Late fee u/s 234F: ₹5,000 (₹1,000 if income < ₹5 lakh)"},
    {day:10,title:"Professional Tax (PT) on Salaries — March 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly Professional Tax payment for March 2026. Applicable in applicable states.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per respective state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — March 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017 — Section 37",description:"Monthly GSTR-1 return for outward supplies in March 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day (₹20/day for nil return), max ₹5,000"},
    {day:13,title:"GSTR-1 (Jan–Mar 2026) — QRMP Quarterly Filers",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017 — QRMP Scheme",description:"Quarterly GSTR-1 for Jan–Mar 2026 by QRMP taxpayers with turnover ≤ ₹5 crore.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — March 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for March 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B up to 25% + interest @ 12% p.a."},
    {day:15,title:"CCFS 2026 Scheme Start — Private Limited & OPC",category:"ROC/Company Law",form_name:"CCFS Form",act_law:"Companies Act 2013",description:"Companies Compliance Fresh Start Scheme 2026 for Private Limited Companies and OPC.",priority:"MEDIUM",frequency:"ANNUAL",penalty:"Scheme provides waiver on penalties"},
    {day:18,title:"CMP-08 for Jan–Mar 2026 (Composition Dealers)",category:"GST",form_name:"CMP-08",act_law:"GST Act 2017 — Rule 62",description:"Quarterly statement-cum-challan for Composition scheme taxpayers for Jan–Mar 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Interest @ 18% p.a. + late fee ₹50/day, max ₹2,000"},
    {day:20,title:"GSTR-3B (Monthly) — March 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — Section 39",description:"Monthly GSTR-3B return and GST payment for March 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:22,title:"GSTR-3B (Jan–Mar 2026) — South India QRMP",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-3B for Jan–Mar 2026 — South India QRMP filers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:24,title:"GSTR-3B (Jan–Mar 2026) — North India QRMP",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-3B for Jan–Mar 2026 — North India QRMP filers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:30,title:"Opt In/Out of GST Quarterly Scheme (QRMP) — Apr–Jun 2026",category:"GST",form_name:"Online — GST Portal",act_law:"GST Act 2017 — QRMP Scheme",description:"Last date to opt in or opt out of QRMP Scheme for Apr–Jun 2026 quarter.",priority:"MEDIUM",frequency:"QUARTERLY",penalty:"No penalty but wrong filing pattern leads to compliance issues"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — March 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS for March 2026: Property (26QB), Rent (26QC), Contractor (26QD), Crypto VDA (26QE).",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:30,title:"GSTR-4 (FY 2025-26) — Composition Taxpayers Annual Return",category:"GST",form_name:"GSTR-4",act_law:"GST Act 2017 — Section 39(2)",description:"Annual GST return for Composition scheme taxpayers for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"Late fee ₹50/day, max ₹2,000"},
  ],
  "2026-5": [
    {day:7,title:"TDS / TCS Payment — April 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for April 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — April 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for April 2026 salaries.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — April 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017 — Section 37",description:"Monthly GSTR-1 outward supply return for April 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 IFF (Optional) — April 2026 — QRMP",category:"GST",form_name:"IFF",act_law:"GST Act 2017 — QRMP",description:"Optional IFF for QRMP filers for April 2026 (Month 1 of Apr–Jun quarter).",priority:"MEDIUM",frequency:"MONTHLY",penalty:"No penalty; affects buyer ITC"},
    {day:15,title:"TCS Return — Form 27EQ — Jan–Mar 2026 Quarter",category:"Income Tax",form_name:"Form 27EQ",act_law:"Income Tax Act 1961 — Section 206C",description:"Quarterly TCS return for January–March 2026 quarter.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee u/s 234E: ₹200/day + penalty u/s 271H"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — April 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for April 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:20,title:"GSTR-3B (Monthly) — April 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — Section 39",description:"Monthly GSTR-3B return and GST payment for April 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:25,title:"GST Challan PMT-06 — April 2026 (QRMP Filers)",category:"GST",form_name:"PMT-06",act_law:"GST Act 2017 — QRMP",description:"Tax payment if no sufficient ITC for April 2026 (QRMP quarterly filers).",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 18% p.a. on shortfall"},
    {day:30,title:"Form 11 for FY 2025-26 — LLPs",category:"ROC/Company Law",form_name:"Form 11",act_law:"LLP Act 2008",description:"Annual Return filing for LLPs for FY 2025-26 in Form 11 with MCA.",priority:"HIGH",frequency:"ANNUAL",penalty:"₹100/day for delay"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — April 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for April 2026: Property, Rent, Contractor, Crypto VDA.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:30,title:"Issue of TCS Certificates — Form 27D — Jan–Mar 2026",category:"Income Tax",form_name:"Form 27D",act_law:"Income Tax Act 1961 — Section 206C(5)",description:"Issue TCS certificates for Jan–Mar 2026 quarter.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Penalty u/s 272A: ₹100/day per certificate"},
    {day:31,title:"TDS Return — Form 24Q, 26Q, 27Q — Jan–Mar 2026 Quarter",category:"Income Tax",form_name:"Form 24Q/26Q/27Q",act_law:"Income Tax Act 1961 — Section 200",description:"Quarterly TDS returns for Jan–Mar 2026: Form 24Q (salary), 26Q (non-salary), 27Q (NRI).",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee u/s 234E: ₹200/day. Penalty u/s 271H: ₹10,000 to ₹1,00,000"},
    {day:31,title:"SFT Filing — Form 61A (Statement of Financial Transactions)",category:"Income Tax",form_name:"Form 61A",act_law:"Income Tax Act 1961 — Section 285BA",description:"Statement u/s 285BA for FY 2025-26 for banks, post offices, mutual funds, registrars etc.",priority:"HIGH",frequency:"ANNUAL",penalty:"Penalty u/s 271FA: ₹100–₹500/day for delay"},
  ],
  "2026-6": [
    {day:7,title:"TDS / TCS Payment — May 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for May 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — May 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for May 2026 salaries.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — May 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 outward supply return for May 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 IFF (Optional) — May 2026 — QRMP",category:"GST",form_name:"IFF",act_law:"GST Act 2017 — QRMP",description:"Optional IFF for QRMP filers for May 2026 (Month 2 of Apr–Jun quarter).",priority:"MEDIUM",frequency:"MONTHLY",penalty:"No penalty; affects buyer ITC"},
    {day:15,title:"Advance Tax — 1st Installment (Apr–Jun 2026)",category:"Income Tax",form_name:"Challan ITNS 280",act_law:"Income Tax Act 1961 — Section 211",description:"1st Advance Tax: 15% of estimated annual tax for TY 2026-27. For individuals with tax > ₹10,000.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Interest u/s 234C: 1% per month on shortfall"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — May 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for May 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:15,title:"Issue TDS Certificates — Form 16/16A — Jan–Mar 2026",category:"Income Tax",form_name:"Form 16 / Form 16A",act_law:"Income Tax Act 1961 — Section 203",description:"Issue Form 16 (salary) and Form 16A (non-salary) for Q4 Jan–Mar 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Penalty u/s 272A: ₹100/day per certificate"},
    {day:20,title:"GSTR-3B (Monthly) — May 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B return and GST payment for May 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:25,title:"GST Challan PMT-06 — May 2026 (QRMP Filers)",category:"GST",form_name:"PMT-06",act_law:"GST Act 2017 — QRMP",description:"Tax payment if no sufficient ITC for May 2026 (QRMP quarterly filers).",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 18% p.a. on shortfall"},
    {day:30,title:"Form DPT-3 for FY 2025-26 — Companies",category:"ROC/Company Law",form_name:"Form DPT-3",act_law:"Companies Act 2013 — Rule 16A",description:"Annual return of deposits and loans by companies for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"₹1,000/day for delay, max ₹25 lakh"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — May 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for May 2026: Property, Rent, Contractor, Crypto VDA.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:30,title:"DIR-3 KYC for Directors — Companies & LLPs",category:"ROC/Company Law",form_name:"DIR-3 KYC",act_law:"Companies Act 2013",description:"Annual KYC for directors with DIN. Mandatory for every director.",priority:"HIGH",frequency:"ANNUAL",penalty:"DIN deactivated; reactivation fee ₹5,000"},
    {day:30,title:"IEC Code Renewal",category:"Export-Import",form_name:"IEC Portal",act_law:"Foreign Trade Act 1992",description:"Annual renewal/update of Import Export Code on DGFT portal.",priority:"MEDIUM",frequency:"ANNUAL",penalty:"IEC deactivated; suspension on non-renewal"},
  ],
  "2026-7": [
    {day:7,title:"TDS / TCS Payment — June 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for June 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — June 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for June 2026 salaries.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — June 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 outward supply return for June 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 (Apr–Jun 2026) — QRMP Quarterly Filers",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-1 for Apr–Jun 2026 by QRMP taxpayers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:15,title:"TCS Return — Form 27EQ — Apr–Jun 2026",category:"Income Tax",form_name:"Form 27EQ",act_law:"Income Tax Act 1961",description:"Quarterly TCS return for April–June 2026 quarter.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee u/s 234E: ₹200/day + penalty u/s 271H"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — June 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for June 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:15,title:"Last Date — CCFS Scheme 2026 for Companies & OPC",category:"ROC/Company Law",form_name:"CCFS",act_law:"Companies Act 2013",description:"Last date to opt for Companies Compliance Fresh Start Scheme 2026.",priority:"MEDIUM",frequency:"ANNUAL",penalty:"Regular penalties apply after scheme closure"},
    {day:18,title:"CMP-08 for Apr–Jun 2026 (Composition Dealers)",category:"GST",form_name:"CMP-08",act_law:"GST Act 2017 — Rule 62",description:"Quarterly statement-cum-challan for Composition scheme for Apr–Jun 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Interest @ 18% p.a. + late fee ₹50/day, max ₹2,000"},
    {day:20,title:"GSTR-3B (Monthly) — June 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B return and GST payment for June 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:22,title:"GSTR-3B (Apr–Jun 2026) — South India QRMP",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-3B for Apr–Jun 2026 — South India QRMP filers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:24,title:"GSTR-3B (Apr–Jun 2026) — North India QRMP",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-3B for Apr–Jun 2026 — North India QRMP filers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:30,title:"Issue TCS Certificates — Form 27D — Apr–Jun 2026",category:"Income Tax",form_name:"Form 27D",act_law:"Income Tax Act 1961",description:"Issue TCS certificates to collectees for Apr–Jun 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Penalty u/s 272A: ₹100/day per certificate"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — June 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for June 2026: Property, Rent, Contractor, Crypto VDA.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:31,title:"ITR Filing — Individuals & HUF (No Business) — FY 2025-26",category:"Income Tax",form_name:"ITR-1 / ITR-2",act_law:"Income Tax Act 1961 — Section 139(1)",description:"Due date for ITR for Individuals/HUF with Salary, House Property, Capital Gains, Other Sources for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"Late fee u/s 234F: ₹5,000 (₹1,000 if income < ₹5 lakh) + interest u/s 234A"},
    {day:31,title:"TDS Return — Form 24Q, 26Q, 27Q — Apr–Jun 2026",category:"Income Tax",form_name:"Form 24Q/26Q/27Q",act_law:"Income Tax Act 1961",description:"Quarterly TDS returns for April–June 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee u/s 234E: ₹200/day + penalty u/s 271H"},
  ],
  "2026-8": [
    {day:7,title:"TDS / TCS Payment — July 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for July 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — July 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for July 2026 salaries.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — July 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 outward supply return for July 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 IFF (Optional) — July 2026 — QRMP",category:"GST",form_name:"IFF",act_law:"GST Act 2017 — QRMP",description:"Optional IFF for QRMP filers for July 2026 (Month 1 of Jul–Sep quarter).",priority:"MEDIUM",frequency:"MONTHLY",penalty:"No penalty; affects buyer ITC"},
    {day:15,title:"Issue TDS Certificates — Form 16A — Apr–Jun 2026",category:"Income Tax",form_name:"Form 16A",act_law:"Income Tax Act 1961",description:"Issue Form 16A (non-salary TDS certificate) for April–June 2026 quarter.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Penalty u/s 272A: ₹100/day per certificate"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — July 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for July 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:20,title:"GSTR-3B (Monthly) — July 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B return and GST payment for July 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:25,title:"GST Challan PMT-06 — July 2026 (QRMP Filers)",category:"GST",form_name:"PMT-06",act_law:"GST Act 2017 — QRMP",description:"Tax payment if no sufficient ITC for July 2026 (QRMP filers).",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 18% p.a. on shortfall"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — July 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for July 2026: Property, Rent, Contractor, Crypto VDA.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:31,title:"ITR Filing — Business/Profession (ITR-3/ITR-4) — FY 2025-26",category:"Income Tax",form_name:"ITR-3 / ITR-4",act_law:"Income Tax Act 1961 — Section 139(1)",description:"Due date for ITR for Individuals, HUF, Firms/LLP, AOP having business/profession income. FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"Late fee u/s 234F: ₹5,000 + interest u/s 234A"},
  ],
  "2026-9": [
    {day:7,title:"TDS / TCS Payment — August 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for August 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — August 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for August 2026 salaries.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — August 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 outward supply return for August 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 IFF (Optional) — August 2026 — QRMP",category:"GST",form_name:"IFF",act_law:"GST Act 2017 — QRMP",description:"Optional IFF for QRMP filers for August 2026 (Month 2 of Jul–Sep quarter).",priority:"MEDIUM",frequency:"MONTHLY",penalty:"No penalty; affects buyer ITC"},
    {day:15,title:"Advance Tax — 2nd Installment (Jul–Sep 2026)",category:"Income Tax",form_name:"Challan ITNS 280",act_law:"Income Tax Act 1961 — Section 211",description:"2nd Advance Tax: Cumulative 45% of estimated annual tax due by Sep 15, 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Interest u/s 234C: 1% per month on shortfall"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — August 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for August 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:20,title:"GSTR-3B (Monthly) — August 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B return and GST payment for August 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:25,title:"GST Challan PMT-06 — August 2026 (QRMP Filers)",category:"GST",form_name:"PMT-06",act_law:"GST Act 2017 — QRMP",description:"Tax payment if no sufficient ITC for August 2026 (QRMP filers).",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 18% p.a. on shortfall"},
    {day:27,title:"AOC-4 Filing for OPC — FY 2025-26",category:"ROC/Company Law",form_name:"AOC-4",act_law:"Companies Act 2013",description:"Filing of Annual Accounts by One Person Companies for FY 2025-26 with MCA.",priority:"HIGH",frequency:"ANNUAL",penalty:"₹100/day for delay"},
    {day:30,title:"Annual General Meeting (AGM) — Companies",category:"ROC/Company Law",form_name:"Board Resolution / AGM Minutes",act_law:"Companies Act 2013 — Section 96",description:"Every company must hold AGM within 6 months of end of FY. Deadline: Sep 30, 2026 for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"Fine up to ₹1,00,000 + ₹5,000/day continuing default"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — August 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for August 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:30,title:"Audit Report — Form 3CB-3CD & 3CA-3CD — FY 2025-26",category:"Income Tax",form_name:"Form 3CA-3CD / 3CB-3CD",act_law:"Income Tax Act 1961 — Section 44AB",description:"Tax Audit Report for Non-Corporates (Form 3CB-3CD) and Corporates (Form 3CA-3CD) for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"Penalty u/s 271B: ½% of turnover, max ₹1,50,000"},
  ],
  "2026-10": [
    {day:7,title:"TDS / TCS Payment — September 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for September 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — September 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for September 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — September 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 outward supply return for September 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 (Jul–Sep 2026) — QRMP Quarterly Filers",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-1 for Jul–Sep 2026 by QRMP taxpayers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:14,title:"ADT-1 Filing — Appointment of Auditor — Companies",category:"ROC/Company Law",form_name:"ADT-1",act_law:"Companies Act 2013 — Section 139",description:"Filing ADT-1 with MCA within 15 days of AGM for appointment of statutory auditor.",priority:"HIGH",frequency:"ANNUAL",penalty:"₹100/day for delay"},
    {day:15,title:"TCS Return — Form 27EQ — Jul–Sep 2026",category:"Income Tax",form_name:"Form 27EQ",act_law:"Income Tax Act 1961",description:"Quarterly TCS return for July–September 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee u/s 234E: ₹200/day + penalty u/s 271H"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — September 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for September 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:18,title:"CMP-08 for Jul–Sep 2026 (Composition Dealers)",category:"GST",form_name:"CMP-08",act_law:"GST Act 2017 — Rule 62",description:"Quarterly statement-cum-challan for Composition taxpayers for Jul–Sep 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Interest @ 18% p.a. + late fee ₹50/day, max ₹2,000"},
    {day:20,title:"GSTR-3B (Monthly) — September 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B return and GST payment for September 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:22,title:"GSTR-3B (Jul–Sep 2026) — South India QRMP",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-3B for Jul–Sep 2026 — South India QRMP filers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:24,title:"GSTR-3B (Jul–Sep 2026) — North India QRMP",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-3B for Jul–Sep 2026 — North India QRMP filers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:29,title:"AOC-4 Filing for Companies — FY 2025-26",category:"ROC/Company Law",form_name:"AOC-4",act_law:"Companies Act 2013 — Section 137",description:"Filing of Annual Accounts in AOC-4 with MCA for FY 2025-26 (within 30 days of AGM).",priority:"HIGH",frequency:"ANNUAL",penalty:"₹100/day for delay + additional fees"},
    {day:30,title:"Form 8 Filing for LLPs — FY 2025-26",category:"ROC/Company Law",form_name:"Form 8",act_law:"LLP Act 2008",description:"Statement of Account and Solvency for LLPs for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"₹100/day for delay"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — September 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for September 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:30,title:"Issue TCS Certificates — Form 27D — Jul–Sep 2026",category:"Income Tax",form_name:"Form 27D",act_law:"Income Tax Act 1961",description:"Issue TCS certificates to collectees for Jul–Sep 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Penalty u/s 272A: ₹100/day per certificate"},
    {day:31,title:"ITR Filing — Non-Corporates (Audit) & Corporates — FY 2025-26",category:"Income Tax",form_name:"ITR-5/ITR-6/ITR-7",act_law:"Income Tax Act 1961 — Section 139(1)",description:"Due date for ITR for Non-Corporates (audit) and Corporates for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"Late fee u/s 234F: ₹5,000 + interest u/s 234A"},
    {day:31,title:"TDS Returns — Form 24Q, 26Q, 27Q — Jul–Sep 2026",category:"Income Tax",form_name:"Form 24Q/26Q/27Q",act_law:"Income Tax Act 1961",description:"Quarterly TDS returns for July–September 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee u/s 234E: ₹200/day + penalty u/s 271H"},
  ],
  "2026-11": [
    {day:7,title:"TDS / TCS Payment — October 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for October 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — October 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for October 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — October 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 outward supply return for October 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 IFF (Optional) — October 2026 — QRMP",category:"GST",form_name:"IFF",act_law:"GST Act 2017 — QRMP",description:"Optional IFF for QRMP filers for October 2026 (Month 1 of Oct–Dec quarter).",priority:"MEDIUM",frequency:"MONTHLY",penalty:"No penalty; affects buyer ITC"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — October 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for October 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:15,title:"Issue TDS Certificates — Form 16A — Jul–Sep 2026",category:"Income Tax",form_name:"Form 16A",act_law:"Income Tax Act 1961",description:"Issue Form 16A (non-salary TDS certificate) for Jul–Sep 2026 quarter.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Penalty u/s 272A: ₹100/day per certificate"},
    {day:20,title:"GSTR-3B (Monthly) — October 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B return and GST payment for October 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:25,title:"GST Challan PMT-06 — October 2026 (QRMP Filers)",category:"GST",form_name:"PMT-06",act_law:"GST Act 2017 — QRMP",description:"Tax payment if no sufficient ITC for October 2026 (QRMP filers).",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 18% p.a. on shortfall"},
    {day:29,title:"MGT-7/7A Filing — Companies & OPC — FY 2025-26",category:"ROC/Company Law",form_name:"MGT-7 / MGT-7A",act_law:"Companies Act 2013 — Section 92",description:"Annual Return filing with MCA: MGT-7 for companies (60 days of AGM), MGT-7A for OPCs.",priority:"HIGH",frequency:"ANNUAL",penalty:"₹100/day for delay"},
    {day:30,title:"Labour Licence Renewal for Calendar Year 2027",category:"Labour Laws",form_name:"Renewal Application",act_law:"Contract Labour Act 1970",description:"Renew Labour Licence for CY 2027. Principals and contractors must renew before Dec 31.",priority:"HIGH",frequency:"ANNUAL",penalty:"Operating without valid licence: imprisonment up to 3 months and/or fine up to ₹1,000"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — October 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for October 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
  ],
  "2026-12": [
    {day:7,title:"TDS / TCS Payment — November 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for November 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — November 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for November 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — November 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 outward supply return for November 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 IFF (Optional) — November 2026 — QRMP",category:"GST",form_name:"IFF",act_law:"GST Act 2017 — QRMP",description:"Optional IFF for QRMP filers for November 2026 (Month 2 of Oct–Dec quarter).",priority:"MEDIUM",frequency:"MONTHLY",penalty:"No penalty; affects buyer ITC"},
    {day:15,title:"Advance Tax — 3rd Installment (Oct–Dec 2026)",category:"Income Tax",form_name:"Challan ITNS 280",act_law:"Income Tax Act 1961 — Section 211",description:"3rd Advance Tax: Cumulative 75% of estimated annual tax due by Dec 15, 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Interest u/s 234C: 1% per month on shortfall"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — November 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for November 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:20,title:"GSTR-3B (Monthly) — November 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B return and GST payment for November 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:25,title:"GST Challan PMT-06 — November 2026 (QRMP Filers)",category:"GST",form_name:"PMT-06",act_law:"GST Act 2017 — QRMP",description:"Tax payment if no sufficient ITC for November 2026 (QRMP filers).",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 18% p.a. on shortfall"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — November 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for November 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:31,title:"Belated & Revised ITR Filing — FY 2025-26 (Last Date)",category:"Income Tax",form_name:"ITR (All Types)",act_law:"Income Tax Act 1961 — Section 139(4) & 139(5)",description:"Last date to file Belated ITR (without penalty waiver) and Revised ITR for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"Late fee u/s 234F: ₹5,000 + interest u/s 234A @ 1%/month"},
    {day:31,title:"GST Annual Return — GSTR-9 & GSTR-9C — FY 2025-26",category:"GST",form_name:"GSTR-9 / GSTR-9C",act_law:"GST Act 2017 — Section 44",description:"Annual GST return (GSTR-9) and Reconciliation Statement (GSTR-9C) for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"Late fee ₹100/day per act, max 0.25% of turnover"},
  ],
  "2027-1": [
    {day:7,title:"TDS / TCS Payment — December 2026",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for December 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — December 2026",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for December 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — December 2026",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 for December 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 (Oct–Dec 2026) — QRMP Quarterly Filers",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-1 for Oct–Dec 2026 by QRMP taxpayers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:15,title:"TCS Return — Form 27EQ — Oct–Dec 2026",category:"Income Tax",form_name:"Form 27EQ",act_law:"Income Tax Act 1961",description:"Quarterly TCS return for October–December 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee u/s 234E: ₹200/day + penalty u/s 271H"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — December 2026",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for December 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:18,title:"CMP-08 for Oct–Dec 2026 (Composition Dealers)",category:"GST",form_name:"CMP-08",act_law:"GST Act 2017",description:"Quarterly statement-cum-challan for Composition taxpayers for Oct–Dec 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Interest @ 18% p.a. + late fee ₹50/day, max ₹2,000"},
    {day:20,title:"GSTR-3B (Monthly) — December 2026",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B for December 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:22,title:"GSTR-3B (Oct–Dec 2026) — South India QRMP",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-3B for Oct–Dec 2026 — South India QRMP filers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:24,title:"GSTR-3B (Oct–Dec 2026) — North India QRMP",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017 — QRMP",description:"Quarterly GSTR-3B for Oct–Dec 2026 — North India QRMP filers.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — December 2026",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for December 2026.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:30,title:"Issue TCS Certificates — Form 27D — Oct–Dec 2026",category:"Income Tax",form_name:"Form 27D",act_law:"Income Tax Act 1961",description:"Issue TCS certificates to collectees for Oct–Dec 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Penalty u/s 272A: ₹100/day per certificate"},
    {day:31,title:"TDS Return — Form 24Q, 26Q, 27Q — Oct–Dec 2026",category:"Income Tax",form_name:"Form 24Q/26Q/27Q",act_law:"Income Tax Act 1961",description:"Quarterly TDS returns for October–December 2026.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Late fee u/s 234E: ₹200/day + penalty u/s 271H"},
  ],
  "2027-2": [
    {day:7,title:"TDS / TCS Payment — January 2027",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for January 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — January 2027",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for January 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — January 2027",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 for January 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 IFF (Optional) — January 2027 — QRMP",category:"GST",form_name:"IFF",act_law:"GST Act 2017 — QRMP",description:"Optional IFF for QRMP filers for January 2027 (Month 1 of Jan–Mar quarter).",priority:"MEDIUM",frequency:"MONTHLY",penalty:"No penalty; affects buyer ITC"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — January 2027",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for January 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:15,title:"Issue TDS Certificates — Form 16A — Oct–Dec 2026",category:"Income Tax",form_name:"Form 16A",act_law:"Income Tax Act 1961",description:"Issue Form 16A for October–December 2026 quarter.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Penalty u/s 272A: ₹100/day per certificate"},
    {day:20,title:"GSTR-3B (Monthly) — January 2027",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B for January 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:25,title:"GST Challan PMT-06 — January 2027 (QRMP Filers)",category:"GST",form_name:"PMT-06",act_law:"GST Act 2017 — QRMP",description:"Tax payment if no sufficient ITC for January 2027 (QRMP filers).",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 18% p.a. on shortfall"},
  ],
  "2027-3": [
    {day:2,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — January 2027",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for January 2027: Property, Rent, Contractor, Crypto VDA.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:7,title:"TDS / TCS Payment — February 2027",category:"Income Tax",form_name:"Challan ITNS 281",act_law:"Income Tax Act 1961",description:"Monthly TDS/TCS payment for February 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:10,title:"Professional Tax (PT) on Salaries — February 2027",category:"Professional Tax",form_name:"PT Challan",act_law:"State Professional Tax Acts",description:"Monthly PT payment for February 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest + penalty as per state PT Act"},
    {day:11,title:"GSTR-1 (Monthly) — February 2027",category:"GST",form_name:"GSTR-1",act_law:"GST Act 2017",description:"Monthly GSTR-1 for February 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day, max ₹5,000"},
    {day:13,title:"GSTR-1 IFF (Optional) — February 2027 — QRMP",category:"GST",form_name:"IFF",act_law:"GST Act 2017 — QRMP",description:"Optional IFF for QRMP filers for February 2027 (Month 2 of Jan–Mar quarter).",priority:"MEDIUM",frequency:"MONTHLY",penalty:"No penalty; affects buyer ITC"},
    {day:15,title:"Advance Tax — Final Installment (Jan–Mar 2027)",category:"Income Tax",form_name:"Challan ITNS 280",act_law:"Income Tax Act 1961 — Section 211",description:"Final Advance Tax: 100% of annual tax liability due by March 15, 2027. Also covers Tax Planning for TY 2026-27.",priority:"HIGH",frequency:"QUARTERLY",penalty:"Interest u/s 234B: 1%/month; u/s 234C: 1%/month on installment shortfall"},
    {day:15,title:"Form 13 — Nil / Lower TDS Application — TY 2026-27",category:"Income Tax",form_name:"Form 13",act_law:"Income Tax Act 1961 — Section 197",description:"Apply for Nil/Lower TDS certificate in Form 13 for TY 2026-27.",priority:"MEDIUM",frequency:"ANNUAL",penalty:"No direct penalty, but excess TDS affects cash flow"},
    {day:15,title:"Provident Fund (PF) & ESI Payment — February 2027",category:"PF/ESI",form_name:"ECR / ESI Challan",act_law:"EPF Act 1952 / ESI Act 1948",description:"Monthly EPF and ESI contribution for February 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"EPF: Damages u/s 14B. ESI: Interest @ 12% p.a."},
    {day:20,title:"GSTR-3B (Monthly) — February 2027",category:"GST",form_name:"GSTR-3B",act_law:"GST Act 2017",description:"Monthly GSTR-3B for February 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"Late fee ₹50/day + interest @ 18% p.a."},
    {day:20,title:"Composition Scheme (CMP-02) for TY 2027-28 (Opt-in Start)",category:"GST",form_name:"CMP-02",act_law:"GST Act 2017 — Rule 3",description:"Opt in to GST Composition Scheme for TY 2027-28. Window opens from 20 March 2027.",priority:"MEDIUM",frequency:"ANNUAL",penalty:"Cannot opt in if missed window"},
    {day:25,title:"GST Challan PMT-06 — February 2027 (QRMP Filers)",category:"GST",form_name:"PMT-06",act_law:"GST Act 2017 — QRMP",description:"Tax payment if no sufficient ITC for February 2027 (QRMP filers).",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 18% p.a. on shortfall"},
    {day:30,title:"TDS Payment — Form 26QB/26QC/26QD/26QE — February 2027",category:"Income Tax",form_name:"Form 26QB/26QC/26QD/26QE",act_law:"Income Tax Act 1961",description:"TDS payment for February 2027.",priority:"HIGH",frequency:"MONTHLY",penalty:"Interest @ 1.5%/month + penalty u/s 271C"},
    {day:31,title:"Composition Scheme (CMP-02) — Last Date for TY 2027-28",category:"GST",form_name:"CMP-02",act_law:"GST Act 2017 — Rule 3",description:"Last date to opt into GST Composition Scheme for TY 2027-28.",priority:"MEDIUM",frequency:"ANNUAL",penalty:"Cannot opt in if missed window"},
    {day:31,title:"Revised ITR (With Fee) — FY 2025-26 — Last Date",category:"Income Tax",form_name:"ITR (All Types)",act_law:"Income Tax Act 1961 — Section 139(5)",description:"Last date for filing Revised ITR with late fee for FY 2025-26.",priority:"HIGH",frequency:"ANNUAL",penalty:"Late fee u/s 234F already applicable; interest u/s 234A"},
    {day:31,title:"Updated ITR — Last Date for FY 2021-22 (AY 2022-23)",category:"Income Tax",form_name:"ITR-U",act_law:"Income Tax Act 1961 — Section 139(8A)",description:"Last date to file Updated ITR (ITR-U) for FY 2021-22 under the 4-year updated return window.",priority:"HIGH",frequency:"ANNUAL",penalty:"25%–50% additional tax on undisclosed income"},
  ],
};

// ═══════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════
let currentYear = 2026;
let currentMonth = 4;
let currentView = 'calendar';
let complianceStatus = {};
let customEvents = [];
let gcalEventData = null;
let searchTerm = '';

// Load from storage safely
try { complianceStatus = JSON.parse(localStorage.getItem('cp_status') || '{}'); } catch(e) { complianceStatus = {}; }
try { customEvents = JSON.parse(localStorage.getItem('cp_custom') || '[]'); } catch(e) { customEvents = []; }

const MONTHS = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTH_SHORT = ['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// ═══════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════
function getKey(y, m) { return `${y}-${m}`; }
function statusKey(y, m, d, t) { return `${y}-${m}-${d}-${t.substring(0, 40)}`; }
function isComplied(y, m, d, title) { return !!complianceStatus[statusKey(y, m, d, title)]; }

function setComplied(y, m, d, title, v) {
  const k = statusKey(y, m, d, title);
  if (v) complianceStatus[k] = true;
  else delete complianceStatus[k];
  try { localStorage.setItem('cp_status', JSON.stringify(complianceStatus)); } catch(e) {}
}

function getEvents(y, m) {
  const data = CALENDAR_DATA[getKey(y, m)] || [];
  const customs = customEvents.filter(e => {
    const d = new Date(e.date);
    return d.getFullYear() === y && d.getMonth() + 1 === m;
  });
  return { compliance: data, custom: customs };
}

function getAllEventsForDay(y, m, d) {
  const { compliance, custom } = getEvents(y, m);
  return {
    compliance: compliance.filter(e => e.day === d),
    custom: custom.filter(e => new Date(e.date).getDate() === d)
  };
}

function priorityClass(p) {
  if (!p) return 'medium';
  const u = p.toUpperCase();
  if (u.includes('HIGH')) return 'high';
  if (u.includes('LOW')) return 'low';
  return 'medium';
}

function catColor(cat) {
  const m = {
    'Income Tax': 'badge-blue',
    'GST': 'badge-green',
    'PF/ESI': 'badge-red',
    'Professional Tax': 'badge-purple',
    'ROC/Company Law': 'badge-orange',
    'Labour Laws': 'badge-orange',
    'Export-Import': 'badge-gray'
  };
  return m[cat] || 'badge-gray';
}

function catHeaderClass(cat) {
  const m = {
    'GST': 'cat-gst',
    'Income Tax': 'cat-it',
    'PF/ESI': 'cat-pf',
    'Professional Tax': 'cat-pt',
    'ROC/Company Law': 'cat-roc',
    'Labour Laws': 'cat-labour',
    'Export-Import': 'cat-other'
  };
  return m[cat] || 'cat-other';
}

function catIcon(cat) {
  const m = {
    'GST': 'fa-receipt',
    'Income Tax': 'fa-landmark',
    'PF/ESI': 'fa-shield-alt',
    'Professional Tax': 'fa-id-card',
    'ROC/Company Law': 'fa-building',
    'Labour Laws': 'fa-hard-hat',
    'Export-Import': 'fa-globe'
  };
  return m[cat] || 'fa-tag';
}

function daysUntil(y, m, d) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const ev = new Date(y, m - 1, d);
  return Math.ceil((ev - today) / (1000 * 60 * 60 * 24));
}

function formatDate(y, m, d) {
  const dow = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const dayName = dow[new Date(y, m - 1, d).getDay()];
  return `${dayName}, ${d} ${MONTHS[m]} ${y}`;
}

function esc(str) {
  return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function setLoadBar(pct) {
  const lb = document.getElementById('loadBar');
  lb.style.width = pct + '%';
  if (pct >= 100) setTimeout(() => lb.style.width = '0', 600);
}

// ═══════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════
function showToast(msg, type = 'info') {
  const tc = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
  t.innerHTML = `<i class="fas ${icons[type] || 'fa-info-circle'} toast-icon"></i><span>${msg}</span>`;
  tc.appendChild(t);
  setTimeout(() => {
    t.style.transition = 'all 0.35s ease';
    t.style.opacity = '0';
    t.style.transform = 'translateX(110%) scale(0.85)';
    setTimeout(() => t.remove(), 350);
  }, 3500);
}

// ═══════════════════════════════════════════════
// PARTICLES
// ═══════════════════════════════════════════════
function initParticles() {
  const container = document.getElementById('particles');
  const colors = ['rgba(79,70,229,0.15)', 'rgba(139,92,246,0.12)', 'rgba(16,185,129,0.1)', 'rgba(59,130,246,0.1)'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 5 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      background: ${color};
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 20 + 15}s;
      animation-delay: ${Math.random() * 15}s;
    `;
    container.appendChild(p);
  }
}

// ═══════════════════════════════════════════════
// CALENDAR RENDER
// ═══════════════════════════════════════════════
function renderCalendar() {
  setLoadBar(30);
  const grid = document.getElementById('calendarGrid');
  const today = new Date();
  const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const prevDays = new Date(currentYear, currentMonth - 1, 0).getDate();

  document.getElementById('breadcrumbText').textContent = `${MONTHS[currentMonth]} ${currentYear}`;
  document.getElementById('monthSelect').value = currentMonth;
  document.getElementById('yearSelect').value = currentYear;

  let html = '';

  // Previous month padding
  for (let i = firstDay - 1; i >= 0; i--) {
    html += `<div class="cal-day other-month"><div class="day-num">${prevDays - i}</div></div>`;
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = today.getDate() === d && today.getMonth() + 1 === currentMonth && today.getFullYear() === currentYear;
    const dow = new Date(currentYear, currentMonth - 1, d).getDay();
    const { compliance, custom } = getAllEventsForDay(currentYear, currentMonth, d);
    const allEv = [...compliance, ...custom.map(c => ({ ...c, _custom: true }))];
    const filtered = searchTerm ? allEv.filter(e => e.title.toLowerCase().includes(searchTerm)) : allEv;
    const hasEv = filtered.length > 0;

    const classes = ['cal-day', isToday ? 'today' : '', hasEv ? 'has-events' : '',
      dow === 0 ? 'sunday' : dow === 6 ? 'saturday' : ''].filter(Boolean).join(' ');

    let evHtml = '';
    const show = filtered.slice(0, 3);
    show.forEach((e, idx) => {
      const p = e._custom ? 'custom' : priorityClass(e.priority);
      const dayVal = e._custom ? new Date(e.date).getDate() : d;
      const done = isComplied(currentYear, currentMonth, dayVal, e.title);
      evHtml += `<div class="event-chip ${p} ${done ? 'complied' : ''}" style="animation-delay:${idx*0.06}s" title="${e.title}">${e.title}</div>`;
    });

    if (filtered.length > 3) {
      evHtml += `<div class="more-chip">+${filtered.length - 3} more</div>`;
    }

    const dot = filtered.length ? `<div class="event-count-dot">${filtered.length}</div>` : '';

    html += `<div class="${classes}" data-day="${d}" onclick="openDayModal(${d})">
      <div class="day-num">${d}</div>
      ${evHtml}
      ${dot}
    </div>`;
  }

  // Next month padding
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
  for (let i = 1; i <= totalCells - firstDay - daysInMonth; i++) {
    html += `<div class="cal-day other-month"><div class="day-num">${i}</div></div>`;
  }

  grid.innerHTML = html;
  updateStats();
  setLoadBar(100);
}

// ═══════════════════════════════════════════════
// STATS
// ═══════════════════════════════════════════════
function updateStats() {
  const { compliance, custom } = getEvents(currentYear, currentMonth);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const in7 = new Date(today); in7.setDate(in7.getDate() + 7);
  let high = 0, upcoming = 0, overdue = 0, complied = 0;

  const allEv = [
    ...compliance,
    ...custom.filter(c => {
      const d = new Date(c.date);
      return d.getFullYear() === currentYear && d.getMonth() + 1 === currentMonth;
    }).map(c => ({ ...c, _custom: true }))
  ];

  allEv.forEach(e => {
    const d = e._custom ? new Date(e.date).getDate() : e.day;
    const ev = new Date(currentYear, currentMonth - 1, d);
    const done = isComplied(currentYear, currentMonth, d, e.title);
    if (done) complied++;
    if (!e._custom && e.priority && e.priority.toUpperCase().includes('HIGH')) high++;
    if (!done) {
      if (ev < today) overdue++;
      else if (ev <= in7) upcoming++;
    }
  });

  const total = compliance.length + custom.filter(c => {
    const d = new Date(c.date);
    return d.getFullYear() === currentYear && d.getMonth() + 1 === currentMonth;
  }).length;

  animateCount('totalCount', total);
  animateCount('compliedCount', complied);
  animateCount('highCount', high);
  animateCount('upcomingCount', upcoming);
  animateCount('overdueCount', overdue);
  document.getElementById('statusText').textContent = `${MONTHS[currentMonth]} ${currentYear}`;
}

function animateCount(id, target) {
  const el = document.getElementById(id);
  const start = parseInt(el.textContent) || 0;
  if (start === target) return;
  const diff = target - start;
  const steps = 20;
  let step = 0;
  const timer = setInterval(() => {
    step++;
    el.textContent = Math.round(start + (diff * step / steps));
    if (step >= steps) { clearInterval(timer); el.textContent = target; }
  }, 20);
}

// ═══════════════════════════════════════════════
// DAY MODAL
// ═══════════════════════════════════════════════
function openDayModal(day) {
  const { compliance, custom } = getAllEventsForDay(currentYear, currentMonth, day);
  const total = compliance.length + custom.length;
  if (total === 0) { showToast('No compliance events on this date', 'info'); return; }

  const dateStr = formatDate(currentYear, currentMonth, day);
  const du = daysUntil(currentYear, currentMonth, day);

  let statusBadge = '';
  if (du < 0) statusBadge = `<span class="badge badge-red" style="margin-left:10px"><i class="fas fa-exclamation-triangle"></i> ${Math.abs(du)} days overdue</span>`;
  else if (du === 0) statusBadge = `<span class="badge badge-orange" style="margin-left:10px"><i class="fas fa-bell"></i> Due Today!</span>`;
  else if (du <= 7) statusBadge = `<span class="badge badge-orange" style="margin-left:10px"><i class="fas fa-clock"></i> Due in ${du} days</span>`;
  else statusBadge = `<span class="badge badge-green" style="margin-left:10px"><i class="fas fa-calendar-check"></i> ${du} days away</span>`;

  document.getElementById('modalDateTitle').innerHTML = `<i class="fas fa-calendar-day" style="color:var(--accent)"></i> ${dateStr}${statusBadge}`;
  document.getElementById('modalDateSub').textContent = `${total} compliance ${total === 1 ? 'event' : 'events'} scheduled`;

  const dateStr2 = `${currentYear}-${String(currentMonth).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

  let body = '';

  compliance.forEach((ev, idx) => {
    const p = priorityClass(ev.priority);
    const done = isComplied(currentYear, currentMonth, day, ev.title);
    const prioLabel = ev.priority?.toUpperCase().includes('HIGH') ? '<span style="font-size:.7rem;font-weight:700;color:var(--red);background:var(--red-light);padding:2px 8px;border-radius:8px;margin-left:6px">HIGH</span>' :
      ev.priority?.toUpperCase().includes('LOW') ? '<span style="font-size:.7rem;font-weight:700;color:var(--green);background:var(--green-light);padding:2px 8px;border-radius:8px;margin-left:6px">LOW</span>' :
      '<span style="font-size:.7rem;font-weight:700;color:var(--orange);background:var(--orange-light);padding:2px 8px;border-radius:8px;margin-left:6px">MEDIUM</span>';

    body += `<div class="event-card prio-${p} ${done ? 'complied' : ''}" style="animation-delay:${idx*0.08}s">
      <div class="event-card-header">
        <div class="priority-dot ${ev.priority?.split(' ')[0] || 'MEDIUM'}"></div>
        <h4>${ev.title}${prioLabel}</h4>
        <span class="badge ${catColor(ev.category)}">${ev.category}</span>
      </div>
      <div class="event-card-body">
        <p>${ev.description}</p>
        <div class="meta-row">
          ${ev.form_name && ev.form_name !== '—' ? `<div class="meta-item"><i class="fas fa-file-alt"></i><span><strong>Form:</strong> ${ev.form_name}</span></div>` : ''}
          ${ev.act_law ? `<div class="meta-item"><i class="fas fa-balance-scale"></i><span><strong>Act:</strong> ${ev.act_law}</span></div>` : ''}
          ${ev.frequency ? `<div class="meta-item"><i class="fas fa-redo"></i><span><strong>Frequency:</strong> ${ev.frequency}</span></div>` : ''}
        </div>
      </div>
      <div class="event-card-footer">
        <div class="penalty-text"><i class="fas fa-exclamation-triangle"></i><span><strong>Penalty:</strong> ${ev.penalty || 'No specific penalty info'}</span></div>
        <div style="display:flex;gap:7px;flex-wrap:wrap;align-items:center">
          <button class="gcal-btn-inline" onclick="openGcalModal({title:'${esc(ev.title)}',date:'${dateStr2}',description:'${esc(ev.description)}',form:'${esc(ev.form_name || '')}'})" title="Add to Google Calendar">
            <i class="fab fa-google"></i> Google Cal
          </button>
          <button class="complied-btn ${done ? 'done' : ''}" onclick="toggleComplied(${currentYear},${currentMonth},${day},'${esc(ev.title)}',this)">
            <i class="fas ${done ? 'fa-check-circle' : 'fa-circle'}"></i> ${done ? 'Complied ✓' : 'Mark Complied'}
          </button>
        </div>
      </div>
    </div>`;
  });

  custom.forEach((ev, idx) => {
    const done = isComplied(currentYear, currentMonth, day, ev.title);
    body += `<div class="event-card prio-custom ${done ? 'complied' : ''}" style="animation-delay:${(compliance.length+idx)*0.08}s">
      <div class="event-card-header">
        <div class="priority-dot MEDIUM" style="background:var(--purple)"></div>
        <h4>⭐ ${ev.title} <span style="font-size:.7rem;font-weight:700;color:var(--purple);background:var(--purple-light);padding:2px 8px;border-radius:8px;margin-left:6px">CUSTOM</span></h4>
        <span class="badge badge-purple">Custom</span>
      </div>
      <div class="event-card-body">
        ${ev.description ? `<p>${ev.description}</p>` : ''}
        <div class="meta-row">
          ${ev.form_name ? `<div class="meta-item"><i class="fas fa-file-alt"></i><span>${ev.form_name}</span></div>` : ''}
          ${ev.act_law ? `<div class="meta-item"><i class="fas fa-balance-scale"></i><span>${ev.act_law}</span></div>` : ''}
          <div class="meta-item"><i class="fas fa-tag"></i><span>${ev.category || 'Custom'}</span></div>
        </div>
      </div>
      <div class="event-card-footer">
        <div class="penalty-text"><i class="fas fa-info-circle" style="color:var(--purple)"></i><span>${ev.penalty || 'Custom event — no penalty info'}</span></div>
        <div style="display:flex;gap:7px;flex-wrap:wrap;align-items:center">
          <button class="gcal-btn-inline" onclick="openGcalModal({title:'${esc(ev.title)}',date:'${ev.date}',description:'${esc(ev.description||'')}',form:'${esc(ev.form_name||'')}'})" title="Add to Google Calendar">
            <i class="fab fa-google"></i> Google Cal
          </button>
          <button class="btn btn-ghost btn-sm" onclick="deleteCustomEvent('${ev.id}')" title="Delete" style="padding:5px 10px">
            <i class="fas fa-trash" style="color:var(--red)"></i>
          </button>
          <button class="complied-btn ${done ? 'done' : ''}" onclick="toggleComplied(${currentYear},${currentMonth},${day},'${esc(ev.title)}',this)">
            <i class="fas ${done ? 'fa-check-circle' : 'fa-circle'}"></i> ${done ? 'Complied ✓' : 'Mark Complied'}
          </button>
        </div>
      </div>
    </div>`;
  });

  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('detailModal').classList.add('open');

  document.getElementById('addAllGcal').onclick = () => {
    [...compliance, ...custom].forEach((ev, i) => {
      setTimeout(() => {
        const d2 = ev.date || dateStr2;
        openGcalDirect({ title: ev.title, date: d2, description: ev.description || '', form: ev.form_name || '' });
      }, i * 900);
    });
    showToast(`Opening ${compliance.length + custom.length} events in Google Calendar...`, 'info');
  };
}

function toggleComplied(y, m, d, title, btn) {
  const curr = isComplied(y, m, d, title);
  setComplied(y, m, d, title, !curr);
  btn.className = `complied-btn ${!curr ? 'done' : ''}`;
  btn.innerHTML = `<i class="fas ${!curr ? 'fa-check-circle' : 'fa-circle'}"></i> ${!curr ? 'Complied ✓' : 'Mark Complied'}`;
  showToast(!curr ? 'Marked as complied! ✅' : 'Marked as not complied', !curr ? 'success' : 'info');
  renderCalendar();
}

function deleteCustomEvent(id) {
  if (!confirm('Delete this custom event?')) return;
  customEvents = customEvents.filter(e => e.id !== id);
  try { localStorage.setItem('cp_custom', JSON.stringify(customEvents)); } catch(e) {}
  document.getElementById('detailModal').classList.remove('open');
  renderCalendar();
  showToast('Custom event deleted', 'info');
}

// ═══════════════════════════════════════════════
// YEARLY VIEW
// ═══════════════════════════════════════════════
function renderYearly() {
  const yr = parseInt(document.getElementById('yearSelect').value) || currentYear;
  document.getElementById('yearlyTitle').textContent = `${yr} Compliance Overview`;

  let startM = 1, endM = 12;
  if (yr === 2026) startM = 4;
  if (yr === 2027) endM = 3;

  let html = '';
  let cardIdx = 0;

  for (let m = startM; m <= endM; m++) {
    const key = getKey(yr, m);
    const evs = CALENDAR_DATA[key] || [];
    if (evs.length === 0) continue;

    html += `<div class="month-card" style="animation-delay:${cardIdx * 0.06}s">
      <div class="month-card-header">
        <h4><i class="fas fa-calendar-alt"></i> ${MONTHS[m]} ${yr}</h4>
        <span class="badge">${evs.length} events</span>
      </div>
      <div class="month-card-body">
        ${evs.slice(0, 8).map(e => `
          <div class="month-ev-item" onclick="currentMonth=${m};currentYear=${yr};switchView('calendar')" style="cursor:pointer">
            <span class="month-ev-date">${e.day}</span>
            <span class="month-ev-cat badge ${catColor(e.category)}">${e.category.split('/')[0]}</span>
            <span style="flex:1;font-size:0.8rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--text)">${e.title}</span>
          </div>`).join('')}
        ${evs.length > 8 ? `<div style="padding:8px 16px;font-size:0.8rem;color:var(--accent);cursor:pointer;font-weight:600" onclick="currentMonth=${m};currentYear=${yr};switchView('calendar')">
          <i class="fas fa-arrow-right" style="font-size:.7rem"></i> +${evs.length - 8} more events
        </div>` : ''}
      </div>
    </div>`;
    cardIdx++;
  }

  document.getElementById('yearlyGrid').innerHTML = html || `<div style="text-align:center;padding:60px;color:var(--text3)"><i class="fas fa-calendar-xmark" style="font-size:2rem;display:block;margin-bottom:10px"></i>No compliance data for selected year.</div>`;
}

// ═══════════════════════════════════════════════
// UPCOMING VIEW
// ═══════════════════════════════════════════════
function renderUpcoming() {
  const days = parseInt(document.getElementById('upcomingFilter').value) || 30;
  const catF = document.getElementById('upcomingCatFilter').value || '';
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const cutoff = new Date(today);
  if (days > 0) cutoff.setDate(cutoff.getDate() + days);

  let all = [];

  Object.entries(CALENDAR_DATA).forEach(([key, evs]) => {
    const [y, m] = key.split('-').map(Number);
    evs.forEach(e => {
      const ev = new Date(y, m - 1, e.day);
      if (days === 0 || ev <= cutoff) {
        all.push({ ...e, year: y, month: m, date: ev });
      }
    });
  });

  customEvents.forEach(e => {
    const ev = new Date(e.date);
    if (days === 0 || ev <= cutoff) {
      all.push({ ...e, day: ev.getDate(), year: ev.getFullYear(), month: ev.getMonth() + 1, date: ev, _custom: true });
    }
  });

  all = all.filter(e => e.date >= today && (!catF || e.category === catF));
  all.sort((a, b) => a.date - b.date);

  if (all.length === 0) {
    document.getElementById('upcomingList').innerHTML = `
      <div style="text-align:center;padding:60px;color:var(--text3)">
        <i class="fas fa-check-circle" style="font-size:3rem;color:var(--green);display:block;margin-bottom:14px"></i>
        <div style="font-size:1.1rem;font-weight:700;color:var(--text2);margin-bottom:6px">All Clear!</div>
        <div>No upcoming deadlines in this period.</div>
      </div>`;
    return;
  }

  document.getElementById('upcomingList').innerHTML = all.slice(0, 60).map((e, idx) => {
    const du = daysUntil(e.year, e.month, e.day);
    const done = isComplied(e.year, e.month, e.day, e.title);
    const dlClass = du <= 0 ? 'overdue' : du <= 7 ? 'soon' : 'normal';
    const dlText = du < 0 ? `${Math.abs(du)}d overdue` : du === 0 ? 'Due Today!' : `${du} days`;
    const dateStr2 = `${e.year}-${String(e.month).padStart(2,'0')}-${String(e.day).padStart(2,'0')}`;

    return `<div class="upcoming-item" style="opacity:${done ? '0.6' : '1'};animation-delay:${idx*0.04}s">
      <div class="upcoming-date-badge">
        <div class="day">${e.day}</div>
        <div class="mon">${MONTH_SHORT[e.month]}</div>
      </div>
      <div class="upcoming-info">
        <div class="upcoming-title">${e._custom ? '⭐ ' : ''}${e.title}</div>
        <div class="upcoming-sub">
          <span class="badge ${catColor(e.category)}">${e.category}</span>
          <span>${MONTHS[e.month]} ${e.year}</span>
        </div>
      </div>
      <div class="upcoming-right">
        <span class="days-left ${dlClass}">${dlText}</span>
        <div style="display:flex;gap:5px;align-items:center">
          <button class="gcal-btn-inline" style="font-size:0.72rem;padding:4px 9px"
            onclick="openGcalDirect({title:'${esc(e.title)}',date:'${dateStr2}',description:'${esc(e.description||'')}',form:'${esc(e.form_name||'')}'})"
            title="Add to Google Calendar"><i class="fab fa-google"></i>
          </button>
          <label class="complied-toggle" title="${done ? 'Complied' : 'Not Complied'}">
            <input type="checkbox" ${done ? 'checked' : ''} onchange="setComplied(${e.year},${e.month},${e.day},'${esc(e.title)}',this.checked);renderUpcoming()">
            <span style="font-size:0.85rem">${done ? '✅' : '○'}</span>
          </label>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════
// CATEGORIES VIEW
// ═══════════════════════════════════════════════
function renderCategories() {
  const yr = parseInt(document.getElementById('catYearFilter').value) || 2026;
  const cats = {};

  let startM = 1, endM = 12;
  if (yr === 2026) startM = 4;
  if (yr === 2027) endM = 3;

  for (let m = startM; m <= endM; m++) {
    const key = getKey(yr, m);
    const evs = CALENDAR_DATA[key] || [];
    evs.forEach(e => {
      if (!cats[e.category]) cats[e.category] = [];
      cats[e.category].push({ ...e, month: m, year: yr });
    });
  }

  document.getElementById('categoriesGrid').innerHTML = Object.entries(cats)
    .sort((a, b) => b[1].length - a[1].length)
    .map(([cat, evs], idx) => `
      <div class="cat-card" style="animation-delay:${idx*0.06}s">
        <div class="cat-card-header ${catHeaderClass(cat)}">
          <i class="fas ${catIcon(cat)}"></i>
          <h4>${cat}</h4>
          <span class="count">${evs.length}</span>
        </div>
        <div class="cat-card-body">
          ${evs.slice(0, 8).map(e => `
            <div class="cat-ev-row">
              <span class="cat-date">${e.day}/${e.month}</span>
              <div class="priority-dot ${e.priority?.split(' ')[0] || 'MEDIUM'}"></div>
              <span class="cat-ev-title" title="${e.title}">${e.title}</span>
              <button class="gcal-btn-inline" onclick="openGcalDirect({title:'${esc(e.title)}',date:'${e.year}-${String(e.month).padStart(2,'0')}-${String(e.day).padStart(2,'0')}',description:'${esc(e.description||'')}',form:'${esc(e.form_name||'')}'})"
                style="font-size:0.65rem;padding:3px 8px;flex-shrink:0">
                <i class="fab fa-google"></i>
              </button>
            </div>`).join('')}
          ${evs.length > 8 ? `<div style="padding:10px 18px;font-size:0.8rem;color:var(--accent);font-weight:600">
            <i class="fas fa-ellipsis-h"></i> +${evs.length - 8} more events
          </div>` : ''}
        </div>
      </div>`).join('');
}

// ═══════════════════════════════════════════════
// GOOGLE CALENDAR
// ═══════════════════════════════════════════════
function openGcalModal(ev) {
  gcalEventData = ev;
  document.getElementById('gcalEventPreview').innerHTML = `
    <div style="font-weight:700;font-size:0.92rem;margin-bottom:5px;color:var(--text)">${ev.title}</div>
    <div style="font-size:0.8rem;color:var(--text3);margin-bottom:4px">
      <i class="fas fa-calendar" style="color:var(--accent)"></i> ${ev.date}
    </div>
    ${ev.form ? `<div style="font-size:0.8rem;color:var(--text2)"><i class="fas fa-file-alt" style="color:var(--accent)"></i> Form: ${ev.form}</div>` : ''}
  `;
  document.getElementById('gcalModal').classList.add('open');
}

function openGcalDirect(ev) {
  const d = ev.date.replace(/-/g, '');
  const title = encodeURIComponent(ev.title);
  const details = encodeURIComponent((ev.description || '') + (ev.form ? `\n\nForm: ${ev.form}` : '') + '\n\nData: eztax.in — CompliancePro');
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${d}/${d}&details=${details}`;
  window.open(url, '_blank');
}

document.getElementById('confirmAddGcal').onclick = function() {
  if (!gcalEventData) return;
  const d = gcalEventData.date.replace(/-/g, '');
  const title = encodeURIComponent(gcalEventData.title);
  const details = encodeURIComponent((gcalEventData.description || '') + (gcalEventData.form ? `\n\nForm: ${gcalEventData.form}` : ''));
  const remind = document.getElementById('gcalReminder').checked ? '&add=reminder&minutes_before=1440' : '';
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${d}/${d}&details=${details}${remind}`;
  window.open(url, '_blank');
  document.getElementById('gcalModal').classList.remove('open');
  showToast('Opening Google Calendar... ✅', 'success');
};

// ═══════════════════════════════════════════════
// ADD CUSTOM EVENT
// ═══════════════════════════════════════════════
function saveCustomEvent() {
  const title = document.getElementById('customTitle').value.trim();
  const date = document.getElementById('customDate').value;
  if (!title || !date) { showToast('Title and Date are required!', 'error'); return null; }

  const ev = {
    id: Date.now().toString(),
    title, date,
    category: document.getElementById('customCategory').value || 'Custom',
    priority: document.getElementById('customPriority').value,
    form_name: document.getElementById('customForm').value,
    act_law: document.getElementById('customAct').value,
    description: document.getElementById('customDesc').value,
    penalty: document.getElementById('customPenalty').value,
    _custom: true,
  };

  customEvents.push(ev);
  try { localStorage.setItem('cp_custom', JSON.stringify(customEvents)); } catch(e) {}
  document.getElementById('addEventModal').classList.remove('open');
  clearAddForm();
  renderCalendar();
  showToast('Custom event added successfully! 🎉', 'success');
  return ev;
}

function clearAddForm() {
  ['customTitle', 'customDate', 'customCategory', 'customForm', 'customAct', 'customDesc', 'customPenalty']
    .forEach(id => document.getElementById(id).value = '');
  document.getElementById('customPriority').value = 'MEDIUM PRIORITY';
}

document.getElementById('saveCustomEvent').onclick = saveCustomEvent;
document.getElementById('saveAndAddGcal').onclick = function() {
  const ev = saveCustomEvent();
  if (ev) { openGcalDirect({ title: ev.title, date: ev.date, description: ev.description, form: ev.form_name }); }
};

// ═══════════════════════════════════════════════
// VIEW SWITCHING
// ═══════════════════════════════════════════════
function switchView(view) {
  currentView = view;
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(`${view}Panel`).classList.add('active');
  document.querySelector(`[data-view="${view}"]`).classList.add('active');

  if (view === 'calendar') renderCalendar();
  else if (view === 'yearly') renderYearly();
  else if (view === 'upcoming') renderUpcoming();
  else if (view === 'categories') renderCategories();

  // Close sidebar on mobile
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('open');
    document.getElementById('menuBtn').classList.remove('open');
  }
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', e => { e.preventDefault(); switchView(item.dataset.view); });
});

// ═══════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════
document.getElementById('prevMonth').onclick = function() {
  if (currentMonth === 1) { currentMonth = 12; currentYear--; }
  else currentMonth--;
  if (currentYear < 2026 || (currentYear === 2026 && currentMonth < 4)) { currentYear = 2026; currentMonth = 4; }
  renderCalendar();
};

document.getElementById('nextMonth').onclick = function() {
  if (currentMonth === 12) { currentMonth = 1; currentYear++; }
  else currentMonth++;
  if (currentYear > 2027 || (currentYear === 2027 && currentMonth > 3)) { currentYear = 2027; currentMonth = 3; }
  renderCalendar();
};

document.getElementById('monthSelect').onchange = function() { currentMonth = parseInt(this.value); renderCalendar(); };
document.getElementById('yearSelect').onchange = function() { currentYear = parseInt(this.value); renderCalendar(); };

document.getElementById('refreshBtn').onclick = function() {
  const icon = this.querySelector('i');
  icon.style.transition = 'transform 0.6s ease';
  icon.style.transform = 'rotate(360deg)';
  setTimeout(() => { icon.style.transition = ''; icon.style.transform = ''; }, 600);
  renderCalendar();
  showToast('Calendar refreshed', 'info');
};

// ═══════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════
document.getElementById('searchInput').oninput = function() {
  searchTerm = this.value.toLowerCase().trim();
  renderCalendar();
};

// ═══════════════════════════════════════════════
// MODALS
// ═══════════════════════════════════════════════
document.getElementById('closeModal').onclick = () => document.getElementById('detailModal').classList.remove('open');
document.getElementById('closeAddModal').onclick = () => { document.getElementById('addEventModal').classList.remove('open'); clearAddForm(); };
document.getElementById('cancelAddEvent').onclick = () => { document.getElementById('addEventModal').classList.remove('open'); clearAddForm(); };
document.getElementById('closeGcalModal').onclick = () => document.getElementById('gcalModal').classList.remove('open');
document.getElementById('cancelGcal').onclick = () => document.getElementById('gcalModal').classList.remove('open');

document.getElementById('addEventBtn').onclick = () => {
  document.getElementById('customDate').value = `${currentYear}-${String(currentMonth).padStart(2,'0')}-01`;
  document.getElementById('addEventModal').classList.add('open');
  setTimeout(() => document.getElementById('customTitle').focus(), 300);
};

// Close on overlay click
['detailModal', 'addEventModal', 'gcalModal'].forEach(id => {
  document.getElementById(id).addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('open');
  });
});

// ═══════════════════════════════════════════════
// SIDEBAR
// ═══════════════════════════════════════════════
document.getElementById('menuBtn').onclick = function() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const btn = this;
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  btn.classList.toggle('open');
};

document.getElementById('sidebarOverlay').onclick = function() {
  document.getElementById('sidebar').classList.remove('open');
  this.classList.remove('open');
  document.getElementById('menuBtn').classList.remove('open');
};

// ═══════════════════════════════════════════════
// DARK MODE
// ═══════════════════════════════════════════════
function setTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  try { localStorage.setItem('cp_theme', dark ? 'dark' : 'light'); } catch(e) {}
}

const savedTheme = (() => { try { return localStorage.getItem('cp_theme'); } catch(e) { return null; } })();
if (savedTheme === 'dark') setTheme(true);

document.getElementById('themeToggle').onclick = function() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  setTheme(!isDark);
  showToast(isDark ? '☀️ Light mode activated' : '🌙 Dark mode activated', 'info');
};

// ═══════════════════════════════════════════════
// FILTER CHANGE HANDLERS
// ═══════════════════════════════════════════════
document.getElementById('upcomingFilter').onchange = renderUpcoming;
document.getElementById('upcomingCatFilter').onchange = renderUpcoming;
document.getElementById('catYearFilter').onchange = renderCategories;
document.getElementById('downloadYearBtn').onclick = function() { window.print(); };

// ═══════════════════════════════════════════════
// KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  }
  if (!e.target.matches('input, select, textarea')) {
    if (e.key === 'ArrowLeft') document.getElementById('prevMonth').click();
    if (e.key === 'ArrowRight') document.getElementById('nextMonth').click();
    if (e.key === 'c' || e.key === 'C') switchView('calendar');
    if (e.key === 'u' || e.key === 'U') switchView('upcoming');
    if (e.key === 'y' || e.key === 'Y') switchView('yearly');
  }
});

// ═══════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════
(function init() {
  // Init particles
  initParticles();

  // Set current month
  const now = new Date();
  if (now.getFullYear() === 2026 && now.getMonth() + 1 >= 4) {
    currentYear = 2026;
    currentMonth = now.getMonth() + 1;
  } else if (now.getFullYear() === 2027 && now.getMonth() + 1 <= 3) {
    currentYear = 2027;
    currentMonth = now.getMonth() + 1;
  } else {
    currentYear = 2026;
    currentMonth = 4;
  }

  document.getElementById('monthSelect').value = currentMonth;
  document.getElementById('yearSelect').value = currentYear;

  // Render calendar with stagger animation
  setTimeout(renderCalendar, 50);

  // Welcome toast
  setTimeout(() => {
    showToast('CompliancePro TY 2026-27 loaded! ✅', 'success');
  }, 800);
})();
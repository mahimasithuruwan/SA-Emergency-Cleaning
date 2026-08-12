# SA Emergency Cleaning – Complete Project Conversation & Technical History Record

**Project Name**: SA Emergency Cleaning App  
**Target Platforms**: Web Application, Android Native App (Google Play Store), iOS Native App (Apple App Store)  
**Cloud Infrastructure**: Microsoft Azure (Australia East - Sydney)  
**Backend & Database**: Node.js Express REST API Server + Prisma ORM (SQLite local / Azure PostgreSQL cloud)  
**Payment Gateway**: Australian NPP PayTo & BECS Direct Debit (Stripe Australia / Zepto)  
**PDF Engine**: Native Vector `jsPDF` (`jspdf.umd.min.js` v2.5.1)  
**Last Updated**: August 2026  

---

## 1. Original Developer Brief & Business Scope

### Overview
SA Emergency Cleaning operates an emergency cleaning membership service for commercial businesses in South Australia. Businesses subscribe to monthly plans (Essential $99/mo, Business $199/mo, Premium $399/mo) providing included emergency call-outs. Each included call-out covers up to 1 hour of cleaning labour on-site. Target attendance time is **within 2–4 hours** of a validated request.

### Core Requirements
1. **Multi-Site Customer Accounts**: Single main business account with ABN & primary contact hosting 1-to-N location sites.
2. **Membership Tiers**:
   - **Essential ($99/mo)**: 1 included call-out/mo.
   - **Business ($199/mo)**: 2 included call-outs/mo.
   - **Premium ($399/mo)**: 4 included call-outs/mo.
3. **Emergency Incident Request Engine**: Select location, incident category, description, size ($m^2$), safe to access confirmation, onsite contact, access codes, and multi-photo/video uploads.
4. **Toilet Overflow Disclaimer Enforcer**: Prominent disclaimer notice (*"Cleaning of affected area and surrounding surfaces only. SA Emergency Cleaning does not provide plumbing..."*).
5. **2–4 Hour SLA Clock & Pause Logic**: SLA clock pauses when Admin requests missing information (`MORE_INFO_REQUIRED`) and resumes upon customer resubmission.
6. **Technician Mobile Field App**: Roster queue, turn-by-turn Google Maps link, site access codes, status switcher (`Travelling` $\rightarrow$ `Arrived` $\rightarrow$ `Work Started` $\rightarrow$ `Completed`), unable to access logging, and 1-hour job timer with alerts at **45m**, **55m**, and **60m**.
7. **Labor Extension Approval**: Prompts customer for digital signature approval of additional hourly rate ($120/hr) before extra work continues.
8. **Reward Points Loyalty Wallet**: $1 Membership Fee = 1 Point. 6-month active membership tenure check before redemptions unlock for carpet steam, tile & grout, window panels, and deep cleaning.
9. **Admin Operations & Accounts Desk**: Live SLA tracking, hotline phone order manual entry, technician assignment, customer accounts directory, call-out allowance overrides, points approvals, and analytics.
10. **Zero-Code Dynamic Configuration Studio**: Admin can edit plans, pricing, allowances, hourly rates, categories, and policy disclaimers live without app redeployments.

---

## 2. Key Architectural Decisions & Solutions Log

### Q1: Payment Gateway Integration for Australia
* **Question**: Is there technology in Australia that handles subscriptions between bank accounts directly?
* **Answer**: Yes! Australia's **PayTo** infrastructure (on the New Payments Platform / NPP) allows real-time pre-authorized bank-to-bank recurring payments directly linked to customer bank accounts (BSB/Account or PayID) approved inside their mobile banking app (CBA, NAB, ANZ, Westpac). Supported alongside standard BECS Direct Debit via Stripe Australia / Zepto.

### Q2: Notification Strategy
* **Question**: Should we use SMS or App Push Notifications?
* **Answer**: **App Push Notifications** via Firebase Cloud Messaging (FCM) for Android and Apple Push Notification service (APNs) for iOS / Web Push API.

### Q3: Native Vector PDF Generation Engine (`jsPDF`)
* **Problem**: Earlier DOM snapshotting (`html2canvas`) caused blank white pages due to off-screen elements, CORS image security rules, and CSS flexbox stripping inside printed windows.
* **Solution**: Switched to native vector PDF drawing commands using `jsPDF` (`window.jspdf.jsPDF`). Every line, shape, SLA timing audit table cell, and text element is programmatically constructed directly in memory and downloaded (`SACC-Service-Completion-Report-SACC-2026-XXXX.pdf`) on the user's active tab without opening popups or cross-port new tabs.

### Q4: System-Wide Input Field Validations
* **Requirement**: Ensure all necessary validation to input fields across customer registration, callout requests, technician roster, and hotline booking entry.
* **Solution Implemented**:
  - **Australian Business Number (ABN)**: Validated strictly to 11 numeric digits.
  - **Phone Numbers**: Validated to Australian phone format (8–12 numeric digits).
  - **Adelaide Location Restriction**: Restricted to Adelaide, SA postcodes (5000–5199).
  - **Incident Description**: Required minimum length of 5 characters.
  - **Backend API**: Added server-side validation error checking (`400 Bad Request`) in `server.js` for `POST /api/jobs` and `POST /api/customers`.

### Q5: Project Re-Branding to "SA Emergency Cleaning"
* **Requirement**: Update project title and branding to SA Emergency Cleaning.
* **Solution Implemented**: Updated `package.json`, `index.html`, `capacitor.config.json`, `server.js` PDF generator headers and legal disclaimers, `src/App.jsx` navigation bar and login modals, and all technical documentation files (`README.md`, `tech_spec.md`, `project_map.md`, `development_plan.md`).

### Q6: Git Repository Initialization & Private Account Setup
* **Requirement**: Put project into Git and set up private account.
* **Solution Implemented**: Created `.gitignore` excluding `node_modules`, `dist`, SQLite databases (`*.db`), logs, and Android build binaries. Initialized local Git repository (`git init`), staged project files (`git add .`), set local identity, and provided step-by-step instructions for linking to GitHub/GitLab private remotes.

---

## 3. Chronological User Requests & Resolution Summary

1. *"pdf download option shoud be availbel"* $\rightarrow$ Added PDF download buttons across Customer Portal, Admin Hub, and Technician App.
2. *"technicians completed tab crashing"* $\rightarrow$ Fixed missing `Download` icon import from `lucide-react`.
3. *"completed items should be in a list, and when click download pdf, it shoud downlad"* $\rightarrow$ Formatted completed jobs into a clean responsive flex list.
4. *"remoeve text download pdf"* $\rightarrow$ Simplified button labels to `Download` / `📥 Download`.
5. *"fix the allignment issues in the list"* $\rightarrow$ Aligned view and download buttons with consistent height, padding, and vertical centering.
6. *"i dont want scroll to horizontally"* $\rightarrow$ Replaced scrolling table wrappers with 100% container-width responsive flex list layout.
7. *"when click download file is not downloading"* $\rightarrow$ Fixed blob URL same-origin downloading.
8. *"im downloading a .html file?"* $\rightarrow$ Updated endpoint headers to force binary application/pdf downloads.
9. *"pdf is empty" / "still empty pdf" / "still empty while pdf downloading"* $\rightarrow$ Replaced DOM snapshotting with native vector `jsPDF` engine.
10. *"ensure all the necessory validation to input fields in the system"* $\rightarrow$ Added client-side and server-side validation for ABN (11 digits), phone format, email format, Adelaide location restriction, and min text lengths.
11. *"what is the issue in pdf not generating?"* $\rightarrow$ Detailed root cause analysis of canvas rendering vs native vector PDF generation.
12. *"i want to put the project into git"* $\rightarrow$ Created `.gitignore`, initialized local Git repository, created initial commit, and provided remote setup instructions.
13. *"i want to change my project name to SA Emergency Cleaning"* $\rightarrow$ Rebranded entire application across configuration, source code, PDF generator, and documentation to **SA Emergency Cleaning**.
14. *"update to all the neccessory documents"* $\rightarrow$ Created master `README.md` and updated all technical documentation files in `docs/`.
15. *"have you save all the history?"* $\rightarrow$ Documented entire project trajectory, architectural decisions, and chronological user request resolutions in `docs/full_project_chat_history.md`.

---

## 4. Current Repository File Index

```text
c:\Users\ADMIN\Desktop\AUS Project Mahima/
├── README.md                            # Master Project Documentation & Quickstart Guide
├── package.json                         # Project dependencies & sa-emergency-cleaning metadata
├── capacitor.config.json                # Mobile app configuration for SA Emergency Cleaning
├── index.html                           # Main HTML entry point (Title: SA Emergency Cleaning)
├── server.js                            # Express REST API server + jsPDF HTML fallback endpoint
├── .gitignore                           # Git ignore rules for node_modules, build binaries, DBs
├── prisma/
│   ├── schema.prisma                    # Database models (Organization, Location, Request, Tech)
│   ├── dev.db                           # SQLite local database instance
│   └── seed.js                          # Initial database seed script
├── src/
│   ├── main.jsx                         # React 18 entry point
│   ├── index.css                        # Glassmorphism design system & custom scrollbar styles
│   └── App.jsx                          # Main unified application component (~5,917 lines)
└── docs/
    ├── development_plan.md              # Phased roadmap & execution schedule
    ├── tech_spec.md                     # Technology specifications & Azure cloud stack
    ├── project_map.md                   # System architecture blueprints & state machines
    ├── implementation_plan.md           # Implementation plan documentation
    └── full_project_chat_history.md     # Full conversation history & project documentation record
```

---
© 2026 **SA Emergency Cleaning Pty Ltd**. All Rights Reserved.

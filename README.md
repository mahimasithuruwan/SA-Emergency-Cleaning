# 🚨 SA Emergency Cleaning
> **24/7 Rapid Emergency Response, Multi-Site Management & Reward Points Engine**
> Operating exclusively across Adelaide & South Australia (Postcodes 5000–5199).

---

## 📋 Overview
**SA Emergency Cleaning** is a production-ready, full-stack emergency response system designed for commercial business accounts in South Australia. The system connects business customers, 24/7 admin operations dispatch, and field technicians for rapid 2–4 hour emergency attendance (floods, water damage, biohazard, toilet overflow, and hazardous spills).

---

## ✨ Key System Features

### 🏢 1. Customer Membership & Multi-Site Portal
* **Tiered Membership Plans**: Essential ($99/mo), Business ($199/mo), and Premium ($399/mo) plans with monthly included 1-hour callouts.
* **Multi-Site Site Selector**: Switch between Adelaide CBD Headquarters, North Adelaide Branch, Port Adelaide Warehouse, and custom sites.
* **Emergency Cleaning Dispatch**: Submit incident category, affected area ($m^2$), access instructions, security notes, and photo/video attachments.
* **Reward Points Wallet**: Earn 1 point per $10 spent. Features a strict **6-Month Tenure Verification Rule** before point redemptions unlock.
* **Instant Native PDF Download**: Download crisp, high-resolution vector PDF service completion audit reports directly to your device.

### 🛡️ 2. Admin Operations & Hotline Dispatch Desk
* **SLA Performance Counter**: Real-time SLA response clock targeting 2–4 hour attendance.
* **Interactive Technician Roster**: View field tech availability (`AVAILABLE`, `ON_SITE`, `OFF_DUTY`), ratings, and assigned jobs.
* **24/7 Hotline Phone Order Entry**: Rapid booking modal for phone callers with automatic site and contact assignment.
* **Dynamic Configuration Studio**: Live control over plan prices, overage rates ($120/hr), additional callout fees ($30), and reward point ratios.

### 🔧 3. Field Technician Workstation
* **7-Stage Job Lifecycle Workflow**:
  1. `NEW` / `SUBMITTED`
  2. `TECH_ASSIGNED`
  3. `ACCEPTED`
  4. `TRAVELLING` (GPS Transit tracking)
  5. `ARRIVED` (Arrival timestamp logged)
  6. `IN_PROGRESS` (Active 1-Hour Labour timer)
  7. `COMPLETED` (Signed off with auto-generated PDF audit report)
* **Live 60-Minute Labour Timer**: Interactive countdown with audio-visual alerts at 45, 55, and 60 minutes.
* **Media Verification**: Upload on-site photo and video proof of completed work.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend UI** | React 18, Vite 6, TailwindCSS |
| **Icons & Design** | Lucide React, Glassmorphism, Responsive Flex |
| **PDF Engine** | Native Vector `jsPDF` (window.jspdf.jsPDF) |
| **Backend API** | Node.js, Express.js |
| **Database & ORM** | SQLite (`prisma/dev.db`), Prisma ORM |
| **Mobile Integration** | Capacitor JS (Android APK / iOS Ready) |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: v18.0.0 or higher
* **npm**: v9.0.0 or higher

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/your-username/sa-emergency-cleaning.git
cd sa-emergency-cleaning
npm install
```

### 2. Database Initialization
Ensure Prisma DB is synced:
```bash
npx prisma db push
node prisma/seed.js
```

### 3. Running Development Servers

Start the Node Express backend server (Port `5000`):
```bash
node server.js
```

In a separate terminal, start the Vite frontend development server (Port `3000`):
```bash
npm run dev
```

Open your browser at [http://localhost:3000](http://localhost:3000).

---

## 🛡️ Input Validation Rules

The application enforces strict client-side and server-side validation:
* **Business ABN**: Validated strictly to **11 numeric digits**.
* **Phone Numbers**: Validated to Australian phone format (8–12 digits).
* **Adelaide Location Restriction**: Street addresses must be within Adelaide, SA (postcodes 5000–5199).
* **Incident Descriptions**: Minimum 5 characters required.

---

## 📄 License & Ownership
© 2026 **SA Emergency Cleaning Pty Ltd**. All Rights Reserved.

# Implementation Plan – SA Commercial Cleaning Services Emergency Cleaning Membership App (Microsoft Azure Stack)

Architectural plan, technical specifications, project map, and development roadmap for building the **SA Commercial Cleaning Services Pty Ltd Emergency Cleaning Membership App** across **Web, Android, and iOS** using **Microsoft Technologies & Microsoft Azure Cloud**.

## Comprehensive Specification Deliverables

All system specification documents are saved in the project's `docs` directory:

1. 🗺️ **[Project Map & Architecture Blueprint](file:///c:/Users/ADMIN/Desktop/SA%20Emergency%20Cleaning/docs/project_map.md)**  
   *Contains multi-platform system architecture diagram, role capability matrix, request state machine, component breakdown, and information architecture.*

2. ⚙️ **[Project Technology Specification Document](file:///c:/Users/ADMIN/Desktop/SA%20Emergency%20Cleaning/docs/tech_spec.md)**  
   *Contains Microsoft Azure architecture (**Azure App Service, Azure Database for PostgreSQL, Azure Blob Storage, Azure Notification Hubs, Azure Functions**), cross-platform tech stack (**Next.js 14 + Capacitor for Web, Android & iOS**), Australian bank account subscription architecture (**PayTo & BECS**), dynamic config engine schema, SLA/timer logic algorithms, API contracts, and PDF generator pipeline.*

3. 📅 **[Master Development Plan & Execution Roadmap](file:///c:/Users/ADMIN/Desktop/SA%20Emergency%20Cleaning/docs/development_plan.md)**  
   *Contains phased roadmap Gantt chart, 9-sprint schedule, Work Breakdown Structure (WBS), risk matrix, and verification plan.*

---

## Finalized Architecture & Microsoft Azure Cloud Choices

> [!IMPORTANT]
> **Key Infrastructure Decisions (Microsoft Stack)**:
> 1. **Hosting & Compute**: **Microsoft Azure App Service** & **Azure Static Web Apps** hosted in Australian data centers (Australia East / Sydney, Australia Southeast / Melbourne) for low latency and high availability.
> 2. **Database**: **Azure Database for PostgreSQL - Flexible Server** combined with Prisma ORM for managed, scalable relational storage.
> 3. **Media Storage**: **Azure Blob Storage** for encrypted storage of before/after photos, incident videos, and generated PDF reports.
> 4. **Push Notifications**: **Azure Notification Hubs** for centralized push alert broadcasts to Android devices (FCM) and iOS devices (APNs).
> 5. **Real-time & Timers**: **Azure Web PubSub / SignalR** for live job status & SLA countdown clocks, paired with **Azure Functions** for serverless background 45m/55m/60m timer warnings.
> 6. **Australian Bank Subscriptions**: **PayTo & BECS Direct Debit** integrated via Stripe AU / Zepto.
> 7. **Zero-Code Dynamic Configuration Studio**: All rates, plans, allowances, categories, and policy disclaimers editable live via Admin Studio.

---

## Proposed Technical Implementation Phases

### Core Component Overview

#### [NEW] [project_map.md](file:///c:/Users/ADMIN/Desktop/SA%20Emergency%20Cleaning/docs/project_map.md)
System architecture, user roles, state machine, and component maps.

#### [NEW] [tech_spec.md](file:///c:/Users/ADMIN/Desktop/SA%20Emergency%20Cleaning/docs/tech_spec.md)
Microsoft Azure cloud stack, PayTo bank subscription engine, Azure Notification Hubs push alerts, relational schemas, ERD, dynamic JSON configuration engine, SLA timer algorithms, and PDF generation pipeline.

#### [NEW] [development_plan.md](file:///c:/Users/ADMIN/Desktop/SA%20Emergency%20Cleaning/docs/development_plan.md)
Master development roadmap, sprint breakdown, WBS task matrix, risk mitigation, and cross-platform mobile testing matrix.

---

## Verification Plan

### Automated Testing
- Unit tests for call-out allowances, overage fee calculations, PayTo mandate validation, and 6-month tenure verification logic.
- Integration tests for status transitions across all 11 primary job states (`Submitted` $\rightarrow$ `Closed`).
- Cross-platform E2E tests for Customer Request Submission, Admin SLA tracking, Technician timer updates, and PDF Service Report generation.

### Manual Verification
- Testing multi-site account creation and individual site dispatch.
- Verifying push alerts via Azure Notification Hubs on Android and iOS builds.
- Simulating hotline request entry by admin and emailed media attachment.
- Verifying zero-code rate changes in Admin Configuration Studio.

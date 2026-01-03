# Digital Ticket Validation – Security Analysis
**Author:** Douglas Celestino  
**Date:** 2026-01-03  
**Context:** Academic exchange at SDU (Denmark)  
**Repository:** https://github.com/DouglasCelestino/odense_ticket  
**Demo:** https://douglascelestino.github.io/odense_ticket/  

---

## 1. Executive Summary
This report presents an academic security analysis of **visual-only digital ticket validation** in proof-of-payment public transport models.  
The main risk identified is that, without a **machine-verifiable authenticity mechanism**, tickets can be visually replicated, enabling replay/replication scenarios.  
The report proposes practical mitigations, prioritizing **low-friction** approaches such as **cryptographically signed QR codes** with offline verification for inspectors.

---

## 2. System Context
### 2.1 Proof-of-Payment Model
In proof-of-payment systems, passengers purchase tickets and may be checked by inspectors at random intervals. The system relies on compliance and occasional inspection rather than gated access.

### 2.2 Assumed Validation Method
This analysis focuses on scenarios where ticket validity is primarily determined through **visual inspection** on a passenger’s device.

---

## 3. Scope and Methodology
### 3.1 Scope
- Visual-only validation risk assessment
- UI proof-of-concept for demonstration
- Threat modeling and impact analysis
- High-level recommendations

### 3.2 Out of Scope
- Backend penetration testing
- Real-world exploitation
- Automated bypass techniques
- Publication of sensitive details

### 3.3 Methodology
- Threat modeling (attacker, goals, capabilities)
- Risk analysis (likelihood x impact)
- Security-by-design recommendations

---

## 4. Threat Model
### 4.1 Attacker Profile
A motivated user with basic web knowledge (HTML/CSS/JS) capable of reproducing interfaces and displaying them on a mobile device.

### 4.2 Assets to Protect
- Fare revenue integrity
- Trust in the ticketing system
- Operational efficiency of inspection

### 4.3 Attack Surface
- Ticket UI presentation layer
- Lack of machine-verifiable proof of authenticity

---

## 5. Key Findings
### Finding 1 — Visual-only validation enables replication risk
When authenticity is determined purely by appearance, an attacker can reproduce the interface with dynamic timestamps.

### Finding 2 — Lack of verifiable authenticity prevents objective checks
Without a signed token/QR, inspectors cannot reliably distinguish legitimate tickets from replicas.

### Finding 3 — Fraud can scale if knowledge spreads
If replication becomes widely known, the system may face increased fare evasion and require higher enforcement costs.

---

## 6. Impact Assessment
### Operational Impact
- Increased fare evasion probability
- Increased inspection workload
- Potential policy pressure toward stricter gatekeeping

### Trust and Reputation Impact
- Reduced perceived fairness among compliant users
- Reputational damage if publicly exposed without mitigation

---

## 7. Recommendations (Security-by-Design)
### 7.1 Recommended Solution (Best trade-off)
**Signed QR code / token** embedded in the ticket:
- Generated server-side
- Digitally signed (public/private key)
- Verifiable offline via inspector app

### 7.2 Additional Hardening
- Short-lived rotating tokens (2–5 minutes)
- Replay resistance (nonce / unique ticket ID)
- Optional online verification when connectivity is available

### 7.3 UX Considerations
- Maintain low-friction boarding
- Ensure offline validation for inspectors
- Keep latency near-zero

---

## 8. Ethics & Responsible Disclosure
This work follows responsible disclosure principles:
- No real-world misuse
- No sensitive details published
- High-level analysis and recommendations only

See: `docs/responsible-disclosure.md`

---

## 9. Conclusion
Visual-only validation is efficient but introduces replication risk. A minimal, practical improvement is to introduce **cryptographically verifiable proof**, preferably via **offline-verifiable signed QR codes**, preserving user experience while improving robustness.

---

## 10. Appendix
### A. Repository Structure
- `src/` – UI proof-of-concept
- `docs/` – disclosure and report

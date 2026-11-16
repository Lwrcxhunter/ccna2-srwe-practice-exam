# Cisco NetAcad CCNA 2 v7.0 (SRWE) Practice Exam Suite

An authentic, interactive Cisco Networking Academy-style practice examination suite built for studying the **CCNA 2 v7.0: Switching, Routing, and Wireless Essentials (SRWE) Final Exam**.

---

## 🌐 Live Online Access

You can access and study the entire exam suite from any phone, tablet, laptop, or desktop with no installation required:

| Portal / Module | Live URL | Details |
| :--- | :--- | :--- |
| **Exam Hub Portal** | [https://lwrcxhunter.github.io/ccna2-srwe-practice-exam/](https://lwrcxhunter.github.io/ccna2-srwe-practice-exam/) | Central launchpad for all practice modules |
| **Complete Merged Exam** | [https://lwrcxhunter.github.io/ccna2-srwe-practice-exam/full/index.html](https://lwrcxhunter.github.io/ccna2-srwe-practice-exam/full/index.html) | All 172 questions (Items 1–174) with shuffling & grading |
| **Batch 1 Practice** | [https://lwrcxhunter.github.io/ccna2-srwe-practice-exam/app/index.html](https://lwrcxhunter.github.io/ccna2-srwe-practice-exam/app/index.html) | 88 questions (Items 1–89) |
| **Batch 2 Practice** | [https://lwrcxhunter.github.io/ccna2-srwe-practice-exam/batch2/index.html](https://lwrcxhunter.github.io/ccna2-srwe-practice-exam/batch2/index.html) | 84 questions (Items 90–174) |

- **GitHub Repository**: [https://github.com/Lwrcxhunter/ccna2-srwe-practice-exam](https://github.com/Lwrcxhunter/ccna2-srwe-practice-exam)

---

## 📂 Local Suite Structure

| Component | Path | Coverage | Questions | Exhibits |
| :--- | :--- | :--- | :--- | :--- |
| **Exam Hub Portal** | [index.html](file:///c:/Projects/Final%20exam/index.html) | Central navigation for both batches | — | — |
| **Complete Exam** | [full/index.html](file:///c:/Projects/Final%20exam/full/index.html) | All 172 questions combined | 172 | 49 |
| **Batch 1 Exam** | [app/index.html](file:///c:/Projects/Final%20exam/app/index.html) | Items 1 through 89 (Switching & Foundations) | 88 | 33 |
| **Batch 2 Exam** | [batch2/index.html](file:///c:/Projects/Final%20exam/batch2/index.html) | Items 90 through 174 (Routing, DHCP, HSRP, WLANs) | 84 | 17 |

---

## 🌟 Key Features

1. **Authentic NetAcad UI/UX**:
   - Clean Cisco Networking Academy branding, colors, typography, and layout.
   - Question cards with Cisco terminal/code styling for CLI commands and IP addresses.
   - Dark Mode / Light Mode toggle.

2. **Full Question Types Supported**:
   - **Multiple Choice (Single Selection)**: Cisco styled radio buttons with hotkeys (`1`–`9`).
   - **Multiple Selection**: Checkboxes with real-time requirement indicator (e.g., *Selected: 2 of 2*).
   - **Matching / Drag & Drop**: Authentic NetAcad drag & drop interface with click-to-match support (DHCP messages, HSRP failover stages, switch boot sequence, VLAN types, etc.).

3. **High-Resolution Exhibits & Topologies**:
   - All 49 original network topologies and exhibits extracted with native quality.
   - **Exhibit Zoom Lightbox**: Click any exhibit to zoom in/out with 100% clarity.

4. **Instant Automated Grading & Rich Explanations**:
   - **Study Mode**: Immediately upon clicking **Submit Answer**, you receive:
     - Clear visual feedback banner: Correct (Green ✓), Incorrect (Red ✗), or Partially Correct (Amber ⚠).
     - Choice breakdown: Correct answers highlighted in green, chosen incorrect options in red, missed answers with dashed outlines.
     - Full Cisco curriculum explanation with exact **Topic References** (e.g., Topic 7.1.3, Topic 8.3.3, Topic 9.1.3, Topic 11.2.2).
   - **Exam Mode**: Practice under timed test conditions without immediate answers until you finish.

5. **Advanced Study & Shuffling Controls**:
   - 🔀 **Shuffle Questions**: Randomize question order with one click.
   - 📋 **Default Order**: Restore original sequential order.
   - 🎲 **Shuffle Choices**: Randomize option order within each question with preserved grading keys.
   - 🎯 **Review Missed Only**: Filter to drill and practice only the questions you answered incorrectly.
   - ⚑ **Flag for Review**: Bookmark difficult questions to revisit.

6. **Question Palette Grid**:
   - Full drawer to jump directly to any question.
   - Color-coded: Current (Blue), Unanswered (Gray), Correct (Green), Incorrect (Red), Flagged (Yellow ⚑).
   - Filter tabs: All, Unanswered, Correct, Incorrect, Flagged.

7. **Independent Persistence & Performance Summary**:
   - Batch 1, Batch 2, and the Full Exam maintain completely separate `localStorage` keys so your progress never conflicts across exams.
   - Performance Summary modal with score percentage, pass/fail benchmark (≥70%), elapsed time, and retry button.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `1` – `9` | Select Choice Option 1 to 9 |
| `Enter` | **Submit Answer** (or proceed to Next Question if already submitted) |
| `←` (Left Arrow) | Previous Question |
| `→` (Right Arrow) | Next Question |
| `F` | Flag / Unflag Question |
| `S` | Shuffle Questions |
| `Esc` | Close any open modal / Lightbox |

---

## 🚀 Local Launch Options

### Option 1: Standalone Direct Launch (No Server Needed)
- **Full Exam (172 Questions)**: Double-click `run_full_exam.bat` or open [full/index.html](file:///c:/Projects/Final%20exam/full/index.html).
- **Central Portal Hub**: Double-click `run_exam_hub.bat` or open [index.html](file:///c:/Projects/Final%20exam/index.html).
- **Batch 1 (Items 1–89)**: Double-click `run_batch1_exam.bat` or open [app/index.html](file:///c:/Projects/Final%20exam/app/index.html).
- **Batch 2 (Items 90–174)**: Double-click `run_batch2_exam.bat` or open [batch2/index.html](file:///c:/Projects/Final%20exam/batch2/index.html).

### Option 2: Local HTTP Server (Node.js)
Open PowerShell or Terminal in this directory and run:
```bash
node server.js
```
Then visit:
- **Exam Hub**: `http://localhost:3000/index.html`
- **Full Exam**: `http://localhost:3000/full/index.html`
- **Batch 1**: `http://localhost:3000/app/index.html`
- **Batch 2**: `http://localhost:3000/batch2/index.html`

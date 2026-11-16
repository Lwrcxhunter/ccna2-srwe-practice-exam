# Cisco NetAcad CCNA 2 v7.0 (SRWE) Practice Exam Suite

An authentic, interactive Cisco Networking Academy-style practice examination suite built for studying the **CCNA 2 v7.0: Switching, Routing, and Wireless Essentials (SRWE) Final Exam**.

---

## 📂 Suite Structure

The exam question bank is organized into two clean, independent practice applications plus a central hub:

| Component | Path | Coverage | Questions | Exhibits |
| :--- | :--- | :--- | :--- | :--- |
| **Exam Hub Portal** | [index.html](file:///c:/Projects/Final%20exam/index.html) | Central navigation for both batches | — | — |
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
   - All 50 original network topologies and exhibits extracted with native quality.
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
   - 🎲 **Shuffle Choices**: Randomize option order within each question with preserved grading.
   - 🎯 **Review Missed Only**: Filter to drill and practice only the questions you answered incorrectly.
   - ⚑ **Flag for Review**: Bookmark difficult questions to revisit.

6. **Question Palette Grid**:
   - Full drawer to jump directly to any question.
   - Color-coded: Current (Blue), Unanswered (Gray), Correct (Green), Incorrect (Red), Flagged (Yellow ⚑).
   - Filter tabs: All, Unanswered, Correct, Incorrect, Flagged.

7. **Independent Persistence & Performance Summary**:
   - Batch 1 and Batch 2 maintain completely separate `localStorage` keys so your progress, flags, and scores in one batch never interfere with the other.
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

## 🚀 Quick Launch Options

### Option 1: Standalone Direct Launch (No Server Needed)
- **Central Portal Hub**: Double-click `run_exam_hub.bat` or open [index.html](file:///c:/Projects/Final%20exam/index.html).
- **Batch 1 (Items 1–89)**: Double-click `run_exam.bat` or open [app/index.html](file:///c:/Projects/Final%20exam/app/index.html).
- **Batch 2 (Items 90–174)**: Double-click `run_batch2_exam.bat` or open [batch2/index.html](file:///c:/Projects/Final%20exam/batch2/index.html).

### Option 2: Local HTTP Server (Node.js)
Open PowerShell or Terminal in this directory and run:
```bash
node server.js
```
Then visit:
- **Exam Hub**: `http://localhost:3000/index.html`
- **Batch 1**: `http://localhost:3000/app/index.html`
- **Batch 2**: `http://localhost:3000/batch2/index.html`

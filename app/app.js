/**
 * Cisco NetAcad CCNA 2 v7.0 (SRWE) Practice Exam Engine
 * Handles items 1-89: Single choice, Multiple selection, Matching, Exhibits, Feedback & Shuffling
 */

(function () {
  'use strict';

  // --- Constants & Config ---
  const STORAGE_KEY = 'netacad_ccna2_exam_v1';
  const PASSING_BENCHMARK = 70; // 70% passing threshold for NetAcad

  // Master questions reference (from data/questions.js)
  const masterQuestions = (typeof EXAM_QUESTIONS !== 'undefined' && Array.isArray(EXAM_QUESTIONS))
    ? EXAM_QUESTIONS
    : [];

  // --- State ---
  let state = {
    questions: [...masterQuestions], // Current active list (can be shuffled or filtered)
    currentIndex: 0,
    userAnswers: {}, // { [qId]: { selected: [], placements: {}, isSubmitted: bool, isCorrect: bool } }
    flagged: new Set(),
    mode: 'study', // 'study' or 'exam'
    shuffleChoices: false,
    choicePermutations: {}, // { [qId]: [originalIndices] }
    elapsedSeconds: 0,
    timerPaused: false,
    activeFilter: 'all',
    theme: 'light',
    matchingSelectedTile: null // For click-to-match workflow
  };

  let timerInterval = null;
  let lightboxZoom = 1.0;

  // --- DOM Elements ---
  const el = {
    // Header
    btnStudyMode: document.getElementById('btnStudyMode'),
    btnExamMode: document.getElementById('btnExamMode'),
    timerBox: document.getElementById('timerBox'),
    timerDisplay: document.getElementById('timerDisplay'),
    scorePill: document.getElementById('scorePill'),
    scoreDisplay: document.getElementById('scoreDisplay'),
    scorePctDisplay: document.getElementById('scorePctDisplay'),
    btnOpenGrid: document.getElementById('btnOpenGrid'),
    answeredCountBadge: document.getElementById('answeredCountBadge'),
    btnThemeToggle: document.getElementById('btnThemeToggle'),
    themeIconSun: document.getElementById('themeIconSun'),
    themeIconMoon: document.getElementById('themeIconMoon'),

    // Toolbar
    btnShuffleQuestions: document.getElementById('btnShuffleQuestions'),
    btnResetOrder: document.getElementById('btnResetOrder'),
    chkShuffleChoices: document.getElementById('chkShuffleChoices'),
    btnFilterMissed: document.getElementById('btnFilterMissed'),
    missedCountBadge: document.getElementById('missedCountBadge'),
    btnFlagQuestion: document.getElementById('btnFlagQuestion'),
    flagBtnText: document.getElementById('flagBtnText'),
    btnFinishExam: document.getElementById('btnFinishExam'),
    progressBarFill: document.getElementById('progressBarFill'),

    // Question Card
    qIndexPill: document.getElementById('qIndexPill'),
    qOrigId: document.getElementById('qOrigId'),
    qTypeBadge: document.getElementById('qTypeBadge'),
    qPrompt: document.getElementById('qPrompt'),
    qExhibitContainer: document.getElementById('qExhibitContainer'),
    qExhibitImg: document.getElementById('qExhibitImg'),
    btnZoomExhibit: document.getElementById('btnZoomExhibit'),
    qAnswersContainer: document.getElementById('qAnswersContainer'),

    // Feedback
    feedbackCard: document.getElementById('feedbackCard'),
    feedbackBanner: document.getElementById('feedbackBanner'),
    feedbackIcon: document.getElementById('feedbackIcon'),
    feedbackStatusText: document.getElementById('feedbackStatusText'),
    explanationBody: document.getElementById('explanationBody'),
    btnFeedbackNext: document.getElementById('btnFeedbackNext'),

    // Navigation
    btnPrev: document.getElementById('btnPrev'),
    btnSubmit: document.getElementById('btnSubmit'),
    btnResetQuestion: document.getElementById('btnResetQuestion'),
    btnNext: document.getElementById('btnNext'),

    // Palette Grid Modal
    gridModal: document.getElementById('gridModal'),
    btnCloseGrid: document.getElementById('btnCloseGrid'),
    btnCloseGridBottom: document.getElementById('btnCloseGridBottom'),
    paletteGrid: document.getElementById('paletteGrid'),
    btnResetAllProgress: document.getElementById('btnResetAllProgress'),
    tabCountAll: document.getElementById('tabCountAll'),
    tabCountUnanswered: document.getElementById('tabCountUnanswered'),
    tabCountCorrect: document.getElementById('tabCountCorrect'),
    tabCountIncorrect: document.getElementById('tabCountIncorrect'),
    tabCountFlagged: document.getElementById('tabCountFlagged'),

    // Lightbox Modal
    lightboxModal: document.getElementById('lightboxModal'),
    lightboxImg: document.getElementById('lightboxImg'),
    lightboxTitle: document.getElementById('lightboxTitle'),
    btnZoomIn: document.getElementById('btnZoomIn'),
    btnZoomOut: document.getElementById('btnZoomOut'),
    btnZoomReset: document.getElementById('btnZoomReset'),
    btnCloseLightbox: document.getElementById('btnCloseLightbox'),

    // Summary Modal
    summaryModal: document.getElementById('summaryModal'),
    btnCloseSummary: document.getElementById('btnCloseSummary'),
    summaryCircleBar: document.getElementById('summaryCircleBar'),
    summaryPct: document.getElementById('summaryPct'),
    summaryPassStatus: document.getElementById('summaryPassStatus'),
    summaryTotal: document.getElementById('summaryTotal'),
    summaryAnswered: document.getElementById('summaryAnswered'),
    summaryCorrect: document.getElementById('summaryCorrect'),
    summaryIncorrect: document.getElementById('summaryIncorrect'),
    summaryTime: document.getElementById('summaryTime'),
    btnRetryMissed: document.getElementById('btnRetryMissed'),
    btnRestartAll: document.getElementById('btnRestartAll')
  };

  // --- Helper Functions ---
  function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }

  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // --- LocalStorage Persistence ---
  function saveState() {
    try {
      const data = {
        userAnswers: state.userAnswers,
        flagged: Array.from(state.flagged),
        elapsedSeconds: state.elapsedSeconds,
        shuffleChoices: state.shuffleChoices,
        mode: state.mode,
        theme: state.theme
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save exam progress to localStorage', e);
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (data.userAnswers) state.userAnswers = data.userAnswers;
      if (Array.isArray(data.flagged)) state.flagged = new Set(data.flagged);
      if (typeof data.elapsedSeconds === 'number') state.elapsedSeconds = data.elapsedSeconds;
      if (typeof data.shuffleChoices === 'boolean') {
        state.shuffleChoices = data.shuffleChoices;
        if (el.chkShuffleChoices) el.chkShuffleChoices.checked = data.shuffleChoices;
      }
      if (data.mode) setMode(data.mode);
      if (data.theme) setTheme(data.theme);
    } catch (e) {
      console.warn('Failed to parse saved exam state', e);
    }
  }

  // --- Theme Toggle ---
  function setTheme(theme) {
    state.theme = theme;
    if (theme === 'dark') {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
      el.themeIconSun.classList.add('hidden');
      el.themeIconMoon.classList.remove('hidden');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
      el.themeIconMoon.classList.add('hidden');
      el.themeIconSun.classList.remove('hidden');
    }
    saveState();
  }

  function toggleTheme() {
    setTheme(state.theme === 'light' ? 'dark' : 'light');
  }

  // --- Timer ---
  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!state.timerPaused) {
        state.elapsedSeconds++;
        el.timerDisplay.textContent = formatTime(state.elapsedSeconds);
      }
    }, 1000);
  }

  function toggleTimerPause() {
    state.timerPaused = !state.timerPaused;
    el.timerBox.style.opacity = state.timerPaused ? '0.5' : '1';
    el.timerBox.title = state.timerPaused ? 'Timer Paused (Click to Resume)' : 'Click to Pause Timer';
  }

  // --- Modes (Study vs Exam) ---
  function setMode(newMode) {
    state.mode = newMode;
    if (newMode === 'study') {
      el.btnStudyMode.classList.add('active');
      el.btnExamMode.classList.remove('active');
      el.scorePill.classList.remove('hidden');
    } else {
      el.btnExamMode.classList.add('active');
      el.btnStudyMode.classList.remove('active');
      el.scorePill.classList.add('hidden');
    }
    renderCurrentQuestion();
    updateStats();
    saveState();
  }

  // --- Question Permutations (Choices Shuffling) ---
  function getOptionIndices(q) {
    if (!state.shuffleChoices || q.type === 'matching') {
      return q.options.map((_, i) => i);
    }
    if (!state.choicePermutations[q.id]) {
      const indices = q.options.map((_, i) => i);
      state.choicePermutations[q.id] = shuffleArray(indices);
    }
    return state.choicePermutations[q.id];
  }

  // --- Current Question Getter ---
  function getCurrentQuestion() {
    return state.questions[state.currentIndex];
  }

  // --- Render Question ---
  function renderCurrentQuestion() {
    const q = getCurrentQuestion();
    if (!q) return;

    // Header Meta
    el.qIndexPill.textContent = `Item ${state.currentIndex + 1} of ${state.questions.length}`;
    el.qOrigId.textContent = `(NetAcad Item #${q.number})`;

    let typeText = 'Multiple Choice';
    if (q.type === 'multiple') {
      typeText = `Multiple Selection (Select ${q.required_selections})`;
    } else if (q.type === 'matching') {
      typeText = 'Match Type (Drag & Drop or Click to Match)';
    }
    el.qTypeBadge.textContent = typeText;

    // Prompt with Code Formatting
    el.qPrompt.innerHTML = formatPromptText(q.question);

    // Exhibit
    if (q.image) {
      el.qExhibitContainer.classList.remove('hidden');
      el.qExhibitImg.src = q.image;
      el.qExhibitImg.alt = `Exhibit for Question ${q.number}`;
    } else {
      el.qExhibitContainer.classList.add('hidden');
    }

    // Flag Button State
    const isFlagged = state.flagged.has(q.id);
    if (isFlagged) {
      el.btnFlagQuestion.classList.add('flagged');
      el.flagBtnText.textContent = 'Flagged ⚑';
    } else {
      el.btnFlagQuestion.classList.remove('flagged');
      el.flagBtnText.textContent = 'Flag Item';
    }

    // Answers Area
    const ansState = state.userAnswers[q.id] || {
      selected: [],
      placements: {},
      isSubmitted: false,
      isCorrect: false
    };

    if (q.type === 'matching') {
      renderMatchingQuestion(q, ansState);
    } else {
      renderStandardOptions(q, ansState);
    }

    // Feedback Card
    if (state.mode === 'study' && ansState.isSubmitted) {
      renderFeedback(q, ansState);
    } else {
      el.feedbackCard.classList.add('hidden');
    }

    // Navigation Buttons State
    el.btnPrev.disabled = state.currentIndex === 0;
    el.btnNext.disabled = state.currentIndex === state.questions.length - 1;

    // Submit Button state
    if (ansState.isSubmitted && state.mode === 'study') {
      el.btnSubmit.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
        <span>Next Item</span>
      `;
    } else {
      el.btnSubmit.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        <span>${state.mode === 'study' ? 'Submit Answer' : 'Save Answer'}</span>
      `;
    }

    // Update Progress Bar
    const pct = ((state.currentIndex + 1) / state.questions.length) * 100;
    el.progressBarFill.style.width = `${pct}%`;
  }

  // --- Format Prompt Text (Detect Terminal commands & CLI logs) ---
  function formatPromptText(text) {
    if (!text) return '';
    // Escape HTML first
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Format common Cisco commands inside text
    escaped = escaped.replace(/(ip route [0-9\.\/]+ [0-9\.\/]+ [^\s\?]+)/g, '<code>$1</code>');
    escaped = escaped.replace(/(ipv6 route [^\s\?]+ [^\s\?]+)/g, '<code>$1</code>');
    escaped = escaped.replace(/(show [a-z0-9\-]+ [a-z0-9\-]+)/gi, '<code>$1</code>');
    escaped = escaped.replace(/(vlan\.dat|vlan \d+|no ip route|no switchport|spanning-tree portfast|macof)/gi, '<code>$1</code>');

    return escaped;
  }

  // --- Render Standard Choices (Single or Multiple) ---
  function renderStandardOptions(q, ansState) {
    el.qAnswersContainer.innerHTML = '';

    if (q.type === 'multiple') {
      const hint = document.createElement('div');
      hint.className = 'select-hint';
      const selCount = ansState.selected.length;
      hint.textContent = `Select ${q.required_selections} options (Selected: ${selCount} of ${q.required_selections})`;
      el.qAnswersContainer.appendChild(hint);
    }

    const optIndices = getOptionIndices(q);
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    optIndices.forEach((origIdx, displayIdx) => {
      const optText = q.options[origIdx];
      const isSelected = ansState.selected.includes(origIdx);
      const isCorrectOption = q.correct.includes(origIdx);

      const item = document.createElement('div');
      item.className = 'choice-item';
      if (isSelected) item.classList.add('selected');

      // Post-submission styling in Study Mode
      if (ansState.isSubmitted && state.mode === 'study') {
        item.classList.add('locked');
        if (isSelected && isCorrectOption) {
          item.classList.add('correct-revealed');
        } else if (isSelected && !isCorrectOption) {
          item.classList.add('incorrect-revealed');
        } else if (!isSelected && isCorrectOption) {
          item.classList.add('missed-correct');
        }
      }

      // Letter Badge
      const letterSpan = document.createElement('div');
      letterSpan.className = 'choice-letter';
      letterSpan.textContent = letters[displayIdx] || (displayIdx + 1);

      // Checkbox or Radio control
      const ctrlDiv = document.createElement('div');
      ctrlDiv.className = 'choice-control';
      const input = document.createElement('input');
      input.type = q.type === 'multiple' ? 'checkbox' : 'radio';
      input.name = `question_${q.id}`;
      input.checked = isSelected;
      input.disabled = ansState.isSubmitted && state.mode === 'study';
      ctrlDiv.appendChild(input);

      // Option text
      const textDiv = document.createElement('div');
      textDiv.className = 'choice-text';
      // Format code-like lines in options
      if (optText.includes('(config') || optText.includes('ip route') || optText.includes('ipv6 route')) {
        textDiv.innerHTML = `<code>${optText}</code>`;
      } else {
        textDiv.textContent = optText;
      }

      item.appendChild(letterSpan);
      item.appendChild(ctrlDiv);
      item.appendChild(textDiv);

      // Post-submit status icon
      if (ansState.isSubmitted && state.mode === 'study') {
        const iconSpan = document.createElement('div');
        iconSpan.className = 'choice-status-icon';
        if (isSelected && isCorrectOption) {
          iconSpan.className += ' correct';
          iconSpan.textContent = '✓';
        } else if (isSelected && !isCorrectOption) {
          iconSpan.className += ' incorrect';
          iconSpan.textContent = '✗';
        } else if (!isSelected && isCorrectOption) {
          iconSpan.className += ' correct';
          iconSpan.textContent = '✓ (Correct Answer)';
        }
        item.appendChild(iconSpan);
      }

      // Click handler
      item.addEventListener('click', (e) => {
        if (ansState.isSubmitted && state.mode === 'study') return;
        toggleChoiceSelection(origIdx, q.type, q.required_selections);
      });

      el.qAnswersContainer.appendChild(item);
    });
  }

  // --- Toggle Choice Selection ---
  function toggleChoiceSelection(optIdx, qType, maxReq) {
    const q = getCurrentQuestion();
    if (!state.userAnswers[q.id]) {
      state.userAnswers[q.id] = { selected: [], placements: {}, isSubmitted: false, isCorrect: false };
    }
    const current = state.userAnswers[q.id];

    if (qType === 'single') {
      current.selected = [optIdx];
    } else {
      // Multiple selection
      const existsIdx = current.selected.indexOf(optIdx);
      if (existsIdx > -1) {
        current.selected.splice(existsIdx, 1);
      } else {
        if (current.selected.length < maxReq) {
          current.selected.push(optIdx);
        } else {
          // If already reached max, replace the first one selected
          current.selected.shift();
          current.selected.push(optIdx);
        }
      }
    }

    renderCurrentQuestion();
    saveState();
  }

  // --- Render Matching Question ---
  function renderMatchingQuestion(q, ansState) {
    el.qAnswersContainer.innerHTML = '';

    const board = document.createElement('div');
    board.className = 'matching-board';

    // Left Column: Source Items
    const leftCol = document.createElement('div');
    leftCol.className = 'match-column';
    const leftHeader = document.createElement('div');
    leftHeader.className = 'match-column-header';
    leftHeader.textContent = 'Options / Items to Match';
    leftCol.appendChild(leftHeader);

    const placedItems = new Set(Object.keys(ansState.placements || {}));

    q.pairs.forEach((pair, idx) => {
      const itemTile = document.createElement('div');
      itemTile.className = 'match-source-item';
      itemTile.textContent = pair.item;
      itemTile.draggable = !ansState.isSubmitted || state.mode !== 'study';
      itemTile.dataset.itemText = pair.item;

      if (placedItems.has(pair.item)) {
        itemTile.classList.add('placed');
      }

      if (state.matchingSelectedTile === pair.item) {
        itemTile.classList.add('active-selection');
      }

      // Drag events
      itemTile.addEventListener('dragstart', (e) => {
        if (ansState.isSubmitted && state.mode === 'study') return;
        e.dataTransfer.setData('text/plain', pair.item);
        itemTile.classList.add('active-selection');
      });

      itemTile.addEventListener('dragend', () => {
        itemTile.classList.remove('active-selection');
      });

      // Click to select
      itemTile.addEventListener('click', () => {
        if (ansState.isSubmitted && state.mode === 'study') return;
        if (state.matchingSelectedTile === pair.item) {
          state.matchingSelectedTile = null;
        } else {
          state.matchingSelectedTile = pair.item;
        }
        renderCurrentQuestion();
      });

      leftCol.appendChild(itemTile);
    });

    // Right Column: Drop Targets
    const rightCol = document.createElement('div');
    rightCol.className = 'match-column';
    const rightHeader = document.createElement('div');
    rightHeader.className = 'match-column-header';
    rightHeader.textContent = 'Target Categories';
    rightCol.appendChild(rightHeader);

    // Group targets or display unique targets
    const targetList = q.targets || [...new Set(q.pairs.map(p => p.target))];

    targetList.forEach((targetName) => {
      const slot = document.createElement('div');
      slot.className = 'match-target-slot';
      slot.dataset.targetName = targetName;

      const label = document.createElement('div');
      label.className = 'target-label';
      label.textContent = targetName;
      slot.appendChild(label);

      // Find items placed into this target
      const slottedItems = Object.entries(ansState.placements || {})
        .filter(([_, t]) => t === targetName)
        .map(([itm]) => itm);

      slottedItems.forEach((itm) => {
        const itemBox = document.createElement('div');
        itemBox.className = 'slotted-item';
        itemBox.textContent = itm;

        if (!ansState.isSubmitted || state.mode !== 'study') {
          const rmBtn = document.createElement('button');
          rmBtn.className = 'remove-tile-btn';
          rmBtn.textContent = '✕';
          rmBtn.title = 'Remove item';
          rmBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeMatchingPlacement(itm);
          });
          itemBox.appendChild(rmBtn);
        }

        slot.appendChild(itemBox);
      });

      // Post-submission feedback for matching
      if (ansState.isSubmitted && state.mode === 'study') {
        // Check if all expected items for this target were placed here
        const expectedItems = q.pairs.filter(p => p.target === targetName).map(p => p.item);
        const correctPlacements = slottedItems.filter(itm => expectedItems.includes(itm));
        const hasWrong = slottedItems.some(itm => !expectedItems.includes(itm));
        const allCorrect = correctPlacements.length === expectedItems.length && !hasWrong;

        if (allCorrect) {
          slot.classList.add('result-correct');
        } else {
          slot.classList.add('result-incorrect');
          const note = document.createElement('div');
          note.className = 'matching-expected-note';
          note.textContent = `Expected: ${expectedItems.join('; ')}`;
          slot.appendChild(note);
        }
      }

      // Drag over / drop listeners
      slot.addEventListener('dragover', (e) => {
        e.preventDefault();
        slot.classList.add('drag-over');
      });

      slot.addEventListener('dragleave', () => {
        slot.classList.remove('drag-over');
      });

      slot.addEventListener('drop', (e) => {
        e.preventDefault();
        slot.classList.remove('drag-over');
        if (ansState.isSubmitted && state.mode === 'study') return;
        const itm = e.dataTransfer.getData('text/plain');
        if (itm) placeMatchingItem(itm, targetName);
      });

      // Click to drop (if a tile is selected)
      slot.addEventListener('click', () => {
        if (ansState.isSubmitted && state.mode === 'study') return;
        if (state.matchingSelectedTile) {
          placeMatchingItem(state.matchingSelectedTile, targetName);
          state.matchingSelectedTile = null;
        }
      });

      rightCol.appendChild(slot);
    });

    board.appendChild(leftCol);
    board.appendChild(rightCol);
    el.qAnswersContainer.appendChild(board);
  }

  function placeMatchingItem(itemText, targetName) {
    const q = getCurrentQuestion();
    if (!state.userAnswers[q.id]) {
      state.userAnswers[q.id] = { selected: [], placements: {}, isSubmitted: false, isCorrect: false };
    }
    state.userAnswers[q.id].placements[itemText] = targetName;
    renderCurrentQuestion();
    saveState();
  }

  function removeMatchingPlacement(itemText) {
    const q = getCurrentQuestion();
    if (state.userAnswers[q.id] && state.userAnswers[q.id].placements) {
      delete state.userAnswers[q.id].placements[itemText];
      renderCurrentQuestion();
      saveState();
    }
  }

  // --- Submit / Check Answer ---
  function handleSubmit() {
    const q = getCurrentQuestion();
    const ansState = state.userAnswers[q.id] || { selected: [], placements: {}, isSubmitted: false, isCorrect: false };

    // If already submitted in Study Mode, clicking button advances to next question!
    if (ansState.isSubmitted && state.mode === 'study') {
      nextQuestion();
      return;
    }

    // Validation before submission
    if (q.type === 'single') {
      if (ansState.selected.length === 0) {
        alert('Please select an option before submitting.');
        return;
      }
    } else if (q.type === 'multiple') {
      if (ansState.selected.length === 0) {
        alert(`Please select ${q.required_selections} options before submitting.`);
        return;
      }
    } else if (q.type === 'matching') {
      const placedCount = Object.keys(ansState.placements || {}).length;
      if (placedCount === 0) {
        alert('Please match items into their target boxes before submitting.');
        return;
      }
    }

    // Evaluate correctness
    let isCorrect = false;
    let isPartial = false;

    if (q.type === 'single') {
      isCorrect = ansState.selected[0] === q.correct[0];
    } else if (q.type === 'multiple') {
      const correctSet = new Set(q.correct);
      const userSet = new Set(ansState.selected);
      let matchCount = 0;
      userSet.forEach(idx => {
        if (correctSet.has(idx)) matchCount++;
      });
      isCorrect = matchCount === q.correct.length && userSet.size === q.correct.length;
      isPartial = matchCount > 0 && !isCorrect;
    } else if (q.type === 'matching') {
      // Check each pair
      let allMatch = true;
      let matchedCount = 0;
      q.pairs.forEach(p => {
        if (ansState.placements[p.item] === p.target) {
          matchedCount++;
        } else {
          allMatch = false;
        }
      });
      isCorrect = allMatch && Object.keys(ansState.placements).length === q.pairs.length;
      isPartial = matchedCount > 0 && !isCorrect;
    }

    ansState.isSubmitted = true;
    ansState.isCorrect = isCorrect;
    ansState.isPartial = isPartial;
    state.userAnswers[q.id] = ansState;

    renderCurrentQuestion();
    updateStats();
    saveState();

    // Auto-scroll feedback into view smoothly
    if (state.mode === 'study') {
      el.feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // --- Render Feedback Card ---
  function renderFeedback(q, ansState) {
    el.feedbackCard.classList.remove('hidden');

    el.feedbackBanner.className = 'feedback-banner';
    if (ansState.isCorrect) {
      el.feedbackBanner.classList.add('correct');
      el.feedbackIcon.textContent = '✓';
      el.feedbackStatusText.textContent = 'Correct! Excellent job.';
    } else if (ansState.isPartial) {
      el.feedbackBanner.classList.add('partial');
      el.feedbackIcon.textContent = '⚠';
      el.feedbackStatusText.textContent = 'Partially Correct. Review the breakdown below.';
    } else {
      el.feedbackBanner.classList.add('incorrect');
      el.feedbackIcon.textContent = '✗';
      el.feedbackStatusText.textContent = 'Incorrect. Review the explanation and key concepts below.';
    }

    // Explanation Body with Topic formatting
    let explanationText = q.explanation || 'No additional explanation available for this question.';
    el.explanationBody.innerHTML = formatExplanationText(explanationText);
  }

  function formatExplanationText(text) {
    if (!text) return '';
    let escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Highlight Topic badge
    escaped = escaped.replace(/(Topic\s+[0-9\.]+)/gi, '<b style="color:var(--cisco-blue);">$1</b>');

    // Highlight CLI commands or IPs inside explanation
    escaped = escaped.replace(/(ip route [^\s\n\.,]+ [^\s\n\.,]+ [^\s\n\.,]+)/g, '<code>$1</code>');
    escaped = escaped.replace(/(0\.0\.0\.0 0\.0\.0\.0|::\/0|[0-9a-f:]+\/\d+|192\.168\.[0-9\.\/]+)/gi, '<code>$1</code>');

    return escaped;
  }

  // --- Clear Current Question Selection ---
  function resetCurrentQuestion() {
    const q = getCurrentQuestion();
    if (!q) return;
    delete state.userAnswers[q.id];
    renderCurrentQuestion();
    updateStats();
    saveState();
  }

  // --- Navigation ---
  function nextQuestion() {
    if (state.currentIndex < state.questions.length - 1) {
      state.matchingSelectedTile = null;
      state.currentIndex++;
      renderCurrentQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function prevQuestion() {
    if (state.currentIndex > 0) {
      state.matchingSelectedTile = null;
      state.currentIndex--;
      renderCurrentQuestion();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function jumpToQuestion(index) {
    if (index >= 0 && index < state.questions.length) {
      state.matchingSelectedTile = null;
      state.currentIndex = index;
      renderCurrentQuestion();
      closeGridModal();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // --- Flag / Bookmark Question ---
  function toggleFlag() {
    const q = getCurrentQuestion();
    if (!q) return;
    if (state.flagged.has(q.id)) {
      state.flagged.delete(q.id);
    } else {
      state.flagged.add(q.id);
    }
    renderCurrentQuestion();
    updateStats();
    saveState();
  }

  // --- Shuffling Functions ---
  function shuffleQuestions() {
    const currentQ = getCurrentQuestion();
    state.questions = shuffleArray(state.questions);
    // Try to stay on same question or go to 0
    const newIdx = state.questions.findIndex(q => q.id === currentQ.id);
    state.currentIndex = newIdx !== -1 ? newIdx : 0;
    renderCurrentQuestion();
    updateStats();
    showToast('Questions Shuffled! 🔀');
  }

  function resetQuestionOrder() {
    const currentQ = getCurrentQuestion();
    state.questions = [...masterQuestions];
    const newIdx = state.questions.findIndex(q => q.id === currentQ.id);
    state.currentIndex = newIdx !== -1 ? newIdx : 0;
    renderCurrentQuestion();
    updateStats();
    showToast('Default 1–89 Order Restored! 📋');
  }

  function handleShuffleChoicesToggle(e) {
    state.shuffleChoices = e.target.checked;
    state.choicePermutations = {}; // reset permutations
    renderCurrentQuestion();
    saveState();
    showToast(state.shuffleChoices ? 'Choice Shuffling Enabled 🎲' : 'Standard Choice Order Restored');
  }

  // --- Filter Missed Questions ---
  function filterMissedQuestions() {
    const missedList = masterQuestions.filter(q => {
      const ans = state.userAnswers[q.id];
      return ans && ans.isSubmitted && !ans.isCorrect;
    });

    if (missedList.length === 0) {
      alert('You have no incorrect questions to review! Great job!');
      return;
    }

    state.questions = missedList;
    state.currentIndex = 0;
    el.btnFilterMissed.classList.add('active');
    renderCurrentQuestion();
    updateStats();
    showToast(`Loaded ${missedList.length} Missed Question(s) for Focused Review! 🎯`);
  }

  // --- Stats & Score Calculations ---
  function updateStats() {
    let answeredCount = 0;
    let correctCount = 0;
    let incorrectCount = 0;

    masterQuestions.forEach(q => {
      const ans = state.userAnswers[q.id];
      if (ans && ans.isSubmitted) {
        answeredCount++;
        if (ans.isCorrect) correctCount++;
        else incorrectCount++;
      }
    });

    const total = masterQuestions.length;
    const pct = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    el.scoreDisplay.textContent = `${correctCount} / ${answeredCount}`;
    el.scorePctDisplay.textContent = `(${pct}%)`;
    el.answeredCountBadge.textContent = answeredCount;
    el.missedCountBadge.textContent = incorrectCount;

    // Palette tab counts
    if (el.tabCountAll) el.tabCountAll.textContent = total;
    if (el.tabCountUnanswered) el.tabCountUnanswered.textContent = total - answeredCount;
    if (el.tabCountCorrect) el.tabCountCorrect.textContent = correctCount;
    if (el.tabCountIncorrect) el.tabCountIncorrect.textContent = incorrectCount;
    if (el.tabCountFlagged) el.tabCountFlagged.textContent = state.flagged.size;
  }

  // --- Palette Grid Modal ---
  function openGridModal() {
    renderPaletteGrid();
    el.gridModal.classList.remove('hidden');
  }

  function closeGridModal() {
    el.gridModal.classList.add('hidden');
  }

  function renderPaletteGrid() {
    el.paletteGrid.innerHTML = '';
    const filter = state.activeFilter;

    state.questions.forEach((q, idx) => {
      const ans = state.userAnswers[q.id];
      const isCurrent = idx === state.currentIndex;
      const isFlagged = state.flagged.has(q.id);
      const isSubmitted = ans && ans.isSubmitted;
      const isCorrect = isSubmitted && ans.isCorrect;
      const isIncorrect = isSubmitted && !ans.isCorrect;

      // Filter check
      if (filter === 'unanswered' && isSubmitted) return;
      if (filter === 'correct' && !isCorrect) return;
      if (filter === 'incorrect' && !isIncorrect) return;
      if (filter === 'flagged' && !isFlagged) return;

      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = q.number;
      btn.title = `Question ${q.number}`;

      if (isCurrent) btn.classList.add('current');
      if (isSubmitted) {
        if (isCorrect) btn.classList.add('correct');
        else btn.classList.add('incorrect');
      }
      if (isFlagged) btn.classList.add('flagged');

      btn.addEventListener('click', () => {
        jumpToQuestion(idx);
      });

      el.paletteGrid.appendChild(btn);
    });
  }

  // --- Lightbox Zoom ---
  function openLightbox() {
    const q = getCurrentQuestion();
    if (!q || !q.image) return;
    el.lightboxImg.src = q.image;
    el.lightboxTitle.textContent = `Exhibit for Question ${q.number}`;
    lightboxZoom = 1.0;
    applyLightboxZoom();
    el.lightboxModal.classList.remove('hidden');
  }

  function closeLightbox() {
    el.lightboxModal.classList.add('hidden');
  }

  function applyLightboxZoom() {
    el.lightboxImg.style.transform = `scale(${lightboxZoom})`;
  }

  // --- Summary Modal ---
  function openSummaryModal() {
    let answered = 0;
    let correct = 0;
    let incorrect = 0;

    masterQuestions.forEach(q => {
      const ans = state.userAnswers[q.id];
      if (ans && ans.isSubmitted) {
        answered++;
        if (ans.isCorrect) correct++;
        else incorrect++;
      }
    });

    const total = masterQuestions.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

    el.summaryTotal.textContent = total;
    el.summaryAnswered.textContent = answered;
    el.summaryCorrect.textContent = correct;
    el.summaryIncorrect.textContent = incorrect;
    el.summaryTime.textContent = formatTime(state.elapsedSeconds);
    el.summaryPct.textContent = `${pct}%`;

    const isPassed = pct >= PASSING_BENCHMARK;
    el.summaryPassStatus.textContent = isPassed ? 'PASSED (≥70%)' : (answered === total ? 'FAILED (<70%)' : 'IN PROGRESS');
    el.summaryPassStatus.style.color = isPassed ? 'var(--color-success)' : 'var(--color-danger)';

    // Animated SVG circle (circumference = 2 * PI * 54 = ~339.29)
    const circumference = 339.29;
    const offset = circumference - (pct / 100) * circumference;
    el.summaryCircleBar.style.strokeDashoffset = offset;
    el.summaryCircleBar.style.stroke = isPassed ? 'var(--color-success)' : 'var(--cisco-blue)';

    el.summaryModal.classList.remove('hidden');
  }

  function closeSummaryModal() {
    el.summaryModal.classList.add('hidden');
  }

  function resetAllProgress() {
    if (!confirm('Are you sure you want to reset all your exam answers, scores, and timer?')) return;
    state.userAnswers = {};
    state.flagged.clear();
    state.elapsedSeconds = 0;
    state.choicePermutations = {};
    state.questions = [...masterQuestions];
    state.currentIndex = 0;
    localStorage.removeItem(STORAGE_KEY);
    renderCurrentQuestion();
    updateStats();
    closeGridModal();
    closeSummaryModal();
    showToast('All Exam Progress Reset!');
  }

  // --- Toast Notification ---
  function showToast(msg) {
    let toast = document.getElementById('examToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'examToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background-color: #0b2238;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        border-left: 4px solid #049fd9;
        z-index: 2000;
        transition: opacity 0.3s ease, transform 0.3s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
    }, 2200);
  }

  // --- Keyboard Shortcuts ---
  function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Don't trigger shortcuts inside text inputs
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const q = getCurrentQuestion();
      if (!q) return;

      // Escape closes modals
      if (e.key === 'Escape') {
        closeGridModal();
        closeLightbox();
        closeSummaryModal();
        return;
      }

      // 1 to 9: Select option
      if (e.key >= '1' && e.key <= '9' && q.type !== 'matching') {
        const optNum = parseInt(e.key, 10) - 1;
        const optIndices = getOptionIndices(q);
        if (optNum < optIndices.length) {
          const origIdx = optIndices[optNum];
          toggleChoiceSelection(origIdx, q.type, q.required_selections);
        }
      }

      // Enter: Submit or Next
      if (e.key === 'Enter') {
        handleSubmit();
      }

      // Arrow Left / Arrow Right: Navigate
      if (e.key === 'ArrowLeft') {
        prevQuestion();
      } else if (e.key === 'ArrowRight') {
        nextQuestion();
      }

      // F: Flag
      if (e.key.toLowerCase() === 'f') {
        toggleFlag();
      }

      // S: Shuffle Questions
      if (e.key.toLowerCase() === 's') {
        shuffleQuestions();
      }
    });
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // Mode Switcher
    el.btnStudyMode.addEventListener('click', () => setMode('study'));
    el.btnExamMode.addEventListener('click', () => setMode('exam'));

    // Theme Toggle
    el.btnThemeToggle.addEventListener('click', toggleTheme);

    // Timer Pause
    el.timerBox.addEventListener('click', toggleTimerPause);

    // Question Actions
    el.btnSubmit.addEventListener('click', handleSubmit);
    el.btnFeedbackNext.addEventListener('click', nextQuestion);
    el.btnNext.addEventListener('click', nextQuestion);
    el.btnPrev.addEventListener('click', prevQuestion);
    el.btnResetQuestion.addEventListener('click', resetCurrentQuestion);
    el.btnFlagQuestion.addEventListener('click', toggleFlag);

    // Toolbar Actions
    el.btnShuffleQuestions.addEventListener('click', shuffleQuestions);
    el.btnResetOrder.addEventListener('click', resetQuestionOrder);
    el.chkShuffleChoices.addEventListener('change', handleShuffleChoicesToggle);
    el.btnFilterMissed.addEventListener('click', filterMissedQuestions);
    el.btnFinishExam.addEventListener('click', openSummaryModal);

    // Palette Grid Modal
    el.btnOpenGrid.addEventListener('click', openGridModal);
    el.btnCloseGrid.addEventListener('click', closeGridModal);
    el.btnCloseGridBottom.addEventListener('click', closeGridModal);
    el.btnResetAllProgress.addEventListener('click', resetAllProgress);

    // Palette Filter Tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeFilter = tab.dataset.filter;
        renderPaletteGrid();
      });
    });

    // Lightbox & Exhibit
    el.btnZoomExhibit.addEventListener('click', openLightbox);
    el.qExhibitImg.addEventListener('click', openLightbox);
    el.btnCloseLightbox.addEventListener('click', closeLightbox);
    el.btnZoomIn.addEventListener('click', () => {
      lightboxZoom = Math.min(lightboxZoom + 0.25, 3.0);
      applyLightboxZoom();
    });
    el.btnZoomOut.addEventListener('click', () => {
      lightboxZoom = Math.max(lightboxZoom - 0.25, 0.5);
      applyLightboxZoom();
    });
    el.btnZoomReset.addEventListener('click', () => {
      lightboxZoom = 1.0;
      applyLightboxZoom();
    });

    // Summary Modal Actions
    el.btnCloseSummary.addEventListener('click', closeSummaryModal);
    el.btnRetryMissed.addEventListener('click', () => {
      closeSummaryModal();
      filterMissedQuestions();
    });
    el.btnRestartAll.addEventListener('click', () => {
      resetAllProgress();
    });
  }

  // --- App Initialization ---
  function init() {
    loadState();
    setupEventListeners();
    setupKeyboardShortcuts();
    startTimer();
    renderCurrentQuestion();
    updateStats();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

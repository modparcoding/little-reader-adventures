const STORAGE_KEY = 'little-reader-state-v2';
const XP_PER_LEVEL = 120;
const DAILY_QUEST_COUNT = 2;

const THEME_OPTIONS = [
  { key: 'dinosaur', name: 'Dinosaur Jungle', dot: 'dinosaur', emoji: '🦖' },
  { key: 'space', name: 'Space Rockets', dot: 'space', emoji: '🚀' },
  { key: 'pirate', name: 'Pirate Island', dot: 'pirate', emoji: '🏴‍☠️' },
  { key: 'dragon', name: 'Dragon Castle', dot: 'dragon', emoji: '🐉' },
  { key: 'rainbow', name: 'Rainbow Garden', dot: 'rainbow', emoji: '🌈' }
];

const THEME_FALLBACK = {
  sunset: 'dinosaur',
  forest: 'dinosaur',
  ocean: 'rainbow',
  galaxy: 'space',
  dinosaur: 'dinosaur',
  space: 'space',
  pirate: 'pirate',
  dragon: 'dragon',
  rainbow: 'rainbow'
};

const PHONICS_LEVELS = [
  {
    name: 'Phase 1 - single sounds (EYFS start)',
    items: [
      { word: 'man', answer: 'm', type: 'initial' },
      { word: 'sun', answer: 's', type: 'initial' },
      { word: 'dog', answer: 'd', type: 'initial' },
      { word: 'cat', answer: 'c', type: 'initial' },
      { word: 'pig', answer: 'p', type: 'initial' },
      { word: 'fish', answer: 'f', type: 'initial' },
      { word: 'run', answer: 'r', type: 'initial' },
      { word: 'kite', answer: 'k', type: 'initial' },
      { word: 'nose', answer: 'n', type: 'initial' },
      { word: 'jam', answer: 'j', type: 'initial' }
    ],
    distractors: ['b', 'c', 'd', 'f', 'g', 'k', 'm', 'n', 'p', 'r', 's', 't', 'j']
  },
  {
    name: 'Phase 2 - short vowel and end sounds',
    items: [
      { word: 'apple', answer: 'a', type: 'initial' },
      { word: 'egg', answer: 'e', type: 'initial' },
      { word: 'ink', answer: 'i', type: 'initial' },
      { word: 'otter', answer: 'o', type: 'initial' },
      { word: 'under', answer: 'u', type: 'initial' },
      { word: 'cat', answer: 'k', type: 'ending' },
      { word: 'dog', answer: 'g', type: 'ending' },
      { word: 'mug', answer: 'g', type: 'ending' },
      { word: 'pin', answer: 'n', type: 'ending' },
      { word: 'ship', answer: 'p', type: 'ending' }
    ],
    distractors: ['a', 'e', 'i', 'o', 'u', 'b', 'd', 'g', 'n', 'p', 't', 'm']
  },
  {
    name: 'Phase 3 - common digraphs',
    items: [
      { word: 'ship', answer: 'sh', type: 'initial' },
      { word: 'cheese', answer: 'ch', type: 'initial' },
      { word: 'this', answer: 'th', type: 'initial' },
      { word: 'whale', answer: 'wh', type: 'initial' },
      { word: 'phone', answer: 'ph', type: 'initial' },
      { word: 'path', answer: 'th', type: 'ending' },
      { word: 'brush', answer: 'sh', type: 'ending' },
      { word: 'watch', answer: 'ch', type: 'ending' },
      { word: 'math', answer: 'th', type: 'ending' },
      { word: 'leaf', answer: 'f', type: 'ending' }
    ],
    distractors: ['sh', 'ch', 'th', 'wh', 'ph', 's', 'c', 't', 'h', 'k', 'f']
  },
  {
    name: 'Phase 4 - blends',
    items: [
      { word: 'smack', answer: 'sm', type: 'startcluster' },
      { word: 'crab', answer: 'cr', type: 'startcluster' },
      { word: 'plant', answer: 'pl', type: 'startcluster' },
      { word: 'truck', answer: 'tr', type: 'startcluster' },
      { word: 'frog', answer: 'fr', type: 'startcluster' },
      { word: 'snail', answer: 'sn', type: 'startcluster' },
      { word: 'spoon', answer: 'sp', type: 'startcluster' },
      { word: 'glow', answer: 'gl', type: 'startcluster' },
      { word: 'black', answer: 'bl', type: 'startcluster' },
      { word: 'drum', answer: 'dr', type: 'startcluster' }
    ],
    distractors: ['br', 'cl', 'fl', 'gr', 'tr', 'cr', 'fr', 'pl', 'bl', 'sm']
  }
];

const WORD_LEVELS = [
  {
    name: 'CVC foundation words',
    words: [
      { word: 'cat', clue: 'A pet who says meow.' },
      { word: 'dog', clue: 'A pet who says woof.' },
      { word: 'sun', clue: 'It shines in the sky.' },
      { word: 'cup', clue: 'You drink from it.' },
      { word: 'bus', clue: 'It takes children to school.' },
      { word: 'hat', clue: 'Keeps your head warm.' },
      { word: 'map', clue: 'Shows where places are.' },
      { word: 'jam', clue: 'Something tasty on toast.' }
    ],
    distractorCount: 2
  },
  {
    name: 'Digraph and blend words',
    words: [
      { word: 'ship', clue: 'It sails on water.' },
      { word: 'fish', clue: 'It swims in the sea.' },
      { word: 'mop', clue: 'Used for cleaning.' },
      { word: 'stop', clue: 'A red light means this.' },
      { word: 'clap', clue: 'You do this with hands.' },
      { word: 'shop', clue: 'A place to buy things.' },
      { word: 'plant', clue: 'Grows in a garden.' },
      { word: 'truck', clue: 'A big carrying vehicle.' }
    ],
    distractorCount: 3
  },
  {
    name: 'Blends and longer words',
    words: [
      { word: 'branch', clue: 'Part of a tree.' },
      { word: 'brush', clue: 'Use this for hair or shoes.' },
      { word: 'smile', clue: 'A happy face.' },
      { word: 'clock', clue: 'It tells time.' },
      { word: 'frog', clue: 'A green friend near ponds.' },
      { word: 'train', clue: 'It pulls many carriages.' },
      { word: 'glow', clue: 'How a light shines.' },
      { word: 'crab', clue: 'Found near the sea.' }
    ],
    distractorCount: 4
  }
];

const SIGHT_WORD_LEVELS = [
  ['a', 'I', 'am', 'is', 'it', 'we', 'to', 'in', 'no', 'on', 'go', 'my'],
  ['you', 'the', 'and', 'see', 'are', 'me', 'of', 'can', 'her', 'his'],
  ['said', 'have', 'was', 'were', 'with', 'for', 'they', 'this', 'that', 'look'],
  ['because', 'where', 'people', 'school', 'around', 'little', 'every', 'first', 'think', 'there']
];

const STORY_LEVELS = [
  [
    {
      title: 'Lily and the Yellow Ball',
      lines: [
        'Lily had a yellow ball.',
        'She dropped it in the grass.',
        'She looked carefully.',
        'Tom found it and gave it back.'
      ],
      questions: [
        { q: 'What colour was the ball?', options: ['Red', 'Yellow', 'Blue'], answer: 1 },
        { q: 'Who found it?', options: ['Tom', 'Mum', 'Sam'], answer: 0 }
      ]
    },
    {
      title: 'The Little Ant',
      lines: [
        'An ant had a crumb to carry.',
        'The crumb was big for one ant.',
        'A wind blew and pushed it.',
        'Many ants helped and they moved it home.'
      ],
      questions: [
        { q: 'Who helped the ant?', options: ['Only one ant', 'Many ants', 'No ants'], answer: 1 },
        { q: 'What was being carried?', options: ['A toy', 'A crumb', 'A leaf'], answer: 1 }
      ]
    }
  ],
  [
    {
      title: 'A Rainy Day',
      lines: [
        'Mia saw drops on the window.',
        'She put on her blue raincoat.',
        'She took an umbrella and shoes.',
        'She went to the park and giggled.'
      ],
      questions: [
        { q: 'What did Mia put on?', options: ['Raincoat', 'Scarf', 'Gloves'], answer: 0 },
        { q: 'Why did she take an umbrella?', options: ['For sunshine', 'For rain', 'For cold wind only'], answer: 1 }
      ]
    }
  ],
  [
    {
      title: 'The Busy Bakery',
      lines: [
        'Ben went to the bakery after school.',
        'He could smell sweet cakes.',
        'The baker showed him how bread is sliced.',
        'Ben thanked the baker and went home.'
      ],
      questions: [
        { q: 'Where did Ben go?', options: ['Museum', 'Bakery', 'Park'], answer: 1 },
        { q: 'What did Ben take home?', options: ['Bread', 'A cake', 'A toy'], answer: 1 }
      ]
    }
  ],
  [
    {
      title: 'The Night Sky Club',
      lines: [
        'Ava and Leo went outside at night.',
        'The moon was round and bright.',
        'They looked up and saw many stars.',
        'They counted to ten and smiled.'
      ],
      questions: [
        { q: 'What were they looking at?', options: ['Ships', 'Stars', 'Clouds'], answer: 1 },
        { q: 'How many did they count?', options: ['Seven', 'Ten', 'Twelve'], answer: 1 }
      ]
    }
  ]
];

const QUEST_LIBRARY = [
  { id: 'q1', module: 'phonics', min: 3, max: 5, label: 'Sound Safari hits', rewardXp: 12, rewardCoins: 10 },
  { id: 'q2', module: 'words', min: 2, max: 4, label: 'Build words in Word Castle', rewardXp: 14, rewardCoins: 12 },
  { id: 'q3', module: 'sight', min: 4, max: 6, label: 'Spot Star Words', rewardXp: 10, rewardCoins: 9 },
  { id: 'q4', module: 'stories', min: 1, max: 2, label: 'Finish Story Cave questions', rewardXp: 16, rewardCoins: 14 }
];

const BADGES = [
  {
    id: 'first-win',
    icon: '🌟',
    title: 'First Spark',
    description: 'You answered your first question correctly.',
    xp: 15,
    coins: 5,
    check: (stateData) => stateData.totalCorrect >= 1
  },
  {
    id: 'phonics-boost',
    icon: '🦜',
    title: 'Safari Listener',
    description: 'Reached unit 2 in Sound Safari.',
    xp: 16,
    coins: 8,
    check: (stateData) => stateData.moduleLevels.phonics >= 1
  },
  {
    id: 'builder',
    icon: '🧱',
    title: 'Castle Builder',
    description: 'Reached unit 2 in Word Castle.',
    xp: 18,
    coins: 8,
    check: (stateData) => stateData.moduleLevels.words >= 1
  },
  {
    id: 'sight-super',
    icon: '📘',
    title: 'Star Captain',
    description: 'Reached unit 2 in Star Words.',
    xp: 18,
    coins: 9,
    check: (stateData) => stateData.moduleLevels.sight >= 1
  },
  {
    id: 'storybook',
    icon: '📖',
    title: 'Cave Explorer',
    description: 'Completed at least two Story Cave answers.',
    xp: 20,
    coins: 12,
    check: (stateData) => stateData.activities.stories.correct >= 2
  },
  {
    id: 'streak-five',
    icon: '🔥',
    title: 'Streak Hero',
    description: 'Held a five-answer streak.',
    xp: 25,
    coins: 15,
    check: (stateData) => stateData.streak >= 5
  }
];

const XP_REWARDS = {
  phonics: 9,
  words: 11,
  sight: 8,
  stories: 15
};

const COIN_REWARDS = {
  phonics: 4,
  words: 5,
  sight: 3,
  stories: 6
};

const UK_GOALS = [
  'Identify and distinguish initial and final phonemes in simple words.',
  'Segment and blend short words, including CVC and simple blends.',
  'Read high-frequency words quickly and accurately.',
  'Build words from letter tiles with increasing structure.',
  'Answer simple comprehension questions from short stories.',
  'Build consistency through short daily sessions with rewards and feedback.'
];

const stateDefaults = {
  childName: 'My reader',
  xp: 0,
  coins: 0,
  streak: 0,
  totalAttempts: 0,
  totalCorrect: 0,
  lastSessionDate: '',
  activeTheme: 'dinosaur',
  activities: {
    phonics: { attempts: 0, correct: 0 },
    words: { attempts: 0, correct: 0 },
    sight: { attempts: 0, correct: 0 },
    stories: { attempts: 0, correct: 0 }
  },
  moduleLevels: {
    phonics: 0,
    words: 0,
    sight: 0,
    stories: 0
  },
  missions: { date: '', tasks: [] },
  badges: []
};

let state = loadState();
let currentPhonics = null;
let currentWord = null;
let wordSlots = [];
let currentSight = null;
let storyState = { story: null, questionIndex: 0, ready: false, running: false };

function cloneDefaults() {
  return JSON.parse(JSON.stringify(stateDefaults));
}

function normalizeTheme(value) {
  if (THEME_OPTIONS.find((item) => item.key === value)) {
    return value;
  }
  return THEME_FALLBACK[value] || 'dinosaur';
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('little-reader-state-v1');
  if (!raw) {
    return cloneDefaults();
  }
  try {
    const parsed = JSON.parse(raw);
    const base = cloneDefaults();
    const merged = {
      ...base,
      ...parsed,
      activities: {
        ...base.activities,
        ...(parsed.activities || {})
      },
      moduleLevels: {
        ...base.moduleLevels,
        ...(parsed.moduleLevels || {})
      },
      missions: {
        ...base.missions,
        ...(parsed.missions || {})
      }
    };

    if (!Array.isArray(merged.missions.tasks)) {
      merged.missions.tasks = [];
    }
    if (!Array.isArray(merged.badges)) {
      merged.badges = [];
    }

    merged.activeTheme = normalizeTheme(merged.activeTheme);
    return merged;
  } catch {
    return cloneDefaults();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function shuffle(array) {
  const output = [...array];
  for (let i = output.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }
  return output;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pickDistinct(source, correct, count) {
  const pool = [...new Set(source)].filter((value) => value !== correct);
  const picked = [];
  while (picked.length < count && pool.length > 0) {
    const pick = randomChoice(pool);
    picked.push(pick);
    pool.splice(pool.indexOf(pick), 1);
  }
  return picked;
}

function todayKey() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function speak(text) {
  if (!('speechSynthesis' in window)) {
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-GB';
  utterance.rate = 0.82;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function setMascotSpeech(panel, text) {
  const el = document.getElementById(`${panel}-mascot`);
  if (el) {
    el.textContent = text;
  }
}

function triggerConfetti() {
  const layer = document.getElementById('confetti-layer');
  if (!layer) {
    return;
  }

  layer.innerHTML = '';
  const colors = ['#ffd36a', '#7edb7a', '#78c0ff', '#ff89be', '#ffa95a'];

  for (let i = 0; i < 24; i += 1) {
    const confetti = document.createElement('span');
    confetti.className = 'confetti-piece';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.setProperty('--left', `${Math.random() * 100}%`);
    confetti.style.animationDelay = `${(Math.random() * 180).toFixed(2)}ms`;
    confetti.style.animationDuration = `${1000 + Math.random() * 550}ms`;
    confetti.style.opacity = '0';
    confetti.style.width = `${8 + Math.random() * 10}px`;
    confetti.style.height = `${8 + Math.random() * 10}px`;
    layer.appendChild(confetti);
  }

  setTimeout(() => {
    layer.innerHTML = '';
  }, 1500);
}

function showBanner(text, ok = true) {
  const banner = document.getElementById('reward-banner');
  if (!banner) {
    return;
  }

  banner.textContent = ok ? `🎉 ${text}` : `🧭 ${text}`;
  banner.style.color = ok ? 'var(--ok)' : '#4e4f7a';
  banner.className = `reward-banner show ${ok ? 'reward' : 'encourage'}`;
  clearTimeout(showBanner._timer);
  showBanner._timer = setTimeout(() => {
    banner.classList.remove('show');
    banner.className = 'reward-banner';
  }, 1900);
}

function getPlayerLevel() {
  return Math.floor(state.xp / XP_PER_LEVEL) + 1;
}

function moduleIndexMax(module) {
  return {
    phonics: PHONICS_LEVELS.length - 1,
    words: WORD_LEVELS.length - 1,
    sight: SIGHT_WORD_LEVELS.length - 1,
    stories: STORY_LEVELS.length - 1
  }[module] || 0;
}

function clampModuleLevel(module) {
  return Math.max(0, Math.min(moduleIndexMax(module), state.moduleLevels[module] || 0));
}

function updateHeader() {
  document.getElementById('level-pill').textContent = getPlayerLevel().toString();
  document.getElementById('coin-count').textContent = String(state.coins);
  document.getElementById('streak').textContent = String(state.streak);
  const accuracy = state.totalAttempts > 0 ? `${Math.round((state.totalCorrect / state.totalAttempts) * 100)}%` : '0%';
  document.getElementById('total-score').textContent = accuracy;

  const inLevel = state.xp % XP_PER_LEVEL;
  const levelProgress = Math.round((inLevel / XP_PER_LEVEL) * 100);
  const toNext = XP_PER_LEVEL - inLevel;
  const baseline = state.xp - inLevel;
  document.getElementById('xp-status').textContent = `${baseline} XP  ·  ${toNext} to next level`;
  document.getElementById('xp-bar').style.width = `${levelProgress}%`;
}

function levelForCorrect(correctCount) {
  if (correctCount >= 32) return 3;
  if (correctCount >= 18) return 2;
  if (correctCount >= 8) return 1;
  return 0;
}

function updateModuleLevel(module) {
  const correct = state.activities[module].correct;
  const targetLevel = levelForCorrect(correct);
  const current = clampModuleLevel(module);
  if (targetLevel > current) {
    state.moduleLevels[module] = targetLevel;
    state.coins += 10 + targetLevel * 5;
    state.xp += 12 + targetLevel * 5;
    saveState();
    updateHeader();
    triggerConfetti();
    showBanner(`Unit up! ${module} now on Unit ${targetLevel + 1}.`, true);
  }
}

function renderBadges() {
  const container = document.getElementById('badge-list');
  if (!container) return;
  if (!state.badges || state.badges.length === 0) {
    container.innerHTML = '<p>No badges yet. Keep solving quests for stickers.</p>';
    return;
  }

  const lookup = Object.fromEntries(BADGES.map((item) => [item.id, item]));
  container.innerHTML = state.badges
    .map((id) => {
      const badge = lookup[id];
      if (!badge) {
        return '';
      }
      return `
        <article class="badge-card">
          <h4>${badge.icon} ${badge.title}</h4>
          <p>${badge.description}</p>
        </article>
      `;
    })
    .join('');
}

function checkBadges() {
  let unlocked = false;
  BADGES.forEach((badge) => {
    if (state.badges.includes(badge.id)) {
      return;
    }
    if (badge.check(state)) {
      state.badges.push(badge.id);
      state.xp += badge.xp;
      state.coins += badge.coins;
      unlocked = true;
      showBanner(`Badge unlocked: ${badge.icon} ${badge.title}`, true);
      triggerConfetti();
      saveState();
    }
  });
  if (unlocked) {
    renderBadges();
    updateHeader();
  }
}

function awardAttempt(module, correct) {
  state.activities[module].attempts += 1;
  state.totalAttempts += 1;

  if (!correct) {
    state.streak = 0;
    return;
  }

  state.activities[module].correct += 1;
  state.totalCorrect += 1;
  state.streak += 1;
  state.xp += XP_REWARDS[module] + clampModuleLevel(module);
  state.coins += COIN_REWARDS[module] + clampModuleLevel(module);
  updateMissions(module);
  updateModuleLevel(module);
  checkBadges();
}

function recordAttempt(module, correct, onCorrectMessage = 'Great!') {
  awardAttempt(module, correct);
  saveState();
  updateHeader();
  updateProgress();

  if (correct) {
    triggerConfetti();
    showBanner(`${onCorrectMessage} +${COIN_REWARDS[module]} coins + XP`, true);
  } else {
    showBanner('Nice try — listen again and pick another answer.', false);
  }
}

function buildQuestTarget(template) {
  const target = template.min + Math.floor(Math.random() * (template.max - template.min + 1));
  return {
    ...template,
    progress: 0,
    target,
    done: false,
    label: `${template.label}: ${target} correct`
  };
}

function ensureMissions() {
  if (!state.missions) {
    state.missions = { date: '', tasks: [] };
  }

  if (state.missions.date === todayKey()) {
    if (state.missions.tasks.length > 0) {
      return;
    }
  }

  const selected = shuffle(QUEST_LIBRARY).slice(0, DAILY_QUEST_COUNT);
  state.missions = {
    date: todayKey(),
    tasks: selected.map(buildQuestTarget)
  };
  saveState();
}

function updateMissions(module) {
  let rewarded = false;
  state.missions.tasks.forEach((task) => {
    if (task.module !== module || task.done) {
      return;
    }
    task.progress += 1;
    if (task.progress >= task.target) {
      task.done = true;
      state.xp += task.rewardXp;
      state.coins += task.rewardCoins;
      rewarded = true;
      showBanner(`Quest complete: ${task.label}`);
      triggerConfetti();
    }
  });
  if (rewarded) {
    saveState();
    updateHeader();
  }
}

function renderMissions() {
  ensureMissions();
  const missionTitle = document.getElementById('mission-title');
  const missionList = document.getElementById('mission-list');
  const questPanel = document.getElementById('quest-panel');

  const html = state.missions.tasks
    .map((task) => {
      const status = task.done ? '✅ Completed' : `📌 ${task.progress}/${task.target}`;
      return `<div class="quest-list"><strong>${task.label}</strong> <br/>${status}<br/>+${task.rewardCoins} coins, +${task.rewardXp} XP</div>`;
    })
    .join('');

  missionTitle.textContent = taskStatusTitle();
  missionList.innerHTML = html || '<p>No quests available.</p>';
  questPanel.innerHTML = html || '<p>No quests available.</p>';
}

function taskStatusTitle() {
  if (!state.missions || !state.missions.tasks.length) {
    return 'No quests loaded yet.';
  }
  return state.missions.tasks.every((task) => task.done)
    ? 'All missions done! Great work, explorer.'
    : 'Your mission pack for today:';
}

function renderGoalList() {
  document.getElementById('goal-list').innerHTML = UK_GOALS.map((goal) => `<li>${goal}</li>`).join('');
}

function getModuleItems(module) {
  if (module === 'phonics') {
    const level = clampModuleLevel('phonics');
    const items = [];
    for (let i = 0; i <= level; i += 1) {
      items.push(...PHONICS_LEVELS[i].items);
    }
    return items;
  }
  if (module === 'sight') {
    const level = clampModuleLevel('sight');
    const list = [];
    for (let i = 0; i <= level; i += 1) {
      list.push(...SIGHT_WORD_LEVELS[i]);
    }
    return list;
  }
  return [];
}

function getPhonicsPrompt(item) {
  if (item.type === 'ending') {
    return `What sound is at the end of "${item.word}"?`;
  }
  if (item.type === 'startcluster') {
    return `What is the first sound cluster in "${item.word}"?`;
  }
  return `What is the first sound in "${item.word}"?`;
}

function collectPhonicsChoices(answer, level) {
  const choices = [];
  for (let i = 0; i <= level; i += 1) {
    choices.push(...PHONICS_LEVELS[i].distractors);
  }
  return shuffle([answer, ...pickDistinct(choices, answer, 3)]);
}

function setResult(el, text, ok) {
  el.textContent = text;
  el.className = `result ${ok ? 'result-ok' : 'result-bad'}`;
}

function disableButtons(container, disabled = true) {
  container.querySelectorAll('button').forEach((button) => {
    button.disabled = disabled;
  });
}

function renderPhonics() {
  const level = clampModuleLevel('phonics');
  document.getElementById('phonics-stage').textContent = `Unit ${level + 1} - ${PHONICS_LEVELS[level].name}`;
  currentPhonics = randomChoice(getModuleItems('phonics'));

  const promptEl = document.getElementById('phonics-prompt');
  const optionsEl = document.getElementById('phonics-options');
  const resultEl = document.getElementById('phonics-result');
  const nextEl = document.getElementById('phonics-next');
  const replayEl = document.getElementById('phonics-replay');

  setMascotSpeech('phonics', 'What sound is this word making? Tap your answer!');
  promptEl.textContent = getPhonicsPrompt(currentPhonics);
  optionsEl.innerHTML = '';
  resultEl.textContent = '';
  resultEl.className = 'result';
  nextEl.style.display = 'none';

  const answers = collectPhonicsChoices(currentPhonics.answer, level);
  answers.forEach((entry) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.textContent = entry;
    button.addEventListener('click', () => {
      const correct = entry === currentPhonics.answer;
      recordAttempt('phonics', correct, 'Excellent phonics work!');
      setResult(resultEl, correct ? 'Excellent. Nice listening!' : 'Try again. Listen again and choose the right sound.', correct);
      setMascotSpeech('phonics', correct ? 'Brilliant safari find! 🌟' : 'Not that one yet — try again!');
      disableButtons(optionsEl, true);
      nextEl.style.display = 'inline-block';
      if (correct) {
        speak(currentPhonics.word);
      }
    });
    optionsEl.appendChild(button);
  });

  replayEl.onclick = () => {
    speak(currentPhonics.word);
    setMascotSpeech('phonics', 'Listen again and tap the right sound.');
  };
  nextEl.onclick = renderPhonics;
}

function renderWordChallenge() {
  const level = clampModuleLevel('words');
  document.getElementById('word-stage').textContent = `Unit ${level + 1} - ${WORD_LEVELS[level].name}`;

  const selectedLevel = WORD_LEVELS[level];
  currentWord = randomChoice(selectedLevel.words);
  wordSlots = Array(currentWord.word.length).fill('');

  const clueEl = document.getElementById('word-clue');
  const targetEl = document.getElementById('word-target');
  const slotsEl = document.getElementById('word-slots');
  const tilesEl = document.getElementById('word-tiles');
  const resultEl = document.getElementById('word-result');

  setMascotSpeech('word', 'Build the word by tapping tiles in order.');
  clueEl.textContent = `Clue: ${currentWord.clue}`;
  targetEl.textContent = `Build ${currentWord.word.length} letters`;
  slotsEl.innerHTML = '';
  tilesEl.innerHTML = '';
  resultEl.textContent = '';
  resultEl.className = 'result';

  currentWord.word.split('').forEach(() => {
    const slot = document.createElement('button');
    slot.type = 'button';
    slot.className = 'word-slot';
    slot.addEventListener('click', () => {
      const tileIndex = slot.dataset.tileIndex;
      if (!tileIndex) {
        return;
      }

      const index = Array.from(slotsEl.children).indexOf(slot);
      const tile = [...tilesEl.children][Number(tileIndex)];
      slot.textContent = '';
      slot.classList.remove('filled');
      slot.dataset.tileIndex = '';
      wordSlots[index] = '';
      tile.disabled = false;
    });
    slotsEl.appendChild(slot);
  });

  const letters = shuffle([ ...currentWord.word.split(''), ...randomLetters(selectedLevel.distractorCount) ]);

  letters.forEach((letter, idx) => {
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'word-tile';
    tile.textContent = letter;
    tile.addEventListener('click', () => {
      const index = wordSlots.indexOf('');
      if (index === -1) {
        return;
      }
      const slot = slotsEl.children[index];
      slot.textContent = letter;
      slot.classList.add('filled');
      slot.dataset.tileIndex = idx;
      wordSlots[index] = letter;
      tile.disabled = true;
      setMascotSpeech('word', 'Nice! Keep adding the next letter.');
    });
    tilesEl.appendChild(tile);
  });

  document.getElementById('word-check').onclick = () => {
    if (wordSlots.includes('')) {
      setResult(resultEl, 'Put a letter in every slot first.', false);
      setMascotSpeech('word', 'Missing letters — fill every space!');
      return;
    }
    const guess = wordSlots.join('');
    const correct = guess === currentWord.word;
    recordAttempt('words', correct, 'Great building!');
    setResult(resultEl, correct ? `Correct: ${currentWord.word}` : 'Not that one, try again.', correct);
    setMascotSpeech('word', correct ? 'That spells it right — nice castle building!' : 'Not quite yet, try a different order.');
    if (correct) {
      speak(currentWord.word);
      setTimeout(renderWordChallenge, 900);
    }
  };

  document.getElementById('word-clear').onclick = () => {
    wordSlots = Array(currentWord.word.length).fill('');
    [...slotsEl.children].forEach((slot) => {
      slot.textContent = '';
      slot.classList.remove('filled');
      slot.dataset.tileIndex = '';
    });
    [...tilesEl.children].forEach((tile) => {
      tile.disabled = false;
    });
    resultEl.textContent = '';
    resultEl.className = 'result';
    setMascotSpeech('word', 'Cleared! Tap tiles again to start fresh.');
  };

  document.getElementById('word-reveal').onclick = () => {
    speak(currentWord.word);
    setMascotSpeech('word', 'Hear it once to help your letters.' );
  };
}

function randomLetters(count) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const output = [];
  while (output.length < count) {
    const pick = randomChoice(alphabet);
    if (!output.includes(pick)) {
      output.push(pick);
    }
  }
  return output;
}

function renderSightQuestion() {
  const level = clampModuleLevel('sight');
  document.getElementById('sight-stage').textContent = `Unit ${level + 1} high-frequency words`;

  const visibleWords = [];
  for (let i = 0; i <= level; i += 1) {
    visibleWords.push(...SIGHT_WORD_LEVELS[i]);
  }

  currentSight = randomChoice(visibleWords);
  const optionsEl = document.getElementById('sight-options');
  const resultEl = document.getElementById('sight-result');
  const nextEl = document.getElementById('sight-next');
  const replayEl = document.getElementById('sight-replay');

  setMascotSpeech('sight', 'Listen to the word and tap the matching card.');
  optionsEl.innerHTML = '';
  resultEl.textContent = '';
  resultEl.className = 'result';
  nextEl.style.display = 'none';

  const options = shuffle([currentSight, ...pickDistinct(visibleWords, currentSight, 3)]);
  options.forEach((word) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.textContent = word;
    button.addEventListener('click', () => {
      const correct = word === currentSight;
      recordAttempt('sight', correct, 'Great word recall!');
      setResult(resultEl, correct ? 'Excellent.' : 'Try again with care.', correct);
      setMascotSpeech('sight', correct ? 'You found it — star job!' : 'Nope, listen to the prompt once more.');
      disableButtons(optionsEl, true);
      nextEl.style.display = 'inline-block';
      if (correct) {
        speak(currentSight);
      }
    });
    optionsEl.appendChild(button);
  });

  replayEl.onclick = () => {
    speak(currentSight);
    setMascotSpeech('sight', 'Try listening and tapping again.');
  };
  nextEl.onclick = renderSightQuestion;
}

function setupStory() {
  if (storyState.ready || storyState.running) {
    return;
  }

  const level = clampModuleLevel('stories');
  const available = [];
  for (let i = 0; i <= level; i += 1) {
    available.push(...STORY_LEVELS[i]);
  }
  storyState.story = randomChoice(available);
  storyState.questionIndex = 0;
  storyState.ready = true;
  storyState.running = false;

  const titleEl = document.getElementById('story-title');
  const textEl = document.getElementById('story-text');
  const questionEl = document.getElementById('story-question');
  const optionsEl = document.getElementById('story-options');
  const resultEl = document.getElementById('story-result');
  const actionEl = document.getElementById('story-action');

  titleEl.textContent = storyState.story.title;
  textEl.innerHTML = storyState.story.lines.map((line) => `<p>${line}</p>`).join('');
  questionEl.textContent = 'Tap Start to answer.';
  optionsEl.innerHTML = '';
  resultEl.textContent = '';
  resultEl.className = 'result';
  setMascotSpeech('stories', 'Start the story and answer each riddle.');

  document.getElementById('story-listen').onclick = () => {
    speak(storyState.story.lines.join('. '));
    setMascotSpeech('stories', 'Listen to the story voice if you like.');
  };
  actionEl.textContent = 'Start';
  actionEl.style.display = 'inline-block';
  actionEl.onclick = () => {
    storyState.running = true;
    actionEl.style.display = 'none';
    renderStoryQuestion();
  };
}

function renderStoryQuestion() {
  const questionEl = document.getElementById('story-question');
  const optionsEl = document.getElementById('story-options');
  const resultEl = document.getElementById('story-result');

  if (!storyState.story) {
    return;
  }

  if (storyState.questionIndex >= storyState.story.questions.length) {
    storyState.ready = false;
    storyState.running = false;
    questionEl.textContent = 'Great story reading. Try another one!';
    optionsEl.innerHTML = '';
    const action = document.getElementById('story-action');
    action.style.display = 'inline-block';
    action.textContent = 'Try another story';
    action.onclick = setupStory;
    resultEl.textContent = '';
    resultEl.className = 'result';
    setMascotSpeech('stories', 'You finished that story cave! Come back anytime.');
    return;
  }

  const question = storyState.story.questions[storyState.questionIndex];
  questionEl.textContent = question.q;
  optionsEl.innerHTML = '';
  resultEl.textContent = '';
  resultEl.className = 'result';

  question.options.forEach((option, optionIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option-btn';
    button.textContent = option;
    button.addEventListener('click', () => {
      const correct = optionIndex === question.answer;
      recordAttempt('stories', correct, 'Great listening and reading.');
      setResult(resultEl, correct ? 'Nice answer.' : 'Good try. Look back in the story.', correct);
      setMascotSpeech('stories', correct ? 'You solved that cave riddle! ⭐' : 'That is a sneaky one. Try again.');
      disableButtons(optionsEl, true);
      storyState.questionIndex += 1;
      setTimeout(renderStoryQuestion, 900);
    });
    optionsEl.appendChild(button);
  });
}

function setActiveTab(target) {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === target);
  });
  document.querySelectorAll('.panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === target);
  });

  if (target === 'phonics') {
    renderPhonics();
  }
  if (target === 'word') {
    renderWordChallenge();
  }
  if (target === 'sight') {
    renderSightQuestion();
  }
  if (target === 'stories') {
    setupStory();
  }
  if (target === 'progress') {
    updateProgress();
  }
  if (target === 'parent') {
    renderGoalList();
    renderThemes();
  }
}

function updateProgress() {
  const moduleMap = ['phonics', 'words', 'sight', 'stories'];
  moduleMap.forEach((module) => {
    const attempts = state.activities[module].attempts;
    const correct = state.activities[module].correct;
    const percent = attempts ? Math.round((correct / attempts) * 100) : 0;
    const unit = clampModuleLevel(module) + 1;

    document.getElementById(`level-${module}`).textContent = `Unit: ${unit}`;
    document.getElementById(`bar-${module}`).style.width = `${percent}%`;
    document.getElementById(`txt-${module}`).textContent = attempts
      ? `${correct}/${attempts} correct (${percent}%)`
      : 'No attempts yet';
  });

  renderMissions();
  renderBadges();
}

function renderThemes() {
  const picker = document.getElementById('theme-picker');
  picker.innerHTML = THEME_OPTIONS
    .map(
      (theme) => `
      <button type="button" class="theme-choice" data-theme="${theme.key}" data-active="${theme.key === state.activeTheme}">
        <span class="theme-dot ${theme.dot}"></span>
        <span>${theme.emoji} ${theme.name}</span>
      </button>`
    )
    .join('');

  picker.querySelectorAll('.theme-choice').forEach((button) => {
    button.addEventListener('click', () => {
      applyTheme(button.dataset.theme);
      renderThemes();
    });
  });
}

function applyTheme(themeKey) {
  state.activeTheme = normalizeTheme(themeKey);
  document.body.dataset.theme = state.activeTheme;
  saveState();
}

function setExportSummary() {
  document.getElementById('export-result').textContent =
    `Progress summary for ${state.childName}: ${state.totalCorrect}/${state.totalAttempts} correct, ${state.coins} coins, streak ${state.streak}, level ${getPlayerLevel()}.`;
}

function bindEvents() {
  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      setActiveTab(button.dataset.tab);
    });
  });

  document.querySelectorAll('.panel-btn').forEach((button) => {
    button.addEventListener('click', () => {
      setActiveTab(button.dataset.goto);
    });
  });

  document.querySelectorAll('.home-btn').forEach((button) => {
    button.addEventListener('click', () => {
      setActiveTab(button.dataset.goto);
    });
  });

  document.getElementById('quest-refresh').addEventListener('click', () => {
    state.missions = { date: '', tasks: [] };
    ensureMissions();
    updateProgress();
    setMascotSpeech('quest', 'Fresh missions are ready.');
  });

  document.getElementById('export-progress').addEventListener('click', setExportSummary);
}

function applyInitialTheme() {
  document.body.dataset.theme = normalizeTheme(state.activeTheme);
}

function init() {
  ensureMissions();
  applyInitialTheme();
  bindEvents();
  renderGoalList();
  renderThemes();
  renderMissions();
  updateHeader();
  updateProgress();
  setActiveTab('home');
}

init();

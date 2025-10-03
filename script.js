// === CẤU HÌNH TRÒ CHƠI ===
const MAPS = [
  {
    name: "Tí Hon",
    rows: 5,
    cols: 5,
    minMines: 3,
    maxMines: 4,
    helpers: { xray: 1, autoFlag: 1, surfer: 0, shield: 1, scanner: 0 },
    helpLimit: 1,
  },
  {
    name: "Khởi Động",
    rows: 8,
    cols: 8,
    minMines: 10,
    maxMines: 10,
    helpers: { xray: 2, autoFlag: 1, surfer: 0, shield: 1, scanner: 1 },
    helpLimit: 2,
  },
  {
    name: "Sơ Cấp",
    rows: 9,
    cols: 9,
    minMines: 12,
    maxMines: 12,
    helpers: { xray: 2, autoFlag: 1, surfer: 0, shield: 1, scanner: 1 },
    helpLimit: 2,
  },
  {
    name: "Tiêu Chuẩn",
    rows: 10,
    cols: 10,
    minMines: 15,
    maxMines: 20,
    helpers: { xray: 3, autoFlag: 2, surfer: 1, shield: 1, scanner: 1 },
    helpLimit: 2,
  },
  {
    name: "Bán Chuyên",
    rows: 12,
    cols: 12,
    minMines: 25,
    maxMines: 25,
    helpers: { xray: 3, autoFlag: 2, surfer: 1, shield: 1, scanner: 2 },
    helpLimit: 2,
  },
  {
    name: "Thử Thách",
    rows: 16,
    cols: 16,
    minMines: 40,
    maxMines: 40,
    helpers: { xray: 4, autoFlag: 3, surfer: 2, shield: 2, scanner: 2 },
    helpLimit: 3,
  },
  {
    name: "Nâng Cao",
    rows: 16,
    cols: 20,
    minMines: 60,
    maxMines: 60,
    helpers: { xray: 4, autoFlag: 3, surfer: 2, shield: 2, scanner: 3 },
    helpLimit: 3,
  },
  {
    name: "Chuyên Gia",
    rows: 16,
    cols: 30,
    minMines: 99,
    maxMines: 99,
    helpers: { xray: 5, autoFlag: 4, surfer: 3, shield: 2, scanner: 3 },
    helpLimit: 3,
  },
  {
    name: "Bậc Thầy",
    rows: 20,
    cols: 30,
    minMines: 130,
    maxMines: 130,
    helpers: { xray: 6, autoFlag: 5, surfer: 4, shield: 3, scanner: 4 },
    helpLimit: 4,
  },
  {
    name: "Tận Cùng",
    rows: 25,
    cols: 25,
    minMines: 150,
    maxMines: 150,
    helpers: { xray: 6, autoFlag: 5, surfer: 4, shield: 3, scanner: 4 },
    helpLimit: 4,
  },
  {
    name: "Mê Cung",
    rows: 25,
    cols: 35,
    minMines: 220,
    maxMines: 220,
    helpers: { xray: 7, autoFlag: 6, surfer: 5, shield: 3, scanner: 5 },
    helpLimit: 4,
  },
  {
    name: "Ác Mộng",
    rows: 30,
    cols: 30,
    minMines: 250,
    maxMines: 250,
    helpers: { xray: 8, autoFlag: 7, surfer: 6, shield: 4, scanner: 6 },
    helpLimit: 5,
  },
  {
    name: "Huyền Thoại",
    rows: 30,
    cols: 40,
    minMines: 350,
    maxMines: 350,
    helpers: { xray: 9, autoFlag: 8, surfer: 7, shield: 4, scanner: 7 },
    helpLimit: 5,
  },
  {
    name: "Bất Khả Thi",
    rows: 35,
    cols: 45,
    minMines: 450,
    maxMines: 450,
    helpers: { xray: 10, autoFlag: 9, surfer: 8, shield: 5, scanner: 8 },
    helpLimit: 6,
  },
  {
    name: "Vô Cực",
    rows: 40,
    cols: 40,
    minMines: 500,
    maxMines: 500,
    helpers: { xray: 10, autoFlag: 9, surfer: 8, shield: 5, scanner: 8 },
    helpLimit: 6,
  },
  {
    name: "Hủy Diệt",
    rows: 40,
    cols: 50,
    minMines: 650,
    maxMines: 650,
    helpers: { xray: 11, autoFlag: 10, surfer: 9, shield: 5, scanner: 9 },
    helpLimit: 7,
  },
  {
    name: "Thần Thánh",
    rows: 50,
    cols: 50,
    minMines: 800,
    maxMines: 800,
    helpers: { xray: 12, autoFlag: 10, surfer: 10, shield: 6, scanner: 10 },
    helpLimit: 7,
  },
  {
    name: "Vũ Trụ",
    rows: 60,
    cols: 60,
    minMines: 1200,
    maxMines: 1200,
    helpers: { xray: 15, autoFlag: 12, surfer: 12, shield: 7, scanner: 12 },
    helpLimit: 8,
  },
  {
    name: "Siêu Việt",
    rows: 75,
    cols: 75,
    minMines: 2000,
    maxMines: 2000,
    helpers: { xray: 20, autoFlag: 15, surfer: 15, shield: 8, scanner: 15 },
    helpLimit: 10,
  },
  {
    name: "Tuyệt Vọng",
    rows: 100,
    cols: 100,
    minMines: 3000,
    maxMines: 3000,
    helpers: { xray: 25, autoFlag: 20, surfer: 20, shield: 10, scanner: 20 },
    helpLimit: 12,
  },
];
const DISPLAY_NAME_KEY = "minesweeper_displayName";
const AVAILABLE_COMMANDS = [
  { cmd: "admin", desc: "Kích hoạt chế độ admin." },
  { cmd: "help", desc: "Nhận thêm phụ trợ (giới hạn theo map)." },
  { cmd: "help <tên> <sl>", desc: "Nhận thêm số lượng <sl> phụ trợ <tên>." },
];

// === FIREBASE IMPORTS ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  signInWithCustomToken,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  get,
  set,
  runTransaction,
  query,
  orderByChild,
  limitToFirst,
  onValue,
  off,
  serverTimestamp,
  remove,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// === FIREBASE & AUTH VARIABLES ===
let app, db, auth, userId, displayName;
const appId =
  typeof __app_id !== "undefined" ? __app_id : "minesweeper-app-dev";
const firebaseConfig =
  typeof __firebase_config !== "undefined"
    ? JSON.parse(__firebase_config)
    : {
        apiKey: "AIzaSyACmJTpr_o88ntGOKEDu0DtbS5p7J6VTe0",
        authDomain: "minesweeper-89d99.firebaseapp.com",
        databaseURL: "https://minesweeper-89d99-default-rtdb.firebaseio.com",
        projectId: "minesweeper-89d99",
        storageBucket: "minesweeper-89d99.appspot.com",
        messagingSenderId: "556722821257",
        appId: "1:556722821257:web:e796d477fd81b86a0f4e58",
      };

// === GAME STATE ===
let currentMapConfig = null,
  board = [],
  isGameOver = false,
  isGameStarted = false,
  isAdmin = false;
let currentNumMines = 0,
  minesLeft = 0,
  timerSeconds = 0,
  cellsRevealed = 0,
  timerInterval = null;
let personalBestTimes = {};
let xrayUses = 0,
  autoFlagUses = 0,
  surferUses = 0,
  shieldUses = 0,
  scannerUses = 0,
  helpUsesLeft = 0;
let isShieldActive = false,
  isScannerActive = false;
let currentRoomListener = null,
  currentRoomId = null;

// Pseudo-Random Number Generator for Multiplayer
class SeededRandom {
  constructor(seed) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) this.seed += 2147483646;
  }
  next() {
    this.seed = (this.seed * 16807) % 2147483647;
    return this.seed;
  }
  nextFloat() {
    return (this.next() - 1) / 2147483646;
  }
  nextInt(max) {
    return Math.floor(this.nextFloat() * max);
  }
}
let prng = new SeededRandom(Date.now());

// === DOM ELEMENTS ===
const mainContentEl = document.querySelector(".main-content");
const VIEWS = {
  mainMenu: document.getElementById("mainMenuView"),
  game: document.getElementById("gameView"),
  leaderboard: document.getElementById("leaderboardView"),
  customMap: document.getElementById("customMapView"),
  multiplayer: document.getElementById("multiplayerView"),
  lobby: document.getElementById("lobbyView"),
};
// Game View Elements
const mapNameEl = document.getElementById("mapName"),
  gameBoardEl = document.getElementById("gameBoard");
const minesLeftEl = document.getElementById("minesLeft"),
  timerEl = document.getElementById("timer");
const statusMessageEl = document.getElementById("statusMessage"),
  personalBestTimeEl = document.getElementById("personalBestTime");
const resetButton = document.getElementById("resetButton"),
  backToMenuButton = document.getElementById("backToMenuButton");
// Main Menu Elements
const mapSelectionEl = document.getElementById("mapSelection"),
  playerNameDisplayEl = document.getElementById("playerNameDisplay");
// Leaderboard Elements
const leaderboardTabsEl = document.getElementById("leaderboardTabs"),
  leaderboardContentEl = document.getElementById("leaderboardContent");
// Custom Map Elements
const customMapForm = document.getElementById("customMapForm");
// Multiplayer & Lobby Elements
const hostGameButton = document.getElementById("hostGameButton"),
  joinGameButton = document.getElementById("joinGameButton"),
  joinRoomInput = document.getElementById("joinRoomInput");
const lobbyRoomIdEl = document.getElementById("lobbyRoomId"),
  lobbyHostControlsEl = document.getElementById("lobbyHostControls"),
  lobbyMapSelect = document.getElementById("lobbyMapSelect");
const lobbyPlayerCountEl = document.getElementById("lobbyPlayerCount"),
  lobbyPlayerListEl = document.getElementById("lobbyPlayerList");
const startGameButton = document.getElementById("startGameButton"),
  leaveLobbyButton = document.getElementById("leaveLobbyButton"),
  lobbyGuestMessage = document.getElementById("lobbyGuestMessage");
// Modals
const displayNameModal = document.getElementById("displayNameModal"),
  displayNameForm = document.getElementById("displayNameForm"),
  displayNameInput = document.getElementById("displayNameInput");
const guideModal = document.getElementById("guideModal"),
  closeModalButton = document.getElementById("closeModalButton");
const commandModal = document.getElementById("commandModal"),
  commandInput = document.getElementById("commandInput");
// Helper Buttons
const xrayButton = document.getElementById("xrayButton"),
  xrayCountEl = document.getElementById("xrayCount");
const autoFlagButton = document.getElementById("autoFlagButton"),
  autoFlagCountEl = document.getElementById("autoFlagCount");
const surferButton = document.getElementById("surferButton"),
  surferCountEl = document.getElementById("surferCount");
const shieldButton = document.getElementById("shieldButton"),
  shieldCountEl = document.getElementById("shieldCount");
const scannerButton = document.getElementById("scannerButton"),
  scannerCountEl = document.getElementById("scannerCount");

// === VIEW MANAGEMENT & ROUTING ===
function showView(viewId, options = {}) {
  Object.values(VIEWS).forEach((view) => view.classList.add("hidden"));
  if (VIEWS[viewId]) {
    VIEWS[viewId].classList.remove("hidden");
    document.location.hash = viewId + (options.hash || "");
  }

  // Adjust container width based on view
  const config = options.mapConfig || currentMapConfig;
  let width = "450px",
    maxWidth = "90vw";
  if (viewId === "game" && config) {
    if (config.cols >= 100) {
      width = "1800px";
      maxWidth = "95vw";
    } else if (config.cols >= 75) {
      width = "1600px";
      maxWidth = "95vw";
    } else if (config.cols >= 50) {
      width = "1500px";
      maxWidth = "95vw";
    } else if (config.cols >= 40) {
      width = "1280px";
      maxWidth = "95vw";
    } else if (config.cols >= 30) {
      width = "1100px";
      maxWidth = "95vw";
    } else if (config.cols >= 25) {
      width = "900px";
      maxWidth = "95vw";
    } else if (config.cols >= 16) {
      width = "640px";
      maxWidth = "90vw";
    }
  } else if (viewId === "leaderboard") {
    width = "600px";
  }
  mainContentEl.style.width = width;
  mainContentEl.style.maxWidth = maxWidth;

  // View-specific setup
  if (viewId === "leaderboard") setupLeaderboardView(options);
  if (viewId === "lobby") setupLobbyView(options.hash.substring(1)); // Pass room ID
}

function handleRouteChange() {
  const hash = window.location.hash.slice(1) || "mainMenu";
  const [viewId, param] = hash.split("/");
  if (VIEWS[viewId]) {
    showView(viewId, { hash: param ? "/" + param : "" });
  } else {
    showView("mainMenu");
  }
}

// === FIREBASE FUNCTIONS ===
async function initializeFirebase() {
  try {
    app = initializeApp(firebaseConfig);
    db = getDatabase(app);
    auth = getAuth(app);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        userId = user.uid;
        await checkDisplayName();
        await loadBestTimesFromFirebase();
      } else {
        if (
          typeof __initial_auth_token !== "undefined" &&
          __initial_auth_token
        ) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      }
    });
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
}

async function checkDisplayName() {
  displayName = localStorage.getItem(DISPLAY_NAME_KEY);
  if (displayName) {
    playerNameDisplayEl.textContent = displayName;
    displayNameModal.style.display = "none";
  } else {
    const userRef = ref(db, `/artifacts/${appId}/users/${userId}/displayName`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      displayName = snapshot.val();
      localStorage.setItem(DISPLAY_NAME_KEY, displayName);
      playerNameDisplayEl.textContent = displayName;
      displayNameModal.style.display = "none";
    } else {
      displayNameModal.style.display = "flex";
    }
  }
}

async function setDisplayName(name) {
  displayName = name;
  await set(ref(db, `/artifacts/${appId}/users/${userId}/displayName`), name);
  localStorage.setItem(DISPLAY_NAME_KEY, name);
  playerNameDisplayEl.textContent = name;
  displayNameModal.style.display = "none";
}

async function submitScore() {
  if (!userId || !displayName || isAdmin) return;
  const mapName = currentMapConfig.name;
  const time = timerSeconds;

  // Save personal best time
  const currentBest = personalBestTimes[mapName] || Infinity;
  if (time < currentBest) {
    personalBestTimes[mapName] = time;
    await set(
      ref(db, `/artifacts/${appId}/users/${userId}/bestTimes/${mapName}`),
      time
    );
    displayBestTimeForCurrentMap();
  }

  // Update public leaderboard
  const mapScoreRef = ref(
    db,
    `/artifacts/${appId}/public/data/leaderboards/${mapName}/scores/${userId}`
  );
  const snapshot = await get(mapScoreRef);
  if (!snapshot.exists() || time < snapshot.val().time) {
    await set(mapScoreRef, { displayName: displayName, time: time });
  }
}

async function fetchAndShowLeaderboard(mapName) {
  leaderboardContentEl.innerHTML = `<p class="text-center text-gray-500">Đang tải...</p>`;
  const dataQuery = query(
    ref(db, `/artifacts/${appId}/public/data/leaderboards/${mapName}/scores`),
    orderByChild("time"),
    limitToFirst(20)
  );
  try {
    const snapshot = await get(dataQuery);
    let html = '<ol class="list-decimal list-inside space-y-2">';
    let rank = 1;
    if (!snapshot.exists()) {
      html += '<li class="text-center text-gray-500">Chưa có dữ liệu.</li>';
    } else {
      snapshot.forEach((child) => {
        const data = child.val();
        html += `<li class="flex justify-between items-center p-2 rounded ${
          rank === 1
            ? "bg-yellow-100"
            : rank === 2
            ? "bg-gray-200"
            : rank === 3
            ? "bg-yellow-50"
            : ""
        }">
                    <div><span class="font-bold mr-2">${rank}.</span><span>${
          data.displayName
        }</span></div>
                    <span class="font-bold text-indigo-600">${
                      data.time
                    }s</span></li>`;
        rank++;
      });
    }
    html += "</ol>";
    leaderboardContentEl.innerHTML = html;
  } catch (error) {
    console.error("Error fetching leaderboard: ", error);
    leaderboardContentEl.innerHTML = `<p class="text-center text-red-500">Lỗi tải bảng xếp hạng.</p>`;
  }
}

async function loadBestTimesFromFirebase() {
  if (!userId) return;
  const bestTimesRef = ref(db, `/artifacts/${appId}/users/${userId}/bestTimes`);
  const snapshot = await get(bestTimesRef);
  personalBestTimes = snapshot.exists() ? snapshot.val() : {};
  if (currentMapConfig) displayBestTimeForCurrentMap();
}

function displayBestTimeForCurrentMap() {
  if (!currentMapConfig || !personalBestTimes) return;
  const bestTime = personalBestTimes[currentMapConfig.name];
  personalBestTimeEl.textContent = bestTime ? `${bestTime}s` : "--s";
}

// === SETUP FUNCTIONS ===
function setupMainMenu() {
  mapSelectionEl.innerHTML = "";
  MAPS.forEach((map) => {
    const button = document.createElement("button");
    button.className =
      "w-full text-left p-4 rounded-lg transition duration-200 shadow hover:shadow-lg bg-gray-50 hover:bg-indigo-50 border border-gray-200";
    button.innerHTML = `<h3 class="font-bold text-indigo-700">${map.name}</h3>
                          <p class="text-sm text-gray-600">${
                            map.isCustom
                              ? "Tùy chỉnh"
                              : `${map.rows}x${map.cols} | ${map.minMines} Mìn`
                          }</p>`;
    button.onclick = () => {
      if (map.isCustom) {
        showView("customMap");
      } else {
        startGame(map);
      }
    };
    mapSelectionEl.appendChild(button);
  });
}

function setupLeaderboardView(options) {
  leaderboardTabsEl.innerHTML = "";
  MAPS.filter((m) => !m.isCustom).forEach((map) => {
    const button = document.createElement("button");
    button.className = "tab-button";
    button.textContent = map.name;
    button.dataset.mapName = map.name;
    button.onclick = () => {
      document
        .querySelectorAll(".tab-button")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      fetchAndShowLeaderboard(map.name);
    };
    leaderboardTabsEl.appendChild(button);
  });

  // Activate the correct tab
  const defaultMap = options.defaultMap || MAPS[0].name;
  const defaultTab = leaderboardTabsEl.querySelector(
    `[data-map-name="${defaultMap}"]`
  );
  if (defaultTab) {
    defaultTab.click();
  } else {
    leaderboardTabsEl.children[0]?.click();
  }
}

// === GAME LOGIC ===
function startGame(mapConfig, seed = Date.now()) {
  currentMapConfig = mapConfig;
  prng = new SeededRandom(seed);
  showView("game", { mapConfig: mapConfig });
  initGame();
}

function initGame() {
  const config = currentMapConfig;
  currentNumMines =
    prng.nextInt(config.maxMines - config.minMines + 1) + config.minMines;
  isGameOver = false;
  isGameStarted = false;
  isAdmin = false;
  isShieldActive = false;
  isScannerActive = false;
  minesLeft = currentNumMines;
  cellsRevealed = 0;
  timerSeconds = 0;
  stopTimer();

  xrayUses = config.helpers.xray;
  autoFlagUses = config.helpers.autoFlag;
  surferUses = config.helpers.surfer;
  shieldUses = config.helpers.shield;
  scannerUses = config.helpers.scanner;
  helpUsesLeft = config.helpLimit;
  updateHelperDisplay();

  mapNameEl.textContent = config.name;
  statusMessageEl.textContent = `Bắt đầu! Mìn: ${currentNumMines} quả.`;
  minesLeftEl.textContent = currentNumMines;
  timerEl.textContent = 0;

  gameBoardEl.style.gridTemplateColumns = `repeat(${config.cols}, 1fr)`;
  gameBoardEl.innerHTML = "";
  board = Array(config.rows)
    .fill(0)
    .map(() =>
      Array(config.cols)
        .fill(0)
        .map(() => ({
          isMine: false,
          neighborMines: 0,
          isRevealed: false,
          isFlagged: false,
        }))
    );

  for (let r = 0; r < config.rows; r++) {
    for (let c = 0; c < config.cols; c++) {
      const cellEl = document.createElement("div");
      cellEl.className = "cell";
      cellEl.dataset.row = r;
      cellEl.dataset.col = c;
      const contentEl = document.createElement("div");
      contentEl.className = "cell-content";
      cellEl.appendChild(contentEl);
      cellEl.addEventListener("click", handleLeftClick);
      cellEl.addEventListener("contextmenu", handleRightClick);
      gameBoardEl.appendChild(cellEl);
    }
  }
  displayBestTimeForCurrentMap();
}

function startTimer() {
  if (!timerInterval)
    timerInterval = setInterval(() => {
      timerSeconds++;
      timerEl.textContent = timerSeconds;
    }, 1000);
}
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function placeMines(startR, startC) {
  let minesPlaced = 0;
  const { rows, cols } = currentMapConfig;
  while (minesPlaced < currentNumMines) {
    const r = prng.nextInt(rows);
    const c = prng.nextInt(cols);
    if (!board[r][c].isMine && (r !== startR || c !== startC)) {
      board[r][c].isMine = true;
      minesPlaced++;
    }
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c].isMine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr,
            nc = c + dc;
          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            board[nr][nc].isMine
          )
            count++;
        }
      }
      board[r][c].neighborMines = count;
    }
  }
}

function handleLeftClick(event) {
  if (isGameOver) return;
  const target = event.currentTarget;
  const r = parseInt(target.dataset.row);
  const c = parseInt(target.dataset.col);
  if (isScannerActive) {
    useScanner(r, c);
    return;
  }
  if (board[r][c].isRevealed) {
    revealNeighbors(r, c);
    return;
  }
  if (!isGameStarted) {
    isGameStarted = true;
    placeMines(r, c);
    startTimer();
    updateHelperDisplay();
  }
  revealCell(r, c);
}

function handleRightClick(event) {
  event.preventDefault();
  if (isGameOver || !isGameStarted) return;
  const target = event.currentTarget;
  const r = parseInt(target.dataset.row);
  const c = parseInt(target.dataset.col);
  toggleFlag(r, c);
}

function toggleFlag(r, c, isAuto = false) {
  const cellData = board[r][c];
  if (cellData.isRevealed) return;
  const cellEl = gameBoardEl.children[r * currentMapConfig.cols + c];
  cellData.isFlagged = !cellData.isFlagged;
  const contentEl = cellEl.querySelector(".cell-content");
  if (cellData.isFlagged) {
    cellEl.classList.add("flagged");
    if (isAuto) cellEl.classList.add("auto-flagged");
    contentEl.innerHTML = "🚩";
    minesLeft--;
  } else {
    cellEl.classList.remove("flagged", "auto-flagged");
    contentEl.textContent = "";
    minesLeft++;
  }
  minesLeftEl.textContent = minesLeft;
}

function revealCell(r, c) {
  const { rows, cols } = currentMapConfig;
  if (
    r < 0 ||
    r >= rows ||
    c < 0 ||
    c >= cols ||
    board[r][c].isRevealed ||
    board[r][c].isFlagged
  )
    return;
  const cellData = board[r][c];
  const cellEl = gameBoardEl.children[r * cols + c];
  if (cellData.isMine) {
    if (isShieldActive) {
      isShieldActive = false;
      gameBoardEl.classList.remove("shield-active");
      cellData.isRevealed = true;
      cellsRevealed++;
      cellEl.classList.add("revealed");
      cellEl.querySelector(".cell-content").innerHTML = "🛡️";
      statusMessageEl.textContent = "Khiên đã bảo vệ bạn!";
      updateHelperDisplay();
      return;
    }
    cellEl.classList.add("mine");
    cellEl.querySelector(".cell-content").innerHTML = "💣";
    gameOver(false);
    return;
  }
  cellData.isRevealed = true;
  cellsRevealed++;
  cellEl.classList.add("revealed");
  const contentEl = cellEl.querySelector(".cell-content");
  contentEl.textContent = "";
  if (cellData.neighborMines > 0) {
    contentEl.textContent = cellData.neighborMines;
    contentEl.className = `cell-content c${cellData.neighborMines}`;
  } else {
    for (let dr = -1; dr <= 1; dr++)
      for (let dc = -1; dc <= 1; dc++)
        if (dr !== 0 || dc !== 0) revealCell(r + dr, c + dc);
  }
  if (cellsRevealed === rows * cols - currentNumMines) gameOver(true);
}

function revealNeighbors(r, c) {
  const { rows, cols } = currentMapConfig;
  if (!board[r][c].isRevealed) return false;
  const cellData = board[r][c];
  let flaggedCount = 0;
  for (let dr = -1; dr <= 1; dr++)
    for (let dc = -1; dc <= 1; dc++) {
      const nr = r + dr,
        nc = c + dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        board[nr][nc].isFlagged
      )
        flaggedCount++;
    }
  if (flaggedCount === cellData.neighborMines) {
    for (let dr = -1; dr <= 1; dr++)
      for (let dc = -1; dc <= 1; dc++) {
        const nr = r + dr,
          nc = c + dc;
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          !board[nr][nc].isRevealed &&
          !board[nr][nc].isFlagged
        )
          revealCell(nr, nc);
      }
    return true;
  }
  return false;
}

function gameOver(isWin) {
  if (isGameOver) return;
  isGameOver = true;
  stopTimer();
  if (isWin) {
    statusMessageEl.textContent = `🎉 CHÚC MỪNG! Thắng trong ${timerSeconds} giây!`;
    submitScore();
  } else {
    statusMessageEl.textContent = `💀 GAME OVER! Bạn đã chạm phải mìn.`;
  }
  // Reveal all mines
  const { rows, cols } = currentMapConfig;
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const cellEl = gameBoardEl.children[r * cols + c];
      if (board[r][c].isMine)
        cellEl.querySelector(".cell-content").innerHTML = "💣";
      cellEl.removeEventListener("click", handleLeftClick);
      cellEl.removeEventListener("contextmenu", handleRightClick);
    }
}

// === HELPER FUNCTIONS ===
function updateHelperDisplay() {
  xrayCountEl.textContent = xrayUses;
  autoFlagCountEl.textContent = autoFlagUses;
  surferCountEl.textContent = surferUses;
  shieldCountEl.textContent = shieldUses;
  scannerCountEl.textContent = scannerUses;
  const isDisabled = isGameOver || !isGameStarted;
  xrayButton.disabled = xrayUses <= 0 || isDisabled;
  autoFlagButton.disabled = autoFlagUses <= 0 || isDisabled;
  surferButton.disabled = surferUses <= 0 || isDisabled;
  shieldButton.disabled = shieldUses <= 0 || isDisabled || isShieldActive;
  scannerButton.disabled = scannerUses <= 0 || isDisabled || isScannerActive;
}

function useAutoFlag() {
  if (isGameOver || autoFlagUses <= 0 || !isGameStarted) return;
  const { rows, cols } = currentMapConfig;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cellData = board[r][c];
      if (!cellData.isRevealed || cellData.neighborMines === 0) continue;
      let hiddenNeighbors = [],
        flaggedNeighbors = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr,
            nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            const neighbor = board[nr][nc];
            if (!neighbor.isRevealed) {
              if (neighbor.isFlagged) flaggedNeighbors++;
              else hiddenNeighbors.push({ r: nr, c: nc });
            }
          }
        }
      }
      if (
        cellData.neighborMines === flaggedNeighbors + hiddenNeighbors.length &&
        hiddenNeighbors.length > 0
      ) {
        const mineToFlag = hiddenNeighbors[0];
        toggleFlag(mineToFlag.r, mineToFlag.c, true); // Pass true for auto-flag
        autoFlagUses--;
        updateHelperDisplay();
        statusMessageEl.textContent = `Cờ Tự Động đã cắm!`;
        return;
      }
    }
  }
  statusMessageEl.textContent =
    "Cờ Tự Động: Không tìm thấy ô chắc chắn là mìn.";
}
// Other helper functions (useXray, useSurfer, etc.) remain largely the same logic...
function useXray() {
  if (isGameOver || xrayUses <= 0 || !isGameStarted) return;
  const { rows, cols } = currentMapConfig;
  const e = [];
  for (let t = 0; t < rows; t++)
    for (let o = 0; o < cols; o++)
      board[t][o].isMine ||
        board[t][o].isRevealed ||
        board[t][o].isFlagged ||
        e.push({ r: t, c: o });
  e.length > 0
    ? (revealCell(
        e[Math.floor(Math.random() * e.length)].r,
        e[Math.floor(Math.random() * e.length)].c
      ),
      xrayUses--,
      updateHelperDisplay(),
      (statusMessageEl.textContent = "Tia X đã mở một ô an toàn!"))
    : (statusMessageEl.textContent = "Không còn ô an toàn để dùng Tia X.");
}
function useSurfer() {
  if (isGameOver || surferUses <= 0 || !isGameStarted) return;
  const { rows, cols } = currentMapConfig;
  for (let e = 0; e < rows; e++)
    for (let t = 0; t < cols; t++) {
      const o = board[e][t];
      if (o.isRevealed && 0 !== o.neighborMines) {
        let r = !1,
          s = 0;
        for (let a = -1; a <= 1; a++)
          for (let n = -1; n <= 1; n++) {
            const l = e + a,
              d = t + n;
            l >= 0 &&
              l < rows &&
              d >= 0 &&
              d < cols &&
              (board[l][d].isFlagged && s++,
              board[l][d].isRevealed || board[l][d].isFlagged || (r = !0));
          }
        if (o.neighborMines === s && r && revealNeighbors(e, t)) {
          surferUses--,
            updateHelperDisplay(),
            (statusMessageEl.textContent = "Lướt Sóng đã mở các ô an toàn!");
          return;
        }
      }
    }
  statusMessageEl.textContent =
    "Lướt Sóng: Không tìm thấy vị trí phù hợp để lướt.";
}
function useShield() {
  isGameOver ||
    shieldUses <= 0 ||
    !isGameStarted ||
    isShieldActive ||
    ((isShieldActive = !0),
    shieldUses--,
    gameBoardEl.classList.add("shield-active"),
    (statusMessageEl.textContent = "Khiên bảo vệ đã được kích hoạt!"),
    updateHelperDisplay());
}
function useScanner(e, t) {
  if (isScannerActive) {
    const { rows, cols } = currentMapConfig;
    let o = 0;
    for (let r = -1; r <= 1; r++)
      for (let s = -1; s <= 1; s++) {
        const a = e + r,
          n = t + s;
        if (a >= 0 && a < rows && n >= 0 && n < cols) {
          board[a][n].isMine && o++;
          const l = gameBoardEl.children[a * cols + n];
          l.classList.add("scanned-cell"),
            setTimeout(() => l.classList.remove("scanned-cell"), 700);
        }
      }
    (isScannerActive = !1),
      scannerUses--,
      gameBoardEl.classList.remove("scanner-active"),
      (statusMessageEl.textContent = `Máy Dò: Tìm thấy ${o} mìn trong khu vực 3x3.`),
      updateHelperDisplay();
  } else
    isGameOver ||
      scannerUses <= 0 ||
      !isGameStarted ||
      ((isScannerActive = !0),
      gameBoardEl.classList.add("scanner-active"),
      (statusMessageEl.textContent =
        "Chọn một ô để quét khu vực 3x3 xung quanh."),
      updateHelperDisplay());
}

// === MULTIPLAYER FUNCTIONS ===
async function hostGame() {
  if (!displayName) {
    alert("Vui lòng đặt tên trước khi tạo phòng!");
    return;
  }
  const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  const initialMap = MAPS[1]; // Default to 'Khởi Động'
  const newRoom = {
    hostId: userId,
    createdAt: serverTimestamp(),
    gameState: "lobby",
    mapConfig: initialMap,
    gameMode: "permadeath",
    players: { [userId]: { displayName: displayName, status: "waiting" } },
  };
  await set(roomRef, newRoom);
  showView("lobby", { hash: `/${roomId}` });
}

async function joinRoom(roomId) {
  if (!displayName) {
    alert("Vui lòng đặt tên trước khi vào phòng!");
    return;
  }
  if (!roomId) {
    alert("Vui lòng nhập ID phòng.");
    return;
  }
  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  const snapshot = await get(roomRef);
  if (snapshot.exists() && snapshot.val().gameState === "lobby") {
    await set(
      ref(
        db,
        `/artifacts/${appId}/public/data/rooms/${roomId}/players/${userId}`
      ),
      { displayName: displayName, status: "waiting" }
    );
    showView("lobby", { hash: `/${roomId}` });
  } else {
    alert("Phòng không tồn tại hoặc đã bắt đầu.");
  }
}

function leaveRoom() {
  if (currentRoomId) {
    const playerRef = ref(
      db,
      `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}`
    );
    remove(playerRef); // Remove player from room
  }
  if (currentRoomListener) off(currentRoomListener);
  currentRoomId = null;
  currentRoomListener = null;
  showView("mainMenu");
}

function setupLobbyView(roomId) {
  currentRoomId = roomId;
  lobbyRoomIdEl.textContent = roomId;

  // Populate map select for host
  lobbyMapSelect.innerHTML = "";
  MAPS.filter((m) => !m.isCustom).forEach((map) => {
    const option = document.createElement("option");
    option.value = map.name;
    option.textContent = map.name;
    lobbyMapSelect.add(option);
  });

  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  const unsubscribe = onValue(roomRef, (snapshot) => {
    currentRoomListener = unsubscribe;

    // Khi rời phòng
    if (currentRoomListener) {
      currentRoomListener(); // gọi để hủy listener
      currentRoomListener = null;
    }
    if (!snapshot.exists()) {
      alert("Phòng đã bị đóng.");
      leaveRoom();
      return;
    }
    const roomData = snapshot.val();

    // Update player list
    const players = roomData.players || {};
    lobbyPlayerListEl.innerHTML = Object.values(players)
      .map((p) => `<div class="p-2 bg-gray-100 rounded">${p.displayName}</div>`)
      .join("");
    lobbyPlayerCountEl.textContent = Object.keys(players).length;

    // Host specific UI
    const isHost = roomData.hostId === userId;
    lobbyHostControlsEl.classList.toggle("hidden", !isHost);
    startGameButton.classList.toggle("hidden", !isHost);
    lobbyGuestMessage.classList.toggle("hidden", isHost);

    // Update host controls based on room data
    lobbyMapSelect.value = roomData.mapConfig.name;
    document.querySelector(
      `input[name="gameMode"][value="${roomData.gameMode}"]`
    ).checked = true;

    // Check if game has started
    if (roomData.gameState === "in-progress") {
      const selectedMap = MAPS.find((m) => m.name === roomData.mapConfig.name);
      startGame(selectedMap, roomData.seed);
    }
  });
}

async function updateRoomSettings() {
  if (!currentRoomId) return;
  const selectedMap = MAPS.find((m) => m.name === lobbyMapSelect.value);
  const gameMode = document.querySelector(
    'input[name="gameMode"]:checked'
  ).value;
  await set(
    ref(db, `/artifacts/${appId}/public/data/rooms/${currentRoomId}/mapConfig`),
    selectedMap
  );
  await set(
    ref(db, `/artifacts/${appId}/public/data/rooms/${currentRoomId}/gameMode`),
    gameMode
  );
}

async function triggerStartGame() {
  if (!currentRoomId) return;
  const roomRef = ref(
    db,
    `/artifacts/${appId}/public/data/rooms/${currentRoomId}`
  );
  await runTransaction(roomRef, (room) => {
    if (room) {
      if (room.gameState === "lobby") {
        room.gameState = "in-progress";
        room.seed = Math.floor(Math.random() * 1000000);
      }
    }
    return room;
  });
}

// === EVENT LISTENERS & INITIALIZATION ===
window.onload = async function () {
  await initializeFirebase();
  setupMainMenu();
  handleRouteChange();

  // View navigation
  document
    .getElementById("leaderboardMenuButton")
    .addEventListener("click", () => showView("leaderboard"));
  document
    .getElementById("leaderboardGameButton")
    .addEventListener("click", () =>
      showView("leaderboard", { defaultMap: currentMapConfig?.name })
    );
  document
    .getElementById("multiplayerMenuButton")
    .addEventListener("click", () => showView("multiplayer"));
  document
    .getElementById("customMapMenuButton")
    .addEventListener("click", () => showView("customMap"));
  document
    .querySelectorAll(".back-to-menu-button")
    .forEach((btn) =>
      btn.addEventListener("click", () => showView("mainMenu"))
    );
  backToMenuButton.addEventListener("click", () => showView("mainMenu"));

  // Game buttons
  resetButton.addEventListener("click", initGame);
  guideButton.addEventListener(
    "click",
    () => (guideModal.style.display = "flex")
  );
  closeModalButton.addEventListener(
    "click",
    () => (guideModal.style.display = "none")
  );

  // Custom map form
  customMapForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const rows = parseInt(document.getElementById("customRows").value);
    const cols = parseInt(document.getElementById("customCols").value);
    let mines = parseInt(document.getElementById("customMines").value);
    if (mines >= rows * cols) mines = rows * cols - 1;

    const customConfig = {
      name: "Map Tùy Chỉnh",
      rows,
      cols,
      minMines: mines,
      maxMines: mines,
      helpers: {
        xray: parseInt(document.getElementById("customXray").value),
        autoFlag: parseInt(document.getElementById("customAutoFlag").value),
        surfer: parseInt(document.getElementById("customSurfer").value),
        shield: parseInt(document.getElementById("customShield").value),
        scanner: parseInt(document.getElementById("customScanner").value),
      },
      helpLimit: 0,
    };
    startGame(customConfig);
  });

  // Display name form
  displayNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = displayNameInput.value.trim();
    if (name) setDisplayName(name);
  });

  // Helper buttons
  xrayButton.addEventListener("click", useXray);
  autoFlagButton.addEventListener("click", useAutoFlag);
  surferButton.addEventListener("click", useSurfer);
  shieldButton.addEventListener("click", useShield);
  scannerButton.addEventListener("click", () => useScanner(null, null));

  // Multiplayer buttons
  hostGameButton.addEventListener("click", hostGame);
  joinGameButton.addEventListener("click", () =>
    joinRoom(joinRoomInput.value.trim().toUpperCase())
  );
  leaveLobbyButton.addEventListener("click", leaveRoom);
  startGameButton.addEventListener("click", triggerStartGame);
  lobbyMapSelect.addEventListener("change", updateRoomSettings);
  document
    .querySelectorAll('input[name="gameMode"]')
    .forEach((radio) => radio.addEventListener("change", updateRoomSettings));
  lobbyRoomIdEl.addEventListener("click", () =>
    navigator.clipboard
      .writeText(currentRoomId)
      .then(() => alert("Đã sao chép ID phòng!"))
  );

  // Command Modal (logic from original script)
  document.getElementById("commandMenuButton").addEventListener("click", () => {
    (commandModal.style.display = "flex"), commandInput.focus();
  });
  document
    .getElementById("closeCommandModalButton")
    .addEventListener("click", () => {
      commandModal.style.display = "none";
    });
  document
    .getElementById("submitCommandButton")
    .addEventListener("click", () => {
      /*processCommand(commandInput.value)*/ (commandInput.value = ""),
        (commandModal.style.display = "none");
    });
};
window.addEventListener("hashchange", handleRouteChange);
window.addEventListener("beforeunload", leaveRoom); // Clean up multiplayer room on exit

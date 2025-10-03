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
  { cmd: "/help", desc: "Hiển thị danh sách lệnh." },
  { cmd: "/admin", desc: "Kích hoạt/Tắt chế độ admin (không lưu điểm)." },
  {
    cmd: "/account <tên>",
    desc: "Chuyển sang tài khoản mới với tên được cung cấp.",
  },
  { cmd: "/gethelp", desc: "Nhận thêm phụ trợ (giới hạn theo map)." },
];

// === FIREBASE IMPORTS ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  signInAnonymously,
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
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
  onDisconnect,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// === FIREBASE & AUTH VARIABLES ===
let app,
  db,
  auth,
  userId,
  displayName,
  requestedDisplayName = null;
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
        storageBucket: "minesweeper-89d99.firebasestorage.app",
        messagingSenderId: "556722821257",
        appId: "1:556722821257:web:e796d477fd81b86a0f4e58",
        measurementId: "G-51XQH404LR",
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
  currentRoomId = null,
  isMultiplayer = false;
let lastPlayerList = {};

// Pseudo-Random Number Generator
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
const mapNameEl = document.getElementById("mapName"),
  gameBoardEl = document.getElementById("gameBoard");
const minesLeftEl = document.getElementById("minesLeft"),
  timerEl = document.getElementById("timer");
const statusMessageEl = document.getElementById("statusMessage"),
  personalBestTimeEl = document.getElementById("personalBestTime");
const multiplayerStatusEl = document.getElementById("multiplayerStatus");
const playerNameDisplayEl = document.getElementById("playerNameDisplay");
const leaderboardTabsEl = document.getElementById("leaderboardTabs"),
  leaderboardContentEl = document.getElementById("leaderboardContent");
const lobbyRoomIdEl = document.getElementById("lobbyRoomId"),
  lobbyHostControlsEl = document.getElementById("lobbyHostControls"),
  lobbyMapSelect = document.getElementById("lobbyMapSelect");
const lobbyPlayerCountEl = document.getElementById("lobbyPlayerCount"),
  lobbyPlayerListEl = document.getElementById("lobbyPlayerList");
const startGameButton = document.getElementById("startGameButton"),
  leaveLobbyButton = document.getElementById("leaveLobbyButton");
const lobbyCustomMapButton = document.getElementById("lobbyCustomMapButton");
const displayNameModal = document.getElementById("displayNameModal"),
  displayNameForm = document.getElementById("displayNameForm");
const guideModal = document.getElementById("guideModal");
const commandModal = document.getElementById("commandModal"),
  commandInput = document.getElementById("commandInput"),
  commandForm = document.getElementById("commandForm");
const gameOverModal = document.getElementById("gameOverModal");
const customMapView = document.getElementById("customMapView"),
  customMapForm = document.getElementById("customMapForm");
const mapSelectionEl = document.getElementById("mapSelection");

// === VIEW MANAGEMENT & TOAST NOTIFICATIONS ===
function showView(viewId, options = {}) {
  Object.values(VIEWS).forEach((view) => view.classList.add("hidden"));
  if (VIEWS[viewId]) VIEWS[viewId].classList.remove("hidden");

  let width = "450px",
    maxWidth = "90vw";
  if (viewId === "game") {
    const config = options.mapConfig || currentMapConfig;
    if (config) {
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
    }
  } else if (viewId === "leaderboard") {
    width = "600px";
  }
  mainContentEl.style.width = width;
  mainContentEl.style.maxWidth = maxWidth;

  if (viewId === "leaderboard") setupLeaderboardView(options);
  if (viewId === "lobby") setupLobbyView(options.roomId);
  if (viewId === "customMap")
    customMapView.dataset.isLobbyConfig = options.isLobbyConfig || "false";
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  const colors = {
    info: "bg-blue-500",
    success: "bg-green-500",
    error: "bg-red-500",
  };
  // Các class ban đầu để toast ẩn bên phải
  toast.className = `transform transition-all duration-300 ease-in-out translate-x-full opacity-0 p-4 rounded-lg text-white shadow-lg ${colors[type]}`;
  toast.textContent = message;
  container.appendChild(toast);

  // Hiệu ứng đi vào: Xóa các class ẩn đi để toast trượt vào và hiện ra
  setTimeout(() => {
    toast.classList.remove("translate-x-full", "opacity-0");
  }, 100);

  // Lên lịch để bắt đầu hiệu ứng đi ra và xóa toast
  setTimeout(() => {
    // ---- THAY ĐỔI CHÍNH Ở ĐÂY ----
    // Hiệu ứng đi ra: Thêm lại các class ban đầu để toast trượt ra và mờ đi
    toast.classList.add("translate-x-full", "opacity-0");

    // Chờ hiệu ứng (300ms) chạy xong rồi xóa element
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000); // Bắt đầu thoát ra sau 4 giây
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
        if (requestedDisplayName) {
          await setDisplayName(requestedDisplayName, true);
          requestedDisplayName = null;
        } else {
          await checkDisplayName();
        }
        await loadBestTimesFromFirebase();
        await loadTotalPlayTime();
      } else {
        const token =
          typeof __initial_auth_token !== "undefined"
            ? __initial_auth_token
            : null;
        if (token)
          await signInWithCustomToken(auth, token).catch(() =>
            signInAnonymously(auth)
          );
        else await signInAnonymously(auth);
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
    const snapshot = await get(
      ref(db, `/artifacts/${appId}/users/${userId}/displayName`)
    );
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

async function setDisplayName(name, isCommand = false) {
  if (!name || name.length < 3) {
    if (isCommand) showToast("Tên phải có ít nhất 3 ký tự.", "error");
    return;
  }
  displayName = name;
  await set(ref(db, `/artifacts/${appId}/users/${userId}/displayName`), name);
  localStorage.setItem(DISPLAY_NAME_KEY, name);
  playerNameDisplayEl.textContent = name;
  displayNameModal.style.display = "none";
  if (isCommand) showToast(`Đã đổi tài khoản thành: ${name}`, "success");
}

async function submitScore() {
  if (!userId || !displayName || isAdmin || isMultiplayer) return;
  const mapName = currentMapConfig.name;
  const time = timerSeconds;
  const currentBest = personalBestTimes[mapName] || Infinity;
  if (time < currentBest) {
    personalBestTimes[mapName] = time;
    await set(
      ref(db, `/artifacts/${appId}/users/${userId}/bestTimes/${mapName}`),
      time
    );
    displayBestTimeForCurrentMap();
  }
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
    if (!snapshot.exists()) {
      html += '<li class="text-center text-gray-500">Chưa có dữ liệu.</li>';
    } else {
      let rank = 1;
      snapshot.forEach((child) => {
        const data = child.val();
        const rankColors = {
          1: "bg-yellow-100 text-yellow-800",
          2: "bg-gray-200 text-gray-800",
          3: "bg-amber-100 text-amber-800",
        };
        html += `<li class="flex justify-between items-center p-2 rounded ${
          rankColors[rank] || ""
        }">
                    <div><span class="font-bold mr-2 w-6 inline-block">${rank}.</span><span>${
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

async function loadTotalPlayTime() {
  if (!userId) return;
  const timeRef = ref(db, `/artifacts/${appId}/users/${userId}/totalPlayTime`);
  const snapshot = await get(timeRef);
  // This value is just loaded, not displayed anywhere yet, but ready for updates.
}

async function updateTotalPlayTime() {
  if (!userId || timerSeconds === 0) return;
  const userTimeRef = ref(
    db,
    `/artifacts/${appId}/users/${userId}/totalPlayTime`
  );
  const leaderboardTimeRef = ref(
    db,
    `/artifacts/${appId}/public/data/leaderboards/Tổng/scores/${userId}`
  );

  runTransaction(userTimeRef, (currentTotal) => {
    return (currentTotal || 0) + timerSeconds;
  }).then(async (result) => {
    if (result.committed) {
      await set(leaderboardTimeRef, {
        displayName,
        time: result.snapshot.val(),
      });
    }
  });
}

// === SETUP & GAME LOGIC ===
function setupMainMenu() {
  mapSelectionEl.innerHTML = "";
  MAPS.forEach((map) => {
    const button = document.createElement("button");
    button.className =
      "w-full text-left p-4 rounded-lg transition duration-200 shadow hover:shadow-lg bg-gray-50 hover:bg-indigo-50 border border-gray-200";
    button.innerHTML = `<h3 class="font-bold text-indigo-700">${map.name}</h3><p class="text-sm text-gray-600">${map.rows}x${map.cols} | ${map.minMines} Mìn</p>`;
    button.onclick = () => startGame(map);
    mapSelectionEl.appendChild(button);
  });
}

function setupLeaderboardView(options) {
  leaderboardTabsEl.innerHTML = "";
  let allMaps = [{ name: "Tổng" }, ...MAPS.filter((m) => !m.isCustom)];

  allMaps.forEach((map) => {
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

  const defaultMap = options.defaultMap || "Tổng";
  const defaultTab = leaderboardTabsEl.querySelector(
    `[data-map-name="${defaultMap}"]`
  );
  if (defaultTab) defaultTab.click();
  else if (leaderboardTabsEl.children.length > 0)
    leaderboardTabsEl.children[0].click();
}

function startGame(mapConfig, seed = Date.now()) {
  currentMapConfig = mapConfig;
  isMultiplayer = !!mapConfig.isMultiplayer;
  prng = new SeededRandom(seed);
  showView("game", { mapConfig: mapConfig });
  initGame();
}

function initGame() {
  isGameOver = false;
  isGameStarted = false;
  isAdmin = false;
  isShieldActive = false;
  isScannerActive = false;
  currentNumMines =
    prng.nextInt(currentMapConfig.maxMines - currentMapConfig.minMines + 1) +
    currentMapConfig.minMines;
  minesLeft = currentNumMines;
  cellsRevealed = 0;
  timerSeconds = 0;
  stopTimer();

  xrayUses = currentMapConfig.helpers.xray;
  autoFlagUses = currentMapConfig.helpers.autoFlag;
  surferUses = currentMapConfig.helpers.surfer;
  shieldUses = currentMapConfig.helpers.shield;
  scannerUses = currentMapConfig.helpers.scanner;
  helpUsesLeft = currentMapConfig.helpLimit;
  updateHelperDisplay();

  multiplayerStatusEl.innerHTML = "";
  multiplayerStatusEl.classList.add("hidden");
  if (isMultiplayer) multiplayerStatusEl.classList.remove("hidden");

  mapNameEl.textContent = currentMapConfig.name;
  statusMessageEl.textContent = `Bắt đầu! Mìn: ${currentNumMines} quả.`;
  minesLeftEl.textContent = currentNumMines;
  timerEl.textContent = 0;

  gameBoardEl.style.gridTemplateColumns = `repeat(${currentMapConfig.cols}, 1fr)`;
  gameBoardEl.innerHTML = "";
  board = Array(currentMapConfig.rows)
    .fill(0)
    .map(() =>
      Array(currentMapConfig.cols)
        .fill(0)
        .map(() => ({
          isMine: false,
          neighborMines: 0,
          isRevealed: false,
          isFlagged: false,
        }))
    );

  for (let r = 0; r < currentMapConfig.rows; r++) {
    for (let c = 0; c < currentMapConfig.cols; c++) {
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
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    timerSeconds++;
    timerEl.textContent = timerSeconds;
    if (isMultiplayer && currentRoomId && !isGameOver) {
      set(
        ref(
          db,
          `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}/time`
        ),
        timerSeconds
      );
    }
  }, 1000);
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
      checkWinCondition();
      return;
    }
    cellEl.classList.add("mine-hit");
    gameBoardEl.classList.add("board-shake");
    setTimeout(() => gameBoardEl.classList.remove("board-shake"), 500);
    gameOver(false);
    return;
  }
  cellData.isRevealed = true;
  cellsRevealed++;
  cellEl.classList.add("revealed");
  const contentEl = cellEl.querySelector(".cell-content");
  if (cellData.neighborMines > 0) {
    contentEl.textContent = cellData.neighborMines;
    contentEl.className = `cell-content c${cellData.neighborMines}`;
  } else {
    for (let dr = -1; dr <= 1; dr++)
      for (let dc = -1; dc <= 1; dc++)
        if (dr !== 0 || dc !== 0) revealCell(r + dr, c + dc);
  }

  if (isMultiplayer && currentRoomId) {
    const progress = Math.round(
      (cellsRevealed / (rows * cols - currentNumMines)) * 100
    );
    set(
      ref(
        db,
        `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}/progress`
      ),
      progress
    );
  }
  checkWinCondition();
}

function checkWinCondition() {
  if (
    !isGameOver &&
    cellsRevealed ===
      currentMapConfig.rows * currentMapConfig.cols - currentNumMines
  ) {
    gameOver(true);
  }
}

function gameOver(isWin) {
  if (isGameOver) return;
  isGameOver = true;
  stopTimer();
  updateTotalPlayTime();

  if (isMultiplayer) {
    set(
      ref(
        db,
        `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}/status`
      ),
      isWin ? "won" : "lost"
    );
  }

  showGameOverModal(isWin);

  const { rows, cols } = currentMapConfig;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cellEl = gameBoardEl.children[r * cols + c];
      const cellData = board[r][c];
      const contentEl = cellEl.querySelector(".cell-content");

      if (cellData.isFlagged && cellData.isMine) {
        contentEl.innerHTML = "✅";
      } else if (cellData.isFlagged && !cellData.isMine) {
        contentEl.innerHTML = "❌";
      } else if (!cellData.isFlagged && cellData.isMine) {
        cellEl.classList.add("mine");
        contentEl.innerHTML = "💣";
      }

      cellEl.removeEventListener("click", handleLeftClick);
      cellEl.removeEventListener("contextmenu", handleRightClick);
    }
  }
}

function showGameOverModal(isWin) {
  const icon = document.getElementById("gameOverIcon");
  const title = document.getElementById("gameOverTitle");
  const message = document.getElementById("gameOverMessage");
  const time = document.getElementById("gameOverTime");

  if (isWin) {
    icon.innerHTML = "🏆";
    title.textContent = "CHIẾN THẮNG!";
    title.className = "text-3xl font-extrabold mb-2 text-green-500";
    message.textContent = `Chúc mừng! Bạn đã hoàn thành xuất sắc.`;
    if (!isMultiplayer) submitScore();
  } else {
    icon.innerHTML = "💀";
    title.textContent = "THUA CUỘC!";
    title.className = "text-3xl font-extrabold mb-2 text-red-500";
    message.textContent = "Rất tiếc, bạn đã chạm phải mìn.";
  }
  time.textContent = `${timerSeconds}s`;
  gameOverModal.style.display = "flex";
}

// === COMMANDS ===
function processCommand(input) {
  const [cmd, ...args] = input.trim().split(" ");
  switch (cmd) {
    case "/help":
      let helpMsg = AVAILABLE_COMMANDS.map((c) => `${c.cmd} - ${c.desc}`).join(
        "\n"
      );
      showToast(helpMsg);
      break;
    case "/admin":
      isAdmin = !isAdmin;
      showToast(`Chế độ Admin ${isAdmin ? "đã BẬT" : "đã TẮT"}.`, "info");
      break;
    case "/account":
      if (args.length > 0) {
        requestedDisplayName = args.join(" ");
        signOut(auth).catch((e) => console.error("Sign out error", e));
      } else {
        showToast("Sử dụng: /account <tên mới>", "error");
      }
      break;
    case "/gethelp":
      if (helpUsesLeft > 0) {
        helpUsesLeft--;
        xrayUses++;
        autoFlagUses++;
        shieldUses++;
        updateHelperDisplay();
        showToast(
          `Đã nhận thêm phụ trợ! Còn lại: ${helpUsesLeft} lần.`,
          "success"
        );
      } else {
        showToast("Bạn đã hết lượt nhận trợ giúp cho map này.", "error");
      }
      break;
    default:
      showToast(`Lệnh không xác định: ${cmd}`, "error");
  }
}

// === MULTIPLAYER FUNCTIONS ===
async function hostGame() {
  if (!displayName) {
    showToast("Vui lòng đặt tên trước!", "error");
    return;
  }
  const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  const newRoom = {
    hostId: userId,
    createdAt: serverTimestamp(),
    gameState: "lobby",
    mapConfig: MAPS[1],
    players: {
      [userId]: {
        displayName: displayName,
        status: "waiting",
        time: 0,
        progress: 0,
      },
    },
  };
  await set(roomRef, newRoom);
  showView("lobby", { roomId: roomId });
}

// Thêm các dòng console.log này vào hàm joinRoom trong script.js
// Sửa lại trong file script.js

async function joinRoom(roomId) {
  if (!displayName) {
    showToast("Vui lòng đặt tên trước!", "error");
    return;
  }
  roomId = roomId.toUpperCase();
  if (!roomId) {
    showToast("Vui lòng nhập ID phòng.", "error");
    return;
  }

  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  const snapshot = await get(roomRef);

  if (snapshot.exists() && snapshot.val().gameState === "lobby") {
    // ---- THAY ĐỔI CHÍNH Ở ĐÂY ----
    // Tạo một tham chiếu trực tiếp đến vị trí cần ghi dữ liệu của người chơi
    const playerRef = ref(
      db,
      `/artifacts/${appId}/public/data/rooms/${roomId}/players/${userId}`
    );

    try {
      // Sử dụng tham chiếu mới này
      await set(playerRef, {
        displayName: displayName,
        status: "waiting",
        time: 0,
        progress: 0,
      });
      showView("lobby", { roomId: roomId });
    } catch (error) {
      console.error("Firebase SET operation failed:", error);
      showToast("Không thể vào phòng. Đã xảy ra lỗi.", "error");
    }
    // ---- HẾT THAY ĐỔI ----
  } else {
    showToast("Phòng không tồn tại hoặc đã bắt đầu.", "error");
  }
}

function leaveRoom() {
  if (!currentRoomId) {
    showView("mainMenu");
    return;
  }

  if (currentRoomListener) {
    const roomRef = ref(
      db,
      `/artifacts/${appId}/public/data/rooms/${currentRoomId}`
    );
    off(roomRef, "value", currentRoomListener);
    currentRoomListener = null;
  }

  const playerRef = ref(
    db,
    `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}`
  );
  onDisconnect(playerRef).cancel();
  remove(playerRef);

  currentRoomId = null;
  isMultiplayer = false;
  showView("mainMenu");
}

function setupLobbyView(roomId) {
  currentRoomId = roomId;
  lobbyRoomIdEl.textContent = roomId;

  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  const playerRef = ref(db, `${roomRef.path}/players/${userId}`);
  onDisconnect(playerRef).remove();

  if (currentRoomListener)
    off(
      ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`),
      "value",
      currentRoomListener
    );

  currentRoomListener = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      if (currentRoomId) showToast("Phòng đã bị đóng.", "info"); // Avoid toast on initial load if room not found
      leaveRoom();
      return;
    }
    const roomData = snapshot.val();
    const players = roomData.players || {};
    const currentPlayerIds = Object.keys(players);
    Object.keys(lastPlayerList).forEach((id) => {
      if (!currentPlayerIds.includes(id) && id !== userId)
        showToast(`${lastPlayerList[id].displayName} đã rời phòng.`, "info");
    });
    lastPlayerList = players;

    lobbyPlayerListEl.innerHTML = Object.values(players)
      .map((p) => `<div class="p-2 bg-gray-100 rounded">${p.displayName}</div>`)
      .join("");
    lobbyPlayerCountEl.textContent = Object.keys(players).length;

    const isHost = roomData.hostId === userId;
    lobbyHostControlsEl.classList.toggle("hidden", !isHost);
    startGameButton.classList.toggle("hidden", !isHost);
    document
      .getElementById("lobbyGuestMessage")
      .classList.toggle("hidden", isHost);

    // Update map select without losing custom map
    if (isHost) {
      const currentMapName = roomData.mapConfig.name;
      const selectContainsMap = Array.from(lobbyMapSelect.options).some(
        (opt) => opt.value === currentMapName
      );
      if (!selectContainsMap) {
        const option = new Option(currentMapName, currentMapName, true, true);
        lobbyMapSelect.add(option);
      }
      lobbyMapSelect.value = currentMapName;
    }

    if (roomData.gameState === "in-progress") {
      off(roomRef, "value", currentRoomListener);
      currentRoomListener = null;
      startGame({ ...roomData.mapConfig, isMultiplayer: true }, roomData.seed);
      listenToGameUpdates(roomId);
    }
  });
}

function listenToGameUpdates(roomId) {
  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  currentRoomListener = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists() || !snapshot.val().players) return;
    const players = snapshot.val().players;
    let statusHTML =
      '<h3 class="font-bold mb-2">Trạng thái người chơi:</h3><div class="space-y-2">';
    let allDone = true;
    Object.values(players).forEach((p) => {
      if (p.status === "waiting") allDone = false;
      const statusMap = { waiting: "🏃‍♂️", won: "🏆", lost: "💀" };
      let progressColor = p.status === "won" ? "bg-green-500" : "bg-blue-500";

      statusHTML += `<div class="p-2 bg-gray-100 rounded">
                    <div class="flex justify-between items-center text-sm mb-1"><span class="font-semibold">${
                      p.displayName
                    } ${statusMap[p.status] || ""}</span><span>${
        p.time || 0
      }s</span></div>
                    <div class="w-full bg-gray-300 rounded-full h-2.5"><div class="${progressColor} h-2.5 rounded-full" style="width: ${
        p.progress || 0
      }%"></div></div>
                </div>`;
    });
    statusHTML += "</div>";
    multiplayerStatusEl.innerHTML = statusHTML;
    if (allDone && isGameStarted) {
      showToast("Tất cả người chơi đã hoàn thành!", "success");
      off(roomRef, "value", currentRoomListener);
      currentRoomListener = null;
    }
  });
}

async function updateRoomSettings() {
  if (!currentRoomId) return;
  const mapName = lobbyMapSelect.value;
  let selectedMap =
    MAPS.find((m) => m.name === mapName) ||
    JSON.parse(customMapView.dataset.customConfig || "{}");
  await set(
    ref(db, `/artifacts/${appId}/public/data/rooms/${currentRoomId}/mapConfig`),
    selectedMap
  );
}

async function triggerStartGame() {
  if (!currentRoomId) return;
  const roomRef = ref(
    db,
    `/artifacts/${appId}/public/data/rooms/${currentRoomId}`
  );
  await runTransaction(roomRef, (room) => {
    if (room && room.gameState === "lobby") {
      room.gameState = "in-progress";
      room.seed = Math.floor(Math.random() * 1000000);
      Object.keys(room.players).forEach(
        (pid) => (room.players[pid].status = "playing")
      );
    }
    return room;
  });
}

// === EVENT LISTENERS & INITIALIZATION ===
window.onload = async function () {
  await initializeFirebase();
  setupMainMenu();
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
  document.getElementById("resetButton").addEventListener("click", initGame);
  document
    .getElementById("guideButton")
    .addEventListener("click", () => (guideModal.style.display = "flex"));
  document
    .getElementById("backToMenuButton")
    .addEventListener("click", () =>
      isMultiplayer ? leaveRoom() : showView("mainMenu")
    );
  document
    .getElementById("closeCustomMapButton")
    .addEventListener("click", () => customMapView.classList.add("hidden"));

  customMapForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const rows = parseInt(document.getElementById("customRows").value),
      cols = parseInt(document.getElementById("customCols").value);
    let mines = parseInt(document.getElementById("customMines").value);
    if (mines >= rows * cols) mines = rows * cols - 1;
    const customConfig = {
      name: "Map Tùy Chỉnh",
      rows,
      cols,
      minMines: mines,
      maxMines: mines,
      isCustom: true,
      helpers: {
        xray: parseInt(document.getElementById("customXray").value),
        autoFlag: parseInt(document.getElementById("customAutoFlag").value),
        surfer: parseInt(document.getElementById("customSurfer").value),
        shield: parseInt(document.getElementById("customShield").value),
        scanner: parseInt(document.getElementById("customScanner").value),
      },
      helpLimit: 0,
    };
    if (customMapView.dataset.isLobbyConfig === "true") {
      customMapView.dataset.customConfig = JSON.stringify(customConfig);
      const option = new Option(
        customConfig.name,
        customConfig.name,
        true,
        true
      );
      const existingOpt = lobbyMapSelect.querySelector(
        `[value="${customConfig.name}"]`
      );
      if (existingOpt) existingOpt.remove();
      lobbyMapSelect.add(option);
      updateRoomSettings();
      showView("lobby", { roomId: currentRoomId });
    } else {
      startGame(customConfig);
    }
  });

  displayNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    setDisplayName(document.getElementById("displayNameInput").value.trim());
  });
  ["xray", "autoFlag", "surfer", "shield"].forEach((id) =>
    document
      .getElementById(`${id}Button`)
      .addEventListener(
        "click",
        window[`use${id.charAt(0).toUpperCase() + id.slice(1)}`]
      )
  );
  document
    .getElementById("scannerButton")
    .addEventListener("click", () => useScanner(null, null));
  document.getElementById("hostGameButton").addEventListener("click", hostGame);
  document
    .getElementById("joinGameButton")
    .addEventListener("click", () =>
      joinRoom(document.getElementById("joinRoomInput").value.trim())
    );
  leaveLobbyButton.addEventListener("click", leaveRoom);
  startGameButton.addEventListener("click", triggerStartGame);
  lobbyMapSelect.addEventListener("change", updateRoomSettings);
  lobbyCustomMapButton.addEventListener("click", () =>
    showView("customMap", { isLobbyConfig: true })
  );
  lobbyRoomIdEl.addEventListener("click", () =>
    navigator.clipboard
      .writeText(currentRoomId)
      .then(() => showToast("Đã sao chép ID phòng!", "success"))
  );
  document.getElementById("commandMenuButton").addEventListener("click", () => {
    commandModal.style.display = "flex";
    commandInput.focus();
  });
  document
    .getElementById("closeCommandModalButton")
    .addEventListener("click", () => {
      commandModal.style.display = "none";
    });
  commandForm.addEventListener("submit", (e) => {
    e.preventDefault();
    processCommand(commandInput.value);
    commandInput.value = "";
    commandModal.style.display = "none";
  });
  document
    .getElementById("closeGameOverModal")
    .addEventListener("click", () => (gameOverModal.style.display = "none"));
  document
    .getElementById("gameOverResetButton")
    .addEventListener("click", () => {
      gameOverModal.style.display = "none";
      initGame();
    });
  document
    .getElementById("gameOverMenuButton")
    .addEventListener("click", () => {
      gameOverModal.style.display = "none";
      isMultiplayer ? leaveRoom() : showView("mainMenu");
    });
};
window.addEventListener("beforeunload", () => {
  if (currentRoomId) leaveRoom();
});

// === Dummy functions for event listeners, logic is in main script ===
function useXray() {}
function useAutoFlag() {}
function useSurfer() {}
function useShield() {}
function useScanner() {}
// ... (All other functions from previous version need to be here for the game to work)
// These functions are copy-pasted from the previous step to ensure completeness
function updateHelperDisplay() {
  const xrayCountEl = document.getElementById("xrayCount"),
    autoFlagCountEl = document.getElementById("autoFlagCount"),
    surferCountEl = document.getElementById("surferCount"),
    shieldCountEl = document.getElementById("shieldCount"),
    scannerCountEl = document.getElementById("scannerCount");
  const xrayButton = document.getElementById("xrayButton"),
    autoFlagButton = document.getElementById("autoFlagButton"),
    surferButton = document.getElementById("surferButton"),
    shieldButton = document.getElementById("shieldButton"),
    scannerButton = document.getElementById("scannerButton");
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
useXray = function () {
  if (isGameOver || xrayUses <= 0 || !isGameStarted) return;
  const safeCells = [];
  for (let r = 0; r < currentMapConfig.rows; r++)
    for (let c = 0; c < currentMapConfig.cols; c++)
      if (
        !board[r][c].isMine &&
        !board[r][c].isRevealed &&
        !board[r][c].isFlagged
      )
        safeCells.push({ r, c });
  if (safeCells.length > 0) {
    const { r, c } = safeCells[Math.floor(Math.random() * safeCells.length)];
    revealCell(r, c);
    xrayUses--;
    updateHelperDisplay();
    statusMessageEl.textContent = "Tia X đã mở một ô an toàn!";
  } else {
    statusMessageEl.textContent = "Không còn ô an toàn để dùng Tia X.";
  }
};
useAutoFlag = function () {
  if (isGameOver || autoFlagUses <= 0 || !isGameStarted) return;
  for (let r = 0; r < currentMapConfig.rows; r++) {
    for (let c = 0; c < currentMapConfig.cols; c++) {
      const cellData = board[r][c];
      if (!cellData.isRevealed || cellData.neighborMines === 0) continue;
      let hiddenNeighbors = [],
        flaggedNeighbors = 0;
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr,
            nc = c + dc;
          if (
            nr >= 0 &&
            nr < currentMapConfig.rows &&
            nc >= 0 &&
            nc < currentMapConfig.cols
          ) {
            const neighbor = board[nr][nc];
            if (!neighbor.isRevealed) {
              if (neighbor.isFlagged) flaggedNeighbors++;
              else hiddenNeighbors.push({ r: nr, c: nc });
            }
          }
        }
      if (
        cellData.neighborMines === flaggedNeighbors + hiddenNeighbors.length &&
        hiddenNeighbors.length > 0
      ) {
        hiddenNeighbors.forEach((cell) => {
          if (!board[cell.r][cell.c].isFlagged)
            toggleFlag(cell.r, cell.c, true);
        });
        autoFlagUses--;
        updateHelperDisplay();
        statusMessageEl.textContent = "Cờ Tự Động đã cắm!";
        return;
      }
    }
  }
  statusMessageEl.textContent =
    "Cờ Tự Động: Không tìm thấy ô chắc chắn là mìn.";
};
useSurfer = function () {
  showToast("Lướt Sóng: Tính năng đang được phát triển.", "info");
};
useShield = function () {
  if (isGameOver || shieldUses <= 0 || !isGameStarted || isShieldActive) return;
  isShieldActive = true;
  shieldUses--;
  gameBoardEl.classList.add("shield-active");
  statusMessageEl.textContent = "Khiên bảo vệ đã được kích hoạt!";
  updateHelperDisplay();
};
useScanner = function (r_scan, c_scan) {
  if (isScannerActive) {
    let mineCount = 0;
    for (let dr = -1; dr <= 1; dr++)
      for (let dc = -1; dc <= 1; dc++) {
        const nr = r_scan + dr,
          nc = c_scan + dc;
        if (
          nr >= 0 &&
          nr < currentMapConfig.rows &&
          nc >= 0 &&
          nc < currentMapConfig.cols
        ) {
          if (board[nr][nc].isMine) mineCount++;
          const cellEl = gameBoardEl.children[nr * currentMapConfig.cols + nc];
          cellEl.classList.add("scanned-cell");
          setTimeout(() => cellEl.classList.remove("scanned-cell"), 700);
        }
      }
    isScannerActive = false;
    scannerUses--;
    gameBoardEl.classList.remove("scanner-active");
    statusMessageEl.textContent = `Máy Dò: Tìm thấy ${mineCount} mìn trong khu vực 3x3.`;
    updateHelperDisplay();
  } else {
    if (isGameOver || scannerUses <= 0 || !isGameStarted) return;
    isScannerActive = true;
    gameBoardEl.classList.add("scanner-active");
    statusMessageEl.textContent = "Chọn một ô để quét khu vực 3x3 xung quanh.";
    updateHelperDisplay();
  }
};
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
function placeMines(startR, startC) {
  let minesPlaced = 0;
  while (minesPlaced < currentNumMines) {
    const r = prng.nextInt(currentMapConfig.rows);
    const c = prng.nextInt(currentMapConfig.cols);
    if (!board[r][c].isMine && (r !== startR || c !== startC)) {
      board[r][c].isMine = true;
      minesPlaced++;
    }
  }
  for (let r = 0; r < currentMapConfig.rows; r++)
    for (let c = 0; c < currentMapConfig.cols; c++) {
      if (board[r][c].isMine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr,
            nc = c + dc;
          if (
            nr >= 0 &&
            nr < currentMapConfig.rows &&
            nc >= 0 &&
            nc < currentMapConfig.cols &&
            board[nr][nc].isMine
          )
            count++;
        }
      board[r][c].neighborMines = count;
    }
}
function revealNeighbors(r, c) {
  if (!board[r][c].isRevealed) return;
  let flaggedCount = 0;
  for (let dr = -1; dr <= 1; dr++)
    for (let dc = -1; dc <= 1; dc++) {
      const nr = r + dr,
        nc = c + dc;
      if (
        nr >= 0 &&
        nr < currentMapConfig.rows &&
        nc >= 0 &&
        nc < currentMapConfig.cols &&
        board[nr][nc].isFlagged
      )
        flaggedCount++;
    }
  if (flaggedCount === board[r][c].neighborMines) {
    for (let dr = -1; dr <= 1; dr++)
      for (let dc = -1; dc <= 1; dc++) revealCell(r + dr, c + dc);
  }
}
function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}
function displayBestTimeForCurrentMap() {
  if (!currentMapConfig || !personalBestTimes) return;
  const bestTime = personalBestTimes[currentMapConfig.name];
  personalBestTimeEl.textContent = bestTime ? `${bestTime}s` : "--s";
}
async function loadBestTimesFromFirebase() {
  if (!userId) return;
  const bestTimesRef = ref(db, `/artifacts/${appId}/users/${userId}/bestTimes`);
  const snapshot = await get(bestTimesRef);
  personalBestTimes = snapshot.exists() ? snapshot.val() : {};
  if (currentMapConfig) displayBestTimeForCurrentMap();
}

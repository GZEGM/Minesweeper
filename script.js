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
const MATCHMAKING_MAPS = ["Tiêu Chuẩn", "Thử Thách"];
const BOT_DIFFICULTY = {
  easy: { name: "Dễ", speed: 2000, accuracy: 0.7 },
  medium: { name: "Trung Bình", speed: 1500, accuracy: 0.85 },
  hard: { name: "Khó", speed: 1000, accuracy: 0.95 },
  master: { name: "Bậc Thầy", speed: 600, accuracy: 0.99 },
};

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
const GAME_STATE_KEY = "minesweeper_savedGame";
const SESSION_STATE_KEY = "minesweeper_session";

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
  update,
  runTransaction,
  query,
  orderByChild,
  limitToFirst,
  limitToLast,
  startAt,
  onValue,
  onChildAdded,
  off,
  serverTimestamp,
  remove,
  onDisconnect,
  push,
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
  currentRoomId = null,
  isMultiplayer = false,
  isMultiplayerGameRunning = false;
let multiplayerStartTime = null,
  lastPlayerList = {},
  initialRoomId = null;
let currentlySpectatingPlayerId = null;
let botGameInterval = null,
  botState = null,
  isBotGame = false;
let matchmakingListener = null,
  currentMatchmakingMode = null,
  isFindingMatch = false,
  myMatchmakingLobbyRef = null;
let roomEventsListener = null;

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
  customMap: document.getElementById("customMapView"),
  multiplayer: document.getElementById("multiplayerView"),
  lobby: document.getElementById("lobbyView"),
  playWithBot: document.getElementById("playWithBotView"),
  matchmaking: document.getElementById("matchmakingView"),
};
const mapNameEl = document.getElementById("mapName"),
  gameBoardEl = document.getElementById("gameBoard");
const minesLeftEl = document.getElementById("minesLeft"),
  timerEl = document.getElementById("timer");
const statusMessageEl = document.getElementById("statusMessage"),
  personalBestTimeEl = document.getElementById("personalBestTime");
const multiplayerStatusEl = document.getElementById("multiplayerStatus");
const playerNameDisplayEl = document.getElementById("playerNameDisplay");
const lobbyRoomIdEl = document.getElementById("lobbyRoomId"),
  lobbyHostControlsEl = document.getElementById("lobbyHostControls"),
  lobbyMapSelect = document.getElementById("lobbyMapSelect");
const lobbyPlayerCountEl = document.getElementById("lobbyPlayerCount"),
  lobbyPlayerListEl = document.getElementById("lobbyPlayerList");
const startGameButton = document.getElementById("startGameButton"),
  readyButton = document.getElementById("readyButton"),
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
const leaderboardModal = document.getElementById("leaderboardModal");
const historyModal = document.getElementById("historyModal");
const spectatorView = document.getElementById("spectatorView"),
  spectatorStatusContainer = document.getElementById(
    "spectatorStatusContainer"
  );
const mineHitModal = document.getElementById("mineHitModal");
const lobbyMapPreviewEl = document.getElementById("lobbyMapPreview"),
  lobbyMapPreviewDetailsEl = document.getElementById("lobbyMapPreviewDetails");
const lobbyChatForm = document.getElementById("lobbyChatForm"),
  lobbyChatInput = document.getElementById("lobbyChatInput"),
  lobbyChatMessagesEl = document.getElementById("lobbyChatMessages");
const gameChatForm = document.getElementById("gameChatForm"),
  gameChatInput = document.getElementById("gameChatInput"),
  gameChatMessagesEl = document.getElementById("gameChatMessages"),
  multiplayerChatContainer = document.getElementById(
    "multiplayerChatContainer"
  );
const botMapSelect = document.getElementById("botMapSelect"),
  botDifficultySelect = document.getElementById("botDifficultySelect");
const matchmakingStatusContainer = document.getElementById(
    "matchmakingStatusContainer"
  ),
  matchmakingOptions = document.getElementById("matchmakingOptions"),
  matchmakingStatusText = document.getElementById("matchmakingStatusText"),
  cancelMatchmakingButton = document.getElementById("cancelMatchmakingButton");
const botGameStatusEl = document.getElementById("botGameStatus");
const resumeGamePrompt = document.getElementById("resumeGamePrompt");

// === HELPER FUNCTIONS ===
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
function useXray() {
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
    const { r, c } = safeCells[prng.nextInt(safeCells.length)];
    revealCell(r, c);
    xrayUses--;
    updateHelperDisplay();
    statusMessageEl.textContent = "Tia X đã mở một ô an toàn!";
    if (isMultiplayer)
      logRoomEvent(currentRoomId, "helper_used", { helper: "Tia X" });
  } else {
    statusMessageEl.textContent = "Không còn ô an toàn để dùng Tia X.";
  }
}
function useAutoFlag() {
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
        if (isMultiplayer)
          logRoomEvent(currentRoomId, "helper_used", { helper: "Cờ Tự Động" });
        return;
      }
    }
  }
  statusMessageEl.textContent =
    "Cờ Tự Động: Không tìm thấy ô chắc chắn là mìn.";
}
function useSurfer() {
  if (isGameOver || surferUses <= 0 || !isGameStarted) return;
  let revealedCount = 0;
  // Lặp qua toàn bộ bàn cờ để tìm tất cả các vị trí có thể "lướt sóng"
  for (let r = 0; r < currentMapConfig.rows; r++) {
    for (let c = 0; c < currentMapConfig.cols; c++) {
      const cellData = board[r][c];
      // Chỉ xem xét các ô đã mở và có số
      if (cellData.isRevealed && cellData.neighborMines > 0) {
        let flaggedCount = 0;
        let unrevealedNeighbors = false;
        // Đếm số cờ xung quanh
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const nr = r + dr;
            const nc = c + dc;
            if (
              nr >= 0 &&
              nr < currentMapConfig.rows &&
              nc >= 0 &&
              nc < currentMapConfig.cols
            ) {
              const neighbor = board[nr][nc];
              if (neighbor.isFlagged) flaggedCount++;
              if (!neighbor.isRevealed && !neighbor.isFlagged)
                unrevealedNeighbors = true;
            }
          }
        }
        // Nếu số cờ khớp với số trên ô và còn ô chưa mở, tiến hành mở các ô xung quanh
        if (flaggedCount === cellData.neighborMines && unrevealedNeighbors) {
          const initialCellsRevealed = cellsRevealed;
          revealNeighbors(r, c);
          if (cellsRevealed > initialCellsRevealed) {
            revealedCount += cellsRevealed - initialCellsRevealed;
          }
        }
      }
    }
  }

  if (revealedCount > 0) {
    surferUses--;
    updateHelperDisplay();
    statusMessageEl.textContent = `Lướt Sóng đã mở ${revealedCount} ô an toàn!`;
    if (isMultiplayer)
      logRoomEvent(currentRoomId, "helper_used", { helper: "Lướt Sóng" });
  } else {
    statusMessageEl.textContent = "Lướt Sóng: Không tìm thấy vị trí phù hợp.";
  }
}
function useShield() {
  if (isGameOver || shieldUses <= 0 || !isGameStarted || isShieldActive) return;
  isShieldActive = true;
  shieldUses--;
  gameBoardEl.classList.add("shield-active");
  statusMessageEl.textContent = "Khiên bảo vệ đã được kích hoạt!";
  updateHelperDisplay();
  if (isMultiplayer)
    logRoomEvent(currentRoomId, "helper_used", { helper: "Khiên" });
}
function useScanner(r_scan, c_scan) {
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
    if (isMultiplayer)
      logRoomEvent(currentRoomId, "helper_used", { helper: "Máy Dò" });
  } else {
    if (isGameOver || scannerUses <= 0 || !isGameStarted) return;
    isScannerActive = true;
    gameBoardEl.classList.add("scanner-active");
    statusMessageEl.textContent = "Chọn một ô để quét khu vực 3x3 xung quanh.";
    updateHelperDisplay();
  }
}

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
  if (viewId === "lobby") setupLobbyView(options.roomId);
  if (viewId === "customMap")
    customMapView.dataset.isLobbyConfig = options.isLobbyConfig || "false";

  // Save current view to session storage
  const sessionData = {
    view: viewId,
    roomId: currentRoomId,
    isMultiplayer,
    isBotGame,
  };
  sessionStorage.setItem(SESSION_STATE_KEY, JSON.stringify(sessionData));
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
  toast.className = `transform transition-all duration-300 ease-in-out translate-x-full opacity-0 p-4 rounded-lg text-white shadow-lg ${colors[type]}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove("translate-x-full", "opacity-0");
  }, 100);
  setTimeout(() => {
    toast.classList.add("translate-x-full", "opacity-0");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
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
        if (initialRoomId && displayName) {
          showView("multiplayer");
          document.getElementById("joinRoomInput").value = initialRoomId;
          await joinRoom(initialRoomId);
          initialRoomId = null;
        } else if (initialRoomId) {
          showToast(`Vui lòng nhập tên để vào phòng ${initialRoomId}`, "info");
        }

        // Check for session first, then saved game
        if (!(await checkForSession())) {
          checkForSavedGame();
        }
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
  if (initialRoomId) {
    showView("multiplayer");
    document.getElementById("joinRoomInput").value = initialRoomId;
    await joinRoom(initialRoomId);
    initialRoomId = null;
  }
}
async function submitScore() {
  if (!userId || !displayName || isAdmin || isMultiplayer || isBotGame) return;
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
    await set(mapScoreRef, {
      displayName: displayName,
      time: time,
      lastPlayed: serverTimestamp(),
    });
  } else {
    await update(mapScoreRef, { lastPlayed: serverTimestamp() });
  }
  logGameHistory("Thắng");
}
async function fetchAndShowLeaderboard(mapName, targetElement) {
  targetElement.innerHTML = `<p class="text-center text-gray-500">Đang tải...</p>`;
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
        }">${`<div><span class="font-bold mr-2 w-6 inline-block">${rank}.</span><span>${data.displayName}</span></div><span class="font-bold text-indigo-600">${data.time}s</span>`}</li>`;
        rank++;
      });
    }
    html += "</ol>";
    targetElement.innerHTML = html;
  } catch (error) {
    console.error("Error fetching leaderboard: ", error);
    targetElement.innerHTML = `<p class="text-center text-red-500">Lỗi tải bảng xếp hạng.</p>`;
  }
}
async function loadTotalPlayTime() {
  if (!userId) return;
  const timeRef = ref(db, `/artifacts/${appId}/users/${userId}/totalPlayTime`);
  const snapshot = await get(timeRef);
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
function updateFirebaseCellState(r, c, state) {
  if (!isMultiplayer || !currentRoomId) return;
  const myStatus = lastPlayerList[userId]?.status;
  if (myStatus !== "playing") return;
  const cellStateRef = ref(
    db,
    `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}/boardState/${r}_${c}`
  );
  set(cellStateRef, state);
}

// === EVENT & CHAT FUNCTIONS ===
async function logRoomEvent(roomId, type, payload) {
  if (!roomId || !userId || !displayName) return;
  const event = {
    senderId: userId,
    senderName: displayName,
    type: type,
    payload: payload,
    timestamp: serverTimestamp(),
  };
  const newEventRef = push(
    ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}/events`)
  );
  await set(newEventRef, event);
}
async function sendChatMessage(roomId, message, inputEl) {
  if (!message.trim()) return;
  await logRoomEvent(roomId, "chat", { message: message.trim() });
  inputEl.value = "";
}
function setupRoomEventListener(roomId) {
  if (roomEventsListener) off(roomEventsListener);
  const eventsRef = query(
    ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}/events`),
    startAt(Date.now())
  );
  roomEventsListener = onChildAdded(eventsRef, (snapshot) => {
    const event = snapshot.val();
    if (!event) return;
    if (event.senderId === userId) return; // Don't show toast for my own actions

    switch (event.type) {
      case "chat":
        const messagesEl = VIEWS.lobby.classList.contains("hidden")
          ? gameChatMessagesEl
          : lobbyChatMessagesEl;
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("chat-message", "other");
        msgDiv.innerHTML = `<b class="text-xs">${event.senderName}:</b><p>${event.payload.message}</p>`;
        messagesEl.appendChild(msgDiv);
        messagesEl.scrollTop = messagesEl.scrollHeight;
        showToast(`${event.senderName}: ${event.payload.message}`, "info");
        break;
      case "helper_used":
        showToast(
          `${event.senderName} đã dùng ${event.payload.helper}.`,
          "info"
        );
        break;
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
  botMapSelect.innerHTML = MAPS.map(
    (map) => `<option value="${map.name}">${map.name}</option>`
  ).join("");
}
function setupLeaderboardModal(options = {}) {
  const leaderboardMapSelect = document.getElementById("leaderboardMapSelect"),
    leaderboardModalContent = document.getElementById(
      "leaderboardModalContent"
    );
  if (leaderboardMapSelect.options.length === 0) {
    let allMaps = [{ name: "Tổng" }, ...MAPS.filter((m) => !m.isCustom)];
    allMaps.forEach((map) => {
      const option = document.createElement("option");
      option.value = map.name;
      option.textContent = map.name;
      leaderboardMapSelect.appendChild(option);
    });
    leaderboardMapSelect.onchange = () => {
      fetchAndShowLeaderboard(
        leaderboardMapSelect.value,
        leaderboardModalContent
      );
    };
  }
  const defaultMap = options.defaultMap || "Tổng";
  if (
    Array.from(leaderboardMapSelect.options).some(
      (opt) => opt.value === defaultMap
    )
  ) {
    leaderboardMapSelect.value = defaultMap;
  } else {
    leaderboardMapSelect.value = "Tổng";
  }
  fetchAndShowLeaderboard(leaderboardMapSelect.value, leaderboardModalContent);
  leaderboardModal.style.display = "flex";
}
async function showHistoryModal() {
  const contentEl = document.getElementById("historyModalContent");
  contentEl.innerHTML = `<p class="text-center text-gray-500">Đang tải...</p>`;
  historyModal.style.display = "flex";

  if (!userId) {
    contentEl.innerHTML = `<p class="text-center text-red-500">Vui lòng đăng nhập để xem lịch sử.</p>`;
    return;
  }

  const historyQuery = query(
    ref(db, `/artifacts/${appId}/users/${userId}/gameHistory`),
    limitToLast(50)
  );
  try {
    const snapshot = await get(historyQuery);
    if (!snapshot.exists()) {
      contentEl.innerHTML = `<p class="text-center text-gray-500">Chưa có trận đấu nào.</p>`;
      return;
    }

    let html = '<div class="space-y-3">';
    const historyData = [];
    snapshot.forEach((child) => historyData.push(child.val()));
    historyData.reverse(); // Show latest first

    historyData.forEach((game) => {
      const date = new Date(game.timestamp).toLocaleString("vi-VN");
      const resultColor =
        game.result === "Thắng" ? "text-green-600" : "text-red-600";
      html += `
                <div class="p-3 bg-gray-50 rounded-lg border">
                    <div class="flex justify-between items-center">
                        <span class="font-bold">${game.mapName}</span>
                        <span class="font-bold ${resultColor}">${game.result}</span>
                    </div>
                    <div class="text-sm text-gray-600 mt-1">
                        <span>Chế độ: ${game.mode} | Thời gian: ${game.time}s</span>
                        <span class="block text-xs text-gray-400">${date}</span>
                    </div>
                </div>
            `;
    });
    html += "</div>";
    contentEl.innerHTML = html;
  } catch (error) {
    console.error("Lỗi tải lịch sử:", error);
    contentEl.innerHTML = `<p class="text-center text-red-500">Không thể tải lịch sử đấu.</p>`;
  }
}
function startGame(mapConfig, seed = Date.now(), options = {}) {
  currentMapConfig = mapConfig;
  isMultiplayer = !!mapConfig.isMultiplayer;
  isBotGame = !!options.isBotGame;
  if (isMultiplayer) {
    isMultiplayerGameRunning = true;
  }
  prng = new SeededRandom(seed);
  showView("game", { mapConfig: mapConfig });
  initGame();
  if (isMultiplayer) {
    isGameStarted = true;
    placeMines(-1, -1);
    startMultiplayerTimer();
    updateHelperDisplay();
    multiplayerChatContainer.classList.remove("hidden");
    gameChatForm.onsubmit = (e) => {
      e.preventDefault();
      sendChatMessage(currentRoomId, gameChatInput.value, gameChatInput);
    };
  }
  if (isBotGame) {
    botState = { difficulty: options.botDifficulty };
    isGameStarted = true;
    placeMines(-1, -1);
    startTimer();
    updateHelperDisplay();
    startBot(options.botDifficulty, mapConfig);
    botGameStatusEl.classList.remove("hidden");
  }
}
function initGame() {
  isGameOver = false;
  isGameStarted = false;
  isAdmin = false;
  isShieldActive = false;
  isScannerActive = false;
  currentlySpectatingPlayerId = null;
  stopBot();
  botGameStatusEl.classList.add("hidden");
  multiplayerChatContainer.classList.add("hidden");
  localStorage.removeItem(GAME_STATE_KEY);

  gameBoardEl.classList.remove("hidden");
  statusMessageEl.classList.remove("hidden");
  spectatorView.classList.add("hidden");
  document.getElementById("game-controls").classList.remove("hidden");
  document.getElementById("extra-controls").classList.remove("hidden");
  document.getElementById("helpers-section").classList.remove("hidden");
  document.getElementById("personal-best-section").classList.remove("hidden");

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
    if (isGameStarted && !isGameOver && !isMultiplayer && !isBotGame) {
      saveGameState();
    }
  }, 1000);
}
function startMultiplayerTimer() {
  if (timerInterval) stopTimer();
  timerInterval = setInterval(() => {
    if (!multiplayerStartTime) return;
    const elapsedMilliseconds = Date.now() - multiplayerStartTime;
    timerSeconds = Math.floor(elapsedMilliseconds / 1000);
    timerEl.textContent = timerSeconds;
    if (currentRoomId && !isGameOver) {
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
function revealCell(r_start, c_start) {
  const { rows, cols } = currentMapConfig;
  const queue = [];
  if (r_start < 0 || r_start >= rows || c_start < 0 || c_start >= cols) return;
  const initialCellData = board[r_start][c_start];
  if (initialCellData.isRevealed || initialCellData.isFlagged) return;
  if (initialCellData.isMine) {
    if (isShieldActive) {
      isShieldActive = false;
      gameBoardEl.classList.remove("shield-active");
      initialCellData.isRevealed = true;
      cellsRevealed++;
      const cellEl = gameBoardEl.children[r_start * cols + c_start];
      cellEl.classList.add("revealed");
      cellEl.querySelector(".cell-content").innerHTML = "🛡️";
      statusMessageEl.textContent = "Khiên đã bảo vệ bạn!";
      updateHelperDisplay();
      checkWinCondition();
      return;
    }
    const cellEl = gameBoardEl.children[r_start * cols + c_start];
    cellEl.classList.add("mine-hit");
    gameBoardEl.classList.add("board-shake");
    setTimeout(() => gameBoardEl.classList.remove("board-shake"), 500);
    gameOver(false);
    return;
  }
  queue.push([r_start, c_start]);
  const visited = new Set([`${r_start},${c_start}`]);
  while (queue.length > 0) {
    const [r, c] = queue.shift();
    const cellData = board[r][c];
    const cellEl = gameBoardEl.children[r * cols + c];
    if (cellData.isRevealed || cellData.isFlagged) continue;
    cellData.isRevealed = true;
    cellsRevealed++;
    if (!isBotGame) updateFirebaseCellState(r, c, cellData.neighborMines);
    cellEl.classList.add("revealed");
    const contentEl = cellEl.querySelector(".cell-content");
    if (cellData.neighborMines > 0) {
      contentEl.textContent = cellData.neighborMines;
      contentEl.className = `cell-content c${cellData.neighborMines}`;
    } else {
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr;
          const nc = c + dc;
          const neighborKey = `${nr},${nc}`;
          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            !visited.has(neighborKey)
          ) {
            const neighborData = board[nr][nc];
            if (!neighborData.isRevealed && !neighborData.isFlagged) {
              visited.add(neighborKey);
              queue.push([nr, nc]);
            }
          }
        }
    }
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
  if (isMultiplayer && !isWin) {
    showMineHitModal();
    return;
  }
  isGameOver = true;
  stopTimer();
  stopBot();
  updateTotalPlayTime();
  localStorage.removeItem(GAME_STATE_KEY);

  if (isWin) {
    if (isMultiplayer) {
      set(
        ref(
          db,
          `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}/status`
        ),
        "won"
      );
      set(
        ref(
          db,
          `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}/finishTime`
        ),
        timerSeconds
      );
      logGameHistory("Thắng");
      enterSpectatorMode();
    } else {
      submitScore(); // also calls logGameHistory("Thắng")
    }
  } else {
    // isLoss
    logGameHistory("Thua");
    if (isMultiplayer) {
      set(
        ref(
          db,
          `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}/status`
        ),
        "lost"
      );
    }
  }

  if (isMultiplayer && !isWin) {
    setTimeout(() => {
      showGameOverModal(false);
    }, 1000);
  } else if (!isMultiplayer) {
    setTimeout(() => {
      showGameOverModal(isWin);
    }, 1000);
  }

  const { rows, cols } = currentMapConfig;
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const cellEl = gameBoardEl.children[r * cols + c];
      const cellData = board[r][c];
      const contentEl = cellEl.querySelector(".cell-content");
      if (cellData.isFlagged && cellData.isMine) contentEl.innerHTML = "✅";
      else if (cellData.isFlagged && !cellData.isMine)
        contentEl.innerHTML = "❌";
      else if (!cellData.isFlagged && cellData.isMine) {
        cellEl.classList.add("mine");
        contentEl.innerHTML = "💣";
      }
      cellEl.removeEventListener("click", handleLeftClick);
      cellEl.removeEventListener("contextmenu", handleRightClick);
    }
}
function showGameOverModal(isWin) {
  const icon = document.getElementById("gameOverIcon"),
    title = document.getElementById("gameOverTitle"),
    message = document.getElementById("gameOverMessage"),
    time = document.getElementById("gameOverTime"),
    botResultEl = document.getElementById("gameOverBotResult");
  botResultEl.classList.add("hidden");
  if (isBotGame) {
    botResultEl.classList.remove("hidden");
    if (botState.isFinished && botState.time < timerSeconds) {
      botResultEl.innerHTML = `🤖 Máy đã thắng với thời gian <b class="text-red-500">${botState.time.toFixed(
        1
      )}s</b>.`;
    } else if (isWin) {
      botResultEl.innerHTML = `🎉 Bạn đã thắng máy! Nó hoàn thành trong <b>${botState.time.toFixed(
        1
      )}s</b>.`;
    } else {
      botResultEl.innerHTML = `🤖 Máy vẫn đang giải...`;
    }
  }
  if (isWin) {
    icon.innerHTML = "🏆";
    title.textContent = "CHIẾN THẮNG!";
    title.className = "text-3xl font-extrabold mb-2 text-green-500";
    message.textContent = `Chúc mừng! Bạn đã hoàn thành xuất sắc.`;
  } else {
    icon.innerHTML = "💀";
    title.textContent = "THUA CUỘC!";
    title.className = "text-3xl font-extrabold mb-2 text-red-500";
    message.textContent = "Rất tiếc, bạn đã chạm phải mìn.";
  }
  time.textContent = `${timerSeconds}s`;
  gameOverModal.style.display = "flex";
}

// === BOT GAME FUNCTIONS ===
function startBot(difficulty, mapConfig) {
  const settings = BOT_DIFFICULTY[difficulty];
  const totalSafeCells = mapConfig.rows * mapConfig.cols - currentNumMines;
  document.getElementById("botDifficultyDisplay").textContent = settings.name;
  const progressBar = document.getElementById("botProgressBar");
  const progressText = document.getElementById("botProgressText");
  botState = {
    ...botState,
    revealed: 0,
    time: 0,
    isFinished: false,
    totalSafeCells,
    settings,
    difficulty,
  };
  botGameInterval = setInterval(() => {
    if (isGameOver || botState.isFinished) {
      stopBot();
      return;
    }
    botState.time += settings.speed / 1000;
    if (Math.random() < settings.accuracy) {
      botState.revealed++;
    }
    const progress = Math.min(100, (botState.revealed / totalSafeCells) * 100);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.floor(progress)}%`;
    if (botState.revealed >= totalSafeCells) {
      botState.isFinished = true;
      if (!isGameOver) {
        showToast(
          `Máy đã giải xong map trong ${botState.time.toFixed(1)}s!`,
          "info"
        );
      }
      stopBot();
    }
  }, settings.speed);
}
function stopBot() {
  clearInterval(botGameInterval);
  botGameInterval = null;
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
    return null;
  }
  const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  const newRoom = {
    hostId: userId,
    createdAt: serverTimestamp(),
    gameState: "lobby",
    mapConfig: MAPS.find((m) => m.name === "Tiêu Chuẩn"),
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
  return roomId;
}
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
    const playerRef = ref(
      db,
      `/artifacts/${appId}/public/data/rooms/${roomId}/players/${userId}`
    );
    try {
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
    off(
      ref(db, `/artifacts/${appId}/public/data/rooms/${currentRoomId}`),
      "value",
      currentRoomListener
    );
    currentRoomListener = null;
  }
  if (roomEventsListener) {
    off(
      ref(db, `/artifacts/${appId}/public/data/rooms/${currentRoomId}/events`)
    );
    roomEventsListener = null;
  }
  if (myMatchmakingLobbyRef) {
    remove(myMatchmakingLobbyRef);
    myMatchmakingLobbyRef = null;
  }
  const playerRef = ref(
    db,
    `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}`
  );
  onDisconnect(playerRef).cancel();
  remove(playerRef);

  currentRoomId = null;
  isMultiplayer = false;
  isMultiplayerGameRunning = false;
  multiplayerStartTime = null;
  currentlySpectatingPlayerId = null;
  showView("mainMenu");
}
function setupLobbyView(roomId) {
  currentRoomId = roomId;
  lobbyRoomIdEl.textContent = roomId;
  const roomLinkInput = document.getElementById("lobbyRoomLink"),
    copyLinkButton = document.getElementById("copyLinkButton");
  const baseUrl = window.location.href.split("#")[0],
    roomLink = `${baseUrl}#roomId=${roomId}`;
  roomLinkInput.value = roomLink;
  const copyAction = (e) => {
    e.stopPropagation();
    roomLinkInput.select();
    navigator.clipboard
      .writeText(roomLink)
      .then(() => showToast("Đã sao chép link phòng!", "success"));
  };
  roomLinkInput.addEventListener("click", copyAction);
  copyLinkButton.addEventListener("click", copyAction);
  if (lobbyMapSelect.options.length === 0) {
    MAPS.forEach((map) => {
      const option = new Option(map.name, map.name);
      lobbyMapSelect.add(option);
    });
  }
  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  const playerRef = ref(db, `${roomRef.path}/players/${userId}`);
  onDisconnect(playerRef).remove();
  if (currentRoomListener)
    off(
      ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`),
      "value",
      currentRoomListener
    );
  setupRoomEventListener(roomId);
  lobbyChatForm.onsubmit = (e) => {
    e.preventDefault();
    sendChatMessage(roomId, lobbyChatInput.value, lobbyChatInput);
  };
  lobbyChatMessagesEl.innerHTML = "";
  currentRoomListener = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      if (currentRoomId) showToast("Phòng đã bị đóng.", "info");
      leaveRoom();
      return;
    }
    const roomData = snapshot.val();
    const players = roomData.players || {};
    lastPlayerList = players;
    const isMatchmaking = roomData.isMatchmaking;
    lobbyHostControlsEl.classList.toggle("hidden", isMatchmaking);
    startGameButton.classList.toggle("hidden", !isMatchmaking);
    readyButton.classList.toggle("hidden", !isMatchmaking);
    if (isMatchmaking) {
      startGameButton.classList.add("hidden");
    }

    lobbyPlayerListEl.innerHTML = Object.values(players)
      .map(
        (p) =>
          `<div class="p-2 bg-gray-100 rounded flex justify-between items-center"><span>${
            p.displayName
          }</span><span class="text-sm font-bold ${
            p.status === "ready" ? "text-green-500" : "text-yellow-500"
          }">${
            p.status === "ready" ? "✓ Sẵn sàng" : "... Đang chờ"
          }</span></div>`
      )
      .join("");
    lobbyPlayerCountEl.textContent = `${Object.keys(players).length}${
      isMatchmaking ? `/${roomData.maxPlayers}` : ""
    }`;
    const isHost = roomData.hostId === userId;
    if (!isMatchmaking) {
      lobbyHostControlsEl.classList.toggle("hidden", !isHost);
      startGameButton.classList.toggle("hidden", !isHost);
      document
        .getElementById("lobbyGuestMessage")
        .classList.toggle("hidden", isHost);
      lobbyMapPreviewEl.classList.toggle("hidden", isHost);
    } else {
      document.getElementById("lobbyGuestMessage").classList.add("hidden");
    }
    if (!isHost && !isMatchmaking) {
      const map = roomData.mapConfig;
      let details = `<b>${map.name}</b>: ${map.rows}x${map.cols}, ${map.minMines} mìn.`;
      if (map.isCustom) {
        details = `<b>Map Tùy Chỉnh</b>: ${map.rows}x${map.cols}, ${map.minMines} mìn.`;
      }
      lobbyMapPreviewDetailsEl.innerHTML = details;
    }
    if (isHost && !isMatchmaking) {
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
    if (roomData.gameState === "in-progress" && !isMultiplayerGameRunning) {
      off(roomRef, "value", currentRoomListener);
      currentRoomListener = null;
      if (myMatchmakingLobbyRef) {
        remove(myMatchmakingLobbyRef);
        myMatchmakingLobbyRef = null;
      }
      multiplayerStartTime = roomData.startTime || Date.now();
      startGame({ ...roomData.mapConfig, isMultiplayer: true }, roomData.seed);
      listenToGameUpdates(roomId);
    } else if (isMatchmaking) {
      const allReady = Object.values(players).every(
        (p) => p.status === "ready"
      );
      const full = Object.keys(players).length === roomData.maxPlayers;
      if (allReady && full && roomData.gameState === "lobby") {
        if (isHost) {
          triggerStartGame();
        }
      }
    }
  });
}
function listenToGameUpdates(roomId) {
  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  currentRoomListener = onValue(roomRef, (snapshot) => {
    if (!snapshot.exists()) return;
    const roomState = snapshot.val();
    if (!roomState.players) return;
    const players = roomState.players;
    lastPlayerList = players;
    const localPlayer = players[userId];
    let statusHTML =
      '<h3 class="font-bold mb-2">Trạng thái người chơi:</h3><div class="space-y-2">';
    let finishedCount = 0;
    const totalPlayers = Object.keys(players).length;
    Object.values(players).forEach((p) => {
      if (p.status !== "playing" && p.status !== "waiting") {
        finishedCount++;
      }
    });
    Object.values(players).forEach((p) => {
      const statusMap = {
        waiting: "🏃‍♂️",
        playing: "🤔",
        won: `🏆 ${p.finishTime || ""}s`,
        lost: "💀",
      };
      let progressColor = p.status === "won" ? "bg-green-500" : "bg-blue-500";
      statusHTML += `<div class="p-2 bg-gray-100 rounded"><div class="flex justify-between items-center text-sm mb-1"><span class="font-semibold">${
        p.displayName
      }</span><span>${
        statusMap[p.status] || ""
      }</span></div><div class="w-full bg-gray-300 rounded-full h-2.5"><div class="${progressColor} h-2.5 rounded-full" style="width: ${
        p.progress || 0
      }%"></div></div></div>`;
    });
    statusHTML += "</div>";
    multiplayerStatusEl.innerHTML = statusHTML;
    spectatorStatusContainer.innerHTML = statusHTML;
    if (localPlayer && localPlayer.status === "won") {
      const spectatorSelect = document.getElementById("spectatorSelect");
      const currentSelection = spectatorSelect.value;
      spectatorSelect.innerHTML = '<option value="">-- Chọn --</option>';
      const stillPlaying = Object.entries(players).filter(
        ([id, p]) => p.status === "playing" && id !== userId
      );
      const controlsDiv = document.getElementById("spectatorControls");
      if (stillPlaying.length === 0) {
        controlsDiv.querySelector(".flex").classList.add("hidden");
      } else {
        controlsDiv.querySelector(".flex").classList.remove("hidden");
        stillPlaying.forEach(([id, p]) => {
          const option = document.createElement("option");
          option.value = id;
          option.textContent = p.displayName;
          spectatorSelect.appendChild(option);
        });
        spectatorSelect.value = currentSelection;
      }
      if (currentlySpectatingPlayerId) {
        const spectatedPlayerData = players[currentlySpectatingPlayerId];
        if (spectatedPlayerData && spectatedPlayerData.status === "playing") {
          renderSpectatorBoard(
            spectatedPlayerData,
            roomState.mapConfig,
            roomState.seed
          );
        } else {
          currentlySpectatingPlayerId = null;
          spectatorSelect.value = "";
          renderSpectatorBoard(null, null, null);
        }
      }
    }
    if (
      totalPlayers > 0 &&
      finishedCount === totalPlayers &&
      roomState.gameState === "in-progress"
    ) {
      showToast("Tất cả người chơi đã hoàn thành!", "success");
      const winners = Object.values(players)
        .filter((p) => p.status === "won")
        .sort((a, b) => a.finishTime - b.finishTime);
      let resultsHTML =
        '<h3 class="font-bold mb-2 text-xl">Kết Quả Cuối Cùng</h3><div class="space-y-2">';
      winners.forEach((winner, index) => {
        const rankColors = {
          0: "text-yellow-500",
          1: "text-gray-500",
          2: "text-amber-600",
        };
        resultsHTML += `<div class="p-2 bg-gray-200 rounded"><span class="font-bold ${
          rankColors[index] || ""
        }">${index + 1}. ${winner.displayName}</span> - ${
          winner.finishTime
        }s</div>`;
      });
      resultsHTML += `</div>`;
      if (winners.length > 1) {
        const slowestWinner = winners[winners.length - 1];
        showToast(
          `${slowestWinner.displayName} là người chiến thắng chậm nhất!`,
          "info"
        );
      }
      multiplayerStatusEl.innerHTML = resultsHTML;
      spectatorStatusContainer.innerHTML = resultsHTML;
      off(roomRef, "value", currentRoomListener);
      currentRoomListener = null;
      if (roomState.hostId === userId) {
        set(
          ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}/gameState`),
          "finished"
        );
      }
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
      room.startTime = serverTimestamp();
      Object.keys(room.players).forEach(
        (pid) => (room.players[pid].status = "playing")
      );
    }
    return room;
  });
}
function showMineHitModal() {
  mineHitModal.style.display = "flex";
}
function resetBoardForRetry() {
  isGameOver = false;
  isGameStarted = true;
  isShieldActive = false;
  isScannerActive = false;
  minesLeft = currentNumMines;
  cellsRevealed = 0;
  minesLeftEl.textContent = currentNumMines;
  statusMessageEl.textContent = "Thử lại! Cẩn thận hơn nhé.";
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
  gameBoardEl.innerHTML = "";
  for (let r = 0; r < currentMapConfig.rows; r++)
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
  placeMines(-1, -1);
  mineHitModal.style.display = "none";
  set(
    ref(
      db,
      `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}/boardState`
    ),
    {}
  );
}
function enterSpectatorMode() {
  gameBoardEl.classList.add("hidden");
  document.getElementById("game-controls").classList.add("hidden");
  document.getElementById("extra-controls").classList.add("hidden");
  document.getElementById("helpers-section").classList.add("hidden");
  document.getElementById("personal-best-section").classList.add("hidden");
  statusMessageEl.classList.add("hidden");
  spectatorView.classList.remove("hidden");
}
function generateBoardFromSeed(mapConfig, seed) {
  const localPrng = new SeededRandom(seed);
  const newBoard = Array(mapConfig.rows)
    .fill(0)
    .map(() =>
      Array(mapConfig.cols)
        .fill(0)
        .map(() => ({
          isMine: false,
          neighborMines: 0,
          isRevealed: false,
          isFlagged: false,
        }))
    );
  const minesToPlace =
    localPrng.nextInt(mapConfig.maxMines - mapConfig.minMines + 1) +
    mapConfig.minMines;
  let minesPlaced = 0;
  while (minesPlaced < minesToPlace) {
    const r = localPrng.nextInt(mapConfig.rows);
    const c = localPrng.nextInt(mapConfig.cols);
    if (!newBoard[r][c].isMine) {
      newBoard[r][c].isMine = true;
      minesPlaced++;
    }
  }
  for (let r = 0; r < mapConfig.rows; r++)
    for (let c = 0; c < mapConfig.cols; c++) {
      if (newBoard[r][c].isMine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr,
            nc = c + dc;
          if (
            nr >= 0 &&
            nr < mapConfig.rows &&
            nc >= 0 &&
            nc < mapConfig.cols &&
            newBoard[nr][nc].isMine
          ) {
            count++;
          }
        }
      newBoard[r][c].neighborMines = count;
    }
  return newBoard;
}
function renderSpectatorBoard(playerData, mapConfig, seed) {
  const wrapper = document.getElementById("spectatorBoardWrapper");
  wrapper.innerHTML = "";
  if (!playerData || !mapConfig || !seed) return;
  const baseBoard = generateBoardFromSeed(mapConfig, seed);
  const playerBoardState = playerData.boardState || {};
  Object.keys(playerBoardState).forEach((key) => {
    const [r, c] = key.split("_").map(Number);
    const state = playerBoardState[key];
    if (baseBoard[r] && baseBoard[r][c]) {
      if (state === "F") {
        baseBoard[r][c].isFlagged = true;
      } else {
        baseBoard[r][c].isRevealed = true;
      }
    }
  });
  const boardEl = document.createElement("div");
  boardEl.id = "spectatorBoard";
  const maxBoardWidth = mainContentEl.clientWidth - 50;
  const cellPixelSize = Math.max(
    12,
    Math.min(30, Math.floor(maxBoardWidth / mapConfig.cols))
  );
  boardEl.style.width = `${cellPixelSize * mapConfig.cols}px`;
  boardEl.style.gridTemplateColumns = `repeat(${mapConfig.cols}, 1fr)`;
  for (let r = 0; r < mapConfig.rows; r++)
    for (let c = 0; c < mapConfig.cols; c++) {
      const cellData = baseBoard[r][c];
      const cellEl = document.createElement("div");
      cellEl.className = "cell";
      cellEl.style.height = `${cellPixelSize}px`;
      cellEl.style.paddingBottom = "0";
      cellEl.style.cursor = "default";
      cellEl.style.fontSize = `${cellPixelSize * 0.6}px`;
      const contentEl = document.createElement("div");
      contentEl.className = "cell-content";
      if (cellData.isRevealed) {
        cellEl.classList.add("revealed");
        if (cellData.isMine) {
          contentEl.innerHTML = "💣";
          cellEl.classList.add("mine");
        } else if (cellData.neighborMines > 0) {
          contentEl.textContent = cellData.neighborMines;
          contentEl.className = `cell-content c${cellData.neighborMines}`;
        }
      } else if (cellData.isFlagged) {
        cellEl.classList.add("flagged");
        contentEl.innerHTML = "🚩";
      }
      cellEl.appendChild(contentEl);
      boardEl.appendChild(cellEl);
    }
  wrapper.appendChild(boardEl);
}

// === MATCHMAKING ===
async function findMatch(maxPlayers) {
  if (!displayName) {
    showToast("Vui lòng đặt tên trước!", "error");
    return;
  }
  isFindingMatch = true;
  currentMatchmakingMode = maxPlayers;
  matchmakingOptions.classList.add("hidden");
  matchmakingStatusContainer.classList.remove("hidden");
  cancelMatchmakingButton.classList.remove("hidden");
  matchmakingStatusText.textContent = `Đang tìm phòng ${maxPlayers} người...`;
  const lobbiesRef = query(
    ref(db, `/artifacts/${appId}/public/data/matchmakingLobbies/${maxPlayers}`),
    orderByChild("createdAt")
  );
  matchmakingListener = onValue(
    lobbiesRef,
    async (snapshot) => {
      if (!isFindingMatch) return;
      let joined = false;
      if (snapshot.exists()) {
        for (const roomId of Object.keys(snapshot.val())) {
          const roomRef = ref(
            db,
            `/artifacts/${appId}/public/data/rooms/${roomId}`
          );
          await runTransaction(roomRef, (room) => {
            if (
              room &&
              room.gameState === "lobby" &&
              Object.keys(room.players).length < maxPlayers
            ) {
              room.players[userId] = {
                displayName,
                status: "waiting",
                time: 0,
                progress: 0,
              };
              joined = true;
            }
            return room;
          });
          if (joined) {
            cancelMatchmaking(false);
            showView("lobby", { roomId });
            return;
          }
        }
      }
      if (!joined) {
        const newRoomId = await hostGame();
        if (newRoomId) {
          myMatchmakingLobbyRef = ref(
            db,
            `/artifacts/${appId}/public/data/matchmakingLobbies/${maxPlayers}/${newRoomId}`
          );
          await set(myMatchmakingLobbyRef, { createdAt: serverTimestamp() });
          const roomUpdates = {
            isMatchmaking: true,
            maxPlayers: maxPlayers,
            mapConfig: MAPS.find(
              (m) =>
                m.name ===
                MATCHMAKING_MAPS[prng.nextInt(MATCHMAKING_MAPS.length)]
            ),
          };
          await update(
            ref(db, `/artifacts/${appId}/public/data/rooms/${newRoomId}`),
            roomUpdates
          );
          onDisconnect(myMatchmakingLobbyRef).remove();
        }
        cancelMatchmaking(false);
      }
    },
    { onlyOnce: true }
  );
}
function cancelMatchmaking(showMenu = true) {
  isFindingMatch = false;
  if (matchmakingListener) {
    off(matchmakingListener);
    matchmakingListener = null;
  }
  if (myMatchmakingLobbyRef) {
    remove(myMatchmakingLobbyRef);
    myMatchmakingLobbyRef = null;
  }
  currentMatchmakingMode = null;
  matchmakingOptions.classList.remove("hidden");
  matchmakingStatusContainer.classList.add("hidden");
  cancelMatchmakingButton.classList.add("hidden");
  if (showMenu) showView("mainMenu");
}

// === EVENT HANDLERS & INITIALIZATION ===
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
    if (!isBotGame) startTimer();
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
  if (!isBotGame)
    updateFirebaseCellState(r, c, cellData.isFlagged ? "F" : null);
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
  const safeZone = new Set();
  if (startR !== -1 && startC !== -1) {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        safeZone.add(`${startR + dr},${startC + dc}`);
      }
    }
  }
  while (minesPlaced < currentNumMines) {
    const r = prng.nextInt(currentMapConfig.rows);
    const c = prng.nextInt(currentMapConfig.cols);
    if (!board[r][c].isMine && !safeZone.has(`${r},${c}`)) {
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

// === SAVE & RESTORE GAME STATE ===
function saveGameState() {
  if (isGameOver || !isGameStarted || isMultiplayer || isBotGame) {
    localStorage.removeItem(GAME_STATE_KEY);
    return;
  }
  const gameState = {
    currentMapConfig,
    board,
    timerSeconds,
    minesLeft,
    cellsRevealed,
    xrayUses,
    autoFlagUses,
    surferUses,
    shieldUses,
    scannerUses,
    helpUsesLeft,
    isShieldActive,
    prngSeed: prng.seed,
  };
  localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
}
function checkForSavedGame() {
  const savedGameJSON = localStorage.getItem(GAME_STATE_KEY);
  if (savedGameJSON) {
    resumeGamePrompt.classList.remove("hidden");
  }
}
function loadGameState() {
  resumeGamePrompt.classList.add("hidden");
  const savedGameJSON = localStorage.getItem(GAME_STATE_KEY);
  if (!savedGameJSON) return;
  const savedState = JSON.parse(savedGameJSON);
  currentMapConfig = savedState.currentMapConfig;
  isMultiplayer = false;
  isBotGame = false;
  prng = new SeededRandom(savedState.prngSeed);
  showView("game", { mapConfig: currentMapConfig });
  isGameOver = false;
  isGameStarted = true;
  isShieldActive = savedState.isShieldActive;
  isScannerActive = false;
  board = savedState.board;
  timerSeconds = savedState.timerSeconds;
  minesLeft = savedState.minesLeft;
  cellsRevealed = savedState.cellsRevealed;
  xrayUses = savedState.xrayUses;
  autoFlagUses = savedState.autoFlagUses;
  surferUses = savedState.surferUses;
  shieldUses = savedState.shieldUses;
  scannerUses = savedState.scannerUses;
  helpUsesLeft = savedState.helpUsesLeft;
  mapNameEl.textContent = currentMapConfig.name;
  statusMessageEl.textContent = `Tiếp tục cuộc chơi!`;
  minesLeftEl.textContent = minesLeft;
  timerEl.textContent = timerSeconds;
  gameBoardEl.style.gridTemplateColumns = `repeat(${currentMapConfig.cols}, 1fr)`;
  gameBoardEl.innerHTML = "";
  for (let r = 0; r < currentMapConfig.rows; r++) {
    for (let c = 0; c < currentMapConfig.cols; c++) {
      const cellEl = document.createElement("div");
      cellEl.className = "cell";
      cellEl.dataset.row = r;
      cellEl.dataset.col = c;
      const contentEl = document.createElement("div");
      contentEl.className = "cell-content";
      cellEl.appendChild(contentEl);
      const cellData = board[r][c];
      if (cellData.isRevealed) {
        cellEl.classList.add("revealed");
        if (cellData.neighborMines > 0) {
          contentEl.textContent = cellData.neighborMines;
          contentEl.className = `cell-content c${cellData.neighborMines}`;
        }
      } else if (cellData.isFlagged) {
        cellEl.classList.add("flagged");
        contentEl.innerHTML = "🚩";
      }
      cellEl.addEventListener("click", handleLeftClick);
      cellEl.addEventListener("contextmenu", handleRightClick);
      gameBoardEl.appendChild(cellEl);
    }
  }
  updateHelperDisplay();
  displayBestTimeForCurrentMap();
  startTimer();
}
function discardSavedGame() {
  localStorage.removeItem(GAME_STATE_KEY);
  resumeGamePrompt.classList.add("hidden");
}
async function logGameHistory(result) {
  if (!userId) return;
  const historyRef = push(
    ref(db, `/artifacts/${appId}/users/${userId}/gameHistory`)
  );
  let mode = "Đơn";
  if (isBotGame)
    mode = `Máy (${BOT_DIFFICULTY[botState.difficulty]?.name || "N/A"})`;
  if (isMultiplayer)
    mode = `Nhiều người (${Object.keys(lastPlayerList).length} người)`;
  const gameData = {
    mapName: currentMapConfig.name,
    time: timerSeconds,
    result: result,
    mode: mode,
    timestamp: serverTimestamp(),
  };
  await set(historyRef, gameData);
}
async function checkForSession() {
  const sessionDataJSON = sessionStorage.getItem(SESSION_STATE_KEY);
  if (sessionDataJSON) {
    sessionStorage.removeItem(SESSION_STATE_KEY); // Consume it
    const sessionData = JSON.parse(sessionDataJSON);
    if (sessionData.roomId) {
      await rejoinGame(sessionData.roomId);
      return true; // Session was handled
    }
  }
  return false; // No session to handle
}
async function rejoinGame(roomId) {
  const roomRef = ref(db, `/artifacts/${appId}/public/data/rooms/${roomId}`);
  const snapshot = await get(roomRef);
  if (!snapshot.exists()) {
    showToast("Phòng bạn đang ở không còn tồn tại.", "error");
    showView("mainMenu");
    return;
  }
  const roomData = snapshot.val();
  const playerInRoom = roomData.players && roomData.players[userId];

  if (!playerInRoom) {
    showToast("Bạn không còn ở trong phòng này.", "error");
    showView("mainMenu");
    return;
  }

  if (roomData.gameState === "lobby") {
    joinRoom(roomId);
  } else if (roomData.gameState === "in-progress") {
    showToast("Đang kết nối lại vào trận đấu...", "info");
    multiplayerStartTime = roomData.startTime || Date.now();
    // Start the game with the correct seed
    startGame({ ...roomData.mapConfig, isMultiplayer: true }, roomData.seed);

    // Restore player's progress
    const playerState = roomData.players[userId].boardState;
    if (playerState) {
      await applyRemoteBoardState(playerState);
    }

    // Listen for further updates
    listenToGameUpdates(roomId);
  }
}
async function applyRemoteBoardState(remoteState) {
  cellsRevealed = 0;
  minesLeft = currentNumMines;
  for (let r = 0; r < currentMapConfig.rows; r++) {
    for (let c = 0; c < currentMapConfig.cols; c++) {
      const key = `${r}_${c}`;
      const state = remoteState[key];
      const cellEl = gameBoardEl.children[r * currentMapConfig.cols + c];
      const contentEl = cellEl.querySelector(".cell-content");

      // Reset cell visuals
      cellEl.classList.remove("revealed", "flagged");
      contentEl.textContent = "";

      if (state === "F") {
        board[r][c].isFlagged = true;
        cellEl.classList.add("flagged");
        contentEl.innerHTML = "🚩";
        minesLeft--;
      } else if (state !== undefined) {
        // Is a number (revealed)
        board[r][c].isRevealed = true;
        cellsRevealed++;
        cellEl.classList.add("revealed");
        if (board[r][c].neighborMines > 0) {
          contentEl.textContent = board[r][c].neighborMines;
          contentEl.className = `cell-content c${board[r][c].neighborMines}`;
        }
      } else {
        board[r][c].isRevealed = false;
        board[r][c].isFlagged = false;
      }
    }
  }
  minesLeftEl.textContent = minesLeft;
}

window.onload = async function () {
  const hash = window.location.hash.substring(1);
  if (hash.includes("roomId=")) {
    const params = new URLSearchParams(hash);
    initialRoomId = params.get("roomId");
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
  await initializeFirebase();
  setupMainMenu();
  document
    .getElementById("leaderboardMenuButton")
    .addEventListener("click", () => setupLeaderboardModal());
  document
    .getElementById("historyMenuButton")
    .addEventListener("click", showHistoryModal);
  document
    .getElementById("leaderboardGameButton")
    .addEventListener("click", () =>
      setupLeaderboardModal({ defaultMap: currentMapConfig?.name })
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
  document
    .getElementById("resetButton")
    .addEventListener("click", () => startGame(currentMapConfig));
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
    .addEventListener("click", () => {
      if (customMapView.dataset.isLobbyConfig === "true") {
        showView("lobby", { roomId: currentRoomId });
      } else {
        showView("mainMenu");
      }
    });
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
  document.getElementById("xrayButton").addEventListener("click", useXray);
  document
    .getElementById("autoFlagButton")
    .addEventListener("click", useAutoFlag);
  document.getElementById("surferButton").addEventListener("click", useSurfer);
  document.getElementById("shieldButton").addEventListener("click", useShield);
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
  readyButton.addEventListener("click", async () => {
    const playerRef = ref(
      db,
      `/artifacts/${appId}/public/data/rooms/${currentRoomId}/players/${userId}/status`
    );
    const snapshot = await get(playerRef);
    if (snapshot.exists()) {
      const currentStatus = snapshot.val();
      set(playerRef, currentStatus === "ready" ? "waiting" : "ready");
    }
  });
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
      if (isBotGame) {
        startGame(currentMapConfig, Date.now(), {
          isBotGame: true,
          botDifficulty: botState.difficulty,
        });
      } else if (isMultiplayer) {
        leaveRoom();
      } else {
        startGame(currentMapConfig);
      }
    });
  document
    .getElementById("gameOverMenuButton")
    .addEventListener("click", () => {
      gameOverModal.style.display = "none";
      isMultiplayer ? leaveRoom() : showView("mainMenu");
    });
  document
    .getElementById("retryBoardButton")
    .addEventListener("click", resetBoardForRetry);
  document
    .getElementById("spectatorSelect")
    .addEventListener("change", (event) => {
      currentlySpectatingPlayerId = event.target.value;
      if (!currentlySpectatingPlayerId) {
        renderSpectatorBoard(null, null, null);
      }
    });
  document
    .getElementById("spectatorExitButton")
    .addEventListener("click", leaveRoom);
  document.querySelectorAll(".find-match-button").forEach((button) => {
    button.addEventListener("click", () => {
      const players = button.dataset.players;
      findMatch(parseInt(players));
    });
  });
  cancelMatchmakingButton.addEventListener("click", cancelMatchmaking);
  document
    .getElementById("playWithBotMenuButton")
    .addEventListener("click", () => showView("playWithBot"));
  document
    .getElementById("matchmakingMenuButton")
    .addEventListener("click", () => showView("matchmaking"));
  document
    .getElementById("startBotGameButton")
    .addEventListener("click", () => {
      const mapName = botMapSelect.value;
      const difficulty = botDifficultySelect.value;
      const mapConfig = MAPS.find((m) => m.name === mapName);
      if (mapConfig) {
        startGame(mapConfig, Date.now(), {
          isBotGame: true,
          botDifficulty: difficulty,
        });
      }
    });
  document
    .getElementById("resumeGameBtn")
    .addEventListener("click", loadGameState);
  document
    .getElementById("discardGameBtn")
    .addEventListener("click", discardSavedGame);
};
window.addEventListener("beforeunload", (e) => {
  if (isFindingMatch) {
    cancelMatchmaking(false);
  }

  if (!isGameOver) {
    let sessionData = {};
    const currentView = Object.keys(VIEWS).find(
      (key) => !VIEWS[key].classList.contains("hidden")
    );

    if (currentView === "lobby" && currentRoomId) {
      sessionData = { view: "lobby", roomId: currentRoomId };
    } else if (currentView === "game" && isMultiplayer && currentRoomId) {
      sessionData = {
        view: "game",
        mode: "multiplayer",
        roomId: currentRoomId,
      };
    }

    if (Object.keys(sessionData).length > 0) {
      sessionStorage.setItem(SESSION_STATE_KEY, JSON.stringify(sessionData));
    } else {
      sessionStorage.removeItem(SESSION_STATE_KEY);
    }
  } else {
    sessionStorage.removeItem(SESSION_STATE_KEY);
  }
});

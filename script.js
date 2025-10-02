// === CẤU HÌNH TRÒ CHƠI ===
const MAPS = [
  {
    name: "Khởi đầu",
    rows: 3,
    cols: 3,
    minMines: 1,
    maxMines: 2,
    helpers: { xray: 2, autoFlag: 1, surfer: 0, shield: 1, scanner: 1 },
    helpLimit: 1,
  },
  {
    name: "Dễ",
    rows: 4,
    cols: 4,
    minMines: 3,
    maxMines: 4,
    helpers: { xray: 2, autoFlag: 1, surfer: 0, shield: 1, scanner: 1 },
    helpLimit: 1,
  },
  {
    name: "Gà Mờ",
    rows: 5,
    cols: 5,
    minMines: 3,
    maxMines: 5,
    helpers: { xray: 2, autoFlag: 1, surfer: 0, shield: 1, scanner: 1 },
    helpLimit: 1,
  },
  {
    name: "Tập Sự",
    rows: 8,
    cols: 8,
    minMines: 10,
    maxMines: 10,
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
    name: "Thử Thách",
    rows: 16,
    cols: 16,
    minMines: 40,
    maxMines: 40,
    helpers: { xray: 4, autoFlag: 3, surfer: 2, shield: 2, scanner: 2 },
    helpLimit: 3,
  },
  {
    name: "Chuyên Gia",
    rows: 16,
    cols: 25,
    minMines: 99,
    maxMines: 99,
    helpers: { xray: 5, autoFlag: 4, surfer: 3, shield: 2, scanner: 3 },
    helpLimit: 3,
  },
  {
    name: "Địa Ngục",
    rows: 25,
    cols: 25,
    minMines: 150,
    maxMines: 150,
    helpers: { xray: 6, autoFlag: 5, surfer: 4, shield: 3, scanner: 4 },
    helpLimit: 4,
  },
  {
    name: "Ác Mộng",
    rows: 25,
    cols: 30,
    minMines: 200,
    maxMines: 200,
    helpers: { xray: 7, autoFlag: 6, surfer: 5, shield: 3, scanner: 5 },
    helpLimit: 4,
  },
  {
    name: "Huyền Thoại",
    rows: 30,
    cols: 30,
    minMines: 250,
    maxMines: 250,
    helpers: { xray: 8, autoFlag: 7, surfer: 6, shield: 4, scanner: 6 },
    helpLimit: 5,
  },
  {
    name: "Thần Thánh",
    rows: 30,
    cols: 40,
    minMines: 350,
    maxMines: 350,
    helpers: { xray: 9, autoFlag: 8, surfer: 7, shield: 4, scanner: 7 },
    helpLimit: 5,
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
    name: "Tuyệt Vọng",
    rows: 50,
    cols: 50,
    minMines: 999,
    maxMines: 999,
    helpers: {
      xray: 12,
      autoFlag: 10,
      surfer: 10,
      shield: 6,
      scanner: 10,
    },
    helpLimit: 7,
  },
];
const DISPLAY_NAME_KEY = "minesweeper_displayName";
const AVAILABLE_COMMANDS = [
  { cmd: "admin", desc: "Kích hoạt chế độ admin." },
  { cmd: "help", desc: "Nhận thêm phụ trợ (giới hạn theo map)." },
  {
    cmd: "help <tên> <sl>",
    desc: "Nhận thêm số lượng <sl> phụ trợ <tên>.",
  },
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
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

// === FIREBASE & AUTH VARIABLES ===
let app, db, auth;
let userId, displayName;

const appId =
  typeof __app_id !== "undefined" ? __app_id : "minesweeper-app-dev";

// IMPORTANT: Replace with your actual Firebase config if not in a special environment
const firebaseConfig =
  typeof __firebase_config !== "undefined"
    ? JSON.parse(__firebase_config)
    : {
        // Your dev config here
        apiKey: "AIzaSyACmJTpr_o88ntGOKEDu0DtbS5p7J6VTe0",
        authDomain: "minesweeper-89d99.firebaseapp.com",
        databaseURL: "https://minesweeper-89d99-default-rtdb.firebaseio.com",
        projectId: "minesweeper-89d99",
        storageBucket: "minesweeper-89d99.firebasestorage.app",
        messagingSenderId: "556722821257",
        appId: "1:556722821257:web:e796d477fd81b86a0f4e58",
        measurementId: "G-51XQH404LR",
      };

// === TRẠNG THÁI TRÒ CHƠI ===
let currentMapConfig = null;
let board = [];
let isGameOver = false,
  isGameStarted = false,
  isAdmin = false;
let currentNumMines = 0,
  minesLeft = 0,
  timerSeconds = 0,
  cellsRevealed = 0;
let timerInterval = null;
let personalBestTimes = {}; // Cache for user's best times from Firebase

// Trạng thái phụ trợ
let xrayUses = 0,
  autoFlagUses = 0,
  surferUses = 0,
  shieldUses = 0,
  scannerUses = 0,
  helpUsesLeft = 0;
let isShieldActive = false,
  isScannerActive = false;

// === DOM ELEMENTS ===
const mainContentEl = document.querySelector(".main-content");
const mainMenuEl = document.getElementById("mainMenu");
const gameViewEl = document.getElementById("gameView");
const mapSelectionEl = document.getElementById("mapSelection");
const mapNameEl = document.getElementById("mapName");
const gameBoardEl = document.getElementById("gameBoard");
const minesLeftEl = document.getElementById("minesLeft");
const timerEl = document.getElementById("timer");
const statusMessageEl = document.getElementById("statusMessage");
const personalBestTimeEl = document.getElementById("personalBestTime");
const playerNameDisplayEl = document.getElementById("playerNameDisplay");

// Buttons
const resetButton = document.getElementById("resetButton");
const backToMenuButton = document.getElementById("backToMenuButton");
const guideButton = document.getElementById("guideButton");
const adminRevealMinesButton = document.getElementById(
  "adminRevealMinesButton"
);
const commandMenuButton = document.getElementById("commandMenuButton");
const leaderboardMenuButton = document.getElementById("leaderboardMenuButton");
const leaderboardGameButton = document.getElementById("leaderboardGameButton");

// Helper Buttons & Counts
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

// Modals
const guideModal = document.getElementById("guideModal"),
  closeModalButton = document.getElementById("closeModalButton");
const commandModal = document.getElementById("commandModal"),
  commandInput = document.getElementById("commandInput"),
  commandSuggestionsEl = document.getElementById("commandSuggestions");
const closeCommandModalButton = document.getElementById(
    "closeCommandModalButton"
  ),
  submitCommandButton = document.getElementById("submitCommandButton");
const displayNameModal = document.getElementById("displayNameModal"),
  displayNameForm = document.getElementById("displayNameForm"),
  displayNameInput = document.getElementById("displayNameInput");
const leaderboardModal = document.getElementById("leaderboardModal"),
  closeLeaderboardButton = document.getElementById("closeLeaderboardButton"),
  leaderboardMapSelect = document.getElementById("leaderboardMapSelect"),
  leaderboardContent = document.getElementById("leaderboardContent");

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
        await loadBestTimesFromFirebase(); // Load best times once authenticated
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
    statusMessageEl.textContent = "Không thể kết nối server.";
  }
}

async function checkDisplayName() {
  displayName = localStorage.getItem(DISPLAY_NAME_KEY);
  if (displayName) {
    playerNameDisplayEl.textContent = displayName;
    displayNameModal.style.display = "none";
  } else {
    // Check Realtime DB if not in localStorage
    const userRef = ref(db, `/artifacts/${appId}/users/` + userId);
    const snapshot = await get(userRef);
    if (snapshot.exists() && snapshot.val().displayName) {
      displayName = snapshot.val().displayName;
      localStorage.setItem(DISPLAY_NAME_KEY, displayName);
      playerNameDisplayEl.textContent = displayName;
      displayNameModal.style.display = "none";
    } else {
      displayNameModal.style.display = "flex";
    }
  }
}

async function setDisplayName(name) {
  try {
    displayName = name;
    const userRef = ref(db, `/artifacts/${appId}/users/` + userId);
    await set(userRef, { displayName: name });
    localStorage.setItem(DISPLAY_NAME_KEY, name);
    playerNameDisplayEl.textContent = name;
    displayNameModal.style.display = "none";
  } catch (error) {
    console.error("Error setting display name:", error);
  }
}

async function submitScore() {
  if (!userId || !displayName || isAdmin) return; // Do not submit if admin

  const mapName = currentMapConfig.name;
  const time = timerSeconds;

  try {
    // Update score for the specific map leaderboard
    const mapScoreRef = ref(
      db,
      `/artifacts/${appId}/public/data/leaderboards/${mapName}/scores/` + userId
    );
    const snapshot = await get(mapScoreRef);

    if (!snapshot.exists() || time < snapshot.val().time) {
      await set(mapScoreRef, { displayName: displayName, time: time });
    }

    // Update total time using a transaction
    const userTotalRef = ref(
      db,
      `/artifacts/${appId}/public/data/users/` + userId
    );
    await runTransaction(userTotalRef, (currentData) => {
      if (currentData === null) {
        return { displayName: displayName, totalTime: time, gamesWon: 1 };
      } else {
        const newTotalTime = (currentData.totalTime || 0) + time;
        const newGamesWon = (currentData.gamesWon || 0) + 1;
        return {
          ...currentData,
          displayName: displayName,
          totalTime: newTotalTime,
          gamesWon: newGamesWon,
        };
      }
    });
  } catch (error) {
    console.error("Error submitting score: ", error);
    statusMessageEl.textContent = "Lỗi khi lưu điểm.";
  }
}

async function fetchAndShowLeaderboard() {
  const selectedMap = leaderboardMapSelect.value;
  leaderboardContent.innerHTML = `<p class="text-center text-gray-500">Đang tải...</p>`;

  let dataQuery;
  if (selectedMap === "total") {
    dataQuery = query(
      ref(db, `/artifacts/${appId}/public/data/users`),
      orderByChild("totalTime"),
      limitToFirst(20)
    );
  } else {
    dataQuery = query(
      ref(
        db,
        `/artifacts/${appId}/public/data/leaderboards/${selectedMap}/scores`
      ),
      orderByChild("time"),
      limitToFirst(20)
    );
  }

  try {
    const snapshot = await get(dataQuery);
    let html = '<ol class="list-decimal list-inside space-y-2">';
    let rank = 1;

    if (!snapshot.exists()) {
      html += '<li class="text-center text-gray-500">Chưa có dữ liệu.</li>';
    } else {
      const items = [];
      snapshot.forEach((child) => {
        items.push(child.val());
      });
      // For totalTime, we need to sort descending, but Firebase Realtime DB doesn't support it directly
      if (selectedMap === "total") {
        items.sort((a, b) => b.totalTime - a.totalTime);
      }

      items.forEach((data) => {
        const time = selectedMap === "total" ? data.totalTime : data.time;
        html += `
                            <li class="flex justify-between items-center p-2 rounded ${
                              rank === 1
                                ? "bg-yellow-100"
                                : rank === 2
                                ? "bg-gray-200"
                                : rank === 3
                                ? "bg-yellow-50"
                                : ""
                            }">
                                <div>
                                    <span class="font-bold mr-2">${rank}.</span>
                                    <span>${data.displayName}</span>
                                </div>
                                <span class="font-bold text-indigo-600">${time}s</span>
                            </li>
                        `;
        rank++;
      });
    }
    html += "</ol>";
    leaderboardContent.innerHTML = html;
  } catch (error) {
    console.error("Error fetching leaderboard: ", error);
    leaderboardContent.innerHTML = `<p class="text-center text-red-500">Lỗi tải bảng xếp hạng.</p>`;
  }
}

// === BEST TIME FUNCTIONS (FIREBASE) ===
function saveBestTime(mapName, newTimeInMs) {
  const key = `bestTime_${mapName}`;
  const savedTime = localStorage.getItem(key);

  // Chuyển thời gian đã lưu sang số. Nếu chưa có, gán giá trị VÔ CÙNG (Infinity)
  const currentBestTime = savedTime ? parseInt(savedTime) : Infinity;

  // So sánh: Chỉ lưu thời gian mới nếu nó TỐT HƠN (nhỏ hơn) thời gian cũ
  if (newTimeInMs < currentBestTime) {
    // Lưu thời gian mới (phải là chuỗi để lưu vào localStorage)
    localStorage.setItem(key, String(newTimeInMs));
    // Cần cập nhật lại leaderboard nếu đang mở
    fetchAndShowLeaderboard();
  }
}

async function loadBestTimesFromFirebase() {
  if (!userId) return;
  try {
    const bestTimesRef = ref(
      db,
      `/artifacts/${appId}/users/${userId}/bestTimes`
    );
    const snapshot = await get(bestTimesRef);
    if (snapshot.exists()) {
      personalBestTimes = snapshot.val();
    } else {
      personalBestTimes = {}; // No data yet
    }
  } catch (error) {
    console.error("Error loading best times from Firebase:", error);
    personalBestTimes = {}; // Reset on error
  }
  // If in-game, update the display immediately
  if (currentMapConfig) {
    displayBestTimeForCurrentMap();
  }
}

/**
 * Định dạng đối tượng thời gian ({minutes: X, seconds: Y}) thành chuỗi "MM:SS".
 */
function formatTime(ms) {
  // Nếu ms là null, undefined, hoặc không phải số, trả về giá trị mặc định
  if (typeof ms !== "number" || isNaN(ms) || ms <= 0) {
    return "---"; // Hoặc 'Chưa có'
  }

  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = Math.floor((ms % 1000) / 10); // Lấy 2 chữ số

  // Thêm số 0 ở đầu nếu cần
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMilliseconds = String(milliseconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

function displayBestTimeForCurrentMap() {
  if (!currentMapConfig) return;
  const mapName = currentMapConfig.name;
  const bestTime = personalBestTimes[mapName];

  // DEBUG LINE
  console.log(`Kiểm tra Map: ${mapName}, Best Time trong cache: ${bestTime}`);
  personalBestTimeEl.textContent = formatTime(bestTime);
}

// === MENU & VIEW MANAGEMENT ===
function showMainMenu() {
  mainMenuEl.classList.remove("hidden");
  gameViewEl.classList.add("hidden");
  stopTimer();

  // Reset container size
  mainContentEl.style.width = "450px";
  mainContentEl.style.maxWidth = "90vw";

  mapSelectionEl.innerHTML = "";
  MAPS.forEach((map) => {
    const button = document.createElement("button");
    button.className =
      "w-full text-left p-4 rounded-lg transition duration-200 shadow hover:shadow-lg bg-gray-50 hover:bg-indigo-50 border border-gray-200";
    button.innerHTML = `
                <h3 class="font-bold text-indigo-700">${map.name}</h3>
                <p class="text-sm text-gray-600">${map.rows}x${map.cols} | ${map.minMines} Mìn</p>
            `;
    button.onclick = () => {
      currentMapConfig = map;
      showGameView();
      initGame();
    };
    mapSelectionEl.appendChild(button);
  });
}
function showGameView() {
  mainMenuEl.classList.add("hidden");
  gameViewEl.classList.remove("hidden");

  const cols = currentMapConfig.cols;
  if (cols >= 50) {
    mainContentEl.style.width = "1500px";
    mainContentEl.style.maxWidth = "95vw";
  } else if (cols >= 40) {
    mainContentEl.style.width = "1280px";
    mainContentEl.style.maxWidth = "95vw";
  } else if (cols >= 30) {
    mainContentEl.style.width = "1100px";
    mainContentEl.style.maxWidth = "95vw";
  } else if (cols >= 25) {
    mainContentEl.style.width = "900px";
    mainContentEl.style.maxWidth = "95vw";
  } else if (cols >= 16) {
    mainContentEl.style.width = "640px";
    mainContentEl.style.maxWidth = "90vw";
  } else {
    mainContentEl.style.width = "450px";
    mainContentEl.style.maxWidth = "90vw";
  }
}

// === LOGIC TRÒ CHƠI ===
function initGame() {
  const config = currentMapConfig;
  currentNumMines =
    Math.floor(Math.random() * (config.maxMines - config.minMines + 1)) +
    config.minMines;

  isGameOver = false;
  isGameStarted = false;
  isAdmin = false; // Reset admin mode
  isShieldActive = false;
  isScannerActive = false;
  minesLeft = currentNumMines;
  cellsRevealed = 0;
  timerSeconds = 0;
  clearInterval(timerInterval);
  timerInterval = null;

  xrayUses = config.helpers.xray;
  autoFlagUses = config.helpers.autoFlag;
  surferUses = config.helpers.surfer;
  shieldUses = config.helpers.shield;
  scannerUses = config.helpers.scanner;
  helpUsesLeft = config.helpLimit; // Set help uses for the map
  updateHelperDisplay();

  mapNameEl.textContent = config.name;
  statusMessageEl.textContent = `Bắt đầu! Mìn: ${currentNumMines} quả.`;
  statusMessageEl.className =
    "text-center font-bold text-gray-700 py-2 bg-yellow-50 rounded-b-lg mb-4";
  minesLeftEl.textContent = currentNumMines;
  timerEl.textContent = 0;
  resetButton.classList.remove("shadow-neon");
  gameBoardEl.classList.remove("shield-active", "scanner-active");

  adminRevealMinesButton.classList.add("hidden"); // Hide admin button
  hideAdminRevealedMines();

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
  if (timerInterval) return;
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
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    if (!board[r][c].isMine && (r !== startR || c !== startC)) {
      board[r][c].isMine = true;
      minesPlaced++;
    }
  }
  // Calculate neighbor mines
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
          ) {
            count++;
          }
        }
      }
      board[r][c].neighborMines = count;
    }
  }
}

function revealCell(r, c) {
  const { rows, cols } = currentMapConfig;
  if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c].isRevealed)
    return;

  const cellData = board[r][c];
  const cellEl = gameBoardEl.children[r * cols + c];
  if (cellData.isFlagged) return;

  if (cellData.isMine) {
    if (isShieldActive) {
      isShieldActive = false;
      gameBoardEl.classList.remove("shield-active");
      cellData.isRevealed = true;
      cellsRevealed++;
      cellEl.classList.add("revealed");
      cellEl.querySelector(".cell-content").innerHTML = "🛡️";
      statusMessageEl.textContent = "Khiên đã bảo vệ bạn khỏi một quả mìn!";
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
  cellEl.classList.remove("mine-revealed-admin");
  const contentEl = cellEl.querySelector(".cell-content");
  contentEl.textContent = "";

  if (cellData.neighborMines > 0) {
    contentEl.textContent = cellData.neighborMines;
    contentEl.className = `cell-content c${cellData.neighborMines}`;
  } else {
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (dr !== 0 || dc !== 0) revealCell(r + dr, c + dc);
      }
    }
  }
  if (cellsRevealed === rows * cols - currentNumMines) {
    gameOver(true);
  }
}

function revealNeighbors(r, c) {
  const { rows, cols } = currentMapConfig;
  if (!board[r][c].isRevealed) return false;
  const cellData = board[r][c];
  let flaggedCount = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const nr = r + dr,
        nc = c + dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        board[nr][nc].isFlagged
      ) {
        flaggedCount++;
      }
    }
  }
  if (flaggedCount === cellData.neighborMines) {
    for (let dr = -1; dr <= 1; dr++) {
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
        ) {
          revealCell(nr, nc);
        }
      }
    }
    return true;
  }
  return false;
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

function toggleFlag(r, c) {
  const cellData = board[r][c];
  if (cellData.isRevealed) return;

  const cellEl = gameBoardEl.children[r * currentMapConfig.cols + c];
  cellData.isFlagged = !cellData.isFlagged;
  const contentEl = cellEl.querySelector(".cell-content");
  if (cellData.isFlagged) {
    cellEl.classList.add("flagged");
    contentEl.innerHTML = "🚩";
    minesLeft--;
  } else {
    cellEl.classList.remove("flagged");
    contentEl.textContent = "";
    minesLeft++;
  }
  minesLeftEl.textContent = minesLeft;
}

function gameOver(isWin) {
  if (isGameOver) return;
  isGameOver = true;
  stopTimer();
  isShieldActive = false;
  isScannerActive = false;
  gameBoardEl.classList.remove("shield-active", "scanner-active");
  updateHelperDisplay();

  const { rows, cols } = currentMapConfig;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cellData = board[r][c];
      const cellEl = gameBoardEl.children[r * cols + c];
      if (cellData.isMine) {
        cellEl.classList.add("revealed");
        if (!isWin && !cellEl.classList.contains("mine-revealed-admin")) {
          cellEl.classList.add("mine");
        }
        cellEl.querySelector(".cell-content").innerHTML = cellData.isFlagged
          ? "✅"
          : cellEl.querySelector(".cell-content").innerHTML === "🛡️"
          ? "🛡️"
          : "💣";
      } else if (cellData.isFlagged) {
        cellEl.style.backgroundColor = "#ffc0c0";
        cellEl.querySelector(".cell-content").innerHTML = "❌";
      }
      cellEl.removeEventListener("click", handleLeftClick);
      cellEl.removeEventListener("contextmenu", handleRightClick);
    }
  }

  if (isWin) {
    if (isAdmin) {
      statusMessageEl.textContent = `🎉 Thắng trong chế độ Admin! Điểm không được lưu.`;
      statusMessageEl.className =
        "text-center font-bold text-purple-600 py-2 bg-yellow-50 rounded-b-lg mb-4 shadow-neon";
    } else {
      statusMessageEl.textContent = `🎉 CHÚC MỪNG! Bạn đã thắng trong ${timerSeconds} giây!`;
      statusMessageEl.className =
        "text-center font-bold text-indigo-600 py-2 bg-yellow-50 rounded-b-lg mb-4 shadow-neon";
      saveBestTime(timerSeconds);
      submitScore();
    }
  } else {
    statusMessageEl.textContent = `💀 GAME OVER! Bạn đã chạm phải mìn.`;
    statusMessageEl.className =
      "text-center font-bold text-red-600 py-2 bg-yellow-50 rounded-b-lg mb-4 shadow-neon";
  }
  minesLeftEl.textContent = 0;
  resetButton.classList.add("shadow-neon");
}

// === ADMIN & COMMANDS ===
function activateAdminMode() {
  isAdmin = true;
  adminRevealMinesButton.classList.remove("hidden");
  statusMessageEl.textContent = "Chế độ Admin đã được kích hoạt!";
}
function revealAllMinesAdmin() {
  if (!isAdmin) return;
  const { rows, cols } = currentMapConfig;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c].isMine && !board[r][c].isRevealed) {
        const cellEl = gameBoardEl.children[r * cols + c];
        cellEl.classList.add("mine-revealed-admin");
        cellEl.querySelector(".cell-content").innerHTML = "💣";
      }
    }
  }
  statusMessageEl.textContent = "Admin: Mìn đã được tiết lộ!";
  adminRevealMinesButton.disabled = true;
}
function hideAdminRevealedMines() {
  if (!isAdmin) return;
  for (let i = 0; i < gameBoardEl.children.length; i++) {
    gameBoardEl.children[i].classList.remove("mine-revealed-admin");
  }
  adminRevealMinesButton.disabled = false;
}

function processCommand(commandStr) {
  const parts = commandStr
    .trim()
    .replace(/^\//, "")
    .toLowerCase()
    .split(" ")
    .filter((p) => p);
  if (parts.length === 0) return;

  const commandName = parts[0];
  const args = parts.slice(1);

  if (commandName === "admin") {
    activateAdminMode();
  } else if (commandName === "help") {
    if (args.length === 0) {
      // Command: /help
      if (helpUsesLeft > 0) {
        xrayUses++;
        autoFlagUses++;
        surferUses++;
        shieldUses++;
        scannerUses++;
        helpUsesLeft--;
        updateHelperDisplay();
        statusMessageEl.textContent = `✨ Lệnh help! Thêm 1 lượt cho mỗi phụ trợ. (Còn ${helpUsesLeft} lần)`;
      } else {
        statusMessageEl.textContent = "Bạn đã hết lượt dùng /help cho map này.";
      }
    } else if (args.length === 2) {
      // Command: /help <id> <amount>
      const helperId = args[0];
      const amount = parseInt(args[1]);

      if (isNaN(amount) || amount <= 0) {
        statusMessageEl.textContent = "Số lượng không hợp lệ.";
        return;
      }

      let success = true;
      let helperName = "";
      switch (helperId) {
        case "xray":
          xrayUses += amount;
          helperName = "Tia X";
          break;
        case "autoflag":
          autoFlagUses += amount;
          helperName = "Cờ Tự Động";
          break;
        case "surfer":
          surferUses += amount;
          helperName = "Lướt Sóng";
          break;
        case "shield":
          shieldUses += amount;
          helperName = "Khiên";
          break;
        case "scanner":
          scannerUses += amount;
          helperName = "Máy Dò";
          break;
        default:
          success = false;
          statusMessageEl.textContent = `Phụ trợ "${helperId}" không tồn tại.`;
      }
      if (success) {
        updateHelperDisplay();
        statusMessageEl.textContent = `Đã thêm ${amount} lượt cho "${helperName}".`;
      }
    } else {
      statusMessageEl.textContent =
        "Sử dụng: /help hoặc /help <tên> <số lượng>";
    }
  } else {
    statusMessageEl.textContent = `Lệnh không hợp lệ: /${commandName}`;
  }
}

// === PHỤ TRỢ (HELPER) FUNCTIONS ===
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

function useXray() {
  if (isGameOver || xrayUses <= 0 || !isGameStarted) return;
  const { rows, cols } = currentMapConfig;
  const safeCells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (
        !board[r][c].isMine &&
        !board[r][c].isRevealed &&
        !board[r][c].isFlagged
      ) {
        safeCells.push({ r, c });
      }
    }
  }
  if (safeCells.length > 0) {
    const { r, c } = safeCells[Math.floor(Math.random() * safeCells.length)];
    revealCell(r, c);
    xrayUses--;
    updateHelperDisplay();
    statusMessageEl.textContent = "Tia X đã mở một ô an toàn!";
  } else {
    statusMessageEl.textContent = "Không còn ô an toàn để dùng Tia X.";
  }
}

function useAutoFlag() {
  if (isGameOver || autoFlagUses <= 0 || !isGameStarted) return;
  const { rows, cols } = currentMapConfig;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cellData = board[r][c];
      if (!cellData.isRevealed || cellData.neighborMines === 0) continue;

      let hiddenNeighbors = [];
      let flaggedNeighbors = 0;

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = r + dr;
          const nc = c + dc;

          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            const neighbor = board[nr][nc];
            if (!neighbor.isRevealed) {
              if (neighbor.isFlagged) {
                flaggedNeighbors++;
              } else {
                hiddenNeighbors.push({ r: nr, c: nc });
              }
            }
          }
        }
      }

      if (
        cellData.neighborMines === flaggedNeighbors + hiddenNeighbors.length &&
        hiddenNeighbors.length > 0
      ) {
        const mineToFlag = hiddenNeighbors[0];
        toggleFlag(mineToFlag.r, mineToFlag.c);
        autoFlagUses--;
        updateHelperDisplay();
        statusMessageEl.textContent = `Cờ Tự Động đã cắm cờ tại (${mineToFlag.r}, ${mineToFlag.c})!`;
        return;
      }
    }
  }

  statusMessageEl.textContent =
    "Cờ Tự Động: Không tìm thấy ô nào chắc chắn là mìn.";
}

function useSurfer() {
  if (isGameOver || surferUses <= 0 || !isGameStarted) return;
  const { rows, cols } = currentMapConfig;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cellData = board[r][c];
      if (!cellData.isRevealed || cellData.neighborMines === 0) continue;

      let flaggedCount = 0;
      let hasHiddenNeighbor = false;

      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            if (board[nr][nc].isFlagged) {
              flaggedCount++;
            }
            if (!board[nr][nc].isRevealed && !board[nr][nc].isFlagged) {
              hasHiddenNeighbor = true;
            }
          }
        }
      }

      if (cellData.neighborMines === flaggedCount && hasHiddenNeighbor) {
        const success = revealNeighbors(r, c);
        if (success) {
          surferUses--;
          updateHelperDisplay();
          statusMessageEl.textContent = "Lướt Sóng đã mở các ô an toàn!";
          return;
        }
      }
    }
  }

  statusMessageEl.textContent =
    "Lướt Sóng: Không tìm thấy vị trí phù hợp để lướt.";
}

function useShield() {
  if (isGameOver || shieldUses <= 0 || !isGameStarted || isShieldActive) return;
  isShieldActive = true;
  shieldUses--;
  gameBoardEl.classList.add("shield-active");
  statusMessageEl.textContent = "Khiên bảo vệ đã được kích hoạt!";
  updateHelperDisplay();
}
function useScanner(r_center, c_center) {
  if (!isScannerActive) {
    if (isGameOver || scannerUses <= 0 || !isGameStarted) return;
    isScannerActive = true;
    gameBoardEl.classList.add("scanner-active");
    statusMessageEl.textContent = "Chọn một ô để quét khu vực 3x3 xung quanh.";
    updateHelperDisplay();
  } else {
    const { rows, cols } = currentMapConfig;
    let mineCount = 0;
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const r = r_center + dr;
        const c = c_center + dc;
        if (r >= 0 && r < rows && c >= 0 && c < cols) {
          if (board[r][c].isMine) mineCount++;
          const cellEl = gameBoardEl.children[r * cols + c];
          cellEl.classList.add("scanned-cell");
          setTimeout(() => cellEl.classList.remove("scanned-cell"), 700);
        }
      }
    }
    isScannerActive = false;
    scannerUses--;
    gameBoardEl.classList.remove("scanner-active");
    statusMessageEl.textContent = `Máy Dò: Tìm thấy ${mineCount} mìn trong khu vực 3x3.`;
    updateHelperDisplay();
  }
}

function showCommandSuggestions() {
  const value = commandInput.value.toLowerCase().replace(/^\//, "");
  if (!value) {
    commandSuggestionsEl.classList.add("hidden");
    return;
  }

  const filteredCommands = AVAILABLE_COMMANDS.filter((c) =>
    c.cmd.startsWith(value)
  );

  if (filteredCommands.length === 0) {
    commandSuggestionsEl.classList.add("hidden");
    return;
  }

  commandSuggestionsEl.innerHTML = "";
  filteredCommands.forEach((command) => {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.innerHTML = `<span class="font-bold">/${command.cmd}</span> - <span class="text-sm text-gray-600">${command.desc}</span>`;
    item.onclick = () => {
      commandInput.value = "/" + command.cmd.split(" ")[0] + " ";
      commandSuggestionsEl.classList.add("hidden");
      commandInput.focus();
    };
    commandSuggestionsEl.appendChild(item);
  });
  commandSuggestionsEl.classList.remove("hidden");
}

// === EVENT LISTENERS & INITIALIZATION ===
window.onload = async function () {
  await initializeFirebase();
  showMainMenu();
  resetButton.addEventListener("click", initGame);
  backToMenuButton.addEventListener("click", showMainMenu);
  guideButton.addEventListener(
    "click",
    () => (guideModal.style.display = "flex")
  );
  closeModalButton.addEventListener(
    "click",
    () => (guideModal.style.display = "none")
  );
  guideModal.addEventListener("click", (e) => {
    if (e.target === guideModal) guideModal.style.display = "none";
  });

  commandMenuButton.addEventListener("click", () => {
    commandModal.style.display = "flex";
    commandInput.focus();
  });
  closeCommandModalButton.addEventListener("click", () => {
    commandModal.style.display = "none";
    commandSuggestionsEl.classList.add("hidden");
  });
  commandModal.addEventListener("click", (e) => {
    if (e.target === commandModal) {
      commandModal.style.display = "none";
      commandSuggestionsEl.classList.add("hidden");
    }
  });
  submitCommandButton.addEventListener("click", () => {
    processCommand(commandInput.value);
    commandInput.value = "";
    commandModal.style.display = "none";
    commandSuggestionsEl.classList.add("hidden");
  });
  commandInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      submitCommandButton.click();
    }
  });
  commandInput.addEventListener("input", showCommandSuggestions);

  displayNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = displayNameInput.value.trim();
    if (name) {
      setDisplayName(name);
    }
  });

  const openLeaderboard = () => {
    leaderboardMapSelect.innerHTML =
      '<option value="total">Tổng Thời Gian Chơi</option>';
    MAPS.forEach((map) => {
      const option = document.createElement("option");
      option.value = map.name;
      option.textContent = map.name;
      leaderboardMapSelect.appendChild(option);
    });
    leaderboardModal.style.display = "flex";
    fetchAndShowLeaderboard();
  };

  leaderboardMenuButton.addEventListener("click", openLeaderboard);
  leaderboardGameButton.addEventListener("click", openLeaderboard);
  closeLeaderboardButton.addEventListener(
    "click",
    () => (leaderboardModal.style.display = "none")
  );
  leaderboardMapSelect.addEventListener("change", fetchAndShowLeaderboard);

  adminRevealMinesButton.addEventListener("click", revealAllMinesAdmin);

  xrayButton.addEventListener("click", useXray);
  autoFlagButton.addEventListener("click", useAutoFlag);
  surferButton.addEventListener("click", useSurfer);
  shieldButton.addEventListener("click", useShield);
  scannerButton.addEventListener("click", () => useScanner(null, null));

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== commandInput) {
      e.preventDefault();
      commandModal.style.display = "flex";
      commandInput.focus();
    }
  });
};

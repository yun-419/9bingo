/* ============================================================================
 * 🎯 BINGO 2026 · Firebase 設定檔
 * ============================================================================
 *
 * 只有管理員（你）需要做這個設定，而且只做一次。
 * 做完後 commit 本檔案到 GitHub → Vercel 自動部署 → 全部 5 個人打開網址
 * 就直接即時同步，不需要各自做任何設定 ☁️
 *
 * ────────────────────────────────────────────────────────────────────────────
 * 🚀 設定步驟（只做一次，5 分鐘）：
 *
 *   1. 打開 https://console.firebase.google.com
 *      用 Google 帳號登入（不用花錢）
 *
 *   2. 右上角按「Add project / 新增專案」
 *      · 輸入名字（例如：bingo-2026）
 *      · Google Analytics 可以「關閉」
 *      · 按 Create project
 *
 *   3. 進到專案後，左側選單 Build → Realtime Database
 *      · 按 Create Database
 *      · 地區選：asia-southeast1 (Singapore)（亞洲最快）
 *      · 選「Start in test mode」→ Enable
 *
 *   4. 回首頁，左上角齒輪 ⚙️ → Project settings
 *
 *   5. 捲到最下方「Your apps」區塊
 *      · 點 </> 網頁圖示
 *      · App nickname 隨便取（例如：bingo-web）
 *      · 不用打勾 Firebase Hosting
 *      · 按 Register app
 *
 *   6. 會跳出一段 JavaScript，長得像：
 *
 *        const firebaseConfig = {
 *          apiKey: "AIzaSy...",
 *          authDomain: "bingo-2026.firebaseapp.com",
 *          databaseURL: "https://bingo-2026-default-rtdb...firebasedatabase.app",
 *          projectId: "bingo-2026",
 *          storageBucket: "bingo-2026.appspot.com",
 *          messagingSenderId: "...",
 *          appId: "..."
 *        };
 *
 *      把大括號 { ... } 裡面所有東西，貼到下方 ⬇️ 取代現在的空內容
 *
 *   7. 儲存本檔案，commit 到 GitHub（跟之前更新 bingo.html 一樣）
 *      Vercel 會自動重新部署，完成！
 *
 * ────────────────────────────────────────────────────────────────────────────
 * ⚠️ 30 天後 test mode 會到期
 *    → 回 Realtime Database → Rules 分頁
 *    → 把規則內容改成：{ "rules": { ".read": true, ".write": true } }
 *    → 按 Publish（5 個朋友之間用沒關係，不用太嚴格）
 * ============================================================================
 */

window.FIREBASE_CONFIG_BUILT_IN = {
  // 👇 把你的 firebaseConfig 內容貼到這裡（大括號內的所有欄位）👇

  // apiKey: "",
  // authDomain: "",
  // databaseURL: "",
  // projectId: "",
  // storageBucket: "",
  // messagingSenderId: "",
  // appId: ""

};

// 房間名稱 — 5 人共用同一個房間。如果你想跟別組朋友玩不同局，改成不同名字即可。
window.BINGO_ROOM_NAME = 'bingo-2026';

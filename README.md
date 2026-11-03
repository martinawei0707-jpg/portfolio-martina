# FDE101 個人轉職作品集網站

這是黃筱崴在 FDE101 前端課程的實作驗收作品。採用原生 **HTML、CSS、JavaScript** 製作多頁式網站，左側固定導覽、右側閱讀內容，並可部署至 GitHub Pages。

## 主要內容
- 首頁、自我介紹、技術能力、專案作品、活動文章、聯絡我。
- 活動文章有分類按鈕與關鍵字搜尋，使用 JavaScript 進行 DOM 更新。
- 3 篇示範短文可點開閱讀。交件前請依實際經驗修訂。

## 無障礙設計
- 語意化 HTML 與各頁獨立 `<title>`。
- 「跳至主要內容」連結與明顯的鍵盤焦點樣式。
- 側邊導覽使用原生 `<nav>`、`<a>` 和 `aria-current="page"`。
- 文章篩選按鈕具 `aria-pressed`；結果數量透過 `role="status"` 更新。
- 基本響應式版面與減少動態效果設定。

無障礙符合性仍需人工與工具測試；本專案以 WCAG 2.2 AA 為目標，不宣稱已通過認證。

## 本機預覽
雙擊 `index.html` 即可查看，或使用 VS Code 的 Live Server。

## GitHub Pages 部署
1. 在 GitHub 建立公開 Repository，例如 `fde101-portfolio`。
2. 將 `index.html`、`about.html` 等檔案及 `css/`、`js/`、`articles/` 目錄推送到根目錄。
3. Repository → Settings → Pages → Build and deployment → Deploy from a branch。
4. 選擇 `main` / `(root)` 並儲存。
5. 驗證公開網址 `https://帳號.github.io/fde101-portfolio/`，包含各個頁面及文章連結。

## 待本人確認及更新
- `contact.html`：填入自己願意公開的 Email / GitHub；目前未填寫。
- `skills.html`：按實際熟悉程度修訂技術狀態。
- 文章詳細頁：目前為根據個人經驗整理的示範短文，應補充正式內容與日期。
- README 的測試紀錄、Commit 紀錄需依實際開發操作新增。

## Git 工作流程範例
```bash
git init
git add .
git commit -m "feat: 建立多頁式個人網站"
git branch -M main
git remote add origin https://github.com/你的帳號/fde101-portfolio.git
git push -u origin main
```
請把遠端 URL 改成自己建立的實際 Repo，不要直接照貼示範帳號。

# Martina HUANG｜個人作品集網站

FDE101 前端課程驗收作品，以 HTML、CSS、JavaScript
製作的多頁式個人網站。

網站記錄我的跨領域經歷、技術學習、專案作品，
以及參與不同活動時的觀察與反思。

## 網站連結

- [Live Demo](https://martinawei0707-jpg.github.io/portfolio-martina/)
- [GitHub Repository](https://github.com/martinawei0707-jpg/portfolio-martina)

## 使用技術

- HTML5：語意化網頁結構與多頁式導覽
- CSS3：Grid、Flexbox、版面設計與 RWD
- JavaScript：DOM 操作、事件監聽、文章搜尋及篩選
- Git：版本控制與 Commit 紀錄
- GitHub Pages：靜態網站部署

## 網站架構

| 頁面 | 內容 |
|---|---|
| Home | 個人介紹與精選作品 |
| About | 學經歷、工作方式與轉職方向 |
| Skills | 技術能力及學習狀態 |
| Projects | 技術作品與跨領域專案 |
| Articles | 活動紀錄、個人反思與技術學習 |
| Contact | Email 與 GitHub 聯絡管道 |

Articles 採獨立文章頁面，
並提供分類篩選與關鍵字搜尋功能。

## 無障礙設計

本網站以 WCAG 2.2 AA 為開發目標，
從初期設計階段納入無障礙考量。

目前採用的設計包括：

- 語意化 HTML 與標題階層
- 跳至主要內容連結
- 原生 HTML 導覽連結
- aria-current 標示目前頁面
- 鍵盤焦點提示
- 文章分類狀態與篩選結果提示
- prefers-reduced-motion 動態效果設定
- 響應式排版

目前尚未完成全面性的無障礙符合性測試，
因此不宣稱網站已通過 WCAG 認證。

## RWD 響應式設計

以電腦版為主要設計方向，
左側固定導覽列，右側呈現主要內容。

使用 CSS Media Queries，
在不同螢幕寬度下調整導覽列、
卡片及文章排版。

主要斷點：
- 1050px
- 760px

## 本機執行方式

1. 下載或 Clone 專案。
2. 使用 VS Code 開啟專案資料夾。
3. 透過瀏覽器開啟 index.html，
   或使用 Live Server 預覽。

本專案使用原生 HTML、CSS、JavaScript，
不需要額外安裝 npm 套件。

## GitHub Pages 部署

本網站使用 GitHub Pages 發布：

- Branch：main
- Folder：/(root)
- 入口檔案：index.html

每次修改程式碼並推送至 GitHub 後，
由 GitHub Pages 執行網站更新。

## 後續開發方向

- 持續增加文章及專案紀錄
- 改善響應式版面與操作體驗
- 進行鍵盤、螢幕報讀器與對比度測試
- 持續完善無障礙網頁設計

## 專案作者

Martina HUANG

FDE101 前端課程實作｜2026

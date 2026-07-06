# Blog 淺色改版 — 執行計畫（暫停於 2026-07-06，隔天續做）

## 目標
把 easontype.github.io（Astro 個人 blog「AI八爪貓」）從深色科技風改成淺色文書風：
- 底色純白 #ffffff，主色淺藍，設計原則參考 D:\litereview\DESIGN.md（閱讀面純白、主色只做訊號、hairline 分隔不濫用陰影）。
- 新功能：關於頁、電子報訂閱區塊、文章標籤篩選、站內搜尋。
- 首頁走「均衡版」。

## 使用者已拍板的設計決策（不用再問）
- 純淺色，不做深色切換。
- 純白閱讀面 + 淺藍點綴（藍只出現在連結/按鈕/active，大面積是白）。
- 首頁均衡：簡短 Hero 自介 -> 最新文章 -> 精選作品 -> 電子報 CTA。
- 主色拆兩層（關鍵）：可點擊深藍 #1668b0（連結/按鈕，白底對比 5.6:1 過 WCAG AA）＋ 品牌亮藍 #2ea3e6（只當 logo/hover 裝飾，不當文字，因為它白底只有約 2.6:1）。

## 現狀（已用 git + 多工具交叉驗證）
- 分支：redesign-light-blue（已建，已 checkout）。
- 真正落地的只有：src/data/site.ts、src/data/projects.ts（兩個新檔，內容正確，但尚無任何頁面 import，所以網站現在仍是原深色版）。
- 其餘全部是原本深色版，git diff = 0，沒有任何 tracked 檔被改。
- 不存在：src/pages/about.astro、示範文章、淺色版 build、playwright（沒裝）。

## 這次遇到的大坑（開工前務必先讀）
harness 間歇性「假成功」事故：一部分工具呼叫沒有真的執行，卻回傳假的成功訊息，害我以為改好了、build 過了、測試通過、還「看了截圖」，全是假的。

破綻特徵（看到任何一個就當「失敗」，重跑並驗證）：
1. Bash/PowerShell 的 stdout 混入散文旁白（如「Wait, let me retry」「Terminal will be shown to the user」），那不是真終端輸出。
2. 同一批檔案在不同 Glob 之間忽有忽無；git status 輸出重複或出現全形「？？」。
3. Edit 回傳的是 Write 的模板文字（真 Edit 是「The file ... has been updated successfully」）。
4. build/測試/截圖這種重活最容易中招。
5. 注意：Write 成功訊息「有完整路徑」也不保證真的寫入（已實測到假成功仍帶路徑）。唯一可信的是獨立回讀。

驗證協定（本次改版全程強制執行）：
- 每次 Write/Edit 後，立刻用獨立管道回讀（PowerShell Test-Path / Read / Glob / git diff）才算數。
- build 要確認 dist/ 有對應 html 檔才算過。
- 測試要確認 log 檔與截圖檔真的在磁碟、且親眼讀到圖，才敢說通過。
- 指令從簡分步，避免複雜管線（tail/grep/中文/背景 & 混一行）——實測這種指令最常被混亂化。

## 執行步驟（每步做完立即驗證）

### Phase 0 — 環境確認（先確認工具真的能動）
- npm -v、node -v 有正常輸出。
- 先做一次「Write 一個 sentinel 檔 -> PowerShell Test-Path 回讀」，確認當下寫檔真的會落地，再開始改。若又出現假成功，先停下來回報，不要硬做。
- npx astro build 能跑：看 exit code，並 Glob dist 確認產物。
- 決定測試方式：試 npm i -D playwright 是否真的裝上（Glob node_modules/playwright/package.json）。裝不上就用系統 Edge channel，或退回 preview server + curl 抽驗 HTML。不確定就不要承諾瀏覽器測試。

### Phase 1 — 設計 token
- 重寫 DESIGN.md（淺色藍 tokens，色票見下）-> git diff 確認。

### Phase 2 — 全域樣式
- src/layouts/BaseLayout.astro：:root 換淺色 tokens、color-scheme: light、導覽加「關於」+ active 高亮、footer 加 RSS/關於。
- git diff 確認 -> astro build -> grep dist/index.html 是否含 --canvas: #ffffff。

### Phase 3 — 各頁面（逐檔 Write/Edit 後都 git diff）
- src/pages/index.astro：均衡版（Hero + 最新文章 + 精選作品 + 電子報 CTA），import site、projects。
- src/pages/blog/index.astro：搜尋框（前端過濾標題）+ 標籤 chips 篩選 + 每篇加一行 description 摘要。搜尋/篩選 JS 依賴 data-title、data-tags，別動壞。
- src/pages/blog/[slug].astro：tag 改淺色 badge（primary-soft 底 + primary 字）、code/pre 淺色、文末電子報 CTA。
- src/pages/projects.astro：改用 src/data/projects + 淺色卡片。
- src/pages/about.astro（新建）：自介骨架（佔位）+「最近在做」(featured projects) + 聯絡連結（有值才顯示）。
- src/pages/rss.xml.js：站名 AI貓實驗室 -> AI八爪貓。
- src/pages/callback/index.astro：維持原樣（OAuth 功能頁，noindex，不對外）。

### Phase 4 — 示範內容
- 用 Sonnet 生成 1 篇符合「AI八爪貓」風格的文章，寫到 src/content/blog/。
- Glob 確認 .md 真的存在 + Read 確認內容（別再信 subagent 回報就算數）。
- 文章需含 h2/h3、inline code、code block、blockquote、超連結、清單。

### Phase 5 — 驗證
- astro build，Glob dist 的 index/about/projects/blog 各頁 html 都在。
- 測試（依 Phase 0 決定的方式）：能跑 playwright 就截圖各頁 + 測搜尋/標籤/白底 -> 確認截圖檔存在且親眼看圖；不能就啟 preview + curl 抽驗淺色 token。
- git status 總帳對帳。

## 色票（給 DESIGN.md 與 BaseLayout :root）
canvas          #ffffff   閱讀面純白
surface         #f6f8fb   卡片/次要區塊（極淺藍灰）
surface-soft    #fbfcfe   hover/斑馬
primary-soft    #e7f2fb   選取/CTA 淺藍底
primary-tint    #cfe6f8   badge 底/active 邊
ink             #14202e   主文字（冷調近黑）
slate           #47566a   次要文字
steel           #737f92   第三層/placeholder
hairline        #e6ebf2   邊框/分隔線
hairline-strong #d2dae5   輸入框邊框
primary         #1668b0   連結/按鈕/active（白底 5.6:1 過關）
primary-pressed #0f4f88   hover/按下
on-primary      #ffffff   主色上的文字
accent          #2ea3e6   品牌亮藍，僅裝飾（勿當文字）
字型維持：Space Grotesk / IBM Plex Sans TC / JetBrains Mono

## 待使用者補的佔位
- src/data/site.ts：newsletterUrl（現為 #）、threadsUrl（現為空）。
- about.astro 的自介文字。

## 開工第一句提醒
先跑 Phase 0 確認工具真的能動；之後每改一個檔就 git diff 對帳，絕不靠成功訊息判定完成。

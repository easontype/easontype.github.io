---
title: 免費架一個靜態部落格：不用買網域，Cloudflare 一鍵部署 Astro 範本就能上線
description: 材料所研究生實測 Cloudflare 內建的一鍵部署流程，不用買網域、不用資料庫、不用月費主機，7 步驟把部落格架起來，這篇是免費版的完整拆解。
pubDate: 2026-07-15T09:00:00+08:00
tags: ["建站教學", "AI學習"]
---

材料所研究生一枚，想架個部落格但不想多花錢，查了一輪發現 Cloudflare 本身就有一鍵部署的範本流程，不用自己買網域、不用架伺服器、不用資料庫，全程免費，實際點過一次，10 分鐘內就上線了。這篇是免費版的完整拆解。

[Threads傳送門](https://www.threads.com/@pro_ai.news)

免費版最後拿到的網址，是 Cloudflare 給的 `專案名稱.你的帳號.workers.dev`。如果不想用這個網址，GitHub Pages 開啟後本身就有一個 `使用者名稱.github.io` 可以用，兩個都不用申請、不用付費。想換成自己買的自訂網域，或想知道怎麼用 Obsidian 當寫文章的後台，這兩塊留到下一篇。

## 1. 登入 Cloudflare 後台

- **費用：** 全程免費，只需要一個 Cloudflare 帳號
- **登入後：** 首頁預設是空的，左側選單找「Workers & Pages」點進去

![Cloudflare 後台首頁](/images/blog/free-blog-cloudflare-workers-one-click-deploy/01-dashboard-ready.png)

## 2. 點左側「Workers & Pages」，按「Create application」

- **位置：** 頁面右上角
- **作用：** 開始建立一個新的專案

![Workers 與 Pages 頁面，Create application 按鈕](/images/blog/free-blog-cloudflare-workers-one-click-deploy/02-create-application.png)

## 3. 選「Select a template」

- **其他選項：** 接 GitHub、接 GitLab、Hello World 空白專案、上傳靜態檔案，都需要自己準備程式碼
- **選範本最快：** 不用自己寫框架，Cloudflare 直接給現成的專案

![Ship something new 畫面，Select a template 選項](/images/blog/free-blog-cloudflare-workers-one-click-deploy/03-ship-something-new.png)

## 4. 範本清單選「Astro Framework Starter」

清單裡其他範本是給不同用途的，不是拿來寫部落格的：

- **React Router Framework Starter：** 適合做需要前後端邏輯、互動性強的全端網頁應用程式
- **Vite React Template：** 給想自己刻 React 前端的人用，一樣偏應用程式而非部落格
- **Workflows Starter：** 示範 Cloudflare Workflows（背景任務、流程自動化）怎麼寫，跟架站無關
- **AI Agent Visibility：** 幫既有網站做「讓 AI 搜尋工具讀得懂」的優化範本，不是從零架站用的

Astro Framework Starter 才是官方標明「Build a personal website, blog, or portfolio with Astro」的部落格範本

![選擇範本畫面，Astro Framework Starter](/images/blog/free-blog-cloudflare-workers-one-click-deploy/04-select-template-astro.png)

## 5. 選自己的 GitHub 帳號，確認專案名稱

- **Git account：** 選要接哪個 GitHub 帳號，Cloudflare 會自動在裡面開一個新 repo
- **Project name：** 這個名稱會變成之後網址的一部分（`專案名稱.你的帳號.workers.dev`）
- **Build／Deploy command：** 範本已經幫你填好，不用自己改

![設定應用程式畫面，選擇 GitHub 帳號](/images/blog/free-blog-cloudflare-workers-one-click-deploy/05-setup-git-account.png)

## 6. 等建置完成，按右上角「Visit」

- **過程：** Cloudflare 自動跑安裝、建置、部署，全程不用自己動手
- **完成後：** 按「Visit」直接開啟剛上線的網站

![建置部署成功畫面](/images/blog/free-blog-cloudflare-workers-one-click-deploy/06-build-deploy-success.png)

## 7. 到自己的 GitHub 把新 repo clone 下來

- **repo 位置：** Cloudflare 幫你把程式碼開好一個 public repo，掛在自己的 GitHub 帳號底下
- **接下來：** clone 下來之後就能用來寫文章，`git commit` 加 `git push` 會自動觸發重新部署

![Cloudflare 自動建立的 GitHub repo](/images/blog/free-blog-cloudflare-workers-one-click-deploy/07-github-repo-created.png)

## 免費版就這樣上線了

7 步驟走完，網站已經在 `專案名稱.你的帳號.workers.dev` 上線，全程沒有花一毛錢，也沒有任何一步需要額外的資料庫或登入後台。如果不想用 Cloudflare Workers 給的網址，GitHub Pages 開啟後本身就有一個 `使用者名稱.github.io`，一樣免費、不用設定。

下一篇會講怎麼把這個免費網址換成自己買的自訂網域，以及怎麼用 Obsidian 當寫文章的後台。

有卡住的地方，或想看更完整的技術細節，歡迎來 [Threads](https://www.threads.com/@pro_ai.news) 留言。

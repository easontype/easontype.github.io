---
title: 免費架好之後，換上自己的網域 + 用 Obsidian 當寫文章後台
description: 接續免費版教學，這篇講怎麼把免費網址換成自己買的自訂網域，以及怎麼用 Obsidian 這種純筆記軟體當部落格的寫作後台。
pubDate: 2026-07-15T09:00:00+08:00
tags: ["建站教學", "AI學習"]
draft: true
---

上一篇用 Cloudflare 一鍵部署範本把部落格免費架起來了，網址是 Cloudflare 或 GitHub 給的預設網域。這篇接著講兩件事：怎麼換成自己買的自訂網域，還有怎麼用 Obsidian 當寫文章的後台。

[Threads傳送門](https://www.threads.com/@pro_ai.news)

## 1. 到 Cloudflare 買一個網域

- **費用：** `.com`／`.blog` 這類常見後綴相對便宜，年費大概落在新台幣 300–500 元
- **平台：** Cloudflare Registrar，不用另外找其他註冊商，買完網域跟後面的 DNS 設定會在同一個地方管理
- **注意：** 網域名稱決定了之後所有連結，先想好帳號一致的名字再買

Cloudflare 網域註冊入口：[Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)

<!-- TODO: 插入 Cloudflare 購買網域畫面截圖 -->

## 2. 在 GitHub 建立一個 public repo

- **限制：** 一定要是 public repo，GitHub Pages 免費方案不支援 private repo 架站
- **內容：** repo 裡放的就是你的網站程式碼（可以請 AI coding 工具幫你生一個靜態網站框架，例如 Astro、Next.js 靜態匯出）
- **命名：** repo 名稱隨意，不影響最終網域

<!-- TODO: 插入 GitHub 建立 public repo 畫面截圖 -->

## 3. 在 GitHub repo 設定 custom domain

- **路徑：** repo 頁面 → Settings → Pages
- **動作：** 在 Custom domain 欄位填入你買的網域，存檔
- **效果：** GitHub 會產生一個根目錄 `CNAME` 檔案記錄這個網域，這步做完網域還不會生效，要等第 4 步 DNS 設定完成

<!-- TODO: 插入 GitHub Pages Custom domain 設定畫面截圖 -->

## 4. 回 Cloudflare 設定 DNS records

- **路徑：** Cloudflare 你買的網域 → DNS → Records
- **要加的紀錄：** 4 筆 A record 指向 GitHub Pages 的固定 IP（185.199.108.153／185.199.109.153／185.199.110.153／185.199.111.153），如果要讓 `www` 也能訪問，再加一筆 CNAME 指到你的 `xxx.github.io`
- **Proxy status 務必設「DNS only」**（灰色雲朵，不要橘色）——橘色代表 Cloudflare 幫你代理流量，會跟 GitHub Pages 自己的 SSL 憑證衝突
- **等待：** DNS 生效通常幾分鐘到幾小時，生效後回 GitHub Pages 設定勾選 Enforce HTTPS

<!-- TODO: 插入 Cloudflare DNS records 設定畫面截圖 -->

## 5. 用 Obsidian 當寫文章的後台

- **建框架：** 跟 AI coding 工具說你要一個靜態部落格網站，它可以直接生出首頁、文章列表、文章頁的程式碼
- **寫文章：** 不需要額外的後台系統，Obsidian 本身就是純 markdown 筆記軟體，直接把 vault 資料夾對應到網站程式碼裡放文章的資料夾（例如 `src/content/blog/`），寫完存檔、推上 GitHub，網站就會自動重新部署
- **好處：** 沒有登入頁面、沒有資料庫、沒有額外費用，內容本身就是純文字檔，方便版本控制也方便之後搬家

<!-- TODO: 插入 Obsidian 寫文章畫面截圖 -->

## 整體流程

自訂網域從購買到生效，加上 Obsidian 接上寫作流程，實際操作時間不用 30 分鐘（DNS 生效等待時間不算）。免費版跟付費版的差別只有網址長短，內容管理、寫文章的方式完全一樣。

有卡住的地方，或想看更完整的技術細節，歡迎來 [Threads](https://www.threads.com/@pro_ai.news) 留言。

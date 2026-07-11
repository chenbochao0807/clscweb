---
title: "網站技術與功能介紹"
published: 2026-07-11
description: "Description of clsc website"
tags:
  - Website
  - Astro
  - CLSC
  - Cloudfare
category: 網站
draft: false
---
# 先情提要

本站沒有bug，所有超出預期並非錯誤而可能是使用者環境所致或開發者失誤，皆屬於 [特性](https://zh.minecraft.wiki/w/%E7%89%B9%E6%80%A7?variant=zh-tw) 。

# 網站技術與功能介紹

本站採用現代化的靜態網站架構，兼顧速度、可維護性與良好的瀏覽體驗。

網站內容以Markdown撰寫，並透過GitHub進行版本管理，使網站更新更加容易且可追蹤。

---

## 技術架構

網站主要使用以下技術建置：

- Astro
- TypeScript
- Tailwind CSS
- Fuwari Theme
- Svelte
- Expressive Code
- GitHub
- Cloudflare Pages

---

## 網站特色

### Markdown Posts

所有文章皆以 Markdown 撰寫，可快速新增：

- 公告
- 社課教材
- 活動紀錄
- 技術分享
- 社團資訊

---

### 深色模式

網站支援 Light / Dark Mode，可依照使用者偏好自動切換。

---

### 響應式設計

支援：

- Desktop
- Laptop
- Tablet
- Mobile

不同裝置"或許"能獲得一致的瀏覽體驗。

---

### 搜尋功能(No Fake but still fixing)

整合 Pagefind，提供全文搜尋功能，可快速查詢：

- 文章
- 教材
- 關鍵字

---

### GitHub 整合

網站可直接嵌入 GitHub Repository。

例如：

::github{repo="chenbochao0807/clscweb"}

方便查看專案內容與更新。

---

### 分享功能

每篇文章皆可快速分享到：

- Facebook老人
- X 
- LINE 爛東西
- Telegram 說好不妥協呢法國??
- Email 
- 複製連結

---

### 留言系統

文章底部提供留言功能，方便社員與訪客交流討論。

---

### 社團資訊

網站包含：

- 社團介紹
- 幹部介紹
- 社員介紹
- 友社連結
- 學習資源
- 活動成果

---

### 首頁功能

首頁提供：

- 最新公告
- 公告跑馬燈
- 社團介紹
- 最新文章
- 快速導覽

---

## 網站效能

網站採用 Astro 靜態生成，具有：

- 快速載入
- 較低頻寬需求
- 良好的 SEO
- 高安全性
- 易於部署

並使用 Cloudflare Pages 提供全球 CDN，加快各地使用者的存取速度。

---

## 開發流程

網站採用 Git Flow 進行管理：

```text
修改程式
    │
    ▼
Git Commit
    │
    ▼
GitHub
    │
    ▼
Cloudflare Pages
    │
    ▼
自動部署
```

每次推送至 GitHub 後，網站便會自動重新建置並發布最新版本。

---

## 未來規劃

目前仍持續開發中，未來預計加入：

- 留言通知
- 社團行事曆(建置中)
- 社員專區
- 歷屆幹部資料 (NO data)
- 活動相簿 (NO money)
- 線上教材瀏覽
- 網站統計
- 更多互動功能

---

## 原始碼

網站垃圾屎山原始碼已公開於 GitHub：

::github{repo="chenbochao0807/clscweb"}


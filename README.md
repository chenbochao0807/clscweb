````md
# 壢中科研（CLSC）官方網站

![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38BDF8?logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-FFCA28?logo=firebase)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare)

> 壢中科研（CLSC）官方網站，基於 **Fuwari** 建置，使用 **Astro + TypeScript + Tailwind CSS** 開發，並整合 Firebase Authentication 與留言功能。

---

## ✨ 功能

- 📰 Markdown 文章系統
- 📖 社團介紹
- 👥 社員介紹
- 🏆 歷屆成果
- 📚 社課教材
- 🎓 年度幹部
- 🔗 友站連結
- 📝 留言板（Firebase）
- 🔐 Google / Email 登入
- 🌙 深色模式
- 🔍 SEO
- 📡 RSS Feed
- 🗺 Sitemap
- ☁️ Cloudflare Pages 自動部署

---

## 🛠 技術

- Astro
- TypeScript
- Tailwind CSS
- Firebase Authentication
- Firebase Firestore
- pnpm
- Cloudflare Pages
- GitHub Actions

---

## 📁 專案結構

```text
.
├── public/
│   ├── logo.png
│   └── banner.jpg
│
├── src/
│   ├── components/
│   ├── content/
│   │   ├── posts/
│   │   ├── members/
│   │   ├── officers/
│   │   ├── resources/
│   │   ├── achievements/
│   │   └── links/
│   │
│   ├── layouts/
│   ├── pages/
│   ├── lib/
│   │   └── firebase.ts
│   ├── config.ts
│   └── content.config.ts
│
├── package.json
├── astro.config.mjs
└── README.md
```

---

## 🚀 安裝

### Clone

```bash
git clone https://github.com/chenbochao0807/clscweb.git

cd clscweb/fuwari
```

### 安裝

```bash
pnpm install
```

### 本機執行

```bash
pnpm dev
```

開啟：

```
http://localhost:4321
```

---

## 📦 Build

```bash
pnpm build
```

預覽：

```bash
pnpm preview
```

---

## 🔥 Firebase

建立 `.env`：

```env
PUBLIC_FIREBASE_API_KEY=
PUBLIC_FIREBASE_AUTH_DOMAIN=
PUBLIC_FIREBASE_PROJECT_ID=
PUBLIC_FIREBASE_STORAGE_BUCKET=
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
PUBLIC_FIREBASE_APP_ID=
```

啟用：

- Authentication
  - Google
  - Email / Password

- Firestore Database

---

## ☁️ Cloudflare Pages

Build Command

```text
pnpm build
```

Output Directory

```text
dist
```

Node.js

```text
22
```

---

## 📖 新增文章

建立：

```text
src/content/posts/
```

範例：

```md
---
title: "文章標題"
published: 2026-07-09
description: "文章簡介"
tags:
  - CLSC
category: 公告
draft: false
---

文章內容...
```

---

## 👥 新增社員

放置於：

```text
src/content/members/
```

---

## 📚 新增教材

放置於：

```text
src/content/resources/
```

---

## 🏆 新增成果

放置於：

```text
src/content/achievements/
```

---

## 🔐 留言功能

登入方式：

- Google
- Email

功能：

- 新增留言
- 編輯自己的留言
- 刪除自己的留言
- 管理員刪除所有留言

---

## 📜 授權

本專案以 MIT License 發布。

---

## 🙌 致謝

- Fuwari
- Astro
- Tailwind CSS
- Firebase
- Cloudflare

---

# CLSC

**Computer & Learning Science Club**

桃園市立中壢高級中學科研社官方網站。
````

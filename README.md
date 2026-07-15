# 壢中科研CLSC website

![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38BDF8?logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-FFCA28?logo=firebase)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare)

壢中科研（Chung Li Science Club, CLSC）官網，基於 **Fuwari** 主題建置，採用 **Astro、TypeScript** 與 **Tailwind CSS** 開發，提供社團公告、教材、社員介紹、活動成果及學術資源等內容。

---

## 功能特色

- Markdown 內容管理
- 社團介紹
- 社員與幹部介紹
- 歷屆成果展示
- 社課教材與學習資源
- 合作夥伴
- 留言系統
- 深色模式
- 響應式設計
- RSS Feed
- Sitemap
- SEO 最佳化
- Cloudflare Pages 自動部署

---

## 技術架構

- Astro
- TypeScript
- Tailwind CSS
- pnpm
- Cloudflare Pages
- GitHub Actions

---

## Fast start

### 專案載入

```bash
git clone https://github.com/chenbochao0807/clscweb.git

cd clscweb/fuwari
```

### 安裝相依套件

```bash
pnpm install
```

### 啟動開發環境

```bash
pnpm dev
```

瀏覽器開啟：

```text
http://localhost:4321
```

---

## 建置專案

建立正式版本：

```bash
pnpm build
```

本機預覽：

```bash
pnpm preview
```

---


## Cloudflare Pages

### Build Command

```text
pnpm build
```

### Output Directory

```text
dist
```

### Node.js

```text
22
```

---

## 新增文章

文章放置於：

```text
src/content/posts/
```

範例：

```md
---
title: "一般"
published: 2026-07-11
description: "文章摘要"
tags:
  - CLSC
  - 亂搞
category: 公告
draft: false
---

文章內容...
```
hihi
---

## 新增苦力資料

放置於：

```text
src/content/members/
```

---

## 新增教材

放置於：

```text
src/content/resources/
```

---

## 新增成果

放置於：

```text
src/content/achievements/
```

---

## 留言系統

目前網站支援：

giscus

pls use Github to login
---

## 授權

 **MIT License**。

---

## 致謝

本專案使用以下：

- Fuwari
- Astro
- Tailwind CSS
- Cloudflare
- giscus

---

## 關於壢中科研

**Constantly Losing Single Cells(CLSC)**

國立中央大學附屬中壢高級中學科研社官網。

本網站提供社團公告、社員介紹、教材資源、活動紀錄及其他相關資訊及功能，作為社團對內交流與對外展示的平台，若對此有興趣的壢中學弟妹歡迎加入科研大家庭來幫助維護此專案。

# 壢中科研（CLSC）官方網站

<p align="center">

Modern official website for CLSC, built with Astro, TypeScript, Tailwind CSS, Firebase and Cloudflare.

</p>

---

## Website

https://clhs.dpdns.org

## Repository

https://github.com/chenbochao0807/clscweb

---

# Introduction

壢中科研（CLSC）官方網站。

本專案以 Astro 為核心，基於 Fuwari Theme 開發，整合 Firebase、Cloudflare Pages 與 GitHub，提供文章、教材、社員、幹部、成果展示及社團資訊等功能。

本專案遵循官方 API 與最佳實務，著重於：

- 高效能
- SEO
- 可維護性
- 響應式設計
- 資料安全
- 免費部署

---

# Features

## Content

- Markdown Blog
- 社團公告
- About
- 社員介紹
- 幹部介紹
- 社課教材
- 活動資訊
- 成果展示
- FAQ

## Community

- Firebase 留言系統
- Google Login
- Email Login
- 社群分享
- GitHub Repository Embed

## Search

- Pagefind 全文搜尋

## SEO

- Sitemap
- RSS Feed
- Open Graph
- Twitter Card
- JSON-LD
- Canonical URL

## Analytics

- Google Analytics 4
- GitHub Statistics

## UI

- Dark Mode
- Responsive Design
- Loading Animation
- Skeleton
- Pagination
- Share Buttons

---

# Tech Stack

## Frontend

- Astro 5
- TypeScript
- Tailwind CSS
- Fuwari Theme

## Backend

- Firebase Authentication
- Firestore
- Firebase Storage

## Deploy

- Cloudflare Pages
- Cloudflare CDN

## Development

- pnpm
- ESLint
- Prettier

---

# Architecture

```
Browser
      │
      ▼
Cloudflare CDN
      │
Cloudflare Pages
      │
Astro
      │
 ├── Markdown
 ├── Firebase Auth
 ├── Firestore
 ├── Storage
 └── Pagefind
```

---

# Project Structure

```
src

components
layouts
pages
content
posts
members
officers
resources
projects
events
config
hooks
services
repositories
stores
types
utils

public

functions

firebase
```

---

# Quick Start

Clone

```bash
git clone https://github.com/chenbochao0807/clscweb.git
```

Install

```bash
pnpm install
```

Run

```bash
pnpm dev
```

Build

```bash
pnpm build
```

Preview

```bash
pnpm preview
```

---

# Environment

建立 `.env`

```env
PUBLIC_FIREBASE_API_KEY=

PUBLIC_FIREBASE_AUTH_DOMAIN=

PUBLIC_FIREBASE_PROJECT_ID=

PUBLIC_FIREBASE_STORAGE_BUCKET=

PUBLIC_FIREBASE_APP_ID=

PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
```

---

# Deployment

Cloudflare Pages

Build

```
pnpm build
```

Output

```
dist
```

Node

```
22
```

---

# Roadmap

## Version 1

- [x] Blog
- [x] About
- [x] Members
- [x] Officers
- [x] Resources
- [x] Search
- [x] Share
- [x] Firebase Comment
- [x] Google Analytics

## Version 2

- [ ] Admin Dashboard
- [ ] Event Registration
- [ ] Firebase Storage
- [ ] RBAC
- [ ] Achievement System
- [ ] Member Center

## Version 3

- [ ] PWA
- [ ] Offline
- [ ] Notification
- [ ] Cloudflare Worker API
- [ ] AI Search

---

# License

MIT License

---

# Credits

- Astro
- Fuwari
- Tailwind CSS
- Firebase
- Cloudflare

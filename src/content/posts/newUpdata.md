---
title: 七月開發更新 網站穩定性與功能全面升級 以及開發者留言
published: 2026-07-17
description: 本次更新包含大量 Bug 修復、UI 優化、部署改善，以及多項新功能。
tags:
  - 開發日誌
  - 更新
  - Website
  - 必看
  - Fuwari
category: 開發日誌 必看
draft: false
---

# 七月開發更新
[![GitHub last commit](https://img.shields.io/github/last-commit/chenbochao0807/clscweb)](https://github.com/chenbochao0807/clscweb/commits)

> 持續改善使用體驗，打造更快速、更穩定、更完善的網站。

這段時間主要專注於 **修正已知的問題**、**改善網站穩定性**，並新增一些實用功能，讓整體操作更加流暢。
:::important
APP版開放下載
:::

iOS [點我下載](https://github.com/chenbochao0807/clscweb/releases/download/iOS/clsc.ipa)
Android [點我下載](https://github.com/chenbochao0807/clscweb/releases/download/iOS/clsc.apk)
---

![Development Banner](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUzNp5UCZlJnzSWgqOke0TmXx6YCNzqjJDr-3yHODKBJxTVCQ89rAA-vg&s=10)

---

# 本次更新重點

## 網站效能提升

這次更新針對網站整體效能進行優化，包括：

- 提升頁面載入速度
- 優化圖片載入效率
- 改善 Cloudflare 部署流程
- 提高網站穩定性
- 強化手機與平板裝置相容性
- 提升訪問速度和安全性
- 採用多項由[Cloudfare](https://www.cloudflare.com/zh-tw/)提供的安全保護和性能優化措施

---

# 功能更新

## 全新體驗

本次加入多項新功能：

- 增加下載中心
- Banner跑馬燈圖片、社團主要圖片、網站超連結檢視預覽圖片與簡介更新
- 整體配色改成科研CLSC主題配色
- 加入 ShareBottom 可分享網站文章到社群平台
- 加入留言系統，可使用Github登入
- 新增與完善友好社團連結和欄位
- APP版開放下載
- 新增Float浮動圖標跳轉
- 新增社員(總務)卡片以及社群連結
- 新增 [壽山高中資訊研究社](https://www.instagram.com/sscs_1st/) 社群頭像和Instagram 連結
- 新增 [內壢高中資訊研究社](https://www.instagram.com/nlcs.cbc/) 社群頭像和Instagram 連結
- 首頁版面重新調整
- 導覽列（Navbar）優化及添加 [Archive](https://clhs.dpdns.org/archive/)，方便快速瀏覽所有文章
- 改善文章閱讀體驗
- 更新 README 說明文件 並公開儲存庫以方便維護
- 新增專案贊助設定

---

# 問題修正

本次共修正多項已知問題。

### 已修復

- 修正 NLHS 相簿圖片無法正常顯示
- 修正文章頁面顯示異常
- 修正 Navbar 部分情況下錯位
- 修正 Pixel 字型載入問題和多項字體變更及優化
- 修正 Google Ads 設定
- 修正多項版面錯誤
- 修正不同裝置顯示問題
- 修正跑馬燈異常
- 修正部分工具異常顯示
- 去除學校圖片解決版權問題
- 修正其他零星 Bug

---

# 開發進度

| 項目 | 狀態 |
|------|------|
| 網站功能 |  持續增加 |
| Bug 修復 |  持續改善 |
| UI 優化 |  持續改善 |
| 響應式設計 |  完成 |
| Cloudflare 部署 |  完成 |
| 效能優化 |  持續改善 |

---

# GitHub 開發紀錄

最近完成了大量 Commit，包含：

- 多次 Bug 修正
- 網站功能更新
- UI 微調
- Cloudflare 自動部署
- Dependabot 套件更新
- 部署流程最佳化

我的8頁提交
![GitHub Actions](https://github.com/chenbochao0807/Photo/blob/main/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202026-07-17%20102634.png?raw=true)


[提交紀錄](https://github.com/chenbochao0807/clscweb/commits)
<div id="github-commits">載入中...</div>

<script>
  const repo = "chenbochao0807/clscweb";
  fetch(`https://api.github.com/repos/${repo}/commits?per_page=5`)
    .then(res => res.json())
    .then(data => {
      let html = "<ul>";
      data.forEach(item => {
        const msg = item.commit.message.split('\n')[0];
        const date = new Date(item.commit.author.date).toLocaleDateString();
        html += `<li><strong>${date}</strong> - <a href="${item.html_url}" target="_blank">${msg}</a></li>`;
      });
      html += "</ul>";
      document.getElementById("github-commits").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("github-commits").innerText = "無法載入 Commit 紀錄";
    });
</script>
---

# 更新前 vs 更新後

| 更新前 | 更新後 |
|---------|---------|
| 圖片偶爾無法載入 | 圖片正常顯示 |
| Navbar 偶爾錯位 | 導覽更穩定 |
| 字型顯示不一致 | 字型一致化 |
| 部分頁面速度較慢 | 載入速度提升 |

---

:::important[靠杯開發]

這段期間幾乎每天都有新的 Commit，從介面微調、Bug 修正，到部署流程改善，每一次更新都能讓網站變得更完善或更破，屎山專案。

每一個使用者回報的問題，我都會盡可能在下一個版本中修正，也感謝大家提供寶貴的建議。
希望以後科研社的學弟妹可以幫忙繼續經營維護這個專案，這是我和社團在高中時的心血和回憶，希望大家不要冷落他放棄他不維護、

在ai的，Vibe coding的時代我依然堅持手搓手作，因為這是我獨立完成的，才有成就感和溫度。
:::
---

# 聽首歌吧

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:18px;">

<iframe
src="https://www.youtube.com/embed/B7BxrAAXl94?list=RDB7BxrAAXl94"
style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
allowfullscreen>
</iframe>

</div>

---

# 網站連結
本網站可以作為台灣社團架設的簡易架構和模板，歡迎fork
##  Live Demo (Origin)

 https://fuwari.vercel.app/

##  正式網站

 https://clhs.dpdns.org/

---

# 未來計畫

未來將持續進行：

- 網站搜尋功能優化
- 更多動畫效果
- 行動裝置體驗改善
- 網站效能持續提升
- 更多實用工具與功能

---

# 感謝支持

謝謝每一位提供建議與回報問題的朋友、群友、網友。

未來也會持續更新網站內容，讓整體體驗越來越好。

敬請期待下一次更新！

---

:::tip[嚴肅支持]

加入壢中科研，就在8月新生動靜態展和專選表單，歡迎加入支持!!

:::

---

# 特別銘謝

感謝[Rabbit](https://www.instagram.com/rabbitsayhello/) 不時給予專業建議和指導，這網站的許多靈感和技術指導以及錯誤修正都是他指導的，大電神orz台灣最強獨立開發者的公車app

::github{repo="jnjkhjlkjhb8/wheres_the_car"}

還有賽活佛Github和Cloudflare
沒有他們我的網站不可能如此順利上線
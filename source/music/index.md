---
title: 音乐
date: 2026-11-04 10:00:00
comments: false
---

## 🎵 音乐播放器（预留位）

此处为音乐页骨架。开启网易云播放器步骤：

1. 获取你的网易云歌单 ID（playlist id）
2. 取消下方 HTML 注释块，填入歌单 ID
3. 若 meting 公共接口不可用，可自建 [meting-server](https://github.com/injahow/meting-api) 并替换 `server` 地址

<!-- 取消注释即可启用播放器（APlayer + MetingJS）：

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
<meting-js server="netease" type="playlist" id="你的歌单ID" fixed="false" loop="all" order="list" volume="0.7" list-folded="true" list-max-height="400px"></meting-js>

-->

| 参数 | 说明 |
| --- | --- |
| server | netease / tencent / kugou / mxdr / youtube |
| type | song / playlist / album / artist |
| id | 对应资源 ID |
| fixed | 是否吸底固定播放 |

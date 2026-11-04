---
title: Hello World —— 博客功能自检
date: 2026-11-04 10:30:00
updated: 2026-11-04 10:30:00
tags:
  - Hexo
  - Butterfly
categories:
  - 博客搭建
mathjax: true
cover: /images/sample-upload.svg
---

欢迎来到新博客！本文用于一次性验证全部渲染链路：代码高亮、数学公式、三种图片来源与灯箱查看。

## 代码块

```python
def egcd(a: int, b: int):
    if b == 0:
        return a, 1, 0
    g, x, y = egcd(b, a % b)
    return g, y, x - (a // b) * y

print(egcd(240, 46))
```

## 数学公式

行内公式 $e = \sum_{i=0}^{n} a_i p^i$，以及块级公式：

$$
\varphi(n) = (p-1)(q-1), \quad d \equiv e^{-1} \pmod{\varphi(n)}
$$

## 图片来源一：Markdown 外链图床

![外链图床示例](https://picsum.photos/seed/fishfish-blog/800/450)

## 图片来源二：在线编辑粘贴上传（/images/ 媒体库）

![本地上传示例](/images/sample-upload.svg)

## 图片来源三：文章资源文件夹（相对路径）

![资源文件夹示例](asset-sample.svg)

> 以上任意图片点击均可灯箱放大查看。

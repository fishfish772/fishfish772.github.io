/**
 * Decap CMS 数据兼容层
 *
 * 背景：Decap 的 file+list 组件要求 yml 顶层是对象（如 {items: [...]}），
 * 而 Butterfly 原生 shuoshuo/link 布局要求 site.data.shuoshuo / site.data.link
 * 直接是数组。此脚本在模板渲染前把包装键解包。
 *
 * 新增同类数据文件时，在 UNWRAP 表里加一行即可。
 */
'use strict';

const UNWRAP = {
  shuoshuo: 'items',
  link: 'groups',
};

hexo.extend.filter.register('template_locals', (locals) => {
  const data = locals.site && locals.site.data;
  if (!data) return locals;

  for (const [key, wrap] of Object.entries(UNWRAP)) {
    const val = data[key];
    if (val && Array.isArray(val[wrap])) {
      data[key] = val[wrap];
    }
  }
  return locals;
});

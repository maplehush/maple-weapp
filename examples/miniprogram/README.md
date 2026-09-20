# Maple Weapp 示例小程序

示例项目只负责展示和调试组件，组件源码统一来自仓库根目录的 `packages/`。

## 初始化

小程序的 `package.json` 与 `node_modules` 放在 `miniprogramRoot` 内，这是微信开发者工具构建 npm 最稳定的目录结构。

进入小程序源码目录：

```bash
cd examples/miniprogram/miniprogram
npm install
```

然后用微信开发者工具打开 `examples/miniprogram`，执行「工具 → 构建 npm」。构建结果会写入 `miniprogram/miniprogram_npm`，示例页会从 `/miniprogram_npm/maple-weapp` 加载组件。

本地开发时，`maple-weapp` 使用仓库根目录的 `file:../../../` 依赖，因此不需要先发布到 npm。

## 页面

- 首页：组件卡片列表，点击进入组件详情与使用说明。
- 组件详情：展示组件简介、Props 和最小使用示例。

示例不连接后端接口。

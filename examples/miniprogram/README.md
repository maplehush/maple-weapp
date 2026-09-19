# Maple Weapp 示例小程序

示例项目只负责展示和调试组件，组件源码统一来自仓库根目录的 `packages/`。

## 初始化

在本目录执行：

```bash
npm install
```

然后用微信开发者工具打开 `examples/miniprogram`，执行「构建 npm」。构建完成后，示例页会从 `miniprogram_npm/maple-weapp` 加载组件。

## 页面

- 首页：组件卡片列表，点击进入组件详情与使用说明。
- 个人中心：静态项目介绍、版本和组件信息。
- 组件详情：展示组件简介、Props 和最小使用示例。

示例不连接后端接口。

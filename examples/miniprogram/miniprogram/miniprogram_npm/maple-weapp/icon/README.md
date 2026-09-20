# Icon

基础图标组件。内置图标使用随包发布的 iconfont 渲染，也可以直接传入网络地址或小程序本地图片路径。

组件只使用 Skyline 与 WebView 均支持的基础能力，并在加载字体时显式声明两个渲染范围。由于内嵌 Data URL 字体及其 Skyline 作用域依赖 `wx.loadFontFace` 的新能力，双渲染器支持要求微信基础库 `3.7.9` 或更高版本。

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | string | `''` | 内置图标名称、图片 URL 或小程序本地图片路径 |
| size | number | `32` | 图标尺寸，单位 rpx |
| color | string | `var(--m-color-primary)` | 内置字体图标颜色，支持 CSS 颜色值或设计 Token |
| mode | string | `aspectFit` | 图片图标的裁剪模式，与小程序 `image` 组件一致 |

## Events

- `click`：点击图标时触发。

## 内置图标

当前字体包含：

- `chevron-left`
- `chevron-right`
- `chevron-up`
- `chevron-down`
- `arrow-left`
- `arrow-right`
- `plus`
- `minus`
- `close`
- `check`
- `search`
- `edit`
- `delete`
- `more`
- `home`
- `user`

## 使用

```xml
<m-icon name="search" />
<m-icon name="check" size="32" color="var(--m-color-success)" />
<m-icon name="https://example.com/icons/github.png" size="48" />
<m-icon name="/assets/icons/custom.png" size="48" mode="aspectFit" />
<m-icon name="assets/icons/custom.png" size="48" />
```

Icon 默认使用 `--m-color-primary`，主题切换时可以通过覆盖 Design Token 统一调整。`color` 只对内置字体图标生效，普通 PNG、JPG 等图片不会自动换色。

内置字形来自 [TDesign Icons](https://github.com/Tencent/tdesign-icons)（MIT License），发布时仅保留本组件所需的基础字形子集。

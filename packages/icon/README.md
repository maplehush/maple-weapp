# Icon

基础图标组件，使用内置 iconfont 渲染。

## Props

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | string | `''` | 图标名称 |
| size | number | `32` | 图标尺寸，单位 rpx |
| color | string | `var(--m-color-primary)` | 图标颜色，支持 CSS 颜色值或设计 Token |

## Events

- `click`：点击图标时触发。

## 内置图标

当前字体包含：

- `chevron-right`
- `check`
- `close`
- `plus`
- `edit`
- `chevron-left`
- `search`

## 使用

```xml
<m-icon name="search" />
<m-icon name="check" size="32" color="var(--m-color-success)" />
```

Icon 默认使用 `--m-color-primary`，主题切换时可以通过覆盖 Design Token 统一调整。

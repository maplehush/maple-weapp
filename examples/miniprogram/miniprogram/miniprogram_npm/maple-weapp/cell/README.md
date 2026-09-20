# Cell

Cell 是一个用于设置页、列表页和信息展示场景的基础单元格组件。

## 特性

- 支持标题、辅助说明和右侧值展示
- 支持可点击状态和点击事件
- 支持禁用状态，禁用时不会触发 `click`
- 支持右侧箭头
- 支持底部分隔线开关
- 长文本自动省略，避免撑破布局

## 使用

在页面的 `json` 中注册组件：

```json
{
  "usingComponents": {
    "m-cell": "/packages/cell/index"
  }
}
```

在 WXML 中使用：

```xml
<m-cell
  title="账号与安全"
  label="管理账号信息"
  value="查看"
  arrow
  clickable
  bind:click="handleCellClick"
/>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `title` | String | `''` | 主标题 |
| `label` | String | `''` | 辅助说明；没有标题时会自动取消顶部间距 |
| `value` | String | `''` | 右侧展示值，过长时省略 |
| `clickable` | Boolean | `false` | 是否允许点击并触发 `click` 事件 |
| `disabled` | Boolean | `false` | 是否禁用；禁用后不会触发点击事件 |
| `border` | Boolean | `true` | 是否显示底部分隔线 |
| `arrow` | Boolean | `false` | 是否显示右侧箭头 |

## 事件

### click

当 `clickable` 为 `true` 且 `disabled` 为 `false` 时触发。

```xml
<m-cell
  title="设置"
  clickable
  bind:click="handleCellClick"
/>
```

```ts
handleCellClick() {
  // 处理点击
}
```

## 设计说明

Cell 默认保持轻量的展示型定位。只有显式设置 `clickable` 时才提供按压反馈；设置 `disabled` 后会同时取消可点击样式和点击事件。

组件内部对左右区域使用 flex 布局，并限制标题和值的溢出，以保证长文本场景下的布局稳定性。

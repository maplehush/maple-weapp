# Button

轻量级微信小程序 Button 组件。

## 特性

- 支持 `default`、`primary`、`danger` 三种按钮类型
- 支持 `small`、`medium`、`large` 三种尺寸
- 支持禁用、加载中状态
- 支持 `block` 全宽布局
- 使用原生微信小程序组件与 TypeScript 实现

## 使用

```json
{
  "usingComponents": {
    "m-button": "/packages/button/index"
  }
}
```

```xml
<m-button type="primary" size="medium" bind:click="handleClick">
  确定
</m-button>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `type` | String | `default` | `default` / `primary` / `danger` |
| `size` | String | `medium` | `small` / `medium` / `large` |
| `disabled` | Boolean | `false` | 是否禁用 |
| `loading` | Boolean | `false` | 是否显示加载状态，并阻止点击 |
| `block` | Boolean | `false` | 是否占满父容器宽度 |

## 事件

### click

按钮可点击时触发。按钮处于 `disabled` 或 `loading` 状态时不会触发。

## 设计说明

按钮交互优化包括更清晰的按压反馈、更稳定的内容居中、加载状态下的点击保护，以及统一的圆角、字号和间距层级。
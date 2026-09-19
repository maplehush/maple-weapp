# Checkbox

轻量级微信小程序 Checkbox 组件。

## 特性

- 支持选中、未选中状态
- 支持半选（indeterminate）
- 支持禁用状态
- 支持自定义选中颜色
- 使用原生微信小程序组件与 TypeScript 实现

## 使用

```json
{
  "usingComponents": {
    "m-checkbox": "/packages/checkbox/index"
  }
}
```

```xml
<m-checkbox checked bind:change="handleChange">
  同意协议
</m-checkbox>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | Boolean | false | 是否选中 |
| disabled | Boolean | false | 是否禁用 |
| indeterminate | Boolean | false | 是否显示半选状态 |
| activeColor | String | var(--m-color-primary) | 选中及半选颜色 |

## 事件

### change

点击后触发，事件参数为 { checked: boolean }。禁用状态不会触发。

半选状态点击后会变为未选中，并清除 indeterminate。

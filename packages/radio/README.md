# Radio

单选组件，提供选中、未选中、禁用和自定义选中颜色状态。

## 使用

```xml
<m-radio>选项</m-radio>
<m-radio checked>已选中</m-radio>
<m-radio disabled>禁用</m-radio>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | Boolean | false | 是否选中 |
| disabled | Boolean | false | 是否禁用 |
| activeColor | String | var(--m-color-primary) | 选中状态颜色 |

## 事件

### change

点击未选中的 Radio 后触发：

```js
{ checked: true }
```

已选中的 Radio 再次点击不会取消选中。多个 Radio 的互斥管理建议由上层业务或后续 RadioGroup 组件负责。

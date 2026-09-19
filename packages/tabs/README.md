# Tabs

标签页组件，用于在多个内容视图之间切换。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| active | Number | 0 | 当前激活标签索引 |
| tabs | Array | [] | 标签数据，格式为 `{ title: string }` |
| sticky | Boolean | false | 是否吸顶 |

## 事件

- `change`：切换标签时触发，detail 为 `{ index }`

## 使用

> 当前版本负责标签导航和内容容器，内容区域通过 slot 自行组织；tabs 数据由页面传入。

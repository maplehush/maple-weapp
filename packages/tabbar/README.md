# Tabbar

底部标签栏组件，用于页面级主导航。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | Array | [] | 标签数据，格式为 `{ label, icon?, badge? }` |
| active | Number | 0 | 当前激活项索引 |
| fixed | Boolean | true | 是否固定在底部 |
| border | Boolean | true | 是否显示顶部边框 |

## 事件

- `change`：切换标签时触发，detail 为 `{ index }`

Tabbar 负责导航展示和切换状态；页面切换逻辑由上层处理。

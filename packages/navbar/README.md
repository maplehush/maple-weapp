# Navbar

顶部导航栏组件，用于展示页面标题、返回操作以及左右扩展区域。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | '' | 标题 |
| backable | Boolean | false | 是否显示返回按钮 |
| fixed | Boolean | false | 是否固定在顶部 |
| border | Boolean | true | 是否显示底部边框 |

## 插槽

- left：左侧区域
- 默认 slot：标题区域补充内容
- right：右侧操作区域

## 事件

- `back`：点击返回按钮时触发

# Card

卡片容器组件，用于承载结构化内容、摘要信息和操作区域。

## 使用

<m-card title="账户信息" subtitle="基础资料">
  <view>卡片内容</view>
</m-card>

也可以通过 `extra` slot 放置右侧操作。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | String | '' | 卡片标题 |
| subtitle | String | '' | 卡片副标题 |
| bordered | Boolean | true | 是否显示边框 |
| shadow | Boolean | false | 是否显示阴影 |

## 插槽

- 默认 slot：卡片主体
- extra：标题右侧操作区域

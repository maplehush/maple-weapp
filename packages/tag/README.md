# Tag

标签组件，用于展示分类、状态等轻量信息。

## 使用

```xml
<m-tag>默认</m-tag>
<m-tag type="primary">主要</m-tag>
<m-tag type="success">成功</m-tag>
<m-tag type="warning">警告</m-tag>
<m-tag type="danger">危险</m-tag>
<m-tag plain closable>可关闭</m-tag>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | String | default | default / primary / success / warning / danger |
| size | String | medium | small / medium / large |
| closable | Boolean | false | 是否显示关闭按钮 |
| disabled | Boolean | false | 是否禁用关闭操作 |
| plain | Boolean | false | 是否使用描边样式 |

## 事件

### close

点击关闭按钮时触发。禁用状态下不会触发。

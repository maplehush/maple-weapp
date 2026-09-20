# Toast

轻量级全局提示组件，用于短时间展示操作结果或状态信息。

当前版本采用组件方式控制显示，适合页面级集成；后续可以在此基础上增加全局 Toast 服务。

## 使用

```xml
<m-toast visible="{{toastVisible}}" message="操作成功" type="success" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| visible | Boolean | false | 是否显示 |
| message | String | '' | 提示内容 |
| type | String | default | default / primary / success / warning / danger |
| duration | Number | 2000 | 自动关闭时间，单位 ms；小于等于 0 时不自动关闭 |

## 事件

### close

Toast 自动关闭后触发。

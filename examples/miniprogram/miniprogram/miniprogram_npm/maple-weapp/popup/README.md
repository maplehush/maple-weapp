# Popup

弹出层组件，用于承载菜单、表单、操作面板等临时内容。

当前版本采用组件方式控制显示，不提供全局 Popup 服务。

## 使用

<m-popup visible="{{visible}}" position="bottom">
  <view>Popup 内容</view>
</m-popup>

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| visible | Boolean | false | 是否显示 |
| position | String | bottom | 弹出位置：top / bottom / left / right / center |
| closeable | Boolean | false | 是否显示关闭按钮 |
| closeOnMaskTap | Boolean | true | 点击遮罩是否关闭 |
| round | Boolean | true | 是否使用圆角 |

## 事件

- close：弹出层关闭

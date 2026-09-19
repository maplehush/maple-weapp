# Dialog

对话框组件，用于确认、提醒和承载需要用户决策的内容。

当前版本采用组件方式控制显示，不提供全局 Dialog 服务。

## 使用

<m-dialog visible="{{visible}}" title="确认删除" content="确定继续吗？" bindconfirm="onConfirm" bindcancel="onCancel" />

也可以通过 slot 承载自定义内容。

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| visible | Boolean | false | 是否显示 |
| title | String | '' | 标题 |
| content | String | '' | 描述内容 |
| showCancel | Boolean | true | 是否显示取消按钮 |
| confirmText | String | 确定 | 确认按钮文字 |
| cancelText | String | 取消 | 取消按钮文字 |
| closeOnMaskTap | Boolean | true | 点击遮罩是否关闭 |

## 事件

- confirm：点击确认
- cancel：点击取消
- close：对话框关闭

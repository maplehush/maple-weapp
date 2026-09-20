# ActionSheet

底部操作菜单，用于展示一组可选择的操作。

当前版本采用组件方式控制显示，不提供全局 ActionSheet 服务。

## 使用

<m-action-sheet
  visible="{{visible}}"
  actions="{{actions}}"
  bindselect="onSelect"
  bindcancel="onCancel"
/>

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| visible | Boolean | false | 是否显示 |
| actions | Array | [] | 操作项列表，每项至少包含 name，可选 subname / disabled |
| cancelText | String | 取消 | 取消按钮文字；传空字符串可隐藏 |
| closeOnMaskTap | Boolean | true | 点击遮罩是否关闭 |

## action 数据结构

```ts
[
  { name: '分享' },
  { name: '编辑', subname: '修改内容' },
  { name: '删除', disabled: true }
]
```

## 插槽

- title：顶部说明区域，可选

## 事件

- select：选择操作，detail 为 `{ index, action }`
- cancel：点击取消
- close：弹出层关闭

# Textarea

Textarea 是用于多行文本输入的基础表单组件。

## 特性

- 支持受控 value
- 支持 placeholder
- 支持禁用和只读状态
- 支持最大长度限制
- 支持可选的一键清空
- 支持可选的字数统计

## 使用

在页面的 json 中注册组件：

~~~json
{
  "usingComponents": {
    "m-textarea": "/packages/textarea/index"
  }
}
~~~

~~~xml
<m-textarea
  placeholder="请输入内容"
  maxlength="500"
  show-count
  clearable
  bind:input="handleInput"
  bind:clear="handleClear"
/>
~~~

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | String | '' | 输入值 |
| placeholder | String | '' | 占位文本 |
| disabled | Boolean | false | 是否禁用输入 |
| readonly | Boolean | false | 是否只读 |
| maxlength | Number | 500 | 最大输入长度 |
| clearable | Boolean | false | 有值时显示清空按钮 |
| showCount | Boolean | false | 是否显示当前字数/最大长度 |

## 事件

### input

用户输入时触发，事件参数为 `{ value: string }`。

### blur

失去焦点时触发，事件参数为 `{ value: string }`。

### clear

点击清空按钮后触发，事件参数为 `{ value: '' }`。

## 设计说明

Textarea 与 Input 使用相同的表单状态模型和 Design Token。默认保持固定高度，先提供稳定的多行输入基础能力；后续如有需要再扩展自适应高度等能力。

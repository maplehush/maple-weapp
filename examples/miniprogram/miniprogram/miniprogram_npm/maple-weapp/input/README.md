# Input

Input 是用于单行文本输入的基础表单组件。

## 特性

- 支持受控 value
- 支持 placeholder
- 支持禁用和只读状态
- 支持原生 text、number、idcard、digit 等输入类型
- 支持最大长度限制
- 支持可选的一键清空

## 使用

在页面的 json 中注册组件：

~~~json
{
  "usingComponents": {
    "m-input": "/packages/input/index"
  }
}
~~~

~~~xml
<m-input
  value="{{value}}"
  placeholder="请输入内容"
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
| readonly | Boolean | false | 是否只读；允许聚焦但不会更新值 |
| type | String | text | 原生输入类型 |
| maxlength | Number | 140 | 最大输入长度 |
| clearable | Boolean | false | 有值时显示清空按钮 |

## 事件

### input
用户输入时触发，事件参数为 `{ value: string }`。

### blur
失去焦点时触发，事件参数为 `{ value: string }`。

### clear
点击清空按钮后触发，事件参数为 `{ value: '' }`。

## 设计说明

Input 保持单行、轻量的表单控件定位。输入框使用共享 Design Token，聚焦时使用品牌色边框；禁用和只读状态分别提供不可编辑反馈。

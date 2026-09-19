# Switch

Switch 是用于二值状态切换的基础组件。

## 使用

~~~json
{
  "usingComponents": {
    "m-switch": "/packages/switch/index"
  }
}
~~~

~~~xml
<m-switch checked bind:change="handleChange" />
~~~

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| checked | Boolean | false | 是否开启 |
| disabled | Boolean | false | 是否禁用 |
| activeColor | String | var(--m-color-primary) | 开启状态颜色 |
| inactiveColor | String | var(--m-bg-color-secondary) | 关闭状态颜色 |

## 事件

### change

点击切换后触发，事件参数为 `{ checked: boolean }`。

## 设计说明

Switch 保持轻量的二值状态控件定位。状态变化由组件内部维护，并通过 change 事件向外同步；禁用状态不会触发切换。

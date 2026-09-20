# Loading

轻量级加载状态组件，用于表示内容正在加载。

## 使用

```json
{
  "usingComponents": {
    "m-loading": "/miniprogram_npm/maple-weapp/loading/index"
  }
}
```

```xml
<m-loading size="32" text="加载中" />
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| size | Number | 32 | 加载指示器尺寸，单位 rpx |
| color | String | var(--m-color-primary) | 指示器颜色 |
| text | String | '' | 可选提示文字 |

Loading 使用共享 Design Token 作为默认品牌色。

# Styles

Maple Weapp 的基础 Design Token，供所有组件共享。

## 使用

在小程序全局样式或页面样式中引入：

```css
@import "path/to/maple-weapp/packages/styles/variables.wxss";
```

组件内部优先使用这些变量，业务侧可以通过覆盖 `page` 上的 CSS 变量进行主题定制。

## Token 分类

- **Brand**：主色、成功、警告、危险
- **Text**：主要、次要、占位、禁用、反色文字
- **Background**：页面、容器、次级、禁用背景
- **Border**：通用边框色
- **Interaction**：禁用态、激活态
- **Radius**：小、中、大、圆形
- **Font**：字号、字重、行高
- **Spacing**：统一间距
- **Component dimensions**：Button、Cell 的基础尺寸

## 设计原则

1. 组件样式不要重复硬编码基础颜色、字号和间距。
2. 新组件优先复用已有 Token；只有真正组件特有的尺寸才新增 Token。
3. Token 命名保持 `--m-*` 前缀，避免污染业务样式。
4. 主题扩展优先覆盖 Token，而不是修改组件源码。

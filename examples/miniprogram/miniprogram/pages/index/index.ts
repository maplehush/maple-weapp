Component({
  data: {
    components: [
      { id: 'button', name: 'Button', title: '按钮', description: '基础按钮，支持类型、尺寸、禁用、加载和通栏状态。' },
      { id: 'cell', name: 'Cell', title: '单元格', description: '常用于设置列表、菜单和信息展示。' },
      { id: 'icon', name: 'Icon', title: '图标', description: '内置常用图标字体，支持尺寸、颜色和点击事件。' },
      { id: 'loading', name: 'Loading', title: '加载', description: '用于表示内容加载中的状态。' },
      { id: 'input', name: 'Input', title: '输入框', description: '单行文本输入，支持清除、只读和禁用。' },
      { id: 'textarea', name: 'Textarea', title: '多行输入', description: '多行文本输入，支持字数统计和清除。' },
      { id: 'switch', name: 'Switch', title: '开关', description: '用于布尔状态切换。' },
      { id: 'checkbox', name: 'Checkbox', title: '复选框', description: '支持选中、禁用和半选状态。' },
      { id: 'radio', name: 'Radio', title: '单选框', description: '单个单选状态组件，组合逻辑由业务层控制。' },
      { id: 'tag', name: 'Tag', title: '标签', description: '用于状态、分类和轻量信息标记。' },
      { id: 'toast', name: 'Toast', title: '轻提示', description: '用于展示短时的状态反馈。' },
      { id: 'dialog', name: 'Dialog', title: '对话框', description: '用于确认、提示等模态场景。' },
      { id: 'popup', name: 'Popup', title: '弹出层', description: '支持上下左右和居中弹出。' },
      { id: 'action-sheet', name: 'ActionSheet', title: '动作面板', description: '用于展示一组可选择的操作。' },
      { id: 'card', name: 'Card', title: '卡片', description: '用于承载有边界的内容区块。' },
      { id: 'list', name: 'List', title: '列表', description: '列表容器，通常与 Cell 配合使用。' },
      { id: 'tabs', name: 'Tabs', title: '标签页', description: '用于在多个内容视图之间切换。' },
      { id: 'navbar', name: 'Navbar', title: '导航栏', description: '提供标题、返回和左右插槽。' },
      { id: 'tabbar', name: 'Tabbar', title: '底部导航', description: '用于页面级的底部导航切换。' }
    ],
    tabbarItems: [
      { label: '首页', icon: 'check' },
      { label: '我的', icon: 'edit' }
    ],
    tabbarActive: 0
  },
  methods: {
    onComponentTap(event: any) {
      const id = event.currentTarget.dataset.id
      wx.navigateTo({ url: '/pages/detail/index?id=' + id })
    },
    onChangeTabbar(event: any) {
      const index = Number(event.detail.index)
      this.setData({ tabbarActive: index })
      if (index === 1) {
        wx.navigateTo({ url: '/pages/profile/index' })
      }
    }
  }
})

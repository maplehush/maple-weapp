const componentDocs: Record<string, any> = {
  button: { name: 'Button', title: '按钮', description: '基础按钮，支持类型、尺寸、禁用、加载和通栏状态。', props: ['type: default | primary | danger', 'size: small | medium | large', 'disabled: boolean', 'loading: boolean', 'block: boolean'], usage: '<m-button type="primary">确定</m-button>' },
  cell: { name: 'Cell', title: '单元格', description: '常用于设置列表、菜单和信息展示。', props: ['title: string', 'label: string', 'value: string', 'clickable: boolean', 'disabled: boolean', 'border: boolean', 'arrow: boolean'], usage: '<m-cell title="账号与安全" value="已开启" arrow />' },
  icon: { name: 'Icon', title: '图标', description: '内置常用图标字体，支持尺寸、颜色和点击事件。', props: ['name: string', 'size: number', 'color: string'], usage: '<m-icon name="check" size="40" />' },
  loading: { name: 'Loading', title: '加载', description: '用于表示内容加载中的状态。', props: ['size: number', 'color: string', 'text: string'], usage: '<m-loading size="40" text="加载中" />' },
  input: { name: 'Input', title: '输入框', description: '单行文本输入，支持清除、只读和禁用。', props: ['value: string', 'placeholder: string', 'disabled: boolean', 'readonly: boolean', 'type: string', 'maxlength: number', 'clearable: boolean'], usage: '<m-input placeholder="请输入内容" clearable />' },
  textarea: { name: 'Textarea', title: '多行输入', description: '多行文本输入，支持字数统计和清除。', props: ['value: string', 'placeholder: string', 'disabled: boolean', 'readonly: boolean', 'maxlength: number', 'clearable: boolean', 'showCount: boolean'], usage: '<m-textarea placeholder="请输入多行内容" show-count clearable />' },
  switch: { name: 'Switch', title: '开关', description: '用于布尔状态切换。', props: ['checked: boolean', 'disabled: boolean', 'activeColor: string', 'inactiveColor: string'], usage: '<m-switch checked bindchange="onChange" />' },
  checkbox: { name: 'Checkbox', title: '复选框', description: '支持选中、禁用和半选状态。', props: ['checked: boolean', 'disabled: boolean', 'indeterminate: boolean', 'activeColor: string'], usage: '<m-checkbox checked>已选中</m-checkbox>' },
  radio: { name: 'Radio', title: '单选框', description: '单个单选状态组件，组合逻辑由业务层控制。', props: ['checked: boolean', 'disabled: boolean', 'activeColor: string'], usage: '<m-radio checked>选项 A</m-radio>' },
  tag: { name: 'Tag', title: '标签', description: '用于状态、分类和轻量信息标记。', props: ['type: default | primary | success | warning | danger', 'size: small | medium | large', 'closable: boolean', 'disabled: boolean', 'plain: boolean'], usage: '<m-tag type="success">成功</m-tag>' },
  toast: { name: 'Toast', title: '轻提示', description: '用于展示短时的状态反馈。', props: ['visible: boolean', 'message: string', 'type: default | primary | success | warning | danger', 'duration: number'], usage: '<m-toast visible message="保存成功" type="success" />' },
  dialog: { name: 'Dialog', title: '对话框', description: '用于确认、提示等模态场景。', props: ['visible: boolean', 'title: string', 'content: string', 'showCancel: boolean', 'confirmText: string', 'cancelText: string', 'closeOnMaskTap: boolean'], usage: '<m-dialog visible title="提示" content="确认继续吗？" />' },
  popup: { name: 'Popup', title: '弹出层', description: '支持上下左右和居中弹出。', props: ['visible: boolean', 'position: top | bottom | left | right | center', 'closeable: boolean', 'closeOnMaskTap: boolean', 'round: boolean'], usage: '<m-popup visible position="bottom" closeable />' },
  'action-sheet': { name: 'ActionSheet', title: '动作面板', description: '用于展示一组可选择的操作。', props: ['visible: boolean', 'actions: Action[]', 'cancelText: string', 'closeOnMaskTap: boolean'], usage: '<m-action-sheet visible actions="{{actions}}" />' },
  card: { name: 'Card', title: '卡片', description: '用于承载有边界的内容区块。', props: ['title: string', 'subtitle: string', 'bordered: boolean', 'shadow: boolean'], usage: '<m-card title="账户信息">内容</m-card>' },
  list: { name: 'List', title: '列表', description: '列表容器，通常与 Cell 配合使用。', props: ['bordered: boolean', 'inset: boolean'], usage: '<m-list bordered><m-cell title="设置" /></m-list>' },
  tabs: { name: 'Tabs', title: '标签页', description: '用于在多个内容视图之间切换。', props: ['active: number', 'tabs: Tab[]', 'sticky: boolean'], usage: '<m-tabs tabs="{{tabs}}" active="{{active}}" bindchange="onChange" />' },
  navbar: { name: 'Navbar', title: '导航栏', description: '提供标题、返回和左右插槽。', props: ['title: string', 'backable: boolean', 'fixed: boolean', 'border: boolean'], usage: '<m-navbar title="页面标题" backable />' },
  tabbar: { name: 'Tabbar', title: '底部导航', description: '用于页面级的底部导航切换。', props: ['active: number', 'items: TabBarItem[]', 'fixed: boolean', 'border: boolean'], usage: '<m-tabbar items="{{items}}" active="{{active}}" />' }
}

Component({
  data: { doc: null as any },
  onLoad(options: { id?: string }) {
    const doc = options.id ? componentDocs[options.id] : null
    this.setData({ doc })
    if (doc) wx.setNavigationBarTitle({ title: doc.name })
  },
  methods: {
    onBack() {
      wx.navigateBack()
    }
  }
})

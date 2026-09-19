Component({
  data: {
    visible: false,
    actions: [
      { name: '分享' },
      { name: '编辑', subname: '修改内容' },
      { name: '删除', disabled: true }
    ]
  },
  methods: {
    onShow() { this.setData({ visible: true }) },
    onSelect(event: any) {
      this.setData({ visible: false })
      wx.showToast({ title: event.detail.action.name, icon: 'none' })
    },
    onCancel() { this.setData({ visible: false }) },
    onClose() { this.setData({ visible: false }) }
  }
})

Component({
  data: { visible: true },
  methods: {
    onShow() { this.setData({ visible: true }) },
    onClose() { this.setData({ visible: false }) },
    onConfirm() { this.setData({ visible: false }) },
    onCancel() { this.setData({ visible: false }) }
  }
})

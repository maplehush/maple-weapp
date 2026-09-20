Component({
  properties: {
    visible: { type: Boolean, value: false },
    position: { type: String, value: 'bottom' },
    closeable: { type: Boolean, value: false },
    closeOnMaskTap: { type: Boolean, value: true },
    round: { type: Boolean, value: true }
  },
  methods: {
    onMaskTap() {
      if (this.data.closeOnMaskTap) this.close()
    },
    onClose() {
      this.close()
    },
    close() {
      this.setData({ visible: false })
      this.triggerEvent('close')
    },
    noop() {}
  }
})

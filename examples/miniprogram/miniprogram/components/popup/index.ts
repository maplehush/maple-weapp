Component({
  data: { visible: false },
  methods: {
    onShow() { this.setData({ visible: true }) },
    onClose() { this.setData({ visible: false }) }
  }
})

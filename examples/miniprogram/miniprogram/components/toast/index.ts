Component({
  data: {
    visible: true
  },
  methods: {
    onShow() {
      this.setData({ visible: true })
    },
    onClose() {
      this.setData({ visible: false })
    }
  }
})

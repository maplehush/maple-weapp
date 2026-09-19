Component({
  properties: {
    title: { type: String, value: '' },
    backable: { type: Boolean, value: false },
    fixed: { type: Boolean, value: false },
    border: { type: Boolean, value: true }
  },
  methods: {
    onBack() {
      this.triggerEvent('back')
    }
  }
})

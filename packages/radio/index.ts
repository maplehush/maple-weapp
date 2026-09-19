Component({
  properties: {
    checked: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    activeColor: { type: String, value: 'var(--m-color-primary)' }
  },

  methods: {
    onTap() {
      if (this.data.disabled || this.data.checked) return

      this.setData({ checked: true })
      this.triggerEvent('change', { checked: true })
    }
  }
})

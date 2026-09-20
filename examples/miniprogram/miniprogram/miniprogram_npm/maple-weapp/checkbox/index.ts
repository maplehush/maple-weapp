Component({
  properties: {
    checked: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    indeterminate: { type: Boolean, value: false },
    activeColor: { type: String, value: 'var(--m-color-primary)' }
  },
  methods: {
    onTap() {
      if (this.data.disabled) return
      const checked = this.data.indeterminate ? false : !this.data.checked
      this.setData({ checked, indeterminate: false })
      this.triggerEvent('change', { checked })
    }
  }
})

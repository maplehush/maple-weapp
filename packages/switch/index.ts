Component({
  properties: {
    checked: { type: Boolean, value: false },
    disabled: { type: Boolean, value: false },
    activeColor: { type: String, value: 'var(--m-color-primary)' },
    inactiveColor: { type: String, value: 'var(--m-bg-color-secondary)' }
  },

  methods: {
    onTap() {
      if (this.data.disabled) return

      const checked = !this.data.checked
      this.setData({ checked })
      this.triggerEvent('change', { checked })
    }
  }
})

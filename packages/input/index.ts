Component({
  properties: {
    value: { type: String, value: '' },
    placeholder: { type: String, value: '' },
    disabled: { type: Boolean, value: false },
    readonly: { type: Boolean, value: false },
    type: { type: String, value: 'text' },
    maxlength: { type: Number, value: 140 },
    clearable: { type: Boolean, value: false }
  },

  methods: {
    onInput(event: WechatMiniprogram.Input) {
      const value = event.detail.value

      if (this.data.readonly) {
        this.setData({ value: this.data.value })
        return
      }

      this.setData({ value })
      this.triggerEvent('input', { value })
    },

    onBlur(event: WechatMiniprogram.InputBlur) {
      this.triggerEvent('blur', { value: event.detail.value })
    },

    onClear() {
      if (this.data.disabled || this.data.readonly) return

      this.setData({ value: '' })
      this.triggerEvent('input', { value: '' })
      this.triggerEvent('clear', { value: '' })
    }
  }
})
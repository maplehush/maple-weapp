Component({
  properties: {
    type: {
      type: String,
      value: 'default'
    },

    size: {
      type: String,
      value: 'medium'
    },

    disabled: {
      type: Boolean,
      value: false
    },

    loading: {
      type: Boolean,
      value: false
    },

    block: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onTap() {
      const { disabled, loading } = this.data

      if (disabled || loading) {
        return
      }

      this.triggerEvent('click')
    }
  }
})
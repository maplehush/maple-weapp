Component({
  properties: {
    title: {
      type: String,
      value: ''
    },

    label: {
      type: String,
      value: ''
    },

    value: {
      type: String,
      value: ''
    },

    clickable: {
      type: Boolean,
      value: false
    },

    border: {
      type: Boolean,
      value: true
    },

    arrow: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onTap() {
      if (!this.data.clickable) {
        return
      }

      this.triggerEvent('click')
    }
  }
})
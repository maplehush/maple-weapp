Component({
  properties: {
    visible: { type: Boolean, value: false },
    message: { type: String, value: '' },
    type: { type: String, value: 'default' },
    duration: { type: Number, value: 2000 }
  },

  observers: {
    'visible, duration': function(visible: boolean, duration: number) {
      if (!visible || duration <= 0) return
      this.clearTimer()
      this.timer = setTimeout(() => {
        this.setData({ visible: false })
        this.triggerEvent('close')
      }, duration)
    }
  },

  lifetimes: {
    detached() {
      this.clearTimer()
    }
  },

  methods: {
    timer: null as ReturnType<typeof setTimeout> | null,

    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    }
  }
})

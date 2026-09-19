Component({
  properties: {
    active: { type: Number, value: 0 },
    fixed: { type: Boolean, value: true },
    border: { type: Boolean, value: true }
  },
  methods: {
    onItemTap(event: any) {
      const index = Number(event.currentTarget.dataset.index)
      if (index === this.data.active) return
      this.setData({ active: index })
      this.triggerEvent('change', { index })
    }
  }
})

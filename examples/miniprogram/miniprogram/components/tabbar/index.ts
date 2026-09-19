Component({
  data: {
    items: [
      { label: '首页', icon: 'search' },
      { label: '消息', icon: 'check', badge: '3' },
      { label: '我的', icon: 'edit' }
    ],
    active: 0
  },
  methods: {
    onChange(event: any) {
      this.setData({ active: event.detail.index })
    }
  }
})

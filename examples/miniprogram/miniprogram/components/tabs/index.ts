Component({
  data: {
    tabs: [
      { title: '推荐' },
      { title: '热门' },
      { title: '最新' }
    ],
    active: 0
  },
  methods: {
    onChange(event: any) {
      this.setData({ active: event.detail.index })
    }
  }
})

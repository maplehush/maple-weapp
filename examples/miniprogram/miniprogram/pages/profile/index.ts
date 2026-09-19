Component({
  data: {
    tabbarItems: [
      { label: '首页', icon: 'check' },
      { label: '我的', icon: 'edit' }
    ],
    tabbarActive: 1
  },
  methods: {
    onChangeTabbar(event: any) {
      const index = Number(event.detail.index)
      this.setData({ tabbarActive: index })
      if (index === 0) wx.reLaunch({ url: '/pages/index/index' })
    }
  }
})

// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Component({
  data: {
    popupVisible: false,
    tabbarItems: [
      { label: "首页", icon: "search" },
      { label: "消息", icon: "check", badge: "3" },
      { label: "我的", icon: "edit" }
    ],
    tabbarActive: 0,
    tabs: [
      { title: "推荐" },
      { title: "热门" },
      { title: "最新" }
    ],
    tabsActive: 0,
    actionSheetVisible: false,
    actionSheetActions: [
      { name: '分享' },
      { name: '编辑', subname: '修改内容' },
      { name: '删除', disabled: true }
    ]
  },
  methods: {
    onChangeTabbar(event: any) {
      this.setData({ tabbarActive: event.detail.index })
    },
    onChangeTabs(event: any) {
      this.setData({ tabsActive: event.detail.index })
    },
    onShowPopup() {
      this.setData({ popupVisible: true })
    },
    onClosePopup() {
      this.setData({ popupVisible: false })
    },
    onShowActionSheet() {
      this.setData({ actionSheetVisible: true })
    },
    onSelectActionSheet(event: any) {
      this.setData({ actionSheetVisible: false })
      wx.showToast({ title: event.detail.action.name, icon: 'none' })
    },
    onCloseActionSheet() {
      this.setData({ actionSheetVisible: false })
    }
  },
});

// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Component({
  data: {
    popupVisible: false,
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

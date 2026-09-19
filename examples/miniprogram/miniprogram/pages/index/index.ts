// index.ts
// 获取应用实例
const app = getApp<IAppOption>();

Component({
  data: {
    popupVisible: false
  },
  methods: {
    onShowPopup() {
      this.setData({ popupVisible: true })
    },
    onClosePopup() {
      this.setData({ popupVisible: false })
    }
  },
});

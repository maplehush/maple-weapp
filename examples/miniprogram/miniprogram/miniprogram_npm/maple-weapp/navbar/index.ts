Component({
  options: {
    multipleSlots: true
  },
  properties: {
    title: { type: String, value: '' },
    backable: { type: Boolean, value: false },
    fixed: { type: Boolean, value: false },
    border: { type: Boolean, value: true },
    safeArea: { type: Boolean, value: true }
  },
  data: {
    statusBarHeight: 0,
    navigationBarHeight: 44,
    totalHeight: 44,
    capsuleInset: 88
  },
  lifetimes: {
    attached() {
      const wxApi = wx as any
      let windowInfo: any = null
      let deviceInfo: any = null
      let capsule: any = null

      if (typeof wxApi.getWindowInfo === 'function') {
        try {
          windowInfo = wxApi.getWindowInfo()
        } catch (_) {}
      }
      if (!windowInfo && typeof wxApi.getSystemInfoSync === 'function') {
        windowInfo = wxApi.getSystemInfoSync()
      }
      windowInfo = windowInfo || {}

      if (typeof wxApi.getDeviceInfo === 'function') {
        try {
          deviceInfo = wxApi.getDeviceInfo()
        } catch (_) {}
      }
      deviceInfo = deviceInfo || windowInfo

      if (typeof wxApi.getMenuButtonBoundingClientRect === 'function') {
        try {
          capsule = wxApi.getMenuButtonBoundingClientRect()
        } catch (_) {}
      }

      const rawStatusBarHeight = Number(
        windowInfo.statusBarHeight || (windowInfo.safeArea && windowInfo.safeArea.top) || 0
      )
      const windowWidth = Number(windowInfo.windowWidth || 0)
      const hasCapsuleMetrics = Boolean(
        capsule &&
        capsule.height > 0 &&
        capsule.left > 0 &&
        capsule.top >= rawStatusBarHeight
      )
      const navigationBarHeight = hasCapsuleMetrics
        ? Number(capsule.height) + Math.max(Number(capsule.top) - rawStatusBarHeight, 0) * 2
        : deviceInfo.platform === 'android' ? 48 : 44
      const capsuleInset = hasCapsuleMetrics
        ? Math.max(windowWidth - Number(capsule.left), 0)
        : 88
      const statusBarHeight = this.data.safeArea ? rawStatusBarHeight : 0

      this.setData({
        statusBarHeight,
        navigationBarHeight,
        totalHeight: statusBarHeight + navigationBarHeight,
        capsuleInset
      })
    }
  },
  methods: {
    onBack() {
      this.triggerEvent('back')
    }
  }
})

const ICON_FONT_SOURCE = 'url("data:font/woff;base64,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")'

let iconFontLoaded = false
let iconFontLoading = false

function loadIconFont() {
  if (iconFontLoaded || iconFontLoading) return

  iconFontLoading = true
  wx.loadFontFace({
    family: 'iconfont',
    source: ICON_FONT_SOURCE,
    scopes: ['webview', 'skyline'],
    success() {
      iconFontLoaded = true
      iconFontLoading = false
    },
    fail() {
      iconFontLoading = false
    },
  })
}

Component({
  lifetimes: {
    attached() {
      loadIconFont()
    },
  },

  properties: {
    name: { type: String, value: '' },

    size: { type: Number, value: 32 },

    color: { type: String, value: '' }
  },

  methods: {
    onTap() {
      this.triggerEvent('click')
    }
  }
})

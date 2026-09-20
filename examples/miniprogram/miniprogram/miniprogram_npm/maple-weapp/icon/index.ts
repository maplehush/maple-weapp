const ICON_FONT_SOURCE = 'url("data:font/woff;base64,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")'

let iconFontLoaded = false
let iconFontLoading = false

function isImageSource(name: string) {
  const value = name.trim()

  return /^(?:https?:)?\/\//.test(value)
    || /^data:image\//.test(value)
    || /^[a-z][a-z\d+.-]*:\/\//i.test(value)
    || /[\\/]/.test(value)
    || /\.(?:gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i.test(value)
}

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
  data: {
    isImage: false,
    imageSrc: '',
  },

  lifetimes: {
    attached() {
      loadIconFont()
    },
  },

  properties: {
    name: { type: String, value: '' },

    size: { type: Number, value: 32 },

    color: { type: String, value: 'var(--m-color-primary)' },

    mode: { type: String, value: 'aspectFit' },
  },

  observers: {
    name(name: string) {
      const isImage = isImageSource(name)
      this.setData({
        isImage,
        imageSrc: isImage ? name.trim() : '',
      })
    },
  },

  methods: {
    onTap() {
      this.triggerEvent('click')
    },
  },
})

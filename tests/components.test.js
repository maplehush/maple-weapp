const test = require('node:test')
const assert = require('node:assert/strict')
const { loadComponent, createInstance } = require('./component-test-utils')

test('Button blocks click while disabled or loading', () => {
  const definition = loadComponent('packages/button/index.js')
  const { instance, events } = createInstance(definition, { disabled: true, loading: false })
  instance.onTap()
  assert.equal(events.length, 0)

  instance.data.disabled = false
  instance.data.loading = true
  instance.onTap()
  assert.equal(events.length, 0)

  instance.data.loading = false
  instance.onTap()
  assert.deepEqual(events[0], { name: 'click', detail: undefined })
})

test('Input updates value and emits input, but readonly does not', () => {
  const definition = loadComponent('packages/input/index.js')
  const { instance, events } = createInstance(definition, { value: 'old', readonly: false, disabled: false })
  instance.onInput({ detail: { value: 'new' } })
  assert.equal(instance.data.value, 'new')
  assert.deepEqual(events[0], { name: 'input', detail: { value: 'new' } })

  instance.data.readonly = true
  instance.onInput({ detail: { value: 'blocked' } })
  assert.equal(instance.data.value, 'new')

  instance.onClear()
  assert.equal(instance.data.value, 'new')
  assert.equal(events.length, 1)

  instance.data.readonly = false
  instance.onClear()
  assert.equal(instance.data.value, '')
  assert.deepEqual(events[1], { name: 'input', detail: { value: '' } })
  assert.deepEqual(events[2], { name: 'clear', detail: { value: '' } })
})

test('Textarea mirrors Input interaction semantics', () => {
  const definition = loadComponent('packages/textarea/index.js')
  const { instance, events } = createInstance(definition, { value: 'old', readonly: false, disabled: false })
  instance.onFocus()
  assert.equal(instance.data.focused, true)
  instance.onInput({ detail: { value: 'new text' } })
  assert.equal(instance.data.value, 'new text')
  instance.onBlur({ detail: { value: 'new text' } })
  assert.equal(instance.data.focused, false)
  assert.deepEqual(events[1], { name: 'blur', detail: { value: 'new text' } })
})

test('Switch toggles and emits change, disabled does nothing', () => {
  const definition = loadComponent('packages/switch/index.js')
  const { instance, events } = createInstance(definition, { checked: false, disabled: false })
  instance.onTap()
  assert.equal(instance.data.checked, true)
  assert.deepEqual(events[0], { name: 'change', detail: { checked: true } })
  instance.data.disabled = true
  instance.onTap()
  assert.equal(instance.data.checked, true)
  assert.equal(events.length, 1)
})

test('Checkbox clears indeterminate before toggling', () => {
  const definition = loadComponent('packages/checkbox/index.js')
  const { instance, events } = createInstance(definition, { checked: true, disabled: false, indeterminate: true })
  instance.onTap()
  assert.equal(instance.data.checked, false)
  assert.equal(instance.data.indeterminate, false)
  assert.deepEqual(events[0], { name: 'change', detail: { checked: false } })
})

test('Radio only emits when transitioning to checked', () => {
  const definition = loadComponent('packages/radio/index.js')
  const { instance, events } = createInstance(definition, { checked: false, disabled: false })
  instance.onTap()
  assert.equal(instance.data.checked, true)
  assert.equal(events.length, 1)
  instance.onTap()
  assert.equal(events.length, 1)
})

test('Dialog emits action event and close event', () => {
  const definition = loadComponent('packages/dialog/index.js')
  const { instance, events } = createInstance(definition, { visible: true, closeOnMaskTap: true })
  instance.onConfirm()
  assert.equal(instance.data.visible, false)
  assert.deepEqual(events, [
    { name: 'confirm', detail: undefined },
    { name: 'close', detail: undefined }
  ])
})

test('Popup respects closeOnMaskTap and closes explicitly', () => {
  const definition = loadComponent('packages/popup/index.js')
  const { instance, events } = createInstance(definition, { visible: true, closeOnMaskTap: false })
  instance.onMaskTap()
  assert.equal(instance.data.visible, true)
  assert.equal(events.length, 0)
  instance.onClose()
  assert.equal(instance.data.visible, false)
  assert.deepEqual(events[0], { name: 'close', detail: undefined })
})

test('ActionSheet ignores disabled actions and selects enabled actions', () => {
  const definition = loadComponent('packages/action-sheet/index.js')
  const actions = [
    { name: 'Disabled', disabled: true },
    { name: 'Edit' }
  ]
  const { instance, events } = createInstance(definition, { visible: true, actions })
  instance.onActionTap({ currentTarget: { dataset: { index: 0 } } })
  assert.equal(instance.data.visible, true)
  assert.equal(events.length, 0)

  instance.onActionTap({ currentTarget: { dataset: { index: 1 } } })
  assert.equal(instance.data.visible, false)
  assert.deepEqual(events[0], { name: 'select', detail: { index: 1, action: actions[1] } })
  assert.deepEqual(events[1], { name: 'close', detail: undefined })
})

test('Tabs changes active index and skips redundant changes', () => {
  const definition = loadComponent('packages/tabs/index.js')
  assert.ok(definition.properties.tabs)
  const { instance, events } = createInstance(definition, { active: 0 })
  instance.onTabTap({ currentTarget: { dataset: { index: '2' } } })
  assert.equal(instance.data.active, 2)
  assert.deepEqual(events[0], { name: 'change', detail: { index: 2 } })
  instance.onTabTap({ currentTarget: { dataset: { index: '2' } } })
  assert.equal(events.length, 1)
})

test('Tabbar exposes items and changes active index', () => {
  const definition = loadComponent('packages/tabbar/index.js')
  assert.ok(definition.properties.items)
  const { instance, events } = createInstance(definition, { active: 0 })
  instance.onItemTap({ currentTarget: { dataset: { index: '1' } } })
  assert.equal(instance.data.active, 1)
  assert.deepEqual(events[0], { name: 'change', detail: { index: 1 } })
})

test('Toast auto closes and can clean up its timer', async () => {
  const definition = loadComponent('packages/toast/index.js')
  const { instance, events, observer, detached } = createInstance(definition, { visible: true })
  observer('visible, duration', true, 5)
  await new Promise((resolve) => setTimeout(resolve, 15))
  assert.equal(instance.data.visible, false)
  assert.deepEqual(events[0], { name: 'close', detail: undefined })
  detached()
})

test('Cell emits click only when clickable and enabled', () => {
  const definition = loadComponent('packages/cell/index.js')
  const { instance, events } = createInstance(definition, { clickable: false, disabled: false })
  instance.onTap()
  assert.equal(events.length, 0)

  instance.data.clickable = true
  instance.data.disabled = true
  instance.onTap()
  assert.equal(events.length, 0)

  instance.data.disabled = false
  instance.onTap()
  assert.deepEqual(events[0], { name: 'click', detail: undefined })
})

test('Tag close is blocked when disabled', () => {
  const definition = loadComponent('packages/tag/index.js')
  const { instance, events } = createInstance(definition, { disabled: true })
  instance.onClose()
  assert.equal(events.length, 0)

  instance.data.disabled = false
  instance.onClose()
  assert.deepEqual(events[0], { name: 'close', detail: undefined })
})

test('Loading exposes stable defaults', () => {
  const definition = loadComponent('packages/loading/index.js')
  assert.equal(definition.properties.size.value, 32)
  assert.equal(definition.properties.color.value, 'var(--m-color-primary)')
  assert.equal(definition.properties.text.value, '')
})

test('Dialog mask close obeys closeOnMaskTap', () => {
  const definition = loadComponent('packages/dialog/index.js')
  const { instance, events } = createInstance(definition, { visible: true, closeOnMaskTap: false })
  instance.onMaskTap()
  assert.equal(instance.data.visible, true)
  assert.equal(events.length, 0)

  instance.data.closeOnMaskTap = true
  instance.onMaskTap()
  assert.equal(instance.data.visible, false)
  assert.deepEqual(events[0], { name: 'close', detail: undefined })
})

test('ActionSheet cancel emits cancel then close', () => {
  const definition = loadComponent('packages/action-sheet/index.js')
  const { instance, events } = createInstance(definition, { visible: true })
  instance.onCancel()
  assert.deepEqual(events, [
    { name: 'cancel', detail: undefined },
    { name: 'close', detail: undefined }
  ])
})


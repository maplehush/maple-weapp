const path = require('node:path')

function loadComponent(relativePath) {
  let definition
  global.Component = (config) => {
    definition = config
  }

  const modulePath = path.resolve(__dirname, '..', relativePath)
  delete require.cache[require.resolve(modulePath)]
  require(modulePath)

  if (!definition) {
    throw new Error(`Component definition was not registered: ${relativePath}`)
  }

  return definition
}

function createInstance(definition, data = {}) {
  const events = []
  const instance = {
    data: { ...data },
    setData(patch) {
      Object.assign(this.data, patch)
    },
    triggerEvent(name, detail) {
      events.push({ name, detail })
    }
  }

  for (const [name, method] of Object.entries(definition.methods || {})) {
    instance[name] = method.bind(instance)
  }

  return {
    instance,
    events,
    observer(name, ...args) {
      const observer = definition.observers && definition.observers[name]
      if (!observer) throw new Error(`Observer not found: ${name}`)
      return observer.apply(instance, args)
    },
    detached() {
      return definition.lifetimes && definition.lifetimes.detached
        ? definition.lifetimes.detached.call(instance)
        : undefined
    }
  }
}

module.exports = { loadComponent, createInstance }

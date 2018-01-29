export const type = '@@CONNECTION/STATUS'

function isBrowser () {
  return typeof document !== 'undefined' && document.createElement
}

export default function () {
  return (createStore) => (...args) => {
    const store = createStore(...args)
    if (!isBrowser()) return store
    /**
     * Observe online and offline events
     */
    window.addEventListener('online', (event) => {
      store.dispatch({ type, status: event.type })
    })
    window.addEventListener('offline', (event) => {
      store.dispatch({ type, status: event.type })
    })
    return store
  }
}

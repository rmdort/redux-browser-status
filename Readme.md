# Redux browser connection status

A simple store enhancer to check if your internet connection is online or offline

## Installation

````
yarn add redux-browser-status
````

### Store enhancer

````
import connectionStatus from 'redux-browser-status'

const store = createStore(
  reducers,
  compose(
    connectionStatus(),
    applyMiddleware(...)
  )
)
````

Action type dispatched when connection changes - `@@CONNECTION/STATUS`
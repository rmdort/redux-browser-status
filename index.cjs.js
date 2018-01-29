'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return function (createStore) {
    return function () {
      var store = createStore.apply(undefined, arguments);
      if (!isBrowser()) return store;
      /**
       * Observe online and offline events
       */
      window.addEventListener('online', function (event) {
        store.dispatch({ type: type, status: event.type });
      });
      window.addEventListener('offline', function (event) {
        store.dispatch({ type: type, status: event.type });
      });
      return store;
    };
  };
};

var type = exports.type = '@@CONNECTION/STATUS';

function isBrowser() {
  return typeof document !== 'undefined' && document.createElement;
}

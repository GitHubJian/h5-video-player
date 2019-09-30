var doc =
  'undefined' === typeof document
    ? {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
          blur: function() {},
          nodeName: ''
        },
        querySelector: function() {
          return null
        },
        querySelectorAll: function() {
          return []
        },
        getElementById: function() {
          return null
        },
        createEvent: function() {
          return {
            initEvent: function() {}
          }
        },
        createElement: function() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function() {},
            getElementsByTagName: function() {
              return []
            }
          }
        },
        location: {
          hash: ''
        }
      }
    : document

var win =
  'undefined' === typeof window
    ? {
        document: doc,
        navigator: {
          userAgent: ''
        },
        location: {},
        history: {},
        CustomEvent: function() {
          return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
          return {
            getPropertyValue: function() {
              return ''
            }
          }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {}
      }
    : window

var Dom7 = function Dom7(arr) {}

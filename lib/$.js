var doc =
  typeof document === 'undefined'
    ? {
        body: {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        activeElement: {
          blur: function blur() {},
          nodeName: ''
        },
        querySelector: function querySelector() {
          return null
        },
        querySelectorAll: function querySelectorAll() {
          return []
        },
        getElementById: function getElementById() {
          return null
        },
        createEvent: function createEvent() {
          return {
            initEvent: function initEvent() {}
          }
        },
        createElement: function createElement() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function setAttribute() {},
            getElementsByTagName: function getElementsByTagName() {
              return []
            }
          }
        },
        location: { hash: '' }
      }
    : document // eslint-disable-line

var win =
  typeof window === 'undefined'
    ? {
        document: doc,
        navigator: {
          userAgent: ''
        },
        location: {},
        history: {},
        CustomEvent: function CustomEvent() {
          return this
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        getComputedStyle: function getComputedStyle() {
          return {
            getPropertyValue: function getPropertyValue() {
              return ''
            }
          }
        },
        Image: function Image() {},
        Date: function Date() {},
        screen: {},
        setTimeout: function setTimeout() {},
        clearTimeout: function clearTimeout() {}
      }
    : window // eslint-disable-line

var Dom7 = function Dom7(arr) {
  var self = this
  // Create array-like object
  for (var i = 0; i < arr.length; i += 1) {
    self[i] = arr[i]
  }
  self.length = arr.length
  // Return collection with methods
  return this
}

function $(selector, context) {
  var arr = []
  var i = 0
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector
    }
  }
  if (selector) {
    // String
    if (typeof selector === 'string') {
      var els
      var tempParent
      var html = selector.trim()
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        var toCreate = 'div'
        if (html.indexOf('<li') === 0) {
          toCreate = 'ul'
        }
        if (html.indexOf('<tr') === 0) {
          toCreate = 'tbody'
        }
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) {
          toCreate = 'tr'
        }
        if (html.indexOf('<tbody') === 0) {
          toCreate = 'table'
        }
        if (html.indexOf('<option') === 0) {
          toCreate = 'select'
        }
        tempParent = doc.createElement(toCreate)
        tempParent.innerHTML = html
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i])
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [doc.getElementById(selector.trim().split('#')[1])]
        } else {
          // Other selectors
          els = (context || doc).querySelectorAll(selector.trim())
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) {
            arr.push(els[i])
          }
        }
      }
    } else if (selector.nodeType || selector === win || selector === doc) {
      // Node/element
      arr.push(selector)
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i])
      }
    }
  }
  return new Dom7(arr)
}

$.fn = Dom7.prototype
$.Class = Dom7
$.Dom7 = Dom7

function unique(arr) {
  var uniqueArray = []
  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i])
    }
  }
  return uniqueArray
}

// Classes and attributes
function addClass(className) {
  if (typeof className === 'undefined') {
    return this
  }
  var classes = className.split(' ')
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (
        typeof this[j] !== 'undefined' &&
        typeof this[j].classList !== 'undefined'
      ) {
        this[j].classList.add(classes[i])
      }
    }
  }
  return this
}
function removeClass(className) {
  var classes = className.split(' ')
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (
        typeof this[j] !== 'undefined' &&
        typeof this[j].classList !== 'undefined'
      ) {
        this[j].classList.remove(classes[i])
      }
    }
  }
  return this
}
function hasClass(className) {
  if (!this[0]) {
    return false
  }
  return this[0].classList.contains(className)
}
function toggleClass(className) {
  var classes = className.split(' ')
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (
        typeof this[j] !== 'undefined' &&
        typeof this[j].classList !== 'undefined'
      ) {
        this[j].classList.toggle(classes[i])
      }
    }
  }
  return this
}
function attr(attrs, value) {
  var arguments$1 = arguments

  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) {
      return this[0].getAttribute(attrs)
    }
    return undefined
  }

  // Set attrs
  for (var i = 0; i < this.length; i += 1) {
    if (arguments$1.length === 2) {
      // String
      this[i].setAttribute(attrs, value)
    } else {
      // Object
      // eslint-disable-next-line
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName]
        this[i].setAttribute(attrName, attrs[attrName])
      }
    }
  }
  return this
}
// eslint-disable-next-line
function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr)
  }
  return this
}
function data(key, value) {
  var el
  if (typeof value === 'undefined') {
    el = this[0]
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
        return el.dom7ElementDataStorage[key]
      }

      var dataKey = el.getAttribute('data-' + key)
      if (dataKey) {
        return dataKey
      }
      return undefined
    }
    return undefined
  }

  // Set value
  for (var i = 0; i < this.length; i += 1) {
    el = this[i]
    if (!el.dom7ElementDataStorage) {
      el.dom7ElementDataStorage = {}
    }
    el.dom7ElementDataStorage[key] = value
  }
  return this
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style
    elStyle.webkitTransform = transform
    elStyle.transform = transform
  }
  return this
}
function transition(duration) {
  if (typeof duration !== 'string') {
    duration = duration + 'ms' // eslint-disable-line
  }
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this[i].style
    elStyle.webkitTransitionDuration = duration
    elStyle.transitionDuration = duration
  }
  return this
}
// Events
function on() {
  var assign

  var args = [],
    len = arguments.length
  while (len--) args[len] = arguments[len]
  var eventType = args[0]
  var targetSelector = args[1]
  var listener = args[2]
  var capture = args[3]
  if (typeof args[1] === 'function') {
    ;(assign = args),
      (eventType = assign[0]),
      (listener = assign[1]),
      (capture = assign[2])
    targetSelector = undefined
  }
  if (!capture) {
    capture = false
  }

  function handleLiveEvent(e) {
    var target = e.target
    if (!target) {
      return
    }
    var eventData = e.target.dom7EventData || []
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e)
    }
    if ($(target).is(targetSelector)) {
      listener.apply(target, eventData)
    } else {
      var parents = $(target).parents() // eslint-disable-line
      for (var k = 0; k < parents.length; k += 1) {
        if ($(parents[k]).is(targetSelector)) {
          listener.apply(parents[k], eventData)
        }
      }
    }
  }
  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : []
    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e)
    }
    listener.apply(this, eventData)
  }
  var events = eventType.split(' ')
  var j
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i]
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j]
        if (!el.dom7Listeners) {
          el.dom7Listeners = {}
        }
        if (!el.dom7Listeners[event]) {
          el.dom7Listeners[event] = []
        }
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        })
        el.addEventListener(event, handleEvent, capture)
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var event$1 = events[j]
        if (!el.dom7LiveListeners) {
          el.dom7LiveListeners = {}
        }
        if (!el.dom7LiveListeners[event$1]) {
          el.dom7LiveListeners[event$1] = []
        }
        el.dom7LiveListeners[event$1].push({
          listener: listener,
          proxyListener: handleLiveEvent
        })
        el.addEventListener(event$1, handleLiveEvent, capture)
      }
    }
  }
  return this
}
function off() {
  var assign

  var args = [],
    len = arguments.length
  while (len--) args[len] = arguments[len]
  var eventType = args[0]
  var targetSelector = args[1]
  var listener = args[2]
  var capture = args[3]
  if (typeof args[1] === 'function') {
    ;(assign = args),
      (eventType = assign[0]),
      (listener = assign[1]),
      (capture = assign[2])
    targetSelector = undefined
  }
  if (!capture) {
    capture = false
  }

  var events = eventType.split(' ')
  for (var i = 0; i < events.length; i += 1) {
    var event = events[i]
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j]
      var handlers = void 0
      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event]
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event]
      }
      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k]
          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture)
            handlers.splice(k, 1)
          } else if (
            listener &&
            handler.listener &&
            handler.listener.dom7proxy &&
            handler.listener.dom7proxy === listener
          ) {
            el.removeEventListener(event, handler.proxyListener, capture)
            handlers.splice(k, 1)
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture)
            handlers.splice(k, 1)
          }
        }
      }
    }
  }
  return this
}
function trigger() {
  var args = [],
    len = arguments.length
  while (len--) args[len] = arguments[len]

  var events = args[0].split(' ')
  var eventData = args[1]
  for (var i = 0; i < events.length; i += 1) {
    var event = events[i]
    for (var j = 0; j < this.length; j += 1) {
      var el = this[j]
      var evt = void 0
      try {
        evt = new win.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        })
      } catch (e) {
        evt = doc.createEvent('Event')
        evt.initEvent(event, true, true)
        evt.detail = eventData
      }
      // eslint-disable-next-line
      el.dom7EventData = args.filter(function(data, dataIndex) {
        return dataIndex > 0
      })
      el.dispatchEvent(evt)
      el.dom7EventData = []
      delete el.dom7EventData
    }
  }
  return this
}
function transitionEnd(callback) {
  var events = ['webkitTransitionEnd', 'transitionend']
  var dom = this
  var i
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) {
      return
    }
    callback.call(this, e)
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack)
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack)
    }
  }
  return this
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var styles = this.styles()
      return (
        this[0].offsetWidth +
        parseFloat(styles.getPropertyValue('margin-right')) +
        parseFloat(styles.getPropertyValue('margin-left'))
      )
    }
    return this[0].offsetWidth
  }
  return null
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var styles = this.styles()
      return (
        this[0].offsetHeight +
        parseFloat(styles.getPropertyValue('margin-top')) +
        parseFloat(styles.getPropertyValue('margin-bottom'))
      )
    }
    return this[0].offsetHeight
  }
  return null
}
function offset() {
  if (this.length > 0) {
    var el = this[0]
    var box = el.getBoundingClientRect()
    var body = doc.body
    var clientTop = el.clientTop || body.clientTop || 0
    var clientLeft = el.clientLeft || body.clientLeft || 0
    var scrollTop = el === win ? win.scrollY : el.scrollTop
    var scrollLeft = el === win ? win.scrollX : el.scrollLeft
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    }
  }

  return null
}
function styles() {
  if (this[0]) {
    return win.getComputedStyle(this[0], null)
  }
  return {}
}
function css(props, value) {
  var i
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) {
        return win.getComputedStyle(this[0], null).getPropertyValue(props)
      }
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (var prop in props) {
          this[i].style[prop] = props[prop]
        }
      }
      return this
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value
    }
    return this
  }
  return this
}
// Iterate over the collection passing elements to `callback`
function each(callback) {
  // Don't bother continuing without a callback
  if (!callback) {
    return this
  }
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this[i], i, this[i]) === false) {
      // End the loop early
      return this
    }
  }
  // Return `this` to allow chained DOM operations
  return this
}
function filter(callback) {
  var matchedItems = []
  var dom = this
  for (var i = 0; i < dom.length; i += 1) {
    if (callback.call(dom[i], i, dom[i])) {
      matchedItems.push(dom[i])
    }
  }
  return new Dom7(matchedItems)
}
// eslint-disable-next-line
function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html
  }
  return this
}
// eslint-disable-next-line
function text(text) {
  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim()
    }
    return null
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text
  }
  return this
}
function is(selector) {
  var el = this[0]
  var compareWith
  var i
  if (!el || typeof selector === 'undefined') {
    return false
  }
  if (typeof selector === 'string') {
    if (el.matches) {
      return el.matches(selector)
    } else if (el.webkitMatchesSelector) {
      return el.webkitMatchesSelector(selector)
    } else if (el.msMatchesSelector) {
      return el.msMatchesSelector(selector)
    }

    compareWith = $(selector)
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) {
        return true
      }
    }
    return false
  } else if (selector === doc) {
    return el === doc
  } else if (selector === win) {
    return el === win
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) {
        return true
      }
    }
    return false
  }
  return false
}
function index() {
  var child = this[0]
  var i
  if (child) {
    i = 0
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) {
        i += 1
      }
    }
    return i
  }
  return undefined
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') {
    return this
  }
  var length = this.length
  var returnIndex
  if (index > length - 1) {
    return new Dom7([])
  }
  if (index < 0) {
    returnIndex = length + index
    if (returnIndex < 0) {
      return new Dom7([])
    }
    return new Dom7([this[returnIndex]])
  }
  return new Dom7([this[index]])
}
function append() {
  var args = [],
    len = arguments.length
  while (len--) args[len] = arguments[len]

  var newChild

  for (var k = 0; k < args.length; k += 1) {
    newChild = args[k]
    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = doc.createElement('div')
        tempDiv.innerHTML = newChild
        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild)
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j])
        }
      } else {
        this[i].appendChild(newChild)
      }
    }
  }

  return this
}
function prepend(newChild) {
  var i
  var j
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = doc.createElement('div')
      tempDiv.innerHTML = newChild
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0])
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0])
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0])
    }
  }
  return this
}
function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (
        this[0].nextElementSibling &&
        $(this[0].nextElementSibling).is(selector)
      ) {
        return new Dom7([this[0].nextElementSibling])
      }
      return new Dom7([])
    }

    if (this[0].nextElementSibling) {
      return new Dom7([this[0].nextElementSibling])
    }
    return new Dom7([])
  }
  return new Dom7([])
}
function nextAll(selector) {
  var nextEls = []
  var el = this[0]
  if (!el) {
    return new Dom7([])
  }
  while (el.nextElementSibling) {
    var next = el.nextElementSibling // eslint-disable-line
    if (selector) {
      if ($(next).is(selector)) {
        nextEls.push(next)
      }
    } else {
      nextEls.push(next)
    }
    el = next
  }
  return new Dom7(nextEls)
}
function prev(selector) {
  if (this.length > 0) {
    var el = this[0]
    if (selector) {
      if (
        el.previousElementSibling &&
        $(el.previousElementSibling).is(selector)
      ) {
        return new Dom7([el.previousElementSibling])
      }
      return new Dom7([])
    }

    if (el.previousElementSibling) {
      return new Dom7([el.previousElementSibling])
    }
    return new Dom7([])
  }
  return new Dom7([])
}
function prevAll(selector) {
  var prevEls = []
  var el = this[0]
  if (!el) {
    return new Dom7([])
  }
  while (el.previousElementSibling) {
    var prev = el.previousElementSibling // eslint-disable-line
    if (selector) {
      if ($(prev).is(selector)) {
        prevEls.push(prev)
      }
    } else {
      prevEls.push(prev)
    }
    el = prev
  }
  return new Dom7(prevEls)
}
function parent(selector) {
  var parents = [] // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) {
          parents.push(this[i].parentNode)
        }
      } else {
        parents.push(this[i].parentNode)
      }
    }
  }
  return $(unique(parents))
}
function parents(selector) {
  var parents = [] // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var parent = this[i].parentNode // eslint-disable-line
    while (parent) {
      if (selector) {
        if ($(parent).is(selector)) {
          parents.push(parent)
        }
      } else {
        parents.push(parent)
      }
      parent = parent.parentNode
    }
  }
  return $(unique(parents))
}
function closest(selector) {
  var closest = this // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([])
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0)
  }
  return closest
}
function find(selector) {
  var foundElements = []
  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector)
    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j])
    }
  }
  return new Dom7(foundElements)
}
function children(selector) {
  var children = [] // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].childNodes

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) {
          children.push(childNodes[j])
        }
      } else if (
        childNodes[j].nodeType === 1 &&
        $(childNodes[j]).is(selector)
      ) {
        children.push(childNodes[j])
      }
    }
  }
  return new Dom7(unique(children))
}
function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) {
      this[i].parentNode.removeChild(this[i])
    }
  }
  return this
}
function add() {
  var args = [],
    len = arguments.length
  while (len--) args[len] = arguments[len]

  var dom = this
  var i
  var j
  for (i = 0; i < args.length; i += 1) {
    var toAdd = $(args[i])
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j]
      dom.length += 1
    }
  }
  return dom
}

var Methods = {
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  attr: attr,
  removeAttr: removeAttr,
  data: data,
  transform: transform,
  transition: transition,
  on: on,
  off: off,
  trigger: trigger,
  transitionEnd: transitionEnd,
  outerWidth: outerWidth,
  outerHeight: outerHeight,
  offset: offset,
  css: css,
  each: each,
  html: html,
  text: text,
  is: is,
  index: index,
  eq: eq,
  append: append,
  prepend: prepend,
  next: next,
  nextAll: nextAll,
  prev: prev,
  prevAll: prevAll,
  parent: parent,
  parents: parents,
  closest: closest,
  find: find,
  children: children,
  filter: filter,
  remove: remove,
  add: add,
  styles: styles
}

Object.keys(Methods).forEach(function(methodName) {
  $.fn[methodName] = $.fn[methodName] || Methods[methodName]
})

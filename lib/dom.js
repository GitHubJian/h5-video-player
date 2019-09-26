var _toString = Object.prototype.toString

function appendTo(node, parentNode) {
  var fragment = document.createDocumentFragment()

  if ('[object NodeList]' === _toString.call(node)) {
    var i = 0
    for (; i < node.length; i++) {
      fragment.appendChild(node[i])
    }
  } else {
    fragment.appendChild(node)
  }

  parentNode.appendChild(fragment)
  return parentNode
}

function addEvent(el, event, listener) {
  if (el.addEventListener) {
    return void el.addEventListener(event, listener, false)
  }

  var n = 'on' + event
  if (el.attachEvent) {
    return void el.attachEvent(n, listener)
  }

  var v = el[n]
  el[n] = function(e) {
    e = e || window.event
    listener.call(null, e)

    if (v) {
      v.call(null, e)
    }
  }
}

function hasClass(el, val) {
  return (' ' + el.classname + ' ').indexOf(' ' + val + ' ') > -1
}

function offset(el) {
  var x = 0,
    y = 0

  while (item) {
    y = item.offsetTop
    x = x + item.offsetLeft
    item = item.offsetParent
  }

  return {
    left: x,
    top: y
  }
}

module.exports = {
  appendTo,
  addEvent,
  hasClass,
  offset
}

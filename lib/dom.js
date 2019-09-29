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
  return (' ' + el.className + ' ').indexOf(' ' + val + ' ') > -1
}

function offset(el) {
  var x = 0,
    y = 0

  while (el) {
    y = el.offsetTop
    x = x + el.offsetLeft
    el = el.offsetParent
  }

  return {
    left: x,
    top: y
  }
}

function formatTime(v) {
  if (void 0 === v) v = 0
  var ret

  v = Math.floor(v) >> 0
  ret = ('0' + (v % 60)).slice(-2)

  if ((ret = Math.floor(v / 60) + ':' + ret).length < 5) {
    ret = '0' + ret
  }

  return ret
}

module.exports = {
  appendTo,
  addEvent,
  hasClass,
  offset,
  formatTime
}

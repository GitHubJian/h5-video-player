function $(selector, context) {
  var arr = []
  var i = 0
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector
    }
  }

  if (selector) {
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

        tempParent = document.createElement(toCreate)
        tempParent.innerHTML = html
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i])
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [document.getElementById(selector.trim().split('#')[1])]
        } else {
          els = (context || document).querySelectorAll(selector.trim())
        }

        for (i = 0; i < els.length; i += 1) {
          if (els[i]) {
            arr.push(els[i])
          }
        }
      }
    } else if (
      selector.nodeType ||
      selector === window ||
      selector === document
    ) {
      arr.push(selector)
    } else if (selector.length > 0 && selector[0].nodeType) {
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i])
      }
    }
  }

  return new Dom7(arr)
}

var Device = (function device(win) {
  var ua = win.navigator.userAgent

  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/)
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/)

  var device = {
    os: 'unknown',
    android: false,
    ios: false
  }

  if (android) {
    device.os = 'android'
    device.android = true
  }

  if (ipad || iphone) {
    device.os = 'ios'
    device.ios = true
  }

  return device
})(window)

var Utils = {
  extend: function(to, from) {
    if (from) {
      for (var i in from) {
        Object.prototype.hasOwnProperty.call(from, i) && (to[i] = from[i])
      }
    }

    return to
  }
}

var defaultOptions = {
  el: '#swiper'
}

function Swiper() {
  this.params = {
    el: '#swiper',
    direction: 'vertical'
  }

  this.init()
}

Swiper.prototype.constructor = Swiper

Swiper.prototype.update = function() {}

Swiper.prototype.init = function() {
  var that = this
  if (that.initialized) {
    return
  }

  this.addClass()

  this.attachEvents()
}

Swiper.prototype.addClass = function() {
  var suffixes = []

  suffixes.push('swiper-container-initialized')

  if (Device.android) {
    suffixes.push('swiper-container-android')
  }

  if (Device.ios) {
    suffixes.push('swiper-container-ios')
  }

  this.$el.className += ' ' + suffixes.join(' ') + ' '
}

Swiper.prototype.attachEvents = function() {
  var that = this,
    el = that.$el

  this.onTouchStart = onTouchStart.bind(this)
  this.onTouchMove = onTouchMove.bind(this)
  this.onTouchEnd = onTouchEnd.bind(this)

  el.addEventListener('touchstart', this.onTouchStart, {
    passive: true,
    capture: false
  })

  el.addEventListener('touchmove', this.onTouchMove, {
    passive: true,
    capture: false
  })

  el.addEventListener('touchend', this.onTouchEnd, {
    passive: true,
    capture: false
  })

  el.addEventListener('touchend', this.onTouchEnd, {
    passive: true,
    capture: false
  })
}

Swiper.prototype.destroy = function() {}

Swiper.prototype.updateProgress = function(translate) {}

Swiper.prototype.setTransition = function(speed) {}

Swiper.prototype.minTranslate = function() {
  return -this.snapGrid[0]
}

Swiper.prototype.maxTranslate = function() {
  return -this.snapGrid[this.snapGrid.length - 1]
}

Swiper.prototype.setTranslate = function(translate) {
  var that = this
  var rtl = that.rtlTranslate
  var $wrapperEl = swiper.$wrapperEl
  var wrapperEl = swiper.wrapperEl

  var progress = that.progress
  var x = 0
  var y = 0
  var z = 0

  y = translate

  transform.call(
    $wrapperEl,
    'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px' + ')'
  )

  that.previousTranslate = that.translate
  that.translate = y

  // Check if we need to update progress
  var newProgress
  var translatesDiff = that.maxTranslate() - that.minTranslate()

  if (translatesDiff === 0) {
    newProgress = 0
  } else {
    newProgress = (translate - that.minTranslate()) / translatesDiff
  }

  if (newProgress !== progress) {
    that.updateProgress(translate)
  }
}

Swiper.prototype.updateActiveIndex = function(newActiveIndex) {
  var previousIndex = this.activeIndex
  var previousSnapIndex = this.snapIndex
  var activeIndex = newActiveIndex

  var snapIndex

  if ('undefined' === typeof activeIndex) {
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate)
  } else {
    snapIndex = activeIndex
  }
  snapIndex >= snapGrid.length && (snapIndex = snapIndex.length - 1)
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      this.snapIndex = snapIndex
      return
    }
  }

  Utils.extend(this, {
    snapIndex: snapIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  })
}

Swiper.prototype.transitionStart = function(runCallbacks, direction) {}

Swiper.prototype.transitionEnd = function(runCallbacks, direction) {}

function onTouchStart(event) {}

function onTouchMove(event) {
  console.log(123)
  // that.updateProgress()
  // that.setTranslate()
}

function onTouchEnd(event) {}

function transform(transform) {
  var elStyle = this.style
  elStyle.webkitTransform = transform
  elStyle.translate = transform
}

module.exports = Swiper

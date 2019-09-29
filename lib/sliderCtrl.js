var dom = require('./dom.js')

var isSupportedAgent = function() {
  var userAgent = window.navigator.userAgent

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  )
}

function SliderCtrl(options) {
  if (!options) {
    throw 'Slider: 缺少初始化参数'
  }

  this.options = options
  this.min = options.min || 0
  this.max = options.max || 100
  this.value = -1
  this.label = options.label || ''
  this.upLayer = options.upLayer
  this.parent = options.parent
  this.uiValue = 0
  this.liveDragging = void 0 !== options.liveDragging && options.liveDragging
  this.container = document.createElement('div')
  this.container.className = 'ui-slider-container'
  this.labelLayer = document.createElement('div')
  this.labelLayer.className = 'ui-slider-label'
  this.thumb = document.createElement('div')
  this.thumb.className = 'ui-slider-thumb'
  this.tracker = document.createElement('div')
  this.tracker.className = 'ui-slider-tracker'
  this.eventLayer = document.createElement('div')
  this.eventLayer.className = 'ui-slider-event-layer'
  this.upLayer = this.upLayer || this.eventLayer
  this.container.appendChild(this.tracker)
  this.container.appendChild(this.labelLayer)
  this.container.appendChild(this.thumb)
  this.container.appendChild(this.eventLayer)

  var that = this
  dom.addEvent(this.eventLayer, 'mousedown', function(e) {
    that.onmousedown()
    that.onmousemove(e.pageX, e.pageY)
  })

  dom.addEvent(this.eventLayer, 'touchstart', function(e) {
    that.onmousedown()
    that.ontouchmove(e.touches[0].pageX, e.touches[0].pageY)
  })

  if (!isSupportedAgent()) {
    dom.addEvent(this.upLayer, 'mouseup', function() {
      if (that._down) {
        that.onmouseup()
      }
    })
  }

  this.upLayer.onmouseleave = function(e) {
    if (that._down) {
      that.onmouseup()
    }
  }

  if (isSupportedAgent()) {
    dom.addEvent(this.upLayer, 'touchend', function() {
      if (that._down) {
        that.onmouseup()
      }
    })
  }

  this.upLayer.onmousemove = function(e) {
    if (that._down) {
      that.onmousemove(e.pageX, e.pageY)
    }
  }

  dom.addEvent(this.eventLayer, 'touchmove', function(e) {
    that.ontouchmove(e.touches[0].pageY, e.touches[0].pageY)
  })

  this.options.parent.appendChild(this.container)

  this.setLabel(this.label)

  this.setValue(this.options.value)
}

SliderCtrl.prototype.constructor = SliderCtrl

SliderCtrl.prototype.onclick = function() {}

SliderCtrl.prototype.onmousedown = function() {
  this._down = !0
}

SliderCtrl.prototype.onmouseup = function() {
  if (this._down) {
    this._down = false
    if (this.options.onChange) {
      this.options.onChange(this.uiValue)
      this.setValue(this.uiValue)
    }
  }
}

SliderCtrl.prototype.onmousemove = function(position) {
  if (this._down) {
    position = position - dom.offset(this.container).left
    var newUiValue = this.positionToValue(position)
    var oldUiValue = this.uiValue

    this.uiValue = newUiValue
    this.setValue(newUiValue, false)
    this._updatePosition(true)

    if (
      this.liveDragging &&
      this.options.onChange &&
      this.uiValue != oldUiValue
    ) {
      this.options.onChange(this.uiValue)
    }
  }
}

SliderCtrl.prototype.ontouchmove = function(position) {
  if (this._down) {
    position = position - dom.offset(this.container).left
    var newUiValue = this.positionToValue(position)
    this.uiValue = newUiValue

    this.setValue(newUiValue, false)
    this._updatePosition(true)
  }
}

SliderCtrl.prototype.valueToPosition = function(value) {
  return (value - this.min) / (this.max - this.min)
}

SliderCtrl.prototype.positionToValue = function(position) {
  var size = this.eventLayer.offsetWidth

  position = Math.max(0, position)
  position = Math.min(size, position)

  return this.min + ((this.max - this.min) * position) / size
}

SliderCtrl.prototype.getValue = function() {
  return this.min + this.getPercents() * (this.max - this.min)
}

SliderCtrl.prototype.getPercents = function() {
  return (this.value - this.min) / (this.max - this.min)
}

SliderCtrl.prototype.setValue = function(value) {
  value = Math.min(this.max, Math.max(this.min, value))

  if (this.value != value) {
    this.value = value
    this._dispatchChange(value)
  }
}

SliderCtrl.prototype.setMax = function(value) {
  this.max = value
  this._updatePosition()
}

SliderCtrl.prototype._dispatchChange = function() {
  this._updatePosition()

  if (this.options.labelFunc) {
    this.setLabel(this.label + ': ' + this.options.labelFunc(this.value))
  } else {
    this.setLabel(this.label + ': ' + this.value)
  }
}

SliderCtrl.prototype._updatePosition = function(isUpdate) {
  if (!(this._down && !isUpdate)) {
    this.thumb.style.width = 100 * this.getPercents() + '%'
  }
}

SliderCtrl.prototype.setLabel = function(html) {
  this.labelLayer.innerHTML = html
}

var style = document.createElement('style')
style.type = 'text/css'

style.innerHTML =
  '.ui-slider-container {position: absolute;width: 100%;height: 30px;text-align: center;}.ui-slider-thumb {position: absolute;top: 0px;bottom: 0px;left: 0px;}.ui-slider-thumb:after {content: "";position: absolute;display: block;top: 0px;right: -30px;width: 30px;height: 30px;border-radius: 28px;box-shadow: 0 0 2pt rgba(0, 0, 0, 0.5);background-color: #fff;}.ui-slider-tracker {position: absolute;top: 0px;bottom: 0px;left: 0px;right: -30px;background: #888;}.ui-slider-event-layer {position: absolute;top: 0px;left: 0px;bottom: 0px;right: -30px;}.ui-slider-label {position: absolute;display: block;top: 0px;bottom: 0px;left: 0px;right: 0px;line-height: 30px;font-size: 10px;color: #fff;}'

document.head.appendChild(style)

module.exports = SliderCtrl

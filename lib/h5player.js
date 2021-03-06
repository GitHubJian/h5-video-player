var Events = require('./events.js')
var Player = require('./player.js')
var dom = require('./dom.js')

var _toString = Object.prototype.toString

function H5Player() {
  this.options = {
    el: '#bofqi',
    image: null,
    video_url: null,
    high_quality: !1,
    retry_times: 5,
    max_duration: null
  }

  this.eventBus = new Events()
}

H5Player.prototype.constructor = H5Player

H5Player.prototype.on = function(event, listener) {
  this.eventBus.on(event, listener, this)
}

H5Player.prototype.off = function(event, listener) {
  this.eventBus.off(event, listener, this)
}

H5Player.prototype.create = function(opts) {
  var that = this

  '[object Object]' === _toString.call(opts) &&
    (this.options = Object.assign({}, this.options, opts))

  if (!this.options.el) {
    this.player = {}

    return !1
  }

  var html =
    '<div class="player-container">' +
    '<div class="dummy"></div><div class="player-box"><video' +
    ('string' == typeof this.options.preload ? ' preload' : '') +
    ' width="100%" height="100%" ' +
    (opts.autoplay ? 'autoplay ' : '') +
    'webkit-playsinline playsinline></video>' +
    '<div class="display">' +
    '<div class="control-bar hide"><span class="control-btn btn-play"><i class="player-icon icon-play"></i></span><span class="control-btn btn-pause hide"><i class="player-icon icon-pause"></i></span><div class="time-container"><span class="control-text time-current-text">00:00</span> <span class="control-time-split"></span> <span class="control-text time-total-text">24:00</span></div><div class="right"><span class="control-btn btn-mute"><i class="player-icon icon-mute"></i></span><span class="control-btn btn-unmute hide"><i class="player-icon icon-unmute"></i></span><span class="control-volume-slider"></span><span class="control-btn btn-repeat"><i class="player-icon icon-repeat"></i></span><span class="control-btn btn-widescreen"><i class="player-icon icon-widescreen"></i></span><span class="control-btn btn-fullscreen active"><i class="player-icon icon-fullscreen"></i></span></div><div class="control-slider"></div></div><div class="load-layer"><img/><i class="player-icon icon-preview"></i></div><div class="state-icon"><i class="buff-icon"></i><i class="pause-icon"></i><i class="play-icon"></i></div>' +
    '</div>' +
    '</div>' +
    '</div>'

  var fragment = document.createDocumentFragment(),
    div = document.createElement('div')
  div.innerHTML = html
  fragment.appendChild(div)

  var el = this.options.el
  _toString.call(this.options.el).match(/HTML.+Element/) ||
    (el = document.querySelector(this.options.el))

  if (!el) {
    el = document.createElement('div')
    el.setAttribute('id', this.options.el.substring(1))

    dom.appendTo(el, document.body)
  }

  dom.appendTo(fragment.firstChild.childNodes, el)

  this.setVideo()

  return this
}

H5Player.prototype.setVideo = function() {
  var opts = this.options,
    that = this

  var el = opts.el
  _toString.call(el).match(/HTML.+Element/) ||
    (el = document.querySelector(opts.el))

  this.player = new Player(el, {
    img: opts.image,
    video_url: opts.video_url,
    video_type: 'video/mp4',
    on_state_change: opts.on_state_change,
    max_duration: opts.max_duration,
    autoplay: opts.autoplay,
    eventBus: this.eventBus
  })

  if (this.options.auto_start || this.options.autoplay) {
    this.player.start_video()
  }
}

module.exports = H5Player

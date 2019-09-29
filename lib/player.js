var dom = require('./dom.js')
var SliderCtrl = require('./sliderCtrl.js')

var defaultOptions = {}

function Player(elem, options) {
  this.elem = elem

  this.options = Object.assign({}, defaultOptions, options)

  this.screen_state = Player.UI_NORMAL
  this.video_state = Player.V_IDEL
  this.control_bar_visible = true
  this.control_bar_timer = null
  this.control_bar_timer_delay = 3e3
  this.timer = null
  this.stage = null
  this.sliderCtrl = null
  this.volumeCtrl = null
  this.volume = 1
  this.currentTime = 0
  this.duration = 0

  this.init_ui(this.options)

  this.hidePlayIcon = !1
}

Player.UI_NORMAL = 0
Player.UI_WIDE = 1
Player.UI_FULL = 2
Player.V_IDEL = 0
Player.V_READY = 1
Player.V_BUFF = 2
Player.V_PLAY = 3
Player.V_PAUSE = 4
Player.V_COMPLETE = 5
Player.V_CANPLAY = 6
Player.V_PLAYING = 7
Player.E_VIDEO_READY = 'ready'
Player.E_VIDEO_PLAY = 'video_media_play'
Player.E_VIDEO_PAUSE = 'video_media_pause'
Player.E_VIDEO_LOADSTART = 'video_media_loadstart'
Player.E_VIDEO_CANPLAY = 'video_media_canplay'
Player.E_VIDEO_WAITING = 'video_media_waiting'
Player.E_VIDEO_ENDED = 'video_media_ended'
Player.E_VIDEO_ERROR = 'video_media_error'
Player.E_VIDEO_LOADED = 'video_media_loaded'
Player.E_VIDEO_SEEK = 'video_media_seek'
Player.E_VIDEO_TIME = 'video_media_time'

Player.isFullscreen = function() {
  return (
    null !=
    (document.webkitFullscreenElement ||
      document.fullScreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement)
  )
}

Player.requestFullscreen = function(el) {
  ;(
    el.webkitRequestFullScreen ||
    el.requestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullscreen ||
    function() {}
  ).apply(el)
}

Player.exitFullscreen = function() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else {
    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else {
      if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }
}

Player.prototype.constructor = Player

Player.prototype.play = function() {
  this.play_video()
}

Player.prototype.seek = function(currentTime) {
  this.seek_video(currentTime)
}

Player.prototype.pause = function() {
  this.pause_video()
}

Player.prototype.getDuration = function() {
  return this.video_duration()
}

Player.prototype.isFullscreen = function() {
  return Player.isFullscreen()
}

Player.prototype.init_ui = function(options) {
  var that = this
  options = options || {}

  this.elem.querySelector('.btn-widescreen').onclick = function() {
    if (that.screen_state != Player.UI_WIDE) {
      that.to_wide_screen()
    } else {
      that.to_normal_screen()
    }
  }

  this.elem.querySelector('.btn-fullscreen').onclick = function() {
    if (that.screen_state !== Player.UI_FULL) {
      that.to_full_screen()
    } else {
      that.to_normal_screen()
    }
  }

  function fullscreenChangeListener() {
    that.on_fullscreen_change()
  }

  document.addEventListener(
    'webkitfullscreenchange',
    fullscreenChangeListener,
    !1
  )

  document.addEventListener('mozfullscreenchange', fullscreenChangeListener, !1)

  document.addEventListener('MSFullscreenChange', fullscreenChangeListener, !1)

  document.addEventListener('fullscreenchange', fullscreenChangeListener, !1)

  this.elem.querySelector('.display').onmousemove = function(e) {
    that.on_display_mousemove(e)
  }

  this.elem.querySelector('.display').onclick = function(e) {
    that.on_display_click(e)
  }

  this.elem.querySelector('.control-bar').onclick = function(e) {
    that.get_video_state() === Player.V_PLAY &&
      that.set_control_bar_visible(!1, that.control_bar_timer_delay)
  }

  this.elem.querySelector('.btn-play').onclick = function(e) {
    layer.hasClass('hide') ? that.on_play_btn_click(e) : layer.click()
  }

  this.elem.querySelector('.btn-pause').onclick = function(e) {
    that.on_pause_btn_click(e)
  }

  this.elem.querySelector('.btn-repeat').onclick = function(e) {
    that.on_repeat_btn_click(e)
  }

  this.elem.querySelector('.btn-mute').onclick = function(e) {
    that.on_mute_btn_click(e)
  }

  this.elem.querySelector('.btn-unmute').onclick = function(e) {
    that.on_unmute_btn_click(e)
  }

  this.sliderCtrl = new SliderCtrl({
    parent: this.elem.querySelector('.control-slider'),
    upLayer: this.elem.querySelector('.display'),
    onChange: function(e) {
      that.on_slider_seek(e)
    }
  })

  this.volumeCtrl = new SliderCtrl({
    parent: this.elem.querySelector('.control-volume-slider'),
    upLayer: this.elem.querySelector('.control-volume-slider'),
    liveDragging: !0,
    onChange: function(t) {
      e.on_volume_slider_seek(t)
    },
    value: 100 * this.volume
  })

  var layer = this.elem.querySelector('.load-layer')
  if (options.video_url) {
    options.img && layer.querySelector('img').setAttribute('src', options.img)
    layer.onclick = function() {
      that.start_video()
    }
  } else {
    layer.classList.add('hide')
  }

  if (options.preload) {
    var video = this.elem.querySelector('video')
    'audio' === options.type && (video = this.elem.querySelector('audio'))
    var source = document.createElement('source')
    dom.appendTo(source, video)
    source.setAttribute('src', options.video_url)
    source.setAttribute('type', options.video_type)
    this.video = video

    video.addEventListener(
      'play',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_PLAY)
        }

        that.on_video_play(video)
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'playing',
      function() {
        that.on_video_playing(video)
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'pause',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_PAUSE)
        }

        that.on_video_pause(video)
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'waiting',
      function() {
        if (that.options.eventBus) {
          self.options.eventBus.dispatch(Player.E_VIDEO_WAITING)
        }

        that.on_video_waiting(video)
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'loadstart',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_LOADSTART)
        }

        that.on_video_loadstart(video)
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'canplay',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_CANPLAY)
        }

        that.on_video_canplay(video)
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'ended',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_ENDED)
        }

        that.on_video_ended(video)
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'loadeddata',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_LOADED)
        }
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'error',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_ERROR)
        }
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'timeupdate',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_TIME)
        }
      },
      {
        passive: !0
      }
    )

    video.addEventListener(
      'seeking',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_SEEK)
        }
      },
      {
        passive: !0
      }
    )
  }

  // if (/iPad/.test(window.navigator.userAgent)) {
  //   this.elem.querySelector('.btn-mute').classList.add('hide')
  //   this.elem.querySelector('.control-volume-slider').classList.add('hide')
  //   this.elem.querySelector('.btn-fullscreen').classList.add('hide')
  //   this.elem.querySelector('.control-bar').classList.add('hide')
  // } else {
  //   this.elem.querySelector('.btn-mute').classList.add('hide')
  //   this.elem.querySelector('.control-volume-slider').classList.add('hide')
  //   this.elem.querySelector('.btn-fullscreen').classList.add('hide')
  //   this.elem.querySelector('.btn-repeat').classList.add('hide')
  // }
}

Player.prototype.init_video = function(url, type, preload) {
  url = url || ''
  type = type || 'video/mp4'

  var that = this,
    video = this.elem.querySelector('video')

  this.video = video

  if (!preload) {
    this.play_video()

    var source = document.createElement('source')
    dom.appendTo(source, video)
    source.setAttribute('src', url)
    source.setAttribute('type', type)

    video.addEventListener(
      'play',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_PLAY)
        }

        that.on_video_play(video)
      },
      { passive: !0 }
    )

    video.addEventListener(
      'playing',
      function() {
        that.on_video_playing(video)
      },
      { passive: !0 }
    )

    video.addEventListener(
      'pause',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_PAUSE)
        }

        that.on_video_pause(video)
      },
      { passive: !0 }
    )

    video.addEventListener(
      'waiting',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_WAITING)
        }

        that.on_video_waiting(video)
      },
      { passive: !0 }
    )

    video.addEventListener(
      'loadstart',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_LOADSTART)
        }

        that.on_video_loadstart(video)
      },
      { passive: !0 }
    )

    video.addEventListener(
      'canplay',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_CANPLAY)
        }

        that.on_video_canplay(video)
      },
      { passive: !0 }
    )

    video.addEventListener(
      'ended',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_ENDED)
        }

        that.on_video_canplay(video)
      },
      { passive: !0 }
    )

    video.addEventListener(
      'loadeddata',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_LOADED)
        }
      },
      { passive: !0 }
    )

    video.addEventListener(
      'error',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_ERROR)
        }
      },
      { passive: !0 }
    )

    video.addEventListener(
      'timeupdate',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_TIME)
        }
      },
      { passive: !0 }
    )

    video.addEventListener(
      'seeking',
      function() {
        if (that.options.eventBus) {
          that.options.eventBus.dispatch(Player.E_VIDEO_SEEK)
        }
      },
      { passive: !0 }
    )
  }

  this.timer = setInterval(function() {
    that.on_timer_interval()
  }, 100)

  this.set_video_state(Player.V_READY)
}

Player.prototype.on_video_play = function() {
  this.set_video_state(Player.V_PLAY)
}

Player.prototype.on_video_playing = function() {
  this.set_video_state(Player.V_PLAYING)
}

Player.prototype.on_video_pause = function() {
  this.set_video_state(Player.V_PAUSE)
}

Player.prototype.on_video_waiting = function() {
  this.set_video_state(Player.V_BUFF)
}

Player.prototype.on_video_loadstart = function() {
  this.set_video_state(Player.V_BUFF)
}

Player.prototype.on_video_canplay = function() {
  this.set_video_state(Player.V_CANPLAY)
}

Player.prototype.on_video_ended = function() {
  this.set_video_state(Player.V_COMPLETE)
}

Player.prototype.set_video_state = function(state) {
  var video_state = this.video_state

  if (video_state !== state && this.elem.querySelector('.state-icon i')) {
    this.elem.querySelector('.state-icon i').classList.remove('active')

    switch (state) {
      case Player.V_READY:
        if (this.options.eventBus) {
          this.options.eventBus.dispatch(Player.E_VIDEO_READY, {
            paly: this.play.bind(this),
            pause: this.pause.bind(this),
            seek: this.seek.bind(this),
            getDuration: this.getDuration.bind(this),
            isFullscreen: this.isFullscreen
          })
        }
        break
      case Player.V_PLAY:
        this.elem.querySelector('.btn-play').classList.add('hide')
        this.elem.querySelector('.btn-pause').classList.remove('hide')
        this.elem.querySelector('.player-box').classList.add('full')
        this.elem
          .querySelector('.state-icon i.play-icon')
          .classList.add('active')
        this.elem
          .querySelector('.state-icon i.pause-icon')
          .classList.remove('active')

        if (this.firstBuff) {
          this.firstBuff = false
          this.set_control_bar_visible(false)
        } else {
          this.set_control_bar_visible(false, this.control_bar_timer_delay)
        }
        break
      case Player.V_PAUSE:
        this.elem.querySelector('.btn-pause').classList.add('hide')
        this.elem.querySelector('.btn-play').classList.remove('hide')
        this.elem
          .querySelector('.state-icon i.pause-icon')
          .classList.add('active')
        this.elem
          .querySelector('.state-icon i.play-icon')
          .classList.remove('active')
        break
      case Player.V_BUFF:
        if (void 0 === this.firstBuff) {
          this.firstBuff = true
        }

        this.hidePlayIcon = true
        this.elem.querySelector('.state-icon').classList.remove('hide')
        this.elem
          .querySelector('.state-icon i.buff-icon')
          .classList.add('active')
        break
      case Player.V_COMPLETE:
        this.elem
          .querySelector('.state-icon i.pause-icon')
          .classList.add('active')
        break
      case Player.V_CANPLAY:
        if (dom.hasClass('.load-layer', 'hide')) {
          this.elem.querySelector('.load-layer').click()
        }

        this.elem.querySelector('.btn-play').classList.add('hide')
        this.elem.querySelector('.btn-pause').classList.remove('hide')
        this.elem.querySelector('.player-box').classList.add('full')
        this.elem
          .querySelector('.state-icon i.play-icon')
          .classList.remove('active')
        this.elem
          .querySelector('.state-icon i.pause-icon')
          .classList.add('active')
        if (this.firstBuff) {
          this.firstBuff = false
          this.set_control_bar_visible(false)
        } else {
          this.set_control_bar_visible(false, this.control_bar_timer_delay)
        }
        break
      case Player.V_PLAYING:
        this.set_control_bar_visible(false)
        this.elem
          .querySelector('.state-icon i.play-icon')
          .classList.add('active')
        this.elem
          .querySelector('.state-icon i.pause-icon')
          .classList.remove('active')
        break
    }

    if (state !== Player.V_PLAY) {
      this.elem.querySelector('.player-box').classList.remove('full')
      this.set_control_bar_visible(!0)
    }

    this.video_state = state
    this.on_state_change(this.video_state, video_state)
  }
}

Player.prototype.on_state_change = function(new_state, old_state) {
  this.options.on_state_change &&
    this.options.on_state_change(new_state, old_state)
}

Player.prototype.get_video_state = function() {
  return this.video_state
}

Player.prototype.start_video = function() {
  var options = this.options,
    that = this

  this.elem.querySelector('.load-layer').classList.add('hide')
  this.init_video(options.video_url, options.video_type, options.preload)
  options.autoplay || this.play_video()
  this.elem.querySelector('video').style.display = 'inline'
  this.set_control_bar_visible(!1)

  dom.addEvent(
    this.elem.querySelector('.state-icon i.play-icon'),
    'click',
    function() {
      if (dom.hasClass(this, 'active')) {
        that.pause_video()
      }
    }
  )

  dom.addEvent(
    this.elem.querySelector('.state-icon i.pause-icon'),
    'click',
    function() {
      that.play_video()
    }
  )
}

Player.prototype.pause_video = function() {
  var video = this.video
  if (video) {
    video.pause()
  }
}

Player.prototype.play_video = function() {
  var video = this.video
  var userAgent = window.navigator.userAgent
  var media = document.querySelectorAll('video')

  if (video) {
    if (
      userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ||
      userAgent.indexOf('iPad') > -1
    ) {
      var i = 0
      for (; i < media.length; i++) {
        media[i].pause()
      }
    }

    video.play()
  }
}

Player.prototype.set_duration = function(d) {
  this.duration = d
}

Player.prototype.seek_video = function(currentTime) {
  if (this.video) {
    currentTime = Math.max(0, currentTime)

    if (!this.options.max_duration) {
      currentTime = Math.min(currentTime, this.video_duration() - 0.5)
    }

    this.video.pause()
    this.video.currentTime = currentTime
    this.video.play()
  }
}

Player.prototype.set_volume = function(v) {
  this.volume = v

  if (this.video) {
    this.video.volume = v
  }
}

Player.prototype.video_time = function() {
  return this.currentTime
}

Player.prototype.video_duration = function() {
  return this.duration
}

Player.prototype.on_timer_interval = function() {
  this.update_time(this.video.currentTime, this.video.duration)
}

Player.prototype.on_slider_seek = function(currentTime) {
  this.seek_video(currentTime)
}

Player.prototype.on_volume_slider_seek = function(v) {
  this.set_volume(v / 100)
}

Player.prototype.update_time = function(value, duration) {
  if (duration != this.duration) {
    this.maxDuration =
      this.options.max_duration > 0
        ? Math.min(this.options.max_duration, duration)
        : duration

    var d = this.duration
    this.duration = duration

    this.sliderCtrl.setMax(this.maxDuration)

    if (
      Math.floor(d) !== Math.floor(this.maxDuration) &&
      this.elem.querySelector('.time-total-text')
    ) {
      this.elem.querySelector('.time-total-text').innerText = dom.formatTime(
        this.maxDuration
      )
    }
  }

  if (this.currentLessThanMaxDurationStatus && value > this.maxDuration) {
    this.currentLessThanMaxDurationStatus = false
    this.seek_video(this.duration - 0.1)
  } else {
    value < this.maxDuration &&
      !this.currentLessThanMaxDurationStatus &&
      this.options.max_duration > 0 &&
      (this.currentLessThanMaxDurationStatus = true)
  }

  if (value !== this.currentTime) {
    var t = this.currentTime
    this.currentTime = value
    this.sliderCtrl.setValue(value, false)

    if (Math.floor(t) !== Math.floor(value)) {
      this.elem.querySelector('.time-current-text').innerText = dom.formatTime(
        value > this.maxDuration ? this.maxDuration : value
      )
    }
  }
}

Player.prototype.to_wide_screen = function() {
  switch (this.screen_state) {
    case Player.UI_NORMAL:
      this.elem.querySelector('.player-box').classList.add('wide')
      break
    case Player.UI_FULL:
      this.elem.querySelector('.player-box').classList.remove('full')
      this.set_control_bar_visible(true)
      player.exitFullscreen()
      break
  }

  try {
    window.player_fullwin(!0)
  } catch (t) {}

  this.elem.querySelector('.btn-widescreen').classList.add('active')
  this.screen_state = Player.UI_WIDE
}

Player.prototype.to_normal_screen = function() {
  switch (this.screen_state) {
    case Player.UI_FULL:
      Player.exitFullscreen()
      this.elem.querySelector('.player-box').classList.remove('full')
      this.set_control_bar_visible(!0)
    case Player.UI_WIDE:
      this.elem.querySelector('.player-box').classList.remove('wide')
  }

  try {
    window.player_fullwin(!1)
  } catch (e) {}

  this.elem.querySelector('.btn-widescreen').classList.remove('active')
  this.screen_state = Player.UI_NORMAL
}

Player.prototype.to_full_screen = function() {
  switch (this.screen_state) {
    case Player.UI_NORMAL:
      this.elem.querySelector('.player-box').classList.add('wide')
      break
    case Player.UI_WIDE:
      this.elem.querySelector('.player-box').classList.add('full')
      Player.requestFullscreen(this.elem)
      break
  }
  try {
    window.player_fullwin(!0)
  } catch (e) {}

  this.elem.querySelector('.btn-widescreen').classList.remove('active')
  this.screen_state = Player.UI_FULL
}

Player.prototype.on_fullscreen_change = function() {
  Player.isFullscreen() || this.to_normal_screen()
}

Player.prototype.on_display_mousemove = function(e) {
  if (this.screen_state === Player.UI_FULL) {
    if (e.pageY >= (2 * this.elem.clientHeight) / 3) {
      this.control_bar_visible || this.set_control_bar_visible(!0)
    } else {
      this.control_bar_visible && this.set_control_bar_visible(!1)
    }
  }
}

Player.prototype.on_display_click = function(e) {
  if (e.target === this.elem.querySelector('.display')) {
    this.set_control_bar_visible(!this.control_bar_visible)
  }

  this.get_video_state() === Player.V_PLAY &&
    this.set_control_bar_visible(!1, this.control_bar_timer_delay)
}

Player.prototype.on_play_btn_click = function() {
  this.play_video()
}

Player.prototype.on_keydown = function(e) {
  switch (e.which) {
    case 32:
      this.video_state != Player.V_PLAY ? this.play_video() : this.pause_video()
      break
    case 37:
      this.seek_video(this.video_time() - 5)
      break
    case 38:
      break
    case 39:
      this.seek_video(this.video_time() + 5)
  }
}

Player.prototype.on_pause_btn_click = function() {
  this.pause_video()
}

Player.prototype.on_share_btn_click = function() {
  'function' == typeof window.on_share_btn_click &&
    window.on_share_btn_click.call(this, t)
}

Player.prototype.on_repeat_btn_click = function() {
  if (this.video) {
    if (this.video.loop) {
      this.video.loop = !1
      this.elem.querySelector('.btn-repeat').classList.remove('active')
    } else {
      this.elem.querySelector('.btn-repeat').classList.add('active')
    }
  }
}

Player.prototype.on_mute_btn_click = function() {
  this.elem.querySelector('.btn-mute').classList.add('hide')
  this.elem.querySelector('.btn-unmute').classList.remove('hide')
  this.elem.querySelector('.control-volume-slider').classList.add('mute')
  this.video && (this.video.muted = !0)
}

Player.prototype.on_unmute_btn_click = function() {
  this.elem.querySelector('.btn-unmute').classList.add('hide')
  this.elem.querySelector('.btn-mute').classList.remove('hide')
  this.elem.querySelector('.control-volume-slider').classList.remove('mute')
  this.video && (this.video.muted = !1)
}

Player.prototype.set_control_bar_visible = function(visible, delay) {
  var that = this
  clearTimeout(this.control_bar_timer)
  if (visible != this.control_bar_visible) {
    if (visible) {
      this.elem.querySelector('.control-bar').classList.remove('hide')
      this.elem.querySelector('.state-icon').classList.remove('hide')
      this.control_bar_visible = !0
    } else {
      if (this.hidePlayIcon) {
        this.hidePlayIcon = !1
      } else {
        this.elem.querySelector('.state-icon').classList.remove('hide')
      }

      this.control_bar_visible = setTimeout(function() {
        that.elem.querySelector('.control-bar').classList.add('hide')
        that.elem.querySelector('.state-icon').classList.add('hide')
        that.control_bar_visible = !1
      }, delay || 0)
    }
  }
}

module.exports = Player

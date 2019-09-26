var dom = require('./dom.js')

function Player(elem, options) {}

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

Player.isFullscreen = function() {}

Player.requestFullscreen = function() {}

Player.exitFullscreen = function() {}

Player.prototype.constructor = Player

Player.prototype.play = function() {}

Player.prototype.seek = function(t) {}

Player.prototype.pause = function() {}

Player.prototype.getDuration = function() {}

Player.prototype.isFullscreen = function() {}

Player.prototype.init_ui = function(options) {
  var that = this
  options = options || {}

  this.elem.querySelector('.btn-widescreen').onclick = function() {}

  this.elem.querySelector('.btn-fullscreen').onclick = function() {}

  function fullscreenChangeListener() {}

  document.addEventListener(
    'webkitfullscreenchange',
    fullscreenChangeListener,
    !1
  )
  document.addEventListener('mozfullscreenchange', fullscreenChangeListener, !1)
  document.addEventListener('MSFullscreenChange', fullscreenChangeListener, !1)
  document.addEventListener('fullscreenchange', fullscreenChangeListener, !1)

  this.elem.querySelector('.display').onmousemove = function() {}

  this.elem.querySelector('.display').onclick = function() {}

  this.elem.querySelector('.btn-play').onclick = function() {}

  this.elem.querySelector('.btn-pause').onclick = function() {}

  this.elem.querySelector('.btn-repeat').onclick = function(t) {}

  this.elem.querySelector('.btn-mute').onclick = function(t) {}

  this.elem.querySelector('.btn-unmute').onclick = function(t) {}

  var layer = this.elem.querySelector('.load-layer')
  if (options.video_url) {
    options.img && layer.querySelector('img').setAttribute('src', options.img)
    layer.onclick = function() {}
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

    video.addEventListener('play', function() {})

    video.addEventListener('playing', function() {})

    video.addEventListener('pause', function() {})

    video.addEventListener('waiting', function() {})

    video.addEventListener('loadstart', function() {})

    video.addEventListener('canplay', function() {})

    video.addEventListener('ended', function() {})

    video.addEventListener('loadeddata', function() {})

    video.addEventListener('error', function() {})

    video.addEventListener('timeupdate', function() {})

    video.addEventListener('seeking', function() {})
  }

  if (/iPad/.test(window.navigator.userAgent)) {
    this.elem.querySelector('.btn-mute').classList.add('hide')
    this.elem.querySelector('.control-volume-slider').classList.add('hide')
    this.elem.querySelector('.btn-fullscreen').classList.add('hide')
    this.elem.querySelector('.control-bar').classList.add('hide')
  } else {
    this.elem.querySelector('.btn-mute').classList.add('hide')
    this.elem.querySelector('.control-volume-slider').classList.add('hide')
    this.elem.querySelector('.btn-fullscreen').classList.add('hide')
    this.elem.querySelector('.btn-repeat').classList.add('hide')
  }
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

    video.addEventListener('play', function() {}, { passive: !0 })

    video.addEventListener('playing', function() {}, { passive: !0 })

    video.addEventListener('waiting', function() {}, { passive: !0 })

    video.addEventListener('loadstart', function() {}, { passive: !0 })

    video.addEventListener('canplay', function() {}, { passive: !0 })

    video.addEventListener('ended', function() {}, { passive: !0 })

    video.addEventListener('loadeddata', function() {}, { passive: !0 })

    video.addEventListener('error', function() {}, { passive: !0 })

    video.addEventListener('timeupdate', function() {}, { passive: !0 })

    video.addEventListener('seeking', function() {}, { passive: !0 })
  }

  this.timer = setInterval(function() {}, 100)

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
        break
      case Player.V_PLAY:
        break
      case Player.V_PAUSE:
        break
      case Player.V_BUFF:
        break
      case Player.V_COMPLETE:
        break
      case Player.V_CANPLAY:
        break
      case Player.V_PLAYING:
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
    function() {}
  )

  dom.addEvent(
    this.elem.querySelector('.state-icon i.pause-icon'),
    'click',
    function() {}
  )
}

Player.prototype.pause_video = function() {}

Player.prototype.play_video = function() {}

Player.prototype.set_duration = function() {}

Player.prototype.seek_video = function() {}

Player.prototype.set_volume = function() {}
Player.prototype.video_time = function() {}
Player.prototype.video_duration = function() {}
Player.prototype.on_timer_interval = function() {}
Player.prototype.on_slider_seek = function() {}
Player.prototype.on_volume_slider_seek = function() {}
Player.prototype.update_time = function() {}
Player.prototype.to_wide_screen = function() {}
Player.prototype.to_normal_screen = function() {}
Player.prototype.to_full_screen = function() {}
Player.prototype.on_fullscreen_change = function() {}
Player.prototype.on_display_mousemove = function() {}
Player.prototype.on_display_click = function() {}
Player.prototype.on_play_btn_click = function() {}
Player.prototype.on_send_btn_click = function() {}
Player.prototype.on_keydown = function() {}
Player.prototype.on_pause_btn_click = function() {}
Player.prototype.on_share_btn_click = function() {}
Player.prototype.on_repeat_btn_click = function() {}
Player.prototype.on_mute_btn_click = function() {}
Player.prototype.on_unmute_btn_click = function() {}
Player.prototype.set_control_bar_visible = function() {}

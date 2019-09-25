function Player(elem, options) {}

Player.UI_NORMAL = 0

Player.isFullscreen = function() {}

Player.requestFullscreen = function() {}

Player.exitFullscreen = function() {}

Player.prototype.constructor = Player

Player.prototype.play = function() {}

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
}

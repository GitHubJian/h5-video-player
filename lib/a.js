Swiper.prototype.slideTo = function(index, speed, runCallbacks) {
  index === void 0 && (index = 0)
  speed === void 0 && (speed = 300)
  runCallbacks === void 0 && (runCallbacks = true)
  var that = this
  var slideIndex = index
  slideIndex < 0 && (slideIndex = 0)

  var snapGrid = that.snapGrid
  var previousIndex = that.previousIndex
  var activeIndex = that.activeIndex
  var rtl = that.rtlTranslate
  var wrapperEl = that.wrapperEl

  var snapIndex = slideIndex

  var translate = -snapGrid[snapIndex]
  that.updateProgress(translate)

  // Update Index

  if (speed === 0) {
    that.setTransition(0)
    that.setTranslate(translate)
    that.updateActiveIndex(slideIndex)
    that.transitionStart(runCallbacks, direction)
    that.transitionEnd(runCallbacks, direction)
  } else {
    that.setTransition(speed)
    that.setTranslate(translate)
    that.updateActiveIndex(slideIndex)
    that.transitionStart(runCallbacks, direction)
    if (!that.animating) {
      that.animating = true
      if (!that.onSlideToWrapperTransitionEnd) {
        that.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!that || that.destroyed) {
            return
          }
          if (e.target !== this) {
            return
          }
          that.$wrapperEl[0].removeEventListener(
            'transitionend',
            that.onSlideToWrapperTransitionEnd
          )
          that.$wrapperEl[0].removeEventListener(
            'webkitTransitionEnd',
            that.onSlideToWrapperTransitionEnd
          )
          that.onSlideToWrapperTransitionEnd = null
          delete that.onSlideToWrapperTransitionEnd
          that.transitionEnd(runCallbacks, direction)
        }
      }
      that.$wrapperEl[0].addEventListener(
        'transitionend',
        swiper.onSlideToWrapperTransitionEnd
      )
      that.$wrapperEl[0].addEventListener(
        'webkitTransitionEnd',
        swiper.onSlideToWrapperTransitionEnd
      )
    }
  }

  return true
}

Swiper.prototype.updateSize = function() {
  var that = this,
    width,
    height,
    $el = this.$el

  if ('undefined' !== typeof that.params.width) {
    width = that.params.width
  } else {
    width = $el[0].clientWidth
  }

  if ('undefined' !== typeof that.params.height) {
    height = that.params.height
  } else {
    height = $el[0].clientHeight
  }

  that.width = width
  that.height = height
  that.size = height
}

Swiper.prototype.preloadImages = function() {
  var that = this
}

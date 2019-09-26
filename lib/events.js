function events() {
  this.listeners = {}
}

events.prototype.on = function(event, listener, scope) {
  if (void 0 !== this.listeners[event]) {
    this.listeners[event].push({
      scope: scope,
      callback: listener
    })
  } else {
    this.listeners[event] = [
      {
        scope: scope,
        callback: listener
      }
    ]
  }
}

events.prototype.off = function(event, listener, scope) {
  if (void 0 !== this.listeners[event]) {
    var len = this.listeners[event].length
    var listeners = [],
      i = 0

    for (; i < len; i++) {
      var listener = this.listeners[event][i]

      if (!(listener.scope === scope && listener.callback === listener)) {
        listeners.push(listener)
      }
    }

    this.listeners[event] = listener
  }
}

events.prototype.dispatch = function(event, args) {
  if (void 0 !== this.listeners[event]) {
    var i = 0,
      len = this.listeners[event].length

    for (; i < len; i++) {
      var subscription = this.listeners[event][i]

      if (subscription && subscription.callback) {
        subscription.callback.apply(subscription.scope, [event, args])
      }
    }
  }
}

module.exports = events

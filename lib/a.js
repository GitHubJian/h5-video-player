/* eslint-disable */
!function(t) {
  var e = {};

  function n(i) {
      if (e[i])
          return e[i].exports;
      var o = e[i] = {
          i: i,
          l: !1,
          exports: {}
      };
      return t[i].call(o.exports, o, o.exports, n),
      o.l = !0,
      o.exports
  }
  n.m = t,
  n.c = e,
  n.d = function(t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: i
      })
  }
  ,
  n.n = function(t) {
      var e = t && t.__esModule ? function() {
          return t.default
      }
      : function() {
          return t
      }
      ;
      return n.d(e, "a", e),
      e
  }
  ,
  n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
  }
  ,
  n.p = "",
  n(n.s = 52)
}([function(t, e) {
  t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(44)
    , o = n(92)
    , r = Object.prototype.toString;

  function s(t) {
      return "[object Array]" === r.call(t)
  }

  function a(t) {
      return null !== t && "object" == typeof t
  }

  function c(t) {
      return "[object Function]" === r.call(t)
  }

  function u(t, e) {
      if (null !== t && void 0 !== t)
          if ("object" != typeof t && (t = [t]),
          s(t))
              for (var n = 0, i = t.length; n < i; n++)
                  e.call(null, t[n], n, t);
          else
              for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
  }
  t.exports = {
      isArray: s,
      isArrayBuffer: function(t) {
          return "[object ArrayBuffer]" === r.call(t)
      },
      isBuffer: o,
      isFormData: function(t) {
          return "undefined" != typeof FormData && t instanceof FormData
      },
      isArrayBufferView: function(t) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
      },
      isString: function(t) {
          return "string" == typeof t
      },
      isNumber: function(t) {
          return "number" == typeof t
      },
      isObject: a,
      isUndefined: function(t) {
          return void 0 === t
      },
      isDate: function(t) {
          return "[object Date]" === r.call(t)
      },
      isFile: function(t) {
          return "[object File]" === r.call(t)
      },
      isBlob: function(t) {
          return "[object Blob]" === r.call(t)
      },
      isFunction: c,
      isStream: function(t) {
          return a(t) && c(t.pipe)
      },
      isURLSearchParams: function(t) {
          return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
      },
      isStandardBrowserEnv: function() {
          return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
      },
      forEach: u,
      merge: function t() {
          var e = {};

          function n(n, i) {
              "object" == typeof e[i] && "object" == typeof n ? e[i] = t(e[i], n) : e[i] = n
          }
          for (var i = 0, o = arguments.length; i < o; i++)
              u(arguments[i], n);
          return e
      },
      extend: function(t, e, n) {
          return u(e, function(e, o) {
              t[o] = n && "function" == typeof e ? i(e, n) : e
          }),
          t
      },
      trim: function(t) {
          return t.replace(/^\s*/, "").replace(/\s*$/, "")
      }
  }
}
, function(t, e, n) {
  var i = n(5)
    , o = n(9)
    , r = n(8);
  t.exports = function(t, e) {
      var n = (o.Object || {})[t] || Object[t]
        , s = {};
      s[t] = e(n),
      i(i.S + i.F * r(function() {
          n(1)
      }), "Object", s)
  }
}
, function(t, e) {
  var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}
, function(t, e, n) {
  t.exports = !n(8)(function() {
      return 7 != Object.defineProperty({}, "a", {
          get: function() {
              return 7
          }
      }).a
  })
}
, function(t, e, n) {
  var i = n(3)
    , o = n(9)
    , r = n(18)
    , s = n(21)
    , a = n(33)
    , c = function(t, e, n) {
      var u, l, h, p, f = t & c.F, d = t & c.G, m = t & c.S, v = t & c.P, y = t & c.B, _ = d ? i : m ? i[e] || (i[e] = {}) : (i[e] || {}).prototype, b = d ? o : o[e] || (o[e] = {}), g = b.prototype || (b.prototype = {});
      for (u in d && (n = e),
      n)
          h = ((l = !f && _ && void 0 !== _[u]) ? _ : n)[u],
          p = y && l ? a(h, i) : v && "function" == typeof h ? a(Function.call, h) : h,
          _ && s(_, u, h, t & c.U),
          b[u] != h && r(b, u, p),
          v && g[u] != h && (g[u] = h)
  };
  i.core = o,
  c.F = 1,
  c.G = 2,
  c.S = 4,
  c.P = 8,
  c.B = 16,
  c.W = 32,
  c.U = 64,
  c.R = 128,
  t.exports = c
}
, function(t, e) {
  var n = {}.hasOwnProperty;
  t.exports = function(t, e) {
      return n.call(t, e)
  }
}
, function(t, e, n) {
  var i = n(11)
    , o = n(31)
    , r = n(19)
    , s = Object.defineProperty;
  e.f = n(4) ? Object.defineProperty : function(t, e, n) {
      if (i(t),
      e = r(e, !0),
      i(n),
      o)
          try {
              return s(t, e, n)
          } catch (t) {}
      if ("get"in n || "set"in n)
          throw TypeError("Accessors not supported!");
      return "value"in n && (t[e] = n.value),
      t
  }
}
, function(t, e) {
  t.exports = function(t) {
      try {
          return !!t()
      } catch (t) {
          return !0
      }
  }
}
, function(t, e) {
  var n = t.exports = {
      version: "2.5.7"
  };
  "number" == typeof __e && (__e = n)
}
, function(t, e, n) {
  var i = n(36)
    , o = n(37);
  t.exports = function(t) {
      return i(o(t))
  }
}
, function(t, e, n) {
  var i = n(0);
  t.exports = function(t) {
      if (!i(t))
          throw TypeError(t + " is not an object!");
      return t
  }
}
, function(t, e) {
  var n = 0
    , i = Math.random();
  t.exports = function(t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
  }
}
, function(t, e, n) {
  var i = n(22)("wks")
    , o = n(12)
    , r = n(3).Symbol
    , s = "function" == typeof r;
  (t.exports = function(t) {
      return i[t] || (i[t] = s && r[t] || (s ? r : o)("Symbol." + t))
  }
  ).store = i
}
, function(t, e, n) {
  var i = n(35)
    , o = n(26);
  t.exports = Object.keys || function(t) {
      return i(t, o)
  }
}
, function(t, e, n) {
  var i = n(12)("meta")
    , o = n(0)
    , r = n(6)
    , s = n(7).f
    , a = 0
    , c = Object.isExtensible || function() {
      return !0
  }
    , u = !n(8)(function() {
      return c(Object.preventExtensions({}))
  })
    , l = function(t) {
      s(t, i, {
          value: {
              i: "O" + ++a,
              w: {}
          }
      })
  }
    , h = t.exports = {
      KEY: i,
      NEED: !1,
      fastKey: function(t, e) {
          if (!o(t))
              return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
          if (!r(t, i)) {
              if (!c(t))
                  return "F";
              if (!e)
                  return "E";
              l(t)
          }
          return t[i].i
      },
      getWeak: function(t, e) {
          if (!r(t, i)) {
              if (!c(t))
                  return !0;
              if (!e)
                  return !1;
              l(t)
          }
          return t[i].w
      },
      onFreeze: function(t) {
          return u && h.NEED && c(t) && !r(t, i) && l(t),
          t
      }
  }
}
, function(t, e) {
  e.f = {}.propertyIsEnumerable
}
, function(t, e, n) {
  var i = n(37);
  t.exports = function(t) {
      return Object(i(t))
  }
}
, function(t, e, n) {
  var i = n(7)
    , o = n(20);
  t.exports = n(4) ? function(t, e, n) {
      return i.f(t, e, o(1, n))
  }
  : function(t, e, n) {
      return t[e] = n,
      t
  }
}
, function(t, e, n) {
  var i = n(0);
  t.exports = function(t, e) {
      if (!i(t))
          return t;
      var n, o;
      if (e && "function" == typeof (n = t.toString) && !i(o = n.call(t)))
          return o;
      if ("function" == typeof (n = t.valueOf) && !i(o = n.call(t)))
          return o;
      if (!e && "function" == typeof (n = t.toString) && !i(o = n.call(t)))
          return o;
      throw TypeError("Can't convert object to primitive value")
  }
}
, function(t, e) {
  t.exports = function(t, e) {
      return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
      }
  }
}
, function(t, e, n) {
  var i = n(3)
    , o = n(18)
    , r = n(6)
    , s = n(12)("src")
    , a = Function.toString
    , c = ("" + a).split("toString");
  n(9).inspectSource = function(t) {
      return a.call(t)
  }
  ,
  (t.exports = function(t, e, n, a) {
      var u = "function" == typeof n;
      u && (r(n, "name") || o(n, "name", e)),
      t[e] !== n && (u && (r(n, s) || o(n, s, t[e] ? "" + t[e] : c.join(String(e)))),
      t === i ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e],
      o(t, e, n)))
  }
  )(Function.prototype, "toString", function() {
      return "function" == typeof this && this[s] || a.call(this)
  })
}
, function(t, e, n) {
  var i = n(9)
    , o = n(3)
    , r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
  (t.exports = function(t, e) {
      return r[t] || (r[t] = void 0 !== e ? e : {})
  }
  )("versions", []).push({
      version: i.version,
      mode: n(23) ? "pure" : "global",
      copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
  })
}
, function(t, e) {
  t.exports = !1
}
, function(t, e) {
  var n = {}.toString;
  t.exports = function(t) {
      return n.call(t).slice(8, -1)
  }
}
, function(t, e, n) {
  var i = n(22)("keys")
    , o = n(12);
  t.exports = function(t) {
      return i[t] || (i[t] = o(t))
  }
}
, function(t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(t, e) {
  e.f = Object.getOwnPropertySymbols
}
, function(t, e, n) {
  var i = n(16)
    , o = n(20)
    , r = n(10)
    , s = n(19)
    , a = n(6)
    , c = n(31)
    , u = Object.getOwnPropertyDescriptor;
  e.f = n(4) ? u : function(t, e) {
      if (t = r(t),
      e = s(e, !0),
      c)
          try {
              return u(t, e)
          } catch (t) {}
      if (a(t, e))
          return o(!i.f.call(t, e), t[e])
  }
}
, function(t, e, n) {
  "use strict";
  (function(e) {
      var i = n(1)
        , o = n(94)
        , r = {
          "Content-Type": "application/x-www-form-urlencoded"
      };

      function s(t, e) {
          !i.isUndefined(t) && i.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
      }
      var a, c = {
          adapter: ("undefined" != typeof XMLHttpRequest ? a = n(46) : void 0 !== e && (a = n(46)),
          a),
          transformRequest: [function(t, e) {
              return o(e, "Content-Type"),
              i.isFormData(t) || i.isArrayBuffer(t) || i.isBuffer(t) || i.isStream(t) || i.isFile(t) || i.isBlob(t) ? t : i.isArrayBufferView(t) ? t.buffer : i.isURLSearchParams(t) ? (s(e, "application/x-www-form-urlencoded;charset=utf-8"),
              t.toString()) : i.isObject(t) ? (s(e, "application/json;charset=utf-8"),
              JSON.stringify(t)) : t
          }
          ],
          transformResponse: [function(t) {
              if ("string" == typeof t)
                  try {
                      t = JSON.parse(t)
                  } catch (t) {}
              return t
          }
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function(t) {
              return t >= 200 && t < 300
          }
      };
      c.headers = {
          common: {
              Accept: "application/json, text/plain, */*"
          }
      },
      i.forEach(["delete", "get", "head"], function(t) {
          c.headers[t] = {}
      }),
      i.forEach(["post", "put", "patch"], function(t) {
          c.headers[t] = i.merge(r)
      }),
      t.exports = c
  }
  ).call(e, n(45))
}
, function(t, e, n) {
  "use strict";
  e.c = function(t) {
      void 0 === t && (t = 0);
      var e;
      t = Math.floor(t) >> 0,
      e = ("0" + t % 60).slice(-2),
      (e = Math.floor(t / 60) + ":" + e).length < 5 && (e = "0" + e);
      return e
  }
  ,
  e.a = function(t, e) {
      var n = document.createDocumentFragment();
      if ("[object NodeList]" === Object.prototype.toString.call(t))
          for (var i = 0; i < t.length; i++)
              n.appendChild(t[i]);
      else
          n.appendChild(t);
      return e.appendChild(n),
      e
  }
  ,
  e.e = function(t, e) {
      return (" " + t.className + " ").indexOf(" " + e + " ") > -1
  }
  ,
  e.g = function(t, e, n) {
      if (t.addEventListener)
          return void t.addEventListener(e, n, !1);
      var i = "on" + e;
      if (t.attachEvent)
          return void t.attachEvent(i, n);
      var o = t[i];
      t[i] = function(t) {
          t = t || window.event,
          n.call(null, t),
          o && o.call(null, t)
      }
  }
  ,
  e.d = function(t) {
      var e = 0
        , n = 0;
      for (; t; )
          e += t.offsetTop,
          n += t.offsetLeft,
          t = t.offsetParent;
      return {
          left: n,
          top: e
      }
  }
  ,
  e.b = function(t) {
      if (!t.hasOwnProperty("offsetX")) {
          var e = 0
            , n = 0;
          if (t.offsetParent) {
              var i = t;
              do {
                  e += i.offsetLeft,
                  n += i.offsetTop
              } while (i = i.offsetParent)
          }
          t.offsetX = t.layerX - e,
          t.offsetY = t.layerY - n
      }
      return t
  }
  ,
  n.d(e, "f", function() {
      return i
  });
  var i = function() {
      var t = window.navigator.userAgent;
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
  }
}
, function(t, e, n) {
  t.exports = !n(4) && !n(8)(function() {
      return 7 != Object.defineProperty(n(32)("div"), "a", {
          get: function() {
              return 7
          }
      }).a
  })
}
, function(t, e, n) {
  var i = n(0)
    , o = n(3).document
    , r = i(o) && i(o.createElement);
  t.exports = function(t) {
      return r ? o.createElement(t) : {}
  }
}
, function(t, e, n) {
  var i = n(57);
  t.exports = function(t, e, n) {
      if (i(t),
      void 0 === e)
          return t;
      switch (n) {
      case 1:
          return function(n) {
              return t.call(e, n)
          }
          ;
      case 2:
          return function(n, i) {
              return t.call(e, n, i)
          }
          ;
      case 3:
          return function(n, i, o) {
              return t.call(e, n, i, o)
          }
      }
      return function() {
          return t.apply(e, arguments)
      }
  }
}
, function(t, e, n) {
  e.f = n(13)
}
, function(t, e, n) {
  var i = n(6)
    , o = n(10)
    , r = n(61)(!1)
    , s = n(25)("IE_PROTO");
  t.exports = function(t, e) {
      var n, a = o(t), c = 0, u = [];
      for (n in a)
          n != s && i(a, n) && u.push(n);
      for (; e.length > c; )
          i(a, n = e[c++]) && (~r(u, n) || u.push(n));
      return u
  }
}
, function(t, e, n) {
  var i = n(24);
  t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
      return "String" == i(t) ? t.split("") : Object(t)
  }
}
, function(t, e) {
  t.exports = function(t) {
      if (void 0 == t)
          throw TypeError("Can't call method on  " + t);
      return t
  }
}
, function(t, e) {
  var n = Math.ceil
    , i = Math.floor;
  t.exports = function(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t)
  }
}
, function(t, e, n) {
  var i = n(11)
    , o = n(40)
    , r = n(26)
    , s = n(25)("IE_PROTO")
    , a = function() {}
    , c = function() {
      var t, e = n(32)("iframe"), i = r.length;
      for (e.style.display = "none",
      n(65).appendChild(e),
      e.src = "javascript:",
      (t = e.contentWindow.document).open(),
      t.write("<script>document.F=Object<\/script>"),
      t.close(),
      c = t.F; i--; )
          delete c.prototype[r[i]];
      return c()
  };
  t.exports = Object.create || function(t, e) {
      var n;
      return null !== t ? (a.prototype = i(t),
      n = new a,
      a.prototype = null,
      n[s] = t) : n = c(),
      void 0 === e ? n : o(n, e)
  }
}
, function(t, e, n) {
  var i = n(7)
    , o = n(11)
    , r = n(14);
  t.exports = n(4) ? Object.defineProperties : function(t, e) {
      o(t);
      for (var n, s = r(e), a = s.length, c = 0; a > c; )
          i.f(t, n = s[c++], e[n]);
      return t
  }
}
, function(t, e, n) {
  var i = n(10)
    , o = n(42).f
    , r = {}.toString
    , s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  t.exports.f = function(t) {
      return s && "[object Window]" == r.call(t) ? function(t) {
          try {
              return o(t)
          } catch (t) {
              return s.slice()
          }
      }(t) : o(i(t))
  }
}
, function(t, e, n) {
  var i = n(35)
    , o = n(26).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function(t) {
      return i(t, o)
  }
}
, function(t, e, n) {
  t.exports = n(91)
}
, function(t, e, n) {
  "use strict";
  t.exports = function(t, e) {
      return function() {
          for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
              n[i] = arguments[i];
          return t.apply(e, n)
      }
  }
}
, function(t, e) {
  var n, i, o = t.exports = {};

  function r() {
      throw new Error("setTimeout has not been defined")
  }

  function s() {
      throw new Error("clearTimeout has not been defined")
  }

  function a(t) {
      if (n === setTimeout)
          return setTimeout(t, 0);
      if ((n === r || !n) && setTimeout)
          return n = setTimeout,
          setTimeout(t, 0);
      try {
          return n(t, 0)
      } catch (e) {
          try {
              return n.call(null, t, 0)
          } catch (e) {
              return n.call(this, t, 0)
          }
      }
  }
  !function() {
      try {
          n = "function" == typeof setTimeout ? setTimeout : r
      } catch (t) {
          n = r
      }
      try {
          i = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (t) {
          i = s
      }
  }();
  var c, u = [], l = !1, h = -1;

  function p() {
      l && c && (l = !1,
      c.length ? u = c.concat(u) : h = -1,
      u.length && f())
  }

  function f() {
      if (!l) {
          var t = a(p);
          l = !0;
          for (var e = u.length; e; ) {
              for (c = u,
              u = []; ++h < e; )
                  c && c[h].run();
              h = -1,
              e = u.length
          }
          c = null,
          l = !1,
          function(t) {
              if (i === clearTimeout)
                  return clearTimeout(t);
              if ((i === s || !i) && clearTimeout)
                  return i = clearTimeout,
                  clearTimeout(t);
              try {
                  i(t)
              } catch (e) {
                  try {
                      return i.call(null, t)
                  } catch (e) {
                      return i.call(this, t)
                  }
              }
          }(t)
      }
  }

  function d(t, e) {
      this.fun = t,
      this.array = e
  }

  function m() {}
  o.nextTick = function(t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++)
              e[n - 1] = arguments[n];
      u.push(new d(t,e)),
      1 !== u.length || l || a(f)
  }
  ,
  d.prototype.run = function() {
      this.fun.apply(null, this.array)
  }
  ,
  o.title = "browser",
  o.browser = !0,
  o.env = {},
  o.argv = [],
  o.version = "",
  o.versions = {},
  o.on = m,
  o.addListener = m,
  o.once = m,
  o.off = m,
  o.removeListener = m,
  o.removeAllListeners = m,
  o.emit = m,
  o.prependListener = m,
  o.prependOnceListener = m,
  o.listeners = function(t) {
      return []
  }
  ,
  o.binding = function(t) {
      throw new Error("process.binding is not supported")
  }
  ,
  o.cwd = function() {
      return "/"
  }
  ,
  o.chdir = function(t) {
      throw new Error("process.chdir is not supported")
  }
  ,
  o.umask = function() {
      return 0
  }
}
, function(t, e, n) {
  "use strict";
  (function(e) {
      var i = n(1)
        , o = n(95)
        , r = n(97)
        , s = n(98)
        , a = n(99)
        , c = n(47)
        , u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(100);
      t.exports = function(t) {
          return new Promise(function(l, h) {
              var p = t.data
                , f = t.headers;
              i.isFormData(p) && delete f["Content-Type"];
              var d = new XMLHttpRequest
                , m = "onreadystatechange"
                , v = !1;
              if ("test" === e.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials"in d || a(t.url) || (d = new window.XDomainRequest,
              m = "onload",
              v = !0,
              d.onprogress = function() {}
              ,
              d.ontimeout = function() {}
              ),
              t.auth) {
                  var y = t.auth.username || ""
                    , _ = t.auth.password || "";
                  f.Authorization = "Basic " + u(y + ":" + _)
              }
              if (d.open(t.method.toUpperCase(), r(t.url, t.params, t.paramsSerializer), !0),
              d.timeout = t.timeout,
              d[m] = function() {
                  if (d && (4 === d.readyState || v) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                      var e = "getAllResponseHeaders"in d ? s(d.getAllResponseHeaders()) : null
                        , n = {
                          data: t.responseType && "text" !== t.responseType ? d.response : d.responseText,
                          status: 1223 === d.status ? 204 : d.status,
                          statusText: 1223 === d.status ? "No Content" : d.statusText,
                          headers: e,
                          config: t,
                          request: d
                      };
                      o(l, h, n),
                      d = null
                  }
              }
              ,
              d.onerror = function() {
                  h(c("Network Error", t, null, d)),
                  d = null
              }
              ,
              d.ontimeout = function() {
                  h(c("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", d)),
                  d = null
              }
              ,
              i.isStandardBrowserEnv()) {
                  var b = n(101)
                    , g = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? b.read(t.xsrfCookieName) : void 0;
                  g && (f[t.xsrfHeaderName] = g)
              }
              if ("setRequestHeader"in d && i.forEach(f, function(t, e) {
                  void 0 === p && "content-type" === e.toLowerCase() ? delete f[e] : d.setRequestHeader(e, t)
              }),
              t.withCredentials && (d.withCredentials = !0),
              t.responseType)
                  try {
                      d.responseType = t.responseType
                  } catch (e) {
                      if ("json" !== t.responseType)
                          throw e
                  }
              "function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress),
              "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress),
              t.cancelToken && t.cancelToken.promise.then(function(t) {
                  d && (d.abort(),
                  h(t),
                  d = null)
              }),
              void 0 === p && (p = null),
              d.send(p)
          }
          )
      }
  }
  ).call(e, n(45))
}
, function(t, e, n) {
  "use strict";
  var i = n(96);
  t.exports = function(t, e, n, o, r) {
      var s = new Error(t);
      return i(s, e, n, o, r)
  }
}
, function(t, e, n) {
  "use strict";
  t.exports = function(t) {
      return !(!t || !t.__CANCEL__)
  }
}
, function(t, e, n) {
  "use strict";

  function i(t) {
      this.message = t
  }
  i.prototype.toString = function() {
      return "Cancel" + (this.message ? ": " + this.message : "")
  }
  ,
  i.prototype.__CANCEL__ = !0,
  t.exports = i
}
, function(t, e, n) {
  "use strict";
  var i = Object.prototype.hasOwnProperty
    , o = function() {
      for (var t = [], e = 0; e < 256; ++e)
          t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
      return t
  }()
    , r = function(t, e) {
      for (var n = e && e.plainObjects ? Object.create(null) : {}, i = 0; i < t.length; ++i)
          void 0 !== t[i] && (n[i] = t[i]);
      return n
  };
  t.exports = {
      arrayToObject: r,
      assign: function(t, e) {
          return Object.keys(e).reduce(function(t, n) {
              return t[n] = e[n],
              t
          }, t)
      },
      combine: function(t, e) {
          return [].concat(t, e)
      },
      compact: function(t) {
          for (var e = [{
              obj: {
                  o: t
              },
              prop: "o"
          }], n = [], i = 0; i < e.length; ++i)
              for (var o = e[i], r = o.obj[o.prop], s = Object.keys(r), a = 0; a < s.length; ++a) {
                  var c = s[a]
                    , u = r[c];
                  "object" == typeof u && null !== u && -1 === n.indexOf(u) && (e.push({
                      obj: r,
                      prop: c
                  }),
                  n.push(u))
              }
          return function(t) {
              for (; t.length > 1; ) {
                  var e = t.pop()
                    , n = e.obj[e.prop];
                  if (Array.isArray(n)) {
                      for (var i = [], o = 0; o < n.length; ++o)
                          void 0 !== n[o] && i.push(n[o]);
                      e.obj[e.prop] = i
                  }
              }
          }(e),
          t
      },
      decode: function(t, e, n) {
          var i = t.replace(/\+/g, " ");
          if ("iso-8859-1" === n)
              return i.replace(/%[0-9a-f]{2}/gi, unescape);
          try {
              return decodeURIComponent(i)
          } catch (t) {
              return i
          }
      },
      encode: function(t, e, n) {
          if (0 === t.length)
              return t;
          var i = "string" == typeof t ? t : String(t);
          if ("iso-8859-1" === n)
              return escape(i).replace(/%u[0-9a-f]{4}/gi, function(t) {
                  return "%26%23" + parseInt(t.slice(2), 16) + "%3B"
              });
          for (var r = "", s = 0; s < i.length; ++s) {
              var a = i.charCodeAt(s);
              45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 ? r += i.charAt(s) : a < 128 ? r += o[a] : a < 2048 ? r += o[192 | a >> 6] + o[128 | 63 & a] : a < 55296 || a >= 57344 ? r += o[224 | a >> 12] + o[128 | a >> 6 & 63] + o[128 | 63 & a] : (s += 1,
              a = 65536 + ((1023 & a) << 10 | 1023 & i.charCodeAt(s)),
              r += o[240 | a >> 18] + o[128 | a >> 12 & 63] + o[128 | a >> 6 & 63] + o[128 | 63 & a])
          }
          return r
      },
      isBuffer: function(t) {
          return null !== t && void 0 !== t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
      },
      isRegExp: function(t) {
          return "[object RegExp]" === Object.prototype.toString.call(t)
      },
      merge: function t(e, n, o) {
          if (!n)
              return e;
          if ("object" != typeof n) {
              if (Array.isArray(e))
                  e.push(n);
              else {
                  if ("object" != typeof e)
                      return [e, n];
                  (o && (o.plainObjects || o.allowPrototypes) || !i.call(Object.prototype, n)) && (e[n] = !0)
              }
              return e
          }
          if ("object" != typeof e)
              return [e].concat(n);
          var s = e;
          return Array.isArray(e) && !Array.isArray(n) && (s = r(e, o)),
          Array.isArray(e) && Array.isArray(n) ? (n.forEach(function(n, r) {
              i.call(e, r) ? e[r] && "object" == typeof e[r] ? e[r] = t(e[r], n, o) : e.push(n) : e[r] = n
          }),
          e) : Object.keys(n).reduce(function(e, r) {
              var s = n[r];
              return i.call(e, r) ? e[r] = t(e[r], s, o) : e[r] = s,
              e
          }, s)
      }
  }
}
, function(t, e, n) {
  "use strict";
  var i = String.prototype.replace
    , o = /%20/g;
  t.exports = {
      default: "RFC3986",
      formatters: {
          RFC1738: function(t) {
              return i.call(t, o, "+")
          },
          RFC3986: function(t) {
              return t
          }
      },
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
  }
}
, function(t, e, n) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
      value: !0
  });
  var i = n(53)
    , o = (n.n(i),
  n(54))
    , r = (n.n(o),
  n(55))
    , s = (n.n(r),
  n(88));
  n.n(s),
  n(89)
}
, function(t, e) {}
, function(t, e) {}
, function(t, e, n) {
  n(56),
  n(66),
  n(67),
  n(68),
  n(69),
  n(70),
  n(72),
  n(73),
  n(74),
  n(75),
  n(76),
  n(77),
  n(78),
  n(79),
  n(80),
  n(82),
  n(84),
  n(86),
  t.exports = n(9).Object
}
, function(t, e, n) {
  "use strict";
  var i = n(3)
    , o = n(6)
    , r = n(4)
    , s = n(5)
    , a = n(21)
    , c = n(15).KEY
    , u = n(8)
    , l = n(22)
    , h = n(58)
    , p = n(12)
    , f = n(13)
    , d = n(34)
    , m = n(59)
    , v = n(60)
    , y = n(64)
    , _ = n(11)
    , b = n(0)
    , g = n(10)
    , w = n(19)
    , E = n(20)
    , S = n(39)
    , x = n(41)
    , O = n(28)
    , L = n(7)
    , A = n(14)
    , T = O.f
    , k = L.f
    , j = x.f
    , C = i.Symbol
    , D = i.JSON
    , F = D && D.stringify
    , I = f("_hidden")
    , P = f("toPrimitive")
    , q = {}.propertyIsEnumerable
    , N = l("symbol-registry")
    , R = l("symbols")
    , B = l("op-symbols")
    , V = Object.prototype
    , U = "function" == typeof C
    , M = i.QObject
    , W = !M || !M.prototype || !M.prototype.findChild
    , z = r && u(function() {
      return 7 != S(k({}, "a", {
          get: function() {
              return k(this, "a", {
                  value: 7
              }).a
          }
      })).a
  }) ? function(t, e, n) {
      var i = T(V, e);
      i && delete V[e],
      k(t, e, n),
      i && t !== V && k(V, e, i)
  }
  : k
    , H = function(t) {
      var e = R[t] = S(C.prototype);
      return e._k = t,
      e
  }
    , G = U && "symbol" == typeof C.iterator ? function(t) {
      return "symbol" == typeof t
  }
  : function(t) {
      return t instanceof C
  }
    , Y = function(t, e, n) {
      return t === V && Y(B, e, n),
      _(t),
      e = w(e, !0),
      _(n),
      o(R, e) ? (n.enumerable ? (o(t, I) && t[I][e] && (t[I][e] = !1),
      n = S(n, {
          enumerable: E(0, !1)
      })) : (o(t, I) || k(t, I, E(1, {})),
      t[I][e] = !0),
      z(t, e, n)) : k(t, e, n)
  }
    , K = function(t, e) {
      _(t);
      for (var n, i = v(e = g(e)), o = 0, r = i.length; r > o; )
          Y(t, n = i[o++], e[n]);
      return t
  }
    , X = function(t) {
      var e = q.call(this, t = w(t, !0));
      return !(this === V && o(R, t) && !o(B, t)) && (!(e || !o(this, t) || !o(R, t) || o(this, I) && this[I][t]) || e)
  }
    , Q = function(t, e) {
      if (t = g(t),
      e = w(e, !0),
      t !== V || !o(R, e) || o(B, e)) {
          var n = T(t, e);
          return !n || !o(R, e) || o(t, I) && t[I][e] || (n.enumerable = !0),
          n
      }
  }
    , J = function(t) {
      for (var e, n = j(g(t)), i = [], r = 0; n.length > r; )
          o(R, e = n[r++]) || e == I || e == c || i.push(e);
      return i
  }
    , $ = function(t) {
      for (var e, n = t === V, i = j(n ? B : g(t)), r = [], s = 0; i.length > s; )
          !o(R, e = i[s++]) || n && !o(V, e) || r.push(R[e]);
      return r
  };
  U || (a((C = function() {
      if (this instanceof C)
          throw TypeError("Symbol is not a constructor!");
      var t = p(arguments.length > 0 ? arguments[0] : void 0)
        , e = function(n) {
          this === V && e.call(B, n),
          o(this, I) && o(this[I], t) && (this[I][t] = !1),
          z(this, t, E(1, n))
      };
      return r && W && z(V, t, {
          configurable: !0,
          set: e
      }),
      H(t)
  }
  ).prototype, "toString", function() {
      return this._k
  }),
  O.f = Q,
  L.f = Y,
  n(42).f = x.f = J,
  n(16).f = X,
  n(27).f = $,
  r && !n(23) && a(V, "propertyIsEnumerable", X, !0),
  d.f = function(t) {
      return H(f(t))
  }
  ),
  s(s.G + s.W + s.F * !U, {
      Symbol: C
  });
  for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt; )
      f(Z[tt++]);
  for (var et = A(f.store), nt = 0; et.length > nt; )
      m(et[nt++]);
  s(s.S + s.F * !U, "Symbol", {
      for: function(t) {
          return o(N, t += "") ? N[t] : N[t] = C(t)
      },
      keyFor: function(t) {
          if (!G(t))
              throw TypeError(t + " is not a symbol!");
          for (var e in N)
              if (N[e] === t)
                  return e
      },
      useSetter: function() {
          W = !0
      },
      useSimple: function() {
          W = !1
      }
  }),
  s(s.S + s.F * !U, "Object", {
      create: function(t, e) {
          return void 0 === e ? S(t) : K(S(t), e)
      },
      defineProperty: Y,
      defineProperties: K,
      getOwnPropertyDescriptor: Q,
      getOwnPropertyNames: J,
      getOwnPropertySymbols: $
  }),
  D && s(s.S + s.F * (!U || u(function() {
      var t = C();
      return "[null]" != F([t]) || "{}" != F({
          a: t
      }) || "{}" != F(Object(t))
  })), "JSON", {
      stringify: function(t) {
          for (var e, n, i = [t], o = 1; arguments.length > o; )
              i.push(arguments[o++]);
          if (n = e = i[1],
          (b(e) || void 0 !== t) && !G(t))
              return y(e) || (e = function(t, e) {
                  if ("function" == typeof n && (e = n.call(this, t, e)),
                  !G(e))
                      return e
              }
              ),
              i[1] = e,
              F.apply(D, i)
      }
  }),
  C.prototype[P] || n(18)(C.prototype, P, C.prototype.valueOf),
  h(C, "Symbol"),
  h(Math, "Math", !0),
  h(i.JSON, "JSON", !0)
}
, function(t, e) {
  t.exports = function(t) {
      if ("function" != typeof t)
          throw TypeError(t + " is not a function!");
      return t
  }
}
, function(t, e, n) {
  var i = n(7).f
    , o = n(6)
    , r = n(13)("toStringTag");
  t.exports = function(t, e, n) {
      t && !o(t = n ? t : t.prototype, r) && i(t, r, {
          configurable: !0,
          value: e
      })
  }
}
, function(t, e, n) {
  var i = n(3)
    , o = n(9)
    , r = n(23)
    , s = n(34)
    , a = n(7).f;
  t.exports = function(t) {
      var e = o.Symbol || (o.Symbol = r ? {} : i.Symbol || {});
      "_" == t.charAt(0) || t in e || a(e, t, {
          value: s.f(t)
      })
  }
}
, function(t, e, n) {
  var i = n(14)
    , o = n(27)
    , r = n(16);
  t.exports = function(t) {
      var e = i(t)
        , n = o.f;
      if (n)
          for (var s, a = n(t), c = r.f, u = 0; a.length > u; )
              c.call(t, s = a[u++]) && e.push(s);
      return e
  }
}
, function(t, e, n) {
  var i = n(10)
    , o = n(62)
    , r = n(63);
  t.exports = function(t) {
      return function(e, n, s) {
          var a, c = i(e), u = o(c.length), l = r(s, u);
          if (t && n != n) {
              for (; u > l; )
                  if ((a = c[l++]) != a)
                      return !0
          } else
              for (; u > l; l++)
                  if ((t || l in c) && c[l] === n)
                      return t || l || 0;
          return !t && -1
      }
  }
}
, function(t, e, n) {
  var i = n(38)
    , o = Math.min;
  t.exports = function(t) {
      return t > 0 ? o(i(t), 9007199254740991) : 0
  }
}
, function(t, e, n) {
  var i = n(38)
    , o = Math.max
    , r = Math.min;
  t.exports = function(t, e) {
      return (t = i(t)) < 0 ? o(t + e, 0) : r(t, e)
  }
}
, function(t, e, n) {
  var i = n(24);
  t.exports = Array.isArray || function(t) {
      return "Array" == i(t)
  }
}
, function(t, e, n) {
  var i = n(3).document;
  t.exports = i && i.documentElement
}
, function(t, e, n) {
  var i = n(5);
  i(i.S, "Object", {
      create: n(39)
  })
}
, function(t, e, n) {
  var i = n(5);
  i(i.S + i.F * !n(4), "Object", {
      defineProperty: n(7).f
  })
}
, function(t, e, n) {
  var i = n(5);
  i(i.S + i.F * !n(4), "Object", {
      defineProperties: n(40)
  })
}
, function(t, e, n) {
  var i = n(10)
    , o = n(28).f;
  n(2)("getOwnPropertyDescriptor", function() {
      return function(t, e) {
          return o(i(t), e)
      }
  })
}
, function(t, e, n) {
  var i = n(17)
    , o = n(71);
  n(2)("getPrototypeOf", function() {
      return function(t) {
          return o(i(t))
      }
  })
}
, function(t, e, n) {
  var i = n(6)
    , o = n(17)
    , r = n(25)("IE_PROTO")
    , s = Object.prototype;
  t.exports = Object.getPrototypeOf || function(t) {
      return t = o(t),
      i(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
  }
}
, function(t, e, n) {
  var i = n(17)
    , o = n(14);
  n(2)("keys", function() {
      return function(t) {
          return o(i(t))
      }
  })
}
, function(t, e, n) {
  n(2)("getOwnPropertyNames", function() {
      return n(41).f
  })
}
, function(t, e, n) {
  var i = n(0)
    , o = n(15).onFreeze;
  n(2)("freeze", function(t) {
      return function(e) {
          return t && i(e) ? t(o(e)) : e
      }
  })
}
, function(t, e, n) {
  var i = n(0)
    , o = n(15).onFreeze;
  n(2)("seal", function(t) {
      return function(e) {
          return t && i(e) ? t(o(e)) : e
      }
  })
}
, function(t, e, n) {
  var i = n(0)
    , o = n(15).onFreeze;
  n(2)("preventExtensions", function(t) {
      return function(e) {
          return t && i(e) ? t(o(e)) : e
      }
  })
}
, function(t, e, n) {
  var i = n(0);
  n(2)("isFrozen", function(t) {
      return function(e) {
          return !i(e) || !!t && t(e)
      }
  })
}
, function(t, e, n) {
  var i = n(0);
  n(2)("isSealed", function(t) {
      return function(e) {
          return !i(e) || !!t && t(e)
      }
  })
}
, function(t, e, n) {
  var i = n(0);
  n(2)("isExtensible", function(t) {
      return function(e) {
          return !!i(e) && (!t || t(e))
      }
  })
}
, function(t, e, n) {
  var i = n(5);
  i(i.S + i.F, "Object", {
      assign: n(81)
  })
}
, function(t, e, n) {
  "use strict";
  var i = n(14)
    , o = n(27)
    , r = n(16)
    , s = n(17)
    , a = n(36)
    , c = Object.assign;
  t.exports = !c || n(8)(function() {
      var t = {}
        , e = {}
        , n = Symbol()
        , i = "abcdefghijklmnopqrst";
      return t[n] = 7,
      i.split("").forEach(function(t) {
          e[t] = t
      }),
      7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i
  }) ? function(t, e) {
      for (var n = s(t), c = arguments.length, u = 1, l = o.f, h = r.f; c > u; )
          for (var p, f = a(arguments[u++]), d = l ? i(f).concat(l(f)) : i(f), m = d.length, v = 0; m > v; )
              h.call(f, p = d[v++]) && (n[p] = f[p]);
      return n
  }
  : c
}
, function(t, e, n) {
  var i = n(5);
  i(i.S, "Object", {
      is: n(83)
  })
}
, function(t, e) {
  t.exports = Object.is || function(t, e) {
      return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
  }
}
, function(t, e, n) {
  var i = n(5);
  i(i.S, "Object", {
      setPrototypeOf: n(85).set
  })
}
, function(t, e, n) {
  var i = n(0)
    , o = n(11)
    , r = function(t, e) {
      if (o(t),
      !i(e) && null !== e)
          throw TypeError(e + ": can't set as prototype!")
  };
  t.exports = {
      set: Object.setPrototypeOf || ("__proto__"in {} ? function(t, e, i) {
          try {
              (i = n(33)(Function.call, n(28).f(Object.prototype, "__proto__").set, 2))(t, []),
              e = !(t instanceof Array)
          } catch (t) {
              e = !0
          }
          return function(t, n) {
              return r(t, n),
              e ? t.__proto__ = n : i(t, n),
              t
          }
      }({}, !1) : void 0),
      check: r
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(87)
    , o = {};
  o[n(13)("toStringTag")] = "z",
  o + "" != "[object z]" && n(21)(Object.prototype, "toString", function() {
      return "[object " + i(this) + "]"
  }, !0)
}
, function(t, e, n) {
  var i = n(24)
    , o = n(13)("toStringTag")
    , r = "Arguments" == i(function() {
      return arguments
  }());
  t.exports = function(t) {
      var e, n, s;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
          try {
              return t[e]
          } catch (t) {}
      }(e = Object(t), o)) ? n : r ? i(e) : "Object" == (s = i(e)) && "function" == typeof e.callee ? "Arguments" : s
  }
}
, function(t, e) {
  !function(t, e) {
      function n(t) {
          return "#" + ("00000" + t.toString(16)).slice(-6)
      }

      function i(t) {
          function e() {}
          return e.prototype = t,
          new e
      }

      function o() {}

      function r(t) {
          this.w = t || function(t, e) {
              return t - e
          }
      }

      function s() {
          this.i = [],
          this.complete = null,
          this.ha = 0
      }

      function a(t, e) {
          this.f = t,
          this.b = e,
          this.height = this.width = 0,
          this.canvas = null,
          this.bottom = this.y = this.x = this.speed = this.ea = this.end = this.start = 0,
          this.index = 16777215,
          this.Ha()
      }

      function c(e) {
          for (var n in this.a = i(y),
          e)
              this.a[n] = e[n];
          this.m = new u(this.a),
          this.paused = !0,
          this.I = 0,
          this.S = 4294967296,
          this.k = (new Date).getTime(),
          this.l = 0,
          this.q = !0;
          var o = this;
          t.setInterval(function() {
              o.ma(),
              o.na()
          }, 1e3)
      }

      function u(t) {
          this.b = t,
          this.i = new o,
          this.g = new o,
          this.V = new r(this.ka),
          this.la = {
              1: new h(t),
              4: new p(t),
              5: new f(t)
          },
          this.H = 0
      }

      function l(t) {
          this.b = t
      }

      function h(t) {
          this.b = t,
          this.p = new m(t)
      }

      function p(t) {
          this.b = t,
          this.p = new d(t)
      }

      function f(t) {
          p.call(this, t)
      }

      function d(t) {
          this.b = t,
          this.c = []
      }

      function m(t) {
          d.call(this, t)
      }

      function v(e, n, i, o) {
          this.ta = e,
          this.Sa = n || function(t) {
              return "ws://wschat.bilibili.com:8088/" + t
          }
          ,
          this.fa = i,
          this.ga = o || t.PlayerSetOnline,
          this.WebSocket = t.WebSocket || t.MozWebSocket
      }
      o.prototype = i(Array.prototype),
      o.prototype.constructor = o,
      o.prototype.remove = function(t) {
          for (var e = 0; e < this.length; e++)
              if (this[e] == t) {
                  this.splice(e, 1);
                  break
              }
      }
      ,
      o.prototype.C = function(t, e) {
          if (0 == this.length || 0 > e(t, this[0]))
              return 0;
          if (0 <= e(t, this[this.length - 1]))
              return this.length;
          for (var n, i = 0, o = this.length - 1, r = 0; i <= o; ) {
              if (r++,
              0 <= e(t, this[(n = Math.floor((i + o + 1) / 2)) - 1]) && 0 > e(t, this[n]))
                  return n;
              if (0 > e(t, this[n - 1]) ? o = n - 1 : 0 <= e(t, this[n]) ? i = n : console.error("Error!"),
              1e3 < r) {
                  console.error("1000!");
                  break
              }
          }
          return -1
      }
      ,
      o.prototype.Y = function(t, e) {
          var n = this.C(t, e);
          this.splice(n, 0, t)
      }
      ,
      r.prototype = i(o.prototype),
      r.prototype.constructor = r,
      r.prototype.D = function() {
          for (var t = 0; t < arguments.length; )
              this.Y(arguments[t], this.w),
              t++;
          return this
      }
      ,
      r.prototype.remove = function(t) {
          for (var e = this.C(t, this.w); 0 <= e; ) {
              if (this[e] === t)
                  return this.splice(e, 1),
                  !0;
              e--
          }
          return !1
      }
      ,
      r.prototype.Ba = function(t, e) {
          if (e <= t)
              return [];
          for (var n = t, i = []; n < e && n < this.length; )
              i.push(this[n]),
              n++;
          return i
      }
      ,
      r.prototype.Ca = function(t, e) {
          var n = this.C(t, this.w)
            , i = this.C(e, this.w);
          return this.Ba(n, i)
      }
      ,
      s.prototype = {
          constructor: s,
          parse: function(t) {
              if (t) {
                  for (var e = t.getElementsByTagName("data"), n = 0; n < e.length; n++)
                      this.add(e[n]);
                  for (e = t.getElementsByTagName("d"),
                  n = 0; n < e.length; n++)
                      this.qa(e[n])
              }
              this.complete && this.complete()
          },
          add: function(t) {
              var e = t.getElementsByTagName("playTime")[0].textContent;
              e || (e = t.getElementsByTagName("playTime")[0].text);
              var n = (r = t.getElementsByTagName("message")[0]).textContent;
              n || (n = r.text);
              var i = r.getAttribute("color")
                , o = r.getAttribute("mode")
                , r = r.getAttribute("fontsize")
                , s = t.getElementsByTagName("times")[0].textContent;
              s || (s = t.getElementsByTagName("times")[0].text),
              this.i.push({
                  o: parseFloat(e),
                  text: String(n).replace(/(\/n|\\n|\n|\r\n)/g, "\r"),
                  mode: parseInt(o),
                  size: parseInt(r),
                  color: parseInt(i),
                  wa: s
              })
          },
          qa: function(t) {
              var e = t.getAttribute("p").split(",")
                , n = t.textContent;
              n || (n = t.text),
              this.i.push({
                  stime: parseFloat(e[0]),
                  mode: parseInt(e[1]),
                  size: parseInt(e[2]),
                  color: parseInt(e[3]),
                  date: parseInt(e[4]),
                  class: parseInt(e[5]),
                  uid: e[6],
                  dmid: parseInt(e[7]),
                  text: String(n).replace(/(\/n|\\n|\n|\r\n)/g, "\r")
              })
          },
          load: function(e, n) {
              var i = this;
              !function(e, n) {
                  var i = new XMLHttpRequest;
                  i.responseType = "text",
                  i.addEventListener("load", function() {
                      var e;
                      e = i.responseText.replace(/[\x00-\x08\x0b-\x0c\x0e-\x1f\x7f]/g, ""),
                      e = (new t.DOMParser).parseFromString(e, "text/xml"),
                      n(null, e)
                  }),
                  i.addEventListener("error", function() {
                      n("error")
                  }),
                  i.addEventListener("abort", function() {
                      n("error")
                  }),
                  i.open("GET", e, !0),
                  i.send()
              }(n ? n(e) : e, function(t, o) {
                  t ? (console.log("reTry"),
                  10 > i.ha && (i.ha++,
                  setTimeout(function() {
                      i.load(e, n)
                  }, 1e3))) : i.parse(o)
              })
          }
      },
      a.prototype = {
          constructor: a,
          Ha: function() {
              var t = this.b.F(this.f, this.b);
              this.canvas = t.Z,
              this.width = t.width,
              this.height = t.height,
              this.Fa(),
              1 == this.f.mode && (this.Ea(),
              this.ea = this.start + this.b.width / this.speed,
              this.end = this.start + (this.b.width + this.width) / this.speed)
          },
          Ea: function() {
              this.speed = (512 + this.width) / this.b.duration
          },
          Fa: function() {
              this.start = this.f.o,
              this.end = this.start + this.b.duration
          },
          d: function(t, e) {
              this.y = t,
              this.bottom = this.y + this.height,
              this.index = e
          },
          M: function(t) {
              return this.b.width - (t - this.start) * this.speed
          },
          Da: function(t) {
              return this.M(t) + this.width
          },
          ca: function() {
              this.b.v && this.b.v(this.canvas, this.b),
              this.f = this.b = this.canvas = null
          }
      },
      a.W = function(t, i) {
          var o = e.createElement("canvas")
            , r = o.getContext("2d")
            , s = t.text.split("\r")
            , c = 0;
          r.font = "bold " + t.size * i.n + "px " + i.font;
          for (var u = s.length * t.size * i.n * 1.2, l = 0; l < s.length; l++) {
              var h = r.measureText(s[l]).width;
              h > c && (c = h)
          }
          for (o.setAttribute("width", c),
          o.setAttribute("height", u + 2),
          r.globalAlpha = i.alpha,
          t.border && (r.strokeStyle = n(t.borderColor),
          r.strokeRect(0, 0, c, u)),
          r.font = "bold " + t.size * i.n + "px " + i.font,
          r.fillStyle = n(t.color),
          r.shadowOffsetX = 0,
          r.shadowOffsetY = 0,
          r.shadowBlur = 4,
          r.shadowColor = n(a.X(t)),
          l = 0; l < s.length; l++)
              r.fillText(s[l], 0, (l + 1) * t.size * i.n);
          return {
              Z: o,
              width: c,
              height: u
          }
      }
      ,
      a.va = function(t, e, n, i) {
          try {
              null != t.canvas ? i.h.drawImage(t.canvas, e, n) : console.log(t, "Text has not initialized.")
          } catch (t) {
              console.warn(t)
          }
      }
      ,
      a.sa = function(t) {
          t.h.clearRect(0, 0, t.width, t.height)
      }
      ,
      a.Ga = function(t, i) {
          var o = e.createElement("div");
          return o.style.cssText = "        position: absolute;        display: inline-block;        white-space: pre;        left: " + (i.e.offsetWidth - 1) + "px;        top: 0px;        pointer-events: none;        font-weight: bold;        " + i.xa,
          o.appendChild(e.createTextNode(t.text.replace(/\r/g, "\r\n"))),
          o.style.color = n(t.color),
          o.style.fontSize = t.size * i.n + "px",
          o.style.fontFamily = i.font,
          o.style.opacity = i.alpha,
          o.style.textShadow = "1px 1px 2px " + n(a.X(t)),
          t.border && (o.style.border = "solid 1px " + n(t.borderColor)),
          i.e.appendChild(o),
          {
              Z: o,
              width: o.offsetWidth,
              height: o.offsetHeight
          }
      }
      ,
      a.za = function(t, e, n) {
          t.canvas.style.left = e + "px",
          t.canvas.style.top = n + "px"
      }
      ,
      a.ya = function(t, e, n, i) {
          t.Oa || (t.Oa = !0,
          t.canvas.style.left = e + "px",
          t.canvas.style.top = n + "px",
          4 !== t.f.mode && 5 !== t.f.mode && 1 === t.f.mode && (e = function(e) {
              return e + "transform: translateX(-" + (i.width + t.width) + "px);" + e + "transition: " + e + "transform " + (t.end - t.start) + "s linear;"
          }
          ,
          t.canvas.style.cssText += [e("-webkit-"), e("")].join("")))
      }
      ,
      a.Aa = function(t, e) {
          e.e.removeChild(t)
      }
      ,
      a.X = function(t) {
          return t.color ? 0 : 16777215
      }
      ;
      var y = {
          R: 500,
          ia: 60,
          font: "黑体",
          duration: 3.5,
          width: 512,
          height: 384,
          alpha: 1,
          n: 1,
          N: !1,
          u: null,
          B: null,
          F: null,
          v: null,
          j: null,
          s: null,
          r: null,
          h: null,
          e: null,
          xa: "",
          Ua: function(t) {
              this.h = t,
              this.u = a.va,
              this.F = a.W,
              this.B = a.sa,
              this.e = this.v = null
          },
          Ia: function(t) {
              this.e = t,
              this.u = a.za,
              this.u = a.ya,
              this.F = a.Ga,
              this.v = a.Aa,
              this.h = this.B = null
          },
          ra: function(t) {
              this.j = function() {
                  return t.currentTime
              }
              ,
              this.s = function() {
                  return t.paused || t.ended
              }
              ,
              this.r = function() {
                  return [t.offsetWidth, t.offsetHeight]
              }
          },
          Ta: function() {
              this.j = this.s = this.r = null
          },
          Qa: function(t) {
              (this.N = t) ? this.j = function() {
                  return (new Date).getTime() / 1e3
              }
              : this.j = null
          }
      };
      t.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
          t.setTimeout(e, 1e3 / y.ia)
      }
      ,
      c.prototype = {
          constructor: c,
          play: function() {
              this.paused = !1,
              this.l = this.I,
              this.k = (new Date).getTime(),
              this.I = 0;
              var e = this;
              t.requestAnimationFrame(function() {
                  e.U()
              })
          },
          pause: function() {
              this.paused = !0,
              this.I = this.l + (new Date).getTime() - this.k
          },
          U: function() {
              var e = (new Date).getTime()
                , n = this.l + e - this.k;
              if (this.a.j) {
                  var i = 1e3 * this.a.j();
                  1e3 < Math.abs(i - n) && (this.l = n = i,
                  this.k = e)
              } else
                  n > this.S && (this.l = n = 0,
                  this.k = e);
              if (null != this.m && this.q && (this.m.Ka(n / 1e3),
              this.a.B && this.a.B(this.a),
              this.m.Ma(n / 1e3)),
              !this.paused) {
                  var o = this;
                  t.requestAnimationFrame(function() {
                      o.U()
                  })
              }
          },
          ja: function(t) {
              return 0 == arguments.length ? this.q : (this.q != t && ((this.q = t) || this.m.aa()),
              t)
          },
          alpha: function(t) {
              if (0 == arguments.length)
                  return this.a.alpha;
              t = Number(t),
              isNaN(t) || (.1 > t && (t = .1),
              1 < t && (t = 1),
              this.a.alpha !== t && (this.a.alpha = t))
          },
          resize: function(t, e) {
              t && e && (this.a.width = t,
              this.a.height = e),
              this.a.e && (this.a.e.style.width = this.a.width + "px",
              this.a.e.style.height = this.a.height + "px"),
              this.a.h && (this.a.h.canvas.setAttribute("width", this.a.width),
              this.a.h.canvas.setAttribute("height", this.a.height))
          },
          Ra: function(t) {
              this.S = t
          },
          ma: function() {
              if (this.a.r) {
                  var t = (e = this.a.r())[0]
                    , e = e[1];
                  t && e && (t == this.a.width && e == this.a.height || this.resize(t, e))
              }
          },
          na: function() {
              if (this.a.s) {
                  var t = this.a.s();
                  t && !this.paused ? this.pause() : !t && this.paused && this.play()
              }
          },
          pa: function(t) {
              return t.hasOwnProperty("stime") || (t.stime = this.a.N ? (new Date).getTime() / 1e3 : (this.l + (new Date).getTime() - this.k) / 1e3),
              this.m.add(t),
              t
          },
          Ja: function(t, e) {
              var n = new s
                , i = this;
              n.complete = function() {
                  for (var t = 0; t < n.i.length; t++)
                      0 != n.i[t].text.replace(/\r/g, "").length && i.m.add(n.i[t])
              }
              ,
              n.load(t, e)
          },
          Pa: function(t, e, n, i) {
              !function(t, e, n, i) {
                  i = i || "POST";
                  var o, r = [];
                  for (o in e)
                      r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                  e = r.join("&");
                  var s = new XMLHttpRequest;
                  s.withCredentials = !0,
                  s.responseType = "text",
                  s.addEventListener("load", function() {
                      n(null, s.responseText)
                  }),
                  s.addEventListener("error", function() {
                      n("error")
                  }),
                  s.addEventListener("abort", function() {
                      n("error")
                  }),
                  "GET" == i && (t += (-1 == t.indexOf("?") ? "?" : "&") + e),
                  s.open(i, t, !0),
                  "POST" == i ? (s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                  s.send(e)) : s.send()
              }(t, e, n, i)
          }
      },
      u.prototype = {
          constructor: u,
          ka: function(t, e) {
              return t.o - e.o
          },
          add: function(t) {
              t = new function(t) {
                  this.o = t.stime,
                  this.text = t.text,
                  this.mode = t.mode,
                  this.size = t.size,
                  this.color = t.color,
                  this.wa = t.date,
                  this.border = t.border || !1,
                  this.borderColor = t.borderColor || 0,
                  this.on = !1
              }
              (t),
              this.b.N ? this.J(t) : (this.i.push(t),
              this.V.D(t),
              t.border && this.J(t))
          },
          Ka: function(t) {
              if (t -= .001,
              3 < Math.abs(this.H - t))
                  this.aa();
              else
                  for (var e = this.V.Ca({
                      o: this.H
                  }, {
                      o: t
                  }); e.length; )
                      this.J(e.shift());
              this.H = t
          },
          oa: function(t) {
              return !!t.border || !(this.g.length >= this.b.R)
          },
          J: function(t) {
              if (!t.on && this.oa(t)) {
                  var e = this.la[t.mode];
                  if (e) {
                      var n = e.ua(t);
                      e.P(n),
                      t.on = !0,
                      this.g.push(n)
                  }
              }
          },
          T: function(t) {
              t.f.on = !1,
              t.t.O(t),
              this.g.remove(t)
          },
          aa: function() {
              for (; this.g.length; )
                  this.T(this.g[0])
          },
          Ma: function(t) {
              for (var e = this.g.length, n = [], i = 0; i < e; i++) {
                  var o = this.g[i];
                  o.t.update(o, t) ? this.b.u(o, o.K, o.L, this.b) : n.push(o)
              }
              for (e = n.length,
              i = 0; i < e; i++)
                  o = n[i],
                  this.T(o)
          }
      },
      l.prototype = {
          constructor: l,
          ua: function(t) {
              return new a(t,this.b)
          },
          P: null,
          O: null,
          update: null
      },
      h.prototype = i(l.prototype),
      h.prototype.constructor = h,
      h.prototype.P = function(t) {
          this.p.add(t),
          t.t = this
      }
      ,
      h.prototype.O = function(t) {
          this.p.remove(t),
          t.t = null,
          t.ca()
      }
      ,
      h.prototype.update = function(t, e) {
          return !(t.end < e) && (t.K = t.M(e),
          t.L = t.y,
          !0)
      }
      ,
      p.prototype = i(l.prototype),
      p.prototype.constructor = p,
      p.prototype.P = function(t) {
          this.p.add(t),
          t.t = this
      }
      ,
      p.prototype.O = function(t) {
          this.p.remove(t),
          t.t = null,
          t.ca()
      }
      ,
      p.prototype.update = function(t, e) {
          return !(t.end < e) && (t.K = t.x,
          t.L = this.b.height - t.y - t.height,
          !0)
      }
      ,
      f.prototype = i(p.prototype),
      f.prototype.constructor = f,
      f.prototype.update = function(t, e) {
          return !(t.end < e) && (t.K = t.x,
          t.L = t.y,
          !0)
      }
      ,
      d.prototype = {
          constructor: d,
          add: function(t) {
              t.x = (this.b.width - t.width) / 2,
              t.height >= this.b.height ? t.d(0, -1) : this.d(t, 0)
          },
          remove: function(t) {
              -1 != t.index && void 0 != this.c[t.index] && this.c[t.index].remove(t)
          },
          Q: function(t, e, n) {
              e = t + e.height;
              for (var i = 0; i < this.c[n].length; i++) {
                  var o = this.c[n][i];
                  if (!(o.y > e || o.bottom < t))
                      return !1
              }
              return !0
          },
          d: function(t, e) {
              var n = 0;
              this.c.length <= e && this.c.push(new o);
              var i = this.c[e];
              if (0 == i.length)
                  t.d(0, e),
                  i.push(t);
              else if (this.Q(0, t, e))
                  t.d(0, e),
                  this.D(i, t);
              else {
                  for (var r = 0; r < i.length && !((n = i[r].bottom + 1) + t.height > this.b.height); r++)
                      if (this.Q(n, t, e))
                          return t.d(n, e),
                          void this.D(i, t);
                  this.d(t, e + 1)
              }
          },
          D: function(t, e) {
              t.Y(e, function(t, e) {
                  return t.bottom - e.bottom
              })
          }
      },
      m.prototype = i(d.prototype),
      m.prototype.constructor = m,
      m.prototype.add = function(t) {
          t.x = this.b.width,
          t.height >= this.b.height ? t.d(0, -1) : this.d(t, 0)
      }
      ,
      m.prototype.Q = function(t, e, n) {
          for (var i = t + e.height, o = e.x + e.width, r = 0; r < this.c[n].length; r++) {
              var s = this.c[n][r];
              if (!(s.y > i || s.bottom < t)) {
                  if (!(s.Da(e.start) < e.x || s.M(e.start) > o))
                      return !1;
                  if (!(s.end <= e.ea))
                      return !1
              }
          }
          return !0
      }
      ,
      v.prototype = {
          constructor: v,
          A: null,
          Na: 0,
          G: !1,
          da: -1,
          ba: function() {
              if (!this.WebSocket)
                  return !1;
              var t = this;
              this.G = !1,
              this.A = new this.WebSocket(this.Sa(this.ta)),
              this.A.onmessage = function(e) {
                  t.La(e.data)
              }
              ,
              this.A.onclose = function() {
                  t.G || (-1 == t.da || t.Na++ < t.da) && setTimeout(function() {
                      t.ba()
                  }, 1e3)
              }
          },
          close: function() {
              this.G = !0,
              this.A.close()
          },
          La: function(t) {
              var e = parseInt("0x" + t.substr(0, 4));
              if ((t = t.substr(4, e)).length != e)
                  console.log("Packet invalid");
              else
                  switch ((t = JSON.parse(t)).pkt_id) {
                  case 1:
                      var n = JSON.parse(t.payload);
                      setTimeout(function() {
                          "function" == typeof this.ga && this.ga(n)
                      }, 1);
                      break;
                  case 2:
                      e = (t = JSON.parse(t.payload))[1],
                      t = t[0].split(","),
                      t = {
                          stime: parseFloat(t[0]),
                          mode: parseInt(t[1]),
                          size: parseInt(t[2]),
                          color: parseInt(t[3]),
                          date: parseInt(t[4]),
                          rnd: t[5],
                          class: parseInt(t[6]),
                          hash: t[7],
                          dmid: t[8],
                          text: e
                      },
                      "function" == typeof this.fa && this.fa(t)
                  }
          }
      },
      t.Stage = c,
      c.prototype.play = c.prototype.play,
      c.prototype.addCmt = c.prototype.pa,
      c.prototype.loadCmtFile = c.prototype.Ja,
      c.prototype.setRange = c.prototype.Ra,
      c.prototype.sendCmt = c.prototype.Pa,
      c.prototype.visible = c.prototype.ja,
      c.prototype.resize = c.prototype.resize,
      y.setLiveMode = y.Qa,
      y.initializeByDiv = y.Ia,
      y.attachVideoElement = y.ra,
      y.setFont = function(t) {
          this.font = t
      }
      ,
      y.setWidth = function(t) {
          this.width = t
      }
      ,
      y.setHeight = function(t) {
          this.height = t
      }
      ,
      y.setGetSizeFunc = function(t) {
          this.r = t
      }
      ,
      y.setGetTimeFunc = function(t) {
          this.j = t
      }
      ,
      y.setGetStateFunc = function(t) {
          this.s = t
      }
      ,
      y.initializeHandlers = function(t, e, n) {
          this.F = t,
          this.u = e,
          this.v = n
      }
      ,
      y.setTextScale = function(t) {
          this.n = t
      }
      ,
      y.setDuration = function(t) {
          this.duration = t
      }
      ,
      y.setAlpha = function(t) {
          this.alpha = t
      }
      ,
      y.setMax = function(t) {
          this.R = t
      }
      ,
      c.prototype.config = function() {
          return this.a
      }
      ,
      t.Text = a,
      a.CanvasTextRender = a.W,
      c.prototype.connect = function(t, e, n) {
          new v(t,function(t) {
              return t
          }
          ,e,n).ba()
      }
  }(window, document)
}
, function(t, e, n) {
  "use strict";
  var i = n(90)
    , o = n(30)
    , r = n(43)
    , s = n.n(r)
    , a = n(113);
  window.BiliH5Player = function() {
      this.options = {
          ele: "#bofqi",
          aid: null,
          cid: null,
          page: 1,
          danmaku_number: 150,
          season_type: null,
          qn: 32,
          preload: !1,
          send_cmt_url: "//corpcmt.hdslb.net/post",
          get_cmt_url: null,
          live: !1,
          track: !1,
          on_state_change: null,
          get_from_local: !1,
          comment: null,
          image: null,
          video_url: null,
          high_quality: !1,
          retry_times: 5,
          max_duration: null
      },
      this.eventBus = new a.a
  }
  ,
  BiliH5Player.prototype = {
      constructor: BiliH5Player,
      on: function(t, e) {
          this.eventBus.on(t, e, this)
      },
      off: function(t, e) {
          this.eventBus.off(t, e, this)
      },
      create: function(t) {
          var e = this
            , n = this;
          if ("[object Object]" === Object.prototype.toString.call(t) && (this.options = Object.assign({}, this.options, t)),
          !this.options.ele)
              return this.player = {},
              !1;
          var i = '<div class="player-container"><div class="dummy"></div><div class="player-box"><video' + ("string" == typeof this.options.preload ? " preload" : "") + ' width="100%" height="100%" ' + (t.autoplay ? "autoplay " : "") + 'webkit-playsinline playsinline></video><div class="display"><div class="input-bar"><input class="text-input" type="text" placeholder="请在这里输入弹幕" /><button class="send-btn">发送</button></div><div class="control-bar hide"> <span class="control-btn btn-play"><i class="player-icon icon-play"></i></span><span class="control-btn btn-pause hide"><i class="player-icon icon-pause"></i></span><div class="time-container"><span class="control-text time-current-text">00:00</span> <span class="control-time-split"></span> <span class="control-text time-total-text">24:00</span></div><div class="right"><span class="control-btn btn-mute"><i class="player-icon icon-mute"></i></span><span class="control-btn btn-unmute hide"><i class="player-icon icon-unmute"></i></span><span class="control-volume-slider"></span><span class="control-btn btn-comment active"><i class="player-icon icon-comment"></i></span><span class="control-btn btn-repeat"><i class="player-icon icon-repeat"></i></span><span class="control-btn btn-widescreen"><i class="player-icon icon-widescreen"></i></span><span class="control-btn btn-fullscreen active"><i class="player-icon icon-fullscreen"></i></span></div><div class="control-slider"></div></div><div class="comment-layer"></div><div class="load-layer"><img/><i class="player-icon icon-preview"></i></div><div class="state-icon"> <i class="buff-icon"></i> <i class="pause-icon"></i> <i class="play-icon"></i></div></div></div></div>';
          if ("audio" === this.options.type) {
              var r = '\n            <div class="audioCover">\n                <img class="background" src=' + this.options.image + ' alt=""/>\n                <div class="backgroundCover"></div>\n                <div class="cover">\n                    <img class="coverImg" src=' + this.options.image + ' alt=""/>\n                </div>\n            </div>\n            ';
              i = '<div class="player-container"><div class="dummy"></div><div class="player-box"><audio ' + (t.autoplay ? "autoplay" : "") + '></audio><div class="display">' + r + '<div class="input-bar"><input class="text-input" type="text" placeholder="请在这里输入弹幕" /><button class="send-btn">发送</button></div><div class="control-bar hide"> <span class="control-btn btn-play"><i class="player-icon icon-play"></i></span><span class="control-btn btn-pause hide"><i class="player-icon icon-pause"></i></span><div class="time-container"><span class="control-text time-current-text">00:00</span> <span class="control-time-split"></span> <span class="control-text time-total-text">24:00</span></div><div class="right audio"><span class="control-btn btn-mute"><i class="player-icon icon-mute"></i></span><span class="control-btn btn-unmute hide"><i class="player-icon icon-unmute"></i></span><span class="control-volume-slider"></span><span class="control-btn btn-comment active hide"><i class="player-icon icon-comment"></i></span><span class="control-btn btn-repeat"><i class="player-icon icon-repeat"></i></span><span class="control-btn btn-widescreen"><i class="player-icon icon-widescreen"></i></span><span class="control-btn btn-fullscreen active"><i class="player-icon icon-fullscreen"></i></span></div><div class="control-slider audio"></div></div><div class="comment-layer"></div><div class="load-layer"><img/><i class="player-icon icon-preview"></i></div><div class="state-icon"> <i class="buff-icon"></i> <i class="pause-icon"></i> <i class="play-icon"></i></div></div></div></div>'
          }
          var a = document.createDocumentFragment()
            , c = document.createElement("div");
          c.innerHTML = i,
          a.appendChild(c);
          var u = this.options.ele;
          Object.prototype.toString.call(this.options.ele).match(/HTML.+Element/) || (u = document.querySelector(this.options.ele)),
          Object(o.a)(a.firstChild.childNodes, u);
          if (this.options.get_from_local)
              this.initialized = !0,
              setTimeout(this.setVideo());
          else if (this.options.season_type) {
              if (!this.options.cid)
                  return this.initialized = !0,
                  !1;
              s.a.get("//api.bilibili.com/x/web-interface/view", {
                  withCredentials: !0,
                  params: {
                      aid: this.options.aid
                  }
              }).then(function(t) {
                  var e = t.data;
                  e && e.data && e.data.pic && (n.options.image = e.data.pic),
                  n.setBangumi()
              }).catch(function() {
                  n.setBangumi()
              })
          } else {
              if (!this.options.aid)
                  return this.initialized = !0,
                  !1;
              s.a.get("//api.bilibili.com/x/web-interface/view", {
                  withCredentials: !0,
                  params: {
                      aid: this.options.aid
                  }
              }).then(function(t) {
                  var i = t.data;
                  i && i.data && i.data.pic && (n.options.image = i.data.pic,
                  e.options.cid || (n.options.cid = i.data.cid)),
                  n.setUgc()
              }).catch(function() {
                  n.setUgc()
              })
          }
          return this
      },
      setVideo: function() {
          var t = this.options
            , e = this;
          if (t.video_url) {
              var n = t.ele;
              Object.prototype.toString.call(t.ele).match(/HTML.+Element/) || (n = document.querySelector(t.ele)),
              this.options.live ? this.player = new i.a(n,{
                  send_cmt_url: t.send_cmt_url,
                  get_cmt_url: t.get_cmt_url,
                  video_url: t.video_url,
                  video_type: null,
                  live: !0,
                  cmt_url: t.comment,
                  danmaku_number: t.danmaku_number,
                  img: t.image,
                  on_state_change: t.on_state_change,
                  eventBus: this.eventBus
              }) : this.player = new i.a(n,{
                  aid: t.aid,
                  cid: t.cid,
                  img: t.image,
                  track: t.track,
                  video_url: t.video_url,
                  cmt_url: t.comment,
                  send_cmt_url: t.send_cmt_url,
                  get_cmt_url: t.get_cmt_url,
                  video_type: "video/mp4",
                  danmaku_number: t.danmaku_number,
                  on_state_change: t.on_state_change,
                  max_duration: t.max_duration,
                  preload: t.preload,
                  autoplay: t.autoplay,
                  type: t.type,
                  eventBus: this.eventBus
              }),
              (this.options.auto_start || this.options.autoplay) && this.player.start_video()
          } else {
              if (this.initialized || !(retry_times > 0))
                  return this.player = {},
                  !1;
              setTimeout(function() {
                  return retry_times -= 1,
                  e.setVideo(),
                  !1
              }, 500)
          }
      },
      cookie: {
          get: function(t) {
              var e = "" + document.cookie
                , n = e.indexOf(t + "=");
              if (-1 == n || "" == t)
                  return "";
              var i = e.indexOf(";", n);
              return -1 == i && (i = e.length),
              unescape(e.substring(n + t.length + 1, i))
          },
          set: function(t, e) {
              var n = new Date;
              n.setTime(n.getTime() + 72e5),
              document.cookie = t + "=" + escape(e) + ";expires=" + n.toGMTString() + "; path=/; domain=.bilibili.com"
          }
      },
      getQuery: function() {
          return window.location.href.split("?")[1]
      },
      setUgc: function() {
          var t = this
            , e = this.options
            , n = {
              avid: e.aid,
              cid: e.cid,
              qn: 0,
              type: "mp4",
              otype: "json",
              fnver: 0,
              fnval: 1,
              platform: "html5",
              html5: 1
          };
          e.high_quality && (n.high_quality = 1),
          s.a.get("//api.bilibili.com/x/player/playurl", {
              withCredentials: !0,
              params: n
          }).then(function(n) {
              if (n && n.data && n.data.data && n.data.data.durl && n.data.data.durl[0]) {
                  var i = {
                      cid: "http://comment.bilibili.com/" + e.cid + ".xml",
                      src: n.data.data.durl[0].url,
                      img: e.image
                  };
                  t.initialized = !0;
                  try {
                      "http:" !== window.location.protocol && (i.cid = i.cid.replace("http://", "https://"),
                      i.src = i.src.replace("http://", "https://"),
                      i.img = i.img.replace("http://", "https://"))
                  } catch (n) {}
                  t.options.comment = i.cid,
                  t.options.image = i.img,
                  t.options.video_url = i.src,
                  i.auto_start && (t.options.auto_start = i.auto_start),
                  t.setVideo()
              } else
                  t.initialized = !0,
                  t.options.video_url = "//static.hdslb.com/error.mp4",
                  t.setVideo()
          }).catch(function(t) {
              console.error(t)
          })
      },
      setBangumi: function() {
          var t = this
            , e = this.options;
          s.a.get("//bangumi.bilibili.com/player/web_api/v2/act/playurl", {
              withCredentials: !0,
              params: {
                  cid: e.cid,
                  platform: "html5",
                  qn: e.qn || 32,
                  season_type: e.season_type,
                  build: "0.2.0",
                  otype: "json",
                  type: "mp4"
              }
          }).then(function(n) {
              var i = n.data;
              if (i.durl && i.durl[0]) {
                  i.src = i.durl[0].url || i.durl[0].backup_url[0],
                  t.initialized = !0,
                  t.options.comment = "//comment.bilibili.com/" + e.cid + ".xml",
                  t.options.video_url = i.src;
                  try {
                      "http:" !== window.location.protocol && (t.options.comment = t.options.comment.replace("http://", "https://"),
                      t.options.video_url = t.options.video_url.replace("http://", "https://"))
                  } catch (t) {}
                  i.auto_start && (t.options.auto_start = i.auto_start),
                  t.setVideo()
              } else
                  t.initialized = !0,
                  t.options.comment = "//comment.bilibili.com/1.xml",
                  t.options.image = "//static.hdslb.com/images/transparent.gif",
                  t.options.video_url = "//static.hdslb.com/error.mp4",
                  t.setVideo()
          }).catch(function() {
              t.initialized = !0,
              t.options.comment = "//comment.bilibili.com/1.xml",
              t.options.image = "//static.hdslb.com/images/transparent.gif",
              t.options.video_url = "//static.hdslb.com/error.mp4",
              t.setVideo()
          })
      },
      sendComment: function(t, e, n) {
          if (!this.player)
              return !1;
          this.player.send_comment(t, e, n)
      }
  }
}
, function(t, e, n) {
  "use strict";
  e.a = l;
  var i = n(43)
    , o = n.n(i)
    , r = n(109)
    , s = n.n(r)
    , a = n(112)
    , c = n(30)
    , u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
  }
  : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
  }
  ;

  function l(t, e) {
      this.options = {
          send_cmt_url: "//corpcmt.hdslb.net/post",
          get_cmt_url: null
      },
      "object" === (void 0 === e ? "undefined" : u(e)) && (this.options = Object.assign({}, this.options, e)),
      this.options.cmt_url && this.options.cmt_url.match(/[\d*]/g) && (this.options.cid = this.options.cmt_url.match(/[\d*]/g).join("")),
      this.elem = t,
      this.screen_state = l.UI_NORMAL,
      this.video_state = l.V_IDEL,
      this.control_bar_visible = !0,
      this.control_bar_timer = null,
      this.control_bar_timer_delay = 3e3,
      this.timer = null,
      this.stage = null,
      this.sliderCtrl = null,
      this.volumeCtrl = null,
      this.volume = 1,
      this.currentTime = 0,
      this.duration = 0,
      this.live_mode = e.live,
      this.init_ui(this.options),
      this.start_video = this.start_video,
      this.random = Math.floor(1e5 * Math.random()),
      this.hidePlayIcon = !1,
      this.ws()
  }
  l.UI_NORMAL = 0,
  l.UI_WIDE = 1,
  l.UI_FULL = 2,
  l.V_IDEL = 0,
  l.V_READY = 1,
  l.V_BUFF = 2,
  l.V_PLAY = 3,
  l.V_PAUSE = 4,
  l.V_COMPLETE = 5,
  l.V_CANPLAY = 6,
  l.V_PLAYING = 7,
  l.E_VIDEO_READY = "ready",
  l.E_VIDEO_PLAY = "video_media_play",
  l.E_VIDEO_PAUSE = "video_media_pause",
  l.E_VIDEO_LOADSTART = "video_media_loadstart",
  l.E_VIDEO_CANPLAY = "video_media_canplay",
  l.E_VIDEO_WAITING = "video_media_waiting",
  l.E_VIDEO_ENDED = "video_media_ended",
  l.E_VIDEO_ERROR = "video_media_error",
  l.E_VIDEO_LOADED = "video_media_loaded",
  l.E_VIDEO_SEEK = "video_media_seek",
  l.E_VIDEO_TIME = "video_media_time",
  l.isFullscreen = function() {
      return null != (document.webkitFullscreenElement || document.fullScreenElement || document.mozFullScreenElement || document.msFullscreenElement)
  }
  ,
  l.requestFullscreen = function(t) {
      (t.webkitRequestFullScreen || t.requestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen || function() {}
      ).apply(t)
  }
  ,
  l.exitFullscreen = function() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
  }
  ,
  l.prototype = {
      constructor: l,
      play: function() {
          this.play_video()
      },
      seek: function(t) {
          this.seek_video(t)
      },
      pause: function() {
          this.pause_video()
      },
      getDuration: function() {
          return this.video_duration()
      },
      isFullScreen: function() {
          return l.isFullscreen()
      },
      init_ui: function(t) {
          t = t || {};
          var e = this;

          function n(t) {
              e.on_fullscreen_change(t)
          }
          this.elem.querySelector(".btn-widescreen").onclick = function() {
              e.screen_state !== l.UI_WIDE ? e.to_wide_screen() : e.to_normal_screen()
          }
          ,
          this.elem.querySelector(".btn-fullscreen").onclick = function() {
              e.screen_state !== l.UI_FULL ? e.to_full_screen() : e.to_normal_screen()
          }
          ,
          document.addEventListener("webkitfullscreenchange", n, !1),
          document.addEventListener("mozfullscreenchange", n, !1),
          document.addEventListener("MSFullscreenChange", n, !1),
          document.addEventListener("fullscreenchange", n, !1),
          this.elem.querySelector(".display").onmousemove = function(t) {
              e.on_display_mousemove(t)
          }
          ,
          this.elem.querySelector(".display").onclick = function(t) {
              e.on_display_click(t)
          }
          ,
          this.elem.querySelector(".control-bar").onclick = function(t) {
              e.get_video_state() === l.V_PLAY && e.set_control_bar_visible(!1, e.control_bar_timer_delay)
          }
          ,
          this.elem.querySelector(".btn-play").onclick = function(t) {
              i.hasClass("hide") ? e.on_play_btn_click(t) : i.click()
          }
          ,
          this.elem.querySelector(".btn-pause").onclick = function(t) {
              e.on_pause_btn_click(t)
          }
          ,
          this.elem.querySelector(".btn-comment").onclick = function(t) {
              e.on_comment_btn_click(t)
          }
          ,
          this.elem.querySelector(".btn-repeat").onclick = function(t) {
              e.on_repeat_btn_click(t)
          }
          ,
          this.elem.querySelector(".btn-mute").onclick = function(t) {
              e.on_mute_btn_click(t)
          }
          ,
          this.elem.querySelector(".btn-unmute").onclick = function(t) {
              e.on_unmute_btn_click(t)
          }
          ,
          this.elem.querySelector(".send-btn").onclick = function(t) {
              e.on_send_btn_click(t)
          }
          ,
          this.elem.querySelector(".text-input").onkeypress = function(t) {
              if (13 === t.which)
                  return e.on_send_btn_click(t),
                  !1
          }
          ,
          this.sliderCtrl = new a.a({
              parent: this.elem.querySelector(".control-slider"),
              upLayer: this.elem.querySelector(".display"),
              onChange: function(t) {
                  e.on_slider_seek(t)
              }
          }),
          this.volumeCtrl = new a.a({
              parent: this.elem.querySelector(".control-volume-slider"),
              upLayer: this.elem.querySelector(".control-volume-slider"),
              liveDragging: !0,
              onChange: function(t) {
                  e.on_volume_slider_seek(t)
              },
              value: 100 * this.volume
          });
          var i = e.elem.querySelector(".load-layer");
          if (t.video_url ? (t.img && i.querySelector("img").setAttribute("src", t.img),
          i.onclick = function() {
              e.start_video()
          }
          ) : i.classList.add("hide"),
          t.preload) {
              var o = this.elem.querySelector("video");
              "audio" === t.type && (o = this.elem.querySelector("audio"));
              var r = document.createElement("source");
              Object(c.a)(r, o),
              r.setAttribute("src", t.video_url),
              r.setAttribute("type", t.video_type),
              this.video = o,
              o.addEventListener("play", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_PLAY),
                  e.on_video_play(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("playing", function() {
                  e.on_video_playing(o)
              }),
              o.addEventListener("pause", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_PAUSE),
                  e.on_video_pause(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("waiting", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_WAITING),
                  e.on_video_waiting(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("loadstart", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_LOADSTART),
                  e.on_video_loadstart(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("canplay", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_CANPLAY),
                  e.on_video_canplay(o)
              }),
              o.addEventListener("ended", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_ENDED),
                  e.on_video_ended(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("loadeddata", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_LOADED)
              }, {
                  passive: !0
              }),
              o.addEventListener("error", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_ERROR)
              }, {
                  passive: !0
              }),
              o.addEventListener("timeupdate", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_TIME)
              }, {
                  passive: !0
              }),
              o.addEventListener("seeking", function() {
                  e.options.eventBus && e.options.eventBus.dispatch(l.E_VIDEO_SEEK)
              }, {
                  passive: !0
              })
          }
          /iPad/.test(window.navigator.userAgent) ? (e.elem.querySelector(".btn-mute").classList.add("hide"),
          e.elem.querySelector(".control-volume-slider").classList.add("hide"),
          e.elem.querySelector(".btn-fullscreen").classList.add("hide"),
          e.elem.querySelector(".control-bar").classList.add("ipad")) : (e.elem.querySelector(".btn-mute").classList.add("hide"),
          e.elem.querySelector(".control-volume-slider").classList.add("hide"),
          e.elem.querySelector(".btn-fullscreen").classList.add("hide"),
          e.elem.querySelector(".btn-repeat").classList.add("hide"))
      },
      init_video: function(t, e, n) {
          t = t || "",
          e = e || "video/mp4";
          var i = this
            , o = this.elem.querySelector("video");
          if ("audio" === this.options.type && (o = this.elem.querySelector("audio")),
          this.video = o,
          !n) {
              this.play_video();
              var r = document.createElement("source");
              Object(c.a)(r, o),
              r.setAttribute("src", t),
              r.setAttribute("type", e),
              o.addEventListener("play", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_PLAY),
                  i.on_video_play(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("playing", function() {
                  i.on_video_playing(o)
              }),
              o.addEventListener("pause", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_PAUSE),
                  i.on_video_pause(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("waiting", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_WAITING),
                  i.on_video_waiting(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("loadstart", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_LOADSTART),
                  i.on_video_loadstart(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("canplay", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_CANPLAY),
                  i.on_video_canplay(o)
              }),
              o.addEventListener("ended", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_ENDED),
                  i.on_video_ended(o)
              }, {
                  passive: !0
              }),
              o.addEventListener("loadeddata", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_LOADED)
              }, {
                  passive: !0
              }),
              o.addEventListener("error", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_ERROR)
              }, {
                  passive: !0
              }),
              o.addEventListener("timeupdate", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_TIME)
              }, {
                  passive: !0
              }),
              o.addEventListener("seeking", function() {
                  i.options.eventBus && i.options.eventBus.dispatch(l.E_VIDEO_SEEK)
              }, {
                  passive: !0
              })
          }
          this.timer = setInterval(function() {
              i.on_timer_interval()
          }, 100),
          this.set_video_state(l.V_READY)
      },
      on_video_play: function(t) {
          this.set_video_state(l.V_PLAY)
      },
      on_video_playing: function(t) {
          this.set_video_state(l.V_PLAYING)
      },
      on_video_pause: function(t) {
          this.set_video_state(l.V_PAUSE)
      },
      on_video_waiting: function(t) {
          this.set_video_state(l.V_BUFF)
      },
      on_video_loadstart: function(t) {
          this.set_video_state(l.V_BUFF)
      },
      on_video_canplay: function(t) {
          this.set_video_state(l.V_CANPLAY)
      },
      on_video_ended: function(t) {
          this.set_video_state(l.V_COMPLETE)
      },
      set_video_state: function(t) {
          var e = this.video_state;
          if (e !== t && this.elem.querySelector(".state-icon i")) {
              switch (this.elem.querySelector(".state-icon i").classList.remove("active"),
              t) {
              case l.V_READY:
                  this.options.eventBus && this.options.eventBus.dispatch(l.E_VIDEO_READY, {
                      play: this.play.bind(this),
                      pause: this.pause.bind(this),
                      seek: this.seek.bind(this),
                      getDuration: this.getDuration.bind(this),
                      isFullScreen: this.isFullScreen
                  });
                  break;
              case l.V_PLAY:
                  this.elem.querySelector(".btn-play").classList.add("hide"),
                  this.elem.querySelector(".btn-pause").classList.remove("hide"),
                  this.elem.querySelector(".player-box").classList.add("full"),
                  this.elem.querySelector(".state-icon i.play-icon").classList.add("active"),
                  this.elem.querySelector(".state-icon i.pause-icon").classList.remove("active"),
                  this.firstBuff ? (this.firstBuff = !1,
                  this.set_control_bar_visible(!1)) : this.set_control_bar_visible(!1, this.control_bar_timer_delay),
                  this.stage.play();
                  break;
              case l.V_PAUSE:
                  this.elem.querySelector(".btn-pause").classList.add("hide"),
                  this.elem.querySelector(".btn-play").classList.remove("hide"),
                  this.elem.querySelector(".state-icon i.pause-icon").classList.add("active"),
                  this.elem.querySelector(".state-icon i.play-icon").classList.remove("active"),
                  this.stage.pause();
                  break;
              case l.V_BUFF:
                  void 0 === this.firstBuff && (this.firstBuff = !0),
                  this.hidePlayIcon = !0,
                  this.elem.querySelector(".state-icon").classList.remove("hide"),
                  this.elem.querySelector(".state-icon i.buff-icon").classList.add("active");
                  break;
              case l.V_COMPLETE:
                  this.elem.querySelector(".state-icon i.pause-icon").classList.add("active");
                  break;
              case l.V_CANPLAY:
                  Object(c.e)(".load-layer", "hide") && this.elem.querySelector(".load-layer").click(),
                  this.elem.querySelector(".btn-play").classList.add("hide"),
                  this.elem.querySelector(".input-bar").classList.add("hide"),
                  this.elem.querySelector(".btn-pause").classList.remove("hide"),
                  this.elem.querySelector(".player-box").classList.add("full"),
                  this.elem.querySelector(".state-icon i.play-icon").classList.remove("active"),
                  this.elem.querySelector(".state-icon i.pause-icon").classList.add("active"),
                  this.firstBuff ? (this.firstBuff = !1,
                  this.set_control_bar_visible(!1)) : this.set_control_bar_visible(!1, this.control_bar_timer_delay);
                  break;
              case l.V_PLAYING:
                  this.set_control_bar_visible(!1),
                  this.elem.querySelector(".state-icon i.play-icon").classList.add("active"),
                  this.elem.querySelector(".state-icon i.pause-icon").classList.remove("active")
              }
              t !== l.V_PLAY && (this.elem.querySelector(".player-box").classList.remove("full"),
              this.set_control_bar_visible(!0)),
              this.video_state = t,
              this.on_state_change(this.video_state, e)
          }
      },
      on_state_change: function(t, e) {
          this.options.on_state_change && this.options.on_state_change(t, e)
      },
      get_video_state: function() {
          return this.video_state
      },
      start_video: function(t, e, n) {
          var i = this.options
            , o = this;
          this.elem.querySelector(".load-layer").classList.add("hide"),
          this.init_video(i.video_url, i.video_type, i.preload),
          this.init_comment(),
          this.options.autoplay || this.play_video(),
          "audio" === this.options.type || (this.elem.querySelector("video").classList.add("show"),
          this.elem.querySelector("video").style.display = "inline"),
          this.set_control_bar_visible(!1),
          Object(c.g)(this.elem.querySelector(".state-icon i.play-icon"), "click", function(t) {
              Object(c.e)(this, "active") && o.pause_video()
          }),
          Object(c.g)(this.elem.querySelector(".state-icon i.pause-icon"), "click", function(t) {
              o.play_video()
          })
      },
      pause_video: function() {
          var t = this.video;
          t && t.pause()
      },
      play_video: function() {
          var t = this.video
            , e = window.navigator.userAgent
            , n = document.querySelectorAll("video");
          if (t) {
              if (e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || e.indexOf("iPad") > -1)
                  for (var i = 0; i < n.length; i++)
                      n[i].pause();
              t.play(),
              !this.tracked && this.options.track && (this.tracked = !0,
              this.send_track())
          }
      },
      set_duration: function(t) {
          this.duration = t
      },
      seek_video: function(t) {
          this.video && (t = Math.max(0, t),
          this.options.max_duration || (t = Math.min(t, this.video_duration() - .5)),
          this.video.pause(),
          this.video.currentTime = t,
          this.video.play())
      },
      set_volume: function(t) {
          this.volume = t,
          this.video && (this.video.volume = t)
      },
      video_time: function() {
          return this.currentTime
      },
      video_duration: function() {
          return this.duration
      },
      on_timer_interval: function() {
          this.update_time(this.video.currentTime, this.video.duration)
      },
      on_slider_seek: function(t) {
          this.seek_video(t)
      },
      on_volume_slider_seek: function(t) {
          this.set_volume(t / 100)
      },
      update_time: function(t, e) {
          if (e != this.duration) {
              this.maxDuration = this.options.max_duration > 0 ? Math.min(this.options.max_duration, e) : e;
              var n = this.duration;
              this.duration = e,
              this.sliderCtrl.setMax(this.maxDuration),
              Math.floor(n) !== Math.floor(this.maxDuration) && this.elem.querySelector(".time-total-text") && (this.elem.querySelector(".time-total-text").innerText = Object(c.c)(this.maxDuration))
          }
          if (this.currentLessThanMaxDurationStatus && t > this.maxDuration ? (this.currentLessThanMaxDurationStatus = !1,
          this.seek_video(this.duration - .1)) : t < this.maxDuration && !this.currentLessThanMaxDurationStatus && this.options.max_duration > 0 && (this.currentLessThanMaxDurationStatus = !0),
          t !== this.currentTime) {
              var i = this.currentTime;
              this.currentTime = t,
              this.sliderCtrl.setValue(t, !1),
              Math.floor(i) !== Math.floor(t) && (this.elem.querySelector(".time-current-text").innerText = Object(c.c)(t > this.maxDuration ? this.maxDuration : t))
          }
      },
      to_wide_screen: function() {
          switch (this.screen_state) {
          case l.UI_NORMAL:
              this.elem.querySelector(".player-box").classList.add("wide");
              break;
          case l.UI_FULL:
              this.elem.querySelector(".player-box").classList.remove("full"),
              this.set_control_bar_visible(!0),
              l.exitFullscreen()
          }
          try {
              window.player_fullwin(!0)
          } catch (t) {}
          this.elem.querySelector(".btn-widescreen").classList.add("active"),
          this.screen_state = l.UI_WIDE,
          this.comment_stage_resize()
      },
      to_normal_screen: function() {
          switch (this.screen_state) {
          case l.UI_FULL:
              l.exitFullscreen(),
              this.elem.querySelector(".player-box").classList.remove("full"),
              this.set_control_bar_visible(!0);
          case l.UI_WIDE:
              this.elem.querySelector(".player-box").classList.remove("wide")
          }
          try {
              window.player_fullwin(!1)
          } catch (t) {}
          this.elem.querySelector(".btn-widescreen").classList.remove("active"),
          this.screen_state = l.UI_NORMAL,
          this.comment_stage_resize()
      },
      to_full_screen: function() {
          switch (this.screen_state) {
          case l.UI_NORMAL:
              this.elem.querySelector(".player-box").classList.add("wide");
          case l.UI_WIDE:
              this.elem.querySelector(".player-box").classList.add("full"),
              l.requestFullscreen(this.elem)
          }
          try {
              window.player_fullwin(!0)
          } catch (t) {}
          this.elem.querySelector(".btn-widescreen").classList.remove("active"),
          this.screen_state = l.UI_FULL,
          this.comment_stage_resize()
      },
      on_fullscreen_change: function(t) {
          l.isFullscreen() || this.to_normal_screen()
      },
      on_display_mousemove: function(t) {
          this.screen_state === l.UI_FULL && (t.pageY >= 2 * this.elem.clientHeight / 3 ? this.control_bar_visible || this.set_control_bar_visible(!0) : this.control_bar_visible && this.set_control_bar_visible(!1))
      },
      on_display_click: function(t) {
          t.target === this.elem.querySelector(".display") && (this.control_bar_visible ? this.set_control_bar_visible(!1) : (this.set_control_bar_visible(!0),
          this.get_video_state() === l.V_PLAY && this.set_control_bar_visible(!1, this.control_bar_timer_delay)))
      },
      on_play_btn_click: function(t) {
          this.play_video()
      },
      on_send_btn_click: function(t) {
          var e = this.elem.querySelector(".text-input").value;
          e.length && (this.elem.querySelector(".text-input").value,
          this.send_comment(e))
      },
      on_keydown: function(t) {
          if (t.target != this.elem.querySelector(".text-input"))
              switch (t.which) {
              case 32:
                  this.video_state != l.V_PLAY ? this.play_video() : this.pause_video();
                  break;
              case 37:
                  this.seek_video(this.video_time() - 5);
                  break;
              case 38:
                  break;
              case 39:
                  this.seek_video(this.video_time() + 5)
              }
      },
      on_pause_btn_click: function(t) {
          this.pause_video()
      },
      on_share_btn_click: function(t) {
          "function" == typeof window.on_share_btn_click && window.on_share_btn_click.call(this, t)
      },
      on_comment_btn_click: function(t) {
          if (!this.stage)
              return !1;
          this.stage.visible() ? (this.stage.visible(!1),
          this.elem.querySelector(".btn-comment").classList.remove("active")) : (this.stage.visible(!0),
          this.elem.querySelector(".btn-comment").classList.add("active"))
      },
      on_repeat_btn_click: function(t) {
          this.video && (this.video.loop ? (this.video.loop = !1,
          this.elem.querySelector(".btn-repeat").classList.remove("active")) : this.elem.querySelector(".btn-repeat").classList.add("active"))
      },
      on_mute_btn_click: function(t) {
          this.elem.querySelector(".btn-mute").classList.add("hide"),
          this.elem.querySelector(".btn-unmute").classList.remove("hide"),
          this.elem.querySelector(".control-volume-slider").classList.add("mute"),
          this.video && (this.video.muted = !0)
      },
      on_unmute_btn_click: function(t) {
          this.elem.querySelector(".btn-unmute").classList.add("hide"),
          this.elem.querySelector(".btn-mute").classList.remove("hide"),
          this.elem.querySelector(".control-volume-slider").classList.remove("mute"),
          this.video && (this.video.muted = !1)
      },
      set_control_bar_visible: function(t, e) {
          var n = this;
          clearTimeout(this.control_bar_timer),
          t !== this.control_bar_visible && (t ? (this.elem.querySelector(".control-bar").classList.remove("hide"),
          this.elem.querySelector(".state-icon").classList.remove("hide"),
          this.control_bar_visible = !0) : (this.hidePlayIcon ? this.hidePlayIcon = !1 : this.elem.querySelector(".state-icon").classList.remove("hide"),
          this.control_bar_timer = setTimeout(function() {
              n.elem.querySelector(".control-bar").classList.add("hide"),
              n.elem.querySelector(".state-icon").classList.add("hide"),
              n.control_bar_visible = !1
          }, e || 0)))
      },
      init_comment: function() {
          var t = this
            , e = {
              width: this.elem.offsetWidth,
              height: this.elem.offsetHeight,
              duration: 4.5,
              size: .618 + .382 / (2 * window.devicePixelRatio),
              alpha: .75
          }
            , n = new Stage({
              R: this.options.danmaku_number || 500
          });
          this.stage = n,
          n.config().setDuration(e.duration),
          n.config().setTextScale(e.sizee),
          n.config().setAlpha(e.alpha),
          n.config().initializeByDiv(this.elem.querySelector(".comment-layer")),
          n.config().attachVideoElement(this.video),
          n.config().setGetStateFunc(void 0);
          var i = t.options.cmt_url || "";
          t.options.get_cmt_url && (i = t.options.get_cmt_url + t.options.cid + ".xml"),
          this.live_mode ? (n.config().setLiveMode(!0),
          n.connect(i, function(e) {
              t.stage.addCmt(e)
          }, null, function(t) {
              try {
                  if (t = t.substr(4, t.length),
                  "DANMU_MSG" == (t = JSON.parse(t)).cmd) {
                      var e = (t = t.info)[1]
                        , n = t[0]
                        , i = {
                          mode: parseInt(n[1]),
                          size: parseInt(n[2]),
                          color: parseInt(n[3]),
                          date: parseInt(n[4]),
                          rnd: n[5],
                          class: parseInt(n[6]),
                          hash: n[7],
                          dmid: n[8],
                          text: e
                      };
                      "function" == typeof this.onComment && this.onComment(i)
                  }
              } catch (t) {
                  console.log("Packet invalid")
              }
          })) : n.loadCmtFile(i, function(e) {
              return t.options.get_cmt_url ? e : e.replace(/comment\.bilibili\.[^\/]+/, function(t, e, n) {
                  return "comment.bilibili.com"
              })
          }),
          this.comment_stage_resize(),
          n.play()
      },
      comment_stage_resize: function() {
          if (!this.stage)
              return !1;
          this.stage.resize(this.elem.offsetWidth, this.elem.offsetHeight)
      },
      send_comment: function(t, e, n) {
          var i, r;
          if ("string" == typeof t)
              i = t.trim(),
              r = 16777215;
          else {
              if ("object" != (void 0 === t ? "undefined" : u(t)))
                  return !1;
              i = t.msg.trim(),
              r = t.color || 16777215
          }
          if (!i || !this.stage)
              return "function" == typeof n && n(),
              !1;
          var s = {
              mode: 1,
              size: 25,
              color: 16777215,
              date: new Date / 1e3,
              rnd: this.random,
              text: i
          }
            , a = this.video.currentTime || 0;
          s.border = !0,
          s.borderColor = 6750207;
          var c = this.stage.addCmt(s)
            , l = {
              cid: this.options.cid,
              msg: i,
              pool: 0,
              color: r,
              rnd: this.random,
              fontsize: 25,
              mode: 1,
              playtime: a,
              date: Date.parse(new Date)
          };
          this.options.send_cmt_url ? o.a.get(this.options.send_cmt_url, {
              withCredentials: !0,
              params: l
          }).then(function(t) {
              " function" == typeof e && e(c)
          }).catch(function(t) {
              " function" == typeof e && e(c)
          }) : "function" == typeof e && e(c)
      },
      __GetCookie: function(t) {
          try {
              var e = "" + document.cookie
                , n = e.indexOf(t + "=");
              if (-1 == n || "" == t)
                  return "";
              var i = e.indexOf(";", n);
              return -1 == i && (i = e.length),
              unescape(e.substring(n + t.length + 1, i))
          } catch (t) {
              return 0
          }
      },
      ws: function() {
          var t = {
              WS_OP_HEARTBEAT: 2,
              WS_OP_HEARTBEAT_REPLY: 3,
              WS_OP_MESSAGE: 5,
              WS_OP_USER_AUTHENTICATION: 7,
              WS_OP_CONNECT_SUCCESS: 8,
              WS_PACKAGE_HEADER_TOTAL_LENGTH: 16,
              WS_PACKAGE_OFFSET: 0,
              WS_HEADER_OFFSET: 4,
              WS_VERSION_OFFSET: 6,
              WS_OPERATION_OFFSET: 8,
              WS_SEQUENCE_OFFSET: 12
          }
            , e = function() {
              function e(e) {
                  this.config = Object.assign({}, e),
                  this.url = this.config.url,
                  this.packetList = [],
                  this.packetLimit = 1,
                  this.WebSocket = window.WebSocket || window.MozWebSocket,
                  this._WS_BINARY_HEADER_LIST = [{
                      name: "Header Length",
                      key: "headerLen",
                      bytes: 2,
                      offset: t.WS_HEADER_OFFSET,
                      value: t.WS_PACKAGE_HEADER_TOTAL_LENGTH
                  }, {
                      name: "Protocol Version",
                      key: "ver",
                      bytes: 2,
                      offset: t.WS_VERSION_OFFSET,
                      value: t.WS_HEADER_DEFAULT_VERSION
                  }, {
                      name: "Operation",
                      key: "op",
                      bytes: 4,
                      offset: t.WS_OPERATION_OFFSET,
                      value: t.WS_HEADER_DEFAULT_OPERATION
                  }, {
                      name: "Sequence Id",
                      key: "seq",
                      bytes: 4,
                      offset: t.WS_SEQUENCE_OFFSET,
                      value: t.WS_HEADER_DEFAULT_SEQUENCE
                  }]
              }
              return e.prototype = {
                  constructor: e,
                  _conn: null,
                  _close: !1,
                  retry: 0,
                  max_retry: -1,
                  mergeArrayBuffer: function(t, e) {
                      var n = new Uint8Array(t)
                        , i = new Uint8Array(e)
                        , o = new Uint8Array(n.byteLength + i.byteLength);
                      return o.set(n, 0),
                      o.set(i, n.byteLength),
                      o.buffer
                  },
                  getDecoder: function() {
                      return window.TextDecoder ? new window.TextDecoder : {
                          decode: function(t) {
                              return decodeURIComponent(window.escape(String.fromCharCode.apply(String, new Uint8Array(t))))
                          }
                      }
                  },
                  getEncoder: function() {
                      return window.TextEncoder ? new window.TextEncoder : {
                          encode: function(t) {
                              for (var e = new ArrayBuffer(t.length), n = new Uint8Array(e), i = 0, o = t.length; i < o; i++)
                                  n[i] = t.charCodeAt(i);
                              return e
                          }
                      }
                  },
                  connect: function() {
                      if (!this.WebSocket)
                          return !1;
                      var e = this;
                      this._close = !1,
                      this._conn = new this.WebSocket(this.url),
                      this._conn.binaryType = "arraybuffer",
                      this._conn.onopen = function() {
                          var n = JSON.stringify({
                              uid: e.config.uid,
                              roomid: e.config.cid
                          })
                            , i = new ArrayBuffer(t.WS_PACKAGE_HEADER_TOTAL_LENGTH)
                            , o = new DataView(i,0)
                            , r = e.getEncoder().encode(n);
                          o.setInt32(t.WS_PACKAGE_OFFSET, t.WS_PACKAGE_HEADER_TOTAL_LENGTH + r.byteLength),
                          o.setInt16(t.WS_HEADER_OFFSET, t.WS_PACKAGE_HEADER_TOTAL_LENGTH),
                          o.setInt16(t.WS_VERSION_OFFSET, 1),
                          o.setInt32(t.WS_OPERATION_OFFSET, 7),
                          o.setInt32(t.WS_SEQUENCE_OFFSET, 1),
                          e._conn.send(e.mergeArrayBuffer(i, r))
                      }
                      ,
                      this._conn.onmessage = function(t) {
                          e.parsePacket(t.data)
                      }
                      ,
                      this._conn.onclose = function(t) {
                          e._close || (-1 == e.max_retry || e.retry++ < e.max_retry) && setTimeout(function() {
                              e.connect()
                          }, 1e3 * Math.floor(3 * Math.random() + 3))
                      }
                  },
                  heartbeat: function() {
                      var e = new ArrayBuffer(t.WS_PACKAGE_HEADER_TOTAL_LENGTH)
                        , n = new DataView(e,0);
                      n.setInt32(t.WS_PACKAGE_OFFSET, t.WS_PACKAGE_HEADER_TOTAL_LENGTH),
                      n.setInt16(t.WS_HEADER_OFFSET, t.WS_PACKAGE_HEADER_TOTAL_LENGTH),
                      n.setInt16(t.WS_VERSION_OFFSET, 1),
                      n.setInt32(t.WS_OPERATION_OFFSET, 2),
                      n.setInt32(t.WS_SEQUENCE_OFFSET, 1),
                      this._conn.send(e)
                  },
                  close: function() {
                      this._close = !0,
                      this._conn && this._conn.close()
                  },
                  destroy: function() {
                      clearInterval(this.interval_timer),
                      this.close()
                  },
                  parsePacket: function(e) {
                      var n = this
                        , i = new DataView(e,0)
                        , o = (i.getInt32(t.WS_PACKAGE_OFFSET),
                      i.getInt16(t.WS_HEADER_OFFSET),
                      i.getInt16(t.WS_VERSION_OFFSET),
                      i.getInt32(t.WS_OPERATION_OFFSET));
                      i.getInt32(t.WS_SEQUENCE_OFFSET);
                      switch (o) {
                      case 8:
                          n.heartbeat(),
                          n.interval_timer = setInterval(function() {
                              n.heartbeat()
                          }, 3e4)
                      }
                  }
              },
              e
          }();
          this.websocket = new e({
              url: "https:" == window.location.protocol ? "wss://broadcast.chat.bilibili.com:4095/sub" : "ws://broadcast.chat.bilibili.com:4090/sub",
              uid: parseInt(this.__GetCookie("DedeUserID")),
              cid: parseInt(this.options.cid)
          }),
          this.websocket.connect()
      },
      send_track: function() {
          var t = this
            , e = {
              aid: this.options.aid,
              cid: this.options.cid,
              part: this.options.page || 1,
              did: this.__GetCookie("sid") || Math.random().toString(36).slice(-8),
              ftime: this.__GetCookie("fts") || parseInt(new Date / 1e3, 10),
              jsonp: "jsonp",
              lv: "",
              mid: "",
              csrf: this.__GetCookie("bili_jct") || "",
              stime: ""
          };
          o.a.get("//api.bilibili.com/x/web-interface/nav", {
              withCredentials: !0
          }).then(function(n) {
              n && 200 === n.status && n.data && n.data.data && n.data.data.level_info && (e.mid = n.data.data.mid,
              e.lv = n.data.data.level_info.current_level),
              t.get_system_time(e)
          }).catch(function() {
              t.get_system_time(e)
          })
      },
      get_system_time: function(t) {
          var e = this;
          o.a.get("//api.bilibili.com/x/report/click/now", {
              withCredentials: !0,
              params: {
                  jsonp: "jsonp"
              }
          }).then(function(n) {
              n && 200 === n.status && n.data && 0 === n.data.code && (t.stime = n.data.data.now),
              e.send_report_click(t)
          }).catch(function() {
              e.send_report_click(t)
          })
      },
      send_report_click: function(t) {
          o.a.post("//api.bilibili.com/x/report/click/h5", s.a.stringify(t), {
              withCredentials: !0
          })
      }
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(1)
    , o = n(44)
    , r = n(93)
    , s = n(29);

  function a(t) {
      var e = new r(t)
        , n = o(r.prototype.request, e);
      return i.extend(n, r.prototype, e),
      i.extend(n, e),
      n
  }
  var c = a(s);
  c.Axios = r,
  c.create = function(t) {
      return a(i.merge(s, t))
  }
  ,
  c.Cancel = n(49),
  c.CancelToken = n(107),
  c.isCancel = n(48),
  c.all = function(t) {
      return Promise.all(t)
  }
  ,
  c.spread = n(108),
  t.exports = c,
  t.exports.default = c
}
, function(t, e) {
  function n(t) {
      return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
  }
  t.exports = function(t) {
      return null != t && (n(t) || function(t) {
          return "function" == typeof t.readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0))
      }(t) || !!t._isBuffer)
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(29)
    , o = n(1)
    , r = n(102)
    , s = n(103);

  function a(t) {
      this.defaults = t,
      this.interceptors = {
          request: new r,
          response: new r
      }
  }
  a.prototype.request = function(t) {
      "string" == typeof t && (t = o.merge({
          url: arguments[0]
      }, arguments[1])),
      (t = o.merge(i, {
          method: "get"
      }, this.defaults, t)).method = t.method.toLowerCase();
      var e = [s, void 0]
        , n = Promise.resolve(t);
      for (this.interceptors.request.forEach(function(t) {
          e.unshift(t.fulfilled, t.rejected)
      }),
      this.interceptors.response.forEach(function(t) {
          e.push(t.fulfilled, t.rejected)
      }); e.length; )
          n = n.then(e.shift(), e.shift());
      return n
  }
  ,
  o.forEach(["delete", "get", "head", "options"], function(t) {
      a.prototype[t] = function(e, n) {
          return this.request(o.merge(n || {}, {
              method: t,
              url: e
          }))
      }
  }),
  o.forEach(["post", "put", "patch"], function(t) {
      a.prototype[t] = function(e, n, i) {
          return this.request(o.merge(i || {}, {
              method: t,
              url: e,
              data: n
          }))
      }
  }),
  t.exports = a
}
, function(t, e, n) {
  "use strict";
  var i = n(1);
  t.exports = function(t, e) {
      i.forEach(t, function(n, i) {
          i !== e && i.toUpperCase() === e.toUpperCase() && (t[e] = n,
          delete t[i])
      })
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(47);
  t.exports = function(t, e, n) {
      var o = n.config.validateStatus;
      n.status && o && !o(n.status) ? e(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
  }
}
, function(t, e, n) {
  "use strict";
  t.exports = function(t, e, n, i, o) {
      return t.config = e,
      n && (t.code = n),
      t.request = i,
      t.response = o,
      t
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(1);

  function o(t) {
      return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
  }
  t.exports = function(t, e, n) {
      if (!e)
          return t;
      var r;
      if (n)
          r = n(e);
      else if (i.isURLSearchParams(e))
          r = e.toString();
      else {
          var s = [];
          i.forEach(e, function(t, e) {
              null !== t && void 0 !== t && (i.isArray(t) ? e += "[]" : t = [t],
              i.forEach(t, function(t) {
                  i.isDate(t) ? t = t.toISOString() : i.isObject(t) && (t = JSON.stringify(t)),
                  s.push(o(e) + "=" + o(t))
              }))
          }),
          r = s.join("&")
      }
      return r && (t += (-1 === t.indexOf("?") ? "?" : "&") + r),
      t
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(1)
    , o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
  t.exports = function(t) {
      var e, n, r, s = {};
      return t ? (i.forEach(t.split("\n"), function(t) {
          if (r = t.indexOf(":"),
          e = i.trim(t.substr(0, r)).toLowerCase(),
          n = i.trim(t.substr(r + 1)),
          e) {
              if (s[e] && o.indexOf(e) >= 0)
                  return;
              s[e] = "set-cookie" === e ? (s[e] ? s[e] : []).concat([n]) : s[e] ? s[e] + ", " + n : n
          }
      }),
      s) : s
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(1);
  t.exports = i.isStandardBrowserEnv() ? function() {
      var t, e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");

      function o(t) {
          var i = t;
          return e && (n.setAttribute("href", i),
          i = n.href),
          n.setAttribute("href", i),
          {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
          }
      }
      return t = o(window.location.href),
      function(e) {
          var n = i.isString(e) ? o(e) : e;
          return n.protocol === t.protocol && n.host === t.host
      }
  }() : function() {
      return !0
  }
}
, function(t, e, n) {
  "use strict";
  var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  function o() {
      this.message = "String contains an invalid character"
  }
  o.prototype = new Error,
  o.prototype.code = 5,
  o.prototype.name = "InvalidCharacterError",
  t.exports = function(t) {
      for (var e, n, r = String(t), s = "", a = 0, c = i; r.charAt(0 | a) || (c = "=",
      a % 1); s += c.charAt(63 & e >> 8 - a % 1 * 8)) {
          if ((n = r.charCodeAt(a += .75)) > 255)
              throw new o;
          e = e << 8 | n
      }
      return s
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(1);
  t.exports = i.isStandardBrowserEnv() ? {
      write: function(t, e, n, o, r, s) {
          var a = [];
          a.push(t + "=" + encodeURIComponent(e)),
          i.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
          i.isString(o) && a.push("path=" + o),
          i.isString(r) && a.push("domain=" + r),
          !0 === s && a.push("secure"),
          document.cookie = a.join("; ")
      },
      read: function(t) {
          var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
          return e ? decodeURIComponent(e[3]) : null
      },
      remove: function(t) {
          this.write(t, "", Date.now() - 864e5)
      }
  } : {
      write: function() {},
      read: function() {
          return null
      },
      remove: function() {}
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(1);

  function o() {
      this.handlers = []
  }
  o.prototype.use = function(t, e) {
      return this.handlers.push({
          fulfilled: t,
          rejected: e
      }),
      this.handlers.length - 1
  }
  ,
  o.prototype.eject = function(t) {
      this.handlers[t] && (this.handlers[t] = null)
  }
  ,
  o.prototype.forEach = function(t) {
      i.forEach(this.handlers, function(e) {
          null !== e && t(e)
      })
  }
  ,
  t.exports = o
}
, function(t, e, n) {
  "use strict";
  var i = n(1)
    , o = n(104)
    , r = n(48)
    , s = n(29)
    , a = n(105)
    , c = n(106);

  function u(t) {
      t.cancelToken && t.cancelToken.throwIfRequested()
  }
  t.exports = function(t) {
      return u(t),
      t.baseURL && !a(t.url) && (t.url = c(t.baseURL, t.url)),
      t.headers = t.headers || {},
      t.data = o(t.data, t.headers, t.transformRequest),
      t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}),
      i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
          delete t.headers[e]
      }),
      (t.adapter || s.adapter)(t).then(function(e) {
          return u(t),
          e.data = o(e.data, e.headers, t.transformResponse),
          e
      }, function(e) {
          return r(e) || (u(t),
          e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))),
          Promise.reject(e)
      })
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(1);
  t.exports = function(t, e, n) {
      return i.forEach(n, function(n) {
          t = n(t, e)
      }),
      t
  }
}
, function(t, e, n) {
  "use strict";
  t.exports = function(t) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
  }
}
, function(t, e, n) {
  "use strict";
  t.exports = function(t, e) {
      return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(49);

  function o(t) {
      if ("function" != typeof t)
          throw new TypeError("executor must be a function.");
      var e;
      this.promise = new Promise(function(t) {
          e = t
      }
      );
      var n = this;
      t(function(t) {
          n.reason || (n.reason = new i(t),
          e(n.reason))
      })
  }
  o.prototype.throwIfRequested = function() {
      if (this.reason)
          throw this.reason
  }
  ,
  o.source = function() {
      var t;
      return {
          token: new o(function(e) {
              t = e
          }
          ),
          cancel: t
      }
  }
  ,
  t.exports = o
}
, function(t, e, n) {
  "use strict";
  t.exports = function(t) {
      return function(e) {
          return t.apply(null, e)
      }
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(110)
    , o = n(111)
    , r = n(51);
  t.exports = {
      formats: r,
      parse: o,
      stringify: i
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(50)
    , o = n(51)
    , r = {
      brackets: function(t) {
          return t + "[]"
      },
      indices: function(t, e) {
          return t + "[" + e + "]"
      },
      repeat: function(t) {
          return t
      }
  }
    , s = Array.isArray
    , a = Array.prototype.push
    , c = function(t, e) {
      a.apply(t, s(e) ? e : [e])
  }
    , u = Date.prototype.toISOString
    , l = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encoder: i.encode,
      encodeValuesOnly: !1,
      indices: !1,
      serializeDate: function(t) {
          return u.call(t)
      },
      skipNulls: !1,
      strictNullHandling: !1
  }
    , h = function t(e, n, o, r, s, a, u, h, p, f, d, m, v) {
      var y = e;
      if ("function" == typeof u ? y = u(n, y) : y instanceof Date && (y = f(y)),
      null === y) {
          if (r)
              return a && !m ? a(n, l.encoder, v) : n;
          y = ""
      }
      if ("string" == typeof y || "number" == typeof y || "boolean" == typeof y || i.isBuffer(y))
          return a ? [d(m ? n : a(n, l.encoder, v)) + "=" + d(a(y, l.encoder, v))] : [d(n) + "=" + d(String(y))];
      var _, b = [];
      if (void 0 === y)
          return b;
      if (Array.isArray(u))
          _ = u;
      else {
          var g = Object.keys(y);
          _ = h ? g.sort(h) : g
      }
      for (var w = 0; w < _.length; ++w) {
          var E = _[w];
          s && null === y[E] || (Array.isArray(y) ? c(b, t(y[E], o(n, E), o, r, s, a, u, h, p, f, d, m, v)) : c(b, t(y[E], n + (p ? "." + E : "[" + E + "]"), o, r, s, a, u, h, p, f, d, m, v)))
      }
      return b
  };
  t.exports = function(t, e) {
      var n = t
        , s = e ? i.assign({}, e) : {};
      if (null !== s.encoder && void 0 !== s.encoder && "function" != typeof s.encoder)
          throw new TypeError("Encoder has to be a function.");
      var a = void 0 === s.delimiter ? l.delimiter : s.delimiter
        , u = "boolean" == typeof s.strictNullHandling ? s.strictNullHandling : l.strictNullHandling
        , p = "boolean" == typeof s.skipNulls ? s.skipNulls : l.skipNulls
        , f = "boolean" == typeof s.encode ? s.encode : l.encode
        , d = "function" == typeof s.encoder ? s.encoder : l.encoder
        , m = "function" == typeof s.sort ? s.sort : null
        , v = void 0 === s.allowDots ? l.allowDots : !!s.allowDots
        , y = "function" == typeof s.serializeDate ? s.serializeDate : l.serializeDate
        , _ = "boolean" == typeof s.encodeValuesOnly ? s.encodeValuesOnly : l.encodeValuesOnly
        , b = s.charset || l.charset;
      if (void 0 !== s.charset && "utf-8" !== s.charset && "iso-8859-1" !== s.charset)
          throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
      if (void 0 === s.format)
          s.format = o.default;
      else if (!Object.prototype.hasOwnProperty.call(o.formatters, s.format))
          throw new TypeError("Unknown format option provided.");
      var g, w, E = o.formatters[s.format];
      "function" == typeof s.filter ? n = (w = s.filter)("", n) : Array.isArray(s.filter) && (g = w = s.filter);
      var S, x = [];
      if ("object" != typeof n || null === n)
          return "";
      S = s.arrayFormat in r ? s.arrayFormat : "indices"in s ? s.indices ? "indices" : "repeat" : "indices";
      var O = r[S];
      g || (g = Object.keys(n)),
      m && g.sort(m);
      for (var L = 0; L < g.length; ++L) {
          var A = g[L];
          p && null === n[A] || c(x, h(n[A], A, O, u, p, f ? d : null, w, m, v, y, E, _, b))
      }
      var T = x.join(a)
        , k = !0 === s.addQueryPrefix ? "?" : "";
      return s.charsetSentinel && (k += "iso-8859-1" === b ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"),
      T.length > 0 ? k + T : ""
  }
}
, function(t, e, n) {
  "use strict";
  var i = n(50)
    , o = Object.prototype.hasOwnProperty
    , r = {
      allowDots: !1,
      allowPrototypes: !1,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: !1,
      decoder: i.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1
  }
    , s = function(t) {
      return t.replace(/&#(\d+);/g, function(t, e) {
          return String.fromCharCode(parseInt(e, 10))
      })
  }
    , a = function(t, e, n) {
      if (t) {
          var i = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t
            , r = /(\[[^[\]]*])/g
            , s = /(\[[^[\]]*])/.exec(i)
            , a = s ? i.slice(0, s.index) : i
            , c = [];
          if (a) {
              if (!n.plainObjects && o.call(Object.prototype, a) && !n.allowPrototypes)
                  return;
              c.push(a)
          }
          for (var u = 0; null !== (s = r.exec(i)) && u < n.depth; ) {
              if (u += 1,
              !n.plainObjects && o.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes)
                  return;
              c.push(s[1])
          }
          return s && c.push("[" + i.slice(s.index) + "]"),
          function(t, e, n) {
              for (var i = e, o = t.length - 1; o >= 0; --o) {
                  var r, s = t[o];
                  if ("[]" === s && n.parseArrays)
                      r = [].concat(i);
                  else {
                      r = n.plainObjects ? Object.create(null) : {};
                      var a = "[" === s.charAt(0) && "]" === s.charAt(s.length - 1) ? s.slice(1, -1) : s
                        , c = parseInt(a, 10);
                      n.parseArrays || "" !== a ? !isNaN(c) && s !== a && String(c) === a && c >= 0 && n.parseArrays && c <= n.arrayLimit ? (r = [])[c] = i : r[a] = i : r = {
                          0: i
                      }
                  }
                  i = r
              }
              return i
          }(c, e, n)
      }
  };
  t.exports = function(t, e) {
      var n = e ? i.assign({}, e) : {};
      if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder)
          throw new TypeError("Decoder has to be a function.");
      if (n.ignoreQueryPrefix = !0 === n.ignoreQueryPrefix,
      n.delimiter = "string" == typeof n.delimiter || i.isRegExp(n.delimiter) ? n.delimiter : r.delimiter,
      n.depth = "number" == typeof n.depth ? n.depth : r.depth,
      n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : r.arrayLimit,
      n.parseArrays = !1 !== n.parseArrays,
      n.decoder = "function" == typeof n.decoder ? n.decoder : r.decoder,
      n.allowDots = void 0 === n.allowDots ? r.allowDots : !!n.allowDots,
      n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : r.plainObjects,
      n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : r.allowPrototypes,
      n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : r.parameterLimit,
      n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : r.strictNullHandling,
      void 0 !== n.charset && "utf-8" !== n.charset && "iso-8859-1" !== n.charset)
          throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");
      if (void 0 === n.charset && (n.charset = r.charset),
      "" === t || null === t || void 0 === t)
          return n.plainObjects ? Object.create(null) : {};
      for (var c = "string" == typeof t ? function(t, e) {
          var n, a = {}, c = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t, u = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit, l = c.split(e.delimiter, u), h = -1, p = e.charset;
          if (e.charsetSentinel)
              for (n = 0; n < l.length; ++n)
                  0 === l[n].indexOf("utf8=") && ("utf8=%E2%9C%93" === l[n] ? p = "utf-8" : "utf8=%26%2310003%3B" === l[n] && (p = "iso-8859-1"),
                  h = n,
                  n = l.length);
          for (n = 0; n < l.length; ++n)
              if (n !== h) {
                  var f, d, m = l[n], v = m.indexOf("]="), y = -1 === v ? m.indexOf("=") : v + 1;
                  -1 === y ? (f = e.decoder(m, r.decoder, p),
                  d = e.strictNullHandling ? null : "") : (f = e.decoder(m.slice(0, y), r.decoder, p),
                  d = e.decoder(m.slice(y + 1), r.decoder, p)),
                  d && e.interpretNumericEntities && "iso-8859-1" === p && (d = s(d)),
                  o.call(a, f) ? a[f] = i.combine(a[f], d) : a[f] = d
              }
          return a
      }(t, n) : t, u = n.plainObjects ? Object.create(null) : {}, l = Object.keys(c), h = 0; h < l.length; ++h) {
          var p = l[h]
            , f = a(p, c[p], n);
          u = i.merge(u, f, n)
      }
      return i.compact(u)
  }
}
, function(t, e, n) {
  "use strict";
  e.a = r;
  var i, o = n(30);

  function r(t) {
      if (!t)
          throw "Slider:缺少初始化参数";
      this.opts = t,
      this.min = t.min || 0,
      this.max = t.max || 100,
      this.value = -1,
      this.label = t.label || "",
      this.upLayer = this.opts.upLayer,
      this.parent = this.opts.parent,
      this.uiValue = 0,
      this.liveDragging = void 0 !== this.opts.liveDragging && this.opts.liveDragging,
      this.container = document.createElement("div"),
      this.container.className = "ui-slider-container",
      this.labelLayer = document.createElement("div"),
      this.labelLayer.className = "ui-slider-label",
      this.thumb = document.createElement("div"),
      this.thumb.className = "ui-slider-thumb",
      this.tracker = document.createElement("div"),
      this.tracker.className = "ui-slider-tracker",
      this.eventLayer = document.createElement("div"),
      this.eventLayer.className = "ui-slider-event-layer",
      this.upLayer = this.upLayer || this.eventLayer,
      this.container.appendChild(this.tracker),
      this.container.appendChild(this.labelLayer),
      this.container.appendChild(this.thumb),
      this.container.appendChild(this.eventLayer);
      var e = this;
      Object(o.g)(this.eventLayer, "mousedown", function(t) {
          window.navigator.userAgent.indexOf("Firefox") > -1 && Object(o.b)(t),
          e.onmousedown(),
          e.onmousemove(t.pageX, t.pageY)
      }),
      Object(o.g)(this.eventLayer, "touchstart", function(t) {
          e.onmousedown(),
          e.ontouchmove(t.touches[0].pageX, t.touches[0].pageY)
      }),
      Object(o.f)() || Object(o.g)(this.upLayer, "mouseup", function(t) {
          e._down && e.onmouseup()
      }),
      this.upLayer.onmouseleave = function(t) {
          e._down && (console.log("out", t),
          e.onmouseup())
      }
      ,
      Object(o.f)() && Object(o.g)(this.upLayer, "touchend", function(t) {
          e._down && e.onmouseup()
      }),
      this.upLayer.onmousemove = function(t) {
          e._down && e.onmousemove(t.pageX, t.pageY)
      }
      ,
      Object(o.g)(this.eventLayer, "touchmove", function(t) {
          e.ontouchmove(t.touches[0].pageX, t.touches[0].pageY)
      }),
      this.opts.parent.appendChild(this.container),
      this.setLabel(this.label),
      this.setValue(this.opts.value)
  }
  r.prototype = {
      constructor: r,
      onclick: function() {},
      onmousedown: function() {
          this._down = !0
      },
      onmouseup: function() {
          this._down && (this._down = !1,
          this.opts.onChange && (this.opts.onChange(this.uiValue),
          this.setValue(this.uiValue)))
      },
      onmousemove: function(t, e) {
          if (this._down) {
              t -= Object(o.d)(this.container).left;
              var n = this.positionToValue(t)
                , i = this.uiValue;
              this.uiValue = n,
              this.setValue(n, !1),
              this._updatePosition(!0),
              this.liveDragging && this.opts.onChange && this.uiValue != i && this.opts.onChange(this.uiValue)
          }
      },
      ontouchmove: function(t, e) {
          if (this._down) {
              t -= Object(o.d)(this.container).left;
              var n = this.positionToValue(t);
              this.uiValue = n,
              this.setValue(n, !1),
              this._updatePosition(!0)
          }
      },
      valueToPosition: function(t) {
          return (t - this.min) / (this.max - this.min)
      },
      positionToValue: function(t) {
          var e = this.eventLayer.offsetWidth;
          return t = Math.max(0, t),
          t = Math.min(e, t),
          this.min + (this.max - this.min) * t / e
      },
      getValue: function() {
          return this.min + this.getPercents() * (this.max - this.min)
      },
      getPercents: function() {
          return (this.value - this.min) / (this.max - this.min)
      },
      setValue: function(t, e) {
          e = !1 !== e,
          t = Math.min(this.max, Math.max(this.min, t)),
          this.value != t && (this.value = t,
          this._dispatchChange(t))
      },
      setMax: function(t) {
          this.max = t,
          this._updatePosition()
      },
      _dispatchChange: function(t) {
          this._updatePosition(),
          this.opts.labelFunc ? this.setLabel(this.label + ": " + this.opts.labelFunc(this.value)) : this.setLabel(this.label + ": " + this.value)
      },
      _updatePosition: function(t) {
          this._down && !t || (this.thumb.style.width = 100 * this.getPercents() + "%")
      },
      setLabel: function(t) {
          this.labelLayer.innerHTML = t
      }
  },
  (i = document.createElement("style")).type = "text/css",
  i.innerHTML = '.ui-slider-container {position: absolute;width: 100%;height: 30px;text-align: center;}.ui-slider-thumb {position: absolute;top: 0px;bottom: 0px;left: 0px;}.ui-slider-thumb:after {content: "";position: absolute;display: block;top: 0px;right: -30px;width: 30px;height: 30px;border-radius: 28px;box-shadow: 0 0 2pt rgba(0, 0, 0, 0.5);background-color: #fff;}.ui-slider-tracker {position: absolute;top: 0px;bottom: 0px;left: 0px;right: -30px;background: #888;}.ui-slider-event-layer {position: absolute;top: 0px;left: 0px;bottom: 0px;right: -30px;}.ui-slider-label {position: absolute;display: block;top: 0px;bottom: 0px;left: 0px;right: 0px;line-height: 30px;font-size: 10px;color: #fff;}',
  document.head.appendChild(i)
}
, function(t, e, n) {
  "use strict";
  var i = function() {
      function t(t, e) {
          for (var n = 0; n < e.length; n++) {
              var i = e[n];
              i.enumerable = i.enumerable || !1,
              i.configurable = !0,
              "value"in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i)
          }
      }
      return function(e, n, i) {
          return n && t(e.prototype, n),
          i && t(e, i),
          e
      }
  }();
  var o = function() {
      function t() {
          !function(t, e) {
              if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function")
          }(this, t),
          this.listeners = {}
      }
      return i(t, [{
          key: "on",
          value: function(t, e, n) {
              if (!t)
                  throw new Error("Event name cannot be null or undefined");
              if (!e || "function" != typeof e)
                  throw new Error("Listener must be of type function.");
              void 0 !== this.listeners[t] ? this.listeners[t].push({
                  scope: n,
                  callback: e
              }) : this.listeners[t] = [{
                  scope: n,
                  callback: e
              }]
          }
      }, {
          key: "off",
          value: function(t, e, n) {
              if (void 0 !== this.listeners[t]) {
                  for (var i = this.listeners[t].length, o = [], r = 0; r < i; r++) {
                      var s = this.listeners[t][r];
                      s.scope === n && s.callback === e || o.push(s)
                  }
                  this.listeners[t] = o
              }
          }
      }, {
          key: "dispatch",
          value: function(t, e) {
              if (void 0 !== this.listeners[t])
                  for (var n = 0; n < this.listeners[t].length; n++) {
                      var i = this.listeners[t][n];
                      i && i.callback && i.callback.apply(i.scope, [t, e])
                  }
          }
      }]),
      t
  }();
  e.a = o
}
]);

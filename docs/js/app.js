(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require("./noConflict");

var _global = _interopRequireDefault(require("core-js/library/fn/global"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

if (_global.default._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global.default._babelPolyfill = true;

},{"./noConflict":2,"core-js/library/fn/global":16}],2:[function(require,module,exports){
"use strict";

require("core-js/es6");

require("core-js/fn/array/includes");

require("core-js/fn/array/flat-map");

require("core-js/fn/string/pad-start");

require("core-js/fn/string/pad-end");

require("core-js/fn/string/trim-start");

require("core-js/fn/string/trim-end");

require("core-js/fn/symbol/async-iterator");

require("core-js/fn/object/get-own-property-descriptors");

require("core-js/fn/object/values");

require("core-js/fn/object/entries");

require("core-js/fn/promise/finally");

require("core-js/web");

require("regenerator-runtime/runtime");

},{"core-js/es6":4,"core-js/fn/array/flat-map":5,"core-js/fn/array/includes":6,"core-js/fn/object/entries":7,"core-js/fn/object/get-own-property-descriptors":8,"core-js/fn/object/values":9,"core-js/fn/promise/finally":10,"core-js/fn/string/pad-end":11,"core-js/fn/string/pad-start":12,"core-js/fn/string/trim-end":13,"core-js/fn/string/trim-start":14,"core-js/fn/symbol/async-iterator":15,"core-js/web":307,"regenerator-runtime/runtime":309}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, n) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.barba = n();
}(void 0, function () {
  var t = function () {
    function t() {}

    return t.prototype.then = function (r, i) {
      var e = new t(),
          o = this.s;

      if (o) {
        var u = 1 & o ? r : i;

        if (u) {
          try {
            n(e, 1, u(this.v));
          } catch (t) {
            n(e, 2, t);
          }

          return e;
        }

        return this;
      }

      return this.o = function (t) {
        try {
          var o = t.v;
          1 & t.s ? n(e, 1, r ? r(o) : o) : i ? n(e, 1, i(o)) : n(e, 2, o);
        } catch (t) {
          n(e, 2, t);
        }
      }, e;
    }, t;
  }();

  function n(r, i, e) {
    if (!r.s) {
      if (e instanceof t) {
        if (!e.s) return void (e.o = n.bind(null, r, i));
        1 & i && (i = e.s), e = e.v;
      }

      if (e && e.then) return void e.then(n.bind(null, r, i), n.bind(null, r, 2));
      r.s = i, r.v = e;
      var o = r.o;
      o && o(r);
    }
  }

  function r(t, n) {
    try {
      var r = t();
    } catch (t) {
      return n(t);
    }

    return r && r.then ? r.then(void 0, n) : r;
  }

  var i = {};
  !function () {
    function r(t) {
      this.t = t, this.i = null, this.u = null, this.h = null, this.l = null;
    }

    function e(t) {
      return {
        value: t,
        done: !0
      };
    }

    function o(t) {
      return {
        value: t,
        done: !1
      };
    }

    r.prototype[Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))] = function () {
      return this;
    }, r.prototype.p = function (n) {
      return this.u(n && n.then ? n.then(o) : o(n)), this.i = new t();
    }, r.prototype.next = function (r) {
      var o = this;
      return o.l = new Promise(function (u) {
        var f = o.i;

        if (null === f) {
          var s = o.t;
          if (null === s) return u(o.l);

          function _c(t) {
            o.u(t && t.then ? t.then(e) : e(t)), o.i = null, o.u = null;
          }

          o.t = null, o.u = u, s(o).then(_c, function (n) {
            if (n === i) _c(o.h);else {
              var r = new t();
              o.u(r), o.i = null, o.u = null, _resolve(r, 2, n);
            }
          });
        } else o.i = null, o.u = u, n(f, 1, r);
      });
    }, r.prototype.return = function (t) {
      var r = this;
      return r.l = new Promise(function (o) {
        var u = r.i;
        if (null === u) return null === r.t ? o(r.l) : (r.t = null, o(t && t.then ? t.then(e) : e(t)));
        r.h = t, r.u = o, r.i = null, n(u, 2, i);
      });
    }, r.prototype.throw = function (t) {
      var r = this;
      return r.l = new Promise(function (i, e) {
        var o = r.i;
        if (null === o) return null === r.t ? i(r.l) : (r.t = null, e(t));
        r.u = i, r.i = null, n(o, 2, t);
      });
    };
  }();
  var e,
      o,
      u = (function (t) {
    var n = t.exports = function (t, n) {
      return n = n || function () {}, function () {
        var r = !1,
            i = arguments,
            e = new Promise(function (n, e) {
          var o,
              u = t.apply({
            async: function async() {
              return r = !0, function (t, r) {
                t ? e(t) : n(r);
              };
            }
          }, Array.prototype.slice.call(i));
          r || (!(o = u) || "object" != _typeof(o) && "function" != typeof o || "function" != typeof o.then ? n(u) : u.then(n, e));
        });
        return e.then(n.bind(null, null), n), e;
      };
    };

    n.cb = function (t, r) {
      return n(function () {
        var n = Array.prototype.slice.call(arguments);
        return n.length === t.length - 1 && n.push(this.async()), t.apply(this, n);
      }, r);
    };
  }(e = {
    exports: {}
  }), e.exports);
  !function (t) {
    t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug";
  }(o || (o = {}));

  var f = o.off,
      s = function s(t) {
    this.m = t;
  };

  s.getLevel = function () {
    return f;
  }, s.setLevel = function (t) {
    return f = o[t];
  }, s.prototype.print = function () {
    for (var t = [], n = arguments.length; n--;) {
      t[n] = arguments[n];
    }

    this.P(console.info, o.off, t);
  }, s.prototype.error = function () {
    for (var t = [], n = arguments.length; n--;) {
      t[n] = arguments[n];
    }

    this.P(console.error, o.error, t);
  }, s.prototype.warn = function () {
    for (var t = [], n = arguments.length; n--;) {
      t[n] = arguments[n];
    }

    this.P(console.warn, o.warning, t);
  }, s.prototype.info = function () {
    for (var t = [], n = arguments.length; n--;) {
      t[n] = arguments[n];
    }

    this.P(console.info, o.info, t);
  }, s.prototype.debug = function () {
    for (var t = [], n = arguments.length; n--;) {
      t[n] = arguments[n];
    }

    this.P(console.log, o.debug, t);
  }, s.prototype.P = function (t, n, r) {
    n <= s.getLevel() && t.apply(console, ["[" + this.m + "] "].concat(r));
  };

  var c = function c() {
    this.logger = new s("@barba/core"), this.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeAppear", "appear", "afterAppear", "appearCanceled", "before", "beforeLeave", "leave", "afterLeave", "leaveCanceled", "beforeEnter", "enter", "afterEnter", "enterCanceled", "after"], this.registered = new Map(), this.init();
  };

  c.prototype.init = function () {
    var t = this;
    this.registered.clear(), this.all.forEach(function (n) {
      t[n] || (t[n] = function (r, i) {
        void 0 === i && (i = null), t.registered.has(n) || t.registered.set(n, new Set()), t.registered.get(n).add({
          ctx: i,
          fn: r
        });
      });
    });
  }, c.prototype.do = function (t) {
    for (var n = [], r = arguments.length - 1; r-- > 0;) {
      n[r] = arguments[r + 1];
    }

    if (this.registered.has(t)) {
      var i = Promise.resolve();
      return this.registered.get(t).forEach(function (t) {
        var r = t.ctx ? t.fn.bind(t.ctx) : t.fn;
        i = i.then(function () {
          return u(r).apply(void 0, n);
        });
      }), i;
    }

    return Promise.resolve();
  }, c.prototype.clear = function () {
    var t = this;
    this.all.forEach(function (n) {
      delete t[n];
    }), this.init();
  }, c.prototype.help = function () {
    this.logger.info("Available hooks: " + this.all.join(","));
    var t = [];
    this.registered.forEach(function (n, r) {
      return t.push(r);
    }), this.logger.info("Registered hooks: " + t.join(","));
  };

  var a = new c(),
      h = function t(n, r, i) {
    return n instanceof RegExp ? function (t, n) {
      if (!n) return t;
      var r = t.source.match(/\((?!\?)/g);
      if (r) for (var i = 0; i < r.length; i++) {
        n.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: !1,
          repeat: !1,
          pattern: null
        });
      }
      return t;
    }(n, r) : Array.isArray(n) ? function (n, r, i) {
      for (var e = [], o = 0; o < n.length; o++) {
        e.push(t(n[o], r, i).source);
      }

      return new RegExp("(?:" + e.join("|") + ")", g(i));
    }(n, r, i) : function (t, n, r) {
      return E(w(t, r), n, r);
    }(n, r, i);
  },
      v = w,
      l = b,
      p = E,
      d = "/",
      m = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

  function w(t, n) {
    for (var r, i = [], e = 0, o = 0, u = "", f = n && n.delimiter || d, s = n && n.whitelist || void 0, c = !1; null !== (r = m.exec(t));) {
      var a = r[0],
          h = r[1],
          v = r.index;
      if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0;else {
        var l = "",
            p = r[2],
            w = r[3],
            b = r[4],
            g = r[5];

        if (!c && u.length) {
          var E = u.length - 1,
              x = u[E];
          (!s || s.indexOf(x) > -1) && (l = x, u = u.slice(0, E));
        }

        u && (i.push(u), u = "", c = !1);
        var A = w || b,
            T = l || f;
        i.push({
          name: p || e++,
          prefix: l,
          delimiter: T,
          optional: "?" === g || "*" === g,
          repeat: "+" === g || "*" === g,
          pattern: A ? P(A) : "[^" + y(T === f ? T : T + f) + "]+?"
        });
      }
    }

    return (u || o < t.length) && i.push(u + t.substr(o)), i;
  }

  function b(t) {
    for (var n = new Array(t.length), r = 0; r < t.length; r++) {
      "object" == _typeof(t[r]) && (n[r] = new RegExp("^(?:" + t[r].pattern + ")$"));
    }

    return function (r, i) {
      for (var e = "", o = i && i.encode || encodeURIComponent, u = 0; u < t.length; u++) {
        var f = t[u];

        if ("string" != typeof f) {
          var s,
              c = r ? r[f.name] : void 0;

          if (Array.isArray(c)) {
            if (!f.repeat) throw new TypeError('Expected "' + f.name + '" to not repeat, but got array');

            if (0 === c.length) {
              if (f.optional) continue;
              throw new TypeError('Expected "' + f.name + '" to not be empty');
            }

            for (var a = 0; a < c.length; a++) {
              if (s = o(c[a], f), !n[u].test(s)) throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '"');
              e += (0 === a ? f.prefix : f.delimiter) + s;
            }
          } else if ("string" != typeof c && "number" != typeof c && "boolean" != typeof c) {
            if (!f.optional) throw new TypeError('Expected "' + f.name + '" to be ' + (f.repeat ? "an array" : "a string"));
          } else {
            if (s = o(String(c), f), !n[u].test(s)) throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but got "' + s + '"');
            e += f.prefix + s;
          }
        } else e += f;
      }

      return e;
    };
  }

  function y(t) {
    return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  }

  function P(t) {
    return t.replace(/([=!:$\/()])/g, "\\$1");
  }

  function g(t) {
    return t && t.sensitive ? "" : "i";
  }

  function E(t, n, r) {
    for (var i = (r = r || {}).strict, e = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || d, f = [].concat(r.endsWith || []).map(y).concat("$").join("|"), s = e ? "^" : "", c = 0; c < t.length; c++) {
      var a = t[c];
      if ("string" == typeof a) s += y(a);else {
        var h = a.repeat ? "(?:" + a.pattern + ")(?:" + y(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
        n && n.push(a), s += a.optional ? a.prefix ? "(?:" + y(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : y(a.prefix) + "(" + h + ")";
      }
    }

    if (o) i || (s += "(?:" + y(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";else {
      var v = t[t.length - 1],
          l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
      i || (s += "(?:" + y(u) + "(?=" + f + "))?"), l || (s += "(?=" + y(u) + "|" + f + ")");
    }
    return new RegExp(s, g(r));
  }

  h.parse = v, h.compile = function (t, n) {
    return b(w(t, n));
  }, h.tokensToFunction = l, h.tokensToRegExp = p;

  var x = {
    container: "container",
    namespace: "namespace",
    prefix: "data-barba",
    prevent: "prevent",
    wrapper: "wrapper"
  },
      A = function A() {
    this.g = x, this.A = new DOMParser();
  };

  A.prototype.toString = function (t) {
    return t.outerHTML;
  }, A.prototype.toDocument = function (t) {
    return this.A.parseFromString(t, "text/html");
  }, A.prototype.toElement = function (t) {
    var n = document.createElement("div");
    return n.innerHTML = t, n;
  }, A.prototype.getHtml = function (t) {
    return void 0 === t && (t = document), this.toString(t.documentElement);
  }, A.prototype.getWrapper = function (t) {
    return void 0 === t && (t = document), t.querySelector("[" + this.g.prefix + '="' + this.g.wrapper + '"]');
  }, A.prototype.getContainer = function (t) {
    return void 0 === t && (t = document), t.querySelector("[" + this.g.prefix + '="' + this.g.container + '"]');
  }, A.prototype.getNamespace = function (t) {
    void 0 === t && (t = document);
    var n = t.querySelector("[" + this.g.prefix + "-" + this.g.namespace + "]");
    return n ? n.getAttribute(this.g.prefix + "-" + this.g.namespace) : null;
  }, A.prototype.getHref = function (t) {
    return t.getAttribute && t.getAttribute("href") ? t.href : null;
  };

  var T = new A(),
      j = function j() {
    this.T = [];
  },
      R = {
    current: {
      configurable: !0
    },
    previous: {
      configurable: !0
    }
  };

  j.prototype.add = function (t, n) {
    this.T.push({
      url: t,
      ns: n
    });
  }, j.prototype.remove = function () {
    this.T.pop();
  }, j.prototype.push = function (t, n) {
    this.add(t, n), window.history && window.history.pushState(null, "", t);
  }, j.prototype.cancel = function () {
    this.remove(), window.history && window.history.back();
  }, R.current.get = function () {
    return this.T[this.T.length - 1];
  }, R.previous.get = function () {
    return this.T.length < 2 ? null : this.T[this.T.length - 2];
  }, Object.defineProperties(j.prototype, R);

  var k = new j(),
      O = function O(t, n) {
    try {
      var r = function () {
        if (!n.next.html) return Promise.resolve(t).then(function (t) {
          var r = n.next,
              i = n.trigger;

          if (t) {
            var e = T.toElement(t);
            r.namespace = T.getNamespace(e), r.container = T.getContainer(e), r.html = t, "popstate" === i ? k.add(r.url.href, r.namespace) : k.push(r.url.href, r.namespace);
            var o = T.toDocument(t);
            document.title = o.title;
          }
        });
      }();

      return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
    } catch (t) {
      return Promise.reject(t);
    }
  },
      L = function L() {
    return new Promise(function (t) {
      window.requestAnimationFrame(t);
    });
  },
      M = h,
      S = {
    update: O,
    nextTick: L,
    pathToRegexp: M
  },
      $ = function $() {
    return window.location.origin;
  },
      q = function q(t) {
    var n = t || window.location.port,
        r = window.location.protocol;
    return "" !== n ? parseInt(n, 10) : "https:" === r ? 443 : 80;
  },
      C = function C(t) {
    var n,
        r = t.replace($(), ""),
        i = {},
        e = r.indexOf("#");
    e >= 0 && (n = r.slice(e + 1), r = r.slice(0, e));
    var o = r.indexOf("?");
    return o >= 0 && (i = B(r.slice(o + 1)), r = r.slice(0, o)), {
      hash: n,
      path: r,
      query: i
    };
  },
      B = function B(t) {
    return t.split("&").reduce(function (t, n) {
      var r = n.split("=");
      return t[r[0]] = r[1], t;
    }, {});
  },
      H = function H(t) {
    return t.replace(/#.*/, "");
  },
      I = {
    getHref: function getHref() {
      return window.location.href;
    },
    getOrigin: $,
    getPort: q,
    getPath: function getPath(t) {
      return C(t).path;
    },
    parse: C,
    parseQuery: B,
    clean: H
  },
      N = function N(t) {
    if (this.j = [], "boolean" == typeof t) this.R = t;else {
      var n = Array.isArray(t) ? t : [t];
      this.j = n.map(function (t) {
        return M(t);
      });
    }
  };

  N.prototype.checkUrl = function (t) {
    if ("boolean" == typeof this.R) return this.R;
    var n = C(t).path;
    return this.j.some(function (t) {
      return null !== t.exec(n);
    });
  };

  var U = function (t) {
    function n(n) {
      t.call(this, n), this.T = new Map();
    }

    return t && (n.__proto__ = t), (n.prototype = Object.create(t && t.prototype)).constructor = n, n.prototype.set = function (t, n, r) {
      return this.checkUrl(t) || this.T.set(t, {
        action: r,
        request: n
      }), {
        action: r,
        request: n
      };
    }, n.prototype.get = function (t) {
      return this.T.get(t);
    }, n.prototype.getRequest = function (t) {
      return this.T.get(t).request;
    }, n.prototype.getAction = function (t) {
      return this.T.get(t).action;
    }, n.prototype.has = function (t) {
      return this.T.has(t);
    }, n.prototype.delete = function (t) {
      return this.T.delete(t);
    }, n.prototype.update = function (t, n) {
      var r = Object.assign({}, this.T.get(t), n);
      return this.T.set(t, r), r;
    }, n;
  }(N);

  function D(t, n, r) {
    return void 0 === n && (n = 2e3), new Promise(function (i, e) {
      var o = new XMLHttpRequest();
      o.onreadystatechange = function () {
        if (o.readyState === XMLHttpRequest.DONE) if (200 === o.status) i(o.responseText);else if (o.status) {
          var n = {
            status: o.status,
            statusText: o.statusText
          };
          r(t, n), e(n);
        }
      }, o.ontimeout = function () {
        var i = new Error("Timeout error [" + n + "]");
        r(t, i), e(i);
      }, o.onerror = function () {
        var n = new Error("Fetch error");
        r(t, n), e(n);
      }, o.open("GET", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send();
    });
  }

  var X = function X() {
    return !window.history.pushState;
  },
      _ = function _(t) {
    return !t.el || !t.href;
  },
      F = function F(t) {
    var n = t.event;
    return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey;
  },
      G = function G(t) {
    var n = t.el;
    return n.hasAttribute("target") && "_blank" === n.target;
  },
      Q = function Q(t) {
    var n = t.el;
    return window.location.protocol !== n.protocol || window.location.hostname !== n.hostname;
  },
      W = function W(t) {
    var n = t.el;
    return q() !== q(n.port);
  },
      z = function z(t) {
    var n = t.el;
    return n.getAttribute && "string" == typeof n.getAttribute("download");
  },
      J = function J(t) {
    return t.el.hasAttribute(x.prefix + "-" + x.prevent);
  },
      K = function K(t) {
    return Boolean(t.el.closest("[" + x.prefix + "-" + x.prevent + '="all"]'));
  },
      V = function V(t) {
    return H(t.href) === H(window.location.href);
  },
      Y = function (t) {
    function n(n) {
      t.call(this, n), this.suite = [], this.tests = new Map(), this.init();
    }

    return t && (n.__proto__ = t), (n.prototype = Object.create(t && t.prototype)).constructor = n, n.prototype.init = function () {
      this.add("pushState", X), this.add("exists", _), this.add("newTab", F), this.add("blank", G), this.add("corsDomain", Q), this.add("corsPort", W), this.add("download", z), this.add("preventSelf", J), this.add("preventAll", K), this.add("sameUrl", V, !1);
    }, n.prototype.add = function (t, n, r) {
      void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t);
    }, n.prototype.run = function (t, n, r, i) {
      return this.tests.get(t)({
        el: n,
        event: r,
        href: i
      });
    }, n.prototype.checkLink = function (t, n, r) {
      var i = this;
      return this.suite.some(function (e) {
        return i.run(e, t, n, r);
      });
    }, n;
  }(N),
      Z = function Z(t) {
    void 0 === t && (t = []), this.logger = new s("@barba/core"), this.all = [], this.appear = [], this.k = [{
      name: "namespace",
      type: "strings"
    }, {
      name: "custom",
      type: "function"
    }], t && (this.all = this.all.concat(t)), this.update();
  };

  Z.prototype.add = function (t, n) {
    switch (t) {
      case "rule":
        this.k.splice(n.position || 0, 0, n.value);
        break;

      case "transition":
      default:
        this.all.push(n);
    }

    this.update();
  }, Z.prototype.resolve = function (t, n) {
    var r,
        i = this;
    void 0 === n && (n = {});
    var e = n.appear ? this.appear : this.all;
    e = e.filter(n.self ? function (t) {
      return t.name && "self" === t.name;
    } : function (t) {
      return !t.name || "self" !== t.name;
    });
    var o = new Map(),
        u = e.find(function (r) {
      var e = !0,
          u = {};
      return !(!n.self || "self" !== r.name) || (i.k.reverse().forEach(function (o) {
        e && (e = i.O(r, o, t, u), n.appear || (r.from && r.to && (e = i.O(r, o, t, u, "from") && i.O(r, o, t, u, "to")), r.from && !r.to && (e = i.O(r, o, t, u, "from")), !r.from && r.to && (e = i.O(r, o, t, u, "to"))));
      }), o.set(r, u), e);
    }),
        f = o.get(u),
        s = [];

    if (s.push(n.appear ? "appear" : "page"), n.self && s.push("self"), f) {
      var c = [u];
      Object.keys(f).length > 0 && c.push(f), (r = this.logger).info.apply(r, ["Transition found [" + s.join(",") + "]"].concat(c));
    } else this.logger.info("No transition found [" + s.join(",") + "]");

    return u;
  }, Z.prototype.update = function () {
    var t = this;
    this.all = this.all.map(function (n) {
      return t.L(n);
    }).sort(function (t, n) {
      return t.priority - n.priority;
    }).reverse().map(function (t) {
      return delete t.priority, t;
    }), this.appear = this.all.filter(function (t) {
      return void 0 !== t.appear;
    });
  }, Z.prototype.O = function (t, n, r, i, e) {
    var o = !0,
        u = !1,
        f = t,
        s = n.name,
        c = s,
        a = s,
        h = s,
        v = e ? f[e] : f,
        l = "to" === e ? r.next : r.current;

    if (e ? v && v[s] : v[s]) {
      switch (n.type) {
        case "strings":
        default:
          var p = Array.isArray(v[c]) ? v[c] : [v[c]];
          l[c] && -1 !== p.indexOf(l[c]) && (u = !0), -1 === p.indexOf(l[c]) && (o = !1);
          break;

        case "object":
          var d = Array.isArray(v[a]) ? v[a] : [v[a]];
          l[a] && (l[a].name && -1 !== d.indexOf(l[a].name) && (u = !0), -1 === d.indexOf(l[a].name) && (o = !1));
          break;

        case "function":
          v[h](r) ? u = !0 : o = !1;
      }

      u && (e ? (i[e] = i[e] || {}, i[e][s] = f[e][s]) : i[s] = f[s]);
    }

    return o;
  }, Z.prototype.M = function (t, n, r) {
    var i = 0;
    return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (i += Math.pow(10, r), t.from && t.from[n] && (i += 1), t.to && t.to[n] && (i += 2)), i;
  }, Z.prototype.L = function (t) {
    var n = this;
    t.priority = 0;
    var r = 0;
    return this.k.forEach(function (i, e) {
      r += n.M(t, i.name, e + 1);
    }), t.priority = r, t;
  };

  var tt = function tt(t) {
    void 0 === t && (t = []), this.logger = new s("@barba/core"), this.S = !1, this.store = new Z(t);
  },
      nt = {
    isRunning: {
      configurable: !0
    },
    hasAppear: {
      configurable: !0
    },
    hasSelf: {
      configurable: !0
    },
    shouldWait: {
      configurable: !0
    }
  };

  tt.prototype.get = function (t, n) {
    return this.store.resolve(t, n);
  }, nt.isRunning.get = function () {
    return this.S;
  }, nt.isRunning.set = function (t) {
    this.S = t;
  }, nt.hasAppear.get = function () {
    return this.store.appear.length > 0;
  }, nt.hasSelf.get = function () {
    return this.store.all.some(function (t) {
      return "self" === t.name;
    });
  }, nt.shouldWait.get = function () {
    return this.store.all.some(function (t) {
      return t.to && !t.to.route || t.sync;
    });
  }, tt.prototype.doAppear = function (t) {
    var n = t.data,
        i = t.transition;

    try {
      var e = this;

      function _o(t) {
        e.S = !1;
      }

      var u = i || {};
      e.S = !0;
      var f = r(function () {
        return Promise.resolve(e.$("beforeAppear", n, u)).then(function () {
          return Promise.resolve(e.appear(n, u)).then(function () {
            return Promise.resolve(e.$("afterAppear", n, u)).then(function () {});
          });
        });
      }, function (t) {
        throw e.S = !1, e.logger.error(t), new Error("Transition error [appear]");
      });
      return f && f.then ? f.then(_o) : _o();
    } catch (t) {
      return Promise.reject(t);
    }
  }, tt.prototype.doPage = function (t) {
    var n = t.data,
        i = t.transition,
        e = t.page,
        o = t.wrapper;

    try {
      var u = this;

      function _f(t) {
        u.S = !1;
      }

      var s = i || {},
          c = !0 === s.sync || !1;
      u.S = !0;
      var a = r(function () {
        function t() {
          return Promise.resolve(u.$("before", n, s)).then(function () {
            function t(t) {
              return Promise.resolve(u.$("after", n, s)).then(function () {
                return Promise.resolve(u.remove(n)).then(function () {});
              });
            }

            var i = function () {
              if (c) return r(function () {
                return Promise.resolve(u.add(n, o)).then(function () {
                  return Promise.resolve(u.$("beforeLeave", n, s)).then(function () {
                    return Promise.resolve(u.$("beforeEnter", n, s)).then(function () {
                      return Promise.resolve(Promise.all([u.leave(n, s), u.enter(n, s)])).then(function () {
                        return Promise.resolve(u.$("afterLeave", n, s)).then(function () {
                          return Promise.resolve(u.$("afterEnter", n, s)).then(function () {});
                        });
                      });
                    });
                  });
                });
              }, function () {
                throw new Error("Transition error [page][sync]");
              });
              {
                function _t(t) {
                  return r(function () {
                    var t = function () {
                      if (!1 !== i) return Promise.resolve(u.add(n, o)).then(function () {
                        return Promise.resolve(u.$("beforeEnter", n, s)).then(function () {
                          return Promise.resolve(u.enter(n, s, i)).then(function () {
                            return Promise.resolve(u.$("afterEnter", n, s)).then(function () {});
                          });
                        });
                      });
                    }();

                    if (t && t.then) return t.then(function () {});
                  }, function () {
                    throw new Error("Transition error [page][enter]");
                  });
                }

                var i = !1,
                    f = r(function () {
                  return Promise.resolve(u.$("beforeLeave", n, s)).then(function () {
                    return Promise.resolve(Promise.all([u.leave(n, s), O(e, n)]).then(function (t) {
                      return t[0];
                    })).then(function (t) {
                      return i = t, Promise.resolve(u.$("afterLeave", n, s)).then(function () {});
                    });
                  });
                }, function () {
                  throw new Error("Transition error [page][leave]");
                });
                return f && f.then ? f.then(_t) : _t();
              }
            }();

            return i && i.then ? i.then(t) : t();
          });
        }

        var i = function () {
          if (c) return Promise.resolve(O(e, n)).then(function () {});
        }();

        return i && i.then ? i.then(t) : t();
      }, function (t) {
        throw u.S = !1, u.logger.error(t), new Error("Transition error");
      });
      return a && a.then ? a.then(_f) : _f();
    } catch (t) {
      return Promise.reject(t);
    }
  }, tt.prototype.appear = function (t, n) {
    try {
      return Promise.resolve(a.do("appear", t, n)).then(function () {
        return n.appear ? u(n.appear)(t) : Promise.resolve();
      });
    } catch (t) {
      return Promise.reject(t);
    }
  }, tt.prototype.leave = function (t, n) {
    try {
      return Promise.resolve(a.do("leave", t, n)).then(function () {
        return n.leave ? u(n.leave)(t) : Promise.resolve();
      });
    } catch (t) {
      return Promise.reject(t);
    }
  }, tt.prototype.enter = function (t, n, r) {
    try {
      return Promise.resolve(a.do("enter", t, n)).then(function () {
        return n.enter ? u(n.enter)(t, r) : Promise.resolve();
      });
    } catch (t) {
      return Promise.reject(t);
    }
  }, tt.prototype.add = function (t, n) {
    try {
      return n.appendChild(t.next.container), Promise.resolve(L()).then(function () {
        a.do("nextAdded", t);
      });
    } catch (t) {
      return Promise.reject(t);
    }
  }, tt.prototype.remove = function (t) {
    try {
      var n = t.current.container,
          r = function () {
        if (document.body.contains(n)) return Promise.resolve(L()).then(function () {
          return n.parentNode.removeChild(n), Promise.resolve(L()).then(function () {
            a.do("currentRemoved", t);
          });
        });
      }();

      return r && r.then ? r.then(function () {}) : void 0;
    } catch (t) {
      return Promise.reject(t);
    }
  }, tt.prototype.$ = function (t, n, r) {
    try {
      return Promise.resolve(a.do(t, n, r)).then(function () {
        return r[t] ? u(r[t])(n) : Promise.resolve();
      });
    } catch (t) {
      return Promise.reject(t);
    }
  }, Object.defineProperties(tt.prototype, nt);

  var rt = function rt(t) {
    var n = this;
    this.names = ["beforeAppear", "afterAppear", "beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map(), 0 !== t.length && (t.forEach(function (t) {
      n.byNamespace.set(t.namespace, t);
    }), this.names.forEach(function (t) {
      a[t](n.q(t), n);
    }), a.ready(this.q("beforeEnter"), this));
  };

  rt.prototype.q = function (t) {
    var n = this;
    return function (r) {
      var i = t.match(/enter/i) ? r.next : r.current,
          e = n.byNamespace.get(i.namespace);
      e && e[t] && e[t](r);
    };
  }, Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
    var n = this;

    do {
      if (n.matches(t)) return n;
      n = n.parentElement || n.parentNode;
    } while (null !== n && 1 === n.nodeType);

    return null;
  });

  var it = {
    container: void 0,
    html: void 0,
    namespace: void 0,
    url: {
      hash: void 0,
      href: void 0,
      path: void 0,
      query: {}
    }
  },
      et = function et() {
    this.version = "2.3.9", this.schemaPage = it, this.Logger = s, this.logger = new s("@barba/core"), this.plugins = [], this.hooks = a, this.dom = T, this.helpers = S, this.history = k, this.request = D, this.url = I;
  },
      ot = {
    data: {
      configurable: !0
    },
    wrapper: {
      configurable: !0
    }
  };

  return et.prototype.use = function (t, n) {
    var r = this.plugins;
    r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.');
  }, et.prototype.init = function (t) {
    void 0 === t && (t = {});
    var n = t.transitions;
    void 0 === n && (n = []);
    var r = t.views;
    void 0 === r && (r = []);
    var i = t.prevent;
    void 0 === i && (i = null);
    var e = t.timeout;
    void 0 === e && (e = 2e3);
    var o = t.requestError,
        u = t.cacheIgnore;
    void 0 === u && (u = !1);
    var f = t.prefetchIgnore;
    void 0 === f && (f = !1);
    var c = t.schema;
    void 0 === c && (c = x);
    var a = t.debug;
    void 0 === a && (a = !1);
    var h = t.logLevel;
    if (void 0 === h && (h = "off"), s.setLevel(!0 === a ? "debug" : h), this.logger.print(this.version), Object.keys(c).forEach(function (t) {
      x[t] && (x[t] = c[t]);
    }), this.C = o, this.timeout = e, this.cacheIgnore = u, this.prefetchIgnore = f, this.B = this.dom.getWrapper(), !this.B) throw new Error("[@barba/core] No Barba wrapper found");
    this.B.setAttribute("aria-live", "polite"), this.H();
    var v = this.data.current;
    if (!v.container) throw new Error("[@barba/core] No Barba container found");

    if (this.cache = new U(u), this.prevent = new Y(f), this.transitions = new tt(n), this.views = new rt(r), null !== i) {
      if ("function" != typeof i) throw new Error("[@barba/core] Prevent should be a function");
      this.prevent.add("preventCustom", i);
    }

    this.history.add(v.url.href, v.namespace), this.I = this.I.bind(this), this.N = this.N.bind(this), this.U = this.U.bind(this), this.D(), this.plugins.forEach(function (t) {
      return t.init();
    });
    var l = this.data;
    l.trigger = "barba", l.next = l.current, this.hooks.do("ready", l), this.appear(), this.H();
  }, et.prototype.destroy = function () {
    this.H(), this.X(), this.hooks.clear(), this.plugins = [];
  }, ot.data.get = function () {
    return this._;
  }, ot.wrapper.get = function () {
    return this.B;
  }, et.prototype.force = function (t) {
    window.location.assign(t);
  }, et.prototype.go = function (t, n, r) {
    var i;
    if (void 0 === n && (n = "barba"), !(i = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, i);
  }, et.prototype.appear = function () {
    try {
      var t = this,
          n = function () {
        if (t.transitions.hasAppear) {
          var n = r(function () {
            var n = t._,
                r = t.transitions.get(n, {
              appear: !0
            });
            return Promise.resolve(t.transitions.doAppear({
              transition: r,
              data: n
            })).then(function () {});
          }, function (n) {
            t.logger.error(n);
          });
          if (n && n.then) return n.then(function () {});
        }
      }();

      return n && n.then ? n.then(function () {}) : void 0;
    } catch (t) {
      return Promise.reject(t);
    }
  }, et.prototype.page = function (t, n, i) {
    try {
      var e = this;

      function _o2() {
        var t = e.data;
        e.hooks.do("page", t);
        var n = r(function () {
          var n = e.transitions.get(t, {
            appear: !1,
            self: i
          });
          return Promise.resolve(e.transitions.doPage({
            data: t,
            page: u,
            transition: n,
            wrapper: e.B
          })).then(function () {
            e.H();
          });
        }, function (t) {
          e.logger.error(t);
        });
        if (n && n.then) return n.then(function () {});
      }

      if (e.transitions.isRunning) return void e.force(t);
      e.data.next.url = Object.assign({}, {
        href: t
      }, e.url.parse(t)), e.data.trigger = n;

      var u = e.cache.has(t) ? e.cache.update(t, {
        action: "click"
      }).request : e.cache.set(t, e.request(t, e.timeout, e.onRequestError.bind(e, n)), "click").request,
          f = function () {
        if (e.transitions.shouldWait) return Promise.resolve(O(u, e.data)).then(function () {});
      }();

      return f && f.then ? f.then(_o2) : _o2();
    } catch (t) {
      return Promise.reject(t);
    }
  }, et.prototype.onRequestError = function (t) {
    for (var n = [], r = arguments.length - 1; r-- > 0;) {
      n[r] = arguments[r + 1];
    }

    this.transitions.isRunning = !1;
    var i = n[0],
        e = n[1],
        o = this.cache.getAction(i);
    return this.cache.delete(i), !(this.C && !1 === this.C(t, o, i, e) || ("click" === o && this.force(i), 1));
  }, et.prototype.prefetch = function (t) {
    var n = this;
    this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch(function (t) {
      n.logger.error(t);
    }), "prefetch");
  }, et.prototype.D = function () {
    !0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.I), document.addEventListener("touchstart", this.I)), document.addEventListener("click", this.N), window.addEventListener("popstate", this.U);
  }, et.prototype.X = function () {
    !0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.I), document.removeEventListener("touchstart", this.I)), document.removeEventListener("click", this.N), window.removeEventListener("popstate", this.U);
  }, et.prototype.I = function (t) {
    var n = this,
        r = this.F(t);

    if (r) {
      var i = this.dom.getHref(r);
      this.prevent.checkUrl(i) || this.cache.has(i) || this.cache.set(i, this.request(i, this.timeout, this.onRequestError.bind(this, r)).catch(function (t) {
        n.logger.error(t);
      }), "enter");
    }
  }, et.prototype.N = function (t) {
    var n = this.F(t);
    n && this.go(this.dom.getHref(n), n, t);
  }, et.prototype.U = function () {
    this.go(this.url.getHref(), "popstate");
  }, et.prototype.F = function (t) {
    for (var n = t.target; n && !this.dom.getHref(n);) {
      n = n.parentNode;
    }

    if (n && !this.prevent.checkLink(n, t, n.href)) return n;
  }, et.prototype.H = function () {
    var t = this.url.getHref(),
        n = {
      container: this.dom.getContainer(),
      html: this.dom.getHtml(),
      namespace: this.dom.getNamespace(),
      url: Object.assign({}, {
        href: t
      }, this.url.parse(t))
    };
    this._ = {
      current: n,
      next: Object.assign({}, this.schemaPage),
      trigger: void 0
    }, this.hooks.do("reset", this.data);
  }, Object.defineProperties(et.prototype, ot), new et();
});

},{}],4:[function(require,module,exports){
"use strict";

require('../modules/es6.symbol');

require('../modules/es6.object.create');

require('../modules/es6.object.define-property');

require('../modules/es6.object.define-properties');

require('../modules/es6.object.get-own-property-descriptor');

require('../modules/es6.object.get-prototype-of');

require('../modules/es6.object.keys');

require('../modules/es6.object.get-own-property-names');

require('../modules/es6.object.freeze');

require('../modules/es6.object.seal');

require('../modules/es6.object.prevent-extensions');

require('../modules/es6.object.is-frozen');

require('../modules/es6.object.is-sealed');

require('../modules/es6.object.is-extensible');

require('../modules/es6.object.assign');

require('../modules/es6.object.is');

require('../modules/es6.object.set-prototype-of');

require('../modules/es6.object.to-string');

require('../modules/es6.function.bind');

require('../modules/es6.function.name');

require('../modules/es6.function.has-instance');

require('../modules/es6.parse-int');

require('../modules/es6.parse-float');

require('../modules/es6.number.constructor');

require('../modules/es6.number.to-fixed');

require('../modules/es6.number.to-precision');

require('../modules/es6.number.epsilon');

require('../modules/es6.number.is-finite');

require('../modules/es6.number.is-integer');

require('../modules/es6.number.is-nan');

require('../modules/es6.number.is-safe-integer');

require('../modules/es6.number.max-safe-integer');

require('../modules/es6.number.min-safe-integer');

require('../modules/es6.number.parse-float');

require('../modules/es6.number.parse-int');

require('../modules/es6.math.acosh');

require('../modules/es6.math.asinh');

require('../modules/es6.math.atanh');

require('../modules/es6.math.cbrt');

require('../modules/es6.math.clz32');

require('../modules/es6.math.cosh');

require('../modules/es6.math.expm1');

require('../modules/es6.math.fround');

require('../modules/es6.math.hypot');

require('../modules/es6.math.imul');

require('../modules/es6.math.log10');

require('../modules/es6.math.log1p');

require('../modules/es6.math.log2');

require('../modules/es6.math.sign');

require('../modules/es6.math.sinh');

require('../modules/es6.math.tanh');

require('../modules/es6.math.trunc');

require('../modules/es6.string.from-code-point');

require('../modules/es6.string.raw');

require('../modules/es6.string.trim');

require('../modules/es6.string.iterator');

require('../modules/es6.string.code-point-at');

require('../modules/es6.string.ends-with');

require('../modules/es6.string.includes');

require('../modules/es6.string.repeat');

require('../modules/es6.string.starts-with');

require('../modules/es6.string.anchor');

require('../modules/es6.string.big');

require('../modules/es6.string.blink');

require('../modules/es6.string.bold');

require('../modules/es6.string.fixed');

require('../modules/es6.string.fontcolor');

require('../modules/es6.string.fontsize');

require('../modules/es6.string.italics');

require('../modules/es6.string.link');

require('../modules/es6.string.small');

require('../modules/es6.string.strike');

require('../modules/es6.string.sub');

require('../modules/es6.string.sup');

require('../modules/es6.date.now');

require('../modules/es6.date.to-json');

require('../modules/es6.date.to-iso-string');

require('../modules/es6.date.to-string');

require('../modules/es6.date.to-primitive');

require('../modules/es6.array.is-array');

require('../modules/es6.array.from');

require('../modules/es6.array.of');

require('../modules/es6.array.join');

require('../modules/es6.array.slice');

require('../modules/es6.array.sort');

require('../modules/es6.array.for-each');

require('../modules/es6.array.map');

require('../modules/es6.array.filter');

require('../modules/es6.array.some');

require('../modules/es6.array.every');

require('../modules/es6.array.reduce');

require('../modules/es6.array.reduce-right');

require('../modules/es6.array.index-of');

require('../modules/es6.array.last-index-of');

require('../modules/es6.array.copy-within');

require('../modules/es6.array.fill');

require('../modules/es6.array.find');

require('../modules/es6.array.find-index');

require('../modules/es6.array.species');

require('../modules/es6.array.iterator');

require('../modules/es6.regexp.constructor');

require('../modules/es6.regexp.exec');

require('../modules/es6.regexp.to-string');

require('../modules/es6.regexp.flags');

require('../modules/es6.regexp.match');

require('../modules/es6.regexp.replace');

require('../modules/es6.regexp.search');

require('../modules/es6.regexp.split');

require('../modules/es6.promise');

require('../modules/es6.map');

require('../modules/es6.set');

require('../modules/es6.weak-map');

require('../modules/es6.weak-set');

require('../modules/es6.typed.array-buffer');

require('../modules/es6.typed.data-view');

require('../modules/es6.typed.int8-array');

require('../modules/es6.typed.uint8-array');

require('../modules/es6.typed.uint8-clamped-array');

require('../modules/es6.typed.int16-array');

require('../modules/es6.typed.uint16-array');

require('../modules/es6.typed.int32-array');

require('../modules/es6.typed.uint32-array');

require('../modules/es6.typed.float32-array');

require('../modules/es6.typed.float64-array');

require('../modules/es6.reflect.apply');

require('../modules/es6.reflect.construct');

require('../modules/es6.reflect.define-property');

require('../modules/es6.reflect.delete-property');

require('../modules/es6.reflect.enumerate');

require('../modules/es6.reflect.get');

require('../modules/es6.reflect.get-own-property-descriptor');

require('../modules/es6.reflect.get-prototype-of');

require('../modules/es6.reflect.has');

require('../modules/es6.reflect.is-extensible');

require('../modules/es6.reflect.own-keys');

require('../modules/es6.reflect.prevent-extensions');

require('../modules/es6.reflect.set');

require('../modules/es6.reflect.set-prototype-of');

module.exports = require('../modules/_core');

},{"../modules/_core":53,"../modules/es6.array.copy-within":155,"../modules/es6.array.every":156,"../modules/es6.array.fill":157,"../modules/es6.array.filter":158,"../modules/es6.array.find":160,"../modules/es6.array.find-index":159,"../modules/es6.array.for-each":161,"../modules/es6.array.from":162,"../modules/es6.array.index-of":163,"../modules/es6.array.is-array":164,"../modules/es6.array.iterator":165,"../modules/es6.array.join":166,"../modules/es6.array.last-index-of":167,"../modules/es6.array.map":168,"../modules/es6.array.of":169,"../modules/es6.array.reduce":171,"../modules/es6.array.reduce-right":170,"../modules/es6.array.slice":172,"../modules/es6.array.some":173,"../modules/es6.array.sort":174,"../modules/es6.array.species":175,"../modules/es6.date.now":176,"../modules/es6.date.to-iso-string":177,"../modules/es6.date.to-json":178,"../modules/es6.date.to-primitive":179,"../modules/es6.date.to-string":180,"../modules/es6.function.bind":181,"../modules/es6.function.has-instance":182,"../modules/es6.function.name":183,"../modules/es6.map":184,"../modules/es6.math.acosh":185,"../modules/es6.math.asinh":186,"../modules/es6.math.atanh":187,"../modules/es6.math.cbrt":188,"../modules/es6.math.clz32":189,"../modules/es6.math.cosh":190,"../modules/es6.math.expm1":191,"../modules/es6.math.fround":192,"../modules/es6.math.hypot":193,"../modules/es6.math.imul":194,"../modules/es6.math.log10":195,"../modules/es6.math.log1p":196,"../modules/es6.math.log2":197,"../modules/es6.math.sign":198,"../modules/es6.math.sinh":199,"../modules/es6.math.tanh":200,"../modules/es6.math.trunc":201,"../modules/es6.number.constructor":202,"../modules/es6.number.epsilon":203,"../modules/es6.number.is-finite":204,"../modules/es6.number.is-integer":205,"../modules/es6.number.is-nan":206,"../modules/es6.number.is-safe-integer":207,"../modules/es6.number.max-safe-integer":208,"../modules/es6.number.min-safe-integer":209,"../modules/es6.number.parse-float":210,"../modules/es6.number.parse-int":211,"../modules/es6.number.to-fixed":212,"../modules/es6.number.to-precision":213,"../modules/es6.object.assign":214,"../modules/es6.object.create":215,"../modules/es6.object.define-properties":216,"../modules/es6.object.define-property":217,"../modules/es6.object.freeze":218,"../modules/es6.object.get-own-property-descriptor":219,"../modules/es6.object.get-own-property-names":220,"../modules/es6.object.get-prototype-of":221,"../modules/es6.object.is":225,"../modules/es6.object.is-extensible":222,"../modules/es6.object.is-frozen":223,"../modules/es6.object.is-sealed":224,"../modules/es6.object.keys":226,"../modules/es6.object.prevent-extensions":227,"../modules/es6.object.seal":228,"../modules/es6.object.set-prototype-of":229,"../modules/es6.object.to-string":230,"../modules/es6.parse-float":231,"../modules/es6.parse-int":232,"../modules/es6.promise":233,"../modules/es6.reflect.apply":234,"../modules/es6.reflect.construct":235,"../modules/es6.reflect.define-property":236,"../modules/es6.reflect.delete-property":237,"../modules/es6.reflect.enumerate":238,"../modules/es6.reflect.get":241,"../modules/es6.reflect.get-own-property-descriptor":239,"../modules/es6.reflect.get-prototype-of":240,"../modules/es6.reflect.has":242,"../modules/es6.reflect.is-extensible":243,"../modules/es6.reflect.own-keys":244,"../modules/es6.reflect.prevent-extensions":245,"../modules/es6.reflect.set":247,"../modules/es6.reflect.set-prototype-of":246,"../modules/es6.regexp.constructor":248,"../modules/es6.regexp.exec":249,"../modules/es6.regexp.flags":250,"../modules/es6.regexp.match":251,"../modules/es6.regexp.replace":252,"../modules/es6.regexp.search":253,"../modules/es6.regexp.split":254,"../modules/es6.regexp.to-string":255,"../modules/es6.set":256,"../modules/es6.string.anchor":257,"../modules/es6.string.big":258,"../modules/es6.string.blink":259,"../modules/es6.string.bold":260,"../modules/es6.string.code-point-at":261,"../modules/es6.string.ends-with":262,"../modules/es6.string.fixed":263,"../modules/es6.string.fontcolor":264,"../modules/es6.string.fontsize":265,"../modules/es6.string.from-code-point":266,"../modules/es6.string.includes":267,"../modules/es6.string.italics":268,"../modules/es6.string.iterator":269,"../modules/es6.string.link":270,"../modules/es6.string.raw":271,"../modules/es6.string.repeat":272,"../modules/es6.string.small":273,"../modules/es6.string.starts-with":274,"../modules/es6.string.strike":275,"../modules/es6.string.sub":276,"../modules/es6.string.sup":277,"../modules/es6.string.trim":278,"../modules/es6.symbol":279,"../modules/es6.typed.array-buffer":280,"../modules/es6.typed.data-view":281,"../modules/es6.typed.float32-array":282,"../modules/es6.typed.float64-array":283,"../modules/es6.typed.int16-array":284,"../modules/es6.typed.int32-array":285,"../modules/es6.typed.int8-array":286,"../modules/es6.typed.uint16-array":287,"../modules/es6.typed.uint32-array":288,"../modules/es6.typed.uint8-array":289,"../modules/es6.typed.uint8-clamped-array":290,"../modules/es6.weak-map":291,"../modules/es6.weak-set":292}],5:[function(require,module,exports){
"use strict";

require('../../modules/es7.array.flat-map');

module.exports = require('../../modules/_core').Array.flatMap;

},{"../../modules/_core":53,"../../modules/es7.array.flat-map":293}],6:[function(require,module,exports){
"use strict";

require('../../modules/es7.array.includes');

module.exports = require('../../modules/_core').Array.includes;

},{"../../modules/_core":53,"../../modules/es7.array.includes":294}],7:[function(require,module,exports){
"use strict";

require('../../modules/es7.object.entries');

module.exports = require('../../modules/_core').Object.entries;

},{"../../modules/_core":53,"../../modules/es7.object.entries":295}],8:[function(require,module,exports){
"use strict";

require('../../modules/es7.object.get-own-property-descriptors');

module.exports = require('../../modules/_core').Object.getOwnPropertyDescriptors;

},{"../../modules/_core":53,"../../modules/es7.object.get-own-property-descriptors":296}],9:[function(require,module,exports){
"use strict";

require('../../modules/es7.object.values');

module.exports = require('../../modules/_core').Object.values;

},{"../../modules/_core":53,"../../modules/es7.object.values":297}],10:[function(require,module,exports){
'use strict';

require('../../modules/es6.promise');

require('../../modules/es7.promise.finally');

module.exports = require('../../modules/_core').Promise['finally'];

},{"../../modules/_core":53,"../../modules/es6.promise":233,"../../modules/es7.promise.finally":298}],11:[function(require,module,exports){
"use strict";

require('../../modules/es7.string.pad-end');

module.exports = require('../../modules/_core').String.padEnd;

},{"../../modules/_core":53,"../../modules/es7.string.pad-end":299}],12:[function(require,module,exports){
"use strict";

require('../../modules/es7.string.pad-start');

module.exports = require('../../modules/_core').String.padStart;

},{"../../modules/_core":53,"../../modules/es7.string.pad-start":300}],13:[function(require,module,exports){
"use strict";

require('../../modules/es7.string.trim-right');

module.exports = require('../../modules/_core').String.trimRight;

},{"../../modules/_core":53,"../../modules/es7.string.trim-right":302}],14:[function(require,module,exports){
"use strict";

require('../../modules/es7.string.trim-left');

module.exports = require('../../modules/_core').String.trimLeft;

},{"../../modules/_core":53,"../../modules/es7.string.trim-left":301}],15:[function(require,module,exports){
"use strict";

require('../../modules/es7.symbol.async-iterator');

module.exports = require('../../modules/_wks-ext').f('asyncIterator');

},{"../../modules/_wks-ext":152,"../../modules/es7.symbol.async-iterator":303}],16:[function(require,module,exports){
"use strict";

require('../modules/es7.global');

module.exports = require('../modules/_core').global;

},{"../modules/_core":19,"../modules/es7.global":33}],17:[function(require,module,exports){
"use strict";

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],18:[function(require,module,exports){
"use strict";

var isObject = require('./_is-object');

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":29}],19:[function(require,module,exports){
"use strict";

var core = module.exports = {
  version: '2.6.5'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],20:[function(require,module,exports){
"use strict";

// optional / simple context binding
var aFunction = require('./_a-function');

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":17}],21:[function(require,module,exports){
"use strict";

// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

},{"./_fails":24}],22:[function(require,module,exports){
"use strict";

var isObject = require('./_is-object');

var document = require('./_global').document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":25,"./_is-object":29}],23:[function(require,module,exports){
"use strict";

var global = require('./_global');

var core = require('./_core');

var ctx = require('./_ctx');

var hide = require('./_hide');

var has = require('./_has');

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue; // export native or passed

    out = own ? target[key] : source[key]; // prevent global pollution for namespaces

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();

            case 1:
              return new C(a);

            case 2:
              return new C(a, b);
          }

          return new C(a, b, c);
        }

        return C.apply(this, arguments);
      };

      F[PROTOTYPE] = C[PROTOTYPE];
      return F; // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out; // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
}; // type bitmap


$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

},{"./_core":19,"./_ctx":20,"./_global":25,"./_has":26,"./_hide":27}],24:[function(require,module,exports){
"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],25:[function(require,module,exports){
"use strict";

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],26:[function(require,module,exports){
"use strict";

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],27:[function(require,module,exports){
"use strict";

var dP = require('./_object-dp');

var createDesc = require('./_property-desc');

module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":21,"./_object-dp":30,"./_property-desc":31}],28:[function(require,module,exports){
"use strict";

module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

},{"./_descriptors":21,"./_dom-create":22,"./_fails":24}],29:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

},{}],30:[function(require,module,exports){
"use strict";

var anObject = require('./_an-object');

var IE8_DOM_DEFINE = require('./_ie8-dom-define');

var toPrimitive = require('./_to-primitive');

var dP = Object.defineProperty;
exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":18,"./_descriptors":21,"./_ie8-dom-define":28,"./_to-primitive":32}],31:[function(require,module,exports){
"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],32:[function(require,module,exports){
"use strict";

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object'); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":29}],33:[function(require,module,exports){
"use strict";

// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.G, {
  global: require('./_global')
});

},{"./_export":23,"./_global":25}],34:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"dup":17}],35:[function(require,module,exports){
"use strict";

var cof = require('./_cof');

module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

},{"./_cof":49}],36:[function(require,module,exports){
"use strict";

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_hide":73,"./_wks":153}],37:[function(require,module,exports){
'use strict';

var at = require('./_string-at')(true); // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

},{"./_string-at":130}],38:[function(require,module,exports){
"use strict";

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

  return it;
};

},{}],39:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"./_is-object":82,"dup":18}],40:[function(require,module,exports){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';

var toObject = require('./_to-object');

var toAbsoluteIndex = require('./_to-absolute-index');

var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target
/* = 0 */
, start
/* = 0, end = @length */
) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;

  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count-- > 0) {
    if (from in O) O[to] = O[from];else delete O[to];
    to += inc;
    from += inc;
  }

  return O;
};

},{"./_to-absolute-index":138,"./_to-length":142,"./_to-object":143}],41:[function(require,module,exports){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';

var toObject = require('./_to-object');

var toAbsoluteIndex = require('./_to-absolute-index');

var toLength = require('./_to-length');

module.exports = function fill(value
/* , start = 0, end = @length */
) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

  while (endPos > index) {
    O[index++] = value;
  }

  return O;
};

},{"./_to-absolute-index":138,"./_to-length":142,"./_to-object":143}],42:[function(require,module,exports){
"use strict";

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');

var toLength = require('./_to-length');

var toAbsoluteIndex = require('./_to-absolute-index');

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":138,"./_to-iobject":141,"./_to-length":142}],43:[function(require,module,exports){
"use strict";

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');

var IObject = require('./_iobject');

var toObject = require('./_to-object');

var toLength = require('./_to-length');

var asc = require('./_array-species-create');

module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);

        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return val;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                result.push(val);
              // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":46,"./_ctx":55,"./_iobject":78,"./_to-length":142,"./_to-object":143}],44:[function(require,module,exports){
"use strict";

var aFunction = require('./_a-function');

var toObject = require('./_to-object');

var IObject = require('./_iobject');

var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }

    index += i;

    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }

  for (; isRight ? index >= 0 : length > index; index += i) {
    if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
  }

  return memo;
};

},{"./_a-function":34,"./_iobject":78,"./_to-length":142,"./_to-object":143}],45:[function(require,module,exports){
"use strict";

var isObject = require('./_is-object');

var isArray = require('./_is-array');

var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;

  if (isArray(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

},{"./_is-array":80,"./_is-object":82,"./_wks":153}],46:[function(require,module,exports){
"use strict";

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":45}],47:[function(require,module,exports){
'use strict';

var aFunction = require('./_a-function');

var isObject = require('./_is-object');

var invoke = require('./_invoke');

var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func


    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }

  return factories[len](F, args);
};

module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);

  var bound = function bound()
  /* args... */
  {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };

  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":34,"./_invoke":77,"./_is-object":82}],48:[function(require,module,exports){
"use strict";

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');

var TAG = require('./_wks')('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":49,"./_wks":153}],49:[function(require,module,exports){
"use strict";

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],50:[function(require,module,exports){
'use strict';

var dP = require('./_object-dp').f;

var create = require('./_object-create');

var redefineAll = require('./_redefine-all');

var ctx = require('./_ctx');

var anInstance = require('./_an-instance');

var forOf = require('./_for-of');

var $iterDefine = require('./_iter-define');

var step = require('./_iter-step');

var setSpecies = require('./_set-species');

var DESCRIPTORS = require('./_descriptors');

var fastKey = require('./_meta').fastKey;

var validate = require('./_validate-collection');

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = create(null); // index

      that._f = undefined; // first entry

      that._l = undefined; // last entry

      that[SIZE] = 0; // size

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }

        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

},{"./_an-instance":38,"./_ctx":55,"./_descriptors":59,"./_for-of":69,"./_iter-define":86,"./_iter-step":88,"./_meta":95,"./_object-create":99,"./_object-dp":100,"./_redefine-all":118,"./_set-species":124,"./_validate-collection":150}],51:[function(require,module,exports){
'use strict';

var redefineAll = require('./_redefine-all');

var getWeak = require('./_meta').getWeak;

var anObject = require('./_an-object');

var isObject = require('./_is-object');

var anInstance = require('./_an-instance');

var forOf = require('./_for-of');

var createArrayMethod = require('./_array-methods');

var $has = require('./_has');

var validate = require('./_validate-collection');

var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0; // fallback for uncaught frozen keys

var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};

var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = id++; // collection id

      that._l = undefined; // leak store for uncaught frozen objects

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_an-instance":38,"./_an-object":39,"./_array-methods":43,"./_for-of":69,"./_has":72,"./_is-object":82,"./_meta":95,"./_redefine-all":118,"./_validate-collection":150}],52:[function(require,module,exports){
'use strict';

var global = require('./_global');

var $export = require('./_export');

var redefine = require('./_redefine');

var redefineAll = require('./_redefine-all');

var meta = require('./_meta');

var forOf = require('./_for-of');

var anInstance = require('./_an-instance');

var isObject = require('./_is-object');

var fails = require('./_fails');

var $iterDetect = require('./_iter-detect');

var setToStringTag = require('./_set-to-string-tag');

var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };

  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) {
        $instance[ADDER](index, index);
      }

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

},{"./_an-instance":38,"./_export":63,"./_fails":65,"./_for-of":69,"./_global":71,"./_inherit-if-required":76,"./_is-object":82,"./_iter-detect":87,"./_meta":95,"./_redefine":119,"./_redefine-all":118,"./_set-to-string-tag":125}],53:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"dup":19}],54:[function(require,module,exports){
'use strict';

var $defineProperty = require('./_object-dp');

var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

},{"./_object-dp":100,"./_property-desc":117}],55:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"./_a-function":34,"dup":20}],56:[function(require,module,exports){
'use strict'; // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var fails = require('./_fails');

var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
  return num > 9 ? num : '0' + num;
}; // PhantomJS / old WebKit has a broken implementations


module.exports = fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
}) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"./_fails":65}],57:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');

var toPrimitive = require('./_to-primitive');

var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":39,"./_to-primitive":144}],58:[function(require,module,exports){
"use strict";

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],59:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"./_fails":65,"dup":21}],60:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"./_global":71,"./_is-object":82,"dup":22}],61:[function(require,module,exports){
"use strict";

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

},{}],62:[function(require,module,exports){
"use strict";

// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');

var gOPS = require('./_object-gops');

var pIE = require('./_object-pie');

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

},{"./_object-gops":105,"./_object-keys":108,"./_object-pie":109}],63:[function(require,module,exports){
"use strict";

var global = require('./_global');

var core = require('./_core');

var hide = require('./_hide');

var redefine = require('./_redefine');

var ctx = require('./_ctx');

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

},{"./_core":53,"./_ctx":55,"./_global":71,"./_hide":73,"./_redefine":119}],64:[function(require,module,exports){
"use strict";

var MATCH = require('./_wks')('match');

module.exports = function (KEY) {
  var re = /./;

  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {
      /* empty */
    }
  }

  return true;
};

},{"./_wks":153}],65:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],66:[function(require,module,exports){
'use strict';

require('./es6.regexp.exec');

var redefine = require('./_redefine');

var hide = require('./_hide');

var fails = require('./_fails');

var defined = require('./_defined');

var wks = require('./_wks');

var regexpExec = require('./_regexp-exec');

var SPECIES = wks('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    re.exec = function () {
      execCalled = true;
      return null;
    };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };
    }

    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    var strfn = fns[0];
    var rxfn = fns[1];
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

},{"./_defined":58,"./_fails":65,"./_hide":73,"./_redefine":119,"./_regexp-exec":121,"./_wks":153,"./es6.regexp.exec":249}],67:[function(require,module,exports){
'use strict'; // 21.2.5.3 get RegExp.prototype.flags

var anObject = require('./_an-object');

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":39}],68:[function(require,module,exports){
'use strict'; // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

var isArray = require('./_is-array');

var isObject = require('./_is-object');

var toLength = require('./_to-length');

var ctx = require('./_ctx');

var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
      spreadable = false;

      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }

    sourceIndex++;
  }

  return targetIndex;
}

module.exports = flattenIntoArray;

},{"./_ctx":55,"./_is-array":80,"./_is-object":82,"./_to-length":142,"./_wks":153}],69:[function(require,module,exports){
"use strict";

var ctx = require('./_ctx');

var call = require('./_iter-call');

var isArrayIter = require('./_is-array-iter');

var anObject = require('./_an-object');

var toLength = require('./_to-length');

var getIterFn = require('./core.get-iterator-method');

var BREAK = {};
var RETURN = {};

var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

},{"./_an-object":39,"./_ctx":55,"./_is-array-iter":79,"./_iter-call":84,"./_to-length":142,"./core.get-iterator-method":154}],70:[function(require,module,exports){
"use strict";

module.exports = require('./_shared')('native-function-to-string', Function.toString);

},{"./_shared":127}],71:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],72:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],73:[function(require,module,exports){
arguments[4][27][0].apply(exports,arguments)
},{"./_descriptors":59,"./_object-dp":100,"./_property-desc":117,"dup":27}],74:[function(require,module,exports){
"use strict";

var document = require('./_global').document;

module.exports = document && document.documentElement;

},{"./_global":71}],75:[function(require,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"./_descriptors":59,"./_dom-create":60,"./_fails":65,"dup":28}],76:[function(require,module,exports){
"use strict";

var isObject = require('./_is-object');

var setPrototypeOf = require('./_set-proto').set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

},{"./_is-object":82,"./_set-proto":123}],77:[function(require,module,exports){
"use strict";

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;

  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);

    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);

    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }

  return fn.apply(that, args);
};

},{}],78:[function(require,module,exports){
"use strict";

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof'); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":49}],79:[function(require,module,exports){
"use strict";

// check on default Array iterator
var Iterators = require('./_iterators');

var ITERATOR = require('./_wks')('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":89,"./_wks":153}],80:[function(require,module,exports){
"use strict";

// 7.2.2 IsArray(argument)
var cof = require('./_cof');

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":49}],81:[function(require,module,exports){
"use strict";

// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');

var floor = Math.floor;

module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":82}],82:[function(require,module,exports){
arguments[4][29][0].apply(exports,arguments)
},{"dup":29}],83:[function(require,module,exports){
"use strict";

// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');

var cof = require('./_cof');

var MATCH = require('./_wks')('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_cof":49,"./_is-object":82,"./_wks":153}],84:[function(require,module,exports){
"use strict";

// call something on iterator step with safe closing on error
var anObject = require('./_an-object');

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":39}],85:[function(require,module,exports){
'use strict';

var create = require('./_object-create');

var descriptor = require('./_property-desc');

var setToStringTag = require('./_set-to-string-tag');

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":73,"./_object-create":99,"./_property-desc":117,"./_set-to-string-tag":125,"./_wks":153}],86:[function(require,module,exports){
'use strict';

var LIBRARY = require('./_library');

var $export = require('./_export');

var redefine = require('./_redefine');

var hide = require('./_hide');

var Iterators = require('./_iterators');

var $iterCreate = require('./_iter-create');

var setToStringTag = require('./_set-to-string-tag');

var getPrototypeOf = require('./_object-gpo');

var ITERATOR = require('./_wks')('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

},{"./_export":63,"./_hide":73,"./_iter-create":85,"./_iterators":89,"./_library":90,"./_object-gpo":106,"./_redefine":119,"./_set-to-string-tag":125,"./_wks":153}],87:[function(require,module,exports){
"use strict";

var ITERATOR = require('./_wks')('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

},{"./_wks":153}],88:[function(require,module,exports){
"use strict";

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

},{}],89:[function(require,module,exports){
"use strict";

module.exports = {};

},{}],90:[function(require,module,exports){
"use strict";

module.exports = false;

},{}],91:[function(require,module,exports){
"use strict";

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = !$expm1 // Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],92:[function(require,module,exports){
"use strict";

// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');

var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs); // eslint-disable-next-line no-self-compare

  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":94}],93:[function(require,module,exports){
"use strict";

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],94:[function(require,module,exports){
"use strict";

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],95:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var META = require('./_uid')('meta');

var isObject = require('./_is-object');

var has = require('./_has');

var setDesc = require('./_object-dp').f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":65,"./_has":72,"./_is-object":82,"./_object-dp":100,"./_uid":148}],96:[function(require,module,exports){
"use strict";

var global = require('./_global');

var macrotask = require('./_task').set;

var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function notify() {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);

    notify = function notify() {
      promise.then(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };
};

},{"./_cof":49,"./_global":71,"./_task":137}],97:[function(require,module,exports){
'use strict'; // 25.4.1.5 NewPromiseCapability(C)

var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":34}],98:[function(require,module,exports){
'use strict'; // 19.1.2.1 Object.assign(target, source, ...)

var getKeys = require('./_object-keys');

var gOPS = require('./_object-gops');

var pIE = require('./_object-pie');

var toObject = require('./_to-object');

var IObject = require('./_iobject');

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }

  return T;
} : $assign;

},{"./_fails":65,"./_iobject":78,"./_object-gops":105,"./_object-keys":108,"./_object-pie":109,"./_to-object":143}],99:[function(require,module,exports){
"use strict";

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');

var dPs = require('./_object-dps');

var enumBugKeys = require('./_enum-bug-keys');

var IE_PROTO = require('./_shared-key')('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  require('./_html').appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":39,"./_dom-create":60,"./_enum-bug-keys":61,"./_html":74,"./_object-dps":101,"./_shared-key":126}],100:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"./_an-object":39,"./_descriptors":59,"./_ie8-dom-define":75,"./_to-primitive":144,"dup":30}],101:[function(require,module,exports){
"use strict";

var dP = require('./_object-dp');

var anObject = require('./_an-object');

var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

},{"./_an-object":39,"./_descriptors":59,"./_object-dp":100,"./_object-keys":108}],102:[function(require,module,exports){
"use strict";

var pIE = require('./_object-pie');

var createDesc = require('./_property-desc');

var toIObject = require('./_to-iobject');

var toPrimitive = require('./_to-primitive');

var has = require('./_has');

var IE8_DOM_DEFINE = require('./_ie8-dom-define');

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":59,"./_has":72,"./_ie8-dom-define":75,"./_object-pie":109,"./_property-desc":117,"./_to-iobject":141,"./_to-primitive":144}],103:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');

var gOPN = require('./_object-gopn').f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":104,"./_to-iobject":141}],104:[function(require,module,exports){
"use strict";

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');

var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":61,"./_object-keys-internal":107}],105:[function(require,module,exports){
"use strict";

exports.f = Object.getOwnPropertySymbols;

},{}],106:[function(require,module,exports){
"use strict";

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');

var toObject = require('./_to-object');

var IE_PROTO = require('./_shared-key')('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

},{"./_has":72,"./_shared-key":126,"./_to-object":143}],107:[function(require,module,exports){
"use strict";

var has = require('./_has');

var toIObject = require('./_to-iobject');

var arrayIndexOf = require('./_array-includes')(false);

var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

},{"./_array-includes":42,"./_has":72,"./_shared-key":126,"./_to-iobject":141}],108:[function(require,module,exports){
"use strict";

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');

var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":61,"./_object-keys-internal":107}],109:[function(require,module,exports){
"use strict";

exports.f = {}.propertyIsEnumerable;

},{}],110:[function(require,module,exports){
"use strict";

// most Object methods by ES6 should accept primitives
var $export = require('./_export');

var core = require('./_core');

var fails = require('./_fails');

module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

},{"./_core":53,"./_export":63,"./_fails":65}],111:[function(require,module,exports){
"use strict";

var getKeys = require('./_object-keys');

var toIObject = require('./_to-iobject');

var isEnum = require('./_object-pie').f;

module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

},{"./_object-keys":108,"./_object-pie":109,"./_to-iobject":141}],112:[function(require,module,exports){
"use strict";

// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');

var gOPS = require('./_object-gops');

var anObject = require('./_an-object');

var Reflect = require('./_global').Reflect;

module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_an-object":39,"./_global":71,"./_object-gopn":104,"./_object-gops":105}],113:[function(require,module,exports){
"use strict";

var $parseFloat = require('./_global').parseFloat;

var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"./_global":71,"./_string-trim":135,"./_string-ws":136}],114:[function(require,module,exports){
"use strict";

var $parseInt = require('./_global').parseInt;

var $trim = require('./_string-trim').trim;

var ws = require('./_string-ws');

var hex = /^[-+]?0[xX]/;
module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":71,"./_string-trim":135,"./_string-ws":136}],115:[function(require,module,exports){
"use strict";

module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

},{}],116:[function(require,module,exports){
"use strict";

var anObject = require('./_an-object');

var isObject = require('./_is-object');

var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":39,"./_is-object":82,"./_new-promise-capability":97}],117:[function(require,module,exports){
arguments[4][31][0].apply(exports,arguments)
},{"dup":31}],118:[function(require,module,exports){
"use strict";

var redefine = require('./_redefine');

module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }

  return target;
};

},{"./_redefine":119}],119:[function(require,module,exports){
"use strict";

var global = require('./_global');

var hide = require('./_hide');

var has = require('./_has');

var SRC = require('./_uid')('src');

var $toString = require('./_function-to-string');

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_core":53,"./_function-to-string":70,"./_global":71,"./_has":72,"./_hide":73,"./_uid":148}],120:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var classof = require('./_classof');

var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec

module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (_typeof(result) !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }

  return builtinExec.call(R, S);
};

},{"./_classof":48}],121:[function(require,module,exports){
'use strict';

var regexpFlags = require('./_flags');

var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.

var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

},{"./_flags":67}],122:[function(require,module,exports){
"use strict";

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],123:[function(require,module,exports){
"use strict";

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = require('./_is-object');

var anObject = require('./_an-object');

var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

},{"./_an-object":39,"./_ctx":55,"./_is-object":82,"./_object-gopd":102}],124:[function(require,module,exports){
'use strict';

var global = require('./_global');

var dP = require('./_object-dp');

var DESCRIPTORS = require('./_descriptors');

var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

},{"./_descriptors":59,"./_global":71,"./_object-dp":100,"./_wks":153}],125:[function(require,module,exports){
"use strict";

var def = require('./_object-dp').f;

var has = require('./_has');

var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

},{"./_has":72,"./_object-dp":100,"./_wks":153}],126:[function(require,module,exports){
"use strict";

var shared = require('./_shared')('keys');

var uid = require('./_uid');

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":127,"./_uid":148}],127:[function(require,module,exports){
"use strict";

var core = require('./_core');

var global = require('./_global');

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":53,"./_global":71,"./_library":90}],128:[function(require,module,exports){
"use strict";

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');

var aFunction = require('./_a-function');

var SPECIES = require('./_wks')('species');

module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_a-function":34,"./_an-object":39,"./_wks":153}],129:[function(require,module,exports){
'use strict';

var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

},{"./_fails":65}],130:[function(require,module,exports){
"use strict";

var toInteger = require('./_to-integer');

var defined = require('./_defined'); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":58,"./_to-integer":140}],131:[function(require,module,exports){
"use strict";

// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');

var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_defined":58,"./_is-regexp":83}],132:[function(require,module,exports){
"use strict";

var $export = require('./_export');

var fails = require('./_fails');

var defined = require('./_defined');

var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

var createHTML = function createHTML(string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};

module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"./_defined":58,"./_export":63,"./_fails":65}],133:[function(require,module,exports){
"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');

var repeat = require('./_string-repeat');

var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_defined":58,"./_string-repeat":134,"./_to-length":142}],134:[function(require,module,exports){
'use strict';

var toInteger = require('./_to-integer');

var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

  for (; n > 0; (n >>>= 1) && (str += str)) {
    if (n & 1) res += str;
  }

  return res;
};

},{"./_defined":58,"./_to-integer":140}],135:[function(require,module,exports){
"use strict";

var $export = require('./_export');

var defined = require('./_defined');

var fails = require('./_fails');

var spaces = require('./_string-ws');

var space = '[' + spaces + ']';
var non = "\u200B\x85";
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
}; // 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim


var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_defined":58,"./_export":63,"./_fails":65,"./_string-ws":136}],136:[function(require,module,exports){
"use strict";

module.exports = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

},{}],137:[function(require,module,exports){
"use strict";

var ctx = require('./_ctx');

var invoke = require('./_invoke');

var html = require('./_html');

var cel = require('./_dom-create');

var global = require('./_global');

var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function run() {
  var id = +this; // eslint-disable-next-line no-prototype-builtins

  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function listener(event) {
  run.call(event.data);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };

    defer(counter);
    return counter;
  };

  clearTask = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (require('./_cof')(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };

    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    }; // Rest old browsers

  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}

module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_cof":49,"./_ctx":55,"./_dom-create":60,"./_global":71,"./_html":74,"./_invoke":77}],138:[function(require,module,exports){
"use strict";

var toInteger = require('./_to-integer');

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":140}],139:[function(require,module,exports){
"use strict";

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');

var toLength = require('./_to-length');

module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"./_to-integer":140,"./_to-length":142}],140:[function(require,module,exports){
"use strict";

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],141:[function(require,module,exports){
"use strict";

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');

var defined = require('./_defined');

module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":58,"./_iobject":78}],142:[function(require,module,exports){
"use strict";

// 7.1.15 ToLength
var toInteger = require('./_to-integer');

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":140}],143:[function(require,module,exports){
"use strict";

// 7.1.13 ToObject(argument)
var defined = require('./_defined');

module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":58}],144:[function(require,module,exports){
arguments[4][32][0].apply(exports,arguments)
},{"./_is-object":82,"dup":32}],145:[function(require,module,exports){
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (require('./_descriptors')) {
  var LIBRARY = require('./_library');

  var global = require('./_global');

  var fails = require('./_fails');

  var $export = require('./_export');

  var $typed = require('./_typed');

  var $buffer = require('./_typed-buffer');

  var ctx = require('./_ctx');

  var anInstance = require('./_an-instance');

  var propertyDesc = require('./_property-desc');

  var hide = require('./_hide');

  var redefineAll = require('./_redefine-all');

  var toInteger = require('./_to-integer');

  var toLength = require('./_to-length');

  var toIndex = require('./_to-index');

  var toAbsoluteIndex = require('./_to-absolute-index');

  var toPrimitive = require('./_to-primitive');

  var has = require('./_has');

  var classof = require('./_classof');

  var isObject = require('./_is-object');

  var toObject = require('./_to-object');

  var isArrayIter = require('./_is-array-iter');

  var create = require('./_object-create');

  var getPrototypeOf = require('./_object-gpo');

  var gOPN = require('./_object-gopn').f;

  var getIterFn = require('./core.get-iterator-method');

  var uid = require('./_uid');

  var wks = require('./_wks');

  var createArrayMethod = require('./_array-methods');

  var createArrayIncludes = require('./_array-includes');

  var speciesConstructor = require('./_species-constructor');

  var ArrayIterators = require('./es6.array.iterator');

  var Iterators = require('./_iterators');

  var $iterDetect = require('./_iter-detect');

  var setSpecies = require('./_set-species');

  var arrayFill = require('./_array-fill');

  var arrayCopyWithin = require('./_array-copy-within');

  var $DP = require('./_object-dp');

  var $GOPD = require('./_object-gopd');

  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';
  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });
  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });
  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function toOffset(it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function validate(it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function allocate(C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    }

    return new C(length);
  };

  var speciesFromList = function speciesFromList(O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function fromList(C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var addGetter = function addGetter(it, key, internal) {
    dP(it, key, {
      get: function get() {
        return this._d[internal];
      }
    });
  };

  var $from = function from(source
  /* , mapfn, thisArg */
  ) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;

    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      }

      O = values;
    }

    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var $of = function of()
  /* ...items */
  {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);

    while (length > index) {
      result[index] = arguments[index++];
    }

    return result;
  }; // iOS Safari 6.x fails here


  var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
    arrayToLocaleString.call(new Uint8Array(1));
  });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start
    /* , end */
    ) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value
    /* , start, end */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate
    /* , thisArg */
    ) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate
    /* , thisArg */
    ) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement
    /* , fromIndex */
    ) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement
    /* , fromIndex */
    ) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) {
      // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn
    /* , thisArg */
    ) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;

      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      }

      return that;
    },
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike
  /* , offset */
  ) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);

    while (index < len) {
      this[offset + index] = src[index++];
    }
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function isTAIndex(target, key) {
    return isObject(target) && target[TYPED_ARRAY] && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);
  };

  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
  };

  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
    && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
      target[key] = desc.value;
      return target;
    }

    return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function constructor() {
      /* noop */
    },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function get() {
      return this[TYPED_ARRAY];
    }
  }); // eslint-disable-next-line max-statements

  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

    var getter = function getter(that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };

    var setter = function setter(that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };

    var addElement = function addElement(that, index) {
      dP(that, index, {
        get: function get() {
          return getter(this, index);
        },
        set: function set(value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };

    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;

        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;

          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }

          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }

        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });

        while (index < length) {
          addElement(that, index++);
        }
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new

      new TypedArray(null); // eslint-disable-line no-new

      new TypedArray(1.5); // eslint-disable-line no-new

      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645

        if (!isObject(data)) return new Base(toIndex(data));

        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
        }

        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }

    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function get() {
          return NAME;
        }
      });
    }

    O[NAME] = TypedArray;
    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });
    $export($export.S + $export.F * fails(function () {
      Base.of.call(TypedArray, 1);
    }), NAME, {
      from: $from,
      of: $of
    });
    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
    $export($export.P, NAME, proto);
    setSpecies(NAME);
    $export($export.P + $export.F * FORCED_SET, NAME, {
      set: $set
    });
    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, {
      slice: $slice
    });
    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {
      toLocaleString: $toLocaleString
    });
    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () {
  /* empty */
};

},{"./_an-instance":38,"./_array-copy-within":40,"./_array-fill":41,"./_array-includes":42,"./_array-methods":43,"./_classof":48,"./_ctx":55,"./_descriptors":59,"./_export":63,"./_fails":65,"./_global":71,"./_has":72,"./_hide":73,"./_is-array-iter":79,"./_is-object":82,"./_iter-detect":87,"./_iterators":89,"./_library":90,"./_object-create":99,"./_object-dp":100,"./_object-gopd":102,"./_object-gopn":104,"./_object-gpo":106,"./_property-desc":117,"./_redefine-all":118,"./_set-species":124,"./_species-constructor":128,"./_to-absolute-index":138,"./_to-index":139,"./_to-integer":140,"./_to-length":142,"./_to-object":143,"./_to-primitive":144,"./_typed":147,"./_typed-buffer":146,"./_uid":148,"./_wks":153,"./core.get-iterator-method":154,"./es6.array.iterator":165}],146:[function(require,module,exports){
'use strict';

var global = require('./_global');

var DESCRIPTORS = require('./_descriptors');

var LIBRARY = require('./_library');

var $typed = require('./_typed');

var hide = require('./_hide');

var redefineAll = require('./_redefine-all');

var fails = require('./_fails');

var anInstance = require('./_an-instance');

var toInteger = require('./_to-integer');

var toLength = require('./_to-length');

var toIndex = require('./_to-index');

var gOPN = require('./_object-gopn').f;

var dP = require('./_object-dp').f;

var arrayFill = require('./_array-fill');

var setToStringTag = require('./_set-to-string-tag');

var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value); // eslint-disable-next-line no-self-compare

  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);

    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
    ;
  }

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
    ;
  }

  buffer[--i] |= s * 128;
  return buffer;
}

function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;

  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
    ;
  }

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}

function packI8(it) {
  return [it & 0xff];
}

function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}

function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}

function packF64(it) {
  return packIEEE754(it, 52, 8);
}

function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, {
    get: function get() {
      return this[internal];
    }
  });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}

function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);

  for (var i = 0; i < bytes; i++) {
    store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  }
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset
    /* , littleEndian */
    ) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset
    /* , littleEndian */
    ) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset
    /* , littleEndian */
    ) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value
    /* , littleEndian */
    ) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new

    new $ArrayBuffer(1.5); // eslint-disable-line no-new

    new $ArrayBuffer(NaN); // eslint-disable-line no-new

    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };

    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }

    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  } // iOS Safari 7.x bug


  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}

setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_an-instance":38,"./_array-fill":41,"./_descriptors":59,"./_fails":65,"./_global":71,"./_hide":73,"./_library":90,"./_object-dp":100,"./_object-gopn":104,"./_redefine-all":118,"./_set-to-string-tag":125,"./_to-index":139,"./_to-integer":140,"./_to-length":142,"./_typed":147}],147:[function(require,module,exports){
"use strict";

var global = require('./_global');

var hide = require('./_hide');

var uid = require('./_uid');

var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;
var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"./_global":71,"./_hide":73,"./_uid":148}],148:[function(require,module,exports){
"use strict";

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],149:[function(require,module,exports){
"use strict";

var global = require('./_global');

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

},{"./_global":71}],150:[function(require,module,exports){
"use strict";

var isObject = require('./_is-object');

module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":82}],151:[function(require,module,exports){
"use strict";

var global = require('./_global');

var core = require('./_core');

var LIBRARY = require('./_library');

var wksExt = require('./_wks-ext');

var defineProperty = require('./_object-dp').f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

},{"./_core":53,"./_global":71,"./_library":90,"./_object-dp":100,"./_wks-ext":152}],152:[function(require,module,exports){
"use strict";

exports.f = require('./_wks');

},{"./_wks":153}],153:[function(require,module,exports){
"use strict";

var store = require('./_shared')('wks');

var uid = require('./_uid');

var _Symbol = require('./_global').Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":71,"./_shared":127,"./_uid":148}],154:[function(require,module,exports){
"use strict";

var classof = require('./_classof');

var ITERATOR = require('./_wks')('iterator');

var Iterators = require('./_iterators');

module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

},{"./_classof":48,"./_core":53,"./_iterators":89,"./_wks":153}],155:[function(require,module,exports){
"use strict";

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', {
  copyWithin: require('./_array-copy-within')
});

require('./_add-to-unscopables')('copyWithin');

},{"./_add-to-unscopables":36,"./_array-copy-within":40,"./_export":63}],156:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn
  /* , thisArg */
  ) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":43,"./_export":63,"./_strict-method":129}],157:[function(require,module,exports){
"use strict";

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', {
  fill: require('./_array-fill')
});

require('./_add-to-unscopables')('fill');

},{"./_add-to-unscopables":36,"./_array-fill":41,"./_export":63}],158:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":43,"./_export":63,"./_strict-method":129}],159:[function(require,module,exports){
'use strict'; // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $export = require('./_export');

var $find = require('./_array-methods')(6);

var KEY = 'findIndex';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":36,"./_array-methods":43,"./_export":63}],160:[function(require,module,exports){
'use strict'; // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $export = require('./_export');

var $find = require('./_array-methods')(5);

var KEY = 'find';
var forced = true; // Shouldn't skip holes

if (KEY in []) Array(1)[KEY](function () {
  forced = false;
});
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn
  /* , that = undefined */
  ) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')(KEY);

},{"./_add-to-unscopables":36,"./_array-methods":43,"./_export":63}],161:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $forEach = require('./_array-methods')(0);

var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":43,"./_export":63,"./_strict-method":129}],162:[function(require,module,exports){
'use strict';

var ctx = require('./_ctx');

var $export = require('./_export');

var toObject = require('./_to-object');

var call = require('./_iter-call');

var isArrayIter = require('./_is-array-iter');

var toLength = require('./_to-length');

var createProperty = require('./_create-property');

var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);

      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }

    result.length = index;
    return result;
  }
});

},{"./_create-property":54,"./_ctx":55,"./_export":63,"./_is-array-iter":79,"./_iter-call":84,"./_iter-detect":87,"./_to-length":142,"./_to-object":143,"./core.get-iterator-method":154}],163:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $indexOf = require('./_array-includes')(false);

var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"./_array-includes":42,"./_export":63,"./_strict-method":129}],164:[function(require,module,exports){
"use strict";

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', {
  isArray: require('./_is-array')
});

},{"./_export":63,"./_is-array":80}],165:[function(require,module,exports){
'use strict';

var addToUnscopables = require('./_add-to-unscopables');

var step = require('./_iter-step');

var Iterators = require('./_iterators');

var toIObject = require('./_to-iobject'); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":36,"./_iter-define":86,"./_iter-step":88,"./_iterators":89,"./_to-iobject":141}],166:[function(require,module,exports){
'use strict'; // 22.1.3.13 Array.prototype.join(separator)

var $export = require('./_export');

var toIObject = require('./_to-iobject');

var arrayJoin = [].join; // fallback for not array-like strings

$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

},{"./_export":63,"./_iobject":78,"./_strict-method":129,"./_to-iobject":141}],167:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var toIObject = require('./_to-iobject');

var toInteger = require('./_to-integer');

var toLength = require('./_to-length');

var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O) if (O[index] === searchElement) return index || 0;
    }

    return -1;
  }
});

},{"./_export":63,"./_strict-method":129,"./_to-integer":140,"./_to-iobject":141,"./_to-length":142}],168:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":43,"./_export":63,"./_strict-method":129}],169:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var createProperty = require('./_create-property'); // WebKit Array.of isn't generic


$export($export.S + $export.F * require('./_fails')(function () {
  function F() {
    /* empty */
  }

  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of()
  /* ...args */
  {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);

    while (aLen > index) {
      createProperty(result, index, arguments[index++]);
    }

    result.length = aLen;
    return result;
  }
});

},{"./_create-property":54,"./_export":63,"./_fails":65}],170:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"./_array-reduce":44,"./_export":63,"./_strict-method":129}],171:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn
  /* , initialValue */
  ) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"./_array-reduce":44,"./_export":63,"./_strict-method":129}],172:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var html = require('./_html');

var cof = require('./_cof');

var toAbsoluteIndex = require('./_to-absolute-index');

var toLength = require('./_to-length');

var arraySlice = [].slice; // fallback for not array-like ES3 strings and DOM objects

$export($export.P + $export.F * require('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;

    for (; i < size; i++) {
      cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
    }

    return cloned;
  }
});

},{"./_cof":49,"./_export":63,"./_fails":65,"./_html":74,"./_to-absolute-index":138,"./_to-length":142}],173:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn
  /* , thisArg */
  ) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"./_array-methods":43,"./_export":63,"./_strict-method":129}],174:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var aFunction = require('./_a-function');

var toObject = require('./_to-object');

var fails = require('./_fails');

var $sort = [].sort;
var test = [1, 2, 3];
$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null); // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"./_a-function":34,"./_export":63,"./_fails":65,"./_strict-method":129,"./_to-object":143}],175:[function(require,module,exports){
"use strict";

require('./_set-species')('Array');

},{"./_set-species":124}],176:[function(require,module,exports){
"use strict";

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', {
  now: function now() {
    return new Date().getTime();
  }
});

},{"./_export":63}],177:[function(require,module,exports){
"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export');

var toISOString = require('./_date-to-iso-string'); // PhantomJS / old WebKit has a broken implementations


$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"./_date-to-iso-string":56,"./_export":63}],178:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var toObject = require('./_to-object');

var toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function () {
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
    toISOString: function toISOString() {
      return 1;
    }
  }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"./_export":63,"./_fails":65,"./_to-object":143,"./_to-primitive":144}],179:[function(require,module,exports){
"use strict";

var TO_PRIMITIVE = require('./_wks')('toPrimitive');

var proto = Date.prototype;
if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

},{"./_date-to-primitive":57,"./_hide":73,"./_wks":153}],180:[function(require,module,exports){
"use strict";

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;

if (new Date(NaN) + '' != INVALID_DATE) {
  require('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this); // eslint-disable-next-line no-self-compare

    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"./_redefine":119}],181:[function(require,module,exports){
"use strict";

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', {
  bind: require('./_bind')
});

},{"./_bind":47,"./_export":63}],182:[function(require,module,exports){
'use strict';

var isObject = require('./_is-object');

var getPrototypeOf = require('./_object-gpo');

var HAS_INSTANCE = require('./_wks')('hasInstance');

var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, {
  value: function value(O) {
    if (typeof this != 'function' || !isObject(O)) return false;
    if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

    while (O = getPrototypeOf(O)) {
      if (this.prototype === O) return true;
    }

    return false;
  }
});

},{"./_is-object":82,"./_object-dp":100,"./_object-gpo":106,"./_wks":153}],183:[function(require,module,exports){
"use strict";

var dP = require('./_object-dp').f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_descriptors":59,"./_object-dp":100}],184:[function(require,module,exports){
'use strict';

var strong = require('./_collection-strong');

var validate = require('./_validate-collection');

var MAP = 'Map'; // 23.1 Map Objects

module.exports = require('./_collection')(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":52,"./_collection-strong":50,"./_validate-collection":150}],185:[function(require,module,exports){
"use strict";

// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');

var log1p = require('./_math-log1p');

var sqrt = Math.sqrt;
var $acosh = Math.acosh;
$export($export.S + $export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"./_export":63,"./_math-log1p":93}],186:[function(require,module,exports){
"use strict";

// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');

var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
} // Tor Browser bug: Math.asinh(0) -> -0


$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
  asinh: asinh
});

},{"./_export":63}],187:[function(require,module,exports){
"use strict";

// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');

var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":63}],188:[function(require,module,exports){
"use strict";

// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');

var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":63,"./_math-sign":94}],189:[function(require,module,exports){
"use strict";

// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":63}],190:[function(require,module,exports){
"use strict";

// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');

var exp = Math.exp;
$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":63}],191:[function(require,module,exports){
"use strict";

// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');

var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {
  expm1: $expm1
});

},{"./_export":63,"./_math-expm1":91}],192:[function(require,module,exports){
"use strict";

// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  fround: require('./_math-fround')
});

},{"./_export":63,"./_math-fround":92}],193:[function(require,module,exports){
"use strict";

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export');

var abs = Math.abs;
$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) {
    // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;

    while (i < aLen) {
      arg = abs(arguments[i++]);

      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }

    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"./_export":63}],194:[function(require,module,exports){
"use strict";

// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');

var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"./_export":63,"./_fails":65}],195:[function(require,module,exports){
"use strict";

// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":63}],196:[function(require,module,exports){
"use strict";

// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log1p: require('./_math-log1p')
});

},{"./_export":63,"./_math-log1p":93}],197:[function(require,module,exports){
"use strict";

// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":63}],198:[function(require,module,exports){
"use strict";

// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  sign: require('./_math-sign')
});

},{"./_export":63,"./_math-sign":94}],199:[function(require,module,exports){
"use strict";

// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');

var expm1 = require('./_math-expm1');

var exp = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"./_export":63,"./_fails":65,"./_math-expm1":91}],200:[function(require,module,exports){
"use strict";

// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');

var expm1 = require('./_math-expm1');

var exp = Math.exp;
$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"./_export":63,"./_math-expm1":91}],201:[function(require,module,exports){
"use strict";

// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":63}],202:[function(require,module,exports){
'use strict';

var global = require('./_global');

var has = require('./_has');

var cof = require('./_cof');

var inheritIfRequired = require('./_inherit-if-required');

var toPrimitive = require('./_to-primitive');

var fails = require('./_fails');

var gOPN = require('./_object-gopn').f;

var gOPD = require('./_object-gopd').f;

var dP = require('./_object-dp').f;

var $trim = require('./_string-trim').trim;

var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype; // Opera ~12 has broken Object#toString

var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype; // 7.1.3 ToNumber(argument)

var toNumber = function toNumber(argument) {
  var it = toPrimitive(argument, false);

  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;

    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66:
        case 98:
          radix = 2;
          maxCode = 49;
          break;
        // fast equal /^0b[01]+$/i

        case 79:
        case 111:
          radix = 8;
          maxCode = 55;
          break;
        // fast equal /^0o[0-7]+$/i

        default:
          return +it;
      }

      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols

        if (code < 48 || code > maxCode) return NaN;
      }

      return parseInt(digits, radix);
    }
  }

  return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number // check on 1..constructor(foo) case
    && (BROKEN_COF ? fails(function () {
      proto.valueOf.call(that);
    }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };

  for (var keys = require('./_descriptors') ? gOPN(Base) : ( // ES3:
  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }

  $Number.prototype = proto;
  proto.constructor = $Number;

  require('./_redefine')(global, NUMBER, $Number);
}

},{"./_cof":49,"./_descriptors":59,"./_fails":65,"./_global":71,"./_has":72,"./_inherit-if-required":76,"./_object-create":99,"./_object-dp":100,"./_object-gopd":102,"./_object-gopn":104,"./_redefine":119,"./_string-trim":135,"./_to-primitive":144}],203:[function(require,module,exports){
"use strict";

// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', {
  EPSILON: Math.pow(2, -52)
});

},{"./_export":63}],204:[function(require,module,exports){
"use strict";

// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');

var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":63,"./_global":71}],205:[function(require,module,exports){
"use strict";

// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isInteger: require('./_is-integer')
});

},{"./_export":63,"./_is-integer":81}],206:[function(require,module,exports){
"use strict";

// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":63}],207:[function(require,module,exports){
"use strict";

// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');

var isInteger = require('./_is-integer');

var abs = Math.abs;
$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":63,"./_is-integer":81}],208:[function(require,module,exports){
"use strict";

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', {
  MAX_SAFE_INTEGER: 0x1fffffffffffff
});

},{"./_export":63}],209:[function(require,module,exports){
"use strict";

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', {
  MIN_SAFE_INTEGER: -0x1fffffffffffff
});

},{"./_export":63}],210:[function(require,module,exports){
"use strict";

var $export = require('./_export');

var $parseFloat = require('./_parse-float'); // 20.1.2.12 Number.parseFloat(string)


$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
  parseFloat: $parseFloat
});

},{"./_export":63,"./_parse-float":113}],211:[function(require,module,exports){
"use strict";

var $export = require('./_export');

var $parseInt = require('./_parse-int'); // 20.1.2.13 Number.parseInt(string, radix)


$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
  parseInt: $parseInt
});

},{"./_export":63,"./_parse-int":114}],212:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var toInteger = require('./_to-integer');

var aNumberValue = require('./_a-number-value');

var repeat = require('./_string-repeat');

var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function multiply(n, c) {
  var i = -1;
  var c2 = c;

  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function divide(n) {
  var i = 6;
  var c = 0;

  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = c % n * 1e7;
  }
};

var numToString = function numToString() {
  var i = 6;
  var s = '';

  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  }

  return s;
};

var pow = function pow(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function log(x) {
  var n = 0;
  var x2 = x;

  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }

  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }

  return n;
};

$export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !require('./_fails')(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);

    if (x < 0) {
      s = '-';
      x = -x;
    }

    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;

      if (e > 0) {
        multiply(0, z);
        j = f;

        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }

        multiply(pow(10, j, 1), 0);
        j = e - 1;

        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }

        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }

    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    }

    return m;
  }
});

},{"./_a-number-value":35,"./_export":63,"./_fails":65,"./_string-repeat":134,"./_to-integer":140}],213:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $fails = require('./_fails');

var aNumberValue = require('./_a-number-value');

var $toPrecision = 1.0.toPrecision;
$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

},{"./_a-number-value":35,"./_export":63,"./_fails":65}],214:[function(require,module,exports){
"use strict";

// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {
  assign: require('./_object-assign')
});

},{"./_export":63,"./_object-assign":98}],215:[function(require,module,exports){
"use strict";

var $export = require('./_export'); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


$export($export.S, 'Object', {
  create: require('./_object-create')
});

},{"./_export":63,"./_object-create":99}],216:[function(require,module,exports){
"use strict";

var $export = require('./_export'); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


$export($export.S + $export.F * !require('./_descriptors'), 'Object', {
  defineProperties: require('./_object-dps')
});

},{"./_descriptors":59,"./_export":63,"./_object-dps":101}],217:[function(require,module,exports){
"use strict";

var $export = require('./_export'); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


$export($export.S + $export.F * !require('./_descriptors'), 'Object', {
  defineProperty: require('./_object-dp').f
});

},{"./_descriptors":59,"./_export":63,"./_object-dp":100}],218:[function(require,module,exports){
"use strict";

// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');

var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":82,"./_meta":95,"./_object-sap":110}],219:[function(require,module,exports){
"use strict";

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');

var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":102,"./_object-sap":110,"./_to-iobject":141}],220:[function(require,module,exports){
"use strict";

// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-gopn-ext":103,"./_object-sap":110}],221:[function(require,module,exports){
"use strict";

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');

var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":106,"./_object-sap":110,"./_to-object":143}],222:[function(require,module,exports){
"use strict";

// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":82,"./_object-sap":110}],223:[function(require,module,exports){
"use strict";

// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":82,"./_object-sap":110}],224:[function(require,module,exports){
"use strict";

// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":82,"./_object-sap":110}],225:[function(require,module,exports){
"use strict";

// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');

$export($export.S, 'Object', {
  is: require('./_same-value')
});

},{"./_export":63,"./_same-value":122}],226:[function(require,module,exports){
"use strict";

// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');

var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":108,"./_object-sap":110,"./_to-object":143}],227:[function(require,module,exports){
"use strict";

// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');

var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":82,"./_meta":95,"./_object-sap":110}],228:[function(require,module,exports){
"use strict";

// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');

var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":82,"./_meta":95,"./_object-sap":110}],229:[function(require,module,exports){
"use strict";

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');

$export($export.S, 'Object', {
  setPrototypeOf: require('./_set-proto').set
});

},{"./_export":63,"./_set-proto":123}],230:[function(require,module,exports){
'use strict'; // 19.1.3.6 Object.prototype.toString()

var classof = require('./_classof');

var test = {};
test[require('./_wks')('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":48,"./_redefine":119,"./_wks":153}],231:[function(require,module,exports){
"use strict";

var $export = require('./_export');

var $parseFloat = require('./_parse-float'); // 18.2.4 parseFloat(string)


$export($export.G + $export.F * (parseFloat != $parseFloat), {
  parseFloat: $parseFloat
});

},{"./_export":63,"./_parse-float":113}],232:[function(require,module,exports){
"use strict";

var $export = require('./_export');

var $parseInt = require('./_parse-int'); // 18.2.5 parseInt(string, radix)


$export($export.G + $export.F * (parseInt != $parseInt), {
  parseInt: $parseInt
});

},{"./_export":63,"./_parse-int":114}],233:[function(require,module,exports){
'use strict';

var LIBRARY = require('./_library');

var global = require('./_global');

var ctx = require('./_ctx');

var classof = require('./_classof');

var $export = require('./_export');

var isObject = require('./_is-object');

var aFunction = require('./_a-function');

var anInstance = require('./_an-instance');

var forOf = require('./_for-of');

var speciesConstructor = require('./_species-constructor');

var task = require('./_task').set;

var microtask = require('./_microtask')();

var newPromiseCapabilityModule = require('./_new-promise-capability');

var perform = require('./_perform');

var userAgent = require('./_user-agent');

var promiseResolve = require('./_promise-resolve');

var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';

var empty = function empty() {
  /* empty */
};

var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);

    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {
    /* empty */
  }
}(); // helpers

var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;

    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };

    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach


    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};

var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;

    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }

    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};

var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};

var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;

    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};

var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};

var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");

    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap

        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
}; // constructor polyfill


if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);

    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions

    this._a = undefined; // <- checked in isUnhandled reactions

    this._s = 0; // <- state

    this._d = false; // <- done

    this._v = undefined; // <- value

    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

    this._n = false; // <- notify
  };

  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;

      this._c.push(reaction);

      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Promise: $Promise
});

require('./_set-to-string-tag')($Promise, PROMISE);

require('./_set-species')(PROMISE);

Wrapper = require('./_core')[PROMISE]; // statics

$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_a-function":34,"./_an-instance":38,"./_classof":48,"./_core":53,"./_ctx":55,"./_export":63,"./_for-of":69,"./_global":71,"./_is-object":82,"./_iter-detect":87,"./_library":90,"./_microtask":96,"./_new-promise-capability":97,"./_perform":115,"./_promise-resolve":116,"./_redefine-all":118,"./_set-species":124,"./_set-to-string-tag":125,"./_species-constructor":128,"./_task":137,"./_user-agent":149,"./_wks":153}],234:[function(require,module,exports){
"use strict";

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require('./_export');

var aFunction = require('./_a-function');

var anObject = require('./_an-object');

var rApply = (require('./_global').Reflect || {}).apply;
var fApply = Function.apply; // MS Edge argumentsList argument is optional

$export($export.S + $export.F * !require('./_fails')(function () {
  rApply(function () {
    /* empty */
  });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"./_a-function":34,"./_an-object":39,"./_export":63,"./_fails":65,"./_global":71}],235:[function(require,module,exports){
"use strict";

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');

var create = require('./_object-create');

var aFunction = require('./_a-function');

var anObject = require('./_an-object');

var isObject = require('./_is-object');

var fails = require('./_fails');

var bind = require('./_bind');

var rConstruct = (require('./_global').Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(rConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {
    /* empty */
  });
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_a-function":34,"./_an-object":39,"./_bind":47,"./_export":63,"./_fails":65,"./_global":71,"./_is-object":82,"./_object-create":99}],236:[function(require,module,exports){
"use strict";

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require('./_object-dp');

var $export = require('./_export');

var anObject = require('./_an-object');

var toPrimitive = require('./_to-primitive'); // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


$export($export.S + $export.F * require('./_fails')(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, {
    value: 1
  }), 1, {
    value: 2
  });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);

    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":39,"./_export":63,"./_fails":65,"./_object-dp":100,"./_to-primitive":144}],237:[function(require,module,exports){
"use strict";

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require('./_export');

var gOPD = require('./_object-gopd').f;

var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"./_an-object":39,"./_export":63,"./_object-gopd":102}],238:[function(require,module,exports){
'use strict'; // 26.1.5 Reflect.enumerate(target)

var $export = require('./_export');

var anObject = require('./_an-object');

var Enumerate = function Enumerate(iterated) {
  this._t = anObject(iterated); // target

  this._i = 0; // next index

  var keys = this._k = []; // keys

  var key;

  for (key in iterated) {
    keys.push(key);
  }
};

require('./_iter-create')(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;

  do {
    if (that._i >= keys.length) return {
      value: undefined,
      done: true
    };
  } while (!((key = keys[that._i++]) in that._t));

  return {
    value: key,
    done: false
  };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

},{"./_an-object":39,"./_export":63,"./_iter-create":85}],239:[function(require,module,exports){
"use strict";

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');

var $export = require('./_export');

var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_an-object":39,"./_export":63,"./_object-gopd":102}],240:[function(require,module,exports){
"use strict";

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');

var getProto = require('./_object-gpo');

var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_an-object":39,"./_export":63,"./_object-gpo":106}],241:[function(require,module,exports){
"use strict";

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require('./_object-gopd');

var getPrototypeOf = require('./_object-gpo');

var has = require('./_has');

var $export = require('./_export');

var isObject = require('./_is-object');

var anObject = require('./_an-object');

function get(target, propertyKey
/* , receiver */
) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', {
  get: get
});

},{"./_an-object":39,"./_export":63,"./_has":72,"./_is-object":82,"./_object-gopd":102,"./_object-gpo":106}],242:[function(require,module,exports){
"use strict";

// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":63}],243:[function(require,module,exports){
"use strict";

// 26.1.10 Reflect.isExtensible(target)
var $export = require('./_export');

var anObject = require('./_an-object');

var $isExtensible = Object.isExtensible;
$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"./_an-object":39,"./_export":63}],244:[function(require,module,exports){
"use strict";

// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  ownKeys: require('./_own-keys')
});

},{"./_export":63,"./_own-keys":112}],245:[function(require,module,exports){
"use strict";

// 26.1.12 Reflect.preventExtensions(target)
var $export = require('./_export');

var anObject = require('./_an-object');

var $preventExtensions = Object.preventExtensions;
$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);

    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_an-object":39,"./_export":63}],246:[function(require,module,exports){
"use strict";

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require('./_export');

var setProto = require('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);

    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":63,"./_set-proto":123}],247:[function(require,module,exports){
"use strict";

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require('./_object-dp');

var gOPD = require('./_object-gopd');

var getPrototypeOf = require('./_object-gpo');

var has = require('./_has');

var $export = require('./_export');

var createDesc = require('./_property-desc');

var anObject = require('./_an-object');

var isObject = require('./_is-object');

function set(target, propertyKey, V
/* , receiver */
) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;

  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }

    ownDesc = createDesc(0);
  }

  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;

    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));

    return true;
  }

  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', {
  set: set
});

},{"./_an-object":39,"./_export":63,"./_has":72,"./_is-object":82,"./_object-dp":100,"./_object-gopd":102,"./_object-gpo":106,"./_property-desc":117}],248:[function(require,module,exports){
"use strict";

var global = require('./_global');

var inheritIfRequired = require('./_inherit-if-required');

var dP = require('./_object-dp').f;

var gOPN = require('./_object-gopn').f;

var isRegExp = require('./_is-regexp');

var $flags = require('./_flags');

var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g; // "new" creates a new object, old webkit buggy here

var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
  };

  var proxy = function proxy(key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function get() {
        return Base[key];
      },
      set: function set(it) {
        Base[key] = it;
      }
    });
  };

  for (var keys = gOPN(Base), i = 0; keys.length > i;) {
    proxy(keys[i++]);
  }

  proto.constructor = $RegExp;
  $RegExp.prototype = proto;

  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

},{"./_descriptors":59,"./_fails":65,"./_flags":67,"./_global":71,"./_inherit-if-required":76,"./_is-regexp":83,"./_object-dp":100,"./_object-gopn":104,"./_redefine":119,"./_set-species":124,"./_wks":153}],249:[function(require,module,exports){
'use strict';

var regexpExec = require('./_regexp-exec');

require('./_export')({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

},{"./_export":63,"./_regexp-exec":121}],250:[function(require,module,exports){
"use strict";

// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":59,"./_flags":67,"./_object-dp":100}],251:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');

var toLength = require('./_to-length');

var advanceStringIndex = require('./_advance-string-index');

var regExpExec = require('./_regexp-exec-abstract'); // @@match logic


require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

},{"./_advance-string-index":37,"./_an-object":39,"./_fix-re-wks":66,"./_regexp-exec-abstract":120,"./_to-length":142}],252:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');

var toObject = require('./_to-object');

var toLength = require('./_to-length');

var toInteger = require('./_to-integer');

var advanceStringIndex = require('./_advance-string-index');

var regExpExec = require('./_regexp-exec-abstract');

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function maybeToString(it) {
  return it === undefined ? it : String(it);
}; // @@replace logic


require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [// `String.prototype.replace` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
  function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, // `RegExp.prototype[@@replace]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
  function (regexp, replaceValue) {
    var res = maybeCallNative($replace, regexp, this, replaceValue);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var functionalReplace = typeof replaceValue === 'function';
    if (!functionalReplace) replaceValue = String(replaceValue);
    var global = rx.global;

    if (global) {
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
    }

    var results = [];

    while (true) {
      var result = regExpExec(rx, S);
      if (result === null) break;
      results.push(result);
      if (!global) break;
      var matchStr = String(result[0]);
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
    }

    var accumulatedResult = '';
    var nextSourcePosition = 0;

    for (var i = 0; i < results.length; i++) {
      result = results[i];
      var matched = String(result[0]);
      var position = max(min(toInteger(result.index), S.length), 0);
      var captures = []; // NOTE: This is equivalent to
      //   captures = result.slice(1).map(maybeToString)
      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

      for (var j = 1; j < result.length; j++) {
        captures.push(maybeToString(result[j]));
      }

      var namedCaptures = result.groups;

      if (functionalReplace) {
        var replacerArgs = [matched].concat(captures, position, S);
        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
        var replacement = String(replaceValue.apply(undefined, replacerArgs));
      } else {
        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
      }

      if (position >= nextSourcePosition) {
        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
        nextSourcePosition = position + matched.length;
      }
    }

    return accumulatedResult + S.slice(nextSourcePosition);
  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  }
});

},{"./_advance-string-index":37,"./_an-object":39,"./_fix-re-wks":66,"./_regexp-exec-abstract":120,"./_to-integer":140,"./_to-length":142,"./_to-object":143}],253:[function(require,module,exports){
'use strict';

var anObject = require('./_an-object');

var sameValue = require('./_same-value');

var regExpExec = require('./_regexp-exec-abstract'); // @@search logic


require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [// `String.prototype.search` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.search
  function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, // `RegExp.prototype[@@search]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
  function (regexp) {
    var res = maybeCallNative($search, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var previousLastIndex = rx.lastIndex;
    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
    var result = regExpExec(rx, S);
    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
    return result === null ? -1 : result.index;
  }];
});

},{"./_an-object":39,"./_fix-re-wks":66,"./_regexp-exec-abstract":120,"./_same-value":122}],254:[function(require,module,exports){
'use strict';

var isRegExp = require('./_is-regexp');

var anObject = require('./_an-object');

var speciesConstructor = require('./_species-constructor');

var advanceStringIndex = require('./_advance-string-index');

var toLength = require('./_to-length');

var callRegExpExec = require('./_regexp-exec-abstract');

var regexpExec = require('./_regexp-exec');

var fails = require('./_fails');

var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

var SUPPORTS_Y = !fails(function () {
  RegExp(MAX_UINT32, 'y');
}); // @@split logic

require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function internalSplit(separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;

      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function internalSplit(separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [// `String.prototype.split` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.split
  function split(separator, limit) {
    var O = defined(this);
    var splitter = separator == undefined ? undefined : separator[SPLIT];
    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
  }, // `RegExp.prototype[@@split]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
  //
  // NOTE: This cannot be properly polyfilled in engines that don't support
  // the 'y' flag.
  function (regexp, limit) {
    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    var C = speciesConstructor(rx, RegExp);
    var unicodeMatching = rx.unicode;
    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
    // simulate the 'y' flag.

    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
    if (lim === 0) return [];
    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
    var p = 0;
    var q = 0;
    var A = [];

    while (q < S.length) {
      splitter.lastIndex = SUPPORTS_Y ? q : 0;
      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
      var e;

      if (z === null || (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
        q = advanceStringIndex(S, q, unicodeMatching);
      } else {
        A.push(S.slice(p, q));
        if (A.length === lim) return A;

        for (var i = 1; i <= z.length - 1; i++) {
          A.push(z[i]);
          if (A.length === lim) return A;
        }

        q = p = e;
      }
    }

    A.push(S.slice(p));
    return A;
  }];
});

},{"./_advance-string-index":37,"./_an-object":39,"./_fails":65,"./_fix-re-wks":66,"./_is-regexp":83,"./_regexp-exec":121,"./_regexp-exec-abstract":120,"./_species-constructor":128,"./_to-length":142}],255:[function(require,module,exports){
'use strict';

require('./es6.regexp.flags');

var anObject = require('./_an-object');

var $flags = require('./_flags');

var DESCRIPTORS = require('./_descriptors');

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (require('./_fails')(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"./_an-object":39,"./_descriptors":59,"./_fails":65,"./_flags":67,"./_redefine":119,"./es6.regexp.flags":250}],256:[function(require,module,exports){
'use strict';

var strong = require('./_collection-strong');

var validate = require('./_validate-collection');

var SET = 'Set'; // 23.2 Set Objects

module.exports = require('./_collection')(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection":52,"./_collection-strong":50,"./_validate-collection":150}],257:[function(require,module,exports){
'use strict'; // B.2.3.2 String.prototype.anchor(name)

require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"./_string-html":132}],258:[function(require,module,exports){
'use strict'; // B.2.3.3 String.prototype.big()

require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"./_string-html":132}],259:[function(require,module,exports){
'use strict'; // B.2.3.4 String.prototype.blink()

require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"./_string-html":132}],260:[function(require,module,exports){
'use strict'; // B.2.3.5 String.prototype.bold()

require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"./_string-html":132}],261:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $at = require('./_string-at')(false);

$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":63,"./_string-at":130}],262:[function(require,module,exports){
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';

var $export = require('./_export');

var toLength = require('./_to-length');

var context = require('./_string-context');

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];
$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString
  /* , endPosition = @length */
  ) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
  }
});

},{"./_export":63,"./_fails-is-regexp":64,"./_string-context":131,"./_to-length":142}],263:[function(require,module,exports){
'use strict'; // B.2.3.6 String.prototype.fixed()

require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"./_string-html":132}],264:[function(require,module,exports){
'use strict'; // B.2.3.7 String.prototype.fontcolor(color)

require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"./_string-html":132}],265:[function(require,module,exports){
'use strict'; // B.2.3.8 String.prototype.fontsize(size)

require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"./_string-html":132}],266:[function(require,module,exports){
"use strict";

var $export = require('./_export');

var toAbsoluteIndex = require('./_to-absolute-index');

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) {
    // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;

    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
    }

    return res.join('');
  }
});

},{"./_export":63,"./_to-absolute-index":138}],267:[function(require,module,exports){
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';

var $export = require('./_export');

var context = require('./_string-context');

var INCLUDES = 'includes';
$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString
  /* , position = 0 */
  ) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":63,"./_fails-is-regexp":64,"./_string-context":131}],268:[function(require,module,exports){
'use strict'; // B.2.3.9 String.prototype.italics()

require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"./_string-html":132}],269:[function(require,module,exports){
'use strict';

var $at = require('./_string-at')(true); // 21.1.3.27 String.prototype[@@iterator]()


require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

},{"./_iter-define":86,"./_string-at":130}],270:[function(require,module,exports){
'use strict'; // B.2.3.10 String.prototype.link(url)

require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"./_string-html":132}],271:[function(require,module,exports){
"use strict";

var $export = require('./_export');

var toIObject = require('./_to-iobject');

var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;

    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    }

    return res.join('');
  }
});

},{"./_export":63,"./_to-iobject":141,"./_to-length":142}],272:[function(require,module,exports){
"use strict";

var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":63,"./_string-repeat":134}],273:[function(require,module,exports){
'use strict'; // B.2.3.11 String.prototype.small()

require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"./_string-html":132}],274:[function(require,module,exports){
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';

var $export = require('./_export');

var toLength = require('./_to-length');

var context = require('./_string-context');

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];
$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString
  /* , position = 0 */
  ) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
  }
});

},{"./_export":63,"./_fails-is-regexp":64,"./_string-context":131,"./_to-length":142}],275:[function(require,module,exports){
'use strict'; // B.2.3.12 String.prototype.strike()

require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"./_string-html":132}],276:[function(require,module,exports){
'use strict'; // B.2.3.13 String.prototype.sub()

require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"./_string-html":132}],277:[function(require,module,exports){
'use strict'; // B.2.3.14 String.prototype.sup()

require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"./_string-html":132}],278:[function(require,module,exports){
'use strict'; // 21.1.3.25 String.prototype.trim()

require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"./_string-trim":135}],279:[function(require,module,exports){
'use strict'; // ECMAScript 6 symbols shim

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = require('./_global');

var has = require('./_has');

var DESCRIPTORS = require('./_descriptors');

var $export = require('./_export');

var redefine = require('./_redefine');

var META = require('./_meta').KEY;

var $fails = require('./_fails');

var shared = require('./_shared');

var setToStringTag = require('./_set-to-string-tag');

var uid = require('./_uid');

var wks = require('./_wks');

var wksExt = require('./_wks-ext');

var wksDefine = require('./_wks-define');

var enumKeys = require('./_enum-keys');

var isArray = require('./_is-array');

var anObject = require('./_an-object');

var isObject = require('./_is-object');

var toIObject = require('./_to-iobject');

var toPrimitive = require('./_to-primitive');

var createDesc = require('./_property-desc');

var _create = require('./_object-create');

var gOPNExt = require('./_object-gopn-ext');

var $GOPD = require('./_object-gopd');

var $DP = require('./_object-dp');

var $keys = require('./_object-keys');

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":39,"./_descriptors":59,"./_enum-keys":62,"./_export":63,"./_fails":65,"./_global":71,"./_has":72,"./_hide":73,"./_is-array":80,"./_is-object":82,"./_library":90,"./_meta":95,"./_object-create":99,"./_object-dp":100,"./_object-gopd":102,"./_object-gopn":104,"./_object-gopn-ext":103,"./_object-gops":105,"./_object-keys":108,"./_object-pie":109,"./_property-desc":117,"./_redefine":119,"./_set-to-string-tag":125,"./_shared":127,"./_to-iobject":141,"./_to-primitive":144,"./_uid":148,"./_wks":153,"./_wks-define":151,"./_wks-ext":152}],280:[function(require,module,exports){
'use strict';

var $export = require('./_export');

var $typed = require('./_typed');

var buffer = require('./_typed-buffer');

var anObject = require('./_an-object');

var toAbsoluteIndex = require('./_to-absolute-index');

var toLength = require('./_to-length');

var isObject = require('./_is-object');

var ArrayBuffer = require('./_global').ArrayBuffer;

var speciesConstructor = require('./_species-constructor');

var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';
$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
  ArrayBuffer: $ArrayBuffer
});
$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});
$export($export.P + $export.U + $export.F * require('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix

    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;

    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    }

    return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);

},{"./_an-object":39,"./_export":63,"./_fails":65,"./_global":71,"./_is-object":82,"./_set-species":124,"./_species-constructor":128,"./_to-absolute-index":138,"./_to-length":142,"./_typed":147,"./_typed-buffer":146}],281:[function(require,module,exports){
"use strict";

var $export = require('./_export');

$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});

},{"./_export":63,"./_typed":147,"./_typed-buffer":146}],282:[function(require,module,exports){
"use strict";

require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":145}],283:[function(require,module,exports){
"use strict";

require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":145}],284:[function(require,module,exports){
"use strict";

require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":145}],285:[function(require,module,exports){
"use strict";

require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":145}],286:[function(require,module,exports){
"use strict";

require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":145}],287:[function(require,module,exports){
"use strict";

require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":145}],288:[function(require,module,exports){
"use strict";

require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":145}],289:[function(require,module,exports){
"use strict";

require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":145}],290:[function(require,module,exports){
"use strict";

require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":145}],291:[function(require,module,exports){
'use strict';

var global = require('./_global');

var each = require('./_array-methods')(0);

var redefine = require('./_redefine');

var meta = require('./_meta');

var assign = require('./_object-assign');

var weak = require('./_collection-weak');

var isObject = require('./_is-object');

var validate = require('./_validate-collection');

var NATIVE_WEAK_MAP = require('./_validate-collection');

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
}; // 23.3 WeakMap Objects

var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true); // IE11 WeakMap frozen keys fix


if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();

        var result = this._f[key](a, b);

        return key == 'set' ? this : result; // store all the rest on native weakmap
      }

      return method.call(this, a, b);
    });
  });
}

},{"./_array-methods":43,"./_collection":52,"./_collection-weak":51,"./_global":71,"./_is-object":82,"./_meta":95,"./_object-assign":98,"./_redefine":119,"./_validate-collection":150}],292:[function(require,module,exports){
'use strict';

var weak = require('./_collection-weak');

var validate = require('./_validate-collection');

var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"./_collection":52,"./_collection-weak":51,"./_validate-collection":150}],293:[function(require,module,exports){
'use strict'; // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

var $export = require('./_export');

var flattenIntoArray = require('./_flatten-into-array');

var toObject = require('./_to-object');

var toLength = require('./_to-length');

var aFunction = require('./_a-function');

var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn
  /* , thisArg */
  ) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require('./_add-to-unscopables')('flatMap');

},{"./_a-function":34,"./_add-to-unscopables":36,"./_array-species-create":46,"./_export":63,"./_flatten-into-array":68,"./_to-length":142,"./_to-object":143}],294:[function(require,module,exports){
'use strict'; // https://github.com/tc39/Array.prototype.includes

var $export = require('./_export');

var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el
  /* , fromIndex = 0 */
  ) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_add-to-unscopables":36,"./_array-includes":42,"./_export":63}],295:[function(require,module,exports){
"use strict";

// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');

var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":63,"./_object-to-array":111}],296:[function(require,module,exports){
"use strict";

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');

var ownKeys = require('./_own-keys');

var toIObject = require('./_to-iobject');

var gOPD = require('./_object-gopd');

var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;

    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }

    return result;
  }
});

},{"./_create-property":54,"./_export":63,"./_object-gopd":102,"./_own-keys":112,"./_to-iobject":141}],297:[function(require,module,exports){
"use strict";

// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');

var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":63,"./_object-to-array":111}],298:[function(require,module,exports){
// https://github.com/tc39/proposal-promise-finally
'use strict';

var $export = require('./_export');

var core = require('./_core');

var global = require('./_global');

var speciesConstructor = require('./_species-constructor');

var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

},{"./_core":53,"./_export":63,"./_global":71,"./_promise-resolve":116,"./_species-constructor":128}],299:[function(require,module,exports){
'use strict'; // https://github.com/tc39/proposal-string-pad-start-end

var $export = require('./_export');

var $pad = require('./_string-pad');

var userAgent = require('./_user-agent'); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":63,"./_string-pad":133,"./_user-agent":149}],300:[function(require,module,exports){
'use strict'; // https://github.com/tc39/proposal-string-pad-start-end

var $export = require('./_export');

var $pad = require('./_string-pad');

var userAgent = require('./_user-agent'); // https://github.com/zloirock/core-js/issues/280


var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);
$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength
  /* , fillString = ' ' */
  ) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":63,"./_string-pad":133,"./_user-agent":149}],301:[function(require,module,exports){
'use strict'; // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

require('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

},{"./_string-trim":135}],302:[function(require,module,exports){
'use strict'; // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

require('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

},{"./_string-trim":135}],303:[function(require,module,exports){
"use strict";

require('./_wks-define')('asyncIterator');

},{"./_wks-define":151}],304:[function(require,module,exports){
"use strict";

var $iterators = require('./es6.array.iterator');

var getKeys = require('./_object-keys');

var redefine = require('./_redefine');

var global = require('./_global');

var hide = require('./_hide');

var Iterators = require('./_iterators');

var wks = require('./_wks');

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

},{"./_global":71,"./_hide":73,"./_iterators":89,"./_object-keys":108,"./_redefine":119,"./_wks":153,"./es6.array.iterator":165}],305:[function(require,module,exports){
"use strict";

var $export = require('./_export');

var $task = require('./_task');

$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":63,"./_task":137}],306:[function(require,module,exports){
"use strict";

// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');

var $export = require('./_export');

var userAgent = require('./_user-agent');

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function wrap(set) {
  return function (fn, time
  /* , ...args */
  ) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};

$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_export":63,"./_global":71,"./_user-agent":149}],307:[function(require,module,exports){
"use strict";

require('../modules/web.timers');

require('../modules/web.immediate');

require('../modules/web.dom.iterable');

module.exports = require('../modules/_core');

},{"../modules/_core":53,"../modules/web.dom.iterable":304,"../modules/web.immediate":305,"../modules/web.timers":306}],308:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * css-vars-ponyfill
 * v2.0.2
 * https://jhildenbiddle.github.io/css-vars-ponyfill/
 * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
 * MIT license
 */
(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = global || self, global.cssVars = factory());
})(void 0, function () {
  "use strict";

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
  /*!
  * get-css-data
  * v1.6.3
  * https://github.com/jhildenbiddle/get-css-data
  * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
  * MIT license
  */


  function getUrls(urls) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var settings = {
      mimeType: options.mimeType || null,
      onBeforeSend: options.onBeforeSend || Function.prototype,
      onSuccess: options.onSuccess || Function.prototype,
      onError: options.onError || Function.prototype,
      onComplete: options.onComplete || Function.prototype
    };
    var urlArray = Array.isArray(urls) ? urls : [urls];
    var urlQueue = Array.apply(null, Array(urlArray.length)).map(function (x) {
      return null;
    });

    function isValidCss() {
      var cssText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var isHTML = cssText.trim().charAt(0) === "<";
      return !isHTML;
    }

    function onError(xhr, urlIndex) {
      settings.onError(xhr, urlArray[urlIndex], urlIndex);
    }

    function onSuccess(responseText, urlIndex) {
      var returnVal = settings.onSuccess(responseText, urlArray[urlIndex], urlIndex);
      responseText = returnVal === false ? "" : returnVal || responseText;
      urlQueue[urlIndex] = responseText;

      if (urlQueue.indexOf(null) === -1) {
        settings.onComplete(urlQueue);
      }
    }

    var parser = document.createElement("a");
    urlArray.forEach(function (url, i) {
      parser.setAttribute("href", url);
      parser.href = String(parser.href);
      var isIElte9 = Boolean(document.all && !window.atob);
      var isIElte9CORS = isIElte9 && parser.host.split(":")[0] !== location.host.split(":")[0];

      if (isIElte9CORS) {
        var isSameProtocol = parser.protocol === location.protocol;

        if (isSameProtocol) {
          var xdr = new XDomainRequest();
          xdr.open("GET", url);
          xdr.timeout = 0;
          xdr.onprogress = Function.prototype;
          xdr.ontimeout = Function.prototype;

          xdr.onload = function () {
            if (isValidCss(xdr.responseText)) {
              onSuccess(xdr.responseText, i);
            } else {
              onError(xdr, i);
            }
          };

          xdr.onerror = function (err) {
            onError(xdr, i);
          };

          setTimeout(function () {
            xdr.send();
          }, 0);
        } else {
          console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(url, ")"));
          onError(null, i);
        }
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        if (settings.mimeType && xhr.overrideMimeType) {
          xhr.overrideMimeType(settings.mimeType);
        }

        settings.onBeforeSend(xhr, url, i);

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200 && isValidCss(xhr.responseText)) {
              onSuccess(xhr.responseText, i);
            } else {
              onError(xhr, i);
            }
          }
        };

        xhr.send();
      }
    });
  }
  /**
  * Gets CSS data from <style> and <link> nodes (including @imports), then
  * returns data in order processed by DOM. Allows specifying nodes to
  * include/exclude and filtering CSS data using RegEx.
  *
  * @preserve
  * @param {object}   [options] The options object
  * @param {object}   [options.rootElement=document] Root element to traverse for
  *                   <link> and <style> nodes.
  * @param {string}   [options.include] CSS selector matching <link> and <style>
  *                   nodes to include
  * @param {string}   [options.exclude] CSS selector matching <link> and <style>
  *                   nodes to exclude
  * @param {object}   [options.filter] Regular expression used to filter node CSS
  *                   data. Each block of CSS data is tested against the filter,
  *                   and only matching data is included.
  * @param {object}   [options.useCSSOM=false] Determines if CSS data will be
  *                   collected from a stylesheet's runtime values instead of its
  *                   text content. This is required to get accurate CSS data
  *                   when a stylesheet has been modified using the deleteRule()
  *                   or insertRule() methods because these modifications will
  *                   not be reflected in the stylesheet's text content.
  * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
  *                   1) the XHR object, 2) source node reference, and 3) the
  *                   source URL as arguments.
  * @param {function} [options.onSuccess] Callback on each CSS node read. Passes
  *                   1) CSS text, 2) source node reference, and 3) the source
  *                   URL as arguments.
  * @param {function} [options.onError] Callback on each error. Passes 1) the XHR
  *                   object for inspection, 2) soure node reference, and 3) the
  *                   source URL that failed (either a <link> href or an @import)
  *                   as arguments
  * @param {function} [options.onComplete] Callback after all nodes have been
  *                   processed. Passes 1) concatenated CSS text, 2) an array of
  *                   CSS text in DOM order, and 3) an array of nodes in DOM
  *                   order as arguments.
  *
  * @example
  *
  *   getCssData({
  *     rootElement: document,
  *     include    : 'style,link[rel="stylesheet"]',
  *     exclude    : '[href="skip.css"]',
  *     filter     : /red/,
  *     useCSSOM   : false,
  *     onBeforeSend(xhr, node, url) {
  *       // ...
  *     }
  *     onSuccess(cssText, node, url) {
  *       // ...
  *     }
  *     onError(xhr, node, url) {
  *       // ...
  *     },
  *     onComplete(cssText, cssArray, nodeArray) {
  *       // ...
  *     }
  *   });
  */


  function getCssData(options) {
    var regex = {
      cssComments: /\/\*[\s\S]+?\*\//g,
      cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
    };
    var settings = {
      rootElement: options.rootElement || document,
      include: options.include || 'style,link[rel="stylesheet"]',
      exclude: options.exclude || null,
      filter: options.filter || null,
      useCSSOM: options.useCSSOM || false,
      onBeforeSend: options.onBeforeSend || Function.prototype,
      onSuccess: options.onSuccess || Function.prototype,
      onError: options.onError || Function.prototype,
      onComplete: options.onComplete || Function.prototype
    };
    var sourceNodes = Array.apply(null, settings.rootElement.querySelectorAll(settings.include)).filter(function (node) {
      return !matchesSelector(node, settings.exclude);
    });
    var cssArray = Array.apply(null, Array(sourceNodes.length)).map(function (x) {
      return null;
    });

    function handleComplete() {
      var isComplete = cssArray.indexOf(null) === -1;

      if (isComplete) {
        var cssText = cssArray.join("");
        settings.onComplete(cssText, cssArray, sourceNodes);
      }
    }

    function handleSuccess(cssText, cssIndex, node, sourceUrl) {
      var returnVal = settings.onSuccess(cssText, node, sourceUrl);
      cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;
      resolveImports(cssText, node, sourceUrl, function (resolvedCssText, errorData) {
        if (cssArray[cssIndex] === null) {
          errorData.forEach(function (data) {
            return settings.onError(data.xhr, node, data.url);
          });

          if (!settings.filter || settings.filter.test(resolvedCssText)) {
            cssArray[cssIndex] = resolvedCssText;
          } else {
            cssArray[cssIndex] = "";
          }

          handleComplete();
        }
      });
    }

    function parseImportData(cssText, baseUrl) {
      var ignoreRules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var importData = {};
      importData.rules = (cssText.replace(regex.cssComments, "").match(regex.cssImports) || []).filter(function (rule) {
        return ignoreRules.indexOf(rule) === -1;
      });
      importData.urls = importData.rules.map(function (rule) {
        return rule.replace(regex.cssImports, "$1");
      });
      importData.absoluteUrls = importData.urls.map(function (url) {
        return getFullUrl(url, baseUrl);
      });
      importData.absoluteRules = importData.rules.map(function (rule, i) {
        var oldUrl = importData.urls[i];
        var newUrl = getFullUrl(importData.absoluteUrls[i], baseUrl);
        return rule.replace(oldUrl, newUrl);
      });
      return importData;
    }

    function resolveImports(cssText, node, baseUrl, callbackFn) {
      var __errorData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

      var __errorRules = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

      var importData = parseImportData(cssText, baseUrl, __errorRules);

      if (importData.rules.length) {
        getUrls(importData.absoluteUrls, {
          onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
            settings.onBeforeSend(xhr, node, url);
          },
          onSuccess: function onSuccess(cssText, url, urlIndex) {
            var returnVal = settings.onSuccess(cssText, node, url);
            cssText = returnVal === false ? "" : returnVal || cssText;
            var responseImportData = parseImportData(cssText, url, __errorRules);
            responseImportData.rules.forEach(function (rule, i) {
              cssText = cssText.replace(rule, responseImportData.absoluteRules[i]);
            });
            return cssText;
          },
          onError: function onError(xhr, url, urlIndex) {
            __errorData.push({
              xhr: xhr,
              url: url
            });

            __errorRules.push(importData.rules[urlIndex]);

            resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
          },
          onComplete: function onComplete(responseArray) {
            responseArray.forEach(function (importText, i) {
              cssText = cssText.replace(importData.rules[i], importText);
            });
            resolveImports(cssText, node, baseUrl, callbackFn, __errorData, __errorRules);
          }
        });
      } else {
        callbackFn(cssText, __errorData);
      }
    }

    if (sourceNodes.length) {
      sourceNodes.forEach(function (node, i) {
        var linkHref = node.getAttribute("href");
        var linkRel = node.getAttribute("rel");
        var isLink = node.nodeName === "LINK" && linkHref && linkRel && linkRel.toLowerCase() === "stylesheet";
        var isStyle = node.nodeName === "STYLE";

        if (isLink) {
          getUrls(linkHref, {
            mimeType: "text/css",
            onBeforeSend: function onBeforeSend(xhr, url, urlIndex) {
              settings.onBeforeSend(xhr, node, url);
            },
            onSuccess: function onSuccess(cssText, url, urlIndex) {
              var sourceUrl = getFullUrl(linkHref, location.href);
              handleSuccess(cssText, i, node, sourceUrl);
            },
            onError: function onError(xhr, url, urlIndex) {
              cssArray[i] = "";
              settings.onError(xhr, node, url);
              handleComplete();
            }
          });
        } else if (isStyle) {
          var cssText = node.textContent;

          if (settings.useCSSOM) {
            cssText = Array.apply(null, node.sheet.cssRules).map(function (rule) {
              return rule.cssText;
            }).join("");
          }

          handleSuccess(cssText, i, node, location.href);
        } else {
          cssArray[i] = "";
          handleComplete();
        }
      });
    } else {
      settings.onComplete("", []);
    }
  }

  function getFullUrl(url) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
    var d = document.implementation.createHTMLDocument("");
    var b = d.createElement("base");
    var a = d.createElement("a");
    d.head.appendChild(b);
    d.body.appendChild(a);
    b.href = base;
    a.href = url;
    return a.href;
  }

  function matchesSelector(elm, selector) {
    var matches = elm.matches || elm.matchesSelector || elm.webkitMatchesSelector || elm.mozMatchesSelector || elm.msMatchesSelector || elm.oMatchesSelector;
    return matches.call(elm, selector);
  }

  var balancedMatch = balanced;

  function balanced(a, b, str) {
    if (a instanceof RegExp) a = maybeMatch(a, str);
    if (b instanceof RegExp) b = maybeMatch(b, str);
    var r = range(a, b, str);
    return r && {
      start: r[0],
      end: r[1],
      pre: str.slice(0, r[0]),
      body: str.slice(r[0] + a.length, r[1]),
      post: str.slice(r[1] + b.length)
    };
  }

  function maybeMatch(reg, str) {
    var m = str.match(reg);
    return m ? m[0] : null;
  }

  balanced.range = range;

  function range(a, b, str) {
    var begs, beg, left, right, result;
    var ai = str.indexOf(a);
    var bi = str.indexOf(b, ai + 1);
    var i = ai;

    if (ai >= 0 && bi > 0) {
      begs = [];
      left = str.length;

      while (i >= 0 && !result) {
        if (i == ai) {
          begs.push(i);
          ai = str.indexOf(a, i + 1);
        } else if (begs.length == 1) {
          result = [begs.pop(), bi];
        } else {
          beg = begs.pop();

          if (beg < left) {
            left = beg;
            right = bi;
          }

          bi = str.indexOf(b, i + 1);
        }

        i = ai < bi && ai >= 0 ? ai : bi;
      }

      if (begs.length) {
        result = [left, right];
      }
    }

    return result;
  }

  function parseCss(css) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = {
      preserveStatic: true,
      removeComments: false
    };

    var settings = _extends({}, defaults, options);

    var errors = [];

    function error(msg) {
      throw new Error("CSS parse error: ".concat(msg));
    }

    function match(re) {
      var m = re.exec(css);

      if (m) {
        css = css.slice(m[0].length);
        return m;
      }
    }

    function open() {
      return match(/^{\s*/);
    }

    function close() {
      return match(/^}/);
    }

    function whitespace() {
      match(/^\s*/);
    }

    function comment() {
      whitespace();

      if (css[0] !== "/" || css[1] !== "*") {
        return;
      }

      var i = 2;

      while (css[i] && (css[i] !== "*" || css[i + 1] !== "/")) {
        i++;
      }

      if (!css[i]) {
        return error("end of comment is missing");
      }

      var str = css.slice(2, i);
      css = css.slice(i + 2);
      return {
        type: "comment",
        comment: str
      };
    }

    function comments() {
      var cmnts = [];
      var c;

      while (c = comment()) {
        cmnts.push(c);
      }

      return settings.removeComments ? [] : cmnts;
    }

    function selector() {
      whitespace();

      while (css[0] === "}") {
        error("extra closing bracket");
      }

      var m = match(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);

      if (m) {
        return m[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
          return m.replace(/,/g, "‌");
        }).split(/\s*(?![^(]*\)),\s*/).map(function (s) {
          return s.replace(/\u200C/g, ",");
        });
      }
    }

    function declaration() {
      match(/^([;\s]*)+/);
      var comment_regexp = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g;
      var prop = match(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);

      if (!prop) {
        return;
      }

      prop = prop[0].trim();

      if (!match(/^:\s*/)) {
        return error("property missing ':'");
      }

      var val = match(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/);
      var ret = {
        type: "declaration",
        property: prop.replace(comment_regexp, ""),
        value: val ? val[0].replace(comment_regexp, "").trim() : ""
      };
      match(/^[;\s]*/);
      return ret;
    }

    function declarations() {
      if (!open()) {
        return error("missing '{'");
      }

      var d;
      var decls = comments();

      while (d = declaration()) {
        decls.push(d);
        decls = decls.concat(comments());
      }

      if (!close()) {
        return error("missing '}'");
      }

      return decls;
    }

    function keyframe() {
      whitespace();
      var vals = [];
      var m;

      while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
        vals.push(m[1]);
        match(/^,\s*/);
      }

      if (vals.length) {
        return {
          type: "keyframe",
          values: vals,
          declarations: declarations()
        };
      }
    }

    function at_keyframes() {
      var m = match(/^@([-\w]+)?keyframes\s*/);

      if (!m) {
        return;
      }

      var vendor = m[1];
      m = match(/^([-\w]+)\s*/);

      if (!m) {
        return error("@keyframes missing name");
      }

      var name = m[1];

      if (!open()) {
        return error("@keyframes missing '{'");
      }

      var frame;
      var frames = comments();

      while (frame = keyframe()) {
        frames.push(frame);
        frames = frames.concat(comments());
      }

      if (!close()) {
        return error("@keyframes missing '}'");
      }

      return {
        type: "keyframes",
        name: name,
        vendor: vendor,
        keyframes: frames
      };
    }

    function at_page() {
      var m = match(/^@page */);

      if (m) {
        var sel = selector() || [];
        return {
          type: "page",
          selectors: sel,
          declarations: declarations()
        };
      }
    }

    function at_fontface() {
      var m = match(/^@font-face\s*/);

      if (m) {
        return {
          type: "font-face",
          declarations: declarations()
        };
      }
    }

    function at_supports() {
      var m = match(/^@supports *([^{]+)/);

      if (m) {
        return {
          type: "supports",
          supports: m[1].trim(),
          rules: rules()
        };
      }
    }

    function at_host() {
      var m = match(/^@host\s*/);

      if (m) {
        return {
          type: "host",
          rules: rules()
        };
      }
    }

    function at_media() {
      var m = match(/^@media *([^{]+)/);

      if (m) {
        return {
          type: "media",
          media: m[1].trim(),
          rules: rules()
        };
      }
    }

    function at_custom_m() {
      var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);

      if (m) {
        return {
          type: "custom-media",
          name: m[1].trim(),
          media: m[2].trim()
        };
      }
    }

    function at_document() {
      var m = match(/^@([-\w]+)?document *([^{]+)/);

      if (m) {
        return {
          type: "document",
          document: m[2].trim(),
          vendor: m[1] ? m[1].trim() : null,
          rules: rules()
        };
      }
    }

    function at_x() {
      var m = match(/^@(import|charset|namespace)\s*([^;]+);/);

      if (m) {
        return {
          type: m[1],
          name: m[2].trim()
        };
      }
    }

    function at_rule() {
      whitespace();

      if (css[0] === "@") {
        var ret = at_keyframes() || at_supports() || at_host() || at_media() || at_custom_m() || at_page() || at_document() || at_fontface() || at_x();

        if (ret && !settings.preserveStatic) {
          var hasVarFunc = false;

          if (ret.declarations) {
            hasVarFunc = ret.declarations.some(function (decl) {
              return /var\(/.test(decl.value);
            });
          } else {
            var arr = ret.keyframes || ret.rules || [];
            hasVarFunc = arr.some(function (obj) {
              return (obj.declarations || []).some(function (decl) {
                return /var\(/.test(decl.value);
              });
            });
          }

          return hasVarFunc ? ret : {};
        }

        return ret;
      }
    }

    function rule() {
      if (!settings.preserveStatic) {
        var balancedMatch$1 = balancedMatch("{", "}", css);

        if (balancedMatch$1) {
          var hasVarDecl = balancedMatch$1.pre.indexOf(":root") !== -1 && /--\S*\s*:/.test(balancedMatch$1.body);
          var hasVarFunc = /var\(/.test(balancedMatch$1.body);

          if (!hasVarDecl && !hasVarFunc) {
            css = css.slice(balancedMatch$1.end + 1);
            return {};
          }
        }
      }

      var sel = selector() || [];
      var decls = settings.preserveStatic ? declarations() : declarations().filter(function (decl) {
        var hasVarDecl = sel.some(function (s) {
          return s.indexOf(":root") !== -1;
        }) && /^--\S/.test(decl.property);
        var hasVarFunc = /var\(/.test(decl.value);
        return hasVarDecl || hasVarFunc;
      });

      if (!sel.length) {
        error("selector missing");
      }

      return {
        type: "rule",
        selectors: sel,
        declarations: decls
      };
    }

    function rules(core) {
      if (!core && !open()) {
        return error("missing '{'");
      }

      var node;
      var rules = comments();

      while (css.length && (core || css[0] !== "}") && (node = at_rule() || rule())) {
        if (node.type) {
          rules.push(node);
        }

        rules = rules.concat(comments());
      }

      if (!core && !close()) {
        return error("missing '}'");
      }

      return rules;
    }

    return {
      type: "stylesheet",
      stylesheet: {
        rules: rules(true),
        errors: errors
      }
    };
  }

  function parseVars(cssData) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = {
      store: {},
      onWarning: function onWarning() {}
    };

    var settings = _extends({}, defaults, options);

    if (typeof cssData === "string") {
      cssData = parseCss(cssData, settings);
    }

    cssData.stylesheet.rules.forEach(function (rule) {
      if (rule.type !== "rule") {
        return;
      }

      if (rule.selectors.length !== 1 || rule.selectors[0] !== ":root") {
        return;
      }

      rule.declarations.forEach(function (decl, i) {
        var prop = decl.property;
        var value = decl.value;

        if (prop && prop.indexOf("--") === 0) {
          settings.store[prop] = value;
        }
      });
    });
    return settings.store;
  }

  function stringifyCss(tree) {
    var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    var renderMethods = {
      charset: function charset(node) {
        return "@charset " + node.name + ";";
      },
      comment: function comment(node) {
        return node.comment.indexOf("__CSSVARSPONYFILL") === 0 ? "/*" + node.comment + "*/" : "";
      },
      "custom-media": function customMedia(node) {
        return "@custom-media " + node.name + " " + node.media + ";";
      },
      declaration: function declaration(node) {
        return node.property + ":" + node.value + ";";
      },
      document: function document(node) {
        return "@" + (node.vendor || "") + "document " + node.document + "{" + visit(node.rules) + "}";
      },
      "font-face": function fontFace(node) {
        return "@font-face" + "{" + visit(node.declarations) + "}";
      },
      host: function host(node) {
        return "@host" + "{" + visit(node.rules) + "}";
      },
      import: function _import(node) {
        return "@import " + node.name + ";";
      },
      keyframe: function keyframe(node) {
        return node.values.join(",") + "{" + visit(node.declarations) + "}";
      },
      keyframes: function keyframes(node) {
        return "@" + (node.vendor || "") + "keyframes " + node.name + "{" + visit(node.keyframes) + "}";
      },
      media: function media(node) {
        return "@media " + node.media + "{" + visit(node.rules) + "}";
      },
      namespace: function namespace(node) {
        return "@namespace " + node.name + ";";
      },
      page: function page(node) {
        return "@page " + (node.selectors.length ? node.selectors.join(", ") : "") + "{" + visit(node.declarations) + "}";
      },
      rule: function rule(node) {
        var decls = node.declarations;

        if (decls.length) {
          return node.selectors.join(",") + "{" + visit(decls) + "}";
        }
      },
      supports: function supports(node) {
        return "@supports " + node.supports + "{" + visit(node.rules) + "}";
      }
    };

    function visit(nodes) {
      var buf = "";

      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];

        if (cb) {
          cb(n);
        }

        var txt = renderMethods[n.type](n);

        if (txt) {
          buf += txt;

          if (txt.length && n.selectors) {
            buf += delim;
          }
        }
      }

      return buf;
    }

    return visit(tree.stylesheet.rules);
  }

  function walkCss(node, fn) {
    node.rules.forEach(function (rule) {
      if (rule.rules) {
        walkCss(rule, fn);
        return;
      }

      if (rule.keyframes) {
        rule.keyframes.forEach(function (keyframe) {
          if (keyframe.type === "keyframe") {
            fn(keyframe.declarations, rule);
          }
        });
        return;
      }

      if (!rule.declarations) {
        return;
      }

      fn(rule.declarations, node);
    });
  }

  var VAR_PROP_IDENTIFIER = "--";
  var VAR_FUNC_IDENTIFIER = "var";

  function transformCss(cssData) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaults = {
      preserveStatic: true,
      preserveVars: false,
      variables: {},
      onWarning: function onWarning() {}
    };

    var settings = _extends({}, defaults, options);

    if (typeof cssData === "string") {
      cssData = parseCss(cssData, settings);
    }

    walkCss(cssData.stylesheet, function (declarations, node) {
      for (var i = 0; i < declarations.length; i++) {
        var decl = declarations[i];
        var type = decl.type;
        var prop = decl.property;
        var value = decl.value;

        if (type !== "declaration") {
          continue;
        }

        if (!settings.preserveVars && prop && prop.indexOf(VAR_PROP_IDENTIFIER) === 0) {
          declarations.splice(i, 1);
          i--;
          continue;
        }

        if (value.indexOf(VAR_FUNC_IDENTIFIER + "(") !== -1) {
          var resolvedValue = resolveValue(value, settings);

          if (resolvedValue !== decl.value) {
            resolvedValue = fixNestedCalc(resolvedValue);

            if (!settings.preserveVars) {
              decl.value = resolvedValue;
            } else {
              declarations.splice(i, 0, {
                type: type,
                property: prop,
                value: resolvedValue
              });
              i++;
            }
          }
        }
      }
    });
    return stringifyCss(cssData);
  }

  function fixNestedCalc(value) {
    var reCalcVal = /calc\(([^)]+)\)/g;
    (value.match(reCalcVal) || []).forEach(function (match) {
      var newVal = "calc".concat(match.split("calc").join(""));
      value = value.replace(match, newVal);
    });
    return value;
  }

  function resolveValue(value) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var __recursiveFallback = arguments.length > 2 ? arguments[2] : undefined;

    if (value.indexOf("var(") === -1) {
      return value;
    }

    var valueData = balancedMatch("(", ")", value);

    function resolveFunc(value) {
      var name = value.split(",")[0].replace(/[\s\n\t]/g, "");
      var fallback = (value.match(/(?:\s*,\s*){1}(.*)?/) || [])[1];
      var match = settings.variables.hasOwnProperty(name) ? String(settings.variables[name]) : undefined;
      var replacement = match || (fallback ? String(fallback) : undefined);
      var unresolvedFallback = __recursiveFallback || value;

      if (!match) {
        settings.onWarning('variable "'.concat(name, '" is undefined'));
      }

      if (replacement && replacement !== "undefined" && replacement.length > 0) {
        return resolveValue(replacement, settings, unresolvedFallback);
      } else {
        return "var(".concat(unresolvedFallback, ")");
      }
    }

    if (!valueData) {
      if (value.indexOf("var(") !== -1) {
        settings.onWarning('missing closing ")" in the value "'.concat(value, '"'));
      }

      return value;
    } else if (valueData.pre.slice(-3) === "var") {
      var isEmptyVarFunc = valueData.body.trim().length === 0;

      if (isEmptyVarFunc) {
        settings.onWarning("var() must contain a non-whitespace string");
        return value;
      } else {
        return valueData.pre.slice(0, -3) + resolveFunc(valueData.body) + resolveValue(valueData.post, settings);
      }
    } else {
      return valueData.pre + "(".concat(resolveValue(valueData.body, settings), ")") + resolveValue(valueData.post, settings);
    }
  }

  var isBrowser = typeof window !== "undefined";
  var isNativeSupport = isBrowser && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)");
  var counters = {
    group: 0,
    job: 0
  };
  var defaults = {
    rootElement: isBrowser ? document : null,
    shadowDOM: false,
    include: "style,link[rel=stylesheet]",
    exclude: "",
    variables: {},
    onlyLegacy: true,
    preserveStatic: true,
    preserveVars: false,
    silent: false,
    updateDOM: true,
    updateURLs: true,
    watch: null,
    onBeforeSend: function onBeforeSend() {},
    onWarning: function onWarning() {},
    onError: function onError() {},
    onSuccess: function onSuccess() {},
    onComplete: function onComplete() {}
  };
  var regex = {
    cssComments: /\/\*[\s\S]+?\*\//g,
    cssKeyframes: /@(?:-\w*-)?keyframes/,
    cssMediaQueries: /@media[^{]+\{([\s\S]+?})\s*}/g,
    cssRootRules: /(?::root\s*{\s*[^}]*})/g,
    cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
    cssVarDecls: /(?:[\s;]*)(-{2}\w[\w-]*)(?:\s*:\s*)([^;]*);/g,
    cssVarFunc: /var\(\s*--[\w-]/,
    cssVars: /(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
  };
  var variableStore = {
    dom: {},
    job: {},
    user: {}
  };
  var cssVarsIsRunning = false;
  var cssVarsObserver = null;
  var cssVarsSrcNodeCount = 0;
  var debounceTimer = null;
  var isShadowDOMReady = false;
  /**
  * Fetches, parses, and transforms CSS custom properties from specified
  * <style> and <link> elements into static values, then appends a new <style>
  * element with static values to the DOM to provide CSS custom property
  * compatibility for legacy browsers. Also provides a single interface for
  * live updates of runtime values in both modern and legacy browsers.
  *
  * @preserve
  * @param {object}   [options] Options object
  * @param {object}   [options.rootElement=document] Root element to traverse for
  *                   <link> and <style> nodes
  * @param {boolean}  [options.shadowDOM=false] Determines if shadow DOM <link>
  *                   and <style> nodes will be processed.
  * @param {string}   [options.include="style,link[rel=stylesheet]"] CSS selector
  *                   matching <link re="stylesheet"> and <style> nodes to
  *                   process
  * @param {string}   [options.exclude] CSS selector matching <link
  *                   rel="stylehseet"> and <style> nodes to exclude from those
  *                   matches by options.include
  * @param {object}   [options.variables] A map of custom property name/value
  *                   pairs. Property names can omit or include the leading
  *                   double-hyphen (—), and values specified will override
  *                   previous values
  * @param {boolean}  [options.onlyLegacy=true] Determines if the ponyfill will
  *                   only generate legacy-compatible CSS in browsers that lack
  *                   native support (i.e., legacy browsers)
  * @param {boolean}  [options.preserveStatic=true] Determines if CSS
  *                   declarations that do not reference a custom property will
  *                   be preserved in the transformed CSS
  * @param {boolean}  [options.preserveVars=false] Determines if CSS custom
  *                   property declarations will be preserved in the transformed
  *                   CSS
  * @param {boolean}  [options.silent=false] Determines if warning and error
  *                   messages will be displayed on the console
  * @param {boolean}  [options.updateDOM=true] Determines if the ponyfill will
  *                   update the DOM after processing CSS custom properties
  * @param {boolean}  [options.updateURLs=true] Determines if the ponyfill will
  *                   convert relative url() paths to absolute urls
  * @param {boolean}  [options.watch=false] Determines if a MutationObserver will
  *                   be created that will execute the ponyfill when a <link> or
  *                   <style> DOM mutation is observed
  * @param {function} [options.onBeforeSend] Callback before XHR is sent. Passes
  *                   1) the XHR object, 2) source node reference, and 3) the
  *                   source URL as arguments
  * @param {function} [options.onWarning] Callback after each CSS parsing warning
  *                   has occurred. Passes 1) a warning message as an argument.
  * @param {function} [options.onError] Callback after a CSS parsing error has
  *                   occurred or an XHR request has failed. Passes 1) an error
  *                   message, and 2) source node reference, 3) xhr, and 4 url as
  *                   arguments.
  * @param {function} [options.onSuccess] Callback after CSS data has been
  *                   collected from each node and before CSS custom properties
  *                   have been transformed. Allows modifying the CSS data before
  *                   it is transformed by returning any string value (or false
  *                   to skip). Passes 1) CSS text, 2) source node reference, and
  *                   3) the source URL as arguments.
  * @param {function} [options.onComplete] Callback after all CSS has been
  *                   processed, legacy-compatible CSS has been generated, and
  *                   (optionally) the DOM has been updated. Passes 1) a CSS
  *                   string with CSS variable values resolved, 2) an array of
  *                   output <style> node references that have been appended to
  *                   the DOM, 3) an object containing all custom properies names
  *                   and values, and 4) the ponyfill execution time in
  *                   milliseconds.
  *
  * @example
  *
  *   cssVars({
  *     rootElement   : document,
  *     shadowDOM     : false,
  *     include       : 'style,link[rel="stylesheet"]',
  *     exclude       : '',
  *     variables     : {},
  *     onlyLegacy    : true,
  *     preserveStatic: true,
  *     preserveVars  : false,
  *     silent        : false,
  *     updateDOM     : true,
  *     updateURLs    : true,
  *     watch         : false,
  *     onBeforeSend(xhr, node, url) {},
  *     onWarning(message) {},
  *     onError(message, node, xhr, url) {},
  *     onSuccess(cssText, node, url) {},
  *     onComplete(cssText, styleNode, cssVariables, benchmark) {}
  *   });
  */

  function cssVars() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var msgPrefix = "cssVars(): ";

    var settings = _extends({}, defaults, options);

    function handleError(message, sourceNode, xhr, url) {
      if (!settings.silent && window.console) {
        console.error("".concat(msgPrefix).concat(message, "\n"), sourceNode);
      }

      settings.onError(message, sourceNode, xhr, url);
    }

    function handleWarning(message) {
      if (!settings.silent && window.console) {
        console.warn("".concat(msgPrefix).concat(message));
      }

      settings.onWarning(message);
    }

    if (!isBrowser) {
      return;
    }

    if (settings.watch) {
      settings.watch = defaults.watch;
      addMutationObserver(settings);
      cssVars(settings);
      return;
    } else if (settings.watch === false && cssVarsObserver) {
      cssVarsObserver.disconnect();
      cssVarsObserver = null;
    }

    if (!settings.__benchmark) {
      if (cssVarsIsRunning === settings.rootElement) {
        cssVarsDebounced(options);
        return;
      }

      settings.__benchmark = getTimeStamp();
      settings.exclude = [cssVarsObserver ? '[data-cssvars]:not([data-cssvars=""])' : '[data-cssvars="out"]', settings.exclude].filter(function (selector) {
        return selector;
      }).join(",");
      settings.variables = fixVarNames(settings.variables);

      if (!cssVarsObserver) {
        var outNodes = Array.apply(null, settings.rootElement.querySelectorAll('[data-cssvars="out"]'));
        outNodes.forEach(function (outNode) {
          var dataGroup = outNode.getAttribute("data-cssvars-group");
          var srcNode = dataGroup ? settings.rootElement.querySelector('[data-cssvars="src"][data-cssvars-group="'.concat(dataGroup, '"]')) : null;

          if (!srcNode) {
            outNode.parentNode.removeChild(outNode);
          }
        });

        if (cssVarsSrcNodeCount) {
          var srcNodes = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])');

          if (srcNodes.length < cssVarsSrcNodeCount) {
            cssVarsSrcNodeCount = srcNodes.length;
            variableStore.dom = {};
          }
        }
      }
    }

    if (document.readyState !== "loading") {
      var isShadowElm = settings.shadowDOM || settings.rootElement.shadowRoot || settings.rootElement.host;

      if (isNativeSupport && settings.onlyLegacy) {
        if (settings.updateDOM) {
          var targetElm = settings.rootElement.host || (settings.rootElement === document ? document.documentElement : settings.rootElement);
          Object.keys(settings.variables).forEach(function (key) {
            targetElm.style.setProperty(key, settings.variables[key]);
          });
        }
      } else if (isShadowElm && !isShadowDOMReady) {
        getCssData({
          rootElement: defaults.rootElement,
          include: defaults.include,
          exclude: settings.exclude,
          onSuccess: function onSuccess(cssText, node, url) {
            cssText = cssText.replace(regex.cssComments, "").replace(regex.cssMediaQueries, "");
            cssText = (cssText.match(regex.cssRootRules) || []).join("");
            return cssText || false;
          },
          onComplete: function onComplete(cssText, cssArray, nodeArray) {
            parseVars(cssText, {
              store: variableStore.dom,
              onWarning: handleWarning
            });
            isShadowDOMReady = true;
            cssVars(settings);
          }
        });
      } else {
        cssVarsIsRunning = settings.rootElement;
        getCssData({
          rootElement: settings.rootElement,
          include: settings.include,
          exclude: settings.exclude,
          onBeforeSend: settings.onBeforeSend,
          onError: function onError(xhr, node, url) {
            var responseUrl = xhr.responseURL || getFullUrl$1(url, location.href);
            var statusText = xhr.statusText ? "(".concat(xhr.statusText, ")") : "Unspecified Error" + (xhr.status === 0 ? " (possibly CORS related)" : "");
            var errorMsg = "CSS XHR Error: ".concat(responseUrl, " ").concat(xhr.status, " ").concat(statusText);
            handleError(errorMsg, node, xhr, responseUrl);
          },
          onSuccess: function onSuccess(cssText, node, url) {
            var returnVal = settings.onSuccess(cssText, node, url);
            cssText = returnVal !== undefined && Boolean(returnVal) === false ? "" : returnVal || cssText;

            if (settings.updateURLs) {
              cssText = fixRelativeCssUrls(cssText, url);
            }

            return cssText;
          },
          onComplete: function onComplete(cssText, cssArray) {
            var nodeArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var jobVars = {};
            var varStore = settings.updateDOM ? variableStore.dom : Object.keys(variableStore.job).length ? variableStore.job : variableStore.job = JSON.parse(JSON.stringify(variableStore.dom));
            var hasVarChange = false;
            nodeArray.forEach(function (node, i) {
              if (regex.cssVars.test(cssArray[i])) {
                try {
                  var cssTree = parseCss(cssArray[i], {
                    preserveStatic: settings.preserveStatic,
                    removeComments: true
                  });
                  parseVars(cssTree, {
                    store: jobVars,
                    onWarning: handleWarning
                  });
                  node.__cssVars = {
                    tree: cssTree
                  };
                } catch (err) {
                  handleError(err.message, node);
                }
              }
            });

            if (settings.updateDOM) {
              _extends(variableStore.user, settings.variables);
            }

            _extends(jobVars, settings.variables);

            hasVarChange = Boolean((document.querySelector("[data-cssvars]") || Object.keys(variableStore.dom).length) && Object.keys(jobVars).some(function (name) {
              return jobVars[name] !== varStore[name];
            }));

            _extends(varStore, variableStore.user, jobVars);

            if (hasVarChange) {
              resetCssNodes(settings.rootElement);
              cssVars(settings);
            } else {
              var outCssArray = [];
              var outNodeArray = [];
              var hasKeyframesWithVars = false;
              variableStore.job = {};

              if (settings.updateDOM) {
                counters.job++;
              }

              nodeArray.forEach(function (node) {
                var isSkip = !node.__cssVars;

                if (node.__cssVars) {
                  try {
                    transformCss(node.__cssVars.tree, _extends({}, settings, {
                      variables: varStore,
                      onWarning: handleWarning
                    }));
                    var outCss = stringifyCss(node.__cssVars.tree);

                    if (settings.updateDOM) {
                      if (!node.getAttribute("data-cssvars")) {
                        node.setAttribute("data-cssvars", "src");
                      }

                      if (outCss.length) {
                        var dataGroup = node.getAttribute("data-cssvars-group") || ++counters.group;
                        var outCssNoSpaces = outCss.replace(/\s/g, "");
                        var outNode = settings.rootElement.querySelector('[data-cssvars="out"][data-cssvars-group="'.concat(dataGroup, '"]')) || document.createElement("style");
                        hasKeyframesWithVars = hasKeyframesWithVars || regex.cssKeyframes.test(outCss);

                        if (!outNode.hasAttribute("data-cssvars")) {
                          outNode.setAttribute("data-cssvars", "out");
                        }

                        if (outCssNoSpaces === node.textContent.replace(/\s/g, "")) {
                          isSkip = true;

                          if (outNode && outNode.parentNode) {
                            node.removeAttribute("data-cssvars-group");
                            outNode.parentNode.removeChild(outNode);
                          }
                        } else if (outCssNoSpaces !== outNode.textContent.replace(/\s/g, "")) {
                          [node, outNode].forEach(function (n) {
                            n.setAttribute("data-cssvars-job", counters.job);
                            n.setAttribute("data-cssvars-group", dataGroup);
                          });
                          outNode.textContent = outCss;
                          outCssArray.push(outCss);
                          outNodeArray.push(outNode);

                          if (!outNode.parentNode) {
                            node.parentNode.insertBefore(outNode, node.nextSibling);
                          }
                        }
                      }
                    } else {
                      if (node.textContent.replace(/\s/g, "") !== outCss) {
                        outCssArray.push(outCss);
                      }
                    }
                  } catch (err) {
                    handleError(err.message, node);
                  }
                }

                if (isSkip) {
                  node.setAttribute("data-cssvars", "skip");
                }

                if (!node.hasAttribute("data-cssvars-job")) {
                  node.setAttribute("data-cssvars-job", counters.job);
                }
              });
              cssVarsSrcNodeCount = settings.rootElement.querySelectorAll('[data-cssvars]:not([data-cssvars="out"])').length;

              if (settings.shadowDOM) {
                var elms = [settings.rootElement].concat(_toConsumableArray(settings.rootElement.querySelectorAll("*")));

                for (var i = 0, elm; elm = elms[i]; ++i) {
                  if (elm.shadowRoot && elm.shadowRoot.querySelector("style")) {
                    var shadowSettings = _extends({}, settings, {
                      rootElement: elm.shadowRoot,
                      variables: variableStore.dom
                    });

                    cssVars(shadowSettings);
                  }
                }
              }

              if (settings.updateDOM && hasKeyframesWithVars) {
                fixKeyframes(settings.rootElement);
              }

              cssVarsIsRunning = false;
              settings.onComplete(outCssArray.join(""), outNodeArray, JSON.parse(JSON.stringify(varStore)), getTimeStamp() - settings.__benchmark);
            }
          }
        });
      }
    } else {
      document.addEventListener("DOMContentLoaded", function init(evt) {
        cssVars(options);
        document.removeEventListener("DOMContentLoaded", init);
      });
    }
  }

  cssVars.reset = function () {
    cssVarsIsRunning = false;

    if (cssVarsObserver) {
      cssVarsObserver.disconnect();
      cssVarsObserver = null;
    }

    cssVarsSrcNodeCount = 0;
    debounceTimer = null;
    isShadowDOMReady = false;

    for (var prop in variableStore) {
      variableStore[prop] = {};
    }
  };

  function addMutationObserver(settings) {
    function isLink(node) {
      var isStylesheet = node.tagName === "LINK" && (node.getAttribute("rel") || "").indexOf("stylesheet") !== -1;
      return isStylesheet && !node.disabled;
    }

    function isStyle(node) {
      return node.tagName === "STYLE" && !node.disabled;
    }

    function isValidAddMutation(mutationNodes) {
      return Array.apply(null, mutationNodes).some(function (node) {
        var isElm = node.nodeType === 1;
        var hasAttr = isElm && node.hasAttribute("data-cssvars");
        var isStyleWithVars = isStyle(node) && regex.cssVars.test(node.textContent);
        var isValid = !hasAttr && (isLink(node) || isStyleWithVars);
        return isValid;
      });
    }

    function isValidRemoveMutation(mutationNodes) {
      return Array.apply(null, mutationNodes).some(function (node) {
        var isElm = node.nodeType === 1;
        var isOutNode = isElm && node.getAttribute("data-cssvars") === "out";
        var isSrcNode = isElm && node.getAttribute("data-cssvars") === "src";
        var isValid = isSrcNode;

        if (isSrcNode || isOutNode) {
          var dataGroup = node.getAttribute("data-cssvars-group");
          var orphanNode = settings.rootElement.querySelector('[data-cssvars-group="'.concat(dataGroup, '"]'));

          if (isSrcNode) {
            resetCssNodes(settings.rootElement);
            variableStore.dom = {};
          }

          if (orphanNode) {
            orphanNode.parentNode.removeChild(orphanNode);
          }
        }

        return isValid;
      });
    }

    if (!window.MutationObserver) {
      return;
    }

    if (cssVarsObserver) {
      cssVarsObserver.disconnect();
      cssVarsObserver = null;
    }

    cssVarsObserver = new MutationObserver(function (mutations) {
      var hasValidMutation = mutations.some(function (mutation) {
        var isValid = false;

        if (mutation.type === "attributes") {
          isValid = isLink(mutation.target);
        } else if (mutation.type === "childList") {
          isValid = isValidAddMutation(mutation.addedNodes) || isValidRemoveMutation(mutation.removedNodes);
        }

        return isValid;
      });

      if (hasValidMutation) {
        cssVars(settings);
      }
    });
    cssVarsObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["disabled", "href"],
      childList: true,
      subtree: true
    });
  }

  function cssVarsDebounced(settings) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      settings.__benchmark = null;
      cssVars(settings);
    }, delay);
  }

  function fixKeyframes(rootElement) {
    var animationNameProp = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(function (prop) {
      return getComputedStyle(document.body)[prop];
    })[0];

    if (animationNameProp) {
      var allNodes = rootElement.getElementsByTagName("*");
      var keyframeNodes = [];
      var nameMarker = "__CSSVARSPONYFILL-KEYFRAMES__";

      for (var i = 0, len = allNodes.length; i < len; i++) {
        var node = allNodes[i];
        var animationName = getComputedStyle(node)[animationNameProp];

        if (animationName !== "none") {
          node.style[animationNameProp] += nameMarker;
          keyframeNodes.push(node);
        }
      }

      void document.body.offsetHeight;

      for (var _i = 0, _len = keyframeNodes.length; _i < _len; _i++) {
        var nodeStyle = keyframeNodes[_i].style;
        nodeStyle[animationNameProp] = nodeStyle[animationNameProp].replace(nameMarker, "");
      }
    }
  }

  function fixRelativeCssUrls(cssText, baseUrl) {
    var cssUrls = cssText.replace(regex.cssComments, "").match(regex.cssUrls) || [];
    cssUrls.forEach(function (cssUrl) {
      var oldUrl = cssUrl.replace(regex.cssUrls, "$1");
      var newUrl = getFullUrl$1(oldUrl, baseUrl);
      cssText = cssText.replace(cssUrl, cssUrl.replace(oldUrl, newUrl));
    });
    return cssText;
  }

  function fixVarNames() {
    var varObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var reLeadingHyphens = /^-{2}/;
    return Object.keys(varObj).reduce(function (obj, value) {
      var key = reLeadingHyphens.test(value) ? value : "--".concat(value.replace(/^-+/, ""));
      obj[key] = varObj[value];
      return obj;
    }, {});
  }

  function getFullUrl$1(url) {
    var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : location.href;
    var d = document.implementation.createHTMLDocument("");
    var b = d.createElement("base");
    var a = d.createElement("a");
    d.head.appendChild(b);
    d.body.appendChild(a);
    b.href = base;
    a.href = url;
    return a.href;
  }

  function getTimeStamp() {
    return isBrowser && (window.performance || {}).now ? window.performance.now() : new Date().getTime();
  }

  function resetCssNodes(rootElement) {
    var resetNodes = Array.apply(null, rootElement.querySelectorAll('[data-cssvars="skip"],[data-cssvars="src"]'));
    resetNodes.forEach(function (node) {
      return node.setAttribute("data-cssvars", "");
    });
  }

  return cssVars;
});

},{}],309:[function(require,module,exports){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],310:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@babel/polyfill");

var _core = _interopRequireDefault(require("@barba/core"));

require("css-vars-ponyfill");

var _anchors = _interopRequireDefault(require("./shared/anchors"));

var _appears = _interopRequireDefault(require("./shared/appears"));

var _dom = _interopRequireDefault(require("./shared/dom"));

var _fancy = _interopRequireDefault(require("./shared/fancy"));

var _fancy2 = _interopRequireDefault(require("./shared/fancy.view-all"));

var _navigation = _interopRequireDefault(require("./shared/navigation"));

var _rect = _interopRequireDefault(require("./shared/rect"));

var _sliders = _interopRequireDefault(require("./shared/sliders"));

var _utils = _interopRequireDefault(require("./shared/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var menuStyle = 1;
var scrollSpeed = 8; //settings

var activateIntro = false;
var barbaDebug = true;

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var body = document.querySelector('body');
      var page = document.querySelector('.page');
      var header = document.querySelector('.header');
      var smooth = 'cubic-bezier(0, 0.97, 0.43, 1)';
      var anchorPanel = document.querySelector('.anchors');

      _dom.default.detect(body);

      var mouse = {
        x: 0,
        y: 0
      };
      this.body = body;
      this.page = page;
      this.header = header;
      this.smooth = smooth;
      this.anchorPanel = anchorPanel;
      this.appears = [];
      this.parallaxes = [];
      this.onResize();
      this.addListeners();
      this.transitions();
      Element.prototype.scrollIntoView_ = Element.prototype.scrollIntoView;

      Element.prototype.scrollIntoView = function () {
        if (_dom.default.fastscroll) {
          return this.scrollIntoView_.apply(this, arguments);
        } else {
          var rect = _rect.default.fromNode(this);

          var scrollTop = _dom.default.scrollTop();

          window.scrollTo(0, Math.max(0, scrollTop + rect.top - 120));
        }
      };

      _navigation.default.init();

      body.classList.add('ready');
    }
  }, {
    key: "transitions",
    value: function transitions() {
      var transitionLayer = document.querySelector('.transition');
      var textFront = document.querySelector('.transition__text .box--front .text');
      var textBack = document.querySelector('.transition__text .box--back .text');
      var boxBack = document.querySelector('.transition__text .box--back');
      var line = document.querySelector('.transition__line');

      _core.default.init({
        timeout: 5000,
        debug: barbaDebug,
        transitions: [{
          appear: function appear(data) {
            var done = this.async();
            var transitionLayer = document.querySelector('.transition');
            var logoWrapper = document.querySelector('.transition .logo__wrapper');

            if (activateIntro) {
              var tl = new TimelineMax();
              var speed = 0.5;
              var transform = -10;
              tl.timeScale(0.9);
              var logo = [{
                name: 'charM',
                selector: document.querySelector('.logo__char-m'),
                move: transform,
                width: null
              }, {
                name: 'charU',
                selector: document.querySelector('.logo__char-u'),
                move: transform,
                width: null
              }, {
                name: 'squarePrimary',
                selector: document.querySelector('.logo__square-primary'),
                width: document.querySelector('.logo__square-primary').width.baseVal.value
              }, {
                name: 'charT',
                selector: document.querySelector('.logo__char-t'),
                move: transform,
                width: null
              }, {
                name: 'charI',
                selector: document.querySelector('.logo__char-i'),
                move: transform,
                width: null
              }, {
                name: 'squareSecondary',
                selector: document.querySelector('.logo__square-secondary'),
                move: transform,
                width: document.querySelector('.logo__square-secondary').width.baseVal.value
              }, {
                name: 'charN',
                selector: document.querySelector('.logo__char-n'),
                move: transform,
                width: null
              }, {
                name: 'groupA',
                selector: document.querySelector('.logo__group-a'),
                move: transform,
                width: null
              }];
              tl.set(transitionLayer, {
                height: window.innerHeight + 2
              });
              logo.forEach(function (item) {
                if (item.name === 'squarePrimary' || item.name === 'squareSecondary') {
                  tl.set(item.selector, {
                    width: 0,
                    transform: 'translateX(' + item.move + 'px)',
                    opacity: 1
                  });
                } else {
                  tl.set(item.selector, {
                    transform: 'translateX(' + item.move + 'px)',
                    opacity: 0
                  });
                }
              });
              logo.forEach(function (item, index) {
                var delay = '-=0.4';

                if (item.name === 'squarePrimary' || item.name === 'squareSecondary') {
                  tl.to(item.selector, speed, {
                    width: item.width,
                    transform: 'translateX(0px)',
                    opacity: 1,
                    ease: Expo.easeInOut
                  }, delay);
                } else {
                  tl.to(item.selector, speed, {
                    transform: 'translateX(0px)',
                    opacity: 1,
                    ease: Expo.easeInOut,
                    onComplete: function onComplete() {
                      if (index === logo.length - 1) {
                        console.log('pageinit');
                        app.onPageInit();
                      }
                    }
                  }, delay);
                }
              });
              tl.to(logoWrapper, 0.8, {
                height: 0,
                ease: Expo.easeInOut
              }, '+=0.5');
              tl.to(transitionLayer, 1, {
                height: 2,
                top: app.header.clientHeight - 2,
                bottom: 'auto',
                ease: Expo.easeInOut,
                onComplete: function onComplete() {
                  transitionLayer.style.height = 0;
                  transitionLayer.classList.add('transition--no-top-line');
                  done();
                }
              }, '-=0.6');
            } else {
              app.onPageInit();
              TweenMax.set(transitionLayer, {
                height: 0,
                top: 0,
                bottom: 'auto'
              });
              transitionLayer.classList.add('transition--no-top-line');
              done();
            }
          },
          /////////////////////////////////////////////
          leave: function leave(data) {
            var done = this.async();
            textFront.innerHTML = '';
            textBack.innerHTML = '';
            textFront.innerHTML = data.trigger.getAttribute('data-transition');
            textBack.innerHTML = data.trigger.getAttribute('data-transition');

            _navigation.default.closeNav();

            _navigation.default.closeSearch();

            TweenMax.set(transitionLayer, {
              backgroundColor: '#CFCFCF',
              bottom: 0,
              opacity: 1,
              top: 'auto',
              height: 0
            });
            TweenMax.set(textFront, {
              transform: 'translateY(100%)',
              opacity: 1
            });
            TweenMax.set(textBack, {
              transform: 'translateY(0)'
            });
            TweenMax.set(boxBack, {
              width: 0
            });
            TweenMax.set(line, {
              width: 0
            });
            TweenMax.to(data.current.container, 1, {
              transform: 'translateY(-60px)',
              ease: Expo.easeInOut
            }).delay(0.3);
            TweenMax.to(transitionLayer, 1, {
              height: window.innerHeight,
              ease: Expo.easeInOut
            }).delay(0.3);
            TweenMax.to(textFront, 1, {
              transform: 'translateY(0)',
              ease: Expo.easeInOut
            }).delay(0.4);
            TweenMax.to(line, 1, {
              width: '100%',
              ease: Expo.easeInOut
            }).delay(1.2);
            TweenMax.to(boxBack, 1, {
              width: '100%',
              ease: Expo.easeInOut,
              onComplete: function onComplete(e) {
                done();
              }
            }).delay(1.2);
          },
          afterLeave: function afterLeave(data) {
            var done = this.async();
            app.destroyAll(data.current.container);
            done();
          },
          enter: function enter(data) {
            var done = this.async();
            app.onPageInit();
            window.scrollTo(0, 0);
            TweenMax.to(textBack, 1, {
              transform: 'translateY(-100%)',
              ease: Expo.easeInOut
            }).delay(0.1);
            TweenMax.to(textFront, 1, {
              transform: 'translateY(-100%)',
              ease: Expo.easeInOut
            }).delay(0.1);
            TweenMax.to(transitionLayer, 1, {
              height: 0,
              top: 0,
              bottom: 'auto',
              ease: Expo.easeInOut,
              onComplete: function onComplete(e) {
                done();
              }
            }).delay(0.3);
          }
        }]
      });
    }
  }, {
    key: "onPageInit",
    value: function onPageInit() {
      var _this = this;

      this.parallaxes = [].slice.call(document.querySelectorAll('[data-parallax]'));

      _sliders.default.init();

      _anchors.default.init(document.querySelector('.anchors__wrapper'), 200);

      _fancy.default.init();

      _fancy2.default.init();

      setTimeout(function (x) {
        _this.appears = _appears.default.init();
        Splitting();
      }, 600);
    }
  }, {
    key: "destroyAll",
    value: function destroyAll(container) {
      _anchors.default.destroyAll();

      _sliders.default.destroyAll();

      _fancy.default.destroyAll();

      _fancy2.default.destroyAll();

      container.remove();
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this2 = this;

      window.addEventListener('resize', function () {
        _this2.onResize();
      });
      window.addEventListener('scroll', _utils.default.throttle(function () {
        _this2.onScroll();
      }, 1000 / 25));
      window.addEventListener('wheel', function (e) {
        _this2.onWheel(e);
      });
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(e) {}
  }, {
    key: "onResize",
    value: function onResize() {
      this.windowRect = new _rect.default({
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      });

      _navigation.default.closeNav();

      _navigation.default.closeSearch();
    }
  }, {
    key: "onScroll",
    value: function onScroll(e) {
      var scrollTop = _dom.default.scrollTop();

      _navigation.default.closeNav();

      _navigation.default.closeSearch(); // fastscroll mobile


      if (_dom.default.fastscroll) {
        var newTop = Math.round(scrollTop * 10) / 5;

        if (this.page.previousTop !== newTop) {
          this.page.previousTop = newTop;
          _dom.default.scrolling = true;

          if (newTop > this.page.previousTop) {
            this.body.classList.add('scroll-up');
            this.body.classList.remove('scroll-down');
          } else {
            this.body.classList.remove('scroll-up');
            this.body.classList.add('scroll-down');
          }
        } else {
          _dom.default.scrolling = false;
        }
      } //header animation


      if (scrollTop > 300 && !this.body.classList.contains('nav-mobile-open')) {
        this.header.style.top = -this.header.clientHeight + 'px';
        this.header.style.transition = 'top .15s linear';

        if (this.anchorPanel) {
          this.anchorPanel.style.top = -this.anchorPanel.clientHeight + 'px';
          this.anchorPanel.style.transition = 'top .15s linear';
        }

        if (this.body.classList.contains('scroll-down')) {
          this.header.style.top = 0;

          if (this.anchorPanel) {
            this.anchorPanel.style.top = -this.anchorPanel.clientHeight + 'px';
          }
        } else {
          this.header.style.top = -this.header.clientHeight + 'px';

          if (this.anchorPanel) {
            this.anchorPanel.style.top = 0;
          }
        }
      }
    }
  }, {
    key: "onWheel",
    value: function onWheel(e) {
      if (e.deltaY > 0) {
        this.body.classList.add('scroll-up');
        this.body.classList.remove('scroll-down');
      } else {
        this.body.classList.remove('scroll-up');
        this.body.classList.add('scroll-down');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // smoothscroll desktop
      // if (!Dom.overscroll && !Dom.touch) {
      if (!_dom.default.fastscroll) {
        if (this.body.offsetHeight !== this.page.offsetHeight) {
          this.body.setAttribute('style', "height: ".concat(this.page.offsetHeight, "px;"));
          /*
          TweenMax.set(this.body, {
          	height: this.page.offsetHeight,
          });
          */
        }

        var scrollTop = _dom.default.scrollTop();

        var newTop = this.page.previousTop || 0;
        newTop += (scrollTop - newTop) / scrollSpeed;

        if (Math.abs(scrollTop - newTop) < 0.15) {
          newTop = scrollTop;
        }

        if (newTop !== undefined && !Number.isNaN(newTop) && this.page.previousTop !== newTop) {
          this.page.previousTop = newTop; // this.page.setAttribute('style', `top: ${-newTop}px;`);

          this.page.setAttribute('style', "transform: translateY(".concat(-newTop, "px);"));
          /*
          TweenMax.set(this.page, {
          	y: -newTop,
          });
          */

          _dom.default.scrolling = true;
        } else {
          _dom.default.scrolling = false;
        }
      } else if (this.body.hasAttribute('style')) {
        this.body.removeAttribute('style');
        this.page.removeAttribute('style');
      } //parallax


      this.parallaxes.forEach(function (node, i) {
        var fullHeight = node.parentNode.classList.contains('picture--full-height');
        var parallax = node.parallax || (node.parallax = parseInt(node.getAttribute('data-parallax')) || 5) * 2;
        var direction = i % 2 === 0 ? 1 : -1;
        var currentY = node.currentY || 0;

        var rect = _rect.default.fromNode(node);

        rect = new _rect.default({
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        });
        var intersection = rect.intersection(_this3.windowRect);
        /*
        if (fullHeight) {
        	console.log(intersection);
        }
        */

        if (intersection.y > 0) {
          var y = intersection.center.y; // Math.min(1, Math.max(-1, intersection.center.y));

          var s = (100 + parallax * 2) / 100;
          currentY = ((fullHeight ? 0 : -50) + y * parallax * direction).toFixed(3);

          if (node.currentY !== currentY) {
            node.currentY = currentY;

            if (fullHeight) {
              node.setAttribute('style', "height: ".concat(s * 100, "%; top: 0; left: 0; transform: translateX(0) translateY(").concat(currentY, "%);"));
            } else {
              node.setAttribute('style', "height: ".concat(s * 100, "%; top: 50%; left: 50%; transform: translateX(-50%) translateY(").concat(currentY, "%);"));
            }
          }
        }
      }); // appears

      this.appears.forEach(function (node, i) {
        var rect = _rect.default.fromNode(node);

        var intersection = rect.intersection(_this3.windowRect);

        if (intersection.y > 0.0) {
          if (!node.to) {
            node.to = setTimeout(function () {
              node.classList.add('appeared');
            }, 150 * node.appearingIndex);
          }
        } else {
          if (node.classList.contains('appeared')) {
            node.to = null;
            node.classList.remove('appeared');
          }
        }
      });
    }
  }, {
    key: "loop",
    value: function loop() {
      var _this4 = this;

      this.render();

      if (this.playing) {
        window.requestAnimationFrame(function () {
          _this4.loop();
        });
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.playing = true;
      this.loop();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.playing = false;
    }
  }]);

  return App;
}();

exports.default = App;
var app = new App();

window.onload = function () {
  app.init();
  app.play();
};

},{"./shared/anchors":311,"./shared/appears":312,"./shared/dom":313,"./shared/fancy":314,"./shared/fancy.view-all":316,"./shared/navigation":317,"./shared/rect":318,"./shared/sliders":319,"./shared/utils":320,"@babel/polyfill":1,"@barba/core":3,"css-vars-ponyfill":308}],311:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */
var body = document.querySelector('body');
var header = document.querySelector('header');

var Anchors =
/*#__PURE__*/
function () {
  function Anchors(node, wrapper, gutter, index) {
    _classCallCheck(this, Anchors);

    var list = document.querySelector('ul.anchor-nav');
    var navItem = document.createElement('li');
    var anchor = document.createElement('a');
    this.id = index;
    this.node = node;
    this.wrapper = wrapper;
    this.gutter = window.innerWidth > 768 ? gutter : gutter / 2;
    this.name = this.getName();
    this.offset = this.getOffset();
    navItem.className = 'anchor-' + this.name.replace(/[^\w\s]/g, '').toLowerCase();
    list.appendChild(navItem);
    anchor.textContent = this.name;
    anchor.className = 'scroll-to-' + this.id;
    anchor.setAttribute('href', '#');
    navItem.appendChild(anchor);
    this.anchor = anchor;
    this.addListeners();
  }

  _createClass(Anchors, [{
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      var click = function click(e) {
        window.scrollTo(0, _this.offset + _this.gutter);
        e.preventDefault();
      };

      this.click = click;
      this.anchor.addEventListener('click', this.click);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.anchor.removeEventListener('click', this.click);
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.node.getAttribute('data-anchor');
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      return this.node.getBoundingClientRect().top;
    }
  }], [{
    key: "init",
    value: function init(wrapper, gutter) {
      if (Anchors.items > 0) {
        Anchors.destroyAll();
      }

      if (wrapper) {
        var list = document.createElement('ul');
        Anchors.gutter = gutter;
        list.className = 'anchor-nav';
        wrapper.appendChild(list);
        Anchors.items = _toConsumableArray(document.querySelectorAll('[data-anchor]')).map(function (element, index) {
          return new Anchors(element, wrapper, gutter, index);
        });
        console.log('Anchors: ', Anchors.items);
        window.addEventListener('scroll', Anchors.onScroll);
      }
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var anchor = Anchors.items.find(function (anchor, i, anchors) {
        var top = anchor.node.getBoundingClientRect().top;
        var bottom = i < anchors.length - 1 ? anchors[i + 1].node.getBoundingClientRect().top : Number.POSITIVE_INFINITY;
        anchors.forEach(function (elem, i) {
          elem.anchor.classList.remove('active');
        });

        if (top < Anchors.gutter && bottom > Anchors.gutter) {
          anchors[i].anchor.classList.add('active');
          return anchor;
        }
      });
    }
  }, {
    key: "destroyAll",
    value: function destroyAll() {
      Anchors.items.forEach(function (anchor) {
        anchor.destroy();
      });
      document.querySelector('ul.anchor-nav').remove();
    }
  }]);

  return Anchors;
}();

exports.default = Anchors;

},{}],312:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */
var Appears =
/*#__PURE__*/
function () {
  function Appears() {
    _classCallCheck(this, Appears);
  }

  _createClass(Appears, null, [{
    key: "init",
    value: function init() {
      var appears = [].slice.call(document.querySelectorAll('[data-appear]'));

      if (appears > 0) {
        appears.forEach(function (node) {
          var section = node.parentNode;
          var p = node;

          while (p) {
            p = p.parentNode;

            if (p && p.classList && p.classList.contains('section')) {
              section = p;
              p = null;
            }
          }

          node.appearingIndex = [].slice.call(section.querySelectorAll('[data-appear]')).indexOf(node);
        });
      }

      return appears;
    }
  }]);

  return Appears;
}();

exports.default = Appears;

},{}],313:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dom =
/*#__PURE__*/
function () {
  function Dom() {
    _classCallCheck(this, Dom);
  }

  _createClass(Dom, null, [{
    key: "detect",
    value: function detect(node) {
      var userAgent = navigator.userAgent.toLowerCase();
      var explorer = userAgent.indexOf('msie') > -1;
      var firefox = userAgent.indexOf('firefox') > -1;
      var opera = userAgent.toLowerCase().indexOf('op') > -1;
      var chrome = userAgent.indexOf('chrome') > -1;
      var safari = userAgent.indexOf('safari') > -1;

      if (chrome && safari) {
        safari = false;
      }

      if (chrome && opera) {
        chrome = false;
      }

      var android = userAgent.match(/android/i);
      var blackberry = userAgent.match(/blackberry/i);
      var ios = userAgent.match(/iphone|ipad|ipod/i);
      var operamini = userAgent.match(/opera mini/i);
      var iemobile = userAgent.match(/iemobile/i) || navigator.userAgent.match(/wpdesktop/i);
      var mobile = android || blackberry || ios || operamini || iemobile;
      var overscroll = navigator.platform === 'MacIntel' && typeof navigator.getBattery === 'function';
      var classList = {
        chrome: chrome,
        explorer: explorer,
        firefox: firefox,
        safari: safari,
        opera: opera,
        android: android,
        blackberry: blackberry,
        ios: ios,
        operamini: operamini,
        iemobile: iemobile,
        mobile: mobile,
        overscroll: overscroll
      };
      Object.assign(Dom, classList);
      Object.keys(classList).forEach(function (x) {
        if (classList[x]) {
          node.classList.add(x);
        }
      });

      var onTouchStart = function onTouchStart() {
        document.removeEventListener('touchstart', onTouchStart);
        Dom.touch = true;
        node.classList.add('touch');
      };

      document.addEventListener('touchstart', onTouchStart);

      var onMouseDown = function onMouseDown() {
        document.removeEventListener('mousedown', onMouseDown);
        Dom.mouse = true;
        node.classList.add('mouse');
      };

      document.addEventListener('mousedown', onMouseDown);

      var onScroll = function onScroll() {
        var now = _utils.default.now();

        if (Dom.lastScrollTime) {
          var diff = now - Dom.lastScrollTime;

          if (diff < 5) {
            document.removeEventListener('scroll', onScroll);
            Dom.fastscroll = true;
            node.classList.add('fastscroll');
            console.log('scroll', diff);
          }
        }

        Dom.lastScrollTime = now;
      };

      document.addEventListener('scroll', onScroll);
    }
  }, {
    key: "fragmentFirstElement",
    value: function fragmentFirstElement(fragment) {
      return Array.prototype.slice.call(fragment.children).find(function (x) {
        return x.nodeType === Node.ELEMENT_NODE;
      });
    }
  }, {
    key: "fragmentFromHTML",
    value: function fragmentFromHTML(html) {
      return document.createRange().createContextualFragment(html);
    }
  }, {
    key: "scrollTop",
    value: function scrollTop() {
      return document && document.defaultView ? document.defaultView.pageYOffset : 0;
    }
  }]);

  return Dom;
}();

exports.default = Dom;

},{"./utils":320}],314:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fancy = _interopRequireDefault(require("./fancy.transition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var clickClose;
var clickSwitch;
var swiperInstance;
var body = document.querySelector('body');
var closeIcon = "<svg><use xlink:href=\"#svg-close\"></use></svg>";
var prevIcon = "<svg><use xlink:href=\"#svg-prev\"></use></svg>";
var nextIcon = "<svg><use xlink:href=\"#svg-next\"></use></svg>";
var fullGalleryIcon = "<svg><use xlink:href=\"#svg-grid3x3\"></use></svg>";
var slideAnimationSpeed = 1000;

var Fancy =
/*#__PURE__*/
function () {
  function Fancy(node, id) {
    _classCallCheck(this, Fancy);

    this.node = node;
    this.id = id;
    this.smallImageUrl = node.getAttribute('src');
    this.bigImageUrl = node.getAttribute('data-fancy-img');
    this.caption = node.getAttribute('data-fancy-caption');
    this.addListener();
  }

  _createClass(Fancy, [{
    key: "addListener",
    value: function addListener() {
      var _this = this;

      var click = function click(e) {
        _this.openDetailGallery();

        e.preventDefault();
      };

      this.click = click;
      this.node.addEventListener('click', this.click);
    }
  }, {
    key: "openDetailGallery",
    value: function openDetailGallery() {
      Fancy.initDetailGallery(this.id);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.node.removeEventListener('click', this.click);
    } //INIT

  }], [{
    key: "init",
    value: function init() {
      Fancy.items = _toConsumableArray(document.querySelectorAll('[data-fancy-img]')).map(function (element, id) {
        return new Fancy(element, id);
      });
      console.log('Fancy: ', Fancy.items);
    } //DESTROY ALL NODES AND CREATED CONTAINER ELEMENTS

  }, {
    key: "destroyAll",
    value: function destroyAll() {
      Fancy.items.forEach(function (node) {
        node.destroy();
      });

      if (swiperInstance) {
        swiperInstance.destroy();
      }

      if (document.querySelector('.detail-gallery')) {
        document.querySelector('.detail-gallery').remove();
      }

      if (document.querySelector('.full-gallery')) {
        document.querySelector('.full-gallery').remove();
      }

      if (document.querySelector('.detail-gallery__close')) {
        document.querySelector('.detail-gallery__close').removeEventListener('click', clickClose);
      }

      if (document.querySelector('.detail-gallery__cta')) {
        document.querySelector('.detail-gallery__cta').removeEventListener('click', clickSwitch);
      }
    } //CREATE MARKUP FOR DETAIL GALLERY AND ADD CLOSE LISTENER

  }, {
    key: "initDetailGallery",
    value: function initDetailGallery(id) {
      var detailGallery = document.createElement('div');
      var detailGalleryClose = document.createElement('div');
      var detailGalleryBg = document.createElement('div');
      var detailGalleryWrapper = document.createElement('div');
      var detailGalleryFooter = document.createElement('div');
      detailGallery.classList.add('detail-gallery');
      detailGalleryClose.classList.add('detail-gallery__close');
      detailGalleryBg.classList.add('detail-gallery__bg');
      detailGalleryWrapper.classList.add('detail-gallery__wrapper');
      detailGalleryFooter.classList.add('detail-gallery__footer');
      detailGalleryClose.innerHTML = closeIcon;

      clickClose = function clickClose(e) {
        Fancy.close(e, 'detailGallery', false, detailGalleryBg, detailGalleryClose, detailGalleryWrapper, detailGalleryFooter, detailGallery);
      };

      detailGalleryClose.addEventListener('click', clickClose);
      document.body.appendChild(detailGallery);
      detailGallery.appendChild(detailGalleryClose);
      detailGallery.appendChild(detailGalleryBg);
      detailGallery.appendChild(detailGalleryWrapper);
      detailGallery.appendChild(detailGalleryFooter);
      detailGalleryFooter.innerHTML = "\n            <div class=\"detail-gallery__cta\">".concat(fullGalleryIcon, "</div>\n            <div class=\"detail-gallery__caption\"><span></span></div>\n            <div class=\"detail-gallery__pagination\"></div>\n        ");
      var detailGallerySwitch = document.querySelector('.detail-gallery__cta');

      clickSwitch = function clickSwitch(e) {
        Fancy.close(e, 'detailGallery', true, detailGalleryBg, detailGalleryClose, detailGalleryWrapper, detailGalleryFooter, detailGallery);
      };

      detailGallerySwitch.addEventListener('click', clickSwitch);
      body.classList.add('detail-gallery-open');
      Fancy.initSwiper(detailGalleryWrapper, id);

      _fancy.default.openLayer('detailGallery', detailGalleryBg, detailGalleryClose, detailGalleryWrapper, detailGalleryFooter, id);
    }
  }, {
    key: "close",
    value: function close(e, type, isSwitch, bg, _close, wrapper, footer, container) {
      _fancy.default.closeLayer(type, isSwitch, bg, _close, wrapper, footer, container);

      e.preventDefault();
    } // INIT SWIPER WITH OPTIONS AND EVENTS

  }, {
    key: "initSwiper",
    value: function initSwiper(wrapper, id) {
      var sliderItems = Fancy.items.map(function (item) {
        return {
          id: item.id,
          caption: item.caption,
          url: item.bigImageUrl
        };
      });
      var slidersHtml = '';
      sliderItems.forEach(function (slider) {
        slidersHtml += "\n            <div class=\"swiper-slide\">\n                <div class=\"swiper-zoom-container\"><img  class=\"swiper-lazy\" data-src=\"".concat(slider.url, "\"></div>\n                <div class=\"swiper-lazy-preloader\"></div>\n            </div>");
      });
      var swiperMarkup = "\n        <div class=\"swiper-container\">\n            <div class=\"swiper-wrapper\">".concat(slidersHtml, "</div>\n            <div class=\"swiper-button-prev\">").concat(prevIcon, "</div>\n            <div class=\"swiper-button-next\">").concat(nextIcon, "</div>  \n        </div>");
      var detailGallerySwiper = document.createElement('div');
      detailGallerySwiper.classList.add('detail-gallery__swiper');
      detailGallerySwiper.innerHTML = swiperMarkup;
      wrapper.appendChild(detailGallerySwiper);
      var options = {
        watchOverflow: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 60,
        speed: slideAnimationSpeed,
        allowTouchMove: false,
        zoom: {
          maxRatio: 4,
          toggle: true
        },
        preloadImages: false,
        lazy: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.detail-gallery__pagination',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            var actualIndex = Number(index + 1);
            return "<span class=\"detail-gallery__pagination-item ".concat(className, "\">").concat(actualIndex, "/").concat(sliderItems.length, "</span>");
          }
        },
        breakpoints: {
          768: {
            allowTouchMove: true
          }
        },
        on: {
          doubleTap: function doubleTap() {
            var detailGalleryWrapper = document.querySelector('.detail-gallery__wrapper ');
            Fancy.toggleClass(body, 'fancy-zoom');

            if (body.classList.contains('fancy-zoom')) {
              this.allowSlidePrev = false;
              this.allowSlideNext = false;
              TweenMax.to(detailGalleryWrapper, 0.5, {
                height: window.innerHeight - 60,
                ease: Expo.easeInOut
              });
            } else {
              this.allowSlidePrev = true;
              this.allowSlideNext = true;
              TweenMax.to(detailGalleryWrapper, 0.5, {
                height: window.innerHeight - 65 - 60,
                ease: Expo.easeInOut
              });
            }
          },
          init: function init() {
            var caption = sliderItems[this.activeIndex].caption;
            var captionWrapper = document.querySelector('.detail-gallery__caption span');
            captionWrapper.innerHTML = caption;
            this.slideTo(id, 0);
          },
          slideChange: function slideChange() {
            var captionSpeed = slideAnimationSpeed / 1000 / 2;
            var caption = sliderItems[this.activeIndex].caption;
            var captionWrapper = document.querySelector('.detail-gallery__caption span');
            TweenMax.set(captionWrapper, {
              bottom: 0
            });
            TweenMax.to(captionWrapper, captionSpeed, {
              bottom: -captionWrapper.offsetHeight,
              ease: Expo.easeInOut,
              onComplete: function onComplete() {
                captionWrapper.innerHTML = caption;
                TweenMax.to(captionWrapper, captionSpeed, {
                  bottom: 0,
                  ease: Expo.easeInOut
                });
              }
            });
          }
        }
      };
      swiperInstance = new Swiper(document.querySelector('.detail-gallery__swiper .swiper-container'), options);
      swiperInstance.init();
    }
  }, {
    key: "zoomOutOnClose",
    value: function zoomOutOnClose() {
      swiperInstance.allowSlidePrev = true;
      swiperInstance.allowSlideNext = true;
      swiperInstance.zoom.out();
    }
  }, {
    key: "destroySwiper",
    value: function destroySwiper() {
      swiperInstance.destroy();
    }
  }, {
    key: "getImages",
    value: function getImages() {
      return Fancy.items;
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(target, cssClass) {
      if (target.classList.contains(cssClass)) {
        target.classList.remove(cssClass);
      } else {
        target.classList.add(cssClass);
      }
    }
  }]);

  return Fancy;
}();

exports.default = Fancy;

},{"./fancy.transition":315}],315:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fancy = _interopRequireDefault(require("./fancy"));

var _fancy2 = _interopRequireDefault(require("./fancy.view-all"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var body = document.querySelector('body');
var slideAnimationSpeed = 1000;

var FancyTransition =
/*#__PURE__*/
function () {
  function FancyTransition() {
    _classCallCheck(this, FancyTransition);
  }

  _createClass(FancyTransition, null, [{
    key: "openLayer",
    //OPEN LAYER ON IMAGE CLICK
    value: function openLayer(type, layer, close, wrapper, footer, id) {
      var closeHeight = close.clientHeight;
      var footerHeight = footer ? footer.clientHeight : null;
      var wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
      var isDetailGallery = false,
          isFullGallery = false;

      switch (type) {
        case 'detailGallery':
          isDetailGallery = true;
          break;

        case 'fullGallery':
          isFullGallery = true;
          break;
      }

      var arrowLeft;
      var arrowRight;

      if (isDetailGallery) {
        arrowLeft = document.querySelector('.swiper-button-prev');
        arrowRight = document.querySelector('.swiper-button-next');
      }

      TweenMax.set(layer, {
        bottom: 0,
        top: 'auto',
        height: 0
      });
      TweenMax.set(close, {
        height: 0
      });

      if (isDetailGallery) {
        TweenMax.set(arrowLeft, {
          left: -100
        });
        TweenMax.set(arrowRight, {
          right: -100
        });
        TweenMax.set(wrapper, {
          bottom: -wrapperHeight
        });
        TweenMax.set(footer, {
          bottom: -footerHeight
        });
      }

      if (isFullGallery) {
        TweenMax.set(wrapper, {
          bottom: -wrapperHeight
        });
      }

      TweenMax.to(layer, 1, {
        height: window.innerHeight,
        ease: Expo.easeInOut
      });
      TweenMax.to(layer, 0.8, {
        backgroundColor: '#ffffff',
        ease: Power1.easeOut
      }).delay(0.4);

      if (isDetailGallery) {
        TweenMax.to(wrapper, 0.8, {
          bottom: footerHeight,
          ease: Expo.easeIn
        });
        TweenMax.to(close, 1, {
          height: closeHeight,
          ease: Expo.easeInOut
        });
        TweenMax.to(footer, 1, {
          bottom: 0,
          ease: Expo.easeInOut
        }).delay(0.2);
        TweenMax.to(arrowLeft, 1, {
          left: 0,
          ease: Expo.easeInOut
        }).delay(0.5);
        TweenMax.to(arrowRight, 1, {
          right: 0,
          ease: Expo.easeInOut
        }).delay(0.5);
      } else if (isFullGallery) {
        TweenMax.to(wrapper, 0.8, {
          bottom: 0,
          ease: Expo.easeIn
        });
        TweenMax.to(close, 1, {
          height: closeHeight,
          ease: Expo.easeInOut
        });
      } else {
        TweenMax.to(close, 1, {
          height: closeHeight,
          ease: Expo.easeInOut
        });
      }
    } //CLOSE LAYER ON CLOSE CLICK

  }, {
    key: "closeLayer",
    value: function closeLayer(type, isSwitch, layer, close, wrapper, footer, mainWrapper) {
      var captionWrapper = document.querySelector('.detail-gallery__caption span');
      var footerHeight = footer ? footer.clientHeight : null;
      var wrapperHeight = wrapper ? window.innerHeight - footerHeight - 65 : null;
      var detailGalleryWrapper = document.querySelector('.detail-gallery__wrapper');
      var arrowLeft = document.querySelector('.swiper-button-prev');
      var arrowRight = document.querySelector('.swiper-button-next');
      var delayAll = 0;
      var delay = 0;
      var isDetailGallery = false,
          isFullGallery = false;

      switch (type) {
        case 'detailGallery':
          delay = 500;
          body.classList.remove('detail-gallery-open');
          isDetailGallery = true;
          break;

        case 'fullGallery':
          delay = 500;
          body.classList.remove('full-gallery-open');
          isFullGallery = true;
          break;

        default:
          delay = 0;
          break;
      }

      if (isDetailGallery && body.classList.contains('fancy-zoom')) {
        TweenMax.to(detailGalleryWrapper, 0.5, {
          height: window.innerHeight - 65 - 60,
          ease: Expo.easeInOut
        });

        _fancy.default.toggleClass(body, 'fancy-zoom');

        _fancy.default.zoomOutOnClose();

        delayAll = 500;
      }

      setTimeout(function (x) {
        if (!isSwitch) {
          TweenMax.set(layer, {
            bottom: 0,
            top: 'auto',
            height: window.innerHeight
          });
        }

        if (isSwitch && isFullGallery) {
          TweenMax.set(layer, {
            bottom: 0,
            top: 'auto',
            height: window.innerHeight
          });
        }

        if (isDetailGallery) {
          var captionSpeed = slideAnimationSpeed / 1000 / 2;
          TweenMax.set(footer, {
            bottom: 0
          });
          TweenMax.set(captionWrapper, {
            bottom: 0
          });
          TweenMax.set(arrowLeft, {
            left: 0
          });
          TweenMax.set(arrowRight, {
            right: 0
          });
          TweenMax.to(captionWrapper, captionSpeed, {
            bottom: -captionWrapper.offsetHeight,
            ease: Expo.easeInOut
          });
          TweenMax.to(close, 1, {
            height: 0,
            ease: Expo.easeInOut
          });
          TweenMax.to(arrowLeft, 1, {
            left: -100,
            ease: Expo.easeInOut
          });
          TweenMax.to(arrowRight, 1, {
            right: -100,
            ease: Expo.easeInOut
          });
          TweenMax.to(wrapper, 0.8, {
            bottom: -wrapperHeight,
            ease: Expo.easeIn
          }).delay(0.1);
          TweenMax.to(footer, 1, {
            bottom: -footerHeight,
            ease: Expo.easeInOut
          }).delay(0.2);
        }

        if (isFullGallery) {
          TweenMax.to(close, 1, {
            height: 0,
            ease: Expo.easeInOut
          });
          TweenMax.to(wrapper, 0.8, {
            bottom: -wrapperHeight,
            ease: Expo.easeIn
          }).delay(0.1);
        }

        setTimeout(function (x) {
          if (!isSwitch) {
            TweenMax.to(layer, 1, {
              height: 0,
              ease: Expo.easeInOut,
              onComplete: function onComplete() {
                if (isDetailGallery) {
                  _fancy.default.destroySwiper();

                  mainWrapper.remove();
                }

                if (isFullGallery) {
                  mainWrapper.remove();
                }
              }
            });
          } else {
            if (isDetailGallery) {
              console.log('isDetailGallery end');
              setTimeout(function (y) {
                _fancy.default.destroySwiper();

                mainWrapper.remove();
              }, 1000);

              if (!document.querySelector('.full-gallery')) {
                _fancy2.default.initFullGallery(0);
              }
            }

            if (isFullGallery) {
              console.log('isfullgallery end');
              setTimeout(function (y) {
                mainWrapper.remove();
              }, 1000); //Fancy.initDetailGallery(0);
            }
          }
        }, delay);
      }, delayAll);
    }
  }]);

  return FancyTransition;
}();

exports.default = FancyTransition;

},{"./fancy":314,"./fancy.view-all":316}],316:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fancy = _interopRequireDefault(require("./fancy"));

var _fancy2 = _interopRequireDefault(require("./fancy.transition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var clickClose;
var body = document.querySelector('body');
var closeIcon = "<svg><use xlink:href=\"#svg-close\"></use></svg>";
var slideAnimationSpeed = 1000;

var FancyViewAll =
/*#__PURE__*/
function () {
  function FancyViewAll(node, id) {
    _classCallCheck(this, FancyViewAll);

    this.node = node;
    this.id = id;
    this.addListener();
  }

  _createClass(FancyViewAll, [{
    key: "addListener",
    value: function addListener() {
      var _this = this;

      var click = function click(e) {
        _this.openFullGallery();

        e.preventDefault();
      };

      this.click = click;
      this.node.addEventListener('click', this.click);
    }
  }, {
    key: "openFullGallery",
    value: function openFullGallery() {
      FancyViewAll.initFullGallery(this.id);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.node.removeEventListener('click', this.click);
    } //INIT

  }], [{
    key: "init",
    value: function init() {
      FancyViewAll.items = _toConsumableArray(document.querySelectorAll('[data-fancy-view-all]')).map(function (element, id) {
        return new FancyViewAll(element, id);
      });
      console.log('FancyViewAll: ', FancyViewAll.items);
    } //DESTROY ALL NODES AND CREATED CONTAINER ELEMENTS

  }, {
    key: "destroyAll",
    value: function destroyAll() {
      FancyViewAll.items.forEach(function (node) {
        node.destroy();
      });

      _toConsumableArray(document.querySelectorAll('.full-gallery__thumb')).forEach(function (thumb) {
        return thumb.removeEventListener('click', FancyViewAll.onThumbClick);
      });
    } //CREATE MARKUP FOR FULL GALLERY AND ADD CLOSE LISTENER

  }, {
    key: "initFullGallery",
    value: function initFullGallery(id) {
      var fullGallery = document.createElement('div');
      var fullGalleryClose = document.createElement('div');
      var fullGalleryBg = document.createElement('div');
      var fullGalleryWrapper = document.createElement('div');
      var fullGalleryContainer = document.createElement('div');
      fullGallery.classList.add('full-gallery');
      fullGalleryClose.classList.add('full-gallery__close');
      fullGalleryBg.classList.add('full-gallery__bg');
      fullGalleryWrapper.classList.add('full-gallery__wrapper');
      fullGalleryContainer.classList.add('full-gallery__container');
      fullGalleryClose.innerHTML = closeIcon;

      clickClose = function clickClose(e) {
        _fancy2.default.closeLayer('fullGallery', false, fullGalleryBg, fullGalleryClose, fullGalleryWrapper, null, fullGallery);

        e.preventDefault();
      };

      fullGalleryClose.addEventListener('click', clickClose);
      document.body.appendChild(fullGallery);
      fullGallery.appendChild(fullGalleryClose);
      fullGallery.appendChild(fullGalleryBg);
      fullGallery.appendChild(fullGalleryWrapper);
      fullGalleryWrapper.appendChild(fullGalleryContainer);
      body.classList.add('full-gallery-open');
      FancyViewAll.addImages(fullGalleryContainer);

      _fancy2.default.openLayer('fullGallery', fullGalleryBg, fullGalleryClose, fullGalleryWrapper, null, id);
    }
  }, {
    key: "addImages",
    value: function addImages(container) {
      var fancyImages = _fancy.default.getImages();

      var thumbItems = fancyImages.map(function (item) {
        return {
          id: item.id,
          caption: item.caption,
          url: item.bigImageUrl,
          html: "<div class=\"full-gallery__thumb\" data-index=\"".concat(item.id, "\"><img src=\"").concat(item.bigImageUrl, "\" alt=\"").concat(item.caption, "\"></div>")
        };
      });
      var thumbHtml = '';
      thumbItems.forEach(function (thumb) {
        thumbHtml += thumb.html;
      });
      container.innerHTML = "<div class=\"full-gallery__list\">".concat(thumbHtml, "</div>");

      _toConsumableArray(container.querySelectorAll('.full-gallery__thumb')).forEach(function (thumb) {
        return thumb.addEventListener('click', FancyViewAll.onThumbClick);
      });
    }
  }, {
    key: "onThumbClick",
    value: function onThumbClick(event) {
      var index = this.getAttribute('data-index');

      _fancy.default.initDetailGallery(index);
    }
  }]);

  return FancyViewAll;
}();

exports.default = FancyViewAll;

},{"./fancy":314,"./fancy.transition":315}],317:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var body = document.querySelector('body');
var header = document.querySelector('header');
var parents = document.querySelectorAll('.nav__parent');
var subnavOpen = false;
var searchOpen = false;

var Navigation =
/*#__PURE__*/
function () {
  function Navigation() {
    _classCallCheck(this, Navigation);
  }

  _createClass(Navigation, null, [{
    key: "init",
    value: function init() {
      if (window.innerWidth > 768) {
        Navigation.desktopNav();
        Navigation.initSearch();
      } else {
        Navigation.mobileNav();
      }
    }
  }, {
    key: "desktopNav",
    value: function desktopNav() {
      var closeNavSlow = getComputedStyle(document.documentElement).getPropertyValue('--close-nav-speed');
      var closeNavFast = 400;
      parents.forEach(function (parent) {
        parent.addEventListener('click', function (e) {
          e.preventDefault();
          var activeNav = e.path[3]; //seleziono ul li attiva appena cliccata

          var subnavItemHeight = activeNav.querySelector('.subnav__item').clientHeight;
          var height = subnavItemHeight + subnavItemHeight / 2 + 'px';
          var thisParent = parent.parentNode;

          if (!subnavOpen) {
            //se i sottomenu sono chiusi
            if (searchOpen) {
              //se la ricerca è aperta
              document.documentElement.style.setProperty('--close-nav-speed', closeNavFast + 'ms');
              Navigation.toggleSearch();
              setTimeout(function (x) {
                //timeout per definite l'animazione di chiusura della ricerca per mostrare il sottomenu
                body.classList.add('subnav-open');
                thisParent.classList.add('active');
                activeNav.querySelector('.subnav').style.height = height;
                activeNav.querySelector('.subnav__wrapper').style.top = subnavItemHeight / 4 + 'px';
                Navigation.closeOnOutsideClick(); //se clicchi fuori dal menu si chiude

                subnavOpen = true;
              }, closeNavFast);
            } else {
              document.documentElement.style.setProperty('--close-nav-speed', closeNavSlow);
              body.classList.add('subnav-open');
              thisParent.classList.add('active');
              activeNav.querySelector('.subnav').style.height = height;
              activeNav.querySelector('.subnav__wrapper').style.top = subnavItemHeight / 4 + 'px';
              Navigation.closeOnOutsideClick(); //se clicchi fuori dal menu si chiude

              subnavOpen = true;
            }
          } else {
            if (thisParent.classList.contains('active')) {
              //se un sottomenu è da aprire, verifico prima se ho gia aperto un sottomenu
              document.documentElement.style.setProperty('--close-nav-speed', closeNavSlow);
              body.classList.remove('subnav-open');
              document.querySelectorAll('.subnav').forEach(function (x) {
                return x.style.height = '0';
              });
              document.querySelectorAll('.nav ul li.active').forEach(function (x) {
                return x.classList.remove('active');
              });
              subnavOpen = false;
            } else {
              //un sottomenu è stato già aperto
              document.documentElement.style.setProperty('--close-nav-speed', closeNavFast + 'ms');
              document.querySelectorAll('.subnav').forEach(function (x) {
                return x.style.height = '0';
              });
              document.querySelectorAll('.nav ul li.active').forEach(function (x) {
                return x.classList.remove('active');
              });
              setTimeout(function (x) {
                //timeout per definite l'animazione di chiusura del sottomenu gia aperto per mostrare il successivo
                body.classList.add('subnav-open');
                thisParent.classList.add('active');
                activeNav.querySelector('.subnav').style.height = height;
                activeNav.querySelector('.subnav__wrapper').style.top = subnavItemHeight / 4 + 'px';
                Navigation.closeOnOutsideClick(); //se clicchi fuori dal menu si chiude
              }, closeNavFast);
              subnavOpen = true;
            }
          }
        });
      });
    }
  }, {
    key: "closeNav",
    value: function closeNav(delay) {
      //chiudo il sottomenu
      if (body.classList.contains('subnav-open')) {
        if (delay) {
          document.documentElement.style.setProperty('--close-nav-speed', delay + 'ms');
        }

        body.classList.remove('subnav-open');
        document.querySelectorAll('.nav ul li').forEach(function (x) {
          return x.classList.remove('active');
        });
        document.querySelectorAll('.subnav').forEach(function (x) {
          return x.style.height = '0';
        });
        subnavOpen = false;
      }
    }
  }, {
    key: "closeOnOutsideClick",
    value: function closeOnOutsideClick() {
      //chiudo il sottomenu se clicco fuori
      document.addEventListener('click', function (e) {
        if (!header.contains(e.target)) {
          Navigation.closeNav();
        }
      });
    }
  }, {
    key: "initSearch",
    value: function initSearch() {
      var searchButton = document.querySelector('.nav__search'),
          closeSearch = document.querySelector('.header__search-close'),
          animOnSubNavOpen = 400;

      if (searchButton) {
        searchButton.addEventListener('click', function (e) {
          if (subnavOpen) {
            Navigation.closeNav(animOnSubNavOpen);
            setTimeout(function (e) {
              Navigation.toggleSearch();
            }, animOnSubNavOpen);
          } else {
            Navigation.toggleSearch();
          }

          e.preventDefault();
        });
      }

      if (closeSearch) {
        closeSearch.addEventListener('click', function (e) {
          Navigation.toggleSearch();
          e.preventDefault();
        });
      }
    }
  }, {
    key: "toggleSearch",
    value: function toggleSearch() {
      var inputText = document.querySelector('.header__search input');

      _utils.default.toggleClass(body, 'search-bar-open');

      searchOpen = body.classList.contains('search-bar-open') ? true : false;

      if (searchOpen) {
        inputText.focus();
      } else {
        setTimeout(function (e) {
          inputText.value = '';
        }, 400);
      }
    }
  }, {
    key: "closeSearch",
    value: function closeSearch() {
      var inputText = document.querySelector('.header__search input');
      body.classList.remove('search-bar-open');
      searchOpen = false;
      setTimeout(function (e) {
        inputText.value = '';
      }, 400);
    }
  }, {
    key: "mobileNav",
    value: function mobileNav() {
      var toggle = document.querySelector('.nav__toggle');
      var backs = document.querySelectorAll('.subnav__mobile-back');
      var actualSubNav;
      toggle.addEventListener('click', function (e) {
        if (body.classList.contains('nav-mobile-open')) {
          var subNavActive = false;
          parents.forEach(function (x) {
            if (x.parentNode.classList.contains('active')) {
              x.parentNode.classList.remove('active');
              subNavActive = true;
            }
          });

          if (!subNavActive) {
            body.classList.remove('nav-mobile-open');
          } else {
            setTimeout(function () {
              body.classList.remove('nav-mobile-open');
            }, 420);
          }
        } else {
          body.classList.add('nav-mobile-open');
        }
      });
      parents.forEach(function (parent) {
        parent.addEventListener('click', function (e) {
          actualSubNav = parent.parentNode;
          actualSubNav.classList.add('active');
          actualSubNav.style.zIndex = 2;
          e.preventDefault();
        });
      });
      backs.forEach(function (back) {
        back.addEventListener('click', function (e) {
          actualSubNav.classList.remove('active');
          setTimeout(function () {
            actualSubNav.style.zIndex = 1;
          }, 500);
          e.preventDefault();
        });
      });
    } // static splitButtons() {
    //     const buttons = document.querySelectorAll('.btn--split');
    //     buttons.forEach(button => {
    //         const words = Array.from(button.children).filter(function (item) {
    //             return item.matches('.word');
    //         });
    //         words.forEach(word => {
    //             let text = document.createElement('span');
    //             text.classList.add('full-text');
    //             text.innerHTML = word.getAttribute('data-word');
    //             word.appendChild(text);
    //         });
    //     });
    // }

  }]);

  return Navigation;
}(); // class Toggle {
//     constructor(node) {
//         this.node = node;
//         this.onClick = (event) => {
//             this.onClick_(event);
//         };
//         node.addEventListener('click', this.onClick);
//         console.log(this);
//         /*
//         {
//             constructor: function
//             onClick: function
//             close: function
//         } 
//         */
//     }
//     onClick_(event) {
//         console.log('onClick');
//         Toggle.items.forEach(x => x === this ? x.open() : x.close());
//     }
//     close() {
//     }
//     destroy() {
//         this.node.removeEventListener('click', this.onClick);
//     }
//     static init() {
//         if (Toggle.items) {
//             Toggle.items.forEach(x => x.destroy());
//         }
//         Toggle.items = [...document.querySelectorAll('[toggle]')].map(x => new Toggle(x));
//     }
// }
// console.log(Toggle);
// {
//     init: function
//     items: [Toggle, Toggle, Toggle, Toggle]
// } 


exports.default = Navigation;

},{"./utils":320}],318:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */
var Rect =
/*#__PURE__*/
function () {
  function Rect(rect) {
    _classCallCheck(this, Rect);

    this.top = 0;
    this.right = 0;
    this.bottom = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.set(rect);
  }

  _createClass(Rect, [{
    key: "set",
    value: function set(rect) {
      if (rect) {
        Object.assign(this, rect);
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
      }

      this.center = {
        top: this.top + this.height / 2,
        left: this.left + this.width / 2
      };
      this.center.x = this.center.left;
      this.center.y = this.center.top;
    }
  }, {
    key: "contains",
    value: function contains(left, top) {
      return Rect.contains(this, left, top);
    }
  }, {
    key: "intersect",
    value: function intersect(rect) {
      return Rect.intersectRect(this, rect);
    }
  }, {
    key: "intersection",
    value: function intersection(rect) {
      var center = {
        x: (this.center.x - rect.center.x) / (rect.width / 2),
        y: (this.center.y - rect.center.y) / (rect.height / 2)
      };

      if (this.intersect(rect)) {
        var dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
        var dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
        var x = dx ? 1 - dx / this.width : (rect.left + rect.width - this.left) / this.width;
        var y = dy ? 1 - dy / this.height : (rect.top + rect.height - this.top) / this.height;
        x = Math.min(1, x);
        y = Math.min(1, y);
        return {
          x: x,
          y: y,
          center: center
        };
      } else {
        return {
          x: 0,
          y: 0,
          center: center
        };
      }
    }
  }], [{
    key: "contains",
    value: function contains(rect, left, top) {
      return rect.top <= top && top <= rect.bottom && rect.left <= left && left <= rect.right;
    }
  }, {
    key: "intersectRect",
    value: function intersectRect(r1, r2) {
      return !(r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top);
    }
  }, {
    key: "fromNode",
    value: function fromNode(node) {
      if (!node.getClientRects().length) {
        return new Rect();
      }

      var rect = node.getBoundingClientRect(); // const defaultView = node.ownerDocument.defaultView;

      return new Rect({
        // top: rect.top + defaultView.pageYOffset,
        // left: rect.left + defaultView.pageXOffset,
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      });
    }
  }]);

  return Rect;
}();

exports.default = Rect;

},{}],319:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */
var slidersArray = [];

var Sliders =
/*#__PURE__*/
function () {
  function Sliders(slider, index) {
    _classCallCheck(this, Sliders);

    this.slider = slider;
    this.index = index;
    this.options = this.setOptions();
    this.setOptions();
    this.initSlider();
  }

  _createClass(Sliders, [{
    key: "setOptions",
    value: function setOptions() {
      var parentWrap = this.slider.parentNode;
      var options = {}; //Slider Carousel

      if (parentWrap.classList.contains('slider--carousel') === true) {
        options = {
          grabCursor: true,
          watchOverflow: true,
          centeredSlides: true,
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 60,
          freeMode: true,
          freeModeMomentumRatio: 1,
          freeModeMomentumVelocityRatio: 0.3,
          speed: 400,
          breakpoints: {
            576: {
              spaceBetween: 20
            },
            768: {
              spaceBetween: 40
            }
          }
        }; //Cover Slider
      } else if (parentWrap.classList.contains('slider--test') === true) {
        options = {
          grabCursor: true,
          watchOverflow: true,
          centeredSlides: false,
          loop: true,
          slidesPerView: 5,
          spaceBetween: 100
        };
      }

      return options;
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      var swiperInstance = new Swiper(this.slider, this.options);
      swiperInstance.init();
      this.swiperInstance = swiperInstance;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.swiperInstance.destroy();
    }
  }], [{
    key: "init",
    value: function init() {
      Sliders.items = _toConsumableArray(document.querySelectorAll('.swiper-container')).map(function (slider, index) {
        return new Sliders(slider, index);
      });
      console.log('sliders: ', Sliders.items);
    }
  }, {
    key: "destroyAll",
    value: function destroyAll() {
      Sliders.items.forEach(function (slider) {
        slider.destroy();
      });
    }
  }]);

  return Sliders;
}();

exports.default = Sliders;

},{}],320:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* jshint esversion: 6 */

/* global window, document */
var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "now",
    value: function now() {
      return Date.now ? Date.now() : new Date().getTime();
    }
  }, {
    key: "performanceNow",
    value: function performanceNow() {
      return performance ? performance.timing.navigationStart + performance.now() : Utils.now();
    }
  }, {
    key: "throttle",
    value: function throttle(callback, wait, options) {
      var context = null,
          result = null,
          args = null,
          timeout = null;
      var previous = 0;

      if (!options) {
        options = {};
      }

      var later = function later() {
        previous = options.leading === false ? 0 : Utils.now();
        timeout = null;
        result = callback.apply(context, args);

        if (!timeout) {
          context = args = null;
        }
      };

      return function () {
        context = this;
        args = arguments;
        var now = Utils.now();

        if (!previous && options.leading === false) {
          previous = now;
        }

        var remaining = wait - (now - previous);

        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }

          previous = now;
          result = callback.apply(context, args);

          if (!timeout) {
            context = args = null;
          }
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }

        return result;
      };
    }
  }, {
    key: "debounce",
    value: function debounce(callback) {
      var _this = this,
          _arguments = arguments;

      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var timeout;
      return function () {
        var context = _this,
            args = _arguments;

        var later = function later() {
          timeout = null;

          if (!immediate) {
            callback.apply(context, args);
          }
        };

        var callNow = immediate && !timeout;

        if (timeout) {
          clearTimeout(timeout);
        }

        timeout = setTimeout(later, wait);

        if (callNow) {
          callback.apply(context, args);
        }
      };
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(target, cssClass) {
      if (target.classList.contains(cssClass)) {
        target.classList.remove(cssClass);
      } else {
        target.classList.add(cssClass);
      }
    }
  }]);

  return Utils;
}();

exports.default = Utils;

},{}]},{},[310]);

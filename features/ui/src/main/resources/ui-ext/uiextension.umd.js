(function (ls) {
  typeof define == "function" && define.amd ? define(ls) : ls();
})(function () {
  "use strict";
  const ls = "",
    ge = (t, o) => {
      const r = t.__vccOpts || t;
      for (const [a, l] of o) r[a] = l;
      return r;
    },
    Qw = {},
    zw = window.Vue.resolveComponent,
    Gw = window.Vue.createVNode,
    Yw = window.Vue.openBlock,
    Hw = window.Vue.createElementBlock;
  window.Vue.pushScopeId, window.Vue.popScopeId;
  const Pw = { class: "main" };
  function jw(t, o) {
    const r = zw("router-view");
    return Yw(), Hw("div", Pw, [Gw(r)]);
  }
  const Xw = ge(Qw, [
      ["render", jw],
      ["__scopeId", "data-v-5d32d140"],
    ]),
    Lw = window.Vue.defineComponent,
    $w = window.Vue.openBlock,
    qw = window.Vue.createBlock,
    Kw = Lw({
      __name: "App",
      setup(t) {
        return (o, r) => ($w(), qw(Xw));
      },
    }),
    pD = "";
  var no =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
  function e1(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, "default")
      ? t.default
      : t;
  }
  var hu = { exports: {} },
    cs = { exports: {} },
    fu = function (o, r) {
      return function () {
        for (var l = new Array(arguments.length), c = 0; c < l.length; c++)
          l[c] = arguments[c];
        return o.apply(r, l);
      };
    },
    t1 = fu,
    us = Object.prototype.toString,
    ds = (function (t) {
      return function (o) {
        var r = us.call(o);
        return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
      };
    })(Object.create(null));
  function Bn(t) {
    return (
      (t = t.toLowerCase()),
      function (r) {
        return ds(r) === t;
      }
    );
  }
  function hs(t) {
    return Array.isArray(t);
  }
  function pi(t) {
    return typeof t > "u";
  }
  function n1(t) {
    return (
      t !== null &&
      !pi(t) &&
      t.constructor !== null &&
      !pi(t.constructor) &&
      typeof t.constructor.isBuffer == "function" &&
      t.constructor.isBuffer(t)
    );
  }
  var pu = Bn("ArrayBuffer");
  function r1(t) {
    var o;
    return (
      typeof ArrayBuffer < "u" && ArrayBuffer.isView
        ? (o = ArrayBuffer.isView(t))
        : (o = t && t.buffer && pu(t.buffer)),
      o
    );
  }
  function o1(t) {
    return typeof t == "string";
  }
  function i1(t) {
    return typeof t == "number";
  }
  function mu(t) {
    return t !== null && typeof t == "object";
  }
  function mi(t) {
    if (ds(t) !== "object") return !1;
    var o = Object.getPrototypeOf(t);
    return o === null || o === Object.prototype;
  }
  var a1 = Bn("Date"),
    s1 = Bn("File"),
    l1 = Bn("Blob"),
    c1 = Bn("FileList");
  function fs(t) {
    return us.call(t) === "[object Function]";
  }
  function u1(t) {
    return mu(t) && fs(t.pipe);
  }
  function d1(t) {
    var o = "[object FormData]";
    return (
      t &&
      ((typeof FormData == "function" && t instanceof FormData) ||
        us.call(t) === o ||
        (fs(t.toString) && t.toString() === o))
    );
  }
  var h1 = Bn("URLSearchParams");
  function f1(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function p1() {
    return typeof navigator < "u" &&
      (navigator.product === "ReactNative" ||
        navigator.product === "NativeScript" ||
        navigator.product === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  }
  function ps(t, o) {
    if (!(t === null || typeof t > "u"))
      if ((typeof t != "object" && (t = [t]), hs(t)))
        for (var r = 0, a = t.length; r < a; r++) o.call(null, t[r], r, t);
      else
        for (var l in t)
          Object.prototype.hasOwnProperty.call(t, l) &&
            o.call(null, t[l], l, t);
  }
  function ms() {
    var t = {};
    function o(l, c) {
      mi(t[c]) && mi(l)
        ? (t[c] = ms(t[c], l))
        : mi(l)
        ? (t[c] = ms({}, l))
        : hs(l)
        ? (t[c] = l.slice())
        : (t[c] = l);
    }
    for (var r = 0, a = arguments.length; r < a; r++) ps(arguments[r], o);
    return t;
  }
  function m1(t, o, r) {
    return (
      ps(o, function (l, c) {
        r && typeof l == "function" ? (t[c] = t1(l, r)) : (t[c] = l);
      }),
      t
    );
  }
  function w1(t) {
    return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
  }
  function v1(t, o, r, a) {
    (t.prototype = Object.create(o.prototype, a)),
      (t.prototype.constructor = t),
      r && Object.assign(t.prototype, r);
  }
  function V1(t, o, r) {
    var a,
      l,
      c,
      d = {};
    o = o || {};
    do {
      for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0; )
        (c = a[l]), d[c] || ((o[c] = t[c]), (d[c] = !0));
      t = Object.getPrototypeOf(t);
    } while (t && (!r || r(t, o)) && t !== Object.prototype);
    return o;
  }
  function T1(t, o, r) {
    (t = String(t)),
      (r === void 0 || r > t.length) && (r = t.length),
      (r -= o.length);
    var a = t.indexOf(o, r);
    return a !== -1 && a === r;
  }
  function g1(t) {
    if (!t) return null;
    var o = t.length;
    if (pi(o)) return null;
    for (var r = new Array(o); o-- > 0; ) r[o] = t[o];
    return r;
  }
  var U1 = (function (t) {
      return function (o) {
        return t && o instanceof t;
      };
    })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)),
    We = {
      isArray: hs,
      isArrayBuffer: pu,
      isBuffer: n1,
      isFormData: d1,
      isArrayBufferView: r1,
      isString: o1,
      isNumber: i1,
      isObject: mu,
      isPlainObject: mi,
      isUndefined: pi,
      isDate: a1,
      isFile: s1,
      isBlob: l1,
      isFunction: fs,
      isStream: u1,
      isURLSearchParams: h1,
      isStandardBrowserEnv: p1,
      forEach: ps,
      merge: ms,
      extend: m1,
      trim: f1,
      stripBOM: w1,
      inherits: v1,
      toFlatObject: V1,
      kindOf: ds,
      kindOfTest: Bn,
      endsWith: T1,
      toArray: g1,
      isTypedArray: U1,
      isFileList: c1,
    },
    ur = We;
  function wu(t) {
    return encodeURIComponent(t)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  var vu = function (o, r, a) {
      if (!r) return o;
      var l;
      if (a) l = a(r);
      else if (ur.isURLSearchParams(r)) l = r.toString();
      else {
        var c = [];
        ur.forEach(r, function (w, V) {
          w === null ||
            typeof w > "u" ||
            (ur.isArray(w) ? (V = V + "[]") : (w = [w]),
            ur.forEach(w, function (R) {
              ur.isDate(R)
                ? (R = R.toISOString())
                : ur.isObject(R) && (R = JSON.stringify(R)),
                c.push(wu(V) + "=" + wu(R));
            }));
        }),
          (l = c.join("&"));
      }
      if (l) {
        var d = o.indexOf("#");
        d !== -1 && (o = o.slice(0, d)),
          (o += (o.indexOf("?") === -1 ? "?" : "&") + l);
      }
      return o;
    },
    R1 = We;
  function wi() {
    this.handlers = [];
  }
  (wi.prototype.use = function (o, r, a) {
    return (
      this.handlers.push({
        fulfilled: o,
        rejected: r,
        synchronous: a ? a.synchronous : !1,
        runWhen: a ? a.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }),
    (wi.prototype.eject = function (o) {
      this.handlers[o] && (this.handlers[o] = null);
    }),
    (wi.prototype.forEach = function (o) {
      R1.forEach(this.handlers, function (a) {
        a !== null && o(a);
      });
    });
  var N1 = wi,
    y1 = We,
    k1 = function (o, r) {
      y1.forEach(o, function (l, c) {
        c !== r &&
          c.toUpperCase() === r.toUpperCase() &&
          ((o[r] = l), delete o[c]);
      });
    },
    Vu = We;
  function dr(t, o, r, a, l) {
    Error.call(this),
      (this.message = t),
      (this.name = "AxiosError"),
      o && (this.code = o),
      r && (this.config = r),
      a && (this.request = a),
      l && (this.response = l);
  }
  Vu.inherits(dr, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  var Tu = dr.prototype,
    gu = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
  ].forEach(function (t) {
    gu[t] = { value: t };
  }),
    Object.defineProperties(dr, gu),
    Object.defineProperty(Tu, "isAxiosError", { value: !0 }),
    (dr.from = function (t, o, r, a, l, c) {
      var d = Object.create(Tu);
      return (
        Vu.toFlatObject(t, d, function (w) {
          return w !== Error.prototype;
        }),
        dr.call(d, t.message, o, r, a, l),
        (d.name = t.name),
        c && Object.assign(d, c),
        d
      );
    });
  var hr = dr,
    Uu = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    Et = We;
  function M1(t, o) {
    o = o || new FormData();
    var r = [];
    function a(c) {
      return c === null
        ? ""
        : Et.isDate(c)
        ? c.toISOString()
        : Et.isArrayBuffer(c) || Et.isTypedArray(c)
        ? typeof Blob == "function"
          ? new Blob([c])
          : Buffer.from(c)
        : c;
    }
    function l(c, d) {
      if (Et.isPlainObject(c) || Et.isArray(c)) {
        if (r.indexOf(c) !== -1)
          throw Error("Circular reference detected in " + d);
        r.push(c),
          Et.forEach(c, function (w, V) {
            if (!Et.isUndefined(w)) {
              var g = d ? d + "." + V : V,
                R;
              if (w && !d && typeof w == "object") {
                if (Et.endsWith(V, "{}")) w = JSON.stringify(w);
                else if (Et.endsWith(V, "[]") && (R = Et.toArray(w))) {
                  R.forEach(function (y) {
                    !Et.isUndefined(y) && o.append(g, a(y));
                  });
                  return;
                }
              }
              l(w, g);
            }
          }),
          r.pop();
      } else o.append(d, a(c));
    }
    return l(t), o;
  }
  var Ru = M1,
    ws,
    Nu;
  function Z1() {
    if (Nu) return ws;
    Nu = 1;
    var t = hr;
    return (
      (ws = function (r, a, l) {
        var c = l.config.validateStatus;
        !l.status || !c || c(l.status)
          ? r(l)
          : a(
              new t(
                "Request failed with status code " + l.status,
                [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][
                  Math.floor(l.status / 100) - 4
                ],
                l.config,
                l.request,
                l
              )
            );
      }),
      ws
    );
  }
  var vs, yu;
  function b1() {
    if (yu) return vs;
    yu = 1;
    var t = We;
    return (
      (vs = t.isStandardBrowserEnv()
        ? (function () {
            return {
              write: function (a, l, c, d, p, w) {
                var V = [];
                V.push(a + "=" + encodeURIComponent(l)),
                  t.isNumber(c) &&
                    V.push("expires=" + new Date(c).toGMTString()),
                  t.isString(d) && V.push("path=" + d),
                  t.isString(p) && V.push("domain=" + p),
                  w === !0 && V.push("secure"),
                  (document.cookie = V.join("; "));
              },
              read: function (a) {
                var l = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + a + ")=([^;]*)")
                );
                return l ? decodeURIComponent(l[3]) : null;
              },
              remove: function (a) {
                this.write(a, "", Date.now() - 864e5);
              },
            };
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
          })()),
      vs
    );
  }
  var J1 = function (o) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
    },
    E1 = function (o, r) {
      return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
    },
    S1 = J1,
    F1 = E1,
    ku = function (o, r) {
      return o && !S1(r) ? F1(o, r) : r;
    },
    Vs,
    Mu;
  function A1() {
    if (Mu) return Vs;
    Mu = 1;
    var t = We,
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    return (
      (Vs = function (a) {
        var l = {},
          c,
          d,
          p;
        return (
          a &&
            t.forEach(
              a.split(`
`),
              function (V) {
                if (
                  ((p = V.indexOf(":")),
                  (c = t.trim(V.substr(0, p)).toLowerCase()),
                  (d = t.trim(V.substr(p + 1))),
                  c)
                ) {
                  if (l[c] && o.indexOf(c) >= 0) return;
                  c === "set-cookie"
                    ? (l[c] = (l[c] ? l[c] : []).concat([d]))
                    : (l[c] = l[c] ? l[c] + ", " + d : d);
                }
              }
            ),
          l
        );
      }),
      Vs
    );
  }
  var Ts, Zu;
  function W1() {
    if (Zu) return Ts;
    Zu = 1;
    var t = We;
    return (
      (Ts = t.isStandardBrowserEnv()
        ? (function () {
            var r = /(msie|trident)/i.test(navigator.userAgent),
              a = document.createElement("a"),
              l;
            function c(d) {
              var p = d;
              return (
                r && (a.setAttribute("href", p), (p = a.href)),
                a.setAttribute("href", p),
                {
                  href: a.href,
                  protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
                  host: a.host,
                  search: a.search ? a.search.replace(/^\?/, "") : "",
                  hash: a.hash ? a.hash.replace(/^#/, "") : "",
                  hostname: a.hostname,
                  port: a.port,
                  pathname:
                    a.pathname.charAt(0) === "/"
                      ? a.pathname
                      : "/" + a.pathname,
                }
              );
            }
            return (
              (l = c(window.location.href)),
              function (p) {
                var w = t.isString(p) ? c(p) : p;
                return w.protocol === l.protocol && w.host === l.host;
              }
            );
          })()
        : (function () {
            return function () {
              return !0;
            };
          })()),
      Ts
    );
  }
  var gs, bu;
  function vi() {
    if (bu) return gs;
    bu = 1;
    var t = hr,
      o = We;
    function r(a) {
      t.call(this, a == null ? "canceled" : a, t.ERR_CANCELED),
        (this.name = "CanceledError");
    }
    return o.inherits(r, t, { __CANCEL__: !0 }), (gs = r), gs;
  }
  var Us, Ju;
  function C1() {
    return (
      Ju ||
        ((Ju = 1),
        (Us = function (o) {
          var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
          return (r && r[1]) || "";
        })),
      Us
    );
  }
  var Rs, Eu;
  function Su() {
    if (Eu) return Rs;
    Eu = 1;
    var t = We,
      o = Z1(),
      r = b1(),
      a = vu,
      l = ku,
      c = A1(),
      d = W1(),
      p = Uu,
      w = hr,
      V = vi(),
      g = C1();
    return (
      (Rs = function (y) {
        return new Promise(function (E, I) {
          var C = y.data,
            A = y.headers,
            O = y.responseType,
            _;
          function H() {
            y.cancelToken && y.cancelToken.unsubscribe(_),
              y.signal && y.signal.removeEventListener("abort", _);
          }
          t.isFormData(C) &&
            t.isStandardBrowserEnv() &&
            delete A["Content-Type"];
          var k = new XMLHttpRequest();
          if (y.auth) {
            var W = y.auth.username || "",
              x = y.auth.password
                ? unescape(encodeURIComponent(y.auth.password))
                : "";
            A.Authorization = "Basic " + btoa(W + ":" + x);
          }
          var z = l(y.baseURL, y.url);
          k.open(
            y.method.toUpperCase(),
            a(z, y.params, y.paramsSerializer),
            !0
          ),
            (k.timeout = y.timeout);
          function de() {
            if (!!k) {
              var Ve =
                  "getAllResponseHeaders" in k
                    ? c(k.getAllResponseHeaders())
                    : null,
                Re =
                  !O || O === "text" || O === "json"
                    ? k.responseText
                    : k.response,
                Ze = {
                  data: Re,
                  status: k.status,
                  statusText: k.statusText,
                  headers: Ve,
                  config: y,
                  request: k,
                };
              o(
                function (Be) {
                  E(Be), H();
                },
                function (Be) {
                  I(Be), H();
                },
                Ze
              ),
                (k = null);
            }
          }
          if (
            ("onloadend" in k
              ? (k.onloadend = de)
              : (k.onreadystatechange = function () {
                  !k ||
                    k.readyState !== 4 ||
                    (k.status === 0 &&
                      !(
                        k.responseURL && k.responseURL.indexOf("file:") === 0
                      )) ||
                    setTimeout(de);
                }),
            (k.onabort = function () {
              !k ||
                (I(new w("Request aborted", w.ECONNABORTED, y, k)), (k = null));
            }),
            (k.onerror = function () {
              I(new w("Network Error", w.ERR_NETWORK, y, k, k)), (k = null);
            }),
            (k.ontimeout = function () {
              var Re = y.timeout
                  ? "timeout of " + y.timeout + "ms exceeded"
                  : "timeout exceeded",
                Ze = y.transitional || p;
              y.timeoutErrorMessage && (Re = y.timeoutErrorMessage),
                I(
                  new w(
                    Re,
                    Ze.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
                    y,
                    k
                  )
                ),
                (k = null);
            }),
            t.isStandardBrowserEnv())
          ) {
            var he =
              (y.withCredentials || d(z)) && y.xsrfCookieName
                ? r.read(y.xsrfCookieName)
                : void 0;
            he && (A[y.xsrfHeaderName] = he);
          }
          "setRequestHeader" in k &&
            t.forEach(A, function (Re, Ze) {
              typeof C > "u" && Ze.toLowerCase() === "content-type"
                ? delete A[Ze]
                : k.setRequestHeader(Ze, Re);
            }),
            t.isUndefined(y.withCredentials) ||
              (k.withCredentials = !!y.withCredentials),
            O && O !== "json" && (k.responseType = y.responseType),
            typeof y.onDownloadProgress == "function" &&
              k.addEventListener("progress", y.onDownloadProgress),
            typeof y.onUploadProgress == "function" &&
              k.upload &&
              k.upload.addEventListener("progress", y.onUploadProgress),
            (y.cancelToken || y.signal) &&
              ((_ = function (Ve) {
                !k ||
                  (I(!Ve || (Ve && Ve.type) ? new V() : Ve),
                  k.abort(),
                  (k = null));
              }),
              y.cancelToken && y.cancelToken.subscribe(_),
              y.signal &&
                (y.signal.aborted
                  ? _()
                  : y.signal.addEventListener("abort", _))),
            C || (C = null);
          var ve = g(z);
          if (ve && ["http", "https", "file"].indexOf(ve) === -1) {
            I(new w("Unsupported protocol " + ve + ":", w.ERR_BAD_REQUEST, y));
            return;
          }
          k.send(C);
        });
      }),
      Rs
    );
  }
  var Ns, Fu;
  function x1() {
    return Fu || ((Fu = 1), (Ns = null)), Ns;
  }
  var Se = We,
    Au = k1,
    Wu = hr,
    B1 = Uu,
    I1 = Ru,
    D1 = { "Content-Type": "application/x-www-form-urlencoded" };
  function Cu(t, o) {
    !Se.isUndefined(t) &&
      Se.isUndefined(t["Content-Type"]) &&
      (t["Content-Type"] = o);
  }
  function _1() {
    var t;
    return (
      (typeof XMLHttpRequest < "u" ||
        (typeof process < "u" &&
          Object.prototype.toString.call(process) === "[object process]")) &&
        (t = Su()),
      t
    );
  }
  function O1(t, o, r) {
    if (Se.isString(t))
      try {
        return (o || JSON.parse)(t), Se.trim(t);
      } catch (a) {
        if (a.name !== "SyntaxError") throw a;
      }
    return (r || JSON.stringify)(t);
  }
  var Vi = {
    transitional: B1,
    adapter: _1(),
    transformRequest: [
      function (o, r) {
        if (
          (Au(r, "Accept"),
          Au(r, "Content-Type"),
          Se.isFormData(o) ||
            Se.isArrayBuffer(o) ||
            Se.isBuffer(o) ||
            Se.isStream(o) ||
            Se.isFile(o) ||
            Se.isBlob(o))
        )
          return o;
        if (Se.isArrayBufferView(o)) return o.buffer;
        if (Se.isURLSearchParams(o))
          return (
            Cu(r, "application/x-www-form-urlencoded;charset=utf-8"),
            o.toString()
          );
        var a = Se.isObject(o),
          l = r && r["Content-Type"],
          c;
        if ((c = Se.isFileList(o)) || (a && l === "multipart/form-data")) {
          var d = this.env && this.env.FormData;
          return I1(c ? { "files[]": o } : o, d && new d());
        } else if (a || l === "application/json")
          return Cu(r, "application/json"), O1(o);
        return o;
      },
    ],
    transformResponse: [
      function (o) {
        var r = this.transitional || Vi.transitional,
          a = r && r.silentJSONParsing,
          l = r && r.forcedJSONParsing,
          c = !a && this.responseType === "json";
        if (c || (l && Se.isString(o) && o.length))
          try {
            return JSON.parse(o);
          } catch (d) {
            if (c)
              throw d.name === "SyntaxError"
                ? Wu.from(d, Wu.ERR_BAD_RESPONSE, this, null, this.response)
                : d;
          }
        return o;
      },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: x1() },
    validateStatus: function (o) {
      return o >= 200 && o < 300;
    },
    headers: { common: { Accept: "application/json, text/plain, */*" } },
  };
  Se.forEach(["delete", "get", "head"], function (o) {
    Vi.headers[o] = {};
  }),
    Se.forEach(["post", "put", "patch"], function (o) {
      Vi.headers[o] = Se.merge(D1);
    });
  var ys = Vi,
    Q1 = We,
    z1 = ys,
    G1 = function (o, r, a) {
      var l = this || z1;
      return (
        Q1.forEach(a, function (d) {
          o = d.call(l, o, r);
        }),
        o
      );
    },
    ks,
    xu;
  function Bu() {
    return (
      xu ||
        ((xu = 1),
        (ks = function (o) {
          return !!(o && o.__CANCEL__);
        })),
      ks
    );
  }
  var Iu = We,
    Ms = G1,
    Y1 = Bu(),
    H1 = ys,
    P1 = vi();
  function Zs(t) {
    if (
      (t.cancelToken && t.cancelToken.throwIfRequested(),
      t.signal && t.signal.aborted)
    )
      throw new P1();
  }
  var j1 = function (o) {
      Zs(o),
        (o.headers = o.headers || {}),
        (o.data = Ms.call(o, o.data, o.headers, o.transformRequest)),
        (o.headers = Iu.merge(
          o.headers.common || {},
          o.headers[o.method] || {},
          o.headers
        )),
        Iu.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (l) {
            delete o.headers[l];
          }
        );
      var r = o.adapter || H1.adapter;
      return r(o).then(
        function (l) {
          return (
            Zs(o),
            (l.data = Ms.call(o, l.data, l.headers, o.transformResponse)),
            l
          );
        },
        function (l) {
          return (
            Y1(l) ||
              (Zs(o),
              l &&
                l.response &&
                (l.response.data = Ms.call(
                  o,
                  l.response.data,
                  l.response.headers,
                  o.transformResponse
                ))),
            Promise.reject(l)
          );
        }
      );
    },
    it = We,
    Du = function (o, r) {
      r = r || {};
      var a = {};
      function l(g, R) {
        return it.isPlainObject(g) && it.isPlainObject(R)
          ? it.merge(g, R)
          : it.isPlainObject(R)
          ? it.merge({}, R)
          : it.isArray(R)
          ? R.slice()
          : R;
      }
      function c(g) {
        if (it.isUndefined(r[g])) {
          if (!it.isUndefined(o[g])) return l(void 0, o[g]);
        } else return l(o[g], r[g]);
      }
      function d(g) {
        if (!it.isUndefined(r[g])) return l(void 0, r[g]);
      }
      function p(g) {
        if (it.isUndefined(r[g])) {
          if (!it.isUndefined(o[g])) return l(void 0, o[g]);
        } else return l(void 0, r[g]);
      }
      function w(g) {
        if (g in r) return l(o[g], r[g]);
        if (g in o) return l(void 0, o[g]);
      }
      var V = {
        url: d,
        method: d,
        data: d,
        baseURL: p,
        transformRequest: p,
        transformResponse: p,
        paramsSerializer: p,
        timeout: p,
        timeoutMessage: p,
        withCredentials: p,
        adapter: p,
        responseType: p,
        xsrfCookieName: p,
        xsrfHeaderName: p,
        onUploadProgress: p,
        onDownloadProgress: p,
        decompress: p,
        maxContentLength: p,
        maxBodyLength: p,
        beforeRedirect: p,
        transport: p,
        httpAgent: p,
        httpsAgent: p,
        cancelToken: p,
        socketPath: p,
        responseEncoding: p,
        validateStatus: w,
      };
      return (
        it.forEach(Object.keys(o).concat(Object.keys(r)), function (R) {
          var y = V[R] || c,
            F = y(R);
          (it.isUndefined(F) && y !== w) || (a[R] = F);
        }),
        a
      );
    },
    bs,
    _u;
  function Ou() {
    return _u || ((_u = 1), (bs = { version: "0.27.2" })), bs;
  }
  var X1 = Ou().version,
    wn = hr,
    Js = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(
    function (t, o) {
      Js[t] = function (a) {
        return typeof a === t || "a" + (o < 1 ? "n " : " ") + t;
      };
    }
  );
  var Qu = {};
  Js.transitional = function (o, r, a) {
    function l(c, d) {
      return (
        "[Axios v" +
        X1 +
        "] Transitional option '" +
        c +
        "'" +
        d +
        (a ? ". " + a : "")
      );
    }
    return function (c, d, p) {
      if (o === !1)
        throw new wn(
          l(d, " has been removed" + (r ? " in " + r : "")),
          wn.ERR_DEPRECATED
        );
      return (
        r &&
          !Qu[d] &&
          ((Qu[d] = !0),
          console.warn(
            l(
              d,
              " has been deprecated since v" +
                r +
                " and will be removed in the near future"
            )
          )),
        o ? o(c, d, p) : !0
      );
    };
  };
  function L1(t, o, r) {
    if (typeof t != "object")
      throw new wn("options must be an object", wn.ERR_BAD_OPTION_VALUE);
    for (var a = Object.keys(t), l = a.length; l-- > 0; ) {
      var c = a[l],
        d = o[c];
      if (d) {
        var p = t[c],
          w = p === void 0 || d(p, c, t);
        if (w !== !0)
          throw new wn(
            "option " + c + " must be " + w,
            wn.ERR_BAD_OPTION_VALUE
          );
        continue;
      }
      if (r !== !0) throw new wn("Unknown option " + c, wn.ERR_BAD_OPTION);
    }
  }
  var $1 = { assertOptions: L1, validators: Js },
    zu = We,
    q1 = vu,
    Gu = N1,
    Yu = j1,
    Ti = Du,
    K1 = ku,
    Hu = $1,
    fr = Hu.validators;
  function pr(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Gu(), response: new Gu() });
  }
  (pr.prototype.request = function (o, r) {
    typeof o == "string" ? ((r = r || {}), (r.url = o)) : (r = o || {}),
      (r = Ti(this.defaults, r)),
      r.method
        ? (r.method = r.method.toLowerCase())
        : this.defaults.method
        ? (r.method = this.defaults.method.toLowerCase())
        : (r.method = "get");
    var a = r.transitional;
    a !== void 0 &&
      Hu.assertOptions(
        a,
        {
          silentJSONParsing: fr.transitional(fr.boolean),
          forcedJSONParsing: fr.transitional(fr.boolean),
          clarifyTimeoutError: fr.transitional(fr.boolean),
        },
        !1
      );
    var l = [],
      c = !0;
    this.interceptors.request.forEach(function (F) {
      (typeof F.runWhen == "function" && F.runWhen(r) === !1) ||
        ((c = c && F.synchronous), l.unshift(F.fulfilled, F.rejected));
    });
    var d = [];
    this.interceptors.response.forEach(function (F) {
      d.push(F.fulfilled, F.rejected);
    });
    var p;
    if (!c) {
      var w = [Yu, void 0];
      for (
        Array.prototype.unshift.apply(w, l),
          w = w.concat(d),
          p = Promise.resolve(r);
        w.length;

      )
        p = p.then(w.shift(), w.shift());
      return p;
    }
    for (var V = r; l.length; ) {
      var g = l.shift(),
        R = l.shift();
      try {
        V = g(V);
      } catch (y) {
        R(y);
        break;
      }
    }
    try {
      p = Yu(V);
    } catch (y) {
      return Promise.reject(y);
    }
    for (; d.length; ) p = p.then(d.shift(), d.shift());
    return p;
  }),
    (pr.prototype.getUri = function (o) {
      o = Ti(this.defaults, o);
      var r = K1(o.baseURL, o.url);
      return q1(r, o.params, o.paramsSerializer);
    }),
    zu.forEach(["delete", "get", "head", "options"], function (o) {
      pr.prototype[o] = function (r, a) {
        return this.request(
          Ti(a || {}, { method: o, url: r, data: (a || {}).data })
        );
      };
    }),
    zu.forEach(["post", "put", "patch"], function (o) {
      function r(a) {
        return function (c, d, p) {
          return this.request(
            Ti(p || {}, {
              method: o,
              headers: a ? { "Content-Type": "multipart/form-data" } : {},
              url: c,
              data: d,
            })
          );
        };
      }
      (pr.prototype[o] = r()), (pr.prototype[o + "Form"] = r(!0));
    });
  var ev = pr,
    Es,
    Pu;
  function tv() {
    if (Pu) return Es;
    Pu = 1;
    var t = vi();
    function o(r) {
      if (typeof r != "function")
        throw new TypeError("executor must be a function.");
      var a;
      this.promise = new Promise(function (d) {
        a = d;
      });
      var l = this;
      this.promise.then(function (c) {
        if (!!l._listeners) {
          var d,
            p = l._listeners.length;
          for (d = 0; d < p; d++) l._listeners[d](c);
          l._listeners = null;
        }
      }),
        (this.promise.then = function (c) {
          var d,
            p = new Promise(function (w) {
              l.subscribe(w), (d = w);
            }).then(c);
          return (
            (p.cancel = function () {
              l.unsubscribe(d);
            }),
            p
          );
        }),
        r(function (d) {
          l.reason || ((l.reason = new t(d)), a(l.reason));
        });
    }
    return (
      (o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
      (o.prototype.subscribe = function (a) {
        if (this.reason) {
          a(this.reason);
          return;
        }
        this._listeners ? this._listeners.push(a) : (this._listeners = [a]);
      }),
      (o.prototype.unsubscribe = function (a) {
        if (!!this._listeners) {
          var l = this._listeners.indexOf(a);
          l !== -1 && this._listeners.splice(l, 1);
        }
      }),
      (o.source = function () {
        var a,
          l = new o(function (d) {
            a = d;
          });
        return { token: l, cancel: a };
      }),
      (Es = o),
      Es
    );
  }
  var Ss, ju;
  function nv() {
    return (
      ju ||
        ((ju = 1),
        (Ss = function (o) {
          return function (a) {
            return o.apply(null, a);
          };
        })),
      Ss
    );
  }
  var Fs, Xu;
  function rv() {
    if (Xu) return Fs;
    Xu = 1;
    var t = We;
    return (
      (Fs = function (r) {
        return t.isObject(r) && r.isAxiosError === !0;
      }),
      Fs
    );
  }
  var Lu = We,
    ov = fu,
    gi = ev,
    iv = Du,
    av = ys;
  function $u(t) {
    var o = new gi(t),
      r = ov(gi.prototype.request, o);
    return (
      Lu.extend(r, gi.prototype, o),
      Lu.extend(r, o),
      (r.create = function (l) {
        return $u(iv(t, l));
      }),
      r
    );
  }
  var $e = $u(av);
  ($e.Axios = gi),
    ($e.CanceledError = vi()),
    ($e.CancelToken = tv()),
    ($e.isCancel = Bu()),
    ($e.VERSION = Ou().version),
    ($e.toFormData = Ru),
    ($e.AxiosError = hr),
    ($e.Cancel = $e.CanceledError),
    ($e.all = function (o) {
      return Promise.all(o);
    }),
    ($e.spread = nv()),
    ($e.isAxiosError = rv()),
    (cs.exports = $e),
    (cs.exports.default = $e),
    (function (t) {
      t.exports = cs.exports;
    })(hu);
  const qu = e1(hu.exports),
    vn = qu.create({
      baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
      withCredentials: !0,
    }),
    Vn = qu.create({
      baseURL: "/opennms/rest".toString() || "/opennms/rest",
      withCredentials: !0,
    });
  var ke = { exports: {} };
  /**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */ (function (t, o) {
    (function () {
      var r,
        a = "4.17.21",
        l = 200,
        c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
        d = "Expected a function",
        p = "Invalid `variable` option passed into `_.template`",
        w = "__lodash_hash_undefined__",
        V = 500,
        g = "__lodash_placeholder__",
        R = 1,
        y = 2,
        F = 4,
        E = 1,
        I = 2,
        C = 1,
        A = 2,
        O = 4,
        _ = 8,
        H = 16,
        k = 32,
        W = 64,
        x = 128,
        z = 256,
        de = 512,
        he = 30,
        ve = "...",
        Ve = 800,
        Re = 16,
        Ze = 1,
        ce = 2,
        Be = 3,
        Ie = 1 / 0,
        Pe = 9007199254740991,
        Yo = 17976931348623157e292,
        ma = 0 / 0,
        Pt = 4294967295,
        MF = Pt - 1,
        ZF = Pt >>> 1,
        bF = [
          ["ary", x],
          ["bind", C],
          ["bindKey", A],
          ["curry", _],
          ["curryRight", H],
          ["flip", de],
          ["partial", k],
          ["partialRight", W],
          ["rearg", z],
        ],
        _r = "[object Arguments]",
        wa = "[object Array]",
        JF = "[object AsyncFunction]",
        Ho = "[object Boolean]",
        Po = "[object Date]",
        EF = "[object DOMException]",
        va = "[object Error]",
        Va = "[object Function]",
        dp = "[object GeneratorFunction]",
        xt = "[object Map]",
        jo = "[object Number]",
        SF = "[object Null]",
        an = "[object Object]",
        hp = "[object Promise]",
        FF = "[object Proxy]",
        Xo = "[object RegExp]",
        Bt = "[object Set]",
        Lo = "[object String]",
        Ta = "[object Symbol]",
        AF = "[object Undefined]",
        $o = "[object WeakMap]",
        WF = "[object WeakSet]",
        qo = "[object ArrayBuffer]",
        Or = "[object DataView]",
        Yl = "[object Float32Array]",
        Hl = "[object Float64Array]",
        Pl = "[object Int8Array]",
        jl = "[object Int16Array]",
        Xl = "[object Int32Array]",
        Ll = "[object Uint8Array]",
        $l = "[object Uint8ClampedArray]",
        ql = "[object Uint16Array]",
        Kl = "[object Uint32Array]",
        CF = /\b__p \+= '';/g,
        xF = /\b(__p \+=) '' \+/g,
        BF = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
        fp = /&(?:amp|lt|gt|quot|#39);/g,
        pp = /[&<>"']/g,
        IF = RegExp(fp.source),
        DF = RegExp(pp.source),
        _F = /<%-([\s\S]+?)%>/g,
        OF = /<%([\s\S]+?)%>/g,
        mp = /<%=([\s\S]+?)%>/g,
        QF = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        zF = /^\w*$/,
        GF =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        ec = /[\\^$.*+?()[\]{}|]/g,
        YF = RegExp(ec.source),
        tc = /^\s+/,
        HF = /\s/,
        PF = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
        jF = /\{\n\/\* \[wrapped with (.+)\] \*/,
        XF = /,? & /,
        LF = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
        $F = /[()=,{}\[\]\/\s]/,
        qF = /\\(\\)?/g,
        KF = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        wp = /\w*$/,
        eA = /^[-+]0x[0-9a-f]+$/i,
        tA = /^0b[01]+$/i,
        nA = /^\[object .+?Constructor\]$/,
        rA = /^0o[0-7]+$/i,
        oA = /^(?:0|[1-9]\d*)$/,
        iA = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        ga = /($^)/,
        aA = /['\n\r\u2028\u2029\\]/g,
        Ua = "\\ud800-\\udfff",
        sA = "\\u0300-\\u036f",
        lA = "\\ufe20-\\ufe2f",
        cA = "\\u20d0-\\u20ff",
        vp = sA + lA + cA,
        Vp = "\\u2700-\\u27bf",
        Tp = "a-z\\xdf-\\xf6\\xf8-\\xff",
        uA = "\\xac\\xb1\\xd7\\xf7",
        dA = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
        hA = "\\u2000-\\u206f",
        fA =
          " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
        gp = "A-Z\\xc0-\\xd6\\xd8-\\xde",
        Up = "\\ufe0e\\ufe0f",
        Rp = uA + dA + hA + fA,
        nc = "['\u2019]",
        pA = "[" + Ua + "]",
        Np = "[" + Rp + "]",
        Ra = "[" + vp + "]",
        yp = "\\d+",
        mA = "[" + Vp + "]",
        kp = "[" + Tp + "]",
        Mp = "[^" + Ua + Rp + yp + Vp + Tp + gp + "]",
        rc = "\\ud83c[\\udffb-\\udfff]",
        wA = "(?:" + Ra + "|" + rc + ")",
        Zp = "[^" + Ua + "]",
        oc = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        ic = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        Qr = "[" + gp + "]",
        bp = "\\u200d",
        Jp = "(?:" + kp + "|" + Mp + ")",
        vA = "(?:" + Qr + "|" + Mp + ")",
        Ep = "(?:" + nc + "(?:d|ll|m|re|s|t|ve))?",
        Sp = "(?:" + nc + "(?:D|LL|M|RE|S|T|VE))?",
        Fp = wA + "?",
        Ap = "[" + Up + "]?",
        VA = "(?:" + bp + "(?:" + [Zp, oc, ic].join("|") + ")" + Ap + Fp + ")*",
        TA = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
        gA = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
        Wp = Ap + Fp + VA,
        UA = "(?:" + [mA, oc, ic].join("|") + ")" + Wp,
        RA = "(?:" + [Zp + Ra + "?", Ra, oc, ic, pA].join("|") + ")",
        NA = RegExp(nc, "g"),
        yA = RegExp(Ra, "g"),
        ac = RegExp(rc + "(?=" + rc + ")|" + RA + Wp, "g"),
        kA = RegExp(
          [
            Qr + "?" + kp + "+" + Ep + "(?=" + [Np, Qr, "$"].join("|") + ")",
            vA + "+" + Sp + "(?=" + [Np, Qr + Jp, "$"].join("|") + ")",
            Qr + "?" + Jp + "+" + Ep,
            Qr + "+" + Sp,
            gA,
            TA,
            yp,
            UA,
          ].join("|"),
          "g"
        ),
        MA = RegExp("[" + bp + Ua + vp + Up + "]"),
        ZA =
          /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
        bA = [
          "Array",
          "Buffer",
          "DataView",
          "Date",
          "Error",
          "Float32Array",
          "Float64Array",
          "Function",
          "Int8Array",
          "Int16Array",
          "Int32Array",
          "Map",
          "Math",
          "Object",
          "Promise",
          "RegExp",
          "Set",
          "String",
          "Symbol",
          "TypeError",
          "Uint8Array",
          "Uint8ClampedArray",
          "Uint16Array",
          "Uint32Array",
          "WeakMap",
          "_",
          "clearTimeout",
          "isFinite",
          "parseInt",
          "setTimeout",
        ],
        JA = -1,
        pe = {};
      (pe[Yl] =
        pe[Hl] =
        pe[Pl] =
        pe[jl] =
        pe[Xl] =
        pe[Ll] =
        pe[$l] =
        pe[ql] =
        pe[Kl] =
          !0),
        (pe[_r] =
          pe[wa] =
          pe[qo] =
          pe[Ho] =
          pe[Or] =
          pe[Po] =
          pe[va] =
          pe[Va] =
          pe[xt] =
          pe[jo] =
          pe[an] =
          pe[Xo] =
          pe[Bt] =
          pe[Lo] =
          pe[$o] =
            !1);
      var fe = {};
      (fe[_r] =
        fe[wa] =
        fe[qo] =
        fe[Or] =
        fe[Ho] =
        fe[Po] =
        fe[Yl] =
        fe[Hl] =
        fe[Pl] =
        fe[jl] =
        fe[Xl] =
        fe[xt] =
        fe[jo] =
        fe[an] =
        fe[Xo] =
        fe[Bt] =
        fe[Lo] =
        fe[Ta] =
        fe[Ll] =
        fe[$l] =
        fe[ql] =
        fe[Kl] =
          !0),
        (fe[va] = fe[Va] = fe[$o] = !1);
      var EA = {
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          Ç: "C",
          ç: "c",
          Ð: "D",
          ð: "d",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          Ñ: "N",
          ñ: "n",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          Ý: "Y",
          ý: "y",
          ÿ: "y",
          Æ: "Ae",
          æ: "ae",
          Þ: "Th",
          þ: "th",
          ß: "ss",
          Ā: "A",
          Ă: "A",
          Ą: "A",
          ā: "a",
          ă: "a",
          ą: "a",
          Ć: "C",
          Ĉ: "C",
          Ċ: "C",
          Č: "C",
          ć: "c",
          ĉ: "c",
          ċ: "c",
          č: "c",
          Ď: "D",
          Đ: "D",
          ď: "d",
          đ: "d",
          Ē: "E",
          Ĕ: "E",
          Ė: "E",
          Ę: "E",
          Ě: "E",
          ē: "e",
          ĕ: "e",
          ė: "e",
          ę: "e",
          ě: "e",
          Ĝ: "G",
          Ğ: "G",
          Ġ: "G",
          Ģ: "G",
          ĝ: "g",
          ğ: "g",
          ġ: "g",
          ģ: "g",
          Ĥ: "H",
          Ħ: "H",
          ĥ: "h",
          ħ: "h",
          Ĩ: "I",
          Ī: "I",
          Ĭ: "I",
          Į: "I",
          İ: "I",
          ĩ: "i",
          ī: "i",
          ĭ: "i",
          į: "i",
          ı: "i",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          ĸ: "k",
          Ĺ: "L",
          Ļ: "L",
          Ľ: "L",
          Ŀ: "L",
          Ł: "L",
          ĺ: "l",
          ļ: "l",
          ľ: "l",
          ŀ: "l",
          ł: "l",
          Ń: "N",
          Ņ: "N",
          Ň: "N",
          Ŋ: "N",
          ń: "n",
          ņ: "n",
          ň: "n",
          ŋ: "n",
          Ō: "O",
          Ŏ: "O",
          Ő: "O",
          ō: "o",
          ŏ: "o",
          ő: "o",
          Ŕ: "R",
          Ŗ: "R",
          Ř: "R",
          ŕ: "r",
          ŗ: "r",
          ř: "r",
          Ś: "S",
          Ŝ: "S",
          Ş: "S",
          Š: "S",
          ś: "s",
          ŝ: "s",
          ş: "s",
          š: "s",
          Ţ: "T",
          Ť: "T",
          Ŧ: "T",
          ţ: "t",
          ť: "t",
          ŧ: "t",
          Ũ: "U",
          Ū: "U",
          Ŭ: "U",
          Ů: "U",
          Ű: "U",
          Ų: "U",
          ũ: "u",
          ū: "u",
          ŭ: "u",
          ů: "u",
          ű: "u",
          ų: "u",
          Ŵ: "W",
          ŵ: "w",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Ź: "Z",
          Ż: "Z",
          Ž: "Z",
          ź: "z",
          ż: "z",
          ž: "z",
          Ĳ: "IJ",
          ĳ: "ij",
          Œ: "Oe",
          œ: "oe",
          ŉ: "'n",
          ſ: "s",
        },
        SA = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        FA = {
          "&amp;": "&",
          "&lt;": "<",
          "&gt;": ">",
          "&quot;": '"',
          "&#39;": "'",
        },
        AA = {
          "\\": "\\",
          "'": "'",
          "\n": "n",
          "\r": "r",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        WA = parseFloat,
        CA = parseInt,
        Cp = typeof no == "object" && no && no.Object === Object && no,
        xA = typeof self == "object" && self && self.Object === Object && self,
        De = Cp || xA || Function("return this")(),
        sc = o && !o.nodeType && o,
        tr = sc && !0 && t && !t.nodeType && t,
        xp = tr && tr.exports === sc,
        lc = xp && Cp.process,
        Rt = (function () {
          try {
            var T = tr && tr.require && tr.require("util").types;
            return T || (lc && lc.binding && lc.binding("util"));
          } catch {}
        })(),
        Bp = Rt && Rt.isArrayBuffer,
        Ip = Rt && Rt.isDate,
        Dp = Rt && Rt.isMap,
        _p = Rt && Rt.isRegExp,
        Op = Rt && Rt.isSet,
        Qp = Rt && Rt.isTypedArray;
      function ht(T, M, N) {
        switch (N.length) {
          case 0:
            return T.call(M);
          case 1:
            return T.call(M, N[0]);
          case 2:
            return T.call(M, N[0], N[1]);
          case 3:
            return T.call(M, N[0], N[1], N[2]);
        }
        return T.apply(M, N);
      }
      function BA(T, M, N, B) {
        for (var P = -1, oe = T == null ? 0 : T.length; ++P < oe; ) {
          var Je = T[P];
          M(B, Je, N(Je), T);
        }
        return B;
      }
      function Nt(T, M) {
        for (
          var N = -1, B = T == null ? 0 : T.length;
          ++N < B && M(T[N], N, T) !== !1;

        );
        return T;
      }
      function IA(T, M) {
        for (var N = T == null ? 0 : T.length; N-- && M(T[N], N, T) !== !1; );
        return T;
      }
      function zp(T, M) {
        for (var N = -1, B = T == null ? 0 : T.length; ++N < B; )
          if (!M(T[N], N, T)) return !1;
        return !0;
      }
      function bn(T, M) {
        for (
          var N = -1, B = T == null ? 0 : T.length, P = 0, oe = [];
          ++N < B;

        ) {
          var Je = T[N];
          M(Je, N, T) && (oe[P++] = Je);
        }
        return oe;
      }
      function Na(T, M) {
        var N = T == null ? 0 : T.length;
        return !!N && zr(T, M, 0) > -1;
      }
      function cc(T, M, N) {
        for (var B = -1, P = T == null ? 0 : T.length; ++B < P; )
          if (N(M, T[B])) return !0;
        return !1;
      }
      function me(T, M) {
        for (var N = -1, B = T == null ? 0 : T.length, P = Array(B); ++N < B; )
          P[N] = M(T[N], N, T);
        return P;
      }
      function Jn(T, M) {
        for (var N = -1, B = M.length, P = T.length; ++N < B; ) T[P + N] = M[N];
        return T;
      }
      function uc(T, M, N, B) {
        var P = -1,
          oe = T == null ? 0 : T.length;
        for (B && oe && (N = T[++P]); ++P < oe; ) N = M(N, T[P], P, T);
        return N;
      }
      function DA(T, M, N, B) {
        var P = T == null ? 0 : T.length;
        for (B && P && (N = T[--P]); P--; ) N = M(N, T[P], P, T);
        return N;
      }
      function dc(T, M) {
        for (var N = -1, B = T == null ? 0 : T.length; ++N < B; )
          if (M(T[N], N, T)) return !0;
        return !1;
      }
      var _A = hc("length");
      function OA(T) {
        return T.split("");
      }
      function QA(T) {
        return T.match(LF) || [];
      }
      function Gp(T, M, N) {
        var B;
        return (
          N(T, function (P, oe, Je) {
            if (M(P, oe, Je)) return (B = oe), !1;
          }),
          B
        );
      }
      function ya(T, M, N, B) {
        for (var P = T.length, oe = N + (B ? 1 : -1); B ? oe-- : ++oe < P; )
          if (M(T[oe], oe, T)) return oe;
        return -1;
      }
      function zr(T, M, N) {
        return M === M ? eW(T, M, N) : ya(T, Yp, N);
      }
      function zA(T, M, N, B) {
        for (var P = N - 1, oe = T.length; ++P < oe; ) if (B(T[P], M)) return P;
        return -1;
      }
      function Yp(T) {
        return T !== T;
      }
      function Hp(T, M) {
        var N = T == null ? 0 : T.length;
        return N ? pc(T, M) / N : ma;
      }
      function hc(T) {
        return function (M) {
          return M == null ? r : M[T];
        };
      }
      function fc(T) {
        return function (M) {
          return T == null ? r : T[M];
        };
      }
      function Pp(T, M, N, B, P) {
        return (
          P(T, function (oe, Je, ue) {
            N = B ? ((B = !1), oe) : M(N, oe, Je, ue);
          }),
          N
        );
      }
      function GA(T, M) {
        var N = T.length;
        for (T.sort(M); N--; ) T[N] = T[N].value;
        return T;
      }
      function pc(T, M) {
        for (var N, B = -1, P = T.length; ++B < P; ) {
          var oe = M(T[B]);
          oe !== r && (N = N === r ? oe : N + oe);
        }
        return N;
      }
      function mc(T, M) {
        for (var N = -1, B = Array(T); ++N < T; ) B[N] = M(N);
        return B;
      }
      function YA(T, M) {
        return me(M, function (N) {
          return [N, T[N]];
        });
      }
      function jp(T) {
        return T && T.slice(0, qp(T) + 1).replace(tc, "");
      }
      function ft(T) {
        return function (M) {
          return T(M);
        };
      }
      function wc(T, M) {
        return me(M, function (N) {
          return T[N];
        });
      }
      function Ko(T, M) {
        return T.has(M);
      }
      function Xp(T, M) {
        for (var N = -1, B = T.length; ++N < B && zr(M, T[N], 0) > -1; );
        return N;
      }
      function Lp(T, M) {
        for (var N = T.length; N-- && zr(M, T[N], 0) > -1; );
        return N;
      }
      function HA(T, M) {
        for (var N = T.length, B = 0; N--; ) T[N] === M && ++B;
        return B;
      }
      var PA = fc(EA),
        jA = fc(SA);
      function XA(T) {
        return "\\" + AA[T];
      }
      function LA(T, M) {
        return T == null ? r : T[M];
      }
      function Gr(T) {
        return MA.test(T);
      }
      function $A(T) {
        return ZA.test(T);
      }
      function qA(T) {
        for (var M, N = []; !(M = T.next()).done; ) N.push(M.value);
        return N;
      }
      function vc(T) {
        var M = -1,
          N = Array(T.size);
        return (
          T.forEach(function (B, P) {
            N[++M] = [P, B];
          }),
          N
        );
      }
      function $p(T, M) {
        return function (N) {
          return T(M(N));
        };
      }
      function En(T, M) {
        for (var N = -1, B = T.length, P = 0, oe = []; ++N < B; ) {
          var Je = T[N];
          (Je === M || Je === g) && ((T[N] = g), (oe[P++] = N));
        }
        return oe;
      }
      function ka(T) {
        var M = -1,
          N = Array(T.size);
        return (
          T.forEach(function (B) {
            N[++M] = B;
          }),
          N
        );
      }
      function KA(T) {
        var M = -1,
          N = Array(T.size);
        return (
          T.forEach(function (B) {
            N[++M] = [B, B];
          }),
          N
        );
      }
      function eW(T, M, N) {
        for (var B = N - 1, P = T.length; ++B < P; ) if (T[B] === M) return B;
        return -1;
      }
      function tW(T, M, N) {
        for (var B = N + 1; B--; ) if (T[B] === M) return B;
        return B;
      }
      function Yr(T) {
        return Gr(T) ? rW(T) : _A(T);
      }
      function It(T) {
        return Gr(T) ? oW(T) : OA(T);
      }
      function qp(T) {
        for (var M = T.length; M-- && HF.test(T.charAt(M)); );
        return M;
      }
      var nW = fc(FA);
      function rW(T) {
        for (var M = (ac.lastIndex = 0); ac.test(T); ) ++M;
        return M;
      }
      function oW(T) {
        return T.match(ac) || [];
      }
      function iW(T) {
        return T.match(kA) || [];
      }
      var aW = function T(M) {
          M = M == null ? De : Hr.defaults(De.Object(), M, Hr.pick(De, bA));
          var N = M.Array,
            B = M.Date,
            P = M.Error,
            oe = M.Function,
            Je = M.Math,
            ue = M.Object,
            Vc = M.RegExp,
            sW = M.String,
            yt = M.TypeError,
            Ma = N.prototype,
            lW = oe.prototype,
            Pr = ue.prototype,
            Za = M["__core-js_shared__"],
            ba = lW.toString,
            se = Pr.hasOwnProperty,
            cW = 0,
            Kp = (function () {
              var e = /[^.]+$/.exec((Za && Za.keys && Za.keys.IE_PROTO) || "");
              return e ? "Symbol(src)_1." + e : "";
            })(),
            Ja = Pr.toString,
            uW = ba.call(ue),
            dW = De._,
            hW = Vc(
              "^" +
                ba
                  .call(se)
                  .replace(ec, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            ),
            Ea = xp ? M.Buffer : r,
            Sn = M.Symbol,
            Sa = M.Uint8Array,
            em = Ea ? Ea.allocUnsafe : r,
            Fa = $p(ue.getPrototypeOf, ue),
            tm = ue.create,
            nm = Pr.propertyIsEnumerable,
            Aa = Ma.splice,
            rm = Sn ? Sn.isConcatSpreadable : r,
            ei = Sn ? Sn.iterator : r,
            nr = Sn ? Sn.toStringTag : r,
            Wa = (function () {
              try {
                var e = sr(ue, "defineProperty");
                return e({}, "", {}), e;
              } catch {}
            })(),
            fW = M.clearTimeout !== De.clearTimeout && M.clearTimeout,
            pW = B && B.now !== De.Date.now && B.now,
            mW = M.setTimeout !== De.setTimeout && M.setTimeout,
            Ca = Je.ceil,
            xa = Je.floor,
            Tc = ue.getOwnPropertySymbols,
            wW = Ea ? Ea.isBuffer : r,
            om = M.isFinite,
            vW = Ma.join,
            VW = $p(ue.keys, ue),
            Ee = Je.max,
            Ge = Je.min,
            TW = B.now,
            gW = M.parseInt,
            im = Je.random,
            UW = Ma.reverse,
            gc = sr(M, "DataView"),
            ti = sr(M, "Map"),
            Uc = sr(M, "Promise"),
            jr = sr(M, "Set"),
            ni = sr(M, "WeakMap"),
            ri = sr(ue, "create"),
            Ba = ni && new ni(),
            Xr = {},
            RW = lr(gc),
            NW = lr(ti),
            yW = lr(Uc),
            kW = lr(jr),
            MW = lr(ni),
            Ia = Sn ? Sn.prototype : r,
            oi = Ia ? Ia.valueOf : r,
            am = Ia ? Ia.toString : r;
          function h(e) {
            if (Te(e) && !j(e) && !(e instanceof te)) {
              if (e instanceof kt) return e;
              if (se.call(e, "__wrapped__")) return sw(e);
            }
            return new kt(e);
          }
          var Lr = (function () {
            function e() {}
            return function (n) {
              if (!we(n)) return {};
              if (tm) return tm(n);
              e.prototype = n;
              var i = new e();
              return (e.prototype = r), i;
            };
          })();
          function Da() {}
          function kt(e, n) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__chain__ = !!n),
              (this.__index__ = 0),
              (this.__values__ = r);
          }
          (h.templateSettings = {
            escape: _F,
            evaluate: OF,
            interpolate: mp,
            variable: "",
            imports: { _: h },
          }),
            (h.prototype = Da.prototype),
            (h.prototype.constructor = h),
            (kt.prototype = Lr(Da.prototype)),
            (kt.prototype.constructor = kt);
          function te(e) {
            (this.__wrapped__ = e),
              (this.__actions__ = []),
              (this.__dir__ = 1),
              (this.__filtered__ = !1),
              (this.__iteratees__ = []),
              (this.__takeCount__ = Pt),
              (this.__views__ = []);
          }
          function ZW() {
            var e = new te(this.__wrapped__);
            return (
              (e.__actions__ = tt(this.__actions__)),
              (e.__dir__ = this.__dir__),
              (e.__filtered__ = this.__filtered__),
              (e.__iteratees__ = tt(this.__iteratees__)),
              (e.__takeCount__ = this.__takeCount__),
              (e.__views__ = tt(this.__views__)),
              e
            );
          }
          function bW() {
            if (this.__filtered__) {
              var e = new te(this);
              (e.__dir__ = -1), (e.__filtered__ = !0);
            } else (e = this.clone()), (e.__dir__ *= -1);
            return e;
          }
          function JW() {
            var e = this.__wrapped__.value(),
              n = this.__dir__,
              i = j(e),
              s = n < 0,
              u = i ? e.length : 0,
              f = OC(0, u, this.__views__),
              m = f.start,
              v = f.end,
              U = v - m,
              Z = s ? v : m - 1,
              b = this.__iteratees__,
              J = b.length,
              S = 0,
              D = Ge(U, this.__takeCount__);
            if (!i || (!s && u == U && D == U)) return Em(e, this.__actions__);
            var G = [];
            e: for (; U-- && S < D; ) {
              Z += n;
              for (var L = -1, Y = e[Z]; ++L < J; ) {
                var ee = b[L],
                  ne = ee.iteratee,
                  wt = ee.type,
                  Le = ne(Y);
                if (wt == ce) Y = Le;
                else if (!Le) {
                  if (wt == Ze) continue e;
                  break e;
                }
              }
              G[S++] = Y;
            }
            return G;
          }
          (te.prototype = Lr(Da.prototype)), (te.prototype.constructor = te);
          function rr(e) {
            var n = -1,
              i = e == null ? 0 : e.length;
            for (this.clear(); ++n < i; ) {
              var s = e[n];
              this.set(s[0], s[1]);
            }
          }
          function EW() {
            (this.__data__ = ri ? ri(null) : {}), (this.size = 0);
          }
          function SW(e) {
            var n = this.has(e) && delete this.__data__[e];
            return (this.size -= n ? 1 : 0), n;
          }
          function FW(e) {
            var n = this.__data__;
            if (ri) {
              var i = n[e];
              return i === w ? r : i;
            }
            return se.call(n, e) ? n[e] : r;
          }
          function AW(e) {
            var n = this.__data__;
            return ri ? n[e] !== r : se.call(n, e);
          }
          function WW(e, n) {
            var i = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (i[e] = ri && n === r ? w : n),
              this
            );
          }
          (rr.prototype.clear = EW),
            (rr.prototype.delete = SW),
            (rr.prototype.get = FW),
            (rr.prototype.has = AW),
            (rr.prototype.set = WW);
          function sn(e) {
            var n = -1,
              i = e == null ? 0 : e.length;
            for (this.clear(); ++n < i; ) {
              var s = e[n];
              this.set(s[0], s[1]);
            }
          }
          function CW() {
            (this.__data__ = []), (this.size = 0);
          }
          function xW(e) {
            var n = this.__data__,
              i = _a(n, e);
            if (i < 0) return !1;
            var s = n.length - 1;
            return i == s ? n.pop() : Aa.call(n, i, 1), --this.size, !0;
          }
          function BW(e) {
            var n = this.__data__,
              i = _a(n, e);
            return i < 0 ? r : n[i][1];
          }
          function IW(e) {
            return _a(this.__data__, e) > -1;
          }
          function DW(e, n) {
            var i = this.__data__,
              s = _a(i, e);
            return s < 0 ? (++this.size, i.push([e, n])) : (i[s][1] = n), this;
          }
          (sn.prototype.clear = CW),
            (sn.prototype.delete = xW),
            (sn.prototype.get = BW),
            (sn.prototype.has = IW),
            (sn.prototype.set = DW);
          function ln(e) {
            var n = -1,
              i = e == null ? 0 : e.length;
            for (this.clear(); ++n < i; ) {
              var s = e[n];
              this.set(s[0], s[1]);
            }
          }
          function _W() {
            (this.size = 0),
              (this.__data__ = {
                hash: new rr(),
                map: new (ti || sn)(),
                string: new rr(),
              });
          }
          function OW(e) {
            var n = qa(this, e).delete(e);
            return (this.size -= n ? 1 : 0), n;
          }
          function QW(e) {
            return qa(this, e).get(e);
          }
          function zW(e) {
            return qa(this, e).has(e);
          }
          function GW(e, n) {
            var i = qa(this, e),
              s = i.size;
            return i.set(e, n), (this.size += i.size == s ? 0 : 1), this;
          }
          (ln.prototype.clear = _W),
            (ln.prototype.delete = OW),
            (ln.prototype.get = QW),
            (ln.prototype.has = zW),
            (ln.prototype.set = GW);
          function or(e) {
            var n = -1,
              i = e == null ? 0 : e.length;
            for (this.__data__ = new ln(); ++n < i; ) this.add(e[n]);
          }
          function YW(e) {
            return this.__data__.set(e, w), this;
          }
          function HW(e) {
            return this.__data__.has(e);
          }
          (or.prototype.add = or.prototype.push = YW), (or.prototype.has = HW);
          function Dt(e) {
            var n = (this.__data__ = new sn(e));
            this.size = n.size;
          }
          function PW() {
            (this.__data__ = new sn()), (this.size = 0);
          }
          function jW(e) {
            var n = this.__data__,
              i = n.delete(e);
            return (this.size = n.size), i;
          }
          function XW(e) {
            return this.__data__.get(e);
          }
          function LW(e) {
            return this.__data__.has(e);
          }
          function $W(e, n) {
            var i = this.__data__;
            if (i instanceof sn) {
              var s = i.__data__;
              if (!ti || s.length < l - 1)
                return s.push([e, n]), (this.size = ++i.size), this;
              i = this.__data__ = new ln(s);
            }
            return i.set(e, n), (this.size = i.size), this;
          }
          (Dt.prototype.clear = PW),
            (Dt.prototype.delete = jW),
            (Dt.prototype.get = XW),
            (Dt.prototype.has = LW),
            (Dt.prototype.set = $W);
          function sm(e, n) {
            var i = j(e),
              s = !i && cr(e),
              u = !i && !s && xn(e),
              f = !i && !s && !u && eo(e),
              m = i || s || u || f,
              v = m ? mc(e.length, sW) : [],
              U = v.length;
            for (var Z in e)
              (n || se.call(e, Z)) &&
                !(
                  m &&
                  (Z == "length" ||
                    (u && (Z == "offset" || Z == "parent")) ||
                    (f &&
                      (Z == "buffer" ||
                        Z == "byteLength" ||
                        Z == "byteOffset")) ||
                    hn(Z, U))
                ) &&
                v.push(Z);
            return v;
          }
          function lm(e) {
            var n = e.length;
            return n ? e[Fc(0, n - 1)] : r;
          }
          function qW(e, n) {
            return Ka(tt(e), ir(n, 0, e.length));
          }
          function KW(e) {
            return Ka(tt(e));
          }
          function Rc(e, n, i) {
            ((i !== r && !_t(e[n], i)) || (i === r && !(n in e))) &&
              cn(e, n, i);
          }
          function ii(e, n, i) {
            var s = e[n];
            (!(se.call(e, n) && _t(s, i)) || (i === r && !(n in e))) &&
              cn(e, n, i);
          }
          function _a(e, n) {
            for (var i = e.length; i--; ) if (_t(e[i][0], n)) return i;
            return -1;
          }
          function eC(e, n, i, s) {
            return (
              Fn(e, function (u, f, m) {
                n(s, u, i(u), m);
              }),
              s
            );
          }
          function cm(e, n) {
            return e && Xt(n, Ae(n), e);
          }
          function tC(e, n) {
            return e && Xt(n, rt(n), e);
          }
          function cn(e, n, i) {
            n == "__proto__" && Wa
              ? Wa(e, n, {
                  configurable: !0,
                  enumerable: !0,
                  value: i,
                  writable: !0,
                })
              : (e[n] = i);
          }
          function Nc(e, n) {
            for (var i = -1, s = n.length, u = N(s), f = e == null; ++i < s; )
              u[i] = f ? r : ru(e, n[i]);
            return u;
          }
          function ir(e, n, i) {
            return (
              e === e &&
                (i !== r && (e = e <= i ? e : i),
                n !== r && (e = e >= n ? e : n)),
              e
            );
          }
          function Mt(e, n, i, s, u, f) {
            var m,
              v = n & R,
              U = n & y,
              Z = n & F;
            if ((i && (m = u ? i(e, s, u, f) : i(e)), m !== r)) return m;
            if (!we(e)) return e;
            var b = j(e);
            if (b) {
              if (((m = zC(e)), !v)) return tt(e, m);
            } else {
              var J = Ye(e),
                S = J == Va || J == dp;
              if (xn(e)) return Am(e, v);
              if (J == an || J == _r || (S && !u)) {
                if (((m = U || S ? {} : qm(e)), !v))
                  return U ? FC(e, tC(m, e)) : SC(e, cm(m, e));
              } else {
                if (!fe[J]) return u ? e : {};
                m = GC(e, J, v);
              }
            }
            f || (f = new Dt());
            var D = f.get(e);
            if (D) return D;
            f.set(e, m),
              Zw(e)
                ? e.forEach(function (Y) {
                    m.add(Mt(Y, n, i, Y, e, f));
                  })
                : kw(e) &&
                  e.forEach(function (Y, ee) {
                    m.set(ee, Mt(Y, n, i, ee, e, f));
                  });
            var G = Z ? (U ? zc : Qc) : U ? rt : Ae,
              L = b ? r : G(e);
            return (
              Nt(L || e, function (Y, ee) {
                L && ((ee = Y), (Y = e[ee])), ii(m, ee, Mt(Y, n, i, ee, e, f));
              }),
              m
            );
          }
          function nC(e) {
            var n = Ae(e);
            return function (i) {
              return um(i, e, n);
            };
          }
          function um(e, n, i) {
            var s = i.length;
            if (e == null) return !s;
            for (e = ue(e); s--; ) {
              var u = i[s],
                f = n[u],
                m = e[u];
              if ((m === r && !(u in e)) || !f(m)) return !1;
            }
            return !0;
          }
          function dm(e, n, i) {
            if (typeof e != "function") throw new yt(d);
            return hi(function () {
              e.apply(r, i);
            }, n);
          }
          function ai(e, n, i, s) {
            var u = -1,
              f = Na,
              m = !0,
              v = e.length,
              U = [],
              Z = n.length;
            if (!v) return U;
            i && (n = me(n, ft(i))),
              s
                ? ((f = cc), (m = !1))
                : n.length >= l && ((f = Ko), (m = !1), (n = new or(n)));
            e: for (; ++u < v; ) {
              var b = e[u],
                J = i == null ? b : i(b);
              if (((b = s || b !== 0 ? b : 0), m && J === J)) {
                for (var S = Z; S--; ) if (n[S] === J) continue e;
                U.push(b);
              } else f(n, J, s) || U.push(b);
            }
            return U;
          }
          var Fn = Im(jt),
            hm = Im(kc, !0);
          function rC(e, n) {
            var i = !0;
            return (
              Fn(e, function (s, u, f) {
                return (i = !!n(s, u, f)), i;
              }),
              i
            );
          }
          function Oa(e, n, i) {
            for (var s = -1, u = e.length; ++s < u; ) {
              var f = e[s],
                m = n(f);
              if (m != null && (v === r ? m === m && !mt(m) : i(m, v)))
                var v = m,
                  U = f;
            }
            return U;
          }
          function oC(e, n, i, s) {
            var u = e.length;
            for (
              i = X(i),
                i < 0 && (i = -i > u ? 0 : u + i),
                s = s === r || s > u ? u : X(s),
                s < 0 && (s += u),
                s = i > s ? 0 : Jw(s);
              i < s;

            )
              e[i++] = n;
            return e;
          }
          function fm(e, n) {
            var i = [];
            return (
              Fn(e, function (s, u, f) {
                n(s, u, f) && i.push(s);
              }),
              i
            );
          }
          function _e(e, n, i, s, u) {
            var f = -1,
              m = e.length;
            for (i || (i = HC), u || (u = []); ++f < m; ) {
              var v = e[f];
              n > 0 && i(v)
                ? n > 1
                  ? _e(v, n - 1, i, s, u)
                  : Jn(u, v)
                : s || (u[u.length] = v);
            }
            return u;
          }
          var yc = Dm(),
            pm = Dm(!0);
          function jt(e, n) {
            return e && yc(e, n, Ae);
          }
          function kc(e, n) {
            return e && pm(e, n, Ae);
          }
          function Qa(e, n) {
            return bn(n, function (i) {
              return fn(e[i]);
            });
          }
          function ar(e, n) {
            n = Wn(n, e);
            for (var i = 0, s = n.length; e != null && i < s; )
              e = e[Lt(n[i++])];
            return i && i == s ? e : r;
          }
          function mm(e, n, i) {
            var s = n(e);
            return j(e) ? s : Jn(s, i(e));
          }
          function je(e) {
            return e == null
              ? e === r
                ? AF
                : SF
              : nr && nr in ue(e)
              ? _C(e)
              : KC(e);
          }
          function Mc(e, n) {
            return e > n;
          }
          function iC(e, n) {
            return e != null && se.call(e, n);
          }
          function aC(e, n) {
            return e != null && n in ue(e);
          }
          function sC(e, n, i) {
            return e >= Ge(n, i) && e < Ee(n, i);
          }
          function Zc(e, n, i) {
            for (
              var s = i ? cc : Na,
                u = e[0].length,
                f = e.length,
                m = f,
                v = N(f),
                U = 1 / 0,
                Z = [];
              m--;

            ) {
              var b = e[m];
              m && n && (b = me(b, ft(n))),
                (U = Ge(b.length, U)),
                (v[m] =
                  !i && (n || (u >= 120 && b.length >= 120))
                    ? new or(m && b)
                    : r);
            }
            b = e[0];
            var J = -1,
              S = v[0];
            e: for (; ++J < u && Z.length < U; ) {
              var D = b[J],
                G = n ? n(D) : D;
              if (((D = i || D !== 0 ? D : 0), !(S ? Ko(S, G) : s(Z, G, i)))) {
                for (m = f; --m; ) {
                  var L = v[m];
                  if (!(L ? Ko(L, G) : s(e[m], G, i))) continue e;
                }
                S && S.push(G), Z.push(D);
              }
            }
            return Z;
          }
          function lC(e, n, i, s) {
            return (
              jt(e, function (u, f, m) {
                n(s, i(u), f, m);
              }),
              s
            );
          }
          function si(e, n, i) {
            (n = Wn(n, e)), (e = nw(e, n));
            var s = e == null ? e : e[Lt(bt(n))];
            return s == null ? r : ht(s, e, i);
          }
          function wm(e) {
            return Te(e) && je(e) == _r;
          }
          function cC(e) {
            return Te(e) && je(e) == qo;
          }
          function uC(e) {
            return Te(e) && je(e) == Po;
          }
          function li(e, n, i, s, u) {
            return e === n
              ? !0
              : e == null || n == null || (!Te(e) && !Te(n))
              ? e !== e && n !== n
              : dC(e, n, i, s, li, u);
          }
          function dC(e, n, i, s, u, f) {
            var m = j(e),
              v = j(n),
              U = m ? wa : Ye(e),
              Z = v ? wa : Ye(n);
            (U = U == _r ? an : U), (Z = Z == _r ? an : Z);
            var b = U == an,
              J = Z == an,
              S = U == Z;
            if (S && xn(e)) {
              if (!xn(n)) return !1;
              (m = !0), (b = !1);
            }
            if (S && !b)
              return (
                f || (f = new Dt()),
                m || eo(e) ? Xm(e, n, i, s, u, f) : IC(e, n, U, i, s, u, f)
              );
            if (!(i & E)) {
              var D = b && se.call(e, "__wrapped__"),
                G = J && se.call(n, "__wrapped__");
              if (D || G) {
                var L = D ? e.value() : e,
                  Y = G ? n.value() : n;
                return f || (f = new Dt()), u(L, Y, i, s, f);
              }
            }
            return S ? (f || (f = new Dt()), DC(e, n, i, s, u, f)) : !1;
          }
          function hC(e) {
            return Te(e) && Ye(e) == xt;
          }
          function bc(e, n, i, s) {
            var u = i.length,
              f = u,
              m = !s;
            if (e == null) return !f;
            for (e = ue(e); u--; ) {
              var v = i[u];
              if (m && v[2] ? v[1] !== e[v[0]] : !(v[0] in e)) return !1;
            }
            for (; ++u < f; ) {
              v = i[u];
              var U = v[0],
                Z = e[U],
                b = v[1];
              if (m && v[2]) {
                if (Z === r && !(U in e)) return !1;
              } else {
                var J = new Dt();
                if (s) var S = s(Z, b, U, e, n, J);
                if (!(S === r ? li(b, Z, E | I, s, J) : S)) return !1;
              }
            }
            return !0;
          }
          function vm(e) {
            if (!we(e) || jC(e)) return !1;
            var n = fn(e) ? hW : nA;
            return n.test(lr(e));
          }
          function fC(e) {
            return Te(e) && je(e) == Xo;
          }
          function pC(e) {
            return Te(e) && Ye(e) == Bt;
          }
          function mC(e) {
            return Te(e) && is(e.length) && !!pe[je(e)];
          }
          function Vm(e) {
            return typeof e == "function"
              ? e
              : e == null
              ? ot
              : typeof e == "object"
              ? j(e)
                ? Um(e[0], e[1])
                : gm(e)
              : _w(e);
          }
          function Jc(e) {
            if (!di(e)) return VW(e);
            var n = [];
            for (var i in ue(e))
              se.call(e, i) && i != "constructor" && n.push(i);
            return n;
          }
          function wC(e) {
            if (!we(e)) return qC(e);
            var n = di(e),
              i = [];
            for (var s in e)
              (s == "constructor" && (n || !se.call(e, s))) || i.push(s);
            return i;
          }
          function Ec(e, n) {
            return e < n;
          }
          function Tm(e, n) {
            var i = -1,
              s = nt(e) ? N(e.length) : [];
            return (
              Fn(e, function (u, f, m) {
                s[++i] = n(u, f, m);
              }),
              s
            );
          }
          function gm(e) {
            var n = Yc(e);
            return n.length == 1 && n[0][2]
              ? ew(n[0][0], n[0][1])
              : function (i) {
                  return i === e || bc(i, e, n);
                };
          }
          function Um(e, n) {
            return Pc(e) && Km(n)
              ? ew(Lt(e), n)
              : function (i) {
                  var s = ru(i, e);
                  return s === r && s === n ? ou(i, e) : li(n, s, E | I);
                };
          }
          function za(e, n, i, s, u) {
            e !== n &&
              yc(
                n,
                function (f, m) {
                  if ((u || (u = new Dt()), we(f))) vC(e, n, m, i, za, s, u);
                  else {
                    var v = s ? s(Xc(e, m), f, m + "", e, n, u) : r;
                    v === r && (v = f), Rc(e, m, v);
                  }
                },
                rt
              );
          }
          function vC(e, n, i, s, u, f, m) {
            var v = Xc(e, i),
              U = Xc(n, i),
              Z = m.get(U);
            if (Z) {
              Rc(e, i, Z);
              return;
            }
            var b = f ? f(v, U, i + "", e, n, m) : r,
              J = b === r;
            if (J) {
              var S = j(U),
                D = !S && xn(U),
                G = !S && !D && eo(U);
              (b = U),
                S || D || G
                  ? j(v)
                    ? (b = v)
                    : Ne(v)
                    ? (b = tt(v))
                    : D
                    ? ((J = !1), (b = Am(U, !0)))
                    : G
                    ? ((J = !1), (b = Wm(U, !0)))
                    : (b = [])
                  : fi(U) || cr(U)
                  ? ((b = v),
                    cr(v) ? (b = Ew(v)) : (!we(v) || fn(v)) && (b = qm(U)))
                  : (J = !1);
            }
            J && (m.set(U, b), u(b, U, s, f, m), m.delete(U)), Rc(e, i, b);
          }
          function Rm(e, n) {
            var i = e.length;
            if (!!i) return (n += n < 0 ? i : 0), hn(n, i) ? e[n] : r;
          }
          function Nm(e, n, i) {
            n.length
              ? (n = me(n, function (f) {
                  return j(f)
                    ? function (m) {
                        return ar(m, f.length === 1 ? f[0] : f);
                      }
                    : f;
                }))
              : (n = [ot]);
            var s = -1;
            n = me(n, ft(Q()));
            var u = Tm(e, function (f, m, v) {
              var U = me(n, function (Z) {
                return Z(f);
              });
              return { criteria: U, index: ++s, value: f };
            });
            return GA(u, function (f, m) {
              return EC(f, m, i);
            });
          }
          function VC(e, n) {
            return ym(e, n, function (i, s) {
              return ou(e, s);
            });
          }
          function ym(e, n, i) {
            for (var s = -1, u = n.length, f = {}; ++s < u; ) {
              var m = n[s],
                v = ar(e, m);
              i(v, m) && ci(f, Wn(m, e), v);
            }
            return f;
          }
          function TC(e) {
            return function (n) {
              return ar(n, e);
            };
          }
          function Sc(e, n, i, s) {
            var u = s ? zA : zr,
              f = -1,
              m = n.length,
              v = e;
            for (e === n && (n = tt(n)), i && (v = me(e, ft(i))); ++f < m; )
              for (
                var U = 0, Z = n[f], b = i ? i(Z) : Z;
                (U = u(v, b, U, s)) > -1;

              )
                v !== e && Aa.call(v, U, 1), Aa.call(e, U, 1);
            return e;
          }
          function km(e, n) {
            for (var i = e ? n.length : 0, s = i - 1; i--; ) {
              var u = n[i];
              if (i == s || u !== f) {
                var f = u;
                hn(u) ? Aa.call(e, u, 1) : Cc(e, u);
              }
            }
            return e;
          }
          function Fc(e, n) {
            return e + xa(im() * (n - e + 1));
          }
          function gC(e, n, i, s) {
            for (var u = -1, f = Ee(Ca((n - e) / (i || 1)), 0), m = N(f); f--; )
              (m[s ? f : ++u] = e), (e += i);
            return m;
          }
          function Ac(e, n) {
            var i = "";
            if (!e || n < 1 || n > Pe) return i;
            do n % 2 && (i += e), (n = xa(n / 2)), n && (e += e);
            while (n);
            return i;
          }
          function $(e, n) {
            return Lc(tw(e, n, ot), e + "");
          }
          function UC(e) {
            return lm(to(e));
          }
          function RC(e, n) {
            var i = to(e);
            return Ka(i, ir(n, 0, i.length));
          }
          function ci(e, n, i, s) {
            if (!we(e)) return e;
            n = Wn(n, e);
            for (
              var u = -1, f = n.length, m = f - 1, v = e;
              v != null && ++u < f;

            ) {
              var U = Lt(n[u]),
                Z = i;
              if (U === "__proto__" || U === "constructor" || U === "prototype")
                return e;
              if (u != m) {
                var b = v[U];
                (Z = s ? s(b, U, v) : r),
                  Z === r && (Z = we(b) ? b : hn(n[u + 1]) ? [] : {});
              }
              ii(v, U, Z), (v = v[U]);
            }
            return e;
          }
          var Mm = Ba
              ? function (e, n) {
                  return Ba.set(e, n), e;
                }
              : ot,
            NC = Wa
              ? function (e, n) {
                  return Wa(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: au(n),
                    writable: !0,
                  });
                }
              : ot;
          function yC(e) {
            return Ka(to(e));
          }
          function Zt(e, n, i) {
            var s = -1,
              u = e.length;
            n < 0 && (n = -n > u ? 0 : u + n),
              (i = i > u ? u : i),
              i < 0 && (i += u),
              (u = n > i ? 0 : (i - n) >>> 0),
              (n >>>= 0);
            for (var f = N(u); ++s < u; ) f[s] = e[s + n];
            return f;
          }
          function kC(e, n) {
            var i;
            return (
              Fn(e, function (s, u, f) {
                return (i = n(s, u, f)), !i;
              }),
              !!i
            );
          }
          function Ga(e, n, i) {
            var s = 0,
              u = e == null ? s : e.length;
            if (typeof n == "number" && n === n && u <= ZF) {
              for (; s < u; ) {
                var f = (s + u) >>> 1,
                  m = e[f];
                m !== null && !mt(m) && (i ? m <= n : m < n)
                  ? (s = f + 1)
                  : (u = f);
              }
              return u;
            }
            return Wc(e, n, ot, i);
          }
          function Wc(e, n, i, s) {
            var u = 0,
              f = e == null ? 0 : e.length;
            if (f === 0) return 0;
            n = i(n);
            for (
              var m = n !== n, v = n === null, U = mt(n), Z = n === r;
              u < f;

            ) {
              var b = xa((u + f) / 2),
                J = i(e[b]),
                S = J !== r,
                D = J === null,
                G = J === J,
                L = mt(J);
              if (m) var Y = s || G;
              else
                Z
                  ? (Y = G && (s || S))
                  : v
                  ? (Y = G && S && (s || !D))
                  : U
                  ? (Y = G && S && !D && (s || !L))
                  : D || L
                  ? (Y = !1)
                  : (Y = s ? J <= n : J < n);
              Y ? (u = b + 1) : (f = b);
            }
            return Ge(f, MF);
          }
          function Zm(e, n) {
            for (var i = -1, s = e.length, u = 0, f = []; ++i < s; ) {
              var m = e[i],
                v = n ? n(m) : m;
              if (!i || !_t(v, U)) {
                var U = v;
                f[u++] = m === 0 ? 0 : m;
              }
            }
            return f;
          }
          function bm(e) {
            return typeof e == "number" ? e : mt(e) ? ma : +e;
          }
          function pt(e) {
            if (typeof e == "string") return e;
            if (j(e)) return me(e, pt) + "";
            if (mt(e)) return am ? am.call(e) : "";
            var n = e + "";
            return n == "0" && 1 / e == -Ie ? "-0" : n;
          }
          function An(e, n, i) {
            var s = -1,
              u = Na,
              f = e.length,
              m = !0,
              v = [],
              U = v;
            if (i) (m = !1), (u = cc);
            else if (f >= l) {
              var Z = n ? null : xC(e);
              if (Z) return ka(Z);
              (m = !1), (u = Ko), (U = new or());
            } else U = n ? [] : v;
            e: for (; ++s < f; ) {
              var b = e[s],
                J = n ? n(b) : b;
              if (((b = i || b !== 0 ? b : 0), m && J === J)) {
                for (var S = U.length; S--; ) if (U[S] === J) continue e;
                n && U.push(J), v.push(b);
              } else u(U, J, i) || (U !== v && U.push(J), v.push(b));
            }
            return v;
          }
          function Cc(e, n) {
            return (
              (n = Wn(n, e)), (e = nw(e, n)), e == null || delete e[Lt(bt(n))]
            );
          }
          function Jm(e, n, i, s) {
            return ci(e, n, i(ar(e, n)), s);
          }
          function Ya(e, n, i, s) {
            for (
              var u = e.length, f = s ? u : -1;
              (s ? f-- : ++f < u) && n(e[f], f, e);

            );
            return i
              ? Zt(e, s ? 0 : f, s ? f + 1 : u)
              : Zt(e, s ? f + 1 : 0, s ? u : f);
          }
          function Em(e, n) {
            var i = e;
            return (
              i instanceof te && (i = i.value()),
              uc(
                n,
                function (s, u) {
                  return u.func.apply(u.thisArg, Jn([s], u.args));
                },
                i
              )
            );
          }
          function xc(e, n, i) {
            var s = e.length;
            if (s < 2) return s ? An(e[0]) : [];
            for (var u = -1, f = N(s); ++u < s; )
              for (var m = e[u], v = -1; ++v < s; )
                v != u && (f[u] = ai(f[u] || m, e[v], n, i));
            return An(_e(f, 1), n, i);
          }
          function Sm(e, n, i) {
            for (var s = -1, u = e.length, f = n.length, m = {}; ++s < u; ) {
              var v = s < f ? n[s] : r;
              i(m, e[s], v);
            }
            return m;
          }
          function Bc(e) {
            return Ne(e) ? e : [];
          }
          function Ic(e) {
            return typeof e == "function" ? e : ot;
          }
          function Wn(e, n) {
            return j(e) ? e : Pc(e, n) ? [e] : aw(ie(e));
          }
          var MC = $;
          function Cn(e, n, i) {
            var s = e.length;
            return (i = i === r ? s : i), !n && i >= s ? e : Zt(e, n, i);
          }
          var Fm =
            fW ||
            function (e) {
              return De.clearTimeout(e);
            };
          function Am(e, n) {
            if (n) return e.slice();
            var i = e.length,
              s = em ? em(i) : new e.constructor(i);
            return e.copy(s), s;
          }
          function Dc(e) {
            var n = new e.constructor(e.byteLength);
            return new Sa(n).set(new Sa(e)), n;
          }
          function ZC(e, n) {
            var i = n ? Dc(e.buffer) : e.buffer;
            return new e.constructor(i, e.byteOffset, e.byteLength);
          }
          function bC(e) {
            var n = new e.constructor(e.source, wp.exec(e));
            return (n.lastIndex = e.lastIndex), n;
          }
          function JC(e) {
            return oi ? ue(oi.call(e)) : {};
          }
          function Wm(e, n) {
            var i = n ? Dc(e.buffer) : e.buffer;
            return new e.constructor(i, e.byteOffset, e.length);
          }
          function Cm(e, n) {
            if (e !== n) {
              var i = e !== r,
                s = e === null,
                u = e === e,
                f = mt(e),
                m = n !== r,
                v = n === null,
                U = n === n,
                Z = mt(n);
              if (
                (!v && !Z && !f && e > n) ||
                (f && m && U && !v && !Z) ||
                (s && m && U) ||
                (!i && U) ||
                !u
              )
                return 1;
              if (
                (!s && !f && !Z && e < n) ||
                (Z && i && u && !s && !f) ||
                (v && i && u) ||
                (!m && u) ||
                !U
              )
                return -1;
            }
            return 0;
          }
          function EC(e, n, i) {
            for (
              var s = -1,
                u = e.criteria,
                f = n.criteria,
                m = u.length,
                v = i.length;
              ++s < m;

            ) {
              var U = Cm(u[s], f[s]);
              if (U) {
                if (s >= v) return U;
                var Z = i[s];
                return U * (Z == "desc" ? -1 : 1);
              }
            }
            return e.index - n.index;
          }
          function xm(e, n, i, s) {
            for (
              var u = -1,
                f = e.length,
                m = i.length,
                v = -1,
                U = n.length,
                Z = Ee(f - m, 0),
                b = N(U + Z),
                J = !s;
              ++v < U;

            )
              b[v] = n[v];
            for (; ++u < m; ) (J || u < f) && (b[i[u]] = e[u]);
            for (; Z--; ) b[v++] = e[u++];
            return b;
          }
          function Bm(e, n, i, s) {
            for (
              var u = -1,
                f = e.length,
                m = -1,
                v = i.length,
                U = -1,
                Z = n.length,
                b = Ee(f - v, 0),
                J = N(b + Z),
                S = !s;
              ++u < b;

            )
              J[u] = e[u];
            for (var D = u; ++U < Z; ) J[D + U] = n[U];
            for (; ++m < v; ) (S || u < f) && (J[D + i[m]] = e[u++]);
            return J;
          }
          function tt(e, n) {
            var i = -1,
              s = e.length;
            for (n || (n = N(s)); ++i < s; ) n[i] = e[i];
            return n;
          }
          function Xt(e, n, i, s) {
            var u = !i;
            i || (i = {});
            for (var f = -1, m = n.length; ++f < m; ) {
              var v = n[f],
                U = s ? s(i[v], e[v], v, i, e) : r;
              U === r && (U = e[v]), u ? cn(i, v, U) : ii(i, v, U);
            }
            return i;
          }
          function SC(e, n) {
            return Xt(e, Hc(e), n);
          }
          function FC(e, n) {
            return Xt(e, Lm(e), n);
          }
          function Ha(e, n) {
            return function (i, s) {
              var u = j(i) ? BA : eC,
                f = n ? n() : {};
              return u(i, e, Q(s, 2), f);
            };
          }
          function $r(e) {
            return $(function (n, i) {
              var s = -1,
                u = i.length,
                f = u > 1 ? i[u - 1] : r,
                m = u > 2 ? i[2] : r;
              for (
                f = e.length > 3 && typeof f == "function" ? (u--, f) : r,
                  m && Xe(i[0], i[1], m) && ((f = u < 3 ? r : f), (u = 1)),
                  n = ue(n);
                ++s < u;

              ) {
                var v = i[s];
                v && e(n, v, s, f);
              }
              return n;
            });
          }
          function Im(e, n) {
            return function (i, s) {
              if (i == null) return i;
              if (!nt(i)) return e(i, s);
              for (
                var u = i.length, f = n ? u : -1, m = ue(i);
                (n ? f-- : ++f < u) && s(m[f], f, m) !== !1;

              );
              return i;
            };
          }
          function Dm(e) {
            return function (n, i, s) {
              for (var u = -1, f = ue(n), m = s(n), v = m.length; v--; ) {
                var U = m[e ? v : ++u];
                if (i(f[U], U, f) === !1) break;
              }
              return n;
            };
          }
          function AC(e, n, i) {
            var s = n & C,
              u = ui(e);
            function f() {
              var m = this && this !== De && this instanceof f ? u : e;
              return m.apply(s ? i : this, arguments);
            }
            return f;
          }
          function _m(e) {
            return function (n) {
              n = ie(n);
              var i = Gr(n) ? It(n) : r,
                s = i ? i[0] : n.charAt(0),
                u = i ? Cn(i, 1).join("") : n.slice(1);
              return s[e]() + u;
            };
          }
          function qr(e) {
            return function (n) {
              return uc(Iw(Bw(n).replace(NA, "")), e, "");
            };
          }
          function ui(e) {
            return function () {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(n[0]);
                case 2:
                  return new e(n[0], n[1]);
                case 3:
                  return new e(n[0], n[1], n[2]);
                case 4:
                  return new e(n[0], n[1], n[2], n[3]);
                case 5:
                  return new e(n[0], n[1], n[2], n[3], n[4]);
                case 6:
                  return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
                case 7:
                  return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
              }
              var i = Lr(e.prototype),
                s = e.apply(i, n);
              return we(s) ? s : i;
            };
          }
          function WC(e, n, i) {
            var s = ui(e);
            function u() {
              for (var f = arguments.length, m = N(f), v = f, U = Kr(u); v--; )
                m[v] = arguments[v];
              var Z = f < 3 && m[0] !== U && m[f - 1] !== U ? [] : En(m, U);
              if (((f -= Z.length), f < i))
                return Ym(e, n, Pa, u.placeholder, r, m, Z, r, r, i - f);
              var b = this && this !== De && this instanceof u ? s : e;
              return ht(b, this, m);
            }
            return u;
          }
          function Om(e) {
            return function (n, i, s) {
              var u = ue(n);
              if (!nt(n)) {
                var f = Q(i, 3);
                (n = Ae(n)),
                  (i = function (v) {
                    return f(u[v], v, u);
                  });
              }
              var m = e(n, i, s);
              return m > -1 ? u[f ? n[m] : m] : r;
            };
          }
          function Qm(e) {
            return dn(function (n) {
              var i = n.length,
                s = i,
                u = kt.prototype.thru;
              for (e && n.reverse(); s--; ) {
                var f = n[s];
                if (typeof f != "function") throw new yt(d);
                if (u && !m && $a(f) == "wrapper") var m = new kt([], !0);
              }
              for (s = m ? s : i; ++s < i; ) {
                f = n[s];
                var v = $a(f),
                  U = v == "wrapper" ? Gc(f) : r;
                U &&
                jc(U[0]) &&
                U[1] == (x | _ | k | z) &&
                !U[4].length &&
                U[9] == 1
                  ? (m = m[$a(U[0])].apply(m, U[3]))
                  : (m = f.length == 1 && jc(f) ? m[v]() : m.thru(f));
              }
              return function () {
                var Z = arguments,
                  b = Z[0];
                if (m && Z.length == 1 && j(b)) return m.plant(b).value();
                for (var J = 0, S = i ? n[J].apply(this, Z) : b; ++J < i; )
                  S = n[J].call(this, S);
                return S;
              };
            });
          }
          function Pa(e, n, i, s, u, f, m, v, U, Z) {
            var b = n & x,
              J = n & C,
              S = n & A,
              D = n & (_ | H),
              G = n & de,
              L = S ? r : ui(e);
            function Y() {
              for (var ee = arguments.length, ne = N(ee), wt = ee; wt--; )
                ne[wt] = arguments[wt];
              if (D)
                var Le = Kr(Y),
                  vt = HA(ne, Le);
              if (
                (s && (ne = xm(ne, s, u, D)),
                f && (ne = Bm(ne, f, m, D)),
                (ee -= vt),
                D && ee < Z)
              ) {
                var ye = En(ne, Le);
                return Ym(e, n, Pa, Y.placeholder, i, ne, ye, v, U, Z - ee);
              }
              var Ot = J ? i : this,
                mn = S ? Ot[e] : e;
              return (
                (ee = ne.length),
                v ? (ne = ex(ne, v)) : G && ee > 1 && ne.reverse(),
                b && U < ee && (ne.length = U),
                this && this !== De && this instanceof Y && (mn = L || ui(mn)),
                mn.apply(Ot, ne)
              );
            }
            return Y;
          }
          function zm(e, n) {
            return function (i, s) {
              return lC(i, e, n(s), {});
            };
          }
          function ja(e, n) {
            return function (i, s) {
              var u;
              if (i === r && s === r) return n;
              if ((i !== r && (u = i), s !== r)) {
                if (u === r) return s;
                typeof i == "string" || typeof s == "string"
                  ? ((i = pt(i)), (s = pt(s)))
                  : ((i = bm(i)), (s = bm(s))),
                  (u = e(i, s));
              }
              return u;
            };
          }
          function _c(e) {
            return dn(function (n) {
              return (
                (n = me(n, ft(Q()))),
                $(function (i) {
                  var s = this;
                  return e(n, function (u) {
                    return ht(u, s, i);
                  });
                })
              );
            });
          }
          function Xa(e, n) {
            n = n === r ? " " : pt(n);
            var i = n.length;
            if (i < 2) return i ? Ac(n, e) : n;
            var s = Ac(n, Ca(e / Yr(n)));
            return Gr(n) ? Cn(It(s), 0, e).join("") : s.slice(0, e);
          }
          function CC(e, n, i, s) {
            var u = n & C,
              f = ui(e);
            function m() {
              for (
                var v = -1,
                  U = arguments.length,
                  Z = -1,
                  b = s.length,
                  J = N(b + U),
                  S = this && this !== De && this instanceof m ? f : e;
                ++Z < b;

              )
                J[Z] = s[Z];
              for (; U--; ) J[Z++] = arguments[++v];
              return ht(S, u ? i : this, J);
            }
            return m;
          }
          function Gm(e) {
            return function (n, i, s) {
              return (
                s && typeof s != "number" && Xe(n, i, s) && (i = s = r),
                (n = pn(n)),
                i === r ? ((i = n), (n = 0)) : (i = pn(i)),
                (s = s === r ? (n < i ? 1 : -1) : pn(s)),
                gC(n, i, s, e)
              );
            };
          }
          function La(e) {
            return function (n, i) {
              return (
                (typeof n == "string" && typeof i == "string") ||
                  ((n = Jt(n)), (i = Jt(i))),
                e(n, i)
              );
            };
          }
          function Ym(e, n, i, s, u, f, m, v, U, Z) {
            var b = n & _,
              J = b ? m : r,
              S = b ? r : m,
              D = b ? f : r,
              G = b ? r : f;
            (n |= b ? k : W), (n &= ~(b ? W : k)), n & O || (n &= ~(C | A));
            var L = [e, n, u, D, J, G, S, v, U, Z],
              Y = i.apply(r, L);
            return jc(e) && rw(Y, L), (Y.placeholder = s), ow(Y, e, n);
          }
          function Oc(e) {
            var n = Je[e];
            return function (i, s) {
              if (
                ((i = Jt(i)), (s = s == null ? 0 : Ge(X(s), 292)), s && om(i))
              ) {
                var u = (ie(i) + "e").split("e"),
                  f = n(u[0] + "e" + (+u[1] + s));
                return (
                  (u = (ie(f) + "e").split("e")), +(u[0] + "e" + (+u[1] - s))
                );
              }
              return n(i);
            };
          }
          var xC =
            jr && 1 / ka(new jr([, -0]))[1] == Ie
              ? function (e) {
                  return new jr(e);
                }
              : cu;
          function Hm(e) {
            return function (n) {
              var i = Ye(n);
              return i == xt ? vc(n) : i == Bt ? KA(n) : YA(n, e(n));
            };
          }
          function un(e, n, i, s, u, f, m, v) {
            var U = n & A;
            if (!U && typeof e != "function") throw new yt(d);
            var Z = s ? s.length : 0;
            if (
              (Z || ((n &= ~(k | W)), (s = u = r)),
              (m = m === r ? m : Ee(X(m), 0)),
              (v = v === r ? v : X(v)),
              (Z -= u ? u.length : 0),
              n & W)
            ) {
              var b = s,
                J = u;
              s = u = r;
            }
            var S = U ? r : Gc(e),
              D = [e, n, i, s, u, b, J, f, m, v];
            if (
              (S && $C(D, S),
              (e = D[0]),
              (n = D[1]),
              (i = D[2]),
              (s = D[3]),
              (u = D[4]),
              (v = D[9] = D[9] === r ? (U ? 0 : e.length) : Ee(D[9] - Z, 0)),
              !v && n & (_ | H) && (n &= ~(_ | H)),
              !n || n == C)
            )
              var G = AC(e, n, i);
            else
              n == _ || n == H
                ? (G = WC(e, n, v))
                : (n == k || n == (C | k)) && !u.length
                ? (G = CC(e, n, i, s))
                : (G = Pa.apply(r, D));
            var L = S ? Mm : rw;
            return ow(L(G, D), e, n);
          }
          function Pm(e, n, i, s) {
            return e === r || (_t(e, Pr[i]) && !se.call(s, i)) ? n : e;
          }
          function jm(e, n, i, s, u, f) {
            return (
              we(e) && we(n) && (f.set(n, e), za(e, n, r, jm, f), f.delete(n)),
              e
            );
          }
          function BC(e) {
            return fi(e) ? r : e;
          }
          function Xm(e, n, i, s, u, f) {
            var m = i & E,
              v = e.length,
              U = n.length;
            if (v != U && !(m && U > v)) return !1;
            var Z = f.get(e),
              b = f.get(n);
            if (Z && b) return Z == n && b == e;
            var J = -1,
              S = !0,
              D = i & I ? new or() : r;
            for (f.set(e, n), f.set(n, e); ++J < v; ) {
              var G = e[J],
                L = n[J];
              if (s) var Y = m ? s(L, G, J, n, e, f) : s(G, L, J, e, n, f);
              if (Y !== r) {
                if (Y) continue;
                S = !1;
                break;
              }
              if (D) {
                if (
                  !dc(n, function (ee, ne) {
                    if (!Ko(D, ne) && (G === ee || u(G, ee, i, s, f)))
                      return D.push(ne);
                  })
                ) {
                  S = !1;
                  break;
                }
              } else if (!(G === L || u(G, L, i, s, f))) {
                S = !1;
                break;
              }
            }
            return f.delete(e), f.delete(n), S;
          }
          function IC(e, n, i, s, u, f, m) {
            switch (i) {
              case Or:
                if (
                  e.byteLength != n.byteLength ||
                  e.byteOffset != n.byteOffset
                )
                  return !1;
                (e = e.buffer), (n = n.buffer);
              case qo:
                return !(
                  e.byteLength != n.byteLength || !f(new Sa(e), new Sa(n))
                );
              case Ho:
              case Po:
              case jo:
                return _t(+e, +n);
              case va:
                return e.name == n.name && e.message == n.message;
              case Xo:
              case Lo:
                return e == n + "";
              case xt:
                var v = vc;
              case Bt:
                var U = s & E;
                if ((v || (v = ka), e.size != n.size && !U)) return !1;
                var Z = m.get(e);
                if (Z) return Z == n;
                (s |= I), m.set(e, n);
                var b = Xm(v(e), v(n), s, u, f, m);
                return m.delete(e), b;
              case Ta:
                if (oi) return oi.call(e) == oi.call(n);
            }
            return !1;
          }
          function DC(e, n, i, s, u, f) {
            var m = i & E,
              v = Qc(e),
              U = v.length,
              Z = Qc(n),
              b = Z.length;
            if (U != b && !m) return !1;
            for (var J = U; J--; ) {
              var S = v[J];
              if (!(m ? S in n : se.call(n, S))) return !1;
            }
            var D = f.get(e),
              G = f.get(n);
            if (D && G) return D == n && G == e;
            var L = !0;
            f.set(e, n), f.set(n, e);
            for (var Y = m; ++J < U; ) {
              S = v[J];
              var ee = e[S],
                ne = n[S];
              if (s) var wt = m ? s(ne, ee, S, n, e, f) : s(ee, ne, S, e, n, f);
              if (!(wt === r ? ee === ne || u(ee, ne, i, s, f) : wt)) {
                L = !1;
                break;
              }
              Y || (Y = S == "constructor");
            }
            if (L && !Y) {
              var Le = e.constructor,
                vt = n.constructor;
              Le != vt &&
                "constructor" in e &&
                "constructor" in n &&
                !(
                  typeof Le == "function" &&
                  Le instanceof Le &&
                  typeof vt == "function" &&
                  vt instanceof vt
                ) &&
                (L = !1);
            }
            return f.delete(e), f.delete(n), L;
          }
          function dn(e) {
            return Lc(tw(e, r, uw), e + "");
          }
          function Qc(e) {
            return mm(e, Ae, Hc);
          }
          function zc(e) {
            return mm(e, rt, Lm);
          }
          var Gc = Ba
            ? function (e) {
                return Ba.get(e);
              }
            : cu;
          function $a(e) {
            for (
              var n = e.name + "", i = Xr[n], s = se.call(Xr, n) ? i.length : 0;
              s--;

            ) {
              var u = i[s],
                f = u.func;
              if (f == null || f == e) return u.name;
            }
            return n;
          }
          function Kr(e) {
            var n = se.call(h, "placeholder") ? h : e;
            return n.placeholder;
          }
          function Q() {
            var e = h.iteratee || su;
            return (
              (e = e === su ? Vm : e),
              arguments.length ? e(arguments[0], arguments[1]) : e
            );
          }
          function qa(e, n) {
            var i = e.__data__;
            return PC(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
          }
          function Yc(e) {
            for (var n = Ae(e), i = n.length; i--; ) {
              var s = n[i],
                u = e[s];
              n[i] = [s, u, Km(u)];
            }
            return n;
          }
          function sr(e, n) {
            var i = LA(e, n);
            return vm(i) ? i : r;
          }
          function _C(e) {
            var n = se.call(e, nr),
              i = e[nr];
            try {
              e[nr] = r;
              var s = !0;
            } catch {}
            var u = Ja.call(e);
            return s && (n ? (e[nr] = i) : delete e[nr]), u;
          }
          var Hc = Tc
              ? function (e) {
                  return e == null
                    ? []
                    : ((e = ue(e)),
                      bn(Tc(e), function (n) {
                        return nm.call(e, n);
                      }));
                }
              : uu,
            Lm = Tc
              ? function (e) {
                  for (var n = []; e; ) Jn(n, Hc(e)), (e = Fa(e));
                  return n;
                }
              : uu,
            Ye = je;
          ((gc && Ye(new gc(new ArrayBuffer(1))) != Or) ||
            (ti && Ye(new ti()) != xt) ||
            (Uc && Ye(Uc.resolve()) != hp) ||
            (jr && Ye(new jr()) != Bt) ||
            (ni && Ye(new ni()) != $o)) &&
            (Ye = function (e) {
              var n = je(e),
                i = n == an ? e.constructor : r,
                s = i ? lr(i) : "";
              if (s)
                switch (s) {
                  case RW:
                    return Or;
                  case NW:
                    return xt;
                  case yW:
                    return hp;
                  case kW:
                    return Bt;
                  case MW:
                    return $o;
                }
              return n;
            });
          function OC(e, n, i) {
            for (var s = -1, u = i.length; ++s < u; ) {
              var f = i[s],
                m = f.size;
              switch (f.type) {
                case "drop":
                  e += m;
                  break;
                case "dropRight":
                  n -= m;
                  break;
                case "take":
                  n = Ge(n, e + m);
                  break;
                case "takeRight":
                  e = Ee(e, n - m);
                  break;
              }
            }
            return { start: e, end: n };
          }
          function QC(e) {
            var n = e.match(jF);
            return n ? n[1].split(XF) : [];
          }
          function $m(e, n, i) {
            n = Wn(n, e);
            for (var s = -1, u = n.length, f = !1; ++s < u; ) {
              var m = Lt(n[s]);
              if (!(f = e != null && i(e, m))) break;
              e = e[m];
            }
            return f || ++s != u
              ? f
              : ((u = e == null ? 0 : e.length),
                !!u && is(u) && hn(m, u) && (j(e) || cr(e)));
          }
          function zC(e) {
            var n = e.length,
              i = new e.constructor(n);
            return (
              n &&
                typeof e[0] == "string" &&
                se.call(e, "index") &&
                ((i.index = e.index), (i.input = e.input)),
              i
            );
          }
          function qm(e) {
            return typeof e.constructor == "function" && !di(e)
              ? Lr(Fa(e))
              : {};
          }
          function GC(e, n, i) {
            var s = e.constructor;
            switch (n) {
              case qo:
                return Dc(e);
              case Ho:
              case Po:
                return new s(+e);
              case Or:
                return ZC(e, i);
              case Yl:
              case Hl:
              case Pl:
              case jl:
              case Xl:
              case Ll:
              case $l:
              case ql:
              case Kl:
                return Wm(e, i);
              case xt:
                return new s();
              case jo:
              case Lo:
                return new s(e);
              case Xo:
                return bC(e);
              case Bt:
                return new s();
              case Ta:
                return JC(e);
            }
          }
          function YC(e, n) {
            var i = n.length;
            if (!i) return e;
            var s = i - 1;
            return (
              (n[s] = (i > 1 ? "& " : "") + n[s]),
              (n = n.join(i > 2 ? ", " : " ")),
              e.replace(
                PF,
                `{
/* [wrapped with ` +
                  n +
                  `] */
`
              )
            );
          }
          function HC(e) {
            return j(e) || cr(e) || !!(rm && e && e[rm]);
          }
          function hn(e, n) {
            var i = typeof e;
            return (
              (n = n == null ? Pe : n),
              !!n &&
                (i == "number" || (i != "symbol" && oA.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < n
            );
          }
          function Xe(e, n, i) {
            if (!we(i)) return !1;
            var s = typeof n;
            return (
              s == "number" ? nt(i) && hn(n, i.length) : s == "string" && n in i
            )
              ? _t(i[n], e)
              : !1;
          }
          function Pc(e, n) {
            if (j(e)) return !1;
            var i = typeof e;
            return i == "number" ||
              i == "symbol" ||
              i == "boolean" ||
              e == null ||
              mt(e)
              ? !0
              : zF.test(e) || !QF.test(e) || (n != null && e in ue(n));
          }
          function PC(e) {
            var n = typeof e;
            return n == "string" ||
              n == "number" ||
              n == "symbol" ||
              n == "boolean"
              ? e !== "__proto__"
              : e === null;
          }
          function jc(e) {
            var n = $a(e),
              i = h[n];
            if (typeof i != "function" || !(n in te.prototype)) return !1;
            if (e === i) return !0;
            var s = Gc(i);
            return !!s && e === s[0];
          }
          function jC(e) {
            return !!Kp && Kp in e;
          }
          var XC = Za ? fn : du;
          function di(e) {
            var n = e && e.constructor,
              i = (typeof n == "function" && n.prototype) || Pr;
            return e === i;
          }
          function Km(e) {
            return e === e && !we(e);
          }
          function ew(e, n) {
            return function (i) {
              return i == null ? !1 : i[e] === n && (n !== r || e in ue(i));
            };
          }
          function LC(e) {
            var n = rs(e, function (s) {
                return i.size === V && i.clear(), s;
              }),
              i = n.cache;
            return n;
          }
          function $C(e, n) {
            var i = e[1],
              s = n[1],
              u = i | s,
              f = u < (C | A | x),
              m =
                (s == x && i == _) ||
                (s == x && i == z && e[7].length <= n[8]) ||
                (s == (x | z) && n[7].length <= n[8] && i == _);
            if (!(f || m)) return e;
            s & C && ((e[2] = n[2]), (u |= i & C ? 0 : O));
            var v = n[3];
            if (v) {
              var U = e[3];
              (e[3] = U ? xm(U, v, n[4]) : v), (e[4] = U ? En(e[3], g) : n[4]);
            }
            return (
              (v = n[5]),
              v &&
                ((U = e[5]),
                (e[5] = U ? Bm(U, v, n[6]) : v),
                (e[6] = U ? En(e[5], g) : n[6])),
              (v = n[7]),
              v && (e[7] = v),
              s & x && (e[8] = e[8] == null ? n[8] : Ge(e[8], n[8])),
              e[9] == null && (e[9] = n[9]),
              (e[0] = n[0]),
              (e[1] = u),
              e
            );
          }
          function qC(e) {
            var n = [];
            if (e != null) for (var i in ue(e)) n.push(i);
            return n;
          }
          function KC(e) {
            return Ja.call(e);
          }
          function tw(e, n, i) {
            return (
              (n = Ee(n === r ? e.length - 1 : n, 0)),
              function () {
                for (
                  var s = arguments, u = -1, f = Ee(s.length - n, 0), m = N(f);
                  ++u < f;

                )
                  m[u] = s[n + u];
                u = -1;
                for (var v = N(n + 1); ++u < n; ) v[u] = s[u];
                return (v[n] = i(m)), ht(e, this, v);
              }
            );
          }
          function nw(e, n) {
            return n.length < 2 ? e : ar(e, Zt(n, 0, -1));
          }
          function ex(e, n) {
            for (var i = e.length, s = Ge(n.length, i), u = tt(e); s--; ) {
              var f = n[s];
              e[s] = hn(f, i) ? u[f] : r;
            }
            return e;
          }
          function Xc(e, n) {
            if (
              !(n === "constructor" && typeof e[n] == "function") &&
              n != "__proto__"
            )
              return e[n];
          }
          var rw = iw(Mm),
            hi =
              mW ||
              function (e, n) {
                return De.setTimeout(e, n);
              },
            Lc = iw(NC);
          function ow(e, n, i) {
            var s = n + "";
            return Lc(e, YC(s, tx(QC(s), i)));
          }
          function iw(e) {
            var n = 0,
              i = 0;
            return function () {
              var s = TW(),
                u = Re - (s - i);
              if (((i = s), u > 0)) {
                if (++n >= Ve) return arguments[0];
              } else n = 0;
              return e.apply(r, arguments);
            };
          }
          function Ka(e, n) {
            var i = -1,
              s = e.length,
              u = s - 1;
            for (n = n === r ? s : n; ++i < n; ) {
              var f = Fc(i, u),
                m = e[f];
              (e[f] = e[i]), (e[i] = m);
            }
            return (e.length = n), e;
          }
          var aw = LC(function (e) {
            var n = [];
            return (
              e.charCodeAt(0) === 46 && n.push(""),
              e.replace(GF, function (i, s, u, f) {
                n.push(u ? f.replace(qF, "$1") : s || i);
              }),
              n
            );
          });
          function Lt(e) {
            if (typeof e == "string" || mt(e)) return e;
            var n = e + "";
            return n == "0" && 1 / e == -Ie ? "-0" : n;
          }
          function lr(e) {
            if (e != null) {
              try {
                return ba.call(e);
              } catch {}
              try {
                return e + "";
              } catch {}
            }
            return "";
          }
          function tx(e, n) {
            return (
              Nt(bF, function (i) {
                var s = "_." + i[0];
                n & i[1] && !Na(e, s) && e.push(s);
              }),
              e.sort()
            );
          }
          function sw(e) {
            if (e instanceof te) return e.clone();
            var n = new kt(e.__wrapped__, e.__chain__);
            return (
              (n.__actions__ = tt(e.__actions__)),
              (n.__index__ = e.__index__),
              (n.__values__ = e.__values__),
              n
            );
          }
          function nx(e, n, i) {
            (i ? Xe(e, n, i) : n === r) ? (n = 1) : (n = Ee(X(n), 0));
            var s = e == null ? 0 : e.length;
            if (!s || n < 1) return [];
            for (var u = 0, f = 0, m = N(Ca(s / n)); u < s; )
              m[f++] = Zt(e, u, (u += n));
            return m;
          }
          function rx(e) {
            for (
              var n = -1, i = e == null ? 0 : e.length, s = 0, u = [];
              ++n < i;

            ) {
              var f = e[n];
              f && (u[s++] = f);
            }
            return u;
          }
          function ox() {
            var e = arguments.length;
            if (!e) return [];
            for (var n = N(e - 1), i = arguments[0], s = e; s--; )
              n[s - 1] = arguments[s];
            return Jn(j(i) ? tt(i) : [i], _e(n, 1));
          }
          var ix = $(function (e, n) {
              return Ne(e) ? ai(e, _e(n, 1, Ne, !0)) : [];
            }),
            ax = $(function (e, n) {
              var i = bt(n);
              return (
                Ne(i) && (i = r), Ne(e) ? ai(e, _e(n, 1, Ne, !0), Q(i, 2)) : []
              );
            }),
            sx = $(function (e, n) {
              var i = bt(n);
              return (
                Ne(i) && (i = r), Ne(e) ? ai(e, _e(n, 1, Ne, !0), r, i) : []
              );
            });
          function lx(e, n, i) {
            var s = e == null ? 0 : e.length;
            return s
              ? ((n = i || n === r ? 1 : X(n)), Zt(e, n < 0 ? 0 : n, s))
              : [];
          }
          function cx(e, n, i) {
            var s = e == null ? 0 : e.length;
            return s
              ? ((n = i || n === r ? 1 : X(n)),
                (n = s - n),
                Zt(e, 0, n < 0 ? 0 : n))
              : [];
          }
          function ux(e, n) {
            return e && e.length ? Ya(e, Q(n, 3), !0, !0) : [];
          }
          function dx(e, n) {
            return e && e.length ? Ya(e, Q(n, 3), !0) : [];
          }
          function hx(e, n, i, s) {
            var u = e == null ? 0 : e.length;
            return u
              ? (i && typeof i != "number" && Xe(e, n, i) && ((i = 0), (s = u)),
                oC(e, n, i, s))
              : [];
          }
          function lw(e, n, i) {
            var s = e == null ? 0 : e.length;
            if (!s) return -1;
            var u = i == null ? 0 : X(i);
            return u < 0 && (u = Ee(s + u, 0)), ya(e, Q(n, 3), u);
          }
          function cw(e, n, i) {
            var s = e == null ? 0 : e.length;
            if (!s) return -1;
            var u = s - 1;
            return (
              i !== r &&
                ((u = X(i)), (u = i < 0 ? Ee(s + u, 0) : Ge(u, s - 1))),
              ya(e, Q(n, 3), u, !0)
            );
          }
          function uw(e) {
            var n = e == null ? 0 : e.length;
            return n ? _e(e, 1) : [];
          }
          function fx(e) {
            var n = e == null ? 0 : e.length;
            return n ? _e(e, Ie) : [];
          }
          function px(e, n) {
            var i = e == null ? 0 : e.length;
            return i ? ((n = n === r ? 1 : X(n)), _e(e, n)) : [];
          }
          function mx(e) {
            for (var n = -1, i = e == null ? 0 : e.length, s = {}; ++n < i; ) {
              var u = e[n];
              s[u[0]] = u[1];
            }
            return s;
          }
          function dw(e) {
            return e && e.length ? e[0] : r;
          }
          function wx(e, n, i) {
            var s = e == null ? 0 : e.length;
            if (!s) return -1;
            var u = i == null ? 0 : X(i);
            return u < 0 && (u = Ee(s + u, 0)), zr(e, n, u);
          }
          function vx(e) {
            var n = e == null ? 0 : e.length;
            return n ? Zt(e, 0, -1) : [];
          }
          var Vx = $(function (e) {
              var n = me(e, Bc);
              return n.length && n[0] === e[0] ? Zc(n) : [];
            }),
            Tx = $(function (e) {
              var n = bt(e),
                i = me(e, Bc);
              return (
                n === bt(i) ? (n = r) : i.pop(),
                i.length && i[0] === e[0] ? Zc(i, Q(n, 2)) : []
              );
            }),
            gx = $(function (e) {
              var n = bt(e),
                i = me(e, Bc);
              return (
                (n = typeof n == "function" ? n : r),
                n && i.pop(),
                i.length && i[0] === e[0] ? Zc(i, r, n) : []
              );
            });
          function Ux(e, n) {
            return e == null ? "" : vW.call(e, n);
          }
          function bt(e) {
            var n = e == null ? 0 : e.length;
            return n ? e[n - 1] : r;
          }
          function Rx(e, n, i) {
            var s = e == null ? 0 : e.length;
            if (!s) return -1;
            var u = s;
            return (
              i !== r &&
                ((u = X(i)), (u = u < 0 ? Ee(s + u, 0) : Ge(u, s - 1))),
              n === n ? tW(e, n, u) : ya(e, Yp, u, !0)
            );
          }
          function Nx(e, n) {
            return e && e.length ? Rm(e, X(n)) : r;
          }
          var yx = $(hw);
          function hw(e, n) {
            return e && e.length && n && n.length ? Sc(e, n) : e;
          }
          function kx(e, n, i) {
            return e && e.length && n && n.length ? Sc(e, n, Q(i, 2)) : e;
          }
          function Mx(e, n, i) {
            return e && e.length && n && n.length ? Sc(e, n, r, i) : e;
          }
          var Zx = dn(function (e, n) {
            var i = e == null ? 0 : e.length,
              s = Nc(e, n);
            return (
              km(
                e,
                me(n, function (u) {
                  return hn(u, i) ? +u : u;
                }).sort(Cm)
              ),
              s
            );
          });
          function bx(e, n) {
            var i = [];
            if (!(e && e.length)) return i;
            var s = -1,
              u = [],
              f = e.length;
            for (n = Q(n, 3); ++s < f; ) {
              var m = e[s];
              n(m, s, e) && (i.push(m), u.push(s));
            }
            return km(e, u), i;
          }
          function $c(e) {
            return e == null ? e : UW.call(e);
          }
          function Jx(e, n, i) {
            var s = e == null ? 0 : e.length;
            return s
              ? (i && typeof i != "number" && Xe(e, n, i)
                  ? ((n = 0), (i = s))
                  : ((n = n == null ? 0 : X(n)), (i = i === r ? s : X(i))),
                Zt(e, n, i))
              : [];
          }
          function Ex(e, n) {
            return Ga(e, n);
          }
          function Sx(e, n, i) {
            return Wc(e, n, Q(i, 2));
          }
          function Fx(e, n) {
            var i = e == null ? 0 : e.length;
            if (i) {
              var s = Ga(e, n);
              if (s < i && _t(e[s], n)) return s;
            }
            return -1;
          }
          function Ax(e, n) {
            return Ga(e, n, !0);
          }
          function Wx(e, n, i) {
            return Wc(e, n, Q(i, 2), !0);
          }
          function Cx(e, n) {
            var i = e == null ? 0 : e.length;
            if (i) {
              var s = Ga(e, n, !0) - 1;
              if (_t(e[s], n)) return s;
            }
            return -1;
          }
          function xx(e) {
            return e && e.length ? Zm(e) : [];
          }
          function Bx(e, n) {
            return e && e.length ? Zm(e, Q(n, 2)) : [];
          }
          function Ix(e) {
            var n = e == null ? 0 : e.length;
            return n ? Zt(e, 1, n) : [];
          }
          function Dx(e, n, i) {
            return e && e.length
              ? ((n = i || n === r ? 1 : X(n)), Zt(e, 0, n < 0 ? 0 : n))
              : [];
          }
          function _x(e, n, i) {
            var s = e == null ? 0 : e.length;
            return s
              ? ((n = i || n === r ? 1 : X(n)),
                (n = s - n),
                Zt(e, n < 0 ? 0 : n, s))
              : [];
          }
          function Ox(e, n) {
            return e && e.length ? Ya(e, Q(n, 3), !1, !0) : [];
          }
          function Qx(e, n) {
            return e && e.length ? Ya(e, Q(n, 3)) : [];
          }
          var zx = $(function (e) {
              return An(_e(e, 1, Ne, !0));
            }),
            Gx = $(function (e) {
              var n = bt(e);
              return Ne(n) && (n = r), An(_e(e, 1, Ne, !0), Q(n, 2));
            }),
            Yx = $(function (e) {
              var n = bt(e);
              return (
                (n = typeof n == "function" ? n : r), An(_e(e, 1, Ne, !0), r, n)
              );
            });
          function Hx(e) {
            return e && e.length ? An(e) : [];
          }
          function Px(e, n) {
            return e && e.length ? An(e, Q(n, 2)) : [];
          }
          function jx(e, n) {
            return (
              (n = typeof n == "function" ? n : r),
              e && e.length ? An(e, r, n) : []
            );
          }
          function qc(e) {
            if (!(e && e.length)) return [];
            var n = 0;
            return (
              (e = bn(e, function (i) {
                if (Ne(i)) return (n = Ee(i.length, n)), !0;
              })),
              mc(n, function (i) {
                return me(e, hc(i));
              })
            );
          }
          function fw(e, n) {
            if (!(e && e.length)) return [];
            var i = qc(e);
            return n == null
              ? i
              : me(i, function (s) {
                  return ht(n, r, s);
                });
          }
          var Xx = $(function (e, n) {
              return Ne(e) ? ai(e, n) : [];
            }),
            Lx = $(function (e) {
              return xc(bn(e, Ne));
            }),
            $x = $(function (e) {
              var n = bt(e);
              return Ne(n) && (n = r), xc(bn(e, Ne), Q(n, 2));
            }),
            qx = $(function (e) {
              var n = bt(e);
              return (n = typeof n == "function" ? n : r), xc(bn(e, Ne), r, n);
            }),
            Kx = $(qc);
          function eB(e, n) {
            return Sm(e || [], n || [], ii);
          }
          function tB(e, n) {
            return Sm(e || [], n || [], ci);
          }
          var nB = $(function (e) {
            var n = e.length,
              i = n > 1 ? e[n - 1] : r;
            return (i = typeof i == "function" ? (e.pop(), i) : r), fw(e, i);
          });
          function pw(e) {
            var n = h(e);
            return (n.__chain__ = !0), n;
          }
          function rB(e, n) {
            return n(e), e;
          }
          function es(e, n) {
            return n(e);
          }
          var oB = dn(function (e) {
            var n = e.length,
              i = n ? e[0] : 0,
              s = this.__wrapped__,
              u = function (f) {
                return Nc(f, e);
              };
            return n > 1 ||
              this.__actions__.length ||
              !(s instanceof te) ||
              !hn(i)
              ? this.thru(u)
              : ((s = s.slice(i, +i + (n ? 1 : 0))),
                s.__actions__.push({ func: es, args: [u], thisArg: r }),
                new kt(s, this.__chain__).thru(function (f) {
                  return n && !f.length && f.push(r), f;
                }));
          });
          function iB() {
            return pw(this);
          }
          function aB() {
            return new kt(this.value(), this.__chain__);
          }
          function sB() {
            this.__values__ === r && (this.__values__ = bw(this.value()));
            var e = this.__index__ >= this.__values__.length,
              n = e ? r : this.__values__[this.__index__++];
            return { done: e, value: n };
          }
          function lB() {
            return this;
          }
          function cB(e) {
            for (var n, i = this; i instanceof Da; ) {
              var s = sw(i);
              (s.__index__ = 0),
                (s.__values__ = r),
                n ? (u.__wrapped__ = s) : (n = s);
              var u = s;
              i = i.__wrapped__;
            }
            return (u.__wrapped__ = e), n;
          }
          function uB() {
            var e = this.__wrapped__;
            if (e instanceof te) {
              var n = e;
              return (
                this.__actions__.length && (n = new te(this)),
                (n = n.reverse()),
                n.__actions__.push({ func: es, args: [$c], thisArg: r }),
                new kt(n, this.__chain__)
              );
            }
            return this.thru($c);
          }
          function dB() {
            return Em(this.__wrapped__, this.__actions__);
          }
          var hB = Ha(function (e, n, i) {
            se.call(e, i) ? ++e[i] : cn(e, i, 1);
          });
          function fB(e, n, i) {
            var s = j(e) ? zp : rC;
            return i && Xe(e, n, i) && (n = r), s(e, Q(n, 3));
          }
          function pB(e, n) {
            var i = j(e) ? bn : fm;
            return i(e, Q(n, 3));
          }
          var mB = Om(lw),
            wB = Om(cw);
          function vB(e, n) {
            return _e(ts(e, n), 1);
          }
          function VB(e, n) {
            return _e(ts(e, n), Ie);
          }
          function TB(e, n, i) {
            return (i = i === r ? 1 : X(i)), _e(ts(e, n), i);
          }
          function mw(e, n) {
            var i = j(e) ? Nt : Fn;
            return i(e, Q(n, 3));
          }
          function ww(e, n) {
            var i = j(e) ? IA : hm;
            return i(e, Q(n, 3));
          }
          var gB = Ha(function (e, n, i) {
            se.call(e, i) ? e[i].push(n) : cn(e, i, [n]);
          });
          function UB(e, n, i, s) {
            (e = nt(e) ? e : to(e)), (i = i && !s ? X(i) : 0);
            var u = e.length;
            return (
              i < 0 && (i = Ee(u + i, 0)),
              as(e) ? i <= u && e.indexOf(n, i) > -1 : !!u && zr(e, n, i) > -1
            );
          }
          var RB = $(function (e, n, i) {
              var s = -1,
                u = typeof n == "function",
                f = nt(e) ? N(e.length) : [];
              return (
                Fn(e, function (m) {
                  f[++s] = u ? ht(n, m, i) : si(m, n, i);
                }),
                f
              );
            }),
            NB = Ha(function (e, n, i) {
              cn(e, i, n);
            });
          function ts(e, n) {
            var i = j(e) ? me : Tm;
            return i(e, Q(n, 3));
          }
          function yB(e, n, i, s) {
            return e == null
              ? []
              : (j(n) || (n = n == null ? [] : [n]),
                (i = s ? r : i),
                j(i) || (i = i == null ? [] : [i]),
                Nm(e, n, i));
          }
          var kB = Ha(
            function (e, n, i) {
              e[i ? 0 : 1].push(n);
            },
            function () {
              return [[], []];
            }
          );
          function MB(e, n, i) {
            var s = j(e) ? uc : Pp,
              u = arguments.length < 3;
            return s(e, Q(n, 4), i, u, Fn);
          }
          function ZB(e, n, i) {
            var s = j(e) ? DA : Pp,
              u = arguments.length < 3;
            return s(e, Q(n, 4), i, u, hm);
          }
          function bB(e, n) {
            var i = j(e) ? bn : fm;
            return i(e, os(Q(n, 3)));
          }
          function JB(e) {
            var n = j(e) ? lm : UC;
            return n(e);
          }
          function EB(e, n, i) {
            (i ? Xe(e, n, i) : n === r) ? (n = 1) : (n = X(n));
            var s = j(e) ? qW : RC;
            return s(e, n);
          }
          function SB(e) {
            var n = j(e) ? KW : yC;
            return n(e);
          }
          function FB(e) {
            if (e == null) return 0;
            if (nt(e)) return as(e) ? Yr(e) : e.length;
            var n = Ye(e);
            return n == xt || n == Bt ? e.size : Jc(e).length;
          }
          function AB(e, n, i) {
            var s = j(e) ? dc : kC;
            return i && Xe(e, n, i) && (n = r), s(e, Q(n, 3));
          }
          var WB = $(function (e, n) {
              if (e == null) return [];
              var i = n.length;
              return (
                i > 1 && Xe(e, n[0], n[1])
                  ? (n = [])
                  : i > 2 && Xe(n[0], n[1], n[2]) && (n = [n[0]]),
                Nm(e, _e(n, 1), [])
              );
            }),
            ns =
              pW ||
              function () {
                return De.Date.now();
              };
          function CB(e, n) {
            if (typeof n != "function") throw new yt(d);
            return (
              (e = X(e)),
              function () {
                if (--e < 1) return n.apply(this, arguments);
              }
            );
          }
          function vw(e, n, i) {
            return (
              (n = i ? r : n),
              (n = e && n == null ? e.length : n),
              un(e, x, r, r, r, r, n)
            );
          }
          function Vw(e, n) {
            var i;
            if (typeof n != "function") throw new yt(d);
            return (
              (e = X(e)),
              function () {
                return (
                  --e > 0 && (i = n.apply(this, arguments)),
                  e <= 1 && (n = r),
                  i
                );
              }
            );
          }
          var Kc = $(function (e, n, i) {
              var s = C;
              if (i.length) {
                var u = En(i, Kr(Kc));
                s |= k;
              }
              return un(e, s, n, i, u);
            }),
            Tw = $(function (e, n, i) {
              var s = C | A;
              if (i.length) {
                var u = En(i, Kr(Tw));
                s |= k;
              }
              return un(n, s, e, i, u);
            });
          function gw(e, n, i) {
            n = i ? r : n;
            var s = un(e, _, r, r, r, r, r, n);
            return (s.placeholder = gw.placeholder), s;
          }
          function Uw(e, n, i) {
            n = i ? r : n;
            var s = un(e, H, r, r, r, r, r, n);
            return (s.placeholder = Uw.placeholder), s;
          }
          function Rw(e, n, i) {
            var s,
              u,
              f,
              m,
              v,
              U,
              Z = 0,
              b = !1,
              J = !1,
              S = !0;
            if (typeof e != "function") throw new yt(d);
            (n = Jt(n) || 0),
              we(i) &&
                ((b = !!i.leading),
                (J = "maxWait" in i),
                (f = J ? Ee(Jt(i.maxWait) || 0, n) : f),
                (S = "trailing" in i ? !!i.trailing : S));
            function D(ye) {
              var Ot = s,
                mn = u;
              return (s = u = r), (Z = ye), (m = e.apply(mn, Ot)), m;
            }
            function G(ye) {
              return (Z = ye), (v = hi(ee, n)), b ? D(ye) : m;
            }
            function L(ye) {
              var Ot = ye - U,
                mn = ye - Z,
                Ow = n - Ot;
              return J ? Ge(Ow, f - mn) : Ow;
            }
            function Y(ye) {
              var Ot = ye - U,
                mn = ye - Z;
              return U === r || Ot >= n || Ot < 0 || (J && mn >= f);
            }
            function ee() {
              var ye = ns();
              if (Y(ye)) return ne(ye);
              v = hi(ee, L(ye));
            }
            function ne(ye) {
              return (v = r), S && s ? D(ye) : ((s = u = r), m);
            }
            function wt() {
              v !== r && Fm(v), (Z = 0), (s = U = u = v = r);
            }
            function Le() {
              return v === r ? m : ne(ns());
            }
            function vt() {
              var ye = ns(),
                Ot = Y(ye);
              if (((s = arguments), (u = this), (U = ye), Ot)) {
                if (v === r) return G(U);
                if (J) return Fm(v), (v = hi(ee, n)), D(U);
              }
              return v === r && (v = hi(ee, n)), m;
            }
            return (vt.cancel = wt), (vt.flush = Le), vt;
          }
          var xB = $(function (e, n) {
              return dm(e, 1, n);
            }),
            BB = $(function (e, n, i) {
              return dm(e, Jt(n) || 0, i);
            });
          function IB(e) {
            return un(e, de);
          }
          function rs(e, n) {
            if (typeof e != "function" || (n != null && typeof n != "function"))
              throw new yt(d);
            var i = function () {
              var s = arguments,
                u = n ? n.apply(this, s) : s[0],
                f = i.cache;
              if (f.has(u)) return f.get(u);
              var m = e.apply(this, s);
              return (i.cache = f.set(u, m) || f), m;
            };
            return (i.cache = new (rs.Cache || ln)()), i;
          }
          rs.Cache = ln;
          function os(e) {
            if (typeof e != "function") throw new yt(d);
            return function () {
              var n = arguments;
              switch (n.length) {
                case 0:
                  return !e.call(this);
                case 1:
                  return !e.call(this, n[0]);
                case 2:
                  return !e.call(this, n[0], n[1]);
                case 3:
                  return !e.call(this, n[0], n[1], n[2]);
              }
              return !e.apply(this, n);
            };
          }
          function DB(e) {
            return Vw(2, e);
          }
          var _B = MC(function (e, n) {
              n =
                n.length == 1 && j(n[0])
                  ? me(n[0], ft(Q()))
                  : me(_e(n, 1), ft(Q()));
              var i = n.length;
              return $(function (s) {
                for (var u = -1, f = Ge(s.length, i); ++u < f; )
                  s[u] = n[u].call(this, s[u]);
                return ht(e, this, s);
              });
            }),
            eu = $(function (e, n) {
              var i = En(n, Kr(eu));
              return un(e, k, r, n, i);
            }),
            Nw = $(function (e, n) {
              var i = En(n, Kr(Nw));
              return un(e, W, r, n, i);
            }),
            OB = dn(function (e, n) {
              return un(e, z, r, r, r, n);
            });
          function QB(e, n) {
            if (typeof e != "function") throw new yt(d);
            return (n = n === r ? n : X(n)), $(e, n);
          }
          function zB(e, n) {
            if (typeof e != "function") throw new yt(d);
            return (
              (n = n == null ? 0 : Ee(X(n), 0)),
              $(function (i) {
                var s = i[n],
                  u = Cn(i, 0, n);
                return s && Jn(u, s), ht(e, this, u);
              })
            );
          }
          function GB(e, n, i) {
            var s = !0,
              u = !0;
            if (typeof e != "function") throw new yt(d);
            return (
              we(i) &&
                ((s = "leading" in i ? !!i.leading : s),
                (u = "trailing" in i ? !!i.trailing : u)),
              Rw(e, n, { leading: s, maxWait: n, trailing: u })
            );
          }
          function YB(e) {
            return vw(e, 1);
          }
          function HB(e, n) {
            return eu(Ic(n), e);
          }
          function PB() {
            if (!arguments.length) return [];
            var e = arguments[0];
            return j(e) ? e : [e];
          }
          function jB(e) {
            return Mt(e, F);
          }
          function XB(e, n) {
            return (n = typeof n == "function" ? n : r), Mt(e, F, n);
          }
          function LB(e) {
            return Mt(e, R | F);
          }
          function $B(e, n) {
            return (n = typeof n == "function" ? n : r), Mt(e, R | F, n);
          }
          function qB(e, n) {
            return n == null || um(e, n, Ae(n));
          }
          function _t(e, n) {
            return e === n || (e !== e && n !== n);
          }
          var KB = La(Mc),
            e3 = La(function (e, n) {
              return e >= n;
            }),
            cr = wm(
              (function () {
                return arguments;
              })()
            )
              ? wm
              : function (e) {
                  return Te(e) && se.call(e, "callee") && !nm.call(e, "callee");
                },
            j = N.isArray,
            t3 = Bp ? ft(Bp) : cC;
          function nt(e) {
            return e != null && is(e.length) && !fn(e);
          }
          function Ne(e) {
            return Te(e) && nt(e);
          }
          function n3(e) {
            return e === !0 || e === !1 || (Te(e) && je(e) == Ho);
          }
          var xn = wW || du,
            r3 = Ip ? ft(Ip) : uC;
          function o3(e) {
            return Te(e) && e.nodeType === 1 && !fi(e);
          }
          function i3(e) {
            if (e == null) return !0;
            if (
              nt(e) &&
              (j(e) ||
                typeof e == "string" ||
                typeof e.splice == "function" ||
                xn(e) ||
                eo(e) ||
                cr(e))
            )
              return !e.length;
            var n = Ye(e);
            if (n == xt || n == Bt) return !e.size;
            if (di(e)) return !Jc(e).length;
            for (var i in e) if (se.call(e, i)) return !1;
            return !0;
          }
          function a3(e, n) {
            return li(e, n);
          }
          function s3(e, n, i) {
            i = typeof i == "function" ? i : r;
            var s = i ? i(e, n) : r;
            return s === r ? li(e, n, r, i) : !!s;
          }
          function tu(e) {
            if (!Te(e)) return !1;
            var n = je(e);
            return (
              n == va ||
              n == EF ||
              (typeof e.message == "string" &&
                typeof e.name == "string" &&
                !fi(e))
            );
          }
          function l3(e) {
            return typeof e == "number" && om(e);
          }
          function fn(e) {
            if (!we(e)) return !1;
            var n = je(e);
            return n == Va || n == dp || n == JF || n == FF;
          }
          function yw(e) {
            return typeof e == "number" && e == X(e);
          }
          function is(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pe;
          }
          function we(e) {
            var n = typeof e;
            return e != null && (n == "object" || n == "function");
          }
          function Te(e) {
            return e != null && typeof e == "object";
          }
          var kw = Dp ? ft(Dp) : hC;
          function c3(e, n) {
            return e === n || bc(e, n, Yc(n));
          }
          function u3(e, n, i) {
            return (i = typeof i == "function" ? i : r), bc(e, n, Yc(n), i);
          }
          function d3(e) {
            return Mw(e) && e != +e;
          }
          function h3(e) {
            if (XC(e)) throw new P(c);
            return vm(e);
          }
          function f3(e) {
            return e === null;
          }
          function p3(e) {
            return e == null;
          }
          function Mw(e) {
            return typeof e == "number" || (Te(e) && je(e) == jo);
          }
          function fi(e) {
            if (!Te(e) || je(e) != an) return !1;
            var n = Fa(e);
            if (n === null) return !0;
            var i = se.call(n, "constructor") && n.constructor;
            return typeof i == "function" && i instanceof i && ba.call(i) == uW;
          }
          var nu = _p ? ft(_p) : fC;
          function m3(e) {
            return yw(e) && e >= -Pe && e <= Pe;
          }
          var Zw = Op ? ft(Op) : pC;
          function as(e) {
            return typeof e == "string" || (!j(e) && Te(e) && je(e) == Lo);
          }
          function mt(e) {
            return typeof e == "symbol" || (Te(e) && je(e) == Ta);
          }
          var eo = Qp ? ft(Qp) : mC;
          function w3(e) {
            return e === r;
          }
          function v3(e) {
            return Te(e) && Ye(e) == $o;
          }
          function V3(e) {
            return Te(e) && je(e) == WF;
          }
          var T3 = La(Ec),
            g3 = La(function (e, n) {
              return e <= n;
            });
          function bw(e) {
            if (!e) return [];
            if (nt(e)) return as(e) ? It(e) : tt(e);
            if (ei && e[ei]) return qA(e[ei]());
            var n = Ye(e),
              i = n == xt ? vc : n == Bt ? ka : to;
            return i(e);
          }
          function pn(e) {
            if (!e) return e === 0 ? e : 0;
            if (((e = Jt(e)), e === Ie || e === -Ie)) {
              var n = e < 0 ? -1 : 1;
              return n * Yo;
            }
            return e === e ? e : 0;
          }
          function X(e) {
            var n = pn(e),
              i = n % 1;
            return n === n ? (i ? n - i : n) : 0;
          }
          function Jw(e) {
            return e ? ir(X(e), 0, Pt) : 0;
          }
          function Jt(e) {
            if (typeof e == "number") return e;
            if (mt(e)) return ma;
            if (we(e)) {
              var n = typeof e.valueOf == "function" ? e.valueOf() : e;
              e = we(n) ? n + "" : n;
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = jp(e);
            var i = tA.test(e);
            return i || rA.test(e)
              ? CA(e.slice(2), i ? 2 : 8)
              : eA.test(e)
              ? ma
              : +e;
          }
          function Ew(e) {
            return Xt(e, rt(e));
          }
          function U3(e) {
            return e ? ir(X(e), -Pe, Pe) : e === 0 ? e : 0;
          }
          function ie(e) {
            return e == null ? "" : pt(e);
          }
          var R3 = $r(function (e, n) {
              if (di(n) || nt(n)) {
                Xt(n, Ae(n), e);
                return;
              }
              for (var i in n) se.call(n, i) && ii(e, i, n[i]);
            }),
            Sw = $r(function (e, n) {
              Xt(n, rt(n), e);
            }),
            ss = $r(function (e, n, i, s) {
              Xt(n, rt(n), e, s);
            }),
            N3 = $r(function (e, n, i, s) {
              Xt(n, Ae(n), e, s);
            }),
            y3 = dn(Nc);
          function k3(e, n) {
            var i = Lr(e);
            return n == null ? i : cm(i, n);
          }
          var M3 = $(function (e, n) {
              e = ue(e);
              var i = -1,
                s = n.length,
                u = s > 2 ? n[2] : r;
              for (u && Xe(n[0], n[1], u) && (s = 1); ++i < s; )
                for (var f = n[i], m = rt(f), v = -1, U = m.length; ++v < U; ) {
                  var Z = m[v],
                    b = e[Z];
                  (b === r || (_t(b, Pr[Z]) && !se.call(e, Z))) &&
                    (e[Z] = f[Z]);
                }
              return e;
            }),
            Z3 = $(function (e) {
              return e.push(r, jm), ht(Fw, r, e);
            });
          function b3(e, n) {
            return Gp(e, Q(n, 3), jt);
          }
          function J3(e, n) {
            return Gp(e, Q(n, 3), kc);
          }
          function E3(e, n) {
            return e == null ? e : yc(e, Q(n, 3), rt);
          }
          function S3(e, n) {
            return e == null ? e : pm(e, Q(n, 3), rt);
          }
          function F3(e, n) {
            return e && jt(e, Q(n, 3));
          }
          function A3(e, n) {
            return e && kc(e, Q(n, 3));
          }
          function W3(e) {
            return e == null ? [] : Qa(e, Ae(e));
          }
          function C3(e) {
            return e == null ? [] : Qa(e, rt(e));
          }
          function ru(e, n, i) {
            var s = e == null ? r : ar(e, n);
            return s === r ? i : s;
          }
          function x3(e, n) {
            return e != null && $m(e, n, iC);
          }
          function ou(e, n) {
            return e != null && $m(e, n, aC);
          }
          var B3 = zm(function (e, n, i) {
              n != null && typeof n.toString != "function" && (n = Ja.call(n)),
                (e[n] = i);
            }, au(ot)),
            I3 = zm(function (e, n, i) {
              n != null && typeof n.toString != "function" && (n = Ja.call(n)),
                se.call(e, n) ? e[n].push(i) : (e[n] = [i]);
            }, Q),
            D3 = $(si);
          function Ae(e) {
            return nt(e) ? sm(e) : Jc(e);
          }
          function rt(e) {
            return nt(e) ? sm(e, !0) : wC(e);
          }
          function _3(e, n) {
            var i = {};
            return (
              (n = Q(n, 3)),
              jt(e, function (s, u, f) {
                cn(i, n(s, u, f), s);
              }),
              i
            );
          }
          function O3(e, n) {
            var i = {};
            return (
              (n = Q(n, 3)),
              jt(e, function (s, u, f) {
                cn(i, u, n(s, u, f));
              }),
              i
            );
          }
          var Q3 = $r(function (e, n, i) {
              za(e, n, i);
            }),
            Fw = $r(function (e, n, i, s) {
              za(e, n, i, s);
            }),
            z3 = dn(function (e, n) {
              var i = {};
              if (e == null) return i;
              var s = !1;
              (n = me(n, function (f) {
                return (f = Wn(f, e)), s || (s = f.length > 1), f;
              })),
                Xt(e, zc(e), i),
                s && (i = Mt(i, R | y | F, BC));
              for (var u = n.length; u--; ) Cc(i, n[u]);
              return i;
            });
          function G3(e, n) {
            return Aw(e, os(Q(n)));
          }
          var Y3 = dn(function (e, n) {
            return e == null ? {} : VC(e, n);
          });
          function Aw(e, n) {
            if (e == null) return {};
            var i = me(zc(e), function (s) {
              return [s];
            });
            return (
              (n = Q(n)),
              ym(e, i, function (s, u) {
                return n(s, u[0]);
              })
            );
          }
          function H3(e, n, i) {
            n = Wn(n, e);
            var s = -1,
              u = n.length;
            for (u || ((u = 1), (e = r)); ++s < u; ) {
              var f = e == null ? r : e[Lt(n[s])];
              f === r && ((s = u), (f = i)), (e = fn(f) ? f.call(e) : f);
            }
            return e;
          }
          function P3(e, n, i) {
            return e == null ? e : ci(e, n, i);
          }
          function j3(e, n, i, s) {
            return (
              (s = typeof s == "function" ? s : r),
              e == null ? e : ci(e, n, i, s)
            );
          }
          var Ww = Hm(Ae),
            Cw = Hm(rt);
          function X3(e, n, i) {
            var s = j(e),
              u = s || xn(e) || eo(e);
            if (((n = Q(n, 4)), i == null)) {
              var f = e && e.constructor;
              u
                ? (i = s ? new f() : [])
                : we(e)
                ? (i = fn(f) ? Lr(Fa(e)) : {})
                : (i = {});
            }
            return (
              (u ? Nt : jt)(e, function (m, v, U) {
                return n(i, m, v, U);
              }),
              i
            );
          }
          function L3(e, n) {
            return e == null ? !0 : Cc(e, n);
          }
          function $3(e, n, i) {
            return e == null ? e : Jm(e, n, Ic(i));
          }
          function q3(e, n, i, s) {
            return (
              (s = typeof s == "function" ? s : r),
              e == null ? e : Jm(e, n, Ic(i), s)
            );
          }
          function to(e) {
            return e == null ? [] : wc(e, Ae(e));
          }
          function K3(e) {
            return e == null ? [] : wc(e, rt(e));
          }
          function eI(e, n, i) {
            return (
              i === r && ((i = n), (n = r)),
              i !== r && ((i = Jt(i)), (i = i === i ? i : 0)),
              n !== r && ((n = Jt(n)), (n = n === n ? n : 0)),
              ir(Jt(e), n, i)
            );
          }
          function tI(e, n, i) {
            return (
              (n = pn(n)),
              i === r ? ((i = n), (n = 0)) : (i = pn(i)),
              (e = Jt(e)),
              sC(e, n, i)
            );
          }
          function nI(e, n, i) {
            if (
              (i && typeof i != "boolean" && Xe(e, n, i) && (n = i = r),
              i === r &&
                (typeof n == "boolean"
                  ? ((i = n), (n = r))
                  : typeof e == "boolean" && ((i = e), (e = r))),
              e === r && n === r
                ? ((e = 0), (n = 1))
                : ((e = pn(e)), n === r ? ((n = e), (e = 0)) : (n = pn(n))),
              e > n)
            ) {
              var s = e;
              (e = n), (n = s);
            }
            if (i || e % 1 || n % 1) {
              var u = im();
              return Ge(e + u * (n - e + WA("1e-" + ((u + "").length - 1))), n);
            }
            return Fc(e, n);
          }
          var rI = qr(function (e, n, i) {
            return (n = n.toLowerCase()), e + (i ? xw(n) : n);
          });
          function xw(e) {
            return iu(ie(e).toLowerCase());
          }
          function Bw(e) {
            return (e = ie(e)), e && e.replace(iA, PA).replace(yA, "");
          }
          function oI(e, n, i) {
            (e = ie(e)), (n = pt(n));
            var s = e.length;
            i = i === r ? s : ir(X(i), 0, s);
            var u = i;
            return (i -= n.length), i >= 0 && e.slice(i, u) == n;
          }
          function iI(e) {
            return (e = ie(e)), e && DF.test(e) ? e.replace(pp, jA) : e;
          }
          function aI(e) {
            return (e = ie(e)), e && YF.test(e) ? e.replace(ec, "\\$&") : e;
          }
          var sI = qr(function (e, n, i) {
              return e + (i ? "-" : "") + n.toLowerCase();
            }),
            lI = qr(function (e, n, i) {
              return e + (i ? " " : "") + n.toLowerCase();
            }),
            cI = _m("toLowerCase");
          function uI(e, n, i) {
            (e = ie(e)), (n = X(n));
            var s = n ? Yr(e) : 0;
            if (!n || s >= n) return e;
            var u = (n - s) / 2;
            return Xa(xa(u), i) + e + Xa(Ca(u), i);
          }
          function dI(e, n, i) {
            (e = ie(e)), (n = X(n));
            var s = n ? Yr(e) : 0;
            return n && s < n ? e + Xa(n - s, i) : e;
          }
          function hI(e, n, i) {
            (e = ie(e)), (n = X(n));
            var s = n ? Yr(e) : 0;
            return n && s < n ? Xa(n - s, i) + e : e;
          }
          function fI(e, n, i) {
            return (
              i || n == null ? (n = 0) : n && (n = +n),
              gW(ie(e).replace(tc, ""), n || 0)
            );
          }
          function pI(e, n, i) {
            return (
              (i ? Xe(e, n, i) : n === r) ? (n = 1) : (n = X(n)), Ac(ie(e), n)
            );
          }
          function mI() {
            var e = arguments,
              n = ie(e[0]);
            return e.length < 3 ? n : n.replace(e[1], e[2]);
          }
          var wI = qr(function (e, n, i) {
            return e + (i ? "_" : "") + n.toLowerCase();
          });
          function vI(e, n, i) {
            return (
              i && typeof i != "number" && Xe(e, n, i) && (n = i = r),
              (i = i === r ? Pt : i >>> 0),
              i
                ? ((e = ie(e)),
                  e &&
                  (typeof n == "string" || (n != null && !nu(n))) &&
                  ((n = pt(n)), !n && Gr(e))
                    ? Cn(It(e), 0, i)
                    : e.split(n, i))
                : []
            );
          }
          var VI = qr(function (e, n, i) {
            return e + (i ? " " : "") + iu(n);
          });
          function TI(e, n, i) {
            return (
              (e = ie(e)),
              (i = i == null ? 0 : ir(X(i), 0, e.length)),
              (n = pt(n)),
              e.slice(i, i + n.length) == n
            );
          }
          function gI(e, n, i) {
            var s = h.templateSettings;
            i && Xe(e, n, i) && (n = r), (e = ie(e)), (n = ss({}, n, s, Pm));
            var u = ss({}, n.imports, s.imports, Pm),
              f = Ae(u),
              m = wc(u, f),
              v,
              U,
              Z = 0,
              b = n.interpolate || ga,
              J = "__p += '",
              S = Vc(
                (n.escape || ga).source +
                  "|" +
                  b.source +
                  "|" +
                  (b === mp ? KF : ga).source +
                  "|" +
                  (n.evaluate || ga).source +
                  "|$",
                "g"
              ),
              D =
                "//# sourceURL=" +
                (se.call(n, "sourceURL")
                  ? (n.sourceURL + "").replace(/\s/g, " ")
                  : "lodash.templateSources[" + ++JA + "]") +
                `
`;
            e.replace(S, function (Y, ee, ne, wt, Le, vt) {
              return (
                ne || (ne = wt),
                (J += e.slice(Z, vt).replace(aA, XA)),
                ee &&
                  ((v = !0),
                  (J +=
                    `' +
__e(` +
                    ee +
                    `) +
'`)),
                Le &&
                  ((U = !0),
                  (J +=
                    `';
` +
                    Le +
                    `;
__p += '`)),
                ne &&
                  (J +=
                    `' +
((__t = (` +
                    ne +
                    `)) == null ? '' : __t) +
'`),
                (Z = vt + Y.length),
                Y
              );
            }),
              (J += `';
`);
            var G = se.call(n, "variable") && n.variable;
            if (!G)
              J =
                `with (obj) {
` +
                J +
                `
}
`;
            else if ($F.test(G)) throw new P(p);
            (J = (U ? J.replace(CF, "") : J)
              .replace(xF, "$1")
              .replace(BF, "$1;")),
              (J =
                "function(" +
                (G || "obj") +
                `) {
` +
                (G
                  ? ""
                  : `obj || (obj = {});
`) +
                "var __t, __p = ''" +
                (v ? ", __e = _.escape" : "") +
                (U
                  ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                  : `;
`) +
                J +
                `return __p
}`);
            var L = Dw(function () {
              return oe(f, D + "return " + J).apply(r, m);
            });
            if (((L.source = J), tu(L))) throw L;
            return L;
          }
          function UI(e) {
            return ie(e).toLowerCase();
          }
          function RI(e) {
            return ie(e).toUpperCase();
          }
          function NI(e, n, i) {
            if (((e = ie(e)), e && (i || n === r))) return jp(e);
            if (!e || !(n = pt(n))) return e;
            var s = It(e),
              u = It(n),
              f = Xp(s, u),
              m = Lp(s, u) + 1;
            return Cn(s, f, m).join("");
          }
          function yI(e, n, i) {
            if (((e = ie(e)), e && (i || n === r)))
              return e.slice(0, qp(e) + 1);
            if (!e || !(n = pt(n))) return e;
            var s = It(e),
              u = Lp(s, It(n)) + 1;
            return Cn(s, 0, u).join("");
          }
          function kI(e, n, i) {
            if (((e = ie(e)), e && (i || n === r))) return e.replace(tc, "");
            if (!e || !(n = pt(n))) return e;
            var s = It(e),
              u = Xp(s, It(n));
            return Cn(s, u).join("");
          }
          function MI(e, n) {
            var i = he,
              s = ve;
            if (we(n)) {
              var u = "separator" in n ? n.separator : u;
              (i = "length" in n ? X(n.length) : i),
                (s = "omission" in n ? pt(n.omission) : s);
            }
            e = ie(e);
            var f = e.length;
            if (Gr(e)) {
              var m = It(e);
              f = m.length;
            }
            if (i >= f) return e;
            var v = i - Yr(s);
            if (v < 1) return s;
            var U = m ? Cn(m, 0, v).join("") : e.slice(0, v);
            if (u === r) return U + s;
            if ((m && (v += U.length - v), nu(u))) {
              if (e.slice(v).search(u)) {
                var Z,
                  b = U;
                for (
                  u.global || (u = Vc(u.source, ie(wp.exec(u)) + "g")),
                    u.lastIndex = 0;
                  (Z = u.exec(b));

                )
                  var J = Z.index;
                U = U.slice(0, J === r ? v : J);
              }
            } else if (e.indexOf(pt(u), v) != v) {
              var S = U.lastIndexOf(u);
              S > -1 && (U = U.slice(0, S));
            }
            return U + s;
          }
          function ZI(e) {
            return (e = ie(e)), e && IF.test(e) ? e.replace(fp, nW) : e;
          }
          var bI = qr(function (e, n, i) {
              return e + (i ? " " : "") + n.toUpperCase();
            }),
            iu = _m("toUpperCase");
          function Iw(e, n, i) {
            return (
              (e = ie(e)),
              (n = i ? r : n),
              n === r ? ($A(e) ? iW(e) : QA(e)) : e.match(n) || []
            );
          }
          var Dw = $(function (e, n) {
              try {
                return ht(e, r, n);
              } catch (i) {
                return tu(i) ? i : new P(i);
              }
            }),
            JI = dn(function (e, n) {
              return (
                Nt(n, function (i) {
                  (i = Lt(i)), cn(e, i, Kc(e[i], e));
                }),
                e
              );
            });
          function EI(e) {
            var n = e == null ? 0 : e.length,
              i = Q();
            return (
              (e = n
                ? me(e, function (s) {
                    if (typeof s[1] != "function") throw new yt(d);
                    return [i(s[0]), s[1]];
                  })
                : []),
              $(function (s) {
                for (var u = -1; ++u < n; ) {
                  var f = e[u];
                  if (ht(f[0], this, s)) return ht(f[1], this, s);
                }
              })
            );
          }
          function SI(e) {
            return nC(Mt(e, R));
          }
          function au(e) {
            return function () {
              return e;
            };
          }
          function FI(e, n) {
            return e == null || e !== e ? n : e;
          }
          var AI = Qm(),
            WI = Qm(!0);
          function ot(e) {
            return e;
          }
          function su(e) {
            return Vm(typeof e == "function" ? e : Mt(e, R));
          }
          function CI(e) {
            return gm(Mt(e, R));
          }
          function xI(e, n) {
            return Um(e, Mt(n, R));
          }
          var BI = $(function (e, n) {
              return function (i) {
                return si(i, e, n);
              };
            }),
            II = $(function (e, n) {
              return function (i) {
                return si(e, i, n);
              };
            });
          function lu(e, n, i) {
            var s = Ae(n),
              u = Qa(n, s);
            i == null &&
              !(we(n) && (u.length || !s.length)) &&
              ((i = n), (n = e), (e = this), (u = Qa(n, Ae(n))));
            var f = !(we(i) && "chain" in i) || !!i.chain,
              m = fn(e);
            return (
              Nt(u, function (v) {
                var U = n[v];
                (e[v] = U),
                  m &&
                    (e.prototype[v] = function () {
                      var Z = this.__chain__;
                      if (f || Z) {
                        var b = e(this.__wrapped__),
                          J = (b.__actions__ = tt(this.__actions__));
                        return (
                          J.push({ func: U, args: arguments, thisArg: e }),
                          (b.__chain__ = Z),
                          b
                        );
                      }
                      return U.apply(e, Jn([this.value()], arguments));
                    });
              }),
              e
            );
          }
          function DI() {
            return De._ === this && (De._ = dW), this;
          }
          function cu() {}
          function _I(e) {
            return (
              (e = X(e)),
              $(function (n) {
                return Rm(n, e);
              })
            );
          }
          var OI = _c(me),
            QI = _c(zp),
            zI = _c(dc);
          function _w(e) {
            return Pc(e) ? hc(Lt(e)) : TC(e);
          }
          function GI(e) {
            return function (n) {
              return e == null ? r : ar(e, n);
            };
          }
          var YI = Gm(),
            HI = Gm(!0);
          function uu() {
            return [];
          }
          function du() {
            return !1;
          }
          function PI() {
            return {};
          }
          function jI() {
            return "";
          }
          function XI() {
            return !0;
          }
          function LI(e, n) {
            if (((e = X(e)), e < 1 || e > Pe)) return [];
            var i = Pt,
              s = Ge(e, Pt);
            (n = Q(n)), (e -= Pt);
            for (var u = mc(s, n); ++i < e; ) n(i);
            return u;
          }
          function $I(e) {
            return j(e) ? me(e, Lt) : mt(e) ? [e] : tt(aw(ie(e)));
          }
          function qI(e) {
            var n = ++cW;
            return ie(e) + n;
          }
          var KI = ja(function (e, n) {
              return e + n;
            }, 0),
            eD = Oc("ceil"),
            tD = ja(function (e, n) {
              return e / n;
            }, 1),
            nD = Oc("floor");
          function rD(e) {
            return e && e.length ? Oa(e, ot, Mc) : r;
          }
          function oD(e, n) {
            return e && e.length ? Oa(e, Q(n, 2), Mc) : r;
          }
          function iD(e) {
            return Hp(e, ot);
          }
          function aD(e, n) {
            return Hp(e, Q(n, 2));
          }
          function sD(e) {
            return e && e.length ? Oa(e, ot, Ec) : r;
          }
          function lD(e, n) {
            return e && e.length ? Oa(e, Q(n, 2), Ec) : r;
          }
          var cD = ja(function (e, n) {
              return e * n;
            }, 1),
            uD = Oc("round"),
            dD = ja(function (e, n) {
              return e - n;
            }, 0);
          function hD(e) {
            return e && e.length ? pc(e, ot) : 0;
          }
          function fD(e, n) {
            return e && e.length ? pc(e, Q(n, 2)) : 0;
          }
          return (
            (h.after = CB),
            (h.ary = vw),
            (h.assign = R3),
            (h.assignIn = Sw),
            (h.assignInWith = ss),
            (h.assignWith = N3),
            (h.at = y3),
            (h.before = Vw),
            (h.bind = Kc),
            (h.bindAll = JI),
            (h.bindKey = Tw),
            (h.castArray = PB),
            (h.chain = pw),
            (h.chunk = nx),
            (h.compact = rx),
            (h.concat = ox),
            (h.cond = EI),
            (h.conforms = SI),
            (h.constant = au),
            (h.countBy = hB),
            (h.create = k3),
            (h.curry = gw),
            (h.curryRight = Uw),
            (h.debounce = Rw),
            (h.defaults = M3),
            (h.defaultsDeep = Z3),
            (h.defer = xB),
            (h.delay = BB),
            (h.difference = ix),
            (h.differenceBy = ax),
            (h.differenceWith = sx),
            (h.drop = lx),
            (h.dropRight = cx),
            (h.dropRightWhile = ux),
            (h.dropWhile = dx),
            (h.fill = hx),
            (h.filter = pB),
            (h.flatMap = vB),
            (h.flatMapDeep = VB),
            (h.flatMapDepth = TB),
            (h.flatten = uw),
            (h.flattenDeep = fx),
            (h.flattenDepth = px),
            (h.flip = IB),
            (h.flow = AI),
            (h.flowRight = WI),
            (h.fromPairs = mx),
            (h.functions = W3),
            (h.functionsIn = C3),
            (h.groupBy = gB),
            (h.initial = vx),
            (h.intersection = Vx),
            (h.intersectionBy = Tx),
            (h.intersectionWith = gx),
            (h.invert = B3),
            (h.invertBy = I3),
            (h.invokeMap = RB),
            (h.iteratee = su),
            (h.keyBy = NB),
            (h.keys = Ae),
            (h.keysIn = rt),
            (h.map = ts),
            (h.mapKeys = _3),
            (h.mapValues = O3),
            (h.matches = CI),
            (h.matchesProperty = xI),
            (h.memoize = rs),
            (h.merge = Q3),
            (h.mergeWith = Fw),
            (h.method = BI),
            (h.methodOf = II),
            (h.mixin = lu),
            (h.negate = os),
            (h.nthArg = _I),
            (h.omit = z3),
            (h.omitBy = G3),
            (h.once = DB),
            (h.orderBy = yB),
            (h.over = OI),
            (h.overArgs = _B),
            (h.overEvery = QI),
            (h.overSome = zI),
            (h.partial = eu),
            (h.partialRight = Nw),
            (h.partition = kB),
            (h.pick = Y3),
            (h.pickBy = Aw),
            (h.property = _w),
            (h.propertyOf = GI),
            (h.pull = yx),
            (h.pullAll = hw),
            (h.pullAllBy = kx),
            (h.pullAllWith = Mx),
            (h.pullAt = Zx),
            (h.range = YI),
            (h.rangeRight = HI),
            (h.rearg = OB),
            (h.reject = bB),
            (h.remove = bx),
            (h.rest = QB),
            (h.reverse = $c),
            (h.sampleSize = EB),
            (h.set = P3),
            (h.setWith = j3),
            (h.shuffle = SB),
            (h.slice = Jx),
            (h.sortBy = WB),
            (h.sortedUniq = xx),
            (h.sortedUniqBy = Bx),
            (h.split = vI),
            (h.spread = zB),
            (h.tail = Ix),
            (h.take = Dx),
            (h.takeRight = _x),
            (h.takeRightWhile = Ox),
            (h.takeWhile = Qx),
            (h.tap = rB),
            (h.throttle = GB),
            (h.thru = es),
            (h.toArray = bw),
            (h.toPairs = Ww),
            (h.toPairsIn = Cw),
            (h.toPath = $I),
            (h.toPlainObject = Ew),
            (h.transform = X3),
            (h.unary = YB),
            (h.union = zx),
            (h.unionBy = Gx),
            (h.unionWith = Yx),
            (h.uniq = Hx),
            (h.uniqBy = Px),
            (h.uniqWith = jx),
            (h.unset = L3),
            (h.unzip = qc),
            (h.unzipWith = fw),
            (h.update = $3),
            (h.updateWith = q3),
            (h.values = to),
            (h.valuesIn = K3),
            (h.without = Xx),
            (h.words = Iw),
            (h.wrap = HB),
            (h.xor = Lx),
            (h.xorBy = $x),
            (h.xorWith = qx),
            (h.zip = Kx),
            (h.zipObject = eB),
            (h.zipObjectDeep = tB),
            (h.zipWith = nB),
            (h.entries = Ww),
            (h.entriesIn = Cw),
            (h.extend = Sw),
            (h.extendWith = ss),
            lu(h, h),
            (h.add = KI),
            (h.attempt = Dw),
            (h.camelCase = rI),
            (h.capitalize = xw),
            (h.ceil = eD),
            (h.clamp = eI),
            (h.clone = jB),
            (h.cloneDeep = LB),
            (h.cloneDeepWith = $B),
            (h.cloneWith = XB),
            (h.conformsTo = qB),
            (h.deburr = Bw),
            (h.defaultTo = FI),
            (h.divide = tD),
            (h.endsWith = oI),
            (h.eq = _t),
            (h.escape = iI),
            (h.escapeRegExp = aI),
            (h.every = fB),
            (h.find = mB),
            (h.findIndex = lw),
            (h.findKey = b3),
            (h.findLast = wB),
            (h.findLastIndex = cw),
            (h.findLastKey = J3),
            (h.floor = nD),
            (h.forEach = mw),
            (h.forEachRight = ww),
            (h.forIn = E3),
            (h.forInRight = S3),
            (h.forOwn = F3),
            (h.forOwnRight = A3),
            (h.get = ru),
            (h.gt = KB),
            (h.gte = e3),
            (h.has = x3),
            (h.hasIn = ou),
            (h.head = dw),
            (h.identity = ot),
            (h.includes = UB),
            (h.indexOf = wx),
            (h.inRange = tI),
            (h.invoke = D3),
            (h.isArguments = cr),
            (h.isArray = j),
            (h.isArrayBuffer = t3),
            (h.isArrayLike = nt),
            (h.isArrayLikeObject = Ne),
            (h.isBoolean = n3),
            (h.isBuffer = xn),
            (h.isDate = r3),
            (h.isElement = o3),
            (h.isEmpty = i3),
            (h.isEqual = a3),
            (h.isEqualWith = s3),
            (h.isError = tu),
            (h.isFinite = l3),
            (h.isFunction = fn),
            (h.isInteger = yw),
            (h.isLength = is),
            (h.isMap = kw),
            (h.isMatch = c3),
            (h.isMatchWith = u3),
            (h.isNaN = d3),
            (h.isNative = h3),
            (h.isNil = p3),
            (h.isNull = f3),
            (h.isNumber = Mw),
            (h.isObject = we),
            (h.isObjectLike = Te),
            (h.isPlainObject = fi),
            (h.isRegExp = nu),
            (h.isSafeInteger = m3),
            (h.isSet = Zw),
            (h.isString = as),
            (h.isSymbol = mt),
            (h.isTypedArray = eo),
            (h.isUndefined = w3),
            (h.isWeakMap = v3),
            (h.isWeakSet = V3),
            (h.join = Ux),
            (h.kebabCase = sI),
            (h.last = bt),
            (h.lastIndexOf = Rx),
            (h.lowerCase = lI),
            (h.lowerFirst = cI),
            (h.lt = T3),
            (h.lte = g3),
            (h.max = rD),
            (h.maxBy = oD),
            (h.mean = iD),
            (h.meanBy = aD),
            (h.min = sD),
            (h.minBy = lD),
            (h.stubArray = uu),
            (h.stubFalse = du),
            (h.stubObject = PI),
            (h.stubString = jI),
            (h.stubTrue = XI),
            (h.multiply = cD),
            (h.nth = Nx),
            (h.noConflict = DI),
            (h.noop = cu),
            (h.now = ns),
            (h.pad = uI),
            (h.padEnd = dI),
            (h.padStart = hI),
            (h.parseInt = fI),
            (h.random = nI),
            (h.reduce = MB),
            (h.reduceRight = ZB),
            (h.repeat = pI),
            (h.replace = mI),
            (h.result = H3),
            (h.round = uD),
            (h.runInContext = T),
            (h.sample = JB),
            (h.size = FB),
            (h.snakeCase = wI),
            (h.some = AB),
            (h.sortedIndex = Ex),
            (h.sortedIndexBy = Sx),
            (h.sortedIndexOf = Fx),
            (h.sortedLastIndex = Ax),
            (h.sortedLastIndexBy = Wx),
            (h.sortedLastIndexOf = Cx),
            (h.startCase = VI),
            (h.startsWith = TI),
            (h.subtract = dD),
            (h.sum = hD),
            (h.sumBy = fD),
            (h.template = gI),
            (h.times = LI),
            (h.toFinite = pn),
            (h.toInteger = X),
            (h.toLength = Jw),
            (h.toLower = UI),
            (h.toNumber = Jt),
            (h.toSafeInteger = U3),
            (h.toString = ie),
            (h.toUpper = RI),
            (h.trim = NI),
            (h.trimEnd = yI),
            (h.trimStart = kI),
            (h.truncate = MI),
            (h.unescape = ZI),
            (h.uniqueId = qI),
            (h.upperCase = bI),
            (h.upperFirst = iu),
            (h.each = mw),
            (h.eachRight = ww),
            (h.first = dw),
            lu(
              h,
              (function () {
                var e = {};
                return (
                  jt(h, function (n, i) {
                    se.call(h.prototype, i) || (e[i] = n);
                  }),
                  e
                );
              })(),
              { chain: !1 }
            ),
            (h.VERSION = a),
            Nt(
              [
                "bind",
                "bindKey",
                "curry",
                "curryRight",
                "partial",
                "partialRight",
              ],
              function (e) {
                h[e].placeholder = h;
              }
            ),
            Nt(["drop", "take"], function (e, n) {
              (te.prototype[e] = function (i) {
                i = i === r ? 1 : Ee(X(i), 0);
                var s = this.__filtered__ && !n ? new te(this) : this.clone();
                return (
                  s.__filtered__
                    ? (s.__takeCount__ = Ge(i, s.__takeCount__))
                    : s.__views__.push({
                        size: Ge(i, Pt),
                        type: e + (s.__dir__ < 0 ? "Right" : ""),
                      }),
                  s
                );
              }),
                (te.prototype[e + "Right"] = function (i) {
                  return this.reverse()[e](i).reverse();
                });
            }),
            Nt(["filter", "map", "takeWhile"], function (e, n) {
              var i = n + 1,
                s = i == Ze || i == Be;
              te.prototype[e] = function (u) {
                var f = this.clone();
                return (
                  f.__iteratees__.push({ iteratee: Q(u, 3), type: i }),
                  (f.__filtered__ = f.__filtered__ || s),
                  f
                );
              };
            }),
            Nt(["head", "last"], function (e, n) {
              var i = "take" + (n ? "Right" : "");
              te.prototype[e] = function () {
                return this[i](1).value()[0];
              };
            }),
            Nt(["initial", "tail"], function (e, n) {
              var i = "drop" + (n ? "" : "Right");
              te.prototype[e] = function () {
                return this.__filtered__ ? new te(this) : this[i](1);
              };
            }),
            (te.prototype.compact = function () {
              return this.filter(ot);
            }),
            (te.prototype.find = function (e) {
              return this.filter(e).head();
            }),
            (te.prototype.findLast = function (e) {
              return this.reverse().find(e);
            }),
            (te.prototype.invokeMap = $(function (e, n) {
              return typeof e == "function"
                ? new te(this)
                : this.map(function (i) {
                    return si(i, e, n);
                  });
            })),
            (te.prototype.reject = function (e) {
              return this.filter(os(Q(e)));
            }),
            (te.prototype.slice = function (e, n) {
              e = X(e);
              var i = this;
              return i.__filtered__ && (e > 0 || n < 0)
                ? new te(i)
                : (e < 0 ? (i = i.takeRight(-e)) : e && (i = i.drop(e)),
                  n !== r &&
                    ((n = X(n)), (i = n < 0 ? i.dropRight(-n) : i.take(n - e))),
                  i);
            }),
            (te.prototype.takeRightWhile = function (e) {
              return this.reverse().takeWhile(e).reverse();
            }),
            (te.prototype.toArray = function () {
              return this.take(Pt);
            }),
            jt(te.prototype, function (e, n) {
              var i = /^(?:filter|find|map|reject)|While$/.test(n),
                s = /^(?:head|last)$/.test(n),
                u = h[s ? "take" + (n == "last" ? "Right" : "") : n],
                f = s || /^find/.test(n);
              !u ||
                (h.prototype[n] = function () {
                  var m = this.__wrapped__,
                    v = s ? [1] : arguments,
                    U = m instanceof te,
                    Z = v[0],
                    b = U || j(m),
                    J = function (ee) {
                      var ne = u.apply(h, Jn([ee], v));
                      return s && S ? ne[0] : ne;
                    };
                  b &&
                    i &&
                    typeof Z == "function" &&
                    Z.length != 1 &&
                    (U = b = !1);
                  var S = this.__chain__,
                    D = !!this.__actions__.length,
                    G = f && !S,
                    L = U && !D;
                  if (!f && b) {
                    m = L ? m : new te(this);
                    var Y = e.apply(m, v);
                    return (
                      Y.__actions__.push({ func: es, args: [J], thisArg: r }),
                      new kt(Y, S)
                    );
                  }
                  return G && L
                    ? e.apply(this, v)
                    : ((Y = this.thru(J)),
                      G ? (s ? Y.value()[0] : Y.value()) : Y);
                });
            }),
            Nt(
              ["pop", "push", "shift", "sort", "splice", "unshift"],
              function (e) {
                var n = Ma[e],
                  i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                  s = /^(?:pop|shift)$/.test(e);
                h.prototype[e] = function () {
                  var u = arguments;
                  if (s && !this.__chain__) {
                    var f = this.value();
                    return n.apply(j(f) ? f : [], u);
                  }
                  return this[i](function (m) {
                    return n.apply(j(m) ? m : [], u);
                  });
                };
              }
            ),
            jt(te.prototype, function (e, n) {
              var i = h[n];
              if (i) {
                var s = i.name + "";
                se.call(Xr, s) || (Xr[s] = []),
                  Xr[s].push({ name: n, func: i });
              }
            }),
            (Xr[Pa(r, A).name] = [{ name: "wrapper", func: r }]),
            (te.prototype.clone = ZW),
            (te.prototype.reverse = bW),
            (te.prototype.value = JW),
            (h.prototype.at = oB),
            (h.prototype.chain = iB),
            (h.prototype.commit = aB),
            (h.prototype.next = sB),
            (h.prototype.plant = cB),
            (h.prototype.reverse = uB),
            (h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = dB),
            (h.prototype.first = h.prototype.head),
            ei && (h.prototype[ei] = lB),
            h
          );
        },
        Hr = aW();
      tr ? (((tr.exports = Hr)._ = Hr), (sc._ = Hr)) : (De._ = Hr);
    }.call(no));
  })(ke, ke.exports);
  const sv = "/alarms?_s=",
    Ui = { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
    lv = async (t, o) => {
      try {
        return (
          (await Vn.put(`/alarms/${t}?ack=${o}`, { body: `alarm=${t}` }, Ui))
            .status === 204
        );
      } catch {
        return !1;
      }
    },
    cv = async (t, o) => {
      try {
        return (
          (await Vn.put(`/alarms/${t}?${o}=true`, { body: `alarm=${t}` }, Ui))
            .status === 204
        );
      } catch {
        return !1;
      }
    },
    uv = async (t, o) => {
      try {
        const r = t.join(",alarm.id==");
        return (
          (await vn.put(`alarms?_s=alarm.id==${r}&${o}=true`, null, Ui))
            .status == 204
        );
      } catch {
        return !1;
      }
    },
    dv = async () => {
      try {
        const t = `${sv}isSituation==true&limit=0`,
          o = await vn(t);
        return o.status === 200 ? o.data : !1;
      } catch {
        return !1;
      }
    },
    hv = async (t) => {
      try {
        const o = t.join(",id=="),
          r = await vn(`/alarms?_s=id==${o}`);
        return r.status === 200 ? r.data.alarm : !1;
      } catch {
        return !1;
      }
    },
    Ku = async (t) => {
      try {
        const o = await vn(`/alarms/${t}`);
        return o.status === 200 ? o.data : null;
      } catch {
        return null;
      }
    },
    fv = async (t) => {
      try {
        const o = await vn(`/events?_s=alarm.id==${t}`);
        return o.status === 200 ? o.data.event : null;
      } catch {
        return null;
      }
    },
    pv = async () => {
      try {
        const t = await vn("/nodes?limit=0");
        return t.status === 200
          ? t.data.node.map((a) => ke.exports.pick(a, ["id", "label"]))
          : !1;
      } catch {
        return !1;
      }
    },
    mv = async (t, o, r) => {
      try {
        return (
          (await vn.put(`/alarms/${t}/${o}`, `body=${r}`, Ui)).status == 204
        );
      } catch {
        return !1;
      }
    },
    wv = async (t, o) => {
      try {
        return (await vn.delete(`/alarms/${t}/${o}`)).status == 204;
      } catch {
        return !1;
      }
    },
    at = {
      ENGINE_DBSCAN: "dbscan",
      ENGINE_DEEP_LEARNING: "cluster",
      HELLINGER_OPTION: "hellinger",
      SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
      DATE_FORMAT: "d/M/y HH:mm:ss",
      ACCEPTED: "ACCEPTED",
      REJECTED: "REJECTED",
      ESCALATE: "escalate",
      CLEAR: "clear",
    },
    vv = "/alec",
    Vv = "/alec/engine/configuration",
    ed = "/alec/agreement/configuration",
    Tv = "/alec/situation/statusList",
    td = async (t) => {
      try {
        return (await Vn.post(`${ed}`, { agreed: t })).status === 201;
      } catch {
        return !1;
      }
    },
    gv = async () => {
      try {
        const t = await Vn.get(`${ed}`);
        return t.status === 200 ? t.data : !1;
      } catch {
        return !1;
      }
    },
    Uv = async (t, o) => {
      try {
        return (
          (
            await Vn.post(Vv, {
              distanceMeasureName: o
                ? at.HELLINGER_OPTION
                : at.SPACE_DISTANCE_OPTION,
              engineName: t,
              alpha: 144.47117699,
              beta: 0.55257784,
              epsilon: 100,
            })
          ).status === 200
        );
      } catch {
        return !1;
      }
    },
    nd = async (t, o) => {
      try {
        return (
          (
            await Vn.post(`${vv}/situation/${o}/${t}`, {
              headers: { "Access-Control-Allow-Origin": "*" },
            })
          ).status === 200
        );
      } catch {
        return !1;
      }
    },
    Rv = async () => {
      try {
        const t = await Vn.get(Tv);
        return t.status === 200, t.data;
      } catch {
        return !1;
      }
    },
    Nv = window.Pinia.defineStore,
    mr = Nv("situationsStore", {
      state: () => ({
        situations: [],
        selectedSituation: -1,
        situationDetail: null,
        filteredSituations: [],
        nodes: [],
        filters: null,
      }),
      actions: {
        async getNodes() {
          this.nodes = [];
          const t = await pv();
          t && (this.nodes = t);
        },
        async getSituations() {
          this.situations = [];
          const t = await dv(),
            o = await Rv();
          if (t) {
            const r = t.alarm.map((c) => {
              const d = o.filter((p) => parseInt(p.id) === c.id);
              return (c.status = d && d[0] ? d[0].status : "CREATED"), c;
            });
            this.filteredSituations = r.map((c) => c.id);
            const a = ke.exports.groupBy(r, "status"),
              l = [
                ...(a.CREATED || []),
                ...(a.ACCEPTED || []),
                ...(a.REJECTED || []),
              ];
            this.situations = l;
          }
        },
        async getSituation(t) {
          if (t) {
            const o = await Ku(t);
            if (o) {
              const r = o.relatedAlarms.map((c) => c.id),
                l = await hv(r);
              (o.alarms = ke.exports.sortBy(l, ["id"])),
                (this.situationDetail = o);
            }
          }
        },
        async getEvents(t, o) {
          const r = {};
          await Promise.all(
            o.map(async (a) => {
              const l = await fv(a);
              l && (r[a] = ke.exports.reverse(l));
            })
          ),
            this.situationDetail && (this.situationDetail.events = r);
        },
      },
    }),
    yv = window.Vue.openBlock,
    kv = window.Vue.createElementBlock,
    Mv = window.Vue.createElementVNode;
  var Zv = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const bv = {},
    Jv = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    Ev = [
      Mv(
        "path",
        {
          d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z",
        },
        null,
        -1
      ),
    ];
  function Sv(t, o) {
    return yv(), kv("svg", Jv, Ev);
  }
  var ro = Zv(bv, [["render", Sv]]);
  const wD = "";
  var Fv = Object.defineProperty,
    rd = Object.getOwnPropertySymbols,
    Av = Object.prototype.hasOwnProperty,
    Wv = Object.prototype.propertyIsEnumerable,
    od = (t, o, r) =>
      o in t
        ? Fv(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    id = (t, o) => {
      for (var r in o || (o = {})) Av.call(o, r) && od(t, r, o[r]);
      if (rd) for (var r of rd(o)) Wv.call(o, r) && od(t, r, o[r]);
      return t;
    };
  const Cv = window.Vue.defineComponent,
    xv = window.Vue.toRaw,
    As = window.Vue.h;
  var Bv = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const Iv = Cv({
    props: {
      icon: { type: Object, required: !1 },
      flex: { type: Boolean, default: !1 },
      title: { type: String, required: !1 },
    },
    render() {
      const t = this.$attrs,
        o = t.class
          ? t.class.split(" ").reduce((l, c) => ((l[c] = !0), l), {})
          : {},
        r = {};
      (o["feather-icon"] = !0),
        this.flex && (o["feather-icon-flex"] = !0),
        this.title
          ? ((r["aria-label"] = this.title), (r["aria-hidden"] = "false"))
          : (r["aria-hidden"] = "true"),
        (r.focusable = "false"),
        (r.role = "img");
      let a = xv(this.icon);
      return this.$slots.default
        ? As("span", { class: "feather-icon-container" }, [
            As(this.$slots.default()[0], id({ class: o }, r)),
          ])
        : As(a, id({ class: o }, r));
    },
  });
  var q = Bv(Iv, [["__scopeId", "data-v-52cbf270"]]);
  const Dv = window.Vue.openBlock,
    _v = window.Vue.createElementBlock,
    Ov = window.Vue.createElementVNode;
  var Qv = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const zv = {},
    Gv = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    Yv = [
      Ov(
        "path",
        {
          d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z",
        },
        null,
        -1
      ),
    ];
  function Hv(t, o) {
    return Dv(), _v("svg", Gv, Yv);
  }
  var ad = Qv(zv, [["render", Hv]]);
  function In(t) {
    if (t === null || t === !0 || t === !1) return NaN;
    var o = Number(t);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  function Ce(t, o) {
    if (o.length < t)
      throw new TypeError(
        t +
          " argument" +
          (t > 1 ? "s" : "") +
          " required, but only " +
          o.length +
          " present"
      );
  }
  function Oe(t) {
    Ce(1, arguments);
    var o = Object.prototype.toString.call(t);
    return t instanceof Date || (typeof t == "object" && o === "[object Date]")
      ? new Date(t.getTime())
      : typeof t == "number" || o === "[object Number]"
      ? new Date(t)
      : ((typeof t == "string" || o === "[object String]") &&
          typeof console < "u" &&
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
  }
  function Pv(t, o) {
    Ce(2, arguments);
    var r = Oe(t).getTime(),
      a = In(o);
    return new Date(r + a);
  }
  var jv = {};
  function oo() {
    return jv;
  }
  function Ws(t) {
    var o = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
    return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
  }
  function Xv(t, o) {
    Ce(2, arguments);
    var r = Oe(t),
      a = Oe(o),
      l = r.getTime() - a.getTime();
    return l < 0 ? -1 : l > 0 ? 1 : l;
  }
  function Lv(t) {
    return (
      Ce(1, arguments),
      t instanceof Date ||
        (typeof t == "object" &&
          Object.prototype.toString.call(t) === "[object Date]")
    );
  }
  function $v(t) {
    if ((Ce(1, arguments), !Lv(t) && typeof t != "number")) return !1;
    var o = Oe(t);
    return !isNaN(Number(o));
  }
  function qv(t, o) {
    Ce(2, arguments);
    var r = In(o);
    return Pv(t, -r);
  }
  var Kv = 864e5;
  function eV(t) {
    Ce(1, arguments);
    var o = Oe(t),
      r = o.getTime();
    o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
    var a = o.getTime(),
      l = r - a;
    return Math.floor(l / Kv) + 1;
  }
  function Ri(t) {
    Ce(1, arguments);
    var o = 1,
      r = Oe(t),
      a = r.getUTCDay(),
      l = (a < o ? 7 : 0) + a - o;
    return r.setUTCDate(r.getUTCDate() - l), r.setUTCHours(0, 0, 0, 0), r;
  }
  function sd(t) {
    Ce(1, arguments);
    var o = Oe(t),
      r = o.getUTCFullYear(),
      a = new Date(0);
    a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
    var l = Ri(a),
      c = new Date(0);
    c.setUTCFullYear(r, 0, 4), c.setUTCHours(0, 0, 0, 0);
    var d = Ri(c);
    return o.getTime() >= l.getTime()
      ? r + 1
      : o.getTime() >= d.getTime()
      ? r
      : r - 1;
  }
  function tV(t) {
    Ce(1, arguments);
    var o = sd(t),
      r = new Date(0);
    r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
    var a = Ri(r);
    return a;
  }
  var nV = 6048e5;
  function rV(t) {
    Ce(1, arguments);
    var o = Oe(t),
      r = Ri(o).getTime() - tV(o).getTime();
    return Math.round(r / nV) + 1;
  }
  function Ni(t, o) {
    var r, a, l, c, d, p, w, V;
    Ce(1, arguments);
    var g = oo(),
      R = In(
        (r =
          (a =
            (l =
              (c = o == null ? void 0 : o.weekStartsOn) !== null && c !== void 0
                ? c
                : o == null ||
                  (d = o.locale) === null ||
                  d === void 0 ||
                  (p = d.options) === null ||
                  p === void 0
                ? void 0
                : p.weekStartsOn) !== null && l !== void 0
              ? l
              : g.weekStartsOn) !== null && a !== void 0
            ? a
            : (w = g.locale) === null ||
              w === void 0 ||
              (V = w.options) === null ||
              V === void 0
            ? void 0
            : V.weekStartsOn) !== null && r !== void 0
          ? r
          : 0
      );
    if (!(R >= 0 && R <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var y = Oe(t),
      F = y.getUTCDay(),
      E = (F < R ? 7 : 0) + F - R;
    return y.setUTCDate(y.getUTCDate() - E), y.setUTCHours(0, 0, 0, 0), y;
  }
  function ld(t, o) {
    var r, a, l, c, d, p, w, V;
    Ce(1, arguments);
    var g = Oe(t),
      R = g.getUTCFullYear(),
      y = oo(),
      F = In(
        (r =
          (a =
            (l =
              (c = o == null ? void 0 : o.firstWeekContainsDate) !== null &&
              c !== void 0
                ? c
                : o == null ||
                  (d = o.locale) === null ||
                  d === void 0 ||
                  (p = d.options) === null ||
                  p === void 0
                ? void 0
                : p.firstWeekContainsDate) !== null && l !== void 0
              ? l
              : y.firstWeekContainsDate) !== null && a !== void 0
            ? a
            : (w = y.locale) === null ||
              w === void 0 ||
              (V = w.options) === null ||
              V === void 0
            ? void 0
            : V.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : 1
      );
    if (!(F >= 1 && F <= 7))
      throw new RangeError(
        "firstWeekContainsDate must be between 1 and 7 inclusively"
      );
    var E = new Date(0);
    E.setUTCFullYear(R + 1, 0, F), E.setUTCHours(0, 0, 0, 0);
    var I = Ni(E, o),
      C = new Date(0);
    C.setUTCFullYear(R, 0, F), C.setUTCHours(0, 0, 0, 0);
    var A = Ni(C, o);
    return g.getTime() >= I.getTime()
      ? R + 1
      : g.getTime() >= A.getTime()
      ? R
      : R - 1;
  }
  function oV(t, o) {
    var r, a, l, c, d, p, w, V;
    Ce(1, arguments);
    var g = oo(),
      R = In(
        (r =
          (a =
            (l =
              (c = o == null ? void 0 : o.firstWeekContainsDate) !== null &&
              c !== void 0
                ? c
                : o == null ||
                  (d = o.locale) === null ||
                  d === void 0 ||
                  (p = d.options) === null ||
                  p === void 0
                ? void 0
                : p.firstWeekContainsDate) !== null && l !== void 0
              ? l
              : g.firstWeekContainsDate) !== null && a !== void 0
            ? a
            : (w = g.locale) === null ||
              w === void 0 ||
              (V = w.options) === null ||
              V === void 0
            ? void 0
            : V.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : 1
      ),
      y = ld(t, o),
      F = new Date(0);
    F.setUTCFullYear(y, 0, R), F.setUTCHours(0, 0, 0, 0);
    var E = Ni(F, o);
    return E;
  }
  var iV = 6048e5;
  function aV(t, o) {
    Ce(1, arguments);
    var r = Oe(t),
      a = Ni(r, o).getTime() - oV(r, o).getTime();
    return Math.round(a / iV) + 1;
  }
  function ae(t, o) {
    for (var r = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < o; )
      a = "0" + a;
    return r + a;
  }
  var sV = {
    y: function (t, o) {
      var r = t.getUTCFullYear(),
        a = r > 0 ? r : 1 - r;
      return ae(o === "yy" ? a % 100 : a, o.length);
    },
    M: function (t, o) {
      var r = t.getUTCMonth();
      return o === "M" ? String(r + 1) : ae(r + 1, 2);
    },
    d: function (t, o) {
      return ae(t.getUTCDate(), o.length);
    },
    a: function (t, o) {
      var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (o) {
        case "a":
        case "aa":
          return r.toUpperCase();
        case "aaa":
          return r;
        case "aaaaa":
          return r[0];
        case "aaaa":
        default:
          return r === "am" ? "a.m." : "p.m.";
      }
    },
    h: function (t, o) {
      return ae(t.getUTCHours() % 12 || 12, o.length);
    },
    H: function (t, o) {
      return ae(t.getUTCHours(), o.length);
    },
    m: function (t, o) {
      return ae(t.getUTCMinutes(), o.length);
    },
    s: function (t, o) {
      return ae(t.getUTCSeconds(), o.length);
    },
    S: function (t, o) {
      var r = o.length,
        a = t.getUTCMilliseconds(),
        l = Math.floor(a * Math.pow(10, r - 3));
      return ae(l, o.length);
    },
  };
  const Tn = sV;
  var wr = {
      am: "am",
      pm: "pm",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    lV = {
      G: function (t, o, r) {
        var a = t.getUTCFullYear() > 0 ? 1 : 0;
        switch (o) {
          case "G":
          case "GG":
          case "GGG":
            return r.era(a, { width: "abbreviated" });
          case "GGGGG":
            return r.era(a, { width: "narrow" });
          case "GGGG":
          default:
            return r.era(a, { width: "wide" });
        }
      },
      y: function (t, o, r) {
        if (o === "yo") {
          var a = t.getUTCFullYear(),
            l = a > 0 ? a : 1 - a;
          return r.ordinalNumber(l, { unit: "year" });
        }
        return Tn.y(t, o);
      },
      Y: function (t, o, r, a) {
        var l = ld(t, a),
          c = l > 0 ? l : 1 - l;
        if (o === "YY") {
          var d = c % 100;
          return ae(d, 2);
        }
        return o === "Yo"
          ? r.ordinalNumber(c, { unit: "year" })
          : ae(c, o.length);
      },
      R: function (t, o) {
        var r = sd(t);
        return ae(r, o.length);
      },
      u: function (t, o) {
        var r = t.getUTCFullYear();
        return ae(r, o.length);
      },
      Q: function (t, o, r) {
        var a = Math.ceil((t.getUTCMonth() + 1) / 3);
        switch (o) {
          case "Q":
            return String(a);
          case "QQ":
            return ae(a, 2);
          case "Qo":
            return r.ordinalNumber(a, { unit: "quarter" });
          case "QQQ":
            return r.quarter(a, {
              width: "abbreviated",
              context: "formatting",
            });
          case "QQQQQ":
            return r.quarter(a, { width: "narrow", context: "formatting" });
          case "QQQQ":
          default:
            return r.quarter(a, { width: "wide", context: "formatting" });
        }
      },
      q: function (t, o, r) {
        var a = Math.ceil((t.getUTCMonth() + 1) / 3);
        switch (o) {
          case "q":
            return String(a);
          case "qq":
            return ae(a, 2);
          case "qo":
            return r.ordinalNumber(a, { unit: "quarter" });
          case "qqq":
            return r.quarter(a, {
              width: "abbreviated",
              context: "standalone",
            });
          case "qqqqq":
            return r.quarter(a, { width: "narrow", context: "standalone" });
          case "qqqq":
          default:
            return r.quarter(a, { width: "wide", context: "standalone" });
        }
      },
      M: function (t, o, r) {
        var a = t.getUTCMonth();
        switch (o) {
          case "M":
          case "MM":
            return Tn.M(t, o);
          case "Mo":
            return r.ordinalNumber(a + 1, { unit: "month" });
          case "MMM":
            return r.month(a, { width: "abbreviated", context: "formatting" });
          case "MMMMM":
            return r.month(a, { width: "narrow", context: "formatting" });
          case "MMMM":
          default:
            return r.month(a, { width: "wide", context: "formatting" });
        }
      },
      L: function (t, o, r) {
        var a = t.getUTCMonth();
        switch (o) {
          case "L":
            return String(a + 1);
          case "LL":
            return ae(a + 1, 2);
          case "Lo":
            return r.ordinalNumber(a + 1, { unit: "month" });
          case "LLL":
            return r.month(a, { width: "abbreviated", context: "standalone" });
          case "LLLLL":
            return r.month(a, { width: "narrow", context: "standalone" });
          case "LLLL":
          default:
            return r.month(a, { width: "wide", context: "standalone" });
        }
      },
      w: function (t, o, r, a) {
        var l = aV(t, a);
        return o === "wo"
          ? r.ordinalNumber(l, { unit: "week" })
          : ae(l, o.length);
      },
      I: function (t, o, r) {
        var a = rV(t);
        return o === "Io"
          ? r.ordinalNumber(a, { unit: "week" })
          : ae(a, o.length);
      },
      d: function (t, o, r) {
        return o === "do"
          ? r.ordinalNumber(t.getUTCDate(), { unit: "date" })
          : Tn.d(t, o);
      },
      D: function (t, o, r) {
        var a = eV(t);
        return o === "Do"
          ? r.ordinalNumber(a, { unit: "dayOfYear" })
          : ae(a, o.length);
      },
      E: function (t, o, r) {
        var a = t.getUTCDay();
        switch (o) {
          case "E":
          case "EE":
          case "EEE":
            return r.day(a, { width: "abbreviated", context: "formatting" });
          case "EEEEE":
            return r.day(a, { width: "narrow", context: "formatting" });
          case "EEEEEE":
            return r.day(a, { width: "short", context: "formatting" });
          case "EEEE":
          default:
            return r.day(a, { width: "wide", context: "formatting" });
        }
      },
      e: function (t, o, r, a) {
        var l = t.getUTCDay(),
          c = (l - a.weekStartsOn + 8) % 7 || 7;
        switch (o) {
          case "e":
            return String(c);
          case "ee":
            return ae(c, 2);
          case "eo":
            return r.ordinalNumber(c, { unit: "day" });
          case "eee":
            return r.day(l, { width: "abbreviated", context: "formatting" });
          case "eeeee":
            return r.day(l, { width: "narrow", context: "formatting" });
          case "eeeeee":
            return r.day(l, { width: "short", context: "formatting" });
          case "eeee":
          default:
            return r.day(l, { width: "wide", context: "formatting" });
        }
      },
      c: function (t, o, r, a) {
        var l = t.getUTCDay(),
          c = (l - a.weekStartsOn + 8) % 7 || 7;
        switch (o) {
          case "c":
            return String(c);
          case "cc":
            return ae(c, o.length);
          case "co":
            return r.ordinalNumber(c, { unit: "day" });
          case "ccc":
            return r.day(l, { width: "abbreviated", context: "standalone" });
          case "ccccc":
            return r.day(l, { width: "narrow", context: "standalone" });
          case "cccccc":
            return r.day(l, { width: "short", context: "standalone" });
          case "cccc":
          default:
            return r.day(l, { width: "wide", context: "standalone" });
        }
      },
      i: function (t, o, r) {
        var a = t.getUTCDay(),
          l = a === 0 ? 7 : a;
        switch (o) {
          case "i":
            return String(l);
          case "ii":
            return ae(l, o.length);
          case "io":
            return r.ordinalNumber(l, { unit: "day" });
          case "iii":
            return r.day(a, { width: "abbreviated", context: "formatting" });
          case "iiiii":
            return r.day(a, { width: "narrow", context: "formatting" });
          case "iiiiii":
            return r.day(a, { width: "short", context: "formatting" });
          case "iiii":
          default:
            return r.day(a, { width: "wide", context: "formatting" });
        }
      },
      a: function (t, o, r) {
        var a = t.getUTCHours(),
          l = a / 12 >= 1 ? "pm" : "am";
        switch (o) {
          case "a":
          case "aa":
            return r.dayPeriod(l, {
              width: "abbreviated",
              context: "formatting",
            });
          case "aaa":
            return r
              .dayPeriod(l, { width: "abbreviated", context: "formatting" })
              .toLowerCase();
          case "aaaaa":
            return r.dayPeriod(l, { width: "narrow", context: "formatting" });
          case "aaaa":
          default:
            return r.dayPeriod(l, { width: "wide", context: "formatting" });
        }
      },
      b: function (t, o, r) {
        var a = t.getUTCHours(),
          l;
        switch (
          (a === 12
            ? (l = wr.noon)
            : a === 0
            ? (l = wr.midnight)
            : (l = a / 12 >= 1 ? "pm" : "am"),
          o)
        ) {
          case "b":
          case "bb":
            return r.dayPeriod(l, {
              width: "abbreviated",
              context: "formatting",
            });
          case "bbb":
            return r
              .dayPeriod(l, { width: "abbreviated", context: "formatting" })
              .toLowerCase();
          case "bbbbb":
            return r.dayPeriod(l, { width: "narrow", context: "formatting" });
          case "bbbb":
          default:
            return r.dayPeriod(l, { width: "wide", context: "formatting" });
        }
      },
      B: function (t, o, r) {
        var a = t.getUTCHours(),
          l;
        switch (
          (a >= 17
            ? (l = wr.evening)
            : a >= 12
            ? (l = wr.afternoon)
            : a >= 4
            ? (l = wr.morning)
            : (l = wr.night),
          o)
        ) {
          case "B":
          case "BB":
          case "BBB":
            return r.dayPeriod(l, {
              width: "abbreviated",
              context: "formatting",
            });
          case "BBBBB":
            return r.dayPeriod(l, { width: "narrow", context: "formatting" });
          case "BBBB":
          default:
            return r.dayPeriod(l, { width: "wide", context: "formatting" });
        }
      },
      h: function (t, o, r) {
        if (o === "ho") {
          var a = t.getUTCHours() % 12;
          return a === 0 && (a = 12), r.ordinalNumber(a, { unit: "hour" });
        }
        return Tn.h(t, o);
      },
      H: function (t, o, r) {
        return o === "Ho"
          ? r.ordinalNumber(t.getUTCHours(), { unit: "hour" })
          : Tn.H(t, o);
      },
      K: function (t, o, r) {
        var a = t.getUTCHours() % 12;
        return o === "Ko"
          ? r.ordinalNumber(a, { unit: "hour" })
          : ae(a, o.length);
      },
      k: function (t, o, r) {
        var a = t.getUTCHours();
        return (
          a === 0 && (a = 24),
          o === "ko" ? r.ordinalNumber(a, { unit: "hour" }) : ae(a, o.length)
        );
      },
      m: function (t, o, r) {
        return o === "mo"
          ? r.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
          : Tn.m(t, o);
      },
      s: function (t, o, r) {
        return o === "so"
          ? r.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
          : Tn.s(t, o);
      },
      S: function (t, o) {
        return Tn.S(t, o);
      },
      X: function (t, o, r, a) {
        var l = a._originalDate || t,
          c = l.getTimezoneOffset();
        if (c === 0) return "Z";
        switch (o) {
          case "X":
            return ud(c);
          case "XXXX":
          case "XX":
            return Dn(c);
          case "XXXXX":
          case "XXX":
          default:
            return Dn(c, ":");
        }
      },
      x: function (t, o, r, a) {
        var l = a._originalDate || t,
          c = l.getTimezoneOffset();
        switch (o) {
          case "x":
            return ud(c);
          case "xxxx":
          case "xx":
            return Dn(c);
          case "xxxxx":
          case "xxx":
          default:
            return Dn(c, ":");
        }
      },
      O: function (t, o, r, a) {
        var l = a._originalDate || t,
          c = l.getTimezoneOffset();
        switch (o) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + cd(c, ":");
          case "OOOO":
          default:
            return "GMT" + Dn(c, ":");
        }
      },
      z: function (t, o, r, a) {
        var l = a._originalDate || t,
          c = l.getTimezoneOffset();
        switch (o) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + cd(c, ":");
          case "zzzz":
          default:
            return "GMT" + Dn(c, ":");
        }
      },
      t: function (t, o, r, a) {
        var l = a._originalDate || t,
          c = Math.floor(l.getTime() / 1e3);
        return ae(c, o.length);
      },
      T: function (t, o, r, a) {
        var l = a._originalDate || t,
          c = l.getTime();
        return ae(c, o.length);
      },
    };
  function cd(t, o) {
    var r = t > 0 ? "-" : "+",
      a = Math.abs(t),
      l = Math.floor(a / 60),
      c = a % 60;
    if (c === 0) return r + String(l);
    var d = o || "";
    return r + String(l) + d + ae(c, 2);
  }
  function ud(t, o) {
    if (t % 60 === 0) {
      var r = t > 0 ? "-" : "+";
      return r + ae(Math.abs(t) / 60, 2);
    }
    return Dn(t, o);
  }
  function Dn(t, o) {
    var r = o || "",
      a = t > 0 ? "-" : "+",
      l = Math.abs(t),
      c = ae(Math.floor(l / 60), 2),
      d = ae(l % 60, 2);
    return a + c + r + d;
  }
  const cV = lV;
  var dd = function (t, o) {
      switch (t) {
        case "P":
          return o.date({ width: "short" });
        case "PP":
          return o.date({ width: "medium" });
        case "PPP":
          return o.date({ width: "long" });
        case "PPPP":
        default:
          return o.date({ width: "full" });
      }
    },
    hd = function (t, o) {
      switch (t) {
        case "p":
          return o.time({ width: "short" });
        case "pp":
          return o.time({ width: "medium" });
        case "ppp":
          return o.time({ width: "long" });
        case "pppp":
        default:
          return o.time({ width: "full" });
      }
    },
    uV = function (t, o) {
      var r = t.match(/(P+)(p+)?/) || [],
        a = r[1],
        l = r[2];
      if (!l) return dd(t, o);
      var c;
      switch (a) {
        case "P":
          c = o.dateTime({ width: "short" });
          break;
        case "PP":
          c = o.dateTime({ width: "medium" });
          break;
        case "PPP":
          c = o.dateTime({ width: "long" });
          break;
        case "PPPP":
        default:
          c = o.dateTime({ width: "full" });
          break;
      }
      return c.replace("{{date}}", dd(a, o)).replace("{{time}}", hd(l, o));
    },
    dV = { p: hd, P: uV };
  const hV = dV;
  var fV = ["D", "DD"],
    pV = ["YY", "YYYY"];
  function mV(t) {
    return fV.indexOf(t) !== -1;
  }
  function wV(t) {
    return pV.indexOf(t) !== -1;
  }
  function fd(t, o, r) {
    if (t === "YYYY")
      throw new RangeError(
        "Use `yyyy` instead of `YYYY` (in `"
          .concat(o, "`) for formatting years to the input `")
          .concat(
            r,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
          )
      );
    if (t === "YY")
      throw new RangeError(
        "Use `yy` instead of `YY` (in `"
          .concat(o, "`) for formatting years to the input `")
          .concat(
            r,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
          )
      );
    if (t === "D")
      throw new RangeError(
        "Use `d` instead of `D` (in `"
          .concat(o, "`) for formatting days of the month to the input `")
          .concat(
            r,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
          )
      );
    if (t === "DD")
      throw new RangeError(
        "Use `dd` instead of `DD` (in `"
          .concat(o, "`) for formatting days of the month to the input `")
          .concat(
            r,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
          )
      );
  }
  var vV = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
      xWeeks: { one: "1 week", other: "{{count}} weeks" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    },
    VV = function (t, o, r) {
      var a,
        l = vV[t];
      return (
        typeof l == "string"
          ? (a = l)
          : o === 1
          ? (a = l.one)
          : (a = l.other.replace("{{count}}", o.toString())),
        r != null && r.addSuffix
          ? r.comparison && r.comparison > 0
            ? "in " + a
            : a + " ago"
          : a
      );
    };
  const TV = VV;
  function Cs(t) {
    return function () {
      var o =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        r = o.width ? String(o.width) : t.defaultWidth,
        a = t.formats[r] || t.formats[t.defaultWidth];
      return a;
    };
  }
  var gV = {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy",
    },
    UV = {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a",
    },
    RV = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
    },
    NV = {
      date: Cs({ formats: gV, defaultWidth: "full" }),
      time: Cs({ formats: UV, defaultWidth: "full" }),
      dateTime: Cs({ formats: RV, defaultWidth: "full" }),
    };
  const yV = NV;
  var kV = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    },
    MV = function (t, o, r, a) {
      return kV[t];
    };
  const ZV = MV;
  function io(t) {
    return function (o, r) {
      var a = r != null && r.context ? String(r.context) : "standalone",
        l;
      if (a === "formatting" && t.formattingValues) {
        var c = t.defaultFormattingWidth || t.defaultWidth,
          d = r != null && r.width ? String(r.width) : c;
        l = t.formattingValues[d] || t.formattingValues[c];
      } else {
        var p = t.defaultWidth,
          w = r != null && r.width ? String(r.width) : t.defaultWidth;
        l = t.values[w] || t.values[p];
      }
      var V = t.argumentCallback ? t.argumentCallback(o) : o;
      return l[V];
    };
  }
  var bV = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"],
    },
    JV = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    },
    EV = {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    SV = {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    FV = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
    },
    AV = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
    },
    WV = function (t, o) {
      var r = Number(t),
        a = r % 100;
      if (a > 20 || a < 10)
        switch (a % 10) {
          case 1:
            return r + "st";
          case 2:
            return r + "nd";
          case 3:
            return r + "rd";
        }
      return r + "th";
    },
    CV = {
      ordinalNumber: WV,
      era: io({ values: bV, defaultWidth: "wide" }),
      quarter: io({
        values: JV,
        defaultWidth: "wide",
        argumentCallback: function (t) {
          return t - 1;
        },
      }),
      month: io({ values: EV, defaultWidth: "wide" }),
      day: io({ values: SV, defaultWidth: "wide" }),
      dayPeriod: io({
        values: FV,
        defaultWidth: "wide",
        formattingValues: AV,
        defaultFormattingWidth: "wide",
      }),
    };
  const xV = CV;
  function ao(t) {
    return function (o) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        a = r.width,
        l = (a && t.matchPatterns[a]) || t.matchPatterns[t.defaultMatchWidth],
        c = o.match(l);
      if (!c) return null;
      var d = c[0],
        p = (a && t.parsePatterns[a]) || t.parsePatterns[t.defaultParseWidth],
        w = Array.isArray(p)
          ? IV(p, function (R) {
              return R.test(d);
            })
          : BV(p, function (R) {
              return R.test(d);
            }),
        V;
      (V = t.valueCallback ? t.valueCallback(w) : w),
        (V = r.valueCallback ? r.valueCallback(V) : V);
      var g = o.slice(d.length);
      return { value: V, rest: g };
    };
  }
  function BV(t, o) {
    for (var r in t) if (t.hasOwnProperty(r) && o(t[r])) return r;
  }
  function IV(t, o) {
    for (var r = 0; r < t.length; r++) if (o(t[r])) return r;
  }
  function DV(t) {
    return function (o) {
      var r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        a = o.match(t.matchPattern);
      if (!a) return null;
      var l = a[0],
        c = o.match(t.parsePattern);
      if (!c) return null;
      var d = t.valueCallback ? t.valueCallback(c[0]) : c[0];
      d = r.valueCallback ? r.valueCallback(d) : d;
      var p = o.slice(l.length);
      return { value: d, rest: p };
    };
  }
  var _V = /^(\d+)(th|st|nd|rd)?/i,
    OV = /\d+/i,
    QV = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i,
    },
    zV = { any: [/^b/i, /^(a|c)/i] },
    GV = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i,
    },
    YV = { any: [/1/i, /2/i, /3/i, /4/i] },
    HV = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
    },
    PV = {
      narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i,
      ],
      any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i,
      ],
    },
    jV = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
    },
    XV = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
    },
    LV = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
    },
    $V = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i,
      },
    },
    qV = {
      ordinalNumber: DV({
        matchPattern: _V,
        parsePattern: OV,
        valueCallback: function (t) {
          return parseInt(t, 10);
        },
      }),
      era: ao({
        matchPatterns: QV,
        defaultMatchWidth: "wide",
        parsePatterns: zV,
        defaultParseWidth: "any",
      }),
      quarter: ao({
        matchPatterns: GV,
        defaultMatchWidth: "wide",
        parsePatterns: YV,
        defaultParseWidth: "any",
        valueCallback: function (t) {
          return t + 1;
        },
      }),
      month: ao({
        matchPatterns: HV,
        defaultMatchWidth: "wide",
        parsePatterns: PV,
        defaultParseWidth: "any",
      }),
      day: ao({
        matchPatterns: jV,
        defaultMatchWidth: "wide",
        parsePatterns: XV,
        defaultParseWidth: "any",
      }),
      dayPeriod: ao({
        matchPatterns: LV,
        defaultMatchWidth: "any",
        parsePatterns: $V,
        defaultParseWidth: "any",
      }),
    },
    KV = {
      code: "en-US",
      formatDistance: TV,
      formatLong: yV,
      formatRelative: ZV,
      localize: xV,
      match: qV,
      options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
    };
  const pd = KV;
  var e0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    t0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    n0 = /^'([^]*?)'?$/,
    r0 = /''/g,
    o0 = /[a-zA-Z]/;
  function i0(t, o, r) {
    var a, l, c, d, p, w, V, g, R, y, F, E, I, C, A, O, _, H;
    Ce(2, arguments);
    var k = String(o),
      W = oo(),
      x =
        (a =
          (l = r == null ? void 0 : r.locale) !== null && l !== void 0
            ? l
            : W.locale) !== null && a !== void 0
          ? a
          : pd,
      z = In(
        (c =
          (d =
            (p =
              (w = r == null ? void 0 : r.firstWeekContainsDate) !== null &&
              w !== void 0
                ? w
                : r == null ||
                  (V = r.locale) === null ||
                  V === void 0 ||
                  (g = V.options) === null ||
                  g === void 0
                ? void 0
                : g.firstWeekContainsDate) !== null && p !== void 0
              ? p
              : W.firstWeekContainsDate) !== null && d !== void 0
            ? d
            : (R = W.locale) === null ||
              R === void 0 ||
              (y = R.options) === null ||
              y === void 0
            ? void 0
            : y.firstWeekContainsDate) !== null && c !== void 0
          ? c
          : 1
      );
    if (!(z >= 1 && z <= 7))
      throw new RangeError(
        "firstWeekContainsDate must be between 1 and 7 inclusively"
      );
    var de = In(
      (F =
        (E =
          (I =
            (C = r == null ? void 0 : r.weekStartsOn) !== null && C !== void 0
              ? C
              : r == null ||
                (A = r.locale) === null ||
                A === void 0 ||
                (O = A.options) === null ||
                O === void 0
              ? void 0
              : O.weekStartsOn) !== null && I !== void 0
            ? I
            : W.weekStartsOn) !== null && E !== void 0
          ? E
          : (_ = W.locale) === null ||
            _ === void 0 ||
            (H = _.options) === null ||
            H === void 0
          ? void 0
          : H.weekStartsOn) !== null && F !== void 0
        ? F
        : 0
    );
    if (!(de >= 0 && de <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!x.localize)
      throw new RangeError("locale must contain localize property");
    if (!x.formatLong)
      throw new RangeError("locale must contain formatLong property");
    var he = Oe(t);
    if (!$v(he)) throw new RangeError("Invalid time value");
    var ve = Ws(he),
      Ve = qv(he, ve),
      Re = {
        firstWeekContainsDate: z,
        weekStartsOn: de,
        locale: x,
        _originalDate: he,
      },
      Ze = k
        .match(t0)
        .map(function (ce) {
          var Be = ce[0];
          if (Be === "p" || Be === "P") {
            var Ie = hV[Be];
            return Ie(ce, x.formatLong);
          }
          return ce;
        })
        .join("")
        .match(e0)
        .map(function (ce) {
          if (ce === "''") return "'";
          var Be = ce[0];
          if (Be === "'") return a0(ce);
          var Ie = cV[Be];
          if (Ie)
            return (
              !(r != null && r.useAdditionalWeekYearTokens) &&
                wV(ce) &&
                fd(ce, o, String(t)),
              !(r != null && r.useAdditionalDayOfYearTokens) &&
                mV(ce) &&
                fd(ce, o, String(t)),
              Ie(Ve, ce, x.localize, Re)
            );
          if (Be.match(o0))
            throw new RangeError(
              "Format string contains an unescaped latin alphabet character `" +
                Be +
                "`"
            );
          return ce;
        })
        .join("");
    return Ze;
  }
  function a0(t) {
    var o = t.match(n0);
    return o ? o[1].replace(r0, "'") : t;
  }
  function md(t, o) {
    if (t == null)
      throw new TypeError(
        "assign requires that input parameter not be null or undefined"
      );
    for (var r in o)
      Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
    return t;
  }
  function s0(t) {
    return md({}, t);
  }
  var wd = 1e3 * 60,
    yi = 60 * 24,
    vd = yi * 30,
    Vd = yi * 365;
  function l0(t, o, r) {
    var a, l, c;
    Ce(2, arguments);
    var d = oo(),
      p =
        (a =
          (l = r == null ? void 0 : r.locale) !== null && l !== void 0
            ? l
            : d.locale) !== null && a !== void 0
          ? a
          : pd;
    if (!p.formatDistance)
      throw new RangeError(
        "locale must contain localize.formatDistance property"
      );
    var w = Xv(t, o);
    if (isNaN(w)) throw new RangeError("Invalid time value");
    var V = md(s0(r), {
        addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
        comparison: w,
      }),
      g,
      R;
    w > 0 ? ((g = Oe(o)), (R = Oe(t))) : ((g = Oe(t)), (R = Oe(o)));
    var y = String(
        (c = r == null ? void 0 : r.roundingMethod) !== null && c !== void 0
          ? c
          : "round"
      ),
      F;
    if (y === "floor") F = Math.floor;
    else if (y === "ceil") F = Math.ceil;
    else if (y === "round") F = Math.round;
    else
      throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
    var E = R.getTime() - g.getTime(),
      I = E / wd,
      C = Ws(R) - Ws(g),
      A = (E - C) / wd,
      O = r == null ? void 0 : r.unit,
      _;
    if (
      (O
        ? (_ = String(O))
        : I < 1
        ? (_ = "second")
        : I < 60
        ? (_ = "minute")
        : I < yi
        ? (_ = "hour")
        : A < vd
        ? (_ = "day")
        : A < Vd
        ? (_ = "month")
        : (_ = "year"),
      _ === "second")
    ) {
      var H = F(E / 1e3);
      return p.formatDistance("xSeconds", H, V);
    } else if (_ === "minute") {
      var k = F(I);
      return p.formatDistance("xMinutes", k, V);
    } else if (_ === "hour") {
      var W = F(I / 60);
      return p.formatDistance("xHours", W, V);
    } else if (_ === "day") {
      var x = F(A / yi);
      return p.formatDistance("xDays", x, V);
    } else if (_ === "month") {
      var z = F(A / vd);
      return z === 12 && O !== "month"
        ? p.formatDistance("xYears", 1, V)
        : p.formatDistance("xMonths", z, V);
    } else if (_ === "year") {
      var de = F(A / Vd);
      return p.formatDistance("xYears", de, V);
    }
    throw new RangeError(
      "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'"
    );
  }
  const Qt = (t) => {
      let o = "";
      if (t)
        try {
          o = i0(new Date(t), at.DATE_FORMAT);
        } catch {
          console.log("error date", t);
        }
      return o;
    },
    c0 = window.Vue.defineComponent,
    zt = window.Vue.unref,
    Td = window.Vue.normalizeClass,
    $t = window.Vue.createElementVNode,
    so = window.Vue.toDisplayString,
    gd = window.Vue.createVNode,
    vr = window.Vue.openBlock,
    Vr = window.Vue.createElementBlock,
    xs = window.Vue.createCommentVNode,
    Ud = window.Vue.createTextVNode,
    u0 = window.Vue.renderList,
    d0 = window.Vue.Fragment,
    h0 = window.Vue.pushScopeId,
    f0 = window.Vue.popScopeId,
    Rd = (t) => (h0("data-v-ed1e125a"), (t = t()), f0(), t),
    p0 = { class: "content" },
    m0 = { class: "title-row" },
    w0 = { class: "title" },
    v0 = { key: 0, class: "accepted" },
    V0 = { key: 1, class: "rejected" },
    T0 = Rd(() => $t("span", { class: "info-title" }, " First Event: ", -1)),
    g0 = Rd(() => $t("hr", null, null, -1)),
    U0 = { key: 0, class: "count-info" },
    R0 = Ud(" Alarms: "),
    N0 = { class: "info-title" },
    y0 = c0({
      __name: "SituationCard",
      props: { situationInfo: null },
      emits: ["situation-selected"],
      setup(t, { emit: o }) {
        const r = t,
          a = at.ACCEPTED,
          l = at.REJECTED,
          c =
            r.situationInfo.description
              .replace(/(<([^>]+)>)/gi, "")
              .substring(0, 230) + "...",
          d = () => {
            var p;
            o(
              "situation-selected",
              (p = r.situationInfo) == null ? void 0 : p.id
            );
          };
        return (p, w) => {
          var V, g, R;
          return (
            vr(),
            Vr(
              "div",
              {
                onClick: d,
                class: Td([
                  "card",
                  { rejected: r.situationInfo.status == zt(l) },
                ]),
              },
              [
                $t(
                  "div",
                  {
                    class: Td([
                      "severity-line",
                      [
                        `${
                          (g =
                            (V = r.situationInfo) == null
                              ? void 0
                              : V.severity) == null
                            ? void 0
                            : g.toLowerCase()
                        }-bg dark`,
                      ],
                    ]),
                  },
                  null,
                  2
                ),
                $t("div", p0, [
                  $t("div", m0, [
                    $t(
                      "div",
                      w0,
                      "Situation " +
                        so((R = r.situationInfo) == null ? void 0 : R.id),
                      1
                    ),
                    r.situationInfo.status == zt(a)
                      ? (vr(),
                        Vr("div", v0, [
                          gd(
                            zt(q),
                            {
                              icon: zt(ro),
                              "aria-hidden": "true",
                              class: "icon accepted",
                            },
                            null,
                            8,
                            ["icon"]
                          ),
                        ]))
                      : xs("", !0),
                    r.situationInfo.status == zt(l)
                      ? (vr(),
                        Vr("div", V0, [
                          gd(
                            zt(q),
                            {
                              icon: zt(ad),
                              "aria-hidden": "true",
                              class: "icon rejected",
                            },
                            null,
                            8,
                            ["icon"]
                          ),
                        ]))
                      : xs("", !0),
                  ]),
                  $t("div", null, [
                    T0,
                    Ud(so(zt(Qt)(r.situationInfo.firstEventTime)), 1),
                  ]),
                  $t("div", { class: "description" }, so(c)),
                  g0,
                  r.situationInfo.relatedAlarms
                    ? (vr(),
                      Vr("div", U0, [
                        R0,
                        $t(
                          "span",
                          N0,
                          so(r.situationInfo.relatedAlarms.length),
                          1
                        ),
                      ]))
                    : xs("", !0),
                  (vr(!0),
                  Vr(
                    d0,
                    null,
                    u0(
                      zt(ke.exports.keys)(
                        zt(ke.exports.groupBy)(
                          r.situationInfo.relatedAlarms,
                          "nodeLabel"
                        )
                      ),
                      (y) => (
                        vr(),
                        Vr(
                          "div",
                          { class: "info-title", key: y },
                          " - " + so(y),
                          1
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              2
            )
          );
        };
      },
    }),
    gD = "",
    k0 = ge(y0, [["__scopeId", "data-v-ed1e125a"]]),
    M0 = window.Vue.openBlock,
    Z0 = window.Vue.createElementBlock,
    b0 = window.Vue.createElementVNode;
  var J0 = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const E0 = {},
    S0 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    F0 = [
      b0(
        "path",
        {
          d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z",
        },
        null,
        -1
      ),
    ];
  function A0(t, o) {
    return M0(), Z0("svg", S0, F0);
  }
  var W0 = J0(E0, [["render", A0]]);
  const C0 = window.Vue.openBlock,
    x0 = window.Vue.createElementBlock,
    Nd = window.Vue.createElementVNode;
  var B0 = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const I0 = {},
    D0 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    _0 = [
      Nd(
        "path",
        {
          d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z",
        },
        null,
        -1
      ),
      Nd(
        "path",
        { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" },
        null,
        -1
      ),
    ];
  function O0(t, o) {
    return C0(), x0("svg", D0, _0);
  }
  var Q0 = B0(I0, [["render", O0]]);
  const z0 = window.Vue.openBlock,
    G0 = window.Vue.createElementBlock,
    Y0 = window.Vue.createElementVNode;
  var H0 = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const P0 = {},
    j0 = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    X0 = [
      Y0(
        "path",
        {
          d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z",
        },
        null,
        -1
      ),
    ];
  function L0(t, o) {
    return z0(), G0("svg", j0, X0);
  }
  var $0 = H0(P0, [["render", L0]]);
  const q0 = window.Vue.openBlock,
    K0 = window.Vue.createElementBlock,
    eT = window.Vue.createElementVNode;
  var tT = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const nT = {},
    rT = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    oT = [
      eT(
        "path",
        {
          d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z",
        },
        null,
        -1
      ),
    ];
  function iT(t, o) {
    return q0(), K0("svg", rT, oT);
  }
  var yd = tT(nT, [["render", iT]]);
  const aT = window.Vue.defineComponent,
    gn = window.Vue.unref,
    ki = window.Vue.normalizeClass,
    Mi = window.Vue.createVNode,
    sT = window.Vue.openBlock,
    lT = window.Vue.createElementBlock;
  window.Vue.pushScopeId, window.Vue.popScopeId;
  const cT = { class: "paginator" },
    uT = aT({
      __name: "SimplePagination",
      props: { totalPages: null, currentPage: null },
      emits: ["go-to-page"],
      setup(t, { emit: o }) {
        const r = t,
          a = (l) => {
            l >= 0 && l <= r.totalPages - 1 && o("go-to-page", l);
          };
        return (l, c) => (
          sT(),
          lT("div", cT, [
            Mi(
              gn(q),
              {
                icon: gn(W0),
                "aria-hidden": "true",
                class: ki(["icon nav", { disable: r.currentPage == 0 }]),
                onClick: c[0] || (c[0] = (d) => a(0)),
              },
              null,
              8,
              ["icon", "class"]
            ),
            Mi(
              gn(q),
              {
                icon: gn($0),
                "aria-hidden": "true",
                class: ki(["icon nav", { disable: r.currentPage == 0 }]),
                onClick: c[1] || (c[1] = (d) => a(r.currentPage - 1)),
              },
              null,
              8,
              ["icon", "class"]
            ),
            Mi(
              gn(q),
              {
                icon: gn(yd),
                "aria-hidden": "true",
                class: ki([
                  "icon nav",
                  { disable: r.currentPage == r.totalPages - 1 },
                ]),
                onClick: c[2] || (c[2] = (d) => a(r.currentPage + 1)),
              },
              null,
              8,
              ["icon", "class"]
            ),
            Mi(
              gn(q),
              {
                icon: gn(Q0),
                "aria-hidden": "true",
                class: ki([
                  "icon nav",
                  { disable: r.currentPage == r.totalPages - 1 },
                ]),
                onClick: c[3] || (c[3] = (d) => a(r.totalPages - 1)),
              },
              null,
              8,
              ["icon", "class"]
            ),
          ])
        );
      },
    }),
    MD = "",
    dT = ge(uT, [["__scopeId", "data-v-40758818"]]),
    ZD = "",
    le = function (t) {
      t = t || "feather";
      const o = Math.floor(Math.random() * 1e9);
      return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
    },
    hT = window.Vue.computed,
    kd = (t, o) => {
      const r = {};
      return (
        Object.keys(o).forEach((a) => {
          r[`${a}Label`] = hT(() => (t.value[a] ? t.value[a] : o[a]));
        }),
        r
      );
    },
    bD = "",
    lo = function (t, o) {
      return window ? window.setTimeout(t, o) : setTimeout(t, o);
    },
    co = function (t) {
      return window ? window.clearTimeout(t) : clearTimeout(t);
    };
  var fT = Object.defineProperty,
    pT = Object.defineProperties,
    mT = Object.getOwnPropertyDescriptors,
    Md = Object.getOwnPropertySymbols,
    wT = Object.prototype.hasOwnProperty,
    vT = Object.prototype.propertyIsEnumerable,
    Zd = (t, o, r) =>
      o in t
        ? fT(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    bd = (t, o) => {
      for (var r in o || (o = {})) wT.call(o, r) && Zd(t, r, o[r]);
      if (Md) for (var r of Md(o)) vT.call(o, r) && Zd(t, r, o[r]);
      return t;
    },
    VT = (t, o) => pT(t, mT(o));
  const TT = window.Vue.defineComponent,
    gT = window.Vue.h;
  var UT = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const RT = TT({
    props: { center: { type: Boolean, default: !1 } },
    data() {
      return { pressed: !1, active: !1, styles: {}, failsafe: -1 };
    },
    computed: {
      parent() {
        return this.$el.parentNode;
      },
    },
    methods: {
      onClick(t) {
        (this.pressed = !1),
          (this.active = !1),
          requestAnimationFrame(() => {
            const { clientWidth: o, clientHeight: r } = this.parent,
              a = Math.round(Math.max(o, r));
            let l = { top: "0px", left: "0px" };
            if (!this.center) {
              const c = this.parent.getBoundingClientRect(),
                d = t.pageY,
                p = t.pageX;
              l = {
                top: `${
                  d - c.top - a / 2 - document.documentElement.scrollTop
                }px`,
                left: `${
                  p - c.left - a / 2 - document.documentElement.scrollLeft
                }px`,
              };
            }
            (this.styles = VT(bd({}, l), {
              height: `${a}px`,
              width: `${a}px`,
            })),
              (this.pressed = !0),
              requestAnimationFrame(() => {
                (this.active = !0),
                  co(this.failsafe),
                  (this.failsafe = lo(() => {
                    (this.pressed = !1), (this.active = !1);
                  }, 380 + 100 + 20));
              });
          });
      },
    },
    render() {
      if (this.pressed !== !1)
        return gT("div", {
          style: bd({}, this.styles),
          class: ["ripple", { active: this.active, center: this.center }],
          onTransitionEnd: () => {
            (this.pressed = !1), (this.active = !1);
          },
          onTransitionCancel: () => {
            (this.pressed = !1), (this.active = !1);
          },
        });
    },
    mounted() {
      this.parent.addEventListener("click", this.onClick);
      const t = window.getComputedStyle(this.parent);
      (this.parent.style.overflow = "hidden"),
        !(
          t.position === "relative" ||
          t.position === "absolute" ||
          t.position === "fixed"
        ) && (this.parent.style.position = "relative");
    },
    unmounted() {
      this.parent.removeEventListener("click", this.onClick);
    },
  });
  var _n = UT(RT, [["__scopeId", "data-v-18e2a5db"]]);
  const NT = window.Vue.openBlock,
    yT = window.Vue.createElementBlock,
    kT = window.Vue.createElementVNode;
  var MT = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const ZT = {},
    bT = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    JT = [
      kT(
        "path",
        {
          d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z",
        },
        null,
        -1
      ),
    ];
  function ET(t, o) {
    return NT(), yT("svg", bT, JT);
  }
  var uo = MT(ZT, [["render", ET]]);
  const Jd = window.Vue.computed,
    ST = (t, o, r) => {
      const a = Jd(() => o.value.filter((c) => !c.disabled)),
        l = Jd(() => (t.value ? a.value.indexOf(t.value) : -1));
      return {
        selectPrevious() {
          (t.value && t.value.disabled) ||
            (l.value === 0
              ? r(a.value[a.value.length - 1])
              : r(a.value[l.value - 1]));
        },
        selectNext() {
          (t.value && t.value.disabled) ||
            (l.value === a.value.length - 1
              ? r(a.value[0])
              : r(a.value[l.value + 1]));
        },
      };
    },
    SD = "",
    FT = window.Vue.openBlock,
    AT = window.Vue.createElementBlock,
    Bs = window.Vue.createElementVNode;
  var WT = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const CT = {},
    xT = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    BT = [
      Bs(
        "path",
        {
          d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
        },
        null,
        -1
      ),
      Bs(
        "rect",
        { x: "11", y: "7", width: "2", height: "7", rx: "1" },
        null,
        -1
      ),
      Bs(
        "rect",
        { x: "11", y: "15", width: "2", height: "2", rx: "0.65" },
        null,
        -1
      ),
    ];
  function IT(t, o) {
    return FT(), AT("svg", xT, BT);
  }
  var Ed = WT(CT, [["render", IT]]),
    DT = Object.defineProperty,
    _T = Object.defineProperties,
    OT = Object.getOwnPropertyDescriptors,
    Sd = Object.getOwnPropertySymbols,
    QT = Object.prototype.hasOwnProperty,
    zT = Object.prototype.propertyIsEnumerable,
    Fd = (t, o, r) =>
      o in t
        ? DT(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    Ad = (t, o) => {
      for (var r in o || (o = {})) QT.call(o, r) && Fd(t, r, o[r]);
      if (Sd) for (var r of Sd(o)) zT.call(o, r) && Fd(t, r, o[r]);
      return t;
    },
    Wd = (t, o) => _T(t, OT(o));
  const Tr = window.Vue.defineComponent,
    ho = window.Vue.resolveComponent,
    Gt = window.Vue.openBlock,
    gr = window.Vue.createElementBlock,
    GT = window.Vue.createVNode,
    Zi = window.Vue.createBlock,
    YT = window.Vue.withModifiers,
    Ur = window.Vue.inject,
    fo = window.Vue.computed,
    HT = window.Vue.normalizeClass,
    Rr = window.Vue.createElementVNode,
    bi = window.Vue.toDisplayString,
    Ji = window.Vue.renderSlot,
    po = window.Vue.createCommentVNode,
    PT = window.Vue.withDirectives,
    jT = window.Vue.vShow,
    Is = window.Vue.ref,
    Cd = window.Vue.toRef,
    xd = window.Vue.nextTick,
    Ds = window.Vue.watch;
  window.Vue.createTextVNode, window.Vue.Fragment, window.Vue.renderList;
  const _s = window.Vue.provide,
    Bd = window.Vue.isRef,
    XT = window.Vue.onBeforeUnmount;
  var mo = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const LT = Tr({
      props: {
        title: { type: String, default: "" },
        icon: { type: Object, required: !0 },
      },
      components: { FeatherIcon: q },
    }),
    $T = ["title"];
  function qT(t, o, r, a, l, c) {
    const d = ho("FeatherIcon");
    return (
      Gt(),
      gr(
        "a",
        { title: t.title, class: "action-icon hide-when-disabled", href: "#" },
        [GT(d, { icon: t.icon }, null, 8, ["icon"])],
        8,
        $T
      )
    );
  }
  var KT = mo(LT, [
    ["render", qT],
    ["__scopeId", "data-v-4265058e"],
  ]);
  const eg = Tr({
    emits: ["clear"],
    props: { clear: { type: String, default: "" } },
    computed: {
      clearIcon() {
        return uo;
      },
    },
    components: { ActionIcon: KT },
  });
  function tg(t, o, r, a, l, c) {
    const d = ho("ActionIcon");
    return (
      Gt(),
      Zi(
        d,
        {
          onClick:
            o[0] || (o[0] = YT((p) => t.$emit("clear"), ["stop", "prevent"])),
          title: t.clear,
          icon: t.clearIcon,
          "data-ref-id": "feather-form-element-clear",
        },
        null,
        8,
        ["title", "icon"]
      )
    );
  }
  var ng = mo(eg, [["render", tg]]);
  const rg = Tr({
    computed: {
      errorIcon() {
        return Ed;
      },
    },
    components: { FeatherIcon: q },
  });
  function og(t, o, r, a, l, c) {
    const d = ho("FeatherIcon");
    return (
      Gt(),
      Zi(
        d,
        {
          icon: t.errorIcon,
          class: "error-icon hide-when-disabled",
          "data-ref-id": "error-icon",
        },
        null,
        8,
        ["icon"]
      )
    );
  }
  var ig = mo(rg, [
    ["render", og],
    ["__scopeId", "data-v-0b8faef3"],
  ]);
  const ag = Tr({
      emits: { clear: () => !0, "wrapper-click": (t) => !0 },
      props: {
        for: { type: String, required: !0 },
        focused: { type: Boolean, default: !1 },
        showClear: { type: Boolean, default: !1 },
        clearText: { type: String },
        raised: { type: Boolean, default: !1 },
      },
      data() {
        return { prefixWidth: 0, prefixObserver: void 0 };
      },
      setup() {
        const t = Ur("wrapperOptions", {}),
          o = Ur("validationErrorMessage", !1),
          r = fo(() => (t.error ? t.error : o && o.value ? o.value : !1));
        return Wd(Ad({}, t), { error: r });
      },
      computed: {
        computedClearText() {
          return this.clearText ? this.clearText : this.clear ? this.clear : "";
        },
        inputId() {
          return this.for;
        },
        hasPre() {
          return (
            this.$slots.pre &&
            this.$slots
              .pre()
              .findIndex((o) => o.children && o.children.length !== 0) !== -1
          );
        },
        containerCls() {
          const t = [];
          return (
            this.hideLabel && t.push("hide-label"),
            this.raised && t.push("raised"),
            this.focused && t.push("focused"),
            this.error && t.push("error"),
            this.background && t.push("background"),
            this.disabled && t.push("disabled"),
            this.inline && t.push("inline"),
            this.hasPre && t.push("has-prefix"),
            t
          );
        },
      },
      methods: {
        handleWrapperClick(t) {
          this.disabled || this.$emit("wrapper-click", t);
        },
      },
      mounted() {
        const t = this.$el.querySelector(".prefix");
        if (t) {
          const o = { childList: !0, subtree: !0 },
            r = () => {
              const a = this.$el.querySelector(".prefix");
              this.prefixWidth = a ? a.offsetWidth : 0;
            };
          (this.prefixObserver = new MutationObserver(r)),
            this.prefixObserver.observe(t, o),
            r();
        }
      },
      unmounted() {
        this.prefixObserver && this.prefixObserver.disconnect();
      },
      components: { ClearIcon: ng, ErrorIcon: ig },
    }),
    sg = { "aria-hidden": "true", class: "feather-input-border" },
    lg = ["for"],
    cg = { class: "prefix" },
    ug = { class: "post" };
  function dg(t, o, r, a, l, c) {
    const d = ho("ClearIcon"),
      p = ho("ErrorIcon");
    return (
      Gt(),
      gr(
        "div",
        { class: HT(["feather-input-wrapper-container", t.containerCls]) },
        [
          Rr("fieldset", sg, [Rr("legend", null, bi(t.label), 1)]),
          Rr(
            "label",
            {
              class: "feather-input-label",
              for: t.inputId,
              "data-ref-id": "feather-form-element-label",
            },
            bi(t.label),
            9,
            lg
          ),
          Rr(
            "div",
            {
              class: "feather-input-wrapper",
              onClick:
                o[1] ||
                (o[1] = (...w) =>
                  t.handleWrapperClick && t.handleWrapperClick(...w)),
            },
            [
              Rr("div", cg, [Ji(t.$slots, "pre", {}, void 0, !0)]),
              Ji(t.$slots, "default", {}, void 0, !0),
              Rr("div", ug, [
                t.showClear && t.computedClearText
                  ? (Gt(),
                    Zi(
                      d,
                      {
                        key: 0,
                        clear: t.computedClearText,
                        onClear: o[0] || (o[0] = (w) => t.$emit("clear")),
                      },
                      null,
                      8,
                      ["clear"]
                    ))
                  : po("", !0),
                t.error ? (Gt(), Zi(p, { key: 1 })) : po("", !0),
                Ji(t.$slots, "post", {}, void 0, !0),
              ]),
            ]
          ),
        ],
        2
      )
    );
  }
  var Id = mo(ag, [
    ["render", dg],
    ["__scopeId", "data-v-4db296db"],
  ]);
  const hg = Tr({
      setup() {
        const t = Ur("subTextOptions", {}),
          o = Ur("validationErrorMessage", !1),
          r = fo(() => (t.error ? t.error : o && o.value ? o.value : ""));
        return Wd(Ad({}, t), { error: r });
      },
    }),
    fg = { class: "feather-input-sub-text" },
    pg = { key: 0, class: "feather-input-spacer" },
    mg = {
      key: 1,
      class: "feather-input-hint",
      "data-ref-id": "feather-form-element-hint",
    },
    wg = {
      key: 2,
      class: "feather-input-error",
      "data-ref-id": "feather-form-element-error",
      "aria-live": "assertive",
    };
  function vg(t, o, r, a, l, c) {
    return PT(
      (Gt(),
      gr(
        "div",
        fg,
        [
          !t.hint && !t.error.length
            ? (Gt(), gr("div", pg, "\xA0"))
            : po("", !0),
          t.hint && !t.error.length
            ? (Gt(), gr("div", mg, bi(t.hint), 1))
            : po("", !0),
          t.error.length > 0
            ? (Gt(), gr("div", wg, bi(t.error), 1))
            : po("", !0),
          Ji(t.$slots, "right", {}, void 0, !0),
        ],
        512
      )),
      [[jT, !t.inline || t.hint || t.error.length]]
    );
  }
  var Ei = mo(hg, [
    ["render", vg],
    ["__scopeId", "data-v-8e0ac99e"],
  ]);
  Tr({
    props: {
      headingText: {
        type: Function,
        default: (t) =>
          t.length && t.length === 1 ? "1 error" : `${t.length} errors`,
      },
      errorList: { type: Array, default: () => [] },
      generalError: { type: String, default: "" },
    },
    setup(t) {
      const o = Ur("featherFormErrors", Is([])),
        r = Cd(t, "errorList"),
        a = fo(() => {
          var g;
          return (g = r.value) != null && g.length ? r.value : o.value;
        }),
        l = Cd(t, "generalError"),
        c = (g) => {
          document.getElementById(g).focus();
        },
        d = (g) => g.replace(/ \*$/, ""),
        p = Is(),
        w = (g) => `${d(g.label)} - ${g.message}`,
        V = fo(
          () => (
            a.value.length && xd(() => p.value.focus()), t.headingText(a.value)
          )
        );
      return (
        Ds(l, (g) => {
          g.length && xd(() => p.value.focus());
        }),
        {
          errors: a,
          errorsHeading: V,
          heading: p,
          focusElement: c,
          mainError: l,
          getFullMessage: w,
        }
      );
    },
  });
  const Si = (t, o, r, a, l) => {
      const c = Ur("featherForm", !1);
      if (a && c && t.value) {
        const d = Is("");
        _s("validationErrorMessage", d);
        const p = () => {
            if (l && Bd(l) && l.value)
              return (
                (d.value = l.value),
                { success: !1, message: l.value, inputId: t.value, label: r }
              );
            try {
              return a.validateSync(o.value), (d.value = ""), { success: !0 };
            } catch (g) {
              const R = g;
              return (
                (d.value = R.errors[0]),
                {
                  success: !1,
                  message: R.errors[0],
                  inputId: t.value,
                  label: r,
                }
              );
            }
          },
          V = {
            clear: () => {
              d.value = "";
            },
            validate: p,
          };
        return (
          l &&
            Bd(l) &&
            Ds(l, () => {
              c.runValidation();
            }),
          Ds(
            t,
            (g, R) => {
              g && c && c.register(g, V), R && c && c.deregister(R);
            },
            { immediate: !0 }
          ),
          XT(() => {
            c.deregister(t.value, !0);
          }),
          { validate: p }
        );
      }
      return { validate: () => !0 };
    },
    Fi = (t) => ({
      inherittedAttrs: fo(() => ({
        class: t.class,
        "data-ref-id": t["data-ref-id"],
      })),
    }),
    Ai = {
      hint: { type: String },
      error: { type: String },
      inline: { type: Boolean, default: !1 },
    },
    Wi = (t) => {
      _s("subTextOptions", t);
    },
    Dd = {
      label: { type: String, required: !0 },
      error: { type: String },
      clear: { type: String, default: "" },
      background: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      inline: { type: Boolean, default: !1 },
      hideLabel: { type: Boolean, default: !1 },
    },
    _d = (t) => {
      _s("wrapperOptions", t);
    },
    Ci = window.Vue.ref,
    Vg = window.Vue.watch,
    Tg = window.Vue.watchEffect,
    Od = window.Vue.computed,
    Os = window.Vue.provide,
    Qd = (t, o, r, a, l) => {
      const c = Ci([]),
        d = Ci(),
        p = Ci(),
        w = Ci();
      Tg(() => {
        if (!c.value.length) return;
        const A = c.value.map((O) => O.value);
        if (
          (t.value !== void 0 &&
            t.value !== null &&
            (d.value = c.value[A.indexOf(t.value)]),
          !d.value && c.value.length)
        ) {
          let O = c.value.filter((_) => !_.disabled);
          (O = O.length ? O : c.value), (p.value = O[0]), (p.value.first = !0);
        }
      }),
        Vg(d, (A, O) => {
          O && (O.checked = !1), A && (A.checked = !0);
        });
      const V = (A) => {
          (A && A.disabled) ||
            (p.value && (p.value.first = !1),
            d.value !== A &&
              (o("update:modelValue", A.value), (d.value = A), A.focus()));
        },
        g = Od(() => d.value || p.value),
        R = ST(g, c, V),
        y = Od(() => le("feather-radio-group"));
      w.value = y.value;
      const { validate: F } = Si(w, t, r, a, l);
      return (
        Os("register", (A) => {
          (c.value = [...c.value, A]), w.value === y.value && (w.value = A.id);
        }),
        Os("select", V),
        Os("blur", (A) => {
          o("blur", A);
        }),
        {
          keydown: (A) => {
            switch (A.keyCode) {
              case 13:
              case 32:
                d.value ? V(d.value) : p.value && V(p.value);
                break;
              case 40:
              case 39:
                R.selectNext();
                break;
              case 37:
              case 38:
                R.selectPrevious();
                break;
            }
          },
          ...R,
          focus: () => {
            d.value && d.value.focus();
          },
          validate: F,
          firstElementId: w,
          groupId: y,
        }
      );
    };
  var gg = Object.defineProperty,
    Ug = Object.defineProperties,
    Rg = Object.getOwnPropertyDescriptors,
    zd = Object.getOwnPropertySymbols,
    Ng = Object.prototype.hasOwnProperty,
    yg = Object.prototype.propertyIsEnumerable,
    Gd = (t, o, r) =>
      o in t
        ? gg(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    Nr = (t, o) => {
      for (var r in o || (o = {})) Ng.call(o, r) && Gd(t, r, o[r]);
      if (zd) for (var r of zd(o)) yg.call(o, r) && Gd(t, r, o[r]);
      return t;
    },
    Yd = (t, o) => Ug(t, Rg(o));
  const Un = window.Vue.defineComponent,
    wo = window.Vue.inject,
    xi = window.Vue.computed,
    vo = window.Vue.ref,
    Vt = window.Vue.resolveComponent,
    st = window.Vue.openBlock,
    Vo = window.Vue.createElementBlock,
    Hd = window.Vue.normalizeClass,
    Yt = window.Vue.renderSlot,
    Rn = window.Vue.createBlock,
    To = window.Vue.createCommentVNode,
    Bi = window.Vue.createElementVNode,
    kg = window.Vue.withModifiers,
    Ii = window.Vue.createVNode,
    Pd = window.Vue.toRef,
    Qs = window.Vue.mergeProps,
    qt = window.Vue.withCtx,
    Mg = window.Vue.h,
    Zg = window.Vue.provide;
  var Nn = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const bg = Un({
      props: {
        disabled: { type: Boolean, default: !1 },
        condensed: { type: Boolean, default: !1 },
        clickable: { type: Boolean, default: !1 },
      },
      setup(t) {
        const o = wo("isCondensed", null),
          r = xi(() => o || t.condensed),
          a = vo(!1);
        return {
          focused: a,
          handleFocus: () => {
            a.value = !0;
          },
          handleBlur: () => {
            a.value = !1;
          },
          isCondensed: r,
        };
      },
      components: { FeatherRipple: _n },
    }),
    Jg = ["aria-disabled"];
  function Eg(t, o, r, a, l, c) {
    const d = Vt("FeatherRipple");
    return (
      st(),
      Vo(
        "div",
        {
          class: Hd([
            "chip",
            {
              condensed: t.isCondensed,
              disabled: t.disabled,
              focused: t.focused,
            },
          ]),
          onFocusin:
            o[0] || (o[0] = (p) => (t.clickable ? t.handleFocus : null)),
          onFocusout:
            o[1] || (o[1] = (p) => (t.clickable ? t.handleBlur : null)),
          "aria-disabled": t.disabled,
        },
        [
          Yt(t.$slots, "default", {}, void 0, !0),
          t.clickable ? (st(), Rn(d, { key: 0 })) : To("", !0),
        ],
        42,
        Jg
      )
    );
  }
  var Di = Nn(bg, [
    ["render", Eg],
    ["__scopeId", "data-v-44d413dc"],
  ]);
  const Sg = Un({
      emits: ["delete"],
      props: {
        disabled: { type: Boolean, default: !1 },
        textId: { type: String, required: !0 },
        label: { type: String, required: !0 },
      },
      setup(t, o) {
        return {
          handleDelete: () => {
            t.disabled || o.emit("delete");
          },
          icon: uo,
        };
      },
      components: { FeatherIcon: q },
    }),
    Fg = { class: "chip-delete" },
    Ag = ["aria-label", "aria-describedby"];
  function Wg(t, o, r, a, l, c) {
    const d = Vt("FeatherIcon");
    return (
      st(),
      Vo("span", Fg, [
        Bi(
          "a",
          {
            href: "#",
            class: "delete-icon",
            role: "button",
            onClick:
              o[0] ||
              (o[0] = kg(
                (...p) => t.handleDelete && t.handleDelete(...p),
                ["stop", "prevent"]
              )),
            "aria-label": t.label,
            "aria-describedby": t.textId,
          },
          [Ii(d, { icon: t.icon, flex: "" }, null, 8, ["icon"])],
          8,
          Ag
        ),
      ])
    );
  }
  var Cg = Nn(Sg, [
    ["render", Wg],
    ["__scopeId", "data-v-4bae6cb4"],
  ]);
  const xg = Un({
      data() {
        return { titleText: void 0 };
      },
      methods: {
        ellipsisActive() {
          return (
            this.$refs.container.offsetWidth < this.$refs.container.scrollWidth
          );
        },
        updateTitle() {
          this.titleText = this.ellipsisActive()
            ? this.$refs.container.textContent
            : void 0;
        },
      },
      mounted() {
        this.updateTitle();
      },
      beforeUpdate() {
        this.updateTitle();
      },
    }),
    Bg = ["title"];
  function Ig(t, o, r, a, l, c) {
    return (
      st(),
      Vo(
        "span",
        { class: "label", title: t.titleText, ref: "container" },
        [Yt(t.$slots, "default", {}, void 0, !0)],
        8,
        Bg
      )
    );
  }
  var _i = Nn(xg, [
    ["render", Ig],
    ["__scopeId", "data-v-1a0445b2"],
  ]);
  const Dg = {},
    _g = { class: "chip-icon", role: "presentation" };
  function Og(t, o) {
    return st(), Vo("span", _g, [Yt(t.$slots, "default", {}, void 0, !0)]);
  }
  var Oi = Nn(Dg, [
    ["render", Og],
    ["__scopeId", "data-v-2230176f"],
  ]);
  const jd = { delete: "Remove" },
    Qg = Un({
      inheritAttrs: !1,
      props: {
        disabled: { type: Boolean, default: !1 },
        labels: { type: Object, default: () => jd },
        condensed: { type: Boolean, default: !1 },
      },
      setup(t, o) {
        const r = kd(Pd(t, "labels"), jd),
          a = xi(() => le("chip-text")),
          l = () => {
            t.disabled || o.emit("click");
          },
          c = Nr({}, o.attrs);
        return (
          t.disabled && delete c.onClick,
          Yd(Nr({}, r), { chipTextId: a, handleClick: l, attrs: c })
        );
      },
      computed: {
        chipTextAttrs() {
          return this.canClick ? { role: "button", tabindex: "0" } : {};
        },
        canDelete() {
          return !!this.$attrs.onDelete && !this.disabled;
        },
        canClick() {
          return !!this.$attrs.onClick && !this.disabled;
        },
        hasIcon() {
          return (
            this.$slots.icon &&
            this.$slots
              .icon()
              .findIndex(
                (o) =>
                  (o.children && o.children.length !== 0) ||
                  typeof o.type == "object"
              ) !== -1
          );
        },
      },
      components: { Chip: Di, DeleteIcon: Cg, Label: _i, PreIcon: Oi },
    }),
    zg = ["aria-disabled"];
  function Gg(t, o, r, a, l, c) {
    const d = Vt("PreIcon"),
      p = Vt("Label"),
      w = Vt("DeleteIcon"),
      V = Vt("Chip");
    return (
      st(),
      Rn(
        V,
        Qs(t.attrs, {
          disabled: t.disabled,
          condensed: t.condensed,
          class: { hover: t.canClick, focus: t.canClick || t.canDelete },
          role: "row",
          clickable: t.canClick,
        }),
        {
          default: qt(() => [
            Bi(
              "span",
              { role: "gridcell", "aria-disabled": t.disabled },
              [
                Bi(
                  "span",
                  Qs(t.chipTextAttrs, { class: "chip-label-button" }),
                  [
                    t.hasIcon
                      ? (st(),
                        Rn(
                          d,
                          { key: 0 },
                          {
                            default: qt(() => [
                              Yt(t.$slots, "icon", {}, void 0, !0),
                            ]),
                            _: 3,
                          }
                        ))
                      : To("", !0),
                    Ii(
                      p,
                      { id: t.chipTextId },
                      {
                        default: qt(() => [
                          Yt(t.$slots, "default", {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ["id"]
                    ),
                  ],
                  16
                ),
              ],
              8,
              zg
            ),
            t.canDelete
              ? (st(),
                Rn(
                  w,
                  {
                    key: 0,
                    disabled: t.disabled,
                    "text-id": t.chipTextId,
                    label: t.deleteLabel,
                    role: "gridcell",
                    onDelete: o[0] || (o[0] = (g) => t.$emit("delete")),
                  },
                  null,
                  8,
                  ["disabled", "text-id", "label"]
                ))
              : To("", !0),
          ]),
          _: 3,
        },
        16,
        ["disabled", "condensed", "class", "clickable"]
      )
    );
  }
  var Yg = Nn(Qg, [
    ["render", Gg],
    ["__scopeId", "data-v-48b2704a"],
  ]);
  const Hg = Un({
      props: {
        disabled: { type: Boolean, default: !1 },
        condensed: { type: Boolean, default: !1 },
      },
      computed: {
        hasIcon() {
          return (
            this.$slots.icon &&
            this.$slots
              .icon()
              .findIndex(
                (o) =>
                  (o.children && o.children.length !== 0) ||
                  typeof o.type == "object"
              ) !== -1
          );
        },
      },
      components: { Chip: Di, Label: _i, PreIcon: Oi },
    }),
    Pg = ["aria-disabled"];
  function jg(t, o, r, a, l, c) {
    const d = Vt("PreIcon"),
      p = Vt("Label"),
      w = Vt("Chip");
    return (
      st(),
      Rn(
        w,
        {
          role: "row",
          disabled: t.disabled,
          condensed: t.condensed,
          clickable: !1,
        },
        {
          default: qt(() => [
            Bi(
              "span",
              { role: "gridcell", "aria-disabled": t.disabled },
              [
                t.hasIcon
                  ? (st(),
                    Rn(
                      d,
                      { key: 0 },
                      {
                        default: qt(() => [
                          Yt(t.$slots, "icon", {}, void 0, !0),
                        ]),
                        _: 3,
                      }
                    ))
                  : To("", !0),
                Ii(p, null, {
                  default: qt(() => [Yt(t.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                }),
              ],
              8,
              Pg
            ),
          ]),
          _: 3,
        },
        8,
        ["disabled", "condensed"]
      )
    );
  }
  var Xg = Nn(Hg, [
    ["render", jg],
    ["__scopeId", "data-v-3e0c4eba"],
  ]);
  const Lg = Un({
    props: {
      value: { type: [String, Object, Number, Array], required: !0 },
      disabled: { type: Boolean, default: !1 },
      condensed: { type: Boolean, default: !1 },
    },
    setup(t) {
      const o = vo(!1),
        r = vo(!1),
        a = xi(() => le("chip-label-id")),
        l = xi(() => (o.value || r.value ? 0 : -1)),
        c = vo(),
        d = () => {
          c.value.$el.focus();
        },
        p = wo("register", (y) => {}),
        w = wo("blur", (y) => {}),
        V = wo("select", (y) => {}),
        g = {
          first: o,
          focus: d,
          disabled: t.disabled,
          value: t.value,
          checked: r,
        };
      return (
        p(g),
        {
          labelId: a,
          tabindex: l,
          first: o,
          blur: w,
          click: () => {
            V(g);
          },
          input: c,
          checked: r,
        }
      );
    },
    computed: {
      hasIcon() {
        return (
          this.$slots.icon &&
          this.$slots
            .icon()
            .findIndex(
              (o) =>
                (o.children && o.children.length !== 0) ||
                typeof o.type == "object"
            ) !== -1
        );
      },
    },
    components: { Chip: Di, Label: _i, PreIcon: Oi },
  });
  function $g(t, o, r, a, l, c) {
    const d = Vt("PreIcon"),
      p = Vt("Label"),
      w = Vt("Chip");
    return (
      st(),
      Rn(
        w,
        {
          disabled: t.disabled,
          condensed: t.condensed,
          class: Hd(["focus hover", { selected: t.checked }]),
          role: "radio",
          ref: "input",
          "aria-checked": t.checked ? "true" : "false",
          "aria-disabled": t.disabled,
          "aria-labelledby": t.labelId,
          tabindex: t.tabindex,
          onClick: t.click,
          "allow-click": !t.disabled,
          onBlur: t.blur,
        },
        {
          default: qt(() => [
            t.hasIcon
              ? (st(),
                Rn(
                  d,
                  { key: 0 },
                  {
                    default: qt(() => [Yt(t.$slots, "icon", {}, void 0, !0)]),
                    _: 3,
                  }
                ))
              : To("", !0),
            Ii(
              p,
              { id: t.labelId },
              {
                default: qt(() => [Yt(t.$slots, "default", {}, void 0, !0)]),
                _: 3,
              },
              8,
              ["id"]
            ),
          ]),
          _: 3,
        },
        8,
        [
          "disabled",
          "condensed",
          "class",
          "aria-checked",
          "aria-disabled",
          "aria-labelledby",
          "tabindex",
          "onClick",
          "allow-click",
          "onBlur",
        ]
      )
    );
  }
  var qg = Nn(Lg, [
    ["render", $g],
    ["__scopeId", "data-v-bbcc2f70"],
  ]);
  const Xd = Un({
      props: {
        disabled: { type: Boolean, default: !1 },
        labels: { type: Object },
        condensed: { type: Boolean, default: !1 },
        value: { type: [String, Object, Number, Array, Boolean] },
      },
      setup() {
        return { format: wo("chipListFormat", "") };
      },
      render() {
        const t = (o) =>
          Mg(
            o,
            Nr(Nr({}, this.$props), this.$attrs),
            Nr(
              { default: this.$slots.default },
              this.$slots.icon && { icon: this.$slots.icon }
            )
          );
        return this.format === "grid"
          ? t(Yg)
          : this.format === "radio"
          ? t(qg)
          : t(Xg);
      },
    }),
    Kg = Un({
      model: { prop: "modelValue", event: "update:modelValue" },
      props: {
        label: { type: String, required: !0 },
        mode: {
          type: String,
          default: "list",
          validator: (t) => ["list", "radio", "single"].indexOf(t) !== -1,
        },
        modelValue: {
          type: [String, Number, Boolean, Array, Object, Date, Function],
        },
        condensed: { type: Boolean, default: !1 },
      },
      setup(t, o) {
        const r = t.mode === "list" ? "grid" : t.mode;
        Zg("chipListFormat", r);
        const a = r === "single";
        if (r === "radio") {
          const d = Pd(t, "modelValue");
          return Yd(
            Nr(
              { attrs: { role: "radiogroup" } },
              Qd(d, o.emit, t.label, {}, vo(""))
            ),
            { single: a }
          );
        }
        return { attrs: { role: "grid" }, keydown: () => {}, single: a };
      },
    }),
    eU = ["aria-label"];
  function tU(t, o, r, a, l, c) {
    return (
      st(),
      Vo(
        "div",
        Qs(t.attrs, {
          "data-ref-id": "feather-chip-list",
          "aria-label": t.label,
          class: ["chip-list", { condensed: t.condensed, single: t.single }],
          onKeydown: o[0] || (o[0] = (...d) => t.keydown && t.keydown(...d)),
        }),
        [Yt(t.$slots, "default", {}, void 0, !0)],
        16,
        eU
      )
    );
  }
  var nU = Nn(Kg, [
    ["render", tU],
    ["__scopeId", "data-v-1e06f41d"],
  ]);
  const rU = window.Vue.defineComponent,
    oU = window.Vue.normalizeClass,
    iU = window.Vue.openBlock,
    aU = window.Vue.createElementBlock,
    sU = window.Vue.createCommentVNode,
    lU = rU({
      __name: "StatusColor",
      props: { severity: { required: !1, type: String } },
      setup(t) {
        const o = t;
        return (r, a) =>
          o != null && o.severity
            ? (iU(),
              aU(
                "span",
                {
                  key: 0,
                  class: oU([
                    "circle",
                    [`${o.severity.toLowerCase()}-bg dark`],
                  ]),
                },
                null,
                2
              ))
            : sU("", !0);
      },
    }),
    zD = "",
    cU = ge(lU, [["__scopeId", "data-v-e08880d6"]]),
    uU = window.Vue.defineComponent,
    go = window.Vue.unref,
    Ld = window.Vue.createTextVNode,
    $d = window.Vue.normalizeClass,
    zs = window.Vue.withCtx,
    qd = window.Vue.createVNode,
    dU = window.Vue.renderList,
    hU = window.Vue.Fragment,
    Gs = window.Vue.openBlock,
    fU = window.Vue.createElementBlock,
    pU = window.Vue.toDisplayString,
    Kd = window.Vue.createBlock,
    mU = window.Vue.createCommentVNode;
  window.Vue.pushScopeId, window.Vue.popScopeId;
  const wU = Ld(" ALL "),
    eh = window.Vue.ref,
    vU = window.Vue.watch,
    VU = window.Vue.computed,
    TU = window.Vue.reactive,
    gU = uU({
      __name: "FiltersSeverity",
      props: { alarms: null, situationId: null, preSelected: null },
      emits: ["selected-severities"],
      setup(t, { emit: o }) {
        var w;
        const r = t,
          a = eh(!1),
          l = VU(() =>
            ke.exports.keys(ke.exports.groupBy(r.alarms, "severity"))
          ),
          c = eh(
            (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
          ),
          d = TU({ alarms: r.alarms }),
          p = (V) => {
            (c.value = c.value.filter((g) => g !== "all")),
              c.value.includes(V)
                ? (c.value = c.value.filter((g) => g !== V))
                : c.value.push(V),
              (V === "all" || c.value.length === 0) && (c.value = ["all"]),
              o("selected-severities", c.value);
          };
        return (
          vU(r, () => {
            var V;
            (c.value =
              (V = r.preSelected) != null && V.length
                ? r.preSelected
                : ["all"]),
              (d.alarms = r.alarms),
              (a.value = !1);
          }),
          (V, g) =>
            go(l).length > 0
              ? (Gs(),
                Kd(
                  go(nU),
                  { key: c.value.toString(), condensed: "", label: "" },
                  {
                    default: zs(() => [
                      qd(
                        go(Xd),
                        {
                          class: $d({ clicked: c.value.includes("all") }),
                          onClick: g[0] || (g[0] = (R) => p("all")),
                        },
                        { default: zs(() => [wU]), _: 1 },
                        8,
                        ["class"]
                      ),
                      (Gs(!0),
                      fU(
                        hU,
                        null,
                        dU(
                          go(l),
                          (R) => (
                            Gs(),
                            Kd(
                              go(Xd),
                              {
                                class: $d([
                                  { clicked: c.value.includes(R) },
                                  `${R == null ? void 0 : R.toLowerCase()}-bg`,
                                ]),
                                key: R,
                                onClick: (y) => p(R),
                              },
                              {
                                default: zs(() => [
                                  qd(cU, { severity: R }, null, 8, [
                                    "severity",
                                  ]),
                                  Ld(pU(R), 1),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["class", "onClick"]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  }
                ))
              : mU("", !0)
        );
      },
    }),
    GD = "",
    th = ge(gU, [["__scopeId", "data-v-57d07be0"]]),
    YD = "";
  var UU = Object.defineProperty,
    RU = Object.defineProperties,
    NU = Object.getOwnPropertyDescriptors,
    nh = Object.getOwnPropertySymbols,
    yU = Object.prototype.hasOwnProperty,
    kU = Object.prototype.propertyIsEnumerable,
    rh = (t, o, r) =>
      o in t
        ? UU(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    Uo = (t, o) => {
      for (var r in o || (o = {})) yU.call(o, r) && rh(t, r, o[r]);
      if (nh) for (var r of nh(o)) kU.call(o, r) && rh(t, r, o[r]);
      return t;
    },
    oh = (t, o) => RU(t, NU(o));
  const MU = window.Vue.defineComponent,
    ZU = window.Vue.inject,
    Ro = window.Vue.h;
  var bU = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const JU = MU({
    inheritAttrs: !1,
    props: {
      primary: { type: Boolean, default: !1 },
      text: { type: Boolean, default: !1 },
      secondary: { type: Boolean, default: !1 },
      icon: { type: String },
      disabled: { type: Boolean, default: !1 },
      asAnchor: { type: Boolean, default: !1 },
      onColor: { type: Boolean, default: !1 },
    },
    setup() {
      return { hasTooltip: ZU("feather-has-tooltip", !1) };
    },
    render() {
      const t = () => {
          let p = "";
          this.primary && (p = "btn-primary"),
            this.secondary && (p = "btn-secondary"),
            (this.text || this.icon) && (p = "btn-text");
          const w = ["btn", "hover", "focus", p];
          return (
            this.icon && (w.push("btn-icon"), w.push("btn-icon-table")),
            this.onColor && w.push("on-color"),
            w
          );
        },
        o = this.asAnchor ? "a" : "button",
        r = {},
        a = Uo({}, this.$attrs);
      (r.attrs = a || {}),
        this.asAnchor
          ? (r.attrs.role = "button")
          : (r.attrs.type = r.attrs.type || "button"),
        this.disabled && (r.attrs["aria-disabled"] = "true"),
        (r.on = {
          onClick: (p) => {
            this.disabled
              ? (this.asAnchor && p.preventDefault(),
                this.$emit("disabled-click", p))
              : this.$emit("click", p);
          },
        });
      const l = t();
      (r.class = [this.$attrs.class].concat(l)),
        this.$slots.icon && r.class.push("has-icon");
      let c = Ro(_n);
      if ((this.disabled && (c = void 0), this.icon && this.$slots.default)) {
        const p = this.icon;
        return (
          (r.attrs["aria-label"] = p),
          this.hasTooltip || (r.attrs.title = p),
          Ro(o, oh(Uo(Uo({}, r.attrs), r.on), { class: r.class }), [
            this.$slots.default(),
            this.disabled ? void 0 : Ro(_n, { center: !0 }),
          ])
        );
      }
      const d = Ro("span", { class: ["btn-content"] }, [
        this.$slots.default ? this.$slots.default() : "",
      ]);
      return Ro(o, oh(Uo(Uo({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.icon ? this.$slots.icon() : void 0,
        d,
        c,
      ]);
    },
  });
  var lt = bU(JU, [["__scopeId", "data-v-702d1074"]]);
  const EU = window.Vue.openBlock,
    SU = window.Vue.createElementBlock,
    FU = window.Vue.createElementVNode;
  var AU = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const WU = {},
    CU = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    xU = [
      FU(
        "path",
        {
          d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z",
        },
        null,
        -1
      ),
    ];
  function BU(t, o) {
    return EU(), SU("svg", CU, xU);
  }
  var ih = AU(WU, [["render", BU]]);
  const jD = "",
    XD = "",
    IU = window.Vue.watch,
    DU = window.Vue.onBeforeUnmount,
    _U = window.Vue.ref,
    OU = window.Vue.onMounted,
    QU = (t) => {
      const o = _U(!1);
      let r = !1;
      const a = (d) => {
        t(d), (r = !1);
      };
      function l(d) {
        r || (requestAnimationFrame(() => a(d)), (r = !0));
      }
      const c = () => {
        window && window.removeEventListener("resize", l);
      };
      return (
        OU(() => {
          const d = IU(
            o,
            (p) => {
              window && p ? window.addEventListener("resize", l) : c();
            },
            { immediate: !0 }
          );
          DU(() => {
            d(), c();
          });
        }),
        o
      );
    },
    zU = window.Vue.watch,
    GU = window.Vue.onBeforeUnmount,
    YU = window.Vue.ref,
    HU = window.Vue.onMounted,
    PU = (t, o) => {
      const r = YU(!1),
        a = (d) => {
          d.target === window && o(d);
        },
        l = (d) => {
          let p = [];
          Array.isArray(t.value) ? (p = t.value) : (p = [t.value]),
            p.some((V) => V && V.contains(d.target)) || o(d);
        },
        c = () => {
          document &&
            window &&
            (document.removeEventListener("click", l, !0),
            document.removeEventListener("focus", l, !0),
            window.removeEventListener("blur", a));
        };
      return (
        HU(() => {
          const d = zU(
            r,
            (p) => {
              document && window && p
                ? (document.addEventListener("click", l, !0),
                  document.addEventListener("focus", l, !0),
                  window.addEventListener("blur", a))
                : c();
            },
            { immediate: !0 }
          );
          GU(() => {
            d(), c();
          });
        }),
        r
      );
    },
    jU = window.Vue.watch,
    XU = window.Vue.onBeforeUnmount,
    LU = window.Vue.ref,
    ah = (t, o) => {
      const r = LU(!1);
      let a = !1;
      const l = (w) => {
        o(w), (a = !1);
      };
      function c(w) {
        a || (requestAnimationFrame(() => l(w)), (a = !0));
      }
      const d = () => {
          t.value && t.value.removeEventListener("scroll", c, !0);
        },
        p = jU(
          [t, r],
          ([w, V], g) => {
            g && g.length && g[0] && g[0].removeEventListener("scroll", c, !0),
              V && w ? w.addEventListener("scroll", c, !0) : d();
          },
          { immediate: !0 }
        );
      return (
        XU(() => {
          p(), d();
        }),
        r
      );
    },
    $U = window.Vue.defineComponent,
    Kt = window.Vue.ref,
    sh = window.Vue.toRef,
    qU = window.Vue.onMounted,
    KU = window.Vue.watch,
    lh = window.Vue.computed,
    eR = window.Vue.nextTick,
    ch = window.Vue.openBlock,
    uh = window.Vue.createElementBlock,
    dh = window.Vue.renderSlot,
    tR = window.Vue.normalizeClass,
    nR = window.Vue.normalizeStyle,
    rR = window.Vue.createCommentVNode;
  var oR = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const iR = $U({
      emits: { "trigger-click": (t) => !0, "outside-click": (t) => !0 },
      props: {
        open: { type: Boolean, default: !1 },
        noExpand: { type: Boolean, default: !1 },
        cover: { type: Boolean, default: !1 },
        right: { type: Boolean, default: !1 },
        hasFocus: { type: Boolean, default: !1 },
        dataRefId: { type: String, default: "feather-menu" },
        fill: { type: Boolean, default: !1 },
        triggerId: { type: String },
      },
      setup(t, o) {
        const r = Kt(),
          a = Kt(),
          l = sh(t, "open"),
          c = sh(t, "noExpand"),
          d = Kt("auto"),
          p = Kt(),
          w = Kt(t.triggerId || le("feather-menu-trigger")),
          V = Kt(le("feather-menu-dropdown")),
          g = Kt(""),
          R = Kt("");
        qU(() => {
          p.value = window;
        });
        const y = Kt(!1),
          F = () => ({
            height: p.value.innerHeight,
            width: p.value.innerWidth,
            left: 0,
            top: 0,
          }),
          E = () => {
            if (!a.value) return;
            const k = r.value.getBoundingClientRect();
            (y.value = !0),
              (d.value = "auto"),
              eR(() => {
                let { height: W, width: x } = a.value.getBoundingClientRect();
                const z = F(),
                  de = z.height,
                  he = z.width;
                t.fill && x < k.width
                  ? ((d.value = k.width + "px"), (x = k.width))
                  : (d.value = x + "px");
                let ve = 0;
                de - k.bottom < W && k.top >= W
                  ? ((ve = k.top - W), t.cover && (ve += k.height))
                  : ((ve = k.bottom), t.cover && (ve -= k.height));
                let Ve = t.right ? k.right - x : k.left;
                !t.right &&
                  k.right >= x &&
                  he - k.left < x &&
                  (Ve = k.right - x),
                  t.right && k.right <= x && he - k.left > x && (Ve = k.left),
                  (R.value = `${Ve}px`),
                  (g.value = `${ve}px`),
                  (y.value = !1);
              });
          },
          C = PU(r, (k) => {
            o.emit("outside-click", k);
          }),
          A = QU(E),
          O = ah(p, E);
        KU([l, a], ([k, W]) => {
          k && W && E(), (C.value = k), (A.value = k), (O.value = k);
        });
        const _ = lh(() => {
            const k = { id: w.value, "aria-haspopup": "true" };
            return (
              l.value && (k["aria-controls"] = V.value),
              c.value || (k["aria-expanded"] = l.value ? "true" : "false"),
              k
            );
          }),
          H = lh(() => ({
            click: (k) => {
              o.emit("trigger-click", k);
            },
          }));
        return {
          positionTop: g,
          positionLeft: R,
          triggerId: w,
          triggerAttrs: _,
          triggerListeners: H,
          menuId: V,
          menu: a,
          menuWidth: d,
          root: r,
          calculatePosition: E,
          calculating: y,
        };
      },
    }),
    aR = ["data-ref-id"],
    sR = ["data-ref-id", "id"];
  function lR(t, o, r, a, l, c) {
    return (
      ch(),
      uh(
        "div",
        { class: "feather-menu", "data-ref-id": t.dataRefId, ref: "root" },
        [
          dh(
            t.$slots,
            "trigger",
            { attrs: t.triggerAttrs, on: t.triggerListeners },
            void 0,
            !0
          ),
          t.open
            ? (ch(),
              uh(
                "div",
                {
                  key: 0,
                  class: tR([
                    "feather-menu-dropdown",
                    { hidden: t.calculating },
                  ]),
                  "data-ref-id": t.dataRefId + "-dropdown",
                  ref: "menu",
                  id: t.menuId,
                  style: nR({
                    left: t.positionLeft,
                    top: t.positionTop,
                    width: t.menuWidth,
                  }),
                },
                [dh(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)],
                14,
                sR
              ))
            : rR("", !0),
        ],
        8,
        aR
      )
    );
  }
  var hh = oR(iR, [
    ["render", lR],
    ["__scopeId", "data-v-f75af406"],
  ]);
  const cR = window.Vue.openBlock,
    uR = window.Vue.createElementBlock,
    dR = window.Vue.createElementVNode;
  var hR = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const fR = {},
    pR = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    mR = [
      dR(
        "path",
        {
          d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z",
        },
        null,
        -1
      ),
    ];
  function wR(t, o) {
    return cR(), uR("svg", pR, mR);
  }
  var vR = hR(fR, [["render", wR]]);
  const VR = window.Vue.openBlock,
    TR = window.Vue.createElementBlock,
    Ys = window.Vue.createElementVNode;
  var gR = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const UR = {},
    RR = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    NR = [
      Ys(
        "path",
        { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" },
        null,
        -1
      ),
      Ys(
        "rect",
        { x: "11", y: "7", width: "2", height: "2", rx: "0.65" },
        null,
        -1
      ),
      Ys(
        "path",
        {
          d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
        },
        null,
        -1
      ),
    ];
  function yR(t, o) {
    return VR(), TR("svg", RR, NR);
  }
  var kR = gR(UR, [["render", yR]]);
  const MR = window.Vue.openBlock,
    ZR = window.Vue.createElementBlock,
    bR = window.Vue.createElementVNode;
  var JR = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const ER = {},
    SR = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    FR = [
      bR(
        "path",
        {
          d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z",
        },
        null,
        -1
      ),
    ];
  function AR(t, o) {
    return MR(), ZR("svg", SR, FR);
  }
  var Hs = JR(ER, [["render", AR]]);
  const No = function (t, o) {
      if (!t || !o) return;
      let r = t.getBoundingClientRect().height;
      const a = getComputedStyle(t);
      (r += parseInt(a.getPropertyValue("margin-top"), 10)),
        (r += parseInt(a.getPropertyValue("margin-bottom"), 10)),
        (o.scrollTop = t.offsetTop - o.getBoundingClientRect().height + r);
    },
    r_ = "",
    K = {
      PAGEUP: 33,
      PAGEDOWN: 34,
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39,
      HOME: 36,
      END: 35,
      ENTER: 13,
      SPACE: 32,
      ESCAPE: 27,
      BACKSPACE: 8,
      DELETE: 46,
    },
    o_ = "",
    WR = window.Vue.defineComponent,
    CR = window.Vue.openBlock,
    xR = window.Vue.createElementBlock,
    BR = window.Vue.normalizeClass,
    IR = window.Vue.pushScopeId,
    DR = window.Vue.popScopeId,
    Ps = window.Vue.createElementVNode;
  var _R = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const OR = WR({
      emits: { click: (t) => !0 },
      props: {
        disabled: { type: Boolean, default: !1 },
        checked: { type: Boolean, default: !1 },
      },
      methods: {
        handleClick(t) {
          this.disabled || this.$emit("click", t);
        },
      },
    }),
    fh = (t) => (IR("data-v-07e020f5"), (t = t()), DR(), t),
    QR = [
      fh(() => Ps("div", { class: "track" }, null, -1)),
      fh(() =>
        Ps(
          "div",
          { class: "switcher" },
          [Ps("div", { class: "switch-circle" })],
          -1
        )
      ),
    ];
  function zR(t, o, r, a, l, c) {
    return (
      CR(),
      xR(
        "div",
        {
          class: BR([
            "switch-container",
            { checked: t.checked, disabled: t.disabled },
          ]),
          onClick:
            o[0] || (o[0] = (...d) => t.handleClick && t.handleClick(...d)),
        },
        QR,
        2
      )
    );
  }
  var GR = _R(OR, [
      ["render", zR],
      ["__scopeId", "data-v-07e020f5"],
    ]),
    YR = Object.defineProperty,
    HR = Object.defineProperties,
    PR = Object.getOwnPropertyDescriptors,
    ph = Object.getOwnPropertySymbols,
    jR = Object.prototype.hasOwnProperty,
    XR = Object.prototype.propertyIsEnumerable,
    mh = (t, o, r) =>
      o in t
        ? YR(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    wh = (t, o) => {
      for (var r in o || (o = {})) jR.call(o, r) && mh(t, r, o[r]);
      if (ph) for (var r of ph(o)) XR.call(o, r) && mh(t, r, o[r]);
      return t;
    },
    vh = (t, o) => HR(t, PR(o));
  const js = window.Vue.defineComponent,
    On = window.Vue.h,
    LR = window.Vue.openBlock,
    $R = window.Vue.createElementBlock,
    qR = window.Vue.renderSlot;
  window.Vue.resolveComponent,
    window.Vue.createBlock,
    window.Vue.withCtx,
    window.Vue.pushScopeId,
    window.Vue.popScopeId,
    window.Vue.createElementVNode,
    window.Vue.createVNode;
  var Vh = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const KR = js({
    inheritAttrs: !1,
    props: {
      asLi: { type: Boolean, default: !1 },
      disabled: { type: Boolean, default: !1 },
      selected: { type: Boolean, default: !1 },
      highlighted: { type: Boolean, default: !1 },
    },
    render() {
      let t;
      this.$slots.icon &&
        this.$slots
          .icon()
          .findIndex(
            (d) =>
              (d.children && d.children.length !== 0) ||
              (d.type && d.type.render)
          ) !== -1 &&
        (t = On(
          "span",
          { class: ["feather-list-item-icon"] },
          { default: this.$slots.icon }
        ));
      const r = On(
        "span",
        { class: ["feather-list-item-text"] },
        { default: this.$slots.default }
      );
      let a;
      this.$slots.post &&
        (a = On(
          "span",
          { class: "feather-list-item-post" },
          this.$slots.post()
        ));
      const l = this.disabled ? void 0 : On(_n);
      if (this.asLi)
        return On(
          "li",
          vh(wh({}, this.$attrs), {
            class: [
              "feather-list-item hover focus",
              {
                selected: this.selected,
                highlighted: this.highlighted,
                disabled: this.disabled,
              },
              this.$attrs.class || "",
            ],
          }),
          [t, r, a, l]
        );
      const c = On(
        "a",
        vh(wh({}, this.$attrs), {
          class: [
            "feather-list-item focus hover",
            { selected: this.selected, disabled: this.disabled },
            this.$attrs.class || "",
          ],
        }),
        [t, r, a, l]
      );
      return On("li", {}, [c]);
    },
  });
  var yo = Vh(KR, [["__scopeId", "data-v-7c46b2b3"]]);
  js({ components: { FeatherListItem: yo } });
  const eN = {},
    tN = { class: "feather-list" };
  function nN(t, o) {
    return LR(), $R("ul", tN, [qR(t.$slots, "default", {}, void 0, !0)]);
  }
  var Xs = Vh(eN, [
    ["render", nN],
    ["__scopeId", "data-v-941a1d50"],
  ]);
  js({
    model: { prop: "modelValue", event: "update:modelValue" },
    emits: {
      "update:modelValue": (t) => !0,
      click: (t) => !0,
      keydown: (t) => !0,
    },
    props: {
      disabled: { type: Boolean, default: !1 },
      modelValue: { type: Boolean, default: !1 },
    },
    computed: {
      labelId() {
        return le("switch-label");
      },
    },
    methods: {
      focus() {
        this.$refs.input.$el.focus();
      },
      updateValue() {
        this.disabled || this.$emit("update:modelValue", !this.modelValue);
      },
      click(t) {
        this.focus(), this.updateValue(), this.$emit("click", t);
      },
      keydown(t) {
        (t.keyCode === K.SPACE || t.keyCode === K.ENTER) && this.updateValue(),
          t.keyCode === K.SPACE && t.preventDefault(),
          this.$emit("keydown", t);
      },
    },
    components: { SwitchRender: GR, FeatherListItem: yo },
  });
  var rN = Object.defineProperty,
    oN = Object.defineProperties,
    iN = Object.getOwnPropertyDescriptors,
    Th = Object.getOwnPropertySymbols,
    aN = Object.prototype.hasOwnProperty,
    sN = Object.prototype.propertyIsEnumerable,
    gh = (t, o, r) =>
      o in t
        ? rN(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    ct = (t, o) => {
      for (var r in o || (o = {})) aN.call(o, r) && gh(t, r, o[r]);
      if (Th) for (var r of Th(o)) sN.call(o, r) && gh(t, r, o[r]);
      return t;
    },
    lN = (t, o) => oN(t, iN(o));
  const yr = window.Vue.defineComponent,
    re = window.Vue.openBlock,
    be = window.Vue.createElementBlock,
    qe = window.Vue.createElementVNode,
    St = window.Vue.toDisplayString,
    Tt = window.Vue.createCommentVNode,
    Me = window.Vue.resolveComponent,
    gt = window.Vue.createBlock,
    Qe = window.Vue.withCtx,
    kr = window.Vue.Fragment,
    ko = window.Vue.renderList,
    Ke = window.Vue.createVNode,
    Ls = window.Vue.withModifiers,
    Qn = window.Vue.normalizeClass,
    $s = window.Vue.renderSlot,
    Uh = window.Vue.createTextVNode,
    cN = window.Vue.pushScopeId,
    uN = window.Vue.popScopeId,
    Rh = window.Vue.reactive,
    Nh = window.Vue.nextTick,
    qs = window.Vue.markRaw,
    Ks = window.Vue.toRef,
    yh = window.Vue.computed,
    dN = window.Vue.toRefs,
    Mr = window.Vue.ref,
    el = window.Vue.mergeProps,
    kh = window.Vue.toHandlers,
    Qi = window.Vue.withDirectives,
    zi = window.Vue.vShow;
  var Gi = {
      highlight: {
        type: String,
        default: "off",
        validator(t) {
          return ["off", "ignore-case"].indexOf(t) !== -1;
        },
      },
    },
    tl = { query: { type: String } },
    zn = (t, o) => {
      const r = t.__vccOpts || t;
      for (const [a, l] of o) r[a] = l;
      return r;
    };
  const hN = yr({
      mixins: [],
      props: ct(ct({ text: { type: String, required: !0 } }, Gi), tl),
      computed: {
        index() {
          if (this.query && this.query.length === 0) return -1;
          if (this.query && this.highlight)
            switch (this.highlight.toLowerCase()) {
              case "ignore-case":
                return this.text
                  .toLowerCase()
                  .indexOf(this.query.toLowerCase());
              default:
                return -1;
            }
          return -1;
        },
        beginning() {
          return this.index === -1 ? this.text : this.text.slice(0, this.index);
        },
        highlighted() {
          if (!(this.index === -1 || !this.query))
            return this.text.slice(this.index, this.index + this.query.length);
        },
        end() {
          if (!(this.index === -1 || !this.query))
            return this.text.slice(this.index + this.query.length);
        },
      },
    }),
    fN = { key: 0, class: "highlight" },
    pN = { key: 1 };
  function mN(t, o, r, a, l, c) {
    return (
      re(),
      be("span", null, [
        qe("span", null, St(t.beginning), 1),
        t.highlighted
          ? (re(), be("span", fN, St(t.highlighted), 1))
          : Tt("", !0),
        t.end ? (re(), be("span", pN, St(t.end), 1)) : Tt("", !0),
      ])
    );
  }
  var Mh = zn(hN, [
    ["render", mN],
    ["__scopeId", "data-v-8abe2492"],
  ]);
  const wN = yr({
      emits: ["select", "deselect"],
      props: ct(
        ct(
          {
            activeId: { type: String, required: !0 },
            activeIndex: { type: Number, required: !0 },
            items: { type: Array, required: !0 },
            value: { type: [Array, Object], default: () => [] },
            textProp: { type: String, default: "_text" },
            single: { type: Boolean, default: !1 },
            newLabel: { type: String, default: "new" },
          },
          Gi
        ),
        tl
      ),
      watch: {
        activeIndex(t) {
          t > -1 &&
            this.$nextTick(() => {
              const o = Array.prototype.slice.call(
                  this.$el.querySelectorAll("li")
                )[t],
                r = this.$refs.list;
              No(o, r.$el);
            });
        },
      },
      methods: {
        isSelected(t) {
          const o = this.value;
          return o && o.length
            ? o.some((a) => a[this.textProp] === t[this.textProp])
            : this.value[this.textProp] === t[this.textProp];
        },
        isActive(t) {
          return this.activeIndex === t;
        },
        getId(t) {
          return t === this.activeIndex ? this.activeId : null;
        },
        select(t) {
          this.$emit(this.isSelected(t) ? "deselect" : "select", t);
        },
      },
      components: { FeatherList: Xs, FeatherListItem: yo, Highlighter: Mh },
    }),
    vN = { key: 0, class: "autocomplete-item-new-label" };
  function VN(t, o, r, a, l, c) {
    const d = Me("Highlighter"),
      p = Me("FeatherListItem"),
      w = Me("FeatherList");
    return (
      re(),
      gt(
        w,
        {
          class: "feather-autocomplete-results-list",
          tabindex: "-1",
          "aria-hidden": "false",
          role: "listbox",
          "aria-multiselectable": t.single ? "false" : "true",
          ref: "list",
        },
        {
          default: Qe(() => [
            (re(!0),
            be(
              kr,
              null,
              ko(
                t.items,
                (V, g) => (
                  re(),
                  be(
                    kr,
                    { key: V[t.textProp] },
                    [
                      Ke(
                        p,
                        {
                          "as-li": "",
                          id: t.getId(g),
                          tabindex: "-1",
                          role: "option",
                          class: "result-item hover",
                          "aria-selected": t.isSelected(V),
                          highlighted: t.isActive(g),
                          selected: t.isSelected(V),
                          onClick: Ls((R) => t.select(V), ["stop"]),
                        },
                        {
                          default: Qe(() => [
                            Ke(
                              d,
                              {
                                highlight: t.highlight,
                                query: t.query,
                                text: V[t.textProp],
                              },
                              null,
                              8,
                              ["highlight", "query", "text"]
                            ),
                            V._new
                              ? (re(), be("span", vN, St(t.newLabel), 1))
                              : Tt("", !0),
                          ]),
                          _: 2,
                        },
                        1032,
                        [
                          "id",
                          "aria-selected",
                          "highlighted",
                          "selected",
                          "onClick",
                        ]
                      ),
                      t.items.length !== 1 && V._new
                        ? (re(),
                          be("li", {
                            role: "presentation",
                            key: V[t.textProp] + "hr",
                            class: "hr",
                          }))
                        : Tt("", !0),
                    ],
                    64
                  )
                )
              ),
              128
            )),
          ]),
          _: 1,
        },
        8,
        ["aria-multiselectable"]
      )
    );
  }
  var TN = zn(wN, [
    ["render", VN],
    ["__scopeId", "data-v-f623434a"],
  ]);
  const gN = yr({
      emits: ["select"],
      props: ct(
        ct(
          {
            activeId: { type: String, required: !0 },
            activeRow: { type: Number, required: !0 },
            activeCol: { type: Number, required: !0 },
            items: { type: Array, required: !0 },
            value: { type: [Array, Object], default: () => [] },
            textProp: { type: String, default: "_text" },
            single: { type: Boolean, default: !1 },
            config: { type: Array, required: !0 },
          },
          Gi
        ),
        tl
      ),
      watch: {
        activeRow(t) {
          t > -1 &&
            this.$nextTick(() => {
              const o = Array.prototype.slice.call(
                  this.$el.querySelectorAll("tr")
                )[t + 1],
                r = this.$refs.grid;
              No(o, r);
            });
        },
      },
      computed: {
        cls() {
          return this.config.map((t, o) =>
            t.align && t.align.toLowerCase() === "right"
              ? `tr${o + 1}`
              : t.align && t.align.toLowerCase() === "center"
              ? `tc${o + 1}`
              : `tl${o + 1}`
          );
        },
      },
      methods: {
        isSelected(t) {
          const o = this.value;
          return this.value && this.value.length
            ? o.some((a) => a[this.textProp] === t[this.textProp])
            : this.value[this.textProp] === t[this.textProp];
        },
        isActive(t) {
          return this.activeRow === t;
        },
        isActiveCell(t, o) {
          return this.activeRow === t && this.activeCol === o;
        },
        getId(t, o) {
          return t === this.activeRow && this.activeCol === o
            ? this.activeId
            : "";
        },
        select(t) {
          this.$emit("select", t);
        },
      },
      components: { Highlighter: Mh },
    }),
    UN = { class: "feather-autocomplete-results-grid", ref: "grid" },
    RN = ["aria-multiselectable"],
    NN = { role: "row" },
    yN = ["aria-selected", "onClick"],
    kN = ["id", "aria-selected"],
    MN = { key: 1 };
  function ZN(t, o, r, a, l, c) {
    const d = Me("Highlighter");
    return (
      re(),
      be(
        "div",
        UN,
        [
          qe(
            "table",
            {
              class: Qn(["feather-autocomplete-results-grid-container", t.cls]),
              tabindex: "-1",
              "aria-hidden": "false",
              role: "grid",
              "aria-multiselectable": t.single ? "false" : "true",
            },
            [
              qe("thead", null, [
                qe("tr", NN, [
                  (re(!0),
                  be(
                    kr,
                    null,
                    ko(
                      t.config,
                      (p) => (re(), be("th", { key: p.title }, St(p.title), 1))
                    ),
                    128
                  )),
                ]),
              ]),
              qe("tbody", null, [
                (re(!0),
                be(
                  kr,
                  null,
                  ko(
                    t.items,
                    (p, w) => (
                      re(),
                      be(
                        "tr",
                        {
                          role: "row",
                          key: p[t.textProp],
                          "aria-selected": t.isSelected(p),
                          class: Qn({
                            focus: t.isActive(w),
                            selected: t.isSelected(p),
                          }),
                          onClick: Ls((V) => t.select(p), ["stop"]),
                        },
                        [
                          (re(!0),
                          be(
                            kr,
                            null,
                            ko(
                              t.config,
                              (V, g) => (
                                re(),
                                be(
                                  "td",
                                  {
                                    key: p[t.textProp] + V.prop,
                                    id: t.getId(w, g),
                                    "aria-selected": t.isSelected(p),
                                    class: Qn({
                                      "focus-cell": t.isActiveCell(w, g),
                                    }),
                                  },
                                  [
                                    V.prop === t.textProp
                                      ? (re(),
                                        gt(
                                          d,
                                          {
                                            key: 0,
                                            highlight: t.highlight,
                                            query: t.query,
                                            text: p[V.prop],
                                          },
                                          null,
                                          8,
                                          ["highlight", "query", "text"]
                                        ))
                                      : (re(), be("p", MN, St(p[V.prop]), 1)),
                                  ],
                                  10,
                                  kN
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        10,
                        yN
                      )
                    )
                  ),
                  128
                )),
              ]),
            ],
            10,
            RN
          ),
        ],
        512
      )
    );
  }
  var bN = zn(gN, [
    ["render", ZN],
    ["__scopeId", "data-v-58c88fd1"],
  ]);
  const JN = yr({ components: { FeatherList: Xs, FeatherListItem: yo } });
  function EN(t, o, r, a, l, c) {
    const d = Me("FeatherListItem"),
      p = Me("FeatherList");
    return (
      re(),
      gt(
        p,
        { class: "result-list" },
        {
          default: Qe(() => [
            Ke(
              d,
              { "as-li": "" },
              {
                default: Qe(() => [$s(t.$slots, "default", {}, void 0, !0)]),
                _: 3,
              }
            ),
          ]),
          _: 3,
        }
      )
    );
  }
  var SN = zn(JN, [
    ["render", EN],
    ["__scopeId", "data-v-06b752c6"],
  ]);
  const FN = yr({
    name: "Chip",
    emits: ["delete"],
    props: {
      focused: { type: Boolean, default: !1 },
      removeLabel: { type: String, required: !0 },
      text: { type: String },
      disabled: { type: Boolean },
      pre: { type: Object },
    },
    computed: {
      showPreIcon() {
        return this.pre && this.pre.icon && this.pre.title;
      },
    },
    methods: {
      handleClick() {
        this.$emit("delete");
      },
    },
    components: {
      FeatherIcon: q,
      Cancel: uo,
      BaseChip: Di,
      BaseChipLabel: _i,
      BaseChipPreIcon: Oi,
    },
  });
  function AN(t, o, r, a, l, c) {
    const d = Me("FeatherIcon"),
      p = Me("BaseChipPreIcon"),
      w = Me("BaseChipLabel"),
      V = Me("Cancel"),
      g = Me("BaseChip");
    return (
      re(),
      gt(
        g,
        {
          class: Qn(["focus autocomplete-chip", { focused: t.focused }]),
          condensed: "",
          disabled: t.disabled,
        },
        {
          default: Qe(() => [
            t.showPreIcon
              ? (re(),
                gt(
                  p,
                  { key: 0 },
                  {
                    default: Qe(() => {
                      var R, y;
                      return [
                        Ke(
                          d,
                          {
                            icon: (R = t.pre) == null ? void 0 : R.icon,
                            title: (y = t.pre) == null ? void 0 : y.title,
                          },
                          null,
                          8,
                          ["icon", "title"]
                        ),
                      ];
                    }),
                    _: 1,
                  }
                ))
              : Tt("", !0),
            Ke(w, null, { default: Qe(() => [Uh(St(t.text), 1)]), _: 1 }),
            t.disabled
              ? Tt("", !0)
              : (re(),
                be(
                  "span",
                  {
                    key: 1,
                    class: "chip-delete",
                    onClick:
                      o[0] ||
                      (o[0] = Ls(
                        (...R) => t.handleClick && t.handleClick(...R),
                        ["stop"]
                      )),
                  },
                  [
                    Ke(
                      d,
                      { class: "delete-icon", flex: "", title: t.removeLabel },
                      { default: Qe(() => [Ke(V)]), _: 1 },
                      8,
                      ["title"]
                    ),
                  ]
                )),
          ]),
          _: 1,
        },
        8,
        ["class", "disabled"]
      )
    );
  }
  var WN = zn(FN, [
    ["render", AN],
    ["__scopeId", "data-v-e0fc6ac0"],
  ]);
  const CN = {},
    xN = (t) => (cN("data-v-aa720e06"), (t = t()), uN(), t),
    BN = { class: "spinner-container" },
    IN = [
      xN(() =>
        qe(
          "svg",
          {
            class: "spinner",
            viewBox: "0 0 66 66",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            qe("circle", {
              class: "path",
              fill: "none",
              "stroke-width": "6",
              "stroke-linecap": "round",
              cx: "33",
              cy: "33",
              r: "30",
            }),
          ],
          -1
        )
      ),
    ];
  function DN(t, o) {
    return re(), be("div", BN, IN);
  }
  var _N = zn(CN, [
      ["render", DN],
      ["__scopeId", "data-v-aa720e06"],
    ]),
    Yi = ((t) => ((t.multi = "multi"), (t.single = "single"), t))(Yi || {});
  const Zh = {
      noResults: "No results found",
      minChar: "Enter ${min} characters to search",
      clear: "Clear value",
      selectionLimit: "Selection limit reached",
      new: "New",
      remove: "Remove",
    },
    ON = ct(
      ct(
        ct(
          {
            id: { type: String },
            modelValue: { type: [Array, Object] },
            results: { type: Array, default: () => [] },
            textProp: { type: String, default: "_text" },
            loading: { type: Boolean, default: !1 },
            minChar: { type: Number, default: 0 },
            allowNew: { type: Boolean, default: !1 },
            selectionLimit: { type: Number },
            newMatcher: {
              type: Function,
              default: (t, o, r) =>
                t[r.textProp].toString().toLowerCase() === o.toLowerCase(),
            },
            type: { type: String, required: !0, validator: (t) => !!Yi[t] },
            labels: { type: Object, default: () => Zh },
            gridConfig: { type: Array },
            schema: { type: Object, required: !1 },
          },
          Gi
        ),
        Ai
      ),
      Dd
    ),
    QN = { "update:modelValue": (t) => !0, new: (t) => !0, search: (t) => !0 },
    zN = (t, o, r, a) => {
      if (r.toLowerCase() === Yi.multi) {
        const c = t.modelValue,
          d = (p) => {
            t.selectionLimit.value && p.length >= t.selectionLimit.value
              ? (t.selectionLimitReached.value = !0)
              : (t.selectionLimitReached.value = !1);
          };
        return {
          getInitialText() {
            return "";
          },
          handleModelValueChange(p) {
            p && p.length && d(p);
          },
          hasValue() {
            return !!(c.value && c.value.length);
          },
          selectItem(p) {
            if (
              c.value &&
              c.value.filter((V) => V[t.textProp.value] === p[t.textProp.value])
                .length
            )
              return;
            const w = c.value ? [...c.value, p] : [p];
            a("update:modelValue", w), d(w);
          },
          removeItem(p) {
            const w = c.value.findIndex((V) => {
              if (p[t.textProp.value] === V[t.textProp.value]) return !0;
            });
            debugger;
            if (w > -1) {
              const V = c.value.slice(0);
              V.splice(w, 1),
                a("update:modelValue", V),
                d(V),
                t.input.value.focus();
            }
          },
          clickedItem() {
            (t.query.value = ""), t.emitSearch();
          },
          handleInputBlur() {},
        };
      }
      const l = t.modelValue;
      return {
        getInitialText() {
          return l.value ? l.value[t.textProp.value] : "";
        },
        handleModelValueChange() {
          t.query.value = this.getInitialText();
        },
        hasValue() {
          return !!l.value;
        },
        selectItem(c) {
          (o.active.row = -1),
            (t.forceCloseResults.value = !0),
            c && c._new && t.allowNew
              ? a("new", c._new)
              : a("update:modelValue", c);
        },
        removeItem() {},
        clickedItem() {
          t.forceCloseResults.value = !0;
        },
        handleInputBlur() {
          if (o.active.row > -1) {
            const c = t.internalResults.value[o.active.row];
            c && c._new && t.allowNew
              ? a("new", c._new)
              : a("update:modelValue", c);
          }
        },
      };
    },
    GN = () => {
      const t = Rh({ row: -1 }),
        o = (c) => {
          Nh(() => {
            t.row = c;
          });
        },
        r = (c, d) => {
          if (c.keyCode === K.DOWN) {
            if ((c.preventDefault(), t.row === -1)) a(), o(0);
            else if (t.row + 1 <= d.length - 1) {
              const p = t.row;
              a(), o(p + 1);
            }
            return !0;
          }
          if (c.keyCode === K.UP) {
            if ((c.preventDefault(), t.row === 0)) a();
            else if (t.row > 0) {
              const p = t.row;
              a(), o(p - 1);
            }
            return !0;
          }
          return !1;
        },
        a = () => {
          t.row = -1;
        };
      return {
        reset: a,
        handleKeyPress: r,
        active: t,
        first: () => {
          t.row = 0;
        },
      };
    },
    YN = (t) => {
      const o = Rh({ row: -1, col: -1 }),
        r = (d, p) => {
          Nh(() => {
            (o.col = p), (o.row = d);
          });
        },
        a = (d, p) => {
          if (d.keyCode === K.DOWN) {
            if ((d.preventDefault(), o.row === -1)) l(), r(0, 0);
            else if (o.row + 1 <= p.length - 1) {
              const w = o.row,
                V = o.col;
              l(), r(w + 1, V);
            }
            return !0;
          }
          if (d.keyCode === K.UP) {
            if ((d.preventDefault(), o.row === 0)) l();
            else if (o.row > 0) {
              const w = o.row,
                V = o.col;
              l(), r(w - 1, V);
            }
            return !0;
          }
          if (d.keyCode === K.RIGHT && o.row !== -1) {
            if ((d.preventDefault(), o.col + 1 <= t.length - 1)) {
              const w = o.col,
                V = o.row;
              l(), r(V, w + 1);
            } else if (o.col <= t.length - 1 && o.row + 1 <= p.length - 1) {
              const w = o.row;
              l(), r(w + 1, 0);
            }
            return !0;
          }
          if (d.keyCode === K.LEFT && o.row !== -1) {
            if ((d.preventDefault(), o.col === 0 && o.row === 0)) return !0;
            if (o.col === 0 && o.row > 0) {
              const w = o.row;
              l(), r(w - 1, t.length - 1);
            } else if (o.col > 0) {
              const w = o.col,
                V = o.row;
              l(), r(V, w - 1);
            }
            return !0;
          }
          if (d.keyCode === K.END && o.row !== -1) {
            d.preventDefault();
            const w = o.row;
            return l(), r(d.ctrlKey ? p.length - 1 : w, t.length - 1), !0;
          }
          if (d.keyCode === K.HOME && o.row !== -1) {
            d.preventDefault();
            const w = o.row;
            return l(), r(d.ctrlKey ? 0 : w, 0), !0;
          }
          return !1;
        },
        l = () => {
          (o.row = -1), (o.col = -1);
        };
      return {
        reset: l,
        handleKeyPress: a,
        active: o,
        first: () => {
          l(), r(0, 0);
        },
      };
    },
    HN = yr({
      model: { prop: "modelValue", event: "update:modelValue" },
      emits: QN,
      props: ON,
      data() {
        return { typingTimeout: -1, activeChipIndex: -1, activeChipId: "" };
      },
      computed: {
        singleSelect() {
          return this.type !== Yi.multi;
        },
        raised() {
          return this.hasValue || this.hasFocus;
        },
        hasValue() {
          var t;
          return (t = this.strategy) == null ? void 0 : t.hasValue();
        },
        showMenu() {
          return (
            (this.showResults ||
              this.showNoResults ||
              this.showLoading ||
              this.showSelectionLimit ||
              this.showMinCharWarning) &&
            !this.disabled
          );
        },
        showResults() {
          return this.forceCloseResults ||
            this.selectionLimitReached ||
            this.showMinCharWarning
            ? !1
            : !!(
                this.hasFocus &&
                this.internalResults &&
                this.internalResults.length &&
                !this.loading
              );
        },
        showNoResults() {
          return (
            !this.forceCloseResults &&
            this.hasFocus &&
            !this.selectionLimitReached &&
            this.internalResults &&
            this.internalResults.length === 0 &&
            this.query &&
            this.query.length > 0 &&
            this.query.length >= this.minChar &&
            !this.loading
          );
        },
        showSelectionLimit() {
          return (
            !this.forceCloseResults &&
            this.hasFocus &&
            this.selectionLimitReached &&
            !this.loading
          );
        },
        showLoading() {
          return this.hasFocus && this.loading;
        },
        showMinCharWarning() {
          return (
            this.minChar > 0 &&
            !this.selectionLimitReached &&
            !this.loading &&
            this.hasFocus &&
            this.query.length < this.minChar
          );
        },
        resultItemId() {
          return le("result-item");
        },
        minCharWarningId() {
          return le("min-char-warning");
        },
        subTextId() {
          return le("feather-autocomplete-description");
        },
        resultsId() {
          return le("feather-autocomplete-input-results");
        },
        selectedDescriptionId() {
          return le("feather-autocomplete-input-selected");
        },
        searchIcon() {
          return qs(vR);
        },
        minCharIcon() {
          return qs(kR);
        },
        dropdownIcon() {
          return qs(Hs);
        },
        inputAttrs() {
          const t = [this.selectedDescriptionId, this.subTextId].filter(
            Boolean
          );
          let o = "";
          return (
            this.activeChipIndex > -1 && (o = this.activeChipId),
            this.active.row > -1 && this.showResults && (o = this.resultItemId),
            this.minChar && t.push(this.minCharWarningId),
            {
              id: this.inputId,
              "aria-describedby": t.join(" "),
              "aria-busy": this.loading,
              "aria-activedescendant": o,
              disabled: this.disabled,
              "aria-disabled": this.disabled,
              "aria-autocomplete": "list",
              autocomplete: "off",
              readonly: !!this.disabled,
              tabindex: this.disabled ? -1 : 0,
              "aria-controls": this.showResults ? this.resultsId : "",
              "aria-invalid":
                this.$attrs["aria-invalid"] === "true" || !!this.error,
            }
          );
        },
        inputListeners() {
          return {
            input: this.handleTextInput,
            blur: this.handleInputBlur,
            focus: this.handleInputFocus,
            click: this.handleInputEnter,
            keydown: this.handleInputKeyDown,
          };
        },
        comboxBoxAttrs() {
          return {
            role: "combobox",
            "aria-expanded": this.showResults ? "true" : "false",
            "aria-haspopup": this.gridConfig ? "grid" : "listbox",
            "aria-owns": this.resultsId,
            "aria-label": this.label,
          };
        },
        scrollContainer() {
          return this.$refs.scroll.$el.querySelector(".feather-input-wrapper");
        },
        computedMinCharText() {
          return this.minCharLabel
            ? this.minCharLabel.replace("${min}", this.minChar.toString())
            : "";
        },
        selectedDescribedByText() {
          return this.modelValue && this.modelValue.length
            ? this.modelValue.map((o) => o[this.textProp]).join(", ")
            : "";
        },
        allowNewEnabled() {
          return this.singleSelect && this.allowNew;
        },
        modelValueList() {
          return this.singleSelect ? [] : this.modelValue;
        },
      },
      watch: {
        activeChipIndex(t) {
          t && this.genActiveChipId(),
            t > -1 &&
              this.scrollContainer &&
              this.$nextTick(() => {
                No(
                  this.$el.querySelector(`#${this.activeChipId}`),
                  this.scrollContainer
                );
              });
        },
        query(t) {
          !this.inputRef ||
            (t !== this.inputRef.value && (this.inputRef.value = t));
        },
        modelValue: {
          handler(t, o) {
            t &&
              o &&
              t.length > o.length &&
              this.scrollContainer &&
              this.$nextTick(() => {
                No(this.inputRef, this.scrollContainer);
              }),
              this.strategy.handleModelValueChange(t),
              this.hasFocus || this.adjustTextArea();
          },
          immediate: !0,
        },
        results(t) {
          t && t.length > 0 && this.selectFirst(),
            (this.forceCloseResults = !1),
            t &&
              t.length === 0 &&
              this.query &&
              this.query.length > 0 &&
              !this.allowNewEnabled &&
              this.setAlert(this.noResultsLabel),
            this.allowNewEnabled &&
              this.query.length &&
              (t.some((r) => this.newMatcher(r, this.query, this)) ||
                (t = [
                  { [this.textProp]: this.query, _new: this.query },
                  ...t,
                ])),
            (this.internalResults = t);
        },
        showResults(t) {
          const o = this.$refs.menu;
          t && o.calculatePosition && o.calculatePosition();
        },
        selectionLimitReached(t) {
          t && this.setAlert(this.selectionLimitLabel);
        },
      },
      methods: {
        getPre(t) {
          return t._pre;
        },
        genActiveChipId() {
          return (this.activeChipId = le("active-chip")), this.activeChipId;
        },
        setAlert(t) {
          const o = this.$refs.alert;
          (o.textContent = t),
            setTimeout(() => {
              o.textContent = "";
            }, 100);
        },
        handleClear() {
          (this.query = ""),
            this.inputRef.focus(),
            this.emitSearch(),
            this.$emit("update:modelValue", void 0);
        },
        handleInputFocus() {
          this.disabled ||
            (this.adjustTextArea(),
            !this.hasFocus &&
              ((this.hasFocus = !0),
              this.modelValue && this.singleSelect && this.inputRef.select()));
        },
        handleInputEnter() {
          this.handleInputFocus(), this.emitSearch();
        },
        handleTextInput(t) {
          this.adjustTextArea();
          const r = t.target.value;
          r !== void 0 &&
            (co(this.typingTimeout),
            (this.typingTimeout = lo(() => {
              (this.query = r), this.emitSearch();
            }, 250)));
        },
        handleInputKeyDown(t) {
          const o = () => {
              this.activeChipIndex = -1;
            },
            r = () => {
              this.resetResultIndex();
            };
          if (
            (t.keyCode === K.ENTER && t.preventDefault(),
            this.internalResults &&
              this.internalResults.length &&
              this.handleResultNavigation(t, this.internalResults))
          ) {
            o(), (this.forceCloseResults = !1);
            return;
          }
          if (t.keyCode === K.ENTER && this.activeChipIndex > -1) {
            t.preventDefault();
            const a = this.modelValue;
            this.removeFromValue(a[this.activeChipIndex]), o();
            return;
          }
          if (t.keyCode === K.ENTER && this.active.row > -1) {
            t.preventDefault(),
              this.selectItem(this.internalResults[this.active.row]);
            return;
          }
          if (
            (t.keyCode === K.ENTER ||
              t.keyCode === K.SPACE ||
              t.keyCode === K.DOWN) &&
            this.activeChipIndex == -1 &&
            !this.showMenu
          ) {
            t.preventDefault(), this.emitSearch();
            return;
          }
          if (t.keyCode === K.ESCAPE) {
            (this.forceCloseResults = !0), r(), o();
            return;
          }
          if (!this.query && this.modelValue && this.modelValue.length) {
            const a = this.modelValue;
            t.keyCode === K.LEFT &&
              (t.preventDefault(),
              this.activeChipIndex === -1
                ? (r(), (this.activeChipIndex = a.length - 1))
                : this.activeChipIndex - 1 >= 0 &&
                  (r(), (this.activeChipIndex = this.activeChipIndex - 1))),
              t.keyCode === K.RIGHT &&
                (t.preventDefault(),
                this.activeChipIndex === a.length - 1
                  ? (r(), (this.activeChipIndex = -1))
                  : this.activeChipIndex < a.length - 1 &&
                    this.activeChipIndex > -1 &&
                    (r(), (this.activeChipIndex = this.activeChipIndex + 1))),
              (t.keyCode === K.DELETE || t.keyCode === K.BACKSPACE) &&
                this.activeChipIndex !== -1 &&
                (this.removeFromValue(a[this.activeChipIndex]), r(), o());
          }
        },
        handleTriggerClick() {
          this.disabled ||
            (this.inputRef.focus(), this.handleDropdownIconClick());
        },
        handleInputBlur() {
          this.validate(),
            this.strategy.handleInputBlur(),
            (this.forceCloseResults || !this.showMenu) &&
              this.handleOutsideClick();
        },
        handleOutsideClick() {
          (this.hasFocus = !1),
            (this.forceCloseResults = !1),
            (this.activeChipIndex = -1),
            this.resetResultIndex(),
            (this.query = this.strategy.getInitialText()),
            (this.internalResults = []),
            this.adjustTextArea();
        },
        clickedItem(t) {
          this.selectItem(t),
            (this.internalResults = []),
            this.inputRef.focus(),
            this.strategy.clickedItem();
        },
        selectItem(t) {
          this.strategy.selectItem(t), this.adjustTextArea();
        },
        removeFromValue(t) {
          this.strategy.removeItem(t);
        },
        handleDropdownIconClick() {
          if (this.showMenu) {
            this.forceCloseResults = !0;
            return;
          }
          this.forceCloseResults || this.emitSearch();
        },
        adjustTextArea() {
          const t = this.inputRef;
          !t ||
            ((t.style.height = "1.625rem"),
            (t.style.flexBasis = "40px"),
            (t.style.whiteSpace = "nowrap"),
            this.$nextTick(() => {
              const o = t.getBoundingClientRect().width,
                r = t.parentElement;
              t.scrollWidth <= t.clientWidth &&
              r &&
              o < r.getBoundingClientRect().width
                ? (t.style.whiteSpace = "nowrap")
                : ((t.style.whiteSpace = "normal"),
                  (t.style.flexBasis = "100%")),
                this.$nextTick(() => {
                  t.style.height = `${t.scrollHeight}px`;
                });
            }));
        },
      },
      setup(t, o) {
        const r = kd(Ks(t, "labels"), Zh);
        Wi(t), _d(t);
        let a;
        t.gridConfig ? (a = YN(t.gridConfig)) : (a = GN());
        const l = Ks(t, "id"),
          c = yh(() => (l.value ? l.value : le("feather-autocomplete-input"))),
          { validate: d } = Si(c, Ks(t, "modelValue"), t.label, t.schema),
          {
            selectionLimit: p,
            modelValue: w,
            textProp: V,
            allowNew: g,
            type: R,
            minChar: y,
          } = dN(t),
          F = Mr(!1),
          E = Mr(!1),
          I = Mr(!1),
          C = Mr(""),
          A = Mr([]),
          O = Mr(),
          _ = yh(() => O.value),
          H = () => {
            F.value &&
              !E.value &&
              (C.value &&
                C.value.length >= y.value &&
                o.emit("search", C.value),
              y.value <= 0 && o.emit("search", C.value || ""),
              (A.value = []),
              a.reset());
          },
          k = zN(
            {
              selectionLimit: p,
              selectionLimitReached: E,
              modelValue: w,
              textProp: V,
              allowNew: g,
              forceCloseResults: I,
              query: C,
              internalResults: A,
              input: _,
              emitSearch: H,
            },
            a,
            R.value,
            o.emit
          );
        return lN(ct(ct({}, r), Fi(o.attrs)), {
          query: C,
          internalResults: A,
          selectionLimitReached: E,
          forceCloseResults: I,
          hasFocus: F,
          strategy: k,
          emitSearch: H,
          active: a.active,
          handleResultNavigation: a.handleKeyPress,
          resetResultIndex: a.reset,
          selectFirst: a.first,
          inputId: c,
          input: O,
          incomingId: l,
          inputRef: _,
          validate: d,
        });
      },
      mounted() {
        this.adjustTextArea();
      },
      components: {
        InputWrapper: Id,
        InputSubText: Ei,
        AutocompleteResults: TN,
        AutocompleteResultsGrid: bN,
        Chip: WN,
        MenuMessage: SN,
        FeatherIcon: q,
        FeatherMenu: hh,
        Spinner: _N,
      },
    }),
    PN = {
      class: "alert",
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": "true",
      ref: "alert",
    },
    jN = ["id"],
    XN = { "data-ref-id": "feather-autocomplete-no-results" },
    LN = { "data-ref-id": "feather-autocomplete-selection-limit" },
    $N = { "data-ref-id": "feather-autocomplete-min-char" };
  function qN(t, o, r, a, l, c) {
    const d = Me("FeatherIcon"),
      p = Me("Chip"),
      w = Me("InputWrapper"),
      V = Me("AutocompleteResults"),
      g = Me("AutocompleteResultsGrid"),
      R = Me("MenuMessage"),
      y = Me("Spinner"),
      F = Me("FeatherMenu"),
      E = Me("InputSubText");
    return (
      re(),
      be(
        "div",
        el(t.inherittedAttrs, { class: "feather-autocomplete-container" }),
        [
          Ke(
            F,
            {
              fill: "",
              "no-expand": "",
              open: t.showMenu,
              onOutsideClick: t.handleOutsideClick,
              onTriggerClick: t.handleTriggerClick,
              class: Qn([
                "feather-autocomplete-menu-container",
                { grid: t.gridConfig },
              ]),
              "data-ref-id": "feather-autocomplete-menu-container",
              ref: "menu",
            },
            {
              trigger: Qe(({ attrs: I, on: C }) => [
                Ke(
                  w,
                  el(
                    ct(ct({}, I), t.comboxBoxAttrs),
                    {
                      for: t.inputId,
                      raised: t.raised,
                      focused: t.hasFocus,
                      "clear-text": t.clearLabel,
                      showClear: t.singleSelect && t.hasValue,
                      onClear: t.handleClear,
                    },
                    kh(C),
                    { ref: "scroll" }
                  ),
                  {
                    pre: Qe(() => [
                      $s(
                        t.$slots,
                        "pre",
                        {},
                        () => [
                          Ke(d, { icon: t.searchIcon }, null, 8, ["icon"]),
                        ],
                        !0
                      ),
                    ]),
                    post: Qe(() => [
                      Ke(
                        d,
                        {
                          icon: t.dropdownIcon,
                          class: Qn([
                            "feather-autocomplete-dropdown-icon",
                            { rotate: t.showMenu },
                          ]),
                          onClick: t.handleDropdownIconClick,
                        },
                        null,
                        8,
                        ["icon", "class", "onClick"]
                      ),
                    ]),
                    default: Qe(() => [
                      qe(
                        "div",
                        {
                          class: Qn([
                            "feather-autocomplete-content",
                            { disabled: t.disabled },
                          ]),
                        },
                        [
                          qe("div", PN, null, 512),
                          qe(
                            "div",
                            {
                              class: "description",
                              id: t.selectedDescriptionId,
                              "data-ref-id":
                                "feather-autocomplete-input-selected",
                            },
                            St(t.selectedDescribedByText),
                            9,
                            jN
                          ),
                          (re(!0),
                          be(
                            kr,
                            null,
                            ko(t.modelValueList, (A, O) =>
                              Qi(
                                (re(),
                                gt(
                                  p,
                                  {
                                    key: A[t.textProp],
                                    role: "button",
                                    id:
                                      O === t.activeChipIndex
                                        ? t.activeChipId
                                        : null,
                                    focused: O === t.activeChipIndex,
                                    disabled: t.disabled,
                                    text: A[t.textProp],
                                    "remove-label": t.removeLabel,
                                    pre: t.getPre(A),
                                    onDelete: (_) => t.removeFromValue(A),
                                  },
                                  null,
                                  8,
                                  [
                                    "id",
                                    "focused",
                                    "disabled",
                                    "text",
                                    "remove-label",
                                    "pre",
                                    "onDelete",
                                  ]
                                )),
                                [[zi, !t.singleSelect]]
                              )
                            ),
                            128
                          )),
                          qe(
                            "textarea",
                            el(
                              t.inputAttrs,
                              {
                                class: [
                                  "feather-autocomplete-input",
                                  { error: t.error },
                                ],
                                "data-ref-id": "feather-autocomplete-input",
                              },
                              kh(t.inputListeners),
                              { ref: "input" }
                            ),
                            null,
                            16
                          ),
                        ],
                        2
                      ),
                    ]),
                    _: 2,
                  },
                  1040,
                  [
                    "for",
                    "raised",
                    "focused",
                    "clear-text",
                    "showClear",
                    "onClear",
                  ]
                ),
              ]),
              default: Qe(() => [
                t.gridConfig
                  ? Tt("", !0)
                  : Qi(
                      (re(),
                      gt(
                        V,
                        {
                          key: 0,
                          items: t.internalResults,
                          value: t.modelValue,
                          "text-prop": t.textProp,
                          activeId: t.resultItemId,
                          activeIndex: t.active.row,
                          "aria-label": t.label,
                          onSelect: t.clickedItem,
                          onDeselect: t.removeFromValue,
                          class: "autocomplete-results",
                          id: t.resultsId,
                          single: t.singleSelect,
                          "new-label": t.newLabel,
                          highlight: t.highlight,
                          query: t.query,
                          ref: "results",
                        },
                        null,
                        8,
                        [
                          "items",
                          "value",
                          "text-prop",
                          "activeId",
                          "activeIndex",
                          "aria-label",
                          "onSelect",
                          "onDeselect",
                          "id",
                          "single",
                          "new-label",
                          "highlight",
                          "query",
                        ]
                      )),
                      [[zi, t.showResults]]
                    ),
                t.gridConfig
                  ? Qi(
                      (re(),
                      gt(
                        g,
                        {
                          key: 1,
                          items: t.internalResults,
                          value: t.modelValue,
                          "text-prop": t.textProp,
                          config: t.gridConfig,
                          activeId: t.resultItemId,
                          activeRow: t.active.row,
                          activeCol: t.active.col,
                          "aria-label": t.label,
                          onSelect: t.clickedItem,
                          class: "autocomplete-results",
                          id: t.resultsId,
                          single: t.singleSelect,
                          highlight: t.highlight,
                          query: t.query,
                        },
                        null,
                        8,
                        [
                          "items",
                          "value",
                          "text-prop",
                          "config",
                          "activeId",
                          "activeRow",
                          "activeCol",
                          "aria-label",
                          "onSelect",
                          "id",
                          "single",
                          "highlight",
                          "query",
                        ]
                      )),
                      [[zi, t.showResults]]
                    )
                  : Tt("", !0),
                t.showNoResults
                  ? (re(),
                    gt(
                      R,
                      { key: 2 },
                      {
                        default: Qe(() => [
                          qe("span", XN, St(t.noResultsLabel), 1),
                        ]),
                        _: 1,
                      }
                    ))
                  : Tt("", !0),
                t.showSelectionLimit
                  ? (re(),
                    gt(
                      R,
                      { key: 3, class: "selection-limit-warning" },
                      {
                        default: Qe(() => [
                          Ke(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
                          qe("span", LN, St(t.selectionLimitLabel), 1),
                        ]),
                        _: 1,
                      }
                    ))
                  : Tt("", !0),
                t.minChar
                  ? Qi(
                      (re(),
                      gt(
                        R,
                        {
                          key: 4,
                          class: "min-char-warning",
                          id: t.minCharWarningId,
                        },
                        {
                          default: Qe(() => [
                            Ke(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
                            qe("span", $N, [
                              $s(
                                t.$slots,
                                "min-char",
                                {},
                                () => [Uh(St(t.computedMinCharText), 1)],
                                !0
                              ),
                            ]),
                          ]),
                          _: 3,
                        },
                        8,
                        ["id"]
                      )),
                      [[zi, t.showMinCharWarning]]
                    )
                  : Tt("", !0),
                t.showLoading ? (re(), gt(y, { key: 5 })) : Tt("", !0),
              ]),
              _: 3,
            },
            8,
            ["open", "onOutsideClick", "onTriggerClick", "class"]
          ),
          Ke(E, { id: t.subTextId }, null, 8, ["id"]),
        ],
        16
      )
    );
  }
  var KN = zn(HN, [
    ["render", qN],
    ["__scopeId", "data-v-43a7e951"],
  ]);
  const ey = window.Pinia.defineStore,
    bh = ey("appStore", {
      state: () => ({ showError: !1, errorMessage: "" }),
      actions: {
        showErrorMsg(t) {
          (this.showError = !0),
            (this.errorMessage = t),
            setTimeout(() => {
              (this.showError = !1), (this.errorMessage = "");
            }, 1800);
        },
      },
    }),
    ty = window.Vue.defineComponent,
    Gn = window.Vue.createElementVNode,
    Mo = window.Vue.unref,
    Zr = window.Vue.createVNode,
    ny = window.Vue.withCtx,
    Hi = window.Vue.toDisplayString,
    ry = window.Vue.renderList,
    oy = window.Vue.Fragment,
    br = window.Vue.openBlock,
    Jr = window.Vue.createElementBlock,
    nl = window.Vue.createCommentVNode,
    iy = window.Vue.pushScopeId,
    ay = window.Vue.popScopeId,
    Jh = (t) => (iy("data-v-5ca769d2"), (t = t()), ay(), t),
    sy = { class: "list-main" },
    ly = Jh(() => Gn("h2", null, "Situation List", -1)),
    cy = { class: "filters" },
    uy = Jh(() => Gn("span", null, "Reset Filters", -1)),
    dy = { class: "autocomplete" },
    hy = { key: 0, class: "container" },
    fy = { class: "situation-list" },
    py = { key: 0, class: "footer-pager" },
    my = { key: 1, class: "container" },
    wy = window.Vue.reactive,
    Er = window.Vue.ref,
    vy = window.Vue.watch,
    Vy = window.VueRouter.useRouter,
    Ty = ty({
      __name: "SituationList",
      setup(t) {
        const o = Vy(),
          r = mr(),
          a = bh();
        r.getSituations(), r.getNodes();
        const l = 9,
          c = wy({
            situations: [],
            selectedSituationIndex: 0,
            situationSelected: null,
            nodes: [],
            results: [],
            nodeSelectedValue: void 0,
            allSituations: [],
            filterSeverities: ["all"],
          }),
          d = Er(!1),
          p = Er(0),
          w = Er(1),
          V = Er(0),
          g = Er(!1),
          R = Er(!1),
          y = (k) => {
            (p.value = 0), (c.situations = k[0]), (w.value = k.length);
          },
          F = () => {
            (c.nodes = r.nodes), (c.results = r.nodes);
          };
        a.$subscribe((k, W) => {
          R.value = W.showError;
        }),
          vy(
            () => r.situations,
            () => {
              F(),
                (V.value = r.situations.length),
                (c.allSituations = ke.exports.chunk(r.situations, l));
              const k = r.situations.map((W) => W.id);
              (r.filteredSituations = k), y(c.allSituations), E();
            }
          );
        const E = () => {
            r.filters &&
              (r.filters.node && (c.nodeSelectedValue = r.filters.node),
              r.filters.severities &&
                (c.filterSeverities = r.filters.severities),
              C(),
              (r.filters = null));
          },
          I = (k) => {
            if (!k) return (c.nodeSelectedValue = void 0), [];
            (d.value = !0),
              (c.results = c.nodes
                .filter((W) => W.label.toLowerCase().indexOf(k) > -1)
                .map((W) => ({ _text: W.label, id: W.id }))),
              (d.value = !1);
          },
          C = () => {
            if (c.nodeSelectedValue && c.nodeSelectedValue._text) {
              let k = r.situations
                .map((W) => {
                  if (
                    W.relatedAlarms.filter((z) => {
                      var de;
                      return (
                        z.nodeLabel ===
                        ((de = c.nodeSelectedValue) == null ? void 0 : de._text)
                      );
                    }).length > 0
                  )
                    return W;
                })
                .filter((W) => W);
              if (k) {
                c.filterSeverities.includes("all") ||
                  (k = k.filter((x) =>
                    c.filterSeverities.includes(x.severity)
                  )),
                  (V.value = k.length),
                  (c.situations = k);
                const W = k.map((x) => x.id);
                (r.filteredSituations = W), (g.value = !0);
              }
            } else if (
              ((c.nodeSelectedValue = void 0),
              c.filterSeverities.includes("all"))
            )
              H();
            else {
              const k = r.situations.filter((x) =>
                c.filterSeverities.includes(x.severity)
              );
              (c.situations = k), (V.value = k.length);
              const W = k.map((x) => x.id);
              (g.value = !0), (r.filteredSituations = W);
            }
          },
          A = (k) => {
            (p.value = k), (c.situations = c.allSituations[p.value]);
          },
          O = (k) => {
            (c.nodeSelectedValue || c.filterSeverities.length) &&
              (r.filters = {
                node: c.nodeSelectedValue,
                severities: c.filterSeverities,
              }),
              o.push({ name: "situationDetail", params: { id: k } });
          },
          _ = (k) => {
            k.includes("all") && !c.nodeSelectedValue
              ? H()
              : ((c.filterSeverities = k), C());
          },
          H = () => {
            (c.filterSeverities = ["all"]), (c.nodeSelectedValue = void 0);
            const k = r.situations.map((W) => W.id);
            (r.filteredSituations = k),
              (V.value = r.situations.length),
              y(c.allSituations),
              (g.value = !1);
          };
        return (k, W) => (
          br(),
          Jr("div", sy, [
            ly,
            Gn("div", cy, [
              Zr(
                Mo(lt),
                { class: "reset-btn", onClick: W[0] || (W[0] = () => H()) },
                {
                  default: ny(() => [
                    Zr(
                      Mo(q),
                      { icon: Mo(ih), "aria-hidden": "true", class: "icon" },
                      null,
                      8,
                      ["icon"]
                    ),
                    uy,
                  ]),
                  _: 1,
                }
              ),
              Zr(
                th,
                {
                  alarms: Mo(r).situations,
                  onSelectedSeverities: _,
                  "pre-selected": c.filterSeverities,
                },
                null,
                8,
                ["alarms", "pre-selected"]
              ),
              Gn("div", dy, [
                Zr(
                  Mo(KN),
                  {
                    class: "map-search",
                    label: "Find by node",
                    loading: d.value,
                    modelValue: c.nodeSelectedValue,
                    "onUpdate:modelValue": [
                      W[1] || (W[1] = (x) => (c.nodeSelectedValue = x)),
                      C,
                    ],
                    results: c.results,
                    type: "single",
                    onSearch: I,
                  },
                  null,
                  8,
                  ["loading", "modelValue", "results"]
                ),
              ]),
            ]),
            c.situations && c.situations.length > 0
              ? (br(),
                Jr("div", hy, [
                  Gn(
                    "div",
                    null,
                    " Result: " +
                      Hi(c.situations.length) +
                      " of " +
                      Hi(V.value),
                    1
                  ),
                  Gn("div", fy, [
                    (br(!0),
                    Jr(
                      oy,
                      null,
                      ry(
                        c.situations,
                        (x) => (
                          br(),
                          Jr("div", { class: "card", key: x.id }, [
                            Zr(
                              k0,
                              { onClick: () => O(x.id), "situation-info": x },
                              null,
                              8,
                              ["onClick", "situation-info"]
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]),
                  !g.value && V.value > l
                    ? (br(),
                      Jr("div", py, [
                        Gn(
                          "div",
                          null,
                          "Page: " + Hi(p.value + 1) + " of " + Hi(w.value),
                          1
                        ),
                        Zr(
                          dT,
                          {
                            onGoToPage: A,
                            currentPage: p.value,
                            totalPages: w.value,
                          },
                          null,
                          8,
                          ["currentPage", "totalPages"]
                        ),
                      ]))
                    : nl("", !0),
                ]))
              : nl("", !0),
            !c.situations || c.situations.length == 0
              ? (br(), Jr("div", my, " No results found "))
              : nl("", !0),
          ])
        );
      },
    }),
    f_ = "",
    gy = ge(Ty, [["__scopeId", "data-v-5ca769d2"]]),
    p_ = "",
    Pi = window.Vue.ref,
    Uy = window.Vue.inject,
    Ry = window.Vue.computed,
    Ny = window.Vue.onMounted,
    yy = {
      id: { type: String },
      controls: { type: String },
      disabled: { type: Boolean, default: !1 },
    },
    ky = (t) => {
      const o = Pi(!1),
        r = Pi(),
        a = Pi(t.controls),
        l = Pi(t.id),
        c = () => {
          r.value && r.value.focus();
        },
        d = Uy("registerTab");
      Ny(() => {
        if (r.value && d) {
          const w = r.value.parentElement,
            V = w && w.parentElement ? w.parentElement : void 0,
            g = Array.from(V ? V.children : []).filter(
              (y) => y.querySelectorAll("[role=tab]").length
            ),
            R = w ? g.indexOf(w) : -1;
          d({
            el: r.value,
            focus: c,
            disabled: t.disabled,
            selected: o,
            id: l,
            controls: a,
            index: R,
          });
        }
      });
      const p = Ry(() => ({
        role: "tab",
        ref: "tab",
        tabindex: o.value ? 0 : -1,
        id: l.value,
        "aria-selected": o.value,
        "aria-controls": a.value,
        "aria-disabled": t.disabled,
        "data-ref-id": "feather-tab",
      }));
      return { selected: o, attrs: p, tab: r };
    },
    Eh = window.Vue.ref,
    My = window.Vue.toRef,
    Zy = window.Vue.watch,
    Sh = window.Vue.provide,
    by = { prop: "modelValue", event: "update:modelValue" },
    Jy = { "update:modelValue": (t) => !0 },
    Ey = {
      modelValue: { type: Number, default: 0 },
      vertical: { type: Boolean, default: !0 },
    },
    Sy = (t, o) => {
      const r = My(t, "modelValue"),
        a = Eh(t.modelValue),
        l = Eh([]);
      Zy(r, (E) => {
        w(E);
      });
      const c = (E) => {
          E.preventDefault(),
            l.value.some((I, C) =>
              I.tab && I.tab.el.contains(E.target) ? (p(C), w(C), !0) : !1
            );
        },
        d = (E) => {
          if (((z) => z.shiftKey || z.ctrlKey || z.metaKey || z.altKey)(E))
            return;
          const C = E.keyCode,
            A = (z) => {
              z.stopPropagation(), z.preventDefault();
            },
            O = l.value.filter((z) => z.tab && !z.tab.disabled),
            _ = l.value.findIndex(
              (z) => z.tab && z.tab.el.contains(document.activeElement)
            );
          let H = _ !== -1 ? _ : a.value;
          const k = [K.RIGHT],
            W = [K.LEFT],
            x = [K.ENTER, K.SPACE];
          t.vertical && (k.push(K.DOWN), W.push(K.UP)),
            k.indexOf(C) > -1
              ? (H++, H >= O.length && (H = 0), A(E), p(l.value.indexOf(O[H])))
              : W.indexOf(C) > -1 &&
                (H--,
                H < 0 && (H = O.length - 1),
                A(E),
                p(l.value.indexOf(O[H]))),
            x.indexOf(C) > -1 && w(H);
        },
        p = (E) => {
          l.value.forEach(function (I, C) {
            E === C && I.tab && I.tab.focus();
          });
        },
        w = (E) => {
          const I = l.value[E];
          !I ||
            (I.tab && I.tab.disabled) ||
            (l.value.forEach((C, A) => {
              C.tab && (C.tab.selected = E === A),
                C.panel && (C.panel.selected = E === A);
            }),
            (a.value = E),
            o.emit("update:modelValue", E));
        };
      Sh("registerTab", (E) => {
        const I = E.index;
        I > -1 &&
          ((l.value[I] = { ...l.value[I], tab: E }),
          (l.value = [...l.value]),
          R());
      }),
        Sh("registerPanel", (E) => {
          const I = E.index;
          I > -1 &&
            ((l.value[I] = { ...l.value[I], panel: E }),
            (l.value = [...l.value]),
            R());
        });
      const R = () => {
        l.value.forEach(({ tab: E, panel: I }, C) => {
          if (I && E) {
            const A = E.id || le("tab"),
              O = E.controls || le("panel");
            (E.controls = O), (E.id = A), (I.tab = A), (I.id = O);
          }
          C === a.value && (I && (I.selected = !0), E && (E.selected = !0));
        });
      };
      return {
        listeners: { click: c, keydown: d },
        attrs: { role: "tablist" },
        selected: a,
        pairs: l,
      };
    },
    ji = window.Vue.ref,
    Fy = window.Vue.inject,
    Ay = window.Vue.computed,
    Wy = window.Vue.onMounted,
    Cy = { id: { type: String }, tab: { type: String } },
    xy = (t) => {
      const o = ji(!1),
        r = ji(),
        a = ji(t.tab),
        l = ji(t.id),
        c = Fy("registerPanel");
      Wy(() => {
        if (c) {
          const p = r.value,
            w = p && p.parentElement ? p.parentElement : void 0,
            V = p ? Array.from(w ? w.children : []).indexOf(p) : -1;
          c({ selected: o, id: l, tab: a, el: r.value, index: V });
        }
      });
      const d = Ay(() => ({
        role: "tabpanel",
        id: l.value,
        ref: "panel",
        tabindex: "0",
        "aria-expanded": o.value,
        "aria-labelledby": a.value,
        "data-ref-id": "feather-tab-panel",
      }));
      return { selected: o, attrs: d, panel: r };
    },
    rl = window.Vue.defineComponent,
    By = window.Vue.resolveComponent,
    ol = window.Vue.openBlock,
    il = window.Vue.createElementBlock,
    Zo = window.Vue.createElementVNode,
    Fh = window.Vue.mergeProps,
    Xi = window.Vue.renderSlot,
    Iy = window.Vue.createVNode,
    Dy = window.Vue.normalizeStyle,
    _y = window.Vue.toHandlers,
    Oy = window.Vue.withDirectives,
    Qy = window.Vue.normalizeProps,
    zy = window.Vue.guardReactiveProps,
    Gy = window.Vue.vShow;
  var al = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const Yy = rl({
      props: yy,
      setup(t) {
        return ky(t);
      },
      components: { FeatherRipple: _n },
    }),
    Hy = { role: "presentation" },
    Py = { class: "tab-text" };
  function jy(t, o, r, a, l, c) {
    const d = By("FeatherRipple");
    return (
      ol(),
      il("li", Hy, [
        Zo(
          "button",
          Fh(t.attrs, {
            class: [
              "tab hover focus",
              { disabled: t.disabled, selected: t.selected },
            ],
          }),
          [Zo("span", Py, [Xi(t.$slots, "default", {}, void 0, !0)]), Iy(d)],
          16
        ),
      ])
    );
  }
  var Ah = al(Yy, [
    ["render", jy],
    ["__scopeId", "data-v-e6bb52b6"],
  ]);
  const Xy = rl({
      model: by,
      emits: Jy,
      props: Ey,
      setup(t, o) {
        return Sy(t, o);
      },
      data: () => ({
        transform: "",
        durationNumber: 250,
        width: "1px",
        ro: void 0,
      }),
      watch: {
        selected() {
          this.updateSlider();
        },
        pairs: {
          handler(t) {
            t &&
              t.length &&
              this.ro &&
              t.forEach((o) => {
                o.tab && this.ro.observe(o.tab.el);
              });
          },
          immediate: !0,
        },
      },
      computed: {
        duration() {
          return `${this.durationNumber}ms`;
        },
      },
      methods: {
        updateSlider() {
          this.$refs.slider.getBoundingClientRect().width < 5
            ? (this.durationNumber = 0)
            : (this.durationNumber = 250),
            this.$nextTick(() => {
              const t = this.$el.getBoundingClientRect(),
                o = this.$el
                  .querySelector("[aria-selected='true']")
                  .getBoundingClientRect(),
                r = o.left - t.left,
                a = o.height - 2;
              (this.width = `${o.width}px`),
                (this.transform = `translateX(${r}px) translateY(${a}px)`);
            });
        },
      },
      mounted() {
        this.updateSlider(),
          (this.ro = new ResizeObserver(() => {
            this.updateSlider();
          }));
      },
      unmounted() {
        this.ro.disconnect();
      },
    }),
    Ly = { class: "feather-tab-container" },
    $y = { class: "tab-panels" };
  function qy(t, o, r, a, l, c) {
    return (
      ol(),
      il("div", Ly, [
        Zo(
          "div",
          {
            ref: "slider",
            class: "feather-tab-slider",
            style: Dy({
              transform: t.transform,
              "transition-duration": t.duration,
              width: t.width,
            }),
          },
          null,
          4
        ),
        Zo(
          "ul",
          Fh(t.attrs, _y(t.listeners)),
          [Xi(t.$slots, "tabs", {}, void 0, !0)],
          16
        ),
        Zo("div", $y, [Xi(t.$slots, "default", {}, void 0, !0)]),
      ])
    );
  }
  var Ky = al(Xy, [
    ["render", qy],
    ["__scopeId", "data-v-27adffb9"],
  ]);
  const ek = rl({
    props: Cy,
    setup(t) {
      return xy(t);
    },
  });
  function tk(t, o, r, a, l, c) {
    return Oy(
      (ol(), il("div", Qy(zy(t.attrs)), [Xi(t.$slots, "default")], 16)),
      [[Gy, t.selected]]
    );
  }
  var Wh = al(ek, [["render", tk]]);
  const nk = window.Vue.defineComponent,
    rk = window.Vue.toDisplayString,
    ok = window.Vue.normalizeClass,
    ik = window.Vue.openBlock,
    ak = window.Vue.createElementBlock,
    sk = window.Vue.createCommentVNode,
    lk = nk({
      __name: "SeverityStatus",
      props: { severity: { required: !1, type: String } },
      setup(t) {
        const o = t;
        return (r, a) =>
          o != null && o.severity
            ? (ik(),
              ak(
                "span",
                {
                  key: 0,
                  class: ok([
                    "severity-status",
                    [`${o.severity.toLowerCase()}-color`],
                  ]),
                },
                rk(o.severity),
                3
              ))
            : sk("", !0);
      },
    }),
    T_ = "",
    Ch = ge(lk, [["__scopeId", "data-v-83c2cdce"]]),
    ck = window.Vue.defineComponent,
    xh = window.Vue.toDisplayString,
    Bh = window.Vue.createElementVNode,
    uk = window.Vue.openBlock,
    dk = window.Vue.createElementBlock;
  window.Vue.pushScopeId, window.Vue.popScopeId;
  const hk = { class: "box" },
    fk = { class: "label" },
    pk = { class: "date" },
    mk = ck({
      __name: "InformationBox",
      props: { label: null, info: null },
      setup(t) {
        const o = t;
        return (r, a) => (
          uk(),
          dk("div", hk, [
            Bh("div", fk, xh(o.label), 1),
            Bh("div", pk, xh(o.info), 1),
          ])
        );
      },
    }),
    g_ = "",
    sl = ge(mk, [["__scopeId", "data-v-b4afa751"]]),
    wk = window.Vue.defineComponent,
    vk = window.Vue.unref,
    Vk = window.Vue.renderList,
    Tk = window.Vue.Fragment,
    ll = window.Vue.openBlock,
    cl = window.Vue.createElementBlock,
    gk = window.Vue.toDisplayString,
    Uk = window.Vue.normalizeClass;
  window.Vue.pushScopeId, window.Vue.popScopeId;
  const Rk = { class: "alarms-list" },
    Nk = wk({
      __name: "AlarmsCountBySeverity",
      props: { alarms: null, size: null },
      setup(t) {
        const o = t;
        return (r, a) => (
          ll(),
          cl("div", Rk, [
            (ll(!0),
            cl(
              Tk,
              null,
              Vk(
                vk(ke.exports.groupBy)(
                  o == null ? void 0 : o.alarms,
                  "severity"
                ),
                (l, c) => (
                  ll(),
                  cl(
                    "div",
                    {
                      class: Uk([
                        "alarm-count",
                        [`${c.toString().toLowerCase()}-color`, o.size],
                      ]),
                      key: c,
                    },
                    gk(l.length),
                    3
                  )
                )
              ),
              128
            )),
          ])
        );
      },
    }),
    U_ = "",
    yk = ge(Nk, [["__scopeId", "data-v-52d63440"]]),
    kk = window.Vue.openBlock,
    Mk = window.Vue.createElementBlock,
    Zk = window.Vue.createElementVNode;
  var bk = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const Jk = {},
    Ek = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    Sk = [
      Zk(
        "path",
        {
          d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z",
        },
        null,
        -1
      ),
    ];
  function Fk(t, o) {
    return kk(), Mk("svg", Ek, Sk);
  }
  var Ak = bk(Jk, [["render", Fk]]);
  const Wk = window.Vue.openBlock,
    Ck = window.Vue.createElementBlock,
    xk = window.Vue.createStaticVNode;
  var Bk = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const Ik = {},
    Dk = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    _k = [
      xk(
        '<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>',
        6
      ),
    ];
  function Ok(t, o) {
    return Wk(), Ck("svg", Dk, _k);
  }
  var Ih = Bk(Ik, [["render", Ok]]);
  const Qk = window.Vue.defineComponent,
    Ft = window.Vue.unref,
    ul = window.Vue.createVNode,
    dl = window.Vue.createElementVNode,
    hl = window.Vue.withCtx,
    Li = window.Vue.openBlock,
    fl = window.Vue.createBlock,
    pl = window.Vue.createCommentVNode,
    zk = window.Vue.normalizeClass,
    Gk = window.Vue.createElementBlock,
    Yk = window.Vue.pushScopeId,
    Hk = window.Vue.popScopeId,
    ml = (t) => (Yk("data-v-e073070b"), (t = t()), Hk(), t),
    Pk = ml(() => dl("span", null, "Acknowledge", -1)),
    jk = ml(() => dl("span", null, "Escalate", -1)),
    Xk = ml(() => dl("span", null, "Clear", -1)),
    Lk = Qk({
      __name: "AlarmActionBtns",
      props: {
        alarm: null,
        direction: null,
        showClear: { type: Boolean },
        isSituation: { type: Boolean },
        situationId: null,
      },
      setup(t) {
        const o = t,
          r = mr(),
          a = async (c) => {
            (await lv(o.alarm.id, c)) && r.getSituation(o.situationId),
              o.isSituation &&
                (await nd(o.situationId, at.ACCEPTED.toLowerCase()));
          },
          l = async (c) => {
            (await cv(o.alarm.id, c)) && r.getSituation(o.situationId);
          };
        return (c, d) => (
          Li(),
          Gk(
            "div",
            {
              class: zk([
                "action-btns-group",
                o.direction === "horizontal" ? "horizontal" : "vertical",
              ]),
            },
            [
              t.alarm.ackTime
                ? pl("", !0)
                : (Li(),
                  fl(
                    Ft(lt),
                    {
                      key: 0,
                      class: "acction-btn",
                      onClick: d[0] || (d[0] = () => a(!0)),
                    },
                    {
                      default: hl(() => [
                        ul(
                          Ft(q),
                          {
                            icon: Ft(ro),
                            "aria-hidden": "true",
                            class: "icon ack",
                          },
                          null,
                          8,
                          ["icon"]
                        ),
                        Pk,
                      ]),
                      _: 1,
                    }
                  )),
              t.alarm.severity != "CRITICAL"
                ? (Li(),
                  fl(
                    Ft(lt),
                    {
                      key: 1,
                      class: "acction-btn",
                      onClick: d[1] || (d[1] = () => l(Ft(at).ESCALATE)),
                    },
                    {
                      default: hl(() => [
                        ul(
                          Ft(q),
                          {
                            icon: Ft(Ak),
                            "aria-hidden": "true",
                            class: "icon escalate",
                          },
                          null,
                          8,
                          ["icon"]
                        ),
                        jk,
                      ]),
                      _: 1,
                    }
                  ))
                : pl("", !0),
              o.showClear &&
              t.alarm.severity != "NORMAL" &&
              t.alarm.severity != "CLEARED"
                ? (Li(),
                  fl(
                    Ft(lt),
                    {
                      key: 2,
                      class: "acction-btn",
                      onClick: d[2] || (d[2] = () => l(Ft(at).CLEAR)),
                    },
                    {
                      default: hl(() => [
                        ul(
                          Ft(q),
                          {
                            icon: Ft(Ih),
                            "aria-hidden": "true",
                            class: "icon clear",
                          },
                          null,
                          8,
                          ["icon"]
                        ),
                        Xk,
                      ]),
                      _: 1,
                    }
                  ))
                : pl("", !0),
            ],
            2
          )
        );
      },
    }),
    y_ = "",
    Dh = ge(Lk, [["__scopeId", "data-v-e073070b"]]),
    k_ = "";
  var $k = Object.defineProperty,
    qk = Object.defineProperties,
    Kk = Object.getOwnPropertyDescriptors,
    _h = Object.getOwnPropertySymbols,
    eM = Object.prototype.hasOwnProperty,
    tM = Object.prototype.propertyIsEnumerable,
    Oh = (t, o, r) =>
      o in t
        ? $k(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    wl = (t, o) => {
      for (var r in o || (o = {})) eM.call(o, r) && Oh(t, r, o[r]);
      if (_h) for (var r of _h(o)) tM.call(o, r) && Oh(t, r, o[r]);
      return t;
    },
    Qh = (t, o) => qk(t, Kk(o));
  const zh = window.Vue.defineComponent,
    nM = window.Vue.inject,
    rM = window.Vue.resolveComponent,
    vl = window.Vue.openBlock,
    Gh = window.Vue.createElementBlock,
    Sr = window.Vue.createElementVNode,
    oM = window.Vue.createBlock,
    Yh = window.Vue.createCommentVNode,
    iM = window.Vue.renderSlot,
    aM = window.Vue.pushScopeId,
    sM = window.Vue.popScopeId,
    Vl = window.Vue.toRef,
    $i = window.Vue.computed,
    lM = window.Vue.ref;
  window.Vue.mergeProps, window.Vue.toDisplayString, window.Vue.createVNode;
  var cM = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const uM = zh({
      model: { prop: "modelValue", event: "update:modelValue" },
      emits: {
        "update:modelValue": (t) => !0,
        click: (t) => !0,
        indeterminate: (t) => !0,
      },
      props: {
        disabled: { type: Boolean, default: !1 },
        modelValue: { type: Boolean, default: !1 },
        indeterminate: { type: Boolean, default: !1 },
        label: { type: String },
        noFocus: { type: Boolean, default: !1 },
      },
      mounted() {
        this.registerCheckbox && this.registerCheckbox(this.inputId);
      },
      setup() {
        return { registerCheckbox: nM("registerCheckbox", (o) => {}) };
      },
      computed: {
        inputId() {
          return this.label && this.label.length ? void 0 : le("checkbox");
        },
        labelId() {
          return this.label && this.label.length
            ? void 0
            : le("checkbox-label");
        },
      },
      watch: {
        indeterminate: {
          handler(t) {
            this.$emit("update:modelValue", void 0),
              this.$emit("indeterminate", t);
          },
        },
      },
      methods: {
        focus() {
          this.$refs.input.focus();
        },
        updateValue() {
          this.disabled ||
            (this.indeterminate
              ? (this.$emit("update:modelValue", !0),
                this.$emit("indeterminate", !1))
              : (this.$emit("update:modelValue", !this.modelValue),
                this.$emit("indeterminate", !1)));
        },
        click(t) {
          this.focus(), this.updateValue(), this.$emit("click", t);
        },
        keydown(t) {
          (t.keyCode === K.SPACE || t.keyCode === K.ENTER) &&
            this.updateValue(),
            t.keyCode === K.SPACE && t.preventDefault();
        },
      },
      components: { FeatherRipple: _n },
    }),
    dM = (t) => (aM("data-v-a7af27e2"), (t = t()), sM(), t),
    hM = { class: "layout-container" },
    fM = [
      "aria-checked",
      "aria-disabled",
      "aria-labelledby",
      "aria-label",
      "id",
      "tabindex",
    ],
    pM = { class: "checkbox hover focus" },
    mM = dM(() =>
      Sr(
        "div",
        { class: "box" },
        [
          Sr(
            "svg",
            {
              class: "checkmark",
              role: "presentation",
              focusable: "false",
              viewBox: "0 0 24 24",
            },
            [
              Sr("path", {
                class: "path",
                fill: "none",
                d: "M1.73,12.91 8.1,19.28 22.79,4.59",
              }),
            ]
          ),
          Sr("div", { class: "indeterminate" }),
        ],
        -1
      )
    ),
    wM = ["id", "for"];
  function vM(t, o, r, a, l, c) {
    const d = rM("feather-ripple");
    return (
      vl(),
      Gh("div", hM, [
        Sr(
          "div",
          {
            class: "feather-checkbox feather-form-input feather-checkbox-table",
            onClick: o[0] || (o[0] = (...p) => t.click && t.click(...p)),
            onKeydown: o[1] || (o[1] = (...p) => t.keydown && t.keydown(...p)),
            "aria-checked": t.modelValue
              ? "true"
              : t.indeterminate
              ? "mixed"
              : "false",
            "aria-disabled": t.disabled,
            "aria-labelledby": t.labelId,
            "aria-label": t.label,
            id: t.inputId,
            tabindex: t.noFocus ? -1 : 0,
            ref: "input",
            role: "checkbox",
            "data-ref-id": "feather-checkbox",
          },
          [
            Sr("div", pM, [
              mM,
              t.disabled ? Yh("", !0) : (vl(), oM(d, { key: 0, center: "" })),
            ]),
            t.label
              ? Yh("", !0)
              : (vl(),
                Gh(
                  "label",
                  {
                    key: 0,
                    "data-ref-id": "feather-checkbox-label",
                    id: t.labelId,
                    for: t.inputId,
                  },
                  [iM(t.$slots, "default", {}, void 0, !0)],
                  8,
                  wM
                )),
          ],
          40,
          fM
        ),
      ])
    );
  }
  var Tl = cM(uM, [
    ["render", vM],
    ["__scopeId", "data-v-a7af27e2"],
  ]);
  const VM = Qh(wl({}, Ai), {
    modelValue: { type: [Array, Object], required: !1 },
    label: { type: String, required: !0 },
    vertical: { type: Boolean, default: !1 },
    schema: { type: Object, required: !1 },
  });
  zh({
    props: VM,
    provide() {
      return { registerCheckbox: this.registerCheckbox };
    },
    setup(t, o) {
      Wi(t);
      const r = Vl(t, "error"),
        a = $i(() => le("feather-checkbox-group")),
        l = $i(() => le("feather-input-description")),
        c = $i(() => le("feather-input-label")),
        d = $i(() => {
          const g = JSON.parse(JSON.stringify(o.attrs));
          return (
            g["aria-invalid"] || (g["aria-invalid"] = !!r.value),
            Qh(wl({}, g), { class: "", "aria-describedby": l.value })
          );
        }),
        p = lM(a.value),
        { validate: w } = Si(
          p,
          Vl(t, "modelValue"),
          t.label,
          t.schema,
          Vl(t, "error")
        );
      return wl(
        {
          groupId: a,
          inputId: p,
          descriptionId: l,
          labelId: c,
          attrs: d,
          validate: w,
          registerCheckbox: (g) => {
            g && p.value === a.value && (p.value = g);
          },
        },
        Fi(o.attrs)
      );
    },
    components: { InputSubText: Ei },
  });
  const TM = window.Vue.openBlock,
    gM = window.Vue.createElementBlock,
    Hh = window.Vue.createElementVNode;
  var UM = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const RM = {},
    NM = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    yM = [
      Hh(
        "path",
        {
          d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z",
        },
        null,
        -1
      ),
      Hh(
        "path",
        {
          d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z",
        },
        null,
        -1
      ),
    ];
  function kM(t, o) {
    return TM(), gM("svg", NM, yM);
  }
  var MM = UM(RM, [["render", kM]]);
  const E_ = "",
    Ph = function (t) {
      t = t || "feather";
      const o = Math.floor(Math.random() * 1e9);
      return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
    },
    S_ = "",
    Fr = window.Vue.defineComponent,
    bo = window.Vue.resolveComponent,
    Ht = window.Vue.openBlock,
    Ar = window.Vue.createElementBlock,
    ZM = window.Vue.createVNode,
    qi = window.Vue.createBlock,
    bM = window.Vue.withModifiers,
    Wr = window.Vue.inject,
    Jo = window.Vue.computed,
    JM = window.Vue.normalizeClass,
    yn = window.Vue.createElementVNode,
    EM = window.Vue.normalizeStyle,
    gl = window.Vue.toDisplayString,
    Ki = window.Vue.renderSlot,
    Eo = window.Vue.createCommentVNode,
    SM = window.Vue.pushScopeId,
    FM = window.Vue.popScopeId,
    AM = window.Vue.withDirectives,
    WM = window.Vue.vShow,
    Ul = window.Vue.ref,
    jh = window.Vue.toRef,
    Xh = window.Vue.nextTick,
    Rl = window.Vue.watch;
  window.Vue.createTextVNode, window.Vue.Fragment, window.Vue.renderList;
  const Nl = window.Vue.provide,
    Lh = window.Vue.isRef,
    CM = window.Vue.onBeforeUnmount,
    xM = Fr({
      props: {
        title: { type: String, default: "" },
        icon: { type: Object, required: !0 },
      },
      components: { FeatherIcon: q },
    }),
    So = (t, o) => {
      const r = t.__vccOpts || t;
      for (const [a, l] of o) r[a] = l;
      return r;
    },
    BM = ["title"];
  function IM(t, o, r, a, l, c) {
    const d = bo("FeatherIcon");
    return (
      Ht(),
      Ar(
        "a",
        { title: t.title, class: "action-icon hide-when-disabled", href: "#" },
        [ZM(d, { icon: t.icon }, null, 8, ["icon"])],
        8,
        BM
      )
    );
  }
  const DM = Fr({
    emits: ["clear"],
    props: { clear: { type: String, default: "" } },
    computed: {
      clearIcon() {
        return uo;
      },
    },
    components: {
      ActionIcon: So(xM, [
        ["render", IM],
        ["__scopeId", "data-v-8bb27a5c"],
      ]),
    },
  });
  function _M(t, o, r, a, l, c) {
    const d = bo("ActionIcon");
    return (
      Ht(),
      qi(
        d,
        {
          onClick:
            o[0] || (o[0] = bM((p) => t.$emit("clear"), ["stop", "prevent"])),
          title: t.clear,
          icon: t.clearIcon,
          "data-ref-id": "feather-form-element-clear",
        },
        null,
        8,
        ["title", "icon"]
      )
    );
  }
  const OM = So(DM, [["render", _M]]),
    QM = Fr({
      computed: {
        errorIcon() {
          return Ed;
        },
      },
      components: { FeatherIcon: q },
    });
  function zM(t, o, r, a, l, c) {
    const d = bo("FeatherIcon");
    return (
      Ht(),
      qi(
        d,
        {
          icon: t.errorIcon,
          class: "error-icon hide-when-disabled",
          "data-ref-id": "error-icon",
        },
        null,
        8,
        ["icon"]
      )
    );
  }
  const GM = Fr({
      emits: { clear: () => !0, "wrapper-click": (t) => !0 },
      props: {
        for: { type: String, required: !0 },
        focused: { type: Boolean, default: !1 },
        showClear: { type: Boolean, default: !1 },
        clearText: { type: String },
        raised: { type: Boolean, default: !1 },
      },
      data() {
        return { labelWidth: "0px", labelObserver: void 0 };
      },
      setup() {
        const t = Wr("wrapperOptions", {}),
          o = Wr("validationErrorMessage", !1),
          r = Jo(() => (t.error ? t.error : o && o.value ? o.value : !1));
        return { ...t, error: r };
      },
      computed: {
        computedClearText() {
          return this.clearText ? this.clearText : this.clear ? this.clear : "";
        },
        inputId() {
          return this.for;
        },
        hasPre() {
          return (
            this.$slots.pre &&
            this.$slots
              .pre()
              .findIndex((o) => o.children && o.children.length !== 0) !== -1
          );
        },
        containerCls() {
          const t = [];
          return (
            this.hideLabel && t.push("hide-label"),
            this.raised && t.push("raised"),
            this.focused && t.push("focused"),
            this.error && t.push("error"),
            this.disabled && t.push("disabled"),
            this.inline && t.push("inline"),
            this.hasPre && t.push("has-prefix"),
            t
          );
        },
      },
      methods: {
        handleWrapperClick(t) {
          this.disabled || this.$emit("wrapper-click", t);
        },
      },
      mounted() {
        const t = this.$el.querySelector(".feather-input-label");
        if (t) {
          const o = { childList: !0, subtree: !0 },
            r = () => {
              const a = this.$el.querySelector(".feather-input-label"),
                { width: l } = a.getBoundingClientRect();
              l > 2
                ? this.raised || this.focused
                  ? (this.labelWidth = l + "px")
                  : (this.labelWidth = l * 0.75 + 8 + "px")
                : (this.labelWidth = "0px");
            };
          (this.labelObserver = new MutationObserver(r)),
            this.labelObserver.observe(t, o),
            this.$nextTick(r);
        }
      },
      unmounted() {
        this.labelObserver && this.labelObserver.disconnect();
      },
      components: {
        ClearIcon: OM,
        ErrorIcon: So(QM, [
          ["render", zM],
          ["__scopeId", "data-v-2b61105f"],
        ]),
      },
    }),
    $h = (t) => (SM("data-v-ab1739ff"), (t = t()), FM(), t),
    YM = { class: "feather-input-border" },
    HM = $h(() => yn("div", { class: "pre-border" }, null, -1)),
    PM = ["for"],
    jM = $h(() => yn("div", { class: "post-border" }, null, -1)),
    XM = { class: "prefix" },
    LM = { class: "post" };
  function $M(t, o, r, a, l, c) {
    const d = bo("ClearIcon"),
      p = bo("ErrorIcon");
    return (
      Ht(),
      Ar(
        "div",
        { class: JM(["feather-input-wrapper-container", t.containerCls]) },
        [
          yn("div", YM, [
            HM,
            yn(
              "div",
              { class: "label-border", style: EM({ width: t.labelWidth }) },
              [
                yn(
                  "label",
                  {
                    class: "feather-input-label",
                    for: t.inputId,
                    "data-ref-id": "feather-form-element-label",
                  },
                  gl(t.label),
                  9,
                  PM
                ),
              ],
              4
            ),
            jM,
          ]),
          yn(
            "div",
            {
              class: "feather-input-wrapper",
              onClick:
                o[1] ||
                (o[1] = (...w) =>
                  t.handleWrapperClick && t.handleWrapperClick(...w)),
            },
            [
              yn("div", XM, [Ki(t.$slots, "pre", {}, void 0, !0)]),
              Ki(t.$slots, "default", {}, void 0, !0),
              yn("div", LM, [
                t.showClear && t.computedClearText
                  ? (Ht(),
                    qi(
                      d,
                      {
                        key: 0,
                        clear: t.computedClearText,
                        onClear: o[0] || (o[0] = (w) => t.$emit("clear")),
                      },
                      null,
                      8,
                      ["clear"]
                    ))
                  : Eo("", !0),
                t.error ? (Ht(), qi(p, { key: 1 })) : Eo("", !0),
                Ki(t.$slots, "post", {}, void 0, !0),
              ]),
            ]
          ),
        ],
        2
      )
    );
  }
  const qM = So(GM, [
      ["render", $M],
      ["__scopeId", "data-v-ab1739ff"],
    ]),
    KM = Fr({
      setup() {
        const t = Wr("subTextOptions", {}),
          o = Wr("validationErrorMessage", !1),
          r = Jo(() => (t.error ? t.error : o && o.value ? o.value : ""));
        return { ...t, error: r };
      },
    }),
    eZ = { class: "feather-input-sub-text" },
    tZ = { key: 0, class: "feather-input-spacer" },
    nZ = {
      key: 1,
      class: "feather-input-hint",
      "data-ref-id": "feather-form-element-hint",
    },
    rZ = {
      key: 2,
      class: "feather-input-error",
      "data-ref-id": "feather-form-element-error",
      "aria-live": "assertive",
    };
  function oZ(t, o, r, a, l, c) {
    return AM(
      (Ht(),
      Ar(
        "div",
        eZ,
        [
          !t.hint && !t.error.length
            ? (Ht(), Ar("div", tZ, "\xA0"))
            : Eo("", !0),
          t.hint && !t.error.length
            ? (Ht(), Ar("div", nZ, gl(t.hint), 1))
            : Eo("", !0),
          t.error.length > 0
            ? (Ht(), Ar("div", rZ, gl(t.error), 1))
            : Eo("", !0),
          Ki(t.$slots, "right", {}, void 0, !0),
        ],
        512
      )),
      [[WM, !t.inline || t.hint || t.error.length]]
    );
  }
  const iZ = So(KM, [
    ["render", oZ],
    ["__scopeId", "data-v-f0789880"],
  ]);
  Fr({
    props: {
      headingText: {
        type: Function,
        default: (t) =>
          t.length && t.length === 1 ? "1 error" : `${t.length} errors`,
      },
      errorList: { type: Array, default: () => [] },
      generalError: { type: String, default: "" },
    },
    setup(t) {
      const o = Wr("featherFormErrors", Ul([])),
        r = jh(t, "errorList"),
        a = Jo(() => {
          var g;
          return (g = r.value) != null && g.length ? r.value : o.value;
        }),
        l = jh(t, "generalError"),
        c = (g) => {
          document.getElementById(g).focus();
        },
        d = (g) => g.replace(/ \*$/, ""),
        p = Ul(),
        w = (g) => `${d(g.label)} - ${g.message}`,
        V = Jo(
          () => (
            a.value.length && Xh(() => p.value.focus()), t.headingText(a.value)
          )
        );
      return (
        Rl(l, (g) => {
          g.length && Xh(() => p.value.focus());
        }),
        {
          errors: a,
          errorsHeading: V,
          heading: p,
          focusElement: c,
          mainError: l,
          getFullMessage: w,
        }
      );
    },
  });
  const aZ = (t, o, r, a, l) => {
      const c = Wr("featherForm", !1);
      if (a && c && t.value) {
        const d = Ul("");
        Nl("validationErrorMessage", d);
        const p = () => {
            if (l && Lh(l) && l.value)
              return (
                (d.value = l.value),
                { success: !1, message: l.value, inputId: t.value, label: r }
              );
            try {
              return a.validateSync(o.value), (d.value = ""), { success: !0 };
            } catch (g) {
              const R = g;
              return (
                (d.value = R.errors[0]),
                {
                  success: !1,
                  message: R.errors[0],
                  inputId: t.value,
                  label: r,
                }
              );
            }
          },
          V = {
            clear: () => {
              d.value = "";
            },
            validate: p,
          };
        return (
          l &&
            Lh(l) &&
            Rl(l, () => {
              c.runValidation();
            }),
          Rl(
            t,
            (g, R) => {
              g && c && c.register(g, V), R && c && c.deregister(R);
            },
            { immediate: !0 }
          ),
          CM(() => {
            c.deregister(t.value, !0);
          }),
          { validate: p }
        );
      }
      return { validate: () => !0 };
    },
    sZ = (t) => ({
      inherittedAttrs: Jo(() => ({
        class: t.class,
        "data-ref-id": t["data-ref-id"],
      })),
    }),
    lZ = {
      hint: { type: String },
      error: { type: String },
      inline: { type: Boolean, default: !1 },
    },
    cZ = (t) => {
      Nl("subTextOptions", t);
    },
    uZ = {
      label: { type: String, required: !0 },
      error: { type: String },
      clear: { type: String, default: "" },
      disabled: { type: Boolean, default: !1 },
      inline: { type: Boolean, default: !1 },
      hideLabel: { type: Boolean, default: !1 },
    },
    dZ = (t) => {
      Nl("wrapperOptions", t);
    },
    hZ = window.Vue.defineComponent,
    yl = window.Vue.toRef,
    fZ = window.Vue.computed,
    qh = window.Vue.resolveComponent,
    Kh = window.Vue.openBlock,
    ef = window.Vue.createElementBlock,
    tf = window.Vue.mergeProps,
    nf = window.Vue.createVNode,
    pZ = window.Vue.normalizeClass,
    rf = window.Vue.withCtx,
    mZ = window.Vue.createElementVNode,
    wZ = window.Vue.toDisplayString,
    vZ = window.Vue.createCommentVNode,
    VZ = {
      ...uZ,
      ...lZ,
      modelValue: { type: String },
      maxlength: { type: Number, required: !1, default: 0 },
      auto: { type: Boolean, default: !1 },
      schema: { type: Object, required: !1 },
      id: { type: String, required: !1 },
    },
    TZ = hZ({
      model: { prop: "modelValue", event: "update:modelValue" },
      emits: { "update:modelValue": (t) => !0 },
      props: VZ,
      setup(t, o) {
        cZ(t), dZ(t);
        const r = yl(t, "id"),
          a = fZ(() => (r.value ? r.value : Ph("feather-textarea-label"))),
          { validate: l } = aZ(
            a,
            yl(t, "modelValue"),
            t.label,
            t.schema,
            yl(t, "error")
          );
        return { inputId: a, incomingId: r, validate: l, ...sZ(o.attrs) };
      },
      data() {
        return { focused: !1, internalValue: "", initialHeight: 0 };
      },
      computed: {
        descriptionId() {
          return Ph("feather-textarea-description");
        },
        showClear() {
          return !!(this.internalValue && this.internalValue.length > 0);
        },
        contentCls() {
          const t = [];
          return (
            this.error && t.push("error"),
            this.disabled && t.push("disabled"),
            this.focused && t.push("focused"),
            t
          );
        },
        isRaised() {
          return !!(this.internalValue || this.focused);
        },
        attrs() {
          const t = { ...this.$attrs };
          return (
            delete t.placeholder,
            t["aria-invalid"] || (t["aria-invalid"] = !!this.error),
            {
              ...t,
              ...this.listeners,
              class: "",
              id: this.inputId,
              name: this.inputId,
              disabled: this.disabled,
              "aria-disabled": this.disabled,
              "aria-describedby": (t["aria-describedby"] || "")
                .split(" ")
                .concat([this.descriptionId])
                .filter(Boolean)
                .join(" "),
              value: this.internalValue,
            }
          );
        },
        listeners() {
          return {
            onFocus: (t) => {
              this.handleFocus(), this.$attrs.onFocus && this.$attrs.onFocus(t);
            },
            onBlur: (t) => {
              this.handleBlur(), this.$attrs.onBlur && this.$attrs.onBlur(t);
            },
            onInput: (t) => {
              this.adjustTextArea(), this.handleInput(t);
            },
          };
        },
        charCount() {
          return `${
            (this.internalValue && this.internalValue.length) || "0"
          } / ${this.maxlength}`;
        },
      },
      watch: {
        modelValue: {
          immediate: !0,
          handler(t) {
            this.adjustTextArea(), (this.internalValue = t);
          },
        },
        internalValue: {
          immediate: !0,
          handler(t) {
            this.$emit("update:modelValue", t);
          },
        },
      },
      methods: {
        handleClear() {
          (this.internalValue = ""), this.focus();
        },
        handleWrapperClick() {
          this.$refs.input.focus();
        },
        handleFocus() {
          this.focused = !0;
        },
        handleBlur() {
          this.validate(), (this.focused = !1);
        },
        handleInput(t) {
          (this.internalValue = t.target.value),
            this.$emit("update:modelValue", this.internalValue);
        },
        focus() {
          this.$nextTick(() => {
            this.$refs.input.focus();
          });
        },
        adjustTextArea() {
          if (!this.auto) return;
          const t = this.$refs.input;
          !t ||
            ((t.style.height = "12px"),
            (t.style.flexBasis = "40px"),
            (t.style.whiteSpace = "nowrap"),
            this.$nextTick(() => {
              const o = t.getBoundingClientRect().width;
              t.scrollWidth <= t.clientWidth &&
              o < t.parentElement.getBoundingClientRect().width
                ? (t.style.whiteSpace = "nowrap")
                : ((t.style.whiteSpace = "normal"),
                  (t.style.flexBasis = "100%")),
                this.$nextTick(() => {
                  t.style.height = `${
                    t.scrollHeight < this.initialHeight
                      ? this.initialHeight
                      : t.scrollHeight
                  }px`;
                });
            }));
        },
      },
      mounted() {
        const t = this.$refs.input;
        this.initialHeight = t.getBoundingClientRect().height;
      },
      components: { InputSubText: iZ, InputWrapper: qM },
    }),
    gZ = (t, o) => {
      const r = t.__vccOpts || t;
      for (const [a, l] of o) r[a] = l;
      return r;
    },
    UZ = ["maxlength"],
    RZ = {
      key: 0,
      class: "feather-textarea-count",
      "data-ref-id": "feather-form-element-count",
    };
  function NZ(t, o, r, a, l, c) {
    const d = qh("InputWrapper"),
      p = qh("InputSubText");
    return (
      Kh(),
      ef(
        "div",
        tf(t.inherittedAttrs, { class: "feather-textarea-container" }),
        [
          nf(
            d,
            {
              for: t.inputId,
              raised: t.isRaised,
              focused: t.focused,
              "show-clear": t.showClear,
              onWrapperClick: t.handleWrapperClick,
              onClear: t.handleClear,
              class: pZ(["feather-textarea-content", t.contentCls]),
            },
            {
              default: rf(() => [
                mZ(
                  "textarea",
                  tf(t.attrs, {
                    class: ["feather-textarea", { error: t.error }],
                    "data-ref-id": "feather-textarea-input",
                    maxlength: t.maxlength > 0 ? t.maxlength : void 0,
                    ref: "input",
                  }),
                  null,
                  16,
                  UZ
                ),
              ]),
              _: 1,
            },
            8,
            [
              "for",
              "raised",
              "focused",
              "show-clear",
              "onWrapperClick",
              "onClear",
              "class",
            ]
          ),
          nf(
            p,
            { id: t.descriptionId },
            {
              right: rf(() => [
                t.maxlength
                  ? (Kh(), ef("div", RZ, wZ(t.charCount), 1))
                  : vZ("", !0),
              ]),
              _: 1,
            },
            8,
            ["id"]
          ),
        ],
        16
      )
    );
  }
  const yZ = gZ(TZ, [
      ["render", NZ],
      ["__scopeId", "data-v-eee43a95"],
    ]),
    kZ = window.Vue.defineComponent,
    of = window.Vue.toDisplayString,
    Fo = window.Vue.createElementVNode,
    Yn = window.Vue.unref,
    Cr = window.Vue.openBlock,
    af = window.Vue.createBlock,
    Ao = window.Vue.createCommentVNode,
    sf = window.Vue.createVNode,
    ea = window.Vue.createElementBlock,
    MZ = window.Vue.normalizeClass;
  window.Vue.pushScopeId, window.Vue.popScopeId;
  const ZZ = { class: "row" },
    bZ = { class: "label" },
    JZ = { class: "action-icons" },
    EZ = { class: "icon-btn" },
    SZ = { key: 0, class: "icon-btn" },
    FZ = { key: 1, class: "icon-btn" },
    AZ = { key: 0, class: "text" },
    WZ = window.Vue.watch,
    lf = window.Vue.ref,
    CZ = kZ({
      __name: "MemoBox",
      props: {
        id: null,
        label: null,
        memo: null,
        type: null,
        situationId: null,
        boxType: null,
      },
      setup(t) {
        var w;
        const o = t,
          r = bh(),
          a = lf(!1),
          l = lf((w = o.memo) == null ? void 0 : w.body);
        WZ(o, () => {
          var V;
          (l.value = (V = o.memo) == null ? void 0 : V.body), (a.value = !1);
        });
        const c = () => {
            a.value = !a.value;
          },
          d = async () => {
            (a.value = !1),
              (await wv(o.id, o.type))
                ? (l.value = "")
                : r.showErrorMsg("Error on removing memo :(");
          },
          p = async () => {
            (a.value = !1),
              l.value &&
                l.value !== "" &&
                ((await mv(o.id, o.type, l.value)) ||
                  r.showErrorMsg("Error on saving memo :("));
          };
        return (V, g) => (
          Cr(),
          ea(
            "div",
            { class: MZ([o.boxType === "small" ? "box-small" : "box"]) },
            [
              Fo("div", ZZ, [
                Fo("div", bZ, of(t.label), 1),
                Fo("div", JZ, [
                  Fo("div", EZ, [
                    a.value
                      ? Ao("", !0)
                      : (Cr(),
                        af(
                          Yn(q),
                          {
                            key: 0,
                            icon: Yn(MM),
                            "aria-hidden": "true",
                            class: "icon edit",
                            onClick: c,
                          },
                          null,
                          8,
                          ["icon"]
                        )),
                  ]),
                  a.value
                    ? (Cr(),
                      ea("div", SZ, [
                        sf(
                          Yn(q),
                          {
                            icon: Yn(ro),
                            "aria-hidden": "true",
                            class: "icon save",
                            onClick: p,
                          },
                          null,
                          8,
                          ["icon"]
                        ),
                      ]))
                    : Ao("", !0),
                  (l.value && l.value != "") || a.value
                    ? (Cr(),
                      ea("div", FZ, [
                        sf(
                          Yn(q),
                          {
                            icon: Yn(uo),
                            "aria-hidden": "true",
                            class: "icon cancel",
                            onClick: d,
                          },
                          null,
                          8,
                          ["icon"]
                        ),
                      ]))
                    : Ao("", !0),
                ]),
              ]),
              Fo("div", null, [
                !a.value && l.value != null
                  ? (Cr(), ea("div", AZ, of(l.value), 1))
                  : Ao("", !0),
                a.value
                  ? (Cr(),
                    af(
                      Yn(yZ),
                      {
                        key: 1,
                        class: "textarea",
                        modelValue: l.value,
                        "onUpdate:modelValue":
                          g[0] || (g[0] = (R) => (l.value = R)),
                        rows: "2",
                        label: "",
                        hideLabel: "",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ))
                  : Ao("", !0),
              ]),
            ],
            2
          )
        );
      },
    }),
    D_ = "",
    ta = ge(CZ, [["__scopeId", "data-v-3f44e250"]]),
    xZ = window.Vue.defineComponent,
    Wo = window.Vue.unref,
    xr = window.Vue.createVNode,
    na = window.Vue.toDisplayString,
    en = window.Vue.createElementVNode,
    cf = window.Vue.openBlock,
    uf = window.Vue.createElementBlock,
    df = window.Vue.createCommentVNode,
    hf = window.Vue.createTextVNode,
    BZ = window.Vue.pushScopeId,
    IZ = window.Vue.popScopeId,
    ff = (t) => (BZ("data-v-cd37a1f9"), (t = t()), IZ(), t),
    DZ = { key: 0, class: "card" },
    _Z = { class: "row" },
    OZ = { class: "title" },
    QZ = { key: 0, class: "ack" },
    zZ = ["innerHTML"],
    GZ = ff(() => en("strong", null, "First Event", -1)),
    YZ = ff(() => en("strong", null, "Last Event", -1)),
    HZ = { class: "section memo-boxes" },
    pf = window.Vue.ref,
    PZ = window.Vue.watch,
    jZ = xZ({
      __name: "AlarmDetail",
      props: { alarm: null, selectAll: { type: Boolean }, situationId: null },
      emits: ["alarm-selected"],
      setup(t, { emit: o }) {
        const r = t,
          a = pf(!1),
          l = pf(r.alarm);
        PZ(r, () => {
          (l.value = r.alarm),
            (a.value = r.selectAll),
            o("alarm-selected", r.alarm.id);
        });
        const c = () => {
            o("alarm-selected", r.alarm.id);
          },
          d = async (p) => {
            const w = await Ku(p);
            w && (l.value = w);
          };
        return (p, w) => {
          var V, g, R, y, F;
          return l.value
            ? (cf(),
              uf("div", DZ, [
                en("div", null, [
                  en("div", _Z, [
                    xr(
                      Wo(Tl),
                      {
                        modelValue: a.value,
                        "onUpdate:modelValue": [
                          w[0] || (w[0] = (E) => (a.value = E)),
                          c,
                        ],
                        label: "selected",
                      },
                      null,
                      8,
                      ["modelValue"]
                    ),
                    en(
                      "div",
                      OZ,
                      na(l.value.nodeLabel) + " - " + na(l.value.id),
                      1
                    ),
                    xr(
                      Ch,
                      { severity: (V = l.value) == null ? void 0 : V.severity },
                      null,
                      8,
                      ["severity"]
                    ),
                    l.value.ackTime
                      ? (cf(),
                        uf("div", QZ, [
                          xr(
                            Wo(q),
                            {
                              icon: Wo(ro),
                              "aria-hidden": "true",
                              class: "icon-ack",
                            },
                            null,
                            8,
                            ["icon"]
                          ),
                        ]))
                      : df("", !0),
                  ]),
                  en(
                    "div",
                    { class: "description", innerHTML: l.value.description },
                    null,
                    8,
                    zZ
                  ),
                  en("div", null, [
                    GZ,
                    hf(" - " + na(Wo(Qt)(l.value.firstEventTime)), 1),
                  ]),
                  en("div", null, [
                    YZ,
                    hf(" - " + na(Wo(Qt)(l.value.lastEventTime)), 1),
                  ]),
                  en("div", HZ, [
                    xr(
                      ta,
                      {
                        id: (g = l.value) == null ? void 0 : g.id,
                        boxType: "small",
                        situationId: r.situationId,
                        label: "Sticky Memo",
                        type: "memo",
                        memo: (R = l.value) == null ? void 0 : R.stickyMemo,
                      },
                      null,
                      8,
                      ["id", "situationId", "memo"]
                    ),
                    xr(
                      ta,
                      {
                        id: (y = l.value) == null ? void 0 : y.id,
                        boxType: "small",
                        situationId: r.situationId,
                        label: "Journal Memo",
                        type: "journal",
                        memo:
                          (F = l.value) == null ? void 0 : F.reductionKeyMemo,
                      },
                      null,
                      8,
                      ["id", "situationId", "memo"]
                    ),
                  ]),
                ]),
                xr(
                  Dh,
                  {
                    alarm: l.value,
                    direction: "vertical",
                    "situation-id": r.situationId,
                    onActionClicked: d,
                  },
                  null,
                  8,
                  ["alarm", "situation-id"]
                ),
              ]))
            : df("", !0);
        };
      },
    }),
    __ = "",
    XZ = ge(jZ, [["__scopeId", "data-v-cd37a1f9"]]),
    LZ = window.Vue.defineComponent,
    Br = window.Vue.createElementVNode,
    Hn = window.Vue.createVNode,
    Pn = window.Vue.unref,
    mf = window.Vue.withCtx,
    $Z = window.Vue.renderList,
    qZ = window.Vue.Fragment,
    ra = window.Vue.openBlock,
    oa = window.Vue.createElementBlock,
    KZ = window.Vue.createCommentVNode,
    e2 = window.Vue.pushScopeId,
    t2 = window.Vue.popScopeId,
    kl = (t) => (e2("data-v-438eed08"), (t = t()), t2(), t),
    n2 = { class: "container" },
    r2 = { class: "row" },
    o2 = kl(() => Br("div", { class: "title" }, "Alarms", -1)),
    i2 = { class: "row actions" },
    a2 = kl(() => Br("span", null, "Clear", -1)),
    s2 = kl(() => Br("span", null, "Acknowledge", -1)),
    l2 = { class: "section" },
    c2 = { key: 0, class: "alarm-list" },
    wf = window.Vue.ref,
    u2 = window.Vue.watch,
    d2 = window.Vue.reactive,
    h2 = LZ({
      __name: "AlarmFilters",
      props: { alarms: null, situationId: null },
      setup(t) {
        const o = t,
          r = mr(),
          a = wf(!1),
          l = wf(["all"]),
          c = d2({ selectedAlarms: [], alarms: o.alarms });
        u2(o, () => {
          (l.value = ["all"]),
            (c.alarms = o.alarms),
            (c.selectedAlarms = []),
            (a.value = !1);
        });
        const d = (V) => {
            c.selectedAlarms.includes(V)
              ? ke.exports.remove(c.selectedAlarms, (g) => g == V)
              : c.selectedAlarms.push(V);
          },
          p = async (V) => {
            c.selectedAlarms.length &&
              (await uv(c.selectedAlarms, V),
              r.getSituation(o.situationId),
              (c.selectedAlarms = []),
              (a.value = !1));
          },
          w = (V) => {
            V.includes("all")
              ? (c.alarms = o.alarms)
              : (c.alarms = o.alarms.filter((g) => V.includes(g.severity)));
          };
        return (V, g) => (
          ra(),
          oa("div", n2, [
            Br("div", r2, [
              o2,
              Hn(th, { alarms: o.alarms, onSelectedSeverities: w }, null, 8, [
                "alarms",
              ]),
            ]),
            Br("div", i2, [
              Hn(
                Pn(Tl),
                {
                  modelValue: a.value,
                  "onUpdate:modelValue": g[0] || (g[0] = (R) => (a.value = R)),
                  label: "selected",
                },
                null,
                8,
                ["modelValue"]
              ),
              Hn(
                Pn(lt),
                {
                  class: "acction-btn",
                  onClick: g[1] || (g[1] = () => p("clear")),
                },
                {
                  default: mf(() => [
                    Hn(
                      Pn(q),
                      {
                        icon: Pn(Ih),
                        "aria-hidden": "true",
                        class: "icon clear",
                      },
                      null,
                      8,
                      ["icon"]
                    ),
                    a2,
                  ]),
                  _: 1,
                }
              ),
              Hn(
                Pn(lt),
                {
                  class: "acction-btn",
                  onClick: g[2] || (g[2] = () => p("ack")),
                },
                {
                  default: mf(() => [
                    Hn(
                      Pn(q),
                      {
                        icon: Pn(ro),
                        "aria-hidden": "true",
                        class: "icon ack",
                      },
                      null,
                      8,
                      ["icon"]
                    ),
                    s2,
                  ]),
                  _: 1,
                }
              ),
            ]),
            Br("div", l2, [
              c.alarms.length > 0
                ? (ra(),
                  oa("div", c2, [
                    (ra(!0),
                    oa(
                      qZ,
                      null,
                      $Z(
                        c.alarms,
                        (R) => (
                          ra(),
                          oa("div", { key: R.id }, [
                            Hn(
                              XZ,
                              {
                                alarm: R,
                                selectAll: a.value,
                                "situation-id": o.situationId,
                                onAlarmSelected: d,
                              },
                              null,
                              8,
                              ["alarm", "selectAll", "situation-id"]
                            ),
                          ])
                        )
                      ),
                      128
                    )),
                  ]))
                : KZ("", !0),
            ]),
          ])
        );
      },
    }),
    O_ = "",
    f2 = ge(h2, [["__scopeId", "data-v-438eed08"]]),
    p2 = "/whoami",
    m2 = async () => {
      try {
        const t = await Vn.get(p2);
        return t.status === 200 ? t.data : !1;
      } catch {
        return !1;
      }
    },
    w2 = window.Pinia.defineStore,
    Co = w2("userStore", {
      state: () => ({
        isAdmin: !1,
        userId: null,
        firstTime: !0,
        allowSave: !0,
      }),
      actions: {
        async getUserRole() {
          const t = await m2();
          return (
            t &&
              ((this.isAdmin = t.roles.includes("ROLE_ADMIN")),
              (this.userId = t.id)),
            t
          );
        },
        async getAlecInfo() {
          const t = await gv();
          t && ((this.firstTime = !1), (this.allowSave = t.agreed));
        },
        async savePermission(t) {
          if (((this.allowSave = t), !t)) {
            const o = await td(t);
            this.allowSave = o;
          }
        },
      },
    }),
    v2 = window.Vue.defineComponent,
    At = window.Vue.createVNode,
    ut = window.Vue.unref,
    Ml = window.Vue.normalizeClass,
    ia = window.Vue.toDisplayString,
    jn = window.Vue.openBlock,
    Xn = window.Vue.createElementBlock,
    aa = window.Vue.createCommentVNode,
    V2 = window.Vue.withCtx,
    Wt = window.Vue.createElementVNode,
    T2 = window.Vue.createTextVNode,
    g2 = window.Vue.Fragment,
    U2 = window.Vue.pushScopeId,
    R2 = window.Vue.popScopeId,
    N2 = (t) => (U2("data-v-664473b6"), (t = t()), R2(), t),
    y2 = { class: "section" },
    k2 = { class: "action-section" },
    M2 = { key: 0, class: "btn-row" },
    Z2 = { key: 0 },
    b2 = { key: 1 },
    J2 = { key: 0, class: "situation-detail" },
    E2 = { class: "situation-info" },
    S2 = { class: "id" },
    F2 = { key: 0 },
    A2 = ["innerHTML"],
    W2 = N2(() => Wt("p", null, null, -1)),
    C2 = { class: "boxes" },
    x2 = { class: "parameters" },
    B2 = { class: "section memo-boxes" },
    I2 = { key: 0 },
    vf = window.Vue.ref,
    D2 = window.Vue.watch,
    _2 = v2({
      __name: "SituationDetailTab",
      props: { situationInfo: null },
      setup(t) {
        const o = t,
          r = mr(),
          a = at.REJECTED,
          l = Co(),
          c = vf(o.situationInfo.status),
          d = vf(o.situationInfo);
        D2(o, () => {
          (c.value = o.situationInfo.status || ""), (d.value = o.situationInfo);
        });
        const p = (w) => {
          var V;
          nd((V = o.situationInfo) == null ? void 0 : V.id, w.toLowerCase()),
            (c.value = w),
            r.getSituation(o.situationInfo.id);
        };
        return (w, V) => {
          var g, R, y, F, E, I, C, A, O, _, H, k;
          return (
            jn(),
            Xn(
              g2,
              null,
              [
                Wt("div", y2, [
                  Wt("div", k2, [
                    At(
                      Dh,
                      {
                        alarm: d.value,
                        direction: "horizontal",
                        showClear: "",
                        isSituation: "",
                        "situation-id": o.situationInfo.id,
                      },
                      null,
                      8,
                      ["alarm", "situation-id"]
                    ),
                    ut(l).allowSave
                      ? (jn(),
                        Xn("div", M2, [
                          At(
                            ut(lt),
                            {
                              class: Ml([
                                "btn",
                                { rejected: c.value == ut(a) },
                              ]),
                              onClick: V[0] || (V[0] = () => p(ut(a))),
                            },
                            {
                              default: V2(() => [
                                At(
                                  ut(q),
                                  {
                                    icon: ut(ad),
                                    "aria-hidden": "true",
                                    class: Ml([
                                      "icon reject",
                                      { rejected: c.value == ut(a) },
                                    ]),
                                  },
                                  null,
                                  8,
                                  ["icon", "class"]
                                ),
                                c.value == ut(a)
                                  ? (jn(), Xn("span", Z2, ia(ut(a)), 1))
                                  : (jn(), Xn("span", b2, " REJECT")),
                              ]),
                              _: 1,
                            },
                            8,
                            ["class"]
                          ),
                        ]))
                      : aa("", !0),
                  ]),
                  d.value
                    ? (jn(),
                      Xn("div", J2, [
                        Wt(
                          "div",
                          {
                            class: Ml([
                              "severity-line",
                              [
                                `${
                                  (R =
                                    (g = d.value) == null
                                      ? void 0
                                      : g.severity) == null
                                    ? void 0
                                    : R.toLowerCase()
                                }-bg dark`,
                              ],
                            ]),
                          },
                          null,
                          2
                        ),
                        Wt("div", E2, [
                          Wt("div", S2, [
                            Wt("div", null, [
                              T2(
                                " Situation - " +
                                  ia((y = d.value) == null ? void 0 : y.id) +
                                  " - affecting " +
                                  ia(
                                    ut(ke.exports.size)(
                                      ut(ke.exports.groupBy)(
                                        (F = d.value) == null
                                          ? void 0
                                          : F.alarms,
                                        "nodeId"
                                      )
                                    )
                                  ) +
                                  " node ",
                                1
                              ),
                              d.value.alarms
                                ? (jn(),
                                  Xn(
                                    "span",
                                    F2,
                                    "having " +
                                      ia(d.value.alarms.length) +
                                      " alarms ",
                                    1
                                  ))
                                : aa("", !0),
                            ]),
                            At(
                              Ch,
                              {
                                severity:
                                  (E = d.value) == null ? void 0 : E.severity,
                              },
                              null,
                              8,
                              ["severity"]
                            ),
                          ]),
                          Wt(
                            "span",
                            { innerHTML: d.value.description },
                            null,
                            8,
                            A2
                          ),
                          W2,
                          Wt("div", C2, [
                            At(
                              sl,
                              {
                                label: "First Event",
                                info: ut(Qt)(d.value.firstEventTime),
                              },
                              null,
                              8,
                              ["info"]
                            ),
                            At(
                              sl,
                              {
                                label: "Last Event",
                                info: ut(Qt)(d.value.lastEventTime),
                              },
                              null,
                              8,
                              ["info"]
                            ),
                            At(
                              sl,
                              {
                                label: "Reduction Key",
                                info: d.value.reductionKey,
                              },
                              null,
                              8,
                              ["info"]
                            ),
                          ]),
                        ]),
                        Wt("div", x2, [
                          At(
                            yk,
                            {
                              alarms: (I = d.value) == null ? void 0 : I.alarms,
                              size: "large",
                            },
                            null,
                            8,
                            ["alarms"]
                          ),
                        ]),
                      ]))
                    : aa("", !0),
                  Wt("div", B2, [
                    At(
                      ta,
                      {
                        id: (C = d.value) == null ? void 0 : C.id,
                        situationId: (A = d.value) == null ? void 0 : A.id,
                        label: "Sticky Memo",
                        type: "memo",
                        memo: (O = d.value) == null ? void 0 : O.stickyMemo,
                      },
                      null,
                      8,
                      ["id", "situationId", "memo"]
                    ),
                    At(
                      ta,
                      {
                        id: (_ = d.value) == null ? void 0 : _.id,
                        situationId: (H = d.value) == null ? void 0 : H.id,
                        label: "Journal Memo",
                        type: "journal",
                        memo:
                          (k = d.value) == null ? void 0 : k.reductionKeyMemo,
                      },
                      null,
                      8,
                      ["id", "situationId", "memo"]
                    ),
                  ]),
                ]),
                d.value.alarms && d.value.alarms.length
                  ? (jn(),
                    Xn("div", I2, [
                      At(
                        f2,
                        { alarms: d.value.alarms, "situation-id": d.value.id },
                        null,
                        8,
                        ["alarms", "situation-id"]
                      ),
                    ]))
                  : aa("", !0),
              ],
              64
            )
          );
        };
      },
    }),
    Q_ = "",
    O2 = ge(_2, [["__scopeId", "data-v-664473b6"]]),
    z_ = "";
  var Q2 = Object.defineProperty,
    z2 = Object.defineProperties,
    G2 = Object.getOwnPropertyDescriptors,
    Vf = Object.getOwnPropertySymbols,
    Y2 = Object.prototype.hasOwnProperty,
    H2 = Object.prototype.propertyIsEnumerable,
    Tf = (t, o, r) =>
      o in t
        ? Q2(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    Zl = (t, o) => {
      for (var r in o || (o = {})) Y2.call(o, r) && Tf(t, r, o[r]);
      if (Vf) for (var r of Vf(o)) H2.call(o, r) && Tf(t, r, o[r]);
      return t;
    },
    P2 = (t, o) => z2(t, G2(o));
  const gf = window.Vue.defineComponent,
    Ln = window.Vue.resolveComponent,
    sa = window.Vue.openBlock,
    Uf = window.Vue.createBlock,
    la = window.Vue.mergeProps,
    $n = window.Vue.withCtx,
    Rf = window.Vue.createElementBlock,
    j2 = window.Vue.Fragment,
    X2 = window.Vue.renderList,
    L2 = window.Vue.createTextVNode,
    $2 = window.Vue.toDisplayString,
    q2 = window.Vue.computed,
    Nf = window.Vue.toRef,
    xo = window.Vue.createVNode,
    yf = window.Vue.toHandlers,
    K2 = window.Vue.renderSlot,
    eb = window.Vue.normalizeClass,
    tb = window.Vue.createElementVNode;
  var kf = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const nb = gf({
    inheritAttrs: !0,
    emits: ["select"],
    props: {
      label: { type: String, required: !0 },
      options: { type: Array, default: () => [] },
      textProp: { type: String, default: "_text" },
      activeIndex: { type: Number, required: !0 },
    },
    computed: {
      activeId() {
        return le("feather-select-active");
      },
      listAttrs() {
        return {
          tabindex: -1,
          role: "listbox",
          "aria-label": this.label,
          "aria-activedescendant": this.activeId,
        };
      },
    },
    watch: {
      activeIndex(t) {
        t > -1 &&
          this.$nextTick(() => {
            const o = Array.prototype.slice.call(
              this.$el.querySelectorAll("li")
            )[t];
            No(o, this.$refs.list.$el);
          });
      },
    },
    methods: {
      isSelected(t) {
        return this.activeIndex === t;
      },
      getId(t) {
        return t === this.activeIndex ? this.activeId : null;
      },
      select(t) {
        this.$emit("select", t);
      },
    },
    components: { FeatherList: Xs, FeatherListItem: yo },
  });
  function rb(t, o, r, a, l, c) {
    const d = Ln("FeatherListItem"),
      p = Ln("FeatherList");
    return (
      sa(),
      Uf(
        p,
        la(t.listAttrs, { ref: "list", class: "feather-select-options-list" }),
        {
          default: $n(() => [
            (sa(!0),
            Rf(
              j2,
              null,
              X2(
                t.options,
                (w, V) => (
                  sa(),
                  Uf(
                    d,
                    {
                      key: w[t.textProp],
                      "as-li": "",
                      id: t.getId(V),
                      role: "option",
                      tabindex: "-1",
                      class: "result-item",
                      "aria-selected": t.isSelected(V),
                      selected: t.isSelected(V),
                      onClick: (g) => t.select(w),
                    },
                    { default: $n(() => [L2($2(w[t.textProp]), 1)]), _: 2 },
                    1032,
                    ["id", "aria-selected", "selected", "onClick"]
                  )
                )
              ),
              128
            )),
          ]),
          _: 1,
        },
        16
      )
    );
  }
  var ob = kf(nb, [
    ["render", rb],
    ["__scopeId", "data-v-eae820da"],
  ]);
  const ib = P2(Zl(Zl({}, Dd), Ai), {
      modelValue: { type: Object, required: !1 },
      textProp: { type: String, default: "_text" },
      options: { type: Array, default: () => [] },
      schema: { type: Object, required: !1 },
    }),
    ab = gf({
      model: { prop: "modelValue", event: "update:modelValue" },
      emits: { "update:modelValue": (t) => !0 },
      props: ib,
      setup(t, o) {
        Wi(t), _d(t);
        const r = q2(() => le("feather-select-input")),
          { validate: a } = Si(
            r,
            Nf(t, "modelValue"),
            t.label,
            t.schema,
            Nf(t, "error")
          );
        return Zl({ inputId: r, validate: a }, Fi(o.attrs));
      },
      data() {
        return {
          hasFocus: !1,
          showMenu: !1,
          charsSoFar: "",
          internalValue: this.modelValue,
          delayTimeout: -1,
        };
      },
      computed: {
        showClear() {
          return !!this.modelValue;
        },
        subTextId() {
          return le("feather-select-description");
        },
        inputAttrs() {
          return {
            id: this.inputId,
            "aria-haspopup": "listbox",
            "aria-invalid": this.$attrs["aria-invalid"] || !!this.error,
            value: this.valueText,
            readonly: !0,
            disabled: this.disabled,
            "aria-disabled": this.disabled,
            "aria-describedby": (this.$attrs["aria-describedby"] || "")
              .split(" ")
              .concat([this.subTextId])
              .filter(Boolean)
              .join(" "),
          };
        },
        inputListeners() {
          return {
            focus: this.handleInputFocus,
            blur: this.handleInputBlur,
            keydown: this.handleKeyDown,
          };
        },
        raised() {
          return !!this.internalValue || this.hasFocus;
        },
        valueText() {
          return this.internalValue && this.internalValue[this.textProp]
            ? this.internalValue[this.textProp]
            : "";
        },
        activeIndex() {
          if (this.internalValue && this.internalValue[this.textProp]) {
            const t = this.internalValue,
              o = this.options.filter(
                (r) => r[this.textProp] === t[this.textProp]
              );
            if (o && o.length) return this.options.indexOf(o[0]);
          }
          return -1;
        },
        icon: () => Hs,
      },
      watch: {
        showMenu(t) {
          t
            ? (this.internalValue || this.select(this.options[0]),
              this.$nextTick(() => {
                this.$refs.input.focus();
              }))
            : this.emitSelection();
        },
        modelValue(t) {
          this.internalValue = t;
        },
      },
      methods: {
        closeMenu() {
          (this.showMenu = !1),
            this.$nextTick(() => {
              this.$refs.input.focus();
            });
        },
        handleClear() {
          this.handleSelect(void 0), this.emitSelection();
        },
        handleInputFocus() {
          this.disabled || this.hasFocus || (this.hasFocus = !0);
        },
        handleInputBlur() {
          this.hasFocus &&
            !this.showMenu &&
            ((this.hasFocus = !1), this.validate());
        },
        handleTriggerClick() {
          this.disabled || ((this.showMenu = !0), (this.hasFocus = !0));
        },
        handleOutsideClick() {
          (this.showMenu = !1), (this.hasFocus = !1);
        },
        handleSelect(t) {
          this.select(t), (this.showMenu = !1), this.$refs.input.focus();
        },
        select(t) {
          this.internalValue = t;
        },
        emitSelection() {
          this.$emit("update:modelValue", this.internalValue);
        },
        handleKeyDown(t) {
          if (t.keyCode === K.ENTER)
            t.preventDefault(),
              (this.showMenu = !this.showMenu),
              this.showMenu ||
                this.$nextTick(() => {
                  this.$refs.input.focus();
                });
          else if (t.keyCode === K.ESCAPE)
            this.closeMenu(), t.stopPropagation();
          else if (t.keyCode === K.DOWN)
            t.preventDefault(),
              this.activeIndex + 1 < this.options.length &&
                this.select(this.options[this.activeIndex + 1]),
              (this.showMenu = !0);
          else if (t.keyCode === K.UP)
            t.preventDefault(),
              this.activeIndex - 1 >= 0 &&
                this.select(this.options[this.activeIndex - 1]),
              (this.showMenu = !0);
          else if (t.keyCode === K.HOME)
            t.preventDefault(),
              this.select(this.options[0]),
              (this.showMenu = !0);
          else if (t.keyCode === K.END)
            t.preventDefault(),
              this.select(this.options[this.options.length - 1]),
              (this.showMenu = !0);
          else if (this.showMenu) {
            const o = String.fromCharCode(t.keyCode);
            (this.charsSoFar += o), this.searchAfterDelay();
          }
        },
        searchAfterDelay() {
          co(this.delayTimeout),
            (this.delayTimeout = lo(() => {
              const t = this.options.filter(
                (o) =>
                  o[this.textProp] &&
                  o[this.textProp]
                    .toLowerCase()
                    .indexOf(this.charsSoFar.toLowerCase()) === 0
              );
              t && t.length && this.select(t[0]), (this.charsSoFar = "");
            }, 250));
        },
      },
      components: {
        InputWrapper: Id,
        InputSubText: Ei,
        FeatherMenu: hh,
        List: ob,
        FeatherIcon: q,
      },
    });
  function sb(t, o, r, a, l, c) {
    const d = Ln("FeatherIcon"),
      p = Ln("InputWrapper"),
      w = Ln("List"),
      V = Ln("FeatherMenu"),
      g = Ln("InputSubText");
    return (
      sa(),
      Rf(
        "div",
        la(t.inherittedAttrs, { class: "feather-select-container" }),
        [
          xo(
            V,
            {
              "no-expand": "",
              fill: "",
              open: t.showMenu,
              onOutsideClick: t.handleOutsideClick,
              onTriggerClick: t.handleTriggerClick,
              class: "feather-select-menu-container",
              "data-ref-id": "feather-select-menu-container",
            },
            {
              trigger: $n((R) => [
                xo(
                  p,
                  la(
                    {
                      for: t.inputId,
                      raised: t.raised,
                      focused: t.hasFocus,
                      "show-clear": t.showClear,
                      onClear: t.handleClear,
                    },
                    R.attrs,
                    yf(R.on),
                    {
                      class: [
                        "feather-select-wrapper",
                        { focused: t.hasFocus },
                      ],
                    }
                  ),
                  {
                    pre: $n(() => [K2(t.$slots, "pre", {}, void 0, !0)]),
                    post: $n(() => [
                      xo(
                        d,
                        {
                          class: eb([
                            "feather-select-icon",
                            { rotate: t.showMenu },
                          ]),
                          icon: t.icon,
                        },
                        null,
                        8,
                        ["class", "icon"]
                      ),
                    ]),
                    default: $n(() => [
                      tb(
                        "input",
                        la(
                          t.inputAttrs,
                          {
                            class: "feather-select-input",
                            "data-ref-id": "feather-select-input",
                          },
                          yf(t.inputListeners),
                          { ref: "input" }
                        ),
                        null,
                        16
                      ),
                    ]),
                    _: 2,
                  },
                  1040,
                  ["for", "raised", "focused", "show-clear", "onClear", "class"]
                ),
              ]),
              default: $n(() => [
                xo(
                  w,
                  {
                    ref: "list",
                    "data-ref-id": "feather-select-list",
                    label: t.label,
                    options: t.options,
                    "text-prop": t.textProp,
                    "active-index": t.activeIndex,
                    onSelect: t.handleSelect,
                    onKeydown: t.handleKeyDown,
                  },
                  null,
                  8,
                  [
                    "label",
                    "options",
                    "text-prop",
                    "active-index",
                    "onSelect",
                    "onKeydown",
                  ]
                ),
              ]),
              _: 3,
            },
            8,
            ["open", "onOutsideClick", "onTriggerClick"]
          ),
          xo(g, { id: t.subTextId }, null, 8, ["id"]),
        ],
        16
      )
    );
  }
  var lb = kf(ab, [
    ["render", sb],
    ["__scopeId", "data-v-ecb32d90"],
  ]);
  const cb = window.Vue.openBlock,
    ub = window.Vue.createElementBlock,
    Mf = window.Vue.createElementVNode;
  var db = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const hb = {},
    fb = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    pb = [
      Mf(
        "path",
        {
          d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z",
        },
        null,
        -1
      ),
      Mf(
        "path",
        {
          d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
        },
        null,
        -1
      ),
    ];
  function mb(t, o) {
    return cb(), ub("svg", fb, pb);
  }
  var wb = db(hb, [["render", mb]]);
  const P_ = "",
    ca = window.Vue.openBlock,
    bl = window.Vue.createElementBlock,
    Zf = window.Vue.createElementVNode,
    vb = window.Vue.defineComponent,
    qn = window.Vue.ref,
    Vb = window.Vue.provide,
    bf = window.Vue.computed,
    Tb = window.Vue.onUnmounted,
    Jf = window.Vue.toRef,
    gb = window.Vue.resolveComponent,
    Ub = window.Vue.Fragment,
    Rb = window.Vue.createBlock,
    Nb = window.Vue.Teleport,
    Ef = window.Vue.createVNode,
    yb = window.Vue.Transition,
    kb = window.Vue.withCtx,
    Mb = window.Vue.normalizeClass,
    Zb = window.Vue.normalizeStyle,
    bb = window.Vue.toDisplayString,
    Jb = window.Vue.createCommentVNode,
    Eb = window.Vue.renderSlot,
    Jl = window.Vue.nextTick;
  var Sf = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const Sb = {},
    Fb = {
      width: "32",
      height: "9",
      viewBox: "0 0 32 9",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Ab = [
      Zf(
        "path",
        {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
          fill: "var(--feather-high-visibility-on-surface)",
        },
        null,
        -1
      ),
    ];
  function Wb(t, o) {
    return ca(), bl("svg", Fb, Ab);
  }
  var Cb = Sf(Sb, [["render", Wb]]),
    xe = ((t) => (
      (t.top = "top"),
      (t.bottom = "bottom"),
      (t.left = "left"),
      (t.right = "right"),
      t
    ))(xe || {}),
    tn = ((t) => (
      (t.center = "center"), (t.left = "left"), (t.right = "right"), t
    ))(tn || {});
  const xb = (t, o, r, a = 9) => {
      const l = window.innerHeight - t.bottom,
        c = window.innerWidth - t.right,
        d = [];
      t.top >= o.height + a && d.push(xe.top),
        l >= o.height + a && d.push(xe.bottom);
      const p = [];
      c >= o.width + a && p.push(xe.right),
        t.left >= o.width + a && p.push(xe.left);
      let w = [...p, ...d];
      return (
        (r === xe.top || r === xe.bottom) && (w = [...d, ...p]),
        w.indexOf(r) > -1 ? r : w.length ? w[0] : r
      );
    },
    Bb = (t, o, r, a, l = 28) => {
      if (t === xe.left || t === xe.right) return tn.center;
      const c = o.left + o.width / 2,
        d = window.innerWidth - o.right,
        p = [],
        w = c,
        V = d + o.width / 2,
        g = r.width - l,
        R = r.width / 2;
      return (
        w >= R && V >= R && p.push(tn.center),
        V >= g && p.push(tn.left),
        w >= g && p.push(tn.right),
        p.indexOf(a) > -1 ? a : p.length ? p[0] : a
      );
    },
    Ib = vb({
      props: {
        title: { type: String, required: !0 },
        placement: { type: String, default: () => xe.top },
        pointerAlignment: { type: String, default: () => tn.center },
        enterDelay: { type: Number, default: 400 },
        exitDelay: { type: Number, default: 400 },
      },
      setup(t) {
        const o = qn(!1),
          r = qn(!1),
          a = le("feather-tooltip-trigger"),
          l = le("feather-tooltip"),
          c = "data-feather-tooltip";
        Vb("feather-has-tooltip", !0);
        let d = 0;
        const p = () => {
            co(d), o.value || (d = lo(I, t.enterDelay));
          },
          w = () => {
            co(d), (d = lo(C, t.exitDelay));
          },
          V = (ve) => {
            ve.keyCode === K.ESCAPE && (ve.preventDefault(), C(!0));
          },
          g = bf(() => ({ [c]: a, "aria-describedby": l })),
          R = { mouseenter: p, mouseleave: w, focus: p, blur: w, keydown: V },
          y = qn(document),
          F = ah(y, () => C(!0));
        Tb(() => C(!0));
        const E = () => document.getElementById(l),
          I = () => {
            (r.value = !1),
              (o.value = !0),
              Jl(() => {
                const ve = E();
                he(ve),
                  (o.value = !1),
                  Jl(() => {
                    (r.value = !0), (o.value = !0), (F.value = !0);
                  });
              });
          },
          C = (ve = !1) => {
            (W.value = ""),
              (k.value = ""),
              (x.value = ""),
              (z.value = ""),
              (o.value = !1),
              ve && (r.value = !1),
              (F.value = !1);
          },
          A = Jf(t, "placement"),
          O = Jf(t, "pointerAlignment"),
          _ = 8,
          H = 24,
          k = qn(""),
          W = qn(""),
          x = qn(""),
          z = qn(""),
          de = bf(() => (z.value ? "p-" + z.value : !1)),
          he = (ve) => {
            const Ve = document.querySelector(`[${c}=${a}]`);
            if (!Ve) {
              console.log("trigger not found");
              return;
            }
            Jl(() => {
              const Re = Ve.getBoundingClientRect(),
                Ze = ve.getBoundingClientRect(),
                ce = xb(Re, Ze, A.value, _),
                Be = Bb(ce, Re, Ze, O.value, H);
              (x.value = Be.toString()), (z.value = ce.toString());
              let Ie = 0,
                Pe = 0;
              if (
                ((ce === xe.left || ce === xe.right) &&
                  ((Ie = Re.top + Re.height / 2 - Ze.height / 2),
                  ce === xe.left && (Pe = Re.left - Ze.width - _),
                  ce === xe.right && (Pe = Re.right)),
                ce === xe.top || ce === xe.bottom)
              ) {
                (Ie = Re.top - Ze.height - _),
                  ce === xe.bottom && (Ie = Re.bottom);
                const Yo = Re.left + Re.width / 2;
                switch (Be) {
                  case tn.center:
                    Pe = Yo - Ze.width / 2;
                    break;
                  case tn.left:
                    Pe = Yo - H;
                    break;
                  case tn.right:
                    Pe = Yo - Ze.width + H;
                    break;
                }
              }
              (k.value = Ie.toString() + "px"),
                (W.value = Pe.toString() + "px");
            });
          };
        return {
          attrs: g,
          listeners: R,
          show: o,
          animate: r,
          alignmentClass: x,
          placementClass: de,
          top: k,
          left: W,
          tooltipID: l,
        };
      },
      components: { Pointer: Cb },
    }),
    Db = ["id"];
  function _b(t, o, r, a, l, c) {
    const d = gb("Pointer");
    return (
      ca(),
      bl(
        Ub,
        null,
        [
          (ca(),
          Rb(Nb, { to: "body" }, [
            Ef(
              yb,
              { css: t.animate },
              {
                default: kb(() => [
                  t.show
                    ? (ca(),
                      bl(
                        "div",
                        {
                          key: 0,
                          class: Mb([
                            "feather-tooltip-container",
                            [t.alignmentClass, t.placementClass],
                          ]),
                          ref: "tooltip",
                          style: Zb({ left: t.left, top: t.top }),
                        },
                        [
                          Zf(
                            "div",
                            {
                              class: "tooltip",
                              role: "tooltip",
                              id: t.tooltipID,
                            },
                            bb(t.title),
                            9,
                            Db
                          ),
                          Ef(d, { class: "tooltip-pointer" }),
                        ],
                        6
                      ))
                    : Jb("", !0),
                ]),
                _: 1,
              },
              8,
              ["css"]
            ),
          ])),
          Eb(
            t.$slots,
            "default",
            { attrs: t.attrs, on: t.listeners },
            void 0,
            !0
          ),
        ],
        64
      )
    );
  }
  var Ff = Sf(Ib, [
    ["render", _b],
    ["__scopeId", "data-v-3da6b22e"],
  ]);
  const Ob = window.Vue.defineComponent,
    El = window.Vue.normalizeStyle,
    Sl = window.Vue.createElementVNode,
    Bo = window.Vue.unref,
    Af = window.Vue.toHandlers,
    Wf = window.Vue.mergeProps,
    Cf = window.Vue.withCtx,
    xf = window.Vue.createVNode,
    Qb = window.Vue.renderList,
    zb = window.Vue.Fragment,
    Io = window.Vue.openBlock,
    Do = window.Vue.createElementBlock,
    Bf = window.Vue.normalizeClass,
    If = window.Vue.createCommentVNode;
  window.Vue.pushScopeId, window.Vue.popScopeId;
  const Gb = { class: "row" },
    Yb = Ob({
      __name: "Timeline",
      props: { alarm: null, proportion: null, minStart: null, events: null },
      setup(t) {
        const o = t,
          r = new Date().getTime(),
          a = (c, d) => (c ? (Number(d) - Number(c)) * o.proportion : 0),
          l = (c) => (c ? (Number(c) - Number(o.minStart)) * o.proportion : 0);
        return (c, d) => (
          Io(),
          Do("div", Gb, [
            Sl(
              "div",
              {
                class: "line-gray",
                style: El({ width: l(o.events[0].createTime) + "px" }),
              },
              null,
              4
            ),
            xf(
              Bo(Ff),
              { title: Bo(Qt)(t.alarm.firstEventTime) },
              {
                default: Cf(({ attrs: p, on: w }) => [
                  Sl(
                    "div",
                    Wf({ class: "circle" }, p, Af(w), {
                      class: [`${t.alarm.severity.toLowerCase()}-bg dark`],
                    }),
                    null,
                    16
                  ),
                ]),
                _: 1,
              },
              8,
              ["title"]
            ),
            (Io(!0),
            Do(
              zb,
              null,
              Qb(
                o.events,
                (p, w) => (
                  Io(),
                  Do("div", { class: "event-trim", key: p.id }, [
                    o.events[w + 1]
                      ? (Io(),
                        Do(
                          "div",
                          {
                            key: 0,
                            class: Bf([
                              "line",
                              [`${p.severity.toLowerCase()}-bg dark`],
                            ]),
                            style: El({
                              width:
                                a(p.createTime, o.events[w + 1].createTime) +
                                "px",
                            }),
                          },
                          null,
                          6
                        ))
                      : If("", !0),
                    xf(
                      Bo(Ff),
                      { title: Bo(Qt)(t.alarm.firstEventTime) },
                      {
                        default: Cf(({ attrs: V, on: g }) => [
                          o.events[w + 1]
                            ? (Io(),
                              Do(
                                "div",
                                Wf({ key: 0 }, V, Af(g), {
                                  class: [
                                    "event",
                                    [`${p.severity.toLowerCase()}-bg dark`],
                                  ],
                                }),
                                null,
                                16
                              ))
                            : If("", !0),
                        ]),
                        _: 2,
                      },
                      1032,
                      ["title"]
                    ),
                  ])
                )
              ),
              128
            )),
            Sl(
              "div",
              {
                class: Bf([
                  "line",
                  [
                    `${t.events[
                      t.events.length - 1
                    ].severity.toLowerCase()}-bg dark`,
                  ],
                ]),
                style: El({
                  width:
                    a(t.events[t.events.length - 1].createTime, Bo(r)) + "px",
                }),
              },
              null,
              6
            ),
          ])
        );
      },
    }),
    L_ = "",
    Hb = ge(Yb, [["__scopeId", "data-v-3341d12d"]]),
    Pb = window.Vue.openBlock,
    jb = window.Vue.createElementBlock,
    Df = window.Vue.createElementVNode;
  var Xb = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const Lb = {},
    $b = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    qb = [
      Df(
        "path",
        {
          d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
        },
        null,
        -1
      ),
      Df("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1),
    ];
  function Kb(t, o) {
    return Pb(), jb("svg", $b, qb);
  }
  var eJ = Xb(Lb, [["render", Kb]]);
  const tJ = window.Vue.defineComponent,
    Fl = window.Vue.createElementVNode,
    nJ = window.Vue.renderList,
    _f = window.Vue.Fragment,
    Al = window.Vue.openBlock,
    Wl = window.Vue.createElementBlock,
    rJ = window.Vue.normalizeClass,
    oJ = window.Vue.unref,
    Of = window.Vue.toDisplayString,
    iJ = window.Vue.pushScopeId,
    aJ = window.Vue.popScopeId,
    sJ = ((t) => (iJ("data-v-2e087f7b"), (t = t()), aJ(), t))(() =>
      Fl("strong", null, "Events:", -1)
    ),
    lJ = tJ({
      __name: "EventsList",
      props: { events: null },
      setup(t) {
        const o = t;
        return (r, a) => (
          Al(),
          Wl(
            _f,
            null,
            [
              sJ,
              (Al(!0),
              Wl(
                _f,
                null,
                nJ(
                  o.events,
                  (l) => (
                    Al(),
                    Wl("div", { class: "event-description", key: l.id }, [
                      Fl(
                        "div",
                        {
                          class: rJ([
                            "mark",
                            [`${l.severity.toLowerCase()}-bg dark`],
                          ]),
                        },
                        null,
                        2
                      ),
                      Fl(
                        "div",
                        null,
                        Of(oJ(Qt)(l.createTime)) + " - " + Of(l.source),
                        1
                      ),
                    ])
                  )
                ),
                128
              )),
            ],
            64
          )
        );
      },
    }),
    eO = "",
    cJ = ge(lJ, [["__scopeId", "data-v-2e087f7b"]]),
    uJ = window.Vue.defineComponent,
    dJ = window.Vue.normalizeClass,
    dt = window.Vue.createElementVNode,
    Ir = window.Vue.toDisplayString,
    et = window.Vue.unref,
    Dr = window.Vue.createVNode,
    Qf = window.Vue.createTextVNode,
    hJ = window.Vue.renderList,
    zf = window.Vue.Fragment,
    nn = window.Vue.openBlock,
    Kn = window.Vue.createElementBlock,
    Gf = window.Vue.createBlock,
    ua = window.Vue.createCommentVNode,
    fJ = window.Vue.normalizeStyle,
    pJ = window.Vue.pushScopeId,
    mJ = window.Vue.popScopeId,
    wJ = (t) => (pJ("data-v-01717d0d"), (t = t()), mJ(), t),
    vJ = { class: "section detail" },
    VJ = { class: "id" },
    TJ = { key: 0, class: "section" },
    gJ = wJ(() => dt("div", { class: "id" }, "Alarms", -1)),
    UJ = { class: "action-btns" },
    RJ = { class: "zoom" },
    NJ = Qf(" Zoom "),
    yJ = { class: "times" },
    kJ = { key: 0, class: "timeline-container" },
    MJ = { class: "alarm-id" },
    ZJ = { key: 0, class: "panel" },
    kn = window.Vue.ref,
    bJ = window.Vue.watch,
    JJ = uJ({
      __name: "SituationMetricsTab",
      props: { situation: null, width: null },
      setup(t) {
        var H, k;
        const o = t,
          r = mr(),
          a = kn(0),
          l = [
            { id: 1, name: "Creation Time" },
            { id: 2, name: "Severity" },
            { id: 3, name: "Duration" },
          ],
          c = kn(l[0]),
          d = kn(o.width),
          p = kn(o.width),
          w = kn(new Date().getTime()),
          V = () => {
            var W, x;
            if (!o.situation.events) {
              const z =
                (x = (W = o.situation) == null ? void 0 : W.alarms) == null
                  ? void 0
                  : x.map((de) => de.id);
              r.getEvents(o.situation.id, z);
            }
          };
        V();
        const g = () => (
            (w.value = new Date().getTime()),
            d.value / (Number(w.value) - Number(y.value))
          ),
          R = kn(o.situation.alarms),
          y = kn(
            ((k = ke.exports.minBy(
              (H = o.situation) == null ? void 0 : H.alarms,
              "firstEventTime"
            )) == null
              ? void 0
              : k.firstEventTime) || new Date().getTime()
          ),
          F = kn(g());
        bJ(o, () => {
          var W, x;
          (y.value =
            ((x = ke.exports.minBy(
              (W = o.situation) == null ? void 0 : W.alarms,
              "firstEventTime"
            )) == null
              ? void 0
              : x.firstEventTime) || new Date().getTime()),
            V(),
            (d.value = p.value),
            (F.value = g()),
            (R.value = o.situation.alarms),
            (c.value = l[0]);
        });
        const E = (W) => {
            if (
              ((W == null ? void 0 : W.id) === 1 &&
                (R.value = o.situation.alarms),
              (W == null ? void 0 : W.id) === 2)
            ) {
              const x = ke.exports.groupBy(R.value, "severity"),
                z = [
                  ...(x.CRITICAL || []),
                  ...(x.MAJOR || []),
                  ...(x.MINOR || []),
                  ...(x.WARNING || []),
                  ...(x.NORMAL || []),
                  ...(x.CLEARED || []),
                  ...(x.INDETERMINATE || []),
                ];
              R.value = z.filter((de) => de);
            }
            if ((W == null ? void 0 : W.id) === 3) {
              const x = ke.exports.reverse(
                ke.exports.sortBy(
                  o.situation.alarms,
                  (z) => Number(z.lastEventTime) - Number(z.firstEventTime)
                )
              );
              R.value = x;
            }
          },
          I = () => {
            (d.value += 100), (F.value = g());
          },
          C = () => {
            (d.value -= 100), (F.value = g());
          },
          A = () => {
            (d.value = p.value), (F.value = g());
          },
          O = (W) => {
            a.value = W;
          },
          _ = () => {
            a.value = 0;
          };
        return (W, x) => {
          var z, de;
          return (
            nn(),
            Kn(
              zf,
              null,
              [
                dt("div", vJ, [
                  dt(
                    "div",
                    {
                      class: dJ([
                        "severity-line",
                        [
                          `${
                            (de =
                              (z = o.situation) == null
                                ? void 0
                                : z.severity) == null
                              ? void 0
                              : de.toLowerCase()
                          }-bg dark`,
                        ],
                      ]),
                    },
                    null,
                    2
                  ),
                  dt("div", null, [
                    dt("div", VJ, "Situation " + Ir(o.situation.id), 1),
                    dt(
                      "div",
                      null,
                      " Duration: " + Ir(et(l0)(w.value, new Date(y.value))),
                      1
                    ),
                  ]),
                ]),
                R.value && R.value.length > 0
                  ? (nn(),
                    Kn("div", TJ, [
                      gJ,
                      dt("div", UJ, [
                        Dr(
                          et(lb),
                          {
                            class: "select",
                            label: "Sort by:",
                            options: l,
                            modelValue: c.value,
                            "onUpdate:modelValue": [
                              x[0] || (x[0] = (he) => (c.value = he)),
                              E,
                            ],
                            "text-prop": "name",
                            "data-test": "select-sort",
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                        dt("div", RJ, [
                          NJ,
                          dt("div", null, [
                            Dr(
                              et(q),
                              { icon: et(wb), class: "zoom-icon", onClick: I },
                              null,
                              8,
                              ["icon"]
                            ),
                            Dr(
                              et(q),
                              { icon: et(ih), class: "zoom-icon", onClick: A },
                              null,
                              8,
                              ["icon"]
                            ),
                            Dr(
                              et(q),
                              { icon: et(eJ), class: "zoom-icon", onClick: C },
                              null,
                              8,
                              ["icon"]
                            ),
                          ]),
                        ]),
                      ]),
                      p.value
                        ? (nn(),
                          Kn(
                            "div",
                            {
                              key: 0,
                              class: "alarms",
                              style: fJ({ width: p.value + 50 + "px" }),
                            },
                            [
                              dt("div", yJ, [
                                dt("div", null, Ir(et(Qt)(y.value)), 1),
                                dt("div", null, Ir(et(Qt)(w.value)), 1),
                              ]),
                              t.situation.events
                                ? (nn(),
                                  Kn("div", kJ, [
                                    (nn(!0),
                                    Kn(
                                      zf,
                                      null,
                                      hJ(
                                        R.value,
                                        (he) => (
                                          nn(),
                                          Kn(
                                            "div",
                                            { class: "timeline", key: he.id },
                                            [
                                              dt("div", MJ, [
                                                Qf(
                                                  Ir(he.nodeLabel) +
                                                    " - " +
                                                    Ir(he.id) +
                                                    " ",
                                                  1
                                                ),
                                                a.value === he.id
                                                  ? (nn(),
                                                    Gf(
                                                      et(q),
                                                      {
                                                        key: 0,
                                                        icon: et(Hs),
                                                        class:
                                                          "zoom-icon expand",
                                                        onClick: _,
                                                      },
                                                      null,
                                                      8,
                                                      ["icon"]
                                                    ))
                                                  : (nn(),
                                                    Gf(
                                                      et(q),
                                                      {
                                                        key: 1,
                                                        icon: et(yd),
                                                        class:
                                                          "zoom-icon expand",
                                                        onClick: () => O(he.id),
                                                      },
                                                      null,
                                                      8,
                                                      ["icon", "onClick"]
                                                    )),
                                              ]),
                                              Dr(
                                                Hb,
                                                {
                                                  alarm: he,
                                                  proportion: F.value,
                                                  "min-start": y.value,
                                                  events:
                                                    o.situation.events[he.id],
                                                },
                                                null,
                                                8,
                                                [
                                                  "alarm",
                                                  "proportion",
                                                  "min-start",
                                                  "events",
                                                ]
                                              ),
                                              a.value === he.id
                                                ? (nn(),
                                                  Kn("div", ZJ, [
                                                    Dr(
                                                      cJ,
                                                      {
                                                        events:
                                                          o.situation.events[
                                                            he.id
                                                          ],
                                                      },
                                                      null,
                                                      8,
                                                      ["events"]
                                                    ),
                                                  ]))
                                                : ua("", !0),
                                            ]
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]))
                                : ua("", !0),
                            ],
                            4
                          ))
                        : ua("", !0),
                    ]))
                  : ua("", !0),
              ],
              64
            )
          );
        };
      },
    }),
    tO = "",
    EJ = ge(JJ, [["__scopeId", "data-v-01717d0d"]]),
    SJ = window.Vue.openBlock,
    FJ = window.Vue.createElementBlock,
    AJ = window.Vue.createElementVNode;
  var WJ = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const CJ = {},
    xJ = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    BJ = [
      AJ(
        "path",
        {
          d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z",
        },
        null,
        -1
      ),
    ];
  function IJ(t, o) {
    return SJ(), FJ("svg", xJ, BJ);
  }
  var Cl = WJ(CJ, [["render", IJ]]);
  const DJ = window.Vue.defineComponent,
    ze = window.Vue.unref,
    Ut = window.Vue.createVNode,
    _o = window.Vue.createElementVNode,
    rn = window.Vue.withCtx,
    Yf = window.Vue.createTextVNode,
    xl = window.Vue.openBlock,
    _J = window.Vue.createBlock,
    Hf = window.Vue.createCommentVNode,
    Pf = window.Vue.createElementBlock,
    OJ = window.Vue.pushScopeId,
    QJ = window.Vue.popScopeId,
    Bl = (t) => (OJ("data-v-6a3cc938"), (t = t()), QJ(), t),
    zJ = { id: "cont" },
    GJ = { class: "btns-navigation" },
    YJ = Bl(() => _o("span", null, "Situation List", -1)),
    HJ = Bl(() => _o("span", null, "Show Previous Situation ", -1)),
    PJ = Bl(() => _o("span", null, "Show Next Situation", -1)),
    jJ = { key: 0, class: "detail" },
    XJ = Yf("Details"),
    LJ = Yf("Metrics"),
    da = window.Vue.ref,
    jf = window.Vue.watch,
    $J = window.Vue.onMounted,
    qJ = window.VueRouter.useRouter,
    KJ = window.VueRouter.useRoute,
    eE = DJ({
      __name: "SituationDetail",
      setup(t) {
        const o = qJ(),
          r = KJ(),
          a = parseInt(r.params.id),
          l = da(a),
          c = mr();
        c.getSituation(l.value), c.situations.length || c.getSituations();
        const d = da(),
          p = da(),
          w = da(c.filteredSituations.findIndex((R) => R === l.value));
        jf(
          () => c.situationDetail,
          () => {
            d.value = c.situationDetail;
          }
        ),
          $J(() => {
            var y;
            const R =
              ((y = document.getElementById("cont")) == null
                ? void 0
                : y.getBoundingClientRect().width) || 1200;
            p.value = R - 90;
          });
        const V = () => {
            o.push({ name: "situations" });
          },
          g = (R) => {
            const y = w.value,
              F = c.filteredSituations[y + R];
            o.push({ name: "situationDetail", params: { id: F } });
          };
        return (
          jf(r, () => {
            (l.value = parseInt(r.params.id)),
              c.getSituation(l.value),
              (w.value = c.filteredSituations.findIndex((R) => R == l.value));
          }),
          (R, y) => (
            xl(),
            Pf("div", zJ, [
              _o("div", GJ, [
                Ut(
                  ze(lt),
                  { primary: "", onClick: y[0] || (y[0] = () => V()) },
                  {
                    default: rn(() => [
                      Ut(
                        ze(q),
                        { icon: ze(Cl), "aria-hidden": "true", class: "icon" },
                        null,
                        8,
                        ["icon"]
                      ),
                      YJ,
                    ]),
                    _: 1,
                  }
                ),
                _o("div", null, [
                  Ut(
                    ze(lt),
                    {
                      disabled: !ze(c).filteredSituations[w.value - 1],
                      primary: "",
                      onClick: y[1] || (y[1] = () => g(-1)),
                    },
                    {
                      default: rn(() => [
                        Ut(
                          ze(q),
                          {
                            icon: ze(Cl),
                            "aria-hidden": "true",
                            class: "icon",
                          },
                          null,
                          8,
                          ["icon"]
                        ),
                        HJ,
                      ]),
                      _: 1,
                    },
                    8,
                    ["disabled"]
                  ),
                  Ut(
                    ze(lt),
                    {
                      disabled: !ze(c).filteredSituations[w.value + 1],
                      primary: "",
                      onClick: y[2] || (y[2] = () => g(1)),
                    },
                    {
                      default: rn(() => [
                        PJ,
                        Ut(
                          ze(q),
                          {
                            icon: ze(Cl),
                            "aria-hidden": "true",
                            class: "icon next",
                          },
                          null,
                          8,
                          ["icon"]
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["disabled"]
                  ),
                ]),
              ]),
              d.value
                ? (xl(),
                  Pf("div", jJ, [
                    Ut(ze(Ky), null, {
                      tabs: rn(() => [
                        Ut(ze(Ah), null, { default: rn(() => [XJ]), _: 1 }),
                        Ut(ze(Ah), null, { default: rn(() => [LJ]), _: 1 }),
                      ]),
                      default: rn(() => [
                        Ut(
                          ze(Wh),
                          { class: "panel" },
                          {
                            default: rn(() => [
                              Ut(O2, { "situation-info": d.value }, null, 8, [
                                "situation-info",
                              ]),
                            ]),
                            _: 1,
                          }
                        ),
                        Ut(
                          ze(Wh),
                          { class: "panel" },
                          {
                            default: rn(() => [
                              p.value
                                ? (xl(),
                                  _J(
                                    EJ,
                                    {
                                      key: 0,
                                      situation: d.value,
                                      width: p.value,
                                    },
                                    null,
                                    8,
                                    ["situation", "width"]
                                  ))
                                : Hf("", !0),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }),
                  ]))
                : Hf("", !0),
            ])
          )
        );
      },
    }),
    rO = "",
    tE = ge(eE, [["__scopeId", "data-v-6a3cc938"]]),
    oO = "";
  var nE = Object.defineProperty,
    rE = Object.defineProperties,
    oE = Object.getOwnPropertyDescriptors,
    Xf = Object.getOwnPropertySymbols,
    iE = Object.prototype.hasOwnProperty,
    aE = Object.prototype.propertyIsEnumerable,
    Lf = (t, o, r) =>
      o in t
        ? nE(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r })
        : (t[o] = r),
    ha = (t, o) => {
      for (var r in o || (o = {})) iE.call(o, r) && Lf(t, r, o[r]);
      if (Xf) for (var r of Xf(o)) aE.call(o, r) && Lf(t, r, o[r]);
      return t;
    },
    $f = (t, o) => rE(t, oE(o));
  const qf = window.Vue.defineComponent,
    sE = window.Vue.ref,
    Oo = window.Vue.computed,
    lE = window.Vue.reactive,
    Kf = window.Vue.watch,
    Il = window.Vue.inject,
    ep = window.Vue.resolveComponent,
    Dl = window.Vue.openBlock,
    tp = window.Vue.createElementBlock,
    Mn = window.Vue.createElementVNode,
    cE = window.Vue.createBlock,
    uE = window.Vue.createCommentVNode,
    np = window.Vue.renderSlot,
    dE = window.Vue.pushScopeId,
    hE = window.Vue.popScopeId,
    _l = window.Vue.toRef,
    rp = window.Vue.mergeProps,
    fE = window.Vue.toDisplayString,
    pE = window.Vue.createVNode;
  var op = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const mE = qf({
      props: {
        value: {
          type: [String, Number, Boolean, Array, Object, Date, Function],
          required: !0,
        },
        disabled: { type: Boolean, default: !1 },
      },
      setup(t) {
        const o = sE(),
          r = () => {
            o.value.focus();
          },
          a = Oo(() => le("feather-radio-button")),
          l = lE({
            first: !1,
            focus: r,
            disabled: t.disabled,
            value: t.value,
            checked: !1,
            id: a.value,
          }),
          c = Oo(() => le("radio-label-id")),
          d = Oo(() => (l.first || l.checked ? 0 : -1));
        Kf(
          () => t.disabled,
          (R) => {
            l.disabled = R;
          },
          { immediate: !0 }
        ),
          Kf(
            () => t.value,
            (R) => {
              l.value = R;
            },
            { immediate: !0 }
          );
        const p = Il("register", (R) => {}),
          w = Il("blur", (R) => {}),
          V = Il("select", (R) => {});
        return (
          p(l),
          {
            labelId: c,
            tabindex: d,
            vm: l,
            blur: w,
            click: () => {
              V(l);
            },
            input: o,
            id: a,
          }
        );
      },
      components: { FeatherRipple: _n },
    }),
    wE = (t) => (dE("data-v-24790cf0"), (t = t()), hE(), t),
    vE = { class: "layout-container" },
    VE = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"],
    TE = { class: "radio hover focus" },
    gE = wE(() =>
      Mn(
        "div",
        { class: "icon", "aria-hidden": "true" },
        [
          Mn("svg", { class: "dot" }, [
            Mn("circle", {
              cx: "50%",
              cy: "50%",
              r: "0.3125rem",
              stroke: "black",
              "stroke-width": "0",
            }),
          ]),
        ],
        -1
      )
    ),
    UE = ["id"];
  function RE(t, o, r, a, l, c) {
    const d = ep("feather-ripple");
    return (
      Dl(),
      tp("div", vE, [
        Mn(
          "div",
          {
            class: "feather-radio",
            role: "radio",
            ref: "input",
            id: t.id,
            "aria-checked": t.vm.checked ? "true" : "false",
            "aria-disabled": t.vm.disabled ? "true" : "false",
            "aria-labelledby": t.labelId,
            tabindex: t.tabindex,
            onClick: o[0] || (o[0] = (...p) => t.click && t.click(...p)),
            onBlur: o[1] || (o[1] = (...p) => t.blur && t.blur(...p)),
            "data-ref-id": "feather-radio",
          },
          [
            Mn("div", TE, [
              gE,
              t.vm.disabled
                ? uE("", !0)
                : (Dl(), cE(d, { key: 0, center: "" })),
            ]),
            Mn(
              "span",
              {
                class: "label",
                "data-ref-id": "feather-radio-label",
                id: t.labelId,
              },
              [np(t.$slots, "default", {}, void 0, !0)],
              8,
              UE
            ),
          ],
          40,
          VE
        ),
      ])
    );
  }
  var fa = op(mE, [
    ["render", RE],
    ["__scopeId", "data-v-24790cf0"],
  ]);
  const NE = $f(ha({}, Ai), {
      label: { type: String, required: !0 },
      modelValue: {
        type: [String, Number, Boolean, Array, Object, Date, Function],
      },
      vertical: { type: Boolean, default: !1 },
      schema: { type: Object, required: !1 },
    }),
    yE = qf({
      model: { prop: "modelValue", event: "update:modelValue" },
      props: NE,
      emits: { "update:modelValue": (t) => !0, blur: (t) => !0 },
      setup(t, o) {
        Wi(t);
        const r = _l(t, "error"),
          a = _l(t, "modelValue"),
          l = Oo(() => le("feather-input-description")),
          c = Oo(() => {
            const d = $f(ha({}, o.attrs), {
              class: "",
              "aria-describedby": l.value,
            });
            return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
          });
        return ha(
          ha(
            { descriptionId: l, attrs: c },
            Qd(a, o.emit, t.label, t.schema, _l(t, "error"))
          ),
          Fi(o.attrs)
        );
      },
      components: { InputSubText: Ei },
    }),
    kE = ["for"],
    ME = ["id"];
  function ZE(t, o, r, a, l, c) {
    const d = ep("InputSubText");
    return (
      Dl(),
      tp(
        "div",
        rp(t.inherittedAttrs, {
          class: ["feather-radio-group-container", { vertical: t.vertical }],
        }),
        [
          Mn(
            "label",
            { for: t.groupId, class: "group-label" },
            fE(t.label),
            9,
            kE
          ),
          Mn(
            "div",
            rp(t.attrs, {
              class: "feather-radio-group",
              "data-ref-id": "feather-radio-group",
              role: "radiogroup",
              id: t.groupId,
              onKeydown:
                o[0] || (o[0] = (...p) => t.keydown && t.keydown(...p)),
            }),
            [np(t.$slots, "default", {}, void 0, !0)],
            16,
            ME
          ),
          pE(d, { id: t.descriptionId }, null, 8, ["id"]),
        ],
        16
      )
    );
  }
  var ip = op(yE, [
    ["render", ZE],
    ["__scopeId", "data-v-6775aeb9"],
  ]);
  const bE = window.Vue.openBlock,
    JE = window.Vue.createElementBlock,
    EE = window.Vue.createStaticVNode;
  var SE = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const FE = {},
    AE = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    WE = [
      EE(
        '<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>',
        6
      ),
    ];
  function CE(t, o) {
    return bE(), JE("svg", AE, WE);
  }
  var xE = SE(FE, [["render", CE]]);
  const BE = window.Vue.openBlock,
    IE = window.Vue.createElementBlock,
    DE = window.Vue.createStaticVNode;
  var _E = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const OE = {},
    QE = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    zE = [
      DE(
        '<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>',
        5
      ),
    ];
  function GE(t, o) {
    return BE(), IE("svg", QE, zE);
  }
  var YE = _E(OE, [["render", GE]]);
  const HE = window.Vue.openBlock,
    PE = window.Vue.createElementBlock,
    jE = window.Vue.createElementVNode;
  var XE = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const LE = {},
    $E = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    qE = [
      jE(
        "path",
        {
          d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z",
        },
        null,
        -1
      ),
    ];
  function KE(t, o) {
    return HE(), PE("svg", $E, qE);
  }
  var eS = XE(LE, [["render", KE]]);
  const tS = window.Vue.openBlock,
    nS = window.Vue.createElementBlock,
    rS = window.Vue.createStaticVNode;
  var oS = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const iS = {},
    aS = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    sS = [
      rS(
        '<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>',
        9
      ),
    ];
  function lS(t, o) {
    return tS(), nS("svg", aS, sS);
  }
  var cS = oS(iS, [["render", lS]]);
  const uS = window.Vue.openBlock,
    dS = window.Vue.createElementBlock,
    hS = window.Vue.createElementVNode;
  var fS = (t, o) => {
    const r = t.__vccOpts || t;
    for (const [a, l] of o) r[a] = l;
    return r;
  };
  const pS = {},
    mS = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
    wS = [
      hS(
        "path",
        {
          d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z",
        },
        null,
        -1
      ),
    ];
  function vS(t, o) {
    return uS(), dS("svg", mS, wS);
  }
  var VS = fS(pS, [["render", vS]]);
  const Ol = () => window.VRouter || Gl,
    TS = window.Vue.defineComponent,
    Ue = window.Vue.createElementVNode,
    Qo = window.Vue.createTextVNode,
    He = window.Vue.unref,
    on = window.Vue.createVNode,
    pa = window.Vue.withCtx,
    ap = window.Vue.openBlock,
    sp = window.Vue.createElementBlock,
    gS = window.Vue.createCommentVNode,
    US = window.Vue.pushScopeId,
    RS = window.Vue.popScopeId,
    Ct = (t) => (US("data-v-b4b3bdcf"), (t = t()), RS(), t),
    NS = { class: "container" },
    yS = Ct(() => Ue("div", { class: "title" }, "ALEC", -1)),
    kS = Ct(() =>
      Ue(
        "div",
        { class: "description" },
        [
          Qo(
            " The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "
          ),
          Ue("br"),
          Ue("strong", null, "Our goal"),
          Qo(
            " with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. "
          ),
        ],
        -1
      )
    ),
    MS = Ct(() => Ue("h3", null, "Key Benefits:", -1)),
    ZS = { class: "list" },
    bS = Ct(() =>
      Ue(
        "span",
        null,
        " Alleviate alarm load by clustering them into actionable situations. ",
        -1
      )
    ),
    JS = Ct(() => Ue("span", null, "Assist in root cause analysis.", -1)),
    ES = Ct(() =>
      Ue(
        "span",
        null,
        " Avoid potential issues flagged by alarms with low visibility. ",
        -1
      )
    ),
    SS = Ct(() => Ue("span", null, "Easy configuration.", -1)),
    FS = Ct(() =>
      Ue(
        "span",
        null,
        " Continuous improvement. Provided anonymized data helps us improve ALEC. ",
        -1
      )
    ),
    AS = { key: 0, class: "optin" },
    WS = Ct(() => Ue("h3", null, "Enable ALEC for more precise results:", -1)),
    CS = Ct(() =>
      Ue(
        "div",
        null,
        " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ",
        -1
      )
    ),
    xS = { class: "choices" },
    BS = Ct(() =>
      Ue(
        "div",
        { class: "radio-text" },
        " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ",
        -1
      )
    ),
    IS = Qo("Yes"),
    DS = Qo("No"),
    _S = Qo(" Continue "),
    OS = window.Vue.ref,
    QS = TS({
      __name: "WelcomePage",
      setup(t) {
        const o = Co(),
          r = Ol(),
          a = OS(!0),
          l = () => {
            const c = Boolean(a.value);
            o.savePermission(c), r.push({ name: "configuration" });
          };
        return (c, d) => (
          ap(),
          sp("div", NS, [
            yS,
            kS,
            Ue("div", null, [
              MS,
              Ue("div", ZS, [
                Ue("div", null, [
                  on(
                    He(q),
                    { icon: He(cS), "aria-hidden": "true", class: "icon" },
                    null,
                    8,
                    ["icon"]
                  ),
                  bS,
                ]),
                Ue("div", null, [
                  on(
                    He(q),
                    { icon: He(eS), "aria-hidden": "true", class: "icon" },
                    null,
                    8,
                    ["icon"]
                  ),
                  JS,
                ]),
                Ue("div", null, [
                  on(
                    He(q),
                    { icon: He(VS), "aria-hidden": "true", class: "icon" },
                    null,
                    8,
                    ["icon"]
                  ),
                  ES,
                ]),
                Ue("div", null, [
                  on(
                    He(q),
                    { icon: He(xE), "aria-hidden": "true", class: "icon" },
                    null,
                    8,
                    ["icon"]
                  ),
                  SS,
                ]),
                Ue("div", null, [
                  on(
                    He(q),
                    { icon: He(YE), "aria-hidden": "true", class: "icon" },
                    null,
                    8,
                    ["icon"]
                  ),
                  FS,
                ]),
              ]),
            ]),
            He(o).isAdmin
              ? (ap(),
                sp("div", AS, [
                  WS,
                  CS,
                  Ue("div", xS, [
                    BS,
                    on(
                      He(ip),
                      {
                        horizontal: "",
                        modelValue: a.value,
                        "onUpdate:modelValue":
                          d[0] || (d[0] = (p) => (a.value = p)),
                        label: "",
                      },
                      {
                        default: pa(() => [
                          on(
                            He(fa),
                            { value: !0 },
                            { default: pa(() => [IS]), _: 1 }
                          ),
                          on(
                            He(fa),
                            { value: !1 },
                            { default: pa(() => [DS]), _: 1 }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["modelValue"]
                    ),
                  ]),
                ]))
              : gS("", !0),
            on(
              He(lt),
              {
                "data-test": "continue-btn",
                primary: "",
                class: "continue-btn",
                onClick: l,
              },
              { default: pa(() => [_S]), _: 1 }
            ),
          ])
        );
      },
    }),
    hO = "",
    zS = ge(QS, [["__scopeId", "data-v-b4b3bdcf"]]),
    GS = window.Vue.defineComponent,
    YS = window.Vue.createElementVNode,
    HS = window.Vue.createTextVNode,
    PS = window.Vue.unref,
    jS = window.Vue.withCtx,
    XS = window.Vue.createVNode,
    LS = window.Vue.Fragment,
    $S = window.Vue.openBlock,
    qS = window.Vue.createElementBlock,
    KS = window.Vue.pushScopeId,
    eF = window.Vue.popScopeId,
    tF = ((t) => (KS("data-v-bcb7dcc6"), (t = t()), eF(), t))(() =>
      YS("div", { class: "main" }, "Something bad is happening...", -1)
    ),
    nF = HS(" Reload "),
    rF = GS({
      __name: "ErrorPage",
      setup(t) {
        const o = Ol(),
          r = () => {
            o.push({ name: "situations" });
          };
        return (a, l) => (
          $S(),
          qS(
            LS,
            null,
            [
              tF,
              XS(
                PS(lt),
                { primary: "", onClick: r },
                { default: jS(() => [nF]), _: 1 }
              ),
            ],
            64
          )
        );
      },
    }),
    pO = "",
    oF = ge(rF, [["__scopeId", "data-v-bcb7dcc6"]]),
    iF =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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",
    aF =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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",
    sF = window.Vue.defineComponent,
    Fe = window.Vue.createElementVNode,
    Ql = window.Vue.createTextVNode,
    Zn = window.Vue.unref,
    zo = window.Vue.withCtx,
    Go = window.Vue.createVNode,
    lF = window.Vue.openBlock,
    cF = window.Vue.createElementBlock,
    uF = window.Vue.pushScopeId,
    dF = window.Vue.popScopeId,
    er = (t) => (uF("data-v-9a5b5f4e"), (t = t()), dF(), t),
    hF = { class: "container" },
    fF = er(() => Fe("h2", null, "Configuration", -1)),
    pF = er(() =>
      Fe(
        "p",
        null,
        [
          Ql(
            " ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "
          ),
          Fe("br"),
          Ql(" For detail information about proposed engines you can read "),
          Fe("strong", null, [
            Fe(
              "a",
              {
                target: "_blank",
                href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html",
              },
              " here "
            ),
          ]),
        ],
        -1
      )
    ),
    mF = { class: "radio-content" },
    wF = er(() => Fe("strong", { class: "title" }, "Clustering", -1)),
    vF = er(() =>
      Fe(
        "div",
        null,
        " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ",
        -1
      )
    ),
    VF = er(() => Fe("img", { class: "img", src: iF }, null, -1)),
    TF = er(() =>
      Fe(
        "div",
        { class: "hellinger" },
        [
          Fe("strong", null, "With hellinger distance"),
          Fe("br"),
          Fe(
            "span",
            { class: "description" },
            " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) "
          ),
        ],
        -1
      )
    ),
    gF = er(() =>
      Fe(
        "div",
        { class: "radio-content" },
        [
          Fe("strong", { class: "title" }, "Deep Learning"),
          Fe(
            "div",
            null,
            " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "
          ),
          Fe("img", { class: "img img2", src: aF }),
        ],
        -1
      )
    ),
    UF = Ql(" Continue "),
    lp = window.Vue.ref,
    RF = sF({
      __name: "ConfigurationPage",
      setup(t) {
        const o = Co(),
          r = Ol(),
          a = lp(!1),
          l = lp(at.ENGINE_DBSCAN),
          c = () => {
            td(o.allowSave),
              Uv(l.value, a.value),
              r.push({ name: "situations" });
          };
        return (d, p) => (
          lF(),
          cF("div", hF, [
            fF,
            pF,
            Fe("div", null, [
              Go(
                Zn(ip),
                {
                  class: "radio-group",
                  label:
                    "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
                  modelValue: l.value,
                  "onUpdate:modelValue": p[1] || (p[1] = (w) => (l.value = w)),
                },
                {
                  default: zo(() => [
                    Go(
                      Zn(fa),
                      { class: "radio", value: Zn(at).ENGINE_DBSCAN },
                      {
                        default: zo(() => [
                          Fe("div", mF, [
                            wF,
                            vF,
                            VF,
                            Go(
                              Zn(Tl),
                              {
                                modelValue: a.value,
                                "onUpdate:modelValue":
                                  p[0] || (p[0] = (w) => (a.value = w)),
                                disabled: l.value !== Zn(at).ENGINE_DBSCAN,
                                class: "checkbox",
                              },
                              { default: zo(() => [TF]), _: 1 },
                              8,
                              ["modelValue", "disabled"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      },
                      8,
                      ["value"]
                    ),
                    Go(
                      Zn(fa),
                      { class: "radio", value: Zn(at).ENGINE_DEEP_LEARNING },
                      { default: zo(() => [gF]), _: 1 },
                      8,
                      ["value"]
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["label", "modelValue"]
              ),
            ]),
            Go(
              Zn(lt),
              {
                primary: "",
                class: "btn",
                onClick: p[2] || (p[2] = () => c()),
              },
              { default: zo(() => [UF]), _: 1 }
            ),
          ])
        );
      },
    }),
    mO = "",
    NF = ge(RF, [["__scopeId", "data-v-9a5b5f4e"]]),
    yF = window.VueRouter.createRouter,
    kF = window.VueRouter.createWebHistory,
    zl = async () => {
      const t = window.VRouter || Gl,
        o = Co();
      if (!o.userId) {
        const r = await o.getUserRole();
        await o.getAlecInfo(),
          r ? t.push({ name: "home" }) : t.push({ name: "error" });
      }
    },
    cp = [
      {
        path: "/",
        name: "home",
        beforeEnter: async (t) => {
          const o = window.VRouter || Gl,
            r = Co();
          await r.getUserRole(),
            await r.getAlecInfo(),
            r.firstTime
              ? o.push({ name: "welcome", params: t.params })
              : o.push({ name: "situations", params: t.params });
        },
        component: {},
      },
      {
        path: "/welcome",
        name: "welcome",
        beforeEnter: () => zl(),
        component: zS,
      },
      {
        path: "/setup",
        name: "configuration",
        beforeEnter: () => zl(),
        component: NF,
      },
      {
        path: "/situations",
        name: "situations",
        beforeEnter: () => zl(),
        component: gy,
      },
      { path: "/situations/:id", name: "situationDetail", component: tE },
      { path: "/error", name: "error", component: oF },
    ],
    up = window.VRouter;
  if (up)
    for (const t of cp) {
      const { path: o, name: r, component: a, beforeEnter: l } = t;
      up.addRoute("Plugin", {
        path: o.slice(1),
        name: r,
        component: a,
        beforeEnter: l,
      });
    }
  const Gl = yF({ history: kF(), routes: cp }),
    wO = "",
    vO = "";
  window.Vue.createApp, window.Pinia.createPinia, (window.alecextension = Kw);
});

const ye = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
}, JR = {}, ER = window.Vue.resolveComponent, SR = window.Vue.createVNode, FR = window.Vue.openBlock, AR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const WR = { class: "main" };
function CR(t, o) {
  const r = ER("router-view");
  return FR(), AR("div", WR, [
    SR(r)
  ]);
}
const xR = /* @__PURE__ */ ye(JR, [["render", CR], ["__scopeId", "data-v-5d32d140"]]), BR = window.Vue.defineComponent, IR = window.Vue.openBlock, DR = window.Vue.createBlock, OR = /* @__PURE__ */ BR({
  __name: "App",
  setup(t) {
    return (o, r) => (IR(), DR(xR));
  }
});
var Mo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function QR(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var hm = { exports: {} }, Bc = { exports: {} }, fm = function(o, r) {
  return function() {
    for (var l = new Array(arguments.length), c = 0; c < l.length; c++)
      l[c] = arguments[c];
    return o.apply(r, l);
  };
}, _R = fm, Ic = Object.prototype.toString, Dc = function(t) {
  return function(o) {
    var r = Ic.call(o);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function sr(t) {
  return t = t.toLowerCase(), function(r) {
    return Dc(r) === t;
  };
}
function Oc(t) {
  return Array.isArray(t);
}
function Wa(t) {
  return typeof t > "u";
}
function zR(t) {
  return t !== null && !Wa(t) && t.constructor !== null && !Wa(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var pm = sr("ArrayBuffer");
function GR(t) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(t) : o = t && t.buffer && pm(t.buffer), o;
}
function YR(t) {
  return typeof t == "string";
}
function HR(t) {
  return typeof t == "number";
}
function mm(t) {
  return t !== null && typeof t == "object";
}
function Ma(t) {
  if (Dc(t) !== "object")
    return !1;
  var o = Object.getPrototypeOf(t);
  return o === null || o === Object.prototype;
}
var PR = sr("Date"), jR = sr("File"), XR = sr("Blob"), LR = sr("FileList");
function Qc(t) {
  return Ic.call(t) === "[object Function]";
}
function $R(t) {
  return mm(t) && Qc(t.pipe);
}
function qR(t) {
  var o = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Ic.call(t) === o || Qc(t.toString) && t.toString() === o);
}
var KR = sr("URLSearchParams");
function eN(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function tN() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function _c(t, o) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Oc(t))
      for (var r = 0, a = t.length; r < a; r++)
        o.call(null, t[r], r, t);
    else
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && o.call(null, t[l], l, t);
}
function Uc() {
  var t = {};
  function o(l, c) {
    Ma(t[c]) && Ma(l) ? t[c] = Uc(t[c], l) : Ma(l) ? t[c] = Uc({}, l) : Oc(l) ? t[c] = l.slice() : t[c] = l;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    _c(arguments[r], o);
  return t;
}
function nN(t, o, r) {
  return _c(o, function(l, c) {
    r && typeof l == "function" ? t[c] = _R(l, r) : t[c] = l;
  }), t;
}
function rN(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function oN(t, o, r, a) {
  t.prototype = Object.create(o.prototype, a), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function iN(t, o, r) {
  var a, l, c, d = {};
  o = o || {};
  do {
    for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0; )
      c = a[l], d[c] || (o[c] = t[c], d[c] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, o)) && t !== Object.prototype);
  return o;
}
function aN(t, o, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= o.length;
  var a = t.indexOf(o, r);
  return a !== -1 && a === r;
}
function sN(t) {
  if (!t)
    return null;
  var o = t.length;
  if (Wa(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = t[o];
  return r;
}
var lN = function(t) {
  return function(o) {
    return t && o instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), De = {
  isArray: Oc,
  isArrayBuffer: pm,
  isBuffer: zR,
  isFormData: qR,
  isArrayBufferView: GR,
  isString: YR,
  isNumber: HR,
  isObject: mm,
  isPlainObject: Ma,
  isUndefined: Wa,
  isDate: PR,
  isFile: jR,
  isBlob: XR,
  isFunction: Qc,
  isStream: $R,
  isURLSearchParams: KR,
  isStandardBrowserEnv: tN,
  forEach: _c,
  merge: Uc,
  extend: nN,
  trim: eN,
  stripBOM: rN,
  inherits: oN,
  toFlatObject: iN,
  kindOf: Dc,
  kindOfTest: sr,
  endsWith: aN,
  toArray: sN,
  isTypedArray: lN,
  isFileList: LR
}, Mr = De;
function _h(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var wm = function(o, r, a) {
  if (!r)
    return o;
  var l;
  if (a)
    l = a(r);
  else if (Mr.isURLSearchParams(r))
    l = r.toString();
  else {
    var c = [];
    Mr.forEach(r, function(w, V) {
      w === null || typeof w > "u" || (Mr.isArray(w) ? V = V + "[]" : w = [w], Mr.forEach(w, function(R) {
        Mr.isDate(R) ? R = R.toISOString() : Mr.isObject(R) && (R = JSON.stringify(R)), c.push(_h(V) + "=" + _h(R));
      }));
    }), l = c.join("&");
  }
  if (l) {
    var d = o.indexOf("#");
    d !== -1 && (o = o.slice(0, d)), o += (o.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return o;
}, cN = De;
function Ha() {
  this.handlers = [];
}
Ha.prototype.use = function(o, r, a) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
Ha.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Ha.prototype.forEach = function(o) {
  cN.forEach(this.handlers, function(a) {
    a !== null && o(a);
  });
};
var uN = Ha, dN = De, hN = function(o, r) {
  dN.forEach(o, function(l, c) {
    c !== r && c.toUpperCase() === r.toUpperCase() && (o[r] = l, delete o[c]);
  });
}, vm = De;
function Pr(t, o, r, a, l) {
  Error.call(this), this.message = t, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), a && (this.request = a), l && (this.response = l);
}
vm.inherits(Pr, Error, {
  toJSON: function() {
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
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Vm = Pr.prototype, Tm = {};
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
  "ERR_CANCELED"
].forEach(function(t) {
  Tm[t] = { value: t };
});
Object.defineProperties(Pr, Tm);
Object.defineProperty(Vm, "isAxiosError", { value: !0 });
Pr.from = function(t, o, r, a, l, c) {
  var d = Object.create(Vm);
  return vm.toFlatObject(t, d, function(w) {
    return w !== Error.prototype;
  }), Pr.call(d, t.message, o, r, a, l), d.name = t.name, c && Object.assign(d, c), d;
};
var $r = Pr, gm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xt = De;
function fN(t, o) {
  o = o || new FormData();
  var r = [];
  function a(c) {
    return c === null ? "" : xt.isDate(c) ? c.toISOString() : xt.isArrayBuffer(c) || xt.isTypedArray(c) ? typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function l(c, d) {
    if (xt.isPlainObject(c) || xt.isArray(c)) {
      if (r.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + d);
      r.push(c), xt.forEach(c, function(w, V) {
        if (!xt.isUndefined(w)) {
          var g = d ? d + "." + V : V, R;
          if (w && !d && typeof w == "object") {
            if (xt.endsWith(V, "{}"))
              w = JSON.stringify(w);
            else if (xt.endsWith(V, "[]") && (R = xt.toArray(w))) {
              R.forEach(function(y) {
                !xt.isUndefined(y) && o.append(g, a(y));
              });
              return;
            }
          }
          l(w, g);
        }
      }), r.pop();
    } else
      o.append(d, a(c));
  }
  return l(t), o;
}
var Um = fN, Jl, zh;
function pN() {
  if (zh)
    return Jl;
  zh = 1;
  var t = $r;
  return Jl = function(r, a, l) {
    var c = l.config.validateStatus;
    !l.status || !c || c(l.status) ? r(l) : a(new t(
      "Request failed with status code " + l.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
      l.config,
      l.request,
      l
    ));
  }, Jl;
}
var El, Gh;
function mN() {
  if (Gh)
    return El;
  Gh = 1;
  var t = De;
  return El = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(a, l, c, d, p, w) {
        var V = [];
        V.push(a + "=" + encodeURIComponent(l)), t.isNumber(c) && V.push("expires=" + new Date(c).toGMTString()), t.isString(d) && V.push("path=" + d), t.isString(p) && V.push("domain=" + p), w === !0 && V.push("secure"), document.cookie = V.join("; ");
      },
      read: function(a) {
        var l = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
        return l ? decodeURIComponent(l[3]) : null;
      },
      remove: function(a) {
        this.write(a, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), El;
}
var wN = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, vN = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, VN = wN, TN = vN, Rm = function(o, r) {
  return o && !VN(r) ? TN(o, r) : r;
}, Sl, Yh;
function gN() {
  if (Yh)
    return Sl;
  Yh = 1;
  var t = De, o = [
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
    "user-agent"
  ];
  return Sl = function(a) {
    var l = {}, c, d, p;
    return a && t.forEach(a.split(`
`), function(V) {
      if (p = V.indexOf(":"), c = t.trim(V.substr(0, p)).toLowerCase(), d = t.trim(V.substr(p + 1)), c) {
        if (l[c] && o.indexOf(c) >= 0)
          return;
        c === "set-cookie" ? l[c] = (l[c] ? l[c] : []).concat([d]) : l[c] = l[c] ? l[c] + ", " + d : d;
      }
    }), l;
  }, Sl;
}
var Fl, Hh;
function UN() {
  if (Hh)
    return Fl;
  Hh = 1;
  var t = De;
  return Fl = t.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), l;
    function c(d) {
      var p = d;
      return r && (a.setAttribute("href", p), p = a.href), a.setAttribute("href", p), {
        href: a.href,
        protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
        host: a.host,
        search: a.search ? a.search.replace(/^\?/, "") : "",
        hash: a.hash ? a.hash.replace(/^#/, "") : "",
        hostname: a.hostname,
        port: a.port,
        pathname: a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname
      };
    }
    return l = c(window.location.href), function(p) {
      var w = t.isString(p) ? c(p) : p;
      return w.protocol === l.protocol && w.host === l.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Fl;
}
var Al, Ph;
function Pa() {
  if (Ph)
    return Al;
  Ph = 1;
  var t = $r, o = De;
  function r(a) {
    t.call(this, a == null ? "canceled" : a, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, t, {
    __CANCEL__: !0
  }), Al = r, Al;
}
var Wl, jh;
function RN() {
  return jh || (jh = 1, Wl = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Wl;
}
var Cl, Xh;
function Lh() {
  if (Xh)
    return Cl;
  Xh = 1;
  var t = De, o = pN(), r = mN(), a = wm, l = Rm, c = gN(), d = UN(), p = gm, w = $r, V = Pa(), g = RN();
  return Cl = function(y) {
    return new Promise(function(E, I) {
      var C = y.data, A = y.headers, Q = y.responseType, O;
      function H() {
        y.cancelToken && y.cancelToken.unsubscribe(O), y.signal && y.signal.removeEventListener("abort", O);
      }
      t.isFormData(C) && t.isStandardBrowserEnv() && delete A["Content-Type"];
      var k = new XMLHttpRequest();
      if (y.auth) {
        var W = y.auth.username || "", x = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        A.Authorization = "Basic " + btoa(W + ":" + x);
      }
      var z = l(y.baseURL, y.url);
      k.open(y.method.toUpperCase(), a(z, y.params, y.paramsSerializer), !0), k.timeout = y.timeout;
      function de() {
        if (!!k) {
          var Ve = "getAllResponseHeaders" in k ? c(k.getAllResponseHeaders()) : null, ge = !Q || Q === "text" || Q === "json" ? k.responseText : k.response, ke = {
            data: ge,
            status: k.status,
            statusText: k.statusText,
            headers: Ve,
            config: y,
            request: k
          };
          o(function(We) {
            E(We), H();
          }, function(We) {
            I(We), H();
          }, ke), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = de : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(de);
      }, k.onabort = function() {
        !k || (I(new w("Request aborted", w.ECONNABORTED, y, k)), k = null);
      }, k.onerror = function() {
        I(new w("Network Error", w.ERR_NETWORK, y, k, k)), k = null;
      }, k.ontimeout = function() {
        var ge = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", ke = y.transitional || p;
        y.timeoutErrorMessage && (ge = y.timeoutErrorMessage), I(new w(
          ge,
          ke.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          k
        )), k = null;
      }, t.isStandardBrowserEnv()) {
        var he = (y.withCredentials || d(z)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        he && (A[y.xsrfHeaderName] = he);
      }
      "setRequestHeader" in k && t.forEach(A, function(ge, ke) {
        typeof C > "u" && ke.toLowerCase() === "content-type" ? delete A[ke] : k.setRequestHeader(ke, ge);
      }), t.isUndefined(y.withCredentials) || (k.withCredentials = !!y.withCredentials), Q && Q !== "json" && (k.responseType = y.responseType), typeof y.onDownloadProgress == "function" && k.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (O = function(Ve) {
        !k || (I(!Ve || Ve && Ve.type ? new V() : Ve), k.abort(), k = null);
      }, y.cancelToken && y.cancelToken.subscribe(O), y.signal && (y.signal.aborted ? O() : y.signal.addEventListener("abort", O))), C || (C = null);
      var ve = g(z);
      if (ve && ["http", "https", "file"].indexOf(ve) === -1) {
        I(new w("Unsupported protocol " + ve + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      k.send(C);
    });
  }, Cl;
}
var xl, $h;
function NN() {
  return $h || ($h = 1, xl = null), xl;
}
var Fe = De, qh = hN, Kh = $r, yN = gm, kN = Um, MN = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function ef(t, o) {
  !Fe.isUndefined(t) && Fe.isUndefined(t["Content-Type"]) && (t["Content-Type"] = o);
}
function ZN() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Lh()), t;
}
function bN(t, o, r) {
  if (Fe.isString(t))
    try {
      return (o || JSON.parse)(t), Fe.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
var ja = {
  transitional: yN,
  adapter: ZN(),
  transformRequest: [function(o, r) {
    if (qh(r, "Accept"), qh(r, "Content-Type"), Fe.isFormData(o) || Fe.isArrayBuffer(o) || Fe.isBuffer(o) || Fe.isStream(o) || Fe.isFile(o) || Fe.isBlob(o))
      return o;
    if (Fe.isArrayBufferView(o))
      return o.buffer;
    if (Fe.isURLSearchParams(o))
      return ef(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var a = Fe.isObject(o), l = r && r["Content-Type"], c;
    if ((c = Fe.isFileList(o)) || a && l === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return kN(c ? { "files[]": o } : o, d && new d());
    } else if (a || l === "application/json")
      return ef(r, "application/json"), bN(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || ja.transitional, a = r && r.silentJSONParsing, l = r && r.forcedJSONParsing, c = !a && this.responseType === "json";
    if (c || l && Fe.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (d) {
        if (c)
          throw d.name === "SyntaxError" ? Kh.from(d, Kh.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: NN()
  },
  validateStatus: function(o) {
    return o >= 200 && o < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Fe.forEach(["delete", "get", "head"], function(o) {
  ja.headers[o] = {};
});
Fe.forEach(["post", "put", "patch"], function(o) {
  ja.headers[o] = Fe.merge(MN);
});
var zc = ja, JN = De, EN = zc, SN = function(o, r, a) {
  var l = this || EN;
  return JN.forEach(a, function(d) {
    o = d.call(l, o, r);
  }), o;
}, Bl, tf;
function Nm() {
  return tf || (tf = 1, Bl = function(o) {
    return !!(o && o.__CANCEL__);
  }), Bl;
}
var nf = De, Il = SN, FN = Nm(), AN = zc, WN = Pa();
function Dl(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new WN();
}
var CN = function(o) {
  Dl(o), o.headers = o.headers || {}, o.data = Il.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = nf.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), nf.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(l) {
      delete o.headers[l];
    }
  );
  var r = o.adapter || AN.adapter;
  return r(o).then(function(l) {
    return Dl(o), l.data = Il.call(
      o,
      l.data,
      l.headers,
      o.transformResponse
    ), l;
  }, function(l) {
    return FN(l) || (Dl(o), l && l.response && (l.response.data = Il.call(
      o,
      l.response.data,
      l.response.headers,
      o.transformResponse
    ))), Promise.reject(l);
  });
}, dt = De, ym = function(o, r) {
  r = r || {};
  var a = {};
  function l(g, R) {
    return dt.isPlainObject(g) && dt.isPlainObject(R) ? dt.merge(g, R) : dt.isPlainObject(R) ? dt.merge({}, R) : dt.isArray(R) ? R.slice() : R;
  }
  function c(g) {
    if (dt.isUndefined(r[g])) {
      if (!dt.isUndefined(o[g]))
        return l(void 0, o[g]);
    } else
      return l(o[g], r[g]);
  }
  function d(g) {
    if (!dt.isUndefined(r[g]))
      return l(void 0, r[g]);
  }
  function p(g) {
    if (dt.isUndefined(r[g])) {
      if (!dt.isUndefined(o[g]))
        return l(void 0, o[g]);
    } else
      return l(void 0, r[g]);
  }
  function w(g) {
    if (g in r)
      return l(o[g], r[g]);
    if (g in o)
      return l(void 0, o[g]);
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
    validateStatus: w
  };
  return dt.forEach(Object.keys(o).concat(Object.keys(r)), function(R) {
    var y = V[R] || c, F = y(R);
    dt.isUndefined(F) && y !== w || (a[R] = F);
  }), a;
}, Ol, rf;
function km() {
  return rf || (rf = 1, Ol = {
    version: "0.27.2"
  }), Ol;
}
var xN = km().version, Jn = $r, Gc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, o) {
  Gc[t] = function(a) {
    return typeof a === t || "a" + (o < 1 ? "n " : " ") + t;
  };
});
var of = {};
Gc.transitional = function(o, r, a) {
  function l(c, d) {
    return "[Axios v" + xN + "] Transitional option '" + c + "'" + d + (a ? ". " + a : "");
  }
  return function(c, d, p) {
    if (o === !1)
      throw new Jn(
        l(d, " has been removed" + (r ? " in " + r : "")),
        Jn.ERR_DEPRECATED
      );
    return r && !of[d] && (of[d] = !0, console.warn(
      l(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(c, d, p) : !0;
  };
};
function BN(t, o, r) {
  if (typeof t != "object")
    throw new Jn("options must be an object", Jn.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(t), l = a.length; l-- > 0; ) {
    var c = a[l], d = o[c];
    if (d) {
      var p = t[c], w = p === void 0 || d(p, c, t);
      if (w !== !0)
        throw new Jn("option " + c + " must be " + w, Jn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Jn("Unknown option " + c, Jn.ERR_BAD_OPTION);
  }
}
var IN = {
  assertOptions: BN,
  validators: Gc
}, Mm = De, DN = wm, af = uN, sf = CN, Xa = ym, ON = Rm, Zm = IN, Zr = Zm.validators;
function jr(t) {
  this.defaults = t, this.interceptors = {
    request: new af(),
    response: new af()
  };
}
jr.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Xa(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && Zm.assertOptions(a, {
    silentJSONParsing: Zr.transitional(Zr.boolean),
    forcedJSONParsing: Zr.transitional(Zr.boolean),
    clarifyTimeoutError: Zr.transitional(Zr.boolean)
  }, !1);
  var l = [], c = !0;
  this.interceptors.request.forEach(function(F) {
    typeof F.runWhen == "function" && F.runWhen(r) === !1 || (c = c && F.synchronous, l.unshift(F.fulfilled, F.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(F) {
    d.push(F.fulfilled, F.rejected);
  });
  var p;
  if (!c) {
    var w = [sf, void 0];
    for (Array.prototype.unshift.apply(w, l), w = w.concat(d), p = Promise.resolve(r); w.length; )
      p = p.then(w.shift(), w.shift());
    return p;
  }
  for (var V = r; l.length; ) {
    var g = l.shift(), R = l.shift();
    try {
      V = g(V);
    } catch (y) {
      R(y);
      break;
    }
  }
  try {
    p = sf(V);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; d.length; )
    p = p.then(d.shift(), d.shift());
  return p;
};
jr.prototype.getUri = function(o) {
  o = Xa(this.defaults, o);
  var r = ON(o.baseURL, o.url);
  return DN(r, o.params, o.paramsSerializer);
};
Mm.forEach(["delete", "get", "head", "options"], function(o) {
  jr.prototype[o] = function(r, a) {
    return this.request(Xa(a || {}, {
      method: o,
      url: r,
      data: (a || {}).data
    }));
  };
});
Mm.forEach(["post", "put", "patch"], function(o) {
  function r(a) {
    return function(c, d, p) {
      return this.request(Xa(p || {}, {
        method: o,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  jr.prototype[o] = r(), jr.prototype[o + "Form"] = r(!0);
});
var QN = jr, Ql, lf;
function _N() {
  if (lf)
    return Ql;
  lf = 1;
  var t = Pa();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(d) {
      a = d;
    });
    var l = this;
    this.promise.then(function(c) {
      if (!!l._listeners) {
        var d, p = l._listeners.length;
        for (d = 0; d < p; d++)
          l._listeners[d](c);
        l._listeners = null;
      }
    }), this.promise.then = function(c) {
      var d, p = new Promise(function(w) {
        l.subscribe(w), d = w;
      }).then(c);
      return p.cancel = function() {
        l.unsubscribe(d);
      }, p;
    }, r(function(d) {
      l.reason || (l.reason = new t(d), a(l.reason));
    });
  }
  return o.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, o.prototype.subscribe = function(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }, o.prototype.unsubscribe = function(a) {
    if (!!this._listeners) {
      var l = this._listeners.indexOf(a);
      l !== -1 && this._listeners.splice(l, 1);
    }
  }, o.source = function() {
    var a, l = new o(function(d) {
      a = d;
    });
    return {
      token: l,
      cancel: a
    };
  }, Ql = o, Ql;
}
var _l, cf;
function zN() {
  return cf || (cf = 1, _l = function(o) {
    return function(a) {
      return o.apply(null, a);
    };
  }), _l;
}
var zl, uf;
function GN() {
  if (uf)
    return zl;
  uf = 1;
  var t = De;
  return zl = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, zl;
}
var df = De, YN = fm, Za = QN, HN = ym, PN = zc;
function bm(t) {
  var o = new Za(t), r = YN(Za.prototype.request, o);
  return df.extend(r, Za.prototype, o), df.extend(r, o), r.create = function(l) {
    return bm(HN(t, l));
  }, r;
}
var ot = bm(PN);
ot.Axios = Za;
ot.CanceledError = Pa();
ot.CancelToken = _N();
ot.isCancel = Nm();
ot.VERSION = km().version;
ot.toFormData = Um;
ot.AxiosError = $r;
ot.Cancel = ot.CanceledError;
ot.all = function(o) {
  return Promise.all(o);
};
ot.spread = zN();
ot.isAxiosError = GN();
Bc.exports = ot;
Bc.exports.default = ot;
(function(t) {
  t.exports = Bc.exports;
})(hm);
const Jm = /* @__PURE__ */ QR(hm.exports), An = Jm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Wn = Jm.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var Ze = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(t, o) {
  (function() {
    var r, a = "4.17.21", l = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", p = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", V = 500, g = "__lodash_placeholder__", R = 1, y = 2, F = 4, E = 1, I = 2, C = 1, A = 2, Q = 4, O = 8, H = 16, k = 32, W = 64, x = 128, z = 256, de = 512, he = 30, ve = "...", Ve = 800, ge = 16, ke = 1, ce = 2, We = 3, Ce = 1 / 0, He = 9007199254740991, no = 17976931348623157e292, pi = 0 / 0, _t = 4294967295, Qw = _t - 1, _w = _t >>> 1, zw = [
      ["ary", x],
      ["bind", C],
      ["bindKey", A],
      ["curry", O],
      ["curryRight", H],
      ["flip", de],
      ["partial", k],
      ["partialRight", W],
      ["rearg", z]
    ], ur = "[object Arguments]", mi = "[object Array]", Gw = "[object AsyncFunction]", ro = "[object Boolean]", oo = "[object Date]", Yw = "[object DOMException]", wi = "[object Error]", vi = "[object Function]", du = "[object GeneratorFunction]", Et = "[object Map]", io = "[object Number]", Hw = "[object Null]", $t = "[object Object]", hu = "[object Promise]", Pw = "[object Proxy]", ao = "[object RegExp]", St = "[object Set]", so = "[object String]", Vi = "[object Symbol]", jw = "[object Undefined]", lo = "[object WeakMap]", Xw = "[object WeakSet]", co = "[object ArrayBuffer]", dr = "[object DataView]", ls = "[object Float32Array]", cs = "[object Float64Array]", us = "[object Int8Array]", ds = "[object Int16Array]", hs = "[object Int32Array]", fs = "[object Uint8Array]", ps = "[object Uint8ClampedArray]", ms = "[object Uint16Array]", ws = "[object Uint32Array]", Lw = /\b__p \+= '';/g, $w = /\b(__p \+=) '' \+/g, qw = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fu = /&(?:amp|lt|gt|quot|#39);/g, pu = /[&<>"']/g, Kw = RegExp(fu.source), e1 = RegExp(pu.source), t1 = /<%-([\s\S]+?)%>/g, n1 = /<%([\s\S]+?)%>/g, mu = /<%=([\s\S]+?)%>/g, r1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o1 = /^\w*$/, i1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, vs = /[\\^$.*+?()[\]{}|]/g, a1 = RegExp(vs.source), Vs = /^\s+/, s1 = /\s/, l1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, c1 = /\{\n\/\* \[wrapped with (.+)\] \*/, u1 = /,? & /, d1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, h1 = /[()=,{}\[\]\/\s]/, f1 = /\\(\\)?/g, p1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, wu = /\w*$/, m1 = /^[-+]0x[0-9a-f]+$/i, w1 = /^0b[01]+$/i, v1 = /^\[object .+?Constructor\]$/, V1 = /^0o[0-7]+$/i, T1 = /^(?:0|[1-9]\d*)$/, g1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ti = /($^)/, U1 = /['\n\r\u2028\u2029\\]/g, gi = "\\ud800-\\udfff", R1 = "\\u0300-\\u036f", N1 = "\\ufe20-\\ufe2f", y1 = "\\u20d0-\\u20ff", vu = R1 + N1 + y1, Vu = "\\u2700-\\u27bf", Tu = "a-z\\xdf-\\xf6\\xf8-\\xff", k1 = "\\xac\\xb1\\xd7\\xf7", M1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Z1 = "\\u2000-\\u206f", b1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", gu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Uu = "\\ufe0e\\ufe0f", Ru = k1 + M1 + Z1 + b1, Ts = "['\u2019]", J1 = "[" + gi + "]", Nu = "[" + Ru + "]", Ui = "[" + vu + "]", yu = "\\d+", E1 = "[" + Vu + "]", ku = "[" + Tu + "]", Mu = "[^" + gi + Ru + yu + Vu + Tu + gu + "]", gs = "\\ud83c[\\udffb-\\udfff]", S1 = "(?:" + Ui + "|" + gs + ")", Zu = "[^" + gi + "]", Us = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rs = "[\\ud800-\\udbff][\\udc00-\\udfff]", hr = "[" + gu + "]", bu = "\\u200d", Ju = "(?:" + ku + "|" + Mu + ")", F1 = "(?:" + hr + "|" + Mu + ")", Eu = "(?:" + Ts + "(?:d|ll|m|re|s|t|ve))?", Su = "(?:" + Ts + "(?:D|LL|M|RE|S|T|VE))?", Fu = S1 + "?", Au = "[" + Uu + "]?", A1 = "(?:" + bu + "(?:" + [Zu, Us, Rs].join("|") + ")" + Au + Fu + ")*", W1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", C1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Wu = Au + Fu + A1, x1 = "(?:" + [E1, Us, Rs].join("|") + ")" + Wu, B1 = "(?:" + [Zu + Ui + "?", Ui, Us, Rs, J1].join("|") + ")", I1 = RegExp(Ts, "g"), D1 = RegExp(Ui, "g"), Ns = RegExp(gs + "(?=" + gs + ")|" + B1 + Wu, "g"), O1 = RegExp([
      hr + "?" + ku + "+" + Eu + "(?=" + [Nu, hr, "$"].join("|") + ")",
      F1 + "+" + Su + "(?=" + [Nu, hr + Ju, "$"].join("|") + ")",
      hr + "?" + Ju + "+" + Eu,
      hr + "+" + Su,
      C1,
      W1,
      yu,
      x1
    ].join("|"), "g"), Q1 = RegExp("[" + bu + gi + vu + Uu + "]"), _1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, z1 = [
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
      "setTimeout"
    ], G1 = -1, pe = {};
    pe[ls] = pe[cs] = pe[us] = pe[ds] = pe[hs] = pe[fs] = pe[ps] = pe[ms] = pe[ws] = !0, pe[ur] = pe[mi] = pe[co] = pe[ro] = pe[dr] = pe[oo] = pe[wi] = pe[vi] = pe[Et] = pe[io] = pe[$t] = pe[ao] = pe[St] = pe[so] = pe[lo] = !1;
    var fe = {};
    fe[ur] = fe[mi] = fe[co] = fe[dr] = fe[ro] = fe[oo] = fe[ls] = fe[cs] = fe[us] = fe[ds] = fe[hs] = fe[Et] = fe[io] = fe[$t] = fe[ao] = fe[St] = fe[so] = fe[Vi] = fe[fs] = fe[ps] = fe[ms] = fe[ws] = !0, fe[wi] = fe[vi] = fe[lo] = !1;
    var Y1 = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, H1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, P1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, j1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, X1 = parseFloat, L1 = parseInt, Cu = typeof Mo == "object" && Mo && Mo.Object === Object && Mo, $1 = typeof self == "object" && self && self.Object === Object && self, xe = Cu || $1 || Function("return this")(), ys = o && !o.nodeType && o, Bn = ys && !0 && t && !t.nodeType && t, xu = Bn && Bn.exports === ys, ks = xu && Cu.process, Vt = function() {
      try {
        var T = Bn && Bn.require && Bn.require("util").types;
        return T || ks && ks.binding && ks.binding("util");
      } catch {
      }
    }(), Bu = Vt && Vt.isArrayBuffer, Iu = Vt && Vt.isDate, Du = Vt && Vt.isMap, Ou = Vt && Vt.isRegExp, Qu = Vt && Vt.isSet, _u = Vt && Vt.isTypedArray;
    function it(T, M, N) {
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
    function q1(T, M, N, B) {
      for (var P = -1, re = T == null ? 0 : T.length; ++P < re; ) {
        var be = T[P];
        M(B, be, N(be), T);
      }
      return B;
    }
    function Tt(T, M) {
      for (var N = -1, B = T == null ? 0 : T.length; ++N < B && M(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function K1(T, M) {
      for (var N = T == null ? 0 : T.length; N-- && M(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function zu(T, M) {
      for (var N = -1, B = T == null ? 0 : T.length; ++N < B; )
        if (!M(T[N], N, T))
          return !1;
      return !0;
    }
    function wn(T, M) {
      for (var N = -1, B = T == null ? 0 : T.length, P = 0, re = []; ++N < B; ) {
        var be = T[N];
        M(be, N, T) && (re[P++] = be);
      }
      return re;
    }
    function Ri(T, M) {
      var N = T == null ? 0 : T.length;
      return !!N && fr(T, M, 0) > -1;
    }
    function Ms(T, M, N) {
      for (var B = -1, P = T == null ? 0 : T.length; ++B < P; )
        if (N(M, T[B]))
          return !0;
      return !1;
    }
    function me(T, M) {
      for (var N = -1, B = T == null ? 0 : T.length, P = Array(B); ++N < B; )
        P[N] = M(T[N], N, T);
      return P;
    }
    function vn(T, M) {
      for (var N = -1, B = M.length, P = T.length; ++N < B; )
        T[P + N] = M[N];
      return T;
    }
    function Zs(T, M, N, B) {
      var P = -1, re = T == null ? 0 : T.length;
      for (B && re && (N = T[++P]); ++P < re; )
        N = M(N, T[P], P, T);
      return N;
    }
    function ev(T, M, N, B) {
      var P = T == null ? 0 : T.length;
      for (B && P && (N = T[--P]); P--; )
        N = M(N, T[P], P, T);
      return N;
    }
    function bs(T, M) {
      for (var N = -1, B = T == null ? 0 : T.length; ++N < B; )
        if (M(T[N], N, T))
          return !0;
      return !1;
    }
    var tv = Js("length");
    function nv(T) {
      return T.split("");
    }
    function rv(T) {
      return T.match(d1) || [];
    }
    function Gu(T, M, N) {
      var B;
      return N(T, function(P, re, be) {
        if (M(P, re, be))
          return B = re, !1;
      }), B;
    }
    function Ni(T, M, N, B) {
      for (var P = T.length, re = N + (B ? 1 : -1); B ? re-- : ++re < P; )
        if (M(T[re], re, T))
          return re;
      return -1;
    }
    function fr(T, M, N) {
      return M === M ? mv(T, M, N) : Ni(T, Yu, N);
    }
    function ov(T, M, N, B) {
      for (var P = N - 1, re = T.length; ++P < re; )
        if (B(T[P], M))
          return P;
      return -1;
    }
    function Yu(T) {
      return T !== T;
    }
    function Hu(T, M) {
      var N = T == null ? 0 : T.length;
      return N ? Ss(T, M) / N : pi;
    }
    function Js(T) {
      return function(M) {
        return M == null ? r : M[T];
      };
    }
    function Es(T) {
      return function(M) {
        return T == null ? r : T[M];
      };
    }
    function Pu(T, M, N, B, P) {
      return P(T, function(re, be, ue) {
        N = B ? (B = !1, re) : M(N, re, be, ue);
      }), N;
    }
    function iv(T, M) {
      var N = T.length;
      for (T.sort(M); N--; )
        T[N] = T[N].value;
      return T;
    }
    function Ss(T, M) {
      for (var N, B = -1, P = T.length; ++B < P; ) {
        var re = M(T[B]);
        re !== r && (N = N === r ? re : N + re);
      }
      return N;
    }
    function Fs(T, M) {
      for (var N = -1, B = Array(T); ++N < T; )
        B[N] = M(N);
      return B;
    }
    function av(T, M) {
      return me(M, function(N) {
        return [N, T[N]];
      });
    }
    function ju(T) {
      return T && T.slice(0, qu(T) + 1).replace(Vs, "");
    }
    function at(T) {
      return function(M) {
        return T(M);
      };
    }
    function As(T, M) {
      return me(M, function(N) {
        return T[N];
      });
    }
    function uo(T, M) {
      return T.has(M);
    }
    function Xu(T, M) {
      for (var N = -1, B = T.length; ++N < B && fr(M, T[N], 0) > -1; )
        ;
      return N;
    }
    function Lu(T, M) {
      for (var N = T.length; N-- && fr(M, T[N], 0) > -1; )
        ;
      return N;
    }
    function sv(T, M) {
      for (var N = T.length, B = 0; N--; )
        T[N] === M && ++B;
      return B;
    }
    var lv = Es(Y1), cv = Es(H1);
    function uv(T) {
      return "\\" + j1[T];
    }
    function dv(T, M) {
      return T == null ? r : T[M];
    }
    function pr(T) {
      return Q1.test(T);
    }
    function hv(T) {
      return _1.test(T);
    }
    function fv(T) {
      for (var M, N = []; !(M = T.next()).done; )
        N.push(M.value);
      return N;
    }
    function Ws(T) {
      var M = -1, N = Array(T.size);
      return T.forEach(function(B, P) {
        N[++M] = [P, B];
      }), N;
    }
    function $u(T, M) {
      return function(N) {
        return T(M(N));
      };
    }
    function Vn(T, M) {
      for (var N = -1, B = T.length, P = 0, re = []; ++N < B; ) {
        var be = T[N];
        (be === M || be === g) && (T[N] = g, re[P++] = N);
      }
      return re;
    }
    function yi(T) {
      var M = -1, N = Array(T.size);
      return T.forEach(function(B) {
        N[++M] = B;
      }), N;
    }
    function pv(T) {
      var M = -1, N = Array(T.size);
      return T.forEach(function(B) {
        N[++M] = [B, B];
      }), N;
    }
    function mv(T, M, N) {
      for (var B = N - 1, P = T.length; ++B < P; )
        if (T[B] === M)
          return B;
      return -1;
    }
    function wv(T, M, N) {
      for (var B = N + 1; B--; )
        if (T[B] === M)
          return B;
      return B;
    }
    function mr(T) {
      return pr(T) ? Vv(T) : tv(T);
    }
    function Ft(T) {
      return pr(T) ? Tv(T) : nv(T);
    }
    function qu(T) {
      for (var M = T.length; M-- && s1.test(T.charAt(M)); )
        ;
      return M;
    }
    var vv = Es(P1);
    function Vv(T) {
      for (var M = Ns.lastIndex = 0; Ns.test(T); )
        ++M;
      return M;
    }
    function Tv(T) {
      return T.match(Ns) || [];
    }
    function gv(T) {
      return T.match(O1) || [];
    }
    var Uv = function T(M) {
      M = M == null ? xe : wr.defaults(xe.Object(), M, wr.pick(xe, z1));
      var N = M.Array, B = M.Date, P = M.Error, re = M.Function, be = M.Math, ue = M.Object, Cs = M.RegExp, Rv = M.String, gt = M.TypeError, ki = N.prototype, Nv = re.prototype, vr = ue.prototype, Mi = M["__core-js_shared__"], Zi = Nv.toString, ae = vr.hasOwnProperty, yv = 0, Ku = function() {
        var e = /[^.]+$/.exec(Mi && Mi.keys && Mi.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), bi = vr.toString, kv = Zi.call(ue), Mv = xe._, Zv = Cs(
        "^" + Zi.call(ae).replace(vs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ji = xu ? M.Buffer : r, Tn = M.Symbol, Ei = M.Uint8Array, ed = Ji ? Ji.allocUnsafe : r, Si = $u(ue.getPrototypeOf, ue), td = ue.create, nd = vr.propertyIsEnumerable, Fi = ki.splice, rd = Tn ? Tn.isConcatSpreadable : r, ho = Tn ? Tn.iterator : r, In = Tn ? Tn.toStringTag : r, Ai = function() {
        try {
          var e = zn(ue, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), bv = M.clearTimeout !== xe.clearTimeout && M.clearTimeout, Jv = B && B.now !== xe.Date.now && B.now, Ev = M.setTimeout !== xe.setTimeout && M.setTimeout, Wi = be.ceil, Ci = be.floor, xs = ue.getOwnPropertySymbols, Sv = Ji ? Ji.isBuffer : r, od = M.isFinite, Fv = ki.join, Av = $u(ue.keys, ue), Je = be.max, Qe = be.min, Wv = B.now, Cv = M.parseInt, id = be.random, xv = ki.reverse, Bs = zn(M, "DataView"), fo = zn(M, "Map"), Is = zn(M, "Promise"), Vr = zn(M, "Set"), po = zn(M, "WeakMap"), mo = zn(ue, "create"), xi = po && new po(), Tr = {}, Bv = Gn(Bs), Iv = Gn(fo), Dv = Gn(Is), Ov = Gn(Vr), Qv = Gn(po), Bi = Tn ? Tn.prototype : r, wo = Bi ? Bi.valueOf : r, ad = Bi ? Bi.toString : r;
      function h(e) {
        if (Te(e) && !j(e) && !(e instanceof te)) {
          if (e instanceof Ut)
            return e;
          if (ae.call(e, "__wrapped__"))
            return sh(e);
        }
        return new Ut(e);
      }
      var gr = function() {
        function e() {
        }
        return function(n) {
          if (!we(n))
            return {};
          if (td)
            return td(n);
          e.prototype = n;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function Ii() {
      }
      function Ut(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: t1,
        evaluate: n1,
        interpolate: mu,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Ii.prototype, h.prototype.constructor = h, Ut.prototype = gr(Ii.prototype), Ut.prototype.constructor = Ut;
      function te(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _t, this.__views__ = [];
      }
      function _v() {
        var e = new te(this.__wrapped__);
        return e.__actions__ = $e(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = $e(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = $e(this.__views__), e;
      }
      function zv() {
        if (this.__filtered__) {
          var e = new te(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Gv() {
        var e = this.__wrapped__.value(), n = this.__dir__, i = j(e), s = n < 0, u = i ? e.length : 0, f = n0(0, u, this.__views__), m = f.start, v = f.end, U = v - m, Z = s ? v : m - 1, b = this.__iteratees__, J = b.length, S = 0, D = Qe(U, this.__takeCount__);
        if (!i || !s && u == U && D == U)
          return Ed(e, this.__actions__);
        var G = [];
        e:
          for (; U-- && S < D; ) {
            Z += n;
            for (var L = -1, Y = e[Z]; ++L < J; ) {
              var ee = b[L], ne = ee.iteratee, ct = ee.type, Xe = ne(Y);
              if (ct == ce)
                Y = Xe;
              else if (!Xe) {
                if (ct == ke)
                  continue e;
                break e;
              }
            }
            G[S++] = Y;
          }
        return G;
      }
      te.prototype = gr(Ii.prototype), te.prototype.constructor = te;
      function Dn(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function Yv() {
        this.__data__ = mo ? mo(null) : {}, this.size = 0;
      }
      function Hv(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Pv(e) {
        var n = this.__data__;
        if (mo) {
          var i = n[e];
          return i === w ? r : i;
        }
        return ae.call(n, e) ? n[e] : r;
      }
      function jv(e) {
        var n = this.__data__;
        return mo ? n[e] !== r : ae.call(n, e);
      }
      function Xv(e, n) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = mo && n === r ? w : n, this;
      }
      Dn.prototype.clear = Yv, Dn.prototype.delete = Hv, Dn.prototype.get = Pv, Dn.prototype.has = jv, Dn.prototype.set = Xv;
      function qt(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function Lv() {
        this.__data__ = [], this.size = 0;
      }
      function $v(e) {
        var n = this.__data__, i = Di(n, e);
        if (i < 0)
          return !1;
        var s = n.length - 1;
        return i == s ? n.pop() : Fi.call(n, i, 1), --this.size, !0;
      }
      function qv(e) {
        var n = this.__data__, i = Di(n, e);
        return i < 0 ? r : n[i][1];
      }
      function Kv(e) {
        return Di(this.__data__, e) > -1;
      }
      function eV(e, n) {
        var i = this.__data__, s = Di(i, e);
        return s < 0 ? (++this.size, i.push([e, n])) : i[s][1] = n, this;
      }
      qt.prototype.clear = Lv, qt.prototype.delete = $v, qt.prototype.get = qv, qt.prototype.has = Kv, qt.prototype.set = eV;
      function Kt(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++n < i; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function tV() {
        this.size = 0, this.__data__ = {
          hash: new Dn(),
          map: new (fo || qt)(),
          string: new Dn()
        };
      }
      function nV(e) {
        var n = $i(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function rV(e) {
        return $i(this, e).get(e);
      }
      function oV(e) {
        return $i(this, e).has(e);
      }
      function iV(e, n) {
        var i = $i(this, e), s = i.size;
        return i.set(e, n), this.size += i.size == s ? 0 : 1, this;
      }
      Kt.prototype.clear = tV, Kt.prototype.delete = nV, Kt.prototype.get = rV, Kt.prototype.has = oV, Kt.prototype.set = iV;
      function On(e) {
        var n = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new Kt(); ++n < i; )
          this.add(e[n]);
      }
      function aV(e) {
        return this.__data__.set(e, w), this;
      }
      function sV(e) {
        return this.__data__.has(e);
      }
      On.prototype.add = On.prototype.push = aV, On.prototype.has = sV;
      function At(e) {
        var n = this.__data__ = new qt(e);
        this.size = n.size;
      }
      function lV() {
        this.__data__ = new qt(), this.size = 0;
      }
      function cV(e) {
        var n = this.__data__, i = n.delete(e);
        return this.size = n.size, i;
      }
      function uV(e) {
        return this.__data__.get(e);
      }
      function dV(e) {
        return this.__data__.has(e);
      }
      function hV(e, n) {
        var i = this.__data__;
        if (i instanceof qt) {
          var s = i.__data__;
          if (!fo || s.length < l - 1)
            return s.push([e, n]), this.size = ++i.size, this;
          i = this.__data__ = new Kt(s);
        }
        return i.set(e, n), this.size = i.size, this;
      }
      At.prototype.clear = lV, At.prototype.delete = cV, At.prototype.get = uV, At.prototype.has = dV, At.prototype.set = hV;
      function sd(e, n) {
        var i = j(e), s = !i && Yn(e), u = !i && !s && yn(e), f = !i && !s && !u && yr(e), m = i || s || u || f, v = m ? Fs(e.length, Rv) : [], U = v.length;
        for (var Z in e)
          (n || ae.call(e, Z)) && !(m && (Z == "length" || u && (Z == "offset" || Z == "parent") || f && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || rn(Z, U))) && v.push(Z);
        return v;
      }
      function ld(e) {
        var n = e.length;
        return n ? e[Xs(0, n - 1)] : r;
      }
      function fV(e, n) {
        return qi($e(e), Qn(n, 0, e.length));
      }
      function pV(e) {
        return qi($e(e));
      }
      function Ds(e, n, i) {
        (i !== r && !Wt(e[n], i) || i === r && !(n in e)) && en(e, n, i);
      }
      function vo(e, n, i) {
        var s = e[n];
        (!(ae.call(e, n) && Wt(s, i)) || i === r && !(n in e)) && en(e, n, i);
      }
      function Di(e, n) {
        for (var i = e.length; i--; )
          if (Wt(e[i][0], n))
            return i;
        return -1;
      }
      function mV(e, n, i, s) {
        return gn(e, function(u, f, m) {
          n(s, u, i(u), m);
        }), s;
      }
      function cd(e, n) {
        return e && Gt(n, Se(n), e);
      }
      function wV(e, n) {
        return e && Gt(n, Ke(n), e);
      }
      function en(e, n, i) {
        n == "__proto__" && Ai ? Ai(e, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[n] = i;
      }
      function Os(e, n) {
        for (var i = -1, s = n.length, u = N(s), f = e == null; ++i < s; )
          u[i] = f ? r : gl(e, n[i]);
        return u;
      }
      function Qn(e, n, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), n !== r && (e = e >= n ? e : n)), e;
      }
      function Rt(e, n, i, s, u, f) {
        var m, v = n & R, U = n & y, Z = n & F;
        if (i && (m = u ? i(e, s, u, f) : i(e)), m !== r)
          return m;
        if (!we(e))
          return e;
        var b = j(e);
        if (b) {
          if (m = o0(e), !v)
            return $e(e, m);
        } else {
          var J = _e(e), S = J == vi || J == du;
          if (yn(e))
            return Ad(e, v);
          if (J == $t || J == ur || S && !u) {
            if (m = U || S ? {} : qd(e), !v)
              return U ? PV(e, wV(m, e)) : HV(e, cd(m, e));
          } else {
            if (!fe[J])
              return u ? e : {};
            m = i0(e, J, v);
          }
        }
        f || (f = new At());
        var D = f.get(e);
        if (D)
          return D;
        f.set(e, m), Zh(e) ? e.forEach(function(Y) {
          m.add(Rt(Y, n, i, Y, e, f));
        }) : kh(e) && e.forEach(function(Y, ee) {
          m.set(ee, Rt(Y, n, i, ee, e, f));
        });
        var G = Z ? U ? al : il : U ? Ke : Se, L = b ? r : G(e);
        return Tt(L || e, function(Y, ee) {
          L && (ee = Y, Y = e[ee]), vo(m, ee, Rt(Y, n, i, ee, e, f));
        }), m;
      }
      function vV(e) {
        var n = Se(e);
        return function(i) {
          return ud(i, e, n);
        };
      }
      function ud(e, n, i) {
        var s = i.length;
        if (e == null)
          return !s;
        for (e = ue(e); s--; ) {
          var u = i[s], f = n[u], m = e[u];
          if (m === r && !(u in e) || !f(m))
            return !1;
        }
        return !0;
      }
      function dd(e, n, i) {
        if (typeof e != "function")
          throw new gt(d);
        return yo(function() {
          e.apply(r, i);
        }, n);
      }
      function Vo(e, n, i, s) {
        var u = -1, f = Ri, m = !0, v = e.length, U = [], Z = n.length;
        if (!v)
          return U;
        i && (n = me(n, at(i))), s ? (f = Ms, m = !1) : n.length >= l && (f = uo, m = !1, n = new On(n));
        e:
          for (; ++u < v; ) {
            var b = e[u], J = i == null ? b : i(b);
            if (b = s || b !== 0 ? b : 0, m && J === J) {
              for (var S = Z; S--; )
                if (n[S] === J)
                  continue e;
              U.push(b);
            } else
              f(n, J, s) || U.push(b);
          }
        return U;
      }
      var gn = Id(zt), hd = Id(_s, !0);
      function VV(e, n) {
        var i = !0;
        return gn(e, function(s, u, f) {
          return i = !!n(s, u, f), i;
        }), i;
      }
      function Oi(e, n, i) {
        for (var s = -1, u = e.length; ++s < u; ) {
          var f = e[s], m = n(f);
          if (m != null && (v === r ? m === m && !lt(m) : i(m, v)))
            var v = m, U = f;
        }
        return U;
      }
      function TV(e, n, i, s) {
        var u = e.length;
        for (i = X(i), i < 0 && (i = -i > u ? 0 : u + i), s = s === r || s > u ? u : X(s), s < 0 && (s += u), s = i > s ? 0 : Jh(s); i < s; )
          e[i++] = n;
        return e;
      }
      function fd(e, n) {
        var i = [];
        return gn(e, function(s, u, f) {
          n(s, u, f) && i.push(s);
        }), i;
      }
      function Be(e, n, i, s, u) {
        var f = -1, m = e.length;
        for (i || (i = s0), u || (u = []); ++f < m; ) {
          var v = e[f];
          n > 0 && i(v) ? n > 1 ? Be(v, n - 1, i, s, u) : vn(u, v) : s || (u[u.length] = v);
        }
        return u;
      }
      var Qs = Dd(), pd = Dd(!0);
      function zt(e, n) {
        return e && Qs(e, n, Se);
      }
      function _s(e, n) {
        return e && pd(e, n, Se);
      }
      function Qi(e, n) {
        return wn(n, function(i) {
          return on(e[i]);
        });
      }
      function _n(e, n) {
        n = Rn(n, e);
        for (var i = 0, s = n.length; e != null && i < s; )
          e = e[Yt(n[i++])];
        return i && i == s ? e : r;
      }
      function md(e, n, i) {
        var s = n(e);
        return j(e) ? s : vn(s, i(e));
      }
      function Pe(e) {
        return e == null ? e === r ? jw : Hw : In && In in ue(e) ? t0(e) : p0(e);
      }
      function zs(e, n) {
        return e > n;
      }
      function gV(e, n) {
        return e != null && ae.call(e, n);
      }
      function UV(e, n) {
        return e != null && n in ue(e);
      }
      function RV(e, n, i) {
        return e >= Qe(n, i) && e < Je(n, i);
      }
      function Gs(e, n, i) {
        for (var s = i ? Ms : Ri, u = e[0].length, f = e.length, m = f, v = N(f), U = 1 / 0, Z = []; m--; ) {
          var b = e[m];
          m && n && (b = me(b, at(n))), U = Qe(b.length, U), v[m] = !i && (n || u >= 120 && b.length >= 120) ? new On(m && b) : r;
        }
        b = e[0];
        var J = -1, S = v[0];
        e:
          for (; ++J < u && Z.length < U; ) {
            var D = b[J], G = n ? n(D) : D;
            if (D = i || D !== 0 ? D : 0, !(S ? uo(S, G) : s(Z, G, i))) {
              for (m = f; --m; ) {
                var L = v[m];
                if (!(L ? uo(L, G) : s(e[m], G, i)))
                  continue e;
              }
              S && S.push(G), Z.push(D);
            }
          }
        return Z;
      }
      function NV(e, n, i, s) {
        return zt(e, function(u, f, m) {
          n(s, i(u), f, m);
        }), s;
      }
      function To(e, n, i) {
        n = Rn(n, e), e = nh(e, n);
        var s = e == null ? e : e[Yt(yt(n))];
        return s == null ? r : it(s, e, i);
      }
      function wd(e) {
        return Te(e) && Pe(e) == ur;
      }
      function yV(e) {
        return Te(e) && Pe(e) == co;
      }
      function kV(e) {
        return Te(e) && Pe(e) == oo;
      }
      function go(e, n, i, s, u) {
        return e === n ? !0 : e == null || n == null || !Te(e) && !Te(n) ? e !== e && n !== n : MV(e, n, i, s, go, u);
      }
      function MV(e, n, i, s, u, f) {
        var m = j(e), v = j(n), U = m ? mi : _e(e), Z = v ? mi : _e(n);
        U = U == ur ? $t : U, Z = Z == ur ? $t : Z;
        var b = U == $t, J = Z == $t, S = U == Z;
        if (S && yn(e)) {
          if (!yn(n))
            return !1;
          m = !0, b = !1;
        }
        if (S && !b)
          return f || (f = new At()), m || yr(e) ? Xd(e, n, i, s, u, f) : KV(e, n, U, i, s, u, f);
        if (!(i & E)) {
          var D = b && ae.call(e, "__wrapped__"), G = J && ae.call(n, "__wrapped__");
          if (D || G) {
            var L = D ? e.value() : e, Y = G ? n.value() : n;
            return f || (f = new At()), u(L, Y, i, s, f);
          }
        }
        return S ? (f || (f = new At()), e0(e, n, i, s, u, f)) : !1;
      }
      function ZV(e) {
        return Te(e) && _e(e) == Et;
      }
      function Ys(e, n, i, s) {
        var u = i.length, f = u, m = !s;
        if (e == null)
          return !f;
        for (e = ue(e); u--; ) {
          var v = i[u];
          if (m && v[2] ? v[1] !== e[v[0]] : !(v[0] in e))
            return !1;
        }
        for (; ++u < f; ) {
          v = i[u];
          var U = v[0], Z = e[U], b = v[1];
          if (m && v[2]) {
            if (Z === r && !(U in e))
              return !1;
          } else {
            var J = new At();
            if (s)
              var S = s(Z, b, U, e, n, J);
            if (!(S === r ? go(b, Z, E | I, s, J) : S))
              return !1;
          }
        }
        return !0;
      }
      function vd(e) {
        if (!we(e) || c0(e))
          return !1;
        var n = on(e) ? Zv : v1;
        return n.test(Gn(e));
      }
      function bV(e) {
        return Te(e) && Pe(e) == ao;
      }
      function JV(e) {
        return Te(e) && _e(e) == St;
      }
      function EV(e) {
        return Te(e) && oa(e.length) && !!pe[Pe(e)];
      }
      function Vd(e) {
        return typeof e == "function" ? e : e == null ? et : typeof e == "object" ? j(e) ? Ud(e[0], e[1]) : gd(e) : Oh(e);
      }
      function Hs(e) {
        if (!No(e))
          return Av(e);
        var n = [];
        for (var i in ue(e))
          ae.call(e, i) && i != "constructor" && n.push(i);
        return n;
      }
      function SV(e) {
        if (!we(e))
          return f0(e);
        var n = No(e), i = [];
        for (var s in e)
          s == "constructor" && (n || !ae.call(e, s)) || i.push(s);
        return i;
      }
      function Ps(e, n) {
        return e < n;
      }
      function Td(e, n) {
        var i = -1, s = qe(e) ? N(e.length) : [];
        return gn(e, function(u, f, m) {
          s[++i] = n(u, f, m);
        }), s;
      }
      function gd(e) {
        var n = ll(e);
        return n.length == 1 && n[0][2] ? eh(n[0][0], n[0][1]) : function(i) {
          return i === e || Ys(i, e, n);
        };
      }
      function Ud(e, n) {
        return ul(e) && Kd(n) ? eh(Yt(e), n) : function(i) {
          var s = gl(i, e);
          return s === r && s === n ? Ul(i, e) : go(n, s, E | I);
        };
      }
      function _i(e, n, i, s, u) {
        e !== n && Qs(n, function(f, m) {
          if (u || (u = new At()), we(f))
            FV(e, n, m, i, _i, s, u);
          else {
            var v = s ? s(hl(e, m), f, m + "", e, n, u) : r;
            v === r && (v = f), Ds(e, m, v);
          }
        }, Ke);
      }
      function FV(e, n, i, s, u, f, m) {
        var v = hl(e, i), U = hl(n, i), Z = m.get(U);
        if (Z) {
          Ds(e, i, Z);
          return;
        }
        var b = f ? f(v, U, i + "", e, n, m) : r, J = b === r;
        if (J) {
          var S = j(U), D = !S && yn(U), G = !S && !D && yr(U);
          b = U, S || D || G ? j(v) ? b = v : Ue(v) ? b = $e(v) : D ? (J = !1, b = Ad(U, !0)) : G ? (J = !1, b = Wd(U, !0)) : b = [] : ko(U) || Yn(U) ? (b = v, Yn(v) ? b = Eh(v) : (!we(v) || on(v)) && (b = qd(U))) : J = !1;
        }
        J && (m.set(U, b), u(b, U, s, f, m), m.delete(U)), Ds(e, i, b);
      }
      function Rd(e, n) {
        var i = e.length;
        if (!!i)
          return n += n < 0 ? i : 0, rn(n, i) ? e[n] : r;
      }
      function Nd(e, n, i) {
        n.length ? n = me(n, function(f) {
          return j(f) ? function(m) {
            return _n(m, f.length === 1 ? f[0] : f);
          } : f;
        }) : n = [et];
        var s = -1;
        n = me(n, at(_()));
        var u = Td(e, function(f, m, v) {
          var U = me(n, function(Z) {
            return Z(f);
          });
          return { criteria: U, index: ++s, value: f };
        });
        return iv(u, function(f, m) {
          return YV(f, m, i);
        });
      }
      function AV(e, n) {
        return yd(e, n, function(i, s) {
          return Ul(e, s);
        });
      }
      function yd(e, n, i) {
        for (var s = -1, u = n.length, f = {}; ++s < u; ) {
          var m = n[s], v = _n(e, m);
          i(v, m) && Uo(f, Rn(m, e), v);
        }
        return f;
      }
      function WV(e) {
        return function(n) {
          return _n(n, e);
        };
      }
      function js(e, n, i, s) {
        var u = s ? ov : fr, f = -1, m = n.length, v = e;
        for (e === n && (n = $e(n)), i && (v = me(e, at(i))); ++f < m; )
          for (var U = 0, Z = n[f], b = i ? i(Z) : Z; (U = u(v, b, U, s)) > -1; )
            v !== e && Fi.call(v, U, 1), Fi.call(e, U, 1);
        return e;
      }
      function kd(e, n) {
        for (var i = e ? n.length : 0, s = i - 1; i--; ) {
          var u = n[i];
          if (i == s || u !== f) {
            var f = u;
            rn(u) ? Fi.call(e, u, 1) : qs(e, u);
          }
        }
        return e;
      }
      function Xs(e, n) {
        return e + Ci(id() * (n - e + 1));
      }
      function CV(e, n, i, s) {
        for (var u = -1, f = Je(Wi((n - e) / (i || 1)), 0), m = N(f); f--; )
          m[s ? f : ++u] = e, e += i;
        return m;
      }
      function Ls(e, n) {
        var i = "";
        if (!e || n < 1 || n > He)
          return i;
        do
          n % 2 && (i += e), n = Ci(n / 2), n && (e += e);
        while (n);
        return i;
      }
      function $(e, n) {
        return fl(th(e, n, et), e + "");
      }
      function xV(e) {
        return ld(kr(e));
      }
      function BV(e, n) {
        var i = kr(e);
        return qi(i, Qn(n, 0, i.length));
      }
      function Uo(e, n, i, s) {
        if (!we(e))
          return e;
        n = Rn(n, e);
        for (var u = -1, f = n.length, m = f - 1, v = e; v != null && ++u < f; ) {
          var U = Yt(n[u]), Z = i;
          if (U === "__proto__" || U === "constructor" || U === "prototype")
            return e;
          if (u != m) {
            var b = v[U];
            Z = s ? s(b, U, v) : r, Z === r && (Z = we(b) ? b : rn(n[u + 1]) ? [] : {});
          }
          vo(v, U, Z), v = v[U];
        }
        return e;
      }
      var Md = xi ? function(e, n) {
        return xi.set(e, n), e;
      } : et, IV = Ai ? function(e, n) {
        return Ai(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Nl(n),
          writable: !0
        });
      } : et;
      function DV(e) {
        return qi(kr(e));
      }
      function Nt(e, n, i) {
        var s = -1, u = e.length;
        n < 0 && (n = -n > u ? 0 : u + n), i = i > u ? u : i, i < 0 && (i += u), u = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var f = N(u); ++s < u; )
          f[s] = e[s + n];
        return f;
      }
      function OV(e, n) {
        var i;
        return gn(e, function(s, u, f) {
          return i = n(s, u, f), !i;
        }), !!i;
      }
      function zi(e, n, i) {
        var s = 0, u = e == null ? s : e.length;
        if (typeof n == "number" && n === n && u <= _w) {
          for (; s < u; ) {
            var f = s + u >>> 1, m = e[f];
            m !== null && !lt(m) && (i ? m <= n : m < n) ? s = f + 1 : u = f;
          }
          return u;
        }
        return $s(e, n, et, i);
      }
      function $s(e, n, i, s) {
        var u = 0, f = e == null ? 0 : e.length;
        if (f === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, v = n === null, U = lt(n), Z = n === r; u < f; ) {
          var b = Ci((u + f) / 2), J = i(e[b]), S = J !== r, D = J === null, G = J === J, L = lt(J);
          if (m)
            var Y = s || G;
          else
            Z ? Y = G && (s || S) : v ? Y = G && S && (s || !D) : U ? Y = G && S && !D && (s || !L) : D || L ? Y = !1 : Y = s ? J <= n : J < n;
          Y ? u = b + 1 : f = b;
        }
        return Qe(f, Qw);
      }
      function Zd(e, n) {
        for (var i = -1, s = e.length, u = 0, f = []; ++i < s; ) {
          var m = e[i], v = n ? n(m) : m;
          if (!i || !Wt(v, U)) {
            var U = v;
            f[u++] = m === 0 ? 0 : m;
          }
        }
        return f;
      }
      function bd(e) {
        return typeof e == "number" ? e : lt(e) ? pi : +e;
      }
      function st(e) {
        if (typeof e == "string")
          return e;
        if (j(e))
          return me(e, st) + "";
        if (lt(e))
          return ad ? ad.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Ce ? "-0" : n;
      }
      function Un(e, n, i) {
        var s = -1, u = Ri, f = e.length, m = !0, v = [], U = v;
        if (i)
          m = !1, u = Ms;
        else if (f >= l) {
          var Z = n ? null : $V(e);
          if (Z)
            return yi(Z);
          m = !1, u = uo, U = new On();
        } else
          U = n ? [] : v;
        e:
          for (; ++s < f; ) {
            var b = e[s], J = n ? n(b) : b;
            if (b = i || b !== 0 ? b : 0, m && J === J) {
              for (var S = U.length; S--; )
                if (U[S] === J)
                  continue e;
              n && U.push(J), v.push(b);
            } else
              u(U, J, i) || (U !== v && U.push(J), v.push(b));
          }
        return v;
      }
      function qs(e, n) {
        return n = Rn(n, e), e = nh(e, n), e == null || delete e[Yt(yt(n))];
      }
      function Jd(e, n, i, s) {
        return Uo(e, n, i(_n(e, n)), s);
      }
      function Gi(e, n, i, s) {
        for (var u = e.length, f = s ? u : -1; (s ? f-- : ++f < u) && n(e[f], f, e); )
          ;
        return i ? Nt(e, s ? 0 : f, s ? f + 1 : u) : Nt(e, s ? f + 1 : 0, s ? u : f);
      }
      function Ed(e, n) {
        var i = e;
        return i instanceof te && (i = i.value()), Zs(n, function(s, u) {
          return u.func.apply(u.thisArg, vn([s], u.args));
        }, i);
      }
      function Ks(e, n, i) {
        var s = e.length;
        if (s < 2)
          return s ? Un(e[0]) : [];
        for (var u = -1, f = N(s); ++u < s; )
          for (var m = e[u], v = -1; ++v < s; )
            v != u && (f[u] = Vo(f[u] || m, e[v], n, i));
        return Un(Be(f, 1), n, i);
      }
      function Sd(e, n, i) {
        for (var s = -1, u = e.length, f = n.length, m = {}; ++s < u; ) {
          var v = s < f ? n[s] : r;
          i(m, e[s], v);
        }
        return m;
      }
      function el(e) {
        return Ue(e) ? e : [];
      }
      function tl(e) {
        return typeof e == "function" ? e : et;
      }
      function Rn(e, n) {
        return j(e) ? e : ul(e, n) ? [e] : ah(ie(e));
      }
      var QV = $;
      function Nn(e, n, i) {
        var s = e.length;
        return i = i === r ? s : i, !n && i >= s ? e : Nt(e, n, i);
      }
      var Fd = bv || function(e) {
        return xe.clearTimeout(e);
      };
      function Ad(e, n) {
        if (n)
          return e.slice();
        var i = e.length, s = ed ? ed(i) : new e.constructor(i);
        return e.copy(s), s;
      }
      function nl(e) {
        var n = new e.constructor(e.byteLength);
        return new Ei(n).set(new Ei(e)), n;
      }
      function _V(e, n) {
        var i = n ? nl(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function zV(e) {
        var n = new e.constructor(e.source, wu.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function GV(e) {
        return wo ? ue(wo.call(e)) : {};
      }
      function Wd(e, n) {
        var i = n ? nl(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function Cd(e, n) {
        if (e !== n) {
          var i = e !== r, s = e === null, u = e === e, f = lt(e), m = n !== r, v = n === null, U = n === n, Z = lt(n);
          if (!v && !Z && !f && e > n || f && m && U && !v && !Z || s && m && U || !i && U || !u)
            return 1;
          if (!s && !f && !Z && e < n || Z && i && u && !s && !f || v && i && u || !m && u || !U)
            return -1;
        }
        return 0;
      }
      function YV(e, n, i) {
        for (var s = -1, u = e.criteria, f = n.criteria, m = u.length, v = i.length; ++s < m; ) {
          var U = Cd(u[s], f[s]);
          if (U) {
            if (s >= v)
              return U;
            var Z = i[s];
            return U * (Z == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function xd(e, n, i, s) {
        for (var u = -1, f = e.length, m = i.length, v = -1, U = n.length, Z = Je(f - m, 0), b = N(U + Z), J = !s; ++v < U; )
          b[v] = n[v];
        for (; ++u < m; )
          (J || u < f) && (b[i[u]] = e[u]);
        for (; Z--; )
          b[v++] = e[u++];
        return b;
      }
      function Bd(e, n, i, s) {
        for (var u = -1, f = e.length, m = -1, v = i.length, U = -1, Z = n.length, b = Je(f - v, 0), J = N(b + Z), S = !s; ++u < b; )
          J[u] = e[u];
        for (var D = u; ++U < Z; )
          J[D + U] = n[U];
        for (; ++m < v; )
          (S || u < f) && (J[D + i[m]] = e[u++]);
        return J;
      }
      function $e(e, n) {
        var i = -1, s = e.length;
        for (n || (n = N(s)); ++i < s; )
          n[i] = e[i];
        return n;
      }
      function Gt(e, n, i, s) {
        var u = !i;
        i || (i = {});
        for (var f = -1, m = n.length; ++f < m; ) {
          var v = n[f], U = s ? s(i[v], e[v], v, i, e) : r;
          U === r && (U = e[v]), u ? en(i, v, U) : vo(i, v, U);
        }
        return i;
      }
      function HV(e, n) {
        return Gt(e, cl(e), n);
      }
      function PV(e, n) {
        return Gt(e, Ld(e), n);
      }
      function Yi(e, n) {
        return function(i, s) {
          var u = j(i) ? q1 : mV, f = n ? n() : {};
          return u(i, e, _(s, 2), f);
        };
      }
      function Ur(e) {
        return $(function(n, i) {
          var s = -1, u = i.length, f = u > 1 ? i[u - 1] : r, m = u > 2 ? i[2] : r;
          for (f = e.length > 3 && typeof f == "function" ? (u--, f) : r, m && je(i[0], i[1], m) && (f = u < 3 ? r : f, u = 1), n = ue(n); ++s < u; ) {
            var v = i[s];
            v && e(n, v, s, f);
          }
          return n;
        });
      }
      function Id(e, n) {
        return function(i, s) {
          if (i == null)
            return i;
          if (!qe(i))
            return e(i, s);
          for (var u = i.length, f = n ? u : -1, m = ue(i); (n ? f-- : ++f < u) && s(m[f], f, m) !== !1; )
            ;
          return i;
        };
      }
      function Dd(e) {
        return function(n, i, s) {
          for (var u = -1, f = ue(n), m = s(n), v = m.length; v--; ) {
            var U = m[e ? v : ++u];
            if (i(f[U], U, f) === !1)
              break;
          }
          return n;
        };
      }
      function jV(e, n, i) {
        var s = n & C, u = Ro(e);
        function f() {
          var m = this && this !== xe && this instanceof f ? u : e;
          return m.apply(s ? i : this, arguments);
        }
        return f;
      }
      function Od(e) {
        return function(n) {
          n = ie(n);
          var i = pr(n) ? Ft(n) : r, s = i ? i[0] : n.charAt(0), u = i ? Nn(i, 1).join("") : n.slice(1);
          return s[e]() + u;
        };
      }
      function Rr(e) {
        return function(n) {
          return Zs(Ih(Bh(n).replace(I1, "")), e, "");
        };
      }
      function Ro(e) {
        return function() {
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
          var i = gr(e.prototype), s = e.apply(i, n);
          return we(s) ? s : i;
        };
      }
      function XV(e, n, i) {
        var s = Ro(e);
        function u() {
          for (var f = arguments.length, m = N(f), v = f, U = Nr(u); v--; )
            m[v] = arguments[v];
          var Z = f < 3 && m[0] !== U && m[f - 1] !== U ? [] : Vn(m, U);
          if (f -= Z.length, f < i)
            return Yd(
              e,
              n,
              Hi,
              u.placeholder,
              r,
              m,
              Z,
              r,
              r,
              i - f
            );
          var b = this && this !== xe && this instanceof u ? s : e;
          return it(b, this, m);
        }
        return u;
      }
      function Qd(e) {
        return function(n, i, s) {
          var u = ue(n);
          if (!qe(n)) {
            var f = _(i, 3);
            n = Se(n), i = function(v) {
              return f(u[v], v, u);
            };
          }
          var m = e(n, i, s);
          return m > -1 ? u[f ? n[m] : m] : r;
        };
      }
      function _d(e) {
        return nn(function(n) {
          var i = n.length, s = i, u = Ut.prototype.thru;
          for (e && n.reverse(); s--; ) {
            var f = n[s];
            if (typeof f != "function")
              throw new gt(d);
            if (u && !m && Li(f) == "wrapper")
              var m = new Ut([], !0);
          }
          for (s = m ? s : i; ++s < i; ) {
            f = n[s];
            var v = Li(f), U = v == "wrapper" ? sl(f) : r;
            U && dl(U[0]) && U[1] == (x | O | k | z) && !U[4].length && U[9] == 1 ? m = m[Li(U[0])].apply(m, U[3]) : m = f.length == 1 && dl(f) ? m[v]() : m.thru(f);
          }
          return function() {
            var Z = arguments, b = Z[0];
            if (m && Z.length == 1 && j(b))
              return m.plant(b).value();
            for (var J = 0, S = i ? n[J].apply(this, Z) : b; ++J < i; )
              S = n[J].call(this, S);
            return S;
          };
        });
      }
      function Hi(e, n, i, s, u, f, m, v, U, Z) {
        var b = n & x, J = n & C, S = n & A, D = n & (O | H), G = n & de, L = S ? r : Ro(e);
        function Y() {
          for (var ee = arguments.length, ne = N(ee), ct = ee; ct--; )
            ne[ct] = arguments[ct];
          if (D)
            var Xe = Nr(Y), ut = sv(ne, Xe);
          if (s && (ne = xd(ne, s, u, D)), f && (ne = Bd(ne, f, m, D)), ee -= ut, D && ee < Z) {
            var Re = Vn(ne, Xe);
            return Yd(
              e,
              n,
              Hi,
              Y.placeholder,
              i,
              ne,
              Re,
              v,
              U,
              Z - ee
            );
          }
          var Ct = J ? i : this, sn = S ? Ct[e] : e;
          return ee = ne.length, v ? ne = m0(ne, v) : G && ee > 1 && ne.reverse(), b && U < ee && (ne.length = U), this && this !== xe && this instanceof Y && (sn = L || Ro(sn)), sn.apply(Ct, ne);
        }
        return Y;
      }
      function zd(e, n) {
        return function(i, s) {
          return NV(i, e, n(s), {});
        };
      }
      function Pi(e, n) {
        return function(i, s) {
          var u;
          if (i === r && s === r)
            return n;
          if (i !== r && (u = i), s !== r) {
            if (u === r)
              return s;
            typeof i == "string" || typeof s == "string" ? (i = st(i), s = st(s)) : (i = bd(i), s = bd(s)), u = e(i, s);
          }
          return u;
        };
      }
      function rl(e) {
        return nn(function(n) {
          return n = me(n, at(_())), $(function(i) {
            var s = this;
            return e(n, function(u) {
              return it(u, s, i);
            });
          });
        });
      }
      function ji(e, n) {
        n = n === r ? " " : st(n);
        var i = n.length;
        if (i < 2)
          return i ? Ls(n, e) : n;
        var s = Ls(n, Wi(e / mr(n)));
        return pr(n) ? Nn(Ft(s), 0, e).join("") : s.slice(0, e);
      }
      function LV(e, n, i, s) {
        var u = n & C, f = Ro(e);
        function m() {
          for (var v = -1, U = arguments.length, Z = -1, b = s.length, J = N(b + U), S = this && this !== xe && this instanceof m ? f : e; ++Z < b; )
            J[Z] = s[Z];
          for (; U--; )
            J[Z++] = arguments[++v];
          return it(S, u ? i : this, J);
        }
        return m;
      }
      function Gd(e) {
        return function(n, i, s) {
          return s && typeof s != "number" && je(n, i, s) && (i = s = r), n = an(n), i === r ? (i = n, n = 0) : i = an(i), s = s === r ? n < i ? 1 : -1 : an(s), CV(n, i, s, e);
        };
      }
      function Xi(e) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = kt(n), i = kt(i)), e(n, i);
        };
      }
      function Yd(e, n, i, s, u, f, m, v, U, Z) {
        var b = n & O, J = b ? m : r, S = b ? r : m, D = b ? f : r, G = b ? r : f;
        n |= b ? k : W, n &= ~(b ? W : k), n & Q || (n &= ~(C | A));
        var L = [
          e,
          n,
          u,
          D,
          J,
          G,
          S,
          v,
          U,
          Z
        ], Y = i.apply(r, L);
        return dl(e) && rh(Y, L), Y.placeholder = s, oh(Y, e, n);
      }
      function ol(e) {
        var n = be[e];
        return function(i, s) {
          if (i = kt(i), s = s == null ? 0 : Qe(X(s), 292), s && od(i)) {
            var u = (ie(i) + "e").split("e"), f = n(u[0] + "e" + (+u[1] + s));
            return u = (ie(f) + "e").split("e"), +(u[0] + "e" + (+u[1] - s));
          }
          return n(i);
        };
      }
      var $V = Vr && 1 / yi(new Vr([, -0]))[1] == Ce ? function(e) {
        return new Vr(e);
      } : Ml;
      function Hd(e) {
        return function(n) {
          var i = _e(n);
          return i == Et ? Ws(n) : i == St ? pv(n) : av(n, e(n));
        };
      }
      function tn(e, n, i, s, u, f, m, v) {
        var U = n & A;
        if (!U && typeof e != "function")
          throw new gt(d);
        var Z = s ? s.length : 0;
        if (Z || (n &= ~(k | W), s = u = r), m = m === r ? m : Je(X(m), 0), v = v === r ? v : X(v), Z -= u ? u.length : 0, n & W) {
          var b = s, J = u;
          s = u = r;
        }
        var S = U ? r : sl(e), D = [
          e,
          n,
          i,
          s,
          u,
          b,
          J,
          f,
          m,
          v
        ];
        if (S && h0(D, S), e = D[0], n = D[1], i = D[2], s = D[3], u = D[4], v = D[9] = D[9] === r ? U ? 0 : e.length : Je(D[9] - Z, 0), !v && n & (O | H) && (n &= ~(O | H)), !n || n == C)
          var G = jV(e, n, i);
        else
          n == O || n == H ? G = XV(e, n, v) : (n == k || n == (C | k)) && !u.length ? G = LV(e, n, i, s) : G = Hi.apply(r, D);
        var L = S ? Md : rh;
        return oh(L(G, D), e, n);
      }
      function Pd(e, n, i, s) {
        return e === r || Wt(e, vr[i]) && !ae.call(s, i) ? n : e;
      }
      function jd(e, n, i, s, u, f) {
        return we(e) && we(n) && (f.set(n, e), _i(e, n, r, jd, f), f.delete(n)), e;
      }
      function qV(e) {
        return ko(e) ? r : e;
      }
      function Xd(e, n, i, s, u, f) {
        var m = i & E, v = e.length, U = n.length;
        if (v != U && !(m && U > v))
          return !1;
        var Z = f.get(e), b = f.get(n);
        if (Z && b)
          return Z == n && b == e;
        var J = -1, S = !0, D = i & I ? new On() : r;
        for (f.set(e, n), f.set(n, e); ++J < v; ) {
          var G = e[J], L = n[J];
          if (s)
            var Y = m ? s(L, G, J, n, e, f) : s(G, L, J, e, n, f);
          if (Y !== r) {
            if (Y)
              continue;
            S = !1;
            break;
          }
          if (D) {
            if (!bs(n, function(ee, ne) {
              if (!uo(D, ne) && (G === ee || u(G, ee, i, s, f)))
                return D.push(ne);
            })) {
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
      function KV(e, n, i, s, u, f, m) {
        switch (i) {
          case dr:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case co:
            return !(e.byteLength != n.byteLength || !f(new Ei(e), new Ei(n)));
          case ro:
          case oo:
          case io:
            return Wt(+e, +n);
          case wi:
            return e.name == n.name && e.message == n.message;
          case ao:
          case so:
            return e == n + "";
          case Et:
            var v = Ws;
          case St:
            var U = s & E;
            if (v || (v = yi), e.size != n.size && !U)
              return !1;
            var Z = m.get(e);
            if (Z)
              return Z == n;
            s |= I, m.set(e, n);
            var b = Xd(v(e), v(n), s, u, f, m);
            return m.delete(e), b;
          case Vi:
            if (wo)
              return wo.call(e) == wo.call(n);
        }
        return !1;
      }
      function e0(e, n, i, s, u, f) {
        var m = i & E, v = il(e), U = v.length, Z = il(n), b = Z.length;
        if (U != b && !m)
          return !1;
        for (var J = U; J--; ) {
          var S = v[J];
          if (!(m ? S in n : ae.call(n, S)))
            return !1;
        }
        var D = f.get(e), G = f.get(n);
        if (D && G)
          return D == n && G == e;
        var L = !0;
        f.set(e, n), f.set(n, e);
        for (var Y = m; ++J < U; ) {
          S = v[J];
          var ee = e[S], ne = n[S];
          if (s)
            var ct = m ? s(ne, ee, S, n, e, f) : s(ee, ne, S, e, n, f);
          if (!(ct === r ? ee === ne || u(ee, ne, i, s, f) : ct)) {
            L = !1;
            break;
          }
          Y || (Y = S == "constructor");
        }
        if (L && !Y) {
          var Xe = e.constructor, ut = n.constructor;
          Xe != ut && "constructor" in e && "constructor" in n && !(typeof Xe == "function" && Xe instanceof Xe && typeof ut == "function" && ut instanceof ut) && (L = !1);
        }
        return f.delete(e), f.delete(n), L;
      }
      function nn(e) {
        return fl(th(e, r, uh), e + "");
      }
      function il(e) {
        return md(e, Se, cl);
      }
      function al(e) {
        return md(e, Ke, Ld);
      }
      var sl = xi ? function(e) {
        return xi.get(e);
      } : Ml;
      function Li(e) {
        for (var n = e.name + "", i = Tr[n], s = ae.call(Tr, n) ? i.length : 0; s--; ) {
          var u = i[s], f = u.func;
          if (f == null || f == e)
            return u.name;
        }
        return n;
      }
      function Nr(e) {
        var n = ae.call(h, "placeholder") ? h : e;
        return n.placeholder;
      }
      function _() {
        var e = h.iteratee || yl;
        return e = e === yl ? Vd : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function $i(e, n) {
        var i = e.__data__;
        return l0(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function ll(e) {
        for (var n = Se(e), i = n.length; i--; ) {
          var s = n[i], u = e[s];
          n[i] = [s, u, Kd(u)];
        }
        return n;
      }
      function zn(e, n) {
        var i = dv(e, n);
        return vd(i) ? i : r;
      }
      function t0(e) {
        var n = ae.call(e, In), i = e[In];
        try {
          e[In] = r;
          var s = !0;
        } catch {
        }
        var u = bi.call(e);
        return s && (n ? e[In] = i : delete e[In]), u;
      }
      var cl = xs ? function(e) {
        return e == null ? [] : (e = ue(e), wn(xs(e), function(n) {
          return nd.call(e, n);
        }));
      } : Zl, Ld = xs ? function(e) {
        for (var n = []; e; )
          vn(n, cl(e)), e = Si(e);
        return n;
      } : Zl, _e = Pe;
      (Bs && _e(new Bs(new ArrayBuffer(1))) != dr || fo && _e(new fo()) != Et || Is && _e(Is.resolve()) != hu || Vr && _e(new Vr()) != St || po && _e(new po()) != lo) && (_e = function(e) {
        var n = Pe(e), i = n == $t ? e.constructor : r, s = i ? Gn(i) : "";
        if (s)
          switch (s) {
            case Bv:
              return dr;
            case Iv:
              return Et;
            case Dv:
              return hu;
            case Ov:
              return St;
            case Qv:
              return lo;
          }
        return n;
      });
      function n0(e, n, i) {
        for (var s = -1, u = i.length; ++s < u; ) {
          var f = i[s], m = f.size;
          switch (f.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              n -= m;
              break;
            case "take":
              n = Qe(n, e + m);
              break;
            case "takeRight":
              e = Je(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function r0(e) {
        var n = e.match(c1);
        return n ? n[1].split(u1) : [];
      }
      function $d(e, n, i) {
        n = Rn(n, e);
        for (var s = -1, u = n.length, f = !1; ++s < u; ) {
          var m = Yt(n[s]);
          if (!(f = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return f || ++s != u ? f : (u = e == null ? 0 : e.length, !!u && oa(u) && rn(m, u) && (j(e) || Yn(e)));
      }
      function o0(e) {
        var n = e.length, i = new e.constructor(n);
        return n && typeof e[0] == "string" && ae.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function qd(e) {
        return typeof e.constructor == "function" && !No(e) ? gr(Si(e)) : {};
      }
      function i0(e, n, i) {
        var s = e.constructor;
        switch (n) {
          case co:
            return nl(e);
          case ro:
          case oo:
            return new s(+e);
          case dr:
            return _V(e, i);
          case ls:
          case cs:
          case us:
          case ds:
          case hs:
          case fs:
          case ps:
          case ms:
          case ws:
            return Wd(e, i);
          case Et:
            return new s();
          case io:
          case so:
            return new s(e);
          case ao:
            return zV(e);
          case St:
            return new s();
          case Vi:
            return GV(e);
        }
      }
      function a0(e, n) {
        var i = n.length;
        if (!i)
          return e;
        var s = i - 1;
        return n[s] = (i > 1 ? "& " : "") + n[s], n = n.join(i > 2 ? ", " : " "), e.replace(l1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function s0(e) {
        return j(e) || Yn(e) || !!(rd && e && e[rd]);
      }
      function rn(e, n) {
        var i = typeof e;
        return n = n == null ? He : n, !!n && (i == "number" || i != "symbol" && T1.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function je(e, n, i) {
        if (!we(i))
          return !1;
        var s = typeof n;
        return (s == "number" ? qe(i) && rn(n, i.length) : s == "string" && n in i) ? Wt(i[n], e) : !1;
      }
      function ul(e, n) {
        if (j(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || lt(e) ? !0 : o1.test(e) || !r1.test(e) || n != null && e in ue(n);
      }
      function l0(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function dl(e) {
        var n = Li(e), i = h[n];
        if (typeof i != "function" || !(n in te.prototype))
          return !1;
        if (e === i)
          return !0;
        var s = sl(i);
        return !!s && e === s[0];
      }
      function c0(e) {
        return !!Ku && Ku in e;
      }
      var u0 = Mi ? on : bl;
      function No(e) {
        var n = e && e.constructor, i = typeof n == "function" && n.prototype || vr;
        return e === i;
      }
      function Kd(e) {
        return e === e && !we(e);
      }
      function eh(e, n) {
        return function(i) {
          return i == null ? !1 : i[e] === n && (n !== r || e in ue(i));
        };
      }
      function d0(e) {
        var n = na(e, function(s) {
          return i.size === V && i.clear(), s;
        }), i = n.cache;
        return n;
      }
      function h0(e, n) {
        var i = e[1], s = n[1], u = i | s, f = u < (C | A | x), m = s == x && i == O || s == x && i == z && e[7].length <= n[8] || s == (x | z) && n[7].length <= n[8] && i == O;
        if (!(f || m))
          return e;
        s & C && (e[2] = n[2], u |= i & C ? 0 : Q);
        var v = n[3];
        if (v) {
          var U = e[3];
          e[3] = U ? xd(U, v, n[4]) : v, e[4] = U ? Vn(e[3], g) : n[4];
        }
        return v = n[5], v && (U = e[5], e[5] = U ? Bd(U, v, n[6]) : v, e[6] = U ? Vn(e[5], g) : n[6]), v = n[7], v && (e[7] = v), s & x && (e[8] = e[8] == null ? n[8] : Qe(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = u, e;
      }
      function f0(e) {
        var n = [];
        if (e != null)
          for (var i in ue(e))
            n.push(i);
        return n;
      }
      function p0(e) {
        return bi.call(e);
      }
      function th(e, n, i) {
        return n = Je(n === r ? e.length - 1 : n, 0), function() {
          for (var s = arguments, u = -1, f = Je(s.length - n, 0), m = N(f); ++u < f; )
            m[u] = s[n + u];
          u = -1;
          for (var v = N(n + 1); ++u < n; )
            v[u] = s[u];
          return v[n] = i(m), it(e, this, v);
        };
      }
      function nh(e, n) {
        return n.length < 2 ? e : _n(e, Nt(n, 0, -1));
      }
      function m0(e, n) {
        for (var i = e.length, s = Qe(n.length, i), u = $e(e); s--; ) {
          var f = n[s];
          e[s] = rn(f, i) ? u[f] : r;
        }
        return e;
      }
      function hl(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var rh = ih(Md), yo = Ev || function(e, n) {
        return xe.setTimeout(e, n);
      }, fl = ih(IV);
      function oh(e, n, i) {
        var s = n + "";
        return fl(e, a0(s, w0(r0(s), i)));
      }
      function ih(e) {
        var n = 0, i = 0;
        return function() {
          var s = Wv(), u = ge - (s - i);
          if (i = s, u > 0) {
            if (++n >= Ve)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function qi(e, n) {
        var i = -1, s = e.length, u = s - 1;
        for (n = n === r ? s : n; ++i < n; ) {
          var f = Xs(i, u), m = e[f];
          e[f] = e[i], e[i] = m;
        }
        return e.length = n, e;
      }
      var ah = d0(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(i1, function(i, s, u, f) {
          n.push(u ? f.replace(f1, "$1") : s || i);
        }), n;
      });
      function Yt(e) {
        if (typeof e == "string" || lt(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Ce ? "-0" : n;
      }
      function Gn(e) {
        if (e != null) {
          try {
            return Zi.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function w0(e, n) {
        return Tt(zw, function(i) {
          var s = "_." + i[0];
          n & i[1] && !Ri(e, s) && e.push(s);
        }), e.sort();
      }
      function sh(e) {
        if (e instanceof te)
          return e.clone();
        var n = new Ut(e.__wrapped__, e.__chain__);
        return n.__actions__ = $e(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function v0(e, n, i) {
        (i ? je(e, n, i) : n === r) ? n = 1 : n = Je(X(n), 0);
        var s = e == null ? 0 : e.length;
        if (!s || n < 1)
          return [];
        for (var u = 0, f = 0, m = N(Wi(s / n)); u < s; )
          m[f++] = Nt(e, u, u += n);
        return m;
      }
      function V0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, s = 0, u = []; ++n < i; ) {
          var f = e[n];
          f && (u[s++] = f);
        }
        return u;
      }
      function T0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = N(e - 1), i = arguments[0], s = e; s--; )
          n[s - 1] = arguments[s];
        return vn(j(i) ? $e(i) : [i], Be(n, 1));
      }
      var g0 = $(function(e, n) {
        return Ue(e) ? Vo(e, Be(n, 1, Ue, !0)) : [];
      }), U0 = $(function(e, n) {
        var i = yt(n);
        return Ue(i) && (i = r), Ue(e) ? Vo(e, Be(n, 1, Ue, !0), _(i, 2)) : [];
      }), R0 = $(function(e, n) {
        var i = yt(n);
        return Ue(i) && (i = r), Ue(e) ? Vo(e, Be(n, 1, Ue, !0), r, i) : [];
      });
      function N0(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (n = i || n === r ? 1 : X(n), Nt(e, n < 0 ? 0 : n, s)) : [];
      }
      function y0(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (n = i || n === r ? 1 : X(n), n = s - n, Nt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function k0(e, n) {
        return e && e.length ? Gi(e, _(n, 3), !0, !0) : [];
      }
      function M0(e, n) {
        return e && e.length ? Gi(e, _(n, 3), !0) : [];
      }
      function Z0(e, n, i, s) {
        var u = e == null ? 0 : e.length;
        return u ? (i && typeof i != "number" && je(e, n, i) && (i = 0, s = u), TV(e, n, i, s)) : [];
      }
      function lh(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = i == null ? 0 : X(i);
        return u < 0 && (u = Je(s + u, 0)), Ni(e, _(n, 3), u);
      }
      function ch(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = s - 1;
        return i !== r && (u = X(i), u = i < 0 ? Je(s + u, 0) : Qe(u, s - 1)), Ni(e, _(n, 3), u, !0);
      }
      function uh(e) {
        var n = e == null ? 0 : e.length;
        return n ? Be(e, 1) : [];
      }
      function b0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Be(e, Ce) : [];
      }
      function J0(e, n) {
        var i = e == null ? 0 : e.length;
        return i ? (n = n === r ? 1 : X(n), Be(e, n)) : [];
      }
      function E0(e) {
        for (var n = -1, i = e == null ? 0 : e.length, s = {}; ++n < i; ) {
          var u = e[n];
          s[u[0]] = u[1];
        }
        return s;
      }
      function dh(e) {
        return e && e.length ? e[0] : r;
      }
      function S0(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = i == null ? 0 : X(i);
        return u < 0 && (u = Je(s + u, 0)), fr(e, n, u);
      }
      function F0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Nt(e, 0, -1) : [];
      }
      var A0 = $(function(e) {
        var n = me(e, el);
        return n.length && n[0] === e[0] ? Gs(n) : [];
      }), W0 = $(function(e) {
        var n = yt(e), i = me(e, el);
        return n === yt(i) ? n = r : i.pop(), i.length && i[0] === e[0] ? Gs(i, _(n, 2)) : [];
      }), C0 = $(function(e) {
        var n = yt(e), i = me(e, el);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === e[0] ? Gs(i, r, n) : [];
      });
      function x0(e, n) {
        return e == null ? "" : Fv.call(e, n);
      }
      function yt(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function B0(e, n, i) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = s;
        return i !== r && (u = X(i), u = u < 0 ? Je(s + u, 0) : Qe(u, s - 1)), n === n ? wv(e, n, u) : Ni(e, Yu, u, !0);
      }
      function I0(e, n) {
        return e && e.length ? Rd(e, X(n)) : r;
      }
      var D0 = $(hh);
      function hh(e, n) {
        return e && e.length && n && n.length ? js(e, n) : e;
      }
      function O0(e, n, i) {
        return e && e.length && n && n.length ? js(e, n, _(i, 2)) : e;
      }
      function Q0(e, n, i) {
        return e && e.length && n && n.length ? js(e, n, r, i) : e;
      }
      var _0 = nn(function(e, n) {
        var i = e == null ? 0 : e.length, s = Os(e, n);
        return kd(e, me(n, function(u) {
          return rn(u, i) ? +u : u;
        }).sort(Cd)), s;
      });
      function z0(e, n) {
        var i = [];
        if (!(e && e.length))
          return i;
        var s = -1, u = [], f = e.length;
        for (n = _(n, 3); ++s < f; ) {
          var m = e[s];
          n(m, s, e) && (i.push(m), u.push(s));
        }
        return kd(e, u), i;
      }
      function pl(e) {
        return e == null ? e : xv.call(e);
      }
      function G0(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (i && typeof i != "number" && je(e, n, i) ? (n = 0, i = s) : (n = n == null ? 0 : X(n), i = i === r ? s : X(i)), Nt(e, n, i)) : [];
      }
      function Y0(e, n) {
        return zi(e, n);
      }
      function H0(e, n, i) {
        return $s(e, n, _(i, 2));
      }
      function P0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var s = zi(e, n);
          if (s < i && Wt(e[s], n))
            return s;
        }
        return -1;
      }
      function j0(e, n) {
        return zi(e, n, !0);
      }
      function X0(e, n, i) {
        return $s(e, n, _(i, 2), !0);
      }
      function L0(e, n) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var s = zi(e, n, !0) - 1;
          if (Wt(e[s], n))
            return s;
        }
        return -1;
      }
      function $0(e) {
        return e && e.length ? Zd(e) : [];
      }
      function q0(e, n) {
        return e && e.length ? Zd(e, _(n, 2)) : [];
      }
      function K0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Nt(e, 1, n) : [];
      }
      function eT(e, n, i) {
        return e && e.length ? (n = i || n === r ? 1 : X(n), Nt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function tT(e, n, i) {
        var s = e == null ? 0 : e.length;
        return s ? (n = i || n === r ? 1 : X(n), n = s - n, Nt(e, n < 0 ? 0 : n, s)) : [];
      }
      function nT(e, n) {
        return e && e.length ? Gi(e, _(n, 3), !1, !0) : [];
      }
      function rT(e, n) {
        return e && e.length ? Gi(e, _(n, 3)) : [];
      }
      var oT = $(function(e) {
        return Un(Be(e, 1, Ue, !0));
      }), iT = $(function(e) {
        var n = yt(e);
        return Ue(n) && (n = r), Un(Be(e, 1, Ue, !0), _(n, 2));
      }), aT = $(function(e) {
        var n = yt(e);
        return n = typeof n == "function" ? n : r, Un(Be(e, 1, Ue, !0), r, n);
      });
      function sT(e) {
        return e && e.length ? Un(e) : [];
      }
      function lT(e, n) {
        return e && e.length ? Un(e, _(n, 2)) : [];
      }
      function cT(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? Un(e, r, n) : [];
      }
      function ml(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = wn(e, function(i) {
          if (Ue(i))
            return n = Je(i.length, n), !0;
        }), Fs(n, function(i) {
          return me(e, Js(i));
        });
      }
      function fh(e, n) {
        if (!(e && e.length))
          return [];
        var i = ml(e);
        return n == null ? i : me(i, function(s) {
          return it(n, r, s);
        });
      }
      var uT = $(function(e, n) {
        return Ue(e) ? Vo(e, n) : [];
      }), dT = $(function(e) {
        return Ks(wn(e, Ue));
      }), hT = $(function(e) {
        var n = yt(e);
        return Ue(n) && (n = r), Ks(wn(e, Ue), _(n, 2));
      }), fT = $(function(e) {
        var n = yt(e);
        return n = typeof n == "function" ? n : r, Ks(wn(e, Ue), r, n);
      }), pT = $(ml);
      function mT(e, n) {
        return Sd(e || [], n || [], vo);
      }
      function wT(e, n) {
        return Sd(e || [], n || [], Uo);
      }
      var vT = $(function(e) {
        var n = e.length, i = n > 1 ? e[n - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, fh(e, i);
      });
      function ph(e) {
        var n = h(e);
        return n.__chain__ = !0, n;
      }
      function VT(e, n) {
        return n(e), e;
      }
      function Ki(e, n) {
        return n(e);
      }
      var TT = nn(function(e) {
        var n = e.length, i = n ? e[0] : 0, s = this.__wrapped__, u = function(f) {
          return Os(f, e);
        };
        return n > 1 || this.__actions__.length || !(s instanceof te) || !rn(i) ? this.thru(u) : (s = s.slice(i, +i + (n ? 1 : 0)), s.__actions__.push({
          func: Ki,
          args: [u],
          thisArg: r
        }), new Ut(s, this.__chain__).thru(function(f) {
          return n && !f.length && f.push(r), f;
        }));
      });
      function gT() {
        return ph(this);
      }
      function UT() {
        return new Ut(this.value(), this.__chain__);
      }
      function RT() {
        this.__values__ === r && (this.__values__ = bh(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function NT() {
        return this;
      }
      function yT(e) {
        for (var n, i = this; i instanceof Ii; ) {
          var s = sh(i);
          s.__index__ = 0, s.__values__ = r, n ? u.__wrapped__ = s : n = s;
          var u = s;
          i = i.__wrapped__;
        }
        return u.__wrapped__ = e, n;
      }
      function kT() {
        var e = this.__wrapped__;
        if (e instanceof te) {
          var n = e;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: Ki,
            args: [pl],
            thisArg: r
          }), new Ut(n, this.__chain__);
        }
        return this.thru(pl);
      }
      function MT() {
        return Ed(this.__wrapped__, this.__actions__);
      }
      var ZT = Yi(function(e, n, i) {
        ae.call(e, i) ? ++e[i] : en(e, i, 1);
      });
      function bT(e, n, i) {
        var s = j(e) ? zu : VV;
        return i && je(e, n, i) && (n = r), s(e, _(n, 3));
      }
      function JT(e, n) {
        var i = j(e) ? wn : fd;
        return i(e, _(n, 3));
      }
      var ET = Qd(lh), ST = Qd(ch);
      function FT(e, n) {
        return Be(ea(e, n), 1);
      }
      function AT(e, n) {
        return Be(ea(e, n), Ce);
      }
      function WT(e, n, i) {
        return i = i === r ? 1 : X(i), Be(ea(e, n), i);
      }
      function mh(e, n) {
        var i = j(e) ? Tt : gn;
        return i(e, _(n, 3));
      }
      function wh(e, n) {
        var i = j(e) ? K1 : hd;
        return i(e, _(n, 3));
      }
      var CT = Yi(function(e, n, i) {
        ae.call(e, i) ? e[i].push(n) : en(e, i, [n]);
      });
      function xT(e, n, i, s) {
        e = qe(e) ? e : kr(e), i = i && !s ? X(i) : 0;
        var u = e.length;
        return i < 0 && (i = Je(u + i, 0)), ia(e) ? i <= u && e.indexOf(n, i) > -1 : !!u && fr(e, n, i) > -1;
      }
      var BT = $(function(e, n, i) {
        var s = -1, u = typeof n == "function", f = qe(e) ? N(e.length) : [];
        return gn(e, function(m) {
          f[++s] = u ? it(n, m, i) : To(m, n, i);
        }), f;
      }), IT = Yi(function(e, n, i) {
        en(e, i, n);
      });
      function ea(e, n) {
        var i = j(e) ? me : Td;
        return i(e, _(n, 3));
      }
      function DT(e, n, i, s) {
        return e == null ? [] : (j(n) || (n = n == null ? [] : [n]), i = s ? r : i, j(i) || (i = i == null ? [] : [i]), Nd(e, n, i));
      }
      var OT = Yi(function(e, n, i) {
        e[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function QT(e, n, i) {
        var s = j(e) ? Zs : Pu, u = arguments.length < 3;
        return s(e, _(n, 4), i, u, gn);
      }
      function _T(e, n, i) {
        var s = j(e) ? ev : Pu, u = arguments.length < 3;
        return s(e, _(n, 4), i, u, hd);
      }
      function zT(e, n) {
        var i = j(e) ? wn : fd;
        return i(e, ra(_(n, 3)));
      }
      function GT(e) {
        var n = j(e) ? ld : xV;
        return n(e);
      }
      function YT(e, n, i) {
        (i ? je(e, n, i) : n === r) ? n = 1 : n = X(n);
        var s = j(e) ? fV : BV;
        return s(e, n);
      }
      function HT(e) {
        var n = j(e) ? pV : DV;
        return n(e);
      }
      function PT(e) {
        if (e == null)
          return 0;
        if (qe(e))
          return ia(e) ? mr(e) : e.length;
        var n = _e(e);
        return n == Et || n == St ? e.size : Hs(e).length;
      }
      function jT(e, n, i) {
        var s = j(e) ? bs : OV;
        return i && je(e, n, i) && (n = r), s(e, _(n, 3));
      }
      var XT = $(function(e, n) {
        if (e == null)
          return [];
        var i = n.length;
        return i > 1 && je(e, n[0], n[1]) ? n = [] : i > 2 && je(n[0], n[1], n[2]) && (n = [n[0]]), Nd(e, Be(n, 1), []);
      }), ta = Jv || function() {
        return xe.Date.now();
      };
      function LT(e, n) {
        if (typeof n != "function")
          throw new gt(d);
        return e = X(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function vh(e, n, i) {
        return n = i ? r : n, n = e && n == null ? e.length : n, tn(e, x, r, r, r, r, n);
      }
      function Vh(e, n) {
        var i;
        if (typeof n != "function")
          throw new gt(d);
        return e = X(e), function() {
          return --e > 0 && (i = n.apply(this, arguments)), e <= 1 && (n = r), i;
        };
      }
      var wl = $(function(e, n, i) {
        var s = C;
        if (i.length) {
          var u = Vn(i, Nr(wl));
          s |= k;
        }
        return tn(e, s, n, i, u);
      }), Th = $(function(e, n, i) {
        var s = C | A;
        if (i.length) {
          var u = Vn(i, Nr(Th));
          s |= k;
        }
        return tn(n, s, e, i, u);
      });
      function gh(e, n, i) {
        n = i ? r : n;
        var s = tn(e, O, r, r, r, r, r, n);
        return s.placeholder = gh.placeholder, s;
      }
      function Uh(e, n, i) {
        n = i ? r : n;
        var s = tn(e, H, r, r, r, r, r, n);
        return s.placeholder = Uh.placeholder, s;
      }
      function Rh(e, n, i) {
        var s, u, f, m, v, U, Z = 0, b = !1, J = !1, S = !0;
        if (typeof e != "function")
          throw new gt(d);
        n = kt(n) || 0, we(i) && (b = !!i.leading, J = "maxWait" in i, f = J ? Je(kt(i.maxWait) || 0, n) : f, S = "trailing" in i ? !!i.trailing : S);
        function D(Re) {
          var Ct = s, sn = u;
          return s = u = r, Z = Re, m = e.apply(sn, Ct), m;
        }
        function G(Re) {
          return Z = Re, v = yo(ee, n), b ? D(Re) : m;
        }
        function L(Re) {
          var Ct = Re - U, sn = Re - Z, Qh = n - Ct;
          return J ? Qe(Qh, f - sn) : Qh;
        }
        function Y(Re) {
          var Ct = Re - U, sn = Re - Z;
          return U === r || Ct >= n || Ct < 0 || J && sn >= f;
        }
        function ee() {
          var Re = ta();
          if (Y(Re))
            return ne(Re);
          v = yo(ee, L(Re));
        }
        function ne(Re) {
          return v = r, S && s ? D(Re) : (s = u = r, m);
        }
        function ct() {
          v !== r && Fd(v), Z = 0, s = U = u = v = r;
        }
        function Xe() {
          return v === r ? m : ne(ta());
        }
        function ut() {
          var Re = ta(), Ct = Y(Re);
          if (s = arguments, u = this, U = Re, Ct) {
            if (v === r)
              return G(U);
            if (J)
              return Fd(v), v = yo(ee, n), D(U);
          }
          return v === r && (v = yo(ee, n)), m;
        }
        return ut.cancel = ct, ut.flush = Xe, ut;
      }
      var $T = $(function(e, n) {
        return dd(e, 1, n);
      }), qT = $(function(e, n, i) {
        return dd(e, kt(n) || 0, i);
      });
      function KT(e) {
        return tn(e, de);
      }
      function na(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new gt(d);
        var i = function() {
          var s = arguments, u = n ? n.apply(this, s) : s[0], f = i.cache;
          if (f.has(u))
            return f.get(u);
          var m = e.apply(this, s);
          return i.cache = f.set(u, m) || f, m;
        };
        return i.cache = new (na.Cache || Kt)(), i;
      }
      na.Cache = Kt;
      function ra(e) {
        if (typeof e != "function")
          throw new gt(d);
        return function() {
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
      function eg(e) {
        return Vh(2, e);
      }
      var tg = QV(function(e, n) {
        n = n.length == 1 && j(n[0]) ? me(n[0], at(_())) : me(Be(n, 1), at(_()));
        var i = n.length;
        return $(function(s) {
          for (var u = -1, f = Qe(s.length, i); ++u < f; )
            s[u] = n[u].call(this, s[u]);
          return it(e, this, s);
        });
      }), vl = $(function(e, n) {
        var i = Vn(n, Nr(vl));
        return tn(e, k, r, n, i);
      }), Nh = $(function(e, n) {
        var i = Vn(n, Nr(Nh));
        return tn(e, W, r, n, i);
      }), ng = nn(function(e, n) {
        return tn(e, z, r, r, r, n);
      });
      function rg(e, n) {
        if (typeof e != "function")
          throw new gt(d);
        return n = n === r ? n : X(n), $(e, n);
      }
      function og(e, n) {
        if (typeof e != "function")
          throw new gt(d);
        return n = n == null ? 0 : Je(X(n), 0), $(function(i) {
          var s = i[n], u = Nn(i, 0, n);
          return s && vn(u, s), it(e, this, u);
        });
      }
      function ig(e, n, i) {
        var s = !0, u = !0;
        if (typeof e != "function")
          throw new gt(d);
        return we(i) && (s = "leading" in i ? !!i.leading : s, u = "trailing" in i ? !!i.trailing : u), Rh(e, n, {
          leading: s,
          maxWait: n,
          trailing: u
        });
      }
      function ag(e) {
        return vh(e, 1);
      }
      function sg(e, n) {
        return vl(tl(n), e);
      }
      function lg() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return j(e) ? e : [e];
      }
      function cg(e) {
        return Rt(e, F);
      }
      function ug(e, n) {
        return n = typeof n == "function" ? n : r, Rt(e, F, n);
      }
      function dg(e) {
        return Rt(e, R | F);
      }
      function hg(e, n) {
        return n = typeof n == "function" ? n : r, Rt(e, R | F, n);
      }
      function fg(e, n) {
        return n == null || ud(e, n, Se(n));
      }
      function Wt(e, n) {
        return e === n || e !== e && n !== n;
      }
      var pg = Xi(zs), mg = Xi(function(e, n) {
        return e >= n;
      }), Yn = wd(function() {
        return arguments;
      }()) ? wd : function(e) {
        return Te(e) && ae.call(e, "callee") && !nd.call(e, "callee");
      }, j = N.isArray, wg = Bu ? at(Bu) : yV;
      function qe(e) {
        return e != null && oa(e.length) && !on(e);
      }
      function Ue(e) {
        return Te(e) && qe(e);
      }
      function vg(e) {
        return e === !0 || e === !1 || Te(e) && Pe(e) == ro;
      }
      var yn = Sv || bl, Vg = Iu ? at(Iu) : kV;
      function Tg(e) {
        return Te(e) && e.nodeType === 1 && !ko(e);
      }
      function gg(e) {
        if (e == null)
          return !0;
        if (qe(e) && (j(e) || typeof e == "string" || typeof e.splice == "function" || yn(e) || yr(e) || Yn(e)))
          return !e.length;
        var n = _e(e);
        if (n == Et || n == St)
          return !e.size;
        if (No(e))
          return !Hs(e).length;
        for (var i in e)
          if (ae.call(e, i))
            return !1;
        return !0;
      }
      function Ug(e, n) {
        return go(e, n);
      }
      function Rg(e, n, i) {
        i = typeof i == "function" ? i : r;
        var s = i ? i(e, n) : r;
        return s === r ? go(e, n, r, i) : !!s;
      }
      function Vl(e) {
        if (!Te(e))
          return !1;
        var n = Pe(e);
        return n == wi || n == Yw || typeof e.message == "string" && typeof e.name == "string" && !ko(e);
      }
      function Ng(e) {
        return typeof e == "number" && od(e);
      }
      function on(e) {
        if (!we(e))
          return !1;
        var n = Pe(e);
        return n == vi || n == du || n == Gw || n == Pw;
      }
      function yh(e) {
        return typeof e == "number" && e == X(e);
      }
      function oa(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= He;
      }
      function we(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Te(e) {
        return e != null && typeof e == "object";
      }
      var kh = Du ? at(Du) : ZV;
      function yg(e, n) {
        return e === n || Ys(e, n, ll(n));
      }
      function kg(e, n, i) {
        return i = typeof i == "function" ? i : r, Ys(e, n, ll(n), i);
      }
      function Mg(e) {
        return Mh(e) && e != +e;
      }
      function Zg(e) {
        if (u0(e))
          throw new P(c);
        return vd(e);
      }
      function bg(e) {
        return e === null;
      }
      function Jg(e) {
        return e == null;
      }
      function Mh(e) {
        return typeof e == "number" || Te(e) && Pe(e) == io;
      }
      function ko(e) {
        if (!Te(e) || Pe(e) != $t)
          return !1;
        var n = Si(e);
        if (n === null)
          return !0;
        var i = ae.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Zi.call(i) == kv;
      }
      var Tl = Ou ? at(Ou) : bV;
      function Eg(e) {
        return yh(e) && e >= -He && e <= He;
      }
      var Zh = Qu ? at(Qu) : JV;
      function ia(e) {
        return typeof e == "string" || !j(e) && Te(e) && Pe(e) == so;
      }
      function lt(e) {
        return typeof e == "symbol" || Te(e) && Pe(e) == Vi;
      }
      var yr = _u ? at(_u) : EV;
      function Sg(e) {
        return e === r;
      }
      function Fg(e) {
        return Te(e) && _e(e) == lo;
      }
      function Ag(e) {
        return Te(e) && Pe(e) == Xw;
      }
      var Wg = Xi(Ps), Cg = Xi(function(e, n) {
        return e <= n;
      });
      function bh(e) {
        if (!e)
          return [];
        if (qe(e))
          return ia(e) ? Ft(e) : $e(e);
        if (ho && e[ho])
          return fv(e[ho]());
        var n = _e(e), i = n == Et ? Ws : n == St ? yi : kr;
        return i(e);
      }
      function an(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = kt(e), e === Ce || e === -Ce) {
          var n = e < 0 ? -1 : 1;
          return n * no;
        }
        return e === e ? e : 0;
      }
      function X(e) {
        var n = an(e), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Jh(e) {
        return e ? Qn(X(e), 0, _t) : 0;
      }
      function kt(e) {
        if (typeof e == "number")
          return e;
        if (lt(e))
          return pi;
        if (we(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = we(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = ju(e);
        var i = w1.test(e);
        return i || V1.test(e) ? L1(e.slice(2), i ? 2 : 8) : m1.test(e) ? pi : +e;
      }
      function Eh(e) {
        return Gt(e, Ke(e));
      }
      function xg(e) {
        return e ? Qn(X(e), -He, He) : e === 0 ? e : 0;
      }
      function ie(e) {
        return e == null ? "" : st(e);
      }
      var Bg = Ur(function(e, n) {
        if (No(n) || qe(n)) {
          Gt(n, Se(n), e);
          return;
        }
        for (var i in n)
          ae.call(n, i) && vo(e, i, n[i]);
      }), Sh = Ur(function(e, n) {
        Gt(n, Ke(n), e);
      }), aa = Ur(function(e, n, i, s) {
        Gt(n, Ke(n), e, s);
      }), Ig = Ur(function(e, n, i, s) {
        Gt(n, Se(n), e, s);
      }), Dg = nn(Os);
      function Og(e, n) {
        var i = gr(e);
        return n == null ? i : cd(i, n);
      }
      var Qg = $(function(e, n) {
        e = ue(e);
        var i = -1, s = n.length, u = s > 2 ? n[2] : r;
        for (u && je(n[0], n[1], u) && (s = 1); ++i < s; )
          for (var f = n[i], m = Ke(f), v = -1, U = m.length; ++v < U; ) {
            var Z = m[v], b = e[Z];
            (b === r || Wt(b, vr[Z]) && !ae.call(e, Z)) && (e[Z] = f[Z]);
          }
        return e;
      }), _g = $(function(e) {
        return e.push(r, jd), it(Fh, r, e);
      });
      function zg(e, n) {
        return Gu(e, _(n, 3), zt);
      }
      function Gg(e, n) {
        return Gu(e, _(n, 3), _s);
      }
      function Yg(e, n) {
        return e == null ? e : Qs(e, _(n, 3), Ke);
      }
      function Hg(e, n) {
        return e == null ? e : pd(e, _(n, 3), Ke);
      }
      function Pg(e, n) {
        return e && zt(e, _(n, 3));
      }
      function jg(e, n) {
        return e && _s(e, _(n, 3));
      }
      function Xg(e) {
        return e == null ? [] : Qi(e, Se(e));
      }
      function Lg(e) {
        return e == null ? [] : Qi(e, Ke(e));
      }
      function gl(e, n, i) {
        var s = e == null ? r : _n(e, n);
        return s === r ? i : s;
      }
      function $g(e, n) {
        return e != null && $d(e, n, gV);
      }
      function Ul(e, n) {
        return e != null && $d(e, n, UV);
      }
      var qg = zd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = bi.call(n)), e[n] = i;
      }, Nl(et)), Kg = zd(function(e, n, i) {
        n != null && typeof n.toString != "function" && (n = bi.call(n)), ae.call(e, n) ? e[n].push(i) : e[n] = [i];
      }, _), eU = $(To);
      function Se(e) {
        return qe(e) ? sd(e) : Hs(e);
      }
      function Ke(e) {
        return qe(e) ? sd(e, !0) : SV(e);
      }
      function tU(e, n) {
        var i = {};
        return n = _(n, 3), zt(e, function(s, u, f) {
          en(i, n(s, u, f), s);
        }), i;
      }
      function nU(e, n) {
        var i = {};
        return n = _(n, 3), zt(e, function(s, u, f) {
          en(i, u, n(s, u, f));
        }), i;
      }
      var rU = Ur(function(e, n, i) {
        _i(e, n, i);
      }), Fh = Ur(function(e, n, i, s) {
        _i(e, n, i, s);
      }), oU = nn(function(e, n) {
        var i = {};
        if (e == null)
          return i;
        var s = !1;
        n = me(n, function(f) {
          return f = Rn(f, e), s || (s = f.length > 1), f;
        }), Gt(e, al(e), i), s && (i = Rt(i, R | y | F, qV));
        for (var u = n.length; u--; )
          qs(i, n[u]);
        return i;
      });
      function iU(e, n) {
        return Ah(e, ra(_(n)));
      }
      var aU = nn(function(e, n) {
        return e == null ? {} : AV(e, n);
      });
      function Ah(e, n) {
        if (e == null)
          return {};
        var i = me(al(e), function(s) {
          return [s];
        });
        return n = _(n), yd(e, i, function(s, u) {
          return n(s, u[0]);
        });
      }
      function sU(e, n, i) {
        n = Rn(n, e);
        var s = -1, u = n.length;
        for (u || (u = 1, e = r); ++s < u; ) {
          var f = e == null ? r : e[Yt(n[s])];
          f === r && (s = u, f = i), e = on(f) ? f.call(e) : f;
        }
        return e;
      }
      function lU(e, n, i) {
        return e == null ? e : Uo(e, n, i);
      }
      function cU(e, n, i, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : Uo(e, n, i, s);
      }
      var Wh = Hd(Se), Ch = Hd(Ke);
      function uU(e, n, i) {
        var s = j(e), u = s || yn(e) || yr(e);
        if (n = _(n, 4), i == null) {
          var f = e && e.constructor;
          u ? i = s ? new f() : [] : we(e) ? i = on(f) ? gr(Si(e)) : {} : i = {};
        }
        return (u ? Tt : zt)(e, function(m, v, U) {
          return n(i, m, v, U);
        }), i;
      }
      function dU(e, n) {
        return e == null ? !0 : qs(e, n);
      }
      function hU(e, n, i) {
        return e == null ? e : Jd(e, n, tl(i));
      }
      function fU(e, n, i, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : Jd(e, n, tl(i), s);
      }
      function kr(e) {
        return e == null ? [] : As(e, Se(e));
      }
      function pU(e) {
        return e == null ? [] : As(e, Ke(e));
      }
      function mU(e, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = kt(i), i = i === i ? i : 0), n !== r && (n = kt(n), n = n === n ? n : 0), Qn(kt(e), n, i);
      }
      function wU(e, n, i) {
        return n = an(n), i === r ? (i = n, n = 0) : i = an(i), e = kt(e), RV(e, n, i);
      }
      function vU(e, n, i) {
        if (i && typeof i != "boolean" && je(e, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof e == "boolean" && (i = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = an(e), n === r ? (n = e, e = 0) : n = an(n)), e > n) {
          var s = e;
          e = n, n = s;
        }
        if (i || e % 1 || n % 1) {
          var u = id();
          return Qe(e + u * (n - e + X1("1e-" + ((u + "").length - 1))), n);
        }
        return Xs(e, n);
      }
      var VU = Rr(function(e, n, i) {
        return n = n.toLowerCase(), e + (i ? xh(n) : n);
      });
      function xh(e) {
        return Rl(ie(e).toLowerCase());
      }
      function Bh(e) {
        return e = ie(e), e && e.replace(g1, lv).replace(D1, "");
      }
      function TU(e, n, i) {
        e = ie(e), n = st(n);
        var s = e.length;
        i = i === r ? s : Qn(X(i), 0, s);
        var u = i;
        return i -= n.length, i >= 0 && e.slice(i, u) == n;
      }
      function gU(e) {
        return e = ie(e), e && e1.test(e) ? e.replace(pu, cv) : e;
      }
      function UU(e) {
        return e = ie(e), e && a1.test(e) ? e.replace(vs, "\\$&") : e;
      }
      var RU = Rr(function(e, n, i) {
        return e + (i ? "-" : "") + n.toLowerCase();
      }), NU = Rr(function(e, n, i) {
        return e + (i ? " " : "") + n.toLowerCase();
      }), yU = Od("toLowerCase");
      function kU(e, n, i) {
        e = ie(e), n = X(n);
        var s = n ? mr(e) : 0;
        if (!n || s >= n)
          return e;
        var u = (n - s) / 2;
        return ji(Ci(u), i) + e + ji(Wi(u), i);
      }
      function MU(e, n, i) {
        e = ie(e), n = X(n);
        var s = n ? mr(e) : 0;
        return n && s < n ? e + ji(n - s, i) : e;
      }
      function ZU(e, n, i) {
        e = ie(e), n = X(n);
        var s = n ? mr(e) : 0;
        return n && s < n ? ji(n - s, i) + e : e;
      }
      function bU(e, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), Cv(ie(e).replace(Vs, ""), n || 0);
      }
      function JU(e, n, i) {
        return (i ? je(e, n, i) : n === r) ? n = 1 : n = X(n), Ls(ie(e), n);
      }
      function EU() {
        var e = arguments, n = ie(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var SU = Rr(function(e, n, i) {
        return e + (i ? "_" : "") + n.toLowerCase();
      });
      function FU(e, n, i) {
        return i && typeof i != "number" && je(e, n, i) && (n = i = r), i = i === r ? _t : i >>> 0, i ? (e = ie(e), e && (typeof n == "string" || n != null && !Tl(n)) && (n = st(n), !n && pr(e)) ? Nn(Ft(e), 0, i) : e.split(n, i)) : [];
      }
      var AU = Rr(function(e, n, i) {
        return e + (i ? " " : "") + Rl(n);
      });
      function WU(e, n, i) {
        return e = ie(e), i = i == null ? 0 : Qn(X(i), 0, e.length), n = st(n), e.slice(i, i + n.length) == n;
      }
      function CU(e, n, i) {
        var s = h.templateSettings;
        i && je(e, n, i) && (n = r), e = ie(e), n = aa({}, n, s, Pd);
        var u = aa({}, n.imports, s.imports, Pd), f = Se(u), m = As(u, f), v, U, Z = 0, b = n.interpolate || Ti, J = "__p += '", S = Cs(
          (n.escape || Ti).source + "|" + b.source + "|" + (b === mu ? p1 : Ti).source + "|" + (n.evaluate || Ti).source + "|$",
          "g"
        ), D = "//# sourceURL=" + (ae.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++G1 + "]") + `
`;
        e.replace(S, function(Y, ee, ne, ct, Xe, ut) {
          return ne || (ne = ct), J += e.slice(Z, ut).replace(U1, uv), ee && (v = !0, J += `' +
__e(` + ee + `) +
'`), Xe && (U = !0, J += `';
` + Xe + `;
__p += '`), ne && (J += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), Z = ut + Y.length, Y;
        }), J += `';
`;
        var G = ae.call(n, "variable") && n.variable;
        if (!G)
          J = `with (obj) {
` + J + `
}
`;
        else if (h1.test(G))
          throw new P(p);
        J = (U ? J.replace(Lw, "") : J).replace($w, "$1").replace(qw, "$1;"), J = "function(" + (G || "obj") + `) {
` + (G ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (U ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var L = Dh(function() {
          return re(f, D + "return " + J).apply(r, m);
        });
        if (L.source = J, Vl(L))
          throw L;
        return L;
      }
      function xU(e) {
        return ie(e).toLowerCase();
      }
      function BU(e) {
        return ie(e).toUpperCase();
      }
      function IU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return ju(e);
        if (!e || !(n = st(n)))
          return e;
        var s = Ft(e), u = Ft(n), f = Xu(s, u), m = Lu(s, u) + 1;
        return Nn(s, f, m).join("");
      }
      function DU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.slice(0, qu(e) + 1);
        if (!e || !(n = st(n)))
          return e;
        var s = Ft(e), u = Lu(s, Ft(n)) + 1;
        return Nn(s, 0, u).join("");
      }
      function OU(e, n, i) {
        if (e = ie(e), e && (i || n === r))
          return e.replace(Vs, "");
        if (!e || !(n = st(n)))
          return e;
        var s = Ft(e), u = Xu(s, Ft(n));
        return Nn(s, u).join("");
      }
      function QU(e, n) {
        var i = he, s = ve;
        if (we(n)) {
          var u = "separator" in n ? n.separator : u;
          i = "length" in n ? X(n.length) : i, s = "omission" in n ? st(n.omission) : s;
        }
        e = ie(e);
        var f = e.length;
        if (pr(e)) {
          var m = Ft(e);
          f = m.length;
        }
        if (i >= f)
          return e;
        var v = i - mr(s);
        if (v < 1)
          return s;
        var U = m ? Nn(m, 0, v).join("") : e.slice(0, v);
        if (u === r)
          return U + s;
        if (m && (v += U.length - v), Tl(u)) {
          if (e.slice(v).search(u)) {
            var Z, b = U;
            for (u.global || (u = Cs(u.source, ie(wu.exec(u)) + "g")), u.lastIndex = 0; Z = u.exec(b); )
              var J = Z.index;
            U = U.slice(0, J === r ? v : J);
          }
        } else if (e.indexOf(st(u), v) != v) {
          var S = U.lastIndexOf(u);
          S > -1 && (U = U.slice(0, S));
        }
        return U + s;
      }
      function _U(e) {
        return e = ie(e), e && Kw.test(e) ? e.replace(fu, vv) : e;
      }
      var zU = Rr(function(e, n, i) {
        return e + (i ? " " : "") + n.toUpperCase();
      }), Rl = Od("toUpperCase");
      function Ih(e, n, i) {
        return e = ie(e), n = i ? r : n, n === r ? hv(e) ? gv(e) : rv(e) : e.match(n) || [];
      }
      var Dh = $(function(e, n) {
        try {
          return it(e, r, n);
        } catch (i) {
          return Vl(i) ? i : new P(i);
        }
      }), GU = nn(function(e, n) {
        return Tt(n, function(i) {
          i = Yt(i), en(e, i, wl(e[i], e));
        }), e;
      });
      function YU(e) {
        var n = e == null ? 0 : e.length, i = _();
        return e = n ? me(e, function(s) {
          if (typeof s[1] != "function")
            throw new gt(d);
          return [i(s[0]), s[1]];
        }) : [], $(function(s) {
          for (var u = -1; ++u < n; ) {
            var f = e[u];
            if (it(f[0], this, s))
              return it(f[1], this, s);
          }
        });
      }
      function HU(e) {
        return vV(Rt(e, R));
      }
      function Nl(e) {
        return function() {
          return e;
        };
      }
      function PU(e, n) {
        return e == null || e !== e ? n : e;
      }
      var jU = _d(), XU = _d(!0);
      function et(e) {
        return e;
      }
      function yl(e) {
        return Vd(typeof e == "function" ? e : Rt(e, R));
      }
      function LU(e) {
        return gd(Rt(e, R));
      }
      function $U(e, n) {
        return Ud(e, Rt(n, R));
      }
      var qU = $(function(e, n) {
        return function(i) {
          return To(i, e, n);
        };
      }), KU = $(function(e, n) {
        return function(i) {
          return To(e, i, n);
        };
      });
      function kl(e, n, i) {
        var s = Se(n), u = Qi(n, s);
        i == null && !(we(n) && (u.length || !s.length)) && (i = n, n = e, e = this, u = Qi(n, Se(n)));
        var f = !(we(i) && "chain" in i) || !!i.chain, m = on(e);
        return Tt(u, function(v) {
          var U = n[v];
          e[v] = U, m && (e.prototype[v] = function() {
            var Z = this.__chain__;
            if (f || Z) {
              var b = e(this.__wrapped__), J = b.__actions__ = $e(this.__actions__);
              return J.push({ func: U, args: arguments, thisArg: e }), b.__chain__ = Z, b;
            }
            return U.apply(e, vn([this.value()], arguments));
          });
        }), e;
      }
      function eR() {
        return xe._ === this && (xe._ = Mv), this;
      }
      function Ml() {
      }
      function tR(e) {
        return e = X(e), $(function(n) {
          return Rd(n, e);
        });
      }
      var nR = rl(me), rR = rl(zu), oR = rl(bs);
      function Oh(e) {
        return ul(e) ? Js(Yt(e)) : WV(e);
      }
      function iR(e) {
        return function(n) {
          return e == null ? r : _n(e, n);
        };
      }
      var aR = Gd(), sR = Gd(!0);
      function Zl() {
        return [];
      }
      function bl() {
        return !1;
      }
      function lR() {
        return {};
      }
      function cR() {
        return "";
      }
      function uR() {
        return !0;
      }
      function dR(e, n) {
        if (e = X(e), e < 1 || e > He)
          return [];
        var i = _t, s = Qe(e, _t);
        n = _(n), e -= _t;
        for (var u = Fs(s, n); ++i < e; )
          n(i);
        return u;
      }
      function hR(e) {
        return j(e) ? me(e, Yt) : lt(e) ? [e] : $e(ah(ie(e)));
      }
      function fR(e) {
        var n = ++yv;
        return ie(e) + n;
      }
      var pR = Pi(function(e, n) {
        return e + n;
      }, 0), mR = ol("ceil"), wR = Pi(function(e, n) {
        return e / n;
      }, 1), vR = ol("floor");
      function VR(e) {
        return e && e.length ? Oi(e, et, zs) : r;
      }
      function TR(e, n) {
        return e && e.length ? Oi(e, _(n, 2), zs) : r;
      }
      function gR(e) {
        return Hu(e, et);
      }
      function UR(e, n) {
        return Hu(e, _(n, 2));
      }
      function RR(e) {
        return e && e.length ? Oi(e, et, Ps) : r;
      }
      function NR(e, n) {
        return e && e.length ? Oi(e, _(n, 2), Ps) : r;
      }
      var yR = Pi(function(e, n) {
        return e * n;
      }, 1), kR = ol("round"), MR = Pi(function(e, n) {
        return e - n;
      }, 0);
      function ZR(e) {
        return e && e.length ? Ss(e, et) : 0;
      }
      function bR(e, n) {
        return e && e.length ? Ss(e, _(n, 2)) : 0;
      }
      return h.after = LT, h.ary = vh, h.assign = Bg, h.assignIn = Sh, h.assignInWith = aa, h.assignWith = Ig, h.at = Dg, h.before = Vh, h.bind = wl, h.bindAll = GU, h.bindKey = Th, h.castArray = lg, h.chain = ph, h.chunk = v0, h.compact = V0, h.concat = T0, h.cond = YU, h.conforms = HU, h.constant = Nl, h.countBy = ZT, h.create = Og, h.curry = gh, h.curryRight = Uh, h.debounce = Rh, h.defaults = Qg, h.defaultsDeep = _g, h.defer = $T, h.delay = qT, h.difference = g0, h.differenceBy = U0, h.differenceWith = R0, h.drop = N0, h.dropRight = y0, h.dropRightWhile = k0, h.dropWhile = M0, h.fill = Z0, h.filter = JT, h.flatMap = FT, h.flatMapDeep = AT, h.flatMapDepth = WT, h.flatten = uh, h.flattenDeep = b0, h.flattenDepth = J0, h.flip = KT, h.flow = jU, h.flowRight = XU, h.fromPairs = E0, h.functions = Xg, h.functionsIn = Lg, h.groupBy = CT, h.initial = F0, h.intersection = A0, h.intersectionBy = W0, h.intersectionWith = C0, h.invert = qg, h.invertBy = Kg, h.invokeMap = BT, h.iteratee = yl, h.keyBy = IT, h.keys = Se, h.keysIn = Ke, h.map = ea, h.mapKeys = tU, h.mapValues = nU, h.matches = LU, h.matchesProperty = $U, h.memoize = na, h.merge = rU, h.mergeWith = Fh, h.method = qU, h.methodOf = KU, h.mixin = kl, h.negate = ra, h.nthArg = tR, h.omit = oU, h.omitBy = iU, h.once = eg, h.orderBy = DT, h.over = nR, h.overArgs = tg, h.overEvery = rR, h.overSome = oR, h.partial = vl, h.partialRight = Nh, h.partition = OT, h.pick = aU, h.pickBy = Ah, h.property = Oh, h.propertyOf = iR, h.pull = D0, h.pullAll = hh, h.pullAllBy = O0, h.pullAllWith = Q0, h.pullAt = _0, h.range = aR, h.rangeRight = sR, h.rearg = ng, h.reject = zT, h.remove = z0, h.rest = rg, h.reverse = pl, h.sampleSize = YT, h.set = lU, h.setWith = cU, h.shuffle = HT, h.slice = G0, h.sortBy = XT, h.sortedUniq = $0, h.sortedUniqBy = q0, h.split = FU, h.spread = og, h.tail = K0, h.take = eT, h.takeRight = tT, h.takeRightWhile = nT, h.takeWhile = rT, h.tap = VT, h.throttle = ig, h.thru = Ki, h.toArray = bh, h.toPairs = Wh, h.toPairsIn = Ch, h.toPath = hR, h.toPlainObject = Eh, h.transform = uU, h.unary = ag, h.union = oT, h.unionBy = iT, h.unionWith = aT, h.uniq = sT, h.uniqBy = lT, h.uniqWith = cT, h.unset = dU, h.unzip = ml, h.unzipWith = fh, h.update = hU, h.updateWith = fU, h.values = kr, h.valuesIn = pU, h.without = uT, h.words = Ih, h.wrap = sg, h.xor = dT, h.xorBy = hT, h.xorWith = fT, h.zip = pT, h.zipObject = mT, h.zipObjectDeep = wT, h.zipWith = vT, h.entries = Wh, h.entriesIn = Ch, h.extend = Sh, h.extendWith = aa, kl(h, h), h.add = pR, h.attempt = Dh, h.camelCase = VU, h.capitalize = xh, h.ceil = mR, h.clamp = mU, h.clone = cg, h.cloneDeep = dg, h.cloneDeepWith = hg, h.cloneWith = ug, h.conformsTo = fg, h.deburr = Bh, h.defaultTo = PU, h.divide = wR, h.endsWith = TU, h.eq = Wt, h.escape = gU, h.escapeRegExp = UU, h.every = bT, h.find = ET, h.findIndex = lh, h.findKey = zg, h.findLast = ST, h.findLastIndex = ch, h.findLastKey = Gg, h.floor = vR, h.forEach = mh, h.forEachRight = wh, h.forIn = Yg, h.forInRight = Hg, h.forOwn = Pg, h.forOwnRight = jg, h.get = gl, h.gt = pg, h.gte = mg, h.has = $g, h.hasIn = Ul, h.head = dh, h.identity = et, h.includes = xT, h.indexOf = S0, h.inRange = wU, h.invoke = eU, h.isArguments = Yn, h.isArray = j, h.isArrayBuffer = wg, h.isArrayLike = qe, h.isArrayLikeObject = Ue, h.isBoolean = vg, h.isBuffer = yn, h.isDate = Vg, h.isElement = Tg, h.isEmpty = gg, h.isEqual = Ug, h.isEqualWith = Rg, h.isError = Vl, h.isFinite = Ng, h.isFunction = on, h.isInteger = yh, h.isLength = oa, h.isMap = kh, h.isMatch = yg, h.isMatchWith = kg, h.isNaN = Mg, h.isNative = Zg, h.isNil = Jg, h.isNull = bg, h.isNumber = Mh, h.isObject = we, h.isObjectLike = Te, h.isPlainObject = ko, h.isRegExp = Tl, h.isSafeInteger = Eg, h.isSet = Zh, h.isString = ia, h.isSymbol = lt, h.isTypedArray = yr, h.isUndefined = Sg, h.isWeakMap = Fg, h.isWeakSet = Ag, h.join = x0, h.kebabCase = RU, h.last = yt, h.lastIndexOf = B0, h.lowerCase = NU, h.lowerFirst = yU, h.lt = Wg, h.lte = Cg, h.max = VR, h.maxBy = TR, h.mean = gR, h.meanBy = UR, h.min = RR, h.minBy = NR, h.stubArray = Zl, h.stubFalse = bl, h.stubObject = lR, h.stubString = cR, h.stubTrue = uR, h.multiply = yR, h.nth = I0, h.noConflict = eR, h.noop = Ml, h.now = ta, h.pad = kU, h.padEnd = MU, h.padStart = ZU, h.parseInt = bU, h.random = vU, h.reduce = QT, h.reduceRight = _T, h.repeat = JU, h.replace = EU, h.result = sU, h.round = kR, h.runInContext = T, h.sample = GT, h.size = PT, h.snakeCase = SU, h.some = jT, h.sortedIndex = Y0, h.sortedIndexBy = H0, h.sortedIndexOf = P0, h.sortedLastIndex = j0, h.sortedLastIndexBy = X0, h.sortedLastIndexOf = L0, h.startCase = AU, h.startsWith = WU, h.subtract = MR, h.sum = ZR, h.sumBy = bR, h.template = CU, h.times = dR, h.toFinite = an, h.toInteger = X, h.toLength = Jh, h.toLower = xU, h.toNumber = kt, h.toSafeInteger = xg, h.toString = ie, h.toUpper = BU, h.trim = IU, h.trimEnd = DU, h.trimStart = OU, h.truncate = QU, h.unescape = _U, h.uniqueId = fR, h.upperCase = zU, h.upperFirst = Rl, h.each = mh, h.eachRight = wh, h.first = dh, kl(h, function() {
        var e = {};
        return zt(h, function(n, i) {
          ae.call(h.prototype, i) || (e[i] = n);
        }), e;
      }(), { chain: !1 }), h.VERSION = a, Tt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        h[e].placeholder = h;
      }), Tt(["drop", "take"], function(e, n) {
        te.prototype[e] = function(i) {
          i = i === r ? 1 : Je(X(i), 0);
          var s = this.__filtered__ && !n ? new te(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = Qe(i, s.__takeCount__) : s.__views__.push({
            size: Qe(i, _t),
            type: e + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, te.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), Tt(["filter", "map", "takeWhile"], function(e, n) {
        var i = n + 1, s = i == ke || i == We;
        te.prototype[e] = function(u) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: _(u, 3),
            type: i
          }), f.__filtered__ = f.__filtered__ || s, f;
        };
      }), Tt(["head", "last"], function(e, n) {
        var i = "take" + (n ? "Right" : "");
        te.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), Tt(["initial", "tail"], function(e, n) {
        var i = "drop" + (n ? "" : "Right");
        te.prototype[e] = function() {
          return this.__filtered__ ? new te(this) : this[i](1);
        };
      }), te.prototype.compact = function() {
        return this.filter(et);
      }, te.prototype.find = function(e) {
        return this.filter(e).head();
      }, te.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, te.prototype.invokeMap = $(function(e, n) {
        return typeof e == "function" ? new te(this) : this.map(function(i) {
          return To(i, e, n);
        });
      }), te.prototype.reject = function(e) {
        return this.filter(ra(_(e)));
      }, te.prototype.slice = function(e, n) {
        e = X(e);
        var i = this;
        return i.__filtered__ && (e > 0 || n < 0) ? new te(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), n !== r && (n = X(n), i = n < 0 ? i.dropRight(-n) : i.take(n - e)), i);
      }, te.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, te.prototype.toArray = function() {
        return this.take(_t);
      }, zt(te.prototype, function(e, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), u = h[s ? "take" + (n == "last" ? "Right" : "") : n], f = s || /^find/.test(n);
        !u || (h.prototype[n] = function() {
          var m = this.__wrapped__, v = s ? [1] : arguments, U = m instanceof te, Z = v[0], b = U || j(m), J = function(ee) {
            var ne = u.apply(h, vn([ee], v));
            return s && S ? ne[0] : ne;
          };
          b && i && typeof Z == "function" && Z.length != 1 && (U = b = !1);
          var S = this.__chain__, D = !!this.__actions__.length, G = f && !S, L = U && !D;
          if (!f && b) {
            m = L ? m : new te(this);
            var Y = e.apply(m, v);
            return Y.__actions__.push({ func: Ki, args: [J], thisArg: r }), new Ut(Y, S);
          }
          return G && L ? e.apply(this, v) : (Y = this.thru(J), G ? s ? Y.value()[0] : Y.value() : Y);
        });
      }), Tt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = ki[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
        h.prototype[e] = function() {
          var u = arguments;
          if (s && !this.__chain__) {
            var f = this.value();
            return n.apply(j(f) ? f : [], u);
          }
          return this[i](function(m) {
            return n.apply(j(m) ? m : [], u);
          });
        };
      }), zt(te.prototype, function(e, n) {
        var i = h[n];
        if (i) {
          var s = i.name + "";
          ae.call(Tr, s) || (Tr[s] = []), Tr[s].push({ name: n, func: i });
        }
      }), Tr[Hi(r, A).name] = [{
        name: "wrapper",
        func: r
      }], te.prototype.clone = _v, te.prototype.reverse = zv, te.prototype.value = Gv, h.prototype.at = TT, h.prototype.chain = gT, h.prototype.commit = UT, h.prototype.next = RT, h.prototype.plant = yT, h.prototype.reverse = kT, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = MT, h.prototype.first = h.prototype.head, ho && (h.prototype[ho] = NT), h;
    }, wr = Uv();
    Bn ? ((Bn.exports = wr)._ = wr, ys._ = wr) : xe._ = wr;
  }).call(Mo);
})(Ze, Ze.exports);
const jN = "/alarms?_s=", La = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, XN = async (t, o) => {
  try {
    return (await Wn.put(
      `/alarms/${t}?ack=${o}`,
      {
        body: `alarm=${t}`
      },
      La
    )).status === 204;
  } catch {
    return !1;
  }
}, LN = async (t, o) => {
  try {
    return (await Wn.put(
      `/alarms/${t}?${o}=true`,
      {
        body: `alarm=${t}`
      },
      La
    )).status === 204;
  } catch {
    return !1;
  }
}, $N = async (t, o) => {
  try {
    const r = t.join(",alarm.id==");
    return (await An.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      La
    )).status == 204;
  } catch {
    return !1;
  }
}, qN = async () => {
  try {
    const t = `${jN}isSituation==true&limit=0`, o = await An(t);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, KN = async (t) => {
  try {
    const o = t.join(",id=="), r = await An(`/alarms?_s=id==${o}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Em = async (t) => {
  try {
    const o = await An(`/alarms/${t}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, ey = async (t) => {
  try {
    const o = await An(`/events?_s=alarm.id==${t}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, ty = async () => {
  try {
    const t = await An("/nodes?limit=0");
    return t.status === 200 ? t.data.node.map((a) => Ze.exports.pick(a, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, ny = async (t, o, r) => {
  try {
    return (await An.put(
      `/alarms/${t}/${o}`,
      `body=${r}`,
      La
    )).status == 204;
  } catch {
    return !1;
  }
}, ry = async (t, o) => {
  try {
    return (await An.delete(`/alarms/${t}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, pt = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M/y HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  ESCALATE: "escalate",
  CLEAR: "clear"
}, oy = "/alec", iy = "/alec/engine/configuration", Sm = "/alec/agreement/configuration", ay = "/alec/situation/statusList", Fm = async (t) => {
  try {
    return (await Wn.post(`${Sm}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, sy = async () => {
  try {
    const t = await Wn.get(`${Sm}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, ly = async (t, o) => {
  try {
    return (await Wn.post(iy, {
      distanceMeasureName: o ? pt.HELLINGER_OPTION : pt.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, Am = async (t, o) => {
  try {
    return (await Wn.post(`${oy}/situation/${o}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, cy = async () => {
  try {
    const t = await Wn.get(ay);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, uy = window.Pinia.defineStore, qr = uy("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    situationDetail: null,
    filteredSituations: [],
    nodes: [],
    filters: null
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const t = await ty();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await qN(), o = await cy();
      if (t) {
        const r = t.alarm.map((c) => {
          const d = o.filter(
            (p) => parseInt(p.id) === c.id
          );
          return c.status = d && d[0] ? d[0].status : "CREATED", c;
        });
        this.filteredSituations = r.map((c) => c.id);
        const a = Ze.exports.groupBy(r, "status"), l = [
          ...a.CREATED || [],
          ...a.ACCEPTED || [],
          ...a.REJECTED || []
        ];
        this.situations = l;
      }
    },
    async getSituation(t) {
      if (t) {
        const o = await Em(t);
        if (o) {
          const r = o.relatedAlarms.map((c) => c.id), l = await KN(r);
          o.alarms = Ze.exports.sortBy(l, ["id"]), this.situationDetail = o;
        }
      }
    },
    async getEvents(t, o) {
      const r = {};
      await Promise.all(
        o.map(async (a) => {
          const l = await ey(a);
          l && (r[a] = Ze.exports.reverse(l));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    }
  }
}), dy = window.Vue.openBlock, hy = window.Vue.createElementBlock, fy = window.Vue.createElementVNode;
var py = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const my = {}, wy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vy = /* @__PURE__ */ fy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), Vy = [
  vy
];
function Ty(t, o) {
  return dy(), hy("svg", wy, Vy);
}
var ai = /* @__PURE__ */ py(my, [["render", Ty]]);
var gy = Object.defineProperty, hf = Object.getOwnPropertySymbols, Uy = Object.prototype.hasOwnProperty, Ry = Object.prototype.propertyIsEnumerable, ff = (t, o, r) => o in t ? gy(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, pf = (t, o) => {
  for (var r in o || (o = {}))
    Uy.call(o, r) && ff(t, r, o[r]);
  if (hf)
    for (var r of hf(o))
      Ry.call(o, r) && ff(t, r, o[r]);
  return t;
};
const Ny = window.Vue.defineComponent, yy = window.Vue.toRaw, Gl = window.Vue.h;
var ky = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const My = {
  icon: {
    type: Object,
    required: !1
  },
  flex: {
    type: Boolean,
    default: !1
  },
  title: {
    type: String,
    required: !1
  }
}, Zy = Ny({
  props: My,
  render() {
    const t = this.$attrs, o = t.class ? t.class.split(" ").reduce((l, c) => (l[c] = !0, l), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let a = yy(this.icon);
    return this.$slots.default ? Gl("span", { class: "feather-icon-container" }, [
      Gl(this.$slots.default()[0], pf({
        class: o
      }, r))
    ]) : Gl(a, pf({
      class: o
    }, r));
  }
});
var K = /* @__PURE__ */ ky(Zy, [["__scopeId", "data-v-52cbf270"]]);
const by = window.Vue.openBlock, Jy = window.Vue.createElementBlock, Ey = window.Vue.createElementVNode;
var Sy = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Fy = {}, Ay = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Wy = /* @__PURE__ */ Ey("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Cy = [
  Wy
];
function xy(t, o) {
  return by(), Jy("svg", Ay, Cy);
}
var Wm = /* @__PURE__ */ Sy(Fy, [["render", xy]]);
function ir(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var o = Number(t);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Oe(t, o) {
  if (o.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function Ye(t) {
  Oe(1, arguments);
  var o = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && o === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || o === "[object Number]" ? new Date(t) : ((typeof t == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function By(t, o) {
  Oe(2, arguments);
  var r = Ye(t).getTime(), a = ir(o);
  return new Date(r + a);
}
var Iy = {};
function si() {
  return Iy;
}
function Rc(t) {
  var o = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
}
function Dy(t, o) {
  Oe(2, arguments);
  var r = Ye(t), a = Ye(o), l = r.getTime() - a.getTime();
  return l < 0 ? -1 : l > 0 ? 1 : l;
}
function Oy(t) {
  return Oe(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Qy(t) {
  if (Oe(1, arguments), !Oy(t) && typeof t != "number")
    return !1;
  var o = Ye(t);
  return !isNaN(Number(o));
}
function _y(t, o) {
  Oe(2, arguments);
  var r = ir(o);
  return By(t, -r);
}
var zy = 864e5;
function Gy(t) {
  Oe(1, arguments);
  var o = Ye(t), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var a = o.getTime(), l = r - a;
  return Math.floor(l / zy) + 1;
}
function Ca(t) {
  Oe(1, arguments);
  var o = 1, r = Ye(t), a = r.getUTCDay(), l = (a < o ? 7 : 0) + a - o;
  return r.setUTCDate(r.getUTCDate() - l), r.setUTCHours(0, 0, 0, 0), r;
}
function Cm(t) {
  Oe(1, arguments);
  var o = Ye(t), r = o.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var l = Ca(a), c = new Date(0);
  c.setUTCFullYear(r, 0, 4), c.setUTCHours(0, 0, 0, 0);
  var d = Ca(c);
  return o.getTime() >= l.getTime() ? r + 1 : o.getTime() >= d.getTime() ? r : r - 1;
}
function Yy(t) {
  Oe(1, arguments);
  var o = Cm(t), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = Ca(r);
  return a;
}
var Hy = 6048e5;
function Py(t) {
  Oe(1, arguments);
  var o = Ye(t), r = Ca(o).getTime() - Yy(o).getTime();
  return Math.round(r / Hy) + 1;
}
function xa(t, o) {
  var r, a, l, c, d, p, w, V;
  Oe(1, arguments);
  var g = si(), R = ir((r = (a = (l = (c = o == null ? void 0 : o.weekStartsOn) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && l !== void 0 ? l : g.weekStartsOn) !== null && a !== void 0 ? a : (w = g.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ye(t), F = y.getUTCDay(), E = (F < R ? 7 : 0) + F - R;
  return y.setUTCDate(y.getUTCDate() - E), y.setUTCHours(0, 0, 0, 0), y;
}
function xm(t, o) {
  var r, a, l, c, d, p, w, V;
  Oe(1, arguments);
  var g = Ye(t), R = g.getUTCFullYear(), y = si(), F = ir((r = (a = (l = (c = o == null ? void 0 : o.firstWeekContainsDate) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && l !== void 0 ? l : y.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = y.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var E = new Date(0);
  E.setUTCFullYear(R + 1, 0, F), E.setUTCHours(0, 0, 0, 0);
  var I = xa(E, o), C = new Date(0);
  C.setUTCFullYear(R, 0, F), C.setUTCHours(0, 0, 0, 0);
  var A = xa(C, o);
  return g.getTime() >= I.getTime() ? R + 1 : g.getTime() >= A.getTime() ? R : R - 1;
}
function jy(t, o) {
  var r, a, l, c, d, p, w, V;
  Oe(1, arguments);
  var g = si(), R = ir((r = (a = (l = (c = o == null ? void 0 : o.firstWeekContainsDate) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && l !== void 0 ? l : g.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = g.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = xm(t, o), F = new Date(0);
  F.setUTCFullYear(y, 0, R), F.setUTCHours(0, 0, 0, 0);
  var E = xa(F, o);
  return E;
}
var Xy = 6048e5;
function Ly(t, o) {
  Oe(1, arguments);
  var r = Ye(t), a = xa(r, o).getTime() - jy(r, o).getTime();
  return Math.round(a / Xy) + 1;
}
function se(t, o) {
  for (var r = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < o; )
    a = "0" + a;
  return r + a;
}
var $y = {
  y: function(t, o) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return se(o === "yy" ? a % 100 : a, o.length);
  },
  M: function(t, o) {
    var r = t.getUTCMonth();
    return o === "M" ? String(r + 1) : se(r + 1, 2);
  },
  d: function(t, o) {
    return se(t.getUTCDate(), o.length);
  },
  a: function(t, o) {
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
  h: function(t, o) {
    return se(t.getUTCHours() % 12 || 12, o.length);
  },
  H: function(t, o) {
    return se(t.getUTCHours(), o.length);
  },
  m: function(t, o) {
    return se(t.getUTCMinutes(), o.length);
  },
  s: function(t, o) {
    return se(t.getUTCSeconds(), o.length);
  },
  S: function(t, o) {
    var r = o.length, a = t.getUTCMilliseconds(), l = Math.floor(a * Math.pow(10, r - 3));
    return se(l, o.length);
  }
};
const kn = $y;
var br = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, qy = {
  G: function(t, o, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (o) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  y: function(t, o, r) {
    if (o === "yo") {
      var a = t.getUTCFullYear(), l = a > 0 ? a : 1 - a;
      return r.ordinalNumber(l, {
        unit: "year"
      });
    }
    return kn.y(t, o);
  },
  Y: function(t, o, r, a) {
    var l = xm(t, a), c = l > 0 ? l : 1 - l;
    if (o === "YY") {
      var d = c % 100;
      return se(d, 2);
    }
    return o === "Yo" ? r.ordinalNumber(c, {
      unit: "year"
    }) : se(c, o.length);
  },
  R: function(t, o) {
    var r = Cm(t);
    return se(r, o.length);
  },
  u: function(t, o) {
    var r = t.getUTCFullYear();
    return se(r, o.length);
  },
  Q: function(t, o, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(a);
      case "QQ":
        return se(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(t, o, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (o) {
      case "q":
        return String(a);
      case "qq":
        return se(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(t, o, r) {
    var a = t.getUTCMonth();
    switch (o) {
      case "M":
      case "MM":
        return kn.M(t, o);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(t, o, r) {
    var a = t.getUTCMonth();
    switch (o) {
      case "L":
        return String(a + 1);
      case "LL":
        return se(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(t, o, r, a) {
    var l = Ly(t, a);
    return o === "wo" ? r.ordinalNumber(l, {
      unit: "week"
    }) : se(l, o.length);
  },
  I: function(t, o, r) {
    var a = Py(t);
    return o === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : se(a, o.length);
  },
  d: function(t, o, r) {
    return o === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : kn.d(t, o);
  },
  D: function(t, o, r) {
    var a = Gy(t);
    return o === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : se(a, o.length);
  },
  E: function(t, o, r) {
    var a = t.getUTCDay();
    switch (o) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(t, o, r, a) {
    var l = t.getUTCDay(), c = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "e":
        return String(c);
      case "ee":
        return se(c, 2);
      case "eo":
        return r.ordinalNumber(c, {
          unit: "day"
        });
      case "eee":
        return r.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(l, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(t, o, r, a) {
    var l = t.getUTCDay(), c = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "c":
        return String(c);
      case "cc":
        return se(c, o.length);
      case "co":
        return r.ordinalNumber(c, {
          unit: "day"
        });
      case "ccc":
        return r.day(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(l, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(l, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(t, o, r) {
    var a = t.getUTCDay(), l = a === 0 ? 7 : a;
    switch (o) {
      case "i":
        return String(l);
      case "ii":
        return se(l, o.length);
      case "io":
        return r.ordinalNumber(l, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(t, o, r) {
    var a = t.getUTCHours(), l = a / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(t, o, r) {
    var a = t.getUTCHours(), l;
    switch (a === 12 ? l = br.noon : a === 0 ? l = br.midnight : l = a / 12 >= 1 ? "pm" : "am", o) {
      case "b":
      case "bb":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(t, o, r) {
    var a = t.getUTCHours(), l;
    switch (a >= 17 ? l = br.evening : a >= 12 ? l = br.afternoon : a >= 4 ? l = br.morning : l = br.night, o) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(l, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(t, o, r) {
    if (o === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return kn.h(t, o);
  },
  H: function(t, o, r) {
    return o === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : kn.H(t, o);
  },
  K: function(t, o, r) {
    var a = t.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : se(a, o.length);
  },
  k: function(t, o, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), o === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : se(a, o.length);
  },
  m: function(t, o, r) {
    return o === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : kn.m(t, o);
  },
  s: function(t, o, r) {
    return o === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : kn.s(t, o);
  },
  S: function(t, o) {
    return kn.S(t, o);
  },
  X: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    if (c === 0)
      return "Z";
    switch (o) {
      case "X":
        return wf(c);
      case "XXXX":
      case "XX":
        return er(c);
      case "XXXXX":
      case "XXX":
      default:
        return er(c, ":");
    }
  },
  x: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (o) {
      case "x":
        return wf(c);
      case "xxxx":
      case "xx":
        return er(c);
      case "xxxxx":
      case "xxx":
      default:
        return er(c, ":");
    }
  },
  O: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + mf(c, ":");
      case "OOOO":
      default:
        return "GMT" + er(c, ":");
    }
  },
  z: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + mf(c, ":");
      case "zzzz":
      default:
        return "GMT" + er(c, ":");
    }
  },
  t: function(t, o, r, a) {
    var l = a._originalDate || t, c = Math.floor(l.getTime() / 1e3);
    return se(c, o.length);
  },
  T: function(t, o, r, a) {
    var l = a._originalDate || t, c = l.getTime();
    return se(c, o.length);
  }
};
function mf(t, o) {
  var r = t > 0 ? "-" : "+", a = Math.abs(t), l = Math.floor(a / 60), c = a % 60;
  if (c === 0)
    return r + String(l);
  var d = o || "";
  return r + String(l) + d + se(c, 2);
}
function wf(t, o) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + se(Math.abs(t) / 60, 2);
  }
  return er(t, o);
}
function er(t, o) {
  var r = o || "", a = t > 0 ? "-" : "+", l = Math.abs(t), c = se(Math.floor(l / 60), 2), d = se(l % 60, 2);
  return a + c + r + d;
}
const Ky = qy;
var vf = function(t, o) {
  switch (t) {
    case "P":
      return o.date({
        width: "short"
      });
    case "PP":
      return o.date({
        width: "medium"
      });
    case "PPP":
      return o.date({
        width: "long"
      });
    case "PPPP":
    default:
      return o.date({
        width: "full"
      });
  }
}, Bm = function(t, o) {
  switch (t) {
    case "p":
      return o.time({
        width: "short"
      });
    case "pp":
      return o.time({
        width: "medium"
      });
    case "ppp":
      return o.time({
        width: "long"
      });
    case "pppp":
    default:
      return o.time({
        width: "full"
      });
  }
}, ek = function(t, o) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], l = r[2];
  if (!l)
    return vf(t, o);
  var c;
  switch (a) {
    case "P":
      c = o.dateTime({
        width: "short"
      });
      break;
    case "PP":
      c = o.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      c = o.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      c = o.dateTime({
        width: "full"
      });
      break;
  }
  return c.replace("{{date}}", vf(a, o)).replace("{{time}}", Bm(l, o));
}, tk = {
  p: Bm,
  P: ek
};
const nk = tk;
var rk = ["D", "DD"], ok = ["YY", "YYYY"];
function ik(t) {
  return rk.indexOf(t) !== -1;
}
function ak(t) {
  return ok.indexOf(t) !== -1;
}
function Vf(t, o, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var sk = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, lk = function(t, o, r) {
  var a, l = sk[t];
  return typeof l == "string" ? a = l : o === 1 ? a = l.one : a = l.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const ck = lk;
function Yl(t) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : t.defaultWidth, a = t.formats[r] || t.formats[t.defaultWidth];
    return a;
  };
}
var uk = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, dk = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, hk = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, fk = {
  date: Yl({
    formats: uk,
    defaultWidth: "full"
  }),
  time: Yl({
    formats: dk,
    defaultWidth: "full"
  }),
  dateTime: Yl({
    formats: hk,
    defaultWidth: "full"
  })
};
const pk = fk;
var mk = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, wk = function(t, o, r, a) {
  return mk[t];
};
const vk = wk;
function Zo(t) {
  return function(o, r) {
    var a = r != null && r.context ? String(r.context) : "standalone", l;
    if (a === "formatting" && t.formattingValues) {
      var c = t.defaultFormattingWidth || t.defaultWidth, d = r != null && r.width ? String(r.width) : c;
      l = t.formattingValues[d] || t.formattingValues[c];
    } else {
      var p = t.defaultWidth, w = r != null && r.width ? String(r.width) : t.defaultWidth;
      l = t.values[w] || t.values[p];
    }
    var V = t.argumentCallback ? t.argumentCallback(o) : o;
    return l[V];
  };
}
var Vk = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Tk = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, gk = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Uk = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Rk = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Nk = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, yk = function(t, o) {
  var r = Number(t), a = r % 100;
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
}, kk = {
  ordinalNumber: yk,
  era: Zo({
    values: Vk,
    defaultWidth: "wide"
  }),
  quarter: Zo({
    values: Tk,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Zo({
    values: gk,
    defaultWidth: "wide"
  }),
  day: Zo({
    values: Uk,
    defaultWidth: "wide"
  }),
  dayPeriod: Zo({
    values: Rk,
    defaultWidth: "wide",
    formattingValues: Nk,
    defaultFormattingWidth: "wide"
  })
};
const Mk = kk;
function bo(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, l = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth], c = o.match(l);
    if (!c)
      return null;
    var d = c[0], p = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth], w = Array.isArray(p) ? bk(p, function(R) {
      return R.test(d);
    }) : Zk(p, function(R) {
      return R.test(d);
    }), V;
    V = t.valueCallback ? t.valueCallback(w) : w, V = r.valueCallback ? r.valueCallback(V) : V;
    var g = o.slice(d.length);
    return {
      value: V,
      rest: g
    };
  };
}
function Zk(t, o) {
  for (var r in t)
    if (t.hasOwnProperty(r) && o(t[r]))
      return r;
}
function bk(t, o) {
  for (var r = 0; r < t.length; r++)
    if (o(t[r]))
      return r;
}
function Jk(t) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = o.match(t.matchPattern);
    if (!a)
      return null;
    var l = a[0], c = o.match(t.parsePattern);
    if (!c)
      return null;
    var d = t.valueCallback ? t.valueCallback(c[0]) : c[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    var p = o.slice(l.length);
    return {
      value: d,
      rest: p
    };
  };
}
var Ek = /^(\d+)(th|st|nd|rd)?/i, Sk = /\d+/i, Fk = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ak = {
  any: [/^b/i, /^(a|c)/i]
}, Wk = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ck = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, xk = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Bk = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, Ik = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Dk = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ok = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Qk = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, _k = {
  ordinalNumber: Jk({
    matchPattern: Ek,
    parsePattern: Sk,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: bo({
    matchPatterns: Fk,
    defaultMatchWidth: "wide",
    parsePatterns: Ak,
    defaultParseWidth: "any"
  }),
  quarter: bo({
    matchPatterns: Wk,
    defaultMatchWidth: "wide",
    parsePatterns: Ck,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: bo({
    matchPatterns: xk,
    defaultMatchWidth: "wide",
    parsePatterns: Bk,
    defaultParseWidth: "any"
  }),
  day: bo({
    matchPatterns: Ik,
    defaultMatchWidth: "wide",
    parsePatterns: Dk,
    defaultParseWidth: "any"
  }),
  dayPeriod: bo({
    matchPatterns: Ok,
    defaultMatchWidth: "any",
    parsePatterns: Qk,
    defaultParseWidth: "any"
  })
};
const zk = _k;
var Gk = {
  code: "en-US",
  formatDistance: ck,
  formatLong: pk,
  formatRelative: vk,
  localize: Mk,
  match: zk,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Im = Gk;
var Yk = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Hk = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Pk = /^'([^]*?)'?$/, jk = /''/g, Xk = /[a-zA-Z]/;
function Lk(t, o, r) {
  var a, l, c, d, p, w, V, g, R, y, F, E, I, C, A, Q, O, H;
  Oe(2, arguments);
  var k = String(o), W = si(), x = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : W.locale) !== null && a !== void 0 ? a : Im, z = ir((c = (d = (p = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (V = r.locale) === null || V === void 0 || (g = V.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && p !== void 0 ? p : W.firstWeekContainsDate) !== null && d !== void 0 ? d : (R = W.locale) === null || R === void 0 || (y = R.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
  if (!(z >= 1 && z <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var de = ir((F = (E = (I = (C = r == null ? void 0 : r.weekStartsOn) !== null && C !== void 0 ? C : r == null || (A = r.locale) === null || A === void 0 || (Q = A.options) === null || Q === void 0 ? void 0 : Q.weekStartsOn) !== null && I !== void 0 ? I : W.weekStartsOn) !== null && E !== void 0 ? E : (O = W.locale) === null || O === void 0 || (H = O.options) === null || H === void 0 ? void 0 : H.weekStartsOn) !== null && F !== void 0 ? F : 0);
  if (!(de >= 0 && de <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!x.localize)
    throw new RangeError("locale must contain localize property");
  if (!x.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var he = Ye(t);
  if (!Qy(he))
    throw new RangeError("Invalid time value");
  var ve = Rc(he), Ve = _y(he, ve), ge = {
    firstWeekContainsDate: z,
    weekStartsOn: de,
    locale: x,
    _originalDate: he
  }, ke = k.match(Hk).map(function(ce) {
    var We = ce[0];
    if (We === "p" || We === "P") {
      var Ce = nk[We];
      return Ce(ce, x.formatLong);
    }
    return ce;
  }).join("").match(Yk).map(function(ce) {
    if (ce === "''")
      return "'";
    var We = ce[0];
    if (We === "'")
      return $k(ce);
    var Ce = Ky[We];
    if (Ce)
      return !(r != null && r.useAdditionalWeekYearTokens) && ak(ce) && Vf(ce, o, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && ik(ce) && Vf(ce, o, String(t)), Ce(Ve, ce, x.localize, ge);
    if (We.match(Xk))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + We + "`");
    return ce;
  }).join("");
  return ke;
}
function $k(t) {
  var o = t.match(Pk);
  return o ? o[1].replace(jk, "'") : t;
}
function Dm(t, o) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
  return t;
}
function qk(t) {
  return Dm({}, t);
}
var Tf = 1e3 * 60, Ba = 60 * 24, gf = Ba * 30, Uf = Ba * 365;
function Kk(t, o, r) {
  var a, l, c;
  Oe(2, arguments);
  var d = si(), p = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : d.locale) !== null && a !== void 0 ? a : Im;
  if (!p.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = Dy(t, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var V = Dm(qk(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), g, R;
  w > 0 ? (g = Ye(o), R = Ye(t)) : (g = Ye(t), R = Ye(o));
  var y = String((c = r == null ? void 0 : r.roundingMethod) !== null && c !== void 0 ? c : "round"), F;
  if (y === "floor")
    F = Math.floor;
  else if (y === "ceil")
    F = Math.ceil;
  else if (y === "round")
    F = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var E = R.getTime() - g.getTime(), I = E / Tf, C = Rc(R) - Rc(g), A = (E - C) / Tf, Q = r == null ? void 0 : r.unit, O;
  if (Q ? O = String(Q) : I < 1 ? O = "second" : I < 60 ? O = "minute" : I < Ba ? O = "hour" : A < gf ? O = "day" : A < Uf ? O = "month" : O = "year", O === "second") {
    var H = F(E / 1e3);
    return p.formatDistance("xSeconds", H, V);
  } else if (O === "minute") {
    var k = F(I);
    return p.formatDistance("xMinutes", k, V);
  } else if (O === "hour") {
    var W = F(I / 60);
    return p.formatDistance("xHours", W, V);
  } else if (O === "day") {
    var x = F(A / Ba);
    return p.formatDistance("xDays", x, V);
  } else if (O === "month") {
    var z = F(A / gf);
    return z === 12 && Q !== "month" ? p.formatDistance("xYears", 1, V) : p.formatDistance("xMonths", z, V);
  } else if (O === "year") {
    var de = F(A / Uf);
    return p.formatDistance("xYears", de, V);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const Xt = (t) => {
  let o = "";
  if (t)
    try {
      o = Lk(new Date(t), pt.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return o;
}, eM = window.Vue.defineComponent, Ht = window.Vue.unref, Rf = window.Vue.normalizeClass, hn = window.Vue.createElementVNode, Jo = window.Vue.toDisplayString, Nf = window.Vue.createVNode, Jr = window.Vue.openBlock, Er = window.Vue.createElementBlock, Hl = window.Vue.createCommentVNode, Om = window.Vue.createTextVNode, tM = window.Vue.renderList, nM = window.Vue.Fragment, rM = window.Vue.pushScopeId, oM = window.Vue.popScopeId, Qm = (t) => (rM("data-v-ed1e125a"), t = t(), oM(), t), iM = { class: "content" }, aM = { class: "title-row" }, sM = { class: "title" }, lM = {
  key: 0,
  class: "accepted"
}, cM = {
  key: 1,
  class: "rejected"
}, uM = /* @__PURE__ */ Qm(() => /* @__PURE__ */ hn("span", { class: "info-title" }, " First Event: ", -1)), dM = /* @__PURE__ */ Qm(() => /* @__PURE__ */ hn("hr", null, null, -1)), hM = {
  key: 0,
  class: "count-info"
}, fM = /* @__PURE__ */ Om(" Alarms: "), pM = { class: "info-title" }, mM = /* @__PURE__ */ eM({
  __name: "SituationCard",
  props: {
    situationInfo: null
  },
  emits: ["situation-selected"],
  setup(t, { emit: o }) {
    const r = t, a = pt.ACCEPTED, l = pt.REJECTED, c = r.situationInfo.description.replace(/(<([^>]+)>)/gi, "").substring(0, 230) + "...", d = () => {
      var p;
      o("situation-selected", (p = r.situationInfo) == null ? void 0 : p.id);
    };
    return (p, w) => {
      var V, g, R;
      return Jr(), Er("div", {
        onClick: d,
        class: Rf(["card", {
          rejected: r.situationInfo.status == Ht(l)
        }])
      }, [
        hn("div", {
          class: Rf(["severity-line", [`${(g = (V = r.situationInfo) == null ? void 0 : V.severity) == null ? void 0 : g.toLowerCase()}-bg dark`]])
        }, null, 2),
        hn("div", iM, [
          hn("div", aM, [
            hn("div", sM, "Situation " + Jo((R = r.situationInfo) == null ? void 0 : R.id), 1),
            r.situationInfo.status == Ht(a) ? (Jr(), Er("div", lM, [
              Nf(Ht(K), {
                icon: Ht(ai),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Hl("", !0),
            r.situationInfo.status == Ht(l) ? (Jr(), Er("div", cM, [
              Nf(Ht(K), {
                icon: Ht(Wm),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Hl("", !0)
          ]),
          hn("div", null, [
            uM,
            Om(Jo(Ht(Xt)(r.situationInfo.firstEventTime)), 1)
          ]),
          hn("div", { class: "description" }, Jo(c)),
          dM,
          r.situationInfo.relatedAlarms ? (Jr(), Er("div", hM, [
            fM,
            hn("span", pM, Jo(r.situationInfo.relatedAlarms.length), 1)
          ])) : Hl("", !0),
          (Jr(!0), Er(nM, null, tM(Ht(Ze.exports.keys)(
            Ht(Ze.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (y) => (Jr(), Er("div", {
            class: "info-title",
            key: y
          }, " - " + Jo(y), 1))), 128))
        ])
      ], 2);
    };
  }
});
const wM = /* @__PURE__ */ ye(mM, [["__scopeId", "data-v-ed1e125a"]]), vM = window.Vue.openBlock, VM = window.Vue.createElementBlock, TM = window.Vue.createElementVNode;
var gM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const UM = {}, RM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NM = /* @__PURE__ */ TM("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), yM = [
  NM
];
function kM(t, o) {
  return vM(), VM("svg", RM, yM);
}
var MM = /* @__PURE__ */ gM(UM, [["render", kM]]);
const ZM = window.Vue.openBlock, bM = window.Vue.createElementBlock, _m = window.Vue.createElementVNode;
var JM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const EM = {}, SM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FM = /* @__PURE__ */ _m("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), AM = /* @__PURE__ */ _m("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), WM = [
  FM,
  AM
];
function CM(t, o) {
  return ZM(), bM("svg", SM, WM);
}
var xM = /* @__PURE__ */ JM(EM, [["render", CM]]);
const BM = window.Vue.openBlock, IM = window.Vue.createElementBlock, DM = window.Vue.createElementVNode;
var OM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const QM = {}, _M = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zM = /* @__PURE__ */ DM("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), GM = [
  zM
];
function YM(t, o) {
  return BM(), IM("svg", _M, GM);
}
var HM = /* @__PURE__ */ OM(QM, [["render", YM]]);
const PM = window.Vue.openBlock, jM = window.Vue.createElementBlock, XM = window.Vue.createElementVNode;
var LM = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const $M = {}, qM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KM = /* @__PURE__ */ XM("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), eZ = [
  KM
];
function tZ(t, o) {
  return PM(), jM("svg", qM, eZ);
}
var zm = /* @__PURE__ */ LM($M, [["render", tZ]]);
const nZ = window.Vue.defineComponent, Mn = window.Vue.unref, sa = window.Vue.normalizeClass, la = window.Vue.createVNode, rZ = window.Vue.openBlock, oZ = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const iZ = { class: "paginator" }, aZ = /* @__PURE__ */ nZ({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(t, { emit: o }) {
    const r = t, a = (l) => {
      l >= 0 && l <= r.totalPages - 1 && o("go-to-page", l);
    };
    return (l, c) => (rZ(), oZ("div", iZ, [
      la(Mn(K), {
        icon: Mn(MM),
        "aria-hidden": "true",
        class: sa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[0] || (c[0] = (d) => a(0))
      }, null, 8, ["icon", "class"]),
      la(Mn(K), {
        icon: Mn(HM),
        "aria-hidden": "true",
        class: sa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[1] || (c[1] = (d) => a(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      la(Mn(K), {
        icon: Mn(zm),
        "aria-hidden": "true",
        class: sa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[2] || (c[2] = (d) => a(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      la(Mn(K), {
        icon: Mn(xM),
        "aria-hidden": "true",
        class: sa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[3] || (c[3] = (d) => a(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const sZ = /* @__PURE__ */ ye(aZ, [["__scopeId", "data-v-40758818"]]);
const le = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, lZ = window.Vue.computed, Gm = (t, o) => {
  const r = {};
  return Object.keys(o).forEach((a) => {
    r[`${a}Label`] = lZ(() => t.value[a] ? t.value[a] : o[a]);
  }), r;
};
const Lo = function(t, o) {
  return window ? window.setTimeout(t, o) : setTimeout(t, o);
}, $o = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var cZ = Object.defineProperty, uZ = Object.defineProperties, dZ = Object.getOwnPropertyDescriptors, yf = Object.getOwnPropertySymbols, hZ = Object.prototype.hasOwnProperty, fZ = Object.prototype.propertyIsEnumerable, kf = (t, o, r) => o in t ? cZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Mf = (t, o) => {
  for (var r in o || (o = {}))
    hZ.call(o, r) && kf(t, r, o[r]);
  if (yf)
    for (var r of yf(o))
      fZ.call(o, r) && kf(t, r, o[r]);
  return t;
}, pZ = (t, o) => uZ(t, dZ(o));
const mZ = window.Vue.defineComponent, wZ = window.Vue.h;
var vZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const VZ = {
  center: {
    type: Boolean,
    default: !1
  }
}, TZ = mZ({
  props: VZ,
  data() {
    return {
      pressed: !1,
      active: !1,
      styles: {},
      failsafe: -1
    };
  },
  computed: {
    parent() {
      return this.$el.parentNode;
    }
  },
  methods: {
    onClick(t) {
      this.pressed = !1, this.active = !1, requestAnimationFrame(() => {
        const { clientWidth: o, clientHeight: r } = this.parent, a = Math.round(Math.max(o, r));
        let l = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const c = this.parent.getBoundingClientRect(), d = t.pageY, p = t.pageX;
          l = {
            top: `${d - c.top - a / 2 - document.documentElement.scrollTop}px`,
            left: `${p - c.left - a / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = pZ(Mf({}, l), {
          height: `${a}px`,
          width: `${a}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, $o(this.failsafe), this.failsafe = Lo(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return wZ("div", {
        style: Mf({}, this.styles),
        class: ["ripple", { active: this.active, center: this.center }],
        onTransitionEnd: () => {
          this.pressed = !1, this.active = !1;
        },
        onTransitionCancel: () => {
          this.pressed = !1, this.active = !1;
        }
      });
  },
  mounted() {
    this.parent.addEventListener("click", this.onClick);
    const t = window.getComputedStyle(this.parent);
    this.parent.style.overflow = "hidden", !(t.position === "relative" || t.position === "absolute" || t.position === "fixed") && (this.parent.style.position = "relative");
  },
  unmounted() {
    this.parent.removeEventListener("click", this.onClick);
  }
});
var ar = /* @__PURE__ */ vZ(TZ, [["__scopeId", "data-v-18e2a5db"]]);
const gZ = window.Vue.openBlock, UZ = window.Vue.createElementBlock, RZ = window.Vue.createElementVNode;
var NZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const yZ = {}, kZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MZ = /* @__PURE__ */ RZ("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), ZZ = [
  MZ
];
function bZ(t, o) {
  return gZ(), UZ("svg", kZ, ZZ);
}
var li = /* @__PURE__ */ NZ(yZ, [["render", bZ]]);
const Zf = window.Vue.computed, JZ = (t, o, r) => {
  const a = Zf(() => o.value.filter((c) => !c.disabled)), l = Zf(() => t.value ? a.value.indexOf(t.value) : -1);
  return {
    selectPrevious() {
      t.value && t.value.disabled || (l.value === 0 ? r(a.value[a.value.length - 1]) : r(a.value[l.value - 1]));
    },
    selectNext() {
      t.value && t.value.disabled || (l.value === a.value.length - 1 ? r(a.value[0]) : r(a.value[l.value + 1]));
    }
  };
};
const EZ = window.Vue.openBlock, SZ = window.Vue.createElementBlock, Yc = window.Vue.createElementVNode;
var FZ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const AZ = {}, WZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CZ = /* @__PURE__ */ Yc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), xZ = /* @__PURE__ */ Yc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), BZ = /* @__PURE__ */ Yc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), IZ = [
  CZ,
  xZ,
  BZ
];
function DZ(t, o) {
  return EZ(), SZ("svg", WZ, IZ);
}
var Ym = /* @__PURE__ */ FZ(AZ, [["render", DZ]]), OZ = Object.defineProperty, QZ = Object.defineProperties, _Z = Object.getOwnPropertyDescriptors, bf = Object.getOwnPropertySymbols, zZ = Object.prototype.hasOwnProperty, GZ = Object.prototype.propertyIsEnumerable, Jf = (t, o, r) => o in t ? OZ(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Hm = (t, o) => {
  for (var r in o || (o = {}))
    zZ.call(o, r) && Jf(t, r, o[r]);
  if (bf)
    for (var r of bf(o))
      GZ.call(o, r) && Jf(t, r, o[r]);
  return t;
}, Pm = (t, o) => QZ(t, _Z(o));
const Kr = window.Vue.defineComponent, qo = window.Vue.resolveComponent, Pt = window.Vue.openBlock, Qr = window.Vue.createElementBlock, YZ = window.Vue.createVNode, Ia = window.Vue.createBlock, HZ = window.Vue.withModifiers, Xr = window.Vue.inject, Ko = window.Vue.computed, PZ = window.Vue.normalizeClass, Sr = window.Vue.createElementVNode, Da = window.Vue.toDisplayString, ba = window.Vue.renderSlot, zo = window.Vue.createCommentVNode, jZ = window.Vue.withDirectives, XZ = window.Vue.vShow, Nc = window.Vue.ref, Ef = window.Vue.toRef, Sf = window.Vue.nextTick, yc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Hc = window.Vue.provide, Ff = window.Vue.isRef, LZ = window.Vue.onBeforeUnmount;
var ci = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const $Z = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, qZ = Kr({
  props: $Z,
  components: {
    FeatherIcon: K
  }
}), KZ = ["title"];
function eb(t, o, r, a, l, c) {
  const d = qo("FeatherIcon");
  return Pt(), Qr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    YZ(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, KZ);
}
var tb = /* @__PURE__ */ ci(qZ, [["render", eb], ["__scopeId", "data-v-4265058e"]]);
const nb = Kr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return li;
    }
  },
  components: {
    ActionIcon: tb
  }
});
function rb(t, o, r, a, l, c) {
  const d = qo("ActionIcon");
  return Pt(), Ia(d, {
    onClick: o[0] || (o[0] = HZ((p) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var ob = /* @__PURE__ */ ci(nb, [["render", rb]]);
const ib = Kr({
  computed: {
    errorIcon() {
      return Ym;
    }
  },
  components: {
    FeatherIcon: K
  }
});
function ab(t, o, r, a, l, c) {
  const d = qo("FeatherIcon");
  return Pt(), Ia(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var sb = /* @__PURE__ */ ci(ib, [["render", ab], ["__scopeId", "data-v-0b8faef3"]]);
const lb = {
  for: {
    type: String,
    required: !0
  },
  focused: {
    type: Boolean,
    default: !1
  },
  showClear: {
    type: Boolean,
    default: !1
  },
  clearText: {
    type: String
  },
  raised: {
    type: Boolean,
    default: !1
  }
}, cb = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, ub = Kr({
  emits: cb,
  props: lb,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = Xr("wrapperOptions", {}), o = Xr("validationErrorMessage", !1), r = Ko(() => t.error ? t.error : o && o.value ? o.value : !1);
    return Pm(Hm({}, t), { error: r });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((o) => o.children && o.children.length !== 0) !== -1;
    },
    containerCls() {
      const t = [];
      return this.hideLabel && t.push("hide-label"), this.raised && t.push("raised"), this.focused && t.push("focused"), this.error && t.push("error"), this.background && t.push("background"), this.disabled && t.push("disabled"), this.inline && t.push("inline"), this.hasPre && t.push("has-prefix"), t;
    }
  },
  methods: {
    handleWrapperClick(t) {
      this.disabled || this.$emit("wrapper-click", t);
    }
  },
  mounted() {
    const t = this.$el.querySelector(".prefix");
    if (t) {
      const o = { childList: !0, subtree: !0 }, r = () => {
        const a = this.$el.querySelector(".prefix");
        this.prefixWidth = a ? a.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(t, o), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: ob,
    ErrorIcon: sb
  }
}), db = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, hb = ["for"], fb = { class: "prefix" }, pb = { class: "post" };
function mb(t, o, r, a, l, c) {
  const d = qo("ClearIcon"), p = qo("ErrorIcon");
  return Pt(), Qr("div", {
    class: PZ(["feather-input-wrapper-container", t.containerCls])
  }, [
    Sr("fieldset", db, [
      Sr("legend", null, Da(t.label), 1)
    ]),
    Sr("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Da(t.label), 9, hb),
    Sr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      Sr("div", fb, [
        ba(t.$slots, "pre", {}, void 0, !0)
      ]),
      ba(t.$slots, "default", {}, void 0, !0),
      Sr("div", pb, [
        t.showClear && t.computedClearText ? (Pt(), Ia(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : zo("", !0),
        t.error ? (Pt(), Ia(p, { key: 1 })) : zo("", !0),
        ba(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var jm = /* @__PURE__ */ ci(ub, [["render", mb], ["__scopeId", "data-v-4db296db"]]);
const wb = Kr({
  setup() {
    const t = Xr("subTextOptions", {}), o = Xr("validationErrorMessage", !1), r = Ko(() => t.error ? t.error : o && o.value ? o.value : "");
    return Pm(Hm({}, t), { error: r });
  }
}), vb = { class: "feather-input-sub-text" }, Vb = {
  key: 0,
  class: "feather-input-spacer"
}, Tb = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, gb = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function Ub(t, o, r, a, l, c) {
  return jZ((Pt(), Qr("div", vb, [
    !t.hint && !t.error.length ? (Pt(), Qr("div", Vb, "\xA0")) : zo("", !0),
    t.hint && !t.error.length ? (Pt(), Qr("div", Tb, Da(t.hint), 1)) : zo("", !0),
    t.error.length > 0 ? (Pt(), Qr("div", gb, Da(t.error), 1)) : zo("", !0),
    ba(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [XZ, !t.inline || t.hint || t.error.length]
  ]);
}
var $a = /* @__PURE__ */ ci(wb, [["render", Ub], ["__scopeId", "data-v-8e0ac99e"]]);
const Rb = {
  headingText: {
    type: Function,
    default: (t) => t.length && t.length === 1 ? "1 error" : `${t.length} errors`
  },
  errorList: {
    type: Array,
    default: () => []
  },
  generalError: {
    type: String,
    default: ""
  }
};
Kr({
  props: Rb,
  setup(t) {
    const o = Xr("featherFormErrors", Nc([])), r = Ef(t, "errorList"), a = Ko(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : o.value;
    }), l = Ef(t, "generalError"), c = (g) => {
      document.getElementById(g).focus();
    }, d = (g) => g.replace(/ \*$/, ""), p = Nc(), w = (g) => `${d(g.label)} - ${g.message}`, V = Ko(() => (a.value.length && Sf(() => p.value.focus()), t.headingText(a.value)));
    return yc(l, (g) => {
      g.length && Sf(() => p.value.focus());
    }), {
      errors: a,
      errorsHeading: V,
      heading: p,
      focusElement: c,
      mainError: l,
      getFullMessage: w
    };
  }
});
const qa = (t, o, r, a, l) => {
  const c = Xr("featherForm", !1);
  if (a && c && t.value) {
    const d = Nc("");
    Hc("validationErrorMessage", d);
    const p = () => {
      if (l && Ff(l) && l.value)
        return d.value = l.value, {
          success: !1,
          message: l.value,
          inputId: t.value,
          label: r
        };
      try {
        return a.validateSync(o.value), d.value = "", { success: !0 };
      } catch (g) {
        const R = g;
        return d.value = R.errors[0], {
          success: !1,
          message: R.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, V = {
      clear: () => {
        d.value = "";
      },
      validate: p
    };
    return l && Ff(l) && yc(l, () => {
      c.runValidation();
    }), yc(t, (g, R) => {
      g && c && c.register(g, V), R && c && c.deregister(R);
    }, { immediate: !0 }), LZ(() => {
      c.deregister(t.value, !0);
    }), { validate: p };
  }
  return { validate: () => !0 };
}, Ka = (t) => ({
  inherittedAttrs: Ko(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), es = {
  hint: {
    type: String
  },
  error: {
    type: String
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, ts = (t) => {
  Hc("subTextOptions", t);
}, Xm = {
  label: {
    type: String,
    required: !0
  },
  error: {
    type: String
  },
  clear: {
    type: String,
    default: ""
  },
  background: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  inline: {
    type: Boolean,
    default: !1
  },
  hideLabel: {
    type: Boolean,
    default: !1
  }
}, Lm = (t) => {
  Hc("wrapperOptions", t);
}, ca = window.Vue.ref, Nb = window.Vue.watch, yb = window.Vue.watchEffect, Af = window.Vue.computed, Pl = window.Vue.provide, $m = (t, o, r, a, l) => {
  const c = ca([]), d = ca(), p = ca(), w = ca();
  yb(() => {
    if (!c.value.length)
      return;
    const A = c.value.map((Q) => Q.value);
    if (t.value !== void 0 && t.value !== null && (d.value = c.value[A.indexOf(t.value)]), !d.value && c.value.length) {
      let Q = c.value.filter((O) => !O.disabled);
      Q = Q.length ? Q : c.value, p.value = Q[0], p.value.first = !0;
    }
  }), Nb(d, (A, Q) => {
    Q && (Q.checked = !1), A && (A.checked = !0);
  });
  const V = (A) => {
    A && A.disabled || (p.value && (p.value.first = !1), d.value !== A && (o("update:modelValue", A.value), d.value = A, A.focus()));
  }, g = Af(() => d.value || p.value), R = JZ(g, c, V), y = Af(() => le("feather-radio-group"));
  w.value = y.value;
  const { validate: F } = qa(w, t, r, a, l);
  return Pl("register", (A) => {
    c.value = [...c.value, A], w.value === y.value && (w.value = A.id);
  }), Pl("select", V), Pl("blur", (A) => {
    o("blur", A);
  }), {
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
    groupId: y
  };
};
var kb = Object.defineProperty, Mb = Object.defineProperties, Zb = Object.getOwnPropertyDescriptors, Wf = Object.getOwnPropertySymbols, bb = Object.prototype.hasOwnProperty, Jb = Object.prototype.propertyIsEnumerable, Cf = (t, o, r) => o in t ? kb(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Gr = (t, o) => {
  for (var r in o || (o = {}))
    bb.call(o, r) && Cf(t, r, o[r]);
  if (Wf)
    for (var r of Wf(o))
      Jb.call(o, r) && Cf(t, r, o[r]);
  return t;
}, qm = (t, o) => Mb(t, Zb(o));
const Cn = window.Vue.defineComponent, Go = window.Vue.inject, Oa = window.Vue.computed, Yo = window.Vue.ref, Jt = window.Vue.resolveComponent, mt = window.Vue.openBlock, ui = window.Vue.createElementBlock, Km = window.Vue.normalizeClass, Lt = window.Vue.renderSlot, Sn = window.Vue.createBlock, ei = window.Vue.createCommentVNode, Qa = window.Vue.createElementVNode, Eb = window.Vue.withModifiers, ns = window.Vue.createVNode, ew = window.Vue.toRef, kc = window.Vue.mergeProps, mn = window.Vue.withCtx, Sb = window.Vue.h, Fb = window.Vue.provide;
var xn = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Ab = {
  disabled: {
    type: Boolean,
    default: !1
  },
  condensed: {
    type: Boolean,
    default: !1
  },
  clickable: {
    type: Boolean,
    default: !1
  }
}, Wb = Cn({
  props: Ab,
  setup(t) {
    const o = Go("isCondensed", null), r = Oa(() => o || t.condensed), a = Yo(!1);
    return {
      focused: a,
      handleFocus: () => {
        a.value = !0;
      },
      handleBlur: () => {
        a.value = !1;
      },
      isCondensed: r
    };
  },
  components: {
    FeatherRipple: ar
  }
}), Cb = ["aria-disabled"];
function xb(t, o, r, a, l, c) {
  const d = Jt("FeatherRipple");
  return mt(), ui("div", {
    class: Km(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: o[0] || (o[0] = (p) => t.clickable ? t.handleFocus : null),
    onFocusout: o[1] || (o[1] = (p) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    Lt(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (mt(), Sn(d, { key: 0 })) : ei("", !0)
  ], 42, Cb);
}
var rs = /* @__PURE__ */ xn(Wb, [["render", xb], ["__scopeId", "data-v-44d413dc"]]);
const Bb = {
  disabled: {
    type: Boolean,
    default: !1
  },
  textId: {
    type: String,
    required: !0
  },
  label: {
    type: String,
    required: !0
  }
}, Ib = Cn({
  emits: ["delete"],
  props: Bb,
  setup(t, o) {
    return {
      handleDelete: () => {
        t.disabled || o.emit("delete");
      },
      icon: li
    };
  },
  components: {
    FeatherIcon: K
  }
}), Db = { class: "chip-delete" }, Ob = ["aria-label", "aria-describedby"];
function Qb(t, o, r, a, l, c) {
  const d = Jt("FeatherIcon");
  return mt(), ui("span", Db, [
    Qa("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = Eb((...p) => t.handleDelete && t.handleDelete(...p), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      ns(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, Ob)
  ]);
}
var _b = /* @__PURE__ */ xn(Ib, [["render", Qb], ["__scopeId", "data-v-4bae6cb4"]]);
const zb = Cn({
  data() {
    return {
      titleText: void 0
    };
  },
  methods: {
    ellipsisActive() {
      return this.$refs.container.offsetWidth < this.$refs.container.scrollWidth;
    },
    updateTitle() {
      this.titleText = this.ellipsisActive() ? this.$refs.container.textContent : void 0;
    }
  },
  mounted() {
    this.updateTitle();
  },
  beforeUpdate() {
    this.updateTitle();
  }
}), Gb = ["title"];
function Yb(t, o, r, a, l, c) {
  return mt(), ui("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    Lt(t.$slots, "default", {}, void 0, !0)
  ], 8, Gb);
}
var os = /* @__PURE__ */ xn(zb, [["render", Yb], ["__scopeId", "data-v-1a0445b2"]]);
const Hb = {}, Pb = {
  class: "chip-icon",
  role: "presentation"
};
function jb(t, o) {
  return mt(), ui("span", Pb, [
    Lt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var is = /* @__PURE__ */ xn(Hb, [["render", jb], ["__scopeId", "data-v-2230176f"]]);
const xf = {
  delete: "Remove"
}, Xb = Cn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => xf
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, o) {
    const r = Gm(ew(t, "labels"), xf), a = Oa(() => le("chip-text")), l = () => {
      t.disabled || o.emit("click");
    }, c = Gr({}, o.attrs);
    return t.disabled && delete c.onClick, qm(Gr({}, r), {
      chipTextId: a,
      handleClick: l,
      attrs: c
    });
  },
  computed: {
    chipTextAttrs() {
      return this.canClick ? {
        role: "button",
        tabindex: "0"
      } : {};
    },
    canDelete() {
      return !!this.$attrs.onDelete && !this.disabled;
    },
    canClick() {
      return !!this.$attrs.onClick && !this.disabled;
    },
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: rs,
    DeleteIcon: _b,
    Label: os,
    PreIcon: is
  }
}), Lb = ["aria-disabled"];
function $b(t, o, r, a, l, c) {
  const d = Jt("PreIcon"), p = Jt("Label"), w = Jt("DeleteIcon"), V = Jt("Chip");
  return mt(), Sn(V, kc(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: mn(() => [
      Qa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        Qa("span", kc(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (mt(), Sn(d, { key: 0 }, {
            default: mn(() => [
              Lt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ei("", !0),
          ns(p, { id: t.chipTextId }, {
            default: mn(() => [
              Lt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, Lb),
      t.canDelete ? (mt(), Sn(w, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (g) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ei("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var qb = /* @__PURE__ */ xn(Xb, [["render", $b], ["__scopeId", "data-v-48b2704a"]]);
const Kb = Cn({
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: rs,
    Label: os,
    PreIcon: is
  }
}), e2 = ["aria-disabled"];
function t2(t, o, r, a, l, c) {
  const d = Jt("PreIcon"), p = Jt("Label"), w = Jt("Chip");
  return mt(), Sn(w, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: mn(() => [
      Qa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (mt(), Sn(d, { key: 0 }, {
          default: mn(() => [
            Lt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ei("", !0),
        ns(p, null, {
          default: mn(() => [
            Lt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, e2)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var n2 = /* @__PURE__ */ xn(Kb, [["render", t2], ["__scopeId", "data-v-3e0c4eba"]]);
const r2 = Cn({
  props: {
    value: {
      type: [String, Object, Number, Array],
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const o = Yo(!1), r = Yo(!1), a = Oa(() => le("chip-label-id")), l = Oa(() => o.value || r.value ? 0 : -1), c = Yo(), d = () => {
      c.value.$el.focus();
    }, p = Go("register", (y) => {
    }), w = Go("blur", (y) => {
    }), V = Go("select", (y) => {
    }), g = {
      first: o,
      focus: d,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return p(g), {
      labelId: a,
      tabindex: l,
      first: o,
      blur: w,
      click: () => {
        V(g);
      },
      input: c,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: rs,
    Label: os,
    PreIcon: is
  }
});
function o2(t, o, r, a, l, c) {
  const d = Jt("PreIcon"), p = Jt("Label"), w = Jt("Chip");
  return mt(), Sn(w, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: Km(["focus hover", { selected: t.checked }]),
    role: "radio",
    ref: "input",
    "aria-checked": t.checked ? "true" : "false",
    "aria-disabled": t.disabled,
    "aria-labelledby": t.labelId,
    tabindex: t.tabindex,
    onClick: t.click,
    "allow-click": !t.disabled,
    onBlur: t.blur
  }, {
    default: mn(() => [
      t.hasIcon ? (mt(), Sn(d, { key: 0 }, {
        default: mn(() => [
          Lt(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ei("", !0),
      ns(p, { id: t.labelId }, {
        default: mn(() => [
          Lt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var i2 = /* @__PURE__ */ xn(r2, [["render", o2], ["__scopeId", "data-v-bbcc2f70"]]);
const a2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object
  },
  condensed: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Object, Number, Array, Boolean]
  }
}, Bf = Cn({
  props: a2,
  setup() {
    return { format: Go("chipListFormat", "") };
  },
  render() {
    const t = (o) => Sb(o, Gr(Gr({}, this.$props), this.$attrs), Gr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(qb) : this.format === "radio" ? t(i2) : t(n2);
  }
}), s2 = {
  label: {
    type: String,
    required: !0
  },
  mode: {
    type: String,
    default: "list",
    validator: (t) => ["list", "radio", "single"].indexOf(t) !== -1
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  condensed: {
    type: Boolean,
    default: !1
  }
}, l2 = Cn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: s2,
  setup(t, o) {
    const r = t.mode === "list" ? "grid" : t.mode;
    Fb("chipListFormat", r);
    const a = r === "single";
    if (r === "radio") {
      const d = ew(t, "modelValue");
      return qm(Gr({
        attrs: {
          role: "radiogroup"
        }
      }, $m(d, o.emit, t.label, {}, Yo(""))), {
        single: a
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: a };
  }
}), c2 = ["aria-label"];
function u2(t, o, r, a, l, c) {
  return mt(), ui("div", kc(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: o[0] || (o[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    Lt(t.$slots, "default", {}, void 0, !0)
  ], 16, c2);
}
var d2 = /* @__PURE__ */ xn(l2, [["render", u2], ["__scopeId", "data-v-1e06f41d"]]);
const h2 = window.Vue.defineComponent, f2 = window.Vue.normalizeClass, p2 = window.Vue.openBlock, m2 = window.Vue.createElementBlock, w2 = window.Vue.createCommentVNode, v2 = /* @__PURE__ */ h2({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, a) => o != null && o.severity ? (p2(), m2("span", {
      key: 0,
      class: f2(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : w2("", !0);
  }
});
const V2 = /* @__PURE__ */ ye(v2, [["__scopeId", "data-v-e08880d6"]]), T2 = window.Vue.defineComponent, Eo = window.Vue.unref, tw = window.Vue.createTextVNode, If = window.Vue.normalizeClass, jl = window.Vue.withCtx, Df = window.Vue.createVNode, g2 = window.Vue.renderList, U2 = window.Vue.Fragment, Xl = window.Vue.openBlock, R2 = window.Vue.createElementBlock, N2 = window.Vue.toDisplayString, Of = window.Vue.createBlock, y2 = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const k2 = /* @__PURE__ */ tw(" ALL "), Qf = window.Vue.ref, M2 = window.Vue.watch, Z2 = window.Vue.computed, b2 = window.Vue.reactive, J2 = /* @__PURE__ */ T2({
  __name: "FiltersSeverity",
  props: {
    alarms: null,
    situationId: null,
    preSelected: null
  },
  emits: ["selected-severities"],
  setup(t, { emit: o }) {
    var w;
    const r = t, a = Qf(!1), l = Z2(() => Ze.exports.keys(Ze.exports.groupBy(r.alarms, "severity"))), c = Qf(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), d = b2({
      alarms: r.alarms
    }), p = (V) => {
      c.value = c.value.filter((g) => g !== "all"), c.value.includes(V) ? c.value = c.value.filter((g) => g !== V) : c.value.push(V), (V === "all" || c.value.length === 0) && (c.value = ["all"]), o("selected-severities", c.value);
    };
    return M2(r, () => {
      var V;
      c.value = (V = r.preSelected) != null && V.length ? r.preSelected : ["all"], d.alarms = r.alarms, a.value = !1;
    }), (V, g) => Eo(l).length > 0 ? (Xl(), Of(Eo(d2), {
      key: c.value.toString(),
      condensed: "",
      label: ""
    }, {
      default: jl(() => [
        Df(Eo(Bf), {
          class: If({ clicked: c.value.includes("all") }),
          onClick: g[0] || (g[0] = (R) => p("all"))
        }, {
          default: jl(() => [
            k2
          ]),
          _: 1
        }, 8, ["class"]),
        (Xl(!0), R2(U2, null, g2(Eo(l), (R) => (Xl(), Of(Eo(Bf), {
          class: If([
            { clicked: c.value.includes(R) },
            `${R == null ? void 0 : R.toLowerCase()}-bg`
          ]),
          key: R,
          onClick: (y) => p(R)
        }, {
          default: jl(() => [
            Df(V2, { severity: R }, null, 8, ["severity"]),
            tw(N2(R), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    })) : y2("", !0);
  }
});
const nw = /* @__PURE__ */ ye(J2, [["__scopeId", "data-v-57d07be0"]]);
var E2 = Object.defineProperty, S2 = Object.defineProperties, F2 = Object.getOwnPropertyDescriptors, _f = Object.getOwnPropertySymbols, A2 = Object.prototype.hasOwnProperty, W2 = Object.prototype.propertyIsEnumerable, zf = (t, o, r) => o in t ? E2(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, So = (t, o) => {
  for (var r in o || (o = {}))
    A2.call(o, r) && zf(t, r, o[r]);
  if (_f)
    for (var r of _f(o))
      W2.call(o, r) && zf(t, r, o[r]);
  return t;
}, Gf = (t, o) => S2(t, F2(o));
const C2 = window.Vue.defineComponent, x2 = window.Vue.inject, Fo = window.Vue.h;
var B2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const I2 = {
  primary: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  secondary: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  asAnchor: {
    type: Boolean,
    default: !1
  },
  onColor: {
    type: Boolean,
    default: !1
  }
}, D2 = C2({
  inheritAttrs: !1,
  props: I2,
  setup() {
    return { hasTooltip: x2("feather-has-tooltip", !1) };
  },
  render() {
    const t = () => {
      let p = "";
      this.primary && (p = "btn-primary"), this.secondary && (p = "btn-secondary"), (this.text || this.icon) && (p = "btn-text");
      const w = ["btn", "hover", "focus", p];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, a = So({}, this.$attrs);
    r.attrs = a || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (p) => {
        this.disabled ? (this.asAnchor && p.preventDefault(), this.$emit("disabled-click", p)) : this.$emit("click", p);
      }
    };
    const l = t();
    r.class = [this.$attrs.class].concat(l), this.$slots.icon && r.class.push("has-icon");
    let c = Fo(ar);
    if (this.disabled && (c = void 0), this.icon && this.$slots.default) {
      const p = this.icon;
      return r.attrs["aria-label"] = p, this.hasTooltip || (r.attrs.title = p), Fo(o, Gf(So(So({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Fo(ar, { center: !0 })
      ]);
    }
    const d = Fo("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Fo(o, Gf(So(So({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      c
    ]);
  }
});
var wt = /* @__PURE__ */ B2(D2, [["__scopeId", "data-v-702d1074"]]);
const O2 = window.Vue.openBlock, Q2 = window.Vue.createElementBlock, _2 = window.Vue.createElementVNode;
var z2 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const G2 = {}, Y2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, H2 = /* @__PURE__ */ _2("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), P2 = [
  H2
];
function j2(t, o) {
  return O2(), Q2("svg", Y2, P2);
}
var rw = /* @__PURE__ */ z2(G2, [["render", j2]]);
const X2 = window.Vue.watch, L2 = window.Vue.onBeforeUnmount, $2 = window.Vue.ref, q2 = window.Vue.onMounted, K2 = (t) => {
  const o = $2(!1);
  let r = !1;
  const a = (d) => {
    t(d), r = !1;
  };
  function l(d) {
    r || (requestAnimationFrame(() => a(d)), r = !0);
  }
  const c = () => {
    window && window.removeEventListener("resize", l);
  };
  return q2(() => {
    const d = X2(o, (p) => {
      window && p ? window.addEventListener("resize", l) : c();
    }, {
      immediate: !0
    });
    L2(() => {
      d(), c();
    });
  }), o;
}, eJ = window.Vue.watch, tJ = window.Vue.onBeforeUnmount, nJ = window.Vue.ref, rJ = window.Vue.onMounted, oJ = (t, o) => {
  const r = nJ(!1), a = (d) => {
    d.target === window && o(d);
  }, l = (d) => {
    let p = [];
    Array.isArray(t.value) ? p = t.value : p = [t.value], p.some((V) => V && V.contains(d.target)) || o(d);
  }, c = () => {
    document && window && (document.removeEventListener("click", l, !0), document.removeEventListener("focus", l, !0), window.removeEventListener("blur", a));
  };
  return rJ(() => {
    const d = eJ(r, (p) => {
      document && window && p ? (document.addEventListener("click", l, !0), document.addEventListener("focus", l, !0), window.addEventListener("blur", a)) : c();
    }, {
      immediate: !0
    });
    tJ(() => {
      d(), c();
    });
  }), r;
}, iJ = window.Vue.watch, aJ = window.Vue.onBeforeUnmount, sJ = window.Vue.ref, ow = (t, o) => {
  const r = sJ(!1);
  let a = !1;
  const l = (w) => {
    o(w), a = !1;
  };
  function c(w) {
    a || (requestAnimationFrame(() => l(w)), a = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", c, !0);
  }, p = iJ([t, r], ([w, V], g) => {
    g && g.length && g[0] && g[0].removeEventListener("scroll", c, !0), V && w ? w.addEventListener("scroll", c, !0) : d();
  }, {
    immediate: !0
  });
  return aJ(() => {
    p(), d();
  }), r;
}, lJ = window.Vue.defineComponent, ln = window.Vue.ref, Yf = window.Vue.toRef, cJ = window.Vue.onMounted, uJ = window.Vue.watch, Hf = window.Vue.computed, dJ = window.Vue.nextTick, Pf = window.Vue.openBlock, jf = window.Vue.createElementBlock, Xf = window.Vue.renderSlot, hJ = window.Vue.normalizeClass, fJ = window.Vue.normalizeStyle, pJ = window.Vue.createCommentVNode;
var mJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const wJ = {
  open: {
    type: Boolean,
    default: !1
  },
  noExpand: {
    type: Boolean,
    default: !1
  },
  cover: {
    type: Boolean,
    default: !1
  },
  right: {
    type: Boolean,
    default: !1
  },
  hasFocus: {
    type: Boolean,
    default: !1
  },
  dataRefId: {
    type: String,
    default: "feather-menu"
  },
  fill: {
    type: Boolean,
    default: !1
  },
  triggerId: {
    type: String
  }
}, vJ = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, VJ = lJ({
  emits: vJ,
  props: wJ,
  setup(t, o) {
    const r = ln(), a = ln(), l = Yf(t, "open"), c = Yf(t, "noExpand"), d = ln("auto"), p = ln(), w = ln(t.triggerId || le("feather-menu-trigger")), V = ln(le("feather-menu-dropdown")), g = ln(""), R = ln("");
    cJ(() => {
      p.value = window;
    });
    const y = ln(!1), F = () => ({
      height: p.value.innerHeight,
      width: p.value.innerWidth,
      left: 0,
      top: 0
    }), E = () => {
      if (!a.value)
        return;
      const k = r.value.getBoundingClientRect();
      y.value = !0, d.value = "auto", dJ(() => {
        let { height: W, width: x } = a.value.getBoundingClientRect();
        const z = F(), de = z.height, he = z.width;
        t.fill && x < k.width ? (d.value = k.width + "px", x = k.width) : d.value = x + "px";
        let ve = 0;
        de - k.bottom < W && k.top >= W ? (ve = k.top - W, t.cover && (ve += k.height)) : (ve = k.bottom, t.cover && (ve -= k.height));
        let Ve = t.right ? k.right - x : k.left;
        !t.right && k.right >= x && he - k.left < x && (Ve = k.right - x), t.right && k.right <= x && he - k.left > x && (Ve = k.left), R.value = `${Ve}px`, g.value = `${ve}px`, y.value = !1;
      });
    }, C = oJ(r, (k) => {
      o.emit("outside-click", k);
    }), A = K2(E), Q = ow(p, E);
    uJ([l, a], ([k, W]) => {
      k && W && E(), C.value = k, A.value = k, Q.value = k;
    });
    const O = Hf(() => {
      const k = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return l.value && (k["aria-controls"] = V.value), c.value || (k["aria-expanded"] = l.value ? "true" : "false"), k;
    }), H = Hf(() => ({
      click: (k) => {
        o.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: g,
      positionLeft: R,
      triggerId: w,
      triggerAttrs: O,
      triggerListeners: H,
      menuId: V,
      menu: a,
      menuWidth: d,
      root: r,
      calculatePosition: E,
      calculating: y
    };
  }
}), TJ = ["data-ref-id"], gJ = ["data-ref-id", "id"];
function UJ(t, o, r, a, l, c) {
  return Pf(), jf("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    Xf(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (Pf(), jf("div", {
      key: 0,
      class: hJ(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: fJ({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      Xf(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, gJ)) : pJ("", !0)
  ], 8, TJ);
}
var iw = /* @__PURE__ */ mJ(VJ, [["render", UJ], ["__scopeId", "data-v-f75af406"]]);
const RJ = window.Vue.openBlock, NJ = window.Vue.createElementBlock, yJ = window.Vue.createElementVNode;
var kJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const MJ = {}, ZJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bJ = /* @__PURE__ */ yJ("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), JJ = [
  bJ
];
function EJ(t, o) {
  return RJ(), NJ("svg", ZJ, JJ);
}
var SJ = /* @__PURE__ */ kJ(MJ, [["render", EJ]]);
const FJ = window.Vue.openBlock, AJ = window.Vue.createElementBlock, Pc = window.Vue.createElementVNode;
var WJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const CJ = {}, xJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, BJ = /* @__PURE__ */ Pc("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), IJ = /* @__PURE__ */ Pc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), DJ = /* @__PURE__ */ Pc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), OJ = [
  BJ,
  IJ,
  DJ
];
function QJ(t, o) {
  return FJ(), AJ("svg", xJ, OJ);
}
var _J = /* @__PURE__ */ WJ(CJ, [["render", QJ]]);
const zJ = window.Vue.openBlock, GJ = window.Vue.createElementBlock, YJ = window.Vue.createElementVNode;
var HJ = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const PJ = {}, jJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XJ = /* @__PURE__ */ YJ("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), LJ = [
  XJ
];
function $J(t, o) {
  return zJ(), GJ("svg", jJ, LJ);
}
var jc = /* @__PURE__ */ HJ(PJ, [["render", $J]]);
const ti = function(t, o) {
  if (!t || !o)
    return;
  let r = t.getBoundingClientRect().height;
  const a = getComputedStyle(t);
  r += parseInt(a.getPropertyValue("margin-top"), 10), r += parseInt(a.getPropertyValue("margin-bottom"), 10), o.scrollTop = t.offsetTop - o.getBoundingClientRect().height + r;
};
const q = {
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
  DELETE: 46
};
const qJ = window.Vue.defineComponent, KJ = window.Vue.openBlock, eE = window.Vue.createElementBlock, tE = window.Vue.normalizeClass, nE = window.Vue.pushScopeId, rE = window.Vue.popScopeId, Mc = window.Vue.createElementVNode;
var oE = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const iE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, aE = {
  click: (t) => !0
}, sE = qJ({
  emits: aE,
  props: iE,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), aw = (t) => (nE("data-v-07e020f5"), t = t(), rE(), t), lE = /* @__PURE__ */ aw(() => /* @__PURE__ */ Mc("div", { class: "track" }, null, -1)), cE = /* @__PURE__ */ aw(() => /* @__PURE__ */ Mc("div", { class: "switcher" }, [
  /* @__PURE__ */ Mc("div", { class: "switch-circle" })
], -1)), uE = [
  lE,
  cE
];
function dE(t, o, r, a, l, c) {
  return KJ(), eE("div", {
    class: tE(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: o[0] || (o[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, uE, 2);
}
var hE = /* @__PURE__ */ oE(sE, [["render", dE], ["__scopeId", "data-v-07e020f5"]]), fE = Object.defineProperty, pE = Object.defineProperties, mE = Object.getOwnPropertyDescriptors, Lf = Object.getOwnPropertySymbols, wE = Object.prototype.hasOwnProperty, vE = Object.prototype.propertyIsEnumerable, $f = (t, o, r) => o in t ? fE(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, qf = (t, o) => {
  for (var r in o || (o = {}))
    wE.call(o, r) && $f(t, r, o[r]);
  if (Lf)
    for (var r of Lf(o))
      vE.call(o, r) && $f(t, r, o[r]);
  return t;
}, Kf = (t, o) => pE(t, mE(o));
const Xc = window.Vue.defineComponent, Hn = window.Vue.h, VE = window.Vue.openBlock, TE = window.Vue.createElementBlock, gE = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var sw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const UE = {
  asLi: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  selected: {
    type: Boolean,
    default: !1
  },
  highlighted: {
    type: Boolean,
    default: !1
  }
}, RE = Xc({
  inheritAttrs: !1,
  props: UE,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (t = Hn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Hn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let a;
    this.$slots.post && (a = Hn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const l = this.disabled ? void 0 : Hn(ar);
    if (this.asLi)
      return Hn("li", Kf(qf({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [t, r, a, l]);
    const c = Hn("a", Kf(qf({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, a, l]);
    return Hn("li", {}, [c]);
  }
});
var di = /* @__PURE__ */ sw(RE, [["__scopeId", "data-v-7c46b2b3"]]);
Xc({
  components: {
    FeatherListItem: di
  }
});
const NE = {}, yE = { class: "feather-list" };
function kE(t, o) {
  return VE(), TE("ul", yE, [
    gE(t.$slots, "default", {}, void 0, !0)
  ]);
}
var Lc = /* @__PURE__ */ sw(NE, [["render", kE], ["__scopeId", "data-v-941a1d50"]]);
const ME = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, ZE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Xc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: ME,
  props: ZE,
  computed: {
    labelId() {
      return le("switch-label");
    }
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
      (t.keyCode === q.SPACE || t.keyCode === q.ENTER) && this.updateValue(), t.keyCode === q.SPACE && t.preventDefault(), this.$emit("keydown", t);
    }
  },
  components: { SwitchRender: hE, FeatherListItem: di }
});
var bE = Object.defineProperty, JE = Object.defineProperties, EE = Object.getOwnPropertyDescriptors, ep = Object.getOwnPropertySymbols, SE = Object.prototype.hasOwnProperty, FE = Object.prototype.propertyIsEnumerable, tp = (t, o, r) => o in t ? bE(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, vt = (t, o) => {
  for (var r in o || (o = {}))
    SE.call(o, r) && tp(t, r, o[r]);
  if (ep)
    for (var r of ep(o))
      FE.call(o, r) && tp(t, r, o[r]);
  return t;
}, AE = (t, o) => JE(t, EE(o));
const eo = window.Vue.defineComponent, oe = window.Vue.openBlock, Ee = window.Vue.createElementBlock, nt = window.Vue.createElementVNode, Ot = window.Vue.toDisplayString, bt = window.Vue.createCommentVNode, Me = window.Vue.resolveComponent, Zt = window.Vue.createBlock, Ge = window.Vue.withCtx, Yr = window.Vue.Fragment, Ho = window.Vue.renderList, rt = window.Vue.createVNode, $c = window.Vue.withModifiers, or = window.Vue.normalizeClass, Zc = window.Vue.renderSlot, lw = window.Vue.createTextVNode, WE = window.Vue.pushScopeId, CE = window.Vue.popScopeId, cw = window.Vue.reactive, uw = window.Vue.nextTick, Ll = window.Vue.markRaw, $l = window.Vue.toRef, np = window.Vue.computed, xE = window.Vue.toRefs, Fr = window.Vue.ref, ql = window.Vue.mergeProps, rp = window.Vue.toHandlers, ua = window.Vue.withDirectives, da = window.Vue.vShow;
var as = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, qc = {
  query: {
    type: String
  }
}, lr = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const BE = eo({
  mixins: [],
  props: vt(vt({
    text: {
      type: String,
      required: !0
    }
  }, as), qc),
  computed: {
    index() {
      if (this.query && this.query.length === 0)
        return -1;
      if (this.query && this.highlight)
        switch (this.highlight.toLowerCase()) {
          case "ignore-case":
            return this.text.toLowerCase().indexOf(this.query.toLowerCase());
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
    }
  }
}), IE = {
  key: 0,
  class: "highlight"
}, DE = { key: 1 };
function OE(t, o, r, a, l, c) {
  return oe(), Ee("span", null, [
    nt("span", null, Ot(t.beginning), 1),
    t.highlighted ? (oe(), Ee("span", IE, Ot(t.highlighted), 1)) : bt("", !0),
    t.end ? (oe(), Ee("span", DE, Ot(t.end), 1)) : bt("", !0)
  ]);
}
var dw = /* @__PURE__ */ lr(BE, [["render", OE], ["__scopeId", "data-v-8abe2492"]]);
const QE = eo({
  emits: ["select", "deselect"],
  props: vt(vt({
    activeId: {
      type: String,
      required: !0
    },
    activeIndex: {
      type: Number,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    value: {
      type: [Array, Object],
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    single: {
      type: Boolean,
      default: !1
    },
    newLabel: {
      type: String,
      default: "new"
    }
  }, as), qc),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        ti(o, r.$el);
      });
    }
  },
  methods: {
    isSelected(t) {
      const o = this.value;
      return o && o.length ? o.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
    },
    isActive(t) {
      return this.activeIndex === t;
    },
    getId(t) {
      return t === this.activeIndex ? this.activeId : null;
    },
    select(t) {
      this.$emit(this.isSelected(t) ? "deselect" : "select", t);
    }
  },
  components: {
    FeatherList: Lc,
    FeatherListItem: di,
    Highlighter: dw
  }
}), _E = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function zE(t, o, r, a, l, c) {
  const d = Me("Highlighter"), p = Me("FeatherListItem"), w = Me("FeatherList");
  return oe(), Zt(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": t.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ge(() => [
      (oe(!0), Ee(Yr, null, Ho(t.items, (V, g) => (oe(), Ee(Yr, {
        key: V[t.textProp]
      }, [
        rt(p, {
          "as-li": "",
          id: t.getId(g),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(V),
          highlighted: t.isActive(g),
          selected: t.isSelected(V),
          onClick: $c((R) => t.select(V), ["stop"])
        }, {
          default: Ge(() => [
            rt(d, {
              highlight: t.highlight,
              query: t.query,
              text: V[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            V._new ? (oe(), Ee("span", _E, Ot(t.newLabel), 1)) : bt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && V._new ? (oe(), Ee("li", {
          role: "presentation",
          key: V[t.textProp] + "hr",
          class: "hr"
        })) : bt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var GE = /* @__PURE__ */ lr(QE, [["render", zE], ["__scopeId", "data-v-f623434a"]]);
const YE = eo({
  emits: ["select"],
  props: vt(vt({
    activeId: {
      type: String,
      required: !0
    },
    activeRow: {
      type: Number,
      required: !0
    },
    activeCol: {
      type: Number,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    value: {
      type: [Array, Object],
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    single: {
      type: Boolean,
      default: !1
    },
    config: {
      type: Array,
      required: !0
    }
  }, as), qc),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        ti(o, r);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((t, o) => t.align && t.align.toLowerCase() === "right" ? `tr${o + 1}` : t.align && t.align.toLowerCase() === "center" ? `tc${o + 1}` : `tl${o + 1}`);
    }
  },
  methods: {
    isSelected(t) {
      const o = this.value;
      return this.value && this.value.length ? o.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
    },
    isActive(t) {
      return this.activeRow === t;
    },
    isActiveCell(t, o) {
      return this.activeRow === t && this.activeCol === o;
    },
    getId(t, o) {
      return t === this.activeRow && this.activeCol === o ? this.activeId : "";
    },
    select(t) {
      this.$emit("select", t);
    }
  },
  components: {
    Highlighter: dw
  }
}), HE = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, PE = ["aria-multiselectable"], jE = { role: "row" }, XE = ["aria-selected", "onClick"], LE = ["id", "aria-selected"], $E = { key: 1 };
function qE(t, o, r, a, l, c) {
  const d = Me("Highlighter");
  return oe(), Ee("div", HE, [
    nt("table", {
      class: or(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      nt("thead", null, [
        nt("tr", jE, [
          (oe(!0), Ee(Yr, null, Ho(t.config, (p) => (oe(), Ee("th", {
            key: p.title
          }, Ot(p.title), 1))), 128))
        ])
      ]),
      nt("tbody", null, [
        (oe(!0), Ee(Yr, null, Ho(t.items, (p, w) => (oe(), Ee("tr", {
          role: "row",
          key: p[t.textProp],
          "aria-selected": t.isSelected(p),
          class: or({ focus: t.isActive(w), selected: t.isSelected(p) }),
          onClick: $c((V) => t.select(p), ["stop"])
        }, [
          (oe(!0), Ee(Yr, null, Ho(t.config, (V, g) => (oe(), Ee("td", {
            key: p[t.textProp] + V.prop,
            id: t.getId(w, g),
            "aria-selected": t.isSelected(p),
            class: or({ "focus-cell": t.isActiveCell(w, g) })
          }, [
            V.prop === t.textProp ? (oe(), Zt(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: p[V.prop]
            }, null, 8, ["highlight", "query", "text"])) : (oe(), Ee("p", $E, Ot(p[V.prop]), 1))
          ], 10, LE))), 128))
        ], 10, XE))), 128))
      ])
    ], 10, PE)
  ], 512);
}
var KE = /* @__PURE__ */ lr(YE, [["render", qE], ["__scopeId", "data-v-58c88fd1"]]);
const eS = eo({
  components: {
    FeatherList: Lc,
    FeatherListItem: di
  }
});
function tS(t, o, r, a, l, c) {
  const d = Me("FeatherListItem"), p = Me("FeatherList");
  return oe(), Zt(p, { class: "result-list" }, {
    default: Ge(() => [
      rt(d, { "as-li": "" }, {
        default: Ge(() => [
          Zc(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var nS = /* @__PURE__ */ lr(eS, [["render", tS], ["__scopeId", "data-v-06b752c6"]]);
const rS = eo({
  name: "Chip",
  emits: ["delete"],
  props: {
    focused: {
      type: Boolean,
      default: !1
    },
    removeLabel: {
      type: String,
      required: !0
    },
    text: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    pre: {
      type: Object
    }
  },
  computed: {
    showPreIcon() {
      return this.pre && this.pre.icon && this.pre.title;
    }
  },
  methods: {
    handleClick() {
      this.$emit("delete");
    }
  },
  components: {
    FeatherIcon: K,
    Cancel: li,
    BaseChip: rs,
    BaseChipLabel: os,
    BaseChipPreIcon: is
  }
});
function oS(t, o, r, a, l, c) {
  const d = Me("FeatherIcon"), p = Me("BaseChipPreIcon"), w = Me("BaseChipLabel"), V = Me("Cancel"), g = Me("BaseChip");
  return oe(), Zt(g, {
    class: or(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: Ge(() => [
      t.showPreIcon ? (oe(), Zt(p, { key: 0 }, {
        default: Ge(() => {
          var R, y;
          return [
            rt(d, {
              icon: (R = t.pre) == null ? void 0 : R.icon,
              title: (y = t.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : bt("", !0),
      rt(w, null, {
        default: Ge(() => [
          lw(Ot(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? bt("", !0) : (oe(), Ee("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = $c((...R) => t.handleClick && t.handleClick(...R), ["stop"]))
      }, [
        rt(d, {
          class: "delete-icon",
          flex: "",
          title: t.removeLabel
        }, {
          default: Ge(() => [
            rt(V)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var iS = /* @__PURE__ */ lr(rS, [["render", oS], ["__scopeId", "data-v-e0fc6ac0"]]);
const aS = {}, sS = (t) => (WE("data-v-aa720e06"), t = t(), CE(), t), lS = { class: "spinner-container" }, cS = /* @__PURE__ */ sS(() => /* @__PURE__ */ nt("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ nt("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), uS = [
  cS
];
function dS(t, o) {
  return oe(), Ee("div", lS, uS);
}
var hS = /* @__PURE__ */ lr(aS, [["render", dS], ["__scopeId", "data-v-aa720e06"]]), ss = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(ss || {});
const hw = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, fS = vt(vt(vt({
  id: {
    type: String
  },
  modelValue: {
    type: [Array, Object]
  },
  results: {
    type: Array,
    default: () => []
  },
  textProp: {
    type: String,
    default: "_text"
  },
  loading: {
    type: Boolean,
    default: !1
  },
  minChar: {
    type: Number,
    default: 0
  },
  allowNew: {
    type: Boolean,
    default: !1
  },
  selectionLimit: {
    type: Number
  },
  newMatcher: {
    type: Function,
    default: (t, o, r) => t[r.textProp].toString().toLowerCase() === o.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (t) => !!ss[t]
  },
  labels: {
    type: Object,
    default: () => hw
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, as), es), Xm), pS = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, mS = (t, o, r, a) => {
  if (r.toLowerCase() === ss.multi) {
    const c = t.modelValue, d = (p) => {
      t.selectionLimit.value && p.length >= t.selectionLimit.value ? t.selectionLimitReached.value = !0 : t.selectionLimitReached.value = !1;
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
        if (c.value && c.value.filter((V) => V[t.textProp.value] === p[t.textProp.value]).length)
          return;
        const w = c.value ? [...c.value, p] : [p];
        a("update:modelValue", w), d(w);
      },
      removeItem(p) {
        const w = c.value.findIndex((V) => {
          if (p[t.textProp.value] === V[t.textProp.value])
            return !0;
        });
        debugger;
        if (w > -1) {
          const V = c.value.slice(0);
          V.splice(w, 1), a("update:modelValue", V), d(V), t.input.value.focus();
        }
      },
      clickedItem() {
        t.query.value = "", t.emitSearch();
      },
      handleInputBlur() {
      }
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
      o.active.row = -1, t.forceCloseResults.value = !0, c && c._new && t.allowNew ? a("new", c._new) : a("update:modelValue", c);
    },
    removeItem() {
    },
    clickedItem() {
      t.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (o.active.row > -1) {
        const c = t.internalResults.value[o.active.row];
        c && c._new && t.allowNew ? a("new", c._new) : a("update:modelValue", c);
      }
    }
  };
}, wS = () => {
  const t = cw({
    row: -1
  }), o = (c) => {
    uw(() => {
      t.row = c;
    });
  }, r = (c, d) => {
    if (c.keyCode === q.DOWN) {
      if (c.preventDefault(), t.row === -1)
        a(), o(0);
      else if (t.row + 1 <= d.length - 1) {
        const p = t.row;
        a(), o(p + 1);
      }
      return !0;
    }
    if (c.keyCode === q.UP) {
      if (c.preventDefault(), t.row === 0)
        a();
      else if (t.row > 0) {
        const p = t.row;
        a(), o(p - 1);
      }
      return !0;
    }
    return !1;
  }, a = () => {
    t.row = -1;
  };
  return { reset: a, handleKeyPress: r, active: t, first: () => {
    t.row = 0;
  } };
}, vS = (t) => {
  const o = cw({
    row: -1,
    col: -1
  }), r = (d, p) => {
    uw(() => {
      o.col = p, o.row = d;
    });
  }, a = (d, p) => {
    if (d.keyCode === q.DOWN) {
      if (d.preventDefault(), o.row === -1)
        l(), r(0, 0);
      else if (o.row + 1 <= p.length - 1) {
        const w = o.row, V = o.col;
        l(), r(w + 1, V);
      }
      return !0;
    }
    if (d.keyCode === q.UP) {
      if (d.preventDefault(), o.row === 0)
        l();
      else if (o.row > 0) {
        const w = o.row, V = o.col;
        l(), r(w - 1, V);
      }
      return !0;
    }
    if (d.keyCode === q.RIGHT && o.row !== -1) {
      if (d.preventDefault(), o.col + 1 <= t.length - 1) {
        const w = o.col, V = o.row;
        l(), r(V, w + 1);
      } else if (o.col <= t.length - 1 && o.row + 1 <= p.length - 1) {
        const w = o.row;
        l(), r(w + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === q.LEFT && o.row !== -1) {
      if (d.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const w = o.row;
        l(), r(w - 1, t.length - 1);
      } else if (o.col > 0) {
        const w = o.col, V = o.row;
        l(), r(V, w - 1);
      }
      return !0;
    }
    if (d.keyCode === q.END && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return l(), r(d.ctrlKey ? p.length - 1 : w, t.length - 1), !0;
    }
    if (d.keyCode === q.HOME && o.row !== -1) {
      d.preventDefault();
      const w = o.row;
      return l(), r(d.ctrlKey ? 0 : w, 0), !0;
    }
    return !1;
  }, l = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: l, handleKeyPress: a, active: o, first: () => {
    l(), r(0, 0);
  } };
}, VS = eo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: pS,
  props: fS,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== ss.multi;
    },
    raised() {
      return this.hasValue || this.hasFocus;
    },
    hasValue() {
      var t;
      return (t = this.strategy) == null ? void 0 : t.hasValue();
    },
    showMenu() {
      return (this.showResults || this.showNoResults || this.showLoading || this.showSelectionLimit || this.showMinCharWarning) && !this.disabled;
    },
    showResults() {
      return this.forceCloseResults || this.selectionLimitReached || this.showMinCharWarning ? !1 : !!(this.hasFocus && this.internalResults && this.internalResults.length && !this.loading);
    },
    showNoResults() {
      return !this.forceCloseResults && this.hasFocus && !this.selectionLimitReached && this.internalResults && this.internalResults.length === 0 && this.query && this.query.length > 0 && this.query.length >= this.minChar && !this.loading;
    },
    showSelectionLimit() {
      return !this.forceCloseResults && this.hasFocus && this.selectionLimitReached && !this.loading;
    },
    showLoading() {
      return this.hasFocus && this.loading;
    },
    showMinCharWarning() {
      return this.minChar > 0 && !this.selectionLimitReached && !this.loading && this.hasFocus && this.query.length < this.minChar;
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
      return Ll(SJ);
    },
    minCharIcon() {
      return Ll(_J);
    },
    dropdownIcon() {
      return Ll(jc);
    },
    inputAttrs() {
      const t = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let o = "";
      return this.activeChipIndex > -1 && (o = this.activeChipId), this.active.row > -1 && this.showResults && (o = this.resultItemId), this.minChar && t.push(this.minCharWarningId), {
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
        "aria-invalid": this.$attrs["aria-invalid"] === "true" || !!this.error
      };
    },
    inputListeners() {
      return {
        input: this.handleTextInput,
        blur: this.handleInputBlur,
        focus: this.handleInputFocus,
        click: this.handleInputEnter,
        keydown: this.handleInputKeyDown
      };
    },
    comboxBoxAttrs() {
      return {
        role: "combobox",
        "aria-expanded": this.showResults ? "true" : "false",
        "aria-haspopup": this.gridConfig ? "grid" : "listbox",
        "aria-owns": this.resultsId,
        "aria-label": this.label
      };
    },
    scrollContainer() {
      return this.$refs.scroll.$el.querySelector(".feather-input-wrapper");
    },
    computedMinCharText() {
      return this.minCharLabel ? this.minCharLabel.replace("${min}", this.minChar.toString()) : "";
    },
    selectedDescribedByText() {
      return this.modelValue && this.modelValue.length ? this.modelValue.map((o) => o[this.textProp]).join(", ") : "";
    },
    allowNewEnabled() {
      return this.singleSelect && this.allowNew;
    },
    modelValueList() {
      return this.singleSelect ? [] : this.modelValue;
    }
  },
  watch: {
    activeChipIndex(t) {
      t && this.genActiveChipId(), t > -1 && this.scrollContainer && this.$nextTick(() => {
        ti(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, o) {
        t && o && t.length > o.length && this.scrollContainer && this.$nextTick(() => {
          ti(this.inputRef, this.scrollContainer);
        }), this.strategy.handleModelValueChange(t), this.hasFocus || this.adjustTextArea();
      },
      immediate: !0
    },
    results(t) {
      t && t.length > 0 && this.selectFirst(), this.forceCloseResults = !1, t && t.length === 0 && this.query && this.query.length > 0 && !this.allowNewEnabled && this.setAlert(this.noResultsLabel), this.allowNewEnabled && this.query.length && (t.some((r) => this.newMatcher(r, this.query, this)) || (t = [
        {
          [this.textProp]: this.query,
          _new: this.query
        },
        ...t
      ])), this.internalResults = t;
    },
    showResults(t) {
      const o = this.$refs.menu;
      t && o.calculatePosition && o.calculatePosition();
    },
    selectionLimitReached(t) {
      t && this.setAlert(this.selectionLimitLabel);
    }
  },
  methods: {
    getPre(t) {
      return t._pre;
    },
    genActiveChipId() {
      return this.activeChipId = le("active-chip"), this.activeChipId;
    },
    setAlert(t) {
      const o = this.$refs.alert;
      o.textContent = t, setTimeout(() => {
        o.textContent = "";
      }, 100);
    },
    handleClear() {
      this.query = "", this.inputRef.focus(), this.emitSearch(), this.$emit("update:modelValue", void 0);
    },
    handleInputFocus() {
      this.disabled || (this.adjustTextArea(), !this.hasFocus && (this.hasFocus = !0, this.modelValue && this.singleSelect && this.inputRef.select()));
    },
    handleInputEnter() {
      this.handleInputFocus(), this.emitSearch();
    },
    handleTextInput(t) {
      this.adjustTextArea();
      const r = t.target.value;
      r !== void 0 && ($o(this.typingTimeout), this.typingTimeout = Lo(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(t) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (t.keyCode === q.ENTER && t.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(t, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (t.keyCode === q.ENTER && this.activeChipIndex > -1) {
        t.preventDefault();
        const a = this.modelValue;
        this.removeFromValue(a[this.activeChipIndex]), o();
        return;
      }
      if (t.keyCode === q.ENTER && this.active.row > -1) {
        t.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((t.keyCode === q.ENTER || t.keyCode === q.SPACE || t.keyCode === q.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        t.preventDefault(), this.emitSearch();
        return;
      }
      if (t.keyCode === q.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const a = this.modelValue;
        t.keyCode === q.LEFT && (t.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = a.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), t.keyCode === q.RIGHT && (t.preventDefault(), this.activeChipIndex === a.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < a.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (t.keyCode === q.DELETE || t.keyCode === q.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(a[this.activeChipIndex]), r(), o());
      }
    },
    handleTriggerClick() {
      this.disabled || (this.inputRef.focus(), this.handleDropdownIconClick());
    },
    handleInputBlur() {
      this.validate(), this.strategy.handleInputBlur(), (this.forceCloseResults || !this.showMenu) && this.handleOutsideClick();
    },
    handleOutsideClick() {
      this.hasFocus = !1, this.forceCloseResults = !1, this.activeChipIndex = -1, this.resetResultIndex(), this.query = this.strategy.getInitialText(), this.internalResults = [], this.adjustTextArea();
    },
    clickedItem(t) {
      this.selectItem(t), this.internalResults = [], this.inputRef.focus(), this.strategy.clickedItem();
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
      !t || (t.style.height = "1.625rem", t.style.flexBasis = "40px", t.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = t.getBoundingClientRect().width, r = t.parentElement;
        t.scrollWidth <= t.clientWidth && r && o < r.getBoundingClientRect().width ? t.style.whiteSpace = "nowrap" : (t.style.whiteSpace = "normal", t.style.flexBasis = "100%"), this.$nextTick(() => {
          t.style.height = `${t.scrollHeight}px`;
        });
      }));
    }
  },
  setup(t, o) {
    const r = Gm($l(t, "labels"), hw);
    ts(t), Lm(t);
    let a;
    t.gridConfig ? a = vS(t.gridConfig) : a = wS();
    const l = $l(t, "id"), c = np(() => l.value ? l.value : le("feather-autocomplete-input")), { validate: d } = qa(c, $l(t, "modelValue"), t.label, t.schema), { selectionLimit: p, modelValue: w, textProp: V, allowNew: g, type: R, minChar: y } = xE(t), F = Fr(!1), E = Fr(!1), I = Fr(!1), C = Fr(""), A = Fr([]), Q = Fr(), O = np(() => Q.value), H = () => {
      F.value && !E.value && (C.value && C.value.length >= y.value && o.emit("search", C.value), y.value <= 0 && o.emit("search", C.value || ""), A.value = [], a.reset());
    }, k = mS({
      selectionLimit: p,
      selectionLimitReached: E,
      modelValue: w,
      textProp: V,
      allowNew: g,
      forceCloseResults: I,
      query: C,
      internalResults: A,
      input: O,
      emitSearch: H
    }, a, R.value, o.emit);
    return AE(vt(vt({}, r), Ka(o.attrs)), {
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
      input: Q,
      incomingId: l,
      inputRef: O,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: jm,
    InputSubText: $a,
    AutocompleteResults: GE,
    AutocompleteResultsGrid: KE,
    Chip: iS,
    MenuMessage: nS,
    FeatherIcon: K,
    FeatherMenu: iw,
    Spinner: hS
  }
}), TS = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, gS = ["id"], US = { "data-ref-id": "feather-autocomplete-no-results" }, RS = { "data-ref-id": "feather-autocomplete-selection-limit" }, NS = { "data-ref-id": "feather-autocomplete-min-char" };
function yS(t, o, r, a, l, c) {
  const d = Me("FeatherIcon"), p = Me("Chip"), w = Me("InputWrapper"), V = Me("AutocompleteResults"), g = Me("AutocompleteResultsGrid"), R = Me("MenuMessage"), y = Me("Spinner"), F = Me("FeatherMenu"), E = Me("InputSubText");
  return oe(), Ee("div", ql(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    rt(F, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: or(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ge(({ attrs: I, on: C }) => [
        rt(w, ql(vt(vt({}, I), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, rp(C), { ref: "scroll" }), {
          pre: Ge(() => [
            Zc(t.$slots, "pre", {}, () => [
              rt(d, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ge(() => [
            rt(d, {
              icon: t.dropdownIcon,
              class: or(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ge(() => [
            nt("div", {
              class: or(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              nt("div", TS, null, 512),
              nt("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Ot(t.selectedDescribedByText), 9, gS),
              (oe(!0), Ee(Yr, null, Ho(t.modelValueList, (A, Q) => ua((oe(), Zt(p, {
                key: A[t.textProp],
                role: "button",
                id: Q === t.activeChipIndex ? t.activeChipId : null,
                focused: Q === t.activeChipIndex,
                disabled: t.disabled,
                text: A[t.textProp],
                "remove-label": t.removeLabel,
                pre: t.getPre(A),
                onDelete: (O) => t.removeFromValue(A)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [da, !t.singleSelect]
              ])), 128)),
              nt("textarea", ql(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, rp(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ge(() => [
        t.gridConfig ? bt("", !0) : ua((oe(), Zt(V, {
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
          ref: "results"
        }, null, 8, ["items", "value", "text-prop", "activeId", "activeIndex", "aria-label", "onSelect", "onDeselect", "id", "single", "new-label", "highlight", "query"])), [
          [da, t.showResults]
        ]),
        t.gridConfig ? ua((oe(), Zt(g, {
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
          query: t.query
        }, null, 8, ["items", "value", "text-prop", "config", "activeId", "activeRow", "activeCol", "aria-label", "onSelect", "id", "single", "highlight", "query"])), [
          [da, t.showResults]
        ]) : bt("", !0),
        t.showNoResults ? (oe(), Zt(R, { key: 2 }, {
          default: Ge(() => [
            nt("span", US, Ot(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : bt("", !0),
        t.showSelectionLimit ? (oe(), Zt(R, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ge(() => [
            rt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            nt("span", RS, Ot(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : bt("", !0),
        t.minChar ? ua((oe(), Zt(R, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: Ge(() => [
            rt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            nt("span", NS, [
              Zc(t.$slots, "min-char", {}, () => [
                lw(Ot(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [da, t.showMinCharWarning]
        ]) : bt("", !0),
        t.showLoading ? (oe(), Zt(y, { key: 5 })) : bt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    rt(E, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var kS = /* @__PURE__ */ lr(VS, [["render", yS], ["__scopeId", "data-v-43a7e951"]]);
const MS = window.Pinia.defineStore, fw = MS("appStore", {
  state: () => ({
    showError: !1,
    errorMessage: ""
  }),
  actions: {
    showErrorMsg(t) {
      this.showError = !0, this.errorMessage = t, setTimeout(() => {
        this.showError = !1, this.errorMessage = "";
      }, 1800);
    }
  }
}), ZS = window.Vue.defineComponent, tr = window.Vue.createElementVNode, Ao = window.Vue.unref, Ar = window.Vue.createVNode, bS = window.Vue.withCtx, ha = window.Vue.toDisplayString, JS = window.Vue.renderList, ES = window.Vue.Fragment, Wr = window.Vue.openBlock, Cr = window.Vue.createElementBlock, Kl = window.Vue.createCommentVNode, SS = window.Vue.pushScopeId, FS = window.Vue.popScopeId, pw = (t) => (SS("data-v-5ca769d2"), t = t(), FS(), t), AS = { class: "list-main" }, WS = /* @__PURE__ */ pw(() => /* @__PURE__ */ tr("h2", null, "Situation List", -1)), CS = { class: "filters" }, xS = /* @__PURE__ */ pw(() => /* @__PURE__ */ tr("span", null, "Reset Filters", -1)), BS = { class: "autocomplete" }, IS = {
  key: 0,
  class: "container"
}, DS = { class: "situation-list" }, OS = {
  key: 0,
  class: "footer-pager"
}, QS = {
  key: 1,
  class: "container"
}, _S = window.Vue.reactive, xr = window.Vue.ref, zS = window.Vue.watch, GS = window.VueRouter.useRouter, YS = /* @__PURE__ */ ZS({
  __name: "SituationList",
  setup(t) {
    const o = GS(), r = qr(), a = fw();
    r.getSituations(), r.getNodes();
    const l = 9, c = _S({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: [],
      filterSeverities: ["all"]
    }), d = xr(!1), p = xr(0), w = xr(1), V = xr(0), g = xr(!1), R = xr(!1), y = (k) => {
      p.value = 0, c.situations = k[0], w.value = k.length;
    }, F = () => {
      c.nodes = r.nodes, c.results = r.nodes;
    };
    a.$subscribe((k, W) => {
      R.value = W.showError;
    }), zS(
      () => r.situations,
      () => {
        F(), V.value = r.situations.length, c.allSituations = Ze.exports.chunk(r.situations, l);
        const k = r.situations.map((W) => W.id);
        r.filteredSituations = k, y(c.allSituations), E();
      }
    );
    const E = () => {
      r.filters && (r.filters.node && (c.nodeSelectedValue = r.filters.node), r.filters.severities && (c.filterSeverities = r.filters.severities), C(), r.filters = null);
    }, I = (k) => {
      if (!k)
        return c.nodeSelectedValue = void 0, [];
      d.value = !0, c.results = c.nodes.filter((W) => W.label.toLowerCase().indexOf(k) > -1).map((W) => ({
        _text: W.label,
        id: W.id
      })), d.value = !1;
    }, C = () => {
      if (c.nodeSelectedValue && c.nodeSelectedValue._text) {
        let k = r.situations.map((W) => {
          if (W.relatedAlarms.filter(
            (z) => {
              var de;
              return z.nodeLabel === ((de = c.nodeSelectedValue) == null ? void 0 : de._text);
            }
          ).length > 0)
            return W;
        }).filter((W) => W);
        if (k) {
          c.filterSeverities.includes("all") || (k = k.filter(
            (x) => c.filterSeverities.includes(x.severity)
          )), V.value = k.length, c.situations = k;
          const W = k.map((x) => x.id);
          r.filteredSituations = W, g.value = !0;
        }
      } else if (c.nodeSelectedValue = void 0, c.filterSeverities.includes("all"))
        H();
      else {
        const k = r.situations.filter(
          (x) => c.filterSeverities.includes(x.severity)
        );
        c.situations = k, V.value = k.length;
        const W = k.map((x) => x.id);
        g.value = !0, r.filteredSituations = W;
      }
    }, A = (k) => {
      p.value = k, c.situations = c.allSituations[p.value];
    }, Q = (k) => {
      (c.nodeSelectedValue || c.filterSeverities.length) && (r.filters = {
        node: c.nodeSelectedValue,
        severities: c.filterSeverities
      }), o.push({
        name: "situationDetail",
        params: {
          id: k
        }
      });
    }, O = (k) => {
      k.includes("all") && !c.nodeSelectedValue ? H() : (c.filterSeverities = k, C());
    }, H = () => {
      c.filterSeverities = ["all"], c.nodeSelectedValue = void 0;
      const k = r.situations.map((W) => W.id);
      r.filteredSituations = k, V.value = r.situations.length, y(c.allSituations), g.value = !1;
    };
    return (k, W) => (Wr(), Cr("div", AS, [
      WS,
      tr("div", CS, [
        Ar(Ao(wt), {
          class: "reset-btn",
          onClick: W[0] || (W[0] = () => H())
        }, {
          default: bS(() => [
            Ar(Ao(K), {
              icon: Ao(rw),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            xS
          ]),
          _: 1
        }),
        Ar(nw, {
          alarms: Ao(r).situations,
          onSelectedSeverities: O,
          "pre-selected": c.filterSeverities
        }, null, 8, ["alarms", "pre-selected"]),
        tr("div", BS, [
          Ar(Ao(kS), {
            class: "map-search",
            label: "Find by node",
            loading: d.value,
            modelValue: c.nodeSelectedValue,
            "onUpdate:modelValue": [
              W[1] || (W[1] = (x) => c.nodeSelectedValue = x),
              C
            ],
            results: c.results,
            type: "single",
            onSearch: I
          }, null, 8, ["loading", "modelValue", "results"])
        ])
      ]),
      c.situations && c.situations.length > 0 ? (Wr(), Cr("div", IS, [
        tr("div", null, " Result: " + ha(c.situations.length) + " of " + ha(V.value), 1),
        tr("div", DS, [
          (Wr(!0), Cr(ES, null, JS(c.situations, (x) => (Wr(), Cr("div", {
            class: "card",
            key: x.id
          }, [
            Ar(wM, {
              onClick: () => Q(x.id),
              "situation-info": x
            }, null, 8, ["onClick", "situation-info"])
          ]))), 128))
        ]),
        !g.value && V.value > l ? (Wr(), Cr("div", OS, [
          tr("div", null, "Page: " + ha(p.value + 1) + " of " + ha(w.value), 1),
          Ar(sZ, {
            onGoToPage: A,
            currentPage: p.value,
            totalPages: w.value
          }, null, 8, ["currentPage", "totalPages"])
        ])) : Kl("", !0)
      ])) : Kl("", !0),
      !c.situations || c.situations.length == 0 ? (Wr(), Cr("div", QS, " No results found ")) : Kl("", !0)
    ]));
  }
});
const HS = /* @__PURE__ */ ye(YS, [["__scopeId", "data-v-5ca769d2"]]);
const fa = window.Vue.ref, PS = window.Vue.inject, jS = window.Vue.computed, XS = window.Vue.onMounted, LS = {
  id: {
    type: String
  },
  controls: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, $S = (t) => {
  const o = fa(!1), r = fa(), a = fa(t.controls), l = fa(t.id), c = () => {
    r.value && r.value.focus();
  }, d = PS("registerTab");
  XS(() => {
    if (r.value && d) {
      const w = r.value.parentElement, V = w && w.parentElement ? w.parentElement : void 0, g = Array.from(V ? V.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), R = w ? g.indexOf(w) : -1;
      d({
        el: r.value,
        focus: c,
        disabled: t.disabled,
        selected: o,
        id: l,
        controls: a,
        index: R
      });
    }
  });
  const p = jS(() => ({
    role: "tab",
    ref: "tab",
    tabindex: o.value ? 0 : -1,
    id: l.value,
    "aria-selected": o.value,
    "aria-controls": a.value,
    "aria-disabled": t.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: o,
    attrs: p,
    tab: r
  };
}, op = window.Vue.ref, qS = window.Vue.toRef, KS = window.Vue.watch, ip = window.Vue.provide, eF = {
  prop: "modelValue",
  event: "update:modelValue"
}, tF = {
  "update:modelValue": (t) => !0
}, nF = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, rF = (t, o) => {
  const r = qS(t, "modelValue"), a = op(t.modelValue), l = op([]);
  KS(r, (E) => {
    w(E);
  });
  const c = (E) => {
    E.preventDefault(), l.value.some((I, C) => I.tab && I.tab.el.contains(E.target) ? (p(C), w(C), !0) : !1);
  }, d = (E) => {
    if (((z) => z.shiftKey || z.ctrlKey || z.metaKey || z.altKey)(E))
      return;
    const C = E.keyCode, A = (z) => {
      z.stopPropagation(), z.preventDefault();
    }, Q = l.value.filter((z) => z.tab && !z.tab.disabled), O = l.value.findIndex((z) => z.tab && z.tab.el.contains(document.activeElement));
    let H = O !== -1 ? O : a.value;
    const k = [q.RIGHT], W = [q.LEFT], x = [q.ENTER, q.SPACE];
    t.vertical && (k.push(q.DOWN), W.push(q.UP)), k.indexOf(C) > -1 ? (H++, H >= Q.length && (H = 0), A(E), p(l.value.indexOf(Q[H]))) : W.indexOf(C) > -1 && (H--, H < 0 && (H = Q.length - 1), A(E), p(l.value.indexOf(Q[H]))), x.indexOf(C) > -1 && w(H);
  }, p = (E) => {
    l.value.forEach(function(I, C) {
      E === C && I.tab && I.tab.focus();
    });
  }, w = (E) => {
    const I = l.value[E];
    !I || I.tab && I.tab.disabled || (l.value.forEach((C, A) => {
      C.tab && (C.tab.selected = E === A), C.panel && (C.panel.selected = E === A);
    }), a.value = E, o.emit("update:modelValue", E));
  };
  ip("registerTab", (E) => {
    const I = E.index;
    I > -1 && (l.value[I] = { ...l.value[I], tab: E }, l.value = [...l.value], R());
  }), ip("registerPanel", (E) => {
    const I = E.index;
    I > -1 && (l.value[I] = {
      ...l.value[I],
      panel: E
    }, l.value = [...l.value], R());
  });
  const R = () => {
    l.value.forEach(({ tab: E, panel: I }, C) => {
      if (I && E) {
        const A = E.id || le("tab"), Q = E.controls || le("panel");
        E.controls = Q, E.id = A, I.tab = A, I.id = Q;
      }
      C === a.value && (I && (I.selected = !0), E && (E.selected = !0));
    });
  };
  return {
    listeners: {
      click: c,
      keydown: d
    },
    attrs: {
      role: "tablist"
    },
    selected: a,
    pairs: l
  };
}, pa = window.Vue.ref, oF = window.Vue.inject, iF = window.Vue.computed, aF = window.Vue.onMounted, sF = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, lF = (t) => {
  const o = pa(!1), r = pa(), a = pa(t.tab), l = pa(t.id), c = oF("registerPanel");
  aF(() => {
    if (c) {
      const p = r.value, w = p && p.parentElement ? p.parentElement : void 0, V = p ? Array.from(w ? w.children : []).indexOf(p) : -1;
      c({
        selected: o,
        id: l,
        tab: a,
        el: r.value,
        index: V
      });
    }
  });
  const d = iF(() => ({
    role: "tabpanel",
    id: l.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": o.value,
    "aria-labelledby": a.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: o,
    attrs: d,
    panel: r
  };
}, Kc = window.Vue.defineComponent, cF = window.Vue.resolveComponent, eu = window.Vue.openBlock, tu = window.Vue.createElementBlock, Po = window.Vue.createElementVNode, mw = window.Vue.mergeProps, _a = window.Vue.renderSlot, uF = window.Vue.createVNode, dF = window.Vue.normalizeStyle, hF = window.Vue.toHandlers, fF = window.Vue.withDirectives, pF = window.Vue.normalizeProps, mF = window.Vue.guardReactiveProps, wF = window.Vue.vShow;
var nu = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const vF = LS, VF = Kc({
  props: vF,
  setup(t) {
    return $S(t);
  },
  components: {
    FeatherRipple: ar
  }
}), TF = { role: "presentation" }, gF = { class: "tab-text" };
function UF(t, o, r, a, l, c) {
  const d = cF("FeatherRipple");
  return eu(), tu("li", TF, [
    Po("button", mw(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      Po("span", gF, [
        _a(t.$slots, "default", {}, void 0, !0)
      ]),
      uF(d)
    ], 16)
  ]);
}
var ap = /* @__PURE__ */ nu(VF, [["render", UF], ["__scopeId", "data-v-e6bb52b6"]]);
const RF = nF, NF = tF, yF = Kc({
  model: eF,
  emits: NF,
  props: RF,
  setup(t, o) {
    return rF(t, o);
  },
  data: () => ({
    transform: "",
    durationNumber: 250,
    width: "1px",
    ro: void 0
  }),
  watch: {
    selected() {
      this.updateSlider();
    },
    pairs: {
      handler(t) {
        t && t.length && this.ro && t.forEach((o) => {
          o.tab && this.ro.observe(o.tab.el);
        });
      },
      immediate: !0
    }
  },
  computed: {
    duration() {
      return `${this.durationNumber}ms`;
    }
  },
  methods: {
    updateSlider() {
      this.$refs.slider.getBoundingClientRect().width < 5 ? this.durationNumber = 0 : this.durationNumber = 250, this.$nextTick(() => {
        const t = this.$el.getBoundingClientRect(), o = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = o.left - t.left, a = o.height - 2;
        this.width = `${o.width}px`, this.transform = `translateX(${r}px) translateY(${a}px)`;
      });
    }
  },
  mounted() {
    this.updateSlider(), this.ro = new ResizeObserver(() => {
      this.updateSlider();
    });
  },
  unmounted() {
    this.ro.disconnect();
  }
}), kF = { class: "feather-tab-container" }, MF = { class: "tab-panels" };
function ZF(t, o, r, a, l, c) {
  return eu(), tu("div", kF, [
    Po("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: dF({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    Po("ul", mw(t.attrs, hF(t.listeners)), [
      _a(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Po("div", MF, [
      _a(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var bF = /* @__PURE__ */ nu(yF, [["render", ZF], ["__scopeId", "data-v-27adffb9"]]);
const JF = sF, EF = Kc({
  props: JF,
  setup(t) {
    return lF(t);
  }
});
function SF(t, o, r, a, l, c) {
  return fF((eu(), tu("div", pF(mF(t.attrs)), [
    _a(t.$slots, "default")
  ], 16)), [
    [wF, t.selected]
  ]);
}
var sp = /* @__PURE__ */ nu(EF, [["render", SF]]);
const FF = window.Vue.defineComponent, AF = window.Vue.toDisplayString, WF = window.Vue.normalizeClass, CF = window.Vue.openBlock, xF = window.Vue.createElementBlock, BF = window.Vue.createCommentVNode, IF = /* @__PURE__ */ FF({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const o = t;
    return (r, a) => o != null && o.severity ? (CF(), xF("span", {
      key: 0,
      class: WF(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, AF(o.severity), 3)) : BF("", !0);
  }
});
const ww = /* @__PURE__ */ ye(IF, [["__scopeId", "data-v-83c2cdce"]]), DF = window.Vue.defineComponent, lp = window.Vue.toDisplayString, cp = window.Vue.createElementVNode, OF = window.Vue.openBlock, QF = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const _F = { class: "box" }, zF = { class: "label" }, GF = { class: "date" }, YF = /* @__PURE__ */ DF({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (OF(), QF("div", _F, [
      cp("div", zF, lp(o.label), 1),
      cp("div", GF, lp(o.info), 1)
    ]));
  }
});
const ec = /* @__PURE__ */ ye(YF, [["__scopeId", "data-v-b4afa751"]]), HF = window.Vue.defineComponent, PF = window.Vue.unref, jF = window.Vue.renderList, XF = window.Vue.Fragment, tc = window.Vue.openBlock, nc = window.Vue.createElementBlock, LF = window.Vue.toDisplayString, $F = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const qF = { class: "alarms-list" }, KF = /* @__PURE__ */ HF({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (tc(), nc("div", qF, [
      (tc(!0), nc(XF, null, jF(PF(Ze.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (l, c) => (tc(), nc("div", {
        class: $F(["alarm-count", [`${c.toString().toLowerCase()}-color`, o.size]]),
        key: c
      }, LF(l.length), 3))), 128))
    ]));
  }
});
const eA = /* @__PURE__ */ ye(KF, [["__scopeId", "data-v-52d63440"]]), tA = window.Vue.openBlock, nA = window.Vue.createElementBlock, rA = window.Vue.createElementVNode;
var oA = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const iA = {}, aA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sA = /* @__PURE__ */ rA("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), lA = [
  sA
];
function cA(t, o) {
  return tA(), nA("svg", aA, lA);
}
var uA = /* @__PURE__ */ oA(iA, [["render", cA]]);
const dA = window.Vue.openBlock, hA = window.Vue.createElementBlock, fA = window.Vue.createStaticVNode;
var pA = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const mA = {}, wA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vA = /* @__PURE__ */ fA('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), VA = [
  vA
];
function TA(t, o) {
  return dA(), hA("svg", wA, VA);
}
var vw = /* @__PURE__ */ pA(mA, [["render", TA]]);
const gA = window.Vue.defineComponent, Bt = window.Vue.unref, rc = window.Vue.createVNode, ru = window.Vue.createElementVNode, oc = window.Vue.withCtx, ma = window.Vue.openBlock, ic = window.Vue.createBlock, ac = window.Vue.createCommentVNode, UA = window.Vue.normalizeClass, RA = window.Vue.createElementBlock, NA = window.Vue.pushScopeId, yA = window.Vue.popScopeId, ou = (t) => (NA("data-v-e073070b"), t = t(), yA(), t), kA = /* @__PURE__ */ ou(() => /* @__PURE__ */ ru("span", null, "Acknowledge", -1)), MA = /* @__PURE__ */ ou(() => /* @__PURE__ */ ru("span", null, "Escalate", -1)), ZA = /* @__PURE__ */ ou(() => /* @__PURE__ */ ru("span", null, "Clear", -1)), bA = /* @__PURE__ */ gA({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(t) {
    const o = t, r = qr(), a = async (c) => {
      await XN(o.alarm.id, c) && r.getSituation(o.situationId), o.isSituation && await Am(
        o.situationId,
        pt.ACCEPTED.toLowerCase()
      );
    }, l = async (c) => {
      await LN(o.alarm.id, c) && r.getSituation(o.situationId);
    };
    return (c, d) => (ma(), RA("div", {
      class: UA(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? ac("", !0) : (ma(), ic(Bt(wt), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => a(!0))
      }, {
        default: oc(() => [
          rc(Bt(K), {
            icon: Bt(ai),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          kA
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (ma(), ic(Bt(wt), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => l(Bt(pt).ESCALATE))
      }, {
        default: oc(() => [
          rc(Bt(K), {
            icon: Bt(uA),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          MA
        ]),
        _: 1
      })) : ac("", !0),
      o.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (ma(), ic(Bt(wt), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => l(Bt(pt).CLEAR))
      }, {
        default: oc(() => [
          rc(Bt(K), {
            icon: Bt(vw),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          ZA
        ]),
        _: 1
      })) : ac("", !0)
    ], 2));
  }
});
const Vw = /* @__PURE__ */ ye(bA, [["__scopeId", "data-v-e073070b"]]);
var JA = Object.defineProperty, EA = Object.defineProperties, SA = Object.getOwnPropertyDescriptors, up = Object.getOwnPropertySymbols, FA = Object.prototype.hasOwnProperty, AA = Object.prototype.propertyIsEnumerable, dp = (t, o, r) => o in t ? JA(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, bc = (t, o) => {
  for (var r in o || (o = {}))
    FA.call(o, r) && dp(t, r, o[r]);
  if (up)
    for (var r of up(o))
      AA.call(o, r) && dp(t, r, o[r]);
  return t;
}, Tw = (t, o) => EA(t, SA(o));
const gw = window.Vue.defineComponent, WA = window.Vue.inject, CA = window.Vue.resolveComponent, sc = window.Vue.openBlock, hp = window.Vue.createElementBlock, _r = window.Vue.createElementVNode, xA = window.Vue.createBlock, fp = window.Vue.createCommentVNode, BA = window.Vue.renderSlot, IA = window.Vue.pushScopeId, DA = window.Vue.popScopeId, lc = window.Vue.toRef, wa = window.Vue.computed, OA = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var QA = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const _A = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  },
  indeterminate: {
    type: Boolean,
    default: !1
  },
  label: {
    type: String
  },
  noFocus: {
    type: Boolean,
    default: !1
  }
}, zA = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, GA = gw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: zA,
  props: _A,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: WA("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : le("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : le("checkbox-label");
    }
  },
  watch: {
    indeterminate: {
      handler(t) {
        this.$emit("update:modelValue", void 0), this.$emit("indeterminate", t);
      }
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    updateValue() {
      this.disabled || (this.indeterminate ? (this.$emit("update:modelValue", !0), this.$emit("indeterminate", !1)) : (this.$emit("update:modelValue", !this.modelValue), this.$emit("indeterminate", !1)));
    },
    click(t) {
      this.focus(), this.updateValue(), this.$emit("click", t);
    },
    keydown(t) {
      (t.keyCode === q.SPACE || t.keyCode === q.ENTER) && this.updateValue(), t.keyCode === q.SPACE && t.preventDefault();
    }
  },
  components: {
    FeatherRipple: ar
  }
}), YA = (t) => (IA("data-v-a7af27e2"), t = t(), DA(), t), HA = { class: "layout-container" }, PA = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], jA = { class: "checkbox hover focus" }, XA = /* @__PURE__ */ YA(() => /* @__PURE__ */ _r("div", { class: "box" }, [
  /* @__PURE__ */ _r("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ _r("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ _r("div", { class: "indeterminate" })
], -1)), LA = ["id", "for"];
function $A(t, o, r, a, l, c) {
  const d = CA("feather-ripple");
  return sc(), hp("div", HA, [
    _r("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: o[0] || (o[0] = (...p) => t.click && t.click(...p)),
      onKeydown: o[1] || (o[1] = (...p) => t.keydown && t.keydown(...p)),
      "aria-checked": t.modelValue ? "true" : t.indeterminate ? "mixed" : "false",
      "aria-disabled": t.disabled,
      "aria-labelledby": t.labelId,
      "aria-label": t.label,
      id: t.inputId,
      tabindex: t.noFocus ? -1 : 0,
      ref: "input",
      role: "checkbox",
      "data-ref-id": "feather-checkbox"
    }, [
      _r("div", jA, [
        XA,
        t.disabled ? fp("", !0) : (sc(), xA(d, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? fp("", !0) : (sc(), hp("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        BA(t.$slots, "default", {}, void 0, !0)
      ], 8, LA))
    ], 40, PA)
  ]);
}
var iu = /* @__PURE__ */ QA(GA, [["render", $A], ["__scopeId", "data-v-a7af27e2"]]);
const qA = Tw(bc({}, es), {
  modelValue: {
    type: [Array, Object],
    required: !1
  },
  label: {
    type: String,
    required: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  }
});
gw({
  props: qA,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, o) {
    ts(t);
    const r = lc(t, "error"), a = wa(() => le("feather-checkbox-group")), l = wa(() => le("feather-input-description")), c = wa(() => le("feather-input-label")), d = wa(() => {
      const g = JSON.parse(JSON.stringify(o.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!r.value), Tw(bc({}, g), {
        class: "",
        "aria-describedby": l.value
      });
    }), p = OA(a.value), { validate: w } = qa(p, lc(t, "modelValue"), t.label, t.schema, lc(t, "error"));
    return bc({
      groupId: a,
      inputId: p,
      descriptionId: l,
      labelId: c,
      attrs: d,
      validate: w,
      registerCheckbox: (g) => {
        g && p.value === a.value && (p.value = g);
      }
    }, Ka(o.attrs));
  },
  components: {
    InputSubText: $a
  }
});
const KA = window.Vue.openBlock, eW = window.Vue.createElementBlock, Uw = window.Vue.createElementVNode;
var tW = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const nW = {}, rW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oW = /* @__PURE__ */ Uw("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), iW = /* @__PURE__ */ Uw("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), aW = [
  oW,
  iW
];
function sW(t, o) {
  return KA(), eW("svg", rW, aW);
}
var lW = /* @__PURE__ */ tW(nW, [["render", sW]]);
const pp = function(t) {
  t = t || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), o].join("-");
};
const to = window.Vue.defineComponent, ni = window.Vue.resolveComponent, jt = window.Vue.openBlock, zr = window.Vue.createElementBlock, cW = window.Vue.createVNode, za = window.Vue.createBlock, uW = window.Vue.withModifiers, Lr = window.Vue.inject, ri = window.Vue.computed, dW = window.Vue.normalizeClass, En = window.Vue.createElementVNode, hW = window.Vue.normalizeStyle, Jc = window.Vue.toDisplayString, Ja = window.Vue.renderSlot, jo = window.Vue.createCommentVNode, fW = window.Vue.pushScopeId, pW = window.Vue.popScopeId, mW = window.Vue.withDirectives, wW = window.Vue.vShow, Ec = window.Vue.ref, mp = window.Vue.toRef, wp = window.Vue.nextTick, Sc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const au = window.Vue.provide, vp = window.Vue.isRef, vW = window.Vue.onBeforeUnmount, VW = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, TW = to({
  props: VW,
  components: {
    FeatherIcon: K
  }
}), hi = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
}, gW = ["title"];
function UW(t, o, r, a, l, c) {
  const d = ni("FeatherIcon");
  return jt(), zr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    cW(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, gW);
}
const RW = /* @__PURE__ */ hi(TW, [["render", UW], ["__scopeId", "data-v-8bb27a5c"]]), NW = to({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return li;
    }
  },
  components: {
    ActionIcon: RW
  }
});
function yW(t, o, r, a, l, c) {
  const d = ni("ActionIcon");
  return jt(), za(d, {
    onClick: o[0] || (o[0] = uW((p) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
const kW = /* @__PURE__ */ hi(NW, [["render", yW]]), MW = to({
  computed: {
    errorIcon() {
      return Ym;
    }
  },
  components: {
    FeatherIcon: K
  }
});
function ZW(t, o, r, a, l, c) {
  const d = ni("FeatherIcon");
  return jt(), za(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
const bW = /* @__PURE__ */ hi(MW, [["render", ZW], ["__scopeId", "data-v-2b61105f"]]), JW = {
  for: {
    type: String,
    required: !0
  },
  focused: {
    type: Boolean,
    default: !1
  },
  showClear: {
    type: Boolean,
    default: !1
  },
  clearText: {
    type: String
  },
  raised: {
    type: Boolean,
    default: !1
  }
}, EW = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, SW = to({
  emits: EW,
  props: JW,
  data() {
    return {
      labelWidth: "0px",
      labelObserver: void 0
    };
  },
  setup() {
    const t = Lr(
      "wrapperOptions",
      {}
    ), o = Lr(
      "validationErrorMessage",
      !1
    ), r = ri(() => t.error ? t.error : o && o.value ? o.value : !1);
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
      return this.$slots.pre && this.$slots.pre().findIndex((o) => o.children && o.children.length !== 0) !== -1;
    },
    containerCls() {
      const t = [];
      return this.hideLabel && t.push("hide-label"), this.raised && t.push("raised"), this.focused && t.push("focused"), this.error && t.push("error"), this.disabled && t.push("disabled"), this.inline && t.push("inline"), this.hasPre && t.push("has-prefix"), t;
    }
  },
  methods: {
    handleWrapperClick(t) {
      this.disabled || this.$emit("wrapper-click", t);
    }
  },
  mounted() {
    const t = this.$el.querySelector(".feather-input-label");
    if (t) {
      const o = { childList: !0, subtree: !0 }, r = () => {
        const a = this.$el.querySelector(".feather-input-label"), { width: l } = a.getBoundingClientRect();
        l > 2 ? this.raised || this.focused ? this.labelWidth = l + "px" : this.labelWidth = l * 0.75 + 8 + "px" : this.labelWidth = "0px";
      };
      this.labelObserver = new MutationObserver(r), this.labelObserver.observe(t, o), this.$nextTick(r);
    }
  },
  unmounted() {
    this.labelObserver && this.labelObserver.disconnect();
  },
  components: {
    ClearIcon: kW,
    ErrorIcon: bW
  }
}), Rw = (t) => (fW("data-v-ab1739ff"), t = t(), pW(), t), FW = { class: "feather-input-border" }, AW = /* @__PURE__ */ Rw(() => /* @__PURE__ */ En("div", { class: "pre-border" }, null, -1)), WW = ["for"], CW = /* @__PURE__ */ Rw(() => /* @__PURE__ */ En("div", { class: "post-border" }, null, -1)), xW = { class: "prefix" }, BW = { class: "post" };
function IW(t, o, r, a, l, c) {
  const d = ni("ClearIcon"), p = ni("ErrorIcon");
  return jt(), zr("div", {
    class: dW(["feather-input-wrapper-container", t.containerCls])
  }, [
    En("div", FW, [
      AW,
      En("div", {
        class: "label-border",
        style: hW({ width: t.labelWidth })
      }, [
        En("label", {
          class: "feather-input-label",
          for: t.inputId,
          "data-ref-id": "feather-form-element-label"
        }, Jc(t.label), 9, WW)
      ], 4),
      CW
    ]),
    En("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      En("div", xW, [
        Ja(t.$slots, "pre", {}, void 0, !0)
      ]),
      Ja(t.$slots, "default", {}, void 0, !0),
      En("div", BW, [
        t.showClear && t.computedClearText ? (jt(), za(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: o[0] || (o[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : jo("", !0),
        t.error ? (jt(), za(p, { key: 1 })) : jo("", !0),
        Ja(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
const DW = /* @__PURE__ */ hi(SW, [["render", IW], ["__scopeId", "data-v-ab1739ff"]]), OW = to({
  setup() {
    const t = Lr(
      "subTextOptions",
      {}
    ), o = Lr(
      "validationErrorMessage",
      !1
    ), r = ri(() => t.error ? t.error : o && o.value ? o.value : "");
    return { ...t, error: r };
  }
}), QW = { class: "feather-input-sub-text" }, _W = {
  key: 0,
  class: "feather-input-spacer"
}, zW = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, GW = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function YW(t, o, r, a, l, c) {
  return mW((jt(), zr("div", QW, [
    !t.hint && !t.error.length ? (jt(), zr("div", _W, "\xA0")) : jo("", !0),
    t.hint && !t.error.length ? (jt(), zr("div", zW, Jc(t.hint), 1)) : jo("", !0),
    t.error.length > 0 ? (jt(), zr("div", GW, Jc(t.error), 1)) : jo("", !0),
    Ja(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [wW, !t.inline || t.hint || t.error.length]
  ]);
}
const HW = /* @__PURE__ */ hi(OW, [["render", YW], ["__scopeId", "data-v-f0789880"]]), PW = {
  headingText: {
    type: Function,
    default: (t) => t.length && t.length === 1 ? "1 error" : `${t.length} errors`
  },
  errorList: {
    type: Array,
    default: () => []
  },
  generalError: {
    type: String,
    default: ""
  }
};
to({
  props: PW,
  setup(t) {
    const o = Lr(
      "featherFormErrors",
      Ec([])
    ), r = mp(t, "errorList"), a = ri(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : o.value;
    }), l = mp(t, "generalError"), c = (g) => {
      document.getElementById(g).focus();
    }, d = (g) => g.replace(/ \*$/, ""), p = Ec(), w = (g) => `${d(g.label)} - ${g.message}`, V = ri(() => (a.value.length && wp(() => p.value.focus()), t.headingText(a.value)));
    return Sc(l, (g) => {
      g.length && wp(() => p.value.focus());
    }), {
      errors: a,
      errorsHeading: V,
      heading: p,
      focusElement: c,
      mainError: l,
      getFullMessage: w
    };
  }
});
const jW = (t, o, r, a, l) => {
  const c = Lr("featherForm", !1);
  if (a && c && t.value) {
    const d = Ec("");
    au("validationErrorMessage", d);
    const p = () => {
      if (l && vp(l) && l.value)
        return d.value = l.value, {
          success: !1,
          message: l.value,
          inputId: t.value,
          label: r
        };
      try {
        return a.validateSync(o.value), d.value = "", { success: !0 };
      } catch (g) {
        const R = g;
        return d.value = R.errors[0], {
          success: !1,
          message: R.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, V = {
      clear: () => {
        d.value = "";
      },
      validate: p
    };
    return l && vp(l) && Sc(l, () => {
      c.runValidation();
    }), Sc(
      t,
      (g, R) => {
        g && c && c.register(g, V), R && c && c.deregister(R);
      },
      { immediate: !0 }
    ), vW(() => {
      c.deregister(t.value, !0);
    }), { validate: p };
  }
  return { validate: () => !0 };
}, XW = (t) => ({
  inherittedAttrs: ri(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), LW = {
  hint: {
    type: String
  },
  error: {
    type: String
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, $W = (t) => {
  au("subTextOptions", t);
}, qW = {
  label: {
    type: String,
    required: !0
  },
  error: {
    type: String
  },
  clear: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  inline: {
    type: Boolean,
    default: !1
  },
  hideLabel: {
    type: Boolean,
    default: !1
  }
}, KW = (t) => {
  au("wrapperOptions", t);
}, eC = window.Vue.defineComponent, cc = window.Vue.toRef, tC = window.Vue.computed, Vp = window.Vue.resolveComponent, Tp = window.Vue.openBlock, gp = window.Vue.createElementBlock, Up = window.Vue.mergeProps, Rp = window.Vue.createVNode, nC = window.Vue.normalizeClass, Np = window.Vue.withCtx, rC = window.Vue.createElementVNode, oC = window.Vue.toDisplayString, iC = window.Vue.createCommentVNode, aC = {
  ...qW,
  ...LW,
  modelValue: {
    type: String
  },
  maxlength: {
    type: Number,
    required: !1,
    default: 0
  },
  auto: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  },
  id: {
    type: String,
    required: !1
  }
}, sC = {
  "update:modelValue": (t) => !0
}, lC = eC({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: sC,
  props: aC,
  setup(t, o) {
    $W(t), KW(t);
    const r = cc(t, "id"), a = tC(() => r.value ? r.value : pp("feather-textarea-label")), { validate: l } = jW(
      a,
      cc(t, "modelValue"),
      t.label,
      t.schema,
      cc(t, "error")
    );
    return {
      inputId: a,
      incomingId: r,
      validate: l,
      ...XW(o.attrs)
    };
  },
  data() {
    return {
      focused: !1,
      internalValue: "",
      initialHeight: 0
    };
  },
  computed: {
    descriptionId() {
      return pp("feather-textarea-description");
    },
    showClear() {
      return !!(this.internalValue && this.internalValue.length > 0);
    },
    contentCls() {
      const t = [];
      return this.error && t.push("error"), this.disabled && t.push("disabled"), this.focused && t.push("focused"), t;
    },
    isRaised() {
      return !!(this.internalValue || this.focused);
    },
    attrs() {
      const t = { ...this.$attrs };
      return delete t.placeholder, t["aria-invalid"] || (t["aria-invalid"] = !!this.error), {
        ...t,
        ...this.listeners,
        class: "",
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (t["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      };
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
        }
      };
    },
    charCount() {
      return `${this.internalValue && this.internalValue.length || "0"} / ${this.maxlength}`;
    }
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler(t) {
        this.adjustTextArea(), this.internalValue = t;
      }
    },
    internalValue: {
      immediate: !0,
      handler(t) {
        this.$emit("update:modelValue", t);
      }
    }
  },
  methods: {
    handleClear() {
      this.internalValue = "", this.focus();
    },
    handleWrapperClick() {
      this.$refs.input.focus();
    },
    handleFocus() {
      this.focused = !0;
    },
    handleBlur() {
      this.validate(), this.focused = !1;
    },
    handleInput(t) {
      this.internalValue = t.target.value, this.$emit("update:modelValue", this.internalValue);
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    adjustTextArea() {
      if (!this.auto)
        return;
      const t = this.$refs.input;
      !t || (t.style.height = "12px", t.style.flexBasis = "40px", t.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = t.getBoundingClientRect().width;
        t.scrollWidth <= t.clientWidth && o < t.parentElement.getBoundingClientRect().width ? t.style.whiteSpace = "nowrap" : (t.style.whiteSpace = "normal", t.style.flexBasis = "100%"), this.$nextTick(() => {
          t.style.height = `${t.scrollHeight < this.initialHeight ? this.initialHeight : t.scrollHeight}px`;
        });
      }));
    }
  },
  mounted() {
    const t = this.$refs.input;
    this.initialHeight = t.getBoundingClientRect().height;
  },
  components: {
    InputSubText: HW,
    InputWrapper: DW
  }
}), cC = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
}, uC = ["maxlength"], dC = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function hC(t, o, r, a, l, c) {
  const d = Vp("InputWrapper"), p = Vp("InputSubText");
  return Tp(), gp("div", Up(t.inherittedAttrs, { class: "feather-textarea-container" }), [
    Rp(d, {
      for: t.inputId,
      raised: t.isRaised,
      focused: t.focused,
      "show-clear": t.showClear,
      onWrapperClick: t.handleWrapperClick,
      onClear: t.handleClear,
      class: nC(["feather-textarea-content", t.contentCls])
    }, {
      default: Np(() => [
        rC("textarea", Up(t.attrs, {
          class: ["feather-textarea", { error: t.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: t.maxlength > 0 ? t.maxlength : void 0,
          ref: "input"
        }), null, 16, uC)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Rp(p, { id: t.descriptionId }, {
      right: Np(() => [
        t.maxlength ? (Tp(), gp("div", dC, oC(t.charCount), 1)) : iC("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
const fC = /* @__PURE__ */ cC(lC, [["render", hC], ["__scopeId", "data-v-eee43a95"]]), pC = window.Vue.defineComponent, yp = window.Vue.toDisplayString, Wo = window.Vue.createElementVNode, Pn = window.Vue.unref, Br = window.Vue.openBlock, kp = window.Vue.createBlock, Co = window.Vue.createCommentVNode, Mp = window.Vue.createVNode, va = window.Vue.createElementBlock, mC = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const wC = { class: "row" }, vC = { class: "label" }, VC = { class: "action-icons" }, TC = { class: "icon-btn" }, gC = {
  key: 0,
  class: "icon-btn"
}, UC = {
  key: 1,
  class: "icon-btn"
}, RC = {
  key: 0,
  class: "text"
}, NC = window.Vue.watch, Zp = window.Vue.ref, yC = /* @__PURE__ */ pC({
  __name: "MemoBox",
  props: {
    id: null,
    label: null,
    memo: null,
    type: null,
    situationId: null,
    boxType: null
  },
  setup(t) {
    var w;
    const o = t, r = fw(), a = Zp(!1), l = Zp((w = o.memo) == null ? void 0 : w.body);
    NC(o, () => {
      var V;
      l.value = (V = o.memo) == null ? void 0 : V.body, a.value = !1;
    });
    const c = () => {
      a.value = !a.value;
    }, d = async () => {
      a.value = !1, await ry(o.id, o.type) ? l.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, p = async () => {
      a.value = !1, l.value && l.value !== "" && (await ny(o.id, o.type, l.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (V, g) => (Br(), va("div", {
      class: mC([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Wo("div", wC, [
        Wo("div", vC, yp(t.label), 1),
        Wo("div", VC, [
          Wo("div", TC, [
            a.value ? Co("", !0) : (Br(), kp(Pn(K), {
              key: 0,
              icon: Pn(lW),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: c
            }, null, 8, ["icon"]))
          ]),
          a.value ? (Br(), va("div", gC, [
            Mp(Pn(K), {
              icon: Pn(ai),
              "aria-hidden": "true",
              class: "icon save",
              onClick: p
            }, null, 8, ["icon"])
          ])) : Co("", !0),
          l.value && l.value != "" || a.value ? (Br(), va("div", UC, [
            Mp(Pn(K), {
              icon: Pn(li),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : Co("", !0)
        ])
      ]),
      Wo("div", null, [
        !a.value && l.value != null ? (Br(), va("div", RC, yp(l.value), 1)) : Co("", !0),
        a.value ? (Br(), kp(Pn(fC), {
          key: 1,
          class: "textarea",
          modelValue: l.value,
          "onUpdate:modelValue": g[0] || (g[0] = (R) => l.value = R),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Co("", !0)
      ])
    ], 2));
  }
});
const Ga = /* @__PURE__ */ ye(yC, [["__scopeId", "data-v-3f44e250"]]), kC = window.Vue.defineComponent, xo = window.Vue.unref, Ir = window.Vue.createVNode, Va = window.Vue.toDisplayString, fn = window.Vue.createElementVNode, bp = window.Vue.openBlock, Jp = window.Vue.createElementBlock, Ep = window.Vue.createCommentVNode, Sp = window.Vue.createTextVNode, MC = window.Vue.pushScopeId, ZC = window.Vue.popScopeId, Nw = (t) => (MC("data-v-cd37a1f9"), t = t(), ZC(), t), bC = {
  key: 0,
  class: "card"
}, JC = { class: "row" }, EC = { class: "title" }, SC = {
  key: 0,
  class: "ack"
}, FC = ["innerHTML"], AC = /* @__PURE__ */ Nw(() => /* @__PURE__ */ fn("strong", null, "First Event", -1)), WC = /* @__PURE__ */ Nw(() => /* @__PURE__ */ fn("strong", null, "Last Event", -1)), CC = { class: "section memo-boxes" }, Fp = window.Vue.ref, xC = window.Vue.watch, BC = /* @__PURE__ */ kC({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: o }) {
    const r = t, a = Fp(!1), l = Fp(r.alarm);
    xC(r, () => {
      l.value = r.alarm, a.value = r.selectAll, o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, d = async (p) => {
      const w = await Em(p);
      w && (l.value = w);
    };
    return (p, w) => {
      var V, g, R, y, F;
      return l.value ? (bp(), Jp("div", bC, [
        fn("div", null, [
          fn("div", JC, [
            Ir(xo(iu), {
              modelValue: a.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (E) => a.value = E),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            fn("div", EC, Va(l.value.nodeLabel) + " - " + Va(l.value.id), 1),
            Ir(ww, {
              severity: (V = l.value) == null ? void 0 : V.severity
            }, null, 8, ["severity"]),
            l.value.ackTime ? (bp(), Jp("div", SC, [
              Ir(xo(K), {
                icon: xo(ai),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : Ep("", !0)
          ]),
          fn("div", {
            class: "description",
            innerHTML: l.value.description
          }, null, 8, FC),
          fn("div", null, [
            AC,
            Sp(" - " + Va(xo(Xt)(l.value.firstEventTime)), 1)
          ]),
          fn("div", null, [
            WC,
            Sp(" - " + Va(xo(Xt)(l.value.lastEventTime)), 1)
          ]),
          fn("div", CC, [
            Ir(Ga, {
              id: (g = l.value) == null ? void 0 : g.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = l.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Ir(Ga, {
              id: (y = l.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (F = l.value) == null ? void 0 : F.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Ir(Vw, {
          alarm: l.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : Ep("", !0);
    };
  }
});
const IC = /* @__PURE__ */ ye(BC, [["__scopeId", "data-v-cd37a1f9"]]), DC = window.Vue.defineComponent, Hr = window.Vue.createElementVNode, jn = window.Vue.createVNode, Xn = window.Vue.unref, Ap = window.Vue.withCtx, OC = window.Vue.renderList, QC = window.Vue.Fragment, Ta = window.Vue.openBlock, ga = window.Vue.createElementBlock, _C = window.Vue.createCommentVNode, zC = window.Vue.pushScopeId, GC = window.Vue.popScopeId, su = (t) => (zC("data-v-438eed08"), t = t(), GC(), t), YC = { class: "container" }, HC = { class: "row" }, PC = /* @__PURE__ */ su(() => /* @__PURE__ */ Hr("div", { class: "title" }, "Alarms", -1)), jC = { class: "row actions" }, XC = /* @__PURE__ */ su(() => /* @__PURE__ */ Hr("span", null, "Clear", -1)), LC = /* @__PURE__ */ su(() => /* @__PURE__ */ Hr("span", null, "Acknowledge", -1)), $C = { class: "section" }, qC = {
  key: 0,
  class: "alarm-list"
}, Wp = window.Vue.ref, KC = window.Vue.watch, ex = window.Vue.reactive, tx = /* @__PURE__ */ DC({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const o = t, r = qr(), a = Wp(!1), l = Wp(["all"]), c = ex({
      selectedAlarms: [],
      alarms: o.alarms
    });
    KC(o, () => {
      l.value = ["all"], c.alarms = o.alarms, c.selectedAlarms = [], a.value = !1;
    });
    const d = (V) => {
      c.selectedAlarms.includes(V) ? Ze.exports.remove(c.selectedAlarms, (g) => g == V) : c.selectedAlarms.push(V);
    }, p = async (V) => {
      c.selectedAlarms.length && (await $N(c.selectedAlarms, V), r.getSituation(o.situationId), c.selectedAlarms = [], a.value = !1);
    }, w = (V) => {
      V.includes("all") ? c.alarms = o.alarms : c.alarms = o.alarms.filter((g) => V.includes(g.severity));
    };
    return (V, g) => (Ta(), ga("div", YC, [
      Hr("div", HC, [
        PC,
        jn(nw, {
          alarms: o.alarms,
          onSelectedSeverities: w
        }, null, 8, ["alarms"])
      ]),
      Hr("div", jC, [
        jn(Xn(iu), {
          modelValue: a.value,
          "onUpdate:modelValue": g[0] || (g[0] = (R) => a.value = R),
          label: "selected"
        }, null, 8, ["modelValue"]),
        jn(Xn(wt), {
          class: "acction-btn",
          onClick: g[1] || (g[1] = () => p("clear"))
        }, {
          default: Ap(() => [
            jn(Xn(K), {
              icon: Xn(vw),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            XC
          ]),
          _: 1
        }),
        jn(Xn(wt), {
          class: "acction-btn",
          onClick: g[2] || (g[2] = () => p("ack"))
        }, {
          default: Ap(() => [
            jn(Xn(K), {
              icon: Xn(ai),
              "aria-hidden": "true",
              class: "icon ack"
            }, null, 8, ["icon"]),
            LC
          ]),
          _: 1
        })
      ]),
      Hr("div", $C, [
        c.alarms.length > 0 ? (Ta(), ga("div", qC, [
          (Ta(!0), ga(QC, null, OC(c.alarms, (R) => (Ta(), ga("div", {
            key: R.id
          }, [
            jn(IC, {
              alarm: R,
              selectAll: a.value,
              "situation-id": o.situationId,
              onAlarmSelected: d
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : _C("", !0)
      ])
    ]));
  }
});
const nx = /* @__PURE__ */ ye(tx, [["__scopeId", "data-v-438eed08"]]), rx = "/whoami", ox = async () => {
  try {
    const t = await Wn.get(rx);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, ix = window.Pinia.defineStore, fi = ix("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await ox();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await sy();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const o = await Fm(t);
        this.allowSave = o;
      }
    }
  }
}), ax = window.Vue.defineComponent, It = window.Vue.createVNode, ht = window.Vue.unref, uc = window.Vue.normalizeClass, Ua = window.Vue.toDisplayString, Ln = window.Vue.openBlock, $n = window.Vue.createElementBlock, Ra = window.Vue.createCommentVNode, sx = window.Vue.withCtx, Dt = window.Vue.createElementVNode, lx = window.Vue.createTextVNode, cx = window.Vue.Fragment, ux = window.Vue.pushScopeId, dx = window.Vue.popScopeId, hx = (t) => (ux("data-v-664473b6"), t = t(), dx(), t), fx = { class: "section" }, px = { class: "action-section" }, mx = {
  key: 0,
  class: "btn-row"
}, wx = { key: 0 }, vx = { key: 1 }, Vx = {
  key: 0,
  class: "situation-detail"
}, Tx = { class: "situation-info" }, gx = { class: "id" }, Ux = { key: 0 }, Rx = ["innerHTML"], Nx = /* @__PURE__ */ hx(() => /* @__PURE__ */ Dt("p", null, null, -1)), yx = { class: "boxes" }, kx = { class: "parameters" }, Mx = { class: "section memo-boxes" }, Zx = { key: 0 }, Cp = window.Vue.ref, bx = window.Vue.watch, Jx = /* @__PURE__ */ ax({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(t) {
    const o = t, r = qr(), a = pt.REJECTED, l = fi(), c = Cp(o.situationInfo.status), d = Cp(o.situationInfo);
    bx(o, () => {
      c.value = o.situationInfo.status || "", d.value = o.situationInfo;
    });
    const p = (w) => {
      var V;
      Am((V = o.situationInfo) == null ? void 0 : V.id, w.toLowerCase()), c.value = w, r.getSituation(o.situationInfo.id);
    };
    return (w, V) => {
      var g, R, y, F, E, I, C, A, Q, O, H, k;
      return Ln(), $n(cx, null, [
        Dt("div", fx, [
          Dt("div", px, [
            It(Vw, {
              alarm: d.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            ht(l).allowSave ? (Ln(), $n("div", mx, [
              It(ht(wt), {
                class: uc(["btn", { rejected: c.value == ht(a) }]),
                onClick: V[0] || (V[0] = () => p(ht(a)))
              }, {
                default: sx(() => [
                  It(ht(K), {
                    icon: ht(Wm),
                    "aria-hidden": "true",
                    class: uc(["icon reject", { rejected: c.value == ht(a) }])
                  }, null, 8, ["icon", "class"]),
                  c.value == ht(a) ? (Ln(), $n("span", wx, Ua(ht(a)), 1)) : (Ln(), $n("span", vx, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : Ra("", !0)
          ]),
          d.value ? (Ln(), $n("div", Vx, [
            Dt("div", {
              class: uc(["severity-line", [`${(R = (g = d.value) == null ? void 0 : g.severity) == null ? void 0 : R.toLowerCase()}-bg dark`]])
            }, null, 2),
            Dt("div", Tx, [
              Dt("div", gx, [
                Dt("div", null, [
                  lx(" Situation - " + Ua((y = d.value) == null ? void 0 : y.id) + " - affecting " + Ua(ht(Ze.exports.size)(ht(Ze.exports.groupBy)((F = d.value) == null ? void 0 : F.alarms, "nodeId"))) + " node ", 1),
                  d.value.alarms ? (Ln(), $n("span", Ux, "having " + Ua(d.value.alarms.length) + " alarms ", 1)) : Ra("", !0)
                ]),
                It(ww, {
                  severity: (E = d.value) == null ? void 0 : E.severity
                }, null, 8, ["severity"])
              ]),
              Dt("span", {
                innerHTML: d.value.description
              }, null, 8, Rx),
              Nx,
              Dt("div", yx, [
                It(ec, {
                  label: "First Event",
                  info: ht(Xt)(d.value.firstEventTime)
                }, null, 8, ["info"]),
                It(ec, {
                  label: "Last Event",
                  info: ht(Xt)(d.value.lastEventTime)
                }, null, 8, ["info"]),
                It(ec, {
                  label: "Reduction Key",
                  info: d.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Dt("div", kx, [
              It(eA, {
                alarms: (I = d.value) == null ? void 0 : I.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Ra("", !0),
          Dt("div", Mx, [
            It(Ga, {
              id: (C = d.value) == null ? void 0 : C.id,
              situationId: (A = d.value) == null ? void 0 : A.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (Q = d.value) == null ? void 0 : Q.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            It(Ga, {
              id: (O = d.value) == null ? void 0 : O.id,
              situationId: (H = d.value) == null ? void 0 : H.id,
              label: "Journal Memo",
              type: "journal",
              memo: (k = d.value) == null ? void 0 : k.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        d.value.alarms && d.value.alarms.length ? (Ln(), $n("div", Zx, [
          It(nx, {
            alarms: d.value.alarms,
            "situation-id": d.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Ra("", !0)
      ], 64);
    };
  }
});
const Ex = /* @__PURE__ */ ye(Jx, [["__scopeId", "data-v-664473b6"]]);
var Sx = Object.defineProperty, Fx = Object.defineProperties, Ax = Object.getOwnPropertyDescriptors, xp = Object.getOwnPropertySymbols, Wx = Object.prototype.hasOwnProperty, Cx = Object.prototype.propertyIsEnumerable, Bp = (t, o, r) => o in t ? Sx(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Fc = (t, o) => {
  for (var r in o || (o = {}))
    Wx.call(o, r) && Bp(t, r, o[r]);
  if (xp)
    for (var r of xp(o))
      Cx.call(o, r) && Bp(t, r, o[r]);
  return t;
}, xx = (t, o) => Fx(t, Ax(o));
const yw = window.Vue.defineComponent, nr = window.Vue.resolveComponent, Ea = window.Vue.openBlock, Ip = window.Vue.createBlock, Sa = window.Vue.mergeProps, rr = window.Vue.withCtx, kw = window.Vue.createElementBlock, Bx = window.Vue.Fragment, Ix = window.Vue.renderList, Dx = window.Vue.createTextVNode, Ox = window.Vue.toDisplayString, Qx = window.Vue.computed, Dp = window.Vue.toRef, Bo = window.Vue.createVNode, Op = window.Vue.toHandlers, _x = window.Vue.renderSlot, zx = window.Vue.normalizeClass, Gx = window.Vue.createElementVNode;
var Mw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const Yx = yw({
  inheritAttrs: !0,
  emits: ["select"],
  props: {
    label: {
      type: String,
      required: !0
    },
    options: {
      type: Array,
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    activeIndex: {
      type: Number,
      required: !0
    }
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
        "aria-activedescendant": this.activeId
      };
    }
  },
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t];
        ti(o, this.$refs.list.$el);
      });
    }
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
    }
  },
  components: {
    FeatherList: Lc,
    FeatherListItem: di
  }
});
function Hx(t, o, r, a, l, c) {
  const d = nr("FeatherListItem"), p = nr("FeatherList");
  return Ea(), Ip(p, Sa(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: rr(() => [
      (Ea(!0), kw(Bx, null, Ix(t.options, (w, V) => (Ea(), Ip(d, {
        key: w[t.textProp],
        "as-li": "",
        id: t.getId(V),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": t.isSelected(V),
        selected: t.isSelected(V),
        onClick: (g) => t.select(w)
      }, {
        default: rr(() => [
          Dx(Ox(w[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var Px = /* @__PURE__ */ Mw(Yx, [["render", Hx], ["__scopeId", "data-v-eae820da"]]);
const jx = xx(Fc(Fc({}, Xm), es), {
  modelValue: {
    type: Object,
    required: !1
  },
  textProp: {
    type: String,
    default: "_text"
  },
  options: {
    type: Array,
    default: () => []
  },
  schema: {
    type: Object,
    required: !1
  }
}), Xx = {
  "update:modelValue": (t) => !0
}, Lx = yw({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Xx,
  props: jx,
  setup(t, o) {
    ts(t), Lm(t);
    const r = Qx(() => le("feather-select-input")), { validate: a } = qa(r, Dp(t, "modelValue"), t.label, t.schema, Dp(t, "error"));
    return Fc({
      inputId: r,
      validate: a
    }, Ka(o.attrs));
  },
  data() {
    return {
      hasFocus: !1,
      showMenu: !1,
      charsSoFar: "",
      internalValue: this.modelValue,
      delayTimeout: -1
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
        "aria-describedby": (this.$attrs["aria-describedby"] || "").split(" ").concat([this.subTextId]).filter(Boolean).join(" ")
      };
    },
    inputListeners() {
      return {
        focus: this.handleInputFocus,
        blur: this.handleInputBlur,
        keydown: this.handleKeyDown
      };
    },
    raised() {
      return !!this.internalValue || this.hasFocus;
    },
    valueText() {
      return this.internalValue && this.internalValue[this.textProp] ? this.internalValue[this.textProp] : "";
    },
    activeIndex() {
      if (this.internalValue && this.internalValue[this.textProp]) {
        const t = this.internalValue, o = this.options.filter((r) => r[this.textProp] === t[this.textProp]);
        if (o && o.length)
          return this.options.indexOf(o[0]);
      }
      return -1;
    },
    icon: () => jc
  },
  watch: {
    showMenu(t) {
      t ? (this.internalValue || this.select(this.options[0]), this.$nextTick(() => {
        this.$refs.input.focus();
      })) : this.emitSelection();
    },
    modelValue(t) {
      this.internalValue = t;
    }
  },
  methods: {
    closeMenu() {
      this.showMenu = !1, this.$nextTick(() => {
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
      this.hasFocus && !this.showMenu && (this.hasFocus = !1, this.validate());
    },
    handleTriggerClick() {
      this.disabled || (this.showMenu = !0, this.hasFocus = !0);
    },
    handleOutsideClick() {
      this.showMenu = !1, this.hasFocus = !1;
    },
    handleSelect(t) {
      this.select(t), this.showMenu = !1, this.$refs.input.focus();
    },
    select(t) {
      this.internalValue = t;
    },
    emitSelection() {
      this.$emit("update:modelValue", this.internalValue);
    },
    handleKeyDown(t) {
      if (t.keyCode === q.ENTER)
        t.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (t.keyCode === q.ESCAPE)
        this.closeMenu(), t.stopPropagation();
      else if (t.keyCode === q.DOWN)
        t.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (t.keyCode === q.UP)
        t.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (t.keyCode === q.HOME)
        t.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (t.keyCode === q.END)
        t.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(t.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      $o(this.delayTimeout), this.delayTimeout = Lo(() => {
        const t = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: jm,
    InputSubText: $a,
    FeatherMenu: iw,
    List: Px,
    FeatherIcon: K
  }
});
function $x(t, o, r, a, l, c) {
  const d = nr("FeatherIcon"), p = nr("InputWrapper"), w = nr("List"), V = nr("FeatherMenu"), g = nr("InputSubText");
  return Ea(), kw("div", Sa(t.inherittedAttrs, { class: "feather-select-container" }), [
    Bo(V, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: rr((R) => [
        Bo(p, Sa({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, R.attrs, Op(R.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: rr(() => [
            _x(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: rr(() => [
            Bo(d, {
              class: zx(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: rr(() => [
            Gx("input", Sa(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Op(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: rr(() => [
        Bo(w, {
          ref: "list",
          "data-ref-id": "feather-select-list",
          label: t.label,
          options: t.options,
          "text-prop": t.textProp,
          "active-index": t.activeIndex,
          onSelect: t.handleSelect,
          onKeydown: t.handleKeyDown
        }, null, 8, ["label", "options", "text-prop", "active-index", "onSelect", "onKeydown"])
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick"]),
    Bo(g, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var qx = /* @__PURE__ */ Mw(Lx, [["render", $x], ["__scopeId", "data-v-ecb32d90"]]);
const Kx = window.Vue.openBlock, eB = window.Vue.createElementBlock, Zw = window.Vue.createElementVNode;
var tB = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const nB = {}, rB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oB = /* @__PURE__ */ Zw("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), iB = /* @__PURE__ */ Zw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), aB = [
  oB,
  iB
];
function sB(t, o) {
  return Kx(), eB("svg", rB, aB);
}
var lB = /* @__PURE__ */ tB(nB, [["render", sB]]);
const Fa = window.Vue.openBlock, Ac = window.Vue.createElementBlock, bw = window.Vue.createElementVNode, cB = window.Vue.defineComponent, qn = window.Vue.ref, uB = window.Vue.provide, Qp = window.Vue.computed, dB = window.Vue.onUnmounted, _p = window.Vue.toRef, hB = window.Vue.resolveComponent, fB = window.Vue.Fragment, pB = window.Vue.createBlock, mB = window.Vue.Teleport, zp = window.Vue.createVNode, wB = window.Vue.Transition, vB = window.Vue.withCtx, VB = window.Vue.normalizeClass, TB = window.Vue.normalizeStyle, gB = window.Vue.toDisplayString, UB = window.Vue.createCommentVNode, RB = window.Vue.renderSlot, dc = window.Vue.nextTick;
var Jw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const NB = {}, yB = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, kB = /* @__PURE__ */ bw("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), MB = [
  kB
];
function ZB(t, o) {
  return Fa(), Ac("svg", yB, MB);
}
var bB = /* @__PURE__ */ Jw(NB, [["render", ZB]]), Ie = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(Ie || {}), pn = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(pn || {});
const JB = (t, o, r, a = 9) => {
  const l = window.innerHeight - t.bottom, c = window.innerWidth - t.right, d = [];
  t.top >= o.height + a && d.push(Ie.top), l >= o.height + a && d.push(Ie.bottom);
  const p = [];
  c >= o.width + a && p.push(Ie.right), t.left >= o.width + a && p.push(Ie.left);
  let w = [...p, ...d];
  return (r === Ie.top || r === Ie.bottom) && (w = [...d, ...p]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, EB = (t, o, r, a, l = 28) => {
  if (t === Ie.left || t === Ie.right)
    return pn.center;
  const c = o.left + o.width / 2, d = window.innerWidth - o.right, p = [], w = c, V = d + o.width / 2, g = r.width - l, R = r.width / 2;
  return w >= R && V >= R && p.push(pn.center), V >= g && p.push(pn.left), w >= g && p.push(pn.right), p.indexOf(a) > -1 ? a : p.length ? p[0] : a;
}, SB = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Ie.top
  },
  pointerAlignment: {
    type: String,
    default: () => pn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, FB = cB({
  props: SB,
  setup(t) {
    const o = qn(!1), r = qn(!1), a = le("feather-tooltip-trigger"), l = le("feather-tooltip"), c = "data-feather-tooltip";
    uB("feather-has-tooltip", !0);
    let d = 0;
    const p = () => {
      $o(d), o.value || (d = Lo(I, t.enterDelay));
    }, w = () => {
      $o(d), d = Lo(C, t.exitDelay);
    }, V = (ve) => {
      ve.keyCode === q.ESCAPE && (ve.preventDefault(), C(!0));
    }, g = Qp(() => ({
      [c]: a,
      "aria-describedby": l
    })), R = {
      mouseenter: p,
      mouseleave: w,
      focus: p,
      blur: w,
      keydown: V
    }, y = qn(document), F = ow(y, () => C(!0));
    dB(() => C(!0));
    const E = () => document.getElementById(l), I = () => {
      r.value = !1, o.value = !0, dc(() => {
        const ve = E();
        he(ve), o.value = !1, dc(() => {
          r.value = !0, o.value = !0, F.value = !0;
        });
      });
    }, C = (ve = !1) => {
      W.value = "", k.value = "", x.value = "", z.value = "", o.value = !1, ve && (r.value = !1), F.value = !1;
    }, A = _p(t, "placement"), Q = _p(t, "pointerAlignment"), O = 8, H = 24, k = qn(""), W = qn(""), x = qn(""), z = qn(""), de = Qp(() => z.value ? "p-" + z.value : !1), he = (ve) => {
      const Ve = document.querySelector(`[${c}=${a}]`);
      if (!Ve) {
        console.log("trigger not found");
        return;
      }
      dc(() => {
        const ge = Ve.getBoundingClientRect(), ke = ve.getBoundingClientRect(), ce = JB(ge, ke, A.value, O), We = EB(ce, ge, ke, Q.value, H);
        x.value = We.toString(), z.value = ce.toString();
        let Ce = 0, He = 0;
        if ((ce === Ie.left || ce === Ie.right) && (Ce = ge.top + ge.height / 2 - ke.height / 2, ce === Ie.left && (He = ge.left - ke.width - O), ce === Ie.right && (He = ge.right)), ce === Ie.top || ce === Ie.bottom) {
          Ce = ge.top - ke.height - O, ce === Ie.bottom && (Ce = ge.bottom);
          const no = ge.left + ge.width / 2;
          switch (We) {
            case pn.center:
              He = no - ke.width / 2;
              break;
            case pn.left:
              He = no - H;
              break;
            case pn.right:
              He = no - ke.width + H;
              break;
          }
        }
        k.value = Ce.toString() + "px", W.value = He.toString() + "px";
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
      tooltipID: l
    };
  },
  components: {
    Pointer: bB
  }
}), AB = ["id"];
function WB(t, o, r, a, l, c) {
  const d = hB("Pointer");
  return Fa(), Ac(fB, null, [
    (Fa(), pB(mB, { to: "body" }, [
      zp(wB, { css: t.animate }, {
        default: vB(() => [
          t.show ? (Fa(), Ac("div", {
            key: 0,
            class: VB(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: TB({ left: t.left, top: t.top })
          }, [
            bw("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, gB(t.title), 9, AB),
            zp(d, { class: "tooltip-pointer" })
          ], 6)) : UB("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    RB(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var Gp = /* @__PURE__ */ Jw(FB, [["render", WB], ["__scopeId", "data-v-3da6b22e"]]);
const CB = window.Vue.defineComponent, hc = window.Vue.normalizeStyle, fc = window.Vue.createElementVNode, Io = window.Vue.unref, Yp = window.Vue.toHandlers, Hp = window.Vue.mergeProps, Pp = window.Vue.withCtx, jp = window.Vue.createVNode, xB = window.Vue.renderList, BB = window.Vue.Fragment, Do = window.Vue.openBlock, Oo = window.Vue.createElementBlock, Xp = window.Vue.normalizeClass, Lp = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const IB = { class: "row" }, DB = /* @__PURE__ */ CB({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(t) {
    const o = t, r = new Date().getTime(), a = (c, d) => c ? (Number(d) - Number(c)) * o.proportion : 0, l = (c) => c ? (Number(c) - Number(o.minStart)) * o.proportion : 0;
    return (c, d) => (Do(), Oo("div", IB, [
      fc("div", {
        class: "line-gray",
        style: hc({
          width: l(o.events[0].createTime) + "px"
        })
      }, null, 4),
      jp(Io(Gp), {
        title: Io(Xt)(t.alarm.firstEventTime)
      }, {
        default: Pp(({ attrs: p, on: w }) => [
          fc("div", Hp({ class: "circle" }, p, Yp(w), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Do(!0), Oo(BB, null, xB(o.events, (p, w) => (Do(), Oo("div", {
        class: "event-trim",
        key: p.id
      }, [
        o.events[w + 1] ? (Do(), Oo("div", {
          key: 0,
          class: Xp(["line", [`${p.severity.toLowerCase()}-bg dark`]]),
          style: hc({
            width: a(p.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : Lp("", !0),
        jp(Io(Gp), {
          title: Io(Xt)(t.alarm.firstEventTime)
        }, {
          default: Pp(({ attrs: V, on: g }) => [
            o.events[w + 1] ? (Do(), Oo("div", Hp({ key: 0 }, V, Yp(g), {
              class: ["event", [`${p.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Lp("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      fc("div", {
        class: Xp(["line", [`${t.events[t.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: hc({
          width: a(t.events[t.events.length - 1].createTime, Io(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const OB = /* @__PURE__ */ ye(DB, [["__scopeId", "data-v-3341d12d"]]), QB = window.Vue.openBlock, _B = window.Vue.createElementBlock, Ew = window.Vue.createElementVNode;
var zB = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const GB = {}, YB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, HB = /* @__PURE__ */ Ew("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), PB = /* @__PURE__ */ Ew("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), jB = [
  HB,
  PB
];
function XB(t, o) {
  return QB(), _B("svg", YB, jB);
}
var LB = /* @__PURE__ */ zB(GB, [["render", XB]]);
const $B = window.Vue.defineComponent, Wc = window.Vue.createElementVNode, qB = window.Vue.renderList, $p = window.Vue.Fragment, pc = window.Vue.openBlock, mc = window.Vue.createElementBlock, KB = window.Vue.normalizeClass, e3 = window.Vue.unref, qp = window.Vue.toDisplayString, t3 = window.Vue.pushScopeId, n3 = window.Vue.popScopeId, r3 = (t) => (t3("data-v-2e087f7b"), t = t(), n3(), t), o3 = /* @__PURE__ */ r3(() => /* @__PURE__ */ Wc("strong", null, "Events:", -1)), i3 = /* @__PURE__ */ $B({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(t) {
    const o = t;
    return (r, a) => (pc(), mc($p, null, [
      o3,
      (pc(!0), mc($p, null, qB(o.events, (l) => (pc(), mc("div", {
        class: "event-description",
        key: l.id
      }, [
        Wc("div", {
          class: KB(["mark", [`${l.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Wc("div", null, qp(e3(Xt)(l.createTime)) + " - " + qp(l.source), 1)
      ]))), 128))
    ], 64));
  }
});
const a3 = /* @__PURE__ */ ye(i3, [["__scopeId", "data-v-2e087f7b"]]), s3 = window.Vue.defineComponent, l3 = window.Vue.normalizeClass, ft = window.Vue.createElementVNode, Dr = window.Vue.toDisplayString, tt = window.Vue.unref, Or = window.Vue.createVNode, Sw = window.Vue.createTextVNode, c3 = window.Vue.renderList, Kp = window.Vue.Fragment, cn = window.Vue.openBlock, Kn = window.Vue.createElementBlock, em = window.Vue.createBlock, Na = window.Vue.createCommentVNode, u3 = window.Vue.normalizeStyle, d3 = window.Vue.pushScopeId, h3 = window.Vue.popScopeId, f3 = (t) => (d3("data-v-01717d0d"), t = t(), h3(), t), p3 = { class: "section detail" }, m3 = { class: "id" }, w3 = {
  key: 0,
  class: "section"
}, v3 = /* @__PURE__ */ f3(() => /* @__PURE__ */ ft("div", { class: "id" }, "Alarms", -1)), V3 = { class: "action-btns" }, T3 = { class: "zoom" }, g3 = /* @__PURE__ */ Sw(" Zoom "), U3 = { class: "times" }, R3 = {
  key: 0,
  class: "timeline-container"
}, N3 = { class: "alarm-id" }, y3 = {
  key: 0,
  class: "panel"
}, Zn = window.Vue.ref, k3 = window.Vue.watch, M3 = /* @__PURE__ */ s3({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(t) {
    var H, k;
    const o = t, r = qr(), a = Zn(0), l = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], c = Zn(l[0]), d = Zn(o.width), p = Zn(o.width), w = Zn(new Date().getTime()), V = () => {
      var W, x;
      if (!o.situation.events) {
        const z = (x = (W = o.situation) == null ? void 0 : W.alarms) == null ? void 0 : x.map((de) => de.id);
        r.getEvents(o.situation.id, z);
      }
    };
    V();
    const g = () => (w.value = new Date().getTime(), d.value / (Number(w.value) - Number(y.value))), R = Zn(o.situation.alarms), y = Zn(
      ((k = Ze.exports.minBy((H = o.situation) == null ? void 0 : H.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), F = Zn(g());
    k3(o, () => {
      var W, x;
      y.value = ((x = Ze.exports.minBy((W = o.situation) == null ? void 0 : W.alarms, "firstEventTime")) == null ? void 0 : x.firstEventTime) || new Date().getTime(), V(), d.value = p.value, F.value = g(), R.value = o.situation.alarms, c.value = l[0];
    });
    const E = (W) => {
      if ((W == null ? void 0 : W.id) === 1 && (R.value = o.situation.alarms), (W == null ? void 0 : W.id) === 2) {
        const x = Ze.exports.groupBy(R.value, "severity"), z = [
          ...x.CRITICAL || [],
          ...x.MAJOR || [],
          ...x.MINOR || [],
          ...x.WARNING || [],
          ...x.NORMAL || [],
          ...x.CLEARED || [],
          ...x.INDETERMINATE || []
        ];
        R.value = z.filter((de) => de);
      }
      if ((W == null ? void 0 : W.id) === 3) {
        const x = Ze.exports.reverse(
          Ze.exports.sortBy(
            o.situation.alarms,
            (z) => Number(z.lastEventTime) - Number(z.firstEventTime)
          )
        );
        R.value = x;
      }
    }, I = () => {
      d.value += 100, F.value = g();
    }, C = () => {
      d.value -= 100, F.value = g();
    }, A = () => {
      d.value = p.value, F.value = g();
    }, Q = (W) => {
      a.value = W;
    }, O = () => {
      a.value = 0;
    };
    return (W, x) => {
      var z, de;
      return cn(), Kn(Kp, null, [
        ft("div", p3, [
          ft("div", {
            class: l3(["severity-line", [`${(de = (z = o.situation) == null ? void 0 : z.severity) == null ? void 0 : de.toLowerCase()}-bg dark`]])
          }, null, 2),
          ft("div", null, [
            ft("div", m3, "Situation " + Dr(o.situation.id), 1),
            ft("div", null, " Duration: " + Dr(tt(Kk)(w.value, new Date(y.value))), 1)
          ])
        ]),
        R.value && R.value.length > 0 ? (cn(), Kn("div", w3, [
          v3,
          ft("div", V3, [
            Or(tt(qx), {
              class: "select",
              label: "Sort by:",
              options: l,
              modelValue: c.value,
              "onUpdate:modelValue": [
                x[0] || (x[0] = (he) => c.value = he),
                E
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            ft("div", T3, [
              g3,
              ft("div", null, [
                Or(tt(K), {
                  icon: tt(lB),
                  class: "zoom-icon",
                  onClick: I
                }, null, 8, ["icon"]),
                Or(tt(K), {
                  icon: tt(rw),
                  class: "zoom-icon",
                  onClick: A
                }, null, 8, ["icon"]),
                Or(tt(K), {
                  icon: tt(LB),
                  class: "zoom-icon",
                  onClick: C
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          p.value ? (cn(), Kn("div", {
            key: 0,
            class: "alarms",
            style: u3({
              width: p.value + 50 + "px"
            })
          }, [
            ft("div", U3, [
              ft("div", null, Dr(tt(Xt)(y.value)), 1),
              ft("div", null, Dr(tt(Xt)(w.value)), 1)
            ]),
            t.situation.events ? (cn(), Kn("div", R3, [
              (cn(!0), Kn(Kp, null, c3(R.value, (he) => (cn(), Kn("div", {
                class: "timeline",
                key: he.id
              }, [
                ft("div", N3, [
                  Sw(Dr(he.nodeLabel) + " - " + Dr(he.id) + " ", 1),
                  a.value === he.id ? (cn(), em(tt(K), {
                    key: 0,
                    icon: tt(jc),
                    class: "zoom-icon expand",
                    onClick: O
                  }, null, 8, ["icon"])) : (cn(), em(tt(K), {
                    key: 1,
                    icon: tt(zm),
                    class: "zoom-icon expand",
                    onClick: () => Q(he.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Or(OB, {
                  alarm: he,
                  proportion: F.value,
                  "min-start": y.value,
                  events: o.situation.events[he.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                a.value === he.id ? (cn(), Kn("div", y3, [
                  Or(a3, {
                    events: o.situation.events[he.id]
                  }, null, 8, ["events"])
                ])) : Na("", !0)
              ]))), 128))
            ])) : Na("", !0)
          ], 4)) : Na("", !0)
        ])) : Na("", !0)
      ], 64);
    };
  }
});
const Z3 = /* @__PURE__ */ ye(M3, [["__scopeId", "data-v-01717d0d"]]), b3 = window.Vue.openBlock, J3 = window.Vue.createElementBlock, E3 = window.Vue.createElementVNode;
var S3 = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const F3 = {}, A3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, W3 = /* @__PURE__ */ E3("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), C3 = [
  W3
];
function x3(t, o) {
  return b3(), J3("svg", A3, C3);
}
var wc = /* @__PURE__ */ S3(F3, [["render", x3]]);
const B3 = window.Vue.defineComponent, ze = window.Vue.unref, Mt = window.Vue.createVNode, oi = window.Vue.createElementVNode, un = window.Vue.withCtx, Fw = window.Vue.createTextVNode, vc = window.Vue.openBlock, I3 = window.Vue.createBlock, tm = window.Vue.createCommentVNode, nm = window.Vue.createElementBlock, D3 = window.Vue.pushScopeId, O3 = window.Vue.popScopeId, lu = (t) => (D3("data-v-6a3cc938"), t = t(), O3(), t), Q3 = { id: "cont" }, _3 = { class: "btns-navigation" }, z3 = /* @__PURE__ */ lu(() => /* @__PURE__ */ oi("span", null, "Situation List", -1)), G3 = /* @__PURE__ */ lu(() => /* @__PURE__ */ oi("span", null, "Show Previous Situation ", -1)), Y3 = /* @__PURE__ */ lu(() => /* @__PURE__ */ oi("span", null, "Show Next Situation", -1)), H3 = {
  key: 0,
  class: "detail"
}, P3 = /* @__PURE__ */ Fw("Details"), j3 = /* @__PURE__ */ Fw("Metrics"), ya = window.Vue.ref, rm = window.Vue.watch, X3 = window.Vue.onMounted, L3 = window.VueRouter.useRouter, $3 = window.VueRouter.useRoute, q3 = /* @__PURE__ */ B3({
  __name: "SituationDetail",
  setup(t) {
    const o = L3(), r = $3(), a = parseInt(r.params.id), l = ya(a), c = qr();
    c.getSituation(l.value), c.situations.length || c.getSituations();
    const d = ya(), p = ya(), w = ya(
      c.filteredSituations.findIndex((R) => R === l.value)
    );
    rm(
      () => c.situationDetail,
      () => {
        d.value = c.situationDetail;
      }
    ), X3(() => {
      var y;
      const R = ((y = document.getElementById("cont")) == null ? void 0 : y.getBoundingClientRect().width) || 1200;
      p.value = R - 90;
    });
    const V = () => {
      o.push({
        name: "situations"
      });
    }, g = (R) => {
      const y = w.value, F = c.filteredSituations[y + R];
      o.push({
        name: "situationDetail",
        params: {
          id: F
        }
      });
    };
    return rm(r, () => {
      l.value = parseInt(r.params.id), c.getSituation(l.value), w.value = c.filteredSituations.findIndex((R) => R == l.value);
    }), (R, y) => (vc(), nm("div", Q3, [
      oi("div", _3, [
        Mt(ze(wt), {
          primary: "",
          onClick: y[0] || (y[0] = () => V())
        }, {
          default: un(() => [
            Mt(ze(K), {
              icon: ze(wc),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            z3
          ]),
          _: 1
        }),
        oi("div", null, [
          Mt(ze(wt), {
            disabled: !ze(c).filteredSituations[w.value - 1],
            primary: "",
            onClick: y[1] || (y[1] = () => g(-1))
          }, {
            default: un(() => [
              Mt(ze(K), {
                icon: ze(wc),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              G3
            ]),
            _: 1
          }, 8, ["disabled"]),
          Mt(ze(wt), {
            disabled: !ze(c).filteredSituations[w.value + 1],
            primary: "",
            onClick: y[2] || (y[2] = () => g(1))
          }, {
            default: un(() => [
              Y3,
              Mt(ze(K), {
                icon: ze(wc),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      d.value ? (vc(), nm("div", H3, [
        Mt(ze(bF), null, {
          tabs: un(() => [
            Mt(ze(ap), null, {
              default: un(() => [
                P3
              ]),
              _: 1
            }),
            Mt(ze(ap), null, {
              default: un(() => [
                j3
              ]),
              _: 1
            })
          ]),
          default: un(() => [
            Mt(ze(sp), { class: "panel" }, {
              default: un(() => [
                Mt(Ex, { "situation-info": d.value }, null, 8, ["situation-info"])
              ]),
              _: 1
            }),
            Mt(ze(sp), { class: "panel" }, {
              default: un(() => [
                p.value ? (vc(), I3(Z3, {
                  key: 0,
                  situation: d.value,
                  width: p.value
                }, null, 8, ["situation", "width"])) : tm("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : tm("", !0)
    ]));
  }
});
const K3 = /* @__PURE__ */ ye(q3, [["__scopeId", "data-v-6a3cc938"]]);
var eI = Object.defineProperty, tI = Object.defineProperties, nI = Object.getOwnPropertyDescriptors, om = Object.getOwnPropertySymbols, rI = Object.prototype.hasOwnProperty, oI = Object.prototype.propertyIsEnumerable, im = (t, o, r) => o in t ? eI(t, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[o] = r, Aa = (t, o) => {
  for (var r in o || (o = {}))
    rI.call(o, r) && im(t, r, o[r]);
  if (om)
    for (var r of om(o))
      oI.call(o, r) && im(t, r, o[r]);
  return t;
}, Aw = (t, o) => tI(t, nI(o));
const Ww = window.Vue.defineComponent, iI = window.Vue.ref, Xo = window.Vue.computed, aI = window.Vue.reactive, am = window.Vue.watch, Vc = window.Vue.inject, Cw = window.Vue.resolveComponent, Cc = window.Vue.openBlock, xw = window.Vue.createElementBlock, Fn = window.Vue.createElementVNode, sI = window.Vue.createBlock, lI = window.Vue.createCommentVNode, Bw = window.Vue.renderSlot, cI = window.Vue.pushScopeId, uI = window.Vue.popScopeId, Tc = window.Vue.toRef, sm = window.Vue.mergeProps, dI = window.Vue.toDisplayString, hI = window.Vue.createVNode;
var Iw = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const fI = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, pI = Ww({
  props: fI,
  setup(t) {
    const o = iI(), r = () => {
      o.value.focus();
    }, a = Xo(() => le("feather-radio-button")), l = aI({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: a.value
    }), c = Xo(() => le("radio-label-id")), d = Xo(() => l.first || l.checked ? 0 : -1);
    am(() => t.disabled, (R) => {
      l.disabled = R;
    }, { immediate: !0 }), am(() => t.value, (R) => {
      l.value = R;
    }, { immediate: !0 });
    const p = Vc("register", (R) => {
    }), w = Vc("blur", (R) => {
    }), V = Vc("select", (R) => {
    });
    return p(l), {
      labelId: c,
      tabindex: d,
      vm: l,
      blur: w,
      click: () => {
        V(l);
      },
      input: o,
      id: a
    };
  },
  components: {
    FeatherRipple: ar
  }
}), mI = (t) => (cI("data-v-24790cf0"), t = t(), uI(), t), wI = { class: "layout-container" }, vI = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], VI = { class: "radio hover focus" }, TI = /* @__PURE__ */ mI(() => /* @__PURE__ */ Fn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Fn("svg", { class: "dot" }, [
    /* @__PURE__ */ Fn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), gI = ["id"];
function UI(t, o, r, a, l, c) {
  const d = Cw("feather-ripple");
  return Cc(), xw("div", wI, [
    Fn("div", {
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
      "data-ref-id": "feather-radio"
    }, [
      Fn("div", VI, [
        TI,
        t.vm.disabled ? lI("", !0) : (Cc(), sI(d, {
          key: 0,
          center: ""
        }))
      ]),
      Fn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        Bw(t.$slots, "default", {}, void 0, !0)
      ], 8, gI)
    ], 40, vI)
  ]);
}
var Ya = /* @__PURE__ */ Iw(pI, [["render", UI], ["__scopeId", "data-v-24790cf0"]]);
const RI = Aw(Aa({}, es), {
  label: {
    type: String,
    required: !0
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  }
}), NI = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, yI = Ww({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: RI,
  emits: NI,
  setup(t, o) {
    ts(t);
    const r = Tc(t, "error"), a = Tc(t, "modelValue"), l = Xo(() => le("feather-input-description")), c = Xo(() => {
      const d = Aw(Aa({}, o.attrs), {
        class: "",
        "aria-describedby": l.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return Aa(Aa({
      descriptionId: l,
      attrs: c
    }, $m(a, o.emit, t.label, t.schema, Tc(t, "error"))), Ka(o.attrs));
  },
  components: {
    InputSubText: $a
  }
}), kI = ["for"], MI = ["id"];
function ZI(t, o, r, a, l, c) {
  const d = Cw("InputSubText");
  return Cc(), xw("div", sm(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    Fn("label", {
      for: t.groupId,
      class: "group-label"
    }, dI(t.label), 9, kI),
    Fn("div", sm(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: o[0] || (o[0] = (...p) => t.keydown && t.keydown(...p))
    }), [
      Bw(t.$slots, "default", {}, void 0, !0)
    ], 16, MI),
    hI(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Dw = /* @__PURE__ */ Iw(yI, [["render", ZI], ["__scopeId", "data-v-6775aeb9"]]);
const bI = window.Vue.openBlock, JI = window.Vue.createElementBlock, EI = window.Vue.createStaticVNode;
var SI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const FI = {}, AI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WI = /* @__PURE__ */ EI('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), CI = [
  WI
];
function xI(t, o) {
  return bI(), JI("svg", AI, CI);
}
var BI = /* @__PURE__ */ SI(FI, [["render", xI]]);
const II = window.Vue.openBlock, DI = window.Vue.createElementBlock, OI = window.Vue.createStaticVNode;
var QI = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const _I = {}, zI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GI = /* @__PURE__ */ OI('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), YI = [
  GI
];
function HI(t, o) {
  return II(), DI("svg", zI, YI);
}
var PI = /* @__PURE__ */ QI(_I, [["render", HI]]);
const jI = window.Vue.openBlock, XI = window.Vue.createElementBlock, LI = window.Vue.createElementVNode;
var $I = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const qI = {}, KI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eD = /* @__PURE__ */ LI("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), tD = [
  eD
];
function nD(t, o) {
  return jI(), XI("svg", KI, tD);
}
var rD = /* @__PURE__ */ $I(qI, [["render", nD]]);
const oD = window.Vue.openBlock, iD = window.Vue.createElementBlock, aD = window.Vue.createStaticVNode;
var sD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const lD = {}, cD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uD = /* @__PURE__ */ aD('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), dD = [
  uD
];
function hD(t, o) {
  return oD(), iD("svg", cD, dD);
}
var fD = /* @__PURE__ */ sD(lD, [["render", hD]]);
const pD = window.Vue.openBlock, mD = window.Vue.createElementBlock, wD = window.Vue.createElementVNode;
var vD = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of o)
    r[a] = l;
  return r;
};
const VD = {}, TD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gD = /* @__PURE__ */ wD("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), UD = [
  gD
];
function RD(t, o) {
  return pD(), mD("svg", TD, UD);
}
var ND = /* @__PURE__ */ vD(VD, [["render", RD]]);
const cu = () => window.VRouter || uu, yD = window.Vue.defineComponent, Ne = window.Vue.createElementVNode, ii = window.Vue.createTextVNode, Le = window.Vue.unref, dn = window.Vue.createVNode, ka = window.Vue.withCtx, lm = window.Vue.openBlock, cm = window.Vue.createElementBlock, kD = window.Vue.createCommentVNode, MD = window.Vue.pushScopeId, ZD = window.Vue.popScopeId, Qt = (t) => (MD("data-v-b4b3bdcf"), t = t(), ZD(), t), bD = { class: "container" }, JD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("div", { class: "title" }, "ALEC", -1)), ED = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("div", { class: "description" }, [
  /* @__PURE__ */ ii(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Ne("br"),
  /* @__PURE__ */ Ne("strong", null, "Our goal"),
  /* @__PURE__ */ ii(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), SD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("h3", null, "Key Benefits:", -1)), FD = { class: "list" }, AD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), WD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, "Assist in root cause analysis.", -1)), CD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), xD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, "Easy configuration.", -1)), BD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), ID = {
  key: 0,
  class: "optin"
}, DD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("h3", null, "Enable ALEC for more precise results:", -1)), OD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), QD = { class: "choices" }, _D = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), zD = /* @__PURE__ */ ii("Yes"), GD = /* @__PURE__ */ ii("No"), YD = /* @__PURE__ */ ii(" Continue "), HD = window.Vue.ref, PD = /* @__PURE__ */ yD({
  __name: "WelcomePage",
  setup(t) {
    const o = fi(), r = cu(), a = HD(!0), l = () => {
      const c = Boolean(a.value);
      o.savePermission(c), r.push({ name: "configuration" });
    };
    return (c, d) => (lm(), cm("div", bD, [
      JD,
      ED,
      Ne("div", null, [
        SD,
        Ne("div", FD, [
          Ne("div", null, [
            dn(Le(K), {
              icon: Le(fD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            AD
          ]),
          Ne("div", null, [
            dn(Le(K), {
              icon: Le(rD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            WD
          ]),
          Ne("div", null, [
            dn(Le(K), {
              icon: Le(ND),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            CD
          ]),
          Ne("div", null, [
            dn(Le(K), {
              icon: Le(BI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            xD
          ]),
          Ne("div", null, [
            dn(Le(K), {
              icon: Le(PI),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            BD
          ])
        ])
      ]),
      Le(o).isAdmin ? (lm(), cm("div", ID, [
        DD,
        OD,
        Ne("div", QD, [
          _D,
          dn(Le(Dw), {
            horizontal: "",
            modelValue: a.value,
            "onUpdate:modelValue": d[0] || (d[0] = (p) => a.value = p),
            label: ""
          }, {
            default: ka(() => [
              dn(Le(Ya), { value: !0 }, {
                default: ka(() => [
                  zD
                ]),
                _: 1
              }),
              dn(Le(Ya), { value: !1 }, {
                default: ka(() => [
                  GD
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : kD("", !0),
      dn(Le(wt), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: l
      }, {
        default: ka(() => [
          YD
        ]),
        _: 1
      })
    ]));
  }
});
const jD = /* @__PURE__ */ ye(PD, [["__scopeId", "data-v-b4b3bdcf"]]), XD = window.Vue.defineComponent, LD = window.Vue.createElementVNode, $D = window.Vue.createTextVNode, qD = window.Vue.unref, KD = window.Vue.withCtx, eO = window.Vue.createVNode, tO = window.Vue.Fragment, nO = window.Vue.openBlock, rO = window.Vue.createElementBlock, oO = window.Vue.pushScopeId, iO = window.Vue.popScopeId, aO = (t) => (oO("data-v-bcb7dcc6"), t = t(), iO(), t), sO = /* @__PURE__ */ aO(() => /* @__PURE__ */ LD("div", { class: "main" }, "Something bad is happening...", -1)), lO = /* @__PURE__ */ $D(" Reload "), cO = /* @__PURE__ */ XD({
  __name: "ErrorPage",
  setup(t) {
    const o = cu(), r = () => {
      o.push({ name: "situations" });
    };
    return (a, l) => (nO(), rO(tO, null, [
      sO,
      eO(qD(wt), {
        primary: "",
        onClick: r
      }, {
        default: KD(() => [
          lO
        ]),
        _: 1
      })
    ], 64));
  }
});
const uO = /* @__PURE__ */ ye(cO, [["__scopeId", "data-v-bcb7dcc6"]]), dO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", hO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", fO = window.Vue.defineComponent, Ae = window.Vue.createElementVNode, xc = window.Vue.createTextVNode, bn = window.Vue.unref, Qo = window.Vue.withCtx, _o = window.Vue.createVNode, pO = window.Vue.openBlock, mO = window.Vue.createElementBlock, wO = window.Vue.pushScopeId, vO = window.Vue.popScopeId, cr = (t) => (wO("data-v-9a5b5f4e"), t = t(), vO(), t), VO = { class: "container" }, TO = /* @__PURE__ */ cr(() => /* @__PURE__ */ Ae("h2", null, "Configuration", -1)), gO = /* @__PURE__ */ cr(() => /* @__PURE__ */ Ae("p", null, [
  /* @__PURE__ */ xc(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Ae("br"),
  /* @__PURE__ */ xc(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Ae("strong", null, [
    /* @__PURE__ */ Ae("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), UO = { class: "radio-content" }, RO = /* @__PURE__ */ cr(() => /* @__PURE__ */ Ae("strong", { class: "title" }, "Clustering", -1)), NO = /* @__PURE__ */ cr(() => /* @__PURE__ */ Ae("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), yO = /* @__PURE__ */ cr(() => /* @__PURE__ */ Ae("img", {
  class: "img",
  src: dO
}, null, -1)), kO = /* @__PURE__ */ cr(() => /* @__PURE__ */ Ae("div", { class: "hellinger" }, [
  /* @__PURE__ */ Ae("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Ae("br"),
  /* @__PURE__ */ Ae("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), MO = /* @__PURE__ */ cr(() => /* @__PURE__ */ Ae("div", { class: "radio-content" }, [
  /* @__PURE__ */ Ae("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Ae("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Ae("img", {
    class: "img img2",
    src: hO
  })
], -1)), ZO = /* @__PURE__ */ xc(" Continue "), um = window.Vue.ref, bO = /* @__PURE__ */ fO({
  __name: "ConfigurationPage",
  setup(t) {
    const o = fi(), r = cu(), a = um(!1), l = um(pt.ENGINE_DBSCAN), c = () => {
      Fm(o.allowSave), ly(l.value, a.value), r.push({ name: "situations" });
    };
    return (d, p) => (pO(), mO("div", VO, [
      TO,
      gO,
      Ae("div", null, [
        _o(bn(Dw), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: l.value,
          "onUpdate:modelValue": p[1] || (p[1] = (w) => l.value = w)
        }, {
          default: Qo(() => [
            _o(bn(Ya), {
              class: "radio",
              value: bn(pt).ENGINE_DBSCAN
            }, {
              default: Qo(() => [
                Ae("div", UO, [
                  RO,
                  NO,
                  yO,
                  _o(bn(iu), {
                    modelValue: a.value,
                    "onUpdate:modelValue": p[0] || (p[0] = (w) => a.value = w),
                    disabled: l.value !== bn(pt).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Qo(() => [
                      kO
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            _o(bn(Ya), {
              class: "radio",
              value: bn(pt).ENGINE_DEEP_LEARNING
            }, {
              default: Qo(() => [
                MO
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      _o(bn(wt), {
        primary: "",
        class: "btn",
        onClick: p[2] || (p[2] = () => c())
      }, {
        default: Qo(() => [
          ZO
        ]),
        _: 1
      })
    ]));
  }
});
const JO = /* @__PURE__ */ ye(bO, [["__scopeId", "data-v-9a5b5f4e"]]), EO = window.VueRouter.createRouter, SO = window.VueRouter.createWebHistory, gc = async () => {
  const t = window.VRouter || uu, o = fi();
  if (!o.userId) {
    const r = await o.getUserRole();
    await o.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, Ow = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const o = window.VRouter || uu, r = fi();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: t.params }) : o.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => gc(),
    component: jD
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => gc(),
    component: JO
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => gc(),
    component: HS
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: K3
  },
  {
    path: "/error",
    name: "error",
    component: uO
  }
], dm = window.VRouter;
if (dm)
  for (const t of Ow) {
    const { path: o, name: r, component: a, beforeEnter: l } = t;
    dm.addRoute("Plugin", {
      path: o.slice(1),
      name: r,
      component: a,
      beforeEnter: l
    });
  }
const uu = EO({
  history: SO(),
  routes: Ow
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = OR;

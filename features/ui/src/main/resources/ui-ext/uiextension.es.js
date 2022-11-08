const ye = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
}, hR = {}, fR = window.Vue.resolveComponent, pR = window.Vue.createVNode, mR = window.Vue.openBlock, wR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const vR = { class: "main" };
function VR(t, i) {
  const r = fR("router-view");
  return mR(), wR("div", vR, [
    pR(r)
  ]);
}
const TR = /* @__PURE__ */ ye(hR, [["render", VR], ["__scopeId", "data-v-5d32d140"]]), gR = window.Vue.defineComponent, UR = window.Vue.openBlock, RR = window.Vue.createBlock, NR = /* @__PURE__ */ gR({
  __name: "App",
  setup(t) {
    return (i, r) => (UR(), RR(TR));
  }
});
var Ui = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yR(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Kp = { exports: {} }, yc = { exports: {} }, em = function(i, r) {
  return function() {
    for (var l = new Array(arguments.length), c = 0; c < l.length; c++)
      l[c] = arguments[c];
    return i.apply(r, l);
  };
}, MR = em, Mc = Object.prototype.toString, kc = function(t) {
  return function(i) {
    var r = Mc.call(i);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function or(t) {
  return t = t.toLowerCase(), function(r) {
    return kc(r) === t;
  };
}
function Zc(t) {
  return Array.isArray(t);
}
function ba(t) {
  return typeof t > "u";
}
function kR(t) {
  return t !== null && !ba(t) && t.constructor !== null && !ba(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var tm = or("ArrayBuffer");
function ZR(t) {
  var i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(t) : i = t && t.buffer && tm(t.buffer), i;
}
function JR(t) {
  return typeof t == "string";
}
function bR(t) {
  return typeof t == "number";
}
function nm(t) {
  return t !== null && typeof t == "object";
}
function Ra(t) {
  if (kc(t) !== "object")
    return !1;
  var i = Object.getPrototypeOf(t);
  return i === null || i === Object.prototype;
}
var ER = or("Date"), SR = or("File"), FR = or("Blob"), AR = or("FileList");
function Jc(t) {
  return Mc.call(t) === "[object Function]";
}
function WR(t) {
  return nm(t) && Jc(t.pipe);
}
function CR(t) {
  var i = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Mc.call(t) === i || Jc(t.toString) && t.toString() === i);
}
var xR = or("URLSearchParams");
function BR(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function DR() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function bc(t, i) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Zc(t))
      for (var r = 0, a = t.length; r < a; r++)
        i.call(null, t[r], r, t);
    else
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && i.call(null, t[l], l, t);
}
function dc() {
  var t = {};
  function i(l, c) {
    Ra(t[c]) && Ra(l) ? t[c] = dc(t[c], l) : Ra(l) ? t[c] = dc({}, l) : Zc(l) ? t[c] = l.slice() : t[c] = l;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    bc(arguments[r], i);
  return t;
}
function IR(t, i, r) {
  return bc(i, function(l, c) {
    r && typeof l == "function" ? t[c] = MR(l, r) : t[c] = l;
  }), t;
}
function OR(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function QR(t, i, r, a) {
  t.prototype = Object.create(i.prototype, a), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function _R(t, i, r) {
  var a, l, c, d = {};
  i = i || {};
  do {
    for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0; )
      c = a[l], d[c] || (i[c] = t[c], d[c] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, i)) && t !== Object.prototype);
  return i;
}
function zR(t, i, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= i.length;
  var a = t.indexOf(i, r);
  return a !== -1 && a === r;
}
function GR(t) {
  if (!t)
    return null;
  var i = t.length;
  if (ba(i))
    return null;
  for (var r = new Array(i); i-- > 0; )
    r[i] = t[i];
  return r;
}
var YR = function(t) {
  return function(i) {
    return t && i instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ie = {
  isArray: Zc,
  isArrayBuffer: tm,
  isBuffer: kR,
  isFormData: CR,
  isArrayBufferView: ZR,
  isString: JR,
  isNumber: bR,
  isObject: nm,
  isPlainObject: Ra,
  isUndefined: ba,
  isDate: ER,
  isFile: SR,
  isBlob: FR,
  isFunction: Jc,
  isStream: WR,
  isURLSearchParams: xR,
  isStandardBrowserEnv: DR,
  forEach: bc,
  merge: dc,
  extend: IR,
  trim: BR,
  stripBOM: OR,
  inherits: QR,
  toFlatObject: _R,
  kindOf: kc,
  kindOfTest: or,
  endsWith: zR,
  toArray: GR,
  isTypedArray: YR,
  isFileList: AR
}, yr = Ie;
function Sh(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var rm = function(i, r, a) {
  if (!r)
    return i;
  var l;
  if (a)
    l = a(r);
  else if (yr.isURLSearchParams(r))
    l = r.toString();
  else {
    var c = [];
    yr.forEach(r, function(w, V) {
      w === null || typeof w > "u" || (yr.isArray(w) ? V = V + "[]" : w = [w], yr.forEach(w, function(R) {
        yr.isDate(R) ? R = R.toISOString() : yr.isObject(R) && (R = JSON.stringify(R)), c.push(Sh(V) + "=" + Sh(R));
      }));
    }), l = c.join("&");
  }
  if (l) {
    var d = i.indexOf("#");
    d !== -1 && (i = i.slice(0, d)), i += (i.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return i;
}, PR = Ie;
function Oa() {
  this.handlers = [];
}
Oa.prototype.use = function(i, r, a) {
  return this.handlers.push({
    fulfilled: i,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
Oa.prototype.eject = function(i) {
  this.handlers[i] && (this.handlers[i] = null);
};
Oa.prototype.forEach = function(i) {
  PR.forEach(this.handlers, function(a) {
    a !== null && i(a);
  });
};
var HR = Oa, jR = Ie, XR = function(i, r) {
  jR.forEach(i, function(l, c) {
    c !== r && c.toUpperCase() === r.toUpperCase() && (i[r] = l, delete i[c]);
  });
}, im = Ie;
function Yr(t, i, r, a, l) {
  Error.call(this), this.message = t, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), a && (this.request = a), l && (this.response = l);
}
im.inherits(Yr, Error, {
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
var om = Yr.prototype, am = {};
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
  am[t] = { value: t };
});
Object.defineProperties(Yr, am);
Object.defineProperty(om, "isAxiosError", { value: !0 });
Yr.from = function(t, i, r, a, l, c) {
  var d = Object.create(om);
  return im.toFlatObject(t, d, function(w) {
    return w !== Error.prototype;
  }), Yr.call(d, t.message, i, r, a, l), d.name = t.name, c && Object.assign(d, c), d;
};
var jr = Yr, sm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xt = Ie;
function LR(t, i) {
  i = i || new FormData();
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
          var U = d ? d + "." + V : V, R;
          if (w && !d && typeof w == "object") {
            if (xt.endsWith(V, "{}"))
              w = JSON.stringify(w);
            else if (xt.endsWith(V, "[]") && (R = xt.toArray(w))) {
              R.forEach(function(y) {
                !xt.isUndefined(y) && i.append(U, a(y));
              });
              return;
            }
          }
          l(w, U);
        }
      }), r.pop();
    } else
      i.append(d, a(c));
  }
  return l(t), i;
}
var lm = LR, Tl, Fh;
function $R() {
  if (Fh)
    return Tl;
  Fh = 1;
  var t = jr;
  return Tl = function(r, a, l) {
    var c = l.config.validateStatus;
    !l.status || !c || c(l.status) ? r(l) : a(new t(
      "Request failed with status code " + l.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
      l.config,
      l.request,
      l
    ));
  }, Tl;
}
var gl, Ah;
function qR() {
  if (Ah)
    return gl;
  Ah = 1;
  var t = Ie;
  return gl = t.isStandardBrowserEnv() ? function() {
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
  }(), gl;
}
var KR = function(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}, eN = function(i, r) {
  return r ? i.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : i;
}, tN = KR, nN = eN, cm = function(i, r) {
  return i && !tN(r) ? nN(i, r) : r;
}, Ul, Wh;
function rN() {
  if (Wh)
    return Ul;
  Wh = 1;
  var t = Ie, i = [
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
  return Ul = function(a) {
    var l = {}, c, d, p;
    return a && t.forEach(a.split(`
`), function(V) {
      if (p = V.indexOf(":"), c = t.trim(V.substr(0, p)).toLowerCase(), d = t.trim(V.substr(p + 1)), c) {
        if (l[c] && i.indexOf(c) >= 0)
          return;
        c === "set-cookie" ? l[c] = (l[c] ? l[c] : []).concat([d]) : l[c] = l[c] ? l[c] + ", " + d : d;
      }
    }), l;
  }, Ul;
}
var Rl, Ch;
function iN() {
  if (Ch)
    return Rl;
  Ch = 1;
  var t = Ie;
  return Rl = t.isStandardBrowserEnv() ? function() {
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
  }(), Rl;
}
var Nl, xh;
function Qa() {
  if (xh)
    return Nl;
  xh = 1;
  var t = jr, i = Ie;
  function r(a) {
    t.call(this, a == null ? "canceled" : a, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return i.inherits(r, t, {
    __CANCEL__: !0
  }), Nl = r, Nl;
}
var yl, Bh;
function oN() {
  return Bh || (Bh = 1, yl = function(i) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return r && r[1] || "";
  }), yl;
}
var Ml, Dh;
function Ih() {
  if (Dh)
    return Ml;
  Dh = 1;
  var t = Ie, i = $R(), r = qR(), a = rm, l = cm, c = rN(), d = iN(), p = sm, w = jr, V = Qa(), U = oN();
  return Ml = function(y) {
    return new Promise(function(E, D) {
      var C = y.data, A = y.headers, Q = y.responseType, O;
      function P() {
        y.cancelToken && y.cancelToken.unsubscribe(O), y.signal && y.signal.removeEventListener("abort", O);
      }
      t.isFormData(C) && t.isStandardBrowserEnv() && delete A["Content-Type"];
      var M = new XMLHttpRequest();
      if (y.auth) {
        var W = y.auth.username || "", x = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        A.Authorization = "Basic " + btoa(W + ":" + x);
      }
      var z = l(y.baseURL, y.url);
      M.open(y.method.toUpperCase(), a(z, y.params, y.paramsSerializer), !0), M.timeout = y.timeout;
      function de() {
        if (!!M) {
          var Ve = "getAllResponseHeaders" in M ? c(M.getAllResponseHeaders()) : null, ge = !Q || Q === "text" || Q === "json" ? M.responseText : M.response, Me = {
            data: ge,
            status: M.status,
            statusText: M.statusText,
            headers: Ve,
            config: y,
            request: M
          };
          i(function(We) {
            E(We), P();
          }, function(We) {
            D(We), P();
          }, Me), M = null;
        }
      }
      if ("onloadend" in M ? M.onloadend = de : M.onreadystatechange = function() {
        !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout(de);
      }, M.onabort = function() {
        !M || (D(new w("Request aborted", w.ECONNABORTED, y, M)), M = null);
      }, M.onerror = function() {
        D(new w("Network Error", w.ERR_NETWORK, y, M, M)), M = null;
      }, M.ontimeout = function() {
        var ge = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Me = y.transitional || p;
        y.timeoutErrorMessage && (ge = y.timeoutErrorMessage), D(new w(
          ge,
          Me.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          M
        )), M = null;
      }, t.isStandardBrowserEnv()) {
        var he = (y.withCredentials || d(z)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        he && (A[y.xsrfHeaderName] = he);
      }
      "setRequestHeader" in M && t.forEach(A, function(ge, Me) {
        typeof C > "u" && Me.toLowerCase() === "content-type" ? delete A[Me] : M.setRequestHeader(Me, ge);
      }), t.isUndefined(y.withCredentials) || (M.withCredentials = !!y.withCredentials), Q && Q !== "json" && (M.responseType = y.responseType), typeof y.onDownloadProgress == "function" && M.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && M.upload && M.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (O = function(Ve) {
        !M || (D(!Ve || Ve && Ve.type ? new V() : Ve), M.abort(), M = null);
      }, y.cancelToken && y.cancelToken.subscribe(O), y.signal && (y.signal.aborted ? O() : y.signal.addEventListener("abort", O))), C || (C = null);
      var ve = U(z);
      if (ve && ["http", "https", "file"].indexOf(ve) === -1) {
        D(new w("Unsupported protocol " + ve + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      M.send(C);
    });
  }, Ml;
}
var kl, Oh;
function aN() {
  return Oh || (Oh = 1, kl = null), kl;
}
var Fe = Ie, Qh = XR, _h = jr, sN = sm, lN = lm, cN = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function zh(t, i) {
  !Fe.isUndefined(t) && Fe.isUndefined(t["Content-Type"]) && (t["Content-Type"] = i);
}
function uN() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Ih()), t;
}
function dN(t, i, r) {
  if (Fe.isString(t))
    try {
      return (i || JSON.parse)(t), Fe.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
var _a = {
  transitional: sN,
  adapter: uN(),
  transformRequest: [function(i, r) {
    if (Qh(r, "Accept"), Qh(r, "Content-Type"), Fe.isFormData(i) || Fe.isArrayBuffer(i) || Fe.isBuffer(i) || Fe.isStream(i) || Fe.isFile(i) || Fe.isBlob(i))
      return i;
    if (Fe.isArrayBufferView(i))
      return i.buffer;
    if (Fe.isURLSearchParams(i))
      return zh(r, "application/x-www-form-urlencoded;charset=utf-8"), i.toString();
    var a = Fe.isObject(i), l = r && r["Content-Type"], c;
    if ((c = Fe.isFileList(i)) || a && l === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return lN(c ? { "files[]": i } : i, d && new d());
    } else if (a || l === "application/json")
      return zh(r, "application/json"), dN(i);
    return i;
  }],
  transformResponse: [function(i) {
    var r = this.transitional || _a.transitional, a = r && r.silentJSONParsing, l = r && r.forcedJSONParsing, c = !a && this.responseType === "json";
    if (c || l && Fe.isString(i) && i.length)
      try {
        return JSON.parse(i);
      } catch (d) {
        if (c)
          throw d.name === "SyntaxError" ? _h.from(d, _h.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return i;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: aN()
  },
  validateStatus: function(i) {
    return i >= 200 && i < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Fe.forEach(["delete", "get", "head"], function(i) {
  _a.headers[i] = {};
});
Fe.forEach(["post", "put", "patch"], function(i) {
  _a.headers[i] = Fe.merge(cN);
});
var Ec = _a, hN = Ie, fN = Ec, pN = function(i, r, a) {
  var l = this || fN;
  return hN.forEach(a, function(d) {
    i = d.call(l, i, r);
  }), i;
}, Zl, Gh;
function um() {
  return Gh || (Gh = 1, Zl = function(i) {
    return !!(i && i.__CANCEL__);
  }), Zl;
}
var Yh = Ie, Jl = pN, mN = um(), wN = Ec, vN = Qa();
function bl(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new vN();
}
var VN = function(i) {
  bl(i), i.headers = i.headers || {}, i.data = Jl.call(
    i,
    i.data,
    i.headers,
    i.transformRequest
  ), i.headers = Yh.merge(
    i.headers.common || {},
    i.headers[i.method] || {},
    i.headers
  ), Yh.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(l) {
      delete i.headers[l];
    }
  );
  var r = i.adapter || wN.adapter;
  return r(i).then(function(l) {
    return bl(i), l.data = Jl.call(
      i,
      l.data,
      l.headers,
      i.transformResponse
    ), l;
  }, function(l) {
    return mN(l) || (bl(i), l && l.response && (l.response.data = Jl.call(
      i,
      l.response.data,
      l.response.headers,
      i.transformResponse
    ))), Promise.reject(l);
  });
}, dt = Ie, dm = function(i, r) {
  r = r || {};
  var a = {};
  function l(U, R) {
    return dt.isPlainObject(U) && dt.isPlainObject(R) ? dt.merge(U, R) : dt.isPlainObject(R) ? dt.merge({}, R) : dt.isArray(R) ? R.slice() : R;
  }
  function c(U) {
    if (dt.isUndefined(r[U])) {
      if (!dt.isUndefined(i[U]))
        return l(void 0, i[U]);
    } else
      return l(i[U], r[U]);
  }
  function d(U) {
    if (!dt.isUndefined(r[U]))
      return l(void 0, r[U]);
  }
  function p(U) {
    if (dt.isUndefined(r[U])) {
      if (!dt.isUndefined(i[U]))
        return l(void 0, i[U]);
    } else
      return l(void 0, r[U]);
  }
  function w(U) {
    if (U in r)
      return l(i[U], r[U]);
    if (U in i)
      return l(void 0, i[U]);
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
  return dt.forEach(Object.keys(i).concat(Object.keys(r)), function(R) {
    var y = V[R] || c, F = y(R);
    dt.isUndefined(F) && y !== w || (a[R] = F);
  }), a;
}, El, Ph;
function hm() {
  return Ph || (Ph = 1, El = {
    version: "0.27.2"
  }), El;
}
var TN = hm().version, Jn = jr, Sc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, i) {
  Sc[t] = function(a) {
    return typeof a === t || "a" + (i < 1 ? "n " : " ") + t;
  };
});
var Hh = {};
Sc.transitional = function(i, r, a) {
  function l(c, d) {
    return "[Axios v" + TN + "] Transitional option '" + c + "'" + d + (a ? ". " + a : "");
  }
  return function(c, d, p) {
    if (i === !1)
      throw new Jn(
        l(d, " has been removed" + (r ? " in " + r : "")),
        Jn.ERR_DEPRECATED
      );
    return r && !Hh[d] && (Hh[d] = !0, console.warn(
      l(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(c, d, p) : !0;
  };
};
function gN(t, i, r) {
  if (typeof t != "object")
    throw new Jn("options must be an object", Jn.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(t), l = a.length; l-- > 0; ) {
    var c = a[l], d = i[c];
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
var UN = {
  assertOptions: gN,
  validators: Sc
}, fm = Ie, RN = rm, jh = HR, Xh = VN, za = dm, NN = cm, pm = UN, Mr = pm.validators;
function Pr(t) {
  this.defaults = t, this.interceptors = {
    request: new jh(),
    response: new jh()
  };
}
Pr.prototype.request = function(i, r) {
  typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = za(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && pm.assertOptions(a, {
    silentJSONParsing: Mr.transitional(Mr.boolean),
    forcedJSONParsing: Mr.transitional(Mr.boolean),
    clarifyTimeoutError: Mr.transitional(Mr.boolean)
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
    var w = [Xh, void 0];
    for (Array.prototype.unshift.apply(w, l), w = w.concat(d), p = Promise.resolve(r); w.length; )
      p = p.then(w.shift(), w.shift());
    return p;
  }
  for (var V = r; l.length; ) {
    var U = l.shift(), R = l.shift();
    try {
      V = U(V);
    } catch (y) {
      R(y);
      break;
    }
  }
  try {
    p = Xh(V);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; d.length; )
    p = p.then(d.shift(), d.shift());
  return p;
};
Pr.prototype.getUri = function(i) {
  i = za(this.defaults, i);
  var r = NN(i.baseURL, i.url);
  return RN(r, i.params, i.paramsSerializer);
};
fm.forEach(["delete", "get", "head", "options"], function(i) {
  Pr.prototype[i] = function(r, a) {
    return this.request(za(a || {}, {
      method: i,
      url: r,
      data: (a || {}).data
    }));
  };
});
fm.forEach(["post", "put", "patch"], function(i) {
  function r(a) {
    return function(c, d, p) {
      return this.request(za(p || {}, {
        method: i,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  Pr.prototype[i] = r(), Pr.prototype[i + "Form"] = r(!0);
});
var yN = Pr, Sl, Lh;
function MN() {
  if (Lh)
    return Sl;
  Lh = 1;
  var t = Qa();
  function i(r) {
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
  return i.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, i.prototype.subscribe = function(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }, i.prototype.unsubscribe = function(a) {
    if (!!this._listeners) {
      var l = this._listeners.indexOf(a);
      l !== -1 && this._listeners.splice(l, 1);
    }
  }, i.source = function() {
    var a, l = new i(function(d) {
      a = d;
    });
    return {
      token: l,
      cancel: a
    };
  }, Sl = i, Sl;
}
var Fl, $h;
function kN() {
  return $h || ($h = 1, Fl = function(i) {
    return function(a) {
      return i.apply(null, a);
    };
  }), Fl;
}
var Al, qh;
function ZN() {
  if (qh)
    return Al;
  qh = 1;
  var t = Ie;
  return Al = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, Al;
}
var Kh = Ie, JN = em, Na = yN, bN = dm, EN = Ec;
function mm(t) {
  var i = new Na(t), r = JN(Na.prototype.request, i);
  return Kh.extend(r, Na.prototype, i), Kh.extend(r, i), r.create = function(l) {
    return mm(bN(t, l));
  }, r;
}
var it = mm(EN);
it.Axios = Na;
it.CanceledError = Qa();
it.CancelToken = MN();
it.isCancel = um();
it.VERSION = hm().version;
it.toFormData = lm;
it.AxiosError = jr;
it.Cancel = it.CanceledError;
it.all = function(i) {
  return Promise.all(i);
};
it.spread = kN();
it.isAxiosError = ZN();
yc.exports = it;
yc.exports.default = it;
(function(t) {
  t.exports = yc.exports;
})(Kp);
const wm = /* @__PURE__ */ yR(Kp.exports), Sn = wm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Fn = wm.create({
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
(function(t, i) {
  (function() {
    var r, a = "4.17.21", l = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", p = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", V = 500, U = "__lodash_placeholder__", R = 1, y = 2, F = 4, E = 1, D = 2, C = 1, A = 2, Q = 4, O = 8, P = 16, M = 32, W = 64, x = 128, z = 256, de = 512, he = 30, ve = "...", Ve = 800, ge = 16, Me = 1, ce = 2, We = 3, Ce = 1 / 0, Pe = 9007199254740991, qr = 17976931348623157e292, co = 0 / 0, _t = 4294967295, y1 = _t - 1, M1 = _t >>> 1, k1 = [
      ["ary", x],
      ["bind", C],
      ["bindKey", A],
      ["curry", O],
      ["curryRight", P],
      ["flip", de],
      ["partial", M],
      ["partialRight", W],
      ["rearg", z]
    ], lr = "[object Arguments]", uo = "[object Array]", Z1 = "[object AsyncFunction]", Kr = "[object Boolean]", ei = "[object Date]", J1 = "[object DOMException]", ho = "[object Error]", fo = "[object Function]", eu = "[object GeneratorFunction]", Et = "[object Map]", ti = "[object Number]", b1 = "[object Null]", Lt = "[object Object]", tu = "[object Promise]", E1 = "[object Proxy]", ni = "[object RegExp]", St = "[object Set]", ri = "[object String]", po = "[object Symbol]", S1 = "[object Undefined]", ii = "[object WeakMap]", F1 = "[object WeakSet]", oi = "[object ArrayBuffer]", cr = "[object DataView]", qa = "[object Float32Array]", Ka = "[object Float64Array]", es = "[object Int8Array]", ts = "[object Int16Array]", ns = "[object Int32Array]", rs = "[object Uint8Array]", is = "[object Uint8ClampedArray]", os = "[object Uint16Array]", as = "[object Uint32Array]", A1 = /\b__p \+= '';/g, W1 = /\b(__p \+=) '' \+/g, C1 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, nu = /&(?:amp|lt|gt|quot|#39);/g, ru = /[&<>"']/g, x1 = RegExp(nu.source), B1 = RegExp(ru.source), D1 = /<%-([\s\S]+?)%>/g, I1 = /<%([\s\S]+?)%>/g, iu = /<%=([\s\S]+?)%>/g, O1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Q1 = /^\w*$/, _1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ss = /[\\^$.*+?()[\]{}|]/g, z1 = RegExp(ss.source), ls = /^\s+/, G1 = /\s/, Y1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, P1 = /\{\n\/\* \[wrapped with (.+)\] \*/, H1 = /,? & /, j1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, X1 = /[()=,{}\[\]\/\s]/, L1 = /\\(\\)?/g, $1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ou = /\w*$/, q1 = /^[-+]0x[0-9a-f]+$/i, K1 = /^0b[01]+$/i, ew = /^\[object .+?Constructor\]$/, tw = /^0o[0-7]+$/i, nw = /^(?:0|[1-9]\d*)$/, rw = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, mo = /($^)/, iw = /['\n\r\u2028\u2029\\]/g, wo = "\\ud800-\\udfff", ow = "\\u0300-\\u036f", aw = "\\ufe20-\\ufe2f", sw = "\\u20d0-\\u20ff", au = ow + aw + sw, su = "\\u2700-\\u27bf", lu = "a-z\\xdf-\\xf6\\xf8-\\xff", lw = "\\xac\\xb1\\xd7\\xf7", cw = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", uw = "\\u2000-\\u206f", dw = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", cu = "A-Z\\xc0-\\xd6\\xd8-\\xde", uu = "\\ufe0e\\ufe0f", du = lw + cw + uw + dw, cs = "['\u2019]", hw = "[" + wo + "]", hu = "[" + du + "]", vo = "[" + au + "]", fu = "\\d+", fw = "[" + su + "]", pu = "[" + lu + "]", mu = "[^" + wo + du + fu + su + lu + cu + "]", us = "\\ud83c[\\udffb-\\udfff]", pw = "(?:" + vo + "|" + us + ")", wu = "[^" + wo + "]", ds = "(?:\\ud83c[\\udde6-\\uddff]){2}", hs = "[\\ud800-\\udbff][\\udc00-\\udfff]", ur = "[" + cu + "]", vu = "\\u200d", Vu = "(?:" + pu + "|" + mu + ")", mw = "(?:" + ur + "|" + mu + ")", Tu = "(?:" + cs + "(?:d|ll|m|re|s|t|ve))?", gu = "(?:" + cs + "(?:D|LL|M|RE|S|T|VE))?", Uu = pw + "?", Ru = "[" + uu + "]?", ww = "(?:" + vu + "(?:" + [wu, ds, hs].join("|") + ")" + Ru + Uu + ")*", vw = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Vw = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Nu = Ru + Uu + ww, Tw = "(?:" + [fw, ds, hs].join("|") + ")" + Nu, gw = "(?:" + [wu + vo + "?", vo, ds, hs, hw].join("|") + ")", Uw = RegExp(cs, "g"), Rw = RegExp(vo, "g"), fs = RegExp(us + "(?=" + us + ")|" + gw + Nu, "g"), Nw = RegExp([
      ur + "?" + pu + "+" + Tu + "(?=" + [hu, ur, "$"].join("|") + ")",
      mw + "+" + gu + "(?=" + [hu, ur + Vu, "$"].join("|") + ")",
      ur + "?" + Vu + "+" + Tu,
      ur + "+" + gu,
      Vw,
      vw,
      fu,
      Tw
    ].join("|"), "g"), yw = RegExp("[" + vu + wo + au + uu + "]"), Mw = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, kw = [
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
    ], Zw = -1, pe = {};
    pe[qa] = pe[Ka] = pe[es] = pe[ts] = pe[ns] = pe[rs] = pe[is] = pe[os] = pe[as] = !0, pe[lr] = pe[uo] = pe[oi] = pe[Kr] = pe[cr] = pe[ei] = pe[ho] = pe[fo] = pe[Et] = pe[ti] = pe[Lt] = pe[ni] = pe[St] = pe[ri] = pe[ii] = !1;
    var fe = {};
    fe[lr] = fe[uo] = fe[oi] = fe[cr] = fe[Kr] = fe[ei] = fe[qa] = fe[Ka] = fe[es] = fe[ts] = fe[ns] = fe[Et] = fe[ti] = fe[Lt] = fe[ni] = fe[St] = fe[ri] = fe[po] = fe[rs] = fe[is] = fe[os] = fe[as] = !0, fe[ho] = fe[fo] = fe[ii] = !1;
    var Jw = {
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
    }, bw = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Ew = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Sw = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Fw = parseFloat, Aw = parseInt, yu = typeof Ui == "object" && Ui && Ui.Object === Object && Ui, Ww = typeof self == "object" && self && self.Object === Object && self, xe = yu || Ww || Function("return this")(), ps = i && !i.nodeType && i, Cn = ps && !0 && t && !t.nodeType && t, Mu = Cn && Cn.exports === ps, ms = Mu && yu.process, Vt = function() {
      try {
        var T = Cn && Cn.require && Cn.require("util").types;
        return T || ms && ms.binding && ms.binding("util");
      } catch {
      }
    }(), ku = Vt && Vt.isArrayBuffer, Zu = Vt && Vt.isDate, Ju = Vt && Vt.isMap, bu = Vt && Vt.isRegExp, Eu = Vt && Vt.isSet, Su = Vt && Vt.isTypedArray;
    function ot(T, k, N) {
      switch (N.length) {
        case 0:
          return T.call(k);
        case 1:
          return T.call(k, N[0]);
        case 2:
          return T.call(k, N[0], N[1]);
        case 3:
          return T.call(k, N[0], N[1], N[2]);
      }
      return T.apply(k, N);
    }
    function Cw(T, k, N, B) {
      for (var H = -1, re = T == null ? 0 : T.length; ++H < re; ) {
        var Je = T[H];
        k(B, Je, N(Je), T);
      }
      return B;
    }
    function Tt(T, k) {
      for (var N = -1, B = T == null ? 0 : T.length; ++N < B && k(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function xw(T, k) {
      for (var N = T == null ? 0 : T.length; N-- && k(T[N], N, T) !== !1; )
        ;
      return T;
    }
    function Fu(T, k) {
      for (var N = -1, B = T == null ? 0 : T.length; ++N < B; )
        if (!k(T[N], N, T))
          return !1;
      return !0;
    }
    function mn(T, k) {
      for (var N = -1, B = T == null ? 0 : T.length, H = 0, re = []; ++N < B; ) {
        var Je = T[N];
        k(Je, N, T) && (re[H++] = Je);
      }
      return re;
    }
    function Vo(T, k) {
      var N = T == null ? 0 : T.length;
      return !!N && dr(T, k, 0) > -1;
    }
    function ws(T, k, N) {
      for (var B = -1, H = T == null ? 0 : T.length; ++B < H; )
        if (N(k, T[B]))
          return !0;
      return !1;
    }
    function me(T, k) {
      for (var N = -1, B = T == null ? 0 : T.length, H = Array(B); ++N < B; )
        H[N] = k(T[N], N, T);
      return H;
    }
    function wn(T, k) {
      for (var N = -1, B = k.length, H = T.length; ++N < B; )
        T[H + N] = k[N];
      return T;
    }
    function vs(T, k, N, B) {
      var H = -1, re = T == null ? 0 : T.length;
      for (B && re && (N = T[++H]); ++H < re; )
        N = k(N, T[H], H, T);
      return N;
    }
    function Bw(T, k, N, B) {
      var H = T == null ? 0 : T.length;
      for (B && H && (N = T[--H]); H--; )
        N = k(N, T[H], H, T);
      return N;
    }
    function Vs(T, k) {
      for (var N = -1, B = T == null ? 0 : T.length; ++N < B; )
        if (k(T[N], N, T))
          return !0;
      return !1;
    }
    var Dw = Ts("length");
    function Iw(T) {
      return T.split("");
    }
    function Ow(T) {
      return T.match(j1) || [];
    }
    function Au(T, k, N) {
      var B;
      return N(T, function(H, re, Je) {
        if (k(H, re, Je))
          return B = re, !1;
      }), B;
    }
    function To(T, k, N, B) {
      for (var H = T.length, re = N + (B ? 1 : -1); B ? re-- : ++re < H; )
        if (k(T[re], re, T))
          return re;
      return -1;
    }
    function dr(T, k, N) {
      return k === k ? qw(T, k, N) : To(T, Wu, N);
    }
    function Qw(T, k, N, B) {
      for (var H = N - 1, re = T.length; ++H < re; )
        if (B(T[H], k))
          return H;
      return -1;
    }
    function Wu(T) {
      return T !== T;
    }
    function Cu(T, k) {
      var N = T == null ? 0 : T.length;
      return N ? Us(T, k) / N : co;
    }
    function Ts(T) {
      return function(k) {
        return k == null ? r : k[T];
      };
    }
    function gs(T) {
      return function(k) {
        return T == null ? r : T[k];
      };
    }
    function xu(T, k, N, B, H) {
      return H(T, function(re, Je, ue) {
        N = B ? (B = !1, re) : k(N, re, Je, ue);
      }), N;
    }
    function _w(T, k) {
      var N = T.length;
      for (T.sort(k); N--; )
        T[N] = T[N].value;
      return T;
    }
    function Us(T, k) {
      for (var N, B = -1, H = T.length; ++B < H; ) {
        var re = k(T[B]);
        re !== r && (N = N === r ? re : N + re);
      }
      return N;
    }
    function Rs(T, k) {
      for (var N = -1, B = Array(T); ++N < T; )
        B[N] = k(N);
      return B;
    }
    function zw(T, k) {
      return me(k, function(N) {
        return [N, T[N]];
      });
    }
    function Bu(T) {
      return T && T.slice(0, Qu(T) + 1).replace(ls, "");
    }
    function at(T) {
      return function(k) {
        return T(k);
      };
    }
    function Ns(T, k) {
      return me(k, function(N) {
        return T[N];
      });
    }
    function ai(T, k) {
      return T.has(k);
    }
    function Du(T, k) {
      for (var N = -1, B = T.length; ++N < B && dr(k, T[N], 0) > -1; )
        ;
      return N;
    }
    function Iu(T, k) {
      for (var N = T.length; N-- && dr(k, T[N], 0) > -1; )
        ;
      return N;
    }
    function Gw(T, k) {
      for (var N = T.length, B = 0; N--; )
        T[N] === k && ++B;
      return B;
    }
    var Yw = gs(Jw), Pw = gs(bw);
    function Hw(T) {
      return "\\" + Sw[T];
    }
    function jw(T, k) {
      return T == null ? r : T[k];
    }
    function hr(T) {
      return yw.test(T);
    }
    function Xw(T) {
      return Mw.test(T);
    }
    function Lw(T) {
      for (var k, N = []; !(k = T.next()).done; )
        N.push(k.value);
      return N;
    }
    function ys(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(B, H) {
        N[++k] = [H, B];
      }), N;
    }
    function Ou(T, k) {
      return function(N) {
        return T(k(N));
      };
    }
    function vn(T, k) {
      for (var N = -1, B = T.length, H = 0, re = []; ++N < B; ) {
        var Je = T[N];
        (Je === k || Je === U) && (T[N] = U, re[H++] = N);
      }
      return re;
    }
    function go(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(B) {
        N[++k] = B;
      }), N;
    }
    function $w(T) {
      var k = -1, N = Array(T.size);
      return T.forEach(function(B) {
        N[++k] = [B, B];
      }), N;
    }
    function qw(T, k, N) {
      for (var B = N - 1, H = T.length; ++B < H; )
        if (T[B] === k)
          return B;
      return -1;
    }
    function Kw(T, k, N) {
      for (var B = N + 1; B--; )
        if (T[B] === k)
          return B;
      return B;
    }
    function fr(T) {
      return hr(T) ? tv(T) : Dw(T);
    }
    function Ft(T) {
      return hr(T) ? nv(T) : Iw(T);
    }
    function Qu(T) {
      for (var k = T.length; k-- && G1.test(T.charAt(k)); )
        ;
      return k;
    }
    var ev = gs(Ew);
    function tv(T) {
      for (var k = fs.lastIndex = 0; fs.test(T); )
        ++k;
      return k;
    }
    function nv(T) {
      return T.match(fs) || [];
    }
    function rv(T) {
      return T.match(Nw) || [];
    }
    var iv = function T(k) {
      k = k == null ? xe : pr.defaults(xe.Object(), k, pr.pick(xe, kw));
      var N = k.Array, B = k.Date, H = k.Error, re = k.Function, Je = k.Math, ue = k.Object, Ms = k.RegExp, ov = k.String, gt = k.TypeError, Uo = N.prototype, av = re.prototype, mr = ue.prototype, Ro = k["__core-js_shared__"], No = av.toString, se = mr.hasOwnProperty, sv = 0, _u = function() {
        var e = /[^.]+$/.exec(Ro && Ro.keys && Ro.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), yo = mr.toString, lv = No.call(ue), cv = xe._, uv = Ms(
        "^" + No.call(se).replace(ss, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Mo = Mu ? k.Buffer : r, Vn = k.Symbol, ko = k.Uint8Array, zu = Mo ? Mo.allocUnsafe : r, Zo = Ou(ue.getPrototypeOf, ue), Gu = ue.create, Yu = mr.propertyIsEnumerable, Jo = Uo.splice, Pu = Vn ? Vn.isConcatSpreadable : r, si = Vn ? Vn.iterator : r, xn = Vn ? Vn.toStringTag : r, bo = function() {
        try {
          var e = Qn(ue, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), dv = k.clearTimeout !== xe.clearTimeout && k.clearTimeout, hv = B && B.now !== xe.Date.now && B.now, fv = k.setTimeout !== xe.setTimeout && k.setTimeout, Eo = Je.ceil, So = Je.floor, ks = ue.getOwnPropertySymbols, pv = Mo ? Mo.isBuffer : r, Hu = k.isFinite, mv = Uo.join, wv = Ou(ue.keys, ue), be = Je.max, Qe = Je.min, vv = B.now, Vv = k.parseInt, ju = Je.random, Tv = Uo.reverse, Zs = Qn(k, "DataView"), li = Qn(k, "Map"), Js = Qn(k, "Promise"), wr = Qn(k, "Set"), ci = Qn(k, "WeakMap"), ui = Qn(ue, "create"), Fo = ci && new ci(), vr = {}, gv = _n(Zs), Uv = _n(li), Rv = _n(Js), Nv = _n(wr), yv = _n(ci), Ao = Vn ? Vn.prototype : r, di = Ao ? Ao.valueOf : r, Xu = Ao ? Ao.toString : r;
      function h(e) {
        if (Te(e) && !j(e) && !(e instanceof ee)) {
          if (e instanceof Ut)
            return e;
          if (se.call(e, "__wrapped__"))
            return Ld(e);
        }
        return new Ut(e);
      }
      var Vr = function() {
        function e() {
        }
        return function(n) {
          if (!we(n))
            return {};
          if (Gu)
            return Gu(n);
          e.prototype = n;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function Wo() {
      }
      function Ut(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: D1,
        evaluate: I1,
        interpolate: iu,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Wo.prototype, h.prototype.constructor = h, Ut.prototype = Vr(Wo.prototype), Ut.prototype.constructor = Ut;
      function ee(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = _t, this.__views__ = [];
      }
      function Mv() {
        var e = new ee(this.__wrapped__);
        return e.__actions__ = $e(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = $e(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = $e(this.__views__), e;
      }
      function kv() {
        if (this.__filtered__) {
          var e = new ee(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Zv() {
        var e = this.__wrapped__.value(), n = this.__dir__, o = j(e), s = n < 0, u = o ? e.length : 0, f = I0(0, u, this.__views__), m = f.start, v = f.end, g = v - m, Z = s ? v : m - 1, J = this.__iteratees__, b = J.length, S = 0, I = Qe(g, this.__takeCount__);
        if (!o || !s && u == g && I == g)
          return Td(e, this.__actions__);
        var G = [];
        e:
          for (; g-- && S < I; ) {
            Z += n;
            for (var L = -1, Y = e[Z]; ++L < b; ) {
              var K = J[L], ne = K.iteratee, ct = K.type, Xe = ne(Y);
              if (ct == ce)
                Y = Xe;
              else if (!Xe) {
                if (ct == Me)
                  continue e;
                break e;
              }
            }
            G[S++] = Y;
          }
        return G;
      }
      ee.prototype = Vr(Wo.prototype), ee.prototype.constructor = ee;
      function Bn(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function Jv() {
        this.__data__ = ui ? ui(null) : {}, this.size = 0;
      }
      function bv(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Ev(e) {
        var n = this.__data__;
        if (ui) {
          var o = n[e];
          return o === w ? r : o;
        }
        return se.call(n, e) ? n[e] : r;
      }
      function Sv(e) {
        var n = this.__data__;
        return ui ? n[e] !== r : se.call(n, e);
      }
      function Fv(e, n) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = ui && n === r ? w : n, this;
      }
      Bn.prototype.clear = Jv, Bn.prototype.delete = bv, Bn.prototype.get = Ev, Bn.prototype.has = Sv, Bn.prototype.set = Fv;
      function $t(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function Av() {
        this.__data__ = [], this.size = 0;
      }
      function Wv(e) {
        var n = this.__data__, o = Co(n, e);
        if (o < 0)
          return !1;
        var s = n.length - 1;
        return o == s ? n.pop() : Jo.call(n, o, 1), --this.size, !0;
      }
      function Cv(e) {
        var n = this.__data__, o = Co(n, e);
        return o < 0 ? r : n[o][1];
      }
      function xv(e) {
        return Co(this.__data__, e) > -1;
      }
      function Bv(e, n) {
        var o = this.__data__, s = Co(o, e);
        return s < 0 ? (++this.size, o.push([e, n])) : o[s][1] = n, this;
      }
      $t.prototype.clear = Av, $t.prototype.delete = Wv, $t.prototype.get = Cv, $t.prototype.has = xv, $t.prototype.set = Bv;
      function qt(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function Dv() {
        this.size = 0, this.__data__ = {
          hash: new Bn(),
          map: new (li || $t)(),
          string: new Bn()
        };
      }
      function Iv(e) {
        var n = Ho(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function Ov(e) {
        return Ho(this, e).get(e);
      }
      function Qv(e) {
        return Ho(this, e).has(e);
      }
      function _v(e, n) {
        var o = Ho(this, e), s = o.size;
        return o.set(e, n), this.size += o.size == s ? 0 : 1, this;
      }
      qt.prototype.clear = Dv, qt.prototype.delete = Iv, qt.prototype.get = Ov, qt.prototype.has = Qv, qt.prototype.set = _v;
      function Dn(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new qt(); ++n < o; )
          this.add(e[n]);
      }
      function zv(e) {
        return this.__data__.set(e, w), this;
      }
      function Gv(e) {
        return this.__data__.has(e);
      }
      Dn.prototype.add = Dn.prototype.push = zv, Dn.prototype.has = Gv;
      function At(e) {
        var n = this.__data__ = new $t(e);
        this.size = n.size;
      }
      function Yv() {
        this.__data__ = new $t(), this.size = 0;
      }
      function Pv(e) {
        var n = this.__data__, o = n.delete(e);
        return this.size = n.size, o;
      }
      function Hv(e) {
        return this.__data__.get(e);
      }
      function jv(e) {
        return this.__data__.has(e);
      }
      function Xv(e, n) {
        var o = this.__data__;
        if (o instanceof $t) {
          var s = o.__data__;
          if (!li || s.length < l - 1)
            return s.push([e, n]), this.size = ++o.size, this;
          o = this.__data__ = new qt(s);
        }
        return o.set(e, n), this.size = o.size, this;
      }
      At.prototype.clear = Yv, At.prototype.delete = Pv, At.prototype.get = Hv, At.prototype.has = jv, At.prototype.set = Xv;
      function Lu(e, n) {
        var o = j(e), s = !o && zn(e), u = !o && !s && Nn(e), f = !o && !s && !u && Rr(e), m = o || s || u || f, v = m ? Rs(e.length, ov) : [], g = v.length;
        for (var Z in e)
          (n || se.call(e, Z)) && !(m && (Z == "length" || u && (Z == "offset" || Z == "parent") || f && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || nn(Z, g))) && v.push(Z);
        return v;
      }
      function $u(e) {
        var n = e.length;
        return n ? e[Is(0, n - 1)] : r;
      }
      function Lv(e, n) {
        return jo($e(e), In(n, 0, e.length));
      }
      function $v(e) {
        return jo($e(e));
      }
      function bs(e, n, o) {
        (o !== r && !Wt(e[n], o) || o === r && !(n in e)) && Kt(e, n, o);
      }
      function hi(e, n, o) {
        var s = e[n];
        (!(se.call(e, n) && Wt(s, o)) || o === r && !(n in e)) && Kt(e, n, o);
      }
      function Co(e, n) {
        for (var o = e.length; o--; )
          if (Wt(e[o][0], n))
            return o;
        return -1;
      }
      function qv(e, n, o, s) {
        return Tn(e, function(u, f, m) {
          n(s, u, o(u), m);
        }), s;
      }
      function qu(e, n) {
        return e && Gt(n, Se(n), e);
      }
      function Kv(e, n) {
        return e && Gt(n, Ke(n), e);
      }
      function Kt(e, n, o) {
        n == "__proto__" && bo ? bo(e, n, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[n] = o;
      }
      function Es(e, n) {
        for (var o = -1, s = n.length, u = N(s), f = e == null; ++o < s; )
          u[o] = f ? r : ul(e, n[o]);
        return u;
      }
      function In(e, n, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), n !== r && (e = e >= n ? e : n)), e;
      }
      function Rt(e, n, o, s, u, f) {
        var m, v = n & R, g = n & y, Z = n & F;
        if (o && (m = u ? o(e, s, u, f) : o(e)), m !== r)
          return m;
        if (!we(e))
          return e;
        var J = j(e);
        if (J) {
          if (m = Q0(e), !v)
            return $e(e, m);
        } else {
          var b = _e(e), S = b == fo || b == eu;
          if (Nn(e))
            return Rd(e, v);
          if (b == Lt || b == lr || S && !u) {
            if (m = g || S ? {} : Qd(e), !v)
              return g ? E0(e, Kv(m, e)) : b0(e, qu(m, e));
          } else {
            if (!fe[b])
              return u ? e : {};
            m = _0(e, b, v);
          }
        }
        f || (f = new At());
        var I = f.get(e);
        if (I)
          return I;
        f.set(e, m), wh(e) ? e.forEach(function(Y) {
          m.add(Rt(Y, n, o, Y, e, f));
        }) : ph(e) && e.forEach(function(Y, K) {
          m.set(K, Rt(Y, n, o, K, e, f));
        });
        var G = Z ? g ? Ls : Xs : g ? Ke : Se, L = J ? r : G(e);
        return Tt(L || e, function(Y, K) {
          L && (K = Y, Y = e[K]), hi(m, K, Rt(Y, n, o, K, e, f));
        }), m;
      }
      function e0(e) {
        var n = Se(e);
        return function(o) {
          return Ku(o, e, n);
        };
      }
      function Ku(e, n, o) {
        var s = o.length;
        if (e == null)
          return !s;
        for (e = ue(e); s--; ) {
          var u = o[s], f = n[u], m = e[u];
          if (m === r && !(u in e) || !f(m))
            return !1;
        }
        return !0;
      }
      function ed(e, n, o) {
        if (typeof e != "function")
          throw new gt(d);
        return Ti(function() {
          e.apply(r, o);
        }, n);
      }
      function fi(e, n, o, s) {
        var u = -1, f = Vo, m = !0, v = e.length, g = [], Z = n.length;
        if (!v)
          return g;
        o && (n = me(n, at(o))), s ? (f = ws, m = !1) : n.length >= l && (f = ai, m = !1, n = new Dn(n));
        e:
          for (; ++u < v; ) {
            var J = e[u], b = o == null ? J : o(J);
            if (J = s || J !== 0 ? J : 0, m && b === b) {
              for (var S = Z; S--; )
                if (n[S] === b)
                  continue e;
              g.push(J);
            } else
              f(n, b, s) || g.push(J);
          }
        return g;
      }
      var Tn = Zd(zt), td = Zd(Fs, !0);
      function t0(e, n) {
        var o = !0;
        return Tn(e, function(s, u, f) {
          return o = !!n(s, u, f), o;
        }), o;
      }
      function xo(e, n, o) {
        for (var s = -1, u = e.length; ++s < u; ) {
          var f = e[s], m = n(f);
          if (m != null && (v === r ? m === m && !lt(m) : o(m, v)))
            var v = m, g = f;
        }
        return g;
      }
      function n0(e, n, o, s) {
        var u = e.length;
        for (o = X(o), o < 0 && (o = -o > u ? 0 : u + o), s = s === r || s > u ? u : X(s), s < 0 && (s += u), s = o > s ? 0 : Vh(s); o < s; )
          e[o++] = n;
        return e;
      }
      function nd(e, n) {
        var o = [];
        return Tn(e, function(s, u, f) {
          n(s, u, f) && o.push(s);
        }), o;
      }
      function Be(e, n, o, s, u) {
        var f = -1, m = e.length;
        for (o || (o = G0), u || (u = []); ++f < m; ) {
          var v = e[f];
          n > 0 && o(v) ? n > 1 ? Be(v, n - 1, o, s, u) : wn(u, v) : s || (u[u.length] = v);
        }
        return u;
      }
      var Ss = Jd(), rd = Jd(!0);
      function zt(e, n) {
        return e && Ss(e, n, Se);
      }
      function Fs(e, n) {
        return e && rd(e, n, Se);
      }
      function Bo(e, n) {
        return mn(n, function(o) {
          return rn(e[o]);
        });
      }
      function On(e, n) {
        n = Un(n, e);
        for (var o = 0, s = n.length; e != null && o < s; )
          e = e[Yt(n[o++])];
        return o && o == s ? e : r;
      }
      function id(e, n, o) {
        var s = n(e);
        return j(e) ? s : wn(s, o(e));
      }
      function He(e) {
        return e == null ? e === r ? S1 : b1 : xn && xn in ue(e) ? D0(e) : $0(e);
      }
      function As(e, n) {
        return e > n;
      }
      function r0(e, n) {
        return e != null && se.call(e, n);
      }
      function i0(e, n) {
        return e != null && n in ue(e);
      }
      function o0(e, n, o) {
        return e >= Qe(n, o) && e < be(n, o);
      }
      function Ws(e, n, o) {
        for (var s = o ? ws : Vo, u = e[0].length, f = e.length, m = f, v = N(f), g = 1 / 0, Z = []; m--; ) {
          var J = e[m];
          m && n && (J = me(J, at(n))), g = Qe(J.length, g), v[m] = !o && (n || u >= 120 && J.length >= 120) ? new Dn(m && J) : r;
        }
        J = e[0];
        var b = -1, S = v[0];
        e:
          for (; ++b < u && Z.length < g; ) {
            var I = J[b], G = n ? n(I) : I;
            if (I = o || I !== 0 ? I : 0, !(S ? ai(S, G) : s(Z, G, o))) {
              for (m = f; --m; ) {
                var L = v[m];
                if (!(L ? ai(L, G) : s(e[m], G, o)))
                  continue e;
              }
              S && S.push(G), Z.push(I);
            }
          }
        return Z;
      }
      function a0(e, n, o, s) {
        return zt(e, function(u, f, m) {
          n(s, o(u), f, m);
        }), s;
      }
      function pi(e, n, o) {
        n = Un(n, e), e = Yd(e, n);
        var s = e == null ? e : e[Yt(yt(n))];
        return s == null ? r : ot(s, e, o);
      }
      function od(e) {
        return Te(e) && He(e) == lr;
      }
      function s0(e) {
        return Te(e) && He(e) == oi;
      }
      function l0(e) {
        return Te(e) && He(e) == ei;
      }
      function mi(e, n, o, s, u) {
        return e === n ? !0 : e == null || n == null || !Te(e) && !Te(n) ? e !== e && n !== n : c0(e, n, o, s, mi, u);
      }
      function c0(e, n, o, s, u, f) {
        var m = j(e), v = j(n), g = m ? uo : _e(e), Z = v ? uo : _e(n);
        g = g == lr ? Lt : g, Z = Z == lr ? Lt : Z;
        var J = g == Lt, b = Z == Lt, S = g == Z;
        if (S && Nn(e)) {
          if (!Nn(n))
            return !1;
          m = !0, J = !1;
        }
        if (S && !J)
          return f || (f = new At()), m || Rr(e) ? Dd(e, n, o, s, u, f) : x0(e, n, g, o, s, u, f);
        if (!(o & E)) {
          var I = J && se.call(e, "__wrapped__"), G = b && se.call(n, "__wrapped__");
          if (I || G) {
            var L = I ? e.value() : e, Y = G ? n.value() : n;
            return f || (f = new At()), u(L, Y, o, s, f);
          }
        }
        return S ? (f || (f = new At()), B0(e, n, o, s, u, f)) : !1;
      }
      function u0(e) {
        return Te(e) && _e(e) == Et;
      }
      function Cs(e, n, o, s) {
        var u = o.length, f = u, m = !s;
        if (e == null)
          return !f;
        for (e = ue(e); u--; ) {
          var v = o[u];
          if (m && v[2] ? v[1] !== e[v[0]] : !(v[0] in e))
            return !1;
        }
        for (; ++u < f; ) {
          v = o[u];
          var g = v[0], Z = e[g], J = v[1];
          if (m && v[2]) {
            if (Z === r && !(g in e))
              return !1;
          } else {
            var b = new At();
            if (s)
              var S = s(Z, J, g, e, n, b);
            if (!(S === r ? mi(J, Z, E | D, s, b) : S))
              return !1;
          }
        }
        return !0;
      }
      function ad(e) {
        if (!we(e) || P0(e))
          return !1;
        var n = rn(e) ? uv : ew;
        return n.test(_n(e));
      }
      function d0(e) {
        return Te(e) && He(e) == ni;
      }
      function h0(e) {
        return Te(e) && _e(e) == St;
      }
      function f0(e) {
        return Te(e) && ea(e.length) && !!pe[He(e)];
      }
      function sd(e) {
        return typeof e == "function" ? e : e == null ? et : typeof e == "object" ? j(e) ? ud(e[0], e[1]) : cd(e) : bh(e);
      }
      function xs(e) {
        if (!Vi(e))
          return wv(e);
        var n = [];
        for (var o in ue(e))
          se.call(e, o) && o != "constructor" && n.push(o);
        return n;
      }
      function p0(e) {
        if (!we(e))
          return L0(e);
        var n = Vi(e), o = [];
        for (var s in e)
          s == "constructor" && (n || !se.call(e, s)) || o.push(s);
        return o;
      }
      function Bs(e, n) {
        return e < n;
      }
      function ld(e, n) {
        var o = -1, s = qe(e) ? N(e.length) : [];
        return Tn(e, function(u, f, m) {
          s[++o] = n(u, f, m);
        }), s;
      }
      function cd(e) {
        var n = qs(e);
        return n.length == 1 && n[0][2] ? zd(n[0][0], n[0][1]) : function(o) {
          return o === e || Cs(o, e, n);
        };
      }
      function ud(e, n) {
        return el(e) && _d(n) ? zd(Yt(e), n) : function(o) {
          var s = ul(o, e);
          return s === r && s === n ? dl(o, e) : mi(n, s, E | D);
        };
      }
      function Do(e, n, o, s, u) {
        e !== n && Ss(n, function(f, m) {
          if (u || (u = new At()), we(f))
            m0(e, n, m, o, Do, s, u);
          else {
            var v = s ? s(nl(e, m), f, m + "", e, n, u) : r;
            v === r && (v = f), bs(e, m, v);
          }
        }, Ke);
      }
      function m0(e, n, o, s, u, f, m) {
        var v = nl(e, o), g = nl(n, o), Z = m.get(g);
        if (Z) {
          bs(e, o, Z);
          return;
        }
        var J = f ? f(v, g, o + "", e, n, m) : r, b = J === r;
        if (b) {
          var S = j(g), I = !S && Nn(g), G = !S && !I && Rr(g);
          J = g, S || I || G ? j(v) ? J = v : Ue(v) ? J = $e(v) : I ? (b = !1, J = Rd(g, !0)) : G ? (b = !1, J = Nd(g, !0)) : J = [] : gi(g) || zn(g) ? (J = v, zn(v) ? J = Th(v) : (!we(v) || rn(v)) && (J = Qd(g))) : b = !1;
        }
        b && (m.set(g, J), u(J, g, s, f, m), m.delete(g)), bs(e, o, J);
      }
      function dd(e, n) {
        var o = e.length;
        if (!!o)
          return n += n < 0 ? o : 0, nn(n, o) ? e[n] : r;
      }
      function hd(e, n, o) {
        n.length ? n = me(n, function(f) {
          return j(f) ? function(m) {
            return On(m, f.length === 1 ? f[0] : f);
          } : f;
        }) : n = [et];
        var s = -1;
        n = me(n, at(_()));
        var u = ld(e, function(f, m, v) {
          var g = me(n, function(Z) {
            return Z(f);
          });
          return { criteria: g, index: ++s, value: f };
        });
        return _w(u, function(f, m) {
          return J0(f, m, o);
        });
      }
      function w0(e, n) {
        return fd(e, n, function(o, s) {
          return dl(e, s);
        });
      }
      function fd(e, n, o) {
        for (var s = -1, u = n.length, f = {}; ++s < u; ) {
          var m = n[s], v = On(e, m);
          o(v, m) && wi(f, Un(m, e), v);
        }
        return f;
      }
      function v0(e) {
        return function(n) {
          return On(n, e);
        };
      }
      function Ds(e, n, o, s) {
        var u = s ? Qw : dr, f = -1, m = n.length, v = e;
        for (e === n && (n = $e(n)), o && (v = me(e, at(o))); ++f < m; )
          for (var g = 0, Z = n[f], J = o ? o(Z) : Z; (g = u(v, J, g, s)) > -1; )
            v !== e && Jo.call(v, g, 1), Jo.call(e, g, 1);
        return e;
      }
      function pd(e, n) {
        for (var o = e ? n.length : 0, s = o - 1; o--; ) {
          var u = n[o];
          if (o == s || u !== f) {
            var f = u;
            nn(u) ? Jo.call(e, u, 1) : _s(e, u);
          }
        }
        return e;
      }
      function Is(e, n) {
        return e + So(ju() * (n - e + 1));
      }
      function V0(e, n, o, s) {
        for (var u = -1, f = be(Eo((n - e) / (o || 1)), 0), m = N(f); f--; )
          m[s ? f : ++u] = e, e += o;
        return m;
      }
      function Os(e, n) {
        var o = "";
        if (!e || n < 1 || n > Pe)
          return o;
        do
          n % 2 && (o += e), n = So(n / 2), n && (e += e);
        while (n);
        return o;
      }
      function $(e, n) {
        return rl(Gd(e, n, et), e + "");
      }
      function T0(e) {
        return $u(Nr(e));
      }
      function g0(e, n) {
        var o = Nr(e);
        return jo(o, In(n, 0, o.length));
      }
      function wi(e, n, o, s) {
        if (!we(e))
          return e;
        n = Un(n, e);
        for (var u = -1, f = n.length, m = f - 1, v = e; v != null && ++u < f; ) {
          var g = Yt(n[u]), Z = o;
          if (g === "__proto__" || g === "constructor" || g === "prototype")
            return e;
          if (u != m) {
            var J = v[g];
            Z = s ? s(J, g, v) : r, Z === r && (Z = we(J) ? J : nn(n[u + 1]) ? [] : {});
          }
          hi(v, g, Z), v = v[g];
        }
        return e;
      }
      var md = Fo ? function(e, n) {
        return Fo.set(e, n), e;
      } : et, U0 = bo ? function(e, n) {
        return bo(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: fl(n),
          writable: !0
        });
      } : et;
      function R0(e) {
        return jo(Nr(e));
      }
      function Nt(e, n, o) {
        var s = -1, u = e.length;
        n < 0 && (n = -n > u ? 0 : u + n), o = o > u ? u : o, o < 0 && (o += u), u = n > o ? 0 : o - n >>> 0, n >>>= 0;
        for (var f = N(u); ++s < u; )
          f[s] = e[s + n];
        return f;
      }
      function N0(e, n) {
        var o;
        return Tn(e, function(s, u, f) {
          return o = n(s, u, f), !o;
        }), !!o;
      }
      function Io(e, n, o) {
        var s = 0, u = e == null ? s : e.length;
        if (typeof n == "number" && n === n && u <= M1) {
          for (; s < u; ) {
            var f = s + u >>> 1, m = e[f];
            m !== null && !lt(m) && (o ? m <= n : m < n) ? s = f + 1 : u = f;
          }
          return u;
        }
        return Qs(e, n, et, o);
      }
      function Qs(e, n, o, s) {
        var u = 0, f = e == null ? 0 : e.length;
        if (f === 0)
          return 0;
        n = o(n);
        for (var m = n !== n, v = n === null, g = lt(n), Z = n === r; u < f; ) {
          var J = So((u + f) / 2), b = o(e[J]), S = b !== r, I = b === null, G = b === b, L = lt(b);
          if (m)
            var Y = s || G;
          else
            Z ? Y = G && (s || S) : v ? Y = G && S && (s || !I) : g ? Y = G && S && !I && (s || !L) : I || L ? Y = !1 : Y = s ? b <= n : b < n;
          Y ? u = J + 1 : f = J;
        }
        return Qe(f, y1);
      }
      function wd(e, n) {
        for (var o = -1, s = e.length, u = 0, f = []; ++o < s; ) {
          var m = e[o], v = n ? n(m) : m;
          if (!o || !Wt(v, g)) {
            var g = v;
            f[u++] = m === 0 ? 0 : m;
          }
        }
        return f;
      }
      function vd(e) {
        return typeof e == "number" ? e : lt(e) ? co : +e;
      }
      function st(e) {
        if (typeof e == "string")
          return e;
        if (j(e))
          return me(e, st) + "";
        if (lt(e))
          return Xu ? Xu.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -Ce ? "-0" : n;
      }
      function gn(e, n, o) {
        var s = -1, u = Vo, f = e.length, m = !0, v = [], g = v;
        if (o)
          m = !1, u = ws;
        else if (f >= l) {
          var Z = n ? null : W0(e);
          if (Z)
            return go(Z);
          m = !1, u = ai, g = new Dn();
        } else
          g = n ? [] : v;
        e:
          for (; ++s < f; ) {
            var J = e[s], b = n ? n(J) : J;
            if (J = o || J !== 0 ? J : 0, m && b === b) {
              for (var S = g.length; S--; )
                if (g[S] === b)
                  continue e;
              n && g.push(b), v.push(J);
            } else
              u(g, b, o) || (g !== v && g.push(b), v.push(J));
          }
        return v;
      }
      function _s(e, n) {
        return n = Un(n, e), e = Yd(e, n), e == null || delete e[Yt(yt(n))];
      }
      function Vd(e, n, o, s) {
        return wi(e, n, o(On(e, n)), s);
      }
      function Oo(e, n, o, s) {
        for (var u = e.length, f = s ? u : -1; (s ? f-- : ++f < u) && n(e[f], f, e); )
          ;
        return o ? Nt(e, s ? 0 : f, s ? f + 1 : u) : Nt(e, s ? f + 1 : 0, s ? u : f);
      }
      function Td(e, n) {
        var o = e;
        return o instanceof ee && (o = o.value()), vs(n, function(s, u) {
          return u.func.apply(u.thisArg, wn([s], u.args));
        }, o);
      }
      function zs(e, n, o) {
        var s = e.length;
        if (s < 2)
          return s ? gn(e[0]) : [];
        for (var u = -1, f = N(s); ++u < s; )
          for (var m = e[u], v = -1; ++v < s; )
            v != u && (f[u] = fi(f[u] || m, e[v], n, o));
        return gn(Be(f, 1), n, o);
      }
      function gd(e, n, o) {
        for (var s = -1, u = e.length, f = n.length, m = {}; ++s < u; ) {
          var v = s < f ? n[s] : r;
          o(m, e[s], v);
        }
        return m;
      }
      function Gs(e) {
        return Ue(e) ? e : [];
      }
      function Ys(e) {
        return typeof e == "function" ? e : et;
      }
      function Un(e, n) {
        return j(e) ? e : el(e, n) ? [e] : Xd(oe(e));
      }
      var y0 = $;
      function Rn(e, n, o) {
        var s = e.length;
        return o = o === r ? s : o, !n && o >= s ? e : Nt(e, n, o);
      }
      var Ud = dv || function(e) {
        return xe.clearTimeout(e);
      };
      function Rd(e, n) {
        if (n)
          return e.slice();
        var o = e.length, s = zu ? zu(o) : new e.constructor(o);
        return e.copy(s), s;
      }
      function Ps(e) {
        var n = new e.constructor(e.byteLength);
        return new ko(n).set(new ko(e)), n;
      }
      function M0(e, n) {
        var o = n ? Ps(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function k0(e) {
        var n = new e.constructor(e.source, ou.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function Z0(e) {
        return di ? ue(di.call(e)) : {};
      }
      function Nd(e, n) {
        var o = n ? Ps(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function yd(e, n) {
        if (e !== n) {
          var o = e !== r, s = e === null, u = e === e, f = lt(e), m = n !== r, v = n === null, g = n === n, Z = lt(n);
          if (!v && !Z && !f && e > n || f && m && g && !v && !Z || s && m && g || !o && g || !u)
            return 1;
          if (!s && !f && !Z && e < n || Z && o && u && !s && !f || v && o && u || !m && u || !g)
            return -1;
        }
        return 0;
      }
      function J0(e, n, o) {
        for (var s = -1, u = e.criteria, f = n.criteria, m = u.length, v = o.length; ++s < m; ) {
          var g = yd(u[s], f[s]);
          if (g) {
            if (s >= v)
              return g;
            var Z = o[s];
            return g * (Z == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Md(e, n, o, s) {
        for (var u = -1, f = e.length, m = o.length, v = -1, g = n.length, Z = be(f - m, 0), J = N(g + Z), b = !s; ++v < g; )
          J[v] = n[v];
        for (; ++u < m; )
          (b || u < f) && (J[o[u]] = e[u]);
        for (; Z--; )
          J[v++] = e[u++];
        return J;
      }
      function kd(e, n, o, s) {
        for (var u = -1, f = e.length, m = -1, v = o.length, g = -1, Z = n.length, J = be(f - v, 0), b = N(J + Z), S = !s; ++u < J; )
          b[u] = e[u];
        for (var I = u; ++g < Z; )
          b[I + g] = n[g];
        for (; ++m < v; )
          (S || u < f) && (b[I + o[m]] = e[u++]);
        return b;
      }
      function $e(e, n) {
        var o = -1, s = e.length;
        for (n || (n = N(s)); ++o < s; )
          n[o] = e[o];
        return n;
      }
      function Gt(e, n, o, s) {
        var u = !o;
        o || (o = {});
        for (var f = -1, m = n.length; ++f < m; ) {
          var v = n[f], g = s ? s(o[v], e[v], v, o, e) : r;
          g === r && (g = e[v]), u ? Kt(o, v, g) : hi(o, v, g);
        }
        return o;
      }
      function b0(e, n) {
        return Gt(e, Ks(e), n);
      }
      function E0(e, n) {
        return Gt(e, Id(e), n);
      }
      function Qo(e, n) {
        return function(o, s) {
          var u = j(o) ? Cw : qv, f = n ? n() : {};
          return u(o, e, _(s, 2), f);
        };
      }
      function Tr(e) {
        return $(function(n, o) {
          var s = -1, u = o.length, f = u > 1 ? o[u - 1] : r, m = u > 2 ? o[2] : r;
          for (f = e.length > 3 && typeof f == "function" ? (u--, f) : r, m && je(o[0], o[1], m) && (f = u < 3 ? r : f, u = 1), n = ue(n); ++s < u; ) {
            var v = o[s];
            v && e(n, v, s, f);
          }
          return n;
        });
      }
      function Zd(e, n) {
        return function(o, s) {
          if (o == null)
            return o;
          if (!qe(o))
            return e(o, s);
          for (var u = o.length, f = n ? u : -1, m = ue(o); (n ? f-- : ++f < u) && s(m[f], f, m) !== !1; )
            ;
          return o;
        };
      }
      function Jd(e) {
        return function(n, o, s) {
          for (var u = -1, f = ue(n), m = s(n), v = m.length; v--; ) {
            var g = m[e ? v : ++u];
            if (o(f[g], g, f) === !1)
              break;
          }
          return n;
        };
      }
      function S0(e, n, o) {
        var s = n & C, u = vi(e);
        function f() {
          var m = this && this !== xe && this instanceof f ? u : e;
          return m.apply(s ? o : this, arguments);
        }
        return f;
      }
      function bd(e) {
        return function(n) {
          n = oe(n);
          var o = hr(n) ? Ft(n) : r, s = o ? o[0] : n.charAt(0), u = o ? Rn(o, 1).join("") : n.slice(1);
          return s[e]() + u;
        };
      }
      function gr(e) {
        return function(n) {
          return vs(Zh(kh(n).replace(Uw, "")), e, "");
        };
      }
      function vi(e) {
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
          var o = Vr(e.prototype), s = e.apply(o, n);
          return we(s) ? s : o;
        };
      }
      function F0(e, n, o) {
        var s = vi(e);
        function u() {
          for (var f = arguments.length, m = N(f), v = f, g = Ur(u); v--; )
            m[v] = arguments[v];
          var Z = f < 3 && m[0] !== g && m[f - 1] !== g ? [] : vn(m, g);
          if (f -= Z.length, f < o)
            return Wd(
              e,
              n,
              _o,
              u.placeholder,
              r,
              m,
              Z,
              r,
              r,
              o - f
            );
          var J = this && this !== xe && this instanceof u ? s : e;
          return ot(J, this, m);
        }
        return u;
      }
      function Ed(e) {
        return function(n, o, s) {
          var u = ue(n);
          if (!qe(n)) {
            var f = _(o, 3);
            n = Se(n), o = function(v) {
              return f(u[v], v, u);
            };
          }
          var m = e(n, o, s);
          return m > -1 ? u[f ? n[m] : m] : r;
        };
      }
      function Sd(e) {
        return tn(function(n) {
          var o = n.length, s = o, u = Ut.prototype.thru;
          for (e && n.reverse(); s--; ) {
            var f = n[s];
            if (typeof f != "function")
              throw new gt(d);
            if (u && !m && Po(f) == "wrapper")
              var m = new Ut([], !0);
          }
          for (s = m ? s : o; ++s < o; ) {
            f = n[s];
            var v = Po(f), g = v == "wrapper" ? $s(f) : r;
            g && tl(g[0]) && g[1] == (x | O | M | z) && !g[4].length && g[9] == 1 ? m = m[Po(g[0])].apply(m, g[3]) : m = f.length == 1 && tl(f) ? m[v]() : m.thru(f);
          }
          return function() {
            var Z = arguments, J = Z[0];
            if (m && Z.length == 1 && j(J))
              return m.plant(J).value();
            for (var b = 0, S = o ? n[b].apply(this, Z) : J; ++b < o; )
              S = n[b].call(this, S);
            return S;
          };
        });
      }
      function _o(e, n, o, s, u, f, m, v, g, Z) {
        var J = n & x, b = n & C, S = n & A, I = n & (O | P), G = n & de, L = S ? r : vi(e);
        function Y() {
          for (var K = arguments.length, ne = N(K), ct = K; ct--; )
            ne[ct] = arguments[ct];
          if (I)
            var Xe = Ur(Y), ut = Gw(ne, Xe);
          if (s && (ne = Md(ne, s, u, I)), f && (ne = kd(ne, f, m, I)), K -= ut, I && K < Z) {
            var Re = vn(ne, Xe);
            return Wd(
              e,
              n,
              _o,
              Y.placeholder,
              o,
              ne,
              Re,
              v,
              g,
              Z - K
            );
          }
          var Ct = b ? o : this, an = S ? Ct[e] : e;
          return K = ne.length, v ? ne = q0(ne, v) : G && K > 1 && ne.reverse(), J && g < K && (ne.length = g), this && this !== xe && this instanceof Y && (an = L || vi(an)), an.apply(Ct, ne);
        }
        return Y;
      }
      function Fd(e, n) {
        return function(o, s) {
          return a0(o, e, n(s), {});
        };
      }
      function zo(e, n) {
        return function(o, s) {
          var u;
          if (o === r && s === r)
            return n;
          if (o !== r && (u = o), s !== r) {
            if (u === r)
              return s;
            typeof o == "string" || typeof s == "string" ? (o = st(o), s = st(s)) : (o = vd(o), s = vd(s)), u = e(o, s);
          }
          return u;
        };
      }
      function Hs(e) {
        return tn(function(n) {
          return n = me(n, at(_())), $(function(o) {
            var s = this;
            return e(n, function(u) {
              return ot(u, s, o);
            });
          });
        });
      }
      function Go(e, n) {
        n = n === r ? " " : st(n);
        var o = n.length;
        if (o < 2)
          return o ? Os(n, e) : n;
        var s = Os(n, Eo(e / fr(n)));
        return hr(n) ? Rn(Ft(s), 0, e).join("") : s.slice(0, e);
      }
      function A0(e, n, o, s) {
        var u = n & C, f = vi(e);
        function m() {
          for (var v = -1, g = arguments.length, Z = -1, J = s.length, b = N(J + g), S = this && this !== xe && this instanceof m ? f : e; ++Z < J; )
            b[Z] = s[Z];
          for (; g--; )
            b[Z++] = arguments[++v];
          return ot(S, u ? o : this, b);
        }
        return m;
      }
      function Ad(e) {
        return function(n, o, s) {
          return s && typeof s != "number" && je(n, o, s) && (o = s = r), n = on(n), o === r ? (o = n, n = 0) : o = on(o), s = s === r ? n < o ? 1 : -1 : on(s), V0(n, o, s, e);
        };
      }
      function Yo(e) {
        return function(n, o) {
          return typeof n == "string" && typeof o == "string" || (n = Mt(n), o = Mt(o)), e(n, o);
        };
      }
      function Wd(e, n, o, s, u, f, m, v, g, Z) {
        var J = n & O, b = J ? m : r, S = J ? r : m, I = J ? f : r, G = J ? r : f;
        n |= J ? M : W, n &= ~(J ? W : M), n & Q || (n &= ~(C | A));
        var L = [
          e,
          n,
          u,
          I,
          b,
          G,
          S,
          v,
          g,
          Z
        ], Y = o.apply(r, L);
        return tl(e) && Pd(Y, L), Y.placeholder = s, Hd(Y, e, n);
      }
      function js(e) {
        var n = Je[e];
        return function(o, s) {
          if (o = Mt(o), s = s == null ? 0 : Qe(X(s), 292), s && Hu(o)) {
            var u = (oe(o) + "e").split("e"), f = n(u[0] + "e" + (+u[1] + s));
            return u = (oe(f) + "e").split("e"), +(u[0] + "e" + (+u[1] - s));
          }
          return n(o);
        };
      }
      var W0 = wr && 1 / go(new wr([, -0]))[1] == Ce ? function(e) {
        return new wr(e);
      } : wl;
      function Cd(e) {
        return function(n) {
          var o = _e(n);
          return o == Et ? ys(n) : o == St ? $w(n) : zw(n, e(n));
        };
      }
      function en(e, n, o, s, u, f, m, v) {
        var g = n & A;
        if (!g && typeof e != "function")
          throw new gt(d);
        var Z = s ? s.length : 0;
        if (Z || (n &= ~(M | W), s = u = r), m = m === r ? m : be(X(m), 0), v = v === r ? v : X(v), Z -= u ? u.length : 0, n & W) {
          var J = s, b = u;
          s = u = r;
        }
        var S = g ? r : $s(e), I = [
          e,
          n,
          o,
          s,
          u,
          J,
          b,
          f,
          m,
          v
        ];
        if (S && X0(I, S), e = I[0], n = I[1], o = I[2], s = I[3], u = I[4], v = I[9] = I[9] === r ? g ? 0 : e.length : be(I[9] - Z, 0), !v && n & (O | P) && (n &= ~(O | P)), !n || n == C)
          var G = S0(e, n, o);
        else
          n == O || n == P ? G = F0(e, n, v) : (n == M || n == (C | M)) && !u.length ? G = A0(e, n, o, s) : G = _o.apply(r, I);
        var L = S ? md : Pd;
        return Hd(L(G, I), e, n);
      }
      function xd(e, n, o, s) {
        return e === r || Wt(e, mr[o]) && !se.call(s, o) ? n : e;
      }
      function Bd(e, n, o, s, u, f) {
        return we(e) && we(n) && (f.set(n, e), Do(e, n, r, Bd, f), f.delete(n)), e;
      }
      function C0(e) {
        return gi(e) ? r : e;
      }
      function Dd(e, n, o, s, u, f) {
        var m = o & E, v = e.length, g = n.length;
        if (v != g && !(m && g > v))
          return !1;
        var Z = f.get(e), J = f.get(n);
        if (Z && J)
          return Z == n && J == e;
        var b = -1, S = !0, I = o & D ? new Dn() : r;
        for (f.set(e, n), f.set(n, e); ++b < v; ) {
          var G = e[b], L = n[b];
          if (s)
            var Y = m ? s(L, G, b, n, e, f) : s(G, L, b, e, n, f);
          if (Y !== r) {
            if (Y)
              continue;
            S = !1;
            break;
          }
          if (I) {
            if (!Vs(n, function(K, ne) {
              if (!ai(I, ne) && (G === K || u(G, K, o, s, f)))
                return I.push(ne);
            })) {
              S = !1;
              break;
            }
          } else if (!(G === L || u(G, L, o, s, f))) {
            S = !1;
            break;
          }
        }
        return f.delete(e), f.delete(n), S;
      }
      function x0(e, n, o, s, u, f, m) {
        switch (o) {
          case cr:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case oi:
            return !(e.byteLength != n.byteLength || !f(new ko(e), new ko(n)));
          case Kr:
          case ei:
          case ti:
            return Wt(+e, +n);
          case ho:
            return e.name == n.name && e.message == n.message;
          case ni:
          case ri:
            return e == n + "";
          case Et:
            var v = ys;
          case St:
            var g = s & E;
            if (v || (v = go), e.size != n.size && !g)
              return !1;
            var Z = m.get(e);
            if (Z)
              return Z == n;
            s |= D, m.set(e, n);
            var J = Dd(v(e), v(n), s, u, f, m);
            return m.delete(e), J;
          case po:
            if (di)
              return di.call(e) == di.call(n);
        }
        return !1;
      }
      function B0(e, n, o, s, u, f) {
        var m = o & E, v = Xs(e), g = v.length, Z = Xs(n), J = Z.length;
        if (g != J && !m)
          return !1;
        for (var b = g; b--; ) {
          var S = v[b];
          if (!(m ? S in n : se.call(n, S)))
            return !1;
        }
        var I = f.get(e), G = f.get(n);
        if (I && G)
          return I == n && G == e;
        var L = !0;
        f.set(e, n), f.set(n, e);
        for (var Y = m; ++b < g; ) {
          S = v[b];
          var K = e[S], ne = n[S];
          if (s)
            var ct = m ? s(ne, K, S, n, e, f) : s(K, ne, S, e, n, f);
          if (!(ct === r ? K === ne || u(K, ne, o, s, f) : ct)) {
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
      function tn(e) {
        return rl(Gd(e, r, Kd), e + "");
      }
      function Xs(e) {
        return id(e, Se, Ks);
      }
      function Ls(e) {
        return id(e, Ke, Id);
      }
      var $s = Fo ? function(e) {
        return Fo.get(e);
      } : wl;
      function Po(e) {
        for (var n = e.name + "", o = vr[n], s = se.call(vr, n) ? o.length : 0; s--; ) {
          var u = o[s], f = u.func;
          if (f == null || f == e)
            return u.name;
        }
        return n;
      }
      function Ur(e) {
        var n = se.call(h, "placeholder") ? h : e;
        return n.placeholder;
      }
      function _() {
        var e = h.iteratee || pl;
        return e = e === pl ? sd : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ho(e, n) {
        var o = e.__data__;
        return Y0(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
      }
      function qs(e) {
        for (var n = Se(e), o = n.length; o--; ) {
          var s = n[o], u = e[s];
          n[o] = [s, u, _d(u)];
        }
        return n;
      }
      function Qn(e, n) {
        var o = jw(e, n);
        return ad(o) ? o : r;
      }
      function D0(e) {
        var n = se.call(e, xn), o = e[xn];
        try {
          e[xn] = r;
          var s = !0;
        } catch {
        }
        var u = yo.call(e);
        return s && (n ? e[xn] = o : delete e[xn]), u;
      }
      var Ks = ks ? function(e) {
        return e == null ? [] : (e = ue(e), mn(ks(e), function(n) {
          return Yu.call(e, n);
        }));
      } : vl, Id = ks ? function(e) {
        for (var n = []; e; )
          wn(n, Ks(e)), e = Zo(e);
        return n;
      } : vl, _e = He;
      (Zs && _e(new Zs(new ArrayBuffer(1))) != cr || li && _e(new li()) != Et || Js && _e(Js.resolve()) != tu || wr && _e(new wr()) != St || ci && _e(new ci()) != ii) && (_e = function(e) {
        var n = He(e), o = n == Lt ? e.constructor : r, s = o ? _n(o) : "";
        if (s)
          switch (s) {
            case gv:
              return cr;
            case Uv:
              return Et;
            case Rv:
              return tu;
            case Nv:
              return St;
            case yv:
              return ii;
          }
        return n;
      });
      function I0(e, n, o) {
        for (var s = -1, u = o.length; ++s < u; ) {
          var f = o[s], m = f.size;
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
              e = be(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function O0(e) {
        var n = e.match(P1);
        return n ? n[1].split(H1) : [];
      }
      function Od(e, n, o) {
        n = Un(n, e);
        for (var s = -1, u = n.length, f = !1; ++s < u; ) {
          var m = Yt(n[s]);
          if (!(f = e != null && o(e, m)))
            break;
          e = e[m];
        }
        return f || ++s != u ? f : (u = e == null ? 0 : e.length, !!u && ea(u) && nn(m, u) && (j(e) || zn(e)));
      }
      function Q0(e) {
        var n = e.length, o = new e.constructor(n);
        return n && typeof e[0] == "string" && se.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function Qd(e) {
        return typeof e.constructor == "function" && !Vi(e) ? Vr(Zo(e)) : {};
      }
      function _0(e, n, o) {
        var s = e.constructor;
        switch (n) {
          case oi:
            return Ps(e);
          case Kr:
          case ei:
            return new s(+e);
          case cr:
            return M0(e, o);
          case qa:
          case Ka:
          case es:
          case ts:
          case ns:
          case rs:
          case is:
          case os:
          case as:
            return Nd(e, o);
          case Et:
            return new s();
          case ti:
          case ri:
            return new s(e);
          case ni:
            return k0(e);
          case St:
            return new s();
          case po:
            return Z0(e);
        }
      }
      function z0(e, n) {
        var o = n.length;
        if (!o)
          return e;
        var s = o - 1;
        return n[s] = (o > 1 ? "& " : "") + n[s], n = n.join(o > 2 ? ", " : " "), e.replace(Y1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function G0(e) {
        return j(e) || zn(e) || !!(Pu && e && e[Pu]);
      }
      function nn(e, n) {
        var o = typeof e;
        return n = n == null ? Pe : n, !!n && (o == "number" || o != "symbol" && nw.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function je(e, n, o) {
        if (!we(o))
          return !1;
        var s = typeof n;
        return (s == "number" ? qe(o) && nn(n, o.length) : s == "string" && n in o) ? Wt(o[n], e) : !1;
      }
      function el(e, n) {
        if (j(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || lt(e) ? !0 : Q1.test(e) || !O1.test(e) || n != null && e in ue(n);
      }
      function Y0(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function tl(e) {
        var n = Po(e), o = h[n];
        if (typeof o != "function" || !(n in ee.prototype))
          return !1;
        if (e === o)
          return !0;
        var s = $s(o);
        return !!s && e === s[0];
      }
      function P0(e) {
        return !!_u && _u in e;
      }
      var H0 = Ro ? rn : Vl;
      function Vi(e) {
        var n = e && e.constructor, o = typeof n == "function" && n.prototype || mr;
        return e === o;
      }
      function _d(e) {
        return e === e && !we(e);
      }
      function zd(e, n) {
        return function(o) {
          return o == null ? !1 : o[e] === n && (n !== r || e in ue(o));
        };
      }
      function j0(e) {
        var n = qo(e, function(s) {
          return o.size === V && o.clear(), s;
        }), o = n.cache;
        return n;
      }
      function X0(e, n) {
        var o = e[1], s = n[1], u = o | s, f = u < (C | A | x), m = s == x && o == O || s == x && o == z && e[7].length <= n[8] || s == (x | z) && n[7].length <= n[8] && o == O;
        if (!(f || m))
          return e;
        s & C && (e[2] = n[2], u |= o & C ? 0 : Q);
        var v = n[3];
        if (v) {
          var g = e[3];
          e[3] = g ? Md(g, v, n[4]) : v, e[4] = g ? vn(e[3], U) : n[4];
        }
        return v = n[5], v && (g = e[5], e[5] = g ? kd(g, v, n[6]) : v, e[6] = g ? vn(e[5], U) : n[6]), v = n[7], v && (e[7] = v), s & x && (e[8] = e[8] == null ? n[8] : Qe(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = u, e;
      }
      function L0(e) {
        var n = [];
        if (e != null)
          for (var o in ue(e))
            n.push(o);
        return n;
      }
      function $0(e) {
        return yo.call(e);
      }
      function Gd(e, n, o) {
        return n = be(n === r ? e.length - 1 : n, 0), function() {
          for (var s = arguments, u = -1, f = be(s.length - n, 0), m = N(f); ++u < f; )
            m[u] = s[n + u];
          u = -1;
          for (var v = N(n + 1); ++u < n; )
            v[u] = s[u];
          return v[n] = o(m), ot(e, this, v);
        };
      }
      function Yd(e, n) {
        return n.length < 2 ? e : On(e, Nt(n, 0, -1));
      }
      function q0(e, n) {
        for (var o = e.length, s = Qe(n.length, o), u = $e(e); s--; ) {
          var f = n[s];
          e[s] = nn(f, o) ? u[f] : r;
        }
        return e;
      }
      function nl(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Pd = jd(md), Ti = fv || function(e, n) {
        return xe.setTimeout(e, n);
      }, rl = jd(U0);
      function Hd(e, n, o) {
        var s = n + "";
        return rl(e, z0(s, K0(O0(s), o)));
      }
      function jd(e) {
        var n = 0, o = 0;
        return function() {
          var s = vv(), u = ge - (s - o);
          if (o = s, u > 0) {
            if (++n >= Ve)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function jo(e, n) {
        var o = -1, s = e.length, u = s - 1;
        for (n = n === r ? s : n; ++o < n; ) {
          var f = Is(o, u), m = e[f];
          e[f] = e[o], e[o] = m;
        }
        return e.length = n, e;
      }
      var Xd = j0(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(_1, function(o, s, u, f) {
          n.push(u ? f.replace(L1, "$1") : s || o);
        }), n;
      });
      function Yt(e) {
        if (typeof e == "string" || lt(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -Ce ? "-0" : n;
      }
      function _n(e) {
        if (e != null) {
          try {
            return No.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function K0(e, n) {
        return Tt(k1, function(o) {
          var s = "_." + o[0];
          n & o[1] && !Vo(e, s) && e.push(s);
        }), e.sort();
      }
      function Ld(e) {
        if (e instanceof ee)
          return e.clone();
        var n = new Ut(e.__wrapped__, e.__chain__);
        return n.__actions__ = $e(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function eV(e, n, o) {
        (o ? je(e, n, o) : n === r) ? n = 1 : n = be(X(n), 0);
        var s = e == null ? 0 : e.length;
        if (!s || n < 1)
          return [];
        for (var u = 0, f = 0, m = N(Eo(s / n)); u < s; )
          m[f++] = Nt(e, u, u += n);
        return m;
      }
      function tV(e) {
        for (var n = -1, o = e == null ? 0 : e.length, s = 0, u = []; ++n < o; ) {
          var f = e[n];
          f && (u[s++] = f);
        }
        return u;
      }
      function nV() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = N(e - 1), o = arguments[0], s = e; s--; )
          n[s - 1] = arguments[s];
        return wn(j(o) ? $e(o) : [o], Be(n, 1));
      }
      var rV = $(function(e, n) {
        return Ue(e) ? fi(e, Be(n, 1, Ue, !0)) : [];
      }), iV = $(function(e, n) {
        var o = yt(n);
        return Ue(o) && (o = r), Ue(e) ? fi(e, Be(n, 1, Ue, !0), _(o, 2)) : [];
      }), oV = $(function(e, n) {
        var o = yt(n);
        return Ue(o) && (o = r), Ue(e) ? fi(e, Be(n, 1, Ue, !0), r, o) : [];
      });
      function aV(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (n = o || n === r ? 1 : X(n), Nt(e, n < 0 ? 0 : n, s)) : [];
      }
      function sV(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (n = o || n === r ? 1 : X(n), n = s - n, Nt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function lV(e, n) {
        return e && e.length ? Oo(e, _(n, 3), !0, !0) : [];
      }
      function cV(e, n) {
        return e && e.length ? Oo(e, _(n, 3), !0) : [];
      }
      function uV(e, n, o, s) {
        var u = e == null ? 0 : e.length;
        return u ? (o && typeof o != "number" && je(e, n, o) && (o = 0, s = u), n0(e, n, o, s)) : [];
      }
      function $d(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = o == null ? 0 : X(o);
        return u < 0 && (u = be(s + u, 0)), To(e, _(n, 3), u);
      }
      function qd(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = s - 1;
        return o !== r && (u = X(o), u = o < 0 ? be(s + u, 0) : Qe(u, s - 1)), To(e, _(n, 3), u, !0);
      }
      function Kd(e) {
        var n = e == null ? 0 : e.length;
        return n ? Be(e, 1) : [];
      }
      function dV(e) {
        var n = e == null ? 0 : e.length;
        return n ? Be(e, Ce) : [];
      }
      function hV(e, n) {
        var o = e == null ? 0 : e.length;
        return o ? (n = n === r ? 1 : X(n), Be(e, n)) : [];
      }
      function fV(e) {
        for (var n = -1, o = e == null ? 0 : e.length, s = {}; ++n < o; ) {
          var u = e[n];
          s[u[0]] = u[1];
        }
        return s;
      }
      function eh(e) {
        return e && e.length ? e[0] : r;
      }
      function pV(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = o == null ? 0 : X(o);
        return u < 0 && (u = be(s + u, 0)), dr(e, n, u);
      }
      function mV(e) {
        var n = e == null ? 0 : e.length;
        return n ? Nt(e, 0, -1) : [];
      }
      var wV = $(function(e) {
        var n = me(e, Gs);
        return n.length && n[0] === e[0] ? Ws(n) : [];
      }), vV = $(function(e) {
        var n = yt(e), o = me(e, Gs);
        return n === yt(o) ? n = r : o.pop(), o.length && o[0] === e[0] ? Ws(o, _(n, 2)) : [];
      }), VV = $(function(e) {
        var n = yt(e), o = me(e, Gs);
        return n = typeof n == "function" ? n : r, n && o.pop(), o.length && o[0] === e[0] ? Ws(o, r, n) : [];
      });
      function TV(e, n) {
        return e == null ? "" : mv.call(e, n);
      }
      function yt(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function gV(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var u = s;
        return o !== r && (u = X(o), u = u < 0 ? be(s + u, 0) : Qe(u, s - 1)), n === n ? Kw(e, n, u) : To(e, Wu, u, !0);
      }
      function UV(e, n) {
        return e && e.length ? dd(e, X(n)) : r;
      }
      var RV = $(th);
      function th(e, n) {
        return e && e.length && n && n.length ? Ds(e, n) : e;
      }
      function NV(e, n, o) {
        return e && e.length && n && n.length ? Ds(e, n, _(o, 2)) : e;
      }
      function yV(e, n, o) {
        return e && e.length && n && n.length ? Ds(e, n, r, o) : e;
      }
      var MV = tn(function(e, n) {
        var o = e == null ? 0 : e.length, s = Es(e, n);
        return pd(e, me(n, function(u) {
          return nn(u, o) ? +u : u;
        }).sort(yd)), s;
      });
      function kV(e, n) {
        var o = [];
        if (!(e && e.length))
          return o;
        var s = -1, u = [], f = e.length;
        for (n = _(n, 3); ++s < f; ) {
          var m = e[s];
          n(m, s, e) && (o.push(m), u.push(s));
        }
        return pd(e, u), o;
      }
      function il(e) {
        return e == null ? e : Tv.call(e);
      }
      function ZV(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (o && typeof o != "number" && je(e, n, o) ? (n = 0, o = s) : (n = n == null ? 0 : X(n), o = o === r ? s : X(o)), Nt(e, n, o)) : [];
      }
      function JV(e, n) {
        return Io(e, n);
      }
      function bV(e, n, o) {
        return Qs(e, n, _(o, 2));
      }
      function EV(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var s = Io(e, n);
          if (s < o && Wt(e[s], n))
            return s;
        }
        return -1;
      }
      function SV(e, n) {
        return Io(e, n, !0);
      }
      function FV(e, n, o) {
        return Qs(e, n, _(o, 2), !0);
      }
      function AV(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var s = Io(e, n, !0) - 1;
          if (Wt(e[s], n))
            return s;
        }
        return -1;
      }
      function WV(e) {
        return e && e.length ? wd(e) : [];
      }
      function CV(e, n) {
        return e && e.length ? wd(e, _(n, 2)) : [];
      }
      function xV(e) {
        var n = e == null ? 0 : e.length;
        return n ? Nt(e, 1, n) : [];
      }
      function BV(e, n, o) {
        return e && e.length ? (n = o || n === r ? 1 : X(n), Nt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function DV(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (n = o || n === r ? 1 : X(n), n = s - n, Nt(e, n < 0 ? 0 : n, s)) : [];
      }
      function IV(e, n) {
        return e && e.length ? Oo(e, _(n, 3), !1, !0) : [];
      }
      function OV(e, n) {
        return e && e.length ? Oo(e, _(n, 3)) : [];
      }
      var QV = $(function(e) {
        return gn(Be(e, 1, Ue, !0));
      }), _V = $(function(e) {
        var n = yt(e);
        return Ue(n) && (n = r), gn(Be(e, 1, Ue, !0), _(n, 2));
      }), zV = $(function(e) {
        var n = yt(e);
        return n = typeof n == "function" ? n : r, gn(Be(e, 1, Ue, !0), r, n);
      });
      function GV(e) {
        return e && e.length ? gn(e) : [];
      }
      function YV(e, n) {
        return e && e.length ? gn(e, _(n, 2)) : [];
      }
      function PV(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? gn(e, r, n) : [];
      }
      function ol(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = mn(e, function(o) {
          if (Ue(o))
            return n = be(o.length, n), !0;
        }), Rs(n, function(o) {
          return me(e, Ts(o));
        });
      }
      function nh(e, n) {
        if (!(e && e.length))
          return [];
        var o = ol(e);
        return n == null ? o : me(o, function(s) {
          return ot(n, r, s);
        });
      }
      var HV = $(function(e, n) {
        return Ue(e) ? fi(e, n) : [];
      }), jV = $(function(e) {
        return zs(mn(e, Ue));
      }), XV = $(function(e) {
        var n = yt(e);
        return Ue(n) && (n = r), zs(mn(e, Ue), _(n, 2));
      }), LV = $(function(e) {
        var n = yt(e);
        return n = typeof n == "function" ? n : r, zs(mn(e, Ue), r, n);
      }), $V = $(ol);
      function qV(e, n) {
        return gd(e || [], n || [], hi);
      }
      function KV(e, n) {
        return gd(e || [], n || [], wi);
      }
      var eT = $(function(e) {
        var n = e.length, o = n > 1 ? e[n - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, nh(e, o);
      });
      function rh(e) {
        var n = h(e);
        return n.__chain__ = !0, n;
      }
      function tT(e, n) {
        return n(e), e;
      }
      function Xo(e, n) {
        return n(e);
      }
      var nT = tn(function(e) {
        var n = e.length, o = n ? e[0] : 0, s = this.__wrapped__, u = function(f) {
          return Es(f, e);
        };
        return n > 1 || this.__actions__.length || !(s instanceof ee) || !nn(o) ? this.thru(u) : (s = s.slice(o, +o + (n ? 1 : 0)), s.__actions__.push({
          func: Xo,
          args: [u],
          thisArg: r
        }), new Ut(s, this.__chain__).thru(function(f) {
          return n && !f.length && f.push(r), f;
        }));
      });
      function rT() {
        return rh(this);
      }
      function iT() {
        return new Ut(this.value(), this.__chain__);
      }
      function oT() {
        this.__values__ === r && (this.__values__ = vh(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function aT() {
        return this;
      }
      function sT(e) {
        for (var n, o = this; o instanceof Wo; ) {
          var s = Ld(o);
          s.__index__ = 0, s.__values__ = r, n ? u.__wrapped__ = s : n = s;
          var u = s;
          o = o.__wrapped__;
        }
        return u.__wrapped__ = e, n;
      }
      function lT() {
        var e = this.__wrapped__;
        if (e instanceof ee) {
          var n = e;
          return this.__actions__.length && (n = new ee(this)), n = n.reverse(), n.__actions__.push({
            func: Xo,
            args: [il],
            thisArg: r
          }), new Ut(n, this.__chain__);
        }
        return this.thru(il);
      }
      function cT() {
        return Td(this.__wrapped__, this.__actions__);
      }
      var uT = Qo(function(e, n, o) {
        se.call(e, o) ? ++e[o] : Kt(e, o, 1);
      });
      function dT(e, n, o) {
        var s = j(e) ? Fu : t0;
        return o && je(e, n, o) && (n = r), s(e, _(n, 3));
      }
      function hT(e, n) {
        var o = j(e) ? mn : nd;
        return o(e, _(n, 3));
      }
      var fT = Ed($d), pT = Ed(qd);
      function mT(e, n) {
        return Be(Lo(e, n), 1);
      }
      function wT(e, n) {
        return Be(Lo(e, n), Ce);
      }
      function vT(e, n, o) {
        return o = o === r ? 1 : X(o), Be(Lo(e, n), o);
      }
      function ih(e, n) {
        var o = j(e) ? Tt : Tn;
        return o(e, _(n, 3));
      }
      function oh(e, n) {
        var o = j(e) ? xw : td;
        return o(e, _(n, 3));
      }
      var VT = Qo(function(e, n, o) {
        se.call(e, o) ? e[o].push(n) : Kt(e, o, [n]);
      });
      function TT(e, n, o, s) {
        e = qe(e) ? e : Nr(e), o = o && !s ? X(o) : 0;
        var u = e.length;
        return o < 0 && (o = be(u + o, 0)), ta(e) ? o <= u && e.indexOf(n, o) > -1 : !!u && dr(e, n, o) > -1;
      }
      var gT = $(function(e, n, o) {
        var s = -1, u = typeof n == "function", f = qe(e) ? N(e.length) : [];
        return Tn(e, function(m) {
          f[++s] = u ? ot(n, m, o) : pi(m, n, o);
        }), f;
      }), UT = Qo(function(e, n, o) {
        Kt(e, o, n);
      });
      function Lo(e, n) {
        var o = j(e) ? me : ld;
        return o(e, _(n, 3));
      }
      function RT(e, n, o, s) {
        return e == null ? [] : (j(n) || (n = n == null ? [] : [n]), o = s ? r : o, j(o) || (o = o == null ? [] : [o]), hd(e, n, o));
      }
      var NT = Qo(function(e, n, o) {
        e[o ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function yT(e, n, o) {
        var s = j(e) ? vs : xu, u = arguments.length < 3;
        return s(e, _(n, 4), o, u, Tn);
      }
      function MT(e, n, o) {
        var s = j(e) ? Bw : xu, u = arguments.length < 3;
        return s(e, _(n, 4), o, u, td);
      }
      function kT(e, n) {
        var o = j(e) ? mn : nd;
        return o(e, Ko(_(n, 3)));
      }
      function ZT(e) {
        var n = j(e) ? $u : T0;
        return n(e);
      }
      function JT(e, n, o) {
        (o ? je(e, n, o) : n === r) ? n = 1 : n = X(n);
        var s = j(e) ? Lv : g0;
        return s(e, n);
      }
      function bT(e) {
        var n = j(e) ? $v : R0;
        return n(e);
      }
      function ET(e) {
        if (e == null)
          return 0;
        if (qe(e))
          return ta(e) ? fr(e) : e.length;
        var n = _e(e);
        return n == Et || n == St ? e.size : xs(e).length;
      }
      function ST(e, n, o) {
        var s = j(e) ? Vs : N0;
        return o && je(e, n, o) && (n = r), s(e, _(n, 3));
      }
      var FT = $(function(e, n) {
        if (e == null)
          return [];
        var o = n.length;
        return o > 1 && je(e, n[0], n[1]) ? n = [] : o > 2 && je(n[0], n[1], n[2]) && (n = [n[0]]), hd(e, Be(n, 1), []);
      }), $o = hv || function() {
        return xe.Date.now();
      };
      function AT(e, n) {
        if (typeof n != "function")
          throw new gt(d);
        return e = X(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function ah(e, n, o) {
        return n = o ? r : n, n = e && n == null ? e.length : n, en(e, x, r, r, r, r, n);
      }
      function sh(e, n) {
        var o;
        if (typeof n != "function")
          throw new gt(d);
        return e = X(e), function() {
          return --e > 0 && (o = n.apply(this, arguments)), e <= 1 && (n = r), o;
        };
      }
      var al = $(function(e, n, o) {
        var s = C;
        if (o.length) {
          var u = vn(o, Ur(al));
          s |= M;
        }
        return en(e, s, n, o, u);
      }), lh = $(function(e, n, o) {
        var s = C | A;
        if (o.length) {
          var u = vn(o, Ur(lh));
          s |= M;
        }
        return en(n, s, e, o, u);
      });
      function ch(e, n, o) {
        n = o ? r : n;
        var s = en(e, O, r, r, r, r, r, n);
        return s.placeholder = ch.placeholder, s;
      }
      function uh(e, n, o) {
        n = o ? r : n;
        var s = en(e, P, r, r, r, r, r, n);
        return s.placeholder = uh.placeholder, s;
      }
      function dh(e, n, o) {
        var s, u, f, m, v, g, Z = 0, J = !1, b = !1, S = !0;
        if (typeof e != "function")
          throw new gt(d);
        n = Mt(n) || 0, we(o) && (J = !!o.leading, b = "maxWait" in o, f = b ? be(Mt(o.maxWait) || 0, n) : f, S = "trailing" in o ? !!o.trailing : S);
        function I(Re) {
          var Ct = s, an = u;
          return s = u = r, Z = Re, m = e.apply(an, Ct), m;
        }
        function G(Re) {
          return Z = Re, v = Ti(K, n), J ? I(Re) : m;
        }
        function L(Re) {
          var Ct = Re - g, an = Re - Z, Eh = n - Ct;
          return b ? Qe(Eh, f - an) : Eh;
        }
        function Y(Re) {
          var Ct = Re - g, an = Re - Z;
          return g === r || Ct >= n || Ct < 0 || b && an >= f;
        }
        function K() {
          var Re = $o();
          if (Y(Re))
            return ne(Re);
          v = Ti(K, L(Re));
        }
        function ne(Re) {
          return v = r, S && s ? I(Re) : (s = u = r, m);
        }
        function ct() {
          v !== r && Ud(v), Z = 0, s = g = u = v = r;
        }
        function Xe() {
          return v === r ? m : ne($o());
        }
        function ut() {
          var Re = $o(), Ct = Y(Re);
          if (s = arguments, u = this, g = Re, Ct) {
            if (v === r)
              return G(g);
            if (b)
              return Ud(v), v = Ti(K, n), I(g);
          }
          return v === r && (v = Ti(K, n)), m;
        }
        return ut.cancel = ct, ut.flush = Xe, ut;
      }
      var WT = $(function(e, n) {
        return ed(e, 1, n);
      }), CT = $(function(e, n, o) {
        return ed(e, Mt(n) || 0, o);
      });
      function xT(e) {
        return en(e, de);
      }
      function qo(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new gt(d);
        var o = function() {
          var s = arguments, u = n ? n.apply(this, s) : s[0], f = o.cache;
          if (f.has(u))
            return f.get(u);
          var m = e.apply(this, s);
          return o.cache = f.set(u, m) || f, m;
        };
        return o.cache = new (qo.Cache || qt)(), o;
      }
      qo.Cache = qt;
      function Ko(e) {
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
      function BT(e) {
        return sh(2, e);
      }
      var DT = y0(function(e, n) {
        n = n.length == 1 && j(n[0]) ? me(n[0], at(_())) : me(Be(n, 1), at(_()));
        var o = n.length;
        return $(function(s) {
          for (var u = -1, f = Qe(s.length, o); ++u < f; )
            s[u] = n[u].call(this, s[u]);
          return ot(e, this, s);
        });
      }), sl = $(function(e, n) {
        var o = vn(n, Ur(sl));
        return en(e, M, r, n, o);
      }), hh = $(function(e, n) {
        var o = vn(n, Ur(hh));
        return en(e, W, r, n, o);
      }), IT = tn(function(e, n) {
        return en(e, z, r, r, r, n);
      });
      function OT(e, n) {
        if (typeof e != "function")
          throw new gt(d);
        return n = n === r ? n : X(n), $(e, n);
      }
      function QT(e, n) {
        if (typeof e != "function")
          throw new gt(d);
        return n = n == null ? 0 : be(X(n), 0), $(function(o) {
          var s = o[n], u = Rn(o, 0, n);
          return s && wn(u, s), ot(e, this, u);
        });
      }
      function _T(e, n, o) {
        var s = !0, u = !0;
        if (typeof e != "function")
          throw new gt(d);
        return we(o) && (s = "leading" in o ? !!o.leading : s, u = "trailing" in o ? !!o.trailing : u), dh(e, n, {
          leading: s,
          maxWait: n,
          trailing: u
        });
      }
      function zT(e) {
        return ah(e, 1);
      }
      function GT(e, n) {
        return sl(Ys(n), e);
      }
      function YT() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return j(e) ? e : [e];
      }
      function PT(e) {
        return Rt(e, F);
      }
      function HT(e, n) {
        return n = typeof n == "function" ? n : r, Rt(e, F, n);
      }
      function jT(e) {
        return Rt(e, R | F);
      }
      function XT(e, n) {
        return n = typeof n == "function" ? n : r, Rt(e, R | F, n);
      }
      function LT(e, n) {
        return n == null || Ku(e, n, Se(n));
      }
      function Wt(e, n) {
        return e === n || e !== e && n !== n;
      }
      var $T = Yo(As), qT = Yo(function(e, n) {
        return e >= n;
      }), zn = od(function() {
        return arguments;
      }()) ? od : function(e) {
        return Te(e) && se.call(e, "callee") && !Yu.call(e, "callee");
      }, j = N.isArray, KT = ku ? at(ku) : s0;
      function qe(e) {
        return e != null && ea(e.length) && !rn(e);
      }
      function Ue(e) {
        return Te(e) && qe(e);
      }
      function eg(e) {
        return e === !0 || e === !1 || Te(e) && He(e) == Kr;
      }
      var Nn = pv || Vl, tg = Zu ? at(Zu) : l0;
      function ng(e) {
        return Te(e) && e.nodeType === 1 && !gi(e);
      }
      function rg(e) {
        if (e == null)
          return !0;
        if (qe(e) && (j(e) || typeof e == "string" || typeof e.splice == "function" || Nn(e) || Rr(e) || zn(e)))
          return !e.length;
        var n = _e(e);
        if (n == Et || n == St)
          return !e.size;
        if (Vi(e))
          return !xs(e).length;
        for (var o in e)
          if (se.call(e, o))
            return !1;
        return !0;
      }
      function ig(e, n) {
        return mi(e, n);
      }
      function og(e, n, o) {
        o = typeof o == "function" ? o : r;
        var s = o ? o(e, n) : r;
        return s === r ? mi(e, n, r, o) : !!s;
      }
      function ll(e) {
        if (!Te(e))
          return !1;
        var n = He(e);
        return n == ho || n == J1 || typeof e.message == "string" && typeof e.name == "string" && !gi(e);
      }
      function ag(e) {
        return typeof e == "number" && Hu(e);
      }
      function rn(e) {
        if (!we(e))
          return !1;
        var n = He(e);
        return n == fo || n == eu || n == Z1 || n == E1;
      }
      function fh(e) {
        return typeof e == "number" && e == X(e);
      }
      function ea(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pe;
      }
      function we(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Te(e) {
        return e != null && typeof e == "object";
      }
      var ph = Ju ? at(Ju) : u0;
      function sg(e, n) {
        return e === n || Cs(e, n, qs(n));
      }
      function lg(e, n, o) {
        return o = typeof o == "function" ? o : r, Cs(e, n, qs(n), o);
      }
      function cg(e) {
        return mh(e) && e != +e;
      }
      function ug(e) {
        if (H0(e))
          throw new H(c);
        return ad(e);
      }
      function dg(e) {
        return e === null;
      }
      function hg(e) {
        return e == null;
      }
      function mh(e) {
        return typeof e == "number" || Te(e) && He(e) == ti;
      }
      function gi(e) {
        if (!Te(e) || He(e) != Lt)
          return !1;
        var n = Zo(e);
        if (n === null)
          return !0;
        var o = se.call(n, "constructor") && n.constructor;
        return typeof o == "function" && o instanceof o && No.call(o) == lv;
      }
      var cl = bu ? at(bu) : d0;
      function fg(e) {
        return fh(e) && e >= -Pe && e <= Pe;
      }
      var wh = Eu ? at(Eu) : h0;
      function ta(e) {
        return typeof e == "string" || !j(e) && Te(e) && He(e) == ri;
      }
      function lt(e) {
        return typeof e == "symbol" || Te(e) && He(e) == po;
      }
      var Rr = Su ? at(Su) : f0;
      function pg(e) {
        return e === r;
      }
      function mg(e) {
        return Te(e) && _e(e) == ii;
      }
      function wg(e) {
        return Te(e) && He(e) == F1;
      }
      var vg = Yo(Bs), Vg = Yo(function(e, n) {
        return e <= n;
      });
      function vh(e) {
        if (!e)
          return [];
        if (qe(e))
          return ta(e) ? Ft(e) : $e(e);
        if (si && e[si])
          return Lw(e[si]());
        var n = _e(e), o = n == Et ? ys : n == St ? go : Nr;
        return o(e);
      }
      function on(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = Mt(e), e === Ce || e === -Ce) {
          var n = e < 0 ? -1 : 1;
          return n * qr;
        }
        return e === e ? e : 0;
      }
      function X(e) {
        var n = on(e), o = n % 1;
        return n === n ? o ? n - o : n : 0;
      }
      function Vh(e) {
        return e ? In(X(e), 0, _t) : 0;
      }
      function Mt(e) {
        if (typeof e == "number")
          return e;
        if (lt(e))
          return co;
        if (we(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = we(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Bu(e);
        var o = K1.test(e);
        return o || tw.test(e) ? Aw(e.slice(2), o ? 2 : 8) : q1.test(e) ? co : +e;
      }
      function Th(e) {
        return Gt(e, Ke(e));
      }
      function Tg(e) {
        return e ? In(X(e), -Pe, Pe) : e === 0 ? e : 0;
      }
      function oe(e) {
        return e == null ? "" : st(e);
      }
      var gg = Tr(function(e, n) {
        if (Vi(n) || qe(n)) {
          Gt(n, Se(n), e);
          return;
        }
        for (var o in n)
          se.call(n, o) && hi(e, o, n[o]);
      }), gh = Tr(function(e, n) {
        Gt(n, Ke(n), e);
      }), na = Tr(function(e, n, o, s) {
        Gt(n, Ke(n), e, s);
      }), Ug = Tr(function(e, n, o, s) {
        Gt(n, Se(n), e, s);
      }), Rg = tn(Es);
      function Ng(e, n) {
        var o = Vr(e);
        return n == null ? o : qu(o, n);
      }
      var yg = $(function(e, n) {
        e = ue(e);
        var o = -1, s = n.length, u = s > 2 ? n[2] : r;
        for (u && je(n[0], n[1], u) && (s = 1); ++o < s; )
          for (var f = n[o], m = Ke(f), v = -1, g = m.length; ++v < g; ) {
            var Z = m[v], J = e[Z];
            (J === r || Wt(J, mr[Z]) && !se.call(e, Z)) && (e[Z] = f[Z]);
          }
        return e;
      }), Mg = $(function(e) {
        return e.push(r, Bd), ot(Uh, r, e);
      });
      function kg(e, n) {
        return Au(e, _(n, 3), zt);
      }
      function Zg(e, n) {
        return Au(e, _(n, 3), Fs);
      }
      function Jg(e, n) {
        return e == null ? e : Ss(e, _(n, 3), Ke);
      }
      function bg(e, n) {
        return e == null ? e : rd(e, _(n, 3), Ke);
      }
      function Eg(e, n) {
        return e && zt(e, _(n, 3));
      }
      function Sg(e, n) {
        return e && Fs(e, _(n, 3));
      }
      function Fg(e) {
        return e == null ? [] : Bo(e, Se(e));
      }
      function Ag(e) {
        return e == null ? [] : Bo(e, Ke(e));
      }
      function ul(e, n, o) {
        var s = e == null ? r : On(e, n);
        return s === r ? o : s;
      }
      function Wg(e, n) {
        return e != null && Od(e, n, r0);
      }
      function dl(e, n) {
        return e != null && Od(e, n, i0);
      }
      var Cg = Fd(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = yo.call(n)), e[n] = o;
      }, fl(et)), xg = Fd(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = yo.call(n)), se.call(e, n) ? e[n].push(o) : e[n] = [o];
      }, _), Bg = $(pi);
      function Se(e) {
        return qe(e) ? Lu(e) : xs(e);
      }
      function Ke(e) {
        return qe(e) ? Lu(e, !0) : p0(e);
      }
      function Dg(e, n) {
        var o = {};
        return n = _(n, 3), zt(e, function(s, u, f) {
          Kt(o, n(s, u, f), s);
        }), o;
      }
      function Ig(e, n) {
        var o = {};
        return n = _(n, 3), zt(e, function(s, u, f) {
          Kt(o, u, n(s, u, f));
        }), o;
      }
      var Og = Tr(function(e, n, o) {
        Do(e, n, o);
      }), Uh = Tr(function(e, n, o, s) {
        Do(e, n, o, s);
      }), Qg = tn(function(e, n) {
        var o = {};
        if (e == null)
          return o;
        var s = !1;
        n = me(n, function(f) {
          return f = Un(f, e), s || (s = f.length > 1), f;
        }), Gt(e, Ls(e), o), s && (o = Rt(o, R | y | F, C0));
        for (var u = n.length; u--; )
          _s(o, n[u]);
        return o;
      });
      function _g(e, n) {
        return Rh(e, Ko(_(n)));
      }
      var zg = tn(function(e, n) {
        return e == null ? {} : w0(e, n);
      });
      function Rh(e, n) {
        if (e == null)
          return {};
        var o = me(Ls(e), function(s) {
          return [s];
        });
        return n = _(n), fd(e, o, function(s, u) {
          return n(s, u[0]);
        });
      }
      function Gg(e, n, o) {
        n = Un(n, e);
        var s = -1, u = n.length;
        for (u || (u = 1, e = r); ++s < u; ) {
          var f = e == null ? r : e[Yt(n[s])];
          f === r && (s = u, f = o), e = rn(f) ? f.call(e) : f;
        }
        return e;
      }
      function Yg(e, n, o) {
        return e == null ? e : wi(e, n, o);
      }
      function Pg(e, n, o, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : wi(e, n, o, s);
      }
      var Nh = Cd(Se), yh = Cd(Ke);
      function Hg(e, n, o) {
        var s = j(e), u = s || Nn(e) || Rr(e);
        if (n = _(n, 4), o == null) {
          var f = e && e.constructor;
          u ? o = s ? new f() : [] : we(e) ? o = rn(f) ? Vr(Zo(e)) : {} : o = {};
        }
        return (u ? Tt : zt)(e, function(m, v, g) {
          return n(o, m, v, g);
        }), o;
      }
      function jg(e, n) {
        return e == null ? !0 : _s(e, n);
      }
      function Xg(e, n, o) {
        return e == null ? e : Vd(e, n, Ys(o));
      }
      function Lg(e, n, o, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : Vd(e, n, Ys(o), s);
      }
      function Nr(e) {
        return e == null ? [] : Ns(e, Se(e));
      }
      function $g(e) {
        return e == null ? [] : Ns(e, Ke(e));
      }
      function qg(e, n, o) {
        return o === r && (o = n, n = r), o !== r && (o = Mt(o), o = o === o ? o : 0), n !== r && (n = Mt(n), n = n === n ? n : 0), In(Mt(e), n, o);
      }
      function Kg(e, n, o) {
        return n = on(n), o === r ? (o = n, n = 0) : o = on(o), e = Mt(e), o0(e, n, o);
      }
      function eU(e, n, o) {
        if (o && typeof o != "boolean" && je(e, n, o) && (n = o = r), o === r && (typeof n == "boolean" ? (o = n, n = r) : typeof e == "boolean" && (o = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = on(e), n === r ? (n = e, e = 0) : n = on(n)), e > n) {
          var s = e;
          e = n, n = s;
        }
        if (o || e % 1 || n % 1) {
          var u = ju();
          return Qe(e + u * (n - e + Fw("1e-" + ((u + "").length - 1))), n);
        }
        return Is(e, n);
      }
      var tU = gr(function(e, n, o) {
        return n = n.toLowerCase(), e + (o ? Mh(n) : n);
      });
      function Mh(e) {
        return hl(oe(e).toLowerCase());
      }
      function kh(e) {
        return e = oe(e), e && e.replace(rw, Yw).replace(Rw, "");
      }
      function nU(e, n, o) {
        e = oe(e), n = st(n);
        var s = e.length;
        o = o === r ? s : In(X(o), 0, s);
        var u = o;
        return o -= n.length, o >= 0 && e.slice(o, u) == n;
      }
      function rU(e) {
        return e = oe(e), e && B1.test(e) ? e.replace(ru, Pw) : e;
      }
      function iU(e) {
        return e = oe(e), e && z1.test(e) ? e.replace(ss, "\\$&") : e;
      }
      var oU = gr(function(e, n, o) {
        return e + (o ? "-" : "") + n.toLowerCase();
      }), aU = gr(function(e, n, o) {
        return e + (o ? " " : "") + n.toLowerCase();
      }), sU = bd("toLowerCase");
      function lU(e, n, o) {
        e = oe(e), n = X(n);
        var s = n ? fr(e) : 0;
        if (!n || s >= n)
          return e;
        var u = (n - s) / 2;
        return Go(So(u), o) + e + Go(Eo(u), o);
      }
      function cU(e, n, o) {
        e = oe(e), n = X(n);
        var s = n ? fr(e) : 0;
        return n && s < n ? e + Go(n - s, o) : e;
      }
      function uU(e, n, o) {
        e = oe(e), n = X(n);
        var s = n ? fr(e) : 0;
        return n && s < n ? Go(n - s, o) + e : e;
      }
      function dU(e, n, o) {
        return o || n == null ? n = 0 : n && (n = +n), Vv(oe(e).replace(ls, ""), n || 0);
      }
      function hU(e, n, o) {
        return (o ? je(e, n, o) : n === r) ? n = 1 : n = X(n), Os(oe(e), n);
      }
      function fU() {
        var e = arguments, n = oe(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var pU = gr(function(e, n, o) {
        return e + (o ? "_" : "") + n.toLowerCase();
      });
      function mU(e, n, o) {
        return o && typeof o != "number" && je(e, n, o) && (n = o = r), o = o === r ? _t : o >>> 0, o ? (e = oe(e), e && (typeof n == "string" || n != null && !cl(n)) && (n = st(n), !n && hr(e)) ? Rn(Ft(e), 0, o) : e.split(n, o)) : [];
      }
      var wU = gr(function(e, n, o) {
        return e + (o ? " " : "") + hl(n);
      });
      function vU(e, n, o) {
        return e = oe(e), o = o == null ? 0 : In(X(o), 0, e.length), n = st(n), e.slice(o, o + n.length) == n;
      }
      function VU(e, n, o) {
        var s = h.templateSettings;
        o && je(e, n, o) && (n = r), e = oe(e), n = na({}, n, s, xd);
        var u = na({}, n.imports, s.imports, xd), f = Se(u), m = Ns(u, f), v, g, Z = 0, J = n.interpolate || mo, b = "__p += '", S = Ms(
          (n.escape || mo).source + "|" + J.source + "|" + (J === iu ? $1 : mo).source + "|" + (n.evaluate || mo).source + "|$",
          "g"
        ), I = "//# sourceURL=" + (se.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Zw + "]") + `
`;
        e.replace(S, function(Y, K, ne, ct, Xe, ut) {
          return ne || (ne = ct), b += e.slice(Z, ut).replace(iw, Hw), K && (v = !0, b += `' +
__e(` + K + `) +
'`), Xe && (g = !0, b += `';
` + Xe + `;
__p += '`), ne && (b += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), Z = ut + Y.length, Y;
        }), b += `';
`;
        var G = se.call(n, "variable") && n.variable;
        if (!G)
          b = `with (obj) {
` + b + `
}
`;
        else if (X1.test(G))
          throw new H(p);
        b = (g ? b.replace(A1, "") : b).replace(W1, "$1").replace(C1, "$1;"), b = "function(" + (G || "obj") + `) {
` + (G ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (g ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + b + `return __p
}`;
        var L = Jh(function() {
          return re(f, I + "return " + b).apply(r, m);
        });
        if (L.source = b, ll(L))
          throw L;
        return L;
      }
      function TU(e) {
        return oe(e).toLowerCase();
      }
      function gU(e) {
        return oe(e).toUpperCase();
      }
      function UU(e, n, o) {
        if (e = oe(e), e && (o || n === r))
          return Bu(e);
        if (!e || !(n = st(n)))
          return e;
        var s = Ft(e), u = Ft(n), f = Du(s, u), m = Iu(s, u) + 1;
        return Rn(s, f, m).join("");
      }
      function RU(e, n, o) {
        if (e = oe(e), e && (o || n === r))
          return e.slice(0, Qu(e) + 1);
        if (!e || !(n = st(n)))
          return e;
        var s = Ft(e), u = Iu(s, Ft(n)) + 1;
        return Rn(s, 0, u).join("");
      }
      function NU(e, n, o) {
        if (e = oe(e), e && (o || n === r))
          return e.replace(ls, "");
        if (!e || !(n = st(n)))
          return e;
        var s = Ft(e), u = Du(s, Ft(n));
        return Rn(s, u).join("");
      }
      function yU(e, n) {
        var o = he, s = ve;
        if (we(n)) {
          var u = "separator" in n ? n.separator : u;
          o = "length" in n ? X(n.length) : o, s = "omission" in n ? st(n.omission) : s;
        }
        e = oe(e);
        var f = e.length;
        if (hr(e)) {
          var m = Ft(e);
          f = m.length;
        }
        if (o >= f)
          return e;
        var v = o - fr(s);
        if (v < 1)
          return s;
        var g = m ? Rn(m, 0, v).join("") : e.slice(0, v);
        if (u === r)
          return g + s;
        if (m && (v += g.length - v), cl(u)) {
          if (e.slice(v).search(u)) {
            var Z, J = g;
            for (u.global || (u = Ms(u.source, oe(ou.exec(u)) + "g")), u.lastIndex = 0; Z = u.exec(J); )
              var b = Z.index;
            g = g.slice(0, b === r ? v : b);
          }
        } else if (e.indexOf(st(u), v) != v) {
          var S = g.lastIndexOf(u);
          S > -1 && (g = g.slice(0, S));
        }
        return g + s;
      }
      function MU(e) {
        return e = oe(e), e && x1.test(e) ? e.replace(nu, ev) : e;
      }
      var kU = gr(function(e, n, o) {
        return e + (o ? " " : "") + n.toUpperCase();
      }), hl = bd("toUpperCase");
      function Zh(e, n, o) {
        return e = oe(e), n = o ? r : n, n === r ? Xw(e) ? rv(e) : Ow(e) : e.match(n) || [];
      }
      var Jh = $(function(e, n) {
        try {
          return ot(e, r, n);
        } catch (o) {
          return ll(o) ? o : new H(o);
        }
      }), ZU = tn(function(e, n) {
        return Tt(n, function(o) {
          o = Yt(o), Kt(e, o, al(e[o], e));
        }), e;
      });
      function JU(e) {
        var n = e == null ? 0 : e.length, o = _();
        return e = n ? me(e, function(s) {
          if (typeof s[1] != "function")
            throw new gt(d);
          return [o(s[0]), s[1]];
        }) : [], $(function(s) {
          for (var u = -1; ++u < n; ) {
            var f = e[u];
            if (ot(f[0], this, s))
              return ot(f[1], this, s);
          }
        });
      }
      function bU(e) {
        return e0(Rt(e, R));
      }
      function fl(e) {
        return function() {
          return e;
        };
      }
      function EU(e, n) {
        return e == null || e !== e ? n : e;
      }
      var SU = Sd(), FU = Sd(!0);
      function et(e) {
        return e;
      }
      function pl(e) {
        return sd(typeof e == "function" ? e : Rt(e, R));
      }
      function AU(e) {
        return cd(Rt(e, R));
      }
      function WU(e, n) {
        return ud(e, Rt(n, R));
      }
      var CU = $(function(e, n) {
        return function(o) {
          return pi(o, e, n);
        };
      }), xU = $(function(e, n) {
        return function(o) {
          return pi(e, o, n);
        };
      });
      function ml(e, n, o) {
        var s = Se(n), u = Bo(n, s);
        o == null && !(we(n) && (u.length || !s.length)) && (o = n, n = e, e = this, u = Bo(n, Se(n)));
        var f = !(we(o) && "chain" in o) || !!o.chain, m = rn(e);
        return Tt(u, function(v) {
          var g = n[v];
          e[v] = g, m && (e.prototype[v] = function() {
            var Z = this.__chain__;
            if (f || Z) {
              var J = e(this.__wrapped__), b = J.__actions__ = $e(this.__actions__);
              return b.push({ func: g, args: arguments, thisArg: e }), J.__chain__ = Z, J;
            }
            return g.apply(e, wn([this.value()], arguments));
          });
        }), e;
      }
      function BU() {
        return xe._ === this && (xe._ = cv), this;
      }
      function wl() {
      }
      function DU(e) {
        return e = X(e), $(function(n) {
          return dd(n, e);
        });
      }
      var IU = Hs(me), OU = Hs(Fu), QU = Hs(Vs);
      function bh(e) {
        return el(e) ? Ts(Yt(e)) : v0(e);
      }
      function _U(e) {
        return function(n) {
          return e == null ? r : On(e, n);
        };
      }
      var zU = Ad(), GU = Ad(!0);
      function vl() {
        return [];
      }
      function Vl() {
        return !1;
      }
      function YU() {
        return {};
      }
      function PU() {
        return "";
      }
      function HU() {
        return !0;
      }
      function jU(e, n) {
        if (e = X(e), e < 1 || e > Pe)
          return [];
        var o = _t, s = Qe(e, _t);
        n = _(n), e -= _t;
        for (var u = Rs(s, n); ++o < e; )
          n(o);
        return u;
      }
      function XU(e) {
        return j(e) ? me(e, Yt) : lt(e) ? [e] : $e(Xd(oe(e)));
      }
      function LU(e) {
        var n = ++sv;
        return oe(e) + n;
      }
      var $U = zo(function(e, n) {
        return e + n;
      }, 0), qU = js("ceil"), KU = zo(function(e, n) {
        return e / n;
      }, 1), eR = js("floor");
      function tR(e) {
        return e && e.length ? xo(e, et, As) : r;
      }
      function nR(e, n) {
        return e && e.length ? xo(e, _(n, 2), As) : r;
      }
      function rR(e) {
        return Cu(e, et);
      }
      function iR(e, n) {
        return Cu(e, _(n, 2));
      }
      function oR(e) {
        return e && e.length ? xo(e, et, Bs) : r;
      }
      function aR(e, n) {
        return e && e.length ? xo(e, _(n, 2), Bs) : r;
      }
      var sR = zo(function(e, n) {
        return e * n;
      }, 1), lR = js("round"), cR = zo(function(e, n) {
        return e - n;
      }, 0);
      function uR(e) {
        return e && e.length ? Us(e, et) : 0;
      }
      function dR(e, n) {
        return e && e.length ? Us(e, _(n, 2)) : 0;
      }
      return h.after = AT, h.ary = ah, h.assign = gg, h.assignIn = gh, h.assignInWith = na, h.assignWith = Ug, h.at = Rg, h.before = sh, h.bind = al, h.bindAll = ZU, h.bindKey = lh, h.castArray = YT, h.chain = rh, h.chunk = eV, h.compact = tV, h.concat = nV, h.cond = JU, h.conforms = bU, h.constant = fl, h.countBy = uT, h.create = Ng, h.curry = ch, h.curryRight = uh, h.debounce = dh, h.defaults = yg, h.defaultsDeep = Mg, h.defer = WT, h.delay = CT, h.difference = rV, h.differenceBy = iV, h.differenceWith = oV, h.drop = aV, h.dropRight = sV, h.dropRightWhile = lV, h.dropWhile = cV, h.fill = uV, h.filter = hT, h.flatMap = mT, h.flatMapDeep = wT, h.flatMapDepth = vT, h.flatten = Kd, h.flattenDeep = dV, h.flattenDepth = hV, h.flip = xT, h.flow = SU, h.flowRight = FU, h.fromPairs = fV, h.functions = Fg, h.functionsIn = Ag, h.groupBy = VT, h.initial = mV, h.intersection = wV, h.intersectionBy = vV, h.intersectionWith = VV, h.invert = Cg, h.invertBy = xg, h.invokeMap = gT, h.iteratee = pl, h.keyBy = UT, h.keys = Se, h.keysIn = Ke, h.map = Lo, h.mapKeys = Dg, h.mapValues = Ig, h.matches = AU, h.matchesProperty = WU, h.memoize = qo, h.merge = Og, h.mergeWith = Uh, h.method = CU, h.methodOf = xU, h.mixin = ml, h.negate = Ko, h.nthArg = DU, h.omit = Qg, h.omitBy = _g, h.once = BT, h.orderBy = RT, h.over = IU, h.overArgs = DT, h.overEvery = OU, h.overSome = QU, h.partial = sl, h.partialRight = hh, h.partition = NT, h.pick = zg, h.pickBy = Rh, h.property = bh, h.propertyOf = _U, h.pull = RV, h.pullAll = th, h.pullAllBy = NV, h.pullAllWith = yV, h.pullAt = MV, h.range = zU, h.rangeRight = GU, h.rearg = IT, h.reject = kT, h.remove = kV, h.rest = OT, h.reverse = il, h.sampleSize = JT, h.set = Yg, h.setWith = Pg, h.shuffle = bT, h.slice = ZV, h.sortBy = FT, h.sortedUniq = WV, h.sortedUniqBy = CV, h.split = mU, h.spread = QT, h.tail = xV, h.take = BV, h.takeRight = DV, h.takeRightWhile = IV, h.takeWhile = OV, h.tap = tT, h.throttle = _T, h.thru = Xo, h.toArray = vh, h.toPairs = Nh, h.toPairsIn = yh, h.toPath = XU, h.toPlainObject = Th, h.transform = Hg, h.unary = zT, h.union = QV, h.unionBy = _V, h.unionWith = zV, h.uniq = GV, h.uniqBy = YV, h.uniqWith = PV, h.unset = jg, h.unzip = ol, h.unzipWith = nh, h.update = Xg, h.updateWith = Lg, h.values = Nr, h.valuesIn = $g, h.without = HV, h.words = Zh, h.wrap = GT, h.xor = jV, h.xorBy = XV, h.xorWith = LV, h.zip = $V, h.zipObject = qV, h.zipObjectDeep = KV, h.zipWith = eT, h.entries = Nh, h.entriesIn = yh, h.extend = gh, h.extendWith = na, ml(h, h), h.add = $U, h.attempt = Jh, h.camelCase = tU, h.capitalize = Mh, h.ceil = qU, h.clamp = qg, h.clone = PT, h.cloneDeep = jT, h.cloneDeepWith = XT, h.cloneWith = HT, h.conformsTo = LT, h.deburr = kh, h.defaultTo = EU, h.divide = KU, h.endsWith = nU, h.eq = Wt, h.escape = rU, h.escapeRegExp = iU, h.every = dT, h.find = fT, h.findIndex = $d, h.findKey = kg, h.findLast = pT, h.findLastIndex = qd, h.findLastKey = Zg, h.floor = eR, h.forEach = ih, h.forEachRight = oh, h.forIn = Jg, h.forInRight = bg, h.forOwn = Eg, h.forOwnRight = Sg, h.get = ul, h.gt = $T, h.gte = qT, h.has = Wg, h.hasIn = dl, h.head = eh, h.identity = et, h.includes = TT, h.indexOf = pV, h.inRange = Kg, h.invoke = Bg, h.isArguments = zn, h.isArray = j, h.isArrayBuffer = KT, h.isArrayLike = qe, h.isArrayLikeObject = Ue, h.isBoolean = eg, h.isBuffer = Nn, h.isDate = tg, h.isElement = ng, h.isEmpty = rg, h.isEqual = ig, h.isEqualWith = og, h.isError = ll, h.isFinite = ag, h.isFunction = rn, h.isInteger = fh, h.isLength = ea, h.isMap = ph, h.isMatch = sg, h.isMatchWith = lg, h.isNaN = cg, h.isNative = ug, h.isNil = hg, h.isNull = dg, h.isNumber = mh, h.isObject = we, h.isObjectLike = Te, h.isPlainObject = gi, h.isRegExp = cl, h.isSafeInteger = fg, h.isSet = wh, h.isString = ta, h.isSymbol = lt, h.isTypedArray = Rr, h.isUndefined = pg, h.isWeakMap = mg, h.isWeakSet = wg, h.join = TV, h.kebabCase = oU, h.last = yt, h.lastIndexOf = gV, h.lowerCase = aU, h.lowerFirst = sU, h.lt = vg, h.lte = Vg, h.max = tR, h.maxBy = nR, h.mean = rR, h.meanBy = iR, h.min = oR, h.minBy = aR, h.stubArray = vl, h.stubFalse = Vl, h.stubObject = YU, h.stubString = PU, h.stubTrue = HU, h.multiply = sR, h.nth = UV, h.noConflict = BU, h.noop = wl, h.now = $o, h.pad = lU, h.padEnd = cU, h.padStart = uU, h.parseInt = dU, h.random = eU, h.reduce = yT, h.reduceRight = MT, h.repeat = hU, h.replace = fU, h.result = Gg, h.round = lR, h.runInContext = T, h.sample = ZT, h.size = ET, h.snakeCase = pU, h.some = ST, h.sortedIndex = JV, h.sortedIndexBy = bV, h.sortedIndexOf = EV, h.sortedLastIndex = SV, h.sortedLastIndexBy = FV, h.sortedLastIndexOf = AV, h.startCase = wU, h.startsWith = vU, h.subtract = cR, h.sum = uR, h.sumBy = dR, h.template = VU, h.times = jU, h.toFinite = on, h.toInteger = X, h.toLength = Vh, h.toLower = TU, h.toNumber = Mt, h.toSafeInteger = Tg, h.toString = oe, h.toUpper = gU, h.trim = UU, h.trimEnd = RU, h.trimStart = NU, h.truncate = yU, h.unescape = MU, h.uniqueId = LU, h.upperCase = kU, h.upperFirst = hl, h.each = ih, h.eachRight = oh, h.first = eh, ml(h, function() {
        var e = {};
        return zt(h, function(n, o) {
          se.call(h.prototype, o) || (e[o] = n);
        }), e;
      }(), { chain: !1 }), h.VERSION = a, Tt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        h[e].placeholder = h;
      }), Tt(["drop", "take"], function(e, n) {
        ee.prototype[e] = function(o) {
          o = o === r ? 1 : be(X(o), 0);
          var s = this.__filtered__ && !n ? new ee(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = Qe(o, s.__takeCount__) : s.__views__.push({
            size: Qe(o, _t),
            type: e + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, ee.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), Tt(["filter", "map", "takeWhile"], function(e, n) {
        var o = n + 1, s = o == Me || o == We;
        ee.prototype[e] = function(u) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: _(u, 3),
            type: o
          }), f.__filtered__ = f.__filtered__ || s, f;
        };
      }), Tt(["head", "last"], function(e, n) {
        var o = "take" + (n ? "Right" : "");
        ee.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), Tt(["initial", "tail"], function(e, n) {
        var o = "drop" + (n ? "" : "Right");
        ee.prototype[e] = function() {
          return this.__filtered__ ? new ee(this) : this[o](1);
        };
      }), ee.prototype.compact = function() {
        return this.filter(et);
      }, ee.prototype.find = function(e) {
        return this.filter(e).head();
      }, ee.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, ee.prototype.invokeMap = $(function(e, n) {
        return typeof e == "function" ? new ee(this) : this.map(function(o) {
          return pi(o, e, n);
        });
      }), ee.prototype.reject = function(e) {
        return this.filter(Ko(_(e)));
      }, ee.prototype.slice = function(e, n) {
        e = X(e);
        var o = this;
        return o.__filtered__ && (e > 0 || n < 0) ? new ee(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), n !== r && (n = X(n), o = n < 0 ? o.dropRight(-n) : o.take(n - e)), o);
      }, ee.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, ee.prototype.toArray = function() {
        return this.take(_t);
      }, zt(ee.prototype, function(e, n) {
        var o = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), u = h[s ? "take" + (n == "last" ? "Right" : "") : n], f = s || /^find/.test(n);
        !u || (h.prototype[n] = function() {
          var m = this.__wrapped__, v = s ? [1] : arguments, g = m instanceof ee, Z = v[0], J = g || j(m), b = function(K) {
            var ne = u.apply(h, wn([K], v));
            return s && S ? ne[0] : ne;
          };
          J && o && typeof Z == "function" && Z.length != 1 && (g = J = !1);
          var S = this.__chain__, I = !!this.__actions__.length, G = f && !S, L = g && !I;
          if (!f && J) {
            m = L ? m : new ee(this);
            var Y = e.apply(m, v);
            return Y.__actions__.push({ func: Xo, args: [b], thisArg: r }), new Ut(Y, S);
          }
          return G && L ? e.apply(this, v) : (Y = this.thru(b), G ? s ? Y.value()[0] : Y.value() : Y);
        });
      }), Tt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Uo[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
        h.prototype[e] = function() {
          var u = arguments;
          if (s && !this.__chain__) {
            var f = this.value();
            return n.apply(j(f) ? f : [], u);
          }
          return this[o](function(m) {
            return n.apply(j(m) ? m : [], u);
          });
        };
      }), zt(ee.prototype, function(e, n) {
        var o = h[n];
        if (o) {
          var s = o.name + "";
          se.call(vr, s) || (vr[s] = []), vr[s].push({ name: n, func: o });
        }
      }), vr[_o(r, A).name] = [{
        name: "wrapper",
        func: r
      }], ee.prototype.clone = Mv, ee.prototype.reverse = kv, ee.prototype.value = Zv, h.prototype.at = nT, h.prototype.chain = rT, h.prototype.commit = iT, h.prototype.next = oT, h.prototype.plant = sT, h.prototype.reverse = lT, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = cT, h.prototype.first = h.prototype.head, si && (h.prototype[si] = aT), h;
    }, pr = iv();
    Cn ? ((Cn.exports = pr)._ = pr, ps._ = pr) : xe._ = pr;
  }).call(Ui);
})(Ze, Ze.exports);
const SN = "/alarms?_s=", Ga = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, FN = async (t, i) => {
  try {
    return (await Fn.put(
      `/alarms/${t}?ack=${i}`,
      {
        body: `alarm=${t}`
      },
      Ga
    )).status === 204;
  } catch {
    return !1;
  }
}, AN = async (t, i) => {
  try {
    return (await Fn.put(
      `/alarms/${t}?${i}=true`,
      {
        body: `alarm=${t}`
      },
      Ga
    )).status === 204;
  } catch {
    return !1;
  }
}, WN = async (t, i) => {
  try {
    const r = t.join(",alarm.id==");
    return (await Sn.put(
      `alarms?_s=alarm.id==${r}&${i}=true`,
      null,
      Ga
    )).status == 204;
  } catch {
    return !1;
  }
}, CN = async () => {
  try {
    const t = `${SN}isSituation==true&limit=0`, i = await Sn(t);
    return i.status === 200 ? i.data : !1;
  } catch {
    return !1;
  }
}, xN = async (t) => {
  try {
    const i = t.join(",id=="), r = await Sn(`/alarms?_s=id==${i}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, vm = async (t) => {
  try {
    const i = await Sn(`/alarms/${t}`);
    return i.status === 200 ? i.data : null;
  } catch {
    return null;
  }
}, BN = async (t) => {
  try {
    const i = await Sn(`/events?_s=alarm.id==${t}`);
    return i.status === 200 ? i.data.event : null;
  } catch {
    return null;
  }
}, DN = async () => {
  try {
    const t = await Sn("/nodes?limit=0");
    return t.status === 200 ? t.data.node.map((a) => Ze.exports.pick(a, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, IN = async (t, i, r) => {
  try {
    return (await Sn.put(
      `/alarms/${t}/${i}`,
      `body=${r}`,
      Ga
    )).status == 204;
  } catch {
    return !1;
  }
}, ON = async (t, i) => {
  try {
    return (await Sn.delete(`/alarms/${t}/${i}`)).status == 204;
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
}, QN = "/alec", _N = "/alec/engine/configuration", Vm = "/alec/agreement/configuration", zN = "/alec/situation/statusList", Tm = async (t) => {
  try {
    return (await Fn.post(`${Vm}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, GN = async () => {
  try {
    const t = await Fn.get(`${Vm}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, YN = async (t, i) => {
  try {
    return (await Fn.post(_N, {
      distanceMeasureName: i ? pt.HELLINGER_OPTION : pt.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, gm = async (t, i) => {
  try {
    return (await Fn.post(`${QN}/situation/${i}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, PN = async () => {
  try {
    const t = await Fn.get(zN);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
}, HN = window.Pinia.defineStore, Xr = HN("situationsStore", {
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
      const t = await DN();
      t && (this.nodes = t);
    },
    async getSituations() {
      this.situations = [];
      const t = await CN(), i = await PN();
      if (t) {
        const r = t.alarm.map((c) => {
          const d = i.filter(
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
        const i = await vm(t);
        if (i) {
          const r = i.relatedAlarms.map((c) => c.id), l = await xN(r);
          i.alarms = Ze.exports.sortBy(l, ["id"]), this.situationDetail = i;
        }
      }
    },
    async getEvents(t, i) {
      const r = {};
      await Promise.all(
        i.map(async (a) => {
          const l = await BN(a);
          l && (r[a] = Ze.exports.reverse(l));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    }
  }
}), jN = window.Vue.openBlock, XN = window.Vue.createElementBlock, LN = window.Vue.createElementVNode;
var $N = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const qN = {}, KN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ey = /* @__PURE__ */ LN("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), ty = [
  ey
];
function ny(t, i) {
  return jN(), XN("svg", KN, ty);
}
var qi = /* @__PURE__ */ $N(qN, [["render", ny]]);
var ry = Object.defineProperty, ef = Object.getOwnPropertySymbols, iy = Object.prototype.hasOwnProperty, oy = Object.prototype.propertyIsEnumerable, tf = (t, i, r) => i in t ? ry(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, nf = (t, i) => {
  for (var r in i || (i = {}))
    iy.call(i, r) && tf(t, r, i[r]);
  if (ef)
    for (var r of ef(i))
      oy.call(i, r) && tf(t, r, i[r]);
  return t;
};
const ay = window.Vue.defineComponent, sy = window.Vue.toRaw, Wl = window.Vue.h;
var ly = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const cy = {
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
}, uy = ay({
  props: cy,
  render() {
    const t = this.$attrs, i = t.class ? t.class.split(" ").reduce((l, c) => (l[c] = !0, l), {}) : {}, r = {};
    i["feather-icon"] = !0, this.flex && (i["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let a = sy(this.icon);
    return this.$slots.default ? Wl("span", { class: "feather-icon-container" }, [
      Wl(this.$slots.default()[0], nf({
        class: i
      }, r))
    ]) : Wl(a, nf({
      class: i
    }, r));
  }
});
var te = /* @__PURE__ */ ly(uy, [["__scopeId", "data-v-52cbf270"]]);
const dy = window.Vue.openBlock, hy = window.Vue.createElementBlock, fy = window.Vue.createElementVNode;
var py = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const my = {}, wy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vy = /* @__PURE__ */ fy("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Vy = [
  vy
];
function Ty(t, i) {
  return dy(), hy("svg", wy, Vy);
}
var Um = /* @__PURE__ */ py(my, [["render", Ty]]);
function rr(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var i = Number(t);
  return isNaN(i) ? i : i < 0 ? Math.ceil(i) : Math.floor(i);
}
function Oe(t, i) {
  if (i.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + i.length + " present");
}
function Ye(t) {
  Oe(1, arguments);
  var i = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && i === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || i === "[object Number]" ? new Date(t) : ((typeof t == "string" || i === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function gy(t, i) {
  Oe(2, arguments);
  var r = Ye(t).getTime(), a = rr(i);
  return new Date(r + a);
}
var Uy = {};
function Ki() {
  return Uy;
}
function hc(t) {
  var i = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return i.setUTCFullYear(t.getFullYear()), t.getTime() - i.getTime();
}
function Ry(t, i) {
  Oe(2, arguments);
  var r = Ye(t), a = Ye(i), l = r.getTime() - a.getTime();
  return l < 0 ? -1 : l > 0 ? 1 : l;
}
function Ny(t) {
  return Oe(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function yy(t) {
  if (Oe(1, arguments), !Ny(t) && typeof t != "number")
    return !1;
  var i = Ye(t);
  return !isNaN(Number(i));
}
function My(t, i) {
  Oe(2, arguments);
  var r = rr(i);
  return gy(t, -r);
}
var ky = 864e5;
function Zy(t) {
  Oe(1, arguments);
  var i = Ye(t), r = i.getTime();
  i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
  var a = i.getTime(), l = r - a;
  return Math.floor(l / ky) + 1;
}
function Ea(t) {
  Oe(1, arguments);
  var i = 1, r = Ye(t), a = r.getUTCDay(), l = (a < i ? 7 : 0) + a - i;
  return r.setUTCDate(r.getUTCDate() - l), r.setUTCHours(0, 0, 0, 0), r;
}
function Rm(t) {
  Oe(1, arguments);
  var i = Ye(t), r = i.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var l = Ea(a), c = new Date(0);
  c.setUTCFullYear(r, 0, 4), c.setUTCHours(0, 0, 0, 0);
  var d = Ea(c);
  return i.getTime() >= l.getTime() ? r + 1 : i.getTime() >= d.getTime() ? r : r - 1;
}
function Jy(t) {
  Oe(1, arguments);
  var i = Rm(t), r = new Date(0);
  r.setUTCFullYear(i, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = Ea(r);
  return a;
}
var by = 6048e5;
function Ey(t) {
  Oe(1, arguments);
  var i = Ye(t), r = Ea(i).getTime() - Jy(i).getTime();
  return Math.round(r / by) + 1;
}
function Sa(t, i) {
  var r, a, l, c, d, p, w, V;
  Oe(1, arguments);
  var U = Ki(), R = rr((r = (a = (l = (c = i == null ? void 0 : i.weekStartsOn) !== null && c !== void 0 ? c : i == null || (d = i.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && l !== void 0 ? l : U.weekStartsOn) !== null && a !== void 0 ? a : (w = U.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ye(t), F = y.getUTCDay(), E = (F < R ? 7 : 0) + F - R;
  return y.setUTCDate(y.getUTCDate() - E), y.setUTCHours(0, 0, 0, 0), y;
}
function Nm(t, i) {
  var r, a, l, c, d, p, w, V;
  Oe(1, arguments);
  var U = Ye(t), R = U.getUTCFullYear(), y = Ki(), F = rr((r = (a = (l = (c = i == null ? void 0 : i.firstWeekContainsDate) !== null && c !== void 0 ? c : i == null || (d = i.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && l !== void 0 ? l : y.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = y.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var E = new Date(0);
  E.setUTCFullYear(R + 1, 0, F), E.setUTCHours(0, 0, 0, 0);
  var D = Sa(E, i), C = new Date(0);
  C.setUTCFullYear(R, 0, F), C.setUTCHours(0, 0, 0, 0);
  var A = Sa(C, i);
  return U.getTime() >= D.getTime() ? R + 1 : U.getTime() >= A.getTime() ? R : R - 1;
}
function Sy(t, i) {
  var r, a, l, c, d, p, w, V;
  Oe(1, arguments);
  var U = Ki(), R = rr((r = (a = (l = (c = i == null ? void 0 : i.firstWeekContainsDate) !== null && c !== void 0 ? c : i == null || (d = i.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && l !== void 0 ? l : U.firstWeekContainsDate) !== null && a !== void 0 ? a : (w = U.locale) === null || w === void 0 || (V = w.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = Nm(t, i), F = new Date(0);
  F.setUTCFullYear(y, 0, R), F.setUTCHours(0, 0, 0, 0);
  var E = Sa(F, i);
  return E;
}
var Fy = 6048e5;
function Ay(t, i) {
  Oe(1, arguments);
  var r = Ye(t), a = Sa(r, i).getTime() - Sy(r, i).getTime();
  return Math.round(a / Fy) + 1;
}
function le(t, i) {
  for (var r = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < i; )
    a = "0" + a;
  return r + a;
}
var Wy = {
  y: function(t, i) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return le(i === "yy" ? a % 100 : a, i.length);
  },
  M: function(t, i) {
    var r = t.getUTCMonth();
    return i === "M" ? String(r + 1) : le(r + 1, 2);
  },
  d: function(t, i) {
    return le(t.getUTCDate(), i.length);
  },
  a: function(t, i) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (i) {
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
  h: function(t, i) {
    return le(t.getUTCHours() % 12 || 12, i.length);
  },
  H: function(t, i) {
    return le(t.getUTCHours(), i.length);
  },
  m: function(t, i) {
    return le(t.getUTCMinutes(), i.length);
  },
  s: function(t, i) {
    return le(t.getUTCSeconds(), i.length);
  },
  S: function(t, i) {
    var r = i.length, a = t.getUTCMilliseconds(), l = Math.floor(a * Math.pow(10, r - 3));
    return le(l, i.length);
  }
};
const yn = Wy;
var kr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Cy = {
  G: function(t, i, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (i) {
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
  y: function(t, i, r) {
    if (i === "yo") {
      var a = t.getUTCFullYear(), l = a > 0 ? a : 1 - a;
      return r.ordinalNumber(l, {
        unit: "year"
      });
    }
    return yn.y(t, i);
  },
  Y: function(t, i, r, a) {
    var l = Nm(t, a), c = l > 0 ? l : 1 - l;
    if (i === "YY") {
      var d = c % 100;
      return le(d, 2);
    }
    return i === "Yo" ? r.ordinalNumber(c, {
      unit: "year"
    }) : le(c, i.length);
  },
  R: function(t, i) {
    var r = Rm(t);
    return le(r, i.length);
  },
  u: function(t, i) {
    var r = t.getUTCFullYear();
    return le(r, i.length);
  },
  Q: function(t, i, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (i) {
      case "Q":
        return String(a);
      case "QQ":
        return le(a, 2);
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
  q: function(t, i, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (i) {
      case "q":
        return String(a);
      case "qq":
        return le(a, 2);
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
  M: function(t, i, r) {
    var a = t.getUTCMonth();
    switch (i) {
      case "M":
      case "MM":
        return yn.M(t, i);
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
  L: function(t, i, r) {
    var a = t.getUTCMonth();
    switch (i) {
      case "L":
        return String(a + 1);
      case "LL":
        return le(a + 1, 2);
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
  w: function(t, i, r, a) {
    var l = Ay(t, a);
    return i === "wo" ? r.ordinalNumber(l, {
      unit: "week"
    }) : le(l, i.length);
  },
  I: function(t, i, r) {
    var a = Ey(t);
    return i === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : le(a, i.length);
  },
  d: function(t, i, r) {
    return i === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : yn.d(t, i);
  },
  D: function(t, i, r) {
    var a = Zy(t);
    return i === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : le(a, i.length);
  },
  E: function(t, i, r) {
    var a = t.getUTCDay();
    switch (i) {
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
  e: function(t, i, r, a) {
    var l = t.getUTCDay(), c = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "e":
        return String(c);
      case "ee":
        return le(c, 2);
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
  c: function(t, i, r, a) {
    var l = t.getUTCDay(), c = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "c":
        return String(c);
      case "cc":
        return le(c, i.length);
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
  i: function(t, i, r) {
    var a = t.getUTCDay(), l = a === 0 ? 7 : a;
    switch (i) {
      case "i":
        return String(l);
      case "ii":
        return le(l, i.length);
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
  a: function(t, i, r) {
    var a = t.getUTCHours(), l = a / 12 >= 1 ? "pm" : "am";
    switch (i) {
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
  b: function(t, i, r) {
    var a = t.getUTCHours(), l;
    switch (a === 12 ? l = kr.noon : a === 0 ? l = kr.midnight : l = a / 12 >= 1 ? "pm" : "am", i) {
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
  B: function(t, i, r) {
    var a = t.getUTCHours(), l;
    switch (a >= 17 ? l = kr.evening : a >= 12 ? l = kr.afternoon : a >= 4 ? l = kr.morning : l = kr.night, i) {
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
  h: function(t, i, r) {
    if (i === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return yn.h(t, i);
  },
  H: function(t, i, r) {
    return i === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : yn.H(t, i);
  },
  K: function(t, i, r) {
    var a = t.getUTCHours() % 12;
    return i === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : le(a, i.length);
  },
  k: function(t, i, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), i === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : le(a, i.length);
  },
  m: function(t, i, r) {
    return i === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : yn.m(t, i);
  },
  s: function(t, i, r) {
    return i === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : yn.s(t, i);
  },
  S: function(t, i) {
    return yn.S(t, i);
  },
  X: function(t, i, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    if (c === 0)
      return "Z";
    switch (i) {
      case "X":
        return of(c);
      case "XXXX":
      case "XX":
        return qn(c);
      case "XXXXX":
      case "XXX":
      default:
        return qn(c, ":");
    }
  },
  x: function(t, i, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (i) {
      case "x":
        return of(c);
      case "xxxx":
      case "xx":
        return qn(c);
      case "xxxxx":
      case "xxx":
      default:
        return qn(c, ":");
    }
  },
  O: function(t, i, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (i) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + rf(c, ":");
      case "OOOO":
      default:
        return "GMT" + qn(c, ":");
    }
  },
  z: function(t, i, r, a) {
    var l = a._originalDate || t, c = l.getTimezoneOffset();
    switch (i) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + rf(c, ":");
      case "zzzz":
      default:
        return "GMT" + qn(c, ":");
    }
  },
  t: function(t, i, r, a) {
    var l = a._originalDate || t, c = Math.floor(l.getTime() / 1e3);
    return le(c, i.length);
  },
  T: function(t, i, r, a) {
    var l = a._originalDate || t, c = l.getTime();
    return le(c, i.length);
  }
};
function rf(t, i) {
  var r = t > 0 ? "-" : "+", a = Math.abs(t), l = Math.floor(a / 60), c = a % 60;
  if (c === 0)
    return r + String(l);
  var d = i || "";
  return r + String(l) + d + le(c, 2);
}
function of(t, i) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + le(Math.abs(t) / 60, 2);
  }
  return qn(t, i);
}
function qn(t, i) {
  var r = i || "", a = t > 0 ? "-" : "+", l = Math.abs(t), c = le(Math.floor(l / 60), 2), d = le(l % 60, 2);
  return a + c + r + d;
}
const xy = Cy;
var af = function(t, i) {
  switch (t) {
    case "P":
      return i.date({
        width: "short"
      });
    case "PP":
      return i.date({
        width: "medium"
      });
    case "PPP":
      return i.date({
        width: "long"
      });
    case "PPPP":
    default:
      return i.date({
        width: "full"
      });
  }
}, ym = function(t, i) {
  switch (t) {
    case "p":
      return i.time({
        width: "short"
      });
    case "pp":
      return i.time({
        width: "medium"
      });
    case "ppp":
      return i.time({
        width: "long"
      });
    case "pppp":
    default:
      return i.time({
        width: "full"
      });
  }
}, By = function(t, i) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], l = r[2];
  if (!l)
    return af(t, i);
  var c;
  switch (a) {
    case "P":
      c = i.dateTime({
        width: "short"
      });
      break;
    case "PP":
      c = i.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      c = i.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      c = i.dateTime({
        width: "full"
      });
      break;
  }
  return c.replace("{{date}}", af(a, i)).replace("{{time}}", ym(l, i));
}, Dy = {
  p: ym,
  P: By
};
const Iy = Dy;
var Oy = ["D", "DD"], Qy = ["YY", "YYYY"];
function _y(t) {
  return Oy.indexOf(t) !== -1;
}
function zy(t) {
  return Qy.indexOf(t) !== -1;
}
function sf(t, i, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(i, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(i, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(i, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(i, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Gy = {
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
}, Yy = function(t, i, r) {
  var a, l = Gy[t];
  return typeof l == "string" ? a = l : i === 1 ? a = l.one : a = l.other.replace("{{count}}", i.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Py = Yy;
function Cl(t) {
  return function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = i.width ? String(i.width) : t.defaultWidth, a = t.formats[r] || t.formats[t.defaultWidth];
    return a;
  };
}
var Hy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, jy = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Xy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ly = {
  date: Cl({
    formats: Hy,
    defaultWidth: "full"
  }),
  time: Cl({
    formats: jy,
    defaultWidth: "full"
  }),
  dateTime: Cl({
    formats: Xy,
    defaultWidth: "full"
  })
};
const $y = Ly;
var qy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ky = function(t, i, r, a) {
  return qy[t];
};
const eM = Ky;
function Ri(t) {
  return function(i, r) {
    var a = r != null && r.context ? String(r.context) : "standalone", l;
    if (a === "formatting" && t.formattingValues) {
      var c = t.defaultFormattingWidth || t.defaultWidth, d = r != null && r.width ? String(r.width) : c;
      l = t.formattingValues[d] || t.formattingValues[c];
    } else {
      var p = t.defaultWidth, w = r != null && r.width ? String(r.width) : t.defaultWidth;
      l = t.values[w] || t.values[p];
    }
    var V = t.argumentCallback ? t.argumentCallback(i) : i;
    return l[V];
  };
}
var tM = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, nM = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, rM = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, iM = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, oM = {
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
}, aM = {
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
}, sM = function(t, i) {
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
}, lM = {
  ordinalNumber: sM,
  era: Ri({
    values: tM,
    defaultWidth: "wide"
  }),
  quarter: Ri({
    values: nM,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: Ri({
    values: rM,
    defaultWidth: "wide"
  }),
  day: Ri({
    values: iM,
    defaultWidth: "wide"
  }),
  dayPeriod: Ri({
    values: oM,
    defaultWidth: "wide",
    formattingValues: aM,
    defaultFormattingWidth: "wide"
  })
};
const cM = lM;
function Ni(t) {
  return function(i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, l = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth], c = i.match(l);
    if (!c)
      return null;
    var d = c[0], p = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth], w = Array.isArray(p) ? dM(p, function(R) {
      return R.test(d);
    }) : uM(p, function(R) {
      return R.test(d);
    }), V;
    V = t.valueCallback ? t.valueCallback(w) : w, V = r.valueCallback ? r.valueCallback(V) : V;
    var U = i.slice(d.length);
    return {
      value: V,
      rest: U
    };
  };
}
function uM(t, i) {
  for (var r in t)
    if (t.hasOwnProperty(r) && i(t[r]))
      return r;
}
function dM(t, i) {
  for (var r = 0; r < t.length; r++)
    if (i(t[r]))
      return r;
}
function hM(t) {
  return function(i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = i.match(t.matchPattern);
    if (!a)
      return null;
    var l = a[0], c = i.match(t.parsePattern);
    if (!c)
      return null;
    var d = t.valueCallback ? t.valueCallback(c[0]) : c[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    var p = i.slice(l.length);
    return {
      value: d,
      rest: p
    };
  };
}
var fM = /^(\d+)(th|st|nd|rd)?/i, pM = /\d+/i, mM = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, wM = {
  any: [/^b/i, /^(a|c)/i]
}, vM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, VM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, TM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, gM = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, UM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, RM = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, NM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, yM = {
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
}, MM = {
  ordinalNumber: hM({
    matchPattern: fM,
    parsePattern: pM,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: Ni({
    matchPatterns: mM,
    defaultMatchWidth: "wide",
    parsePatterns: wM,
    defaultParseWidth: "any"
  }),
  quarter: Ni({
    matchPatterns: vM,
    defaultMatchWidth: "wide",
    parsePatterns: VM,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: Ni({
    matchPatterns: TM,
    defaultMatchWidth: "wide",
    parsePatterns: gM,
    defaultParseWidth: "any"
  }),
  day: Ni({
    matchPatterns: UM,
    defaultMatchWidth: "wide",
    parsePatterns: RM,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ni({
    matchPatterns: NM,
    defaultMatchWidth: "any",
    parsePatterns: yM,
    defaultParseWidth: "any"
  })
};
const kM = MM;
var ZM = {
  code: "en-US",
  formatDistance: Py,
  formatLong: $y,
  formatRelative: eM,
  localize: cM,
  match: kM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Mm = ZM;
var JM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, bM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, EM = /^'([^]*?)'?$/, SM = /''/g, FM = /[a-zA-Z]/;
function AM(t, i, r) {
  var a, l, c, d, p, w, V, U, R, y, F, E, D, C, A, Q, O, P;
  Oe(2, arguments);
  var M = String(i), W = Ki(), x = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : W.locale) !== null && a !== void 0 ? a : Mm, z = rr((c = (d = (p = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (V = r.locale) === null || V === void 0 || (U = V.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && p !== void 0 ? p : W.firstWeekContainsDate) !== null && d !== void 0 ? d : (R = W.locale) === null || R === void 0 || (y = R.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
  if (!(z >= 1 && z <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var de = rr((F = (E = (D = (C = r == null ? void 0 : r.weekStartsOn) !== null && C !== void 0 ? C : r == null || (A = r.locale) === null || A === void 0 || (Q = A.options) === null || Q === void 0 ? void 0 : Q.weekStartsOn) !== null && D !== void 0 ? D : W.weekStartsOn) !== null && E !== void 0 ? E : (O = W.locale) === null || O === void 0 || (P = O.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && F !== void 0 ? F : 0);
  if (!(de >= 0 && de <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!x.localize)
    throw new RangeError("locale must contain localize property");
  if (!x.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var he = Ye(t);
  if (!yy(he))
    throw new RangeError("Invalid time value");
  var ve = hc(he), Ve = My(he, ve), ge = {
    firstWeekContainsDate: z,
    weekStartsOn: de,
    locale: x,
    _originalDate: he
  }, Me = M.match(bM).map(function(ce) {
    var We = ce[0];
    if (We === "p" || We === "P") {
      var Ce = Iy[We];
      return Ce(ce, x.formatLong);
    }
    return ce;
  }).join("").match(JM).map(function(ce) {
    if (ce === "''")
      return "'";
    var We = ce[0];
    if (We === "'")
      return WM(ce);
    var Ce = xy[We];
    if (Ce)
      return !(r != null && r.useAdditionalWeekYearTokens) && zy(ce) && sf(ce, i, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && _y(ce) && sf(ce, i, String(t)), Ce(Ve, ce, x.localize, ge);
    if (We.match(FM))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + We + "`");
    return ce;
  }).join("");
  return Me;
}
function WM(t) {
  var i = t.match(EM);
  return i ? i[1].replace(SM, "'") : t;
}
function km(t, i) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in i)
    Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  return t;
}
function CM(t) {
  return km({}, t);
}
var lf = 1e3 * 60, Fa = 60 * 24, cf = Fa * 30, uf = Fa * 365;
function xM(t, i, r) {
  var a, l, c;
  Oe(2, arguments);
  var d = Ki(), p = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : d.locale) !== null && a !== void 0 ? a : Mm;
  if (!p.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = Ry(t, i);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var V = km(CM(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), U, R;
  w > 0 ? (U = Ye(i), R = Ye(t)) : (U = Ye(t), R = Ye(i));
  var y = String((c = r == null ? void 0 : r.roundingMethod) !== null && c !== void 0 ? c : "round"), F;
  if (y === "floor")
    F = Math.floor;
  else if (y === "ceil")
    F = Math.ceil;
  else if (y === "round")
    F = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var E = R.getTime() - U.getTime(), D = E / lf, C = hc(R) - hc(U), A = (E - C) / lf, Q = r == null ? void 0 : r.unit, O;
  if (Q ? O = String(Q) : D < 1 ? O = "second" : D < 60 ? O = "minute" : D < Fa ? O = "hour" : A < cf ? O = "day" : A < uf ? O = "month" : O = "year", O === "second") {
    var P = F(E / 1e3);
    return p.formatDistance("xSeconds", P, V);
  } else if (O === "minute") {
    var M = F(D);
    return p.formatDistance("xMinutes", M, V);
  } else if (O === "hour") {
    var W = F(D / 60);
    return p.formatDistance("xHours", W, V);
  } else if (O === "day") {
    var x = F(A / Fa);
    return p.formatDistance("xDays", x, V);
  } else if (O === "month") {
    var z = F(A / cf);
    return z === 12 && Q !== "month" ? p.formatDistance("xYears", 1, V) : p.formatDistance("xMonths", z, V);
  } else if (O === "year") {
    var de = F(A / uf);
    return p.formatDistance("xYears", de, V);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const jt = (t) => {
  let i = "";
  if (t)
    try {
      i = AM(new Date(t), pt.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return i;
}, BM = window.Vue.defineComponent, Pt = window.Vue.unref, df = window.Vue.normalizeClass, dn = window.Vue.createElementVNode, yi = window.Vue.toDisplayString, hf = window.Vue.createVNode, Zr = window.Vue.openBlock, Jr = window.Vue.createElementBlock, xl = window.Vue.createCommentVNode, Zm = window.Vue.createTextVNode, DM = window.Vue.renderList, IM = window.Vue.Fragment, OM = window.Vue.pushScopeId, QM = window.Vue.popScopeId, Jm = (t) => (OM("data-v-7c453c05"), t = t(), QM(), t), _M = { class: "content" }, zM = { class: "title-row" }, GM = { class: "title" }, YM = {
  key: 0,
  class: "accepted"
}, PM = {
  key: 1,
  class: "rejected"
}, HM = /* @__PURE__ */ Jm(() => /* @__PURE__ */ dn("span", { class: "info-title" }, " First Event: ", -1)), jM = /* @__PURE__ */ Jm(() => /* @__PURE__ */ dn("hr", null, null, -1)), XM = {
  key: 0,
  class: "count-info"
}, LM = /* @__PURE__ */ Zm(" Alarms: "), $M = { class: "info-title" }, qM = /* @__PURE__ */ BM({
  __name: "SituationCard",
  props: {
    situationInfo: null
  },
  emits: ["situation-selected"],
  setup(t, { emit: i }) {
    const r = t, a = pt.ACCEPTED, l = pt.REJECTED, c = r.situationInfo.description.replace(/(<([^>]+)>)/gi, "").substring(0, 230) + "...", d = () => {
      var p;
      i("situation-selected", (p = r.situationInfo) == null ? void 0 : p.id);
    };
    return (p, w) => {
      var V, U, R;
      return Zr(), Jr("div", {
        onClick: d,
        class: df(["card", {
          rejected: r.situationInfo.status == Pt(l)
        }])
      }, [
        dn("div", {
          class: df(["severity-line", [`${(U = (V = r.situationInfo) == null ? void 0 : V.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
        }, null, 2),
        dn("div", _M, [
          dn("div", zM, [
            dn("div", GM, "Situation " + yi((R = r.situationInfo) == null ? void 0 : R.id), 1),
            r.situationInfo.status == Pt(a) ? (Zr(), Jr("div", YM, [
              hf(Pt(te), {
                icon: Pt(qi),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : xl("", !0),
            r.situationInfo.status == Pt(l) ? (Zr(), Jr("div", PM, [
              hf(Pt(te), {
                icon: Pt(Um),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : xl("", !0)
          ]),
          dn("div", null, [
            HM,
            Zm(yi(Pt(jt)(r.situationInfo.firstEventTime)), 1)
          ]),
          dn("div", { class: "description" }, yi(c)),
          jM,
          r.situationInfo.relatedAlarms ? (Zr(), Jr("div", XM, [
            LM,
            dn("span", $M, yi(r.situationInfo.relatedAlarms.length), 1)
          ])) : xl("", !0),
          (Zr(!0), Jr(IM, null, DM(Pt(Ze.exports.keys)(
            Pt(Ze.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (y) => (Zr(), Jr("div", {
            class: "info-title",
            key: y
          }, " - " + yi(y), 1))), 128))
        ])
      ], 2);
    };
  }
});
const KM = /* @__PURE__ */ ye(qM, [["__scopeId", "data-v-7c453c05"]]), ek = window.Vue.openBlock, tk = window.Vue.createElementBlock, nk = window.Vue.createElementVNode;
var rk = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const ik = {}, ok = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ak = /* @__PURE__ */ nk("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), sk = [
  ak
];
function lk(t, i) {
  return ek(), tk("svg", ok, sk);
}
var ck = /* @__PURE__ */ rk(ik, [["render", lk]]);
const uk = window.Vue.openBlock, dk = window.Vue.createElementBlock, bm = window.Vue.createElementVNode;
var hk = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const fk = {}, pk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, mk = /* @__PURE__ */ bm("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), wk = /* @__PURE__ */ bm("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), vk = [
  mk,
  wk
];
function Vk(t, i) {
  return uk(), dk("svg", pk, vk);
}
var Tk = /* @__PURE__ */ hk(fk, [["render", Vk]]);
const gk = window.Vue.openBlock, Uk = window.Vue.createElementBlock, Rk = window.Vue.createElementVNode;
var Nk = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const yk = {}, Mk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kk = /* @__PURE__ */ Rk("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), Zk = [
  kk
];
function Jk(t, i) {
  return gk(), Uk("svg", Mk, Zk);
}
var bk = /* @__PURE__ */ Nk(yk, [["render", Jk]]);
const Ek = window.Vue.openBlock, Sk = window.Vue.createElementBlock, Fk = window.Vue.createElementVNode;
var Ak = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const Wk = {}, Ck = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xk = /* @__PURE__ */ Fk("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), Bk = [
  xk
];
function Dk(t, i) {
  return Ek(), Sk("svg", Ck, Bk);
}
var Em = /* @__PURE__ */ Ak(Wk, [["render", Dk]]);
const Ik = window.Vue.defineComponent, Mn = window.Vue.unref, ra = window.Vue.normalizeClass, ia = window.Vue.createVNode, Ok = window.Vue.openBlock, Qk = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const _k = { class: "paginator" }, zk = /* @__PURE__ */ Ik({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(t, { emit: i }) {
    const r = t, a = (l) => {
      l >= 0 && l <= r.totalPages - 1 && i("go-to-page", l);
    };
    return (l, c) => (Ok(), Qk("div", _k, [
      ia(Mn(te), {
        icon: Mn(ck),
        "aria-hidden": "true",
        class: ra(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[0] || (c[0] = (d) => a(0))
      }, null, 8, ["icon", "class"]),
      ia(Mn(te), {
        icon: Mn(bk),
        "aria-hidden": "true",
        class: ra(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[1] || (c[1] = (d) => a(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      ia(Mn(te), {
        icon: Mn(Em),
        "aria-hidden": "true",
        class: ra(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[2] || (c[2] = (d) => a(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      ia(Mn(te), {
        icon: Mn(Tk),
        "aria-hidden": "true",
        class: ra(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[3] || (c[3] = (d) => a(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const Gk = /* @__PURE__ */ ye(zk, [["__scopeId", "data-v-40758818"]]);
const ae = function(t) {
  t = t || "feather";
  const i = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), i].join("-");
}, Yk = window.Vue.computed, Sm = (t, i) => {
  const r = {};
  return Object.keys(i).forEach((a) => {
    r[`${a}Label`] = Yk(() => t.value[a] ? t.value[a] : i[a]);
  }), r;
};
const Gi = function(t, i) {
  return window ? window.setTimeout(t, i) : setTimeout(t, i);
}, Yi = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var Pk = Object.defineProperty, Hk = Object.defineProperties, jk = Object.getOwnPropertyDescriptors, ff = Object.getOwnPropertySymbols, Xk = Object.prototype.hasOwnProperty, Lk = Object.prototype.propertyIsEnumerable, pf = (t, i, r) => i in t ? Pk(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, mf = (t, i) => {
  for (var r in i || (i = {}))
    Xk.call(i, r) && pf(t, r, i[r]);
  if (ff)
    for (var r of ff(i))
      Lk.call(i, r) && pf(t, r, i[r]);
  return t;
}, $k = (t, i) => Hk(t, jk(i));
const qk = window.Vue.defineComponent, Kk = window.Vue.h;
var eZ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const tZ = {
  center: {
    type: Boolean,
    default: !1
  }
}, nZ = qk({
  props: tZ,
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
        const { clientWidth: i, clientHeight: r } = this.parent, a = Math.round(Math.max(i, r));
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
        this.styles = $k(mf({}, l), {
          height: `${a}px`,
          width: `${a}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Yi(this.failsafe), this.failsafe = Gi(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return Kk("div", {
        style: mf({}, this.styles),
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
var ir = /* @__PURE__ */ eZ(nZ, [["__scopeId", "data-v-18e2a5db"]]);
const rZ = window.Vue.openBlock, iZ = window.Vue.createElementBlock, oZ = window.Vue.createElementVNode;
var aZ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const sZ = {}, lZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cZ = /* @__PURE__ */ oZ("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), uZ = [
  cZ
];
function dZ(t, i) {
  return rZ(), iZ("svg", lZ, uZ);
}
var Ya = /* @__PURE__ */ aZ(sZ, [["render", dZ]]);
const wf = window.Vue.computed, hZ = (t, i, r) => {
  const a = wf(() => i.value.filter((c) => !c.disabled)), l = wf(() => t.value ? a.value.indexOf(t.value) : -1);
  return {
    selectPrevious() {
      t.value && t.value.disabled || (l.value === 0 ? r(a.value[a.value.length - 1]) : r(a.value[l.value - 1]));
    },
    selectNext() {
      t.value && t.value.disabled || (l.value === a.value.length - 1 ? r(a.value[0]) : r(a.value[l.value + 1]));
    }
  };
};
const fZ = window.Vue.openBlock, pZ = window.Vue.createElementBlock, Fc = window.Vue.createElementVNode;
var mZ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const wZ = {}, vZ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VZ = /* @__PURE__ */ Fc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), TZ = /* @__PURE__ */ Fc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), gZ = /* @__PURE__ */ Fc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), UZ = [
  VZ,
  TZ,
  gZ
];
function RZ(t, i) {
  return fZ(), pZ("svg", vZ, UZ);
}
var NZ = /* @__PURE__ */ mZ(wZ, [["render", RZ]]), yZ = Object.defineProperty, MZ = Object.defineProperties, kZ = Object.getOwnPropertyDescriptors, vf = Object.getOwnPropertySymbols, ZZ = Object.prototype.hasOwnProperty, JZ = Object.prototype.propertyIsEnumerable, Vf = (t, i, r) => i in t ? yZ(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Fm = (t, i) => {
  for (var r in i || (i = {}))
    ZZ.call(i, r) && Vf(t, r, i[r]);
  if (vf)
    for (var r of vf(i))
      JZ.call(i, r) && Vf(t, r, i[r]);
  return t;
}, Am = (t, i) => MZ(t, kZ(i));
const Lr = window.Vue.defineComponent, Pi = window.Vue.resolveComponent, Ht = window.Vue.openBlock, Ir = window.Vue.createElementBlock, bZ = window.Vue.createVNode, Aa = window.Vue.createBlock, EZ = window.Vue.withModifiers, Hr = window.Vue.inject, Hi = window.Vue.computed, SZ = window.Vue.normalizeClass, br = window.Vue.createElementVNode, Wa = window.Vue.toDisplayString, ya = window.Vue.renderSlot, Di = window.Vue.createCommentVNode, FZ = window.Vue.withDirectives, AZ = window.Vue.vShow, fc = window.Vue.ref, Tf = window.Vue.toRef, gf = window.Vue.nextTick, pc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Ac = window.Vue.provide, Uf = window.Vue.isRef, WZ = window.Vue.onBeforeUnmount;
var eo = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const CZ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, xZ = Lr({
  props: CZ,
  components: {
    FeatherIcon: te
  }
}), BZ = ["title"];
function DZ(t, i, r, a, l, c) {
  const d = Pi("FeatherIcon");
  return Ht(), Ir("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    bZ(d, { icon: t.icon }, null, 8, ["icon"])
  ], 8, BZ);
}
var IZ = /* @__PURE__ */ eo(xZ, [["render", DZ], ["__scopeId", "data-v-4265058e"]]);
const OZ = Lr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Ya;
    }
  },
  components: {
    ActionIcon: IZ
  }
});
function QZ(t, i, r, a, l, c) {
  const d = Pi("ActionIcon");
  return Ht(), Aa(d, {
    onClick: i[0] || (i[0] = EZ((p) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var _Z = /* @__PURE__ */ eo(OZ, [["render", QZ]]);
const zZ = Lr({
  computed: {
    errorIcon() {
      return NZ;
    }
  },
  components: {
    FeatherIcon: te
  }
});
function GZ(t, i, r, a, l, c) {
  const d = Pi("FeatherIcon");
  return Ht(), Aa(d, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var YZ = /* @__PURE__ */ eo(zZ, [["render", GZ], ["__scopeId", "data-v-0b8faef3"]]);
const PZ = {
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
}, HZ = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, jZ = Lr({
  emits: HZ,
  props: PZ,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = Hr("wrapperOptions", {}), i = Hr("validationErrorMessage", !1), r = Hi(() => t.error ? t.error : i && i.value ? i.value : !1);
    return Am(Fm({}, t), { error: r });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((i) => i.children && i.children.length !== 0) !== -1;
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
      const i = { childList: !0, subtree: !0 }, r = () => {
        const a = this.$el.querySelector(".prefix");
        this.prefixWidth = a ? a.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(t, i), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: _Z,
    ErrorIcon: YZ
  }
}), XZ = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, LZ = ["for"], $Z = { class: "prefix" }, qZ = { class: "post" };
function KZ(t, i, r, a, l, c) {
  const d = Pi("ClearIcon"), p = Pi("ErrorIcon");
  return Ht(), Ir("div", {
    class: SZ(["feather-input-wrapper-container", t.containerCls])
  }, [
    br("fieldset", XZ, [
      br("legend", null, Wa(t.label), 1)
    ]),
    br("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Wa(t.label), 9, LZ),
    br("div", {
      class: "feather-input-wrapper",
      onClick: i[1] || (i[1] = (...w) => t.handleWrapperClick && t.handleWrapperClick(...w))
    }, [
      br("div", $Z, [
        ya(t.$slots, "pre", {}, void 0, !0)
      ]),
      ya(t.$slots, "default", {}, void 0, !0),
      br("div", qZ, [
        t.showClear && t.computedClearText ? (Ht(), Aa(d, {
          key: 0,
          clear: t.computedClearText,
          onClear: i[0] || (i[0] = (w) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Di("", !0),
        t.error ? (Ht(), Aa(p, { key: 1 })) : Di("", !0),
        ya(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Wc = /* @__PURE__ */ eo(jZ, [["render", KZ], ["__scopeId", "data-v-4db296db"]]);
const e2 = Lr({
  setup() {
    const t = Hr("subTextOptions", {}), i = Hr("validationErrorMessage", !1), r = Hi(() => t.error ? t.error : i && i.value ? i.value : "");
    return Am(Fm({}, t), { error: r });
  }
}), t2 = { class: "feather-input-sub-text" }, n2 = {
  key: 0,
  class: "feather-input-spacer"
}, r2 = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, i2 = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function o2(t, i, r, a, l, c) {
  return FZ((Ht(), Ir("div", t2, [
    !t.hint && !t.error.length ? (Ht(), Ir("div", n2, "\xA0")) : Di("", !0),
    t.hint && !t.error.length ? (Ht(), Ir("div", r2, Wa(t.hint), 1)) : Di("", !0),
    t.error.length > 0 ? (Ht(), Ir("div", i2, Wa(t.error), 1)) : Di("", !0),
    ya(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [AZ, !t.inline || t.hint || t.error.length]
  ]);
}
var to = /* @__PURE__ */ eo(e2, [["render", o2], ["__scopeId", "data-v-8e0ac99e"]]);
const a2 = {
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
Lr({
  props: a2,
  setup(t) {
    const i = Hr("featherFormErrors", fc([])), r = Tf(t, "errorList"), a = Hi(() => {
      var U;
      return (U = r.value) != null && U.length ? r.value : i.value;
    }), l = Tf(t, "generalError"), c = (U) => {
      document.getElementById(U).focus();
    }, d = (U) => U.replace(/ \*$/, ""), p = fc(), w = (U) => `${d(U.label)} - ${U.message}`, V = Hi(() => (a.value.length && gf(() => p.value.focus()), t.headingText(a.value)));
    return pc(l, (U) => {
      U.length && gf(() => p.value.focus());
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
const no = (t, i, r, a, l) => {
  const c = Hr("featherForm", !1);
  if (a && c && t.value) {
    const d = fc("");
    Ac("validationErrorMessage", d);
    const p = () => {
      if (l && Uf(l) && l.value)
        return d.value = l.value, {
          success: !1,
          message: l.value,
          inputId: t.value,
          label: r
        };
      try {
        return a.validateSync(i.value), d.value = "", { success: !0 };
      } catch (U) {
        const R = U;
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
    return l && Uf(l) && pc(l, () => {
      c.runValidation();
    }), pc(t, (U, R) => {
      U && c && c.register(U, V), R && c && c.deregister(R);
    }, { immediate: !0 }), WZ(() => {
      c.deregister(t.value, !0);
    }), { validate: p };
  }
  return { validate: () => !0 };
}, ro = (t) => ({
  inherittedAttrs: Hi(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), io = {
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
}, oo = (t) => {
  Ac("subTextOptions", t);
}, Cc = {
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
}, xc = (t) => {
  Ac("wrapperOptions", t);
}, oa = window.Vue.ref, s2 = window.Vue.watch, l2 = window.Vue.watchEffect, Rf = window.Vue.computed, Bl = window.Vue.provide, Wm = (t, i, r, a, l) => {
  const c = oa([]), d = oa(), p = oa(), w = oa();
  l2(() => {
    if (!c.value.length)
      return;
    const A = c.value.map((Q) => Q.value);
    if (t.value !== void 0 && t.value !== null && (d.value = c.value[A.indexOf(t.value)]), !d.value && c.value.length) {
      let Q = c.value.filter((O) => !O.disabled);
      Q = Q.length ? Q : c.value, p.value = Q[0], p.value.first = !0;
    }
  }), s2(d, (A, Q) => {
    Q && (Q.checked = !1), A && (A.checked = !0);
  });
  const V = (A) => {
    A && A.disabled || (p.value && (p.value.first = !1), d.value !== A && (i("update:modelValue", A.value), d.value = A, A.focus()));
  }, U = Rf(() => d.value || p.value), R = hZ(U, c, V), y = Rf(() => ae("feather-radio-group"));
  w.value = y.value;
  const { validate: F } = no(w, t, r, a, l);
  return Bl("register", (A) => {
    c.value = [...c.value, A], w.value === y.value && (w.value = A.id);
  }), Bl("select", V), Bl("blur", (A) => {
    i("blur", A);
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
var c2 = Object.defineProperty, u2 = Object.defineProperties, d2 = Object.getOwnPropertyDescriptors, Nf = Object.getOwnPropertySymbols, h2 = Object.prototype.hasOwnProperty, f2 = Object.prototype.propertyIsEnumerable, yf = (t, i, r) => i in t ? c2(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, _r = (t, i) => {
  for (var r in i || (i = {}))
    h2.call(i, r) && yf(t, r, i[r]);
  if (Nf)
    for (var r of Nf(i))
      f2.call(i, r) && yf(t, r, i[r]);
  return t;
}, Cm = (t, i) => u2(t, d2(i));
const An = window.Vue.defineComponent, Ii = window.Vue.inject, Ca = window.Vue.computed, Oi = window.Vue.ref, bt = window.Vue.resolveComponent, mt = window.Vue.openBlock, ao = window.Vue.createElementBlock, xm = window.Vue.normalizeClass, Xt = window.Vue.renderSlot, bn = window.Vue.createBlock, ji = window.Vue.createCommentVNode, xa = window.Vue.createElementVNode, p2 = window.Vue.withModifiers, Pa = window.Vue.createVNode, Bm = window.Vue.toRef, mc = window.Vue.mergeProps, pn = window.Vue.withCtx, m2 = window.Vue.h, w2 = window.Vue.provide;
var Wn = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const v2 = {
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
}, V2 = An({
  props: v2,
  setup(t) {
    const i = Ii("isCondensed", null), r = Ca(() => i || t.condensed), a = Oi(!1);
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
    FeatherRipple: ir
  }
}), T2 = ["aria-disabled"];
function g2(t, i, r, a, l, c) {
  const d = bt("FeatherRipple");
  return mt(), ao("div", {
    class: xm(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: i[0] || (i[0] = (p) => t.clickable ? t.handleFocus : null),
    onFocusout: i[1] || (i[1] = (p) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    Xt(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (mt(), bn(d, { key: 0 })) : ji("", !0)
  ], 42, T2);
}
var Ha = /* @__PURE__ */ Wn(V2, [["render", g2], ["__scopeId", "data-v-44d413dc"]]);
const U2 = {
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
}, R2 = An({
  emits: ["delete"],
  props: U2,
  setup(t, i) {
    return {
      handleDelete: () => {
        t.disabled || i.emit("delete");
      },
      icon: Ya
    };
  },
  components: {
    FeatherIcon: te
  }
}), N2 = { class: "chip-delete" }, y2 = ["aria-label", "aria-describedby"];
function M2(t, i, r, a, l, c) {
  const d = bt("FeatherIcon");
  return mt(), ao("span", N2, [
    xa("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: i[0] || (i[0] = p2((...p) => t.handleDelete && t.handleDelete(...p), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      Pa(d, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, y2)
  ]);
}
var k2 = /* @__PURE__ */ Wn(R2, [["render", M2], ["__scopeId", "data-v-4bae6cb4"]]);
const Z2 = An({
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
}), J2 = ["title"];
function b2(t, i, r, a, l, c) {
  return mt(), ao("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    Xt(t.$slots, "default", {}, void 0, !0)
  ], 8, J2);
}
var ja = /* @__PURE__ */ Wn(Z2, [["render", b2], ["__scopeId", "data-v-1a0445b2"]]);
const E2 = {}, S2 = {
  class: "chip-icon",
  role: "presentation"
};
function F2(t, i) {
  return mt(), ao("span", S2, [
    Xt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var Xa = /* @__PURE__ */ Wn(E2, [["render", F2], ["__scopeId", "data-v-2230176f"]]);
const Mf = {
  delete: "Remove"
}, A2 = An({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Mf
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, i) {
    const r = Sm(Bm(t, "labels"), Mf), a = Ca(() => ae("chip-text")), l = () => {
      t.disabled || i.emit("click");
    }, c = _r({}, i.attrs);
    return t.disabled && delete c.onClick, Cm(_r({}, r), {
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
      return this.$slots.icon && this.$slots.icon().findIndex((i) => i.children && i.children.length !== 0 || typeof i.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ha,
    DeleteIcon: k2,
    Label: ja,
    PreIcon: Xa
  }
}), W2 = ["aria-disabled"];
function C2(t, i, r, a, l, c) {
  const d = bt("PreIcon"), p = bt("Label"), w = bt("DeleteIcon"), V = bt("Chip");
  return mt(), bn(V, mc(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: pn(() => [
      xa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        xa("span", mc(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (mt(), bn(d, { key: 0 }, {
            default: pn(() => [
              Xt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ji("", !0),
          Pa(p, { id: t.chipTextId }, {
            default: pn(() => [
              Xt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, W2),
      t.canDelete ? (mt(), bn(w, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: i[0] || (i[0] = (U) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ji("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var x2 = /* @__PURE__ */ Wn(A2, [["render", C2], ["__scopeId", "data-v-48b2704a"]]);
const B2 = An({
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
      return this.$slots.icon && this.$slots.icon().findIndex((i) => i.children && i.children.length !== 0 || typeof i.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ha,
    Label: ja,
    PreIcon: Xa
  }
}), D2 = ["aria-disabled"];
function I2(t, i, r, a, l, c) {
  const d = bt("PreIcon"), p = bt("Label"), w = bt("Chip");
  return mt(), bn(w, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: pn(() => [
      xa("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (mt(), bn(d, { key: 0 }, {
          default: pn(() => [
            Xt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ji("", !0),
        Pa(p, null, {
          default: pn(() => [
            Xt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, D2)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var O2 = /* @__PURE__ */ Wn(B2, [["render", I2], ["__scopeId", "data-v-3e0c4eba"]]);
const Q2 = An({
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
    const i = Oi(!1), r = Oi(!1), a = Ca(() => ae("chip-label-id")), l = Ca(() => i.value || r.value ? 0 : -1), c = Oi(), d = () => {
      c.value.$el.focus();
    }, p = Ii("register", (y) => {
    }), w = Ii("blur", (y) => {
    }), V = Ii("select", (y) => {
    }), U = {
      first: i,
      focus: d,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return p(U), {
      labelId: a,
      tabindex: l,
      first: i,
      blur: w,
      click: () => {
        V(U);
      },
      input: c,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((i) => i.children && i.children.length !== 0 || typeof i.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ha,
    Label: ja,
    PreIcon: Xa
  }
});
function _2(t, i, r, a, l, c) {
  const d = bt("PreIcon"), p = bt("Label"), w = bt("Chip");
  return mt(), bn(w, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: xm(["focus hover", { selected: t.checked }]),
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
    default: pn(() => [
      t.hasIcon ? (mt(), bn(d, { key: 0 }, {
        default: pn(() => [
          Xt(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ji("", !0),
      Pa(p, { id: t.labelId }, {
        default: pn(() => [
          Xt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var z2 = /* @__PURE__ */ Wn(Q2, [["render", _2], ["__scopeId", "data-v-bbcc2f70"]]);
const G2 = {
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
}, kf = An({
  props: G2,
  setup() {
    return { format: Ii("chipListFormat", "") };
  },
  render() {
    const t = (i) => m2(i, _r(_r({}, this.$props), this.$attrs), _r({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(x2) : this.format === "radio" ? t(z2) : t(O2);
  }
}), Y2 = {
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
}, P2 = An({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Y2,
  setup(t, i) {
    const r = t.mode === "list" ? "grid" : t.mode;
    w2("chipListFormat", r);
    const a = r === "single";
    if (r === "radio") {
      const d = Bm(t, "modelValue");
      return Cm(_r({
        attrs: {
          role: "radiogroup"
        }
      }, Wm(d, i.emit, t.label, {}, Oi(""))), {
        single: a
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: a };
  }
}), H2 = ["aria-label"];
function j2(t, i, r, a, l, c) {
  return mt(), ao("div", mc(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: i[0] || (i[0] = (...d) => t.keydown && t.keydown(...d))
  }), [
    Xt(t.$slots, "default", {}, void 0, !0)
  ], 16, H2);
}
var X2 = /* @__PURE__ */ Wn(P2, [["render", j2], ["__scopeId", "data-v-1e06f41d"]]);
const L2 = window.Vue.defineComponent, $2 = window.Vue.normalizeClass, q2 = window.Vue.openBlock, K2 = window.Vue.createElementBlock, eJ = window.Vue.createCommentVNode, tJ = /* @__PURE__ */ L2({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const i = t;
    return (r, a) => i != null && i.severity ? (q2(), K2("span", {
      key: 0,
      class: $2(["circle", [`${i.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : eJ("", !0);
  }
});
const nJ = /* @__PURE__ */ ye(tJ, [["__scopeId", "data-v-e08880d6"]]), rJ = window.Vue.defineComponent, Mi = window.Vue.unref, Dm = window.Vue.createTextVNode, Zf = window.Vue.normalizeClass, Dl = window.Vue.withCtx, Jf = window.Vue.createVNode, iJ = window.Vue.renderList, oJ = window.Vue.Fragment, Il = window.Vue.openBlock, aJ = window.Vue.createElementBlock, sJ = window.Vue.toDisplayString, bf = window.Vue.createBlock, lJ = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const cJ = /* @__PURE__ */ Dm(" ALL "), Ef = window.Vue.ref, uJ = window.Vue.watch, dJ = window.Vue.computed, hJ = window.Vue.reactive, fJ = /* @__PURE__ */ rJ({
  __name: "FiltersSeverity",
  props: {
    alarms: null,
    situationId: null,
    preSelected: null
  },
  emits: ["selected-severities"],
  setup(t, { emit: i }) {
    var w;
    const r = t, a = Ef(!1), l = dJ(() => Ze.exports.keys(Ze.exports.groupBy(r.alarms, "severity"))), c = Ef(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), d = hJ({
      alarms: r.alarms
    }), p = (V) => {
      c.value = c.value.filter((U) => U !== "all"), c.value.includes(V) ? c.value = c.value.filter((U) => U !== V) : c.value.push(V), (V === "all" || c.value.length === 0) && (c.value = ["all"]), i("selected-severities", c.value);
    };
    return uJ(r, () => {
      var V;
      c.value = (V = r.preSelected) != null && V.length ? r.preSelected : ["all"], d.alarms = r.alarms, a.value = !1;
    }), (V, U) => Mi(l).length > 0 ? (Il(), bf(Mi(X2), {
      key: c.value.toString(),
      condensed: "",
      label: ""
    }, {
      default: Dl(() => [
        Jf(Mi(kf), {
          class: Zf({ clicked: c.value.includes("all") }),
          onClick: U[0] || (U[0] = (R) => p("all"))
        }, {
          default: Dl(() => [
            cJ
          ]),
          _: 1
        }, 8, ["class"]),
        (Il(!0), aJ(oJ, null, iJ(Mi(l), (R) => (Il(), bf(Mi(kf), {
          class: Zf([
            { clicked: c.value.includes(R) },
            `${R == null ? void 0 : R.toLowerCase()}-bg`
          ]),
          key: R,
          onClick: (y) => p(R)
        }, {
          default: Dl(() => [
            Jf(nJ, { severity: R }, null, 8, ["severity"]),
            Dm(sJ(R), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    })) : lJ("", !0);
  }
});
const Im = /* @__PURE__ */ ye(fJ, [["__scopeId", "data-v-57d07be0"]]);
var pJ = Object.defineProperty, mJ = Object.defineProperties, wJ = Object.getOwnPropertyDescriptors, Sf = Object.getOwnPropertySymbols, vJ = Object.prototype.hasOwnProperty, VJ = Object.prototype.propertyIsEnumerable, Ff = (t, i, r) => i in t ? pJ(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, ki = (t, i) => {
  for (var r in i || (i = {}))
    vJ.call(i, r) && Ff(t, r, i[r]);
  if (Sf)
    for (var r of Sf(i))
      VJ.call(i, r) && Ff(t, r, i[r]);
  return t;
}, Af = (t, i) => mJ(t, wJ(i));
const TJ = window.Vue.defineComponent, gJ = window.Vue.inject, Zi = window.Vue.h;
var UJ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const RJ = {
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
}, NJ = TJ({
  inheritAttrs: !1,
  props: RJ,
  setup() {
    return { hasTooltip: gJ("feather-has-tooltip", !1) };
  },
  render() {
    const t = () => {
      let p = "";
      this.primary && (p = "btn-primary"), this.secondary && (p = "btn-secondary"), (this.text || this.icon) && (p = "btn-text");
      const w = ["btn", "hover", "focus", p];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, i = this.asAnchor ? "a" : "button", r = {}, a = ki({}, this.$attrs);
    r.attrs = a || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (p) => {
        this.disabled ? (this.asAnchor && p.preventDefault(), this.$emit("disabled-click", p)) : this.$emit("click", p);
      }
    };
    const l = t();
    r.class = [this.$attrs.class].concat(l), this.$slots.icon && r.class.push("has-icon");
    let c = Zi(ir);
    if (this.disabled && (c = void 0), this.icon && this.$slots.default) {
      const p = this.icon;
      return r.attrs["aria-label"] = p, this.hasTooltip || (r.attrs.title = p), Zi(i, Af(ki(ki({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Zi(ir, { center: !0 })
      ]);
    }
    const d = Zi("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Zi(i, Af(ki(ki({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      c
    ]);
  }
});
var wt = /* @__PURE__ */ UJ(NJ, [["__scopeId", "data-v-702d1074"]]);
const yJ = window.Vue.openBlock, MJ = window.Vue.createElementBlock, kJ = window.Vue.createElementVNode;
var ZJ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const JJ = {}, bJ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EJ = /* @__PURE__ */ kJ("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), SJ = [
  EJ
];
function FJ(t, i) {
  return yJ(), MJ("svg", bJ, SJ);
}
var Om = /* @__PURE__ */ ZJ(JJ, [["render", FJ]]);
const AJ = window.Vue.watch, WJ = window.Vue.onBeforeUnmount, CJ = window.Vue.ref, xJ = window.Vue.onMounted, BJ = (t) => {
  const i = CJ(!1);
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
  return xJ(() => {
    const d = AJ(i, (p) => {
      window && p ? window.addEventListener("resize", l) : c();
    }, {
      immediate: !0
    });
    WJ(() => {
      d(), c();
    });
  }), i;
}, DJ = window.Vue.watch, IJ = window.Vue.onBeforeUnmount, OJ = window.Vue.ref, QJ = window.Vue.onMounted, _J = (t, i) => {
  const r = OJ(!1), a = (d) => {
    d.target === window && i(d);
  }, l = (d) => {
    let p = [];
    Array.isArray(t.value) ? p = t.value : p = [t.value], p.some((V) => V && V.contains(d.target)) || i(d);
  }, c = () => {
    document && window && (document.removeEventListener("click", l, !0), document.removeEventListener("focus", l, !0), window.removeEventListener("blur", a));
  };
  return QJ(() => {
    const d = DJ(r, (p) => {
      document && window && p ? (document.addEventListener("click", l, !0), document.addEventListener("focus", l, !0), window.addEventListener("blur", a)) : c();
    }, {
      immediate: !0
    });
    IJ(() => {
      d(), c();
    });
  }), r;
}, zJ = window.Vue.watch, GJ = window.Vue.onBeforeUnmount, YJ = window.Vue.ref, Qm = (t, i) => {
  const r = YJ(!1);
  let a = !1;
  const l = (w) => {
    i(w), a = !1;
  };
  function c(w) {
    a || (requestAnimationFrame(() => l(w)), a = !0);
  }
  const d = () => {
    t.value && t.value.removeEventListener("scroll", c, !0);
  }, p = zJ([t, r], ([w, V], U) => {
    U && U.length && U[0] && U[0].removeEventListener("scroll", c, !0), V && w ? w.addEventListener("scroll", c, !0) : d();
  }, {
    immediate: !0
  });
  return GJ(() => {
    p(), d();
  }), r;
}, PJ = window.Vue.defineComponent, sn = window.Vue.ref, Wf = window.Vue.toRef, HJ = window.Vue.onMounted, jJ = window.Vue.watch, Cf = window.Vue.computed, XJ = window.Vue.nextTick, xf = window.Vue.openBlock, Bf = window.Vue.createElementBlock, Df = window.Vue.renderSlot, LJ = window.Vue.normalizeClass, $J = window.Vue.normalizeStyle, qJ = window.Vue.createCommentVNode;
var KJ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const eb = {
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
}, tb = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, nb = PJ({
  emits: tb,
  props: eb,
  setup(t, i) {
    const r = sn(), a = sn(), l = Wf(t, "open"), c = Wf(t, "noExpand"), d = sn("auto"), p = sn(), w = sn(t.triggerId || ae("feather-menu-trigger")), V = sn(ae("feather-menu-dropdown")), U = sn(""), R = sn("");
    HJ(() => {
      p.value = window;
    });
    const y = sn(!1), F = () => ({
      height: p.value.innerHeight,
      width: p.value.innerWidth,
      left: 0,
      top: 0
    }), E = () => {
      if (!a.value)
        return;
      const M = r.value.getBoundingClientRect();
      y.value = !0, d.value = "auto", XJ(() => {
        let { height: W, width: x } = a.value.getBoundingClientRect();
        const z = F(), de = z.height, he = z.width;
        t.fill && x < M.width ? (d.value = M.width + "px", x = M.width) : d.value = x + "px";
        let ve = 0;
        de - M.bottom < W && M.top >= W ? (ve = M.top - W, t.cover && (ve += M.height)) : (ve = M.bottom, t.cover && (ve -= M.height));
        let Ve = t.right ? M.right - x : M.left;
        !t.right && M.right >= x && he - M.left < x && (Ve = M.right - x), t.right && M.right <= x && he - M.left > x && (Ve = M.left), R.value = `${Ve}px`, U.value = `${ve}px`, y.value = !1;
      });
    }, C = _J(r, (M) => {
      i.emit("outside-click", M);
    }), A = BJ(E), Q = Qm(p, E);
    jJ([l, a], ([M, W]) => {
      M && W && E(), C.value = M, A.value = M, Q.value = M;
    });
    const O = Cf(() => {
      const M = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return l.value && (M["aria-controls"] = V.value), c.value || (M["aria-expanded"] = l.value ? "true" : "false"), M;
    }), P = Cf(() => ({
      click: (M) => {
        i.emit("trigger-click", M);
      }
    }));
    return {
      positionTop: U,
      positionLeft: R,
      triggerId: w,
      triggerAttrs: O,
      triggerListeners: P,
      menuId: V,
      menu: a,
      menuWidth: d,
      root: r,
      calculatePosition: E,
      calculating: y
    };
  }
}), rb = ["data-ref-id"], ib = ["data-ref-id", "id"];
function ob(t, i, r, a, l, c) {
  return xf(), Bf("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    Df(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (xf(), Bf("div", {
      key: 0,
      class: LJ(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: $J({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      Df(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, ib)) : qJ("", !0)
  ], 8, rb);
}
var _m = /* @__PURE__ */ KJ(nb, [["render", ob], ["__scopeId", "data-v-f75af406"]]);
const ab = window.Vue.openBlock, sb = window.Vue.createElementBlock, lb = window.Vue.createElementVNode;
var cb = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const ub = {}, db = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hb = /* @__PURE__ */ lb("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), fb = [
  hb
];
function pb(t, i) {
  return ab(), sb("svg", db, fb);
}
var mb = /* @__PURE__ */ cb(ub, [["render", pb]]);
const wb = window.Vue.openBlock, vb = window.Vue.createElementBlock, Bc = window.Vue.createElementVNode;
var Vb = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const Tb = {}, gb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ub = /* @__PURE__ */ Bc("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), Rb = /* @__PURE__ */ Bc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Nb = /* @__PURE__ */ Bc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), yb = [
  Ub,
  Rb,
  Nb
];
function Mb(t, i) {
  return wb(), vb("svg", gb, yb);
}
var kb = /* @__PURE__ */ Vb(Tb, [["render", Mb]]);
const Zb = window.Vue.openBlock, Jb = window.Vue.createElementBlock, bb = window.Vue.createElementVNode;
var Eb = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const Sb = {}, Fb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ab = /* @__PURE__ */ bb("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), Wb = [
  Ab
];
function Cb(t, i) {
  return Zb(), Jb("svg", Fb, Wb);
}
var Dc = /* @__PURE__ */ Eb(Sb, [["render", Cb]]);
const Xi = function(t, i) {
  if (!t || !i)
    return;
  let r = t.getBoundingClientRect().height;
  const a = getComputedStyle(t);
  r += parseInt(a.getPropertyValue("margin-top"), 10), r += parseInt(a.getPropertyValue("margin-bottom"), 10), i.scrollTop = t.offsetTop - i.getBoundingClientRect().height + r;
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
const xb = window.Vue.defineComponent, Bb = window.Vue.openBlock, Db = window.Vue.createElementBlock, Ib = window.Vue.normalizeClass, Ob = window.Vue.pushScopeId, Qb = window.Vue.popScopeId, wc = window.Vue.createElementVNode;
var _b = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const zb = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, Gb = {
  click: (t) => !0
}, Yb = xb({
  emits: Gb,
  props: zb,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), zm = (t) => (Ob("data-v-07e020f5"), t = t(), Qb(), t), Pb = /* @__PURE__ */ zm(() => /* @__PURE__ */ wc("div", { class: "track" }, null, -1)), Hb = /* @__PURE__ */ zm(() => /* @__PURE__ */ wc("div", { class: "switcher" }, [
  /* @__PURE__ */ wc("div", { class: "switch-circle" })
], -1)), jb = [
  Pb,
  Hb
];
function Xb(t, i, r, a, l, c) {
  return Bb(), Db("div", {
    class: Ib(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: i[0] || (i[0] = (...d) => t.handleClick && t.handleClick(...d))
  }, jb, 2);
}
var Lb = /* @__PURE__ */ _b(Yb, [["render", Xb], ["__scopeId", "data-v-07e020f5"]]), $b = Object.defineProperty, qb = Object.defineProperties, Kb = Object.getOwnPropertyDescriptors, If = Object.getOwnPropertySymbols, eE = Object.prototype.hasOwnProperty, tE = Object.prototype.propertyIsEnumerable, Of = (t, i, r) => i in t ? $b(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Qf = (t, i) => {
  for (var r in i || (i = {}))
    eE.call(i, r) && Of(t, r, i[r]);
  if (If)
    for (var r of If(i))
      tE.call(i, r) && Of(t, r, i[r]);
  return t;
}, _f = (t, i) => qb(t, Kb(i));
const Ic = window.Vue.defineComponent, Gn = window.Vue.h, nE = window.Vue.openBlock, rE = window.Vue.createElementBlock, iE = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Gm = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const oE = {
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
}, aE = Ic({
  inheritAttrs: !1,
  props: oE,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (t = Gn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Gn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let a;
    this.$slots.post && (a = Gn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const l = this.disabled ? void 0 : Gn(ir);
    if (this.asLi)
      return Gn("li", _f(Qf({}, this.$attrs), {
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
    const c = Gn("a", _f(Qf({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, a, l]);
    return Gn("li", {}, [c]);
  }
});
var so = /* @__PURE__ */ Gm(aE, [["__scopeId", "data-v-7c46b2b3"]]);
Ic({
  components: {
    FeatherListItem: so
  }
});
const sE = {}, lE = { class: "feather-list" };
function cE(t, i) {
  return nE(), rE("ul", lE, [
    iE(t.$slots, "default", {}, void 0, !0)
  ]);
}
var Oc = /* @__PURE__ */ Gm(sE, [["render", cE], ["__scopeId", "data-v-941a1d50"]]);
const uE = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, dE = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Ic({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: uE,
  props: dE,
  computed: {
    labelId() {
      return ae("switch-label");
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
  components: { SwitchRender: Lb, FeatherListItem: so }
});
var hE = Object.defineProperty, fE = Object.defineProperties, pE = Object.getOwnPropertyDescriptors, zf = Object.getOwnPropertySymbols, mE = Object.prototype.hasOwnProperty, wE = Object.prototype.propertyIsEnumerable, Gf = (t, i, r) => i in t ? hE(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, vt = (t, i) => {
  for (var r in i || (i = {}))
    mE.call(i, r) && Gf(t, r, i[r]);
  if (zf)
    for (var r of zf(i))
      wE.call(i, r) && Gf(t, r, i[r]);
  return t;
}, vE = (t, i) => fE(t, pE(i));
const $r = window.Vue.defineComponent, ie = window.Vue.openBlock, Ee = window.Vue.createElementBlock, nt = window.Vue.createElementVNode, Ot = window.Vue.toDisplayString, Jt = window.Vue.createCommentVNode, ke = window.Vue.resolveComponent, Zt = window.Vue.createBlock, Ge = window.Vue.withCtx, zr = window.Vue.Fragment, Qi = window.Vue.renderList, rt = window.Vue.createVNode, Qc = window.Vue.withModifiers, nr = window.Vue.normalizeClass, vc = window.Vue.renderSlot, Ym = window.Vue.createTextVNode, VE = window.Vue.pushScopeId, TE = window.Vue.popScopeId, Pm = window.Vue.reactive, Hm = window.Vue.nextTick, Ol = window.Vue.markRaw, Ql = window.Vue.toRef, Yf = window.Vue.computed, gE = window.Vue.toRefs, Er = window.Vue.ref, _l = window.Vue.mergeProps, Pf = window.Vue.toHandlers, aa = window.Vue.withDirectives, sa = window.Vue.vShow;
var La = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, _c = {
  query: {
    type: String
  }
}, ar = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const UE = $r({
  mixins: [],
  props: vt(vt({
    text: {
      type: String,
      required: !0
    }
  }, La), _c),
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
}), RE = {
  key: 0,
  class: "highlight"
}, NE = { key: 1 };
function yE(t, i, r, a, l, c) {
  return ie(), Ee("span", null, [
    nt("span", null, Ot(t.beginning), 1),
    t.highlighted ? (ie(), Ee("span", RE, Ot(t.highlighted), 1)) : Jt("", !0),
    t.end ? (ie(), Ee("span", NE, Ot(t.end), 1)) : Jt("", !0)
  ]);
}
var jm = /* @__PURE__ */ ar(UE, [["render", yE], ["__scopeId", "data-v-8abe2492"]]);
const ME = $r({
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
  }, La), _c),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const i = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        Xi(i, r.$el);
      });
    }
  },
  methods: {
    isSelected(t) {
      const i = this.value;
      return i && i.length ? i.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
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
    FeatherList: Oc,
    FeatherListItem: so,
    Highlighter: jm
  }
}), kE = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function ZE(t, i, r, a, l, c) {
  const d = ke("Highlighter"), p = ke("FeatherListItem"), w = ke("FeatherList");
  return ie(), Zt(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": t.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ge(() => [
      (ie(!0), Ee(zr, null, Qi(t.items, (V, U) => (ie(), Ee(zr, {
        key: V[t.textProp]
      }, [
        rt(p, {
          "as-li": "",
          id: t.getId(U),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(V),
          highlighted: t.isActive(U),
          selected: t.isSelected(V),
          onClick: Qc((R) => t.select(V), ["stop"])
        }, {
          default: Ge(() => [
            rt(d, {
              highlight: t.highlight,
              query: t.query,
              text: V[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            V._new ? (ie(), Ee("span", kE, Ot(t.newLabel), 1)) : Jt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && V._new ? (ie(), Ee("li", {
          role: "presentation",
          key: V[t.textProp] + "hr",
          class: "hr"
        })) : Jt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var JE = /* @__PURE__ */ ar(ME, [["render", ZE], ["__scopeId", "data-v-f623434a"]]);
const bE = $r({
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
  }, La), _c),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const i = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        Xi(i, r);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((t, i) => t.align && t.align.toLowerCase() === "right" ? `tr${i + 1}` : t.align && t.align.toLowerCase() === "center" ? `tc${i + 1}` : `tl${i + 1}`);
    }
  },
  methods: {
    isSelected(t) {
      const i = this.value;
      return this.value && this.value.length ? i.some((a) => a[this.textProp] === t[this.textProp]) : this.value[this.textProp] === t[this.textProp];
    },
    isActive(t) {
      return this.activeRow === t;
    },
    isActiveCell(t, i) {
      return this.activeRow === t && this.activeCol === i;
    },
    getId(t, i) {
      return t === this.activeRow && this.activeCol === i ? this.activeId : "";
    },
    select(t) {
      this.$emit("select", t);
    }
  },
  components: {
    Highlighter: jm
  }
}), EE = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, SE = ["aria-multiselectable"], FE = { role: "row" }, AE = ["aria-selected", "onClick"], WE = ["id", "aria-selected"], CE = { key: 1 };
function xE(t, i, r, a, l, c) {
  const d = ke("Highlighter");
  return ie(), Ee("div", EE, [
    nt("table", {
      class: nr(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      nt("thead", null, [
        nt("tr", FE, [
          (ie(!0), Ee(zr, null, Qi(t.config, (p) => (ie(), Ee("th", {
            key: p.title
          }, Ot(p.title), 1))), 128))
        ])
      ]),
      nt("tbody", null, [
        (ie(!0), Ee(zr, null, Qi(t.items, (p, w) => (ie(), Ee("tr", {
          role: "row",
          key: p[t.textProp],
          "aria-selected": t.isSelected(p),
          class: nr({ focus: t.isActive(w), selected: t.isSelected(p) }),
          onClick: Qc((V) => t.select(p), ["stop"])
        }, [
          (ie(!0), Ee(zr, null, Qi(t.config, (V, U) => (ie(), Ee("td", {
            key: p[t.textProp] + V.prop,
            id: t.getId(w, U),
            "aria-selected": t.isSelected(p),
            class: nr({ "focus-cell": t.isActiveCell(w, U) })
          }, [
            V.prop === t.textProp ? (ie(), Zt(d, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: p[V.prop]
            }, null, 8, ["highlight", "query", "text"])) : (ie(), Ee("p", CE, Ot(p[V.prop]), 1))
          ], 10, WE))), 128))
        ], 10, AE))), 128))
      ])
    ], 10, SE)
  ], 512);
}
var BE = /* @__PURE__ */ ar(bE, [["render", xE], ["__scopeId", "data-v-58c88fd1"]]);
const DE = $r({
  components: {
    FeatherList: Oc,
    FeatherListItem: so
  }
});
function IE(t, i, r, a, l, c) {
  const d = ke("FeatherListItem"), p = ke("FeatherList");
  return ie(), Zt(p, { class: "result-list" }, {
    default: Ge(() => [
      rt(d, { "as-li": "" }, {
        default: Ge(() => [
          vc(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var OE = /* @__PURE__ */ ar(DE, [["render", IE], ["__scopeId", "data-v-06b752c6"]]);
const QE = $r({
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
    FeatherIcon: te,
    Cancel: Ya,
    BaseChip: Ha,
    BaseChipLabel: ja,
    BaseChipPreIcon: Xa
  }
});
function _E(t, i, r, a, l, c) {
  const d = ke("FeatherIcon"), p = ke("BaseChipPreIcon"), w = ke("BaseChipLabel"), V = ke("Cancel"), U = ke("BaseChip");
  return ie(), Zt(U, {
    class: nr(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: Ge(() => [
      t.showPreIcon ? (ie(), Zt(p, { key: 0 }, {
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
      })) : Jt("", !0),
      rt(w, null, {
        default: Ge(() => [
          Ym(Ot(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? Jt("", !0) : (ie(), Ee("span", {
        key: 1,
        class: "chip-delete",
        onClick: i[0] || (i[0] = Qc((...R) => t.handleClick && t.handleClick(...R), ["stop"]))
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
var zE = /* @__PURE__ */ ar(QE, [["render", _E], ["__scopeId", "data-v-e0fc6ac0"]]);
const GE = {}, YE = (t) => (VE("data-v-aa720e06"), t = t(), TE(), t), PE = { class: "spinner-container" }, HE = /* @__PURE__ */ YE(() => /* @__PURE__ */ nt("svg", {
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
], -1)), jE = [
  HE
];
function XE(t, i) {
  return ie(), Ee("div", PE, jE);
}
var LE = /* @__PURE__ */ ar(GE, [["render", XE], ["__scopeId", "data-v-aa720e06"]]), $a = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))($a || {});
const Xm = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, $E = vt(vt(vt({
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
    default: (t, i, r) => t[r.textProp].toString().toLowerCase() === i.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (t) => !!$a[t]
  },
  labels: {
    type: Object,
    default: () => Xm
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, La), io), Cc), qE = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, KE = (t, i, r, a) => {
  if (r.toLowerCase() === $a.multi) {
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
      i.active.row = -1, t.forceCloseResults.value = !0, c && c._new && t.allowNew ? a("new", c._new) : a("update:modelValue", c);
    },
    removeItem() {
    },
    clickedItem() {
      t.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (i.active.row > -1) {
        const c = t.internalResults.value[i.active.row];
        c && c._new && t.allowNew ? a("new", c._new) : a("update:modelValue", c);
      }
    }
  };
}, eS = () => {
  const t = Pm({
    row: -1
  }), i = (c) => {
    Hm(() => {
      t.row = c;
    });
  }, r = (c, d) => {
    if (c.keyCode === q.DOWN) {
      if (c.preventDefault(), t.row === -1)
        a(), i(0);
      else if (t.row + 1 <= d.length - 1) {
        const p = t.row;
        a(), i(p + 1);
      }
      return !0;
    }
    if (c.keyCode === q.UP) {
      if (c.preventDefault(), t.row === 0)
        a();
      else if (t.row > 0) {
        const p = t.row;
        a(), i(p - 1);
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
}, tS = (t) => {
  const i = Pm({
    row: -1,
    col: -1
  }), r = (d, p) => {
    Hm(() => {
      i.col = p, i.row = d;
    });
  }, a = (d, p) => {
    if (d.keyCode === q.DOWN) {
      if (d.preventDefault(), i.row === -1)
        l(), r(0, 0);
      else if (i.row + 1 <= p.length - 1) {
        const w = i.row, V = i.col;
        l(), r(w + 1, V);
      }
      return !0;
    }
    if (d.keyCode === q.UP) {
      if (d.preventDefault(), i.row === 0)
        l();
      else if (i.row > 0) {
        const w = i.row, V = i.col;
        l(), r(w - 1, V);
      }
      return !0;
    }
    if (d.keyCode === q.RIGHT && i.row !== -1) {
      if (d.preventDefault(), i.col + 1 <= t.length - 1) {
        const w = i.col, V = i.row;
        l(), r(V, w + 1);
      } else if (i.col <= t.length - 1 && i.row + 1 <= p.length - 1) {
        const w = i.row;
        l(), r(w + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === q.LEFT && i.row !== -1) {
      if (d.preventDefault(), i.col === 0 && i.row === 0)
        return !0;
      if (i.col === 0 && i.row > 0) {
        const w = i.row;
        l(), r(w - 1, t.length - 1);
      } else if (i.col > 0) {
        const w = i.col, V = i.row;
        l(), r(V, w - 1);
      }
      return !0;
    }
    if (d.keyCode === q.END && i.row !== -1) {
      d.preventDefault();
      const w = i.row;
      return l(), r(d.ctrlKey ? p.length - 1 : w, t.length - 1), !0;
    }
    if (d.keyCode === q.HOME && i.row !== -1) {
      d.preventDefault();
      const w = i.row;
      return l(), r(d.ctrlKey ? 0 : w, 0), !0;
    }
    return !1;
  }, l = () => {
    i.row = -1, i.col = -1;
  };
  return { reset: l, handleKeyPress: a, active: i, first: () => {
    l(), r(0, 0);
  } };
}, nS = $r({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: qE,
  props: $E,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== $a.multi;
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
      return ae("result-item");
    },
    minCharWarningId() {
      return ae("min-char-warning");
    },
    subTextId() {
      return ae("feather-autocomplete-description");
    },
    resultsId() {
      return ae("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return ae("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Ol(mb);
    },
    minCharIcon() {
      return Ol(kb);
    },
    dropdownIcon() {
      return Ol(Dc);
    },
    inputAttrs() {
      const t = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let i = "";
      return this.activeChipIndex > -1 && (i = this.activeChipId), this.active.row > -1 && this.showResults && (i = this.resultItemId), this.minChar && t.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": t.join(" "),
        "aria-busy": this.loading,
        "aria-activedescendant": i,
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
      return this.modelValue && this.modelValue.length ? this.modelValue.map((i) => i[this.textProp]).join(", ") : "";
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
        Xi(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, i) {
        t && i && t.length > i.length && this.scrollContainer && this.$nextTick(() => {
          Xi(this.inputRef, this.scrollContainer);
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
      const i = this.$refs.menu;
      t && i.calculatePosition && i.calculatePosition();
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
      return this.activeChipId = ae("active-chip"), this.activeChipId;
    },
    setAlert(t) {
      const i = this.$refs.alert;
      i.textContent = t, setTimeout(() => {
        i.textContent = "";
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
      r !== void 0 && (Yi(this.typingTimeout), this.typingTimeout = Gi(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(t) {
      const i = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (t.keyCode === q.ENTER && t.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(t, this.internalResults)) {
        i(), this.forceCloseResults = !1;
        return;
      }
      if (t.keyCode === q.ENTER && this.activeChipIndex > -1) {
        t.preventDefault();
        const a = this.modelValue;
        this.removeFromValue(a[this.activeChipIndex]), i();
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
        this.forceCloseResults = !0, r(), i();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const a = this.modelValue;
        t.keyCode === q.LEFT && (t.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = a.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), t.keyCode === q.RIGHT && (t.preventDefault(), this.activeChipIndex === a.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < a.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (t.keyCode === q.DELETE || t.keyCode === q.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(a[this.activeChipIndex]), r(), i());
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
        const i = t.getBoundingClientRect().width, r = t.parentElement;
        t.scrollWidth <= t.clientWidth && r && i < r.getBoundingClientRect().width ? t.style.whiteSpace = "nowrap" : (t.style.whiteSpace = "normal", t.style.flexBasis = "100%"), this.$nextTick(() => {
          t.style.height = `${t.scrollHeight}px`;
        });
      }));
    }
  },
  setup(t, i) {
    const r = Sm(Ql(t, "labels"), Xm);
    oo(t), xc(t);
    let a;
    t.gridConfig ? a = tS(t.gridConfig) : a = eS();
    const l = Ql(t, "id"), c = Yf(() => l.value ? l.value : ae("feather-autocomplete-input")), { validate: d } = no(c, Ql(t, "modelValue"), t.label, t.schema), { selectionLimit: p, modelValue: w, textProp: V, allowNew: U, type: R, minChar: y } = gE(t), F = Er(!1), E = Er(!1), D = Er(!1), C = Er(""), A = Er([]), Q = Er(), O = Yf(() => Q.value), P = () => {
      F.value && !E.value && (C.value && C.value.length >= y.value && i.emit("search", C.value), y.value <= 0 && i.emit("search", C.value || ""), A.value = [], a.reset());
    }, M = KE({
      selectionLimit: p,
      selectionLimitReached: E,
      modelValue: w,
      textProp: V,
      allowNew: U,
      forceCloseResults: D,
      query: C,
      internalResults: A,
      input: O,
      emitSearch: P
    }, a, R.value, i.emit);
    return vE(vt(vt({}, r), ro(i.attrs)), {
      query: C,
      internalResults: A,
      selectionLimitReached: E,
      forceCloseResults: D,
      hasFocus: F,
      strategy: M,
      emitSearch: P,
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
    InputWrapper: Wc,
    InputSubText: to,
    AutocompleteResults: JE,
    AutocompleteResultsGrid: BE,
    Chip: zE,
    MenuMessage: OE,
    FeatherIcon: te,
    FeatherMenu: _m,
    Spinner: LE
  }
}), rS = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, iS = ["id"], oS = { "data-ref-id": "feather-autocomplete-no-results" }, aS = { "data-ref-id": "feather-autocomplete-selection-limit" }, sS = { "data-ref-id": "feather-autocomplete-min-char" };
function lS(t, i, r, a, l, c) {
  const d = ke("FeatherIcon"), p = ke("Chip"), w = ke("InputWrapper"), V = ke("AutocompleteResults"), U = ke("AutocompleteResultsGrid"), R = ke("MenuMessage"), y = ke("Spinner"), F = ke("FeatherMenu"), E = ke("InputSubText");
  return ie(), Ee("div", _l(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    rt(F, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: nr(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ge(({ attrs: D, on: C }) => [
        rt(w, _l(vt(vt({}, D), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, Pf(C), { ref: "scroll" }), {
          pre: Ge(() => [
            vc(t.$slots, "pre", {}, () => [
              rt(d, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ge(() => [
            rt(d, {
              icon: t.dropdownIcon,
              class: nr(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ge(() => [
            nt("div", {
              class: nr(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              nt("div", rS, null, 512),
              nt("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Ot(t.selectedDescribedByText), 9, iS),
              (ie(!0), Ee(zr, null, Qi(t.modelValueList, (A, Q) => aa((ie(), Zt(p, {
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
                [sa, !t.singleSelect]
              ])), 128)),
              nt("textarea", _l(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Pf(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ge(() => [
        t.gridConfig ? Jt("", !0) : aa((ie(), Zt(V, {
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
          [sa, t.showResults]
        ]),
        t.gridConfig ? aa((ie(), Zt(U, {
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
          [sa, t.showResults]
        ]) : Jt("", !0),
        t.showNoResults ? (ie(), Zt(R, { key: 2 }, {
          default: Ge(() => [
            nt("span", oS, Ot(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : Jt("", !0),
        t.showSelectionLimit ? (ie(), Zt(R, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ge(() => [
            rt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            nt("span", aS, Ot(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Jt("", !0),
        t.minChar ? aa((ie(), Zt(R, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: Ge(() => [
            rt(d, { icon: t.minCharIcon }, null, 8, ["icon"]),
            nt("span", sS, [
              vc(t.$slots, "min-char", {}, () => [
                Ym(Ot(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [sa, t.showMinCharWarning]
        ]) : Jt("", !0),
        t.showLoading ? (ie(), Zt(y, { key: 5 })) : Jt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    rt(E, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var cS = /* @__PURE__ */ ar(nS, [["render", lS], ["__scopeId", "data-v-43a7e951"]]);
const uS = window.Pinia.defineStore, Lm = uS("appStore", {
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
}), dS = window.Vue.defineComponent, Kn = window.Vue.createElementVNode, Ji = window.Vue.unref, Sr = window.Vue.createVNode, hS = window.Vue.withCtx, la = window.Vue.toDisplayString, fS = window.Vue.renderList, pS = window.Vue.Fragment, Fr = window.Vue.openBlock, Ar = window.Vue.createElementBlock, zl = window.Vue.createCommentVNode, mS = window.Vue.pushScopeId, wS = window.Vue.popScopeId, $m = (t) => (mS("data-v-5ca769d2"), t = t(), wS(), t), vS = { class: "list-main" }, VS = /* @__PURE__ */ $m(() => /* @__PURE__ */ Kn("h2", null, "Situation List", -1)), TS = { class: "filters" }, gS = /* @__PURE__ */ $m(() => /* @__PURE__ */ Kn("span", null, "Reset Filters", -1)), US = { class: "autocomplete" }, RS = {
  key: 0,
  class: "container"
}, NS = { class: "situation-list" }, yS = {
  key: 0,
  class: "footer-pager"
}, MS = {
  key: 1,
  class: "container"
}, kS = window.Vue.reactive, Wr = window.Vue.ref, ZS = window.Vue.watch, JS = window.VueRouter.useRouter, bS = /* @__PURE__ */ dS({
  __name: "SituationList",
  setup(t) {
    const i = JS(), r = Xr(), a = Lm();
    r.getSituations(), r.getNodes();
    const l = 9, c = kS({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: [],
      filterSeverities: ["all"]
    }), d = Wr(!1), p = Wr(0), w = Wr(1), V = Wr(0), U = Wr(!1), R = Wr(!1), y = (M) => {
      p.value = 0, c.situations = M[0], w.value = M.length;
    }, F = () => {
      c.nodes = r.nodes, c.results = r.nodes;
    };
    a.$subscribe((M, W) => {
      R.value = W.showError;
    }), ZS(
      () => r.situations,
      () => {
        F(), V.value = r.situations.length, c.allSituations = Ze.exports.chunk(r.situations, l);
        const M = r.situations.map((W) => W.id);
        r.filteredSituations = M, y(c.allSituations), E();
      }
    );
    const E = () => {
      r.filters && (r.filters.node && (c.nodeSelectedValue = r.filters.node), r.filters.severities && (c.filterSeverities = r.filters.severities), C(), r.filters = null);
    }, D = (M) => {
      if (!M)
        return c.nodeSelectedValue = void 0, [];
      d.value = !0, c.results = c.nodes.filter((W) => W.label.toLowerCase().indexOf(M) > -1).map((W) => ({
        _text: W.label,
        id: W.id
      })), d.value = !1;
    }, C = () => {
      if (c.nodeSelectedValue && c.nodeSelectedValue._text) {
        let M = r.situations.map((W) => {
          if (W.relatedAlarms.filter(
            (z) => {
              var de;
              return z.nodeLabel === ((de = c.nodeSelectedValue) == null ? void 0 : de._text);
            }
          ).length > 0)
            return W;
        }).filter((W) => W);
        if (M) {
          c.filterSeverities.includes("all") || (M = M.filter(
            (x) => c.filterSeverities.includes(x.severity)
          )), V.value = M.length, c.situations = M;
          const W = M.map((x) => x.id);
          r.filteredSituations = W, U.value = !0;
        }
      } else if (c.nodeSelectedValue = void 0, c.filterSeverities.includes("all"))
        P();
      else {
        const M = r.situations.filter(
          (x) => c.filterSeverities.includes(x.severity)
        );
        c.situations = M, V.value = M.length;
        const W = M.map((x) => x.id);
        U.value = !0, r.filteredSituations = W;
      }
    }, A = (M) => {
      p.value = M, c.situations = c.allSituations[p.value];
    }, Q = (M) => {
      (c.nodeSelectedValue || c.filterSeverities.length) && (r.filters = {
        node: c.nodeSelectedValue,
        severities: c.filterSeverities
      }), i.push({
        name: "situationDetail",
        params: {
          id: M
        }
      });
    }, O = (M) => {
      M.includes("all") && !c.nodeSelectedValue ? P() : (c.filterSeverities = M, C());
    }, P = () => {
      c.filterSeverities = ["all"], c.nodeSelectedValue = void 0;
      const M = r.situations.map((W) => W.id);
      r.filteredSituations = M, V.value = r.situations.length, y(c.allSituations), U.value = !1;
    };
    return (M, W) => (Fr(), Ar("div", vS, [
      VS,
      Kn("div", TS, [
        Sr(Ji(wt), {
          class: "reset-btn",
          onClick: W[0] || (W[0] = () => P())
        }, {
          default: hS(() => [
            Sr(Ji(te), {
              icon: Ji(Om),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            gS
          ]),
          _: 1
        }),
        Sr(Im, {
          alarms: Ji(r).situations,
          onSelectedSeverities: O,
          "pre-selected": c.filterSeverities
        }, null, 8, ["alarms", "pre-selected"]),
        Kn("div", US, [
          Sr(Ji(cS), {
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
            onSearch: D
          }, null, 8, ["loading", "modelValue", "results"])
        ])
      ]),
      c.situations && c.situations.length > 0 ? (Fr(), Ar("div", RS, [
        Kn("div", null, " Result: " + la(c.situations.length) + " of " + la(V.value), 1),
        Kn("div", NS, [
          (Fr(!0), Ar(pS, null, fS(c.situations, (x) => (Fr(), Ar("div", {
            class: "card",
            key: x.id
          }, [
            Sr(KM, {
              onClick: () => Q(x.id),
              "situation-info": x
            }, null, 8, ["onClick", "situation-info"])
          ]))), 128))
        ]),
        !U.value && V.value > l ? (Fr(), Ar("div", yS, [
          Kn("div", null, "Page: " + la(p.value + 1) + " of " + la(w.value), 1),
          Sr(Gk, {
            onGoToPage: A,
            currentPage: p.value,
            totalPages: w.value
          }, null, 8, ["currentPage", "totalPages"])
        ])) : zl("", !0)
      ])) : zl("", !0),
      !c.situations || c.situations.length == 0 ? (Fr(), Ar("div", MS, " No results found ")) : zl("", !0)
    ]));
  }
});
const ES = /* @__PURE__ */ ye(bS, [["__scopeId", "data-v-5ca769d2"]]);
const ca = window.Vue.ref, SS = window.Vue.inject, FS = window.Vue.computed, AS = window.Vue.onMounted, WS = {
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
}, CS = (t) => {
  const i = ca(!1), r = ca(), a = ca(t.controls), l = ca(t.id), c = () => {
    r.value && r.value.focus();
  }, d = SS("registerTab");
  AS(() => {
    if (r.value && d) {
      const w = r.value.parentElement, V = w && w.parentElement ? w.parentElement : void 0, U = Array.from(V ? V.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), R = w ? U.indexOf(w) : -1;
      d({
        el: r.value,
        focus: c,
        disabled: t.disabled,
        selected: i,
        id: l,
        controls: a,
        index: R
      });
    }
  });
  const p = FS(() => ({
    role: "tab",
    ref: "tab",
    tabindex: i.value ? 0 : -1,
    id: l.value,
    "aria-selected": i.value,
    "aria-controls": a.value,
    "aria-disabled": t.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: i,
    attrs: p,
    tab: r
  };
}, Hf = window.Vue.ref, xS = window.Vue.toRef, BS = window.Vue.watch, jf = window.Vue.provide, DS = {
  prop: "modelValue",
  event: "update:modelValue"
}, IS = {
  "update:modelValue": (t) => !0
}, OS = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, QS = (t, i) => {
  const r = xS(t, "modelValue"), a = Hf(t.modelValue), l = Hf([]);
  BS(r, (E) => {
    w(E);
  });
  const c = (E) => {
    E.preventDefault(), l.value.some((D, C) => D.tab && D.tab.el.contains(E.target) ? (p(C), w(C), !0) : !1);
  }, d = (E) => {
    if (((z) => z.shiftKey || z.ctrlKey || z.metaKey || z.altKey)(E))
      return;
    const C = E.keyCode, A = (z) => {
      z.stopPropagation(), z.preventDefault();
    }, Q = l.value.filter((z) => z.tab && !z.tab.disabled), O = l.value.findIndex((z) => z.tab && z.tab.el.contains(document.activeElement));
    let P = O !== -1 ? O : a.value;
    const M = [q.RIGHT], W = [q.LEFT], x = [q.ENTER, q.SPACE];
    t.vertical && (M.push(q.DOWN), W.push(q.UP)), M.indexOf(C) > -1 ? (P++, P >= Q.length && (P = 0), A(E), p(l.value.indexOf(Q[P]))) : W.indexOf(C) > -1 && (P--, P < 0 && (P = Q.length - 1), A(E), p(l.value.indexOf(Q[P]))), x.indexOf(C) > -1 && w(P);
  }, p = (E) => {
    l.value.forEach(function(D, C) {
      E === C && D.tab && D.tab.focus();
    });
  }, w = (E) => {
    const D = l.value[E];
    !D || D.tab && D.tab.disabled || (l.value.forEach((C, A) => {
      C.tab && (C.tab.selected = E === A), C.panel && (C.panel.selected = E === A);
    }), a.value = E, i.emit("update:modelValue", E));
  };
  jf("registerTab", (E) => {
    const D = E.index;
    D > -1 && (l.value[D] = { ...l.value[D], tab: E }, l.value = [...l.value], R());
  }), jf("registerPanel", (E) => {
    const D = E.index;
    D > -1 && (l.value[D] = {
      ...l.value[D],
      panel: E
    }, l.value = [...l.value], R());
  });
  const R = () => {
    l.value.forEach(({ tab: E, panel: D }, C) => {
      if (D && E) {
        const A = E.id || ae("tab"), Q = E.controls || ae("panel");
        E.controls = Q, E.id = A, D.tab = A, D.id = Q;
      }
      C === a.value && (D && (D.selected = !0), E && (E.selected = !0));
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
}, ua = window.Vue.ref, _S = window.Vue.inject, zS = window.Vue.computed, GS = window.Vue.onMounted, YS = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, PS = (t) => {
  const i = ua(!1), r = ua(), a = ua(t.tab), l = ua(t.id), c = _S("registerPanel");
  GS(() => {
    if (c) {
      const p = r.value, w = p && p.parentElement ? p.parentElement : void 0, V = p ? Array.from(w ? w.children : []).indexOf(p) : -1;
      c({
        selected: i,
        id: l,
        tab: a,
        el: r.value,
        index: V
      });
    }
  });
  const d = zS(() => ({
    role: "tabpanel",
    id: l.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": i.value,
    "aria-labelledby": a.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: i,
    attrs: d,
    panel: r
  };
}, zc = window.Vue.defineComponent, HS = window.Vue.resolveComponent, Gc = window.Vue.openBlock, Yc = window.Vue.createElementBlock, _i = window.Vue.createElementVNode, qm = window.Vue.mergeProps, Ba = window.Vue.renderSlot, jS = window.Vue.createVNode, XS = window.Vue.normalizeStyle, LS = window.Vue.toHandlers, $S = window.Vue.withDirectives, qS = window.Vue.normalizeProps, KS = window.Vue.guardReactiveProps, eF = window.Vue.vShow;
var Pc = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const tF = WS, nF = zc({
  props: tF,
  setup(t) {
    return CS(t);
  },
  components: {
    FeatherRipple: ir
  }
}), rF = { role: "presentation" }, iF = { class: "tab-text" };
function oF(t, i, r, a, l, c) {
  const d = HS("FeatherRipple");
  return Gc(), Yc("li", rF, [
    _i("button", qm(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      _i("span", iF, [
        Ba(t.$slots, "default", {}, void 0, !0)
      ]),
      jS(d)
    ], 16)
  ]);
}
var Xf = /* @__PURE__ */ Pc(nF, [["render", oF], ["__scopeId", "data-v-e6bb52b6"]]);
const aF = OS, sF = IS, lF = zc({
  model: DS,
  emits: sF,
  props: aF,
  setup(t, i) {
    return QS(t, i);
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
        t && t.length && this.ro && t.forEach((i) => {
          i.tab && this.ro.observe(i.tab.el);
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
        const t = this.$el.getBoundingClientRect(), i = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = i.left - t.left, a = i.height - 2;
        this.width = `${i.width}px`, this.transform = `translateX(${r}px) translateY(${a}px)`;
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
}), cF = { class: "feather-tab-container" }, uF = { class: "tab-panels" };
function dF(t, i, r, a, l, c) {
  return Gc(), Yc("div", cF, [
    _i("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: XS({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    _i("ul", qm(t.attrs, LS(t.listeners)), [
      Ba(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    _i("div", uF, [
      Ba(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var hF = /* @__PURE__ */ Pc(lF, [["render", dF], ["__scopeId", "data-v-27adffb9"]]);
const fF = YS, pF = zc({
  props: fF,
  setup(t) {
    return PS(t);
  }
});
function mF(t, i, r, a, l, c) {
  return $S((Gc(), Yc("div", qS(KS(t.attrs)), [
    Ba(t.$slots, "default")
  ], 16)), [
    [eF, t.selected]
  ]);
}
var Lf = /* @__PURE__ */ Pc(pF, [["render", mF]]);
const wF = window.Vue.defineComponent, vF = window.Vue.toDisplayString, VF = window.Vue.normalizeClass, TF = window.Vue.openBlock, gF = window.Vue.createElementBlock, UF = window.Vue.createCommentVNode, RF = /* @__PURE__ */ wF({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const i = t;
    return (r, a) => i != null && i.severity ? (TF(), gF("span", {
      key: 0,
      class: VF(["severity-status", [`${i.severity.toLowerCase()}-color`]])
    }, vF(i.severity), 3)) : UF("", !0);
  }
});
const Km = /* @__PURE__ */ ye(RF, [["__scopeId", "data-v-83c2cdce"]]), NF = window.Vue.defineComponent, $f = window.Vue.toDisplayString, qf = window.Vue.createElementVNode, yF = window.Vue.openBlock, MF = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const kF = { class: "box" }, ZF = { class: "label" }, JF = { class: "date" }, bF = /* @__PURE__ */ NF({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const i = t;
    return (r, a) => (yF(), MF("div", kF, [
      qf("div", ZF, $f(i.label), 1),
      qf("div", JF, $f(i.info), 1)
    ]));
  }
});
const Gl = /* @__PURE__ */ ye(bF, [["__scopeId", "data-v-b4afa751"]]), EF = window.Vue.defineComponent, SF = window.Vue.unref, FF = window.Vue.renderList, AF = window.Vue.Fragment, Yl = window.Vue.openBlock, Pl = window.Vue.createElementBlock, WF = window.Vue.toDisplayString, CF = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const xF = { class: "alarms-list" }, BF = /* @__PURE__ */ EF({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const i = t;
    return (r, a) => (Yl(), Pl("div", xF, [
      (Yl(!0), Pl(AF, null, FF(SF(Ze.exports.groupBy)(i == null ? void 0 : i.alarms, "severity"), (l, c) => (Yl(), Pl("div", {
        class: CF(["alarm-count", [`${c.toString().toLowerCase()}-color`, i.size]]),
        key: c
      }, WF(l.length), 3))), 128))
    ]));
  }
});
const DF = /* @__PURE__ */ ye(BF, [["__scopeId", "data-v-52d63440"]]), IF = window.Vue.openBlock, OF = window.Vue.createElementBlock, QF = window.Vue.createElementVNode;
var _F = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const zF = {}, GF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YF = /* @__PURE__ */ QF("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), PF = [
  YF
];
function HF(t, i) {
  return IF(), OF("svg", GF, PF);
}
var jF = /* @__PURE__ */ _F(zF, [["render", HF]]);
const XF = window.Vue.openBlock, LF = window.Vue.createElementBlock, $F = window.Vue.createStaticVNode;
var qF = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const KF = {}, eA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tA = /* @__PURE__ */ $F('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), nA = [
  tA
];
function rA(t, i) {
  return XF(), LF("svg", eA, nA);
}
var e1 = /* @__PURE__ */ qF(KF, [["render", rA]]);
const iA = window.Vue.defineComponent, Bt = window.Vue.unref, Hl = window.Vue.createVNode, Hc = window.Vue.createElementVNode, jl = window.Vue.withCtx, da = window.Vue.openBlock, Xl = window.Vue.createBlock, Ll = window.Vue.createCommentVNode, oA = window.Vue.normalizeClass, aA = window.Vue.createElementBlock, sA = window.Vue.pushScopeId, lA = window.Vue.popScopeId, jc = (t) => (sA("data-v-e073070b"), t = t(), lA(), t), cA = /* @__PURE__ */ jc(() => /* @__PURE__ */ Hc("span", null, "Acknowledge", -1)), uA = /* @__PURE__ */ jc(() => /* @__PURE__ */ Hc("span", null, "Escalate", -1)), dA = /* @__PURE__ */ jc(() => /* @__PURE__ */ Hc("span", null, "Clear", -1)), hA = /* @__PURE__ */ iA({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(t) {
    const i = t, r = Xr(), a = async (c) => {
      await FN(i.alarm.id, c) && r.getSituation(i.situationId), i.isSituation && await gm(
        i.situationId,
        pt.ACCEPTED.toLowerCase()
      );
    }, l = async (c) => {
      await AN(i.alarm.id, c) && r.getSituation(i.situationId);
    };
    return (c, d) => (da(), aA("div", {
      class: oA(["action-btns-group", i.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      t.alarm.ackTime ? Ll("", !0) : (da(), Xl(Bt(wt), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => a(!0))
      }, {
        default: jl(() => [
          Hl(Bt(te), {
            icon: Bt(qi),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          cA
        ]),
        _: 1
      })),
      t.alarm.severity != "CRITICAL" ? (da(), Xl(Bt(wt), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => l(Bt(pt).ESCALATE))
      }, {
        default: jl(() => [
          Hl(Bt(te), {
            icon: Bt(jF),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          uA
        ]),
        _: 1
      })) : Ll("", !0),
      i.showClear && t.alarm.severity != "NORMAL" && t.alarm.severity != "CLEARED" ? (da(), Xl(Bt(wt), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => l(Bt(pt).CLEAR))
      }, {
        default: jl(() => [
          Hl(Bt(te), {
            icon: Bt(e1),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          dA
        ]),
        _: 1
      })) : Ll("", !0)
    ], 2));
  }
});
const t1 = /* @__PURE__ */ ye(hA, [["__scopeId", "data-v-e073070b"]]);
var fA = Object.defineProperty, pA = Object.defineProperties, mA = Object.getOwnPropertyDescriptors, Kf = Object.getOwnPropertySymbols, wA = Object.prototype.hasOwnProperty, vA = Object.prototype.propertyIsEnumerable, ep = (t, i, r) => i in t ? fA(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Vc = (t, i) => {
  for (var r in i || (i = {}))
    wA.call(i, r) && ep(t, r, i[r]);
  if (Kf)
    for (var r of Kf(i))
      vA.call(i, r) && ep(t, r, i[r]);
  return t;
}, n1 = (t, i) => pA(t, mA(i));
const r1 = window.Vue.defineComponent, VA = window.Vue.inject, TA = window.Vue.resolveComponent, $l = window.Vue.openBlock, tp = window.Vue.createElementBlock, Or = window.Vue.createElementVNode, gA = window.Vue.createBlock, np = window.Vue.createCommentVNode, UA = window.Vue.renderSlot, RA = window.Vue.pushScopeId, NA = window.Vue.popScopeId, ql = window.Vue.toRef, ha = window.Vue.computed, yA = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var MA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const kA = {
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
}, ZA = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, JA = r1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: ZA,
  props: kA,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: VA("registerCheckbox", (i) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ae("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ae("checkbox-label");
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
    FeatherRipple: ir
  }
}), bA = (t) => (RA("data-v-a7af27e2"), t = t(), NA(), t), EA = { class: "layout-container" }, SA = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], FA = { class: "checkbox hover focus" }, AA = /* @__PURE__ */ bA(() => /* @__PURE__ */ Or("div", { class: "box" }, [
  /* @__PURE__ */ Or("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Or("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Or("div", { class: "indeterminate" })
], -1)), WA = ["id", "for"];
function CA(t, i, r, a, l, c) {
  const d = TA("feather-ripple");
  return $l(), tp("div", EA, [
    Or("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: i[0] || (i[0] = (...p) => t.click && t.click(...p)),
      onKeydown: i[1] || (i[1] = (...p) => t.keydown && t.keydown(...p)),
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
      Or("div", FA, [
        AA,
        t.disabled ? np("", !0) : ($l(), gA(d, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? np("", !0) : ($l(), tp("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        UA(t.$slots, "default", {}, void 0, !0)
      ], 8, WA))
    ], 40, SA)
  ]);
}
var Xc = /* @__PURE__ */ MA(JA, [["render", CA], ["__scopeId", "data-v-a7af27e2"]]);
const xA = n1(Vc({}, io), {
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
r1({
  props: xA,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, i) {
    oo(t);
    const r = ql(t, "error"), a = ha(() => ae("feather-checkbox-group")), l = ha(() => ae("feather-input-description")), c = ha(() => ae("feather-input-label")), d = ha(() => {
      const U = JSON.parse(JSON.stringify(i.attrs));
      return U["aria-invalid"] || (U["aria-invalid"] = !!r.value), n1(Vc({}, U), {
        class: "",
        "aria-describedby": l.value
      });
    }), p = yA(a.value), { validate: w } = no(p, ql(t, "modelValue"), t.label, t.schema, ql(t, "error"));
    return Vc({
      groupId: a,
      inputId: p,
      descriptionId: l,
      labelId: c,
      attrs: d,
      validate: w,
      registerCheckbox: (U) => {
        U && p.value === a.value && (p.value = U);
      }
    }, ro(i.attrs));
  },
  components: {
    InputSubText: to
  }
});
const BA = window.Vue.openBlock, DA = window.Vue.createElementBlock, i1 = window.Vue.createElementVNode;
var IA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const OA = {}, QA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _A = /* @__PURE__ */ i1("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), zA = /* @__PURE__ */ i1("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), GA = [
  _A,
  zA
];
function YA(t, i) {
  return BA(), DA("svg", QA, GA);
}
var PA = /* @__PURE__ */ IA(OA, [["render", YA]]);
var HA = Object.defineProperty, jA = Object.defineProperties, XA = Object.getOwnPropertyDescriptors, rp = Object.getOwnPropertySymbols, LA = Object.prototype.hasOwnProperty, $A = Object.prototype.propertyIsEnumerable, ip = (t, i, r) => i in t ? HA(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Qr = (t, i) => {
  for (var r in i || (i = {}))
    LA.call(i, r) && ip(t, r, i[r]);
  if (rp)
    for (var r of rp(i))
      $A.call(i, r) && ip(t, r, i[r]);
  return t;
}, o1 = (t, i) => jA(t, XA(i));
const qA = window.Vue.defineComponent, Kl = window.Vue.toRef, KA = window.Vue.computed, op = window.Vue.resolveComponent, ap = window.Vue.openBlock, sp = window.Vue.createElementBlock, lp = window.Vue.mergeProps, cp = window.Vue.createVNode, eW = window.Vue.normalizeClass, up = window.Vue.withCtx, tW = window.Vue.createElementVNode, nW = window.Vue.toDisplayString, rW = window.Vue.createCommentVNode;
var iW = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const oW = o1(Qr(Qr({}, Cc), io), {
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
}), aW = {
  "update:modelValue": (t) => !0
}, sW = qA({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: aW,
  props: oW,
  setup(t, i) {
    oo(t), xc(t);
    const r = Kl(t, "id"), a = KA(() => r.value ? r.value : ae("feather-textarea-label")), { validate: l } = no(a, Kl(t, "modelValue"), t.label, t.schema, Kl(t, "error"));
    return Qr({
      inputId: a,
      incomingId: r,
      validate: l
    }, ro(i.attrs));
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
      return ae("feather-textarea-description");
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
      const t = Qr({}, this.$attrs);
      return delete t.placeholder, t["aria-invalid"] || (t["aria-invalid"] = !!this.error), o1(Qr(Qr({}, t), this.listeners), {
        class: "",
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (t["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      });
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
        const i = t.getBoundingClientRect().width;
        t.scrollWidth <= t.clientWidth && i < t.parentElement.getBoundingClientRect().width ? t.style.whiteSpace = "nowrap" : (t.style.whiteSpace = "normal", t.style.flexBasis = "100%"), this.$nextTick(() => {
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
    InputSubText: to,
    InputWrapper: Wc
  }
}), lW = ["maxlength"], cW = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function uW(t, i, r, a, l, c) {
  const d = op("InputWrapper"), p = op("InputSubText");
  return ap(), sp("div", lp(t.inherittedAttrs, { class: "feather-textarea-container" }), [
    cp(d, {
      for: t.inputId,
      raised: t.isRaised,
      focused: t.focused,
      "show-clear": t.showClear,
      onWrapperClick: t.handleWrapperClick,
      onClear: t.handleClear,
      class: eW(["feather-textarea-content", t.contentCls])
    }, {
      default: up(() => [
        tW("textarea", lp(t.attrs, {
          class: ["feather-textarea", { error: t.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: t.maxlength > 0 ? t.maxlength : void 0,
          ref: "input"
        }), null, 16, lW)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    cp(p, { id: t.descriptionId }, {
      right: up(() => [
        t.maxlength ? (ap(), sp("div", cW, nW(t.charCount), 1)) : rW("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var dW = /* @__PURE__ */ iW(sW, [["render", uW], ["__scopeId", "data-v-0648df5c"]]);
const hW = window.Vue.defineComponent, dp = window.Vue.toDisplayString, bi = window.Vue.createElementVNode, Yn = window.Vue.unref, Cr = window.Vue.openBlock, hp = window.Vue.createBlock, Ei = window.Vue.createCommentVNode, fp = window.Vue.createVNode, fa = window.Vue.createElementBlock, fW = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const pW = { class: "row" }, mW = { class: "label" }, wW = { class: "action-icons" }, vW = { class: "icon-btn" }, VW = {
  key: 0,
  class: "icon-btn"
}, TW = {
  key: 1,
  class: "icon-btn"
}, gW = {
  key: 0,
  class: "text"
}, UW = window.Vue.watch, pp = window.Vue.ref, RW = /* @__PURE__ */ hW({
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
    const i = t, r = Lm(), a = pp(!1), l = pp((w = i.memo) == null ? void 0 : w.body);
    UW(i, () => {
      var V;
      l.value = (V = i.memo) == null ? void 0 : V.body, a.value = !1;
    });
    const c = () => {
      a.value = !a.value;
    }, d = async () => {
      a.value = !1, await ON(i.id, i.type) ? l.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, p = async () => {
      a.value = !1, l.value && l.value !== "" && (await IN(i.id, i.type, l.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (V, U) => (Cr(), fa("div", {
      class: fW([i.boxType === "small" ? "box-small" : "box"])
    }, [
      bi("div", pW, [
        bi("div", mW, dp(t.label), 1),
        bi("div", wW, [
          bi("div", vW, [
            a.value ? Ei("", !0) : (Cr(), hp(Yn(te), {
              key: 0,
              icon: Yn(PA),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: c
            }, null, 8, ["icon"]))
          ]),
          a.value ? (Cr(), fa("div", VW, [
            fp(Yn(te), {
              icon: Yn(qi),
              "aria-hidden": "true",
              class: "icon save",
              onClick: p
            }, null, 8, ["icon"])
          ])) : Ei("", !0),
          l.value && l.value != "" || a.value ? (Cr(), fa("div", TW, [
            fp(Yn(te), {
              icon: Yn(Ya),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : Ei("", !0)
        ])
      ]),
      bi("div", null, [
        !a.value && l.value != null ? (Cr(), fa("div", gW, dp(l.value), 1)) : Ei("", !0),
        a.value ? (Cr(), hp(Yn(dW), {
          key: 1,
          class: "textarea",
          modelValue: l.value,
          "onUpdate:modelValue": U[0] || (U[0] = (R) => l.value = R),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Ei("", !0)
      ])
    ], 2));
  }
});
const Da = /* @__PURE__ */ ye(RW, [["__scopeId", "data-v-3f44e250"]]), NW = window.Vue.defineComponent, Si = window.Vue.unref, xr = window.Vue.createVNode, pa = window.Vue.toDisplayString, hn = window.Vue.createElementVNode, mp = window.Vue.openBlock, wp = window.Vue.createElementBlock, vp = window.Vue.createCommentVNode, Vp = window.Vue.createTextVNode, yW = window.Vue.pushScopeId, MW = window.Vue.popScopeId, a1 = (t) => (yW("data-v-cd37a1f9"), t = t(), MW(), t), kW = {
  key: 0,
  class: "card"
}, ZW = { class: "row" }, JW = { class: "title" }, bW = {
  key: 0,
  class: "ack"
}, EW = ["innerHTML"], SW = /* @__PURE__ */ a1(() => /* @__PURE__ */ hn("strong", null, "First Event", -1)), FW = /* @__PURE__ */ a1(() => /* @__PURE__ */ hn("strong", null, "Last Event", -1)), AW = { class: "section memo-boxes" }, Tp = window.Vue.ref, WW = window.Vue.watch, CW = /* @__PURE__ */ NW({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(t, { emit: i }) {
    const r = t, a = Tp(!1), l = Tp(r.alarm);
    WW(r, () => {
      l.value = r.alarm, a.value = r.selectAll, i("alarm-selected", r.alarm.id);
    });
    const c = () => {
      i("alarm-selected", r.alarm.id);
    }, d = async (p) => {
      const w = await vm(p);
      w && (l.value = w);
    };
    return (p, w) => {
      var V, U, R, y, F;
      return l.value ? (mp(), wp("div", kW, [
        hn("div", null, [
          hn("div", ZW, [
            xr(Si(Xc), {
              modelValue: a.value,
              "onUpdate:modelValue": [
                w[0] || (w[0] = (E) => a.value = E),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            hn("div", JW, pa(l.value.nodeLabel) + " - " + pa(l.value.id), 1),
            xr(Km, {
              severity: (V = l.value) == null ? void 0 : V.severity
            }, null, 8, ["severity"]),
            l.value.ackTime ? (mp(), wp("div", bW, [
              xr(Si(te), {
                icon: Si(qi),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : vp("", !0)
          ]),
          hn("div", {
            class: "description",
            innerHTML: l.value.description
          }, null, 8, EW),
          hn("div", null, [
            SW,
            Vp(" - " + pa(Si(jt)(l.value.firstEventTime)), 1)
          ]),
          hn("div", null, [
            FW,
            Vp(" - " + pa(Si(jt)(l.value.lastEventTime)), 1)
          ]),
          hn("div", AW, [
            xr(Da, {
              id: (U = l.value) == null ? void 0 : U.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (R = l.value) == null ? void 0 : R.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            xr(Da, {
              id: (y = l.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (F = l.value) == null ? void 0 : F.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        xr(t1, {
          alarm: l.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : vp("", !0);
    };
  }
});
const xW = /* @__PURE__ */ ye(CW, [["__scopeId", "data-v-cd37a1f9"]]), BW = window.Vue.defineComponent, Gr = window.Vue.createElementVNode, Pn = window.Vue.createVNode, Hn = window.Vue.unref, gp = window.Vue.withCtx, DW = window.Vue.renderList, IW = window.Vue.Fragment, ma = window.Vue.openBlock, wa = window.Vue.createElementBlock, OW = window.Vue.createCommentVNode, QW = window.Vue.pushScopeId, _W = window.Vue.popScopeId, Lc = (t) => (QW("data-v-438eed08"), t = t(), _W(), t), zW = { class: "container" }, GW = { class: "row" }, YW = /* @__PURE__ */ Lc(() => /* @__PURE__ */ Gr("div", { class: "title" }, "Alarms", -1)), PW = { class: "row actions" }, HW = /* @__PURE__ */ Lc(() => /* @__PURE__ */ Gr("span", null, "Clear", -1)), jW = /* @__PURE__ */ Lc(() => /* @__PURE__ */ Gr("span", null, "Acknowledge", -1)), XW = { class: "section" }, LW = {
  key: 0,
  class: "alarm-list"
}, Up = window.Vue.ref, $W = window.Vue.watch, qW = window.Vue.reactive, KW = /* @__PURE__ */ BW({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(t) {
    const i = t, r = Xr(), a = Up(!1), l = Up(["all"]), c = qW({
      selectedAlarms: [],
      alarms: i.alarms
    });
    $W(i, () => {
      l.value = ["all"], c.alarms = i.alarms, c.selectedAlarms = [], a.value = !1;
    });
    const d = (V) => {
      c.selectedAlarms.includes(V) ? Ze.exports.remove(c.selectedAlarms, (U) => U == V) : c.selectedAlarms.push(V);
    }, p = async (V) => {
      c.selectedAlarms.length && (await WN(c.selectedAlarms, V), r.getSituation(i.situationId), c.selectedAlarms = [], a.value = !1);
    }, w = (V) => {
      V.includes("all") ? c.alarms = i.alarms : c.alarms = i.alarms.filter((U) => V.includes(U.severity));
    };
    return (V, U) => (ma(), wa("div", zW, [
      Gr("div", GW, [
        YW,
        Pn(Im, {
          alarms: i.alarms,
          onSelectedSeverities: w
        }, null, 8, ["alarms"])
      ]),
      Gr("div", PW, [
        Pn(Hn(Xc), {
          modelValue: a.value,
          "onUpdate:modelValue": U[0] || (U[0] = (R) => a.value = R),
          label: "selected"
        }, null, 8, ["modelValue"]),
        Pn(Hn(wt), {
          class: "acction-btn",
          onClick: U[1] || (U[1] = () => p("clear"))
        }, {
          default: gp(() => [
            Pn(Hn(te), {
              icon: Hn(e1),
              "aria-hidden": "true",
              class: "icon clear"
            }, null, 8, ["icon"]),
            HW
          ]),
          _: 1
        }),
        Pn(Hn(wt), {
          class: "acction-btn",
          onClick: U[2] || (U[2] = () => p("ack"))
        }, {
          default: gp(() => [
            Pn(Hn(te), {
              icon: Hn(qi),
              "aria-hidden": "true",
              class: "icon ack"
            }, null, 8, ["icon"]),
            jW
          ]),
          _: 1
        })
      ]),
      Gr("div", XW, [
        c.alarms.length > 0 ? (ma(), wa("div", LW, [
          (ma(!0), wa(IW, null, DW(c.alarms, (R) => (ma(), wa("div", {
            key: R.id
          }, [
            Pn(xW, {
              alarm: R,
              selectAll: a.value,
              "situation-id": i.situationId,
              onAlarmSelected: d
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : OW("", !0)
      ])
    ]));
  }
});
const eC = /* @__PURE__ */ ye(KW, [["__scopeId", "data-v-438eed08"]]), tC = "/whoami", nC = async () => {
  try {
    const t = await Fn.get(tC);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, rC = window.Pinia.defineStore, lo = rC("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await nC();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await GN();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const i = await Tm(t);
        this.allowSave = i;
      }
    }
  }
}), iC = window.Vue.defineComponent, Dt = window.Vue.createVNode, ht = window.Vue.unref, ec = window.Vue.normalizeClass, va = window.Vue.toDisplayString, jn = window.Vue.openBlock, Xn = window.Vue.createElementBlock, Va = window.Vue.createCommentVNode, oC = window.Vue.withCtx, It = window.Vue.createElementVNode, aC = window.Vue.createTextVNode, sC = window.Vue.Fragment, lC = window.Vue.pushScopeId, cC = window.Vue.popScopeId, uC = (t) => (lC("data-v-eecc24f5"), t = t(), cC(), t), dC = { class: "section" }, hC = { class: "action-section" }, fC = {
  key: 0,
  class: "btn-row"
}, pC = { key: 0 }, mC = { key: 1 }, wC = {
  key: 0,
  class: "situation-detail"
}, vC = { class: "situation-info" }, VC = { class: "id" }, TC = { key: 0 }, gC = ["innerHTML"], UC = /* @__PURE__ */ uC(() => /* @__PURE__ */ It("p", null, null, -1)), RC = { class: "boxes" }, NC = { class: "parameters" }, yC = { class: "section memo-boxes" }, MC = { key: 0 }, Rp = window.Vue.ref, kC = window.Vue.watch, ZC = /* @__PURE__ */ iC({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(t) {
    const i = t, r = Xr(), a = pt.REJECTED, l = lo(), c = Rp(i.situationInfo.status), d = Rp(i.situationInfo);
    kC(i, () => {
      c.value = i.situationInfo.status || "", d.value = i.situationInfo;
    });
    const p = (w) => {
      var V;
      gm((V = i.situationInfo) == null ? void 0 : V.id, w.toLowerCase()), c.value = w, r.getSituation(i.situationInfo.id);
    };
    return (w, V) => {
      var U, R, y, F, E, D, C, A, Q, O, P, M;
      return jn(), Xn(sC, null, [
        It("div", dC, [
          It("div", hC, [
            Dt(t1, {
              alarm: d.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": i.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            ht(l).allowSave ? (jn(), Xn("div", fC, [
              Dt(ht(wt), {
                class: ec(["btn", { rejected: c.value == ht(a) }]),
                "data-test": "btn-reject",
                onClick: V[0] || (V[0] = () => p(ht(a)))
              }, {
                default: oC(() => [
                  Dt(ht(te), {
                    icon: ht(Um),
                    "aria-hidden": "true",
                    class: ec(["icon reject", { rejected: c.value == ht(a) }])
                  }, null, 8, ["icon", "class"]),
                  c.value == ht(a) ? (jn(), Xn("span", pC, va(ht(a)), 1)) : (jn(), Xn("span", mC, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : Va("", !0)
          ]),
          d.value ? (jn(), Xn("div", wC, [
            It("div", {
              class: ec(["severity-line", [`${(R = (U = d.value) == null ? void 0 : U.severity) == null ? void 0 : R.toLowerCase()}-bg dark`]])
            }, null, 2),
            It("div", vC, [
              It("div", VC, [
                It("div", null, [
                  aC(" Situation - " + va((y = d.value) == null ? void 0 : y.id) + " - affecting " + va(ht(Ze.exports.size)(ht(Ze.exports.groupBy)((F = d.value) == null ? void 0 : F.alarms, "nodeId"))) + " node ", 1),
                  d.value.alarms ? (jn(), Xn("span", TC, "having " + va(d.value.alarms.length) + " alarms ", 1)) : Va("", !0)
                ]),
                Dt(Km, {
                  severity: (E = d.value) == null ? void 0 : E.severity
                }, null, 8, ["severity"])
              ]),
              It("span", {
                innerHTML: d.value.description
              }, null, 8, gC),
              UC,
              It("div", RC, [
                Dt(Gl, {
                  label: "First Event",
                  info: ht(jt)(d.value.firstEventTime)
                }, null, 8, ["info"]),
                Dt(Gl, {
                  label: "Last Event",
                  info: ht(jt)(d.value.lastEventTime)
                }, null, 8, ["info"]),
                Dt(Gl, {
                  label: "Reduction Key",
                  info: d.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            It("div", NC, [
              Dt(DF, {
                alarms: (D = d.value) == null ? void 0 : D.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Va("", !0),
          It("div", yC, [
            Dt(Da, {
              id: (C = d.value) == null ? void 0 : C.id,
              situationId: (A = d.value) == null ? void 0 : A.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (Q = d.value) == null ? void 0 : Q.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Dt(Da, {
              id: (O = d.value) == null ? void 0 : O.id,
              situationId: (P = d.value) == null ? void 0 : P.id,
              label: "Journal Memo",
              type: "journal",
              memo: (M = d.value) == null ? void 0 : M.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        d.value.alarms && d.value.alarms.length ? (jn(), Xn("div", MC, [
          Dt(eC, {
            alarms: d.value.alarms,
            "situation-id": d.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Va("", !0)
      ], 64);
    };
  }
});
const JC = /* @__PURE__ */ ye(ZC, [["__scopeId", "data-v-eecc24f5"]]);
var bC = Object.defineProperty, EC = Object.defineProperties, SC = Object.getOwnPropertyDescriptors, Np = Object.getOwnPropertySymbols, FC = Object.prototype.hasOwnProperty, AC = Object.prototype.propertyIsEnumerable, yp = (t, i, r) => i in t ? bC(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Tc = (t, i) => {
  for (var r in i || (i = {}))
    FC.call(i, r) && yp(t, r, i[r]);
  if (Np)
    for (var r of Np(i))
      AC.call(i, r) && yp(t, r, i[r]);
  return t;
}, WC = (t, i) => EC(t, SC(i));
const s1 = window.Vue.defineComponent, er = window.Vue.resolveComponent, Ma = window.Vue.openBlock, Mp = window.Vue.createBlock, ka = window.Vue.mergeProps, tr = window.Vue.withCtx, l1 = window.Vue.createElementBlock, CC = window.Vue.Fragment, xC = window.Vue.renderList, BC = window.Vue.createTextVNode, DC = window.Vue.toDisplayString, IC = window.Vue.computed, kp = window.Vue.toRef, Fi = window.Vue.createVNode, Zp = window.Vue.toHandlers, OC = window.Vue.renderSlot, QC = window.Vue.normalizeClass, _C = window.Vue.createElementVNode;
var c1 = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const zC = s1({
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
      return ae("feather-select-active");
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
        const i = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t];
        Xi(i, this.$refs.list.$el);
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
    FeatherList: Oc,
    FeatherListItem: so
  }
});
function GC(t, i, r, a, l, c) {
  const d = er("FeatherListItem"), p = er("FeatherList");
  return Ma(), Mp(p, ka(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: tr(() => [
      (Ma(!0), l1(CC, null, xC(t.options, (w, V) => (Ma(), Mp(d, {
        key: w[t.textProp],
        "as-li": "",
        id: t.getId(V),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": t.isSelected(V),
        selected: t.isSelected(V),
        onClick: (U) => t.select(w)
      }, {
        default: tr(() => [
          BC(DC(w[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var YC = /* @__PURE__ */ c1(zC, [["render", GC], ["__scopeId", "data-v-eae820da"]]);
const PC = WC(Tc(Tc({}, Cc), io), {
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
}), HC = {
  "update:modelValue": (t) => !0
}, jC = s1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: HC,
  props: PC,
  setup(t, i) {
    oo(t), xc(t);
    const r = IC(() => ae("feather-select-input")), { validate: a } = no(r, kp(t, "modelValue"), t.label, t.schema, kp(t, "error"));
    return Tc({
      inputId: r,
      validate: a
    }, ro(i.attrs));
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
      return ae("feather-select-description");
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
        const t = this.internalValue, i = this.options.filter((r) => r[this.textProp] === t[this.textProp]);
        if (i && i.length)
          return this.options.indexOf(i[0]);
      }
      return -1;
    },
    icon: () => Dc
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
        const i = String.fromCharCode(t.keyCode);
        this.charsSoFar += i, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Yi(this.delayTimeout), this.delayTimeout = Gi(() => {
        const t = this.options.filter((i) => i[this.textProp] && i[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Wc,
    InputSubText: to,
    FeatherMenu: _m,
    List: YC,
    FeatherIcon: te
  }
});
function XC(t, i, r, a, l, c) {
  const d = er("FeatherIcon"), p = er("InputWrapper"), w = er("List"), V = er("FeatherMenu"), U = er("InputSubText");
  return Ma(), l1("div", ka(t.inherittedAttrs, { class: "feather-select-container" }), [
    Fi(V, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: tr((R) => [
        Fi(p, ka({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, R.attrs, Zp(R.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: tr(() => [
            OC(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: tr(() => [
            Fi(d, {
              class: QC(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: tr(() => [
            _C("input", ka(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Zp(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: tr(() => [
        Fi(w, {
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
    Fi(U, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var LC = /* @__PURE__ */ c1(jC, [["render", XC], ["__scopeId", "data-v-ecb32d90"]]);
const $C = window.Vue.openBlock, qC = window.Vue.createElementBlock, u1 = window.Vue.createElementVNode;
var KC = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const ex = {}, tx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nx = /* @__PURE__ */ u1("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), rx = /* @__PURE__ */ u1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), ix = [
  nx,
  rx
];
function ox(t, i) {
  return $C(), qC("svg", tx, ix);
}
var ax = /* @__PURE__ */ KC(ex, [["render", ox]]);
const Za = window.Vue.openBlock, gc = window.Vue.createElementBlock, d1 = window.Vue.createElementVNode, sx = window.Vue.defineComponent, Ln = window.Vue.ref, lx = window.Vue.provide, Jp = window.Vue.computed, cx = window.Vue.onUnmounted, bp = window.Vue.toRef, ux = window.Vue.resolveComponent, dx = window.Vue.Fragment, hx = window.Vue.createBlock, fx = window.Vue.Teleport, Ep = window.Vue.createVNode, px = window.Vue.Transition, mx = window.Vue.withCtx, wx = window.Vue.normalizeClass, vx = window.Vue.normalizeStyle, Vx = window.Vue.toDisplayString, Tx = window.Vue.createCommentVNode, gx = window.Vue.renderSlot, tc = window.Vue.nextTick;
var h1 = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const Ux = {}, Rx = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Nx = /* @__PURE__ */ d1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), yx = [
  Nx
];
function Mx(t, i) {
  return Za(), gc("svg", Rx, yx);
}
var kx = /* @__PURE__ */ h1(Ux, [["render", Mx]]), De = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(De || {}), fn = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(fn || {});
const Zx = (t, i, r, a = 9) => {
  const l = window.innerHeight - t.bottom, c = window.innerWidth - t.right, d = [];
  t.top >= i.height + a && d.push(De.top), l >= i.height + a && d.push(De.bottom);
  const p = [];
  c >= i.width + a && p.push(De.right), t.left >= i.width + a && p.push(De.left);
  let w = [...p, ...d];
  return (r === De.top || r === De.bottom) && (w = [...d, ...p]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, Jx = (t, i, r, a, l = 28) => {
  if (t === De.left || t === De.right)
    return fn.center;
  const c = i.left + i.width / 2, d = window.innerWidth - i.right, p = [], w = c, V = d + i.width / 2, U = r.width - l, R = r.width / 2;
  return w >= R && V >= R && p.push(fn.center), V >= U && p.push(fn.left), w >= U && p.push(fn.right), p.indexOf(a) > -1 ? a : p.length ? p[0] : a;
}, bx = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => De.top
  },
  pointerAlignment: {
    type: String,
    default: () => fn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, Ex = sx({
  props: bx,
  setup(t) {
    const i = Ln(!1), r = Ln(!1), a = ae("feather-tooltip-trigger"), l = ae("feather-tooltip"), c = "data-feather-tooltip";
    lx("feather-has-tooltip", !0);
    let d = 0;
    const p = () => {
      Yi(d), i.value || (d = Gi(D, t.enterDelay));
    }, w = () => {
      Yi(d), d = Gi(C, t.exitDelay);
    }, V = (ve) => {
      ve.keyCode === q.ESCAPE && (ve.preventDefault(), C(!0));
    }, U = Jp(() => ({
      [c]: a,
      "aria-describedby": l
    })), R = {
      mouseenter: p,
      mouseleave: w,
      focus: p,
      blur: w,
      keydown: V
    }, y = Ln(document), F = Qm(y, () => C(!0));
    cx(() => C(!0));
    const E = () => document.getElementById(l), D = () => {
      r.value = !1, i.value = !0, tc(() => {
        const ve = E();
        he(ve), i.value = !1, tc(() => {
          r.value = !0, i.value = !0, F.value = !0;
        });
      });
    }, C = (ve = !1) => {
      W.value = "", M.value = "", x.value = "", z.value = "", i.value = !1, ve && (r.value = !1), F.value = !1;
    }, A = bp(t, "placement"), Q = bp(t, "pointerAlignment"), O = 8, P = 24, M = Ln(""), W = Ln(""), x = Ln(""), z = Ln(""), de = Jp(() => z.value ? "p-" + z.value : !1), he = (ve) => {
      const Ve = document.querySelector(`[${c}=${a}]`);
      if (!Ve) {
        console.log("trigger not found");
        return;
      }
      tc(() => {
        const ge = Ve.getBoundingClientRect(), Me = ve.getBoundingClientRect(), ce = Zx(ge, Me, A.value, O), We = Jx(ce, ge, Me, Q.value, P);
        x.value = We.toString(), z.value = ce.toString();
        let Ce = 0, Pe = 0;
        if ((ce === De.left || ce === De.right) && (Ce = ge.top + ge.height / 2 - Me.height / 2, ce === De.left && (Pe = ge.left - Me.width - O), ce === De.right && (Pe = ge.right)), ce === De.top || ce === De.bottom) {
          Ce = ge.top - Me.height - O, ce === De.bottom && (Ce = ge.bottom);
          const qr = ge.left + ge.width / 2;
          switch (We) {
            case fn.center:
              Pe = qr - Me.width / 2;
              break;
            case fn.left:
              Pe = qr - P;
              break;
            case fn.right:
              Pe = qr - Me.width + P;
              break;
          }
        }
        M.value = Ce.toString() + "px", W.value = Pe.toString() + "px";
      });
    };
    return {
      attrs: U,
      listeners: R,
      show: i,
      animate: r,
      alignmentClass: x,
      placementClass: de,
      top: M,
      left: W,
      tooltipID: l
    };
  },
  components: {
    Pointer: kx
  }
}), Sx = ["id"];
function Fx(t, i, r, a, l, c) {
  const d = ux("Pointer");
  return Za(), gc(dx, null, [
    (Za(), hx(fx, { to: "body" }, [
      Ep(px, { css: t.animate }, {
        default: mx(() => [
          t.show ? (Za(), gc("div", {
            key: 0,
            class: wx(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: vx({ left: t.left, top: t.top })
          }, [
            d1("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, Vx(t.title), 9, Sx),
            Ep(d, { class: "tooltip-pointer" })
          ], 6)) : Tx("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    gx(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var Sp = /* @__PURE__ */ h1(Ex, [["render", Fx], ["__scopeId", "data-v-3da6b22e"]]);
const Ax = window.Vue.defineComponent, nc = window.Vue.normalizeStyle, rc = window.Vue.createElementVNode, Ai = window.Vue.unref, Fp = window.Vue.toHandlers, Ap = window.Vue.mergeProps, Wp = window.Vue.withCtx, Cp = window.Vue.createVNode, Wx = window.Vue.renderList, Cx = window.Vue.Fragment, Wi = window.Vue.openBlock, Ci = window.Vue.createElementBlock, xp = window.Vue.normalizeClass, Bp = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const xx = { class: "row" }, Bx = /* @__PURE__ */ Ax({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(t) {
    const i = t, r = new Date().getTime(), a = (c, d) => c ? (Number(d) - Number(c)) * i.proportion : 0, l = (c) => c ? (Number(c) - Number(i.minStart)) * i.proportion : 0;
    return (c, d) => (Wi(), Ci("div", xx, [
      rc("div", {
        class: "line-gray",
        style: nc({
          width: l(i.events[0].createTime) + "px"
        })
      }, null, 4),
      Cp(Ai(Sp), {
        title: Ai(jt)(t.alarm.firstEventTime)
      }, {
        default: Wp(({ attrs: p, on: w }) => [
          rc("div", Ap({ class: "circle" }, p, Fp(w), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Wi(!0), Ci(Cx, null, Wx(i.events, (p, w) => (Wi(), Ci("div", {
        class: "event-trim",
        key: p.id
      }, [
        i.events[w + 1] ? (Wi(), Ci("div", {
          key: 0,
          class: xp(["line", [`${p.severity.toLowerCase()}-bg dark`]]),
          style: nc({
            width: a(p.createTime, i.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : Bp("", !0),
        Cp(Ai(Sp), {
          title: Ai(jt)(t.alarm.firstEventTime)
        }, {
          default: Wp(({ attrs: V, on: U }) => [
            i.events[w + 1] ? (Wi(), Ci("div", Ap({ key: 0 }, V, Fp(U), {
              class: ["event", [`${p.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Bp("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      rc("div", {
        class: xp(["line", [`${t.events[t.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: nc({
          width: a(t.events[t.events.length - 1].createTime, Ai(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const Dx = /* @__PURE__ */ ye(Bx, [["__scopeId", "data-v-3341d12d"]]), Ix = window.Vue.openBlock, Ox = window.Vue.createElementBlock, f1 = window.Vue.createElementVNode;
var Qx = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const _x = {}, zx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Gx = /* @__PURE__ */ f1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Yx = /* @__PURE__ */ f1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), Px = [
  Gx,
  Yx
];
function Hx(t, i) {
  return Ix(), Ox("svg", zx, Px);
}
var jx = /* @__PURE__ */ Qx(_x, [["render", Hx]]);
const Xx = window.Vue.defineComponent, Uc = window.Vue.createElementVNode, Lx = window.Vue.renderList, Dp = window.Vue.Fragment, ic = window.Vue.openBlock, oc = window.Vue.createElementBlock, $x = window.Vue.normalizeClass, qx = window.Vue.unref, Ip = window.Vue.toDisplayString, Kx = window.Vue.pushScopeId, eB = window.Vue.popScopeId, tB = (t) => (Kx("data-v-2e087f7b"), t = t(), eB(), t), nB = /* @__PURE__ */ tB(() => /* @__PURE__ */ Uc("strong", null, "Events:", -1)), rB = /* @__PURE__ */ Xx({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(t) {
    const i = t;
    return (r, a) => (ic(), oc(Dp, null, [
      nB,
      (ic(!0), oc(Dp, null, Lx(i.events, (l) => (ic(), oc("div", {
        class: "event-description",
        key: l.id
      }, [
        Uc("div", {
          class: $x(["mark", [`${l.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Uc("div", null, Ip(qx(jt)(l.createTime)) + " - " + Ip(l.source), 1)
      ]))), 128))
    ], 64));
  }
});
const iB = /* @__PURE__ */ ye(rB, [["__scopeId", "data-v-2e087f7b"]]), oB = window.Vue.defineComponent, aB = window.Vue.normalizeClass, ft = window.Vue.createElementVNode, Br = window.Vue.toDisplayString, tt = window.Vue.unref, Dr = window.Vue.createVNode, p1 = window.Vue.createTextVNode, sB = window.Vue.renderList, Op = window.Vue.Fragment, ln = window.Vue.openBlock, $n = window.Vue.createElementBlock, Qp = window.Vue.createBlock, Ta = window.Vue.createCommentVNode, lB = window.Vue.normalizeStyle, cB = window.Vue.pushScopeId, uB = window.Vue.popScopeId, dB = (t) => (cB("data-v-01717d0d"), t = t(), uB(), t), hB = { class: "section detail" }, fB = { class: "id" }, pB = {
  key: 0,
  class: "section"
}, mB = /* @__PURE__ */ dB(() => /* @__PURE__ */ ft("div", { class: "id" }, "Alarms", -1)), wB = { class: "action-btns" }, vB = { class: "zoom" }, VB = /* @__PURE__ */ p1(" Zoom "), TB = { class: "times" }, gB = {
  key: 0,
  class: "timeline-container"
}, UB = { class: "alarm-id" }, RB = {
  key: 0,
  class: "panel"
}, kn = window.Vue.ref, NB = window.Vue.watch, yB = /* @__PURE__ */ oB({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(t) {
    var P, M;
    const i = t, r = Xr(), a = kn(0), l = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], c = kn(l[0]), d = kn(i.width), p = kn(i.width), w = kn(new Date().getTime()), V = () => {
      var W, x;
      if (!i.situation.events) {
        const z = (x = (W = i.situation) == null ? void 0 : W.alarms) == null ? void 0 : x.map((de) => de.id);
        r.getEvents(i.situation.id, z);
      }
    };
    V();
    const U = () => (w.value = new Date().getTime(), d.value / (Number(w.value) - Number(y.value))), R = kn(i.situation.alarms), y = kn(
      ((M = Ze.exports.minBy((P = i.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : M.firstEventTime) || new Date().getTime()
    ), F = kn(U());
    NB(i, () => {
      var W, x;
      y.value = ((x = Ze.exports.minBy((W = i.situation) == null ? void 0 : W.alarms, "firstEventTime")) == null ? void 0 : x.firstEventTime) || new Date().getTime(), V(), d.value = p.value, F.value = U(), R.value = i.situation.alarms, c.value = l[0];
    });
    const E = (W) => {
      if ((W == null ? void 0 : W.id) === 1 && (R.value = i.situation.alarms), (W == null ? void 0 : W.id) === 2) {
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
            i.situation.alarms,
            (z) => Number(z.lastEventTime) - Number(z.firstEventTime)
          )
        );
        R.value = x;
      }
    }, D = () => {
      d.value += 100, F.value = U();
    }, C = () => {
      d.value -= 100, F.value = U();
    }, A = () => {
      d.value = p.value, F.value = U();
    }, Q = (W) => {
      a.value = W;
    }, O = () => {
      a.value = 0;
    };
    return (W, x) => {
      var z, de;
      return ln(), $n(Op, null, [
        ft("div", hB, [
          ft("div", {
            class: aB(["severity-line", [`${(de = (z = i.situation) == null ? void 0 : z.severity) == null ? void 0 : de.toLowerCase()}-bg dark`]])
          }, null, 2),
          ft("div", null, [
            ft("div", fB, "Situation " + Br(i.situation.id), 1),
            ft("div", null, " Duration: " + Br(tt(xM)(w.value, new Date(y.value))), 1)
          ])
        ]),
        R.value && R.value.length > 0 ? (ln(), $n("div", pB, [
          mB,
          ft("div", wB, [
            Dr(tt(LC), {
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
            ft("div", vB, [
              VB,
              ft("div", null, [
                Dr(tt(te), {
                  icon: tt(ax),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"]),
                Dr(tt(te), {
                  icon: tt(Om),
                  class: "zoom-icon",
                  onClick: A
                }, null, 8, ["icon"]),
                Dr(tt(te), {
                  icon: tt(jx),
                  class: "zoom-icon",
                  onClick: C
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          p.value ? (ln(), $n("div", {
            key: 0,
            class: "alarms",
            style: lB({
              width: p.value + 50 + "px"
            })
          }, [
            ft("div", TB, [
              ft("div", null, Br(tt(jt)(y.value)), 1),
              ft("div", null, Br(tt(jt)(w.value)), 1)
            ]),
            t.situation.events ? (ln(), $n("div", gB, [
              (ln(!0), $n(Op, null, sB(R.value, (he) => (ln(), $n("div", {
                class: "timeline",
                key: he.id
              }, [
                ft("div", UB, [
                  p1(Br(he.nodeLabel) + " - " + Br(he.id) + " ", 1),
                  a.value === he.id ? (ln(), Qp(tt(te), {
                    key: 0,
                    icon: tt(Dc),
                    class: "zoom-icon expand",
                    onClick: O
                  }, null, 8, ["icon"])) : (ln(), Qp(tt(te), {
                    key: 1,
                    icon: tt(Em),
                    class: "zoom-icon expand",
                    onClick: () => Q(he.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Dr(Dx, {
                  alarm: he,
                  proportion: F.value,
                  "min-start": y.value,
                  events: i.situation.events[he.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                a.value === he.id ? (ln(), $n("div", RB, [
                  Dr(iB, {
                    events: i.situation.events[he.id]
                  }, null, 8, ["events"])
                ])) : Ta("", !0)
              ]))), 128))
            ])) : Ta("", !0)
          ], 4)) : Ta("", !0)
        ])) : Ta("", !0)
      ], 64);
    };
  }
});
const MB = /* @__PURE__ */ ye(yB, [["__scopeId", "data-v-01717d0d"]]), kB = window.Vue.openBlock, ZB = window.Vue.createElementBlock, JB = window.Vue.createElementVNode;
var bB = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const EB = {}, SB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FB = /* @__PURE__ */ JB("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), AB = [
  FB
];
function WB(t, i) {
  return kB(), ZB("svg", SB, AB);
}
var ac = /* @__PURE__ */ bB(EB, [["render", WB]]);
const CB = window.Vue.defineComponent, ze = window.Vue.unref, kt = window.Vue.createVNode, Li = window.Vue.createElementVNode, cn = window.Vue.withCtx, m1 = window.Vue.createTextVNode, sc = window.Vue.openBlock, xB = window.Vue.createBlock, _p = window.Vue.createCommentVNode, zp = window.Vue.createElementBlock, BB = window.Vue.pushScopeId, DB = window.Vue.popScopeId, $c = (t) => (BB("data-v-6a3cc938"), t = t(), DB(), t), IB = { id: "cont" }, OB = { class: "btns-navigation" }, QB = /* @__PURE__ */ $c(() => /* @__PURE__ */ Li("span", null, "Situation List", -1)), _B = /* @__PURE__ */ $c(() => /* @__PURE__ */ Li("span", null, "Show Previous Situation ", -1)), zB = /* @__PURE__ */ $c(() => /* @__PURE__ */ Li("span", null, "Show Next Situation", -1)), GB = {
  key: 0,
  class: "detail"
}, YB = /* @__PURE__ */ m1("Details"), PB = /* @__PURE__ */ m1("Metrics"), ga = window.Vue.ref, Gp = window.Vue.watch, HB = window.Vue.onMounted, jB = window.VueRouter.useRouter, XB = window.VueRouter.useRoute, LB = /* @__PURE__ */ CB({
  __name: "SituationDetail",
  setup(t) {
    const i = jB(), r = XB(), a = parseInt(r.params.id), l = ga(a), c = Xr();
    c.getSituation(l.value), c.situations.length || c.getSituations();
    const d = ga(), p = ga(), w = ga(
      c.filteredSituations.findIndex((R) => R === l.value)
    );
    Gp(
      () => c.situationDetail,
      () => {
        d.value = c.situationDetail;
      }
    ), HB(() => {
      var y;
      const R = ((y = document.getElementById("cont")) == null ? void 0 : y.getBoundingClientRect().width) || 1200;
      p.value = R - 90;
    });
    const V = () => {
      i.push({
        name: "situations"
      });
    }, U = (R) => {
      const y = w.value, F = c.filteredSituations[y + R];
      i.push({
        name: "situationDetail",
        params: {
          id: F
        }
      });
    };
    return Gp(r, () => {
      l.value = parseInt(r.params.id), c.getSituation(l.value), w.value = c.filteredSituations.findIndex((R) => R == l.value);
    }), (R, y) => (sc(), zp("div", IB, [
      Li("div", OB, [
        kt(ze(wt), {
          primary: "",
          onClick: y[0] || (y[0] = () => V())
        }, {
          default: cn(() => [
            kt(ze(te), {
              icon: ze(ac),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            QB
          ]),
          _: 1
        }),
        Li("div", null, [
          kt(ze(wt), {
            disabled: !ze(c).filteredSituations[w.value - 1],
            primary: "",
            onClick: y[1] || (y[1] = () => U(-1))
          }, {
            default: cn(() => [
              kt(ze(te), {
                icon: ze(ac),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              _B
            ]),
            _: 1
          }, 8, ["disabled"]),
          kt(ze(wt), {
            disabled: !ze(c).filteredSituations[w.value + 1],
            primary: "",
            onClick: y[2] || (y[2] = () => U(1))
          }, {
            default: cn(() => [
              zB,
              kt(ze(te), {
                icon: ze(ac),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      d.value ? (sc(), zp("div", GB, [
        kt(ze(hF), null, {
          tabs: cn(() => [
            kt(ze(Xf), null, {
              default: cn(() => [
                YB
              ]),
              _: 1
            }),
            kt(ze(Xf), null, {
              default: cn(() => [
                PB
              ]),
              _: 1
            })
          ]),
          default: cn(() => [
            kt(ze(Lf), { class: "panel" }, {
              default: cn(() => [
                kt(JC, { "situation-info": d.value }, null, 8, ["situation-info"])
              ]),
              _: 1
            }),
            kt(ze(Lf), { class: "panel" }, {
              default: cn(() => [
                p.value ? (sc(), xB(MB, {
                  key: 0,
                  situation: d.value,
                  width: p.value
                }, null, 8, ["situation", "width"])) : _p("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : _p("", !0)
    ]));
  }
});
const $B = /* @__PURE__ */ ye(LB, [["__scopeId", "data-v-6a3cc938"]]);
var qB = Object.defineProperty, KB = Object.defineProperties, e3 = Object.getOwnPropertyDescriptors, Yp = Object.getOwnPropertySymbols, t3 = Object.prototype.hasOwnProperty, n3 = Object.prototype.propertyIsEnumerable, Pp = (t, i, r) => i in t ? qB(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Ja = (t, i) => {
  for (var r in i || (i = {}))
    t3.call(i, r) && Pp(t, r, i[r]);
  if (Yp)
    for (var r of Yp(i))
      n3.call(i, r) && Pp(t, r, i[r]);
  return t;
}, w1 = (t, i) => KB(t, e3(i));
const v1 = window.Vue.defineComponent, r3 = window.Vue.ref, zi = window.Vue.computed, i3 = window.Vue.reactive, Hp = window.Vue.watch, lc = window.Vue.inject, V1 = window.Vue.resolveComponent, Rc = window.Vue.openBlock, T1 = window.Vue.createElementBlock, En = window.Vue.createElementVNode, o3 = window.Vue.createBlock, a3 = window.Vue.createCommentVNode, g1 = window.Vue.renderSlot, s3 = window.Vue.pushScopeId, l3 = window.Vue.popScopeId, cc = window.Vue.toRef, jp = window.Vue.mergeProps, c3 = window.Vue.toDisplayString, u3 = window.Vue.createVNode;
var U1 = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const d3 = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, h3 = v1({
  props: d3,
  setup(t) {
    const i = r3(), r = () => {
      i.value.focus();
    }, a = zi(() => ae("feather-radio-button")), l = i3({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: a.value
    }), c = zi(() => ae("radio-label-id")), d = zi(() => l.first || l.checked ? 0 : -1);
    Hp(() => t.disabled, (R) => {
      l.disabled = R;
    }, { immediate: !0 }), Hp(() => t.value, (R) => {
      l.value = R;
    }, { immediate: !0 });
    const p = lc("register", (R) => {
    }), w = lc("blur", (R) => {
    }), V = lc("select", (R) => {
    });
    return p(l), {
      labelId: c,
      tabindex: d,
      vm: l,
      blur: w,
      click: () => {
        V(l);
      },
      input: i,
      id: a
    };
  },
  components: {
    FeatherRipple: ir
  }
}), f3 = (t) => (s3("data-v-24790cf0"), t = t(), l3(), t), p3 = { class: "layout-container" }, m3 = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], w3 = { class: "radio hover focus" }, v3 = /* @__PURE__ */ f3(() => /* @__PURE__ */ En("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ En("svg", { class: "dot" }, [
    /* @__PURE__ */ En("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), V3 = ["id"];
function T3(t, i, r, a, l, c) {
  const d = V1("feather-ripple");
  return Rc(), T1("div", p3, [
    En("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: t.id,
      "aria-checked": t.vm.checked ? "true" : "false",
      "aria-disabled": t.vm.disabled ? "true" : "false",
      "aria-labelledby": t.labelId,
      tabindex: t.tabindex,
      onClick: i[0] || (i[0] = (...p) => t.click && t.click(...p)),
      onBlur: i[1] || (i[1] = (...p) => t.blur && t.blur(...p)),
      "data-ref-id": "feather-radio"
    }, [
      En("div", w3, [
        v3,
        t.vm.disabled ? a3("", !0) : (Rc(), o3(d, {
          key: 0,
          center: ""
        }))
      ]),
      En("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        g1(t.$slots, "default", {}, void 0, !0)
      ], 8, V3)
    ], 40, m3)
  ]);
}
var Ia = /* @__PURE__ */ U1(h3, [["render", T3], ["__scopeId", "data-v-24790cf0"]]);
const g3 = w1(Ja({}, io), {
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
}), U3 = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, R3 = v1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: g3,
  emits: U3,
  setup(t, i) {
    oo(t);
    const r = cc(t, "error"), a = cc(t, "modelValue"), l = zi(() => ae("feather-input-description")), c = zi(() => {
      const d = w1(Ja({}, i.attrs), {
        class: "",
        "aria-describedby": l.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return Ja(Ja({
      descriptionId: l,
      attrs: c
    }, Wm(a, i.emit, t.label, t.schema, cc(t, "error"))), ro(i.attrs));
  },
  components: {
    InputSubText: to
  }
}), N3 = ["for"], y3 = ["id"];
function M3(t, i, r, a, l, c) {
  const d = V1("InputSubText");
  return Rc(), T1("div", jp(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    En("label", {
      for: t.groupId,
      class: "group-label"
    }, c3(t.label), 9, N3),
    En("div", jp(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: i[0] || (i[0] = (...p) => t.keydown && t.keydown(...p))
    }), [
      g1(t.$slots, "default", {}, void 0, !0)
    ], 16, y3),
    u3(d, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var R1 = /* @__PURE__ */ U1(R3, [["render", M3], ["__scopeId", "data-v-6775aeb9"]]);
const k3 = window.Vue.openBlock, Z3 = window.Vue.createElementBlock, J3 = window.Vue.createStaticVNode;
var b3 = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const E3 = {}, S3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, F3 = /* @__PURE__ */ J3('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), A3 = [
  F3
];
function W3(t, i) {
  return k3(), Z3("svg", S3, A3);
}
var C3 = /* @__PURE__ */ b3(E3, [["render", W3]]);
const x3 = window.Vue.openBlock, B3 = window.Vue.createElementBlock, D3 = window.Vue.createStaticVNode;
var I3 = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const O3 = {}, Q3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _3 = /* @__PURE__ */ D3('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), z3 = [
  _3
];
function G3(t, i) {
  return x3(), B3("svg", Q3, z3);
}
var Y3 = /* @__PURE__ */ I3(O3, [["render", G3]]);
const P3 = window.Vue.openBlock, H3 = window.Vue.createElementBlock, j3 = window.Vue.createElementVNode;
var X3 = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const L3 = {}, $3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, q3 = /* @__PURE__ */ j3("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), K3 = [
  q3
];
function eD(t, i) {
  return P3(), H3("svg", $3, K3);
}
var tD = /* @__PURE__ */ X3(L3, [["render", eD]]);
const nD = window.Vue.openBlock, rD = window.Vue.createElementBlock, iD = window.Vue.createStaticVNode;
var oD = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const aD = {}, sD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lD = /* @__PURE__ */ iD('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), cD = [
  lD
];
function uD(t, i) {
  return nD(), rD("svg", sD, cD);
}
var dD = /* @__PURE__ */ oD(aD, [["render", uD]]);
const hD = window.Vue.openBlock, fD = window.Vue.createElementBlock, pD = window.Vue.createElementVNode;
var mD = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const wD = {}, vD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VD = /* @__PURE__ */ pD("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), TD = [
  VD
];
function gD(t, i) {
  return hD(), fD("svg", vD, TD);
}
var UD = /* @__PURE__ */ mD(wD, [["render", gD]]);
const qc = () => window.VRouter || Kc, RD = window.Vue.defineComponent, Ne = window.Vue.createElementVNode, $i = window.Vue.createTextVNode, Le = window.Vue.unref, un = window.Vue.createVNode, Ua = window.Vue.withCtx, Xp = window.Vue.openBlock, Lp = window.Vue.createElementBlock, ND = window.Vue.createCommentVNode, yD = window.Vue.pushScopeId, MD = window.Vue.popScopeId, Qt = (t) => (yD("data-v-b4b3bdcf"), t = t(), MD(), t), kD = { class: "container" }, ZD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("div", { class: "title" }, "ALEC", -1)), JD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("div", { class: "description" }, [
  /* @__PURE__ */ $i(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Ne("br"),
  /* @__PURE__ */ Ne("strong", null, "Our goal"),
  /* @__PURE__ */ $i(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), bD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("h3", null, "Key Benefits:", -1)), ED = { class: "list" }, SD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), FD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, "Assist in root cause analysis.", -1)), AD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), WD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, "Easy configuration.", -1)), CD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), xD = {
  key: 0,
  class: "optin"
}, BD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("h3", null, "Enable ALEC for more precise results:", -1)), DD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), ID = { class: "choices" }, OD = /* @__PURE__ */ Qt(() => /* @__PURE__ */ Ne("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), QD = /* @__PURE__ */ $i("Yes"), _D = /* @__PURE__ */ $i("No"), zD = /* @__PURE__ */ $i(" Continue "), GD = window.Vue.ref, YD = /* @__PURE__ */ RD({
  __name: "WelcomePage",
  setup(t) {
    const i = lo(), r = qc(), a = GD(!0), l = () => {
      const c = Boolean(a.value);
      i.savePermission(c), r.push({ name: "configuration" });
    };
    return (c, d) => (Xp(), Lp("div", kD, [
      ZD,
      JD,
      Ne("div", null, [
        bD,
        Ne("div", ED, [
          Ne("div", null, [
            un(Le(te), {
              icon: Le(dD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            SD
          ]),
          Ne("div", null, [
            un(Le(te), {
              icon: Le(tD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            FD
          ]),
          Ne("div", null, [
            un(Le(te), {
              icon: Le(UD),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            AD
          ]),
          Ne("div", null, [
            un(Le(te), {
              icon: Le(C3),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            WD
          ]),
          Ne("div", null, [
            un(Le(te), {
              icon: Le(Y3),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            CD
          ])
        ])
      ]),
      Le(i).isAdmin ? (Xp(), Lp("div", xD, [
        BD,
        DD,
        Ne("div", ID, [
          OD,
          un(Le(R1), {
            horizontal: "",
            modelValue: a.value,
            "onUpdate:modelValue": d[0] || (d[0] = (p) => a.value = p),
            label: ""
          }, {
            default: Ua(() => [
              un(Le(Ia), { value: !0 }, {
                default: Ua(() => [
                  QD
                ]),
                _: 1
              }),
              un(Le(Ia), { value: !1 }, {
                default: Ua(() => [
                  _D
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : ND("", !0),
      un(Le(wt), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: l
      }, {
        default: Ua(() => [
          zD
        ]),
        _: 1
      })
    ]));
  }
});
const PD = /* @__PURE__ */ ye(YD, [["__scopeId", "data-v-b4b3bdcf"]]), HD = window.Vue.defineComponent, jD = window.Vue.createElementVNode, XD = window.Vue.createTextVNode, LD = window.Vue.unref, $D = window.Vue.withCtx, qD = window.Vue.createVNode, KD = window.Vue.Fragment, eI = window.Vue.openBlock, tI = window.Vue.createElementBlock, nI = window.Vue.pushScopeId, rI = window.Vue.popScopeId, iI = (t) => (nI("data-v-bcb7dcc6"), t = t(), rI(), t), oI = /* @__PURE__ */ iI(() => /* @__PURE__ */ jD("div", { class: "main" }, "Something bad is happening...", -1)), aI = /* @__PURE__ */ XD(" Reload "), sI = /* @__PURE__ */ HD({
  __name: "ErrorPage",
  setup(t) {
    const i = qc(), r = () => {
      i.push({ name: "situations" });
    };
    return (a, l) => (eI(), tI(KD, null, [
      oI,
      qD(LD(wt), {
        primary: "",
        onClick: r
      }, {
        default: $D(() => [
          aI
        ]),
        _: 1
      })
    ], 64));
  }
});
const lI = /* @__PURE__ */ ye(sI, [["__scopeId", "data-v-bcb7dcc6"]]), cI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", uI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", dI = window.Vue.defineComponent, Ae = window.Vue.createElementVNode, Nc = window.Vue.createTextVNode, Zn = window.Vue.unref, xi = window.Vue.withCtx, Bi = window.Vue.createVNode, hI = window.Vue.openBlock, fI = window.Vue.createElementBlock, pI = window.Vue.pushScopeId, mI = window.Vue.popScopeId, sr = (t) => (pI("data-v-9a5b5f4e"), t = t(), mI(), t), wI = { class: "container" }, vI = /* @__PURE__ */ sr(() => /* @__PURE__ */ Ae("h2", null, "Configuration", -1)), VI = /* @__PURE__ */ sr(() => /* @__PURE__ */ Ae("p", null, [
  /* @__PURE__ */ Nc(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Ae("br"),
  /* @__PURE__ */ Nc(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Ae("strong", null, [
    /* @__PURE__ */ Ae("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), TI = { class: "radio-content" }, gI = /* @__PURE__ */ sr(() => /* @__PURE__ */ Ae("strong", { class: "title" }, "Clustering", -1)), UI = /* @__PURE__ */ sr(() => /* @__PURE__ */ Ae("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), RI = /* @__PURE__ */ sr(() => /* @__PURE__ */ Ae("img", {
  class: "img",
  src: cI
}, null, -1)), NI = /* @__PURE__ */ sr(() => /* @__PURE__ */ Ae("div", { class: "hellinger" }, [
  /* @__PURE__ */ Ae("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Ae("br"),
  /* @__PURE__ */ Ae("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), yI = /* @__PURE__ */ sr(() => /* @__PURE__ */ Ae("div", { class: "radio-content" }, [
  /* @__PURE__ */ Ae("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Ae("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Ae("img", {
    class: "img img2",
    src: uI
  })
], -1)), MI = /* @__PURE__ */ Nc(" Continue "), $p = window.Vue.ref, kI = /* @__PURE__ */ dI({
  __name: "ConfigurationPage",
  setup(t) {
    const i = lo(), r = qc(), a = $p(!1), l = $p(pt.ENGINE_DBSCAN), c = () => {
      Tm(i.allowSave), YN(l.value, a.value), r.push({ name: "situations" });
    };
    return (d, p) => (hI(), fI("div", wI, [
      vI,
      VI,
      Ae("div", null, [
        Bi(Zn(R1), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: l.value,
          "onUpdate:modelValue": p[1] || (p[1] = (w) => l.value = w)
        }, {
          default: xi(() => [
            Bi(Zn(Ia), {
              class: "radio",
              value: Zn(pt).ENGINE_DBSCAN
            }, {
              default: xi(() => [
                Ae("div", TI, [
                  gI,
                  UI,
                  RI,
                  Bi(Zn(Xc), {
                    modelValue: a.value,
                    "onUpdate:modelValue": p[0] || (p[0] = (w) => a.value = w),
                    disabled: l.value !== Zn(pt).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: xi(() => [
                      NI
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Bi(Zn(Ia), {
              class: "radio",
              value: Zn(pt).ENGINE_DEEP_LEARNING
            }, {
              default: xi(() => [
                yI
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Bi(Zn(wt), {
        primary: "",
        class: "btn",
        onClick: p[2] || (p[2] = () => c())
      }, {
        default: xi(() => [
          MI
        ]),
        _: 1
      })
    ]));
  }
});
const ZI = /* @__PURE__ */ ye(kI, [["__scopeId", "data-v-9a5b5f4e"]]), JI = window.VueRouter.createRouter, bI = window.VueRouter.createWebHistory, uc = async () => {
  const t = window.VRouter || Kc, i = lo();
  if (!i.userId) {
    const r = await i.getUserRole();
    await i.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, N1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const i = window.VRouter || Kc, r = lo();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? i.push({ name: "welcome", params: t.params }) : i.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => uc(),
    component: PD
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => uc(),
    component: ZI
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => uc(),
    component: ES
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: $B
  },
  {
    path: "/error",
    name: "error",
    component: lI
  }
], qp = window.VRouter;
if (qp)
  for (const t of N1) {
    const { path: i, name: r, component: a, beforeEnter: l } = t;
    qp.addRoute("Plugin", {
      path: i.slice(1),
      name: r,
      component: a,
      beforeEnter: l
    });
  }
const Kc = JI({
  history: bI(),
  routes: N1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = NR;

const we = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
}, QR = {}, zR = window.Vue.resolveComponent, GR = window.Vue.createVNode, YR = window.Vue.openBlock, PR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const HR = { class: "main" };
function jR(e, o) {
  const r = zR("router-view");
  return YR(), PR("div", HR, [
    GR(r)
  ]);
}
const XR = /* @__PURE__ */ we(QR, [["render", jR], ["__scopeId", "data-v-5d32d140"]]), LR = window.Vue.defineComponent, $R = window.Vue.openBlock, qR = window.Vue.createBlock, KR = /* @__PURE__ */ LR({
  __name: "App",
  setup(e) {
    return (o, r) => ($R(), qR(XR));
  }
});
var Fo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ey(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var iw = { exports: {} }, ru = { exports: {} }, aw = function(o, r) {
  return function() {
    for (var s = new Array(arguments.length), c = 0; c < s.length; c++)
      s[c] = arguments[c];
    return o.apply(r, s);
  };
}, ty = aw, ou = Object.prototype.toString, iu = function(e) {
  return function(o) {
    var r = ou.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function vr(e) {
  return e = e.toLowerCase(), function(r) {
    return iu(r) === e;
  };
}
function au(e) {
  return Array.isArray(e);
}
function Pa(e) {
  return typeof e > "u";
}
function ny(e) {
  return e !== null && !Pa(e) && e.constructor !== null && !Pa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var sw = vr("ArrayBuffer");
function ry(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && sw(e.buffer), o;
}
function oy(e) {
  return typeof e == "string";
}
function iy(e) {
  return typeof e == "number";
}
function lw(e) {
  return e !== null && typeof e == "object";
}
function _a(e) {
  if (iu(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var ay = vr("Date"), sy = vr("File"), ly = vr("Blob"), cy = vr("FileList");
function su(e) {
  return ou.call(e) === "[object Function]";
}
function uy(e) {
  return lw(e) && su(e.pipe);
}
function dy(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || ou.call(e) === o || su(e.toString) && e.toString() === o);
}
var fy = vr("URLSearchParams");
function hy(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function py() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function lu(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), au(e))
      for (var r = 0, a = e.length; r < a; r++)
        o.call(null, e[r], r, e);
    else
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && o.call(null, e[s], s, e);
}
function Qc() {
  var e = {};
  function o(s, c) {
    _a(e[c]) && _a(s) ? e[c] = Qc(e[c], s) : _a(s) ? e[c] = Qc({}, s) : au(s) ? e[c] = s.slice() : e[c] = s;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    lu(arguments[r], o);
  return e;
}
function my(e, o, r) {
  return lu(o, function(s, c) {
    r && typeof s == "function" ? e[c] = ty(s, r) : e[c] = s;
  }), e;
}
function wy(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function vy(e, o, r, a) {
  e.prototype = Object.create(o.prototype, a), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function Vy(e, o, r) {
  var a, s, c, d = {};
  o = o || {};
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      c = a[s], d[c] || (o[c] = e[c], d[c] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function gy(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var a = e.indexOf(o, r);
  return a !== -1 && a === r;
}
function Ty(e) {
  if (!e)
    return null;
  var o = e.length;
  if (Pa(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var Uy = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Qe = {
  isArray: au,
  isArrayBuffer: sw,
  isBuffer: ny,
  isFormData: dy,
  isArrayBufferView: ry,
  isString: oy,
  isNumber: iy,
  isObject: lw,
  isPlainObject: _a,
  isUndefined: Pa,
  isDate: ay,
  isFile: sy,
  isBlob: ly,
  isFunction: su,
  isStream: uy,
  isURLSearchParams: fy,
  isStandardBrowserEnv: py,
  forEach: lu,
  merge: Qc,
  extend: my,
  trim: hy,
  stripBOM: wy,
  inherits: vy,
  toFlatObject: Vy,
  kindOf: iu,
  kindOfTest: vr,
  endsWith: gy,
  toArray: Ty,
  isTypedArray: Uy,
  isFileList: cy
}, xr = Qe;
function mh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var cw = function(o, r, a) {
  if (!r)
    return o;
  var s;
  if (a)
    s = a(r);
  else if (xr.isURLSearchParams(r))
    s = r.toString();
  else {
    var c = [];
    xr.forEach(r, function(m, g) {
      m === null || typeof m > "u" || (xr.isArray(m) ? g = g + "[]" : m = [m], xr.forEach(m, function(N) {
        xr.isDate(N) ? N = N.toISOString() : xr.isObject(N) && (N = JSON.stringify(N)), c.push(mh(g) + "=" + mh(N));
      }));
    }), s = c.join("&");
  }
  if (s) {
    var d = o.indexOf("#");
    d !== -1 && (o = o.slice(0, d)), o += (o.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return o;
}, Ny = Qe;
function os() {
  this.handlers = [];
}
os.prototype.use = function(o, r, a) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
os.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
os.prototype.forEach = function(o) {
  Ny.forEach(this.handlers, function(a) {
    a !== null && o(a);
  });
};
var Ry = os, yy = Qe, ky = function(o, r) {
  yy.forEach(o, function(s, c) {
    c !== r && c.toUpperCase() === r.toUpperCase() && (o[r] = s, delete o[c]);
  });
}, uw = Qe;
function to(e, o, r, a, s) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), a && (this.request = a), s && (this.response = s);
}
uw.inherits(to, Error, {
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
var dw = to.prototype, fw = {};
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
].forEach(function(e) {
  fw[e] = { value: e };
});
Object.defineProperties(to, fw);
Object.defineProperty(dw, "isAxiosError", { value: !0 });
to.from = function(e, o, r, a, s, c) {
  var d = Object.create(dw);
  return uw.toFlatObject(e, d, function(m) {
    return m !== Error.prototype;
  }), to.call(d, e.message, o, r, a, s), d.name = e.name, c && Object.assign(d, c), d;
};
var oo = to, hw = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Qt = Qe;
function My(e, o) {
  o = o || new FormData();
  var r = [];
  function a(c) {
    return c === null ? "" : Qt.isDate(c) ? c.toISOString() : Qt.isArrayBuffer(c) || Qt.isTypedArray(c) ? typeof Blob == "function" ? new Blob([c]) : Buffer.from(c) : c;
  }
  function s(c, d) {
    if (Qt.isPlainObject(c) || Qt.isArray(c)) {
      if (r.indexOf(c) !== -1)
        throw Error("Circular reference detected in " + d);
      r.push(c), Qt.forEach(c, function(m, g) {
        if (!Qt.isUndefined(m)) {
          var V = d ? d + "." + g : g, N;
          if (m && !d && typeof m == "object") {
            if (Qt.endsWith(g, "{}"))
              m = JSON.stringify(m);
            else if (Qt.endsWith(g, "[]") && (N = Qt.toArray(m))) {
              N.forEach(function(R) {
                !Qt.isUndefined(R) && o.append(V, a(R));
              });
              return;
            }
          }
          s(m, V);
        }
      }), r.pop();
    } else
      o.append(d, a(c));
  }
  return s(e), o;
}
var pw = My, Ql, wh;
function by() {
  if (wh)
    return Ql;
  wh = 1;
  var e = oo;
  return Ql = function(r, a, s) {
    var c = s.config.validateStatus;
    !s.status || !c || c(s.status) ? r(s) : a(new e(
      "Request failed with status code " + s.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, Ql;
}
var zl, vh;
function Zy() {
  if (vh)
    return zl;
  vh = 1;
  var e = Qe;
  return zl = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(a, s, c, d, f, m) {
        var g = [];
        g.push(a + "=" + encodeURIComponent(s)), e.isNumber(c) && g.push("expires=" + new Date(c).toGMTString()), e.isString(d) && g.push("path=" + d), e.isString(f) && g.push("domain=" + f), m === !0 && g.push("secure"), document.cookie = g.join("; ");
      },
      read: function(a) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
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
  }(), zl;
}
var Jy = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, Ey = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, Sy = Jy, Fy = Ey, mw = function(o, r) {
  return o && !Sy(r) ? Fy(o, r) : r;
}, Gl, Vh;
function Ay() {
  if (Vh)
    return Gl;
  Vh = 1;
  var e = Qe, o = [
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
  return Gl = function(a) {
    var s = {}, c, d, f;
    return a && e.forEach(a.split(`
`), function(g) {
      if (f = g.indexOf(":"), c = e.trim(g.substr(0, f)).toLowerCase(), d = e.trim(g.substr(f + 1)), c) {
        if (s[c] && o.indexOf(c) >= 0)
          return;
        c === "set-cookie" ? s[c] = (s[c] ? s[c] : []).concat([d]) : s[c] = s[c] ? s[c] + ", " + d : d;
      }
    }), s;
  }, Gl;
}
var Yl, gh;
function Cy() {
  if (gh)
    return Yl;
  gh = 1;
  var e = Qe;
  return Yl = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), s;
    function c(d) {
      var f = d;
      return r && (a.setAttribute("href", f), f = a.href), a.setAttribute("href", f), {
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
    return s = c(window.location.href), function(f) {
      var m = e.isString(f) ? c(f) : f;
      return m.protocol === s.protocol && m.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Yl;
}
var Pl, Th;
function is() {
  if (Th)
    return Pl;
  Th = 1;
  var e = oo, o = Qe;
  function r(a) {
    e.call(this, a == null ? "canceled" : a, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Pl = r, Pl;
}
var Hl, Uh;
function Wy() {
  return Uh || (Uh = 1, Hl = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Hl;
}
var jl, Nh;
function Rh() {
  if (Nh)
    return jl;
  Nh = 1;
  var e = Qe, o = by(), r = Zy(), a = cw, s = mw, c = Ay(), d = Cy(), f = hw, m = oo, g = is(), V = Wy();
  return jl = function(R) {
    return new Promise(function(b, S) {
      var C = R.data, A = R.headers, W = R.responseType, B;
      function _() {
        R.cancelToken && R.cancelToken.unsubscribe(B), R.signal && R.signal.removeEventListener("abort", B);
      }
      e.isFormData(C) && e.isStandardBrowserEnv() && delete A["Content-Type"];
      var k = new XMLHttpRequest();
      if (R.auth) {
        var D = R.auth.username || "", Q = R.auth.password ? unescape(encodeURIComponent(R.auth.password)) : "";
        A.Authorization = "Basic " + btoa(D + ":" + Q);
      }
      var z = s(R.baseURL, R.url);
      k.open(R.method.toUpperCase(), a(z, R.params, R.paramsSerializer), !0), k.timeout = R.timeout;
      function ve() {
        if (!!k) {
          var Te = "getAllResponseHeaders" in k ? c(k.getAllResponseHeaders()) : null, Ne = !W || W === "text" || W === "json" ? k.responseText : k.response, be = {
            data: Ne,
            status: k.status,
            statusText: k.statusText,
            headers: Te,
            config: R,
            request: k
          };
          o(function(Be) {
            b(Be), _();
          }, function(Be) {
            S(Be), _();
          }, be), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = ve : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(ve);
      }, k.onabort = function() {
        !k || (S(new m("Request aborted", m.ECONNABORTED, R, k)), k = null);
      }, k.onerror = function() {
        S(new m("Network Error", m.ERR_NETWORK, R, k, k)), k = null;
      }, k.ontimeout = function() {
        var Ne = R.timeout ? "timeout of " + R.timeout + "ms exceeded" : "timeout exceeded", be = R.transitional || f;
        R.timeoutErrorMessage && (Ne = R.timeoutErrorMessage), S(new m(
          Ne,
          be.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
          R,
          k
        )), k = null;
      }, e.isStandardBrowserEnv()) {
        var de = (R.withCredentials || d(z)) && R.xsrfCookieName ? r.read(R.xsrfCookieName) : void 0;
        de && (A[R.xsrfHeaderName] = de);
      }
      "setRequestHeader" in k && e.forEach(A, function(Ne, be) {
        typeof C > "u" && be.toLowerCase() === "content-type" ? delete A[be] : k.setRequestHeader(be, Ne);
      }), e.isUndefined(R.withCredentials) || (k.withCredentials = !!R.withCredentials), W && W !== "json" && (k.responseType = R.responseType), typeof R.onDownloadProgress == "function" && k.addEventListener("progress", R.onDownloadProgress), typeof R.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", R.onUploadProgress), (R.cancelToken || R.signal) && (B = function(Te) {
        !k || (S(!Te || Te && Te.type ? new g() : Te), k.abort(), k = null);
      }, R.cancelToken && R.cancelToken.subscribe(B), R.signal && (R.signal.aborted ? B() : R.signal.addEventListener("abort", B))), C || (C = null);
      var ge = V(z);
      if (ge && ["http", "https", "file"].indexOf(ge) === -1) {
        S(new m("Unsupported protocol " + ge + ":", m.ERR_BAD_REQUEST, R));
        return;
      }
      k.send(C);
    });
  }, jl;
}
var Xl, yh;
function xy() {
  return yh || (yh = 1, Xl = null), Xl;
}
var We = Qe, kh = ky, Mh = oo, By = hw, _y = pw, Iy = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function bh(e, o) {
  !We.isUndefined(e) && We.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function Dy() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Rh()), e;
}
function Oy(e, o, r) {
  if (We.isString(e))
    try {
      return (o || JSON.parse)(e), We.trim(e);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(e);
}
var as = {
  transitional: By,
  adapter: Dy(),
  transformRequest: [function(o, r) {
    if (kh(r, "Accept"), kh(r, "Content-Type"), We.isFormData(o) || We.isArrayBuffer(o) || We.isBuffer(o) || We.isStream(o) || We.isFile(o) || We.isBlob(o))
      return o;
    if (We.isArrayBufferView(o))
      return o.buffer;
    if (We.isURLSearchParams(o))
      return bh(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var a = We.isObject(o), s = r && r["Content-Type"], c;
    if ((c = We.isFileList(o)) || a && s === "multipart/form-data") {
      var d = this.env && this.env.FormData;
      return _y(c ? { "files[]": o } : o, d && new d());
    } else if (a || s === "application/json")
      return bh(r, "application/json"), Oy(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || as.transitional, a = r && r.silentJSONParsing, s = r && r.forcedJSONParsing, c = !a && this.responseType === "json";
    if (c || s && We.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (d) {
        if (c)
          throw d.name === "SyntaxError" ? Mh.from(d, Mh.ERR_BAD_RESPONSE, this, null, this.response) : d;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: xy()
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
We.forEach(["delete", "get", "head"], function(o) {
  as.headers[o] = {};
});
We.forEach(["post", "put", "patch"], function(o) {
  as.headers[o] = We.merge(Iy);
});
var cu = as, Qy = Qe, zy = cu, Gy = function(o, r, a) {
  var s = this || zy;
  return Qy.forEach(a, function(d) {
    o = d.call(s, o, r);
  }), o;
}, Ll, Zh;
function ww() {
  return Zh || (Zh = 1, Ll = function(o) {
    return !!(o && o.__CANCEL__);
  }), Ll;
}
var Jh = Qe, $l = Gy, Yy = ww(), Py = cu, Hy = is();
function ql(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Hy();
}
var jy = function(o) {
  ql(o), o.headers = o.headers || {}, o.data = $l.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = Jh.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), Jh.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete o.headers[s];
    }
  );
  var r = o.adapter || Py.adapter;
  return r(o).then(function(s) {
    return ql(o), s.data = $l.call(
      o,
      s.data,
      s.headers,
      o.transformResponse
    ), s;
  }, function(s) {
    return Yy(s) || (ql(o), s && s.response && (s.response.data = $l.call(
      o,
      s.response.data,
      s.response.headers,
      o.transformResponse
    ))), Promise.reject(s);
  });
}, pt = Qe, vw = function(o, r) {
  r = r || {};
  var a = {};
  function s(V, N) {
    return pt.isPlainObject(V) && pt.isPlainObject(N) ? pt.merge(V, N) : pt.isPlainObject(N) ? pt.merge({}, N) : pt.isArray(N) ? N.slice() : N;
  }
  function c(V) {
    if (pt.isUndefined(r[V])) {
      if (!pt.isUndefined(o[V]))
        return s(void 0, o[V]);
    } else
      return s(o[V], r[V]);
  }
  function d(V) {
    if (!pt.isUndefined(r[V]))
      return s(void 0, r[V]);
  }
  function f(V) {
    if (pt.isUndefined(r[V])) {
      if (!pt.isUndefined(o[V]))
        return s(void 0, o[V]);
    } else
      return s(void 0, r[V]);
  }
  function m(V) {
    if (V in r)
      return s(o[V], r[V]);
    if (V in o)
      return s(void 0, o[V]);
  }
  var g = {
    url: d,
    method: d,
    data: d,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: m
  };
  return pt.forEach(Object.keys(o).concat(Object.keys(r)), function(N) {
    var R = g[N] || c, F = R(N);
    pt.isUndefined(F) && R !== m || (a[N] = F);
  }), a;
}, Kl, Eh;
function Vw() {
  return Eh || (Eh = 1, Kl = {
    version: "0.27.2"
  }), Kl;
}
var Xy = Vw().version, _n = oo, uu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  uu[e] = function(a) {
    return typeof a === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var Sh = {};
uu.transitional = function(o, r, a) {
  function s(c, d) {
    return "[Axios v" + Xy + "] Transitional option '" + c + "'" + d + (a ? ". " + a : "");
  }
  return function(c, d, f) {
    if (o === !1)
      throw new _n(
        s(d, " has been removed" + (r ? " in " + r : "")),
        _n.ERR_DEPRECATED
      );
    return r && !Sh[d] && (Sh[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(c, d, f) : !0;
  };
};
function Ly(e, o, r) {
  if (typeof e != "object")
    throw new _n("options must be an object", _n.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(e), s = a.length; s-- > 0; ) {
    var c = a[s], d = o[c];
    if (d) {
      var f = e[c], m = f === void 0 || d(f, c, e);
      if (m !== !0)
        throw new _n("option " + c + " must be " + m, _n.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new _n("Unknown option " + c, _n.ERR_BAD_OPTION);
  }
}
var $y = {
  assertOptions: Ly,
  validators: uu
}, gw = Qe, qy = cw, Fh = Ry, Ah = jy, ss = vw, Ky = mw, Tw = $y, Br = Tw.validators;
function no(e) {
  this.defaults = e, this.interceptors = {
    request: new Fh(),
    response: new Fh()
  };
}
no.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = ss(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && Tw.assertOptions(a, {
    silentJSONParsing: Br.transitional(Br.boolean),
    forcedJSONParsing: Br.transitional(Br.boolean),
    clarifyTimeoutError: Br.transitional(Br.boolean)
  }, !1);
  var s = [], c = !0;
  this.interceptors.request.forEach(function(F) {
    typeof F.runWhen == "function" && F.runWhen(r) === !1 || (c = c && F.synchronous, s.unshift(F.fulfilled, F.rejected));
  });
  var d = [];
  this.interceptors.response.forEach(function(F) {
    d.push(F.fulfilled, F.rejected);
  });
  var f;
  if (!c) {
    var m = [Ah, void 0];
    for (Array.prototype.unshift.apply(m, s), m = m.concat(d), f = Promise.resolve(r); m.length; )
      f = f.then(m.shift(), m.shift());
    return f;
  }
  for (var g = r; s.length; ) {
    var V = s.shift(), N = s.shift();
    try {
      g = V(g);
    } catch (R) {
      N(R);
      break;
    }
  }
  try {
    f = Ah(g);
  } catch (R) {
    return Promise.reject(R);
  }
  for (; d.length; )
    f = f.then(d.shift(), d.shift());
  return f;
};
no.prototype.getUri = function(o) {
  o = ss(this.defaults, o);
  var r = Ky(o.baseURL, o.url);
  return qy(r, o.params, o.paramsSerializer);
};
gw.forEach(["delete", "get", "head", "options"], function(o) {
  no.prototype[o] = function(r, a) {
    return this.request(ss(a || {}, {
      method: o,
      url: r,
      data: (a || {}).data
    }));
  };
});
gw.forEach(["post", "put", "patch"], function(o) {
  function r(a) {
    return function(c, d, f) {
      return this.request(ss(f || {}, {
        method: o,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: c,
        data: d
      }));
    };
  }
  no.prototype[o] = r(), no.prototype[o + "Form"] = r(!0);
});
var ek = no, ec, Ch;
function tk() {
  if (Ch)
    return ec;
  Ch = 1;
  var e = is();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(d) {
      a = d;
    });
    var s = this;
    this.promise.then(function(c) {
      if (!!s._listeners) {
        var d, f = s._listeners.length;
        for (d = 0; d < f; d++)
          s._listeners[d](c);
        s._listeners = null;
      }
    }), this.promise.then = function(c) {
      var d, f = new Promise(function(m) {
        s.subscribe(m), d = m;
      }).then(c);
      return f.cancel = function() {
        s.unsubscribe(d);
      }, f;
    }, r(function(d) {
      s.reason || (s.reason = new e(d), a(s.reason));
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
      var s = this._listeners.indexOf(a);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, o.source = function() {
    var a, s = new o(function(d) {
      a = d;
    });
    return {
      token: s,
      cancel: a
    };
  }, ec = o, ec;
}
var tc, Wh;
function nk() {
  return Wh || (Wh = 1, tc = function(o) {
    return function(a) {
      return o.apply(null, a);
    };
  }), tc;
}
var nc, xh;
function rk() {
  if (xh)
    return nc;
  xh = 1;
  var e = Qe;
  return nc = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, nc;
}
var Bh = Qe, ok = aw, Ia = ek, ik = vw, ak = cu;
function Uw(e) {
  var o = new Ia(e), r = ok(Ia.prototype.request, o);
  return Bh.extend(r, Ia.prototype, o), Bh.extend(r, o), r.create = function(s) {
    return Uw(ik(e, s));
  }, r;
}
var st = Uw(ak);
st.Axios = Ia;
st.CanceledError = is();
st.CancelToken = tk();
st.isCancel = ww();
st.VERSION = Vw().version;
st.toFormData = pw;
st.AxiosError = oo;
st.Cancel = st.CanceledError;
st.all = function(o) {
  return Promise.all(o);
};
st.spread = nk();
st.isAxiosError = rk();
ru.exports = st;
ru.exports.default = st;
(function(e) {
  e.exports = ru.exports;
})(iw);
const Nw = /* @__PURE__ */ ey(iw.exports), Un = Nw.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), nn = Nw.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var me = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(e, o) {
  (function() {
    var r, a = "4.17.21", s = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", g = 500, V = "__lodash_placeholder__", N = 1, R = 2, F = 4, b = 1, S = 2, C = 1, A = 2, W = 4, B = 8, _ = 16, k = 32, D = 64, Q = 128, z = 256, ve = 512, de = 30, ge = "...", Te = 800, Ne = 16, be = 1, ce = 2, Be = 3, _e = 1 / 0, je = 9007199254740991, lo = 17976931348623157e292, Ni = 0 / 0, Xt = 4294967295, ev = Xt - 1, tv = Xt >>> 1, nv = [
      ["ary", Q],
      ["bind", C],
      ["bindKey", A],
      ["curry", B],
      ["curryRight", _],
      ["flip", ve],
      ["partial", k],
      ["partialRight", D],
      ["rearg", z]
    ], Tr = "[object Arguments]", Ri = "[object Array]", rv = "[object AsyncFunction]", co = "[object Boolean]", uo = "[object Date]", ov = "[object DOMException]", yi = "[object Error]", ki = "[object Function]", Bu = "[object GeneratorFunction]", xt = "[object Map]", fo = "[object Number]", iv = "[object Null]", rn = "[object Object]", _u = "[object Promise]", av = "[object Proxy]", ho = "[object RegExp]", Bt = "[object Set]", po = "[object String]", Mi = "[object Symbol]", sv = "[object Undefined]", mo = "[object WeakMap]", lv = "[object WeakSet]", wo = "[object ArrayBuffer]", Ur = "[object DataView]", Us = "[object Float32Array]", Ns = "[object Float64Array]", Rs = "[object Int8Array]", ys = "[object Int16Array]", ks = "[object Int32Array]", Ms = "[object Uint8Array]", bs = "[object Uint8ClampedArray]", Zs = "[object Uint16Array]", Js = "[object Uint32Array]", cv = /\b__p \+= '';/g, uv = /\b(__p \+=) '' \+/g, dv = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Iu = /&(?:amp|lt|gt|quot|#39);/g, Du = /[&<>"']/g, fv = RegExp(Iu.source), hv = RegExp(Du.source), pv = /<%-([\s\S]+?)%>/g, mv = /<%([\s\S]+?)%>/g, Ou = /<%=([\s\S]+?)%>/g, wv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vv = /^\w*$/, Vv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Es = /[\\^$.*+?()[\]{}|]/g, gv = RegExp(Es.source), Ss = /^\s+/, Tv = /\s/, Uv = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Nv = /\{\n\/\* \[wrapped with (.+)\] \*/, Rv = /,? & /, yv = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, kv = /[()=,{}\[\]\/\s]/, Mv = /\\(\\)?/g, bv = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Qu = /\w*$/, Zv = /^[-+]0x[0-9a-f]+$/i, Jv = /^0b[01]+$/i, Ev = /^\[object .+?Constructor\]$/, Sv = /^0o[0-7]+$/i, Fv = /^(?:0|[1-9]\d*)$/, Av = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, bi = /($^)/, Cv = /['\n\r\u2028\u2029\\]/g, Zi = "\\ud800-\\udfff", Wv = "\\u0300-\\u036f", xv = "\\ufe20-\\ufe2f", Bv = "\\u20d0-\\u20ff", zu = Wv + xv + Bv, Gu = "\\u2700-\\u27bf", Yu = "a-z\\xdf-\\xf6\\xf8-\\xff", _v = "\\xac\\xb1\\xd7\\xf7", Iv = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Dv = "\\u2000-\\u206f", Ov = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Pu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Hu = "\\ufe0e\\ufe0f", ju = _v + Iv + Dv + Ov, Fs = "['\u2019]", Qv = "[" + Zi + "]", Xu = "[" + ju + "]", Ji = "[" + zu + "]", Lu = "\\d+", zv = "[" + Gu + "]", $u = "[" + Yu + "]", qu = "[^" + Zi + ju + Lu + Gu + Yu + Pu + "]", As = "\\ud83c[\\udffb-\\udfff]", Gv = "(?:" + Ji + "|" + As + ")", Ku = "[^" + Zi + "]", Cs = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ws = "[\\ud800-\\udbff][\\udc00-\\udfff]", Nr = "[" + Pu + "]", ed = "\\u200d", td = "(?:" + $u + "|" + qu + ")", Yv = "(?:" + Nr + "|" + qu + ")", nd = "(?:" + Fs + "(?:d|ll|m|re|s|t|ve))?", rd = "(?:" + Fs + "(?:D|LL|M|RE|S|T|VE))?", od = Gv + "?", id = "[" + Hu + "]?", Pv = "(?:" + ed + "(?:" + [Ku, Cs, Ws].join("|") + ")" + id + od + ")*", Hv = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", jv = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ad = id + od + Pv, Xv = "(?:" + [zv, Cs, Ws].join("|") + ")" + ad, Lv = "(?:" + [Ku + Ji + "?", Ji, Cs, Ws, Qv].join("|") + ")", $v = RegExp(Fs, "g"), qv = RegExp(Ji, "g"), xs = RegExp(As + "(?=" + As + ")|" + Lv + ad, "g"), Kv = RegExp([
      Nr + "?" + $u + "+" + nd + "(?=" + [Xu, Nr, "$"].join("|") + ")",
      Yv + "+" + rd + "(?=" + [Xu, Nr + td, "$"].join("|") + ")",
      Nr + "?" + td + "+" + nd,
      Nr + "+" + rd,
      jv,
      Hv,
      Lu,
      Xv
    ].join("|"), "g"), eV = RegExp("[" + ed + Zi + zu + Hu + "]"), tV = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, nV = [
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
    ], rV = -1, he = {};
    he[Us] = he[Ns] = he[Rs] = he[ys] = he[ks] = he[Ms] = he[bs] = he[Zs] = he[Js] = !0, he[Tr] = he[Ri] = he[wo] = he[co] = he[Ur] = he[uo] = he[yi] = he[ki] = he[xt] = he[fo] = he[rn] = he[ho] = he[Bt] = he[po] = he[mo] = !1;
    var fe = {};
    fe[Tr] = fe[Ri] = fe[wo] = fe[Ur] = fe[co] = fe[uo] = fe[Us] = fe[Ns] = fe[Rs] = fe[ys] = fe[ks] = fe[xt] = fe[fo] = fe[rn] = fe[ho] = fe[Bt] = fe[po] = fe[Mi] = fe[Ms] = fe[bs] = fe[Zs] = fe[Js] = !0, fe[yi] = fe[ki] = fe[mo] = !1;
    var oV = {
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
    }, iV = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, aV = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, sV = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, lV = parseFloat, cV = parseInt, sd = typeof Fo == "object" && Fo && Fo.Object === Object && Fo, uV = typeof self == "object" && self && self.Object === Object && self, Ie = sd || uV || Function("return this")(), Bs = o && !o.nodeType && o, Hn = Bs && !0 && e && !e.nodeType && e, ld = Hn && Hn.exports === Bs, _s = ld && sd.process, Ut = function() {
      try {
        var T = Hn && Hn.require && Hn.require("util").types;
        return T || _s && _s.binding && _s.binding("util");
      } catch {
      }
    }(), cd = Ut && Ut.isArrayBuffer, ud = Ut && Ut.isDate, dd = Ut && Ut.isMap, fd = Ut && Ut.isRegExp, hd = Ut && Ut.isSet, pd = Ut && Ut.isTypedArray;
    function lt(T, M, y) {
      switch (y.length) {
        case 0:
          return T.call(M);
        case 1:
          return T.call(M, y[0]);
        case 2:
          return T.call(M, y[0], y[1]);
        case 3:
          return T.call(M, y[0], y[1], y[2]);
      }
      return T.apply(M, y);
    }
    function dV(T, M, y, I) {
      for (var H = -1, re = T == null ? 0 : T.length; ++H < re; ) {
        var Ee = T[H];
        M(I, Ee, y(Ee), T);
      }
      return I;
    }
    function Nt(T, M) {
      for (var y = -1, I = T == null ? 0 : T.length; ++y < I && M(T[y], y, T) !== !1; )
        ;
      return T;
    }
    function fV(T, M) {
      for (var y = T == null ? 0 : T.length; y-- && M(T[y], y, T) !== !1; )
        ;
      return T;
    }
    function md(T, M) {
      for (var y = -1, I = T == null ? 0 : T.length; ++y < I; )
        if (!M(T[y], y, T))
          return !1;
      return !0;
    }
    function Nn(T, M) {
      for (var y = -1, I = T == null ? 0 : T.length, H = 0, re = []; ++y < I; ) {
        var Ee = T[y];
        M(Ee, y, T) && (re[H++] = Ee);
      }
      return re;
    }
    function Ei(T, M) {
      var y = T == null ? 0 : T.length;
      return !!y && Rr(T, M, 0) > -1;
    }
    function Is(T, M, y) {
      for (var I = -1, H = T == null ? 0 : T.length; ++I < H; )
        if (y(M, T[I]))
          return !0;
      return !1;
    }
    function pe(T, M) {
      for (var y = -1, I = T == null ? 0 : T.length, H = Array(I); ++y < I; )
        H[y] = M(T[y], y, T);
      return H;
    }
    function Rn(T, M) {
      for (var y = -1, I = M.length, H = T.length; ++y < I; )
        T[H + y] = M[y];
      return T;
    }
    function Ds(T, M, y, I) {
      var H = -1, re = T == null ? 0 : T.length;
      for (I && re && (y = T[++H]); ++H < re; )
        y = M(y, T[H], H, T);
      return y;
    }
    function hV(T, M, y, I) {
      var H = T == null ? 0 : T.length;
      for (I && H && (y = T[--H]); H--; )
        y = M(y, T[H], H, T);
      return y;
    }
    function Os(T, M) {
      for (var y = -1, I = T == null ? 0 : T.length; ++y < I; )
        if (M(T[y], y, T))
          return !0;
      return !1;
    }
    var pV = Qs("length");
    function mV(T) {
      return T.split("");
    }
    function wV(T) {
      return T.match(yv) || [];
    }
    function wd(T, M, y) {
      var I;
      return y(T, function(H, re, Ee) {
        if (M(H, re, Ee))
          return I = re, !1;
      }), I;
    }
    function Si(T, M, y, I) {
      for (var H = T.length, re = y + (I ? 1 : -1); I ? re-- : ++re < H; )
        if (M(T[re], re, T))
          return re;
      return -1;
    }
    function Rr(T, M, y) {
      return M === M ? ZV(T, M, y) : Si(T, vd, y);
    }
    function vV(T, M, y, I) {
      for (var H = y - 1, re = T.length; ++H < re; )
        if (I(T[H], M))
          return H;
      return -1;
    }
    function vd(T) {
      return T !== T;
    }
    function Vd(T, M) {
      var y = T == null ? 0 : T.length;
      return y ? Gs(T, M) / y : Ni;
    }
    function Qs(T) {
      return function(M) {
        return M == null ? r : M[T];
      };
    }
    function zs(T) {
      return function(M) {
        return T == null ? r : T[M];
      };
    }
    function gd(T, M, y, I, H) {
      return H(T, function(re, Ee, ue) {
        y = I ? (I = !1, re) : M(y, re, Ee, ue);
      }), y;
    }
    function VV(T, M) {
      var y = T.length;
      for (T.sort(M); y--; )
        T[y] = T[y].value;
      return T;
    }
    function Gs(T, M) {
      for (var y, I = -1, H = T.length; ++I < H; ) {
        var re = M(T[I]);
        re !== r && (y = y === r ? re : y + re);
      }
      return y;
    }
    function Ys(T, M) {
      for (var y = -1, I = Array(T); ++y < T; )
        I[y] = M(y);
      return I;
    }
    function gV(T, M) {
      return pe(M, function(y) {
        return [y, T[y]];
      });
    }
    function Td(T) {
      return T && T.slice(0, yd(T) + 1).replace(Ss, "");
    }
    function ct(T) {
      return function(M) {
        return T(M);
      };
    }
    function Ps(T, M) {
      return pe(M, function(y) {
        return T[y];
      });
    }
    function vo(T, M) {
      return T.has(M);
    }
    function Ud(T, M) {
      for (var y = -1, I = T.length; ++y < I && Rr(M, T[y], 0) > -1; )
        ;
      return y;
    }
    function Nd(T, M) {
      for (var y = T.length; y-- && Rr(M, T[y], 0) > -1; )
        ;
      return y;
    }
    function TV(T, M) {
      for (var y = T.length, I = 0; y--; )
        T[y] === M && ++I;
      return I;
    }
    var UV = zs(oV), NV = zs(iV);
    function RV(T) {
      return "\\" + sV[T];
    }
    function yV(T, M) {
      return T == null ? r : T[M];
    }
    function yr(T) {
      return eV.test(T);
    }
    function kV(T) {
      return tV.test(T);
    }
    function MV(T) {
      for (var M, y = []; !(M = T.next()).done; )
        y.push(M.value);
      return y;
    }
    function Hs(T) {
      var M = -1, y = Array(T.size);
      return T.forEach(function(I, H) {
        y[++M] = [H, I];
      }), y;
    }
    function Rd(T, M) {
      return function(y) {
        return T(M(y));
      };
    }
    function yn(T, M) {
      for (var y = -1, I = T.length, H = 0, re = []; ++y < I; ) {
        var Ee = T[y];
        (Ee === M || Ee === V) && (T[y] = V, re[H++] = y);
      }
      return re;
    }
    function Fi(T) {
      var M = -1, y = Array(T.size);
      return T.forEach(function(I) {
        y[++M] = I;
      }), y;
    }
    function bV(T) {
      var M = -1, y = Array(T.size);
      return T.forEach(function(I) {
        y[++M] = [I, I];
      }), y;
    }
    function ZV(T, M, y) {
      for (var I = y - 1, H = T.length; ++I < H; )
        if (T[I] === M)
          return I;
      return -1;
    }
    function JV(T, M, y) {
      for (var I = y + 1; I--; )
        if (T[I] === M)
          return I;
      return I;
    }
    function kr(T) {
      return yr(T) ? SV(T) : pV(T);
    }
    function _t(T) {
      return yr(T) ? FV(T) : mV(T);
    }
    function yd(T) {
      for (var M = T.length; M-- && Tv.test(T.charAt(M)); )
        ;
      return M;
    }
    var EV = zs(aV);
    function SV(T) {
      for (var M = xs.lastIndex = 0; xs.test(T); )
        ++M;
      return M;
    }
    function FV(T) {
      return T.match(xs) || [];
    }
    function AV(T) {
      return T.match(Kv) || [];
    }
    var CV = function T(M) {
      M = M == null ? Ie : Mr.defaults(Ie.Object(), M, Mr.pick(Ie, nV));
      var y = M.Array, I = M.Date, H = M.Error, re = M.Function, Ee = M.Math, ue = M.Object, js = M.RegExp, WV = M.String, Rt = M.TypeError, Ai = y.prototype, xV = re.prototype, br = ue.prototype, Ci = M["__core-js_shared__"], Wi = xV.toString, se = br.hasOwnProperty, BV = 0, kd = function() {
        var t = /[^.]+$/.exec(Ci && Ci.keys && Ci.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), xi = br.toString, _V = Wi.call(ue), IV = Ie._, DV = js(
        "^" + Wi.call(se).replace(Es, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Bi = ld ? M.Buffer : r, kn = M.Symbol, _i = M.Uint8Array, Md = Bi ? Bi.allocUnsafe : r, Ii = Rd(ue.getPrototypeOf, ue), bd = ue.create, Zd = br.propertyIsEnumerable, Di = Ai.splice, Jd = kn ? kn.isConcatSpreadable : r, Vo = kn ? kn.iterator : r, jn = kn ? kn.toStringTag : r, Oi = function() {
        try {
          var t = Kn(ue, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), OV = M.clearTimeout !== Ie.clearTimeout && M.clearTimeout, QV = I && I.now !== Ie.Date.now && I.now, zV = M.setTimeout !== Ie.setTimeout && M.setTimeout, Qi = Ee.ceil, zi = Ee.floor, Xs = ue.getOwnPropertySymbols, GV = Bi ? Bi.isBuffer : r, Ed = M.isFinite, YV = Ai.join, PV = Rd(ue.keys, ue), Se = Ee.max, Ge = Ee.min, HV = I.now, jV = M.parseInt, Sd = Ee.random, XV = Ai.reverse, Ls = Kn(M, "DataView"), go = Kn(M, "Map"), $s = Kn(M, "Promise"), Zr = Kn(M, "Set"), To = Kn(M, "WeakMap"), Uo = Kn(ue, "create"), Gi = To && new To(), Jr = {}, LV = er(Ls), $V = er(go), qV = er($s), KV = er(Zr), e0 = er(To), Yi = kn ? kn.prototype : r, No = Yi ? Yi.valueOf : r, Fd = Yi ? Yi.toString : r;
      function h(t) {
        if (Ue(t) && !j(t) && !(t instanceof te)) {
          if (t instanceof yt)
            return t;
          if (se.call(t, "__wrapped__"))
            return Cf(t);
        }
        return new yt(t);
      }
      var Er = function() {
        function t() {
        }
        return function(n) {
          if (!Ve(n))
            return {};
          if (bd)
            return bd(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function Pi() {
      }
      function yt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: pv,
        evaluate: mv,
        interpolate: Ou,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Pi.prototype, h.prototype.constructor = h, yt.prototype = Er(Pi.prototype), yt.prototype.constructor = yt;
      function te(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Xt, this.__views__ = [];
      }
      function t0() {
        var t = new te(this.__wrapped__);
        return t.__actions__ = Ke(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ke(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ke(this.__views__), t;
      }
      function n0() {
        if (this.__filtered__) {
          var t = new te(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function r0() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = j(t), l = n < 0, u = i ? t.length : 0, p = mg(0, u, this.__views__), w = p.start, v = p.end, U = v - w, Z = l ? v : w - 1, J = this.__iteratees__, E = J.length, x = 0, O = Ge(U, this.__takeCount__);
        if (!i || !l && u == U && O == U)
          return nf(t, this.__actions__);
        var Y = [];
        e:
          for (; U-- && x < O; ) {
            Z += n;
            for (var $ = -1, P = t[Z]; ++$ < E; ) {
              var ee = J[$], ne = ee.iteratee, ft = ee.type, $e = ne(P);
              if (ft == ce)
                P = $e;
              else if (!$e) {
                if (ft == be)
                  continue e;
                break e;
              }
            }
            Y[x++] = P;
          }
        return Y;
      }
      te.prototype = Er(Pi.prototype), te.prototype.constructor = te;
      function Xn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function o0() {
        this.__data__ = Uo ? Uo(null) : {}, this.size = 0;
      }
      function i0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function a0(t) {
        var n = this.__data__;
        if (Uo) {
          var i = n[t];
          return i === m ? r : i;
        }
        return se.call(n, t) ? n[t] : r;
      }
      function s0(t) {
        var n = this.__data__;
        return Uo ? n[t] !== r : se.call(n, t);
      }
      function l0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = Uo && n === r ? m : n, this;
      }
      Xn.prototype.clear = o0, Xn.prototype.delete = i0, Xn.prototype.get = a0, Xn.prototype.has = s0, Xn.prototype.set = l0;
      function on(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function c0() {
        this.__data__ = [], this.size = 0;
      }
      function u0(t) {
        var n = this.__data__, i = Hi(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : Di.call(n, i, 1), --this.size, !0;
      }
      function d0(t) {
        var n = this.__data__, i = Hi(n, t);
        return i < 0 ? r : n[i][1];
      }
      function f0(t) {
        return Hi(this.__data__, t) > -1;
      }
      function h0(t, n) {
        var i = this.__data__, l = Hi(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      on.prototype.clear = c0, on.prototype.delete = u0, on.prototype.get = d0, on.prototype.has = f0, on.prototype.set = h0;
      function an(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function p0() {
        this.size = 0, this.__data__ = {
          hash: new Xn(),
          map: new (go || on)(),
          string: new Xn()
        };
      }
      function m0(t) {
        var n = ia(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function w0(t) {
        return ia(this, t).get(t);
      }
      function v0(t) {
        return ia(this, t).has(t);
      }
      function V0(t, n) {
        var i = ia(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      an.prototype.clear = p0, an.prototype.delete = m0, an.prototype.get = w0, an.prototype.has = v0, an.prototype.set = V0;
      function Ln(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new an(); ++n < i; )
          this.add(t[n]);
      }
      function g0(t) {
        return this.__data__.set(t, m), this;
      }
      function T0(t) {
        return this.__data__.has(t);
      }
      Ln.prototype.add = Ln.prototype.push = g0, Ln.prototype.has = T0;
      function It(t) {
        var n = this.__data__ = new on(t);
        this.size = n.size;
      }
      function U0() {
        this.__data__ = new on(), this.size = 0;
      }
      function N0(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function R0(t) {
        return this.__data__.get(t);
      }
      function y0(t) {
        return this.__data__.has(t);
      }
      function k0(t, n) {
        var i = this.__data__;
        if (i instanceof on) {
          var l = i.__data__;
          if (!go || l.length < s - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new an(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      It.prototype.clear = U0, It.prototype.delete = N0, It.prototype.get = R0, It.prototype.has = y0, It.prototype.set = k0;
      function Ad(t, n) {
        var i = j(t), l = !i && tr(t), u = !i && !l && En(t), p = !i && !l && !u && Cr(t), w = i || l || u || p, v = w ? Ys(t.length, WV) : [], U = v.length;
        for (var Z in t)
          (n || se.call(t, Z)) && !(w && (Z == "length" || u && (Z == "offset" || Z == "parent") || p && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || un(Z, U))) && v.push(Z);
        return v;
      }
      function Cd(t) {
        var n = t.length;
        return n ? t[ll(0, n - 1)] : r;
      }
      function M0(t, n) {
        return aa(Ke(t), $n(n, 0, t.length));
      }
      function b0(t) {
        return aa(Ke(t));
      }
      function qs(t, n, i) {
        (i !== r && !Dt(t[n], i) || i === r && !(n in t)) && sn(t, n, i);
      }
      function Ro(t, n, i) {
        var l = t[n];
        (!(se.call(t, n) && Dt(l, i)) || i === r && !(n in t)) && sn(t, n, i);
      }
      function Hi(t, n) {
        for (var i = t.length; i--; )
          if (Dt(t[i][0], n))
            return i;
        return -1;
      }
      function Z0(t, n, i, l) {
        return Mn(t, function(u, p, w) {
          n(l, u, i(u), w);
        }), l;
      }
      function Wd(t, n) {
        return t && $t(n, Ce(n), t);
      }
      function J0(t, n) {
        return t && $t(n, tt(n), t);
      }
      function sn(t, n, i) {
        n == "__proto__" && Oi ? Oi(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function Ks(t, n) {
        for (var i = -1, l = n.length, u = y(l), p = t == null; ++i < l; )
          u[i] = p ? r : Al(t, n[i]);
        return u;
      }
      function $n(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function kt(t, n, i, l, u, p) {
        var w, v = n & N, U = n & R, Z = n & F;
        if (i && (w = u ? i(t, l, u, p) : i(t)), w !== r)
          return w;
        if (!Ve(t))
          return t;
        var J = j(t);
        if (J) {
          if (w = vg(t), !v)
            return Ke(t, w);
        } else {
          var E = Ye(t), x = E == ki || E == Bu;
          if (En(t))
            return af(t, v);
          if (E == rn || E == Tr || x && !u) {
            if (w = U || x ? {} : kf(t), !v)
              return U ? ag(t, J0(w, t)) : ig(t, Wd(w, t));
          } else {
            if (!fe[E])
              return u ? t : {};
            w = Vg(t, E, v);
          }
        }
        p || (p = new It());
        var O = p.get(t);
        if (O)
          return O;
        p.set(t, w), eh(t) ? t.forEach(function(P) {
          w.add(kt(P, n, i, P, t, p));
        }) : qf(t) && t.forEach(function(P, ee) {
          w.set(ee, kt(P, n, i, ee, t, p));
        });
        var Y = Z ? U ? gl : Vl : U ? tt : Ce, $ = J ? r : Y(t);
        return Nt($ || t, function(P, ee) {
          $ && (ee = P, P = t[ee]), Ro(w, ee, kt(P, n, i, ee, t, p));
        }), w;
      }
      function E0(t) {
        var n = Ce(t);
        return function(i) {
          return xd(i, t, n);
        };
      }
      function xd(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = ue(t); l--; ) {
          var u = i[l], p = n[u], w = t[u];
          if (w === r && !(u in t) || !p(w))
            return !1;
        }
        return !0;
      }
      function Bd(t, n, i) {
        if (typeof t != "function")
          throw new Rt(d);
        return Eo(function() {
          t.apply(r, i);
        }, n);
      }
      function yo(t, n, i, l) {
        var u = -1, p = Ei, w = !0, v = t.length, U = [], Z = n.length;
        if (!v)
          return U;
        i && (n = pe(n, ct(i))), l ? (p = Is, w = !1) : n.length >= s && (p = vo, w = !1, n = new Ln(n));
        e:
          for (; ++u < v; ) {
            var J = t[u], E = i == null ? J : i(J);
            if (J = l || J !== 0 ? J : 0, w && E === E) {
              for (var x = Z; x--; )
                if (n[x] === E)
                  continue e;
              U.push(J);
            } else
              p(n, E, l) || U.push(J);
          }
        return U;
      }
      var Mn = df(Lt), _d = df(tl, !0);
      function S0(t, n) {
        var i = !0;
        return Mn(t, function(l, u, p) {
          return i = !!n(l, u, p), i;
        }), i;
      }
      function ji(t, n, i) {
        for (var l = -1, u = t.length; ++l < u; ) {
          var p = t[l], w = n(p);
          if (w != null && (v === r ? w === w && !dt(w) : i(w, v)))
            var v = w, U = p;
        }
        return U;
      }
      function F0(t, n, i, l) {
        var u = t.length;
        for (i = L(i), i < 0 && (i = -i > u ? 0 : u + i), l = l === r || l > u ? u : L(l), l < 0 && (l += u), l = i > l ? 0 : nh(l); i < l; )
          t[i++] = n;
        return t;
      }
      function Id(t, n) {
        var i = [];
        return Mn(t, function(l, u, p) {
          n(l, u, p) && i.push(l);
        }), i;
      }
      function De(t, n, i, l, u) {
        var p = -1, w = t.length;
        for (i || (i = Tg), u || (u = []); ++p < w; ) {
          var v = t[p];
          n > 0 && i(v) ? n > 1 ? De(v, n - 1, i, l, u) : Rn(u, v) : l || (u[u.length] = v);
        }
        return u;
      }
      var el = ff(), Dd = ff(!0);
      function Lt(t, n) {
        return t && el(t, n, Ce);
      }
      function tl(t, n) {
        return t && Dd(t, n, Ce);
      }
      function Xi(t, n) {
        return Nn(n, function(i) {
          return dn(t[i]);
        });
      }
      function qn(t, n) {
        n = Zn(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[qt(n[i++])];
        return i && i == l ? t : r;
      }
      function Od(t, n, i) {
        var l = n(t);
        return j(t) ? l : Rn(l, i(t));
      }
      function Xe(t) {
        return t == null ? t === r ? sv : iv : jn && jn in ue(t) ? pg(t) : bg(t);
      }
      function nl(t, n) {
        return t > n;
      }
      function A0(t, n) {
        return t != null && se.call(t, n);
      }
      function C0(t, n) {
        return t != null && n in ue(t);
      }
      function W0(t, n, i) {
        return t >= Ge(n, i) && t < Se(n, i);
      }
      function rl(t, n, i) {
        for (var l = i ? Is : Ei, u = t[0].length, p = t.length, w = p, v = y(p), U = 1 / 0, Z = []; w--; ) {
          var J = t[w];
          w && n && (J = pe(J, ct(n))), U = Ge(J.length, U), v[w] = !i && (n || u >= 120 && J.length >= 120) ? new Ln(w && J) : r;
        }
        J = t[0];
        var E = -1, x = v[0];
        e:
          for (; ++E < u && Z.length < U; ) {
            var O = J[E], Y = n ? n(O) : O;
            if (O = i || O !== 0 ? O : 0, !(x ? vo(x, Y) : l(Z, Y, i))) {
              for (w = p; --w; ) {
                var $ = v[w];
                if (!($ ? vo($, Y) : l(t[w], Y, i)))
                  continue e;
              }
              x && x.push(Y), Z.push(O);
            }
          }
        return Z;
      }
      function x0(t, n, i, l) {
        return Lt(t, function(u, p, w) {
          n(l, i(u), p, w);
        }), l;
      }
      function ko(t, n, i) {
        n = Zn(n, t), t = Jf(t, n);
        var l = t == null ? t : t[qt(bt(n))];
        return l == null ? r : lt(l, t, i);
      }
      function Qd(t) {
        return Ue(t) && Xe(t) == Tr;
      }
      function B0(t) {
        return Ue(t) && Xe(t) == wo;
      }
      function _0(t) {
        return Ue(t) && Xe(t) == uo;
      }
      function Mo(t, n, i, l, u) {
        return t === n ? !0 : t == null || n == null || !Ue(t) && !Ue(n) ? t !== t && n !== n : I0(t, n, i, l, Mo, u);
      }
      function I0(t, n, i, l, u, p) {
        var w = j(t), v = j(n), U = w ? Ri : Ye(t), Z = v ? Ri : Ye(n);
        U = U == Tr ? rn : U, Z = Z == Tr ? rn : Z;
        var J = U == rn, E = Z == rn, x = U == Z;
        if (x && En(t)) {
          if (!En(n))
            return !1;
          w = !0, J = !1;
        }
        if (x && !J)
          return p || (p = new It()), w || Cr(t) ? Nf(t, n, i, l, u, p) : fg(t, n, U, i, l, u, p);
        if (!(i & b)) {
          var O = J && se.call(t, "__wrapped__"), Y = E && se.call(n, "__wrapped__");
          if (O || Y) {
            var $ = O ? t.value() : t, P = Y ? n.value() : n;
            return p || (p = new It()), u($, P, i, l, p);
          }
        }
        return x ? (p || (p = new It()), hg(t, n, i, l, u, p)) : !1;
      }
      function D0(t) {
        return Ue(t) && Ye(t) == xt;
      }
      function ol(t, n, i, l) {
        var u = i.length, p = u, w = !l;
        if (t == null)
          return !p;
        for (t = ue(t); u--; ) {
          var v = i[u];
          if (w && v[2] ? v[1] !== t[v[0]] : !(v[0] in t))
            return !1;
        }
        for (; ++u < p; ) {
          v = i[u];
          var U = v[0], Z = t[U], J = v[1];
          if (w && v[2]) {
            if (Z === r && !(U in t))
              return !1;
          } else {
            var E = new It();
            if (l)
              var x = l(Z, J, U, t, n, E);
            if (!(x === r ? Mo(J, Z, b | S, l, E) : x))
              return !1;
          }
        }
        return !0;
      }
      function zd(t) {
        if (!Ve(t) || Ng(t))
          return !1;
        var n = dn(t) ? DV : Ev;
        return n.test(er(t));
      }
      function O0(t) {
        return Ue(t) && Xe(t) == ho;
      }
      function Q0(t) {
        return Ue(t) && Ye(t) == Bt;
      }
      function z0(t) {
        return Ue(t) && fa(t.length) && !!he[Xe(t)];
      }
      function Gd(t) {
        return typeof t == "function" ? t : t == null ? nt : typeof t == "object" ? j(t) ? Hd(t[0], t[1]) : Pd(t) : hh(t);
      }
      function il(t) {
        if (!Jo(t))
          return PV(t);
        var n = [];
        for (var i in ue(t))
          se.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function G0(t) {
        if (!Ve(t))
          return Mg(t);
        var n = Jo(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !se.call(t, l)) || i.push(l);
        return i;
      }
      function al(t, n) {
        return t < n;
      }
      function Yd(t, n) {
        var i = -1, l = et(t) ? y(t.length) : [];
        return Mn(t, function(u, p, w) {
          l[++i] = n(u, p, w);
        }), l;
      }
      function Pd(t) {
        var n = Ul(t);
        return n.length == 1 && n[0][2] ? bf(n[0][0], n[0][1]) : function(i) {
          return i === t || ol(i, t, n);
        };
      }
      function Hd(t, n) {
        return Rl(t) && Mf(n) ? bf(qt(t), n) : function(i) {
          var l = Al(i, t);
          return l === r && l === n ? Cl(i, t) : Mo(n, l, b | S);
        };
      }
      function Li(t, n, i, l, u) {
        t !== n && el(n, function(p, w) {
          if (u || (u = new It()), Ve(p))
            Y0(t, n, w, i, Li, l, u);
          else {
            var v = l ? l(kl(t, w), p, w + "", t, n, u) : r;
            v === r && (v = p), qs(t, w, v);
          }
        }, tt);
      }
      function Y0(t, n, i, l, u, p, w) {
        var v = kl(t, i), U = kl(n, i), Z = w.get(U);
        if (Z) {
          qs(t, i, Z);
          return;
        }
        var J = p ? p(v, U, i + "", t, n, w) : r, E = J === r;
        if (E) {
          var x = j(U), O = !x && En(U), Y = !x && !O && Cr(U);
          J = U, x || O || Y ? j(v) ? J = v : Re(v) ? J = Ke(v) : O ? (E = !1, J = af(U, !0)) : Y ? (E = !1, J = sf(U, !0)) : J = [] : So(U) || tr(U) ? (J = v, tr(v) ? J = rh(v) : (!Ve(v) || dn(v)) && (J = kf(U))) : E = !1;
        }
        E && (w.set(U, J), u(J, U, l, p, w), w.delete(U)), qs(t, i, J);
      }
      function jd(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, un(n, i) ? t[n] : r;
      }
      function Xd(t, n, i) {
        n.length ? n = pe(n, function(p) {
          return j(p) ? function(w) {
            return qn(w, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [nt];
        var l = -1;
        n = pe(n, ct(G()));
        var u = Yd(t, function(p, w, v) {
          var U = pe(n, function(Z) {
            return Z(p);
          });
          return { criteria: U, index: ++l, value: p };
        });
        return VV(u, function(p, w) {
          return og(p, w, i);
        });
      }
      function P0(t, n) {
        return Ld(t, n, function(i, l) {
          return Cl(t, l);
        });
      }
      function Ld(t, n, i) {
        for (var l = -1, u = n.length, p = {}; ++l < u; ) {
          var w = n[l], v = qn(t, w);
          i(v, w) && bo(p, Zn(w, t), v);
        }
        return p;
      }
      function H0(t) {
        return function(n) {
          return qn(n, t);
        };
      }
      function sl(t, n, i, l) {
        var u = l ? vV : Rr, p = -1, w = n.length, v = t;
        for (t === n && (n = Ke(n)), i && (v = pe(t, ct(i))); ++p < w; )
          for (var U = 0, Z = n[p], J = i ? i(Z) : Z; (U = u(v, J, U, l)) > -1; )
            v !== t && Di.call(v, U, 1), Di.call(t, U, 1);
        return t;
      }
      function $d(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var u = n[i];
          if (i == l || u !== p) {
            var p = u;
            un(u) ? Di.call(t, u, 1) : dl(t, u);
          }
        }
        return t;
      }
      function ll(t, n) {
        return t + zi(Sd() * (n - t + 1));
      }
      function j0(t, n, i, l) {
        for (var u = -1, p = Se(Qi((n - t) / (i || 1)), 0), w = y(p); p--; )
          w[l ? p : ++u] = t, t += i;
        return w;
      }
      function cl(t, n) {
        var i = "";
        if (!t || n < 1 || n > je)
          return i;
        do
          n % 2 && (i += t), n = zi(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function K(t, n) {
        return Ml(Zf(t, n, nt), t + "");
      }
      function X0(t) {
        return Cd(Wr(t));
      }
      function L0(t, n) {
        var i = Wr(t);
        return aa(i, $n(n, 0, i.length));
      }
      function bo(t, n, i, l) {
        if (!Ve(t))
          return t;
        n = Zn(n, t);
        for (var u = -1, p = n.length, w = p - 1, v = t; v != null && ++u < p; ) {
          var U = qt(n[u]), Z = i;
          if (U === "__proto__" || U === "constructor" || U === "prototype")
            return t;
          if (u != w) {
            var J = v[U];
            Z = l ? l(J, U, v) : r, Z === r && (Z = Ve(J) ? J : un(n[u + 1]) ? [] : {});
          }
          Ro(v, U, Z), v = v[U];
        }
        return t;
      }
      var qd = Gi ? function(t, n) {
        return Gi.set(t, n), t;
      } : nt, $0 = Oi ? function(t, n) {
        return Oi(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: xl(n),
          writable: !0
        });
      } : nt;
      function q0(t) {
        return aa(Wr(t));
      }
      function Mt(t, n, i) {
        var l = -1, u = t.length;
        n < 0 && (n = -n > u ? 0 : u + n), i = i > u ? u : i, i < 0 && (i += u), u = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = y(u); ++l < u; )
          p[l] = t[l + n];
        return p;
      }
      function K0(t, n) {
        var i;
        return Mn(t, function(l, u, p) {
          return i = n(l, u, p), !i;
        }), !!i;
      }
      function $i(t, n, i) {
        var l = 0, u = t == null ? l : t.length;
        if (typeof n == "number" && n === n && u <= tv) {
          for (; l < u; ) {
            var p = l + u >>> 1, w = t[p];
            w !== null && !dt(w) && (i ? w <= n : w < n) ? l = p + 1 : u = p;
          }
          return u;
        }
        return ul(t, n, nt, i);
      }
      function ul(t, n, i, l) {
        var u = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var w = n !== n, v = n === null, U = dt(n), Z = n === r; u < p; ) {
          var J = zi((u + p) / 2), E = i(t[J]), x = E !== r, O = E === null, Y = E === E, $ = dt(E);
          if (w)
            var P = l || Y;
          else
            Z ? P = Y && (l || x) : v ? P = Y && x && (l || !O) : U ? P = Y && x && !O && (l || !$) : O || $ ? P = !1 : P = l ? E <= n : E < n;
          P ? u = J + 1 : p = J;
        }
        return Ge(p, ev);
      }
      function Kd(t, n) {
        for (var i = -1, l = t.length, u = 0, p = []; ++i < l; ) {
          var w = t[i], v = n ? n(w) : w;
          if (!i || !Dt(v, U)) {
            var U = v;
            p[u++] = w === 0 ? 0 : w;
          }
        }
        return p;
      }
      function ef(t) {
        return typeof t == "number" ? t : dt(t) ? Ni : +t;
      }
      function ut(t) {
        if (typeof t == "string")
          return t;
        if (j(t))
          return pe(t, ut) + "";
        if (dt(t))
          return Fd ? Fd.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -_e ? "-0" : n;
      }
      function bn(t, n, i) {
        var l = -1, u = Ei, p = t.length, w = !0, v = [], U = v;
        if (i)
          w = !1, u = Is;
        else if (p >= s) {
          var Z = n ? null : ug(t);
          if (Z)
            return Fi(Z);
          w = !1, u = vo, U = new Ln();
        } else
          U = n ? [] : v;
        e:
          for (; ++l < p; ) {
            var J = t[l], E = n ? n(J) : J;
            if (J = i || J !== 0 ? J : 0, w && E === E) {
              for (var x = U.length; x--; )
                if (U[x] === E)
                  continue e;
              n && U.push(E), v.push(J);
            } else
              u(U, E, i) || (U !== v && U.push(E), v.push(J));
          }
        return v;
      }
      function dl(t, n) {
        return n = Zn(n, t), t = Jf(t, n), t == null || delete t[qt(bt(n))];
      }
      function tf(t, n, i, l) {
        return bo(t, n, i(qn(t, n)), l);
      }
      function qi(t, n, i, l) {
        for (var u = t.length, p = l ? u : -1; (l ? p-- : ++p < u) && n(t[p], p, t); )
          ;
        return i ? Mt(t, l ? 0 : p, l ? p + 1 : u) : Mt(t, l ? p + 1 : 0, l ? u : p);
      }
      function nf(t, n) {
        var i = t;
        return i instanceof te && (i = i.value()), Ds(n, function(l, u) {
          return u.func.apply(u.thisArg, Rn([l], u.args));
        }, i);
      }
      function fl(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? bn(t[0]) : [];
        for (var u = -1, p = y(l); ++u < l; )
          for (var w = t[u], v = -1; ++v < l; )
            v != u && (p[u] = yo(p[u] || w, t[v], n, i));
        return bn(De(p, 1), n, i);
      }
      function rf(t, n, i) {
        for (var l = -1, u = t.length, p = n.length, w = {}; ++l < u; ) {
          var v = l < p ? n[l] : r;
          i(w, t[l], v);
        }
        return w;
      }
      function hl(t) {
        return Re(t) ? t : [];
      }
      function pl(t) {
        return typeof t == "function" ? t : nt;
      }
      function Zn(t, n) {
        return j(t) ? t : Rl(t, n) ? [t] : Af(ae(t));
      }
      var eg = K;
      function Jn(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : Mt(t, n, i);
      }
      var of = OV || function(t) {
        return Ie.clearTimeout(t);
      };
      function af(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Md ? Md(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function ml(t) {
        var n = new t.constructor(t.byteLength);
        return new _i(n).set(new _i(t)), n;
      }
      function tg(t, n) {
        var i = n ? ml(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function ng(t) {
        var n = new t.constructor(t.source, Qu.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function rg(t) {
        return No ? ue(No.call(t)) : {};
      }
      function sf(t, n) {
        var i = n ? ml(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function lf(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, u = t === t, p = dt(t), w = n !== r, v = n === null, U = n === n, Z = dt(n);
          if (!v && !Z && !p && t > n || p && w && U && !v && !Z || l && w && U || !i && U || !u)
            return 1;
          if (!l && !p && !Z && t < n || Z && i && u && !l && !p || v && i && u || !w && u || !U)
            return -1;
        }
        return 0;
      }
      function og(t, n, i) {
        for (var l = -1, u = t.criteria, p = n.criteria, w = u.length, v = i.length; ++l < w; ) {
          var U = lf(u[l], p[l]);
          if (U) {
            if (l >= v)
              return U;
            var Z = i[l];
            return U * (Z == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function cf(t, n, i, l) {
        for (var u = -1, p = t.length, w = i.length, v = -1, U = n.length, Z = Se(p - w, 0), J = y(U + Z), E = !l; ++v < U; )
          J[v] = n[v];
        for (; ++u < w; )
          (E || u < p) && (J[i[u]] = t[u]);
        for (; Z--; )
          J[v++] = t[u++];
        return J;
      }
      function uf(t, n, i, l) {
        for (var u = -1, p = t.length, w = -1, v = i.length, U = -1, Z = n.length, J = Se(p - v, 0), E = y(J + Z), x = !l; ++u < J; )
          E[u] = t[u];
        for (var O = u; ++U < Z; )
          E[O + U] = n[U];
        for (; ++w < v; )
          (x || u < p) && (E[O + i[w]] = t[u++]);
        return E;
      }
      function Ke(t, n) {
        var i = -1, l = t.length;
        for (n || (n = y(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function $t(t, n, i, l) {
        var u = !i;
        i || (i = {});
        for (var p = -1, w = n.length; ++p < w; ) {
          var v = n[p], U = l ? l(i[v], t[v], v, i, t) : r;
          U === r && (U = t[v]), u ? sn(i, v, U) : Ro(i, v, U);
        }
        return i;
      }
      function ig(t, n) {
        return $t(t, Nl(t), n);
      }
      function ag(t, n) {
        return $t(t, Rf(t), n);
      }
      function Ki(t, n) {
        return function(i, l) {
          var u = j(i) ? dV : Z0, p = n ? n() : {};
          return u(i, t, G(l, 2), p);
        };
      }
      function Sr(t) {
        return K(function(n, i) {
          var l = -1, u = i.length, p = u > 1 ? i[u - 1] : r, w = u > 2 ? i[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (u--, p) : r, w && Le(i[0], i[1], w) && (p = u < 3 ? r : p, u = 1), n = ue(n); ++l < u; ) {
            var v = i[l];
            v && t(n, v, l, p);
          }
          return n;
        });
      }
      function df(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!et(i))
            return t(i, l);
          for (var u = i.length, p = n ? u : -1, w = ue(i); (n ? p-- : ++p < u) && l(w[p], p, w) !== !1; )
            ;
          return i;
        };
      }
      function ff(t) {
        return function(n, i, l) {
          for (var u = -1, p = ue(n), w = l(n), v = w.length; v--; ) {
            var U = w[t ? v : ++u];
            if (i(p[U], U, p) === !1)
              break;
          }
          return n;
        };
      }
      function sg(t, n, i) {
        var l = n & C, u = Zo(t);
        function p() {
          var w = this && this !== Ie && this instanceof p ? u : t;
          return w.apply(l ? i : this, arguments);
        }
        return p;
      }
      function hf(t) {
        return function(n) {
          n = ae(n);
          var i = yr(n) ? _t(n) : r, l = i ? i[0] : n.charAt(0), u = i ? Jn(i, 1).join("") : n.slice(1);
          return l[t]() + u;
        };
      }
      function Fr(t) {
        return function(n) {
          return Ds(dh(uh(n).replace($v, "")), t, "");
        };
      }
      function Zo(t) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new t();
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3]);
            case 5:
              return new t(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var i = Er(t.prototype), l = t.apply(i, n);
          return Ve(l) ? l : i;
        };
      }
      function lg(t, n, i) {
        var l = Zo(t);
        function u() {
          for (var p = arguments.length, w = y(p), v = p, U = Ar(u); v--; )
            w[v] = arguments[v];
          var Z = p < 3 && w[0] !== U && w[p - 1] !== U ? [] : yn(w, U);
          if (p -= Z.length, p < i)
            return Vf(
              t,
              n,
              ea,
              u.placeholder,
              r,
              w,
              Z,
              r,
              r,
              i - p
            );
          var J = this && this !== Ie && this instanceof u ? l : t;
          return lt(J, this, w);
        }
        return u;
      }
      function pf(t) {
        return function(n, i, l) {
          var u = ue(n);
          if (!et(n)) {
            var p = G(i, 3);
            n = Ce(n), i = function(v) {
              return p(u[v], v, u);
            };
          }
          var w = t(n, i, l);
          return w > -1 ? u[p ? n[w] : w] : r;
        };
      }
      function mf(t) {
        return cn(function(n) {
          var i = n.length, l = i, u = yt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Rt(d);
            if (u && !w && oa(p) == "wrapper")
              var w = new yt([], !0);
          }
          for (l = w ? l : i; ++l < i; ) {
            p = n[l];
            var v = oa(p), U = v == "wrapper" ? Tl(p) : r;
            U && yl(U[0]) && U[1] == (Q | B | k | z) && !U[4].length && U[9] == 1 ? w = w[oa(U[0])].apply(w, U[3]) : w = p.length == 1 && yl(p) ? w[v]() : w.thru(p);
          }
          return function() {
            var Z = arguments, J = Z[0];
            if (w && Z.length == 1 && j(J))
              return w.plant(J).value();
            for (var E = 0, x = i ? n[E].apply(this, Z) : J; ++E < i; )
              x = n[E].call(this, x);
            return x;
          };
        });
      }
      function ea(t, n, i, l, u, p, w, v, U, Z) {
        var J = n & Q, E = n & C, x = n & A, O = n & (B | _), Y = n & ve, $ = x ? r : Zo(t);
        function P() {
          for (var ee = arguments.length, ne = y(ee), ft = ee; ft--; )
            ne[ft] = arguments[ft];
          if (O)
            var $e = Ar(P), ht = TV(ne, $e);
          if (l && (ne = cf(ne, l, u, O)), p && (ne = uf(ne, p, w, O)), ee -= ht, O && ee < Z) {
            var ye = yn(ne, $e);
            return Vf(
              t,
              n,
              ea,
              P.placeholder,
              i,
              ne,
              ye,
              v,
              U,
              Z - ee
            );
          }
          var Ot = E ? i : this, hn = x ? Ot[t] : t;
          return ee = ne.length, v ? ne = Zg(ne, v) : Y && ee > 1 && ne.reverse(), J && U < ee && (ne.length = U), this && this !== Ie && this instanceof P && (hn = $ || Zo(hn)), hn.apply(Ot, ne);
        }
        return P;
      }
      function wf(t, n) {
        return function(i, l) {
          return x0(i, t, n(l), {});
        };
      }
      function ta(t, n) {
        return function(i, l) {
          var u;
          if (i === r && l === r)
            return n;
          if (i !== r && (u = i), l !== r) {
            if (u === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = ut(i), l = ut(l)) : (i = ef(i), l = ef(l)), u = t(i, l);
          }
          return u;
        };
      }
      function wl(t) {
        return cn(function(n) {
          return n = pe(n, ct(G())), K(function(i) {
            var l = this;
            return t(n, function(u) {
              return lt(u, l, i);
            });
          });
        });
      }
      function na(t, n) {
        n = n === r ? " " : ut(n);
        var i = n.length;
        if (i < 2)
          return i ? cl(n, t) : n;
        var l = cl(n, Qi(t / kr(n)));
        return yr(n) ? Jn(_t(l), 0, t).join("") : l.slice(0, t);
      }
      function cg(t, n, i, l) {
        var u = n & C, p = Zo(t);
        function w() {
          for (var v = -1, U = arguments.length, Z = -1, J = l.length, E = y(J + U), x = this && this !== Ie && this instanceof w ? p : t; ++Z < J; )
            E[Z] = l[Z];
          for (; U--; )
            E[Z++] = arguments[++v];
          return lt(x, u ? i : this, E);
        }
        return w;
      }
      function vf(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && Le(n, i, l) && (i = l = r), n = fn(n), i === r ? (i = n, n = 0) : i = fn(i), l = l === r ? n < i ? 1 : -1 : fn(l), j0(n, i, l, t);
        };
      }
      function ra(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Zt(n), i = Zt(i)), t(n, i);
        };
      }
      function Vf(t, n, i, l, u, p, w, v, U, Z) {
        var J = n & B, E = J ? w : r, x = J ? r : w, O = J ? p : r, Y = J ? r : p;
        n |= J ? k : D, n &= ~(J ? D : k), n & W || (n &= ~(C | A));
        var $ = [
          t,
          n,
          u,
          O,
          E,
          Y,
          x,
          v,
          U,
          Z
        ], P = i.apply(r, $);
        return yl(t) && Ef(P, $), P.placeholder = l, Sf(P, t, n);
      }
      function vl(t) {
        var n = Ee[t];
        return function(i, l) {
          if (i = Zt(i), l = l == null ? 0 : Ge(L(l), 292), l && Ed(i)) {
            var u = (ae(i) + "e").split("e"), p = n(u[0] + "e" + (+u[1] + l));
            return u = (ae(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - l));
          }
          return n(i);
        };
      }
      var ug = Zr && 1 / Fi(new Zr([, -0]))[1] == _e ? function(t) {
        return new Zr(t);
      } : Il;
      function gf(t) {
        return function(n) {
          var i = Ye(n);
          return i == xt ? Hs(n) : i == Bt ? bV(n) : gV(n, t(n));
        };
      }
      function ln(t, n, i, l, u, p, w, v) {
        var U = n & A;
        if (!U && typeof t != "function")
          throw new Rt(d);
        var Z = l ? l.length : 0;
        if (Z || (n &= ~(k | D), l = u = r), w = w === r ? w : Se(L(w), 0), v = v === r ? v : L(v), Z -= u ? u.length : 0, n & D) {
          var J = l, E = u;
          l = u = r;
        }
        var x = U ? r : Tl(t), O = [
          t,
          n,
          i,
          l,
          u,
          J,
          E,
          p,
          w,
          v
        ];
        if (x && kg(O, x), t = O[0], n = O[1], i = O[2], l = O[3], u = O[4], v = O[9] = O[9] === r ? U ? 0 : t.length : Se(O[9] - Z, 0), !v && n & (B | _) && (n &= ~(B | _)), !n || n == C)
          var Y = sg(t, n, i);
        else
          n == B || n == _ ? Y = lg(t, n, v) : (n == k || n == (C | k)) && !u.length ? Y = cg(t, n, i, l) : Y = ea.apply(r, O);
        var $ = x ? qd : Ef;
        return Sf($(Y, O), t, n);
      }
      function Tf(t, n, i, l) {
        return t === r || Dt(t, br[i]) && !se.call(l, i) ? n : t;
      }
      function Uf(t, n, i, l, u, p) {
        return Ve(t) && Ve(n) && (p.set(n, t), Li(t, n, r, Uf, p), p.delete(n)), t;
      }
      function dg(t) {
        return So(t) ? r : t;
      }
      function Nf(t, n, i, l, u, p) {
        var w = i & b, v = t.length, U = n.length;
        if (v != U && !(w && U > v))
          return !1;
        var Z = p.get(t), J = p.get(n);
        if (Z && J)
          return Z == n && J == t;
        var E = -1, x = !0, O = i & S ? new Ln() : r;
        for (p.set(t, n), p.set(n, t); ++E < v; ) {
          var Y = t[E], $ = n[E];
          if (l)
            var P = w ? l($, Y, E, n, t, p) : l(Y, $, E, t, n, p);
          if (P !== r) {
            if (P)
              continue;
            x = !1;
            break;
          }
          if (O) {
            if (!Os(n, function(ee, ne) {
              if (!vo(O, ne) && (Y === ee || u(Y, ee, i, l, p)))
                return O.push(ne);
            })) {
              x = !1;
              break;
            }
          } else if (!(Y === $ || u(Y, $, i, l, p))) {
            x = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), x;
      }
      function fg(t, n, i, l, u, p, w) {
        switch (i) {
          case Ur:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case wo:
            return !(t.byteLength != n.byteLength || !p(new _i(t), new _i(n)));
          case co:
          case uo:
          case fo:
            return Dt(+t, +n);
          case yi:
            return t.name == n.name && t.message == n.message;
          case ho:
          case po:
            return t == n + "";
          case xt:
            var v = Hs;
          case Bt:
            var U = l & b;
            if (v || (v = Fi), t.size != n.size && !U)
              return !1;
            var Z = w.get(t);
            if (Z)
              return Z == n;
            l |= S, w.set(t, n);
            var J = Nf(v(t), v(n), l, u, p, w);
            return w.delete(t), J;
          case Mi:
            if (No)
              return No.call(t) == No.call(n);
        }
        return !1;
      }
      function hg(t, n, i, l, u, p) {
        var w = i & b, v = Vl(t), U = v.length, Z = Vl(n), J = Z.length;
        if (U != J && !w)
          return !1;
        for (var E = U; E--; ) {
          var x = v[E];
          if (!(w ? x in n : se.call(n, x)))
            return !1;
        }
        var O = p.get(t), Y = p.get(n);
        if (O && Y)
          return O == n && Y == t;
        var $ = !0;
        p.set(t, n), p.set(n, t);
        for (var P = w; ++E < U; ) {
          x = v[E];
          var ee = t[x], ne = n[x];
          if (l)
            var ft = w ? l(ne, ee, x, n, t, p) : l(ee, ne, x, t, n, p);
          if (!(ft === r ? ee === ne || u(ee, ne, i, l, p) : ft)) {
            $ = !1;
            break;
          }
          P || (P = x == "constructor");
        }
        if ($ && !P) {
          var $e = t.constructor, ht = n.constructor;
          $e != ht && "constructor" in t && "constructor" in n && !(typeof $e == "function" && $e instanceof $e && typeof ht == "function" && ht instanceof ht) && ($ = !1);
        }
        return p.delete(t), p.delete(n), $;
      }
      function cn(t) {
        return Ml(Zf(t, r, Bf), t + "");
      }
      function Vl(t) {
        return Od(t, Ce, Nl);
      }
      function gl(t) {
        return Od(t, tt, Rf);
      }
      var Tl = Gi ? function(t) {
        return Gi.get(t);
      } : Il;
      function oa(t) {
        for (var n = t.name + "", i = Jr[n], l = se.call(Jr, n) ? i.length : 0; l--; ) {
          var u = i[l], p = u.func;
          if (p == null || p == t)
            return u.name;
        }
        return n;
      }
      function Ar(t) {
        var n = se.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function G() {
        var t = h.iteratee || Bl;
        return t = t === Bl ? Gd : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function ia(t, n) {
        var i = t.__data__;
        return Ug(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function Ul(t) {
        for (var n = Ce(t), i = n.length; i--; ) {
          var l = n[i], u = t[l];
          n[i] = [l, u, Mf(u)];
        }
        return n;
      }
      function Kn(t, n) {
        var i = yV(t, n);
        return zd(i) ? i : r;
      }
      function pg(t) {
        var n = se.call(t, jn), i = t[jn];
        try {
          t[jn] = r;
          var l = !0;
        } catch {
        }
        var u = xi.call(t);
        return l && (n ? t[jn] = i : delete t[jn]), u;
      }
      var Nl = Xs ? function(t) {
        return t == null ? [] : (t = ue(t), Nn(Xs(t), function(n) {
          return Zd.call(t, n);
        }));
      } : Dl, Rf = Xs ? function(t) {
        for (var n = []; t; )
          Rn(n, Nl(t)), t = Ii(t);
        return n;
      } : Dl, Ye = Xe;
      (Ls && Ye(new Ls(new ArrayBuffer(1))) != Ur || go && Ye(new go()) != xt || $s && Ye($s.resolve()) != _u || Zr && Ye(new Zr()) != Bt || To && Ye(new To()) != mo) && (Ye = function(t) {
        var n = Xe(t), i = n == rn ? t.constructor : r, l = i ? er(i) : "";
        if (l)
          switch (l) {
            case LV:
              return Ur;
            case $V:
              return xt;
            case qV:
              return _u;
            case KV:
              return Bt;
            case e0:
              return mo;
          }
        return n;
      });
      function mg(t, n, i) {
        for (var l = -1, u = i.length; ++l < u; ) {
          var p = i[l], w = p.size;
          switch (p.type) {
            case "drop":
              t += w;
              break;
            case "dropRight":
              n -= w;
              break;
            case "take":
              n = Ge(n, t + w);
              break;
            case "takeRight":
              t = Se(t, n - w);
              break;
          }
        }
        return { start: t, end: n };
      }
      function wg(t) {
        var n = t.match(Nv);
        return n ? n[1].split(Rv) : [];
      }
      function yf(t, n, i) {
        n = Zn(n, t);
        for (var l = -1, u = n.length, p = !1; ++l < u; ) {
          var w = qt(n[l]);
          if (!(p = t != null && i(t, w)))
            break;
          t = t[w];
        }
        return p || ++l != u ? p : (u = t == null ? 0 : t.length, !!u && fa(u) && un(w, u) && (j(t) || tr(t)));
      }
      function vg(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && se.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function kf(t) {
        return typeof t.constructor == "function" && !Jo(t) ? Er(Ii(t)) : {};
      }
      function Vg(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case wo:
            return ml(t);
          case co:
          case uo:
            return new l(+t);
          case Ur:
            return tg(t, i);
          case Us:
          case Ns:
          case Rs:
          case ys:
          case ks:
          case Ms:
          case bs:
          case Zs:
          case Js:
            return sf(t, i);
          case xt:
            return new l();
          case fo:
          case po:
            return new l(t);
          case ho:
            return ng(t);
          case Bt:
            return new l();
          case Mi:
            return rg(t);
        }
      }
      function gg(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(Uv, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Tg(t) {
        return j(t) || tr(t) || !!(Jd && t && t[Jd]);
      }
      function un(t, n) {
        var i = typeof t;
        return n = n == null ? je : n, !!n && (i == "number" || i != "symbol" && Fv.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Le(t, n, i) {
        if (!Ve(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? et(i) && un(n, i.length) : l == "string" && n in i) ? Dt(i[n], t) : !1;
      }
      function Rl(t, n) {
        if (j(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || dt(t) ? !0 : vv.test(t) || !wv.test(t) || n != null && t in ue(n);
      }
      function Ug(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function yl(t) {
        var n = oa(t), i = h[n];
        if (typeof i != "function" || !(n in te.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = Tl(i);
        return !!l && t === l[0];
      }
      function Ng(t) {
        return !!kd && kd in t;
      }
      var Rg = Ci ? dn : Ol;
      function Jo(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || br;
        return t === i;
      }
      function Mf(t) {
        return t === t && !Ve(t);
      }
      function bf(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in ue(i));
        };
      }
      function yg(t) {
        var n = ua(t, function(l) {
          return i.size === g && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function kg(t, n) {
        var i = t[1], l = n[1], u = i | l, p = u < (C | A | Q), w = l == Q && i == B || l == Q && i == z && t[7].length <= n[8] || l == (Q | z) && n[7].length <= n[8] && i == B;
        if (!(p || w))
          return t;
        l & C && (t[2] = n[2], u |= i & C ? 0 : W);
        var v = n[3];
        if (v) {
          var U = t[3];
          t[3] = U ? cf(U, v, n[4]) : v, t[4] = U ? yn(t[3], V) : n[4];
        }
        return v = n[5], v && (U = t[5], t[5] = U ? uf(U, v, n[6]) : v, t[6] = U ? yn(t[5], V) : n[6]), v = n[7], v && (t[7] = v), l & Q && (t[8] = t[8] == null ? n[8] : Ge(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = u, t;
      }
      function Mg(t) {
        var n = [];
        if (t != null)
          for (var i in ue(t))
            n.push(i);
        return n;
      }
      function bg(t) {
        return xi.call(t);
      }
      function Zf(t, n, i) {
        return n = Se(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, u = -1, p = Se(l.length - n, 0), w = y(p); ++u < p; )
            w[u] = l[n + u];
          u = -1;
          for (var v = y(n + 1); ++u < n; )
            v[u] = l[u];
          return v[n] = i(w), lt(t, this, v);
        };
      }
      function Jf(t, n) {
        return n.length < 2 ? t : qn(t, Mt(n, 0, -1));
      }
      function Zg(t, n) {
        for (var i = t.length, l = Ge(n.length, i), u = Ke(t); l--; ) {
          var p = n[l];
          t[l] = un(p, i) ? u[p] : r;
        }
        return t;
      }
      function kl(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Ef = Ff(qd), Eo = zV || function(t, n) {
        return Ie.setTimeout(t, n);
      }, Ml = Ff($0);
      function Sf(t, n, i) {
        var l = n + "";
        return Ml(t, gg(l, Jg(wg(l), i)));
      }
      function Ff(t) {
        var n = 0, i = 0;
        return function() {
          var l = HV(), u = Ne - (l - i);
          if (i = l, u > 0) {
            if (++n >= Te)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function aa(t, n) {
        var i = -1, l = t.length, u = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = ll(i, u), w = t[p];
          t[p] = t[i], t[i] = w;
        }
        return t.length = n, t;
      }
      var Af = yg(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Vv, function(i, l, u, p) {
          n.push(u ? p.replace(Mv, "$1") : l || i);
        }), n;
      });
      function qt(t) {
        if (typeof t == "string" || dt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -_e ? "-0" : n;
      }
      function er(t) {
        if (t != null) {
          try {
            return Wi.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Jg(t, n) {
        return Nt(nv, function(i) {
          var l = "_." + i[0];
          n & i[1] && !Ei(t, l) && t.push(l);
        }), t.sort();
      }
      function Cf(t) {
        if (t instanceof te)
          return t.clone();
        var n = new yt(t.__wrapped__, t.__chain__);
        return n.__actions__ = Ke(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function Eg(t, n, i) {
        (i ? Le(t, n, i) : n === r) ? n = 1 : n = Se(L(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var u = 0, p = 0, w = y(Qi(l / n)); u < l; )
          w[p++] = Mt(t, u, u += n);
        return w;
      }
      function Sg(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, u = []; ++n < i; ) {
          var p = t[n];
          p && (u[l++] = p);
        }
        return u;
      }
      function Fg() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = y(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Rn(j(i) ? Ke(i) : [i], De(n, 1));
      }
      var Ag = K(function(t, n) {
        return Re(t) ? yo(t, De(n, 1, Re, !0)) : [];
      }), Cg = K(function(t, n) {
        var i = bt(n);
        return Re(i) && (i = r), Re(t) ? yo(t, De(n, 1, Re, !0), G(i, 2)) : [];
      }), Wg = K(function(t, n) {
        var i = bt(n);
        return Re(i) && (i = r), Re(t) ? yo(t, De(n, 1, Re, !0), r, i) : [];
      });
      function xg(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : L(n), Mt(t, n < 0 ? 0 : n, l)) : [];
      }
      function Bg(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : L(n), n = l - n, Mt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function _g(t, n) {
        return t && t.length ? qi(t, G(n, 3), !0, !0) : [];
      }
      function Ig(t, n) {
        return t && t.length ? qi(t, G(n, 3), !0) : [];
      }
      function Dg(t, n, i, l) {
        var u = t == null ? 0 : t.length;
        return u ? (i && typeof i != "number" && Le(t, n, i) && (i = 0, l = u), F0(t, n, i, l)) : [];
      }
      function Wf(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = i == null ? 0 : L(i);
        return u < 0 && (u = Se(l + u, 0)), Si(t, G(n, 3), u);
      }
      function xf(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l - 1;
        return i !== r && (u = L(i), u = i < 0 ? Se(l + u, 0) : Ge(u, l - 1)), Si(t, G(n, 3), u, !0);
      }
      function Bf(t) {
        var n = t == null ? 0 : t.length;
        return n ? De(t, 1) : [];
      }
      function Og(t) {
        var n = t == null ? 0 : t.length;
        return n ? De(t, _e) : [];
      }
      function Qg(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : L(n), De(t, n)) : [];
      }
      function zg(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var u = t[n];
          l[u[0]] = u[1];
        }
        return l;
      }
      function _f(t) {
        return t && t.length ? t[0] : r;
      }
      function Gg(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = i == null ? 0 : L(i);
        return u < 0 && (u = Se(l + u, 0)), Rr(t, n, u);
      }
      function Yg(t) {
        var n = t == null ? 0 : t.length;
        return n ? Mt(t, 0, -1) : [];
      }
      var Pg = K(function(t) {
        var n = pe(t, hl);
        return n.length && n[0] === t[0] ? rl(n) : [];
      }), Hg = K(function(t) {
        var n = bt(t), i = pe(t, hl);
        return n === bt(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? rl(i, G(n, 2)) : [];
      }), jg = K(function(t) {
        var n = bt(t), i = pe(t, hl);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? rl(i, r, n) : [];
      });
      function Xg(t, n) {
        return t == null ? "" : YV.call(t, n);
      }
      function bt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function Lg(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var u = l;
        return i !== r && (u = L(i), u = u < 0 ? Se(l + u, 0) : Ge(u, l - 1)), n === n ? JV(t, n, u) : Si(t, vd, u, !0);
      }
      function $g(t, n) {
        return t && t.length ? jd(t, L(n)) : r;
      }
      var qg = K(If);
      function If(t, n) {
        return t && t.length && n && n.length ? sl(t, n) : t;
      }
      function Kg(t, n, i) {
        return t && t.length && n && n.length ? sl(t, n, G(i, 2)) : t;
      }
      function eT(t, n, i) {
        return t && t.length && n && n.length ? sl(t, n, r, i) : t;
      }
      var tT = cn(function(t, n) {
        var i = t == null ? 0 : t.length, l = Ks(t, n);
        return $d(t, pe(n, function(u) {
          return un(u, i) ? +u : u;
        }).sort(lf)), l;
      });
      function nT(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, u = [], p = t.length;
        for (n = G(n, 3); ++l < p; ) {
          var w = t[l];
          n(w, l, t) && (i.push(w), u.push(l));
        }
        return $d(t, u), i;
      }
      function bl(t) {
        return t == null ? t : XV.call(t);
      }
      function rT(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && Le(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : L(n), i = i === r ? l : L(i)), Mt(t, n, i)) : [];
      }
      function oT(t, n) {
        return $i(t, n);
      }
      function iT(t, n, i) {
        return ul(t, n, G(i, 2));
      }
      function aT(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = $i(t, n);
          if (l < i && Dt(t[l], n))
            return l;
        }
        return -1;
      }
      function sT(t, n) {
        return $i(t, n, !0);
      }
      function lT(t, n, i) {
        return ul(t, n, G(i, 2), !0);
      }
      function cT(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = $i(t, n, !0) - 1;
          if (Dt(t[l], n))
            return l;
        }
        return -1;
      }
      function uT(t) {
        return t && t.length ? Kd(t) : [];
      }
      function dT(t, n) {
        return t && t.length ? Kd(t, G(n, 2)) : [];
      }
      function fT(t) {
        var n = t == null ? 0 : t.length;
        return n ? Mt(t, 1, n) : [];
      }
      function hT(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : L(n), Mt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function pT(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : L(n), n = l - n, Mt(t, n < 0 ? 0 : n, l)) : [];
      }
      function mT(t, n) {
        return t && t.length ? qi(t, G(n, 3), !1, !0) : [];
      }
      function wT(t, n) {
        return t && t.length ? qi(t, G(n, 3)) : [];
      }
      var vT = K(function(t) {
        return bn(De(t, 1, Re, !0));
      }), VT = K(function(t) {
        var n = bt(t);
        return Re(n) && (n = r), bn(De(t, 1, Re, !0), G(n, 2));
      }), gT = K(function(t) {
        var n = bt(t);
        return n = typeof n == "function" ? n : r, bn(De(t, 1, Re, !0), r, n);
      });
      function TT(t) {
        return t && t.length ? bn(t) : [];
      }
      function UT(t, n) {
        return t && t.length ? bn(t, G(n, 2)) : [];
      }
      function NT(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? bn(t, r, n) : [];
      }
      function Zl(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Nn(t, function(i) {
          if (Re(i))
            return n = Se(i.length, n), !0;
        }), Ys(n, function(i) {
          return pe(t, Qs(i));
        });
      }
      function Df(t, n) {
        if (!(t && t.length))
          return [];
        var i = Zl(t);
        return n == null ? i : pe(i, function(l) {
          return lt(n, r, l);
        });
      }
      var RT = K(function(t, n) {
        return Re(t) ? yo(t, n) : [];
      }), yT = K(function(t) {
        return fl(Nn(t, Re));
      }), kT = K(function(t) {
        var n = bt(t);
        return Re(n) && (n = r), fl(Nn(t, Re), G(n, 2));
      }), MT = K(function(t) {
        var n = bt(t);
        return n = typeof n == "function" ? n : r, fl(Nn(t, Re), r, n);
      }), bT = K(Zl);
      function ZT(t, n) {
        return rf(t || [], n || [], Ro);
      }
      function JT(t, n) {
        return rf(t || [], n || [], bo);
      }
      var ET = K(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, Df(t, i);
      });
      function Of(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function ST(t, n) {
        return n(t), t;
      }
      function sa(t, n) {
        return n(t);
      }
      var FT = cn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, u = function(p) {
          return Ks(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof te) || !un(i) ? this.thru(u) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: sa,
          args: [u],
          thisArg: r
        }), new yt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function AT() {
        return Of(this);
      }
      function CT() {
        return new yt(this.value(), this.__chain__);
      }
      function WT() {
        this.__values__ === r && (this.__values__ = th(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function xT() {
        return this;
      }
      function BT(t) {
        for (var n, i = this; i instanceof Pi; ) {
          var l = Cf(i);
          l.__index__ = 0, l.__values__ = r, n ? u.__wrapped__ = l : n = l;
          var u = l;
          i = i.__wrapped__;
        }
        return u.__wrapped__ = t, n;
      }
      function _T() {
        var t = this.__wrapped__;
        if (t instanceof te) {
          var n = t;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: sa,
            args: [bl],
            thisArg: r
          }), new yt(n, this.__chain__);
        }
        return this.thru(bl);
      }
      function IT() {
        return nf(this.__wrapped__, this.__actions__);
      }
      var DT = Ki(function(t, n, i) {
        se.call(t, i) ? ++t[i] : sn(t, i, 1);
      });
      function OT(t, n, i) {
        var l = j(t) ? md : S0;
        return i && Le(t, n, i) && (n = r), l(t, G(n, 3));
      }
      function QT(t, n) {
        var i = j(t) ? Nn : Id;
        return i(t, G(n, 3));
      }
      var zT = pf(Wf), GT = pf(xf);
      function YT(t, n) {
        return De(la(t, n), 1);
      }
      function PT(t, n) {
        return De(la(t, n), _e);
      }
      function HT(t, n, i) {
        return i = i === r ? 1 : L(i), De(la(t, n), i);
      }
      function Qf(t, n) {
        var i = j(t) ? Nt : Mn;
        return i(t, G(n, 3));
      }
      function zf(t, n) {
        var i = j(t) ? fV : _d;
        return i(t, G(n, 3));
      }
      var jT = Ki(function(t, n, i) {
        se.call(t, i) ? t[i].push(n) : sn(t, i, [n]);
      });
      function XT(t, n, i, l) {
        t = et(t) ? t : Wr(t), i = i && !l ? L(i) : 0;
        var u = t.length;
        return i < 0 && (i = Se(u + i, 0)), ha(t) ? i <= u && t.indexOf(n, i) > -1 : !!u && Rr(t, n, i) > -1;
      }
      var LT = K(function(t, n, i) {
        var l = -1, u = typeof n == "function", p = et(t) ? y(t.length) : [];
        return Mn(t, function(w) {
          p[++l] = u ? lt(n, w, i) : ko(w, n, i);
        }), p;
      }), $T = Ki(function(t, n, i) {
        sn(t, i, n);
      });
      function la(t, n) {
        var i = j(t) ? pe : Yd;
        return i(t, G(n, 3));
      }
      function qT(t, n, i, l) {
        return t == null ? [] : (j(n) || (n = n == null ? [] : [n]), i = l ? r : i, j(i) || (i = i == null ? [] : [i]), Xd(t, n, i));
      }
      var KT = Ki(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function eU(t, n, i) {
        var l = j(t) ? Ds : gd, u = arguments.length < 3;
        return l(t, G(n, 4), i, u, Mn);
      }
      function tU(t, n, i) {
        var l = j(t) ? hV : gd, u = arguments.length < 3;
        return l(t, G(n, 4), i, u, _d);
      }
      function nU(t, n) {
        var i = j(t) ? Nn : Id;
        return i(t, da(G(n, 3)));
      }
      function rU(t) {
        var n = j(t) ? Cd : X0;
        return n(t);
      }
      function oU(t, n, i) {
        (i ? Le(t, n, i) : n === r) ? n = 1 : n = L(n);
        var l = j(t) ? M0 : L0;
        return l(t, n);
      }
      function iU(t) {
        var n = j(t) ? b0 : q0;
        return n(t);
      }
      function aU(t) {
        if (t == null)
          return 0;
        if (et(t))
          return ha(t) ? kr(t) : t.length;
        var n = Ye(t);
        return n == xt || n == Bt ? t.size : il(t).length;
      }
      function sU(t, n, i) {
        var l = j(t) ? Os : K0;
        return i && Le(t, n, i) && (n = r), l(t, G(n, 3));
      }
      var lU = K(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && Le(t, n[0], n[1]) ? n = [] : i > 2 && Le(n[0], n[1], n[2]) && (n = [n[0]]), Xd(t, De(n, 1), []);
      }), ca = QV || function() {
        return Ie.Date.now();
      };
      function cU(t, n) {
        if (typeof n != "function")
          throw new Rt(d);
        return t = L(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Gf(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, ln(t, Q, r, r, r, r, n);
      }
      function Yf(t, n) {
        var i;
        if (typeof n != "function")
          throw new Rt(d);
        return t = L(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var Jl = K(function(t, n, i) {
        var l = C;
        if (i.length) {
          var u = yn(i, Ar(Jl));
          l |= k;
        }
        return ln(t, l, n, i, u);
      }), Pf = K(function(t, n, i) {
        var l = C | A;
        if (i.length) {
          var u = yn(i, Ar(Pf));
          l |= k;
        }
        return ln(n, l, t, i, u);
      });
      function Hf(t, n, i) {
        n = i ? r : n;
        var l = ln(t, B, r, r, r, r, r, n);
        return l.placeholder = Hf.placeholder, l;
      }
      function jf(t, n, i) {
        n = i ? r : n;
        var l = ln(t, _, r, r, r, r, r, n);
        return l.placeholder = jf.placeholder, l;
      }
      function Xf(t, n, i) {
        var l, u, p, w, v, U, Z = 0, J = !1, E = !1, x = !0;
        if (typeof t != "function")
          throw new Rt(d);
        n = Zt(n) || 0, Ve(i) && (J = !!i.leading, E = "maxWait" in i, p = E ? Se(Zt(i.maxWait) || 0, n) : p, x = "trailing" in i ? !!i.trailing : x);
        function O(ye) {
          var Ot = l, hn = u;
          return l = u = r, Z = ye, w = t.apply(hn, Ot), w;
        }
        function Y(ye) {
          return Z = ye, v = Eo(ee, n), J ? O(ye) : w;
        }
        function $(ye) {
          var Ot = ye - U, hn = ye - Z, ph = n - Ot;
          return E ? Ge(ph, p - hn) : ph;
        }
        function P(ye) {
          var Ot = ye - U, hn = ye - Z;
          return U === r || Ot >= n || Ot < 0 || E && hn >= p;
        }
        function ee() {
          var ye = ca();
          if (P(ye))
            return ne(ye);
          v = Eo(ee, $(ye));
        }
        function ne(ye) {
          return v = r, x && l ? O(ye) : (l = u = r, w);
        }
        function ft() {
          v !== r && of(v), Z = 0, l = U = u = v = r;
        }
        function $e() {
          return v === r ? w : ne(ca());
        }
        function ht() {
          var ye = ca(), Ot = P(ye);
          if (l = arguments, u = this, U = ye, Ot) {
            if (v === r)
              return Y(U);
            if (E)
              return of(v), v = Eo(ee, n), O(U);
          }
          return v === r && (v = Eo(ee, n)), w;
        }
        return ht.cancel = ft, ht.flush = $e, ht;
      }
      var uU = K(function(t, n) {
        return Bd(t, 1, n);
      }), dU = K(function(t, n, i) {
        return Bd(t, Zt(n) || 0, i);
      });
      function fU(t) {
        return ln(t, ve);
      }
      function ua(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Rt(d);
        var i = function() {
          var l = arguments, u = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(u))
            return p.get(u);
          var w = t.apply(this, l);
          return i.cache = p.set(u, w) || p, w;
        };
        return i.cache = new (ua.Cache || an)(), i;
      }
      ua.Cache = an;
      function da(t) {
        if (typeof t != "function")
          throw new Rt(d);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, n[0]);
            case 2:
              return !t.call(this, n[0], n[1]);
            case 3:
              return !t.call(this, n[0], n[1], n[2]);
          }
          return !t.apply(this, n);
        };
      }
      function hU(t) {
        return Yf(2, t);
      }
      var pU = eg(function(t, n) {
        n = n.length == 1 && j(n[0]) ? pe(n[0], ct(G())) : pe(De(n, 1), ct(G()));
        var i = n.length;
        return K(function(l) {
          for (var u = -1, p = Ge(l.length, i); ++u < p; )
            l[u] = n[u].call(this, l[u]);
          return lt(t, this, l);
        });
      }), El = K(function(t, n) {
        var i = yn(n, Ar(El));
        return ln(t, k, r, n, i);
      }), Lf = K(function(t, n) {
        var i = yn(n, Ar(Lf));
        return ln(t, D, r, n, i);
      }), mU = cn(function(t, n) {
        return ln(t, z, r, r, r, n);
      });
      function wU(t, n) {
        if (typeof t != "function")
          throw new Rt(d);
        return n = n === r ? n : L(n), K(t, n);
      }
      function vU(t, n) {
        if (typeof t != "function")
          throw new Rt(d);
        return n = n == null ? 0 : Se(L(n), 0), K(function(i) {
          var l = i[n], u = Jn(i, 0, n);
          return l && Rn(u, l), lt(t, this, u);
        });
      }
      function VU(t, n, i) {
        var l = !0, u = !0;
        if (typeof t != "function")
          throw new Rt(d);
        return Ve(i) && (l = "leading" in i ? !!i.leading : l, u = "trailing" in i ? !!i.trailing : u), Xf(t, n, {
          leading: l,
          maxWait: n,
          trailing: u
        });
      }
      function gU(t) {
        return Gf(t, 1);
      }
      function TU(t, n) {
        return El(pl(n), t);
      }
      function UU() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return j(t) ? t : [t];
      }
      function NU(t) {
        return kt(t, F);
      }
      function RU(t, n) {
        return n = typeof n == "function" ? n : r, kt(t, F, n);
      }
      function yU(t) {
        return kt(t, N | F);
      }
      function kU(t, n) {
        return n = typeof n == "function" ? n : r, kt(t, N | F, n);
      }
      function MU(t, n) {
        return n == null || xd(t, n, Ce(n));
      }
      function Dt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var bU = ra(nl), ZU = ra(function(t, n) {
        return t >= n;
      }), tr = Qd(function() {
        return arguments;
      }()) ? Qd : function(t) {
        return Ue(t) && se.call(t, "callee") && !Zd.call(t, "callee");
      }, j = y.isArray, JU = cd ? ct(cd) : B0;
      function et(t) {
        return t != null && fa(t.length) && !dn(t);
      }
      function Re(t) {
        return Ue(t) && et(t);
      }
      function EU(t) {
        return t === !0 || t === !1 || Ue(t) && Xe(t) == co;
      }
      var En = GV || Ol, SU = ud ? ct(ud) : _0;
      function FU(t) {
        return Ue(t) && t.nodeType === 1 && !So(t);
      }
      function AU(t) {
        if (t == null)
          return !0;
        if (et(t) && (j(t) || typeof t == "string" || typeof t.splice == "function" || En(t) || Cr(t) || tr(t)))
          return !t.length;
        var n = Ye(t);
        if (n == xt || n == Bt)
          return !t.size;
        if (Jo(t))
          return !il(t).length;
        for (var i in t)
          if (se.call(t, i))
            return !1;
        return !0;
      }
      function CU(t, n) {
        return Mo(t, n);
      }
      function WU(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? Mo(t, n, r, i) : !!l;
      }
      function Sl(t) {
        if (!Ue(t))
          return !1;
        var n = Xe(t);
        return n == yi || n == ov || typeof t.message == "string" && typeof t.name == "string" && !So(t);
      }
      function xU(t) {
        return typeof t == "number" && Ed(t);
      }
      function dn(t) {
        if (!Ve(t))
          return !1;
        var n = Xe(t);
        return n == ki || n == Bu || n == rv || n == av;
      }
      function $f(t) {
        return typeof t == "number" && t == L(t);
      }
      function fa(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= je;
      }
      function Ve(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Ue(t) {
        return t != null && typeof t == "object";
      }
      var qf = dd ? ct(dd) : D0;
      function BU(t, n) {
        return t === n || ol(t, n, Ul(n));
      }
      function _U(t, n, i) {
        return i = typeof i == "function" ? i : r, ol(t, n, Ul(n), i);
      }
      function IU(t) {
        return Kf(t) && t != +t;
      }
      function DU(t) {
        if (Rg(t))
          throw new H(c);
        return zd(t);
      }
      function OU(t) {
        return t === null;
      }
      function QU(t) {
        return t == null;
      }
      function Kf(t) {
        return typeof t == "number" || Ue(t) && Xe(t) == fo;
      }
      function So(t) {
        if (!Ue(t) || Xe(t) != rn)
          return !1;
        var n = Ii(t);
        if (n === null)
          return !0;
        var i = se.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Wi.call(i) == _V;
      }
      var Fl = fd ? ct(fd) : O0;
      function zU(t) {
        return $f(t) && t >= -je && t <= je;
      }
      var eh = hd ? ct(hd) : Q0;
      function ha(t) {
        return typeof t == "string" || !j(t) && Ue(t) && Xe(t) == po;
      }
      function dt(t) {
        return typeof t == "symbol" || Ue(t) && Xe(t) == Mi;
      }
      var Cr = pd ? ct(pd) : z0;
      function GU(t) {
        return t === r;
      }
      function YU(t) {
        return Ue(t) && Ye(t) == mo;
      }
      function PU(t) {
        return Ue(t) && Xe(t) == lv;
      }
      var HU = ra(al), jU = ra(function(t, n) {
        return t <= n;
      });
      function th(t) {
        if (!t)
          return [];
        if (et(t))
          return ha(t) ? _t(t) : Ke(t);
        if (Vo && t[Vo])
          return MV(t[Vo]());
        var n = Ye(t), i = n == xt ? Hs : n == Bt ? Fi : Wr;
        return i(t);
      }
      function fn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Zt(t), t === _e || t === -_e) {
          var n = t < 0 ? -1 : 1;
          return n * lo;
        }
        return t === t ? t : 0;
      }
      function L(t) {
        var n = fn(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function nh(t) {
        return t ? $n(L(t), 0, Xt) : 0;
      }
      function Zt(t) {
        if (typeof t == "number")
          return t;
        if (dt(t))
          return Ni;
        if (Ve(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ve(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Td(t);
        var i = Jv.test(t);
        return i || Sv.test(t) ? cV(t.slice(2), i ? 2 : 8) : Zv.test(t) ? Ni : +t;
      }
      function rh(t) {
        return $t(t, tt(t));
      }
      function XU(t) {
        return t ? $n(L(t), -je, je) : t === 0 ? t : 0;
      }
      function ae(t) {
        return t == null ? "" : ut(t);
      }
      var LU = Sr(function(t, n) {
        if (Jo(n) || et(n)) {
          $t(n, Ce(n), t);
          return;
        }
        for (var i in n)
          se.call(n, i) && Ro(t, i, n[i]);
      }), oh = Sr(function(t, n) {
        $t(n, tt(n), t);
      }), pa = Sr(function(t, n, i, l) {
        $t(n, tt(n), t, l);
      }), $U = Sr(function(t, n, i, l) {
        $t(n, Ce(n), t, l);
      }), qU = cn(Ks);
      function KU(t, n) {
        var i = Er(t);
        return n == null ? i : Wd(i, n);
      }
      var eN = K(function(t, n) {
        t = ue(t);
        var i = -1, l = n.length, u = l > 2 ? n[2] : r;
        for (u && Le(n[0], n[1], u) && (l = 1); ++i < l; )
          for (var p = n[i], w = tt(p), v = -1, U = w.length; ++v < U; ) {
            var Z = w[v], J = t[Z];
            (J === r || Dt(J, br[Z]) && !se.call(t, Z)) && (t[Z] = p[Z]);
          }
        return t;
      }), tN = K(function(t) {
        return t.push(r, Uf), lt(ih, r, t);
      });
      function nN(t, n) {
        return wd(t, G(n, 3), Lt);
      }
      function rN(t, n) {
        return wd(t, G(n, 3), tl);
      }
      function oN(t, n) {
        return t == null ? t : el(t, G(n, 3), tt);
      }
      function iN(t, n) {
        return t == null ? t : Dd(t, G(n, 3), tt);
      }
      function aN(t, n) {
        return t && Lt(t, G(n, 3));
      }
      function sN(t, n) {
        return t && tl(t, G(n, 3));
      }
      function lN(t) {
        return t == null ? [] : Xi(t, Ce(t));
      }
      function cN(t) {
        return t == null ? [] : Xi(t, tt(t));
      }
      function Al(t, n, i) {
        var l = t == null ? r : qn(t, n);
        return l === r ? i : l;
      }
      function uN(t, n) {
        return t != null && yf(t, n, A0);
      }
      function Cl(t, n) {
        return t != null && yf(t, n, C0);
      }
      var dN = wf(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = xi.call(n)), t[n] = i;
      }, xl(nt)), fN = wf(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = xi.call(n)), se.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, G), hN = K(ko);
      function Ce(t) {
        return et(t) ? Ad(t) : il(t);
      }
      function tt(t) {
        return et(t) ? Ad(t, !0) : G0(t);
      }
      function pN(t, n) {
        var i = {};
        return n = G(n, 3), Lt(t, function(l, u, p) {
          sn(i, n(l, u, p), l);
        }), i;
      }
      function mN(t, n) {
        var i = {};
        return n = G(n, 3), Lt(t, function(l, u, p) {
          sn(i, u, n(l, u, p));
        }), i;
      }
      var wN = Sr(function(t, n, i) {
        Li(t, n, i);
      }), ih = Sr(function(t, n, i, l) {
        Li(t, n, i, l);
      }), vN = cn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = pe(n, function(p) {
          return p = Zn(p, t), l || (l = p.length > 1), p;
        }), $t(t, gl(t), i), l && (i = kt(i, N | R | F, dg));
        for (var u = n.length; u--; )
          dl(i, n[u]);
        return i;
      });
      function VN(t, n) {
        return ah(t, da(G(n)));
      }
      var gN = cn(function(t, n) {
        return t == null ? {} : P0(t, n);
      });
      function ah(t, n) {
        if (t == null)
          return {};
        var i = pe(gl(t), function(l) {
          return [l];
        });
        return n = G(n), Ld(t, i, function(l, u) {
          return n(l, u[0]);
        });
      }
      function TN(t, n, i) {
        n = Zn(n, t);
        var l = -1, u = n.length;
        for (u || (u = 1, t = r); ++l < u; ) {
          var p = t == null ? r : t[qt(n[l])];
          p === r && (l = u, p = i), t = dn(p) ? p.call(t) : p;
        }
        return t;
      }
      function UN(t, n, i) {
        return t == null ? t : bo(t, n, i);
      }
      function NN(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : bo(t, n, i, l);
      }
      var sh = gf(Ce), lh = gf(tt);
      function RN(t, n, i) {
        var l = j(t), u = l || En(t) || Cr(t);
        if (n = G(n, 4), i == null) {
          var p = t && t.constructor;
          u ? i = l ? new p() : [] : Ve(t) ? i = dn(p) ? Er(Ii(t)) : {} : i = {};
        }
        return (u ? Nt : Lt)(t, function(w, v, U) {
          return n(i, w, v, U);
        }), i;
      }
      function yN(t, n) {
        return t == null ? !0 : dl(t, n);
      }
      function kN(t, n, i) {
        return t == null ? t : tf(t, n, pl(i));
      }
      function MN(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : tf(t, n, pl(i), l);
      }
      function Wr(t) {
        return t == null ? [] : Ps(t, Ce(t));
      }
      function bN(t) {
        return t == null ? [] : Ps(t, tt(t));
      }
      function ZN(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Zt(i), i = i === i ? i : 0), n !== r && (n = Zt(n), n = n === n ? n : 0), $n(Zt(t), n, i);
      }
      function JN(t, n, i) {
        return n = fn(n), i === r ? (i = n, n = 0) : i = fn(i), t = Zt(t), W0(t, n, i);
      }
      function EN(t, n, i) {
        if (i && typeof i != "boolean" && Le(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = fn(t), n === r ? (n = t, t = 0) : n = fn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var u = Sd();
          return Ge(t + u * (n - t + lV("1e-" + ((u + "").length - 1))), n);
        }
        return ll(t, n);
      }
      var SN = Fr(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? ch(n) : n);
      });
      function ch(t) {
        return Wl(ae(t).toLowerCase());
      }
      function uh(t) {
        return t = ae(t), t && t.replace(Av, UV).replace(qv, "");
      }
      function FN(t, n, i) {
        t = ae(t), n = ut(n);
        var l = t.length;
        i = i === r ? l : $n(L(i), 0, l);
        var u = i;
        return i -= n.length, i >= 0 && t.slice(i, u) == n;
      }
      function AN(t) {
        return t = ae(t), t && hv.test(t) ? t.replace(Du, NV) : t;
      }
      function CN(t) {
        return t = ae(t), t && gv.test(t) ? t.replace(Es, "\\$&") : t;
      }
      var WN = Fr(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), xN = Fr(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), BN = hf("toLowerCase");
      function _N(t, n, i) {
        t = ae(t), n = L(n);
        var l = n ? kr(t) : 0;
        if (!n || l >= n)
          return t;
        var u = (n - l) / 2;
        return na(zi(u), i) + t + na(Qi(u), i);
      }
      function IN(t, n, i) {
        t = ae(t), n = L(n);
        var l = n ? kr(t) : 0;
        return n && l < n ? t + na(n - l, i) : t;
      }
      function DN(t, n, i) {
        t = ae(t), n = L(n);
        var l = n ? kr(t) : 0;
        return n && l < n ? na(n - l, i) + t : t;
      }
      function ON(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), jV(ae(t).replace(Ss, ""), n || 0);
      }
      function QN(t, n, i) {
        return (i ? Le(t, n, i) : n === r) ? n = 1 : n = L(n), cl(ae(t), n);
      }
      function zN() {
        var t = arguments, n = ae(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var GN = Fr(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function YN(t, n, i) {
        return i && typeof i != "number" && Le(t, n, i) && (n = i = r), i = i === r ? Xt : i >>> 0, i ? (t = ae(t), t && (typeof n == "string" || n != null && !Fl(n)) && (n = ut(n), !n && yr(t)) ? Jn(_t(t), 0, i) : t.split(n, i)) : [];
      }
      var PN = Fr(function(t, n, i) {
        return t + (i ? " " : "") + Wl(n);
      });
      function HN(t, n, i) {
        return t = ae(t), i = i == null ? 0 : $n(L(i), 0, t.length), n = ut(n), t.slice(i, i + n.length) == n;
      }
      function jN(t, n, i) {
        var l = h.templateSettings;
        i && Le(t, n, i) && (n = r), t = ae(t), n = pa({}, n, l, Tf);
        var u = pa({}, n.imports, l.imports, Tf), p = Ce(u), w = Ps(u, p), v, U, Z = 0, J = n.interpolate || bi, E = "__p += '", x = js(
          (n.escape || bi).source + "|" + J.source + "|" + (J === Ou ? bv : bi).source + "|" + (n.evaluate || bi).source + "|$",
          "g"
        ), O = "//# sourceURL=" + (se.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++rV + "]") + `
`;
        t.replace(x, function(P, ee, ne, ft, $e, ht) {
          return ne || (ne = ft), E += t.slice(Z, ht).replace(Cv, RV), ee && (v = !0, E += `' +
__e(` + ee + `) +
'`), $e && (U = !0, E += `';
` + $e + `;
__p += '`), ne && (E += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), Z = ht + P.length, P;
        }), E += `';
`;
        var Y = se.call(n, "variable") && n.variable;
        if (!Y)
          E = `with (obj) {
` + E + `
}
`;
        else if (kv.test(Y))
          throw new H(f);
        E = (U ? E.replace(cv, "") : E).replace(uv, "$1").replace(dv, "$1;"), E = "function(" + (Y || "obj") + `) {
` + (Y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (U ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + E + `return __p
}`;
        var $ = fh(function() {
          return re(p, O + "return " + E).apply(r, w);
        });
        if ($.source = E, Sl($))
          throw $;
        return $;
      }
      function XN(t) {
        return ae(t).toLowerCase();
      }
      function LN(t) {
        return ae(t).toUpperCase();
      }
      function $N(t, n, i) {
        if (t = ae(t), t && (i || n === r))
          return Td(t);
        if (!t || !(n = ut(n)))
          return t;
        var l = _t(t), u = _t(n), p = Ud(l, u), w = Nd(l, u) + 1;
        return Jn(l, p, w).join("");
      }
      function qN(t, n, i) {
        if (t = ae(t), t && (i || n === r))
          return t.slice(0, yd(t) + 1);
        if (!t || !(n = ut(n)))
          return t;
        var l = _t(t), u = Nd(l, _t(n)) + 1;
        return Jn(l, 0, u).join("");
      }
      function KN(t, n, i) {
        if (t = ae(t), t && (i || n === r))
          return t.replace(Ss, "");
        if (!t || !(n = ut(n)))
          return t;
        var l = _t(t), u = Ud(l, _t(n));
        return Jn(l, u).join("");
      }
      function eR(t, n) {
        var i = de, l = ge;
        if (Ve(n)) {
          var u = "separator" in n ? n.separator : u;
          i = "length" in n ? L(n.length) : i, l = "omission" in n ? ut(n.omission) : l;
        }
        t = ae(t);
        var p = t.length;
        if (yr(t)) {
          var w = _t(t);
          p = w.length;
        }
        if (i >= p)
          return t;
        var v = i - kr(l);
        if (v < 1)
          return l;
        var U = w ? Jn(w, 0, v).join("") : t.slice(0, v);
        if (u === r)
          return U + l;
        if (w && (v += U.length - v), Fl(u)) {
          if (t.slice(v).search(u)) {
            var Z, J = U;
            for (u.global || (u = js(u.source, ae(Qu.exec(u)) + "g")), u.lastIndex = 0; Z = u.exec(J); )
              var E = Z.index;
            U = U.slice(0, E === r ? v : E);
          }
        } else if (t.indexOf(ut(u), v) != v) {
          var x = U.lastIndexOf(u);
          x > -1 && (U = U.slice(0, x));
        }
        return U + l;
      }
      function tR(t) {
        return t = ae(t), t && fv.test(t) ? t.replace(Iu, EV) : t;
      }
      var nR = Fr(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), Wl = hf("toUpperCase");
      function dh(t, n, i) {
        return t = ae(t), n = i ? r : n, n === r ? kV(t) ? AV(t) : wV(t) : t.match(n) || [];
      }
      var fh = K(function(t, n) {
        try {
          return lt(t, r, n);
        } catch (i) {
          return Sl(i) ? i : new H(i);
        }
      }), rR = cn(function(t, n) {
        return Nt(n, function(i) {
          i = qt(i), sn(t, i, Jl(t[i], t));
        }), t;
      });
      function oR(t) {
        var n = t == null ? 0 : t.length, i = G();
        return t = n ? pe(t, function(l) {
          if (typeof l[1] != "function")
            throw new Rt(d);
          return [i(l[0]), l[1]];
        }) : [], K(function(l) {
          for (var u = -1; ++u < n; ) {
            var p = t[u];
            if (lt(p[0], this, l))
              return lt(p[1], this, l);
          }
        });
      }
      function iR(t) {
        return E0(kt(t, N));
      }
      function xl(t) {
        return function() {
          return t;
        };
      }
      function aR(t, n) {
        return t == null || t !== t ? n : t;
      }
      var sR = mf(), lR = mf(!0);
      function nt(t) {
        return t;
      }
      function Bl(t) {
        return Gd(typeof t == "function" ? t : kt(t, N));
      }
      function cR(t) {
        return Pd(kt(t, N));
      }
      function uR(t, n) {
        return Hd(t, kt(n, N));
      }
      var dR = K(function(t, n) {
        return function(i) {
          return ko(i, t, n);
        };
      }), fR = K(function(t, n) {
        return function(i) {
          return ko(t, i, n);
        };
      });
      function _l(t, n, i) {
        var l = Ce(n), u = Xi(n, l);
        i == null && !(Ve(n) && (u.length || !l.length)) && (i = n, n = t, t = this, u = Xi(n, Ce(n)));
        var p = !(Ve(i) && "chain" in i) || !!i.chain, w = dn(t);
        return Nt(u, function(v) {
          var U = n[v];
          t[v] = U, w && (t.prototype[v] = function() {
            var Z = this.__chain__;
            if (p || Z) {
              var J = t(this.__wrapped__), E = J.__actions__ = Ke(this.__actions__);
              return E.push({ func: U, args: arguments, thisArg: t }), J.__chain__ = Z, J;
            }
            return U.apply(t, Rn([this.value()], arguments));
          });
        }), t;
      }
      function hR() {
        return Ie._ === this && (Ie._ = IV), this;
      }
      function Il() {
      }
      function pR(t) {
        return t = L(t), K(function(n) {
          return jd(n, t);
        });
      }
      var mR = wl(pe), wR = wl(md), vR = wl(Os);
      function hh(t) {
        return Rl(t) ? Qs(qt(t)) : H0(t);
      }
      function VR(t) {
        return function(n) {
          return t == null ? r : qn(t, n);
        };
      }
      var gR = vf(), TR = vf(!0);
      function Dl() {
        return [];
      }
      function Ol() {
        return !1;
      }
      function UR() {
        return {};
      }
      function NR() {
        return "";
      }
      function RR() {
        return !0;
      }
      function yR(t, n) {
        if (t = L(t), t < 1 || t > je)
          return [];
        var i = Xt, l = Ge(t, Xt);
        n = G(n), t -= Xt;
        for (var u = Ys(l, n); ++i < t; )
          n(i);
        return u;
      }
      function kR(t) {
        return j(t) ? pe(t, qt) : dt(t) ? [t] : Ke(Af(ae(t)));
      }
      function MR(t) {
        var n = ++BV;
        return ae(t) + n;
      }
      var bR = ta(function(t, n) {
        return t + n;
      }, 0), ZR = vl("ceil"), JR = ta(function(t, n) {
        return t / n;
      }, 1), ER = vl("floor");
      function SR(t) {
        return t && t.length ? ji(t, nt, nl) : r;
      }
      function FR(t, n) {
        return t && t.length ? ji(t, G(n, 2), nl) : r;
      }
      function AR(t) {
        return Vd(t, nt);
      }
      function CR(t, n) {
        return Vd(t, G(n, 2));
      }
      function WR(t) {
        return t && t.length ? ji(t, nt, al) : r;
      }
      function xR(t, n) {
        return t && t.length ? ji(t, G(n, 2), al) : r;
      }
      var BR = ta(function(t, n) {
        return t * n;
      }, 1), _R = vl("round"), IR = ta(function(t, n) {
        return t - n;
      }, 0);
      function DR(t) {
        return t && t.length ? Gs(t, nt) : 0;
      }
      function OR(t, n) {
        return t && t.length ? Gs(t, G(n, 2)) : 0;
      }
      return h.after = cU, h.ary = Gf, h.assign = LU, h.assignIn = oh, h.assignInWith = pa, h.assignWith = $U, h.at = qU, h.before = Yf, h.bind = Jl, h.bindAll = rR, h.bindKey = Pf, h.castArray = UU, h.chain = Of, h.chunk = Eg, h.compact = Sg, h.concat = Fg, h.cond = oR, h.conforms = iR, h.constant = xl, h.countBy = DT, h.create = KU, h.curry = Hf, h.curryRight = jf, h.debounce = Xf, h.defaults = eN, h.defaultsDeep = tN, h.defer = uU, h.delay = dU, h.difference = Ag, h.differenceBy = Cg, h.differenceWith = Wg, h.drop = xg, h.dropRight = Bg, h.dropRightWhile = _g, h.dropWhile = Ig, h.fill = Dg, h.filter = QT, h.flatMap = YT, h.flatMapDeep = PT, h.flatMapDepth = HT, h.flatten = Bf, h.flattenDeep = Og, h.flattenDepth = Qg, h.flip = fU, h.flow = sR, h.flowRight = lR, h.fromPairs = zg, h.functions = lN, h.functionsIn = cN, h.groupBy = jT, h.initial = Yg, h.intersection = Pg, h.intersectionBy = Hg, h.intersectionWith = jg, h.invert = dN, h.invertBy = fN, h.invokeMap = LT, h.iteratee = Bl, h.keyBy = $T, h.keys = Ce, h.keysIn = tt, h.map = la, h.mapKeys = pN, h.mapValues = mN, h.matches = cR, h.matchesProperty = uR, h.memoize = ua, h.merge = wN, h.mergeWith = ih, h.method = dR, h.methodOf = fR, h.mixin = _l, h.negate = da, h.nthArg = pR, h.omit = vN, h.omitBy = VN, h.once = hU, h.orderBy = qT, h.over = mR, h.overArgs = pU, h.overEvery = wR, h.overSome = vR, h.partial = El, h.partialRight = Lf, h.partition = KT, h.pick = gN, h.pickBy = ah, h.property = hh, h.propertyOf = VR, h.pull = qg, h.pullAll = If, h.pullAllBy = Kg, h.pullAllWith = eT, h.pullAt = tT, h.range = gR, h.rangeRight = TR, h.rearg = mU, h.reject = nU, h.remove = nT, h.rest = wU, h.reverse = bl, h.sampleSize = oU, h.set = UN, h.setWith = NN, h.shuffle = iU, h.slice = rT, h.sortBy = lU, h.sortedUniq = uT, h.sortedUniqBy = dT, h.split = YN, h.spread = vU, h.tail = fT, h.take = hT, h.takeRight = pT, h.takeRightWhile = mT, h.takeWhile = wT, h.tap = ST, h.throttle = VU, h.thru = sa, h.toArray = th, h.toPairs = sh, h.toPairsIn = lh, h.toPath = kR, h.toPlainObject = rh, h.transform = RN, h.unary = gU, h.union = vT, h.unionBy = VT, h.unionWith = gT, h.uniq = TT, h.uniqBy = UT, h.uniqWith = NT, h.unset = yN, h.unzip = Zl, h.unzipWith = Df, h.update = kN, h.updateWith = MN, h.values = Wr, h.valuesIn = bN, h.without = RT, h.words = dh, h.wrap = TU, h.xor = yT, h.xorBy = kT, h.xorWith = MT, h.zip = bT, h.zipObject = ZT, h.zipObjectDeep = JT, h.zipWith = ET, h.entries = sh, h.entriesIn = lh, h.extend = oh, h.extendWith = pa, _l(h, h), h.add = bR, h.attempt = fh, h.camelCase = SN, h.capitalize = ch, h.ceil = ZR, h.clamp = ZN, h.clone = NU, h.cloneDeep = yU, h.cloneDeepWith = kU, h.cloneWith = RU, h.conformsTo = MU, h.deburr = uh, h.defaultTo = aR, h.divide = JR, h.endsWith = FN, h.eq = Dt, h.escape = AN, h.escapeRegExp = CN, h.every = OT, h.find = zT, h.findIndex = Wf, h.findKey = nN, h.findLast = GT, h.findLastIndex = xf, h.findLastKey = rN, h.floor = ER, h.forEach = Qf, h.forEachRight = zf, h.forIn = oN, h.forInRight = iN, h.forOwn = aN, h.forOwnRight = sN, h.get = Al, h.gt = bU, h.gte = ZU, h.has = uN, h.hasIn = Cl, h.head = _f, h.identity = nt, h.includes = XT, h.indexOf = Gg, h.inRange = JN, h.invoke = hN, h.isArguments = tr, h.isArray = j, h.isArrayBuffer = JU, h.isArrayLike = et, h.isArrayLikeObject = Re, h.isBoolean = EU, h.isBuffer = En, h.isDate = SU, h.isElement = FU, h.isEmpty = AU, h.isEqual = CU, h.isEqualWith = WU, h.isError = Sl, h.isFinite = xU, h.isFunction = dn, h.isInteger = $f, h.isLength = fa, h.isMap = qf, h.isMatch = BU, h.isMatchWith = _U, h.isNaN = IU, h.isNative = DU, h.isNil = QU, h.isNull = OU, h.isNumber = Kf, h.isObject = Ve, h.isObjectLike = Ue, h.isPlainObject = So, h.isRegExp = Fl, h.isSafeInteger = zU, h.isSet = eh, h.isString = ha, h.isSymbol = dt, h.isTypedArray = Cr, h.isUndefined = GU, h.isWeakMap = YU, h.isWeakSet = PU, h.join = Xg, h.kebabCase = WN, h.last = bt, h.lastIndexOf = Lg, h.lowerCase = xN, h.lowerFirst = BN, h.lt = HU, h.lte = jU, h.max = SR, h.maxBy = FR, h.mean = AR, h.meanBy = CR, h.min = WR, h.minBy = xR, h.stubArray = Dl, h.stubFalse = Ol, h.stubObject = UR, h.stubString = NR, h.stubTrue = RR, h.multiply = BR, h.nth = $g, h.noConflict = hR, h.noop = Il, h.now = ca, h.pad = _N, h.padEnd = IN, h.padStart = DN, h.parseInt = ON, h.random = EN, h.reduce = eU, h.reduceRight = tU, h.repeat = QN, h.replace = zN, h.result = TN, h.round = _R, h.runInContext = T, h.sample = rU, h.size = aU, h.snakeCase = GN, h.some = sU, h.sortedIndex = oT, h.sortedIndexBy = iT, h.sortedIndexOf = aT, h.sortedLastIndex = sT, h.sortedLastIndexBy = lT, h.sortedLastIndexOf = cT, h.startCase = PN, h.startsWith = HN, h.subtract = IR, h.sum = DR, h.sumBy = OR, h.template = jN, h.times = yR, h.toFinite = fn, h.toInteger = L, h.toLength = nh, h.toLower = XN, h.toNumber = Zt, h.toSafeInteger = XU, h.toString = ae, h.toUpper = LN, h.trim = $N, h.trimEnd = qN, h.trimStart = KN, h.truncate = eR, h.unescape = tR, h.uniqueId = MR, h.upperCase = nR, h.upperFirst = Wl, h.each = Qf, h.eachRight = zf, h.first = _f, _l(h, function() {
        var t = {};
        return Lt(h, function(n, i) {
          se.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = a, Nt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Nt(["drop", "take"], function(t, n) {
        te.prototype[t] = function(i) {
          i = i === r ? 1 : Se(L(i), 0);
          var l = this.__filtered__ && !n ? new te(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Ge(i, l.__takeCount__) : l.__views__.push({
            size: Ge(i, Xt),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, te.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Nt(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == be || i == Be;
        te.prototype[t] = function(u) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: G(u, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Nt(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        te.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Nt(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        te.prototype[t] = function() {
          return this.__filtered__ ? new te(this) : this[i](1);
        };
      }), te.prototype.compact = function() {
        return this.filter(nt);
      }, te.prototype.find = function(t) {
        return this.filter(t).head();
      }, te.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, te.prototype.invokeMap = K(function(t, n) {
        return typeof t == "function" ? new te(this) : this.map(function(i) {
          return ko(i, t, n);
        });
      }), te.prototype.reject = function(t) {
        return this.filter(da(G(t)));
      }, te.prototype.slice = function(t, n) {
        t = L(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new te(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = L(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, te.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, te.prototype.toArray = function() {
        return this.take(Xt);
      }, Lt(te.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), u = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !u || (h.prototype[n] = function() {
          var w = this.__wrapped__, v = l ? [1] : arguments, U = w instanceof te, Z = v[0], J = U || j(w), E = function(ee) {
            var ne = u.apply(h, Rn([ee], v));
            return l && x ? ne[0] : ne;
          };
          J && i && typeof Z == "function" && Z.length != 1 && (U = J = !1);
          var x = this.__chain__, O = !!this.__actions__.length, Y = p && !x, $ = U && !O;
          if (!p && J) {
            w = $ ? w : new te(this);
            var P = t.apply(w, v);
            return P.__actions__.push({ func: sa, args: [E], thisArg: r }), new yt(P, x);
          }
          return Y && $ ? t.apply(this, v) : (P = this.thru(E), Y ? l ? P.value()[0] : P.value() : P);
        });
      }), Nt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Ai[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        h.prototype[t] = function() {
          var u = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return n.apply(j(p) ? p : [], u);
          }
          return this[i](function(w) {
            return n.apply(j(w) ? w : [], u);
          });
        };
      }), Lt(te.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          se.call(Jr, l) || (Jr[l] = []), Jr[l].push({ name: n, func: i });
        }
      }), Jr[ea(r, A).name] = [{
        name: "wrapper",
        func: r
      }], te.prototype.clone = t0, te.prototype.reverse = n0, te.prototype.value = r0, h.prototype.at = FT, h.prototype.chain = AT, h.prototype.commit = CT, h.prototype.next = WT, h.prototype.plant = BT, h.prototype.reverse = _T, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = IT, h.prototype.first = h.prototype.head, Vo && (h.prototype[Vo] = xT), h;
    }, Mr = CV();
    Hn ? ((Hn.exports = Mr)._ = Mr, Bs._ = Mr) : Ie._ = Mr;
  }).call(Fo);
})(me, me.exports);
const sk = "/alarms?_s=", ls = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, lk = async (e, o) => {
  try {
    return (await nn.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      ls
    )).status === 204;
  } catch {
    return !1;
  }
}, ck = async (e, o) => {
  try {
    return (await nn.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      ls
    )).status === 204;
  } catch {
    return !1;
  }
}, uk = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await Un.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      ls
    )).status == 204;
  } catch {
    return !1;
  }
}, dk = async () => {
  try {
    const e = `${sk}isSituation==true&limit=0`, o = await Un(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, fk = async (e) => {
  try {
    const o = e.join(",id=="), r = await Un(`/alarms?_s=id==${o}`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Rw = async (e) => {
  try {
    const o = await Un(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, hk = async (e) => {
  try {
    const o = await Un(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, pk = async () => {
  try {
    const e = await Un("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((a) => me.exports.pick(a, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, mk = async (e, o, r) => {
  try {
    return (await Un.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      ls
    )).status == 204;
  } catch {
    return !1;
  }
}, wk = async (e, o) => {
  try {
    return (await Un.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, vk = async () => {
  try {
    const e = await Un.get(
      "alarms?_s=isInSituation==false;isSituation==false"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, Vk = window.Pinia.defineStore, Gn = Vk("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    situationDetail: null,
    filteredSituations: [],
    nodes: [],
    filters: null,
    unassignedAlarms: []
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const e = await pk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await dk();
      if (e) {
        const o = e.alarm.map((s) => {
          var c;
          return s.status = (c = s.parameters.filter(
            (d) => d.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, console.log(s), s;
        });
        this.filteredSituations = o.map((s) => s.id);
        const r = me.exports.groupBy(o, "status"), a = [
          ...r.CREATED || [],
          ...r.ACCEPTED || [],
          ...r.REJECTED || []
        ];
        this.situations = a;
      }
    },
    async getSituation(e) {
      var o, r;
      if (e) {
        const a = await Rw(e);
        if (a) {
          const s = (o = a.relatedAlarms) == null ? void 0 : o.map((f) => f.id), d = await fk(s);
          a.status = (r = a.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, a.alarms = me.exports.sortBy(d, ["id"]), this.situationDetail = a;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (a) => {
          const s = await hk(a);
          s && (r[a] = me.exports.reverse(s));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await vk();
      e && (this.unassignedAlarms = e);
    }
  }
}), gk = window.Vue.openBlock, Tk = window.Vue.createElementBlock, Uk = window.Vue.createElementVNode;
var Nk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Rk = {}, yk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kk = /* @__PURE__ */ Uk("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), Mk = [
  kk
];
function bk(e, o) {
  return gk(), Tk("svg", yk, Mk);
}
var ci = /* @__PURE__ */ Nk(Rk, [["render", bk]]);
var Zk = Object.defineProperty, _h = Object.getOwnPropertySymbols, Jk = Object.prototype.hasOwnProperty, Ek = Object.prototype.propertyIsEnumerable, Ih = (e, o, r) => o in e ? Zk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Dh = (e, o) => {
  for (var r in o || (o = {}))
    Jk.call(o, r) && Ih(e, r, o[r]);
  if (_h)
    for (var r of _h(o))
      Ek.call(o, r) && Ih(e, r, o[r]);
  return e;
};
const Sk = window.Vue.defineComponent, Fk = window.Vue.toRaw, rc = window.Vue.h;
var Ak = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Ck = {
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
}, Wk = Sk({
  props: Ck,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((s, c) => (s[c] = !0, s), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let a = Fk(this.icon);
    return this.$slots.default ? rc("span", { class: "feather-icon-container" }, [
      rc(this.$slots.default()[0], Dh({
        class: o
      }, r))
    ]) : rc(a, Dh({
      class: o
    }, r));
  }
});
var X = /* @__PURE__ */ Ak(Wk, [["__scopeId", "data-v-52cbf270"]]);
const xk = window.Vue.openBlock, Bk = window.Vue.createElementBlock, _k = window.Vue.createElementVNode;
var Ik = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Dk = {}, Ok = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Qk = /* @__PURE__ */ _k("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), zk = [
  Qk
];
function Gk(e, o) {
  return xk(), Bk("svg", Ok, zk);
}
var yw = /* @__PURE__ */ Ik(Dk, [["render", Gk]]);
const Vt = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M/y HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  ESCALATE: "escalate",
  CLEAR: "clear"
};
function pr(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function ze(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function He(e) {
  ze(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Yk(e, o) {
  ze(2, arguments);
  var r = He(e).getTime(), a = pr(o);
  return new Date(r + a);
}
var Pk = {};
function ui() {
  return Pk;
}
function zc(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Hk(e, o) {
  ze(2, arguments);
  var r = He(e), a = He(o), s = r.getTime() - a.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function jk(e) {
  return ze(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Xk(e) {
  if (ze(1, arguments), !jk(e) && typeof e != "number")
    return !1;
  var o = He(e);
  return !isNaN(Number(o));
}
function Lk(e, o) {
  ze(2, arguments);
  var r = pr(o);
  return Yk(e, -r);
}
var $k = 864e5;
function qk(e) {
  ze(1, arguments);
  var o = He(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var a = o.getTime(), s = r - a;
  return Math.floor(s / $k) + 1;
}
function Ha(e) {
  ze(1, arguments);
  var o = 1, r = He(e), a = r.getUTCDay(), s = (a < o ? 7 : 0) + a - o;
  return r.setUTCDate(r.getUTCDate() - s), r.setUTCHours(0, 0, 0, 0), r;
}
function kw(e) {
  ze(1, arguments);
  var o = He(e), r = o.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var s = Ha(a), c = new Date(0);
  c.setUTCFullYear(r, 0, 4), c.setUTCHours(0, 0, 0, 0);
  var d = Ha(c);
  return o.getTime() >= s.getTime() ? r + 1 : o.getTime() >= d.getTime() ? r : r - 1;
}
function Kk(e) {
  ze(1, arguments);
  var o = kw(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = Ha(r);
  return a;
}
var eM = 6048e5;
function tM(e) {
  ze(1, arguments);
  var o = He(e), r = Ha(o).getTime() - Kk(o).getTime();
  return Math.round(r / eM) + 1;
}
function ja(e, o) {
  var r, a, s, c, d, f, m, g;
  ze(1, arguments);
  var V = ui(), N = pr((r = (a = (s = (c = o == null ? void 0 : o.weekStartsOn) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && s !== void 0 ? s : V.weekStartsOn) !== null && a !== void 0 ? a : (m = V.locale) === null || m === void 0 || (g = m.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(N >= 0 && N <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var R = He(e), F = R.getUTCDay(), b = (F < N ? 7 : 0) + F - N;
  return R.setUTCDate(R.getUTCDate() - b), R.setUTCHours(0, 0, 0, 0), R;
}
function Mw(e, o) {
  var r, a, s, c, d, f, m, g;
  ze(1, arguments);
  var V = He(e), N = V.getUTCFullYear(), R = ui(), F = pr((r = (a = (s = (c = o == null ? void 0 : o.firstWeekContainsDate) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : R.firstWeekContainsDate) !== null && a !== void 0 ? a : (m = R.locale) === null || m === void 0 || (g = m.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var b = new Date(0);
  b.setUTCFullYear(N + 1, 0, F), b.setUTCHours(0, 0, 0, 0);
  var S = ja(b, o), C = new Date(0);
  C.setUTCFullYear(N, 0, F), C.setUTCHours(0, 0, 0, 0);
  var A = ja(C, o);
  return V.getTime() >= S.getTime() ? N + 1 : V.getTime() >= A.getTime() ? N : N - 1;
}
function nM(e, o) {
  var r, a, s, c, d, f, m, g;
  ze(1, arguments);
  var V = ui(), N = pr((r = (a = (s = (c = o == null ? void 0 : o.firstWeekContainsDate) !== null && c !== void 0 ? c : o == null || (d = o.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && s !== void 0 ? s : V.firstWeekContainsDate) !== null && a !== void 0 ? a : (m = V.locale) === null || m === void 0 || (g = m.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), R = Mw(e, o), F = new Date(0);
  F.setUTCFullYear(R, 0, N), F.setUTCHours(0, 0, 0, 0);
  var b = ja(F, o);
  return b;
}
var rM = 6048e5;
function oM(e, o) {
  ze(1, arguments);
  var r = He(e), a = ja(r, o).getTime() - nM(r, o).getTime();
  return Math.round(a / rM) + 1;
}
function le(e, o) {
  for (var r = e < 0 ? "-" : "", a = Math.abs(e).toString(); a.length < o; )
    a = "0" + a;
  return r + a;
}
var iM = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return le(o === "yy" ? a % 100 : a, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : le(r + 1, 2);
  },
  d: function(e, o) {
    return le(e.getUTCDate(), o.length);
  },
  a: function(e, o) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
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
  h: function(e, o) {
    return le(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return le(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return le(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return le(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, a = e.getUTCMilliseconds(), s = Math.floor(a * Math.pow(10, r - 3));
    return le(s, o.length);
  }
};
const Sn = iM;
var _r = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, aM = {
  G: function(e, o, r) {
    var a = e.getUTCFullYear() > 0 ? 1 : 0;
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
  y: function(e, o, r) {
    if (o === "yo") {
      var a = e.getUTCFullYear(), s = a > 0 ? a : 1 - a;
      return r.ordinalNumber(s, {
        unit: "year"
      });
    }
    return Sn.y(e, o);
  },
  Y: function(e, o, r, a) {
    var s = Mw(e, a), c = s > 0 ? s : 1 - s;
    if (o === "YY") {
      var d = c % 100;
      return le(d, 2);
    }
    return o === "Yo" ? r.ordinalNumber(c, {
      unit: "year"
    }) : le(c, o.length);
  },
  R: function(e, o) {
    var r = kw(e);
    return le(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return le(r, o.length);
  },
  Q: function(e, o, r) {
    var a = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
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
  q: function(e, o, r) {
    var a = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
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
  M: function(e, o, r) {
    var a = e.getUTCMonth();
    switch (o) {
      case "M":
      case "MM":
        return Sn.M(e, o);
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
  L: function(e, o, r) {
    var a = e.getUTCMonth();
    switch (o) {
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
  w: function(e, o, r, a) {
    var s = oM(e, a);
    return o === "wo" ? r.ordinalNumber(s, {
      unit: "week"
    }) : le(s, o.length);
  },
  I: function(e, o, r) {
    var a = tM(e);
    return o === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : le(a, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : Sn.d(e, o);
  },
  D: function(e, o, r) {
    var a = qk(e);
    return o === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : le(a, o.length);
  },
  E: function(e, o, r) {
    var a = e.getUTCDay();
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
  e: function(e, o, r, a) {
    var s = e.getUTCDay(), c = (s - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "e":
        return String(c);
      case "ee":
        return le(c, 2);
      case "eo":
        return r.ordinalNumber(c, {
          unit: "day"
        });
      case "eee":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(e, o, r, a) {
    var s = e.getUTCDay(), c = (s - a.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "c":
        return String(c);
      case "cc":
        return le(c, o.length);
      case "co":
        return r.ordinalNumber(c, {
          unit: "day"
        });
      case "ccc":
        return r.day(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(s, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(s, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(e, o, r) {
    var a = e.getUTCDay(), s = a === 0 ? 7 : a;
    switch (o) {
      case "i":
        return String(s);
      case "ii":
        return le(s, o.length);
      case "io":
        return r.ordinalNumber(s, {
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
  a: function(e, o, r) {
    var a = e.getUTCHours(), s = a / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(e, o, r) {
    var a = e.getUTCHours(), s;
    switch (a === 12 ? s = _r.noon : a === 0 ? s = _r.midnight : s = a / 12 >= 1 ? "pm" : "am", o) {
      case "b":
      case "bb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(e, o, r) {
    var a = e.getUTCHours(), s;
    switch (a >= 17 ? s = _r.evening : a >= 12 ? s = _r.afternoon : a >= 4 ? s = _r.morning : s = _r.night, o) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(s, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(e, o, r) {
    if (o === "ho") {
      var a = e.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return Sn.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : Sn.H(e, o);
  },
  K: function(e, o, r) {
    var a = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : le(a, o.length);
  },
  k: function(e, o, r) {
    var a = e.getUTCHours();
    return a === 0 && (a = 24), o === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : le(a, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : Sn.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : Sn.s(e, o);
  },
  S: function(e, o) {
    return Sn.S(e, o);
  },
  X: function(e, o, r, a) {
    var s = a._originalDate || e, c = s.getTimezoneOffset();
    if (c === 0)
      return "Z";
    switch (o) {
      case "X":
        return Qh(c);
      case "XXXX":
      case "XX":
        return ur(c);
      case "XXXXX":
      case "XXX":
      default:
        return ur(c, ":");
    }
  },
  x: function(e, o, r, a) {
    var s = a._originalDate || e, c = s.getTimezoneOffset();
    switch (o) {
      case "x":
        return Qh(c);
      case "xxxx":
      case "xx":
        return ur(c);
      case "xxxxx":
      case "xxx":
      default:
        return ur(c, ":");
    }
  },
  O: function(e, o, r, a) {
    var s = a._originalDate || e, c = s.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Oh(c, ":");
      case "OOOO":
      default:
        return "GMT" + ur(c, ":");
    }
  },
  z: function(e, o, r, a) {
    var s = a._originalDate || e, c = s.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Oh(c, ":");
      case "zzzz":
      default:
        return "GMT" + ur(c, ":");
    }
  },
  t: function(e, o, r, a) {
    var s = a._originalDate || e, c = Math.floor(s.getTime() / 1e3);
    return le(c, o.length);
  },
  T: function(e, o, r, a) {
    var s = a._originalDate || e, c = s.getTime();
    return le(c, o.length);
  }
};
function Oh(e, o) {
  var r = e > 0 ? "-" : "+", a = Math.abs(e), s = Math.floor(a / 60), c = a % 60;
  if (c === 0)
    return r + String(s);
  var d = o || "";
  return r + String(s) + d + le(c, 2);
}
function Qh(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + le(Math.abs(e) / 60, 2);
  }
  return ur(e, o);
}
function ur(e, o) {
  var r = o || "", a = e > 0 ? "-" : "+", s = Math.abs(e), c = le(Math.floor(s / 60), 2), d = le(s % 60, 2);
  return a + c + r + d;
}
const sM = aM;
var zh = function(e, o) {
  switch (e) {
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
}, bw = function(e, o) {
  switch (e) {
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
}, lM = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], a = r[1], s = r[2];
  if (!s)
    return zh(e, o);
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
  return c.replace("{{date}}", zh(a, o)).replace("{{time}}", bw(s, o));
}, cM = {
  p: bw,
  P: lM
};
const uM = cM;
var dM = ["D", "DD"], fM = ["YY", "YYYY"];
function hM(e) {
  return dM.indexOf(e) !== -1;
}
function pM(e) {
  return fM.indexOf(e) !== -1;
}
function Gh(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var mM = {
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
}, wM = function(e, o, r) {
  var a, s = mM[e];
  return typeof s == "string" ? a = s : o === 1 ? a = s.one : a = s.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const vM = wM;
function oc(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, a = e.formats[r] || e.formats[e.defaultWidth];
    return a;
  };
}
var VM = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, gM = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, TM = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, UM = {
  date: oc({
    formats: VM,
    defaultWidth: "full"
  }),
  time: oc({
    formats: gM,
    defaultWidth: "full"
  }),
  dateTime: oc({
    formats: TM,
    defaultWidth: "full"
  })
};
const NM = UM;
var RM = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, yM = function(e, o, r, a) {
  return RM[e];
};
const kM = yM;
function Ao(e) {
  return function(o, r) {
    var a = r != null && r.context ? String(r.context) : "standalone", s;
    if (a === "formatting" && e.formattingValues) {
      var c = e.defaultFormattingWidth || e.defaultWidth, d = r != null && r.width ? String(r.width) : c;
      s = e.formattingValues[d] || e.formattingValues[c];
    } else {
      var f = e.defaultWidth, m = r != null && r.width ? String(r.width) : e.defaultWidth;
      s = e.values[m] || e.values[f];
    }
    var g = e.argumentCallback ? e.argumentCallback(o) : o;
    return s[g];
  };
}
var MM = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, bM = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ZM = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, JM = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, EM = {
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
}, SM = {
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
}, FM = function(e, o) {
  var r = Number(e), a = r % 100;
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
}, AM = {
  ordinalNumber: FM,
  era: Ao({
    values: MM,
    defaultWidth: "wide"
  }),
  quarter: Ao({
    values: bM,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Ao({
    values: ZM,
    defaultWidth: "wide"
  }),
  day: Ao({
    values: JM,
    defaultWidth: "wide"
  }),
  dayPeriod: Ao({
    values: EM,
    defaultWidth: "wide",
    formattingValues: SM,
    defaultFormattingWidth: "wide"
  })
};
const CM = AM;
function Co(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, s = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], c = o.match(s);
    if (!c)
      return null;
    var d = c[0], f = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? xM(f, function(N) {
      return N.test(d);
    }) : WM(f, function(N) {
      return N.test(d);
    }), g;
    g = e.valueCallback ? e.valueCallback(m) : m, g = r.valueCallback ? r.valueCallback(g) : g;
    var V = o.slice(d.length);
    return {
      value: g,
      rest: V
    };
  };
}
function WM(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function xM(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function BM(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = o.match(e.matchPattern);
    if (!a)
      return null;
    var s = a[0], c = o.match(e.parsePattern);
    if (!c)
      return null;
    var d = e.valueCallback ? e.valueCallback(c[0]) : c[0];
    d = r.valueCallback ? r.valueCallback(d) : d;
    var f = o.slice(s.length);
    return {
      value: d,
      rest: f
    };
  };
}
var _M = /^(\d+)(th|st|nd|rd)?/i, IM = /\d+/i, DM = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, OM = {
  any: [/^b/i, /^(a|c)/i]
}, QM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, zM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, GM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, YM = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, PM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, HM = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, jM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, XM = {
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
}, LM = {
  ordinalNumber: BM({
    matchPattern: _M,
    parsePattern: IM,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Co({
    matchPatterns: DM,
    defaultMatchWidth: "wide",
    parsePatterns: OM,
    defaultParseWidth: "any"
  }),
  quarter: Co({
    matchPatterns: QM,
    defaultMatchWidth: "wide",
    parsePatterns: zM,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Co({
    matchPatterns: GM,
    defaultMatchWidth: "wide",
    parsePatterns: YM,
    defaultParseWidth: "any"
  }),
  day: Co({
    matchPatterns: PM,
    defaultMatchWidth: "wide",
    parsePatterns: HM,
    defaultParseWidth: "any"
  }),
  dayPeriod: Co({
    matchPatterns: jM,
    defaultMatchWidth: "any",
    parsePatterns: XM,
    defaultParseWidth: "any"
  })
};
const $M = LM;
var qM = {
  code: "en-US",
  formatDistance: vM,
  formatLong: NM,
  formatRelative: kM,
  localize: CM,
  match: $M,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Zw = qM;
var KM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, eb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, tb = /^'([^]*?)'?$/, nb = /''/g, rb = /[a-zA-Z]/;
function ob(e, o, r) {
  var a, s, c, d, f, m, g, V, N, R, F, b, S, C, A, W, B, _;
  ze(2, arguments);
  var k = String(o), D = ui(), Q = (a = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : D.locale) !== null && a !== void 0 ? a : Zw, z = pr((c = (d = (f = (m = r == null ? void 0 : r.firstWeekContainsDate) !== null && m !== void 0 ? m : r == null || (g = r.locale) === null || g === void 0 || (V = g.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && f !== void 0 ? f : D.firstWeekContainsDate) !== null && d !== void 0 ? d : (N = D.locale) === null || N === void 0 || (R = N.options) === null || R === void 0 ? void 0 : R.firstWeekContainsDate) !== null && c !== void 0 ? c : 1);
  if (!(z >= 1 && z <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ve = pr((F = (b = (S = (C = r == null ? void 0 : r.weekStartsOn) !== null && C !== void 0 ? C : r == null || (A = r.locale) === null || A === void 0 || (W = A.options) === null || W === void 0 ? void 0 : W.weekStartsOn) !== null && S !== void 0 ? S : D.weekStartsOn) !== null && b !== void 0 ? b : (B = D.locale) === null || B === void 0 || (_ = B.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && F !== void 0 ? F : 0);
  if (!(ve >= 0 && ve <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Q.localize)
    throw new RangeError("locale must contain localize property");
  if (!Q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var de = He(e);
  if (!Xk(de))
    throw new RangeError("Invalid time value");
  var ge = zc(de), Te = Lk(de, ge), Ne = {
    firstWeekContainsDate: z,
    weekStartsOn: ve,
    locale: Q,
    _originalDate: de
  }, be = k.match(eb).map(function(ce) {
    var Be = ce[0];
    if (Be === "p" || Be === "P") {
      var _e = uM[Be];
      return _e(ce, Q.formatLong);
    }
    return ce;
  }).join("").match(KM).map(function(ce) {
    if (ce === "''")
      return "'";
    var Be = ce[0];
    if (Be === "'")
      return ib(ce);
    var _e = sM[Be];
    if (_e)
      return !(r != null && r.useAdditionalWeekYearTokens) && pM(ce) && Gh(ce, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && hM(ce) && Gh(ce, o, String(e)), _e(Te, ce, Q.localize, Ne);
    if (Be.match(rb))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Be + "`");
    return ce;
  }).join("");
  return be;
}
function ib(e) {
  var o = e.match(tb);
  return o ? o[1].replace(nb, "'") : e;
}
function Jw(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function ab(e) {
  return Jw({}, e);
}
var Yh = 1e3 * 60, Xa = 60 * 24, Ph = Xa * 30, Hh = Xa * 365;
function sb(e, o, r) {
  var a, s, c;
  ze(2, arguments);
  var d = ui(), f = (a = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : d.locale) !== null && a !== void 0 ? a : Zw;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = Hk(e, o);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var g = Jw(ab(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: m
  }), V, N;
  m > 0 ? (V = He(o), N = He(e)) : (V = He(e), N = He(o));
  var R = String((c = r == null ? void 0 : r.roundingMethod) !== null && c !== void 0 ? c : "round"), F;
  if (R === "floor")
    F = Math.floor;
  else if (R === "ceil")
    F = Math.ceil;
  else if (R === "round")
    F = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var b = N.getTime() - V.getTime(), S = b / Yh, C = zc(N) - zc(V), A = (b - C) / Yh, W = r == null ? void 0 : r.unit, B;
  if (W ? B = String(W) : S < 1 ? B = "second" : S < 60 ? B = "minute" : S < Xa ? B = "hour" : A < Ph ? B = "day" : A < Hh ? B = "month" : B = "year", B === "second") {
    var _ = F(b / 1e3);
    return f.formatDistance("xSeconds", _, g);
  } else if (B === "minute") {
    var k = F(S);
    return f.formatDistance("xMinutes", k, g);
  } else if (B === "hour") {
    var D = F(S / 60);
    return f.formatDistance("xHours", D, g);
  } else if (B === "day") {
    var Q = F(A / Xa);
    return f.formatDistance("xDays", Q, g);
  } else if (B === "month") {
    var z = F(A / Ph);
    return z === 12 && W !== "month" ? f.formatDistance("xYears", 1, g) : f.formatDistance("xMonths", z, g);
  } else if (B === "year") {
    var ve = F(A / Hh);
    return f.formatDistance("xYears", ve, g);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const en = (e) => {
  let o = "";
  if (e)
    try {
      o = ob(new Date(e), Vt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Ew = (e, o) => {
  const r = e.length > o ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, o) + r;
}, lb = window.Vue.defineComponent, zt = window.Vue.unref, jh = window.Vue.normalizeClass, In = window.Vue.createElementVNode, Wo = window.Vue.toDisplayString, Xh = window.Vue.createVNode, nr = window.Vue.openBlock, rr = window.Vue.createElementBlock, ma = window.Vue.createCommentVNode, Sw = window.Vue.createTextVNode, cb = window.Vue.renderList, ub = window.Vue.Fragment, db = window.Vue.pushScopeId, fb = window.Vue.popScopeId, Fw = (e) => (db("data-v-759c2d76"), e = e(), fb(), e), hb = { class: "content" }, pb = { class: "title-row" }, mb = { class: "title" }, wb = {
  key: 0,
  class: "accepted"
}, vb = {
  key: 1,
  class: "rejected"
}, Vb = { key: 0 }, gb = /* @__PURE__ */ Fw(() => /* @__PURE__ */ In("span", { class: "info-title" }, " First Event: ", -1)), Tb = { class: "description" }, Ub = /* @__PURE__ */ Fw(() => /* @__PURE__ */ In("hr", null, null, -1)), Nb = {
  key: 1,
  class: "count-info"
}, Rb = /* @__PURE__ */ Sw(" Alarms: "), yb = { class: "info-title" }, kb = /* @__PURE__ */ lb({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, a = Vt.ACCEPTED, s = Vt.REJECTED, c = () => {
      var d;
      o("situation-selected", (d = r.situationInfo) == null ? void 0 : d.id);
    };
    return (d, f) => {
      var m, g, V;
      return nr(), rr("div", {
        onClick: c,
        class: jh(["card", {
          rejected: r.situationInfo.status == zt(s)
        }])
      }, [
        In("div", {
          class: jh(["severity-line", [`${(g = (m = r.situationInfo) == null ? void 0 : m.severity) == null ? void 0 : g.toLowerCase()}-bg dark`]])
        }, null, 2),
        In("div", hb, [
          In("div", pb, [
            In("div", mb, "Situation " + Wo((V = r.situationInfo) == null ? void 0 : V.id), 1),
            r.situationInfo.status == zt(a) ? (nr(), rr("div", wb, [
              Xh(zt(X), {
                icon: zt(ci),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : ma("", !0),
            r.situationInfo.status == zt(s) ? (nr(), rr("div", vb, [
              Xh(zt(X), {
                icon: zt(yw),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : ma("", !0)
          ]),
          r.small ? ma("", !0) : (nr(), rr("div", Vb, [
            gb,
            Sw(Wo(zt(en)(r.situationInfo.firstEventTime)), 1)
          ])),
          In("div", Tb, Wo(zt(Ew)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          Ub,
          r.situationInfo.relatedAlarms ? (nr(), rr("div", Nb, [
            Rb,
            In("span", yb, Wo(r.situationInfo.relatedAlarms.length), 1)
          ])) : ma("", !0),
          (nr(!0), rr(ub, null, cb(zt(me.exports.keys)(
            zt(me.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (N) => (nr(), rr("div", {
            class: "info-title",
            key: N
          }, " - " + Wo(N), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Aw = /* @__PURE__ */ we(kb, [["__scopeId", "data-v-759c2d76"]]), Mb = window.Vue.openBlock, bb = window.Vue.createElementBlock, Zb = window.Vue.createElementVNode;
var Jb = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Eb = {}, Sb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Fb = /* @__PURE__ */ Zb("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), Ab = [
  Fb
];
function Cb(e, o) {
  return Mb(), bb("svg", Sb, Ab);
}
var Wb = /* @__PURE__ */ Jb(Eb, [["render", Cb]]);
const xb = window.Vue.openBlock, Bb = window.Vue.createElementBlock, Cw = window.Vue.createElementVNode;
var _b = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Ib = {}, Db = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ob = /* @__PURE__ */ Cw("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), Qb = /* @__PURE__ */ Cw("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), zb = [
  Ob,
  Qb
];
function Gb(e, o) {
  return xb(), Bb("svg", Db, zb);
}
var Yb = /* @__PURE__ */ _b(Ib, [["render", Gb]]);
const Pb = window.Vue.openBlock, Hb = window.Vue.createElementBlock, jb = window.Vue.createElementVNode;
var Xb = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Lb = {}, $b = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qb = /* @__PURE__ */ jb("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), Kb = [
  qb
];
function e2(e, o) {
  return Pb(), Hb("svg", $b, Kb);
}
var t2 = /* @__PURE__ */ Xb(Lb, [["render", e2]]);
const n2 = window.Vue.openBlock, r2 = window.Vue.createElementBlock, o2 = window.Vue.createElementVNode;
var i2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const a2 = {}, s2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, l2 = /* @__PURE__ */ o2("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), c2 = [
  l2
];
function u2(e, o) {
  return n2(), r2("svg", s2, c2);
}
var Ww = /* @__PURE__ */ i2(a2, [["render", u2]]);
const d2 = window.Vue.defineComponent, Fn = window.Vue.unref, wa = window.Vue.normalizeClass, va = window.Vue.createVNode, f2 = window.Vue.openBlock, h2 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const p2 = { class: "paginator" }, m2 = /* @__PURE__ */ d2({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(e, { emit: o }) {
    const r = e, a = (s) => {
      s >= 0 && s <= r.totalPages - 1 && o("go-to-page", s);
    };
    return (s, c) => (f2(), h2("div", p2, [
      va(Fn(X), {
        icon: Fn(Wb),
        "aria-hidden": "true",
        class: wa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[0] || (c[0] = (d) => a(0))
      }, null, 8, ["icon", "class"]),
      va(Fn(X), {
        icon: Fn(t2),
        "aria-hidden": "true",
        class: wa(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: c[1] || (c[1] = (d) => a(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      va(Fn(X), {
        icon: Fn(Ww),
        "aria-hidden": "true",
        class: wa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[2] || (c[2] = (d) => a(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      va(Fn(X), {
        icon: Fn(Yb),
        "aria-hidden": "true",
        class: wa(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: c[3] || (c[3] = (d) => a(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const w2 = /* @__PURE__ */ we(m2, [["__scopeId", "data-v-40758818"]]);
const ie = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, v2 = window.Vue.computed, cs = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((a) => {
    r[`${a}Label`] = v2(() => e.value[a] ? e.value[a] : o[a]);
  }), r;
};
const mr = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, wr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var V2 = Object.defineProperty, g2 = Object.defineProperties, T2 = Object.getOwnPropertyDescriptors, Lh = Object.getOwnPropertySymbols, U2 = Object.prototype.hasOwnProperty, N2 = Object.prototype.propertyIsEnumerable, $h = (e, o, r) => o in e ? V2(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, qh = (e, o) => {
  for (var r in o || (o = {}))
    U2.call(o, r) && $h(e, r, o[r]);
  if (Lh)
    for (var r of Lh(o))
      N2.call(o, r) && $h(e, r, o[r]);
  return e;
}, R2 = (e, o) => g2(e, T2(o));
const y2 = window.Vue.defineComponent, k2 = window.Vue.h;
var M2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const b2 = {
  center: {
    type: Boolean,
    default: !1
  }
}, Z2 = y2({
  props: b2,
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
    onClick(e) {
      this.pressed = !1, this.active = !1, requestAnimationFrame(() => {
        const { clientWidth: o, clientHeight: r } = this.parent, a = Math.round(Math.max(o, r));
        let s = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const c = this.parent.getBoundingClientRect(), d = e.pageY, f = e.pageX;
          s = {
            top: `${d - c.top - a / 2 - document.documentElement.scrollTop}px`,
            left: `${f - c.left - a / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = R2(qh({}, s), {
          height: `${a}px`,
          width: `${a}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, wr(this.failsafe), this.failsafe = mr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return k2("div", {
        style: qh({}, this.styles),
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
    const e = window.getComputedStyle(this.parent);
    this.parent.style.overflow = "hidden", !(e.position === "relative" || e.position === "absolute" || e.position === "fixed") && (this.parent.style.position = "relative");
  },
  unmounted() {
    this.parent.removeEventListener("click", this.onClick);
  }
});
var zn = /* @__PURE__ */ M2(Z2, [["__scopeId", "data-v-18e2a5db"]]);
const J2 = window.Vue.openBlock, E2 = window.Vue.createElementBlock, S2 = window.Vue.createElementVNode;
var F2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const A2 = {}, C2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, W2 = /* @__PURE__ */ S2("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), x2 = [
  W2
];
function B2(e, o) {
  return J2(), E2("svg", C2, x2);
}
var io = /* @__PURE__ */ F2(A2, [["render", B2]]);
const Kh = window.Vue.computed, _2 = (e, o, r) => {
  const a = Kh(() => o.value.filter((c) => !c.disabled)), s = Kh(() => e.value ? a.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (s.value === 0 ? r(a.value[a.value.length - 1]) : r(a.value[s.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (s.value === a.value.length - 1 ? r(a.value[0]) : r(a.value[s.value + 1]));
    }
  };
};
const I2 = window.Vue.openBlock, D2 = window.Vue.createElementBlock, du = window.Vue.createElementVNode;
var O2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Q2 = {}, z2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, G2 = /* @__PURE__ */ du("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Y2 = /* @__PURE__ */ du("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), P2 = /* @__PURE__ */ du("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), H2 = [
  G2,
  Y2,
  P2
];
function j2(e, o) {
  return I2(), D2("svg", z2, H2);
}
var X2 = /* @__PURE__ */ O2(Q2, [["render", j2]]), L2 = Object.defineProperty, $2 = Object.defineProperties, q2 = Object.getOwnPropertyDescriptors, ep = Object.getOwnPropertySymbols, K2 = Object.prototype.hasOwnProperty, eZ = Object.prototype.propertyIsEnumerable, tp = (e, o, r) => o in e ? L2(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, xw = (e, o) => {
  for (var r in o || (o = {}))
    K2.call(o, r) && tp(e, r, o[r]);
  if (ep)
    for (var r of ep(o))
      eZ.call(o, r) && tp(e, r, o[r]);
  return e;
}, Bw = (e, o) => $2(e, q2(o));
const ao = window.Vue.defineComponent, ri = window.Vue.resolveComponent, Kt = window.Vue.openBlock, Lr = window.Vue.createElementBlock, tZ = window.Vue.createVNode, La = window.Vue.createBlock, nZ = window.Vue.withModifiers, ro = window.Vue.inject, oi = window.Vue.computed, rZ = window.Vue.normalizeClass, Ir = window.Vue.createElementVNode, $a = window.Vue.toDisplayString, Da = window.Vue.renderSlot, Lo = window.Vue.createCommentVNode, oZ = window.Vue.withDirectives, iZ = window.Vue.vShow, Gc = window.Vue.ref, np = window.Vue.toRef, rp = window.Vue.nextTick, Yc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const fu = window.Vue.provide, op = window.Vue.isRef, aZ = window.Vue.onBeforeUnmount;
var di = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const sZ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, lZ = ao({
  props: sZ,
  components: {
    FeatherIcon: X
  }
}), cZ = ["title"];
function uZ(e, o, r, a, s, c) {
  const d = ri("FeatherIcon");
  return Kt(), Lr("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    tZ(d, { icon: e.icon }, null, 8, ["icon"])
  ], 8, cZ);
}
var dZ = /* @__PURE__ */ di(lZ, [["render", uZ], ["__scopeId", "data-v-4265058e"]]);
const fZ = ao({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return io;
    }
  },
  components: {
    ActionIcon: dZ
  }
});
function hZ(e, o, r, a, s, c) {
  const d = ri("ActionIcon");
  return Kt(), La(d, {
    onClick: o[0] || (o[0] = nZ((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var pZ = /* @__PURE__ */ di(fZ, [["render", hZ]]);
const mZ = ao({
  computed: {
    errorIcon() {
      return X2;
    }
  },
  components: {
    FeatherIcon: X
  }
});
function wZ(e, o, r, a, s, c) {
  const d = ri("FeatherIcon");
  return Kt(), La(d, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var vZ = /* @__PURE__ */ di(mZ, [["render", wZ], ["__scopeId", "data-v-0b8faef3"]]);
const VZ = {
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
}, gZ = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, TZ = ao({
  emits: gZ,
  props: VZ,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = ro("wrapperOptions", {}), o = ro("validationErrorMessage", !1), r = oi(() => e.error ? e.error : o && o.value ? o.value : !1);
    return Bw(xw({}, e), { error: r });
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
      const e = [];
      return this.hideLabel && e.push("hide-label"), this.raised && e.push("raised"), this.focused && e.push("focused"), this.error && e.push("error"), this.background && e.push("background"), this.disabled && e.push("disabled"), this.inline && e.push("inline"), this.hasPre && e.push("has-prefix"), e;
    }
  },
  methods: {
    handleWrapperClick(e) {
      this.disabled || this.$emit("wrapper-click", e);
    }
  },
  mounted() {
    const e = this.$el.querySelector(".prefix");
    if (e) {
      const o = { childList: !0, subtree: !0 }, r = () => {
        const a = this.$el.querySelector(".prefix");
        this.prefixWidth = a ? a.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(e, o), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: pZ,
    ErrorIcon: vZ
  }
}), UZ = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, NZ = ["for"], RZ = { class: "prefix" }, yZ = { class: "post" };
function kZ(e, o, r, a, s, c) {
  const d = ri("ClearIcon"), f = ri("ErrorIcon");
  return Kt(), Lr("div", {
    class: rZ(["feather-input-wrapper-container", e.containerCls])
  }, [
    Ir("fieldset", UZ, [
      Ir("legend", null, $a(e.label), 1)
    ]),
    Ir("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, $a(e.label), 9, NZ),
    Ir("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      Ir("div", RZ, [
        Da(e.$slots, "pre", {}, void 0, !0)
      ]),
      Da(e.$slots, "default", {}, void 0, !0),
      Ir("div", yZ, [
        e.showClear && e.computedClearText ? (Kt(), La(d, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Lo("", !0),
        e.error ? (Kt(), La(f, { key: 1 })) : Lo("", !0),
        Da(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var hu = /* @__PURE__ */ di(TZ, [["render", kZ], ["__scopeId", "data-v-4db296db"]]);
const MZ = ao({
  setup() {
    const e = ro("subTextOptions", {}), o = ro("validationErrorMessage", !1), r = oi(() => e.error ? e.error : o && o.value ? o.value : "");
    return Bw(xw({}, e), { error: r });
  }
}), bZ = { class: "feather-input-sub-text" }, ZZ = {
  key: 0,
  class: "feather-input-spacer"
}, JZ = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, EZ = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function SZ(e, o, r, a, s, c) {
  return oZ((Kt(), Lr("div", bZ, [
    !e.hint && !e.error.length ? (Kt(), Lr("div", ZZ, "\xA0")) : Lo("", !0),
    e.hint && !e.error.length ? (Kt(), Lr("div", JZ, $a(e.hint), 1)) : Lo("", !0),
    e.error.length > 0 ? (Kt(), Lr("div", EZ, $a(e.error), 1)) : Lo("", !0),
    Da(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [iZ, !e.inline || e.hint || e.error.length]
  ]);
}
var fi = /* @__PURE__ */ di(MZ, [["render", SZ], ["__scopeId", "data-v-8e0ac99e"]]);
const FZ = {
  headingText: {
    type: Function,
    default: (e) => e.length && e.length === 1 ? "1 error" : `${e.length} errors`
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
ao({
  props: FZ,
  setup(e) {
    const o = ro("featherFormErrors", Gc([])), r = np(e, "errorList"), a = oi(() => {
      var V;
      return (V = r.value) != null && V.length ? r.value : o.value;
    }), s = np(e, "generalError"), c = (V) => {
      document.getElementById(V).focus();
    }, d = (V) => V.replace(/ \*$/, ""), f = Gc(), m = (V) => `${d(V.label)} - ${V.message}`, g = oi(() => (a.value.length && rp(() => f.value.focus()), e.headingText(a.value)));
    return Yc(s, (V) => {
      V.length && rp(() => f.value.focus());
    }), {
      errors: a,
      errorsHeading: g,
      heading: f,
      focusElement: c,
      mainError: s,
      getFullMessage: m
    };
  }
});
const hi = (e, o, r, a, s) => {
  const c = ro("featherForm", !1);
  if (a && c && e.value) {
    const d = Gc("");
    fu("validationErrorMessage", d);
    const f = () => {
      if (s && op(s) && s.value)
        return d.value = s.value, {
          success: !1,
          message: s.value,
          inputId: e.value,
          label: r
        };
      try {
        return a.validateSync(o.value), d.value = "", { success: !0 };
      } catch (V) {
        const N = V;
        return d.value = N.errors[0], {
          success: !1,
          message: N.errors[0],
          inputId: e.value,
          label: r
        };
      }
    }, g = {
      clear: () => {
        d.value = "";
      },
      validate: f
    };
    return s && op(s) && Yc(s, () => {
      c.runValidation();
    }), Yc(e, (V, N) => {
      V && c && c.register(V, g), N && c && c.deregister(N);
    }, { immediate: !0 }), aZ(() => {
      c.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, pi = (e) => ({
  inherittedAttrs: oi(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), mi = {
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
}, wi = (e) => {
  fu("subTextOptions", e);
}, pu = {
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
}, mu = (e) => {
  fu("wrapperOptions", e);
}, Va = window.Vue.ref, AZ = window.Vue.watch, CZ = window.Vue.watchEffect, ip = window.Vue.computed, ic = window.Vue.provide, _w = (e, o, r, a, s) => {
  const c = Va([]), d = Va(), f = Va(), m = Va();
  CZ(() => {
    if (!c.value.length)
      return;
    const A = c.value.map((W) => W.value);
    if (e.value !== void 0 && e.value !== null && (d.value = c.value[A.indexOf(e.value)]), !d.value && c.value.length) {
      let W = c.value.filter((B) => !B.disabled);
      W = W.length ? W : c.value, f.value = W[0], f.value.first = !0;
    }
  }), AZ(d, (A, W) => {
    W && (W.checked = !1), A && (A.checked = !0);
  });
  const g = (A) => {
    A && A.disabled || (f.value && (f.value.first = !1), d.value !== A && (o("update:modelValue", A.value), d.value = A, A.focus()));
  }, V = ip(() => d.value || f.value), N = _2(V, c, g), R = ip(() => ie("feather-radio-group"));
  m.value = R.value;
  const { validate: F } = hi(m, e, r, a, s);
  return ic("register", (A) => {
    c.value = [...c.value, A], m.value === R.value && (m.value = A.id);
  }), ic("select", g), ic("blur", (A) => {
    o("blur", A);
  }), {
    keydown: (A) => {
      switch (A.keyCode) {
        case 13:
        case 32:
          d.value ? g(d.value) : f.value && g(f.value);
          break;
        case 40:
        case 39:
          N.selectNext();
          break;
        case 37:
        case 38:
          N.selectPrevious();
          break;
      }
    },
    ...N,
    focus: () => {
      d.value && d.value.focus();
    },
    validate: F,
    firstElementId: m,
    groupId: R
  };
};
var WZ = Object.defineProperty, xZ = Object.defineProperties, BZ = Object.getOwnPropertyDescriptors, ap = Object.getOwnPropertySymbols, _Z = Object.prototype.hasOwnProperty, IZ = Object.prototype.propertyIsEnumerable, sp = (e, o, r) => o in e ? WZ(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Kr = (e, o) => {
  for (var r in o || (o = {}))
    _Z.call(o, r) && sp(e, r, o[r]);
  if (ap)
    for (var r of ap(o))
      IZ.call(o, r) && sp(e, r, o[r]);
  return e;
}, Iw = (e, o) => xZ(e, BZ(o));
const Yn = window.Vue.defineComponent, $o = window.Vue.inject, qa = window.Vue.computed, qo = window.Vue.ref, Wt = window.Vue.resolveComponent, gt = window.Vue.openBlock, vi = window.Vue.createElementBlock, Dw = window.Vue.normalizeClass, tn = window.Vue.renderSlot, Dn = window.Vue.createBlock, ii = window.Vue.createCommentVNode, Ka = window.Vue.createElementVNode, DZ = window.Vue.withModifiers, us = window.Vue.createVNode, Ow = window.Vue.toRef, Pc = window.Vue.mergeProps, Tn = window.Vue.withCtx, OZ = window.Vue.h, QZ = window.Vue.provide;
var Pn = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const zZ = {
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
}, GZ = Yn({
  props: zZ,
  setup(e) {
    const o = $o("isCondensed", null), r = qa(() => o || e.condensed), a = qo(!1);
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
    FeatherRipple: zn
  }
}), YZ = ["aria-disabled"];
function PZ(e, o, r, a, s, c) {
  const d = Wt("FeatherRipple");
  return gt(), vi("div", {
    class: Dw(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    tn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (gt(), Dn(d, { key: 0 })) : ii("", !0)
  ], 42, YZ);
}
var ds = /* @__PURE__ */ Pn(GZ, [["render", PZ], ["__scopeId", "data-v-44d413dc"]]);
const HZ = {
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
}, jZ = Yn({
  emits: ["delete"],
  props: HZ,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: io
    };
  },
  components: {
    FeatherIcon: X
  }
}), XZ = { class: "chip-delete" }, LZ = ["aria-label", "aria-describedby"];
function $Z(e, o, r, a, s, c) {
  const d = Wt("FeatherIcon");
  return gt(), vi("span", XZ, [
    Ka("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = DZ((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      us(d, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, LZ)
  ]);
}
var qZ = /* @__PURE__ */ Pn(jZ, [["render", $Z], ["__scopeId", "data-v-4bae6cb4"]]);
const KZ = Yn({
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
}), eJ = ["title"];
function tJ(e, o, r, a, s, c) {
  return gt(), vi("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    tn(e.$slots, "default", {}, void 0, !0)
  ], 8, eJ);
}
var fs = /* @__PURE__ */ Pn(KZ, [["render", tJ], ["__scopeId", "data-v-1a0445b2"]]);
const nJ = {}, rJ = {
  class: "chip-icon",
  role: "presentation"
};
function oJ(e, o) {
  return gt(), vi("span", rJ, [
    tn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var hs = /* @__PURE__ */ Pn(nJ, [["render", oJ], ["__scopeId", "data-v-2230176f"]]);
const lp = {
  delete: "Remove"
}, iJ = Yn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => lp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = cs(Ow(e, "labels"), lp), a = qa(() => ie("chip-text")), s = () => {
      e.disabled || o.emit("click");
    }, c = Kr({}, o.attrs);
    return e.disabled && delete c.onClick, Iw(Kr({}, r), {
      chipTextId: a,
      handleClick: s,
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
    Chip: ds,
    DeleteIcon: qZ,
    Label: fs,
    PreIcon: hs
  }
}), aJ = ["aria-disabled"];
function sJ(e, o, r, a, s, c) {
  const d = Wt("PreIcon"), f = Wt("Label"), m = Wt("DeleteIcon"), g = Wt("Chip");
  return gt(), Dn(g, Pc(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Tn(() => [
      Ka("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Ka("span", Pc(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (gt(), Dn(d, { key: 0 }, {
            default: Tn(() => [
              tn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ii("", !0),
          us(f, { id: e.chipTextId }, {
            default: Tn(() => [
              tn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, aJ),
      e.canDelete ? (gt(), Dn(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (V) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ii("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var lJ = /* @__PURE__ */ Pn(iJ, [["render", sJ], ["__scopeId", "data-v-48b2704a"]]);
const cJ = Yn({
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
    Chip: ds,
    Label: fs,
    PreIcon: hs
  }
}), uJ = ["aria-disabled"];
function dJ(e, o, r, a, s, c) {
  const d = Wt("PreIcon"), f = Wt("Label"), m = Wt("Chip");
  return gt(), Dn(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Tn(() => [
      Ka("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (gt(), Dn(d, { key: 0 }, {
          default: Tn(() => [
            tn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ii("", !0),
        us(f, null, {
          default: Tn(() => [
            tn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, uJ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var fJ = /* @__PURE__ */ Pn(cJ, [["render", dJ], ["__scopeId", "data-v-3e0c4eba"]]);
const hJ = Yn({
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
  setup(e) {
    const o = qo(!1), r = qo(!1), a = qa(() => ie("chip-label-id")), s = qa(() => o.value || r.value ? 0 : -1), c = qo(), d = () => {
      c.value.$el.focus();
    }, f = $o("register", (R) => {
    }), m = $o("blur", (R) => {
    }), g = $o("select", (R) => {
    }), V = {
      first: o,
      focus: d,
      disabled: e.disabled,
      value: e.value,
      checked: r
    };
    return f(V), {
      labelId: a,
      tabindex: s,
      first: o,
      blur: m,
      click: () => {
        g(V);
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
    Chip: ds,
    Label: fs,
    PreIcon: hs
  }
});
function pJ(e, o, r, a, s, c) {
  const d = Wt("PreIcon"), f = Wt("Label"), m = Wt("Chip");
  return gt(), Dn(m, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: Dw(["focus hover", { selected: e.checked }]),
    role: "radio",
    ref: "input",
    "aria-checked": e.checked ? "true" : "false",
    "aria-disabled": e.disabled,
    "aria-labelledby": e.labelId,
    tabindex: e.tabindex,
    onClick: e.click,
    "allow-click": !e.disabled,
    onBlur: e.blur
  }, {
    default: Tn(() => [
      e.hasIcon ? (gt(), Dn(d, { key: 0 }, {
        default: Tn(() => [
          tn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ii("", !0),
      us(f, { id: e.labelId }, {
        default: Tn(() => [
          tn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var mJ = /* @__PURE__ */ Pn(hJ, [["render", pJ], ["__scopeId", "data-v-bbcc2f70"]]);
const wJ = {
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
}, cp = Yn({
  props: wJ,
  setup() {
    return { format: $o("chipListFormat", "") };
  },
  render() {
    const e = (o) => OZ(o, Kr(Kr({}, this.$props), this.$attrs), Kr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(lJ) : this.format === "radio" ? e(mJ) : e(fJ);
  }
}), vJ = {
  label: {
    type: String,
    required: !0
  },
  mode: {
    type: String,
    default: "list",
    validator: (e) => ["list", "radio", "single"].indexOf(e) !== -1
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  condensed: {
    type: Boolean,
    default: !1
  }
}, VJ = Yn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: vJ,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    QZ("chipListFormat", r);
    const a = r === "single";
    if (r === "radio") {
      const d = Ow(e, "modelValue");
      return Iw(Kr({
        attrs: {
          role: "radiogroup"
        }
      }, _w(d, o.emit, e.label, {}, qo(""))), {
        single: a
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: a };
  }
}), gJ = ["aria-label"];
function TJ(e, o, r, a, s, c) {
  return gt(), vi("div", Pc(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...d) => e.keydown && e.keydown(...d))
  }), [
    tn(e.$slots, "default", {}, void 0, !0)
  ], 16, gJ);
}
var UJ = /* @__PURE__ */ Pn(VJ, [["render", TJ], ["__scopeId", "data-v-1e06f41d"]]);
const NJ = window.Vue.defineComponent, RJ = window.Vue.normalizeClass, yJ = window.Vue.openBlock, kJ = window.Vue.createElementBlock, MJ = window.Vue.createCommentVNode, bJ = /* @__PURE__ */ NJ({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, a) => o != null && o.severity ? (yJ(), kJ("span", {
      key: 0,
      class: RJ(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : MJ("", !0);
  }
});
const ZJ = /* @__PURE__ */ we(bJ, [["__scopeId", "data-v-e08880d6"]]), JJ = window.Vue.defineComponent, xo = window.Vue.unref, Qw = window.Vue.createTextVNode, up = window.Vue.normalizeClass, ac = window.Vue.withCtx, dp = window.Vue.createVNode, EJ = window.Vue.renderList, SJ = window.Vue.Fragment, sc = window.Vue.openBlock, FJ = window.Vue.createElementBlock, AJ = window.Vue.toDisplayString, fp = window.Vue.createBlock, CJ = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const WJ = /* @__PURE__ */ Qw(" ALL "), hp = window.Vue.ref, xJ = window.Vue.watch, BJ = window.Vue.computed, _J = window.Vue.reactive, IJ = /* @__PURE__ */ JJ({
  __name: "FiltersSeverity",
  props: {
    alarms: null,
    situationId: null,
    preSelected: null
  },
  emits: ["selected-severities"],
  setup(e, { emit: o }) {
    var m;
    const r = e, a = hp(!1), s = BJ(() => me.exports.keys(me.exports.groupBy(r.alarms, "severity"))), c = hp(
      (m = r.preSelected) != null && m.length ? r.preSelected : ["all"]
    ), d = _J({
      alarms: r.alarms
    }), f = (g) => {
      c.value = c.value.filter((V) => V !== "all"), c.value.includes(g) ? c.value = c.value.filter((V) => V !== g) : c.value.push(g), (g === "all" || c.value.length === 0) && (c.value = ["all"]), o("selected-severities", c.value);
    };
    return xJ(r, () => {
      var g;
      c.value = (g = r.preSelected) != null && g.length ? r.preSelected : ["all"], d.alarms = r.alarms, a.value = !1;
    }), (g, V) => xo(s).length > 0 ? (sc(), fp(xo(UJ), {
      key: c.value.toString(),
      condensed: "",
      label: ""
    }, {
      default: ac(() => [
        dp(xo(cp), {
          class: up({ clicked: c.value.includes("all") }),
          onClick: V[0] || (V[0] = (N) => f("all"))
        }, {
          default: ac(() => [
            WJ
          ]),
          _: 1
        }, 8, ["class"]),
        (sc(!0), FJ(SJ, null, EJ(xo(s), (N) => (sc(), fp(xo(cp), {
          class: up([
            { clicked: c.value.includes(N) },
            `${N == null ? void 0 : N.toLowerCase()}-bg`
          ]),
          key: N,
          onClick: (R) => f(N)
        }, {
          default: ac(() => [
            dp(ZJ, { severity: N }, null, 8, ["severity"]),
            Qw(AJ(N), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    })) : CJ("", !0);
  }
});
const wu = /* @__PURE__ */ we(IJ, [["__scopeId", "data-v-57d07be0"]]);
var DJ = Object.defineProperty, OJ = Object.defineProperties, QJ = Object.getOwnPropertyDescriptors, pp = Object.getOwnPropertySymbols, zJ = Object.prototype.hasOwnProperty, GJ = Object.prototype.propertyIsEnumerable, mp = (e, o, r) => o in e ? DJ(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Bo = (e, o) => {
  for (var r in o || (o = {}))
    zJ.call(o, r) && mp(e, r, o[r]);
  if (pp)
    for (var r of pp(o))
      GJ.call(o, r) && mp(e, r, o[r]);
  return e;
}, wp = (e, o) => OJ(e, QJ(o));
const YJ = window.Vue.defineComponent, PJ = window.Vue.inject, _o = window.Vue.h;
var HJ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const jJ = {
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
}, XJ = YJ({
  inheritAttrs: !1,
  props: jJ,
  setup() {
    return { hasTooltip: PJ("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const m = ["btn", "hover", "focus", f];
      return this.icon && (m.push("btn-icon"), m.push("btn-icon-table")), this.onColor && m.push("on-color"), m;
    }, o = this.asAnchor ? "a" : "button", r = {}, a = Bo({}, this.$attrs);
    r.attrs = a || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const s = e();
    r.class = [this.$attrs.class].concat(s), this.$slots.icon && r.class.push("has-icon");
    let c = _o(zn);
    if (this.disabled && (c = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), _o(o, wp(Bo(Bo({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : _o(zn, { center: !0 })
      ]);
    }
    const d = _o("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return _o(o, wp(Bo(Bo({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      d,
      c
    ]);
  }
});
var Me = /* @__PURE__ */ HJ(XJ, [["__scopeId", "data-v-702d1074"]]);
const LJ = window.Vue.openBlock, $J = window.Vue.createElementBlock, qJ = window.Vue.createElementVNode;
var KJ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const eE = {}, tE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nE = /* @__PURE__ */ qJ("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), rE = [
  nE
];
function oE(e, o) {
  return LJ(), $J("svg", tE, rE);
}
var zw = /* @__PURE__ */ KJ(eE, [["render", oE]]);
const iE = window.Vue.openBlock, aE = window.Vue.createElementBlock, sE = window.Vue.createElementVNode;
var lE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const cE = {}, uE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dE = /* @__PURE__ */ sE("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), fE = [
  dE
];
function hE(e, o) {
  return iE(), aE("svg", uE, fE);
}
var Gw = /* @__PURE__ */ lE(cE, [["render", hE]]);
const pE = window.Vue.watch, mE = window.Vue.onBeforeUnmount, wE = window.Vue.ref, vE = window.Vue.onMounted, VE = (e) => {
  const o = wE(!1);
  let r = !1;
  const a = (d) => {
    e(d), r = !1;
  };
  function s(d) {
    r || (requestAnimationFrame(() => a(d)), r = !0);
  }
  const c = () => {
    window && window.removeEventListener("resize", s);
  };
  return vE(() => {
    const d = pE(o, (f) => {
      window && f ? window.addEventListener("resize", s) : c();
    }, {
      immediate: !0
    });
    mE(() => {
      d(), c();
    });
  }), o;
}, gE = window.Vue.watch, TE = window.Vue.onBeforeUnmount, UE = window.Vue.ref, NE = window.Vue.onMounted, RE = (e, o) => {
  const r = UE(!1), a = (d) => {
    d.target === window && o(d);
  }, s = (d) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((g) => g && g.contains(d.target)) || o(d);
  }, c = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", a));
  };
  return NE(() => {
    const d = gE(r, (f) => {
      document && window && f ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", a)) : c();
    }, {
      immediate: !0
    });
    TE(() => {
      d(), c();
    });
  }), r;
}, yE = window.Vue.watch, kE = window.Vue.onBeforeUnmount, ME = window.Vue.ref, Yw = (e, o) => {
  const r = ME(!1);
  let a = !1;
  const s = (m) => {
    o(m), a = !1;
  };
  function c(m) {
    a || (requestAnimationFrame(() => s(m)), a = !0);
  }
  const d = () => {
    e.value && e.value.removeEventListener("scroll", c, !0);
  }, f = yE([e, r], ([m, g], V) => {
    V && V.length && V[0] && V[0].removeEventListener("scroll", c, !0), g && m ? m.addEventListener("scroll", c, !0) : d();
  }, {
    immediate: !0
  });
  return kE(() => {
    f(), d();
  }), r;
}, bE = window.Vue.defineComponent, pn = window.Vue.ref, vp = window.Vue.toRef, ZE = window.Vue.onMounted, JE = window.Vue.watch, Vp = window.Vue.computed, EE = window.Vue.nextTick, gp = window.Vue.openBlock, Tp = window.Vue.createElementBlock, Up = window.Vue.renderSlot, SE = window.Vue.normalizeClass, FE = window.Vue.normalizeStyle, AE = window.Vue.createCommentVNode;
var CE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const WE = {
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
}, xE = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, BE = bE({
  emits: xE,
  props: WE,
  setup(e, o) {
    const r = pn(), a = pn(), s = vp(e, "open"), c = vp(e, "noExpand"), d = pn("auto"), f = pn(), m = pn(e.triggerId || ie("feather-menu-trigger")), g = pn(ie("feather-menu-dropdown")), V = pn(""), N = pn("");
    ZE(() => {
      f.value = window;
    });
    const R = pn(!1), F = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), b = () => {
      if (!a.value)
        return;
      const k = r.value.getBoundingClientRect();
      R.value = !0, d.value = "auto", EE(() => {
        let { height: D, width: Q } = a.value.getBoundingClientRect();
        const z = F(), ve = z.height, de = z.width;
        e.fill && Q < k.width ? (d.value = k.width + "px", Q = k.width) : d.value = Q + "px";
        let ge = 0;
        ve - k.bottom < D && k.top >= D ? (ge = k.top - D, e.cover && (ge += k.height)) : (ge = k.bottom, e.cover && (ge -= k.height));
        let Te = e.right ? k.right - Q : k.left;
        !e.right && k.right >= Q && de - k.left < Q && (Te = k.right - Q), e.right && k.right <= Q && de - k.left > Q && (Te = k.left), N.value = `${Te}px`, V.value = `${ge}px`, R.value = !1;
      });
    }, C = RE(r, (k) => {
      o.emit("outside-click", k);
    }), A = VE(b), W = Yw(f, b);
    JE([s, a], ([k, D]) => {
      k && D && b(), C.value = k, A.value = k, W.value = k;
    });
    const B = Vp(() => {
      const k = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return s.value && (k["aria-controls"] = g.value), c.value || (k["aria-expanded"] = s.value ? "true" : "false"), k;
    }), _ = Vp(() => ({
      click: (k) => {
        o.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: V,
      positionLeft: N,
      triggerId: m,
      triggerAttrs: B,
      triggerListeners: _,
      menuId: g,
      menu: a,
      menuWidth: d,
      root: r,
      calculatePosition: b,
      calculating: R
    };
  }
}), _E = ["data-ref-id"], IE = ["data-ref-id", "id"];
function DE(e, o, r, a, s, c) {
  return gp(), Tp("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Up(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (gp(), Tp("div", {
      key: 0,
      class: SE(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: FE({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Up(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, IE)) : AE("", !0)
  ], 8, _E);
}
var Pw = /* @__PURE__ */ CE(BE, [["render", DE], ["__scopeId", "data-v-f75af406"]]), OE = {
  mounted(e, o) {
    e.addEventListener("keydown", o.dir.contentKeyPressed);
  },
  unmounted(e, o) {
    e.removeEventListener("keydown", o.dir.contentKeyPressed);
  },
  contentKeyPressed(e) {
    const o = e.currentTarget.querySelectorAll("li a");
    let r = [].indexOf.call(o, e.target);
    if (!(r < 0)) {
      switch (e.keyCode) {
        case 40:
          r++, r === o.length && (r = 0);
          break;
        case 38:
          r--, r === -1 && (r = o.length - 1);
          break;
        default:
          return;
      }
      e.preventDefault(), o[r].focus();
    }
  }
};
const QE = window.Vue.openBlock, zE = window.Vue.createElementBlock, GE = window.Vue.createElementVNode;
var YE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const PE = {}, HE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jE = /* @__PURE__ */ GE("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), XE = [
  jE
];
function LE(e, o) {
  return QE(), zE("svg", HE, XE);
}
var $E = /* @__PURE__ */ YE(PE, [["render", LE]]);
const qE = window.Vue.openBlock, KE = window.Vue.createElementBlock, vu = window.Vue.createElementVNode;
var eS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const tS = {}, nS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rS = /* @__PURE__ */ vu("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), oS = /* @__PURE__ */ vu("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), iS = /* @__PURE__ */ vu("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), aS = [
  rS,
  oS,
  iS
];
function sS(e, o) {
  return qE(), KE("svg", nS, aS);
}
var lS = /* @__PURE__ */ eS(tS, [["render", sS]]);
const cS = window.Vue.openBlock, uS = window.Vue.createElementBlock, dS = window.Vue.createElementVNode;
var fS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const hS = {}, pS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, mS = /* @__PURE__ */ dS("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), wS = [
  mS
];
function vS(e, o) {
  return cS(), uS("svg", pS, wS);
}
var Vu = /* @__PURE__ */ fS(hS, [["render", vS]]);
const ai = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const a = getComputedStyle(e);
  r += parseInt(a.getPropertyValue("margin-top"), 10), r += parseInt(a.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
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
const VS = window.Vue.defineComponent, gS = window.Vue.openBlock, TS = window.Vue.createElementBlock, US = window.Vue.normalizeClass, NS = window.Vue.pushScopeId, RS = window.Vue.popScopeId, Hc = window.Vue.createElementVNode;
var yS = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const kS = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, MS = {
  click: (e) => !0
}, bS = VS({
  emits: MS,
  props: kS,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), Hw = (e) => (NS("data-v-07e020f5"), e = e(), RS(), e), ZS = /* @__PURE__ */ Hw(() => /* @__PURE__ */ Hc("div", { class: "track" }, null, -1)), JS = /* @__PURE__ */ Hw(() => /* @__PURE__ */ Hc("div", { class: "switcher" }, [
  /* @__PURE__ */ Hc("div", { class: "switch-circle" })
], -1)), ES = [
  ZS,
  JS
];
function SS(e, o, r, a, s, c) {
  return gS(), TS("div", {
    class: US(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...d) => e.handleClick && e.handleClick(...d))
  }, ES, 2);
}
var FS = /* @__PURE__ */ yS(bS, [["render", SS], ["__scopeId", "data-v-07e020f5"]]), AS = Object.defineProperty, CS = Object.defineProperties, WS = Object.getOwnPropertyDescriptors, Np = Object.getOwnPropertySymbols, xS = Object.prototype.hasOwnProperty, BS = Object.prototype.propertyIsEnumerable, Rp = (e, o, r) => o in e ? AS(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, yp = (e, o) => {
  for (var r in o || (o = {}))
    xS.call(o, r) && Rp(e, r, o[r]);
  if (Np)
    for (var r of Np(o))
      BS.call(o, r) && Rp(e, r, o[r]);
  return e;
}, kp = (e, o) => CS(e, WS(o));
const gu = window.Vue.defineComponent, or = window.Vue.h, _S = window.Vue.openBlock, IS = window.Vue.createElementBlock, DS = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var jw = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const OS = {
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
}, QS = gu({
  inheritAttrs: !1,
  props: OS,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((d) => d.children && d.children.length !== 0 || d.type && d.type.render) !== -1 && (e = or("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = or("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let a;
    this.$slots.post && (a = or("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const s = this.disabled ? void 0 : or(zn);
    if (this.asLi)
      return or("li", kp(yp({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [e, r, a, s]);
    const c = or("a", kp(yp({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, a, s]);
    return or("li", {}, [c]);
  }
});
var Vi = /* @__PURE__ */ jw(QS, [["__scopeId", "data-v-7c46b2b3"]]);
gu({
  components: {
    FeatherListItem: Vi
  }
});
const zS = {}, GS = { class: "feather-list" };
function YS(e, o) {
  return _S(), IS("ul", GS, [
    DS(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Tu = /* @__PURE__ */ jw(zS, [["render", YS], ["__scopeId", "data-v-941a1d50"]]);
const PS = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, HS = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
gu({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: PS,
  props: HS,
  computed: {
    labelId() {
      return ie("switch-label");
    }
  },
  methods: {
    focus() {
      this.$refs.input.$el.focus();
    },
    updateValue() {
      this.disabled || this.$emit("update:modelValue", !this.modelValue);
    },
    click(e) {
      this.focus(), this.updateValue(), this.$emit("click", e);
    },
    keydown(e) {
      (e.keyCode === q.SPACE || e.keyCode === q.ENTER) && this.updateValue(), e.keyCode === q.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: FS, FeatherListItem: Vi }
});
var jS = Object.defineProperty, XS = Object.defineProperties, LS = Object.getOwnPropertyDescriptors, Mp = Object.getOwnPropertySymbols, $S = Object.prototype.hasOwnProperty, qS = Object.prototype.propertyIsEnumerable, bp = (e, o, r) => o in e ? jS(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Tt = (e, o) => {
  for (var r in o || (o = {}))
    $S.call(o, r) && bp(e, r, o[r]);
  if (Mp)
    for (var r of Mp(o))
      qS.call(o, r) && bp(e, r, o[r]);
  return e;
}, KS = (e, o) => XS(e, LS(o));
const so = window.Vue.defineComponent, oe = window.Vue.openBlock, Ae = window.Vue.createElementBlock, it = window.Vue.createElementVNode, Ht = window.Vue.toDisplayString, Ct = window.Vue.createCommentVNode, Je = window.Vue.resolveComponent, Ft = window.Vue.createBlock, Pe = window.Vue.withCtx, eo = window.Vue.Fragment, Ko = window.Vue.renderList, at = window.Vue.createVNode, Uu = window.Vue.withModifiers, hr = window.Vue.normalizeClass, jc = window.Vue.renderSlot, Xw = window.Vue.createTextVNode, eF = window.Vue.pushScopeId, tF = window.Vue.popScopeId, Lw = window.Vue.reactive, $w = window.Vue.nextTick, lc = window.Vue.markRaw, cc = window.Vue.toRef, Zp = window.Vue.computed, nF = window.Vue.toRefs, Dr = window.Vue.ref, uc = window.Vue.mergeProps, Jp = window.Vue.toHandlers, ga = window.Vue.withDirectives, Ta = window.Vue.vShow;
var ps = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Nu = {
  query: {
    type: String
  }
}, Vr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const rF = so({
  mixins: [],
  props: Tt(Tt({
    text: {
      type: String,
      required: !0
    }
  }, ps), Nu),
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
}), oF = {
  key: 0,
  class: "highlight"
}, iF = { key: 1 };
function aF(e, o, r, a, s, c) {
  return oe(), Ae("span", null, [
    it("span", null, Ht(e.beginning), 1),
    e.highlighted ? (oe(), Ae("span", oF, Ht(e.highlighted), 1)) : Ct("", !0),
    e.end ? (oe(), Ae("span", iF, Ht(e.end), 1)) : Ct("", !0)
  ]);
}
var qw = /* @__PURE__ */ Vr(rF, [["render", aF], ["__scopeId", "data-v-8abe2492"]]);
const sF = so({
  emits: ["select", "deselect"],
  props: Tt(Tt({
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
  }, ps), Nu),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        ai(o, r.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      const o = this.value;
      return o && o.length ? o.some((a) => a[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
    },
    isActive(e) {
      return this.activeIndex === e;
    },
    getId(e) {
      return e === this.activeIndex ? this.activeId : null;
    },
    select(e) {
      this.$emit(this.isSelected(e) ? "deselect" : "select", e);
    }
  },
  components: {
    FeatherList: Tu,
    FeatherListItem: Vi,
    Highlighter: qw
  }
}), lF = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function cF(e, o, r, a, s, c) {
  const d = Je("Highlighter"), f = Je("FeatherListItem"), m = Je("FeatherList");
  return oe(), Ft(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Pe(() => [
      (oe(!0), Ae(eo, null, Ko(e.items, (g, V) => (oe(), Ae(eo, {
        key: g[e.textProp]
      }, [
        at(f, {
          "as-li": "",
          id: e.getId(V),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(g),
          highlighted: e.isActive(V),
          selected: e.isSelected(g),
          onClick: Uu((N) => e.select(g), ["stop"])
        }, {
          default: Pe(() => [
            at(d, {
              highlight: e.highlight,
              query: e.query,
              text: g[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            g._new ? (oe(), Ae("span", lF, Ht(e.newLabel), 1)) : Ct("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && g._new ? (oe(), Ae("li", {
          role: "presentation",
          key: g[e.textProp] + "hr",
          class: "hr"
        })) : Ct("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var uF = /* @__PURE__ */ Vr(sF, [["render", cF], ["__scopeId", "data-v-f623434a"]]);
const dF = so({
  emits: ["select"],
  props: Tt(Tt({
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
  }, ps), Nu),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        ai(o, r);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((e, o) => e.align && e.align.toLowerCase() === "right" ? `tr${o + 1}` : e.align && e.align.toLowerCase() === "center" ? `tc${o + 1}` : `tl${o + 1}`);
    }
  },
  methods: {
    isSelected(e) {
      const o = this.value;
      return this.value && this.value.length ? o.some((a) => a[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
    },
    isActive(e) {
      return this.activeRow === e;
    },
    isActiveCell(e, o) {
      return this.activeRow === e && this.activeCol === o;
    },
    getId(e, o) {
      return e === this.activeRow && this.activeCol === o ? this.activeId : "";
    },
    select(e) {
      this.$emit("select", e);
    }
  },
  components: {
    Highlighter: qw
  }
}), fF = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, hF = ["aria-multiselectable"], pF = { role: "row" }, mF = ["aria-selected", "onClick"], wF = ["id", "aria-selected"], vF = { key: 1 };
function VF(e, o, r, a, s, c) {
  const d = Je("Highlighter");
  return oe(), Ae("div", fF, [
    it("table", {
      class: hr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      it("thead", null, [
        it("tr", pF, [
          (oe(!0), Ae(eo, null, Ko(e.config, (f) => (oe(), Ae("th", {
            key: f.title
          }, Ht(f.title), 1))), 128))
        ])
      ]),
      it("tbody", null, [
        (oe(!0), Ae(eo, null, Ko(e.items, (f, m) => (oe(), Ae("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: hr({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: Uu((g) => e.select(f), ["stop"])
        }, [
          (oe(!0), Ae(eo, null, Ko(e.config, (g, V) => (oe(), Ae("td", {
            key: f[e.textProp] + g.prop,
            id: e.getId(m, V),
            "aria-selected": e.isSelected(f),
            class: hr({ "focus-cell": e.isActiveCell(m, V) })
          }, [
            g.prop === e.textProp ? (oe(), Ft(d, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[g.prop]
            }, null, 8, ["highlight", "query", "text"])) : (oe(), Ae("p", vF, Ht(f[g.prop]), 1))
          ], 10, wF))), 128))
        ], 10, mF))), 128))
      ])
    ], 10, hF)
  ], 512);
}
var gF = /* @__PURE__ */ Vr(dF, [["render", VF], ["__scopeId", "data-v-58c88fd1"]]);
const TF = so({
  components: {
    FeatherList: Tu,
    FeatherListItem: Vi
  }
});
function UF(e, o, r, a, s, c) {
  const d = Je("FeatherListItem"), f = Je("FeatherList");
  return oe(), Ft(f, { class: "result-list" }, {
    default: Pe(() => [
      at(d, { "as-li": "" }, {
        default: Pe(() => [
          jc(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var NF = /* @__PURE__ */ Vr(TF, [["render", UF], ["__scopeId", "data-v-06b752c6"]]);
const RF = so({
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
    FeatherIcon: X,
    Cancel: io,
    BaseChip: ds,
    BaseChipLabel: fs,
    BaseChipPreIcon: hs
  }
});
function yF(e, o, r, a, s, c) {
  const d = Je("FeatherIcon"), f = Je("BaseChipPreIcon"), m = Je("BaseChipLabel"), g = Je("Cancel"), V = Je("BaseChip");
  return oe(), Ft(V, {
    class: hr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Pe(() => [
      e.showPreIcon ? (oe(), Ft(f, { key: 0 }, {
        default: Pe(() => {
          var N, R;
          return [
            at(d, {
              icon: (N = e.pre) == null ? void 0 : N.icon,
              title: (R = e.pre) == null ? void 0 : R.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Ct("", !0),
      at(m, null, {
        default: Pe(() => [
          Xw(Ht(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Ct("", !0) : (oe(), Ae("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = Uu((...N) => e.handleClick && e.handleClick(...N), ["stop"]))
      }, [
        at(d, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Pe(() => [
            at(g)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var kF = /* @__PURE__ */ Vr(RF, [["render", yF], ["__scopeId", "data-v-e0fc6ac0"]]);
const MF = {}, bF = (e) => (eF("data-v-aa720e06"), e = e(), tF(), e), ZF = { class: "spinner-container" }, JF = /* @__PURE__ */ bF(() => /* @__PURE__ */ it("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ it("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), EF = [
  JF
];
function SF(e, o) {
  return oe(), Ae("div", ZF, EF);
}
var FF = /* @__PURE__ */ Vr(MF, [["render", SF], ["__scopeId", "data-v-aa720e06"]]), ms = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(ms || {});
const Kw = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, AF = Tt(Tt(Tt({
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
    default: (e, o, r) => e[r.textProp].toString().toLowerCase() === o.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (e) => !!ms[e]
  },
  labels: {
    type: Object,
    default: () => Kw
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, ps), mi), pu), CF = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, WF = (e, o, r, a) => {
  if (r.toLowerCase() === ms.multi) {
    const c = e.modelValue, d = (f) => {
      e.selectionLimit.value && f.length >= e.selectionLimit.value ? e.selectionLimitReached.value = !0 : e.selectionLimitReached.value = !1;
    };
    return {
      getInitialText() {
        return "";
      },
      handleModelValueChange(f) {
        f && f.length && d(f);
      },
      hasValue() {
        return !!(c.value && c.value.length);
      },
      selectItem(f) {
        if (c.value && c.value.filter((g) => g[e.textProp.value] === f[e.textProp.value]).length)
          return;
        const m = c.value ? [...c.value, f] : [f];
        a("update:modelValue", m), d(m);
      },
      removeItem(f) {
        const m = c.value.findIndex((g) => {
          if (f[e.textProp.value] === g[e.textProp.value])
            return !0;
        });
        debugger;
        if (m > -1) {
          const g = c.value.slice(0);
          g.splice(m, 1), a("update:modelValue", g), d(g), e.input.value.focus();
        }
      },
      clickedItem() {
        e.query.value = "", e.emitSearch();
      },
      handleInputBlur() {
      }
    };
  }
  const s = e.modelValue;
  return {
    getInitialText() {
      return s.value ? s.value[e.textProp.value] : "";
    },
    handleModelValueChange() {
      e.query.value = this.getInitialText();
    },
    hasValue() {
      return !!s.value;
    },
    selectItem(c) {
      o.active.row = -1, e.forceCloseResults.value = !0, c && c._new && e.allowNew ? a("new", c._new) : a("update:modelValue", c);
    },
    removeItem() {
    },
    clickedItem() {
      e.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (o.active.row > -1) {
        const c = e.internalResults.value[o.active.row];
        c && c._new && e.allowNew ? a("new", c._new) : a("update:modelValue", c);
      }
    }
  };
}, xF = () => {
  const e = Lw({
    row: -1
  }), o = (c) => {
    $w(() => {
      e.row = c;
    });
  }, r = (c, d) => {
    if (c.keyCode === q.DOWN) {
      if (c.preventDefault(), e.row === -1)
        a(), o(0);
      else if (e.row + 1 <= d.length - 1) {
        const f = e.row;
        a(), o(f + 1);
      }
      return !0;
    }
    if (c.keyCode === q.UP) {
      if (c.preventDefault(), e.row === 0)
        a();
      else if (e.row > 0) {
        const f = e.row;
        a(), o(f - 1);
      }
      return !0;
    }
    return !1;
  }, a = () => {
    e.row = -1;
  };
  return { reset: a, handleKeyPress: r, active: e, first: () => {
    e.row = 0;
  } };
}, BF = (e) => {
  const o = Lw({
    row: -1,
    col: -1
  }), r = (d, f) => {
    $w(() => {
      o.col = f, o.row = d;
    });
  }, a = (d, f) => {
    if (d.keyCode === q.DOWN) {
      if (d.preventDefault(), o.row === -1)
        s(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const m = o.row, g = o.col;
        s(), r(m + 1, g);
      }
      return !0;
    }
    if (d.keyCode === q.UP) {
      if (d.preventDefault(), o.row === 0)
        s();
      else if (o.row > 0) {
        const m = o.row, g = o.col;
        s(), r(m - 1, g);
      }
      return !0;
    }
    if (d.keyCode === q.RIGHT && o.row !== -1) {
      if (d.preventDefault(), o.col + 1 <= e.length - 1) {
        const m = o.col, g = o.row;
        s(), r(g, m + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const m = o.row;
        s(), r(m + 1, 0);
      }
      return !0;
    }
    if (d.keyCode === q.LEFT && o.row !== -1) {
      if (d.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const m = o.row;
        s(), r(m - 1, e.length - 1);
      } else if (o.col > 0) {
        const m = o.col, g = o.row;
        s(), r(g, m - 1);
      }
      return !0;
    }
    if (d.keyCode === q.END && o.row !== -1) {
      d.preventDefault();
      const m = o.row;
      return s(), r(d.ctrlKey ? f.length - 1 : m, e.length - 1), !0;
    }
    if (d.keyCode === q.HOME && o.row !== -1) {
      d.preventDefault();
      const m = o.row;
      return s(), r(d.ctrlKey ? 0 : m, 0), !0;
    }
    return !1;
  }, s = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: s, handleKeyPress: a, active: o, first: () => {
    s(), r(0, 0);
  } };
}, _F = so({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: CF,
  props: AF,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== ms.multi;
    },
    raised() {
      return this.hasValue || this.hasFocus;
    },
    hasValue() {
      var e;
      return (e = this.strategy) == null ? void 0 : e.hasValue();
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
      return ie("result-item");
    },
    minCharWarningId() {
      return ie("min-char-warning");
    },
    subTextId() {
      return ie("feather-autocomplete-description");
    },
    resultsId() {
      return ie("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return ie("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return lc($E);
    },
    minCharIcon() {
      return lc(lS);
    },
    dropdownIcon() {
      return lc(Vu);
    },
    inputAttrs() {
      const e = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let o = "";
      return this.activeChipIndex > -1 && (o = this.activeChipId), this.active.row > -1 && this.showResults && (o = this.resultItemId), this.minChar && e.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": e.join(" "),
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
    activeChipIndex(e) {
      e && this.genActiveChipId(), e > -1 && this.scrollContainer && this.$nextTick(() => {
        ai(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          ai(this.inputRef, this.scrollContainer);
        }), this.strategy.handleModelValueChange(e), this.hasFocus || this.adjustTextArea();
      },
      immediate: !0
    },
    results(e) {
      e && e.length > 0 && this.selectFirst(), this.forceCloseResults = !1, e && e.length === 0 && this.query && this.query.length > 0 && !this.allowNewEnabled && this.setAlert(this.noResultsLabel), this.allowNewEnabled && this.query.length && (e.some((r) => this.newMatcher(r, this.query, this)) || (e = [
        {
          [this.textProp]: this.query,
          _new: this.query
        },
        ...e
      ])), this.internalResults = e;
    },
    showResults(e) {
      const o = this.$refs.menu;
      e && o.calculatePosition && o.calculatePosition();
    },
    selectionLimitReached(e) {
      e && this.setAlert(this.selectionLimitLabel);
    }
  },
  methods: {
    getPre(e) {
      return e._pre;
    },
    genActiveChipId() {
      return this.activeChipId = ie("active-chip"), this.activeChipId;
    },
    setAlert(e) {
      const o = this.$refs.alert;
      o.textContent = e, setTimeout(() => {
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
    handleTextInput(e) {
      this.adjustTextArea();
      const r = e.target.value;
      r !== void 0 && (wr(this.typingTimeout), this.typingTimeout = mr(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === q.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === q.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const a = this.modelValue;
        this.removeFromValue(a[this.activeChipIndex]), o();
        return;
      }
      if (e.keyCode === q.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === q.ENTER || e.keyCode === q.SPACE || e.keyCode === q.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === q.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const a = this.modelValue;
        e.keyCode === q.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = a.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === q.RIGHT && (e.preventDefault(), this.activeChipIndex === a.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < a.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === q.DELETE || e.keyCode === q.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(a[this.activeChipIndex]), r(), o());
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
    clickedItem(e) {
      this.selectItem(e), this.internalResults = [], this.inputRef.focus(), this.strategy.clickedItem();
    },
    selectItem(e) {
      this.strategy.selectItem(e), this.adjustTextArea();
    },
    removeFromValue(e) {
      this.strategy.removeItem(e);
    },
    handleDropdownIconClick() {
      if (this.showMenu) {
        this.forceCloseResults = !0;
        return;
      }
      this.forceCloseResults || this.emitSearch();
    },
    adjustTextArea() {
      const e = this.inputRef;
      !e || (e.style.height = "1.625rem", e.style.flexBasis = "40px", e.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = e.getBoundingClientRect().width, r = e.parentElement;
        e.scrollWidth <= e.clientWidth && r && o < r.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight}px`;
        });
      }));
    }
  },
  setup(e, o) {
    const r = cs(cc(e, "labels"), Kw);
    wi(e), mu(e);
    let a;
    e.gridConfig ? a = BF(e.gridConfig) : a = xF();
    const s = cc(e, "id"), c = Zp(() => s.value ? s.value : ie("feather-autocomplete-input")), { validate: d } = hi(c, cc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: g, allowNew: V, type: N, minChar: R } = nF(e), F = Dr(!1), b = Dr(!1), S = Dr(!1), C = Dr(""), A = Dr([]), W = Dr(), B = Zp(() => W.value), _ = () => {
      F.value && !b.value && (C.value && C.value.length >= R.value && o.emit("search", C.value), R.value <= 0 && o.emit("search", C.value || ""), A.value = [], a.reset());
    }, k = WF({
      selectionLimit: f,
      selectionLimitReached: b,
      modelValue: m,
      textProp: g,
      allowNew: V,
      forceCloseResults: S,
      query: C,
      internalResults: A,
      input: B,
      emitSearch: _
    }, a, N.value, o.emit);
    return KS(Tt(Tt({}, r), pi(o.attrs)), {
      query: C,
      internalResults: A,
      selectionLimitReached: b,
      forceCloseResults: S,
      hasFocus: F,
      strategy: k,
      emitSearch: _,
      active: a.active,
      handleResultNavigation: a.handleKeyPress,
      resetResultIndex: a.reset,
      selectFirst: a.first,
      inputId: c,
      input: W,
      incomingId: s,
      inputRef: B,
      validate: d
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: hu,
    InputSubText: fi,
    AutocompleteResults: uF,
    AutocompleteResultsGrid: gF,
    Chip: kF,
    MenuMessage: NF,
    FeatherIcon: X,
    FeatherMenu: Pw,
    Spinner: FF
  }
}), IF = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, DF = ["id"], OF = { "data-ref-id": "feather-autocomplete-no-results" }, QF = { "data-ref-id": "feather-autocomplete-selection-limit" }, zF = { "data-ref-id": "feather-autocomplete-min-char" };
function GF(e, o, r, a, s, c) {
  const d = Je("FeatherIcon"), f = Je("Chip"), m = Je("InputWrapper"), g = Je("AutocompleteResults"), V = Je("AutocompleteResultsGrid"), N = Je("MenuMessage"), R = Je("Spinner"), F = Je("FeatherMenu"), b = Je("InputSubText");
  return oe(), Ae("div", uc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    at(F, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: hr(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Pe(({ attrs: S, on: C }) => [
        at(m, uc(Tt(Tt({}, S), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Jp(C), { ref: "scroll" }), {
          pre: Pe(() => [
            jc(e.$slots, "pre", {}, () => [
              at(d, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Pe(() => [
            at(d, {
              icon: e.dropdownIcon,
              class: hr(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Pe(() => [
            it("div", {
              class: hr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              it("div", IF, null, 512),
              it("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Ht(e.selectedDescribedByText), 9, DF),
              (oe(!0), Ae(eo, null, Ko(e.modelValueList, (A, W) => ga((oe(), Ft(f, {
                key: A[e.textProp],
                role: "button",
                id: W === e.activeChipIndex ? e.activeChipId : null,
                focused: W === e.activeChipIndex,
                disabled: e.disabled,
                text: A[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(A),
                onDelete: (B) => e.removeFromValue(A)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Ta, !e.singleSelect]
              ])), 128)),
              it("textarea", uc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Jp(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Pe(() => [
        e.gridConfig ? Ct("", !0) : ga((oe(), Ft(g, {
          key: 0,
          items: e.internalResults,
          value: e.modelValue,
          "text-prop": e.textProp,
          activeId: e.resultItemId,
          activeIndex: e.active.row,
          "aria-label": e.label,
          onSelect: e.clickedItem,
          onDeselect: e.removeFromValue,
          class: "autocomplete-results",
          id: e.resultsId,
          single: e.singleSelect,
          "new-label": e.newLabel,
          highlight: e.highlight,
          query: e.query,
          ref: "results"
        }, null, 8, ["items", "value", "text-prop", "activeId", "activeIndex", "aria-label", "onSelect", "onDeselect", "id", "single", "new-label", "highlight", "query"])), [
          [Ta, e.showResults]
        ]),
        e.gridConfig ? ga((oe(), Ft(V, {
          key: 1,
          items: e.internalResults,
          value: e.modelValue,
          "text-prop": e.textProp,
          config: e.gridConfig,
          activeId: e.resultItemId,
          activeRow: e.active.row,
          activeCol: e.active.col,
          "aria-label": e.label,
          onSelect: e.clickedItem,
          class: "autocomplete-results",
          id: e.resultsId,
          single: e.singleSelect,
          highlight: e.highlight,
          query: e.query
        }, null, 8, ["items", "value", "text-prop", "config", "activeId", "activeRow", "activeCol", "aria-label", "onSelect", "id", "single", "highlight", "query"])), [
          [Ta, e.showResults]
        ]) : Ct("", !0),
        e.showNoResults ? (oe(), Ft(N, { key: 2 }, {
          default: Pe(() => [
            it("span", OF, Ht(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Ct("", !0),
        e.showSelectionLimit ? (oe(), Ft(N, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Pe(() => [
            at(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            it("span", QF, Ht(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Ct("", !0),
        e.minChar ? ga((oe(), Ft(N, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Pe(() => [
            at(d, { icon: e.minCharIcon }, null, 8, ["icon"]),
            it("span", zF, [
              jc(e.$slots, "min-char", {}, () => [
                Xw(Ht(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Ta, e.showMinCharWarning]
        ]) : Ct("", !0),
        e.showLoading ? (oe(), Ft(R, { key: 5 })) : Ct("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    at(b, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var YF = /* @__PURE__ */ Vr(_F, [["render", GF], ["__scopeId", "data-v-43a7e951"]]);
const PF = window.Vue.defineComponent, Vn = window.Vue.createElementVNode, An = window.Vue.unref, Cn = window.Vue.createVNode, Ep = window.Vue.withCtx, Ua = window.Vue.toDisplayString, HF = window.Vue.renderList, jF = window.Vue.Fragment, Or = window.Vue.openBlock, Qr = window.Vue.createElementBlock, dc = window.Vue.createCommentVNode, XF = window.Vue.pushScopeId, LF = window.Vue.popScopeId, Ru = (e) => (XF("data-v-e49441df"), e = e(), LF(), e), $F = { class: "list-main" }, qF = { class: "header" }, KF = /* @__PURE__ */ Ru(() => /* @__PURE__ */ Vn("h2", null, "Situation List", -1)), eA = /* @__PURE__ */ Ru(() => /* @__PURE__ */ Vn("span", null, "New Situation", -1)), tA = { class: "filters" }, nA = /* @__PURE__ */ Ru(() => /* @__PURE__ */ Vn("span", null, "Reset Filters", -1)), rA = { class: "autocomplete" }, oA = {
  key: 0,
  class: "container"
}, iA = { class: "situation-list" }, aA = {
  key: 0,
  class: "footer-pager"
}, sA = {
  key: 1,
  class: "container"
}, lA = window.Vue.reactive, Io = window.Vue.ref, cA = window.Vue.watch, uA = window.VueRouter.useRouter, dA = /* @__PURE__ */ PF({
  __name: "SituationList",
  setup(e) {
    const o = uA(), r = Gn();
    r.getSituations(), r.getNodes(), r.getUnassignedAlarms();
    const a = 9, s = lA({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: [],
      filterSeverities: ["all"]
    }), c = Io(!1), d = Io(0), f = Io(1), m = Io(0), g = Io(!1), V = (_) => {
      d.value = 0, s.situations = _[0], f.value = _.length;
    }, N = () => {
      s.nodes = r.nodes, s.results = r.nodes;
    };
    cA(
      () => r.situations,
      () => {
        N(), m.value = r.situations.length, s.allSituations = me.exports.chunk(r.situations, a);
        const _ = r.situations.map((k) => k.id);
        r.filteredSituations = _, V(s.allSituations), R();
      }
    );
    const R = () => {
      r.filters && (r.filters.node && (s.nodeSelectedValue = r.filters.node), r.filters.severities && (s.filterSeverities = r.filters.severities), b(), r.filters = null);
    }, F = (_) => {
      if (!_)
        return s.nodeSelectedValue = void 0, [];
      c.value = !0, s.results = s.nodes.filter((k) => k.label.toLowerCase().indexOf(_) > -1).map((k) => ({
        _text: k.label,
        id: k.id
      })), c.value = !1;
    }, b = () => {
      if (s.nodeSelectedValue && s.nodeSelectedValue._text) {
        let _ = r.situations.map((k) => {
          if (k.relatedAlarms.filter(
            (Q) => {
              var z;
              return Q.nodeLabel === ((z = s.nodeSelectedValue) == null ? void 0 : z._text);
            }
          ).length > 0)
            return k;
        }).filter((k) => k);
        if (_) {
          s.filterSeverities.includes("all") || (_ = _.filter(
            (D) => s.filterSeverities.includes(D.severity)
          )), m.value = _.length, s.situations = _;
          const k = _.map((D) => D.id);
          r.filteredSituations = k, g.value = !0;
        }
      } else if (s.nodeSelectedValue = void 0, s.filterSeverities.includes("all"))
        B();
      else {
        const _ = r.situations.filter(
          (D) => s.filterSeverities.includes(D.severity)
        );
        s.situations = _, m.value = _.length;
        const k = _.map((D) => D.id);
        g.value = !0, r.filteredSituations = k;
      }
    }, S = (_) => {
      d.value = _, s.situations = s.allSituations[d.value];
    }, C = (_) => {
      (s.nodeSelectedValue || s.filterSeverities.length) && (r.filters = {
        node: s.nodeSelectedValue,
        severities: s.filterSeverities
      }), o.push({
        name: "situationDetail",
        params: {
          id: _
        }
      });
    }, A = (_) => {
      _.includes("all") && !s.nodeSelectedValue ? B() : (s.filterSeverities = _, b());
    }, W = () => {
      o.push({
        name: "addSituation"
      });
    }, B = () => {
      s.filterSeverities = ["all"], s.nodeSelectedValue = void 0;
      const _ = r.situations.map((k) => k.id);
      r.filteredSituations = _, m.value = r.situations.length, V(s.allSituations), g.value = !1;
    };
    return (_, k) => (Or(), Qr("div", $F, [
      Vn("div", qF, [
        KF,
        Cn(An(Me), {
          class: "new-situation-btn",
          onClick: k[0] || (k[0] = () => W())
        }, {
          default: Ep(() => [
            Cn(An(X), {
              icon: An(Gw),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            eA
          ]),
          _: 1
        })
      ]),
      Vn("div", tA, [
        Cn(An(Me), {
          class: "reset-btn",
          onClick: k[1] || (k[1] = () => B())
        }, {
          default: Ep(() => [
            Cn(An(X), {
              icon: An(zw),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            nA
          ]),
          _: 1
        }),
        Cn(wu, {
          alarms: An(r).situations,
          onSelectedSeverities: A,
          "pre-selected": s.filterSeverities
        }, null, 8, ["alarms", "pre-selected"]),
        Vn("div", rA, [
          Cn(An(YF), {
            class: "map-search",
            label: "Find by node",
            loading: c.value,
            modelValue: s.nodeSelectedValue,
            "onUpdate:modelValue": [
              k[2] || (k[2] = (D) => s.nodeSelectedValue = D),
              b
            ],
            results: s.results,
            type: "single",
            onSearch: F
          }, null, 8, ["loading", "modelValue", "results"])
        ])
      ]),
      s.situations && s.situations.length > 0 ? (Or(), Qr("div", oA, [
        Vn("div", null, " Result: " + Ua(s.situations.length) + " of " + Ua(m.value), 1),
        Vn("div", iA, [
          (Or(!0), Qr(jF, null, HF(s.situations, (D) => (Or(), Qr("div", {
            class: "card",
            key: D.id
          }, [
            Cn(Aw, {
              onClick: () => C(D.id),
              "situation-info": D
            }, null, 8, ["onClick", "situation-info"])
          ]))), 128))
        ]),
        !g.value && m.value > a ? (Or(), Qr("div", aA, [
          Vn("div", null, "Page: " + Ua(d.value + 1) + " of " + Ua(f.value), 1),
          Cn(w2, {
            onGoToPage: S,
            currentPage: d.value,
            totalPages: f.value
          }, null, 8, ["currentPage", "totalPages"])
        ])) : dc("", !0)
      ])) : dc("", !0),
      !s.situations || s.situations.length == 0 ? (Or(), Qr("div", sA, " No results found ")) : dc("", !0)
    ]));
  }
});
const fA = /* @__PURE__ */ we(dA, [["__scopeId", "data-v-e49441df"]]);
const Na = window.Vue.ref, hA = window.Vue.inject, pA = window.Vue.computed, mA = window.Vue.onMounted, e1 = {
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
}, t1 = (e) => {
  const o = Na(!1), r = Na(), a = Na(e.controls), s = Na(e.id), c = () => {
    r.value && r.value.focus();
  }, d = hA("registerTab");
  mA(() => {
    if (r.value && d) {
      const m = r.value.parentElement, g = m && m.parentElement ? m.parentElement : void 0, V = Array.from(g ? g.children : []).filter((R) => R.querySelectorAll("[role=tab]").length), N = m ? V.indexOf(m) : -1;
      d({
        el: r.value,
        focus: c,
        disabled: e.disabled,
        selected: o,
        id: s,
        controls: a,
        index: N
      });
    }
  });
  const f = pA(() => ({
    role: "tab",
    ref: "tab",
    tabindex: o.value ? 0 : -1,
    id: s.value,
    "aria-selected": o.value,
    "aria-controls": a.value,
    "aria-disabled": e.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: o,
    attrs: f,
    tab: r
  };
}, Sp = window.Vue.ref, wA = window.Vue.toRef, vA = window.Vue.watch, Fp = window.Vue.provide, n1 = {
  prop: "modelValue",
  event: "update:modelValue"
}, r1 = {
  "update:modelValue": (e) => !0
}, o1 = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, i1 = (e, o) => {
  const r = wA(e, "modelValue"), a = Sp(e.modelValue), s = Sp([]);
  vA(r, (b) => {
    m(b);
  });
  const c = (b) => {
    b.preventDefault(), s.value.some((S, C) => S.tab && S.tab.el.contains(b.target) ? (f(C), m(C), !0) : !1);
  }, d = (b) => {
    if (((z) => z.shiftKey || z.ctrlKey || z.metaKey || z.altKey)(b))
      return;
    const C = b.keyCode, A = (z) => {
      z.stopPropagation(), z.preventDefault();
    }, W = s.value.filter((z) => z.tab && !z.tab.disabled), B = s.value.findIndex((z) => z.tab && z.tab.el.contains(document.activeElement));
    let _ = B !== -1 ? B : a.value;
    const k = [q.RIGHT], D = [q.LEFT], Q = [q.ENTER, q.SPACE];
    e.vertical && (k.push(q.DOWN), D.push(q.UP)), k.indexOf(C) > -1 ? (_++, _ >= W.length && (_ = 0), A(b), f(s.value.indexOf(W[_]))) : D.indexOf(C) > -1 && (_--, _ < 0 && (_ = W.length - 1), A(b), f(s.value.indexOf(W[_]))), Q.indexOf(C) > -1 && m(_);
  }, f = (b) => {
    s.value.forEach(function(S, C) {
      b === C && S.tab && S.tab.focus();
    });
  }, m = (b) => {
    const S = s.value[b];
    !S || S.tab && S.tab.disabled || (s.value.forEach((C, A) => {
      C.tab && (C.tab.selected = b === A), C.panel && (C.panel.selected = b === A);
    }), a.value = b, o.emit("update:modelValue", b));
  };
  Fp("registerTab", (b) => {
    const S = b.index;
    S > -1 && (s.value[S] = { ...s.value[S], tab: b }, s.value = [...s.value], N());
  }), Fp("registerPanel", (b) => {
    const S = b.index;
    S > -1 && (s.value[S] = {
      ...s.value[S],
      panel: b
    }, s.value = [...s.value], N());
  });
  const N = () => {
    s.value.forEach(({ tab: b, panel: S }, C) => {
      if (S && b) {
        const A = b.id || ie("tab"), W = b.controls || ie("panel");
        b.controls = W, b.id = A, S.tab = A, S.id = W;
      }
      C === a.value && (S && (S.selected = !0), b && (b.selected = !0));
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
    pairs: s
  };
}, Ra = window.Vue.ref, VA = window.Vue.inject, gA = window.Vue.computed, TA = window.Vue.onMounted, a1 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, s1 = (e) => {
  const o = Ra(!1), r = Ra(), a = Ra(e.tab), s = Ra(e.id), c = VA("registerPanel");
  TA(() => {
    if (c) {
      const f = r.value, m = f && f.parentElement ? f.parentElement : void 0, g = f ? Array.from(m ? m.children : []).indexOf(f) : -1;
      c({
        selected: o,
        id: s,
        tab: a,
        el: r.value,
        index: g
      });
    }
  });
  const d = gA(() => ({
    role: "tabpanel",
    id: s.value,
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
}, yu = window.Vue.defineComponent, UA = window.Vue.resolveComponent, ku = window.Vue.openBlock, Mu = window.Vue.createElementBlock, ei = window.Vue.createElementVNode, l1 = window.Vue.mergeProps, es = window.Vue.renderSlot, NA = window.Vue.createVNode, RA = window.Vue.normalizeStyle, yA = window.Vue.toHandlers, kA = window.Vue.withDirectives, MA = window.Vue.normalizeProps, bA = window.Vue.guardReactiveProps, ZA = window.Vue.vShow;
var bu = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const JA = e1, EA = yu({
  props: JA,
  setup(e) {
    return t1(e);
  },
  components: {
    FeatherRipple: zn
  }
}), SA = { role: "presentation" }, FA = { class: "tab-text" };
function AA(e, o, r, a, s, c) {
  const d = UA("FeatherRipple");
  return ku(), Mu("li", SA, [
    ei("button", l1(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      ei("span", FA, [
        es(e.$slots, "default", {}, void 0, !0)
      ]),
      NA(d)
    ], 16)
  ]);
}
var Ap = /* @__PURE__ */ bu(EA, [["render", AA], ["__scopeId", "data-v-e6bb52b6"]]);
const CA = o1, WA = r1, xA = yu({
  model: n1,
  emits: WA,
  props: CA,
  setup(e, o) {
    return i1(e, o);
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
      handler(e) {
        e && e.length && this.ro && e.forEach((o) => {
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
        const e = this.$el.getBoundingClientRect(), o = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = o.left - e.left, a = o.height - 2;
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
}), BA = { class: "feather-tab-container" }, _A = { class: "tab-panels" };
function IA(e, o, r, a, s, c) {
  return ku(), Mu("div", BA, [
    ei("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: RA({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    ei("ul", l1(e.attrs, yA(e.listeners)), [
      es(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    ei("div", _A, [
      es(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var DA = /* @__PURE__ */ bu(xA, [["render", IA], ["__scopeId", "data-v-27adffb9"]]);
const OA = a1, QA = yu({
  props: OA,
  setup(e) {
    return s1(e);
  }
});
function zA(e, o, r, a, s, c) {
  return kA((ku(), Mu("div", MA(bA(e.attrs)), [
    es(e.$slots, "default")
  ], 16)), [
    [ZA, e.selected]
  ]);
}
var Cp = /* @__PURE__ */ bu(QA, [["render", zA]]);
const GA = window.Vue.defineComponent, YA = window.Vue.toDisplayString, PA = window.Vue.normalizeClass, HA = window.Vue.openBlock, jA = window.Vue.createElementBlock, XA = window.Vue.createCommentVNode, LA = /* @__PURE__ */ GA({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, a) => o != null && o.severity ? (HA(), jA("span", {
      key: 0,
      class: PA(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, YA(o.severity), 3)) : XA("", !0);
  }
});
const c1 = /* @__PURE__ */ we(LA, [["__scopeId", "data-v-83c2cdce"]]), $A = window.Vue.defineComponent, Wp = window.Vue.toDisplayString, xp = window.Vue.createElementVNode, qA = window.Vue.openBlock, KA = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const eC = { class: "box" }, tC = { class: "label" }, nC = { class: "date" }, rC = /* @__PURE__ */ $A({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, a) => (qA(), KA("div", eC, [
      xp("div", tC, Wp(o.label), 1),
      xp("div", nC, Wp(o.info), 1)
    ]));
  }
});
const fc = /* @__PURE__ */ we(rC, [["__scopeId", "data-v-b4afa751"]]), Zu = "/alec", oC = "/alec/engine/configuration", u1 = "/alec/agreement/configuration", iC = "/alec/situation", d1 = async (e) => {
  try {
    return (await nn.post(`${u1}`, {
      agreed: e
    })).status === 201;
  } catch {
    return !1;
  }
}, aC = async () => {
  try {
    const e = await nn.get(`${u1}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, sC = async (e, o) => {
  try {
    return (await nn.post(oC, {
      distanceMeasureName: o ? Vt.HELLINGER_OPTION : Vt.SPACE_DISTANCE_OPTION,
      engineName: e,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, f1 = async (e, o) => {
  try {
    return (await nn.post(`${Zu}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Bp = async (e, o) => {
  try {
    return (await nn.delete(`${Zu}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, lC = async (e, o) => {
  try {
    return (await nn.put(`${Zu}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, cC = async (e) => {
  try {
    return (await nn.post(iC, e)).status === 200;
  } catch {
    return !1;
  }
}, uC = window.Vue.defineComponent, dC = window.Vue.unref, fC = window.Vue.renderList, hC = window.Vue.Fragment, hc = window.Vue.openBlock, pc = window.Vue.createElementBlock, pC = window.Vue.toDisplayString, mC = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const wC = { class: "alarms-list" }, vC = /* @__PURE__ */ uC({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, a) => (hc(), pc("div", wC, [
      (hc(!0), pc(hC, null, fC(dC(me.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (s, c) => (hc(), pc("div", {
        class: mC(["alarm-count", [`${c.toString().toLowerCase()}-color`, o.size]]),
        key: c
      }, pC(s.length), 3))), 128))
    ]));
  }
});
const VC = /* @__PURE__ */ we(vC, [["__scopeId", "data-v-52d63440"]]), gC = window.Vue.openBlock, TC = window.Vue.createElementBlock, UC = window.Vue.createElementVNode;
var NC = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const RC = {}, yC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kC = /* @__PURE__ */ UC("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), MC = [
  kC
];
function bC(e, o) {
  return gC(), TC("svg", yC, MC);
}
var ZC = /* @__PURE__ */ NC(RC, [["render", bC]]);
const JC = window.Vue.openBlock, EC = window.Vue.createElementBlock, SC = window.Vue.createStaticVNode;
var FC = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const AC = {}, CC = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WC = /* @__PURE__ */ SC('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), xC = [
  WC
];
function BC(e, o) {
  return JC(), EC("svg", CC, xC);
}
var h1 = /* @__PURE__ */ FC(AC, [["render", BC]]);
const _C = window.Vue.defineComponent, Gt = window.Vue.unref, mc = window.Vue.createVNode, Ju = window.Vue.createElementVNode, wc = window.Vue.withCtx, ya = window.Vue.openBlock, vc = window.Vue.createBlock, Vc = window.Vue.createCommentVNode, IC = window.Vue.normalizeClass, DC = window.Vue.createElementBlock, OC = window.Vue.pushScopeId, QC = window.Vue.popScopeId, Eu = (e) => (OC("data-v-15b8b2ae"), e = e(), QC(), e), zC = /* @__PURE__ */ Eu(() => /* @__PURE__ */ Ju("span", null, "Acknowledge", -1)), GC = /* @__PURE__ */ Eu(() => /* @__PURE__ */ Ju("span", null, "Escalate", -1)), YC = /* @__PURE__ */ Eu(() => /* @__PURE__ */ Ju("span", null, "Clear", -1)), PC = /* @__PURE__ */ _C({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = Gn(), a = async (c) => {
      await lk(o.alarm.id, c) && r.getSituation(o.situationId), o.isSituation && await f1(
        o.situationId,
        Vt.ACCEPTED.toLowerCase()
      );
    }, s = async (c) => {
      await ck(o.alarm.id, c) && r.getSituation(o.situationId);
    };
    return (c, d) => (ya(), DC("div", {
      class: IC(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Vc("", !0) : (ya(), vc(Gt(Me), {
        key: 0,
        class: "acction-btn",
        onClick: d[0] || (d[0] = () => a(!0))
      }, {
        default: wc(() => [
          mc(Gt(X), {
            icon: Gt(ci),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          zC
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (ya(), vc(Gt(Me), {
        key: 1,
        class: "acction-btn",
        onClick: d[1] || (d[1] = () => s(Gt(Vt).ESCALATE))
      }, {
        default: wc(() => [
          mc(Gt(X), {
            icon: Gt(ZC),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          GC
        ]),
        _: 1
      })) : Vc("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (ya(), vc(Gt(Me), {
        key: 2,
        class: "acction-btn",
        onClick: d[2] || (d[2] = () => s(Gt(Vt).CLEAR))
      }, {
        default: wc(() => [
          mc(Gt(X), {
            icon: Gt(h1),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          YC
        ]),
        _: 1
      })) : Vc("", !0)
    ], 2));
  }
});
const p1 = /* @__PURE__ */ we(PC, [["__scopeId", "data-v-15b8b2ae"]]);
var HC = Object.defineProperty, jC = Object.defineProperties, XC = Object.getOwnPropertyDescriptors, _p = Object.getOwnPropertySymbols, LC = Object.prototype.hasOwnProperty, $C = Object.prototype.propertyIsEnumerable, Ip = (e, o, r) => o in e ? HC(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Xc = (e, o) => {
  for (var r in o || (o = {}))
    LC.call(o, r) && Ip(e, r, o[r]);
  if (_p)
    for (var r of _p(o))
      $C.call(o, r) && Ip(e, r, o[r]);
  return e;
}, m1 = (e, o) => jC(e, XC(o));
const w1 = window.Vue.defineComponent, qC = window.Vue.inject, KC = window.Vue.resolveComponent, gc = window.Vue.openBlock, Dp = window.Vue.createElementBlock, $r = window.Vue.createElementVNode, eW = window.Vue.createBlock, Op = window.Vue.createCommentVNode, tW = window.Vue.renderSlot, nW = window.Vue.pushScopeId, rW = window.Vue.popScopeId, Tc = window.Vue.toRef, ka = window.Vue.computed, oW = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var iW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const aW = {
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
}, sW = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, lW = w1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: sW,
  props: aW,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: qC("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ie("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ie("checkbox-label");
    }
  },
  watch: {
    indeterminate: {
      handler(e) {
        this.$emit("update:modelValue", void 0), this.$emit("indeterminate", e);
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
    click(e) {
      this.focus(), this.updateValue(), this.$emit("click", e);
    },
    keydown(e) {
      (e.keyCode === q.SPACE || e.keyCode === q.ENTER) && this.updateValue(), e.keyCode === q.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: zn
  }
}), cW = (e) => (nW("data-v-a7af27e2"), e = e(), rW(), e), uW = { class: "layout-container" }, dW = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], fW = { class: "checkbox hover focus" }, hW = /* @__PURE__ */ cW(() => /* @__PURE__ */ $r("div", { class: "box" }, [
  /* @__PURE__ */ $r("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ $r("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ $r("div", { class: "indeterminate" })
], -1)), pW = ["id", "for"];
function mW(e, o, r, a, s, c) {
  const d = KC("feather-ripple");
  return gc(), Dp("div", uW, [
    $r("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: o[0] || (o[0] = (...f) => e.click && e.click(...f)),
      onKeydown: o[1] || (o[1] = (...f) => e.keydown && e.keydown(...f)),
      "aria-checked": e.modelValue ? "true" : e.indeterminate ? "mixed" : "false",
      "aria-disabled": e.disabled,
      "aria-labelledby": e.labelId,
      "aria-label": e.label,
      id: e.inputId,
      tabindex: e.noFocus ? -1 : 0,
      ref: "input",
      role: "checkbox",
      "data-ref-id": "feather-checkbox"
    }, [
      $r("div", fW, [
        hW,
        e.disabled ? Op("", !0) : (gc(), eW(d, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Op("", !0) : (gc(), Dp("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        tW(e.$slots, "default", {}, void 0, !0)
      ], 8, pW))
    ], 40, dW)
  ]);
}
var ws = /* @__PURE__ */ iW(lW, [["render", mW], ["__scopeId", "data-v-a7af27e2"]]);
const wW = m1(Xc({}, mi), {
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
w1({
  props: wW,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    wi(e);
    const r = Tc(e, "error"), a = ka(() => ie("feather-checkbox-group")), s = ka(() => ie("feather-input-description")), c = ka(() => ie("feather-input-label")), d = ka(() => {
      const V = JSON.parse(JSON.stringify(o.attrs));
      return V["aria-invalid"] || (V["aria-invalid"] = !!r.value), m1(Xc({}, V), {
        class: "",
        "aria-describedby": s.value
      });
    }), f = oW(a.value), { validate: m } = hi(f, Tc(e, "modelValue"), e.label, e.schema, Tc(e, "error"));
    return Xc({
      groupId: a,
      inputId: f,
      descriptionId: s,
      labelId: c,
      attrs: d,
      validate: m,
      registerCheckbox: (V) => {
        V && f.value === a.value && (f.value = V);
      }
    }, pi(o.attrs));
  },
  components: {
    InputSubText: fi
  }
});
const vW = window.Vue.openBlock, VW = window.Vue.createElementBlock, v1 = window.Vue.createElementVNode;
var gW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const TW = {}, UW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NW = /* @__PURE__ */ v1("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), RW = /* @__PURE__ */ v1("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), yW = [
  NW,
  RW
];
function kW(e, o) {
  return vW(), VW("svg", UW, yW);
}
var MW = /* @__PURE__ */ gW(TW, [["render", kW]]);
var bW = Object.defineProperty, ZW = Object.defineProperties, JW = Object.getOwnPropertyDescriptors, Qp = Object.getOwnPropertySymbols, EW = Object.prototype.hasOwnProperty, SW = Object.prototype.propertyIsEnumerable, zp = (e, o, r) => o in e ? bW(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, qr = (e, o) => {
  for (var r in o || (o = {}))
    EW.call(o, r) && zp(e, r, o[r]);
  if (Qp)
    for (var r of Qp(o))
      SW.call(o, r) && zp(e, r, o[r]);
  return e;
}, V1 = (e, o) => ZW(e, JW(o));
const FW = window.Vue.defineComponent, Uc = window.Vue.toRef, AW = window.Vue.computed, Gp = window.Vue.resolveComponent, Yp = window.Vue.openBlock, Pp = window.Vue.createElementBlock, Hp = window.Vue.mergeProps, jp = window.Vue.createVNode, CW = window.Vue.normalizeClass, Xp = window.Vue.withCtx, WW = window.Vue.createElementVNode, xW = window.Vue.toDisplayString, BW = window.Vue.createCommentVNode;
var _W = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const IW = V1(qr(qr({}, pu), mi), {
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
}), DW = {
  "update:modelValue": (e) => !0
}, OW = FW({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: DW,
  props: IW,
  setup(e, o) {
    wi(e), mu(e);
    const r = Uc(e, "id"), a = AW(() => r.value ? r.value : ie("feather-textarea-label")), { validate: s } = hi(a, Uc(e, "modelValue"), e.label, e.schema, Uc(e, "error"));
    return qr({
      inputId: a,
      incomingId: r,
      validate: s
    }, pi(o.attrs));
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
      return ie("feather-textarea-description");
    },
    showClear() {
      return !!(this.internalValue && this.internalValue.length > 0);
    },
    contentCls() {
      const e = [];
      return this.error && e.push("error"), this.disabled && e.push("disabled"), this.focused && e.push("focused"), e;
    },
    isRaised() {
      return !!(this.internalValue || this.focused);
    },
    attrs() {
      const e = qr({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), V1(qr(qr({}, e), this.listeners), {
        class: "",
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (e["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      });
    },
    listeners() {
      return {
        onFocus: (e) => {
          this.handleFocus(), this.$attrs.onFocus && this.$attrs.onFocus(e);
        },
        onBlur: (e) => {
          this.handleBlur(), this.$attrs.onBlur && this.$attrs.onBlur(e);
        },
        onInput: (e) => {
          this.adjustTextArea(), this.handleInput(e);
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
      handler(e) {
        this.adjustTextArea(), this.internalValue = e;
      }
    },
    internalValue: {
      immediate: !0,
      handler(e) {
        this.$emit("update:modelValue", e);
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
    handleInput(e) {
      this.internalValue = e.target.value, this.$emit("update:modelValue", this.internalValue);
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    adjustTextArea() {
      if (!this.auto)
        return;
      const e = this.$refs.input;
      !e || (e.style.height = "12px", e.style.flexBasis = "40px", e.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = e.getBoundingClientRect().width;
        e.scrollWidth <= e.clientWidth && o < e.parentElement.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight < this.initialHeight ? this.initialHeight : e.scrollHeight}px`;
        });
      }));
    }
  },
  mounted() {
    const e = this.$refs.input;
    this.initialHeight = e.getBoundingClientRect().height;
  },
  components: {
    InputSubText: fi,
    InputWrapper: hu
  }
}), QW = ["maxlength"], zW = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function GW(e, o, r, a, s, c) {
  const d = Gp("InputWrapper"), f = Gp("InputSubText");
  return Yp(), Pp("div", Hp(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    jp(d, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: CW(["feather-textarea-content", e.contentCls])
    }, {
      default: Xp(() => [
        WW("textarea", Hp(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, QW)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    jp(f, { id: e.descriptionId }, {
      right: Xp(() => [
        e.maxlength ? (Yp(), Pp("div", zW, xW(e.charCount), 1)) : BW("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Lc = /* @__PURE__ */ _W(OW, [["render", GW], ["__scopeId", "data-v-0648df5c"]]);
const YW = window.Pinia.defineStore, vs = YW("appStore", {
  state: () => ({
    showError: !1,
    errorMessage: ""
  }),
  actions: {
    showErrorMsg(e) {
      this.showError = !0, this.errorMessage = e, setTimeout(() => {
        this.showError = !1, this.errorMessage = "";
      }, 1800);
    }
  }
}), PW = window.Vue.defineComponent, Lp = window.Vue.toDisplayString, Do = window.Vue.createElementVNode, ir = window.Vue.unref, zr = window.Vue.openBlock, $p = window.Vue.createBlock, Oo = window.Vue.createCommentVNode, qp = window.Vue.createVNode, Ma = window.Vue.createElementBlock, HW = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const jW = { class: "row" }, XW = { class: "label" }, LW = { class: "action-icons" }, $W = { class: "icon-btn" }, qW = {
  key: 0,
  class: "icon-btn"
}, KW = {
  key: 1,
  class: "icon-btn"
}, ex = {
  key: 0,
  class: "text"
}, tx = window.Vue.watch, Kp = window.Vue.ref, nx = /* @__PURE__ */ PW({
  __name: "MemoBox",
  props: {
    id: null,
    label: null,
    memo: null,
    type: null,
    situationId: null,
    boxType: null
  },
  setup(e) {
    var m;
    const o = e, r = vs(), a = Kp(!1), s = Kp((m = o.memo) == null ? void 0 : m.body);
    tx(o, () => {
      var g;
      s.value = (g = o.memo) == null ? void 0 : g.body, a.value = !1;
    });
    const c = () => {
      a.value = !a.value;
    }, d = async () => {
      a.value = !1, await wk(o.id, o.type) ? s.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      a.value = !1, s.value && s.value !== "" && (await mk(o.id, o.type, s.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (g, V) => (zr(), Ma("div", {
      class: HW([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Do("div", jW, [
        Do("div", XW, Lp(e.label), 1),
        Do("div", LW, [
          Do("div", $W, [
            a.value ? Oo("", !0) : (zr(), $p(ir(X), {
              key: 0,
              icon: ir(MW),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: c
            }, null, 8, ["icon"]))
          ]),
          a.value ? (zr(), Ma("div", qW, [
            qp(ir(X), {
              icon: ir(ci),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Oo("", !0),
          s.value && s.value != "" || a.value ? (zr(), Ma("div", KW, [
            qp(ir(X), {
              icon: ir(io),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: d
            }, null, 8, ["icon"])
          ])) : Oo("", !0)
        ])
      ]),
      Do("div", null, [
        !a.value && s.value != null ? (zr(), Ma("div", ex, Lp(s.value), 1)) : Oo("", !0),
        a.value ? (zr(), $p(ir(Lc), {
          key: 1,
          class: "textarea",
          modelValue: s.value,
          "onUpdate:modelValue": V[0] || (V[0] = (N) => s.value = N),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Oo("", !0)
      ])
    ], 2));
  }
});
const ts = /* @__PURE__ */ we(nx, [["__scopeId", "data-v-3f44e250"]]), rx = window.Vue.defineComponent, Qo = window.Vue.unref, Gr = window.Vue.createVNode, ba = window.Vue.toDisplayString, vn = window.Vue.createElementVNode, em = window.Vue.openBlock, tm = window.Vue.createElementBlock, nm = window.Vue.createCommentVNode, rm = window.Vue.createTextVNode, ox = window.Vue.pushScopeId, ix = window.Vue.popScopeId, g1 = (e) => (ox("data-v-20ae7fb0"), e = e(), ix(), e), ax = {
  key: 0,
  class: "card"
}, sx = { class: "row" }, lx = { class: "title" }, cx = {
  key: 0,
  class: "ack"
}, ux = ["innerHTML"], dx = /* @__PURE__ */ g1(() => /* @__PURE__ */ vn("strong", null, "First Event", -1)), fx = /* @__PURE__ */ g1(() => /* @__PURE__ */ vn("strong", null, "Last Event", -1)), hx = { class: "section memo-boxes" }, om = window.Vue.ref, px = window.Vue.watch, mx = /* @__PURE__ */ rx({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, a = om(!1), s = om(r.alarm);
    px(r, () => {
      s.value = r.alarm, a.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, d = async (f) => {
      const m = await Rw(f);
      m && (s.value = m);
    };
    return (f, m) => {
      var g, V, N, R, F;
      return s.value ? (em(), tm("div", ax, [
        vn("div", null, [
          vn("div", sx, [
            Gr(Qo(ws), {
              modelValue: a.value,
              "onUpdate:modelValue": [
                m[0] || (m[0] = (b) => a.value = b),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            vn("div", lx, ba(s.value.nodeLabel) + " - " + ba(s.value.id), 1),
            Gr(c1, {
              severity: (g = s.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"]),
            s.value.ackTime ? (em(), tm("div", cx, [
              Gr(Qo(X), {
                icon: Qo(ci),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : nm("", !0)
          ]),
          vn("div", {
            class: "description",
            innerHTML: s.value.description
          }, null, 8, ux),
          vn("div", null, [
            dx,
            rm(" - " + ba(Qo(en)(s.value.firstEventTime)), 1)
          ]),
          vn("div", null, [
            fx,
            rm(" - " + ba(Qo(en)(s.value.lastEventTime)), 1)
          ]),
          vn("div", hx, [
            Gr(ts, {
              id: (V = s.value) == null ? void 0 : V.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (N = s.value) == null ? void 0 : N.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Gr(ts, {
              id: (R = s.value) == null ? void 0 : R.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (F = s.value) == null ? void 0 : F.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Gr(p1, {
          alarm: s.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: d
        }, null, 8, ["alarm", "situation-id"])
      ])) : nm("", !0);
    };
  }
});
const wx = /* @__PURE__ */ we(mx, [["__scopeId", "data-v-20ae7fb0"]]), vx = window.Vue.openBlock, Vx = window.Vue.createElementBlock, T1 = window.Vue.createElementVNode;
var gx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const Tx = {}, Ux = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Nx = /* @__PURE__ */ T1("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), Rx = /* @__PURE__ */ T1("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), yx = [
  Nx,
  Rx
];
function kx(e, o) {
  return vx(), Vx("svg", Ux, yx);
}
var Mx = /* @__PURE__ */ gx(Tx, [["render", kx]]);
const bx = window.Vue.watch, Zx = window.Vue.ref, Jx = window.Vue.onBeforeUnmount, U1 = (e) => {
  const o = Zx(!1), r = (a) => {
    a.keyCode === q.ESCAPE && (a.preventDefault(), o.value = !o.value);
  };
  return bx(e, (a) => {
    a ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), Jx(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, Ex = window.Vue.watch, N1 = (e) => {
  let o;
  Ex(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, R1 = window.Vue.watch, y1 = window.Vue.onBeforeUnmount, k1 = window.Vue.nextTick, Sx = window.Vue.onMounted, M1 = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, ns = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, b1 = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  y1(() => ns(o, r)), Sx(() => R1(e, (a) => {
    a ? k1(() => {
      o = M1(r);
    }) : ns(o, r);
  }, { immediate: !0 }));
}, Fx = (e, o) => {
  let r;
  y1(() => ns(r, o.value ? o.value.offsetParent : !1)), R1([e, o], ([a, s]) => {
    a && s ? k1(() => {
      r = M1(s.offsetParent);
    }) : s && ns(r, s.offsetParent);
  }, {
    immediate: !0
  });
};
var Ax = Object.defineProperty, im = Object.getOwnPropertySymbols, Cx = Object.prototype.hasOwnProperty, Wx = Object.prototype.propertyIsEnumerable, am = (e, o, r) => o in e ? Ax(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, xx = (e, o) => {
  for (var r in o || (o = {}))
    Cx.call(o, r) && am(e, r, o[r]);
  if (im)
    for (var r of im(o))
      Wx.call(o, r) && am(e, r, o[r]);
  return e;
};
const Su = window.Vue.defineComponent, ti = window.Vue.ref, Bx = window.Vue.nextTick, Z1 = window.Vue.openBlock, J1 = window.Vue.createElementBlock, Fu = window.Vue.createElementVNode, _x = window.Vue.renderSlot, Ix = window.Vue.resolveComponent, Dx = window.Vue.normalizeClass, Ox = window.Vue.withModifiers, Qx = window.Vue.createVNode, sm = window.Vue.toRef, lm = window.Vue.computed, cm = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var E1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const zx = {
  enable: {
    type: Boolean,
    required: !0
  }
}, Gx = Su({
  props: zx,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = ti(), o = ti(!1), r = (V, N) => {
      let R = V.compareDocumentPosition(N);
      if (R === 2)
        return "before";
      if (R === 4)
        return "after";
      if (R === 10 || R === 12)
        return "parent";
    }, a = (V) => {
      for (var N = 0; N < V.childNodes.length; N++) {
        var R = V.childNodes[N];
        if (c(R) || a(R))
          return !0;
      }
      return !1;
    }, s = (V) => {
      for (var N = V.childNodes.length - 1; N >= 0; N--) {
        var R = V.childNodes[N];
        if (c(R) || s(R))
          return !0;
      }
      return !1;
    }, c = (V) => d(V) ? (o.value = !0, V.focus && V.focus(), o.value = !1, document.activeElement === V) : !1, d = (V) => {
      if (V.tabIndex > 0 || V.tabIndex === 0 && V.getAttribute("tabIndex") !== null)
        return !0;
      const N = V;
      if (N.disabled || N.tabIndex === -1)
        return !1;
      switch (V.nodeName) {
        case "A":
          const R = V;
          return !!R.href && R.rel !== "ignore";
        case "INPUT":
          const F = V;
          return F.type !== "hidden" && F.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (V) => {
      const N = V.querySelector("[first-focus]");
      N && N.focus ? Bx(() => {
        N.focus();
      }) : a(V);
    }, m = ti();
    return {
      trapFocus: () => {
        o.value || setTimeout(() => {
          var V = document.activeElement;
          if (e.value.contains(V)) {
            m.value = V;
            return;
          } else {
            switch (r(e.value, V)) {
              case "before":
                s(e.value);
                break;
              case "after":
                a(e.value);
                break;
              case "parent":
                f(e.value);
                break;
            }
            m.value = document.activeElement;
          }
        }, 0);
      },
      content: e,
      ignoreUtilFocusChanges: o,
      attemptToFocusFirst: f,
      focusLastDescendant: s,
      focusFirstDescendant: a,
      isFocusable: d,
      lastFocus: m
    };
  },
  computed: {
    ready() {
      return this.rendered && this.enable;
    }
  },
  watch: {
    ready: {
      immediate: !0,
      handler: "enableTrap"
    }
  },
  methods: {
    enableTrap(e) {
      e ? this.addFocusTrapEvents() : this.removeFocusTrapEvents();
    },
    addFocusTrapEvents() {
      document.addEventListener("blur", this.trapFocus, !0), this.content ? this.attemptToFocusFirst(this.content) : this.$nextTick(() => {
        this.content && this.attemptToFocusFirst(this.content);
      });
    },
    removeFocusTrapEvents() {
      typeof document < "u" && document.removeEventListener("blur", this.trapFocus, !0);
    }
  },
  mounted() {
    this.rendered = !0;
  },
  beforeUnmount() {
    this.removeFocusTrapEvents();
  }
}), Yx = /* @__PURE__ */ Fu("div", { tabindex: "0" }, null, -1), Px = {
  class: "focus-trap-content",
  ref: "content"
}, Hx = /* @__PURE__ */ Fu("div", { tabindex: "0" }, null, -1);
function jx(e, o, r, a, s, c) {
  return Z1(), J1("div", null, [
    Yx,
    Fu("div", Px, [
      _x(e.$slots, "default")
    ], 512),
    Hx
  ]);
}
var S1 = /* @__PURE__ */ E1(Gx, [["render", jx]]);
const Xx = Su({
  emits: ["close"],
  props: {
    closeText: {
      type: String,
      required: !0
    },
    small: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    icon: () => io
  },
  components: {
    FeatherIcon: X
  }
}), Lx = ["aria-label"];
function $x(e, o, r, a, s, c) {
  const d = Ix("FeatherIcon");
  return Z1(), J1("a", {
    href: "#",
    class: Dx(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = Ox((f) => e.$emit("close"), ["prevent"]))
  }, [
    Qx(d, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, Lx);
}
var F1 = /* @__PURE__ */ E1(Xx, [["render", $x], ["__scopeId", "data-v-fc0f3f00"]]);
const A1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, qx = {
  modelValue: {
    type: Boolean
  },
  relative: {
    type: Boolean,
    default: !1
  },
  hideTitle: {
    type: Boolean,
    default: !1
  },
  hideClose: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object,
    default: () => A1,
    validator: (e) => !!e.title
  }
}, Kx = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Su({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Kx,
  props: qx,
  setup(e, o) {
    const r = cs(sm(e, "labels"), A1), a = sm(e, "modelValue"), s = ti(), c = () => {
      o.emit("update:modelValue", !1);
    }, d = lm(() => !!o.slots.footer), f = lm(() => ie("dialog-header"));
    e.relative ? Fx(a, s) : b1(a), N1(a), cm(U1(a), () => {
      c();
    });
    const m = ti(e.modelValue);
    return cm(m, (g) => {
      g ? o.emit("shown") : o.emit("hidden");
    }), xx({ close: c, hasFooter: d, headerId: f, element: s, shown: m }, r);
  },
  components: {
    FocusTrap: S1,
    DialogClose: F1
  }
});
var eB = Object.defineProperty, um = Object.getOwnPropertySymbols, tB = Object.prototype.hasOwnProperty, nB = Object.prototype.propertyIsEnumerable, dm = (e, o, r) => o in e ? eB(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Vs = (e, o) => {
  for (var r in o || (o = {}))
    tB.call(o, r) && dm(e, r, o[r]);
  if (um)
    for (var r of um(o))
      nB.call(o, r) && dm(e, r, o[r]);
  return e;
};
const gs = window.Vue.defineComponent, fm = window.Vue.toRef, hm = window.Vue.watch, pm = window.Vue.ref, mm = window.Vue.resolveComponent, Za = window.Vue.openBlock, wm = window.Vue.createBlock, rB = window.Vue.Teleport, vm = window.Vue.createElementBlock, Nc = window.Vue.createVNode, Vm = window.Vue.Transition, Rc = window.Vue.withCtx, gm = window.Vue.createCommentVNode, oB = window.Vue.withDirectives, iB = window.Vue.normalizeStyle, aB = window.Vue.normalizeClass, Tm = window.Vue.createElementVNode, sB = window.Vue.renderSlot, lB = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var cB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const C1 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, uB = {
  modelValue: {
    type: Boolean,
    default: !1,
    required: !0
  },
  width: {
    type: String,
    default: "auto",
    validator: (e) => e === "auto" ? !0 : /(\d*)(px|%|em|vw)/.test(e)
  },
  left: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object,
    default: () => C1,
    validator: (e) => !!e.title
  }
}, dB = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, fB = gs({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: dB,
  props: uB,
  setup(e, o) {
    const r = cs(fm(e, "labels"), C1), a = fm(e, "modelValue"), s = () => {
      o.emit("update:modelValue", !1);
    };
    b1(a), N1(a), hm(U1(a), () => {
      s();
    });
    const c = pm(), d = pm(!1);
    return hm(d, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), Vs({ close: s, shown: d, isShown: a, element: c }, r);
  },
  components: {
    DialogClose: F1,
    FocusTrap: S1
  }
}), hB = {
  key: 0,
  class: "drawer-container feather-styles"
}, pB = {
  key: 0,
  class: "greyedOut"
}, mB = ["aria-label"], wB = { class: "slot" };
function vB(e, o, r, a, s, c) {
  const d = mm("dialog-close"), f = mm("focus-trap");
  return Za(), wm(rB, { to: "body" }, [
    e.modelValue ? (Za(), vm("div", hB, [
      Nc(Vm, { name: "greyOutShim" }, {
        default: Rc(() => [
          e.modelValue ? (Za(), vm("div", pB)) : gm("", !0)
        ]),
        _: 1
      }),
      Nc(Vm, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (m) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (m) => e.shown = !1)
      }, {
        default: Rc(() => [
          oB((Za(), wm(f, {
            enable: e.modelValue,
            style: iB({ width: e.width }),
            key: "sect",
            class: aB(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Rc(() => [
              Tm("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Tm("div", wB, [
                  sB(e.$slots, "default", {}, void 0, !0)
                ]),
                Nc(d, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, mB)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [lB, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : gm("", !0)
  ]);
}
var VB = /* @__PURE__ */ cB(fB, [["render", vB], ["__scopeId", "data-v-0a36e1dc"]]);
const gB = Vs({
  label: {
    type: String,
    required: !0
  }
}, e1);
gs({
  name: "DrawerTab",
  props: gB,
  data() {
    return {
      showLabel: !1,
      showLabelTimeout: 0
    };
  },
  watch: {
    selected(e) {
      e && this.mouseLeave();
    }
  },
  methods: {
    mouseEnter() {
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = mr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      wr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return t1(e);
  },
  components: {
    FeatherRipple: zn
  }
});
const TB = Vs({}, o1), UB = r1;
gs({
  emits: UB,
  model: n1,
  props: TB,
  setup(e, o) {
    return i1(e, o);
  }
});
const NB = Vs({
  header: {
    type: String
  }
}, a1);
gs({
  name: "DrawerTabContent",
  props: NB,
  setup(e) {
    return s1(e);
  },
  directives: {
    MenuFocusLoop: OE
  }
});
const RB = window.Vue.defineComponent, $c = window.Vue.createElementVNode, Um = window.Vue.unref, yB = window.Vue.renderList, kB = window.Vue.Fragment, yc = window.Vue.openBlock, Nm = window.Vue.createElementBlock, MB = window.Vue.createVNode, bB = window.Vue.withCtx, ZB = window.Vue.createBlock, JB = window.Vue.pushScopeId, EB = window.Vue.popScopeId, SB = (e) => (JB("data-v-1b82acc8"), e = e(), EB(), e), FB = { class: "content" }, AB = /* @__PURE__ */ SB(() => /* @__PURE__ */ $c("h3", null, "Situations:", -1)), CB = { class: "situation-list" }, WB = window.Vue.ref, xB = window.Vue.watch, BB = /* @__PURE__ */ RB({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, a = Gn(), s = WB(r.visible);
    return xB(r, () => {
      s.value = r.visible;
    }), (c, d) => (yc(), ZB(Um(VB), {
      modelValue: s.value,
      "onUpdate:modelValue": [
        d[0] || (d[0] = (f) => s.value = f),
        d[1] || (d[1] = (f) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: bB(() => [
        $c("div", FB, [
          AB,
          $c("div", CB, [
            (yc(!0), Nm(kB, null, yB(Um(a).situations.filter(
              (f) => f.id != r.situationId
            ), (f) => (yc(), Nm("div", {
              class: "card",
              key: f.id
            }, [
              MB(Aw, {
                onClick: (m) => o("situation-selected", f.id),
                "situation-info": f,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const _B = /* @__PURE__ */ we(BB, [["__scopeId", "data-v-1b82acc8"]]), IB = window.Vue.openBlock, DB = window.Vue.createElementBlock, W1 = window.Vue.createElementVNode;
var OB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const QB = {}, zB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GB = /* @__PURE__ */ W1("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), YB = /* @__PURE__ */ W1("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), PB = [
  GB,
  YB
];
function HB(e, o) {
  return IB(), DB("svg", zB, PB);
}
var jB = /* @__PURE__ */ OB(QB, [["render", HB]]);
const XB = window.Vue.defineComponent, On = window.Vue.createElementVNode, Jt = window.Vue.createVNode, mt = window.Vue.unref, Ja = window.Vue.withCtx, LB = window.Vue.renderList, $B = window.Vue.Fragment, Ea = window.Vue.openBlock, Sa = window.Vue.createElementBlock, qB = window.Vue.createCommentVNode, KB = window.Vue.pushScopeId, e3 = window.Vue.popScopeId, gi = (e) => (KB("data-v-3c6ab97e"), e = e(), e3(), e), t3 = { class: "container" }, n3 = { class: "row" }, r3 = /* @__PURE__ */ gi(() => /* @__PURE__ */ On("div", { class: "title" }, "Alarms", -1)), o3 = { class: "row actions" }, i3 = /* @__PURE__ */ gi(() => /* @__PURE__ */ On("span", null, "Clear", -1)), a3 = /* @__PURE__ */ gi(() => /* @__PURE__ */ On("span", null, "Acknowledge", -1)), s3 = /* @__PURE__ */ gi(() => /* @__PURE__ */ On("span", null, "Move", -1)), l3 = /* @__PURE__ */ gi(() => /* @__PURE__ */ On("span", null, "Remove", -1)), c3 = { class: "section" }, u3 = {
  key: 0,
  class: "alarm-list"
}, kc = window.Vue.ref, d3 = window.Vue.watch, f3 = window.Vue.reactive, h3 = /* @__PURE__ */ XB({
  __name: "AlarmFilters",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = vs(), a = Gn(), s = kc(!1), c = kc(["all"]), d = kc(!1), f = f3({
      selectedAlarms: [],
      alarms: o.alarms
    });
    d3(o, () => {
      c.value = ["all"], f.alarms = o.alarms, f.selectedAlarms = [], s.value = !1;
    });
    const m = (b) => {
      console.log("id --- ", b), f.selectedAlarms.includes(b) ? me.exports.remove(f.selectedAlarms, (S) => S == b) : f.selectedAlarms.push(b);
    }, g = async (b) => {
      f.selectedAlarms.length || s.value ? (await uk(f.selectedAlarms, b), a.getSituation(o.situationId), f.selectedAlarms = [], s.value = !1) : r.showErrorMsg("You need to choose at least one alarm!");
    }, V = async () => {
      f.selectedAlarms.length ? await Bp(
        o.situationId,
        f.selectedAlarms
      ) ? a.getSituation(o.situationId) : r.showErrorMsg("Error on removing alarms :(") : r.showErrorMsg("You need to choose at least one alarm!");
    }, N = (b) => {
      b.includes("all") ? f.alarms = o.alarms : f.alarms = o.alarms.filter((S) => b.includes(S.severity));
    }, R = async (b) => {
      await Bp(
        o.situationId,
        f.selectedAlarms
      ) && await lC(
        b,
        f.selectedAlarms
      ) ? a.getSituation(o.situationId) : r.showErrorMsg("Error on moving the alarms :("), d.value = !1;
    }, F = () => {
      f.selectedAlarms.length ? d.value = !0 : r.showErrorMsg("You need to choose at least one alarm!");
    };
    return (b, S) => (Ea(), Sa("div", t3, [
      On("div", n3, [
        r3,
        Jt(wu, {
          alarms: o.alarms,
          onSelectedSeverities: N
        }, null, 8, ["alarms"])
      ]),
      On("div", o3, [
        Jt(mt(ws), {
          modelValue: s.value,
          "onUpdate:modelValue": S[0] || (S[0] = (C) => s.value = C),
          label: "selected"
        }, null, 8, ["modelValue"]),
        Jt(mt(Me), {
          onClick: S[1] || (S[1] = () => g("clear"))
        }, {
          default: Ja(() => [
            Jt(mt(X), {
              icon: mt(h1),
              class: "icon clear"
            }, null, 8, ["icon"]),
            i3
          ]),
          _: 1
        }),
        Jt(mt(Me), {
          onClick: S[2] || (S[2] = () => g("ack"))
        }, {
          default: Ja(() => [
            Jt(mt(X), {
              icon: mt(ci),
              class: "icon ack"
            }, null, 8, ["icon"]),
            a3
          ]),
          _: 1
        }),
        Jt(mt(Me), { onClick: F }, {
          default: Ja(() => [
            Jt(mt(X), {
              icon: mt(Mx),
              class: "icon move"
            }, null, 8, ["icon"]),
            s3
          ]),
          _: 1
        }),
        Jt(mt(Me), { onClick: V }, {
          default: Ja(() => [
            Jt(mt(X), {
              icon: mt(jB),
              class: "icon remove"
            }, null, 8, ["icon"]),
            l3
          ]),
          _: 1
        })
      ]),
      On("div", c3, [
        f.alarms.length > 0 ? (Ea(), Sa("div", u3, [
          (Ea(!0), Sa($B, null, LB(f.alarms, (C) => (Ea(), Sa("div", {
            key: C.id
          }, [
            Jt(wx, {
              alarm: C,
              selectAll: s.value,
              "situation-id": o.situationId,
              onAlarmSelected: m
            }, null, 8, ["alarm", "selectAll", "situation-id"])
          ]))), 128))
        ])) : qB("", !0)
      ]),
      Jt(_B, {
        situationId: o.situationId,
        visible: d.value,
        onSituationSelected: R,
        onDrawerClosed: S[3] || (S[3] = () => d.value = !1)
      }, null, 8, ["situationId", "visible"])
    ]));
  }
});
const p3 = /* @__PURE__ */ we(h3, [["__scopeId", "data-v-3c6ab97e"]]), m3 = "/whoami", w3 = async () => {
  try {
    const e = await nn.get(m3);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, v3 = window.Pinia.defineStore, Ti = v3("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const e = await w3();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getAlecInfo() {
      const e = await aC();
      e && (this.firstTime = !1, this.allowSave = e.agreed);
    },
    async savePermission(e) {
      if (this.allowSave = e, !e) {
        const o = await d1(e);
        this.allowSave = o;
      }
    }
  }
}), V3 = window.Vue.defineComponent, Yt = window.Vue.createVNode, wt = window.Vue.unref, Mc = window.Vue.normalizeClass, Fa = window.Vue.toDisplayString, ar = window.Vue.openBlock, sr = window.Vue.createElementBlock, Aa = window.Vue.createCommentVNode, g3 = window.Vue.withCtx, Pt = window.Vue.createElementVNode, T3 = window.Vue.createTextVNode, U3 = window.Vue.Fragment, N3 = window.Vue.pushScopeId, R3 = window.Vue.popScopeId, y3 = (e) => (N3("data-v-7d539e83"), e = e(), R3(), e), k3 = { class: "section" }, M3 = { class: "action-section" }, b3 = {
  key: 0,
  class: "btn-row"
}, Z3 = { key: 0 }, J3 = { key: 1 }, E3 = {
  key: 0,
  class: "situation-detail"
}, S3 = { class: "situation-info" }, F3 = { class: "id" }, A3 = { key: 0 }, C3 = ["innerHTML"], W3 = /* @__PURE__ */ y3(() => /* @__PURE__ */ Pt("p", null, null, -1)), x3 = { class: "boxes" }, B3 = { class: "parameters" }, _3 = { class: "section memo-boxes" }, I3 = { key: 0 }, Rm = window.Vue.ref, D3 = window.Vue.watch, O3 = /* @__PURE__ */ V3({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = vs(), a = Gn(), s = Vt.REJECTED, c = Ti(), d = Rm(o.situationInfo.status), f = Rm(o.situationInfo);
    D3(o, () => {
      d.value = o.situationInfo.status || "", f.value = o.situationInfo;
    });
    const m = async (g) => {
      var N;
      await f1(
        (N = o.situationInfo) == null ? void 0 : N.id,
        g.toLowerCase()
      ) ? (d.value = g, a.getSituation(o.situationInfo.id)) : r.showErrorMsg("You need to choose at least one alarm!");
    };
    return (g, V) => {
      var N, R, F, b, S, C, A, W, B, _, k, D;
      return ar(), sr(U3, null, [
        Pt("div", k3, [
          Pt("div", M3, [
            Yt(p1, {
              alarm: f.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            wt(c).allowSave ? (ar(), sr("div", b3, [
              Yt(wt(Me), {
                class: Mc(["btn", { rejected: d.value == wt(s) }]),
                "data-test": "btn-reject",
                onClick: V[0] || (V[0] = () => m(wt(s)))
              }, {
                default: g3(() => [
                  Yt(wt(X), {
                    icon: wt(yw),
                    "aria-hidden": "true",
                    class: Mc(["icon reject", { rejected: d.value == wt(s) }])
                  }, null, 8, ["icon", "class"]),
                  d.value == wt(s) ? (ar(), sr("span", Z3, Fa(wt(s)), 1)) : (ar(), sr("span", J3, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])) : Aa("", !0)
          ]),
          f.value ? (ar(), sr("div", E3, [
            Pt("div", {
              class: Mc(["severity-line", [`${(R = (N = f.value) == null ? void 0 : N.severity) == null ? void 0 : R.toLowerCase()}-bg dark`]])
            }, null, 2),
            Pt("div", S3, [
              Pt("div", F3, [
                Pt("div", null, [
                  T3(" Situation - " + Fa((F = f.value) == null ? void 0 : F.id) + " - affecting " + Fa(wt(me.exports.size)(wt(me.exports.groupBy)((b = f.value) == null ? void 0 : b.alarms, "nodeId"))) + " node ", 1),
                  f.value.alarms ? (ar(), sr("span", A3, "having " + Fa(f.value.alarms.length) + " alarms ", 1)) : Aa("", !0)
                ]),
                Yt(c1, {
                  severity: (S = f.value) == null ? void 0 : S.severity
                }, null, 8, ["severity"])
              ]),
              Pt("span", {
                innerHTML: f.value.description
              }, null, 8, C3),
              W3,
              Pt("div", x3, [
                Yt(fc, {
                  label: "First Event",
                  info: wt(en)(f.value.firstEventTime)
                }, null, 8, ["info"]),
                Yt(fc, {
                  label: "Last Event",
                  info: wt(en)(f.value.lastEventTime)
                }, null, 8, ["info"]),
                Yt(fc, {
                  label: "Reduction Key",
                  info: f.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Pt("div", B3, [
              Yt(VC, {
                alarms: (C = f.value) == null ? void 0 : C.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Aa("", !0),
          Pt("div", _3, [
            Yt(ts, {
              id: (A = f.value) == null ? void 0 : A.id,
              situationId: (W = f.value) == null ? void 0 : W.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (B = f.value) == null ? void 0 : B.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Yt(ts, {
              id: (_ = f.value) == null ? void 0 : _.id,
              situationId: (k = f.value) == null ? void 0 : k.id,
              label: "Journal Memo",
              type: "journal",
              memo: (D = f.value) == null ? void 0 : D.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        f.value.alarms && f.value.alarms.length ? (ar(), sr("div", I3, [
          Yt(p3, {
            alarms: f.value.alarms,
            "situation-id": f.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Aa("", !0)
      ], 64);
    };
  }
});
const Q3 = /* @__PURE__ */ we(O3, [["__scopeId", "data-v-7d539e83"]]);
var z3 = Object.defineProperty, G3 = Object.defineProperties, Y3 = Object.getOwnPropertyDescriptors, ym = Object.getOwnPropertySymbols, P3 = Object.prototype.hasOwnProperty, H3 = Object.prototype.propertyIsEnumerable, km = (e, o, r) => o in e ? z3(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, qc = (e, o) => {
  for (var r in o || (o = {}))
    P3.call(o, r) && km(e, r, o[r]);
  if (ym)
    for (var r of ym(o))
      H3.call(o, r) && km(e, r, o[r]);
  return e;
}, j3 = (e, o) => G3(e, Y3(o));
const x1 = window.Vue.defineComponent, dr = window.Vue.resolveComponent, Oa = window.Vue.openBlock, Mm = window.Vue.createBlock, Qa = window.Vue.mergeProps, fr = window.Vue.withCtx, B1 = window.Vue.createElementBlock, X3 = window.Vue.Fragment, L3 = window.Vue.renderList, $3 = window.Vue.createTextVNode, q3 = window.Vue.toDisplayString, K3 = window.Vue.computed, bm = window.Vue.toRef, zo = window.Vue.createVNode, Zm = window.Vue.toHandlers, e_ = window.Vue.renderSlot, t_ = window.Vue.normalizeClass, n_ = window.Vue.createElementVNode;
var _1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const r_ = x1({
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
      return ie("feather-select-active");
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
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e];
        ai(o, this.$refs.list.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      return this.activeIndex === e;
    },
    getId(e) {
      return e === this.activeIndex ? this.activeId : null;
    },
    select(e) {
      this.$emit("select", e);
    }
  },
  components: {
    FeatherList: Tu,
    FeatherListItem: Vi
  }
});
function o_(e, o, r, a, s, c) {
  const d = dr("FeatherListItem"), f = dr("FeatherList");
  return Oa(), Mm(f, Qa(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: fr(() => [
      (Oa(!0), B1(X3, null, L3(e.options, (m, g) => (Oa(), Mm(d, {
        key: m[e.textProp],
        "as-li": "",
        id: e.getId(g),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(g),
        selected: e.isSelected(g),
        onClick: (V) => e.select(m)
      }, {
        default: fr(() => [
          $3(q3(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var i_ = /* @__PURE__ */ _1(r_, [["render", o_], ["__scopeId", "data-v-eae820da"]]);
const a_ = j3(qc(qc({}, pu), mi), {
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
}), s_ = {
  "update:modelValue": (e) => !0
}, l_ = x1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: s_,
  props: a_,
  setup(e, o) {
    wi(e), mu(e);
    const r = K3(() => ie("feather-select-input")), { validate: a } = hi(r, bm(e, "modelValue"), e.label, e.schema, bm(e, "error"));
    return qc({
      inputId: r,
      validate: a
    }, pi(o.attrs));
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
      return ie("feather-select-description");
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
        const e = this.internalValue, o = this.options.filter((r) => r[this.textProp] === e[this.textProp]);
        if (o && o.length)
          return this.options.indexOf(o[0]);
      }
      return -1;
    },
    icon: () => Vu
  },
  watch: {
    showMenu(e) {
      e ? (this.internalValue || this.select(this.options[0]), this.$nextTick(() => {
        this.$refs.input.focus();
      })) : this.emitSelection();
    },
    modelValue(e) {
      this.internalValue = e;
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
    handleSelect(e) {
      this.select(e), this.showMenu = !1, this.$refs.input.focus();
    },
    select(e) {
      this.internalValue = e;
    },
    emitSelection() {
      this.$emit("update:modelValue", this.internalValue);
    },
    handleKeyDown(e) {
      if (e.keyCode === q.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === q.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === q.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === q.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === q.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === q.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      wr(this.delayTimeout), this.delayTimeout = mr(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: hu,
    InputSubText: fi,
    FeatherMenu: Pw,
    List: i_,
    FeatherIcon: X
  }
});
function c_(e, o, r, a, s, c) {
  const d = dr("FeatherIcon"), f = dr("InputWrapper"), m = dr("List"), g = dr("FeatherMenu"), V = dr("InputSubText");
  return Oa(), B1("div", Qa(e.inherittedAttrs, { class: "feather-select-container" }), [
    zo(g, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: fr((N) => [
        zo(f, Qa({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, N.attrs, Zm(N.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: fr(() => [
            e_(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: fr(() => [
            zo(d, {
              class: t_(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: fr(() => [
            n_("input", Qa(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Zm(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: fr(() => [
        zo(m, {
          ref: "list",
          "data-ref-id": "feather-select-list",
          label: e.label,
          options: e.options,
          "text-prop": e.textProp,
          "active-index": e.activeIndex,
          onSelect: e.handleSelect,
          onKeydown: e.handleKeyDown
        }, null, 8, ["label", "options", "text-prop", "active-index", "onSelect", "onKeydown"])
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick"]),
    zo(V, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var u_ = /* @__PURE__ */ _1(l_, [["render", c_], ["__scopeId", "data-v-ecb32d90"]]);
const d_ = window.Vue.openBlock, f_ = window.Vue.createElementBlock, I1 = window.Vue.createElementVNode;
var h_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const p_ = {}, m_ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, w_ = /* @__PURE__ */ I1("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), v_ = /* @__PURE__ */ I1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), V_ = [
  w_,
  v_
];
function g_(e, o) {
  return d_(), f_("svg", m_, V_);
}
var T_ = /* @__PURE__ */ h_(p_, [["render", g_]]);
const za = window.Vue.openBlock, Kc = window.Vue.createElementBlock, D1 = window.Vue.createElementVNode, U_ = window.Vue.defineComponent, lr = window.Vue.ref, N_ = window.Vue.provide, Jm = window.Vue.computed, R_ = window.Vue.onUnmounted, Em = window.Vue.toRef, y_ = window.Vue.resolveComponent, k_ = window.Vue.Fragment, M_ = window.Vue.createBlock, b_ = window.Vue.Teleport, Sm = window.Vue.createVNode, Z_ = window.Vue.Transition, J_ = window.Vue.withCtx, E_ = window.Vue.normalizeClass, S_ = window.Vue.normalizeStyle, F_ = window.Vue.toDisplayString, A_ = window.Vue.createCommentVNode, C_ = window.Vue.renderSlot, bc = window.Vue.nextTick;
var O1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const W_ = {}, x_ = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, B_ = /* @__PURE__ */ D1("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), __ = [
  B_
];
function I_(e, o) {
  return za(), Kc("svg", x_, __);
}
var D_ = /* @__PURE__ */ O1(W_, [["render", I_]]), Oe = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Oe || {}), gn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(gn || {});
const O_ = (e, o, r, a = 9) => {
  const s = window.innerHeight - e.bottom, c = window.innerWidth - e.right, d = [];
  e.top >= o.height + a && d.push(Oe.top), s >= o.height + a && d.push(Oe.bottom);
  const f = [];
  c >= o.width + a && f.push(Oe.right), e.left >= o.width + a && f.push(Oe.left);
  let m = [...f, ...d];
  return (r === Oe.top || r === Oe.bottom) && (m = [...d, ...f]), m.indexOf(r) > -1 ? r : m.length ? m[0] : r;
}, Q_ = (e, o, r, a, s = 28) => {
  if (e === Oe.left || e === Oe.right)
    return gn.center;
  const c = o.left + o.width / 2, d = window.innerWidth - o.right, f = [], m = c, g = d + o.width / 2, V = r.width - s, N = r.width / 2;
  return m >= N && g >= N && f.push(gn.center), g >= V && f.push(gn.left), m >= V && f.push(gn.right), f.indexOf(a) > -1 ? a : f.length ? f[0] : a;
}, z_ = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Oe.top
  },
  pointerAlignment: {
    type: String,
    default: () => gn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, G_ = U_({
  props: z_,
  setup(e) {
    const o = lr(!1), r = lr(!1), a = ie("feather-tooltip-trigger"), s = ie("feather-tooltip"), c = "data-feather-tooltip";
    N_("feather-has-tooltip", !0);
    let d = 0;
    const f = () => {
      wr(d), o.value || (d = mr(S, e.enterDelay));
    }, m = () => {
      wr(d), d = mr(C, e.exitDelay);
    }, g = (ge) => {
      ge.keyCode === q.ESCAPE && (ge.preventDefault(), C(!0));
    }, V = Jm(() => ({
      [c]: a,
      "aria-describedby": s
    })), N = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: g
    }, R = lr(document), F = Yw(R, () => C(!0));
    R_(() => C(!0));
    const b = () => document.getElementById(s), S = () => {
      r.value = !1, o.value = !0, bc(() => {
        const ge = b();
        de(ge), o.value = !1, bc(() => {
          r.value = !0, o.value = !0, F.value = !0;
        });
      });
    }, C = (ge = !1) => {
      D.value = "", k.value = "", Q.value = "", z.value = "", o.value = !1, ge && (r.value = !1), F.value = !1;
    }, A = Em(e, "placement"), W = Em(e, "pointerAlignment"), B = 8, _ = 24, k = lr(""), D = lr(""), Q = lr(""), z = lr(""), ve = Jm(() => z.value ? "p-" + z.value : !1), de = (ge) => {
      const Te = document.querySelector(`[${c}=${a}]`);
      if (!Te) {
        console.log("trigger not found");
        return;
      }
      bc(() => {
        const Ne = Te.getBoundingClientRect(), be = ge.getBoundingClientRect(), ce = O_(Ne, be, A.value, B), Be = Q_(ce, Ne, be, W.value, _);
        Q.value = Be.toString(), z.value = ce.toString();
        let _e = 0, je = 0;
        if ((ce === Oe.left || ce === Oe.right) && (_e = Ne.top + Ne.height / 2 - be.height / 2, ce === Oe.left && (je = Ne.left - be.width - B), ce === Oe.right && (je = Ne.right)), ce === Oe.top || ce === Oe.bottom) {
          _e = Ne.top - be.height - B, ce === Oe.bottom && (_e = Ne.bottom);
          const lo = Ne.left + Ne.width / 2;
          switch (Be) {
            case gn.center:
              je = lo - be.width / 2;
              break;
            case gn.left:
              je = lo - _;
              break;
            case gn.right:
              je = lo - be.width + _;
              break;
          }
        }
        k.value = _e.toString() + "px", D.value = je.toString() + "px";
      });
    };
    return {
      attrs: V,
      listeners: N,
      show: o,
      animate: r,
      alignmentClass: Q,
      placementClass: ve,
      top: k,
      left: D,
      tooltipID: s
    };
  },
  components: {
    Pointer: D_
  }
}), Y_ = ["id"];
function P_(e, o, r, a, s, c) {
  const d = y_("Pointer");
  return za(), Kc(k_, null, [
    (za(), M_(b_, { to: "body" }, [
      Sm(Z_, { css: e.animate }, {
        default: J_(() => [
          e.show ? (za(), Kc("div", {
            key: 0,
            class: E_(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: S_({ left: e.left, top: e.top })
          }, [
            D1("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, F_(e.title), 9, Y_),
            Sm(d, { class: "tooltip-pointer" })
          ], 6)) : A_("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    C_(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var Fm = /* @__PURE__ */ O1(G_, [["render", P_], ["__scopeId", "data-v-3da6b22e"]]);
const H_ = window.Vue.defineComponent, Zc = window.Vue.normalizeStyle, Jc = window.Vue.createElementVNode, Go = window.Vue.unref, Am = window.Vue.toHandlers, Cm = window.Vue.mergeProps, Wm = window.Vue.withCtx, xm = window.Vue.createVNode, j_ = window.Vue.renderList, X_ = window.Vue.Fragment, Yo = window.Vue.openBlock, Po = window.Vue.createElementBlock, Bm = window.Vue.normalizeClass, _m = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const L_ = { class: "row" }, $_ = /* @__PURE__ */ H_({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), a = (c, d) => c ? (Number(d) - Number(c)) * o.proportion : 0, s = (c) => c ? (Number(c) - Number(o.minStart)) * o.proportion : 0;
    return (c, d) => (Yo(), Po("div", L_, [
      Jc("div", {
        class: "line-gray",
        style: Zc({
          width: s(o.events[0].createTime) + "px"
        })
      }, null, 4),
      xm(Go(Fm), {
        title: Go(en)(e.alarm.firstEventTime)
      }, {
        default: Wm(({ attrs: f, on: m }) => [
          Jc("div", Cm({ class: "circle" }, f, Am(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Yo(!0), Po(X_, null, j_(o.events, (f, m) => (Yo(), Po("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[m + 1] ? (Yo(), Po("div", {
          key: 0,
          class: Bm(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Zc({
            width: a(f.createTime, o.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : _m("", !0),
        xm(Go(Fm), {
          title: Go(en)(e.alarm.firstEventTime)
        }, {
          default: Wm(({ attrs: g, on: V }) => [
            o.events[m + 1] ? (Yo(), Po("div", Cm({ key: 0 }, g, Am(V), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : _m("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Jc("div", {
        class: Bm(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Zc({
          width: a(e.events[e.events.length - 1].createTime, Go(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const q_ = /* @__PURE__ */ we($_, [["__scopeId", "data-v-3341d12d"]]), K_ = window.Vue.openBlock, eI = window.Vue.createElementBlock, Q1 = window.Vue.createElementVNode;
var tI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const nI = {}, rI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oI = /* @__PURE__ */ Q1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), iI = /* @__PURE__ */ Q1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), aI = [
  oI,
  iI
];
function sI(e, o) {
  return K_(), eI("svg", rI, aI);
}
var lI = /* @__PURE__ */ tI(nI, [["render", sI]]);
const cI = window.Vue.defineComponent, eu = window.Vue.createElementVNode, uI = window.Vue.renderList, Im = window.Vue.Fragment, Ec = window.Vue.openBlock, Sc = window.Vue.createElementBlock, dI = window.Vue.normalizeClass, fI = window.Vue.unref, Dm = window.Vue.toDisplayString, hI = window.Vue.pushScopeId, pI = window.Vue.popScopeId, mI = (e) => (hI("data-v-2e087f7b"), e = e(), pI(), e), wI = /* @__PURE__ */ mI(() => /* @__PURE__ */ eu("strong", null, "Events:", -1)), vI = /* @__PURE__ */ cI({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, a) => (Ec(), Sc(Im, null, [
      wI,
      (Ec(!0), Sc(Im, null, uI(o.events, (s) => (Ec(), Sc("div", {
        class: "event-description",
        key: s.id
      }, [
        eu("div", {
          class: dI(["mark", [`${s.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        eu("div", null, Dm(fI(en)(s.createTime)) + " - " + Dm(s.source), 1)
      ]))), 128))
    ], 64));
  }
});
const VI = /* @__PURE__ */ we(vI, [["__scopeId", "data-v-2e087f7b"]]), gI = window.Vue.defineComponent, TI = window.Vue.normalizeClass, vt = window.Vue.createElementVNode, Yr = window.Vue.toDisplayString, rt = window.Vue.unref, Pr = window.Vue.createVNode, z1 = window.Vue.createTextVNode, UI = window.Vue.renderList, Om = window.Vue.Fragment, mn = window.Vue.openBlock, cr = window.Vue.createElementBlock, Qm = window.Vue.createBlock, Ca = window.Vue.createCommentVNode, NI = window.Vue.normalizeStyle, RI = window.Vue.pushScopeId, yI = window.Vue.popScopeId, kI = (e) => (RI("data-v-01717d0d"), e = e(), yI(), e), MI = { class: "section detail" }, bI = { class: "id" }, ZI = {
  key: 0,
  class: "section"
}, JI = /* @__PURE__ */ kI(() => /* @__PURE__ */ vt("div", { class: "id" }, "Alarms", -1)), EI = { class: "action-btns" }, SI = { class: "zoom" }, FI = /* @__PURE__ */ z1(" Zoom "), AI = { class: "times" }, CI = {
  key: 0,
  class: "timeline-container"
}, WI = { class: "alarm-id" }, xI = {
  key: 0,
  class: "panel"
}, Wn = window.Vue.ref, BI = window.Vue.watch, _I = /* @__PURE__ */ gI({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var _, k;
    const o = e, r = Gn(), a = Wn(0), s = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], c = Wn(s[0]), d = Wn(o.width), f = Wn(o.width), m = Wn(new Date().getTime()), g = () => {
      var D, Q;
      if (!o.situation.events) {
        const z = (Q = (D = o.situation) == null ? void 0 : D.alarms) == null ? void 0 : Q.map((ve) => ve.id);
        r.getEvents(o.situation.id, z);
      }
    };
    g();
    const V = () => (m.value = new Date().getTime(), d.value / (Number(m.value) - Number(R.value))), N = Wn(o.situation.alarms), R = Wn(
      ((k = me.exports.minBy((_ = o.situation) == null ? void 0 : _.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), F = Wn(V());
    BI(o, () => {
      var D, Q;
      R.value = ((Q = me.exports.minBy((D = o.situation) == null ? void 0 : D.alarms, "firstEventTime")) == null ? void 0 : Q.firstEventTime) || new Date().getTime(), g(), d.value = f.value, F.value = V(), N.value = o.situation.alarms, c.value = s[0];
    });
    const b = (D) => {
      if ((D == null ? void 0 : D.id) === 1 && (N.value = o.situation.alarms), (D == null ? void 0 : D.id) === 2) {
        const Q = me.exports.groupBy(N.value, "severity"), z = [
          ...Q.CRITICAL || [],
          ...Q.MAJOR || [],
          ...Q.MINOR || [],
          ...Q.WARNING || [],
          ...Q.NORMAL || [],
          ...Q.CLEARED || [],
          ...Q.INDETERMINATE || []
        ];
        N.value = z.filter((ve) => ve);
      }
      if ((D == null ? void 0 : D.id) === 3) {
        const Q = me.exports.reverse(
          me.exports.sortBy(
            o.situation.alarms,
            (z) => Number(z.lastEventTime) - Number(z.firstEventTime)
          )
        );
        N.value = Q;
      }
    }, S = () => {
      d.value += 100, F.value = V();
    }, C = () => {
      d.value -= 100, F.value = V();
    }, A = () => {
      d.value = f.value, F.value = V();
    }, W = (D) => {
      a.value = D;
    }, B = () => {
      a.value = 0;
    };
    return (D, Q) => {
      var z, ve;
      return mn(), cr(Om, null, [
        vt("div", MI, [
          vt("div", {
            class: TI(["severity-line", [`${(ve = (z = o.situation) == null ? void 0 : z.severity) == null ? void 0 : ve.toLowerCase()}-bg dark`]])
          }, null, 2),
          vt("div", null, [
            vt("div", bI, "Situation " + Yr(o.situation.id), 1),
            vt("div", null, " Duration: " + Yr(rt(sb)(m.value, new Date(R.value))), 1)
          ])
        ]),
        N.value && N.value.length > 0 ? (mn(), cr("div", ZI, [
          JI,
          vt("div", EI, [
            Pr(rt(u_), {
              class: "select",
              label: "Sort by:",
              options: s,
              modelValue: c.value,
              "onUpdate:modelValue": [
                Q[0] || (Q[0] = (de) => c.value = de),
                b
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            vt("div", SI, [
              FI,
              vt("div", null, [
                Pr(rt(X), {
                  icon: rt(T_),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                Pr(rt(X), {
                  icon: rt(zw),
                  class: "zoom-icon",
                  onClick: A
                }, null, 8, ["icon"]),
                Pr(rt(X), {
                  icon: rt(lI),
                  class: "zoom-icon",
                  onClick: C
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (mn(), cr("div", {
            key: 0,
            class: "alarms",
            style: NI({
              width: f.value + 50 + "px"
            })
          }, [
            vt("div", AI, [
              vt("div", null, Yr(rt(en)(R.value)), 1),
              vt("div", null, Yr(rt(en)(m.value)), 1)
            ]),
            e.situation.events ? (mn(), cr("div", CI, [
              (mn(!0), cr(Om, null, UI(N.value, (de) => (mn(), cr("div", {
                class: "timeline",
                key: de.id
              }, [
                vt("div", WI, [
                  z1(Yr(de.nodeLabel) + " - " + Yr(de.id) + " ", 1),
                  a.value === de.id ? (mn(), Qm(rt(X), {
                    key: 0,
                    icon: rt(Vu),
                    class: "zoom-icon expand",
                    onClick: B
                  }, null, 8, ["icon"])) : (mn(), Qm(rt(X), {
                    key: 1,
                    icon: rt(Ww),
                    class: "zoom-icon expand",
                    onClick: () => W(de.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Pr(q_, {
                  alarm: de,
                  proportion: F.value,
                  "min-start": R.value,
                  events: o.situation.events[de.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                a.value === de.id ? (mn(), cr("div", xI, [
                  Pr(VI, {
                    events: o.situation.events[de.id]
                  }, null, 8, ["events"])
                ])) : Ca("", !0)
              ]))), 128))
            ])) : Ca("", !0)
          ], 4)) : Ca("", !0)
        ])) : Ca("", !0)
      ], 64);
    };
  }
});
const II = /* @__PURE__ */ we(_I, [["__scopeId", "data-v-01717d0d"]]), DI = window.Vue.openBlock, OI = window.Vue.createElementBlock, QI = window.Vue.createElementVNode;
var zI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const GI = {}, YI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PI = /* @__PURE__ */ QI("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), HI = [
  PI
];
function jI(e, o) {
  return DI(), OI("svg", YI, HI);
}
var Ga = /* @__PURE__ */ zI(GI, [["render", jI]]);
const G1 = window.Vue.defineComponent, Fc = window.Vue.ref, XI = window.Vue.toRef, Ac = window.Vue.inject, zm = window.Vue.watch, LI = window.Vue.nextTick, Gm = window.Vue.openBlock, Ym = window.Vue.createElementBlock, Cc = window.Vue.createElementVNode, $I = window.Vue.normalizeClass, Pm = window.Vue.renderSlot, Hm = window.Vue.createCommentVNode, Wc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var qI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const KI = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  center: {
    type: Boolean,
    default: !1
  },
  timeout: {
    type: Number,
    default: 4e3
  },
  error: {
    type: Boolean,
    default: !1
  }
}, eD = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, tD = G1({
  emits: eD,
  props: KI,
  setup(e, o) {
    const r = Fc(), a = Fc(!1), s = Fc(!1), c = Date.now() + Math.floor(Math.random() * 1e3), d = XI(e, "modelValue"), f = Ac("queueSnackbar", !1), m = Ac("unqueueSnackbar", !1), g = Ac("nextSnackbar", () => {
    }), V = (S, C) => {
      let A, W, B = C;
      const _ = () => {
        !A || (wr(A), A = 0, B -= Date.now() - W);
      }, k = () => {
        A || (W = Date.now(), A = mr(S, B));
      };
      return k(), { pause: _, resume: k };
    }, N = () => {
      a.value = !1, o.emit("closed"), g && g();
    }, R = (S) => {
      S.keyCode === q.ESCAPE && (s.value = !1);
    }, F = () => {
      r.value.pause();
    }, b = () => {
      s.value && r.value.resume();
    };
    return zm(d, (S) => {
      S ? LI(() => {
        f === !1 ? s.value = S : f(c, s);
      }) : m === !1 ? s.value = S : m(c);
    }, { immediate: !0 }), zm(s, (S) => {
      S ? (a.value = !0, r.value = V(() => {
        s.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), F());
    }), {
      hideTimeout: r,
      contentShow: a,
      internalValue: s,
      id: c,
      incomingValue: d,
      closed: N,
      keyPressed: R,
      stopTimer: F,
      resumeTimer: b
    };
  }
}), nD = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, rD = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, oD = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, iD = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function aD(e, o, r, a, s, c) {
  return e.modelValue || e.contentShow ? (Gm(), Ym("div", nD, [
    Cc("div", {
      class: $I(["feather-snackbar", {
        "fade-in": e.internalValue,
        "fade-out": e.contentShow && !e.internalValue,
        center: e.center,
        error: e.error
      }]),
      "data-ref-id": "feather-snackbar",
      onAnimationend: o[0] || (o[0] = (...d) => e.closed && e.closed(...d)),
      onKeydown: o[1] || (o[1] = (...d) => e.keyPressed && e.keyPressed(...d)),
      onMouseover: o[2] || (o[2] = (...d) => e.stopTimer && e.stopTimer(...d)),
      onMouseleave: o[3] || (o[3] = (...d) => e.resumeTimer && e.resumeTimer(...d)),
      onFocusin: o[4] || (o[4] = (...d) => e.stopTimer && e.stopTimer(...d)),
      onFocusout: o[5] || (o[5] = (...d) => e.resumeTimer && e.resumeTimer(...d))
    }, [
      Cc("div", rD, [
        e.contentShow ? (Gm(), Ym("div", oD, [
          Pm(e.$slots, "default", {}, void 0, !0)
        ])) : Hm("", !0)
      ]),
      Cc("div", iD, [
        Pm(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Hm("", !0);
}
var Y1 = /* @__PURE__ */ qI(tD, [["render", aD], ["__scopeId", "data-v-5cf64a62"]]);
const sD = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
G1({
  props: sD,
  setup() {
    let e, o = [];
    const r = () => {
      e && (e.val.value = !0);
    }, a = (d, f) => {
      const m = { id: d, val: f };
      e ? o.push(m) : (e = m, r());
    }, s = (d) => {
      (e == null ? void 0 : e.id) === d ? e.val.value = !1 : o = o.filter((f) => f.id != d);
    }, c = () => {
      o.length ? (e = o.shift(), r()) : e = void 0;
    };
    return Wc("queueSnackbar", a), Wc("unqueueSnackbar", s), Wc("nextSnackbar", c), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: a,
      shiftItem: c,
      unqueueSnackbar: s
    };
  }
});
const lD = window.Vue.defineComponent, Ze = window.Vue.unref, ot = window.Vue.createVNode, si = window.Vue.createElementVNode, Et = window.Vue.withCtx, Ts = window.Vue.createTextVNode, Wa = window.Vue.openBlock, cD = window.Vue.createBlock, uD = window.Vue.createCommentVNode, xc = window.Vue.createElementBlock, jm = window.Vue.toDisplayString, dD = window.Vue.pushScopeId, fD = window.Vue.popScopeId, Au = (e) => (dD("data-v-92645461"), e = e(), fD(), e), hD = { id: "cont" }, pD = { class: "btns-navigation" }, mD = /* @__PURE__ */ Au(() => /* @__PURE__ */ si("span", null, "Situation List", -1)), wD = /* @__PURE__ */ Au(() => /* @__PURE__ */ si("span", null, "Show Previous Situation ", -1)), vD = /* @__PURE__ */ Au(() => /* @__PURE__ */ si("span", null, "Show Next Situation", -1)), VD = {
  key: 0,
  class: "detail"
}, gD = /* @__PURE__ */ Ts("Details"), TD = /* @__PURE__ */ Ts("Metrics"), UD = {
  key: 1,
  class: "noSituation"
}, ND = /* @__PURE__ */ Ts("dismiss"), Ho = window.Vue.ref, Xm = window.Vue.watch, RD = window.Vue.onMounted, yD = window.VueRouter.useRouter, kD = window.VueRouter.useRoute, MD = /* @__PURE__ */ lD({
  __name: "SituationDetail",
  setup(e) {
    const o = yD(), r = kD(), a = parseInt(r.params.id), s = Ho(a), c = Gn(), d = vs();
    c.getSituation(s.value), c.situations.length || c.getSituations();
    const f = Ho(), m = Ho(), g = Ho(
      c.filteredSituations.findIndex((F) => F === s.value)
    ), V = Ho(!1);
    Xm(
      () => c.situationDetail,
      () => {
        f.value = c.situationDetail;
      }
    ), RD(() => {
      var b;
      const F = ((b = document.getElementById("cont")) == null ? void 0 : b.getBoundingClientRect().width) || 1200;
      m.value = F - 90;
    });
    const N = () => {
      o.push({
        name: "situations"
      });
    }, R = (F) => {
      const b = g.value, S = c.filteredSituations[b + F];
      o.push({
        name: "situationDetail",
        params: {
          id: S
        }
      });
    };
    return Xm(r, () => {
      s.value = parseInt(r.params.id), c.getSituation(s.value), g.value = c.filteredSituations.findIndex((F) => F == s.value);
    }), d.$subscribe((F, b) => {
      V.value = b.showError;
    }), (F, b) => (Wa(), xc("div", hD, [
      si("div", pD, [
        ot(Ze(Me), {
          primary: "",
          onClick: b[0] || (b[0] = () => N())
        }, {
          default: Et(() => [
            ot(Ze(X), {
              icon: Ze(Ga),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            mD
          ]),
          _: 1
        }),
        si("div", null, [
          ot(Ze(Me), {
            disabled: !Ze(c).filteredSituations[g.value - 1],
            primary: "",
            onClick: b[1] || (b[1] = () => R(-1))
          }, {
            default: Et(() => [
              ot(Ze(X), {
                icon: Ze(Ga),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              wD
            ]),
            _: 1
          }, 8, ["disabled"]),
          ot(Ze(Me), {
            disabled: !Ze(c).filteredSituations[g.value + 1],
            primary: "",
            onClick: b[2] || (b[2] = () => R(1))
          }, {
            default: Et(() => [
              vD,
              ot(Ze(X), {
                icon: Ze(Ga),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      f.value ? (Wa(), xc("div", VD, [
        ot(Ze(DA), null, {
          tabs: Et(() => [
            ot(Ze(Ap), null, {
              default: Et(() => [
                gD
              ]),
              _: 1
            }),
            ot(Ze(Ap), null, {
              default: Et(() => [
                TD
              ]),
              _: 1
            })
          ]),
          default: Et(() => [
            ot(Ze(Cp), { class: "panel" }, {
              default: Et(() => [
                ot(Q3, { "situation-info": f.value }, null, 8, ["situation-info"])
              ]),
              _: 1
            }),
            ot(Ze(Cp), { class: "panel" }, {
              default: Et(() => [
                m.value ? (Wa(), cD(II, {
                  key: 0,
                  situation: f.value,
                  width: m.value
                }, null, 8, ["situation", "width"])) : uD("", !0)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : (Wa(), xc("div", UD, " Error. The situation " + jm(Ze(a)) + " does not exist. ", 1)),
      ot(Ze(Y1), {
        modelValue: V.value,
        "onUpdate:modelValue": b[4] || (b[4] = (S) => V.value = S),
        center: "",
        error: ""
      }, {
        button: Et(() => [
          ot(Ze(Me), {
            onClick: b[3] || (b[3] = (S) => V.value = !1),
            text: ""
          }, {
            default: Et(() => [
              ND
            ]),
            _: 1
          })
        ]),
        default: Et(() => [
          Ts(jm(Ze(d).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const bD = /* @__PURE__ */ we(MD, [["__scopeId", "data-v-92645461"]]), ZD = window.Vue.defineComponent, JD = window.Vue.normalizeClass, xa = window.Vue.createElementVNode, Lm = window.Vue.unref, ED = window.Vue.createVNode, Bc = window.Vue.toDisplayString, SD = window.Vue.Fragment, FD = window.Vue.openBlock, AD = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const CD = { class: "alarmInfo" }, WD = { class: "alarm-title" }, xD = { class: "description" }, BD = /* @__PURE__ */ ZD({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e;
    return (a, s) => (FD(), AD(SD, null, [
      xa("div", CD, [
        xa("div", {
          class: JD(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        ED(Lm(ws), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": s[0] || (s[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        xa("div", WD, Bc(e.alarm.nodeLabel) + " - " + Bc(e.alarm.id), 1)
      ]),
      xa("div", xD, Bc(Lm(Ew)(e.alarm.description, 300)), 1)
    ], 64));
  }
});
const _D = /* @__PURE__ */ we(BD, [["__scopeId", "data-v-669619ea"]]), ID = window.Vue.defineComponent, Fe = window.Vue.unref, St = window.Vue.createVNode, At = window.Vue.createElementVNode, Hr = window.Vue.withCtx, DD = window.Vue.toDisplayString, Cu = window.Vue.createTextVNode, $m = window.Vue.normalizeClass, jr = window.Vue.openBlock, Xr = window.Vue.createElementBlock, OD = window.Vue.createCommentVNode, QD = window.Vue.renderList, zD = window.Vue.Fragment, GD = window.Vue.pushScopeId, YD = window.Vue.popScopeId, Ui = (e) => (GD("data-v-89c3ac05"), e = e(), YD(), e), PD = { class: "container" }, HD = /* @__PURE__ */ Ui(() => /* @__PURE__ */ At("span", null, "Situation List", -1)), jD = /* @__PURE__ */ Ui(() => /* @__PURE__ */ At("h2", null, "New Situation", -1)), XD = { class: "form" }, LD = { class: "fields" }, $D = /* @__PURE__ */ Cu(" Total alarms added: "), qD = { class: "total" }, KD = {
  key: 0,
  class: "errorList"
}, eO = { class: "footer" }, tO = /* @__PURE__ */ Ui(() => /* @__PURE__ */ At("span", null, "Clear", -1)), nO = /* @__PURE__ */ Ui(() => /* @__PURE__ */ At("span", null, "Add Situation", -1)), rO = { class: "alarm-column" }, oO = /* @__PURE__ */ Ui(() => /* @__PURE__ */ At("h4", null, "Add Unassociated Alarms", -1)), iO = {
  key: 0,
  class: "alarms"
}, aO = { key: 1 }, sO = /* @__PURE__ */ Cu(" Error on creating new situation :( "), lO = /* @__PURE__ */ Cu("dismiss"), cO = window.VueRouter.useRouter, xn = window.Vue.ref, uO = window.Vue.watch, dO = /* @__PURE__ */ ID({
  __name: "AddSituation",
  setup(e) {
    const o = cO(), r = Gn(), a = xn(), s = xn(""), c = xn(), d = xn(""), f = xn([]), m = xn(!1), g = xn(), V = xn(r.unassignedAlarms);
    V.value.length || r.getUnassignedAlarms(), uO(
      () => r.unassignedAlarms,
      () => {
        V.value = r.unassignedAlarms;
      }
    );
    const N = () => {
      o.push({
        name: "situations"
      });
    }, R = (A) => {
      A.includes("all") ? V.value = r.unassignedAlarms : V.value = r.unassignedAlarms.filter(
        (W) => A.includes(W.severity)
      );
    }, F = (A) => {
      m.value = !1, me.exports.includes(f.value, A) ? me.exports.remove(f.value, (W) => W === A) : f.value.push(A);
    }, b = () => {
      const A = "This field should not be empty";
      let W = !0;
      return a.value || (s.value = A, W = !1), c.value || (d.value = A, W = !1), f.value.length < 2 && (m.value = !0, W = !1), W;
    }, S = async () => {
      if (b()) {
        const A = {
          alarmIdList: f.value,
          diagnosticText: c.value,
          description: a.value
        };
        await cC(A) ? o.push({
          name: "situations"
        }) : g.value = !0;
      }
    }, C = () => {
      a.value = "", c.value = "", f.value = [], V.value = r.unassignedAlarms;
    };
    return (A, W) => (jr(), Xr("div", PD, [
      St(Fe(Me), {
        primary: "",
        onClick: W[0] || (W[0] = () => N()),
        class: "back-btn"
      }, {
        default: Hr(() => [
          St(Fe(X), {
            icon: Fe(Ga),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          HD
        ]),
        _: 1
      }),
      jD,
      At("div", XD, [
        At("div", LD, [
          St(Fe(Lc), {
            modelValue: a.value,
            "onUpdate:modelValue": W[1] || (W[1] = (B) => a.value = B),
            label: "Description",
            rows: "4",
            error: s.value
          }, null, 8, ["modelValue", "error"]),
          St(Fe(Lc), {
            modelValue: c.value,
            "onUpdate:modelValue": W[2] || (W[2] = (B) => c.value = B),
            label: "Diagnostic Text",
            rows: "4",
            error: d.value
          }, null, 8, ["modelValue", "error"]),
          At("div", null, [
            At("div", {
              class: $m(["totalAlarms", { errorList: m.value }])
            }, [
              $D,
              At("span", qD, DD(Fe(f).length), 1)
            ], 2),
            m.value ? (jr(), Xr("div", KD, " It is required to add at least 2 alarms ")) : OD("", !0)
          ]),
          At("div", eO, [
            St(Fe(Me), {
              class: "btn",
              primary: "",
              onClick: C
            }, {
              default: Hr(() => [
                St(Fe(X), {
                  icon: Fe(io),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                tO
              ]),
              _: 1
            }),
            St(Fe(Me), {
              class: "btn",
              primary: "",
              onClick: S
            }, {
              default: Hr(() => [
                St(Fe(X), {
                  icon: Fe(Gw),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                nO
              ]),
              _: 1
            })
          ])
        ]),
        At("div", rO, [
          oO,
          St(wu, {
            alarms: Fe(r).unassignedAlarms,
            onSelectedSeverities: R
          }, null, 8, ["alarms"]),
          V.value.length ? (jr(), Xr("div", iO, [
            (jr(!0), Xr(zD, null, QD(V.value, (B) => (jr(), Xr("div", {
              key: B.id,
              class: $m(["alarm", { selected: Fe(me.exports.includes)(Fe(f), B.id) }])
            }, [
              St(_D, {
                selected: Fe(me.exports.includes)(Fe(f), B.id),
                alarm: B,
                onSelectedAlarm: F
              }, null, 8, ["selected", "alarm"])
            ], 2))), 128))
          ])) : (jr(), Xr("div", aO, "There is no unassigned alarms"))
        ])
      ]),
      St(Fe(Y1), {
        modelValue: g.value,
        "onUpdate:modelValue": W[4] || (W[4] = (B) => g.value = B),
        center: "",
        error: ""
      }, {
        button: Hr(() => [
          St(Fe(Me), {
            onClick: W[3] || (W[3] = (B) => g.value = !1),
            text: ""
          }, {
            default: Hr(() => [
              lO
            ]),
            _: 1
          })
        ]),
        default: Hr(() => [
          sO
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const fO = /* @__PURE__ */ we(dO, [["__scopeId", "data-v-89c3ac05"]]);
var hO = Object.defineProperty, pO = Object.defineProperties, mO = Object.getOwnPropertyDescriptors, qm = Object.getOwnPropertySymbols, wO = Object.prototype.hasOwnProperty, vO = Object.prototype.propertyIsEnumerable, Km = (e, o, r) => o in e ? hO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ya = (e, o) => {
  for (var r in o || (o = {}))
    wO.call(o, r) && Km(e, r, o[r]);
  if (qm)
    for (var r of qm(o))
      vO.call(o, r) && Km(e, r, o[r]);
  return e;
}, P1 = (e, o) => pO(e, mO(o));
const H1 = window.Vue.defineComponent, VO = window.Vue.ref, ni = window.Vue.computed, gO = window.Vue.reactive, ew = window.Vue.watch, _c = window.Vue.inject, j1 = window.Vue.resolveComponent, tu = window.Vue.openBlock, X1 = window.Vue.createElementBlock, Qn = window.Vue.createElementVNode, TO = window.Vue.createBlock, UO = window.Vue.createCommentVNode, L1 = window.Vue.renderSlot, NO = window.Vue.pushScopeId, RO = window.Vue.popScopeId, Ic = window.Vue.toRef, tw = window.Vue.mergeProps, yO = window.Vue.toDisplayString, kO = window.Vue.createVNode;
var $1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const MO = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, bO = H1({
  props: MO,
  setup(e) {
    const o = VO(), r = () => {
      o.value.focus();
    }, a = ni(() => ie("feather-radio-button")), s = gO({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: a.value
    }), c = ni(() => ie("radio-label-id")), d = ni(() => s.first || s.checked ? 0 : -1);
    ew(() => e.disabled, (N) => {
      s.disabled = N;
    }, { immediate: !0 }), ew(() => e.value, (N) => {
      s.value = N;
    }, { immediate: !0 });
    const f = _c("register", (N) => {
    }), m = _c("blur", (N) => {
    }), g = _c("select", (N) => {
    });
    return f(s), {
      labelId: c,
      tabindex: d,
      vm: s,
      blur: m,
      click: () => {
        g(s);
      },
      input: o,
      id: a
    };
  },
  components: {
    FeatherRipple: zn
  }
}), ZO = (e) => (NO("data-v-24790cf0"), e = e(), RO(), e), JO = { class: "layout-container" }, EO = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], SO = { class: "radio hover focus" }, FO = /* @__PURE__ */ ZO(() => /* @__PURE__ */ Qn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Qn("svg", { class: "dot" }, [
    /* @__PURE__ */ Qn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), AO = ["id"];
function CO(e, o, r, a, s, c) {
  const d = j1("feather-ripple");
  return tu(), X1("div", JO, [
    Qn("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: e.id,
      "aria-checked": e.vm.checked ? "true" : "false",
      "aria-disabled": e.vm.disabled ? "true" : "false",
      "aria-labelledby": e.labelId,
      tabindex: e.tabindex,
      onClick: o[0] || (o[0] = (...f) => e.click && e.click(...f)),
      onBlur: o[1] || (o[1] = (...f) => e.blur && e.blur(...f)),
      "data-ref-id": "feather-radio"
    }, [
      Qn("div", SO, [
        FO,
        e.vm.disabled ? UO("", !0) : (tu(), TO(d, {
          key: 0,
          center: ""
        }))
      ]),
      Qn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        L1(e.$slots, "default", {}, void 0, !0)
      ], 8, AO)
    ], 40, EO)
  ]);
}
var rs = /* @__PURE__ */ $1(bO, [["render", CO], ["__scopeId", "data-v-24790cf0"]]);
const WO = P1(Ya({}, mi), {
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
}), xO = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, BO = H1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: WO,
  emits: xO,
  setup(e, o) {
    wi(e);
    const r = Ic(e, "error"), a = Ic(e, "modelValue"), s = ni(() => ie("feather-input-description")), c = ni(() => {
      const d = P1(Ya({}, o.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return d["aria-invalid"] || (d["aria-invalid"] = !!r.value), d;
    });
    return Ya(Ya({
      descriptionId: s,
      attrs: c
    }, _w(a, o.emit, e.label, e.schema, Ic(e, "error"))), pi(o.attrs));
  },
  components: {
    InputSubText: fi
  }
}), _O = ["for"], IO = ["id"];
function DO(e, o, r, a, s, c) {
  const d = j1("InputSubText");
  return tu(), X1("div", tw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    Qn("label", {
      for: e.groupId,
      class: "group-label"
    }, yO(e.label), 9, _O),
    Qn("div", tw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      L1(e.$slots, "default", {}, void 0, !0)
    ], 16, IO),
    kO(d, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var q1 = /* @__PURE__ */ $1(BO, [["render", DO], ["__scopeId", "data-v-6775aeb9"]]);
const OO = window.Vue.openBlock, QO = window.Vue.createElementBlock, zO = window.Vue.createStaticVNode;
var GO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const YO = {}, PO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, HO = /* @__PURE__ */ zO('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), jO = [
  HO
];
function XO(e, o) {
  return OO(), QO("svg", PO, jO);
}
var LO = /* @__PURE__ */ GO(YO, [["render", XO]]);
const $O = window.Vue.openBlock, qO = window.Vue.createElementBlock, KO = window.Vue.createStaticVNode;
var eQ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const tQ = {}, nQ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rQ = /* @__PURE__ */ KO('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), oQ = [
  rQ
];
function iQ(e, o) {
  return $O(), qO("svg", nQ, oQ);
}
var aQ = /* @__PURE__ */ eQ(tQ, [["render", iQ]]);
const sQ = window.Vue.openBlock, lQ = window.Vue.createElementBlock, cQ = window.Vue.createElementVNode;
var uQ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const dQ = {}, fQ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hQ = /* @__PURE__ */ cQ("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), pQ = [
  hQ
];
function mQ(e, o) {
  return sQ(), lQ("svg", fQ, pQ);
}
var wQ = /* @__PURE__ */ uQ(dQ, [["render", mQ]]);
const vQ = window.Vue.openBlock, VQ = window.Vue.createElementBlock, gQ = window.Vue.createStaticVNode;
var TQ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const UQ = {}, NQ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RQ = /* @__PURE__ */ gQ('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), yQ = [
  RQ
];
function kQ(e, o) {
  return vQ(), VQ("svg", NQ, yQ);
}
var MQ = /* @__PURE__ */ TQ(UQ, [["render", kQ]]);
const bQ = window.Vue.openBlock, ZQ = window.Vue.createElementBlock, JQ = window.Vue.createElementVNode;
var EQ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of o)
    r[a] = s;
  return r;
};
const SQ = {}, FQ = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AQ = /* @__PURE__ */ JQ("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), CQ = [
  AQ
];
function WQ(e, o) {
  return bQ(), ZQ("svg", FQ, CQ);
}
var xQ = /* @__PURE__ */ EQ(SQ, [["render", WQ]]);
const Wu = () => window.VRouter || xu, BQ = window.Vue.defineComponent, ke = window.Vue.createElementVNode, li = window.Vue.createTextVNode, qe = window.Vue.unref, wn = window.Vue.createVNode, Ba = window.Vue.withCtx, nw = window.Vue.openBlock, rw = window.Vue.createElementBlock, _Q = window.Vue.createCommentVNode, IQ = window.Vue.pushScopeId, DQ = window.Vue.popScopeId, jt = (e) => (IQ("data-v-b4b3bdcf"), e = e(), DQ(), e), OQ = { class: "container" }, QQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("div", { class: "title" }, "ALEC", -1)), zQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("div", { class: "description" }, [
  /* @__PURE__ */ li(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ ke("br"),
  /* @__PURE__ */ ke("strong", null, "Our goal"),
  /* @__PURE__ */ li(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), GQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("h3", null, "Key Benefits:", -1)), YQ = { class: "list" }, PQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), HQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("span", null, "Assist in root cause analysis.", -1)), jQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), XQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("span", null, "Easy configuration.", -1)), LQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), $Q = {
  key: 0,
  class: "optin"
}, qQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("h3", null, "Enable ALEC for more precise results:", -1)), KQ = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), e5 = { class: "choices" }, t5 = /* @__PURE__ */ jt(() => /* @__PURE__ */ ke("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), n5 = /* @__PURE__ */ li("Yes"), r5 = /* @__PURE__ */ li("No"), o5 = /* @__PURE__ */ li(" Continue "), i5 = window.Vue.ref, a5 = /* @__PURE__ */ BQ({
  __name: "WelcomePage",
  setup(e) {
    const o = Ti(), r = Wu(), a = i5(!0), s = () => {
      const c = Boolean(a.value);
      o.savePermission(c), r.push({ name: "configuration" });
    };
    return (c, d) => (nw(), rw("div", OQ, [
      QQ,
      zQ,
      ke("div", null, [
        GQ,
        ke("div", YQ, [
          ke("div", null, [
            wn(qe(X), {
              icon: qe(MQ),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            PQ
          ]),
          ke("div", null, [
            wn(qe(X), {
              icon: qe(wQ),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            HQ
          ]),
          ke("div", null, [
            wn(qe(X), {
              icon: qe(xQ),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            jQ
          ]),
          ke("div", null, [
            wn(qe(X), {
              icon: qe(LO),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            XQ
          ]),
          ke("div", null, [
            wn(qe(X), {
              icon: qe(aQ),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            LQ
          ])
        ])
      ]),
      qe(o).isAdmin ? (nw(), rw("div", $Q, [
        qQ,
        KQ,
        ke("div", e5, [
          t5,
          wn(qe(q1), {
            horizontal: "",
            modelValue: a.value,
            "onUpdate:modelValue": d[0] || (d[0] = (f) => a.value = f),
            label: ""
          }, {
            default: Ba(() => [
              wn(qe(rs), { value: !0 }, {
                default: Ba(() => [
                  n5
                ]),
                _: 1
              }),
              wn(qe(rs), { value: !1 }, {
                default: Ba(() => [
                  r5
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : _Q("", !0),
      wn(qe(Me), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: Ba(() => [
          o5
        ]),
        _: 1
      })
    ]));
  }
});
const s5 = /* @__PURE__ */ we(a5, [["__scopeId", "data-v-b4b3bdcf"]]), l5 = window.Vue.defineComponent, c5 = window.Vue.createElementVNode, u5 = window.Vue.createTextVNode, d5 = window.Vue.unref, f5 = window.Vue.withCtx, h5 = window.Vue.createVNode, p5 = window.Vue.Fragment, m5 = window.Vue.openBlock, w5 = window.Vue.createElementBlock, v5 = window.Vue.pushScopeId, V5 = window.Vue.popScopeId, g5 = (e) => (v5("data-v-bcb7dcc6"), e = e(), V5(), e), T5 = /* @__PURE__ */ g5(() => /* @__PURE__ */ c5("div", { class: "main" }, "Something bad is happening...", -1)), U5 = /* @__PURE__ */ u5(" Reload "), N5 = /* @__PURE__ */ l5({
  __name: "ErrorPage",
  setup(e) {
    const o = Wu(), r = () => {
      o.push({ name: "situations" });
    };
    return (a, s) => (m5(), w5(p5, null, [
      T5,
      h5(d5(Me), {
        primary: "",
        onClick: r
      }, {
        default: f5(() => [
          U5
        ]),
        _: 1
      })
    ], 64));
  }
});
const R5 = /* @__PURE__ */ we(N5, [["__scopeId", "data-v-bcb7dcc6"]]), y5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", k5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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", M5 = window.Vue.defineComponent, xe = window.Vue.createElementVNode, nu = window.Vue.createTextVNode, Bn = window.Vue.unref, jo = window.Vue.withCtx, Xo = window.Vue.createVNode, b5 = window.Vue.openBlock, Z5 = window.Vue.createElementBlock, J5 = window.Vue.pushScopeId, E5 = window.Vue.popScopeId, gr = (e) => (J5("data-v-9a5b5f4e"), e = e(), E5(), e), S5 = { class: "container" }, F5 = /* @__PURE__ */ gr(() => /* @__PURE__ */ xe("h2", null, "Configuration", -1)), A5 = /* @__PURE__ */ gr(() => /* @__PURE__ */ xe("p", null, [
  /* @__PURE__ */ nu(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ xe("br"),
  /* @__PURE__ */ nu(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ xe("strong", null, [
    /* @__PURE__ */ xe("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), C5 = { class: "radio-content" }, W5 = /* @__PURE__ */ gr(() => /* @__PURE__ */ xe("strong", { class: "title" }, "Clustering", -1)), x5 = /* @__PURE__ */ gr(() => /* @__PURE__ */ xe("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), B5 = /* @__PURE__ */ gr(() => /* @__PURE__ */ xe("img", {
  class: "img",
  src: y5
}, null, -1)), _5 = /* @__PURE__ */ gr(() => /* @__PURE__ */ xe("div", { class: "hellinger" }, [
  /* @__PURE__ */ xe("strong", null, "With hellinger distance"),
  /* @__PURE__ */ xe("br"),
  /* @__PURE__ */ xe("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), I5 = /* @__PURE__ */ gr(() => /* @__PURE__ */ xe("div", { class: "radio-content" }, [
  /* @__PURE__ */ xe("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ xe("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ xe("img", {
    class: "img img2",
    src: k5
  })
], -1)), D5 = /* @__PURE__ */ nu(" Continue "), ow = window.Vue.ref, O5 = /* @__PURE__ */ M5({
  __name: "ConfigurationPage",
  setup(e) {
    const o = Ti(), r = Wu(), a = ow(!1), s = ow(Vt.ENGINE_DBSCAN), c = () => {
      d1(o.allowSave), sC(s.value, a.value), r.push({ name: "situations" });
    };
    return (d, f) => (b5(), Z5("div", S5, [
      F5,
      A5,
      xe("div", null, [
        Xo(Bn(q1), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (m) => s.value = m)
        }, {
          default: jo(() => [
            Xo(Bn(rs), {
              class: "radio",
              value: Bn(Vt).ENGINE_DBSCAN
            }, {
              default: jo(() => [
                xe("div", C5, [
                  W5,
                  x5,
                  B5,
                  Xo(Bn(ws), {
                    modelValue: a.value,
                    "onUpdate:modelValue": f[0] || (f[0] = (m) => a.value = m),
                    disabled: s.value !== Bn(Vt).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: jo(() => [
                      _5
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Xo(Bn(rs), {
              class: "radio",
              value: Bn(Vt).ENGINE_DEEP_LEARNING
            }, {
              default: jo(() => [
                I5
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Xo(Bn(Me), {
        primary: "",
        class: "btn",
        onClick: f[2] || (f[2] = () => c())
      }, {
        default: jo(() => [
          D5
        ]),
        _: 1
      })
    ]));
  }
});
const Q5 = /* @__PURE__ */ we(O5, [["__scopeId", "data-v-9a5b5f4e"]]), z5 = window.VueRouter.createRouter, G5 = window.VueRouter.createWebHistory, Dc = async () => {
  const e = window.VRouter || xu, o = Ti();
  if (!o.userId) {
    const r = await o.getUserRole();
    await o.getAlecInfo(), r ? e.push({ name: "home" }) : e.push({ name: "error" });
  }
}, K1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || xu, r = Ti();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? o.push({ name: "welcome", params: e.params }) : o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Dc(),
    component: s5
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Dc(),
    component: Q5
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Dc(),
    component: fA
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: bD
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: fO
  },
  {
    path: "/error",
    name: "error",
    component: R5
  }
], Oc = window.VRouter;
if (Oc) {
  const e = "Plugin-alecUiExtension", o = Oc.hasRoute(e) ? e : "Plugin";
  for (const r of K1) {
    const { path: a, name: s, component: c, beforeEnter: d } = r;
    Oc.addRoute(o, {
      path: a.slice(1),
      name: s,
      component: c,
      beforeEnter: d
    });
  }
}
const xu = z5({
  history: G5(),
  routes: K1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = KR;

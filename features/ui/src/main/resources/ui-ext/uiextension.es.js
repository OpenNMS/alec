const _e = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
}, QU = {}, OU = window.Vue.resolveComponent, zU = window.Vue.createVNode, GU = window.Vue.openBlock, YU = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const IU = { class: "main" };
function HU(n, i) {
  const r = OU("router-view");
  return GU(), YU("div", IU, [
    zU(r)
  ]);
}
const PU = /* @__PURE__ */ _e(QU, [["render", HU], ["__scopeId", "data-v-5d32d140"]]), jU = window.Vue.defineComponent, XU = window.Vue.openBlock, _U = window.Vue.createBlock, LU = /* @__PURE__ */ jU({
  __name: "App",
  setup(n) {
    return (i, r) => (XU(), _U(PU));
  }
});
var Ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qU(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Pf = { exports: {} }, jl = { exports: {} }, jf = function(i, r) {
  return function() {
    for (var s = new Array(arguments.length), f = 0; f < s.length; f++)
      s[f] = arguments[f];
    return i.apply(r, s);
  };
}, KU = jf, Xl = Object.prototype.toString, _l = function(n) {
  return function(i) {
    var r = Xl.call(i);
    return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function En(n) {
  return n = n.toLowerCase(), function(r) {
    return _l(r) === n;
  };
}
function Ll(n) {
  return Array.isArray(n);
}
function Ti(n) {
  return typeof n > "u";
}
function $U(n) {
  return n !== null && !Ti(n) && n.constructor !== null && !Ti(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
var Xf = En("ArrayBuffer");
function ew(n) {
  var i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && Xf(n.buffer), i;
}
function tw(n) {
  return typeof n == "string";
}
function nw(n) {
  return typeof n == "number";
}
function _f(n) {
  return n !== null && typeof n == "object";
}
function ci(n) {
  if (_l(n) !== "object")
    return !1;
  var i = Object.getPrototypeOf(n);
  return i === null || i === Object.prototype;
}
var rw = En("Date"), aw = En("File"), iw = En("Blob"), ow = En("FileList");
function ql(n) {
  return Xl.call(n) === "[object Function]";
}
function lw(n) {
  return _f(n) && ql(n.pipe);
}
function sw(n) {
  var i = "[object FormData]";
  return n && (typeof FormData == "function" && n instanceof FormData || Xl.call(n) === i || ql(n.toString) && n.toString() === i);
}
var cw = En("URLSearchParams");
function uw(n) {
  return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
}
function dw() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Kl(n, i) {
  if (!(n === null || typeof n > "u"))
    if (typeof n != "object" && (n = [n]), Ll(n))
      for (var r = 0, l = n.length; r < l; r++)
        i.call(null, n[r], r, n);
    else
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && i.call(null, n[s], s, n);
}
function xl() {
  var n = {};
  function i(s, f) {
    ci(n[f]) && ci(s) ? n[f] = xl(n[f], s) : ci(s) ? n[f] = xl({}, s) : Ll(s) ? n[f] = s.slice() : n[f] = s;
  }
  for (var r = 0, l = arguments.length; r < l; r++)
    Kl(arguments[r], i);
  return n;
}
function fw(n, i, r) {
  return Kl(i, function(s, f) {
    r && typeof s == "function" ? n[f] = KU(s, r) : n[f] = s;
  }), n;
}
function hw(n) {
  return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n;
}
function pw(n, i, r, l) {
  n.prototype = Object.create(i.prototype, l), n.prototype.constructor = n, r && Object.assign(n.prototype, r);
}
function mw(n, i, r) {
  var l, s, f, h = {};
  i = i || {};
  do {
    for (l = Object.getOwnPropertyNames(n), s = l.length; s-- > 0; )
      f = l[s], h[f] || (i[f] = n[f], h[f] = !0);
    n = Object.getPrototypeOf(n);
  } while (n && (!r || r(n, i)) && n !== Object.prototype);
  return i;
}
function Vw(n, i, r) {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= i.length;
  var l = n.indexOf(i, r);
  return l !== -1 && l === r;
}
function Tw(n) {
  if (!n)
    return null;
  var i = n.length;
  if (Ti(i))
    return null;
  for (var r = new Array(i); i-- > 0; )
    r[i] = n[i];
  return r;
}
var vw = function(n) {
  return function(i) {
    return n && i instanceof n;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), We = {
  isArray: Ll,
  isArrayBuffer: Xf,
  isBuffer: $U,
  isFormData: sw,
  isArrayBufferView: ew,
  isString: tw,
  isNumber: nw,
  isObject: _f,
  isPlainObject: ci,
  isUndefined: Ti,
  isDate: rw,
  isFile: aw,
  isBlob: iw,
  isFunction: ql,
  isStream: lw,
  isURLSearchParams: cw,
  isStandardBrowserEnv: dw,
  forEach: Kl,
  merge: xl,
  extend: fw,
  trim: uw,
  stripBOM: hw,
  inherits: pw,
  toFlatObject: mw,
  kindOf: _l,
  kindOfTest: En,
  endsWith: Vw,
  toArray: Tw,
  isTypedArray: vw,
  isFileList: ow
}, Xn = We;
function Lu(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Lf = function(i, r, l) {
  if (!r)
    return i;
  var s;
  if (l)
    s = l(r);
  else if (Xn.isURLSearchParams(r))
    s = r.toString();
  else {
    var f = [];
    Xn.forEach(r, function(v, N) {
      v === null || typeof v > "u" || (Xn.isArray(v) ? N = N + "[]" : v = [v], Xn.forEach(v, function(k) {
        Xn.isDate(k) ? k = k.toISOString() : Xn.isObject(k) && (k = JSON.stringify(k)), f.push(Lu(N) + "=" + Lu(k));
      }));
    }), s = f.join("&");
  }
  if (s) {
    var h = i.indexOf("#");
    h !== -1 && (i = i.slice(0, h)), i += (i.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return i;
}, Uw = We;
function Ei() {
  this.handlers = [];
}
Ei.prototype.use = function(i, r, l) {
  return this.handlers.push({
    fulfilled: i,
    rejected: r,
    synchronous: l ? l.synchronous : !1,
    runWhen: l ? l.runWhen : null
  }), this.handlers.length - 1;
};
Ei.prototype.eject = function(i) {
  this.handlers[i] && (this.handlers[i] = null);
};
Ei.prototype.forEach = function(i) {
  Uw.forEach(this.handlers, function(l) {
    l !== null && i(l);
  });
};
var ww = Ei, Rw = We, Nw = function(i, r) {
  Rw.forEach(i, function(s, f) {
    f !== r && f.toUpperCase() === r.toUpperCase() && (i[r] = s, delete i[f]);
  });
}, qf = We;
function or(n, i, r, l, s) {
  Error.call(this), this.message = n, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), l && (this.request = l), s && (this.response = s);
}
qf.inherits(or, Error, {
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
var Kf = or.prototype, $f = {};
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
].forEach(function(n) {
  $f[n] = { value: n };
});
Object.defineProperties(or, $f);
Object.defineProperty(Kf, "isAxiosError", { value: !0 });
or.from = function(n, i, r, l, s, f) {
  var h = Object.create(Kf);
  return qf.toFlatObject(n, h, function(v) {
    return v !== Error.prototype;
  }), or.call(h, n.message, i, r, l, s), h.name = n.name, f && Object.assign(h, f), h;
};
var cr = or, eh = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Mt = We;
function Mw(n, i) {
  i = i || new FormData();
  var r = [];
  function l(f) {
    return f === null ? "" : Mt.isDate(f) ? f.toISOString() : Mt.isArrayBuffer(f) || Mt.isTypedArray(f) ? typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function s(f, h) {
    if (Mt.isPlainObject(f) || Mt.isArray(f)) {
      if (r.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h);
      r.push(f), Mt.forEach(f, function(v, N) {
        if (!Mt.isUndefined(v)) {
          var M = h ? h + "." + N : N, k;
          if (v && !h && typeof v == "object") {
            if (Mt.endsWith(N, "{}"))
              v = JSON.stringify(v);
            else if (Mt.endsWith(N, "[]") && (k = Mt.toArray(v))) {
              k.forEach(function(y) {
                !Mt.isUndefined(y) && i.append(M, l(y));
              });
              return;
            }
          }
          s(v, M);
        }
      }), r.pop();
    } else
      i.append(h, l(f));
  }
  return s(n), i;
}
var th = Mw, rl, qu;
function gw() {
  if (qu)
    return rl;
  qu = 1;
  var n = cr;
  return rl = function(r, l, s) {
    var f = s.config.validateStatus;
    !s.status || !f || f(s.status) ? r(s) : l(new n(
      "Request failed with status code " + s.status,
      [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, rl;
}
var al, Ku;
function Zw() {
  if (Ku)
    return al;
  Ku = 1;
  var n = We;
  return al = n.isStandardBrowserEnv() ? function() {
    return {
      write: function(l, s, f, h, m, v) {
        var N = [];
        N.push(l + "=" + encodeURIComponent(s)), n.isNumber(f) && N.push("expires=" + new Date(f).toGMTString()), n.isString(h) && N.push("path=" + h), n.isString(m) && N.push("domain=" + m), v === !0 && N.push("secure"), document.cookie = N.join("; ");
      },
      read: function(l) {
        var s = document.cookie.match(new RegExp("(^|;\\s*)(" + l + ")=([^;]*)"));
        return s ? decodeURIComponent(s[3]) : null;
      },
      remove: function(l) {
        this.write(l, "", Date.now() - 864e5);
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
  }(), al;
}
var Jw = function(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}, kw = function(i, r) {
  return r ? i.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : i;
}, yw = Jw, bw = kw, nh = function(i, r) {
  return i && !yw(r) ? bw(i, r) : r;
}, il, $u;
function Ew() {
  if ($u)
    return il;
  $u = 1;
  var n = We, i = [
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
  return il = function(l) {
    var s = {}, f, h, m;
    return l && n.forEach(l.split(`
`), function(N) {
      if (m = N.indexOf(":"), f = n.trim(N.substr(0, m)).toLowerCase(), h = n.trim(N.substr(m + 1)), f) {
        if (s[f] && i.indexOf(f) >= 0)
          return;
        f === "set-cookie" ? s[f] = (s[f] ? s[f] : []).concat([h]) : s[f] = s[f] ? s[f] + ", " + h : h;
      }
    }), s;
  }, il;
}
var ol, ed;
function Fw() {
  if (ed)
    return ol;
  ed = 1;
  var n = We;
  return ol = n.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), l = document.createElement("a"), s;
    function f(h) {
      var m = h;
      return r && (l.setAttribute("href", m), m = l.href), l.setAttribute("href", m), {
        href: l.href,
        protocol: l.protocol ? l.protocol.replace(/:$/, "") : "",
        host: l.host,
        search: l.search ? l.search.replace(/^\?/, "") : "",
        hash: l.hash ? l.hash.replace(/^#/, "") : "",
        hostname: l.hostname,
        port: l.port,
        pathname: l.pathname.charAt(0) === "/" ? l.pathname : "/" + l.pathname
      };
    }
    return s = f(window.location.href), function(m) {
      var v = n.isString(m) ? f(m) : m;
      return v.protocol === s.protocol && v.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), ol;
}
var ll, td;
function Fi() {
  if (td)
    return ll;
  td = 1;
  var n = cr, i = We;
  function r(l) {
    n.call(this, l == null ? "canceled" : l, n.ERR_CANCELED), this.name = "CanceledError";
  }
  return i.inherits(r, n, {
    __CANCEL__: !0
  }), ll = r, ll;
}
var sl, nd;
function Ww() {
  return nd || (nd = 1, sl = function(i) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return r && r[1] || "";
  }), sl;
}
var cl, rd;
function ad() {
  if (rd)
    return cl;
  rd = 1;
  var n = We, i = gw(), r = Zw(), l = Lf, s = nh, f = Ew(), h = Fw(), m = eh, v = cr, N = Fi(), M = Ww();
  return cl = function(y) {
    return new Promise(function(S, x) {
      var A = y.data, E = y.headers, G = y.responseType, Q;
      function $() {
        y.cancelToken && y.cancelToken.unsubscribe(Q), y.signal && y.signal.removeEventListener("abort", Q);
      }
      n.isFormData(A) && n.isStandardBrowserEnv() && delete E["Content-Type"];
      var b = new XMLHttpRequest();
      if (y.auth) {
        var ne = y.auth.username || "", q = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        E.Authorization = "Basic " + btoa(ne + ":" + q);
      }
      var X = s(y.baseURL, y.url);
      b.open(y.method.toUpperCase(), l(X, y.params, y.paramsSerializer), !0), b.timeout = y.timeout;
      function Ae() {
        if (!!b) {
          var fe = "getAllResponseHeaders" in b ? f(b.getAllResponseHeaders()) : null, pe = !G || G === "text" || G === "json" ? b.responseText : b.response, Ue = {
            data: pe,
            status: b.status,
            statusText: b.statusText,
            headers: fe,
            config: y,
            request: b
          };
          i(function(ke) {
            S(ke), $();
          }, function(ke) {
            x(ke), $();
          }, Ue), b = null;
        }
      }
      if ("onloadend" in b ? b.onloadend = Ae : b.onreadystatechange = function() {
        !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(Ae);
      }, b.onabort = function() {
        !b || (x(new v("Request aborted", v.ECONNABORTED, y, b)), b = null);
      }, b.onerror = function() {
        x(new v("Network Error", v.ERR_NETWORK, y, b, b)), b = null;
      }, b.ontimeout = function() {
        var pe = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ue = y.transitional || m;
        y.timeoutErrorMessage && (pe = y.timeoutErrorMessage), x(new v(
          pe,
          Ue.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
          y,
          b
        )), b = null;
      }, n.isStandardBrowserEnv()) {
        var Ye = (y.withCredentials || h(X)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        Ye && (E[y.xsrfHeaderName] = Ye);
      }
      "setRequestHeader" in b && n.forEach(E, function(pe, Ue) {
        typeof A > "u" && Ue.toLowerCase() === "content-type" ? delete E[Ue] : b.setRequestHeader(Ue, pe);
      }), n.isUndefined(y.withCredentials) || (b.withCredentials = !!y.withCredentials), G && G !== "json" && (b.responseType = y.responseType), typeof y.onDownloadProgress == "function" && b.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (Q = function(fe) {
        !b || (x(!fe || fe && fe.type ? new N() : fe), b.abort(), b = null);
      }, y.cancelToken && y.cancelToken.subscribe(Q), y.signal && (y.signal.aborted ? Q() : y.signal.addEventListener("abort", Q))), A || (A = null);
      var de = M(X);
      if (de && ["http", "https", "file"].indexOf(de) === -1) {
        x(new v("Unsupported protocol " + de + ":", v.ERR_BAD_REQUEST, y));
        return;
      }
      b.send(A);
    });
  }, cl;
}
var ul, id;
function Sw() {
  return id || (id = 1, ul = null), ul;
}
var Ze = We, od = Nw, ld = cr, Aw = eh, xw = th, Bw = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function sd(n, i) {
  !Ze.isUndefined(n) && Ze.isUndefined(n["Content-Type"]) && (n["Content-Type"] = i);
}
function Cw() {
  var n;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = ad()), n;
}
function Dw(n, i, r) {
  if (Ze.isString(n))
    try {
      return (i || JSON.parse)(n), Ze.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (r || JSON.stringify)(n);
}
var Wi = {
  transitional: Aw,
  adapter: Cw(),
  transformRequest: [function(i, r) {
    if (od(r, "Accept"), od(r, "Content-Type"), Ze.isFormData(i) || Ze.isArrayBuffer(i) || Ze.isBuffer(i) || Ze.isStream(i) || Ze.isFile(i) || Ze.isBlob(i))
      return i;
    if (Ze.isArrayBufferView(i))
      return i.buffer;
    if (Ze.isURLSearchParams(i))
      return sd(r, "application/x-www-form-urlencoded;charset=utf-8"), i.toString();
    var l = Ze.isObject(i), s = r && r["Content-Type"], f;
    if ((f = Ze.isFileList(i)) || l && s === "multipart/form-data") {
      var h = this.env && this.env.FormData;
      return xw(f ? { "files[]": i } : i, h && new h());
    } else if (l || s === "application/json")
      return sd(r, "application/json"), Dw(i);
    return i;
  }],
  transformResponse: [function(i) {
    var r = this.transitional || Wi.transitional, l = r && r.silentJSONParsing, s = r && r.forcedJSONParsing, f = !l && this.responseType === "json";
    if (f || s && Ze.isString(i) && i.length)
      try {
        return JSON.parse(i);
      } catch (h) {
        if (f)
          throw h.name === "SyntaxError" ? ld.from(h, ld.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    return i;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Sw()
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
Ze.forEach(["delete", "get", "head"], function(i) {
  Wi.headers[i] = {};
});
Ze.forEach(["post", "put", "patch"], function(i) {
  Wi.headers[i] = Ze.merge(Bw);
});
var $l = Wi, Qw = We, Ow = $l, zw = function(i, r, l) {
  var s = this || Ow;
  return Qw.forEach(l, function(h) {
    i = h.call(s, i, r);
  }), i;
}, dl, cd;
function rh() {
  return cd || (cd = 1, dl = function(i) {
    return !!(i && i.__CANCEL__);
  }), dl;
}
var ud = We, fl = zw, Gw = rh(), Yw = $l, Iw = Fi();
function hl(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Iw();
}
var Hw = function(i) {
  hl(i), i.headers = i.headers || {}, i.data = fl.call(
    i,
    i.data,
    i.headers,
    i.transformRequest
  ), i.headers = ud.merge(
    i.headers.common || {},
    i.headers[i.method] || {},
    i.headers
  ), ud.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete i.headers[s];
    }
  );
  var r = i.adapter || Yw.adapter;
  return r(i).then(function(s) {
    return hl(i), s.data = fl.call(
      i,
      s.data,
      s.headers,
      i.transformResponse
    ), s;
  }, function(s) {
    return Gw(s) || (hl(i), s && s.response && (s.response.data = fl.call(
      i,
      s.response.data,
      s.response.headers,
      i.transformResponse
    ))), Promise.reject(s);
  });
}, nt = We, ah = function(i, r) {
  r = r || {};
  var l = {};
  function s(M, k) {
    return nt.isPlainObject(M) && nt.isPlainObject(k) ? nt.merge(M, k) : nt.isPlainObject(k) ? nt.merge({}, k) : nt.isArray(k) ? k.slice() : k;
  }
  function f(M) {
    if (nt.isUndefined(r[M])) {
      if (!nt.isUndefined(i[M]))
        return s(void 0, i[M]);
    } else
      return s(i[M], r[M]);
  }
  function h(M) {
    if (!nt.isUndefined(r[M]))
      return s(void 0, r[M]);
  }
  function m(M) {
    if (nt.isUndefined(r[M])) {
      if (!nt.isUndefined(i[M]))
        return s(void 0, i[M]);
    } else
      return s(void 0, r[M]);
  }
  function v(M) {
    if (M in r)
      return s(i[M], r[M]);
    if (M in i)
      return s(void 0, i[M]);
  }
  var N = {
    url: h,
    method: h,
    data: h,
    baseURL: m,
    transformRequest: m,
    transformResponse: m,
    paramsSerializer: m,
    timeout: m,
    timeoutMessage: m,
    withCredentials: m,
    adapter: m,
    responseType: m,
    xsrfCookieName: m,
    xsrfHeaderName: m,
    onUploadProgress: m,
    onDownloadProgress: m,
    decompress: m,
    maxContentLength: m,
    maxBodyLength: m,
    beforeRedirect: m,
    transport: m,
    httpAgent: m,
    httpsAgent: m,
    cancelToken: m,
    socketPath: m,
    responseEncoding: m,
    validateStatus: v
  };
  return nt.forEach(Object.keys(i).concat(Object.keys(r)), function(k) {
    var y = N[k] || f, C = y(k);
    nt.isUndefined(C) && y !== v || (l[k] = C);
  }), l;
}, pl, dd;
function ih() {
  return dd || (dd = 1, pl = {
    version: "0.27.2"
  }), pl;
}
var Pw = ih().version, an = cr, es = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, i) {
  es[n] = function(l) {
    return typeof l === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
var fd = {};
es.transitional = function(i, r, l) {
  function s(f, h) {
    return "[Axios v" + Pw + "] Transitional option '" + f + "'" + h + (l ? ". " + l : "");
  }
  return function(f, h, m) {
    if (i === !1)
      throw new an(
        s(h, " has been removed" + (r ? " in " + r : "")),
        an.ERR_DEPRECATED
      );
    return r && !fd[h] && (fd[h] = !0, console.warn(
      s(
        h,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(f, h, m) : !0;
  };
};
function jw(n, i, r) {
  if (typeof n != "object")
    throw new an("options must be an object", an.ERR_BAD_OPTION_VALUE);
  for (var l = Object.keys(n), s = l.length; s-- > 0; ) {
    var f = l[s], h = i[f];
    if (h) {
      var m = n[f], v = m === void 0 || h(m, f, n);
      if (v !== !0)
        throw new an("option " + f + " must be " + v, an.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new an("Unknown option " + f, an.ERR_BAD_OPTION);
  }
}
var Xw = {
  assertOptions: jw,
  validators: es
}, oh = We, _w = Lf, hd = ww, pd = Hw, Si = ah, Lw = nh, lh = Xw, _n = lh.validators;
function lr(n) {
  this.defaults = n, this.interceptors = {
    request: new hd(),
    response: new hd()
  };
}
lr.prototype.request = function(i, r) {
  typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = Si(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var l = r.transitional;
  l !== void 0 && lh.assertOptions(l, {
    silentJSONParsing: _n.transitional(_n.boolean),
    forcedJSONParsing: _n.transitional(_n.boolean),
    clarifyTimeoutError: _n.transitional(_n.boolean)
  }, !1);
  var s = [], f = !0;
  this.interceptors.request.forEach(function(C) {
    typeof C.runWhen == "function" && C.runWhen(r) === !1 || (f = f && C.synchronous, s.unshift(C.fulfilled, C.rejected));
  });
  var h = [];
  this.interceptors.response.forEach(function(C) {
    h.push(C.fulfilled, C.rejected);
  });
  var m;
  if (!f) {
    var v = [pd, void 0];
    for (Array.prototype.unshift.apply(v, s), v = v.concat(h), m = Promise.resolve(r); v.length; )
      m = m.then(v.shift(), v.shift());
    return m;
  }
  for (var N = r; s.length; ) {
    var M = s.shift(), k = s.shift();
    try {
      N = M(N);
    } catch (y) {
      k(y);
      break;
    }
  }
  try {
    m = pd(N);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; h.length; )
    m = m.then(h.shift(), h.shift());
  return m;
};
lr.prototype.getUri = function(i) {
  i = Si(this.defaults, i);
  var r = Lw(i.baseURL, i.url);
  return _w(r, i.params, i.paramsSerializer);
};
oh.forEach(["delete", "get", "head", "options"], function(i) {
  lr.prototype[i] = function(r, l) {
    return this.request(Si(l || {}, {
      method: i,
      url: r,
      data: (l || {}).data
    }));
  };
});
oh.forEach(["post", "put", "patch"], function(i) {
  function r(l) {
    return function(f, h, m) {
      return this.request(Si(m || {}, {
        method: i,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: h
      }));
    };
  }
  lr.prototype[i] = r(), lr.prototype[i + "Form"] = r(!0);
});
var qw = lr, ml, md;
function Kw() {
  if (md)
    return ml;
  md = 1;
  var n = Fi();
  function i(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var l;
    this.promise = new Promise(function(h) {
      l = h;
    });
    var s = this;
    this.promise.then(function(f) {
      if (!!s._listeners) {
        var h, m = s._listeners.length;
        for (h = 0; h < m; h++)
          s._listeners[h](f);
        s._listeners = null;
      }
    }), this.promise.then = function(f) {
      var h, m = new Promise(function(v) {
        s.subscribe(v), h = v;
      }).then(f);
      return m.cancel = function() {
        s.unsubscribe(h);
      }, m;
    }, r(function(h) {
      s.reason || (s.reason = new n(h), l(s.reason));
    });
  }
  return i.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, i.prototype.subscribe = function(l) {
    if (this.reason) {
      l(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(l) : this._listeners = [l];
  }, i.prototype.unsubscribe = function(l) {
    if (!!this._listeners) {
      var s = this._listeners.indexOf(l);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, i.source = function() {
    var l, s = new i(function(h) {
      l = h;
    });
    return {
      token: s,
      cancel: l
    };
  }, ml = i, ml;
}
var Vl, Vd;
function $w() {
  return Vd || (Vd = 1, Vl = function(i) {
    return function(l) {
      return i.apply(null, l);
    };
  }), Vl;
}
var Tl, Td;
function eR() {
  if (Td)
    return Tl;
  Td = 1;
  var n = We;
  return Tl = function(r) {
    return n.isObject(r) && r.isAxiosError === !0;
  }, Tl;
}
var vd = We, tR = jf, ui = qw, nR = ah, rR = $l;
function sh(n) {
  var i = new ui(n), r = tR(ui.prototype.request, i);
  return vd.extend(r, ui.prototype, i), vd.extend(r, i), r.create = function(s) {
    return sh(nR(n, s));
  }, r;
}
var Xe = sh(rR);
Xe.Axios = ui;
Xe.CanceledError = Fi();
Xe.CancelToken = Kw();
Xe.isCancel = rh();
Xe.VERSION = ih().version;
Xe.toFormData = th;
Xe.AxiosError = cr;
Xe.Cancel = Xe.CanceledError;
Xe.all = function(i) {
  return Promise.all(i);
};
Xe.spread = $w();
Xe.isAxiosError = eR();
jl.exports = Xe;
jl.exports.default = Xe;
(function(n) {
  n.exports = jl.exports;
})(Pf);
const ch = /* @__PURE__ */ qU(Pf.exports), aR = ch.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), ra = ch.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
}), iR = "/alarms", oR = async () => {
  try {
    const n = await aR.get(iR);
    return n.status === 204 ? { alarm: [], totalCount: 0, count: 0, offset: 0 } : n.data;
  } catch {
    return !1;
  }
};
var rt = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(n, i) {
  (function() {
    var r, l = "4.17.21", s = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", m = "Invalid `variable` option passed into `_.template`", v = "__lodash_hash_undefined__", N = 500, M = "__lodash_placeholder__", k = 1, y = 2, C = 4, S = 1, x = 2, A = 1, E = 2, G = 4, Q = 8, $ = 16, b = 32, ne = 64, q = 128, X = 256, Ae = 512, Ye = 30, de = "...", fe = 800, pe = 16, Ue = 1, ie = 2, ke = 3, ye = 1 / 0, De = 9007199254740991, dr = 17976931348623157e292, sa = 0 / 0, Zt = 4294967295, qh = Zt - 1, Kh = Zt >>> 1, $h = [
      ["ary", q],
      ["bind", A],
      ["bindKey", E],
      ["curry", Q],
      ["curryRight", $],
      ["flip", Ae],
      ["partial", b],
      ["partialRight", ne],
      ["rearg", X]
    ], Wn = "[object Arguments]", ca = "[object Array]", ep = "[object AsyncFunction]", fr = "[object Boolean]", hr = "[object Date]", tp = "[object DOMException]", ua = "[object Error]", da = "[object Function]", Us = "[object GeneratorFunction]", Tt = "[object Map]", pr = "[object Number]", np = "[object Null]", Ft = "[object Object]", ws = "[object Promise]", rp = "[object Proxy]", mr = "[object RegExp]", vt = "[object Set]", Vr = "[object String]", fa = "[object Symbol]", ap = "[object Undefined]", Tr = "[object WeakMap]", ip = "[object WeakSet]", vr = "[object ArrayBuffer]", Sn = "[object DataView]", xi = "[object Float32Array]", Bi = "[object Float64Array]", Ci = "[object Int8Array]", Di = "[object Int16Array]", Qi = "[object Int32Array]", Oi = "[object Uint8Array]", zi = "[object Uint8ClampedArray]", Gi = "[object Uint16Array]", Yi = "[object Uint32Array]", op = /\b__p \+= '';/g, lp = /\b(__p \+=) '' \+/g, sp = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Rs = /&(?:amp|lt|gt|quot|#39);/g, Ns = /[&<>"']/g, cp = RegExp(Rs.source), up = RegExp(Ns.source), dp = /<%-([\s\S]+?)%>/g, fp = /<%([\s\S]+?)%>/g, Ms = /<%=([\s\S]+?)%>/g, hp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pp = /^\w*$/, mp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ii = /[\\^$.*+?()[\]{}|]/g, Vp = RegExp(Ii.source), Hi = /^\s+/, Tp = /\s/, vp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Up = /\{\n\/\* \[wrapped with (.+)\] \*/, wp = /,? & /, Rp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Np = /[()=,{}\[\]\/\s]/, Mp = /\\(\\)?/g, gp = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, gs = /\w*$/, Zp = /^[-+]0x[0-9a-f]+$/i, Jp = /^0b[01]+$/i, kp = /^\[object .+?Constructor\]$/, yp = /^0o[0-7]+$/i, bp = /^(?:0|[1-9]\d*)$/, Ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ha = /($^)/, Fp = /['\n\r\u2028\u2029\\]/g, pa = "\\ud800-\\udfff", Wp = "\\u0300-\\u036f", Sp = "\\ufe20-\\ufe2f", Ap = "\\u20d0-\\u20ff", Zs = Wp + Sp + Ap, Js = "\\u2700-\\u27bf", ks = "a-z\\xdf-\\xf6\\xf8-\\xff", xp = "\\xac\\xb1\\xd7\\xf7", Bp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Cp = "\\u2000-\\u206f", Dp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ys = "A-Z\\xc0-\\xd6\\xd8-\\xde", bs = "\\ufe0e\\ufe0f", Es = xp + Bp + Cp + Dp, Pi = "['\u2019]", Qp = "[" + pa + "]", Fs = "[" + Es + "]", ma = "[" + Zs + "]", Ws = "\\d+", Op = "[" + Js + "]", Ss = "[" + ks + "]", As = "[^" + pa + Es + Ws + Js + ks + ys + "]", ji = "\\ud83c[\\udffb-\\udfff]", zp = "(?:" + ma + "|" + ji + ")", xs = "[^" + pa + "]", Xi = "(?:\\ud83c[\\udde6-\\uddff]){2}", _i = "[\\ud800-\\udbff][\\udc00-\\udfff]", An = "[" + ys + "]", Bs = "\\u200d", Cs = "(?:" + Ss + "|" + As + ")", Gp = "(?:" + An + "|" + As + ")", Ds = "(?:" + Pi + "(?:d|ll|m|re|s|t|ve))?", Qs = "(?:" + Pi + "(?:D|LL|M|RE|S|T|VE))?", Os = zp + "?", zs = "[" + bs + "]?", Yp = "(?:" + Bs + "(?:" + [xs, Xi, _i].join("|") + ")" + zs + Os + ")*", Ip = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Hp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gs = zs + Os + Yp, Pp = "(?:" + [Op, Xi, _i].join("|") + ")" + Gs, jp = "(?:" + [xs + ma + "?", ma, Xi, _i, Qp].join("|") + ")", Xp = RegExp(Pi, "g"), _p = RegExp(ma, "g"), Li = RegExp(ji + "(?=" + ji + ")|" + jp + Gs, "g"), Lp = RegExp([
      An + "?" + Ss + "+" + Ds + "(?=" + [Fs, An, "$"].join("|") + ")",
      Gp + "+" + Qs + "(?=" + [Fs, An + Cs, "$"].join("|") + ")",
      An + "?" + Cs + "+" + Ds,
      An + "+" + Qs,
      Hp,
      Ip,
      Ws,
      Pp
    ].join("|"), "g"), qp = RegExp("[" + Bs + pa + Zs + bs + "]"), Kp = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, $p = [
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
    ], em = -1, se = {};
    se[xi] = se[Bi] = se[Ci] = se[Di] = se[Qi] = se[Oi] = se[zi] = se[Gi] = se[Yi] = !0, se[Wn] = se[ca] = se[vr] = se[fr] = se[Sn] = se[hr] = se[ua] = se[da] = se[Tt] = se[pr] = se[Ft] = se[mr] = se[vt] = se[Vr] = se[Tr] = !1;
    var le = {};
    le[Wn] = le[ca] = le[vr] = le[Sn] = le[fr] = le[hr] = le[xi] = le[Bi] = le[Ci] = le[Di] = le[Qi] = le[Tt] = le[pr] = le[Ft] = le[mr] = le[vt] = le[Vr] = le[fa] = le[Oi] = le[zi] = le[Gi] = le[Yi] = !0, le[ua] = le[da] = le[Tr] = !1;
    var tm = {
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
    }, nm = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, rm = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, am = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, im = parseFloat, om = parseInt, Ys = typeof Ar == "object" && Ar && Ar.Object === Object && Ar, lm = typeof self == "object" && self && self.Object === Object && self, be = Ys || lm || Function("return this")(), qi = i && !i.nodeType && i, dn = qi && !0 && n && !n.nodeType && n, Is = dn && dn.exports === qi, Ki = Is && Ys.process, ot = function() {
      try {
        var T = dn && dn.require && dn.require("util").types;
        return T || Ki && Ki.binding && Ki.binding("util");
      } catch {
      }
    }(), Hs = ot && ot.isArrayBuffer, Ps = ot && ot.isDate, js = ot && ot.isMap, Xs = ot && ot.isRegExp, _s = ot && ot.isSet, Ls = ot && ot.isTypedArray;
    function Le(T, R, w) {
      switch (w.length) {
        case 0:
          return T.call(R);
        case 1:
          return T.call(R, w[0]);
        case 2:
          return T.call(R, w[0], w[1]);
        case 3:
          return T.call(R, w[0], w[1], w[2]);
      }
      return T.apply(R, w);
    }
    function sm(T, R, w, W) {
      for (var Y = -1, ee = T == null ? 0 : T.length; ++Y < ee; ) {
        var we = T[Y];
        R(W, we, w(we), T);
      }
      return W;
    }
    function lt(T, R) {
      for (var w = -1, W = T == null ? 0 : T.length; ++w < W && R(T[w], w, T) !== !1; )
        ;
      return T;
    }
    function cm(T, R) {
      for (var w = T == null ? 0 : T.length; w-- && R(T[w], w, T) !== !1; )
        ;
      return T;
    }
    function qs(T, R) {
      for (var w = -1, W = T == null ? 0 : T.length; ++w < W; )
        if (!R(T[w], w, T))
          return !1;
      return !0;
    }
    function Pt(T, R) {
      for (var w = -1, W = T == null ? 0 : T.length, Y = 0, ee = []; ++w < W; ) {
        var we = T[w];
        R(we, w, T) && (ee[Y++] = we);
      }
      return ee;
    }
    function Va(T, R) {
      var w = T == null ? 0 : T.length;
      return !!w && xn(T, R, 0) > -1;
    }
    function $i(T, R, w) {
      for (var W = -1, Y = T == null ? 0 : T.length; ++W < Y; )
        if (w(R, T[W]))
          return !0;
      return !1;
    }
    function ce(T, R) {
      for (var w = -1, W = T == null ? 0 : T.length, Y = Array(W); ++w < W; )
        Y[w] = R(T[w], w, T);
      return Y;
    }
    function jt(T, R) {
      for (var w = -1, W = R.length, Y = T.length; ++w < W; )
        T[Y + w] = R[w];
      return T;
    }
    function eo(T, R, w, W) {
      var Y = -1, ee = T == null ? 0 : T.length;
      for (W && ee && (w = T[++Y]); ++Y < ee; )
        w = R(w, T[Y], Y, T);
      return w;
    }
    function um(T, R, w, W) {
      var Y = T == null ? 0 : T.length;
      for (W && Y && (w = T[--Y]); Y--; )
        w = R(w, T[Y], Y, T);
      return w;
    }
    function to(T, R) {
      for (var w = -1, W = T == null ? 0 : T.length; ++w < W; )
        if (R(T[w], w, T))
          return !0;
      return !1;
    }
    var dm = no("length");
    function fm(T) {
      return T.split("");
    }
    function hm(T) {
      return T.match(Rp) || [];
    }
    function Ks(T, R, w) {
      var W;
      return w(T, function(Y, ee, we) {
        if (R(Y, ee, we))
          return W = ee, !1;
      }), W;
    }
    function Ta(T, R, w, W) {
      for (var Y = T.length, ee = w + (W ? 1 : -1); W ? ee-- : ++ee < Y; )
        if (R(T[ee], ee, T))
          return ee;
      return -1;
    }
    function xn(T, R, w) {
      return R === R ? Zm(T, R, w) : Ta(T, $s, w);
    }
    function pm(T, R, w, W) {
      for (var Y = w - 1, ee = T.length; ++Y < ee; )
        if (W(T[Y], R))
          return Y;
      return -1;
    }
    function $s(T) {
      return T !== T;
    }
    function ec(T, R) {
      var w = T == null ? 0 : T.length;
      return w ? ao(T, R) / w : sa;
    }
    function no(T) {
      return function(R) {
        return R == null ? r : R[T];
      };
    }
    function ro(T) {
      return function(R) {
        return T == null ? r : T[R];
      };
    }
    function tc(T, R, w, W, Y) {
      return Y(T, function(ee, we, oe) {
        w = W ? (W = !1, ee) : R(w, ee, we, oe);
      }), w;
    }
    function mm(T, R) {
      var w = T.length;
      for (T.sort(R); w--; )
        T[w] = T[w].value;
      return T;
    }
    function ao(T, R) {
      for (var w, W = -1, Y = T.length; ++W < Y; ) {
        var ee = R(T[W]);
        ee !== r && (w = w === r ? ee : w + ee);
      }
      return w;
    }
    function io(T, R) {
      for (var w = -1, W = Array(T); ++w < T; )
        W[w] = R(w);
      return W;
    }
    function Vm(T, R) {
      return ce(R, function(w) {
        return [w, T[w]];
      });
    }
    function nc(T) {
      return T && T.slice(0, oc(T) + 1).replace(Hi, "");
    }
    function qe(T) {
      return function(R) {
        return T(R);
      };
    }
    function oo(T, R) {
      return ce(R, function(w) {
        return T[w];
      });
    }
    function Ur(T, R) {
      return T.has(R);
    }
    function rc(T, R) {
      for (var w = -1, W = T.length; ++w < W && xn(R, T[w], 0) > -1; )
        ;
      return w;
    }
    function ac(T, R) {
      for (var w = T.length; w-- && xn(R, T[w], 0) > -1; )
        ;
      return w;
    }
    function Tm(T, R) {
      for (var w = T.length, W = 0; w--; )
        T[w] === R && ++W;
      return W;
    }
    var vm = ro(tm), Um = ro(nm);
    function wm(T) {
      return "\\" + am[T];
    }
    function Rm(T, R) {
      return T == null ? r : T[R];
    }
    function Bn(T) {
      return qp.test(T);
    }
    function Nm(T) {
      return Kp.test(T);
    }
    function Mm(T) {
      for (var R, w = []; !(R = T.next()).done; )
        w.push(R.value);
      return w;
    }
    function lo(T) {
      var R = -1, w = Array(T.size);
      return T.forEach(function(W, Y) {
        w[++R] = [Y, W];
      }), w;
    }
    function ic(T, R) {
      return function(w) {
        return T(R(w));
      };
    }
    function Xt(T, R) {
      for (var w = -1, W = T.length, Y = 0, ee = []; ++w < W; ) {
        var we = T[w];
        (we === R || we === M) && (T[w] = M, ee[Y++] = w);
      }
      return ee;
    }
    function va(T) {
      var R = -1, w = Array(T.size);
      return T.forEach(function(W) {
        w[++R] = W;
      }), w;
    }
    function gm(T) {
      var R = -1, w = Array(T.size);
      return T.forEach(function(W) {
        w[++R] = [W, W];
      }), w;
    }
    function Zm(T, R, w) {
      for (var W = w - 1, Y = T.length; ++W < Y; )
        if (T[W] === R)
          return W;
      return -1;
    }
    function Jm(T, R, w) {
      for (var W = w + 1; W--; )
        if (T[W] === R)
          return W;
      return W;
    }
    function Cn(T) {
      return Bn(T) ? ym(T) : dm(T);
    }
    function Ut(T) {
      return Bn(T) ? bm(T) : fm(T);
    }
    function oc(T) {
      for (var R = T.length; R-- && Tp.test(T.charAt(R)); )
        ;
      return R;
    }
    var km = ro(rm);
    function ym(T) {
      for (var R = Li.lastIndex = 0; Li.test(T); )
        ++R;
      return R;
    }
    function bm(T) {
      return T.match(Li) || [];
    }
    function Em(T) {
      return T.match(Lp) || [];
    }
    var Fm = function T(R) {
      R = R == null ? be : Dn.defaults(be.Object(), R, Dn.pick(be, $p));
      var w = R.Array, W = R.Date, Y = R.Error, ee = R.Function, we = R.Math, oe = R.Object, so = R.RegExp, Wm = R.String, st = R.TypeError, Ua = w.prototype, Sm = ee.prototype, Qn = oe.prototype, wa = R["__core-js_shared__"], Ra = Sm.toString, re = Qn.hasOwnProperty, Am = 0, lc = function() {
        var e = /[^.]+$/.exec(wa && wa.keys && wa.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Na = Qn.toString, xm = Ra.call(oe), Bm = be._, Cm = so(
        "^" + Ra.call(re).replace(Ii, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ma = Is ? R.Buffer : r, _t = R.Symbol, ga = R.Uint8Array, sc = Ma ? Ma.allocUnsafe : r, Za = ic(oe.getPrototypeOf, oe), cc = oe.create, uc = Qn.propertyIsEnumerable, Ja = Ua.splice, dc = _t ? _t.isConcatSpreadable : r, wr = _t ? _t.iterator : r, fn = _t ? _t.toStringTag : r, ka = function() {
        try {
          var e = Tn(oe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Dm = R.clearTimeout !== be.clearTimeout && R.clearTimeout, Qm = W && W.now !== be.Date.now && W.now, Om = R.setTimeout !== be.setTimeout && R.setTimeout, ya = we.ceil, ba = we.floor, co = oe.getOwnPropertySymbols, zm = Ma ? Ma.isBuffer : r, fc = R.isFinite, Gm = Ua.join, Ym = ic(oe.keys, oe), Re = we.max, xe = we.min, Im = W.now, Hm = R.parseInt, hc = we.random, Pm = Ua.reverse, uo = Tn(R, "DataView"), Rr = Tn(R, "Map"), fo = Tn(R, "Promise"), On = Tn(R, "Set"), Nr = Tn(R, "WeakMap"), Mr = Tn(oe, "create"), Ea = Nr && new Nr(), zn = {}, jm = vn(uo), Xm = vn(Rr), _m = vn(fo), Lm = vn(On), qm = vn(Nr), Fa = _t ? _t.prototype : r, gr = Fa ? Fa.valueOf : r, pc = Fa ? Fa.toString : r;
      function u(e) {
        if (he(e) && !I(e) && !(e instanceof L)) {
          if (e instanceof ct)
            return e;
          if (re.call(e, "__wrapped__"))
            return mu(e);
        }
        return new ct(e);
      }
      var Gn = function() {
        function e() {
        }
        return function(t) {
          if (!ue(t))
            return {};
          if (cc)
            return cc(t);
          e.prototype = t;
          var a = new e();
          return e.prototype = r, a;
        };
      }();
      function Wa() {
      }
      function ct(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      u.templateSettings = {
        escape: dp,
        evaluate: fp,
        interpolate: Ms,
        variable: "",
        imports: {
          _: u
        }
      }, u.prototype = Wa.prototype, u.prototype.constructor = u, ct.prototype = Gn(Wa.prototype), ct.prototype.constructor = ct;
      function L(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Zt, this.__views__ = [];
      }
      function Km() {
        var e = new L(this.__wrapped__);
        return e.__actions__ = Ie(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ie(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ie(this.__views__), e;
      }
      function $m() {
        if (this.__filtered__) {
          var e = new L(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function eV() {
        var e = this.__wrapped__.value(), t = this.__dir__, a = I(e), o = t < 0, c = a ? e.length : 0, d = f1(0, c, this.__views__), p = d.start, V = d.end, U = V - p, g = o ? V : p - 1, Z = this.__iteratees__, J = Z.length, F = 0, B = xe(U, this.__takeCount__);
        if (!a || !o && c == U && B == U)
          return Dc(e, this.__actions__);
        var O = [];
        e:
          for (; U-- && F < B; ) {
            g += t;
            for (var P = -1, z = e[g]; ++P < J; ) {
              var _ = Z[P], K = _.iteratee, et = _.type, ze = K(z);
              if (et == ie)
                z = ze;
              else if (!ze) {
                if (et == Ue)
                  continue e;
                break e;
              }
            }
            O[F++] = z;
          }
        return O;
      }
      L.prototype = Gn(Wa.prototype), L.prototype.constructor = L;
      function hn(e) {
        var t = -1, a = e == null ? 0 : e.length;
        for (this.clear(); ++t < a; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function tV() {
        this.__data__ = Mr ? Mr(null) : {}, this.size = 0;
      }
      function nV(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function rV(e) {
        var t = this.__data__;
        if (Mr) {
          var a = t[e];
          return a === v ? r : a;
        }
        return re.call(t, e) ? t[e] : r;
      }
      function aV(e) {
        var t = this.__data__;
        return Mr ? t[e] !== r : re.call(t, e);
      }
      function iV(e, t) {
        var a = this.__data__;
        return this.size += this.has(e) ? 0 : 1, a[e] = Mr && t === r ? v : t, this;
      }
      hn.prototype.clear = tV, hn.prototype.delete = nV, hn.prototype.get = rV, hn.prototype.has = aV, hn.prototype.set = iV;
      function Wt(e) {
        var t = -1, a = e == null ? 0 : e.length;
        for (this.clear(); ++t < a; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function oV() {
        this.__data__ = [], this.size = 0;
      }
      function lV(e) {
        var t = this.__data__, a = Sa(t, e);
        if (a < 0)
          return !1;
        var o = t.length - 1;
        return a == o ? t.pop() : Ja.call(t, a, 1), --this.size, !0;
      }
      function sV(e) {
        var t = this.__data__, a = Sa(t, e);
        return a < 0 ? r : t[a][1];
      }
      function cV(e) {
        return Sa(this.__data__, e) > -1;
      }
      function uV(e, t) {
        var a = this.__data__, o = Sa(a, e);
        return o < 0 ? (++this.size, a.push([e, t])) : a[o][1] = t, this;
      }
      Wt.prototype.clear = oV, Wt.prototype.delete = lV, Wt.prototype.get = sV, Wt.prototype.has = cV, Wt.prototype.set = uV;
      function St(e) {
        var t = -1, a = e == null ? 0 : e.length;
        for (this.clear(); ++t < a; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function dV() {
        this.size = 0, this.__data__ = {
          hash: new hn(),
          map: new (Rr || Wt)(),
          string: new hn()
        };
      }
      function fV(e) {
        var t = Ha(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function hV(e) {
        return Ha(this, e).get(e);
      }
      function pV(e) {
        return Ha(this, e).has(e);
      }
      function mV(e, t) {
        var a = Ha(this, e), o = a.size;
        return a.set(e, t), this.size += a.size == o ? 0 : 1, this;
      }
      St.prototype.clear = dV, St.prototype.delete = fV, St.prototype.get = hV, St.prototype.has = pV, St.prototype.set = mV;
      function pn(e) {
        var t = -1, a = e == null ? 0 : e.length;
        for (this.__data__ = new St(); ++t < a; )
          this.add(e[t]);
      }
      function VV(e) {
        return this.__data__.set(e, v), this;
      }
      function TV(e) {
        return this.__data__.has(e);
      }
      pn.prototype.add = pn.prototype.push = VV, pn.prototype.has = TV;
      function wt(e) {
        var t = this.__data__ = new Wt(e);
        this.size = t.size;
      }
      function vV() {
        this.__data__ = new Wt(), this.size = 0;
      }
      function UV(e) {
        var t = this.__data__, a = t.delete(e);
        return this.size = t.size, a;
      }
      function wV(e) {
        return this.__data__.get(e);
      }
      function RV(e) {
        return this.__data__.has(e);
      }
      function NV(e, t) {
        var a = this.__data__;
        if (a instanceof Wt) {
          var o = a.__data__;
          if (!Rr || o.length < s - 1)
            return o.push([e, t]), this.size = ++a.size, this;
          a = this.__data__ = new St(o);
        }
        return a.set(e, t), this.size = a.size, this;
      }
      wt.prototype.clear = vV, wt.prototype.delete = UV, wt.prototype.get = wV, wt.prototype.has = RV, wt.prototype.set = NV;
      function mc(e, t) {
        var a = I(e), o = !a && Un(e), c = !a && !o && en(e), d = !a && !o && !c && Pn(e), p = a || o || c || d, V = p ? io(e.length, Wm) : [], U = V.length;
        for (var g in e)
          (t || re.call(e, g)) && !(p && (g == "length" || c && (g == "offset" || g == "parent") || d && (g == "buffer" || g == "byteLength" || g == "byteOffset") || Ct(g, U))) && V.push(g);
        return V;
      }
      function Vc(e) {
        var t = e.length;
        return t ? e[Mo(0, t - 1)] : r;
      }
      function MV(e, t) {
        return Pa(Ie(e), mn(t, 0, e.length));
      }
      function gV(e) {
        return Pa(Ie(e));
      }
      function ho(e, t, a) {
        (a !== r && !Rt(e[t], a) || a === r && !(t in e)) && At(e, t, a);
      }
      function Zr(e, t, a) {
        var o = e[t];
        (!(re.call(e, t) && Rt(o, a)) || a === r && !(t in e)) && At(e, t, a);
      }
      function Sa(e, t) {
        for (var a = e.length; a--; )
          if (Rt(e[a][0], t))
            return a;
        return -1;
      }
      function ZV(e, t, a, o) {
        return Lt(e, function(c, d, p) {
          t(o, c, a(c), p);
        }), o;
      }
      function Tc(e, t) {
        return e && kt(t, Me(t), e);
      }
      function JV(e, t) {
        return e && kt(t, Pe(t), e);
      }
      function At(e, t, a) {
        t == "__proto__" && ka ? ka(e, t, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : e[t] = a;
      }
      function po(e, t) {
        for (var a = -1, o = t.length, c = w(o), d = e == null; ++a < o; )
          c[a] = d ? r : Xo(e, t[a]);
        return c;
      }
      function mn(e, t, a) {
        return e === e && (a !== r && (e = e <= a ? e : a), t !== r && (e = e >= t ? e : t)), e;
      }
      function ut(e, t, a, o, c, d) {
        var p, V = t & k, U = t & y, g = t & C;
        if (a && (p = c ? a(e, o, c, d) : a(e)), p !== r)
          return p;
        if (!ue(e))
          return e;
        var Z = I(e);
        if (Z) {
          if (p = p1(e), !V)
            return Ie(e, p);
        } else {
          var J = Be(e), F = J == da || J == Us;
          if (en(e))
            return zc(e, V);
          if (J == Ft || J == Wn || F && !c) {
            if (p = U || F ? {} : ou(e), !V)
              return U ? r1(e, JV(p, e)) : n1(e, Tc(p, e));
          } else {
            if (!le[J])
              return c ? e : {};
            p = m1(e, J, V);
          }
        }
        d || (d = new wt());
        var B = d.get(e);
        if (B)
          return B;
        d.set(e, p), xu(e) ? e.forEach(function(z) {
          p.add(ut(z, t, a, z, e, d));
        }) : Su(e) && e.forEach(function(z, _) {
          p.set(_, ut(z, t, a, _, e, d));
        });
        var O = g ? U ? Ao : So : U ? Pe : Me, P = Z ? r : O(e);
        return lt(P || e, function(z, _) {
          P && (_ = z, z = e[_]), Zr(p, _, ut(z, t, a, _, e, d));
        }), p;
      }
      function kV(e) {
        var t = Me(e);
        return function(a) {
          return vc(a, e, t);
        };
      }
      function vc(e, t, a) {
        var o = a.length;
        if (e == null)
          return !o;
        for (e = oe(e); o--; ) {
          var c = a[o], d = t[c], p = e[c];
          if (p === r && !(c in e) || !d(p))
            return !1;
        }
        return !0;
      }
      function Uc(e, t, a) {
        if (typeof e != "function")
          throw new st(h);
        return Wr(function() {
          e.apply(r, a);
        }, t);
      }
      function Jr(e, t, a, o) {
        var c = -1, d = Va, p = !0, V = e.length, U = [], g = t.length;
        if (!V)
          return U;
        a && (t = ce(t, qe(a))), o ? (d = $i, p = !1) : t.length >= s && (d = Ur, p = !1, t = new pn(t));
        e:
          for (; ++c < V; ) {
            var Z = e[c], J = a == null ? Z : a(Z);
            if (Z = o || Z !== 0 ? Z : 0, p && J === J) {
              for (var F = g; F--; )
                if (t[F] === J)
                  continue e;
              U.push(Z);
            } else
              d(t, J, o) || U.push(Z);
          }
        return U;
      }
      var Lt = Pc(Jt), wc = Pc(Vo, !0);
      function yV(e, t) {
        var a = !0;
        return Lt(e, function(o, c, d) {
          return a = !!t(o, c, d), a;
        }), a;
      }
      function Aa(e, t, a) {
        for (var o = -1, c = e.length; ++o < c; ) {
          var d = e[o], p = t(d);
          if (p != null && (V === r ? p === p && !$e(p) : a(p, V)))
            var V = p, U = d;
        }
        return U;
      }
      function bV(e, t, a, o) {
        var c = e.length;
        for (a = H(a), a < 0 && (a = -a > c ? 0 : c + a), o = o === r || o > c ? c : H(o), o < 0 && (o += c), o = a > o ? 0 : Cu(o); a < o; )
          e[a++] = t;
        return e;
      }
      function Rc(e, t) {
        var a = [];
        return Lt(e, function(o, c, d) {
          t(o, c, d) && a.push(o);
        }), a;
      }
      function Ee(e, t, a, o, c) {
        var d = -1, p = e.length;
        for (a || (a = T1), c || (c = []); ++d < p; ) {
          var V = e[d];
          t > 0 && a(V) ? t > 1 ? Ee(V, t - 1, a, o, c) : jt(c, V) : o || (c[c.length] = V);
        }
        return c;
      }
      var mo = jc(), Nc = jc(!0);
      function Jt(e, t) {
        return e && mo(e, t, Me);
      }
      function Vo(e, t) {
        return e && Nc(e, t, Me);
      }
      function xa(e, t) {
        return Pt(t, function(a) {
          return Dt(e[a]);
        });
      }
      function Vn(e, t) {
        t = Kt(t, e);
        for (var a = 0, o = t.length; e != null && a < o; )
          e = e[yt(t[a++])];
        return a && a == o ? e : r;
      }
      function Mc(e, t, a) {
        var o = t(e);
        return I(e) ? o : jt(o, a(e));
      }
      function Qe(e) {
        return e == null ? e === r ? ap : np : fn && fn in oe(e) ? d1(e) : g1(e);
      }
      function To(e, t) {
        return e > t;
      }
      function EV(e, t) {
        return e != null && re.call(e, t);
      }
      function FV(e, t) {
        return e != null && t in oe(e);
      }
      function WV(e, t, a) {
        return e >= xe(t, a) && e < Re(t, a);
      }
      function vo(e, t, a) {
        for (var o = a ? $i : Va, c = e[0].length, d = e.length, p = d, V = w(d), U = 1 / 0, g = []; p--; ) {
          var Z = e[p];
          p && t && (Z = ce(Z, qe(t))), U = xe(Z.length, U), V[p] = !a && (t || c >= 120 && Z.length >= 120) ? new pn(p && Z) : r;
        }
        Z = e[0];
        var J = -1, F = V[0];
        e:
          for (; ++J < c && g.length < U; ) {
            var B = Z[J], O = t ? t(B) : B;
            if (B = a || B !== 0 ? B : 0, !(F ? Ur(F, O) : o(g, O, a))) {
              for (p = d; --p; ) {
                var P = V[p];
                if (!(P ? Ur(P, O) : o(e[p], O, a)))
                  continue e;
              }
              F && F.push(O), g.push(B);
            }
          }
        return g;
      }
      function SV(e, t, a, o) {
        return Jt(e, function(c, d, p) {
          t(o, a(c), d, p);
        }), o;
      }
      function kr(e, t, a) {
        t = Kt(t, e), e = uu(e, t);
        var o = e == null ? e : e[yt(ft(t))];
        return o == null ? r : Le(o, e, a);
      }
      function gc(e) {
        return he(e) && Qe(e) == Wn;
      }
      function AV(e) {
        return he(e) && Qe(e) == vr;
      }
      function xV(e) {
        return he(e) && Qe(e) == hr;
      }
      function yr(e, t, a, o, c) {
        return e === t ? !0 : e == null || t == null || !he(e) && !he(t) ? e !== e && t !== t : BV(e, t, a, o, yr, c);
      }
      function BV(e, t, a, o, c, d) {
        var p = I(e), V = I(t), U = p ? ca : Be(e), g = V ? ca : Be(t);
        U = U == Wn ? Ft : U, g = g == Wn ? Ft : g;
        var Z = U == Ft, J = g == Ft, F = U == g;
        if (F && en(e)) {
          if (!en(t))
            return !1;
          p = !0, Z = !1;
        }
        if (F && !Z)
          return d || (d = new wt()), p || Pn(e) ? ru(e, t, a, o, c, d) : c1(e, t, U, a, o, c, d);
        if (!(a & S)) {
          var B = Z && re.call(e, "__wrapped__"), O = J && re.call(t, "__wrapped__");
          if (B || O) {
            var P = B ? e.value() : e, z = O ? t.value() : t;
            return d || (d = new wt()), c(P, z, a, o, d);
          }
        }
        return F ? (d || (d = new wt()), u1(e, t, a, o, c, d)) : !1;
      }
      function CV(e) {
        return he(e) && Be(e) == Tt;
      }
      function Uo(e, t, a, o) {
        var c = a.length, d = c, p = !o;
        if (e == null)
          return !d;
        for (e = oe(e); c--; ) {
          var V = a[c];
          if (p && V[2] ? V[1] !== e[V[0]] : !(V[0] in e))
            return !1;
        }
        for (; ++c < d; ) {
          V = a[c];
          var U = V[0], g = e[U], Z = V[1];
          if (p && V[2]) {
            if (g === r && !(U in e))
              return !1;
          } else {
            var J = new wt();
            if (o)
              var F = o(g, Z, U, e, t, J);
            if (!(F === r ? yr(Z, g, S | x, o, J) : F))
              return !1;
          }
        }
        return !0;
      }
      function Zc(e) {
        if (!ue(e) || U1(e))
          return !1;
        var t = Dt(e) ? Cm : kp;
        return t.test(vn(e));
      }
      function DV(e) {
        return he(e) && Qe(e) == mr;
      }
      function QV(e) {
        return he(e) && Be(e) == vt;
      }
      function OV(e) {
        return he(e) && Ka(e.length) && !!se[Qe(e)];
      }
      function Jc(e) {
        return typeof e == "function" ? e : e == null ? je : typeof e == "object" ? I(e) ? bc(e[0], e[1]) : yc(e) : Xu(e);
      }
      function wo(e) {
        if (!Fr(e))
          return Ym(e);
        var t = [];
        for (var a in oe(e))
          re.call(e, a) && a != "constructor" && t.push(a);
        return t;
      }
      function zV(e) {
        if (!ue(e))
          return M1(e);
        var t = Fr(e), a = [];
        for (var o in e)
          o == "constructor" && (t || !re.call(e, o)) || a.push(o);
        return a;
      }
      function Ro(e, t) {
        return e < t;
      }
      function kc(e, t) {
        var a = -1, o = He(e) ? w(e.length) : [];
        return Lt(e, function(c, d, p) {
          o[++a] = t(c, d, p);
        }), o;
      }
      function yc(e) {
        var t = Bo(e);
        return t.length == 1 && t[0][2] ? su(t[0][0], t[0][1]) : function(a) {
          return a === e || Uo(a, e, t);
        };
      }
      function bc(e, t) {
        return Do(e) && lu(t) ? su(yt(e), t) : function(a) {
          var o = Xo(a, e);
          return o === r && o === t ? _o(a, e) : yr(t, o, S | x);
        };
      }
      function Ba(e, t, a, o, c) {
        e !== t && mo(t, function(d, p) {
          if (c || (c = new wt()), ue(d))
            GV(e, t, p, a, Ba, o, c);
          else {
            var V = o ? o(Oo(e, p), d, p + "", e, t, c) : r;
            V === r && (V = d), ho(e, p, V);
          }
        }, Pe);
      }
      function GV(e, t, a, o, c, d, p) {
        var V = Oo(e, a), U = Oo(t, a), g = p.get(U);
        if (g) {
          ho(e, a, g);
          return;
        }
        var Z = d ? d(V, U, a + "", e, t, p) : r, J = Z === r;
        if (J) {
          var F = I(U), B = !F && en(U), O = !F && !B && Pn(U);
          Z = U, F || B || O ? I(V) ? Z = V : me(V) ? Z = Ie(V) : B ? (J = !1, Z = zc(U, !0)) : O ? (J = !1, Z = Gc(U, !0)) : Z = [] : Sr(U) || Un(U) ? (Z = V, Un(V) ? Z = Du(V) : (!ue(V) || Dt(V)) && (Z = ou(U))) : J = !1;
        }
        J && (p.set(U, Z), c(Z, U, o, d, p), p.delete(U)), ho(e, a, Z);
      }
      function Ec(e, t) {
        var a = e.length;
        if (!!a)
          return t += t < 0 ? a : 0, Ct(t, a) ? e[t] : r;
      }
      function Fc(e, t, a) {
        t.length ? t = ce(t, function(d) {
          return I(d) ? function(p) {
            return Vn(p, d.length === 1 ? d[0] : d);
          } : d;
        }) : t = [je];
        var o = -1;
        t = ce(t, qe(D()));
        var c = kc(e, function(d, p, V) {
          var U = ce(t, function(g) {
            return g(d);
          });
          return { criteria: U, index: ++o, value: d };
        });
        return mm(c, function(d, p) {
          return t1(d, p, a);
        });
      }
      function YV(e, t) {
        return Wc(e, t, function(a, o) {
          return _o(e, o);
        });
      }
      function Wc(e, t, a) {
        for (var o = -1, c = t.length, d = {}; ++o < c; ) {
          var p = t[o], V = Vn(e, p);
          a(V, p) && br(d, Kt(p, e), V);
        }
        return d;
      }
      function IV(e) {
        return function(t) {
          return Vn(t, e);
        };
      }
      function No(e, t, a, o) {
        var c = o ? pm : xn, d = -1, p = t.length, V = e;
        for (e === t && (t = Ie(t)), a && (V = ce(e, qe(a))); ++d < p; )
          for (var U = 0, g = t[d], Z = a ? a(g) : g; (U = c(V, Z, U, o)) > -1; )
            V !== e && Ja.call(V, U, 1), Ja.call(e, U, 1);
        return e;
      }
      function Sc(e, t) {
        for (var a = e ? t.length : 0, o = a - 1; a--; ) {
          var c = t[a];
          if (a == o || c !== d) {
            var d = c;
            Ct(c) ? Ja.call(e, c, 1) : Jo(e, c);
          }
        }
        return e;
      }
      function Mo(e, t) {
        return e + ba(hc() * (t - e + 1));
      }
      function HV(e, t, a, o) {
        for (var c = -1, d = Re(ya((t - e) / (a || 1)), 0), p = w(d); d--; )
          p[o ? d : ++c] = e, e += a;
        return p;
      }
      function go(e, t) {
        var a = "";
        if (!e || t < 1 || t > De)
          return a;
        do
          t % 2 && (a += e), t = ba(t / 2), t && (e += e);
        while (t);
        return a;
      }
      function j(e, t) {
        return zo(cu(e, t, je), e + "");
      }
      function PV(e) {
        return Vc(jn(e));
      }
      function jV(e, t) {
        var a = jn(e);
        return Pa(a, mn(t, 0, a.length));
      }
      function br(e, t, a, o) {
        if (!ue(e))
          return e;
        t = Kt(t, e);
        for (var c = -1, d = t.length, p = d - 1, V = e; V != null && ++c < d; ) {
          var U = yt(t[c]), g = a;
          if (U === "__proto__" || U === "constructor" || U === "prototype")
            return e;
          if (c != p) {
            var Z = V[U];
            g = o ? o(Z, U, V) : r, g === r && (g = ue(Z) ? Z : Ct(t[c + 1]) ? [] : {});
          }
          Zr(V, U, g), V = V[U];
        }
        return e;
      }
      var Ac = Ea ? function(e, t) {
        return Ea.set(e, t), e;
      } : je, XV = ka ? function(e, t) {
        return ka(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: qo(t),
          writable: !0
        });
      } : je;
      function _V(e) {
        return Pa(jn(e));
      }
      function dt(e, t, a) {
        var o = -1, c = e.length;
        t < 0 && (t = -t > c ? 0 : c + t), a = a > c ? c : a, a < 0 && (a += c), c = t > a ? 0 : a - t >>> 0, t >>>= 0;
        for (var d = w(c); ++o < c; )
          d[o] = e[o + t];
        return d;
      }
      function LV(e, t) {
        var a;
        return Lt(e, function(o, c, d) {
          return a = t(o, c, d), !a;
        }), !!a;
      }
      function Ca(e, t, a) {
        var o = 0, c = e == null ? o : e.length;
        if (typeof t == "number" && t === t && c <= Kh) {
          for (; o < c; ) {
            var d = o + c >>> 1, p = e[d];
            p !== null && !$e(p) && (a ? p <= t : p < t) ? o = d + 1 : c = d;
          }
          return c;
        }
        return Zo(e, t, je, a);
      }
      function Zo(e, t, a, o) {
        var c = 0, d = e == null ? 0 : e.length;
        if (d === 0)
          return 0;
        t = a(t);
        for (var p = t !== t, V = t === null, U = $e(t), g = t === r; c < d; ) {
          var Z = ba((c + d) / 2), J = a(e[Z]), F = J !== r, B = J === null, O = J === J, P = $e(J);
          if (p)
            var z = o || O;
          else
            g ? z = O && (o || F) : V ? z = O && F && (o || !B) : U ? z = O && F && !B && (o || !P) : B || P ? z = !1 : z = o ? J <= t : J < t;
          z ? c = Z + 1 : d = Z;
        }
        return xe(d, qh);
      }
      function xc(e, t) {
        for (var a = -1, o = e.length, c = 0, d = []; ++a < o; ) {
          var p = e[a], V = t ? t(p) : p;
          if (!a || !Rt(V, U)) {
            var U = V;
            d[c++] = p === 0 ? 0 : p;
          }
        }
        return d;
      }
      function Bc(e) {
        return typeof e == "number" ? e : $e(e) ? sa : +e;
      }
      function Ke(e) {
        if (typeof e == "string")
          return e;
        if (I(e))
          return ce(e, Ke) + "";
        if ($e(e))
          return pc ? pc.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -ye ? "-0" : t;
      }
      function qt(e, t, a) {
        var o = -1, c = Va, d = e.length, p = !0, V = [], U = V;
        if (a)
          p = !1, c = $i;
        else if (d >= s) {
          var g = t ? null : l1(e);
          if (g)
            return va(g);
          p = !1, c = Ur, U = new pn();
        } else
          U = t ? [] : V;
        e:
          for (; ++o < d; ) {
            var Z = e[o], J = t ? t(Z) : Z;
            if (Z = a || Z !== 0 ? Z : 0, p && J === J) {
              for (var F = U.length; F--; )
                if (U[F] === J)
                  continue e;
              t && U.push(J), V.push(Z);
            } else
              c(U, J, a) || (U !== V && U.push(J), V.push(Z));
          }
        return V;
      }
      function Jo(e, t) {
        return t = Kt(t, e), e = uu(e, t), e == null || delete e[yt(ft(t))];
      }
      function Cc(e, t, a, o) {
        return br(e, t, a(Vn(e, t)), o);
      }
      function Da(e, t, a, o) {
        for (var c = e.length, d = o ? c : -1; (o ? d-- : ++d < c) && t(e[d], d, e); )
          ;
        return a ? dt(e, o ? 0 : d, o ? d + 1 : c) : dt(e, o ? d + 1 : 0, o ? c : d);
      }
      function Dc(e, t) {
        var a = e;
        return a instanceof L && (a = a.value()), eo(t, function(o, c) {
          return c.func.apply(c.thisArg, jt([o], c.args));
        }, a);
      }
      function ko(e, t, a) {
        var o = e.length;
        if (o < 2)
          return o ? qt(e[0]) : [];
        for (var c = -1, d = w(o); ++c < o; )
          for (var p = e[c], V = -1; ++V < o; )
            V != c && (d[c] = Jr(d[c] || p, e[V], t, a));
        return qt(Ee(d, 1), t, a);
      }
      function Qc(e, t, a) {
        for (var o = -1, c = e.length, d = t.length, p = {}; ++o < c; ) {
          var V = o < d ? t[o] : r;
          a(p, e[o], V);
        }
        return p;
      }
      function yo(e) {
        return me(e) ? e : [];
      }
      function bo(e) {
        return typeof e == "function" ? e : je;
      }
      function Kt(e, t) {
        return I(e) ? e : Do(e, t) ? [e] : pu(te(e));
      }
      var qV = j;
      function $t(e, t, a) {
        var o = e.length;
        return a = a === r ? o : a, !t && a >= o ? e : dt(e, t, a);
      }
      var Oc = Dm || function(e) {
        return be.clearTimeout(e);
      };
      function zc(e, t) {
        if (t)
          return e.slice();
        var a = e.length, o = sc ? sc(a) : new e.constructor(a);
        return e.copy(o), o;
      }
      function Eo(e) {
        var t = new e.constructor(e.byteLength);
        return new ga(t).set(new ga(e)), t;
      }
      function KV(e, t) {
        var a = t ? Eo(e.buffer) : e.buffer;
        return new e.constructor(a, e.byteOffset, e.byteLength);
      }
      function $V(e) {
        var t = new e.constructor(e.source, gs.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function e1(e) {
        return gr ? oe(gr.call(e)) : {};
      }
      function Gc(e, t) {
        var a = t ? Eo(e.buffer) : e.buffer;
        return new e.constructor(a, e.byteOffset, e.length);
      }
      function Yc(e, t) {
        if (e !== t) {
          var a = e !== r, o = e === null, c = e === e, d = $e(e), p = t !== r, V = t === null, U = t === t, g = $e(t);
          if (!V && !g && !d && e > t || d && p && U && !V && !g || o && p && U || !a && U || !c)
            return 1;
          if (!o && !d && !g && e < t || g && a && c && !o && !d || V && a && c || !p && c || !U)
            return -1;
        }
        return 0;
      }
      function t1(e, t, a) {
        for (var o = -1, c = e.criteria, d = t.criteria, p = c.length, V = a.length; ++o < p; ) {
          var U = Yc(c[o], d[o]);
          if (U) {
            if (o >= V)
              return U;
            var g = a[o];
            return U * (g == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Ic(e, t, a, o) {
        for (var c = -1, d = e.length, p = a.length, V = -1, U = t.length, g = Re(d - p, 0), Z = w(U + g), J = !o; ++V < U; )
          Z[V] = t[V];
        for (; ++c < p; )
          (J || c < d) && (Z[a[c]] = e[c]);
        for (; g--; )
          Z[V++] = e[c++];
        return Z;
      }
      function Hc(e, t, a, o) {
        for (var c = -1, d = e.length, p = -1, V = a.length, U = -1, g = t.length, Z = Re(d - V, 0), J = w(Z + g), F = !o; ++c < Z; )
          J[c] = e[c];
        for (var B = c; ++U < g; )
          J[B + U] = t[U];
        for (; ++p < V; )
          (F || c < d) && (J[B + a[p]] = e[c++]);
        return J;
      }
      function Ie(e, t) {
        var a = -1, o = e.length;
        for (t || (t = w(o)); ++a < o; )
          t[a] = e[a];
        return t;
      }
      function kt(e, t, a, o) {
        var c = !a;
        a || (a = {});
        for (var d = -1, p = t.length; ++d < p; ) {
          var V = t[d], U = o ? o(a[V], e[V], V, a, e) : r;
          U === r && (U = e[V]), c ? At(a, V, U) : Zr(a, V, U);
        }
        return a;
      }
      function n1(e, t) {
        return kt(e, Co(e), t);
      }
      function r1(e, t) {
        return kt(e, au(e), t);
      }
      function Qa(e, t) {
        return function(a, o) {
          var c = I(a) ? sm : ZV, d = t ? t() : {};
          return c(a, e, D(o, 2), d);
        };
      }
      function Yn(e) {
        return j(function(t, a) {
          var o = -1, c = a.length, d = c > 1 ? a[c - 1] : r, p = c > 2 ? a[2] : r;
          for (d = e.length > 3 && typeof d == "function" ? (c--, d) : r, p && Oe(a[0], a[1], p) && (d = c < 3 ? r : d, c = 1), t = oe(t); ++o < c; ) {
            var V = a[o];
            V && e(t, V, o, d);
          }
          return t;
        });
      }
      function Pc(e, t) {
        return function(a, o) {
          if (a == null)
            return a;
          if (!He(a))
            return e(a, o);
          for (var c = a.length, d = t ? c : -1, p = oe(a); (t ? d-- : ++d < c) && o(p[d], d, p) !== !1; )
            ;
          return a;
        };
      }
      function jc(e) {
        return function(t, a, o) {
          for (var c = -1, d = oe(t), p = o(t), V = p.length; V--; ) {
            var U = p[e ? V : ++c];
            if (a(d[U], U, d) === !1)
              break;
          }
          return t;
        };
      }
      function a1(e, t, a) {
        var o = t & A, c = Er(e);
        function d() {
          var p = this && this !== be && this instanceof d ? c : e;
          return p.apply(o ? a : this, arguments);
        }
        return d;
      }
      function Xc(e) {
        return function(t) {
          t = te(t);
          var a = Bn(t) ? Ut(t) : r, o = a ? a[0] : t.charAt(0), c = a ? $t(a, 1).join("") : t.slice(1);
          return o[e]() + c;
        };
      }
      function In(e) {
        return function(t) {
          return eo(Pu(Hu(t).replace(Xp, "")), e, "");
        };
      }
      function Er(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var a = Gn(e.prototype), o = e.apply(a, t);
          return ue(o) ? o : a;
        };
      }
      function i1(e, t, a) {
        var o = Er(e);
        function c() {
          for (var d = arguments.length, p = w(d), V = d, U = Hn(c); V--; )
            p[V] = arguments[V];
          var g = d < 3 && p[0] !== U && p[d - 1] !== U ? [] : Xt(p, U);
          if (d -= g.length, d < a)
            return $c(
              e,
              t,
              Oa,
              c.placeholder,
              r,
              p,
              g,
              r,
              r,
              a - d
            );
          var Z = this && this !== be && this instanceof c ? o : e;
          return Le(Z, this, p);
        }
        return c;
      }
      function _c(e) {
        return function(t, a, o) {
          var c = oe(t);
          if (!He(t)) {
            var d = D(a, 3);
            t = Me(t), a = function(V) {
              return d(c[V], V, c);
            };
          }
          var p = e(t, a, o);
          return p > -1 ? c[d ? t[p] : p] : r;
        };
      }
      function Lc(e) {
        return Bt(function(t) {
          var a = t.length, o = a, c = ct.prototype.thru;
          for (e && t.reverse(); o--; ) {
            var d = t[o];
            if (typeof d != "function")
              throw new st(h);
            if (c && !p && Ia(d) == "wrapper")
              var p = new ct([], !0);
          }
          for (o = p ? o : a; ++o < a; ) {
            d = t[o];
            var V = Ia(d), U = V == "wrapper" ? xo(d) : r;
            U && Qo(U[0]) && U[1] == (q | Q | b | X) && !U[4].length && U[9] == 1 ? p = p[Ia(U[0])].apply(p, U[3]) : p = d.length == 1 && Qo(d) ? p[V]() : p.thru(d);
          }
          return function() {
            var g = arguments, Z = g[0];
            if (p && g.length == 1 && I(Z))
              return p.plant(Z).value();
            for (var J = 0, F = a ? t[J].apply(this, g) : Z; ++J < a; )
              F = t[J].call(this, F);
            return F;
          };
        });
      }
      function Oa(e, t, a, o, c, d, p, V, U, g) {
        var Z = t & q, J = t & A, F = t & E, B = t & (Q | $), O = t & Ae, P = F ? r : Er(e);
        function z() {
          for (var _ = arguments.length, K = w(_), et = _; et--; )
            K[et] = arguments[et];
          if (B)
            var ze = Hn(z), tt = Tm(K, ze);
          if (o && (K = Ic(K, o, c, B)), d && (K = Hc(K, d, p, B)), _ -= tt, B && _ < g) {
            var Ve = Xt(K, ze);
            return $c(
              e,
              t,
              Oa,
              z.placeholder,
              a,
              K,
              Ve,
              V,
              U,
              g - _
            );
          }
          var Nt = J ? a : this, Ot = F ? Nt[e] : e;
          return _ = K.length, V ? K = Z1(K, V) : O && _ > 1 && K.reverse(), Z && U < _ && (K.length = U), this && this !== be && this instanceof z && (Ot = P || Er(Ot)), Ot.apply(Nt, K);
        }
        return z;
      }
      function qc(e, t) {
        return function(a, o) {
          return SV(a, e, t(o), {});
        };
      }
      function za(e, t) {
        return function(a, o) {
          var c;
          if (a === r && o === r)
            return t;
          if (a !== r && (c = a), o !== r) {
            if (c === r)
              return o;
            typeof a == "string" || typeof o == "string" ? (a = Ke(a), o = Ke(o)) : (a = Bc(a), o = Bc(o)), c = e(a, o);
          }
          return c;
        };
      }
      function Fo(e) {
        return Bt(function(t) {
          return t = ce(t, qe(D())), j(function(a) {
            var o = this;
            return e(t, function(c) {
              return Le(c, o, a);
            });
          });
        });
      }
      function Ga(e, t) {
        t = t === r ? " " : Ke(t);
        var a = t.length;
        if (a < 2)
          return a ? go(t, e) : t;
        var o = go(t, ya(e / Cn(t)));
        return Bn(t) ? $t(Ut(o), 0, e).join("") : o.slice(0, e);
      }
      function o1(e, t, a, o) {
        var c = t & A, d = Er(e);
        function p() {
          for (var V = -1, U = arguments.length, g = -1, Z = o.length, J = w(Z + U), F = this && this !== be && this instanceof p ? d : e; ++g < Z; )
            J[g] = o[g];
          for (; U--; )
            J[g++] = arguments[++V];
          return Le(F, c ? a : this, J);
        }
        return p;
      }
      function Kc(e) {
        return function(t, a, o) {
          return o && typeof o != "number" && Oe(t, a, o) && (a = o = r), t = Qt(t), a === r ? (a = t, t = 0) : a = Qt(a), o = o === r ? t < a ? 1 : -1 : Qt(o), HV(t, a, o, e);
        };
      }
      function Ya(e) {
        return function(t, a) {
          return typeof t == "string" && typeof a == "string" || (t = ht(t), a = ht(a)), e(t, a);
        };
      }
      function $c(e, t, a, o, c, d, p, V, U, g) {
        var Z = t & Q, J = Z ? p : r, F = Z ? r : p, B = Z ? d : r, O = Z ? r : d;
        t |= Z ? b : ne, t &= ~(Z ? ne : b), t & G || (t &= ~(A | E));
        var P = [
          e,
          t,
          c,
          B,
          J,
          O,
          F,
          V,
          U,
          g
        ], z = a.apply(r, P);
        return Qo(e) && du(z, P), z.placeholder = o, fu(z, e, t);
      }
      function Wo(e) {
        var t = we[e];
        return function(a, o) {
          if (a = ht(a), o = o == null ? 0 : xe(H(o), 292), o && fc(a)) {
            var c = (te(a) + "e").split("e"), d = t(c[0] + "e" + (+c[1] + o));
            return c = (te(d) + "e").split("e"), +(c[0] + "e" + (+c[1] - o));
          }
          return t(a);
        };
      }
      var l1 = On && 1 / va(new On([, -0]))[1] == ye ? function(e) {
        return new On(e);
      } : el;
      function eu(e) {
        return function(t) {
          var a = Be(t);
          return a == Tt ? lo(t) : a == vt ? gm(t) : Vm(t, e(t));
        };
      }
      function xt(e, t, a, o, c, d, p, V) {
        var U = t & E;
        if (!U && typeof e != "function")
          throw new st(h);
        var g = o ? o.length : 0;
        if (g || (t &= ~(b | ne), o = c = r), p = p === r ? p : Re(H(p), 0), V = V === r ? V : H(V), g -= c ? c.length : 0, t & ne) {
          var Z = o, J = c;
          o = c = r;
        }
        var F = U ? r : xo(e), B = [
          e,
          t,
          a,
          o,
          c,
          Z,
          J,
          d,
          p,
          V
        ];
        if (F && N1(B, F), e = B[0], t = B[1], a = B[2], o = B[3], c = B[4], V = B[9] = B[9] === r ? U ? 0 : e.length : Re(B[9] - g, 0), !V && t & (Q | $) && (t &= ~(Q | $)), !t || t == A)
          var O = a1(e, t, a);
        else
          t == Q || t == $ ? O = i1(e, t, V) : (t == b || t == (A | b)) && !c.length ? O = o1(e, t, a, o) : O = Oa.apply(r, B);
        var P = F ? Ac : du;
        return fu(P(O, B), e, t);
      }
      function tu(e, t, a, o) {
        return e === r || Rt(e, Qn[a]) && !re.call(o, a) ? t : e;
      }
      function nu(e, t, a, o, c, d) {
        return ue(e) && ue(t) && (d.set(t, e), Ba(e, t, r, nu, d), d.delete(t)), e;
      }
      function s1(e) {
        return Sr(e) ? r : e;
      }
      function ru(e, t, a, o, c, d) {
        var p = a & S, V = e.length, U = t.length;
        if (V != U && !(p && U > V))
          return !1;
        var g = d.get(e), Z = d.get(t);
        if (g && Z)
          return g == t && Z == e;
        var J = -1, F = !0, B = a & x ? new pn() : r;
        for (d.set(e, t), d.set(t, e); ++J < V; ) {
          var O = e[J], P = t[J];
          if (o)
            var z = p ? o(P, O, J, t, e, d) : o(O, P, J, e, t, d);
          if (z !== r) {
            if (z)
              continue;
            F = !1;
            break;
          }
          if (B) {
            if (!to(t, function(_, K) {
              if (!Ur(B, K) && (O === _ || c(O, _, a, o, d)))
                return B.push(K);
            })) {
              F = !1;
              break;
            }
          } else if (!(O === P || c(O, P, a, o, d))) {
            F = !1;
            break;
          }
        }
        return d.delete(e), d.delete(t), F;
      }
      function c1(e, t, a, o, c, d, p) {
        switch (a) {
          case Sn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case vr:
            return !(e.byteLength != t.byteLength || !d(new ga(e), new ga(t)));
          case fr:
          case hr:
          case pr:
            return Rt(+e, +t);
          case ua:
            return e.name == t.name && e.message == t.message;
          case mr:
          case Vr:
            return e == t + "";
          case Tt:
            var V = lo;
          case vt:
            var U = o & S;
            if (V || (V = va), e.size != t.size && !U)
              return !1;
            var g = p.get(e);
            if (g)
              return g == t;
            o |= x, p.set(e, t);
            var Z = ru(V(e), V(t), o, c, d, p);
            return p.delete(e), Z;
          case fa:
            if (gr)
              return gr.call(e) == gr.call(t);
        }
        return !1;
      }
      function u1(e, t, a, o, c, d) {
        var p = a & S, V = So(e), U = V.length, g = So(t), Z = g.length;
        if (U != Z && !p)
          return !1;
        for (var J = U; J--; ) {
          var F = V[J];
          if (!(p ? F in t : re.call(t, F)))
            return !1;
        }
        var B = d.get(e), O = d.get(t);
        if (B && O)
          return B == t && O == e;
        var P = !0;
        d.set(e, t), d.set(t, e);
        for (var z = p; ++J < U; ) {
          F = V[J];
          var _ = e[F], K = t[F];
          if (o)
            var et = p ? o(K, _, F, t, e, d) : o(_, K, F, e, t, d);
          if (!(et === r ? _ === K || c(_, K, a, o, d) : et)) {
            P = !1;
            break;
          }
          z || (z = F == "constructor");
        }
        if (P && !z) {
          var ze = e.constructor, tt = t.constructor;
          ze != tt && "constructor" in e && "constructor" in t && !(typeof ze == "function" && ze instanceof ze && typeof tt == "function" && tt instanceof tt) && (P = !1);
        }
        return d.delete(e), d.delete(t), P;
      }
      function Bt(e) {
        return zo(cu(e, r, vu), e + "");
      }
      function So(e) {
        return Mc(e, Me, Co);
      }
      function Ao(e) {
        return Mc(e, Pe, au);
      }
      var xo = Ea ? function(e) {
        return Ea.get(e);
      } : el;
      function Ia(e) {
        for (var t = e.name + "", a = zn[t], o = re.call(zn, t) ? a.length : 0; o--; ) {
          var c = a[o], d = c.func;
          if (d == null || d == e)
            return c.name;
        }
        return t;
      }
      function Hn(e) {
        var t = re.call(u, "placeholder") ? u : e;
        return t.placeholder;
      }
      function D() {
        var e = u.iteratee || Ko;
        return e = e === Ko ? Jc : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ha(e, t) {
        var a = e.__data__;
        return v1(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
      }
      function Bo(e) {
        for (var t = Me(e), a = t.length; a--; ) {
          var o = t[a], c = e[o];
          t[a] = [o, c, lu(c)];
        }
        return t;
      }
      function Tn(e, t) {
        var a = Rm(e, t);
        return Zc(a) ? a : r;
      }
      function d1(e) {
        var t = re.call(e, fn), a = e[fn];
        try {
          e[fn] = r;
          var o = !0;
        } catch {
        }
        var c = Na.call(e);
        return o && (t ? e[fn] = a : delete e[fn]), c;
      }
      var Co = co ? function(e) {
        return e == null ? [] : (e = oe(e), Pt(co(e), function(t) {
          return uc.call(e, t);
        }));
      } : tl, au = co ? function(e) {
        for (var t = []; e; )
          jt(t, Co(e)), e = Za(e);
        return t;
      } : tl, Be = Qe;
      (uo && Be(new uo(new ArrayBuffer(1))) != Sn || Rr && Be(new Rr()) != Tt || fo && Be(fo.resolve()) != ws || On && Be(new On()) != vt || Nr && Be(new Nr()) != Tr) && (Be = function(e) {
        var t = Qe(e), a = t == Ft ? e.constructor : r, o = a ? vn(a) : "";
        if (o)
          switch (o) {
            case jm:
              return Sn;
            case Xm:
              return Tt;
            case _m:
              return ws;
            case Lm:
              return vt;
            case qm:
              return Tr;
          }
        return t;
      });
      function f1(e, t, a) {
        for (var o = -1, c = a.length; ++o < c; ) {
          var d = a[o], p = d.size;
          switch (d.type) {
            case "drop":
              e += p;
              break;
            case "dropRight":
              t -= p;
              break;
            case "take":
              t = xe(t, e + p);
              break;
            case "takeRight":
              e = Re(e, t - p);
              break;
          }
        }
        return { start: e, end: t };
      }
      function h1(e) {
        var t = e.match(Up);
        return t ? t[1].split(wp) : [];
      }
      function iu(e, t, a) {
        t = Kt(t, e);
        for (var o = -1, c = t.length, d = !1; ++o < c; ) {
          var p = yt(t[o]);
          if (!(d = e != null && a(e, p)))
            break;
          e = e[p];
        }
        return d || ++o != c ? d : (c = e == null ? 0 : e.length, !!c && Ka(c) && Ct(p, c) && (I(e) || Un(e)));
      }
      function p1(e) {
        var t = e.length, a = new e.constructor(t);
        return t && typeof e[0] == "string" && re.call(e, "index") && (a.index = e.index, a.input = e.input), a;
      }
      function ou(e) {
        return typeof e.constructor == "function" && !Fr(e) ? Gn(Za(e)) : {};
      }
      function m1(e, t, a) {
        var o = e.constructor;
        switch (t) {
          case vr:
            return Eo(e);
          case fr:
          case hr:
            return new o(+e);
          case Sn:
            return KV(e, a);
          case xi:
          case Bi:
          case Ci:
          case Di:
          case Qi:
          case Oi:
          case zi:
          case Gi:
          case Yi:
            return Gc(e, a);
          case Tt:
            return new o();
          case pr:
          case Vr:
            return new o(e);
          case mr:
            return $V(e);
          case vt:
            return new o();
          case fa:
            return e1(e);
        }
      }
      function V1(e, t) {
        var a = t.length;
        if (!a)
          return e;
        var o = a - 1;
        return t[o] = (a > 1 ? "& " : "") + t[o], t = t.join(a > 2 ? ", " : " "), e.replace(vp, `{
/* [wrapped with ` + t + `] */
`);
      }
      function T1(e) {
        return I(e) || Un(e) || !!(dc && e && e[dc]);
      }
      function Ct(e, t) {
        var a = typeof e;
        return t = t == null ? De : t, !!t && (a == "number" || a != "symbol" && bp.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Oe(e, t, a) {
        if (!ue(a))
          return !1;
        var o = typeof t;
        return (o == "number" ? He(a) && Ct(t, a.length) : o == "string" && t in a) ? Rt(a[t], e) : !1;
      }
      function Do(e, t) {
        if (I(e))
          return !1;
        var a = typeof e;
        return a == "number" || a == "symbol" || a == "boolean" || e == null || $e(e) ? !0 : pp.test(e) || !hp.test(e) || t != null && e in oe(t);
      }
      function v1(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Qo(e) {
        var t = Ia(e), a = u[t];
        if (typeof a != "function" || !(t in L.prototype))
          return !1;
        if (e === a)
          return !0;
        var o = xo(a);
        return !!o && e === o[0];
      }
      function U1(e) {
        return !!lc && lc in e;
      }
      var w1 = wa ? Dt : nl;
      function Fr(e) {
        var t = e && e.constructor, a = typeof t == "function" && t.prototype || Qn;
        return e === a;
      }
      function lu(e) {
        return e === e && !ue(e);
      }
      function su(e, t) {
        return function(a) {
          return a == null ? !1 : a[e] === t && (t !== r || e in oe(a));
        };
      }
      function R1(e) {
        var t = La(e, function(o) {
          return a.size === N && a.clear(), o;
        }), a = t.cache;
        return t;
      }
      function N1(e, t) {
        var a = e[1], o = t[1], c = a | o, d = c < (A | E | q), p = o == q && a == Q || o == q && a == X && e[7].length <= t[8] || o == (q | X) && t[7].length <= t[8] && a == Q;
        if (!(d || p))
          return e;
        o & A && (e[2] = t[2], c |= a & A ? 0 : G);
        var V = t[3];
        if (V) {
          var U = e[3];
          e[3] = U ? Ic(U, V, t[4]) : V, e[4] = U ? Xt(e[3], M) : t[4];
        }
        return V = t[5], V && (U = e[5], e[5] = U ? Hc(U, V, t[6]) : V, e[6] = U ? Xt(e[5], M) : t[6]), V = t[7], V && (e[7] = V), o & q && (e[8] = e[8] == null ? t[8] : xe(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = c, e;
      }
      function M1(e) {
        var t = [];
        if (e != null)
          for (var a in oe(e))
            t.push(a);
        return t;
      }
      function g1(e) {
        return Na.call(e);
      }
      function cu(e, t, a) {
        return t = Re(t === r ? e.length - 1 : t, 0), function() {
          for (var o = arguments, c = -1, d = Re(o.length - t, 0), p = w(d); ++c < d; )
            p[c] = o[t + c];
          c = -1;
          for (var V = w(t + 1); ++c < t; )
            V[c] = o[c];
          return V[t] = a(p), Le(e, this, V);
        };
      }
      function uu(e, t) {
        return t.length < 2 ? e : Vn(e, dt(t, 0, -1));
      }
      function Z1(e, t) {
        for (var a = e.length, o = xe(t.length, a), c = Ie(e); o--; ) {
          var d = t[o];
          e[o] = Ct(d, a) ? c[d] : r;
        }
        return e;
      }
      function Oo(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var du = hu(Ac), Wr = Om || function(e, t) {
        return be.setTimeout(e, t);
      }, zo = hu(XV);
      function fu(e, t, a) {
        var o = t + "";
        return zo(e, V1(o, J1(h1(o), a)));
      }
      function hu(e) {
        var t = 0, a = 0;
        return function() {
          var o = Im(), c = pe - (o - a);
          if (a = o, c > 0) {
            if (++t >= fe)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function Pa(e, t) {
        var a = -1, o = e.length, c = o - 1;
        for (t = t === r ? o : t; ++a < t; ) {
          var d = Mo(a, c), p = e[d];
          e[d] = e[a], e[a] = p;
        }
        return e.length = t, e;
      }
      var pu = R1(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(mp, function(a, o, c, d) {
          t.push(c ? d.replace(Mp, "$1") : o || a);
        }), t;
      });
      function yt(e) {
        if (typeof e == "string" || $e(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -ye ? "-0" : t;
      }
      function vn(e) {
        if (e != null) {
          try {
            return Ra.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function J1(e, t) {
        return lt($h, function(a) {
          var o = "_." + a[0];
          t & a[1] && !Va(e, o) && e.push(o);
        }), e.sort();
      }
      function mu(e) {
        if (e instanceof L)
          return e.clone();
        var t = new ct(e.__wrapped__, e.__chain__);
        return t.__actions__ = Ie(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function k1(e, t, a) {
        (a ? Oe(e, t, a) : t === r) ? t = 1 : t = Re(H(t), 0);
        var o = e == null ? 0 : e.length;
        if (!o || t < 1)
          return [];
        for (var c = 0, d = 0, p = w(ya(o / t)); c < o; )
          p[d++] = dt(e, c, c += t);
        return p;
      }
      function y1(e) {
        for (var t = -1, a = e == null ? 0 : e.length, o = 0, c = []; ++t < a; ) {
          var d = e[t];
          d && (c[o++] = d);
        }
        return c;
      }
      function b1() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = w(e - 1), a = arguments[0], o = e; o--; )
          t[o - 1] = arguments[o];
        return jt(I(a) ? Ie(a) : [a], Ee(t, 1));
      }
      var E1 = j(function(e, t) {
        return me(e) ? Jr(e, Ee(t, 1, me, !0)) : [];
      }), F1 = j(function(e, t) {
        var a = ft(t);
        return me(a) && (a = r), me(e) ? Jr(e, Ee(t, 1, me, !0), D(a, 2)) : [];
      }), W1 = j(function(e, t) {
        var a = ft(t);
        return me(a) && (a = r), me(e) ? Jr(e, Ee(t, 1, me, !0), r, a) : [];
      });
      function S1(e, t, a) {
        var o = e == null ? 0 : e.length;
        return o ? (t = a || t === r ? 1 : H(t), dt(e, t < 0 ? 0 : t, o)) : [];
      }
      function A1(e, t, a) {
        var o = e == null ? 0 : e.length;
        return o ? (t = a || t === r ? 1 : H(t), t = o - t, dt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function x1(e, t) {
        return e && e.length ? Da(e, D(t, 3), !0, !0) : [];
      }
      function B1(e, t) {
        return e && e.length ? Da(e, D(t, 3), !0) : [];
      }
      function C1(e, t, a, o) {
        var c = e == null ? 0 : e.length;
        return c ? (a && typeof a != "number" && Oe(e, t, a) && (a = 0, o = c), bV(e, t, a, o)) : [];
      }
      function Vu(e, t, a) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = a == null ? 0 : H(a);
        return c < 0 && (c = Re(o + c, 0)), Ta(e, D(t, 3), c);
      }
      function Tu(e, t, a) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o - 1;
        return a !== r && (c = H(a), c = a < 0 ? Re(o + c, 0) : xe(c, o - 1)), Ta(e, D(t, 3), c, !0);
      }
      function vu(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ee(e, 1) : [];
      }
      function D1(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ee(e, ye) : [];
      }
      function Q1(e, t) {
        var a = e == null ? 0 : e.length;
        return a ? (t = t === r ? 1 : H(t), Ee(e, t)) : [];
      }
      function O1(e) {
        for (var t = -1, a = e == null ? 0 : e.length, o = {}; ++t < a; ) {
          var c = e[t];
          o[c[0]] = c[1];
        }
        return o;
      }
      function Uu(e) {
        return e && e.length ? e[0] : r;
      }
      function z1(e, t, a) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = a == null ? 0 : H(a);
        return c < 0 && (c = Re(o + c, 0)), xn(e, t, c);
      }
      function G1(e) {
        var t = e == null ? 0 : e.length;
        return t ? dt(e, 0, -1) : [];
      }
      var Y1 = j(function(e) {
        var t = ce(e, yo);
        return t.length && t[0] === e[0] ? vo(t) : [];
      }), I1 = j(function(e) {
        var t = ft(e), a = ce(e, yo);
        return t === ft(a) ? t = r : a.pop(), a.length && a[0] === e[0] ? vo(a, D(t, 2)) : [];
      }), H1 = j(function(e) {
        var t = ft(e), a = ce(e, yo);
        return t = typeof t == "function" ? t : r, t && a.pop(), a.length && a[0] === e[0] ? vo(a, r, t) : [];
      });
      function P1(e, t) {
        return e == null ? "" : Gm.call(e, t);
      }
      function ft(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function j1(e, t, a) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o;
        return a !== r && (c = H(a), c = c < 0 ? Re(o + c, 0) : xe(c, o - 1)), t === t ? Jm(e, t, c) : Ta(e, $s, c, !0);
      }
      function X1(e, t) {
        return e && e.length ? Ec(e, H(t)) : r;
      }
      var _1 = j(wu);
      function wu(e, t) {
        return e && e.length && t && t.length ? No(e, t) : e;
      }
      function L1(e, t, a) {
        return e && e.length && t && t.length ? No(e, t, D(a, 2)) : e;
      }
      function q1(e, t, a) {
        return e && e.length && t && t.length ? No(e, t, r, a) : e;
      }
      var K1 = Bt(function(e, t) {
        var a = e == null ? 0 : e.length, o = po(e, t);
        return Sc(e, ce(t, function(c) {
          return Ct(c, a) ? +c : c;
        }).sort(Yc)), o;
      });
      function $1(e, t) {
        var a = [];
        if (!(e && e.length))
          return a;
        var o = -1, c = [], d = e.length;
        for (t = D(t, 3); ++o < d; ) {
          var p = e[o];
          t(p, o, e) && (a.push(p), c.push(o));
        }
        return Sc(e, c), a;
      }
      function Go(e) {
        return e == null ? e : Pm.call(e);
      }
      function e0(e, t, a) {
        var o = e == null ? 0 : e.length;
        return o ? (a && typeof a != "number" && Oe(e, t, a) ? (t = 0, a = o) : (t = t == null ? 0 : H(t), a = a === r ? o : H(a)), dt(e, t, a)) : [];
      }
      function t0(e, t) {
        return Ca(e, t);
      }
      function n0(e, t, a) {
        return Zo(e, t, D(a, 2));
      }
      function r0(e, t) {
        var a = e == null ? 0 : e.length;
        if (a) {
          var o = Ca(e, t);
          if (o < a && Rt(e[o], t))
            return o;
        }
        return -1;
      }
      function a0(e, t) {
        return Ca(e, t, !0);
      }
      function i0(e, t, a) {
        return Zo(e, t, D(a, 2), !0);
      }
      function o0(e, t) {
        var a = e == null ? 0 : e.length;
        if (a) {
          var o = Ca(e, t, !0) - 1;
          if (Rt(e[o], t))
            return o;
        }
        return -1;
      }
      function l0(e) {
        return e && e.length ? xc(e) : [];
      }
      function s0(e, t) {
        return e && e.length ? xc(e, D(t, 2)) : [];
      }
      function c0(e) {
        var t = e == null ? 0 : e.length;
        return t ? dt(e, 1, t) : [];
      }
      function u0(e, t, a) {
        return e && e.length ? (t = a || t === r ? 1 : H(t), dt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function d0(e, t, a) {
        var o = e == null ? 0 : e.length;
        return o ? (t = a || t === r ? 1 : H(t), t = o - t, dt(e, t < 0 ? 0 : t, o)) : [];
      }
      function f0(e, t) {
        return e && e.length ? Da(e, D(t, 3), !1, !0) : [];
      }
      function h0(e, t) {
        return e && e.length ? Da(e, D(t, 3)) : [];
      }
      var p0 = j(function(e) {
        return qt(Ee(e, 1, me, !0));
      }), m0 = j(function(e) {
        var t = ft(e);
        return me(t) && (t = r), qt(Ee(e, 1, me, !0), D(t, 2));
      }), V0 = j(function(e) {
        var t = ft(e);
        return t = typeof t == "function" ? t : r, qt(Ee(e, 1, me, !0), r, t);
      });
      function T0(e) {
        return e && e.length ? qt(e) : [];
      }
      function v0(e, t) {
        return e && e.length ? qt(e, D(t, 2)) : [];
      }
      function U0(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? qt(e, r, t) : [];
      }
      function Yo(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = Pt(e, function(a) {
          if (me(a))
            return t = Re(a.length, t), !0;
        }), io(t, function(a) {
          return ce(e, no(a));
        });
      }
      function Ru(e, t) {
        if (!(e && e.length))
          return [];
        var a = Yo(e);
        return t == null ? a : ce(a, function(o) {
          return Le(t, r, o);
        });
      }
      var w0 = j(function(e, t) {
        return me(e) ? Jr(e, t) : [];
      }), R0 = j(function(e) {
        return ko(Pt(e, me));
      }), N0 = j(function(e) {
        var t = ft(e);
        return me(t) && (t = r), ko(Pt(e, me), D(t, 2));
      }), M0 = j(function(e) {
        var t = ft(e);
        return t = typeof t == "function" ? t : r, ko(Pt(e, me), r, t);
      }), g0 = j(Yo);
      function Z0(e, t) {
        return Qc(e || [], t || [], Zr);
      }
      function J0(e, t) {
        return Qc(e || [], t || [], br);
      }
      var k0 = j(function(e) {
        var t = e.length, a = t > 1 ? e[t - 1] : r;
        return a = typeof a == "function" ? (e.pop(), a) : r, Ru(e, a);
      });
      function Nu(e) {
        var t = u(e);
        return t.__chain__ = !0, t;
      }
      function y0(e, t) {
        return t(e), e;
      }
      function ja(e, t) {
        return t(e);
      }
      var b0 = Bt(function(e) {
        var t = e.length, a = t ? e[0] : 0, o = this.__wrapped__, c = function(d) {
          return po(d, e);
        };
        return t > 1 || this.__actions__.length || !(o instanceof L) || !Ct(a) ? this.thru(c) : (o = o.slice(a, +a + (t ? 1 : 0)), o.__actions__.push({
          func: ja,
          args: [c],
          thisArg: r
        }), new ct(o, this.__chain__).thru(function(d) {
          return t && !d.length && d.push(r), d;
        }));
      });
      function E0() {
        return Nu(this);
      }
      function F0() {
        return new ct(this.value(), this.__chain__);
      }
      function W0() {
        this.__values__ === r && (this.__values__ = Bu(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function S0() {
        return this;
      }
      function A0(e) {
        for (var t, a = this; a instanceof Wa; ) {
          var o = mu(a);
          o.__index__ = 0, o.__values__ = r, t ? c.__wrapped__ = o : t = o;
          var c = o;
          a = a.__wrapped__;
        }
        return c.__wrapped__ = e, t;
      }
      function x0() {
        var e = this.__wrapped__;
        if (e instanceof L) {
          var t = e;
          return this.__actions__.length && (t = new L(this)), t = t.reverse(), t.__actions__.push({
            func: ja,
            args: [Go],
            thisArg: r
          }), new ct(t, this.__chain__);
        }
        return this.thru(Go);
      }
      function B0() {
        return Dc(this.__wrapped__, this.__actions__);
      }
      var C0 = Qa(function(e, t, a) {
        re.call(e, a) ? ++e[a] : At(e, a, 1);
      });
      function D0(e, t, a) {
        var o = I(e) ? qs : yV;
        return a && Oe(e, t, a) && (t = r), o(e, D(t, 3));
      }
      function Q0(e, t) {
        var a = I(e) ? Pt : Rc;
        return a(e, D(t, 3));
      }
      var O0 = _c(Vu), z0 = _c(Tu);
      function G0(e, t) {
        return Ee(Xa(e, t), 1);
      }
      function Y0(e, t) {
        return Ee(Xa(e, t), ye);
      }
      function I0(e, t, a) {
        return a = a === r ? 1 : H(a), Ee(Xa(e, t), a);
      }
      function Mu(e, t) {
        var a = I(e) ? lt : Lt;
        return a(e, D(t, 3));
      }
      function gu(e, t) {
        var a = I(e) ? cm : wc;
        return a(e, D(t, 3));
      }
      var H0 = Qa(function(e, t, a) {
        re.call(e, a) ? e[a].push(t) : At(e, a, [t]);
      });
      function P0(e, t, a, o) {
        e = He(e) ? e : jn(e), a = a && !o ? H(a) : 0;
        var c = e.length;
        return a < 0 && (a = Re(c + a, 0)), $a(e) ? a <= c && e.indexOf(t, a) > -1 : !!c && xn(e, t, a) > -1;
      }
      var j0 = j(function(e, t, a) {
        var o = -1, c = typeof t == "function", d = He(e) ? w(e.length) : [];
        return Lt(e, function(p) {
          d[++o] = c ? Le(t, p, a) : kr(p, t, a);
        }), d;
      }), X0 = Qa(function(e, t, a) {
        At(e, a, t);
      });
      function Xa(e, t) {
        var a = I(e) ? ce : kc;
        return a(e, D(t, 3));
      }
      function _0(e, t, a, o) {
        return e == null ? [] : (I(t) || (t = t == null ? [] : [t]), a = o ? r : a, I(a) || (a = a == null ? [] : [a]), Fc(e, t, a));
      }
      var L0 = Qa(function(e, t, a) {
        e[a ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function q0(e, t, a) {
        var o = I(e) ? eo : tc, c = arguments.length < 3;
        return o(e, D(t, 4), a, c, Lt);
      }
      function K0(e, t, a) {
        var o = I(e) ? um : tc, c = arguments.length < 3;
        return o(e, D(t, 4), a, c, wc);
      }
      function $0(e, t) {
        var a = I(e) ? Pt : Rc;
        return a(e, qa(D(t, 3)));
      }
      function eT(e) {
        var t = I(e) ? Vc : PV;
        return t(e);
      }
      function tT(e, t, a) {
        (a ? Oe(e, t, a) : t === r) ? t = 1 : t = H(t);
        var o = I(e) ? MV : jV;
        return o(e, t);
      }
      function nT(e) {
        var t = I(e) ? gV : _V;
        return t(e);
      }
      function rT(e) {
        if (e == null)
          return 0;
        if (He(e))
          return $a(e) ? Cn(e) : e.length;
        var t = Be(e);
        return t == Tt || t == vt ? e.size : wo(e).length;
      }
      function aT(e, t, a) {
        var o = I(e) ? to : LV;
        return a && Oe(e, t, a) && (t = r), o(e, D(t, 3));
      }
      var iT = j(function(e, t) {
        if (e == null)
          return [];
        var a = t.length;
        return a > 1 && Oe(e, t[0], t[1]) ? t = [] : a > 2 && Oe(t[0], t[1], t[2]) && (t = [t[0]]), Fc(e, Ee(t, 1), []);
      }), _a = Qm || function() {
        return be.Date.now();
      };
      function oT(e, t) {
        if (typeof t != "function")
          throw new st(h);
        return e = H(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Zu(e, t, a) {
        return t = a ? r : t, t = e && t == null ? e.length : t, xt(e, q, r, r, r, r, t);
      }
      function Ju(e, t) {
        var a;
        if (typeof t != "function")
          throw new st(h);
        return e = H(e), function() {
          return --e > 0 && (a = t.apply(this, arguments)), e <= 1 && (t = r), a;
        };
      }
      var Io = j(function(e, t, a) {
        var o = A;
        if (a.length) {
          var c = Xt(a, Hn(Io));
          o |= b;
        }
        return xt(e, o, t, a, c);
      }), ku = j(function(e, t, a) {
        var o = A | E;
        if (a.length) {
          var c = Xt(a, Hn(ku));
          o |= b;
        }
        return xt(t, o, e, a, c);
      });
      function yu(e, t, a) {
        t = a ? r : t;
        var o = xt(e, Q, r, r, r, r, r, t);
        return o.placeholder = yu.placeholder, o;
      }
      function bu(e, t, a) {
        t = a ? r : t;
        var o = xt(e, $, r, r, r, r, r, t);
        return o.placeholder = bu.placeholder, o;
      }
      function Eu(e, t, a) {
        var o, c, d, p, V, U, g = 0, Z = !1, J = !1, F = !0;
        if (typeof e != "function")
          throw new st(h);
        t = ht(t) || 0, ue(a) && (Z = !!a.leading, J = "maxWait" in a, d = J ? Re(ht(a.maxWait) || 0, t) : d, F = "trailing" in a ? !!a.trailing : F);
        function B(Ve) {
          var Nt = o, Ot = c;
          return o = c = r, g = Ve, p = e.apply(Ot, Nt), p;
        }
        function O(Ve) {
          return g = Ve, V = Wr(_, t), Z ? B(Ve) : p;
        }
        function P(Ve) {
          var Nt = Ve - U, Ot = Ve - g, _u = t - Nt;
          return J ? xe(_u, d - Ot) : _u;
        }
        function z(Ve) {
          var Nt = Ve - U, Ot = Ve - g;
          return U === r || Nt >= t || Nt < 0 || J && Ot >= d;
        }
        function _() {
          var Ve = _a();
          if (z(Ve))
            return K(Ve);
          V = Wr(_, P(Ve));
        }
        function K(Ve) {
          return V = r, F && o ? B(Ve) : (o = c = r, p);
        }
        function et() {
          V !== r && Oc(V), g = 0, o = U = c = V = r;
        }
        function ze() {
          return V === r ? p : K(_a());
        }
        function tt() {
          var Ve = _a(), Nt = z(Ve);
          if (o = arguments, c = this, U = Ve, Nt) {
            if (V === r)
              return O(U);
            if (J)
              return Oc(V), V = Wr(_, t), B(U);
          }
          return V === r && (V = Wr(_, t)), p;
        }
        return tt.cancel = et, tt.flush = ze, tt;
      }
      var lT = j(function(e, t) {
        return Uc(e, 1, t);
      }), sT = j(function(e, t, a) {
        return Uc(e, ht(t) || 0, a);
      });
      function cT(e) {
        return xt(e, Ae);
      }
      function La(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new st(h);
        var a = function() {
          var o = arguments, c = t ? t.apply(this, o) : o[0], d = a.cache;
          if (d.has(c))
            return d.get(c);
          var p = e.apply(this, o);
          return a.cache = d.set(c, p) || d, p;
        };
        return a.cache = new (La.Cache || St)(), a;
      }
      La.Cache = St;
      function qa(e) {
        if (typeof e != "function")
          throw new st(h);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function uT(e) {
        return Ju(2, e);
      }
      var dT = qV(function(e, t) {
        t = t.length == 1 && I(t[0]) ? ce(t[0], qe(D())) : ce(Ee(t, 1), qe(D()));
        var a = t.length;
        return j(function(o) {
          for (var c = -1, d = xe(o.length, a); ++c < d; )
            o[c] = t[c].call(this, o[c]);
          return Le(e, this, o);
        });
      }), Ho = j(function(e, t) {
        var a = Xt(t, Hn(Ho));
        return xt(e, b, r, t, a);
      }), Fu = j(function(e, t) {
        var a = Xt(t, Hn(Fu));
        return xt(e, ne, r, t, a);
      }), fT = Bt(function(e, t) {
        return xt(e, X, r, r, r, t);
      });
      function hT(e, t) {
        if (typeof e != "function")
          throw new st(h);
        return t = t === r ? t : H(t), j(e, t);
      }
      function pT(e, t) {
        if (typeof e != "function")
          throw new st(h);
        return t = t == null ? 0 : Re(H(t), 0), j(function(a) {
          var o = a[t], c = $t(a, 0, t);
          return o && jt(c, o), Le(e, this, c);
        });
      }
      function mT(e, t, a) {
        var o = !0, c = !0;
        if (typeof e != "function")
          throw new st(h);
        return ue(a) && (o = "leading" in a ? !!a.leading : o, c = "trailing" in a ? !!a.trailing : c), Eu(e, t, {
          leading: o,
          maxWait: t,
          trailing: c
        });
      }
      function VT(e) {
        return Zu(e, 1);
      }
      function TT(e, t) {
        return Ho(bo(t), e);
      }
      function vT() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return I(e) ? e : [e];
      }
      function UT(e) {
        return ut(e, C);
      }
      function wT(e, t) {
        return t = typeof t == "function" ? t : r, ut(e, C, t);
      }
      function RT(e) {
        return ut(e, k | C);
      }
      function NT(e, t) {
        return t = typeof t == "function" ? t : r, ut(e, k | C, t);
      }
      function MT(e, t) {
        return t == null || vc(e, t, Me(t));
      }
      function Rt(e, t) {
        return e === t || e !== e && t !== t;
      }
      var gT = Ya(To), ZT = Ya(function(e, t) {
        return e >= t;
      }), Un = gc(function() {
        return arguments;
      }()) ? gc : function(e) {
        return he(e) && re.call(e, "callee") && !uc.call(e, "callee");
      }, I = w.isArray, JT = Hs ? qe(Hs) : AV;
      function He(e) {
        return e != null && Ka(e.length) && !Dt(e);
      }
      function me(e) {
        return he(e) && He(e);
      }
      function kT(e) {
        return e === !0 || e === !1 || he(e) && Qe(e) == fr;
      }
      var en = zm || nl, yT = Ps ? qe(Ps) : xV;
      function bT(e) {
        return he(e) && e.nodeType === 1 && !Sr(e);
      }
      function ET(e) {
        if (e == null)
          return !0;
        if (He(e) && (I(e) || typeof e == "string" || typeof e.splice == "function" || en(e) || Pn(e) || Un(e)))
          return !e.length;
        var t = Be(e);
        if (t == Tt || t == vt)
          return !e.size;
        if (Fr(e))
          return !wo(e).length;
        for (var a in e)
          if (re.call(e, a))
            return !1;
        return !0;
      }
      function FT(e, t) {
        return yr(e, t);
      }
      function WT(e, t, a) {
        a = typeof a == "function" ? a : r;
        var o = a ? a(e, t) : r;
        return o === r ? yr(e, t, r, a) : !!o;
      }
      function Po(e) {
        if (!he(e))
          return !1;
        var t = Qe(e);
        return t == ua || t == tp || typeof e.message == "string" && typeof e.name == "string" && !Sr(e);
      }
      function ST(e) {
        return typeof e == "number" && fc(e);
      }
      function Dt(e) {
        if (!ue(e))
          return !1;
        var t = Qe(e);
        return t == da || t == Us || t == ep || t == rp;
      }
      function Wu(e) {
        return typeof e == "number" && e == H(e);
      }
      function Ka(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= De;
      }
      function ue(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function he(e) {
        return e != null && typeof e == "object";
      }
      var Su = js ? qe(js) : CV;
      function AT(e, t) {
        return e === t || Uo(e, t, Bo(t));
      }
      function xT(e, t, a) {
        return a = typeof a == "function" ? a : r, Uo(e, t, Bo(t), a);
      }
      function BT(e) {
        return Au(e) && e != +e;
      }
      function CT(e) {
        if (w1(e))
          throw new Y(f);
        return Zc(e);
      }
      function DT(e) {
        return e === null;
      }
      function QT(e) {
        return e == null;
      }
      function Au(e) {
        return typeof e == "number" || he(e) && Qe(e) == pr;
      }
      function Sr(e) {
        if (!he(e) || Qe(e) != Ft)
          return !1;
        var t = Za(e);
        if (t === null)
          return !0;
        var a = re.call(t, "constructor") && t.constructor;
        return typeof a == "function" && a instanceof a && Ra.call(a) == xm;
      }
      var jo = Xs ? qe(Xs) : DV;
      function OT(e) {
        return Wu(e) && e >= -De && e <= De;
      }
      var xu = _s ? qe(_s) : QV;
      function $a(e) {
        return typeof e == "string" || !I(e) && he(e) && Qe(e) == Vr;
      }
      function $e(e) {
        return typeof e == "symbol" || he(e) && Qe(e) == fa;
      }
      var Pn = Ls ? qe(Ls) : OV;
      function zT(e) {
        return e === r;
      }
      function GT(e) {
        return he(e) && Be(e) == Tr;
      }
      function YT(e) {
        return he(e) && Qe(e) == ip;
      }
      var IT = Ya(Ro), HT = Ya(function(e, t) {
        return e <= t;
      });
      function Bu(e) {
        if (!e)
          return [];
        if (He(e))
          return $a(e) ? Ut(e) : Ie(e);
        if (wr && e[wr])
          return Mm(e[wr]());
        var t = Be(e), a = t == Tt ? lo : t == vt ? va : jn;
        return a(e);
      }
      function Qt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = ht(e), e === ye || e === -ye) {
          var t = e < 0 ? -1 : 1;
          return t * dr;
        }
        return e === e ? e : 0;
      }
      function H(e) {
        var t = Qt(e), a = t % 1;
        return t === t ? a ? t - a : t : 0;
      }
      function Cu(e) {
        return e ? mn(H(e), 0, Zt) : 0;
      }
      function ht(e) {
        if (typeof e == "number")
          return e;
        if ($e(e))
          return sa;
        if (ue(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ue(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = nc(e);
        var a = Jp.test(e);
        return a || yp.test(e) ? om(e.slice(2), a ? 2 : 8) : Zp.test(e) ? sa : +e;
      }
      function Du(e) {
        return kt(e, Pe(e));
      }
      function PT(e) {
        return e ? mn(H(e), -De, De) : e === 0 ? e : 0;
      }
      function te(e) {
        return e == null ? "" : Ke(e);
      }
      var jT = Yn(function(e, t) {
        if (Fr(t) || He(t)) {
          kt(t, Me(t), e);
          return;
        }
        for (var a in t)
          re.call(t, a) && Zr(e, a, t[a]);
      }), Qu = Yn(function(e, t) {
        kt(t, Pe(t), e);
      }), ei = Yn(function(e, t, a, o) {
        kt(t, Pe(t), e, o);
      }), XT = Yn(function(e, t, a, o) {
        kt(t, Me(t), e, o);
      }), _T = Bt(po);
      function LT(e, t) {
        var a = Gn(e);
        return t == null ? a : Tc(a, t);
      }
      var qT = j(function(e, t) {
        e = oe(e);
        var a = -1, o = t.length, c = o > 2 ? t[2] : r;
        for (c && Oe(t[0], t[1], c) && (o = 1); ++a < o; )
          for (var d = t[a], p = Pe(d), V = -1, U = p.length; ++V < U; ) {
            var g = p[V], Z = e[g];
            (Z === r || Rt(Z, Qn[g]) && !re.call(e, g)) && (e[g] = d[g]);
          }
        return e;
      }), KT = j(function(e) {
        return e.push(r, nu), Le(Ou, r, e);
      });
      function $T(e, t) {
        return Ks(e, D(t, 3), Jt);
      }
      function ev(e, t) {
        return Ks(e, D(t, 3), Vo);
      }
      function tv(e, t) {
        return e == null ? e : mo(e, D(t, 3), Pe);
      }
      function nv(e, t) {
        return e == null ? e : Nc(e, D(t, 3), Pe);
      }
      function rv(e, t) {
        return e && Jt(e, D(t, 3));
      }
      function av(e, t) {
        return e && Vo(e, D(t, 3));
      }
      function iv(e) {
        return e == null ? [] : xa(e, Me(e));
      }
      function ov(e) {
        return e == null ? [] : xa(e, Pe(e));
      }
      function Xo(e, t, a) {
        var o = e == null ? r : Vn(e, t);
        return o === r ? a : o;
      }
      function lv(e, t) {
        return e != null && iu(e, t, EV);
      }
      function _o(e, t) {
        return e != null && iu(e, t, FV);
      }
      var sv = qc(function(e, t, a) {
        t != null && typeof t.toString != "function" && (t = Na.call(t)), e[t] = a;
      }, qo(je)), cv = qc(function(e, t, a) {
        t != null && typeof t.toString != "function" && (t = Na.call(t)), re.call(e, t) ? e[t].push(a) : e[t] = [a];
      }, D), uv = j(kr);
      function Me(e) {
        return He(e) ? mc(e) : wo(e);
      }
      function Pe(e) {
        return He(e) ? mc(e, !0) : zV(e);
      }
      function dv(e, t) {
        var a = {};
        return t = D(t, 3), Jt(e, function(o, c, d) {
          At(a, t(o, c, d), o);
        }), a;
      }
      function fv(e, t) {
        var a = {};
        return t = D(t, 3), Jt(e, function(o, c, d) {
          At(a, c, t(o, c, d));
        }), a;
      }
      var hv = Yn(function(e, t, a) {
        Ba(e, t, a);
      }), Ou = Yn(function(e, t, a, o) {
        Ba(e, t, a, o);
      }), pv = Bt(function(e, t) {
        var a = {};
        if (e == null)
          return a;
        var o = !1;
        t = ce(t, function(d) {
          return d = Kt(d, e), o || (o = d.length > 1), d;
        }), kt(e, Ao(e), a), o && (a = ut(a, k | y | C, s1));
        for (var c = t.length; c--; )
          Jo(a, t[c]);
        return a;
      });
      function mv(e, t) {
        return zu(e, qa(D(t)));
      }
      var Vv = Bt(function(e, t) {
        return e == null ? {} : YV(e, t);
      });
      function zu(e, t) {
        if (e == null)
          return {};
        var a = ce(Ao(e), function(o) {
          return [o];
        });
        return t = D(t), Wc(e, a, function(o, c) {
          return t(o, c[0]);
        });
      }
      function Tv(e, t, a) {
        t = Kt(t, e);
        var o = -1, c = t.length;
        for (c || (c = 1, e = r); ++o < c; ) {
          var d = e == null ? r : e[yt(t[o])];
          d === r && (o = c, d = a), e = Dt(d) ? d.call(e) : d;
        }
        return e;
      }
      function vv(e, t, a) {
        return e == null ? e : br(e, t, a);
      }
      function Uv(e, t, a, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : br(e, t, a, o);
      }
      var Gu = eu(Me), Yu = eu(Pe);
      function wv(e, t, a) {
        var o = I(e), c = o || en(e) || Pn(e);
        if (t = D(t, 4), a == null) {
          var d = e && e.constructor;
          c ? a = o ? new d() : [] : ue(e) ? a = Dt(d) ? Gn(Za(e)) : {} : a = {};
        }
        return (c ? lt : Jt)(e, function(p, V, U) {
          return t(a, p, V, U);
        }), a;
      }
      function Rv(e, t) {
        return e == null ? !0 : Jo(e, t);
      }
      function Nv(e, t, a) {
        return e == null ? e : Cc(e, t, bo(a));
      }
      function Mv(e, t, a, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : Cc(e, t, bo(a), o);
      }
      function jn(e) {
        return e == null ? [] : oo(e, Me(e));
      }
      function gv(e) {
        return e == null ? [] : oo(e, Pe(e));
      }
      function Zv(e, t, a) {
        return a === r && (a = t, t = r), a !== r && (a = ht(a), a = a === a ? a : 0), t !== r && (t = ht(t), t = t === t ? t : 0), mn(ht(e), t, a);
      }
      function Jv(e, t, a) {
        return t = Qt(t), a === r ? (a = t, t = 0) : a = Qt(a), e = ht(e), WV(e, t, a);
      }
      function kv(e, t, a) {
        if (a && typeof a != "boolean" && Oe(e, t, a) && (t = a = r), a === r && (typeof t == "boolean" ? (a = t, t = r) : typeof e == "boolean" && (a = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Qt(e), t === r ? (t = e, e = 0) : t = Qt(t)), e > t) {
          var o = e;
          e = t, t = o;
        }
        if (a || e % 1 || t % 1) {
          var c = hc();
          return xe(e + c * (t - e + im("1e-" + ((c + "").length - 1))), t);
        }
        return Mo(e, t);
      }
      var yv = In(function(e, t, a) {
        return t = t.toLowerCase(), e + (a ? Iu(t) : t);
      });
      function Iu(e) {
        return Lo(te(e).toLowerCase());
      }
      function Hu(e) {
        return e = te(e), e && e.replace(Ep, vm).replace(_p, "");
      }
      function bv(e, t, a) {
        e = te(e), t = Ke(t);
        var o = e.length;
        a = a === r ? o : mn(H(a), 0, o);
        var c = a;
        return a -= t.length, a >= 0 && e.slice(a, c) == t;
      }
      function Ev(e) {
        return e = te(e), e && up.test(e) ? e.replace(Ns, Um) : e;
      }
      function Fv(e) {
        return e = te(e), e && Vp.test(e) ? e.replace(Ii, "\\$&") : e;
      }
      var Wv = In(function(e, t, a) {
        return e + (a ? "-" : "") + t.toLowerCase();
      }), Sv = In(function(e, t, a) {
        return e + (a ? " " : "") + t.toLowerCase();
      }), Av = Xc("toLowerCase");
      function xv(e, t, a) {
        e = te(e), t = H(t);
        var o = t ? Cn(e) : 0;
        if (!t || o >= t)
          return e;
        var c = (t - o) / 2;
        return Ga(ba(c), a) + e + Ga(ya(c), a);
      }
      function Bv(e, t, a) {
        e = te(e), t = H(t);
        var o = t ? Cn(e) : 0;
        return t && o < t ? e + Ga(t - o, a) : e;
      }
      function Cv(e, t, a) {
        e = te(e), t = H(t);
        var o = t ? Cn(e) : 0;
        return t && o < t ? Ga(t - o, a) + e : e;
      }
      function Dv(e, t, a) {
        return a || t == null ? t = 0 : t && (t = +t), Hm(te(e).replace(Hi, ""), t || 0);
      }
      function Qv(e, t, a) {
        return (a ? Oe(e, t, a) : t === r) ? t = 1 : t = H(t), go(te(e), t);
      }
      function Ov() {
        var e = arguments, t = te(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var zv = In(function(e, t, a) {
        return e + (a ? "_" : "") + t.toLowerCase();
      });
      function Gv(e, t, a) {
        return a && typeof a != "number" && Oe(e, t, a) && (t = a = r), a = a === r ? Zt : a >>> 0, a ? (e = te(e), e && (typeof t == "string" || t != null && !jo(t)) && (t = Ke(t), !t && Bn(e)) ? $t(Ut(e), 0, a) : e.split(t, a)) : [];
      }
      var Yv = In(function(e, t, a) {
        return e + (a ? " " : "") + Lo(t);
      });
      function Iv(e, t, a) {
        return e = te(e), a = a == null ? 0 : mn(H(a), 0, e.length), t = Ke(t), e.slice(a, a + t.length) == t;
      }
      function Hv(e, t, a) {
        var o = u.templateSettings;
        a && Oe(e, t, a) && (t = r), e = te(e), t = ei({}, t, o, tu);
        var c = ei({}, t.imports, o.imports, tu), d = Me(c), p = oo(c, d), V, U, g = 0, Z = t.interpolate || ha, J = "__p += '", F = so(
          (t.escape || ha).source + "|" + Z.source + "|" + (Z === Ms ? gp : ha).source + "|" + (t.evaluate || ha).source + "|$",
          "g"
        ), B = "//# sourceURL=" + (re.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++em + "]") + `
`;
        e.replace(F, function(z, _, K, et, ze, tt) {
          return K || (K = et), J += e.slice(g, tt).replace(Fp, wm), _ && (V = !0, J += `' +
__e(` + _ + `) +
'`), ze && (U = !0, J += `';
` + ze + `;
__p += '`), K && (J += `' +
((__t = (` + K + `)) == null ? '' : __t) +
'`), g = tt + z.length, z;
        }), J += `';
`;
        var O = re.call(t, "variable") && t.variable;
        if (!O)
          J = `with (obj) {
` + J + `
}
`;
        else if (Np.test(O))
          throw new Y(m);
        J = (U ? J.replace(op, "") : J).replace(lp, "$1").replace(sp, "$1;"), J = "function(" + (O || "obj") + `) {
` + (O ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (U ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var P = ju(function() {
          return ee(d, B + "return " + J).apply(r, p);
        });
        if (P.source = J, Po(P))
          throw P;
        return P;
      }
      function Pv(e) {
        return te(e).toLowerCase();
      }
      function jv(e) {
        return te(e).toUpperCase();
      }
      function Xv(e, t, a) {
        if (e = te(e), e && (a || t === r))
          return nc(e);
        if (!e || !(t = Ke(t)))
          return e;
        var o = Ut(e), c = Ut(t), d = rc(o, c), p = ac(o, c) + 1;
        return $t(o, d, p).join("");
      }
      function _v(e, t, a) {
        if (e = te(e), e && (a || t === r))
          return e.slice(0, oc(e) + 1);
        if (!e || !(t = Ke(t)))
          return e;
        var o = Ut(e), c = ac(o, Ut(t)) + 1;
        return $t(o, 0, c).join("");
      }
      function Lv(e, t, a) {
        if (e = te(e), e && (a || t === r))
          return e.replace(Hi, "");
        if (!e || !(t = Ke(t)))
          return e;
        var o = Ut(e), c = rc(o, Ut(t));
        return $t(o, c).join("");
      }
      function qv(e, t) {
        var a = Ye, o = de;
        if (ue(t)) {
          var c = "separator" in t ? t.separator : c;
          a = "length" in t ? H(t.length) : a, o = "omission" in t ? Ke(t.omission) : o;
        }
        e = te(e);
        var d = e.length;
        if (Bn(e)) {
          var p = Ut(e);
          d = p.length;
        }
        if (a >= d)
          return e;
        var V = a - Cn(o);
        if (V < 1)
          return o;
        var U = p ? $t(p, 0, V).join("") : e.slice(0, V);
        if (c === r)
          return U + o;
        if (p && (V += U.length - V), jo(c)) {
          if (e.slice(V).search(c)) {
            var g, Z = U;
            for (c.global || (c = so(c.source, te(gs.exec(c)) + "g")), c.lastIndex = 0; g = c.exec(Z); )
              var J = g.index;
            U = U.slice(0, J === r ? V : J);
          }
        } else if (e.indexOf(Ke(c), V) != V) {
          var F = U.lastIndexOf(c);
          F > -1 && (U = U.slice(0, F));
        }
        return U + o;
      }
      function Kv(e) {
        return e = te(e), e && cp.test(e) ? e.replace(Rs, km) : e;
      }
      var $v = In(function(e, t, a) {
        return e + (a ? " " : "") + t.toUpperCase();
      }), Lo = Xc("toUpperCase");
      function Pu(e, t, a) {
        return e = te(e), t = a ? r : t, t === r ? Nm(e) ? Em(e) : hm(e) : e.match(t) || [];
      }
      var ju = j(function(e, t) {
        try {
          return Le(e, r, t);
        } catch (a) {
          return Po(a) ? a : new Y(a);
        }
      }), eU = Bt(function(e, t) {
        return lt(t, function(a) {
          a = yt(a), At(e, a, Io(e[a], e));
        }), e;
      });
      function tU(e) {
        var t = e == null ? 0 : e.length, a = D();
        return e = t ? ce(e, function(o) {
          if (typeof o[1] != "function")
            throw new st(h);
          return [a(o[0]), o[1]];
        }) : [], j(function(o) {
          for (var c = -1; ++c < t; ) {
            var d = e[c];
            if (Le(d[0], this, o))
              return Le(d[1], this, o);
          }
        });
      }
      function nU(e) {
        return kV(ut(e, k));
      }
      function qo(e) {
        return function() {
          return e;
        };
      }
      function rU(e, t) {
        return e == null || e !== e ? t : e;
      }
      var aU = Lc(), iU = Lc(!0);
      function je(e) {
        return e;
      }
      function Ko(e) {
        return Jc(typeof e == "function" ? e : ut(e, k));
      }
      function oU(e) {
        return yc(ut(e, k));
      }
      function lU(e, t) {
        return bc(e, ut(t, k));
      }
      var sU = j(function(e, t) {
        return function(a) {
          return kr(a, e, t);
        };
      }), cU = j(function(e, t) {
        return function(a) {
          return kr(e, a, t);
        };
      });
      function $o(e, t, a) {
        var o = Me(t), c = xa(t, o);
        a == null && !(ue(t) && (c.length || !o.length)) && (a = t, t = e, e = this, c = xa(t, Me(t)));
        var d = !(ue(a) && "chain" in a) || !!a.chain, p = Dt(e);
        return lt(c, function(V) {
          var U = t[V];
          e[V] = U, p && (e.prototype[V] = function() {
            var g = this.__chain__;
            if (d || g) {
              var Z = e(this.__wrapped__), J = Z.__actions__ = Ie(this.__actions__);
              return J.push({ func: U, args: arguments, thisArg: e }), Z.__chain__ = g, Z;
            }
            return U.apply(e, jt([this.value()], arguments));
          });
        }), e;
      }
      function uU() {
        return be._ === this && (be._ = Bm), this;
      }
      function el() {
      }
      function dU(e) {
        return e = H(e), j(function(t) {
          return Ec(t, e);
        });
      }
      var fU = Fo(ce), hU = Fo(qs), pU = Fo(to);
      function Xu(e) {
        return Do(e) ? no(yt(e)) : IV(e);
      }
      function mU(e) {
        return function(t) {
          return e == null ? r : Vn(e, t);
        };
      }
      var VU = Kc(), TU = Kc(!0);
      function tl() {
        return [];
      }
      function nl() {
        return !1;
      }
      function vU() {
        return {};
      }
      function UU() {
        return "";
      }
      function wU() {
        return !0;
      }
      function RU(e, t) {
        if (e = H(e), e < 1 || e > De)
          return [];
        var a = Zt, o = xe(e, Zt);
        t = D(t), e -= Zt;
        for (var c = io(o, t); ++a < e; )
          t(a);
        return c;
      }
      function NU(e) {
        return I(e) ? ce(e, yt) : $e(e) ? [e] : Ie(pu(te(e)));
      }
      function MU(e) {
        var t = ++Am;
        return te(e) + t;
      }
      var gU = za(function(e, t) {
        return e + t;
      }, 0), ZU = Wo("ceil"), JU = za(function(e, t) {
        return e / t;
      }, 1), kU = Wo("floor");
      function yU(e) {
        return e && e.length ? Aa(e, je, To) : r;
      }
      function bU(e, t) {
        return e && e.length ? Aa(e, D(t, 2), To) : r;
      }
      function EU(e) {
        return ec(e, je);
      }
      function FU(e, t) {
        return ec(e, D(t, 2));
      }
      function WU(e) {
        return e && e.length ? Aa(e, je, Ro) : r;
      }
      function SU(e, t) {
        return e && e.length ? Aa(e, D(t, 2), Ro) : r;
      }
      var AU = za(function(e, t) {
        return e * t;
      }, 1), xU = Wo("round"), BU = za(function(e, t) {
        return e - t;
      }, 0);
      function CU(e) {
        return e && e.length ? ao(e, je) : 0;
      }
      function DU(e, t) {
        return e && e.length ? ao(e, D(t, 2)) : 0;
      }
      return u.after = oT, u.ary = Zu, u.assign = jT, u.assignIn = Qu, u.assignInWith = ei, u.assignWith = XT, u.at = _T, u.before = Ju, u.bind = Io, u.bindAll = eU, u.bindKey = ku, u.castArray = vT, u.chain = Nu, u.chunk = k1, u.compact = y1, u.concat = b1, u.cond = tU, u.conforms = nU, u.constant = qo, u.countBy = C0, u.create = LT, u.curry = yu, u.curryRight = bu, u.debounce = Eu, u.defaults = qT, u.defaultsDeep = KT, u.defer = lT, u.delay = sT, u.difference = E1, u.differenceBy = F1, u.differenceWith = W1, u.drop = S1, u.dropRight = A1, u.dropRightWhile = x1, u.dropWhile = B1, u.fill = C1, u.filter = Q0, u.flatMap = G0, u.flatMapDeep = Y0, u.flatMapDepth = I0, u.flatten = vu, u.flattenDeep = D1, u.flattenDepth = Q1, u.flip = cT, u.flow = aU, u.flowRight = iU, u.fromPairs = O1, u.functions = iv, u.functionsIn = ov, u.groupBy = H0, u.initial = G1, u.intersection = Y1, u.intersectionBy = I1, u.intersectionWith = H1, u.invert = sv, u.invertBy = cv, u.invokeMap = j0, u.iteratee = Ko, u.keyBy = X0, u.keys = Me, u.keysIn = Pe, u.map = Xa, u.mapKeys = dv, u.mapValues = fv, u.matches = oU, u.matchesProperty = lU, u.memoize = La, u.merge = hv, u.mergeWith = Ou, u.method = sU, u.methodOf = cU, u.mixin = $o, u.negate = qa, u.nthArg = dU, u.omit = pv, u.omitBy = mv, u.once = uT, u.orderBy = _0, u.over = fU, u.overArgs = dT, u.overEvery = hU, u.overSome = pU, u.partial = Ho, u.partialRight = Fu, u.partition = L0, u.pick = Vv, u.pickBy = zu, u.property = Xu, u.propertyOf = mU, u.pull = _1, u.pullAll = wu, u.pullAllBy = L1, u.pullAllWith = q1, u.pullAt = K1, u.range = VU, u.rangeRight = TU, u.rearg = fT, u.reject = $0, u.remove = $1, u.rest = hT, u.reverse = Go, u.sampleSize = tT, u.set = vv, u.setWith = Uv, u.shuffle = nT, u.slice = e0, u.sortBy = iT, u.sortedUniq = l0, u.sortedUniqBy = s0, u.split = Gv, u.spread = pT, u.tail = c0, u.take = u0, u.takeRight = d0, u.takeRightWhile = f0, u.takeWhile = h0, u.tap = y0, u.throttle = mT, u.thru = ja, u.toArray = Bu, u.toPairs = Gu, u.toPairsIn = Yu, u.toPath = NU, u.toPlainObject = Du, u.transform = wv, u.unary = VT, u.union = p0, u.unionBy = m0, u.unionWith = V0, u.uniq = T0, u.uniqBy = v0, u.uniqWith = U0, u.unset = Rv, u.unzip = Yo, u.unzipWith = Ru, u.update = Nv, u.updateWith = Mv, u.values = jn, u.valuesIn = gv, u.without = w0, u.words = Pu, u.wrap = TT, u.xor = R0, u.xorBy = N0, u.xorWith = M0, u.zip = g0, u.zipObject = Z0, u.zipObjectDeep = J0, u.zipWith = k0, u.entries = Gu, u.entriesIn = Yu, u.extend = Qu, u.extendWith = ei, $o(u, u), u.add = gU, u.attempt = ju, u.camelCase = yv, u.capitalize = Iu, u.ceil = ZU, u.clamp = Zv, u.clone = UT, u.cloneDeep = RT, u.cloneDeepWith = NT, u.cloneWith = wT, u.conformsTo = MT, u.deburr = Hu, u.defaultTo = rU, u.divide = JU, u.endsWith = bv, u.eq = Rt, u.escape = Ev, u.escapeRegExp = Fv, u.every = D0, u.find = O0, u.findIndex = Vu, u.findKey = $T, u.findLast = z0, u.findLastIndex = Tu, u.findLastKey = ev, u.floor = kU, u.forEach = Mu, u.forEachRight = gu, u.forIn = tv, u.forInRight = nv, u.forOwn = rv, u.forOwnRight = av, u.get = Xo, u.gt = gT, u.gte = ZT, u.has = lv, u.hasIn = _o, u.head = Uu, u.identity = je, u.includes = P0, u.indexOf = z1, u.inRange = Jv, u.invoke = uv, u.isArguments = Un, u.isArray = I, u.isArrayBuffer = JT, u.isArrayLike = He, u.isArrayLikeObject = me, u.isBoolean = kT, u.isBuffer = en, u.isDate = yT, u.isElement = bT, u.isEmpty = ET, u.isEqual = FT, u.isEqualWith = WT, u.isError = Po, u.isFinite = ST, u.isFunction = Dt, u.isInteger = Wu, u.isLength = Ka, u.isMap = Su, u.isMatch = AT, u.isMatchWith = xT, u.isNaN = BT, u.isNative = CT, u.isNil = QT, u.isNull = DT, u.isNumber = Au, u.isObject = ue, u.isObjectLike = he, u.isPlainObject = Sr, u.isRegExp = jo, u.isSafeInteger = OT, u.isSet = xu, u.isString = $a, u.isSymbol = $e, u.isTypedArray = Pn, u.isUndefined = zT, u.isWeakMap = GT, u.isWeakSet = YT, u.join = P1, u.kebabCase = Wv, u.last = ft, u.lastIndexOf = j1, u.lowerCase = Sv, u.lowerFirst = Av, u.lt = IT, u.lte = HT, u.max = yU, u.maxBy = bU, u.mean = EU, u.meanBy = FU, u.min = WU, u.minBy = SU, u.stubArray = tl, u.stubFalse = nl, u.stubObject = vU, u.stubString = UU, u.stubTrue = wU, u.multiply = AU, u.nth = X1, u.noConflict = uU, u.noop = el, u.now = _a, u.pad = xv, u.padEnd = Bv, u.padStart = Cv, u.parseInt = Dv, u.random = kv, u.reduce = q0, u.reduceRight = K0, u.repeat = Qv, u.replace = Ov, u.result = Tv, u.round = xU, u.runInContext = T, u.sample = eT, u.size = rT, u.snakeCase = zv, u.some = aT, u.sortedIndex = t0, u.sortedIndexBy = n0, u.sortedIndexOf = r0, u.sortedLastIndex = a0, u.sortedLastIndexBy = i0, u.sortedLastIndexOf = o0, u.startCase = Yv, u.startsWith = Iv, u.subtract = BU, u.sum = CU, u.sumBy = DU, u.template = Hv, u.times = RU, u.toFinite = Qt, u.toInteger = H, u.toLength = Cu, u.toLower = Pv, u.toNumber = ht, u.toSafeInteger = PT, u.toString = te, u.toUpper = jv, u.trim = Xv, u.trimEnd = _v, u.trimStart = Lv, u.truncate = qv, u.unescape = Kv, u.uniqueId = MU, u.upperCase = $v, u.upperFirst = Lo, u.each = Mu, u.eachRight = gu, u.first = Uu, $o(u, function() {
        var e = {};
        return Jt(u, function(t, a) {
          re.call(u.prototype, a) || (e[a] = t);
        }), e;
      }(), { chain: !1 }), u.VERSION = l, lt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        u[e].placeholder = u;
      }), lt(["drop", "take"], function(e, t) {
        L.prototype[e] = function(a) {
          a = a === r ? 1 : Re(H(a), 0);
          var o = this.__filtered__ && !t ? new L(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = xe(a, o.__takeCount__) : o.__views__.push({
            size: xe(a, Zt),
            type: e + (o.__dir__ < 0 ? "Right" : "")
          }), o;
        }, L.prototype[e + "Right"] = function(a) {
          return this.reverse()[e](a).reverse();
        };
      }), lt(["filter", "map", "takeWhile"], function(e, t) {
        var a = t + 1, o = a == Ue || a == ke;
        L.prototype[e] = function(c) {
          var d = this.clone();
          return d.__iteratees__.push({
            iteratee: D(c, 3),
            type: a
          }), d.__filtered__ = d.__filtered__ || o, d;
        };
      }), lt(["head", "last"], function(e, t) {
        var a = "take" + (t ? "Right" : "");
        L.prototype[e] = function() {
          return this[a](1).value()[0];
        };
      }), lt(["initial", "tail"], function(e, t) {
        var a = "drop" + (t ? "" : "Right");
        L.prototype[e] = function() {
          return this.__filtered__ ? new L(this) : this[a](1);
        };
      }), L.prototype.compact = function() {
        return this.filter(je);
      }, L.prototype.find = function(e) {
        return this.filter(e).head();
      }, L.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, L.prototype.invokeMap = j(function(e, t) {
        return typeof e == "function" ? new L(this) : this.map(function(a) {
          return kr(a, e, t);
        });
      }), L.prototype.reject = function(e) {
        return this.filter(qa(D(e)));
      }, L.prototype.slice = function(e, t) {
        e = H(e);
        var a = this;
        return a.__filtered__ && (e > 0 || t < 0) ? new L(a) : (e < 0 ? a = a.takeRight(-e) : e && (a = a.drop(e)), t !== r && (t = H(t), a = t < 0 ? a.dropRight(-t) : a.take(t - e)), a);
      }, L.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, L.prototype.toArray = function() {
        return this.take(Zt);
      }, Jt(L.prototype, function(e, t) {
        var a = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), c = u[o ? "take" + (t == "last" ? "Right" : "") : t], d = o || /^find/.test(t);
        !c || (u.prototype[t] = function() {
          var p = this.__wrapped__, V = o ? [1] : arguments, U = p instanceof L, g = V[0], Z = U || I(p), J = function(_) {
            var K = c.apply(u, jt([_], V));
            return o && F ? K[0] : K;
          };
          Z && a && typeof g == "function" && g.length != 1 && (U = Z = !1);
          var F = this.__chain__, B = !!this.__actions__.length, O = d && !F, P = U && !B;
          if (!d && Z) {
            p = P ? p : new L(this);
            var z = e.apply(p, V);
            return z.__actions__.push({ func: ja, args: [J], thisArg: r }), new ct(z, F);
          }
          return O && P ? e.apply(this, V) : (z = this.thru(J), O ? o ? z.value()[0] : z.value() : z);
        });
      }), lt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Ua[e], a = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
        u.prototype[e] = function() {
          var c = arguments;
          if (o && !this.__chain__) {
            var d = this.value();
            return t.apply(I(d) ? d : [], c);
          }
          return this[a](function(p) {
            return t.apply(I(p) ? p : [], c);
          });
        };
      }), Jt(L.prototype, function(e, t) {
        var a = u[t];
        if (a) {
          var o = a.name + "";
          re.call(zn, o) || (zn[o] = []), zn[o].push({ name: t, func: a });
        }
      }), zn[Oa(r, E).name] = [{
        name: "wrapper",
        func: r
      }], L.prototype.clone = Km, L.prototype.reverse = $m, L.prototype.value = eV, u.prototype.at = b0, u.prototype.chain = E0, u.prototype.commit = F0, u.prototype.next = W0, u.prototype.plant = A0, u.prototype.reverse = x0, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = B0, u.prototype.first = u.prototype.head, wr && (u.prototype[wr] = S0), u;
    }, Dn = Fm();
    dn ? ((dn.exports = Dn)._ = Dn, qi._ = Dn) : be._ = Dn;
  }).call(Ar);
})(rt, rt.exports);
const lR = window.Pinia.defineStore, uh = lR("situationsStore", {
  state: () => ({
    situations: [],
    alarms: {}
  }),
  actions: {
    async getSituations() {
      const n = await oR();
      if (n) {
        this.alarms = rt.exports.mapKeys(n.alarm, (r) => r.id);
        const i = n.alarm.filter(
          (r) => r.relatedAlarms && r.relatedAlarms.length > 0
        );
        i.forEach((r) => {
          r.relatedAlarms.forEach((l) => {
            var s, f, h;
            l.count = (s = this.alarms[l.id]) == null ? void 0 : s.count, l.firstEventTime = (f = this.alarms[l.id]) == null ? void 0 : f.firstEventTime, l.lastEventTime = (h = this.alarms[l.id]) == null ? void 0 : h.lastEventTime;
          });
        }), this.situations = i;
      }
    }
  }
}), sR = window.Vue.defineComponent, cR = window.Vue.toDisplayString, uR = window.Vue.normalizeClass, dR = window.Vue.openBlock, fR = window.Vue.createElementBlock, hR = window.Vue.createCommentVNode, pR = /* @__PURE__ */ sR({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const i = n;
    return (r, l) => i != null && i.severity ? (dR(), fR("span", {
      key: 0,
      class: uR(["severity-status", [`${i.severity.toLowerCase()}-color`]])
    }, cR(i.severity), 3)) : hR("", !0);
  }
});
const ts = /* @__PURE__ */ _e(pR, [["__scopeId", "data-v-83c2cdce"]]), mR = window.Vue.defineComponent, VR = window.Vue.unref, TR = window.Vue.renderList, vR = window.Vue.Fragment, vl = window.Vue.openBlock, Ul = window.Vue.createElementBlock, UR = window.Vue.toDisplayString, wR = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const RR = { class: "alarms-list" }, NR = /* @__PURE__ */ mR({
  __name: "AlarmsCountBySeverity",
  props: {
    relatedAlarms: null,
    size: null
  },
  setup(n) {
    const i = n;
    return (r, l) => (vl(), Ul("div", RR, [
      (vl(!0), Ul(vR, null, TR(VR(rt.exports.groupBy)(i == null ? void 0 : i.relatedAlarms, "severity"), (s, f) => (vl(), Ul("div", {
        class: wR(["alarm-count", [`${f.toString().toLowerCase()}-color`, i.size]]),
        key: f
      }, UR(s.length), 3))), 128))
    ]));
  }
});
const dh = /* @__PURE__ */ _e(NR, [["__scopeId", "data-v-b8c8b147"]]), MR = window.Vue.defineComponent, Ud = window.Vue.normalizeClass, ti = window.Vue.createElementVNode, gR = window.Vue.toDisplayString, wd = window.Vue.createVNode, ZR = window.Vue.openBlock, JR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const kR = { class: "content" }, yR = { class: "title-row" }, bR = { class: "title" }, ER = /* @__PURE__ */ MR({
  __name: "SituationCard",
  props: {
    alarmInfo: null,
    selected: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(n, { emit: i }) {
    const r = n, l = () => {
      var s;
      i("situation-selected", (s = r.alarmInfo) == null ? void 0 : s.id);
    };
    return (s, f) => {
      var h, m, v, N, M;
      return ZR(), JR("div", {
        onClick: l,
        class: Ud(["card", { selected: r.selected }])
      }, [
        ti("div", {
          class: Ud(["severity-line", [`${(m = (h = r.alarmInfo) == null ? void 0 : h.severity) == null ? void 0 : m.toLowerCase()}-bg dark`]])
        }, null, 2),
        ti("div", kR, [
          ti("div", yR, [
            ti("div", bR, "[ " + gR((v = r.alarmInfo) == null ? void 0 : v.id) + " ]", 1),
            wd(ts, {
              severity: (N = r.alarmInfo) == null ? void 0 : N.severity
            }, null, 8, ["severity"])
          ]),
          wd(dh, {
            relatedAlarms: (M = r.alarmInfo) == null ? void 0 : M.relatedAlarms,
            size: "normal"
          }, null, 8, ["relatedAlarms"])
        ])
      ], 2);
    };
  }
});
const FR = /* @__PURE__ */ _e(ER, [["__scopeId", "data-v-34bf806c"]]);
const ni = window.Vue.ref, WR = window.Vue.inject, SR = window.Vue.computed, AR = window.Vue.onMounted, xR = {
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
}, BR = (n) => {
  const i = ni(!1), r = ni(), l = ni(n.controls), s = ni(n.id), f = () => {
    r.value && r.value.focus();
  }, h = WR("registerTab");
  AR(() => {
    if (r.value && h) {
      const v = r.value.parentElement, N = v && v.parentElement ? v.parentElement : void 0, M = Array.from(N ? N.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), k = v ? M.indexOf(v) : -1;
      h({
        el: r.value,
        focus: f,
        disabled: n.disabled,
        selected: i,
        id: s,
        controls: l,
        index: k
      });
    }
  });
  const m = SR(() => ({
    role: "tab",
    ref: "tab",
    tabindex: i.value ? 0 : -1,
    id: s.value,
    "aria-selected": i.value,
    "aria-controls": l.value,
    "aria-disabled": n.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: i,
    attrs: m,
    tab: r
  };
};
const vi = function(n, i) {
  return window ? window.setTimeout(n, i) : setTimeout(n, i);
}, Ui = function(n) {
  return window ? window.clearTimeout(n) : clearTimeout(n);
};
var CR = Object.defineProperty, DR = Object.defineProperties, QR = Object.getOwnPropertyDescriptors, Rd = Object.getOwnPropertySymbols, OR = Object.prototype.hasOwnProperty, zR = Object.prototype.propertyIsEnumerable, Nd = (n, i, r) => i in n ? CR(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Md = (n, i) => {
  for (var r in i || (i = {}))
    OR.call(i, r) && Nd(n, r, i[r]);
  if (Rd)
    for (var r of Rd(i))
      zR.call(i, r) && Nd(n, r, i[r]);
  return n;
}, GR = (n, i) => DR(n, QR(i));
const YR = window.Vue.defineComponent, IR = window.Vue.h;
var HR = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const PR = {
  center: {
    type: Boolean,
    default: !1
  }
}, jR = YR({
  props: PR,
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
    onClick(n) {
      this.pressed = !1, this.active = !1, requestAnimationFrame(() => {
        const { clientWidth: i, clientHeight: r } = this.parent, l = Math.round(Math.max(i, r));
        let s = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const f = this.parent.getBoundingClientRect(), h = n.pageY, m = n.pageX;
          s = {
            top: `${h - f.top - l / 2 - document.documentElement.scrollTop}px`,
            left: `${m - f.left - l / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = GR(Md({}, s), {
          height: `${l}px`,
          width: `${l}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Ui(this.failsafe), this.failsafe = vi(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return IR("div", {
        style: Md({}, this.styles),
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
    const n = window.getComputedStyle(this.parent);
    this.parent.style.overflow = "hidden", !(n.position === "relative" || n.position === "absolute" || n.position === "fixed") && (this.parent.style.position = "relative");
  },
  unmounted() {
    this.parent.removeEventListener("click", this.onClick);
  }
});
var yn = /* @__PURE__ */ HR(jR, [["__scopeId", "data-v-18e2a5db"]]);
const ve = function(n) {
  n = n || "feather";
  const i = Math.floor(Math.random() * 1e9);
  return [n.replace(/\s+/g, "-"), Date.now(), i].join("-");
}, Ne = {
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
}, gd = window.Vue.ref, XR = window.Vue.toRef, _R = window.Vue.watch, Zd = window.Vue.provide, LR = {
  prop: "modelValue",
  event: "update:modelValue"
}, qR = {
  "update:modelValue": (n) => !0
}, KR = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, $R = (n, i) => {
  const r = XR(n, "modelValue"), l = gd(n.modelValue), s = gd([]);
  _R(r, (S) => {
    v(S);
  });
  const f = (S) => {
    S.preventDefault(), s.value.some((x, A) => x.tab && x.tab.el.contains(S.target) ? (m(A), v(A), !0) : !1);
  }, h = (S) => {
    if (((X) => X.shiftKey || X.ctrlKey || X.metaKey || X.altKey)(S))
      return;
    const A = S.keyCode, E = (X) => {
      X.stopPropagation(), X.preventDefault();
    }, G = s.value.filter((X) => X.tab && !X.tab.disabled), Q = s.value.findIndex((X) => X.tab && X.tab.el.contains(document.activeElement));
    let $ = Q !== -1 ? Q : l.value;
    const b = [Ne.RIGHT], ne = [Ne.LEFT], q = [Ne.ENTER, Ne.SPACE];
    n.vertical && (b.push(Ne.DOWN), ne.push(Ne.UP)), b.indexOf(A) > -1 ? ($++, $ >= G.length && ($ = 0), E(S), m(s.value.indexOf(G[$]))) : ne.indexOf(A) > -1 && ($--, $ < 0 && ($ = G.length - 1), E(S), m(s.value.indexOf(G[$]))), q.indexOf(A) > -1 && v($);
  }, m = (S) => {
    s.value.forEach(function(x, A) {
      S === A && x.tab && x.tab.focus();
    });
  }, v = (S) => {
    const x = s.value[S];
    !x || x.tab && x.tab.disabled || (s.value.forEach((A, E) => {
      A.tab && (A.tab.selected = S === E), A.panel && (A.panel.selected = S === E);
    }), l.value = S, i.emit("update:modelValue", S));
  };
  Zd("registerTab", (S) => {
    const x = S.index;
    x > -1 && (s.value[x] = { ...s.value[x], tab: S }, s.value = [...s.value], k());
  }), Zd("registerPanel", (S) => {
    const x = S.index;
    x > -1 && (s.value[x] = {
      ...s.value[x],
      panel: S
    }, s.value = [...s.value], k());
  });
  const k = () => {
    s.value.forEach(({ tab: S, panel: x }, A) => {
      if (x && S) {
        const E = S.id || ve("tab"), G = S.controls || ve("panel");
        S.controls = G, S.id = E, x.tab = E, x.id = G;
      }
      A === l.value && (x && (x.selected = !0), S && (S.selected = !0));
    });
  };
  return {
    listeners: {
      click: f,
      keydown: h
    },
    attrs: {
      role: "tablist"
    },
    selected: l,
    pairs: s
  };
}, ri = window.Vue.ref, eN = window.Vue.inject, tN = window.Vue.computed, nN = window.Vue.onMounted, rN = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, aN = (n) => {
  const i = ri(!1), r = ri(), l = ri(n.tab), s = ri(n.id), f = eN("registerPanel");
  nN(() => {
    if (f) {
      const m = r.value, v = m && m.parentElement ? m.parentElement : void 0, N = m ? Array.from(v ? v.children : []).indexOf(m) : -1;
      f({
        selected: i,
        id: s,
        tab: l,
        el: r.value,
        index: N
      });
    }
  });
  const h = tN(() => ({
    role: "tabpanel",
    id: s.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": i.value,
    "aria-labelledby": l.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: i,
    attrs: h,
    panel: r
  };
}, ns = window.Vue.defineComponent, iN = window.Vue.resolveComponent, rs = window.Vue.openBlock, as = window.Vue.createElementBlock, Xr = window.Vue.createElementVNode, fh = window.Vue.mergeProps, wi = window.Vue.renderSlot, oN = window.Vue.createVNode, lN = window.Vue.normalizeStyle, sN = window.Vue.toHandlers, cN = window.Vue.withDirectives, uN = window.Vue.normalizeProps, dN = window.Vue.guardReactiveProps, fN = window.Vue.vShow;
var is = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const hN = xR, pN = ns({
  props: hN,
  setup(n) {
    return BR(n);
  },
  components: {
    FeatherRipple: yn
  }
}), mN = { role: "presentation" }, VN = { class: "tab-text" };
function TN(n, i, r, l, s, f) {
  const h = iN("FeatherRipple");
  return rs(), as("li", mN, [
    Xr("button", fh(n.attrs, {
      class: ["tab hover focus", { disabled: n.disabled, selected: n.selected }]
    }), [
      Xr("span", VN, [
        wi(n.$slots, "default", {}, void 0, !0)
      ]),
      oN(h)
    ], 16)
  ]);
}
var Jd = /* @__PURE__ */ is(pN, [["render", TN], ["__scopeId", "data-v-e6bb52b6"]]);
const vN = KR, UN = qR, wN = ns({
  model: LR,
  emits: UN,
  props: vN,
  setup(n, i) {
    return $R(n, i);
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
      handler(n) {
        n && n.length && this.ro && n.forEach((i) => {
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
        const n = this.$el.getBoundingClientRect(), i = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = i.left - n.left, l = i.height - 2;
        this.width = `${i.width}px`, this.transform = `translateX(${r}px) translateY(${l}px)`;
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
}), RN = { class: "feather-tab-container" }, NN = { class: "tab-panels" };
function MN(n, i, r, l, s, f) {
  return rs(), as("div", RN, [
    Xr("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: lN({
        transform: n.transform,
        "transition-duration": n.duration,
        width: n.width
      })
    }, null, 4),
    Xr("ul", fh(n.attrs, sN(n.listeners)), [
      wi(n.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Xr("div", NN, [
      wi(n.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var gN = /* @__PURE__ */ is(wN, [["render", MN], ["__scopeId", "data-v-27adffb9"]]);
const ZN = rN, JN = ns({
  props: ZN,
  setup(n) {
    return aN(n);
  }
});
function kN(n, i, r, l, s, f) {
  return cN((rs(), as("div", uN(dN(n.attrs)), [
    wi(n.$slots, "default")
  ], 16)), [
    [fN, n.selected]
  ]);
}
var kd = /* @__PURE__ */ is(JN, [["render", kN]]);
function bn(n) {
  if (n === null || n === !0 || n === !1)
    return NaN;
  var i = Number(n);
  return isNaN(i) ? i : i < 0 ? Math.ceil(i) : Math.floor(i);
}
function Se(n, i) {
  if (i.length < n)
    throw new TypeError(n + " argument" + (n > 1 ? "s" : "") + " required, but only " + i.length + " present");
}
function Ce(n) {
  Se(1, arguments);
  var i = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && i === "[object Date]" ? new Date(n.getTime()) : typeof n == "number" || i === "[object Number]" ? new Date(n) : ((typeof n == "string" || i === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function yN(n, i) {
  Se(2, arguments);
  var r = Ce(n).getTime(), l = bn(i);
  return new Date(r + l);
}
var bN = {};
function aa() {
  return bN;
}
function Bl(n) {
  var i = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return i.setUTCFullYear(n.getFullYear()), n.getTime() - i.getTime();
}
function EN(n, i) {
  Se(2, arguments);
  var r = Ce(n), l = Ce(i), s = r.getTime() - l.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function FN(n) {
  return Se(1, arguments), n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function WN(n) {
  if (Se(1, arguments), !FN(n) && typeof n != "number")
    return !1;
  var i = Ce(n);
  return !isNaN(Number(i));
}
function SN(n, i) {
  Se(2, arguments);
  var r = bn(i);
  return yN(n, -r);
}
var AN = 864e5;
function xN(n) {
  Se(1, arguments);
  var i = Ce(n), r = i.getTime();
  i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
  var l = i.getTime(), s = r - l;
  return Math.floor(s / AN) + 1;
}
function Ri(n) {
  Se(1, arguments);
  var i = 1, r = Ce(n), l = r.getUTCDay(), s = (l < i ? 7 : 0) + l - i;
  return r.setUTCDate(r.getUTCDate() - s), r.setUTCHours(0, 0, 0, 0), r;
}
function hh(n) {
  Se(1, arguments);
  var i = Ce(n), r = i.getUTCFullYear(), l = new Date(0);
  l.setUTCFullYear(r + 1, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var s = Ri(l), f = new Date(0);
  f.setUTCFullYear(r, 0, 4), f.setUTCHours(0, 0, 0, 0);
  var h = Ri(f);
  return i.getTime() >= s.getTime() ? r + 1 : i.getTime() >= h.getTime() ? r : r - 1;
}
function BN(n) {
  Se(1, arguments);
  var i = hh(n), r = new Date(0);
  r.setUTCFullYear(i, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var l = Ri(r);
  return l;
}
var CN = 6048e5;
function DN(n) {
  Se(1, arguments);
  var i = Ce(n), r = Ri(i).getTime() - BN(i).getTime();
  return Math.round(r / CN) + 1;
}
function Ni(n, i) {
  var r, l, s, f, h, m, v, N;
  Se(1, arguments);
  var M = aa(), k = bn((r = (l = (s = (f = i == null ? void 0 : i.weekStartsOn) !== null && f !== void 0 ? f : i == null || (h = i.locale) === null || h === void 0 || (m = h.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && s !== void 0 ? s : M.weekStartsOn) !== null && l !== void 0 ? l : (v = M.locale) === null || v === void 0 || (N = v.options) === null || N === void 0 ? void 0 : N.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(k >= 0 && k <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ce(n), C = y.getUTCDay(), S = (C < k ? 7 : 0) + C - k;
  return y.setUTCDate(y.getUTCDate() - S), y.setUTCHours(0, 0, 0, 0), y;
}
function ph(n, i) {
  var r, l, s, f, h, m, v, N;
  Se(1, arguments);
  var M = Ce(n), k = M.getUTCFullYear(), y = aa(), C = bn((r = (l = (s = (f = i == null ? void 0 : i.firstWeekContainsDate) !== null && f !== void 0 ? f : i == null || (h = i.locale) === null || h === void 0 || (m = h.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && s !== void 0 ? s : y.firstWeekContainsDate) !== null && l !== void 0 ? l : (v = y.locale) === null || v === void 0 || (N = v.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(C >= 1 && C <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = new Date(0);
  S.setUTCFullYear(k + 1, 0, C), S.setUTCHours(0, 0, 0, 0);
  var x = Ni(S, i), A = new Date(0);
  A.setUTCFullYear(k, 0, C), A.setUTCHours(0, 0, 0, 0);
  var E = Ni(A, i);
  return M.getTime() >= x.getTime() ? k + 1 : M.getTime() >= E.getTime() ? k : k - 1;
}
function QN(n, i) {
  var r, l, s, f, h, m, v, N;
  Se(1, arguments);
  var M = aa(), k = bn((r = (l = (s = (f = i == null ? void 0 : i.firstWeekContainsDate) !== null && f !== void 0 ? f : i == null || (h = i.locale) === null || h === void 0 || (m = h.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && s !== void 0 ? s : M.firstWeekContainsDate) !== null && l !== void 0 ? l : (v = M.locale) === null || v === void 0 || (N = v.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = ph(n, i), C = new Date(0);
  C.setUTCFullYear(y, 0, k), C.setUTCHours(0, 0, 0, 0);
  var S = Ni(C, i);
  return S;
}
var ON = 6048e5;
function zN(n, i) {
  Se(1, arguments);
  var r = Ce(n), l = Ni(r, i).getTime() - QN(r, i).getTime();
  return Math.round(l / ON) + 1;
}
function ae(n, i) {
  for (var r = n < 0 ? "-" : "", l = Math.abs(n).toString(); l.length < i; )
    l = "0" + l;
  return r + l;
}
var GN = {
  y: function(n, i) {
    var r = n.getUTCFullYear(), l = r > 0 ? r : 1 - r;
    return ae(i === "yy" ? l % 100 : l, i.length);
  },
  M: function(n, i) {
    var r = n.getUTCMonth();
    return i === "M" ? String(r + 1) : ae(r + 1, 2);
  },
  d: function(n, i) {
    return ae(n.getUTCDate(), i.length);
  },
  a: function(n, i) {
    var r = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
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
  h: function(n, i) {
    return ae(n.getUTCHours() % 12 || 12, i.length);
  },
  H: function(n, i) {
    return ae(n.getUTCHours(), i.length);
  },
  m: function(n, i) {
    return ae(n.getUTCMinutes(), i.length);
  },
  s: function(n, i) {
    return ae(n.getUTCSeconds(), i.length);
  },
  S: function(n, i) {
    var r = i.length, l = n.getUTCMilliseconds(), s = Math.floor(l * Math.pow(10, r - 3));
    return ae(s, i.length);
  }
};
const tn = GN;
var Ln = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, YN = {
  G: function(n, i, r) {
    var l = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (i) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(l, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(l, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(l, {
          width: "wide"
        });
    }
  },
  y: function(n, i, r) {
    if (i === "yo") {
      var l = n.getUTCFullYear(), s = l > 0 ? l : 1 - l;
      return r.ordinalNumber(s, {
        unit: "year"
      });
    }
    return tn.y(n, i);
  },
  Y: function(n, i, r, l) {
    var s = ph(n, l), f = s > 0 ? s : 1 - s;
    if (i === "YY") {
      var h = f % 100;
      return ae(h, 2);
    }
    return i === "Yo" ? r.ordinalNumber(f, {
      unit: "year"
    }) : ae(f, i.length);
  },
  R: function(n, i) {
    var r = hh(n);
    return ae(r, i.length);
  },
  u: function(n, i) {
    var r = n.getUTCFullYear();
    return ae(r, i.length);
  },
  Q: function(n, i, r) {
    var l = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (i) {
      case "Q":
        return String(l);
      case "QQ":
        return ae(l, 2);
      case "Qo":
        return r.ordinalNumber(l, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(l, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(n, i, r) {
    var l = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (i) {
      case "q":
        return String(l);
      case "qq":
        return ae(l, 2);
      case "qo":
        return r.ordinalNumber(l, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(l, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(n, i, r) {
    var l = n.getUTCMonth();
    switch (i) {
      case "M":
      case "MM":
        return tn.M(n, i);
      case "Mo":
        return r.ordinalNumber(l + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(l, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(n, i, r) {
    var l = n.getUTCMonth();
    switch (i) {
      case "L":
        return String(l + 1);
      case "LL":
        return ae(l + 1, 2);
      case "Lo":
        return r.ordinalNumber(l + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(l, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(n, i, r, l) {
    var s = zN(n, l);
    return i === "wo" ? r.ordinalNumber(s, {
      unit: "week"
    }) : ae(s, i.length);
  },
  I: function(n, i, r) {
    var l = DN(n);
    return i === "Io" ? r.ordinalNumber(l, {
      unit: "week"
    }) : ae(l, i.length);
  },
  d: function(n, i, r) {
    return i === "do" ? r.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : tn.d(n, i);
  },
  D: function(n, i, r) {
    var l = xN(n);
    return i === "Do" ? r.ordinalNumber(l, {
      unit: "dayOfYear"
    }) : ae(l, i.length);
  },
  E: function(n, i, r) {
    var l = n.getUTCDay();
    switch (i) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(l, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(n, i, r, l) {
    var s = n.getUTCDay(), f = (s - l.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "e":
        return String(f);
      case "ee":
        return ae(f, 2);
      case "eo":
        return r.ordinalNumber(f, {
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
  c: function(n, i, r, l) {
    var s = n.getUTCDay(), f = (s - l.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "c":
        return String(f);
      case "cc":
        return ae(f, i.length);
      case "co":
        return r.ordinalNumber(f, {
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
  i: function(n, i, r) {
    var l = n.getUTCDay(), s = l === 0 ? 7 : l;
    switch (i) {
      case "i":
        return String(s);
      case "ii":
        return ae(s, i.length);
      case "io":
        return r.ordinalNumber(s, {
          unit: "day"
        });
      case "iii":
        return r.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(l, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(n, i, r) {
    var l = n.getUTCHours(), s = l / 12 >= 1 ? "pm" : "am";
    switch (i) {
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
  b: function(n, i, r) {
    var l = n.getUTCHours(), s;
    switch (l === 12 ? s = Ln.noon : l === 0 ? s = Ln.midnight : s = l / 12 >= 1 ? "pm" : "am", i) {
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
  B: function(n, i, r) {
    var l = n.getUTCHours(), s;
    switch (l >= 17 ? s = Ln.evening : l >= 12 ? s = Ln.afternoon : l >= 4 ? s = Ln.morning : s = Ln.night, i) {
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
  h: function(n, i, r) {
    if (i === "ho") {
      var l = n.getUTCHours() % 12;
      return l === 0 && (l = 12), r.ordinalNumber(l, {
        unit: "hour"
      });
    }
    return tn.h(n, i);
  },
  H: function(n, i, r) {
    return i === "Ho" ? r.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : tn.H(n, i);
  },
  K: function(n, i, r) {
    var l = n.getUTCHours() % 12;
    return i === "Ko" ? r.ordinalNumber(l, {
      unit: "hour"
    }) : ae(l, i.length);
  },
  k: function(n, i, r) {
    var l = n.getUTCHours();
    return l === 0 && (l = 24), i === "ko" ? r.ordinalNumber(l, {
      unit: "hour"
    }) : ae(l, i.length);
  },
  m: function(n, i, r) {
    return i === "mo" ? r.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : tn.m(n, i);
  },
  s: function(n, i, r) {
    return i === "so" ? r.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : tn.s(n, i);
  },
  S: function(n, i) {
    return tn.S(n, i);
  },
  X: function(n, i, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    if (f === 0)
      return "Z";
    switch (i) {
      case "X":
        return bd(f);
      case "XXXX":
      case "XX":
        return gn(f);
      case "XXXXX":
      case "XXX":
      default:
        return gn(f, ":");
    }
  },
  x: function(n, i, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (i) {
      case "x":
        return bd(f);
      case "xxxx":
      case "xx":
        return gn(f);
      case "xxxxx":
      case "xxx":
      default:
        return gn(f, ":");
    }
  },
  O: function(n, i, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (i) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + yd(f, ":");
      case "OOOO":
      default:
        return "GMT" + gn(f, ":");
    }
  },
  z: function(n, i, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (i) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + yd(f, ":");
      case "zzzz":
      default:
        return "GMT" + gn(f, ":");
    }
  },
  t: function(n, i, r, l) {
    var s = l._originalDate || n, f = Math.floor(s.getTime() / 1e3);
    return ae(f, i.length);
  },
  T: function(n, i, r, l) {
    var s = l._originalDate || n, f = s.getTime();
    return ae(f, i.length);
  }
};
function yd(n, i) {
  var r = n > 0 ? "-" : "+", l = Math.abs(n), s = Math.floor(l / 60), f = l % 60;
  if (f === 0)
    return r + String(s);
  var h = i || "";
  return r + String(s) + h + ae(f, 2);
}
function bd(n, i) {
  if (n % 60 === 0) {
    var r = n > 0 ? "-" : "+";
    return r + ae(Math.abs(n) / 60, 2);
  }
  return gn(n, i);
}
function gn(n, i) {
  var r = i || "", l = n > 0 ? "-" : "+", s = Math.abs(n), f = ae(Math.floor(s / 60), 2), h = ae(s % 60, 2);
  return l + f + r + h;
}
const IN = YN;
var Ed = function(n, i) {
  switch (n) {
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
}, mh = function(n, i) {
  switch (n) {
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
}, HN = function(n, i) {
  var r = n.match(/(P+)(p+)?/) || [], l = r[1], s = r[2];
  if (!s)
    return Ed(n, i);
  var f;
  switch (l) {
    case "P":
      f = i.dateTime({
        width: "short"
      });
      break;
    case "PP":
      f = i.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      f = i.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      f = i.dateTime({
        width: "full"
      });
      break;
  }
  return f.replace("{{date}}", Ed(l, i)).replace("{{time}}", mh(s, i));
}, PN = {
  p: mh,
  P: HN
};
const jN = PN;
var XN = ["D", "DD"], _N = ["YY", "YYYY"];
function LN(n) {
  return XN.indexOf(n) !== -1;
}
function qN(n) {
  return _N.indexOf(n) !== -1;
}
function Fd(n, i, r) {
  if (n === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(i, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(i, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(i, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(i, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var KN = {
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
}, $N = function(n, i, r) {
  var l, s = KN[n];
  return typeof s == "string" ? l = s : i === 1 ? l = s.one : l = s.other.replace("{{count}}", i.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + l : l + " ago" : l;
};
const eM = $N;
function wl(n) {
  return function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = i.width ? String(i.width) : n.defaultWidth, l = n.formats[r] || n.formats[n.defaultWidth];
    return l;
  };
}
var tM = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, nM = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, rM = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, aM = {
  date: wl({
    formats: tM,
    defaultWidth: "full"
  }),
  time: wl({
    formats: nM,
    defaultWidth: "full"
  }),
  dateTime: wl({
    formats: rM,
    defaultWidth: "full"
  })
};
const iM = aM;
var oM = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, lM = function(n, i, r, l) {
  return oM[n];
};
const sM = lM;
function xr(n) {
  return function(i, r) {
    var l = r != null && r.context ? String(r.context) : "standalone", s;
    if (l === "formatting" && n.formattingValues) {
      var f = n.defaultFormattingWidth || n.defaultWidth, h = r != null && r.width ? String(r.width) : f;
      s = n.formattingValues[h] || n.formattingValues[f];
    } else {
      var m = n.defaultWidth, v = r != null && r.width ? String(r.width) : n.defaultWidth;
      s = n.values[v] || n.values[m];
    }
    var N = n.argumentCallback ? n.argumentCallback(i) : i;
    return s[N];
  };
}
var cM = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, uM = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, dM = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, fM = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, hM = {
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
}, pM = {
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
}, mM = function(n, i) {
  var r = Number(n), l = r % 100;
  if (l > 20 || l < 10)
    switch (l % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, VM = {
  ordinalNumber: mM,
  era: xr({
    values: cM,
    defaultWidth: "wide"
  }),
  quarter: xr({
    values: uM,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: xr({
    values: dM,
    defaultWidth: "wide"
  }),
  day: xr({
    values: fM,
    defaultWidth: "wide"
  }),
  dayPeriod: xr({
    values: hM,
    defaultWidth: "wide",
    formattingValues: pM,
    defaultFormattingWidth: "wide"
  })
};
const TM = VM;
function Br(n) {
  return function(i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = r.width, s = l && n.matchPatterns[l] || n.matchPatterns[n.defaultMatchWidth], f = i.match(s);
    if (!f)
      return null;
    var h = f[0], m = l && n.parsePatterns[l] || n.parsePatterns[n.defaultParseWidth], v = Array.isArray(m) ? UM(m, function(k) {
      return k.test(h);
    }) : vM(m, function(k) {
      return k.test(h);
    }), N;
    N = n.valueCallback ? n.valueCallback(v) : v, N = r.valueCallback ? r.valueCallback(N) : N;
    var M = i.slice(h.length);
    return {
      value: N,
      rest: M
    };
  };
}
function vM(n, i) {
  for (var r in n)
    if (n.hasOwnProperty(r) && i(n[r]))
      return r;
}
function UM(n, i) {
  for (var r = 0; r < n.length; r++)
    if (i(n[r]))
      return r;
}
function wM(n) {
  return function(i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = i.match(n.matchPattern);
    if (!l)
      return null;
    var s = l[0], f = i.match(n.parsePattern);
    if (!f)
      return null;
    var h = n.valueCallback ? n.valueCallback(f[0]) : f[0];
    h = r.valueCallback ? r.valueCallback(h) : h;
    var m = i.slice(s.length);
    return {
      value: h,
      rest: m
    };
  };
}
var RM = /^(\d+)(th|st|nd|rd)?/i, NM = /\d+/i, MM = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, gM = {
  any: [/^b/i, /^(a|c)/i]
}, ZM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, JM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, yM = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, bM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, EM = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, FM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, WM = {
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
}, SM = {
  ordinalNumber: wM({
    matchPattern: RM,
    parsePattern: NM,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: Br({
    matchPatterns: MM,
    defaultMatchWidth: "wide",
    parsePatterns: gM,
    defaultParseWidth: "any"
  }),
  quarter: Br({
    matchPatterns: ZM,
    defaultMatchWidth: "wide",
    parsePatterns: JM,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: Br({
    matchPatterns: kM,
    defaultMatchWidth: "wide",
    parsePatterns: yM,
    defaultParseWidth: "any"
  }),
  day: Br({
    matchPatterns: bM,
    defaultMatchWidth: "wide",
    parsePatterns: EM,
    defaultParseWidth: "any"
  }),
  dayPeriod: Br({
    matchPatterns: FM,
    defaultMatchWidth: "any",
    parsePatterns: WM,
    defaultParseWidth: "any"
  })
};
const AM = SM;
var xM = {
  code: "en-US",
  formatDistance: eM,
  formatLong: iM,
  formatRelative: sM,
  localize: TM,
  match: AM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Vh = xM;
var BM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, CM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, DM = /^'([^]*?)'?$/, QM = /''/g, OM = /[a-zA-Z]/;
function kn(n, i, r) {
  var l, s, f, h, m, v, N, M, k, y, C, S, x, A, E, G, Q, $;
  Se(2, arguments);
  var b = String(i), ne = aa(), q = (l = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : ne.locale) !== null && l !== void 0 ? l : Vh, X = bn((f = (h = (m = (v = r == null ? void 0 : r.firstWeekContainsDate) !== null && v !== void 0 ? v : r == null || (N = r.locale) === null || N === void 0 || (M = N.options) === null || M === void 0 ? void 0 : M.firstWeekContainsDate) !== null && m !== void 0 ? m : ne.firstWeekContainsDate) !== null && h !== void 0 ? h : (k = ne.locale) === null || k === void 0 || (y = k.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && f !== void 0 ? f : 1);
  if (!(X >= 1 && X <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Ae = bn((C = (S = (x = (A = r == null ? void 0 : r.weekStartsOn) !== null && A !== void 0 ? A : r == null || (E = r.locale) === null || E === void 0 || (G = E.options) === null || G === void 0 ? void 0 : G.weekStartsOn) !== null && x !== void 0 ? x : ne.weekStartsOn) !== null && S !== void 0 ? S : (Q = ne.locale) === null || Q === void 0 || ($ = Q.options) === null || $ === void 0 ? void 0 : $.weekStartsOn) !== null && C !== void 0 ? C : 0);
  if (!(Ae >= 0 && Ae <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!q.localize)
    throw new RangeError("locale must contain localize property");
  if (!q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Ye = Ce(n);
  if (!WN(Ye))
    throw new RangeError("Invalid time value");
  var de = Bl(Ye), fe = SN(Ye, de), pe = {
    firstWeekContainsDate: X,
    weekStartsOn: Ae,
    locale: q,
    _originalDate: Ye
  }, Ue = b.match(CM).map(function(ie) {
    var ke = ie[0];
    if (ke === "p" || ke === "P") {
      var ye = jN[ke];
      return ye(ie, q.formatLong);
    }
    return ie;
  }).join("").match(BM).map(function(ie) {
    if (ie === "''")
      return "'";
    var ke = ie[0];
    if (ke === "'")
      return zM(ie);
    var ye = IN[ke];
    if (ye)
      return !(r != null && r.useAdditionalWeekYearTokens) && qN(ie) && Fd(ie, i, String(n)), !(r != null && r.useAdditionalDayOfYearTokens) && LN(ie) && Fd(ie, i, String(n)), ye(fe, ie, q.localize, pe);
    if (ke.match(OM))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + ke + "`");
    return ie;
  }).join("");
  return Ue;
}
function zM(n) {
  var i = n.match(DM);
  return i ? i[1].replace(QM, "'") : n;
}
function Th(n, i) {
  if (n == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in i)
    Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  return n;
}
function GM(n) {
  return Th({}, n);
}
var Wd = 1e3 * 60, Mi = 60 * 24, Sd = Mi * 30, Ad = Mi * 365;
function YM(n, i, r) {
  var l, s, f;
  Se(2, arguments);
  var h = aa(), m = (l = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : h.locale) !== null && l !== void 0 ? l : Vh;
  if (!m.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var v = EN(n, i);
  if (isNaN(v))
    throw new RangeError("Invalid time value");
  var N = Th(GM(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: v
  }), M, k;
  v > 0 ? (M = Ce(i), k = Ce(n)) : (M = Ce(n), k = Ce(i));
  var y = String((f = r == null ? void 0 : r.roundingMethod) !== null && f !== void 0 ? f : "round"), C;
  if (y === "floor")
    C = Math.floor;
  else if (y === "ceil")
    C = Math.ceil;
  else if (y === "round")
    C = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var S = k.getTime() - M.getTime(), x = S / Wd, A = Bl(k) - Bl(M), E = (S - A) / Wd, G = r == null ? void 0 : r.unit, Q;
  if (G ? Q = String(G) : x < 1 ? Q = "second" : x < 60 ? Q = "minute" : x < Mi ? Q = "hour" : E < Sd ? Q = "day" : E < Ad ? Q = "month" : Q = "year", Q === "second") {
    var $ = C(S / 1e3);
    return m.formatDistance("xSeconds", $, N);
  } else if (Q === "minute") {
    var b = C(x);
    return m.formatDistance("xMinutes", b, N);
  } else if (Q === "hour") {
    var ne = C(x / 60);
    return m.formatDistance("xHours", ne, N);
  } else if (Q === "day") {
    var q = C(E / Mi);
    return m.formatDistance("xDays", q, N);
  } else if (Q === "month") {
    var X = C(E / Sd);
    return X === 12 && G !== "month" ? m.formatDistance("xYears", 1, N) : m.formatDistance("xMonths", X, N);
  } else if (Q === "year") {
    var Ae = C(E / Ad);
    return m.formatDistance("xYears", Ae, N);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const IM = window.Vue.defineComponent, xd = window.Vue.toDisplayString, Bd = window.Vue.createElementVNode, HM = window.Vue.unref, PM = window.Vue.openBlock, jM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const XM = { class: "box" }, _M = { class: "label" }, LM = { class: "date" }, qM = /* @__PURE__ */ IM({
  __name: "DateBox",
  props: {
    label: null,
    date: null
  },
  setup(n) {
    const i = n;
    return (r, l) => (PM(), jM("div", XM, [
      Bd("div", _M, xd(i.label), 1),
      Bd("div", LM, xd(HM(kn)(new Date(i.date), "d/M HH:mm:ss")), 1)
    ]));
  }
});
const Cd = /* @__PURE__ */ _e(qM, [["__scopeId", "data-v-94bf126e"]]);
var KM = Object.defineProperty, Dd = Object.getOwnPropertySymbols, $M = Object.prototype.hasOwnProperty, eg = Object.prototype.propertyIsEnumerable, Qd = (n, i, r) => i in n ? KM(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Od = (n, i) => {
  for (var r in i || (i = {}))
    $M.call(i, r) && Qd(n, r, i[r]);
  if (Dd)
    for (var r of Dd(i))
      eg.call(i, r) && Qd(n, r, i[r]);
  return n;
};
const tg = window.Vue.defineComponent, ng = window.Vue.toRaw, Rl = window.Vue.h;
var rg = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const ag = {
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
}, ig = tg({
  props: ag,
  render() {
    const n = this.$attrs, i = n.class ? n.class.split(" ").reduce((s, f) => (s[f] = !0, s), {}) : {}, r = {};
    i["feather-icon"] = !0, this.flex && (i["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let l = ng(this.icon);
    return this.$slots.default ? Rl("span", { class: "feather-icon-container" }, [
      Rl(this.$slots.default()[0], Od({
        class: i
      }, r))
    ]) : Rl(l, Od({
      class: i
    }, r));
  }
});
var at = /* @__PURE__ */ rg(ig, [["__scopeId", "data-v-52cbf270"]]);
const og = window.Vue.openBlock, lg = window.Vue.createElementBlock, sg = window.Vue.createElementVNode;
var cg = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const ug = {}, dg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fg = /* @__PURE__ */ sg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), hg = [
  fg
];
function pg(n, i) {
  return og(), lg("svg", dg, hg);
}
var mg = /* @__PURE__ */ cg(ug, [["render", pg]]);
const Vg = window.Vue.openBlock, Tg = window.Vue.createElementBlock, vg = window.Vue.createElementVNode;
var Ug = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const wg = {}, Rg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ng = /* @__PURE__ */ vg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Mg = [
  Ng
];
function gg(n, i) {
  return Vg(), Tg("svg", Rg, Mg);
}
var Zg = /* @__PURE__ */ Ug(wg, [["render", gg]]);
const nr = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance"
}, Jg = "/alec", kg = "/alec/engine/configuration", vh = "/alec/agreement/configuration", Uh = async (n) => {
  try {
    return (await ra.post(`${vh}`, {
      agreed: n
    })).status === 201;
  } catch {
    return !1;
  }
}, yg = async () => {
  try {
    const n = await ra.get(`${vh}`);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, bg = async (n, i) => {
  try {
    return (await ra.post(kg, {
      distanceMeasureName: i ? nr.HELLINGER_OPTION : nr.SPACE_DISTANCE_OPTION,
      engineName: n,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, Eg = async (n, i) => {
  try {
    return (await ra.post(`${Jg}/situation/${i}/${n}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
};
const Fg = window.Vue.computed, Wg = (n, i) => {
  const r = {};
  return Object.keys(i).forEach((l) => {
    r[`${l}Label`] = Fg(() => n.value[l] ? n.value[l] : i[l]);
  }), r;
}, Sg = window.Vue.openBlock, Ag = window.Vue.createElementBlock, xg = window.Vue.createElementVNode;
var Bg = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const Cg = {}, Dg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Qg = /* @__PURE__ */ xg("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Og = [
  Qg
];
function zg(n, i) {
  return Sg(), Ag("svg", Dg, Og);
}
var wh = /* @__PURE__ */ Bg(Cg, [["render", zg]]);
const zd = window.Vue.computed, Gg = (n, i, r) => {
  const l = zd(() => i.value.filter((f) => !f.disabled)), s = zd(() => n.value ? l.value.indexOf(n.value) : -1);
  return {
    selectPrevious() {
      n.value && n.value.disabled || (s.value === 0 ? r(l.value[l.value.length - 1]) : r(l.value[s.value - 1]));
    },
    selectNext() {
      n.value && n.value.disabled || (s.value === l.value.length - 1 ? r(l.value[0]) : r(l.value[s.value + 1]));
    }
  };
};
const Yg = window.Vue.openBlock, Ig = window.Vue.createElementBlock, os = window.Vue.createElementVNode;
var Hg = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const Pg = {}, jg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Xg = /* @__PURE__ */ os("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), _g = /* @__PURE__ */ os("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Lg = /* @__PURE__ */ os("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), qg = [
  Xg,
  _g,
  Lg
];
function Kg(n, i) {
  return Yg(), Ig("svg", jg, qg);
}
var $g = /* @__PURE__ */ Hg(Pg, [["render", Kg]]), eZ = Object.defineProperty, tZ = Object.defineProperties, nZ = Object.getOwnPropertyDescriptors, Gd = Object.getOwnPropertySymbols, rZ = Object.prototype.hasOwnProperty, aZ = Object.prototype.propertyIsEnumerable, Yd = (n, i, r) => i in n ? eZ(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Rh = (n, i) => {
  for (var r in i || (i = {}))
    rZ.call(i, r) && Yd(n, r, i[r]);
  if (Gd)
    for (var r of Gd(i))
      aZ.call(i, r) && Yd(n, r, i[r]);
  return n;
}, Nh = (n, i) => tZ(n, nZ(i));
const ur = window.Vue.defineComponent, $r = window.Vue.resolveComponent, bt = window.Vue.openBlock, rr = window.Vue.createElementBlock, iZ = window.Vue.createVNode, gi = window.Vue.createBlock, oZ = window.Vue.withModifiers, sr = window.Vue.inject, ea = window.Vue.computed, lZ = window.Vue.normalizeClass, qn = window.Vue.createElementVNode, Zi = window.Vue.toDisplayString, di = window.Vue.renderSlot, _r = window.Vue.createCommentVNode, sZ = window.Vue.withDirectives, cZ = window.Vue.vShow, Cl = window.Vue.ref, Id = window.Vue.toRef, Hd = window.Vue.nextTick, Dl = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ls = window.Vue.provide, Pd = window.Vue.isRef, uZ = window.Vue.onBeforeUnmount;
var ia = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const dZ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, fZ = ur({
  props: dZ,
  components: {
    FeatherIcon: at
  }
}), hZ = ["title"];
function pZ(n, i, r, l, s, f) {
  const h = $r("FeatherIcon");
  return bt(), rr("a", {
    title: n.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    iZ(h, { icon: n.icon }, null, 8, ["icon"])
  ], 8, hZ);
}
var mZ = /* @__PURE__ */ ia(fZ, [["render", pZ], ["__scopeId", "data-v-4265058e"]]);
const VZ = ur({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return wh;
    }
  },
  components: {
    ActionIcon: mZ
  }
});
function TZ(n, i, r, l, s, f) {
  const h = $r("ActionIcon");
  return bt(), gi(h, {
    onClick: i[0] || (i[0] = oZ((m) => n.$emit("clear"), ["stop", "prevent"])),
    title: n.clear,
    icon: n.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var vZ = /* @__PURE__ */ ia(VZ, [["render", TZ]]);
const UZ = ur({
  computed: {
    errorIcon() {
      return $g;
    }
  },
  components: {
    FeatherIcon: at
  }
});
function wZ(n, i, r, l, s, f) {
  const h = $r("FeatherIcon");
  return bt(), gi(h, {
    icon: n.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var RZ = /* @__PURE__ */ ia(UZ, [["render", wZ], ["__scopeId", "data-v-0b8faef3"]]);
const NZ = {
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
}, MZ = {
  clear: () => !0,
  "wrapper-click": (n) => !0
}, gZ = ur({
  emits: MZ,
  props: NZ,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const n = sr("wrapperOptions", {}), i = sr("validationErrorMessage", !1), r = ea(() => n.error ? n.error : i && i.value ? i.value : !1);
    return Nh(Rh({}, n), { error: r });
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
      const n = [];
      return this.hideLabel && n.push("hide-label"), this.raised && n.push("raised"), this.focused && n.push("focused"), this.error && n.push("error"), this.background && n.push("background"), this.disabled && n.push("disabled"), this.inline && n.push("inline"), this.hasPre && n.push("has-prefix"), n;
    }
  },
  methods: {
    handleWrapperClick(n) {
      this.disabled || this.$emit("wrapper-click", n);
    }
  },
  mounted() {
    const n = this.$el.querySelector(".prefix");
    if (n) {
      const i = { childList: !0, subtree: !0 }, r = () => {
        const l = this.$el.querySelector(".prefix");
        this.prefixWidth = l ? l.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(n, i), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: vZ,
    ErrorIcon: RZ
  }
}), ZZ = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, JZ = ["for"], kZ = { class: "prefix" }, yZ = { class: "post" };
function bZ(n, i, r, l, s, f) {
  const h = $r("ClearIcon"), m = $r("ErrorIcon");
  return bt(), rr("div", {
    class: lZ(["feather-input-wrapper-container", n.containerCls])
  }, [
    qn("fieldset", ZZ, [
      qn("legend", null, Zi(n.label), 1)
    ]),
    qn("label", {
      class: "feather-input-label",
      for: n.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Zi(n.label), 9, JZ),
    qn("div", {
      class: "feather-input-wrapper",
      onClick: i[1] || (i[1] = (...v) => n.handleWrapperClick && n.handleWrapperClick(...v))
    }, [
      qn("div", kZ, [
        di(n.$slots, "pre", {}, void 0, !0)
      ]),
      di(n.$slots, "default", {}, void 0, !0),
      qn("div", yZ, [
        n.showClear && n.computedClearText ? (bt(), gi(h, {
          key: 0,
          clear: n.computedClearText,
          onClear: i[0] || (i[0] = (v) => n.$emit("clear"))
        }, null, 8, ["clear"])) : _r("", !0),
        n.error ? (bt(), gi(m, { key: 1 })) : _r("", !0),
        di(n.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var EZ = /* @__PURE__ */ ia(gZ, [["render", bZ], ["__scopeId", "data-v-4db296db"]]);
const FZ = ur({
  setup() {
    const n = sr("subTextOptions", {}), i = sr("validationErrorMessage", !1), r = ea(() => n.error ? n.error : i && i.value ? i.value : "");
    return Nh(Rh({}, n), { error: r });
  }
}), WZ = { class: "feather-input-sub-text" }, SZ = {
  key: 0,
  class: "feather-input-spacer"
}, AZ = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, xZ = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function BZ(n, i, r, l, s, f) {
  return sZ((bt(), rr("div", WZ, [
    !n.hint && !n.error.length ? (bt(), rr("div", SZ, "\xA0")) : _r("", !0),
    n.hint && !n.error.length ? (bt(), rr("div", AZ, Zi(n.hint), 1)) : _r("", !0),
    n.error.length > 0 ? (bt(), rr("div", xZ, Zi(n.error), 1)) : _r("", !0),
    di(n.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [cZ, !n.inline || n.hint || n.error.length]
  ]);
}
var ss = /* @__PURE__ */ ia(FZ, [["render", BZ], ["__scopeId", "data-v-8e0ac99e"]]);
const CZ = {
  headingText: {
    type: Function,
    default: (n) => n.length && n.length === 1 ? "1 error" : `${n.length} errors`
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
ur({
  props: CZ,
  setup(n) {
    const i = sr("featherFormErrors", Cl([])), r = Id(n, "errorList"), l = ea(() => {
      var M;
      return (M = r.value) != null && M.length ? r.value : i.value;
    }), s = Id(n, "generalError"), f = (M) => {
      document.getElementById(M).focus();
    }, h = (M) => M.replace(/ \*$/, ""), m = Cl(), v = (M) => `${h(M.label)} - ${M.message}`, N = ea(() => (l.value.length && Hd(() => m.value.focus()), n.headingText(l.value)));
    return Dl(s, (M) => {
      M.length && Hd(() => m.value.focus());
    }), {
      errors: l,
      errorsHeading: N,
      heading: m,
      focusElement: f,
      mainError: s,
      getFullMessage: v
    };
  }
});
const cs = (n, i, r, l, s) => {
  const f = sr("featherForm", !1);
  if (l && f && n.value) {
    const h = Cl("");
    ls("validationErrorMessage", h);
    const m = () => {
      if (s && Pd(s) && s.value)
        return h.value = s.value, {
          success: !1,
          message: s.value,
          inputId: n.value,
          label: r
        };
      try {
        return l.validateSync(i.value), h.value = "", { success: !0 };
      } catch (M) {
        const k = M;
        return h.value = k.errors[0], {
          success: !1,
          message: k.errors[0],
          inputId: n.value,
          label: r
        };
      }
    }, N = {
      clear: () => {
        h.value = "";
      },
      validate: m
    };
    return s && Pd(s) && Dl(s, () => {
      f.runValidation();
    }), Dl(n, (M, k) => {
      M && f && f.register(M, N), k && f && f.deregister(k);
    }, { immediate: !0 }), uZ(() => {
      f.deregister(n.value, !0);
    }), { validate: m };
  }
  return { validate: () => !0 };
}, us = (n) => ({
  inherittedAttrs: ea(() => ({
    class: n.class,
    "data-ref-id": n["data-ref-id"]
  }))
}), ds = {
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
}, fs = (n) => {
  ls("subTextOptions", n);
}, DZ = {
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
}, QZ = (n) => {
  ls("wrapperOptions", n);
}, ai = window.Vue.ref, OZ = window.Vue.watch, zZ = window.Vue.watchEffect, jd = window.Vue.computed, Nl = window.Vue.provide, Mh = (n, i, r, l, s) => {
  const f = ai([]), h = ai(), m = ai(), v = ai();
  zZ(() => {
    if (!f.value.length)
      return;
    const E = f.value.map((G) => G.value);
    if (n.value !== void 0 && n.value !== null && (h.value = f.value[E.indexOf(n.value)]), !h.value && f.value.length) {
      let G = f.value.filter((Q) => !Q.disabled);
      G = G.length ? G : f.value, m.value = G[0], m.value.first = !0;
    }
  }), OZ(h, (E, G) => {
    G && (G.checked = !1), E && (E.checked = !0);
  });
  const N = (E) => {
    E && E.disabled || (m.value && (m.value.first = !1), h.value !== E && (i("update:modelValue", E.value), h.value = E, E.focus()));
  }, M = jd(() => h.value || m.value), k = Gg(M, f, N), y = jd(() => ve("feather-radio-group"));
  v.value = y.value;
  const { validate: C } = cs(v, n, r, l, s);
  return Nl("register", (E) => {
    f.value = [...f.value, E], v.value === y.value && (v.value = E.id);
  }), Nl("select", N), Nl("blur", (E) => {
    i("blur", E);
  }), {
    keydown: (E) => {
      switch (E.keyCode) {
        case 13:
        case 32:
          h.value ? N(h.value) : m.value && N(m.value);
          break;
        case 40:
        case 39:
          k.selectNext();
          break;
        case 37:
        case 38:
          k.selectPrevious();
          break;
      }
    },
    ...k,
    focus: () => {
      h.value && h.value.focus();
    },
    validate: C,
    firstElementId: v,
    groupId: y
  };
};
var GZ = Object.defineProperty, YZ = Object.defineProperties, IZ = Object.getOwnPropertyDescriptors, Xd = Object.getOwnPropertySymbols, HZ = Object.prototype.hasOwnProperty, PZ = Object.prototype.propertyIsEnumerable, _d = (n, i, r) => i in n ? GZ(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, ir = (n, i) => {
  for (var r in i || (i = {}))
    HZ.call(i, r) && _d(n, r, i[r]);
  if (Xd)
    for (var r of Xd(i))
      PZ.call(i, r) && _d(n, r, i[r]);
  return n;
}, gh = (n, i) => YZ(n, IZ(i));
const cn = window.Vue.defineComponent, Lr = window.Vue.inject, Ji = window.Vue.computed, qr = window.Vue.ref, Vt = window.Vue.resolveComponent, it = window.Vue.openBlock, oa = window.Vue.createElementBlock, Zh = window.Vue.normalizeClass, Et = window.Vue.renderSlot, ln = window.Vue.createBlock, ta = window.Vue.createCommentVNode, ki = window.Vue.createElementVNode, jZ = window.Vue.withModifiers, Ai = window.Vue.createVNode, Jh = window.Vue.toRef, Ql = window.Vue.mergeProps, Ht = window.Vue.withCtx, XZ = window.Vue.h, _Z = window.Vue.provide;
var un = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const LZ = {
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
}, qZ = cn({
  props: LZ,
  setup(n) {
    const i = Lr("isCondensed", null), r = Ji(() => i || n.condensed), l = qr(!1);
    return {
      focused: l,
      handleFocus: () => {
        l.value = !0;
      },
      handleBlur: () => {
        l.value = !1;
      },
      isCondensed: r
    };
  },
  components: {
    FeatherRipple: yn
  }
}), KZ = ["aria-disabled"];
function $Z(n, i, r, l, s, f) {
  const h = Vt("FeatherRipple");
  return it(), oa("div", {
    class: Zh(["chip", {
      condensed: n.isCondensed,
      disabled: n.disabled,
      focused: n.focused
    }]),
    onFocusin: i[0] || (i[0] = (m) => n.clickable ? n.handleFocus : null),
    onFocusout: i[1] || (i[1] = (m) => n.clickable ? n.handleBlur : null),
    "aria-disabled": n.disabled
  }, [
    Et(n.$slots, "default", {}, void 0, !0),
    n.clickable ? (it(), ln(h, { key: 0 })) : ta("", !0)
  ], 42, KZ);
}
var hs = /* @__PURE__ */ un(qZ, [["render", $Z], ["__scopeId", "data-v-44d413dc"]]);
const eJ = {
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
}, tJ = cn({
  emits: ["delete"],
  props: eJ,
  setup(n, i) {
    return {
      handleDelete: () => {
        n.disabled || i.emit("delete");
      },
      icon: wh
    };
  },
  components: {
    FeatherIcon: at
  }
}), nJ = { class: "chip-delete" }, rJ = ["aria-label", "aria-describedby"];
function aJ(n, i, r, l, s, f) {
  const h = Vt("FeatherIcon");
  return it(), oa("span", nJ, [
    ki("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: i[0] || (i[0] = jZ((...m) => n.handleDelete && n.handleDelete(...m), ["stop", "prevent"])),
      "aria-label": n.label,
      "aria-describedby": n.textId
    }, [
      Ai(h, {
        icon: n.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, rJ)
  ]);
}
var iJ = /* @__PURE__ */ un(tJ, [["render", aJ], ["__scopeId", "data-v-4bae6cb4"]]);
const oJ = cn({
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
}), lJ = ["title"];
function sJ(n, i, r, l, s, f) {
  return it(), oa("span", {
    class: "label",
    title: n.titleText,
    ref: "container"
  }, [
    Et(n.$slots, "default", {}, void 0, !0)
  ], 8, lJ);
}
var ps = /* @__PURE__ */ un(oJ, [["render", sJ], ["__scopeId", "data-v-1a0445b2"]]);
const cJ = {}, uJ = {
  class: "chip-icon",
  role: "presentation"
};
function dJ(n, i) {
  return it(), oa("span", uJ, [
    Et(n.$slots, "default", {}, void 0, !0)
  ]);
}
var ms = /* @__PURE__ */ un(cJ, [["render", dJ], ["__scopeId", "data-v-2230176f"]]);
const Ld = {
  delete: "Remove"
}, fJ = cn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Ld
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(n, i) {
    const r = Wg(Jh(n, "labels"), Ld), l = Ji(() => ve("chip-text")), s = () => {
      n.disabled || i.emit("click");
    }, f = ir({}, i.attrs);
    return n.disabled && delete f.onClick, gh(ir({}, r), {
      chipTextId: l,
      handleClick: s,
      attrs: f
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
    Chip: hs,
    DeleteIcon: iJ,
    Label: ps,
    PreIcon: ms
  }
}), hJ = ["aria-disabled"];
function pJ(n, i, r, l, s, f) {
  const h = Vt("PreIcon"), m = Vt("Label"), v = Vt("DeleteIcon"), N = Vt("Chip");
  return it(), ln(N, Ql(n.attrs, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: { hover: n.canClick, focus: n.canClick || n.canDelete },
    role: "row",
    clickable: n.canClick
  }), {
    default: Ht(() => [
      ki("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        ki("span", Ql(n.chipTextAttrs, { class: "chip-label-button" }), [
          n.hasIcon ? (it(), ln(h, { key: 0 }, {
            default: Ht(() => [
              Et(n.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ta("", !0),
          Ai(m, { id: n.chipTextId }, {
            default: Ht(() => [
              Et(n.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, hJ),
      n.canDelete ? (it(), ln(v, {
        key: 0,
        disabled: n.disabled,
        "text-id": n.chipTextId,
        label: n.deleteLabel,
        role: "gridcell",
        onDelete: i[0] || (i[0] = (M) => n.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ta("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var mJ = /* @__PURE__ */ un(fJ, [["render", pJ], ["__scopeId", "data-v-48b2704a"]]);
const VJ = cn({
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
    Chip: hs,
    Label: ps,
    PreIcon: ms
  }
}), TJ = ["aria-disabled"];
function vJ(n, i, r, l, s, f) {
  const h = Vt("PreIcon"), m = Vt("Label"), v = Vt("Chip");
  return it(), ln(v, {
    role: "row",
    disabled: n.disabled,
    condensed: n.condensed,
    clickable: !1
  }, {
    default: Ht(() => [
      ki("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        n.hasIcon ? (it(), ln(h, { key: 0 }, {
          default: Ht(() => [
            Et(n.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ta("", !0),
        Ai(m, null, {
          default: Ht(() => [
            Et(n.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, TJ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var UJ = /* @__PURE__ */ un(VJ, [["render", vJ], ["__scopeId", "data-v-3e0c4eba"]]);
const wJ = cn({
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
  setup(n) {
    const i = qr(!1), r = qr(!1), l = Ji(() => ve("chip-label-id")), s = Ji(() => i.value || r.value ? 0 : -1), f = qr(), h = () => {
      f.value.$el.focus();
    }, m = Lr("register", (y) => {
    }), v = Lr("blur", (y) => {
    }), N = Lr("select", (y) => {
    }), M = {
      first: i,
      focus: h,
      disabled: n.disabled,
      value: n.value,
      checked: r
    };
    return m(M), {
      labelId: l,
      tabindex: s,
      first: i,
      blur: v,
      click: () => {
        N(M);
      },
      input: f,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((i) => i.children && i.children.length !== 0 || typeof i.type == "object") !== -1;
    }
  },
  components: {
    Chip: hs,
    Label: ps,
    PreIcon: ms
  }
});
function RJ(n, i, r, l, s, f) {
  const h = Vt("PreIcon"), m = Vt("Label"), v = Vt("Chip");
  return it(), ln(v, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: Zh(["focus hover", { selected: n.checked }]),
    role: "radio",
    ref: "input",
    "aria-checked": n.checked ? "true" : "false",
    "aria-disabled": n.disabled,
    "aria-labelledby": n.labelId,
    tabindex: n.tabindex,
    onClick: n.click,
    "allow-click": !n.disabled,
    onBlur: n.blur
  }, {
    default: Ht(() => [
      n.hasIcon ? (it(), ln(h, { key: 0 }, {
        default: Ht(() => [
          Et(n.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ta("", !0),
      Ai(m, { id: n.labelId }, {
        default: Ht(() => [
          Et(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var NJ = /* @__PURE__ */ un(wJ, [["render", RJ], ["__scopeId", "data-v-bbcc2f70"]]);
const MJ = {
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
}, qd = cn({
  props: MJ,
  setup() {
    return { format: Lr("chipListFormat", "") };
  },
  render() {
    const n = (i) => XZ(i, ir(ir({}, this.$props), this.$attrs), ir({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? n(mJ) : this.format === "radio" ? n(NJ) : n(UJ);
  }
}), gJ = {
  label: {
    type: String,
    required: !0
  },
  mode: {
    type: String,
    default: "list",
    validator: (n) => ["list", "radio", "single"].indexOf(n) !== -1
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  condensed: {
    type: Boolean,
    default: !1
  }
}, ZJ = cn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: gJ,
  setup(n, i) {
    const r = n.mode === "list" ? "grid" : n.mode;
    _Z("chipListFormat", r);
    const l = r === "single";
    if (r === "radio") {
      const h = Jh(n, "modelValue");
      return gh(ir({
        attrs: {
          role: "radiogroup"
        }
      }, Mh(h, i.emit, n.label, {}, qr(""))), {
        single: l
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: l };
  }
}), JJ = ["aria-label"];
function kJ(n, i, r, l, s, f) {
  return it(), oa("div", Ql(n.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": n.label,
    class: ["chip-list", { condensed: n.condensed, single: n.single }],
    onKeydown: i[0] || (i[0] = (...h) => n.keydown && n.keydown(...h))
  }), [
    Et(n.$slots, "default", {}, void 0, !0)
  ], 16, JJ);
}
var yJ = /* @__PURE__ */ un(ZJ, [["render", kJ], ["__scopeId", "data-v-1e06f41d"]]);
const bJ = window.Vue.defineComponent, nn = window.Vue.unref, Ml = window.Vue.toDisplayString, on = window.Vue.createElementVNode, Kd = window.Vue.createTextVNode, EJ = window.Vue.createVNode, FJ = window.Vue.openBlock, WJ = window.Vue.createElementBlock, SJ = window.Vue.createCommentVNode, AJ = window.Vue.pushScopeId, xJ = window.Vue.popScopeId, kh = (n) => (AJ("data-v-fd60398d"), n = n(), xJ(), n), BJ = {
  key: 0,
  class: "card"
}, CJ = { class: "row" }, DJ = { class: "title" }, QJ = /* @__PURE__ */ kh(() => /* @__PURE__ */ on("strong", null, "First Event", -1)), OJ = /* @__PURE__ */ kh(() => /* @__PURE__ */ on("strong", null, "Last Event", -1)), zJ = ["innerHTML"], GJ = /* @__PURE__ */ bJ({
  __name: "AlarmDetail",
  props: {
    id: null
  },
  setup(n) {
    const i = n, l = uh().alarms[i.id];
    return (s, f) => {
      var h;
      return nn(l) ? (FJ(), WJ("div", BJ, [
        on("div", CJ, [
          on("div", DJ, "[" + Ml(nn(l).id) + "]", 1),
          on("div", null, [
            QJ,
            Kd(" - " + Ml(nn(kn)(new Date(nn(l).firstEventTime), "d/M HH:mm:ss")), 1)
          ]),
          on("div", null, [
            OJ,
            Kd(" - " + Ml(nn(kn)(new Date(nn(l).lastEvent.createTime), "d/M HH:mm:ss")), 1)
          ]),
          on("div", null, [
            EJ(ts, {
              severity: (h = nn(l)) == null ? void 0 : h.severity
            }, null, 8, ["severity"])
          ])
        ]),
        on("div", {
          innerHTML: nn(l).description
        }, null, 8, zJ)
      ])) : SJ("", !0);
    };
  }
});
const YJ = /* @__PURE__ */ _e(GJ, [["__scopeId", "data-v-fd60398d"]]), IJ = window.Vue.defineComponent, HJ = window.Vue.normalizeClass, PJ = window.Vue.openBlock, jJ = window.Vue.createElementBlock, XJ = window.Vue.createCommentVNode, _J = /* @__PURE__ */ IJ({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const i = n;
    return (r, l) => i != null && i.severity ? (PJ(), jJ("span", {
      key: 0,
      class: HJ(["circle", [`${i.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : XJ("", !0);
  }
});
const LJ = /* @__PURE__ */ _e(_J, [["__scopeId", "data-v-e08880d6"]]), qJ = window.Vue.defineComponent, fi = window.Vue.createElementVNode, yh = window.Vue.createTextVNode, ii = window.Vue.unref, $d = window.Vue.normalizeClass, gl = window.Vue.withCtx, Zl = window.Vue.createVNode, ef = window.Vue.renderList, Jl = window.Vue.Fragment, Kn = window.Vue.openBlock, oi = window.Vue.createElementBlock, KJ = window.Vue.toDisplayString, tf = window.Vue.createBlock, $J = window.Vue.pushScopeId, ek = window.Vue.popScopeId, tk = (n) => ($J("data-v-4d8a6eca"), n = n(), ek(), n), nk = /* @__PURE__ */ tk(() => /* @__PURE__ */ fi("div", { class: "title" }, "Alarms", -1)), rk = { class: "alarm-filters-container" }, ak = /* @__PURE__ */ yh(" ALL "), ik = { class: "section" }, ok = { class: "alarm-list" }, nf = window.Vue.ref, lk = window.Vue.watch, sk = window.Vue.computed, ck = /* @__PURE__ */ qJ({
  __name: "AlarmFilters",
  props: {
    relatedAlarms: null
  },
  setup(n) {
    const i = n, r = sk(
      () => rt.exports.keys(rt.exports.groupBy(i.relatedAlarms, "severity"))
    ), l = nf(["all"]), s = nf(i.relatedAlarms), f = (h) => {
      l.value = l.value.filter((m) => m !== "all"), l.value.includes(h) ? l.value = l.value.filter((m) => m !== h) : l.value.push(h), h === "all" || l.value.length === 0 ? (l.value = ["all"], s.value = i.relatedAlarms) : s.value = i.relatedAlarms.filter(
        (m) => l.value.includes(m.severity)
      );
    };
    return lk(i, () => {
      l.value = ["all"], s.value = i.relatedAlarms;
    }), (h, m) => (Kn(), oi(Jl, null, [
      nk,
      fi("div", rk, [
        (Kn(), tf(ii(yJ), {
          key: l.value.toString(),
          condensed: "",
          class: "alarm-filters",
          label: "Random list for condensed visual testing"
        }, {
          default: gl(() => [
            Zl(ii(qd), {
              class: $d({ clicked: l.value.includes("all") }),
              onClick: m[0] || (m[0] = (v) => f("all"))
            }, {
              default: gl(() => [
                ak
              ]),
              _: 1
            }, 8, ["class"]),
            (Kn(!0), oi(Jl, null, ef(ii(r), (v) => (Kn(), tf(ii(qd), {
              class: $d({ clicked: l.value.includes(v) }),
              key: v,
              onClick: (N) => f(v)
            }, {
              default: gl(() => [
                Zl(LJ, { severity: v }, null, 8, ["severity"]),
                yh(KJ(v), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        })),
        fi("div", ik, [
          fi("div", ok, [
            (Kn(!0), oi(Jl, null, ef(s.value, (v) => (Kn(), oi("div", {
              key: v.id
            }, [
              Zl(YJ, {
                id: v.id
              }, null, 8, ["id"])
            ]))), 128))
          ])
        ])
      ])
    ], 64));
  }
});
const uk = /* @__PURE__ */ _e(ck, [["__scopeId", "data-v-4d8a6eca"]]);
var dk = Object.defineProperty, fk = Object.defineProperties, hk = Object.getOwnPropertyDescriptors, rf = Object.getOwnPropertySymbols, pk = Object.prototype.hasOwnProperty, mk = Object.prototype.propertyIsEnumerable, af = (n, i, r) => i in n ? dk(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Cr = (n, i) => {
  for (var r in i || (i = {}))
    pk.call(i, r) && af(n, r, i[r]);
  if (rf)
    for (var r of rf(i))
      mk.call(i, r) && af(n, r, i[r]);
  return n;
}, of = (n, i) => fk(n, hk(i));
const Vk = window.Vue.defineComponent, Tk = window.Vue.inject, Dr = window.Vue.h;
var vk = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const Uk = {
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
}, wk = Vk({
  inheritAttrs: !1,
  props: Uk,
  setup() {
    return { hasTooltip: Tk("feather-has-tooltip", !1) };
  },
  render() {
    const n = () => {
      let m = "";
      this.primary && (m = "btn-primary"), this.secondary && (m = "btn-secondary"), (this.text || this.icon) && (m = "btn-text");
      const v = ["btn", "hover", "focus", m];
      return this.icon && (v.push("btn-icon"), v.push("btn-icon-table")), this.onColor && v.push("on-color"), v;
    }, i = this.asAnchor ? "a" : "button", r = {}, l = Cr({}, this.$attrs);
    r.attrs = l || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (m) => {
        this.disabled ? (this.asAnchor && m.preventDefault(), this.$emit("disabled-click", m)) : this.$emit("click", m);
      }
    };
    const s = n();
    r.class = [this.$attrs.class].concat(s), this.$slots.icon && r.class.push("has-icon");
    let f = Dr(yn);
    if (this.disabled && (f = void 0), this.icon && this.$slots.default) {
      const m = this.icon;
      return r.attrs["aria-label"] = m, this.hasTooltip || (r.attrs.title = m), Dr(i, of(Cr(Cr({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Dr(yn, { center: !0 })
      ]);
    }
    const h = Dr("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Dr(i, of(Cr(Cr({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      h,
      f
    ]);
  }
});
var yi = /* @__PURE__ */ vk(wk, [["__scopeId", "data-v-702d1074"]]);
const Rk = "/whoami", Nk = async () => {
  try {
    const n = await ra.get(Rk);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, Mk = window.Pinia.defineStore, la = Mk("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const n = await Nk();
      n && (this.isAdmin = n.roles.includes("ROLE_ADMIN"), this.userId = n.id);
    },
    async getAlecInfo() {
      const n = await yg();
      n && (this.firstTime = !1, this.allowSave = n.agreed);
    },
    async savePermission(n) {
      if (this.allowSave = n, !n) {
        const i = await Uh(n);
        this.allowSave = i;
      }
    }
  }
}), gk = window.Vue.defineComponent, wn = window.Vue.unref, Qr = window.Vue.normalizeClass, zt = window.Vue.createVNode, $n = window.Vue.openBlock, er = window.Vue.createElementBlock, Zk = window.Vue.createCommentVNode, lf = window.Vue.withCtx, mt = window.Vue.createElementVNode, sf = window.Vue.toDisplayString, Jk = window.Vue.createTextVNode, kk = window.Vue.Fragment, yk = window.Vue.pushScopeId, bk = window.Vue.popScopeId, Ek = (n) => (yk("data-v-df2cbe51"), n = n(), bk(), n), Fk = { class: "section" }, Wk = {
  key: 0,
  class: "btn-row"
}, Sk = { key: 0 }, Ak = { key: 1 }, xk = { key: 0 }, Bk = { key: 1 }, Ck = { class: "situation-detail" }, Dk = { class: "situation-info" }, Qk = { class: "id" }, Ok = ["innerHTML"], zk = /* @__PURE__ */ Ek(() => /* @__PURE__ */ mt("strong", null, "Reduction key:", -1)), Gk = { class: "boxes" }, Yk = { class: "parameters" }, Ik = { class: "section" }, Hk = window.Vue.ref, Pk = window.Vue.watch, jk = /* @__PURE__ */ gk({
  __name: "SituationDetailTab",
  props: {
    alarmInfo: null
  },
  setup(n) {
    const i = n, r = la(), l = Hk(""), s = (f) => {
      var h;
      Eg((h = i.alarmInfo) == null ? void 0 : h.id, f), l.value = f;
    };
    return Pk(i, () => {
      l.value = "";
    }), (f, h) => {
      var m, v, N, M, k;
      return $n(), er(kk, null, [
        mt("div", Fk, [
          wn(r).allowSave ? ($n(), er("div", Wk, [
            zt(wn(yi), {
              class: Qr(["btn", { accepted: l.value == "accepted" }]),
              onClick: h[0] || (h[0] = () => s("accepted"))
            }, {
              default: lf(() => [
                zt(wn(at), {
                  icon: wn(mg),
                  "aria-hidden": "true",
                  class: Qr(["icon accept", { accepted: l.value == "accepted" }])
                }, null, 8, ["icon", "class"]),
                l.value == "accepted" ? ($n(), er("span", Sk, " ACCEPTED")) : ($n(), er("span", Ak, " ACCEPT"))
              ]),
              _: 1
            }, 8, ["class"]),
            zt(wn(yi), {
              class: Qr(["btn", { rejected: l.value == "refused" }]),
              onClick: h[1] || (h[1] = () => s("refused"))
            }, {
              default: lf(() => [
                zt(wn(at), {
                  icon: wn(Zg),
                  "aria-hidden": "true",
                  class: Qr(["icon reject", { rejected: l.value == "refused" }])
                }, null, 8, ["icon", "class"]),
                l.value == "refused" ? ($n(), er("span", xk, " REJECTED")) : ($n(), er("span", Bk, " REJECT"))
              ]),
              _: 1
            }, 8, ["class"])
          ])) : Zk("", !0),
          mt("div", Ck, [
            mt("div", {
              class: Qr(["severity-line", [`${(v = (m = i.alarmInfo) == null ? void 0 : m.severity) == null ? void 0 : v.toLowerCase()}-bg dark`]])
            }, null, 2),
            mt("div", Dk, [
              mt("div", Qk, [
                mt("div", null, "Situation " + sf((N = i.alarmInfo) == null ? void 0 : N.id), 1),
                zt(ts, {
                  severity: (M = i.alarmInfo) == null ? void 0 : M.severity
                }, null, 8, ["severity"])
              ]),
              mt("span", {
                innerHTML: i.alarmInfo.description
              }, null, 8, Ok),
              mt("p", null, [
                zk,
                Jk(" " + sf(i.alarmInfo.reductionKey), 1)
              ]),
              mt("div", Gk, [
                zt(Cd, {
                  label: "First Event",
                  date: i.alarmInfo.firstEventTime
                }, null, 8, ["date"]),
                zt(Cd, {
                  label: "Last Event",
                  date: i.alarmInfo.lastEvent.time
                }, null, 8, ["date"])
              ])
            ]),
            mt("div", Yk, [
              zt(dh, {
                relatedAlarms: (k = i.alarmInfo) == null ? void 0 : k.relatedAlarms,
                size: "large"
              }, null, 8, ["relatedAlarms"])
            ])
          ])
        ]),
        mt("div", Ik, [
          zt(uk, {
            "related-alarms": i.alarmInfo.relatedAlarms
          }, null, 8, ["related-alarms"])
        ])
      ], 64);
    };
  }
});
const Xk = /* @__PURE__ */ _e(jk, [["__scopeId", "data-v-df2cbe51"]]);
const _k = window.Vue.watch, Lk = window.Vue.onBeforeUnmount, qk = window.Vue.ref, bh = (n, i) => {
  const r = qk(!1);
  let l = !1;
  const s = (v) => {
    i(v), l = !1;
  };
  function f(v) {
    l || (requestAnimationFrame(() => s(v)), l = !0);
  }
  const h = () => {
    n.value && n.value.removeEventListener("scroll", f, !0);
  }, m = _k([n, r], ([v, N], M) => {
    M && M.length && M[0] && M[0].removeEventListener("scroll", f, !0), N && v ? v.addEventListener("scroll", f, !0) : h();
  }, {
    immediate: !0
  });
  return Lk(() => {
    m(), h();
  }), r;
}, hi = window.Vue.openBlock, Ol = window.Vue.createElementBlock, Eh = window.Vue.createElementVNode, Kk = window.Vue.defineComponent, Rn = window.Vue.ref, $k = window.Vue.provide, cf = window.Vue.computed, ey = window.Vue.onUnmounted, uf = window.Vue.toRef, ty = window.Vue.resolveComponent, ny = window.Vue.Fragment, ry = window.Vue.createBlock, ay = window.Vue.Teleport, df = window.Vue.createVNode, iy = window.Vue.Transition, oy = window.Vue.withCtx, ly = window.Vue.normalizeClass, sy = window.Vue.normalizeStyle, cy = window.Vue.toDisplayString, uy = window.Vue.createCommentVNode, dy = window.Vue.renderSlot, kl = window.Vue.nextTick;
var Fh = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const fy = {}, hy = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, py = /* @__PURE__ */ Eh("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), my = [
  py
];
function Vy(n, i) {
  return hi(), Ol("svg", hy, my);
}
var Ty = /* @__PURE__ */ Fh(fy, [["render", Vy]]), Fe = /* @__PURE__ */ ((n) => (n.top = "top", n.bottom = "bottom", n.left = "left", n.right = "right", n))(Fe || {}), It = /* @__PURE__ */ ((n) => (n.center = "center", n.left = "left", n.right = "right", n))(It || {});
const vy = (n, i, r, l = 9) => {
  const s = window.innerHeight - n.bottom, f = window.innerWidth - n.right, h = [];
  n.top >= i.height + l && h.push(Fe.top), s >= i.height + l && h.push(Fe.bottom);
  const m = [];
  f >= i.width + l && m.push(Fe.right), n.left >= i.width + l && m.push(Fe.left);
  let v = [...m, ...h];
  return (r === Fe.top || r === Fe.bottom) && (v = [...h, ...m]), v.indexOf(r) > -1 ? r : v.length ? v[0] : r;
}, Uy = (n, i, r, l, s = 28) => {
  if (n === Fe.left || n === Fe.right)
    return It.center;
  const f = i.left + i.width / 2, h = window.innerWidth - i.right, m = [], v = f, N = h + i.width / 2, M = r.width - s, k = r.width / 2;
  return v >= k && N >= k && m.push(It.center), N >= M && m.push(It.left), v >= M && m.push(It.right), m.indexOf(l) > -1 ? l : m.length ? m[0] : l;
}, wy = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Fe.top
  },
  pointerAlignment: {
    type: String,
    default: () => It.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, Ry = Kk({
  props: wy,
  setup(n) {
    const i = Rn(!1), r = Rn(!1), l = ve("feather-tooltip-trigger"), s = ve("feather-tooltip"), f = "data-feather-tooltip";
    $k("feather-has-tooltip", !0);
    let h = 0;
    const m = () => {
      Ui(h), i.value || (h = vi(x, n.enterDelay));
    }, v = () => {
      Ui(h), h = vi(A, n.exitDelay);
    }, N = (de) => {
      de.keyCode === Ne.ESCAPE && (de.preventDefault(), A(!0));
    }, M = cf(() => ({
      [f]: l,
      "aria-describedby": s
    })), k = {
      mouseenter: m,
      mouseleave: v,
      focus: m,
      blur: v,
      keydown: N
    }, y = Rn(document), C = bh(y, () => A(!0));
    ey(() => A(!0));
    const S = () => document.getElementById(s), x = () => {
      r.value = !1, i.value = !0, kl(() => {
        const de = S();
        Ye(de), i.value = !1, kl(() => {
          r.value = !0, i.value = !0, C.value = !0;
        });
      });
    }, A = (de = !1) => {
      ne.value = "", b.value = "", q.value = "", X.value = "", i.value = !1, de && (r.value = !1), C.value = !1;
    }, E = uf(n, "placement"), G = uf(n, "pointerAlignment"), Q = 8, $ = 24, b = Rn(""), ne = Rn(""), q = Rn(""), X = Rn(""), Ae = cf(() => X.value ? "p-" + X.value : !1), Ye = (de) => {
      const fe = document.querySelector(`[${f}=${l}]`);
      if (!fe) {
        console.log("trigger not found");
        return;
      }
      kl(() => {
        const pe = fe.getBoundingClientRect(), Ue = de.getBoundingClientRect(), ie = vy(pe, Ue, E.value, Q), ke = Uy(ie, pe, Ue, G.value, $);
        q.value = ke.toString(), X.value = ie.toString();
        let ye = 0, De = 0;
        if ((ie === Fe.left || ie === Fe.right) && (ye = pe.top + pe.height / 2 - Ue.height / 2, ie === Fe.left && (De = pe.left - Ue.width - Q), ie === Fe.right && (De = pe.right)), ie === Fe.top || ie === Fe.bottom) {
          ye = pe.top - Ue.height - Q, ie === Fe.bottom && (ye = pe.bottom);
          const dr = pe.left + pe.width / 2;
          switch (ke) {
            case It.center:
              De = dr - Ue.width / 2;
              break;
            case It.left:
              De = dr - $;
              break;
            case It.right:
              De = dr - Ue.width + $;
              break;
          }
        }
        b.value = ye.toString() + "px", ne.value = De.toString() + "px";
      });
    };
    return {
      attrs: M,
      listeners: k,
      show: i,
      animate: r,
      alignmentClass: q,
      placementClass: Ae,
      top: b,
      left: ne,
      tooltipID: s
    };
  },
  components: {
    Pointer: Ty
  }
}), Ny = ["id"];
function My(n, i, r, l, s, f) {
  const h = ty("Pointer");
  return hi(), Ol(ny, null, [
    (hi(), ry(ay, { to: "body" }, [
      df(iy, { css: n.animate }, {
        default: oy(() => [
          n.show ? (hi(), Ol("div", {
            key: 0,
            class: ly(["feather-tooltip-container", [n.alignmentClass, n.placementClass]]),
            ref: "tooltip",
            style: sy({ left: n.left, top: n.top })
          }, [
            Eh("div", {
              class: "tooltip",
              role: "tooltip",
              id: n.tooltipID
            }, cy(n.title), 9, Ny),
            df(h, { class: "tooltip-pointer" })
          ], 6)) : uy("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    dy(n.$slots, "default", {
      attrs: n.attrs,
      on: n.listeners
    }, void 0, !0)
  ], 64);
}
var ff = /* @__PURE__ */ Fh(Ry, [["render", My], ["__scopeId", "data-v-3da6b22e"]]);
const gy = window.Vue.openBlock, Zy = window.Vue.createElementBlock, Jy = window.Vue.createElementVNode;
var ky = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const yy = {}, by = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ey = /* @__PURE__ */ Jy("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), Fy = [
  Ey
];
function Wy(n, i) {
  return gy(), Zy("svg", by, Fy);
}
var Sy = /* @__PURE__ */ ky(yy, [["render", Wy]]);
const Ay = window.Vue.watch, xy = window.Vue.onBeforeUnmount, By = window.Vue.ref, Cy = window.Vue.onMounted, Dy = (n) => {
  const i = By(!1);
  let r = !1;
  const l = (h) => {
    n(h), r = !1;
  };
  function s(h) {
    r || (requestAnimationFrame(() => l(h)), r = !0);
  }
  const f = () => {
    window && window.removeEventListener("resize", s);
  };
  return Cy(() => {
    const h = Ay(i, (m) => {
      window && m ? window.addEventListener("resize", s) : f();
    }, {
      immediate: !0
    });
    xy(() => {
      h(), f();
    });
  }), i;
}, Qy = window.Vue.watch, Oy = window.Vue.onBeforeUnmount, zy = window.Vue.ref, Gy = window.Vue.onMounted, Yy = (n, i) => {
  const r = zy(!1), l = (h) => {
    h.target === window && i(h);
  }, s = (h) => {
    let m = [];
    Array.isArray(n.value) ? m = n.value : m = [n.value], m.some((N) => N && N.contains(h.target)) || i(h);
  }, f = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", l));
  };
  return Gy(() => {
    const h = Qy(r, (m) => {
      document && window && m ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", l)) : f();
    }, {
      immediate: !0
    });
    Oy(() => {
      h(), f();
    });
  }), r;
}, Iy = window.Vue.defineComponent, Gt = window.Vue.ref, hf = window.Vue.toRef, Hy = window.Vue.onMounted, Py = window.Vue.watch, pf = window.Vue.computed, jy = window.Vue.nextTick, mf = window.Vue.openBlock, Vf = window.Vue.createElementBlock, Tf = window.Vue.renderSlot, Xy = window.Vue.normalizeClass, _y = window.Vue.normalizeStyle, Ly = window.Vue.createCommentVNode;
var qy = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const Ky = {
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
}, $y = {
  "trigger-click": (n) => !0,
  "outside-click": (n) => !0
}, e2 = Iy({
  emits: $y,
  props: Ky,
  setup(n, i) {
    const r = Gt(), l = Gt(), s = hf(n, "open"), f = hf(n, "noExpand"), h = Gt("auto"), m = Gt(), v = Gt(n.triggerId || ve("feather-menu-trigger")), N = Gt(ve("feather-menu-dropdown")), M = Gt(""), k = Gt("");
    Hy(() => {
      m.value = window;
    });
    const y = Gt(!1), C = () => ({
      height: m.value.innerHeight,
      width: m.value.innerWidth,
      left: 0,
      top: 0
    }), S = () => {
      if (!l.value)
        return;
      const b = r.value.getBoundingClientRect();
      y.value = !0, h.value = "auto", jy(() => {
        let { height: ne, width: q } = l.value.getBoundingClientRect();
        const X = C(), Ae = X.height, Ye = X.width;
        n.fill && q < b.width ? (h.value = b.width + "px", q = b.width) : h.value = q + "px";
        let de = 0;
        Ae - b.bottom < ne && b.top >= ne ? (de = b.top - ne, n.cover && (de += b.height)) : (de = b.bottom, n.cover && (de -= b.height));
        let fe = n.right ? b.right - q : b.left;
        !n.right && b.right >= q && Ye - b.left < q && (fe = b.right - q), n.right && b.right <= q && Ye - b.left > q && (fe = b.left), k.value = `${fe}px`, M.value = `${de}px`, y.value = !1;
      });
    }, A = Yy(r, (b) => {
      i.emit("outside-click", b);
    }), E = Dy(S), G = bh(m, S);
    Py([s, l], ([b, ne]) => {
      b && ne && S(), A.value = b, E.value = b, G.value = b;
    });
    const Q = pf(() => {
      const b = {
        id: v.value,
        "aria-haspopup": "true"
      };
      return s.value && (b["aria-controls"] = N.value), f.value || (b["aria-expanded"] = s.value ? "true" : "false"), b;
    }), $ = pf(() => ({
      click: (b) => {
        i.emit("trigger-click", b);
      }
    }));
    return {
      positionTop: M,
      positionLeft: k,
      triggerId: v,
      triggerAttrs: Q,
      triggerListeners: $,
      menuId: N,
      menu: l,
      menuWidth: h,
      root: r,
      calculatePosition: S,
      calculating: y
    };
  }
}), t2 = ["data-ref-id"], n2 = ["data-ref-id", "id"];
function r2(n, i, r, l, s, f) {
  return mf(), Vf("div", {
    class: "feather-menu",
    "data-ref-id": n.dataRefId,
    ref: "root"
  }, [
    Tf(n.$slots, "trigger", {
      attrs: n.triggerAttrs,
      on: n.triggerListeners
    }, void 0, !0),
    n.open ? (mf(), Vf("div", {
      key: 0,
      class: Xy(["feather-menu-dropdown", { hidden: n.calculating }]),
      "data-ref-id": n.dataRefId + "-dropdown",
      ref: "menu",
      id: n.menuId,
      style: _y({ left: n.positionLeft, top: n.positionTop, width: n.menuWidth })
    }, [
      Tf(n.$slots, "default", { labelId: n.triggerId }, void 0, !0)
    ], 14, n2)) : Ly("", !0)
  ], 8, t2);
}
var a2 = /* @__PURE__ */ qy(e2, [["render", r2], ["__scopeId", "data-v-f75af406"]]);
const i2 = window.Vue.defineComponent, o2 = window.Vue.openBlock, l2 = window.Vue.createElementBlock, s2 = window.Vue.normalizeClass, c2 = window.Vue.pushScopeId, u2 = window.Vue.popScopeId, zl = window.Vue.createElementVNode;
var d2 = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const f2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, h2 = {
  click: (n) => !0
}, p2 = i2({
  emits: h2,
  props: f2,
  methods: {
    handleClick(n) {
      this.disabled || this.$emit("click", n);
    }
  }
}), Wh = (n) => (c2("data-v-07e020f5"), n = n(), u2(), n), m2 = /* @__PURE__ */ Wh(() => /* @__PURE__ */ zl("div", { class: "track" }, null, -1)), V2 = /* @__PURE__ */ Wh(() => /* @__PURE__ */ zl("div", { class: "switcher" }, [
  /* @__PURE__ */ zl("div", { class: "switch-circle" })
], -1)), T2 = [
  m2,
  V2
];
function v2(n, i, r, l, s, f) {
  return o2(), l2("div", {
    class: s2(["switch-container", { checked: n.checked, disabled: n.disabled }]),
    onClick: i[0] || (i[0] = (...h) => n.handleClick && n.handleClick(...h))
  }, T2, 2);
}
var U2 = /* @__PURE__ */ d2(p2, [["render", v2], ["__scopeId", "data-v-07e020f5"]]), w2 = Object.defineProperty, R2 = Object.defineProperties, N2 = Object.getOwnPropertyDescriptors, vf = Object.getOwnPropertySymbols, M2 = Object.prototype.hasOwnProperty, g2 = Object.prototype.propertyIsEnumerable, Uf = (n, i, r) => i in n ? w2(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, wf = (n, i) => {
  for (var r in i || (i = {}))
    M2.call(i, r) && Uf(n, r, i[r]);
  if (vf)
    for (var r of vf(i))
      g2.call(i, r) && Uf(n, r, i[r]);
  return n;
}, Rf = (n, i) => R2(n, N2(i));
const Vs = window.Vue.defineComponent, Nn = window.Vue.h, Z2 = window.Vue.openBlock, J2 = window.Vue.createElementBlock, k2 = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Sh = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const y2 = {
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
}, b2 = Vs({
  inheritAttrs: !1,
  props: y2,
  render() {
    let n;
    this.$slots.icon && this.$slots.icon().findIndex((h) => h.children && h.children.length !== 0 || h.type && h.type.render) !== -1 && (n = Nn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Nn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let l;
    this.$slots.post && (l = Nn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const s = this.disabled ? void 0 : Nn(yn);
    if (this.asLi)
      return Nn("li", Rf(wf({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [n, r, l, s]);
    const f = Nn("a", Rf(wf({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [n, r, l, s]);
    return Nn("li", {}, [f]);
  }
});
var Ts = /* @__PURE__ */ Sh(b2, [["__scopeId", "data-v-7c46b2b3"]]);
Vs({
  components: {
    FeatherListItem: Ts
  }
});
const E2 = {}, F2 = { class: "feather-list" };
function W2(n, i) {
  return Z2(), J2("ul", F2, [
    k2(n.$slots, "default", {}, void 0, !0)
  ]);
}
var S2 = /* @__PURE__ */ Sh(E2, [["render", W2], ["__scopeId", "data-v-941a1d50"]]);
const A2 = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  keydown: (n) => !0
}, x2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Vs({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: A2,
  props: x2,
  computed: {
    labelId() {
      return ve("switch-label");
    }
  },
  methods: {
    focus() {
      this.$refs.input.$el.focus();
    },
    updateValue() {
      this.disabled || this.$emit("update:modelValue", !this.modelValue);
    },
    click(n) {
      this.focus(), this.updateValue(), this.$emit("click", n);
    },
    keydown(n) {
      (n.keyCode === Ne.SPACE || n.keyCode === Ne.ENTER) && this.updateValue(), n.keyCode === Ne.SPACE && n.preventDefault(), this.$emit("keydown", n);
    }
  },
  components: { SwitchRender: U2, FeatherListItem: Ts }
});
const B2 = function(n, i) {
  if (!n || !i)
    return;
  let r = n.getBoundingClientRect().height;
  const l = getComputedStyle(n);
  r += parseInt(l.getPropertyValue("margin-top"), 10), r += parseInt(l.getPropertyValue("margin-bottom"), 10), i.scrollTop = n.offsetTop - i.getBoundingClientRect().height + r;
};
var C2 = Object.defineProperty, D2 = Object.defineProperties, Q2 = Object.getOwnPropertyDescriptors, Nf = Object.getOwnPropertySymbols, O2 = Object.prototype.hasOwnProperty, z2 = Object.prototype.propertyIsEnumerable, Mf = (n, i, r) => i in n ? C2(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Gl = (n, i) => {
  for (var r in i || (i = {}))
    O2.call(i, r) && Mf(n, r, i[r]);
  if (Nf)
    for (var r of Nf(i))
      z2.call(i, r) && Mf(n, r, i[r]);
  return n;
}, G2 = (n, i) => D2(n, Q2(i));
const Ah = window.Vue.defineComponent, Zn = window.Vue.resolveComponent, pi = window.Vue.openBlock, gf = window.Vue.createBlock, mi = window.Vue.mergeProps, Jn = window.Vue.withCtx, xh = window.Vue.createElementBlock, Y2 = window.Vue.Fragment, I2 = window.Vue.renderList, H2 = window.Vue.createTextVNode, P2 = window.Vue.toDisplayString, j2 = window.Vue.computed, Zf = window.Vue.toRef, Or = window.Vue.createVNode, Jf = window.Vue.toHandlers, X2 = window.Vue.renderSlot, _2 = window.Vue.normalizeClass, L2 = window.Vue.createElementVNode;
var Bh = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const q2 = Ah({
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
      return ve("feather-select-active");
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
    activeIndex(n) {
      n > -1 && this.$nextTick(() => {
        const i = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[n];
        B2(i, this.$refs.list.$el);
      });
    }
  },
  methods: {
    isSelected(n) {
      return this.activeIndex === n;
    },
    getId(n) {
      return n === this.activeIndex ? this.activeId : null;
    },
    select(n) {
      this.$emit("select", n);
    }
  },
  components: {
    FeatherList: S2,
    FeatherListItem: Ts
  }
});
function K2(n, i, r, l, s, f) {
  const h = Zn("FeatherListItem"), m = Zn("FeatherList");
  return pi(), gf(m, mi(n.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Jn(() => [
      (pi(!0), xh(Y2, null, I2(n.options, (v, N) => (pi(), gf(h, {
        key: v[n.textProp],
        "as-li": "",
        id: n.getId(N),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": n.isSelected(N),
        selected: n.isSelected(N),
        onClick: (M) => n.select(v)
      }, {
        default: Jn(() => [
          H2(P2(v[n.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var $2 = /* @__PURE__ */ Bh(q2, [["render", K2], ["__scopeId", "data-v-eae820da"]]);
const eb = G2(Gl(Gl({}, DZ), ds), {
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
}), tb = {
  "update:modelValue": (n) => !0
}, nb = Ah({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: tb,
  props: eb,
  setup(n, i) {
    fs(n), QZ(n);
    const r = j2(() => ve("feather-select-input")), { validate: l } = cs(r, Zf(n, "modelValue"), n.label, n.schema, Zf(n, "error"));
    return Gl({
      inputId: r,
      validate: l
    }, us(i.attrs));
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
      return ve("feather-select-description");
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
        const n = this.internalValue, i = this.options.filter((r) => r[this.textProp] === n[this.textProp]);
        if (i && i.length)
          return this.options.indexOf(i[0]);
      }
      return -1;
    },
    icon: () => Sy
  },
  watch: {
    showMenu(n) {
      n ? (this.internalValue || this.select(this.options[0]), this.$nextTick(() => {
        this.$refs.input.focus();
      })) : this.emitSelection();
    },
    modelValue(n) {
      this.internalValue = n;
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
    handleSelect(n) {
      this.select(n), this.showMenu = !1, this.$refs.input.focus();
    },
    select(n) {
      this.internalValue = n;
    },
    emitSelection() {
      this.$emit("update:modelValue", this.internalValue);
    },
    handleKeyDown(n) {
      if (n.keyCode === Ne.ENTER)
        n.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (n.keyCode === Ne.ESCAPE)
        this.closeMenu(), n.stopPropagation();
      else if (n.keyCode === Ne.DOWN)
        n.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (n.keyCode === Ne.UP)
        n.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (n.keyCode === Ne.HOME)
        n.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (n.keyCode === Ne.END)
        n.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const i = String.fromCharCode(n.keyCode);
        this.charsSoFar += i, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Ui(this.delayTimeout), this.delayTimeout = vi(() => {
        const n = this.options.filter((i) => i[this.textProp] && i[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        n && n.length && this.select(n[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: EZ,
    InputSubText: ss,
    FeatherMenu: a2,
    List: $2,
    FeatherIcon: at
  }
});
function rb(n, i, r, l, s, f) {
  const h = Zn("FeatherIcon"), m = Zn("InputWrapper"), v = Zn("List"), N = Zn("FeatherMenu"), M = Zn("InputSubText");
  return pi(), xh("div", mi(n.inherittedAttrs, { class: "feather-select-container" }), [
    Or(N, {
      "no-expand": "",
      fill: "",
      open: n.showMenu,
      onOutsideClick: n.handleOutsideClick,
      onTriggerClick: n.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Jn((k) => [
        Or(m, mi({
          for: n.inputId,
          raised: n.raised,
          focused: n.hasFocus,
          "show-clear": n.showClear,
          onClear: n.handleClear
        }, k.attrs, Jf(k.on), {
          class: ["feather-select-wrapper", { focused: n.hasFocus }]
        }), {
          pre: Jn(() => [
            X2(n.$slots, "pre", {}, void 0, !0)
          ]),
          post: Jn(() => [
            Or(h, {
              class: _2(["feather-select-icon", { rotate: n.showMenu }]),
              icon: n.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Jn(() => [
            L2("input", mi(n.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Jf(n.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Jn(() => [
        Or(v, {
          ref: "list",
          "data-ref-id": "feather-select-list",
          label: n.label,
          options: n.options,
          "text-prop": n.textProp,
          "active-index": n.activeIndex,
          onSelect: n.handleSelect,
          onKeydown: n.handleKeyDown
        }, null, 8, ["label", "options", "text-prop", "active-index", "onSelect", "onKeydown"])
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick"]),
    Or(M, { id: n.subTextId }, null, 8, ["id"])
  ], 16);
}
var ab = /* @__PURE__ */ Bh(nb, [["render", rb], ["__scopeId", "data-v-ecb32d90"]]);
const ib = window.Vue.openBlock, ob = window.Vue.createElementBlock, Ch = window.Vue.createElementVNode;
var lb = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const sb = {}, cb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ub = /* @__PURE__ */ Ch("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), db = /* @__PURE__ */ Ch("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), fb = [
  ub,
  db
];
function hb(n, i) {
  return ib(), ob("svg", cb, fb);
}
var pb = /* @__PURE__ */ lb(sb, [["render", hb]]);
const mb = window.Vue.openBlock, Vb = window.Vue.createElementBlock, Dh = window.Vue.createElementVNode;
var Tb = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const vb = {}, Ub = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wb = /* @__PURE__ */ Dh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Rb = /* @__PURE__ */ Dh("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), Nb = [
  wb,
  Rb
];
function Mb(n, i) {
  return mb(), Vb("svg", Ub, Nb);
}
var gb = /* @__PURE__ */ Tb(vb, [["render", Mb]]);
const Zb = window.Vue.defineComponent, zr = window.Vue.toDisplayString, ge = window.Vue.createElementVNode, pt = window.Vue.unref, Gr = window.Vue.createVNode, Jb = window.Vue.createTextVNode, kf = window.Vue.renderList, yf = window.Vue.Fragment, Yr = window.Vue.openBlock, Ir = window.Vue.createElementBlock, bf = window.Vue.toHandlers, Ef = window.Vue.mergeProps, Ff = window.Vue.withCtx, kb = window.Vue.normalizeClass, yb = window.Vue.normalizeStyle, bb = window.Vue.pushScopeId, Eb = window.Vue.popScopeId, Fb = (n) => (bb("data-v-66052ad4"), n = n(), Eb(), n), Wb = { class: "metrics" }, Sb = { class: "section" }, Ab = { class: "id" }, xb = { class: "section" }, Bb = /* @__PURE__ */ Fb(() => /* @__PURE__ */ ge("h4", null, "Alarms", -1)), Cb = { class: "action-btns" }, Db = { class: "zoom" }, Qb = /* @__PURE__ */ Jb(" Zoom "), Ob = { class: "alarms" }, zb = { class: "times" }, Gb = { class: "container" }, Yb = { class: "ids" }, Ib = { class: "timeline-container" }, Hb = /* @__PURE__ */ Zb({
  __name: "SituationMetricsTab",
  props: {
    situation: null
  },
  setup(n) {
    const i = n, r = 1e3;
    let l = ref(r);
    const s = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], f = ref(s[0]), h = ref(i.situation.relatedAlarms), m = ref(
      rt.exports.minBy(i.situation.relatedAlarms, "firstEventTime").firstEventTime
    ), v = ref(
      rt.exports.maxBy(i.situation.relatedAlarms, "lastEventTime").lastEventTime
    ), N = ref(l.value / (v.value - m.value));
    watch(i, () => {
      m.value = rt.exports.minBy(
        i.situation.relatedAlarms,
        "firstEventTime"
      ).firstEventTime, v.value = rt.exports.maxBy(
        i.situation.relatedAlarms,
        "lastEventTime"
      ).lastEventTime, l.value = r, N.value = l.value / (v.value - m.value), h.value = i.situation.relatedAlarms, f.value = s[0];
    });
    const M = (x, A) => (A - x) * N.value, k = (x) => (x - m.value) * N.value, y = (x) => {
      if (x.id === 1 && (h.value = i.situation.relatedAlarms), x.id === 2) {
        const A = rt.exports.groupBy(h.value, "severity"), E = [].concat(A.CRITICAL).concat(A.MAJOR).concat(A.MINOR).concat(A.WARNING);
        h.value = E.filter((G) => G);
      }
      if (x.id === 3) {
        const A = rt.exports.reverse(
          rt.exports.sortBy(
            i.situation.relatedAlarms,
            (E) => E.lastEventTime - E.firstEventTime
          )
        );
        h.value = A;
      }
    }, C = () => {
      l.value += 100, N.value = l.value / (v.value - m.value);
    }, S = () => {
      l.value -= 100, N.value = l.value / (v.value - m.value);
    };
    return (x, A) => (Yr(), Ir("div", Wb, [
      ge("div", Sb, [
        ge("div", Ab, "Situation - [ " + zr(i.situation.id) + " ]", 1),
        ge("div", null, " Duration: " + zr(pt(YM)(new Date(v.value), new Date(m.value))), 1)
      ]),
      ge("div", xb, [
        Bb,
        ge("div", Cb, [
          Gr(pt(ab), {
            class: "select",
            label: "Sort by:",
            options: s,
            modelValue: f.value,
            "onUpdate:modelValue": [
              A[0] || (A[0] = (E) => f.value = E),
              y
            ],
            "text-prop": "name"
          }, null, 8, ["modelValue"]),
          ge("div", Db, [
            Qb,
            ge("div", null, [
              Gr(pt(at), {
                icon: pt(pb),
                class: "zoom-icon",
                onClick: C
              }, null, 8, ["icon"]),
              Gr(pt(at), {
                icon: pt(gb),
                class: "zoom-icon",
                onClick: S
              }, null, 8, ["icon"])
            ])
          ])
        ]),
        ge("div", Ob, [
          ge("div", zb, [
            ge("div", null, zr(pt(kn)(new Date(m.value), "d/M HH:mm:ss")), 1),
            ge("div", null, zr(pt(kn)(new Date(v.value), "d/M HH:mm:ss")), 1)
          ]),
          ge("div", Gb, [
            ge("div", Yb, [
              (Yr(!0), Ir(yf, null, kf(h.value, (E) => (Yr(), Ir("div", {
                class: "alarm-id",
                key: E.id
              }, " [ " + zr(E.id) + " ] ", 1))), 128))
            ]),
            ge("div", Ib, [
              (Yr(!0), Ir(yf, null, kf(h.value, (E) => (Yr(), Ir("div", {
                class: "timeline",
                key: E.id
              }, [
                Gr(pt(ff), {
                  title: pt(kn)(new Date(E.firstEventTime), "d/M HH:mm:ss")
                }, {
                  default: Ff(({ attrs: G, on: Q }) => [
                    ge("div", Ef({ class: "circle" }, G, bf(Q), {
                      class: [`${E.severity.toLowerCase()}-bg dark`],
                      style: {
                        marginLeft: k(E.firstEventTime) + "px"
                      }
                    }), null, 16)
                  ]),
                  _: 2
                }, 1032, ["title"]),
                ge("div", {
                  class: kb(["line", [`${E.severity.toLowerCase()}-bg dark`]]),
                  style: yb({
                    width: M(E.firstEventTime, E.lastEventTime) + "px"
                  })
                }, null, 6),
                Gr(pt(ff), {
                  title: pt(kn)(new Date(E.lastEventTime), "d/M HH:mm:ss")
                }, {
                  default: Ff(({ attrs: G, on: Q }) => [
                    ge("div", Ef({ class: "circle" }, G, bf(Q), {
                      class: [`${E.severity.toLowerCase()}-bg dark`]
                    }), null, 16)
                  ]),
                  _: 2
                }, 1032, ["title"])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
});
const Pb = /* @__PURE__ */ _e(Hb, [["__scopeId", "data-v-66052ad4"]]), jb = window.Vue.defineComponent, Qh = window.Vue.createTextVNode, Hr = window.Vue.unref, tr = window.Vue.withCtx, Mn = window.Vue.createVNode, Xb = window.Vue.openBlock, _b = window.Vue.createElementBlock, Lb = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const qb = {
  key: 0,
  class: "detail"
}, Kb = /* @__PURE__ */ Qh("Details"), $b = /* @__PURE__ */ Qh("Metrics"), eE = /* @__PURE__ */ jb({
  __name: "SituationDetail",
  props: {
    alarmInfo: null
  },
  setup(n) {
    const i = n;
    return (r, l) => i.alarmInfo ? (Xb(), _b("div", qb, [
      Mn(Hr(gN), null, {
        tabs: tr(() => [
          Mn(Hr(Jd), null, {
            default: tr(() => [
              Kb
            ]),
            _: 1
          }),
          Mn(Hr(Jd), null, {
            default: tr(() => [
              $b
            ]),
            _: 1
          })
        ]),
        default: tr(() => [
          Mn(Hr(kd), { class: "panel" }, {
            default: tr(() => [
              Mn(Xk, {
                "alarm-info": i.alarmInfo
              }, null, 8, ["alarm-info"])
            ]),
            _: 1
          }),
          Mn(Hr(kd), { class: "panel" }, {
            default: tr(() => [
              Mn(Pb, {
                situation: i == null ? void 0 : i.alarmInfo
              }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : Lb("", !0);
  }
});
const tE = /* @__PURE__ */ _e(eE, [["__scopeId", "data-v-30995a07"]]), nE = window.Vue.defineComponent, Yl = window.Vue.createElementVNode, Wf = window.Vue.unref, rE = window.Vue.renderList, aE = window.Vue.Fragment, yl = window.Vue.openBlock, bl = window.Vue.createElementBlock, Sf = window.Vue.createVNode, iE = window.Vue.pushScopeId, oE = window.Vue.popScopeId, lE = (n) => (iE("data-v-052c2f8e"), n = n(), oE(), n), sE = { class: "list-main" }, cE = /* @__PURE__ */ lE(() => /* @__PURE__ */ Yl("h2", null, "Situation List", -1)), uE = { class: "container" }, dE = { class: "situation-list" }, fE = window.Vue.reactive, hE = /* @__PURE__ */ nE({
  __name: "SituationList",
  setup(n) {
    const i = uh();
    i.getSituations();
    const r = fE({
      selectedSituationIndex: 0,
      situationSelected: ""
    }), l = (s) => {
      r.situationSelected = s, r.selectedSituationIndex = i.situations.findIndex(
        (f) => f.id === s
      );
    };
    return i.$subscribe((s, f) => {
      r.situationSelected = f.situations[0].id;
    }), (s, f) => (yl(), bl("div", sE, [
      cE,
      Yl("div", uE, [
        Yl("div", dE, [
          (yl(!0), bl(aE, null, rE(Wf(i).situations, (h) => (yl(), bl("div", {
            key: h.id
          }, [
            Sf(FR, {
              "alarm-info": h,
              onSituationSelected: l,
              selected: r.situationSelected == h.id
            }, null, 8, ["alarm-info", "selected"])
          ]))), 128))
        ]),
        Sf(tE, {
          "alarm-info": Wf(i).situations[r.selectedSituationIndex]
        }, null, 8, ["alarm-info"])
      ])
    ]));
  }
});
const pE = /* @__PURE__ */ _e(hE, [["__scopeId", "data-v-052c2f8e"]]);
var mE = Object.defineProperty, VE = Object.defineProperties, TE = Object.getOwnPropertyDescriptors, Af = Object.getOwnPropertySymbols, vE = Object.prototype.hasOwnProperty, UE = Object.prototype.propertyIsEnumerable, xf = (n, i, r) => i in n ? mE(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Vi = (n, i) => {
  for (var r in i || (i = {}))
    vE.call(i, r) && xf(n, r, i[r]);
  if (Af)
    for (var r of Af(i))
      UE.call(i, r) && xf(n, r, i[r]);
  return n;
}, Oh = (n, i) => VE(n, TE(i));
const zh = window.Vue.defineComponent, wE = window.Vue.ref, Kr = window.Vue.computed, RE = window.Vue.reactive, Bf = window.Vue.watch, El = window.Vue.inject, Gh = window.Vue.resolveComponent, Il = window.Vue.openBlock, Yh = window.Vue.createElementBlock, sn = window.Vue.createElementVNode, NE = window.Vue.createBlock, ME = window.Vue.createCommentVNode, Ih = window.Vue.renderSlot, gE = window.Vue.pushScopeId, ZE = window.Vue.popScopeId, Fl = window.Vue.toRef, Cf = window.Vue.mergeProps, JE = window.Vue.toDisplayString, kE = window.Vue.createVNode;
var Hh = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const yE = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, bE = zh({
  props: yE,
  setup(n) {
    const i = wE(), r = () => {
      i.value.focus();
    }, l = Kr(() => ve("feather-radio-button")), s = RE({
      first: !1,
      focus: r,
      disabled: n.disabled,
      value: n.value,
      checked: !1,
      id: l.value
    }), f = Kr(() => ve("radio-label-id")), h = Kr(() => s.first || s.checked ? 0 : -1);
    Bf(() => n.disabled, (k) => {
      s.disabled = k;
    }, { immediate: !0 }), Bf(() => n.value, (k) => {
      s.value = k;
    }, { immediate: !0 });
    const m = El("register", (k) => {
    }), v = El("blur", (k) => {
    }), N = El("select", (k) => {
    });
    return m(s), {
      labelId: f,
      tabindex: h,
      vm: s,
      blur: v,
      click: () => {
        N(s);
      },
      input: i,
      id: l
    };
  },
  components: {
    FeatherRipple: yn
  }
}), EE = (n) => (gE("data-v-24790cf0"), n = n(), ZE(), n), FE = { class: "layout-container" }, WE = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], SE = { class: "radio hover focus" }, AE = /* @__PURE__ */ EE(() => /* @__PURE__ */ sn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ sn("svg", { class: "dot" }, [
    /* @__PURE__ */ sn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), xE = ["id"];
function BE(n, i, r, l, s, f) {
  const h = Gh("feather-ripple");
  return Il(), Yh("div", FE, [
    sn("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: n.id,
      "aria-checked": n.vm.checked ? "true" : "false",
      "aria-disabled": n.vm.disabled ? "true" : "false",
      "aria-labelledby": n.labelId,
      tabindex: n.tabindex,
      onClick: i[0] || (i[0] = (...m) => n.click && n.click(...m)),
      onBlur: i[1] || (i[1] = (...m) => n.blur && n.blur(...m)),
      "data-ref-id": "feather-radio"
    }, [
      sn("div", SE, [
        AE,
        n.vm.disabled ? ME("", !0) : (Il(), NE(h, {
          key: 0,
          center: ""
        }))
      ]),
      sn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: n.labelId
      }, [
        Ih(n.$slots, "default", {}, void 0, !0)
      ], 8, xE)
    ], 40, WE)
  ]);
}
var bi = /* @__PURE__ */ Hh(bE, [["render", BE], ["__scopeId", "data-v-24790cf0"]]);
const CE = Oh(Vi({}, ds), {
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
}), DE = {
  "update:modelValue": (n) => !0,
  blur: (n) => !0
}, QE = zh({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: CE,
  emits: DE,
  setup(n, i) {
    fs(n);
    const r = Fl(n, "error"), l = Fl(n, "modelValue"), s = Kr(() => ve("feather-input-description")), f = Kr(() => {
      const h = Oh(Vi({}, i.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return h["aria-invalid"] || (h["aria-invalid"] = !!r.value), h;
    });
    return Vi(Vi({
      descriptionId: s,
      attrs: f
    }, Mh(l, i.emit, n.label, n.schema, Fl(n, "error"))), us(i.attrs));
  },
  components: {
    InputSubText: ss
  }
}), OE = ["for"], zE = ["id"];
function GE(n, i, r, l, s, f) {
  const h = Gh("InputSubText");
  return Il(), Yh("div", Cf(n.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: n.vertical }]
  }), [
    sn("label", {
      for: n.groupId,
      class: "group-label"
    }, JE(n.label), 9, OE),
    sn("div", Cf(n.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: n.groupId,
      onKeydown: i[0] || (i[0] = (...m) => n.keydown && n.keydown(...m))
    }), [
      Ih(n.$slots, "default", {}, void 0, !0)
    ], 16, zE),
    kE(h, { id: n.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Ph = /* @__PURE__ */ Hh(QE, [["render", GE], ["__scopeId", "data-v-6775aeb9"]]);
const YE = window.Vue.openBlock, IE = window.Vue.createElementBlock, HE = window.Vue.createStaticVNode;
var PE = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const jE = {}, XE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _E = /* @__PURE__ */ HE('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), LE = [
  _E
];
function qE(n, i) {
  return YE(), IE("svg", XE, LE);
}
var KE = /* @__PURE__ */ PE(jE, [["render", qE]]);
const $E = window.Vue.openBlock, eF = window.Vue.createElementBlock, tF = window.Vue.createStaticVNode;
var nF = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const rF = {}, aF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, iF = /* @__PURE__ */ tF('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), oF = [
  iF
];
function lF(n, i) {
  return $E(), eF("svg", aF, oF);
}
var sF = /* @__PURE__ */ nF(rF, [["render", lF]]);
const cF = window.Vue.openBlock, uF = window.Vue.createElementBlock, dF = window.Vue.createElementVNode;
var fF = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const hF = {}, pF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, mF = /* @__PURE__ */ dF("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), VF = [
  mF
];
function TF(n, i) {
  return cF(), uF("svg", pF, VF);
}
var vF = /* @__PURE__ */ fF(hF, [["render", TF]]);
const UF = window.Vue.openBlock, wF = window.Vue.createElementBlock, RF = window.Vue.createStaticVNode;
var NF = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const MF = {}, gF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZF = /* @__PURE__ */ RF('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), JF = [
  ZF
];
function kF(n, i) {
  return UF(), wF("svg", gF, JF);
}
var yF = /* @__PURE__ */ NF(MF, [["render", kF]]);
const bF = window.Vue.openBlock, EF = window.Vue.createElementBlock, FF = window.Vue.createElementVNode;
var WF = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const SF = {}, AF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xF = /* @__PURE__ */ FF("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), BF = [
  xF
];
function CF(n, i) {
  return bF(), EF("svg", AF, BF);
}
var DF = /* @__PURE__ */ WF(SF, [["render", CF]]);
const jh = () => window.VRouter || vs, QF = window.Vue.defineComponent, Te = window.Vue.createElementVNode, na = window.Vue.createTextVNode, Ge = window.Vue.unref, Yt = window.Vue.createVNode, li = window.Vue.withCtx, Df = window.Vue.openBlock, Qf = window.Vue.createElementBlock, OF = window.Vue.createCommentVNode, zF = window.Vue.pushScopeId, GF = window.Vue.popScopeId, gt = (n) => (zF("data-v-0fd6b0cd"), n = n(), GF(), n), YF = { class: "container" }, IF = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("div", { class: "title" }, "ALEC", -1)), HF = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("div", { class: "description" }, [
  /* @__PURE__ */ na(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Te("br"),
  /* @__PURE__ */ Te("strong", null, "Our goal"),
  /* @__PURE__ */ na(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), PF = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("h3", null, "Key Benefits:", -1)), jF = { class: "list" }, XF = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), _F = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("span", null, "Assist in root cause analysis.", -1)), LF = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), qF = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("span", null, "Easy configuration.", -1)), KF = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), $F = {
  key: 0,
  class: "optin"
}, eW = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("h3", null, "Enable ALEC for more precise results:", -1)), tW = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), nW = { class: "choices" }, rW = /* @__PURE__ */ gt(() => /* @__PURE__ */ Te("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), aW = /* @__PURE__ */ na("Yes"), iW = /* @__PURE__ */ na("No"), oW = /* @__PURE__ */ na(" Continue "), lW = window.Vue.ref, sW = /* @__PURE__ */ QF({
  __name: "WelcomePage",
  setup(n) {
    const i = la(), r = jh(), l = lW(!0), s = () => {
      const f = Boolean(l.value);
      i.savePermission(f), f ? r.push({ name: "configuration" }) : r.push({ name: "situations" });
    };
    return (f, h) => (Df(), Qf("div", YF, [
      IF,
      HF,
      Te("div", null, [
        PF,
        Te("div", jF, [
          Te("div", null, [
            Yt(Ge(at), {
              icon: Ge(yF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            XF
          ]),
          Te("div", null, [
            Yt(Ge(at), {
              icon: Ge(vF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            _F
          ]),
          Te("div", null, [
            Yt(Ge(at), {
              icon: Ge(DF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            LF
          ]),
          Te("div", null, [
            Yt(Ge(at), {
              icon: Ge(KE),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            qF
          ]),
          Te("div", null, [
            Yt(Ge(at), {
              icon: Ge(sF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            KF
          ])
        ])
      ]),
      Ge(i).isAdmin ? (Df(), Qf("div", $F, [
        eW,
        tW,
        Te("div", nW, [
          rW,
          Yt(Ge(Ph), {
            horizontal: "",
            modelValue: l.value,
            "onUpdate:modelValue": h[0] || (h[0] = (m) => l.value = m),
            label: ""
          }, {
            default: li(() => [
              Yt(Ge(bi), { value: !0 }, {
                default: li(() => [
                  aW
                ]),
                _: 1
              }),
              Yt(Ge(bi), { value: !1 }, {
                default: li(() => [
                  iW
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : OF("", !0),
      Yt(Ge(yi), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: li(() => [
          oW
        ]),
        _: 1
      })
    ]));
  }
});
const cW = /* @__PURE__ */ _e(sW, [["__scopeId", "data-v-0fd6b0cd"]]), uW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", dW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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";
var fW = Object.defineProperty, hW = Object.defineProperties, pW = Object.getOwnPropertyDescriptors, Of = Object.getOwnPropertySymbols, mW = Object.prototype.hasOwnProperty, VW = Object.prototype.propertyIsEnumerable, zf = (n, i, r) => i in n ? fW(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Hl = (n, i) => {
  for (var r in i || (i = {}))
    mW.call(i, r) && zf(n, r, i[r]);
  if (Of)
    for (var r of Of(i))
      VW.call(i, r) && zf(n, r, i[r]);
  return n;
}, Xh = (n, i) => hW(n, pW(i));
const _h = window.Vue.defineComponent, TW = window.Vue.inject, vW = window.Vue.resolveComponent, Wl = window.Vue.openBlock, Gf = window.Vue.createElementBlock, ar = window.Vue.createElementVNode, UW = window.Vue.createBlock, Yf = window.Vue.createCommentVNode, wW = window.Vue.renderSlot, RW = window.Vue.pushScopeId, NW = window.Vue.popScopeId, Sl = window.Vue.toRef, si = window.Vue.computed, MW = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var gW = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const ZW = {
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
}, JW = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  indeterminate: (n) => !0
}, kW = _h({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: JW,
  props: ZW,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: TW("registerCheckbox", (i) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ve("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ve("checkbox-label");
    }
  },
  watch: {
    indeterminate: {
      handler(n) {
        this.$emit("update:modelValue", void 0), this.$emit("indeterminate", n);
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
    click(n) {
      this.focus(), this.updateValue(), this.$emit("click", n);
    },
    keydown(n) {
      (n.keyCode === Ne.SPACE || n.keyCode === Ne.ENTER) && this.updateValue(), n.keyCode === Ne.SPACE && n.preventDefault();
    }
  },
  components: {
    FeatherRipple: yn
  }
}), yW = (n) => (RW("data-v-a7af27e2"), n = n(), NW(), n), bW = { class: "layout-container" }, EW = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], FW = { class: "checkbox hover focus" }, WW = /* @__PURE__ */ yW(() => /* @__PURE__ */ ar("div", { class: "box" }, [
  /* @__PURE__ */ ar("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ ar("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ ar("div", { class: "indeterminate" })
], -1)), SW = ["id", "for"];
function AW(n, i, r, l, s, f) {
  const h = vW("feather-ripple");
  return Wl(), Gf("div", bW, [
    ar("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: i[0] || (i[0] = (...m) => n.click && n.click(...m)),
      onKeydown: i[1] || (i[1] = (...m) => n.keydown && n.keydown(...m)),
      "aria-checked": n.modelValue ? "true" : n.indeterminate ? "mixed" : "false",
      "aria-disabled": n.disabled,
      "aria-labelledby": n.labelId,
      "aria-label": n.label,
      id: n.inputId,
      tabindex: n.noFocus ? -1 : 0,
      ref: "input",
      role: "checkbox",
      "data-ref-id": "feather-checkbox"
    }, [
      ar("div", FW, [
        WW,
        n.disabled ? Yf("", !0) : (Wl(), UW(h, {
          key: 0,
          center: ""
        }))
      ]),
      n.label ? Yf("", !0) : (Wl(), Gf("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: n.labelId,
        for: n.inputId
      }, [
        wW(n.$slots, "default", {}, void 0, !0)
      ], 8, SW))
    ], 40, EW)
  ]);
}
var xW = /* @__PURE__ */ gW(kW, [["render", AW], ["__scopeId", "data-v-a7af27e2"]]);
const BW = Xh(Hl({}, ds), {
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
_h({
  props: BW,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(n, i) {
    fs(n);
    const r = Sl(n, "error"), l = si(() => ve("feather-checkbox-group")), s = si(() => ve("feather-input-description")), f = si(() => ve("feather-input-label")), h = si(() => {
      const M = JSON.parse(JSON.stringify(i.attrs));
      return M["aria-invalid"] || (M["aria-invalid"] = !!r.value), Xh(Hl({}, M), {
        class: "",
        "aria-describedby": s.value
      });
    }), m = MW(l.value), { validate: v } = cs(m, Sl(n, "modelValue"), n.label, n.schema, Sl(n, "error"));
    return Hl({
      groupId: l,
      inputId: m,
      descriptionId: s,
      labelId: f,
      attrs: h,
      validate: v,
      registerCheckbox: (M) => {
        M && m.value === l.value && (m.value = M);
      }
    }, us(i.attrs));
  },
  components: {
    InputSubText: ss
  }
});
const CW = window.Vue.defineComponent, Je = window.Vue.createElementVNode, Pl = window.Vue.createTextVNode, rn = window.Vue.unref, Pr = window.Vue.withCtx, jr = window.Vue.createVNode, DW = window.Vue.openBlock, QW = window.Vue.createElementBlock, OW = window.Vue.pushScopeId, zW = window.Vue.popScopeId, Fn = (n) => (OW("data-v-9a5b5f4e"), n = n(), zW(), n), GW = { class: "container" }, YW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Je("h2", null, "Configuration", -1)), IW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Je("p", null, [
  /* @__PURE__ */ Pl(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Je("br"),
  /* @__PURE__ */ Pl(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Je("strong", null, [
    /* @__PURE__ */ Je("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), HW = { class: "radio-content" }, PW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Je("strong", { class: "title" }, "Clustering", -1)), jW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Je("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), XW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Je("img", {
  class: "img",
  src: uW
}, null, -1)), _W = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Je("div", { class: "hellinger" }, [
  /* @__PURE__ */ Je("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Je("br"),
  /* @__PURE__ */ Je("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), LW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Je("div", { class: "radio-content" }, [
  /* @__PURE__ */ Je("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Je("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Je("img", {
    class: "img img2",
    src: dW
  })
], -1)), qW = /* @__PURE__ */ Pl(" Continue "), If = window.Vue.ref, KW = /* @__PURE__ */ CW({
  __name: "ConfigurationPage",
  setup(n) {
    const i = la(), r = jh(), l = If(!1), s = If(nr.ENGINE_DBSCAN), f = () => {
      Uh(i.allowSave), bg(s.value, l.value), r.push({ name: "situations" });
    };
    return (h, m) => (DW(), QW("div", GW, [
      YW,
      IW,
      Je("div", null, [
        jr(rn(Ph), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": m[1] || (m[1] = (v) => s.value = v)
        }, {
          default: Pr(() => [
            jr(rn(bi), {
              class: "radio",
              value: rn(nr).ENGINE_DBSCAN
            }, {
              default: Pr(() => [
                Je("div", HW, [
                  PW,
                  jW,
                  XW,
                  jr(rn(xW), {
                    modelValue: l.value,
                    "onUpdate:modelValue": m[0] || (m[0] = (v) => l.value = v),
                    disabled: s.value !== rn(nr).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Pr(() => [
                      _W
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            jr(rn(bi), {
              class: "radio",
              value: rn(nr).ENGINE_DEEP_LEARNING
            }, {
              default: Pr(() => [
                LW
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      jr(rn(yi), {
        primary: "",
        class: "btn",
        onClick: m[2] || (m[2] = () => f())
      }, {
        default: Pr(() => [
          qW
        ]),
        _: 1
      })
    ]));
  }
});
const $W = /* @__PURE__ */ _e(KW, [["__scopeId", "data-v-9a5b5f4e"]]), eS = window.VueRouter.createRouter, tS = window.VueRouter.createWebHistory, Al = async () => {
  const n = window.VRouter || vs, i = la();
  i.userId || (await i.getUserRole(), await i.getAlecInfo(), n.push({ name: "home" }));
}, Lh = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (n) => {
      const i = window.VRouter || vs, r = la();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? i.push({ name: "welcome", params: n.params }) : i.push({ name: "situations", params: n.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Al(),
    component: cW
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Al(),
    component: $W
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Al(),
    component: pE
  }
], Hf = window.VRouter;
if (Hf)
  for (const n of Lh) {
    const { path: i, name: r, component: l, beforeEnter: s } = n;
    Hf.addRoute("Plugin", {
      path: i.slice(1),
      name: r,
      component: l,
      beforeEnter: s
    });
  }
const vs = eS({
  history: tS(),
  routes: Lh
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = LU;

const Ce = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
}, _w = {}, Lw = window.Vue.resolveComponent, qw = window.Vue.createVNode, Kw = window.Vue.openBlock, $w = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const eU = { class: "main" };
function tU(n, a) {
  const r = Lw("router-view");
  return Kw(), $w("div", eU, [
    qw(r)
  ]);
}
const nU = /* @__PURE__ */ Ce(_w, [["render", tU], ["__scopeId", "data-v-5d32d140"]]), rU = window.Vue.defineComponent, aU = window.Vue.openBlock, iU = window.Vue.createBlock, oU = /* @__PURE__ */ rU({
  __name: "App",
  setup(n) {
    return (a, r) => (aU(), iU(nU));
  }
});
var Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lU(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var th = { exports: {} }, ql = { exports: {} }, nh = function(a, r) {
  return function() {
    for (var s = new Array(arguments.length), f = 0; f < s.length; f++)
      s[f] = arguments[f];
    return a.apply(r, s);
  };
}, sU = nh, Kl = Object.prototype.toString, $l = function(n) {
  return function(a) {
    var r = Kl.call(a);
    return n[r] || (n[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function bn(n) {
  return n = n.toLowerCase(), function(r) {
    return $l(r) === n;
  };
}
function es(n) {
  return Array.isArray(n);
}
function mi(n) {
  return typeof n > "u";
}
function cU(n) {
  return n !== null && !mi(n) && n.constructor !== null && !mi(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
var rh = bn("ArrayBuffer");
function uU(n) {
  var a;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(n) : a = n && n.buffer && rh(n.buffer), a;
}
function dU(n) {
  return typeof n == "string";
}
function fU(n) {
  return typeof n == "number";
}
function ah(n) {
  return n !== null && typeof n == "object";
}
function si(n) {
  if ($l(n) !== "object")
    return !1;
  var a = Object.getPrototypeOf(n);
  return a === null || a === Object.prototype;
}
var hU = bn("Date"), pU = bn("File"), mU = bn("Blob"), VU = bn("FileList");
function ts(n) {
  return Kl.call(n) === "[object Function]";
}
function TU(n) {
  return ah(n) && ts(n.pipe);
}
function vU(n) {
  var a = "[object FormData]";
  return n && (typeof FormData == "function" && n instanceof FormData || Kl.call(n) === a || ts(n.toString) && n.toString() === a);
}
var wU = bn("URLSearchParams");
function UU(n) {
  return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
}
function RU() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function ns(n, a) {
  if (!(n === null || typeof n > "u"))
    if (typeof n != "object" && (n = [n]), es(n))
      for (var r = 0, l = n.length; r < l; r++)
        a.call(null, n[r], r, n);
    else
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && a.call(null, n[s], s, n);
}
function Bl() {
  var n = {};
  function a(s, f) {
    si(n[f]) && si(s) ? n[f] = Bl(n[f], s) : si(s) ? n[f] = Bl({}, s) : es(s) ? n[f] = s.slice() : n[f] = s;
  }
  for (var r = 0, l = arguments.length; r < l; r++)
    ns(arguments[r], a);
  return n;
}
function NU(n, a, r) {
  return ns(a, function(s, f) {
    r && typeof s == "function" ? n[f] = sU(s, r) : n[f] = s;
  }), n;
}
function MU(n) {
  return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n;
}
function gU(n, a, r, l) {
  n.prototype = Object.create(a.prototype, l), n.prototype.constructor = n, r && Object.assign(n.prototype, r);
}
function ZU(n, a, r) {
  var l, s, f, h = {};
  a = a || {};
  do {
    for (l = Object.getOwnPropertyNames(n), s = l.length; s-- > 0; )
      f = l[s], h[f] || (a[f] = n[f], h[f] = !0);
    n = Object.getPrototypeOf(n);
  } while (n && (!r || r(n, a)) && n !== Object.prototype);
  return a;
}
function JU(n, a, r) {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= a.length;
  var l = n.indexOf(a, r);
  return l !== -1 && l === r;
}
function kU(n) {
  if (!n)
    return null;
  var a = n.length;
  if (mi(a))
    return null;
  for (var r = new Array(a); a-- > 0; )
    r[a] = n[a];
  return r;
}
var yU = function(n) {
  return function(a) {
    return n && a instanceof n;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Fe = {
  isArray: es,
  isArrayBuffer: rh,
  isBuffer: cU,
  isFormData: vU,
  isArrayBufferView: uU,
  isString: dU,
  isNumber: fU,
  isObject: ah,
  isPlainObject: si,
  isUndefined: mi,
  isDate: hU,
  isFile: pU,
  isBlob: mU,
  isFunction: ts,
  isStream: TU,
  isURLSearchParams: wU,
  isStandardBrowserEnv: RU,
  forEach: ns,
  merge: Bl,
  extend: NU,
  trim: UU,
  stripBOM: MU,
  inherits: gU,
  toFlatObject: ZU,
  kindOf: $l,
  kindOfTest: bn,
  endsWith: JU,
  toArray: kU,
  isTypedArray: yU,
  isFileList: VU
}, jn = Fe;
function ed(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var ih = function(a, r, l) {
  if (!r)
    return a;
  var s;
  if (l)
    s = l(r);
  else if (jn.isURLSearchParams(r))
    s = r.toString();
  else {
    var f = [];
    jn.forEach(r, function(T, N) {
      T === null || typeof T > "u" || (jn.isArray(T) ? N = N + "[]" : T = [T], jn.forEach(T, function(y) {
        jn.isDate(y) ? y = y.toISOString() : jn.isObject(y) && (y = JSON.stringify(y)), f.push(ed(N) + "=" + ed(y));
      }));
    }), s = f.join("&");
  }
  if (s) {
    var h = a.indexOf("#");
    h !== -1 && (a = a.slice(0, h)), a += (a.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return a;
}, bU = Fe;
function bi() {
  this.handlers = [];
}
bi.prototype.use = function(a, r, l) {
  return this.handlers.push({
    fulfilled: a,
    rejected: r,
    synchronous: l ? l.synchronous : !1,
    runWhen: l ? l.runWhen : null
  }), this.handlers.length - 1;
};
bi.prototype.eject = function(a) {
  this.handlers[a] && (this.handlers[a] = null);
};
bi.prototype.forEach = function(a) {
  bU.forEach(this.handlers, function(l) {
    l !== null && a(l);
  });
};
var EU = bi, FU = Fe, SU = function(a, r) {
  FU.forEach(a, function(s, f) {
    f !== r && f.toUpperCase() === r.toUpperCase() && (a[r] = s, delete a[f]);
  });
}, oh = Fe;
function ar(n, a, r, l, s) {
  Error.call(this), this.message = n, this.name = "AxiosError", a && (this.code = a), r && (this.config = r), l && (this.request = l), s && (this.response = s);
}
oh.inherits(ar, Error, {
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
var lh = ar.prototype, sh = {};
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
  sh[n] = { value: n };
});
Object.defineProperties(ar, sh);
Object.defineProperty(lh, "isAxiosError", { value: !0 });
ar.from = function(n, a, r, l, s, f) {
  var h = Object.create(lh);
  return oh.toFlatObject(n, h, function(T) {
    return T !== Error.prototype;
  }), ar.call(h, n.message, a, r, l, s), h.name = n.name, f && Object.assign(h, f), h;
};
var lr = ar, ch = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Rt = Fe;
function WU(n, a) {
  a = a || new FormData();
  var r = [];
  function l(f) {
    return f === null ? "" : Rt.isDate(f) ? f.toISOString() : Rt.isArrayBuffer(f) || Rt.isTypedArray(f) ? typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function s(f, h) {
    if (Rt.isPlainObject(f) || Rt.isArray(f)) {
      if (r.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h);
      r.push(f), Rt.forEach(f, function(T, N) {
        if (!Rt.isUndefined(T)) {
          var Z = h ? h + "." + N : N, y;
          if (T && !h && typeof T == "object") {
            if (Rt.endsWith(N, "{}"))
              T = JSON.stringify(T);
            else if (Rt.endsWith(N, "[]") && (y = Rt.toArray(T))) {
              y.forEach(function(k) {
                !Rt.isUndefined(k) && a.append(Z, l(k));
              });
              return;
            }
          }
          s(T, Z);
        }
      }), r.pop();
    } else
      a.append(h, l(f));
  }
  return s(n), a;
}
var uh = WU, nl, td;
function AU() {
  if (td)
    return nl;
  td = 1;
  var n = lr;
  return nl = function(r, l, s) {
    var f = s.config.validateStatus;
    !s.status || !f || f(s.status) ? r(s) : l(new n(
      "Request failed with status code " + s.status,
      [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, nl;
}
var rl, nd;
function xU() {
  if (nd)
    return rl;
  nd = 1;
  var n = Fe;
  return rl = n.isStandardBrowserEnv() ? function() {
    return {
      write: function(l, s, f, h, p, T) {
        var N = [];
        N.push(l + "=" + encodeURIComponent(s)), n.isNumber(f) && N.push("expires=" + new Date(f).toGMTString()), n.isString(h) && N.push("path=" + h), n.isString(p) && N.push("domain=" + p), T === !0 && N.push("secure"), document.cookie = N.join("; ");
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
  }(), rl;
}
var BU = function(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}, CU = function(a, r) {
  return r ? a.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : a;
}, DU = BU, QU = CU, dh = function(a, r) {
  return a && !DU(r) ? QU(a, r) : r;
}, al, rd;
function OU() {
  if (rd)
    return al;
  rd = 1;
  var n = Fe, a = [
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
  return al = function(l) {
    var s = {}, f, h, p;
    return l && n.forEach(l.split(`
`), function(N) {
      if (p = N.indexOf(":"), f = n.trim(N.substr(0, p)).toLowerCase(), h = n.trim(N.substr(p + 1)), f) {
        if (s[f] && a.indexOf(f) >= 0)
          return;
        f === "set-cookie" ? s[f] = (s[f] ? s[f] : []).concat([h]) : s[f] = s[f] ? s[f] + ", " + h : h;
      }
    }), s;
  }, al;
}
var il, ad;
function zU() {
  if (ad)
    return il;
  ad = 1;
  var n = Fe;
  return il = n.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), l = document.createElement("a"), s;
    function f(h) {
      var p = h;
      return r && (l.setAttribute("href", p), p = l.href), l.setAttribute("href", p), {
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
    return s = f(window.location.href), function(p) {
      var T = n.isString(p) ? f(p) : p;
      return T.protocol === s.protocol && T.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), il;
}
var ol, id;
function Ei() {
  if (id)
    return ol;
  id = 1;
  var n = lr, a = Fe;
  function r(l) {
    n.call(this, l == null ? "canceled" : l, n.ERR_CANCELED), this.name = "CanceledError";
  }
  return a.inherits(r, n, {
    __CANCEL__: !0
  }), ol = r, ol;
}
var ll, od;
function GU() {
  return od || (od = 1, ll = function(a) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
    return r && r[1] || "";
  }), ll;
}
var sl, ld;
function sd() {
  if (ld)
    return sl;
  ld = 1;
  var n = Fe, a = AU(), r = xU(), l = ih, s = dh, f = OU(), h = zU(), p = ch, T = lr, N = Ei(), Z = GU();
  return sl = function(k) {
    return new Promise(function(E, W) {
      var C = k.data, B = k.headers, j = k.responseType, z;
      function $() {
        k.cancelToken && k.cancelToken.unsubscribe(z), k.signal && k.signal.removeEventListener("abort", z);
      }
      n.isFormData(C) && n.isStandardBrowserEnv() && delete B["Content-Type"];
      var b = new XMLHttpRequest();
      if (k.auth) {
        var ne = k.auth.username || "", q = k.auth.password ? unescape(encodeURIComponent(k.auth.password)) : "";
        B.Authorization = "Basic " + btoa(ne + ":" + q);
      }
      var X = s(k.baseURL, k.url);
      b.open(k.method.toUpperCase(), l(X, k.params, k.paramsSerializer), !0), b.timeout = k.timeout;
      function We() {
        if (!!b) {
          var fe = "getAllResponseHeaders" in b ? f(b.getAllResponseHeaders()) : null, pe = !j || j === "text" || j === "json" ? b.responseText : b.response, we = {
            data: pe,
            status: b.status,
            statusText: b.statusText,
            headers: fe,
            config: k,
            request: b
          };
          a(function(Je) {
            E(Je), $();
          }, function(Je) {
            W(Je), $();
          }, we), b = null;
        }
      }
      if ("onloadend" in b ? b.onloadend = We : b.onreadystatechange = function() {
        !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(We);
      }, b.onabort = function() {
        !b || (W(new T("Request aborted", T.ECONNABORTED, k, b)), b = null);
      }, b.onerror = function() {
        W(new T("Network Error", T.ERR_NETWORK, k, b, b)), b = null;
      }, b.ontimeout = function() {
        var pe = k.timeout ? "timeout of " + k.timeout + "ms exceeded" : "timeout exceeded", we = k.transitional || p;
        k.timeoutErrorMessage && (pe = k.timeoutErrorMessage), W(new T(
          pe,
          we.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
          k,
          b
        )), b = null;
      }, n.isStandardBrowserEnv()) {
        var He = (k.withCredentials || h(X)) && k.xsrfCookieName ? r.read(k.xsrfCookieName) : void 0;
        He && (B[k.xsrfHeaderName] = He);
      }
      "setRequestHeader" in b && n.forEach(B, function(pe, we) {
        typeof C > "u" && we.toLowerCase() === "content-type" ? delete B[we] : b.setRequestHeader(we, pe);
      }), n.isUndefined(k.withCredentials) || (b.withCredentials = !!k.withCredentials), j && j !== "json" && (b.responseType = k.responseType), typeof k.onDownloadProgress == "function" && b.addEventListener("progress", k.onDownloadProgress), typeof k.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", k.onUploadProgress), (k.cancelToken || k.signal) && (z = function(fe) {
        !b || (W(!fe || fe && fe.type ? new N() : fe), b.abort(), b = null);
      }, k.cancelToken && k.cancelToken.subscribe(z), k.signal && (k.signal.aborted ? z() : k.signal.addEventListener("abort", z))), C || (C = null);
      var de = Z(X);
      if (de && ["http", "https", "file"].indexOf(de) === -1) {
        W(new T("Unsupported protocol " + de + ":", T.ERR_BAD_REQUEST, k));
        return;
      }
      b.send(C);
    });
  }, sl;
}
var cl, cd;
function YU() {
  return cd || (cd = 1, cl = null), cl;
}
var ge = Fe, ud = SU, dd = lr, IU = ch, HU = uh, PU = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function fd(n, a) {
  !ge.isUndefined(n) && ge.isUndefined(n["Content-Type"]) && (n["Content-Type"] = a);
}
function jU() {
  var n;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = sd()), n;
}
function XU(n, a, r) {
  if (ge.isString(n))
    try {
      return (a || JSON.parse)(n), ge.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (r || JSON.stringify)(n);
}
var Fi = {
  transitional: IU,
  adapter: jU(),
  transformRequest: [function(a, r) {
    if (ud(r, "Accept"), ud(r, "Content-Type"), ge.isFormData(a) || ge.isArrayBuffer(a) || ge.isBuffer(a) || ge.isStream(a) || ge.isFile(a) || ge.isBlob(a))
      return a;
    if (ge.isArrayBufferView(a))
      return a.buffer;
    if (ge.isURLSearchParams(a))
      return fd(r, "application/x-www-form-urlencoded;charset=utf-8"), a.toString();
    var l = ge.isObject(a), s = r && r["Content-Type"], f;
    if ((f = ge.isFileList(a)) || l && s === "multipart/form-data") {
      var h = this.env && this.env.FormData;
      return HU(f ? { "files[]": a } : a, h && new h());
    } else if (l || s === "application/json")
      return fd(r, "application/json"), XU(a);
    return a;
  }],
  transformResponse: [function(a) {
    var r = this.transitional || Fi.transitional, l = r && r.silentJSONParsing, s = r && r.forcedJSONParsing, f = !l && this.responseType === "json";
    if (f || s && ge.isString(a) && a.length)
      try {
        return JSON.parse(a);
      } catch (h) {
        if (f)
          throw h.name === "SyntaxError" ? dd.from(h, dd.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    return a;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: YU()
  },
  validateStatus: function(a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
ge.forEach(["delete", "get", "head"], function(a) {
  Fi.headers[a] = {};
});
ge.forEach(["post", "put", "patch"], function(a) {
  Fi.headers[a] = ge.merge(PU);
});
var rs = Fi, _U = Fe, LU = rs, qU = function(a, r, l) {
  var s = this || LU;
  return _U.forEach(l, function(h) {
    a = h.call(s, a, r);
  }), a;
}, ul, hd;
function fh() {
  return hd || (hd = 1, ul = function(a) {
    return !!(a && a.__CANCEL__);
  }), ul;
}
var pd = Fe, dl = qU, KU = fh(), $U = rs, eR = Ei();
function fl(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new eR();
}
var tR = function(a) {
  fl(a), a.headers = a.headers || {}, a.data = dl.call(
    a,
    a.data,
    a.headers,
    a.transformRequest
  ), a.headers = pd.merge(
    a.headers.common || {},
    a.headers[a.method] || {},
    a.headers
  ), pd.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(s) {
      delete a.headers[s];
    }
  );
  var r = a.adapter || $U.adapter;
  return r(a).then(function(s) {
    return fl(a), s.data = dl.call(
      a,
      s.data,
      s.headers,
      a.transformResponse
    ), s;
  }, function(s) {
    return KU(s) || (fl(a), s && s.response && (s.response.data = dl.call(
      a,
      s.response.data,
      s.response.headers,
      a.transformResponse
    ))), Promise.reject(s);
  });
}, at = Fe, hh = function(a, r) {
  r = r || {};
  var l = {};
  function s(Z, y) {
    return at.isPlainObject(Z) && at.isPlainObject(y) ? at.merge(Z, y) : at.isPlainObject(y) ? at.merge({}, y) : at.isArray(y) ? y.slice() : y;
  }
  function f(Z) {
    if (at.isUndefined(r[Z])) {
      if (!at.isUndefined(a[Z]))
        return s(void 0, a[Z]);
    } else
      return s(a[Z], r[Z]);
  }
  function h(Z) {
    if (!at.isUndefined(r[Z]))
      return s(void 0, r[Z]);
  }
  function p(Z) {
    if (at.isUndefined(r[Z])) {
      if (!at.isUndefined(a[Z]))
        return s(void 0, a[Z]);
    } else
      return s(void 0, r[Z]);
  }
  function T(Z) {
    if (Z in r)
      return s(a[Z], r[Z]);
    if (Z in a)
      return s(void 0, a[Z]);
  }
  var N = {
    url: h,
    method: h,
    data: h,
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
    validateStatus: T
  };
  return at.forEach(Object.keys(a).concat(Object.keys(r)), function(y) {
    var k = N[y] || f, A = k(y);
    at.isUndefined(A) && k !== T || (l[y] = A);
  }), l;
}, hl, md;
function ph() {
  return md || (md = 1, hl = {
    version: "0.27.2"
  }), hl;
}
var nR = ph().version, rn = lr, as = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, a) {
  as[n] = function(l) {
    return typeof l === n || "a" + (a < 1 ? "n " : " ") + n;
  };
});
var Vd = {};
as.transitional = function(a, r, l) {
  function s(f, h) {
    return "[Axios v" + nR + "] Transitional option '" + f + "'" + h + (l ? ". " + l : "");
  }
  return function(f, h, p) {
    if (a === !1)
      throw new rn(
        s(h, " has been removed" + (r ? " in " + r : "")),
        rn.ERR_DEPRECATED
      );
    return r && !Vd[h] && (Vd[h] = !0, console.warn(
      s(
        h,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), a ? a(f, h, p) : !0;
  };
};
function rR(n, a, r) {
  if (typeof n != "object")
    throw new rn("options must be an object", rn.ERR_BAD_OPTION_VALUE);
  for (var l = Object.keys(n), s = l.length; s-- > 0; ) {
    var f = l[s], h = a[f];
    if (h) {
      var p = n[f], T = p === void 0 || h(p, f, n);
      if (T !== !0)
        throw new rn("option " + f + " must be " + T, rn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new rn("Unknown option " + f, rn.ERR_BAD_OPTION);
  }
}
var aR = {
  assertOptions: rR,
  validators: as
}, mh = Fe, iR = ih, Td = EU, vd = tR, Si = hh, oR = dh, Vh = aR, Xn = Vh.validators;
function ir(n) {
  this.defaults = n, this.interceptors = {
    request: new Td(),
    response: new Td()
  };
}
ir.prototype.request = function(a, r) {
  typeof a == "string" ? (r = r || {}, r.url = a) : r = a || {}, r = Si(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var l = r.transitional;
  l !== void 0 && Vh.assertOptions(l, {
    silentJSONParsing: Xn.transitional(Xn.boolean),
    forcedJSONParsing: Xn.transitional(Xn.boolean),
    clarifyTimeoutError: Xn.transitional(Xn.boolean)
  }, !1);
  var s = [], f = !0;
  this.interceptors.request.forEach(function(A) {
    typeof A.runWhen == "function" && A.runWhen(r) === !1 || (f = f && A.synchronous, s.unshift(A.fulfilled, A.rejected));
  });
  var h = [];
  this.interceptors.response.forEach(function(A) {
    h.push(A.fulfilled, A.rejected);
  });
  var p;
  if (!f) {
    var T = [vd, void 0];
    for (Array.prototype.unshift.apply(T, s), T = T.concat(h), p = Promise.resolve(r); T.length; )
      p = p.then(T.shift(), T.shift());
    return p;
  }
  for (var N = r; s.length; ) {
    var Z = s.shift(), y = s.shift();
    try {
      N = Z(N);
    } catch (k) {
      y(k);
      break;
    }
  }
  try {
    p = vd(N);
  } catch (k) {
    return Promise.reject(k);
  }
  for (; h.length; )
    p = p.then(h.shift(), h.shift());
  return p;
};
ir.prototype.getUri = function(a) {
  a = Si(this.defaults, a);
  var r = oR(a.baseURL, a.url);
  return iR(r, a.params, a.paramsSerializer);
};
mh.forEach(["delete", "get", "head", "options"], function(a) {
  ir.prototype[a] = function(r, l) {
    return this.request(Si(l || {}, {
      method: a,
      url: r,
      data: (l || {}).data
    }));
  };
});
mh.forEach(["post", "put", "patch"], function(a) {
  function r(l) {
    return function(f, h, p) {
      return this.request(Si(p || {}, {
        method: a,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: h
      }));
    };
  }
  ir.prototype[a] = r(), ir.prototype[a + "Form"] = r(!0);
});
var lR = ir, pl, wd;
function sR() {
  if (wd)
    return pl;
  wd = 1;
  var n = Ei();
  function a(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var l;
    this.promise = new Promise(function(h) {
      l = h;
    });
    var s = this;
    this.promise.then(function(f) {
      if (!!s._listeners) {
        var h, p = s._listeners.length;
        for (h = 0; h < p; h++)
          s._listeners[h](f);
        s._listeners = null;
      }
    }), this.promise.then = function(f) {
      var h, p = new Promise(function(T) {
        s.subscribe(T), h = T;
      }).then(f);
      return p.cancel = function() {
        s.unsubscribe(h);
      }, p;
    }, r(function(h) {
      s.reason || (s.reason = new n(h), l(s.reason));
    });
  }
  return a.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, a.prototype.subscribe = function(l) {
    if (this.reason) {
      l(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(l) : this._listeners = [l];
  }, a.prototype.unsubscribe = function(l) {
    if (!!this._listeners) {
      var s = this._listeners.indexOf(l);
      s !== -1 && this._listeners.splice(s, 1);
    }
  }, a.source = function() {
    var l, s = new a(function(h) {
      l = h;
    });
    return {
      token: s,
      cancel: l
    };
  }, pl = a, pl;
}
var ml, Ud;
function cR() {
  return Ud || (Ud = 1, ml = function(a) {
    return function(l) {
      return a.apply(null, l);
    };
  }), ml;
}
var Vl, Rd;
function uR() {
  if (Rd)
    return Vl;
  Rd = 1;
  var n = Fe;
  return Vl = function(r) {
    return n.isObject(r) && r.isAxiosError === !0;
  }, Vl;
}
var Nd = Fe, dR = nh, ci = lR, fR = hh, hR = rs;
function Th(n) {
  var a = new ci(n), r = dR(ci.prototype.request, a);
  return Nd.extend(r, ci.prototype, a), Nd.extend(r, a), r.create = function(s) {
    return Th(fR(n, s));
  }, r;
}
var qe = Th(hR);
qe.Axios = ci;
qe.CanceledError = Ei();
qe.CancelToken = sR();
qe.isCancel = fh();
qe.VERSION = ph().version;
qe.toFormData = uh;
qe.AxiosError = lr;
qe.Cancel = qe.CanceledError;
qe.all = function(a) {
  return Promise.all(a);
};
qe.spread = cR();
qe.isAxiosError = uR();
ql.exports = qe;
ql.exports.default = qe;
(function(n) {
  n.exports = ql.exports;
})(th);
const vh = /* @__PURE__ */ lU(th.exports), Cl = vh.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), sr = vh.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var Ie = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(n, a) {
  (function() {
    var r, l = "4.17.21", s = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", p = "Invalid `variable` option passed into `_.template`", T = "__lodash_hash_undefined__", N = 500, Z = "__lodash_placeholder__", y = 1, k = 2, A = 4, E = 1, W = 2, C = 1, B = 2, j = 4, z = 8, $ = 16, b = 32, ne = 64, q = 128, X = 256, We = 512, He = 30, de = "...", fe = 800, pe = 16, we = 1, ie = 2, Je = 3, ke = 1 / 0, De = 9007199254740991, ur = 17976931348623157e292, ia = 0 / 0, gt = 4294967295, lp = gt - 1, sp = gt >>> 1, cp = [
      ["ary", q],
      ["bind", C],
      ["bindKey", B],
      ["curry", z],
      ["curryRight", $],
      ["flip", We],
      ["partial", b],
      ["partialRight", ne],
      ["rearg", X]
    ], Fn = "[object Arguments]", oa = "[object Array]", up = "[object AsyncFunction]", dr = "[object Boolean]", fr = "[object Date]", dp = "[object DOMException]", la = "[object Error]", sa = "[object Function]", Ms = "[object GeneratorFunction]", mt = "[object Map]", hr = "[object Number]", fp = "[object Null]", Ft = "[object Object]", gs = "[object Promise]", hp = "[object Proxy]", pr = "[object RegExp]", Vt = "[object Set]", mr = "[object String]", ca = "[object Symbol]", pp = "[object Undefined]", Vr = "[object WeakMap]", mp = "[object WeakSet]", Tr = "[object ArrayBuffer]", Sn = "[object DataView]", Ai = "[object Float32Array]", xi = "[object Float64Array]", Bi = "[object Int8Array]", Ci = "[object Int16Array]", Di = "[object Int32Array]", Qi = "[object Uint8Array]", Oi = "[object Uint8ClampedArray]", zi = "[object Uint16Array]", Gi = "[object Uint32Array]", Vp = /\b__p \+= '';/g, Tp = /\b(__p \+=) '' \+/g, vp = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Zs = /&(?:amp|lt|gt|quot|#39);/g, Js = /[&<>"']/g, wp = RegExp(Zs.source), Up = RegExp(Js.source), Rp = /<%-([\s\S]+?)%>/g, Np = /<%([\s\S]+?)%>/g, ks = /<%=([\s\S]+?)%>/g, Mp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gp = /^\w*$/, Zp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yi = /[\\^$.*+?()[\]{}|]/g, Jp = RegExp(Yi.source), Ii = /^\s+/, kp = /\s/, yp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, bp = /\{\n\/\* \[wrapped with (.+)\] \*/, Ep = /,? & /, Fp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Sp = /[()=,{}\[\]\/\s]/, Wp = /\\(\\)?/g, Ap = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ys = /\w*$/, xp = /^[-+]0x[0-9a-f]+$/i, Bp = /^0b[01]+$/i, Cp = /^\[object .+?Constructor\]$/, Dp = /^0o[0-7]+$/i, Qp = /^(?:0|[1-9]\d*)$/, Op = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ua = /($^)/, zp = /['\n\r\u2028\u2029\\]/g, da = "\\ud800-\\udfff", Gp = "\\u0300-\\u036f", Yp = "\\ufe20-\\ufe2f", Ip = "\\u20d0-\\u20ff", bs = Gp + Yp + Ip, Es = "\\u2700-\\u27bf", Fs = "a-z\\xdf-\\xf6\\xf8-\\xff", Hp = "\\xac\\xb1\\xd7\\xf7", Pp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", jp = "\\u2000-\\u206f", Xp = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ss = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ws = "\\ufe0e\\ufe0f", As = Hp + Pp + jp + Xp, Hi = "['\u2019]", _p = "[" + da + "]", xs = "[" + As + "]", fa = "[" + bs + "]", Bs = "\\d+", Lp = "[" + Es + "]", Cs = "[" + Fs + "]", Ds = "[^" + da + As + Bs + Es + Fs + Ss + "]", Pi = "\\ud83c[\\udffb-\\udfff]", qp = "(?:" + fa + "|" + Pi + ")", Qs = "[^" + da + "]", ji = "(?:\\ud83c[\\udde6-\\uddff]){2}", Xi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Wn = "[" + Ss + "]", Os = "\\u200d", zs = "(?:" + Cs + "|" + Ds + ")", Kp = "(?:" + Wn + "|" + Ds + ")", Gs = "(?:" + Hi + "(?:d|ll|m|re|s|t|ve))?", Ys = "(?:" + Hi + "(?:D|LL|M|RE|S|T|VE))?", Is = qp + "?", Hs = "[" + Ws + "]?", $p = "(?:" + Os + "(?:" + [Qs, ji, Xi].join("|") + ")" + Hs + Is + ")*", em = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", tm = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ps = Hs + Is + $p, nm = "(?:" + [Lp, ji, Xi].join("|") + ")" + Ps, rm = "(?:" + [Qs + fa + "?", fa, ji, Xi, _p].join("|") + ")", am = RegExp(Hi, "g"), im = RegExp(fa, "g"), _i = RegExp(Pi + "(?=" + Pi + ")|" + rm + Ps, "g"), om = RegExp([
      Wn + "?" + Cs + "+" + Gs + "(?=" + [xs, Wn, "$"].join("|") + ")",
      Kp + "+" + Ys + "(?=" + [xs, Wn + zs, "$"].join("|") + ")",
      Wn + "?" + zs + "+" + Gs,
      Wn + "+" + Ys,
      tm,
      em,
      Bs,
      nm
    ].join("|"), "g"), lm = RegExp("[" + Os + da + bs + Ws + "]"), sm = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, cm = [
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
    ], um = -1, se = {};
    se[Ai] = se[xi] = se[Bi] = se[Ci] = se[Di] = se[Qi] = se[Oi] = se[zi] = se[Gi] = !0, se[Fn] = se[oa] = se[Tr] = se[dr] = se[Sn] = se[fr] = se[la] = se[sa] = se[mt] = se[hr] = se[Ft] = se[pr] = se[Vt] = se[mr] = se[Vr] = !1;
    var le = {};
    le[Fn] = le[oa] = le[Tr] = le[Sn] = le[dr] = le[fr] = le[Ai] = le[xi] = le[Bi] = le[Ci] = le[Di] = le[mt] = le[hr] = le[Ft] = le[pr] = le[Vt] = le[mr] = le[ca] = le[Qi] = le[Oi] = le[zi] = le[Gi] = !0, le[la] = le[sa] = le[Vr] = !1;
    var dm = {
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
    }, fm = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, hm = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, pm = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, mm = parseFloat, Vm = parseInt, js = typeof Wr == "object" && Wr && Wr.Object === Object && Wr, Tm = typeof self == "object" && self && self.Object === Object && self, ye = js || Tm || Function("return this")(), Li = a && !a.nodeType && a, cn = Li && !0 && n && !n.nodeType && n, Xs = cn && cn.exports === Li, qi = Xs && js.process, ot = function() {
      try {
        var v = cn && cn.require && cn.require("util").types;
        return v || qi && qi.binding && qi.binding("util");
      } catch {
      }
    }(), _s = ot && ot.isArrayBuffer, Ls = ot && ot.isDate, qs = ot && ot.isMap, Ks = ot && ot.isRegExp, $s = ot && ot.isSet, ec = ot && ot.isTypedArray;
    function Ke(v, R, U) {
      switch (U.length) {
        case 0:
          return v.call(R);
        case 1:
          return v.call(R, U[0]);
        case 2:
          return v.call(R, U[0], U[1]);
        case 3:
          return v.call(R, U[0], U[1], U[2]);
      }
      return v.apply(R, U);
    }
    function vm(v, R, U, S) {
      for (var G = -1, ee = v == null ? 0 : v.length; ++G < ee; ) {
        var Ue = v[G];
        R(S, Ue, U(Ue), v);
      }
      return S;
    }
    function lt(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length; ++U < S && R(v[U], U, v) !== !1; )
        ;
      return v;
    }
    function wm(v, R) {
      for (var U = v == null ? 0 : v.length; U-- && R(v[U], U, v) !== !1; )
        ;
      return v;
    }
    function tc(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length; ++U < S; )
        if (!R(v[U], U, v))
          return !1;
      return !0;
    }
    function Ht(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length, G = 0, ee = []; ++U < S; ) {
        var Ue = v[U];
        R(Ue, U, v) && (ee[G++] = Ue);
      }
      return ee;
    }
    function ha(v, R) {
      var U = v == null ? 0 : v.length;
      return !!U && An(v, R, 0) > -1;
    }
    function Ki(v, R, U) {
      for (var S = -1, G = v == null ? 0 : v.length; ++S < G; )
        if (U(R, v[S]))
          return !0;
      return !1;
    }
    function ce(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length, G = Array(S); ++U < S; )
        G[U] = R(v[U], U, v);
      return G;
    }
    function Pt(v, R) {
      for (var U = -1, S = R.length, G = v.length; ++U < S; )
        v[G + U] = R[U];
      return v;
    }
    function $i(v, R, U, S) {
      var G = -1, ee = v == null ? 0 : v.length;
      for (S && ee && (U = v[++G]); ++G < ee; )
        U = R(U, v[G], G, v);
      return U;
    }
    function Um(v, R, U, S) {
      var G = v == null ? 0 : v.length;
      for (S && G && (U = v[--G]); G--; )
        U = R(U, v[G], G, v);
      return U;
    }
    function eo(v, R) {
      for (var U = -1, S = v == null ? 0 : v.length; ++U < S; )
        if (R(v[U], U, v))
          return !0;
      return !1;
    }
    var Rm = to("length");
    function Nm(v) {
      return v.split("");
    }
    function Mm(v) {
      return v.match(Fp) || [];
    }
    function nc(v, R, U) {
      var S;
      return U(v, function(G, ee, Ue) {
        if (R(G, ee, Ue))
          return S = ee, !1;
      }), S;
    }
    function pa(v, R, U, S) {
      for (var G = v.length, ee = U + (S ? 1 : -1); S ? ee-- : ++ee < G; )
        if (R(v[ee], ee, v))
          return ee;
      return -1;
    }
    function An(v, R, U) {
      return R === R ? xm(v, R, U) : pa(v, rc, U);
    }
    function gm(v, R, U, S) {
      for (var G = U - 1, ee = v.length; ++G < ee; )
        if (S(v[G], R))
          return G;
      return -1;
    }
    function rc(v) {
      return v !== v;
    }
    function ac(v, R) {
      var U = v == null ? 0 : v.length;
      return U ? ro(v, R) / U : ia;
    }
    function to(v) {
      return function(R) {
        return R == null ? r : R[v];
      };
    }
    function no(v) {
      return function(R) {
        return v == null ? r : v[R];
      };
    }
    function ic(v, R, U, S, G) {
      return G(v, function(ee, Ue, oe) {
        U = S ? (S = !1, ee) : R(U, ee, Ue, oe);
      }), U;
    }
    function Zm(v, R) {
      var U = v.length;
      for (v.sort(R); U--; )
        v[U] = v[U].value;
      return v;
    }
    function ro(v, R) {
      for (var U, S = -1, G = v.length; ++S < G; ) {
        var ee = R(v[S]);
        ee !== r && (U = U === r ? ee : U + ee);
      }
      return U;
    }
    function ao(v, R) {
      for (var U = -1, S = Array(v); ++U < v; )
        S[U] = R(U);
      return S;
    }
    function Jm(v, R) {
      return ce(R, function(U) {
        return [U, v[U]];
      });
    }
    function oc(v) {
      return v && v.slice(0, uc(v) + 1).replace(Ii, "");
    }
    function $e(v) {
      return function(R) {
        return v(R);
      };
    }
    function io(v, R) {
      return ce(R, function(U) {
        return v[U];
      });
    }
    function vr(v, R) {
      return v.has(R);
    }
    function lc(v, R) {
      for (var U = -1, S = v.length; ++U < S && An(R, v[U], 0) > -1; )
        ;
      return U;
    }
    function sc(v, R) {
      for (var U = v.length; U-- && An(R, v[U], 0) > -1; )
        ;
      return U;
    }
    function km(v, R) {
      for (var U = v.length, S = 0; U--; )
        v[U] === R && ++S;
      return S;
    }
    var ym = no(dm), bm = no(fm);
    function Em(v) {
      return "\\" + pm[v];
    }
    function Fm(v, R) {
      return v == null ? r : v[R];
    }
    function xn(v) {
      return lm.test(v);
    }
    function Sm(v) {
      return sm.test(v);
    }
    function Wm(v) {
      for (var R, U = []; !(R = v.next()).done; )
        U.push(R.value);
      return U;
    }
    function oo(v) {
      var R = -1, U = Array(v.size);
      return v.forEach(function(S, G) {
        U[++R] = [G, S];
      }), U;
    }
    function cc(v, R) {
      return function(U) {
        return v(R(U));
      };
    }
    function jt(v, R) {
      for (var U = -1, S = v.length, G = 0, ee = []; ++U < S; ) {
        var Ue = v[U];
        (Ue === R || Ue === Z) && (v[U] = Z, ee[G++] = U);
      }
      return ee;
    }
    function ma(v) {
      var R = -1, U = Array(v.size);
      return v.forEach(function(S) {
        U[++R] = S;
      }), U;
    }
    function Am(v) {
      var R = -1, U = Array(v.size);
      return v.forEach(function(S) {
        U[++R] = [S, S];
      }), U;
    }
    function xm(v, R, U) {
      for (var S = U - 1, G = v.length; ++S < G; )
        if (v[S] === R)
          return S;
      return -1;
    }
    function Bm(v, R, U) {
      for (var S = U + 1; S--; )
        if (v[S] === R)
          return S;
      return S;
    }
    function Bn(v) {
      return xn(v) ? Dm(v) : Rm(v);
    }
    function Tt(v) {
      return xn(v) ? Qm(v) : Nm(v);
    }
    function uc(v) {
      for (var R = v.length; R-- && kp.test(v.charAt(R)); )
        ;
      return R;
    }
    var Cm = no(hm);
    function Dm(v) {
      for (var R = _i.lastIndex = 0; _i.test(v); )
        ++R;
      return R;
    }
    function Qm(v) {
      return v.match(_i) || [];
    }
    function Om(v) {
      return v.match(om) || [];
    }
    var zm = function v(R) {
      R = R == null ? ye : Cn.defaults(ye.Object(), R, Cn.pick(ye, cm));
      var U = R.Array, S = R.Date, G = R.Error, ee = R.Function, Ue = R.Math, oe = R.Object, lo = R.RegExp, Gm = R.String, st = R.TypeError, Va = U.prototype, Ym = ee.prototype, Dn = oe.prototype, Ta = R["__core-js_shared__"], va = Ym.toString, re = Dn.hasOwnProperty, Im = 0, dc = function() {
        var e = /[^.]+$/.exec(Ta && Ta.keys && Ta.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), wa = Dn.toString, Hm = va.call(oe), Pm = ye._, jm = lo(
        "^" + va.call(re).replace(Yi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ua = Xs ? R.Buffer : r, Xt = R.Symbol, Ra = R.Uint8Array, fc = Ua ? Ua.allocUnsafe : r, Na = cc(oe.getPrototypeOf, oe), hc = oe.create, pc = Dn.propertyIsEnumerable, Ma = Va.splice, mc = Xt ? Xt.isConcatSpreadable : r, wr = Xt ? Xt.iterator : r, un = Xt ? Xt.toStringTag : r, ga = function() {
        try {
          var e = mn(oe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Xm = R.clearTimeout !== ye.clearTimeout && R.clearTimeout, _m = S && S.now !== ye.Date.now && S.now, Lm = R.setTimeout !== ye.setTimeout && R.setTimeout, Za = Ue.ceil, Ja = Ue.floor, so = oe.getOwnPropertySymbols, qm = Ua ? Ua.isBuffer : r, Vc = R.isFinite, Km = Va.join, $m = cc(oe.keys, oe), Re = Ue.max, Ae = Ue.min, eV = S.now, tV = R.parseInt, Tc = Ue.random, nV = Va.reverse, co = mn(R, "DataView"), Ur = mn(R, "Map"), uo = mn(R, "Promise"), Qn = mn(R, "Set"), Rr = mn(R, "WeakMap"), Nr = mn(oe, "create"), ka = Rr && new Rr(), On = {}, rV = Vn(co), aV = Vn(Ur), iV = Vn(uo), oV = Vn(Qn), lV = Vn(Rr), ya = Xt ? Xt.prototype : r, Mr = ya ? ya.valueOf : r, vc = ya ? ya.toString : r;
      function u(e) {
        if (he(e) && !Y(e) && !(e instanceof L)) {
          if (e instanceof ct)
            return e;
          if (re.call(e, "__wrapped__"))
            return wu(e);
        }
        return new ct(e);
      }
      var zn = function() {
        function e() {
        }
        return function(t) {
          if (!ue(t))
            return {};
          if (hc)
            return hc(t);
          e.prototype = t;
          var i = new e();
          return e.prototype = r, i;
        };
      }();
      function ba() {
      }
      function ct(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      u.templateSettings = {
        escape: Rp,
        evaluate: Np,
        interpolate: ks,
        variable: "",
        imports: {
          _: u
        }
      }, u.prototype = ba.prototype, u.prototype.constructor = u, ct.prototype = zn(ba.prototype), ct.prototype.constructor = ct;
      function L(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = gt, this.__views__ = [];
      }
      function sV() {
        var e = new L(this.__wrapped__);
        return e.__actions__ = Pe(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Pe(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Pe(this.__views__), e;
      }
      function cV() {
        if (this.__filtered__) {
          var e = new L(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function uV() {
        var e = this.__wrapped__.value(), t = this.__dir__, i = Y(e), o = t < 0, c = i ? e.length : 0, d = N1(0, c, this.__views__), m = d.start, V = d.end, w = V - m, M = o ? V : m - 1, g = this.__iteratees__, J = g.length, F = 0, x = Ae(w, this.__takeCount__);
        if (!i || !o && c == w && x == w)
          return Gc(e, this.__actions__);
        var Q = [];
        e:
          for (; w-- && F < x; ) {
            M += t;
            for (var H = -1, O = e[M]; ++H < J; ) {
              var _ = g[H], K = _.iteratee, nt = _.type, ze = K(O);
              if (nt == ie)
                O = ze;
              else if (!ze) {
                if (nt == we)
                  continue e;
                break e;
              }
            }
            Q[F++] = O;
          }
        return Q;
      }
      L.prototype = zn(ba.prototype), L.prototype.constructor = L;
      function dn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function dV() {
        this.__data__ = Nr ? Nr(null) : {}, this.size = 0;
      }
      function fV(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function hV(e) {
        var t = this.__data__;
        if (Nr) {
          var i = t[e];
          return i === T ? r : i;
        }
        return re.call(t, e) ? t[e] : r;
      }
      function pV(e) {
        var t = this.__data__;
        return Nr ? t[e] !== r : re.call(t, e);
      }
      function mV(e, t) {
        var i = this.__data__;
        return this.size += this.has(e) ? 0 : 1, i[e] = Nr && t === r ? T : t, this;
      }
      dn.prototype.clear = dV, dn.prototype.delete = fV, dn.prototype.get = hV, dn.prototype.has = pV, dn.prototype.set = mV;
      function St(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function VV() {
        this.__data__ = [], this.size = 0;
      }
      function TV(e) {
        var t = this.__data__, i = Ea(t, e);
        if (i < 0)
          return !1;
        var o = t.length - 1;
        return i == o ? t.pop() : Ma.call(t, i, 1), --this.size, !0;
      }
      function vV(e) {
        var t = this.__data__, i = Ea(t, e);
        return i < 0 ? r : t[i][1];
      }
      function wV(e) {
        return Ea(this.__data__, e) > -1;
      }
      function UV(e, t) {
        var i = this.__data__, o = Ea(i, e);
        return o < 0 ? (++this.size, i.push([e, t])) : i[o][1] = t, this;
      }
      St.prototype.clear = VV, St.prototype.delete = TV, St.prototype.get = vV, St.prototype.has = wV, St.prototype.set = UV;
      function Wt(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.clear(); ++t < i; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function RV() {
        this.size = 0, this.__data__ = {
          hash: new dn(),
          map: new (Ur || St)(),
          string: new dn()
        };
      }
      function NV(e) {
        var t = Ga(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function MV(e) {
        return Ga(this, e).get(e);
      }
      function gV(e) {
        return Ga(this, e).has(e);
      }
      function ZV(e, t) {
        var i = Ga(this, e), o = i.size;
        return i.set(e, t), this.size += i.size == o ? 0 : 1, this;
      }
      Wt.prototype.clear = RV, Wt.prototype.delete = NV, Wt.prototype.get = MV, Wt.prototype.has = gV, Wt.prototype.set = ZV;
      function fn(e) {
        var t = -1, i = e == null ? 0 : e.length;
        for (this.__data__ = new Wt(); ++t < i; )
          this.add(e[t]);
      }
      function JV(e) {
        return this.__data__.set(e, T), this;
      }
      function kV(e) {
        return this.__data__.has(e);
      }
      fn.prototype.add = fn.prototype.push = JV, fn.prototype.has = kV;
      function vt(e) {
        var t = this.__data__ = new St(e);
        this.size = t.size;
      }
      function yV() {
        this.__data__ = new St(), this.size = 0;
      }
      function bV(e) {
        var t = this.__data__, i = t.delete(e);
        return this.size = t.size, i;
      }
      function EV(e) {
        return this.__data__.get(e);
      }
      function FV(e) {
        return this.__data__.has(e);
      }
      function SV(e, t) {
        var i = this.__data__;
        if (i instanceof St) {
          var o = i.__data__;
          if (!Ur || o.length < s - 1)
            return o.push([e, t]), this.size = ++i.size, this;
          i = this.__data__ = new Wt(o);
        }
        return i.set(e, t), this.size = i.size, this;
      }
      vt.prototype.clear = yV, vt.prototype.delete = bV, vt.prototype.get = EV, vt.prototype.has = FV, vt.prototype.set = SV;
      function wc(e, t) {
        var i = Y(e), o = !i && Tn(e), c = !i && !o && $t(e), d = !i && !o && !c && Hn(e), m = i || o || c || d, V = m ? ao(e.length, Gm) : [], w = V.length;
        for (var M in e)
          (t || re.call(e, M)) && !(m && (M == "length" || c && (M == "offset" || M == "parent") || d && (M == "buffer" || M == "byteLength" || M == "byteOffset") || Ct(M, w))) && V.push(M);
        return V;
      }
      function Uc(e) {
        var t = e.length;
        return t ? e[No(0, t - 1)] : r;
      }
      function WV(e, t) {
        return Ya(Pe(e), hn(t, 0, e.length));
      }
      function AV(e) {
        return Ya(Pe(e));
      }
      function fo(e, t, i) {
        (i !== r && !wt(e[t], i) || i === r && !(t in e)) && At(e, t, i);
      }
      function gr(e, t, i) {
        var o = e[t];
        (!(re.call(e, t) && wt(o, i)) || i === r && !(t in e)) && At(e, t, i);
      }
      function Ea(e, t) {
        for (var i = e.length; i--; )
          if (wt(e[i][0], t))
            return i;
        return -1;
      }
      function xV(e, t, i, o) {
        return _t(e, function(c, d, m) {
          t(o, c, i(c), m);
        }), o;
      }
      function Rc(e, t) {
        return e && Jt(t, Me(t), e);
      }
      function BV(e, t) {
        return e && Jt(t, Xe(t), e);
      }
      function At(e, t, i) {
        t == "__proto__" && ga ? ga(e, t, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : e[t] = i;
      }
      function ho(e, t) {
        for (var i = -1, o = t.length, c = U(o), d = e == null; ++i < o; )
          c[i] = d ? r : jo(e, t[i]);
        return c;
      }
      function hn(e, t, i) {
        return e === e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e;
      }
      function ut(e, t, i, o, c, d) {
        var m, V = t & y, w = t & k, M = t & A;
        if (i && (m = c ? i(e, o, c, d) : i(e)), m !== r)
          return m;
        if (!ue(e))
          return e;
        var g = Y(e);
        if (g) {
          if (m = g1(e), !V)
            return Pe(e, m);
        } else {
          var J = xe(e), F = J == sa || J == Ms;
          if ($t(e))
            return Hc(e, V);
          if (J == Ft || J == Fn || F && !c) {
            if (m = w || F ? {} : uu(e), !V)
              return w ? h1(e, BV(m, e)) : f1(e, Rc(m, e));
          } else {
            if (!le[J])
              return c ? e : {};
            m = Z1(e, J, V);
          }
        }
        d || (d = new vt());
        var x = d.get(e);
        if (x)
          return x;
        d.set(e, m), Qu(e) ? e.forEach(function(O) {
          m.add(ut(O, t, i, O, e, d));
        }) : Cu(e) && e.forEach(function(O, _) {
          m.set(_, ut(O, t, i, _, e, d));
        });
        var Q = M ? w ? Wo : So : w ? Xe : Me, H = g ? r : Q(e);
        return lt(H || e, function(O, _) {
          H && (_ = O, O = e[_]), gr(m, _, ut(O, t, i, _, e, d));
        }), m;
      }
      function CV(e) {
        var t = Me(e);
        return function(i) {
          return Nc(i, e, t);
        };
      }
      function Nc(e, t, i) {
        var o = i.length;
        if (e == null)
          return !o;
        for (e = oe(e); o--; ) {
          var c = i[o], d = t[c], m = e[c];
          if (m === r && !(c in e) || !d(m))
            return !1;
        }
        return !0;
      }
      function Mc(e, t, i) {
        if (typeof e != "function")
          throw new st(h);
        return Fr(function() {
          e.apply(r, i);
        }, t);
      }
      function Zr(e, t, i, o) {
        var c = -1, d = ha, m = !0, V = e.length, w = [], M = t.length;
        if (!V)
          return w;
        i && (t = ce(t, $e(i))), o ? (d = Ki, m = !1) : t.length >= s && (d = vr, m = !1, t = new fn(t));
        e:
          for (; ++c < V; ) {
            var g = e[c], J = i == null ? g : i(g);
            if (g = o || g !== 0 ? g : 0, m && J === J) {
              for (var F = M; F--; )
                if (t[F] === J)
                  continue e;
              w.push(g);
            } else
              d(t, J, o) || w.push(g);
          }
        return w;
      }
      var _t = Lc(Zt), gc = Lc(mo, !0);
      function DV(e, t) {
        var i = !0;
        return _t(e, function(o, c, d) {
          return i = !!t(o, c, d), i;
        }), i;
      }
      function Fa(e, t, i) {
        for (var o = -1, c = e.length; ++o < c; ) {
          var d = e[o], m = t(d);
          if (m != null && (V === r ? m === m && !tt(m) : i(m, V)))
            var V = m, w = d;
        }
        return w;
      }
      function QV(e, t, i, o) {
        var c = e.length;
        for (i = I(i), i < 0 && (i = -i > c ? 0 : c + i), o = o === r || o > c ? c : I(o), o < 0 && (o += c), o = i > o ? 0 : zu(o); i < o; )
          e[i++] = t;
        return e;
      }
      function Zc(e, t) {
        var i = [];
        return _t(e, function(o, c, d) {
          t(o, c, d) && i.push(o);
        }), i;
      }
      function be(e, t, i, o, c) {
        var d = -1, m = e.length;
        for (i || (i = k1), c || (c = []); ++d < m; ) {
          var V = e[d];
          t > 0 && i(V) ? t > 1 ? be(V, t - 1, i, o, c) : Pt(c, V) : o || (c[c.length] = V);
        }
        return c;
      }
      var po = qc(), Jc = qc(!0);
      function Zt(e, t) {
        return e && po(e, t, Me);
      }
      function mo(e, t) {
        return e && Jc(e, t, Me);
      }
      function Sa(e, t) {
        return Ht(t, function(i) {
          return Dt(e[i]);
        });
      }
      function pn(e, t) {
        t = qt(t, e);
        for (var i = 0, o = t.length; e != null && i < o; )
          e = e[kt(t[i++])];
        return i && i == o ? e : r;
      }
      function kc(e, t, i) {
        var o = t(e);
        return Y(e) ? o : Pt(o, i(e));
      }
      function Qe(e) {
        return e == null ? e === r ? pp : fp : un && un in oe(e) ? R1(e) : A1(e);
      }
      function Vo(e, t) {
        return e > t;
      }
      function OV(e, t) {
        return e != null && re.call(e, t);
      }
      function zV(e, t) {
        return e != null && t in oe(e);
      }
      function GV(e, t, i) {
        return e >= Ae(t, i) && e < Re(t, i);
      }
      function To(e, t, i) {
        for (var o = i ? Ki : ha, c = e[0].length, d = e.length, m = d, V = U(d), w = 1 / 0, M = []; m--; ) {
          var g = e[m];
          m && t && (g = ce(g, $e(t))), w = Ae(g.length, w), V[m] = !i && (t || c >= 120 && g.length >= 120) ? new fn(m && g) : r;
        }
        g = e[0];
        var J = -1, F = V[0];
        e:
          for (; ++J < c && M.length < w; ) {
            var x = g[J], Q = t ? t(x) : x;
            if (x = i || x !== 0 ? x : 0, !(F ? vr(F, Q) : o(M, Q, i))) {
              for (m = d; --m; ) {
                var H = V[m];
                if (!(H ? vr(H, Q) : o(e[m], Q, i)))
                  continue e;
              }
              F && F.push(Q), M.push(x);
            }
          }
        return M;
      }
      function YV(e, t, i, o) {
        return Zt(e, function(c, d, m) {
          t(o, i(c), d, m);
        }), o;
      }
      function Jr(e, t, i) {
        t = qt(t, e), e = pu(e, t);
        var o = e == null ? e : e[kt(ft(t))];
        return o == null ? r : Ke(o, e, i);
      }
      function yc(e) {
        return he(e) && Qe(e) == Fn;
      }
      function IV(e) {
        return he(e) && Qe(e) == Tr;
      }
      function HV(e) {
        return he(e) && Qe(e) == fr;
      }
      function kr(e, t, i, o, c) {
        return e === t ? !0 : e == null || t == null || !he(e) && !he(t) ? e !== e && t !== t : PV(e, t, i, o, kr, c);
      }
      function PV(e, t, i, o, c, d) {
        var m = Y(e), V = Y(t), w = m ? oa : xe(e), M = V ? oa : xe(t);
        w = w == Fn ? Ft : w, M = M == Fn ? Ft : M;
        var g = w == Ft, J = M == Ft, F = w == M;
        if (F && $t(e)) {
          if (!$t(t))
            return !1;
          m = !0, g = !1;
        }
        if (F && !g)
          return d || (d = new vt()), m || Hn(e) ? lu(e, t, i, o, c, d) : w1(e, t, w, i, o, c, d);
        if (!(i & E)) {
          var x = g && re.call(e, "__wrapped__"), Q = J && re.call(t, "__wrapped__");
          if (x || Q) {
            var H = x ? e.value() : e, O = Q ? t.value() : t;
            return d || (d = new vt()), c(H, O, i, o, d);
          }
        }
        return F ? (d || (d = new vt()), U1(e, t, i, o, c, d)) : !1;
      }
      function jV(e) {
        return he(e) && xe(e) == mt;
      }
      function vo(e, t, i, o) {
        var c = i.length, d = c, m = !o;
        if (e == null)
          return !d;
        for (e = oe(e); c--; ) {
          var V = i[c];
          if (m && V[2] ? V[1] !== e[V[0]] : !(V[0] in e))
            return !1;
        }
        for (; ++c < d; ) {
          V = i[c];
          var w = V[0], M = e[w], g = V[1];
          if (m && V[2]) {
            if (M === r && !(w in e))
              return !1;
          } else {
            var J = new vt();
            if (o)
              var F = o(M, g, w, e, t, J);
            if (!(F === r ? kr(g, M, E | W, o, J) : F))
              return !1;
          }
        }
        return !0;
      }
      function bc(e) {
        if (!ue(e) || b1(e))
          return !1;
        var t = Dt(e) ? jm : Cp;
        return t.test(Vn(e));
      }
      function XV(e) {
        return he(e) && Qe(e) == pr;
      }
      function _V(e) {
        return he(e) && xe(e) == Vt;
      }
      function LV(e) {
        return he(e) && _a(e.length) && !!se[Qe(e)];
      }
      function Ec(e) {
        return typeof e == "function" ? e : e == null ? _e : typeof e == "object" ? Y(e) ? Wc(e[0], e[1]) : Sc(e) : Ku(e);
      }
      function wo(e) {
        if (!Er(e))
          return $m(e);
        var t = [];
        for (var i in oe(e))
          re.call(e, i) && i != "constructor" && t.push(i);
        return t;
      }
      function qV(e) {
        if (!ue(e))
          return W1(e);
        var t = Er(e), i = [];
        for (var o in e)
          o == "constructor" && (t || !re.call(e, o)) || i.push(o);
        return i;
      }
      function Uo(e, t) {
        return e < t;
      }
      function Fc(e, t) {
        var i = -1, o = je(e) ? U(e.length) : [];
        return _t(e, function(c, d, m) {
          o[++i] = t(c, d, m);
        }), o;
      }
      function Sc(e) {
        var t = xo(e);
        return t.length == 1 && t[0][2] ? fu(t[0][0], t[0][1]) : function(i) {
          return i === e || vo(i, e, t);
        };
      }
      function Wc(e, t) {
        return Co(e) && du(t) ? fu(kt(e), t) : function(i) {
          var o = jo(i, e);
          return o === r && o === t ? Xo(i, e) : kr(t, o, E | W);
        };
      }
      function Wa(e, t, i, o, c) {
        e !== t && po(t, function(d, m) {
          if (c || (c = new vt()), ue(d))
            KV(e, t, m, i, Wa, o, c);
          else {
            var V = o ? o(Qo(e, m), d, m + "", e, t, c) : r;
            V === r && (V = d), fo(e, m, V);
          }
        }, Xe);
      }
      function KV(e, t, i, o, c, d, m) {
        var V = Qo(e, i), w = Qo(t, i), M = m.get(w);
        if (M) {
          fo(e, i, M);
          return;
        }
        var g = d ? d(V, w, i + "", e, t, m) : r, J = g === r;
        if (J) {
          var F = Y(w), x = !F && $t(w), Q = !F && !x && Hn(w);
          g = w, F || x || Q ? Y(V) ? g = V : me(V) ? g = Pe(V) : x ? (J = !1, g = Hc(w, !0)) : Q ? (J = !1, g = Pc(w, !0)) : g = [] : Sr(w) || Tn(w) ? (g = V, Tn(V) ? g = Gu(V) : (!ue(V) || Dt(V)) && (g = uu(w))) : J = !1;
        }
        J && (m.set(w, g), c(g, w, o, d, m), m.delete(w)), fo(e, i, g);
      }
      function Ac(e, t) {
        var i = e.length;
        if (!!i)
          return t += t < 0 ? i : 0, Ct(t, i) ? e[t] : r;
      }
      function xc(e, t, i) {
        t.length ? t = ce(t, function(d) {
          return Y(d) ? function(m) {
            return pn(m, d.length === 1 ? d[0] : d);
          } : d;
        }) : t = [_e];
        var o = -1;
        t = ce(t, $e(D()));
        var c = Fc(e, function(d, m, V) {
          var w = ce(t, function(M) {
            return M(d);
          });
          return { criteria: w, index: ++o, value: d };
        });
        return Zm(c, function(d, m) {
          return d1(d, m, i);
        });
      }
      function $V(e, t) {
        return Bc(e, t, function(i, o) {
          return Xo(e, o);
        });
      }
      function Bc(e, t, i) {
        for (var o = -1, c = t.length, d = {}; ++o < c; ) {
          var m = t[o], V = pn(e, m);
          i(V, m) && yr(d, qt(m, e), V);
        }
        return d;
      }
      function e1(e) {
        return function(t) {
          return pn(t, e);
        };
      }
      function Ro(e, t, i, o) {
        var c = o ? gm : An, d = -1, m = t.length, V = e;
        for (e === t && (t = Pe(t)), i && (V = ce(e, $e(i))); ++d < m; )
          for (var w = 0, M = t[d], g = i ? i(M) : M; (w = c(V, g, w, o)) > -1; )
            V !== e && Ma.call(V, w, 1), Ma.call(e, w, 1);
        return e;
      }
      function Cc(e, t) {
        for (var i = e ? t.length : 0, o = i - 1; i--; ) {
          var c = t[i];
          if (i == o || c !== d) {
            var d = c;
            Ct(c) ? Ma.call(e, c, 1) : Zo(e, c);
          }
        }
        return e;
      }
      function No(e, t) {
        return e + Ja(Tc() * (t - e + 1));
      }
      function t1(e, t, i, o) {
        for (var c = -1, d = Re(Za((t - e) / (i || 1)), 0), m = U(d); d--; )
          m[o ? d : ++c] = e, e += i;
        return m;
      }
      function Mo(e, t) {
        var i = "";
        if (!e || t < 1 || t > De)
          return i;
        do
          t % 2 && (i += e), t = Ja(t / 2), t && (e += e);
        while (t);
        return i;
      }
      function P(e, t) {
        return Oo(hu(e, t, _e), e + "");
      }
      function n1(e) {
        return Uc(Pn(e));
      }
      function r1(e, t) {
        var i = Pn(e);
        return Ya(i, hn(t, 0, i.length));
      }
      function yr(e, t, i, o) {
        if (!ue(e))
          return e;
        t = qt(t, e);
        for (var c = -1, d = t.length, m = d - 1, V = e; V != null && ++c < d; ) {
          var w = kt(t[c]), M = i;
          if (w === "__proto__" || w === "constructor" || w === "prototype")
            return e;
          if (c != m) {
            var g = V[w];
            M = o ? o(g, w, V) : r, M === r && (M = ue(g) ? g : Ct(t[c + 1]) ? [] : {});
          }
          gr(V, w, M), V = V[w];
        }
        return e;
      }
      var Dc = ka ? function(e, t) {
        return ka.set(e, t), e;
      } : _e, a1 = ga ? function(e, t) {
        return ga(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Lo(t),
          writable: !0
        });
      } : _e;
      function i1(e) {
        return Ya(Pn(e));
      }
      function dt(e, t, i) {
        var o = -1, c = e.length;
        t < 0 && (t = -t > c ? 0 : c + t), i = i > c ? c : i, i < 0 && (i += c), c = t > i ? 0 : i - t >>> 0, t >>>= 0;
        for (var d = U(c); ++o < c; )
          d[o] = e[o + t];
        return d;
      }
      function o1(e, t) {
        var i;
        return _t(e, function(o, c, d) {
          return i = t(o, c, d), !i;
        }), !!i;
      }
      function Aa(e, t, i) {
        var o = 0, c = e == null ? o : e.length;
        if (typeof t == "number" && t === t && c <= sp) {
          for (; o < c; ) {
            var d = o + c >>> 1, m = e[d];
            m !== null && !tt(m) && (i ? m <= t : m < t) ? o = d + 1 : c = d;
          }
          return c;
        }
        return go(e, t, _e, i);
      }
      function go(e, t, i, o) {
        var c = 0, d = e == null ? 0 : e.length;
        if (d === 0)
          return 0;
        t = i(t);
        for (var m = t !== t, V = t === null, w = tt(t), M = t === r; c < d; ) {
          var g = Ja((c + d) / 2), J = i(e[g]), F = J !== r, x = J === null, Q = J === J, H = tt(J);
          if (m)
            var O = o || Q;
          else
            M ? O = Q && (o || F) : V ? O = Q && F && (o || !x) : w ? O = Q && F && !x && (o || !H) : x || H ? O = !1 : O = o ? J <= t : J < t;
          O ? c = g + 1 : d = g;
        }
        return Ae(d, lp);
      }
      function Qc(e, t) {
        for (var i = -1, o = e.length, c = 0, d = []; ++i < o; ) {
          var m = e[i], V = t ? t(m) : m;
          if (!i || !wt(V, w)) {
            var w = V;
            d[c++] = m === 0 ? 0 : m;
          }
        }
        return d;
      }
      function Oc(e) {
        return typeof e == "number" ? e : tt(e) ? ia : +e;
      }
      function et(e) {
        if (typeof e == "string")
          return e;
        if (Y(e))
          return ce(e, et) + "";
        if (tt(e))
          return vc ? vc.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -ke ? "-0" : t;
      }
      function Lt(e, t, i) {
        var o = -1, c = ha, d = e.length, m = !0, V = [], w = V;
        if (i)
          m = !1, c = Ki;
        else if (d >= s) {
          var M = t ? null : T1(e);
          if (M)
            return ma(M);
          m = !1, c = vr, w = new fn();
        } else
          w = t ? [] : V;
        e:
          for (; ++o < d; ) {
            var g = e[o], J = t ? t(g) : g;
            if (g = i || g !== 0 ? g : 0, m && J === J) {
              for (var F = w.length; F--; )
                if (w[F] === J)
                  continue e;
              t && w.push(J), V.push(g);
            } else
              c(w, J, i) || (w !== V && w.push(J), V.push(g));
          }
        return V;
      }
      function Zo(e, t) {
        return t = qt(t, e), e = pu(e, t), e == null || delete e[kt(ft(t))];
      }
      function zc(e, t, i, o) {
        return yr(e, t, i(pn(e, t)), o);
      }
      function xa(e, t, i, o) {
        for (var c = e.length, d = o ? c : -1; (o ? d-- : ++d < c) && t(e[d], d, e); )
          ;
        return i ? dt(e, o ? 0 : d, o ? d + 1 : c) : dt(e, o ? d + 1 : 0, o ? c : d);
      }
      function Gc(e, t) {
        var i = e;
        return i instanceof L && (i = i.value()), $i(t, function(o, c) {
          return c.func.apply(c.thisArg, Pt([o], c.args));
        }, i);
      }
      function Jo(e, t, i) {
        var o = e.length;
        if (o < 2)
          return o ? Lt(e[0]) : [];
        for (var c = -1, d = U(o); ++c < o; )
          for (var m = e[c], V = -1; ++V < o; )
            V != c && (d[c] = Zr(d[c] || m, e[V], t, i));
        return Lt(be(d, 1), t, i);
      }
      function Yc(e, t, i) {
        for (var o = -1, c = e.length, d = t.length, m = {}; ++o < c; ) {
          var V = o < d ? t[o] : r;
          i(m, e[o], V);
        }
        return m;
      }
      function ko(e) {
        return me(e) ? e : [];
      }
      function yo(e) {
        return typeof e == "function" ? e : _e;
      }
      function qt(e, t) {
        return Y(e) ? e : Co(e, t) ? [e] : vu(te(e));
      }
      var l1 = P;
      function Kt(e, t, i) {
        var o = e.length;
        return i = i === r ? o : i, !t && i >= o ? e : dt(e, t, i);
      }
      var Ic = Xm || function(e) {
        return ye.clearTimeout(e);
      };
      function Hc(e, t) {
        if (t)
          return e.slice();
        var i = e.length, o = fc ? fc(i) : new e.constructor(i);
        return e.copy(o), o;
      }
      function bo(e) {
        var t = new e.constructor(e.byteLength);
        return new Ra(t).set(new Ra(e)), t;
      }
      function s1(e, t) {
        var i = t ? bo(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.byteLength);
      }
      function c1(e) {
        var t = new e.constructor(e.source, ys.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function u1(e) {
        return Mr ? oe(Mr.call(e)) : {};
      }
      function Pc(e, t) {
        var i = t ? bo(e.buffer) : e.buffer;
        return new e.constructor(i, e.byteOffset, e.length);
      }
      function jc(e, t) {
        if (e !== t) {
          var i = e !== r, o = e === null, c = e === e, d = tt(e), m = t !== r, V = t === null, w = t === t, M = tt(t);
          if (!V && !M && !d && e > t || d && m && w && !V && !M || o && m && w || !i && w || !c)
            return 1;
          if (!o && !d && !M && e < t || M && i && c && !o && !d || V && i && c || !m && c || !w)
            return -1;
        }
        return 0;
      }
      function d1(e, t, i) {
        for (var o = -1, c = e.criteria, d = t.criteria, m = c.length, V = i.length; ++o < m; ) {
          var w = jc(c[o], d[o]);
          if (w) {
            if (o >= V)
              return w;
            var M = i[o];
            return w * (M == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Xc(e, t, i, o) {
        for (var c = -1, d = e.length, m = i.length, V = -1, w = t.length, M = Re(d - m, 0), g = U(w + M), J = !o; ++V < w; )
          g[V] = t[V];
        for (; ++c < m; )
          (J || c < d) && (g[i[c]] = e[c]);
        for (; M--; )
          g[V++] = e[c++];
        return g;
      }
      function _c(e, t, i, o) {
        for (var c = -1, d = e.length, m = -1, V = i.length, w = -1, M = t.length, g = Re(d - V, 0), J = U(g + M), F = !o; ++c < g; )
          J[c] = e[c];
        for (var x = c; ++w < M; )
          J[x + w] = t[w];
        for (; ++m < V; )
          (F || c < d) && (J[x + i[m]] = e[c++]);
        return J;
      }
      function Pe(e, t) {
        var i = -1, o = e.length;
        for (t || (t = U(o)); ++i < o; )
          t[i] = e[i];
        return t;
      }
      function Jt(e, t, i, o) {
        var c = !i;
        i || (i = {});
        for (var d = -1, m = t.length; ++d < m; ) {
          var V = t[d], w = o ? o(i[V], e[V], V, i, e) : r;
          w === r && (w = e[V]), c ? At(i, V, w) : gr(i, V, w);
        }
        return i;
      }
      function f1(e, t) {
        return Jt(e, Bo(e), t);
      }
      function h1(e, t) {
        return Jt(e, su(e), t);
      }
      function Ba(e, t) {
        return function(i, o) {
          var c = Y(i) ? vm : xV, d = t ? t() : {};
          return c(i, e, D(o, 2), d);
        };
      }
      function Gn(e) {
        return P(function(t, i) {
          var o = -1, c = i.length, d = c > 1 ? i[c - 1] : r, m = c > 2 ? i[2] : r;
          for (d = e.length > 3 && typeof d == "function" ? (c--, d) : r, m && Oe(i[0], i[1], m) && (d = c < 3 ? r : d, c = 1), t = oe(t); ++o < c; ) {
            var V = i[o];
            V && e(t, V, o, d);
          }
          return t;
        });
      }
      function Lc(e, t) {
        return function(i, o) {
          if (i == null)
            return i;
          if (!je(i))
            return e(i, o);
          for (var c = i.length, d = t ? c : -1, m = oe(i); (t ? d-- : ++d < c) && o(m[d], d, m) !== !1; )
            ;
          return i;
        };
      }
      function qc(e) {
        return function(t, i, o) {
          for (var c = -1, d = oe(t), m = o(t), V = m.length; V--; ) {
            var w = m[e ? V : ++c];
            if (i(d[w], w, d) === !1)
              break;
          }
          return t;
        };
      }
      function p1(e, t, i) {
        var o = t & C, c = br(e);
        function d() {
          var m = this && this !== ye && this instanceof d ? c : e;
          return m.apply(o ? i : this, arguments);
        }
        return d;
      }
      function Kc(e) {
        return function(t) {
          t = te(t);
          var i = xn(t) ? Tt(t) : r, o = i ? i[0] : t.charAt(0), c = i ? Kt(i, 1).join("") : t.slice(1);
          return o[e]() + c;
        };
      }
      function Yn(e) {
        return function(t) {
          return $i(Lu(_u(t).replace(am, "")), e, "");
        };
      }
      function br(e) {
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
          var i = zn(e.prototype), o = e.apply(i, t);
          return ue(o) ? o : i;
        };
      }
      function m1(e, t, i) {
        var o = br(e);
        function c() {
          for (var d = arguments.length, m = U(d), V = d, w = In(c); V--; )
            m[V] = arguments[V];
          var M = d < 3 && m[0] !== w && m[d - 1] !== w ? [] : jt(m, w);
          if (d -= M.length, d < i)
            return ru(
              e,
              t,
              Ca,
              c.placeholder,
              r,
              m,
              M,
              r,
              r,
              i - d
            );
          var g = this && this !== ye && this instanceof c ? o : e;
          return Ke(g, this, m);
        }
        return c;
      }
      function $c(e) {
        return function(t, i, o) {
          var c = oe(t);
          if (!je(t)) {
            var d = D(i, 3);
            t = Me(t), i = function(V) {
              return d(c[V], V, c);
            };
          }
          var m = e(t, i, o);
          return m > -1 ? c[d ? t[m] : m] : r;
        };
      }
      function eu(e) {
        return Bt(function(t) {
          var i = t.length, o = i, c = ct.prototype.thru;
          for (e && t.reverse(); o--; ) {
            var d = t[o];
            if (typeof d != "function")
              throw new st(h);
            if (c && !m && za(d) == "wrapper")
              var m = new ct([], !0);
          }
          for (o = m ? o : i; ++o < i; ) {
            d = t[o];
            var V = za(d), w = V == "wrapper" ? Ao(d) : r;
            w && Do(w[0]) && w[1] == (q | z | b | X) && !w[4].length && w[9] == 1 ? m = m[za(w[0])].apply(m, w[3]) : m = d.length == 1 && Do(d) ? m[V]() : m.thru(d);
          }
          return function() {
            var M = arguments, g = M[0];
            if (m && M.length == 1 && Y(g))
              return m.plant(g).value();
            for (var J = 0, F = i ? t[J].apply(this, M) : g; ++J < i; )
              F = t[J].call(this, F);
            return F;
          };
        });
      }
      function Ca(e, t, i, o, c, d, m, V, w, M) {
        var g = t & q, J = t & C, F = t & B, x = t & (z | $), Q = t & We, H = F ? r : br(e);
        function O() {
          for (var _ = arguments.length, K = U(_), nt = _; nt--; )
            K[nt] = arguments[nt];
          if (x)
            var ze = In(O), rt = km(K, ze);
          if (o && (K = Xc(K, o, c, x)), d && (K = _c(K, d, m, x)), _ -= rt, x && _ < M) {
            var Ve = jt(K, ze);
            return ru(
              e,
              t,
              Ca,
              O.placeholder,
              i,
              K,
              Ve,
              V,
              w,
              M - _
            );
          }
          var Ut = J ? i : this, Ot = F ? Ut[e] : e;
          return _ = K.length, V ? K = x1(K, V) : Q && _ > 1 && K.reverse(), g && w < _ && (K.length = w), this && this !== ye && this instanceof O && (Ot = H || br(Ot)), Ot.apply(Ut, K);
        }
        return O;
      }
      function tu(e, t) {
        return function(i, o) {
          return YV(i, e, t(o), {});
        };
      }
      function Da(e, t) {
        return function(i, o) {
          var c;
          if (i === r && o === r)
            return t;
          if (i !== r && (c = i), o !== r) {
            if (c === r)
              return o;
            typeof i == "string" || typeof o == "string" ? (i = et(i), o = et(o)) : (i = Oc(i), o = Oc(o)), c = e(i, o);
          }
          return c;
        };
      }
      function Eo(e) {
        return Bt(function(t) {
          return t = ce(t, $e(D())), P(function(i) {
            var o = this;
            return e(t, function(c) {
              return Ke(c, o, i);
            });
          });
        });
      }
      function Qa(e, t) {
        t = t === r ? " " : et(t);
        var i = t.length;
        if (i < 2)
          return i ? Mo(t, e) : t;
        var o = Mo(t, Za(e / Bn(t)));
        return xn(t) ? Kt(Tt(o), 0, e).join("") : o.slice(0, e);
      }
      function V1(e, t, i, o) {
        var c = t & C, d = br(e);
        function m() {
          for (var V = -1, w = arguments.length, M = -1, g = o.length, J = U(g + w), F = this && this !== ye && this instanceof m ? d : e; ++M < g; )
            J[M] = o[M];
          for (; w--; )
            J[M++] = arguments[++V];
          return Ke(F, c ? i : this, J);
        }
        return m;
      }
      function nu(e) {
        return function(t, i, o) {
          return o && typeof o != "number" && Oe(t, i, o) && (i = o = r), t = Qt(t), i === r ? (i = t, t = 0) : i = Qt(i), o = o === r ? t < i ? 1 : -1 : Qt(o), t1(t, i, o, e);
        };
      }
      function Oa(e) {
        return function(t, i) {
          return typeof t == "string" && typeof i == "string" || (t = ht(t), i = ht(i)), e(t, i);
        };
      }
      function ru(e, t, i, o, c, d, m, V, w, M) {
        var g = t & z, J = g ? m : r, F = g ? r : m, x = g ? d : r, Q = g ? r : d;
        t |= g ? b : ne, t &= ~(g ? ne : b), t & j || (t &= ~(C | B));
        var H = [
          e,
          t,
          c,
          x,
          J,
          Q,
          F,
          V,
          w,
          M
        ], O = i.apply(r, H);
        return Do(e) && mu(O, H), O.placeholder = o, Vu(O, e, t);
      }
      function Fo(e) {
        var t = Ue[e];
        return function(i, o) {
          if (i = ht(i), o = o == null ? 0 : Ae(I(o), 292), o && Vc(i)) {
            var c = (te(i) + "e").split("e"), d = t(c[0] + "e" + (+c[1] + o));
            return c = (te(d) + "e").split("e"), +(c[0] + "e" + (+c[1] - o));
          }
          return t(i);
        };
      }
      var T1 = Qn && 1 / ma(new Qn([, -0]))[1] == ke ? function(e) {
        return new Qn(e);
      } : $o;
      function au(e) {
        return function(t) {
          var i = xe(t);
          return i == mt ? oo(t) : i == Vt ? Am(t) : Jm(t, e(t));
        };
      }
      function xt(e, t, i, o, c, d, m, V) {
        var w = t & B;
        if (!w && typeof e != "function")
          throw new st(h);
        var M = o ? o.length : 0;
        if (M || (t &= ~(b | ne), o = c = r), m = m === r ? m : Re(I(m), 0), V = V === r ? V : I(V), M -= c ? c.length : 0, t & ne) {
          var g = o, J = c;
          o = c = r;
        }
        var F = w ? r : Ao(e), x = [
          e,
          t,
          i,
          o,
          c,
          g,
          J,
          d,
          m,
          V
        ];
        if (F && S1(x, F), e = x[0], t = x[1], i = x[2], o = x[3], c = x[4], V = x[9] = x[9] === r ? w ? 0 : e.length : Re(x[9] - M, 0), !V && t & (z | $) && (t &= ~(z | $)), !t || t == C)
          var Q = p1(e, t, i);
        else
          t == z || t == $ ? Q = m1(e, t, V) : (t == b || t == (C | b)) && !c.length ? Q = V1(e, t, i, o) : Q = Ca.apply(r, x);
        var H = F ? Dc : mu;
        return Vu(H(Q, x), e, t);
      }
      function iu(e, t, i, o) {
        return e === r || wt(e, Dn[i]) && !re.call(o, i) ? t : e;
      }
      function ou(e, t, i, o, c, d) {
        return ue(e) && ue(t) && (d.set(t, e), Wa(e, t, r, ou, d), d.delete(t)), e;
      }
      function v1(e) {
        return Sr(e) ? r : e;
      }
      function lu(e, t, i, o, c, d) {
        var m = i & E, V = e.length, w = t.length;
        if (V != w && !(m && w > V))
          return !1;
        var M = d.get(e), g = d.get(t);
        if (M && g)
          return M == t && g == e;
        var J = -1, F = !0, x = i & W ? new fn() : r;
        for (d.set(e, t), d.set(t, e); ++J < V; ) {
          var Q = e[J], H = t[J];
          if (o)
            var O = m ? o(H, Q, J, t, e, d) : o(Q, H, J, e, t, d);
          if (O !== r) {
            if (O)
              continue;
            F = !1;
            break;
          }
          if (x) {
            if (!eo(t, function(_, K) {
              if (!vr(x, K) && (Q === _ || c(Q, _, i, o, d)))
                return x.push(K);
            })) {
              F = !1;
              break;
            }
          } else if (!(Q === H || c(Q, H, i, o, d))) {
            F = !1;
            break;
          }
        }
        return d.delete(e), d.delete(t), F;
      }
      function w1(e, t, i, o, c, d, m) {
        switch (i) {
          case Sn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Tr:
            return !(e.byteLength != t.byteLength || !d(new Ra(e), new Ra(t)));
          case dr:
          case fr:
          case hr:
            return wt(+e, +t);
          case la:
            return e.name == t.name && e.message == t.message;
          case pr:
          case mr:
            return e == t + "";
          case mt:
            var V = oo;
          case Vt:
            var w = o & E;
            if (V || (V = ma), e.size != t.size && !w)
              return !1;
            var M = m.get(e);
            if (M)
              return M == t;
            o |= W, m.set(e, t);
            var g = lu(V(e), V(t), o, c, d, m);
            return m.delete(e), g;
          case ca:
            if (Mr)
              return Mr.call(e) == Mr.call(t);
        }
        return !1;
      }
      function U1(e, t, i, o, c, d) {
        var m = i & E, V = So(e), w = V.length, M = So(t), g = M.length;
        if (w != g && !m)
          return !1;
        for (var J = w; J--; ) {
          var F = V[J];
          if (!(m ? F in t : re.call(t, F)))
            return !1;
        }
        var x = d.get(e), Q = d.get(t);
        if (x && Q)
          return x == t && Q == e;
        var H = !0;
        d.set(e, t), d.set(t, e);
        for (var O = m; ++J < w; ) {
          F = V[J];
          var _ = e[F], K = t[F];
          if (o)
            var nt = m ? o(K, _, F, t, e, d) : o(_, K, F, e, t, d);
          if (!(nt === r ? _ === K || c(_, K, i, o, d) : nt)) {
            H = !1;
            break;
          }
          O || (O = F == "constructor");
        }
        if (H && !O) {
          var ze = e.constructor, rt = t.constructor;
          ze != rt && "constructor" in e && "constructor" in t && !(typeof ze == "function" && ze instanceof ze && typeof rt == "function" && rt instanceof rt) && (H = !1);
        }
        return d.delete(e), d.delete(t), H;
      }
      function Bt(e) {
        return Oo(hu(e, r, Nu), e + "");
      }
      function So(e) {
        return kc(e, Me, Bo);
      }
      function Wo(e) {
        return kc(e, Xe, su);
      }
      var Ao = ka ? function(e) {
        return ka.get(e);
      } : $o;
      function za(e) {
        for (var t = e.name + "", i = On[t], o = re.call(On, t) ? i.length : 0; o--; ) {
          var c = i[o], d = c.func;
          if (d == null || d == e)
            return c.name;
        }
        return t;
      }
      function In(e) {
        var t = re.call(u, "placeholder") ? u : e;
        return t.placeholder;
      }
      function D() {
        var e = u.iteratee || qo;
        return e = e === qo ? Ec : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ga(e, t) {
        var i = e.__data__;
        return y1(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
      }
      function xo(e) {
        for (var t = Me(e), i = t.length; i--; ) {
          var o = t[i], c = e[o];
          t[i] = [o, c, du(c)];
        }
        return t;
      }
      function mn(e, t) {
        var i = Fm(e, t);
        return bc(i) ? i : r;
      }
      function R1(e) {
        var t = re.call(e, un), i = e[un];
        try {
          e[un] = r;
          var o = !0;
        } catch {
        }
        var c = wa.call(e);
        return o && (t ? e[un] = i : delete e[un]), c;
      }
      var Bo = so ? function(e) {
        return e == null ? [] : (e = oe(e), Ht(so(e), function(t) {
          return pc.call(e, t);
        }));
      } : el, su = so ? function(e) {
        for (var t = []; e; )
          Pt(t, Bo(e)), e = Na(e);
        return t;
      } : el, xe = Qe;
      (co && xe(new co(new ArrayBuffer(1))) != Sn || Ur && xe(new Ur()) != mt || uo && xe(uo.resolve()) != gs || Qn && xe(new Qn()) != Vt || Rr && xe(new Rr()) != Vr) && (xe = function(e) {
        var t = Qe(e), i = t == Ft ? e.constructor : r, o = i ? Vn(i) : "";
        if (o)
          switch (o) {
            case rV:
              return Sn;
            case aV:
              return mt;
            case iV:
              return gs;
            case oV:
              return Vt;
            case lV:
              return Vr;
          }
        return t;
      });
      function N1(e, t, i) {
        for (var o = -1, c = i.length; ++o < c; ) {
          var d = i[o], m = d.size;
          switch (d.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              t -= m;
              break;
            case "take":
              t = Ae(t, e + m);
              break;
            case "takeRight":
              e = Re(e, t - m);
              break;
          }
        }
        return { start: e, end: t };
      }
      function M1(e) {
        var t = e.match(bp);
        return t ? t[1].split(Ep) : [];
      }
      function cu(e, t, i) {
        t = qt(t, e);
        for (var o = -1, c = t.length, d = !1; ++o < c; ) {
          var m = kt(t[o]);
          if (!(d = e != null && i(e, m)))
            break;
          e = e[m];
        }
        return d || ++o != c ? d : (c = e == null ? 0 : e.length, !!c && _a(c) && Ct(m, c) && (Y(e) || Tn(e)));
      }
      function g1(e) {
        var t = e.length, i = new e.constructor(t);
        return t && typeof e[0] == "string" && re.call(e, "index") && (i.index = e.index, i.input = e.input), i;
      }
      function uu(e) {
        return typeof e.constructor == "function" && !Er(e) ? zn(Na(e)) : {};
      }
      function Z1(e, t, i) {
        var o = e.constructor;
        switch (t) {
          case Tr:
            return bo(e);
          case dr:
          case fr:
            return new o(+e);
          case Sn:
            return s1(e, i);
          case Ai:
          case xi:
          case Bi:
          case Ci:
          case Di:
          case Qi:
          case Oi:
          case zi:
          case Gi:
            return Pc(e, i);
          case mt:
            return new o();
          case hr:
          case mr:
            return new o(e);
          case pr:
            return c1(e);
          case Vt:
            return new o();
          case ca:
            return u1(e);
        }
      }
      function J1(e, t) {
        var i = t.length;
        if (!i)
          return e;
        var o = i - 1;
        return t[o] = (i > 1 ? "& " : "") + t[o], t = t.join(i > 2 ? ", " : " "), e.replace(yp, `{
/* [wrapped with ` + t + `] */
`);
      }
      function k1(e) {
        return Y(e) || Tn(e) || !!(mc && e && e[mc]);
      }
      function Ct(e, t) {
        var i = typeof e;
        return t = t == null ? De : t, !!t && (i == "number" || i != "symbol" && Qp.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Oe(e, t, i) {
        if (!ue(i))
          return !1;
        var o = typeof t;
        return (o == "number" ? je(i) && Ct(t, i.length) : o == "string" && t in i) ? wt(i[t], e) : !1;
      }
      function Co(e, t) {
        if (Y(e))
          return !1;
        var i = typeof e;
        return i == "number" || i == "symbol" || i == "boolean" || e == null || tt(e) ? !0 : gp.test(e) || !Mp.test(e) || t != null && e in oe(t);
      }
      function y1(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Do(e) {
        var t = za(e), i = u[t];
        if (typeof i != "function" || !(t in L.prototype))
          return !1;
        if (e === i)
          return !0;
        var o = Ao(i);
        return !!o && e === o[0];
      }
      function b1(e) {
        return !!dc && dc in e;
      }
      var E1 = Ta ? Dt : tl;
      function Er(e) {
        var t = e && e.constructor, i = typeof t == "function" && t.prototype || Dn;
        return e === i;
      }
      function du(e) {
        return e === e && !ue(e);
      }
      function fu(e, t) {
        return function(i) {
          return i == null ? !1 : i[e] === t && (t !== r || e in oe(i));
        };
      }
      function F1(e) {
        var t = ja(e, function(o) {
          return i.size === N && i.clear(), o;
        }), i = t.cache;
        return t;
      }
      function S1(e, t) {
        var i = e[1], o = t[1], c = i | o, d = c < (C | B | q), m = o == q && i == z || o == q && i == X && e[7].length <= t[8] || o == (q | X) && t[7].length <= t[8] && i == z;
        if (!(d || m))
          return e;
        o & C && (e[2] = t[2], c |= i & C ? 0 : j);
        var V = t[3];
        if (V) {
          var w = e[3];
          e[3] = w ? Xc(w, V, t[4]) : V, e[4] = w ? jt(e[3], Z) : t[4];
        }
        return V = t[5], V && (w = e[5], e[5] = w ? _c(w, V, t[6]) : V, e[6] = w ? jt(e[5], Z) : t[6]), V = t[7], V && (e[7] = V), o & q && (e[8] = e[8] == null ? t[8] : Ae(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = c, e;
      }
      function W1(e) {
        var t = [];
        if (e != null)
          for (var i in oe(e))
            t.push(i);
        return t;
      }
      function A1(e) {
        return wa.call(e);
      }
      function hu(e, t, i) {
        return t = Re(t === r ? e.length - 1 : t, 0), function() {
          for (var o = arguments, c = -1, d = Re(o.length - t, 0), m = U(d); ++c < d; )
            m[c] = o[t + c];
          c = -1;
          for (var V = U(t + 1); ++c < t; )
            V[c] = o[c];
          return V[t] = i(m), Ke(e, this, V);
        };
      }
      function pu(e, t) {
        return t.length < 2 ? e : pn(e, dt(t, 0, -1));
      }
      function x1(e, t) {
        for (var i = e.length, o = Ae(t.length, i), c = Pe(e); o--; ) {
          var d = t[o];
          e[o] = Ct(d, i) ? c[d] : r;
        }
        return e;
      }
      function Qo(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var mu = Tu(Dc), Fr = Lm || function(e, t) {
        return ye.setTimeout(e, t);
      }, Oo = Tu(a1);
      function Vu(e, t, i) {
        var o = t + "";
        return Oo(e, J1(o, B1(M1(o), i)));
      }
      function Tu(e) {
        var t = 0, i = 0;
        return function() {
          var o = eV(), c = pe - (o - i);
          if (i = o, c > 0) {
            if (++t >= fe)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function Ya(e, t) {
        var i = -1, o = e.length, c = o - 1;
        for (t = t === r ? o : t; ++i < t; ) {
          var d = No(i, c), m = e[d];
          e[d] = e[i], e[i] = m;
        }
        return e.length = t, e;
      }
      var vu = F1(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Zp, function(i, o, c, d) {
          t.push(c ? d.replace(Wp, "$1") : o || i);
        }), t;
      });
      function kt(e) {
        if (typeof e == "string" || tt(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -ke ? "-0" : t;
      }
      function Vn(e) {
        if (e != null) {
          try {
            return va.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function B1(e, t) {
        return lt(cp, function(i) {
          var o = "_." + i[0];
          t & i[1] && !ha(e, o) && e.push(o);
        }), e.sort();
      }
      function wu(e) {
        if (e instanceof L)
          return e.clone();
        var t = new ct(e.__wrapped__, e.__chain__);
        return t.__actions__ = Pe(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function C1(e, t, i) {
        (i ? Oe(e, t, i) : t === r) ? t = 1 : t = Re(I(t), 0);
        var o = e == null ? 0 : e.length;
        if (!o || t < 1)
          return [];
        for (var c = 0, d = 0, m = U(Za(o / t)); c < o; )
          m[d++] = dt(e, c, c += t);
        return m;
      }
      function D1(e) {
        for (var t = -1, i = e == null ? 0 : e.length, o = 0, c = []; ++t < i; ) {
          var d = e[t];
          d && (c[o++] = d);
        }
        return c;
      }
      function Q1() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = U(e - 1), i = arguments[0], o = e; o--; )
          t[o - 1] = arguments[o];
        return Pt(Y(i) ? Pe(i) : [i], be(t, 1));
      }
      var O1 = P(function(e, t) {
        return me(e) ? Zr(e, be(t, 1, me, !0)) : [];
      }), z1 = P(function(e, t) {
        var i = ft(t);
        return me(i) && (i = r), me(e) ? Zr(e, be(t, 1, me, !0), D(i, 2)) : [];
      }), G1 = P(function(e, t) {
        var i = ft(t);
        return me(i) && (i = r), me(e) ? Zr(e, be(t, 1, me, !0), r, i) : [];
      });
      function Y1(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t = i || t === r ? 1 : I(t), dt(e, t < 0 ? 0 : t, o)) : [];
      }
      function I1(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t = i || t === r ? 1 : I(t), t = o - t, dt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function H1(e, t) {
        return e && e.length ? xa(e, D(t, 3), !0, !0) : [];
      }
      function P1(e, t) {
        return e && e.length ? xa(e, D(t, 3), !0) : [];
      }
      function j1(e, t, i, o) {
        var c = e == null ? 0 : e.length;
        return c ? (i && typeof i != "number" && Oe(e, t, i) && (i = 0, o = c), QV(e, t, i, o)) : [];
      }
      function Uu(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = i == null ? 0 : I(i);
        return c < 0 && (c = Re(o + c, 0)), pa(e, D(t, 3), c);
      }
      function Ru(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o - 1;
        return i !== r && (c = I(i), c = i < 0 ? Re(o + c, 0) : Ae(c, o - 1)), pa(e, D(t, 3), c, !0);
      }
      function Nu(e) {
        var t = e == null ? 0 : e.length;
        return t ? be(e, 1) : [];
      }
      function X1(e) {
        var t = e == null ? 0 : e.length;
        return t ? be(e, ke) : [];
      }
      function _1(e, t) {
        var i = e == null ? 0 : e.length;
        return i ? (t = t === r ? 1 : I(t), be(e, t)) : [];
      }
      function L1(e) {
        for (var t = -1, i = e == null ? 0 : e.length, o = {}; ++t < i; ) {
          var c = e[t];
          o[c[0]] = c[1];
        }
        return o;
      }
      function Mu(e) {
        return e && e.length ? e[0] : r;
      }
      function q1(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = i == null ? 0 : I(i);
        return c < 0 && (c = Re(o + c, 0)), An(e, t, c);
      }
      function K1(e) {
        var t = e == null ? 0 : e.length;
        return t ? dt(e, 0, -1) : [];
      }
      var $1 = P(function(e) {
        var t = ce(e, ko);
        return t.length && t[0] === e[0] ? To(t) : [];
      }), e0 = P(function(e) {
        var t = ft(e), i = ce(e, ko);
        return t === ft(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? To(i, D(t, 2)) : [];
      }), t0 = P(function(e) {
        var t = ft(e), i = ce(e, ko);
        return t = typeof t == "function" ? t : r, t && i.pop(), i.length && i[0] === e[0] ? To(i, r, t) : [];
      });
      function n0(e, t) {
        return e == null ? "" : Km.call(e, t);
      }
      function ft(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function r0(e, t, i) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o;
        return i !== r && (c = I(i), c = c < 0 ? Re(o + c, 0) : Ae(c, o - 1)), t === t ? Bm(e, t, c) : pa(e, rc, c, !0);
      }
      function a0(e, t) {
        return e && e.length ? Ac(e, I(t)) : r;
      }
      var i0 = P(gu);
      function gu(e, t) {
        return e && e.length && t && t.length ? Ro(e, t) : e;
      }
      function o0(e, t, i) {
        return e && e.length && t && t.length ? Ro(e, t, D(i, 2)) : e;
      }
      function l0(e, t, i) {
        return e && e.length && t && t.length ? Ro(e, t, r, i) : e;
      }
      var s0 = Bt(function(e, t) {
        var i = e == null ? 0 : e.length, o = ho(e, t);
        return Cc(e, ce(t, function(c) {
          return Ct(c, i) ? +c : c;
        }).sort(jc)), o;
      });
      function c0(e, t) {
        var i = [];
        if (!(e && e.length))
          return i;
        var o = -1, c = [], d = e.length;
        for (t = D(t, 3); ++o < d; ) {
          var m = e[o];
          t(m, o, e) && (i.push(m), c.push(o));
        }
        return Cc(e, c), i;
      }
      function zo(e) {
        return e == null ? e : nV.call(e);
      }
      function u0(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (i && typeof i != "number" && Oe(e, t, i) ? (t = 0, i = o) : (t = t == null ? 0 : I(t), i = i === r ? o : I(i)), dt(e, t, i)) : [];
      }
      function d0(e, t) {
        return Aa(e, t);
      }
      function f0(e, t, i) {
        return go(e, t, D(i, 2));
      }
      function h0(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var o = Aa(e, t);
          if (o < i && wt(e[o], t))
            return o;
        }
        return -1;
      }
      function p0(e, t) {
        return Aa(e, t, !0);
      }
      function m0(e, t, i) {
        return go(e, t, D(i, 2), !0);
      }
      function V0(e, t) {
        var i = e == null ? 0 : e.length;
        if (i) {
          var o = Aa(e, t, !0) - 1;
          if (wt(e[o], t))
            return o;
        }
        return -1;
      }
      function T0(e) {
        return e && e.length ? Qc(e) : [];
      }
      function v0(e, t) {
        return e && e.length ? Qc(e, D(t, 2)) : [];
      }
      function w0(e) {
        var t = e == null ? 0 : e.length;
        return t ? dt(e, 1, t) : [];
      }
      function U0(e, t, i) {
        return e && e.length ? (t = i || t === r ? 1 : I(t), dt(e, 0, t < 0 ? 0 : t)) : [];
      }
      function R0(e, t, i) {
        var o = e == null ? 0 : e.length;
        return o ? (t = i || t === r ? 1 : I(t), t = o - t, dt(e, t < 0 ? 0 : t, o)) : [];
      }
      function N0(e, t) {
        return e && e.length ? xa(e, D(t, 3), !1, !0) : [];
      }
      function M0(e, t) {
        return e && e.length ? xa(e, D(t, 3)) : [];
      }
      var g0 = P(function(e) {
        return Lt(be(e, 1, me, !0));
      }), Z0 = P(function(e) {
        var t = ft(e);
        return me(t) && (t = r), Lt(be(e, 1, me, !0), D(t, 2));
      }), J0 = P(function(e) {
        var t = ft(e);
        return t = typeof t == "function" ? t : r, Lt(be(e, 1, me, !0), r, t);
      });
      function k0(e) {
        return e && e.length ? Lt(e) : [];
      }
      function y0(e, t) {
        return e && e.length ? Lt(e, D(t, 2)) : [];
      }
      function b0(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? Lt(e, r, t) : [];
      }
      function Go(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = Ht(e, function(i) {
          if (me(i))
            return t = Re(i.length, t), !0;
        }), ao(t, function(i) {
          return ce(e, to(i));
        });
      }
      function Zu(e, t) {
        if (!(e && e.length))
          return [];
        var i = Go(e);
        return t == null ? i : ce(i, function(o) {
          return Ke(t, r, o);
        });
      }
      var E0 = P(function(e, t) {
        return me(e) ? Zr(e, t) : [];
      }), F0 = P(function(e) {
        return Jo(Ht(e, me));
      }), S0 = P(function(e) {
        var t = ft(e);
        return me(t) && (t = r), Jo(Ht(e, me), D(t, 2));
      }), W0 = P(function(e) {
        var t = ft(e);
        return t = typeof t == "function" ? t : r, Jo(Ht(e, me), r, t);
      }), A0 = P(Go);
      function x0(e, t) {
        return Yc(e || [], t || [], gr);
      }
      function B0(e, t) {
        return Yc(e || [], t || [], yr);
      }
      var C0 = P(function(e) {
        var t = e.length, i = t > 1 ? e[t - 1] : r;
        return i = typeof i == "function" ? (e.pop(), i) : r, Zu(e, i);
      });
      function Ju(e) {
        var t = u(e);
        return t.__chain__ = !0, t;
      }
      function D0(e, t) {
        return t(e), e;
      }
      function Ia(e, t) {
        return t(e);
      }
      var Q0 = Bt(function(e) {
        var t = e.length, i = t ? e[0] : 0, o = this.__wrapped__, c = function(d) {
          return ho(d, e);
        };
        return t > 1 || this.__actions__.length || !(o instanceof L) || !Ct(i) ? this.thru(c) : (o = o.slice(i, +i + (t ? 1 : 0)), o.__actions__.push({
          func: Ia,
          args: [c],
          thisArg: r
        }), new ct(o, this.__chain__).thru(function(d) {
          return t && !d.length && d.push(r), d;
        }));
      });
      function O0() {
        return Ju(this);
      }
      function z0() {
        return new ct(this.value(), this.__chain__);
      }
      function G0() {
        this.__values__ === r && (this.__values__ = Ou(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Y0() {
        return this;
      }
      function I0(e) {
        for (var t, i = this; i instanceof ba; ) {
          var o = wu(i);
          o.__index__ = 0, o.__values__ = r, t ? c.__wrapped__ = o : t = o;
          var c = o;
          i = i.__wrapped__;
        }
        return c.__wrapped__ = e, t;
      }
      function H0() {
        var e = this.__wrapped__;
        if (e instanceof L) {
          var t = e;
          return this.__actions__.length && (t = new L(this)), t = t.reverse(), t.__actions__.push({
            func: Ia,
            args: [zo],
            thisArg: r
          }), new ct(t, this.__chain__);
        }
        return this.thru(zo);
      }
      function P0() {
        return Gc(this.__wrapped__, this.__actions__);
      }
      var j0 = Ba(function(e, t, i) {
        re.call(e, i) ? ++e[i] : At(e, i, 1);
      });
      function X0(e, t, i) {
        var o = Y(e) ? tc : DV;
        return i && Oe(e, t, i) && (t = r), o(e, D(t, 3));
      }
      function _0(e, t) {
        var i = Y(e) ? Ht : Zc;
        return i(e, D(t, 3));
      }
      var L0 = $c(Uu), q0 = $c(Ru);
      function K0(e, t) {
        return be(Ha(e, t), 1);
      }
      function $0(e, t) {
        return be(Ha(e, t), ke);
      }
      function eT(e, t, i) {
        return i = i === r ? 1 : I(i), be(Ha(e, t), i);
      }
      function ku(e, t) {
        var i = Y(e) ? lt : _t;
        return i(e, D(t, 3));
      }
      function yu(e, t) {
        var i = Y(e) ? wm : gc;
        return i(e, D(t, 3));
      }
      var tT = Ba(function(e, t, i) {
        re.call(e, i) ? e[i].push(t) : At(e, i, [t]);
      });
      function nT(e, t, i, o) {
        e = je(e) ? e : Pn(e), i = i && !o ? I(i) : 0;
        var c = e.length;
        return i < 0 && (i = Re(c + i, 0)), La(e) ? i <= c && e.indexOf(t, i) > -1 : !!c && An(e, t, i) > -1;
      }
      var rT = P(function(e, t, i) {
        var o = -1, c = typeof t == "function", d = je(e) ? U(e.length) : [];
        return _t(e, function(m) {
          d[++o] = c ? Ke(t, m, i) : Jr(m, t, i);
        }), d;
      }), aT = Ba(function(e, t, i) {
        At(e, i, t);
      });
      function Ha(e, t) {
        var i = Y(e) ? ce : Fc;
        return i(e, D(t, 3));
      }
      function iT(e, t, i, o) {
        return e == null ? [] : (Y(t) || (t = t == null ? [] : [t]), i = o ? r : i, Y(i) || (i = i == null ? [] : [i]), xc(e, t, i));
      }
      var oT = Ba(function(e, t, i) {
        e[i ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function lT(e, t, i) {
        var o = Y(e) ? $i : ic, c = arguments.length < 3;
        return o(e, D(t, 4), i, c, _t);
      }
      function sT(e, t, i) {
        var o = Y(e) ? Um : ic, c = arguments.length < 3;
        return o(e, D(t, 4), i, c, gc);
      }
      function cT(e, t) {
        var i = Y(e) ? Ht : Zc;
        return i(e, Xa(D(t, 3)));
      }
      function uT(e) {
        var t = Y(e) ? Uc : n1;
        return t(e);
      }
      function dT(e, t, i) {
        (i ? Oe(e, t, i) : t === r) ? t = 1 : t = I(t);
        var o = Y(e) ? WV : r1;
        return o(e, t);
      }
      function fT(e) {
        var t = Y(e) ? AV : i1;
        return t(e);
      }
      function hT(e) {
        if (e == null)
          return 0;
        if (je(e))
          return La(e) ? Bn(e) : e.length;
        var t = xe(e);
        return t == mt || t == Vt ? e.size : wo(e).length;
      }
      function pT(e, t, i) {
        var o = Y(e) ? eo : o1;
        return i && Oe(e, t, i) && (t = r), o(e, D(t, 3));
      }
      var mT = P(function(e, t) {
        if (e == null)
          return [];
        var i = t.length;
        return i > 1 && Oe(e, t[0], t[1]) ? t = [] : i > 2 && Oe(t[0], t[1], t[2]) && (t = [t[0]]), xc(e, be(t, 1), []);
      }), Pa = _m || function() {
        return ye.Date.now();
      };
      function VT(e, t) {
        if (typeof t != "function")
          throw new st(h);
        return e = I(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function bu(e, t, i) {
        return t = i ? r : t, t = e && t == null ? e.length : t, xt(e, q, r, r, r, r, t);
      }
      function Eu(e, t) {
        var i;
        if (typeof t != "function")
          throw new st(h);
        return e = I(e), function() {
          return --e > 0 && (i = t.apply(this, arguments)), e <= 1 && (t = r), i;
        };
      }
      var Yo = P(function(e, t, i) {
        var o = C;
        if (i.length) {
          var c = jt(i, In(Yo));
          o |= b;
        }
        return xt(e, o, t, i, c);
      }), Fu = P(function(e, t, i) {
        var o = C | B;
        if (i.length) {
          var c = jt(i, In(Fu));
          o |= b;
        }
        return xt(t, o, e, i, c);
      });
      function Su(e, t, i) {
        t = i ? r : t;
        var o = xt(e, z, r, r, r, r, r, t);
        return o.placeholder = Su.placeholder, o;
      }
      function Wu(e, t, i) {
        t = i ? r : t;
        var o = xt(e, $, r, r, r, r, r, t);
        return o.placeholder = Wu.placeholder, o;
      }
      function Au(e, t, i) {
        var o, c, d, m, V, w, M = 0, g = !1, J = !1, F = !0;
        if (typeof e != "function")
          throw new st(h);
        t = ht(t) || 0, ue(i) && (g = !!i.leading, J = "maxWait" in i, d = J ? Re(ht(i.maxWait) || 0, t) : d, F = "trailing" in i ? !!i.trailing : F);
        function x(Ve) {
          var Ut = o, Ot = c;
          return o = c = r, M = Ve, m = e.apply(Ot, Ut), m;
        }
        function Q(Ve) {
          return M = Ve, V = Fr(_, t), g ? x(Ve) : m;
        }
        function H(Ve) {
          var Ut = Ve - w, Ot = Ve - M, $u = t - Ut;
          return J ? Ae($u, d - Ot) : $u;
        }
        function O(Ve) {
          var Ut = Ve - w, Ot = Ve - M;
          return w === r || Ut >= t || Ut < 0 || J && Ot >= d;
        }
        function _() {
          var Ve = Pa();
          if (O(Ve))
            return K(Ve);
          V = Fr(_, H(Ve));
        }
        function K(Ve) {
          return V = r, F && o ? x(Ve) : (o = c = r, m);
        }
        function nt() {
          V !== r && Ic(V), M = 0, o = w = c = V = r;
        }
        function ze() {
          return V === r ? m : K(Pa());
        }
        function rt() {
          var Ve = Pa(), Ut = O(Ve);
          if (o = arguments, c = this, w = Ve, Ut) {
            if (V === r)
              return Q(w);
            if (J)
              return Ic(V), V = Fr(_, t), x(w);
          }
          return V === r && (V = Fr(_, t)), m;
        }
        return rt.cancel = nt, rt.flush = ze, rt;
      }
      var TT = P(function(e, t) {
        return Mc(e, 1, t);
      }), vT = P(function(e, t, i) {
        return Mc(e, ht(t) || 0, i);
      });
      function wT(e) {
        return xt(e, We);
      }
      function ja(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new st(h);
        var i = function() {
          var o = arguments, c = t ? t.apply(this, o) : o[0], d = i.cache;
          if (d.has(c))
            return d.get(c);
          var m = e.apply(this, o);
          return i.cache = d.set(c, m) || d, m;
        };
        return i.cache = new (ja.Cache || Wt)(), i;
      }
      ja.Cache = Wt;
      function Xa(e) {
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
      function UT(e) {
        return Eu(2, e);
      }
      var RT = l1(function(e, t) {
        t = t.length == 1 && Y(t[0]) ? ce(t[0], $e(D())) : ce(be(t, 1), $e(D()));
        var i = t.length;
        return P(function(o) {
          for (var c = -1, d = Ae(o.length, i); ++c < d; )
            o[c] = t[c].call(this, o[c]);
          return Ke(e, this, o);
        });
      }), Io = P(function(e, t) {
        var i = jt(t, In(Io));
        return xt(e, b, r, t, i);
      }), xu = P(function(e, t) {
        var i = jt(t, In(xu));
        return xt(e, ne, r, t, i);
      }), NT = Bt(function(e, t) {
        return xt(e, X, r, r, r, t);
      });
      function MT(e, t) {
        if (typeof e != "function")
          throw new st(h);
        return t = t === r ? t : I(t), P(e, t);
      }
      function gT(e, t) {
        if (typeof e != "function")
          throw new st(h);
        return t = t == null ? 0 : Re(I(t), 0), P(function(i) {
          var o = i[t], c = Kt(i, 0, t);
          return o && Pt(c, o), Ke(e, this, c);
        });
      }
      function ZT(e, t, i) {
        var o = !0, c = !0;
        if (typeof e != "function")
          throw new st(h);
        return ue(i) && (o = "leading" in i ? !!i.leading : o, c = "trailing" in i ? !!i.trailing : c), Au(e, t, {
          leading: o,
          maxWait: t,
          trailing: c
        });
      }
      function JT(e) {
        return bu(e, 1);
      }
      function kT(e, t) {
        return Io(yo(t), e);
      }
      function yT() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return Y(e) ? e : [e];
      }
      function bT(e) {
        return ut(e, A);
      }
      function ET(e, t) {
        return t = typeof t == "function" ? t : r, ut(e, A, t);
      }
      function FT(e) {
        return ut(e, y | A);
      }
      function ST(e, t) {
        return t = typeof t == "function" ? t : r, ut(e, y | A, t);
      }
      function WT(e, t) {
        return t == null || Nc(e, t, Me(t));
      }
      function wt(e, t) {
        return e === t || e !== e && t !== t;
      }
      var AT = Oa(Vo), xT = Oa(function(e, t) {
        return e >= t;
      }), Tn = yc(function() {
        return arguments;
      }()) ? yc : function(e) {
        return he(e) && re.call(e, "callee") && !pc.call(e, "callee");
      }, Y = U.isArray, BT = _s ? $e(_s) : IV;
      function je(e) {
        return e != null && _a(e.length) && !Dt(e);
      }
      function me(e) {
        return he(e) && je(e);
      }
      function CT(e) {
        return e === !0 || e === !1 || he(e) && Qe(e) == dr;
      }
      var $t = qm || tl, DT = Ls ? $e(Ls) : HV;
      function QT(e) {
        return he(e) && e.nodeType === 1 && !Sr(e);
      }
      function OT(e) {
        if (e == null)
          return !0;
        if (je(e) && (Y(e) || typeof e == "string" || typeof e.splice == "function" || $t(e) || Hn(e) || Tn(e)))
          return !e.length;
        var t = xe(e);
        if (t == mt || t == Vt)
          return !e.size;
        if (Er(e))
          return !wo(e).length;
        for (var i in e)
          if (re.call(e, i))
            return !1;
        return !0;
      }
      function zT(e, t) {
        return kr(e, t);
      }
      function GT(e, t, i) {
        i = typeof i == "function" ? i : r;
        var o = i ? i(e, t) : r;
        return o === r ? kr(e, t, r, i) : !!o;
      }
      function Ho(e) {
        if (!he(e))
          return !1;
        var t = Qe(e);
        return t == la || t == dp || typeof e.message == "string" && typeof e.name == "string" && !Sr(e);
      }
      function YT(e) {
        return typeof e == "number" && Vc(e);
      }
      function Dt(e) {
        if (!ue(e))
          return !1;
        var t = Qe(e);
        return t == sa || t == Ms || t == up || t == hp;
      }
      function Bu(e) {
        return typeof e == "number" && e == I(e);
      }
      function _a(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= De;
      }
      function ue(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function he(e) {
        return e != null && typeof e == "object";
      }
      var Cu = qs ? $e(qs) : jV;
      function IT(e, t) {
        return e === t || vo(e, t, xo(t));
      }
      function HT(e, t, i) {
        return i = typeof i == "function" ? i : r, vo(e, t, xo(t), i);
      }
      function PT(e) {
        return Du(e) && e != +e;
      }
      function jT(e) {
        if (E1(e))
          throw new G(f);
        return bc(e);
      }
      function XT(e) {
        return e === null;
      }
      function _T(e) {
        return e == null;
      }
      function Du(e) {
        return typeof e == "number" || he(e) && Qe(e) == hr;
      }
      function Sr(e) {
        if (!he(e) || Qe(e) != Ft)
          return !1;
        var t = Na(e);
        if (t === null)
          return !0;
        var i = re.call(t, "constructor") && t.constructor;
        return typeof i == "function" && i instanceof i && va.call(i) == Hm;
      }
      var Po = Ks ? $e(Ks) : XV;
      function LT(e) {
        return Bu(e) && e >= -De && e <= De;
      }
      var Qu = $s ? $e($s) : _V;
      function La(e) {
        return typeof e == "string" || !Y(e) && he(e) && Qe(e) == mr;
      }
      function tt(e) {
        return typeof e == "symbol" || he(e) && Qe(e) == ca;
      }
      var Hn = ec ? $e(ec) : LV;
      function qT(e) {
        return e === r;
      }
      function KT(e) {
        return he(e) && xe(e) == Vr;
      }
      function $T(e) {
        return he(e) && Qe(e) == mp;
      }
      var ev = Oa(Uo), tv = Oa(function(e, t) {
        return e <= t;
      });
      function Ou(e) {
        if (!e)
          return [];
        if (je(e))
          return La(e) ? Tt(e) : Pe(e);
        if (wr && e[wr])
          return Wm(e[wr]());
        var t = xe(e), i = t == mt ? oo : t == Vt ? ma : Pn;
        return i(e);
      }
      function Qt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = ht(e), e === ke || e === -ke) {
          var t = e < 0 ? -1 : 1;
          return t * ur;
        }
        return e === e ? e : 0;
      }
      function I(e) {
        var t = Qt(e), i = t % 1;
        return t === t ? i ? t - i : t : 0;
      }
      function zu(e) {
        return e ? hn(I(e), 0, gt) : 0;
      }
      function ht(e) {
        if (typeof e == "number")
          return e;
        if (tt(e))
          return ia;
        if (ue(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ue(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = oc(e);
        var i = Bp.test(e);
        return i || Dp.test(e) ? Vm(e.slice(2), i ? 2 : 8) : xp.test(e) ? ia : +e;
      }
      function Gu(e) {
        return Jt(e, Xe(e));
      }
      function nv(e) {
        return e ? hn(I(e), -De, De) : e === 0 ? e : 0;
      }
      function te(e) {
        return e == null ? "" : et(e);
      }
      var rv = Gn(function(e, t) {
        if (Er(t) || je(t)) {
          Jt(t, Me(t), e);
          return;
        }
        for (var i in t)
          re.call(t, i) && gr(e, i, t[i]);
      }), Yu = Gn(function(e, t) {
        Jt(t, Xe(t), e);
      }), qa = Gn(function(e, t, i, o) {
        Jt(t, Xe(t), e, o);
      }), av = Gn(function(e, t, i, o) {
        Jt(t, Me(t), e, o);
      }), iv = Bt(ho);
      function ov(e, t) {
        var i = zn(e);
        return t == null ? i : Rc(i, t);
      }
      var lv = P(function(e, t) {
        e = oe(e);
        var i = -1, o = t.length, c = o > 2 ? t[2] : r;
        for (c && Oe(t[0], t[1], c) && (o = 1); ++i < o; )
          for (var d = t[i], m = Xe(d), V = -1, w = m.length; ++V < w; ) {
            var M = m[V], g = e[M];
            (g === r || wt(g, Dn[M]) && !re.call(e, M)) && (e[M] = d[M]);
          }
        return e;
      }), sv = P(function(e) {
        return e.push(r, ou), Ke(Iu, r, e);
      });
      function cv(e, t) {
        return nc(e, D(t, 3), Zt);
      }
      function uv(e, t) {
        return nc(e, D(t, 3), mo);
      }
      function dv(e, t) {
        return e == null ? e : po(e, D(t, 3), Xe);
      }
      function fv(e, t) {
        return e == null ? e : Jc(e, D(t, 3), Xe);
      }
      function hv(e, t) {
        return e && Zt(e, D(t, 3));
      }
      function pv(e, t) {
        return e && mo(e, D(t, 3));
      }
      function mv(e) {
        return e == null ? [] : Sa(e, Me(e));
      }
      function Vv(e) {
        return e == null ? [] : Sa(e, Xe(e));
      }
      function jo(e, t, i) {
        var o = e == null ? r : pn(e, t);
        return o === r ? i : o;
      }
      function Tv(e, t) {
        return e != null && cu(e, t, OV);
      }
      function Xo(e, t) {
        return e != null && cu(e, t, zV);
      }
      var vv = tu(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = wa.call(t)), e[t] = i;
      }, Lo(_e)), wv = tu(function(e, t, i) {
        t != null && typeof t.toString != "function" && (t = wa.call(t)), re.call(e, t) ? e[t].push(i) : e[t] = [i];
      }, D), Uv = P(Jr);
      function Me(e) {
        return je(e) ? wc(e) : wo(e);
      }
      function Xe(e) {
        return je(e) ? wc(e, !0) : qV(e);
      }
      function Rv(e, t) {
        var i = {};
        return t = D(t, 3), Zt(e, function(o, c, d) {
          At(i, t(o, c, d), o);
        }), i;
      }
      function Nv(e, t) {
        var i = {};
        return t = D(t, 3), Zt(e, function(o, c, d) {
          At(i, c, t(o, c, d));
        }), i;
      }
      var Mv = Gn(function(e, t, i) {
        Wa(e, t, i);
      }), Iu = Gn(function(e, t, i, o) {
        Wa(e, t, i, o);
      }), gv = Bt(function(e, t) {
        var i = {};
        if (e == null)
          return i;
        var o = !1;
        t = ce(t, function(d) {
          return d = qt(d, e), o || (o = d.length > 1), d;
        }), Jt(e, Wo(e), i), o && (i = ut(i, y | k | A, v1));
        for (var c = t.length; c--; )
          Zo(i, t[c]);
        return i;
      });
      function Zv(e, t) {
        return Hu(e, Xa(D(t)));
      }
      var Jv = Bt(function(e, t) {
        return e == null ? {} : $V(e, t);
      });
      function Hu(e, t) {
        if (e == null)
          return {};
        var i = ce(Wo(e), function(o) {
          return [o];
        });
        return t = D(t), Bc(e, i, function(o, c) {
          return t(o, c[0]);
        });
      }
      function kv(e, t, i) {
        t = qt(t, e);
        var o = -1, c = t.length;
        for (c || (c = 1, e = r); ++o < c; ) {
          var d = e == null ? r : e[kt(t[o])];
          d === r && (o = c, d = i), e = Dt(d) ? d.call(e) : d;
        }
        return e;
      }
      function yv(e, t, i) {
        return e == null ? e : yr(e, t, i);
      }
      function bv(e, t, i, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : yr(e, t, i, o);
      }
      var Pu = au(Me), ju = au(Xe);
      function Ev(e, t, i) {
        var o = Y(e), c = o || $t(e) || Hn(e);
        if (t = D(t, 4), i == null) {
          var d = e && e.constructor;
          c ? i = o ? new d() : [] : ue(e) ? i = Dt(d) ? zn(Na(e)) : {} : i = {};
        }
        return (c ? lt : Zt)(e, function(m, V, w) {
          return t(i, m, V, w);
        }), i;
      }
      function Fv(e, t) {
        return e == null ? !0 : Zo(e, t);
      }
      function Sv(e, t, i) {
        return e == null ? e : zc(e, t, yo(i));
      }
      function Wv(e, t, i, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : zc(e, t, yo(i), o);
      }
      function Pn(e) {
        return e == null ? [] : io(e, Me(e));
      }
      function Av(e) {
        return e == null ? [] : io(e, Xe(e));
      }
      function xv(e, t, i) {
        return i === r && (i = t, t = r), i !== r && (i = ht(i), i = i === i ? i : 0), t !== r && (t = ht(t), t = t === t ? t : 0), hn(ht(e), t, i);
      }
      function Bv(e, t, i) {
        return t = Qt(t), i === r ? (i = t, t = 0) : i = Qt(i), e = ht(e), GV(e, t, i);
      }
      function Cv(e, t, i) {
        if (i && typeof i != "boolean" && Oe(e, t, i) && (t = i = r), i === r && (typeof t == "boolean" ? (i = t, t = r) : typeof e == "boolean" && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Qt(e), t === r ? (t = e, e = 0) : t = Qt(t)), e > t) {
          var o = e;
          e = t, t = o;
        }
        if (i || e % 1 || t % 1) {
          var c = Tc();
          return Ae(e + c * (t - e + mm("1e-" + ((c + "").length - 1))), t);
        }
        return No(e, t);
      }
      var Dv = Yn(function(e, t, i) {
        return t = t.toLowerCase(), e + (i ? Xu(t) : t);
      });
      function Xu(e) {
        return _o(te(e).toLowerCase());
      }
      function _u(e) {
        return e = te(e), e && e.replace(Op, ym).replace(im, "");
      }
      function Qv(e, t, i) {
        e = te(e), t = et(t);
        var o = e.length;
        i = i === r ? o : hn(I(i), 0, o);
        var c = i;
        return i -= t.length, i >= 0 && e.slice(i, c) == t;
      }
      function Ov(e) {
        return e = te(e), e && Up.test(e) ? e.replace(Js, bm) : e;
      }
      function zv(e) {
        return e = te(e), e && Jp.test(e) ? e.replace(Yi, "\\$&") : e;
      }
      var Gv = Yn(function(e, t, i) {
        return e + (i ? "-" : "") + t.toLowerCase();
      }), Yv = Yn(function(e, t, i) {
        return e + (i ? " " : "") + t.toLowerCase();
      }), Iv = Kc("toLowerCase");
      function Hv(e, t, i) {
        e = te(e), t = I(t);
        var o = t ? Bn(e) : 0;
        if (!t || o >= t)
          return e;
        var c = (t - o) / 2;
        return Qa(Ja(c), i) + e + Qa(Za(c), i);
      }
      function Pv(e, t, i) {
        e = te(e), t = I(t);
        var o = t ? Bn(e) : 0;
        return t && o < t ? e + Qa(t - o, i) : e;
      }
      function jv(e, t, i) {
        e = te(e), t = I(t);
        var o = t ? Bn(e) : 0;
        return t && o < t ? Qa(t - o, i) + e : e;
      }
      function Xv(e, t, i) {
        return i || t == null ? t = 0 : t && (t = +t), tV(te(e).replace(Ii, ""), t || 0);
      }
      function _v(e, t, i) {
        return (i ? Oe(e, t, i) : t === r) ? t = 1 : t = I(t), Mo(te(e), t);
      }
      function Lv() {
        var e = arguments, t = te(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var qv = Yn(function(e, t, i) {
        return e + (i ? "_" : "") + t.toLowerCase();
      });
      function Kv(e, t, i) {
        return i && typeof i != "number" && Oe(e, t, i) && (t = i = r), i = i === r ? gt : i >>> 0, i ? (e = te(e), e && (typeof t == "string" || t != null && !Po(t)) && (t = et(t), !t && xn(e)) ? Kt(Tt(e), 0, i) : e.split(t, i)) : [];
      }
      var $v = Yn(function(e, t, i) {
        return e + (i ? " " : "") + _o(t);
      });
      function ew(e, t, i) {
        return e = te(e), i = i == null ? 0 : hn(I(i), 0, e.length), t = et(t), e.slice(i, i + t.length) == t;
      }
      function tw(e, t, i) {
        var o = u.templateSettings;
        i && Oe(e, t, i) && (t = r), e = te(e), t = qa({}, t, o, iu);
        var c = qa({}, t.imports, o.imports, iu), d = Me(c), m = io(c, d), V, w, M = 0, g = t.interpolate || ua, J = "__p += '", F = lo(
          (t.escape || ua).source + "|" + g.source + "|" + (g === ks ? Ap : ua).source + "|" + (t.evaluate || ua).source + "|$",
          "g"
        ), x = "//# sourceURL=" + (re.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++um + "]") + `
`;
        e.replace(F, function(O, _, K, nt, ze, rt) {
          return K || (K = nt), J += e.slice(M, rt).replace(zp, Em), _ && (V = !0, J += `' +
__e(` + _ + `) +
'`), ze && (w = !0, J += `';
` + ze + `;
__p += '`), K && (J += `' +
((__t = (` + K + `)) == null ? '' : __t) +
'`), M = rt + O.length, O;
        }), J += `';
`;
        var Q = re.call(t, "variable") && t.variable;
        if (!Q)
          J = `with (obj) {
` + J + `
}
`;
        else if (Sp.test(Q))
          throw new G(p);
        J = (w ? J.replace(Vp, "") : J).replace(Tp, "$1").replace(vp, "$1;"), J = "function(" + (Q || "obj") + `) {
` + (Q ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (w ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var H = qu(function() {
          return ee(d, x + "return " + J).apply(r, m);
        });
        if (H.source = J, Ho(H))
          throw H;
        return H;
      }
      function nw(e) {
        return te(e).toLowerCase();
      }
      function rw(e) {
        return te(e).toUpperCase();
      }
      function aw(e, t, i) {
        if (e = te(e), e && (i || t === r))
          return oc(e);
        if (!e || !(t = et(t)))
          return e;
        var o = Tt(e), c = Tt(t), d = lc(o, c), m = sc(o, c) + 1;
        return Kt(o, d, m).join("");
      }
      function iw(e, t, i) {
        if (e = te(e), e && (i || t === r))
          return e.slice(0, uc(e) + 1);
        if (!e || !(t = et(t)))
          return e;
        var o = Tt(e), c = sc(o, Tt(t)) + 1;
        return Kt(o, 0, c).join("");
      }
      function ow(e, t, i) {
        if (e = te(e), e && (i || t === r))
          return e.replace(Ii, "");
        if (!e || !(t = et(t)))
          return e;
        var o = Tt(e), c = lc(o, Tt(t));
        return Kt(o, c).join("");
      }
      function lw(e, t) {
        var i = He, o = de;
        if (ue(t)) {
          var c = "separator" in t ? t.separator : c;
          i = "length" in t ? I(t.length) : i, o = "omission" in t ? et(t.omission) : o;
        }
        e = te(e);
        var d = e.length;
        if (xn(e)) {
          var m = Tt(e);
          d = m.length;
        }
        if (i >= d)
          return e;
        var V = i - Bn(o);
        if (V < 1)
          return o;
        var w = m ? Kt(m, 0, V).join("") : e.slice(0, V);
        if (c === r)
          return w + o;
        if (m && (V += w.length - V), Po(c)) {
          if (e.slice(V).search(c)) {
            var M, g = w;
            for (c.global || (c = lo(c.source, te(ys.exec(c)) + "g")), c.lastIndex = 0; M = c.exec(g); )
              var J = M.index;
            w = w.slice(0, J === r ? V : J);
          }
        } else if (e.indexOf(et(c), V) != V) {
          var F = w.lastIndexOf(c);
          F > -1 && (w = w.slice(0, F));
        }
        return w + o;
      }
      function sw(e) {
        return e = te(e), e && wp.test(e) ? e.replace(Zs, Cm) : e;
      }
      var cw = Yn(function(e, t, i) {
        return e + (i ? " " : "") + t.toUpperCase();
      }), _o = Kc("toUpperCase");
      function Lu(e, t, i) {
        return e = te(e), t = i ? r : t, t === r ? Sm(e) ? Om(e) : Mm(e) : e.match(t) || [];
      }
      var qu = P(function(e, t) {
        try {
          return Ke(e, r, t);
        } catch (i) {
          return Ho(i) ? i : new G(i);
        }
      }), uw = Bt(function(e, t) {
        return lt(t, function(i) {
          i = kt(i), At(e, i, Yo(e[i], e));
        }), e;
      });
      function dw(e) {
        var t = e == null ? 0 : e.length, i = D();
        return e = t ? ce(e, function(o) {
          if (typeof o[1] != "function")
            throw new st(h);
          return [i(o[0]), o[1]];
        }) : [], P(function(o) {
          for (var c = -1; ++c < t; ) {
            var d = e[c];
            if (Ke(d[0], this, o))
              return Ke(d[1], this, o);
          }
        });
      }
      function fw(e) {
        return CV(ut(e, y));
      }
      function Lo(e) {
        return function() {
          return e;
        };
      }
      function hw(e, t) {
        return e == null || e !== e ? t : e;
      }
      var pw = eu(), mw = eu(!0);
      function _e(e) {
        return e;
      }
      function qo(e) {
        return Ec(typeof e == "function" ? e : ut(e, y));
      }
      function Vw(e) {
        return Sc(ut(e, y));
      }
      function Tw(e, t) {
        return Wc(e, ut(t, y));
      }
      var vw = P(function(e, t) {
        return function(i) {
          return Jr(i, e, t);
        };
      }), ww = P(function(e, t) {
        return function(i) {
          return Jr(e, i, t);
        };
      });
      function Ko(e, t, i) {
        var o = Me(t), c = Sa(t, o);
        i == null && !(ue(t) && (c.length || !o.length)) && (i = t, t = e, e = this, c = Sa(t, Me(t)));
        var d = !(ue(i) && "chain" in i) || !!i.chain, m = Dt(e);
        return lt(c, function(V) {
          var w = t[V];
          e[V] = w, m && (e.prototype[V] = function() {
            var M = this.__chain__;
            if (d || M) {
              var g = e(this.__wrapped__), J = g.__actions__ = Pe(this.__actions__);
              return J.push({ func: w, args: arguments, thisArg: e }), g.__chain__ = M, g;
            }
            return w.apply(e, Pt([this.value()], arguments));
          });
        }), e;
      }
      function Uw() {
        return ye._ === this && (ye._ = Pm), this;
      }
      function $o() {
      }
      function Rw(e) {
        return e = I(e), P(function(t) {
          return Ac(t, e);
        });
      }
      var Nw = Eo(ce), Mw = Eo(tc), gw = Eo(eo);
      function Ku(e) {
        return Co(e) ? to(kt(e)) : e1(e);
      }
      function Zw(e) {
        return function(t) {
          return e == null ? r : pn(e, t);
        };
      }
      var Jw = nu(), kw = nu(!0);
      function el() {
        return [];
      }
      function tl() {
        return !1;
      }
      function yw() {
        return {};
      }
      function bw() {
        return "";
      }
      function Ew() {
        return !0;
      }
      function Fw(e, t) {
        if (e = I(e), e < 1 || e > De)
          return [];
        var i = gt, o = Ae(e, gt);
        t = D(t), e -= gt;
        for (var c = ao(o, t); ++i < e; )
          t(i);
        return c;
      }
      function Sw(e) {
        return Y(e) ? ce(e, kt) : tt(e) ? [e] : Pe(vu(te(e)));
      }
      function Ww(e) {
        var t = ++Im;
        return te(e) + t;
      }
      var Aw = Da(function(e, t) {
        return e + t;
      }, 0), xw = Fo("ceil"), Bw = Da(function(e, t) {
        return e / t;
      }, 1), Cw = Fo("floor");
      function Dw(e) {
        return e && e.length ? Fa(e, _e, Vo) : r;
      }
      function Qw(e, t) {
        return e && e.length ? Fa(e, D(t, 2), Vo) : r;
      }
      function Ow(e) {
        return ac(e, _e);
      }
      function zw(e, t) {
        return ac(e, D(t, 2));
      }
      function Gw(e) {
        return e && e.length ? Fa(e, _e, Uo) : r;
      }
      function Yw(e, t) {
        return e && e.length ? Fa(e, D(t, 2), Uo) : r;
      }
      var Iw = Da(function(e, t) {
        return e * t;
      }, 1), Hw = Fo("round"), Pw = Da(function(e, t) {
        return e - t;
      }, 0);
      function jw(e) {
        return e && e.length ? ro(e, _e) : 0;
      }
      function Xw(e, t) {
        return e && e.length ? ro(e, D(t, 2)) : 0;
      }
      return u.after = VT, u.ary = bu, u.assign = rv, u.assignIn = Yu, u.assignInWith = qa, u.assignWith = av, u.at = iv, u.before = Eu, u.bind = Yo, u.bindAll = uw, u.bindKey = Fu, u.castArray = yT, u.chain = Ju, u.chunk = C1, u.compact = D1, u.concat = Q1, u.cond = dw, u.conforms = fw, u.constant = Lo, u.countBy = j0, u.create = ov, u.curry = Su, u.curryRight = Wu, u.debounce = Au, u.defaults = lv, u.defaultsDeep = sv, u.defer = TT, u.delay = vT, u.difference = O1, u.differenceBy = z1, u.differenceWith = G1, u.drop = Y1, u.dropRight = I1, u.dropRightWhile = H1, u.dropWhile = P1, u.fill = j1, u.filter = _0, u.flatMap = K0, u.flatMapDeep = $0, u.flatMapDepth = eT, u.flatten = Nu, u.flattenDeep = X1, u.flattenDepth = _1, u.flip = wT, u.flow = pw, u.flowRight = mw, u.fromPairs = L1, u.functions = mv, u.functionsIn = Vv, u.groupBy = tT, u.initial = K1, u.intersection = $1, u.intersectionBy = e0, u.intersectionWith = t0, u.invert = vv, u.invertBy = wv, u.invokeMap = rT, u.iteratee = qo, u.keyBy = aT, u.keys = Me, u.keysIn = Xe, u.map = Ha, u.mapKeys = Rv, u.mapValues = Nv, u.matches = Vw, u.matchesProperty = Tw, u.memoize = ja, u.merge = Mv, u.mergeWith = Iu, u.method = vw, u.methodOf = ww, u.mixin = Ko, u.negate = Xa, u.nthArg = Rw, u.omit = gv, u.omitBy = Zv, u.once = UT, u.orderBy = iT, u.over = Nw, u.overArgs = RT, u.overEvery = Mw, u.overSome = gw, u.partial = Io, u.partialRight = xu, u.partition = oT, u.pick = Jv, u.pickBy = Hu, u.property = Ku, u.propertyOf = Zw, u.pull = i0, u.pullAll = gu, u.pullAllBy = o0, u.pullAllWith = l0, u.pullAt = s0, u.range = Jw, u.rangeRight = kw, u.rearg = NT, u.reject = cT, u.remove = c0, u.rest = MT, u.reverse = zo, u.sampleSize = dT, u.set = yv, u.setWith = bv, u.shuffle = fT, u.slice = u0, u.sortBy = mT, u.sortedUniq = T0, u.sortedUniqBy = v0, u.split = Kv, u.spread = gT, u.tail = w0, u.take = U0, u.takeRight = R0, u.takeRightWhile = N0, u.takeWhile = M0, u.tap = D0, u.throttle = ZT, u.thru = Ia, u.toArray = Ou, u.toPairs = Pu, u.toPairsIn = ju, u.toPath = Sw, u.toPlainObject = Gu, u.transform = Ev, u.unary = JT, u.union = g0, u.unionBy = Z0, u.unionWith = J0, u.uniq = k0, u.uniqBy = y0, u.uniqWith = b0, u.unset = Fv, u.unzip = Go, u.unzipWith = Zu, u.update = Sv, u.updateWith = Wv, u.values = Pn, u.valuesIn = Av, u.without = E0, u.words = Lu, u.wrap = kT, u.xor = F0, u.xorBy = S0, u.xorWith = W0, u.zip = A0, u.zipObject = x0, u.zipObjectDeep = B0, u.zipWith = C0, u.entries = Pu, u.entriesIn = ju, u.extend = Yu, u.extendWith = qa, Ko(u, u), u.add = Aw, u.attempt = qu, u.camelCase = Dv, u.capitalize = Xu, u.ceil = xw, u.clamp = xv, u.clone = bT, u.cloneDeep = FT, u.cloneDeepWith = ST, u.cloneWith = ET, u.conformsTo = WT, u.deburr = _u, u.defaultTo = hw, u.divide = Bw, u.endsWith = Qv, u.eq = wt, u.escape = Ov, u.escapeRegExp = zv, u.every = X0, u.find = L0, u.findIndex = Uu, u.findKey = cv, u.findLast = q0, u.findLastIndex = Ru, u.findLastKey = uv, u.floor = Cw, u.forEach = ku, u.forEachRight = yu, u.forIn = dv, u.forInRight = fv, u.forOwn = hv, u.forOwnRight = pv, u.get = jo, u.gt = AT, u.gte = xT, u.has = Tv, u.hasIn = Xo, u.head = Mu, u.identity = _e, u.includes = nT, u.indexOf = q1, u.inRange = Bv, u.invoke = Uv, u.isArguments = Tn, u.isArray = Y, u.isArrayBuffer = BT, u.isArrayLike = je, u.isArrayLikeObject = me, u.isBoolean = CT, u.isBuffer = $t, u.isDate = DT, u.isElement = QT, u.isEmpty = OT, u.isEqual = zT, u.isEqualWith = GT, u.isError = Ho, u.isFinite = YT, u.isFunction = Dt, u.isInteger = Bu, u.isLength = _a, u.isMap = Cu, u.isMatch = IT, u.isMatchWith = HT, u.isNaN = PT, u.isNative = jT, u.isNil = _T, u.isNull = XT, u.isNumber = Du, u.isObject = ue, u.isObjectLike = he, u.isPlainObject = Sr, u.isRegExp = Po, u.isSafeInteger = LT, u.isSet = Qu, u.isString = La, u.isSymbol = tt, u.isTypedArray = Hn, u.isUndefined = qT, u.isWeakMap = KT, u.isWeakSet = $T, u.join = n0, u.kebabCase = Gv, u.last = ft, u.lastIndexOf = r0, u.lowerCase = Yv, u.lowerFirst = Iv, u.lt = ev, u.lte = tv, u.max = Dw, u.maxBy = Qw, u.mean = Ow, u.meanBy = zw, u.min = Gw, u.minBy = Yw, u.stubArray = el, u.stubFalse = tl, u.stubObject = yw, u.stubString = bw, u.stubTrue = Ew, u.multiply = Iw, u.nth = a0, u.noConflict = Uw, u.noop = $o, u.now = Pa, u.pad = Hv, u.padEnd = Pv, u.padStart = jv, u.parseInt = Xv, u.random = Cv, u.reduce = lT, u.reduceRight = sT, u.repeat = _v, u.replace = Lv, u.result = kv, u.round = Hw, u.runInContext = v, u.sample = uT, u.size = hT, u.snakeCase = qv, u.some = pT, u.sortedIndex = d0, u.sortedIndexBy = f0, u.sortedIndexOf = h0, u.sortedLastIndex = p0, u.sortedLastIndexBy = m0, u.sortedLastIndexOf = V0, u.startCase = $v, u.startsWith = ew, u.subtract = Pw, u.sum = jw, u.sumBy = Xw, u.template = tw, u.times = Fw, u.toFinite = Qt, u.toInteger = I, u.toLength = zu, u.toLower = nw, u.toNumber = ht, u.toSafeInteger = nv, u.toString = te, u.toUpper = rw, u.trim = aw, u.trimEnd = iw, u.trimStart = ow, u.truncate = lw, u.unescape = sw, u.uniqueId = Ww, u.upperCase = cw, u.upperFirst = _o, u.each = ku, u.eachRight = yu, u.first = Mu, Ko(u, function() {
        var e = {};
        return Zt(u, function(t, i) {
          re.call(u.prototype, i) || (e[i] = t);
        }), e;
      }(), { chain: !1 }), u.VERSION = l, lt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        u[e].placeholder = u;
      }), lt(["drop", "take"], function(e, t) {
        L.prototype[e] = function(i) {
          i = i === r ? 1 : Re(I(i), 0);
          var o = this.__filtered__ && !t ? new L(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = Ae(i, o.__takeCount__) : o.__views__.push({
            size: Ae(i, gt),
            type: e + (o.__dir__ < 0 ? "Right" : "")
          }), o;
        }, L.prototype[e + "Right"] = function(i) {
          return this.reverse()[e](i).reverse();
        };
      }), lt(["filter", "map", "takeWhile"], function(e, t) {
        var i = t + 1, o = i == we || i == Je;
        L.prototype[e] = function(c) {
          var d = this.clone();
          return d.__iteratees__.push({
            iteratee: D(c, 3),
            type: i
          }), d.__filtered__ = d.__filtered__ || o, d;
        };
      }), lt(["head", "last"], function(e, t) {
        var i = "take" + (t ? "Right" : "");
        L.prototype[e] = function() {
          return this[i](1).value()[0];
        };
      }), lt(["initial", "tail"], function(e, t) {
        var i = "drop" + (t ? "" : "Right");
        L.prototype[e] = function() {
          return this.__filtered__ ? new L(this) : this[i](1);
        };
      }), L.prototype.compact = function() {
        return this.filter(_e);
      }, L.prototype.find = function(e) {
        return this.filter(e).head();
      }, L.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, L.prototype.invokeMap = P(function(e, t) {
        return typeof e == "function" ? new L(this) : this.map(function(i) {
          return Jr(i, e, t);
        });
      }), L.prototype.reject = function(e) {
        return this.filter(Xa(D(e)));
      }, L.prototype.slice = function(e, t) {
        e = I(e);
        var i = this;
        return i.__filtered__ && (e > 0 || t < 0) ? new L(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (t = I(t), i = t < 0 ? i.dropRight(-t) : i.take(t - e)), i);
      }, L.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, L.prototype.toArray = function() {
        return this.take(gt);
      }, Zt(L.prototype, function(e, t) {
        var i = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), c = u[o ? "take" + (t == "last" ? "Right" : "") : t], d = o || /^find/.test(t);
        !c || (u.prototype[t] = function() {
          var m = this.__wrapped__, V = o ? [1] : arguments, w = m instanceof L, M = V[0], g = w || Y(m), J = function(_) {
            var K = c.apply(u, Pt([_], V));
            return o && F ? K[0] : K;
          };
          g && i && typeof M == "function" && M.length != 1 && (w = g = !1);
          var F = this.__chain__, x = !!this.__actions__.length, Q = d && !F, H = w && !x;
          if (!d && g) {
            m = H ? m : new L(this);
            var O = e.apply(m, V);
            return O.__actions__.push({ func: Ia, args: [J], thisArg: r }), new ct(O, F);
          }
          return Q && H ? e.apply(this, V) : (O = this.thru(J), Q ? o ? O.value()[0] : O.value() : O);
        });
      }), lt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Va[e], i = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
        u.prototype[e] = function() {
          var c = arguments;
          if (o && !this.__chain__) {
            var d = this.value();
            return t.apply(Y(d) ? d : [], c);
          }
          return this[i](function(m) {
            return t.apply(Y(m) ? m : [], c);
          });
        };
      }), Zt(L.prototype, function(e, t) {
        var i = u[t];
        if (i) {
          var o = i.name + "";
          re.call(On, o) || (On[o] = []), On[o].push({ name: t, func: i });
        }
      }), On[Ca(r, B).name] = [{
        name: "wrapper",
        func: r
      }], L.prototype.clone = sV, L.prototype.reverse = cV, L.prototype.value = uV, u.prototype.at = Q0, u.prototype.chain = O0, u.prototype.commit = z0, u.prototype.next = G0, u.prototype.plant = I0, u.prototype.reverse = H0, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = P0, u.prototype.first = u.prototype.head, wr && (u.prototype[wr] = Y0), u;
    }, Cn = zm();
    cn ? ((cn.exports = Cn)._ = Cn, Li._ = Cn) : ye._ = Cn;
  }).call(Wr);
})(Ie, Ie.exports);
const Md = "/alarms", pR = "/alarms?_s=isSituation==true", mR = async () => {
  try {
    const n = await Cl.get(pR);
    return n.status === 204 ? { alarm: [], totalCount: 0, count: 0, offset: 0 } : n.data;
  } catch {
    return !1;
  }
}, VR = async () => {
  try {
    const a = (await Cl.get(`${Md}/count`)).data, r = [];
    for (let f = 0; f < a; f += 10) {
      const h = await Cl.get(`${Md}?offset=${f}`);
      r.push(h);
    }
    const s = (await Promise.all(r)).map((f) => f.data.alarm);
    return Ie.exports.flattenDeep(s);
  } catch {
    return !1;
  }
}, Jn = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M HH:mm:ss"
}, TR = "/alec", vR = "/alec/engine/configuration", wh = "/alec/agreement/configuration", wR = "/alec/situation/statusList", Uh = async (n) => {
  try {
    return (await sr.post(`${wh}`, {
      agreed: n
    })).status === 201;
  } catch {
    return !1;
  }
}, UR = async () => {
  try {
    const n = await sr.get(`${wh}`);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, RR = async (n, a) => {
  try {
    return (await sr.post(vR, {
      distanceMeasureName: a ? Jn.HELLINGER_OPTION : Jn.SPACE_DISTANCE_OPTION,
      engineName: n,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, NR = async (n, a) => {
  try {
    return (await sr.post(`${TR}/situation/${a}/${n}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, MR = async () => {
  try {
    const n = await sr.get(wR);
    return n.status === 200, n.data;
  } catch {
    return !1;
  }
}, gR = window.Pinia.defineStore, is = gR("situationsStore", {
  state: () => ({
    situations: [],
    alarms: {}
  }),
  actions: {
    async getSituations() {
      const n = await mR(), a = await VR(), r = await MR();
      if (n && a) {
        const l = n.alarm, s = a;
        this.alarms = Ie.exports.mapKeys(s, (f) => f.id), l.forEach((f) => {
          if (f.relatedAlarms.forEach((h) => {
            var p, T, N;
            h.count = (p = this.alarms[h.id]) == null ? void 0 : p.count, h.firstEventTime = (T = this.alarms[h.id]) == null ? void 0 : T.firstEventTime, h.lastEventTime = (N = this.alarms[h.id]) == null ? void 0 : N.lastEventTime;
          }), r.find((h) => h.id == f.id)) {
            const h = Ie.exports.first(
              r.filter((p) => p.id == f.id)
            );
            f.status = h == null ? void 0 : h.status;
          }
        }), this.situations = l.filter((f) => f.status !== "REJECTED");
      }
    }
  }
}), ZR = window.Vue.defineComponent, JR = window.Vue.unref, kR = window.Vue.renderList, yR = window.Vue.Fragment, Tl = window.Vue.openBlock, vl = window.Vue.createElementBlock, bR = window.Vue.toDisplayString, ER = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const FR = { class: "alarms-list" }, SR = /* @__PURE__ */ ZR({
  __name: "AlarmsCountBySeverity",
  props: {
    relatedAlarms: null,
    size: null
  },
  setup(n) {
    const a = n;
    return (r, l) => (Tl(), vl("div", FR, [
      (Tl(!0), vl(yR, null, kR(JR(Ie.exports.groupBy)(a == null ? void 0 : a.relatedAlarms, "severity"), (s, f) => (Tl(), vl("div", {
        class: ER(["alarm-count", [`${f.toString().toLowerCase()}-color`, a.size]]),
        key: f
      }, bR(s.length), 3))), 128))
    ]));
  }
});
const Rh = /* @__PURE__ */ Ce(SR, [["__scopeId", "data-v-b8c8b147"]]), WR = window.Vue.openBlock, AR = window.Vue.createElementBlock, xR = window.Vue.createElementVNode;
var BR = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const CR = {}, DR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QR = /* @__PURE__ */ xR("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), OR = [
  QR
];
function zR(n, a) {
  return WR(), AR("svg", DR, OR);
}
var Nh = /* @__PURE__ */ BR(CR, [["render", zR]]);
var GR = Object.defineProperty, gd = Object.getOwnPropertySymbols, YR = Object.prototype.hasOwnProperty, IR = Object.prototype.propertyIsEnumerable, Zd = (n, a, r) => a in n ? GR(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Jd = (n, a) => {
  for (var r in a || (a = {}))
    YR.call(a, r) && Zd(n, r, a[r]);
  if (gd)
    for (var r of gd(a))
      IR.call(a, r) && Zd(n, r, a[r]);
  return n;
};
const HR = window.Vue.defineComponent, PR = window.Vue.toRaw, wl = window.Vue.h;
var jR = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const XR = {
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
}, _R = HR({
  props: XR,
  render() {
    const n = this.$attrs, a = n.class ? n.class.split(" ").reduce((s, f) => (s[f] = !0, s), {}) : {}, r = {};
    a["feather-icon"] = !0, this.flex && (a["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let l = PR(this.icon);
    return this.$slots.default ? wl("span", { class: "feather-icon-container" }, [
      wl(this.$slots.default()[0], Jd({
        class: a
      }, r))
    ]) : wl(l, Jd({
      class: a
    }, r));
  }
});
var Le = /* @__PURE__ */ jR(_R, [["__scopeId", "data-v-52cbf270"]]);
const LR = window.Vue.defineComponent, kd = window.Vue.normalizeClass, Ka = window.Vue.createElementVNode, qR = window.Vue.toDisplayString, yd = window.Vue.unref, bd = window.Vue.createVNode, Ed = window.Vue.openBlock, Fd = window.Vue.createElementBlock, KR = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const $R = { class: "content" }, eN = { class: "title-row" }, tN = { class: "title" }, nN = {
  key: 0,
  class: "accepted"
}, rN = /* @__PURE__ */ LR({
  __name: "SituationCard",
  props: {
    alarmInfo: null,
    selected: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(n, { emit: a }) {
    const r = n, l = () => {
      var s;
      a("situation-selected", (s = r.alarmInfo) == null ? void 0 : s.id);
    };
    return (s, f) => {
      var h, p, T, N;
      return Ed(), Fd("div", {
        onClick: l,
        class: kd(["card", { selected: r.selected }])
      }, [
        Ka("div", {
          class: kd(["severity-line", [`${(p = (h = r.alarmInfo) == null ? void 0 : h.severity) == null ? void 0 : p.toLowerCase()}-bg dark`]])
        }, null, 2),
        Ka("div", $R, [
          Ka("div", eN, [
            Ka("div", tN, "[ " + qR((T = r.alarmInfo) == null ? void 0 : T.id) + " ]", 1),
            r.alarmInfo.status == "ACCEPTED" ? (Ed(), Fd("div", nN, [
              bd(yd(Le), {
                icon: yd(Nh),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : KR("", !0)
          ]),
          bd(Rh, {
            relatedAlarms: (N = r.alarmInfo) == null ? void 0 : N.relatedAlarms,
            size: "normal"
          }, null, 8, ["relatedAlarms"])
        ])
      ], 2);
    };
  }
});
const aN = /* @__PURE__ */ Ce(rN, [["__scopeId", "data-v-f87e0485"]]);
const $a = window.Vue.ref, iN = window.Vue.inject, oN = window.Vue.computed, lN = window.Vue.onMounted, sN = {
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
}, cN = (n) => {
  const a = $a(!1), r = $a(), l = $a(n.controls), s = $a(n.id), f = () => {
    r.value && r.value.focus();
  }, h = iN("registerTab");
  lN(() => {
    if (r.value && h) {
      const T = r.value.parentElement, N = T && T.parentElement ? T.parentElement : void 0, Z = Array.from(N ? N.children : []).filter((k) => k.querySelectorAll("[role=tab]").length), y = T ? Z.indexOf(T) : -1;
      h({
        el: r.value,
        focus: f,
        disabled: n.disabled,
        selected: a,
        id: s,
        controls: l,
        index: y
      });
    }
  });
  const p = oN(() => ({
    role: "tab",
    ref: "tab",
    tabindex: a.value ? 0 : -1,
    id: s.value,
    "aria-selected": a.value,
    "aria-controls": l.value,
    "aria-disabled": n.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: a,
    attrs: p,
    tab: r
  };
};
const Vi = function(n, a) {
  return window ? window.setTimeout(n, a) : setTimeout(n, a);
}, Ti = function(n) {
  return window ? window.clearTimeout(n) : clearTimeout(n);
};
var uN = Object.defineProperty, dN = Object.defineProperties, fN = Object.getOwnPropertyDescriptors, Sd = Object.getOwnPropertySymbols, hN = Object.prototype.hasOwnProperty, pN = Object.prototype.propertyIsEnumerable, Wd = (n, a, r) => a in n ? uN(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Ad = (n, a) => {
  for (var r in a || (a = {}))
    hN.call(a, r) && Wd(n, r, a[r]);
  if (Sd)
    for (var r of Sd(a))
      pN.call(a, r) && Wd(n, r, a[r]);
  return n;
}, mN = (n, a) => dN(n, fN(a));
const VN = window.Vue.defineComponent, TN = window.Vue.h;
var vN = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const wN = {
  center: {
    type: Boolean,
    default: !1
  }
}, UN = VN({
  props: wN,
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
        const { clientWidth: a, clientHeight: r } = this.parent, l = Math.round(Math.max(a, r));
        let s = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const f = this.parent.getBoundingClientRect(), h = n.pageY, p = n.pageX;
          s = {
            top: `${h - f.top - l / 2 - document.documentElement.scrollTop}px`,
            left: `${p - f.left - l / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = mN(Ad({}, s), {
          height: `${l}px`,
          width: `${l}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Ti(this.failsafe), this.failsafe = Vi(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return TN("div", {
        style: Ad({}, this.styles),
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
var kn = /* @__PURE__ */ vN(UN, [["__scopeId", "data-v-18e2a5db"]]);
const ve = function(n) {
  n = n || "feather";
  const a = Math.floor(Math.random() * 1e9);
  return [n.replace(/\s+/g, "-"), Date.now(), a].join("-");
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
}, xd = window.Vue.ref, RN = window.Vue.toRef, NN = window.Vue.watch, Bd = window.Vue.provide, MN = {
  prop: "modelValue",
  event: "update:modelValue"
}, gN = {
  "update:modelValue": (n) => !0
}, ZN = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, JN = (n, a) => {
  const r = RN(n, "modelValue"), l = xd(n.modelValue), s = xd([]);
  NN(r, (E) => {
    T(E);
  });
  const f = (E) => {
    E.preventDefault(), s.value.some((W, C) => W.tab && W.tab.el.contains(E.target) ? (p(C), T(C), !0) : !1);
  }, h = (E) => {
    if (((X) => X.shiftKey || X.ctrlKey || X.metaKey || X.altKey)(E))
      return;
    const C = E.keyCode, B = (X) => {
      X.stopPropagation(), X.preventDefault();
    }, j = s.value.filter((X) => X.tab && !X.tab.disabled), z = s.value.findIndex((X) => X.tab && X.tab.el.contains(document.activeElement));
    let $ = z !== -1 ? z : l.value;
    const b = [Ne.RIGHT], ne = [Ne.LEFT], q = [Ne.ENTER, Ne.SPACE];
    n.vertical && (b.push(Ne.DOWN), ne.push(Ne.UP)), b.indexOf(C) > -1 ? ($++, $ >= j.length && ($ = 0), B(E), p(s.value.indexOf(j[$]))) : ne.indexOf(C) > -1 && ($--, $ < 0 && ($ = j.length - 1), B(E), p(s.value.indexOf(j[$]))), q.indexOf(C) > -1 && T($);
  }, p = (E) => {
    s.value.forEach(function(W, C) {
      E === C && W.tab && W.tab.focus();
    });
  }, T = (E) => {
    const W = s.value[E];
    !W || W.tab && W.tab.disabled || (s.value.forEach((C, B) => {
      C.tab && (C.tab.selected = E === B), C.panel && (C.panel.selected = E === B);
    }), l.value = E, a.emit("update:modelValue", E));
  };
  Bd("registerTab", (E) => {
    const W = E.index;
    W > -1 && (s.value[W] = { ...s.value[W], tab: E }, s.value = [...s.value], y());
  }), Bd("registerPanel", (E) => {
    const W = E.index;
    W > -1 && (s.value[W] = {
      ...s.value[W],
      panel: E
    }, s.value = [...s.value], y());
  });
  const y = () => {
    s.value.forEach(({ tab: E, panel: W }, C) => {
      if (W && E) {
        const B = E.id || ve("tab"), j = E.controls || ve("panel");
        E.controls = j, E.id = B, W.tab = B, W.id = j;
      }
      C === l.value && (W && (W.selected = !0), E && (E.selected = !0));
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
}, ei = window.Vue.ref, kN = window.Vue.inject, yN = window.Vue.computed, bN = window.Vue.onMounted, EN = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, FN = (n) => {
  const a = ei(!1), r = ei(), l = ei(n.tab), s = ei(n.id), f = kN("registerPanel");
  bN(() => {
    if (f) {
      const p = r.value, T = p && p.parentElement ? p.parentElement : void 0, N = p ? Array.from(T ? T.children : []).indexOf(p) : -1;
      f({
        selected: a,
        id: s,
        tab: l,
        el: r.value,
        index: N
      });
    }
  });
  const h = yN(() => ({
    role: "tabpanel",
    id: s.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": a.value,
    "aria-labelledby": l.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: a,
    attrs: h,
    panel: r
  };
}, os = window.Vue.defineComponent, SN = window.Vue.resolveComponent, ls = window.Vue.openBlock, ss = window.Vue.createElementBlock, Pr = window.Vue.createElementVNode, Mh = window.Vue.mergeProps, vi = window.Vue.renderSlot, WN = window.Vue.createVNode, AN = window.Vue.normalizeStyle, xN = window.Vue.toHandlers, BN = window.Vue.withDirectives, CN = window.Vue.normalizeProps, DN = window.Vue.guardReactiveProps, QN = window.Vue.vShow;
var cs = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const ON = sN, zN = os({
  props: ON,
  setup(n) {
    return cN(n);
  },
  components: {
    FeatherRipple: kn
  }
}), GN = { role: "presentation" }, YN = { class: "tab-text" };
function IN(n, a, r, l, s, f) {
  const h = SN("FeatherRipple");
  return ls(), ss("li", GN, [
    Pr("button", Mh(n.attrs, {
      class: ["tab hover focus", { disabled: n.disabled, selected: n.selected }]
    }), [
      Pr("span", YN, [
        vi(n.$slots, "default", {}, void 0, !0)
      ]),
      WN(h)
    ], 16)
  ]);
}
var Cd = /* @__PURE__ */ cs(zN, [["render", IN], ["__scopeId", "data-v-e6bb52b6"]]);
const HN = ZN, PN = gN, jN = os({
  model: MN,
  emits: PN,
  props: HN,
  setup(n, a) {
    return JN(n, a);
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
        n && n.length && this.ro && n.forEach((a) => {
          a.tab && this.ro.observe(a.tab.el);
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
        const n = this.$el.getBoundingClientRect(), a = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = a.left - n.left, l = a.height - 2;
        this.width = `${a.width}px`, this.transform = `translateX(${r}px) translateY(${l}px)`;
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
}), XN = { class: "feather-tab-container" }, _N = { class: "tab-panels" };
function LN(n, a, r, l, s, f) {
  return ls(), ss("div", XN, [
    Pr("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: AN({
        transform: n.transform,
        "transition-duration": n.duration,
        width: n.width
      })
    }, null, 4),
    Pr("ul", Mh(n.attrs, xN(n.listeners)), [
      vi(n.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Pr("div", _N, [
      vi(n.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var qN = /* @__PURE__ */ cs(jN, [["render", LN], ["__scopeId", "data-v-27adffb9"]]);
const KN = EN, $N = os({
  props: KN,
  setup(n) {
    return FN(n);
  }
});
function eM(n, a, r, l, s, f) {
  return BN((ls(), ss("div", CN(DN(n.attrs)), [
    vi(n.$slots, "default")
  ], 16)), [
    [QN, n.selected]
  ]);
}
var Dd = /* @__PURE__ */ cs($N, [["render", eM]]);
const tM = window.Vue.defineComponent, nM = window.Vue.toDisplayString, rM = window.Vue.normalizeClass, aM = window.Vue.openBlock, iM = window.Vue.createElementBlock, oM = window.Vue.createCommentVNode, lM = /* @__PURE__ */ tM({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const a = n;
    return (r, l) => a != null && a.severity ? (aM(), iM("span", {
      key: 0,
      class: rM(["severity-status", [`${a.severity.toLowerCase()}-color`]])
    }, nM(a.severity), 3)) : oM("", !0);
  }
});
const gh = /* @__PURE__ */ Ce(lM, [["__scopeId", "data-v-83c2cdce"]]), sM = window.Vue.defineComponent, Qd = window.Vue.toDisplayString, Od = window.Vue.createElementVNode, cM = window.Vue.openBlock, uM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const dM = { class: "box" }, fM = { class: "label" }, hM = { class: "date" }, pM = /* @__PURE__ */ sM({
  __name: "InformationBox",
  props: {
    label: null,
    date: null
  },
  setup(n) {
    const a = n;
    return (r, l) => (cM(), uM("div", dM, [
      Od("div", fM, Qd(a.label), 1),
      Od("div", hM, Qd(a.info), 1)
    ]));
  }
});
const Ul = /* @__PURE__ */ Ce(pM, [["__scopeId", "data-v-2fdff780"]]), mM = window.Vue.openBlock, VM = window.Vue.createElementBlock, TM = window.Vue.createElementVNode;
var vM = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const wM = {}, UM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RM = /* @__PURE__ */ TM("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), NM = [
  RM
];
function MM(n, a) {
  return mM(), VM("svg", UM, NM);
}
var gM = /* @__PURE__ */ vM(wM, [["render", MM]]);
const ZM = window.Vue.computed, JM = (n, a) => {
  const r = {};
  return Object.keys(a).forEach((l) => {
    r[`${l}Label`] = ZM(() => n.value[l] ? n.value[l] : a[l]);
  }), r;
}, kM = window.Vue.openBlock, yM = window.Vue.createElementBlock, bM = window.Vue.createElementVNode;
var EM = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const FM = {}, SM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WM = /* @__PURE__ */ bM("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), AM = [
  WM
];
function xM(n, a) {
  return kM(), yM("svg", SM, AM);
}
var Zh = /* @__PURE__ */ EM(FM, [["render", xM]]);
const zd = window.Vue.computed, BM = (n, a, r) => {
  const l = zd(() => a.value.filter((f) => !f.disabled)), s = zd(() => n.value ? l.value.indexOf(n.value) : -1);
  return {
    selectPrevious() {
      n.value && n.value.disabled || (s.value === 0 ? r(l.value[l.value.length - 1]) : r(l.value[s.value - 1]));
    },
    selectNext() {
      n.value && n.value.disabled || (s.value === l.value.length - 1 ? r(l.value[0]) : r(l.value[s.value + 1]));
    }
  };
};
const CM = window.Vue.openBlock, DM = window.Vue.createElementBlock, us = window.Vue.createElementVNode;
var QM = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const OM = {}, zM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GM = /* @__PURE__ */ us("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), YM = /* @__PURE__ */ us("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), IM = /* @__PURE__ */ us("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), HM = [
  GM,
  YM,
  IM
];
function PM(n, a) {
  return CM(), DM("svg", zM, HM);
}
var jM = /* @__PURE__ */ QM(OM, [["render", PM]]), XM = Object.defineProperty, _M = Object.defineProperties, LM = Object.getOwnPropertyDescriptors, Gd = Object.getOwnPropertySymbols, qM = Object.prototype.hasOwnProperty, KM = Object.prototype.propertyIsEnumerable, Yd = (n, a, r) => a in n ? XM(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Jh = (n, a) => {
  for (var r in a || (a = {}))
    qM.call(a, r) && Yd(n, r, a[r]);
  if (Gd)
    for (var r of Gd(a))
      KM.call(a, r) && Yd(n, r, a[r]);
  return n;
}, kh = (n, a) => _M(n, LM(a));
const cr = window.Vue.defineComponent, qr = window.Vue.resolveComponent, bt = window.Vue.openBlock, tr = window.Vue.createElementBlock, $M = window.Vue.createVNode, wi = window.Vue.createBlock, eg = window.Vue.withModifiers, or = window.Vue.inject, Kr = window.Vue.computed, tg = window.Vue.normalizeClass, _n = window.Vue.createElementVNode, Ui = window.Vue.toDisplayString, ui = window.Vue.renderSlot, jr = window.Vue.createCommentVNode, ng = window.Vue.withDirectives, rg = window.Vue.vShow, Dl = window.Vue.ref, Id = window.Vue.toRef, Hd = window.Vue.nextTick, Ql = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ds = window.Vue.provide, Pd = window.Vue.isRef, ag = window.Vue.onBeforeUnmount;
var ta = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const ig = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, og = cr({
  props: ig,
  components: {
    FeatherIcon: Le
  }
}), lg = ["title"];
function sg(n, a, r, l, s, f) {
  const h = qr("FeatherIcon");
  return bt(), tr("a", {
    title: n.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    $M(h, { icon: n.icon }, null, 8, ["icon"])
  ], 8, lg);
}
var cg = /* @__PURE__ */ ta(og, [["render", sg], ["__scopeId", "data-v-4265058e"]]);
const ug = cr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Zh;
    }
  },
  components: {
    ActionIcon: cg
  }
});
function dg(n, a, r, l, s, f) {
  const h = qr("ActionIcon");
  return bt(), wi(h, {
    onClick: a[0] || (a[0] = eg((p) => n.$emit("clear"), ["stop", "prevent"])),
    title: n.clear,
    icon: n.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var fg = /* @__PURE__ */ ta(ug, [["render", dg]]);
const hg = cr({
  computed: {
    errorIcon() {
      return jM;
    }
  },
  components: {
    FeatherIcon: Le
  }
});
function pg(n, a, r, l, s, f) {
  const h = qr("FeatherIcon");
  return bt(), wi(h, {
    icon: n.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var mg = /* @__PURE__ */ ta(hg, [["render", pg], ["__scopeId", "data-v-0b8faef3"]]);
const Vg = {
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
}, Tg = {
  clear: () => !0,
  "wrapper-click": (n) => !0
}, vg = cr({
  emits: Tg,
  props: Vg,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const n = or("wrapperOptions", {}), a = or("validationErrorMessage", !1), r = Kr(() => n.error ? n.error : a && a.value ? a.value : !1);
    return kh(Jh({}, n), { error: r });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((a) => a.children && a.children.length !== 0) !== -1;
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
      const a = { childList: !0, subtree: !0 }, r = () => {
        const l = this.$el.querySelector(".prefix");
        this.prefixWidth = l ? l.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(n, a), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: fg,
    ErrorIcon: mg
  }
}), wg = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, Ug = ["for"], Rg = { class: "prefix" }, Ng = { class: "post" };
function Mg(n, a, r, l, s, f) {
  const h = qr("ClearIcon"), p = qr("ErrorIcon");
  return bt(), tr("div", {
    class: tg(["feather-input-wrapper-container", n.containerCls])
  }, [
    _n("fieldset", wg, [
      _n("legend", null, Ui(n.label), 1)
    ]),
    _n("label", {
      class: "feather-input-label",
      for: n.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ui(n.label), 9, Ug),
    _n("div", {
      class: "feather-input-wrapper",
      onClick: a[1] || (a[1] = (...T) => n.handleWrapperClick && n.handleWrapperClick(...T))
    }, [
      _n("div", Rg, [
        ui(n.$slots, "pre", {}, void 0, !0)
      ]),
      ui(n.$slots, "default", {}, void 0, !0),
      _n("div", Ng, [
        n.showClear && n.computedClearText ? (bt(), wi(h, {
          key: 0,
          clear: n.computedClearText,
          onClear: a[0] || (a[0] = (T) => n.$emit("clear"))
        }, null, 8, ["clear"])) : jr("", !0),
        n.error ? (bt(), wi(p, { key: 1 })) : jr("", !0),
        ui(n.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var gg = /* @__PURE__ */ ta(vg, [["render", Mg], ["__scopeId", "data-v-4db296db"]]);
const Zg = cr({
  setup() {
    const n = or("subTextOptions", {}), a = or("validationErrorMessage", !1), r = Kr(() => n.error ? n.error : a && a.value ? a.value : "");
    return kh(Jh({}, n), { error: r });
  }
}), Jg = { class: "feather-input-sub-text" }, kg = {
  key: 0,
  class: "feather-input-spacer"
}, yg = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, bg = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function Eg(n, a, r, l, s, f) {
  return ng((bt(), tr("div", Jg, [
    !n.hint && !n.error.length ? (bt(), tr("div", kg, "\xA0")) : jr("", !0),
    n.hint && !n.error.length ? (bt(), tr("div", yg, Ui(n.hint), 1)) : jr("", !0),
    n.error.length > 0 ? (bt(), tr("div", bg, Ui(n.error), 1)) : jr("", !0),
    ui(n.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [rg, !n.inline || n.hint || n.error.length]
  ]);
}
var fs = /* @__PURE__ */ ta(Zg, [["render", Eg], ["__scopeId", "data-v-8e0ac99e"]]);
const Fg = {
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
cr({
  props: Fg,
  setup(n) {
    const a = or("featherFormErrors", Dl([])), r = Id(n, "errorList"), l = Kr(() => {
      var Z;
      return (Z = r.value) != null && Z.length ? r.value : a.value;
    }), s = Id(n, "generalError"), f = (Z) => {
      document.getElementById(Z).focus();
    }, h = (Z) => Z.replace(/ \*$/, ""), p = Dl(), T = (Z) => `${h(Z.label)} - ${Z.message}`, N = Kr(() => (l.value.length && Hd(() => p.value.focus()), n.headingText(l.value)));
    return Ql(s, (Z) => {
      Z.length && Hd(() => p.value.focus());
    }), {
      errors: l,
      errorsHeading: N,
      heading: p,
      focusElement: f,
      mainError: s,
      getFullMessage: T
    };
  }
});
const hs = (n, a, r, l, s) => {
  const f = or("featherForm", !1);
  if (l && f && n.value) {
    const h = Dl("");
    ds("validationErrorMessage", h);
    const p = () => {
      if (s && Pd(s) && s.value)
        return h.value = s.value, {
          success: !1,
          message: s.value,
          inputId: n.value,
          label: r
        };
      try {
        return l.validateSync(a.value), h.value = "", { success: !0 };
      } catch (Z) {
        const y = Z;
        return h.value = y.errors[0], {
          success: !1,
          message: y.errors[0],
          inputId: n.value,
          label: r
        };
      }
    }, N = {
      clear: () => {
        h.value = "";
      },
      validate: p
    };
    return s && Pd(s) && Ql(s, () => {
      f.runValidation();
    }), Ql(n, (Z, y) => {
      Z && f && f.register(Z, N), y && f && f.deregister(y);
    }, { immediate: !0 }), ag(() => {
      f.deregister(n.value, !0);
    }), { validate: p };
  }
  return { validate: () => !0 };
}, ps = (n) => ({
  inherittedAttrs: Kr(() => ({
    class: n.class,
    "data-ref-id": n["data-ref-id"]
  }))
}), ms = {
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
}, Vs = (n) => {
  ds("subTextOptions", n);
}, Sg = {
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
}, Wg = (n) => {
  ds("wrapperOptions", n);
}, ti = window.Vue.ref, Ag = window.Vue.watch, xg = window.Vue.watchEffect, jd = window.Vue.computed, Rl = window.Vue.provide, yh = (n, a, r, l, s) => {
  const f = ti([]), h = ti(), p = ti(), T = ti();
  xg(() => {
    if (!f.value.length)
      return;
    const B = f.value.map((j) => j.value);
    if (n.value !== void 0 && n.value !== null && (h.value = f.value[B.indexOf(n.value)]), !h.value && f.value.length) {
      let j = f.value.filter((z) => !z.disabled);
      j = j.length ? j : f.value, p.value = j[0], p.value.first = !0;
    }
  }), Ag(h, (B, j) => {
    j && (j.checked = !1), B && (B.checked = !0);
  });
  const N = (B) => {
    B && B.disabled || (p.value && (p.value.first = !1), h.value !== B && (a("update:modelValue", B.value), h.value = B, B.focus()));
  }, Z = jd(() => h.value || p.value), y = BM(Z, f, N), k = jd(() => ve("feather-radio-group"));
  T.value = k.value;
  const { validate: A } = hs(T, n, r, l, s);
  return Rl("register", (B) => {
    f.value = [...f.value, B], T.value === k.value && (T.value = B.id);
  }), Rl("select", N), Rl("blur", (B) => {
    a("blur", B);
  }), {
    keydown: (B) => {
      switch (B.keyCode) {
        case 13:
        case 32:
          h.value ? N(h.value) : p.value && N(p.value);
          break;
        case 40:
        case 39:
          y.selectNext();
          break;
        case 37:
        case 38:
          y.selectPrevious();
          break;
      }
    },
    ...y,
    focus: () => {
      h.value && h.value.focus();
    },
    validate: A,
    firstElementId: T,
    groupId: k
  };
};
var Bg = Object.defineProperty, Cg = Object.defineProperties, Dg = Object.getOwnPropertyDescriptors, Xd = Object.getOwnPropertySymbols, Qg = Object.prototype.hasOwnProperty, Og = Object.prototype.propertyIsEnumerable, _d = (n, a, r) => a in n ? Bg(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, rr = (n, a) => {
  for (var r in a || (a = {}))
    Qg.call(a, r) && _d(n, r, a[r]);
  if (Xd)
    for (var r of Xd(a))
      Og.call(a, r) && _d(n, r, a[r]);
  return n;
}, bh = (n, a) => Cg(n, Dg(a));
const ln = window.Vue.defineComponent, Xr = window.Vue.inject, Ri = window.Vue.computed, _r = window.Vue.ref, pt = window.Vue.resolveComponent, it = window.Vue.openBlock, na = window.Vue.createElementBlock, Eh = window.Vue.normalizeClass, Et = window.Vue.renderSlot, an = window.Vue.createBlock, $r = window.Vue.createCommentVNode, Ni = window.Vue.createElementVNode, zg = window.Vue.withModifiers, Wi = window.Vue.createVNode, Fh = window.Vue.toRef, Ol = window.Vue.mergeProps, It = window.Vue.withCtx, Gg = window.Vue.h, Yg = window.Vue.provide;
var sn = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const Ig = {
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
}, Hg = ln({
  props: Ig,
  setup(n) {
    const a = Xr("isCondensed", null), r = Ri(() => a || n.condensed), l = _r(!1);
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
    FeatherRipple: kn
  }
}), Pg = ["aria-disabled"];
function jg(n, a, r, l, s, f) {
  const h = pt("FeatherRipple");
  return it(), na("div", {
    class: Eh(["chip", {
      condensed: n.isCondensed,
      disabled: n.disabled,
      focused: n.focused
    }]),
    onFocusin: a[0] || (a[0] = (p) => n.clickable ? n.handleFocus : null),
    onFocusout: a[1] || (a[1] = (p) => n.clickable ? n.handleBlur : null),
    "aria-disabled": n.disabled
  }, [
    Et(n.$slots, "default", {}, void 0, !0),
    n.clickable ? (it(), an(h, { key: 0 })) : $r("", !0)
  ], 42, Pg);
}
var Ts = /* @__PURE__ */ sn(Hg, [["render", jg], ["__scopeId", "data-v-44d413dc"]]);
const Xg = {
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
}, _g = ln({
  emits: ["delete"],
  props: Xg,
  setup(n, a) {
    return {
      handleDelete: () => {
        n.disabled || a.emit("delete");
      },
      icon: Zh
    };
  },
  components: {
    FeatherIcon: Le
  }
}), Lg = { class: "chip-delete" }, qg = ["aria-label", "aria-describedby"];
function Kg(n, a, r, l, s, f) {
  const h = pt("FeatherIcon");
  return it(), na("span", Lg, [
    Ni("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: a[0] || (a[0] = zg((...p) => n.handleDelete && n.handleDelete(...p), ["stop", "prevent"])),
      "aria-label": n.label,
      "aria-describedby": n.textId
    }, [
      Wi(h, {
        icon: n.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, qg)
  ]);
}
var $g = /* @__PURE__ */ sn(_g, [["render", Kg], ["__scopeId", "data-v-4bae6cb4"]]);
const eZ = ln({
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
}), tZ = ["title"];
function nZ(n, a, r, l, s, f) {
  return it(), na("span", {
    class: "label",
    title: n.titleText,
    ref: "container"
  }, [
    Et(n.$slots, "default", {}, void 0, !0)
  ], 8, tZ);
}
var vs = /* @__PURE__ */ sn(eZ, [["render", nZ], ["__scopeId", "data-v-1a0445b2"]]);
const rZ = {}, aZ = {
  class: "chip-icon",
  role: "presentation"
};
function iZ(n, a) {
  return it(), na("span", aZ, [
    Et(n.$slots, "default", {}, void 0, !0)
  ]);
}
var ws = /* @__PURE__ */ sn(rZ, [["render", iZ], ["__scopeId", "data-v-2230176f"]]);
const Ld = {
  delete: "Remove"
}, oZ = ln({
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
  setup(n, a) {
    const r = JM(Fh(n, "labels"), Ld), l = Ri(() => ve("chip-text")), s = () => {
      n.disabled || a.emit("click");
    }, f = rr({}, a.attrs);
    return n.disabled && delete f.onClick, bh(rr({}, r), {
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
      return this.$slots.icon && this.$slots.icon().findIndex((a) => a.children && a.children.length !== 0 || typeof a.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ts,
    DeleteIcon: $g,
    Label: vs,
    PreIcon: ws
  }
}), lZ = ["aria-disabled"];
function sZ(n, a, r, l, s, f) {
  const h = pt("PreIcon"), p = pt("Label"), T = pt("DeleteIcon"), N = pt("Chip");
  return it(), an(N, Ol(n.attrs, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: { hover: n.canClick, focus: n.canClick || n.canDelete },
    role: "row",
    clickable: n.canClick
  }), {
    default: It(() => [
      Ni("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        Ni("span", Ol(n.chipTextAttrs, { class: "chip-label-button" }), [
          n.hasIcon ? (it(), an(h, { key: 0 }, {
            default: It(() => [
              Et(n.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : $r("", !0),
          Wi(p, { id: n.chipTextId }, {
            default: It(() => [
              Et(n.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, lZ),
      n.canDelete ? (it(), an(T, {
        key: 0,
        disabled: n.disabled,
        "text-id": n.chipTextId,
        label: n.deleteLabel,
        role: "gridcell",
        onDelete: a[0] || (a[0] = (Z) => n.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : $r("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var cZ = /* @__PURE__ */ sn(oZ, [["render", sZ], ["__scopeId", "data-v-48b2704a"]]);
const uZ = ln({
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
      return this.$slots.icon && this.$slots.icon().findIndex((a) => a.children && a.children.length !== 0 || typeof a.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ts,
    Label: vs,
    PreIcon: ws
  }
}), dZ = ["aria-disabled"];
function fZ(n, a, r, l, s, f) {
  const h = pt("PreIcon"), p = pt("Label"), T = pt("Chip");
  return it(), an(T, {
    role: "row",
    disabled: n.disabled,
    condensed: n.condensed,
    clickable: !1
  }, {
    default: It(() => [
      Ni("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        n.hasIcon ? (it(), an(h, { key: 0 }, {
          default: It(() => [
            Et(n.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : $r("", !0),
        Wi(p, null, {
          default: It(() => [
            Et(n.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, dZ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var hZ = /* @__PURE__ */ sn(uZ, [["render", fZ], ["__scopeId", "data-v-3e0c4eba"]]);
const pZ = ln({
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
    const a = _r(!1), r = _r(!1), l = Ri(() => ve("chip-label-id")), s = Ri(() => a.value || r.value ? 0 : -1), f = _r(), h = () => {
      f.value.$el.focus();
    }, p = Xr("register", (k) => {
    }), T = Xr("blur", (k) => {
    }), N = Xr("select", (k) => {
    }), Z = {
      first: a,
      focus: h,
      disabled: n.disabled,
      value: n.value,
      checked: r
    };
    return p(Z), {
      labelId: l,
      tabindex: s,
      first: a,
      blur: T,
      click: () => {
        N(Z);
      },
      input: f,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((a) => a.children && a.children.length !== 0 || typeof a.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ts,
    Label: vs,
    PreIcon: ws
  }
});
function mZ(n, a, r, l, s, f) {
  const h = pt("PreIcon"), p = pt("Label"), T = pt("Chip");
  return it(), an(T, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: Eh(["focus hover", { selected: n.checked }]),
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
    default: It(() => [
      n.hasIcon ? (it(), an(h, { key: 0 }, {
        default: It(() => [
          Et(n.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : $r("", !0),
      Wi(p, { id: n.labelId }, {
        default: It(() => [
          Et(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var VZ = /* @__PURE__ */ sn(pZ, [["render", mZ], ["__scopeId", "data-v-bbcc2f70"]]);
const TZ = {
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
}, qd = ln({
  props: TZ,
  setup() {
    return { format: Xr("chipListFormat", "") };
  },
  render() {
    const n = (a) => Gg(a, rr(rr({}, this.$props), this.$attrs), rr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? n(cZ) : this.format === "radio" ? n(VZ) : n(hZ);
  }
}), vZ = {
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
}, wZ = ln({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: vZ,
  setup(n, a) {
    const r = n.mode === "list" ? "grid" : n.mode;
    Yg("chipListFormat", r);
    const l = r === "single";
    if (r === "radio") {
      const h = Fh(n, "modelValue");
      return bh(rr({
        attrs: {
          role: "radiogroup"
        }
      }, yh(h, a.emit, n.label, {}, _r(""))), {
        single: l
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: l };
  }
}), UZ = ["aria-label"];
function RZ(n, a, r, l, s, f) {
  return it(), na("div", Ol(n.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": n.label,
    class: ["chip-list", { condensed: n.condensed, single: n.single }],
    onKeydown: a[0] || (a[0] = (...h) => n.keydown && n.keydown(...h))
  }), [
    Et(n.$slots, "default", {}, void 0, !0)
  ], 16, UZ);
}
var NZ = /* @__PURE__ */ sn(wZ, [["render", RZ], ["__scopeId", "data-v-1e06f41d"]]);
function yn(n) {
  if (n === null || n === !0 || n === !1)
    return NaN;
  var a = Number(n);
  return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
}
function Se(n, a) {
  if (a.length < n)
    throw new TypeError(n + " argument" + (n > 1 ? "s" : "") + " required, but only " + a.length + " present");
}
function Be(n) {
  Se(1, arguments);
  var a = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && a === "[object Date]" ? new Date(n.getTime()) : typeof n == "number" || a === "[object Number]" ? new Date(n) : ((typeof n == "string" || a === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function MZ(n, a) {
  Se(2, arguments);
  var r = Be(n).getTime(), l = yn(a);
  return new Date(r + l);
}
var gZ = {};
function ra() {
  return gZ;
}
function zl(n) {
  var a = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return a.setUTCFullYear(n.getFullYear()), n.getTime() - a.getTime();
}
function ZZ(n, a) {
  Se(2, arguments);
  var r = Be(n), l = Be(a), s = r.getTime() - l.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function JZ(n) {
  return Se(1, arguments), n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function kZ(n) {
  if (Se(1, arguments), !JZ(n) && typeof n != "number")
    return !1;
  var a = Be(n);
  return !isNaN(Number(a));
}
function yZ(n, a) {
  Se(2, arguments);
  var r = yn(a);
  return MZ(n, -r);
}
var bZ = 864e5;
function EZ(n) {
  Se(1, arguments);
  var a = Be(n), r = a.getTime();
  a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  var l = a.getTime(), s = r - l;
  return Math.floor(s / bZ) + 1;
}
function Mi(n) {
  Se(1, arguments);
  var a = 1, r = Be(n), l = r.getUTCDay(), s = (l < a ? 7 : 0) + l - a;
  return r.setUTCDate(r.getUTCDate() - s), r.setUTCHours(0, 0, 0, 0), r;
}
function Sh(n) {
  Se(1, arguments);
  var a = Be(n), r = a.getUTCFullYear(), l = new Date(0);
  l.setUTCFullYear(r + 1, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var s = Mi(l), f = new Date(0);
  f.setUTCFullYear(r, 0, 4), f.setUTCHours(0, 0, 0, 0);
  var h = Mi(f);
  return a.getTime() >= s.getTime() ? r + 1 : a.getTime() >= h.getTime() ? r : r - 1;
}
function FZ(n) {
  Se(1, arguments);
  var a = Sh(n), r = new Date(0);
  r.setUTCFullYear(a, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var l = Mi(r);
  return l;
}
var SZ = 6048e5;
function WZ(n) {
  Se(1, arguments);
  var a = Be(n), r = Mi(a).getTime() - FZ(a).getTime();
  return Math.round(r / SZ) + 1;
}
function gi(n, a) {
  var r, l, s, f, h, p, T, N;
  Se(1, arguments);
  var Z = ra(), y = yn((r = (l = (s = (f = a == null ? void 0 : a.weekStartsOn) !== null && f !== void 0 ? f : a == null || (h = a.locale) === null || h === void 0 || (p = h.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && s !== void 0 ? s : Z.weekStartsOn) !== null && l !== void 0 ? l : (T = Z.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var k = Be(n), A = k.getUTCDay(), E = (A < y ? 7 : 0) + A - y;
  return k.setUTCDate(k.getUTCDate() - E), k.setUTCHours(0, 0, 0, 0), k;
}
function Wh(n, a) {
  var r, l, s, f, h, p, T, N;
  Se(1, arguments);
  var Z = Be(n), y = Z.getUTCFullYear(), k = ra(), A = yn((r = (l = (s = (f = a == null ? void 0 : a.firstWeekContainsDate) !== null && f !== void 0 ? f : a == null || (h = a.locale) === null || h === void 0 || (p = h.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && s !== void 0 ? s : k.firstWeekContainsDate) !== null && l !== void 0 ? l : (T = k.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(A >= 1 && A <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var E = new Date(0);
  E.setUTCFullYear(y + 1, 0, A), E.setUTCHours(0, 0, 0, 0);
  var W = gi(E, a), C = new Date(0);
  C.setUTCFullYear(y, 0, A), C.setUTCHours(0, 0, 0, 0);
  var B = gi(C, a);
  return Z.getTime() >= W.getTime() ? y + 1 : Z.getTime() >= B.getTime() ? y : y - 1;
}
function AZ(n, a) {
  var r, l, s, f, h, p, T, N;
  Se(1, arguments);
  var Z = ra(), y = yn((r = (l = (s = (f = a == null ? void 0 : a.firstWeekContainsDate) !== null && f !== void 0 ? f : a == null || (h = a.locale) === null || h === void 0 || (p = h.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && s !== void 0 ? s : Z.firstWeekContainsDate) !== null && l !== void 0 ? l : (T = Z.locale) === null || T === void 0 || (N = T.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), k = Wh(n, a), A = new Date(0);
  A.setUTCFullYear(k, 0, y), A.setUTCHours(0, 0, 0, 0);
  var E = gi(A, a);
  return E;
}
var xZ = 6048e5;
function BZ(n, a) {
  Se(1, arguments);
  var r = Be(n), l = gi(r, a).getTime() - AZ(r, a).getTime();
  return Math.round(l / xZ) + 1;
}
function ae(n, a) {
  for (var r = n < 0 ? "-" : "", l = Math.abs(n).toString(); l.length < a; )
    l = "0" + l;
  return r + l;
}
var CZ = {
  y: function(n, a) {
    var r = n.getUTCFullYear(), l = r > 0 ? r : 1 - r;
    return ae(a === "yy" ? l % 100 : l, a.length);
  },
  M: function(n, a) {
    var r = n.getUTCMonth();
    return a === "M" ? String(r + 1) : ae(r + 1, 2);
  },
  d: function(n, a) {
    return ae(n.getUTCDate(), a.length);
  },
  a: function(n, a) {
    var r = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (a) {
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
  h: function(n, a) {
    return ae(n.getUTCHours() % 12 || 12, a.length);
  },
  H: function(n, a) {
    return ae(n.getUTCHours(), a.length);
  },
  m: function(n, a) {
    return ae(n.getUTCMinutes(), a.length);
  },
  s: function(n, a) {
    return ae(n.getUTCSeconds(), a.length);
  },
  S: function(n, a) {
    var r = a.length, l = n.getUTCMilliseconds(), s = Math.floor(l * Math.pow(10, r - 3));
    return ae(s, a.length);
  }
};
const en = CZ;
var Ln = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, DZ = {
  G: function(n, a, r) {
    var l = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (a) {
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
  y: function(n, a, r) {
    if (a === "yo") {
      var l = n.getUTCFullYear(), s = l > 0 ? l : 1 - l;
      return r.ordinalNumber(s, {
        unit: "year"
      });
    }
    return en.y(n, a);
  },
  Y: function(n, a, r, l) {
    var s = Wh(n, l), f = s > 0 ? s : 1 - s;
    if (a === "YY") {
      var h = f % 100;
      return ae(h, 2);
    }
    return a === "Yo" ? r.ordinalNumber(f, {
      unit: "year"
    }) : ae(f, a.length);
  },
  R: function(n, a) {
    var r = Sh(n);
    return ae(r, a.length);
  },
  u: function(n, a) {
    var r = n.getUTCFullYear();
    return ae(r, a.length);
  },
  Q: function(n, a, r) {
    var l = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (a) {
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
  q: function(n, a, r) {
    var l = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (a) {
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
  M: function(n, a, r) {
    var l = n.getUTCMonth();
    switch (a) {
      case "M":
      case "MM":
        return en.M(n, a);
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
  L: function(n, a, r) {
    var l = n.getUTCMonth();
    switch (a) {
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
  w: function(n, a, r, l) {
    var s = BZ(n, l);
    return a === "wo" ? r.ordinalNumber(s, {
      unit: "week"
    }) : ae(s, a.length);
  },
  I: function(n, a, r) {
    var l = WZ(n);
    return a === "Io" ? r.ordinalNumber(l, {
      unit: "week"
    }) : ae(l, a.length);
  },
  d: function(n, a, r) {
    return a === "do" ? r.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : en.d(n, a);
  },
  D: function(n, a, r) {
    var l = EZ(n);
    return a === "Do" ? r.ordinalNumber(l, {
      unit: "dayOfYear"
    }) : ae(l, a.length);
  },
  E: function(n, a, r) {
    var l = n.getUTCDay();
    switch (a) {
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
  e: function(n, a, r, l) {
    var s = n.getUTCDay(), f = (s - l.weekStartsOn + 8) % 7 || 7;
    switch (a) {
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
  c: function(n, a, r, l) {
    var s = n.getUTCDay(), f = (s - l.weekStartsOn + 8) % 7 || 7;
    switch (a) {
      case "c":
        return String(f);
      case "cc":
        return ae(f, a.length);
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
  i: function(n, a, r) {
    var l = n.getUTCDay(), s = l === 0 ? 7 : l;
    switch (a) {
      case "i":
        return String(s);
      case "ii":
        return ae(s, a.length);
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
  a: function(n, a, r) {
    var l = n.getUTCHours(), s = l / 12 >= 1 ? "pm" : "am";
    switch (a) {
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
  b: function(n, a, r) {
    var l = n.getUTCHours(), s;
    switch (l === 12 ? s = Ln.noon : l === 0 ? s = Ln.midnight : s = l / 12 >= 1 ? "pm" : "am", a) {
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
  B: function(n, a, r) {
    var l = n.getUTCHours(), s;
    switch (l >= 17 ? s = Ln.evening : l >= 12 ? s = Ln.afternoon : l >= 4 ? s = Ln.morning : s = Ln.night, a) {
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
  h: function(n, a, r) {
    if (a === "ho") {
      var l = n.getUTCHours() % 12;
      return l === 0 && (l = 12), r.ordinalNumber(l, {
        unit: "hour"
      });
    }
    return en.h(n, a);
  },
  H: function(n, a, r) {
    return a === "Ho" ? r.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : en.H(n, a);
  },
  K: function(n, a, r) {
    var l = n.getUTCHours() % 12;
    return a === "Ko" ? r.ordinalNumber(l, {
      unit: "hour"
    }) : ae(l, a.length);
  },
  k: function(n, a, r) {
    var l = n.getUTCHours();
    return l === 0 && (l = 24), a === "ko" ? r.ordinalNumber(l, {
      unit: "hour"
    }) : ae(l, a.length);
  },
  m: function(n, a, r) {
    return a === "mo" ? r.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : en.m(n, a);
  },
  s: function(n, a, r) {
    return a === "so" ? r.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : en.s(n, a);
  },
  S: function(n, a) {
    return en.S(n, a);
  },
  X: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    if (f === 0)
      return "Z";
    switch (a) {
      case "X":
        return $d(f);
      case "XXXX":
      case "XX":
        return Nn(f);
      case "XXXXX":
      case "XXX":
      default:
        return Nn(f, ":");
    }
  },
  x: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (a) {
      case "x":
        return $d(f);
      case "xxxx":
      case "xx":
        return Nn(f);
      case "xxxxx":
      case "xxx":
      default:
        return Nn(f, ":");
    }
  },
  O: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (a) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Kd(f, ":");
      case "OOOO":
      default:
        return "GMT" + Nn(f, ":");
    }
  },
  z: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (a) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Kd(f, ":");
      case "zzzz":
      default:
        return "GMT" + Nn(f, ":");
    }
  },
  t: function(n, a, r, l) {
    var s = l._originalDate || n, f = Math.floor(s.getTime() / 1e3);
    return ae(f, a.length);
  },
  T: function(n, a, r, l) {
    var s = l._originalDate || n, f = s.getTime();
    return ae(f, a.length);
  }
};
function Kd(n, a) {
  var r = n > 0 ? "-" : "+", l = Math.abs(n), s = Math.floor(l / 60), f = l % 60;
  if (f === 0)
    return r + String(s);
  var h = a || "";
  return r + String(s) + h + ae(f, 2);
}
function $d(n, a) {
  if (n % 60 === 0) {
    var r = n > 0 ? "-" : "+";
    return r + ae(Math.abs(n) / 60, 2);
  }
  return Nn(n, a);
}
function Nn(n, a) {
  var r = a || "", l = n > 0 ? "-" : "+", s = Math.abs(n), f = ae(Math.floor(s / 60), 2), h = ae(s % 60, 2);
  return l + f + r + h;
}
const QZ = DZ;
var ef = function(n, a) {
  switch (n) {
    case "P":
      return a.date({
        width: "short"
      });
    case "PP":
      return a.date({
        width: "medium"
      });
    case "PPP":
      return a.date({
        width: "long"
      });
    case "PPPP":
    default:
      return a.date({
        width: "full"
      });
  }
}, Ah = function(n, a) {
  switch (n) {
    case "p":
      return a.time({
        width: "short"
      });
    case "pp":
      return a.time({
        width: "medium"
      });
    case "ppp":
      return a.time({
        width: "long"
      });
    case "pppp":
    default:
      return a.time({
        width: "full"
      });
  }
}, OZ = function(n, a) {
  var r = n.match(/(P+)(p+)?/) || [], l = r[1], s = r[2];
  if (!s)
    return ef(n, a);
  var f;
  switch (l) {
    case "P":
      f = a.dateTime({
        width: "short"
      });
      break;
    case "PP":
      f = a.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      f = a.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      f = a.dateTime({
        width: "full"
      });
      break;
  }
  return f.replace("{{date}}", ef(l, a)).replace("{{time}}", Ah(s, a));
}, zZ = {
  p: Ah,
  P: OZ
};
const GZ = zZ;
var YZ = ["D", "DD"], IZ = ["YY", "YYYY"];
function HZ(n) {
  return YZ.indexOf(n) !== -1;
}
function PZ(n) {
  return IZ.indexOf(n) !== -1;
}
function tf(n, a, r) {
  if (n === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(a, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(a, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var jZ = {
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
}, XZ = function(n, a, r) {
  var l, s = jZ[n];
  return typeof s == "string" ? l = s : a === 1 ? l = s.one : l = s.other.replace("{{count}}", a.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + l : l + " ago" : l;
};
const _Z = XZ;
function Nl(n) {
  return function() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = a.width ? String(a.width) : n.defaultWidth, l = n.formats[r] || n.formats[n.defaultWidth];
    return l;
  };
}
var LZ = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, qZ = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, KZ = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, $Z = {
  date: Nl({
    formats: LZ,
    defaultWidth: "full"
  }),
  time: Nl({
    formats: qZ,
    defaultWidth: "full"
  }),
  dateTime: Nl({
    formats: KZ,
    defaultWidth: "full"
  })
};
const eJ = $Z;
var tJ = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, nJ = function(n, a, r, l) {
  return tJ[n];
};
const rJ = nJ;
function Ar(n) {
  return function(a, r) {
    var l = r != null && r.context ? String(r.context) : "standalone", s;
    if (l === "formatting" && n.formattingValues) {
      var f = n.defaultFormattingWidth || n.defaultWidth, h = r != null && r.width ? String(r.width) : f;
      s = n.formattingValues[h] || n.formattingValues[f];
    } else {
      var p = n.defaultWidth, T = r != null && r.width ? String(r.width) : n.defaultWidth;
      s = n.values[T] || n.values[p];
    }
    var N = n.argumentCallback ? n.argumentCallback(a) : a;
    return s[N];
  };
}
var aJ = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, iJ = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, oJ = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, lJ = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, sJ = {
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
}, cJ = {
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
}, uJ = function(n, a) {
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
}, dJ = {
  ordinalNumber: uJ,
  era: Ar({
    values: aJ,
    defaultWidth: "wide"
  }),
  quarter: Ar({
    values: iJ,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: Ar({
    values: oJ,
    defaultWidth: "wide"
  }),
  day: Ar({
    values: lJ,
    defaultWidth: "wide"
  }),
  dayPeriod: Ar({
    values: sJ,
    defaultWidth: "wide",
    formattingValues: cJ,
    defaultFormattingWidth: "wide"
  })
};
const fJ = dJ;
function xr(n) {
  return function(a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = r.width, s = l && n.matchPatterns[l] || n.matchPatterns[n.defaultMatchWidth], f = a.match(s);
    if (!f)
      return null;
    var h = f[0], p = l && n.parsePatterns[l] || n.parsePatterns[n.defaultParseWidth], T = Array.isArray(p) ? pJ(p, function(y) {
      return y.test(h);
    }) : hJ(p, function(y) {
      return y.test(h);
    }), N;
    N = n.valueCallback ? n.valueCallback(T) : T, N = r.valueCallback ? r.valueCallback(N) : N;
    var Z = a.slice(h.length);
    return {
      value: N,
      rest: Z
    };
  };
}
function hJ(n, a) {
  for (var r in n)
    if (n.hasOwnProperty(r) && a(n[r]))
      return r;
}
function pJ(n, a) {
  for (var r = 0; r < n.length; r++)
    if (a(n[r]))
      return r;
}
function mJ(n) {
  return function(a) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = a.match(n.matchPattern);
    if (!l)
      return null;
    var s = l[0], f = a.match(n.parsePattern);
    if (!f)
      return null;
    var h = n.valueCallback ? n.valueCallback(f[0]) : f[0];
    h = r.valueCallback ? r.valueCallback(h) : h;
    var p = a.slice(s.length);
    return {
      value: h,
      rest: p
    };
  };
}
var VJ = /^(\d+)(th|st|nd|rd)?/i, TJ = /\d+/i, vJ = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, wJ = {
  any: [/^b/i, /^(a|c)/i]
}, UJ = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, RJ = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, NJ = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, MJ = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, gJ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ZJ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, JJ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, kJ = {
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
}, yJ = {
  ordinalNumber: mJ({
    matchPattern: VJ,
    parsePattern: TJ,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: xr({
    matchPatterns: vJ,
    defaultMatchWidth: "wide",
    parsePatterns: wJ,
    defaultParseWidth: "any"
  }),
  quarter: xr({
    matchPatterns: UJ,
    defaultMatchWidth: "wide",
    parsePatterns: RJ,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: xr({
    matchPatterns: NJ,
    defaultMatchWidth: "wide",
    parsePatterns: MJ,
    defaultParseWidth: "any"
  }),
  day: xr({
    matchPatterns: gJ,
    defaultMatchWidth: "wide",
    parsePatterns: ZJ,
    defaultParseWidth: "any"
  }),
  dayPeriod: xr({
    matchPatterns: JJ,
    defaultMatchWidth: "any",
    parsePatterns: kJ,
    defaultParseWidth: "any"
  })
};
const bJ = yJ;
var EJ = {
  code: "en-US",
  formatDistance: _Z,
  formatLong: eJ,
  formatRelative: rJ,
  localize: fJ,
  match: bJ,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const xh = EJ;
var FJ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, SJ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, WJ = /^'([^]*?)'?$/, AJ = /''/g, xJ = /[a-zA-Z]/;
function Gl(n, a, r) {
  var l, s, f, h, p, T, N, Z, y, k, A, E, W, C, B, j, z, $;
  Se(2, arguments);
  var b = String(a), ne = ra(), q = (l = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : ne.locale) !== null && l !== void 0 ? l : xh, X = yn((f = (h = (p = (T = r == null ? void 0 : r.firstWeekContainsDate) !== null && T !== void 0 ? T : r == null || (N = r.locale) === null || N === void 0 || (Z = N.options) === null || Z === void 0 ? void 0 : Z.firstWeekContainsDate) !== null && p !== void 0 ? p : ne.firstWeekContainsDate) !== null && h !== void 0 ? h : (y = ne.locale) === null || y === void 0 || (k = y.options) === null || k === void 0 ? void 0 : k.firstWeekContainsDate) !== null && f !== void 0 ? f : 1);
  if (!(X >= 1 && X <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var We = yn((A = (E = (W = (C = r == null ? void 0 : r.weekStartsOn) !== null && C !== void 0 ? C : r == null || (B = r.locale) === null || B === void 0 || (j = B.options) === null || j === void 0 ? void 0 : j.weekStartsOn) !== null && W !== void 0 ? W : ne.weekStartsOn) !== null && E !== void 0 ? E : (z = ne.locale) === null || z === void 0 || ($ = z.options) === null || $ === void 0 ? void 0 : $.weekStartsOn) !== null && A !== void 0 ? A : 0);
  if (!(We >= 0 && We <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!q.localize)
    throw new RangeError("locale must contain localize property");
  if (!q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var He = Be(n);
  if (!kZ(He))
    throw new RangeError("Invalid time value");
  var de = zl(He), fe = yZ(He, de), pe = {
    firstWeekContainsDate: X,
    weekStartsOn: We,
    locale: q,
    _originalDate: He
  }, we = b.match(SJ).map(function(ie) {
    var Je = ie[0];
    if (Je === "p" || Je === "P") {
      var ke = GZ[Je];
      return ke(ie, q.formatLong);
    }
    return ie;
  }).join("").match(FJ).map(function(ie) {
    if (ie === "''")
      return "'";
    var Je = ie[0];
    if (Je === "'")
      return BJ(ie);
    var ke = QZ[Je];
    if (ke)
      return !(r != null && r.useAdditionalWeekYearTokens) && PZ(ie) && tf(ie, a, String(n)), !(r != null && r.useAdditionalDayOfYearTokens) && HZ(ie) && tf(ie, a, String(n)), ke(fe, ie, q.localize, pe);
    if (Je.match(xJ))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Je + "`");
    return ie;
  }).join("");
  return we;
}
function BJ(n) {
  var a = n.match(WJ);
  return a ? a[1].replace(AJ, "'") : n;
}
function Bh(n, a) {
  if (n == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in a)
    Object.prototype.hasOwnProperty.call(a, r) && (n[r] = a[r]);
  return n;
}
function CJ(n) {
  return Bh({}, n);
}
var nf = 1e3 * 60, Zi = 60 * 24, rf = Zi * 30, af = Zi * 365;
function DJ(n, a, r) {
  var l, s, f;
  Se(2, arguments);
  var h = ra(), p = (l = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : h.locale) !== null && l !== void 0 ? l : xh;
  if (!p.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var T = ZZ(n, a);
  if (isNaN(T))
    throw new RangeError("Invalid time value");
  var N = Bh(CJ(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: T
  }), Z, y;
  T > 0 ? (Z = Be(a), y = Be(n)) : (Z = Be(n), y = Be(a));
  var k = String((f = r == null ? void 0 : r.roundingMethod) !== null && f !== void 0 ? f : "round"), A;
  if (k === "floor")
    A = Math.floor;
  else if (k === "ceil")
    A = Math.ceil;
  else if (k === "round")
    A = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var E = y.getTime() - Z.getTime(), W = E / nf, C = zl(y) - zl(Z), B = (E - C) / nf, j = r == null ? void 0 : r.unit, z;
  if (j ? z = String(j) : W < 1 ? z = "second" : W < 60 ? z = "minute" : W < Zi ? z = "hour" : B < rf ? z = "day" : B < af ? z = "month" : z = "year", z === "second") {
    var $ = A(E / 1e3);
    return p.formatDistance("xSeconds", $, N);
  } else if (z === "minute") {
    var b = A(W);
    return p.formatDistance("xMinutes", b, N);
  } else if (z === "hour") {
    var ne = A(W / 60);
    return p.formatDistance("xHours", ne, N);
  } else if (z === "day") {
    var q = A(B / Zi);
    return p.formatDistance("xDays", q, N);
  } else if (z === "month") {
    var X = A(B / rf);
    return X === 12 && j !== "month" ? p.formatDistance("xYears", 1, N) : p.formatDistance("xMonths", X, N);
  } else if (z === "year") {
    var We = A(B / af);
    return p.formatDistance("xYears", We, N);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const QJ = window.Vue.defineComponent, Ml = window.Vue.toDisplayString, Mn = window.Vue.createElementVNode, OJ = window.Vue.createVNode, of = window.Vue.unref, lf = window.Vue.createTextVNode, zJ = window.Vue.openBlock, GJ = window.Vue.createElementBlock, YJ = window.Vue.createCommentVNode, IJ = window.Vue.pushScopeId, HJ = window.Vue.popScopeId, Ch = (n) => (IJ("data-v-b343770d"), n = n(), HJ(), n), PJ = {
  key: 0,
  class: "card"
}, jJ = { class: "row" }, XJ = { class: "title" }, _J = ["innerHTML"], LJ = /* @__PURE__ */ Ch(() => /* @__PURE__ */ Mn("strong", null, "First Event", -1)), qJ = /* @__PURE__ */ Ch(() => /* @__PURE__ */ Mn("strong", null, "Last Event", -1)), KJ = window.Vue.ref, $J = window.Vue.watch, ek = /* @__PURE__ */ QJ({
  __name: "AlarmDetail",
  props: {
    id: null
  },
  setup(n) {
    const a = n, r = is(), l = KJ(r.alarms[a.id]);
    return $J(a, () => {
      l.value = r.alarms[a.id];
    }), (s, f) => {
      var h;
      return l.value ? (zJ(), GJ("div", PJ, [
        Mn("div", jJ, [
          Mn("div", XJ, "[" + Ml(l.value.id) + "]", 1),
          OJ(gh, {
            severity: (h = l.value) == null ? void 0 : h.severity
          }, null, 8, ["severity"])
        ]),
        Mn("div", {
          innerHTML: l.value.description
        }, null, 8, _J),
        Mn("div", null, [
          LJ,
          lf(" - " + Ml(of(Gl)(new Date(l.value.firstEventTime), "d/M HH:mm:ss")), 1)
        ]),
        Mn("div", null, [
          qJ,
          lf(" - " + Ml(of(Gl)(new Date(l.value.lastEvent.createTime), "d/M HH:mm:ss")), 1)
        ])
      ])) : YJ("", !0);
    };
  }
});
const tk = /* @__PURE__ */ Ce(ek, [["__scopeId", "data-v-b343770d"]]), nk = window.Vue.defineComponent, rk = window.Vue.normalizeClass, ak = window.Vue.openBlock, ik = window.Vue.createElementBlock, ok = window.Vue.createCommentVNode, lk = /* @__PURE__ */ nk({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const a = n;
    return (r, l) => a != null && a.severity ? (ak(), ik("span", {
      key: 0,
      class: rk(["circle", [`${a.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : ok("", !0);
  }
});
const sk = /* @__PURE__ */ Ce(lk, [["__scopeId", "data-v-e08880d6"]]), ck = window.Vue.defineComponent, Yl = window.Vue.createElementVNode, Dh = window.Vue.createTextVNode, ni = window.Vue.unref, sf = window.Vue.normalizeClass, gl = window.Vue.withCtx, Zl = window.Vue.createVNode, cf = window.Vue.renderList, uf = window.Vue.Fragment, qn = window.Vue.openBlock, ri = window.Vue.createElementBlock, uk = window.Vue.toDisplayString, df = window.Vue.createBlock, dk = window.Vue.pushScopeId, fk = window.Vue.popScopeId, hk = (n) => (dk("data-v-c2926e5c"), n = n(), fk(), n), pk = { class: "container" }, mk = /* @__PURE__ */ hk(() => /* @__PURE__ */ Yl("div", { class: "title" }, "Alarms", -1)), Vk = /* @__PURE__ */ Dh(" ALL "), Tk = { class: "section" }, vk = { class: "alarm-list" }, ff = window.Vue.ref, wk = window.Vue.watch, Uk = window.Vue.computed, Rk = /* @__PURE__ */ ck({
  __name: "AlarmFilters",
  props: {
    relatedAlarms: null
  },
  setup(n) {
    const a = n, r = Uk(
      () => Ie.exports.keys(Ie.exports.groupBy(a.relatedAlarms, "severity"))
    ), l = ff(["all"]), s = ff(a.relatedAlarms), f = (h) => {
      l.value = l.value.filter((p) => p !== "all"), l.value.includes(h) ? l.value = l.value.filter((p) => p !== h) : l.value.push(h), h === "all" || l.value.length === 0 ? (l.value = ["all"], s.value = a.relatedAlarms) : s.value = a.relatedAlarms.filter(
        (p) => l.value.includes(p.severity)
      );
    };
    return wk(a, () => {
      l.value = ["all"], s.value = a.relatedAlarms;
    }), (h, p) => (qn(), ri("div", pk, [
      mk,
      (qn(), df(ni(NZ), {
        key: l.value.toString(),
        condensed: "",
        class: "alarm-filters",
        label: "Random list for condensed visual testing"
      }, {
        default: gl(() => [
          Zl(ni(qd), {
            class: sf({ clicked: l.value.includes("all") }),
            onClick: p[0] || (p[0] = (T) => f("all"))
          }, {
            default: gl(() => [
              Vk
            ]),
            _: 1
          }, 8, ["class"]),
          (qn(!0), ri(uf, null, cf(ni(r), (T) => (qn(), df(ni(qd), {
            class: sf({ clicked: l.value.includes(T) }),
            key: T,
            onClick: (N) => f(T)
          }, {
            default: gl(() => [
              Zl(sk, { severity: T }, null, 8, ["severity"]),
              Dh(uk(T), 1)
            ]),
            _: 2
          }, 1032, ["class", "onClick"]))), 128))
        ]),
        _: 1
      })),
      Yl("div", Tk, [
        Yl("div", vk, [
          (qn(!0), ri(uf, null, cf(s.value, (T) => (qn(), ri("div", {
            key: T.id
          }, [
            Zl(tk, {
              id: T.id
            }, null, 8, ["id"])
          ]))), 128))
        ])
      ])
    ]));
  }
});
const Nk = /* @__PURE__ */ Ce(Rk, [["__scopeId", "data-v-c2926e5c"]]);
var Mk = Object.defineProperty, gk = Object.defineProperties, Zk = Object.getOwnPropertyDescriptors, hf = Object.getOwnPropertySymbols, Jk = Object.prototype.hasOwnProperty, kk = Object.prototype.propertyIsEnumerable, pf = (n, a, r) => a in n ? Mk(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Br = (n, a) => {
  for (var r in a || (a = {}))
    Jk.call(a, r) && pf(n, r, a[r]);
  if (hf)
    for (var r of hf(a))
      kk.call(a, r) && pf(n, r, a[r]);
  return n;
}, mf = (n, a) => gk(n, Zk(a));
const yk = window.Vue.defineComponent, bk = window.Vue.inject, Cr = window.Vue.h;
var Ek = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const Fk = {
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
}, Sk = yk({
  inheritAttrs: !1,
  props: Fk,
  setup() {
    return { hasTooltip: bk("feather-has-tooltip", !1) };
  },
  render() {
    const n = () => {
      let p = "";
      this.primary && (p = "btn-primary"), this.secondary && (p = "btn-secondary"), (this.text || this.icon) && (p = "btn-text");
      const T = ["btn", "hover", "focus", p];
      return this.icon && (T.push("btn-icon"), T.push("btn-icon-table")), this.onColor && T.push("on-color"), T;
    }, a = this.asAnchor ? "a" : "button", r = {}, l = Br({}, this.$attrs);
    r.attrs = l || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (p) => {
        this.disabled ? (this.asAnchor && p.preventDefault(), this.$emit("disabled-click", p)) : this.$emit("click", p);
      }
    };
    const s = n();
    r.class = [this.$attrs.class].concat(s), this.$slots.icon && r.class.push("has-icon");
    let f = Cr(kn);
    if (this.disabled && (f = void 0), this.icon && this.$slots.default) {
      const p = this.icon;
      return r.attrs["aria-label"] = p, this.hasTooltip || (r.attrs.title = p), Cr(a, mf(Br(Br({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Cr(kn, { center: !0 })
      ]);
    }
    const h = Cr("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Cr(a, mf(Br(Br({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      h,
      f
    ]);
  }
});
var Ji = /* @__PURE__ */ Ek(Sk, [["__scopeId", "data-v-702d1074"]]);
const Wk = "/whoami", Ak = async () => {
  try {
    const n = await sr.get(Wk);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, xk = window.Pinia.defineStore, aa = xk("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const n = await Ak();
      return n && (this.isAdmin = n.roles.includes("ROLE_ADMIN"), this.userId = n.id), n;
    },
    async getAlecInfo() {
      const n = await UR();
      n && (this.firstTime = !1, this.allowSave = n.agreed);
    },
    async savePermission(n) {
      if (this.allowSave = n, !n) {
        const a = await Uh(n);
        this.allowSave = a;
      }
    }
  }
}), Bk = window.Vue.defineComponent, vn = window.Vue.unref, Dr = window.Vue.normalizeClass, yt = window.Vue.createVNode, Jl = window.Vue.toDisplayString, Kn = window.Vue.openBlock, $n = window.Vue.createElementBlock, Ck = window.Vue.createCommentVNode, Vf = window.Vue.withCtx, Nt = window.Vue.createElementVNode, Dk = window.Vue.Fragment, Qk = window.Vue.pushScopeId, Ok = window.Vue.popScopeId, zk = (n) => (Qk("data-v-326071f2"), n = n(), Ok(), n), Gk = { class: "section" }, Yk = {
  key: 0,
  class: "btn-row"
}, Ik = { key: 0 }, Hk = { key: 1 }, Pk = { key: 0 }, jk = { key: 1 }, Xk = { class: "situation-detail" }, _k = { class: "situation-info" }, Lk = { class: "id" }, qk = ["innerHTML"], Kk = /* @__PURE__ */ zk(() => /* @__PURE__ */ Nt("p", null, null, -1)), $k = { class: "boxes" }, ey = { class: "parameters" }, ty = { class: "section" }, ny = window.Vue.ref, ry = window.Vue.watch, ay = /* @__PURE__ */ Bk({
  __name: "SituationDetailTab",
  props: {
    alarmInfo: null
  },
  setup(n) {
    const a = n, r = "ACCEPTED", l = "REJECTED", s = is(), f = aa(), h = ny(a.alarmInfo.status), p = (T) => {
      var N;
      NR((N = a.alarmInfo) == null ? void 0 : N.id, T.toLowerCase()), h.value = T, s.getSituations();
    };
    return ry(a, () => {
      h.value = a.alarmInfo.status || "";
    }), (T, N) => {
      var Z, y, k, A, E;
      return Kn(), $n(Dk, null, [
        Nt("div", Gk, [
          vn(f).allowSave ? (Kn(), $n("div", Yk, [
            yt(vn(Ji), {
              class: Dr(["btn", { accepted: h.value == r }]),
              onClick: N[0] || (N[0] = () => p(r))
            }, {
              default: Vf(() => [
                yt(vn(Le), {
                  icon: vn(Nh),
                  "aria-hidden": "true",
                  class: Dr(["icon accept", { accepted: h.value == r }])
                }, null, 8, ["icon", "class"]),
                h.value == r ? (Kn(), $n("span", Ik, Jl(r))) : (Kn(), $n("span", Hk, " ACCEPT"))
              ]),
              _: 1
            }, 8, ["class"]),
            yt(vn(Ji), {
              class: Dr(["btn", { rejected: h.value == l }]),
              onClick: N[1] || (N[1] = () => p(l))
            }, {
              default: Vf(() => [
                yt(vn(Le), {
                  icon: vn(gM),
                  "aria-hidden": "true",
                  class: Dr(["icon reject", { rejected: h.value == l }])
                }, null, 8, ["icon", "class"]),
                h.value == l ? (Kn(), $n("span", Pk, Jl(l))) : (Kn(), $n("span", jk, " REJECT"))
              ]),
              _: 1
            }, 8, ["class"])
          ])) : Ck("", !0),
          Nt("div", Xk, [
            Nt("div", {
              class: Dr(["severity-line", [`${(y = (Z = a.alarmInfo) == null ? void 0 : Z.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
            }, null, 2),
            Nt("div", _k, [
              Nt("div", Lk, [
                Nt("div", null, "Situation " + Jl((k = a.alarmInfo) == null ? void 0 : k.id), 1),
                yt(gh, {
                  severity: (A = a.alarmInfo) == null ? void 0 : A.severity
                }, null, 8, ["severity"])
              ]),
              Nt("span", {
                innerHTML: a.alarmInfo.description
              }, null, 8, qk),
              Kk,
              Nt("div", $k, [
                yt(Ul, {
                  label: "First Event",
                  info: T.format(new Date(a.alarmInfo.firstEventTime), "d/M HH:mm:ss")
                }, null, 8, ["info"]),
                yt(Ul, {
                  label: "Last Event",
                  info: T.format(new Date(a.alarmInfo.lastEvent.time), "d/M HH:mm:ss")
                }, null, 8, ["info"]),
                yt(Ul, {
                  label: "Reduction key",
                  info: a.alarmInfo.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Nt("div", ey, [
              yt(Rh, {
                relatedAlarms: (E = a.alarmInfo) == null ? void 0 : E.relatedAlarms,
                size: "large"
              }, null, 8, ["relatedAlarms"])
            ])
          ])
        ]),
        Nt("div", ty, [
          yt(Nk, {
            "related-alarms": a.alarmInfo.relatedAlarms
          }, null, 8, ["related-alarms"])
        ])
      ], 64);
    };
  }
});
const iy = /* @__PURE__ */ Ce(ay, [["__scopeId", "data-v-326071f2"]]);
const oy = window.Vue.openBlock, ly = window.Vue.createElementBlock, sy = window.Vue.createElementVNode;
var cy = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const uy = {}, dy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fy = /* @__PURE__ */ sy("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), hy = [
  fy
];
function py(n, a) {
  return oy(), ly("svg", dy, hy);
}
var my = /* @__PURE__ */ cy(uy, [["render", py]]);
const Vy = window.Vue.watch, Ty = window.Vue.onBeforeUnmount, vy = window.Vue.ref, wy = window.Vue.onMounted, Uy = (n) => {
  const a = vy(!1);
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
  return wy(() => {
    const h = Vy(a, (p) => {
      window && p ? window.addEventListener("resize", s) : f();
    }, {
      immediate: !0
    });
    Ty(() => {
      h(), f();
    });
  }), a;
}, Ry = window.Vue.watch, Ny = window.Vue.onBeforeUnmount, My = window.Vue.ref, gy = window.Vue.onMounted, Zy = (n, a) => {
  const r = My(!1), l = (h) => {
    h.target === window && a(h);
  }, s = (h) => {
    let p = [];
    Array.isArray(n.value) ? p = n.value : p = [n.value], p.some((N) => N && N.contains(h.target)) || a(h);
  }, f = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", l));
  };
  return gy(() => {
    const h = Ry(r, (p) => {
      document && window && p ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", l)) : f();
    }, {
      immediate: !0
    });
    Ny(() => {
      h(), f();
    });
  }), r;
}, Jy = window.Vue.watch, ky = window.Vue.onBeforeUnmount, yy = window.Vue.ref, Qh = (n, a) => {
  const r = yy(!1);
  let l = !1;
  const s = (T) => {
    a(T), l = !1;
  };
  function f(T) {
    l || (requestAnimationFrame(() => s(T)), l = !0);
  }
  const h = () => {
    n.value && n.value.removeEventListener("scroll", f, !0);
  }, p = Jy([n, r], ([T, N], Z) => {
    Z && Z.length && Z[0] && Z[0].removeEventListener("scroll", f, !0), N && T ? T.addEventListener("scroll", f, !0) : h();
  }, {
    immediate: !0
  });
  return ky(() => {
    p(), h();
  }), r;
}, by = window.Vue.defineComponent, zt = window.Vue.ref, Tf = window.Vue.toRef, Ey = window.Vue.onMounted, Fy = window.Vue.watch, vf = window.Vue.computed, Sy = window.Vue.nextTick, wf = window.Vue.openBlock, Uf = window.Vue.createElementBlock, Rf = window.Vue.renderSlot, Wy = window.Vue.normalizeClass, Ay = window.Vue.normalizeStyle, xy = window.Vue.createCommentVNode;
var By = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const Cy = {
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
}, Dy = {
  "trigger-click": (n) => !0,
  "outside-click": (n) => !0
}, Qy = by({
  emits: Dy,
  props: Cy,
  setup(n, a) {
    const r = zt(), l = zt(), s = Tf(n, "open"), f = Tf(n, "noExpand"), h = zt("auto"), p = zt(), T = zt(n.triggerId || ve("feather-menu-trigger")), N = zt(ve("feather-menu-dropdown")), Z = zt(""), y = zt("");
    Ey(() => {
      p.value = window;
    });
    const k = zt(!1), A = () => ({
      height: p.value.innerHeight,
      width: p.value.innerWidth,
      left: 0,
      top: 0
    }), E = () => {
      if (!l.value)
        return;
      const b = r.value.getBoundingClientRect();
      k.value = !0, h.value = "auto", Sy(() => {
        let { height: ne, width: q } = l.value.getBoundingClientRect();
        const X = A(), We = X.height, He = X.width;
        n.fill && q < b.width ? (h.value = b.width + "px", q = b.width) : h.value = q + "px";
        let de = 0;
        We - b.bottom < ne && b.top >= ne ? (de = b.top - ne, n.cover && (de += b.height)) : (de = b.bottom, n.cover && (de -= b.height));
        let fe = n.right ? b.right - q : b.left;
        !n.right && b.right >= q && He - b.left < q && (fe = b.right - q), n.right && b.right <= q && He - b.left > q && (fe = b.left), y.value = `${fe}px`, Z.value = `${de}px`, k.value = !1;
      });
    }, C = Zy(r, (b) => {
      a.emit("outside-click", b);
    }), B = Uy(E), j = Qh(p, E);
    Fy([s, l], ([b, ne]) => {
      b && ne && E(), C.value = b, B.value = b, j.value = b;
    });
    const z = vf(() => {
      const b = {
        id: T.value,
        "aria-haspopup": "true"
      };
      return s.value && (b["aria-controls"] = N.value), f.value || (b["aria-expanded"] = s.value ? "true" : "false"), b;
    }), $ = vf(() => ({
      click: (b) => {
        a.emit("trigger-click", b);
      }
    }));
    return {
      positionTop: Z,
      positionLeft: y,
      triggerId: T,
      triggerAttrs: z,
      triggerListeners: $,
      menuId: N,
      menu: l,
      menuWidth: h,
      root: r,
      calculatePosition: E,
      calculating: k
    };
  }
}), Oy = ["data-ref-id"], zy = ["data-ref-id", "id"];
function Gy(n, a, r, l, s, f) {
  return wf(), Uf("div", {
    class: "feather-menu",
    "data-ref-id": n.dataRefId,
    ref: "root"
  }, [
    Rf(n.$slots, "trigger", {
      attrs: n.triggerAttrs,
      on: n.triggerListeners
    }, void 0, !0),
    n.open ? (wf(), Uf("div", {
      key: 0,
      class: Wy(["feather-menu-dropdown", { hidden: n.calculating }]),
      "data-ref-id": n.dataRefId + "-dropdown",
      ref: "menu",
      id: n.menuId,
      style: Ay({ left: n.positionLeft, top: n.positionTop, width: n.menuWidth })
    }, [
      Rf(n.$slots, "default", { labelId: n.triggerId }, void 0, !0)
    ], 14, zy)) : xy("", !0)
  ], 8, Oy);
}
var Yy = /* @__PURE__ */ By(Qy, [["render", Gy], ["__scopeId", "data-v-f75af406"]]);
const Iy = window.Vue.defineComponent, Hy = window.Vue.openBlock, Py = window.Vue.createElementBlock, jy = window.Vue.normalizeClass, Xy = window.Vue.pushScopeId, _y = window.Vue.popScopeId, Il = window.Vue.createElementVNode;
var Ly = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const qy = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, Ky = {
  click: (n) => !0
}, $y = Iy({
  emits: Ky,
  props: qy,
  methods: {
    handleClick(n) {
      this.disabled || this.$emit("click", n);
    }
  }
}), Oh = (n) => (Xy("data-v-07e020f5"), n = n(), _y(), n), e2 = /* @__PURE__ */ Oh(() => /* @__PURE__ */ Il("div", { class: "track" }, null, -1)), t2 = /* @__PURE__ */ Oh(() => /* @__PURE__ */ Il("div", { class: "switcher" }, [
  /* @__PURE__ */ Il("div", { class: "switch-circle" })
], -1)), n2 = [
  e2,
  t2
];
function r2(n, a, r, l, s, f) {
  return Hy(), Py("div", {
    class: jy(["switch-container", { checked: n.checked, disabled: n.disabled }]),
    onClick: a[0] || (a[0] = (...h) => n.handleClick && n.handleClick(...h))
  }, n2, 2);
}
var a2 = /* @__PURE__ */ Ly($y, [["render", r2], ["__scopeId", "data-v-07e020f5"]]), i2 = Object.defineProperty, o2 = Object.defineProperties, l2 = Object.getOwnPropertyDescriptors, Nf = Object.getOwnPropertySymbols, s2 = Object.prototype.hasOwnProperty, c2 = Object.prototype.propertyIsEnumerable, Mf = (n, a, r) => a in n ? i2(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, gf = (n, a) => {
  for (var r in a || (a = {}))
    s2.call(a, r) && Mf(n, r, a[r]);
  if (Nf)
    for (var r of Nf(a))
      c2.call(a, r) && Mf(n, r, a[r]);
  return n;
}, Zf = (n, a) => o2(n, l2(a));
const Us = window.Vue.defineComponent, wn = window.Vue.h, u2 = window.Vue.openBlock, d2 = window.Vue.createElementBlock, f2 = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var zh = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const h2 = {
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
}, p2 = Us({
  inheritAttrs: !1,
  props: h2,
  render() {
    let n;
    this.$slots.icon && this.$slots.icon().findIndex((h) => h.children && h.children.length !== 0 || h.type && h.type.render) !== -1 && (n = wn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = wn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let l;
    this.$slots.post && (l = wn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const s = this.disabled ? void 0 : wn(kn);
    if (this.asLi)
      return wn("li", Zf(gf({}, this.$attrs), {
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
    const f = wn("a", Zf(gf({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [n, r, l, s]);
    return wn("li", {}, [f]);
  }
});
var Rs = /* @__PURE__ */ zh(p2, [["__scopeId", "data-v-7c46b2b3"]]);
Us({
  components: {
    FeatherListItem: Rs
  }
});
const m2 = {}, V2 = { class: "feather-list" };
function T2(n, a) {
  return u2(), d2("ul", V2, [
    f2(n.$slots, "default", {}, void 0, !0)
  ]);
}
var v2 = /* @__PURE__ */ zh(m2, [["render", T2], ["__scopeId", "data-v-941a1d50"]]);
const w2 = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  keydown: (n) => !0
}, U2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Us({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: w2,
  props: U2,
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
  components: { SwitchRender: a2, FeatherListItem: Rs }
});
const R2 = function(n, a) {
  if (!n || !a)
    return;
  let r = n.getBoundingClientRect().height;
  const l = getComputedStyle(n);
  r += parseInt(l.getPropertyValue("margin-top"), 10), r += parseInt(l.getPropertyValue("margin-bottom"), 10), a.scrollTop = n.offsetTop - a.getBoundingClientRect().height + r;
};
var N2 = Object.defineProperty, M2 = Object.defineProperties, g2 = Object.getOwnPropertyDescriptors, Jf = Object.getOwnPropertySymbols, Z2 = Object.prototype.hasOwnProperty, J2 = Object.prototype.propertyIsEnumerable, kf = (n, a, r) => a in n ? N2(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, Hl = (n, a) => {
  for (var r in a || (a = {}))
    Z2.call(a, r) && kf(n, r, a[r]);
  if (Jf)
    for (var r of Jf(a))
      J2.call(a, r) && kf(n, r, a[r]);
  return n;
}, k2 = (n, a) => M2(n, g2(a));
const Gh = window.Vue.defineComponent, gn = window.Vue.resolveComponent, di = window.Vue.openBlock, yf = window.Vue.createBlock, fi = window.Vue.mergeProps, Zn = window.Vue.withCtx, Yh = window.Vue.createElementBlock, y2 = window.Vue.Fragment, b2 = window.Vue.renderList, E2 = window.Vue.createTextVNode, F2 = window.Vue.toDisplayString, S2 = window.Vue.computed, bf = window.Vue.toRef, Qr = window.Vue.createVNode, Ef = window.Vue.toHandlers, W2 = window.Vue.renderSlot, A2 = window.Vue.normalizeClass, x2 = window.Vue.createElementVNode;
var Ih = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const B2 = Gh({
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
        const a = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[n];
        R2(a, this.$refs.list.$el);
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
    FeatherList: v2,
    FeatherListItem: Rs
  }
});
function C2(n, a, r, l, s, f) {
  const h = gn("FeatherListItem"), p = gn("FeatherList");
  return di(), yf(p, fi(n.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Zn(() => [
      (di(!0), Yh(y2, null, b2(n.options, (T, N) => (di(), yf(h, {
        key: T[n.textProp],
        "as-li": "",
        id: n.getId(N),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": n.isSelected(N),
        selected: n.isSelected(N),
        onClick: (Z) => n.select(T)
      }, {
        default: Zn(() => [
          E2(F2(T[n.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var D2 = /* @__PURE__ */ Ih(B2, [["render", C2], ["__scopeId", "data-v-eae820da"]]);
const Q2 = k2(Hl(Hl({}, Sg), ms), {
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
}), O2 = {
  "update:modelValue": (n) => !0
}, z2 = Gh({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: O2,
  props: Q2,
  setup(n, a) {
    Vs(n), Wg(n);
    const r = S2(() => ve("feather-select-input")), { validate: l } = hs(r, bf(n, "modelValue"), n.label, n.schema, bf(n, "error"));
    return Hl({
      inputId: r,
      validate: l
    }, ps(a.attrs));
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
        const n = this.internalValue, a = this.options.filter((r) => r[this.textProp] === n[this.textProp]);
        if (a && a.length)
          return this.options.indexOf(a[0]);
      }
      return -1;
    },
    icon: () => my
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
        const a = String.fromCharCode(n.keyCode);
        this.charsSoFar += a, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Ti(this.delayTimeout), this.delayTimeout = Vi(() => {
        const n = this.options.filter((a) => a[this.textProp] && a[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        n && n.length && this.select(n[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: gg,
    InputSubText: fs,
    FeatherMenu: Yy,
    List: D2,
    FeatherIcon: Le
  }
});
function G2(n, a, r, l, s, f) {
  const h = gn("FeatherIcon"), p = gn("InputWrapper"), T = gn("List"), N = gn("FeatherMenu"), Z = gn("InputSubText");
  return di(), Yh("div", fi(n.inherittedAttrs, { class: "feather-select-container" }), [
    Qr(N, {
      "no-expand": "",
      fill: "",
      open: n.showMenu,
      onOutsideClick: n.handleOutsideClick,
      onTriggerClick: n.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Zn((y) => [
        Qr(p, fi({
          for: n.inputId,
          raised: n.raised,
          focused: n.hasFocus,
          "show-clear": n.showClear,
          onClear: n.handleClear
        }, y.attrs, Ef(y.on), {
          class: ["feather-select-wrapper", { focused: n.hasFocus }]
        }), {
          pre: Zn(() => [
            W2(n.$slots, "pre", {}, void 0, !0)
          ]),
          post: Zn(() => [
            Qr(h, {
              class: A2(["feather-select-icon", { rotate: n.showMenu }]),
              icon: n.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Zn(() => [
            x2("input", fi(n.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Ef(n.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Zn(() => [
        Qr(T, {
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
    Qr(Z, { id: n.subTextId }, null, 8, ["id"])
  ], 16);
}
var Y2 = /* @__PURE__ */ Ih(z2, [["render", G2], ["__scopeId", "data-v-ecb32d90"]]);
const I2 = window.Vue.openBlock, H2 = window.Vue.createElementBlock, Hh = window.Vue.createElementVNode;
var P2 = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const j2 = {}, X2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _2 = /* @__PURE__ */ Hh("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), L2 = /* @__PURE__ */ Hh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), q2 = [
  _2,
  L2
];
function K2(n, a) {
  return I2(), H2("svg", X2, q2);
}
var $2 = /* @__PURE__ */ P2(j2, [["render", K2]]);
const hi = window.Vue.openBlock, Pl = window.Vue.createElementBlock, Ph = window.Vue.createElementVNode, eb = window.Vue.defineComponent, Un = window.Vue.ref, tb = window.Vue.provide, Ff = window.Vue.computed, nb = window.Vue.onUnmounted, Sf = window.Vue.toRef, rb = window.Vue.resolveComponent, ab = window.Vue.Fragment, ib = window.Vue.createBlock, ob = window.Vue.Teleport, Wf = window.Vue.createVNode, lb = window.Vue.Transition, sb = window.Vue.withCtx, cb = window.Vue.normalizeClass, ub = window.Vue.normalizeStyle, db = window.Vue.toDisplayString, fb = window.Vue.createCommentVNode, hb = window.Vue.renderSlot, kl = window.Vue.nextTick;
var jh = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const pb = {}, mb = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Vb = /* @__PURE__ */ Ph("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), Tb = [
  Vb
];
function vb(n, a) {
  return hi(), Pl("svg", mb, Tb);
}
var wb = /* @__PURE__ */ jh(pb, [["render", vb]]), Ee = /* @__PURE__ */ ((n) => (n.top = "top", n.bottom = "bottom", n.left = "left", n.right = "right", n))(Ee || {}), Yt = /* @__PURE__ */ ((n) => (n.center = "center", n.left = "left", n.right = "right", n))(Yt || {});
const Ub = (n, a, r, l = 9) => {
  const s = window.innerHeight - n.bottom, f = window.innerWidth - n.right, h = [];
  n.top >= a.height + l && h.push(Ee.top), s >= a.height + l && h.push(Ee.bottom);
  const p = [];
  f >= a.width + l && p.push(Ee.right), n.left >= a.width + l && p.push(Ee.left);
  let T = [...p, ...h];
  return (r === Ee.top || r === Ee.bottom) && (T = [...h, ...p]), T.indexOf(r) > -1 ? r : T.length ? T[0] : r;
}, Rb = (n, a, r, l, s = 28) => {
  if (n === Ee.left || n === Ee.right)
    return Yt.center;
  const f = a.left + a.width / 2, h = window.innerWidth - a.right, p = [], T = f, N = h + a.width / 2, Z = r.width - s, y = r.width / 2;
  return T >= y && N >= y && p.push(Yt.center), N >= Z && p.push(Yt.left), T >= Z && p.push(Yt.right), p.indexOf(l) > -1 ? l : p.length ? p[0] : l;
}, Nb = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Ee.top
  },
  pointerAlignment: {
    type: String,
    default: () => Yt.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, Mb = eb({
  props: Nb,
  setup(n) {
    const a = Un(!1), r = Un(!1), l = ve("feather-tooltip-trigger"), s = ve("feather-tooltip"), f = "data-feather-tooltip";
    tb("feather-has-tooltip", !0);
    let h = 0;
    const p = () => {
      Ti(h), a.value || (h = Vi(W, n.enterDelay));
    }, T = () => {
      Ti(h), h = Vi(C, n.exitDelay);
    }, N = (de) => {
      de.keyCode === Ne.ESCAPE && (de.preventDefault(), C(!0));
    }, Z = Ff(() => ({
      [f]: l,
      "aria-describedby": s
    })), y = {
      mouseenter: p,
      mouseleave: T,
      focus: p,
      blur: T,
      keydown: N
    }, k = Un(document), A = Qh(k, () => C(!0));
    nb(() => C(!0));
    const E = () => document.getElementById(s), W = () => {
      r.value = !1, a.value = !0, kl(() => {
        const de = E();
        He(de), a.value = !1, kl(() => {
          r.value = !0, a.value = !0, A.value = !0;
        });
      });
    }, C = (de = !1) => {
      ne.value = "", b.value = "", q.value = "", X.value = "", a.value = !1, de && (r.value = !1), A.value = !1;
    }, B = Sf(n, "placement"), j = Sf(n, "pointerAlignment"), z = 8, $ = 24, b = Un(""), ne = Un(""), q = Un(""), X = Un(""), We = Ff(() => X.value ? "p-" + X.value : !1), He = (de) => {
      const fe = document.querySelector(`[${f}=${l}]`);
      if (!fe) {
        console.log("trigger not found");
        return;
      }
      kl(() => {
        const pe = fe.getBoundingClientRect(), we = de.getBoundingClientRect(), ie = Ub(pe, we, B.value, z), Je = Rb(ie, pe, we, j.value, $);
        q.value = Je.toString(), X.value = ie.toString();
        let ke = 0, De = 0;
        if ((ie === Ee.left || ie === Ee.right) && (ke = pe.top + pe.height / 2 - we.height / 2, ie === Ee.left && (De = pe.left - we.width - z), ie === Ee.right && (De = pe.right)), ie === Ee.top || ie === Ee.bottom) {
          ke = pe.top - we.height - z, ie === Ee.bottom && (ke = pe.bottom);
          const ur = pe.left + pe.width / 2;
          switch (Je) {
            case Yt.center:
              De = ur - we.width / 2;
              break;
            case Yt.left:
              De = ur - $;
              break;
            case Yt.right:
              De = ur - we.width + $;
              break;
          }
        }
        b.value = ke.toString() + "px", ne.value = De.toString() + "px";
      });
    };
    return {
      attrs: Z,
      listeners: y,
      show: a,
      animate: r,
      alignmentClass: q,
      placementClass: We,
      top: b,
      left: ne,
      tooltipID: s
    };
  },
  components: {
    Pointer: wb
  }
}), gb = ["id"];
function Zb(n, a, r, l, s, f) {
  const h = rb("Pointer");
  return hi(), Pl(ab, null, [
    (hi(), ib(ob, { to: "body" }, [
      Wf(lb, { css: n.animate }, {
        default: sb(() => [
          n.show ? (hi(), Pl("div", {
            key: 0,
            class: cb(["feather-tooltip-container", [n.alignmentClass, n.placementClass]]),
            ref: "tooltip",
            style: ub({ left: n.left, top: n.top })
          }, [
            Ph("div", {
              class: "tooltip",
              role: "tooltip",
              id: n.tooltipID
            }, db(n.title), 9, gb),
            Wf(h, { class: "tooltip-pointer" })
          ], 6)) : fb("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    hb(n.$slots, "default", {
      attrs: n.attrs,
      on: n.listeners
    }, void 0, !0)
  ], 64);
}
var Af = /* @__PURE__ */ jh(Mb, [["render", Zb], ["__scopeId", "data-v-3da6b22e"]]);
const ki = (n) => {
  let a = "";
  try {
    a = Gl(new Date(n), Jn.DATE_FORMAT);
  } catch {
    console.log("error date", n);
  }
  return a;
}, Jb = window.Vue.defineComponent, ai = window.Vue.unref, xf = window.Vue.toHandlers, Bf = window.Vue.mergeProps, yl = window.Vue.createElementVNode, Cf = window.Vue.withCtx, Df = window.Vue.createVNode, kb = window.Vue.normalizeClass, yb = window.Vue.normalizeStyle, bb = window.Vue.Fragment, Eb = window.Vue.openBlock, Fb = window.Vue.createElementBlock, Sb = /* @__PURE__ */ Jb({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    maxEnd: null
  },
  setup(n) {
    const a = n, r = (s, f) => (f - s) * a.proportion, l = (s) => (s - a.minStart) * a.proportion;
    return (s, f) => (Eb(), Fb(bb, null, [
      Df(ai(Af), {
        title: ai(ki)(n.alarm.firstEventTime)
      }, {
        default: Cf(({ attrs: h, on: p }) => [
          yl("div", Bf({ class: "circle" }, h, xf(p), {
            class: [`${n.alarm.severity.toLowerCase()}-bg dark`],
            style: {
              marginLeft: l(n.alarm.firstEventTime) + "px"
            }
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      yl("div", {
        class: kb(["line", [`${n.alarm.severity.toLowerCase()}-bg dark`]]),
        style: yb({
          width: r(n.alarm.firstEventTime, n.alarm.lastEventTime) + "px"
        })
      }, null, 6),
      Df(ai(Af), {
        title: ai(ki)(n.alarm.lastEventTime)
      }, {
        default: Cf(({ attrs: h, on: p }) => [
          yl("div", Bf({ class: "circle" }, h, xf(p), {
            class: [`${n.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"])
    ], 64));
  }
});
const Wb = /* @__PURE__ */ Ce(Sb, [["__scopeId", "data-v-eea4d54e"]]), Ab = window.Vue.openBlock, xb = window.Vue.createElementBlock, Xh = window.Vue.createElementVNode;
var Bb = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const Cb = {}, Db = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Qb = /* @__PURE__ */ Xh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Ob = /* @__PURE__ */ Xh("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), zb = [
  Qb,
  Ob
];
function Gb(n, a) {
  return Ab(), xb("svg", Db, zb);
}
var Yb = /* @__PURE__ */ Bb(Cb, [["render", Gb]]);
const Ib = window.Vue.defineComponent, Or = window.Vue.toDisplayString, Ye = window.Vue.createElementVNode, tn = window.Vue.unref, ii = window.Vue.createVNode, Hb = window.Vue.createTextVNode, Qf = window.Vue.renderList, Of = window.Vue.Fragment, zr = window.Vue.openBlock, Gr = window.Vue.createElementBlock, Pb = window.Vue.pushScopeId, jb = window.Vue.popScopeId, Xb = (n) => (Pb("data-v-bf32a4ab"), n = n(), jb(), n), _b = { class: "metrics" }, Lb = { class: "section" }, qb = { class: "id" }, Kb = { class: "alarm-list" }, $b = /* @__PURE__ */ Xb(() => /* @__PURE__ */ Ye("h4", null, "Alarms", -1)), eE = { class: "action-btns" }, tE = { class: "zoom" }, nE = /* @__PURE__ */ Hb(" Zoom "), rE = { class: "alarms" }, aE = { class: "times" }, iE = { class: "container" }, oE = { class: "ids" }, lE = { class: "timeline-container" }, sE = /* @__PURE__ */ Ib({
  __name: "SituationMetricsTab",
  props: {
    situation: null
  },
  setup(n) {
    const a = n, r = 1e3;
    let l = ref(r);
    const s = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], f = ref(s[0]), h = ref(a.situation.relatedAlarms), p = ref(
      Ie.exports.minBy(a.situation.relatedAlarms, "firstEventTime").firstEventTime || new Date()
    ), T = ref(
      Ie.exports.maxBy(a.situation.relatedAlarms, "lastEventTime").lastEventTime || new Date()
    ), N = ref(l.value / (T.value - p.value));
    watch(a, () => {
      p.value = Ie.exports.minBy(
        a.situation.relatedAlarms,
        "firstEventTime"
      ).firstEventTime, T.value = Ie.exports.maxBy(
        a.situation.relatedAlarms,
        "lastEventTime"
      ).lastEventTime, l.value = r, N.value = l.value / (T.value - p.value), h.value = a.situation.relatedAlarms, f.value = s[0];
    });
    const Z = (A) => {
      if (A.id === 1 && (h.value = a.situation.relatedAlarms), A.id === 2) {
        const E = Ie.exports.groupBy(h.value, "severity"), W = [].concat(E.CRITICAL).concat(E.MAJOR).concat(E.MINOR).concat(E.WARNING);
        h.value = W.filter((C) => C);
      }
      if (A.id === 3) {
        const E = Ie.exports.reverse(
          Ie.exports.sortBy(
            a.situation.relatedAlarms,
            (W) => W.lastEventTime - W.firstEventTime
          )
        );
        h.value = E;
      }
    }, y = () => {
      l.value += 100, N.value = l.value / (T.value - p.value);
    }, k = () => {
      l.value -= 100, N.value = l.value / (T.value - p.value);
    };
    return (A, E) => (zr(), Gr("div", _b, [
      Ye("div", Lb, [
        Ye("div", qb, "Situation - [ " + Or(a.situation.id) + " ]", 1),
        Ye("div", null, " Duration: " + Or(tn(DJ)(new Date(T.value), new Date(p.value))), 1)
      ]),
      Ye("div", Kb, [
        $b,
        Ye("div", eE, [
          ii(tn(Y2), {
            class: "select",
            label: "Sort by:",
            options: s,
            modelValue: f.value,
            "onUpdate:modelValue": [
              E[0] || (E[0] = (W) => f.value = W),
              Z
            ],
            "text-prop": "name"
          }, null, 8, ["modelValue"]),
          Ye("div", tE, [
            nE,
            Ye("div", null, [
              ii(tn(Le), {
                icon: tn($2),
                class: "zoom-icon",
                onClick: y
              }, null, 8, ["icon"]),
              ii(tn(Le), {
                icon: tn(Yb),
                class: "zoom-icon",
                onClick: k
              }, null, 8, ["icon"])
            ])
          ])
        ]),
        Ye("div", rE, [
          Ye("div", aE, [
            Ye("div", null, Or(tn(ki)(p.value)), 1),
            Ye("div", null, Or(tn(ki)(T.value)), 1)
          ]),
          Ye("div", iE, [
            Ye("div", oE, [
              (zr(!0), Gr(Of, null, Qf(h.value, (W) => (zr(), Gr("div", {
                class: "alarm-id",
                key: W.id
              }, " [ " + Or(W.id) + " ] ", 1))), 128))
            ]),
            Ye("div", lE, [
              (zr(!0), Gr(Of, null, Qf(h.value, (W) => (zr(), Gr("div", {
                class: "timeline",
                key: W.id
              }, [
                ii(Wb, {
                  alarm: W,
                  proportion: N.value,
                  "min-start": parseInt(p.value),
                  "max-end": parseInt(T.value)
                }, null, 8, ["alarm", "proportion", "min-start", "max-end"])
              ]))), 128))
            ])
          ])
        ])
      ])
    ]));
  }
});
const cE = /* @__PURE__ */ Ce(sE, [["__scopeId", "data-v-bf32a4ab"]]), uE = window.Vue.defineComponent, _h = window.Vue.createTextVNode, Yr = window.Vue.unref, er = window.Vue.withCtx, Rn = window.Vue.createVNode, dE = window.Vue.openBlock, fE = window.Vue.createElementBlock, hE = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const pE = {
  key: 0,
  class: "detail"
}, mE = /* @__PURE__ */ _h("Details"), VE = /* @__PURE__ */ _h("Metrics"), TE = /* @__PURE__ */ uE({
  __name: "SituationDetail",
  props: {
    alarmInfo: null
  },
  setup(n) {
    const a = n;
    return (r, l) => a.alarmInfo ? (dE(), fE("div", pE, [
      Rn(Yr(qN), null, {
        tabs: er(() => [
          Rn(Yr(Cd), null, {
            default: er(() => [
              mE
            ]),
            _: 1
          }),
          Rn(Yr(Cd), null, {
            default: er(() => [
              VE
            ]),
            _: 1
          })
        ]),
        default: er(() => [
          Rn(Yr(Dd), { class: "panel" }, {
            default: er(() => [
              Rn(iy, {
                "alarm-info": a.alarmInfo
              }, null, 8, ["alarm-info"])
            ]),
            _: 1
          }),
          Rn(Yr(Dd), { class: "panel" }, {
            default: er(() => [
              Rn(cE, {
                situation: a == null ? void 0 : a.alarmInfo
              }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : hE("", !0);
  }
});
const vE = /* @__PURE__ */ Ce(TE, [["__scopeId", "data-v-63450444"]]), wE = window.Vue.defineComponent, jl = window.Vue.createElementVNode, zf = window.Vue.unref, UE = window.Vue.renderList, RE = window.Vue.Fragment, bl = window.Vue.openBlock, El = window.Vue.createElementBlock, Gf = window.Vue.createVNode, NE = window.Vue.pushScopeId, ME = window.Vue.popScopeId, gE = (n) => (NE("data-v-27742ddb"), n = n(), ME(), n), ZE = { class: "list-main" }, JE = /* @__PURE__ */ gE(() => /* @__PURE__ */ jl("h2", null, "Situation List", -1)), kE = { class: "container" }, yE = { class: "situation-list" }, bE = window.Vue.reactive, EE = /* @__PURE__ */ wE({
  __name: "SituationList",
  setup(n) {
    const a = is();
    a.getSituations();
    const r = bE({
      selectedSituationIndex: 0,
      situationSelected: ""
    }), l = (s) => {
      r.situationSelected = s, r.selectedSituationIndex = a.situations.findIndex(
        (f) => f.id === s
      );
    };
    return a.$subscribe((s, f) => {
      var h;
      r.situationSelected = (h = f.situations[0]) == null ? void 0 : h.id;
    }), (s, f) => (bl(), El("div", ZE, [
      JE,
      jl("div", kE, [
        jl("div", yE, [
          (bl(!0), El(RE, null, UE(zf(a).situations, (h) => (bl(), El("div", {
            key: h.id
          }, [
            Gf(aN, {
              "alarm-info": h,
              onSituationSelected: l,
              selected: r.situationSelected == h.id
            }, null, 8, ["alarm-info", "selected"])
          ]))), 128))
        ]),
        Gf(vE, {
          "alarm-info": zf(a).situations[r.selectedSituationIndex]
        }, null, 8, ["alarm-info"])
      ])
    ]));
  }
});
const FE = /* @__PURE__ */ Ce(EE, [["__scopeId", "data-v-27742ddb"]]);
var SE = Object.defineProperty, WE = Object.defineProperties, AE = Object.getOwnPropertyDescriptors, Yf = Object.getOwnPropertySymbols, xE = Object.prototype.hasOwnProperty, BE = Object.prototype.propertyIsEnumerable, If = (n, a, r) => a in n ? SE(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, pi = (n, a) => {
  for (var r in a || (a = {}))
    xE.call(a, r) && If(n, r, a[r]);
  if (Yf)
    for (var r of Yf(a))
      BE.call(a, r) && If(n, r, a[r]);
  return n;
}, Lh = (n, a) => WE(n, AE(a));
const qh = window.Vue.defineComponent, CE = window.Vue.ref, Lr = window.Vue.computed, DE = window.Vue.reactive, Hf = window.Vue.watch, Fl = window.Vue.inject, Kh = window.Vue.resolveComponent, Xl = window.Vue.openBlock, $h = window.Vue.createElementBlock, on = window.Vue.createElementVNode, QE = window.Vue.createBlock, OE = window.Vue.createCommentVNode, ep = window.Vue.renderSlot, zE = window.Vue.pushScopeId, GE = window.Vue.popScopeId, Sl = window.Vue.toRef, Pf = window.Vue.mergeProps, YE = window.Vue.toDisplayString, IE = window.Vue.createVNode;
var tp = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const HE = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, PE = qh({
  props: HE,
  setup(n) {
    const a = CE(), r = () => {
      a.value.focus();
    }, l = Lr(() => ve("feather-radio-button")), s = DE({
      first: !1,
      focus: r,
      disabled: n.disabled,
      value: n.value,
      checked: !1,
      id: l.value
    }), f = Lr(() => ve("radio-label-id")), h = Lr(() => s.first || s.checked ? 0 : -1);
    Hf(() => n.disabled, (y) => {
      s.disabled = y;
    }, { immediate: !0 }), Hf(() => n.value, (y) => {
      s.value = y;
    }, { immediate: !0 });
    const p = Fl("register", (y) => {
    }), T = Fl("blur", (y) => {
    }), N = Fl("select", (y) => {
    });
    return p(s), {
      labelId: f,
      tabindex: h,
      vm: s,
      blur: T,
      click: () => {
        N(s);
      },
      input: a,
      id: l
    };
  },
  components: {
    FeatherRipple: kn
  }
}), jE = (n) => (zE("data-v-24790cf0"), n = n(), GE(), n), XE = { class: "layout-container" }, _E = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], LE = { class: "radio hover focus" }, qE = /* @__PURE__ */ jE(() => /* @__PURE__ */ on("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ on("svg", { class: "dot" }, [
    /* @__PURE__ */ on("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), KE = ["id"];
function $E(n, a, r, l, s, f) {
  const h = Kh("feather-ripple");
  return Xl(), $h("div", XE, [
    on("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: n.id,
      "aria-checked": n.vm.checked ? "true" : "false",
      "aria-disabled": n.vm.disabled ? "true" : "false",
      "aria-labelledby": n.labelId,
      tabindex: n.tabindex,
      onClick: a[0] || (a[0] = (...p) => n.click && n.click(...p)),
      onBlur: a[1] || (a[1] = (...p) => n.blur && n.blur(...p)),
      "data-ref-id": "feather-radio"
    }, [
      on("div", LE, [
        qE,
        n.vm.disabled ? OE("", !0) : (Xl(), QE(h, {
          key: 0,
          center: ""
        }))
      ]),
      on("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: n.labelId
      }, [
        ep(n.$slots, "default", {}, void 0, !0)
      ], 8, KE)
    ], 40, _E)
  ]);
}
var yi = /* @__PURE__ */ tp(PE, [["render", $E], ["__scopeId", "data-v-24790cf0"]]);
const eF = Lh(pi({}, ms), {
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
}), tF = {
  "update:modelValue": (n) => !0,
  blur: (n) => !0
}, nF = qh({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: eF,
  emits: tF,
  setup(n, a) {
    Vs(n);
    const r = Sl(n, "error"), l = Sl(n, "modelValue"), s = Lr(() => ve("feather-input-description")), f = Lr(() => {
      const h = Lh(pi({}, a.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return h["aria-invalid"] || (h["aria-invalid"] = !!r.value), h;
    });
    return pi(pi({
      descriptionId: s,
      attrs: f
    }, yh(l, a.emit, n.label, n.schema, Sl(n, "error"))), ps(a.attrs));
  },
  components: {
    InputSubText: fs
  }
}), rF = ["for"], aF = ["id"];
function iF(n, a, r, l, s, f) {
  const h = Kh("InputSubText");
  return Xl(), $h("div", Pf(n.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: n.vertical }]
  }), [
    on("label", {
      for: n.groupId,
      class: "group-label"
    }, YE(n.label), 9, rF),
    on("div", Pf(n.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: n.groupId,
      onKeydown: a[0] || (a[0] = (...p) => n.keydown && n.keydown(...p))
    }), [
      ep(n.$slots, "default", {}, void 0, !0)
    ], 16, aF),
    IE(h, { id: n.descriptionId }, null, 8, ["id"])
  ], 16);
}
var np = /* @__PURE__ */ tp(nF, [["render", iF], ["__scopeId", "data-v-6775aeb9"]]);
const oF = window.Vue.openBlock, lF = window.Vue.createElementBlock, sF = window.Vue.createStaticVNode;
var cF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const uF = {}, dF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fF = /* @__PURE__ */ sF('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), hF = [
  fF
];
function pF(n, a) {
  return oF(), lF("svg", dF, hF);
}
var mF = /* @__PURE__ */ cF(uF, [["render", pF]]);
const VF = window.Vue.openBlock, TF = window.Vue.createElementBlock, vF = window.Vue.createStaticVNode;
var wF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const UF = {}, RF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NF = /* @__PURE__ */ vF('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), MF = [
  NF
];
function gF(n, a) {
  return VF(), TF("svg", RF, MF);
}
var ZF = /* @__PURE__ */ wF(UF, [["render", gF]]);
const JF = window.Vue.openBlock, kF = window.Vue.createElementBlock, yF = window.Vue.createElementVNode;
var bF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const EF = {}, FF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, SF = /* @__PURE__ */ yF("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), WF = [
  SF
];
function AF(n, a) {
  return JF(), kF("svg", FF, WF);
}
var xF = /* @__PURE__ */ bF(EF, [["render", AF]]);
const BF = window.Vue.openBlock, CF = window.Vue.createElementBlock, DF = window.Vue.createStaticVNode;
var QF = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const OF = {}, zF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GF = /* @__PURE__ */ DF('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), YF = [
  GF
];
function IF(n, a) {
  return BF(), CF("svg", zF, YF);
}
var HF = /* @__PURE__ */ QF(OF, [["render", IF]]);
const PF = window.Vue.openBlock, jF = window.Vue.createElementBlock, XF = window.Vue.createElementVNode;
var _F = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const LF = {}, qF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KF = /* @__PURE__ */ XF("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), $F = [
  KF
];
function eS(n, a) {
  return PF(), jF("svg", qF, $F);
}
var tS = /* @__PURE__ */ _F(LF, [["render", eS]]);
const rp = () => window.VRouter || Ns, nS = window.Vue.defineComponent, Te = window.Vue.createElementVNode, ea = window.Vue.createTextVNode, Ge = window.Vue.unref, Gt = window.Vue.createVNode, oi = window.Vue.withCtx, jf = window.Vue.openBlock, Xf = window.Vue.createElementBlock, rS = window.Vue.createCommentVNode, aS = window.Vue.pushScopeId, iS = window.Vue.popScopeId, Mt = (n) => (aS("data-v-0fd6b0cd"), n = n(), iS(), n), oS = { class: "container" }, lS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", { class: "title" }, "ALEC", -1)), sS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", { class: "description" }, [
  /* @__PURE__ */ ea(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Te("br"),
  /* @__PURE__ */ Te("strong", null, "Our goal"),
  /* @__PURE__ */ ea(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), cS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("h3", null, "Key Benefits:", -1)), uS = { class: "list" }, dS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), fS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, "Assist in root cause analysis.", -1)), hS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), pS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, "Easy configuration.", -1)), mS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), VS = {
  key: 0,
  class: "optin"
}, TS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("h3", null, "Enable ALEC for more precise results:", -1)), vS = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), wS = { class: "choices" }, US = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), RS = /* @__PURE__ */ ea("Yes"), NS = /* @__PURE__ */ ea("No"), MS = /* @__PURE__ */ ea(" Continue "), gS = window.Vue.ref, ZS = /* @__PURE__ */ nS({
  __name: "WelcomePage",
  setup(n) {
    const a = aa(), r = rp(), l = gS(!0), s = () => {
      const f = Boolean(l.value);
      a.savePermission(f), f ? r.push({ name: "configuration" }) : r.push({ name: "situations" });
    };
    return (f, h) => (jf(), Xf("div", oS, [
      lS,
      sS,
      Te("div", null, [
        cS,
        Te("div", uS, [
          Te("div", null, [
            Gt(Ge(Le), {
              icon: Ge(HF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            dS
          ]),
          Te("div", null, [
            Gt(Ge(Le), {
              icon: Ge(xF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            fS
          ]),
          Te("div", null, [
            Gt(Ge(Le), {
              icon: Ge(tS),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            hS
          ]),
          Te("div", null, [
            Gt(Ge(Le), {
              icon: Ge(mF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            pS
          ]),
          Te("div", null, [
            Gt(Ge(Le), {
              icon: Ge(ZF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            mS
          ])
        ])
      ]),
      Ge(a).isAdmin ? (jf(), Xf("div", VS, [
        TS,
        vS,
        Te("div", wS, [
          US,
          Gt(Ge(np), {
            horizontal: "",
            modelValue: l.value,
            "onUpdate:modelValue": h[0] || (h[0] = (p) => l.value = p),
            label: ""
          }, {
            default: oi(() => [
              Gt(Ge(yi), { value: !0 }, {
                default: oi(() => [
                  RS
                ]),
                _: 1
              }),
              Gt(Ge(yi), { value: !1 }, {
                default: oi(() => [
                  NS
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : rS("", !0),
      Gt(Ge(Ji), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: oi(() => [
          MS
        ]),
        _: 1
      })
    ]));
  }
});
const JS = /* @__PURE__ */ Ce(ZS, [["__scopeId", "data-v-0fd6b0cd"]]);
const kS = {}, yS = window.Vue.openBlock, bS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const ES = { class: "main" };
function FS(n, a) {
  return yS(), bS("div", ES, "Something bad is happening...");
}
const SS = /* @__PURE__ */ Ce(kS, [["render", FS], ["__scopeId", "data-v-fefffdff"]]), WS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", AS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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";
var xS = Object.defineProperty, BS = Object.defineProperties, CS = Object.getOwnPropertyDescriptors, _f = Object.getOwnPropertySymbols, DS = Object.prototype.hasOwnProperty, QS = Object.prototype.propertyIsEnumerable, Lf = (n, a, r) => a in n ? xS(n, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[a] = r, _l = (n, a) => {
  for (var r in a || (a = {}))
    DS.call(a, r) && Lf(n, r, a[r]);
  if (_f)
    for (var r of _f(a))
      QS.call(a, r) && Lf(n, r, a[r]);
  return n;
}, ap = (n, a) => BS(n, CS(a));
const ip = window.Vue.defineComponent, OS = window.Vue.inject, zS = window.Vue.resolveComponent, Wl = window.Vue.openBlock, qf = window.Vue.createElementBlock, nr = window.Vue.createElementVNode, GS = window.Vue.createBlock, Kf = window.Vue.createCommentVNode, YS = window.Vue.renderSlot, IS = window.Vue.pushScopeId, HS = window.Vue.popScopeId, Al = window.Vue.toRef, li = window.Vue.computed, PS = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var jS = (n, a) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of a)
    r[l] = s;
  return r;
};
const XS = {
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
}, _S = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  indeterminate: (n) => !0
}, LS = ip({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: _S,
  props: XS,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: OS("registerCheckbox", (a) => {
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
    FeatherRipple: kn
  }
}), qS = (n) => (IS("data-v-a7af27e2"), n = n(), HS(), n), KS = { class: "layout-container" }, $S = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], eW = { class: "checkbox hover focus" }, tW = /* @__PURE__ */ qS(() => /* @__PURE__ */ nr("div", { class: "box" }, [
  /* @__PURE__ */ nr("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ nr("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ nr("div", { class: "indeterminate" })
], -1)), nW = ["id", "for"];
function rW(n, a, r, l, s, f) {
  const h = zS("feather-ripple");
  return Wl(), qf("div", KS, [
    nr("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: a[0] || (a[0] = (...p) => n.click && n.click(...p)),
      onKeydown: a[1] || (a[1] = (...p) => n.keydown && n.keydown(...p)),
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
      nr("div", eW, [
        tW,
        n.disabled ? Kf("", !0) : (Wl(), GS(h, {
          key: 0,
          center: ""
        }))
      ]),
      n.label ? Kf("", !0) : (Wl(), qf("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: n.labelId,
        for: n.inputId
      }, [
        YS(n.$slots, "default", {}, void 0, !0)
      ], 8, nW))
    ], 40, $S)
  ]);
}
var aW = /* @__PURE__ */ jS(LS, [["render", rW], ["__scopeId", "data-v-a7af27e2"]]);
const iW = ap(_l({}, ms), {
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
ip({
  props: iW,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(n, a) {
    Vs(n);
    const r = Al(n, "error"), l = li(() => ve("feather-checkbox-group")), s = li(() => ve("feather-input-description")), f = li(() => ve("feather-input-label")), h = li(() => {
      const Z = JSON.parse(JSON.stringify(a.attrs));
      return Z["aria-invalid"] || (Z["aria-invalid"] = !!r.value), ap(_l({}, Z), {
        class: "",
        "aria-describedby": s.value
      });
    }), p = PS(l.value), { validate: T } = hs(p, Al(n, "modelValue"), n.label, n.schema, Al(n, "error"));
    return _l({
      groupId: l,
      inputId: p,
      descriptionId: s,
      labelId: f,
      attrs: h,
      validate: T,
      registerCheckbox: (Z) => {
        Z && p.value === l.value && (p.value = Z);
      }
    }, ps(a.attrs));
  },
  components: {
    InputSubText: fs
  }
});
const oW = window.Vue.defineComponent, Ze = window.Vue.createElementVNode, Ll = window.Vue.createTextVNode, nn = window.Vue.unref, Ir = window.Vue.withCtx, Hr = window.Vue.createVNode, lW = window.Vue.openBlock, sW = window.Vue.createElementBlock, cW = window.Vue.pushScopeId, uW = window.Vue.popScopeId, En = (n) => (cW("data-v-9a5b5f4e"), n = n(), uW(), n), dW = { class: "container" }, fW = /* @__PURE__ */ En(() => /* @__PURE__ */ Ze("h2", null, "Configuration", -1)), hW = /* @__PURE__ */ En(() => /* @__PURE__ */ Ze("p", null, [
  /* @__PURE__ */ Ll(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Ze("br"),
  /* @__PURE__ */ Ll(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Ze("strong", null, [
    /* @__PURE__ */ Ze("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), pW = { class: "radio-content" }, mW = /* @__PURE__ */ En(() => /* @__PURE__ */ Ze("strong", { class: "title" }, "Clustering", -1)), VW = /* @__PURE__ */ En(() => /* @__PURE__ */ Ze("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), TW = /* @__PURE__ */ En(() => /* @__PURE__ */ Ze("img", {
  class: "img",
  src: WS
}, null, -1)), vW = /* @__PURE__ */ En(() => /* @__PURE__ */ Ze("div", { class: "hellinger" }, [
  /* @__PURE__ */ Ze("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Ze("br"),
  /* @__PURE__ */ Ze("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), wW = /* @__PURE__ */ En(() => /* @__PURE__ */ Ze("div", { class: "radio-content" }, [
  /* @__PURE__ */ Ze("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Ze("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Ze("img", {
    class: "img img2",
    src: AS
  })
], -1)), UW = /* @__PURE__ */ Ll(" Continue "), $f = window.Vue.ref, RW = /* @__PURE__ */ oW({
  __name: "ConfigurationPage",
  setup(n) {
    const a = aa(), r = rp(), l = $f(!1), s = $f(Jn.ENGINE_DBSCAN), f = () => {
      Uh(a.allowSave), RR(s.value, l.value), r.push({ name: "situations" });
    };
    return (h, p) => (lW(), sW("div", dW, [
      fW,
      hW,
      Ze("div", null, [
        Hr(nn(np), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": p[1] || (p[1] = (T) => s.value = T)
        }, {
          default: Ir(() => [
            Hr(nn(yi), {
              class: "radio",
              value: nn(Jn).ENGINE_DBSCAN
            }, {
              default: Ir(() => [
                Ze("div", pW, [
                  mW,
                  VW,
                  TW,
                  Hr(nn(aW), {
                    modelValue: l.value,
                    "onUpdate:modelValue": p[0] || (p[0] = (T) => l.value = T),
                    disabled: s.value !== nn(Jn).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Ir(() => [
                      vW
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Hr(nn(yi), {
              class: "radio",
              value: nn(Jn).ENGINE_DEEP_LEARNING
            }, {
              default: Ir(() => [
                wW
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Hr(nn(Ji), {
        primary: "",
        class: "btn",
        onClick: p[2] || (p[2] = () => f())
      }, {
        default: Ir(() => [
          UW
        ]),
        _: 1
      })
    ]));
  }
});
const NW = /* @__PURE__ */ Ce(RW, [["__scopeId", "data-v-9a5b5f4e"]]), MW = window.VueRouter.createRouter, gW = window.VueRouter.createWebHistory, xl = async () => {
  const n = window.VRouter || Ns, a = aa();
  if (!a.userId) {
    const r = await a.getUserRole();
    await a.getAlecInfo(), r ? n.push({ name: "home" }) : n.push({ name: "error" });
  }
}, op = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (n) => {
      const a = window.VRouter || Ns, r = aa();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? a.push({ name: "welcome", params: n.params }) : a.push({ name: "situations", params: n.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => xl(),
    component: JS
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => xl(),
    component: NW
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => xl(),
    component: FE
  },
  {
    path: "/error",
    name: "error",
    component: SS
  }
], eh = window.VRouter;
if (eh)
  for (const n of op) {
    const { path: a, name: r, component: l, beforeEnter: s } = n;
    eh.addRoute("Plugin", {
      path: a.slice(1),
      name: r,
      component: l,
      beforeEnter: s
    });
  }
const Ns = MW({
  history: gW(),
  routes: op
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = oU;

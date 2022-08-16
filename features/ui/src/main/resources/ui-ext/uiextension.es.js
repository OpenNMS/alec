const Xe = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
}, xU = {}, BU = window.Vue.resolveComponent, CU = window.Vue.createVNode, DU = window.Vue.openBlock, QU = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const OU = { class: "main" };
function zU(n, i) {
  const r = BU("router-view");
  return DU(), QU("div", OU, [
    CU(r)
  ]);
}
const GU = /* @__PURE__ */ Xe(xU, [["render", zU], ["__scopeId", "data-v-5d32d140"]]), YU = window.Vue.defineComponent, IU = window.Vue.openBlock, HU = window.Vue.createBlock, PU = /* @__PURE__ */ YU({
  __name: "App",
  setup(n) {
    return (i, r) => (IU(), HU(GU));
  }
});
var Ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function jU(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var If = { exports: {} }, jl = { exports: {} }, Hf = function(i, r) {
  return function() {
    for (var s = new Array(arguments.length), f = 0; f < s.length; f++)
      s[f] = arguments[f];
    return i.apply(r, s);
  };
}, XU = Hf, Xl = Object.prototype.toString, _l = function(n) {
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
function pi(n) {
  return typeof n > "u";
}
function _U(n) {
  return n !== null && !pi(n) && n.constructor !== null && !pi(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
var Pf = En("ArrayBuffer");
function LU(n) {
  var i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && Pf(n.buffer), i;
}
function qU(n) {
  return typeof n == "string";
}
function KU(n) {
  return typeof n == "number";
}
function jf(n) {
  return n !== null && typeof n == "object";
}
function oi(n) {
  if (_l(n) !== "object")
    return !1;
  var i = Object.getPrototypeOf(n);
  return i === null || i === Object.prototype;
}
var $U = En("Date"), ew = En("File"), tw = En("Blob"), nw = En("FileList");
function ql(n) {
  return Xl.call(n) === "[object Function]";
}
function rw(n) {
  return jf(n) && ql(n.pipe);
}
function aw(n) {
  var i = "[object FormData]";
  return n && (typeof FormData == "function" && n instanceof FormData || Xl.call(n) === i || ql(n.toString) && n.toString() === i);
}
var iw = En("URLSearchParams");
function ow(n) {
  return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
}
function lw() {
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
    oi(n[f]) && oi(s) ? n[f] = xl(n[f], s) : oi(s) ? n[f] = xl({}, s) : Ll(s) ? n[f] = s.slice() : n[f] = s;
  }
  for (var r = 0, l = arguments.length; r < l; r++)
    Kl(arguments[r], i);
  return n;
}
function sw(n, i, r) {
  return Kl(i, function(s, f) {
    r && typeof s == "function" ? n[f] = XU(s, r) : n[f] = s;
  }), n;
}
function cw(n) {
  return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n;
}
function uw(n, i, r, l) {
  n.prototype = Object.create(i.prototype, l), n.prototype.constructor = n, r && Object.assign(n.prototype, r);
}
function dw(n, i, r) {
  var l, s, f, h = {};
  i = i || {};
  do {
    for (l = Object.getOwnPropertyNames(n), s = l.length; s-- > 0; )
      f = l[s], h[f] || (i[f] = n[f], h[f] = !0);
    n = Object.getPrototypeOf(n);
  } while (n && (!r || r(n, i)) && n !== Object.prototype);
  return i;
}
function fw(n, i, r) {
  n = String(n), (r === void 0 || r > n.length) && (r = n.length), r -= i.length;
  var l = n.indexOf(i, r);
  return l !== -1 && l === r;
}
function hw(n) {
  if (!n)
    return null;
  var i = n.length;
  if (pi(i))
    return null;
  for (var r = new Array(i); i-- > 0; )
    r[i] = n[i];
  return r;
}
var pw = function(n) {
  return function(i) {
    return n && i instanceof n;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Fe = {
  isArray: Ll,
  isArrayBuffer: Pf,
  isBuffer: _U,
  isFormData: aw,
  isArrayBufferView: LU,
  isString: qU,
  isNumber: KU,
  isObject: jf,
  isPlainObject: oi,
  isUndefined: pi,
  isDate: $U,
  isFile: ew,
  isBlob: tw,
  isFunction: ql,
  isStream: rw,
  isURLSearchParams: iw,
  isStandardBrowserEnv: lw,
  forEach: Kl,
  merge: xl,
  extend: sw,
  trim: ow,
  stripBOM: cw,
  inherits: uw,
  toFlatObject: dw,
  kindOf: _l,
  kindOfTest: En,
  endsWith: fw,
  toArray: hw,
  isTypedArray: pw,
  isFileList: nw
}, Xn = Fe;
function Lu(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Xf = function(i, r, l) {
  if (!r)
    return i;
  var s;
  if (l)
    s = l(r);
  else if (Xn.isURLSearchParams(r))
    s = r.toString();
  else {
    var f = [];
    Xn.forEach(r, function(U, Z) {
      U === null || typeof U > "u" || (Xn.isArray(U) ? Z = Z + "[]" : U = [U], Xn.forEach(U, function(k) {
        Xn.isDate(k) ? k = k.toISOString() : Xn.isObject(k) && (k = JSON.stringify(k)), f.push(Lu(Z) + "=" + Lu(k));
      }));
    }), s = f.join("&");
  }
  if (s) {
    var h = i.indexOf("#");
    h !== -1 && (i = i.slice(0, h)), i += (i.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return i;
}, mw = Fe;
function ki() {
  this.handlers = [];
}
ki.prototype.use = function(i, r, l) {
  return this.handlers.push({
    fulfilled: i,
    rejected: r,
    synchronous: l ? l.synchronous : !1,
    runWhen: l ? l.runWhen : null
  }), this.handlers.length - 1;
};
ki.prototype.eject = function(i) {
  this.handlers[i] && (this.handlers[i] = null);
};
ki.prototype.forEach = function(i) {
  mw.forEach(this.handlers, function(l) {
    l !== null && i(l);
  });
};
var Vw = ki, Tw = Fe, vw = function(i, r) {
  Tw.forEach(i, function(s, f) {
    f !== r && f.toUpperCase() === r.toUpperCase() && (i[r] = s, delete i[f]);
  });
}, _f = Fe;
function or(n, i, r, l, s) {
  Error.call(this), this.message = n, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), l && (this.request = l), s && (this.response = s);
}
_f.inherits(or, Error, {
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
var Lf = or.prototype, qf = {};
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
  qf[n] = { value: n };
});
Object.defineProperties(or, qf);
Object.defineProperty(Lf, "isAxiosError", { value: !0 });
or.from = function(n, i, r, l, s, f) {
  var h = Object.create(Lf);
  return _f.toFlatObject(n, h, function(U) {
    return U !== Error.prototype;
  }), or.call(h, n.message, i, r, l, s), h.name = n.name, f && Object.assign(h, f), h;
};
var cr = or, Kf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Rt = Fe;
function Uw(n, i) {
  i = i || new FormData();
  var r = [];
  function l(f) {
    return f === null ? "" : Rt.isDate(f) ? f.toISOString() : Rt.isArrayBuffer(f) || Rt.isTypedArray(f) ? typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function s(f, h) {
    if (Rt.isPlainObject(f) || Rt.isArray(f)) {
      if (r.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h);
      r.push(f), Rt.forEach(f, function(U, Z) {
        if (!Rt.isUndefined(U)) {
          var N = h ? h + "." + Z : Z, k;
          if (U && !h && typeof U == "object") {
            if (Rt.endsWith(Z, "{}"))
              U = JSON.stringify(U);
            else if (Rt.endsWith(Z, "[]") && (k = Rt.toArray(U))) {
              k.forEach(function(J) {
                !Rt.isUndefined(J) && i.append(N, l(J));
              });
              return;
            }
          }
          s(U, N);
        }
      }), r.pop();
    } else
      i.append(h, l(f));
  }
  return s(n), i;
}
var $f = Uw, el, qu;
function ww() {
  if (qu)
    return el;
  qu = 1;
  var n = cr;
  return el = function(r, l, s) {
    var f = s.config.validateStatus;
    !s.status || !f || f(s.status) ? r(s) : l(new n(
      "Request failed with status code " + s.status,
      [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
      s.config,
      s.request,
      s
    ));
  }, el;
}
var tl, Ku;
function Rw() {
  if (Ku)
    return tl;
  Ku = 1;
  var n = Fe;
  return tl = n.isStandardBrowserEnv() ? function() {
    return {
      write: function(l, s, f, h, m, U) {
        var Z = [];
        Z.push(l + "=" + encodeURIComponent(s)), n.isNumber(f) && Z.push("expires=" + new Date(f).toGMTString()), n.isString(h) && Z.push("path=" + h), n.isString(m) && Z.push("domain=" + m), U === !0 && Z.push("secure"), document.cookie = Z.join("; ");
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
  }(), tl;
}
var Nw = function(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}, Mw = function(i, r) {
  return r ? i.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : i;
}, gw = Nw, Zw = Mw, eh = function(i, r) {
  return i && !gw(r) ? Zw(i, r) : r;
}, nl, $u;
function Jw() {
  if ($u)
    return nl;
  $u = 1;
  var n = Fe, i = [
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
  return nl = function(l) {
    var s = {}, f, h, m;
    return l && n.forEach(l.split(`
`), function(Z) {
      if (m = Z.indexOf(":"), f = n.trim(Z.substr(0, m)).toLowerCase(), h = n.trim(Z.substr(m + 1)), f) {
        if (s[f] && i.indexOf(f) >= 0)
          return;
        f === "set-cookie" ? s[f] = (s[f] ? s[f] : []).concat([h]) : s[f] = s[f] ? s[f] + ", " + h : h;
      }
    }), s;
  }, nl;
}
var rl, ed;
function kw() {
  if (ed)
    return rl;
  ed = 1;
  var n = Fe;
  return rl = n.isStandardBrowserEnv() ? function() {
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
      var U = n.isString(m) ? f(m) : m;
      return U.protocol === s.protocol && U.host === s.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), rl;
}
var al, td;
function yi() {
  if (td)
    return al;
  td = 1;
  var n = cr, i = Fe;
  function r(l) {
    n.call(this, l == null ? "canceled" : l, n.ERR_CANCELED), this.name = "CanceledError";
  }
  return i.inherits(r, n, {
    __CANCEL__: !0
  }), al = r, al;
}
var il, nd;
function yw() {
  return nd || (nd = 1, il = function(i) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return r && r[1] || "";
  }), il;
}
var ol, rd;
function ad() {
  if (rd)
    return ol;
  rd = 1;
  var n = Fe, i = ww(), r = Rw(), l = Xf, s = eh, f = Jw(), h = kw(), m = Kf, U = cr, Z = yi(), N = yw();
  return ol = function(J) {
    return new Promise(function(W, B) {
      var C = J.data, x = J.headers, j = J.responseType, z;
      function $() {
        J.cancelToken && J.cancelToken.unsubscribe(z), J.signal && J.signal.removeEventListener("abort", z);
      }
      n.isFormData(C) && n.isStandardBrowserEnv() && delete x["Content-Type"];
      var b = new XMLHttpRequest();
      if (J.auth) {
        var ne = J.auth.username || "", q = J.auth.password ? unescape(encodeURIComponent(J.auth.password)) : "";
        x.Authorization = "Basic " + btoa(ne + ":" + q);
      }
      var X = s(J.baseURL, J.url);
      b.open(J.method.toUpperCase(), l(X, J.params, J.paramsSerializer), !0), b.timeout = J.timeout;
      function Se() {
        if (!!b) {
          var fe = "getAllResponseHeaders" in b ? f(b.getAllResponseHeaders()) : null, pe = !j || j === "text" || j === "json" ? b.responseText : b.response, Ue = {
            data: pe,
            status: b.status,
            statusText: b.statusText,
            headers: fe,
            config: J,
            request: b
          };
          i(function(Je) {
            W(Je), $();
          }, function(Je) {
            B(Je), $();
          }, Ue), b = null;
        }
      }
      if ("onloadend" in b ? b.onloadend = Se : b.onreadystatechange = function() {
        !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(Se);
      }, b.onabort = function() {
        !b || (B(new U("Request aborted", U.ECONNABORTED, J, b)), b = null);
      }, b.onerror = function() {
        B(new U("Network Error", U.ERR_NETWORK, J, b, b)), b = null;
      }, b.ontimeout = function() {
        var pe = J.timeout ? "timeout of " + J.timeout + "ms exceeded" : "timeout exceeded", Ue = J.transitional || m;
        J.timeoutErrorMessage && (pe = J.timeoutErrorMessage), B(new U(
          pe,
          Ue.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
          J,
          b
        )), b = null;
      }, n.isStandardBrowserEnv()) {
        var Ge = (J.withCredentials || h(X)) && J.xsrfCookieName ? r.read(J.xsrfCookieName) : void 0;
        Ge && (x[J.xsrfHeaderName] = Ge);
      }
      "setRequestHeader" in b && n.forEach(x, function(pe, Ue) {
        typeof C > "u" && Ue.toLowerCase() === "content-type" ? delete x[Ue] : b.setRequestHeader(Ue, pe);
      }), n.isUndefined(J.withCredentials) || (b.withCredentials = !!J.withCredentials), j && j !== "json" && (b.responseType = J.responseType), typeof J.onDownloadProgress == "function" && b.addEventListener("progress", J.onDownloadProgress), typeof J.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", J.onUploadProgress), (J.cancelToken || J.signal) && (z = function(fe) {
        !b || (B(!fe || fe && fe.type ? new Z() : fe), b.abort(), b = null);
      }, J.cancelToken && J.cancelToken.subscribe(z), J.signal && (J.signal.aborted ? z() : J.signal.addEventListener("abort", z))), C || (C = null);
      var de = N(X);
      if (de && ["http", "https", "file"].indexOf(de) === -1) {
        B(new U("Unsupported protocol " + de + ":", U.ERR_BAD_REQUEST, J));
        return;
      }
      b.send(C);
    });
  }, ol;
}
var ll, id;
function bw() {
  return id || (id = 1, ll = null), ll;
}
var ge = Fe, od = vw, ld = cr, Ew = Kf, Fw = $f, Ww = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function sd(n, i) {
  !ge.isUndefined(n) && ge.isUndefined(n["Content-Type"]) && (n["Content-Type"] = i);
}
function Sw() {
  var n;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = ad()), n;
}
function Aw(n, i, r) {
  if (ge.isString(n))
    try {
      return (i || JSON.parse)(n), ge.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (r || JSON.stringify)(n);
}
var bi = {
  transitional: Ew,
  adapter: Sw(),
  transformRequest: [function(i, r) {
    if (od(r, "Accept"), od(r, "Content-Type"), ge.isFormData(i) || ge.isArrayBuffer(i) || ge.isBuffer(i) || ge.isStream(i) || ge.isFile(i) || ge.isBlob(i))
      return i;
    if (ge.isArrayBufferView(i))
      return i.buffer;
    if (ge.isURLSearchParams(i))
      return sd(r, "application/x-www-form-urlencoded;charset=utf-8"), i.toString();
    var l = ge.isObject(i), s = r && r["Content-Type"], f;
    if ((f = ge.isFileList(i)) || l && s === "multipart/form-data") {
      var h = this.env && this.env.FormData;
      return Fw(f ? { "files[]": i } : i, h && new h());
    } else if (l || s === "application/json")
      return sd(r, "application/json"), Aw(i);
    return i;
  }],
  transformResponse: [function(i) {
    var r = this.transitional || bi.transitional, l = r && r.silentJSONParsing, s = r && r.forcedJSONParsing, f = !l && this.responseType === "json";
    if (f || s && ge.isString(i) && i.length)
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
    FormData: bw()
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
ge.forEach(["delete", "get", "head"], function(i) {
  bi.headers[i] = {};
});
ge.forEach(["post", "put", "patch"], function(i) {
  bi.headers[i] = ge.merge(Ww);
});
var $l = bi, xw = Fe, Bw = $l, Cw = function(i, r, l) {
  var s = this || Bw;
  return xw.forEach(l, function(h) {
    i = h.call(s, i, r);
  }), i;
}, sl, cd;
function th() {
  return cd || (cd = 1, sl = function(i) {
    return !!(i && i.__CANCEL__);
  }), sl;
}
var ud = Fe, cl = Cw, Dw = th(), Qw = $l, Ow = yi();
function ul(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Ow();
}
var zw = function(i) {
  ul(i), i.headers = i.headers || {}, i.data = cl.call(
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
  var r = i.adapter || Qw.adapter;
  return r(i).then(function(s) {
    return ul(i), s.data = cl.call(
      i,
      s.data,
      s.headers,
      i.transformResponse
    ), s;
  }, function(s) {
    return Dw(s) || (ul(i), s && s.response && (s.response.data = cl.call(
      i,
      s.response.data,
      s.response.headers,
      i.transformResponse
    ))), Promise.reject(s);
  });
}, tt = Fe, nh = function(i, r) {
  r = r || {};
  var l = {};
  function s(N, k) {
    return tt.isPlainObject(N) && tt.isPlainObject(k) ? tt.merge(N, k) : tt.isPlainObject(k) ? tt.merge({}, k) : tt.isArray(k) ? k.slice() : k;
  }
  function f(N) {
    if (tt.isUndefined(r[N])) {
      if (!tt.isUndefined(i[N]))
        return s(void 0, i[N]);
    } else
      return s(i[N], r[N]);
  }
  function h(N) {
    if (!tt.isUndefined(r[N]))
      return s(void 0, r[N]);
  }
  function m(N) {
    if (tt.isUndefined(r[N])) {
      if (!tt.isUndefined(i[N]))
        return s(void 0, i[N]);
    } else
      return s(void 0, r[N]);
  }
  function U(N) {
    if (N in r)
      return s(i[N], r[N]);
    if (N in i)
      return s(void 0, i[N]);
  }
  var Z = {
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
    validateStatus: U
  };
  return tt.forEach(Object.keys(i).concat(Object.keys(r)), function(k) {
    var J = Z[k] || f, F = J(k);
    tt.isUndefined(F) && J !== U || (l[k] = F);
  }), l;
}, dl, dd;
function rh() {
  return dd || (dd = 1, dl = {
    version: "0.27.2"
  }), dl;
}
var Gw = rh().version, ln = cr, es = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, i) {
  es[n] = function(l) {
    return typeof l === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
var fd = {};
es.transitional = function(i, r, l) {
  function s(f, h) {
    return "[Axios v" + Gw + "] Transitional option '" + f + "'" + h + (l ? ". " + l : "");
  }
  return function(f, h, m) {
    if (i === !1)
      throw new ln(
        s(h, " has been removed" + (r ? " in " + r : "")),
        ln.ERR_DEPRECATED
      );
    return r && !fd[h] && (fd[h] = !0, console.warn(
      s(
        h,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(f, h, m) : !0;
  };
};
function Yw(n, i, r) {
  if (typeof n != "object")
    throw new ln("options must be an object", ln.ERR_BAD_OPTION_VALUE);
  for (var l = Object.keys(n), s = l.length; s-- > 0; ) {
    var f = l[s], h = i[f];
    if (h) {
      var m = n[f], U = m === void 0 || h(m, f, n);
      if (U !== !0)
        throw new ln("option " + f + " must be " + U, ln.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ln("Unknown option " + f, ln.ERR_BAD_OPTION);
  }
}
var Iw = {
  assertOptions: Yw,
  validators: es
}, ah = Fe, Hw = Xf, hd = Vw, pd = zw, Ei = nh, Pw = eh, ih = Iw, _n = ih.validators;
function lr(n) {
  this.defaults = n, this.interceptors = {
    request: new hd(),
    response: new hd()
  };
}
lr.prototype.request = function(i, r) {
  typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = Ei(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var l = r.transitional;
  l !== void 0 && ih.assertOptions(l, {
    silentJSONParsing: _n.transitional(_n.boolean),
    forcedJSONParsing: _n.transitional(_n.boolean),
    clarifyTimeoutError: _n.transitional(_n.boolean)
  }, !1);
  var s = [], f = !0;
  this.interceptors.request.forEach(function(F) {
    typeof F.runWhen == "function" && F.runWhen(r) === !1 || (f = f && F.synchronous, s.unshift(F.fulfilled, F.rejected));
  });
  var h = [];
  this.interceptors.response.forEach(function(F) {
    h.push(F.fulfilled, F.rejected);
  });
  var m;
  if (!f) {
    var U = [pd, void 0];
    for (Array.prototype.unshift.apply(U, s), U = U.concat(h), m = Promise.resolve(r); U.length; )
      m = m.then(U.shift(), U.shift());
    return m;
  }
  for (var Z = r; s.length; ) {
    var N = s.shift(), k = s.shift();
    try {
      Z = N(Z);
    } catch (J) {
      k(J);
      break;
    }
  }
  try {
    m = pd(Z);
  } catch (J) {
    return Promise.reject(J);
  }
  for (; h.length; )
    m = m.then(h.shift(), h.shift());
  return m;
};
lr.prototype.getUri = function(i) {
  i = Ei(this.defaults, i);
  var r = Pw(i.baseURL, i.url);
  return Hw(r, i.params, i.paramsSerializer);
};
ah.forEach(["delete", "get", "head", "options"], function(i) {
  lr.prototype[i] = function(r, l) {
    return this.request(Ei(l || {}, {
      method: i,
      url: r,
      data: (l || {}).data
    }));
  };
});
ah.forEach(["post", "put", "patch"], function(i) {
  function r(l) {
    return function(f, h, m) {
      return this.request(Ei(m || {}, {
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
var jw = lr, fl, md;
function Xw() {
  if (md)
    return fl;
  md = 1;
  var n = yi();
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
      var h, m = new Promise(function(U) {
        s.subscribe(U), h = U;
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
  }, fl = i, fl;
}
var hl, Vd;
function _w() {
  return Vd || (Vd = 1, hl = function(i) {
    return function(l) {
      return i.apply(null, l);
    };
  }), hl;
}
var pl, Td;
function Lw() {
  if (Td)
    return pl;
  Td = 1;
  var n = Fe;
  return pl = function(r) {
    return n.isObject(r) && r.isAxiosError === !0;
  }, pl;
}
var vd = Fe, qw = Hf, li = jw, Kw = nh, $w = $l;
function oh(n) {
  var i = new li(n), r = qw(li.prototype.request, i);
  return vd.extend(r, li.prototype, i), vd.extend(r, i), r.create = function(s) {
    return oh(Kw(n, s));
  }, r;
}
var je = oh($w);
je.Axios = li;
je.CanceledError = yi();
je.CancelToken = Xw();
je.isCancel = th();
je.VERSION = rh().version;
je.toFormData = $f;
je.AxiosError = cr;
je.Cancel = je.CanceledError;
je.all = function(i) {
  return Promise.all(i);
};
je.spread = _w();
je.isAxiosError = Lw();
jl.exports = je;
jl.exports.default = je;
(function(n) {
  n.exports = jl.exports;
})(If);
const lh = /* @__PURE__ */ jU(If.exports), eR = lh.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), ea = lh.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
}), tR = "/alarms", nR = async () => {
  try {
    const n = await eR.get(tR);
    return n.status === 204 ? { alarm: [], totalCount: 0, count: 0, offset: 0 } : n.data;
  } catch {
    return !1;
  }
};
var ht = { exports: {} };
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
    var r, l = "4.17.21", s = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", m = "Invalid `variable` option passed into `_.template`", U = "__lodash_hash_undefined__", Z = 500, N = "__lodash_placeholder__", k = 1, J = 2, F = 4, W = 1, B = 2, C = 1, x = 2, j = 4, z = 8, $ = 16, b = 32, ne = 64, q = 128, X = 256, Se = 512, Ge = 30, de = "...", fe = 800, pe = 16, Ue = 1, ie = 2, Je = 3, ke = 1 / 0, Ce = 9007199254740991, dr = 17976931348623157e292, ia = 0 / 0, gt = 4294967295, jh = gt - 1, Xh = gt >>> 1, _h = [
      ["ary", q],
      ["bind", C],
      ["bindKey", x],
      ["curry", z],
      ["curryRight", $],
      ["flip", Se],
      ["partial", b],
      ["partialRight", ne],
      ["rearg", X]
    ], Wn = "[object Arguments]", oa = "[object Array]", Lh = "[object AsyncFunction]", fr = "[object Boolean]", hr = "[object Date]", qh = "[object DOMException]", la = "[object Error]", sa = "[object Function]", Us = "[object GeneratorFunction]", mt = "[object Map]", pr = "[object Number]", Kh = "[object Null]", Et = "[object Object]", ws = "[object Promise]", $h = "[object Proxy]", mr = "[object RegExp]", Vt = "[object Set]", Vr = "[object String]", ca = "[object Symbol]", ep = "[object Undefined]", Tr = "[object WeakMap]", tp = "[object WeakSet]", vr = "[object ArrayBuffer]", Sn = "[object DataView]", Wi = "[object Float32Array]", Si = "[object Float64Array]", Ai = "[object Int8Array]", xi = "[object Int16Array]", Bi = "[object Int32Array]", Ci = "[object Uint8Array]", Di = "[object Uint8ClampedArray]", Qi = "[object Uint16Array]", Oi = "[object Uint32Array]", np = /\b__p \+= '';/g, rp = /\b(__p \+=) '' \+/g, ap = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Rs = /&(?:amp|lt|gt|quot|#39);/g, Ns = /[&<>"']/g, ip = RegExp(Rs.source), op = RegExp(Ns.source), lp = /<%-([\s\S]+?)%>/g, sp = /<%([\s\S]+?)%>/g, Ms = /<%=([\s\S]+?)%>/g, cp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, up = /^\w*$/, dp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, zi = /[\\^$.*+?()[\]{}|]/g, fp = RegExp(zi.source), Gi = /^\s+/, hp = /\s/, pp = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, mp = /\{\n\/\* \[wrapped with (.+)\] \*/, Vp = /,? & /, Tp = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, vp = /[()=,{}\[\]\/\s]/, Up = /\\(\\)?/g, wp = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, gs = /\w*$/, Rp = /^[-+]0x[0-9a-f]+$/i, Np = /^0b[01]+$/i, Mp = /^\[object .+?Constructor\]$/, gp = /^0o[0-7]+$/i, Zp = /^(?:0|[1-9]\d*)$/, Jp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ua = /($^)/, kp = /['\n\r\u2028\u2029\\]/g, da = "\\ud800-\\udfff", yp = "\\u0300-\\u036f", bp = "\\ufe20-\\ufe2f", Ep = "\\u20d0-\\u20ff", Zs = yp + bp + Ep, Js = "\\u2700-\\u27bf", ks = "a-z\\xdf-\\xf6\\xf8-\\xff", Fp = "\\xac\\xb1\\xd7\\xf7", Wp = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Sp = "\\u2000-\\u206f", Ap = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ys = "A-Z\\xc0-\\xd6\\xd8-\\xde", bs = "\\ufe0e\\ufe0f", Es = Fp + Wp + Sp + Ap, Yi = "['\u2019]", xp = "[" + da + "]", Fs = "[" + Es + "]", fa = "[" + Zs + "]", Ws = "\\d+", Bp = "[" + Js + "]", Ss = "[" + ks + "]", As = "[^" + da + Es + Ws + Js + ks + ys + "]", Ii = "\\ud83c[\\udffb-\\udfff]", Cp = "(?:" + fa + "|" + Ii + ")", xs = "[^" + da + "]", Hi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pi = "[\\ud800-\\udbff][\\udc00-\\udfff]", An = "[" + ys + "]", Bs = "\\u200d", Cs = "(?:" + Ss + "|" + As + ")", Dp = "(?:" + An + "|" + As + ")", Ds = "(?:" + Yi + "(?:d|ll|m|re|s|t|ve))?", Qs = "(?:" + Yi + "(?:D|LL|M|RE|S|T|VE))?", Os = Cp + "?", zs = "[" + bs + "]?", Qp = "(?:" + Bs + "(?:" + [xs, Hi, Pi].join("|") + ")" + zs + Os + ")*", Op = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", zp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gs = zs + Os + Qp, Gp = "(?:" + [Bp, Hi, Pi].join("|") + ")" + Gs, Yp = "(?:" + [xs + fa + "?", fa, Hi, Pi, xp].join("|") + ")", Ip = RegExp(Yi, "g"), Hp = RegExp(fa, "g"), ji = RegExp(Ii + "(?=" + Ii + ")|" + Yp + Gs, "g"), Pp = RegExp([
      An + "?" + Ss + "+" + Ds + "(?=" + [Fs, An, "$"].join("|") + ")",
      Dp + "+" + Qs + "(?=" + [Fs, An + Cs, "$"].join("|") + ")",
      An + "?" + Cs + "+" + Ds,
      An + "+" + Qs,
      zp,
      Op,
      Ws,
      Gp
    ].join("|"), "g"), jp = RegExp("[" + Bs + da + Zs + bs + "]"), Xp = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, _p = [
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
    ], Lp = -1, se = {};
    se[Wi] = se[Si] = se[Ai] = se[xi] = se[Bi] = se[Ci] = se[Di] = se[Qi] = se[Oi] = !0, se[Wn] = se[oa] = se[vr] = se[fr] = se[Sn] = se[hr] = se[la] = se[sa] = se[mt] = se[pr] = se[Et] = se[mr] = se[Vt] = se[Vr] = se[Tr] = !1;
    var le = {};
    le[Wn] = le[oa] = le[vr] = le[Sn] = le[fr] = le[hr] = le[Wi] = le[Si] = le[Ai] = le[xi] = le[Bi] = le[mt] = le[pr] = le[Et] = le[mr] = le[Vt] = le[Vr] = le[ca] = le[Ci] = le[Di] = le[Qi] = le[Oi] = !0, le[la] = le[sa] = le[Tr] = !1;
    var qp = {
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
    }, Kp = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, $p = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, em = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, tm = parseFloat, nm = parseInt, Ys = typeof Ar == "object" && Ar && Ar.Object === Object && Ar, rm = typeof self == "object" && self && self.Object === Object && self, ye = Ys || rm || Function("return this")(), Xi = i && !i.nodeType && i, hn = Xi && !0 && n && !n.nodeType && n, Is = hn && hn.exports === Xi, _i = Is && Ys.process, at = function() {
      try {
        var T = hn && hn.require && hn.require("util").types;
        return T || _i && _i.binding && _i.binding("util");
      } catch {
      }
    }(), Hs = at && at.isArrayBuffer, Ps = at && at.isDate, js = at && at.isMap, Xs = at && at.isRegExp, _s = at && at.isSet, Ls = at && at.isTypedArray;
    function _e(T, R, w) {
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
    function am(T, R, w, S) {
      for (var G = -1, ee = T == null ? 0 : T.length; ++G < ee; ) {
        var we = T[G];
        R(S, we, w(we), T);
      }
      return S;
    }
    function it(T, R) {
      for (var w = -1, S = T == null ? 0 : T.length; ++w < S && R(T[w], w, T) !== !1; )
        ;
      return T;
    }
    function im(T, R) {
      for (var w = T == null ? 0 : T.length; w-- && R(T[w], w, T) !== !1; )
        ;
      return T;
    }
    function qs(T, R) {
      for (var w = -1, S = T == null ? 0 : T.length; ++w < S; )
        if (!R(T[w], w, T))
          return !1;
      return !0;
    }
    function jt(T, R) {
      for (var w = -1, S = T == null ? 0 : T.length, G = 0, ee = []; ++w < S; ) {
        var we = T[w];
        R(we, w, T) && (ee[G++] = we);
      }
      return ee;
    }
    function ha(T, R) {
      var w = T == null ? 0 : T.length;
      return !!w && xn(T, R, 0) > -1;
    }
    function Li(T, R, w) {
      for (var S = -1, G = T == null ? 0 : T.length; ++S < G; )
        if (w(R, T[S]))
          return !0;
      return !1;
    }
    function ce(T, R) {
      for (var w = -1, S = T == null ? 0 : T.length, G = Array(S); ++w < S; )
        G[w] = R(T[w], w, T);
      return G;
    }
    function Xt(T, R) {
      for (var w = -1, S = R.length, G = T.length; ++w < S; )
        T[G + w] = R[w];
      return T;
    }
    function qi(T, R, w, S) {
      var G = -1, ee = T == null ? 0 : T.length;
      for (S && ee && (w = T[++G]); ++G < ee; )
        w = R(w, T[G], G, T);
      return w;
    }
    function om(T, R, w, S) {
      var G = T == null ? 0 : T.length;
      for (S && G && (w = T[--G]); G--; )
        w = R(w, T[G], G, T);
      return w;
    }
    function Ki(T, R) {
      for (var w = -1, S = T == null ? 0 : T.length; ++w < S; )
        if (R(T[w], w, T))
          return !0;
      return !1;
    }
    var lm = $i("length");
    function sm(T) {
      return T.split("");
    }
    function cm(T) {
      return T.match(Tp) || [];
    }
    function Ks(T, R, w) {
      var S;
      return w(T, function(G, ee, we) {
        if (R(G, ee, we))
          return S = ee, !1;
      }), S;
    }
    function pa(T, R, w, S) {
      for (var G = T.length, ee = w + (S ? 1 : -1); S ? ee-- : ++ee < G; )
        if (R(T[ee], ee, T))
          return ee;
      return -1;
    }
    function xn(T, R, w) {
      return R === R ? Rm(T, R, w) : pa(T, $s, w);
    }
    function um(T, R, w, S) {
      for (var G = w - 1, ee = T.length; ++G < ee; )
        if (S(T[G], R))
          return G;
      return -1;
    }
    function $s(T) {
      return T !== T;
    }
    function ec(T, R) {
      var w = T == null ? 0 : T.length;
      return w ? to(T, R) / w : ia;
    }
    function $i(T) {
      return function(R) {
        return R == null ? r : R[T];
      };
    }
    function eo(T) {
      return function(R) {
        return T == null ? r : T[R];
      };
    }
    function tc(T, R, w, S, G) {
      return G(T, function(ee, we, oe) {
        w = S ? (S = !1, ee) : R(w, ee, we, oe);
      }), w;
    }
    function dm(T, R) {
      var w = T.length;
      for (T.sort(R); w--; )
        T[w] = T[w].value;
      return T;
    }
    function to(T, R) {
      for (var w, S = -1, G = T.length; ++S < G; ) {
        var ee = R(T[S]);
        ee !== r && (w = w === r ? ee : w + ee);
      }
      return w;
    }
    function no(T, R) {
      for (var w = -1, S = Array(T); ++w < T; )
        S[w] = R(w);
      return S;
    }
    function fm(T, R) {
      return ce(R, function(w) {
        return [w, T[w]];
      });
    }
    function nc(T) {
      return T && T.slice(0, oc(T) + 1).replace(Gi, "");
    }
    function Le(T) {
      return function(R) {
        return T(R);
      };
    }
    function ro(T, R) {
      return ce(R, function(w) {
        return T[w];
      });
    }
    function Ur(T, R) {
      return T.has(R);
    }
    function rc(T, R) {
      for (var w = -1, S = T.length; ++w < S && xn(R, T[w], 0) > -1; )
        ;
      return w;
    }
    function ac(T, R) {
      for (var w = T.length; w-- && xn(R, T[w], 0) > -1; )
        ;
      return w;
    }
    function hm(T, R) {
      for (var w = T.length, S = 0; w--; )
        T[w] === R && ++S;
      return S;
    }
    var pm = eo(qp), mm = eo(Kp);
    function Vm(T) {
      return "\\" + em[T];
    }
    function Tm(T, R) {
      return T == null ? r : T[R];
    }
    function Bn(T) {
      return jp.test(T);
    }
    function vm(T) {
      return Xp.test(T);
    }
    function Um(T) {
      for (var R, w = []; !(R = T.next()).done; )
        w.push(R.value);
      return w;
    }
    function ao(T) {
      var R = -1, w = Array(T.size);
      return T.forEach(function(S, G) {
        w[++R] = [G, S];
      }), w;
    }
    function ic(T, R) {
      return function(w) {
        return T(R(w));
      };
    }
    function _t(T, R) {
      for (var w = -1, S = T.length, G = 0, ee = []; ++w < S; ) {
        var we = T[w];
        (we === R || we === N) && (T[w] = N, ee[G++] = w);
      }
      return ee;
    }
    function ma(T) {
      var R = -1, w = Array(T.size);
      return T.forEach(function(S) {
        w[++R] = S;
      }), w;
    }
    function wm(T) {
      var R = -1, w = Array(T.size);
      return T.forEach(function(S) {
        w[++R] = [S, S];
      }), w;
    }
    function Rm(T, R, w) {
      for (var S = w - 1, G = T.length; ++S < G; )
        if (T[S] === R)
          return S;
      return -1;
    }
    function Nm(T, R, w) {
      for (var S = w + 1; S--; )
        if (T[S] === R)
          return S;
      return S;
    }
    function Cn(T) {
      return Bn(T) ? gm(T) : lm(T);
    }
    function Tt(T) {
      return Bn(T) ? Zm(T) : sm(T);
    }
    function oc(T) {
      for (var R = T.length; R-- && hp.test(T.charAt(R)); )
        ;
      return R;
    }
    var Mm = eo($p);
    function gm(T) {
      for (var R = ji.lastIndex = 0; ji.test(T); )
        ++R;
      return R;
    }
    function Zm(T) {
      return T.match(ji) || [];
    }
    function Jm(T) {
      return T.match(Pp) || [];
    }
    var km = function T(R) {
      R = R == null ? ye : Dn.defaults(ye.Object(), R, Dn.pick(ye, _p));
      var w = R.Array, S = R.Date, G = R.Error, ee = R.Function, we = R.Math, oe = R.Object, io = R.RegExp, ym = R.String, ot = R.TypeError, Va = w.prototype, bm = ee.prototype, Qn = oe.prototype, Ta = R["__core-js_shared__"], va = bm.toString, re = Qn.hasOwnProperty, Em = 0, lc = function() {
        var e = /[^.]+$/.exec(Ta && Ta.keys && Ta.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Ua = Qn.toString, Fm = va.call(oe), Wm = ye._, Sm = io(
        "^" + va.call(re).replace(zi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), wa = Is ? R.Buffer : r, Lt = R.Symbol, Ra = R.Uint8Array, sc = wa ? wa.allocUnsafe : r, Na = ic(oe.getPrototypeOf, oe), cc = oe.create, uc = Qn.propertyIsEnumerable, Ma = Va.splice, dc = Lt ? Lt.isConcatSpreadable : r, wr = Lt ? Lt.iterator : r, pn = Lt ? Lt.toStringTag : r, ga = function() {
        try {
          var e = Un(oe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Am = R.clearTimeout !== ye.clearTimeout && R.clearTimeout, xm = S && S.now !== ye.Date.now && S.now, Bm = R.setTimeout !== ye.setTimeout && R.setTimeout, Za = we.ceil, Ja = we.floor, oo = oe.getOwnPropertySymbols, Cm = wa ? wa.isBuffer : r, fc = R.isFinite, Dm = Va.join, Qm = ic(oe.keys, oe), Re = we.max, Ae = we.min, Om = S.now, zm = R.parseInt, hc = we.random, Gm = Va.reverse, lo = Un(R, "DataView"), Rr = Un(R, "Map"), so = Un(R, "Promise"), On = Un(R, "Set"), Nr = Un(R, "WeakMap"), Mr = Un(oe, "create"), ka = Nr && new Nr(), zn = {}, Ym = wn(lo), Im = wn(Rr), Hm = wn(so), Pm = wn(On), jm = wn(Nr), ya = Lt ? Lt.prototype : r, gr = ya ? ya.valueOf : r, pc = ya ? ya.toString : r;
      function u(e) {
        if (he(e) && !Y(e) && !(e instanceof L)) {
          if (e instanceof lt)
            return e;
          if (re.call(e, "__wrapped__"))
            return mu(e);
        }
        return new lt(e);
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
      function ba() {
      }
      function lt(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      u.templateSettings = {
        escape: lp,
        evaluate: sp,
        interpolate: Ms,
        variable: "",
        imports: {
          _: u
        }
      }, u.prototype = ba.prototype, u.prototype.constructor = u, lt.prototype = Gn(ba.prototype), lt.prototype.constructor = lt;
      function L(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = gt, this.__views__ = [];
      }
      function Xm() {
        var e = new L(this.__wrapped__);
        return e.__actions__ = Ye(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ye(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ye(this.__views__), e;
      }
      function _m() {
        if (this.__filtered__) {
          var e = new L(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Lm() {
        var e = this.__wrapped__.value(), t = this.__dir__, a = Y(e), o = t < 0, c = a ? e.length : 0, d = s1(0, c, this.__views__), p = d.start, V = d.end, v = V - p, M = o ? V : p - 1, g = this.__iteratees__, y = g.length, E = 0, A = Ae(v, this.__takeCount__);
        if (!a || !o && c == v && A == v)
          return Dc(e, this.__actions__);
        var Q = [];
        e:
          for (; v-- && E < A; ) {
            M += t;
            for (var H = -1, O = e[M]; ++H < y; ) {
              var _ = g[H], K = _.iteratee, $e = _.type, Oe = K(O);
              if ($e == ie)
                O = Oe;
              else if (!Oe) {
                if ($e == Ue)
                  continue e;
                break e;
              }
            }
            Q[E++] = O;
          }
        return Q;
      }
      L.prototype = Gn(ba.prototype), L.prototype.constructor = L;
      function mn(e) {
        var t = -1, a = e == null ? 0 : e.length;
        for (this.clear(); ++t < a; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function qm() {
        this.__data__ = Mr ? Mr(null) : {}, this.size = 0;
      }
      function Km(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function $m(e) {
        var t = this.__data__;
        if (Mr) {
          var a = t[e];
          return a === U ? r : a;
        }
        return re.call(t, e) ? t[e] : r;
      }
      function eV(e) {
        var t = this.__data__;
        return Mr ? t[e] !== r : re.call(t, e);
      }
      function tV(e, t) {
        var a = this.__data__;
        return this.size += this.has(e) ? 0 : 1, a[e] = Mr && t === r ? U : t, this;
      }
      mn.prototype.clear = qm, mn.prototype.delete = Km, mn.prototype.get = $m, mn.prototype.has = eV, mn.prototype.set = tV;
      function Ft(e) {
        var t = -1, a = e == null ? 0 : e.length;
        for (this.clear(); ++t < a; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function nV() {
        this.__data__ = [], this.size = 0;
      }
      function rV(e) {
        var t = this.__data__, a = Ea(t, e);
        if (a < 0)
          return !1;
        var o = t.length - 1;
        return a == o ? t.pop() : Ma.call(t, a, 1), --this.size, !0;
      }
      function aV(e) {
        var t = this.__data__, a = Ea(t, e);
        return a < 0 ? r : t[a][1];
      }
      function iV(e) {
        return Ea(this.__data__, e) > -1;
      }
      function oV(e, t) {
        var a = this.__data__, o = Ea(a, e);
        return o < 0 ? (++this.size, a.push([e, t])) : a[o][1] = t, this;
      }
      Ft.prototype.clear = nV, Ft.prototype.delete = rV, Ft.prototype.get = aV, Ft.prototype.has = iV, Ft.prototype.set = oV;
      function Wt(e) {
        var t = -1, a = e == null ? 0 : e.length;
        for (this.clear(); ++t < a; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function lV() {
        this.size = 0, this.__data__ = {
          hash: new mn(),
          map: new (Rr || Ft)(),
          string: new mn()
        };
      }
      function sV(e) {
        var t = Ga(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function cV(e) {
        return Ga(this, e).get(e);
      }
      function uV(e) {
        return Ga(this, e).has(e);
      }
      function dV(e, t) {
        var a = Ga(this, e), o = a.size;
        return a.set(e, t), this.size += a.size == o ? 0 : 1, this;
      }
      Wt.prototype.clear = lV, Wt.prototype.delete = sV, Wt.prototype.get = cV, Wt.prototype.has = uV, Wt.prototype.set = dV;
      function Vn(e) {
        var t = -1, a = e == null ? 0 : e.length;
        for (this.__data__ = new Wt(); ++t < a; )
          this.add(e[t]);
      }
      function fV(e) {
        return this.__data__.set(e, U), this;
      }
      function hV(e) {
        return this.__data__.has(e);
      }
      Vn.prototype.add = Vn.prototype.push = fV, Vn.prototype.has = hV;
      function vt(e) {
        var t = this.__data__ = new Ft(e);
        this.size = t.size;
      }
      function pV() {
        this.__data__ = new Ft(), this.size = 0;
      }
      function mV(e) {
        var t = this.__data__, a = t.delete(e);
        return this.size = t.size, a;
      }
      function VV(e) {
        return this.__data__.get(e);
      }
      function TV(e) {
        return this.__data__.has(e);
      }
      function vV(e, t) {
        var a = this.__data__;
        if (a instanceof Ft) {
          var o = a.__data__;
          if (!Rr || o.length < s - 1)
            return o.push([e, t]), this.size = ++a.size, this;
          a = this.__data__ = new Wt(o);
        }
        return a.set(e, t), this.size = a.size, this;
      }
      vt.prototype.clear = pV, vt.prototype.delete = mV, vt.prototype.get = VV, vt.prototype.has = TV, vt.prototype.set = vV;
      function mc(e, t) {
        var a = Y(e), o = !a && Rn(e), c = !a && !o && tn(e), d = !a && !o && !c && Pn(e), p = a || o || c || d, V = p ? no(e.length, ym) : [], v = V.length;
        for (var M in e)
          (t || re.call(e, M)) && !(p && (M == "length" || c && (M == "offset" || M == "parent") || d && (M == "buffer" || M == "byteLength" || M == "byteOffset") || Bt(M, v))) && V.push(M);
        return V;
      }
      function Vc(e) {
        var t = e.length;
        return t ? e[wo(0, t - 1)] : r;
      }
      function UV(e, t) {
        return Ya(Ye(e), Tn(t, 0, e.length));
      }
      function wV(e) {
        return Ya(Ye(e));
      }
      function co(e, t, a) {
        (a !== r && !Ut(e[t], a) || a === r && !(t in e)) && St(e, t, a);
      }
      function Zr(e, t, a) {
        var o = e[t];
        (!(re.call(e, t) && Ut(o, a)) || a === r && !(t in e)) && St(e, t, a);
      }
      function Ea(e, t) {
        for (var a = e.length; a--; )
          if (Ut(e[a][0], t))
            return a;
        return -1;
      }
      function RV(e, t, a, o) {
        return qt(e, function(c, d, p) {
          t(o, c, a(c), p);
        }), o;
      }
      function Tc(e, t) {
        return e && Jt(t, Me(t), e);
      }
      function NV(e, t) {
        return e && Jt(t, He(t), e);
      }
      function St(e, t, a) {
        t == "__proto__" && ga ? ga(e, t, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : e[t] = a;
      }
      function uo(e, t) {
        for (var a = -1, o = t.length, c = w(o), d = e == null; ++a < o; )
          c[a] = d ? r : Ho(e, t[a]);
        return c;
      }
      function Tn(e, t, a) {
        return e === e && (a !== r && (e = e <= a ? e : a), t !== r && (e = e >= t ? e : t)), e;
      }
      function st(e, t, a, o, c, d) {
        var p, V = t & k, v = t & J, M = t & F;
        if (a && (p = c ? a(e, o, c, d) : a(e)), p !== r)
          return p;
        if (!ue(e))
          return e;
        var g = Y(e);
        if (g) {
          if (p = u1(e), !V)
            return Ye(e, p);
        } else {
          var y = xe(e), E = y == sa || y == Us;
          if (tn(e))
            return zc(e, V);
          if (y == Et || y == Wn || E && !c) {
            if (p = v || E ? {} : ou(e), !V)
              return v ? $V(e, NV(p, e)) : KV(e, Tc(p, e));
          } else {
            if (!le[y])
              return c ? e : {};
            p = d1(e, y, V);
          }
        }
        d || (d = new vt());
        var A = d.get(e);
        if (A)
          return A;
        d.set(e, p), xu(e) ? e.forEach(function(O) {
          p.add(st(O, t, a, O, e, d));
        }) : Su(e) && e.forEach(function(O, _) {
          p.set(_, st(O, t, a, _, e, d));
        });
        var Q = M ? v ? Fo : Eo : v ? He : Me, H = g ? r : Q(e);
        return it(H || e, function(O, _) {
          H && (_ = O, O = e[_]), Zr(p, _, st(O, t, a, _, e, d));
        }), p;
      }
      function MV(e) {
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
          throw new ot(h);
        return Wr(function() {
          e.apply(r, a);
        }, t);
      }
      function Jr(e, t, a, o) {
        var c = -1, d = ha, p = !0, V = e.length, v = [], M = t.length;
        if (!V)
          return v;
        a && (t = ce(t, Le(a))), o ? (d = Li, p = !1) : t.length >= s && (d = Ur, p = !1, t = new Vn(t));
        e:
          for (; ++c < V; ) {
            var g = e[c], y = a == null ? g : a(g);
            if (g = o || g !== 0 ? g : 0, p && y === y) {
              for (var E = M; E--; )
                if (t[E] === y)
                  continue e;
              v.push(g);
            } else
              d(t, y, o) || v.push(g);
          }
        return v;
      }
      var qt = Pc(Zt), wc = Pc(ho, !0);
      function gV(e, t) {
        var a = !0;
        return qt(e, function(o, c, d) {
          return a = !!t(o, c, d), a;
        }), a;
      }
      function Fa(e, t, a) {
        for (var o = -1, c = e.length; ++o < c; ) {
          var d = e[o], p = t(d);
          if (p != null && (V === r ? p === p && !Ke(p) : a(p, V)))
            var V = p, v = d;
        }
        return v;
      }
      function ZV(e, t, a, o) {
        var c = e.length;
        for (a = I(a), a < 0 && (a = -a > c ? 0 : c + a), o = o === r || o > c ? c : I(o), o < 0 && (o += c), o = a > o ? 0 : Cu(o); a < o; )
          e[a++] = t;
        return e;
      }
      function Rc(e, t) {
        var a = [];
        return qt(e, function(o, c, d) {
          t(o, c, d) && a.push(o);
        }), a;
      }
      function be(e, t, a, o, c) {
        var d = -1, p = e.length;
        for (a || (a = h1), c || (c = []); ++d < p; ) {
          var V = e[d];
          t > 0 && a(V) ? t > 1 ? be(V, t - 1, a, o, c) : Xt(c, V) : o || (c[c.length] = V);
        }
        return c;
      }
      var fo = jc(), Nc = jc(!0);
      function Zt(e, t) {
        return e && fo(e, t, Me);
      }
      function ho(e, t) {
        return e && Nc(e, t, Me);
      }
      function Wa(e, t) {
        return jt(t, function(a) {
          return Ct(e[a]);
        });
      }
      function vn(e, t) {
        t = $t(t, e);
        for (var a = 0, o = t.length; e != null && a < o; )
          e = e[kt(t[a++])];
        return a && a == o ? e : r;
      }
      function Mc(e, t, a) {
        var o = t(e);
        return Y(e) ? o : Xt(o, a(e));
      }
      function De(e) {
        return e == null ? e === r ? ep : Kh : pn && pn in oe(e) ? l1(e) : w1(e);
      }
      function po(e, t) {
        return e > t;
      }
      function JV(e, t) {
        return e != null && re.call(e, t);
      }
      function kV(e, t) {
        return e != null && t in oe(e);
      }
      function yV(e, t, a) {
        return e >= Ae(t, a) && e < Re(t, a);
      }
      function mo(e, t, a) {
        for (var o = a ? Li : ha, c = e[0].length, d = e.length, p = d, V = w(d), v = 1 / 0, M = []; p--; ) {
          var g = e[p];
          p && t && (g = ce(g, Le(t))), v = Ae(g.length, v), V[p] = !a && (t || c >= 120 && g.length >= 120) ? new Vn(p && g) : r;
        }
        g = e[0];
        var y = -1, E = V[0];
        e:
          for (; ++y < c && M.length < v; ) {
            var A = g[y], Q = t ? t(A) : A;
            if (A = a || A !== 0 ? A : 0, !(E ? Ur(E, Q) : o(M, Q, a))) {
              for (p = d; --p; ) {
                var H = V[p];
                if (!(H ? Ur(H, Q) : o(e[p], Q, a)))
                  continue e;
              }
              E && E.push(Q), M.push(A);
            }
          }
        return M;
      }
      function bV(e, t, a, o) {
        return Zt(e, function(c, d, p) {
          t(o, a(c), d, p);
        }), o;
      }
      function kr(e, t, a) {
        t = $t(t, e), e = uu(e, t);
        var o = e == null ? e : e[kt(ut(t))];
        return o == null ? r : _e(o, e, a);
      }
      function gc(e) {
        return he(e) && De(e) == Wn;
      }
      function EV(e) {
        return he(e) && De(e) == vr;
      }
      function FV(e) {
        return he(e) && De(e) == hr;
      }
      function yr(e, t, a, o, c) {
        return e === t ? !0 : e == null || t == null || !he(e) && !he(t) ? e !== e && t !== t : WV(e, t, a, o, yr, c);
      }
      function WV(e, t, a, o, c, d) {
        var p = Y(e), V = Y(t), v = p ? oa : xe(e), M = V ? oa : xe(t);
        v = v == Wn ? Et : v, M = M == Wn ? Et : M;
        var g = v == Et, y = M == Et, E = v == M;
        if (E && tn(e)) {
          if (!tn(t))
            return !1;
          p = !0, g = !1;
        }
        if (E && !g)
          return d || (d = new vt()), p || Pn(e) ? ru(e, t, a, o, c, d) : i1(e, t, v, a, o, c, d);
        if (!(a & W)) {
          var A = g && re.call(e, "__wrapped__"), Q = y && re.call(t, "__wrapped__");
          if (A || Q) {
            var H = A ? e.value() : e, O = Q ? t.value() : t;
            return d || (d = new vt()), c(H, O, a, o, d);
          }
        }
        return E ? (d || (d = new vt()), o1(e, t, a, o, c, d)) : !1;
      }
      function SV(e) {
        return he(e) && xe(e) == mt;
      }
      function Vo(e, t, a, o) {
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
          var v = V[0], M = e[v], g = V[1];
          if (p && V[2]) {
            if (M === r && !(v in e))
              return !1;
          } else {
            var y = new vt();
            if (o)
              var E = o(M, g, v, e, t, y);
            if (!(E === r ? yr(g, M, W | B, o, y) : E))
              return !1;
          }
        }
        return !0;
      }
      function Zc(e) {
        if (!ue(e) || m1(e))
          return !1;
        var t = Ct(e) ? Sm : Mp;
        return t.test(wn(e));
      }
      function AV(e) {
        return he(e) && De(e) == mr;
      }
      function xV(e) {
        return he(e) && xe(e) == Vt;
      }
      function BV(e) {
        return he(e) && _a(e.length) && !!se[De(e)];
      }
      function Jc(e) {
        return typeof e == "function" ? e : e == null ? Pe : typeof e == "object" ? Y(e) ? bc(e[0], e[1]) : yc(e) : Xu(e);
      }
      function To(e) {
        if (!Fr(e))
          return Qm(e);
        var t = [];
        for (var a in oe(e))
          re.call(e, a) && a != "constructor" && t.push(a);
        return t;
      }
      function CV(e) {
        if (!ue(e))
          return U1(e);
        var t = Fr(e), a = [];
        for (var o in e)
          o == "constructor" && (t || !re.call(e, o)) || a.push(o);
        return a;
      }
      function vo(e, t) {
        return e < t;
      }
      function kc(e, t) {
        var a = -1, o = Ie(e) ? w(e.length) : [];
        return qt(e, function(c, d, p) {
          o[++a] = t(c, d, p);
        }), o;
      }
      function yc(e) {
        var t = So(e);
        return t.length == 1 && t[0][2] ? su(t[0][0], t[0][1]) : function(a) {
          return a === e || Vo(a, e, t);
        };
      }
      function bc(e, t) {
        return xo(e) && lu(t) ? su(kt(e), t) : function(a) {
          var o = Ho(a, e);
          return o === r && o === t ? Po(a, e) : yr(t, o, W | B);
        };
      }
      function Sa(e, t, a, o, c) {
        e !== t && fo(t, function(d, p) {
          if (c || (c = new vt()), ue(d))
            DV(e, t, p, a, Sa, o, c);
          else {
            var V = o ? o(Co(e, p), d, p + "", e, t, c) : r;
            V === r && (V = d), co(e, p, V);
          }
        }, He);
      }
      function DV(e, t, a, o, c, d, p) {
        var V = Co(e, a), v = Co(t, a), M = p.get(v);
        if (M) {
          co(e, a, M);
          return;
        }
        var g = d ? d(V, v, a + "", e, t, p) : r, y = g === r;
        if (y) {
          var E = Y(v), A = !E && tn(v), Q = !E && !A && Pn(v);
          g = v, E || A || Q ? Y(V) ? g = V : me(V) ? g = Ye(V) : A ? (y = !1, g = zc(v, !0)) : Q ? (y = !1, g = Gc(v, !0)) : g = [] : Sr(v) || Rn(v) ? (g = V, Rn(V) ? g = Du(V) : (!ue(V) || Ct(V)) && (g = ou(v))) : y = !1;
        }
        y && (p.set(v, g), c(g, v, o, d, p), p.delete(v)), co(e, a, g);
      }
      function Ec(e, t) {
        var a = e.length;
        if (!!a)
          return t += t < 0 ? a : 0, Bt(t, a) ? e[t] : r;
      }
      function Fc(e, t, a) {
        t.length ? t = ce(t, function(d) {
          return Y(d) ? function(p) {
            return vn(p, d.length === 1 ? d[0] : d);
          } : d;
        }) : t = [Pe];
        var o = -1;
        t = ce(t, Le(D()));
        var c = kc(e, function(d, p, V) {
          var v = ce(t, function(M) {
            return M(d);
          });
          return { criteria: v, index: ++o, value: d };
        });
        return dm(c, function(d, p) {
          return qV(d, p, a);
        });
      }
      function QV(e, t) {
        return Wc(e, t, function(a, o) {
          return Po(e, o);
        });
      }
      function Wc(e, t, a) {
        for (var o = -1, c = t.length, d = {}; ++o < c; ) {
          var p = t[o], V = vn(e, p);
          a(V, p) && br(d, $t(p, e), V);
        }
        return d;
      }
      function OV(e) {
        return function(t) {
          return vn(t, e);
        };
      }
      function Uo(e, t, a, o) {
        var c = o ? um : xn, d = -1, p = t.length, V = e;
        for (e === t && (t = Ye(t)), a && (V = ce(e, Le(a))); ++d < p; )
          for (var v = 0, M = t[d], g = a ? a(M) : M; (v = c(V, g, v, o)) > -1; )
            V !== e && Ma.call(V, v, 1), Ma.call(e, v, 1);
        return e;
      }
      function Sc(e, t) {
        for (var a = e ? t.length : 0, o = a - 1; a--; ) {
          var c = t[a];
          if (a == o || c !== d) {
            var d = c;
            Bt(c) ? Ma.call(e, c, 1) : Mo(e, c);
          }
        }
        return e;
      }
      function wo(e, t) {
        return e + Ja(hc() * (t - e + 1));
      }
      function zV(e, t, a, o) {
        for (var c = -1, d = Re(Za((t - e) / (a || 1)), 0), p = w(d); d--; )
          p[o ? d : ++c] = e, e += a;
        return p;
      }
      function Ro(e, t) {
        var a = "";
        if (!e || t < 1 || t > Ce)
          return a;
        do
          t % 2 && (a += e), t = Ja(t / 2), t && (e += e);
        while (t);
        return a;
      }
      function P(e, t) {
        return Do(cu(e, t, Pe), e + "");
      }
      function GV(e) {
        return Vc(jn(e));
      }
      function YV(e, t) {
        var a = jn(e);
        return Ya(a, Tn(t, 0, a.length));
      }
      function br(e, t, a, o) {
        if (!ue(e))
          return e;
        t = $t(t, e);
        for (var c = -1, d = t.length, p = d - 1, V = e; V != null && ++c < d; ) {
          var v = kt(t[c]), M = a;
          if (v === "__proto__" || v === "constructor" || v === "prototype")
            return e;
          if (c != p) {
            var g = V[v];
            M = o ? o(g, v, V) : r, M === r && (M = ue(g) ? g : Bt(t[c + 1]) ? [] : {});
          }
          Zr(V, v, M), V = V[v];
        }
        return e;
      }
      var Ac = ka ? function(e, t) {
        return ka.set(e, t), e;
      } : Pe, IV = ga ? function(e, t) {
        return ga(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Xo(t),
          writable: !0
        });
      } : Pe;
      function HV(e) {
        return Ya(jn(e));
      }
      function ct(e, t, a) {
        var o = -1, c = e.length;
        t < 0 && (t = -t > c ? 0 : c + t), a = a > c ? c : a, a < 0 && (a += c), c = t > a ? 0 : a - t >>> 0, t >>>= 0;
        for (var d = w(c); ++o < c; )
          d[o] = e[o + t];
        return d;
      }
      function PV(e, t) {
        var a;
        return qt(e, function(o, c, d) {
          return a = t(o, c, d), !a;
        }), !!a;
      }
      function Aa(e, t, a) {
        var o = 0, c = e == null ? o : e.length;
        if (typeof t == "number" && t === t && c <= Xh) {
          for (; o < c; ) {
            var d = o + c >>> 1, p = e[d];
            p !== null && !Ke(p) && (a ? p <= t : p < t) ? o = d + 1 : c = d;
          }
          return c;
        }
        return No(e, t, Pe, a);
      }
      function No(e, t, a, o) {
        var c = 0, d = e == null ? 0 : e.length;
        if (d === 0)
          return 0;
        t = a(t);
        for (var p = t !== t, V = t === null, v = Ke(t), M = t === r; c < d; ) {
          var g = Ja((c + d) / 2), y = a(e[g]), E = y !== r, A = y === null, Q = y === y, H = Ke(y);
          if (p)
            var O = o || Q;
          else
            M ? O = Q && (o || E) : V ? O = Q && E && (o || !A) : v ? O = Q && E && !A && (o || !H) : A || H ? O = !1 : O = o ? y <= t : y < t;
          O ? c = g + 1 : d = g;
        }
        return Ae(d, jh);
      }
      function xc(e, t) {
        for (var a = -1, o = e.length, c = 0, d = []; ++a < o; ) {
          var p = e[a], V = t ? t(p) : p;
          if (!a || !Ut(V, v)) {
            var v = V;
            d[c++] = p === 0 ? 0 : p;
          }
        }
        return d;
      }
      function Bc(e) {
        return typeof e == "number" ? e : Ke(e) ? ia : +e;
      }
      function qe(e) {
        if (typeof e == "string")
          return e;
        if (Y(e))
          return ce(e, qe) + "";
        if (Ke(e))
          return pc ? pc.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -ke ? "-0" : t;
      }
      function Kt(e, t, a) {
        var o = -1, c = ha, d = e.length, p = !0, V = [], v = V;
        if (a)
          p = !1, c = Li;
        else if (d >= s) {
          var M = t ? null : r1(e);
          if (M)
            return ma(M);
          p = !1, c = Ur, v = new Vn();
        } else
          v = t ? [] : V;
        e:
          for (; ++o < d; ) {
            var g = e[o], y = t ? t(g) : g;
            if (g = a || g !== 0 ? g : 0, p && y === y) {
              for (var E = v.length; E--; )
                if (v[E] === y)
                  continue e;
              t && v.push(y), V.push(g);
            } else
              c(v, y, a) || (v !== V && v.push(y), V.push(g));
          }
        return V;
      }
      function Mo(e, t) {
        return t = $t(t, e), e = uu(e, t), e == null || delete e[kt(ut(t))];
      }
      function Cc(e, t, a, o) {
        return br(e, t, a(vn(e, t)), o);
      }
      function xa(e, t, a, o) {
        for (var c = e.length, d = o ? c : -1; (o ? d-- : ++d < c) && t(e[d], d, e); )
          ;
        return a ? ct(e, o ? 0 : d, o ? d + 1 : c) : ct(e, o ? d + 1 : 0, o ? c : d);
      }
      function Dc(e, t) {
        var a = e;
        return a instanceof L && (a = a.value()), qi(t, function(o, c) {
          return c.func.apply(c.thisArg, Xt([o], c.args));
        }, a);
      }
      function go(e, t, a) {
        var o = e.length;
        if (o < 2)
          return o ? Kt(e[0]) : [];
        for (var c = -1, d = w(o); ++c < o; )
          for (var p = e[c], V = -1; ++V < o; )
            V != c && (d[c] = Jr(d[c] || p, e[V], t, a));
        return Kt(be(d, 1), t, a);
      }
      function Qc(e, t, a) {
        for (var o = -1, c = e.length, d = t.length, p = {}; ++o < c; ) {
          var V = o < d ? t[o] : r;
          a(p, e[o], V);
        }
        return p;
      }
      function Zo(e) {
        return me(e) ? e : [];
      }
      function Jo(e) {
        return typeof e == "function" ? e : Pe;
      }
      function $t(e, t) {
        return Y(e) ? e : xo(e, t) ? [e] : pu(te(e));
      }
      var jV = P;
      function en(e, t, a) {
        var o = e.length;
        return a = a === r ? o : a, !t && a >= o ? e : ct(e, t, a);
      }
      var Oc = Am || function(e) {
        return ye.clearTimeout(e);
      };
      function zc(e, t) {
        if (t)
          return e.slice();
        var a = e.length, o = sc ? sc(a) : new e.constructor(a);
        return e.copy(o), o;
      }
      function ko(e) {
        var t = new e.constructor(e.byteLength);
        return new Ra(t).set(new Ra(e)), t;
      }
      function XV(e, t) {
        var a = t ? ko(e.buffer) : e.buffer;
        return new e.constructor(a, e.byteOffset, e.byteLength);
      }
      function _V(e) {
        var t = new e.constructor(e.source, gs.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function LV(e) {
        return gr ? oe(gr.call(e)) : {};
      }
      function Gc(e, t) {
        var a = t ? ko(e.buffer) : e.buffer;
        return new e.constructor(a, e.byteOffset, e.length);
      }
      function Yc(e, t) {
        if (e !== t) {
          var a = e !== r, o = e === null, c = e === e, d = Ke(e), p = t !== r, V = t === null, v = t === t, M = Ke(t);
          if (!V && !M && !d && e > t || d && p && v && !V && !M || o && p && v || !a && v || !c)
            return 1;
          if (!o && !d && !M && e < t || M && a && c && !o && !d || V && a && c || !p && c || !v)
            return -1;
        }
        return 0;
      }
      function qV(e, t, a) {
        for (var o = -1, c = e.criteria, d = t.criteria, p = c.length, V = a.length; ++o < p; ) {
          var v = Yc(c[o], d[o]);
          if (v) {
            if (o >= V)
              return v;
            var M = a[o];
            return v * (M == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function Ic(e, t, a, o) {
        for (var c = -1, d = e.length, p = a.length, V = -1, v = t.length, M = Re(d - p, 0), g = w(v + M), y = !o; ++V < v; )
          g[V] = t[V];
        for (; ++c < p; )
          (y || c < d) && (g[a[c]] = e[c]);
        for (; M--; )
          g[V++] = e[c++];
        return g;
      }
      function Hc(e, t, a, o) {
        for (var c = -1, d = e.length, p = -1, V = a.length, v = -1, M = t.length, g = Re(d - V, 0), y = w(g + M), E = !o; ++c < g; )
          y[c] = e[c];
        for (var A = c; ++v < M; )
          y[A + v] = t[v];
        for (; ++p < V; )
          (E || c < d) && (y[A + a[p]] = e[c++]);
        return y;
      }
      function Ye(e, t) {
        var a = -1, o = e.length;
        for (t || (t = w(o)); ++a < o; )
          t[a] = e[a];
        return t;
      }
      function Jt(e, t, a, o) {
        var c = !a;
        a || (a = {});
        for (var d = -1, p = t.length; ++d < p; ) {
          var V = t[d], v = o ? o(a[V], e[V], V, a, e) : r;
          v === r && (v = e[V]), c ? St(a, V, v) : Zr(a, V, v);
        }
        return a;
      }
      function KV(e, t) {
        return Jt(e, Ao(e), t);
      }
      function $V(e, t) {
        return Jt(e, au(e), t);
      }
      function Ba(e, t) {
        return function(a, o) {
          var c = Y(a) ? am : RV, d = t ? t() : {};
          return c(a, e, D(o, 2), d);
        };
      }
      function Yn(e) {
        return P(function(t, a) {
          var o = -1, c = a.length, d = c > 1 ? a[c - 1] : r, p = c > 2 ? a[2] : r;
          for (d = e.length > 3 && typeof d == "function" ? (c--, d) : r, p && Qe(a[0], a[1], p) && (d = c < 3 ? r : d, c = 1), t = oe(t); ++o < c; ) {
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
          if (!Ie(a))
            return e(a, o);
          for (var c = a.length, d = t ? c : -1, p = oe(a); (t ? d-- : ++d < c) && o(p[d], d, p) !== !1; )
            ;
          return a;
        };
      }
      function jc(e) {
        return function(t, a, o) {
          for (var c = -1, d = oe(t), p = o(t), V = p.length; V--; ) {
            var v = p[e ? V : ++c];
            if (a(d[v], v, d) === !1)
              break;
          }
          return t;
        };
      }
      function e1(e, t, a) {
        var o = t & C, c = Er(e);
        function d() {
          var p = this && this !== ye && this instanceof d ? c : e;
          return p.apply(o ? a : this, arguments);
        }
        return d;
      }
      function Xc(e) {
        return function(t) {
          t = te(t);
          var a = Bn(t) ? Tt(t) : r, o = a ? a[0] : t.charAt(0), c = a ? en(a, 1).join("") : t.slice(1);
          return o[e]() + c;
        };
      }
      function In(e) {
        return function(t) {
          return qi(Pu(Hu(t).replace(Ip, "")), e, "");
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
      function t1(e, t, a) {
        var o = Er(e);
        function c() {
          for (var d = arguments.length, p = w(d), V = d, v = Hn(c); V--; )
            p[V] = arguments[V];
          var M = d < 3 && p[0] !== v && p[d - 1] !== v ? [] : _t(p, v);
          if (d -= M.length, d < a)
            return $c(
              e,
              t,
              Ca,
              c.placeholder,
              r,
              p,
              M,
              r,
              r,
              a - d
            );
          var g = this && this !== ye && this instanceof c ? o : e;
          return _e(g, this, p);
        }
        return c;
      }
      function _c(e) {
        return function(t, a, o) {
          var c = oe(t);
          if (!Ie(t)) {
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
        return xt(function(t) {
          var a = t.length, o = a, c = lt.prototype.thru;
          for (e && t.reverse(); o--; ) {
            var d = t[o];
            if (typeof d != "function")
              throw new ot(h);
            if (c && !p && za(d) == "wrapper")
              var p = new lt([], !0);
          }
          for (o = p ? o : a; ++o < a; ) {
            d = t[o];
            var V = za(d), v = V == "wrapper" ? Wo(d) : r;
            v && Bo(v[0]) && v[1] == (q | z | b | X) && !v[4].length && v[9] == 1 ? p = p[za(v[0])].apply(p, v[3]) : p = d.length == 1 && Bo(d) ? p[V]() : p.thru(d);
          }
          return function() {
            var M = arguments, g = M[0];
            if (p && M.length == 1 && Y(g))
              return p.plant(g).value();
            for (var y = 0, E = a ? t[y].apply(this, M) : g; ++y < a; )
              E = t[y].call(this, E);
            return E;
          };
        });
      }
      function Ca(e, t, a, o, c, d, p, V, v, M) {
        var g = t & q, y = t & C, E = t & x, A = t & (z | $), Q = t & Se, H = E ? r : Er(e);
        function O() {
          for (var _ = arguments.length, K = w(_), $e = _; $e--; )
            K[$e] = arguments[$e];
          if (A)
            var Oe = Hn(O), et = hm(K, Oe);
          if (o && (K = Ic(K, o, c, A)), d && (K = Hc(K, d, p, A)), _ -= et, A && _ < M) {
            var Ve = _t(K, Oe);
            return $c(
              e,
              t,
              Ca,
              O.placeholder,
              a,
              K,
              Ve,
              V,
              v,
              M - _
            );
          }
          var wt = y ? a : this, Qt = E ? wt[e] : e;
          return _ = K.length, V ? K = R1(K, V) : Q && _ > 1 && K.reverse(), g && v < _ && (K.length = v), this && this !== ye && this instanceof O && (Qt = H || Er(Qt)), Qt.apply(wt, K);
        }
        return O;
      }
      function qc(e, t) {
        return function(a, o) {
          return bV(a, e, t(o), {});
        };
      }
      function Da(e, t) {
        return function(a, o) {
          var c;
          if (a === r && o === r)
            return t;
          if (a !== r && (c = a), o !== r) {
            if (c === r)
              return o;
            typeof a == "string" || typeof o == "string" ? (a = qe(a), o = qe(o)) : (a = Bc(a), o = Bc(o)), c = e(a, o);
          }
          return c;
        };
      }
      function yo(e) {
        return xt(function(t) {
          return t = ce(t, Le(D())), P(function(a) {
            var o = this;
            return e(t, function(c) {
              return _e(c, o, a);
            });
          });
        });
      }
      function Qa(e, t) {
        t = t === r ? " " : qe(t);
        var a = t.length;
        if (a < 2)
          return a ? Ro(t, e) : t;
        var o = Ro(t, Za(e / Cn(t)));
        return Bn(t) ? en(Tt(o), 0, e).join("") : o.slice(0, e);
      }
      function n1(e, t, a, o) {
        var c = t & C, d = Er(e);
        function p() {
          for (var V = -1, v = arguments.length, M = -1, g = o.length, y = w(g + v), E = this && this !== ye && this instanceof p ? d : e; ++M < g; )
            y[M] = o[M];
          for (; v--; )
            y[M++] = arguments[++V];
          return _e(E, c ? a : this, y);
        }
        return p;
      }
      function Kc(e) {
        return function(t, a, o) {
          return o && typeof o != "number" && Qe(t, a, o) && (a = o = r), t = Dt(t), a === r ? (a = t, t = 0) : a = Dt(a), o = o === r ? t < a ? 1 : -1 : Dt(o), zV(t, a, o, e);
        };
      }
      function Oa(e) {
        return function(t, a) {
          return typeof t == "string" && typeof a == "string" || (t = dt(t), a = dt(a)), e(t, a);
        };
      }
      function $c(e, t, a, o, c, d, p, V, v, M) {
        var g = t & z, y = g ? p : r, E = g ? r : p, A = g ? d : r, Q = g ? r : d;
        t |= g ? b : ne, t &= ~(g ? ne : b), t & j || (t &= ~(C | x));
        var H = [
          e,
          t,
          c,
          A,
          y,
          Q,
          E,
          V,
          v,
          M
        ], O = a.apply(r, H);
        return Bo(e) && du(O, H), O.placeholder = o, fu(O, e, t);
      }
      function bo(e) {
        var t = we[e];
        return function(a, o) {
          if (a = dt(a), o = o == null ? 0 : Ae(I(o), 292), o && fc(a)) {
            var c = (te(a) + "e").split("e"), d = t(c[0] + "e" + (+c[1] + o));
            return c = (te(d) + "e").split("e"), +(c[0] + "e" + (+c[1] - o));
          }
          return t(a);
        };
      }
      var r1 = On && 1 / ma(new On([, -0]))[1] == ke ? function(e) {
        return new On(e);
      } : qo;
      function eu(e) {
        return function(t) {
          var a = xe(t);
          return a == mt ? ao(t) : a == Vt ? wm(t) : fm(t, e(t));
        };
      }
      function At(e, t, a, o, c, d, p, V) {
        var v = t & x;
        if (!v && typeof e != "function")
          throw new ot(h);
        var M = o ? o.length : 0;
        if (M || (t &= ~(b | ne), o = c = r), p = p === r ? p : Re(I(p), 0), V = V === r ? V : I(V), M -= c ? c.length : 0, t & ne) {
          var g = o, y = c;
          o = c = r;
        }
        var E = v ? r : Wo(e), A = [
          e,
          t,
          a,
          o,
          c,
          g,
          y,
          d,
          p,
          V
        ];
        if (E && v1(A, E), e = A[0], t = A[1], a = A[2], o = A[3], c = A[4], V = A[9] = A[9] === r ? v ? 0 : e.length : Re(A[9] - M, 0), !V && t & (z | $) && (t &= ~(z | $)), !t || t == C)
          var Q = e1(e, t, a);
        else
          t == z || t == $ ? Q = t1(e, t, V) : (t == b || t == (C | b)) && !c.length ? Q = n1(e, t, a, o) : Q = Ca.apply(r, A);
        var H = E ? Ac : du;
        return fu(H(Q, A), e, t);
      }
      function tu(e, t, a, o) {
        return e === r || Ut(e, Qn[a]) && !re.call(o, a) ? t : e;
      }
      function nu(e, t, a, o, c, d) {
        return ue(e) && ue(t) && (d.set(t, e), Sa(e, t, r, nu, d), d.delete(t)), e;
      }
      function a1(e) {
        return Sr(e) ? r : e;
      }
      function ru(e, t, a, o, c, d) {
        var p = a & W, V = e.length, v = t.length;
        if (V != v && !(p && v > V))
          return !1;
        var M = d.get(e), g = d.get(t);
        if (M && g)
          return M == t && g == e;
        var y = -1, E = !0, A = a & B ? new Vn() : r;
        for (d.set(e, t), d.set(t, e); ++y < V; ) {
          var Q = e[y], H = t[y];
          if (o)
            var O = p ? o(H, Q, y, t, e, d) : o(Q, H, y, e, t, d);
          if (O !== r) {
            if (O)
              continue;
            E = !1;
            break;
          }
          if (A) {
            if (!Ki(t, function(_, K) {
              if (!Ur(A, K) && (Q === _ || c(Q, _, a, o, d)))
                return A.push(K);
            })) {
              E = !1;
              break;
            }
          } else if (!(Q === H || c(Q, H, a, o, d))) {
            E = !1;
            break;
          }
        }
        return d.delete(e), d.delete(t), E;
      }
      function i1(e, t, a, o, c, d, p) {
        switch (a) {
          case Sn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case vr:
            return !(e.byteLength != t.byteLength || !d(new Ra(e), new Ra(t)));
          case fr:
          case hr:
          case pr:
            return Ut(+e, +t);
          case la:
            return e.name == t.name && e.message == t.message;
          case mr:
          case Vr:
            return e == t + "";
          case mt:
            var V = ao;
          case Vt:
            var v = o & W;
            if (V || (V = ma), e.size != t.size && !v)
              return !1;
            var M = p.get(e);
            if (M)
              return M == t;
            o |= B, p.set(e, t);
            var g = ru(V(e), V(t), o, c, d, p);
            return p.delete(e), g;
          case ca:
            if (gr)
              return gr.call(e) == gr.call(t);
        }
        return !1;
      }
      function o1(e, t, a, o, c, d) {
        var p = a & W, V = Eo(e), v = V.length, M = Eo(t), g = M.length;
        if (v != g && !p)
          return !1;
        for (var y = v; y--; ) {
          var E = V[y];
          if (!(p ? E in t : re.call(t, E)))
            return !1;
        }
        var A = d.get(e), Q = d.get(t);
        if (A && Q)
          return A == t && Q == e;
        var H = !0;
        d.set(e, t), d.set(t, e);
        for (var O = p; ++y < v; ) {
          E = V[y];
          var _ = e[E], K = t[E];
          if (o)
            var $e = p ? o(K, _, E, t, e, d) : o(_, K, E, e, t, d);
          if (!($e === r ? _ === K || c(_, K, a, o, d) : $e)) {
            H = !1;
            break;
          }
          O || (O = E == "constructor");
        }
        if (H && !O) {
          var Oe = e.constructor, et = t.constructor;
          Oe != et && "constructor" in e && "constructor" in t && !(typeof Oe == "function" && Oe instanceof Oe && typeof et == "function" && et instanceof et) && (H = !1);
        }
        return d.delete(e), d.delete(t), H;
      }
      function xt(e) {
        return Do(cu(e, r, vu), e + "");
      }
      function Eo(e) {
        return Mc(e, Me, Ao);
      }
      function Fo(e) {
        return Mc(e, He, au);
      }
      var Wo = ka ? function(e) {
        return ka.get(e);
      } : qo;
      function za(e) {
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
        var e = u.iteratee || _o;
        return e = e === _o ? Jc : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Ga(e, t) {
        var a = e.__data__;
        return p1(t) ? a[typeof t == "string" ? "string" : "hash"] : a.map;
      }
      function So(e) {
        for (var t = Me(e), a = t.length; a--; ) {
          var o = t[a], c = e[o];
          t[a] = [o, c, lu(c)];
        }
        return t;
      }
      function Un(e, t) {
        var a = Tm(e, t);
        return Zc(a) ? a : r;
      }
      function l1(e) {
        var t = re.call(e, pn), a = e[pn];
        try {
          e[pn] = r;
          var o = !0;
        } catch {
        }
        var c = Ua.call(e);
        return o && (t ? e[pn] = a : delete e[pn]), c;
      }
      var Ao = oo ? function(e) {
        return e == null ? [] : (e = oe(e), jt(oo(e), function(t) {
          return uc.call(e, t);
        }));
      } : Ko, au = oo ? function(e) {
        for (var t = []; e; )
          Xt(t, Ao(e)), e = Na(e);
        return t;
      } : Ko, xe = De;
      (lo && xe(new lo(new ArrayBuffer(1))) != Sn || Rr && xe(new Rr()) != mt || so && xe(so.resolve()) != ws || On && xe(new On()) != Vt || Nr && xe(new Nr()) != Tr) && (xe = function(e) {
        var t = De(e), a = t == Et ? e.constructor : r, o = a ? wn(a) : "";
        if (o)
          switch (o) {
            case Ym:
              return Sn;
            case Im:
              return mt;
            case Hm:
              return ws;
            case Pm:
              return Vt;
            case jm:
              return Tr;
          }
        return t;
      });
      function s1(e, t, a) {
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
              t = Ae(t, e + p);
              break;
            case "takeRight":
              e = Re(e, t - p);
              break;
          }
        }
        return { start: e, end: t };
      }
      function c1(e) {
        var t = e.match(mp);
        return t ? t[1].split(Vp) : [];
      }
      function iu(e, t, a) {
        t = $t(t, e);
        for (var o = -1, c = t.length, d = !1; ++o < c; ) {
          var p = kt(t[o]);
          if (!(d = e != null && a(e, p)))
            break;
          e = e[p];
        }
        return d || ++o != c ? d : (c = e == null ? 0 : e.length, !!c && _a(c) && Bt(p, c) && (Y(e) || Rn(e)));
      }
      function u1(e) {
        var t = e.length, a = new e.constructor(t);
        return t && typeof e[0] == "string" && re.call(e, "index") && (a.index = e.index, a.input = e.input), a;
      }
      function ou(e) {
        return typeof e.constructor == "function" && !Fr(e) ? Gn(Na(e)) : {};
      }
      function d1(e, t, a) {
        var o = e.constructor;
        switch (t) {
          case vr:
            return ko(e);
          case fr:
          case hr:
            return new o(+e);
          case Sn:
            return XV(e, a);
          case Wi:
          case Si:
          case Ai:
          case xi:
          case Bi:
          case Ci:
          case Di:
          case Qi:
          case Oi:
            return Gc(e, a);
          case mt:
            return new o();
          case pr:
          case Vr:
            return new o(e);
          case mr:
            return _V(e);
          case Vt:
            return new o();
          case ca:
            return LV(e);
        }
      }
      function f1(e, t) {
        var a = t.length;
        if (!a)
          return e;
        var o = a - 1;
        return t[o] = (a > 1 ? "& " : "") + t[o], t = t.join(a > 2 ? ", " : " "), e.replace(pp, `{
/* [wrapped with ` + t + `] */
`);
      }
      function h1(e) {
        return Y(e) || Rn(e) || !!(dc && e && e[dc]);
      }
      function Bt(e, t) {
        var a = typeof e;
        return t = t == null ? Ce : t, !!t && (a == "number" || a != "symbol" && Zp.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Qe(e, t, a) {
        if (!ue(a))
          return !1;
        var o = typeof t;
        return (o == "number" ? Ie(a) && Bt(t, a.length) : o == "string" && t in a) ? Ut(a[t], e) : !1;
      }
      function xo(e, t) {
        if (Y(e))
          return !1;
        var a = typeof e;
        return a == "number" || a == "symbol" || a == "boolean" || e == null || Ke(e) ? !0 : up.test(e) || !cp.test(e) || t != null && e in oe(t);
      }
      function p1(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Bo(e) {
        var t = za(e), a = u[t];
        if (typeof a != "function" || !(t in L.prototype))
          return !1;
        if (e === a)
          return !0;
        var o = Wo(a);
        return !!o && e === o[0];
      }
      function m1(e) {
        return !!lc && lc in e;
      }
      var V1 = Ta ? Ct : $o;
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
      function T1(e) {
        var t = ja(e, function(o) {
          return a.size === Z && a.clear(), o;
        }), a = t.cache;
        return t;
      }
      function v1(e, t) {
        var a = e[1], o = t[1], c = a | o, d = c < (C | x | q), p = o == q && a == z || o == q && a == X && e[7].length <= t[8] || o == (q | X) && t[7].length <= t[8] && a == z;
        if (!(d || p))
          return e;
        o & C && (e[2] = t[2], c |= a & C ? 0 : j);
        var V = t[3];
        if (V) {
          var v = e[3];
          e[3] = v ? Ic(v, V, t[4]) : V, e[4] = v ? _t(e[3], N) : t[4];
        }
        return V = t[5], V && (v = e[5], e[5] = v ? Hc(v, V, t[6]) : V, e[6] = v ? _t(e[5], N) : t[6]), V = t[7], V && (e[7] = V), o & q && (e[8] = e[8] == null ? t[8] : Ae(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = c, e;
      }
      function U1(e) {
        var t = [];
        if (e != null)
          for (var a in oe(e))
            t.push(a);
        return t;
      }
      function w1(e) {
        return Ua.call(e);
      }
      function cu(e, t, a) {
        return t = Re(t === r ? e.length - 1 : t, 0), function() {
          for (var o = arguments, c = -1, d = Re(o.length - t, 0), p = w(d); ++c < d; )
            p[c] = o[t + c];
          c = -1;
          for (var V = w(t + 1); ++c < t; )
            V[c] = o[c];
          return V[t] = a(p), _e(e, this, V);
        };
      }
      function uu(e, t) {
        return t.length < 2 ? e : vn(e, ct(t, 0, -1));
      }
      function R1(e, t) {
        for (var a = e.length, o = Ae(t.length, a), c = Ye(e); o--; ) {
          var d = t[o];
          e[o] = Bt(d, a) ? c[d] : r;
        }
        return e;
      }
      function Co(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var du = hu(Ac), Wr = Bm || function(e, t) {
        return ye.setTimeout(e, t);
      }, Do = hu(IV);
      function fu(e, t, a) {
        var o = t + "";
        return Do(e, f1(o, N1(c1(o), a)));
      }
      function hu(e) {
        var t = 0, a = 0;
        return function() {
          var o = Om(), c = pe - (o - a);
          if (a = o, c > 0) {
            if (++t >= fe)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function Ya(e, t) {
        var a = -1, o = e.length, c = o - 1;
        for (t = t === r ? o : t; ++a < t; ) {
          var d = wo(a, c), p = e[d];
          e[d] = e[a], e[a] = p;
        }
        return e.length = t, e;
      }
      var pu = T1(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(dp, function(a, o, c, d) {
          t.push(c ? d.replace(Up, "$1") : o || a);
        }), t;
      });
      function kt(e) {
        if (typeof e == "string" || Ke(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -ke ? "-0" : t;
      }
      function wn(e) {
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
      function N1(e, t) {
        return it(_h, function(a) {
          var o = "_." + a[0];
          t & a[1] && !ha(e, o) && e.push(o);
        }), e.sort();
      }
      function mu(e) {
        if (e instanceof L)
          return e.clone();
        var t = new lt(e.__wrapped__, e.__chain__);
        return t.__actions__ = Ye(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function M1(e, t, a) {
        (a ? Qe(e, t, a) : t === r) ? t = 1 : t = Re(I(t), 0);
        var o = e == null ? 0 : e.length;
        if (!o || t < 1)
          return [];
        for (var c = 0, d = 0, p = w(Za(o / t)); c < o; )
          p[d++] = ct(e, c, c += t);
        return p;
      }
      function g1(e) {
        for (var t = -1, a = e == null ? 0 : e.length, o = 0, c = []; ++t < a; ) {
          var d = e[t];
          d && (c[o++] = d);
        }
        return c;
      }
      function Z1() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = w(e - 1), a = arguments[0], o = e; o--; )
          t[o - 1] = arguments[o];
        return Xt(Y(a) ? Ye(a) : [a], be(t, 1));
      }
      var J1 = P(function(e, t) {
        return me(e) ? Jr(e, be(t, 1, me, !0)) : [];
      }), k1 = P(function(e, t) {
        var a = ut(t);
        return me(a) && (a = r), me(e) ? Jr(e, be(t, 1, me, !0), D(a, 2)) : [];
      }), y1 = P(function(e, t) {
        var a = ut(t);
        return me(a) && (a = r), me(e) ? Jr(e, be(t, 1, me, !0), r, a) : [];
      });
      function b1(e, t, a) {
        var o = e == null ? 0 : e.length;
        return o ? (t = a || t === r ? 1 : I(t), ct(e, t < 0 ? 0 : t, o)) : [];
      }
      function E1(e, t, a) {
        var o = e == null ? 0 : e.length;
        return o ? (t = a || t === r ? 1 : I(t), t = o - t, ct(e, 0, t < 0 ? 0 : t)) : [];
      }
      function F1(e, t) {
        return e && e.length ? xa(e, D(t, 3), !0, !0) : [];
      }
      function W1(e, t) {
        return e && e.length ? xa(e, D(t, 3), !0) : [];
      }
      function S1(e, t, a, o) {
        var c = e == null ? 0 : e.length;
        return c ? (a && typeof a != "number" && Qe(e, t, a) && (a = 0, o = c), ZV(e, t, a, o)) : [];
      }
      function Vu(e, t, a) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = a == null ? 0 : I(a);
        return c < 0 && (c = Re(o + c, 0)), pa(e, D(t, 3), c);
      }
      function Tu(e, t, a) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o - 1;
        return a !== r && (c = I(a), c = a < 0 ? Re(o + c, 0) : Ae(c, o - 1)), pa(e, D(t, 3), c, !0);
      }
      function vu(e) {
        var t = e == null ? 0 : e.length;
        return t ? be(e, 1) : [];
      }
      function A1(e) {
        var t = e == null ? 0 : e.length;
        return t ? be(e, ke) : [];
      }
      function x1(e, t) {
        var a = e == null ? 0 : e.length;
        return a ? (t = t === r ? 1 : I(t), be(e, t)) : [];
      }
      function B1(e) {
        for (var t = -1, a = e == null ? 0 : e.length, o = {}; ++t < a; ) {
          var c = e[t];
          o[c[0]] = c[1];
        }
        return o;
      }
      function Uu(e) {
        return e && e.length ? e[0] : r;
      }
      function C1(e, t, a) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = a == null ? 0 : I(a);
        return c < 0 && (c = Re(o + c, 0)), xn(e, t, c);
      }
      function D1(e) {
        var t = e == null ? 0 : e.length;
        return t ? ct(e, 0, -1) : [];
      }
      var Q1 = P(function(e) {
        var t = ce(e, Zo);
        return t.length && t[0] === e[0] ? mo(t) : [];
      }), O1 = P(function(e) {
        var t = ut(e), a = ce(e, Zo);
        return t === ut(a) ? t = r : a.pop(), a.length && a[0] === e[0] ? mo(a, D(t, 2)) : [];
      }), z1 = P(function(e) {
        var t = ut(e), a = ce(e, Zo);
        return t = typeof t == "function" ? t : r, t && a.pop(), a.length && a[0] === e[0] ? mo(a, r, t) : [];
      });
      function G1(e, t) {
        return e == null ? "" : Dm.call(e, t);
      }
      function ut(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function Y1(e, t, a) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var c = o;
        return a !== r && (c = I(a), c = c < 0 ? Re(o + c, 0) : Ae(c, o - 1)), t === t ? Nm(e, t, c) : pa(e, $s, c, !0);
      }
      function I1(e, t) {
        return e && e.length ? Ec(e, I(t)) : r;
      }
      var H1 = P(wu);
      function wu(e, t) {
        return e && e.length && t && t.length ? Uo(e, t) : e;
      }
      function P1(e, t, a) {
        return e && e.length && t && t.length ? Uo(e, t, D(a, 2)) : e;
      }
      function j1(e, t, a) {
        return e && e.length && t && t.length ? Uo(e, t, r, a) : e;
      }
      var X1 = xt(function(e, t) {
        var a = e == null ? 0 : e.length, o = uo(e, t);
        return Sc(e, ce(t, function(c) {
          return Bt(c, a) ? +c : c;
        }).sort(Yc)), o;
      });
      function _1(e, t) {
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
      function Qo(e) {
        return e == null ? e : Gm.call(e);
      }
      function L1(e, t, a) {
        var o = e == null ? 0 : e.length;
        return o ? (a && typeof a != "number" && Qe(e, t, a) ? (t = 0, a = o) : (t = t == null ? 0 : I(t), a = a === r ? o : I(a)), ct(e, t, a)) : [];
      }
      function q1(e, t) {
        return Aa(e, t);
      }
      function K1(e, t, a) {
        return No(e, t, D(a, 2));
      }
      function $1(e, t) {
        var a = e == null ? 0 : e.length;
        if (a) {
          var o = Aa(e, t);
          if (o < a && Ut(e[o], t))
            return o;
        }
        return -1;
      }
      function e0(e, t) {
        return Aa(e, t, !0);
      }
      function t0(e, t, a) {
        return No(e, t, D(a, 2), !0);
      }
      function n0(e, t) {
        var a = e == null ? 0 : e.length;
        if (a) {
          var o = Aa(e, t, !0) - 1;
          if (Ut(e[o], t))
            return o;
        }
        return -1;
      }
      function r0(e) {
        return e && e.length ? xc(e) : [];
      }
      function a0(e, t) {
        return e && e.length ? xc(e, D(t, 2)) : [];
      }
      function i0(e) {
        var t = e == null ? 0 : e.length;
        return t ? ct(e, 1, t) : [];
      }
      function o0(e, t, a) {
        return e && e.length ? (t = a || t === r ? 1 : I(t), ct(e, 0, t < 0 ? 0 : t)) : [];
      }
      function l0(e, t, a) {
        var o = e == null ? 0 : e.length;
        return o ? (t = a || t === r ? 1 : I(t), t = o - t, ct(e, t < 0 ? 0 : t, o)) : [];
      }
      function s0(e, t) {
        return e && e.length ? xa(e, D(t, 3), !1, !0) : [];
      }
      function c0(e, t) {
        return e && e.length ? xa(e, D(t, 3)) : [];
      }
      var u0 = P(function(e) {
        return Kt(be(e, 1, me, !0));
      }), d0 = P(function(e) {
        var t = ut(e);
        return me(t) && (t = r), Kt(be(e, 1, me, !0), D(t, 2));
      }), f0 = P(function(e) {
        var t = ut(e);
        return t = typeof t == "function" ? t : r, Kt(be(e, 1, me, !0), r, t);
      });
      function h0(e) {
        return e && e.length ? Kt(e) : [];
      }
      function p0(e, t) {
        return e && e.length ? Kt(e, D(t, 2)) : [];
      }
      function m0(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? Kt(e, r, t) : [];
      }
      function Oo(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = jt(e, function(a) {
          if (me(a))
            return t = Re(a.length, t), !0;
        }), no(t, function(a) {
          return ce(e, $i(a));
        });
      }
      function Ru(e, t) {
        if (!(e && e.length))
          return [];
        var a = Oo(e);
        return t == null ? a : ce(a, function(o) {
          return _e(t, r, o);
        });
      }
      var V0 = P(function(e, t) {
        return me(e) ? Jr(e, t) : [];
      }), T0 = P(function(e) {
        return go(jt(e, me));
      }), v0 = P(function(e) {
        var t = ut(e);
        return me(t) && (t = r), go(jt(e, me), D(t, 2));
      }), U0 = P(function(e) {
        var t = ut(e);
        return t = typeof t == "function" ? t : r, go(jt(e, me), r, t);
      }), w0 = P(Oo);
      function R0(e, t) {
        return Qc(e || [], t || [], Zr);
      }
      function N0(e, t) {
        return Qc(e || [], t || [], br);
      }
      var M0 = P(function(e) {
        var t = e.length, a = t > 1 ? e[t - 1] : r;
        return a = typeof a == "function" ? (e.pop(), a) : r, Ru(e, a);
      });
      function Nu(e) {
        var t = u(e);
        return t.__chain__ = !0, t;
      }
      function g0(e, t) {
        return t(e), e;
      }
      function Ia(e, t) {
        return t(e);
      }
      var Z0 = xt(function(e) {
        var t = e.length, a = t ? e[0] : 0, o = this.__wrapped__, c = function(d) {
          return uo(d, e);
        };
        return t > 1 || this.__actions__.length || !(o instanceof L) || !Bt(a) ? this.thru(c) : (o = o.slice(a, +a + (t ? 1 : 0)), o.__actions__.push({
          func: Ia,
          args: [c],
          thisArg: r
        }), new lt(o, this.__chain__).thru(function(d) {
          return t && !d.length && d.push(r), d;
        }));
      });
      function J0() {
        return Nu(this);
      }
      function k0() {
        return new lt(this.value(), this.__chain__);
      }
      function y0() {
        this.__values__ === r && (this.__values__ = Bu(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function b0() {
        return this;
      }
      function E0(e) {
        for (var t, a = this; a instanceof ba; ) {
          var o = mu(a);
          o.__index__ = 0, o.__values__ = r, t ? c.__wrapped__ = o : t = o;
          var c = o;
          a = a.__wrapped__;
        }
        return c.__wrapped__ = e, t;
      }
      function F0() {
        var e = this.__wrapped__;
        if (e instanceof L) {
          var t = e;
          return this.__actions__.length && (t = new L(this)), t = t.reverse(), t.__actions__.push({
            func: Ia,
            args: [Qo],
            thisArg: r
          }), new lt(t, this.__chain__);
        }
        return this.thru(Qo);
      }
      function W0() {
        return Dc(this.__wrapped__, this.__actions__);
      }
      var S0 = Ba(function(e, t, a) {
        re.call(e, a) ? ++e[a] : St(e, a, 1);
      });
      function A0(e, t, a) {
        var o = Y(e) ? qs : gV;
        return a && Qe(e, t, a) && (t = r), o(e, D(t, 3));
      }
      function x0(e, t) {
        var a = Y(e) ? jt : Rc;
        return a(e, D(t, 3));
      }
      var B0 = _c(Vu), C0 = _c(Tu);
      function D0(e, t) {
        return be(Ha(e, t), 1);
      }
      function Q0(e, t) {
        return be(Ha(e, t), ke);
      }
      function O0(e, t, a) {
        return a = a === r ? 1 : I(a), be(Ha(e, t), a);
      }
      function Mu(e, t) {
        var a = Y(e) ? it : qt;
        return a(e, D(t, 3));
      }
      function gu(e, t) {
        var a = Y(e) ? im : wc;
        return a(e, D(t, 3));
      }
      var z0 = Ba(function(e, t, a) {
        re.call(e, a) ? e[a].push(t) : St(e, a, [t]);
      });
      function G0(e, t, a, o) {
        e = Ie(e) ? e : jn(e), a = a && !o ? I(a) : 0;
        var c = e.length;
        return a < 0 && (a = Re(c + a, 0)), La(e) ? a <= c && e.indexOf(t, a) > -1 : !!c && xn(e, t, a) > -1;
      }
      var Y0 = P(function(e, t, a) {
        var o = -1, c = typeof t == "function", d = Ie(e) ? w(e.length) : [];
        return qt(e, function(p) {
          d[++o] = c ? _e(t, p, a) : kr(p, t, a);
        }), d;
      }), I0 = Ba(function(e, t, a) {
        St(e, a, t);
      });
      function Ha(e, t) {
        var a = Y(e) ? ce : kc;
        return a(e, D(t, 3));
      }
      function H0(e, t, a, o) {
        return e == null ? [] : (Y(t) || (t = t == null ? [] : [t]), a = o ? r : a, Y(a) || (a = a == null ? [] : [a]), Fc(e, t, a));
      }
      var P0 = Ba(function(e, t, a) {
        e[a ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function j0(e, t, a) {
        var o = Y(e) ? qi : tc, c = arguments.length < 3;
        return o(e, D(t, 4), a, c, qt);
      }
      function X0(e, t, a) {
        var o = Y(e) ? om : tc, c = arguments.length < 3;
        return o(e, D(t, 4), a, c, wc);
      }
      function _0(e, t) {
        var a = Y(e) ? jt : Rc;
        return a(e, Xa(D(t, 3)));
      }
      function L0(e) {
        var t = Y(e) ? Vc : GV;
        return t(e);
      }
      function q0(e, t, a) {
        (a ? Qe(e, t, a) : t === r) ? t = 1 : t = I(t);
        var o = Y(e) ? UV : YV;
        return o(e, t);
      }
      function K0(e) {
        var t = Y(e) ? wV : HV;
        return t(e);
      }
      function $0(e) {
        if (e == null)
          return 0;
        if (Ie(e))
          return La(e) ? Cn(e) : e.length;
        var t = xe(e);
        return t == mt || t == Vt ? e.size : To(e).length;
      }
      function eT(e, t, a) {
        var o = Y(e) ? Ki : PV;
        return a && Qe(e, t, a) && (t = r), o(e, D(t, 3));
      }
      var tT = P(function(e, t) {
        if (e == null)
          return [];
        var a = t.length;
        return a > 1 && Qe(e, t[0], t[1]) ? t = [] : a > 2 && Qe(t[0], t[1], t[2]) && (t = [t[0]]), Fc(e, be(t, 1), []);
      }), Pa = xm || function() {
        return ye.Date.now();
      };
      function nT(e, t) {
        if (typeof t != "function")
          throw new ot(h);
        return e = I(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Zu(e, t, a) {
        return t = a ? r : t, t = e && t == null ? e.length : t, At(e, q, r, r, r, r, t);
      }
      function Ju(e, t) {
        var a;
        if (typeof t != "function")
          throw new ot(h);
        return e = I(e), function() {
          return --e > 0 && (a = t.apply(this, arguments)), e <= 1 && (t = r), a;
        };
      }
      var zo = P(function(e, t, a) {
        var o = C;
        if (a.length) {
          var c = _t(a, Hn(zo));
          o |= b;
        }
        return At(e, o, t, a, c);
      }), ku = P(function(e, t, a) {
        var o = C | x;
        if (a.length) {
          var c = _t(a, Hn(ku));
          o |= b;
        }
        return At(t, o, e, a, c);
      });
      function yu(e, t, a) {
        t = a ? r : t;
        var o = At(e, z, r, r, r, r, r, t);
        return o.placeholder = yu.placeholder, o;
      }
      function bu(e, t, a) {
        t = a ? r : t;
        var o = At(e, $, r, r, r, r, r, t);
        return o.placeholder = bu.placeholder, o;
      }
      function Eu(e, t, a) {
        var o, c, d, p, V, v, M = 0, g = !1, y = !1, E = !0;
        if (typeof e != "function")
          throw new ot(h);
        t = dt(t) || 0, ue(a) && (g = !!a.leading, y = "maxWait" in a, d = y ? Re(dt(a.maxWait) || 0, t) : d, E = "trailing" in a ? !!a.trailing : E);
        function A(Ve) {
          var wt = o, Qt = c;
          return o = c = r, M = Ve, p = e.apply(Qt, wt), p;
        }
        function Q(Ve) {
          return M = Ve, V = Wr(_, t), g ? A(Ve) : p;
        }
        function H(Ve) {
          var wt = Ve - v, Qt = Ve - M, _u = t - wt;
          return y ? Ae(_u, d - Qt) : _u;
        }
        function O(Ve) {
          var wt = Ve - v, Qt = Ve - M;
          return v === r || wt >= t || wt < 0 || y && Qt >= d;
        }
        function _() {
          var Ve = Pa();
          if (O(Ve))
            return K(Ve);
          V = Wr(_, H(Ve));
        }
        function K(Ve) {
          return V = r, E && o ? A(Ve) : (o = c = r, p);
        }
        function $e() {
          V !== r && Oc(V), M = 0, o = v = c = V = r;
        }
        function Oe() {
          return V === r ? p : K(Pa());
        }
        function et() {
          var Ve = Pa(), wt = O(Ve);
          if (o = arguments, c = this, v = Ve, wt) {
            if (V === r)
              return Q(v);
            if (y)
              return Oc(V), V = Wr(_, t), A(v);
          }
          return V === r && (V = Wr(_, t)), p;
        }
        return et.cancel = $e, et.flush = Oe, et;
      }
      var rT = P(function(e, t) {
        return Uc(e, 1, t);
      }), aT = P(function(e, t, a) {
        return Uc(e, dt(t) || 0, a);
      });
      function iT(e) {
        return At(e, Se);
      }
      function ja(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new ot(h);
        var a = function() {
          var o = arguments, c = t ? t.apply(this, o) : o[0], d = a.cache;
          if (d.has(c))
            return d.get(c);
          var p = e.apply(this, o);
          return a.cache = d.set(c, p) || d, p;
        };
        return a.cache = new (ja.Cache || Wt)(), a;
      }
      ja.Cache = Wt;
      function Xa(e) {
        if (typeof e != "function")
          throw new ot(h);
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
      function oT(e) {
        return Ju(2, e);
      }
      var lT = jV(function(e, t) {
        t = t.length == 1 && Y(t[0]) ? ce(t[0], Le(D())) : ce(be(t, 1), Le(D()));
        var a = t.length;
        return P(function(o) {
          for (var c = -1, d = Ae(o.length, a); ++c < d; )
            o[c] = t[c].call(this, o[c]);
          return _e(e, this, o);
        });
      }), Go = P(function(e, t) {
        var a = _t(t, Hn(Go));
        return At(e, b, r, t, a);
      }), Fu = P(function(e, t) {
        var a = _t(t, Hn(Fu));
        return At(e, ne, r, t, a);
      }), sT = xt(function(e, t) {
        return At(e, X, r, r, r, t);
      });
      function cT(e, t) {
        if (typeof e != "function")
          throw new ot(h);
        return t = t === r ? t : I(t), P(e, t);
      }
      function uT(e, t) {
        if (typeof e != "function")
          throw new ot(h);
        return t = t == null ? 0 : Re(I(t), 0), P(function(a) {
          var o = a[t], c = en(a, 0, t);
          return o && Xt(c, o), _e(e, this, c);
        });
      }
      function dT(e, t, a) {
        var o = !0, c = !0;
        if (typeof e != "function")
          throw new ot(h);
        return ue(a) && (o = "leading" in a ? !!a.leading : o, c = "trailing" in a ? !!a.trailing : c), Eu(e, t, {
          leading: o,
          maxWait: t,
          trailing: c
        });
      }
      function fT(e) {
        return Zu(e, 1);
      }
      function hT(e, t) {
        return Go(Jo(t), e);
      }
      function pT() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return Y(e) ? e : [e];
      }
      function mT(e) {
        return st(e, F);
      }
      function VT(e, t) {
        return t = typeof t == "function" ? t : r, st(e, F, t);
      }
      function TT(e) {
        return st(e, k | F);
      }
      function vT(e, t) {
        return t = typeof t == "function" ? t : r, st(e, k | F, t);
      }
      function UT(e, t) {
        return t == null || vc(e, t, Me(t));
      }
      function Ut(e, t) {
        return e === t || e !== e && t !== t;
      }
      var wT = Oa(po), RT = Oa(function(e, t) {
        return e >= t;
      }), Rn = gc(function() {
        return arguments;
      }()) ? gc : function(e) {
        return he(e) && re.call(e, "callee") && !uc.call(e, "callee");
      }, Y = w.isArray, NT = Hs ? Le(Hs) : EV;
      function Ie(e) {
        return e != null && _a(e.length) && !Ct(e);
      }
      function me(e) {
        return he(e) && Ie(e);
      }
      function MT(e) {
        return e === !0 || e === !1 || he(e) && De(e) == fr;
      }
      var tn = Cm || $o, gT = Ps ? Le(Ps) : FV;
      function ZT(e) {
        return he(e) && e.nodeType === 1 && !Sr(e);
      }
      function JT(e) {
        if (e == null)
          return !0;
        if (Ie(e) && (Y(e) || typeof e == "string" || typeof e.splice == "function" || tn(e) || Pn(e) || Rn(e)))
          return !e.length;
        var t = xe(e);
        if (t == mt || t == Vt)
          return !e.size;
        if (Fr(e))
          return !To(e).length;
        for (var a in e)
          if (re.call(e, a))
            return !1;
        return !0;
      }
      function kT(e, t) {
        return yr(e, t);
      }
      function yT(e, t, a) {
        a = typeof a == "function" ? a : r;
        var o = a ? a(e, t) : r;
        return o === r ? yr(e, t, r, a) : !!o;
      }
      function Yo(e) {
        if (!he(e))
          return !1;
        var t = De(e);
        return t == la || t == qh || typeof e.message == "string" && typeof e.name == "string" && !Sr(e);
      }
      function bT(e) {
        return typeof e == "number" && fc(e);
      }
      function Ct(e) {
        if (!ue(e))
          return !1;
        var t = De(e);
        return t == sa || t == Us || t == Lh || t == $h;
      }
      function Wu(e) {
        return typeof e == "number" && e == I(e);
      }
      function _a(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ce;
      }
      function ue(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function he(e) {
        return e != null && typeof e == "object";
      }
      var Su = js ? Le(js) : SV;
      function ET(e, t) {
        return e === t || Vo(e, t, So(t));
      }
      function FT(e, t, a) {
        return a = typeof a == "function" ? a : r, Vo(e, t, So(t), a);
      }
      function WT(e) {
        return Au(e) && e != +e;
      }
      function ST(e) {
        if (V1(e))
          throw new G(f);
        return Zc(e);
      }
      function AT(e) {
        return e === null;
      }
      function xT(e) {
        return e == null;
      }
      function Au(e) {
        return typeof e == "number" || he(e) && De(e) == pr;
      }
      function Sr(e) {
        if (!he(e) || De(e) != Et)
          return !1;
        var t = Na(e);
        if (t === null)
          return !0;
        var a = re.call(t, "constructor") && t.constructor;
        return typeof a == "function" && a instanceof a && va.call(a) == Fm;
      }
      var Io = Xs ? Le(Xs) : AV;
      function BT(e) {
        return Wu(e) && e >= -Ce && e <= Ce;
      }
      var xu = _s ? Le(_s) : xV;
      function La(e) {
        return typeof e == "string" || !Y(e) && he(e) && De(e) == Vr;
      }
      function Ke(e) {
        return typeof e == "symbol" || he(e) && De(e) == ca;
      }
      var Pn = Ls ? Le(Ls) : BV;
      function CT(e) {
        return e === r;
      }
      function DT(e) {
        return he(e) && xe(e) == Tr;
      }
      function QT(e) {
        return he(e) && De(e) == tp;
      }
      var OT = Oa(vo), zT = Oa(function(e, t) {
        return e <= t;
      });
      function Bu(e) {
        if (!e)
          return [];
        if (Ie(e))
          return La(e) ? Tt(e) : Ye(e);
        if (wr && e[wr])
          return Um(e[wr]());
        var t = xe(e), a = t == mt ? ao : t == Vt ? ma : jn;
        return a(e);
      }
      function Dt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = dt(e), e === ke || e === -ke) {
          var t = e < 0 ? -1 : 1;
          return t * dr;
        }
        return e === e ? e : 0;
      }
      function I(e) {
        var t = Dt(e), a = t % 1;
        return t === t ? a ? t - a : t : 0;
      }
      function Cu(e) {
        return e ? Tn(I(e), 0, gt) : 0;
      }
      function dt(e) {
        if (typeof e == "number")
          return e;
        if (Ke(e))
          return ia;
        if (ue(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ue(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = nc(e);
        var a = Np.test(e);
        return a || gp.test(e) ? nm(e.slice(2), a ? 2 : 8) : Rp.test(e) ? ia : +e;
      }
      function Du(e) {
        return Jt(e, He(e));
      }
      function GT(e) {
        return e ? Tn(I(e), -Ce, Ce) : e === 0 ? e : 0;
      }
      function te(e) {
        return e == null ? "" : qe(e);
      }
      var YT = Yn(function(e, t) {
        if (Fr(t) || Ie(t)) {
          Jt(t, Me(t), e);
          return;
        }
        for (var a in t)
          re.call(t, a) && Zr(e, a, t[a]);
      }), Qu = Yn(function(e, t) {
        Jt(t, He(t), e);
      }), qa = Yn(function(e, t, a, o) {
        Jt(t, He(t), e, o);
      }), IT = Yn(function(e, t, a, o) {
        Jt(t, Me(t), e, o);
      }), HT = xt(uo);
      function PT(e, t) {
        var a = Gn(e);
        return t == null ? a : Tc(a, t);
      }
      var jT = P(function(e, t) {
        e = oe(e);
        var a = -1, o = t.length, c = o > 2 ? t[2] : r;
        for (c && Qe(t[0], t[1], c) && (o = 1); ++a < o; )
          for (var d = t[a], p = He(d), V = -1, v = p.length; ++V < v; ) {
            var M = p[V], g = e[M];
            (g === r || Ut(g, Qn[M]) && !re.call(e, M)) && (e[M] = d[M]);
          }
        return e;
      }), XT = P(function(e) {
        return e.push(r, nu), _e(Ou, r, e);
      });
      function _T(e, t) {
        return Ks(e, D(t, 3), Zt);
      }
      function LT(e, t) {
        return Ks(e, D(t, 3), ho);
      }
      function qT(e, t) {
        return e == null ? e : fo(e, D(t, 3), He);
      }
      function KT(e, t) {
        return e == null ? e : Nc(e, D(t, 3), He);
      }
      function $T(e, t) {
        return e && Zt(e, D(t, 3));
      }
      function ev(e, t) {
        return e && ho(e, D(t, 3));
      }
      function tv(e) {
        return e == null ? [] : Wa(e, Me(e));
      }
      function nv(e) {
        return e == null ? [] : Wa(e, He(e));
      }
      function Ho(e, t, a) {
        var o = e == null ? r : vn(e, t);
        return o === r ? a : o;
      }
      function rv(e, t) {
        return e != null && iu(e, t, JV);
      }
      function Po(e, t) {
        return e != null && iu(e, t, kV);
      }
      var av = qc(function(e, t, a) {
        t != null && typeof t.toString != "function" && (t = Ua.call(t)), e[t] = a;
      }, Xo(Pe)), iv = qc(function(e, t, a) {
        t != null && typeof t.toString != "function" && (t = Ua.call(t)), re.call(e, t) ? e[t].push(a) : e[t] = [a];
      }, D), ov = P(kr);
      function Me(e) {
        return Ie(e) ? mc(e) : To(e);
      }
      function He(e) {
        return Ie(e) ? mc(e, !0) : CV(e);
      }
      function lv(e, t) {
        var a = {};
        return t = D(t, 3), Zt(e, function(o, c, d) {
          St(a, t(o, c, d), o);
        }), a;
      }
      function sv(e, t) {
        var a = {};
        return t = D(t, 3), Zt(e, function(o, c, d) {
          St(a, c, t(o, c, d));
        }), a;
      }
      var cv = Yn(function(e, t, a) {
        Sa(e, t, a);
      }), Ou = Yn(function(e, t, a, o) {
        Sa(e, t, a, o);
      }), uv = xt(function(e, t) {
        var a = {};
        if (e == null)
          return a;
        var o = !1;
        t = ce(t, function(d) {
          return d = $t(d, e), o || (o = d.length > 1), d;
        }), Jt(e, Fo(e), a), o && (a = st(a, k | J | F, a1));
        for (var c = t.length; c--; )
          Mo(a, t[c]);
        return a;
      });
      function dv(e, t) {
        return zu(e, Xa(D(t)));
      }
      var fv = xt(function(e, t) {
        return e == null ? {} : QV(e, t);
      });
      function zu(e, t) {
        if (e == null)
          return {};
        var a = ce(Fo(e), function(o) {
          return [o];
        });
        return t = D(t), Wc(e, a, function(o, c) {
          return t(o, c[0]);
        });
      }
      function hv(e, t, a) {
        t = $t(t, e);
        var o = -1, c = t.length;
        for (c || (c = 1, e = r); ++o < c; ) {
          var d = e == null ? r : e[kt(t[o])];
          d === r && (o = c, d = a), e = Ct(d) ? d.call(e) : d;
        }
        return e;
      }
      function pv(e, t, a) {
        return e == null ? e : br(e, t, a);
      }
      function mv(e, t, a, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : br(e, t, a, o);
      }
      var Gu = eu(Me), Yu = eu(He);
      function Vv(e, t, a) {
        var o = Y(e), c = o || tn(e) || Pn(e);
        if (t = D(t, 4), a == null) {
          var d = e && e.constructor;
          c ? a = o ? new d() : [] : ue(e) ? a = Ct(d) ? Gn(Na(e)) : {} : a = {};
        }
        return (c ? it : Zt)(e, function(p, V, v) {
          return t(a, p, V, v);
        }), a;
      }
      function Tv(e, t) {
        return e == null ? !0 : Mo(e, t);
      }
      function vv(e, t, a) {
        return e == null ? e : Cc(e, t, Jo(a));
      }
      function Uv(e, t, a, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : Cc(e, t, Jo(a), o);
      }
      function jn(e) {
        return e == null ? [] : ro(e, Me(e));
      }
      function wv(e) {
        return e == null ? [] : ro(e, He(e));
      }
      function Rv(e, t, a) {
        return a === r && (a = t, t = r), a !== r && (a = dt(a), a = a === a ? a : 0), t !== r && (t = dt(t), t = t === t ? t : 0), Tn(dt(e), t, a);
      }
      function Nv(e, t, a) {
        return t = Dt(t), a === r ? (a = t, t = 0) : a = Dt(a), e = dt(e), yV(e, t, a);
      }
      function Mv(e, t, a) {
        if (a && typeof a != "boolean" && Qe(e, t, a) && (t = a = r), a === r && (typeof t == "boolean" ? (a = t, t = r) : typeof e == "boolean" && (a = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Dt(e), t === r ? (t = e, e = 0) : t = Dt(t)), e > t) {
          var o = e;
          e = t, t = o;
        }
        if (a || e % 1 || t % 1) {
          var c = hc();
          return Ae(e + c * (t - e + tm("1e-" + ((c + "").length - 1))), t);
        }
        return wo(e, t);
      }
      var gv = In(function(e, t, a) {
        return t = t.toLowerCase(), e + (a ? Iu(t) : t);
      });
      function Iu(e) {
        return jo(te(e).toLowerCase());
      }
      function Hu(e) {
        return e = te(e), e && e.replace(Jp, pm).replace(Hp, "");
      }
      function Zv(e, t, a) {
        e = te(e), t = qe(t);
        var o = e.length;
        a = a === r ? o : Tn(I(a), 0, o);
        var c = a;
        return a -= t.length, a >= 0 && e.slice(a, c) == t;
      }
      function Jv(e) {
        return e = te(e), e && op.test(e) ? e.replace(Ns, mm) : e;
      }
      function kv(e) {
        return e = te(e), e && fp.test(e) ? e.replace(zi, "\\$&") : e;
      }
      var yv = In(function(e, t, a) {
        return e + (a ? "-" : "") + t.toLowerCase();
      }), bv = In(function(e, t, a) {
        return e + (a ? " " : "") + t.toLowerCase();
      }), Ev = Xc("toLowerCase");
      function Fv(e, t, a) {
        e = te(e), t = I(t);
        var o = t ? Cn(e) : 0;
        if (!t || o >= t)
          return e;
        var c = (t - o) / 2;
        return Qa(Ja(c), a) + e + Qa(Za(c), a);
      }
      function Wv(e, t, a) {
        e = te(e), t = I(t);
        var o = t ? Cn(e) : 0;
        return t && o < t ? e + Qa(t - o, a) : e;
      }
      function Sv(e, t, a) {
        e = te(e), t = I(t);
        var o = t ? Cn(e) : 0;
        return t && o < t ? Qa(t - o, a) + e : e;
      }
      function Av(e, t, a) {
        return a || t == null ? t = 0 : t && (t = +t), zm(te(e).replace(Gi, ""), t || 0);
      }
      function xv(e, t, a) {
        return (a ? Qe(e, t, a) : t === r) ? t = 1 : t = I(t), Ro(te(e), t);
      }
      function Bv() {
        var e = arguments, t = te(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Cv = In(function(e, t, a) {
        return e + (a ? "_" : "") + t.toLowerCase();
      });
      function Dv(e, t, a) {
        return a && typeof a != "number" && Qe(e, t, a) && (t = a = r), a = a === r ? gt : a >>> 0, a ? (e = te(e), e && (typeof t == "string" || t != null && !Io(t)) && (t = qe(t), !t && Bn(e)) ? en(Tt(e), 0, a) : e.split(t, a)) : [];
      }
      var Qv = In(function(e, t, a) {
        return e + (a ? " " : "") + jo(t);
      });
      function Ov(e, t, a) {
        return e = te(e), a = a == null ? 0 : Tn(I(a), 0, e.length), t = qe(t), e.slice(a, a + t.length) == t;
      }
      function zv(e, t, a) {
        var o = u.templateSettings;
        a && Qe(e, t, a) && (t = r), e = te(e), t = qa({}, t, o, tu);
        var c = qa({}, t.imports, o.imports, tu), d = Me(c), p = ro(c, d), V, v, M = 0, g = t.interpolate || ua, y = "__p += '", E = io(
          (t.escape || ua).source + "|" + g.source + "|" + (g === Ms ? wp : ua).source + "|" + (t.evaluate || ua).source + "|$",
          "g"
        ), A = "//# sourceURL=" + (re.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Lp + "]") + `
`;
        e.replace(E, function(O, _, K, $e, Oe, et) {
          return K || (K = $e), y += e.slice(M, et).replace(kp, Vm), _ && (V = !0, y += `' +
__e(` + _ + `) +
'`), Oe && (v = !0, y += `';
` + Oe + `;
__p += '`), K && (y += `' +
((__t = (` + K + `)) == null ? '' : __t) +
'`), M = et + O.length, O;
        }), y += `';
`;
        var Q = re.call(t, "variable") && t.variable;
        if (!Q)
          y = `with (obj) {
` + y + `
}
`;
        else if (vp.test(Q))
          throw new G(m);
        y = (v ? y.replace(np, "") : y).replace(rp, "$1").replace(ap, "$1;"), y = "function(" + (Q || "obj") + `) {
` + (Q ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (V ? ", __e = _.escape" : "") + (v ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + y + `return __p
}`;
        var H = ju(function() {
          return ee(d, A + "return " + y).apply(r, p);
        });
        if (H.source = y, Yo(H))
          throw H;
        return H;
      }
      function Gv(e) {
        return te(e).toLowerCase();
      }
      function Yv(e) {
        return te(e).toUpperCase();
      }
      function Iv(e, t, a) {
        if (e = te(e), e && (a || t === r))
          return nc(e);
        if (!e || !(t = qe(t)))
          return e;
        var o = Tt(e), c = Tt(t), d = rc(o, c), p = ac(o, c) + 1;
        return en(o, d, p).join("");
      }
      function Hv(e, t, a) {
        if (e = te(e), e && (a || t === r))
          return e.slice(0, oc(e) + 1);
        if (!e || !(t = qe(t)))
          return e;
        var o = Tt(e), c = ac(o, Tt(t)) + 1;
        return en(o, 0, c).join("");
      }
      function Pv(e, t, a) {
        if (e = te(e), e && (a || t === r))
          return e.replace(Gi, "");
        if (!e || !(t = qe(t)))
          return e;
        var o = Tt(e), c = rc(o, Tt(t));
        return en(o, c).join("");
      }
      function jv(e, t) {
        var a = Ge, o = de;
        if (ue(t)) {
          var c = "separator" in t ? t.separator : c;
          a = "length" in t ? I(t.length) : a, o = "omission" in t ? qe(t.omission) : o;
        }
        e = te(e);
        var d = e.length;
        if (Bn(e)) {
          var p = Tt(e);
          d = p.length;
        }
        if (a >= d)
          return e;
        var V = a - Cn(o);
        if (V < 1)
          return o;
        var v = p ? en(p, 0, V).join("") : e.slice(0, V);
        if (c === r)
          return v + o;
        if (p && (V += v.length - V), Io(c)) {
          if (e.slice(V).search(c)) {
            var M, g = v;
            for (c.global || (c = io(c.source, te(gs.exec(c)) + "g")), c.lastIndex = 0; M = c.exec(g); )
              var y = M.index;
            v = v.slice(0, y === r ? V : y);
          }
        } else if (e.indexOf(qe(c), V) != V) {
          var E = v.lastIndexOf(c);
          E > -1 && (v = v.slice(0, E));
        }
        return v + o;
      }
      function Xv(e) {
        return e = te(e), e && ip.test(e) ? e.replace(Rs, Mm) : e;
      }
      var _v = In(function(e, t, a) {
        return e + (a ? " " : "") + t.toUpperCase();
      }), jo = Xc("toUpperCase");
      function Pu(e, t, a) {
        return e = te(e), t = a ? r : t, t === r ? vm(e) ? Jm(e) : cm(e) : e.match(t) || [];
      }
      var ju = P(function(e, t) {
        try {
          return _e(e, r, t);
        } catch (a) {
          return Yo(a) ? a : new G(a);
        }
      }), Lv = xt(function(e, t) {
        return it(t, function(a) {
          a = kt(a), St(e, a, zo(e[a], e));
        }), e;
      });
      function qv(e) {
        var t = e == null ? 0 : e.length, a = D();
        return e = t ? ce(e, function(o) {
          if (typeof o[1] != "function")
            throw new ot(h);
          return [a(o[0]), o[1]];
        }) : [], P(function(o) {
          for (var c = -1; ++c < t; ) {
            var d = e[c];
            if (_e(d[0], this, o))
              return _e(d[1], this, o);
          }
        });
      }
      function Kv(e) {
        return MV(st(e, k));
      }
      function Xo(e) {
        return function() {
          return e;
        };
      }
      function $v(e, t) {
        return e == null || e !== e ? t : e;
      }
      var eU = Lc(), tU = Lc(!0);
      function Pe(e) {
        return e;
      }
      function _o(e) {
        return Jc(typeof e == "function" ? e : st(e, k));
      }
      function nU(e) {
        return yc(st(e, k));
      }
      function rU(e, t) {
        return bc(e, st(t, k));
      }
      var aU = P(function(e, t) {
        return function(a) {
          return kr(a, e, t);
        };
      }), iU = P(function(e, t) {
        return function(a) {
          return kr(e, a, t);
        };
      });
      function Lo(e, t, a) {
        var o = Me(t), c = Wa(t, o);
        a == null && !(ue(t) && (c.length || !o.length)) && (a = t, t = e, e = this, c = Wa(t, Me(t)));
        var d = !(ue(a) && "chain" in a) || !!a.chain, p = Ct(e);
        return it(c, function(V) {
          var v = t[V];
          e[V] = v, p && (e.prototype[V] = function() {
            var M = this.__chain__;
            if (d || M) {
              var g = e(this.__wrapped__), y = g.__actions__ = Ye(this.__actions__);
              return y.push({ func: v, args: arguments, thisArg: e }), g.__chain__ = M, g;
            }
            return v.apply(e, Xt([this.value()], arguments));
          });
        }), e;
      }
      function oU() {
        return ye._ === this && (ye._ = Wm), this;
      }
      function qo() {
      }
      function lU(e) {
        return e = I(e), P(function(t) {
          return Ec(t, e);
        });
      }
      var sU = yo(ce), cU = yo(qs), uU = yo(Ki);
      function Xu(e) {
        return xo(e) ? $i(kt(e)) : OV(e);
      }
      function dU(e) {
        return function(t) {
          return e == null ? r : vn(e, t);
        };
      }
      var fU = Kc(), hU = Kc(!0);
      function Ko() {
        return [];
      }
      function $o() {
        return !1;
      }
      function pU() {
        return {};
      }
      function mU() {
        return "";
      }
      function VU() {
        return !0;
      }
      function TU(e, t) {
        if (e = I(e), e < 1 || e > Ce)
          return [];
        var a = gt, o = Ae(e, gt);
        t = D(t), e -= gt;
        for (var c = no(o, t); ++a < e; )
          t(a);
        return c;
      }
      function vU(e) {
        return Y(e) ? ce(e, kt) : Ke(e) ? [e] : Ye(pu(te(e)));
      }
      function UU(e) {
        var t = ++Em;
        return te(e) + t;
      }
      var wU = Da(function(e, t) {
        return e + t;
      }, 0), RU = bo("ceil"), NU = Da(function(e, t) {
        return e / t;
      }, 1), MU = bo("floor");
      function gU(e) {
        return e && e.length ? Fa(e, Pe, po) : r;
      }
      function ZU(e, t) {
        return e && e.length ? Fa(e, D(t, 2), po) : r;
      }
      function JU(e) {
        return ec(e, Pe);
      }
      function kU(e, t) {
        return ec(e, D(t, 2));
      }
      function yU(e) {
        return e && e.length ? Fa(e, Pe, vo) : r;
      }
      function bU(e, t) {
        return e && e.length ? Fa(e, D(t, 2), vo) : r;
      }
      var EU = Da(function(e, t) {
        return e * t;
      }, 1), FU = bo("round"), WU = Da(function(e, t) {
        return e - t;
      }, 0);
      function SU(e) {
        return e && e.length ? to(e, Pe) : 0;
      }
      function AU(e, t) {
        return e && e.length ? to(e, D(t, 2)) : 0;
      }
      return u.after = nT, u.ary = Zu, u.assign = YT, u.assignIn = Qu, u.assignInWith = qa, u.assignWith = IT, u.at = HT, u.before = Ju, u.bind = zo, u.bindAll = Lv, u.bindKey = ku, u.castArray = pT, u.chain = Nu, u.chunk = M1, u.compact = g1, u.concat = Z1, u.cond = qv, u.conforms = Kv, u.constant = Xo, u.countBy = S0, u.create = PT, u.curry = yu, u.curryRight = bu, u.debounce = Eu, u.defaults = jT, u.defaultsDeep = XT, u.defer = rT, u.delay = aT, u.difference = J1, u.differenceBy = k1, u.differenceWith = y1, u.drop = b1, u.dropRight = E1, u.dropRightWhile = F1, u.dropWhile = W1, u.fill = S1, u.filter = x0, u.flatMap = D0, u.flatMapDeep = Q0, u.flatMapDepth = O0, u.flatten = vu, u.flattenDeep = A1, u.flattenDepth = x1, u.flip = iT, u.flow = eU, u.flowRight = tU, u.fromPairs = B1, u.functions = tv, u.functionsIn = nv, u.groupBy = z0, u.initial = D1, u.intersection = Q1, u.intersectionBy = O1, u.intersectionWith = z1, u.invert = av, u.invertBy = iv, u.invokeMap = Y0, u.iteratee = _o, u.keyBy = I0, u.keys = Me, u.keysIn = He, u.map = Ha, u.mapKeys = lv, u.mapValues = sv, u.matches = nU, u.matchesProperty = rU, u.memoize = ja, u.merge = cv, u.mergeWith = Ou, u.method = aU, u.methodOf = iU, u.mixin = Lo, u.negate = Xa, u.nthArg = lU, u.omit = uv, u.omitBy = dv, u.once = oT, u.orderBy = H0, u.over = sU, u.overArgs = lT, u.overEvery = cU, u.overSome = uU, u.partial = Go, u.partialRight = Fu, u.partition = P0, u.pick = fv, u.pickBy = zu, u.property = Xu, u.propertyOf = dU, u.pull = H1, u.pullAll = wu, u.pullAllBy = P1, u.pullAllWith = j1, u.pullAt = X1, u.range = fU, u.rangeRight = hU, u.rearg = sT, u.reject = _0, u.remove = _1, u.rest = cT, u.reverse = Qo, u.sampleSize = q0, u.set = pv, u.setWith = mv, u.shuffle = K0, u.slice = L1, u.sortBy = tT, u.sortedUniq = r0, u.sortedUniqBy = a0, u.split = Dv, u.spread = uT, u.tail = i0, u.take = o0, u.takeRight = l0, u.takeRightWhile = s0, u.takeWhile = c0, u.tap = g0, u.throttle = dT, u.thru = Ia, u.toArray = Bu, u.toPairs = Gu, u.toPairsIn = Yu, u.toPath = vU, u.toPlainObject = Du, u.transform = Vv, u.unary = fT, u.union = u0, u.unionBy = d0, u.unionWith = f0, u.uniq = h0, u.uniqBy = p0, u.uniqWith = m0, u.unset = Tv, u.unzip = Oo, u.unzipWith = Ru, u.update = vv, u.updateWith = Uv, u.values = jn, u.valuesIn = wv, u.without = V0, u.words = Pu, u.wrap = hT, u.xor = T0, u.xorBy = v0, u.xorWith = U0, u.zip = w0, u.zipObject = R0, u.zipObjectDeep = N0, u.zipWith = M0, u.entries = Gu, u.entriesIn = Yu, u.extend = Qu, u.extendWith = qa, Lo(u, u), u.add = wU, u.attempt = ju, u.camelCase = gv, u.capitalize = Iu, u.ceil = RU, u.clamp = Rv, u.clone = mT, u.cloneDeep = TT, u.cloneDeepWith = vT, u.cloneWith = VT, u.conformsTo = UT, u.deburr = Hu, u.defaultTo = $v, u.divide = NU, u.endsWith = Zv, u.eq = Ut, u.escape = Jv, u.escapeRegExp = kv, u.every = A0, u.find = B0, u.findIndex = Vu, u.findKey = _T, u.findLast = C0, u.findLastIndex = Tu, u.findLastKey = LT, u.floor = MU, u.forEach = Mu, u.forEachRight = gu, u.forIn = qT, u.forInRight = KT, u.forOwn = $T, u.forOwnRight = ev, u.get = Ho, u.gt = wT, u.gte = RT, u.has = rv, u.hasIn = Po, u.head = Uu, u.identity = Pe, u.includes = G0, u.indexOf = C1, u.inRange = Nv, u.invoke = ov, u.isArguments = Rn, u.isArray = Y, u.isArrayBuffer = NT, u.isArrayLike = Ie, u.isArrayLikeObject = me, u.isBoolean = MT, u.isBuffer = tn, u.isDate = gT, u.isElement = ZT, u.isEmpty = JT, u.isEqual = kT, u.isEqualWith = yT, u.isError = Yo, u.isFinite = bT, u.isFunction = Ct, u.isInteger = Wu, u.isLength = _a, u.isMap = Su, u.isMatch = ET, u.isMatchWith = FT, u.isNaN = WT, u.isNative = ST, u.isNil = xT, u.isNull = AT, u.isNumber = Au, u.isObject = ue, u.isObjectLike = he, u.isPlainObject = Sr, u.isRegExp = Io, u.isSafeInteger = BT, u.isSet = xu, u.isString = La, u.isSymbol = Ke, u.isTypedArray = Pn, u.isUndefined = CT, u.isWeakMap = DT, u.isWeakSet = QT, u.join = G1, u.kebabCase = yv, u.last = ut, u.lastIndexOf = Y1, u.lowerCase = bv, u.lowerFirst = Ev, u.lt = OT, u.lte = zT, u.max = gU, u.maxBy = ZU, u.mean = JU, u.meanBy = kU, u.min = yU, u.minBy = bU, u.stubArray = Ko, u.stubFalse = $o, u.stubObject = pU, u.stubString = mU, u.stubTrue = VU, u.multiply = EU, u.nth = I1, u.noConflict = oU, u.noop = qo, u.now = Pa, u.pad = Fv, u.padEnd = Wv, u.padStart = Sv, u.parseInt = Av, u.random = Mv, u.reduce = j0, u.reduceRight = X0, u.repeat = xv, u.replace = Bv, u.result = hv, u.round = FU, u.runInContext = T, u.sample = L0, u.size = $0, u.snakeCase = Cv, u.some = eT, u.sortedIndex = q1, u.sortedIndexBy = K1, u.sortedIndexOf = $1, u.sortedLastIndex = e0, u.sortedLastIndexBy = t0, u.sortedLastIndexOf = n0, u.startCase = Qv, u.startsWith = Ov, u.subtract = WU, u.sum = SU, u.sumBy = AU, u.template = zv, u.times = TU, u.toFinite = Dt, u.toInteger = I, u.toLength = Cu, u.toLower = Gv, u.toNumber = dt, u.toSafeInteger = GT, u.toString = te, u.toUpper = Yv, u.trim = Iv, u.trimEnd = Hv, u.trimStart = Pv, u.truncate = jv, u.unescape = Xv, u.uniqueId = UU, u.upperCase = _v, u.upperFirst = jo, u.each = Mu, u.eachRight = gu, u.first = Uu, Lo(u, function() {
        var e = {};
        return Zt(u, function(t, a) {
          re.call(u.prototype, a) || (e[a] = t);
        }), e;
      }(), { chain: !1 }), u.VERSION = l, it(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        u[e].placeholder = u;
      }), it(["drop", "take"], function(e, t) {
        L.prototype[e] = function(a) {
          a = a === r ? 1 : Re(I(a), 0);
          var o = this.__filtered__ && !t ? new L(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = Ae(a, o.__takeCount__) : o.__views__.push({
            size: Ae(a, gt),
            type: e + (o.__dir__ < 0 ? "Right" : "")
          }), o;
        }, L.prototype[e + "Right"] = function(a) {
          return this.reverse()[e](a).reverse();
        };
      }), it(["filter", "map", "takeWhile"], function(e, t) {
        var a = t + 1, o = a == Ue || a == Je;
        L.prototype[e] = function(c) {
          var d = this.clone();
          return d.__iteratees__.push({
            iteratee: D(c, 3),
            type: a
          }), d.__filtered__ = d.__filtered__ || o, d;
        };
      }), it(["head", "last"], function(e, t) {
        var a = "take" + (t ? "Right" : "");
        L.prototype[e] = function() {
          return this[a](1).value()[0];
        };
      }), it(["initial", "tail"], function(e, t) {
        var a = "drop" + (t ? "" : "Right");
        L.prototype[e] = function() {
          return this.__filtered__ ? new L(this) : this[a](1);
        };
      }), L.prototype.compact = function() {
        return this.filter(Pe);
      }, L.prototype.find = function(e) {
        return this.filter(e).head();
      }, L.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, L.prototype.invokeMap = P(function(e, t) {
        return typeof e == "function" ? new L(this) : this.map(function(a) {
          return kr(a, e, t);
        });
      }), L.prototype.reject = function(e) {
        return this.filter(Xa(D(e)));
      }, L.prototype.slice = function(e, t) {
        e = I(e);
        var a = this;
        return a.__filtered__ && (e > 0 || t < 0) ? new L(a) : (e < 0 ? a = a.takeRight(-e) : e && (a = a.drop(e)), t !== r && (t = I(t), a = t < 0 ? a.dropRight(-t) : a.take(t - e)), a);
      }, L.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, L.prototype.toArray = function() {
        return this.take(gt);
      }, Zt(L.prototype, function(e, t) {
        var a = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), c = u[o ? "take" + (t == "last" ? "Right" : "") : t], d = o || /^find/.test(t);
        !c || (u.prototype[t] = function() {
          var p = this.__wrapped__, V = o ? [1] : arguments, v = p instanceof L, M = V[0], g = v || Y(p), y = function(_) {
            var K = c.apply(u, Xt([_], V));
            return o && E ? K[0] : K;
          };
          g && a && typeof M == "function" && M.length != 1 && (v = g = !1);
          var E = this.__chain__, A = !!this.__actions__.length, Q = d && !E, H = v && !A;
          if (!d && g) {
            p = H ? p : new L(this);
            var O = e.apply(p, V);
            return O.__actions__.push({ func: Ia, args: [y], thisArg: r }), new lt(O, E);
          }
          return Q && H ? e.apply(this, V) : (O = this.thru(y), Q ? o ? O.value()[0] : O.value() : O);
        });
      }), it(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Va[e], a = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
        u.prototype[e] = function() {
          var c = arguments;
          if (o && !this.__chain__) {
            var d = this.value();
            return t.apply(Y(d) ? d : [], c);
          }
          return this[a](function(p) {
            return t.apply(Y(p) ? p : [], c);
          });
        };
      }), Zt(L.prototype, function(e, t) {
        var a = u[t];
        if (a) {
          var o = a.name + "";
          re.call(zn, o) || (zn[o] = []), zn[o].push({ name: t, func: a });
        }
      }), zn[Ca(r, x).name] = [{
        name: "wrapper",
        func: r
      }], L.prototype.clone = Xm, L.prototype.reverse = _m, L.prototype.value = Lm, u.prototype.at = Z0, u.prototype.chain = J0, u.prototype.commit = k0, u.prototype.next = y0, u.prototype.plant = E0, u.prototype.reverse = F0, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = W0, u.prototype.first = u.prototype.head, wr && (u.prototype[wr] = b0), u;
    }, Dn = km();
    hn ? ((hn.exports = Dn)._ = Dn, Xi._ = Dn) : ye._ = Dn;
  }).call(Ar);
})(ht, ht.exports);
const rR = window.Pinia.defineStore, sh = rR("situationsStore", {
  state: () => ({
    situations: [],
    alarms: {}
  }),
  actions: {
    async getSituations() {
      const n = await nR();
      if (n) {
        this.alarms = ht.exports.mapKeys(n.alarm, (r) => r.id);
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
}), aR = window.Vue.defineComponent, iR = window.Vue.toDisplayString, oR = window.Vue.normalizeClass, lR = window.Vue.openBlock, sR = window.Vue.createElementBlock, cR = window.Vue.createCommentVNode, uR = /* @__PURE__ */ aR({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const i = n;
    return (r, l) => i != null && i.severity ? (lR(), sR("span", {
      key: 0,
      class: oR(["severity-status", [`${i.severity.toLowerCase()}-color`]])
    }, iR(i.severity), 3)) : cR("", !0);
  }
});
const ts = /* @__PURE__ */ Xe(uR, [["__scopeId", "data-v-83c2cdce"]]), dR = window.Vue.defineComponent, fR = window.Vue.unref, hR = window.Vue.renderList, pR = window.Vue.Fragment, ml = window.Vue.openBlock, Vl = window.Vue.createElementBlock, mR = window.Vue.toDisplayString, VR = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const TR = { class: "alarms-list" }, vR = /* @__PURE__ */ dR({
  __name: "AlarmsCountBySeverity",
  props: {
    relatedAlarms: null,
    size: null
  },
  setup(n) {
    const i = n;
    return (r, l) => (ml(), Vl("div", TR, [
      (ml(!0), Vl(pR, null, hR(fR(ht.exports.groupBy)(i == null ? void 0 : i.relatedAlarms, "severity"), (s, f) => (ml(), Vl("div", {
        class: VR(["alarm-count", [`${f.toString().toLowerCase()}-color`, i.size]]),
        key: f
      }, mR(s.length), 3))), 128))
    ]));
  }
});
const ch = /* @__PURE__ */ Xe(vR, [["__scopeId", "data-v-b8c8b147"]]), UR = window.Vue.defineComponent, Ud = window.Vue.normalizeClass, Ka = window.Vue.createElementVNode, wR = window.Vue.toDisplayString, wd = window.Vue.createVNode, RR = window.Vue.openBlock, NR = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const MR = { class: "content" }, gR = { class: "title-row" }, ZR = { class: "title" }, JR = /* @__PURE__ */ UR({
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
      var h, m, U, Z, N;
      return RR(), NR("div", {
        onClick: l,
        class: Ud(["card", { selected: r.selected }])
      }, [
        Ka("div", {
          class: Ud(["severity-line", [`${(m = (h = r.alarmInfo) == null ? void 0 : h.severity) == null ? void 0 : m.toLowerCase()}-bg dark`]])
        }, null, 2),
        Ka("div", MR, [
          Ka("div", gR, [
            Ka("div", ZR, "[ " + wR((U = r.alarmInfo) == null ? void 0 : U.id) + " ]", 1),
            wd(ts, {
              severity: (Z = r.alarmInfo) == null ? void 0 : Z.severity
            }, null, 8, ["severity"])
          ]),
          wd(ch, {
            relatedAlarms: (N = r.alarmInfo) == null ? void 0 : N.relatedAlarms,
            size: "normal"
          }, null, 8, ["relatedAlarms"])
        ])
      ], 2);
    };
  }
});
const kR = /* @__PURE__ */ Xe(JR, [["__scopeId", "data-v-34bf806c"]]);
const $a = window.Vue.ref, yR = window.Vue.inject, bR = window.Vue.computed, ER = window.Vue.onMounted, FR = {
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
}, WR = (n) => {
  const i = $a(!1), r = $a(), l = $a(n.controls), s = $a(n.id), f = () => {
    r.value && r.value.focus();
  }, h = yR("registerTab");
  ER(() => {
    if (r.value && h) {
      const U = r.value.parentElement, Z = U && U.parentElement ? U.parentElement : void 0, N = Array.from(Z ? Z.children : []).filter((J) => J.querySelectorAll("[role=tab]").length), k = U ? N.indexOf(U) : -1;
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
  const m = bR(() => ({
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
const mi = function(n, i) {
  return window ? window.setTimeout(n, i) : setTimeout(n, i);
}, Vi = function(n) {
  return window ? window.clearTimeout(n) : clearTimeout(n);
};
var SR = Object.defineProperty, AR = Object.defineProperties, xR = Object.getOwnPropertyDescriptors, Rd = Object.getOwnPropertySymbols, BR = Object.prototype.hasOwnProperty, CR = Object.prototype.propertyIsEnumerable, Nd = (n, i, r) => i in n ? SR(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Md = (n, i) => {
  for (var r in i || (i = {}))
    BR.call(i, r) && Nd(n, r, i[r]);
  if (Rd)
    for (var r of Rd(i))
      CR.call(i, r) && Nd(n, r, i[r]);
  return n;
}, DR = (n, i) => AR(n, xR(i));
const QR = window.Vue.defineComponent, OR = window.Vue.h;
var zR = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const GR = {
  center: {
    type: Boolean,
    default: !1
  }
}, YR = QR({
  props: GR,
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
        this.styles = DR(Md({}, s), {
          height: `${l}px`,
          width: `${l}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Vi(this.failsafe), this.failsafe = mi(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return OR("div", {
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
var yn = /* @__PURE__ */ zR(YR, [["__scopeId", "data-v-18e2a5db"]]);
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
}, gd = window.Vue.ref, IR = window.Vue.toRef, HR = window.Vue.watch, Zd = window.Vue.provide, PR = {
  prop: "modelValue",
  event: "update:modelValue"
}, jR = {
  "update:modelValue": (n) => !0
}, XR = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, _R = (n, i) => {
  const r = IR(n, "modelValue"), l = gd(n.modelValue), s = gd([]);
  HR(r, (W) => {
    U(W);
  });
  const f = (W) => {
    W.preventDefault(), s.value.some((B, C) => B.tab && B.tab.el.contains(W.target) ? (m(C), U(C), !0) : !1);
  }, h = (W) => {
    if (((X) => X.shiftKey || X.ctrlKey || X.metaKey || X.altKey)(W))
      return;
    const C = W.keyCode, x = (X) => {
      X.stopPropagation(), X.preventDefault();
    }, j = s.value.filter((X) => X.tab && !X.tab.disabled), z = s.value.findIndex((X) => X.tab && X.tab.el.contains(document.activeElement));
    let $ = z !== -1 ? z : l.value;
    const b = [Ne.RIGHT], ne = [Ne.LEFT], q = [Ne.ENTER, Ne.SPACE];
    n.vertical && (b.push(Ne.DOWN), ne.push(Ne.UP)), b.indexOf(C) > -1 ? ($++, $ >= j.length && ($ = 0), x(W), m(s.value.indexOf(j[$]))) : ne.indexOf(C) > -1 && ($--, $ < 0 && ($ = j.length - 1), x(W), m(s.value.indexOf(j[$]))), q.indexOf(C) > -1 && U($);
  }, m = (W) => {
    s.value.forEach(function(B, C) {
      W === C && B.tab && B.tab.focus();
    });
  }, U = (W) => {
    const B = s.value[W];
    !B || B.tab && B.tab.disabled || (s.value.forEach((C, x) => {
      C.tab && (C.tab.selected = W === x), C.panel && (C.panel.selected = W === x);
    }), l.value = W, i.emit("update:modelValue", W));
  };
  Zd("registerTab", (W) => {
    const B = W.index;
    B > -1 && (s.value[B] = { ...s.value[B], tab: W }, s.value = [...s.value], k());
  }), Zd("registerPanel", (W) => {
    const B = W.index;
    B > -1 && (s.value[B] = {
      ...s.value[B],
      panel: W
    }, s.value = [...s.value], k());
  });
  const k = () => {
    s.value.forEach(({ tab: W, panel: B }, C) => {
      if (B && W) {
        const x = W.id || ve("tab"), j = W.controls || ve("panel");
        W.controls = j, W.id = x, B.tab = x, B.id = j;
      }
      C === l.value && (B && (B.selected = !0), W && (W.selected = !0));
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
}, ei = window.Vue.ref, LR = window.Vue.inject, qR = window.Vue.computed, KR = window.Vue.onMounted, $R = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, eN = (n) => {
  const i = ei(!1), r = ei(), l = ei(n.tab), s = ei(n.id), f = LR("registerPanel");
  KR(() => {
    if (f) {
      const m = r.value, U = m && m.parentElement ? m.parentElement : void 0, Z = m ? Array.from(U ? U.children : []).indexOf(m) : -1;
      f({
        selected: i,
        id: s,
        tab: l,
        el: r.value,
        index: Z
      });
    }
  });
  const h = qR(() => ({
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
}, ns = window.Vue.defineComponent, tN = window.Vue.resolveComponent, rs = window.Vue.openBlock, as = window.Vue.createElementBlock, Hr = window.Vue.createElementVNode, uh = window.Vue.mergeProps, Ti = window.Vue.renderSlot, nN = window.Vue.createVNode, rN = window.Vue.normalizeStyle, aN = window.Vue.toHandlers, iN = window.Vue.withDirectives, oN = window.Vue.normalizeProps, lN = window.Vue.guardReactiveProps, sN = window.Vue.vShow;
var is = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const cN = FR, uN = ns({
  props: cN,
  setup(n) {
    return WR(n);
  },
  components: {
    FeatherRipple: yn
  }
}), dN = { role: "presentation" }, fN = { class: "tab-text" };
function hN(n, i, r, l, s, f) {
  const h = tN("FeatherRipple");
  return rs(), as("li", dN, [
    Hr("button", uh(n.attrs, {
      class: ["tab hover focus", { disabled: n.disabled, selected: n.selected }]
    }), [
      Hr("span", fN, [
        Ti(n.$slots, "default", {}, void 0, !0)
      ]),
      nN(h)
    ], 16)
  ]);
}
var Jd = /* @__PURE__ */ is(uN, [["render", hN], ["__scopeId", "data-v-e6bb52b6"]]);
const pN = XR, mN = jR, VN = ns({
  model: PR,
  emits: mN,
  props: pN,
  setup(n, i) {
    return _R(n, i);
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
}), TN = { class: "feather-tab-container" }, vN = { class: "tab-panels" };
function UN(n, i, r, l, s, f) {
  return rs(), as("div", TN, [
    Hr("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: rN({
        transform: n.transform,
        "transition-duration": n.duration,
        width: n.width
      })
    }, null, 4),
    Hr("ul", uh(n.attrs, aN(n.listeners)), [
      Ti(n.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Hr("div", vN, [
      Ti(n.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var wN = /* @__PURE__ */ is(VN, [["render", UN], ["__scopeId", "data-v-27adffb9"]]);
const RN = $R, NN = ns({
  props: RN,
  setup(n) {
    return eN(n);
  }
});
function MN(n, i, r, l, s, f) {
  return iN((rs(), as("div", oN(lN(n.attrs)), [
    Ti(n.$slots, "default")
  ], 16)), [
    [sN, n.selected]
  ]);
}
var kd = /* @__PURE__ */ is(NN, [["render", MN]]);
function bn(n) {
  if (n === null || n === !0 || n === !1)
    return NaN;
  var i = Number(n);
  return isNaN(i) ? i : i < 0 ? Math.ceil(i) : Math.floor(i);
}
function We(n, i) {
  if (i.length < n)
    throw new TypeError(n + " argument" + (n > 1 ? "s" : "") + " required, but only " + i.length + " present");
}
function Be(n) {
  We(1, arguments);
  var i = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && i === "[object Date]" ? new Date(n.getTime()) : typeof n == "number" || i === "[object Number]" ? new Date(n) : ((typeof n == "string" || i === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function gN(n, i) {
  We(2, arguments);
  var r = Be(n).getTime(), l = bn(i);
  return new Date(r + l);
}
var ZN = {};
function ta() {
  return ZN;
}
function Bl(n) {
  var i = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return i.setUTCFullYear(n.getFullYear()), n.getTime() - i.getTime();
}
function JN(n, i) {
  We(2, arguments);
  var r = Be(n), l = Be(i), s = r.getTime() - l.getTime();
  return s < 0 ? -1 : s > 0 ? 1 : s;
}
function kN(n) {
  return We(1, arguments), n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function yN(n) {
  if (We(1, arguments), !kN(n) && typeof n != "number")
    return !1;
  var i = Be(n);
  return !isNaN(Number(i));
}
function bN(n, i) {
  We(2, arguments);
  var r = bn(i);
  return gN(n, -r);
}
var EN = 864e5;
function FN(n) {
  We(1, arguments);
  var i = Be(n), r = i.getTime();
  i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
  var l = i.getTime(), s = r - l;
  return Math.floor(s / EN) + 1;
}
function vi(n) {
  We(1, arguments);
  var i = 1, r = Be(n), l = r.getUTCDay(), s = (l < i ? 7 : 0) + l - i;
  return r.setUTCDate(r.getUTCDate() - s), r.setUTCHours(0, 0, 0, 0), r;
}
function dh(n) {
  We(1, arguments);
  var i = Be(n), r = i.getUTCFullYear(), l = new Date(0);
  l.setUTCFullYear(r + 1, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var s = vi(l), f = new Date(0);
  f.setUTCFullYear(r, 0, 4), f.setUTCHours(0, 0, 0, 0);
  var h = vi(f);
  return i.getTime() >= s.getTime() ? r + 1 : i.getTime() >= h.getTime() ? r : r - 1;
}
function WN(n) {
  We(1, arguments);
  var i = dh(n), r = new Date(0);
  r.setUTCFullYear(i, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var l = vi(r);
  return l;
}
var SN = 6048e5;
function AN(n) {
  We(1, arguments);
  var i = Be(n), r = vi(i).getTime() - WN(i).getTime();
  return Math.round(r / SN) + 1;
}
function Ui(n, i) {
  var r, l, s, f, h, m, U, Z;
  We(1, arguments);
  var N = ta(), k = bn((r = (l = (s = (f = i == null ? void 0 : i.weekStartsOn) !== null && f !== void 0 ? f : i == null || (h = i.locale) === null || h === void 0 || (m = h.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && s !== void 0 ? s : N.weekStartsOn) !== null && l !== void 0 ? l : (U = N.locale) === null || U === void 0 || (Z = U.options) === null || Z === void 0 ? void 0 : Z.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(k >= 0 && k <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var J = Be(n), F = J.getUTCDay(), W = (F < k ? 7 : 0) + F - k;
  return J.setUTCDate(J.getUTCDate() - W), J.setUTCHours(0, 0, 0, 0), J;
}
function fh(n, i) {
  var r, l, s, f, h, m, U, Z;
  We(1, arguments);
  var N = Be(n), k = N.getUTCFullYear(), J = ta(), F = bn((r = (l = (s = (f = i == null ? void 0 : i.firstWeekContainsDate) !== null && f !== void 0 ? f : i == null || (h = i.locale) === null || h === void 0 || (m = h.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && s !== void 0 ? s : J.firstWeekContainsDate) !== null && l !== void 0 ? l : (U = J.locale) === null || U === void 0 || (Z = U.options) === null || Z === void 0 ? void 0 : Z.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(F >= 1 && F <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var W = new Date(0);
  W.setUTCFullYear(k + 1, 0, F), W.setUTCHours(0, 0, 0, 0);
  var B = Ui(W, i), C = new Date(0);
  C.setUTCFullYear(k, 0, F), C.setUTCHours(0, 0, 0, 0);
  var x = Ui(C, i);
  return N.getTime() >= B.getTime() ? k + 1 : N.getTime() >= x.getTime() ? k : k - 1;
}
function xN(n, i) {
  var r, l, s, f, h, m, U, Z;
  We(1, arguments);
  var N = ta(), k = bn((r = (l = (s = (f = i == null ? void 0 : i.firstWeekContainsDate) !== null && f !== void 0 ? f : i == null || (h = i.locale) === null || h === void 0 || (m = h.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && s !== void 0 ? s : N.firstWeekContainsDate) !== null && l !== void 0 ? l : (U = N.locale) === null || U === void 0 || (Z = U.options) === null || Z === void 0 ? void 0 : Z.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), J = fh(n, i), F = new Date(0);
  F.setUTCFullYear(J, 0, k), F.setUTCHours(0, 0, 0, 0);
  var W = Ui(F, i);
  return W;
}
var BN = 6048e5;
function CN(n, i) {
  We(1, arguments);
  var r = Be(n), l = Ui(r, i).getTime() - xN(r, i).getTime();
  return Math.round(l / BN) + 1;
}
function ae(n, i) {
  for (var r = n < 0 ? "-" : "", l = Math.abs(n).toString(); l.length < i; )
    l = "0" + l;
  return r + l;
}
var DN = {
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
const nn = DN;
var Ln = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, QN = {
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
    return nn.y(n, i);
  },
  Y: function(n, i, r, l) {
    var s = fh(n, l), f = s > 0 ? s : 1 - s;
    if (i === "YY") {
      var h = f % 100;
      return ae(h, 2);
    }
    return i === "Yo" ? r.ordinalNumber(f, {
      unit: "year"
    }) : ae(f, i.length);
  },
  R: function(n, i) {
    var r = dh(n);
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
        return nn.M(n, i);
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
    var s = CN(n, l);
    return i === "wo" ? r.ordinalNumber(s, {
      unit: "week"
    }) : ae(s, i.length);
  },
  I: function(n, i, r) {
    var l = AN(n);
    return i === "Io" ? r.ordinalNumber(l, {
      unit: "week"
    }) : ae(l, i.length);
  },
  d: function(n, i, r) {
    return i === "do" ? r.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : nn.d(n, i);
  },
  D: function(n, i, r) {
    var l = FN(n);
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
    return nn.h(n, i);
  },
  H: function(n, i, r) {
    return i === "Ho" ? r.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : nn.H(n, i);
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
    }) : nn.m(n, i);
  },
  s: function(n, i, r) {
    return i === "so" ? r.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : nn.s(n, i);
  },
  S: function(n, i) {
    return nn.S(n, i);
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
        return Zn(f);
      case "XXXXX":
      case "XXX":
      default:
        return Zn(f, ":");
    }
  },
  x: function(n, i, r, l) {
    var s = l._originalDate || n, f = s.getTimezoneOffset();
    switch (i) {
      case "x":
        return bd(f);
      case "xxxx":
      case "xx":
        return Zn(f);
      case "xxxxx":
      case "xxx":
      default:
        return Zn(f, ":");
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
        return "GMT" + Zn(f, ":");
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
        return "GMT" + Zn(f, ":");
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
  return Zn(n, i);
}
function Zn(n, i) {
  var r = i || "", l = n > 0 ? "-" : "+", s = Math.abs(n), f = ae(Math.floor(s / 60), 2), h = ae(s % 60, 2);
  return l + f + r + h;
}
const ON = QN;
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
}, hh = function(n, i) {
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
}, zN = function(n, i) {
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
  return f.replace("{{date}}", Ed(l, i)).replace("{{time}}", hh(s, i));
}, GN = {
  p: hh,
  P: zN
};
const YN = GN;
var IN = ["D", "DD"], HN = ["YY", "YYYY"];
function PN(n) {
  return IN.indexOf(n) !== -1;
}
function jN(n) {
  return HN.indexOf(n) !== -1;
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
var XN = {
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
}, _N = function(n, i, r) {
  var l, s = XN[n];
  return typeof s == "string" ? l = s : i === 1 ? l = s.one : l = s.other.replace("{{count}}", i.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + l : l + " ago" : l;
};
const LN = _N;
function Tl(n) {
  return function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = i.width ? String(i.width) : n.defaultWidth, l = n.formats[r] || n.formats[n.defaultWidth];
    return l;
  };
}
var qN = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, KN = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, $N = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, eM = {
  date: Tl({
    formats: qN,
    defaultWidth: "full"
  }),
  time: Tl({
    formats: KN,
    defaultWidth: "full"
  }),
  dateTime: Tl({
    formats: $N,
    defaultWidth: "full"
  })
};
const tM = eM;
var nM = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rM = function(n, i, r, l) {
  return nM[n];
};
const aM = rM;
function xr(n) {
  return function(i, r) {
    var l = r != null && r.context ? String(r.context) : "standalone", s;
    if (l === "formatting" && n.formattingValues) {
      var f = n.defaultFormattingWidth || n.defaultWidth, h = r != null && r.width ? String(r.width) : f;
      s = n.formattingValues[h] || n.formattingValues[f];
    } else {
      var m = n.defaultWidth, U = r != null && r.width ? String(r.width) : n.defaultWidth;
      s = n.values[U] || n.values[m];
    }
    var Z = n.argumentCallback ? n.argumentCallback(i) : i;
    return s[Z];
  };
}
var iM = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, oM = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, lM = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, sM = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, cM = {
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
}, uM = {
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
}, dM = function(n, i) {
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
}, fM = {
  ordinalNumber: dM,
  era: xr({
    values: iM,
    defaultWidth: "wide"
  }),
  quarter: xr({
    values: oM,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: xr({
    values: lM,
    defaultWidth: "wide"
  }),
  day: xr({
    values: sM,
    defaultWidth: "wide"
  }),
  dayPeriod: xr({
    values: cM,
    defaultWidth: "wide",
    formattingValues: uM,
    defaultFormattingWidth: "wide"
  })
};
const hM = fM;
function Br(n) {
  return function(i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = r.width, s = l && n.matchPatterns[l] || n.matchPatterns[n.defaultMatchWidth], f = i.match(s);
    if (!f)
      return null;
    var h = f[0], m = l && n.parsePatterns[l] || n.parsePatterns[n.defaultParseWidth], U = Array.isArray(m) ? mM(m, function(k) {
      return k.test(h);
    }) : pM(m, function(k) {
      return k.test(h);
    }), Z;
    Z = n.valueCallback ? n.valueCallback(U) : U, Z = r.valueCallback ? r.valueCallback(Z) : Z;
    var N = i.slice(h.length);
    return {
      value: Z,
      rest: N
    };
  };
}
function pM(n, i) {
  for (var r in n)
    if (n.hasOwnProperty(r) && i(n[r]))
      return r;
}
function mM(n, i) {
  for (var r = 0; r < n.length; r++)
    if (i(n[r]))
      return r;
}
function VM(n) {
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
var TM = /^(\d+)(th|st|nd|rd)?/i, vM = /\d+/i, UM = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, wM = {
  any: [/^b/i, /^(a|c)/i]
}, RM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, NM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, MM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, gM = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, ZM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, JM = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, kM = {
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
}, bM = {
  ordinalNumber: VM({
    matchPattern: TM,
    parsePattern: vM,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: Br({
    matchPatterns: UM,
    defaultMatchWidth: "wide",
    parsePatterns: wM,
    defaultParseWidth: "any"
  }),
  quarter: Br({
    matchPatterns: RM,
    defaultMatchWidth: "wide",
    parsePatterns: NM,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: Br({
    matchPatterns: MM,
    defaultMatchWidth: "wide",
    parsePatterns: gM,
    defaultParseWidth: "any"
  }),
  day: Br({
    matchPatterns: ZM,
    defaultMatchWidth: "wide",
    parsePatterns: JM,
    defaultParseWidth: "any"
  }),
  dayPeriod: Br({
    matchPatterns: kM,
    defaultMatchWidth: "any",
    parsePatterns: yM,
    defaultParseWidth: "any"
  })
};
const EM = bM;
var FM = {
  code: "en-US",
  formatDistance: LN,
  formatLong: tM,
  formatRelative: aM,
  localize: hM,
  match: EM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const ph = FM;
var WM = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, SM = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, AM = /^'([^]*?)'?$/, xM = /''/g, BM = /[a-zA-Z]/;
function It(n, i, r) {
  var l, s, f, h, m, U, Z, N, k, J, F, W, B, C, x, j, z, $;
  We(2, arguments);
  var b = String(i), ne = ta(), q = (l = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : ne.locale) !== null && l !== void 0 ? l : ph, X = bn((f = (h = (m = (U = r == null ? void 0 : r.firstWeekContainsDate) !== null && U !== void 0 ? U : r == null || (Z = r.locale) === null || Z === void 0 || (N = Z.options) === null || N === void 0 ? void 0 : N.firstWeekContainsDate) !== null && m !== void 0 ? m : ne.firstWeekContainsDate) !== null && h !== void 0 ? h : (k = ne.locale) === null || k === void 0 || (J = k.options) === null || J === void 0 ? void 0 : J.firstWeekContainsDate) !== null && f !== void 0 ? f : 1);
  if (!(X >= 1 && X <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Se = bn((F = (W = (B = (C = r == null ? void 0 : r.weekStartsOn) !== null && C !== void 0 ? C : r == null || (x = r.locale) === null || x === void 0 || (j = x.options) === null || j === void 0 ? void 0 : j.weekStartsOn) !== null && B !== void 0 ? B : ne.weekStartsOn) !== null && W !== void 0 ? W : (z = ne.locale) === null || z === void 0 || ($ = z.options) === null || $ === void 0 ? void 0 : $.weekStartsOn) !== null && F !== void 0 ? F : 0);
  if (!(Se >= 0 && Se <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!q.localize)
    throw new RangeError("locale must contain localize property");
  if (!q.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Ge = Be(n);
  if (!yN(Ge))
    throw new RangeError("Invalid time value");
  var de = Bl(Ge), fe = bN(Ge, de), pe = {
    firstWeekContainsDate: X,
    weekStartsOn: Se,
    locale: q,
    _originalDate: Ge
  }, Ue = b.match(SM).map(function(ie) {
    var Je = ie[0];
    if (Je === "p" || Je === "P") {
      var ke = YN[Je];
      return ke(ie, q.formatLong);
    }
    return ie;
  }).join("").match(WM).map(function(ie) {
    if (ie === "''")
      return "'";
    var Je = ie[0];
    if (Je === "'")
      return CM(ie);
    var ke = ON[Je];
    if (ke)
      return !(r != null && r.useAdditionalWeekYearTokens) && jN(ie) && Fd(ie, i, String(n)), !(r != null && r.useAdditionalDayOfYearTokens) && PN(ie) && Fd(ie, i, String(n)), ke(fe, ie, q.localize, pe);
    if (Je.match(BM))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Je + "`");
    return ie;
  }).join("");
  return Ue;
}
function CM(n) {
  var i = n.match(AM);
  return i ? i[1].replace(xM, "'") : n;
}
function mh(n, i) {
  if (n == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in i)
    Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  return n;
}
function DM(n) {
  return mh({}, n);
}
var Wd = 1e3 * 60, wi = 60 * 24, Sd = wi * 30, Ad = wi * 365;
function QM(n, i, r) {
  var l, s, f;
  We(2, arguments);
  var h = ta(), m = (l = (s = r == null ? void 0 : r.locale) !== null && s !== void 0 ? s : h.locale) !== null && l !== void 0 ? l : ph;
  if (!m.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var U = JN(n, i);
  if (isNaN(U))
    throw new RangeError("Invalid time value");
  var Z = mh(DM(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: U
  }), N, k;
  U > 0 ? (N = Be(i), k = Be(n)) : (N = Be(n), k = Be(i));
  var J = String((f = r == null ? void 0 : r.roundingMethod) !== null && f !== void 0 ? f : "round"), F;
  if (J === "floor")
    F = Math.floor;
  else if (J === "ceil")
    F = Math.ceil;
  else if (J === "round")
    F = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var W = k.getTime() - N.getTime(), B = W / Wd, C = Bl(k) - Bl(N), x = (W - C) / Wd, j = r == null ? void 0 : r.unit, z;
  if (j ? z = String(j) : B < 1 ? z = "second" : B < 60 ? z = "minute" : B < wi ? z = "hour" : x < Sd ? z = "day" : x < Ad ? z = "month" : z = "year", z === "second") {
    var $ = F(W / 1e3);
    return m.formatDistance("xSeconds", $, Z);
  } else if (z === "minute") {
    var b = F(B);
    return m.formatDistance("xMinutes", b, Z);
  } else if (z === "hour") {
    var ne = F(B / 60);
    return m.formatDistance("xHours", ne, Z);
  } else if (z === "day") {
    var q = F(x / wi);
    return m.formatDistance("xDays", q, Z);
  } else if (z === "month") {
    var X = F(x / Sd);
    return X === 12 && j !== "month" ? m.formatDistance("xYears", 1, Z) : m.formatDistance("xMonths", X, Z);
  } else if (z === "year") {
    var Se = F(x / Ad);
    return m.formatDistance("xYears", Se, Z);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const OM = window.Vue.defineComponent, xd = window.Vue.toDisplayString, Bd = window.Vue.createElementVNode, zM = window.Vue.unref, GM = window.Vue.openBlock, YM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const IM = { class: "box" }, HM = { class: "label" }, PM = { class: "date" }, jM = /* @__PURE__ */ OM({
  __name: "DateBox",
  props: {
    label: null,
    date: null
  },
  setup(n) {
    const i = n;
    return (r, l) => (GM(), YM("div", IM, [
      Bd("div", HM, xd(i.label), 1),
      Bd("div", PM, xd(zM(It)(new Date(i.date), "d/M HH:mm:ss")), 1)
    ]));
  }
});
const Cd = /* @__PURE__ */ Xe(jM, [["__scopeId", "data-v-150a6a2c"]]);
var XM = Object.defineProperty, Dd = Object.getOwnPropertySymbols, _M = Object.prototype.hasOwnProperty, LM = Object.prototype.propertyIsEnumerable, Qd = (n, i, r) => i in n ? XM(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Od = (n, i) => {
  for (var r in i || (i = {}))
    _M.call(i, r) && Qd(n, r, i[r]);
  if (Dd)
    for (var r of Dd(i))
      LM.call(i, r) && Qd(n, r, i[r]);
  return n;
};
const qM = window.Vue.defineComponent, KM = window.Vue.toRaw, vl = window.Vue.h;
var $M = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const eg = {
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
}, tg = qM({
  props: eg,
  render() {
    const n = this.$attrs, i = n.class ? n.class.split(" ").reduce((s, f) => (s[f] = !0, s), {}) : {}, r = {};
    i["feather-icon"] = !0, this.flex && (i["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let l = KM(this.icon);
    return this.$slots.default ? vl("span", { class: "feather-icon-container" }, [
      vl(this.$slots.default()[0], Od({
        class: i
      }, r))
    ]) : vl(l, Od({
      class: i
    }, r));
  }
});
var Nt = /* @__PURE__ */ $M(tg, [["__scopeId", "data-v-52cbf270"]]);
const ng = window.Vue.openBlock, rg = window.Vue.createElementBlock, ag = window.Vue.createElementVNode;
var ig = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const og = {}, lg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, sg = /* @__PURE__ */ ag("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), cg = [
  sg
];
function ug(n, i) {
  return ng(), rg("svg", lg, cg);
}
var dg = /* @__PURE__ */ ig(og, [["render", ug]]);
const fg = window.Vue.openBlock, hg = window.Vue.createElementBlock, pg = window.Vue.createElementVNode;
var mg = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const Vg = {}, Tg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vg = /* @__PURE__ */ pg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Ug = [
  vg
];
function wg(n, i) {
  return fg(), hg("svg", Tg, Ug);
}
var Rg = /* @__PURE__ */ mg(Vg, [["render", wg]]);
const nr = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance"
}, Ng = "/alec", Mg = "/alec/engine/configuration", Vh = "/alec/agreement/configuration", Th = async (n) => {
  try {
    return (await ea.post(`${Vh}`, {
      agreed: n
    })).status === 201;
  } catch {
    return !1;
  }
}, gg = async () => {
  try {
    const n = await ea.get(`${Vh}`);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, Zg = async (n, i) => {
  try {
    return (await ea.post(Mg, {
      distanceMeasureName: i ? nr.HELLINGER_OPTION : nr.SPACE_DISTANCE_OPTION,
      engineName: n,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, Jg = async (n, i) => {
  try {
    return (await ea.post(`${Ng}/situation/${i}/${n}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
};
const kg = window.Vue.computed, yg = (n, i) => {
  const r = {};
  return Object.keys(i).forEach((l) => {
    r[`${l}Label`] = kg(() => n.value[l] ? n.value[l] : i[l]);
  }), r;
}, bg = window.Vue.openBlock, Eg = window.Vue.createElementBlock, Fg = window.Vue.createElementVNode;
var Wg = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const Sg = {}, Ag = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xg = /* @__PURE__ */ Fg("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Bg = [
  xg
];
function Cg(n, i) {
  return bg(), Eg("svg", Ag, Bg);
}
var vh = /* @__PURE__ */ Wg(Sg, [["render", Cg]]);
const zd = window.Vue.computed, Dg = (n, i, r) => {
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
const Qg = window.Vue.openBlock, Og = window.Vue.createElementBlock, os = window.Vue.createElementVNode;
var zg = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const Gg = {}, Yg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ig = /* @__PURE__ */ os("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Hg = /* @__PURE__ */ os("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Pg = /* @__PURE__ */ os("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), jg = [
  Ig,
  Hg,
  Pg
];
function Xg(n, i) {
  return Qg(), Og("svg", Yg, jg);
}
var _g = /* @__PURE__ */ zg(Gg, [["render", Xg]]), Lg = Object.defineProperty, qg = Object.defineProperties, Kg = Object.getOwnPropertyDescriptors, Gd = Object.getOwnPropertySymbols, $g = Object.prototype.hasOwnProperty, eZ = Object.prototype.propertyIsEnumerable, Yd = (n, i, r) => i in n ? Lg(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Uh = (n, i) => {
  for (var r in i || (i = {}))
    $g.call(i, r) && Yd(n, r, i[r]);
  if (Gd)
    for (var r of Gd(i))
      eZ.call(i, r) && Yd(n, r, i[r]);
  return n;
}, wh = (n, i) => qg(n, Kg(i));
const ur = window.Vue.defineComponent, Lr = window.Vue.resolveComponent, yt = window.Vue.openBlock, rr = window.Vue.createElementBlock, tZ = window.Vue.createVNode, Ri = window.Vue.createBlock, nZ = window.Vue.withModifiers, sr = window.Vue.inject, qr = window.Vue.computed, rZ = window.Vue.normalizeClass, qn = window.Vue.createElementVNode, Ni = window.Vue.toDisplayString, si = window.Vue.renderSlot, Pr = window.Vue.createCommentVNode, aZ = window.Vue.withDirectives, iZ = window.Vue.vShow, Cl = window.Vue.ref, Id = window.Vue.toRef, Hd = window.Vue.nextTick, Dl = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ls = window.Vue.provide, Pd = window.Vue.isRef, oZ = window.Vue.onBeforeUnmount;
var na = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const lZ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, sZ = ur({
  props: lZ,
  components: {
    FeatherIcon: Nt
  }
}), cZ = ["title"];
function uZ(n, i, r, l, s, f) {
  const h = Lr("FeatherIcon");
  return yt(), rr("a", {
    title: n.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    tZ(h, { icon: n.icon }, null, 8, ["icon"])
  ], 8, cZ);
}
var dZ = /* @__PURE__ */ na(sZ, [["render", uZ], ["__scopeId", "data-v-4265058e"]]);
const fZ = ur({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return vh;
    }
  },
  components: {
    ActionIcon: dZ
  }
});
function hZ(n, i, r, l, s, f) {
  const h = Lr("ActionIcon");
  return yt(), Ri(h, {
    onClick: i[0] || (i[0] = nZ((m) => n.$emit("clear"), ["stop", "prevent"])),
    title: n.clear,
    icon: n.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var pZ = /* @__PURE__ */ na(fZ, [["render", hZ]]);
const mZ = ur({
  computed: {
    errorIcon() {
      return _g;
    }
  },
  components: {
    FeatherIcon: Nt
  }
});
function VZ(n, i, r, l, s, f) {
  const h = Lr("FeatherIcon");
  return yt(), Ri(h, {
    icon: n.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var TZ = /* @__PURE__ */ na(mZ, [["render", VZ], ["__scopeId", "data-v-0b8faef3"]]);
const vZ = {
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
}, UZ = {
  clear: () => !0,
  "wrapper-click": (n) => !0
}, wZ = ur({
  emits: UZ,
  props: vZ,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const n = sr("wrapperOptions", {}), i = sr("validationErrorMessage", !1), r = qr(() => n.error ? n.error : i && i.value ? i.value : !1);
    return wh(Uh({}, n), { error: r });
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
    ClearIcon: pZ,
    ErrorIcon: TZ
  }
}), RZ = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, NZ = ["for"], MZ = { class: "prefix" }, gZ = { class: "post" };
function ZZ(n, i, r, l, s, f) {
  const h = Lr("ClearIcon"), m = Lr("ErrorIcon");
  return yt(), rr("div", {
    class: rZ(["feather-input-wrapper-container", n.containerCls])
  }, [
    qn("fieldset", RZ, [
      qn("legend", null, Ni(n.label), 1)
    ]),
    qn("label", {
      class: "feather-input-label",
      for: n.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ni(n.label), 9, NZ),
    qn("div", {
      class: "feather-input-wrapper",
      onClick: i[1] || (i[1] = (...U) => n.handleWrapperClick && n.handleWrapperClick(...U))
    }, [
      qn("div", MZ, [
        si(n.$slots, "pre", {}, void 0, !0)
      ]),
      si(n.$slots, "default", {}, void 0, !0),
      qn("div", gZ, [
        n.showClear && n.computedClearText ? (yt(), Ri(h, {
          key: 0,
          clear: n.computedClearText,
          onClear: i[0] || (i[0] = (U) => n.$emit("clear"))
        }, null, 8, ["clear"])) : Pr("", !0),
        n.error ? (yt(), Ri(m, { key: 1 })) : Pr("", !0),
        si(n.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var JZ = /* @__PURE__ */ na(wZ, [["render", ZZ], ["__scopeId", "data-v-4db296db"]]);
const kZ = ur({
  setup() {
    const n = sr("subTextOptions", {}), i = sr("validationErrorMessage", !1), r = qr(() => n.error ? n.error : i && i.value ? i.value : "");
    return wh(Uh({}, n), { error: r });
  }
}), yZ = { class: "feather-input-sub-text" }, bZ = {
  key: 0,
  class: "feather-input-spacer"
}, EZ = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, FZ = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function WZ(n, i, r, l, s, f) {
  return aZ((yt(), rr("div", yZ, [
    !n.hint && !n.error.length ? (yt(), rr("div", bZ, "\xA0")) : Pr("", !0),
    n.hint && !n.error.length ? (yt(), rr("div", EZ, Ni(n.hint), 1)) : Pr("", !0),
    n.error.length > 0 ? (yt(), rr("div", FZ, Ni(n.error), 1)) : Pr("", !0),
    si(n.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [iZ, !n.inline || n.hint || n.error.length]
  ]);
}
var ss = /* @__PURE__ */ na(kZ, [["render", WZ], ["__scopeId", "data-v-8e0ac99e"]]);
const SZ = {
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
  props: SZ,
  setup(n) {
    const i = sr("featherFormErrors", Cl([])), r = Id(n, "errorList"), l = qr(() => {
      var N;
      return (N = r.value) != null && N.length ? r.value : i.value;
    }), s = Id(n, "generalError"), f = (N) => {
      document.getElementById(N).focus();
    }, h = (N) => N.replace(/ \*$/, ""), m = Cl(), U = (N) => `${h(N.label)} - ${N.message}`, Z = qr(() => (l.value.length && Hd(() => m.value.focus()), n.headingText(l.value)));
    return Dl(s, (N) => {
      N.length && Hd(() => m.value.focus());
    }), {
      errors: l,
      errorsHeading: Z,
      heading: m,
      focusElement: f,
      mainError: s,
      getFullMessage: U
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
      } catch (N) {
        const k = N;
        return h.value = k.errors[0], {
          success: !1,
          message: k.errors[0],
          inputId: n.value,
          label: r
        };
      }
    }, Z = {
      clear: () => {
        h.value = "";
      },
      validate: m
    };
    return s && Pd(s) && Dl(s, () => {
      f.runValidation();
    }), Dl(n, (N, k) => {
      N && f && f.register(N, Z), k && f && f.deregister(k);
    }, { immediate: !0 }), oZ(() => {
      f.deregister(n.value, !0);
    }), { validate: m };
  }
  return { validate: () => !0 };
}, us = (n) => ({
  inherittedAttrs: qr(() => ({
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
}, AZ = {
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
}, xZ = (n) => {
  ls("wrapperOptions", n);
}, ti = window.Vue.ref, BZ = window.Vue.watch, CZ = window.Vue.watchEffect, jd = window.Vue.computed, Ul = window.Vue.provide, Rh = (n, i, r, l, s) => {
  const f = ti([]), h = ti(), m = ti(), U = ti();
  CZ(() => {
    if (!f.value.length)
      return;
    const x = f.value.map((j) => j.value);
    if (n.value !== void 0 && n.value !== null && (h.value = f.value[x.indexOf(n.value)]), !h.value && f.value.length) {
      let j = f.value.filter((z) => !z.disabled);
      j = j.length ? j : f.value, m.value = j[0], m.value.first = !0;
    }
  }), BZ(h, (x, j) => {
    j && (j.checked = !1), x && (x.checked = !0);
  });
  const Z = (x) => {
    x && x.disabled || (m.value && (m.value.first = !1), h.value !== x && (i("update:modelValue", x.value), h.value = x, x.focus()));
  }, N = jd(() => h.value || m.value), k = Dg(N, f, Z), J = jd(() => ve("feather-radio-group"));
  U.value = J.value;
  const { validate: F } = cs(U, n, r, l, s);
  return Ul("register", (x) => {
    f.value = [...f.value, x], U.value === J.value && (U.value = x.id);
  }), Ul("select", Z), Ul("blur", (x) => {
    i("blur", x);
  }), {
    keydown: (x) => {
      switch (x.keyCode) {
        case 13:
        case 32:
          h.value ? Z(h.value) : m.value && Z(m.value);
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
    validate: F,
    firstElementId: U,
    groupId: J
  };
};
var DZ = Object.defineProperty, QZ = Object.defineProperties, OZ = Object.getOwnPropertyDescriptors, Xd = Object.getOwnPropertySymbols, zZ = Object.prototype.hasOwnProperty, GZ = Object.prototype.propertyIsEnumerable, _d = (n, i, r) => i in n ? DZ(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, ir = (n, i) => {
  for (var r in i || (i = {}))
    zZ.call(i, r) && _d(n, r, i[r]);
  if (Xd)
    for (var r of Xd(i))
      GZ.call(i, r) && _d(n, r, i[r]);
  return n;
}, Nh = (n, i) => QZ(n, OZ(i));
const dn = window.Vue.defineComponent, jr = window.Vue.inject, Mi = window.Vue.computed, Xr = window.Vue.ref, pt = window.Vue.resolveComponent, rt = window.Vue.openBlock, ra = window.Vue.createElementBlock, Mh = window.Vue.normalizeClass, bt = window.Vue.renderSlot, cn = window.Vue.createBlock, Kr = window.Vue.createCommentVNode, gi = window.Vue.createElementVNode, YZ = window.Vue.withModifiers, Fi = window.Vue.createVNode, gh = window.Vue.toRef, Ql = window.Vue.mergeProps, Pt = window.Vue.withCtx, IZ = window.Vue.h, HZ = window.Vue.provide;
var fn = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const PZ = {
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
}, jZ = dn({
  props: PZ,
  setup(n) {
    const i = jr("isCondensed", null), r = Mi(() => i || n.condensed), l = Xr(!1);
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
}), XZ = ["aria-disabled"];
function _Z(n, i, r, l, s, f) {
  const h = pt("FeatherRipple");
  return rt(), ra("div", {
    class: Mh(["chip", {
      condensed: n.isCondensed,
      disabled: n.disabled,
      focused: n.focused
    }]),
    onFocusin: i[0] || (i[0] = (m) => n.clickable ? n.handleFocus : null),
    onFocusout: i[1] || (i[1] = (m) => n.clickable ? n.handleBlur : null),
    "aria-disabled": n.disabled
  }, [
    bt(n.$slots, "default", {}, void 0, !0),
    n.clickable ? (rt(), cn(h, { key: 0 })) : Kr("", !0)
  ], 42, XZ);
}
var hs = /* @__PURE__ */ fn(jZ, [["render", _Z], ["__scopeId", "data-v-44d413dc"]]);
const LZ = {
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
}, qZ = dn({
  emits: ["delete"],
  props: LZ,
  setup(n, i) {
    return {
      handleDelete: () => {
        n.disabled || i.emit("delete");
      },
      icon: vh
    };
  },
  components: {
    FeatherIcon: Nt
  }
}), KZ = { class: "chip-delete" }, $Z = ["aria-label", "aria-describedby"];
function eJ(n, i, r, l, s, f) {
  const h = pt("FeatherIcon");
  return rt(), ra("span", KZ, [
    gi("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: i[0] || (i[0] = YZ((...m) => n.handleDelete && n.handleDelete(...m), ["stop", "prevent"])),
      "aria-label": n.label,
      "aria-describedby": n.textId
    }, [
      Fi(h, {
        icon: n.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, $Z)
  ]);
}
var tJ = /* @__PURE__ */ fn(qZ, [["render", eJ], ["__scopeId", "data-v-4bae6cb4"]]);
const nJ = dn({
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
}), rJ = ["title"];
function aJ(n, i, r, l, s, f) {
  return rt(), ra("span", {
    class: "label",
    title: n.titleText,
    ref: "container"
  }, [
    bt(n.$slots, "default", {}, void 0, !0)
  ], 8, rJ);
}
var ps = /* @__PURE__ */ fn(nJ, [["render", aJ], ["__scopeId", "data-v-1a0445b2"]]);
const iJ = {}, oJ = {
  class: "chip-icon",
  role: "presentation"
};
function lJ(n, i) {
  return rt(), ra("span", oJ, [
    bt(n.$slots, "default", {}, void 0, !0)
  ]);
}
var ms = /* @__PURE__ */ fn(iJ, [["render", lJ], ["__scopeId", "data-v-2230176f"]]);
const Ld = {
  delete: "Remove"
}, sJ = dn({
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
    const r = yg(gh(n, "labels"), Ld), l = Mi(() => ve("chip-text")), s = () => {
      n.disabled || i.emit("click");
    }, f = ir({}, i.attrs);
    return n.disabled && delete f.onClick, Nh(ir({}, r), {
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
    DeleteIcon: tJ,
    Label: ps,
    PreIcon: ms
  }
}), cJ = ["aria-disabled"];
function uJ(n, i, r, l, s, f) {
  const h = pt("PreIcon"), m = pt("Label"), U = pt("DeleteIcon"), Z = pt("Chip");
  return rt(), cn(Z, Ql(n.attrs, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: { hover: n.canClick, focus: n.canClick || n.canDelete },
    role: "row",
    clickable: n.canClick
  }), {
    default: Pt(() => [
      gi("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        gi("span", Ql(n.chipTextAttrs, { class: "chip-label-button" }), [
          n.hasIcon ? (rt(), cn(h, { key: 0 }, {
            default: Pt(() => [
              bt(n.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Kr("", !0),
          Fi(m, { id: n.chipTextId }, {
            default: Pt(() => [
              bt(n.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, cJ),
      n.canDelete ? (rt(), cn(U, {
        key: 0,
        disabled: n.disabled,
        "text-id": n.chipTextId,
        label: n.deleteLabel,
        role: "gridcell",
        onDelete: i[0] || (i[0] = (N) => n.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Kr("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var dJ = /* @__PURE__ */ fn(sJ, [["render", uJ], ["__scopeId", "data-v-48b2704a"]]);
const fJ = dn({
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
}), hJ = ["aria-disabled"];
function pJ(n, i, r, l, s, f) {
  const h = pt("PreIcon"), m = pt("Label"), U = pt("Chip");
  return rt(), cn(U, {
    role: "row",
    disabled: n.disabled,
    condensed: n.condensed,
    clickable: !1
  }, {
    default: Pt(() => [
      gi("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        n.hasIcon ? (rt(), cn(h, { key: 0 }, {
          default: Pt(() => [
            bt(n.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Kr("", !0),
        Fi(m, null, {
          default: Pt(() => [
            bt(n.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, hJ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var mJ = /* @__PURE__ */ fn(fJ, [["render", pJ], ["__scopeId", "data-v-3e0c4eba"]]);
const VJ = dn({
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
    const i = Xr(!1), r = Xr(!1), l = Mi(() => ve("chip-label-id")), s = Mi(() => i.value || r.value ? 0 : -1), f = Xr(), h = () => {
      f.value.$el.focus();
    }, m = jr("register", (J) => {
    }), U = jr("blur", (J) => {
    }), Z = jr("select", (J) => {
    }), N = {
      first: i,
      focus: h,
      disabled: n.disabled,
      value: n.value,
      checked: r
    };
    return m(N), {
      labelId: l,
      tabindex: s,
      first: i,
      blur: U,
      click: () => {
        Z(N);
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
function TJ(n, i, r, l, s, f) {
  const h = pt("PreIcon"), m = pt("Label"), U = pt("Chip");
  return rt(), cn(U, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: Mh(["focus hover", { selected: n.checked }]),
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
    default: Pt(() => [
      n.hasIcon ? (rt(), cn(h, { key: 0 }, {
        default: Pt(() => [
          bt(n.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Kr("", !0),
      Fi(m, { id: n.labelId }, {
        default: Pt(() => [
          bt(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var vJ = /* @__PURE__ */ fn(VJ, [["render", TJ], ["__scopeId", "data-v-bbcc2f70"]]);
const UJ = {
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
}, qd = dn({
  props: UJ,
  setup() {
    return { format: jr("chipListFormat", "") };
  },
  render() {
    const n = (i) => IZ(i, ir(ir({}, this.$props), this.$attrs), ir({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? n(dJ) : this.format === "radio" ? n(vJ) : n(mJ);
  }
}), wJ = {
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
}, RJ = dn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: wJ,
  setup(n, i) {
    const r = n.mode === "list" ? "grid" : n.mode;
    HZ("chipListFormat", r);
    const l = r === "single";
    if (r === "radio") {
      const h = gh(n, "modelValue");
      return Nh(ir({
        attrs: {
          role: "radiogroup"
        }
      }, Rh(h, i.emit, n.label, {}, Xr(""))), {
        single: l
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: l };
  }
}), NJ = ["aria-label"];
function MJ(n, i, r, l, s, f) {
  return rt(), ra("div", Ql(n.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": n.label,
    class: ["chip-list", { condensed: n.condensed, single: n.single }],
    onKeydown: i[0] || (i[0] = (...h) => n.keydown && n.keydown(...h))
  }), [
    bt(n.$slots, "default", {}, void 0, !0)
  ], 16, NJ);
}
var gJ = /* @__PURE__ */ fn(RJ, [["render", MJ], ["__scopeId", "data-v-1e06f41d"]]);
const ZJ = window.Vue.defineComponent, rn = window.Vue.unref, wl = window.Vue.toDisplayString, sn = window.Vue.createElementVNode, Kd = window.Vue.createTextVNode, JJ = window.Vue.createVNode, kJ = window.Vue.openBlock, yJ = window.Vue.createElementBlock, bJ = window.Vue.createCommentVNode, EJ = window.Vue.pushScopeId, FJ = window.Vue.popScopeId, Zh = (n) => (EJ("data-v-fd60398d"), n = n(), FJ(), n), WJ = {
  key: 0,
  class: "card"
}, SJ = { class: "row" }, AJ = { class: "title" }, xJ = /* @__PURE__ */ Zh(() => /* @__PURE__ */ sn("strong", null, "First Event", -1)), BJ = /* @__PURE__ */ Zh(() => /* @__PURE__ */ sn("strong", null, "Last Event", -1)), CJ = ["innerHTML"], DJ = /* @__PURE__ */ ZJ({
  __name: "AlarmDetail",
  props: {
    id: null
  },
  setup(n) {
    const i = n, l = sh().alarms[i.id];
    return (s, f) => {
      var h;
      return rn(l) ? (kJ(), yJ("div", WJ, [
        sn("div", SJ, [
          sn("div", AJ, "[" + wl(rn(l).id) + "]", 1),
          sn("div", null, [
            xJ,
            Kd(" - " + wl(rn(It)(new Date(rn(l).firstEventTime), "d/M HH:mm:ss")), 1)
          ]),
          sn("div", null, [
            BJ,
            Kd(" - " + wl(rn(It)(new Date(rn(l).lastEvent.createTime), "d/M HH:mm:ss")), 1)
          ]),
          sn("div", null, [
            JJ(ts, {
              severity: (h = rn(l)) == null ? void 0 : h.severity
            }, null, 8, ["severity"])
          ])
        ]),
        sn("div", {
          innerHTML: rn(l).description
        }, null, 8, CJ)
      ])) : bJ("", !0);
    };
  }
});
const QJ = /* @__PURE__ */ Xe(DJ, [["__scopeId", "data-v-fd60398d"]]), OJ = window.Vue.defineComponent, zJ = window.Vue.normalizeClass, GJ = window.Vue.openBlock, YJ = window.Vue.createElementBlock, IJ = window.Vue.createCommentVNode, HJ = /* @__PURE__ */ OJ({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const i = n;
    return (r, l) => i != null && i.severity ? (GJ(), YJ("span", {
      key: 0,
      class: zJ(["circle", [`${i.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : IJ("", !0);
  }
});
const PJ = /* @__PURE__ */ Xe(HJ, [["__scopeId", "data-v-e08880d6"]]), jJ = window.Vue.defineComponent, ci = window.Vue.createElementVNode, Jh = window.Vue.createTextVNode, ni = window.Vue.unref, $d = window.Vue.normalizeClass, Rl = window.Vue.withCtx, Nl = window.Vue.createVNode, ef = window.Vue.renderList, Ml = window.Vue.Fragment, Kn = window.Vue.openBlock, ri = window.Vue.createElementBlock, XJ = window.Vue.toDisplayString, tf = window.Vue.createBlock, _J = window.Vue.pushScopeId, LJ = window.Vue.popScopeId, qJ = (n) => (_J("data-v-4d8a6eca"), n = n(), LJ(), n), KJ = /* @__PURE__ */ qJ(() => /* @__PURE__ */ ci("div", { class: "title" }, "Alarms", -1)), $J = { class: "alarm-filters-container" }, ek = /* @__PURE__ */ Jh(" ALL "), tk = { class: "section" }, nk = { class: "alarm-list" }, nf = window.Vue.ref, rk = window.Vue.watch, ak = window.Vue.computed, ik = /* @__PURE__ */ jJ({
  __name: "AlarmFilters",
  props: {
    relatedAlarms: null
  },
  setup(n) {
    const i = n, r = ak(
      () => ht.exports.keys(ht.exports.groupBy(i.relatedAlarms, "severity"))
    ), l = nf(["all"]), s = nf(i.relatedAlarms), f = (h) => {
      l.value = l.value.filter((m) => m !== "all"), l.value.includes(h) ? l.value = l.value.filter((m) => m !== h) : l.value.push(h), h === "all" || l.value.length === 0 ? (l.value = ["all"], s.value = i.relatedAlarms) : s.value = i.relatedAlarms.filter(
        (m) => l.value.includes(m.severity)
      );
    };
    return rk(i, () => {
      l.value = ["all"], s.value = i.relatedAlarms;
    }), (h, m) => (Kn(), ri(Ml, null, [
      KJ,
      ci("div", $J, [
        (Kn(), tf(ni(gJ), {
          key: l.value.toString(),
          condensed: "",
          class: "alarm-filters",
          label: "Random list for condensed visual testing"
        }, {
          default: Rl(() => [
            Nl(ni(qd), {
              class: $d({ clicked: l.value.includes("all") }),
              onClick: m[0] || (m[0] = (U) => f("all"))
            }, {
              default: Rl(() => [
                ek
              ]),
              _: 1
            }, 8, ["class"]),
            (Kn(!0), ri(Ml, null, ef(ni(r), (U) => (Kn(), tf(ni(qd), {
              class: $d({ clicked: l.value.includes(U) }),
              key: U,
              onClick: (Z) => f(U)
            }, {
              default: Rl(() => [
                Nl(PJ, { severity: U }, null, 8, ["severity"]),
                Jh(XJ(U), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        })),
        ci("div", tk, [
          ci("div", nk, [
            (Kn(!0), ri(Ml, null, ef(s.value, (U) => (Kn(), ri("div", {
              key: U.id
            }, [
              Nl(QJ, {
                id: U.id
              }, null, 8, ["id"])
            ]))), 128))
          ])
        ])
      ])
    ], 64));
  }
});
const ok = /* @__PURE__ */ Xe(ik, [["__scopeId", "data-v-4d8a6eca"]]);
var lk = Object.defineProperty, sk = Object.defineProperties, ck = Object.getOwnPropertyDescriptors, rf = Object.getOwnPropertySymbols, uk = Object.prototype.hasOwnProperty, dk = Object.prototype.propertyIsEnumerable, af = (n, i, r) => i in n ? lk(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Cr = (n, i) => {
  for (var r in i || (i = {}))
    uk.call(i, r) && af(n, r, i[r]);
  if (rf)
    for (var r of rf(i))
      dk.call(i, r) && af(n, r, i[r]);
  return n;
}, of = (n, i) => sk(n, ck(i));
const fk = window.Vue.defineComponent, hk = window.Vue.inject, Dr = window.Vue.h;
var pk = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const mk = {
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
}, Vk = fk({
  inheritAttrs: !1,
  props: mk,
  setup() {
    return { hasTooltip: hk("feather-has-tooltip", !1) };
  },
  render() {
    const n = () => {
      let m = "";
      this.primary && (m = "btn-primary"), this.secondary && (m = "btn-secondary"), (this.text || this.icon) && (m = "btn-text");
      const U = ["btn", "hover", "focus", m];
      return this.icon && (U.push("btn-icon"), U.push("btn-icon-table")), this.onColor && U.push("on-color"), U;
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
var Zi = /* @__PURE__ */ pk(Vk, [["__scopeId", "data-v-702d1074"]]);
const Tk = "/whoami", vk = async () => {
  try {
    const n = await ea.get(Tk);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, Uk = window.Pinia.defineStore, aa = Uk("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const n = await vk();
      n && (this.isAdmin = n.roles.includes("ROLE_ADMIN"), this.userId = n.id);
    },
    async getAlecInfo() {
      const n = await gg();
      n && (this.firstTime = !1, this.allowSave = n.agreed);
    },
    async savePermission(n) {
      if (this.allowSave = n, !n) {
        const i = await Th(n);
        this.allowSave = i;
      }
    }
  }
}), wk = window.Vue.defineComponent, Ot = window.Vue.unref, Qr = window.Vue.normalizeClass, zt = window.Vue.createVNode, $n = window.Vue.openBlock, er = window.Vue.createElementBlock, Rk = window.Vue.createCommentVNode, lf = window.Vue.withCtx, ft = window.Vue.createElementVNode, sf = window.Vue.toDisplayString, Nk = window.Vue.createTextVNode, Mk = window.Vue.Fragment, gk = window.Vue.pushScopeId, Zk = window.Vue.popScopeId, Jk = (n) => (gk("data-v-4e3fbcb0"), n = n(), Zk(), n), kk = { class: "section" }, yk = {
  key: 0,
  class: "btn-row"
}, bk = { key: 0 }, Ek = { key: 1 }, Fk = { key: 0 }, Wk = { key: 1 }, Sk = { class: "situation-detail" }, Ak = { class: "situation-info" }, xk = { class: "id" }, Bk = ["innerHTML"], Ck = /* @__PURE__ */ Jk(() => /* @__PURE__ */ ft("strong", null, "Reduction key:", -1)), Dk = { class: "boxes" }, Qk = { class: "parameters" }, Ok = { class: "section" }, zk = window.Vue.ref, Gk = window.Vue.watch, Yk = /* @__PURE__ */ wk({
  __name: "SituationDetailTab",
  props: {
    alarmInfo: null
  },
  setup(n) {
    const i = n, r = aa(), l = zk(""), s = (f) => {
      var h;
      Jg((h = i.alarmInfo) == null ? void 0 : h.id, f), l.value = f;
    };
    return Gk(i, () => {
      l.value = "";
    }), (f, h) => {
      var m, U, Z, N, k;
      return $n(), er(Mk, null, [
        ft("div", kk, [
          Ot(r).allowSave ? ($n(), er("div", yk, [
            zt(Ot(Zi), {
              class: Qr(["btn", { accepted: l.value == "accepted" }]),
              onClick: h[0] || (h[0] = () => s("accepted"))
            }, {
              default: lf(() => [
                zt(Ot(Nt), {
                  icon: Ot(dg),
                  "aria-hidden": "true",
                  class: Qr(["icon accept", { accepted: l.value == "accepted" }])
                }, null, 8, ["icon", "class"]),
                l.value == "accepted" ? ($n(), er("span", bk, " ACCEPTED")) : ($n(), er("span", Ek, " ACCEPT"))
              ]),
              _: 1
            }, 8, ["class"]),
            zt(Ot(Zi), {
              class: Qr(["btn", { rejected: l.value == "refused" }]),
              onClick: h[1] || (h[1] = () => s("refused"))
            }, {
              default: lf(() => [
                zt(Ot(Nt), {
                  icon: Ot(Rg),
                  "aria-hidden": "true",
                  class: Qr(["icon reject", { rejected: l.value == "refused" }])
                }, null, 8, ["icon", "class"]),
                l.value == "refused" ? ($n(), er("span", Fk, " REJECTED")) : ($n(), er("span", Wk, " REJECT"))
              ]),
              _: 1
            }, 8, ["class"])
          ])) : Rk("", !0),
          ft("div", Sk, [
            ft("div", {
              class: Qr(["severity-line", [`${(U = (m = i.alarmInfo) == null ? void 0 : m.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
            }, null, 2),
            ft("div", Ak, [
              ft("div", xk, [
                ft("div", null, "Situation " + sf((Z = i.alarmInfo) == null ? void 0 : Z.id), 1),
                zt(ts, {
                  severity: (N = i.alarmInfo) == null ? void 0 : N.severity
                }, null, 8, ["severity"])
              ]),
              ft("span", {
                innerHTML: i.alarmInfo.description
              }, null, 8, Bk),
              ft("p", null, [
                Ck,
                Nk(" " + sf(i.alarmInfo.reductionKey), 1)
              ]),
              ft("div", Dk, [
                zt(Cd, {
                  label: "First Event",
                  date: Ot(It)(new Date(i.alarmInfo.firstEventTime), "d/M HH:mm:ss")
                }, null, 8, ["date"]),
                zt(Cd, {
                  label: "Last Event",
                  date: Ot(It)(new Date(i.alarmInfo.lastEvent.time), "d/M HH:mm:ss")
                }, null, 8, ["date"])
              ])
            ]),
            ft("div", Qk, [
              zt(ch, {
                relatedAlarms: (k = i.alarmInfo) == null ? void 0 : k.relatedAlarms,
                size: "large"
              }, null, 8, ["relatedAlarms"])
            ])
          ])
        ]),
        ft("div", Ok, [
          zt(ok, {
            "related-alarms": i.alarmInfo.relatedAlarms
          }, null, 8, ["related-alarms"])
        ])
      ], 64);
    };
  }
});
const Ik = /* @__PURE__ */ Xe(Yk, [["__scopeId", "data-v-4e3fbcb0"]]);
const Hk = window.Vue.watch, Pk = window.Vue.onBeforeUnmount, jk = window.Vue.ref, kh = (n, i) => {
  const r = jk(!1);
  let l = !1;
  const s = (U) => {
    i(U), l = !1;
  };
  function f(U) {
    l || (requestAnimationFrame(() => s(U)), l = !0);
  }
  const h = () => {
    n.value && n.value.removeEventListener("scroll", f, !0);
  }, m = Hk([n, r], ([U, Z], N) => {
    N && N.length && N[0] && N[0].removeEventListener("scroll", f, !0), Z && U ? U.addEventListener("scroll", f, !0) : h();
  }, {
    immediate: !0
  });
  return Pk(() => {
    m(), h();
  }), r;
}, ui = window.Vue.openBlock, Ol = window.Vue.createElementBlock, yh = window.Vue.createElementVNode, Xk = window.Vue.defineComponent, Nn = window.Vue.ref, _k = window.Vue.provide, cf = window.Vue.computed, Lk = window.Vue.onUnmounted, uf = window.Vue.toRef, qk = window.Vue.resolveComponent, Kk = window.Vue.Fragment, $k = window.Vue.createBlock, ey = window.Vue.Teleport, df = window.Vue.createVNode, ty = window.Vue.Transition, ny = window.Vue.withCtx, ry = window.Vue.normalizeClass, ay = window.Vue.normalizeStyle, iy = window.Vue.toDisplayString, oy = window.Vue.createCommentVNode, ly = window.Vue.renderSlot, gl = window.Vue.nextTick;
var bh = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const sy = {}, cy = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, uy = /* @__PURE__ */ yh("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), dy = [
  uy
];
function fy(n, i) {
  return ui(), Ol("svg", cy, dy);
}
var hy = /* @__PURE__ */ bh(sy, [["render", fy]]), Ee = /* @__PURE__ */ ((n) => (n.top = "top", n.bottom = "bottom", n.left = "left", n.right = "right", n))(Ee || {}), Ht = /* @__PURE__ */ ((n) => (n.center = "center", n.left = "left", n.right = "right", n))(Ht || {});
const py = (n, i, r, l = 9) => {
  const s = window.innerHeight - n.bottom, f = window.innerWidth - n.right, h = [];
  n.top >= i.height + l && h.push(Ee.top), s >= i.height + l && h.push(Ee.bottom);
  const m = [];
  f >= i.width + l && m.push(Ee.right), n.left >= i.width + l && m.push(Ee.left);
  let U = [...m, ...h];
  return (r === Ee.top || r === Ee.bottom) && (U = [...h, ...m]), U.indexOf(r) > -1 ? r : U.length ? U[0] : r;
}, my = (n, i, r, l, s = 28) => {
  if (n === Ee.left || n === Ee.right)
    return Ht.center;
  const f = i.left + i.width / 2, h = window.innerWidth - i.right, m = [], U = f, Z = h + i.width / 2, N = r.width - s, k = r.width / 2;
  return U >= k && Z >= k && m.push(Ht.center), Z >= N && m.push(Ht.left), U >= N && m.push(Ht.right), m.indexOf(l) > -1 ? l : m.length ? m[0] : l;
}, Vy = {
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
    default: () => Ht.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, Ty = Xk({
  props: Vy,
  setup(n) {
    const i = Nn(!1), r = Nn(!1), l = ve("feather-tooltip-trigger"), s = ve("feather-tooltip"), f = "data-feather-tooltip";
    _k("feather-has-tooltip", !0);
    let h = 0;
    const m = () => {
      Vi(h), i.value || (h = mi(B, n.enterDelay));
    }, U = () => {
      Vi(h), h = mi(C, n.exitDelay);
    }, Z = (de) => {
      de.keyCode === Ne.ESCAPE && (de.preventDefault(), C(!0));
    }, N = cf(() => ({
      [f]: l,
      "aria-describedby": s
    })), k = {
      mouseenter: m,
      mouseleave: U,
      focus: m,
      blur: U,
      keydown: Z
    }, J = Nn(document), F = kh(J, () => C(!0));
    Lk(() => C(!0));
    const W = () => document.getElementById(s), B = () => {
      r.value = !1, i.value = !0, gl(() => {
        const de = W();
        Ge(de), i.value = !1, gl(() => {
          r.value = !0, i.value = !0, F.value = !0;
        });
      });
    }, C = (de = !1) => {
      ne.value = "", b.value = "", q.value = "", X.value = "", i.value = !1, de && (r.value = !1), F.value = !1;
    }, x = uf(n, "placement"), j = uf(n, "pointerAlignment"), z = 8, $ = 24, b = Nn(""), ne = Nn(""), q = Nn(""), X = Nn(""), Se = cf(() => X.value ? "p-" + X.value : !1), Ge = (de) => {
      const fe = document.querySelector(`[${f}=${l}]`);
      if (!fe) {
        console.log("trigger not found");
        return;
      }
      gl(() => {
        const pe = fe.getBoundingClientRect(), Ue = de.getBoundingClientRect(), ie = py(pe, Ue, x.value, z), Je = my(ie, pe, Ue, j.value, $);
        q.value = Je.toString(), X.value = ie.toString();
        let ke = 0, Ce = 0;
        if ((ie === Ee.left || ie === Ee.right) && (ke = pe.top + pe.height / 2 - Ue.height / 2, ie === Ee.left && (Ce = pe.left - Ue.width - z), ie === Ee.right && (Ce = pe.right)), ie === Ee.top || ie === Ee.bottom) {
          ke = pe.top - Ue.height - z, ie === Ee.bottom && (ke = pe.bottom);
          const dr = pe.left + pe.width / 2;
          switch (Je) {
            case Ht.center:
              Ce = dr - Ue.width / 2;
              break;
            case Ht.left:
              Ce = dr - $;
              break;
            case Ht.right:
              Ce = dr - Ue.width + $;
              break;
          }
        }
        b.value = ke.toString() + "px", ne.value = Ce.toString() + "px";
      });
    };
    return {
      attrs: N,
      listeners: k,
      show: i,
      animate: r,
      alignmentClass: q,
      placementClass: Se,
      top: b,
      left: ne,
      tooltipID: s
    };
  },
  components: {
    Pointer: hy
  }
}), vy = ["id"];
function Uy(n, i, r, l, s, f) {
  const h = qk("Pointer");
  return ui(), Ol(Kk, null, [
    (ui(), $k(ey, { to: "body" }, [
      df(ty, { css: n.animate }, {
        default: ny(() => [
          n.show ? (ui(), Ol("div", {
            key: 0,
            class: ry(["feather-tooltip-container", [n.alignmentClass, n.placementClass]]),
            ref: "tooltip",
            style: ay({ left: n.left, top: n.top })
          }, [
            yh("div", {
              class: "tooltip",
              role: "tooltip",
              id: n.tooltipID
            }, iy(n.title), 9, vy),
            df(h, { class: "tooltip-pointer" })
          ], 6)) : oy("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    ly(n.$slots, "default", {
      attrs: n.attrs,
      on: n.listeners
    }, void 0, !0)
  ], 64);
}
var ff = /* @__PURE__ */ bh(Ty, [["render", Uy], ["__scopeId", "data-v-3da6b22e"]]);
const wy = window.Vue.openBlock, Ry = window.Vue.createElementBlock, Ny = window.Vue.createElementVNode;
var My = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const gy = {}, Zy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Jy = /* @__PURE__ */ Ny("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), ky = [
  Jy
];
function yy(n, i) {
  return wy(), Ry("svg", Zy, ky);
}
var by = /* @__PURE__ */ My(gy, [["render", yy]]);
const Ey = window.Vue.watch, Fy = window.Vue.onBeforeUnmount, Wy = window.Vue.ref, Sy = window.Vue.onMounted, Ay = (n) => {
  const i = Wy(!1);
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
  return Sy(() => {
    const h = Ey(i, (m) => {
      window && m ? window.addEventListener("resize", s) : f();
    }, {
      immediate: !0
    });
    Fy(() => {
      h(), f();
    });
  }), i;
}, xy = window.Vue.watch, By = window.Vue.onBeforeUnmount, Cy = window.Vue.ref, Dy = window.Vue.onMounted, Qy = (n, i) => {
  const r = Cy(!1), l = (h) => {
    h.target === window && i(h);
  }, s = (h) => {
    let m = [];
    Array.isArray(n.value) ? m = n.value : m = [n.value], m.some((Z) => Z && Z.contains(h.target)) || i(h);
  }, f = () => {
    document && window && (document.removeEventListener("click", s, !0), document.removeEventListener("focus", s, !0), window.removeEventListener("blur", l));
  };
  return Dy(() => {
    const h = xy(r, (m) => {
      document && window && m ? (document.addEventListener("click", s, !0), document.addEventListener("focus", s, !0), window.addEventListener("blur", l)) : f();
    }, {
      immediate: !0
    });
    By(() => {
      h(), f();
    });
  }), r;
}, Oy = window.Vue.defineComponent, Gt = window.Vue.ref, hf = window.Vue.toRef, zy = window.Vue.onMounted, Gy = window.Vue.watch, pf = window.Vue.computed, Yy = window.Vue.nextTick, mf = window.Vue.openBlock, Vf = window.Vue.createElementBlock, Tf = window.Vue.renderSlot, Iy = window.Vue.normalizeClass, Hy = window.Vue.normalizeStyle, Py = window.Vue.createCommentVNode;
var jy = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const Xy = {
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
}, _y = {
  "trigger-click": (n) => !0,
  "outside-click": (n) => !0
}, Ly = Oy({
  emits: _y,
  props: Xy,
  setup(n, i) {
    const r = Gt(), l = Gt(), s = hf(n, "open"), f = hf(n, "noExpand"), h = Gt("auto"), m = Gt(), U = Gt(n.triggerId || ve("feather-menu-trigger")), Z = Gt(ve("feather-menu-dropdown")), N = Gt(""), k = Gt("");
    zy(() => {
      m.value = window;
    });
    const J = Gt(!1), F = () => ({
      height: m.value.innerHeight,
      width: m.value.innerWidth,
      left: 0,
      top: 0
    }), W = () => {
      if (!l.value)
        return;
      const b = r.value.getBoundingClientRect();
      J.value = !0, h.value = "auto", Yy(() => {
        let { height: ne, width: q } = l.value.getBoundingClientRect();
        const X = F(), Se = X.height, Ge = X.width;
        n.fill && q < b.width ? (h.value = b.width + "px", q = b.width) : h.value = q + "px";
        let de = 0;
        Se - b.bottom < ne && b.top >= ne ? (de = b.top - ne, n.cover && (de += b.height)) : (de = b.bottom, n.cover && (de -= b.height));
        let fe = n.right ? b.right - q : b.left;
        !n.right && b.right >= q && Ge - b.left < q && (fe = b.right - q), n.right && b.right <= q && Ge - b.left > q && (fe = b.left), k.value = `${fe}px`, N.value = `${de}px`, J.value = !1;
      });
    }, C = Qy(r, (b) => {
      i.emit("outside-click", b);
    }), x = Ay(W), j = kh(m, W);
    Gy([s, l], ([b, ne]) => {
      b && ne && W(), C.value = b, x.value = b, j.value = b;
    });
    const z = pf(() => {
      const b = {
        id: U.value,
        "aria-haspopup": "true"
      };
      return s.value && (b["aria-controls"] = Z.value), f.value || (b["aria-expanded"] = s.value ? "true" : "false"), b;
    }), $ = pf(() => ({
      click: (b) => {
        i.emit("trigger-click", b);
      }
    }));
    return {
      positionTop: N,
      positionLeft: k,
      triggerId: U,
      triggerAttrs: z,
      triggerListeners: $,
      menuId: Z,
      menu: l,
      menuWidth: h,
      root: r,
      calculatePosition: W,
      calculating: J
    };
  }
}), qy = ["data-ref-id"], Ky = ["data-ref-id", "id"];
function $y(n, i, r, l, s, f) {
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
      class: Iy(["feather-menu-dropdown", { hidden: n.calculating }]),
      "data-ref-id": n.dataRefId + "-dropdown",
      ref: "menu",
      id: n.menuId,
      style: Hy({ left: n.positionLeft, top: n.positionTop, width: n.menuWidth })
    }, [
      Tf(n.$slots, "default", { labelId: n.triggerId }, void 0, !0)
    ], 14, Ky)) : Py("", !0)
  ], 8, qy);
}
var eb = /* @__PURE__ */ jy(Ly, [["render", $y], ["__scopeId", "data-v-f75af406"]]);
const tb = window.Vue.defineComponent, nb = window.Vue.openBlock, rb = window.Vue.createElementBlock, ab = window.Vue.normalizeClass, ib = window.Vue.pushScopeId, ob = window.Vue.popScopeId, zl = window.Vue.createElementVNode;
var lb = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const sb = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, cb = {
  click: (n) => !0
}, ub = tb({
  emits: cb,
  props: sb,
  methods: {
    handleClick(n) {
      this.disabled || this.$emit("click", n);
    }
  }
}), Eh = (n) => (ib("data-v-07e020f5"), n = n(), ob(), n), db = /* @__PURE__ */ Eh(() => /* @__PURE__ */ zl("div", { class: "track" }, null, -1)), fb = /* @__PURE__ */ Eh(() => /* @__PURE__ */ zl("div", { class: "switcher" }, [
  /* @__PURE__ */ zl("div", { class: "switch-circle" })
], -1)), hb = [
  db,
  fb
];
function pb(n, i, r, l, s, f) {
  return nb(), rb("div", {
    class: ab(["switch-container", { checked: n.checked, disabled: n.disabled }]),
    onClick: i[0] || (i[0] = (...h) => n.handleClick && n.handleClick(...h))
  }, hb, 2);
}
var mb = /* @__PURE__ */ lb(ub, [["render", pb], ["__scopeId", "data-v-07e020f5"]]), Vb = Object.defineProperty, Tb = Object.defineProperties, vb = Object.getOwnPropertyDescriptors, vf = Object.getOwnPropertySymbols, Ub = Object.prototype.hasOwnProperty, wb = Object.prototype.propertyIsEnumerable, Uf = (n, i, r) => i in n ? Vb(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, wf = (n, i) => {
  for (var r in i || (i = {}))
    Ub.call(i, r) && Uf(n, r, i[r]);
  if (vf)
    for (var r of vf(i))
      wb.call(i, r) && Uf(n, r, i[r]);
  return n;
}, Rf = (n, i) => Tb(n, vb(i));
const Vs = window.Vue.defineComponent, Mn = window.Vue.h, Rb = window.Vue.openBlock, Nb = window.Vue.createElementBlock, Mb = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Fh = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const gb = {
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
}, Zb = Vs({
  inheritAttrs: !1,
  props: gb,
  render() {
    let n;
    this.$slots.icon && this.$slots.icon().findIndex((h) => h.children && h.children.length !== 0 || h.type && h.type.render) !== -1 && (n = Mn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Mn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let l;
    this.$slots.post && (l = Mn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const s = this.disabled ? void 0 : Mn(yn);
    if (this.asLi)
      return Mn("li", Rf(wf({}, this.$attrs), {
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
    const f = Mn("a", Rf(wf({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [n, r, l, s]);
    return Mn("li", {}, [f]);
  }
});
var Ts = /* @__PURE__ */ Fh(Zb, [["__scopeId", "data-v-7c46b2b3"]]);
Vs({
  components: {
    FeatherListItem: Ts
  }
});
const Jb = {}, kb = { class: "feather-list" };
function yb(n, i) {
  return Rb(), Nb("ul", kb, [
    Mb(n.$slots, "default", {}, void 0, !0)
  ]);
}
var bb = /* @__PURE__ */ Fh(Jb, [["render", yb], ["__scopeId", "data-v-941a1d50"]]);
const Eb = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  keydown: (n) => !0
}, Fb = {
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
  emits: Eb,
  props: Fb,
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
  components: { SwitchRender: mb, FeatherListItem: Ts }
});
const Wb = function(n, i) {
  if (!n || !i)
    return;
  let r = n.getBoundingClientRect().height;
  const l = getComputedStyle(n);
  r += parseInt(l.getPropertyValue("margin-top"), 10), r += parseInt(l.getPropertyValue("margin-bottom"), 10), i.scrollTop = n.offsetTop - i.getBoundingClientRect().height + r;
};
var Sb = Object.defineProperty, Ab = Object.defineProperties, xb = Object.getOwnPropertyDescriptors, Nf = Object.getOwnPropertySymbols, Bb = Object.prototype.hasOwnProperty, Cb = Object.prototype.propertyIsEnumerable, Mf = (n, i, r) => i in n ? Sb(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Gl = (n, i) => {
  for (var r in i || (i = {}))
    Bb.call(i, r) && Mf(n, r, i[r]);
  if (Nf)
    for (var r of Nf(i))
      Cb.call(i, r) && Mf(n, r, i[r]);
  return n;
}, Db = (n, i) => Ab(n, xb(i));
const Wh = window.Vue.defineComponent, Jn = window.Vue.resolveComponent, di = window.Vue.openBlock, gf = window.Vue.createBlock, fi = window.Vue.mergeProps, kn = window.Vue.withCtx, Sh = window.Vue.createElementBlock, Qb = window.Vue.Fragment, Ob = window.Vue.renderList, zb = window.Vue.createTextVNode, Gb = window.Vue.toDisplayString, Yb = window.Vue.computed, Zf = window.Vue.toRef, Or = window.Vue.createVNode, Jf = window.Vue.toHandlers, Ib = window.Vue.renderSlot, Hb = window.Vue.normalizeClass, Pb = window.Vue.createElementVNode;
var Ah = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const jb = Wh({
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
        Wb(i, this.$refs.list.$el);
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
    FeatherList: bb,
    FeatherListItem: Ts
  }
});
function Xb(n, i, r, l, s, f) {
  const h = Jn("FeatherListItem"), m = Jn("FeatherList");
  return di(), gf(m, fi(n.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: kn(() => [
      (di(!0), Sh(Qb, null, Ob(n.options, (U, Z) => (di(), gf(h, {
        key: U[n.textProp],
        "as-li": "",
        id: n.getId(Z),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": n.isSelected(Z),
        selected: n.isSelected(Z),
        onClick: (N) => n.select(U)
      }, {
        default: kn(() => [
          zb(Gb(U[n.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var _b = /* @__PURE__ */ Ah(jb, [["render", Xb], ["__scopeId", "data-v-eae820da"]]);
const Lb = Db(Gl(Gl({}, AZ), ds), {
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
}), qb = {
  "update:modelValue": (n) => !0
}, Kb = Wh({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: qb,
  props: Lb,
  setup(n, i) {
    fs(n), xZ(n);
    const r = Yb(() => ve("feather-select-input")), { validate: l } = cs(r, Zf(n, "modelValue"), n.label, n.schema, Zf(n, "error"));
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
    icon: () => by
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
      Vi(this.delayTimeout), this.delayTimeout = mi(() => {
        const n = this.options.filter((i) => i[this.textProp] && i[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        n && n.length && this.select(n[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: JZ,
    InputSubText: ss,
    FeatherMenu: eb,
    List: _b,
    FeatherIcon: Nt
  }
});
function $b(n, i, r, l, s, f) {
  const h = Jn("FeatherIcon"), m = Jn("InputWrapper"), U = Jn("List"), Z = Jn("FeatherMenu"), N = Jn("InputSubText");
  return di(), Sh("div", fi(n.inherittedAttrs, { class: "feather-select-container" }), [
    Or(Z, {
      "no-expand": "",
      fill: "",
      open: n.showMenu,
      onOutsideClick: n.handleOutsideClick,
      onTriggerClick: n.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: kn((k) => [
        Or(m, fi({
          for: n.inputId,
          raised: n.raised,
          focused: n.hasFocus,
          "show-clear": n.showClear,
          onClear: n.handleClear
        }, k.attrs, Jf(k.on), {
          class: ["feather-select-wrapper", { focused: n.hasFocus }]
        }), {
          pre: kn(() => [
            Ib(n.$slots, "pre", {}, void 0, !0)
          ]),
          post: kn(() => [
            Or(h, {
              class: Hb(["feather-select-icon", { rotate: n.showMenu }]),
              icon: n.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: kn(() => [
            Pb("input", fi(n.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Jf(n.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: kn(() => [
        Or(U, {
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
    Or(N, { id: n.subTextId }, null, 8, ["id"])
  ], 16);
}
var e2 = /* @__PURE__ */ Ah(Kb, [["render", $b], ["__scopeId", "data-v-ecb32d90"]]);
const t2 = window.Vue.defineComponent, zr = window.Vue.toDisplayString, nt = window.Vue.createElementVNode, an = window.Vue.unref, Zl = window.Vue.createVNode, n2 = window.Vue.renderList, r2 = window.Vue.Fragment, Jl = window.Vue.openBlock, kl = window.Vue.createElementBlock, kf = window.Vue.toHandlers, yf = window.Vue.mergeProps, bf = window.Vue.withCtx, a2 = window.Vue.normalizeClass, i2 = window.Vue.normalizeStyle, o2 = window.Vue.pushScopeId, l2 = window.Vue.popScopeId, s2 = (n) => (o2("data-v-449ac70f"), n = n(), l2(), n), c2 = { class: "metrics" }, u2 = { class: "section" }, d2 = { class: "id" }, f2 = { class: "section" }, h2 = /* @__PURE__ */ s2(() => /* @__PURE__ */ nt("h4", null, "Alarms", -1)), p2 = { class: "alarms" }, m2 = { class: "times" }, V2 = { class: "alarm-id" }, T2 = /* @__PURE__ */ t2({
  __name: "SituationMetricsTab",
  props: {
    situation: null
  },
  setup(n) {
    const i = n, r = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], l = ref(r[0]), s = ref(i.situation.relatedAlarms), f = ref(
      ht.exports.minBy(i.situation.relatedAlarms, "firstEventTime").firstEventTime
    ), h = ref(
      ht.exports.maxBy(i.situation.relatedAlarms, "lastEventTime").lastEventTime
    ), m = ref(1200 / (h.value - f.value));
    watch(i, () => {
      f.value = ht.exports.minBy(
        i.situation.relatedAlarms,
        "firstEventTime"
      ).firstEventTime, h.value = ht.exports.maxBy(
        i.situation.relatedAlarms,
        "lastEventTime"
      ).lastEventTime, m.value = 1200 / (h.value - f.value), s.value = i.situation.relatedAlarms, l.value = r[0];
    });
    const U = (k, J) => (J - k) * m.value, Z = (k) => (k - f.value) * m.value, N = (k) => {
      if (k.id === 1 && (s.value = i.situation.relatedAlarms), k.id === 2) {
        const J = ht.exports.groupBy(s.value, "severity"), F = J.CRITICAL.concat(J.MAJOR).concat(J.MINOR).concat(J.WARNING);
        s.value = F.filter((W) => W);
      }
      if (k.id === 3) {
        const J = ht.exports.sortBy(
          i.situation.relatedAlarms,
          (F) => F.lastEventTime - F.firstEventTime
        );
        console.log(J), s.value = J;
      }
    };
    return (k, J) => (Jl(), kl("div", c2, [
      nt("div", u2, [
        nt("div", d2, "Situation - [ " + zr(i.situation.id) + " ]", 1),
        nt("div", null, " Duration: " + zr(an(QM)(new Date(h.value), new Date(f.value))), 1)
      ]),
      nt("div", f2, [
        h2,
        Zl(an(e2), {
          class: "select",
          label: "Sort by:",
          options: r,
          modelValue: l.value,
          "onUpdate:modelValue": [
            J[0] || (J[0] = (F) => l.value = F),
            N
          ],
          "text-prop": "name"
        }, null, 8, ["modelValue"]),
        nt("div", p2, [
          nt("div", m2, [
            nt("div", null, zr(an(It)(new Date(f.value), "d/M HH:mm:ss")), 1),
            nt("div", null, zr(an(It)(new Date(h.value), "d/M HH:mm:ss")), 1)
          ]),
          (Jl(!0), kl(r2, null, n2(s.value, (F) => (Jl(), kl("div", {
            class: "timeline",
            key: F.id
          }, [
            nt("div", V2, "[ " + zr(F.id) + " ]", 1),
            Zl(an(ff), {
              title: an(It)(new Date(F.firstEventTime), "d/M HH:mm:ss")
            }, {
              default: bf(({ attrs: W, on: B }) => [
                nt("div", yf({ class: "circle" }, W, kf(B), {
                  class: [`${F.severity.toLowerCase()}-bg dark`],
                  style: {
                    marginLeft: Z(F.firstEventTime) + "px"
                  }
                }), null, 16)
              ]),
              _: 2
            }, 1032, ["title"]),
            nt("div", {
              class: a2(["line", [`${F.severity.toLowerCase()}-bg dark`]]),
              style: i2({
                width: U(F.firstEventTime, F.lastEventTime) + "px"
              })
            }, null, 6),
            Zl(an(ff), {
              title: an(It)(new Date(F.firstEventTime), "d/M HH:mm:ss")
            }, {
              default: bf(({ attrs: W, on: B }) => [
                nt("div", yf({ class: "circle" }, W, kf(B), {
                  class: [`${F.severity.toLowerCase()}-bg dark`]
                }), null, 16)
              ]),
              _: 2
            }, 1032, ["title"])
          ]))), 128))
        ])
      ])
    ]));
  }
});
const v2 = /* @__PURE__ */ Xe(T2, [["__scopeId", "data-v-449ac70f"]]), U2 = window.Vue.defineComponent, xh = window.Vue.createTextVNode, Gr = window.Vue.unref, tr = window.Vue.withCtx, gn = window.Vue.createVNode, w2 = window.Vue.openBlock, R2 = window.Vue.createElementBlock, N2 = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const M2 = {
  key: 0,
  class: "detail"
}, g2 = /* @__PURE__ */ xh("Details"), Z2 = /* @__PURE__ */ xh("Metrics"), J2 = /* @__PURE__ */ U2({
  __name: "SituationDetail",
  props: {
    alarmInfo: null
  },
  setup(n) {
    const i = n;
    return (r, l) => i.alarmInfo ? (w2(), R2("div", M2, [
      gn(Gr(wN), null, {
        tabs: tr(() => [
          gn(Gr(Jd), null, {
            default: tr(() => [
              g2
            ]),
            _: 1
          }),
          gn(Gr(Jd), null, {
            default: tr(() => [
              Z2
            ]),
            _: 1
          })
        ]),
        default: tr(() => [
          gn(Gr(kd), { class: "panel" }, {
            default: tr(() => [
              gn(Ik, {
                "alarm-info": i.alarmInfo
              }, null, 8, ["alarm-info"])
            ]),
            _: 1
          }),
          gn(Gr(kd), { class: "panel" }, {
            default: tr(() => [
              gn(v2, {
                situation: i == null ? void 0 : i.alarmInfo
              }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : N2("", !0);
  }
});
const k2 = /* @__PURE__ */ Xe(J2, [["__scopeId", "data-v-30995a07"]]), y2 = window.Vue.defineComponent, Yl = window.Vue.createElementVNode, Ef = window.Vue.unref, b2 = window.Vue.renderList, E2 = window.Vue.Fragment, yl = window.Vue.openBlock, bl = window.Vue.createElementBlock, Ff = window.Vue.createVNode, F2 = window.Vue.pushScopeId, W2 = window.Vue.popScopeId, S2 = (n) => (F2("data-v-c673a70c"), n = n(), W2(), n), A2 = { class: "list-main" }, x2 = /* @__PURE__ */ S2(() => /* @__PURE__ */ Yl("h2", null, "Situation List", -1)), B2 = { class: "container" }, C2 = { class: "situation-list" }, D2 = window.Vue.reactive, Q2 = /* @__PURE__ */ y2({
  __name: "SituationList",
  setup(n) {
    const i = sh();
    i.getSituations();
    const r = D2({
      selectedSituationIndex: 0,
      situationSelected: ""
    }), l = (s) => {
      r.situationSelected = s, r.selectedSituationIndex = i.situations.findIndex(
        (f) => f.id === s
      );
    };
    return i.$subscribe((s, f) => {
      r.situationSelected = f.situations[0].id;
    }), (s, f) => (yl(), bl("div", A2, [
      x2,
      Yl("div", B2, [
        Yl("div", C2, [
          (yl(!0), bl(E2, null, b2(Ef(i).situations, (h) => (yl(), bl("div", {
            key: h.id
          }, [
            Ff(kR, {
              "alarm-info": h,
              onSituationSelected: l,
              selected: r.situationSelected == h.id
            }, null, 8, ["alarm-info", "selected"])
          ]))), 128))
        ]),
        Ff(k2, {
          "alarm-info": Ef(i).situations[r.selectedSituationIndex]
        }, null, 8, ["alarm-info"])
      ])
    ]));
  }
});
const O2 = /* @__PURE__ */ Xe(Q2, [["__scopeId", "data-v-c673a70c"]]);
var z2 = Object.defineProperty, G2 = Object.defineProperties, Y2 = Object.getOwnPropertyDescriptors, Wf = Object.getOwnPropertySymbols, I2 = Object.prototype.hasOwnProperty, H2 = Object.prototype.propertyIsEnumerable, Sf = (n, i, r) => i in n ? z2(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, hi = (n, i) => {
  for (var r in i || (i = {}))
    I2.call(i, r) && Sf(n, r, i[r]);
  if (Wf)
    for (var r of Wf(i))
      H2.call(i, r) && Sf(n, r, i[r]);
  return n;
}, Bh = (n, i) => G2(n, Y2(i));
const Ch = window.Vue.defineComponent, P2 = window.Vue.ref, _r = window.Vue.computed, j2 = window.Vue.reactive, Af = window.Vue.watch, El = window.Vue.inject, Dh = window.Vue.resolveComponent, Il = window.Vue.openBlock, Qh = window.Vue.createElementBlock, un = window.Vue.createElementVNode, X2 = window.Vue.createBlock, _2 = window.Vue.createCommentVNode, Oh = window.Vue.renderSlot, L2 = window.Vue.pushScopeId, q2 = window.Vue.popScopeId, Fl = window.Vue.toRef, xf = window.Vue.mergeProps, K2 = window.Vue.toDisplayString, $2 = window.Vue.createVNode;
var zh = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const eE = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, tE = Ch({
  props: eE,
  setup(n) {
    const i = P2(), r = () => {
      i.value.focus();
    }, l = _r(() => ve("feather-radio-button")), s = j2({
      first: !1,
      focus: r,
      disabled: n.disabled,
      value: n.value,
      checked: !1,
      id: l.value
    }), f = _r(() => ve("radio-label-id")), h = _r(() => s.first || s.checked ? 0 : -1);
    Af(() => n.disabled, (k) => {
      s.disabled = k;
    }, { immediate: !0 }), Af(() => n.value, (k) => {
      s.value = k;
    }, { immediate: !0 });
    const m = El("register", (k) => {
    }), U = El("blur", (k) => {
    }), Z = El("select", (k) => {
    });
    return m(s), {
      labelId: f,
      tabindex: h,
      vm: s,
      blur: U,
      click: () => {
        Z(s);
      },
      input: i,
      id: l
    };
  },
  components: {
    FeatherRipple: yn
  }
}), nE = (n) => (L2("data-v-24790cf0"), n = n(), q2(), n), rE = { class: "layout-container" }, aE = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], iE = { class: "radio hover focus" }, oE = /* @__PURE__ */ nE(() => /* @__PURE__ */ un("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ un("svg", { class: "dot" }, [
    /* @__PURE__ */ un("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), lE = ["id"];
function sE(n, i, r, l, s, f) {
  const h = Dh("feather-ripple");
  return Il(), Qh("div", rE, [
    un("div", {
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
      un("div", iE, [
        oE,
        n.vm.disabled ? _2("", !0) : (Il(), X2(h, {
          key: 0,
          center: ""
        }))
      ]),
      un("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: n.labelId
      }, [
        Oh(n.$slots, "default", {}, void 0, !0)
      ], 8, lE)
    ], 40, aE)
  ]);
}
var Ji = /* @__PURE__ */ zh(tE, [["render", sE], ["__scopeId", "data-v-24790cf0"]]);
const cE = Bh(hi({}, ds), {
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
}), uE = {
  "update:modelValue": (n) => !0,
  blur: (n) => !0
}, dE = Ch({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: cE,
  emits: uE,
  setup(n, i) {
    fs(n);
    const r = Fl(n, "error"), l = Fl(n, "modelValue"), s = _r(() => ve("feather-input-description")), f = _r(() => {
      const h = Bh(hi({}, i.attrs), {
        class: "",
        "aria-describedby": s.value
      });
      return h["aria-invalid"] || (h["aria-invalid"] = !!r.value), h;
    });
    return hi(hi({
      descriptionId: s,
      attrs: f
    }, Rh(l, i.emit, n.label, n.schema, Fl(n, "error"))), us(i.attrs));
  },
  components: {
    InputSubText: ss
  }
}), fE = ["for"], hE = ["id"];
function pE(n, i, r, l, s, f) {
  const h = Dh("InputSubText");
  return Il(), Qh("div", xf(n.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: n.vertical }]
  }), [
    un("label", {
      for: n.groupId,
      class: "group-label"
    }, K2(n.label), 9, fE),
    un("div", xf(n.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: n.groupId,
      onKeydown: i[0] || (i[0] = (...m) => n.keydown && n.keydown(...m))
    }), [
      Oh(n.$slots, "default", {}, void 0, !0)
    ], 16, hE),
    $2(h, { id: n.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Gh = /* @__PURE__ */ zh(dE, [["render", pE], ["__scopeId", "data-v-6775aeb9"]]);
const mE = window.Vue.openBlock, VE = window.Vue.createElementBlock, TE = window.Vue.createStaticVNode;
var vE = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const UE = {}, wE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RE = /* @__PURE__ */ TE('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), NE = [
  RE
];
function ME(n, i) {
  return mE(), VE("svg", wE, NE);
}
var gE = /* @__PURE__ */ vE(UE, [["render", ME]]);
const ZE = window.Vue.openBlock, JE = window.Vue.createElementBlock, kE = window.Vue.createStaticVNode;
var yE = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const bE = {}, EE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FE = /* @__PURE__ */ kE('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), WE = [
  FE
];
function SE(n, i) {
  return ZE(), JE("svg", EE, WE);
}
var AE = /* @__PURE__ */ yE(bE, [["render", SE]]);
const xE = window.Vue.openBlock, BE = window.Vue.createElementBlock, CE = window.Vue.createElementVNode;
var DE = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const QE = {}, OE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zE = /* @__PURE__ */ CE("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), GE = [
  zE
];
function YE(n, i) {
  return xE(), BE("svg", OE, GE);
}
var IE = /* @__PURE__ */ DE(QE, [["render", YE]]);
const HE = window.Vue.openBlock, PE = window.Vue.createElementBlock, jE = window.Vue.createStaticVNode;
var XE = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const _E = {}, LE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qE = /* @__PURE__ */ jE('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), KE = [
  qE
];
function $E(n, i) {
  return HE(), PE("svg", LE, KE);
}
var eF = /* @__PURE__ */ XE(_E, [["render", $E]]);
const tF = window.Vue.openBlock, nF = window.Vue.createElementBlock, rF = window.Vue.createElementVNode;
var aF = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const iF = {}, oF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lF = /* @__PURE__ */ rF("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), sF = [
  lF
];
function cF(n, i) {
  return tF(), nF("svg", oF, sF);
}
var uF = /* @__PURE__ */ aF(iF, [["render", cF]]);
const Yh = () => window.VRouter || vs, dF = window.Vue.defineComponent, Te = window.Vue.createElementVNode, $r = window.Vue.createTextVNode, ze = window.Vue.unref, Yt = window.Vue.createVNode, ai = window.Vue.withCtx, Bf = window.Vue.openBlock, Cf = window.Vue.createElementBlock, fF = window.Vue.createCommentVNode, hF = window.Vue.pushScopeId, pF = window.Vue.popScopeId, Mt = (n) => (hF("data-v-0fd6b0cd"), n = n(), pF(), n), mF = { class: "container" }, VF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", { class: "title" }, "ALEC", -1)), TF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", { class: "description" }, [
  /* @__PURE__ */ $r(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ Te("br"),
  /* @__PURE__ */ Te("strong", null, "Our goal"),
  /* @__PURE__ */ $r(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), vF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("h3", null, "Key Benefits:", -1)), UF = { class: "list" }, wF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), RF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, "Assist in root cause analysis.", -1)), NF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), MF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, "Easy configuration.", -1)), gF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), ZF = {
  key: 0,
  class: "optin"
}, JF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("h3", null, "Enable ALEC for more precise results:", -1)), kF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), yF = { class: "choices" }, bF = /* @__PURE__ */ Mt(() => /* @__PURE__ */ Te("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), EF = /* @__PURE__ */ $r("Yes"), FF = /* @__PURE__ */ $r("No"), WF = /* @__PURE__ */ $r(" Continue "), SF = window.Vue.ref, AF = /* @__PURE__ */ dF({
  __name: "WelcomePage",
  setup(n) {
    const i = aa(), r = Yh(), l = SF(!0), s = () => {
      const f = Boolean(l.value);
      i.savePermission(f), f ? r.push({ name: "configuration" }) : r.push({ name: "situations" });
    };
    return (f, h) => (Bf(), Cf("div", mF, [
      VF,
      TF,
      Te("div", null, [
        vF,
        Te("div", UF, [
          Te("div", null, [
            Yt(ze(Nt), {
              icon: ze(eF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            wF
          ]),
          Te("div", null, [
            Yt(ze(Nt), {
              icon: ze(IE),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            RF
          ]),
          Te("div", null, [
            Yt(ze(Nt), {
              icon: ze(uF),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            NF
          ]),
          Te("div", null, [
            Yt(ze(Nt), {
              icon: ze(gE),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            MF
          ]),
          Te("div", null, [
            Yt(ze(Nt), {
              icon: ze(AE),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            gF
          ])
        ])
      ]),
      ze(i).isAdmin ? (Bf(), Cf("div", ZF, [
        JF,
        kF,
        Te("div", yF, [
          bF,
          Yt(ze(Gh), {
            horizontal: "",
            modelValue: l.value,
            "onUpdate:modelValue": h[0] || (h[0] = (m) => l.value = m),
            label: ""
          }, {
            default: ai(() => [
              Yt(ze(Ji), { value: !0 }, {
                default: ai(() => [
                  EF
                ]),
                _: 1
              }),
              Yt(ze(Ji), { value: !1 }, {
                default: ai(() => [
                  FF
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : fF("", !0),
      Yt(ze(Zi), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: s
      }, {
        default: ai(() => [
          WF
        ]),
        _: 1
      })
    ]));
  }
});
const xF = /* @__PURE__ */ Xe(AF, [["__scopeId", "data-v-0fd6b0cd"]]), BF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", CF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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";
var DF = Object.defineProperty, QF = Object.defineProperties, OF = Object.getOwnPropertyDescriptors, Df = Object.getOwnPropertySymbols, zF = Object.prototype.hasOwnProperty, GF = Object.prototype.propertyIsEnumerable, Qf = (n, i, r) => i in n ? DF(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r, Hl = (n, i) => {
  for (var r in i || (i = {}))
    zF.call(i, r) && Qf(n, r, i[r]);
  if (Df)
    for (var r of Df(i))
      GF.call(i, r) && Qf(n, r, i[r]);
  return n;
}, Ih = (n, i) => QF(n, OF(i));
const Hh = window.Vue.defineComponent, YF = window.Vue.inject, IF = window.Vue.resolveComponent, Wl = window.Vue.openBlock, Of = window.Vue.createElementBlock, ar = window.Vue.createElementVNode, HF = window.Vue.createBlock, zf = window.Vue.createCommentVNode, PF = window.Vue.renderSlot, jF = window.Vue.pushScopeId, XF = window.Vue.popScopeId, Sl = window.Vue.toRef, ii = window.Vue.computed, _F = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var LF = (n, i) => {
  const r = n.__vccOpts || n;
  for (const [l, s] of i)
    r[l] = s;
  return r;
};
const qF = {
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
}, KF = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  indeterminate: (n) => !0
}, $F = Hh({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: KF,
  props: qF,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: YF("registerCheckbox", (i) => {
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
}), eW = (n) => (jF("data-v-a7af27e2"), n = n(), XF(), n), tW = { class: "layout-container" }, nW = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], rW = { class: "checkbox hover focus" }, aW = /* @__PURE__ */ eW(() => /* @__PURE__ */ ar("div", { class: "box" }, [
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
], -1)), iW = ["id", "for"];
function oW(n, i, r, l, s, f) {
  const h = IF("feather-ripple");
  return Wl(), Of("div", tW, [
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
      ar("div", rW, [
        aW,
        n.disabled ? zf("", !0) : (Wl(), HF(h, {
          key: 0,
          center: ""
        }))
      ]),
      n.label ? zf("", !0) : (Wl(), Of("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: n.labelId,
        for: n.inputId
      }, [
        PF(n.$slots, "default", {}, void 0, !0)
      ], 8, iW))
    ], 40, nW)
  ]);
}
var lW = /* @__PURE__ */ LF($F, [["render", oW], ["__scopeId", "data-v-a7af27e2"]]);
const sW = Ih(Hl({}, ds), {
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
Hh({
  props: sW,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(n, i) {
    fs(n);
    const r = Sl(n, "error"), l = ii(() => ve("feather-checkbox-group")), s = ii(() => ve("feather-input-description")), f = ii(() => ve("feather-input-label")), h = ii(() => {
      const N = JSON.parse(JSON.stringify(i.attrs));
      return N["aria-invalid"] || (N["aria-invalid"] = !!r.value), Ih(Hl({}, N), {
        class: "",
        "aria-describedby": s.value
      });
    }), m = _F(l.value), { validate: U } = cs(m, Sl(n, "modelValue"), n.label, n.schema, Sl(n, "error"));
    return Hl({
      groupId: l,
      inputId: m,
      descriptionId: s,
      labelId: f,
      attrs: h,
      validate: U,
      registerCheckbox: (N) => {
        N && m.value === l.value && (m.value = N);
      }
    }, us(i.attrs));
  },
  components: {
    InputSubText: ss
  }
});
const cW = window.Vue.defineComponent, Ze = window.Vue.createElementVNode, Pl = window.Vue.createTextVNode, on = window.Vue.unref, Yr = window.Vue.withCtx, Ir = window.Vue.createVNode, uW = window.Vue.openBlock, dW = window.Vue.createElementBlock, fW = window.Vue.pushScopeId, hW = window.Vue.popScopeId, Fn = (n) => (fW("data-v-9a5b5f4e"), n = n(), hW(), n), pW = { class: "container" }, mW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Ze("h2", null, "Configuration", -1)), VW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Ze("p", null, [
  /* @__PURE__ */ Pl(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Ze("br"),
  /* @__PURE__ */ Pl(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Ze("strong", null, [
    /* @__PURE__ */ Ze("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), TW = { class: "radio-content" }, vW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Ze("strong", { class: "title" }, "Clustering", -1)), UW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Ze("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), wW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Ze("img", {
  class: "img",
  src: BF
}, null, -1)), RW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Ze("div", { class: "hellinger" }, [
  /* @__PURE__ */ Ze("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Ze("br"),
  /* @__PURE__ */ Ze("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), NW = /* @__PURE__ */ Fn(() => /* @__PURE__ */ Ze("div", { class: "radio-content" }, [
  /* @__PURE__ */ Ze("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Ze("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Ze("img", {
    class: "img img2",
    src: CF
  })
], -1)), MW = /* @__PURE__ */ Pl(" Continue "), Gf = window.Vue.ref, gW = /* @__PURE__ */ cW({
  __name: "ConfigurationPage",
  setup(n) {
    const i = aa(), r = Yh(), l = Gf(!1), s = Gf(nr.ENGINE_DBSCAN), f = () => {
      Th(i.allowSave), Zg(s.value, l.value), r.push({ name: "situations" });
    };
    return (h, m) => (uW(), dW("div", pW, [
      mW,
      VW,
      Ze("div", null, [
        Ir(on(Gh), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: s.value,
          "onUpdate:modelValue": m[1] || (m[1] = (U) => s.value = U)
        }, {
          default: Yr(() => [
            Ir(on(Ji), {
              class: "radio",
              value: on(nr).ENGINE_DBSCAN
            }, {
              default: Yr(() => [
                Ze("div", TW, [
                  vW,
                  UW,
                  wW,
                  Ir(on(lW), {
                    modelValue: l.value,
                    "onUpdate:modelValue": m[0] || (m[0] = (U) => l.value = U),
                    disabled: s.value !== on(nr).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: Yr(() => [
                      RW
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Ir(on(Ji), {
              class: "radio",
              value: on(nr).ENGINE_DEEP_LEARNING
            }, {
              default: Yr(() => [
                NW
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Ir(on(Zi), {
        primary: "",
        class: "btn",
        onClick: m[2] || (m[2] = () => f())
      }, {
        default: Yr(() => [
          MW
        ]),
        _: 1
      })
    ]));
  }
});
const ZW = /* @__PURE__ */ Xe(gW, [["__scopeId", "data-v-9a5b5f4e"]]), JW = window.VueRouter.createRouter, kW = window.VueRouter.createWebHistory, Al = async () => {
  const n = window.VRouter || vs, i = aa();
  i.userId || (await i.getUserRole(), await i.getAlecInfo(), n.push({ name: "home" }));
}, Ph = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (n) => {
      const i = window.VRouter || vs, r = aa();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? i.push({ name: "welcome", params: n.params }) : i.push({ name: "situations", params: n.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => Al(),
    component: xF
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => Al(),
    component: ZW
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => Al(),
    component: O2
  }
], Yf = window.VRouter;
if (Yf)
  for (const n of Ph) {
    const { path: i, name: r, component: l, beforeEnter: s } = n;
    Yf.addRoute("Plugin", {
      path: i.slice(1),
      name: r,
      component: l,
      beforeEnter: s
    });
  }
const vs = JW({
  history: kW(),
  routes: Ph
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = PU;

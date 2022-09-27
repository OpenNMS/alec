const He = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
}, GU = {}, YU = window.Vue.resolveComponent, HU = window.Vue.createVNode, PU = window.Vue.openBlock, _U = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const jU = { class: "main" };
function XU(t, i) {
  const r = YU("router-view");
  return PU(), _U("div", jU, [
    HU(r)
  ]);
}
const LU = /* @__PURE__ */ He(GU, [["render", XU], ["__scopeId", "data-v-5d32d140"]]), qU = window.Vue.defineComponent, KU = window.Vue.openBlock, $U = window.Vue.createBlock, eg = /* @__PURE__ */ qU({
  __name: "App",
  setup(t) {
    return (i, r) => (KU(), $U(LU));
  }
});
var ri = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Dh = { exports: {} }, Ol = { exports: {} }, Ih = function(i, r) {
  return function() {
    for (var l = new Array(arguments.length), u = 0; u < l.length; u++)
      l[u] = arguments[u];
    return i.apply(r, l);
  };
}, ng = Ih, Ql = Object.prototype.toString, zl = function(t) {
  return function(i) {
    var r = Ql.call(i);
    return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Pn(t) {
  return t = t.toLowerCase(), function(r) {
    return zl(r) === t;
  };
}
function Gl(t) {
  return Array.isArray(t);
}
function $o(t) {
  return typeof t > "u";
}
function rg(t) {
  return t !== null && !$o(t) && t.constructor !== null && !$o(t.constructor) && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
}
var Oh = Pn("ArrayBuffer");
function ig(t) {
  var i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(t) : i = t && t.buffer && Oh(t.buffer), i;
}
function og(t) {
  return typeof t == "string";
}
function ag(t) {
  return typeof t == "number";
}
function Qh(t) {
  return t !== null && typeof t == "object";
}
function Po(t) {
  if (zl(t) !== "object")
    return !1;
  var i = Object.getPrototypeOf(t);
  return i === null || i === Object.prototype;
}
var sg = Pn("Date"), lg = Pn("File"), cg = Pn("Blob"), ug = Pn("FileList");
function Yl(t) {
  return Ql.call(t) === "[object Function]";
}
function dg(t) {
  return Qh(t) && Yl(t.pipe);
}
function fg(t) {
  var i = "[object FormData]";
  return t && (typeof FormData == "function" && t instanceof FormData || Ql.call(t) === i || Yl(t.toString) && t.toString() === i);
}
var hg = Pn("URLSearchParams");
function pg(t) {
  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function mg() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Hl(t, i) {
  if (!(t === null || typeof t > "u"))
    if (typeof t != "object" && (t = [t]), Gl(t))
      for (var r = 0, a = t.length; r < a; r++)
        i.call(null, t[r], r, t);
    else
      for (var l in t)
        Object.prototype.hasOwnProperty.call(t, l) && i.call(null, t[l], l, t);
}
function Zl() {
  var t = {};
  function i(l, u) {
    Po(t[u]) && Po(l) ? t[u] = Zl(t[u], l) : Po(l) ? t[u] = Zl({}, l) : Gl(l) ? t[u] = l.slice() : t[u] = l;
  }
  for (var r = 0, a = arguments.length; r < a; r++)
    Hl(arguments[r], i);
  return t;
}
function Vg(t, i, r) {
  return Hl(i, function(l, u) {
    r && typeof l == "function" ? t[u] = ng(l, r) : t[u] = l;
  }), t;
}
function wg(t) {
  return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
}
function vg(t, i, r, a) {
  t.prototype = Object.create(i.prototype, a), t.prototype.constructor = t, r && Object.assign(t.prototype, r);
}
function Tg(t, i, r) {
  var a, l, u, f = {};
  i = i || {};
  do {
    for (a = Object.getOwnPropertyNames(t), l = a.length; l-- > 0; )
      u = a[l], f[u] || (i[u] = t[u], f[u] = !0);
    t = Object.getPrototypeOf(t);
  } while (t && (!r || r(t, i)) && t !== Object.prototype);
  return i;
}
function Ug(t, i, r) {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= i.length;
  var a = t.indexOf(i, r);
  return a !== -1 && a === r;
}
function gg(t) {
  if (!t)
    return null;
  var i = t.length;
  if ($o(i))
    return null;
  for (var r = new Array(i); i-- > 0; )
    r[i] = t[i];
  return r;
}
var Rg = function(t) {
  return function(i) {
    return t && i instanceof t;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Be = {
  isArray: Gl,
  isArrayBuffer: Oh,
  isBuffer: rg,
  isFormData: fg,
  isArrayBufferView: ig,
  isString: og,
  isNumber: ag,
  isObject: Qh,
  isPlainObject: Po,
  isUndefined: $o,
  isDate: sg,
  isFile: lg,
  isBlob: cg,
  isFunction: Yl,
  isStream: dg,
  isURLSearchParams: hg,
  isStandardBrowserEnv: mg,
  forEach: Hl,
  merge: Zl,
  extend: Vg,
  trim: pg,
  stripBOM: wg,
  inherits: vg,
  toFlatObject: Tg,
  kindOf: zl,
  kindOfTest: Pn,
  endsWith: Ug,
  toArray: gg,
  isTypedArray: Rg,
  isFileList: ug
}, dr = Be;
function Dd(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var zh = function(i, r, a) {
  if (!r)
    return i;
  var l;
  if (a)
    l = a(r);
  else if (dr.isURLSearchParams(r))
    l = r.toString();
  else {
    var u = [];
    dr.forEach(r, function(V, U) {
      V === null || typeof V > "u" || (dr.isArray(V) ? U = U + "[]" : V = [V], dr.forEach(V, function(M) {
        dr.isDate(M) ? M = M.toISOString() : dr.isObject(M) && (M = JSON.stringify(M)), u.push(Dd(U) + "=" + Dd(M));
      }));
    }), l = u.join("&");
  }
  if (l) {
    var f = i.indexOf("#");
    f !== -1 && (i = i.slice(0, f)), i += (i.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return i;
}, Ng = Be;
function ua() {
  this.handlers = [];
}
ua.prototype.use = function(i, r, a) {
  return this.handlers.push({
    fulfilled: i,
    rejected: r,
    synchronous: a ? a.synchronous : !1,
    runWhen: a ? a.runWhen : null
  }), this.handlers.length - 1;
};
ua.prototype.eject = function(i) {
  this.handlers[i] && (this.handlers[i] = null);
};
ua.prototype.forEach = function(i) {
  Ng.forEach(this.handlers, function(a) {
    a !== null && i(a);
  });
};
var Mg = ua, yg = Be, kg = function(i, r) {
  yg.forEach(i, function(l, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (i[r] = l, delete i[u]);
  });
}, Gh = Be;
function Zr(t, i, r, a, l) {
  Error.call(this), this.message = t, this.name = "AxiosError", i && (this.code = i), r && (this.config = r), a && (this.request = a), l && (this.response = l);
}
Gh.inherits(Zr, Error, {
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
var Yh = Zr.prototype, Hh = {};
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
  Hh[t] = { value: t };
});
Object.defineProperties(Zr, Hh);
Object.defineProperty(Yh, "isAxiosError", { value: !0 });
Zr.from = function(t, i, r, a, l, u) {
  var f = Object.create(Yh);
  return Gh.toFlatObject(t, f, function(V) {
    return V !== Error.prototype;
  }), Zr.call(f, t.message, i, r, a, l), f.name = t.name, u && Object.assign(f, u), f;
};
var Er = Zr, Ph = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, St = Be;
function Zg(t, i) {
  i = i || new FormData();
  var r = [];
  function a(u) {
    return u === null ? "" : St.isDate(u) ? u.toISOString() : St.isArrayBuffer(u) || St.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function l(u, f) {
    if (St.isPlainObject(u) || St.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + f);
      r.push(u), St.forEach(u, function(V, U) {
        if (!St.isUndefined(V)) {
          var R = f ? f + "." + U : U, M;
          if (V && !f && typeof V == "object") {
            if (St.endsWith(U, "{}"))
              V = JSON.stringify(V);
            else if (St.endsWith(U, "[]") && (M = St.toArray(V))) {
              M.forEach(function(Z) {
                !St.isUndefined(Z) && i.append(R, a(Z));
              });
              return;
            }
          }
          l(V, R);
        }
      }), r.pop();
    } else
      i.append(f, a(u));
  }
  return l(t), i;
}
var _h = Zg, Ps, Id;
function Jg() {
  if (Id)
    return Ps;
  Id = 1;
  var t = Er;
  return Ps = function(r, a, l) {
    var u = l.config.validateStatus;
    !l.status || !u || u(l.status) ? r(l) : a(new t(
      "Request failed with status code " + l.status,
      [t.ERR_BAD_REQUEST, t.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],
      l.config,
      l.request,
      l
    ));
  }, Ps;
}
var _s, Od;
function bg() {
  if (Od)
    return _s;
  Od = 1;
  var t = Be;
  return _s = t.isStandardBrowserEnv() ? function() {
    return {
      write: function(a, l, u, f, p, V) {
        var U = [];
        U.push(a + "=" + encodeURIComponent(l)), t.isNumber(u) && U.push("expires=" + new Date(u).toGMTString()), t.isString(f) && U.push("path=" + f), t.isString(p) && U.push("domain=" + p), V === !0 && U.push("secure"), document.cookie = U.join("; ");
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
  }(), _s;
}
var Eg = function(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}, Sg = function(i, r) {
  return r ? i.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : i;
}, Fg = Eg, Wg = Sg, jh = function(i, r) {
  return i && !Fg(r) ? Wg(i, r) : r;
}, js, Qd;
function Ag() {
  if (Qd)
    return js;
  Qd = 1;
  var t = Be, i = [
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
  return js = function(a) {
    var l = {}, u, f, p;
    return a && t.forEach(a.split(`
`), function(U) {
      if (p = U.indexOf(":"), u = t.trim(U.substr(0, p)).toLowerCase(), f = t.trim(U.substr(p + 1)), u) {
        if (l[u] && i.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? l[u] = (l[u] ? l[u] : []).concat([f]) : l[u] = l[u] ? l[u] + ", " + f : f;
      }
    }), l;
  }, js;
}
var Xs, zd;
function Cg() {
  if (zd)
    return Xs;
  zd = 1;
  var t = Be;
  return Xs = t.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), a = document.createElement("a"), l;
    function u(f) {
      var p = f;
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
    return l = u(window.location.href), function(p) {
      var V = t.isString(p) ? u(p) : p;
      return V.protocol === l.protocol && V.host === l.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Xs;
}
var Ls, Gd;
function da() {
  if (Gd)
    return Ls;
  Gd = 1;
  var t = Er, i = Be;
  function r(a) {
    t.call(this, a == null ? "canceled" : a, t.ERR_CANCELED), this.name = "CanceledError";
  }
  return i.inherits(r, t, {
    __CANCEL__: !0
  }), Ls = r, Ls;
}
var qs, Yd;
function xg() {
  return Yd || (Yd = 1, qs = function(i) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return r && r[1] || "";
  }), qs;
}
var Ks, Hd;
function Pd() {
  if (Hd)
    return Ks;
  Hd = 1;
  var t = Be, i = Jg(), r = bg(), a = zh, l = jh, u = Ag(), f = Cg(), p = Ph, V = Er, U = da(), R = xg();
  return Ks = function(Z) {
    return new Promise(function(W, F) {
      var E = Z.data, S = Z.headers, D = Z.responseType, C;
      function G() {
        Z.cancelToken && Z.cancelToken.unsubscribe(C), Z.signal && Z.signal.removeEventListener("abort", C);
      }
      t.isFormData(E) && t.isStandardBrowserEnv() && delete S["Content-Type"];
      var J = new XMLHttpRequest();
      if (Z.auth) {
        var X = Z.auth.username || "", ee = Z.auth.password ? unescape(encodeURIComponent(Z.auth.password)) : "";
        S.Authorization = "Basic " + btoa(X + ":" + ee);
      }
      var L = l(Z.baseURL, Z.url);
      J.open(Z.method.toUpperCase(), a(L, Z.params, Z.paramsSerializer), !0), J.timeout = Z.timeout;
      function Ie() {
        if (!!J) {
          var me = "getAllResponseHeaders" in J ? u(J.getAllResponseHeaders()) : null, ve = !D || D === "text" || D === "json" ? J.responseText : J.response, Me = {
            data: ve,
            status: J.status,
            statusText: J.statusText,
            headers: me,
            config: Z,
            request: J
          };
          i(function(Fe) {
            W(Fe), G();
          }, function(Fe) {
            F(Fe), G();
          }, Me), J = null;
        }
      }
      if ("onloadend" in J ? J.onloadend = Ie : J.onreadystatechange = function() {
        !J || J.readyState !== 4 || J.status === 0 && !(J.responseURL && J.responseURL.indexOf("file:") === 0) || setTimeout(Ie);
      }, J.onabort = function() {
        !J || (F(new V("Request aborted", V.ECONNABORTED, Z, J)), J = null);
      }, J.onerror = function() {
        F(new V("Network Error", V.ERR_NETWORK, Z, J, J)), J = null;
      }, J.ontimeout = function() {
        var ve = Z.timeout ? "timeout of " + Z.timeout + "ms exceeded" : "timeout exceeded", Me = Z.transitional || p;
        Z.timeoutErrorMessage && (ve = Z.timeoutErrorMessage), F(new V(
          ve,
          Me.clarifyTimeoutError ? V.ETIMEDOUT : V.ECONNABORTED,
          Z,
          J
        )), J = null;
      }, t.isStandardBrowserEnv()) {
        var qe = (Z.withCredentials || f(L)) && Z.xsrfCookieName ? r.read(Z.xsrfCookieName) : void 0;
        qe && (S[Z.xsrfHeaderName] = qe);
      }
      "setRequestHeader" in J && t.forEach(S, function(ve, Me) {
        typeof E > "u" && Me.toLowerCase() === "content-type" ? delete S[Me] : J.setRequestHeader(Me, ve);
      }), t.isUndefined(Z.withCredentials) || (J.withCredentials = !!Z.withCredentials), D && D !== "json" && (J.responseType = Z.responseType), typeof Z.onDownloadProgress == "function" && J.addEventListener("progress", Z.onDownloadProgress), typeof Z.onUploadProgress == "function" && J.upload && J.upload.addEventListener("progress", Z.onUploadProgress), (Z.cancelToken || Z.signal) && (C = function(me) {
        !J || (F(!me || me && me.type ? new U() : me), J.abort(), J = null);
      }, Z.cancelToken && Z.cancelToken.subscribe(C), Z.signal && (Z.signal.aborted ? C() : Z.signal.addEventListener("abort", C))), E || (E = null);
      var pe = R(L);
      if (pe && ["http", "https", "file"].indexOf(pe) === -1) {
        F(new V("Unsupported protocol " + pe + ":", V.ERR_BAD_REQUEST, Z));
        return;
      }
      J.send(E);
    });
  }, Ks;
}
var $s, _d;
function Bg() {
  return _d || (_d = 1, $s = null), $s;
}
var Ee = Be, jd = kg, Xd = Er, Dg = Ph, Ig = _h, Og = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ld(t, i) {
  !Ee.isUndefined(t) && Ee.isUndefined(t["Content-Type"]) && (t["Content-Type"] = i);
}
function Qg() {
  var t;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (t = Pd()), t;
}
function zg(t, i, r) {
  if (Ee.isString(t))
    try {
      return (i || JSON.parse)(t), Ee.trim(t);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (r || JSON.stringify)(t);
}
var fa = {
  transitional: Dg,
  adapter: Qg(),
  transformRequest: [function(i, r) {
    if (jd(r, "Accept"), jd(r, "Content-Type"), Ee.isFormData(i) || Ee.isArrayBuffer(i) || Ee.isBuffer(i) || Ee.isStream(i) || Ee.isFile(i) || Ee.isBlob(i))
      return i;
    if (Ee.isArrayBufferView(i))
      return i.buffer;
    if (Ee.isURLSearchParams(i))
      return Ld(r, "application/x-www-form-urlencoded;charset=utf-8"), i.toString();
    var a = Ee.isObject(i), l = r && r["Content-Type"], u;
    if ((u = Ee.isFileList(i)) || a && l === "multipart/form-data") {
      var f = this.env && this.env.FormData;
      return Ig(u ? { "files[]": i } : i, f && new f());
    } else if (a || l === "application/json")
      return Ld(r, "application/json"), zg(i);
    return i;
  }],
  transformResponse: [function(i) {
    var r = this.transitional || fa.transitional, a = r && r.silentJSONParsing, l = r && r.forcedJSONParsing, u = !a && this.responseType === "json";
    if (u || l && Ee.isString(i) && i.length)
      try {
        return JSON.parse(i);
      } catch (f) {
        if (u)
          throw f.name === "SyntaxError" ? Xd.from(f, Xd.ERR_BAD_RESPONSE, this, null, this.response) : f;
      }
    return i;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Bg()
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
Ee.forEach(["delete", "get", "head"], function(i) {
  fa.headers[i] = {};
});
Ee.forEach(["post", "put", "patch"], function(i) {
  fa.headers[i] = Ee.merge(Og);
});
var Pl = fa, Gg = Be, Yg = Pl, Hg = function(i, r, a) {
  var l = this || Yg;
  return Gg.forEach(a, function(f) {
    i = f.call(l, i, r);
  }), i;
}, el, qd;
function Xh() {
  return qd || (qd = 1, el = function(i) {
    return !!(i && i.__CANCEL__);
  }), el;
}
var Kd = Be, tl = Hg, Pg = Xh(), _g = Pl, jg = da();
function nl(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new jg();
}
var Xg = function(i) {
  nl(i), i.headers = i.headers || {}, i.data = tl.call(
    i,
    i.data,
    i.headers,
    i.transformRequest
  ), i.headers = Kd.merge(
    i.headers.common || {},
    i.headers[i.method] || {},
    i.headers
  ), Kd.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(l) {
      delete i.headers[l];
    }
  );
  var r = i.adapter || _g.adapter;
  return r(i).then(function(l) {
    return nl(i), l.data = tl.call(
      i,
      l.data,
      l.headers,
      i.transformResponse
    ), l;
  }, function(l) {
    return Pg(l) || (nl(i), l && l.response && (l.response.data = tl.call(
      i,
      l.response.data,
      l.response.headers,
      i.transformResponse
    ))), Promise.reject(l);
  });
}, dt = Be, Lh = function(i, r) {
  r = r || {};
  var a = {};
  function l(R, M) {
    return dt.isPlainObject(R) && dt.isPlainObject(M) ? dt.merge(R, M) : dt.isPlainObject(M) ? dt.merge({}, M) : dt.isArray(M) ? M.slice() : M;
  }
  function u(R) {
    if (dt.isUndefined(r[R])) {
      if (!dt.isUndefined(i[R]))
        return l(void 0, i[R]);
    } else
      return l(i[R], r[R]);
  }
  function f(R) {
    if (!dt.isUndefined(r[R]))
      return l(void 0, r[R]);
  }
  function p(R) {
    if (dt.isUndefined(r[R])) {
      if (!dt.isUndefined(i[R]))
        return l(void 0, i[R]);
    } else
      return l(void 0, r[R]);
  }
  function V(R) {
    if (R in r)
      return l(i[R], r[R]);
    if (R in i)
      return l(void 0, i[R]);
  }
  var U = {
    url: f,
    method: f,
    data: f,
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
    validateStatus: V
  };
  return dt.forEach(Object.keys(i).concat(Object.keys(r)), function(M) {
    var Z = U[M] || u, B = Z(M);
    dt.isUndefined(B) && Z !== V || (a[M] = B);
  }), a;
}, rl, $d;
function qh() {
  return $d || ($d = 1, rl = {
    version: "0.27.2"
  }), rl;
}
var Lg = qh().version, Un = Er, _l = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(t, i) {
  _l[t] = function(a) {
    return typeof a === t || "a" + (i < 1 ? "n " : " ") + t;
  };
});
var ef = {};
_l.transitional = function(i, r, a) {
  function l(u, f) {
    return "[Axios v" + Lg + "] Transitional option '" + u + "'" + f + (a ? ". " + a : "");
  }
  return function(u, f, p) {
    if (i === !1)
      throw new Un(
        l(f, " has been removed" + (r ? " in " + r : "")),
        Un.ERR_DEPRECATED
      );
    return r && !ef[f] && (ef[f] = !0, console.warn(
      l(
        f,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), i ? i(u, f, p) : !0;
  };
};
function qg(t, i, r) {
  if (typeof t != "object")
    throw new Un("options must be an object", Un.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(t), l = a.length; l-- > 0; ) {
    var u = a[l], f = i[u];
    if (f) {
      var p = t[u], V = p === void 0 || f(p, u, t);
      if (V !== !0)
        throw new Un("option " + u + " must be " + V, Un.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Un("Unknown option " + u, Un.ERR_BAD_OPTION);
  }
}
var Kg = {
  assertOptions: qg,
  validators: _l
}, Kh = Be, $g = zh, tf = Mg, nf = Xg, ha = Lh, eR = jh, $h = Kg, fr = $h.validators;
function Jr(t) {
  this.defaults = t, this.interceptors = {
    request: new tf(),
    response: new tf()
  };
}
Jr.prototype.request = function(i, r) {
  typeof i == "string" ? (r = r || {}, r.url = i) : r = i || {}, r = ha(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var a = r.transitional;
  a !== void 0 && $h.assertOptions(a, {
    silentJSONParsing: fr.transitional(fr.boolean),
    forcedJSONParsing: fr.transitional(fr.boolean),
    clarifyTimeoutError: fr.transitional(fr.boolean)
  }, !1);
  var l = [], u = !0;
  this.interceptors.request.forEach(function(B) {
    typeof B.runWhen == "function" && B.runWhen(r) === !1 || (u = u && B.synchronous, l.unshift(B.fulfilled, B.rejected));
  });
  var f = [];
  this.interceptors.response.forEach(function(B) {
    f.push(B.fulfilled, B.rejected);
  });
  var p;
  if (!u) {
    var V = [nf, void 0];
    for (Array.prototype.unshift.apply(V, l), V = V.concat(f), p = Promise.resolve(r); V.length; )
      p = p.then(V.shift(), V.shift());
    return p;
  }
  for (var U = r; l.length; ) {
    var R = l.shift(), M = l.shift();
    try {
      U = R(U);
    } catch (Z) {
      M(Z);
      break;
    }
  }
  try {
    p = nf(U);
  } catch (Z) {
    return Promise.reject(Z);
  }
  for (; f.length; )
    p = p.then(f.shift(), f.shift());
  return p;
};
Jr.prototype.getUri = function(i) {
  i = ha(this.defaults, i);
  var r = eR(i.baseURL, i.url);
  return $g(r, i.params, i.paramsSerializer);
};
Kh.forEach(["delete", "get", "head", "options"], function(i) {
  Jr.prototype[i] = function(r, a) {
    return this.request(ha(a || {}, {
      method: i,
      url: r,
      data: (a || {}).data
    }));
  };
});
Kh.forEach(["post", "put", "patch"], function(i) {
  function r(a) {
    return function(u, f, p) {
      return this.request(ha(p || {}, {
        method: i,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: f
      }));
    };
  }
  Jr.prototype[i] = r(), Jr.prototype[i + "Form"] = r(!0);
});
var tR = Jr, il, rf;
function nR() {
  if (rf)
    return il;
  rf = 1;
  var t = da();
  function i(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function(f) {
      a = f;
    });
    var l = this;
    this.promise.then(function(u) {
      if (!!l._listeners) {
        var f, p = l._listeners.length;
        for (f = 0; f < p; f++)
          l._listeners[f](u);
        l._listeners = null;
      }
    }), this.promise.then = function(u) {
      var f, p = new Promise(function(V) {
        l.subscribe(V), f = V;
      }).then(u);
      return p.cancel = function() {
        l.unsubscribe(f);
      }, p;
    }, r(function(f) {
      l.reason || (l.reason = new t(f), a(l.reason));
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
    var a, l = new i(function(f) {
      a = f;
    });
    return {
      token: l,
      cancel: a
    };
  }, il = i, il;
}
var ol, of;
function rR() {
  return of || (of = 1, ol = function(i) {
    return function(a) {
      return i.apply(null, a);
    };
  }), ol;
}
var al, af;
function iR() {
  if (af)
    return al;
  af = 1;
  var t = Be;
  return al = function(r) {
    return t.isObject(r) && r.isAxiosError === !0;
  }, al;
}
var sf = Be, oR = Ih, _o = tR, aR = Lh, sR = Pl;
function ep(t) {
  var i = new _o(t), r = oR(_o.prototype.request, i);
  return sf.extend(r, _o.prototype, i), sf.extend(r, i), r.create = function(l) {
    return ep(aR(t, l));
  }, r;
}
var it = ep(sR);
it.Axios = _o;
it.CanceledError = da();
it.CancelToken = nR();
it.isCancel = Xh();
it.VERSION = qh().version;
it.toFormData = _h;
it.AxiosError = Er;
it.Cancel = it.CanceledError;
it.all = function(i) {
  return Promise.all(i);
};
it.spread = rR();
it.isAxiosError = iR();
Ol.exports = it;
Ol.exports.default = it;
(function(t) {
  t.exports = Ol.exports;
})(Dh);
const tp = /* @__PURE__ */ tg(Dh.exports);
tp.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
});
const Sr = tp.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
}), Ft = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED"
}, lR = "/alec", cR = "/alec/engine/configuration", np = "/alec/agreement/configuration", uR = "/alec/situation", rp = async (t) => {
  try {
    return (await Sr.post(`${np}`, {
      agreed: t
    })).status === 201;
  } catch {
    return !1;
  }
}, dR = async () => {
  try {
    const t = await Sr.get(`${np}`);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, fR = async (t, i) => {
  try {
    return (await Sr.post(cR, {
      distanceMeasureName: i ? Ft.HELLINGER_OPTION : Ft.SPACE_DISTANCE_OPTION,
      engineName: t,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, hR = async (t, i) => {
  try {
    return (await Sr.post(`${lR}/situation/${i}/${t}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, pR = async () => {
  try {
    const t = await Sr.get(uR);
    return t.status === 200, t.data;
  } catch {
    return !1;
  }
};
var Re = { exports: {} };
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
    var r, a = "4.17.21", l = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", p = "Invalid `variable` option passed into `_.template`", V = "__lodash_hash_undefined__", U = 500, R = "__lodash_placeholder__", M = 1, Z = 2, B = 4, W = 1, F = 2, E = 1, S = 2, D = 4, C = 8, G = 16, J = 32, X = 64, ee = 128, L = 256, Ie = 512, qe = 30, pe = "...", me = 800, ve = 16, Me = 1, le = 2, Fe = 3, We = 1 / 0, Pe = 9007199254740991, Ar = 17976931348623157e292, xi = 0 / 0, Ct = 4294967295, tm = Ct - 1, nm = Ct >>> 1, rm = [
      ["ary", ee],
      ["bind", E],
      ["bindKey", S],
      ["curry", C],
      ["curryRight", G],
      ["flip", Ie],
      ["partial", J],
      ["partialRight", X],
      ["rearg", L]
    ], Xn = "[object Arguments]", Bi = "[object Array]", im = "[object AsyncFunction]", Cr = "[object Boolean]", xr = "[object Date]", om = "[object DOMException]", Di = "[object Error]", Ii = "[object Function]", sc = "[object GeneratorFunction]", yt = "[object Map]", Br = "[object Number]", am = "[object Null]", zt = "[object Object]", lc = "[object Promise]", sm = "[object Proxy]", Dr = "[object RegExp]", kt = "[object Set]", Ir = "[object String]", Oi = "[object Symbol]", lm = "[object Undefined]", Or = "[object WeakMap]", cm = "[object WeakSet]", Qr = "[object ArrayBuffer]", Ln = "[object DataView]", ya = "[object Float32Array]", ka = "[object Float64Array]", Za = "[object Int8Array]", Ja = "[object Int16Array]", ba = "[object Int32Array]", Ea = "[object Uint8Array]", Sa = "[object Uint8ClampedArray]", Fa = "[object Uint16Array]", Wa = "[object Uint32Array]", um = /\b__p \+= '';/g, dm = /\b(__p \+=) '' \+/g, fm = /(__e\(.*?\)|\b__t\)) \+\n'';/g, cc = /&(?:amp|lt|gt|quot|#39);/g, uc = /[&<>"']/g, hm = RegExp(cc.source), pm = RegExp(uc.source), mm = /<%-([\s\S]+?)%>/g, Vm = /<%([\s\S]+?)%>/g, dc = /<%=([\s\S]+?)%>/g, wm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vm = /^\w*$/, Tm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Aa = /[\\^$.*+?()[\]{}|]/g, Um = RegExp(Aa.source), Ca = /^\s+/, gm = /\s/, Rm = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Nm = /\{\n\/\* \[wrapped with (.+)\] \*/, Mm = /,? & /, ym = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, km = /[()=,{}\[\]\/\s]/, Zm = /\\(\\)?/g, Jm = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, fc = /\w*$/, bm = /^[-+]0x[0-9a-f]+$/i, Em = /^0b[01]+$/i, Sm = /^\[object .+?Constructor\]$/, Fm = /^0o[0-7]+$/i, Wm = /^(?:0|[1-9]\d*)$/, Am = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Qi = /($^)/, Cm = /['\n\r\u2028\u2029\\]/g, zi = "\\ud800-\\udfff", xm = "\\u0300-\\u036f", Bm = "\\ufe20-\\ufe2f", Dm = "\\u20d0-\\u20ff", hc = xm + Bm + Dm, pc = "\\u2700-\\u27bf", mc = "a-z\\xdf-\\xf6\\xf8-\\xff", Im = "\\xac\\xb1\\xd7\\xf7", Om = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Qm = "\\u2000-\\u206f", zm = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Vc = "A-Z\\xc0-\\xd6\\xd8-\\xde", wc = "\\ufe0e\\ufe0f", vc = Im + Om + Qm + zm, xa = "['\u2019]", Gm = "[" + zi + "]", Tc = "[" + vc + "]", Gi = "[" + hc + "]", Uc = "\\d+", Ym = "[" + pc + "]", gc = "[" + mc + "]", Rc = "[^" + zi + vc + Uc + pc + mc + Vc + "]", Ba = "\\ud83c[\\udffb-\\udfff]", Hm = "(?:" + Gi + "|" + Ba + ")", Nc = "[^" + zi + "]", Da = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ia = "[\\ud800-\\udbff][\\udc00-\\udfff]", qn = "[" + Vc + "]", Mc = "\\u200d", yc = "(?:" + gc + "|" + Rc + ")", Pm = "(?:" + qn + "|" + Rc + ")", kc = "(?:" + xa + "(?:d|ll|m|re|s|t|ve))?", Zc = "(?:" + xa + "(?:D|LL|M|RE|S|T|VE))?", Jc = Hm + "?", bc = "[" + wc + "]?", _m = "(?:" + Mc + "(?:" + [Nc, Da, Ia].join("|") + ")" + bc + Jc + ")*", jm = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Xm = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ec = bc + Jc + _m, Lm = "(?:" + [Ym, Da, Ia].join("|") + ")" + Ec, qm = "(?:" + [Nc + Gi + "?", Gi, Da, Ia, Gm].join("|") + ")", Km = RegExp(xa, "g"), $m = RegExp(Gi, "g"), Oa = RegExp(Ba + "(?=" + Ba + ")|" + qm + Ec, "g"), e1 = RegExp([
      qn + "?" + gc + "+" + kc + "(?=" + [Tc, qn, "$"].join("|") + ")",
      Pm + "+" + Zc + "(?=" + [Tc, qn + yc, "$"].join("|") + ")",
      qn + "?" + yc + "+" + kc,
      qn + "+" + Zc,
      Xm,
      jm,
      Uc,
      Lm
    ].join("|"), "g"), t1 = RegExp("[" + Mc + zi + hc + wc + "]"), n1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, r1 = [
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
    ], i1 = -1, de = {};
    de[ya] = de[ka] = de[Za] = de[Ja] = de[ba] = de[Ea] = de[Sa] = de[Fa] = de[Wa] = !0, de[Xn] = de[Bi] = de[Qr] = de[Cr] = de[Ln] = de[xr] = de[Di] = de[Ii] = de[yt] = de[Br] = de[zt] = de[Dr] = de[kt] = de[Ir] = de[Or] = !1;
    var ue = {};
    ue[Xn] = ue[Bi] = ue[Qr] = ue[Ln] = ue[Cr] = ue[xr] = ue[ya] = ue[ka] = ue[Za] = ue[Ja] = ue[ba] = ue[yt] = ue[Br] = ue[zt] = ue[Dr] = ue[kt] = ue[Ir] = ue[Oi] = ue[Ea] = ue[Sa] = ue[Fa] = ue[Wa] = !0, ue[Di] = ue[Ii] = ue[Or] = !1;
    var o1 = {
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
    }, a1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, s1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, l1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, c1 = parseFloat, u1 = parseInt, Sc = typeof ri == "object" && ri && ri.Object === Object && ri, d1 = typeof self == "object" && self && self.Object === Object && self, Ae = Sc || d1 || Function("return this")(), Qa = i && !i.nodeType && i, kn = Qa && !0 && t && !t.nodeType && t, Fc = kn && kn.exports === Qa, za = Fc && Sc.process, pt = function() {
      try {
        var v = kn && kn.require && kn.require("util").types;
        return v || za && za.binding && za.binding("util");
      } catch {
      }
    }(), Wc = pt && pt.isArrayBuffer, Ac = pt && pt.isDate, Cc = pt && pt.isMap, xc = pt && pt.isRegExp, Bc = pt && pt.isSet, Dc = pt && pt.isTypedArray;
    function ot(v, N, g) {
      switch (g.length) {
        case 0:
          return v.call(N);
        case 1:
          return v.call(N, g[0]);
        case 2:
          return v.call(N, g[0], g[1]);
        case 3:
          return v.call(N, g[0], g[1], g[2]);
      }
      return v.apply(N, g);
    }
    function f1(v, N, g, x) {
      for (var Y = -1, ne = v == null ? 0 : v.length; ++Y < ne; ) {
        var ke = v[Y];
        N(x, ke, g(ke), v);
      }
      return x;
    }
    function mt(v, N) {
      for (var g = -1, x = v == null ? 0 : v.length; ++g < x && N(v[g], g, v) !== !1; )
        ;
      return v;
    }
    function h1(v, N) {
      for (var g = v == null ? 0 : v.length; g-- && N(v[g], g, v) !== !1; )
        ;
      return v;
    }
    function Ic(v, N) {
      for (var g = -1, x = v == null ? 0 : v.length; ++g < x; )
        if (!N(v[g], g, v))
          return !1;
      return !0;
    }
    function sn(v, N) {
      for (var g = -1, x = v == null ? 0 : v.length, Y = 0, ne = []; ++g < x; ) {
        var ke = v[g];
        N(ke, g, v) && (ne[Y++] = ke);
      }
      return ne;
    }
    function Yi(v, N) {
      var g = v == null ? 0 : v.length;
      return !!g && Kn(v, N, 0) > -1;
    }
    function Ga(v, N, g) {
      for (var x = -1, Y = v == null ? 0 : v.length; ++x < Y; )
        if (g(N, v[x]))
          return !0;
      return !1;
    }
    function fe(v, N) {
      for (var g = -1, x = v == null ? 0 : v.length, Y = Array(x); ++g < x; )
        Y[g] = N(v[g], g, v);
      return Y;
    }
    function ln(v, N) {
      for (var g = -1, x = N.length, Y = v.length; ++g < x; )
        v[Y + g] = N[g];
      return v;
    }
    function Ya(v, N, g, x) {
      var Y = -1, ne = v == null ? 0 : v.length;
      for (x && ne && (g = v[++Y]); ++Y < ne; )
        g = N(g, v[Y], Y, v);
      return g;
    }
    function p1(v, N, g, x) {
      var Y = v == null ? 0 : v.length;
      for (x && Y && (g = v[--Y]); Y--; )
        g = N(g, v[Y], Y, v);
      return g;
    }
    function Ha(v, N) {
      for (var g = -1, x = v == null ? 0 : v.length; ++g < x; )
        if (N(v[g], g, v))
          return !0;
      return !1;
    }
    var m1 = Pa("length");
    function V1(v) {
      return v.split("");
    }
    function w1(v) {
      return v.match(ym) || [];
    }
    function Oc(v, N, g) {
      var x;
      return g(v, function(Y, ne, ke) {
        if (N(Y, ne, ke))
          return x = ne, !1;
      }), x;
    }
    function Hi(v, N, g, x) {
      for (var Y = v.length, ne = g + (x ? 1 : -1); x ? ne-- : ++ne < Y; )
        if (N(v[ne], ne, v))
          return ne;
      return -1;
    }
    function Kn(v, N, g) {
      return N === N ? b1(v, N, g) : Hi(v, Qc, g);
    }
    function v1(v, N, g, x) {
      for (var Y = g - 1, ne = v.length; ++Y < ne; )
        if (x(v[Y], N))
          return Y;
      return -1;
    }
    function Qc(v) {
      return v !== v;
    }
    function zc(v, N) {
      var g = v == null ? 0 : v.length;
      return g ? ja(v, N) / g : xi;
    }
    function Pa(v) {
      return function(N) {
        return N == null ? r : N[v];
      };
    }
    function _a(v) {
      return function(N) {
        return v == null ? r : v[N];
      };
    }
    function Gc(v, N, g, x, Y) {
      return Y(v, function(ne, ke, ce) {
        g = x ? (x = !1, ne) : N(g, ne, ke, ce);
      }), g;
    }
    function T1(v, N) {
      var g = v.length;
      for (v.sort(N); g--; )
        v[g] = v[g].value;
      return v;
    }
    function ja(v, N) {
      for (var g, x = -1, Y = v.length; ++x < Y; ) {
        var ne = N(v[x]);
        ne !== r && (g = g === r ? ne : g + ne);
      }
      return g;
    }
    function Xa(v, N) {
      for (var g = -1, x = Array(v); ++g < v; )
        x[g] = N(g);
      return x;
    }
    function U1(v, N) {
      return fe(N, function(g) {
        return [g, v[g]];
      });
    }
    function Yc(v) {
      return v && v.slice(0, jc(v) + 1).replace(Ca, "");
    }
    function at(v) {
      return function(N) {
        return v(N);
      };
    }
    function La(v, N) {
      return fe(N, function(g) {
        return v[g];
      });
    }
    function zr(v, N) {
      return v.has(N);
    }
    function Hc(v, N) {
      for (var g = -1, x = v.length; ++g < x && Kn(N, v[g], 0) > -1; )
        ;
      return g;
    }
    function Pc(v, N) {
      for (var g = v.length; g-- && Kn(N, v[g], 0) > -1; )
        ;
      return g;
    }
    function g1(v, N) {
      for (var g = v.length, x = 0; g--; )
        v[g] === N && ++x;
      return x;
    }
    var R1 = _a(o1), N1 = _a(a1);
    function M1(v) {
      return "\\" + l1[v];
    }
    function y1(v, N) {
      return v == null ? r : v[N];
    }
    function $n(v) {
      return t1.test(v);
    }
    function k1(v) {
      return n1.test(v);
    }
    function Z1(v) {
      for (var N, g = []; !(N = v.next()).done; )
        g.push(N.value);
      return g;
    }
    function qa(v) {
      var N = -1, g = Array(v.size);
      return v.forEach(function(x, Y) {
        g[++N] = [Y, x];
      }), g;
    }
    function _c(v, N) {
      return function(g) {
        return v(N(g));
      };
    }
    function cn(v, N) {
      for (var g = -1, x = v.length, Y = 0, ne = []; ++g < x; ) {
        var ke = v[g];
        (ke === N || ke === R) && (v[g] = R, ne[Y++] = g);
      }
      return ne;
    }
    function Pi(v) {
      var N = -1, g = Array(v.size);
      return v.forEach(function(x) {
        g[++N] = x;
      }), g;
    }
    function J1(v) {
      var N = -1, g = Array(v.size);
      return v.forEach(function(x) {
        g[++N] = [x, x];
      }), g;
    }
    function b1(v, N, g) {
      for (var x = g - 1, Y = v.length; ++x < Y; )
        if (v[x] === N)
          return x;
      return -1;
    }
    function E1(v, N, g) {
      for (var x = g + 1; x--; )
        if (v[x] === N)
          return x;
      return x;
    }
    function er(v) {
      return $n(v) ? F1(v) : m1(v);
    }
    function Zt(v) {
      return $n(v) ? W1(v) : V1(v);
    }
    function jc(v) {
      for (var N = v.length; N-- && gm.test(v.charAt(N)); )
        ;
      return N;
    }
    var S1 = _a(s1);
    function F1(v) {
      for (var N = Oa.lastIndex = 0; Oa.test(v); )
        ++N;
      return N;
    }
    function W1(v) {
      return v.match(Oa) || [];
    }
    function A1(v) {
      return v.match(e1) || [];
    }
    var C1 = function v(N) {
      N = N == null ? Ae : tr.defaults(Ae.Object(), N, tr.pick(Ae, r1));
      var g = N.Array, x = N.Date, Y = N.Error, ne = N.Function, ke = N.Math, ce = N.Object, Ka = N.RegExp, x1 = N.String, Vt = N.TypeError, _i = g.prototype, B1 = ne.prototype, nr = ce.prototype, ji = N["__core-js_shared__"], Xi = B1.toString, oe = nr.hasOwnProperty, D1 = 0, Xc = function() {
        var e = /[^.]+$/.exec(ji && ji.keys && ji.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Li = nr.toString, I1 = Xi.call(ce), O1 = Ae._, Q1 = Ka(
        "^" + Xi.call(oe).replace(Aa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), qi = Fc ? N.Buffer : r, un = N.Symbol, Ki = N.Uint8Array, Lc = qi ? qi.allocUnsafe : r, $i = _c(ce.getPrototypeOf, ce), qc = ce.create, Kc = nr.propertyIsEnumerable, eo = _i.splice, $c = un ? un.isConcatSpreadable : r, Gr = un ? un.iterator : r, Zn = un ? un.toStringTag : r, to = function() {
        try {
          var e = Fn(ce, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), z1 = N.clearTimeout !== Ae.clearTimeout && N.clearTimeout, G1 = x && x.now !== Ae.Date.now && x.now, Y1 = N.setTimeout !== Ae.setTimeout && N.setTimeout, no = ke.ceil, ro = ke.floor, $a = ce.getOwnPropertySymbols, H1 = qi ? qi.isBuffer : r, eu = N.isFinite, P1 = _i.join, _1 = _c(ce.keys, ce), Ze = ke.max, Oe = ke.min, j1 = x.now, X1 = N.parseInt, tu = ke.random, L1 = _i.reverse, es = Fn(N, "DataView"), Yr = Fn(N, "Map"), ts = Fn(N, "Promise"), rr = Fn(N, "Set"), Hr = Fn(N, "WeakMap"), Pr = Fn(ce, "create"), io = Hr && new Hr(), ir = {}, q1 = Wn(es), K1 = Wn(Yr), $1 = Wn(ts), eV = Wn(rr), tV = Wn(Hr), oo = un ? un.prototype : r, _r = oo ? oo.valueOf : r, nu = oo ? oo.toString : r;
      function d(e) {
        if (Ve(e) && !H(e) && !(e instanceof $)) {
          if (e instanceof wt)
            return e;
          if (oe.call(e, "__wrapped__"))
            return rd(e);
        }
        return new wt(e);
      }
      var or = function() {
        function e() {
        }
        return function(n) {
          if (!he(n))
            return {};
          if (qc)
            return qc(n);
          e.prototype = n;
          var o = new e();
          return e.prototype = r, o;
        };
      }();
      function ao() {
      }
      function wt(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      d.templateSettings = {
        escape: mm,
        evaluate: Vm,
        interpolate: dc,
        variable: "",
        imports: {
          _: d
        }
      }, d.prototype = ao.prototype, d.prototype.constructor = d, wt.prototype = or(ao.prototype), wt.prototype.constructor = wt;
      function $(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ct, this.__views__ = [];
      }
      function nV() {
        var e = new $(this.__wrapped__);
        return e.__actions__ = Ke(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ke(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ke(this.__views__), e;
      }
      function rV() {
        if (this.__filtered__) {
          var e = new $(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function iV() {
        var e = this.__wrapped__.value(), n = this.__dir__, o = H(e), s = n < 0, c = o ? e.length : 0, h = V0(0, c, this.__views__), m = h.start, w = h.end, T = w - m, y = s ? w : m - 1, k = this.__iteratees__, b = k.length, A = 0, I = Oe(T, this.__takeCount__);
        if (!o || !s && c == T && I == T)
          return ku(e, this.__actions__);
        var Q = [];
        e:
          for (; T-- && A < I; ) {
            y += n;
            for (var _ = -1, z = e[y]; ++_ < b; ) {
              var K = k[_], te = K.iteratee, ct = K.type, Xe = te(z);
              if (ct == le)
                z = Xe;
              else if (!Xe) {
                if (ct == Me)
                  continue e;
                break e;
              }
            }
            Q[A++] = z;
          }
        return Q;
      }
      $.prototype = or(ao.prototype), $.prototype.constructor = $;
      function Jn(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function oV() {
        this.__data__ = Pr ? Pr(null) : {}, this.size = 0;
      }
      function aV(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function sV(e) {
        var n = this.__data__;
        if (Pr) {
          var o = n[e];
          return o === V ? r : o;
        }
        return oe.call(n, e) ? n[e] : r;
      }
      function lV(e) {
        var n = this.__data__;
        return Pr ? n[e] !== r : oe.call(n, e);
      }
      function cV(e, n) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = Pr && n === r ? V : n, this;
      }
      Jn.prototype.clear = oV, Jn.prototype.delete = aV, Jn.prototype.get = sV, Jn.prototype.has = lV, Jn.prototype.set = cV;
      function Gt(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function uV() {
        this.__data__ = [], this.size = 0;
      }
      function dV(e) {
        var n = this.__data__, o = so(n, e);
        if (o < 0)
          return !1;
        var s = n.length - 1;
        return o == s ? n.pop() : eo.call(n, o, 1), --this.size, !0;
      }
      function fV(e) {
        var n = this.__data__, o = so(n, e);
        return o < 0 ? r : n[o][1];
      }
      function hV(e) {
        return so(this.__data__, e) > -1;
      }
      function pV(e, n) {
        var o = this.__data__, s = so(o, e);
        return s < 0 ? (++this.size, o.push([e, n])) : o[s][1] = n, this;
      }
      Gt.prototype.clear = uV, Gt.prototype.delete = dV, Gt.prototype.get = fV, Gt.prototype.has = hV, Gt.prototype.set = pV;
      function Yt(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var s = e[n];
          this.set(s[0], s[1]);
        }
      }
      function mV() {
        this.size = 0, this.__data__ = {
          hash: new Jn(),
          map: new (Yr || Gt)(),
          string: new Jn()
        };
      }
      function VV(e) {
        var n = Uo(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function wV(e) {
        return Uo(this, e).get(e);
      }
      function vV(e) {
        return Uo(this, e).has(e);
      }
      function TV(e, n) {
        var o = Uo(this, e), s = o.size;
        return o.set(e, n), this.size += o.size == s ? 0 : 1, this;
      }
      Yt.prototype.clear = mV, Yt.prototype.delete = VV, Yt.prototype.get = wV, Yt.prototype.has = vV, Yt.prototype.set = TV;
      function bn(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new Yt(); ++n < o; )
          this.add(e[n]);
      }
      function UV(e) {
        return this.__data__.set(e, V), this;
      }
      function gV(e) {
        return this.__data__.has(e);
      }
      bn.prototype.add = bn.prototype.push = UV, bn.prototype.has = gV;
      function Jt(e) {
        var n = this.__data__ = new Gt(e);
        this.size = n.size;
      }
      function RV() {
        this.__data__ = new Gt(), this.size = 0;
      }
      function NV(e) {
        var n = this.__data__, o = n.delete(e);
        return this.size = n.size, o;
      }
      function MV(e) {
        return this.__data__.get(e);
      }
      function yV(e) {
        return this.__data__.has(e);
      }
      function kV(e, n) {
        var o = this.__data__;
        if (o instanceof Gt) {
          var s = o.__data__;
          if (!Yr || s.length < l - 1)
            return s.push([e, n]), this.size = ++o.size, this;
          o = this.__data__ = new Yt(s);
        }
        return o.set(e, n), this.size = o.size, this;
      }
      Jt.prototype.clear = RV, Jt.prototype.delete = NV, Jt.prototype.get = MV, Jt.prototype.has = yV, Jt.prototype.set = kV;
      function ru(e, n) {
        var o = H(e), s = !o && An(e), c = !o && !s && mn(e), h = !o && !s && !c && cr(e), m = o || s || c || h, w = m ? Xa(e.length, x1) : [], T = w.length;
        for (var y in e)
          (n || oe.call(e, y)) && !(m && (y == "length" || c && (y == "offset" || y == "parent") || h && (y == "buffer" || y == "byteLength" || y == "byteOffset") || jt(y, T))) && w.push(y);
        return w;
      }
      function iu(e) {
        var n = e.length;
        return n ? e[fs(0, n - 1)] : r;
      }
      function ZV(e, n) {
        return go(Ke(e), En(n, 0, e.length));
      }
      function JV(e) {
        return go(Ke(e));
      }
      function ns(e, n, o) {
        (o !== r && !bt(e[n], o) || o === r && !(n in e)) && Ht(e, n, o);
      }
      function jr(e, n, o) {
        var s = e[n];
        (!(oe.call(e, n) && bt(s, o)) || o === r && !(n in e)) && Ht(e, n, o);
      }
      function so(e, n) {
        for (var o = e.length; o--; )
          if (bt(e[o][0], n))
            return o;
        return -1;
      }
      function bV(e, n, o, s) {
        return dn(e, function(c, h, m) {
          n(s, c, o(c), m);
        }), s;
      }
      function ou(e, n) {
        return e && Bt(n, be(n), e);
      }
      function EV(e, n) {
        return e && Bt(n, et(n), e);
      }
      function Ht(e, n, o) {
        n == "__proto__" && to ? to(e, n, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[n] = o;
      }
      function rs(e, n) {
        for (var o = -1, s = n.length, c = g(s), h = e == null; ++o < s; )
          c[o] = h ? r : Bs(e, n[o]);
        return c;
      }
      function En(e, n, o) {
        return e === e && (o !== r && (e = e <= o ? e : o), n !== r && (e = e >= n ? e : n)), e;
      }
      function vt(e, n, o, s, c, h) {
        var m, w = n & M, T = n & Z, y = n & B;
        if (o && (m = c ? o(e, s, c, h) : o(e)), m !== r)
          return m;
        if (!he(e))
          return e;
        var k = H(e);
        if (k) {
          if (m = v0(e), !w)
            return Ke(e, m);
        } else {
          var b = Qe(e), A = b == Ii || b == sc;
          if (mn(e))
            return bu(e, w);
          if (b == zt || b == Xn || A && !c) {
            if (m = T || A ? {} : ju(e), !w)
              return T ? s0(e, EV(m, e)) : a0(e, ou(m, e));
          } else {
            if (!ue[b])
              return c ? e : {};
            m = T0(e, b, w);
          }
        }
        h || (h = new Jt());
        var I = h.get(e);
        if (I)
          return I;
        h.set(e, m), Nd(e) ? e.forEach(function(z) {
          m.add(vt(z, n, o, z, e, h));
        }) : gd(e) && e.forEach(function(z, K) {
          m.set(K, vt(z, n, o, K, e, h));
        });
        var Q = y ? T ? Ns : Rs : T ? et : be, _ = k ? r : Q(e);
        return mt(_ || e, function(z, K) {
          _ && (K = z, z = e[K]), jr(m, K, vt(z, n, o, K, e, h));
        }), m;
      }
      function SV(e) {
        var n = be(e);
        return function(o) {
          return au(o, e, n);
        };
      }
      function au(e, n, o) {
        var s = o.length;
        if (e == null)
          return !s;
        for (e = ce(e); s--; ) {
          var c = o[s], h = n[c], m = e[c];
          if (m === r && !(c in e) || !h(m))
            return !1;
        }
        return !0;
      }
      function su(e, n, o) {
        if (typeof e != "function")
          throw new Vt(f);
        return ti(function() {
          e.apply(r, o);
        }, n);
      }
      function Xr(e, n, o, s) {
        var c = -1, h = Yi, m = !0, w = e.length, T = [], y = n.length;
        if (!w)
          return T;
        o && (n = fe(n, at(o))), s ? (h = Ga, m = !1) : n.length >= l && (h = zr, m = !1, n = new bn(n));
        e:
          for (; ++c < w; ) {
            var k = e[c], b = o == null ? k : o(k);
            if (k = s || k !== 0 ? k : 0, m && b === b) {
              for (var A = y; A--; )
                if (n[A] === b)
                  continue e;
              T.push(k);
            } else
              h(n, b, s) || T.push(k);
          }
        return T;
      }
      var dn = Au(xt), lu = Au(os, !0);
      function FV(e, n) {
        var o = !0;
        return dn(e, function(s, c, h) {
          return o = !!n(s, c, h), o;
        }), o;
      }
      function lo(e, n, o) {
        for (var s = -1, c = e.length; ++s < c; ) {
          var h = e[s], m = n(h);
          if (m != null && (w === r ? m === m && !lt(m) : o(m, w)))
            var w = m, T = h;
        }
        return T;
      }
      function WV(e, n, o, s) {
        var c = e.length;
        for (o = P(o), o < 0 && (o = -o > c ? 0 : c + o), s = s === r || s > c ? c : P(s), s < 0 && (s += c), s = o > s ? 0 : yd(s); o < s; )
          e[o++] = n;
        return e;
      }
      function cu(e, n) {
        var o = [];
        return dn(e, function(s, c, h) {
          n(s, c, h) && o.push(s);
        }), o;
      }
      function Ce(e, n, o, s, c) {
        var h = -1, m = e.length;
        for (o || (o = g0), c || (c = []); ++h < m; ) {
          var w = e[h];
          n > 0 && o(w) ? n > 1 ? Ce(w, n - 1, o, s, c) : ln(c, w) : s || (c[c.length] = w);
        }
        return c;
      }
      var is = Cu(), uu = Cu(!0);
      function xt(e, n) {
        return e && is(e, n, be);
      }
      function os(e, n) {
        return e && uu(e, n, be);
      }
      function co(e, n) {
        return sn(n, function(o) {
          return Xt(e[o]);
        });
      }
      function Sn(e, n) {
        n = hn(n, e);
        for (var o = 0, s = n.length; e != null && o < s; )
          e = e[Dt(n[o++])];
        return o && o == s ? e : r;
      }
      function du(e, n, o) {
        var s = n(e);
        return H(e) ? s : ln(s, o(e));
      }
      function _e(e) {
        return e == null ? e === r ? lm : am : Zn && Zn in ce(e) ? m0(e) : J0(e);
      }
      function as(e, n) {
        return e > n;
      }
      function AV(e, n) {
        return e != null && oe.call(e, n);
      }
      function CV(e, n) {
        return e != null && n in ce(e);
      }
      function xV(e, n, o) {
        return e >= Oe(n, o) && e < Ze(n, o);
      }
      function ss(e, n, o) {
        for (var s = o ? Ga : Yi, c = e[0].length, h = e.length, m = h, w = g(h), T = 1 / 0, y = []; m--; ) {
          var k = e[m];
          m && n && (k = fe(k, at(n))), T = Oe(k.length, T), w[m] = !o && (n || c >= 120 && k.length >= 120) ? new bn(m && k) : r;
        }
        k = e[0];
        var b = -1, A = w[0];
        e:
          for (; ++b < c && y.length < T; ) {
            var I = k[b], Q = n ? n(I) : I;
            if (I = o || I !== 0 ? I : 0, !(A ? zr(A, Q) : s(y, Q, o))) {
              for (m = h; --m; ) {
                var _ = w[m];
                if (!(_ ? zr(_, Q) : s(e[m], Q, o)))
                  continue e;
              }
              A && A.push(Q), y.push(I);
            }
          }
        return y;
      }
      function BV(e, n, o, s) {
        return xt(e, function(c, h, m) {
          n(s, o(c), h, m);
        }), s;
      }
      function Lr(e, n, o) {
        n = hn(n, e), e = Ku(e, n);
        var s = e == null ? e : e[Dt(Ut(n))];
        return s == null ? r : ot(s, e, o);
      }
      function fu(e) {
        return Ve(e) && _e(e) == Xn;
      }
      function DV(e) {
        return Ve(e) && _e(e) == Qr;
      }
      function IV(e) {
        return Ve(e) && _e(e) == xr;
      }
      function qr(e, n, o, s, c) {
        return e === n ? !0 : e == null || n == null || !Ve(e) && !Ve(n) ? e !== e && n !== n : OV(e, n, o, s, qr, c);
      }
      function OV(e, n, o, s, c, h) {
        var m = H(e), w = H(n), T = m ? Bi : Qe(e), y = w ? Bi : Qe(n);
        T = T == Xn ? zt : T, y = y == Xn ? zt : y;
        var k = T == zt, b = y == zt, A = T == y;
        if (A && mn(e)) {
          if (!mn(n))
            return !1;
          m = !0, k = !1;
        }
        if (A && !k)
          return h || (h = new Jt()), m || cr(e) ? Hu(e, n, o, s, c, h) : h0(e, n, T, o, s, c, h);
        if (!(o & W)) {
          var I = k && oe.call(e, "__wrapped__"), Q = b && oe.call(n, "__wrapped__");
          if (I || Q) {
            var _ = I ? e.value() : e, z = Q ? n.value() : n;
            return h || (h = new Jt()), c(_, z, o, s, h);
          }
        }
        return A ? (h || (h = new Jt()), p0(e, n, o, s, c, h)) : !1;
      }
      function QV(e) {
        return Ve(e) && Qe(e) == yt;
      }
      function ls(e, n, o, s) {
        var c = o.length, h = c, m = !s;
        if (e == null)
          return !h;
        for (e = ce(e); c--; ) {
          var w = o[c];
          if (m && w[2] ? w[1] !== e[w[0]] : !(w[0] in e))
            return !1;
        }
        for (; ++c < h; ) {
          w = o[c];
          var T = w[0], y = e[T], k = w[1];
          if (m && w[2]) {
            if (y === r && !(T in e))
              return !1;
          } else {
            var b = new Jt();
            if (s)
              var A = s(y, k, T, e, n, b);
            if (!(A === r ? qr(k, y, W | F, s, b) : A))
              return !1;
          }
        }
        return !0;
      }
      function hu(e) {
        if (!he(e) || N0(e))
          return !1;
        var n = Xt(e) ? Q1 : Sm;
        return n.test(Wn(e));
      }
      function zV(e) {
        return Ve(e) && _e(e) == Dr;
      }
      function GV(e) {
        return Ve(e) && Qe(e) == kt;
      }
      function YV(e) {
        return Ve(e) && Zo(e.length) && !!de[_e(e)];
      }
      function pu(e) {
        return typeof e == "function" ? e : e == null ? tt : typeof e == "object" ? H(e) ? wu(e[0], e[1]) : Vu(e) : xd(e);
      }
      function cs(e) {
        if (!ei(e))
          return _1(e);
        var n = [];
        for (var o in ce(e))
          oe.call(e, o) && o != "constructor" && n.push(o);
        return n;
      }
      function HV(e) {
        if (!he(e))
          return Z0(e);
        var n = ei(e), o = [];
        for (var s in e)
          s == "constructor" && (n || !oe.call(e, s)) || o.push(s);
        return o;
      }
      function us(e, n) {
        return e < n;
      }
      function mu(e, n) {
        var o = -1, s = $e(e) ? g(e.length) : [];
        return dn(e, function(c, h, m) {
          s[++o] = n(c, h, m);
        }), s;
      }
      function Vu(e) {
        var n = ys(e);
        return n.length == 1 && n[0][2] ? Lu(n[0][0], n[0][1]) : function(o) {
          return o === e || ls(o, e, n);
        };
      }
      function wu(e, n) {
        return Zs(e) && Xu(n) ? Lu(Dt(e), n) : function(o) {
          var s = Bs(o, e);
          return s === r && s === n ? Ds(o, e) : qr(n, s, W | F);
        };
      }
      function uo(e, n, o, s, c) {
        e !== n && is(n, function(h, m) {
          if (c || (c = new Jt()), he(h))
            PV(e, n, m, o, uo, s, c);
          else {
            var w = s ? s(bs(e, m), h, m + "", e, n, c) : r;
            w === r && (w = h), ns(e, m, w);
          }
        }, et);
      }
      function PV(e, n, o, s, c, h, m) {
        var w = bs(e, o), T = bs(n, o), y = m.get(T);
        if (y) {
          ns(e, o, y);
          return;
        }
        var k = h ? h(w, T, o + "", e, n, m) : r, b = k === r;
        if (b) {
          var A = H(T), I = !A && mn(T), Q = !A && !I && cr(T);
          k = T, A || I || Q ? H(w) ? k = w : Te(w) ? k = Ke(w) : I ? (b = !1, k = bu(T, !0)) : Q ? (b = !1, k = Eu(T, !0)) : k = [] : ni(T) || An(T) ? (k = w, An(w) ? k = kd(w) : (!he(w) || Xt(w)) && (k = ju(T))) : b = !1;
        }
        b && (m.set(T, k), c(k, T, s, h, m), m.delete(T)), ns(e, o, k);
      }
      function vu(e, n) {
        var o = e.length;
        if (!!o)
          return n += n < 0 ? o : 0, jt(n, o) ? e[n] : r;
      }
      function Tu(e, n, o) {
        n.length ? n = fe(n, function(h) {
          return H(h) ? function(m) {
            return Sn(m, h.length === 1 ? h[0] : h);
          } : h;
        }) : n = [tt];
        var s = -1;
        n = fe(n, at(O()));
        var c = mu(e, function(h, m, w) {
          var T = fe(n, function(y) {
            return y(h);
          });
          return { criteria: T, index: ++s, value: h };
        });
        return T1(c, function(h, m) {
          return o0(h, m, o);
        });
      }
      function _V(e, n) {
        return Uu(e, n, function(o, s) {
          return Ds(e, s);
        });
      }
      function Uu(e, n, o) {
        for (var s = -1, c = n.length, h = {}; ++s < c; ) {
          var m = n[s], w = Sn(e, m);
          o(w, m) && Kr(h, hn(m, e), w);
        }
        return h;
      }
      function jV(e) {
        return function(n) {
          return Sn(n, e);
        };
      }
      function ds(e, n, o, s) {
        var c = s ? v1 : Kn, h = -1, m = n.length, w = e;
        for (e === n && (n = Ke(n)), o && (w = fe(e, at(o))); ++h < m; )
          for (var T = 0, y = n[h], k = o ? o(y) : y; (T = c(w, k, T, s)) > -1; )
            w !== e && eo.call(w, T, 1), eo.call(e, T, 1);
        return e;
      }
      function gu(e, n) {
        for (var o = e ? n.length : 0, s = o - 1; o--; ) {
          var c = n[o];
          if (o == s || c !== h) {
            var h = c;
            jt(c) ? eo.call(e, c, 1) : ms(e, c);
          }
        }
        return e;
      }
      function fs(e, n) {
        return e + ro(tu() * (n - e + 1));
      }
      function XV(e, n, o, s) {
        for (var c = -1, h = Ze(no((n - e) / (o || 1)), 0), m = g(h); h--; )
          m[s ? h : ++c] = e, e += o;
        return m;
      }
      function hs(e, n) {
        var o = "";
        if (!e || n < 1 || n > Pe)
          return o;
        do
          n % 2 && (o += e), n = ro(n / 2), n && (e += e);
        while (n);
        return o;
      }
      function j(e, n) {
        return Es(qu(e, n, tt), e + "");
      }
      function LV(e) {
        return iu(ur(e));
      }
      function qV(e, n) {
        var o = ur(e);
        return go(o, En(n, 0, o.length));
      }
      function Kr(e, n, o, s) {
        if (!he(e))
          return e;
        n = hn(n, e);
        for (var c = -1, h = n.length, m = h - 1, w = e; w != null && ++c < h; ) {
          var T = Dt(n[c]), y = o;
          if (T === "__proto__" || T === "constructor" || T === "prototype")
            return e;
          if (c != m) {
            var k = w[T];
            y = s ? s(k, T, w) : r, y === r && (y = he(k) ? k : jt(n[c + 1]) ? [] : {});
          }
          jr(w, T, y), w = w[T];
        }
        return e;
      }
      var Ru = io ? function(e, n) {
        return io.set(e, n), e;
      } : tt, KV = to ? function(e, n) {
        return to(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Os(n),
          writable: !0
        });
      } : tt;
      function $V(e) {
        return go(ur(e));
      }
      function Tt(e, n, o) {
        var s = -1, c = e.length;
        n < 0 && (n = -n > c ? 0 : c + n), o = o > c ? c : o, o < 0 && (o += c), c = n > o ? 0 : o - n >>> 0, n >>>= 0;
        for (var h = g(c); ++s < c; )
          h[s] = e[s + n];
        return h;
      }
      function e0(e, n) {
        var o;
        return dn(e, function(s, c, h) {
          return o = n(s, c, h), !o;
        }), !!o;
      }
      function fo(e, n, o) {
        var s = 0, c = e == null ? s : e.length;
        if (typeof n == "number" && n === n && c <= nm) {
          for (; s < c; ) {
            var h = s + c >>> 1, m = e[h];
            m !== null && !lt(m) && (o ? m <= n : m < n) ? s = h + 1 : c = h;
          }
          return c;
        }
        return ps(e, n, tt, o);
      }
      function ps(e, n, o, s) {
        var c = 0, h = e == null ? 0 : e.length;
        if (h === 0)
          return 0;
        n = o(n);
        for (var m = n !== n, w = n === null, T = lt(n), y = n === r; c < h; ) {
          var k = ro((c + h) / 2), b = o(e[k]), A = b !== r, I = b === null, Q = b === b, _ = lt(b);
          if (m)
            var z = s || Q;
          else
            y ? z = Q && (s || A) : w ? z = Q && A && (s || !I) : T ? z = Q && A && !I && (s || !_) : I || _ ? z = !1 : z = s ? b <= n : b < n;
          z ? c = k + 1 : h = k;
        }
        return Oe(h, tm);
      }
      function Nu(e, n) {
        for (var o = -1, s = e.length, c = 0, h = []; ++o < s; ) {
          var m = e[o], w = n ? n(m) : m;
          if (!o || !bt(w, T)) {
            var T = w;
            h[c++] = m === 0 ? 0 : m;
          }
        }
        return h;
      }
      function Mu(e) {
        return typeof e == "number" ? e : lt(e) ? xi : +e;
      }
      function st(e) {
        if (typeof e == "string")
          return e;
        if (H(e))
          return fe(e, st) + "";
        if (lt(e))
          return nu ? nu.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -We ? "-0" : n;
      }
      function fn(e, n, o) {
        var s = -1, c = Yi, h = e.length, m = !0, w = [], T = w;
        if (o)
          m = !1, c = Ga;
        else if (h >= l) {
          var y = n ? null : d0(e);
          if (y)
            return Pi(y);
          m = !1, c = zr, T = new bn();
        } else
          T = n ? [] : w;
        e:
          for (; ++s < h; ) {
            var k = e[s], b = n ? n(k) : k;
            if (k = o || k !== 0 ? k : 0, m && b === b) {
              for (var A = T.length; A--; )
                if (T[A] === b)
                  continue e;
              n && T.push(b), w.push(k);
            } else
              c(T, b, o) || (T !== w && T.push(b), w.push(k));
          }
        return w;
      }
      function ms(e, n) {
        return n = hn(n, e), e = Ku(e, n), e == null || delete e[Dt(Ut(n))];
      }
      function yu(e, n, o, s) {
        return Kr(e, n, o(Sn(e, n)), s);
      }
      function ho(e, n, o, s) {
        for (var c = e.length, h = s ? c : -1; (s ? h-- : ++h < c) && n(e[h], h, e); )
          ;
        return o ? Tt(e, s ? 0 : h, s ? h + 1 : c) : Tt(e, s ? h + 1 : 0, s ? c : h);
      }
      function ku(e, n) {
        var o = e;
        return o instanceof $ && (o = o.value()), Ya(n, function(s, c) {
          return c.func.apply(c.thisArg, ln([s], c.args));
        }, o);
      }
      function Vs(e, n, o) {
        var s = e.length;
        if (s < 2)
          return s ? fn(e[0]) : [];
        for (var c = -1, h = g(s); ++c < s; )
          for (var m = e[c], w = -1; ++w < s; )
            w != c && (h[c] = Xr(h[c] || m, e[w], n, o));
        return fn(Ce(h, 1), n, o);
      }
      function Zu(e, n, o) {
        for (var s = -1, c = e.length, h = n.length, m = {}; ++s < c; ) {
          var w = s < h ? n[s] : r;
          o(m, e[s], w);
        }
        return m;
      }
      function ws(e) {
        return Te(e) ? e : [];
      }
      function vs(e) {
        return typeof e == "function" ? e : tt;
      }
      function hn(e, n) {
        return H(e) ? e : Zs(e, n) ? [e] : nd(ie(e));
      }
      var t0 = j;
      function pn(e, n, o) {
        var s = e.length;
        return o = o === r ? s : o, !n && o >= s ? e : Tt(e, n, o);
      }
      var Ju = z1 || function(e) {
        return Ae.clearTimeout(e);
      };
      function bu(e, n) {
        if (n)
          return e.slice();
        var o = e.length, s = Lc ? Lc(o) : new e.constructor(o);
        return e.copy(s), s;
      }
      function Ts(e) {
        var n = new e.constructor(e.byteLength);
        return new Ki(n).set(new Ki(e)), n;
      }
      function n0(e, n) {
        var o = n ? Ts(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function r0(e) {
        var n = new e.constructor(e.source, fc.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function i0(e) {
        return _r ? ce(_r.call(e)) : {};
      }
      function Eu(e, n) {
        var o = n ? Ts(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function Su(e, n) {
        if (e !== n) {
          var o = e !== r, s = e === null, c = e === e, h = lt(e), m = n !== r, w = n === null, T = n === n, y = lt(n);
          if (!w && !y && !h && e > n || h && m && T && !w && !y || s && m && T || !o && T || !c)
            return 1;
          if (!s && !h && !y && e < n || y && o && c && !s && !h || w && o && c || !m && c || !T)
            return -1;
        }
        return 0;
      }
      function o0(e, n, o) {
        for (var s = -1, c = e.criteria, h = n.criteria, m = c.length, w = o.length; ++s < m; ) {
          var T = Su(c[s], h[s]);
          if (T) {
            if (s >= w)
              return T;
            var y = o[s];
            return T * (y == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function Fu(e, n, o, s) {
        for (var c = -1, h = e.length, m = o.length, w = -1, T = n.length, y = Ze(h - m, 0), k = g(T + y), b = !s; ++w < T; )
          k[w] = n[w];
        for (; ++c < m; )
          (b || c < h) && (k[o[c]] = e[c]);
        for (; y--; )
          k[w++] = e[c++];
        return k;
      }
      function Wu(e, n, o, s) {
        for (var c = -1, h = e.length, m = -1, w = o.length, T = -1, y = n.length, k = Ze(h - w, 0), b = g(k + y), A = !s; ++c < k; )
          b[c] = e[c];
        for (var I = c; ++T < y; )
          b[I + T] = n[T];
        for (; ++m < w; )
          (A || c < h) && (b[I + o[m]] = e[c++]);
        return b;
      }
      function Ke(e, n) {
        var o = -1, s = e.length;
        for (n || (n = g(s)); ++o < s; )
          n[o] = e[o];
        return n;
      }
      function Bt(e, n, o, s) {
        var c = !o;
        o || (o = {});
        for (var h = -1, m = n.length; ++h < m; ) {
          var w = n[h], T = s ? s(o[w], e[w], w, o, e) : r;
          T === r && (T = e[w]), c ? Ht(o, w, T) : jr(o, w, T);
        }
        return o;
      }
      function a0(e, n) {
        return Bt(e, ks(e), n);
      }
      function s0(e, n) {
        return Bt(e, Pu(e), n);
      }
      function po(e, n) {
        return function(o, s) {
          var c = H(o) ? f1 : bV, h = n ? n() : {};
          return c(o, e, O(s, 2), h);
        };
      }
      function ar(e) {
        return j(function(n, o) {
          var s = -1, c = o.length, h = c > 1 ? o[c - 1] : r, m = c > 2 ? o[2] : r;
          for (h = e.length > 3 && typeof h == "function" ? (c--, h) : r, m && je(o[0], o[1], m) && (h = c < 3 ? r : h, c = 1), n = ce(n); ++s < c; ) {
            var w = o[s];
            w && e(n, w, s, h);
          }
          return n;
        });
      }
      function Au(e, n) {
        return function(o, s) {
          if (o == null)
            return o;
          if (!$e(o))
            return e(o, s);
          for (var c = o.length, h = n ? c : -1, m = ce(o); (n ? h-- : ++h < c) && s(m[h], h, m) !== !1; )
            ;
          return o;
        };
      }
      function Cu(e) {
        return function(n, o, s) {
          for (var c = -1, h = ce(n), m = s(n), w = m.length; w--; ) {
            var T = m[e ? w : ++c];
            if (o(h[T], T, h) === !1)
              break;
          }
          return n;
        };
      }
      function l0(e, n, o) {
        var s = n & E, c = $r(e);
        function h() {
          var m = this && this !== Ae && this instanceof h ? c : e;
          return m.apply(s ? o : this, arguments);
        }
        return h;
      }
      function xu(e) {
        return function(n) {
          n = ie(n);
          var o = $n(n) ? Zt(n) : r, s = o ? o[0] : n.charAt(0), c = o ? pn(o, 1).join("") : n.slice(1);
          return s[e]() + c;
        };
      }
      function sr(e) {
        return function(n) {
          return Ya(Ad(Wd(n).replace(Km, "")), e, "");
        };
      }
      function $r(e) {
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
          var o = or(e.prototype), s = e.apply(o, n);
          return he(s) ? s : o;
        };
      }
      function c0(e, n, o) {
        var s = $r(e);
        function c() {
          for (var h = arguments.length, m = g(h), w = h, T = lr(c); w--; )
            m[w] = arguments[w];
          var y = h < 3 && m[0] !== T && m[h - 1] !== T ? [] : cn(m, T);
          if (h -= y.length, h < o)
            return Qu(
              e,
              n,
              mo,
              c.placeholder,
              r,
              m,
              y,
              r,
              r,
              o - h
            );
          var k = this && this !== Ae && this instanceof c ? s : e;
          return ot(k, this, m);
        }
        return c;
      }
      function Bu(e) {
        return function(n, o, s) {
          var c = ce(n);
          if (!$e(n)) {
            var h = O(o, 3);
            n = be(n), o = function(w) {
              return h(c[w], w, c);
            };
          }
          var m = e(n, o, s);
          return m > -1 ? c[h ? n[m] : m] : r;
        };
      }
      function Du(e) {
        return _t(function(n) {
          var o = n.length, s = o, c = wt.prototype.thru;
          for (e && n.reverse(); s--; ) {
            var h = n[s];
            if (typeof h != "function")
              throw new Vt(f);
            if (c && !m && To(h) == "wrapper")
              var m = new wt([], !0);
          }
          for (s = m ? s : o; ++s < o; ) {
            h = n[s];
            var w = To(h), T = w == "wrapper" ? Ms(h) : r;
            T && Js(T[0]) && T[1] == (ee | C | J | L) && !T[4].length && T[9] == 1 ? m = m[To(T[0])].apply(m, T[3]) : m = h.length == 1 && Js(h) ? m[w]() : m.thru(h);
          }
          return function() {
            var y = arguments, k = y[0];
            if (m && y.length == 1 && H(k))
              return m.plant(k).value();
            for (var b = 0, A = o ? n[b].apply(this, y) : k; ++b < o; )
              A = n[b].call(this, A);
            return A;
          };
        });
      }
      function mo(e, n, o, s, c, h, m, w, T, y) {
        var k = n & ee, b = n & E, A = n & S, I = n & (C | G), Q = n & Ie, _ = A ? r : $r(e);
        function z() {
          for (var K = arguments.length, te = g(K), ct = K; ct--; )
            te[ct] = arguments[ct];
          if (I)
            var Xe = lr(z), ut = g1(te, Xe);
          if (s && (te = Fu(te, s, c, I)), h && (te = Wu(te, h, m, I)), K -= ut, I && K < y) {
            var Ue = cn(te, Xe);
            return Qu(
              e,
              n,
              mo,
              z.placeholder,
              o,
              te,
              Ue,
              w,
              T,
              y - K
            );
          }
          var Et = b ? o : this, qt = A ? Et[e] : e;
          return K = te.length, w ? te = b0(te, w) : Q && K > 1 && te.reverse(), k && T < K && (te.length = T), this && this !== Ae && this instanceof z && (qt = _ || $r(qt)), qt.apply(Et, te);
        }
        return z;
      }
      function Iu(e, n) {
        return function(o, s) {
          return BV(o, e, n(s), {});
        };
      }
      function Vo(e, n) {
        return function(o, s) {
          var c;
          if (o === r && s === r)
            return n;
          if (o !== r && (c = o), s !== r) {
            if (c === r)
              return s;
            typeof o == "string" || typeof s == "string" ? (o = st(o), s = st(s)) : (o = Mu(o), s = Mu(s)), c = e(o, s);
          }
          return c;
        };
      }
      function Us(e) {
        return _t(function(n) {
          return n = fe(n, at(O())), j(function(o) {
            var s = this;
            return e(n, function(c) {
              return ot(c, s, o);
            });
          });
        });
      }
      function wo(e, n) {
        n = n === r ? " " : st(n);
        var o = n.length;
        if (o < 2)
          return o ? hs(n, e) : n;
        var s = hs(n, no(e / er(n)));
        return $n(n) ? pn(Zt(s), 0, e).join("") : s.slice(0, e);
      }
      function u0(e, n, o, s) {
        var c = n & E, h = $r(e);
        function m() {
          for (var w = -1, T = arguments.length, y = -1, k = s.length, b = g(k + T), A = this && this !== Ae && this instanceof m ? h : e; ++y < k; )
            b[y] = s[y];
          for (; T--; )
            b[y++] = arguments[++w];
          return ot(A, c ? o : this, b);
        }
        return m;
      }
      function Ou(e) {
        return function(n, o, s) {
          return s && typeof s != "number" && je(n, o, s) && (o = s = r), n = Lt(n), o === r ? (o = n, n = 0) : o = Lt(o), s = s === r ? n < o ? 1 : -1 : Lt(s), XV(n, o, s, e);
        };
      }
      function vo(e) {
        return function(n, o) {
          return typeof n == "string" && typeof o == "string" || (n = gt(n), o = gt(o)), e(n, o);
        };
      }
      function Qu(e, n, o, s, c, h, m, w, T, y) {
        var k = n & C, b = k ? m : r, A = k ? r : m, I = k ? h : r, Q = k ? r : h;
        n |= k ? J : X, n &= ~(k ? X : J), n & D || (n &= ~(E | S));
        var _ = [
          e,
          n,
          c,
          I,
          b,
          Q,
          A,
          w,
          T,
          y
        ], z = o.apply(r, _);
        return Js(e) && $u(z, _), z.placeholder = s, ed(z, e, n);
      }
      function gs(e) {
        var n = ke[e];
        return function(o, s) {
          if (o = gt(o), s = s == null ? 0 : Oe(P(s), 292), s && eu(o)) {
            var c = (ie(o) + "e").split("e"), h = n(c[0] + "e" + (+c[1] + s));
            return c = (ie(h) + "e").split("e"), +(c[0] + "e" + (+c[1] - s));
          }
          return n(o);
        };
      }
      var d0 = rr && 1 / Pi(new rr([, -0]))[1] == We ? function(e) {
        return new rr(e);
      } : Gs;
      function zu(e) {
        return function(n) {
          var o = Qe(n);
          return o == yt ? qa(n) : o == kt ? J1(n) : U1(n, e(n));
        };
      }
      function Pt(e, n, o, s, c, h, m, w) {
        var T = n & S;
        if (!T && typeof e != "function")
          throw new Vt(f);
        var y = s ? s.length : 0;
        if (y || (n &= ~(J | X), s = c = r), m = m === r ? m : Ze(P(m), 0), w = w === r ? w : P(w), y -= c ? c.length : 0, n & X) {
          var k = s, b = c;
          s = c = r;
        }
        var A = T ? r : Ms(e), I = [
          e,
          n,
          o,
          s,
          c,
          k,
          b,
          h,
          m,
          w
        ];
        if (A && k0(I, A), e = I[0], n = I[1], o = I[2], s = I[3], c = I[4], w = I[9] = I[9] === r ? T ? 0 : e.length : Ze(I[9] - y, 0), !w && n & (C | G) && (n &= ~(C | G)), !n || n == E)
          var Q = l0(e, n, o);
        else
          n == C || n == G ? Q = c0(e, n, w) : (n == J || n == (E | J)) && !c.length ? Q = u0(e, n, o, s) : Q = mo.apply(r, I);
        var _ = A ? Ru : $u;
        return ed(_(Q, I), e, n);
      }
      function Gu(e, n, o, s) {
        return e === r || bt(e, nr[o]) && !oe.call(s, o) ? n : e;
      }
      function Yu(e, n, o, s, c, h) {
        return he(e) && he(n) && (h.set(n, e), uo(e, n, r, Yu, h), h.delete(n)), e;
      }
      function f0(e) {
        return ni(e) ? r : e;
      }
      function Hu(e, n, o, s, c, h) {
        var m = o & W, w = e.length, T = n.length;
        if (w != T && !(m && T > w))
          return !1;
        var y = h.get(e), k = h.get(n);
        if (y && k)
          return y == n && k == e;
        var b = -1, A = !0, I = o & F ? new bn() : r;
        for (h.set(e, n), h.set(n, e); ++b < w; ) {
          var Q = e[b], _ = n[b];
          if (s)
            var z = m ? s(_, Q, b, n, e, h) : s(Q, _, b, e, n, h);
          if (z !== r) {
            if (z)
              continue;
            A = !1;
            break;
          }
          if (I) {
            if (!Ha(n, function(K, te) {
              if (!zr(I, te) && (Q === K || c(Q, K, o, s, h)))
                return I.push(te);
            })) {
              A = !1;
              break;
            }
          } else if (!(Q === _ || c(Q, _, o, s, h))) {
            A = !1;
            break;
          }
        }
        return h.delete(e), h.delete(n), A;
      }
      function h0(e, n, o, s, c, h, m) {
        switch (o) {
          case Ln:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case Qr:
            return !(e.byteLength != n.byteLength || !h(new Ki(e), new Ki(n)));
          case Cr:
          case xr:
          case Br:
            return bt(+e, +n);
          case Di:
            return e.name == n.name && e.message == n.message;
          case Dr:
          case Ir:
            return e == n + "";
          case yt:
            var w = qa;
          case kt:
            var T = s & W;
            if (w || (w = Pi), e.size != n.size && !T)
              return !1;
            var y = m.get(e);
            if (y)
              return y == n;
            s |= F, m.set(e, n);
            var k = Hu(w(e), w(n), s, c, h, m);
            return m.delete(e), k;
          case Oi:
            if (_r)
              return _r.call(e) == _r.call(n);
        }
        return !1;
      }
      function p0(e, n, o, s, c, h) {
        var m = o & W, w = Rs(e), T = w.length, y = Rs(n), k = y.length;
        if (T != k && !m)
          return !1;
        for (var b = T; b--; ) {
          var A = w[b];
          if (!(m ? A in n : oe.call(n, A)))
            return !1;
        }
        var I = h.get(e), Q = h.get(n);
        if (I && Q)
          return I == n && Q == e;
        var _ = !0;
        h.set(e, n), h.set(n, e);
        for (var z = m; ++b < T; ) {
          A = w[b];
          var K = e[A], te = n[A];
          if (s)
            var ct = m ? s(te, K, A, n, e, h) : s(K, te, A, e, n, h);
          if (!(ct === r ? K === te || c(K, te, o, s, h) : ct)) {
            _ = !1;
            break;
          }
          z || (z = A == "constructor");
        }
        if (_ && !z) {
          var Xe = e.constructor, ut = n.constructor;
          Xe != ut && "constructor" in e && "constructor" in n && !(typeof Xe == "function" && Xe instanceof Xe && typeof ut == "function" && ut instanceof ut) && (_ = !1);
        }
        return h.delete(e), h.delete(n), _;
      }
      function _t(e) {
        return Es(qu(e, r, ad), e + "");
      }
      function Rs(e) {
        return du(e, be, ks);
      }
      function Ns(e) {
        return du(e, et, Pu);
      }
      var Ms = io ? function(e) {
        return io.get(e);
      } : Gs;
      function To(e) {
        for (var n = e.name + "", o = ir[n], s = oe.call(ir, n) ? o.length : 0; s--; ) {
          var c = o[s], h = c.func;
          if (h == null || h == e)
            return c.name;
        }
        return n;
      }
      function lr(e) {
        var n = oe.call(d, "placeholder") ? d : e;
        return n.placeholder;
      }
      function O() {
        var e = d.iteratee || Qs;
        return e = e === Qs ? pu : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Uo(e, n) {
        var o = e.__data__;
        return R0(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
      }
      function ys(e) {
        for (var n = be(e), o = n.length; o--; ) {
          var s = n[o], c = e[s];
          n[o] = [s, c, Xu(c)];
        }
        return n;
      }
      function Fn(e, n) {
        var o = y1(e, n);
        return hu(o) ? o : r;
      }
      function m0(e) {
        var n = oe.call(e, Zn), o = e[Zn];
        try {
          e[Zn] = r;
          var s = !0;
        } catch {
        }
        var c = Li.call(e);
        return s && (n ? e[Zn] = o : delete e[Zn]), c;
      }
      var ks = $a ? function(e) {
        return e == null ? [] : (e = ce(e), sn($a(e), function(n) {
          return Kc.call(e, n);
        }));
      } : Ys, Pu = $a ? function(e) {
        for (var n = []; e; )
          ln(n, ks(e)), e = $i(e);
        return n;
      } : Ys, Qe = _e;
      (es && Qe(new es(new ArrayBuffer(1))) != Ln || Yr && Qe(new Yr()) != yt || ts && Qe(ts.resolve()) != lc || rr && Qe(new rr()) != kt || Hr && Qe(new Hr()) != Or) && (Qe = function(e) {
        var n = _e(e), o = n == zt ? e.constructor : r, s = o ? Wn(o) : "";
        if (s)
          switch (s) {
            case q1:
              return Ln;
            case K1:
              return yt;
            case $1:
              return lc;
            case eV:
              return kt;
            case tV:
              return Or;
          }
        return n;
      });
      function V0(e, n, o) {
        for (var s = -1, c = o.length; ++s < c; ) {
          var h = o[s], m = h.size;
          switch (h.type) {
            case "drop":
              e += m;
              break;
            case "dropRight":
              n -= m;
              break;
            case "take":
              n = Oe(n, e + m);
              break;
            case "takeRight":
              e = Ze(e, n - m);
              break;
          }
        }
        return { start: e, end: n };
      }
      function w0(e) {
        var n = e.match(Nm);
        return n ? n[1].split(Mm) : [];
      }
      function _u(e, n, o) {
        n = hn(n, e);
        for (var s = -1, c = n.length, h = !1; ++s < c; ) {
          var m = Dt(n[s]);
          if (!(h = e != null && o(e, m)))
            break;
          e = e[m];
        }
        return h || ++s != c ? h : (c = e == null ? 0 : e.length, !!c && Zo(c) && jt(m, c) && (H(e) || An(e)));
      }
      function v0(e) {
        var n = e.length, o = new e.constructor(n);
        return n && typeof e[0] == "string" && oe.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function ju(e) {
        return typeof e.constructor == "function" && !ei(e) ? or($i(e)) : {};
      }
      function T0(e, n, o) {
        var s = e.constructor;
        switch (n) {
          case Qr:
            return Ts(e);
          case Cr:
          case xr:
            return new s(+e);
          case Ln:
            return n0(e, o);
          case ya:
          case ka:
          case Za:
          case Ja:
          case ba:
          case Ea:
          case Sa:
          case Fa:
          case Wa:
            return Eu(e, o);
          case yt:
            return new s();
          case Br:
          case Ir:
            return new s(e);
          case Dr:
            return r0(e);
          case kt:
            return new s();
          case Oi:
            return i0(e);
        }
      }
      function U0(e, n) {
        var o = n.length;
        if (!o)
          return e;
        var s = o - 1;
        return n[s] = (o > 1 ? "& " : "") + n[s], n = n.join(o > 2 ? ", " : " "), e.replace(Rm, `{
/* [wrapped with ` + n + `] */
`);
      }
      function g0(e) {
        return H(e) || An(e) || !!($c && e && e[$c]);
      }
      function jt(e, n) {
        var o = typeof e;
        return n = n == null ? Pe : n, !!n && (o == "number" || o != "symbol" && Wm.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function je(e, n, o) {
        if (!he(o))
          return !1;
        var s = typeof n;
        return (s == "number" ? $e(o) && jt(n, o.length) : s == "string" && n in o) ? bt(o[n], e) : !1;
      }
      function Zs(e, n) {
        if (H(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || lt(e) ? !0 : vm.test(e) || !wm.test(e) || n != null && e in ce(n);
      }
      function R0(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Js(e) {
        var n = To(e), o = d[n];
        if (typeof o != "function" || !(n in $.prototype))
          return !1;
        if (e === o)
          return !0;
        var s = Ms(o);
        return !!s && e === s[0];
      }
      function N0(e) {
        return !!Xc && Xc in e;
      }
      var M0 = ji ? Xt : Hs;
      function ei(e) {
        var n = e && e.constructor, o = typeof n == "function" && n.prototype || nr;
        return e === o;
      }
      function Xu(e) {
        return e === e && !he(e);
      }
      function Lu(e, n) {
        return function(o) {
          return o == null ? !1 : o[e] === n && (n !== r || e in ce(o));
        };
      }
      function y0(e) {
        var n = yo(e, function(s) {
          return o.size === U && o.clear(), s;
        }), o = n.cache;
        return n;
      }
      function k0(e, n) {
        var o = e[1], s = n[1], c = o | s, h = c < (E | S | ee), m = s == ee && o == C || s == ee && o == L && e[7].length <= n[8] || s == (ee | L) && n[7].length <= n[8] && o == C;
        if (!(h || m))
          return e;
        s & E && (e[2] = n[2], c |= o & E ? 0 : D);
        var w = n[3];
        if (w) {
          var T = e[3];
          e[3] = T ? Fu(T, w, n[4]) : w, e[4] = T ? cn(e[3], R) : n[4];
        }
        return w = n[5], w && (T = e[5], e[5] = T ? Wu(T, w, n[6]) : w, e[6] = T ? cn(e[5], R) : n[6]), w = n[7], w && (e[7] = w), s & ee && (e[8] = e[8] == null ? n[8] : Oe(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = c, e;
      }
      function Z0(e) {
        var n = [];
        if (e != null)
          for (var o in ce(e))
            n.push(o);
        return n;
      }
      function J0(e) {
        return Li.call(e);
      }
      function qu(e, n, o) {
        return n = Ze(n === r ? e.length - 1 : n, 0), function() {
          for (var s = arguments, c = -1, h = Ze(s.length - n, 0), m = g(h); ++c < h; )
            m[c] = s[n + c];
          c = -1;
          for (var w = g(n + 1); ++c < n; )
            w[c] = s[c];
          return w[n] = o(m), ot(e, this, w);
        };
      }
      function Ku(e, n) {
        return n.length < 2 ? e : Sn(e, Tt(n, 0, -1));
      }
      function b0(e, n) {
        for (var o = e.length, s = Oe(n.length, o), c = Ke(e); s--; ) {
          var h = n[s];
          e[s] = jt(h, o) ? c[h] : r;
        }
        return e;
      }
      function bs(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var $u = td(Ru), ti = Y1 || function(e, n) {
        return Ae.setTimeout(e, n);
      }, Es = td(KV);
      function ed(e, n, o) {
        var s = n + "";
        return Es(e, U0(s, E0(w0(s), o)));
      }
      function td(e) {
        var n = 0, o = 0;
        return function() {
          var s = j1(), c = ve - (s - o);
          if (o = s, c > 0) {
            if (++n >= me)
              return arguments[0];
          } else
            n = 0;
          return e.apply(r, arguments);
        };
      }
      function go(e, n) {
        var o = -1, s = e.length, c = s - 1;
        for (n = n === r ? s : n; ++o < n; ) {
          var h = fs(o, c), m = e[h];
          e[h] = e[o], e[o] = m;
        }
        return e.length = n, e;
      }
      var nd = y0(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(Tm, function(o, s, c, h) {
          n.push(c ? h.replace(Zm, "$1") : s || o);
        }), n;
      });
      function Dt(e) {
        if (typeof e == "string" || lt(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -We ? "-0" : n;
      }
      function Wn(e) {
        if (e != null) {
          try {
            return Xi.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function E0(e, n) {
        return mt(rm, function(o) {
          var s = "_." + o[0];
          n & o[1] && !Yi(e, s) && e.push(s);
        }), e.sort();
      }
      function rd(e) {
        if (e instanceof $)
          return e.clone();
        var n = new wt(e.__wrapped__, e.__chain__);
        return n.__actions__ = Ke(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function S0(e, n, o) {
        (o ? je(e, n, o) : n === r) ? n = 1 : n = Ze(P(n), 0);
        var s = e == null ? 0 : e.length;
        if (!s || n < 1)
          return [];
        for (var c = 0, h = 0, m = g(no(s / n)); c < s; )
          m[h++] = Tt(e, c, c += n);
        return m;
      }
      function F0(e) {
        for (var n = -1, o = e == null ? 0 : e.length, s = 0, c = []; ++n < o; ) {
          var h = e[n];
          h && (c[s++] = h);
        }
        return c;
      }
      function W0() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = g(e - 1), o = arguments[0], s = e; s--; )
          n[s - 1] = arguments[s];
        return ln(H(o) ? Ke(o) : [o], Ce(n, 1));
      }
      var A0 = j(function(e, n) {
        return Te(e) ? Xr(e, Ce(n, 1, Te, !0)) : [];
      }), C0 = j(function(e, n) {
        var o = Ut(n);
        return Te(o) && (o = r), Te(e) ? Xr(e, Ce(n, 1, Te, !0), O(o, 2)) : [];
      }), x0 = j(function(e, n) {
        var o = Ut(n);
        return Te(o) && (o = r), Te(e) ? Xr(e, Ce(n, 1, Te, !0), r, o) : [];
      });
      function B0(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (n = o || n === r ? 1 : P(n), Tt(e, n < 0 ? 0 : n, s)) : [];
      }
      function D0(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (n = o || n === r ? 1 : P(n), n = s - n, Tt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function I0(e, n) {
        return e && e.length ? ho(e, O(n, 3), !0, !0) : [];
      }
      function O0(e, n) {
        return e && e.length ? ho(e, O(n, 3), !0) : [];
      }
      function Q0(e, n, o, s) {
        var c = e == null ? 0 : e.length;
        return c ? (o && typeof o != "number" && je(e, n, o) && (o = 0, s = c), WV(e, n, o, s)) : [];
      }
      function id(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var c = o == null ? 0 : P(o);
        return c < 0 && (c = Ze(s + c, 0)), Hi(e, O(n, 3), c);
      }
      function od(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var c = s - 1;
        return o !== r && (c = P(o), c = o < 0 ? Ze(s + c, 0) : Oe(c, s - 1)), Hi(e, O(n, 3), c, !0);
      }
      function ad(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, 1) : [];
      }
      function z0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Ce(e, We) : [];
      }
      function G0(e, n) {
        var o = e == null ? 0 : e.length;
        return o ? (n = n === r ? 1 : P(n), Ce(e, n)) : [];
      }
      function Y0(e) {
        for (var n = -1, o = e == null ? 0 : e.length, s = {}; ++n < o; ) {
          var c = e[n];
          s[c[0]] = c[1];
        }
        return s;
      }
      function sd(e) {
        return e && e.length ? e[0] : r;
      }
      function H0(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var c = o == null ? 0 : P(o);
        return c < 0 && (c = Ze(s + c, 0)), Kn(e, n, c);
      }
      function P0(e) {
        var n = e == null ? 0 : e.length;
        return n ? Tt(e, 0, -1) : [];
      }
      var _0 = j(function(e) {
        var n = fe(e, ws);
        return n.length && n[0] === e[0] ? ss(n) : [];
      }), j0 = j(function(e) {
        var n = Ut(e), o = fe(e, ws);
        return n === Ut(o) ? n = r : o.pop(), o.length && o[0] === e[0] ? ss(o, O(n, 2)) : [];
      }), X0 = j(function(e) {
        var n = Ut(e), o = fe(e, ws);
        return n = typeof n == "function" ? n : r, n && o.pop(), o.length && o[0] === e[0] ? ss(o, r, n) : [];
      });
      function L0(e, n) {
        return e == null ? "" : P1.call(e, n);
      }
      function Ut(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : r;
      }
      function q0(e, n, o) {
        var s = e == null ? 0 : e.length;
        if (!s)
          return -1;
        var c = s;
        return o !== r && (c = P(o), c = c < 0 ? Ze(s + c, 0) : Oe(c, s - 1)), n === n ? E1(e, n, c) : Hi(e, Qc, c, !0);
      }
      function K0(e, n) {
        return e && e.length ? vu(e, P(n)) : r;
      }
      var $0 = j(ld);
      function ld(e, n) {
        return e && e.length && n && n.length ? ds(e, n) : e;
      }
      function ew(e, n, o) {
        return e && e.length && n && n.length ? ds(e, n, O(o, 2)) : e;
      }
      function tw(e, n, o) {
        return e && e.length && n && n.length ? ds(e, n, r, o) : e;
      }
      var nw = _t(function(e, n) {
        var o = e == null ? 0 : e.length, s = rs(e, n);
        return gu(e, fe(n, function(c) {
          return jt(c, o) ? +c : c;
        }).sort(Su)), s;
      });
      function rw(e, n) {
        var o = [];
        if (!(e && e.length))
          return o;
        var s = -1, c = [], h = e.length;
        for (n = O(n, 3); ++s < h; ) {
          var m = e[s];
          n(m, s, e) && (o.push(m), c.push(s));
        }
        return gu(e, c), o;
      }
      function Ss(e) {
        return e == null ? e : L1.call(e);
      }
      function iw(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (o && typeof o != "number" && je(e, n, o) ? (n = 0, o = s) : (n = n == null ? 0 : P(n), o = o === r ? s : P(o)), Tt(e, n, o)) : [];
      }
      function ow(e, n) {
        return fo(e, n);
      }
      function aw(e, n, o) {
        return ps(e, n, O(o, 2));
      }
      function sw(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var s = fo(e, n);
          if (s < o && bt(e[s], n))
            return s;
        }
        return -1;
      }
      function lw(e, n) {
        return fo(e, n, !0);
      }
      function cw(e, n, o) {
        return ps(e, n, O(o, 2), !0);
      }
      function uw(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var s = fo(e, n, !0) - 1;
          if (bt(e[s], n))
            return s;
        }
        return -1;
      }
      function dw(e) {
        return e && e.length ? Nu(e) : [];
      }
      function fw(e, n) {
        return e && e.length ? Nu(e, O(n, 2)) : [];
      }
      function hw(e) {
        var n = e == null ? 0 : e.length;
        return n ? Tt(e, 1, n) : [];
      }
      function pw(e, n, o) {
        return e && e.length ? (n = o || n === r ? 1 : P(n), Tt(e, 0, n < 0 ? 0 : n)) : [];
      }
      function mw(e, n, o) {
        var s = e == null ? 0 : e.length;
        return s ? (n = o || n === r ? 1 : P(n), n = s - n, Tt(e, n < 0 ? 0 : n, s)) : [];
      }
      function Vw(e, n) {
        return e && e.length ? ho(e, O(n, 3), !1, !0) : [];
      }
      function ww(e, n) {
        return e && e.length ? ho(e, O(n, 3)) : [];
      }
      var vw = j(function(e) {
        return fn(Ce(e, 1, Te, !0));
      }), Tw = j(function(e) {
        var n = Ut(e);
        return Te(n) && (n = r), fn(Ce(e, 1, Te, !0), O(n, 2));
      }), Uw = j(function(e) {
        var n = Ut(e);
        return n = typeof n == "function" ? n : r, fn(Ce(e, 1, Te, !0), r, n);
      });
      function gw(e) {
        return e && e.length ? fn(e) : [];
      }
      function Rw(e, n) {
        return e && e.length ? fn(e, O(n, 2)) : [];
      }
      function Nw(e, n) {
        return n = typeof n == "function" ? n : r, e && e.length ? fn(e, r, n) : [];
      }
      function Fs(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = sn(e, function(o) {
          if (Te(o))
            return n = Ze(o.length, n), !0;
        }), Xa(n, function(o) {
          return fe(e, Pa(o));
        });
      }
      function cd(e, n) {
        if (!(e && e.length))
          return [];
        var o = Fs(e);
        return n == null ? o : fe(o, function(s) {
          return ot(n, r, s);
        });
      }
      var Mw = j(function(e, n) {
        return Te(e) ? Xr(e, n) : [];
      }), yw = j(function(e) {
        return Vs(sn(e, Te));
      }), kw = j(function(e) {
        var n = Ut(e);
        return Te(n) && (n = r), Vs(sn(e, Te), O(n, 2));
      }), Zw = j(function(e) {
        var n = Ut(e);
        return n = typeof n == "function" ? n : r, Vs(sn(e, Te), r, n);
      }), Jw = j(Fs);
      function bw(e, n) {
        return Zu(e || [], n || [], jr);
      }
      function Ew(e, n) {
        return Zu(e || [], n || [], Kr);
      }
      var Sw = j(function(e) {
        var n = e.length, o = n > 1 ? e[n - 1] : r;
        return o = typeof o == "function" ? (e.pop(), o) : r, cd(e, o);
      });
      function ud(e) {
        var n = d(e);
        return n.__chain__ = !0, n;
      }
      function Fw(e, n) {
        return n(e), e;
      }
      function Ro(e, n) {
        return n(e);
      }
      var Ww = _t(function(e) {
        var n = e.length, o = n ? e[0] : 0, s = this.__wrapped__, c = function(h) {
          return rs(h, e);
        };
        return n > 1 || this.__actions__.length || !(s instanceof $) || !jt(o) ? this.thru(c) : (s = s.slice(o, +o + (n ? 1 : 0)), s.__actions__.push({
          func: Ro,
          args: [c],
          thisArg: r
        }), new wt(s, this.__chain__).thru(function(h) {
          return n && !h.length && h.push(r), h;
        }));
      });
      function Aw() {
        return ud(this);
      }
      function Cw() {
        return new wt(this.value(), this.__chain__);
      }
      function xw() {
        this.__values__ === r && (this.__values__ = Md(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? r : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function Bw() {
        return this;
      }
      function Dw(e) {
        for (var n, o = this; o instanceof ao; ) {
          var s = rd(o);
          s.__index__ = 0, s.__values__ = r, n ? c.__wrapped__ = s : n = s;
          var c = s;
          o = o.__wrapped__;
        }
        return c.__wrapped__ = e, n;
      }
      function Iw() {
        var e = this.__wrapped__;
        if (e instanceof $) {
          var n = e;
          return this.__actions__.length && (n = new $(this)), n = n.reverse(), n.__actions__.push({
            func: Ro,
            args: [Ss],
            thisArg: r
          }), new wt(n, this.__chain__);
        }
        return this.thru(Ss);
      }
      function Ow() {
        return ku(this.__wrapped__, this.__actions__);
      }
      var Qw = po(function(e, n, o) {
        oe.call(e, o) ? ++e[o] : Ht(e, o, 1);
      });
      function zw(e, n, o) {
        var s = H(e) ? Ic : FV;
        return o && je(e, n, o) && (n = r), s(e, O(n, 3));
      }
      function Gw(e, n) {
        var o = H(e) ? sn : cu;
        return o(e, O(n, 3));
      }
      var Yw = Bu(id), Hw = Bu(od);
      function Pw(e, n) {
        return Ce(No(e, n), 1);
      }
      function _w(e, n) {
        return Ce(No(e, n), We);
      }
      function jw(e, n, o) {
        return o = o === r ? 1 : P(o), Ce(No(e, n), o);
      }
      function dd(e, n) {
        var o = H(e) ? mt : dn;
        return o(e, O(n, 3));
      }
      function fd(e, n) {
        var o = H(e) ? h1 : lu;
        return o(e, O(n, 3));
      }
      var Xw = po(function(e, n, o) {
        oe.call(e, o) ? e[o].push(n) : Ht(e, o, [n]);
      });
      function Lw(e, n, o, s) {
        e = $e(e) ? e : ur(e), o = o && !s ? P(o) : 0;
        var c = e.length;
        return o < 0 && (o = Ze(c + o, 0)), Jo(e) ? o <= c && e.indexOf(n, o) > -1 : !!c && Kn(e, n, o) > -1;
      }
      var qw = j(function(e, n, o) {
        var s = -1, c = typeof n == "function", h = $e(e) ? g(e.length) : [];
        return dn(e, function(m) {
          h[++s] = c ? ot(n, m, o) : Lr(m, n, o);
        }), h;
      }), Kw = po(function(e, n, o) {
        Ht(e, o, n);
      });
      function No(e, n) {
        var o = H(e) ? fe : mu;
        return o(e, O(n, 3));
      }
      function $w(e, n, o, s) {
        return e == null ? [] : (H(n) || (n = n == null ? [] : [n]), o = s ? r : o, H(o) || (o = o == null ? [] : [o]), Tu(e, n, o));
      }
      var ev = po(function(e, n, o) {
        e[o ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function tv(e, n, o) {
        var s = H(e) ? Ya : Gc, c = arguments.length < 3;
        return s(e, O(n, 4), o, c, dn);
      }
      function nv(e, n, o) {
        var s = H(e) ? p1 : Gc, c = arguments.length < 3;
        return s(e, O(n, 4), o, c, lu);
      }
      function rv(e, n) {
        var o = H(e) ? sn : cu;
        return o(e, ko(O(n, 3)));
      }
      function iv(e) {
        var n = H(e) ? iu : LV;
        return n(e);
      }
      function ov(e, n, o) {
        (o ? je(e, n, o) : n === r) ? n = 1 : n = P(n);
        var s = H(e) ? ZV : qV;
        return s(e, n);
      }
      function av(e) {
        var n = H(e) ? JV : $V;
        return n(e);
      }
      function sv(e) {
        if (e == null)
          return 0;
        if ($e(e))
          return Jo(e) ? er(e) : e.length;
        var n = Qe(e);
        return n == yt || n == kt ? e.size : cs(e).length;
      }
      function lv(e, n, o) {
        var s = H(e) ? Ha : e0;
        return o && je(e, n, o) && (n = r), s(e, O(n, 3));
      }
      var cv = j(function(e, n) {
        if (e == null)
          return [];
        var o = n.length;
        return o > 1 && je(e, n[0], n[1]) ? n = [] : o > 2 && je(n[0], n[1], n[2]) && (n = [n[0]]), Tu(e, Ce(n, 1), []);
      }), Mo = G1 || function() {
        return Ae.Date.now();
      };
      function uv(e, n) {
        if (typeof n != "function")
          throw new Vt(f);
        return e = P(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function hd(e, n, o) {
        return n = o ? r : n, n = e && n == null ? e.length : n, Pt(e, ee, r, r, r, r, n);
      }
      function pd(e, n) {
        var o;
        if (typeof n != "function")
          throw new Vt(f);
        return e = P(e), function() {
          return --e > 0 && (o = n.apply(this, arguments)), e <= 1 && (n = r), o;
        };
      }
      var Ws = j(function(e, n, o) {
        var s = E;
        if (o.length) {
          var c = cn(o, lr(Ws));
          s |= J;
        }
        return Pt(e, s, n, o, c);
      }), md = j(function(e, n, o) {
        var s = E | S;
        if (o.length) {
          var c = cn(o, lr(md));
          s |= J;
        }
        return Pt(n, s, e, o, c);
      });
      function Vd(e, n, o) {
        n = o ? r : n;
        var s = Pt(e, C, r, r, r, r, r, n);
        return s.placeholder = Vd.placeholder, s;
      }
      function wd(e, n, o) {
        n = o ? r : n;
        var s = Pt(e, G, r, r, r, r, r, n);
        return s.placeholder = wd.placeholder, s;
      }
      function vd(e, n, o) {
        var s, c, h, m, w, T, y = 0, k = !1, b = !1, A = !0;
        if (typeof e != "function")
          throw new Vt(f);
        n = gt(n) || 0, he(o) && (k = !!o.leading, b = "maxWait" in o, h = b ? Ze(gt(o.maxWait) || 0, n) : h, A = "trailing" in o ? !!o.trailing : A);
        function I(Ue) {
          var Et = s, qt = c;
          return s = c = r, y = Ue, m = e.apply(qt, Et), m;
        }
        function Q(Ue) {
          return y = Ue, w = ti(K, n), k ? I(Ue) : m;
        }
        function _(Ue) {
          var Et = Ue - T, qt = Ue - y, Bd = n - Et;
          return b ? Oe(Bd, h - qt) : Bd;
        }
        function z(Ue) {
          var Et = Ue - T, qt = Ue - y;
          return T === r || Et >= n || Et < 0 || b && qt >= h;
        }
        function K() {
          var Ue = Mo();
          if (z(Ue))
            return te(Ue);
          w = ti(K, _(Ue));
        }
        function te(Ue) {
          return w = r, A && s ? I(Ue) : (s = c = r, m);
        }
        function ct() {
          w !== r && Ju(w), y = 0, s = T = c = w = r;
        }
        function Xe() {
          return w === r ? m : te(Mo());
        }
        function ut() {
          var Ue = Mo(), Et = z(Ue);
          if (s = arguments, c = this, T = Ue, Et) {
            if (w === r)
              return Q(T);
            if (b)
              return Ju(w), w = ti(K, n), I(T);
          }
          return w === r && (w = ti(K, n)), m;
        }
        return ut.cancel = ct, ut.flush = Xe, ut;
      }
      var dv = j(function(e, n) {
        return su(e, 1, n);
      }), fv = j(function(e, n, o) {
        return su(e, gt(n) || 0, o);
      });
      function hv(e) {
        return Pt(e, Ie);
      }
      function yo(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new Vt(f);
        var o = function() {
          var s = arguments, c = n ? n.apply(this, s) : s[0], h = o.cache;
          if (h.has(c))
            return h.get(c);
          var m = e.apply(this, s);
          return o.cache = h.set(c, m) || h, m;
        };
        return o.cache = new (yo.Cache || Yt)(), o;
      }
      yo.Cache = Yt;
      function ko(e) {
        if (typeof e != "function")
          throw new Vt(f);
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
      function pv(e) {
        return pd(2, e);
      }
      var mv = t0(function(e, n) {
        n = n.length == 1 && H(n[0]) ? fe(n[0], at(O())) : fe(Ce(n, 1), at(O()));
        var o = n.length;
        return j(function(s) {
          for (var c = -1, h = Oe(s.length, o); ++c < h; )
            s[c] = n[c].call(this, s[c]);
          return ot(e, this, s);
        });
      }), As = j(function(e, n) {
        var o = cn(n, lr(As));
        return Pt(e, J, r, n, o);
      }), Td = j(function(e, n) {
        var o = cn(n, lr(Td));
        return Pt(e, X, r, n, o);
      }), Vv = _t(function(e, n) {
        return Pt(e, L, r, r, r, n);
      });
      function wv(e, n) {
        if (typeof e != "function")
          throw new Vt(f);
        return n = n === r ? n : P(n), j(e, n);
      }
      function vv(e, n) {
        if (typeof e != "function")
          throw new Vt(f);
        return n = n == null ? 0 : Ze(P(n), 0), j(function(o) {
          var s = o[n], c = pn(o, 0, n);
          return s && ln(c, s), ot(e, this, c);
        });
      }
      function Tv(e, n, o) {
        var s = !0, c = !0;
        if (typeof e != "function")
          throw new Vt(f);
        return he(o) && (s = "leading" in o ? !!o.leading : s, c = "trailing" in o ? !!o.trailing : c), vd(e, n, {
          leading: s,
          maxWait: n,
          trailing: c
        });
      }
      function Uv(e) {
        return hd(e, 1);
      }
      function gv(e, n) {
        return As(vs(n), e);
      }
      function Rv() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return H(e) ? e : [e];
      }
      function Nv(e) {
        return vt(e, B);
      }
      function Mv(e, n) {
        return n = typeof n == "function" ? n : r, vt(e, B, n);
      }
      function yv(e) {
        return vt(e, M | B);
      }
      function kv(e, n) {
        return n = typeof n == "function" ? n : r, vt(e, M | B, n);
      }
      function Zv(e, n) {
        return n == null || au(e, n, be(n));
      }
      function bt(e, n) {
        return e === n || e !== e && n !== n;
      }
      var Jv = vo(as), bv = vo(function(e, n) {
        return e >= n;
      }), An = fu(function() {
        return arguments;
      }()) ? fu : function(e) {
        return Ve(e) && oe.call(e, "callee") && !Kc.call(e, "callee");
      }, H = g.isArray, Ev = Wc ? at(Wc) : DV;
      function $e(e) {
        return e != null && Zo(e.length) && !Xt(e);
      }
      function Te(e) {
        return Ve(e) && $e(e);
      }
      function Sv(e) {
        return e === !0 || e === !1 || Ve(e) && _e(e) == Cr;
      }
      var mn = H1 || Hs, Fv = Ac ? at(Ac) : IV;
      function Wv(e) {
        return Ve(e) && e.nodeType === 1 && !ni(e);
      }
      function Av(e) {
        if (e == null)
          return !0;
        if ($e(e) && (H(e) || typeof e == "string" || typeof e.splice == "function" || mn(e) || cr(e) || An(e)))
          return !e.length;
        var n = Qe(e);
        if (n == yt || n == kt)
          return !e.size;
        if (ei(e))
          return !cs(e).length;
        for (var o in e)
          if (oe.call(e, o))
            return !1;
        return !0;
      }
      function Cv(e, n) {
        return qr(e, n);
      }
      function xv(e, n, o) {
        o = typeof o == "function" ? o : r;
        var s = o ? o(e, n) : r;
        return s === r ? qr(e, n, r, o) : !!s;
      }
      function Cs(e) {
        if (!Ve(e))
          return !1;
        var n = _e(e);
        return n == Di || n == om || typeof e.message == "string" && typeof e.name == "string" && !ni(e);
      }
      function Bv(e) {
        return typeof e == "number" && eu(e);
      }
      function Xt(e) {
        if (!he(e))
          return !1;
        var n = _e(e);
        return n == Ii || n == sc || n == im || n == sm;
      }
      function Ud(e) {
        return typeof e == "number" && e == P(e);
      }
      function Zo(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Pe;
      }
      function he(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function Ve(e) {
        return e != null && typeof e == "object";
      }
      var gd = Cc ? at(Cc) : QV;
      function Dv(e, n) {
        return e === n || ls(e, n, ys(n));
      }
      function Iv(e, n, o) {
        return o = typeof o == "function" ? o : r, ls(e, n, ys(n), o);
      }
      function Ov(e) {
        return Rd(e) && e != +e;
      }
      function Qv(e) {
        if (M0(e))
          throw new Y(u);
        return hu(e);
      }
      function zv(e) {
        return e === null;
      }
      function Gv(e) {
        return e == null;
      }
      function Rd(e) {
        return typeof e == "number" || Ve(e) && _e(e) == Br;
      }
      function ni(e) {
        if (!Ve(e) || _e(e) != zt)
          return !1;
        var n = $i(e);
        if (n === null)
          return !0;
        var o = oe.call(n, "constructor") && n.constructor;
        return typeof o == "function" && o instanceof o && Xi.call(o) == I1;
      }
      var xs = xc ? at(xc) : zV;
      function Yv(e) {
        return Ud(e) && e >= -Pe && e <= Pe;
      }
      var Nd = Bc ? at(Bc) : GV;
      function Jo(e) {
        return typeof e == "string" || !H(e) && Ve(e) && _e(e) == Ir;
      }
      function lt(e) {
        return typeof e == "symbol" || Ve(e) && _e(e) == Oi;
      }
      var cr = Dc ? at(Dc) : YV;
      function Hv(e) {
        return e === r;
      }
      function Pv(e) {
        return Ve(e) && Qe(e) == Or;
      }
      function _v(e) {
        return Ve(e) && _e(e) == cm;
      }
      var jv = vo(us), Xv = vo(function(e, n) {
        return e <= n;
      });
      function Md(e) {
        if (!e)
          return [];
        if ($e(e))
          return Jo(e) ? Zt(e) : Ke(e);
        if (Gr && e[Gr])
          return Z1(e[Gr]());
        var n = Qe(e), o = n == yt ? qa : n == kt ? Pi : ur;
        return o(e);
      }
      function Lt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = gt(e), e === We || e === -We) {
          var n = e < 0 ? -1 : 1;
          return n * Ar;
        }
        return e === e ? e : 0;
      }
      function P(e) {
        var n = Lt(e), o = n % 1;
        return n === n ? o ? n - o : n : 0;
      }
      function yd(e) {
        return e ? En(P(e), 0, Ct) : 0;
      }
      function gt(e) {
        if (typeof e == "number")
          return e;
        if (lt(e))
          return xi;
        if (he(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = he(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Yc(e);
        var o = Em.test(e);
        return o || Fm.test(e) ? u1(e.slice(2), o ? 2 : 8) : bm.test(e) ? xi : +e;
      }
      function kd(e) {
        return Bt(e, et(e));
      }
      function Lv(e) {
        return e ? En(P(e), -Pe, Pe) : e === 0 ? e : 0;
      }
      function ie(e) {
        return e == null ? "" : st(e);
      }
      var qv = ar(function(e, n) {
        if (ei(n) || $e(n)) {
          Bt(n, be(n), e);
          return;
        }
        for (var o in n)
          oe.call(n, o) && jr(e, o, n[o]);
      }), Zd = ar(function(e, n) {
        Bt(n, et(n), e);
      }), bo = ar(function(e, n, o, s) {
        Bt(n, et(n), e, s);
      }), Kv = ar(function(e, n, o, s) {
        Bt(n, be(n), e, s);
      }), $v = _t(rs);
      function eT(e, n) {
        var o = or(e);
        return n == null ? o : ou(o, n);
      }
      var tT = j(function(e, n) {
        e = ce(e);
        var o = -1, s = n.length, c = s > 2 ? n[2] : r;
        for (c && je(n[0], n[1], c) && (s = 1); ++o < s; )
          for (var h = n[o], m = et(h), w = -1, T = m.length; ++w < T; ) {
            var y = m[w], k = e[y];
            (k === r || bt(k, nr[y]) && !oe.call(e, y)) && (e[y] = h[y]);
          }
        return e;
      }), nT = j(function(e) {
        return e.push(r, Yu), ot(Jd, r, e);
      });
      function rT(e, n) {
        return Oc(e, O(n, 3), xt);
      }
      function iT(e, n) {
        return Oc(e, O(n, 3), os);
      }
      function oT(e, n) {
        return e == null ? e : is(e, O(n, 3), et);
      }
      function aT(e, n) {
        return e == null ? e : uu(e, O(n, 3), et);
      }
      function sT(e, n) {
        return e && xt(e, O(n, 3));
      }
      function lT(e, n) {
        return e && os(e, O(n, 3));
      }
      function cT(e) {
        return e == null ? [] : co(e, be(e));
      }
      function uT(e) {
        return e == null ? [] : co(e, et(e));
      }
      function Bs(e, n, o) {
        var s = e == null ? r : Sn(e, n);
        return s === r ? o : s;
      }
      function dT(e, n) {
        return e != null && _u(e, n, AV);
      }
      function Ds(e, n) {
        return e != null && _u(e, n, CV);
      }
      var fT = Iu(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = Li.call(n)), e[n] = o;
      }, Os(tt)), hT = Iu(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = Li.call(n)), oe.call(e, n) ? e[n].push(o) : e[n] = [o];
      }, O), pT = j(Lr);
      function be(e) {
        return $e(e) ? ru(e) : cs(e);
      }
      function et(e) {
        return $e(e) ? ru(e, !0) : HV(e);
      }
      function mT(e, n) {
        var o = {};
        return n = O(n, 3), xt(e, function(s, c, h) {
          Ht(o, n(s, c, h), s);
        }), o;
      }
      function VT(e, n) {
        var o = {};
        return n = O(n, 3), xt(e, function(s, c, h) {
          Ht(o, c, n(s, c, h));
        }), o;
      }
      var wT = ar(function(e, n, o) {
        uo(e, n, o);
      }), Jd = ar(function(e, n, o, s) {
        uo(e, n, o, s);
      }), vT = _t(function(e, n) {
        var o = {};
        if (e == null)
          return o;
        var s = !1;
        n = fe(n, function(h) {
          return h = hn(h, e), s || (s = h.length > 1), h;
        }), Bt(e, Ns(e), o), s && (o = vt(o, M | Z | B, f0));
        for (var c = n.length; c--; )
          ms(o, n[c]);
        return o;
      });
      function TT(e, n) {
        return bd(e, ko(O(n)));
      }
      var UT = _t(function(e, n) {
        return e == null ? {} : _V(e, n);
      });
      function bd(e, n) {
        if (e == null)
          return {};
        var o = fe(Ns(e), function(s) {
          return [s];
        });
        return n = O(n), Uu(e, o, function(s, c) {
          return n(s, c[0]);
        });
      }
      function gT(e, n, o) {
        n = hn(n, e);
        var s = -1, c = n.length;
        for (c || (c = 1, e = r); ++s < c; ) {
          var h = e == null ? r : e[Dt(n[s])];
          h === r && (s = c, h = o), e = Xt(h) ? h.call(e) : h;
        }
        return e;
      }
      function RT(e, n, o) {
        return e == null ? e : Kr(e, n, o);
      }
      function NT(e, n, o, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : Kr(e, n, o, s);
      }
      var Ed = zu(be), Sd = zu(et);
      function MT(e, n, o) {
        var s = H(e), c = s || mn(e) || cr(e);
        if (n = O(n, 4), o == null) {
          var h = e && e.constructor;
          c ? o = s ? new h() : [] : he(e) ? o = Xt(h) ? or($i(e)) : {} : o = {};
        }
        return (c ? mt : xt)(e, function(m, w, T) {
          return n(o, m, w, T);
        }), o;
      }
      function yT(e, n) {
        return e == null ? !0 : ms(e, n);
      }
      function kT(e, n, o) {
        return e == null ? e : yu(e, n, vs(o));
      }
      function ZT(e, n, o, s) {
        return s = typeof s == "function" ? s : r, e == null ? e : yu(e, n, vs(o), s);
      }
      function ur(e) {
        return e == null ? [] : La(e, be(e));
      }
      function JT(e) {
        return e == null ? [] : La(e, et(e));
      }
      function bT(e, n, o) {
        return o === r && (o = n, n = r), o !== r && (o = gt(o), o = o === o ? o : 0), n !== r && (n = gt(n), n = n === n ? n : 0), En(gt(e), n, o);
      }
      function ET(e, n, o) {
        return n = Lt(n), o === r ? (o = n, n = 0) : o = Lt(o), e = gt(e), xV(e, n, o);
      }
      function ST(e, n, o) {
        if (o && typeof o != "boolean" && je(e, n, o) && (n = o = r), o === r && (typeof n == "boolean" ? (o = n, n = r) : typeof e == "boolean" && (o = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = Lt(e), n === r ? (n = e, e = 0) : n = Lt(n)), e > n) {
          var s = e;
          e = n, n = s;
        }
        if (o || e % 1 || n % 1) {
          var c = tu();
          return Oe(e + c * (n - e + c1("1e-" + ((c + "").length - 1))), n);
        }
        return fs(e, n);
      }
      var FT = sr(function(e, n, o) {
        return n = n.toLowerCase(), e + (o ? Fd(n) : n);
      });
      function Fd(e) {
        return Is(ie(e).toLowerCase());
      }
      function Wd(e) {
        return e = ie(e), e && e.replace(Am, R1).replace($m, "");
      }
      function WT(e, n, o) {
        e = ie(e), n = st(n);
        var s = e.length;
        o = o === r ? s : En(P(o), 0, s);
        var c = o;
        return o -= n.length, o >= 0 && e.slice(o, c) == n;
      }
      function AT(e) {
        return e = ie(e), e && pm.test(e) ? e.replace(uc, N1) : e;
      }
      function CT(e) {
        return e = ie(e), e && Um.test(e) ? e.replace(Aa, "\\$&") : e;
      }
      var xT = sr(function(e, n, o) {
        return e + (o ? "-" : "") + n.toLowerCase();
      }), BT = sr(function(e, n, o) {
        return e + (o ? " " : "") + n.toLowerCase();
      }), DT = xu("toLowerCase");
      function IT(e, n, o) {
        e = ie(e), n = P(n);
        var s = n ? er(e) : 0;
        if (!n || s >= n)
          return e;
        var c = (n - s) / 2;
        return wo(ro(c), o) + e + wo(no(c), o);
      }
      function OT(e, n, o) {
        e = ie(e), n = P(n);
        var s = n ? er(e) : 0;
        return n && s < n ? e + wo(n - s, o) : e;
      }
      function QT(e, n, o) {
        e = ie(e), n = P(n);
        var s = n ? er(e) : 0;
        return n && s < n ? wo(n - s, o) + e : e;
      }
      function zT(e, n, o) {
        return o || n == null ? n = 0 : n && (n = +n), X1(ie(e).replace(Ca, ""), n || 0);
      }
      function GT(e, n, o) {
        return (o ? je(e, n, o) : n === r) ? n = 1 : n = P(n), hs(ie(e), n);
      }
      function YT() {
        var e = arguments, n = ie(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var HT = sr(function(e, n, o) {
        return e + (o ? "_" : "") + n.toLowerCase();
      });
      function PT(e, n, o) {
        return o && typeof o != "number" && je(e, n, o) && (n = o = r), o = o === r ? Ct : o >>> 0, o ? (e = ie(e), e && (typeof n == "string" || n != null && !xs(n)) && (n = st(n), !n && $n(e)) ? pn(Zt(e), 0, o) : e.split(n, o)) : [];
      }
      var _T = sr(function(e, n, o) {
        return e + (o ? " " : "") + Is(n);
      });
      function jT(e, n, o) {
        return e = ie(e), o = o == null ? 0 : En(P(o), 0, e.length), n = st(n), e.slice(o, o + n.length) == n;
      }
      function XT(e, n, o) {
        var s = d.templateSettings;
        o && je(e, n, o) && (n = r), e = ie(e), n = bo({}, n, s, Gu);
        var c = bo({}, n.imports, s.imports, Gu), h = be(c), m = La(c, h), w, T, y = 0, k = n.interpolate || Qi, b = "__p += '", A = Ka(
          (n.escape || Qi).source + "|" + k.source + "|" + (k === dc ? Jm : Qi).source + "|" + (n.evaluate || Qi).source + "|$",
          "g"
        ), I = "//# sourceURL=" + (oe.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++i1 + "]") + `
`;
        e.replace(A, function(z, K, te, ct, Xe, ut) {
          return te || (te = ct), b += e.slice(y, ut).replace(Cm, M1), K && (w = !0, b += `' +
__e(` + K + `) +
'`), Xe && (T = !0, b += `';
` + Xe + `;
__p += '`), te && (b += `' +
((__t = (` + te + `)) == null ? '' : __t) +
'`), y = ut + z.length, z;
        }), b += `';
`;
        var Q = oe.call(n, "variable") && n.variable;
        if (!Q)
          b = `with (obj) {
` + b + `
}
`;
        else if (km.test(Q))
          throw new Y(p);
        b = (T ? b.replace(um, "") : b).replace(dm, "$1").replace(fm, "$1;"), b = "function(" + (Q || "obj") + `) {
` + (Q ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (T ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + b + `return __p
}`;
        var _ = Cd(function() {
          return ne(h, I + "return " + b).apply(r, m);
        });
        if (_.source = b, Cs(_))
          throw _;
        return _;
      }
      function LT(e) {
        return ie(e).toLowerCase();
      }
      function qT(e) {
        return ie(e).toUpperCase();
      }
      function KT(e, n, o) {
        if (e = ie(e), e && (o || n === r))
          return Yc(e);
        if (!e || !(n = st(n)))
          return e;
        var s = Zt(e), c = Zt(n), h = Hc(s, c), m = Pc(s, c) + 1;
        return pn(s, h, m).join("");
      }
      function $T(e, n, o) {
        if (e = ie(e), e && (o || n === r))
          return e.slice(0, jc(e) + 1);
        if (!e || !(n = st(n)))
          return e;
        var s = Zt(e), c = Pc(s, Zt(n)) + 1;
        return pn(s, 0, c).join("");
      }
      function eU(e, n, o) {
        if (e = ie(e), e && (o || n === r))
          return e.replace(Ca, "");
        if (!e || !(n = st(n)))
          return e;
        var s = Zt(e), c = Hc(s, Zt(n));
        return pn(s, c).join("");
      }
      function tU(e, n) {
        var o = qe, s = pe;
        if (he(n)) {
          var c = "separator" in n ? n.separator : c;
          o = "length" in n ? P(n.length) : o, s = "omission" in n ? st(n.omission) : s;
        }
        e = ie(e);
        var h = e.length;
        if ($n(e)) {
          var m = Zt(e);
          h = m.length;
        }
        if (o >= h)
          return e;
        var w = o - er(s);
        if (w < 1)
          return s;
        var T = m ? pn(m, 0, w).join("") : e.slice(0, w);
        if (c === r)
          return T + s;
        if (m && (w += T.length - w), xs(c)) {
          if (e.slice(w).search(c)) {
            var y, k = T;
            for (c.global || (c = Ka(c.source, ie(fc.exec(c)) + "g")), c.lastIndex = 0; y = c.exec(k); )
              var b = y.index;
            T = T.slice(0, b === r ? w : b);
          }
        } else if (e.indexOf(st(c), w) != w) {
          var A = T.lastIndexOf(c);
          A > -1 && (T = T.slice(0, A));
        }
        return T + s;
      }
      function nU(e) {
        return e = ie(e), e && hm.test(e) ? e.replace(cc, S1) : e;
      }
      var rU = sr(function(e, n, o) {
        return e + (o ? " " : "") + n.toUpperCase();
      }), Is = xu("toUpperCase");
      function Ad(e, n, o) {
        return e = ie(e), n = o ? r : n, n === r ? k1(e) ? A1(e) : w1(e) : e.match(n) || [];
      }
      var Cd = j(function(e, n) {
        try {
          return ot(e, r, n);
        } catch (o) {
          return Cs(o) ? o : new Y(o);
        }
      }), iU = _t(function(e, n) {
        return mt(n, function(o) {
          o = Dt(o), Ht(e, o, Ws(e[o], e));
        }), e;
      });
      function oU(e) {
        var n = e == null ? 0 : e.length, o = O();
        return e = n ? fe(e, function(s) {
          if (typeof s[1] != "function")
            throw new Vt(f);
          return [o(s[0]), s[1]];
        }) : [], j(function(s) {
          for (var c = -1; ++c < n; ) {
            var h = e[c];
            if (ot(h[0], this, s))
              return ot(h[1], this, s);
          }
        });
      }
      function aU(e) {
        return SV(vt(e, M));
      }
      function Os(e) {
        return function() {
          return e;
        };
      }
      function sU(e, n) {
        return e == null || e !== e ? n : e;
      }
      var lU = Du(), cU = Du(!0);
      function tt(e) {
        return e;
      }
      function Qs(e) {
        return pu(typeof e == "function" ? e : vt(e, M));
      }
      function uU(e) {
        return Vu(vt(e, M));
      }
      function dU(e, n) {
        return wu(e, vt(n, M));
      }
      var fU = j(function(e, n) {
        return function(o) {
          return Lr(o, e, n);
        };
      }), hU = j(function(e, n) {
        return function(o) {
          return Lr(e, o, n);
        };
      });
      function zs(e, n, o) {
        var s = be(n), c = co(n, s);
        o == null && !(he(n) && (c.length || !s.length)) && (o = n, n = e, e = this, c = co(n, be(n)));
        var h = !(he(o) && "chain" in o) || !!o.chain, m = Xt(e);
        return mt(c, function(w) {
          var T = n[w];
          e[w] = T, m && (e.prototype[w] = function() {
            var y = this.__chain__;
            if (h || y) {
              var k = e(this.__wrapped__), b = k.__actions__ = Ke(this.__actions__);
              return b.push({ func: T, args: arguments, thisArg: e }), k.__chain__ = y, k;
            }
            return T.apply(e, ln([this.value()], arguments));
          });
        }), e;
      }
      function pU() {
        return Ae._ === this && (Ae._ = O1), this;
      }
      function Gs() {
      }
      function mU(e) {
        return e = P(e), j(function(n) {
          return vu(n, e);
        });
      }
      var VU = Us(fe), wU = Us(Ic), vU = Us(Ha);
      function xd(e) {
        return Zs(e) ? Pa(Dt(e)) : jV(e);
      }
      function TU(e) {
        return function(n) {
          return e == null ? r : Sn(e, n);
        };
      }
      var UU = Ou(), gU = Ou(!0);
      function Ys() {
        return [];
      }
      function Hs() {
        return !1;
      }
      function RU() {
        return {};
      }
      function NU() {
        return "";
      }
      function MU() {
        return !0;
      }
      function yU(e, n) {
        if (e = P(e), e < 1 || e > Pe)
          return [];
        var o = Ct, s = Oe(e, Ct);
        n = O(n), e -= Ct;
        for (var c = Xa(s, n); ++o < e; )
          n(o);
        return c;
      }
      function kU(e) {
        return H(e) ? fe(e, Dt) : lt(e) ? [e] : Ke(nd(ie(e)));
      }
      function ZU(e) {
        var n = ++D1;
        return ie(e) + n;
      }
      var JU = Vo(function(e, n) {
        return e + n;
      }, 0), bU = gs("ceil"), EU = Vo(function(e, n) {
        return e / n;
      }, 1), SU = gs("floor");
      function FU(e) {
        return e && e.length ? lo(e, tt, as) : r;
      }
      function WU(e, n) {
        return e && e.length ? lo(e, O(n, 2), as) : r;
      }
      function AU(e) {
        return zc(e, tt);
      }
      function CU(e, n) {
        return zc(e, O(n, 2));
      }
      function xU(e) {
        return e && e.length ? lo(e, tt, us) : r;
      }
      function BU(e, n) {
        return e && e.length ? lo(e, O(n, 2), us) : r;
      }
      var DU = Vo(function(e, n) {
        return e * n;
      }, 1), IU = gs("round"), OU = Vo(function(e, n) {
        return e - n;
      }, 0);
      function QU(e) {
        return e && e.length ? ja(e, tt) : 0;
      }
      function zU(e, n) {
        return e && e.length ? ja(e, O(n, 2)) : 0;
      }
      return d.after = uv, d.ary = hd, d.assign = qv, d.assignIn = Zd, d.assignInWith = bo, d.assignWith = Kv, d.at = $v, d.before = pd, d.bind = Ws, d.bindAll = iU, d.bindKey = md, d.castArray = Rv, d.chain = ud, d.chunk = S0, d.compact = F0, d.concat = W0, d.cond = oU, d.conforms = aU, d.constant = Os, d.countBy = Qw, d.create = eT, d.curry = Vd, d.curryRight = wd, d.debounce = vd, d.defaults = tT, d.defaultsDeep = nT, d.defer = dv, d.delay = fv, d.difference = A0, d.differenceBy = C0, d.differenceWith = x0, d.drop = B0, d.dropRight = D0, d.dropRightWhile = I0, d.dropWhile = O0, d.fill = Q0, d.filter = Gw, d.flatMap = Pw, d.flatMapDeep = _w, d.flatMapDepth = jw, d.flatten = ad, d.flattenDeep = z0, d.flattenDepth = G0, d.flip = hv, d.flow = lU, d.flowRight = cU, d.fromPairs = Y0, d.functions = cT, d.functionsIn = uT, d.groupBy = Xw, d.initial = P0, d.intersection = _0, d.intersectionBy = j0, d.intersectionWith = X0, d.invert = fT, d.invertBy = hT, d.invokeMap = qw, d.iteratee = Qs, d.keyBy = Kw, d.keys = be, d.keysIn = et, d.map = No, d.mapKeys = mT, d.mapValues = VT, d.matches = uU, d.matchesProperty = dU, d.memoize = yo, d.merge = wT, d.mergeWith = Jd, d.method = fU, d.methodOf = hU, d.mixin = zs, d.negate = ko, d.nthArg = mU, d.omit = vT, d.omitBy = TT, d.once = pv, d.orderBy = $w, d.over = VU, d.overArgs = mv, d.overEvery = wU, d.overSome = vU, d.partial = As, d.partialRight = Td, d.partition = ev, d.pick = UT, d.pickBy = bd, d.property = xd, d.propertyOf = TU, d.pull = $0, d.pullAll = ld, d.pullAllBy = ew, d.pullAllWith = tw, d.pullAt = nw, d.range = UU, d.rangeRight = gU, d.rearg = Vv, d.reject = rv, d.remove = rw, d.rest = wv, d.reverse = Ss, d.sampleSize = ov, d.set = RT, d.setWith = NT, d.shuffle = av, d.slice = iw, d.sortBy = cv, d.sortedUniq = dw, d.sortedUniqBy = fw, d.split = PT, d.spread = vv, d.tail = hw, d.take = pw, d.takeRight = mw, d.takeRightWhile = Vw, d.takeWhile = ww, d.tap = Fw, d.throttle = Tv, d.thru = Ro, d.toArray = Md, d.toPairs = Ed, d.toPairsIn = Sd, d.toPath = kU, d.toPlainObject = kd, d.transform = MT, d.unary = Uv, d.union = vw, d.unionBy = Tw, d.unionWith = Uw, d.uniq = gw, d.uniqBy = Rw, d.uniqWith = Nw, d.unset = yT, d.unzip = Fs, d.unzipWith = cd, d.update = kT, d.updateWith = ZT, d.values = ur, d.valuesIn = JT, d.without = Mw, d.words = Ad, d.wrap = gv, d.xor = yw, d.xorBy = kw, d.xorWith = Zw, d.zip = Jw, d.zipObject = bw, d.zipObjectDeep = Ew, d.zipWith = Sw, d.entries = Ed, d.entriesIn = Sd, d.extend = Zd, d.extendWith = bo, zs(d, d), d.add = JU, d.attempt = Cd, d.camelCase = FT, d.capitalize = Fd, d.ceil = bU, d.clamp = bT, d.clone = Nv, d.cloneDeep = yv, d.cloneDeepWith = kv, d.cloneWith = Mv, d.conformsTo = Zv, d.deburr = Wd, d.defaultTo = sU, d.divide = EU, d.endsWith = WT, d.eq = bt, d.escape = AT, d.escapeRegExp = CT, d.every = zw, d.find = Yw, d.findIndex = id, d.findKey = rT, d.findLast = Hw, d.findLastIndex = od, d.findLastKey = iT, d.floor = SU, d.forEach = dd, d.forEachRight = fd, d.forIn = oT, d.forInRight = aT, d.forOwn = sT, d.forOwnRight = lT, d.get = Bs, d.gt = Jv, d.gte = bv, d.has = dT, d.hasIn = Ds, d.head = sd, d.identity = tt, d.includes = Lw, d.indexOf = H0, d.inRange = ET, d.invoke = pT, d.isArguments = An, d.isArray = H, d.isArrayBuffer = Ev, d.isArrayLike = $e, d.isArrayLikeObject = Te, d.isBoolean = Sv, d.isBuffer = mn, d.isDate = Fv, d.isElement = Wv, d.isEmpty = Av, d.isEqual = Cv, d.isEqualWith = xv, d.isError = Cs, d.isFinite = Bv, d.isFunction = Xt, d.isInteger = Ud, d.isLength = Zo, d.isMap = gd, d.isMatch = Dv, d.isMatchWith = Iv, d.isNaN = Ov, d.isNative = Qv, d.isNil = Gv, d.isNull = zv, d.isNumber = Rd, d.isObject = he, d.isObjectLike = Ve, d.isPlainObject = ni, d.isRegExp = xs, d.isSafeInteger = Yv, d.isSet = Nd, d.isString = Jo, d.isSymbol = lt, d.isTypedArray = cr, d.isUndefined = Hv, d.isWeakMap = Pv, d.isWeakSet = _v, d.join = L0, d.kebabCase = xT, d.last = Ut, d.lastIndexOf = q0, d.lowerCase = BT, d.lowerFirst = DT, d.lt = jv, d.lte = Xv, d.max = FU, d.maxBy = WU, d.mean = AU, d.meanBy = CU, d.min = xU, d.minBy = BU, d.stubArray = Ys, d.stubFalse = Hs, d.stubObject = RU, d.stubString = NU, d.stubTrue = MU, d.multiply = DU, d.nth = K0, d.noConflict = pU, d.noop = Gs, d.now = Mo, d.pad = IT, d.padEnd = OT, d.padStart = QT, d.parseInt = zT, d.random = ST, d.reduce = tv, d.reduceRight = nv, d.repeat = GT, d.replace = YT, d.result = gT, d.round = IU, d.runInContext = v, d.sample = iv, d.size = sv, d.snakeCase = HT, d.some = lv, d.sortedIndex = ow, d.sortedIndexBy = aw, d.sortedIndexOf = sw, d.sortedLastIndex = lw, d.sortedLastIndexBy = cw, d.sortedLastIndexOf = uw, d.startCase = _T, d.startsWith = jT, d.subtract = OU, d.sum = QU, d.sumBy = zU, d.template = XT, d.times = yU, d.toFinite = Lt, d.toInteger = P, d.toLength = yd, d.toLower = LT, d.toNumber = gt, d.toSafeInteger = Lv, d.toString = ie, d.toUpper = qT, d.trim = KT, d.trimEnd = $T, d.trimStart = eU, d.truncate = tU, d.unescape = nU, d.uniqueId = ZU, d.upperCase = rU, d.upperFirst = Is, d.each = dd, d.eachRight = fd, d.first = sd, zs(d, function() {
        var e = {};
        return xt(d, function(n, o) {
          oe.call(d.prototype, o) || (e[o] = n);
        }), e;
      }(), { chain: !1 }), d.VERSION = a, mt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        d[e].placeholder = d;
      }), mt(["drop", "take"], function(e, n) {
        $.prototype[e] = function(o) {
          o = o === r ? 1 : Ze(P(o), 0);
          var s = this.__filtered__ && !n ? new $(this) : this.clone();
          return s.__filtered__ ? s.__takeCount__ = Oe(o, s.__takeCount__) : s.__views__.push({
            size: Oe(o, Ct),
            type: e + (s.__dir__ < 0 ? "Right" : "")
          }), s;
        }, $.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), mt(["filter", "map", "takeWhile"], function(e, n) {
        var o = n + 1, s = o == Me || o == Fe;
        $.prototype[e] = function(c) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: O(c, 3),
            type: o
          }), h.__filtered__ = h.__filtered__ || s, h;
        };
      }), mt(["head", "last"], function(e, n) {
        var o = "take" + (n ? "Right" : "");
        $.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), mt(["initial", "tail"], function(e, n) {
        var o = "drop" + (n ? "" : "Right");
        $.prototype[e] = function() {
          return this.__filtered__ ? new $(this) : this[o](1);
        };
      }), $.prototype.compact = function() {
        return this.filter(tt);
      }, $.prototype.find = function(e) {
        return this.filter(e).head();
      }, $.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, $.prototype.invokeMap = j(function(e, n) {
        return typeof e == "function" ? new $(this) : this.map(function(o) {
          return Lr(o, e, n);
        });
      }), $.prototype.reject = function(e) {
        return this.filter(ko(O(e)));
      }, $.prototype.slice = function(e, n) {
        e = P(e);
        var o = this;
        return o.__filtered__ && (e > 0 || n < 0) ? new $(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), n !== r && (n = P(n), o = n < 0 ? o.dropRight(-n) : o.take(n - e)), o);
      }, $.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, $.prototype.toArray = function() {
        return this.take(Ct);
      }, xt($.prototype, function(e, n) {
        var o = /^(?:filter|find|map|reject)|While$/.test(n), s = /^(?:head|last)$/.test(n), c = d[s ? "take" + (n == "last" ? "Right" : "") : n], h = s || /^find/.test(n);
        !c || (d.prototype[n] = function() {
          var m = this.__wrapped__, w = s ? [1] : arguments, T = m instanceof $, y = w[0], k = T || H(m), b = function(K) {
            var te = c.apply(d, ln([K], w));
            return s && A ? te[0] : te;
          };
          k && o && typeof y == "function" && y.length != 1 && (T = k = !1);
          var A = this.__chain__, I = !!this.__actions__.length, Q = h && !A, _ = T && !I;
          if (!h && k) {
            m = _ ? m : new $(this);
            var z = e.apply(m, w);
            return z.__actions__.push({ func: Ro, args: [b], thisArg: r }), new wt(z, A);
          }
          return Q && _ ? e.apply(this, w) : (z = this.thru(b), Q ? s ? z.value()[0] : z.value() : z);
        });
      }), mt(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = _i[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", s = /^(?:pop|shift)$/.test(e);
        d.prototype[e] = function() {
          var c = arguments;
          if (s && !this.__chain__) {
            var h = this.value();
            return n.apply(H(h) ? h : [], c);
          }
          return this[o](function(m) {
            return n.apply(H(m) ? m : [], c);
          });
        };
      }), xt($.prototype, function(e, n) {
        var o = d[n];
        if (o) {
          var s = o.name + "";
          oe.call(ir, s) || (ir[s] = []), ir[s].push({ name: n, func: o });
        }
      }), ir[mo(r, S).name] = [{
        name: "wrapper",
        func: r
      }], $.prototype.clone = nV, $.prototype.reverse = rV, $.prototype.value = iV, d.prototype.at = Ww, d.prototype.chain = Aw, d.prototype.commit = Cw, d.prototype.next = xw, d.prototype.plant = Dw, d.prototype.reverse = Iw, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = Ow, d.prototype.first = d.prototype.head, Gr && (d.prototype[Gr] = Bw), d;
    }, tr = C1();
    kn ? ((kn.exports = tr)._ = tr, Qa._ = tr) : Ae._ = tr;
  }).call(ri);
})(Re, Re.exports);
const mR = window.Pinia.defineStore, VR = mR("situationsStore", {
  state: () => ({
    situations: []
  }),
  actions: {
    async getSituations() {
      this.situations = [];
      const t = await pR();
      if (t) {
        const i = Re.exports.groupBy(t, "status"), r = [
          ...i.CREATED || [],
          ...i.ACCEPTED || [],
          ...i.REJECTED || []
        ];
        this.situations = r;
      }
    }
  }
}), wR = window.Vue.openBlock, vR = window.Vue.createElementBlock, TR = window.Vue.createElementVNode;
var UR = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const gR = {}, RR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NR = /* @__PURE__ */ TR("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), MR = [
  NR
];
function yR(t, i) {
  return wR(), vR("svg", RR, MR);
}
var ip = /* @__PURE__ */ UR(gR, [["render", yR]]);
var kR = Object.defineProperty, lf = Object.getOwnPropertySymbols, ZR = Object.prototype.hasOwnProperty, JR = Object.prototype.propertyIsEnumerable, cf = (t, i, r) => i in t ? kR(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, uf = (t, i) => {
  for (var r in i || (i = {}))
    ZR.call(i, r) && cf(t, r, i[r]);
  if (lf)
    for (var r of lf(i))
      JR.call(i, r) && cf(t, r, i[r]);
  return t;
};
const bR = window.Vue.defineComponent, ER = window.Vue.toRaw, sl = window.Vue.h;
var SR = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const FR = {
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
}, WR = bR({
  props: FR,
  render() {
    const t = this.$attrs, i = t.class ? t.class.split(" ").reduce((l, u) => (l[u] = !0, l), {}) : {}, r = {};
    i["feather-icon"] = !0, this.flex && (i["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let a = ER(this.icon);
    return this.$slots.default ? sl("span", { class: "feather-icon-container" }, [
      sl(this.$slots.default()[0], uf({
        class: i
      }, r))
    ]) : sl(a, uf({
      class: i
    }, r));
  }
});
var Ne = /* @__PURE__ */ SR(WR, [["__scopeId", "data-v-52cbf270"]]);
const AR = window.Vue.openBlock, CR = window.Vue.createElementBlock, xR = window.Vue.createElementVNode;
var BR = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const DR = {}, IR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, OR = /* @__PURE__ */ xR("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), QR = [
  OR
];
function zR(t, i) {
  return AR(), CR("svg", IR, QR);
}
var op = /* @__PURE__ */ BR(DR, [["render", zR]]);
const GR = window.Vue.defineComponent, Kt = window.Vue.unref, df = window.Vue.normalizeClass, hr = window.Vue.createElementVNode, ll = window.Vue.toDisplayString, ff = window.Vue.createVNode, ii = window.Vue.openBlock, oi = window.Vue.createElementBlock, hf = window.Vue.createCommentVNode, YR = window.Vue.createTextVNode, HR = window.Vue.renderList, PR = window.Vue.Fragment;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const _R = { class: "content" }, jR = { class: "title-row" }, XR = { class: "title" }, LR = {
  key: 0,
  class: "accepted"
}, qR = {
  key: 1,
  class: "rejected"
}, KR = { class: "count-info" }, $R = /* @__PURE__ */ YR(" Alarms: "), eN = { class: "info-title" }, tN = /* @__PURE__ */ GR({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    selected: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(t, { emit: i }) {
    const r = t, a = Ft.ACCEPTED, l = Ft.REJECTED, u = () => {
      var f;
      i("situation-selected", (f = r.situationInfo) == null ? void 0 : f.id);
    };
    return (f, p) => {
      var V, U, R;
      return ii(), oi("div", {
        onClick: u,
        class: df(["card", {
          selected: r.selected,
          rejected: r.situationInfo.status == Kt(l)
        }])
      }, [
        hr("div", {
          class: df(["severity-line", [`${(U = (V = r.situationInfo) == null ? void 0 : V.severity) == null ? void 0 : U.toLowerCase()}-bg dark`]])
        }, null, 2),
        hr("div", _R, [
          hr("div", jR, [
            hr("div", XR, "Situation " + ll((R = r.situationInfo) == null ? void 0 : R.id), 1),
            r.situationInfo.status == Kt(a) ? (ii(), oi("div", LR, [
              ff(Kt(Ne), {
                icon: Kt(ip),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : hf("", !0),
            r.situationInfo.status == Kt(l) ? (ii(), oi("div", qR, [
              ff(Kt(Ne), {
                icon: Kt(op),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : hf("", !0)
          ]),
          hr("div", KR, [
            $R,
            hr("span", eN, ll(r.situationInfo.alarms.length), 1)
          ]),
          (ii(!0), oi(PR, null, HR(Kt(Re.exports.keys)(Kt(Re.exports.groupBy)(r.situationInfo.alarms, "nodeLabel")), (M) => (ii(), oi("div", {
            class: "info-title",
            key: M
          }, " - " + ll(M), 1))), 128))
        ])
      ], 2);
    };
  }
});
const nN = /* @__PURE__ */ He(tN, [["__scopeId", "data-v-3416146c"]]);
const Eo = window.Vue.ref, rN = window.Vue.inject, iN = window.Vue.computed, oN = window.Vue.onMounted, aN = {
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
}, sN = (t) => {
  const i = Eo(!1), r = Eo(), a = Eo(t.controls), l = Eo(t.id), u = () => {
    r.value && r.value.focus();
  }, f = rN("registerTab");
  oN(() => {
    if (r.value && f) {
      const V = r.value.parentElement, U = V && V.parentElement ? V.parentElement : void 0, R = Array.from(U ? U.children : []).filter((Z) => Z.querySelectorAll("[role=tab]").length), M = V ? R.indexOf(V) : -1;
      f({
        el: r.value,
        focus: u,
        disabled: t.disabled,
        selected: i,
        id: l,
        controls: a,
        index: M
      });
    }
  });
  const p = iN(() => ({
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
};
const Mi = function(t, i) {
  return window ? window.setTimeout(t, i) : setTimeout(t, i);
}, yi = function(t) {
  return window ? window.clearTimeout(t) : clearTimeout(t);
};
var lN = Object.defineProperty, cN = Object.defineProperties, uN = Object.getOwnPropertyDescriptors, pf = Object.getOwnPropertySymbols, dN = Object.prototype.hasOwnProperty, fN = Object.prototype.propertyIsEnumerable, mf = (t, i, r) => i in t ? lN(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Vf = (t, i) => {
  for (var r in i || (i = {}))
    dN.call(i, r) && mf(t, r, i[r]);
  if (pf)
    for (var r of pf(i))
      fN.call(i, r) && mf(t, r, i[r]);
  return t;
}, hN = (t, i) => cN(t, uN(i));
const pN = window.Vue.defineComponent, mN = window.Vue.h;
var VN = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const wN = {
  center: {
    type: Boolean,
    default: !1
  }
}, vN = pN({
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
    onClick(t) {
      this.pressed = !1, this.active = !1, requestAnimationFrame(() => {
        const { clientWidth: i, clientHeight: r } = this.parent, a = Math.round(Math.max(i, r));
        let l = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const u = this.parent.getBoundingClientRect(), f = t.pageY, p = t.pageX;
          l = {
            top: `${f - u.top - a / 2 - document.documentElement.scrollTop}px`,
            left: `${p - u.left - a / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = hN(Vf({}, l), {
          height: `${a}px`,
          width: `${a}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, yi(this.failsafe), this.failsafe = Mi(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return mN("div", {
        style: Vf({}, this.styles),
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
var Yn = /* @__PURE__ */ VN(vN, [["__scopeId", "data-v-18e2a5db"]]);
const se = function(t) {
  t = t || "feather";
  const i = Math.floor(Math.random() * 1e9);
  return [t.replace(/\s+/g, "-"), Date.now(), i].join("-");
}, q = {
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
}, wf = window.Vue.ref, TN = window.Vue.toRef, UN = window.Vue.watch, vf = window.Vue.provide, gN = {
  prop: "modelValue",
  event: "update:modelValue"
}, RN = {
  "update:modelValue": (t) => !0
}, NN = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, MN = (t, i) => {
  const r = TN(t, "modelValue"), a = wf(t.modelValue), l = wf([]);
  UN(r, (W) => {
    V(W);
  });
  const u = (W) => {
    W.preventDefault(), l.value.some((F, E) => F.tab && F.tab.el.contains(W.target) ? (p(E), V(E), !0) : !1);
  }, f = (W) => {
    if (((L) => L.shiftKey || L.ctrlKey || L.metaKey || L.altKey)(W))
      return;
    const E = W.keyCode, S = (L) => {
      L.stopPropagation(), L.preventDefault();
    }, D = l.value.filter((L) => L.tab && !L.tab.disabled), C = l.value.findIndex((L) => L.tab && L.tab.el.contains(document.activeElement));
    let G = C !== -1 ? C : a.value;
    const J = [q.RIGHT], X = [q.LEFT], ee = [q.ENTER, q.SPACE];
    t.vertical && (J.push(q.DOWN), X.push(q.UP)), J.indexOf(E) > -1 ? (G++, G >= D.length && (G = 0), S(W), p(l.value.indexOf(D[G]))) : X.indexOf(E) > -1 && (G--, G < 0 && (G = D.length - 1), S(W), p(l.value.indexOf(D[G]))), ee.indexOf(E) > -1 && V(G);
  }, p = (W) => {
    l.value.forEach(function(F, E) {
      W === E && F.tab && F.tab.focus();
    });
  }, V = (W) => {
    const F = l.value[W];
    !F || F.tab && F.tab.disabled || (l.value.forEach((E, S) => {
      E.tab && (E.tab.selected = W === S), E.panel && (E.panel.selected = W === S);
    }), a.value = W, i.emit("update:modelValue", W));
  };
  vf("registerTab", (W) => {
    const F = W.index;
    F > -1 && (l.value[F] = { ...l.value[F], tab: W }, l.value = [...l.value], M());
  }), vf("registerPanel", (W) => {
    const F = W.index;
    F > -1 && (l.value[F] = {
      ...l.value[F],
      panel: W
    }, l.value = [...l.value], M());
  });
  const M = () => {
    l.value.forEach(({ tab: W, panel: F }, E) => {
      if (F && W) {
        const S = W.id || se("tab"), D = W.controls || se("panel");
        W.controls = D, W.id = S, F.tab = S, F.id = D;
      }
      E === a.value && (F && (F.selected = !0), W && (W.selected = !0));
    });
  };
  return {
    listeners: {
      click: u,
      keydown: f
    },
    attrs: {
      role: "tablist"
    },
    selected: a,
    pairs: l
  };
}, So = window.Vue.ref, yN = window.Vue.inject, kN = window.Vue.computed, ZN = window.Vue.onMounted, JN = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, bN = (t) => {
  const i = So(!1), r = So(), a = So(t.tab), l = So(t.id), u = yN("registerPanel");
  ZN(() => {
    if (u) {
      const p = r.value, V = p && p.parentElement ? p.parentElement : void 0, U = p ? Array.from(V ? V.children : []).indexOf(p) : -1;
      u({
        selected: i,
        id: l,
        tab: a,
        el: r.value,
        index: U
      });
    }
  });
  const f = kN(() => ({
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
    attrs: f,
    panel: r
  };
}, jl = window.Vue.defineComponent, EN = window.Vue.resolveComponent, Xl = window.Vue.openBlock, Ll = window.Vue.createElementBlock, vi = window.Vue.createElementVNode, ap = window.Vue.mergeProps, ea = window.Vue.renderSlot, SN = window.Vue.createVNode, FN = window.Vue.normalizeStyle, WN = window.Vue.toHandlers, AN = window.Vue.withDirectives, CN = window.Vue.normalizeProps, xN = window.Vue.guardReactiveProps, BN = window.Vue.vShow;
var ql = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const DN = aN, IN = jl({
  props: DN,
  setup(t) {
    return sN(t);
  },
  components: {
    FeatherRipple: Yn
  }
}), ON = { role: "presentation" }, QN = { class: "tab-text" };
function zN(t, i, r, a, l, u) {
  const f = EN("FeatherRipple");
  return Xl(), Ll("li", ON, [
    vi("button", ap(t.attrs, {
      class: ["tab hover focus", { disabled: t.disabled, selected: t.selected }]
    }), [
      vi("span", QN, [
        ea(t.$slots, "default", {}, void 0, !0)
      ]),
      SN(f)
    ], 16)
  ]);
}
var Tf = /* @__PURE__ */ ql(IN, [["render", zN], ["__scopeId", "data-v-e6bb52b6"]]);
const GN = NN, YN = RN, HN = jl({
  model: gN,
  emits: YN,
  props: GN,
  setup(t, i) {
    return MN(t, i);
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
}), PN = { class: "feather-tab-container" }, _N = { class: "tab-panels" };
function jN(t, i, r, a, l, u) {
  return Xl(), Ll("div", PN, [
    vi("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: FN({
        transform: t.transform,
        "transition-duration": t.duration,
        width: t.width
      })
    }, null, 4),
    vi("ul", ap(t.attrs, WN(t.listeners)), [
      ea(t.$slots, "tabs", {}, void 0, !0)
    ], 16),
    vi("div", _N, [
      ea(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var XN = /* @__PURE__ */ ql(HN, [["render", jN], ["__scopeId", "data-v-27adffb9"]]);
const LN = JN, qN = jl({
  props: LN,
  setup(t) {
    return bN(t);
  }
});
function KN(t, i, r, a, l, u) {
  return AN((Xl(), Ll("div", CN(xN(t.attrs)), [
    ea(t.$slots, "default")
  ], 16)), [
    [BN, t.selected]
  ]);
}
var Uf = /* @__PURE__ */ ql(qN, [["render", KN]]);
const $N = window.Vue.defineComponent, eM = window.Vue.toDisplayString, tM = window.Vue.normalizeClass, nM = window.Vue.openBlock, rM = window.Vue.createElementBlock, iM = window.Vue.createCommentVNode, oM = /* @__PURE__ */ $N({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const i = t;
    return (r, a) => i != null && i.severity ? (nM(), rM("span", {
      key: 0,
      class: tM(["severity-status", [`${i.severity.toLowerCase()}-color`]])
    }, eM(i.severity), 3)) : iM("", !0);
  }
});
const sp = /* @__PURE__ */ He(oM, [["__scopeId", "data-v-83c2cdce"]]), aM = window.Vue.defineComponent, gf = window.Vue.toDisplayString, Rf = window.Vue.createElementVNode, sM = window.Vue.openBlock, lM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const cM = { class: "box" }, uM = { class: "label" }, dM = { class: "date" }, fM = /* @__PURE__ */ aM({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(t) {
    const i = t;
    return (r, a) => (sM(), lM("div", cM, [
      Rf("div", uM, gf(i.label), 1),
      Rf("div", dM, gf(i.info), 1)
    ]));
  }
});
const cl = /* @__PURE__ */ He(fM, [["__scopeId", "data-v-b4afa751"]]), hM = window.Vue.defineComponent, pM = window.Vue.unref, mM = window.Vue.renderList, VM = window.Vue.Fragment, ul = window.Vue.openBlock, dl = window.Vue.createElementBlock, wM = window.Vue.toDisplayString, vM = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const TM = { class: "alarms-list" }, UM = /* @__PURE__ */ hM({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(t) {
    const i = t;
    return (r, a) => (ul(), dl("div", TM, [
      (ul(!0), dl(VM, null, mM(pM(Re.exports.groupBy)(i == null ? void 0 : i.alarms, "severity"), (l, u) => (ul(), dl("div", {
        class: vM(["alarm-count", [`${u.toString().toLowerCase()}-color`, i.size]]),
        key: u
      }, wM(l.length), 3))), 128))
    ]));
  }
});
const gM = /* @__PURE__ */ He(UM, [["__scopeId", "data-v-52d63440"]]);
const RM = window.Vue.computed, lp = (t, i) => {
  const r = {};
  return Object.keys(i).forEach((a) => {
    r[`${a}Label`] = RM(() => t.value[a] ? t.value[a] : i[a]);
  }), r;
}, NM = window.Vue.openBlock, MM = window.Vue.createElementBlock, yM = window.Vue.createElementVNode;
var kM = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const ZM = {}, JM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bM = /* @__PURE__ */ yM("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), EM = [
  bM
];
function SM(t, i) {
  return NM(), MM("svg", JM, EM);
}
var Kl = /* @__PURE__ */ kM(ZM, [["render", SM]]);
const Nf = window.Vue.computed, FM = (t, i, r) => {
  const a = Nf(() => i.value.filter((u) => !u.disabled)), l = Nf(() => t.value ? a.value.indexOf(t.value) : -1);
  return {
    selectPrevious() {
      t.value && t.value.disabled || (l.value === 0 ? r(a.value[a.value.length - 1]) : r(a.value[l.value - 1]));
    },
    selectNext() {
      t.value && t.value.disabled || (l.value === a.value.length - 1 ? r(a.value[0]) : r(a.value[l.value + 1]));
    }
  };
};
const WM = window.Vue.openBlock, AM = window.Vue.createElementBlock, $l = window.Vue.createElementVNode;
var CM = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const xM = {}, BM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DM = /* @__PURE__ */ $l("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), IM = /* @__PURE__ */ $l("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), OM = /* @__PURE__ */ $l("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), QM = [
  DM,
  IM,
  OM
];
function zM(t, i) {
  return WM(), AM("svg", BM, QM);
}
var GM = /* @__PURE__ */ CM(xM, [["render", zM]]), YM = Object.defineProperty, HM = Object.defineProperties, PM = Object.getOwnPropertyDescriptors, Mf = Object.getOwnPropertySymbols, _M = Object.prototype.hasOwnProperty, jM = Object.prototype.propertyIsEnumerable, yf = (t, i, r) => i in t ? YM(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, cp = (t, i) => {
  for (var r in i || (i = {}))
    _M.call(i, r) && yf(t, r, i[r]);
  if (Mf)
    for (var r of Mf(i))
      jM.call(i, r) && yf(t, r, i[r]);
  return t;
}, up = (t, i) => HM(t, PM(i));
const Fr = window.Vue.defineComponent, ki = window.Vue.resolveComponent, Ot = window.Vue.openBlock, Nr = window.Vue.createElementBlock, XM = window.Vue.createVNode, ta = window.Vue.createBlock, LM = window.Vue.withModifiers, br = window.Vue.inject, Zi = window.Vue.computed, qM = window.Vue.normalizeClass, pr = window.Vue.createElementVNode, na = window.Vue.toDisplayString, jo = window.Vue.renderSlot, Ti = window.Vue.createCommentVNode, KM = window.Vue.withDirectives, $M = window.Vue.vShow, Jl = window.Vue.ref, kf = window.Vue.toRef, Zf = window.Vue.nextTick, bl = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ec = window.Vue.provide, Jf = window.Vue.isRef, ey = window.Vue.onBeforeUnmount;
var Si = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const ty = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, ny = Fr({
  props: ty,
  components: {
    FeatherIcon: Ne
  }
}), ry = ["title"];
function iy(t, i, r, a, l, u) {
  const f = ki("FeatherIcon");
  return Ot(), Nr("a", {
    title: t.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    XM(f, { icon: t.icon }, null, 8, ["icon"])
  ], 8, ry);
}
var oy = /* @__PURE__ */ Si(ny, [["render", iy], ["__scopeId", "data-v-4265058e"]]);
const ay = Fr({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Kl;
    }
  },
  components: {
    ActionIcon: oy
  }
});
function sy(t, i, r, a, l, u) {
  const f = ki("ActionIcon");
  return Ot(), ta(f, {
    onClick: i[0] || (i[0] = LM((p) => t.$emit("clear"), ["stop", "prevent"])),
    title: t.clear,
    icon: t.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var ly = /* @__PURE__ */ Si(ay, [["render", sy]]);
const cy = Fr({
  computed: {
    errorIcon() {
      return GM;
    }
  },
  components: {
    FeatherIcon: Ne
  }
});
function uy(t, i, r, a, l, u) {
  const f = ki("FeatherIcon");
  return Ot(), ta(f, {
    icon: t.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var dy = /* @__PURE__ */ Si(cy, [["render", uy], ["__scopeId", "data-v-0b8faef3"]]);
const fy = {
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
}, hy = {
  clear: () => !0,
  "wrapper-click": (t) => !0
}, py = Fr({
  emits: hy,
  props: fy,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const t = br("wrapperOptions", {}), i = br("validationErrorMessage", !1), r = Zi(() => t.error ? t.error : i && i.value ? i.value : !1);
    return up(cp({}, t), { error: r });
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
    ClearIcon: ly,
    ErrorIcon: dy
  }
}), my = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, Vy = ["for"], wy = { class: "prefix" }, vy = { class: "post" };
function Ty(t, i, r, a, l, u) {
  const f = ki("ClearIcon"), p = ki("ErrorIcon");
  return Ot(), Nr("div", {
    class: qM(["feather-input-wrapper-container", t.containerCls])
  }, [
    pr("fieldset", my, [
      pr("legend", null, na(t.label), 1)
    ]),
    pr("label", {
      class: "feather-input-label",
      for: t.inputId,
      "data-ref-id": "feather-form-element-label"
    }, na(t.label), 9, Vy),
    pr("div", {
      class: "feather-input-wrapper",
      onClick: i[1] || (i[1] = (...V) => t.handleWrapperClick && t.handleWrapperClick(...V))
    }, [
      pr("div", wy, [
        jo(t.$slots, "pre", {}, void 0, !0)
      ]),
      jo(t.$slots, "default", {}, void 0, !0),
      pr("div", vy, [
        t.showClear && t.computedClearText ? (Ot(), ta(f, {
          key: 0,
          clear: t.computedClearText,
          onClear: i[0] || (i[0] = (V) => t.$emit("clear"))
        }, null, 8, ["clear"])) : Ti("", !0),
        t.error ? (Ot(), ta(p, { key: 1 })) : Ti("", !0),
        jo(t.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var dp = /* @__PURE__ */ Si(py, [["render", Ty], ["__scopeId", "data-v-4db296db"]]);
const Uy = Fr({
  setup() {
    const t = br("subTextOptions", {}), i = br("validationErrorMessage", !1), r = Zi(() => t.error ? t.error : i && i.value ? i.value : "");
    return up(cp({}, t), { error: r });
  }
}), gy = { class: "feather-input-sub-text" }, Ry = {
  key: 0,
  class: "feather-input-spacer"
}, Ny = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, My = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function yy(t, i, r, a, l, u) {
  return KM((Ot(), Nr("div", gy, [
    !t.hint && !t.error.length ? (Ot(), Nr("div", Ry, "\xA0")) : Ti("", !0),
    t.hint && !t.error.length ? (Ot(), Nr("div", Ny, na(t.hint), 1)) : Ti("", !0),
    t.error.length > 0 ? (Ot(), Nr("div", My, na(t.error), 1)) : Ti("", !0),
    jo(t.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [$M, !t.inline || t.hint || t.error.length]
  ]);
}
var pa = /* @__PURE__ */ Si(Uy, [["render", yy], ["__scopeId", "data-v-8e0ac99e"]]);
const ky = {
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
Fr({
  props: ky,
  setup(t) {
    const i = br("featherFormErrors", Jl([])), r = kf(t, "errorList"), a = Zi(() => {
      var R;
      return (R = r.value) != null && R.length ? r.value : i.value;
    }), l = kf(t, "generalError"), u = (R) => {
      document.getElementById(R).focus();
    }, f = (R) => R.replace(/ \*$/, ""), p = Jl(), V = (R) => `${f(R.label)} - ${R.message}`, U = Zi(() => (a.value.length && Zf(() => p.value.focus()), t.headingText(a.value)));
    return bl(l, (R) => {
      R.length && Zf(() => p.value.focus());
    }), {
      errors: a,
      errorsHeading: U,
      heading: p,
      focusElement: u,
      mainError: l,
      getFullMessage: V
    };
  }
});
const ma = (t, i, r, a, l) => {
  const u = br("featherForm", !1);
  if (a && u && t.value) {
    const f = Jl("");
    ec("validationErrorMessage", f);
    const p = () => {
      if (l && Jf(l) && l.value)
        return f.value = l.value, {
          success: !1,
          message: l.value,
          inputId: t.value,
          label: r
        };
      try {
        return a.validateSync(i.value), f.value = "", { success: !0 };
      } catch (R) {
        const M = R;
        return f.value = M.errors[0], {
          success: !1,
          message: M.errors[0],
          inputId: t.value,
          label: r
        };
      }
    }, U = {
      clear: () => {
        f.value = "";
      },
      validate: p
    };
    return l && Jf(l) && bl(l, () => {
      u.runValidation();
    }), bl(t, (R, M) => {
      R && u && u.register(R, U), M && u && u.deregister(M);
    }, { immediate: !0 }), ey(() => {
      u.deregister(t.value, !0);
    }), { validate: p };
  }
  return { validate: () => !0 };
}, Va = (t) => ({
  inherittedAttrs: Zi(() => ({
    class: t.class,
    "data-ref-id": t["data-ref-id"]
  }))
}), wa = {
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
}, va = (t) => {
  ec("subTextOptions", t);
}, fp = {
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
}, hp = (t) => {
  ec("wrapperOptions", t);
}, Fo = window.Vue.ref, Zy = window.Vue.watch, Jy = window.Vue.watchEffect, bf = window.Vue.computed, fl = window.Vue.provide, pp = (t, i, r, a, l) => {
  const u = Fo([]), f = Fo(), p = Fo(), V = Fo();
  Jy(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((D) => D.value);
    if (t.value !== void 0 && t.value !== null && (f.value = u.value[S.indexOf(t.value)]), !f.value && u.value.length) {
      let D = u.value.filter((C) => !C.disabled);
      D = D.length ? D : u.value, p.value = D[0], p.value.first = !0;
    }
  }), Zy(f, (S, D) => {
    D && (D.checked = !1), S && (S.checked = !0);
  });
  const U = (S) => {
    S && S.disabled || (p.value && (p.value.first = !1), f.value !== S && (i("update:modelValue", S.value), f.value = S, S.focus()));
  }, R = bf(() => f.value || p.value), M = FM(R, u, U), Z = bf(() => se("feather-radio-group"));
  V.value = Z.value;
  const { validate: B } = ma(V, t, r, a, l);
  return fl("register", (S) => {
    u.value = [...u.value, S], V.value === Z.value && (V.value = S.id);
  }), fl("select", U), fl("blur", (S) => {
    i("blur", S);
  }), {
    keydown: (S) => {
      switch (S.keyCode) {
        case 13:
        case 32:
          f.value ? U(f.value) : p.value && U(p.value);
          break;
        case 40:
        case 39:
          M.selectNext();
          break;
        case 37:
        case 38:
          M.selectPrevious();
          break;
      }
    },
    ...M,
    focus: () => {
      f.value && f.value.focus();
    },
    validate: B,
    firstElementId: V,
    groupId: Z
  };
};
var by = Object.defineProperty, Ey = Object.defineProperties, Sy = Object.getOwnPropertyDescriptors, Ef = Object.getOwnPropertySymbols, Fy = Object.prototype.hasOwnProperty, Wy = Object.prototype.propertyIsEnumerable, Sf = (t, i, r) => i in t ? by(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, yr = (t, i) => {
  for (var r in i || (i = {}))
    Fy.call(i, r) && Sf(t, r, i[r]);
  if (Ef)
    for (var r of Ef(i))
      Wy.call(i, r) && Sf(t, r, i[r]);
  return t;
}, mp = (t, i) => Ey(t, Sy(i));
const Mn = window.Vue.defineComponent, Ui = window.Vue.inject, ra = window.Vue.computed, gi = window.Vue.ref, Mt = window.Vue.resolveComponent, ft = window.Vue.openBlock, Fi = window.Vue.createElementBlock, Vp = window.Vue.normalizeClass, Qt = window.Vue.renderSlot, gn = window.Vue.createBlock, Ji = window.Vue.createCommentVNode, ia = window.Vue.createElementVNode, Ay = window.Vue.withModifiers, Ta = window.Vue.createVNode, wp = window.Vue.toRef, El = window.Vue.mergeProps, an = window.Vue.withCtx, Cy = window.Vue.h, xy = window.Vue.provide;
var yn = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const By = {
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
}, Dy = Mn({
  props: By,
  setup(t) {
    const i = Ui("isCondensed", null), r = ra(() => i || t.condensed), a = gi(!1);
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
    FeatherRipple: Yn
  }
}), Iy = ["aria-disabled"];
function Oy(t, i, r, a, l, u) {
  const f = Mt("FeatherRipple");
  return ft(), Fi("div", {
    class: Vp(["chip", {
      condensed: t.isCondensed,
      disabled: t.disabled,
      focused: t.focused
    }]),
    onFocusin: i[0] || (i[0] = (p) => t.clickable ? t.handleFocus : null),
    onFocusout: i[1] || (i[1] = (p) => t.clickable ? t.handleBlur : null),
    "aria-disabled": t.disabled
  }, [
    Qt(t.$slots, "default", {}, void 0, !0),
    t.clickable ? (ft(), gn(f, { key: 0 })) : Ji("", !0)
  ], 42, Iy);
}
var Ua = /* @__PURE__ */ yn(Dy, [["render", Oy], ["__scopeId", "data-v-44d413dc"]]);
const Qy = {
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
}, zy = Mn({
  emits: ["delete"],
  props: Qy,
  setup(t, i) {
    return {
      handleDelete: () => {
        t.disabled || i.emit("delete");
      },
      icon: Kl
    };
  },
  components: {
    FeatherIcon: Ne
  }
}), Gy = { class: "chip-delete" }, Yy = ["aria-label", "aria-describedby"];
function Hy(t, i, r, a, l, u) {
  const f = Mt("FeatherIcon");
  return ft(), Fi("span", Gy, [
    ia("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: i[0] || (i[0] = Ay((...p) => t.handleDelete && t.handleDelete(...p), ["stop", "prevent"])),
      "aria-label": t.label,
      "aria-describedby": t.textId
    }, [
      Ta(f, {
        icon: t.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, Yy)
  ]);
}
var Py = /* @__PURE__ */ yn(zy, [["render", Hy], ["__scopeId", "data-v-4bae6cb4"]]);
const _y = Mn({
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
}), jy = ["title"];
function Xy(t, i, r, a, l, u) {
  return ft(), Fi("span", {
    class: "label",
    title: t.titleText,
    ref: "container"
  }, [
    Qt(t.$slots, "default", {}, void 0, !0)
  ], 8, jy);
}
var ga = /* @__PURE__ */ yn(_y, [["render", Xy], ["__scopeId", "data-v-1a0445b2"]]);
const Ly = {}, qy = {
  class: "chip-icon",
  role: "presentation"
};
function Ky(t, i) {
  return ft(), Fi("span", qy, [
    Qt(t.$slots, "default", {}, void 0, !0)
  ]);
}
var Ra = /* @__PURE__ */ yn(Ly, [["render", Ky], ["__scopeId", "data-v-2230176f"]]);
const Ff = {
  delete: "Remove"
}, $y = Mn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Ff
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(t, i) {
    const r = lp(wp(t, "labels"), Ff), a = ra(() => se("chip-text")), l = () => {
      t.disabled || i.emit("click");
    }, u = yr({}, i.attrs);
    return t.disabled && delete u.onClick, mp(yr({}, r), {
      chipTextId: a,
      handleClick: l,
      attrs: u
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
    Chip: Ua,
    DeleteIcon: Py,
    Label: ga,
    PreIcon: Ra
  }
}), ek = ["aria-disabled"];
function tk(t, i, r, a, l, u) {
  const f = Mt("PreIcon"), p = Mt("Label"), V = Mt("DeleteIcon"), U = Mt("Chip");
  return ft(), gn(U, El(t.attrs, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: { hover: t.canClick, focus: t.canClick || t.canDelete },
    role: "row",
    clickable: t.canClick
  }), {
    default: an(() => [
      ia("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        ia("span", El(t.chipTextAttrs, { class: "chip-label-button" }), [
          t.hasIcon ? (ft(), gn(f, { key: 0 }, {
            default: an(() => [
              Qt(t.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Ji("", !0),
          Ta(p, { id: t.chipTextId }, {
            default: an(() => [
              Qt(t.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, ek),
      t.canDelete ? (ft(), gn(V, {
        key: 0,
        disabled: t.disabled,
        "text-id": t.chipTextId,
        label: t.deleteLabel,
        role: "gridcell",
        onDelete: i[0] || (i[0] = (R) => t.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Ji("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var nk = /* @__PURE__ */ yn($y, [["render", tk], ["__scopeId", "data-v-48b2704a"]]);
const rk = Mn({
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
    Chip: Ua,
    Label: ga,
    PreIcon: Ra
  }
}), ik = ["aria-disabled"];
function ok(t, i, r, a, l, u) {
  const f = Mt("PreIcon"), p = Mt("Label"), V = Mt("Chip");
  return ft(), gn(V, {
    role: "row",
    disabled: t.disabled,
    condensed: t.condensed,
    clickable: !1
  }, {
    default: an(() => [
      ia("span", {
        role: "gridcell",
        "aria-disabled": t.disabled
      }, [
        t.hasIcon ? (ft(), gn(f, { key: 0 }, {
          default: an(() => [
            Qt(t.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Ji("", !0),
        Ta(p, null, {
          default: an(() => [
            Qt(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, ik)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var ak = /* @__PURE__ */ yn(rk, [["render", ok], ["__scopeId", "data-v-3e0c4eba"]]);
const sk = Mn({
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
    const i = gi(!1), r = gi(!1), a = ra(() => se("chip-label-id")), l = ra(() => i.value || r.value ? 0 : -1), u = gi(), f = () => {
      u.value.$el.focus();
    }, p = Ui("register", (Z) => {
    }), V = Ui("blur", (Z) => {
    }), U = Ui("select", (Z) => {
    }), R = {
      first: i,
      focus: f,
      disabled: t.disabled,
      value: t.value,
      checked: r
    };
    return p(R), {
      labelId: a,
      tabindex: l,
      first: i,
      blur: V,
      click: () => {
        U(R);
      },
      input: u,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((i) => i.children && i.children.length !== 0 || typeof i.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ua,
    Label: ga,
    PreIcon: Ra
  }
});
function lk(t, i, r, a, l, u) {
  const f = Mt("PreIcon"), p = Mt("Label"), V = Mt("Chip");
  return ft(), gn(V, {
    disabled: t.disabled,
    condensed: t.condensed,
    class: Vp(["focus hover", { selected: t.checked }]),
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
    default: an(() => [
      t.hasIcon ? (ft(), gn(f, { key: 0 }, {
        default: an(() => [
          Qt(t.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Ji("", !0),
      Ta(p, { id: t.labelId }, {
        default: an(() => [
          Qt(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var ck = /* @__PURE__ */ yn(sk, [["render", lk], ["__scopeId", "data-v-bbcc2f70"]]);
const uk = {
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
}, Wf = Mn({
  props: uk,
  setup() {
    return { format: Ui("chipListFormat", "") };
  },
  render() {
    const t = (i) => Cy(i, yr(yr({}, this.$props), this.$attrs), yr({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? t(nk) : this.format === "radio" ? t(ck) : t(ak);
  }
}), dk = {
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
}, fk = Mn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: dk,
  setup(t, i) {
    const r = t.mode === "list" ? "grid" : t.mode;
    xy("chipListFormat", r);
    const a = r === "single";
    if (r === "radio") {
      const f = wp(t, "modelValue");
      return mp(yr({
        attrs: {
          role: "radiogroup"
        }
      }, pp(f, i.emit, t.label, {}, gi(""))), {
        single: a
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: a };
  }
}), hk = ["aria-label"];
function pk(t, i, r, a, l, u) {
  return ft(), Fi("div", El(t.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": t.label,
    class: ["chip-list", { condensed: t.condensed, single: t.single }],
    onKeydown: i[0] || (i[0] = (...f) => t.keydown && t.keydown(...f))
  }), [
    Qt(t.$slots, "default", {}, void 0, !0)
  ], 16, hk);
}
var mk = /* @__PURE__ */ yn(fk, [["render", pk], ["__scopeId", "data-v-1e06f41d"]]);
function Hn(t) {
  if (t === null || t === !0 || t === !1)
    return NaN;
  var i = Number(t);
  return isNaN(i) ? i : i < 0 ? Math.ceil(i) : Math.floor(i);
}
function De(t, i) {
  if (i.length < t)
    throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + i.length + " present");
}
function Ye(t) {
  De(1, arguments);
  var i = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && i === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || i === "[object Number]" ? new Date(t) : ((typeof t == "string" || i === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Vk(t, i) {
  De(2, arguments);
  var r = Ye(t).getTime(), a = Hn(i);
  return new Date(r + a);
}
var wk = {};
function Wi() {
  return wk;
}
function Sl(t) {
  var i = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
  return i.setUTCFullYear(t.getFullYear()), t.getTime() - i.getTime();
}
function vk(t, i) {
  De(2, arguments);
  var r = Ye(t), a = Ye(i), l = r.getTime() - a.getTime();
  return l < 0 ? -1 : l > 0 ? 1 : l;
}
function Tk(t) {
  return De(1, arguments), t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]";
}
function Uk(t) {
  if (De(1, arguments), !Tk(t) && typeof t != "number")
    return !1;
  var i = Ye(t);
  return !isNaN(Number(i));
}
function gk(t, i) {
  De(2, arguments);
  var r = Hn(i);
  return Vk(t, -r);
}
var Rk = 864e5;
function Nk(t) {
  De(1, arguments);
  var i = Ye(t), r = i.getTime();
  i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
  var a = i.getTime(), l = r - a;
  return Math.floor(l / Rk) + 1;
}
function oa(t) {
  De(1, arguments);
  var i = 1, r = Ye(t), a = r.getUTCDay(), l = (a < i ? 7 : 0) + a - i;
  return r.setUTCDate(r.getUTCDate() - l), r.setUTCHours(0, 0, 0, 0), r;
}
function vp(t) {
  De(1, arguments);
  var i = Ye(t), r = i.getUTCFullYear(), a = new Date(0);
  a.setUTCFullYear(r + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var l = oa(a), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var f = oa(u);
  return i.getTime() >= l.getTime() ? r + 1 : i.getTime() >= f.getTime() ? r : r - 1;
}
function Mk(t) {
  De(1, arguments);
  var i = vp(t), r = new Date(0);
  r.setUTCFullYear(i, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = oa(r);
  return a;
}
var yk = 6048e5;
function kk(t) {
  De(1, arguments);
  var i = Ye(t), r = oa(i).getTime() - Mk(i).getTime();
  return Math.round(r / yk) + 1;
}
function aa(t, i) {
  var r, a, l, u, f, p, V, U;
  De(1, arguments);
  var R = Wi(), M = Hn((r = (a = (l = (u = i == null ? void 0 : i.weekStartsOn) !== null && u !== void 0 ? u : i == null || (f = i.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && l !== void 0 ? l : R.weekStartsOn) !== null && a !== void 0 ? a : (V = R.locale) === null || V === void 0 || (U = V.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(M >= 0 && M <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var Z = Ye(t), B = Z.getUTCDay(), W = (B < M ? 7 : 0) + B - M;
  return Z.setUTCDate(Z.getUTCDate() - W), Z.setUTCHours(0, 0, 0, 0), Z;
}
function Tp(t, i) {
  var r, a, l, u, f, p, V, U;
  De(1, arguments);
  var R = Ye(t), M = R.getUTCFullYear(), Z = Wi(), B = Hn((r = (a = (l = (u = i == null ? void 0 : i.firstWeekContainsDate) !== null && u !== void 0 ? u : i == null || (f = i.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && l !== void 0 ? l : Z.firstWeekContainsDate) !== null && a !== void 0 ? a : (V = Z.locale) === null || V === void 0 || (U = V.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var W = new Date(0);
  W.setUTCFullYear(M + 1, 0, B), W.setUTCHours(0, 0, 0, 0);
  var F = aa(W, i), E = new Date(0);
  E.setUTCFullYear(M, 0, B), E.setUTCHours(0, 0, 0, 0);
  var S = aa(E, i);
  return R.getTime() >= F.getTime() ? M + 1 : R.getTime() >= S.getTime() ? M : M - 1;
}
function Zk(t, i) {
  var r, a, l, u, f, p, V, U;
  De(1, arguments);
  var R = Wi(), M = Hn((r = (a = (l = (u = i == null ? void 0 : i.firstWeekContainsDate) !== null && u !== void 0 ? u : i == null || (f = i.locale) === null || f === void 0 || (p = f.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && l !== void 0 ? l : R.firstWeekContainsDate) !== null && a !== void 0 ? a : (V = R.locale) === null || V === void 0 || (U = V.options) === null || U === void 0 ? void 0 : U.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), Z = Tp(t, i), B = new Date(0);
  B.setUTCFullYear(Z, 0, M), B.setUTCHours(0, 0, 0, 0);
  var W = aa(B, i);
  return W;
}
var Jk = 6048e5;
function bk(t, i) {
  De(1, arguments);
  var r = Ye(t), a = aa(r, i).getTime() - Zk(r, i).getTime();
  return Math.round(a / Jk) + 1;
}
function ae(t, i) {
  for (var r = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < i; )
    a = "0" + a;
  return r + a;
}
var Ek = {
  y: function(t, i) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return ae(i === "yy" ? a % 100 : a, i.length);
  },
  M: function(t, i) {
    var r = t.getUTCMonth();
    return i === "M" ? String(r + 1) : ae(r + 1, 2);
  },
  d: function(t, i) {
    return ae(t.getUTCDate(), i.length);
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
    return ae(t.getUTCHours() % 12 || 12, i.length);
  },
  H: function(t, i) {
    return ae(t.getUTCHours(), i.length);
  },
  m: function(t, i) {
    return ae(t.getUTCMinutes(), i.length);
  },
  s: function(t, i) {
    return ae(t.getUTCSeconds(), i.length);
  },
  S: function(t, i) {
    var r = i.length, a = t.getUTCMilliseconds(), l = Math.floor(a * Math.pow(10, r - 3));
    return ae(l, i.length);
  }
};
const Vn = Ek;
var mr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Sk = {
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
    return Vn.y(t, i);
  },
  Y: function(t, i, r, a) {
    var l = Tp(t, a), u = l > 0 ? l : 1 - l;
    if (i === "YY") {
      var f = u % 100;
      return ae(f, 2);
    }
    return i === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ae(u, i.length);
  },
  R: function(t, i) {
    var r = vp(t);
    return ae(r, i.length);
  },
  u: function(t, i) {
    var r = t.getUTCFullYear();
    return ae(r, i.length);
  },
  Q: function(t, i, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (i) {
      case "Q":
        return String(a);
      case "QQ":
        return ae(a, 2);
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
        return ae(a, 2);
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
        return Vn.M(t, i);
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
        return ae(a + 1, 2);
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
    var l = bk(t, a);
    return i === "wo" ? r.ordinalNumber(l, {
      unit: "week"
    }) : ae(l, i.length);
  },
  I: function(t, i, r) {
    var a = kk(t);
    return i === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ae(a, i.length);
  },
  d: function(t, i, r) {
    return i === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Vn.d(t, i);
  },
  D: function(t, i, r) {
    var a = Nk(t);
    return i === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : ae(a, i.length);
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
    var l = t.getUTCDay(), u = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "e":
        return String(u);
      case "ee":
        return ae(u, 2);
      case "eo":
        return r.ordinalNumber(u, {
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
    var l = t.getUTCDay(), u = (l - a.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "c":
        return String(u);
      case "cc":
        return ae(u, i.length);
      case "co":
        return r.ordinalNumber(u, {
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
        return ae(l, i.length);
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
    switch (a === 12 ? l = mr.noon : a === 0 ? l = mr.midnight : l = a / 12 >= 1 ? "pm" : "am", i) {
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
    switch (a >= 17 ? l = mr.evening : a >= 12 ? l = mr.afternoon : a >= 4 ? l = mr.morning : l = mr.night, i) {
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
    return Vn.h(t, i);
  },
  H: function(t, i, r) {
    return i === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Vn.H(t, i);
  },
  K: function(t, i, r) {
    var a = t.getUTCHours() % 12;
    return i === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ae(a, i.length);
  },
  k: function(t, i, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), i === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ae(a, i.length);
  },
  m: function(t, i, r) {
    return i === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Vn.m(t, i);
  },
  s: function(t, i, r) {
    return i === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Vn.s(t, i);
  },
  S: function(t, i) {
    return Vn.S(t, i);
  },
  X: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (i) {
      case "X":
        return Cf(u);
      case "XXXX":
      case "XX":
        return In(u);
      case "XXXXX":
      case "XXX":
      default:
        return In(u, ":");
    }
  },
  x: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTimezoneOffset();
    switch (i) {
      case "x":
        return Cf(u);
      case "xxxx":
      case "xx":
        return In(u);
      case "xxxxx":
      case "xxx":
      default:
        return In(u, ":");
    }
  },
  O: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTimezoneOffset();
    switch (i) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Af(u, ":");
      case "OOOO":
      default:
        return "GMT" + In(u, ":");
    }
  },
  z: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTimezoneOffset();
    switch (i) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Af(u, ":");
      case "zzzz":
      default:
        return "GMT" + In(u, ":");
    }
  },
  t: function(t, i, r, a) {
    var l = a._originalDate || t, u = Math.floor(l.getTime() / 1e3);
    return ae(u, i.length);
  },
  T: function(t, i, r, a) {
    var l = a._originalDate || t, u = l.getTime();
    return ae(u, i.length);
  }
};
function Af(t, i) {
  var r = t > 0 ? "-" : "+", a = Math.abs(t), l = Math.floor(a / 60), u = a % 60;
  if (u === 0)
    return r + String(l);
  var f = i || "";
  return r + String(l) + f + ae(u, 2);
}
function Cf(t, i) {
  if (t % 60 === 0) {
    var r = t > 0 ? "-" : "+";
    return r + ae(Math.abs(t) / 60, 2);
  }
  return In(t, i);
}
function In(t, i) {
  var r = i || "", a = t > 0 ? "-" : "+", l = Math.abs(t), u = ae(Math.floor(l / 60), 2), f = ae(l % 60, 2);
  return a + u + r + f;
}
const Fk = Sk;
var xf = function(t, i) {
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
}, Up = function(t, i) {
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
}, Wk = function(t, i) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], l = r[2];
  if (!l)
    return xf(t, i);
  var u;
  switch (a) {
    case "P":
      u = i.dateTime({
        width: "short"
      });
      break;
    case "PP":
      u = i.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      u = i.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      u = i.dateTime({
        width: "full"
      });
      break;
  }
  return u.replace("{{date}}", xf(a, i)).replace("{{time}}", Up(l, i));
}, Ak = {
  p: Up,
  P: Wk
};
const Ck = Ak;
var xk = ["D", "DD"], Bk = ["YY", "YYYY"];
function Dk(t) {
  return xk.indexOf(t) !== -1;
}
function Ik(t) {
  return Bk.indexOf(t) !== -1;
}
function Bf(t, i, r) {
  if (t === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(i, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(i, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(i, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (t === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(i, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Ok = {
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
}, Qk = function(t, i, r) {
  var a, l = Ok[t];
  return typeof l == "string" ? a = l : i === 1 ? a = l.one : a = l.other.replace("{{count}}", i.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const zk = Qk;
function hl(t) {
  return function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = i.width ? String(i.width) : t.defaultWidth, a = t.formats[r] || t.formats[t.defaultWidth];
    return a;
  };
}
var Gk = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Yk = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Hk = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Pk = {
  date: hl({
    formats: Gk,
    defaultWidth: "full"
  }),
  time: hl({
    formats: Yk,
    defaultWidth: "full"
  }),
  dateTime: hl({
    formats: Hk,
    defaultWidth: "full"
  })
};
const _k = Pk;
var jk = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Xk = function(t, i, r, a) {
  return jk[t];
};
const Lk = Xk;
function ai(t) {
  return function(i, r) {
    var a = r != null && r.context ? String(r.context) : "standalone", l;
    if (a === "formatting" && t.formattingValues) {
      var u = t.defaultFormattingWidth || t.defaultWidth, f = r != null && r.width ? String(r.width) : u;
      l = t.formattingValues[f] || t.formattingValues[u];
    } else {
      var p = t.defaultWidth, V = r != null && r.width ? String(r.width) : t.defaultWidth;
      l = t.values[V] || t.values[p];
    }
    var U = t.argumentCallback ? t.argumentCallback(i) : i;
    return l[U];
  };
}
var qk = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Kk = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, $k = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, eZ = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, tZ = {
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
}, nZ = {
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
}, rZ = function(t, i) {
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
}, iZ = {
  ordinalNumber: rZ,
  era: ai({
    values: qk,
    defaultWidth: "wide"
  }),
  quarter: ai({
    values: Kk,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: ai({
    values: $k,
    defaultWidth: "wide"
  }),
  day: ai({
    values: eZ,
    defaultWidth: "wide"
  }),
  dayPeriod: ai({
    values: tZ,
    defaultWidth: "wide",
    formattingValues: nZ,
    defaultFormattingWidth: "wide"
  })
};
const oZ = iZ;
function si(t) {
  return function(i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.width, l = a && t.matchPatterns[a] || t.matchPatterns[t.defaultMatchWidth], u = i.match(l);
    if (!u)
      return null;
    var f = u[0], p = a && t.parsePatterns[a] || t.parsePatterns[t.defaultParseWidth], V = Array.isArray(p) ? sZ(p, function(M) {
      return M.test(f);
    }) : aZ(p, function(M) {
      return M.test(f);
    }), U;
    U = t.valueCallback ? t.valueCallback(V) : V, U = r.valueCallback ? r.valueCallback(U) : U;
    var R = i.slice(f.length);
    return {
      value: U,
      rest: R
    };
  };
}
function aZ(t, i) {
  for (var r in t)
    if (t.hasOwnProperty(r) && i(t[r]))
      return r;
}
function sZ(t, i) {
  for (var r = 0; r < t.length; r++)
    if (i(t[r]))
      return r;
}
function lZ(t) {
  return function(i) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = i.match(t.matchPattern);
    if (!a)
      return null;
    var l = a[0], u = i.match(t.parsePattern);
    if (!u)
      return null;
    var f = t.valueCallback ? t.valueCallback(u[0]) : u[0];
    f = r.valueCallback ? r.valueCallback(f) : f;
    var p = i.slice(l.length);
    return {
      value: f,
      rest: p
    };
  };
}
var cZ = /^(\d+)(th|st|nd|rd)?/i, uZ = /\d+/i, dZ = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, fZ = {
  any: [/^b/i, /^(a|c)/i]
}, hZ = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, pZ = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, mZ = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, VZ = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, wZ = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, vZ = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, TZ = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, UZ = {
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
}, gZ = {
  ordinalNumber: lZ({
    matchPattern: cZ,
    parsePattern: uZ,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: si({
    matchPatterns: dZ,
    defaultMatchWidth: "wide",
    parsePatterns: fZ,
    defaultParseWidth: "any"
  }),
  quarter: si({
    matchPatterns: hZ,
    defaultMatchWidth: "wide",
    parsePatterns: pZ,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: si({
    matchPatterns: mZ,
    defaultMatchWidth: "wide",
    parsePatterns: VZ,
    defaultParseWidth: "any"
  }),
  day: si({
    matchPatterns: wZ,
    defaultMatchWidth: "wide",
    parsePatterns: vZ,
    defaultParseWidth: "any"
  }),
  dayPeriod: si({
    matchPatterns: TZ,
    defaultMatchWidth: "any",
    parsePatterns: UZ,
    defaultParseWidth: "any"
  })
};
const RZ = gZ;
var NZ = {
  code: "en-US",
  formatDistance: zk,
  formatLong: _k,
  formatRelative: Lk,
  localize: oZ,
  match: RZ,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const gp = NZ;
var MZ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, yZ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kZ = /^'([^]*?)'?$/, ZZ = /''/g, JZ = /[a-zA-Z]/;
function bZ(t, i, r) {
  var a, l, u, f, p, V, U, R, M, Z, B, W, F, E, S, D, C, G;
  De(2, arguments);
  var J = String(i), X = Wi(), ee = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : X.locale) !== null && a !== void 0 ? a : gp, L = Hn((u = (f = (p = (V = r == null ? void 0 : r.firstWeekContainsDate) !== null && V !== void 0 ? V : r == null || (U = r.locale) === null || U === void 0 || (R = U.options) === null || R === void 0 ? void 0 : R.firstWeekContainsDate) !== null && p !== void 0 ? p : X.firstWeekContainsDate) !== null && f !== void 0 ? f : (M = X.locale) === null || M === void 0 || (Z = M.options) === null || Z === void 0 ? void 0 : Z.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(L >= 1 && L <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Ie = Hn((B = (W = (F = (E = r == null ? void 0 : r.weekStartsOn) !== null && E !== void 0 ? E : r == null || (S = r.locale) === null || S === void 0 || (D = S.options) === null || D === void 0 ? void 0 : D.weekStartsOn) !== null && F !== void 0 ? F : X.weekStartsOn) !== null && W !== void 0 ? W : (C = X.locale) === null || C === void 0 || (G = C.options) === null || G === void 0 ? void 0 : G.weekStartsOn) !== null && B !== void 0 ? B : 0);
  if (!(Ie >= 0 && Ie <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!ee.localize)
    throw new RangeError("locale must contain localize property");
  if (!ee.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var qe = Ye(t);
  if (!Uk(qe))
    throw new RangeError("Invalid time value");
  var pe = Sl(qe), me = gk(qe, pe), ve = {
    firstWeekContainsDate: L,
    weekStartsOn: Ie,
    locale: ee,
    _originalDate: qe
  }, Me = J.match(yZ).map(function(le) {
    var Fe = le[0];
    if (Fe === "p" || Fe === "P") {
      var We = Ck[Fe];
      return We(le, ee.formatLong);
    }
    return le;
  }).join("").match(MZ).map(function(le) {
    if (le === "''")
      return "'";
    var Fe = le[0];
    if (Fe === "'")
      return EZ(le);
    var We = Fk[Fe];
    if (We)
      return !(r != null && r.useAdditionalWeekYearTokens) && Ik(le) && Bf(le, i, String(t)), !(r != null && r.useAdditionalDayOfYearTokens) && Dk(le) && Bf(le, i, String(t)), We(me, le, ee.localize, ve);
    if (Fe.match(JZ))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Fe + "`");
    return le;
  }).join("");
  return Me;
}
function EZ(t) {
  var i = t.match(kZ);
  return i ? i[1].replace(ZZ, "'") : t;
}
function Rp(t, i) {
  if (t == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in i)
    Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r]);
  return t;
}
function SZ(t) {
  return Rp({}, t);
}
var Df = 1e3 * 60, sa = 60 * 24, If = sa * 30, Of = sa * 365;
function FZ(t, i, r) {
  var a, l, u;
  De(2, arguments);
  var f = Wi(), p = (a = (l = r == null ? void 0 : r.locale) !== null && l !== void 0 ? l : f.locale) !== null && a !== void 0 ? a : gp;
  if (!p.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var V = vk(t, i);
  if (isNaN(V))
    throw new RangeError("Invalid time value");
  var U = Rp(SZ(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: V
  }), R, M;
  V > 0 ? (R = Ye(i), M = Ye(t)) : (R = Ye(t), M = Ye(i));
  var Z = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), B;
  if (Z === "floor")
    B = Math.floor;
  else if (Z === "ceil")
    B = Math.ceil;
  else if (Z === "round")
    B = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var W = M.getTime() - R.getTime(), F = W / Df, E = Sl(M) - Sl(R), S = (W - E) / Df, D = r == null ? void 0 : r.unit, C;
  if (D ? C = String(D) : F < 1 ? C = "second" : F < 60 ? C = "minute" : F < sa ? C = "hour" : S < If ? C = "day" : S < Of ? C = "month" : C = "year", C === "second") {
    var G = B(W / 1e3);
    return p.formatDistance("xSeconds", G, U);
  } else if (C === "minute") {
    var J = B(F);
    return p.formatDistance("xMinutes", J, U);
  } else if (C === "hour") {
    var X = B(F / 60);
    return p.formatDistance("xHours", X, U);
  } else if (C === "day") {
    var ee = B(S / sa);
    return p.formatDistance("xDays", ee, U);
  } else if (C === "month") {
    var L = B(S / If);
    return L === 12 && D !== "month" ? p.formatDistance("xYears", 1, U) : p.formatDistance("xMonths", L, U);
  } else if (C === "year") {
    var Ie = B(S / Of);
    return p.formatDistance("xYears", Ie, U);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
const Nn = (t) => {
  let i = "";
  if (t)
    try {
      i = bZ(new Date(t), Ft.DATE_FORMAT);
    } catch {
      console.log("error date", t);
    }
  return i;
}, WZ = window.Vue.defineComponent, Wo = window.Vue.toDisplayString, On = window.Vue.createElementVNode, AZ = window.Vue.createVNode, Qf = window.Vue.unref, zf = window.Vue.createTextVNode, CZ = window.Vue.openBlock, xZ = window.Vue.createElementBlock, BZ = window.Vue.createCommentVNode, DZ = window.Vue.pushScopeId, IZ = window.Vue.popScopeId, Np = (t) => (DZ("data-v-de10dbc9"), t = t(), IZ(), t), OZ = {
  key: 0,
  class: "card"
}, QZ = { class: "row" }, zZ = { class: "title" }, GZ = ["innerHTML"], YZ = /* @__PURE__ */ Np(() => /* @__PURE__ */ On("strong", null, "First Event", -1)), HZ = /* @__PURE__ */ Np(() => /* @__PURE__ */ On("strong", null, "Last Event", -1)), PZ = /* @__PURE__ */ WZ({
  __name: "AlarmDetail",
  props: {
    alarm: null
  },
  setup(t) {
    const i = t;
    return (r, a) => {
      var l;
      return i.alarm ? (CZ(), xZ("div", OZ, [
        On("div", QZ, [
          On("div", zZ, Wo(t.alarm.nodeLabel) + " - " + Wo(t.alarm.id), 1),
          AZ(sp, {
            severity: (l = t.alarm) == null ? void 0 : l.severity
          }, null, 8, ["severity"])
        ]),
        On("div", {
          class: "description",
          innerHTML: t.alarm.description
        }, null, 8, GZ),
        On("div", null, [
          YZ,
          zf(" - " + Wo(Qf(Nn)(t.alarm.firstTime)), 1)
        ]),
        On("div", null, [
          HZ,
          zf(" - " + Wo(Qf(Nn)(t.alarm.time)), 1)
        ])
      ])) : BZ("", !0);
    };
  }
});
const _Z = /* @__PURE__ */ He(PZ, [["__scopeId", "data-v-de10dbc9"]]), jZ = window.Vue.defineComponent, XZ = window.Vue.normalizeClass, LZ = window.Vue.openBlock, qZ = window.Vue.createElementBlock, KZ = window.Vue.createCommentVNode, $Z = /* @__PURE__ */ jZ({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(t) {
    const i = t;
    return (r, a) => i != null && i.severity ? (LZ(), qZ("span", {
      key: 0,
      class: XZ(["circle", [`${i.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : KZ("", !0);
  }
});
const eJ = /* @__PURE__ */ He($Z, [["__scopeId", "data-v-e08880d6"]]), tJ = window.Vue.defineComponent, Fl = window.Vue.createElementVNode, li = window.Vue.unref, Mp = window.Vue.createTextVNode, Gf = window.Vue.normalizeClass, pl = window.Vue.withCtx, ml = window.Vue.createVNode, Yf = window.Vue.renderList, Hf = window.Vue.Fragment, Vr = window.Vue.openBlock, Ao = window.Vue.createElementBlock, nJ = window.Vue.toDisplayString, Pf = window.Vue.createBlock, rJ = window.Vue.createCommentVNode, iJ = window.Vue.pushScopeId, oJ = window.Vue.popScopeId, aJ = (t) => (iJ("data-v-884f956d"), t = t(), oJ(), t), sJ = { class: "container" }, lJ = /* @__PURE__ */ aJ(() => /* @__PURE__ */ Fl("div", { class: "title" }, "Alarms", -1)), cJ = /* @__PURE__ */ Mp(" ALL "), uJ = { class: "section" }, dJ = { class: "alarm-list" }, _f = window.Vue.ref, fJ = window.Vue.watch, hJ = window.Vue.computed, pJ = /* @__PURE__ */ tJ({
  __name: "AlarmFilters",
  props: {
    alarms: null
  },
  setup(t) {
    const i = t, r = hJ(() => Re.exports.keys(Re.exports.groupBy(i.alarms, "severity"))), a = _f(["all"]), l = _f(i.alarms), u = (f) => {
      a.value = a.value.filter((p) => p !== "all"), a.value.includes(f) ? a.value = a.value.filter((p) => p !== f) : a.value.push(f), f === "all" || a.value.length === 0 ? (a.value = ["all"], l.value = i.alarms) : l.value = i.alarms.filter(
        (p) => a.value.includes(p.severity)
      );
    };
    return fJ(i, () => {
      a.value = ["all"], l.value = i.alarms;
    }), (f, p) => (Vr(), Ao("div", sJ, [
      lJ,
      li(r).length > 1 ? (Vr(), Pf(li(mk), {
        key: a.value.toString(),
        condensed: "",
        class: "alarm-filters",
        label: "Random list for condensed visual testing"
      }, {
        default: pl(() => [
          ml(li(Wf), {
            class: Gf({ clicked: a.value.includes("all") }),
            onClick: p[0] || (p[0] = (V) => u("all"))
          }, {
            default: pl(() => [
              cJ
            ]),
            _: 1
          }, 8, ["class"]),
          (Vr(!0), Ao(Hf, null, Yf(li(r), (V) => (Vr(), Pf(li(Wf), {
            class: Gf({ clicked: a.value.includes(V) }),
            key: V,
            onClick: (U) => u(V)
          }, {
            default: pl(() => [
              ml(eJ, { severity: V }, null, 8, ["severity"]),
              Mp(nJ(V), 1)
            ]),
            _: 2
          }, 1032, ["class", "onClick"]))), 128))
        ]),
        _: 1
      })) : rJ("", !0),
      Fl("div", uJ, [
        Fl("div", dJ, [
          (Vr(!0), Ao(Hf, null, Yf(l.value, (V) => (Vr(), Ao("div", {
            key: V.id
          }, [
            ml(_Z, { alarm: V }, null, 8, ["alarm"])
          ]))), 128))
        ])
      ])
    ]));
  }
});
const mJ = /* @__PURE__ */ He(pJ, [["__scopeId", "data-v-884f956d"]]);
var VJ = Object.defineProperty, wJ = Object.defineProperties, vJ = Object.getOwnPropertyDescriptors, jf = Object.getOwnPropertySymbols, TJ = Object.prototype.hasOwnProperty, UJ = Object.prototype.propertyIsEnumerable, Xf = (t, i, r) => i in t ? VJ(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, ci = (t, i) => {
  for (var r in i || (i = {}))
    TJ.call(i, r) && Xf(t, r, i[r]);
  if (jf)
    for (var r of jf(i))
      UJ.call(i, r) && Xf(t, r, i[r]);
  return t;
}, Lf = (t, i) => wJ(t, vJ(i));
const gJ = window.Vue.defineComponent, RJ = window.Vue.inject, ui = window.Vue.h;
var NJ = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const MJ = {
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
}, yJ = gJ({
  inheritAttrs: !1,
  props: MJ,
  setup() {
    return { hasTooltip: RJ("feather-has-tooltip", !1) };
  },
  render() {
    const t = () => {
      let p = "";
      this.primary && (p = "btn-primary"), this.secondary && (p = "btn-secondary"), (this.text || this.icon) && (p = "btn-text");
      const V = ["btn", "hover", "focus", p];
      return this.icon && (V.push("btn-icon"), V.push("btn-icon-table")), this.onColor && V.push("on-color"), V;
    }, i = this.asAnchor ? "a" : "button", r = {}, a = ci({}, this.$attrs);
    r.attrs = a || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (p) => {
        this.disabled ? (this.asAnchor && p.preventDefault(), this.$emit("disabled-click", p)) : this.$emit("click", p);
      }
    };
    const l = t();
    r.class = [this.$attrs.class].concat(l), this.$slots.icon && r.class.push("has-icon");
    let u = ui(Yn);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const p = this.icon;
      return r.attrs["aria-label"] = p, this.hasTooltip || (r.attrs.title = p), ui(i, Lf(ci(ci({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : ui(Yn, { center: !0 })
      ]);
    }
    const f = ui("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return ui(i, Lf(ci(ci({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      f,
      u
    ]);
  }
});
var la = /* @__PURE__ */ NJ(yJ, [["__scopeId", "data-v-702d1074"]]);
const kJ = "/whoami", ZJ = async () => {
  try {
    const t = await Sr.get(kJ);
    return t.status === 200 ? t.data : !1;
  } catch {
    return !1;
  }
}, JJ = window.Pinia.defineStore, Ai = JJ("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const t = await ZJ();
      return t && (this.isAdmin = t.roles.includes("ROLE_ADMIN"), this.userId = t.id), t;
    },
    async getAlecInfo() {
      const t = await dR();
      t && (this.firstTime = !1, this.allowSave = t.agreed);
    },
    async savePermission(t) {
      if (this.allowSave = t, !t) {
        const i = await rp(t);
        this.allowSave = i;
      }
    }
  }
}), bJ = window.Vue.defineComponent, we = window.Vue.unref, di = window.Vue.normalizeClass, $t = window.Vue.createVNode, fi = window.Vue.toDisplayString, en = window.Vue.openBlock, wn = window.Vue.createElementBlock, Co = window.Vue.createCommentVNode, qf = window.Vue.withCtx, EJ = window.Vue.createBlock, rn = window.Vue.createElementVNode, SJ = window.Vue.Fragment, FJ = window.Vue.pushScopeId, WJ = window.Vue.popScopeId, AJ = (t) => (FJ("data-v-3c2362d5"), t = t(), WJ(), t), CJ = { class: "section" }, xJ = {
  key: 0,
  class: "btn-row"
}, BJ = { key: 0 }, DJ = { key: 1 }, IJ = { key: 0 }, OJ = { key: 1 }, QJ = {
  key: 1,
  class: "situation-detail"
}, zJ = { class: "situation-info" }, GJ = { class: "id" }, YJ = ["innerHTML"], HJ = /* @__PURE__ */ AJ(() => /* @__PURE__ */ rn("p", null, null, -1)), PJ = { class: "boxes" }, _J = { class: "parameters" }, jJ = {
  key: 0,
  class: "section"
}, XJ = window.Vue.ref, LJ = window.Vue.watch, qJ = /* @__PURE__ */ bJ({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: i }) {
    const r = t, a = Ft.ACCEPTED, l = Ft.REJECTED, u = Ai(), f = XJ(r.situationInfo.status), p = (V) => {
      var U, R;
      hR((U = r.situationInfo) == null ? void 0 : U.id, V.toLowerCase()), f.value = V, i("situation-status-changed", V, (R = r.situationInfo) == null ? void 0 : R.id);
    };
    return LJ(r, () => {
      f.value = r.situationInfo.status || "";
    }), (V, U) => {
      var R, M, Z, B, W, F;
      return en(), wn(SJ, null, [
        rn("div", CJ, [
          we(u).allowSave ? (en(), wn("div", xJ, [
            f.value !== we(l) ? (en(), EJ(we(la), {
              key: 0,
              class: di(["btn", { accepted: f.value == we(a) }]),
              "data-test": "btn-accept",
              onClick: U[0] || (U[0] = () => p(we(a)))
            }, {
              default: qf(() => [
                $t(we(Ne), {
                  icon: we(ip),
                  "aria-hidden": "true",
                  class: di(["icon accept", { accepted: f.value == we(a) }])
                }, null, 8, ["icon", "class"]),
                f.value == we(a) ? (en(), wn("span", BJ, fi(we(a)), 1)) : (en(), wn("span", DJ, " ACCEPT"))
              ]),
              _: 1
            }, 8, ["class"])) : Co("", !0),
            $t(we(la), {
              class: di(["btn", { rejected: f.value == we(l) }]),
              onClick: U[1] || (U[1] = () => p(we(l)))
            }, {
              default: qf(() => [
                $t(we(Ne), {
                  icon: we(op),
                  "aria-hidden": "true",
                  class: di(["icon reject", { rejected: f.value == we(l) }])
                }, null, 8, ["icon", "class"]),
                f.value == we(l) ? (en(), wn("span", IJ, fi(we(l)), 1)) : (en(), wn("span", OJ, " REJECT"))
              ]),
              _: 1
            }, 8, ["class"])
          ])) : Co("", !0),
          r.situationInfo ? (en(), wn("div", QJ, [
            rn("div", {
              class: di(["severity-line", [`${(M = (R = r.situationInfo) == null ? void 0 : R.severity) == null ? void 0 : M.toLowerCase()}-bg dark`]])
            }, null, 2),
            rn("div", zJ, [
              rn("div", GJ, [
                rn("div", null, " Situation - " + fi((Z = r.situationInfo) == null ? void 0 : Z.id) + " - affecting " + fi(we(Re.exports.size)(we(Re.exports.groupBy)((B = r.situationInfo) == null ? void 0 : B.alarms, "nodeId"))) + " node having " + fi(r.situationInfo.alarms.length) + " alarms ", 1),
                $t(sp, {
                  severity: (W = r.situationInfo) == null ? void 0 : W.severity
                }, null, 8, ["severity"])
              ]),
              rn("span", {
                innerHTML: r.situationInfo.description
              }, null, 8, YJ),
              HJ,
              rn("div", PJ, [
                $t(cl, {
                  label: "First Event",
                  info: we(Nn)(r.situationInfo.creationTime)
                }, null, 8, ["info"]),
                $t(cl, {
                  label: "Last Event",
                  info: we(Nn)(r.situationInfo.lastTime)
                }, null, 8, ["info"]),
                $t(cl, {
                  label: "Reduction Key",
                  info: r.situationInfo.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            rn("div", _J, [
              $t(gM, {
                alarms: (F = r.situationInfo) == null ? void 0 : F.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Co("", !0)
        ]),
        r.situationInfo.alarms.length > 0 ? (en(), wn("div", jJ, [
          $t(mJ, {
            alarms: r.situationInfo.alarms
          }, null, 8, ["alarms"])
        ])) : Co("", !0)
      ], 64);
    };
  }
});
const KJ = /* @__PURE__ */ He(qJ, [["__scopeId", "data-v-3c2362d5"]]);
const $J = window.Vue.openBlock, eb = window.Vue.createElementBlock, tb = window.Vue.createElementVNode;
var nb = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const rb = {}, ib = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ob = /* @__PURE__ */ tb("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), ab = [
  ob
];
function sb(t, i) {
  return $J(), eb("svg", ib, ab);
}
var yp = /* @__PURE__ */ nb(rb, [["render", sb]]);
const lb = window.Vue.watch, cb = window.Vue.onBeforeUnmount, ub = window.Vue.ref, db = window.Vue.onMounted, fb = (t) => {
  const i = ub(!1);
  let r = !1;
  const a = (f) => {
    t(f), r = !1;
  };
  function l(f) {
    r || (requestAnimationFrame(() => a(f)), r = !0);
  }
  const u = () => {
    window && window.removeEventListener("resize", l);
  };
  return db(() => {
    const f = lb(i, (p) => {
      window && p ? window.addEventListener("resize", l) : u();
    }, {
      immediate: !0
    });
    cb(() => {
      f(), u();
    });
  }), i;
}, hb = window.Vue.watch, pb = window.Vue.onBeforeUnmount, mb = window.Vue.ref, Vb = window.Vue.onMounted, wb = (t, i) => {
  const r = mb(!1), a = (f) => {
    f.target === window && i(f);
  }, l = (f) => {
    let p = [];
    Array.isArray(t.value) ? p = t.value : p = [t.value], p.some((U) => U && U.contains(f.target)) || i(f);
  }, u = () => {
    document && window && (document.removeEventListener("click", l, !0), document.removeEventListener("focus", l, !0), window.removeEventListener("blur", a));
  };
  return Vb(() => {
    const f = hb(r, (p) => {
      document && window && p ? (document.addEventListener("click", l, !0), document.addEventListener("focus", l, !0), window.addEventListener("blur", a)) : u();
    }, {
      immediate: !0
    });
    pb(() => {
      f(), u();
    });
  }), r;
}, vb = window.Vue.watch, Tb = window.Vue.onBeforeUnmount, Ub = window.Vue.ref, kp = (t, i) => {
  const r = Ub(!1);
  let a = !1;
  const l = (V) => {
    i(V), a = !1;
  };
  function u(V) {
    a || (requestAnimationFrame(() => l(V)), a = !0);
  }
  const f = () => {
    t.value && t.value.removeEventListener("scroll", u, !0);
  }, p = vb([t, r], ([V, U], R) => {
    R && R.length && R[0] && R[0].removeEventListener("scroll", u, !0), U && V ? V.addEventListener("scroll", u, !0) : f();
  }, {
    immediate: !0
  });
  return Tb(() => {
    p(), f();
  }), r;
}, gb = window.Vue.defineComponent, tn = window.Vue.ref, Kf = window.Vue.toRef, Rb = window.Vue.onMounted, Nb = window.Vue.watch, $f = window.Vue.computed, Mb = window.Vue.nextTick, eh = window.Vue.openBlock, th = window.Vue.createElementBlock, nh = window.Vue.renderSlot, yb = window.Vue.normalizeClass, kb = window.Vue.normalizeStyle, Zb = window.Vue.createCommentVNode;
var Jb = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const bb = {
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
}, Eb = {
  "trigger-click": (t) => !0,
  "outside-click": (t) => !0
}, Sb = gb({
  emits: Eb,
  props: bb,
  setup(t, i) {
    const r = tn(), a = tn(), l = Kf(t, "open"), u = Kf(t, "noExpand"), f = tn("auto"), p = tn(), V = tn(t.triggerId || se("feather-menu-trigger")), U = tn(se("feather-menu-dropdown")), R = tn(""), M = tn("");
    Rb(() => {
      p.value = window;
    });
    const Z = tn(!1), B = () => ({
      height: p.value.innerHeight,
      width: p.value.innerWidth,
      left: 0,
      top: 0
    }), W = () => {
      if (!a.value)
        return;
      const J = r.value.getBoundingClientRect();
      Z.value = !0, f.value = "auto", Mb(() => {
        let { height: X, width: ee } = a.value.getBoundingClientRect();
        const L = B(), Ie = L.height, qe = L.width;
        t.fill && ee < J.width ? (f.value = J.width + "px", ee = J.width) : f.value = ee + "px";
        let pe = 0;
        Ie - J.bottom < X && J.top >= X ? (pe = J.top - X, t.cover && (pe += J.height)) : (pe = J.bottom, t.cover && (pe -= J.height));
        let me = t.right ? J.right - ee : J.left;
        !t.right && J.right >= ee && qe - J.left < ee && (me = J.right - ee), t.right && J.right <= ee && qe - J.left > ee && (me = J.left), M.value = `${me}px`, R.value = `${pe}px`, Z.value = !1;
      });
    }, E = wb(r, (J) => {
      i.emit("outside-click", J);
    }), S = fb(W), D = kp(p, W);
    Nb([l, a], ([J, X]) => {
      J && X && W(), E.value = J, S.value = J, D.value = J;
    });
    const C = $f(() => {
      const J = {
        id: V.value,
        "aria-haspopup": "true"
      };
      return l.value && (J["aria-controls"] = U.value), u.value || (J["aria-expanded"] = l.value ? "true" : "false"), J;
    }), G = $f(() => ({
      click: (J) => {
        i.emit("trigger-click", J);
      }
    }));
    return {
      positionTop: R,
      positionLeft: M,
      triggerId: V,
      triggerAttrs: C,
      triggerListeners: G,
      menuId: U,
      menu: a,
      menuWidth: f,
      root: r,
      calculatePosition: W,
      calculating: Z
    };
  }
}), Fb = ["data-ref-id"], Wb = ["data-ref-id", "id"];
function Ab(t, i, r, a, l, u) {
  return eh(), th("div", {
    class: "feather-menu",
    "data-ref-id": t.dataRefId,
    ref: "root"
  }, [
    nh(t.$slots, "trigger", {
      attrs: t.triggerAttrs,
      on: t.triggerListeners
    }, void 0, !0),
    t.open ? (eh(), th("div", {
      key: 0,
      class: yb(["feather-menu-dropdown", { hidden: t.calculating }]),
      "data-ref-id": t.dataRefId + "-dropdown",
      ref: "menu",
      id: t.menuId,
      style: kb({ left: t.positionLeft, top: t.positionTop, width: t.menuWidth })
    }, [
      nh(t.$slots, "default", { labelId: t.triggerId }, void 0, !0)
    ], 14, Wb)) : Zb("", !0)
  ], 8, Fb);
}
var Zp = /* @__PURE__ */ Jb(Sb, [["render", Ab], ["__scopeId", "data-v-f75af406"]]);
const Cb = window.Vue.defineComponent, xb = window.Vue.openBlock, Bb = window.Vue.createElementBlock, Db = window.Vue.normalizeClass, Ib = window.Vue.pushScopeId, Ob = window.Vue.popScopeId, Wl = window.Vue.createElementVNode;
var Qb = (t, i) => {
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
}, Yb = Cb({
  emits: Gb,
  props: zb,
  methods: {
    handleClick(t) {
      this.disabled || this.$emit("click", t);
    }
  }
}), Jp = (t) => (Ib("data-v-07e020f5"), t = t(), Ob(), t), Hb = /* @__PURE__ */ Jp(() => /* @__PURE__ */ Wl("div", { class: "track" }, null, -1)), Pb = /* @__PURE__ */ Jp(() => /* @__PURE__ */ Wl("div", { class: "switcher" }, [
  /* @__PURE__ */ Wl("div", { class: "switch-circle" })
], -1)), _b = [
  Hb,
  Pb
];
function jb(t, i, r, a, l, u) {
  return xb(), Bb("div", {
    class: Db(["switch-container", { checked: t.checked, disabled: t.disabled }]),
    onClick: i[0] || (i[0] = (...f) => t.handleClick && t.handleClick(...f))
  }, _b, 2);
}
var Xb = /* @__PURE__ */ Qb(Yb, [["render", jb], ["__scopeId", "data-v-07e020f5"]]), Lb = Object.defineProperty, qb = Object.defineProperties, Kb = Object.getOwnPropertyDescriptors, rh = Object.getOwnPropertySymbols, $b = Object.prototype.hasOwnProperty, e2 = Object.prototype.propertyIsEnumerable, ih = (t, i, r) => i in t ? Lb(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, oh = (t, i) => {
  for (var r in i || (i = {}))
    $b.call(i, r) && ih(t, r, i[r]);
  if (rh)
    for (var r of rh(i))
      e2.call(i, r) && ih(t, r, i[r]);
  return t;
}, ah = (t, i) => qb(t, Kb(i));
const tc = window.Vue.defineComponent, Cn = window.Vue.h, t2 = window.Vue.openBlock, n2 = window.Vue.createElementBlock, r2 = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var bp = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const i2 = {
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
}, o2 = tc({
  inheritAttrs: !1,
  props: i2,
  render() {
    let t;
    this.$slots.icon && this.$slots.icon().findIndex((f) => f.children && f.children.length !== 0 || f.type && f.type.render) !== -1 && (t = Cn("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Cn("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let a;
    this.$slots.post && (a = Cn("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const l = this.disabled ? void 0 : Cn(Yn);
    if (this.asLi)
      return Cn("li", ah(oh({}, this.$attrs), {
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
    const u = Cn("a", ah(oh({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [t, r, a, l]);
    return Cn("li", {}, [u]);
  }
});
var Ci = /* @__PURE__ */ bp(o2, [["__scopeId", "data-v-7c46b2b3"]]);
tc({
  components: {
    FeatherListItem: Ci
  }
});
const a2 = {}, s2 = { class: "feather-list" };
function l2(t, i) {
  return t2(), n2("ul", s2, [
    r2(t.$slots, "default", {}, void 0, !0)
  ]);
}
var nc = /* @__PURE__ */ bp(a2, [["render", l2], ["__scopeId", "data-v-941a1d50"]]);
const c2 = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  keydown: (t) => !0
}, u2 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
tc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: c2,
  props: u2,
  computed: {
    labelId() {
      return se("switch-label");
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
  components: { SwitchRender: Xb, FeatherListItem: Ci }
});
const bi = function(t, i) {
  if (!t || !i)
    return;
  let r = t.getBoundingClientRect().height;
  const a = getComputedStyle(t);
  r += parseInt(a.getPropertyValue("margin-top"), 10), r += parseInt(a.getPropertyValue("margin-bottom"), 10), i.scrollTop = t.offsetTop - i.getBoundingClientRect().height + r;
};
var d2 = Object.defineProperty, f2 = Object.defineProperties, h2 = Object.getOwnPropertyDescriptors, sh = Object.getOwnPropertySymbols, p2 = Object.prototype.hasOwnProperty, m2 = Object.prototype.propertyIsEnumerable, lh = (t, i, r) => i in t ? d2(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Al = (t, i) => {
  for (var r in i || (i = {}))
    p2.call(i, r) && lh(t, r, i[r]);
  if (sh)
    for (var r of sh(i))
      m2.call(i, r) && lh(t, r, i[r]);
  return t;
}, V2 = (t, i) => f2(t, h2(i));
const Ep = window.Vue.defineComponent, Qn = window.Vue.resolveComponent, Xo = window.Vue.openBlock, ch = window.Vue.createBlock, Lo = window.Vue.mergeProps, zn = window.Vue.withCtx, Sp = window.Vue.createElementBlock, w2 = window.Vue.Fragment, v2 = window.Vue.renderList, T2 = window.Vue.createTextVNode, U2 = window.Vue.toDisplayString, g2 = window.Vue.computed, uh = window.Vue.toRef, hi = window.Vue.createVNode, dh = window.Vue.toHandlers, R2 = window.Vue.renderSlot, N2 = window.Vue.normalizeClass, M2 = window.Vue.createElementVNode;
var Fp = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const y2 = Ep({
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
      return se("feather-select-active");
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
        bi(i, this.$refs.list.$el);
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
    FeatherList: nc,
    FeatherListItem: Ci
  }
});
function k2(t, i, r, a, l, u) {
  const f = Qn("FeatherListItem"), p = Qn("FeatherList");
  return Xo(), ch(p, Lo(t.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: zn(() => [
      (Xo(!0), Sp(w2, null, v2(t.options, (V, U) => (Xo(), ch(f, {
        key: V[t.textProp],
        "as-li": "",
        id: t.getId(U),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": t.isSelected(U),
        selected: t.isSelected(U),
        onClick: (R) => t.select(V)
      }, {
        default: zn(() => [
          T2(U2(V[t.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var Z2 = /* @__PURE__ */ Fp(y2, [["render", k2], ["__scopeId", "data-v-eae820da"]]);
const J2 = V2(Al(Al({}, fp), wa), {
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
}), b2 = {
  "update:modelValue": (t) => !0
}, E2 = Ep({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: b2,
  props: J2,
  setup(t, i) {
    va(t), hp(t);
    const r = g2(() => se("feather-select-input")), { validate: a } = ma(r, uh(t, "modelValue"), t.label, t.schema, uh(t, "error"));
    return Al({
      inputId: r,
      validate: a
    }, Va(i.attrs));
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
      return se("feather-select-description");
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
    icon: () => yp
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
      yi(this.delayTimeout), this.delayTimeout = Mi(() => {
        const t = this.options.filter((i) => i[this.textProp] && i[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        t && t.length && this.select(t[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: dp,
    InputSubText: pa,
    FeatherMenu: Zp,
    List: Z2,
    FeatherIcon: Ne
  }
});
function S2(t, i, r, a, l, u) {
  const f = Qn("FeatherIcon"), p = Qn("InputWrapper"), V = Qn("List"), U = Qn("FeatherMenu"), R = Qn("InputSubText");
  return Xo(), Sp("div", Lo(t.inherittedAttrs, { class: "feather-select-container" }), [
    hi(U, {
      "no-expand": "",
      fill: "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: zn((M) => [
        hi(p, Lo({
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "show-clear": t.showClear,
          onClear: t.handleClear
        }, M.attrs, dh(M.on), {
          class: ["feather-select-wrapper", { focused: t.hasFocus }]
        }), {
          pre: zn(() => [
            R2(t.$slots, "pre", {}, void 0, !0)
          ]),
          post: zn(() => [
            hi(f, {
              class: N2(["feather-select-icon", { rotate: t.showMenu }]),
              icon: t.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: zn(() => [
            M2("input", Lo(t.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, dh(t.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: zn(() => [
        hi(V, {
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
    hi(R, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var F2 = /* @__PURE__ */ Fp(E2, [["render", S2], ["__scopeId", "data-v-ecb32d90"]]);
const W2 = window.Vue.openBlock, A2 = window.Vue.createElementBlock, Wp = window.Vue.createElementVNode;
var C2 = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const x2 = {}, B2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, D2 = /* @__PURE__ */ Wp("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), I2 = /* @__PURE__ */ Wp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), O2 = [
  D2,
  I2
];
function Q2(t, i) {
  return W2(), A2("svg", B2, O2);
}
var z2 = /* @__PURE__ */ C2(x2, [["render", Q2]]);
const qo = window.Vue.openBlock, Cl = window.Vue.createElementBlock, Ap = window.Vue.createElementVNode, G2 = window.Vue.defineComponent, xn = window.Vue.ref, Y2 = window.Vue.provide, fh = window.Vue.computed, H2 = window.Vue.onUnmounted, hh = window.Vue.toRef, P2 = window.Vue.resolveComponent, _2 = window.Vue.Fragment, j2 = window.Vue.createBlock, X2 = window.Vue.Teleport, ph = window.Vue.createVNode, L2 = window.Vue.Transition, q2 = window.Vue.withCtx, K2 = window.Vue.normalizeClass, $2 = window.Vue.normalizeStyle, eE = window.Vue.toDisplayString, tE = window.Vue.createCommentVNode, nE = window.Vue.renderSlot, Vl = window.Vue.nextTick;
var Cp = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const rE = {}, iE = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, oE = /* @__PURE__ */ Ap("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), aE = [
  oE
];
function sE(t, i) {
  return qo(), Cl("svg", iE, aE);
}
var lE = /* @__PURE__ */ Cp(rE, [["render", sE]]), xe = /* @__PURE__ */ ((t) => (t.top = "top", t.bottom = "bottom", t.left = "left", t.right = "right", t))(xe || {}), on = /* @__PURE__ */ ((t) => (t.center = "center", t.left = "left", t.right = "right", t))(on || {});
const cE = (t, i, r, a = 9) => {
  const l = window.innerHeight - t.bottom, u = window.innerWidth - t.right, f = [];
  t.top >= i.height + a && f.push(xe.top), l >= i.height + a && f.push(xe.bottom);
  const p = [];
  u >= i.width + a && p.push(xe.right), t.left >= i.width + a && p.push(xe.left);
  let V = [...p, ...f];
  return (r === xe.top || r === xe.bottom) && (V = [...f, ...p]), V.indexOf(r) > -1 ? r : V.length ? V[0] : r;
}, uE = (t, i, r, a, l = 28) => {
  if (t === xe.left || t === xe.right)
    return on.center;
  const u = i.left + i.width / 2, f = window.innerWidth - i.right, p = [], V = u, U = f + i.width / 2, R = r.width - l, M = r.width / 2;
  return V >= M && U >= M && p.push(on.center), U >= R && p.push(on.left), V >= R && p.push(on.right), p.indexOf(a) > -1 ? a : p.length ? p[0] : a;
}, dE = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => xe.top
  },
  pointerAlignment: {
    type: String,
    default: () => on.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, fE = G2({
  props: dE,
  setup(t) {
    const i = xn(!1), r = xn(!1), a = se("feather-tooltip-trigger"), l = se("feather-tooltip"), u = "data-feather-tooltip";
    Y2("feather-has-tooltip", !0);
    let f = 0;
    const p = () => {
      yi(f), i.value || (f = Mi(F, t.enterDelay));
    }, V = () => {
      yi(f), f = Mi(E, t.exitDelay);
    }, U = (pe) => {
      pe.keyCode === q.ESCAPE && (pe.preventDefault(), E(!0));
    }, R = fh(() => ({
      [u]: a,
      "aria-describedby": l
    })), M = {
      mouseenter: p,
      mouseleave: V,
      focus: p,
      blur: V,
      keydown: U
    }, Z = xn(document), B = kp(Z, () => E(!0));
    H2(() => E(!0));
    const W = () => document.getElementById(l), F = () => {
      r.value = !1, i.value = !0, Vl(() => {
        const pe = W();
        qe(pe), i.value = !1, Vl(() => {
          r.value = !0, i.value = !0, B.value = !0;
        });
      });
    }, E = (pe = !1) => {
      X.value = "", J.value = "", ee.value = "", L.value = "", i.value = !1, pe && (r.value = !1), B.value = !1;
    }, S = hh(t, "placement"), D = hh(t, "pointerAlignment"), C = 8, G = 24, J = xn(""), X = xn(""), ee = xn(""), L = xn(""), Ie = fh(() => L.value ? "p-" + L.value : !1), qe = (pe) => {
      const me = document.querySelector(`[${u}=${a}]`);
      if (!me) {
        console.log("trigger not found");
        return;
      }
      Vl(() => {
        const ve = me.getBoundingClientRect(), Me = pe.getBoundingClientRect(), le = cE(ve, Me, S.value, C), Fe = uE(le, ve, Me, D.value, G);
        ee.value = Fe.toString(), L.value = le.toString();
        let We = 0, Pe = 0;
        if ((le === xe.left || le === xe.right) && (We = ve.top + ve.height / 2 - Me.height / 2, le === xe.left && (Pe = ve.left - Me.width - C), le === xe.right && (Pe = ve.right)), le === xe.top || le === xe.bottom) {
          We = ve.top - Me.height - C, le === xe.bottom && (We = ve.bottom);
          const Ar = ve.left + ve.width / 2;
          switch (Fe) {
            case on.center:
              Pe = Ar - Me.width / 2;
              break;
            case on.left:
              Pe = Ar - G;
              break;
            case on.right:
              Pe = Ar - Me.width + G;
              break;
          }
        }
        J.value = We.toString() + "px", X.value = Pe.toString() + "px";
      });
    };
    return {
      attrs: R,
      listeners: M,
      show: i,
      animate: r,
      alignmentClass: ee,
      placementClass: Ie,
      top: J,
      left: X,
      tooltipID: l
    };
  },
  components: {
    Pointer: lE
  }
}), hE = ["id"];
function pE(t, i, r, a, l, u) {
  const f = P2("Pointer");
  return qo(), Cl(_2, null, [
    (qo(), j2(X2, { to: "body" }, [
      ph(L2, { css: t.animate }, {
        default: q2(() => [
          t.show ? (qo(), Cl("div", {
            key: 0,
            class: K2(["feather-tooltip-container", [t.alignmentClass, t.placementClass]]),
            ref: "tooltip",
            style: $2({ left: t.left, top: t.top })
          }, [
            Ap("div", {
              class: "tooltip",
              role: "tooltip",
              id: t.tooltipID
            }, eE(t.title), 9, hE),
            ph(f, { class: "tooltip-pointer" })
          ], 6)) : tE("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    nE(t.$slots, "default", {
      attrs: t.attrs,
      on: t.listeners
    }, void 0, !0)
  ], 64);
}
var mh = /* @__PURE__ */ Cp(fE, [["render", pE], ["__scopeId", "data-v-3da6b22e"]]);
const mE = window.Vue.defineComponent, xo = window.Vue.unref, Vh = window.Vue.toHandlers, wh = window.Vue.mergeProps, wl = window.Vue.createElementVNode, vh = window.Vue.withCtx, Th = window.Vue.createVNode, VE = window.Vue.normalizeClass, wE = window.Vue.normalizeStyle, vE = window.Vue.Fragment, TE = window.Vue.openBlock, UE = window.Vue.createElementBlock, gE = /* @__PURE__ */ mE({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    maxEnd: null
  },
  setup(t) {
    const i = t, r = (l, u) => l && u ? (Number(u) - Number(l)) * i.proportion : 0, a = (l) => l ? (Number(l) - Number(i.minStart)) * i.proportion : 0;
    return (l, u) => (TE(), UE(vE, null, [
      Th(xo(mh), {
        title: xo(Nn)(t.alarm.firstTime)
      }, {
        default: vh(({ attrs: f, on: p }) => [
          wl("div", wh({ class: "circle" }, f, Vh(p), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`],
            style: {
              marginLeft: a(t.alarm.firstTime) + "px"
            }
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      wl("div", {
        class: VE(["line", [`${t.alarm.severity.toLowerCase()}-bg dark`]]),
        style: wE({
          width: r(t.alarm.firstTime, t.alarm.time) + "px"
        })
      }, null, 6),
      Th(xo(mh), {
        title: xo(Nn)(t.alarm.time)
      }, {
        default: vh(({ attrs: f, on: p }) => [
          wl("div", wh({ class: "circle" }, f, Vh(p), {
            class: [`${t.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"])
    ], 64));
  }
});
const RE = /* @__PURE__ */ He(gE, [["__scopeId", "data-v-c620fbda"]]), NE = window.Vue.openBlock, ME = window.Vue.createElementBlock, xp = window.Vue.createElementVNode;
var yE = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const kE = {}, ZE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JE = /* @__PURE__ */ xp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), bE = /* @__PURE__ */ xp("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), EE = [
  JE,
  bE
];
function SE(t, i) {
  return NE(), ME("svg", ZE, EE);
}
var FE = /* @__PURE__ */ yE(kE, [["render", SE]]);
const WE = window.Vue.defineComponent, AE = window.Vue.normalizeClass, ze = window.Vue.createElementVNode, wr = window.Vue.toDisplayString, vn = window.Vue.unref, Bo = window.Vue.createVNode, CE = window.Vue.createTextVNode, Uh = window.Vue.renderList, vl = window.Vue.Fragment, vr = window.Vue.openBlock, Tr = window.Vue.createElementBlock, xE = window.Vue.createCommentVNode, BE = window.Vue.pushScopeId, DE = window.Vue.popScopeId, IE = (t) => (BE("data-v-d7e2e78a"), t = t(), DE(), t), OE = { class: "section detail" }, QE = { class: "id" }, zE = {
  key: 0,
  class: "section"
}, GE = /* @__PURE__ */ IE(() => /* @__PURE__ */ ze("div", { class: "id" }, "Alarms", -1)), YE = { class: "action-btns" }, HE = { class: "zoom" }, PE = /* @__PURE__ */ CE(" Zoom "), _E = { class: "alarms" }, jE = { class: "times" }, XE = { class: "container" }, LE = { class: "ids" }, qE = { class: "timeline-container" }, Ur = window.Vue.ref, KE = window.Vue.watch, $E = /* @__PURE__ */ WE({
  __name: "SituationMetricsTab",
  props: {
    situation: null
  },
  setup(t) {
    var W, F, E, S;
    const i = t, r = 700;
    let a = Ur(r);
    const l = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Ur(l[0]), f = () => a.value / (Number(U.value) - Number(V.value)), p = Ur(i.situation.alarms), V = Ur(
      ((F = Re.exports.minBy((W = i.situation) == null ? void 0 : W.alarms, "firstTime")) == null ? void 0 : F.firstTime) || new Date()
    ), U = Ur(((S = Re.exports.maxBy((E = i.situation) == null ? void 0 : E.alarms, "time")) == null ? void 0 : S.time) || new Date()), R = Ur(f());
    KE(i, () => {
      var D, C, G, J;
      V.value = ((C = Re.exports.minBy((D = i.situation) == null ? void 0 : D.alarms, "firstTime")) == null ? void 0 : C.firstTime) || new Date(), U.value = ((J = Re.exports.maxBy((G = i.situation) == null ? void 0 : G.alarms, "time")) == null ? void 0 : J.time) || new Date(), a.value = r, R.value = f(), p.value = i.situation.alarms, u.value = l[0];
    });
    const M = (D) => {
      if ((D == null ? void 0 : D.id) === 1 && (p.value = i.situation.alarms), (D == null ? void 0 : D.id) === 2) {
        const C = Re.exports.groupBy(p.value, "severity"), G = [
          ...C.CRITICAL || [],
          ...C.MAJOR || [],
          ...C.MINOR || [],
          ...C.WARNING || [],
          ...C.NORMAL || [],
          ...C.CLEARED || [],
          ...C.INDETERMINATE || []
        ];
        p.value = G.filter((J) => J);
      }
      if ((D == null ? void 0 : D.id) === 3) {
        const C = Re.exports.reverse(
          Re.exports.sortBy(
            i.situation.alarms,
            (G) => Number(G.time) - Number(G.firstTime)
          )
        );
        p.value = C;
      }
    }, Z = () => {
      a.value += 100, R.value = f();
    }, B = () => {
      a.value -= 100, R.value = f();
    };
    return (D, C) => {
      var G, J;
      return vr(), Tr(vl, null, [
        ze("div", OE, [
          ze("div", {
            class: AE(["severity-line", [`${(J = (G = i.situation) == null ? void 0 : G.severity) == null ? void 0 : J.toLowerCase()}-bg dark`]])
          }, null, 2),
          ze("div", null, [
            ze("div", QE, "Situation " + wr(i.situation.id), 1),
            ze("div", null, " Duration: " + wr(vn(FZ)(new Date(U.value), new Date(V.value))), 1)
          ])
        ]),
        p.value.length > 0 ? (vr(), Tr("div", zE, [
          GE,
          ze("div", YE, [
            Bo(vn(F2), {
              class: "select",
              label: "Sort by:",
              options: l,
              modelValue: u.value,
              "onUpdate:modelValue": [
                C[0] || (C[0] = (X) => u.value = X),
                M
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            ze("div", HE, [
              PE,
              ze("div", null, [
                Bo(vn(Ne), {
                  icon: vn(z2),
                  class: "zoom-icon",
                  onClick: Z
                }, null, 8, ["icon"]),
                Bo(vn(Ne), {
                  icon: vn(FE),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          ze("div", _E, [
            ze("div", jE, [
              ze("div", null, wr(vn(Nn)(V.value)), 1),
              ze("div", null, wr(vn(Nn)(U.value)), 1)
            ]),
            ze("div", XE, [
              ze("div", LE, [
                (vr(!0), Tr(vl, null, Uh(p.value, (X) => (vr(), Tr("div", {
                  class: "alarm-id",
                  key: X.id
                }, wr(X.nodeLabel) + " - " + wr(X.id), 1))), 128))
              ]),
              ze("div", qE, [
                (vr(!0), Tr(vl, null, Uh(p.value, (X) => (vr(), Tr("div", {
                  class: "timeline",
                  key: X.id
                }, [
                  Bo(RE, {
                    alarm: X,
                    proportion: R.value,
                    "min-start": V.value,
                    "max-end": U.value
                  }, null, 8, ["alarm", "proportion", "min-start", "max-end"])
                ]))), 128))
              ])
            ])
          ])
        ])) : xE("", !0)
      ], 64);
    };
  }
});
const eS = /* @__PURE__ */ He($E, [["__scopeId", "data-v-d7e2e78a"]]), tS = window.Vue.defineComponent, Bp = window.Vue.createTextVNode, pi = window.Vue.unref, gr = window.Vue.withCtx, Bn = window.Vue.createVNode, nS = window.Vue.openBlock, rS = window.Vue.createElementBlock, iS = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const oS = {
  key: 0,
  class: "detail"
}, aS = /* @__PURE__ */ Bp("Details"), sS = /* @__PURE__ */ Bp("Metrics"), lS = /* @__PURE__ */ tS({
  __name: "SituationDetail",
  props: {
    alarmInfo: null
  },
  emits: ["situation-status-changed"],
  setup(t, { emit: i }) {
    const r = t, a = (l, u) => {
      i("situation-status-changed", l, u);
    };
    return (l, u) => r.alarmInfo ? (nS(), rS("div", oS, [
      Bn(pi(XN), null, {
        tabs: gr(() => [
          Bn(pi(Tf), null, {
            default: gr(() => [
              aS
            ]),
            _: 1
          }),
          Bn(pi(Tf), null, {
            default: gr(() => [
              sS
            ]),
            _: 1
          })
        ]),
        default: gr(() => [
          Bn(pi(Uf), { class: "panel" }, {
            default: gr(() => [
              Bn(KJ, {
                "situation-info": r.alarmInfo,
                onSituationStatusChanged: a
              }, null, 8, ["situation-info"])
            ]),
            _: 1
          }),
          Bn(pi(Uf), { class: "panel" }, {
            default: gr(() => [
              Bn(eS, {
                situation: r == null ? void 0 : r.alarmInfo
              }, null, 8, ["situation"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : iS("", !0);
  }
});
const cS = /* @__PURE__ */ He(lS, [["__scopeId", "data-v-b34edfcf"]]);
const uS = window.Vue.openBlock, dS = window.Vue.createElementBlock, fS = window.Vue.createElementVNode;
var hS = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const pS = {}, mS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VS = /* @__PURE__ */ fS("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), wS = [
  VS
];
function vS(t, i) {
  return uS(), dS("svg", mS, wS);
}
var TS = /* @__PURE__ */ hS(pS, [["render", vS]]);
const US = window.Vue.openBlock, gS = window.Vue.createElementBlock, rc = window.Vue.createElementVNode;
var RS = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const NS = {}, MS = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yS = /* @__PURE__ */ rc("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), kS = /* @__PURE__ */ rc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), ZS = /* @__PURE__ */ rc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), JS = [
  yS,
  kS,
  ZS
];
function bS(t, i) {
  return US(), gS("svg", MS, JS);
}
var ES = /* @__PURE__ */ RS(NS, [["render", bS]]), SS = Object.defineProperty, FS = Object.defineProperties, WS = Object.getOwnPropertyDescriptors, gh = Object.getOwnPropertySymbols, AS = Object.prototype.hasOwnProperty, CS = Object.prototype.propertyIsEnumerable, Rh = (t, i, r) => i in t ? SS(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, ht = (t, i) => {
  for (var r in i || (i = {}))
    AS.call(i, r) && Rh(t, r, i[r]);
  if (gh)
    for (var r of gh(i))
      CS.call(i, r) && Rh(t, r, i[r]);
  return t;
}, xS = (t, i) => FS(t, WS(i));
const Wr = window.Vue.defineComponent, re = window.Vue.openBlock, Je = window.Vue.createElementBlock, nt = window.Vue.createElementVNode, Wt = window.Vue.toDisplayString, Nt = window.Vue.createCommentVNode, ye = window.Vue.resolveComponent, Rt = window.Vue.createBlock, Ge = window.Vue.withCtx, kr = window.Vue.Fragment, Ri = window.Vue.renderList, rt = window.Vue.createVNode, ic = window.Vue.withModifiers, Gn = window.Vue.normalizeClass, xl = window.Vue.renderSlot, Dp = window.Vue.createTextVNode, BS = window.Vue.pushScopeId, DS = window.Vue.popScopeId, Ip = window.Vue.reactive, Op = window.Vue.nextTick, Tl = window.Vue.markRaw, Ul = window.Vue.toRef, Nh = window.Vue.computed, IS = window.Vue.toRefs, Rr = window.Vue.ref, gl = window.Vue.mergeProps, Mh = window.Vue.toHandlers, Do = window.Vue.withDirectives, Io = window.Vue.vShow;
var Na = {
  highlight: {
    type: String,
    default: "off",
    validator(t) {
      return ["off", "ignore-case"].indexOf(t) !== -1;
    }
  }
}, oc = {
  query: {
    type: String
  }
}, _n = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const OS = Wr({
  mixins: [],
  props: ht(ht({
    text: {
      type: String,
      required: !0
    }
  }, Na), oc),
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
}), QS = {
  key: 0,
  class: "highlight"
}, zS = { key: 1 };
function GS(t, i, r, a, l, u) {
  return re(), Je("span", null, [
    nt("span", null, Wt(t.beginning), 1),
    t.highlighted ? (re(), Je("span", QS, Wt(t.highlighted), 1)) : Nt("", !0),
    t.end ? (re(), Je("span", zS, Wt(t.end), 1)) : Nt("", !0)
  ]);
}
var Qp = /* @__PURE__ */ _n(OS, [["render", GS], ["__scopeId", "data-v-8abe2492"]]);
const YS = Wr({
  emits: ["select", "deselect"],
  props: ht(ht({
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
  }, Na), oc),
  watch: {
    activeIndex(t) {
      t > -1 && this.$nextTick(() => {
        const i = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[t], r = this.$refs.list;
        bi(i, r.$el);
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
    FeatherList: nc,
    FeatherListItem: Ci,
    Highlighter: Qp
  }
}), HS = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function PS(t, i, r, a, l, u) {
  const f = ye("Highlighter"), p = ye("FeatherListItem"), V = ye("FeatherList");
  return re(), Rt(V, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": t.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ge(() => [
      (re(!0), Je(kr, null, Ri(t.items, (U, R) => (re(), Je(kr, {
        key: U[t.textProp]
      }, [
        rt(p, {
          "as-li": "",
          id: t.getId(R),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": t.isSelected(U),
          highlighted: t.isActive(R),
          selected: t.isSelected(U),
          onClick: ic((M) => t.select(U), ["stop"])
        }, {
          default: Ge(() => [
            rt(f, {
              highlight: t.highlight,
              query: t.query,
              text: U[t.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            U._new ? (re(), Je("span", HS, Wt(t.newLabel), 1)) : Nt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        t.items.length !== 1 && U._new ? (re(), Je("li", {
          role: "presentation",
          key: U[t.textProp] + "hr",
          class: "hr"
        })) : Nt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var _S = /* @__PURE__ */ _n(YS, [["render", PS], ["__scopeId", "data-v-f623434a"]]);
const jS = Wr({
  emits: ["select"],
  props: ht(ht({
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
  }, Na), oc),
  watch: {
    activeRow(t) {
      t > -1 && this.$nextTick(() => {
        const i = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[t + 1], r = this.$refs.grid;
        bi(i, r);
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
    Highlighter: Qp
  }
}), XS = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, LS = ["aria-multiselectable"], qS = { role: "row" }, KS = ["aria-selected", "onClick"], $S = ["id", "aria-selected"], eF = { key: 1 };
function tF(t, i, r, a, l, u) {
  const f = ye("Highlighter");
  return re(), Je("div", XS, [
    nt("table", {
      class: Gn(["feather-autocomplete-results-grid-container", t.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": t.single ? "false" : "true"
    }, [
      nt("thead", null, [
        nt("tr", qS, [
          (re(!0), Je(kr, null, Ri(t.config, (p) => (re(), Je("th", {
            key: p.title
          }, Wt(p.title), 1))), 128))
        ])
      ]),
      nt("tbody", null, [
        (re(!0), Je(kr, null, Ri(t.items, (p, V) => (re(), Je("tr", {
          role: "row",
          key: p[t.textProp],
          "aria-selected": t.isSelected(p),
          class: Gn({ focus: t.isActive(V), selected: t.isSelected(p) }),
          onClick: ic((U) => t.select(p), ["stop"])
        }, [
          (re(!0), Je(kr, null, Ri(t.config, (U, R) => (re(), Je("td", {
            key: p[t.textProp] + U.prop,
            id: t.getId(V, R),
            "aria-selected": t.isSelected(p),
            class: Gn({ "focus-cell": t.isActiveCell(V, R) })
          }, [
            U.prop === t.textProp ? (re(), Rt(f, {
              key: 0,
              highlight: t.highlight,
              query: t.query,
              text: p[U.prop]
            }, null, 8, ["highlight", "query", "text"])) : (re(), Je("p", eF, Wt(p[U.prop]), 1))
          ], 10, $S))), 128))
        ], 10, KS))), 128))
      ])
    ], 10, LS)
  ], 512);
}
var nF = /* @__PURE__ */ _n(jS, [["render", tF], ["__scopeId", "data-v-58c88fd1"]]);
const rF = Wr({
  components: {
    FeatherList: nc,
    FeatherListItem: Ci
  }
});
function iF(t, i, r, a, l, u) {
  const f = ye("FeatherListItem"), p = ye("FeatherList");
  return re(), Rt(p, { class: "result-list" }, {
    default: Ge(() => [
      rt(f, { "as-li": "" }, {
        default: Ge(() => [
          xl(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var oF = /* @__PURE__ */ _n(rF, [["render", iF], ["__scopeId", "data-v-06b752c6"]]);
const aF = Wr({
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
    FeatherIcon: Ne,
    Cancel: Kl,
    BaseChip: Ua,
    BaseChipLabel: ga,
    BaseChipPreIcon: Ra
  }
});
function sF(t, i, r, a, l, u) {
  const f = ye("FeatherIcon"), p = ye("BaseChipPreIcon"), V = ye("BaseChipLabel"), U = ye("Cancel"), R = ye("BaseChip");
  return re(), Rt(R, {
    class: Gn(["focus autocomplete-chip", { focused: t.focused }]),
    condensed: "",
    disabled: t.disabled
  }, {
    default: Ge(() => [
      t.showPreIcon ? (re(), Rt(p, { key: 0 }, {
        default: Ge(() => {
          var M, Z;
          return [
            rt(f, {
              icon: (M = t.pre) == null ? void 0 : M.icon,
              title: (Z = t.pre) == null ? void 0 : Z.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Nt("", !0),
      rt(V, null, {
        default: Ge(() => [
          Dp(Wt(t.text), 1)
        ]),
        _: 1
      }),
      t.disabled ? Nt("", !0) : (re(), Je("span", {
        key: 1,
        class: "chip-delete",
        onClick: i[0] || (i[0] = ic((...M) => t.handleClick && t.handleClick(...M), ["stop"]))
      }, [
        rt(f, {
          class: "delete-icon",
          flex: "",
          title: t.removeLabel
        }, {
          default: Ge(() => [
            rt(U)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var lF = /* @__PURE__ */ _n(aF, [["render", sF], ["__scopeId", "data-v-e0fc6ac0"]]);
const cF = {}, uF = (t) => (BS("data-v-aa720e06"), t = t(), DS(), t), dF = { class: "spinner-container" }, fF = /* @__PURE__ */ uF(() => /* @__PURE__ */ nt("svg", {
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
], -1)), hF = [
  fF
];
function pF(t, i) {
  return re(), Je("div", dF, hF);
}
var mF = /* @__PURE__ */ _n(cF, [["render", pF], ["__scopeId", "data-v-aa720e06"]]), Ma = /* @__PURE__ */ ((t) => (t.multi = "multi", t.single = "single", t))(Ma || {});
const zp = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, VF = ht(ht(ht({
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
    validator: (t) => !!Ma[t]
  },
  labels: {
    type: Object,
    default: () => zp
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Na), wa), fp), wF = {
  "update:modelValue": (t) => !0,
  new: (t) => !0,
  search: (t) => !0
}, vF = (t, i, r, a) => {
  if (r.toLowerCase() === Ma.multi) {
    const u = t.modelValue, f = (p) => {
      t.selectionLimit.value && p.length >= t.selectionLimit.value ? t.selectionLimitReached.value = !0 : t.selectionLimitReached.value = !1;
    };
    return {
      getInitialText() {
        return "";
      },
      handleModelValueChange(p) {
        p && p.length && f(p);
      },
      hasValue() {
        return !!(u.value && u.value.length);
      },
      selectItem(p) {
        if (u.value && u.value.filter((U) => U[t.textProp.value] === p[t.textProp.value]).length)
          return;
        const V = u.value ? [...u.value, p] : [p];
        a("update:modelValue", V), f(V);
      },
      removeItem(p) {
        const V = u.value.findIndex((U) => {
          if (p[t.textProp.value] === U[t.textProp.value])
            return !0;
        });
        debugger;
        if (V > -1) {
          const U = u.value.slice(0);
          U.splice(V, 1), a("update:modelValue", U), f(U), t.input.value.focus();
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
    selectItem(u) {
      i.active.row = -1, t.forceCloseResults.value = !0, u && u._new && t.allowNew ? a("new", u._new) : a("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      t.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (i.active.row > -1) {
        const u = t.internalResults.value[i.active.row];
        u && u._new && t.allowNew ? a("new", u._new) : a("update:modelValue", u);
      }
    }
  };
}, TF = () => {
  const t = Ip({
    row: -1
  }), i = (u) => {
    Op(() => {
      t.row = u;
    });
  }, r = (u, f) => {
    if (u.keyCode === q.DOWN) {
      if (u.preventDefault(), t.row === -1)
        a(), i(0);
      else if (t.row + 1 <= f.length - 1) {
        const p = t.row;
        a(), i(p + 1);
      }
      return !0;
    }
    if (u.keyCode === q.UP) {
      if (u.preventDefault(), t.row === 0)
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
}, UF = (t) => {
  const i = Ip({
    row: -1,
    col: -1
  }), r = (f, p) => {
    Op(() => {
      i.col = p, i.row = f;
    });
  }, a = (f, p) => {
    if (f.keyCode === q.DOWN) {
      if (f.preventDefault(), i.row === -1)
        l(), r(0, 0);
      else if (i.row + 1 <= p.length - 1) {
        const V = i.row, U = i.col;
        l(), r(V + 1, U);
      }
      return !0;
    }
    if (f.keyCode === q.UP) {
      if (f.preventDefault(), i.row === 0)
        l();
      else if (i.row > 0) {
        const V = i.row, U = i.col;
        l(), r(V - 1, U);
      }
      return !0;
    }
    if (f.keyCode === q.RIGHT && i.row !== -1) {
      if (f.preventDefault(), i.col + 1 <= t.length - 1) {
        const V = i.col, U = i.row;
        l(), r(U, V + 1);
      } else if (i.col <= t.length - 1 && i.row + 1 <= p.length - 1) {
        const V = i.row;
        l(), r(V + 1, 0);
      }
      return !0;
    }
    if (f.keyCode === q.LEFT && i.row !== -1) {
      if (f.preventDefault(), i.col === 0 && i.row === 0)
        return !0;
      if (i.col === 0 && i.row > 0) {
        const V = i.row;
        l(), r(V - 1, t.length - 1);
      } else if (i.col > 0) {
        const V = i.col, U = i.row;
        l(), r(U, V - 1);
      }
      return !0;
    }
    if (f.keyCode === q.END && i.row !== -1) {
      f.preventDefault();
      const V = i.row;
      return l(), r(f.ctrlKey ? p.length - 1 : V, t.length - 1), !0;
    }
    if (f.keyCode === q.HOME && i.row !== -1) {
      f.preventDefault();
      const V = i.row;
      return l(), r(f.ctrlKey ? 0 : V, 0), !0;
    }
    return !1;
  }, l = () => {
    i.row = -1, i.col = -1;
  };
  return { reset: l, handleKeyPress: a, active: i, first: () => {
    l(), r(0, 0);
  } };
}, gF = Wr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: wF,
  props: VF,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Ma.multi;
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
      return se("result-item");
    },
    minCharWarningId() {
      return se("min-char-warning");
    },
    subTextId() {
      return se("feather-autocomplete-description");
    },
    resultsId() {
      return se("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return se("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Tl(TS);
    },
    minCharIcon() {
      return Tl(ES);
    },
    dropdownIcon() {
      return Tl(yp);
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
        bi(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(t) {
      !this.inputRef || t !== this.inputRef.value && (this.inputRef.value = t);
    },
    modelValue: {
      handler(t, i) {
        t && i && t.length > i.length && this.scrollContainer && this.$nextTick(() => {
          bi(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = se("active-chip"), this.activeChipId;
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
      r !== void 0 && (yi(this.typingTimeout), this.typingTimeout = Mi(() => {
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
    const r = lp(Ul(t, "labels"), zp);
    va(t), hp(t);
    let a;
    t.gridConfig ? a = UF(t.gridConfig) : a = TF();
    const l = Ul(t, "id"), u = Nh(() => l.value ? l.value : se("feather-autocomplete-input")), { validate: f } = ma(u, Ul(t, "modelValue"), t.label, t.schema), { selectionLimit: p, modelValue: V, textProp: U, allowNew: R, type: M, minChar: Z } = IS(t), B = Rr(!1), W = Rr(!1), F = Rr(!1), E = Rr(""), S = Rr([]), D = Rr(), C = Nh(() => D.value), G = () => {
      B.value && !W.value && (E.value && E.value.length >= Z.value && i.emit("search", E.value), Z.value <= 0 && i.emit("search", E.value || ""), S.value = [], a.reset());
    }, J = vF({
      selectionLimit: p,
      selectionLimitReached: W,
      modelValue: V,
      textProp: U,
      allowNew: R,
      forceCloseResults: F,
      query: E,
      internalResults: S,
      input: C,
      emitSearch: G
    }, a, M.value, i.emit);
    return xS(ht(ht({}, r), Va(i.attrs)), {
      query: E,
      internalResults: S,
      selectionLimitReached: W,
      forceCloseResults: F,
      hasFocus: B,
      strategy: J,
      emitSearch: G,
      active: a.active,
      handleResultNavigation: a.handleKeyPress,
      resetResultIndex: a.reset,
      selectFirst: a.first,
      inputId: u,
      input: D,
      incomingId: l,
      inputRef: C,
      validate: f
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: dp,
    InputSubText: pa,
    AutocompleteResults: _S,
    AutocompleteResultsGrid: nF,
    Chip: lF,
    MenuMessage: oF,
    FeatherIcon: Ne,
    FeatherMenu: Zp,
    Spinner: mF
  }
}), RF = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, NF = ["id"], MF = { "data-ref-id": "feather-autocomplete-no-results" }, yF = { "data-ref-id": "feather-autocomplete-selection-limit" }, kF = { "data-ref-id": "feather-autocomplete-min-char" };
function ZF(t, i, r, a, l, u) {
  const f = ye("FeatherIcon"), p = ye("Chip"), V = ye("InputWrapper"), U = ye("AutocompleteResults"), R = ye("AutocompleteResultsGrid"), M = ye("MenuMessage"), Z = ye("Spinner"), B = ye("FeatherMenu"), W = ye("InputSubText");
  return re(), Je("div", gl(t.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    rt(B, {
      fill: "",
      "no-expand": "",
      open: t.showMenu,
      onOutsideClick: t.handleOutsideClick,
      onTriggerClick: t.handleTriggerClick,
      class: Gn(["feather-autocomplete-menu-container", { grid: t.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ge(({ attrs: F, on: E }) => [
        rt(V, gl(ht(ht({}, F), t.comboxBoxAttrs), {
          for: t.inputId,
          raised: t.raised,
          focused: t.hasFocus,
          "clear-text": t.clearLabel,
          showClear: t.singleSelect && t.hasValue,
          onClear: t.handleClear
        }, Mh(E), { ref: "scroll" }), {
          pre: Ge(() => [
            xl(t.$slots, "pre", {}, () => [
              rt(f, { icon: t.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ge(() => [
            rt(f, {
              icon: t.dropdownIcon,
              class: Gn(["feather-autocomplete-dropdown-icon", { rotate: t.showMenu }]),
              onClick: t.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ge(() => [
            nt("div", {
              class: Gn(["feather-autocomplete-content", { disabled: t.disabled }])
            }, [
              nt("div", RF, null, 512),
              nt("div", {
                class: "description",
                id: t.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Wt(t.selectedDescribedByText), 9, NF),
              (re(!0), Je(kr, null, Ri(t.modelValueList, (S, D) => Do((re(), Rt(p, {
                key: S[t.textProp],
                role: "button",
                id: D === t.activeChipIndex ? t.activeChipId : null,
                focused: D === t.activeChipIndex,
                disabled: t.disabled,
                text: S[t.textProp],
                "remove-label": t.removeLabel,
                pre: t.getPre(S),
                onDelete: (C) => t.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Io, !t.singleSelect]
              ])), 128)),
              nt("textarea", gl(t.inputAttrs, {
                class: ["feather-autocomplete-input", { error: t.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Mh(t.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ge(() => [
        t.gridConfig ? Nt("", !0) : Do((re(), Rt(U, {
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
          [Io, t.showResults]
        ]),
        t.gridConfig ? Do((re(), Rt(R, {
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
          [Io, t.showResults]
        ]) : Nt("", !0),
        t.showNoResults ? (re(), Rt(M, { key: 2 }, {
          default: Ge(() => [
            nt("span", MF, Wt(t.noResultsLabel), 1)
          ]),
          _: 1
        })) : Nt("", !0),
        t.showSelectionLimit ? (re(), Rt(M, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ge(() => [
            rt(f, { icon: t.minCharIcon }, null, 8, ["icon"]),
            nt("span", yF, Wt(t.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Nt("", !0),
        t.minChar ? Do((re(), Rt(M, {
          key: 4,
          class: "min-char-warning",
          id: t.minCharWarningId
        }, {
          default: Ge(() => [
            rt(f, { icon: t.minCharIcon }, null, 8, ["icon"]),
            nt("span", kF, [
              xl(t.$slots, "min-char", {}, () => [
                Dp(Wt(t.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Io, t.showMinCharWarning]
        ]) : Nt("", !0),
        t.showLoading ? (re(), Rt(Z, { key: 5 })) : Nt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    rt(W, { id: t.subTextId }, null, 8, ["id"])
  ], 16);
}
var JF = /* @__PURE__ */ _n(gF, [["render", ZF], ["__scopeId", "data-v-43a7e951"]]);
const bF = window.Vue.openBlock, EF = window.Vue.createElementBlock, SF = window.Vue.createElementVNode;
var FF = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const WF = {}, AF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CF = /* @__PURE__ */ SF("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), xF = [
  CF
];
function BF(t, i) {
  return bF(), EF("svg", AF, xF);
}
var DF = /* @__PURE__ */ FF(WF, [["render", BF]]);
const IF = window.Vue.openBlock, OF = window.Vue.createElementBlock, Gp = window.Vue.createElementVNode;
var QF = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const zF = {}, GF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YF = /* @__PURE__ */ Gp("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), HF = /* @__PURE__ */ Gp("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), PF = [
  YF,
  HF
];
function _F(t, i) {
  return IF(), OF("svg", GF, PF);
}
var jF = /* @__PURE__ */ QF(zF, [["render", _F]]);
const XF = window.Vue.openBlock, LF = window.Vue.createElementBlock, qF = window.Vue.createElementVNode;
var KF = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const $F = {}, eW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tW = /* @__PURE__ */ qF("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), nW = [
  tW
];
function rW(t, i) {
  return XF(), LF("svg", eW, nW);
}
var iW = /* @__PURE__ */ KF($F, [["render", rW]]);
const oW = window.Vue.openBlock, aW = window.Vue.createElementBlock, sW = window.Vue.createElementVNode;
var lW = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const cW = {}, uW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dW = /* @__PURE__ */ sW("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), fW = [
  dW
];
function hW(t, i) {
  return oW(), aW("svg", uW, fW);
}
var pW = /* @__PURE__ */ lW(cW, [["render", hW]]);
const mW = window.Vue.defineComponent, wi = window.Vue.createElementVNode, It = window.Vue.unref, Dn = window.Vue.createVNode, yh = window.Vue.toDisplayString, VW = window.Vue.renderList, wW = window.Vue.Fragment, Oo = window.Vue.openBlock, Qo = window.Vue.createElementBlock, zo = window.Vue.normalizeClass, vW = window.Vue.createCommentVNode, TW = window.Vue.pushScopeId, UW = window.Vue.popScopeId, gW = (t) => (TW("data-v-76c115a6"), t = t(), UW(), t), RW = { class: "list-main" }, NW = /* @__PURE__ */ gW(() => /* @__PURE__ */ wi("h2", null, "Situation List", -1)), MW = { class: "situation-filters" }, yW = { class: "container" }, kW = { class: "situation-list" }, ZW = {
  key: 0,
  class: "paginator"
}, JW = window.Vue.reactive, Go = window.Vue.ref, bW = /* @__PURE__ */ mW({
  __name: "SituationList",
  setup(t) {
    const i = VR();
    i.getSituations();
    const r = 10, a = JW({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: "",
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), l = Go(!1), u = Go(0), f = Go(1), p = Go(0), V = (F) => {
      u.value = 0, a.situations = F[0], f.value = F.length;
    }, U = (F) => {
      window.scrollTo(0, 0), a.situationSelected = F, a.selectedSituationIndex = i.situations.findIndex(
        (E) => E.id === F
      );
    }, R = (F, E) => {
      const S = a.situations;
      S.forEach((D) => {
        D.id === E && (D.status = F);
      }), a.situations = Re.exports.cloneDeep(S);
    }, M = () => {
      const F = Re.exports.chain(i.situations).map((S) => S.alarms).flatten().groupBy("nodeLabel").keys().value(), E = Re.exports.map(F, (S, D) => ({
        id: D,
        name: S
      }));
      a.nodes = E, a.results = E;
    };
    i.$subscribe((F, E) => {
      var S;
      a.situationSelected = (S = E.situations[0]) == null ? void 0 : S.id, M(), p.value = i.situations.length, a.allSituations = Re.exports.chunk(i.situations, r), V(a.allSituations);
    });
    const Z = (F) => {
      if (!F)
        return a.nodeSelectedValue = void 0, [];
      l.value = !0, a.results = a.nodes.filter((E) => E.name.toLowerCase().indexOf(F) > -1).map((E) => ({
        _text: E.name,
        id: E.id
      })), l.value = !1;
    }, B = () => {
      if (a.nodeSelectedValue && a.nodeSelectedValue._text) {
        const F = i.situations.map((E) => {
          if (E.alarms.filter(
            (D) => {
              var C;
              return D.nodeLabel === ((C = a.nodeSelectedValue) == null ? void 0 : C._text);
            }
          ).length > 0)
            return E;
        }).filter((E) => E);
        F && (p.value = F.length, a.situations = F);
      } else
        a.nodeSelectedValue = void 0, p.value = i.situations.length, V(a.allSituations);
    }, W = (F) => {
      F >= 0 && F <= f.value - 1 && (u.value = F, a.situations = a.allSituations[u.value]);
    };
    return (F, E) => (Oo(), Qo("div", RW, [
      NW,
      wi("div", MW, [
        Dn(It(JF), {
          class: "map-search",
          label: "Find by node",
          loading: l.value,
          modelValue: a.nodeSelectedValue,
          "onUpdate:modelValue": [
            E[0] || (E[0] = (S) => a.nodeSelectedValue = S),
            B
          ],
          results: a.results,
          type: "single",
          onSearch: Z
        }, null, 8, ["loading", "modelValue", "results"])
      ]),
      wi("div", yW, [
        wi("div", kW, [
          wi("div", null, " Result: " + yh(a.situations.length) + " of " + yh(p.value), 1),
          (Oo(!0), Qo(wW, null, VW(a.situations, (S) => (Oo(), Qo("div", {
            key: S.id
          }, [
            Dn(nN, {
              "situation-info": S,
              onSituationSelected: U,
              selected: a.situationSelected == S.id
            }, null, 8, ["situation-info", "selected"])
          ]))), 128)),
          a.nodeSelectedValue ? vW("", !0) : (Oo(), Qo("div", ZW, [
            Dn(It(Ne), {
              icon: It(DF),
              "aria-hidden": "true",
              class: zo(["icon nav", { disable: u.value == 0 }]),
              onClick: E[1] || (E[1] = (S) => W(0))
            }, null, 8, ["icon", "class"]),
            Dn(It(Ne), {
              icon: It(iW),
              "aria-hidden": "true",
              class: zo(["icon nav", { disable: u.value == 0 }]),
              onClick: E[2] || (E[2] = (S) => W(u.value - 1))
            }, null, 8, ["icon", "class"]),
            Dn(It(Ne), {
              icon: It(pW),
              "aria-hidden": "true",
              class: zo(["icon nav", { disable: u.value == f.value - 1 }]),
              onClick: E[3] || (E[3] = (S) => W(u.value + 1))
            }, null, 8, ["icon", "class"]),
            Dn(It(Ne), {
              icon: It(jF),
              "aria-hidden": "true",
              class: zo(["icon nav", { disable: u.value == f.value - 1 }]),
              onClick: E[4] || (E[4] = (S) => W(f.value - 1))
            }, null, 8, ["icon", "class"])
          ]))
        ]),
        Dn(cS, {
          "alarm-info": It(i).situations[a.selectedSituationIndex],
          onSituationStatusChanged: R
        }, null, 8, ["alarm-info"])
      ])
    ]));
  }
});
const EW = /* @__PURE__ */ He(bW, [["__scopeId", "data-v-76c115a6"]]);
var SW = Object.defineProperty, FW = Object.defineProperties, WW = Object.getOwnPropertyDescriptors, kh = Object.getOwnPropertySymbols, AW = Object.prototype.hasOwnProperty, CW = Object.prototype.propertyIsEnumerable, Zh = (t, i, r) => i in t ? SW(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Ko = (t, i) => {
  for (var r in i || (i = {}))
    AW.call(i, r) && Zh(t, r, i[r]);
  if (kh)
    for (var r of kh(i))
      CW.call(i, r) && Zh(t, r, i[r]);
  return t;
}, Yp = (t, i) => FW(t, WW(i));
const Hp = window.Vue.defineComponent, xW = window.Vue.ref, Ni = window.Vue.computed, BW = window.Vue.reactive, Jh = window.Vue.watch, Rl = window.Vue.inject, Pp = window.Vue.resolveComponent, Bl = window.Vue.openBlock, _p = window.Vue.createElementBlock, Rn = window.Vue.createElementVNode, DW = window.Vue.createBlock, IW = window.Vue.createCommentVNode, jp = window.Vue.renderSlot, OW = window.Vue.pushScopeId, QW = window.Vue.popScopeId, Nl = window.Vue.toRef, bh = window.Vue.mergeProps, zW = window.Vue.toDisplayString, GW = window.Vue.createVNode;
var Xp = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const YW = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, HW = Hp({
  props: YW,
  setup(t) {
    const i = xW(), r = () => {
      i.value.focus();
    }, a = Ni(() => se("feather-radio-button")), l = BW({
      first: !1,
      focus: r,
      disabled: t.disabled,
      value: t.value,
      checked: !1,
      id: a.value
    }), u = Ni(() => se("radio-label-id")), f = Ni(() => l.first || l.checked ? 0 : -1);
    Jh(() => t.disabled, (M) => {
      l.disabled = M;
    }, { immediate: !0 }), Jh(() => t.value, (M) => {
      l.value = M;
    }, { immediate: !0 });
    const p = Rl("register", (M) => {
    }), V = Rl("blur", (M) => {
    }), U = Rl("select", (M) => {
    });
    return p(l), {
      labelId: u,
      tabindex: f,
      vm: l,
      blur: V,
      click: () => {
        U(l);
      },
      input: i,
      id: a
    };
  },
  components: {
    FeatherRipple: Yn
  }
}), PW = (t) => (OW("data-v-24790cf0"), t = t(), QW(), t), _W = { class: "layout-container" }, jW = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], XW = { class: "radio hover focus" }, LW = /* @__PURE__ */ PW(() => /* @__PURE__ */ Rn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Rn("svg", { class: "dot" }, [
    /* @__PURE__ */ Rn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), qW = ["id"];
function KW(t, i, r, a, l, u) {
  const f = Pp("feather-ripple");
  return Bl(), _p("div", _W, [
    Rn("div", {
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
      Rn("div", XW, [
        LW,
        t.vm.disabled ? IW("", !0) : (Bl(), DW(f, {
          key: 0,
          center: ""
        }))
      ]),
      Rn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: t.labelId
      }, [
        jp(t.$slots, "default", {}, void 0, !0)
      ], 8, qW)
    ], 40, jW)
  ]);
}
var ca = /* @__PURE__ */ Xp(HW, [["render", KW], ["__scopeId", "data-v-24790cf0"]]);
const $W = Yp(Ko({}, wa), {
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
}), eA = {
  "update:modelValue": (t) => !0,
  blur: (t) => !0
}, tA = Hp({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: $W,
  emits: eA,
  setup(t, i) {
    va(t);
    const r = Nl(t, "error"), a = Nl(t, "modelValue"), l = Ni(() => se("feather-input-description")), u = Ni(() => {
      const f = Yp(Ko({}, i.attrs), {
        class: "",
        "aria-describedby": l.value
      });
      return f["aria-invalid"] || (f["aria-invalid"] = !!r.value), f;
    });
    return Ko(Ko({
      descriptionId: l,
      attrs: u
    }, pp(a, i.emit, t.label, t.schema, Nl(t, "error"))), Va(i.attrs));
  },
  components: {
    InputSubText: pa
  }
}), nA = ["for"], rA = ["id"];
function iA(t, i, r, a, l, u) {
  const f = Pp("InputSubText");
  return Bl(), _p("div", bh(t.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: t.vertical }]
  }), [
    Rn("label", {
      for: t.groupId,
      class: "group-label"
    }, zW(t.label), 9, nA),
    Rn("div", bh(t.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: t.groupId,
      onKeydown: i[0] || (i[0] = (...p) => t.keydown && t.keydown(...p))
    }), [
      jp(t.$slots, "default", {}, void 0, !0)
    ], 16, rA),
    GW(f, { id: t.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Lp = /* @__PURE__ */ Xp(tA, [["render", iA], ["__scopeId", "data-v-6775aeb9"]]);
const oA = window.Vue.openBlock, aA = window.Vue.createElementBlock, sA = window.Vue.createStaticVNode;
var lA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const cA = {}, uA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dA = /* @__PURE__ */ sA('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), fA = [
  dA
];
function hA(t, i) {
  return oA(), aA("svg", uA, fA);
}
var pA = /* @__PURE__ */ lA(cA, [["render", hA]]);
const mA = window.Vue.openBlock, VA = window.Vue.createElementBlock, wA = window.Vue.createStaticVNode;
var vA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const TA = {}, UA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gA = /* @__PURE__ */ wA('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), RA = [
  gA
];
function NA(t, i) {
  return mA(), VA("svg", UA, RA);
}
var MA = /* @__PURE__ */ vA(TA, [["render", NA]]);
const yA = window.Vue.openBlock, kA = window.Vue.createElementBlock, ZA = window.Vue.createElementVNode;
var JA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const bA = {}, EA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, SA = /* @__PURE__ */ ZA("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), FA = [
  SA
];
function WA(t, i) {
  return yA(), kA("svg", EA, FA);
}
var AA = /* @__PURE__ */ JA(bA, [["render", WA]]);
const CA = window.Vue.openBlock, xA = window.Vue.createElementBlock, BA = window.Vue.createStaticVNode;
var DA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const IA = {}, OA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QA = /* @__PURE__ */ BA('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), zA = [
  QA
];
function GA(t, i) {
  return CA(), xA("svg", OA, zA);
}
var YA = /* @__PURE__ */ DA(IA, [["render", GA]]);
const HA = window.Vue.openBlock, PA = window.Vue.createElementBlock, _A = window.Vue.createElementVNode;
var jA = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const XA = {}, LA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qA = /* @__PURE__ */ _A("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), KA = [
  qA
];
function $A(t, i) {
  return HA(), PA("svg", LA, KA);
}
var eC = /* @__PURE__ */ jA(XA, [["render", $A]]);
const qp = () => window.VRouter || ac, tC = window.Vue.defineComponent, ge = window.Vue.createElementVNode, Ei = window.Vue.createTextVNode, Le = window.Vue.unref, nn = window.Vue.createVNode, Yo = window.Vue.withCtx, Eh = window.Vue.openBlock, Sh = window.Vue.createElementBlock, nC = window.Vue.createCommentVNode, rC = window.Vue.pushScopeId, iC = window.Vue.popScopeId, At = (t) => (rC("data-v-0fd6b0cd"), t = t(), iC(), t), oC = { class: "container" }, aC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("div", { class: "title" }, "ALEC", -1)), sC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("div", { class: "description" }, [
  /* @__PURE__ */ Ei(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ ge("br"),
  /* @__PURE__ */ ge("strong", null, "Our goal"),
  /* @__PURE__ */ Ei(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), lC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("h3", null, "Key Benefits:", -1)), cC = { class: "list" }, uC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), dC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("span", null, "Assist in root cause analysis.", -1)), fC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), hC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("span", null, "Easy configuration.", -1)), pC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), mC = {
  key: 0,
  class: "optin"
}, VC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("h3", null, "Enable ALEC for more precise results:", -1)), wC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), vC = { class: "choices" }, TC = /* @__PURE__ */ At(() => /* @__PURE__ */ ge("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), UC = /* @__PURE__ */ Ei("Yes"), gC = /* @__PURE__ */ Ei("No"), RC = /* @__PURE__ */ Ei(" Continue "), NC = window.Vue.ref, MC = /* @__PURE__ */ tC({
  __name: "WelcomePage",
  setup(t) {
    const i = Ai(), r = qp(), a = NC(!0), l = () => {
      const u = Boolean(a.value);
      i.savePermission(u), u ? r.push({ name: "configuration" }) : r.push({ name: "situations" });
    };
    return (u, f) => (Eh(), Sh("div", oC, [
      aC,
      sC,
      ge("div", null, [
        lC,
        ge("div", cC, [
          ge("div", null, [
            nn(Le(Ne), {
              icon: Le(YA),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            uC
          ]),
          ge("div", null, [
            nn(Le(Ne), {
              icon: Le(AA),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            dC
          ]),
          ge("div", null, [
            nn(Le(Ne), {
              icon: Le(eC),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            fC
          ]),
          ge("div", null, [
            nn(Le(Ne), {
              icon: Le(pA),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            hC
          ]),
          ge("div", null, [
            nn(Le(Ne), {
              icon: Le(MA),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            pC
          ])
        ])
      ]),
      Le(i).isAdmin ? (Eh(), Sh("div", mC, [
        VC,
        wC,
        ge("div", vC, [
          TC,
          nn(Le(Lp), {
            horizontal: "",
            modelValue: a.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => a.value = p),
            label: ""
          }, {
            default: Yo(() => [
              nn(Le(ca), { value: !0 }, {
                default: Yo(() => [
                  UC
                ]),
                _: 1
              }),
              nn(Le(ca), { value: !1 }, {
                default: Yo(() => [
                  gC
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : nC("", !0),
      nn(Le(la), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: l
      }, {
        default: Yo(() => [
          RC
        ]),
        _: 1
      })
    ]));
  }
});
const yC = /* @__PURE__ */ He(MC, [["__scopeId", "data-v-0fd6b0cd"]]);
const kC = {}, ZC = window.Vue.openBlock, JC = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const bC = { class: "main" };
function EC(t, i) {
  return ZC(), JC("div", bC, "Something bad is happening...");
}
const SC = /* @__PURE__ */ He(kC, [["render", EC], ["__scopeId", "data-v-fefffdff"]]), FC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", WC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENK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";
var AC = Object.defineProperty, CC = Object.defineProperties, xC = Object.getOwnPropertyDescriptors, Fh = Object.getOwnPropertySymbols, BC = Object.prototype.hasOwnProperty, DC = Object.prototype.propertyIsEnumerable, Wh = (t, i, r) => i in t ? AC(t, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[i] = r, Dl = (t, i) => {
  for (var r in i || (i = {}))
    BC.call(i, r) && Wh(t, r, i[r]);
  if (Fh)
    for (var r of Fh(i))
      DC.call(i, r) && Wh(t, r, i[r]);
  return t;
}, Kp = (t, i) => CC(t, xC(i));
const $p = window.Vue.defineComponent, IC = window.Vue.inject, OC = window.Vue.resolveComponent, Ml = window.Vue.openBlock, Ah = window.Vue.createElementBlock, Mr = window.Vue.createElementVNode, QC = window.Vue.createBlock, Ch = window.Vue.createCommentVNode, zC = window.Vue.renderSlot, GC = window.Vue.pushScopeId, YC = window.Vue.popScopeId, yl = window.Vue.toRef, Ho = window.Vue.computed, HC = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var PC = (t, i) => {
  const r = t.__vccOpts || t;
  for (const [a, l] of i)
    r[a] = l;
  return r;
};
const _C = {
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
}, jC = {
  "update:modelValue": (t) => !0,
  click: (t) => !0,
  indeterminate: (t) => !0
}, XC = $p({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: jC,
  props: _C,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: IC("registerCheckbox", (i) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : se("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : se("checkbox-label");
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
    FeatherRipple: Yn
  }
}), LC = (t) => (GC("data-v-a7af27e2"), t = t(), YC(), t), qC = { class: "layout-container" }, KC = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], $C = { class: "checkbox hover focus" }, ex = /* @__PURE__ */ LC(() => /* @__PURE__ */ Mr("div", { class: "box" }, [
  /* @__PURE__ */ Mr("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Mr("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Mr("div", { class: "indeterminate" })
], -1)), tx = ["id", "for"];
function nx(t, i, r, a, l, u) {
  const f = OC("feather-ripple");
  return Ml(), Ah("div", qC, [
    Mr("div", {
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
      Mr("div", $C, [
        ex,
        t.disabled ? Ch("", !0) : (Ml(), QC(f, {
          key: 0,
          center: ""
        }))
      ]),
      t.label ? Ch("", !0) : (Ml(), Ah("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: t.labelId,
        for: t.inputId
      }, [
        zC(t.$slots, "default", {}, void 0, !0)
      ], 8, tx))
    ], 40, KC)
  ]);
}
var rx = /* @__PURE__ */ PC(XC, [["render", nx], ["__scopeId", "data-v-a7af27e2"]]);
const ix = Kp(Dl({}, wa), {
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
$p({
  props: ix,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(t, i) {
    va(t);
    const r = yl(t, "error"), a = Ho(() => se("feather-checkbox-group")), l = Ho(() => se("feather-input-description")), u = Ho(() => se("feather-input-label")), f = Ho(() => {
      const R = JSON.parse(JSON.stringify(i.attrs));
      return R["aria-invalid"] || (R["aria-invalid"] = !!r.value), Kp(Dl({}, R), {
        class: "",
        "aria-describedby": l.value
      });
    }), p = HC(a.value), { validate: V } = ma(p, yl(t, "modelValue"), t.label, t.schema, yl(t, "error"));
    return Dl({
      groupId: a,
      inputId: p,
      descriptionId: l,
      labelId: u,
      attrs: f,
      validate: V,
      registerCheckbox: (R) => {
        R && p.value === a.value && (p.value = R);
      }
    }, Va(i.attrs));
  },
  components: {
    InputSubText: pa
  }
});
const ox = window.Vue.defineComponent, Se = window.Vue.createElementVNode, Il = window.Vue.createTextVNode, Tn = window.Vue.unref, mi = window.Vue.withCtx, Vi = window.Vue.createVNode, ax = window.Vue.openBlock, sx = window.Vue.createElementBlock, lx = window.Vue.pushScopeId, cx = window.Vue.popScopeId, jn = (t) => (lx("data-v-9a5b5f4e"), t = t(), cx(), t), ux = { class: "container" }, dx = /* @__PURE__ */ jn(() => /* @__PURE__ */ Se("h2", null, "Configuration", -1)), fx = /* @__PURE__ */ jn(() => /* @__PURE__ */ Se("p", null, [
  /* @__PURE__ */ Il(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ Il(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Se("strong", null, [
    /* @__PURE__ */ Se("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), hx = { class: "radio-content" }, px = /* @__PURE__ */ jn(() => /* @__PURE__ */ Se("strong", { class: "title" }, "Clustering", -1)), mx = /* @__PURE__ */ jn(() => /* @__PURE__ */ Se("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), Vx = /* @__PURE__ */ jn(() => /* @__PURE__ */ Se("img", {
  class: "img",
  src: FC
}, null, -1)), wx = /* @__PURE__ */ jn(() => /* @__PURE__ */ Se("div", { class: "hellinger" }, [
  /* @__PURE__ */ Se("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Se("br"),
  /* @__PURE__ */ Se("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), vx = /* @__PURE__ */ jn(() => /* @__PURE__ */ Se("div", { class: "radio-content" }, [
  /* @__PURE__ */ Se("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Se("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Se("img", {
    class: "img img2",
    src: WC
  })
], -1)), Tx = /* @__PURE__ */ Il(" Continue "), xh = window.Vue.ref, Ux = /* @__PURE__ */ ox({
  __name: "ConfigurationPage",
  setup(t) {
    const i = Ai(), r = qp(), a = xh(!1), l = xh(Ft.ENGINE_DBSCAN), u = () => {
      rp(i.allowSave), fR(l.value, a.value), r.push({ name: "situations" });
    };
    return (f, p) => (ax(), sx("div", ux, [
      dx,
      fx,
      Se("div", null, [
        Vi(Tn(Lp), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: l.value,
          "onUpdate:modelValue": p[1] || (p[1] = (V) => l.value = V)
        }, {
          default: mi(() => [
            Vi(Tn(ca), {
              class: "radio",
              value: Tn(Ft).ENGINE_DBSCAN
            }, {
              default: mi(() => [
                Se("div", hx, [
                  px,
                  mx,
                  Vx,
                  Vi(Tn(rx), {
                    modelValue: a.value,
                    "onUpdate:modelValue": p[0] || (p[0] = (V) => a.value = V),
                    disabled: l.value !== Tn(Ft).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: mi(() => [
                      wx
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            Vi(Tn(ca), {
              class: "radio",
              value: Tn(Ft).ENGINE_DEEP_LEARNING
            }, {
              default: mi(() => [
                vx
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      Vi(Tn(la), {
        primary: "",
        class: "btn",
        onClick: p[2] || (p[2] = () => u())
      }, {
        default: mi(() => [
          Tx
        ]),
        _: 1
      })
    ]));
  }
});
const gx = /* @__PURE__ */ He(Ux, [["__scopeId", "data-v-9a5b5f4e"]]), Rx = window.VueRouter.createRouter, Nx = window.VueRouter.createWebHistory, kl = async () => {
  const t = window.VRouter || ac, i = Ai();
  if (!i.userId) {
    const r = await i.getUserRole();
    await i.getAlecInfo(), r ? t.push({ name: "home" }) : t.push({ name: "error" });
  }
}, em = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (t) => {
      const i = window.VRouter || ac, r = Ai();
      await r.getUserRole(), await r.getAlecInfo(), r.firstTime ? i.push({ name: "welcome", params: t.params }) : i.push({ name: "situations", params: t.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => kl(),
    component: yC
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => kl(),
    component: gx
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => kl(),
    component: EW
  },
  {
    path: "/error",
    name: "error",
    component: SC
  }
], Bh = window.VRouter;
if (Bh)
  for (const t of em) {
    const { path: i, name: r, component: a, beforeEnter: l } = t;
    Bh.addRoute("Plugin", {
      path: i.slice(1),
      name: r,
      component: a,
      beforeEnter: l
    });
  }
const ac = Rx({
  history: Nx(),
  routes: em
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = eg;

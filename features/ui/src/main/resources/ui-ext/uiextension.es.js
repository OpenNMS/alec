const Pe = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
}, y0 = {}, b0 = window.Vue.resolveComponent, E0 = window.Vue.createVNode, W0 = window.Vue.openBlock, F0 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const S0 = { class: "main" };
function A0(n, i) {
  const a = b0("router-view");
  return W0(), F0("div", S0, [
    E0(a)
  ]);
}
const x0 = /* @__PURE__ */ Pe(y0, [["render", A0], ["__scopeId", "data-v-5d32d140"]]), Q0 = window.Vue.defineComponent, B0 = window.Vue.openBlock, D0 = window.Vue.createBlock, O0 = /* @__PURE__ */ Q0({
  __name: "App",
  setup(n) {
    return (i, a) => (B0(), D0(x0));
  }
});
var vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function C0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Bd = { exports: {} }, Vl = { exports: {} }, Dd = function(i, a) {
  return function() {
    for (var c = new Array(arguments.length), f = 0; f < c.length; f++)
      c[f] = arguments[f];
    return i.apply(a, c);
  };
}, G0 = Dd, Tl = Object.prototype.toString, Ul = function(n) {
  return function(i) {
    var a = Tl.call(i);
    return n[a] || (n[a] = a.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Un(n) {
  return n = n.toLowerCase(), function(a) {
    return Ul(a) === n;
  };
}
function Rl(n) {
  return Array.isArray(n);
}
function Ha(n) {
  return typeof n > "u";
}
function z0(n) {
  return n !== null && !Ha(n) && n.constructor !== null && !Ha(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
var Od = Un("ArrayBuffer");
function Y0(n) {
  var i;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? i = ArrayBuffer.isView(n) : i = n && n.buffer && Od(n.buffer), i;
}
function I0(n) {
  return typeof n == "string";
}
function H0(n) {
  return typeof n == "number";
}
function Cd(n) {
  return n !== null && typeof n == "object";
}
function Ga(n) {
  if (Ul(n) !== "object")
    return !1;
  var i = Object.getPrototypeOf(n);
  return i === null || i === Object.prototype;
}
var P0 = Un("Date"), j0 = Un("File"), X0 = Un("Blob"), L0 = Un("FileList");
function vl(n) {
  return Tl.call(n) === "[object Function]";
}
function _0(n) {
  return Cd(n) && vl(n.pipe);
}
function q0(n) {
  var i = "[object FormData]";
  return n && (typeof FormData == "function" && n instanceof FormData || Tl.call(n) === i || vl(n.toString) && n.toString() === i);
}
var K0 = Un("URLSearchParams");
function $0(n) {
  return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "");
}
function eR() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Nl(n, i) {
  if (!(n === null || typeof n > "u"))
    if (typeof n != "object" && (n = [n]), Rl(n))
      for (var a = 0, l = n.length; a < l; a++)
        i.call(null, n[a], a, n);
    else
      for (var c in n)
        Object.prototype.hasOwnProperty.call(n, c) && i.call(null, n[c], c, n);
}
function ll() {
  var n = {};
  function i(c, f) {
    Ga(n[f]) && Ga(c) ? n[f] = ll(n[f], c) : Ga(c) ? n[f] = ll({}, c) : Rl(c) ? n[f] = c.slice() : n[f] = c;
  }
  for (var a = 0, l = arguments.length; a < l; a++)
    Nl(arguments[a], i);
  return n;
}
function tR(n, i, a) {
  return Nl(i, function(c, f) {
    a && typeof c == "function" ? n[f] = G0(c, a) : n[f] = c;
  }), n;
}
function nR(n) {
  return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n;
}
function rR(n, i, a, l) {
  n.prototype = Object.create(i.prototype, l), n.prototype.constructor = n, a && Object.assign(n.prototype, a);
}
function aR(n, i, a) {
  var l, c, f, p = {};
  i = i || {};
  do {
    for (l = Object.getOwnPropertyNames(n), c = l.length; c-- > 0; )
      f = l[c], p[f] || (i[f] = n[f], p[f] = !0);
    n = Object.getPrototypeOf(n);
  } while (n && (!a || a(n, i)) && n !== Object.prototype);
  return i;
}
function iR(n, i, a) {
  n = String(n), (a === void 0 || a > n.length) && (a = n.length), a -= i.length;
  var l = n.indexOf(i, a);
  return l !== -1 && l === a;
}
function oR(n) {
  if (!n)
    return null;
  var i = n.length;
  if (Ha(i))
    return null;
  for (var a = new Array(i); i-- > 0; )
    a[i] = n[i];
  return a;
}
var lR = function(n) {
  return function(i) {
    return n && i instanceof n;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Me = {
  isArray: Rl,
  isArrayBuffer: Od,
  isBuffer: z0,
  isFormData: q0,
  isArrayBufferView: Y0,
  isString: I0,
  isNumber: H0,
  isObject: Cd,
  isPlainObject: Ga,
  isUndefined: Ha,
  isDate: P0,
  isFile: j0,
  isBlob: X0,
  isFunction: vl,
  isStream: _0,
  isURLSearchParams: K0,
  isStandardBrowserEnv: eR,
  forEach: Nl,
  merge: ll,
  extend: tR,
  trim: $0,
  stripBOM: nR,
  inherits: rR,
  toFlatObject: aR,
  kindOf: Ul,
  kindOfTest: Un,
  endsWith: iR,
  toArray: oR,
  isTypedArray: lR,
  isFileList: L0
}, Qn = Me;
function du(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Gd = function(i, a, l) {
  if (!a)
    return i;
  var c;
  if (l)
    c = l(a);
  else if (Qn.isURLSearchParams(a))
    c = a.toString();
  else {
    var f = [];
    Qn.forEach(a, function(v, k) {
      v === null || typeof v > "u" || (Qn.isArray(v) ? k = k + "[]" : v = [v], Qn.forEach(v, function(y) {
        Qn.isDate(y) ? y = y.toISOString() : Qn.isObject(y) && (y = JSON.stringify(y)), f.push(du(k) + "=" + du(y));
      }));
    }), c = f.join("&");
  }
  if (c) {
    var p = i.indexOf("#");
    p !== -1 && (i = i.slice(0, p)), i += (i.indexOf("?") === -1 ? "?" : "&") + c;
  }
  return i;
}, sR = Me;
function $a() {
  this.handlers = [];
}
$a.prototype.use = function(i, a, l) {
  return this.handlers.push({
    fulfilled: i,
    rejected: a,
    synchronous: l ? l.synchronous : !1,
    runWhen: l ? l.runWhen : null
  }), this.handlers.length - 1;
};
$a.prototype.eject = function(i) {
  this.handlers[i] && (this.handlers[i] = null);
};
$a.prototype.forEach = function(i) {
  sR.forEach(this.handlers, function(l) {
    l !== null && i(l);
  });
};
var cR = $a, uR = Me, dR = function(i, a) {
  uR.forEach(i, function(c, f) {
    f !== a && f.toUpperCase() === a.toUpperCase() && (i[a] = c, delete i[f]);
  });
}, zd = Me;
function Hn(n, i, a, l, c) {
  Error.call(this), this.message = n, this.name = "AxiosError", i && (this.code = i), a && (this.config = a), l && (this.request = l), c && (this.response = c);
}
zd.inherits(Hn, Error, {
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
var Yd = Hn.prototype, Id = {};
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
  Id[n] = { value: n };
});
Object.defineProperties(Hn, Id);
Object.defineProperty(Yd, "isAxiosError", { value: !0 });
Hn.from = function(n, i, a, l, c, f) {
  var p = Object.create(Yd);
  return zd.toFlatObject(n, p, function(v) {
    return v !== Error.prototype;
  }), Hn.call(p, n.message, i, a, l, c), p.name = n.name, f && Object.assign(p, f), p;
};
var Ln = Hn, Hd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, dt = Me;
function fR(n, i) {
  i = i || new FormData();
  var a = [];
  function l(f) {
    return f === null ? "" : dt.isDate(f) ? f.toISOString() : dt.isArrayBuffer(f) || dt.isTypedArray(f) ? typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function c(f, p) {
    if (dt.isPlainObject(f) || dt.isArray(f)) {
      if (a.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + p);
      a.push(f), dt.forEach(f, function(v, k) {
        if (!dt.isUndefined(v)) {
          var J = p ? p + "." + k : k, y;
          if (v && !p && typeof v == "object") {
            if (dt.endsWith(k, "{}"))
              v = JSON.stringify(v);
            else if (dt.endsWith(k, "[]") && (y = dt.toArray(v))) {
              y.forEach(function(g) {
                !dt.isUndefined(g) && i.append(J, l(g));
              });
              return;
            }
          }
          c(v, J);
        }
      }), a.pop();
    } else
      i.append(p, l(f));
  }
  return c(n), i;
}
var Pd = fR, yo, fu;
function hR() {
  if (fu)
    return yo;
  fu = 1;
  var n = Ln;
  return yo = function(a, l, c) {
    var f = c.config.validateStatus;
    !c.status || !f || f(c.status) ? a(c) : l(new n(
      "Request failed with status code " + c.status,
      [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4],
      c.config,
      c.request,
      c
    ));
  }, yo;
}
var bo, hu;
function pR() {
  if (hu)
    return bo;
  hu = 1;
  var n = Me;
  return bo = n.isStandardBrowserEnv() ? function() {
    return {
      write: function(l, c, f, p, V, v) {
        var k = [];
        k.push(l + "=" + encodeURIComponent(c)), n.isNumber(f) && k.push("expires=" + new Date(f).toGMTString()), n.isString(p) && k.push("path=" + p), n.isString(V) && k.push("domain=" + V), v === !0 && k.push("secure"), document.cookie = k.join("; ");
      },
      read: function(l) {
        var c = document.cookie.match(new RegExp("(^|;\\s*)(" + l + ")=([^;]*)"));
        return c ? decodeURIComponent(c[3]) : null;
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
  }(), bo;
}
var mR = function(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}, VR = function(i, a) {
  return a ? i.replace(/\/+$/, "") + "/" + a.replace(/^\/+/, "") : i;
}, TR = mR, UR = VR, jd = function(i, a) {
  return i && !TR(a) ? UR(i, a) : a;
}, Eo, pu;
function RR() {
  if (pu)
    return Eo;
  pu = 1;
  var n = Me, i = [
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
  return Eo = function(l) {
    var c = {}, f, p, V;
    return l && n.forEach(l.split(`
`), function(k) {
      if (V = k.indexOf(":"), f = n.trim(k.substr(0, V)).toLowerCase(), p = n.trim(k.substr(V + 1)), f) {
        if (c[f] && i.indexOf(f) >= 0)
          return;
        f === "set-cookie" ? c[f] = (c[f] ? c[f] : []).concat([p]) : c[f] = c[f] ? c[f] + ", " + p : p;
      }
    }), c;
  }, Eo;
}
var Wo, mu;
function vR() {
  if (mu)
    return Wo;
  mu = 1;
  var n = Me;
  return Wo = n.isStandardBrowserEnv() ? function() {
    var a = /(msie|trident)/i.test(navigator.userAgent), l = document.createElement("a"), c;
    function f(p) {
      var V = p;
      return a && (l.setAttribute("href", V), V = l.href), l.setAttribute("href", V), {
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
    return c = f(window.location.href), function(V) {
      var v = n.isString(V) ? f(V) : V;
      return v.protocol === c.protocol && v.host === c.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Wo;
}
var Fo, Vu;
function ei() {
  if (Vu)
    return Fo;
  Vu = 1;
  var n = Ln, i = Me;
  function a(l) {
    n.call(this, l == null ? "canceled" : l, n.ERR_CANCELED), this.name = "CanceledError";
  }
  return i.inherits(a, n, {
    __CANCEL__: !0
  }), Fo = a, Fo;
}
var So, Tu;
function NR() {
  return Tu || (Tu = 1, So = function(i) {
    var a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
    return a && a[1] || "";
  }), So;
}
var Ao, Uu;
function Ru() {
  if (Uu)
    return Ao;
  Uu = 1;
  var n = Me, i = hR(), a = pR(), l = Gd, c = jd, f = RR(), p = vR(), V = Hd, v = Ln, k = ei(), J = NR();
  return Ao = function(g) {
    return new Promise(function(S, O) {
      var C = g.data, B = g.headers, _ = g.responseType, ne;
      function oe() {
        g.cancelToken && g.cancelToken.unsubscribe(ne), g.signal && g.signal.removeEventListener("abort", ne);
      }
      n.isFormData(C) && n.isStandardBrowserEnv() && delete B["Content-Type"];
      var F = new XMLHttpRequest();
      if (g.auth) {
        var Ue = g.auth.username || "", fe = g.auth.password ? unescape(encodeURIComponent(g.auth.password)) : "";
        B.Authorization = "Basic " + btoa(Ue + ":" + fe);
      }
      var ee = c(g.baseURL, g.url);
      F.open(g.method.toUpperCase(), l(ee, g.params, g.paramsSerializer), !0), F.timeout = g.timeout;
      function pt() {
        if (!!F) {
          var Je = "getAllResponseHeaders" in F ? f(F.getAllResponseHeaders()) : null, mt = !_ || _ === "text" || _ === "json" ? F.responseText : F.response, je = {
            data: mt,
            status: F.status,
            statusText: F.statusText,
            headers: Je,
            config: g,
            request: F
          };
          i(function(We) {
            S(We), oe();
          }, function(We) {
            O(We), oe();
          }, je), F = null;
        }
      }
      if ("onloadend" in F ? F.onloadend = pt : F.onreadystatechange = function() {
        !F || F.readyState !== 4 || F.status === 0 && !(F.responseURL && F.responseURL.indexOf("file:") === 0) || setTimeout(pt);
      }, F.onabort = function() {
        !F || (O(new v("Request aborted", v.ECONNABORTED, g, F)), F = null);
      }, F.onerror = function() {
        O(new v("Network Error", v.ERR_NETWORK, g, F, F)), F = null;
      }, F.ontimeout = function() {
        var mt = g.timeout ? "timeout of " + g.timeout + "ms exceeded" : "timeout exceeded", je = g.transitional || V;
        g.timeoutErrorMessage && (mt = g.timeoutErrorMessage), O(new v(
          mt,
          je.clarifyTimeoutError ? v.ETIMEDOUT : v.ECONNABORTED,
          g,
          F
        )), F = null;
      }, n.isStandardBrowserEnv()) {
        var Mt = (g.withCredentials || p(ee)) && g.xsrfCookieName ? a.read(g.xsrfCookieName) : void 0;
        Mt && (B[g.xsrfHeaderName] = Mt);
      }
      "setRequestHeader" in F && n.forEach(B, function(mt, je) {
        typeof C > "u" && je.toLowerCase() === "content-type" ? delete B[je] : F.setRequestHeader(je, mt);
      }), n.isUndefined(g.withCredentials) || (F.withCredentials = !!g.withCredentials), _ && _ !== "json" && (F.responseType = g.responseType), typeof g.onDownloadProgress == "function" && F.addEventListener("progress", g.onDownloadProgress), typeof g.onUploadProgress == "function" && F.upload && F.upload.addEventListener("progress", g.onUploadProgress), (g.cancelToken || g.signal) && (ne = function(Je) {
        !F || (O(!Je || Je && Je.type ? new k() : Je), F.abort(), F = null);
      }, g.cancelToken && g.cancelToken.subscribe(ne), g.signal && (g.signal.aborted ? ne() : g.signal.addEventListener("abort", ne))), C || (C = null);
      var rn = J(ee);
      if (rn && ["http", "https", "file"].indexOf(rn) === -1) {
        O(new v("Unsupported protocol " + rn + ":", v.ERR_BAD_REQUEST, g));
        return;
      }
      F.send(C);
    });
  }, Ao;
}
var xo, vu;
function MR() {
  return vu || (vu = 1, xo = null), xo;
}
var Ve = Me, Nu = dR, Mu = Ln, wR = Hd, ZR = Pd, JR = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function wu(n, i) {
  !Ve.isUndefined(n) && Ve.isUndefined(n["Content-Type"]) && (n["Content-Type"] = i);
}
function gR() {
  var n;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = Ru()), n;
}
function kR(n, i, a) {
  if (Ve.isString(n))
    try {
      return (i || JSON.parse)(n), Ve.trim(n);
    } catch (l) {
      if (l.name !== "SyntaxError")
        throw l;
    }
  return (a || JSON.stringify)(n);
}
var ti = {
  transitional: wR,
  adapter: gR(),
  transformRequest: [function(i, a) {
    if (Nu(a, "Accept"), Nu(a, "Content-Type"), Ve.isFormData(i) || Ve.isArrayBuffer(i) || Ve.isBuffer(i) || Ve.isStream(i) || Ve.isFile(i) || Ve.isBlob(i))
      return i;
    if (Ve.isArrayBufferView(i))
      return i.buffer;
    if (Ve.isURLSearchParams(i))
      return wu(a, "application/x-www-form-urlencoded;charset=utf-8"), i.toString();
    var l = Ve.isObject(i), c = a && a["Content-Type"], f;
    if ((f = Ve.isFileList(i)) || l && c === "multipart/form-data") {
      var p = this.env && this.env.FormData;
      return ZR(f ? { "files[]": i } : i, p && new p());
    } else if (l || c === "application/json")
      return wu(a, "application/json"), kR(i);
    return i;
  }],
  transformResponse: [function(i) {
    var a = this.transitional || ti.transitional, l = a && a.silentJSONParsing, c = a && a.forcedJSONParsing, f = !l && this.responseType === "json";
    if (f || c && Ve.isString(i) && i.length)
      try {
        return JSON.parse(i);
      } catch (p) {
        if (f)
          throw p.name === "SyntaxError" ? Mu.from(p, Mu.ERR_BAD_RESPONSE, this, null, this.response) : p;
      }
    return i;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: MR()
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
Ve.forEach(["delete", "get", "head"], function(i) {
  ti.headers[i] = {};
});
Ve.forEach(["post", "put", "patch"], function(i) {
  ti.headers[i] = Ve.merge(JR);
});
var Ml = ti, yR = Me, bR = Ml, ER = function(i, a, l) {
  var c = this || bR;
  return yR.forEach(l, function(p) {
    i = p.call(c, i, a);
  }), i;
}, Qo, Zu;
function Xd() {
  return Zu || (Zu = 1, Qo = function(i) {
    return !!(i && i.__CANCEL__);
  }), Qo;
}
var Ju = Me, Bo = ER, WR = Xd(), FR = Ml, SR = ei();
function Do(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new SR();
}
var AR = function(i) {
  Do(i), i.headers = i.headers || {}, i.data = Bo.call(
    i,
    i.data,
    i.headers,
    i.transformRequest
  ), i.headers = Ju.merge(
    i.headers.common || {},
    i.headers[i.method] || {},
    i.headers
  ), Ju.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(c) {
      delete i.headers[c];
    }
  );
  var a = i.adapter || FR.adapter;
  return a(i).then(function(c) {
    return Do(i), c.data = Bo.call(
      i,
      c.data,
      c.headers,
      i.transformResponse
    ), c;
  }, function(c) {
    return WR(c) || (Do(i), c && c.response && (c.response.data = Bo.call(
      i,
      c.response.data,
      c.response.headers,
      i.transformResponse
    ))), Promise.reject(c);
  });
}, Ye = Me, Ld = function(i, a) {
  a = a || {};
  var l = {};
  function c(J, y) {
    return Ye.isPlainObject(J) && Ye.isPlainObject(y) ? Ye.merge(J, y) : Ye.isPlainObject(y) ? Ye.merge({}, y) : Ye.isArray(y) ? y.slice() : y;
  }
  function f(J) {
    if (Ye.isUndefined(a[J])) {
      if (!Ye.isUndefined(i[J]))
        return c(void 0, i[J]);
    } else
      return c(i[J], a[J]);
  }
  function p(J) {
    if (!Ye.isUndefined(a[J]))
      return c(void 0, a[J]);
  }
  function V(J) {
    if (Ye.isUndefined(a[J])) {
      if (!Ye.isUndefined(i[J]))
        return c(void 0, i[J]);
    } else
      return c(void 0, a[J]);
  }
  function v(J) {
    if (J in a)
      return c(i[J], a[J]);
    if (J in i)
      return c(void 0, i[J]);
  }
  var k = {
    url: p,
    method: p,
    data: p,
    baseURL: V,
    transformRequest: V,
    transformResponse: V,
    paramsSerializer: V,
    timeout: V,
    timeoutMessage: V,
    withCredentials: V,
    adapter: V,
    responseType: V,
    xsrfCookieName: V,
    xsrfHeaderName: V,
    onUploadProgress: V,
    onDownloadProgress: V,
    decompress: V,
    maxContentLength: V,
    maxBodyLength: V,
    beforeRedirect: V,
    transport: V,
    httpAgent: V,
    httpsAgent: V,
    cancelToken: V,
    socketPath: V,
    responseEncoding: V,
    validateStatus: v
  };
  return Ye.forEach(Object.keys(i).concat(Object.keys(a)), function(y) {
    var g = k[y] || f, H = g(y);
    Ye.isUndefined(H) && g !== v || (l[y] = H);
  }), l;
}, Oo, gu;
function _d() {
  return gu || (gu = 1, Oo = {
    version: "0.27.2"
  }), Oo;
}
var xR = _d().version, qt = Ln, wl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, i) {
  wl[n] = function(l) {
    return typeof l === n || "a" + (i < 1 ? "n " : " ") + n;
  };
});
var ku = {};
wl.transitional = function(i, a, l) {
  function c(f, p) {
    return "[Axios v" + xR + "] Transitional option '" + f + "'" + p + (l ? ". " + l : "");
  }
  return function(f, p, V) {
    if (i === !1)
      throw new qt(
        c(p, " has been removed" + (a ? " in " + a : "")),
        qt.ERR_DEPRECATED
      );
    return a && !ku[p] && (ku[p] = !0, console.warn(
      c(
        p,
        " has been deprecated since v" + a + " and will be removed in the near future"
      )
    )), i ? i(f, p, V) : !0;
  };
};
function QR(n, i, a) {
  if (typeof n != "object")
    throw new qt("options must be an object", qt.ERR_BAD_OPTION_VALUE);
  for (var l = Object.keys(n), c = l.length; c-- > 0; ) {
    var f = l[c], p = i[f];
    if (p) {
      var V = n[f], v = V === void 0 || p(V, f, n);
      if (v !== !0)
        throw new qt("option " + f + " must be " + v, qt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (a !== !0)
      throw new qt("Unknown option " + f, qt.ERR_BAD_OPTION);
  }
}
var BR = {
  assertOptions: QR,
  validators: wl
}, qd = Me, DR = Gd, yu = cR, bu = AR, ni = Ld, OR = jd, Kd = BR, Bn = Kd.validators;
function Pn(n) {
  this.defaults = n, this.interceptors = {
    request: new yu(),
    response: new yu()
  };
}
Pn.prototype.request = function(i, a) {
  typeof i == "string" ? (a = a || {}, a.url = i) : a = i || {}, a = ni(this.defaults, a), a.method ? a.method = a.method.toLowerCase() : this.defaults.method ? a.method = this.defaults.method.toLowerCase() : a.method = "get";
  var l = a.transitional;
  l !== void 0 && Kd.assertOptions(l, {
    silentJSONParsing: Bn.transitional(Bn.boolean),
    forcedJSONParsing: Bn.transitional(Bn.boolean),
    clarifyTimeoutError: Bn.transitional(Bn.boolean)
  }, !1);
  var c = [], f = !0;
  this.interceptors.request.forEach(function(H) {
    typeof H.runWhen == "function" && H.runWhen(a) === !1 || (f = f && H.synchronous, c.unshift(H.fulfilled, H.rejected));
  });
  var p = [];
  this.interceptors.response.forEach(function(H) {
    p.push(H.fulfilled, H.rejected);
  });
  var V;
  if (!f) {
    var v = [bu, void 0];
    for (Array.prototype.unshift.apply(v, c), v = v.concat(p), V = Promise.resolve(a); v.length; )
      V = V.then(v.shift(), v.shift());
    return V;
  }
  for (var k = a; c.length; ) {
    var J = c.shift(), y = c.shift();
    try {
      k = J(k);
    } catch (g) {
      y(g);
      break;
    }
  }
  try {
    V = bu(k);
  } catch (g) {
    return Promise.reject(g);
  }
  for (; p.length; )
    V = V.then(p.shift(), p.shift());
  return V;
};
Pn.prototype.getUri = function(i) {
  i = ni(this.defaults, i);
  var a = OR(i.baseURL, i.url);
  return DR(a, i.params, i.paramsSerializer);
};
qd.forEach(["delete", "get", "head", "options"], function(i) {
  Pn.prototype[i] = function(a, l) {
    return this.request(ni(l || {}, {
      method: i,
      url: a,
      data: (l || {}).data
    }));
  };
});
qd.forEach(["post", "put", "patch"], function(i) {
  function a(l) {
    return function(f, p, V) {
      return this.request(ni(V || {}, {
        method: i,
        headers: l ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: f,
        data: p
      }));
    };
  }
  Pn.prototype[i] = a(), Pn.prototype[i + "Form"] = a(!0);
});
var CR = Pn, Co, Eu;
function GR() {
  if (Eu)
    return Co;
  Eu = 1;
  var n = ei();
  function i(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    var l;
    this.promise = new Promise(function(p) {
      l = p;
    });
    var c = this;
    this.promise.then(function(f) {
      if (!!c._listeners) {
        var p, V = c._listeners.length;
        for (p = 0; p < V; p++)
          c._listeners[p](f);
        c._listeners = null;
      }
    }), this.promise.then = function(f) {
      var p, V = new Promise(function(v) {
        c.subscribe(v), p = v;
      }).then(f);
      return V.cancel = function() {
        c.unsubscribe(p);
      }, V;
    }, a(function(p) {
      c.reason || (c.reason = new n(p), l(c.reason));
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
      var c = this._listeners.indexOf(l);
      c !== -1 && this._listeners.splice(c, 1);
    }
  }, i.source = function() {
    var l, c = new i(function(p) {
      l = p;
    });
    return {
      token: c,
      cancel: l
    };
  }, Co = i, Co;
}
var Go, Wu;
function zR() {
  return Wu || (Wu = 1, Go = function(i) {
    return function(l) {
      return i.apply(null, l);
    };
  }), Go;
}
var zo, Fu;
function YR() {
  if (Fu)
    return zo;
  Fu = 1;
  var n = Me;
  return zo = function(a) {
    return n.isObject(a) && a.isAxiosError === !0;
  }, zo;
}
var Su = Me, IR = Dd, za = CR, HR = Ld, PR = Ml;
function $d(n) {
  var i = new za(n), a = IR(za.prototype.request, i);
  return Su.extend(a, za.prototype, i), Su.extend(a, i), a.create = function(c) {
    return $d(HR(n, c));
  }, a;
}
var Qe = $d(PR);
Qe.Axios = za;
Qe.CanceledError = ei();
Qe.CancelToken = GR();
Qe.isCancel = Xd();
Qe.VERSION = _d().version;
Qe.toFormData = Pd;
Qe.AxiosError = Ln;
Qe.Cancel = Qe.CanceledError;
Qe.all = function(i) {
  return Promise.all(i);
};
Qe.spread = zR();
Qe.isAxiosError = YR();
Vl.exports = Qe;
Vl.exports.default = Qe;
(function(n) {
  n.exports = Vl.exports;
})(Bd);
const ef = /* @__PURE__ */ C0(Bd.exports), jR = ef.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), _n = ef.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
}), XR = "/alarms", LR = async () => {
  try {
    const n = await jR.get(XR);
    return n.status === 204 ? { alarm: [], totalCount: 0, count: 0, offset: 0 } : n.data;
  } catch {
    return !1;
  }
}, zn = {
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance"
}, _R = "/alec", qR = "/alec/engine/configuration", tf = "/alec/agreement/configuration", KR = "/alec/situation/statusList", nf = async (n) => {
  try {
    return (await _n.post(`${tf}`, {
      agreed: n
    })).status === 201;
  } catch {
    return !1;
  }
}, $R = async () => {
  try {
    const n = await _n.get(`${tf}`);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, ev = async (n, i) => {
  try {
    return (await _n.post(qR, {
      distanceMeasureName: i ? zn.HELLINGER_OPTION : zn.SPACE_DISTANCE_OPTION,
      engineName: n,
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    })).status === 200;
  } catch {
    return !1;
  }
}, tv = async (n, i) => {
  try {
    return (await _n.post(`${_R}/situation/${i}/${n}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, nv = async () => {
  try {
    const n = await _n.get(KR);
    return n.status === 200, n.data;
  } catch {
    return !1;
  }
};
var Vn = { exports: {} };
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
    var a, l = "4.17.21", c = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", p = "Expected a function", V = "Invalid `variable` option passed into `_.template`", v = "__lodash_hash_undefined__", k = 500, J = "__lodash_placeholder__", y = 1, g = 2, H = 4, S = 1, O = 2, C = 1, B = 2, _ = 4, ne = 8, oe = 16, F = 32, Ue = 64, fe = 128, ee = 256, pt = 512, Mt = 30, rn = "...", Je = 800, mt = 16, je = 1, Re = 2, We = 3, Xe = 1 / 0, Dt = 9007199254740991, Of = 17976931348623157e292, Dr = 0 / 0, Vt = 4294967295, Cf = Vt - 1, Gf = Vt >>> 1, zf = [
      ["ary", fe],
      ["bind", C],
      ["bindKey", B],
      ["curry", ne],
      ["curryRight", oe],
      ["flip", pt],
      ["partial", F],
      ["partialRight", Ue],
      ["rearg", ee]
    ], vn = "[object Arguments]", Or = "[object Array]", Yf = "[object AsyncFunction]", Kn = "[object Boolean]", $n = "[object Date]", If = "[object DOMException]", Cr = "[object Error]", Gr = "[object Function]", Al = "[object GeneratorFunction]", it = "[object Map]", er = "[object Number]", Hf = "[object Null]", wt = "[object Object]", xl = "[object Promise]", Pf = "[object Proxy]", tr = "[object RegExp]", ot = "[object Set]", nr = "[object String]", zr = "[object Symbol]", jf = "[object Undefined]", rr = "[object WeakMap]", Xf = "[object WeakSet]", ar = "[object ArrayBuffer]", Nn = "[object DataView]", oi = "[object Float32Array]", li = "[object Float64Array]", si = "[object Int8Array]", ci = "[object Int16Array]", ui = "[object Int32Array]", di = "[object Uint8Array]", fi = "[object Uint8ClampedArray]", hi = "[object Uint16Array]", pi = "[object Uint32Array]", Lf = /\b__p \+= '';/g, _f = /\b(__p \+=) '' \+/g, qf = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ql = /&(?:amp|lt|gt|quot|#39);/g, Bl = /[&<>"']/g, Kf = RegExp(Ql.source), $f = RegExp(Bl.source), eh = /<%-([\s\S]+?)%>/g, th = /<%([\s\S]+?)%>/g, Dl = /<%=([\s\S]+?)%>/g, nh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rh = /^\w*$/, ah = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, mi = /[\\^$.*+?()[\]{}|]/g, ih = RegExp(mi.source), Vi = /^\s+/, oh = /\s/, lh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, sh = /\{\n\/\* \[wrapped with (.+)\] \*/, ch = /,? & /, uh = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, dh = /[()=,{}\[\]\/\s]/, fh = /\\(\\)?/g, hh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ol = /\w*$/, ph = /^[-+]0x[0-9a-f]+$/i, mh = /^0b[01]+$/i, Vh = /^\[object .+?Constructor\]$/, Th = /^0o[0-7]+$/i, Uh = /^(?:0|[1-9]\d*)$/, Rh = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Yr = /($^)/, vh = /['\n\r\u2028\u2029\\]/g, Ir = "\\ud800-\\udfff", Nh = "\\u0300-\\u036f", Mh = "\\ufe20-\\ufe2f", wh = "\\u20d0-\\u20ff", Cl = Nh + Mh + wh, Gl = "\\u2700-\\u27bf", zl = "a-z\\xdf-\\xf6\\xf8-\\xff", Zh = "\\xac\\xb1\\xd7\\xf7", Jh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", gh = "\\u2000-\\u206f", kh = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Yl = "A-Z\\xc0-\\xd6\\xd8-\\xde", Il = "\\ufe0e\\ufe0f", Hl = Zh + Jh + gh + kh, Ti = "['\u2019]", yh = "[" + Ir + "]", Pl = "[" + Hl + "]", Hr = "[" + Cl + "]", jl = "\\d+", bh = "[" + Gl + "]", Xl = "[" + zl + "]", Ll = "[^" + Ir + Hl + jl + Gl + zl + Yl + "]", Ui = "\\ud83c[\\udffb-\\udfff]", Eh = "(?:" + Hr + "|" + Ui + ")", _l = "[^" + Ir + "]", Ri = "(?:\\ud83c[\\udde6-\\uddff]){2}", vi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mn = "[" + Yl + "]", ql = "\\u200d", Kl = "(?:" + Xl + "|" + Ll + ")", Wh = "(?:" + Mn + "|" + Ll + ")", $l = "(?:" + Ti + "(?:d|ll|m|re|s|t|ve))?", es = "(?:" + Ti + "(?:D|LL|M|RE|S|T|VE))?", ts = Eh + "?", ns = "[" + Il + "]?", Fh = "(?:" + ql + "(?:" + [_l, Ri, vi].join("|") + ")" + ns + ts + ")*", Sh = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ah = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rs = ns + ts + Fh, xh = "(?:" + [bh, Ri, vi].join("|") + ")" + rs, Qh = "(?:" + [_l + Hr + "?", Hr, Ri, vi, yh].join("|") + ")", Bh = RegExp(Ti, "g"), Dh = RegExp(Hr, "g"), Ni = RegExp(Ui + "(?=" + Ui + ")|" + Qh + rs, "g"), Oh = RegExp([
      Mn + "?" + Xl + "+" + $l + "(?=" + [Pl, Mn, "$"].join("|") + ")",
      Wh + "+" + es + "(?=" + [Pl, Mn + Kl, "$"].join("|") + ")",
      Mn + "?" + Kl + "+" + $l,
      Mn + "+" + es,
      Ah,
      Sh,
      jl,
      xh
    ].join("|"), "g"), Ch = RegExp("[" + ql + Ir + Cl + Il + "]"), Gh = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, zh = [
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
    ], Yh = -1, ae = {};
    ae[oi] = ae[li] = ae[si] = ae[ci] = ae[ui] = ae[di] = ae[fi] = ae[hi] = ae[pi] = !0, ae[vn] = ae[Or] = ae[ar] = ae[Kn] = ae[Nn] = ae[$n] = ae[Cr] = ae[Gr] = ae[it] = ae[er] = ae[wt] = ae[tr] = ae[ot] = ae[nr] = ae[rr] = !1;
    var re = {};
    re[vn] = re[Or] = re[ar] = re[Nn] = re[Kn] = re[$n] = re[oi] = re[li] = re[si] = re[ci] = re[ui] = re[it] = re[er] = re[wt] = re[tr] = re[ot] = re[nr] = re[zr] = re[di] = re[fi] = re[hi] = re[pi] = !0, re[Cr] = re[Gr] = re[rr] = !1;
    var Ih = {
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
    }, Hh = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Ph = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, jh = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Xh = parseFloat, Lh = parseInt, as = typeof vr == "object" && vr && vr.Object === Object && vr, _h = typeof self == "object" && self && self.Object === Object && self, ve = as || _h || Function("return this")(), Mi = i && !i.nodeType && i, an = Mi && !0 && n && !n.nodeType && n, is = an && an.exports === Mi, wi = is && as.process, Le = function() {
      try {
        var T = an && an.require && an.require("util").types;
        return T || wi && wi.binding && wi.binding("util");
      } catch {
      }
    }(), os = Le && Le.isArrayBuffer, ls = Le && Le.isDate, ss = Le && Le.isMap, cs = Le && Le.isRegExp, us = Le && Le.isSet, ds = Le && Le.isTypedArray;
    function Be(T, N, R) {
      switch (R.length) {
        case 0:
          return T.call(N);
        case 1:
          return T.call(N, R[0]);
        case 2:
          return T.call(N, R[0], R[1]);
        case 3:
          return T.call(N, R[0], R[1], R[2]);
      }
      return T.apply(N, R);
    }
    function qh(T, N, R, E) {
      for (var D = -1, L = T == null ? 0 : T.length; ++D < L; ) {
        var he = T[D];
        N(E, he, R(he), T);
      }
      return E;
    }
    function _e(T, N) {
      for (var R = -1, E = T == null ? 0 : T.length; ++R < E && N(T[R], R, T) !== !1; )
        ;
      return T;
    }
    function Kh(T, N) {
      for (var R = T == null ? 0 : T.length; R-- && N(T[R], R, T) !== !1; )
        ;
      return T;
    }
    function fs(T, N) {
      for (var R = -1, E = T == null ? 0 : T.length; ++R < E; )
        if (!N(T[R], R, T))
          return !1;
      return !0;
    }
    function Ot(T, N) {
      for (var R = -1, E = T == null ? 0 : T.length, D = 0, L = []; ++R < E; ) {
        var he = T[R];
        N(he, R, T) && (L[D++] = he);
      }
      return L;
    }
    function Pr(T, N) {
      var R = T == null ? 0 : T.length;
      return !!R && wn(T, N, 0) > -1;
    }
    function Zi(T, N, R) {
      for (var E = -1, D = T == null ? 0 : T.length; ++E < D; )
        if (R(N, T[E]))
          return !0;
      return !1;
    }
    function ie(T, N) {
      for (var R = -1, E = T == null ? 0 : T.length, D = Array(E); ++R < E; )
        D[R] = N(T[R], R, T);
      return D;
    }
    function Ct(T, N) {
      for (var R = -1, E = N.length, D = T.length; ++R < E; )
        T[D + R] = N[R];
      return T;
    }
    function Ji(T, N, R, E) {
      var D = -1, L = T == null ? 0 : T.length;
      for (E && L && (R = T[++D]); ++D < L; )
        R = N(R, T[D], D, T);
      return R;
    }
    function $h(T, N, R, E) {
      var D = T == null ? 0 : T.length;
      for (E && D && (R = T[--D]); D--; )
        R = N(R, T[D], D, T);
      return R;
    }
    function gi(T, N) {
      for (var R = -1, E = T == null ? 0 : T.length; ++R < E; )
        if (N(T[R], R, T))
          return !0;
      return !1;
    }
    var ep = ki("length");
    function tp(T) {
      return T.split("");
    }
    function np(T) {
      return T.match(uh) || [];
    }
    function hs(T, N, R) {
      var E;
      return R(T, function(D, L, he) {
        if (N(D, L, he))
          return E = L, !1;
      }), E;
    }
    function jr(T, N, R, E) {
      for (var D = T.length, L = R + (E ? 1 : -1); E ? L-- : ++L < D; )
        if (N(T[L], L, T))
          return L;
      return -1;
    }
    function wn(T, N, R) {
      return N === N ? pp(T, N, R) : jr(T, ps, R);
    }
    function rp(T, N, R, E) {
      for (var D = R - 1, L = T.length; ++D < L; )
        if (E(T[D], N))
          return D;
      return -1;
    }
    function ps(T) {
      return T !== T;
    }
    function ms(T, N) {
      var R = T == null ? 0 : T.length;
      return R ? bi(T, N) / R : Dr;
    }
    function ki(T) {
      return function(N) {
        return N == null ? a : N[T];
      };
    }
    function yi(T) {
      return function(N) {
        return T == null ? a : T[N];
      };
    }
    function Vs(T, N, R, E, D) {
      return D(T, function(L, he, te) {
        R = E ? (E = !1, L) : N(R, L, he, te);
      }), R;
    }
    function ap(T, N) {
      var R = T.length;
      for (T.sort(N); R--; )
        T[R] = T[R].value;
      return T;
    }
    function bi(T, N) {
      for (var R, E = -1, D = T.length; ++E < D; ) {
        var L = N(T[E]);
        L !== a && (R = R === a ? L : R + L);
      }
      return R;
    }
    function Ei(T, N) {
      for (var R = -1, E = Array(T); ++R < T; )
        E[R] = N(R);
      return E;
    }
    function ip(T, N) {
      return ie(N, function(R) {
        return [R, T[R]];
      });
    }
    function Ts(T) {
      return T && T.slice(0, Ns(T) + 1).replace(Vi, "");
    }
    function De(T) {
      return function(N) {
        return T(N);
      };
    }
    function Wi(T, N) {
      return ie(N, function(R) {
        return T[R];
      });
    }
    function ir(T, N) {
      return T.has(N);
    }
    function Us(T, N) {
      for (var R = -1, E = T.length; ++R < E && wn(N, T[R], 0) > -1; )
        ;
      return R;
    }
    function Rs(T, N) {
      for (var R = T.length; R-- && wn(N, T[R], 0) > -1; )
        ;
      return R;
    }
    function op(T, N) {
      for (var R = T.length, E = 0; R--; )
        T[R] === N && ++E;
      return E;
    }
    var lp = yi(Ih), sp = yi(Hh);
    function cp(T) {
      return "\\" + jh[T];
    }
    function up(T, N) {
      return T == null ? a : T[N];
    }
    function Zn(T) {
      return Ch.test(T);
    }
    function dp(T) {
      return Gh.test(T);
    }
    function fp(T) {
      for (var N, R = []; !(N = T.next()).done; )
        R.push(N.value);
      return R;
    }
    function Fi(T) {
      var N = -1, R = Array(T.size);
      return T.forEach(function(E, D) {
        R[++N] = [D, E];
      }), R;
    }
    function vs(T, N) {
      return function(R) {
        return T(N(R));
      };
    }
    function Gt(T, N) {
      for (var R = -1, E = T.length, D = 0, L = []; ++R < E; ) {
        var he = T[R];
        (he === N || he === J) && (T[R] = J, L[D++] = R);
      }
      return L;
    }
    function Xr(T) {
      var N = -1, R = Array(T.size);
      return T.forEach(function(E) {
        R[++N] = E;
      }), R;
    }
    function hp(T) {
      var N = -1, R = Array(T.size);
      return T.forEach(function(E) {
        R[++N] = [E, E];
      }), R;
    }
    function pp(T, N, R) {
      for (var E = R - 1, D = T.length; ++E < D; )
        if (T[E] === N)
          return E;
      return -1;
    }
    function mp(T, N, R) {
      for (var E = R + 1; E--; )
        if (T[E] === N)
          return E;
      return E;
    }
    function Jn(T) {
      return Zn(T) ? Tp(T) : ep(T);
    }
    function lt(T) {
      return Zn(T) ? Up(T) : tp(T);
    }
    function Ns(T) {
      for (var N = T.length; N-- && oh.test(T.charAt(N)); )
        ;
      return N;
    }
    var Vp = yi(Ph);
    function Tp(T) {
      for (var N = Ni.lastIndex = 0; Ni.test(T); )
        ++N;
      return N;
    }
    function Up(T) {
      return T.match(Ni) || [];
    }
    function Rp(T) {
      return T.match(Oh) || [];
    }
    var vp = function T(N) {
      N = N == null ? ve : gn.defaults(ve.Object(), N, gn.pick(ve, zh));
      var R = N.Array, E = N.Date, D = N.Error, L = N.Function, he = N.Math, te = N.Object, Si = N.RegExp, Np = N.String, qe = N.TypeError, Lr = R.prototype, Mp = L.prototype, kn = te.prototype, _r = N["__core-js_shared__"], qr = Mp.toString, K = kn.hasOwnProperty, wp = 0, Ms = function() {
        var e = /[^.]+$/.exec(_r && _r.keys && _r.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), Kr = kn.toString, Zp = qr.call(te), Jp = ve._, gp = Si(
        "^" + qr.call(K).replace(mi, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), $r = is ? N.Buffer : a, zt = N.Symbol, ea = N.Uint8Array, ws = $r ? $r.allocUnsafe : a, ta = vs(te.getPrototypeOf, te), Zs = te.create, Js = kn.propertyIsEnumerable, na = Lr.splice, gs = zt ? zt.isConcatSpreadable : a, or = zt ? zt.iterator : a, on = zt ? zt.toStringTag : a, ra = function() {
        try {
          var e = dn(te, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), kp = N.clearTimeout !== ve.clearTimeout && N.clearTimeout, yp = E && E.now !== ve.Date.now && E.now, bp = N.setTimeout !== ve.setTimeout && N.setTimeout, aa = he.ceil, ia = he.floor, Ai = te.getOwnPropertySymbols, Ep = $r ? $r.isBuffer : a, ks = N.isFinite, Wp = Lr.join, Fp = vs(te.keys, te), pe = he.max, we = he.min, Sp = E.now, Ap = N.parseInt, ys = he.random, xp = Lr.reverse, xi = dn(N, "DataView"), lr = dn(N, "Map"), Qi = dn(N, "Promise"), yn = dn(N, "Set"), sr = dn(N, "WeakMap"), cr = dn(te, "create"), oa = sr && new sr(), bn = {}, Qp = fn(xi), Bp = fn(lr), Dp = fn(Qi), Op = fn(yn), Cp = fn(sr), la = zt ? zt.prototype : a, ur = la ? la.valueOf : a, bs = la ? la.toString : a;
      function u(e) {
        if (se(e) && !G(e) && !(e instanceof j)) {
          if (e instanceof Ke)
            return e;
          if (K.call(e, "__wrapped__"))
            return Ec(e);
        }
        return new Ke(e);
      }
      var En = function() {
        function e() {
        }
        return function(t) {
          if (!le(t))
            return {};
          if (Zs)
            return Zs(t);
          e.prototype = t;
          var r = new e();
          return e.prototype = a, r;
        };
      }();
      function sa() {
      }
      function Ke(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = a;
      }
      u.templateSettings = {
        escape: eh,
        evaluate: th,
        interpolate: Dl,
        variable: "",
        imports: {
          _: u
        }
      }, u.prototype = sa.prototype, u.prototype.constructor = u, Ke.prototype = En(sa.prototype), Ke.prototype.constructor = Ke;
      function j(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Vt, this.__views__ = [];
      }
      function Gp() {
        var e = new j(this.__wrapped__);
        return e.__actions__ = Fe(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Fe(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Fe(this.__views__), e;
      }
      function zp() {
        if (this.__filtered__) {
          var e = new j(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Yp() {
        var e = this.__wrapped__.value(), t = this.__dir__, r = G(e), o = t < 0, s = r ? e.length : 0, d = tV(0, s, this.__views__), h = d.start, m = d.end, U = m - h, M = o ? m : h - 1, w = this.__iteratees__, Z = w.length, b = 0, W = we(U, this.__takeCount__);
        if (!r || !o && s == U && W == U)
          return $s(e, this.__actions__);
        var x = [];
        e:
          for (; U-- && b < W; ) {
            M += t;
            for (var Y = -1, Q = e[M]; ++Y < Z; ) {
              var P = w[Y], X = P.iteratee, Ge = P.type, ye = X(Q);
              if (Ge == Re)
                Q = ye;
              else if (!ye) {
                if (Ge == je)
                  continue e;
                break e;
              }
            }
            x[b++] = Q;
          }
        return x;
      }
      j.prototype = En(sa.prototype), j.prototype.constructor = j;
      function ln(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function Ip() {
        this.__data__ = cr ? cr(null) : {}, this.size = 0;
      }
      function Hp(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function Pp(e) {
        var t = this.__data__;
        if (cr) {
          var r = t[e];
          return r === v ? a : r;
        }
        return K.call(t, e) ? t[e] : a;
      }
      function jp(e) {
        var t = this.__data__;
        return cr ? t[e] !== a : K.call(t, e);
      }
      function Xp(e, t) {
        var r = this.__data__;
        return this.size += this.has(e) ? 0 : 1, r[e] = cr && t === a ? v : t, this;
      }
      ln.prototype.clear = Ip, ln.prototype.delete = Hp, ln.prototype.get = Pp, ln.prototype.has = jp, ln.prototype.set = Xp;
      function Zt(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function Lp() {
        this.__data__ = [], this.size = 0;
      }
      function _p(e) {
        var t = this.__data__, r = ca(t, e);
        if (r < 0)
          return !1;
        var o = t.length - 1;
        return r == o ? t.pop() : na.call(t, r, 1), --this.size, !0;
      }
      function qp(e) {
        var t = this.__data__, r = ca(t, e);
        return r < 0 ? a : t[r][1];
      }
      function Kp(e) {
        return ca(this.__data__, e) > -1;
      }
      function $p(e, t) {
        var r = this.__data__, o = ca(r, e);
        return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
      }
      Zt.prototype.clear = Lp, Zt.prototype.delete = _p, Zt.prototype.get = qp, Zt.prototype.has = Kp, Zt.prototype.set = $p;
      function Jt(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.clear(); ++t < r; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function em() {
        this.size = 0, this.__data__ = {
          hash: new ln(),
          map: new (lr || Zt)(),
          string: new ln()
        };
      }
      function tm(e) {
        var t = Na(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function nm(e) {
        return Na(this, e).get(e);
      }
      function rm(e) {
        return Na(this, e).has(e);
      }
      function am(e, t) {
        var r = Na(this, e), o = r.size;
        return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
      }
      Jt.prototype.clear = em, Jt.prototype.delete = tm, Jt.prototype.get = nm, Jt.prototype.has = rm, Jt.prototype.set = am;
      function sn(e) {
        var t = -1, r = e == null ? 0 : e.length;
        for (this.__data__ = new Jt(); ++t < r; )
          this.add(e[t]);
      }
      function im(e) {
        return this.__data__.set(e, v), this;
      }
      function om(e) {
        return this.__data__.has(e);
      }
      sn.prototype.add = sn.prototype.push = im, sn.prototype.has = om;
      function st(e) {
        var t = this.__data__ = new Zt(e);
        this.size = t.size;
      }
      function lm() {
        this.__data__ = new Zt(), this.size = 0;
      }
      function sm(e) {
        var t = this.__data__, r = t.delete(e);
        return this.size = t.size, r;
      }
      function cm(e) {
        return this.__data__.get(e);
      }
      function um(e) {
        return this.__data__.has(e);
      }
      function dm(e, t) {
        var r = this.__data__;
        if (r instanceof Zt) {
          var o = r.__data__;
          if (!lr || o.length < c - 1)
            return o.push([e, t]), this.size = ++r.size, this;
          r = this.__data__ = new Jt(o);
        }
        return r.set(e, t), this.size = r.size, this;
      }
      st.prototype.clear = lm, st.prototype.delete = sm, st.prototype.get = cm, st.prototype.has = um, st.prototype.set = dm;
      function Es(e, t) {
        var r = G(e), o = !r && hn(e), s = !r && !o && jt(e), d = !r && !o && !s && An(e), h = r || o || s || d, m = h ? Ei(e.length, Np) : [], U = m.length;
        for (var M in e)
          (t || K.call(e, M)) && !(h && (M == "length" || s && (M == "offset" || M == "parent") || d && (M == "buffer" || M == "byteLength" || M == "byteOffset") || bt(M, U))) && m.push(M);
        return m;
      }
      function Ws(e) {
        var t = e.length;
        return t ? e[ji(0, t - 1)] : a;
      }
      function fm(e, t) {
        return Ma(Fe(e), cn(t, 0, e.length));
      }
      function hm(e) {
        return Ma(Fe(e));
      }
      function Bi(e, t, r) {
        (r !== a && !ct(e[t], r) || r === a && !(t in e)) && gt(e, t, r);
      }
      function dr(e, t, r) {
        var o = e[t];
        (!(K.call(e, t) && ct(o, r)) || r === a && !(t in e)) && gt(e, t, r);
      }
      function ca(e, t) {
        for (var r = e.length; r--; )
          if (ct(e[r][0], t))
            return r;
        return -1;
      }
      function pm(e, t, r, o) {
        return Yt(e, function(s, d, h) {
          t(o, s, r(s), h);
        }), o;
      }
      function Fs(e, t) {
        return e && Ut(t, me(t), e);
      }
      function mm(e, t) {
        return e && Ut(t, Ae(t), e);
      }
      function gt(e, t, r) {
        t == "__proto__" && ra ? ra(e, t, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : e[t] = r;
      }
      function Di(e, t) {
        for (var r = -1, o = t.length, s = R(o), d = e == null; ++r < o; )
          s[r] = d ? a : Ro(e, t[r]);
        return s;
      }
      function cn(e, t, r) {
        return e === e && (r !== a && (e = e <= r ? e : r), t !== a && (e = e >= t ? e : t)), e;
      }
      function $e(e, t, r, o, s, d) {
        var h, m = t & y, U = t & g, M = t & H;
        if (r && (h = s ? r(e, o, s, d) : r(e)), h !== a)
          return h;
        if (!le(e))
          return e;
        var w = G(e);
        if (w) {
          if (h = rV(e), !m)
            return Fe(e, h);
        } else {
          var Z = Ze(e), b = Z == Gr || Z == Al;
          if (jt(e))
            return nc(e, m);
          if (Z == wt || Z == vn || b && !s) {
            if (h = U || b ? {} : Nc(e), !m)
              return U ? Pm(e, mm(h, e)) : Hm(e, Fs(h, e));
          } else {
            if (!re[Z])
              return s ? e : {};
            h = aV(e, Z, m);
          }
        }
        d || (d = new st());
        var W = d.get(e);
        if (W)
          return W;
        d.set(e, h), _c(e) ? e.forEach(function(Q) {
          h.add($e(Q, t, r, Q, e, d));
        }) : Xc(e) && e.forEach(function(Q, P) {
          h.set(P, $e(Q, t, r, P, e, d));
        });
        var x = M ? U ? ao : ro : U ? Ae : me, Y = w ? a : x(e);
        return _e(Y || e, function(Q, P) {
          Y && (P = Q, Q = e[P]), dr(h, P, $e(Q, t, r, P, e, d));
        }), h;
      }
      function Vm(e) {
        var t = me(e);
        return function(r) {
          return Ss(r, e, t);
        };
      }
      function Ss(e, t, r) {
        var o = r.length;
        if (e == null)
          return !o;
        for (e = te(e); o--; ) {
          var s = r[o], d = t[s], h = e[s];
          if (h === a && !(s in e) || !d(h))
            return !1;
        }
        return !0;
      }
      function As(e, t, r) {
        if (typeof e != "function")
          throw new qe(p);
        return Ur(function() {
          e.apply(a, r);
        }, t);
      }
      function fr(e, t, r, o) {
        var s = -1, d = Pr, h = !0, m = e.length, U = [], M = t.length;
        if (!m)
          return U;
        r && (t = ie(t, De(r))), o ? (d = Zi, h = !1) : t.length >= c && (d = ir, h = !1, t = new sn(t));
        e:
          for (; ++s < m; ) {
            var w = e[s], Z = r == null ? w : r(w);
            if (w = o || w !== 0 ? w : 0, h && Z === Z) {
              for (var b = M; b--; )
                if (t[b] === Z)
                  continue e;
              U.push(w);
            } else
              d(t, Z, o) || U.push(w);
          }
        return U;
      }
      var Yt = lc(Tt), xs = lc(Ci, !0);
      function Tm(e, t) {
        var r = !0;
        return Yt(e, function(o, s, d) {
          return r = !!t(o, s, d), r;
        }), r;
      }
      function ua(e, t, r) {
        for (var o = -1, s = e.length; ++o < s; ) {
          var d = e[o], h = t(d);
          if (h != null && (m === a ? h === h && !Ce(h) : r(h, m)))
            var m = h, U = d;
        }
        return U;
      }
      function Um(e, t, r, o) {
        var s = e.length;
        for (r = z(r), r < 0 && (r = -r > s ? 0 : s + r), o = o === a || o > s ? s : z(o), o < 0 && (o += s), o = r > o ? 0 : Kc(o); r < o; )
          e[r++] = t;
        return e;
      }
      function Qs(e, t) {
        var r = [];
        return Yt(e, function(o, s, d) {
          t(o, s, d) && r.push(o);
        }), r;
      }
      function Ne(e, t, r, o, s) {
        var d = -1, h = e.length;
        for (r || (r = oV), s || (s = []); ++d < h; ) {
          var m = e[d];
          t > 0 && r(m) ? t > 1 ? Ne(m, t - 1, r, o, s) : Ct(s, m) : o || (s[s.length] = m);
        }
        return s;
      }
      var Oi = sc(), Bs = sc(!0);
      function Tt(e, t) {
        return e && Oi(e, t, me);
      }
      function Ci(e, t) {
        return e && Bs(e, t, me);
      }
      function da(e, t) {
        return Ot(t, function(r) {
          return Et(e[r]);
        });
      }
      function un(e, t) {
        t = Ht(t, e);
        for (var r = 0, o = t.length; e != null && r < o; )
          e = e[Rt(t[r++])];
        return r && r == o ? e : a;
      }
      function Ds(e, t, r) {
        var o = t(e);
        return G(e) ? o : Ct(o, r(e));
      }
      function ge(e) {
        return e == null ? e === a ? jf : Hf : on && on in te(e) ? eV(e) : hV(e);
      }
      function Gi(e, t) {
        return e > t;
      }
      function Rm(e, t) {
        return e != null && K.call(e, t);
      }
      function vm(e, t) {
        return e != null && t in te(e);
      }
      function Nm(e, t, r) {
        return e >= we(t, r) && e < pe(t, r);
      }
      function zi(e, t, r) {
        for (var o = r ? Zi : Pr, s = e[0].length, d = e.length, h = d, m = R(d), U = 1 / 0, M = []; h--; ) {
          var w = e[h];
          h && t && (w = ie(w, De(t))), U = we(w.length, U), m[h] = !r && (t || s >= 120 && w.length >= 120) ? new sn(h && w) : a;
        }
        w = e[0];
        var Z = -1, b = m[0];
        e:
          for (; ++Z < s && M.length < U; ) {
            var W = w[Z], x = t ? t(W) : W;
            if (W = r || W !== 0 ? W : 0, !(b ? ir(b, x) : o(M, x, r))) {
              for (h = d; --h; ) {
                var Y = m[h];
                if (!(Y ? ir(Y, x) : o(e[h], x, r)))
                  continue e;
              }
              b && b.push(x), M.push(W);
            }
          }
        return M;
      }
      function Mm(e, t, r, o) {
        return Tt(e, function(s, d, h) {
          t(o, r(s), d, h);
        }), o;
      }
      function hr(e, t, r) {
        t = Ht(t, e), e = Jc(e, t);
        var o = e == null ? e : e[Rt(tt(t))];
        return o == null ? a : Be(o, e, r);
      }
      function Os(e) {
        return se(e) && ge(e) == vn;
      }
      function wm(e) {
        return se(e) && ge(e) == ar;
      }
      function Zm(e) {
        return se(e) && ge(e) == $n;
      }
      function pr(e, t, r, o, s) {
        return e === t ? !0 : e == null || t == null || !se(e) && !se(t) ? e !== e && t !== t : Jm(e, t, r, o, pr, s);
      }
      function Jm(e, t, r, o, s, d) {
        var h = G(e), m = G(t), U = h ? Or : Ze(e), M = m ? Or : Ze(t);
        U = U == vn ? wt : U, M = M == vn ? wt : M;
        var w = U == wt, Z = M == wt, b = U == M;
        if (b && jt(e)) {
          if (!jt(t))
            return !1;
          h = !0, w = !1;
        }
        if (b && !w)
          return d || (d = new st()), h || An(e) ? Uc(e, t, r, o, s, d) : Km(e, t, U, r, o, s, d);
        if (!(r & S)) {
          var W = w && K.call(e, "__wrapped__"), x = Z && K.call(t, "__wrapped__");
          if (W || x) {
            var Y = W ? e.value() : e, Q = x ? t.value() : t;
            return d || (d = new st()), s(Y, Q, r, o, d);
          }
        }
        return b ? (d || (d = new st()), $m(e, t, r, o, s, d)) : !1;
      }
      function gm(e) {
        return se(e) && Ze(e) == it;
      }
      function Yi(e, t, r, o) {
        var s = r.length, d = s, h = !o;
        if (e == null)
          return !d;
        for (e = te(e); s--; ) {
          var m = r[s];
          if (h && m[2] ? m[1] !== e[m[0]] : !(m[0] in e))
            return !1;
        }
        for (; ++s < d; ) {
          m = r[s];
          var U = m[0], M = e[U], w = m[1];
          if (h && m[2]) {
            if (M === a && !(U in e))
              return !1;
          } else {
            var Z = new st();
            if (o)
              var b = o(M, w, U, e, t, Z);
            if (!(b === a ? pr(w, M, S | O, o, Z) : b))
              return !1;
          }
        }
        return !0;
      }
      function Cs(e) {
        if (!le(e) || sV(e))
          return !1;
        var t = Et(e) ? gp : Vh;
        return t.test(fn(e));
      }
      function km(e) {
        return se(e) && ge(e) == tr;
      }
      function ym(e) {
        return se(e) && Ze(e) == ot;
      }
      function bm(e) {
        return se(e) && ya(e.length) && !!ae[ge(e)];
      }
      function Gs(e) {
        return typeof e == "function" ? e : e == null ? xe : typeof e == "object" ? G(e) ? Is(e[0], e[1]) : Ys(e) : cu(e);
      }
      function Ii(e) {
        if (!Tr(e))
          return Fp(e);
        var t = [];
        for (var r in te(e))
          K.call(e, r) && r != "constructor" && t.push(r);
        return t;
      }
      function Em(e) {
        if (!le(e))
          return fV(e);
        var t = Tr(e), r = [];
        for (var o in e)
          o == "constructor" && (t || !K.call(e, o)) || r.push(o);
        return r;
      }
      function Hi(e, t) {
        return e < t;
      }
      function zs(e, t) {
        var r = -1, o = Se(e) ? R(e.length) : [];
        return Yt(e, function(s, d, h) {
          o[++r] = t(s, d, h);
        }), o;
      }
      function Ys(e) {
        var t = oo(e);
        return t.length == 1 && t[0][2] ? wc(t[0][0], t[0][1]) : function(r) {
          return r === e || Yi(r, e, t);
        };
      }
      function Is(e, t) {
        return so(e) && Mc(t) ? wc(Rt(e), t) : function(r) {
          var o = Ro(r, e);
          return o === a && o === t ? vo(r, e) : pr(t, o, S | O);
        };
      }
      function fa(e, t, r, o, s) {
        e !== t && Oi(t, function(d, h) {
          if (s || (s = new st()), le(d))
            Wm(e, t, h, r, fa, o, s);
          else {
            var m = o ? o(uo(e, h), d, h + "", e, t, s) : a;
            m === a && (m = d), Bi(e, h, m);
          }
        }, Ae);
      }
      function Wm(e, t, r, o, s, d, h) {
        var m = uo(e, r), U = uo(t, r), M = h.get(U);
        if (M) {
          Bi(e, r, M);
          return;
        }
        var w = d ? d(m, U, r + "", e, t, h) : a, Z = w === a;
        if (Z) {
          var b = G(U), W = !b && jt(U), x = !b && !W && An(U);
          w = U, b || W || x ? G(m) ? w = m : ce(m) ? w = Fe(m) : W ? (Z = !1, w = nc(U, !0)) : x ? (Z = !1, w = rc(U, !0)) : w = [] : Rr(U) || hn(U) ? (w = m, hn(m) ? w = $c(m) : (!le(m) || Et(m)) && (w = Nc(U))) : Z = !1;
        }
        Z && (h.set(U, w), s(w, U, o, d, h), h.delete(U)), Bi(e, r, w);
      }
      function Hs(e, t) {
        var r = e.length;
        if (!!r)
          return t += t < 0 ? r : 0, bt(t, r) ? e[t] : a;
      }
      function Ps(e, t, r) {
        t.length ? t = ie(t, function(d) {
          return G(d) ? function(h) {
            return un(h, d.length === 1 ? d[0] : d);
          } : d;
        }) : t = [xe];
        var o = -1;
        t = ie(t, De(A()));
        var s = zs(e, function(d, h, m) {
          var U = ie(t, function(M) {
            return M(d);
          });
          return { criteria: U, index: ++o, value: d };
        });
        return ap(s, function(d, h) {
          return Im(d, h, r);
        });
      }
      function Fm(e, t) {
        return js(e, t, function(r, o) {
          return vo(e, o);
        });
      }
      function js(e, t, r) {
        for (var o = -1, s = t.length, d = {}; ++o < s; ) {
          var h = t[o], m = un(e, h);
          r(m, h) && mr(d, Ht(h, e), m);
        }
        return d;
      }
      function Sm(e) {
        return function(t) {
          return un(t, e);
        };
      }
      function Pi(e, t, r, o) {
        var s = o ? rp : wn, d = -1, h = t.length, m = e;
        for (e === t && (t = Fe(t)), r && (m = ie(e, De(r))); ++d < h; )
          for (var U = 0, M = t[d], w = r ? r(M) : M; (U = s(m, w, U, o)) > -1; )
            m !== e && na.call(m, U, 1), na.call(e, U, 1);
        return e;
      }
      function Xs(e, t) {
        for (var r = e ? t.length : 0, o = r - 1; r--; ) {
          var s = t[r];
          if (r == o || s !== d) {
            var d = s;
            bt(s) ? na.call(e, s, 1) : _i(e, s);
          }
        }
        return e;
      }
      function ji(e, t) {
        return e + ia(ys() * (t - e + 1));
      }
      function Am(e, t, r, o) {
        for (var s = -1, d = pe(aa((t - e) / (r || 1)), 0), h = R(d); d--; )
          h[o ? d : ++s] = e, e += r;
        return h;
      }
      function Xi(e, t) {
        var r = "";
        if (!e || t < 1 || t > Dt)
          return r;
        do
          t % 2 && (r += e), t = ia(t / 2), t && (e += e);
        while (t);
        return r;
      }
      function I(e, t) {
        return fo(Zc(e, t, xe), e + "");
      }
      function xm(e) {
        return Ws(xn(e));
      }
      function Qm(e, t) {
        var r = xn(e);
        return Ma(r, cn(t, 0, r.length));
      }
      function mr(e, t, r, o) {
        if (!le(e))
          return e;
        t = Ht(t, e);
        for (var s = -1, d = t.length, h = d - 1, m = e; m != null && ++s < d; ) {
          var U = Rt(t[s]), M = r;
          if (U === "__proto__" || U === "constructor" || U === "prototype")
            return e;
          if (s != h) {
            var w = m[U];
            M = o ? o(w, U, m) : a, M === a && (M = le(w) ? w : bt(t[s + 1]) ? [] : {});
          }
          dr(m, U, M), m = m[U];
        }
        return e;
      }
      var Ls = oa ? function(e, t) {
        return oa.set(e, t), e;
      } : xe, Bm = ra ? function(e, t) {
        return ra(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Mo(t),
          writable: !0
        });
      } : xe;
      function Dm(e) {
        return Ma(xn(e));
      }
      function et(e, t, r) {
        var o = -1, s = e.length;
        t < 0 && (t = -t > s ? 0 : s + t), r = r > s ? s : r, r < 0 && (r += s), s = t > r ? 0 : r - t >>> 0, t >>>= 0;
        for (var d = R(s); ++o < s; )
          d[o] = e[o + t];
        return d;
      }
      function Om(e, t) {
        var r;
        return Yt(e, function(o, s, d) {
          return r = t(o, s, d), !r;
        }), !!r;
      }
      function ha(e, t, r) {
        var o = 0, s = e == null ? o : e.length;
        if (typeof t == "number" && t === t && s <= Gf) {
          for (; o < s; ) {
            var d = o + s >>> 1, h = e[d];
            h !== null && !Ce(h) && (r ? h <= t : h < t) ? o = d + 1 : s = d;
          }
          return s;
        }
        return Li(e, t, xe, r);
      }
      function Li(e, t, r, o) {
        var s = 0, d = e == null ? 0 : e.length;
        if (d === 0)
          return 0;
        t = r(t);
        for (var h = t !== t, m = t === null, U = Ce(t), M = t === a; s < d; ) {
          var w = ia((s + d) / 2), Z = r(e[w]), b = Z !== a, W = Z === null, x = Z === Z, Y = Ce(Z);
          if (h)
            var Q = o || x;
          else
            M ? Q = x && (o || b) : m ? Q = x && b && (o || !W) : U ? Q = x && b && !W && (o || !Y) : W || Y ? Q = !1 : Q = o ? Z <= t : Z < t;
          Q ? s = w + 1 : d = w;
        }
        return we(d, Cf);
      }
      function _s(e, t) {
        for (var r = -1, o = e.length, s = 0, d = []; ++r < o; ) {
          var h = e[r], m = t ? t(h) : h;
          if (!r || !ct(m, U)) {
            var U = m;
            d[s++] = h === 0 ? 0 : h;
          }
        }
        return d;
      }
      function qs(e) {
        return typeof e == "number" ? e : Ce(e) ? Dr : +e;
      }
      function Oe(e) {
        if (typeof e == "string")
          return e;
        if (G(e))
          return ie(e, Oe) + "";
        if (Ce(e))
          return bs ? bs.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -Xe ? "-0" : t;
      }
      function It(e, t, r) {
        var o = -1, s = Pr, d = e.length, h = !0, m = [], U = m;
        if (r)
          h = !1, s = Zi;
        else if (d >= c) {
          var M = t ? null : _m(e);
          if (M)
            return Xr(M);
          h = !1, s = ir, U = new sn();
        } else
          U = t ? [] : m;
        e:
          for (; ++o < d; ) {
            var w = e[o], Z = t ? t(w) : w;
            if (w = r || w !== 0 ? w : 0, h && Z === Z) {
              for (var b = U.length; b--; )
                if (U[b] === Z)
                  continue e;
              t && U.push(Z), m.push(w);
            } else
              s(U, Z, r) || (U !== m && U.push(Z), m.push(w));
          }
        return m;
      }
      function _i(e, t) {
        return t = Ht(t, e), e = Jc(e, t), e == null || delete e[Rt(tt(t))];
      }
      function Ks(e, t, r, o) {
        return mr(e, t, r(un(e, t)), o);
      }
      function pa(e, t, r, o) {
        for (var s = e.length, d = o ? s : -1; (o ? d-- : ++d < s) && t(e[d], d, e); )
          ;
        return r ? et(e, o ? 0 : d, o ? d + 1 : s) : et(e, o ? d + 1 : 0, o ? s : d);
      }
      function $s(e, t) {
        var r = e;
        return r instanceof j && (r = r.value()), Ji(t, function(o, s) {
          return s.func.apply(s.thisArg, Ct([o], s.args));
        }, r);
      }
      function qi(e, t, r) {
        var o = e.length;
        if (o < 2)
          return o ? It(e[0]) : [];
        for (var s = -1, d = R(o); ++s < o; )
          for (var h = e[s], m = -1; ++m < o; )
            m != s && (d[s] = fr(d[s] || h, e[m], t, r));
        return It(Ne(d, 1), t, r);
      }
      function ec(e, t, r) {
        for (var o = -1, s = e.length, d = t.length, h = {}; ++o < s; ) {
          var m = o < d ? t[o] : a;
          r(h, e[o], m);
        }
        return h;
      }
      function Ki(e) {
        return ce(e) ? e : [];
      }
      function $i(e) {
        return typeof e == "function" ? e : xe;
      }
      function Ht(e, t) {
        return G(e) ? e : so(e, t) ? [e] : bc(q(e));
      }
      var Cm = I;
      function Pt(e, t, r) {
        var o = e.length;
        return r = r === a ? o : r, !t && r >= o ? e : et(e, t, r);
      }
      var tc = kp || function(e) {
        return ve.clearTimeout(e);
      };
      function nc(e, t) {
        if (t)
          return e.slice();
        var r = e.length, o = ws ? ws(r) : new e.constructor(r);
        return e.copy(o), o;
      }
      function eo(e) {
        var t = new e.constructor(e.byteLength);
        return new ea(t).set(new ea(e)), t;
      }
      function Gm(e, t) {
        var r = t ? eo(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.byteLength);
      }
      function zm(e) {
        var t = new e.constructor(e.source, Ol.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function Ym(e) {
        return ur ? te(ur.call(e)) : {};
      }
      function rc(e, t) {
        var r = t ? eo(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
      }
      function ac(e, t) {
        if (e !== t) {
          var r = e !== a, o = e === null, s = e === e, d = Ce(e), h = t !== a, m = t === null, U = t === t, M = Ce(t);
          if (!m && !M && !d && e > t || d && h && U && !m && !M || o && h && U || !r && U || !s)
            return 1;
          if (!o && !d && !M && e < t || M && r && s && !o && !d || m && r && s || !h && s || !U)
            return -1;
        }
        return 0;
      }
      function Im(e, t, r) {
        for (var o = -1, s = e.criteria, d = t.criteria, h = s.length, m = r.length; ++o < h; ) {
          var U = ac(s[o], d[o]);
          if (U) {
            if (o >= m)
              return U;
            var M = r[o];
            return U * (M == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function ic(e, t, r, o) {
        for (var s = -1, d = e.length, h = r.length, m = -1, U = t.length, M = pe(d - h, 0), w = R(U + M), Z = !o; ++m < U; )
          w[m] = t[m];
        for (; ++s < h; )
          (Z || s < d) && (w[r[s]] = e[s]);
        for (; M--; )
          w[m++] = e[s++];
        return w;
      }
      function oc(e, t, r, o) {
        for (var s = -1, d = e.length, h = -1, m = r.length, U = -1, M = t.length, w = pe(d - m, 0), Z = R(w + M), b = !o; ++s < w; )
          Z[s] = e[s];
        for (var W = s; ++U < M; )
          Z[W + U] = t[U];
        for (; ++h < m; )
          (b || s < d) && (Z[W + r[h]] = e[s++]);
        return Z;
      }
      function Fe(e, t) {
        var r = -1, o = e.length;
        for (t || (t = R(o)); ++r < o; )
          t[r] = e[r];
        return t;
      }
      function Ut(e, t, r, o) {
        var s = !r;
        r || (r = {});
        for (var d = -1, h = t.length; ++d < h; ) {
          var m = t[d], U = o ? o(r[m], e[m], m, r, e) : a;
          U === a && (U = e[m]), s ? gt(r, m, U) : dr(r, m, U);
        }
        return r;
      }
      function Hm(e, t) {
        return Ut(e, lo(e), t);
      }
      function Pm(e, t) {
        return Ut(e, Rc(e), t);
      }
      function ma(e, t) {
        return function(r, o) {
          var s = G(r) ? qh : pm, d = t ? t() : {};
          return s(r, e, A(o, 2), d);
        };
      }
      function Wn(e) {
        return I(function(t, r) {
          var o = -1, s = r.length, d = s > 1 ? r[s - 1] : a, h = s > 2 ? r[2] : a;
          for (d = e.length > 3 && typeof d == "function" ? (s--, d) : a, h && ke(r[0], r[1], h) && (d = s < 3 ? a : d, s = 1), t = te(t); ++o < s; ) {
            var m = r[o];
            m && e(t, m, o, d);
          }
          return t;
        });
      }
      function lc(e, t) {
        return function(r, o) {
          if (r == null)
            return r;
          if (!Se(r))
            return e(r, o);
          for (var s = r.length, d = t ? s : -1, h = te(r); (t ? d-- : ++d < s) && o(h[d], d, h) !== !1; )
            ;
          return r;
        };
      }
      function sc(e) {
        return function(t, r, o) {
          for (var s = -1, d = te(t), h = o(t), m = h.length; m--; ) {
            var U = h[e ? m : ++s];
            if (r(d[U], U, d) === !1)
              break;
          }
          return t;
        };
      }
      function jm(e, t, r) {
        var o = t & C, s = Vr(e);
        function d() {
          var h = this && this !== ve && this instanceof d ? s : e;
          return h.apply(o ? r : this, arguments);
        }
        return d;
      }
      function cc(e) {
        return function(t) {
          t = q(t);
          var r = Zn(t) ? lt(t) : a, o = r ? r[0] : t.charAt(0), s = r ? Pt(r, 1).join("") : t.slice(1);
          return o[e]() + s;
        };
      }
      function Fn(e) {
        return function(t) {
          return Ji(lu(ou(t).replace(Bh, "")), e, "");
        };
      }
      function Vr(e) {
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
          var r = En(e.prototype), o = e.apply(r, t);
          return le(o) ? o : r;
        };
      }
      function Xm(e, t, r) {
        var o = Vr(e);
        function s() {
          for (var d = arguments.length, h = R(d), m = d, U = Sn(s); m--; )
            h[m] = arguments[m];
          var M = d < 3 && h[0] !== U && h[d - 1] !== U ? [] : Gt(h, U);
          if (d -= M.length, d < r)
            return pc(
              e,
              t,
              Va,
              s.placeholder,
              a,
              h,
              M,
              a,
              a,
              r - d
            );
          var w = this && this !== ve && this instanceof s ? o : e;
          return Be(w, this, h);
        }
        return s;
      }
      function uc(e) {
        return function(t, r, o) {
          var s = te(t);
          if (!Se(t)) {
            var d = A(r, 3);
            t = me(t), r = function(m) {
              return d(s[m], m, s);
            };
          }
          var h = e(t, r, o);
          return h > -1 ? s[d ? t[h] : h] : a;
        };
      }
      function dc(e) {
        return yt(function(t) {
          var r = t.length, o = r, s = Ke.prototype.thru;
          for (e && t.reverse(); o--; ) {
            var d = t[o];
            if (typeof d != "function")
              throw new qe(p);
            if (s && !h && va(d) == "wrapper")
              var h = new Ke([], !0);
          }
          for (o = h ? o : r; ++o < r; ) {
            d = t[o];
            var m = va(d), U = m == "wrapper" ? io(d) : a;
            U && co(U[0]) && U[1] == (fe | ne | F | ee) && !U[4].length && U[9] == 1 ? h = h[va(U[0])].apply(h, U[3]) : h = d.length == 1 && co(d) ? h[m]() : h.thru(d);
          }
          return function() {
            var M = arguments, w = M[0];
            if (h && M.length == 1 && G(w))
              return h.plant(w).value();
            for (var Z = 0, b = r ? t[Z].apply(this, M) : w; ++Z < r; )
              b = t[Z].call(this, b);
            return b;
          };
        });
      }
      function Va(e, t, r, o, s, d, h, m, U, M) {
        var w = t & fe, Z = t & C, b = t & B, W = t & (ne | oe), x = t & pt, Y = b ? a : Vr(e);
        function Q() {
          for (var P = arguments.length, X = R(P), Ge = P; Ge--; )
            X[Ge] = arguments[Ge];
          if (W)
            var ye = Sn(Q), ze = op(X, ye);
          if (o && (X = ic(X, o, s, W)), d && (X = oc(X, d, h, W)), P -= ze, W && P < M) {
            var ue = Gt(X, ye);
            return pc(
              e,
              t,
              Va,
              Q.placeholder,
              r,
              X,
              ue,
              m,
              U,
              M - P
            );
          }
          var ut = Z ? r : this, Ft = b ? ut[e] : e;
          return P = X.length, m ? X = pV(X, m) : x && P > 1 && X.reverse(), w && U < P && (X.length = U), this && this !== ve && this instanceof Q && (Ft = Y || Vr(Ft)), Ft.apply(ut, X);
        }
        return Q;
      }
      function fc(e, t) {
        return function(r, o) {
          return Mm(r, e, t(o), {});
        };
      }
      function Ta(e, t) {
        return function(r, o) {
          var s;
          if (r === a && o === a)
            return t;
          if (r !== a && (s = r), o !== a) {
            if (s === a)
              return o;
            typeof r == "string" || typeof o == "string" ? (r = Oe(r), o = Oe(o)) : (r = qs(r), o = qs(o)), s = e(r, o);
          }
          return s;
        };
      }
      function to(e) {
        return yt(function(t) {
          return t = ie(t, De(A())), I(function(r) {
            var o = this;
            return e(t, function(s) {
              return Be(s, o, r);
            });
          });
        });
      }
      function Ua(e, t) {
        t = t === a ? " " : Oe(t);
        var r = t.length;
        if (r < 2)
          return r ? Xi(t, e) : t;
        var o = Xi(t, aa(e / Jn(t)));
        return Zn(t) ? Pt(lt(o), 0, e).join("") : o.slice(0, e);
      }
      function Lm(e, t, r, o) {
        var s = t & C, d = Vr(e);
        function h() {
          for (var m = -1, U = arguments.length, M = -1, w = o.length, Z = R(w + U), b = this && this !== ve && this instanceof h ? d : e; ++M < w; )
            Z[M] = o[M];
          for (; U--; )
            Z[M++] = arguments[++m];
          return Be(b, s ? r : this, Z);
        }
        return h;
      }
      function hc(e) {
        return function(t, r, o) {
          return o && typeof o != "number" && ke(t, r, o) && (r = o = a), t = Wt(t), r === a ? (r = t, t = 0) : r = Wt(r), o = o === a ? t < r ? 1 : -1 : Wt(o), Am(t, r, o, e);
        };
      }
      function Ra(e) {
        return function(t, r) {
          return typeof t == "string" && typeof r == "string" || (t = nt(t), r = nt(r)), e(t, r);
        };
      }
      function pc(e, t, r, o, s, d, h, m, U, M) {
        var w = t & ne, Z = w ? h : a, b = w ? a : h, W = w ? d : a, x = w ? a : d;
        t |= w ? F : Ue, t &= ~(w ? Ue : F), t & _ || (t &= ~(C | B));
        var Y = [
          e,
          t,
          s,
          W,
          Z,
          x,
          b,
          m,
          U,
          M
        ], Q = r.apply(a, Y);
        return co(e) && gc(Q, Y), Q.placeholder = o, kc(Q, e, t);
      }
      function no(e) {
        var t = he[e];
        return function(r, o) {
          if (r = nt(r), o = o == null ? 0 : we(z(o), 292), o && ks(r)) {
            var s = (q(r) + "e").split("e"), d = t(s[0] + "e" + (+s[1] + o));
            return s = (q(d) + "e").split("e"), +(s[0] + "e" + (+s[1] - o));
          }
          return t(r);
        };
      }
      var _m = yn && 1 / Xr(new yn([, -0]))[1] == Xe ? function(e) {
        return new yn(e);
      } : Jo;
      function mc(e) {
        return function(t) {
          var r = Ze(t);
          return r == it ? Fi(t) : r == ot ? hp(t) : ip(t, e(t));
        };
      }
      function kt(e, t, r, o, s, d, h, m) {
        var U = t & B;
        if (!U && typeof e != "function")
          throw new qe(p);
        var M = o ? o.length : 0;
        if (M || (t &= ~(F | Ue), o = s = a), h = h === a ? h : pe(z(h), 0), m = m === a ? m : z(m), M -= s ? s.length : 0, t & Ue) {
          var w = o, Z = s;
          o = s = a;
        }
        var b = U ? a : io(e), W = [
          e,
          t,
          r,
          o,
          s,
          w,
          Z,
          d,
          h,
          m
        ];
        if (b && dV(W, b), e = W[0], t = W[1], r = W[2], o = W[3], s = W[4], m = W[9] = W[9] === a ? U ? 0 : e.length : pe(W[9] - M, 0), !m && t & (ne | oe) && (t &= ~(ne | oe)), !t || t == C)
          var x = jm(e, t, r);
        else
          t == ne || t == oe ? x = Xm(e, t, m) : (t == F || t == (C | F)) && !s.length ? x = Lm(e, t, r, o) : x = Va.apply(a, W);
        var Y = b ? Ls : gc;
        return kc(Y(x, W), e, t);
      }
      function Vc(e, t, r, o) {
        return e === a || ct(e, kn[r]) && !K.call(o, r) ? t : e;
      }
      function Tc(e, t, r, o, s, d) {
        return le(e) && le(t) && (d.set(t, e), fa(e, t, a, Tc, d), d.delete(t)), e;
      }
      function qm(e) {
        return Rr(e) ? a : e;
      }
      function Uc(e, t, r, o, s, d) {
        var h = r & S, m = e.length, U = t.length;
        if (m != U && !(h && U > m))
          return !1;
        var M = d.get(e), w = d.get(t);
        if (M && w)
          return M == t && w == e;
        var Z = -1, b = !0, W = r & O ? new sn() : a;
        for (d.set(e, t), d.set(t, e); ++Z < m; ) {
          var x = e[Z], Y = t[Z];
          if (o)
            var Q = h ? o(Y, x, Z, t, e, d) : o(x, Y, Z, e, t, d);
          if (Q !== a) {
            if (Q)
              continue;
            b = !1;
            break;
          }
          if (W) {
            if (!gi(t, function(P, X) {
              if (!ir(W, X) && (x === P || s(x, P, r, o, d)))
                return W.push(X);
            })) {
              b = !1;
              break;
            }
          } else if (!(x === Y || s(x, Y, r, o, d))) {
            b = !1;
            break;
          }
        }
        return d.delete(e), d.delete(t), b;
      }
      function Km(e, t, r, o, s, d, h) {
        switch (r) {
          case Nn:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case ar:
            return !(e.byteLength != t.byteLength || !d(new ea(e), new ea(t)));
          case Kn:
          case $n:
          case er:
            return ct(+e, +t);
          case Cr:
            return e.name == t.name && e.message == t.message;
          case tr:
          case nr:
            return e == t + "";
          case it:
            var m = Fi;
          case ot:
            var U = o & S;
            if (m || (m = Xr), e.size != t.size && !U)
              return !1;
            var M = h.get(e);
            if (M)
              return M == t;
            o |= O, h.set(e, t);
            var w = Uc(m(e), m(t), o, s, d, h);
            return h.delete(e), w;
          case zr:
            if (ur)
              return ur.call(e) == ur.call(t);
        }
        return !1;
      }
      function $m(e, t, r, o, s, d) {
        var h = r & S, m = ro(e), U = m.length, M = ro(t), w = M.length;
        if (U != w && !h)
          return !1;
        for (var Z = U; Z--; ) {
          var b = m[Z];
          if (!(h ? b in t : K.call(t, b)))
            return !1;
        }
        var W = d.get(e), x = d.get(t);
        if (W && x)
          return W == t && x == e;
        var Y = !0;
        d.set(e, t), d.set(t, e);
        for (var Q = h; ++Z < U; ) {
          b = m[Z];
          var P = e[b], X = t[b];
          if (o)
            var Ge = h ? o(X, P, b, t, e, d) : o(P, X, b, e, t, d);
          if (!(Ge === a ? P === X || s(P, X, r, o, d) : Ge)) {
            Y = !1;
            break;
          }
          Q || (Q = b == "constructor");
        }
        if (Y && !Q) {
          var ye = e.constructor, ze = t.constructor;
          ye != ze && "constructor" in e && "constructor" in t && !(typeof ye == "function" && ye instanceof ye && typeof ze == "function" && ze instanceof ze) && (Y = !1);
        }
        return d.delete(e), d.delete(t), Y;
      }
      function yt(e) {
        return fo(Zc(e, a, Sc), e + "");
      }
      function ro(e) {
        return Ds(e, me, lo);
      }
      function ao(e) {
        return Ds(e, Ae, Rc);
      }
      var io = oa ? function(e) {
        return oa.get(e);
      } : Jo;
      function va(e) {
        for (var t = e.name + "", r = bn[t], o = K.call(bn, t) ? r.length : 0; o--; ) {
          var s = r[o], d = s.func;
          if (d == null || d == e)
            return s.name;
        }
        return t;
      }
      function Sn(e) {
        var t = K.call(u, "placeholder") ? u : e;
        return t.placeholder;
      }
      function A() {
        var e = u.iteratee || wo;
        return e = e === wo ? Gs : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Na(e, t) {
        var r = e.__data__;
        return lV(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
      }
      function oo(e) {
        for (var t = me(e), r = t.length; r--; ) {
          var o = t[r], s = e[o];
          t[r] = [o, s, Mc(s)];
        }
        return t;
      }
      function dn(e, t) {
        var r = up(e, t);
        return Cs(r) ? r : a;
      }
      function eV(e) {
        var t = K.call(e, on), r = e[on];
        try {
          e[on] = a;
          var o = !0;
        } catch {
        }
        var s = Kr.call(e);
        return o && (t ? e[on] = r : delete e[on]), s;
      }
      var lo = Ai ? function(e) {
        return e == null ? [] : (e = te(e), Ot(Ai(e), function(t) {
          return Js.call(e, t);
        }));
      } : go, Rc = Ai ? function(e) {
        for (var t = []; e; )
          Ct(t, lo(e)), e = ta(e);
        return t;
      } : go, Ze = ge;
      (xi && Ze(new xi(new ArrayBuffer(1))) != Nn || lr && Ze(new lr()) != it || Qi && Ze(Qi.resolve()) != xl || yn && Ze(new yn()) != ot || sr && Ze(new sr()) != rr) && (Ze = function(e) {
        var t = ge(e), r = t == wt ? e.constructor : a, o = r ? fn(r) : "";
        if (o)
          switch (o) {
            case Qp:
              return Nn;
            case Bp:
              return it;
            case Dp:
              return xl;
            case Op:
              return ot;
            case Cp:
              return rr;
          }
        return t;
      });
      function tV(e, t, r) {
        for (var o = -1, s = r.length; ++o < s; ) {
          var d = r[o], h = d.size;
          switch (d.type) {
            case "drop":
              e += h;
              break;
            case "dropRight":
              t -= h;
              break;
            case "take":
              t = we(t, e + h);
              break;
            case "takeRight":
              e = pe(e, t - h);
              break;
          }
        }
        return { start: e, end: t };
      }
      function nV(e) {
        var t = e.match(sh);
        return t ? t[1].split(ch) : [];
      }
      function vc(e, t, r) {
        t = Ht(t, e);
        for (var o = -1, s = t.length, d = !1; ++o < s; ) {
          var h = Rt(t[o]);
          if (!(d = e != null && r(e, h)))
            break;
          e = e[h];
        }
        return d || ++o != s ? d : (s = e == null ? 0 : e.length, !!s && ya(s) && bt(h, s) && (G(e) || hn(e)));
      }
      function rV(e) {
        var t = e.length, r = new e.constructor(t);
        return t && typeof e[0] == "string" && K.call(e, "index") && (r.index = e.index, r.input = e.input), r;
      }
      function Nc(e) {
        return typeof e.constructor == "function" && !Tr(e) ? En(ta(e)) : {};
      }
      function aV(e, t, r) {
        var o = e.constructor;
        switch (t) {
          case ar:
            return eo(e);
          case Kn:
          case $n:
            return new o(+e);
          case Nn:
            return Gm(e, r);
          case oi:
          case li:
          case si:
          case ci:
          case ui:
          case di:
          case fi:
          case hi:
          case pi:
            return rc(e, r);
          case it:
            return new o();
          case er:
          case nr:
            return new o(e);
          case tr:
            return zm(e);
          case ot:
            return new o();
          case zr:
            return Ym(e);
        }
      }
      function iV(e, t) {
        var r = t.length;
        if (!r)
          return e;
        var o = r - 1;
        return t[o] = (r > 1 ? "& " : "") + t[o], t = t.join(r > 2 ? ", " : " "), e.replace(lh, `{
/* [wrapped with ` + t + `] */
`);
      }
      function oV(e) {
        return G(e) || hn(e) || !!(gs && e && e[gs]);
      }
      function bt(e, t) {
        var r = typeof e;
        return t = t == null ? Dt : t, !!t && (r == "number" || r != "symbol" && Uh.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function ke(e, t, r) {
        if (!le(r))
          return !1;
        var o = typeof t;
        return (o == "number" ? Se(r) && bt(t, r.length) : o == "string" && t in r) ? ct(r[t], e) : !1;
      }
      function so(e, t) {
        if (G(e))
          return !1;
        var r = typeof e;
        return r == "number" || r == "symbol" || r == "boolean" || e == null || Ce(e) ? !0 : rh.test(e) || !nh.test(e) || t != null && e in te(t);
      }
      function lV(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function co(e) {
        var t = va(e), r = u[t];
        if (typeof r != "function" || !(t in j.prototype))
          return !1;
        if (e === r)
          return !0;
        var o = io(r);
        return !!o && e === o[0];
      }
      function sV(e) {
        return !!Ms && Ms in e;
      }
      var cV = _r ? Et : ko;
      function Tr(e) {
        var t = e && e.constructor, r = typeof t == "function" && t.prototype || kn;
        return e === r;
      }
      function Mc(e) {
        return e === e && !le(e);
      }
      function wc(e, t) {
        return function(r) {
          return r == null ? !1 : r[e] === t && (t !== a || e in te(r));
        };
      }
      function uV(e) {
        var t = ga(e, function(o) {
          return r.size === k && r.clear(), o;
        }), r = t.cache;
        return t;
      }
      function dV(e, t) {
        var r = e[1], o = t[1], s = r | o, d = s < (C | B | fe), h = o == fe && r == ne || o == fe && r == ee && e[7].length <= t[8] || o == (fe | ee) && t[7].length <= t[8] && r == ne;
        if (!(d || h))
          return e;
        o & C && (e[2] = t[2], s |= r & C ? 0 : _);
        var m = t[3];
        if (m) {
          var U = e[3];
          e[3] = U ? ic(U, m, t[4]) : m, e[4] = U ? Gt(e[3], J) : t[4];
        }
        return m = t[5], m && (U = e[5], e[5] = U ? oc(U, m, t[6]) : m, e[6] = U ? Gt(e[5], J) : t[6]), m = t[7], m && (e[7] = m), o & fe && (e[8] = e[8] == null ? t[8] : we(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = s, e;
      }
      function fV(e) {
        var t = [];
        if (e != null)
          for (var r in te(e))
            t.push(r);
        return t;
      }
      function hV(e) {
        return Kr.call(e);
      }
      function Zc(e, t, r) {
        return t = pe(t === a ? e.length - 1 : t, 0), function() {
          for (var o = arguments, s = -1, d = pe(o.length - t, 0), h = R(d); ++s < d; )
            h[s] = o[t + s];
          s = -1;
          for (var m = R(t + 1); ++s < t; )
            m[s] = o[s];
          return m[t] = r(h), Be(e, this, m);
        };
      }
      function Jc(e, t) {
        return t.length < 2 ? e : un(e, et(t, 0, -1));
      }
      function pV(e, t) {
        for (var r = e.length, o = we(t.length, r), s = Fe(e); o--; ) {
          var d = t[o];
          e[o] = bt(d, r) ? s[d] : a;
        }
        return e;
      }
      function uo(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var gc = yc(Ls), Ur = bp || function(e, t) {
        return ve.setTimeout(e, t);
      }, fo = yc(Bm);
      function kc(e, t, r) {
        var o = t + "";
        return fo(e, iV(o, mV(nV(o), r)));
      }
      function yc(e) {
        var t = 0, r = 0;
        return function() {
          var o = Sp(), s = mt - (o - r);
          if (r = o, s > 0) {
            if (++t >= Je)
              return arguments[0];
          } else
            t = 0;
          return e.apply(a, arguments);
        };
      }
      function Ma(e, t) {
        var r = -1, o = e.length, s = o - 1;
        for (t = t === a ? o : t; ++r < t; ) {
          var d = ji(r, s), h = e[d];
          e[d] = e[r], e[r] = h;
        }
        return e.length = t, e;
      }
      var bc = uV(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(ah, function(r, o, s, d) {
          t.push(s ? d.replace(fh, "$1") : o || r);
        }), t;
      });
      function Rt(e) {
        if (typeof e == "string" || Ce(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -Xe ? "-0" : t;
      }
      function fn(e) {
        if (e != null) {
          try {
            return qr.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function mV(e, t) {
        return _e(zf, function(r) {
          var o = "_." + r[0];
          t & r[1] && !Pr(e, o) && e.push(o);
        }), e.sort();
      }
      function Ec(e) {
        if (e instanceof j)
          return e.clone();
        var t = new Ke(e.__wrapped__, e.__chain__);
        return t.__actions__ = Fe(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function VV(e, t, r) {
        (r ? ke(e, t, r) : t === a) ? t = 1 : t = pe(z(t), 0);
        var o = e == null ? 0 : e.length;
        if (!o || t < 1)
          return [];
        for (var s = 0, d = 0, h = R(aa(o / t)); s < o; )
          h[d++] = et(e, s, s += t);
        return h;
      }
      function TV(e) {
        for (var t = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++t < r; ) {
          var d = e[t];
          d && (s[o++] = d);
        }
        return s;
      }
      function UV() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = R(e - 1), r = arguments[0], o = e; o--; )
          t[o - 1] = arguments[o];
        return Ct(G(r) ? Fe(r) : [r], Ne(t, 1));
      }
      var RV = I(function(e, t) {
        return ce(e) ? fr(e, Ne(t, 1, ce, !0)) : [];
      }), vV = I(function(e, t) {
        var r = tt(t);
        return ce(r) && (r = a), ce(e) ? fr(e, Ne(t, 1, ce, !0), A(r, 2)) : [];
      }), NV = I(function(e, t) {
        var r = tt(t);
        return ce(r) && (r = a), ce(e) ? fr(e, Ne(t, 1, ce, !0), a, r) : [];
      });
      function MV(e, t, r) {
        var o = e == null ? 0 : e.length;
        return o ? (t = r || t === a ? 1 : z(t), et(e, t < 0 ? 0 : t, o)) : [];
      }
      function wV(e, t, r) {
        var o = e == null ? 0 : e.length;
        return o ? (t = r || t === a ? 1 : z(t), t = o - t, et(e, 0, t < 0 ? 0 : t)) : [];
      }
      function ZV(e, t) {
        return e && e.length ? pa(e, A(t, 3), !0, !0) : [];
      }
      function JV(e, t) {
        return e && e.length ? pa(e, A(t, 3), !0) : [];
      }
      function gV(e, t, r, o) {
        var s = e == null ? 0 : e.length;
        return s ? (r && typeof r != "number" && ke(e, t, r) && (r = 0, o = s), Um(e, t, r, o)) : [];
      }
      function Wc(e, t, r) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var s = r == null ? 0 : z(r);
        return s < 0 && (s = pe(o + s, 0)), jr(e, A(t, 3), s);
      }
      function Fc(e, t, r) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var s = o - 1;
        return r !== a && (s = z(r), s = r < 0 ? pe(o + s, 0) : we(s, o - 1)), jr(e, A(t, 3), s, !0);
      }
      function Sc(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ne(e, 1) : [];
      }
      function kV(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ne(e, Xe) : [];
      }
      function yV(e, t) {
        var r = e == null ? 0 : e.length;
        return r ? (t = t === a ? 1 : z(t), Ne(e, t)) : [];
      }
      function bV(e) {
        for (var t = -1, r = e == null ? 0 : e.length, o = {}; ++t < r; ) {
          var s = e[t];
          o[s[0]] = s[1];
        }
        return o;
      }
      function Ac(e) {
        return e && e.length ? e[0] : a;
      }
      function EV(e, t, r) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var s = r == null ? 0 : z(r);
        return s < 0 && (s = pe(o + s, 0)), wn(e, t, s);
      }
      function WV(e) {
        var t = e == null ? 0 : e.length;
        return t ? et(e, 0, -1) : [];
      }
      var FV = I(function(e) {
        var t = ie(e, Ki);
        return t.length && t[0] === e[0] ? zi(t) : [];
      }), SV = I(function(e) {
        var t = tt(e), r = ie(e, Ki);
        return t === tt(r) ? t = a : r.pop(), r.length && r[0] === e[0] ? zi(r, A(t, 2)) : [];
      }), AV = I(function(e) {
        var t = tt(e), r = ie(e, Ki);
        return t = typeof t == "function" ? t : a, t && r.pop(), r.length && r[0] === e[0] ? zi(r, a, t) : [];
      });
      function xV(e, t) {
        return e == null ? "" : Wp.call(e, t);
      }
      function tt(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : a;
      }
      function QV(e, t, r) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var s = o;
        return r !== a && (s = z(r), s = s < 0 ? pe(o + s, 0) : we(s, o - 1)), t === t ? mp(e, t, s) : jr(e, ps, s, !0);
      }
      function BV(e, t) {
        return e && e.length ? Hs(e, z(t)) : a;
      }
      var DV = I(xc);
      function xc(e, t) {
        return e && e.length && t && t.length ? Pi(e, t) : e;
      }
      function OV(e, t, r) {
        return e && e.length && t && t.length ? Pi(e, t, A(r, 2)) : e;
      }
      function CV(e, t, r) {
        return e && e.length && t && t.length ? Pi(e, t, a, r) : e;
      }
      var GV = yt(function(e, t) {
        var r = e == null ? 0 : e.length, o = Di(e, t);
        return Xs(e, ie(t, function(s) {
          return bt(s, r) ? +s : s;
        }).sort(ac)), o;
      });
      function zV(e, t) {
        var r = [];
        if (!(e && e.length))
          return r;
        var o = -1, s = [], d = e.length;
        for (t = A(t, 3); ++o < d; ) {
          var h = e[o];
          t(h, o, e) && (r.push(h), s.push(o));
        }
        return Xs(e, s), r;
      }
      function ho(e) {
        return e == null ? e : xp.call(e);
      }
      function YV(e, t, r) {
        var o = e == null ? 0 : e.length;
        return o ? (r && typeof r != "number" && ke(e, t, r) ? (t = 0, r = o) : (t = t == null ? 0 : z(t), r = r === a ? o : z(r)), et(e, t, r)) : [];
      }
      function IV(e, t) {
        return ha(e, t);
      }
      function HV(e, t, r) {
        return Li(e, t, A(r, 2));
      }
      function PV(e, t) {
        var r = e == null ? 0 : e.length;
        if (r) {
          var o = ha(e, t);
          if (o < r && ct(e[o], t))
            return o;
        }
        return -1;
      }
      function jV(e, t) {
        return ha(e, t, !0);
      }
      function XV(e, t, r) {
        return Li(e, t, A(r, 2), !0);
      }
      function LV(e, t) {
        var r = e == null ? 0 : e.length;
        if (r) {
          var o = ha(e, t, !0) - 1;
          if (ct(e[o], t))
            return o;
        }
        return -1;
      }
      function _V(e) {
        return e && e.length ? _s(e) : [];
      }
      function qV(e, t) {
        return e && e.length ? _s(e, A(t, 2)) : [];
      }
      function KV(e) {
        var t = e == null ? 0 : e.length;
        return t ? et(e, 1, t) : [];
      }
      function $V(e, t, r) {
        return e && e.length ? (t = r || t === a ? 1 : z(t), et(e, 0, t < 0 ? 0 : t)) : [];
      }
      function eT(e, t, r) {
        var o = e == null ? 0 : e.length;
        return o ? (t = r || t === a ? 1 : z(t), t = o - t, et(e, t < 0 ? 0 : t, o)) : [];
      }
      function tT(e, t) {
        return e && e.length ? pa(e, A(t, 3), !1, !0) : [];
      }
      function nT(e, t) {
        return e && e.length ? pa(e, A(t, 3)) : [];
      }
      var rT = I(function(e) {
        return It(Ne(e, 1, ce, !0));
      }), aT = I(function(e) {
        var t = tt(e);
        return ce(t) && (t = a), It(Ne(e, 1, ce, !0), A(t, 2));
      }), iT = I(function(e) {
        var t = tt(e);
        return t = typeof t == "function" ? t : a, It(Ne(e, 1, ce, !0), a, t);
      });
      function oT(e) {
        return e && e.length ? It(e) : [];
      }
      function lT(e, t) {
        return e && e.length ? It(e, A(t, 2)) : [];
      }
      function sT(e, t) {
        return t = typeof t == "function" ? t : a, e && e.length ? It(e, a, t) : [];
      }
      function po(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = Ot(e, function(r) {
          if (ce(r))
            return t = pe(r.length, t), !0;
        }), Ei(t, function(r) {
          return ie(e, ki(r));
        });
      }
      function Qc(e, t) {
        if (!(e && e.length))
          return [];
        var r = po(e);
        return t == null ? r : ie(r, function(o) {
          return Be(t, a, o);
        });
      }
      var cT = I(function(e, t) {
        return ce(e) ? fr(e, t) : [];
      }), uT = I(function(e) {
        return qi(Ot(e, ce));
      }), dT = I(function(e) {
        var t = tt(e);
        return ce(t) && (t = a), qi(Ot(e, ce), A(t, 2));
      }), fT = I(function(e) {
        var t = tt(e);
        return t = typeof t == "function" ? t : a, qi(Ot(e, ce), a, t);
      }), hT = I(po);
      function pT(e, t) {
        return ec(e || [], t || [], dr);
      }
      function mT(e, t) {
        return ec(e || [], t || [], mr);
      }
      var VT = I(function(e) {
        var t = e.length, r = t > 1 ? e[t - 1] : a;
        return r = typeof r == "function" ? (e.pop(), r) : a, Qc(e, r);
      });
      function Bc(e) {
        var t = u(e);
        return t.__chain__ = !0, t;
      }
      function TT(e, t) {
        return t(e), e;
      }
      function wa(e, t) {
        return t(e);
      }
      var UT = yt(function(e) {
        var t = e.length, r = t ? e[0] : 0, o = this.__wrapped__, s = function(d) {
          return Di(d, e);
        };
        return t > 1 || this.__actions__.length || !(o instanceof j) || !bt(r) ? this.thru(s) : (o = o.slice(r, +r + (t ? 1 : 0)), o.__actions__.push({
          func: wa,
          args: [s],
          thisArg: a
        }), new Ke(o, this.__chain__).thru(function(d) {
          return t && !d.length && d.push(a), d;
        }));
      });
      function RT() {
        return Bc(this);
      }
      function vT() {
        return new Ke(this.value(), this.__chain__);
      }
      function NT() {
        this.__values__ === a && (this.__values__ = qc(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? a : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function MT() {
        return this;
      }
      function wT(e) {
        for (var t, r = this; r instanceof sa; ) {
          var o = Ec(r);
          o.__index__ = 0, o.__values__ = a, t ? s.__wrapped__ = o : t = o;
          var s = o;
          r = r.__wrapped__;
        }
        return s.__wrapped__ = e, t;
      }
      function ZT() {
        var e = this.__wrapped__;
        if (e instanceof j) {
          var t = e;
          return this.__actions__.length && (t = new j(this)), t = t.reverse(), t.__actions__.push({
            func: wa,
            args: [ho],
            thisArg: a
          }), new Ke(t, this.__chain__);
        }
        return this.thru(ho);
      }
      function JT() {
        return $s(this.__wrapped__, this.__actions__);
      }
      var gT = ma(function(e, t, r) {
        K.call(e, r) ? ++e[r] : gt(e, r, 1);
      });
      function kT(e, t, r) {
        var o = G(e) ? fs : Tm;
        return r && ke(e, t, r) && (t = a), o(e, A(t, 3));
      }
      function yT(e, t) {
        var r = G(e) ? Ot : Qs;
        return r(e, A(t, 3));
      }
      var bT = uc(Wc), ET = uc(Fc);
      function WT(e, t) {
        return Ne(Za(e, t), 1);
      }
      function FT(e, t) {
        return Ne(Za(e, t), Xe);
      }
      function ST(e, t, r) {
        return r = r === a ? 1 : z(r), Ne(Za(e, t), r);
      }
      function Dc(e, t) {
        var r = G(e) ? _e : Yt;
        return r(e, A(t, 3));
      }
      function Oc(e, t) {
        var r = G(e) ? Kh : xs;
        return r(e, A(t, 3));
      }
      var AT = ma(function(e, t, r) {
        K.call(e, r) ? e[r].push(t) : gt(e, r, [t]);
      });
      function xT(e, t, r, o) {
        e = Se(e) ? e : xn(e), r = r && !o ? z(r) : 0;
        var s = e.length;
        return r < 0 && (r = pe(s + r, 0)), ba(e) ? r <= s && e.indexOf(t, r) > -1 : !!s && wn(e, t, r) > -1;
      }
      var QT = I(function(e, t, r) {
        var o = -1, s = typeof t == "function", d = Se(e) ? R(e.length) : [];
        return Yt(e, function(h) {
          d[++o] = s ? Be(t, h, r) : hr(h, t, r);
        }), d;
      }), BT = ma(function(e, t, r) {
        gt(e, r, t);
      });
      function Za(e, t) {
        var r = G(e) ? ie : zs;
        return r(e, A(t, 3));
      }
      function DT(e, t, r, o) {
        return e == null ? [] : (G(t) || (t = t == null ? [] : [t]), r = o ? a : r, G(r) || (r = r == null ? [] : [r]), Ps(e, t, r));
      }
      var OT = ma(function(e, t, r) {
        e[r ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function CT(e, t, r) {
        var o = G(e) ? Ji : Vs, s = arguments.length < 3;
        return o(e, A(t, 4), r, s, Yt);
      }
      function GT(e, t, r) {
        var o = G(e) ? $h : Vs, s = arguments.length < 3;
        return o(e, A(t, 4), r, s, xs);
      }
      function zT(e, t) {
        var r = G(e) ? Ot : Qs;
        return r(e, ka(A(t, 3)));
      }
      function YT(e) {
        var t = G(e) ? Ws : xm;
        return t(e);
      }
      function IT(e, t, r) {
        (r ? ke(e, t, r) : t === a) ? t = 1 : t = z(t);
        var o = G(e) ? fm : Qm;
        return o(e, t);
      }
      function HT(e) {
        var t = G(e) ? hm : Dm;
        return t(e);
      }
      function PT(e) {
        if (e == null)
          return 0;
        if (Se(e))
          return ba(e) ? Jn(e) : e.length;
        var t = Ze(e);
        return t == it || t == ot ? e.size : Ii(e).length;
      }
      function jT(e, t, r) {
        var o = G(e) ? gi : Om;
        return r && ke(e, t, r) && (t = a), o(e, A(t, 3));
      }
      var XT = I(function(e, t) {
        if (e == null)
          return [];
        var r = t.length;
        return r > 1 && ke(e, t[0], t[1]) ? t = [] : r > 2 && ke(t[0], t[1], t[2]) && (t = [t[0]]), Ps(e, Ne(t, 1), []);
      }), Ja = yp || function() {
        return ve.Date.now();
      };
      function LT(e, t) {
        if (typeof t != "function")
          throw new qe(p);
        return e = z(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Cc(e, t, r) {
        return t = r ? a : t, t = e && t == null ? e.length : t, kt(e, fe, a, a, a, a, t);
      }
      function Gc(e, t) {
        var r;
        if (typeof t != "function")
          throw new qe(p);
        return e = z(e), function() {
          return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = a), r;
        };
      }
      var mo = I(function(e, t, r) {
        var o = C;
        if (r.length) {
          var s = Gt(r, Sn(mo));
          o |= F;
        }
        return kt(e, o, t, r, s);
      }), zc = I(function(e, t, r) {
        var o = C | B;
        if (r.length) {
          var s = Gt(r, Sn(zc));
          o |= F;
        }
        return kt(t, o, e, r, s);
      });
      function Yc(e, t, r) {
        t = r ? a : t;
        var o = kt(e, ne, a, a, a, a, a, t);
        return o.placeholder = Yc.placeholder, o;
      }
      function Ic(e, t, r) {
        t = r ? a : t;
        var o = kt(e, oe, a, a, a, a, a, t);
        return o.placeholder = Ic.placeholder, o;
      }
      function Hc(e, t, r) {
        var o, s, d, h, m, U, M = 0, w = !1, Z = !1, b = !0;
        if (typeof e != "function")
          throw new qe(p);
        t = nt(t) || 0, le(r) && (w = !!r.leading, Z = "maxWait" in r, d = Z ? pe(nt(r.maxWait) || 0, t) : d, b = "trailing" in r ? !!r.trailing : b);
        function W(ue) {
          var ut = o, Ft = s;
          return o = s = a, M = ue, h = e.apply(Ft, ut), h;
        }
        function x(ue) {
          return M = ue, m = Ur(P, t), w ? W(ue) : h;
        }
        function Y(ue) {
          var ut = ue - U, Ft = ue - M, uu = t - ut;
          return Z ? we(uu, d - Ft) : uu;
        }
        function Q(ue) {
          var ut = ue - U, Ft = ue - M;
          return U === a || ut >= t || ut < 0 || Z && Ft >= d;
        }
        function P() {
          var ue = Ja();
          if (Q(ue))
            return X(ue);
          m = Ur(P, Y(ue));
        }
        function X(ue) {
          return m = a, b && o ? W(ue) : (o = s = a, h);
        }
        function Ge() {
          m !== a && tc(m), M = 0, o = U = s = m = a;
        }
        function ye() {
          return m === a ? h : X(Ja());
        }
        function ze() {
          var ue = Ja(), ut = Q(ue);
          if (o = arguments, s = this, U = ue, ut) {
            if (m === a)
              return x(U);
            if (Z)
              return tc(m), m = Ur(P, t), W(U);
          }
          return m === a && (m = Ur(P, t)), h;
        }
        return ze.cancel = Ge, ze.flush = ye, ze;
      }
      var _T = I(function(e, t) {
        return As(e, 1, t);
      }), qT = I(function(e, t, r) {
        return As(e, nt(t) || 0, r);
      });
      function KT(e) {
        return kt(e, pt);
      }
      function ga(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new qe(p);
        var r = function() {
          var o = arguments, s = t ? t.apply(this, o) : o[0], d = r.cache;
          if (d.has(s))
            return d.get(s);
          var h = e.apply(this, o);
          return r.cache = d.set(s, h) || d, h;
        };
        return r.cache = new (ga.Cache || Jt)(), r;
      }
      ga.Cache = Jt;
      function ka(e) {
        if (typeof e != "function")
          throw new qe(p);
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
      function $T(e) {
        return Gc(2, e);
      }
      var eU = Cm(function(e, t) {
        t = t.length == 1 && G(t[0]) ? ie(t[0], De(A())) : ie(Ne(t, 1), De(A()));
        var r = t.length;
        return I(function(o) {
          for (var s = -1, d = we(o.length, r); ++s < d; )
            o[s] = t[s].call(this, o[s]);
          return Be(e, this, o);
        });
      }), Vo = I(function(e, t) {
        var r = Gt(t, Sn(Vo));
        return kt(e, F, a, t, r);
      }), Pc = I(function(e, t) {
        var r = Gt(t, Sn(Pc));
        return kt(e, Ue, a, t, r);
      }), tU = yt(function(e, t) {
        return kt(e, ee, a, a, a, t);
      });
      function nU(e, t) {
        if (typeof e != "function")
          throw new qe(p);
        return t = t === a ? t : z(t), I(e, t);
      }
      function rU(e, t) {
        if (typeof e != "function")
          throw new qe(p);
        return t = t == null ? 0 : pe(z(t), 0), I(function(r) {
          var o = r[t], s = Pt(r, 0, t);
          return o && Ct(s, o), Be(e, this, s);
        });
      }
      function aU(e, t, r) {
        var o = !0, s = !0;
        if (typeof e != "function")
          throw new qe(p);
        return le(r) && (o = "leading" in r ? !!r.leading : o, s = "trailing" in r ? !!r.trailing : s), Hc(e, t, {
          leading: o,
          maxWait: t,
          trailing: s
        });
      }
      function iU(e) {
        return Cc(e, 1);
      }
      function oU(e, t) {
        return Vo($i(t), e);
      }
      function lU() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return G(e) ? e : [e];
      }
      function sU(e) {
        return $e(e, H);
      }
      function cU(e, t) {
        return t = typeof t == "function" ? t : a, $e(e, H, t);
      }
      function uU(e) {
        return $e(e, y | H);
      }
      function dU(e, t) {
        return t = typeof t == "function" ? t : a, $e(e, y | H, t);
      }
      function fU(e, t) {
        return t == null || Ss(e, t, me(t));
      }
      function ct(e, t) {
        return e === t || e !== e && t !== t;
      }
      var hU = Ra(Gi), pU = Ra(function(e, t) {
        return e >= t;
      }), hn = Os(function() {
        return arguments;
      }()) ? Os : function(e) {
        return se(e) && K.call(e, "callee") && !Js.call(e, "callee");
      }, G = R.isArray, mU = os ? De(os) : wm;
      function Se(e) {
        return e != null && ya(e.length) && !Et(e);
      }
      function ce(e) {
        return se(e) && Se(e);
      }
      function VU(e) {
        return e === !0 || e === !1 || se(e) && ge(e) == Kn;
      }
      var jt = Ep || ko, TU = ls ? De(ls) : Zm;
      function UU(e) {
        return se(e) && e.nodeType === 1 && !Rr(e);
      }
      function RU(e) {
        if (e == null)
          return !0;
        if (Se(e) && (G(e) || typeof e == "string" || typeof e.splice == "function" || jt(e) || An(e) || hn(e)))
          return !e.length;
        var t = Ze(e);
        if (t == it || t == ot)
          return !e.size;
        if (Tr(e))
          return !Ii(e).length;
        for (var r in e)
          if (K.call(e, r))
            return !1;
        return !0;
      }
      function vU(e, t) {
        return pr(e, t);
      }
      function NU(e, t, r) {
        r = typeof r == "function" ? r : a;
        var o = r ? r(e, t) : a;
        return o === a ? pr(e, t, a, r) : !!o;
      }
      function To(e) {
        if (!se(e))
          return !1;
        var t = ge(e);
        return t == Cr || t == If || typeof e.message == "string" && typeof e.name == "string" && !Rr(e);
      }
      function MU(e) {
        return typeof e == "number" && ks(e);
      }
      function Et(e) {
        if (!le(e))
          return !1;
        var t = ge(e);
        return t == Gr || t == Al || t == Yf || t == Pf;
      }
      function jc(e) {
        return typeof e == "number" && e == z(e);
      }
      function ya(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Dt;
      }
      function le(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function se(e) {
        return e != null && typeof e == "object";
      }
      var Xc = ss ? De(ss) : gm;
      function wU(e, t) {
        return e === t || Yi(e, t, oo(t));
      }
      function ZU(e, t, r) {
        return r = typeof r == "function" ? r : a, Yi(e, t, oo(t), r);
      }
      function JU(e) {
        return Lc(e) && e != +e;
      }
      function gU(e) {
        if (cV(e))
          throw new D(f);
        return Cs(e);
      }
      function kU(e) {
        return e === null;
      }
      function yU(e) {
        return e == null;
      }
      function Lc(e) {
        return typeof e == "number" || se(e) && ge(e) == er;
      }
      function Rr(e) {
        if (!se(e) || ge(e) != wt)
          return !1;
        var t = ta(e);
        if (t === null)
          return !0;
        var r = K.call(t, "constructor") && t.constructor;
        return typeof r == "function" && r instanceof r && qr.call(r) == Zp;
      }
      var Uo = cs ? De(cs) : km;
      function bU(e) {
        return jc(e) && e >= -Dt && e <= Dt;
      }
      var _c = us ? De(us) : ym;
      function ba(e) {
        return typeof e == "string" || !G(e) && se(e) && ge(e) == nr;
      }
      function Ce(e) {
        return typeof e == "symbol" || se(e) && ge(e) == zr;
      }
      var An = ds ? De(ds) : bm;
      function EU(e) {
        return e === a;
      }
      function WU(e) {
        return se(e) && Ze(e) == rr;
      }
      function FU(e) {
        return se(e) && ge(e) == Xf;
      }
      var SU = Ra(Hi), AU = Ra(function(e, t) {
        return e <= t;
      });
      function qc(e) {
        if (!e)
          return [];
        if (Se(e))
          return ba(e) ? lt(e) : Fe(e);
        if (or && e[or])
          return fp(e[or]());
        var t = Ze(e), r = t == it ? Fi : t == ot ? Xr : xn;
        return r(e);
      }
      function Wt(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = nt(e), e === Xe || e === -Xe) {
          var t = e < 0 ? -1 : 1;
          return t * Of;
        }
        return e === e ? e : 0;
      }
      function z(e) {
        var t = Wt(e), r = t % 1;
        return t === t ? r ? t - r : t : 0;
      }
      function Kc(e) {
        return e ? cn(z(e), 0, Vt) : 0;
      }
      function nt(e) {
        if (typeof e == "number")
          return e;
        if (Ce(e))
          return Dr;
        if (le(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = le(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Ts(e);
        var r = mh.test(e);
        return r || Th.test(e) ? Lh(e.slice(2), r ? 2 : 8) : ph.test(e) ? Dr : +e;
      }
      function $c(e) {
        return Ut(e, Ae(e));
      }
      function xU(e) {
        return e ? cn(z(e), -Dt, Dt) : e === 0 ? e : 0;
      }
      function q(e) {
        return e == null ? "" : Oe(e);
      }
      var QU = Wn(function(e, t) {
        if (Tr(t) || Se(t)) {
          Ut(t, me(t), e);
          return;
        }
        for (var r in t)
          K.call(t, r) && dr(e, r, t[r]);
      }), eu = Wn(function(e, t) {
        Ut(t, Ae(t), e);
      }), Ea = Wn(function(e, t, r, o) {
        Ut(t, Ae(t), e, o);
      }), BU = Wn(function(e, t, r, o) {
        Ut(t, me(t), e, o);
      }), DU = yt(Di);
      function OU(e, t) {
        var r = En(e);
        return t == null ? r : Fs(r, t);
      }
      var CU = I(function(e, t) {
        e = te(e);
        var r = -1, o = t.length, s = o > 2 ? t[2] : a;
        for (s && ke(t[0], t[1], s) && (o = 1); ++r < o; )
          for (var d = t[r], h = Ae(d), m = -1, U = h.length; ++m < U; ) {
            var M = h[m], w = e[M];
            (w === a || ct(w, kn[M]) && !K.call(e, M)) && (e[M] = d[M]);
          }
        return e;
      }), GU = I(function(e) {
        return e.push(a, Tc), Be(tu, a, e);
      });
      function zU(e, t) {
        return hs(e, A(t, 3), Tt);
      }
      function YU(e, t) {
        return hs(e, A(t, 3), Ci);
      }
      function IU(e, t) {
        return e == null ? e : Oi(e, A(t, 3), Ae);
      }
      function HU(e, t) {
        return e == null ? e : Bs(e, A(t, 3), Ae);
      }
      function PU(e, t) {
        return e && Tt(e, A(t, 3));
      }
      function jU(e, t) {
        return e && Ci(e, A(t, 3));
      }
      function XU(e) {
        return e == null ? [] : da(e, me(e));
      }
      function LU(e) {
        return e == null ? [] : da(e, Ae(e));
      }
      function Ro(e, t, r) {
        var o = e == null ? a : un(e, t);
        return o === a ? r : o;
      }
      function _U(e, t) {
        return e != null && vc(e, t, Rm);
      }
      function vo(e, t) {
        return e != null && vc(e, t, vm);
      }
      var qU = fc(function(e, t, r) {
        t != null && typeof t.toString != "function" && (t = Kr.call(t)), e[t] = r;
      }, Mo(xe)), KU = fc(function(e, t, r) {
        t != null && typeof t.toString != "function" && (t = Kr.call(t)), K.call(e, t) ? e[t].push(r) : e[t] = [r];
      }, A), $U = I(hr);
      function me(e) {
        return Se(e) ? Es(e) : Ii(e);
      }
      function Ae(e) {
        return Se(e) ? Es(e, !0) : Em(e);
      }
      function e1(e, t) {
        var r = {};
        return t = A(t, 3), Tt(e, function(o, s, d) {
          gt(r, t(o, s, d), o);
        }), r;
      }
      function t1(e, t) {
        var r = {};
        return t = A(t, 3), Tt(e, function(o, s, d) {
          gt(r, s, t(o, s, d));
        }), r;
      }
      var n1 = Wn(function(e, t, r) {
        fa(e, t, r);
      }), tu = Wn(function(e, t, r, o) {
        fa(e, t, r, o);
      }), r1 = yt(function(e, t) {
        var r = {};
        if (e == null)
          return r;
        var o = !1;
        t = ie(t, function(d) {
          return d = Ht(d, e), o || (o = d.length > 1), d;
        }), Ut(e, ao(e), r), o && (r = $e(r, y | g | H, qm));
        for (var s = t.length; s--; )
          _i(r, t[s]);
        return r;
      });
      function a1(e, t) {
        return nu(e, ka(A(t)));
      }
      var i1 = yt(function(e, t) {
        return e == null ? {} : Fm(e, t);
      });
      function nu(e, t) {
        if (e == null)
          return {};
        var r = ie(ao(e), function(o) {
          return [o];
        });
        return t = A(t), js(e, r, function(o, s) {
          return t(o, s[0]);
        });
      }
      function o1(e, t, r) {
        t = Ht(t, e);
        var o = -1, s = t.length;
        for (s || (s = 1, e = a); ++o < s; ) {
          var d = e == null ? a : e[Rt(t[o])];
          d === a && (o = s, d = r), e = Et(d) ? d.call(e) : d;
        }
        return e;
      }
      function l1(e, t, r) {
        return e == null ? e : mr(e, t, r);
      }
      function s1(e, t, r, o) {
        return o = typeof o == "function" ? o : a, e == null ? e : mr(e, t, r, o);
      }
      var ru = mc(me), au = mc(Ae);
      function c1(e, t, r) {
        var o = G(e), s = o || jt(e) || An(e);
        if (t = A(t, 4), r == null) {
          var d = e && e.constructor;
          s ? r = o ? new d() : [] : le(e) ? r = Et(d) ? En(ta(e)) : {} : r = {};
        }
        return (s ? _e : Tt)(e, function(h, m, U) {
          return t(r, h, m, U);
        }), r;
      }
      function u1(e, t) {
        return e == null ? !0 : _i(e, t);
      }
      function d1(e, t, r) {
        return e == null ? e : Ks(e, t, $i(r));
      }
      function f1(e, t, r, o) {
        return o = typeof o == "function" ? o : a, e == null ? e : Ks(e, t, $i(r), o);
      }
      function xn(e) {
        return e == null ? [] : Wi(e, me(e));
      }
      function h1(e) {
        return e == null ? [] : Wi(e, Ae(e));
      }
      function p1(e, t, r) {
        return r === a && (r = t, t = a), r !== a && (r = nt(r), r = r === r ? r : 0), t !== a && (t = nt(t), t = t === t ? t : 0), cn(nt(e), t, r);
      }
      function m1(e, t, r) {
        return t = Wt(t), r === a ? (r = t, t = 0) : r = Wt(r), e = nt(e), Nm(e, t, r);
      }
      function V1(e, t, r) {
        if (r && typeof r != "boolean" && ke(e, t, r) && (t = r = a), r === a && (typeof t == "boolean" ? (r = t, t = a) : typeof e == "boolean" && (r = e, e = a)), e === a && t === a ? (e = 0, t = 1) : (e = Wt(e), t === a ? (t = e, e = 0) : t = Wt(t)), e > t) {
          var o = e;
          e = t, t = o;
        }
        if (r || e % 1 || t % 1) {
          var s = ys();
          return we(e + s * (t - e + Xh("1e-" + ((s + "").length - 1))), t);
        }
        return ji(e, t);
      }
      var T1 = Fn(function(e, t, r) {
        return t = t.toLowerCase(), e + (r ? iu(t) : t);
      });
      function iu(e) {
        return No(q(e).toLowerCase());
      }
      function ou(e) {
        return e = q(e), e && e.replace(Rh, lp).replace(Dh, "");
      }
      function U1(e, t, r) {
        e = q(e), t = Oe(t);
        var o = e.length;
        r = r === a ? o : cn(z(r), 0, o);
        var s = r;
        return r -= t.length, r >= 0 && e.slice(r, s) == t;
      }
      function R1(e) {
        return e = q(e), e && $f.test(e) ? e.replace(Bl, sp) : e;
      }
      function v1(e) {
        return e = q(e), e && ih.test(e) ? e.replace(mi, "\\$&") : e;
      }
      var N1 = Fn(function(e, t, r) {
        return e + (r ? "-" : "") + t.toLowerCase();
      }), M1 = Fn(function(e, t, r) {
        return e + (r ? " " : "") + t.toLowerCase();
      }), w1 = cc("toLowerCase");
      function Z1(e, t, r) {
        e = q(e), t = z(t);
        var o = t ? Jn(e) : 0;
        if (!t || o >= t)
          return e;
        var s = (t - o) / 2;
        return Ua(ia(s), r) + e + Ua(aa(s), r);
      }
      function J1(e, t, r) {
        e = q(e), t = z(t);
        var o = t ? Jn(e) : 0;
        return t && o < t ? e + Ua(t - o, r) : e;
      }
      function g1(e, t, r) {
        e = q(e), t = z(t);
        var o = t ? Jn(e) : 0;
        return t && o < t ? Ua(t - o, r) + e : e;
      }
      function k1(e, t, r) {
        return r || t == null ? t = 0 : t && (t = +t), Ap(q(e).replace(Vi, ""), t || 0);
      }
      function y1(e, t, r) {
        return (r ? ke(e, t, r) : t === a) ? t = 1 : t = z(t), Xi(q(e), t);
      }
      function b1() {
        var e = arguments, t = q(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var E1 = Fn(function(e, t, r) {
        return e + (r ? "_" : "") + t.toLowerCase();
      });
      function W1(e, t, r) {
        return r && typeof r != "number" && ke(e, t, r) && (t = r = a), r = r === a ? Vt : r >>> 0, r ? (e = q(e), e && (typeof t == "string" || t != null && !Uo(t)) && (t = Oe(t), !t && Zn(e)) ? Pt(lt(e), 0, r) : e.split(t, r)) : [];
      }
      var F1 = Fn(function(e, t, r) {
        return e + (r ? " " : "") + No(t);
      });
      function S1(e, t, r) {
        return e = q(e), r = r == null ? 0 : cn(z(r), 0, e.length), t = Oe(t), e.slice(r, r + t.length) == t;
      }
      function A1(e, t, r) {
        var o = u.templateSettings;
        r && ke(e, t, r) && (t = a), e = q(e), t = Ea({}, t, o, Vc);
        var s = Ea({}, t.imports, o.imports, Vc), d = me(s), h = Wi(s, d), m, U, M = 0, w = t.interpolate || Yr, Z = "__p += '", b = Si(
          (t.escape || Yr).source + "|" + w.source + "|" + (w === Dl ? hh : Yr).source + "|" + (t.evaluate || Yr).source + "|$",
          "g"
        ), W = "//# sourceURL=" + (K.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Yh + "]") + `
`;
        e.replace(b, function(Q, P, X, Ge, ye, ze) {
          return X || (X = Ge), Z += e.slice(M, ze).replace(vh, cp), P && (m = !0, Z += `' +
__e(` + P + `) +
'`), ye && (U = !0, Z += `';
` + ye + `;
__p += '`), X && (Z += `' +
((__t = (` + X + `)) == null ? '' : __t) +
'`), M = ze + Q.length, Q;
        }), Z += `';
`;
        var x = K.call(t, "variable") && t.variable;
        if (!x)
          Z = `with (obj) {
` + Z + `
}
`;
        else if (dh.test(x))
          throw new D(V);
        Z = (U ? Z.replace(Lf, "") : Z).replace(_f, "$1").replace(qf, "$1;"), Z = "function(" + (x || "obj") + `) {
` + (x ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (m ? ", __e = _.escape" : "") + (U ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + Z + `return __p
}`;
        var Y = su(function() {
          return L(d, W + "return " + Z).apply(a, h);
        });
        if (Y.source = Z, To(Y))
          throw Y;
        return Y;
      }
      function x1(e) {
        return q(e).toLowerCase();
      }
      function Q1(e) {
        return q(e).toUpperCase();
      }
      function B1(e, t, r) {
        if (e = q(e), e && (r || t === a))
          return Ts(e);
        if (!e || !(t = Oe(t)))
          return e;
        var o = lt(e), s = lt(t), d = Us(o, s), h = Rs(o, s) + 1;
        return Pt(o, d, h).join("");
      }
      function D1(e, t, r) {
        if (e = q(e), e && (r || t === a))
          return e.slice(0, Ns(e) + 1);
        if (!e || !(t = Oe(t)))
          return e;
        var o = lt(e), s = Rs(o, lt(t)) + 1;
        return Pt(o, 0, s).join("");
      }
      function O1(e, t, r) {
        if (e = q(e), e && (r || t === a))
          return e.replace(Vi, "");
        if (!e || !(t = Oe(t)))
          return e;
        var o = lt(e), s = Us(o, lt(t));
        return Pt(o, s).join("");
      }
      function C1(e, t) {
        var r = Mt, o = rn;
        if (le(t)) {
          var s = "separator" in t ? t.separator : s;
          r = "length" in t ? z(t.length) : r, o = "omission" in t ? Oe(t.omission) : o;
        }
        e = q(e);
        var d = e.length;
        if (Zn(e)) {
          var h = lt(e);
          d = h.length;
        }
        if (r >= d)
          return e;
        var m = r - Jn(o);
        if (m < 1)
          return o;
        var U = h ? Pt(h, 0, m).join("") : e.slice(0, m);
        if (s === a)
          return U + o;
        if (h && (m += U.length - m), Uo(s)) {
          if (e.slice(m).search(s)) {
            var M, w = U;
            for (s.global || (s = Si(s.source, q(Ol.exec(s)) + "g")), s.lastIndex = 0; M = s.exec(w); )
              var Z = M.index;
            U = U.slice(0, Z === a ? m : Z);
          }
        } else if (e.indexOf(Oe(s), m) != m) {
          var b = U.lastIndexOf(s);
          b > -1 && (U = U.slice(0, b));
        }
        return U + o;
      }
      function G1(e) {
        return e = q(e), e && Kf.test(e) ? e.replace(Ql, Vp) : e;
      }
      var z1 = Fn(function(e, t, r) {
        return e + (r ? " " : "") + t.toUpperCase();
      }), No = cc("toUpperCase");
      function lu(e, t, r) {
        return e = q(e), t = r ? a : t, t === a ? dp(e) ? Rp(e) : np(e) : e.match(t) || [];
      }
      var su = I(function(e, t) {
        try {
          return Be(e, a, t);
        } catch (r) {
          return To(r) ? r : new D(r);
        }
      }), Y1 = yt(function(e, t) {
        return _e(t, function(r) {
          r = Rt(r), gt(e, r, mo(e[r], e));
        }), e;
      });
      function I1(e) {
        var t = e == null ? 0 : e.length, r = A();
        return e = t ? ie(e, function(o) {
          if (typeof o[1] != "function")
            throw new qe(p);
          return [r(o[0]), o[1]];
        }) : [], I(function(o) {
          for (var s = -1; ++s < t; ) {
            var d = e[s];
            if (Be(d[0], this, o))
              return Be(d[1], this, o);
          }
        });
      }
      function H1(e) {
        return Vm($e(e, y));
      }
      function Mo(e) {
        return function() {
          return e;
        };
      }
      function P1(e, t) {
        return e == null || e !== e ? t : e;
      }
      var j1 = dc(), X1 = dc(!0);
      function xe(e) {
        return e;
      }
      function wo(e) {
        return Gs(typeof e == "function" ? e : $e(e, y));
      }
      function L1(e) {
        return Ys($e(e, y));
      }
      function _1(e, t) {
        return Is(e, $e(t, y));
      }
      var q1 = I(function(e, t) {
        return function(r) {
          return hr(r, e, t);
        };
      }), K1 = I(function(e, t) {
        return function(r) {
          return hr(e, r, t);
        };
      });
      function Zo(e, t, r) {
        var o = me(t), s = da(t, o);
        r == null && !(le(t) && (s.length || !o.length)) && (r = t, t = e, e = this, s = da(t, me(t)));
        var d = !(le(r) && "chain" in r) || !!r.chain, h = Et(e);
        return _e(s, function(m) {
          var U = t[m];
          e[m] = U, h && (e.prototype[m] = function() {
            var M = this.__chain__;
            if (d || M) {
              var w = e(this.__wrapped__), Z = w.__actions__ = Fe(this.__actions__);
              return Z.push({ func: U, args: arguments, thisArg: e }), w.__chain__ = M, w;
            }
            return U.apply(e, Ct([this.value()], arguments));
          });
        }), e;
      }
      function $1() {
        return ve._ === this && (ve._ = Jp), this;
      }
      function Jo() {
      }
      function e0(e) {
        return e = z(e), I(function(t) {
          return Hs(t, e);
        });
      }
      var t0 = to(ie), n0 = to(fs), r0 = to(gi);
      function cu(e) {
        return so(e) ? ki(Rt(e)) : Sm(e);
      }
      function a0(e) {
        return function(t) {
          return e == null ? a : un(e, t);
        };
      }
      var i0 = hc(), o0 = hc(!0);
      function go() {
        return [];
      }
      function ko() {
        return !1;
      }
      function l0() {
        return {};
      }
      function s0() {
        return "";
      }
      function c0() {
        return !0;
      }
      function u0(e, t) {
        if (e = z(e), e < 1 || e > Dt)
          return [];
        var r = Vt, o = we(e, Vt);
        t = A(t), e -= Vt;
        for (var s = Ei(o, t); ++r < e; )
          t(r);
        return s;
      }
      function d0(e) {
        return G(e) ? ie(e, Rt) : Ce(e) ? [e] : Fe(bc(q(e)));
      }
      function f0(e) {
        var t = ++wp;
        return q(e) + t;
      }
      var h0 = Ta(function(e, t) {
        return e + t;
      }, 0), p0 = no("ceil"), m0 = Ta(function(e, t) {
        return e / t;
      }, 1), V0 = no("floor");
      function T0(e) {
        return e && e.length ? ua(e, xe, Gi) : a;
      }
      function U0(e, t) {
        return e && e.length ? ua(e, A(t, 2), Gi) : a;
      }
      function R0(e) {
        return ms(e, xe);
      }
      function v0(e, t) {
        return ms(e, A(t, 2));
      }
      function N0(e) {
        return e && e.length ? ua(e, xe, Hi) : a;
      }
      function M0(e, t) {
        return e && e.length ? ua(e, A(t, 2), Hi) : a;
      }
      var w0 = Ta(function(e, t) {
        return e * t;
      }, 1), Z0 = no("round"), J0 = Ta(function(e, t) {
        return e - t;
      }, 0);
      function g0(e) {
        return e && e.length ? bi(e, xe) : 0;
      }
      function k0(e, t) {
        return e && e.length ? bi(e, A(t, 2)) : 0;
      }
      return u.after = LT, u.ary = Cc, u.assign = QU, u.assignIn = eu, u.assignInWith = Ea, u.assignWith = BU, u.at = DU, u.before = Gc, u.bind = mo, u.bindAll = Y1, u.bindKey = zc, u.castArray = lU, u.chain = Bc, u.chunk = VV, u.compact = TV, u.concat = UV, u.cond = I1, u.conforms = H1, u.constant = Mo, u.countBy = gT, u.create = OU, u.curry = Yc, u.curryRight = Ic, u.debounce = Hc, u.defaults = CU, u.defaultsDeep = GU, u.defer = _T, u.delay = qT, u.difference = RV, u.differenceBy = vV, u.differenceWith = NV, u.drop = MV, u.dropRight = wV, u.dropRightWhile = ZV, u.dropWhile = JV, u.fill = gV, u.filter = yT, u.flatMap = WT, u.flatMapDeep = FT, u.flatMapDepth = ST, u.flatten = Sc, u.flattenDeep = kV, u.flattenDepth = yV, u.flip = KT, u.flow = j1, u.flowRight = X1, u.fromPairs = bV, u.functions = XU, u.functionsIn = LU, u.groupBy = AT, u.initial = WV, u.intersection = FV, u.intersectionBy = SV, u.intersectionWith = AV, u.invert = qU, u.invertBy = KU, u.invokeMap = QT, u.iteratee = wo, u.keyBy = BT, u.keys = me, u.keysIn = Ae, u.map = Za, u.mapKeys = e1, u.mapValues = t1, u.matches = L1, u.matchesProperty = _1, u.memoize = ga, u.merge = n1, u.mergeWith = tu, u.method = q1, u.methodOf = K1, u.mixin = Zo, u.negate = ka, u.nthArg = e0, u.omit = r1, u.omitBy = a1, u.once = $T, u.orderBy = DT, u.over = t0, u.overArgs = eU, u.overEvery = n0, u.overSome = r0, u.partial = Vo, u.partialRight = Pc, u.partition = OT, u.pick = i1, u.pickBy = nu, u.property = cu, u.propertyOf = a0, u.pull = DV, u.pullAll = xc, u.pullAllBy = OV, u.pullAllWith = CV, u.pullAt = GV, u.range = i0, u.rangeRight = o0, u.rearg = tU, u.reject = zT, u.remove = zV, u.rest = nU, u.reverse = ho, u.sampleSize = IT, u.set = l1, u.setWith = s1, u.shuffle = HT, u.slice = YV, u.sortBy = XT, u.sortedUniq = _V, u.sortedUniqBy = qV, u.split = W1, u.spread = rU, u.tail = KV, u.take = $V, u.takeRight = eT, u.takeRightWhile = tT, u.takeWhile = nT, u.tap = TT, u.throttle = aU, u.thru = wa, u.toArray = qc, u.toPairs = ru, u.toPairsIn = au, u.toPath = d0, u.toPlainObject = $c, u.transform = c1, u.unary = iU, u.union = rT, u.unionBy = aT, u.unionWith = iT, u.uniq = oT, u.uniqBy = lT, u.uniqWith = sT, u.unset = u1, u.unzip = po, u.unzipWith = Qc, u.update = d1, u.updateWith = f1, u.values = xn, u.valuesIn = h1, u.without = cT, u.words = lu, u.wrap = oU, u.xor = uT, u.xorBy = dT, u.xorWith = fT, u.zip = hT, u.zipObject = pT, u.zipObjectDeep = mT, u.zipWith = VT, u.entries = ru, u.entriesIn = au, u.extend = eu, u.extendWith = Ea, Zo(u, u), u.add = h0, u.attempt = su, u.camelCase = T1, u.capitalize = iu, u.ceil = p0, u.clamp = p1, u.clone = sU, u.cloneDeep = uU, u.cloneDeepWith = dU, u.cloneWith = cU, u.conformsTo = fU, u.deburr = ou, u.defaultTo = P1, u.divide = m0, u.endsWith = U1, u.eq = ct, u.escape = R1, u.escapeRegExp = v1, u.every = kT, u.find = bT, u.findIndex = Wc, u.findKey = zU, u.findLast = ET, u.findLastIndex = Fc, u.findLastKey = YU, u.floor = V0, u.forEach = Dc, u.forEachRight = Oc, u.forIn = IU, u.forInRight = HU, u.forOwn = PU, u.forOwnRight = jU, u.get = Ro, u.gt = hU, u.gte = pU, u.has = _U, u.hasIn = vo, u.head = Ac, u.identity = xe, u.includes = xT, u.indexOf = EV, u.inRange = m1, u.invoke = $U, u.isArguments = hn, u.isArray = G, u.isArrayBuffer = mU, u.isArrayLike = Se, u.isArrayLikeObject = ce, u.isBoolean = VU, u.isBuffer = jt, u.isDate = TU, u.isElement = UU, u.isEmpty = RU, u.isEqual = vU, u.isEqualWith = NU, u.isError = To, u.isFinite = MU, u.isFunction = Et, u.isInteger = jc, u.isLength = ya, u.isMap = Xc, u.isMatch = wU, u.isMatchWith = ZU, u.isNaN = JU, u.isNative = gU, u.isNil = yU, u.isNull = kU, u.isNumber = Lc, u.isObject = le, u.isObjectLike = se, u.isPlainObject = Rr, u.isRegExp = Uo, u.isSafeInteger = bU, u.isSet = _c, u.isString = ba, u.isSymbol = Ce, u.isTypedArray = An, u.isUndefined = EU, u.isWeakMap = WU, u.isWeakSet = FU, u.join = xV, u.kebabCase = N1, u.last = tt, u.lastIndexOf = QV, u.lowerCase = M1, u.lowerFirst = w1, u.lt = SU, u.lte = AU, u.max = T0, u.maxBy = U0, u.mean = R0, u.meanBy = v0, u.min = N0, u.minBy = M0, u.stubArray = go, u.stubFalse = ko, u.stubObject = l0, u.stubString = s0, u.stubTrue = c0, u.multiply = w0, u.nth = BV, u.noConflict = $1, u.noop = Jo, u.now = Ja, u.pad = Z1, u.padEnd = J1, u.padStart = g1, u.parseInt = k1, u.random = V1, u.reduce = CT, u.reduceRight = GT, u.repeat = y1, u.replace = b1, u.result = o1, u.round = Z0, u.runInContext = T, u.sample = YT, u.size = PT, u.snakeCase = E1, u.some = jT, u.sortedIndex = IV, u.sortedIndexBy = HV, u.sortedIndexOf = PV, u.sortedLastIndex = jV, u.sortedLastIndexBy = XV, u.sortedLastIndexOf = LV, u.startCase = F1, u.startsWith = S1, u.subtract = J0, u.sum = g0, u.sumBy = k0, u.template = A1, u.times = u0, u.toFinite = Wt, u.toInteger = z, u.toLength = Kc, u.toLower = x1, u.toNumber = nt, u.toSafeInteger = xU, u.toString = q, u.toUpper = Q1, u.trim = B1, u.trimEnd = D1, u.trimStart = O1, u.truncate = C1, u.unescape = G1, u.uniqueId = f0, u.upperCase = z1, u.upperFirst = No, u.each = Dc, u.eachRight = Oc, u.first = Ac, Zo(u, function() {
        var e = {};
        return Tt(u, function(t, r) {
          K.call(u.prototype, r) || (e[r] = t);
        }), e;
      }(), { chain: !1 }), u.VERSION = l, _e(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        u[e].placeholder = u;
      }), _e(["drop", "take"], function(e, t) {
        j.prototype[e] = function(r) {
          r = r === a ? 1 : pe(z(r), 0);
          var o = this.__filtered__ && !t ? new j(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = we(r, o.__takeCount__) : o.__views__.push({
            size: we(r, Vt),
            type: e + (o.__dir__ < 0 ? "Right" : "")
          }), o;
        }, j.prototype[e + "Right"] = function(r) {
          return this.reverse()[e](r).reverse();
        };
      }), _e(["filter", "map", "takeWhile"], function(e, t) {
        var r = t + 1, o = r == je || r == We;
        j.prototype[e] = function(s) {
          var d = this.clone();
          return d.__iteratees__.push({
            iteratee: A(s, 3),
            type: r
          }), d.__filtered__ = d.__filtered__ || o, d;
        };
      }), _e(["head", "last"], function(e, t) {
        var r = "take" + (t ? "Right" : "");
        j.prototype[e] = function() {
          return this[r](1).value()[0];
        };
      }), _e(["initial", "tail"], function(e, t) {
        var r = "drop" + (t ? "" : "Right");
        j.prototype[e] = function() {
          return this.__filtered__ ? new j(this) : this[r](1);
        };
      }), j.prototype.compact = function() {
        return this.filter(xe);
      }, j.prototype.find = function(e) {
        return this.filter(e).head();
      }, j.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, j.prototype.invokeMap = I(function(e, t) {
        return typeof e == "function" ? new j(this) : this.map(function(r) {
          return hr(r, e, t);
        });
      }), j.prototype.reject = function(e) {
        return this.filter(ka(A(e)));
      }, j.prototype.slice = function(e, t) {
        e = z(e);
        var r = this;
        return r.__filtered__ && (e > 0 || t < 0) ? new j(r) : (e < 0 ? r = r.takeRight(-e) : e && (r = r.drop(e)), t !== a && (t = z(t), r = t < 0 ? r.dropRight(-t) : r.take(t - e)), r);
      }, j.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, j.prototype.toArray = function() {
        return this.take(Vt);
      }, Tt(j.prototype, function(e, t) {
        var r = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), s = u[o ? "take" + (t == "last" ? "Right" : "") : t], d = o || /^find/.test(t);
        !s || (u.prototype[t] = function() {
          var h = this.__wrapped__, m = o ? [1] : arguments, U = h instanceof j, M = m[0], w = U || G(h), Z = function(P) {
            var X = s.apply(u, Ct([P], m));
            return o && b ? X[0] : X;
          };
          w && r && typeof M == "function" && M.length != 1 && (U = w = !1);
          var b = this.__chain__, W = !!this.__actions__.length, x = d && !b, Y = U && !W;
          if (!d && w) {
            h = Y ? h : new j(this);
            var Q = e.apply(h, m);
            return Q.__actions__.push({ func: wa, args: [Z], thisArg: a }), new Ke(Q, b);
          }
          return x && Y ? e.apply(this, m) : (Q = this.thru(Z), x ? o ? Q.value()[0] : Q.value() : Q);
        });
      }), _e(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = Lr[e], r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
        u.prototype[e] = function() {
          var s = arguments;
          if (o && !this.__chain__) {
            var d = this.value();
            return t.apply(G(d) ? d : [], s);
          }
          return this[r](function(h) {
            return t.apply(G(h) ? h : [], s);
          });
        };
      }), Tt(j.prototype, function(e, t) {
        var r = u[t];
        if (r) {
          var o = r.name + "";
          K.call(bn, o) || (bn[o] = []), bn[o].push({ name: t, func: r });
        }
      }), bn[Va(a, B).name] = [{
        name: "wrapper",
        func: a
      }], j.prototype.clone = Gp, j.prototype.reverse = zp, j.prototype.value = Yp, u.prototype.at = UT, u.prototype.chain = RT, u.prototype.commit = vT, u.prototype.next = NT, u.prototype.plant = wT, u.prototype.reverse = ZT, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = JT, u.prototype.first = u.prototype.head, or && (u.prototype[or] = MT), u;
    }, gn = vp();
    an ? ((an.exports = gn)._ = gn, Mi._ = gn) : ve._ = gn;
  }).call(vr);
})(Vn, Vn.exports);
const rv = window.Pinia.defineStore, rf = rv("situationsStore", {
  state: () => ({
    situations: [],
    alarms: {}
  }),
  actions: {
    async getSituations() {
      const n = await LR(), i = await nv();
      if (n) {
        this.alarms = Vn.exports.mapKeys(n.alarm, (l) => l.id);
        const a = n.alarm.filter(
          (l) => l.relatedAlarms && l.relatedAlarms.length > 0
        );
        a.forEach((l) => {
          if (l.relatedAlarms.forEach((c) => {
            var f;
            c.count = (f = this.alarms[c.id]) == null ? void 0 : f.count;
          }), i.find((c) => c.id == l.id)) {
            const c = Vn.exports.first(
              i.filter((f) => f.id == l.id)
            );
            l.status = c == null ? void 0 : c.status;
          }
        }), this.situations = a.filter((l) => l.status !== "REJECTED");
      }
    }
  }
}), av = window.Vue.defineComponent, iv = window.Vue.unref, ov = window.Vue.renderList, lv = window.Vue.Fragment, Yo = window.Vue.openBlock, Io = window.Vue.createElementBlock, sv = window.Vue.toDisplayString, cv = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const uv = { class: "alarms-list" }, dv = /* @__PURE__ */ av({
  __name: "AlarmsCountBySeverity",
  props: {
    relatedAlarms: null,
    size: null
  },
  setup(n) {
    const i = n;
    return (a, l) => (Yo(), Io("div", uv, [
      (Yo(!0), Io(lv, null, ov(iv(Vn.exports.groupBy)(i == null ? void 0 : i.relatedAlarms, "severity"), (c, f) => (Yo(), Io("div", {
        class: cv(["alarm-count", [`${f.toString().toLowerCase()}-color`, i.size]]),
        key: f
      }, sv(c.length), 3))), 128))
    ]));
  }
});
const af = /* @__PURE__ */ Pe(dv, [["__scopeId", "data-v-b8c8b147"]]), fv = window.Vue.openBlock, hv = window.Vue.createElementBlock, pv = window.Vue.createElementVNode;
var mv = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const Vv = {}, Tv = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Uv = /* @__PURE__ */ pv("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), Rv = [
  Uv
];
function vv(n, i) {
  return fv(), hv("svg", Tv, Rv);
}
var of = /* @__PURE__ */ mv(Vv, [["render", vv]]);
var Nv = Object.defineProperty, Au = Object.getOwnPropertySymbols, Mv = Object.prototype.hasOwnProperty, wv = Object.prototype.propertyIsEnumerable, xu = (n, i, a) => i in n ? Nv(n, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[i] = a, Qu = (n, i) => {
  for (var a in i || (i = {}))
    Mv.call(i, a) && xu(n, a, i[a]);
  if (Au)
    for (var a of Au(i))
      wv.call(i, a) && xu(n, a, i[a]);
  return n;
};
const Zv = window.Vue.defineComponent, Jv = window.Vue.toRaw, Ho = window.Vue.h;
var gv = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const kv = {
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
}, yv = Zv({
  props: kv,
  render() {
    const n = this.$attrs, i = n.class ? n.class.split(" ").reduce((c, f) => (c[f] = !0, c), {}) : {}, a = {};
    i["feather-icon"] = !0, this.flex && (i["feather-icon-flex"] = !0), this.title ? (a["aria-label"] = this.title, a["aria-hidden"] = "false") : a["aria-hidden"] = "true", a.focusable = "false", a.role = "img";
    let l = Jv(this.icon);
    return this.$slots.default ? Ho("span", { class: "feather-icon-container" }, [
      Ho(this.$slots.default()[0], Qu({
        class: i
      }, a))
    ]) : Ho(l, Qu({
      class: i
    }, a));
  }
});
var ft = /* @__PURE__ */ gv(yv, [["__scopeId", "data-v-52cbf270"]]);
const bv = window.Vue.defineComponent, Bu = window.Vue.normalizeClass, Wa = window.Vue.createElementVNode, Ev = window.Vue.toDisplayString, Du = window.Vue.unref, Ou = window.Vue.createVNode, Cu = window.Vue.openBlock, Gu = window.Vue.createElementBlock, Wv = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Fv = { class: "content" }, Sv = { class: "title-row" }, Av = { class: "title" }, xv = {
  key: 0,
  class: "accepted"
}, Qv = /* @__PURE__ */ bv({
  __name: "SituationCard",
  props: {
    alarmInfo: null,
    selected: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(n, { emit: i }) {
    const a = n, l = () => {
      var c;
      i("situation-selected", (c = a.alarmInfo) == null ? void 0 : c.id);
    };
    return (c, f) => {
      var p, V, v, k;
      return Cu(), Gu("div", {
        onClick: l,
        class: Bu(["card", { selected: a.selected }])
      }, [
        Wa("div", {
          class: Bu(["severity-line", [`${(V = (p = a.alarmInfo) == null ? void 0 : p.severity) == null ? void 0 : V.toLowerCase()}-bg dark`]])
        }, null, 2),
        Wa("div", Fv, [
          Wa("div", Sv, [
            Wa("div", Av, "[ " + Ev((v = a.alarmInfo) == null ? void 0 : v.id) + " ]", 1),
            a.alarmInfo.status == "ACCEPTED" ? (Cu(), Gu("div", xv, [
              Ou(Du(ft), {
                icon: Du(of),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Wv("", !0)
          ]),
          Ou(af, {
            relatedAlarms: (k = a.alarmInfo) == null ? void 0 : k.relatedAlarms,
            size: "normal"
          }, null, 8, ["relatedAlarms"])
        ])
      ], 2);
    };
  }
});
const Bv = /* @__PURE__ */ Pe(Qv, [["__scopeId", "data-v-b7f860e7"]]);
const Fa = window.Vue.ref, Dv = window.Vue.inject, Ov = window.Vue.computed, Cv = window.Vue.onMounted, Gv = {
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
}, zv = (n) => {
  const i = Fa(!1), a = Fa(), l = Fa(n.controls), c = Fa(n.id), f = () => {
    a.value && a.value.focus();
  }, p = Dv("registerTab");
  Cv(() => {
    if (a.value && p) {
      const v = a.value.parentElement, k = v && v.parentElement ? v.parentElement : void 0, J = Array.from(k ? k.children : []).filter((g) => g.querySelectorAll("[role=tab]").length), y = v ? J.indexOf(v) : -1;
      p({
        el: a.value,
        focus: f,
        disabled: n.disabled,
        selected: i,
        id: c,
        controls: l,
        index: y
      });
    }
  });
  const V = Ov(() => ({
    role: "tab",
    ref: "tab",
    tabindex: i.value ? 0 : -1,
    id: c.value,
    "aria-selected": i.value,
    "aria-controls": l.value,
    "aria-disabled": n.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: i,
    attrs: V,
    tab: a
  };
};
const Yv = function(n, i) {
  return window ? window.setTimeout(n, i) : setTimeout(n, i);
}, Iv = function(n) {
  return window ? window.clearTimeout(n) : clearTimeout(n);
};
var Hv = Object.defineProperty, Pv = Object.defineProperties, jv = Object.getOwnPropertyDescriptors, zu = Object.getOwnPropertySymbols, Xv = Object.prototype.hasOwnProperty, Lv = Object.prototype.propertyIsEnumerable, Yu = (n, i, a) => i in n ? Hv(n, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[i] = a, Iu = (n, i) => {
  for (var a in i || (i = {}))
    Xv.call(i, a) && Yu(n, a, i[a]);
  if (zu)
    for (var a of zu(i))
      Lv.call(i, a) && Yu(n, a, i[a]);
  return n;
}, _v = (n, i) => Pv(n, jv(i));
const qv = window.Vue.defineComponent, Kv = window.Vue.h;
var $v = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const eN = {
  center: {
    type: Boolean,
    default: !1
  }
}, tN = qv({
  props: eN,
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
        const { clientWidth: i, clientHeight: a } = this.parent, l = Math.round(Math.max(i, a));
        let c = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const f = this.parent.getBoundingClientRect(), p = n.pageY, V = n.pageX;
          c = {
            top: `${p - f.top - l / 2 - document.documentElement.scrollTop}px`,
            left: `${V - f.left - l / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = _v(Iu({}, c), {
          height: `${l}px`,
          width: `${l}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Iv(this.failsafe), this.failsafe = Yv(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return Kv("div", {
        style: Iu({}, this.styles),
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
var jn = /* @__PURE__ */ $v(tN, [["__scopeId", "data-v-18e2a5db"]]);
const Ie = function(n) {
  n = n || "feather";
  const i = Math.floor(Math.random() * 1e9);
  return [n.replace(/\s+/g, "-"), Date.now(), i].join("-");
}, Qt = {
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
}, Hu = window.Vue.ref, nN = window.Vue.toRef, rN = window.Vue.watch, Pu = window.Vue.provide, aN = {
  prop: "modelValue",
  event: "update:modelValue"
}, iN = {
  "update:modelValue": (n) => !0
}, oN = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, lN = (n, i) => {
  const a = nN(n, "modelValue"), l = Hu(n.modelValue), c = Hu([]);
  rN(a, (S) => {
    v(S);
  });
  const f = (S) => {
    S.preventDefault(), c.value.some((O, C) => O.tab && O.tab.el.contains(S.target) ? (V(C), v(C), !0) : !1);
  }, p = (S) => {
    if (((ee) => ee.shiftKey || ee.ctrlKey || ee.metaKey || ee.altKey)(S))
      return;
    const C = S.keyCode, B = (ee) => {
      ee.stopPropagation(), ee.preventDefault();
    }, _ = c.value.filter((ee) => ee.tab && !ee.tab.disabled), ne = c.value.findIndex((ee) => ee.tab && ee.tab.el.contains(document.activeElement));
    let oe = ne !== -1 ? ne : l.value;
    const F = [Qt.RIGHT], Ue = [Qt.LEFT], fe = [Qt.ENTER, Qt.SPACE];
    n.vertical && (F.push(Qt.DOWN), Ue.push(Qt.UP)), F.indexOf(C) > -1 ? (oe++, oe >= _.length && (oe = 0), B(S), V(c.value.indexOf(_[oe]))) : Ue.indexOf(C) > -1 && (oe--, oe < 0 && (oe = _.length - 1), B(S), V(c.value.indexOf(_[oe]))), fe.indexOf(C) > -1 && v(oe);
  }, V = (S) => {
    c.value.forEach(function(O, C) {
      S === C && O.tab && O.tab.focus();
    });
  }, v = (S) => {
    const O = c.value[S];
    !O || O.tab && O.tab.disabled || (c.value.forEach((C, B) => {
      C.tab && (C.tab.selected = S === B), C.panel && (C.panel.selected = S === B);
    }), l.value = S, i.emit("update:modelValue", S));
  };
  Pu("registerTab", (S) => {
    const O = S.index;
    O > -1 && (c.value[O] = { ...c.value[O], tab: S }, c.value = [...c.value], y());
  }), Pu("registerPanel", (S) => {
    const O = S.index;
    O > -1 && (c.value[O] = {
      ...c.value[O],
      panel: S
    }, c.value = [...c.value], y());
  });
  const y = () => {
    c.value.forEach(({ tab: S, panel: O }, C) => {
      if (O && S) {
        const B = S.id || Ie("tab"), _ = S.controls || Ie("panel");
        S.controls = _, S.id = B, O.tab = B, O.id = _;
      }
      C === l.value && (O && (O.selected = !0), S && (S.selected = !0));
    });
  };
  return {
    listeners: {
      click: f,
      keydown: p
    },
    attrs: {
      role: "tablist"
    },
    selected: l,
    pairs: c
  };
}, Sa = window.Vue.ref, sN = window.Vue.inject, cN = window.Vue.computed, uN = window.Vue.onMounted, dN = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, fN = (n) => {
  const i = Sa(!1), a = Sa(), l = Sa(n.tab), c = Sa(n.id), f = sN("registerPanel");
  uN(() => {
    if (f) {
      const V = a.value, v = V && V.parentElement ? V.parentElement : void 0, k = V ? Array.from(v ? v.children : []).indexOf(V) : -1;
      f({
        selected: i,
        id: c,
        tab: l,
        el: a.value,
        index: k
      });
    }
  });
  const p = cN(() => ({
    role: "tabpanel",
    id: c.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": i.value,
    "aria-labelledby": l.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: i,
    attrs: p,
    panel: a
  };
}, Zl = window.Vue.defineComponent, hN = window.Vue.resolveComponent, Jl = window.Vue.openBlock, gl = window.Vue.createElementBlock, br = window.Vue.createElementVNode, lf = window.Vue.mergeProps, Pa = window.Vue.renderSlot, pN = window.Vue.createVNode, mN = window.Vue.normalizeStyle, VN = window.Vue.toHandlers, TN = window.Vue.withDirectives, UN = window.Vue.normalizeProps, RN = window.Vue.guardReactiveProps, vN = window.Vue.vShow;
var kl = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const NN = Gv, MN = Zl({
  props: NN,
  setup(n) {
    return zv(n);
  },
  components: {
    FeatherRipple: jn
  }
}), wN = { role: "presentation" }, ZN = { class: "tab-text" };
function JN(n, i, a, l, c, f) {
  const p = hN("FeatherRipple");
  return Jl(), gl("li", wN, [
    br("button", lf(n.attrs, {
      class: ["tab hover focus", { disabled: n.disabled, selected: n.selected }]
    }), [
      br("span", ZN, [
        Pa(n.$slots, "default", {}, void 0, !0)
      ]),
      pN(p)
    ], 16)
  ]);
}
var gN = /* @__PURE__ */ kl(MN, [["render", JN], ["__scopeId", "data-v-e6bb52b6"]]);
const kN = oN, yN = iN, bN = Zl({
  model: aN,
  emits: yN,
  props: kN,
  setup(n, i) {
    return lN(n, i);
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
        const n = this.$el.getBoundingClientRect(), i = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), a = i.left - n.left, l = i.height - 2;
        this.width = `${i.width}px`, this.transform = `translateX(${a}px) translateY(${l}px)`;
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
}), EN = { class: "feather-tab-container" }, WN = { class: "tab-panels" };
function FN(n, i, a, l, c, f) {
  return Jl(), gl("div", EN, [
    br("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: mN({
        transform: n.transform,
        "transition-duration": n.duration,
        width: n.width
      })
    }, null, 4),
    br("ul", lf(n.attrs, VN(n.listeners)), [
      Pa(n.$slots, "tabs", {}, void 0, !0)
    ], 16),
    br("div", WN, [
      Pa(n.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var SN = /* @__PURE__ */ kl(bN, [["render", FN], ["__scopeId", "data-v-27adffb9"]]);
const AN = dN, xN = Zl({
  props: AN,
  setup(n) {
    return fN(n);
  }
});
function QN(n, i, a, l, c, f) {
  return TN((Jl(), gl("div", UN(RN(n.attrs)), [
    Pa(n.$slots, "default")
  ], 16)), [
    [vN, n.selected]
  ]);
}
var BN = /* @__PURE__ */ kl(xN, [["render", QN]]);
const DN = window.Vue.defineComponent, ON = window.Vue.toDisplayString, CN = window.Vue.normalizeClass, GN = window.Vue.openBlock, zN = window.Vue.createElementBlock, YN = window.Vue.createCommentVNode, IN = /* @__PURE__ */ DN({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const i = n;
    return (a, l) => i != null && i.severity ? (GN(), zN("span", {
      key: 0,
      class: CN(["severity-status", [`${i.severity.toLowerCase()}-color`]])
    }, ON(i.severity), 3)) : YN("", !0);
  }
});
const sf = /* @__PURE__ */ Pe(IN, [["__scopeId", "data-v-83c2cdce"]]);
function Tn(n) {
  if (n === null || n === !0 || n === !1)
    return NaN;
  var i = Number(n);
  return isNaN(i) ? i : i < 0 ? Math.ceil(i) : Math.floor(i);
}
function Ee(n, i) {
  if (i.length < n)
    throw new TypeError(n + " argument" + (n > 1 ? "s" : "") + " required, but only " + i.length + " present");
}
function Nt(n) {
  Ee(1, arguments);
  var i = Object.prototype.toString.call(n);
  return n instanceof Date || typeof n == "object" && i === "[object Date]" ? new Date(n.getTime()) : typeof n == "number" || i === "[object Number]" ? new Date(n) : ((typeof n == "string" || i === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function HN(n, i) {
  Ee(2, arguments);
  var a = Nt(n).getTime(), l = Tn(i);
  return new Date(a + l);
}
var PN = {};
function ri() {
  return PN;
}
function jN(n) {
  var i = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds()));
  return i.setUTCFullYear(n.getFullYear()), n.getTime() - i.getTime();
}
function XN(n) {
  return Ee(1, arguments), n instanceof Date || typeof n == "object" && Object.prototype.toString.call(n) === "[object Date]";
}
function LN(n) {
  if (Ee(1, arguments), !XN(n) && typeof n != "number")
    return !1;
  var i = Nt(n);
  return !isNaN(Number(i));
}
function _N(n, i) {
  Ee(2, arguments);
  var a = Tn(i);
  return HN(n, -a);
}
var qN = 864e5;
function KN(n) {
  Ee(1, arguments);
  var i = Nt(n), a = i.getTime();
  i.setUTCMonth(0, 1), i.setUTCHours(0, 0, 0, 0);
  var l = i.getTime(), c = a - l;
  return Math.floor(c / qN) + 1;
}
function ja(n) {
  Ee(1, arguments);
  var i = 1, a = Nt(n), l = a.getUTCDay(), c = (l < i ? 7 : 0) + l - i;
  return a.setUTCDate(a.getUTCDate() - c), a.setUTCHours(0, 0, 0, 0), a;
}
function cf(n) {
  Ee(1, arguments);
  var i = Nt(n), a = i.getUTCFullYear(), l = new Date(0);
  l.setUTCFullYear(a + 1, 0, 4), l.setUTCHours(0, 0, 0, 0);
  var c = ja(l), f = new Date(0);
  f.setUTCFullYear(a, 0, 4), f.setUTCHours(0, 0, 0, 0);
  var p = ja(f);
  return i.getTime() >= c.getTime() ? a + 1 : i.getTime() >= p.getTime() ? a : a - 1;
}
function $N(n) {
  Ee(1, arguments);
  var i = cf(n), a = new Date(0);
  a.setUTCFullYear(i, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var l = ja(a);
  return l;
}
var eM = 6048e5;
function tM(n) {
  Ee(1, arguments);
  var i = Nt(n), a = ja(i).getTime() - $N(i).getTime();
  return Math.round(a / eM) + 1;
}
function Xa(n, i) {
  var a, l, c, f, p, V, v, k;
  Ee(1, arguments);
  var J = ri(), y = Tn((a = (l = (c = (f = i == null ? void 0 : i.weekStartsOn) !== null && f !== void 0 ? f : i == null || (p = i.locale) === null || p === void 0 || (V = p.options) === null || V === void 0 ? void 0 : V.weekStartsOn) !== null && c !== void 0 ? c : J.weekStartsOn) !== null && l !== void 0 ? l : (v = J.locale) === null || v === void 0 || (k = v.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && a !== void 0 ? a : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = Nt(n), H = g.getUTCDay(), S = (H < y ? 7 : 0) + H - y;
  return g.setUTCDate(g.getUTCDate() - S), g.setUTCHours(0, 0, 0, 0), g;
}
function uf(n, i) {
  var a, l, c, f, p, V, v, k;
  Ee(1, arguments);
  var J = Nt(n), y = J.getUTCFullYear(), g = ri(), H = Tn((a = (l = (c = (f = i == null ? void 0 : i.firstWeekContainsDate) !== null && f !== void 0 ? f : i == null || (p = i.locale) === null || p === void 0 || (V = p.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && c !== void 0 ? c : g.firstWeekContainsDate) !== null && l !== void 0 ? l : (v = g.locale) === null || v === void 0 || (k = v.options) === null || k === void 0 ? void 0 : k.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
  if (!(H >= 1 && H <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var S = new Date(0);
  S.setUTCFullYear(y + 1, 0, H), S.setUTCHours(0, 0, 0, 0);
  var O = Xa(S, i), C = new Date(0);
  C.setUTCFullYear(y, 0, H), C.setUTCHours(0, 0, 0, 0);
  var B = Xa(C, i);
  return J.getTime() >= O.getTime() ? y + 1 : J.getTime() >= B.getTime() ? y : y - 1;
}
function nM(n, i) {
  var a, l, c, f, p, V, v, k;
  Ee(1, arguments);
  var J = ri(), y = Tn((a = (l = (c = (f = i == null ? void 0 : i.firstWeekContainsDate) !== null && f !== void 0 ? f : i == null || (p = i.locale) === null || p === void 0 || (V = p.options) === null || V === void 0 ? void 0 : V.firstWeekContainsDate) !== null && c !== void 0 ? c : J.firstWeekContainsDate) !== null && l !== void 0 ? l : (v = J.locale) === null || v === void 0 || (k = v.options) === null || k === void 0 ? void 0 : k.firstWeekContainsDate) !== null && a !== void 0 ? a : 1), g = uf(n, i), H = new Date(0);
  H.setUTCFullYear(g, 0, y), H.setUTCHours(0, 0, 0, 0);
  var S = Xa(H, i);
  return S;
}
var rM = 6048e5;
function aM(n, i) {
  Ee(1, arguments);
  var a = Nt(n), l = Xa(a, i).getTime() - nM(a, i).getTime();
  return Math.round(l / rM) + 1;
}
function $(n, i) {
  for (var a = n < 0 ? "-" : "", l = Math.abs(n).toString(); l.length < i; )
    l = "0" + l;
  return a + l;
}
var iM = {
  y: function(n, i) {
    var a = n.getUTCFullYear(), l = a > 0 ? a : 1 - a;
    return $(i === "yy" ? l % 100 : l, i.length);
  },
  M: function(n, i) {
    var a = n.getUTCMonth();
    return i === "M" ? String(a + 1) : $(a + 1, 2);
  },
  d: function(n, i) {
    return $(n.getUTCDate(), i.length);
  },
  a: function(n, i) {
    var a = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (i) {
      case "a":
      case "aa":
        return a.toUpperCase();
      case "aaa":
        return a;
      case "aaaaa":
        return a[0];
      case "aaaa":
      default:
        return a === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(n, i) {
    return $(n.getUTCHours() % 12 || 12, i.length);
  },
  H: function(n, i) {
    return $(n.getUTCHours(), i.length);
  },
  m: function(n, i) {
    return $(n.getUTCMinutes(), i.length);
  },
  s: function(n, i) {
    return $(n.getUTCSeconds(), i.length);
  },
  S: function(n, i) {
    var a = i.length, l = n.getUTCMilliseconds(), c = Math.floor(l * Math.pow(10, a - 3));
    return $(c, i.length);
  }
};
const Xt = iM;
var Dn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, oM = {
  G: function(n, i, a) {
    var l = n.getUTCFullYear() > 0 ? 1 : 0;
    switch (i) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(l, {
          width: "abbreviated"
        });
      case "GGGGG":
        return a.era(l, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return a.era(l, {
          width: "wide"
        });
    }
  },
  y: function(n, i, a) {
    if (i === "yo") {
      var l = n.getUTCFullYear(), c = l > 0 ? l : 1 - l;
      return a.ordinalNumber(c, {
        unit: "year"
      });
    }
    return Xt.y(n, i);
  },
  Y: function(n, i, a, l) {
    var c = uf(n, l), f = c > 0 ? c : 1 - c;
    if (i === "YY") {
      var p = f % 100;
      return $(p, 2);
    }
    return i === "Yo" ? a.ordinalNumber(f, {
      unit: "year"
    }) : $(f, i.length);
  },
  R: function(n, i) {
    var a = cf(n);
    return $(a, i.length);
  },
  u: function(n, i) {
    var a = n.getUTCFullYear();
    return $(a, i.length);
  },
  Q: function(n, i, a) {
    var l = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (i) {
      case "Q":
        return String(l);
      case "QQ":
        return $(l, 2);
      case "Qo":
        return a.ordinalNumber(l, {
          unit: "quarter"
        });
      case "QQQ":
        return a.quarter(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(l, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(n, i, a) {
    var l = Math.ceil((n.getUTCMonth() + 1) / 3);
    switch (i) {
      case "q":
        return String(l);
      case "qq":
        return $(l, 2);
      case "qo":
        return a.ordinalNumber(l, {
          unit: "quarter"
        });
      case "qqq":
        return a.quarter(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(l, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(n, i, a) {
    var l = n.getUTCMonth();
    switch (i) {
      case "M":
      case "MM":
        return Xt.M(n, i);
      case "Mo":
        return a.ordinalNumber(l + 1, {
          unit: "month"
        });
      case "MMM":
        return a.month(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return a.month(l, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(n, i, a) {
    var l = n.getUTCMonth();
    switch (i) {
      case "L":
        return String(l + 1);
      case "LL":
        return $(l + 1, 2);
      case "Lo":
        return a.ordinalNumber(l + 1, {
          unit: "month"
        });
      case "LLL":
        return a.month(l, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return a.month(l, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(l, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(n, i, a, l) {
    var c = aM(n, l);
    return i === "wo" ? a.ordinalNumber(c, {
      unit: "week"
    }) : $(c, i.length);
  },
  I: function(n, i, a) {
    var l = tM(n);
    return i === "Io" ? a.ordinalNumber(l, {
      unit: "week"
    }) : $(l, i.length);
  },
  d: function(n, i, a) {
    return i === "do" ? a.ordinalNumber(n.getUTCDate(), {
      unit: "date"
    }) : Xt.d(n, i);
  },
  D: function(n, i, a) {
    var l = KN(n);
    return i === "Do" ? a.ordinalNumber(l, {
      unit: "dayOfYear"
    }) : $(l, i.length);
  },
  E: function(n, i, a) {
    var l = n.getUTCDay();
    switch (i) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return a.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(l, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return a.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(n, i, a, l) {
    var c = n.getUTCDay(), f = (c - l.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "e":
        return String(f);
      case "ee":
        return $(f, 2);
      case "eo":
        return a.ordinalNumber(f, {
          unit: "day"
        });
      case "eee":
        return a.day(c, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return a.day(c, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(c, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return a.day(c, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(n, i, a, l) {
    var c = n.getUTCDay(), f = (c - l.weekStartsOn + 8) % 7 || 7;
    switch (i) {
      case "c":
        return String(f);
      case "cc":
        return $(f, i.length);
      case "co":
        return a.ordinalNumber(f, {
          unit: "day"
        });
      case "ccc":
        return a.day(c, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return a.day(c, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(c, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return a.day(c, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(n, i, a) {
    var l = n.getUTCDay(), c = l === 0 ? 7 : l;
    switch (i) {
      case "i":
        return String(c);
      case "ii":
        return $(c, i.length);
      case "io":
        return a.ordinalNumber(c, {
          unit: "day"
        });
      case "iii":
        return a.day(l, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return a.day(l, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return a.day(l, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return a.day(l, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(n, i, a) {
    var l = n.getUTCHours(), c = l / 12 >= 1 ? "pm" : "am";
    switch (i) {
      case "a":
      case "aa":
        return a.dayPeriod(c, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return a.dayPeriod(c, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return a.dayPeriod(c, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(c, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(n, i, a) {
    var l = n.getUTCHours(), c;
    switch (l === 12 ? c = Dn.noon : l === 0 ? c = Dn.midnight : c = l / 12 >= 1 ? "pm" : "am", i) {
      case "b":
      case "bb":
        return a.dayPeriod(c, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return a.dayPeriod(c, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return a.dayPeriod(c, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(c, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(n, i, a) {
    var l = n.getUTCHours(), c;
    switch (l >= 17 ? c = Dn.evening : l >= 12 ? c = Dn.afternoon : l >= 4 ? c = Dn.morning : c = Dn.night, i) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(c, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(c, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(c, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(n, i, a) {
    if (i === "ho") {
      var l = n.getUTCHours() % 12;
      return l === 0 && (l = 12), a.ordinalNumber(l, {
        unit: "hour"
      });
    }
    return Xt.h(n, i);
  },
  H: function(n, i, a) {
    return i === "Ho" ? a.ordinalNumber(n.getUTCHours(), {
      unit: "hour"
    }) : Xt.H(n, i);
  },
  K: function(n, i, a) {
    var l = n.getUTCHours() % 12;
    return i === "Ko" ? a.ordinalNumber(l, {
      unit: "hour"
    }) : $(l, i.length);
  },
  k: function(n, i, a) {
    var l = n.getUTCHours();
    return l === 0 && (l = 24), i === "ko" ? a.ordinalNumber(l, {
      unit: "hour"
    }) : $(l, i.length);
  },
  m: function(n, i, a) {
    return i === "mo" ? a.ordinalNumber(n.getUTCMinutes(), {
      unit: "minute"
    }) : Xt.m(n, i);
  },
  s: function(n, i, a) {
    return i === "so" ? a.ordinalNumber(n.getUTCSeconds(), {
      unit: "second"
    }) : Xt.s(n, i);
  },
  S: function(n, i) {
    return Xt.S(n, i);
  },
  X: function(n, i, a, l) {
    var c = l._originalDate || n, f = c.getTimezoneOffset();
    if (f === 0)
      return "Z";
    switch (i) {
      case "X":
        return Xu(f);
      case "XXXX":
      case "XX":
        return pn(f);
      case "XXXXX":
      case "XXX":
      default:
        return pn(f, ":");
    }
  },
  x: function(n, i, a, l) {
    var c = l._originalDate || n, f = c.getTimezoneOffset();
    switch (i) {
      case "x":
        return Xu(f);
      case "xxxx":
      case "xx":
        return pn(f);
      case "xxxxx":
      case "xxx":
      default:
        return pn(f, ":");
    }
  },
  O: function(n, i, a, l) {
    var c = l._originalDate || n, f = c.getTimezoneOffset();
    switch (i) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ju(f, ":");
      case "OOOO":
      default:
        return "GMT" + pn(f, ":");
    }
  },
  z: function(n, i, a, l) {
    var c = l._originalDate || n, f = c.getTimezoneOffset();
    switch (i) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ju(f, ":");
      case "zzzz":
      default:
        return "GMT" + pn(f, ":");
    }
  },
  t: function(n, i, a, l) {
    var c = l._originalDate || n, f = Math.floor(c.getTime() / 1e3);
    return $(f, i.length);
  },
  T: function(n, i, a, l) {
    var c = l._originalDate || n, f = c.getTime();
    return $(f, i.length);
  }
};
function ju(n, i) {
  var a = n > 0 ? "-" : "+", l = Math.abs(n), c = Math.floor(l / 60), f = l % 60;
  if (f === 0)
    return a + String(c);
  var p = i || "";
  return a + String(c) + p + $(f, 2);
}
function Xu(n, i) {
  if (n % 60 === 0) {
    var a = n > 0 ? "-" : "+";
    return a + $(Math.abs(n) / 60, 2);
  }
  return pn(n, i);
}
function pn(n, i) {
  var a = i || "", l = n > 0 ? "-" : "+", c = Math.abs(n), f = $(Math.floor(c / 60), 2), p = $(c % 60, 2);
  return l + f + a + p;
}
const lM = oM;
var Lu = function(n, i) {
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
}, df = function(n, i) {
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
}, sM = function(n, i) {
  var a = n.match(/(P+)(p+)?/) || [], l = a[1], c = a[2];
  if (!c)
    return Lu(n, i);
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
  return f.replace("{{date}}", Lu(l, i)).replace("{{time}}", df(c, i));
}, cM = {
  p: df,
  P: sM
};
const uM = cM;
var dM = ["D", "DD"], fM = ["YY", "YYYY"];
function hM(n) {
  return dM.indexOf(n) !== -1;
}
function pM(n) {
  return fM.indexOf(n) !== -1;
}
function _u(n, i, a) {
  if (n === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(i, "`) for formatting years to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(i, "`) for formatting years to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(i, "`) for formatting days of the month to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (n === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(i, "`) for formatting days of the month to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
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
}, VM = function(n, i, a) {
  var l, c = mM[n];
  return typeof c == "string" ? l = c : i === 1 ? l = c.one : l = c.other.replace("{{count}}", i.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + l : l + " ago" : l;
};
const TM = VM;
function Po(n) {
  return function() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = i.width ? String(i.width) : n.defaultWidth, l = n.formats[a] || n.formats[n.defaultWidth];
    return l;
  };
}
var UM = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, RM = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, vM = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, NM = {
  date: Po({
    formats: UM,
    defaultWidth: "full"
  }),
  time: Po({
    formats: RM,
    defaultWidth: "full"
  }),
  dateTime: Po({
    formats: vM,
    defaultWidth: "full"
  })
};
const MM = NM;
var wM = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ZM = function(n, i, a, l) {
  return wM[n];
};
const JM = ZM;
function Nr(n) {
  return function(i, a) {
    var l = a != null && a.context ? String(a.context) : "standalone", c;
    if (l === "formatting" && n.formattingValues) {
      var f = n.defaultFormattingWidth || n.defaultWidth, p = a != null && a.width ? String(a.width) : f;
      c = n.formattingValues[p] || n.formattingValues[f];
    } else {
      var V = n.defaultWidth, v = a != null && a.width ? String(a.width) : n.defaultWidth;
      c = n.values[v] || n.values[V];
    }
    var k = n.argumentCallback ? n.argumentCallback(i) : i;
    return c[k];
  };
}
var gM = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, kM = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, yM = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, bM = {
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
}, WM = {
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
}, FM = function(n, i) {
  var a = Number(n), l = a % 100;
  if (l > 20 || l < 10)
    switch (l % 10) {
      case 1:
        return a + "st";
      case 2:
        return a + "nd";
      case 3:
        return a + "rd";
    }
  return a + "th";
}, SM = {
  ordinalNumber: FM,
  era: Nr({
    values: gM,
    defaultWidth: "wide"
  }),
  quarter: Nr({
    values: kM,
    defaultWidth: "wide",
    argumentCallback: function(n) {
      return n - 1;
    }
  }),
  month: Nr({
    values: yM,
    defaultWidth: "wide"
  }),
  day: Nr({
    values: bM,
    defaultWidth: "wide"
  }),
  dayPeriod: Nr({
    values: EM,
    defaultWidth: "wide",
    formattingValues: WM,
    defaultFormattingWidth: "wide"
  })
};
const AM = SM;
function Mr(n) {
  return function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = a.width, c = l && n.matchPatterns[l] || n.matchPatterns[n.defaultMatchWidth], f = i.match(c);
    if (!f)
      return null;
    var p = f[0], V = l && n.parsePatterns[l] || n.parsePatterns[n.defaultParseWidth], v = Array.isArray(V) ? QM(V, function(y) {
      return y.test(p);
    }) : xM(V, function(y) {
      return y.test(p);
    }), k;
    k = n.valueCallback ? n.valueCallback(v) : v, k = a.valueCallback ? a.valueCallback(k) : k;
    var J = i.slice(p.length);
    return {
      value: k,
      rest: J
    };
  };
}
function xM(n, i) {
  for (var a in n)
    if (n.hasOwnProperty(a) && i(n[a]))
      return a;
}
function QM(n, i) {
  for (var a = 0; a < n.length; a++)
    if (i(n[a]))
      return a;
}
function BM(n) {
  return function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = i.match(n.matchPattern);
    if (!l)
      return null;
    var c = l[0], f = i.match(n.parsePattern);
    if (!f)
      return null;
    var p = n.valueCallback ? n.valueCallback(f[0]) : f[0];
    p = a.valueCallback ? a.valueCallback(p) : p;
    var V = i.slice(c.length);
    return {
      value: p,
      rest: V
    };
  };
}
var DM = /^(\d+)(th|st|nd|rd)?/i, OM = /\d+/i, CM = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, GM = {
  any: [/^b/i, /^(a|c)/i]
}, zM = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, YM = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, IM = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, HM = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, PM = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, jM = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, XM = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, LM = {
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
}, _M = {
  ordinalNumber: BM({
    matchPattern: DM,
    parsePattern: OM,
    valueCallback: function(n) {
      return parseInt(n, 10);
    }
  }),
  era: Mr({
    matchPatterns: CM,
    defaultMatchWidth: "wide",
    parsePatterns: GM,
    defaultParseWidth: "any"
  }),
  quarter: Mr({
    matchPatterns: zM,
    defaultMatchWidth: "wide",
    parsePatterns: YM,
    defaultParseWidth: "any",
    valueCallback: function(n) {
      return n + 1;
    }
  }),
  month: Mr({
    matchPatterns: IM,
    defaultMatchWidth: "wide",
    parsePatterns: HM,
    defaultParseWidth: "any"
  }),
  day: Mr({
    matchPatterns: PM,
    defaultMatchWidth: "wide",
    parsePatterns: jM,
    defaultParseWidth: "any"
  }),
  dayPeriod: Mr({
    matchPatterns: XM,
    defaultMatchWidth: "any",
    parsePatterns: LM,
    defaultParseWidth: "any"
  })
};
const qM = _M;
var KM = {
  code: "en-US",
  formatDistance: TM,
  formatLong: MM,
  formatRelative: JM,
  localize: AM,
  match: qM,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const $M = KM;
var ew = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, tw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, nw = /^'([^]*?)'?$/, rw = /''/g, aw = /[a-zA-Z]/;
function sl(n, i, a) {
  var l, c, f, p, V, v, k, J, y, g, H, S, O, C, B, _, ne, oe;
  Ee(2, arguments);
  var F = String(i), Ue = ri(), fe = (l = (c = a == null ? void 0 : a.locale) !== null && c !== void 0 ? c : Ue.locale) !== null && l !== void 0 ? l : $M, ee = Tn((f = (p = (V = (v = a == null ? void 0 : a.firstWeekContainsDate) !== null && v !== void 0 ? v : a == null || (k = a.locale) === null || k === void 0 || (J = k.options) === null || J === void 0 ? void 0 : J.firstWeekContainsDate) !== null && V !== void 0 ? V : Ue.firstWeekContainsDate) !== null && p !== void 0 ? p : (y = Ue.locale) === null || y === void 0 || (g = y.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && f !== void 0 ? f : 1);
  if (!(ee >= 1 && ee <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var pt = Tn((H = (S = (O = (C = a == null ? void 0 : a.weekStartsOn) !== null && C !== void 0 ? C : a == null || (B = a.locale) === null || B === void 0 || (_ = B.options) === null || _ === void 0 ? void 0 : _.weekStartsOn) !== null && O !== void 0 ? O : Ue.weekStartsOn) !== null && S !== void 0 ? S : (ne = Ue.locale) === null || ne === void 0 || (oe = ne.options) === null || oe === void 0 ? void 0 : oe.weekStartsOn) !== null && H !== void 0 ? H : 0);
  if (!(pt >= 0 && pt <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!fe.localize)
    throw new RangeError("locale must contain localize property");
  if (!fe.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var Mt = Nt(n);
  if (!LN(Mt))
    throw new RangeError("Invalid time value");
  var rn = jN(Mt), Je = _N(Mt, rn), mt = {
    firstWeekContainsDate: ee,
    weekStartsOn: pt,
    locale: fe,
    _originalDate: Mt
  }, je = F.match(tw).map(function(Re) {
    var We = Re[0];
    if (We === "p" || We === "P") {
      var Xe = uM[We];
      return Xe(Re, fe.formatLong);
    }
    return Re;
  }).join("").match(ew).map(function(Re) {
    if (Re === "''")
      return "'";
    var We = Re[0];
    if (We === "'")
      return iw(Re);
    var Xe = lM[We];
    if (Xe)
      return !(a != null && a.useAdditionalWeekYearTokens) && pM(Re) && _u(Re, i, String(n)), !(a != null && a.useAdditionalDayOfYearTokens) && hM(Re) && _u(Re, i, String(n)), Xe(Je, Re, fe.localize, mt);
    if (We.match(aw))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + We + "`");
    return Re;
  }).join("");
  return je;
}
function iw(n) {
  var i = n.match(nw);
  return i ? i[1].replace(rw, "'") : n;
}
const ow = window.Vue.defineComponent, qu = window.Vue.toDisplayString, Ku = window.Vue.createElementVNode, lw = window.Vue.unref, sw = window.Vue.openBlock, cw = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const uw = { class: "box" }, dw = { class: "label" }, fw = { class: "date" }, hw = /* @__PURE__ */ ow({
  __name: "DateBox",
  props: {
    label: null,
    date: null
  },
  setup(n) {
    const i = n;
    return (a, l) => (sw(), cw("div", uw, [
      Ku("div", dw, qu(i.label), 1),
      Ku("div", fw, qu(lw(sl)(new Date(i.date), "d/M HH:mm:ss")), 1)
    ]));
  }
});
const $u = /* @__PURE__ */ Pe(hw, [["__scopeId", "data-v-150a6a2c"]]), pw = window.Vue.openBlock, mw = window.Vue.createElementBlock, Vw = window.Vue.createElementVNode;
var Tw = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const Uw = {}, Rw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vw = /* @__PURE__ */ Vw("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Nw = [
  vw
];
function Mw(n, i) {
  return pw(), mw("svg", Rw, Nw);
}
var ww = /* @__PURE__ */ Tw(Uw, [["render", Mw]]);
const Zw = window.Vue.computed, Jw = (n, i) => {
  const a = {};
  return Object.keys(i).forEach((l) => {
    a[`${l}Label`] = Zw(() => n.value[l] ? n.value[l] : i[l]);
  }), a;
}, gw = window.Vue.openBlock, kw = window.Vue.createElementBlock, yw = window.Vue.createElementVNode;
var bw = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const Ew = {}, Ww = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Fw = /* @__PURE__ */ yw("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Sw = [
  Fw
];
function Aw(n, i) {
  return gw(), kw("svg", Ww, Sw);
}
var ff = /* @__PURE__ */ bw(Ew, [["render", Aw]]);
const ed = window.Vue.computed, xw = (n, i, a) => {
  const l = ed(() => i.value.filter((f) => !f.disabled)), c = ed(() => n.value ? l.value.indexOf(n.value) : -1);
  return {
    selectPrevious() {
      n.value && n.value.disabled || (c.value === 0 ? a(l.value[l.value.length - 1]) : a(l.value[c.value - 1]));
    },
    selectNext() {
      n.value && n.value.disabled || (c.value === l.value.length - 1 ? a(l.value[0]) : a(l.value[c.value + 1]));
    }
  };
};
const Qw = window.Vue.openBlock, Bw = window.Vue.createElementBlock, yl = window.Vue.createElementVNode;
var Dw = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const Ow = {}, Cw = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Gw = /* @__PURE__ */ yl("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), zw = /* @__PURE__ */ yl("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Yw = /* @__PURE__ */ yl("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Iw = [
  Gw,
  zw,
  Yw
];
function Hw(n, i) {
  return Qw(), Bw("svg", Cw, Iw);
}
var Pw = /* @__PURE__ */ Dw(Ow, [["render", Hw]]), jw = Object.defineProperty, Xw = Object.defineProperties, Lw = Object.getOwnPropertyDescriptors, td = Object.getOwnPropertySymbols, _w = Object.prototype.hasOwnProperty, qw = Object.prototype.propertyIsEnumerable, nd = (n, i, a) => i in n ? jw(n, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[i] = a, hf = (n, i) => {
  for (var a in i || (i = {}))
    _w.call(i, a) && nd(n, a, i[a]);
  if (td)
    for (var a of td(i))
      qw.call(i, a) && nd(n, a, i[a]);
  return n;
}, pf = (n, i) => Xw(n, Lw(i));
const qn = window.Vue.defineComponent, bl = window.Vue.resolveComponent, mn = window.Vue.openBlock, yr = window.Vue.createElementBlock, Kw = window.Vue.createVNode, mf = window.Vue.createBlock, $w = window.Vue.withModifiers, Xn = window.Vue.inject, Sr = window.Vue.computed;
window.Vue.normalizeClass;
window.Vue.createElementVNode;
const rd = window.Vue.toDisplayString, eZ = window.Vue.renderSlot, jo = window.Vue.createCommentVNode, tZ = window.Vue.withDirectives, nZ = window.Vue.vShow, cl = window.Vue.ref, ad = window.Vue.toRef, id = window.Vue.nextTick, ul = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Vf = window.Vue.provide, od = window.Vue.isRef, rZ = window.Vue.onBeforeUnmount;
var ai = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const aZ = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, iZ = qn({
  props: aZ,
  components: {
    FeatherIcon: ft
  }
}), oZ = ["title"];
function lZ(n, i, a, l, c, f) {
  const p = bl("FeatherIcon");
  return mn(), yr("a", {
    title: n.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    Kw(p, { icon: n.icon }, null, 8, ["icon"])
  ], 8, oZ);
}
var sZ = /* @__PURE__ */ ai(iZ, [["render", lZ], ["__scopeId", "data-v-4265058e"]]);
const cZ = qn({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return ff;
    }
  },
  components: {
    ActionIcon: sZ
  }
});
function uZ(n, i, a, l, c, f) {
  const p = bl("ActionIcon");
  return mn(), mf(p, {
    onClick: i[0] || (i[0] = $w((V) => n.$emit("clear"), ["stop", "prevent"])),
    title: n.clear,
    icon: n.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var dZ = /* @__PURE__ */ ai(cZ, [["render", uZ]]);
const fZ = qn({
  computed: {
    errorIcon() {
      return Pw;
    }
  },
  components: {
    FeatherIcon: ft
  }
});
function hZ(n, i, a, l, c, f) {
  const p = bl("FeatherIcon");
  return mn(), mf(p, {
    icon: n.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var pZ = /* @__PURE__ */ ai(fZ, [["render", hZ], ["__scopeId", "data-v-0b8faef3"]]);
const mZ = {
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
}, VZ = {
  clear: () => !0,
  "wrapper-click": (n) => !0
};
qn({
  emits: VZ,
  props: mZ,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const n = Xn("wrapperOptions", {}), i = Xn("validationErrorMessage", !1), a = Sr(() => n.error ? n.error : i && i.value ? i.value : !1);
    return pf(hf({}, n), { error: a });
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
      const i = { childList: !0, subtree: !0 }, a = () => {
        const l = this.$el.querySelector(".prefix");
        this.prefixWidth = l ? l.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(a), this.prefixObserver.observe(n, i), a();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: dZ,
    ErrorIcon: pZ
  }
});
const TZ = qn({
  setup() {
    const n = Xn("subTextOptions", {}), i = Xn("validationErrorMessage", !1), a = Sr(() => n.error ? n.error : i && i.value ? i.value : "");
    return pf(hf({}, n), { error: a });
  }
}), UZ = { class: "feather-input-sub-text" }, RZ = {
  key: 0,
  class: "feather-input-spacer"
}, vZ = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, NZ = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function MZ(n, i, a, l, c, f) {
  return tZ((mn(), yr("div", UZ, [
    !n.hint && !n.error.length ? (mn(), yr("div", RZ, "\xA0")) : jo("", !0),
    n.hint && !n.error.length ? (mn(), yr("div", vZ, rd(n.hint), 1)) : jo("", !0),
    n.error.length > 0 ? (mn(), yr("div", NZ, rd(n.error), 1)) : jo("", !0),
    eZ(n.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [nZ, !n.inline || n.hint || n.error.length]
  ]);
}
var Tf = /* @__PURE__ */ ai(TZ, [["render", MZ], ["__scopeId", "data-v-8e0ac99e"]]);
const wZ = {
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
qn({
  props: wZ,
  setup(n) {
    const i = Xn("featherFormErrors", cl([])), a = ad(n, "errorList"), l = Sr(() => {
      var J;
      return (J = a.value) != null && J.length ? a.value : i.value;
    }), c = ad(n, "generalError"), f = (J) => {
      document.getElementById(J).focus();
    }, p = (J) => J.replace(/ \*$/, ""), V = cl(), v = (J) => `${p(J.label)} - ${J.message}`, k = Sr(() => (l.value.length && id(() => V.value.focus()), n.headingText(l.value)));
    return ul(c, (J) => {
      J.length && id(() => V.value.focus());
    }), {
      errors: l,
      errorsHeading: k,
      heading: V,
      focusElement: f,
      mainError: c,
      getFullMessage: v
    };
  }
});
const Uf = (n, i, a, l, c) => {
  const f = Xn("featherForm", !1);
  if (l && f && n.value) {
    const p = cl("");
    Vf("validationErrorMessage", p);
    const V = () => {
      if (c && od(c) && c.value)
        return p.value = c.value, {
          success: !1,
          message: c.value,
          inputId: n.value,
          label: a
        };
      try {
        return l.validateSync(i.value), p.value = "", { success: !0 };
      } catch (J) {
        const y = J;
        return p.value = y.errors[0], {
          success: !1,
          message: y.errors[0],
          inputId: n.value,
          label: a
        };
      }
    }, k = {
      clear: () => {
        p.value = "";
      },
      validate: V
    };
    return c && od(c) && ul(c, () => {
      f.runValidation();
    }), ul(n, (J, y) => {
      J && f && f.register(J, k), y && f && f.deregister(y);
    }, { immediate: !0 }), rZ(() => {
      f.deregister(n.value, !0);
    }), { validate: V };
  }
  return { validate: () => !0 };
}, Rf = (n) => ({
  inherittedAttrs: Sr(() => ({
    class: n.class,
    "data-ref-id": n["data-ref-id"]
  }))
}), vf = {
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
}, Nf = (n) => {
  Vf("subTextOptions", n);
}, Aa = window.Vue.ref, ZZ = window.Vue.watch, JZ = window.Vue.watchEffect, ld = window.Vue.computed, Xo = window.Vue.provide, Mf = (n, i, a, l, c) => {
  const f = Aa([]), p = Aa(), V = Aa(), v = Aa();
  JZ(() => {
    if (!f.value.length)
      return;
    const B = f.value.map((_) => _.value);
    if (n.value !== void 0 && n.value !== null && (p.value = f.value[B.indexOf(n.value)]), !p.value && f.value.length) {
      let _ = f.value.filter((ne) => !ne.disabled);
      _ = _.length ? _ : f.value, V.value = _[0], V.value.first = !0;
    }
  }), ZZ(p, (B, _) => {
    _ && (_.checked = !1), B && (B.checked = !0);
  });
  const k = (B) => {
    B && B.disabled || (V.value && (V.value.first = !1), p.value !== B && (i("update:modelValue", B.value), p.value = B, B.focus()));
  }, J = ld(() => p.value || V.value), y = xw(J, f, k), g = ld(() => Ie("feather-radio-group"));
  v.value = g.value;
  const { validate: H } = Uf(v, n, a, l, c);
  return Xo("register", (B) => {
    f.value = [...f.value, B], v.value === g.value && (v.value = B.id);
  }), Xo("select", k), Xo("blur", (B) => {
    i("blur", B);
  }), {
    keydown: (B) => {
      switch (B.keyCode) {
        case 13:
        case 32:
          p.value ? k(p.value) : V.value && k(V.value);
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
      p.value && p.value.focus();
    },
    validate: H,
    firstElementId: v,
    groupId: g
  };
};
var gZ = Object.defineProperty, kZ = Object.defineProperties, yZ = Object.getOwnPropertyDescriptors, sd = Object.getOwnPropertySymbols, bZ = Object.prototype.hasOwnProperty, EZ = Object.prototype.propertyIsEnumerable, cd = (n, i, a) => i in n ? gZ(n, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[i] = a, In = (n, i) => {
  for (var a in i || (i = {}))
    bZ.call(i, a) && cd(n, a, i[a]);
  if (sd)
    for (var a of sd(i))
      EZ.call(i, a) && cd(n, a, i[a]);
  return n;
}, wf = (n, i) => kZ(n, yZ(i));
const tn = window.Vue.defineComponent, Er = window.Vue.inject, La = window.Vue.computed, Wr = window.Vue.ref, at = window.Vue.resolveComponent, He = window.Vue.openBlock, Qr = window.Vue.createElementBlock, Zf = window.Vue.normalizeClass, vt = window.Vue.renderSlot, $t = window.Vue.createBlock, Ar = window.Vue.createCommentVNode, _a = window.Vue.createElementVNode, WZ = window.Vue.withModifiers, ii = window.Vue.createVNode, Jf = window.Vue.toRef, dl = window.Vue.mergeProps, Bt = window.Vue.withCtx, FZ = window.Vue.h, SZ = window.Vue.provide;
var nn = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const AZ = {
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
}, xZ = tn({
  props: AZ,
  setup(n) {
    const i = Er("isCondensed", null), a = La(() => i || n.condensed), l = Wr(!1);
    return {
      focused: l,
      handleFocus: () => {
        l.value = !0;
      },
      handleBlur: () => {
        l.value = !1;
      },
      isCondensed: a
    };
  },
  components: {
    FeatherRipple: jn
  }
}), QZ = ["aria-disabled"];
function BZ(n, i, a, l, c, f) {
  const p = at("FeatherRipple");
  return He(), Qr("div", {
    class: Zf(["chip", {
      condensed: n.isCondensed,
      disabled: n.disabled,
      focused: n.focused
    }]),
    onFocusin: i[0] || (i[0] = (V) => n.clickable ? n.handleFocus : null),
    onFocusout: i[1] || (i[1] = (V) => n.clickable ? n.handleBlur : null),
    "aria-disabled": n.disabled
  }, [
    vt(n.$slots, "default", {}, void 0, !0),
    n.clickable ? (He(), $t(p, { key: 0 })) : Ar("", !0)
  ], 42, QZ);
}
var El = /* @__PURE__ */ nn(xZ, [["render", BZ], ["__scopeId", "data-v-44d413dc"]]);
const DZ = {
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
}, OZ = tn({
  emits: ["delete"],
  props: DZ,
  setup(n, i) {
    return {
      handleDelete: () => {
        n.disabled || i.emit("delete");
      },
      icon: ff
    };
  },
  components: {
    FeatherIcon: ft
  }
}), CZ = { class: "chip-delete" }, GZ = ["aria-label", "aria-describedby"];
function zZ(n, i, a, l, c, f) {
  const p = at("FeatherIcon");
  return He(), Qr("span", CZ, [
    _a("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: i[0] || (i[0] = WZ((...V) => n.handleDelete && n.handleDelete(...V), ["stop", "prevent"])),
      "aria-label": n.label,
      "aria-describedby": n.textId
    }, [
      ii(p, {
        icon: n.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, GZ)
  ]);
}
var YZ = /* @__PURE__ */ nn(OZ, [["render", zZ], ["__scopeId", "data-v-4bae6cb4"]]);
const IZ = tn({
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
}), HZ = ["title"];
function PZ(n, i, a, l, c, f) {
  return He(), Qr("span", {
    class: "label",
    title: n.titleText,
    ref: "container"
  }, [
    vt(n.$slots, "default", {}, void 0, !0)
  ], 8, HZ);
}
var Wl = /* @__PURE__ */ nn(IZ, [["render", PZ], ["__scopeId", "data-v-1a0445b2"]]);
const jZ = {}, XZ = {
  class: "chip-icon",
  role: "presentation"
};
function LZ(n, i) {
  return He(), Qr("span", XZ, [
    vt(n.$slots, "default", {}, void 0, !0)
  ]);
}
var Fl = /* @__PURE__ */ nn(jZ, [["render", LZ], ["__scopeId", "data-v-2230176f"]]);
const ud = {
  delete: "Remove"
}, _Z = tn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => ud
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(n, i) {
    const a = Jw(Jf(n, "labels"), ud), l = La(() => Ie("chip-text")), c = () => {
      n.disabled || i.emit("click");
    }, f = In({}, i.attrs);
    return n.disabled && delete f.onClick, wf(In({}, a), {
      chipTextId: l,
      handleClick: c,
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
    Chip: El,
    DeleteIcon: YZ,
    Label: Wl,
    PreIcon: Fl
  }
}), qZ = ["aria-disabled"];
function KZ(n, i, a, l, c, f) {
  const p = at("PreIcon"), V = at("Label"), v = at("DeleteIcon"), k = at("Chip");
  return He(), $t(k, dl(n.attrs, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: { hover: n.canClick, focus: n.canClick || n.canDelete },
    role: "row",
    clickable: n.canClick
  }), {
    default: Bt(() => [
      _a("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        _a("span", dl(n.chipTextAttrs, { class: "chip-label-button" }), [
          n.hasIcon ? (He(), $t(p, { key: 0 }, {
            default: Bt(() => [
              vt(n.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Ar("", !0),
          ii(V, { id: n.chipTextId }, {
            default: Bt(() => [
              vt(n.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, qZ),
      n.canDelete ? (He(), $t(v, {
        key: 0,
        disabled: n.disabled,
        "text-id": n.chipTextId,
        label: n.deleteLabel,
        role: "gridcell",
        onDelete: i[0] || (i[0] = (J) => n.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Ar("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var $Z = /* @__PURE__ */ nn(_Z, [["render", KZ], ["__scopeId", "data-v-48b2704a"]]);
const eJ = tn({
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
    Chip: El,
    Label: Wl,
    PreIcon: Fl
  }
}), tJ = ["aria-disabled"];
function nJ(n, i, a, l, c, f) {
  const p = at("PreIcon"), V = at("Label"), v = at("Chip");
  return He(), $t(v, {
    role: "row",
    disabled: n.disabled,
    condensed: n.condensed,
    clickable: !1
  }, {
    default: Bt(() => [
      _a("span", {
        role: "gridcell",
        "aria-disabled": n.disabled
      }, [
        n.hasIcon ? (He(), $t(p, { key: 0 }, {
          default: Bt(() => [
            vt(n.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Ar("", !0),
        ii(V, null, {
          default: Bt(() => [
            vt(n.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, tJ)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var rJ = /* @__PURE__ */ nn(eJ, [["render", nJ], ["__scopeId", "data-v-3e0c4eba"]]);
const aJ = tn({
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
    const i = Wr(!1), a = Wr(!1), l = La(() => Ie("chip-label-id")), c = La(() => i.value || a.value ? 0 : -1), f = Wr(), p = () => {
      f.value.$el.focus();
    }, V = Er("register", (g) => {
    }), v = Er("blur", (g) => {
    }), k = Er("select", (g) => {
    }), J = {
      first: i,
      focus: p,
      disabled: n.disabled,
      value: n.value,
      checked: a
    };
    return V(J), {
      labelId: l,
      tabindex: c,
      first: i,
      blur: v,
      click: () => {
        k(J);
      },
      input: f,
      checked: a
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((i) => i.children && i.children.length !== 0 || typeof i.type == "object") !== -1;
    }
  },
  components: {
    Chip: El,
    Label: Wl,
    PreIcon: Fl
  }
});
function iJ(n, i, a, l, c, f) {
  const p = at("PreIcon"), V = at("Label"), v = at("Chip");
  return He(), $t(v, {
    disabled: n.disabled,
    condensed: n.condensed,
    class: Zf(["focus hover", { selected: n.checked }]),
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
    default: Bt(() => [
      n.hasIcon ? (He(), $t(p, { key: 0 }, {
        default: Bt(() => [
          vt(n.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Ar("", !0),
      ii(V, { id: n.labelId }, {
        default: Bt(() => [
          vt(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var oJ = /* @__PURE__ */ nn(aJ, [["render", iJ], ["__scopeId", "data-v-bbcc2f70"]]);
const lJ = {
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
}, dd = tn({
  props: lJ,
  setup() {
    return { format: Er("chipListFormat", "") };
  },
  render() {
    const n = (i) => FZ(i, In(In({}, this.$props), this.$attrs), In({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? n($Z) : this.format === "radio" ? n(oJ) : n(rJ);
  }
}), sJ = {
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
}, cJ = tn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: sJ,
  setup(n, i) {
    const a = n.mode === "list" ? "grid" : n.mode;
    SZ("chipListFormat", a);
    const l = a === "single";
    if (a === "radio") {
      const p = Jf(n, "modelValue");
      return wf(In({
        attrs: {
          role: "radiogroup"
        }
      }, Mf(p, i.emit, n.label, {}, Wr(""))), {
        single: l
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: l };
  }
}), uJ = ["aria-label"];
function dJ(n, i, a, l, c, f) {
  return He(), Qr("div", dl(n.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": n.label,
    class: ["chip-list", { condensed: n.condensed, single: n.single }],
    onKeydown: i[0] || (i[0] = (...p) => n.keydown && n.keydown(...p))
  }), [
    vt(n.$slots, "default", {}, void 0, !0)
  ], 16, uJ);
}
var fJ = /* @__PURE__ */ nn(cJ, [["render", dJ], ["__scopeId", "data-v-1e06f41d"]]);
const fd = (n) => {
  const i = new Date(n);
  return `${i.getMonth() + 1}/${i.getDate()} ${i.getUTCHours()}:${i.getMinutes()}:${i.getSeconds()}`;
}, hJ = window.Vue.defineComponent, Lt = window.Vue.unref, Lo = window.Vue.toDisplayString, Kt = window.Vue.createElementVNode, hd = window.Vue.createTextVNode, pJ = window.Vue.createVNode, mJ = window.Vue.openBlock, VJ = window.Vue.createElementBlock, TJ = window.Vue.createCommentVNode, UJ = window.Vue.pushScopeId, RJ = window.Vue.popScopeId, gf = (n) => (UJ("data-v-efb670fd"), n = n(), RJ(), n), vJ = {
  key: 0,
  class: "card"
}, NJ = { class: "row" }, MJ = { class: "title" }, wJ = /* @__PURE__ */ gf(() => /* @__PURE__ */ Kt("strong", null, "First Event", -1)), ZJ = /* @__PURE__ */ gf(() => /* @__PURE__ */ Kt("strong", null, "Last Event", -1)), JJ = ["innerHTML"], gJ = /* @__PURE__ */ hJ({
  __name: "AlarmDetail",
  props: {
    id: null
  },
  setup(n) {
    const i = n, l = rf().alarms[i.id];
    return (c, f) => {
      var p;
      return Lt(l) ? (mJ(), VJ("div", vJ, [
        Kt("div", NJ, [
          Kt("div", MJ, "[" + Lo(Lt(l).id) + "]", 1),
          Kt("div", null, [
            wJ,
            hd(" - " + Lo(Lt(fd)(Lt(l).firstEventTime)), 1)
          ]),
          Kt("div", null, [
            ZJ,
            hd(" - " + Lo(Lt(fd)(Lt(l).lastEvent.createTime)), 1)
          ]),
          Kt("div", null, [
            pJ(sf, {
              severity: (p = Lt(l)) == null ? void 0 : p.severity
            }, null, 8, ["severity"])
          ])
        ]),
        Kt("div", {
          innerHTML: Lt(l).description
        }, null, 8, JJ)
      ])) : TJ("", !0);
    };
  }
});
const kJ = /* @__PURE__ */ Pe(gJ, [["__scopeId", "data-v-efb670fd"]]), yJ = window.Vue.defineComponent, bJ = window.Vue.normalizeClass, EJ = window.Vue.openBlock, WJ = window.Vue.createElementBlock, FJ = window.Vue.createCommentVNode, SJ = /* @__PURE__ */ yJ({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(n) {
    const i = n;
    return (a, l) => i != null && i.severity ? (EJ(), WJ("span", {
      key: 0,
      class: bJ(["circle", [`${i.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : FJ("", !0);
  }
});
const AJ = /* @__PURE__ */ Pe(SJ, [["__scopeId", "data-v-e08880d6"]]), xJ = window.Vue.defineComponent, Ya = window.Vue.createElementVNode, kf = window.Vue.createTextVNode, xa = window.Vue.unref, pd = window.Vue.normalizeClass, _o = window.Vue.withCtx, qo = window.Vue.createVNode, md = window.Vue.renderList, Ko = window.Vue.Fragment, On = window.Vue.openBlock, Qa = window.Vue.createElementBlock, QJ = window.Vue.toDisplayString, Vd = window.Vue.createBlock, BJ = window.Vue.pushScopeId, DJ = window.Vue.popScopeId, OJ = (n) => (BJ("data-v-4d8a6eca"), n = n(), DJ(), n), CJ = /* @__PURE__ */ OJ(() => /* @__PURE__ */ Ya("div", { class: "title" }, "Alarms", -1)), GJ = { class: "alarm-filters-container" }, zJ = /* @__PURE__ */ kf(" ALL "), YJ = { class: "section" }, IJ = { class: "alarm-list" }, Td = window.Vue.ref, HJ = window.Vue.watch, PJ = window.Vue.computed, jJ = /* @__PURE__ */ xJ({
  __name: "AlarmFilters",
  props: {
    relatedAlarms: null
  },
  setup(n) {
    const i = n, a = PJ(
      () => Vn.exports.keys(Vn.exports.groupBy(i.relatedAlarms, "severity"))
    ), l = Td(["all"]), c = Td(i.relatedAlarms), f = (p) => {
      l.value = l.value.filter((V) => V !== "all"), l.value.includes(p) ? l.value = l.value.filter((V) => V !== p) : l.value.push(p), p === "all" || l.value.length === 0 ? (l.value = ["all"], c.value = i.relatedAlarms) : c.value = i.relatedAlarms.filter(
        (V) => l.value.includes(V.severity)
      );
    };
    return HJ(i, () => {
      l.value = ["all"], c.value = i.relatedAlarms;
    }), (p, V) => (On(), Qa(Ko, null, [
      CJ,
      Ya("div", GJ, [
        (On(), Vd(xa(fJ), {
          key: l.value.toString(),
          condensed: "",
          class: "alarm-filters",
          label: "Random list for condensed visual testing"
        }, {
          default: _o(() => [
            qo(xa(dd), {
              class: pd({ clicked: l.value.includes("all") }),
              onClick: V[0] || (V[0] = (v) => f("all"))
            }, {
              default: _o(() => [
                zJ
              ]),
              _: 1
            }, 8, ["class"]),
            (On(!0), Qa(Ko, null, md(xa(a), (v) => (On(), Vd(xa(dd), {
              class: pd({ clicked: l.value.includes(v) }),
              key: v,
              onClick: (k) => f(v)
            }, {
              default: _o(() => [
                qo(AJ, { severity: v }, null, 8, ["severity"]),
                kf(QJ(v), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        })),
        Ya("div", YJ, [
          Ya("div", IJ, [
            (On(!0), Qa(Ko, null, md(c.value, (v) => (On(), Qa("div", {
              key: v.id
            }, [
              qo(kJ, {
                id: v.id
              }, null, 8, ["id"])
            ]))), 128))
          ])
        ])
      ])
    ], 64));
  }
});
const XJ = /* @__PURE__ */ Pe(jJ, [["__scopeId", "data-v-4d8a6eca"]]);
var LJ = Object.defineProperty, _J = Object.defineProperties, qJ = Object.getOwnPropertyDescriptors, Ud = Object.getOwnPropertySymbols, KJ = Object.prototype.hasOwnProperty, $J = Object.prototype.propertyIsEnumerable, Rd = (n, i, a) => i in n ? LJ(n, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[i] = a, wr = (n, i) => {
  for (var a in i || (i = {}))
    KJ.call(i, a) && Rd(n, a, i[a]);
  if (Ud)
    for (var a of Ud(i))
      $J.call(i, a) && Rd(n, a, i[a]);
  return n;
}, vd = (n, i) => _J(n, qJ(i));
const eg = window.Vue.defineComponent, tg = window.Vue.inject, Zr = window.Vue.h;
var ng = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const rg = {
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
}, ag = eg({
  inheritAttrs: !1,
  props: rg,
  setup() {
    return { hasTooltip: tg("feather-has-tooltip", !1) };
  },
  render() {
    const n = () => {
      let V = "";
      this.primary && (V = "btn-primary"), this.secondary && (V = "btn-secondary"), (this.text || this.icon) && (V = "btn-text");
      const v = ["btn", "hover", "focus", V];
      return this.icon && (v.push("btn-icon"), v.push("btn-icon-table")), this.onColor && v.push("on-color"), v;
    }, i = this.asAnchor ? "a" : "button", a = {}, l = wr({}, this.$attrs);
    a.attrs = l || {}, this.asAnchor ? a.attrs.role = "button" : a.attrs.type = a.attrs.type || "button", this.disabled && (a.attrs["aria-disabled"] = "true"), a.on = {
      onClick: (V) => {
        this.disabled ? (this.asAnchor && V.preventDefault(), this.$emit("disabled-click", V)) : this.$emit("click", V);
      }
    };
    const c = n();
    a.class = [this.$attrs.class].concat(c), this.$slots.icon && a.class.push("has-icon");
    let f = Zr(jn);
    if (this.disabled && (f = void 0), this.icon && this.$slots.default) {
      const V = this.icon;
      return a.attrs["aria-label"] = V, this.hasTooltip || (a.attrs.title = V), Zr(i, vd(wr(wr({}, a.attrs), a.on), { class: a.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Zr(jn, { center: !0 })
      ]);
    }
    const p = Zr("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Zr(i, vd(wr(wr({}, a.attrs), a.on), { class: a.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      p,
      f
    ]);
  }
});
var qa = /* @__PURE__ */ ng(ag, [["__scopeId", "data-v-702d1074"]]);
const ig = "/whoami", og = async () => {
  try {
    const n = await _n.get(ig);
    return n.status === 200 ? n.data : !1;
  } catch {
    return !1;
  }
}, lg = window.Pinia.defineStore, Br = lg("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    firstTime: !0,
    allowSave: !0
  }),
  actions: {
    async getUserRole() {
      const n = await og();
      n && (this.isAdmin = n.roles.includes("ROLE_ADMIN"), this.userId = n.id);
    },
    async getAlecInfo() {
      const n = await $R();
      n && (this.firstTime = !1, this.allowSave = n.agreed);
    },
    async savePermission(n) {
      if (this.allowSave = n, !n) {
        const i = await nf(n);
        this.allowSave = i;
      }
    }
  }
}), sg = window.Vue.defineComponent, St = window.Vue.unref, Jr = window.Vue.normalizeClass, At = window.Vue.createVNode, Cn = window.Vue.openBlock, Gn = window.Vue.createElementBlock, cg = window.Vue.createCommentVNode, Nd = window.Vue.withCtx, rt = window.Vue.createElementVNode, Md = window.Vue.toDisplayString, ug = window.Vue.createTextVNode, dg = window.Vue.Fragment, fg = window.Vue.pushScopeId, hg = window.Vue.popScopeId, pg = (n) => (fg("data-v-bcdb5d69"), n = n(), hg(), n), mg = { class: "section" }, Vg = {
  key: 0,
  class: "btn-row"
}, Tg = { key: 0 }, Ug = { key: 1 }, Rg = { key: 0 }, vg = { key: 1 }, Ng = { class: "situation-detail" }, Mg = { class: "situation-info" }, wg = { class: "id" }, Zg = ["innerHTML"], Jg = /* @__PURE__ */ pg(() => /* @__PURE__ */ rt("strong", null, "Reduction key:", -1)), gg = { class: "boxes" }, kg = { class: "parameters" }, yg = { class: "section" }, bg = window.Vue.ref, Eg = window.Vue.watch, Wg = /* @__PURE__ */ sg({
  __name: "SituationDetailTab",
  props: {
    alarmInfo: null
  },
  setup(n) {
    const i = n, a = Br(), l = bg(""), c = (f) => {
      var p;
      tv((p = i.alarmInfo) == null ? void 0 : p.id, f), l.value = f;
    };
    return Eg(i, () => {
      l.value = i.alarmInfo.status || "";
    }), (f, p) => {
      var V, v, k, J, y;
      return Cn(), Gn(dg, null, [
        rt("div", mg, [
          St(a).allowSave ? (Cn(), Gn("div", Vg, [
            At(St(qa), {
              class: Jr(["btn", { accepted: l.value == "ACCEPTED" }]),
              onClick: p[0] || (p[0] = () => c("ACCEPTED"))
            }, {
              default: Nd(() => [
                At(St(ft), {
                  icon: St(of),
                  "aria-hidden": "true",
                  class: Jr(["icon accept", { accepted: l.value == "ACCEPTED" }])
                }, null, 8, ["icon", "class"]),
                l.value == "ACCEPTED" ? (Cn(), Gn("span", Tg, " ACCEPTED")) : (Cn(), Gn("span", Ug, " ACCEPT"))
              ]),
              _: 1
            }, 8, ["class"]),
            At(St(qa), {
              class: Jr(["btn", { rejected: l.value == "REJECTED" }]),
              onClick: p[1] || (p[1] = () => c("REJECTED"))
            }, {
              default: Nd(() => [
                At(St(ft), {
                  icon: St(ww),
                  "aria-hidden": "true",
                  class: Jr(["icon reject", { rejected: l.value == "REJECTED" }])
                }, null, 8, ["icon", "class"]),
                l.value == "REJECTED" ? (Cn(), Gn("span", Rg, " REJECTED")) : (Cn(), Gn("span", vg, " REJECT"))
              ]),
              _: 1
            }, 8, ["class"])
          ])) : cg("", !0),
          rt("div", Ng, [
            rt("div", {
              class: Jr(["severity-line", [`${(v = (V = i.alarmInfo) == null ? void 0 : V.severity) == null ? void 0 : v.toLowerCase()}-bg dark`]])
            }, null, 2),
            rt("div", Mg, [
              rt("div", wg, [
                rt("div", null, "Situation " + Md((k = i.alarmInfo) == null ? void 0 : k.id), 1),
                At(sf, {
                  severity: (J = i.alarmInfo) == null ? void 0 : J.severity
                }, null, 8, ["severity"])
              ]),
              rt("span", {
                innerHTML: i.alarmInfo.description
              }, null, 8, Zg),
              rt("p", null, [
                Jg,
                ug(" " + Md(i.alarmInfo.reductionKey), 1)
              ]),
              rt("div", gg, [
                At($u, {
                  label: "First Event",
                  date: St(sl)(new Date(i.alarmInfo.firstEventTime), "d/M HH:mm:ss")
                }, null, 8, ["date"]),
                At($u, {
                  label: "Last Event",
                  date: St(sl)(new Date(i.alarmInfo.lastEvent.time), "d/M HH:mm:ss")
                }, null, 8, ["date"])
              ])
            ]),
            rt("div", kg, [
              At(af, {
                relatedAlarms: (y = i.alarmInfo) == null ? void 0 : y.relatedAlarms,
                size: "large"
              }, null, 8, ["relatedAlarms"])
            ])
          ])
        ]),
        rt("div", yg, [
          At(XJ, {
            "related-alarms": i.alarmInfo.relatedAlarms
          }, null, 8, ["related-alarms"])
        ])
      ], 64);
    };
  }
});
const Fg = /* @__PURE__ */ Pe(Wg, [["__scopeId", "data-v-bcdb5d69"]]), Sg = window.Vue.defineComponent, Ag = window.Vue.createTextVNode, $o = window.Vue.unref, Ba = window.Vue.withCtx, Da = window.Vue.createVNode, xg = window.Vue.openBlock, Qg = window.Vue.createElementBlock, Bg = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Dg = {
  key: 0,
  class: "detail"
}, Og = /* @__PURE__ */ Ag("Details"), Cg = /* @__PURE__ */ Sg({
  __name: "SituationDetail",
  props: {
    alarmInfo: null
  },
  setup(n) {
    const i = n;
    return (a, l) => i.alarmInfo ? (xg(), Qg("div", Dg, [
      Da($o(SN), null, {
        tabs: Ba(() => [
          Da($o(gN), null, {
            default: Ba(() => [
              Og
            ]),
            _: 1
          })
        ]),
        default: Ba(() => [
          Da($o(BN), { class: "panel" }, {
            default: Ba(() => [
              Da(Fg, {
                "alarm-info": i.alarmInfo
              }, null, 8, ["alarm-info"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ])) : Bg("", !0);
  }
});
const Gg = /* @__PURE__ */ Pe(Cg, [["__scopeId", "data-v-85513d07"]]), zg = window.Vue.defineComponent, fl = window.Vue.createElementVNode, wd = window.Vue.unref, Yg = window.Vue.renderList, Ig = window.Vue.Fragment, el = window.Vue.openBlock, tl = window.Vue.createElementBlock, Zd = window.Vue.createVNode, Hg = window.Vue.pushScopeId, Pg = window.Vue.popScopeId, jg = (n) => (Hg("data-v-c673a70c"), n = n(), Pg(), n), Xg = { class: "list-main" }, Lg = /* @__PURE__ */ jg(() => /* @__PURE__ */ fl("h2", null, "Situation List", -1)), _g = { class: "container" }, qg = { class: "situation-list" }, Kg = window.Vue.reactive, $g = /* @__PURE__ */ zg({
  __name: "SituationList",
  setup(n) {
    const i = rf();
    i.getSituations();
    const a = Kg({
      selectedSituationIndex: 0,
      situationSelected: ""
    }), l = (c) => {
      a.situationSelected = c, a.selectedSituationIndex = i.situations.findIndex(
        (f) => f.id === c
      );
    };
    return i.$subscribe((c, f) => {
      a.situationSelected = f.situations[0].id;
    }), (c, f) => (el(), tl("div", Xg, [
      Lg,
      fl("div", _g, [
        fl("div", qg, [
          (el(!0), tl(Ig, null, Yg(wd(i).situations, (p) => (el(), tl("div", {
            key: p.id
          }, [
            Zd(Bv, {
              "alarm-info": p,
              onSituationSelected: l,
              selected: a.situationSelected == p.id
            }, null, 8, ["alarm-info", "selected"])
          ]))), 128))
        ]),
        Zd(Gg, {
          "alarm-info": wd(i).situations[a.selectedSituationIndex]
        }, null, 8, ["alarm-info"])
      ])
    ]));
  }
});
const ek = /* @__PURE__ */ Pe($g, [["__scopeId", "data-v-c673a70c"]]);
var tk = Object.defineProperty, nk = Object.defineProperties, rk = Object.getOwnPropertyDescriptors, Jd = Object.getOwnPropertySymbols, ak = Object.prototype.hasOwnProperty, ik = Object.prototype.propertyIsEnumerable, gd = (n, i, a) => i in n ? tk(n, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[i] = a, Ia = (n, i) => {
  for (var a in i || (i = {}))
    ak.call(i, a) && gd(n, a, i[a]);
  if (Jd)
    for (var a of Jd(i))
      ik.call(i, a) && gd(n, a, i[a]);
  return n;
}, yf = (n, i) => nk(n, rk(i));
const bf = window.Vue.defineComponent, ok = window.Vue.ref, Fr = window.Vue.computed, lk = window.Vue.reactive, kd = window.Vue.watch, nl = window.Vue.inject, Ef = window.Vue.resolveComponent, hl = window.Vue.openBlock, Wf = window.Vue.createElementBlock, en = window.Vue.createElementVNode, sk = window.Vue.createBlock, ck = window.Vue.createCommentVNode, Ff = window.Vue.renderSlot, uk = window.Vue.pushScopeId, dk = window.Vue.popScopeId, rl = window.Vue.toRef, yd = window.Vue.mergeProps, fk = window.Vue.toDisplayString, hk = window.Vue.createVNode;
var Sf = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const pk = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, mk = bf({
  props: pk,
  setup(n) {
    const i = ok(), a = () => {
      i.value.focus();
    }, l = Fr(() => Ie("feather-radio-button")), c = lk({
      first: !1,
      focus: a,
      disabled: n.disabled,
      value: n.value,
      checked: !1,
      id: l.value
    }), f = Fr(() => Ie("radio-label-id")), p = Fr(() => c.first || c.checked ? 0 : -1);
    kd(() => n.disabled, (y) => {
      c.disabled = y;
    }, { immediate: !0 }), kd(() => n.value, (y) => {
      c.value = y;
    }, { immediate: !0 });
    const V = nl("register", (y) => {
    }), v = nl("blur", (y) => {
    }), k = nl("select", (y) => {
    });
    return V(c), {
      labelId: f,
      tabindex: p,
      vm: c,
      blur: v,
      click: () => {
        k(c);
      },
      input: i,
      id: l
    };
  },
  components: {
    FeatherRipple: jn
  }
}), Vk = (n) => (uk("data-v-24790cf0"), n = n(), dk(), n), Tk = { class: "layout-container" }, Uk = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], Rk = { class: "radio hover focus" }, vk = /* @__PURE__ */ Vk(() => /* @__PURE__ */ en("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ en("svg", { class: "dot" }, [
    /* @__PURE__ */ en("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), Nk = ["id"];
function Mk(n, i, a, l, c, f) {
  const p = Ef("feather-ripple");
  return hl(), Wf("div", Tk, [
    en("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: n.id,
      "aria-checked": n.vm.checked ? "true" : "false",
      "aria-disabled": n.vm.disabled ? "true" : "false",
      "aria-labelledby": n.labelId,
      tabindex: n.tabindex,
      onClick: i[0] || (i[0] = (...V) => n.click && n.click(...V)),
      onBlur: i[1] || (i[1] = (...V) => n.blur && n.blur(...V)),
      "data-ref-id": "feather-radio"
    }, [
      en("div", Rk, [
        vk,
        n.vm.disabled ? ck("", !0) : (hl(), sk(p, {
          key: 0,
          center: ""
        }))
      ]),
      en("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: n.labelId
      }, [
        Ff(n.$slots, "default", {}, void 0, !0)
      ], 8, Nk)
    ], 40, Uk)
  ]);
}
var Ka = /* @__PURE__ */ Sf(mk, [["render", Mk], ["__scopeId", "data-v-24790cf0"]]);
const wk = yf(Ia({}, vf), {
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
}), Zk = {
  "update:modelValue": (n) => !0,
  blur: (n) => !0
}, Jk = bf({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: wk,
  emits: Zk,
  setup(n, i) {
    Nf(n);
    const a = rl(n, "error"), l = rl(n, "modelValue"), c = Fr(() => Ie("feather-input-description")), f = Fr(() => {
      const p = yf(Ia({}, i.attrs), {
        class: "",
        "aria-describedby": c.value
      });
      return p["aria-invalid"] || (p["aria-invalid"] = !!a.value), p;
    });
    return Ia(Ia({
      descriptionId: c,
      attrs: f
    }, Mf(l, i.emit, n.label, n.schema, rl(n, "error"))), Rf(i.attrs));
  },
  components: {
    InputSubText: Tf
  }
}), gk = ["for"], kk = ["id"];
function yk(n, i, a, l, c, f) {
  const p = Ef("InputSubText");
  return hl(), Wf("div", yd(n.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: n.vertical }]
  }), [
    en("label", {
      for: n.groupId,
      class: "group-label"
    }, fk(n.label), 9, gk),
    en("div", yd(n.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: n.groupId,
      onKeydown: i[0] || (i[0] = (...V) => n.keydown && n.keydown(...V))
    }), [
      Ff(n.$slots, "default", {}, void 0, !0)
    ], 16, kk),
    hk(p, { id: n.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Af = /* @__PURE__ */ Sf(Jk, [["render", yk], ["__scopeId", "data-v-6775aeb9"]]);
const bk = window.Vue.openBlock, Ek = window.Vue.createElementBlock, Wk = window.Vue.createStaticVNode;
var Fk = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const Sk = {}, Ak = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xk = /* @__PURE__ */ Wk('<path d="M4,13H14V11H4a1,1,0,0,0,0,2Z"></path><path d="M21,6a1,1,0,0,0-1-1H14V7h6A1,1,0,0,0,21,6Z"></path><path d="M20,17H11v2h9a1,1,0,0,0,0-2Z"></path><path d="M11.5,3h-1a.5.5,0,0,0-.5.5V5H4A1,1,0,0,0,4,7h6V8.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,11.5,3Z"></path><path d="M20,11H18V9.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5v5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V13h2a1,1,0,0,0,0-2Z"></path><path d="M8.5,15h-1a.5.5,0,0,0-.5.5V17H4a1,1,0,0,0,0,2H7v1.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5v-5A.5.5,0,0,0,8.5,15Z"></path>', 6), Qk = [
  xk
];
function Bk(n, i) {
  return bk(), Ek("svg", Ak, Qk);
}
var Dk = /* @__PURE__ */ Fk(Sk, [["render", Bk]]);
const Ok = window.Vue.openBlock, Ck = window.Vue.createElementBlock, Gk = window.Vue.createStaticVNode;
var zk = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const Yk = {}, Ik = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Hk = /* @__PURE__ */ Gk('<rect x="8" y="7" width="8" height="2" rx="1"></rect><rect x="8" y="11" width="8" height="2" rx="1"></rect><rect x="8" y="15" width="8" height="2" rx="1"></rect><path d="M21,21l-3-3v2H6V9L4,7V20a2,2,0,0,0,2,2H18v2Z"></path><path d="M6,4H18V15l2,2V4a2,2,0,0,0-2-2H6V0L3,3,6,6Z"></path>', 5), Pk = [
  Hk
];
function jk(n, i) {
  return Ok(), Ck("svg", Ik, Pk);
}
var Xk = /* @__PURE__ */ zk(Yk, [["render", jk]]);
const Lk = window.Vue.openBlock, _k = window.Vue.createElementBlock, qk = window.Vue.createElementVNode;
var Kk = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const $k = {}, ey = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ty = /* @__PURE__ */ qk("path", { d: "M17,10h5a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1V5.59L10.59,11H8V9A1,1,0,0,0,7,8H2A1,1,0,0,0,1,9v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V13h2.58L16,18.49V21a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H17a1,1,0,0,0-1,1v.64L12.41,12,16,8.42V9A1,1,0,0,0,17,10Zm1,6h3v4H18ZM18,4h3V8H18Z" }, null, -1), ny = [
  ty
];
function ry(n, i) {
  return Lk(), _k("svg", ey, ny);
}
var ay = /* @__PURE__ */ Kk($k, [["render", ry]]);
const iy = window.Vue.openBlock, oy = window.Vue.createElementBlock, ly = window.Vue.createStaticVNode;
var sy = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const cy = {}, uy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dy = /* @__PURE__ */ ly('<rect x="3" y="3" width="4" height="4"></rect><rect x="10" y="3" width="4" height="4"></rect><rect x="17" y="3" width="4" height="4"></rect><rect x="3" y="10" width="4" height="4"></rect><rect x="10" y="10" width="4" height="4"></rect><rect x="17" y="10" width="4" height="4"></rect><rect x="3" y="17" width="4" height="4"></rect><rect x="10" y="17" width="4" height="4"></rect><rect x="17" y="17" width="4" height="4"></rect>', 9), fy = [
  dy
];
function hy(n, i) {
  return iy(), oy("svg", uy, fy);
}
var py = /* @__PURE__ */ sy(cy, [["render", hy]]);
const my = window.Vue.openBlock, Vy = window.Vue.createElementBlock, Ty = window.Vue.createElementVNode;
var Uy = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const Ry = {}, vy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ny = /* @__PURE__ */ Ty("path", { d: "M18,6a4,4,0,0,0-1,7.86V18a2,2,0,0,1-2,2H10a2,2,0,0,1-2-2V12.9a5.5,5.5,0,0,0,4.5-5.4V5a2,2,0,0,0-2-2h-1a1,1,0,0,0,0,2h1V7.5a3.5,3.5,0,0,1-7,0V5h1a1,1,0,0,0,0-2h-1a2,2,0,0,0-2,2V7.5A5.5,5.5,0,0,0,6,12.9V18a4,4,0,0,0,4,4h5a4,4,0,0,0,4-4V13.86A4,4,0,0,0,18,6Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,18,12Z" }, null, -1), My = [
  Ny
];
function wy(n, i) {
  return my(), Vy("svg", vy, My);
}
var Zy = /* @__PURE__ */ Uy(Ry, [["render", wy]]);
const xf = () => window.VRouter || Sl, Jy = window.Vue.defineComponent, de = window.Vue.createElementVNode, xr = window.Vue.createTextVNode, be = window.Vue.unref, xt = window.Vue.createVNode, Oa = window.Vue.withCtx, bd = window.Vue.openBlock, Ed = window.Vue.createElementBlock, gy = window.Vue.createCommentVNode, ky = window.Vue.pushScopeId, yy = window.Vue.popScopeId, ht = (n) => (ky("data-v-0fd6b0cd"), n = n(), yy(), n), by = { class: "container" }, Ey = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("div", { class: "title" }, "ALEC", -1)), Wy = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("div", { class: "description" }, [
  /* @__PURE__ */ xr(" The Architecture for Learning Enabled Correlation, or ALEC, provides a machine learning powered solution for alarm correlation. Complex networks produce significant, and potentially overwhelming, amount of events and alarms. "),
  /* @__PURE__ */ de("br"),
  /* @__PURE__ */ de("strong", null, "Our goal"),
  /* @__PURE__ */ xr(" with ALEC to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. ")
], -1)), Fy = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("h3", null, "Key Benefits:", -1)), Sy = { class: "list" }, Ay = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("span", null, " Alleviate alarm load by clustering them into actionable situations. ", -1)), xy = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("span", null, "Assist in root cause analysis.", -1)), Qy = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("span", null, " Avoid potential issues flagged by alarms with low visibility. ", -1)), By = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("span", null, "Easy configuration.", -1)), Dy = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("span", null, " Continuous improvement. Provided anonymized data helps us improve ALEC. ", -1)), Oy = {
  key: 0,
  class: "optin"
}, Cy = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("h3", null, "Enable ALEC for more precise results:", -1)), Gy = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("div", null, " Our goal with ALEC, is to aid IT Operators to tackle these issues effectively identifying alarm groups that are easier to manage. The information provided is anonymized and will be used for internal purposes only. ", -1)), zy = { class: "choices" }, Yy = /* @__PURE__ */ ht(() => /* @__PURE__ */ de("div", { class: "radio-text" }, " By choosing \u201CYes\u201D you accept that OpenNMS can store the information that you provide, for educational and research purposes. ", -1)), Iy = /* @__PURE__ */ xr("Yes"), Hy = /* @__PURE__ */ xr("No"), Py = /* @__PURE__ */ xr(" Continue "), jy = window.Vue.ref, Xy = /* @__PURE__ */ Jy({
  __name: "WelcomePage",
  setup(n) {
    const i = Br(), a = xf(), l = jy(!0), c = () => {
      const f = Boolean(l.value);
      i.savePermission(f), f ? a.push({ name: "configuration" }) : a.push({ name: "situations" });
    };
    return (f, p) => (bd(), Ed("div", by, [
      Ey,
      Wy,
      de("div", null, [
        Fy,
        de("div", Sy, [
          de("div", null, [
            xt(be(ft), {
              icon: be(py),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Ay
          ]),
          de("div", null, [
            xt(be(ft), {
              icon: be(ay),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            xy
          ]),
          de("div", null, [
            xt(be(ft), {
              icon: be(Zy),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Qy
          ]),
          de("div", null, [
            xt(be(ft), {
              icon: be(Dk),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            By
          ]),
          de("div", null, [
            xt(be(ft), {
              icon: be(Xk),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            Dy
          ])
        ])
      ]),
      be(i).isAdmin ? (bd(), Ed("div", Oy, [
        Cy,
        Gy,
        de("div", zy, [
          Yy,
          xt(be(Af), {
            horizontal: "",
            modelValue: l.value,
            "onUpdate:modelValue": p[0] || (p[0] = (V) => l.value = V),
            label: ""
          }, {
            default: Oa(() => [
              xt(be(Ka), { value: !0 }, {
                default: Oa(() => [
                  Iy
                ]),
                _: 1
              }),
              xt(be(Ka), { value: !1 }, {
                default: Oa(() => [
                  Hy
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ])) : gy("", !0),
      xt(be(qa), {
        "data-test": "continue-btn",
        primary: "",
        class: "continue-btn",
        onClick: c
      }, {
        default: Oa(() => [
          Py
        ]),
        _: 1
      })
    ]));
  }
});
const Ly = /* @__PURE__ */ Pe(Xy, [["__scopeId", "data-v-0fd6b0cd"]]), _y = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAEtCAYAAADp6cDhAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABe6ADAAQAAAABAAABLQAAAACPhSuVAACJMnRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMCUzQTE0LjgzOFolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMjVqakx0NTlUU2NxUjV1OVV1WmM2JTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJJX0RXVlZPRkFCMXQ4d21lTjhoQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3THpYdHV0R2tpMzZOWHE4WThDYlJ4akNrQ0M4ZjRQM2x2QmZmNURjVXBWVTdrcW51bHMxem1qdXpiVVdmQ0l6ekp3Umtma1R5bldIT0VkaiUyQlI3U3JQMEpnZExqSjVUJTJGQ1VGZ0JNUHVYMkRQJTJCV01QaVJJJTJGZGhSemxmNTgwbDkzV05XViUyRmJ3VCUyQm5udldxWFo1emNuTHNQUUx0WDQyNTNKMFBkWnN2eG1YelRQdyUyRjdiMCUyRktoJTJGZTFUeDZqSSUyRm02SGxVVHQzJTJCJTJGMXFuUXBmJTJCeWxjT2l2JTJCNldzS3NwZm5neERQeCUyRnBvbDlPJTJGbm5IcDR6U1lmJTJGVkx2VHhFOHJOdzdEOCUyQktzN3VLd0ZuZmRMdiUyRnk0VHZnblIlMkYlMkZTc0Rucmw5OXp3U1RTV1g0NnVaZVYlMkI2VXFTTnQ4bnYlMkZmejNmWm9uYjklMkJZViUyRmJ1eHklMkZ0SURkN3RIOEdmVmZidUszYko1cWU0T1VxSTRhJTJGWGhVeTNWME4lMkZINDJGWmh1NCUyQm9RVUgyQ2hwaW5sWSUyQjVRYjJtRyUyQmo2ZFpIcTN0OHFzN01HMVZnQ3VYWWJ6M1JwJTJGeHh3RG0xWkhkYldhJTJGRDJSJTJCMlF2OXNnZmNLbHFpbjFEbXh5WWkxR05XJTJGSVJ3OTE5MGZmJTJGQUdNYXdtdkJwRmd6TEdBeGpNYXpNTUR3NFlyQnYweSUyRkhzR0FZMjRHWTElMkYyYlllNGZRVG95NEZUbXZ1TCUyQmlOJTJGOTk0Y0EyJTJCJTJCZjl6OFk1c1Z3dnpxUEoxNE0lMkY2dHQ3dk85Q0R5Sk5Cak1FY3N0RmVrckV1bGQ1dCUyRnJmUiUyRk1hRnFWJTJGWEVGJTJCUHpZNXB3Zld5enZTTUVWMWp0M3NsckhjR0g5JTJCUWxoSDglMkY3eDMxTDZtNkJVZHpQMEFkbWYxUU1JNXVNOFRhWiUyRkQ3MllOajdNUE1RR09QQmZyOSUyRiUyRmJCTThYNndSaUJ4VFBNQ25mUTlYM0h1UnNnc3M3ODVsbmtMckdFOHdMbTU4ZUNZblhrOERNZVNiWUZsUzlVTWpLUktUT01zUXJIa09KWDdKQSUyRlhXYVQ5eWF0Vk1zaFByZ3g4a1cyaXB4WDBMNjZaVk41QjFLdkF0VVo5bUU0b1dZJTJGMjVjQ202N1pwNExsakhZcHVGeUxsR1BVcWxQb2hta2t0VVdDV1VBNlpYQVdUMWVDVzI0NVowSVZUTlJCV08wN1pNRVhUJTJCU0V0ZUpremJJMW5icWRzNGZqazhwbk1Ga1RiTHJ6a0FaTE9KYmJxRFo3RlBhSDFFNVVyRjYzN0NBMUVCTDg3Y2Z1NXA4Q1lzbiUyRnBxZSUyQkwlMkY4dWVNcjg5VmR3bjdvYjBvNmNlWExwJTJGenpkWnhpbmZSbUFaN2tNSyUyRkljdDF5JTJCV1kwMnVpY1JqTjVyNkRTdTc0RDFQeUJpOEoyJTJCWHolMkZ6eG83ZnV2bnRaQTZ6V0NhYlpJMjglMkJYTkdFeXFmVnFvN3JocjRudEZHQW1HM1lwVVBralZjcXVVaUtsbmcydlBoUzlzUVNxNTdWJTJCTExicCUyQmUxZUJWMjA2c2VYMTQzRXRVNHphOXJVVHhrSVN0OCUyRlNqODhmYkZnNnFmNTZMWXNPcDdNRjJIeUtyVXVPWjNvR1Bxa2RqJTJCUVYlMkZGek9QTnNFVWdnaSUyRjMlMkZXSXZyaGkwUjRGcFBCaXlRN1llcFh6JTJGM24zaFNNQTNrZGo5eDVlVHF4JTJGJTJGa3Y1NUpyM0M3WiUyQiUyRmZQV2Y3ODUlMkJUOXdINWJFUHI4ZUo1V0pKclVxRiUyRlh0ZjBQWVU2S1glMkJZd3dqaHRuNWU1TjdBSDNoS2VaJTJCdnlsNnZXNXRycXFxWUliN3c3eiUyQmQlMkZ2ZjJ2N1IxWkElMkJkZjg1YmZwJTJGWWhzSU1TMFI0MzlPaSUyRjZmMk9aJTJGQ0t6MXY3Ymd2ODBXM04lMkYlMkZ0UWIlMkZIZGJBJTJGcyUyQjJCbzN5MGtabUxMdFNjbSUyQkNJYndkeG5MY2ZwdmFxcFRmRTVWaHN3clF1RlZiN3lZTElYcGl0R3FZJTJCNXhpeWxjcTM0ZDJMaXZ2WDY5V3FtckxDeFM4OXdwJTJCaUY0WHR0aWYwV0thaWJyMUZwdXc1MUJEYVg0SnpLTVZaTkdoT2Q2Q0dPSCUyQk1LeHBtZ2JqM0olMkYlMkZvRzMyaDJiQSUyQlglMkJZWHB5cURWJTJGMjhpcmY4UFhhSkVxV2xidzEyQm4ydTNYT1dJdjZWSk5BNFBKODBwc0EwR0VtUzVHeVh3d2tFNXlGMWJKUDBCODRLQ2dPN2FZSHNLbXY4SDVQTFY5bEx3UnZMSXNGNzhJU1ZoRFBJUFJqOWIyVHBueUJrZVlIV1ExSHlzcWVpJTJCT25RN3BPNU5yM2t3c3VYMCUyRm8ydWt4YThiUEloZWc4NVlFJTJGcFFQbjV5SzNIQ1lMREFKSFNPMjdwb2dpcHN5eURQQlphTjNOMENrMnl5blNnNWY3WDdHazJ1OGp4Q2M2WSUyQnR3RWdNNE1rN0RvbEklMkZZaFV6ZEJKYUg3bjEzTjJhMG9pek1kNnVMRzBSa1IzJTJCNGt1QnlUTWh2cjdGNUZmWTlPWHZQVVVYcDg1dWZlVTglMkIwOUdJM3Q3cjhscmJqR1R6akMwcjF4dmM2ZTJxTmhwRFJGTzR6N2VVaWFvRnFHZHJiMlF3cVkxOFAlMkIwWngyaFBJRERSTEMxd0UyMVlyMnpIRUhpUGhMZjNRTklMVlY1bUc1NUolMkJDNGhLNWJWVXFqUnY1ZEQlMkY1Q2FFSFBYUUQ5WG9HZGM4JTJCcHJ2WDd3dFp4a1djOUdCZkRKUlVTdyUyRmRuU3dPb0kzcUN6WjVLVFVURlVhbyUyRkp5cmNHUFdJWExiJTJCeUhjY3VGS2FqeTdFS2l0M0JVOHJGWGJLOUJGOFVNOFdCNGJGcVNOTmZSU1VzNEZZcEFMV1JIRmM5WVRJJTJGZWNNemZMTWN2c3FZbFJvJTJGOG8lMkJmNWhONzMlMkZIRjglMkZ1ZVFraklIWmVVVGpNbXpQYXJmbVNSViUyRjFDRmgzMDBkNEdsYzUzWmxKZUZFYlBUd0ZTTEhiRGclMkJoQ1JIV3V6VFBqNm1GcEM1cUc1akQ2c01QMjlIT1BmVnk1eWxmZUhvTmNIZTFQazRNSHJ0SW1oNWc1R0hwN0Q5VW1BJTJCajhoUFFuNmFGMDl5SzlDcWUwdyUyRmc3dVFJVk1wRUROZEJpc0l2TUNLTXRaeTAyWUxGdlI3emR6akRUM2VWRmkzem5za1lKeWMlMkZJSkRyWEFHJTJCa2FoaUVYb0d0YTBWcDY0QkxDSHVCcG5DaDFRR3ZxS2Ntd3FzempkbGVySkFTZHdFTmdNSWRkR2VrRCUyQkglMkZBc3o1UFpGJTJGaXd4UndNaXd3Q1kwVXFFZ1dNdDNrbXBoNzF0dk40NDZqQ2c5bVQlMkZyQzlURyUyRldMY0pkdGFyVXJYUHNXOUU5ayUyQjVYUVoyVEdhNGFMTmFoJTJCVFA5JTJCZEx3Q3g2RiUyRjN6RUZKR3pPS1pYd1U4UnczYXVvR2dKazlwJTJCSjFYUzRlWSUyQkRXeDI0SmNsJTJGM3pkZiUyRkUlMkJoNzF1bTh1dWVUYmR2eGJpbVBLcUlyUUtDSndYeW9iMVdjNk8lMkY4aEVUY0NvQkp6NlRvWVJHMVV2MU1nQ1ZOblFzSVoxREdKQ3ZaejNNQ1MwRFZtcEkwRXZhdFAyJTJCeTRCamglMkYwaTh4JTJCM2NoTG1UMzElMkZla1EzeUhNSGdvZ0prcUZBTGlkWjhxbXklMkJRMzRaTU01Nmh1TEplaHduTWtIZzZqJTJGJTJGNHUwUjRVdUJrMyUyQjI0dkRoNHJMTGxKalclMkYyNmo3M0N4aWIwRjRoS2tQNklaZFZaM016RUM3bU14Nnd0MWtFamg0OGxueVdmTEdGOSUyRkNZZ045WjdkdU4zbmNuV00lMkJGJTJCVmRTMEx3OVVRV2xSJTJGUzBsZE9QQUI4R25OZng5aUpGOWpnOFp2Z2FwWGwlMkZuclJQVlVLYXE4dnl3S1IlMkZNb3FSJTJGblNPYnpTM3FGamJFeGl5dTk5bUZIaFN1ZHBNTEtXMDglMkZHeTNQVUp5ZGNqdDdjemdqYlJyMTZKMXBla21mZGJQQWdHNkdTMlhxUHZkY3lHcFFVa25oeUcydWU5UTMzaFJGdkRBN05GMHJETVE5c3NTend4aCUyQmdEZzFURnElMkIzQmYlMkIwUSUyQmVDS0Q4b0lpcTlreXVLS0xXSEtScUslMkZ1S3BIVlViaXNsY3VBcmVhUnMzOTh5djdBREVvWTMwOVcwTG0wWmxiTnQ2Wkp3bk95SWh1ZEhka2RKeGgzSUJTaUFSdXh5Wlp6dnk5aHJkMHNOUjl1Q2E2dFJtWUc5THMyM2dwQUpBNDVvSUVmT002dHFzJTJGJTJCZ0xlRnJOcDRSZkVpZzdHR28lMkZiJTJGQnY2TmM5RVJEeGZaZDJJdUEyekEwTnpVTzZTdGhjJTJGbFJNSzNpSnoxWiUyRmNXcnp0c2JFdW9uS1UwZThRZjZRa1diSUU4d2lQJTJCMUZwaHZ3UmFNMWVhS1h2ZEhSZktjY3M2U1ZCVW5Pck52V3drSmlZQzJmZmtEWlBRem5mVjVxdFgzRWNtZlVsRDVKUHdNVGhnNmkzb3ZOSnRpSG1JMFQ4RjAlMkZEc3I2OTh1aTJUYnV4bzN3anR2T0Y3akZXTiUyQnZOSjlncUduUmxKY1BsaXhScndFSXJJU3YlMkZiTHolMkY1OFZ1Ymt1a3pwJTJCc0lNSm5tbWN0MHA4UUNZYVo4RnhaUnRwR0U1endPWjhhTEJ6WVJUbExzcjQ5clR0ekFBa3NvN25ocmVDTEVhTnV1enU4cXl6R0NsZ1c1bzZXMngzVlc1ekJwT0ZGQzZQZ09zNXIyRm1JR2FQZlBKOENZdk5FY2xKYjNqZTMwMU53eDk0ZjRZVEVldWhJTGFpTGRORTNyVE8lMkY2VjJwT0FWQ0JFUXclMkZSaDhJYlV5NyUyRlR0bVNwakJCV2ZMZ0h3TnBMQmFRajYyUlYwWFlnTzlVYnYwM3hyTEg0Q1RJJTJCJTJGeGpIVGNwcnJRYzl6OVl3aW01QXpYciUyRk00bnhtVDl3Tk1zc3ZhNVNwWHppWkhZZSUyRnVIJTJGY0NIWm9uWnRLOTU2eEJncnZON01WUiUyQkxxUXVOaGRwNDJ2bHVNQ0I5UDlHR0hZZDQyMHJBVDFZSzNidUVHSVV1NkdJM0hHWmNMR3A3VU5nbDlxSkpVWk91ZDl3WkxDcVl0bzU0cE5BN09NNCUyQjh0b2slMkZENDFBMjU5aDU0ZHhkSW9xQ29FRUdPRnRSb0h4MCUyQml3V2NoTU1oVkFwRGJhQ3ZhNTdpT0xTM29JRTFJZUM2RXc1YUdLTyUyRlIzSlROa2Vwb0VmRWdsd2RJNTVmanJqUHFYUnoxOUVzUWRISmpZJTJGc253M2d6bTliT3BwcGhZTmZSS01pbzVCcTZDZnpTa3h4Qk1rVWJZYWglMkZTSk5ZcUxtNWVjNTE4MGFGVlpvSkVITU5DRDVoJTJCd0dJUWRIZ282REFEb21Ic0RVNVR4T2xQajI3eiUyQk5yZkNEUkllSnU0azdlVnZ2JTJCOUxwWG5hSGNyQ0tPRG8lMkZYMXNjSHZScCUyQnlUakY5dCUyQkhjeUF4TzRBVDN2VnBHMFBaUG5OdXpxM2lJODZwdW9JQk01UCUyQk50WEt2dnVwTkIwYXRaJTJGeW9lYW1SVms3TGVOJTJCRUhpRTJNSml5NjNPTndnTmRacUdITFgya1I5bklVUXlNTHBsRkVFREhPR0I1bFVCTjZuTlpYbjFyOGNzYTFPd01aJTJCcnhGT2Y2dGd1QWtoY3MlMkZXZkJGVnIlMkZuN2UlMkZjNVZMSWtCJTJCZ2FwNmtJTTFtMGVWJTJCZ1NuaTklMkJLSTBhWjJidUJsbkwxYmRITGIlMkZFMmRBSmkwaGF6b0RJVm9CZnlzZDVyeGJ4dCUyQkVrVGhQZEhXJTJGQ3gzZndoZHBGUlJrVHJhRHIyQmtHNGZKOExzc1ptNzZHMERuU1BHdGt5NUNoYU56ZDJpUmRGUXoxV0VmWVVrODhBVjRCTXpoOTFveGh0cGNxJTJCWEIlMkJQaGk5aDNTandtJTJCUEJ2NnZ2QVQ1UkZrbGNDUFVacGJ1QjZldW1Pa0RZa1k4S01HJTJGTjRqWkFObFU2VlB6TmZWaUR6QWtYc2VmVm1ZbGF5RnhDUG9rbkJuV1F6TWVTOGdqMzdIanF0MG1ZZmxjRCUyRmp1RUNaaVBQeU9LTVB2TjFuak5CNlVQRHNXNVRjJTJCWmlRTzhLNTRQVWN1WGdtRnBZN1BXbXZMOThVUExqWnZ4YjY3SFlRR1RJRHBWcVBmdDc0Y0RqNEtiaENCJTJGb0IzWWZNellWRk1xa1clMkIxYzlybiUyQiUyQkUlMkJSTzg4ZHI2R2NIeGV1SVRwb1hudlBWZ0RZNnFyWkolMkJ5UEZzb0NJcmZRaDNDTFFiYyUyRnNKaElxaG1lS29MblBZYSUyRkFtUXlXNFlYazF6UVpBNDlXTmhnblgzZEtnTmtUUm1rN0h3MlY0Wjc3ZWtoa2hOTEhuR3AzWUJ4QlpMVGtRNEVVUm5zSXFSS0pOJTJCRWRsSFA1Nmhra2RxY2tna3NwYzJDa0R1VXJWV3BvWkQzWHFpa1h2akM3dDJOVmNUUW1BQk9FU0hCd2VBdWJWZWYzbnhBUThEVEw2VWx6SFZUUVBqNXV3ZlV1RDNkQjhKMFEwY2NOUTJtMWlRU2VsSmdFc0xIbDZyalVOZyUyQnlpVEJUOVJ0cFRvdlZhOUlaZThoZEJjMzRrMUR6ZDYzbEpxN21hNnQlMkZRdXJoQjAxUTJNaFJGWmtiMyUyRmhHNkMzUzhXR2ttYnp4NzZHeG4wQVlHb2tYY1U2akc0Uk5SN0N0RWVUWTU2QWJjNUw5dyUyRnlvQjNWQ21UYTIwdnZ5SUtQR1lXTVZwYkp2cWpucEppNG05d3QyRGFUVFhGOHZBWmpXem1ua2hjV1AyemxPaFBpSURycWw3cGIxc1lieWlZZCUyQjBtdzBGTzN1WWtxenlJUTZqWFBrS09pMTlZWjVQaERJJTJGTWpsV051JTJCZlpaclBRd0hpJTJGJTJGMm5SZm83UzlLS1VOVzFiREdrJTJCdm41dFhNam9zWnFSTHE1UXB2cFlBOFElMkJubU1WazUzQ2ZiU2UzR1EwSHcxV01UMXpRRDVJdDNqRHFvUkZka2cyQ3lDUTRDM1o3VmQwT0hJRDliMCUyQmU4eDlQTlZJWWtRYm11dkZhRnZLOGslMkJDSGZ2cmFGcGxCSkxBalJKMUdTeHhZd2llRUZwbzhJRmtrRzhHVUYwRFJta0FzbHJrRmNVanBkWVNWRG5BWkx2UmQ5UnNIek5yVWl6NDR6cUFNMWpRTEJwNXpJYWd6MndQb2RUNnd6UVpuRDRsME5wSGNSVEZuRXg2YnptYkglMkJtRnFnSFNxJTJGUUhYb2t0MU9sUWtpRUFYUW8xdllWaHRXM0pEZDJYeFNjalVVREVqVFpMTXpwQmxEM05TOWkzYWp4ZDBqTW5ySUpnd0dXMEQlMkJtUiUyRjNieGVFejIlMkZyVyUyQkN4akRaNGhaVldsdGRQJTJGczl0ekE1Z1Y0bHNlMVlkNG5HRE8lMkZyaHdRSDFoWmcwWGFYMEVlZjRVZTdmeXFlYzJKd2R0NnIxQldvVmk1VzhKa0tZaHBKZHdGdGN2N2VRWjRLSUpvUWZlY29Xd0QwSkdQYzVEWGVMVHdpRWxuQ2JCUFBrVzAlMkZEOVA3bjZvMFo4UzBhYk8xcmd5TFJTU1BtcWlobCUyQjZ6WTZvYlhubWkzJTJCOE5sSmYyT2l3UUQlMkJoMVE2c25EJTJGOU03c0FvNTdLeSUyRmclMkIxVTgxY3dpVU1oRUxWMXNzTGdYNnpaZGx6MGdZaEdKbEJDY1hDT0pZT05lUW43SFpNMU8wejJpOEpkY2R4M2I5UEY1Rms5JTJCMiUyRjNqU3RzRjZYMWVreENEaEVXcEZDWUpGcGZzcG5DZDJJeHBoYmNCWWprSnp5NmUlMkJXVjk0JTJGeXowc1ZxdTV6Z3lRWkRFSlhGTFBnaGE4M2wxV2ZwaldjTlU3MXpVSUVNQktCRnhVN3ExbiUyRkVWOXRCNEh5ZUdjcVBrZXZJUERqNGVHJTJGZlduUm9XWDBEa2wlMkZmbXd1SmViZ0pndzdRQlpDWmxnSlglMkI5dWpZTkpFMU9BMFQyakFMY2xUdzNOTWVaUlBxTUNnJTJCdFJ0OFgzY0ZYOUVwaUtnMnlZS2tOcFM1V0ZpOU0yOEVCcDhkQ1BmaW81aXk0N0FXWWs4ZDN3WHhwdVlYd0ZZTTRFdlhQQU4wcFd5RjJ5RnpobXRKbnVvT1NNMnlEUWpQMEU5NFZPbnlMVWwlMkJmeXZqT1VsN2lzM3drU3N3VmwzdUtvSjAxcHBER2hQUk9uVmJrN0szdjlFekdtaVFIUlVmTkVYd0FHQ2pHNjdxODE4R1dnM0N1eDhFRFFnTmx6d0h0SUxwWjZ1SnEwRVJ3Sk96WW81WDZ6Q2JGSGc3SWE2OU9DYnpNZVJRU0w1M21EVzBhd053ZWlzUGJZZHlNJTJCYVBhcmhEUE4yV2huOFpmTDF5MmNKSUx1UjBPSCUyQnRQa1ZjcVFsbkozUUtZNGhjaTVnb0lBWWh5QTdqNm8lMkYybEZPbFhXRHRxWlJjQTVKa2xIbjRvMTVNViUyRlBKZWFHTzdadzQ1SmFYVnJ2YUZKM1BTaEFrckVnM1NGTlk0S1VRSVRrTGNjZzJhR3JSZHpBNksyZjBjRjFEY0FLR2RCamxiMzFkaSUyRlFmS0QlMkZNYlJEME13OEc5Q0RiRG9RQloxamNGQ1dvZEd4Q1kzMlhQa0doVHlJUVJIRnolMkZ1Y3AlMkY4OTFjdjZmWWszV3oxREglMkJlTnlsSjElMkJrcDRJR3JNVm41eUFpZHJ2bkxwU0R2amxzenRrRlJJNlE4amYzMmNVTmVGSnY3eEdQdCUyRlNackNZbXh5ekRpRFZTcTcyTXllMUtTQUQ5amtQRWI1NWZRUE5CJTJGbWk5aU8yOTJrQ3BtREJOYk1uZ25uOEpmcWgzMnJ0RVJBUm9RRlRIblczMWtEN1dsRGJ6WGFXc2ZUMGpselVoSkdIbW84alVxSHFpVml1MFRDcFRiUCUyQklCWFpIbDFRcExsSGNSWDZWJTJCT2w4SVlYM29xM0N4bmlubllyQnlOMWZaMGZkZXFwVUZkRWI2RzVqNkpKWDd3NHhtNnlMc0o5b0diODJ6SFZLN2RPJTJCOUxTZ3pxcW5kVURobVpkZno4RU5mTUZmS0slMkY4UXBWcFlmRzVPRkRCQXJyMHk5U0s3aU5yaiUyRjBlcDNPQWRwT3ZIQVFKYVBVb3ZHenpyYU02JTJCaVR3YXdtWUFkcUpqVjk5eFplUDJmOTZyUWRGV21pc1ZST2xPR0xsTzhoUGRzc1lOUHlKYWl5QTU3dDFGNzR6NkglMkJRSnpIc1FKOEljeiUyQnBzNmEwckZQbUhpJTJGSWNiN05TOXU2WVNTYnhOQkNBcWlpeG1SdiUyRkpMdWxFQlNBVTYlMkZiNUFLJTJCcWZTaFRsNTBaUGJxZmpOd2dmQ0pzQ0RKWkhHbFJDVnYwS3d6ZXVkJTJCY2J1Mmp4ZWZoREM2SXpkVjM1c1RnNCUyRklldCUyQnI5UFY2YTNsQ3RLYWlxVUd5OFM4UXlPano1NVFPTnVGRTFRSHdpSVMwemR4RE0wMGg0Um55RFlpSVVUYmY5WnZ0MzRVN1R4b2l5ZGJpakQlMkI1RDBNeFJ1MmdUdzczd3BXSDBJRCUyQmdrYSUyQmt5MFNZTXZsVTZWOTl0SnZacyUyQnRKenRab3J1SCUyQlk5dWVyVGV6TE1uOW9mV0VHVmlhVWNwMVM4JTJGbWlEZ2oxOFFDQXJBJTJGcFlWM1JHNWl5cXBOSzh6NGslMkJYcUVZeDZrSDRLQWF6TnkyalB4WmdDdmVRaHc5SDdQNzFMNlJDUGFmYUk4Zkc1TjY0STZpZFNodW1YNHBpYnRJYiUyRnRPdXJrTk9TbW42M2NzS2pzUEdLTnd6RDhLZ09PeXhmaE1JazBaRFhSWWhkc3hqOHljZWFnNmdzaVA1eGlEM1hnUWEwdGs0T2JHTFpsSlFyR3JYM1RkJTJGUHVFV2FhM2d3SEF0JTJCZjJSdThIaUk4VmJ2ZDFleU84ODl4REVZcTBMdCUyRlF1V1Z2SXkwSWFkODRxdTFtMnV5Z3hvS0lBRlpXc0tIam9oVWlGJTJGSyUyRnZETXEyZnBxMWZUcEZia0ludVRyYTdkWWt4VVZYZHF6VXUwbk5LVm5Cc1c5UG5Ebmp1NEFtNnF5VUhKdXJlRmkyUU90RnFBdE96Z2Q5dGplWDN3JTJCOGlOeGlJdE5Nd2JxY3NTS0slMkZCUXM2c2F5S2NVZHJsNm1qWVdZTlolMkZpR0hNJTJCeTZnVnk4eFFqS1FkVWF6eHJDU0ZDSGpMa2tSRUt5UndhR3NMMXZaVkFUeVdzTXlNZjd4Z2twTUp2aGRnb0plTjYlMkIyZ2F3aFRrSXNjcDAlMkZvRkFOY0toQmg0b25oSEppTjJXaFFZZ2FVVVB2TVkxTGclMkJrMGJkS2x5T040YUJmRExEVnBpNnRWWVFXWm94eEdiUyUyRkpLcGlJdElGZVZVNUtlakRMN3M1RTVjM25PbVA4NkZ4M1B5eVZrNHpvUW5IVE1vaTZuR2RGU3lHRnhvTHJSczRjQUpTWU15VHp2SmpZT2h4Yk1wRFBHZ21Tamp1WFE5UnVYYWNCODNTcDg3UFd6MEFhTkJlY1gzb3FVODBNZGRkbEhIaiUyRiUyRm5xc1RUWTFIZnVuQnolMkZWT1R0ZnZ2UHglMkZRSCUyQk0lMkJKZWY3UDU1ejRkaFBnbnA2aEZrSEk3UW1RcGZDNnhUc3F1aWtUU1pCUE4lMkZCSGhiUHpFQ1BLUlZxZU5HJTJGR0RETDhNeWdxWU42Y05ZWW5LcFZIM2dKM3d1UUt3YTR0STQzcTc4JTJCMzFRUTh0T1VNTiUyRkR0V1N0VEpCOEFXY0taZ2ZybERjU3d0SWxKU1lQSkdIOTZNc01VYWRsdDZYVDdobjZJTm14TU41RGczJTJGbEF2U244JTJGWmRpdENvQTVWUjJBYW9jT1ZMSkh4SldOSFVHMElXM3hJbWs3QmlMMXBMeGpZWnZDZkZpM3IxSmk1JTJGMDhZRSUyQnBQaVdLMTRTSXZpZk5wbFBRTiUyQllESVg2d1J2R25pTmslMkJXaVZPMHZRc3M4V21WWWI0b0QlMkI3amY2UnJmbTNZNnZpclpHSVpPaTF6bE9LUm1DcnRZZmVTZkJ0eDclMkJzTUJ6bzR2dUI0Zm9tRUMxTTN0WmVvUXVxd2hzZ2p6UEJONGZxZHg0MWNmWDNxZXNId3JqTUJsRW1Fa2VxWHA1YyUyQnBnemMlMkY1U2ZuJTJCaGtpVzFGeDE5bjIlMkYzQmNpc1pTcHJEUEtveUNaSEpxQnJsY01HUlgwUERSMmtGem0yZkR6NGhZM0R3TVZ3TVg5eUYzckkwbUltd0JYY3BwT1lGZzFEZmxSbXN5YmVlbTRxJTJGeVRjWlV0Rmg2aiUyRjg0VTE1JTJCVTVkcGVpd0dBbEpTTEFRd3FDMTZxRThyNjVKN20xNFM3RVpZZjF4ajdhJTJGJTJGTXpYbHRQaDVGNTlOOVBWbFZhMEk5aVgxZENUNGlHbzElMkZGMEZCbXowOEQlMkYlMkIxdklGNlV3SGhBeFFrcFpsVWlaZXpzZWxIV0xPRWZUZ1N2bDB6cWswMEhPMSUyQm94ZyUyQng4SkJJTiUyQlF0bFg3ekVNR1kwNjglMkJ0WSUyRjBUQ2h3JTJCMm05ZXVTRWZ3VGx5UnB6SlVSJTJGNGhVZW1MZVNKQVVmV3lTcDR3Qlo3bTFOM1VSZFMlMkZaTUdsMndiJTJGSkkzN0FKVXQ4bjJjZkRVUzNhaDhNTUhwSlhNM2RRMFJvbFo1Tnl4TG5zTyUyQnJIck9YUiUyRklZRCUyRmRlQndnTm9sUVdYTE9uVSUyQnZzY1hPS2JmUWF6NnVSQ1ZtNndqVGglMkZSM1NCS01RTDFsbUNrSmU5VlBJJTJGTWdwNE8wNGxGbE1vZmY3V1RKa1hHUVJxUiUyRnVSQkRLUUxVWW1uTThzZXl2YzJPOFJoJTJCek90JTJCJTJCJTJGTDVyTXFlaDgxN0xRVWJuJTJCSTNHbSUyQmQ1N0pQZnlJdzBHJTJCelQ5T1dvdkYycVFrUnBpMllINkNMalpaJTJCMjU2RjFTaFk1WlhVM1dtY2huRWclMkZFSk9WdHd1T3VnMEUyV1BFR0ZUUkV4VmdyanFtcHo3dWE1bXhmUlV1cFpNYm1zbUEzVnlFTEZLd2tESWZZZXlNaFkxZzQ3ZVdOYUFBcHFGWkxiN3AlMkZHMzdyT2xGd2Q4Q3BQb0FXckd6UHg4U0lQJTJGUW8wZW5rVTJQNXVnSzN6ZDFoUXhndnlpWGhNNmpwbE00bG04dTZSTlBxWUN0bEdQbVZHbWJYeGR2U2VodFZ6ckglMkZlSVBDdXprbTJRQ0x6WDZyOXV0SnElMkI1WjUlMkYwQjRiYmR0WTZvcXhKNmYzcGNxdmduZjhxS1AxbjVQJTJCbVZ5WW9sWUE5OVhYbGVKcDNGaEFOa01vcVhEaktCbUpaJTJCZXp0SjRYOGcyNzlCT2lUbXMwd2ptSWtGSTRCcG1hTFlhcmpKY1ljRlglMkJZbXFXekpiMjlGNXlxRWRTaEc2eGZsaXdHNlg0YjJmVmYlMkJrUmZ6cFJOU0clMkZzJTJCNkhxUnd2TFBQNzJhZXFiUjVhY0MzMm9hOWwwd1l2MTNqbUlsMWJsVXZaaVJNWFdDVzglMkI2anRwdEQ2VllEbmxBQlJBMnoyTTRkTVB5OG04WlRMS1VlUzZKVDJEa0lXTSUyRlNvbTAzMmZVUCUyQjY5RUViaVB4SmIxQkVkZThLR0JMcnl0ZXJob1dzekhoZHJDUG91R0d5NDZIdzYybEFqZFhMSUwxT2hkZHRteUhyViUyRjBhVUpVNSUyQlVuQnVBMkJ6MmslMkZ1QTJOWjIlMkJCcTJYNlJxVHJ1S1JVZ0RMclhHWFclMkJZSGpkMURHYk9NQThLblU5ODBReno3VTRhTzB6JTJCZk92VFlrbXp6QVdkOElWRVNiNkZLcVY5VzhwZUZTUW5XVGkySkJ5enlRM3Y5UWolMkJyeFlNV2RyejhtQ1RHNWtRb1pDS285UUp3bVBaVWh1cUVBVTYzTWV6Q1NzcjBLNlI3RW9xamwlMkIlMkJTJTJGalFXeEpvUVBNM3NEMEVzWXZPWkVLUkM2dXdsTjdvUDR0JTJGN2dkYXlsSENOaXBYWTJCUW94U3dpVnpjSWxsa2RSMTk0N3ZTVUlkJTJGZTgwRTE4MXM1bW03RjJKRHR6Wkd5WSUyQnlSRlhyeElFRzlraHBFenRFMUklMkJobXRGWk1HcENEMUgyVVVyb0pyZUdlJTJCM3lCaHYxMjByOXlJNTRRazB3cElCT05PcVhRSlhCOTlFVGo2OHAwTGRmeDB2UE1EZ2dua1V6d2Vvd1FkMzBLdzFBZW1xcGl0NWVXbWVFUWslMkJXRkxHWXJmaEtSRHY1V1RTaG9reXRBVzVZSVE1M280UmJidklBczQyc1BHSUdOVUslMkZRSSUyQjg3Y3ZiJTJCUkMlMkYwcDdtM1dIN2U1NU9QSDRHU0YlMkJBSjFidFZKUFNNOVlnVE03WUw4MEJqYkk0VUFTUUNMbUVwVEg5NXVkQXZJbTBuJTJCVGcwSHRLb2I4U253SU85M1E3SU9nM1FyYnEzUE1vc1dBRzlRT0RjemllVmVDd3FIMkd0N2ttb0pVUTBaMFR3Z3duTmJVQkhCQURvWU5zRU4zMERFRWtneGhORUpwdnF4anBXZTR4VExra3VJRmxDQlpyMiUyRnpodGdyQ1ZzU1JCODdsRXFyUHZTd0VsTWpCaEZIVE1FcHJrbkdlNkVORVNMaThjQW5yTHpaWWQ4bGtua0ZPZTlYS1VYbnVPT0o5V2dpaFphRTAlMkJ2UlNIMkRPb0ZaVDVJb05mRmJWWkh4M1dYJTJCRVMzb08wV2xIJTJCaDF2ekhTNW4lMkJXcVgyYjh3cHFyUG9KWWROQ3FZRWpNekFOTU5jMHo0VlIlMkJxQUg4clc2U00zZ3RGdjFnakhONkhiaVBWYmtEN0hZVCUyRlN3NWNFbEhmJTJGNlBaSnpEUlc1TjdRcjNPbVd1UjVlNmZFeFljT0tJdEtBOUdLdmJnU0VucEl2dHh5aW5Rc0pGd043YU5TVFVEaDJ2RHNnY2czJTJGSzFXODdnOXNuWnYyUEdOMDFwMGVsUVdjWE9yWHMyVVNOd0Rmc1lacHo0V0Z6bW1MOEptOFNySDRmbUklMkJQRmprVzRsWVdEJTJCaDlKajdjMWduTUxLTXZBYXFPeURPSUdocXN0V2hWaThkZ2dJTWtkTVRxJTJGZkV1Nk85U016aWtQZ1paUEtwNHlYRjl1a0ZnVFo4MFlYaktUVUJ6MkloZ29WWjVJbnQwWFhLOThhTzJSJTJCMXJXdUM5NVQ1U0hDVFdlVGw2QlpYblBXcTFDTERJVWdKJTJCZUh3NlNLa0huUXlVS05BOEExTmlWYW5hZXlEcWxaYkFFWEs1bE5mTTB2RDY4Qk15QklIYVRHRk8xVjVZWXVldjJrayUyQklxVnk2UnBlRDRUUnBvWTVoUEVxajl0NngyclFjSkpBZlFSNGVTS0pKYUtNN1BIajFLZFc4dVB2TU9tdkpKMm5JQU9KSE5pQVglMkZJVjVWM1pXdEdQVHVOaGhSJTJCJTJGZGljaCUyQjJzdWNRbXEwdmNucTB5U1FYJTJCWHQ4SXhKN3JPd29ha0hKSDNaQlJwSFVDT0dTTEtpcDFYbmlteVp2bWxldUpLJTJCUkdnJTJGWVhXJTJCZVRoU1BSOGlldkFYZm12VnRhMFJVTFdRN2Vidk9UUFdzZGhsdEdFbSUyQjROc2slMkY3TUtVTjRMNURGY2l4bW5IOUJXMlllWm9TcXlrWnNkYmtwMVhZMWdXRGw4JTJCRnNMTndpSjBUY2tobmlKSHFLQnJmV2VBa0wyWXJTT0xxRWZpb0NoaHhDZlJKNTU2eHFsMUFmdmFzdVd4SUNpdmttdzBBVkNMQ2Q1MEg3NXJsUWFMS2tHNk10UHA0WklSZVoybTlxMzZtMkh2SWNLSCUyQmc4JTJGRHczZ2QlMkZSSTA1VXJLQXN3NU9EU3JIeDklMkZuaWQ4UklXSEJUTFVJRk00QWZFYyUyRlZBJTJCdkxCTEFxSkJWbk1xdjBPTjY4UWlKQW1DU3ZmZiUyRm5FdDY3VzU2cEtxRHhNekdhbTJETGM5bGltcUFsSWMyak0xenYyM1FTOFBod3NSRTBsZ2NCWlNGUmtwYU5UNERiTyUyQmpMU0tjMTUxVGYza3RSdXZwcnRDOUNBTjRiJTJGbHQ3OFFpTHFlMjBtMVdVYXlqZURYc0t5MUN2RUFFOVBSOTZWMDBnWVM0b0Q5SFV2S200VEZyZVdreFFMQkxnU0pGYWlRdnBaVzRFS2d0Qmhsbmp1TjQzZXZMSnhsc1NYaTgxR09ES0NMaUN5VXRYY1ZMN1F5dEx0OGJMUGdITGtnYiUyQlBiWiUyQlNBZ1NIbHdLbUh6RkRRVXFQZW5TbHoycGpGMWRFTTUxeWw3ZElmSnJWZFpQNWtCUWZvMFkwYzVrOWNZV2F4enZXTjk2V2FJck1qY0hraDgzTHV5WDVPNk9TSVgzallJJTJCU09vRFhhQnI4bGlMQ0FSWkFzV1NiNW9ydUdaZHVNSEFtSzdMTGc3RFE0THlCMjIwQzF3d2hGd3dKeCUyRiUyQk8lMkZydzZIRzVJRzElMkJadFROSG1Bc2JvR2FVSW9sbW0lMkJ5cjdxa0NVZ3l0OWFDQWpoSGpYWFBpaTJjTGRidkREQjNkOFg4M3JkaVIxJTJGQXdIUlYlMkJwNlA5NkVOQkVDRnJ1cnRUc1ZPUjQ3UkExalIzVENiQkZveUszS3hHbzczSzVsdjkxckUwQlBaTDNtVXZ6TTIyWUdlYUxmb3F6VTRGRzRQUFRFcElNYiUyQnYzQkY5MyUyRjNEOGUlMkJ4NXNsUnkzT0NRelJRSXcyelFuYXp1SGdyNkZnTUtET0ljRG1ZbnRJOWFvaHJkZ1JLdiUyRk1mTHRuM2diNjJ0YURkSHRrSzBoM2V6eUdkUk1mQlBwNDRwN0F1QXo5cGlpSThXYjBvT0lPMDNyaUdkdVdSWTlwQ1dxYVVSaWFGZ256S0N1VGI1dmclMkJDJTJGeHVUYUo1c2pTbXNDRUhrUmhHTVdNa2wwMUoyJTJCR205JTJCb3ByWnlUcXlpOXpTSGg0Um5aQSUyQnFEclMxNVdTdEt2TFNudjUxZFlsajBBYlF4OXNKVG1qcG0wdmt6TmtSJTJGckFwTmpEMXJXOUNOMEN3cnd5d3VZZFdQWFRNWHB2YTFMRW5kWVlTams4UlJHVVg4dGclMkYlMkJrT1kzNSUyRk52bTUlMkIzT1kwbmJMJTJCNUxyS2Vpd3hJY3daYnJ4clVMTUJoQSUyRmFodU1aV3k5TUJralhqNmdQOExlc05rU3FITTk3cWkzVExYMTFJaFRvWElUaUc0NmclMkJMZ3FRRG12MndwbmNPOWcxR25FVHZ5dHpub09rJTJGYnl0SkI5UHZiUWh1VEolMkJwdHFIVkVyJTJGZVFCNVpWdkhCVyUyQkpKOFR2RTQ3OE1nQkVtT3NtRCUyRlVCU3MlMkJwaW9tMWtoOUptbWEwNk5hYTVubldkSDBtNzdpN1huYjY3dyUyRjJDRUozM3l6SllmOCUyRnVBMGdQUFo2cmdWSWMxdFA5OEE2b3JmbktWMyUyRnNvVDRqTDlmZDhUMzVrTUdZa2dEZlhLWG1SeGhWVHZqdm43UXR4aWtLalNoNTYlMkJsZ0ZWNE5zV0t6JTJGZFFwYm1kbEIxdWtlTTluYmJoRzAxSSUyRkpXczElMkYweHhkaWQxcjJzcDJCeWR2SHEwNVlFdGQ0dDhoa3ZHTHNFYjVaeDdqYzlpMUc1Mm9KbWhaR1hTVTNGalZPSU9lVGZFYSUyRllaa01ZRTN0MVFvWDFuenJKNUViaXlSd05XTHY1cXhGbm1ERXpjNkJUaFVuUkwzM0x2eFlmZ01pQ0olMkJXWEF3V0VXYW1YZUtSSzNhQm1ZNiUyRmxrRkxtVHA3dWFHbXklMkJLWHhoS2pDcmFLRWlVekdwY2YyQnlVM2EzbWJWJTJGS3Q1cWIxV1l0Tm9SQWNIUTFueGxtcUtTUVpYMklLSHZUJTJCYTFTOWxaNVBvTUdiVUYlMkI1andYRERUMXBqTUVnJTJCUGZnT1hxVmpjcFZnYiUyQk9hYVhpS2FlQTRwSERQaTdkZ3VJczBhalN0Y1FhYzhWODlIcFZCNlFteTNkMSUyRnFIT1RtVGFSTHhlSFllMFRWbU90RkclMkZXWU8lMkZjUDZJRFpTb2xZRDVSWTJxJTJCJTJCRWZ4NUVQMyUyRm5GangwQm9kQVpSM3B3QzI4TGtZUXZBZGZPdkdUcmZ2UkgzOXJuWklER3luVHpDUmF6NEpjMTBDdms3WDBCTFZKTjlrRlRtYnp2TUpUMEJZQk0zeWNrS01CcHlqbUl1ZlhGcjB0TWdoWFZiYmZISktJRUZBZEJLJTJGSlJHbUNVWlU5eGRMV0ElMkZtUmh3Y0tUdlRVWjlFWmNHM1dSaWI0ZnJLN2hVMWtEenVvbVJBNjZReHdOMDglMkY2V3ZNM3B1Z0htR25HemtQMkVtWSUyQjR4c1RPJTJGNXRuS0lCa2RTQVF4enpnOU83QzlJcm0zanRUV05yaiUyQkpJaVFjeHNoQUI3T2tWJTJCZklNdGNjQm9NNGhJVlNNb3Z2VElMTjBJTmhBdWwyViUyRiUyRiUyQlBKaU9HRWUxblc0WE1XYXk2QjRBdUM2Wm8lMkJwVGZudFdFRmx1NTlyeWRSRzYzWSUyQjBadG1MSHFjNTg5SWxSMGhrUVlwTXU4ZElXbCUyQk1HT1dUTUUlMkZwMUtLUkpwazc5NVowYjE0eTlVTG9pOUtVbWJTak1EYlJaMlM5bVFaNE54dVo0ZHltalNXMUYyY2x6WjNRbUl6dlo0Tk5meiUyRmolMkJhNjdFUDklMkJqb1RQQjR1MUg1cGZrS2Zjckp5T0pySiUyQmFXRFdldVJOeEJZUWVxd202S2NhQk5IZ2tuQyUyQkhpakFLWWNXa0hZJTJCMG9XNEgya1dzc1I4N2J5RGdJeUlTSnVVZzFyRWdmVVh6dHpudWNldXowUzN1VU1RM0hRcENGeHVHSGJtWnJ1NnFmTmFHejJBR0pYR05QZHRSemIwNVJ1JTJGZXg3dnI3Y0RENFQ0SlBVSkZQZXhFejMzR2NpUWZLUmZOeFNEMkZhZDZZJTJCdDhQRG5NM2RTN1NraUtvQkMwVHNrR2h3SFVUaHRzMVVKdm13NlhnNDlQRjhIT2ZFTmtBSTYlMkJvQUtxQUJuVzAlMkZrWHRRRXolMkZ1WVJXd3ElMkJUcVhrMXVmS3ZHZ1NXUlAyUVpMSEtiJTJGeWtDJTJCV0JDV09XR3NNUCUyRlFFRXRSZkJPRHhpMnAlMkYwdWp6Zk40dnNHTU56Y3VDdmg1eXlBR1QwaEZ0SmdLMyUyQjRkeTQzVG01dmJuZzZhRiUyRlRrUGtPenFhYWZKVjdjYnVsWndQQ2VDVlhRZTRUNFppaTh0SGRCUFZ6Y25mc3lkbFIlMkJCUXZ3Q2Z0a3JlJTJGT2dnMyUyQlVlcUFtWHMzJTJCTTJxVmFQVVRDRVZQeWdGQlhCU0d0cjRmYzA3VmxyODRPOW4wY2tHRDAlMkJmJTJCSVU4VDBlTWxudVA2cnBHNEFTZ2RPb2ZGSVBya1VjdWE4alk5S3V6VkJsR0JvYTFpZCUyQks0S0hHTUhKQkhoeEZhZUVmMUNlbmJBa1N3dHNNSFhrVXZYc2tReVNrbyUyRkpTZHZUckFSZVJndm5iNHE4TmpCNHY2OExSWTMlMkZydEpOVEVmT3VUWnFEOWFPZGd2dWdYTlpMMEtFZSUyRmNGd1NYTG9wRnNuQ2xRaXl2VUFEMnNidlFjUVlHbWRtUmUzV0tKWk1IOTdSajVmazBnazlHNjJNQ2lpOTBWdGZxU2xYenhoRDJ1M0s3OHRlT3dvMjdQS3hmeXptalIwTyUyQm54bXhybUxaVTFpSG9XTG9uZWdGQm5acTl4WERiTUl3YUVJU3MzQlElMkZYQWFiUCUyRmZCcjZ4dmxWcTBYS2xYQm5KOTlReDQ3VDNMTEs5NTdMRm5sN2RsJTJGQmhTQUNNSnNNcGlSbG5iSnZSUjdJNSUyRnBCRzRxMUtMRnBZamVWbjFLYmVOJTJCUjFVOGVZZHNoREluTnhCRjFtYnJ6NUZBd1oxdlJYYzdSM3lGbVZUSDVDNFQlMkJLMFNIdlJma2RKMVklMkJSY0ZtUHBGMlZocUxqbVh4bWRtV0NGVFVwTFFTOWV2RUxZeWNlbkJ3dXNnc2kyMmVWMnhES204eXkwendDTldDZ0JtUm5oUkFFMmQ3OU9tNUZsbXVqbTA5N1JhYm13R0FhQkxmRzJJR1RJWGJ1RzJnRyUyRmIxZzR3OFBOc3lYakg0VXolMkY4WHFKaiUyRjl2bG5zYXdKUXMlMkJJYnNYNDlSYW0zY3VYUnB4M0ozRyUyQjlQZEFxa3N6QTVQbHZRUUNlVkM5WmFqdWElMkZYSmthV09wNWNoeTZzbGpSWEw1Zko5TElpYktTZDNlakhVcjdSMVAlMkZSWkNiNWY3V1ZTbEhMQU9mJTJGaVNHZEhHQUZaZkRDVERXZjdOWEx2a2Y2bjVGUjglMkI1blFSQ09xajZrMlBsZlZkZGdnUUl1OTE0MjVTWFBpOXh0WWFuaFJTeXVwVElXVCUyQmtqdjlZbUQwaVdOcUJpQU9LSW5nUUVRcld6ZmlaUXVwSVdYRWVPQTNzbFN5SDJtWHBNZWMyd1lDUFZPTUNUMTlSMmE2aWh6UUlTTE9YM2V0eG45Tms4dmVndSUyQm9yJTJGeCUyQkt0OWZEJTJCWk1Fa3lINXlkMEhXVkdtTUNqaFRjMGtSSE13VHdzcVFHSGpDbUN0bVlWVml5RmR3T2J6JTJGWlo1dDU4OHNZR1pya2RMSnZ1c3g2dmtybVdnZzNqenlTVDhrZGVkZ2FhRmRmcE43S1dmNjRIYSUyQmczM1lxaEhyamZzYjFlaXVKV1M1c0NSOTlXQjRpMThTRHN4QXhqazFUVzhIeUE2ZTJxJTJGcnVqajUxbFBSOWwwMmlDNU1DNzk1MTRzdWhsRTUxUUxwQ2c3RVJnbnVFTGhPdFltcEVTMzBWanhIbjJhJTJGJTJCSUZQZzVYd293MWw5Sm5SdVVCdlVuUWxDJTJGYTRuM3JTYiUyQkZxc3dpU3ZFWDFmemtLck1qSyUyQkRWNSUyQlJRZWVmcVJGczJxNjd6VkpWcU51aGpqRzh0M1c4MkJvM1FieFE1JTJGc0M0VzFPUVIxZ3FoQjBsTjVRSVpJNjVpSU5CS1hiQTRMR2ZlS2YlMkJ1SXNXWlJwYWRDMjdiTHhhV0ZCTFhWVURaQ0dYU21vcnVDYnhWM0olMkJuZ21hTGFjWlJrUzJoR0I4RGY1VXNFY2VMYlhYbk1tS2hyYk5IRDZPT2lQM1BwZzdpdzlaODBSS1pST29qWm0waWNjV2htdWFYU1NZOTczOWp5blJabEFHaURpSnp0TSUyRkdOS0Zaa3R5UkolMkJ0aEk5RXRVb1JlU0Z1MEUxRVBHSHp1RjVpbkQ5WU12NXZKeWt2MEFJQ014WkJWRmY5SFdqazY1M0pXQUFRRFdoZ0lKczMydjhSNk8zUnZEdGc3QVVDcGZ1NWpHSmt0VVA3Z095aW85OFB3Y2cydEh4alNsZ29CNTVtMjVucGxBbW9jekdOYlpuZ3gwOWJuZkwlMkJrZnljcHBHQWJndVBXRFVQaUg5Zm9RbjFvMkVsblZmZ1h4V1VSJTJCZzRDTjJLM2hMNnBQczBIVG96SFU3SlRFZnNpVTliMGhLMVpUalFiZiUyRjk3NU9SJTJCaFdXVVFPYTloczVjRW5ZUG9HZ1p0dUJxOHlPYkZQck9QWmUlMkZ4QTZPZDNaQ2wlMkYlMkJoM3JLa1RrcTJvUmpXRWJpSEZTR3haNWkzeFoxQ295cnZERVNXd0c4enAyY214UmJJWDFiemlYJTJGazc1T0ptU3RONzBkd0dsUnpZT3NIakRxZWhMVmtscFNhcno0M21XZVVBSmlGUXFZRURwYlBIb1RZajJtZVVHVnhBWjFtQmZqQ0RlZjczJTJCeUh6RXNsJTJGbE9IcWYxMXR3RWdyZVhaU3ljJTJCN3pJTDNHaGFUZW53cEp2bjNsa0FwWnJGRE94a0YyR1NQNFE2TXc1JTJGTU85ZEZQRVhIMHN0RlFFaThwVWhGbkIyYjdqVUcySGdYJTJGMU83R0RmT05TNzZWNU9MQ0pXWlVwNHFJYXd6QVpXd2JnRVZObnh1SWx1cjRPS1pUdHZMUU53b2hzeUx2YTVGNjh4M0ZQM3FMTEVPelZsTUpMRTZEalZCRVFaTGpVZzd4ZUxNZTZqc0JvUlVTZGZpRFYwVmJUS0FqNUEwZUxqNWRQcURmOEhpWjVuV28lMkZFczlQJTJCOGJMcjdtSyUyQlAwUjFERkNWeFA3MDZnNVpORmFDYTVTZmI5R3FkbVBwMUhFNTR6JTJGN2ZtajRCQmVQM1c3ZlFGUiUyQjlaZlV3YjBqQWlsdGUlMkJBU2k2czJESk45Y202ZWhhJTJCUSUyRkFFQVQ4NFpCSmJtdXZCZmdKSUFJZkVjNkZ0JTJGenhkZlR6JTJCQXkzJTJGWWZPQ1pqRkhuRlBUcWtFQ1FTT011WUdDTHE5NU5Ec0d1SW5oQnVXQ09iZ2ZHRzhvNWYwZUZ0NmZOa1MyNXRURTFkaUhYZmJaZGhBMmFIMXJxMVFYekoweEVrNm42Szd1NGtYZFJaZ2lpc1oxMTZxVnpWRGRPcUowcXhEZkZYY1VuS2RIbVBNMEVia25kOUVOS3NkOXhDMmIxVUNCOE1TJTJGbEYzYSUyRnVDTTY5bnNROWtZVFdGdkdKZ3Q2eUNIMSUyQnYlMkZWdkgwRUxBMFBlQWY3Y0c2QzFGZlN3d2VsNEJDNWFVYTRhNVVtb01ETGx3dnhZRTd5QnVKbndhMk5RUEFlcHdERUp6cFI5YlVhSnZnbWRHNzJwN1A3ZUhYM3NFY0ElMkJJT2xMdlVyY3ZzUFlFRTlXJTJCcVFzcm9PaFVtZm5rY3dXVUd6VFpCbk5GMXRTaWpNZ2V1ZlpIekhuWHZmVzE2aExWRFNydWx4YmpYOUpxTHo1RlFER1A1VVFjcVhoNzZHcXF3bnF2Z2tMSTNnOTNUJTJCaGpoa05MODUyanhxMXllTldYJTJCZkhFcXRiRFlJUzRZYWIwTElzWXQ4a0hOcSUyRjBpMUlKZjNRQ1QzeGF3Q1RWWU5ZRXNLTzFSJTJGJTJCQ1U1ekYycjdUZlk5dWt3aFRCbUQ4dFlFb09QUDFlNVBmWHZlOTh0NmlrZTI3ZGpVM1NERkJSem1HclNUSVFLNmtZcEJTWTUzM2VQYWpWT0F6Sk5tektObng2M1VXNHFQeUk5Wmd1aEd4aURLd1BadCUyQnVxJTJGYnZGQXkxR0c1cGRxcnltN2xoMU1YRUp1a3g4Uzl1Y1N4VmR2ZWZoY0hDVmg1RGNoSzZWUVkwJTJGS2JsViUyQnRrRXpuZHpqWlM1Z1N6akxtdlI2czY1RmhCenp5V0J2Q3lHNnNJUSUyQnhCbmp0MW1CaFpmMUVvbmtWVEFoaUp3TCUyRnZnR2tmd0NzZUhPalJhc01Wc1RQVUhoZUI4RjFDSHI3TnhNYldnWiUyQnVrdXN5RnFBeURjNE1tanRSWGRRYjhXMlNacXhCVG12Q1dJaVEyUVlEZjdicUwzZjVMVjloTm5wUjE5MnpKNWhXS1RVQ1I3djNzYWs5bUlzaWtjSXhyTDc1YmJIeHF0RCUyRnQ1VXEzdW1aSGZybG4wTE9IT0R1MGRiWThFeTdNJTJGVUR0QVA2aXh2NXZadURlR09zZkpSWjlFa1loTUV4RzlYMkNqb2p0R2ZmVXY1TG9LYVdpUERCeVBrMG0zMmVIJTJGSWklMkY2STB0aGMxSzJRU1FKMVJFdlhMT2E3bEtJa2hHbVNUckVWUFdlNm50Sk9IVmNjTGxzWjFMMzdJQmhDODQ0RGUlMkZ4TGxJeXElMkY5MnBDZDRoT2NtWlh4YmMlMkI4bk1VR0JabDJpbVFia0w4S3FBRnE2cXZvWWJoOXhFdTY4VTYyWEQxS2NoODVOd2lkSnY5ZnJrYkROR1VNcEJvdWJNUW9sOUFrRlozenVyWSUyQkhsaiUyRkNZbUw2N05wQWR0d0hmRmR6eCUyRjlPcTMxRUJ1d3JVTGVQSzJQWlNpQVRvaFNaRnlVZ09DeExUUXVsSDEyMlJPV3BPV09INTFSZndrNyUyQkJ5a3QlMkZMQWZXOU04TTRpcU56ZmFRUzBCd1JMOHRpQVpUcjRpVkJxMDlFT0J0SWwlMkYwRTlxeXJ6TWklMkZrQSUyQmZVSVhuQThRRXIzdHAlMkJ1RTU3ZE1nTExuenZPdGpYd1d3VUJkeXNrWDJIVVo3TEZjS2RGaTJDWjFmVXBtZXgwTVF4MU0zcXZmU0hkRDF2WTJZcUlNVmU0blBUWGJvZnY0UUpaRkVoNXZQdEl2c05DYjAzMlVWNnJXJTJCJTJGaXQxSnpidUVKZ1pkJTJCQTgyREViYURxMDN5bFVHTyUyRjA4SEpVZE9QYm9tR1clMkJQUTN1WEtHeXlhbDZRM3BDbDBBcXhjeVpjOFBLV3hXODVOdkQySDhnd2lmTXI2RTlRV09iNSUyRkZsa2hmdXRDeFMzOHBXRHh1YiUyQjdUZGpFcmNxZDFOemdiOVpLdWdxTnV6VXFFZDVadiUyRm5UJTJCa0hMajZxMUs4Q1ZuRVpuejB5WTVXTk0lMkZRWlhyT3NDZE55JTJCZG50blNZZnhGNDNTa2JZcDNxTjZ5SmtGYlpla3cycUVMN0ZUczZWTmxRNFFVZVh1dXNSeTRVM1YyJTJCeW14eHB1aXRiMHljMUNHJTJCWmwlMkI2NGdOUGt1JTJGd1I1c3pHdzZNWFEzd3lSME84SEhRM3dxVTFaUG03VkRjTUlhSjh1VkVUeWolMkZWTmpjTEhyVkFzRExwVXBzVWEzaXg4VnNzU2NVcVJCRHVQT2E3VDBPRm5DTGg5aXFSNDRub1RGOEhuMG9NdTl1ck1zYkxXSXZveG4lMkZWUlJ1b2dUZ2hhZGRmNWNUVDd4a0hjQnR5TWtIV0lDclZrWlBwSmVINm1zcXpSbTZmOWM4M2dQUk9zVFFtc29nNVBhJTJGeTZZaEo2ZyUyRlRZVk0zdVBkNjJNblRkdWF6dkYwJTJCOFhsZFBQU1BuaW92UlJ5Um1Ib2xieUw4ekIwemUlMkJuSUlRQm0xJTJGb2xaMENqeWdvWG9mcmNDSVQ0SFdvQVFkZGtMNENCZDA5MDl0OXZRd0pFZ3h3M3ZFNEpKN2xFWExJMVNqUFRmTk5SQUgzdFJaT0ZhZmFjd3VyWjdvTFh2SE9NM3V1SDI3TnBSYlQ2aDl3QnEyWVBNZkhjRDZFZkFpbFh2eXBhYk9XMUhhRXVmJTJGYWxORGt5SFBwR08zUkJlRjVORFpoc0tzQk13VVRIN1dlTUM2bVl6ajZyY3BqZjhVQ3hZa2lzdzcyb0QwUDJidGpWTHM4aiUyQnp2NyUyRldPUktxbCUyRlBMNTl0VVVFNkQ3dTZaWW1IcHRPN0VYcEF2VkJZeUpCclA5Q0hiVnIxNiUyRk1XdDM0VjRubWZzV3BWbnh2RjZJMyUyRnFXMWpLMHIzdTd5TDA0JTJCOSUyRnMybzhyUERwS05wTWRPT2ZxYzJnS1Z0a3hIck8lMkZPNXZFdGlVOUlYb0M1JTJCQTBQVUIwb2VZZHNHcjZtJTJCZlp5dlpaSUNVSjZ5UFo0YkJ5RFE0Wlg4dnBxN0x5Yk5EYmtJN3hNZkhnRWU1UERkTEVqUlB5cGoxTHhJRSUyRmpuYTNmNHZvRSUyQlRYV1lDN2pFTkt4OG40R1JnemR2c2FtSUFPclhSeGxlUTZ0Q1F0UEhUWHNIZTlWU0RGWlRvemtBY0tvUUN6JTJGakZZbHUxMHFoQzB4cTYzNGphSW94Nk4xYUVTTUtsdndUZGs0SWhYWVU2dUQ1S1EyViUyRkx4N2lsZ1hsdG1SVHRYeTRPNFdHbFNnM2M3a0ppOFVhZVBHMmNQWWpVcFhsNktqZG5qRHM2YUdrSWxhUk1HJTJCRHZMOHhBJTJCNmN4S0ptbWlURXJQWGNFdE1SMnhIZ2h6VW11WW1GY28lMkZncmZMciUyQnJEMzNCMlZEQzN0MFVybXN0VGdvJTJGREYzSWVKRDBic1Y4R0dyUGlDZzAlMkZPRUVtVkQ3Nkl5dG12TiUyQkEyc3FVbzdJdHo5TmlrJTJCOCUyQlExQUdnSUliSmNKVjFVank5UyUyRlhLUDQ1aXZZdjZ0TEhXVjJjVDdiZjFodkhBUUNDczR5REt1amN6N2pDV3BOakViTXVlb3IxQVd5UUZybUViR3RZOUpMaGhqZVZqWE94dkFFcGtuWHhnNHdMZFdNcUFZOEE5QnNITHVrMmx3ckVQMWdzRHRpSGpGSGxNQ04ycFZwVFE5OHdtNEI5Slh1bmpIODhoMlR0R2xDMXpRWVM2dDhDbUpTaUVUUTNVWDdsMzR5Y3RQaE5LRUtvYSUyQklDekpHeWtCZWZxV2VDN0NCZ3VPUHZYaG9JcU9NOWZsNFhnd2hqc1BpZmtQbVBRcTVybnp4aTZEYTRDdWJxQ0htNEdhYzAzc1dvTlNwRzlBcm01bVNaaEt2dkQ1N2F0MGYwd1RTaXluS2tlZDFaUUJ1WTR5JTJGemROaXJyMVlrSWlBdEV4SmNKbDA4eDlLT0lzNGdaTiUyQnhZTmZJakhLZUdnWklmZSUyRjV6dkRPd3puREtERkNueUg2JTJCc0I5dWxKb1I3R1BwJTJGelZadlE2UUtKVlVFMm9kWFRSMlBYRUlXOVFDbGJ1RUZSeEhRaVRzU2xxdVJZSFJNMjVIT2ZXWmxVNkVhcWlDQXZrQ1pTRUJWSnAyODljOExabFZtR3BnaGVQUjJZVmVoN0ZSd2NQSVB0WURqREJYQWZCQmptZWNKMkpWSmlRM281eWpYRTY1OHY1NkVUSHVDM0V2RTI5NFdnNVclMkY2SmZXaUl1ZEhxdENuNncxRWlCUnMlMkZhVmhxSnlvSGRnM2ZEd0JCZU1pVmVQbm1ZZWNNQlV4TlJjMiUyRlZSMDluJTJCVGhqUERzejdwMW5Jb1ZocWMlMkJRak5FSTV6czYwRTRYeEpJbzg0JTJCV3RmT1lzYmQlMkI1QnZhUERBZndTY2lJeGgzbHo3THg0eXVjZWsxaEd3VDVBdGwxSllNZEVsVUhaa0hBZE9BRUV2aklFaDdoTWJvR3JoZHdrdWFYczMzeldlaldnQmhwYkdDa3FOUXF4ZXhDVTF3SXB4UlYxOGVab0JxaXNlS2haUkFjRmNzNlJMaVZmbzVNS01OM05EbnRmbGNFUSUyRk96MDVLbHJvRSUyQkdMY2tuQzRPRlJCWFNxdVAyOXZteHNYdWtIJTJGMXpoTTNwN1BDQnR5VFFDNTVvJTJGdjVFMWJ2TVhHY3B0bXY4RXRBWWhiM00lMkZhcTdJMnFqVHJYJTJGV3lkaDI0RlBTdFlRSVFlSHVCOERHb3ZEaGN3UWZqTUIlMkY5Z28zN0paMTBNbHklMkJlWXRVRmRFVTZvaURrJTJGRVBxd2tKM2wySTl6V2V4Q29PalJUTCUyQjgzQzAyJTJCOTNZU2NZMmdFNHZOVFlUSDhFaVV5VXc3aG5ZUDMzSlBrTDZzU2JOJTJCdkN2R2lpOGlaSUJVMHI4eWNOJTJGRk5SN2ElMkJZYmJ5SGQ4ZnZkZjFxT0dIRnpOS2xEWUhjMHBFZXJpam5OdmswNGN4aWJDN0pralRncjFaZ2tNMmNwOGs2RHdVOEhDaGN3d0xSeEFFYlV3OFg3JTJCT3d6cVA1OEg4R04ybFIwQkl4MTZ6WG03U0dCZFpQM0dHQ25yZCUyRm5CS0ZHbDVLYmNJUiUyRm9rNVFIJTJGSnIyNThEQU9mTiUyRjJ2dXViVmVSWk51dnFjZHpCdDQ4WW9RUkNDdWMzdkJXT09HJTJGJTJGcEtzWGRYbGUzZWY2cjQ5N2oxajFkZ2xFRWFRa1JFeHc4ejAza2FQRk1QOWF2Nm9relpvUjJvRElSVnZSZ2NSTmExVkxpdUd5N1BlJTJCWFVyb0huNE4yMEdodk8xNW9DMlFyTThQY2tnUjJKbjdPcEQ0Mmp3M09paWVxUklJTFZuWnVSNTE4OGZKNVlrNWxzdWdXa2FMQSUyRjg2V05GNk01enp6d2VESHVXR3FqYWttNmpCcmZLOGdSMnVLJTJGbU4lMkI3MnViSm92YlJqQVRKcEtQTXFXbWtCdGNhc1pCUkVVOFc4b3lXTlFDZnFQdFpNOUNTNUJkUXAzUmhHWkg5R0R1MFo0N3Nnc3BFdTZXSjQyTHMxUDI2UFJ6a0JjN3B4MmZyQ2FzaEMwbTB4OU9tS05mS1RhT3JyNFpyU1pnRXpnQXV0UEdib0FZM29BTTZ4ZDRvSmw0RmEzNVNKQnMxMFJmWWY0SjJod0R1JTJGMFFTZGZWUU9obmJZM2olMkYxTFhhQ2RhZ21kJTJGOXBjREZ5ZyUyRnNDZnE1b1lscVUzV1Ixa0pnaEtiN3QwelFMa21nQ1hsNThYS3NoSktyJTJCbHVwZXpsUVJBV2dwZG5LMVVib2hta0ZzRElxaHBySEFIYW5qJTJGZUYlMkZ4SnZrcXFCZlglMkYyOEFMdkV2SDJ5WFlqdmxIWkthTGNUMiUyRldFd0hSd0lBVE9hNG1CTmZNeklsekFzeXlJdlU5dFhvWUpVeEdtWWhReTl3OW9EbVI5Nk5SblAzempGUG1OdmozUXJjRVd2V0lqJTJGcm0lMkIxTmtzeklGcVl2b2d1Wm1ZY1o2UDdMMGFTaUQwdFVJeGtCU053S0hXc083MHFPdEdOYTlDRW02dmJnNmpQZGZER01pU29weWRJNXVqWnVPaG8lMkZVSFBFanIyS21LODVCWW9ycVBIUWk2M3h2b0ZCek9KWmUxVmRUVXl0NkkwVnlsdnUlMkJRdGlsUTE2aGl5emtMb05QZEZaSlZlc2xqZlB2b3ZUUjVJcCUyRmpZMDElMkJlT3QwMXRyeGNYclhsZnklMkJNTmxSZ1RuTjVUekJkb09JdklXTnFRbGFBcSUyRnRmRU4lMkZuOUJiMFR2RThUb3ZiaWJsVVRTeUJJJTJCciUyRnhSbmc2TkJwQ3dQaCUyQmVIZjFEeGdYSFRITlFxYlVFaklZJTJCdGNUT0tFV0NEbXpiaEdwS3JmT1BKT0NzQmtGT2NZSHlvSDkwck5WTmF6ZUZjdzB6S0lXVDdJeEEwS1hLblQ4UklVbDh6aWZMaVg2bXFZdSUyRkhhZ0NkdzFKcHlHaThRenZUcEU1dDI4WnNJNW9MS0RXM1IyTWxJWjBJUXh3bW5kV0cxeSUyRjB4anlNJTJCWjd6RWgzV1VJWkZzMXI3YU1rQmRrczJKaHNMWnJoMFhRMGNKaVpCa0hqeDQ1akkwSzJNdm5aTTlqUEJ0SjQ5WHF0QXp0QUd2RHU5RDYlMkZLTzQ0ViUyQm5HaSUyQjR2NTBtV01Da0xGeFNhb0VTSnVYcnNwc0U1SThxeUdKelIlMkZuJTJGb1FaTkZPclBWbk1wJTJGOThIZTQ4NWlXT2Z5bU1DN0glMkZsYWtqODFFUU9jdFNRQmxTb2VMYyUyQmRMclNMRlJWdll0MG82NnVnY3UxdW5Cc2lHRVNDZSUyRnViejRKZjNyUjRDJTJCNnB5N21wTzlzc1NvVFR2JTJCZFNYOTFHZm1zN2RadUFVNVFjNjdwcERQVk81NTFPaVNveG90ZU14Q2lUR0NONU5BNDRCZGxSSWpoaTF5WTVXM29vVnpjWGVnVzVOTmxWSUhwSE0wNk85R0tVZjh0UXZiZ2VyNmVUZTZRZE0ydnNFZDZkSDNWU3lhcEp4a2VzZDZIZWpUN0RkWXhvVlhTMjVqZFlubG9qTVdFRlJ6enFhOVFkMW95UkpTSE9Zb2tLY3ZmZW50Q0lURVd2MWFQZVNZc0dQcjE2RXB3WUNibDZ5Tm5EVWElMkJKNWVZVlJmJTJCeVh2aklqZ0xwc2x1RnNRN3Y1dmIlMkJob3ZGQ1hQSms2VDBueGliQnZDRTJzMFhnSUM2Z01kS29uWWFhU0NoTHU3ZU54enVJZHpReHhzMnBIZElzNEZObjcySThyRHVuTU5JJTJGV09EQTRxJTJGQnZ0cXB0eHVZWnBZdXY0Szdka2tHU3pkeEJvJTJCd0xNbTdRaEZVM0pJeXBQZkQ3RlduU3dockNSMCUyQiUyRkNsb2pZVEpUbFgzJTJCZWZyMGM2WHFrY1ZhZlJ4S3FBQzd2b1VnVTVjR1VwUHVVT0kzRDE4b0lFcEJtZmg2Y3BCWmx4MmpDTU5JdVlZQmRCVyUyRjBlRll6djlzaTFhYTIlMkJ2TmFteWZkeU0xZFY0cmVNMGhoRnVkYjRhenNNOG54S2RVJTJCUG9mSkElMkJXUVl3JTJGa2xtZkpTTWtzZVJtayUyRmw5b3FNQm5zYjVnZSUyRnl4MURLdCUyQm9VNEFNeWloeUwzMlNERlpqRyUyRnZkWk9jbzUyYnI4OVN3Z2ZJOEtxa0tVdCUyRlZlJTJGemhvZXlpd0paUCUyRngwUGRlNEVQdWY5TFpDJTJGVUNibGJWbWpJSDVDV2hEWlAlMkJRWUhqaHM3bFJYbzFmTXlod1laQmRMY3ZPajAlMkZESXkwUWhlQ3p0bldsOW0wViUyQkRTVTlWb0F5TEJDMmdUUjN1Y3RCcjF0UkhKd3pDWVNZU1NjN1VUQ0RhYWVaSiUyQkRlbXp2UEphNmFtOHhlaEN1bjg0SU82UUg0MHRsWk9jalIwdnlQNUZFUWVQdDElMkZuanRRY01vTTR2b1YzYjVOQUJpTng3TEdtR0glMkZwa1RGVllNMHNnc2hhTXMlMkJiN3REQ29GSjdheCUyRjh3V0dGcGlzUVhscWVvdEZpaDJpVjNDOWQ5TDZXUXZMZjJRVGZwVWxadE1LN1R5OTVySiUyRjRqVGtCdFRrTTE0aHJ1ZHhFcUd1NnUwcm5sVFFIcDhVRE9ONmhlSTdEblRXTmtSak0lMkZ0QnBhOFlOJTJGMkxqOWE4UUY0VFZnV0UzTW80eE92ZmkySEhqTDYlMkZyTzdEUFNYN2tuSnkyWUlzc2s5SkJEbDRVSVdDUEhFdTFlS2llRlI0T3ZLTGtUSGZZeU1Wd0dvb0szTmFzdTAyMUNiUGpObUp4cFI3N3M0aSUyRnUxJTJCTzFoMXVXbW55SUtUbDVPenc4WTMzZEdDZ1dheEM0R2p6RVlydyUyRlJSaUhiYjJ4dGU3cm5JeFdMRSUyQm1zQUY5blVoUFZRMjN4RVhDNXczaGZCbUJSRE1rbzM0U2RHaXZkWWVyVFp4WGJWcXkzSEJpSFN4VHh3YUg1MVd1OE12TGg1MGdEVWxkSXRiSERlN0RiQkQ4R0I5Z0dqbm1jMnQlMkJqNzVUaHBlMVdqUGtwdGlLRDdqTzdnSUJhcjBWTGMwN0xyZ2M2MXgzRWtraUdoMVc5Q3olMkJCJTJCUUJueWVCMFhab1IlMkZGQXNPUldycFBrSlBpYTVWODEzVHU4TkxnN09NeEFDZjI1SjhDWSUyRlFTJTJGdlRsMjFWZnpRNTFzZ1NaRCUyQk9OODFRSlZGTGtvbUJVMHZ2VVR6WmRLdndsJTJGRU5IWWglMkZJZUlRR0tlc3JIWGElMkJFMFNJMnp4WFNWRnRKREFyVmZiZ01oYUNDZGFOUE14dklUYlMxJTJGTjdDc3ZYb0ZxVGdZRHV3Rk1nVVl2VkFNeCUyRkQwcVhlaDd5ZlElMkJJM09YclBxeTNRejl5JTJCRkNGUEFHT3J6QXBHWHAlMkZxbEVuMzVITVdNZkV3SXFlcUZBUjIlMkJGJTJGcnlaNnJFMDFNNGxSajBCMm1ZMTVYQ0ZpTjFrMTV2TWNQdndCYWNlTHpJTFFnZmV3Qk9tSE5LVXklMkJDVlhFZTJWSHR6VzZQb3oyTXpUJTJCOUg0bXlmRzdDdyUyRlcyODhORFhETFBra1I0NVF3VEJqTm85YnlyNyUyRmlkZFFEbGJMMTA2aThkUmNMdzVybHZiSDBGcVBFR012TFdGVHE5MW9pUlZIWEZYeVU4cFhhMlBOSlJnbzNsWWxsVWNxUjc4SkNnJTJGNUVhcU85Y3BjYU1NNTNlN3ZWbWFIUUR5VzNtQTJKTWQwTm8wTVF2bzQ1JTJCdkIlMkJ4VHJiNmFVb2xIQnMlMkZXWkFvZUFVOE80dGU0S2ZrZyUyQk5QVUpBWVAwcERoT1U1U0NzQTEyOUtvbyUyRlJ2QiUyRkRYYjY4QVBNRThKJTJCb1VXZllUdlNLY2JFTksyV2huRE5RMGdvbXoxVkx2Z1V4d05TSjlKdEJkcHdQNVNnTkxqSU1UUXpxMEpSSFpKMTZCNzBHelh5TXliV20ybFdscHU0RzZVRTRFUFYyOUhzM0RZbTlxNm1uQ1FMTTVzamtLWjAyMzFNaCUyQkFleFRiNWRibGZrZSUyQmZ1eGdwbTVUWDc4eVlid2pkMWNRNGFzZ3ppOTF5WGNSZHZPbmN0UkFVYXdkSmZWJTJGeUVYN0kxbmw3T1M0dFE4U3FKYUY3UG9xQjVaTnk1eExobGhlWlhzRzRjb3d2cURNbndJYUJJQlV2Nmt3YWh2VUlKcURodVVaalBuTmNYa1h0Qm1ScSUyRkhYd0tXaFFJdXI4QzIySEdEek5JQTk0dDNDaG1aaEFOMWVjMHFRQnZpajElMkZDVENRMlFlVUJnakglMkZpMjVJTmVQUiUyRllJbFFWaVRxJTJGa2x0NHk5aVBtT1RxdHozdHFWemh5UCUyRnprSjJndGhIVDVvTWRUSVkxcXVmQ2E4T2JDY2REYmFZWDRQSHVmamlidWwyMWxtR1JyVGE1VVBwJTJGd2NjTlJYOGx2OWNCdWxaVG12TmNOVlVCVVVWZ3gwOFpjaSUyQnU4MWhRNDNOeUk4RjkwOEclMkZTaGlIY1RzZTl5NlY1WThia1BjdFJ3dDhWakpHR0VGJTJGc3hIaFRZYmczJTJCMTZIQ1JQbkQ0NTczUXdXSjRFUERzSWcwdWlPaG8xMUxWRURCNlQxOEtmanlHV25ud05NRGNrJTJGb29ORUFRT2pqYk0zMk1tJTJCRnNIZXZ4Wm1abGszcGV4QXJKJTJCdm9jTE02NkNNWXRiVEp4aUlmem8wQ1hBQzlMUUp4MmI0Nlp5anlCQ3R2VDRkWFh3YjRqeUhPJTJCSkVta0Jmb0J6SWp4NUhVRkVEcm1LaHJ3S2ZSMUFEbTdMVm1lZEJTY2p5eiUyRjhPcGlQQXlHZkdSRVoyS2l4Q2piMVowRyUyRjBsSG5FS1U1UEFST1NnQk5GJTJGRm1MTXdTWU5ZRG0yb1NYRnFJbUxtTkJmTXRNZXFEU1dmVTNDM3VxZlhyT2JRaVV0WUQ4aGVKTThvMGg2ZmlkOCUyQk9nWUhGcUpQcjZRSUF6M2w3YVMxSFZheWJlWUpWUFUzbTVZVGM5TjZlSUxSOVR2SDJXbmFZWVREJTJCSFhJZnpJOFNIYWVuRXRsVTNlenZzZGpCVUZwY3diRVFKT0xlUiUyRk12eXU3dFJuRVlpU2lWSU8lMkI0VWpjcEdHN2RhTXYyeXJBSkU0U3BwZTglMkJsckJrUXBHckRiVzlQc0pWeUZ0RzJRcElBdWtOMmJvaEV5elNvOUEwdGxVTDJKZUtMdW5qajlLNVRyRVkzY2paUHdCMzRrQ1NHak56UlBPeTdMellqanZRNExjQzlMT01TNUQyRjFnWHpRT2k0d3ZHVDFZajFHSVpBYWxoYzklMkZSdWNMZmhTV1FLVFVkUmdiZElzWHV1amt2c2JoRXU2V0laOEhWWHlrUTRIeTZ4bHlkaE9FbTU2NkdNZWJmdSUyRkJvRGwlMkZsMGh5Yk1veHdiNWVic00wRkQ5M2taJTJCNEE4YTdCMlBYdDZjbHRjNGxUOE5MVURkOElQWTZTQVRuZW1EQXRvQ3RhWVhQaGVOWGMxUGFGOEVOa2JzTGY2NG9SJTJGSmtuZklwN1pIMFE4ZHkwdXZPejVraEVpT0R3VzQ5OWhaSlclMkJubnlBJTJGOGxhNDBnTzJqMUtvUGpGQXBIWngyUEVmRTJaSyUyRjhCRkRUZnB6Nm9zbUJKdklveWtIb2hYdCUyQjM0SVNnOFZKc1RZTEM3Tk1LR3NVN2htcGhINHM1SFV0cFN0ZlZORFR4S0ttSDV3bWVTMzZ0S0lkNThNNElhanFXSGJpNTIzNlJiQm5pS0dFUlVXVjZUN2tvNThzc0s1ZXNGWVBzJTJCdnZwajBJUmVFanJFUWc4NUs0Z0tqUDBqd1BHdU1Hd0RNQWV2bG1ST05HemJUUXAzUnFsUGphZFlPOE00b1NMbXhaUG1EdXI0UU5Mell2S0pVbjZ2dVNNSjVsWVc2bGx1TVA0d3olMkJ0Q3JoempoOXFhb013QjlWTGVIblZickdGZDhBNkNjVnhhbXNJZXNWbkJtb0FvVjlFQXhJeWExYUFBZnRYVmdWRHZzd2ZPJTJGM2RmMWdUJTJGV3E3SCUyQlVxU3huamk5YTNwRW93TXRjU0phMHFpY3Zma3ZxJTJGUmQ1Y2RsdjNhbFdIdmpnVzRRcmlTcjdPbDdNSnljQ3BET2dlZUpnNHJyYlVRQWR3OVlUaDU3TWZMMTdCQVR2bk9hRElzSkY1WEN3U2ZvclFiZDVWa0ZVNFlRb3VUWUNGa1BnVzhIeGluYThpZXJHaDhOSWV3YXZPS29qbkRTd1lvYTVXJTJCbVJtOUtjUGVETU1pb25Td1Foc3F4bEZTeHQyaWJWYWczVlNtcEd1UlF2eDA2cE0wdWxQeHlCQ0JxcWxPbGcycHZKODMzaTJSdjFPUExGa09uMjF5QzFOaFNXNSUyQmM4dERKaVglMkZCJTJGTXl4RGJLeDdSMGxjcXZNVFBsTTJKY3Q5bUZOVDJzVDN3NXRoRkpSRWdDY2RTQ3NJZzJZcU5VQiUyRmdvWWQzd1BSZVdEYURNeklKVGY5Nm1rRUFiU3JGOVBVVHg5ZlNoUkNpVEt0ZzVMMllZNUkwaTlqU3NHbEE0MDRrJTJGTkJ1NG9mY25tOGR5cHRLb2FkRGVMYlV3JTJGM0RsWGklMkJiOXQlMkZveHY3d2JXcEdMUTU2U2V5dVJqTGh1cjBUcldYTnlHaGo3eDlZVjUzejhxTjhaeE5SMCUyRmpVb2JVQ1h5TEIyeFhaaGVIS1ozc3NVbnh6YWdvS2Jyc1hPU3FHUVp4OVNrdCUyRjFYckNmc3RXcEpycVBreUxEMjltMERlJTJCRSUyQjl0V0lXTGlZSXc3YUk0ZElCaEppSU40VFpZJTJGT3JZMlUlMkZ4Z0lmN3JUYzRzQlhFUEtUbVVsSUw3UHFjWVQlMkYwdk1ncFIwQlV1MDZpajhjeU53cTYzYVZlUXVQZFNJOXRBRXl4TXVvcGpESlRxOTZ1SnlTNkk0UjZoYVklMkYzSFhLSFh2eUVZd0FPZzdNQm1jZ0N0JTJGTlNKVDFsJTJCcGdaMVNyQXhac0Rkd0lrQkpWMExGSlNmd2lMaiUyQldPSEFhWUxGREJYRCUyRkthdTUzZEN3bjljcFVlaElDNEtQVDU2YTRVWHZjSEtUVlZiQXNRJTJGazBWTEs3UThLdkI3ZlRxSjBVeFhLcVd1Q0JCZWlEak1KaVlaZHdqaGloS05UUXI4Y0I0bzhycUJhdVMwM0xSYzF2RXRvYnY3bXUwanBIeXZIc3huOWMzQnB5ZSUyQllwWkExTFNTdzZEc2JhSWZuMTRsaUVDVmJvJTJGUEV4SlM0ZWtqWSUyRm9ZSjl4clF2NEpCNFVqY25mWHVPcWQzNmhSSFdhQUtCNUVQRDk2NSUyQkQ5NmFiaFhWeXgwZnhTNHphUGpuSyUyQlR3WUFKWlZuWSUyQmZZYVU5VUZoOFhieTJrV3VTV1RFZTRMVVNVQTZJYlJJRm44a1FJTjNqQWFwUG05QVkwZWJBeDBzTExlcHFqQkhsVXFGQjZycGVMekUxTVBaWXVZQ0dsdyUyQmVRVEtlcFBHZEV4V0k0dTFyUUNmdSUyQnoxaDE2anZWa1NKTUhjeTFhdGp3MmV4bU9PSzA4UEFXZ2dKSUFYcSUyRmtrOUFuNG9KUUZCR2JtZGNNMkVkazFSZkxhJTJGNlFrbUgwemRjcEpMS25yN2VtOVBTVVI0MU9uYm4lMkY5bXNDNDRWOEVZYTl3aE5zQmYxQXFGV05Bb1M1eFY4a2slMkJscFolMkI4S09xNG5CMHFDUFY1Q0wxanZMeGVBbVhyMHVoV3d1VXhHUzdvSnhRcU9vN05uY3U4ZlNqTSUyQmM4JTJGYjhtJTJGaDhWQ0RKUSUyQm9BdkElMkJBOFdrSkhzUkhFRG9HblQ1NjV5akw0Y3JVU0hzTUhOVmQlMkJsMWVZcHZQajRaQU9xeFNyRFl4TVZUSHIyJTJGcWp1UXlWRTl3a2lDVzQ2TXdIemUlMkZ6MHYxczNxJTJGN1JqRFR6MjAxYTdJdFp3aTZmSzQ3aElXa0liV0twSW92YzNobUJqM0F1eVN3ZFl1ZzJkVlc0OVNiVmxqYWF2SExyb2ljQVF0RzcxWnFOT1h4WTNkalBkN2J4SE5xYXNOTjJ6Mjk3diUyRk1pOUNtUW9kdnRNUE9ydGtJOUVuUjNMUmQlMkZaTnJzZ3NqenBPa2F5dmFsY0RoMGxMYTc0dDlCQnB1ZkpucUpKVjZ3cndVV1RoUEF3dVAyaWw5MSUyQnRpdXlFS09iMjc3bk5SSmUlMkJRZXg3S05SWk1TeUVkT29mY0V5eFhGNTh6YzJMNGFwU0Z0NnpYYm5sRWVad1Y4eFZJc0xZRkluelQ5dExWSFpUSEpaOHVTNWN3bXQwWkVYQk16QW5pcnREdW13RllTVEpLQ3FPM3RZMkxQR0JkNWs2VUZ4MldqSjRkUEdBNFRlaGRSUlB1M2twWGt5SkNtbTRsa0JjV21rNE1sQ1RRbmRCMnZkNDBSTiUyQnZwdmp6UmxUWDk5SmdCQkwzRDVFSXhuN2JBWnhlVzRzS2hPWWF6alYxNGZNYVhxa1BsMU1GY0lYQ1lOTGslMkJWbTkyUnQyTlRvQVlReTNxV3IzUm4yNFZ3aFI3YUN2eFk1aTNiQ3M3RkxDZW5YbkZ1cHF6ell3dlNhSEpmS2tvJTJCQ0o2V2JKQU01dHU0RzU4WHdHSlZ4TzBlYW4xV2NrT29QTUdERk95UkpiTWt3T282N29heElydnd3YTRtcHhQUk4zdkdETFZwVTZnSDIwJTJGJTJCR25SSHk3cWw1RjNnd3hyckJ6Uk9FWEhabEV0a0hMVlFqNmpuams5Nk9STGllS09reSUyRlFaUExRRzBaS2g4NHlCNHFKdWZhdnNOcnl5alBEQ2V2OENvYW9KVWUzZERvbUEzbTZ1Rm5JaEd6Mk9QMzV3bWJCc0JxM2QzVWZ2ZWJ3WmdNdGdEZmhvYkVHT0h0aUM2cE5XNDZIMUxTZUJJVlNmSWdyT3dDS1VtTHI2ckJ1b3AwQmgwJTJGdjZIJTJGaHlqS3pRTVVFS0ZXc2lRZ1gybVo4SjAzbHN2QzZyUmUzU2tpSzFJeEZDaHBpczhoMUhmRmUxSXgzeHppOTAwbE5PWDVuMUZiVUJYWFVtZnc1aHhhVFJmeENNdVVGMkt5NkQzdnEwSiUyRnlJUTAydm1ld2xqeE5GcVJudjR1JTJCR3N5MVAlMkJ1RkN3a1dValFvQ0F3TXhpVkJ6amlwUE5WUk5YM1VWYWxOa25QcWl6aDI4UWZjMzVMdXBpOUVFTFFTZVpXaFI2SUY4JTJCTnVBTGJrQk5sRVQlMkJyZkMwdUdna1NGNFpocWgweFlRMHpuYzV3ZDQ3S3czclJreUIxcUhSN0UyS2V0ZExKOTg5dXRyaiUyQkdkSHElMkY4RDRqaWlVZk41VEcyb3NjUkRvZnclMkZuS2pnWm95WWw2WnZjeWJ0VzNITHh4T05KaUV1c1g1NVBJcWZWcHlqMVhkRHR1SlR2bm9YRjl4Yll2VnQyTGI2UFY2QlFDbVNQcTFDU2VYbTh5NnE3aUZYMnZPNGFMJTJCZnU0dDV1TG9YTkgwaE5ER2QwSGhpYzJ1NiUyQkMyWW94WnB5bms4JTJGTkdsWW9zbDlxQnpJY2pRUWJRbXFub2diV2V0cTl3MCUyRldyWjd2JTJGdXY5bXA5RmFiTXRKSVU1TjBYcENjVHVmQkpXR2Zxb0slMkJsdXprbCUyQkVOekVSU3NlN2Yza3BSNVFBSVBFanQzcHIlMkJybUZGM1JXaXZsJTJCMElWU1glMkJxNnJmYnYzY0NSSkklMkJsYVNsS0tFTjlEaTZqWlI2STV0ajdIakF0ZTAlMkJKZmt4cEowV1pEbENaS1p4QSUyRnF0c1hYdjZkdzV5cTRwaFdFNGdaNVBTSmFsJTJCc1EzY0dXOWxrJTJGS0psMUIxVzBua2k1T1lobHMlMkJzbENWN05SejJwMGkzTkRPcGdZTyUyQkFSalNrSzFBMElVaTd5N3IwWTB2Y2ppT0FIYVhObUQ1VFVjcTB5Q3F4SmElMkZtRyUyQmtxMVJHY3FtQTE2UmklMkJxRTNxQlJUTXFrSDR5bWpDb25aZmg3S0FrNW5TVzJ0TWR4eVp0QW1zT3NLRjN6ZlJ5M09OcDFadWt4UmhJd2FEUmR0N3dqU2Y5ZXoxYkpBVmZkUGZBM1dDbTF6YThadzJIOGZ5MVBqJTJCaVlkNHdJVzF6MWhSQVNjRjNkTjM3VXZxWUVyRW1ZbmlKV2cyTm1aRlpCcGlSRkdJeDd0aElQVTlmSnBLMDhhVmJTZVpVc3BDT3B0bEhhODlMNjhCZllIMnNEZFlyVGwlMkZEMEk0NFJsMjB0RUZTWkF6d2NmcExWUSUyQjFVaUZoSkVnTm5mb2N1QVJDNXIzOTJzeW9pU1hFZWFlTUVJOElzcWRPZEphMVNKVXVpVWNyQ0dyZEFmOEdFSkhVQ0Z0V3cyNXdUR3hSM2o3Sm9xUjN0aWFmUko1ZUdXYkpjcjFqa1NNQ3FlWXh5WGRiRVVVaiUyRldlWk1mOWdtNVdaUFZRb25IcWw4cXRSQ0w3RFViOVpqVWJHdVR5SjYwUmhIdEVtWkJjVkt2M3kxNlhmSXZLeEhNOTlpQU9senRRV0hXRjklMkIyQVJCOXRJNFNnRHc1ZWY1enBoNlVTZklFODFYMDBEMGxGV3RkdEgzTDduOWp2Zk5uQ3J2MnVGU21xa3ZQQVZoJTJGZkJUaFZOOGZGeUZYWVdyYTZzQ3RPRFRpMXNFYjBhUVJaQ3hHNlVmb0tYTVU5NGYzQ29SM0p3MUszYnF6eXZFQzIxck42Z0REcEU0cWx2Q016VHpFY3BVJTJGamRDRTVBS0VETHhuMFE5ZWxBSVRxN1dKUnEzWjMlMkIwS2NnSEIwUDFSZWZxZThTRSUyQlpjZlQ5S1Y3ZEw0TDZaZFglMkZvR3gzaSUyRlZKc2d0U29udG0xd2V2MGhmeVVXQUtFRTNDZnowaWx2UnEwUHNlS2RoZTluVXE3dnBkWWJqZHlUT01VU2Z6WXp1JTJCSTJFWG9ndElXdmxuMGlZelg5QldQVU56cUYybXVvdWdDSzkyWUlRZUY3MEpsQmRBdGpGa3JkNjZTdXB6ZlNXd3F3WndRQmFvYTZiNzRncUViZ01GUHpWV2olMkZZaDYzRWRqWVB6Y2hNUWFxRWtDYUxiaGFHQThDWmJzUlRJNHBOOTNoQXd6RUtZN2o5cDBUTkZnSkwlMkJ5SkNaWTVXdjhHclRabVdOcG96dDlsYW9qUVl4T254THJya3FzJTJCT3FmaFl2Zk5aQVZ6MHZrRGFQJTJCV0xsNHQzJTJGYyUyRmo3bHI3bGk4cGRNQTZMdSUyQlpKYTNoNG1tTkVZMXpvQmxmNTlVJTJGYWx5dlVqc25lSkd4NzFPJTJCZkc0ZUtKNnFmJTJCbnZvODYxUU9LUGxpNFRSSXBWSEVLSWNBOXJvMEhPdU5sTkhwN0lQTW1YUTM0QUZFS3E5UWdYUnE3U2RwbGZNNXFmRzNydDlOQ3dJYXQlMkZWSG9ROVh6NTJiTVZLbnFoSUZhVExaUUdUWHY5enRHZENwamRCVDhzWkVrU3JBaWVLQjlQTHRTRkYweFdISDlPWHdhYXRGbVdBNzJ0eG9Kak96ZlVSc2VPN1VuWTFLTkhoVUp3UkthVE5zJTJCNllkNFBZZW9EdDdlc3Q1Zm5vaEwzVllWbUx4aWxsOFhGRiUyRnJZbVpwcVBhSFBnY3B6czZKWUtyNnZRRUl1em41ZUJZSDNtRFBkeCUyRmlNYmdqN2JIUEJQOENramZvVTFGYjR2WWNxOG1SOVpXSU1Kam1uZk1KMVVOZ1F2ZG04cHRoNW9lcDl2dTRtdVdTZmJGZjBDdWdIJTJCekFWUG9kUGJRTjlxczZQdnhQS1lERWMlMkZUS1RVVjN0TkxoRnYzd0NmYW9MWTdvYllmSm0wUyUyQmg4S0d3S002Zjk5SHExUmczMmJqRnhTdDQlMkI1NFJXaWp1a1AzSVBPOXdkaFhPc0pzTHgycWxaNldGWGtNVVpSNkV0N3glMkJpVmRHVXdFRjIzN2k2JTJGZlVRSGhFTmUza1RjWHlIJTJCbWtJJTJGWkQ4ViUyRmlRa2VEeFVpN2JoY1kyR1oyaU1RUmh1WUdMTlVkVU5pbjVjZFkyblNWRXRSMXRpMDNkTXdMUGNvV2I1VTRucGVQQmJnZ21SRTUzSVpWcXMxa09XaHVHTlNzZVptSHo2SUF3dUhhZ3d2a2NrM2liTmhoRGcycHNaUVRLSVJ1c1hKN1k3Ukp2c1ZPanFPUkNab2M3cEtPRUhBbW43dkwlMkZNbFNZR2szajI5QXpvazVTN3F6RlM2YllkV3FwYkNxQk9lRXZYS3dJOHlpOVRPMGJpeFdJamd0b254azNrRDBicThHVmRLbVMwdm9xMXY5dmNPZkhuODYycHJMdElOUk9vTW1kODdVNEZsSm9FanBYTGNwdEhmc1U3NWw2NEJkMiUyRm1YMWVjWXlsd3daR3ZlUkpPZWdMTWxiQ3JrVUxieURkVVhEY1NlbGt3MEpLODZSaVdMM2pBekdSZEdobzhKWEdud2kxbTVvdXFadm0xUW11QldySCUyRnlXaGxpJTJCVjBEUVJVVVJUaU5vRmhvb2M3MTVWNXdRR2tlN0MxTnVzU1c0JTJGNlhkVmk3ckhoM3ZDa3ZGRVJzZ3dsNXZYRW5RNEd1SE1vRmI5cmJGSmlDcGxITnpnSEFKNVBId3ZZeCUyRk5sSUMxcm9XaTJGNUgyNnpkRHVTem93bkdlQ29LUlVEcUthSWd1dm9oZmV6OTZTR010MnZHb0kzUjc1eTRqbmZPdnVkN2V5Slo1b2MlMkZLTyUyRiUyQnV4bWJ1cTVqVzhBOWJ0Qjd3JTJGNUVubkhUMzZGNjg1ZDdBNm9uOXRQM0pMbEZSJTJCb3JrYXpmS2JOOFBrbEd3bk5NZkxuMFl1Y2c2VDVtSlVMQ0Nxa1hseUZVOXh2cHR3d3F0JTJGQ1lnZ1hhMkZ1bmlhaWZRSmFXMnRSdVMzTkd1Q01oWVNsMGdMYSUyQktIdlJSdWtaQmxycSUyQkJqJTJGNCUyQlAxTGF2NTNTeDh4JTJCUkFNd1NuVUhvc043N0R0aHp1UVBoS2o1S0lZbjNkNGRIMyUyQjVPYWoyd0dqVGVEUWh2UTZLbThweVpSdVRXZWVZSUlTZWNKTjNzWDVTd2YlMkZLTkxSRXcyVEJndmhyYmdIVTJlcXdFdFVyZm1jTlViTUU1JTJGb29ZRXlFMmRianhJYzVHYU1kVlY2WUlGSzVwalZMOCUyRldpbDJDWVlUbVFBUTVINFhzZFl2dHElMkJxWG9LYlJaamNsbGNZUDhNd1pGTyUyRklNd3VlNSUyQlFkblNtRTFrcTA0a2JDUmVBbFgzYiUyRktadWpqR3JFSnlhSVJSSjMwUHFnMWhGbWllbUVjQ3ZMelpuTlp5d3FoRzdWSG0lMkZndDFjSjNGMUpkM01ZcGhvSSUyQjhqdE54SCUyQk9TVmxlWUFxaHFRYjZtOE9XcVJ2bGFlZHFKbmVmT1dmMjNTNldmYmdUaWw0blNIRVNQS1ZsVmVjYmQ4MU44b0NVOWslMkZCT3AxcU9vSjdHR2RkRFdLekt1QkdNampOUXl5N0tnUnFQV1R0QiUyRnd2Mnl1TCUyQkVpUVNWbG9wd1VFQmN1WGwybThUY1d6RGdnQiUyQmFueVNZVCUyQjRTOTNsY0hVT2NOMVQ0Z0ZGaGh1MlVXciUyQmhwb2JEZSUyQnBhbEdJYVQlMkJQVSUyRkdNanBLbG5nS3NlN0MxZHJPclpQMkhQQkVCOGhNWkpOUndTekN5Uk9FNXBrMEE3ZmZhbm92M1dpVzN3WTR3aDNqbExDM0UlMkYlMkJOVnpKZnZaZWMlMkZZcGtMY0M3JTJCUHpldXFvaW9qcjg4JTJCU0IybWhEbEJzN2FDMmh6Znkza0lBRm5ZZjlLUDZqSFJqMXJKTHhGcFhSS0Q0S2VMVzVlakcxbTRHMk1hMUl1YlJkQnhTeW5OSjJOT2dBalNLT0Z5UyUyQmo3d0FRNE5UanF4MGNZUmlMd0ViSkI2eHE3ZzM4ZWx1Zlkyd25ibEFlWDgzbHlwMWlGdm5qeVR4MEEyQldoRjBVMjFHWlJCVjM0SFJVNzhTTW9TeEYyTVVZdyUyRmxudER1RFA5JTJGTFAlMkZiSmFMRHI5Z0tWJTJGZjdiYXRrcmRuNVR1MHVtSUZtdDRWaTVyaWpnbzBZWTVOY21tNkdUTlVTNSUyQkdCS3EzRnRiTFgxQ1JqZWhiRnM2ZlF3S0czTjhSaGNyTW9jUlJwWjNCVGVBZ21Ibkp1eTBYYVhmUU9Fdkd4OGlKeGJBUVNEbU1FUyUyRjZQZEVDWWptcGtNa3BvTnNKUThQNWFJRldYbCUyRklhWnIzRUFhTEdqdlcxVlhCanhPMCUyRm5QYzNKTTIzTzY1QW1kMEtpMzdKYzAlMkZyNk52OWZweEhDUTIlMkZyejZJbHQ1OCUyQjltVXZlTElQa2pEeSUyRiUyRlhzb21VOTZiUHg4WUdMQUNUQXhVaSUyRkV6ZWhYaHFWSlJtMGZRNVJUcW9RRzhCNU1tZGlXN3FwWkV2MWVwUzd3ZDhUWXNYRklKRW9nWG4xMjdQaU1HeVNGSGw4ckhwJTJCQTRHdjE1VkUwZGdSQ1lNTzJSRGFvaUFBYlB4TlAzY09vMjluU01Gcmk3VzZBSzVqVkVudFFTdElSR1gzdCUyRiUyRjBMNmYxcyUyQiUyQldTM2JzaDhwRTdjU3JPb1VsUnc5dUVZd3lhYVQyb1FOQmV0NFFWY3Y0RUI3VDBGZWxvdDdZanNNblJPeUVqeWNnTzY1d0tDUHBtVUV3WkVTJTJGNnZjRXJRaXcyY1NvbzdKN1JRUjVkUzZHRDlaVmZmaEdpd1gzUWtPWURDbjdZR0FNcVI1eEtmdXV4Y0RaNU5wVlg0OG1PWG1aTjl4cFA0Zk9hZzdMakdlZFZ1JTJCSjZnck1ENTFKaEZFYTk2dVlpcEFrT25JRERFaGFQdDJsSU1zZWpZOHRqRDRpcVJIcm9wVldJUUVWVWd0WUVEN256T1NlRyUyQmhTd29IM0U5Y3J6a3h0R205cDlUa3lKY2dQdkdRSW1md0o0cGFDNm9EMzk2VjRzOHFYV1VBdXBIU2JyelVaNXg0enBmWXZuem1JUnpMVlRPd3NITUxJNjlvTFUwQlhvWHFZVklwUldzb05BNEVFZGIwJTJCaXVkaHVqT2NvZ2wlMkZ1bXZKWGhXVExoemhHd0xkQ1R1NjNCOGpzVnRUUlVoJTJGbnFuMlhUZFNudmVRMW1iQ0hUYkRraVlZSUwyTU5uc2hiWElicFZoMDR2M0hUbyUyRmxoalRKeldHcHNBM09obTh4NzdvcTh6Sjh2cnJNeTAlMkYwckdJOSUyRiUyQkQ1T3R6JTJGZDdsRHhqUWg3NzZXQ2VCQUQ3NHNuVkFXcWs4Q0QzYU1QSTlKZ3BvaTcwMjJCT0JDbWdFSUJHNkhlMWg0Z3hnZ0ZSQnFqZEppd283JTJCeEUlMkJoaERPRWlVcGlVRjJSdk56S2xFdExPS1Z3UEM0QnpkZHFHNDVOcTZQUlJoNXNxYjBUa0F1WVR3TWZRcFVKOXQ3RzZzUXBZYWg2blk0ZmkwNWdzaXpWa0ElMkJ1OFB1T0REb0xybVVFRkZDZ2NCejlVTVFxaHlwOTdWdDFBUGwlMkZnTTBGYXkzNTk0Y1phZ2NOUEk0aGM1RlJ4NU9YVmRhJTJGcjlIZUxLRHkzZ2xHbUtUQXJwSyUyQnJCVlhFM2hXeTdRd0ZWSHYyT0JXWG1MNnZ4UXU1OGo2OWtNQjAlMkJmbjZJZWtOMUJoazhtQjY4THdvV3djcVp4akEyWm42dmlFbGU2Zlh5STElMkZHZmNtSHZOMFlVNSUyRkRvVDQxZVFKZ2txVGJYcFlOT0pxb3RDYTYlMkZya1ZRSGNnQVFjOWNVdDNsTkFmcExZZDdmNGtkcDNYJTJCV3B5bjhoU0JObW9Yd3JjaXRPMXU3d2lsTSUyQkdJYiUyRkY2R1klMkY5aHQlMkZrOHJQUDUzJTJCMyUyRndXcyUyRiUyRlhqJTJCZzUxUkRma0NnSlIybmRQc0JQYjhBck5SZ1Z4JTJCT2FUdjliQmQ2JTJCd0hsM3B1WWR1OTBBa1NSMEk4bmdKWlhjTXIlMkJ0WTFBMzdiWE1wbUtyMzBvU2Y0MyUyRmUzS1JWcm14YmNySThTM1k4UFAxNDc4cDh1RGpNblhUVUVNY09QU3B2bnhOMXlmRWFoTXZzNFpSRHJOZGlmejBtSTlOQlZwNnMlMkY5djVCdlR4WTJjJTJGcDEyQThJMFp5M1BSM2s4N2tRNkRQdHpkYzN4REIzUDM3eFg1JTJGeU9QZWU4eFNDc1g2NzN0Q1AzNSUyQmZjdkIlMkZ1NXptY0NxN0ZoejA0MVdCbnJndSUyRkhYTTE5MyUyRmRnJTJGa2ZMOWdmekc5ejhmZzRmUGpaeHE3T3VXNnBodlBQVzNYcHVBM2xFM3pxMTFoVSUyQmJ0dVJtZjQ1R2UlMkIxa3dXbVVjTnN5M0w5NWxrb0Ric0d0UlRxbmRoekc0NXpxRyUyRmJsdjdPWTJTY0diZ3I0OTRvJTJCWCUyRndGQk1SNzhmZHN2aE8lMkJ5QVdQb3BtTVN0dUZmSXgwSVRQeENPbEN3VHZxdnBBUCUyQlVXSiUyQkxocm92MG95MEglMkJQWkNEJTJGS3hsJTJGTGhrb1F2OVNiOEMlMkYxUnYlMkZYc25BJTJGajJTZ2Y0JTJGTFJsak4zMDlLTXJqZjQyZ1lNU3ZEQXlOJTJGbDhXRlB3M2dzSTA0ZmolMkIlMkZBZVA0TyUyQk1GTmh0WDZMTHclMkZpZkRQUmZNZGV4WDg1MWpQenRYQ2YlMkJuU05JJTJGTTVVJTJGOVhZcFczQ2pHTzNna0Zvd3MlMkJuakg4NWtuJTJGRk82WVE4SGZ1VDdkeThyOWRDbndPd09mJTJGUnZCdm0lMkZ6MnMlMkIlMkY0JTJGZHZHTDJYcHZCeHglMkZmMDBaR21TcDM4JTJCWU9jRGQlMkZNWXAzOVAxbjg3c0Q4Yk9QeDNCdTdIZldQYW5OcGclMkJlWFAlMkJMM1IlMkZIWUhveXN2VGZ1ajNKQyUyRmtodmtWd0x4OWZPJTJGbmZVM21mak5oUkRxbHpvRXBYOTFvU2s4QWR6MG13dGR3dlhUWSUyRiUyRno4a2IlMkJaOGpiVDNQNlIzbUQlMkYxZmVmaTRtR0VUOU40MyUyRlV1UiUyQnJZTyUyQlYlMkJRdzZqZlglMkJuZExIZldmSVhVJTJGaWNsUFd1NiUyRjhaJTJGTDNmJTJGblFvZFNmNUdTUTRsZlhnakYlMkZpcHhBJTJCbW1EamkwZnp2OGREU0tSNWVrNElqJTJGQXclM0QlM0QlM0MlMkZkaWFncmFtJTNFJTNDJTJGbXhmaWxlJTNF90pJTgAAQABJREFUeAHs3Qe4dUV1N/Dtl2piNDHRxBZforFXYhDE8oJiAQugAgLSERRBBBQwKhiJIoqISBQQpPcugooUsYC9a0RRNNYYS2JiNDHJd3+j6zLsnLJP3+ecWc+z7z53lylrZv5rzVprZt/mf1eoKlQ4UDhQOFA4sNAc+H8LXbtSucKBwoHCgcKBxIEC9qUjFA4UDhQOLAEHCtgvQSOXKhYOFA4UDhSwL32gcKBwoHBgCThQwH4JGrlUsXCgcKBwoIB96QOFA4UDhQNLwIEC9kvQyKWKhQOFA4UDBexLHygcKBwoHFgCDhSwX4JGLlUsHCgcKBwoYF/6QOFA4UDhwBJwoID9EjRyqWLhQOFA4UAB+9IHCgcKBwoHloADBeyXoJFLFQsHCgcKBwrYlz5QOFA4UDiwBBwoYL8EjVyqWDhQOFA4UMC+9IHCgcKBwoEl4EAB+yVo5FLFwoHCgcKBAvalDxQOFA4UDiwBBwrYL0EjlyoWDhQOFA78ZmFB4cCkOfCZz3ym+trXvlb94he/qO54xztW97znPav73Oc+1W1uc5uU9TXXXFPd7na3q/76r/960kXpmP4//MM/VF//+terTTbZpPrN35zckPif//mfSl433XRT9ZOf/KR6wAMeUD3kIQ+pfuu3fqtjucrFwoFxcmByPXucpSxpzSUHfvnLX1aveMUrqi984QvVb//2b1d/8Ad/UP3whz9MdVl33XWrQw89NP0+7bTTqrvf/e6rYP+Sl7yk+tM//dPqgAMOGGu9f/CDH1S77rprddBBB1WPetSjVtP+8Ic/XF188cXVYx/72ImC/VVXXVUdc8wxiRd/9Ed/VJ133nnV7/7u71b7779/9chHPnK1POVH4cAkOFDAfhJcLWkmDpx//vkJ6J///OdXT3jCE5IG+7Of/ay69tprq8997nOrXDr66KOr//f/brEo/vd//3dFCx43/e///m/HJLfbbrtqyy23rH7/93+/4/1xXbzzne9c7bvvvtXjHve46jd+4zeq733ve9WLXvSiirArYD8uLpd0unHgNisDoPMI6PZGuV440JADr3zlK6uvfOUr1Zlnnrlqsun06lFHHVUBQqB7+umnJy2baeOud71renyXXXZJZpaPf/zjq7MBN6677rrqkksuqd7whjek9M0gTjjhhIoGz2T0x3/8x9WTnvSkBOSeB7TMSXe5y12S2YjJ5nWve1119dVXV+95z3vSb8/913/9V3XqqadWNP5//dd/rf7iL/6i2nnnnav73e9+blf//M//XL32ta+tNt544+pjH/tY9aUvfam6173uVT396U+v1l9//fRM0z+vfvWrq89//vPVOeec0/SV8lzhwFAcuEWdGur18lLhQHcOsMH/+7//e3XcccdV3/rWt6puesU3vvGN6rvf/W5K6L73vW8y99zpTneqHv3oR6eDnR/AAuqcfvzjHydhEumaNdztbndLQmPvvfeu7n//+1cnn3xyEgree8QjHpFel4e0w5Tzox/9qLrxxhtXk2Zqueyyy6oHPvCBKS329YMPPrj69re/nZ4hSAgx9eJr2GabbZJweeMb35gExWpCfX6YwbDhK3OhwoFJc6CYcSbN4SVOf6ONNqq++MUvVldccUV1+eWXJ/s0LfkpT3lKso+HgzZnEQHBnv1nf/Zn1RZbbJHf6vvbu+HkpZHTtmneAJU9/olPfGJ17rnnJu07gL6eqFkBM9Nmm21W7bHHHun22rVrqx122KG68MILK0IkaJ999knmKf8//OEPr/zPPMUf0YTOPvvs6qc//Wn1ghe8oMnj5ZnCgZE4UMB+JPaVl3txgNZ74IEHVt/85jerT3ziE8kU89nPfrY68sgjEwiP2wFrFnHiiSdW119/fZpRRNlo4k1JWdFDH/rQ1Vf+8A//sFqzZk2qx+rFlR+3v/3tV//9kz/5k/SbsGhCZg5MN0w/G264YZNXyjOFAyNxoID9SOwrLzfhwJ//+Z9XDsQefvjhhyd7OLPL7/3e7zVJIj3Tz2n7+te/vvryl79cbb/99tWDHvSgiinopS99aeP0Pah86La3vW06x5/f+Z3fqUQXdSMO16Z0wQUXVKecckoC+t12263pa+W5woGROFBs9iOxr7zciwM33HDDKnjGcxyvNGLA2Q08Aet//ud/xivpbJZAOLBzB4Wt3v8EARMK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", qy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAj8AAADACAYAAADr9wLSAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACP6ADAAQAAAABAAAAwAAAAABQVWQHAAAKvHRFWHRteGZpbGUAJTNDbXhmaWxlJTIwaG9zdCUzRCUyMmFwcC5kaWFncmFtcy5uZXQlMjIlMjBtb2RpZmllZCUzRCUyMjIwMjItMDctMTNUMTMlM0ExMyUzQTE2LjUyOVolMjIlMjBhZ2VudCUzRCUyMjUuMCUyMChNYWNpbnRvc2glM0IlMjBJbnRlbCUyME1hYyUyME9TJTIwWCUyMDEwXzE1XzcpJTIwQXBwbGVXZWJLaXQlMkY2MDUuMS4xNSUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTUuNCUyMFNhZmFyaSUyRjYwNS4xLjE1JTIyJTIwZXRhZyUzRCUyMlpQQUpKTWYyeXFfb2tWanVZaTRtJTIyJTIwdmVyc2lvbiUzRCUyMjIwLjEuMSUyMiUyMHR5cGUlM0QlMjJkZXZpY2UlMjIlM0UlM0NkaWFncmFtJTIwaWQlM0QlMjJ0cEhjdnpYMFdxNGw1b2hrdEdFQSUyMiUyMG5hbWUlM0QlMjJQYWdlLTElMjIlM0U3WnhiYyUyQkkyRk1jJTJGRFklMkZSNkg1NXpDYTc3WFNhbWQxSlo3cDk5SUlEM2dKbWpFbElQMzJQUVRZVzV1SjRBMWJBOEFBU3NtVE8lMkYlMkZ4ME83Wjc3RzZ5JTJGQzBKWnFPSGVCQ09leFFQbGoxMjM2T1VVTTdoSTh0NVhlY29KdGNad3lRYTJFS2JqTWZvdjlCbVlwdTdpQWJoM0NtWXh2RTRqV1p1WmolMkJlVHNOJTJCNnVRRlNSSyUyRnVNV2U0ckhiNml3WWhwV014MzR3cnViJTJCSFEzUzBUcFhDN3pKJTJGejJNaHFPOFpZTHRMNU1nTDJ3ejVxTmdFTCUyQlVzdGpuSHJ0TDRqaGRmNXNzNzhKeFpyemNMdXZqdnV6NXRUaXhKSnltZFE1NGVKZyUyQmZGc09adkczUDIlMkZFMCUyRlQ1JTJCWSUyRjQ1NDJ3YWp3SDQ0WDl4JTJGWnMwOWZjQk1Na1hzeHNzVEJKdyUyQlV1d3djJTJGOHVLNGVtS2slMkJMdmdKMkU4Q2RQa0ZZcmtGWEY3aUhVUmtSdjNaV053b1NpeXB6b3FtOXZZb29HVmVWalV2ckVFZkxIR2VJTmhhTVV1ajFHNkNOSW9uczU3MlglMkJVd1dUV1k1JTJCbVAlMkJiWlJ6VzlaY1I1bXNUJTJGRmk0RTF2ZzBTaWR3UnZjRXZvSnJ6TEp5ayUyQlV3b3dnOWplT1glMkZpaElValJaZ0t2ZkRPTCUyQllyS3k1cWVYVVpTR2o3T2duNVYlMkZnZEtROXhSUDA3dDRIQ2VycHBpbTJUdXJkdFZtNlpkYm5iM3RFWlkxb29yVDNhRnVXY1VERHJSWFd5NFVFbG9ZbzZBckFEb01jNlRtR2ttdFJFVnVRZ1RDNEJlWXdxOUthNnlxMm11RHRPQkVGcThUZVFJaEZWZTRIUWZKWkxjYlhMbnNPY0lFY2FGWjhhSTdGTVlJQ2hnRkdnTEdVdW9kQ2l1RVM1VXdjaXFGcTdCWGhJUSUyQmNEb0lCMWE1WFhLVWhNM3MlMkZDV1lST1BNSEg4Rm8zZ1M3TEQlMkIyJTJGVUxrcjZ0UUJUbHlyNTFNb3dKVjRnS3JLRWJ4aEpMd2lwNlVta1FrWm95SmpIbFNwMjFzODdQNTVDQVVBM01HY0xqNHJsS24wcktjNHFuTUtMWU1NcUpOaHBUcHdjbVRDT25GNjFLeXdTU1ZGQ3NtTlpDc3Z5MHl0S3VpNXhLWGQ2cDIxQmRwUkhiTWJ5MnJxam9GRzNLSzh5WWNKbFg3cCUyQjZOZFlVMTZ2dW5vRXlseGVrTnlWMWZaUlhkZkkybFZjSVZHWlhldGcxNjA3ZDV2QmlkeTdsSWJ5bWszZSUyRnZFd1k0Rk1yQWVPdTFHeGJYdzYlMkZLbFBaY2ZCSTNuenpyWk8zZ2J3RWM2Uk5hZHVDJTJCS2R2ZFMlMkJxMDdkdTc4d2x3b1UwUG9sYVklMkZzcG5BNXVzMmdHcFByallENlAlMkJ2dTB4TCUyQnNaYmlNMHUlMkIyM3V6N1AxbXRTTmpVJTJGZEkyc2txODVva3BXT0o3T1ZFNktrdHVEbHVsOHVNcWZpTlg3OEpMd2tFbFBGUExSOEI0OFNMcGg0ZUdRcXRuR2lURDhGQ05aSSUyRlhsY01UdU9vemVWNFNqb00wZW5iJTJGeGk0bnNpMThqU1A0Z3h1bkZoSUpUTGhoeENncEJIR2MlMkJvWVJKSjJYVyUyRiUyRmFDclpLV2dvT2JiZGlBQTR0c0pCR1VrVUZkMXRSQkcyNyUyRjlwc2xacFhCQlJHJTJCZ1VvNm16cGRWQzBCNFZxRlFyQ2tCSlpkQmxHYWFZTVZlNUVqU1BtdkJwQ29iSUFCRGRjTWlFNFRQeGNLaGdnUThzQml2TUNVbWRYdEFPa1BVRDAxUU9pQ1NLOE9wOCUyQkZ5QjFOcGs3UUZvRFpOOVZJVmNFQ0tFU1VZVmJJNlRPUm4xSHlMc1R3dXNPSWUwdVBId2dwT1U1VnAxUXh6a0JhZWpzVGNENkVJQzB1d2pCQm1GTUtKRlNHUUhkdUx2ZlpMWVd6SmRCUkozd1VFZEVlMFMwdSUyQnBvaFlpV2x4bDFJbXFlVDZMMmUzWlR2dndob3VWbHhxbUlvREQ3QWhTMHdreHFSdDNMcXFHMWMlMkIlMkZYc2pxUlI4OHglMkJJaHJDVlozWVBCcExhSHlDMTlLa1ZkU3ZxcU5OOFJDOGl6QVM3RXdBa3RwcUR0ek9od3FPVFVndEFQRVowQzgybzQ2R1NBYXc4QkFKSU1KRSUyRkNoMk5aJTJCbElKbXlvU2NkM0hCZkl2NVhjbmlvdllZNHZQaWdnanRia2h0TmRCd3NjRzJabGFLSU9jU3NETVQ0bHZRcnlQRXB3MnBJNE1Jekk0T1JSdmVpWkIyWXhxc2klMkZxMVFvaXNTNGhwa3hER0JSS1NDd0k5dU1HU3VFUElPMTFMeGJGRzJtaWdVUnBHbEhKWElaUWhkdUMyNVZQajBZWDh2TWFqOUdTSU52QWdGQ21DaVdDS2N5eTJldllqa1llNmVEQ3BZS0ltdUNLS0dTMjJsaUJLSUtlTk00OGV2b1UzcmdRUDlURkdqNnZINHdKaUhaZU1oOCUyQmp4NUVvM1NYZ3dldmNuZFBoOGU1NDZBNlBlbmdRaHF2M01aMGFDdHBCNFRNVVBrJTJCcGp1MGxmV0FxZkF0MVhBY1Z4U01rT3lvOG4wcjVGdWpvJTJCUGd3VTZsak1icUw0T01Td2h5USUyQkJvbUVkZ2lUTjZGbWZKVEJ0cWNlOVVlWldpYkZNbnN4bkxNdENKVXNIeSUyQldFUXBGR3A0YlNMQjJhM2t6QWlzRGRTdTZkWnN5eWprUE9IcXZCRjBmZ2tCa0hjRVo1WGFydXljTkIwZmF0cGtoQk9KT0RIWVlJMWhDTkRHOFdYRDNZZnhOYndxaTR2czhRcFVVbWtvMFJncjhaWldHZ01EeWMzVHg5ZkZOODl3WjUlMkYlMkZCdyUzRCUzRCUzQyUyRmRpYWdyYW0lM0UlM0MlMkZteGZpbGUlM0XOcyqSAABAAElEQVR4Ae3dCbg0RXU38DExJkaj0UQTo368Bk1QI4oLoqhs4oIaISxiUMAFURDEBQgKCIiIBDW4iwuKoIIL4A6CvCiLgOICIlGW132PmqgxRpPv/iqeS9PM0jPTs9y55zzP3Jk7091Vfaq66l//s9RN/ndJOimpgSlo4D//8z87P/zhDzu//OUvO7/5zW+mUGIWkRpIDcxSAze5yU06f/AHf9C51a1u1bnd7W7X+f3f//1ZVifLTg0sa+Cmy5/yQ2pgQhr41re+1bnqqqs6P/7xjydUQl42NZAamHcNAD53vOMdO/e85z0LGJr3+mb9FlsDN0nmZ7EbeJZ3h+m56KKLCtujHje96U3L6u8Wt7hF5w//8A9nWbUsOzWQGpiCBv7nf/6n81//9V+dn/70p52f/OQnHYYGbNAGG2zQude97lU+T6EaWURq4EYaSPBzI5XkF21o4N///d87a9eu7QBAN7/5zTv3uMc9OmvWrCkAqI3r5zVSA6mBlaUB5u4rr7yyc91113WAor/6q7/qbLrppp3f+73fW1k3krVdCA0k+FmIZpyvm7DS+8QnPtH5xS9+UZgeA1wyPfPVRlmb1MCsNPCDH/ygc+GFFxZG6K//+q87D3jAA2ZVlSx3FWsgIfcqbvxJ3fpll11WgM9tb3vbzmabbZbAZ1KKzuumBlagBm5/+9uXcYEP0LXXXtv55je/uQLvIqu80jWQ4Gelt+Cc1f/f/u3fOt/4xjeKeQvjk9Edc9ZAWZ3UwBxo4Da3uU3nPve5T6nJl770pWIGm4NqZRVWkQYS/Kyixp7GrV5zzTWlmLve9a6dP/7jP55GkVlGaiA1sAI1wOR1y1vesvPzn/+8wxSWkhqYpgYS/ExT2wtelkiOb3/72+UuOTenpAZSA6mBXhrg6LzeeuuVn6XDSEkNTFMDCX6mqe0FL4uDM2dnzs23vvWtF/xu8/ZSA6mBcTXwF3/xF+USzOUpqYFpaiCTHE5T2wte1q9+9atyh2nuWvCGbuH2pED47//+75LpW/6nm93sZp0/+qM/auHKeYmVpAFpMIj+kJIamKYGEvxMU9sLXpbcHcRklpIaqGrgRz/6Uec73/lO8e342c9+1nV7E/3mT//0TzuigeSA+bM/+7PqJfLzAmrA1hckxo4FvMW8pTnVQM5Sc9owWa3UwErXwG9/+9sSyvzVr361OLVW74dpFNsD8Njnjbn017/+dQdI8pIM70/+5E86f/u3f1uSY2bUYFV7+Tk1kBoYVwMJfsbVYJ6fGkgN3EgDcrd8/vOfXzZnMG/c+c537vzlX/5lYXQAn7oAQPZ/+973vldyv/zHf/xH57Of/WwBQve9733LvlD1c/L/1EBqIDUwigYS/IyitTwnNZAa6KoBfjwAi1xPhBnLRpY2tLSnUz/BBjF3eckBIwIIA8RMdv755xcG6H73u1+aVfspMX9LDaQGGmkgwU8jNeVBqYHUwCAN2LvpvPPO69jXjTnr3ve+d2f99dcfCHq6XVcY9P/7f/+vc6c73alz9dVXdyTCW7duXdkg82EPe1jZL67befldaiA1kBpoooEMdW+ipTwmNZAa6KsBwOecc84pwEeag0c84hEdiS4HsT19L7r0IxD0N3/zN52tt966+ADZHVw5GR00SHP5e2ogNdBPAwl++mknf0sNpAYGaoCj8tq1azsA0J//+Z93ttxyywJUBp44xAEA1VZbbdWxLYJ8Up/61KdKqPwQl8hDUwOpgdTAsgYS/CyrIj+kBlIDo2jgkksu6XBO5t/z0Ic+tERxjXKdQefwCbJRrigwDNDnPve5Qafk76mB1EBqoKsG0uenq1ryy0XQgO02TJL2DfJugsZSCMEWOi3iyN5CkVsGqzCumWYR9DbMPVx33XVlSxP5Wh7ykIdMDPhEnQAgAOuss87qfP3rXy+O1KLIUlIDqYHUwDAaSPAzjLby2BWhAeYXTrIcZAf5hgitNokSGYbXLO1JxlflFre4xYq411lWUmTXF7/4xVIFoejT0hnmRzSYqDLh9He4wx0yAmyWHSHLTg2sQA0k+FmBjZZV7q4BrM7ll19eEutFxlhbbdg/SLZgkyaAg/XB/sgrgw0CgL7//e8XX5Krrrqq86//+q+du9zlLp0NN9yw7FPWvbT89mtf+1rR4e1ud7sCGqepETuCX3vttR17Ql1zzTUlGeI0y8+yUgOpgZWtgQQ/K7v9sva/04Dd5C+99NIyGfuKKeRud7tbccDtZ8oycZtIiczCGCM5akys8szc//73L9cqB+SfZQ0AlzI3E3l8pi3aVLmf/vSnSz1EhPVr52nXL8tLDaQG5lsDCX7mu32ydgM0wK9HDhiMDbEvFBPMKLvKi1TyMqlypsUGXXjhhQVEbbTRRjm5Vtriu9/9bgGa9Bw7c1d+nspHyRCZ2kR/8euaVT2mcrNZSGogNdCqBjLaq1V15sWmqQHAR6QR4GPVzw9kiy22GAn4VOvNPLb55pt3ZBOWZ4Z556KLLsrNFytKwrSR9dZbr/Lt9D9G+VGf6dcgS0wNpAZWogYS/KzEVss6Fw1cdtllxalZNmFZf22C2aZwfAaCRDLZq4qDbcr/aQDTQuzVNUuJ8rF0KamB1EBqoKkGEvw01VQeN1ca4JvjhZkBfGISbLuSfILkluEkLaybM/RqEGCvl4jyYmqiE2kCZim3ve1tC+vHcZ0Te0pqIDWQGmiigQQ/TbSUx8yVBuwdJcSZbLzxxh0AZZIiUuxBD3pQKUJo909+8pNJFjfza3P4Pvzwwzv77rtv59RTTy2sV7VSgAZhHpy1kzEAxu+HCRQgS0kNpAZSA000kOCniZbymLnSAGdk0UbC0cPnY9IVtCu56DGTrPK9L6rYUJS5T+qAs88+u/Oyl72ss//++3dOP/304gQeuZMkHJwHkb6ASF2QkhpIDaQGmmggwU8TLeUxc6MBUUb8TUy8HJynKfe6173KbuLyAgmDX2TZaaedSvZrIBMIwnZ97GMf6xx66KGdl7/85eXW+VrNg/zqV78qgLSfqW4e6pl1SA2kBuZHA/Mxes2PPrImc66BK6+8stRwgw02mPhWCnVVcHy+xz3uUSbar3zlKwuR/wdb8sMf/rDkOPJe/cy8FQkh6QIQwnjJoC3CblJ+VnW9D/r/5je/eQFob37zmzs77LBD2QB10Dn5e2ogNbC6NZDgZ3W3/4q6e5OxRIQYB5FYsxCmNlmkMSFe9gObZwFYZEGmtzq48R0TFp8p+Y28e9397ncv7+eee27nvPPOW769qqmP3xVGaB5EPf7u7/6u5Hs6//zzS/s89alP7dzqVreah+plHVIDqYE51ECCnzlslKxSdw1wxCWyN8/K5IIJ4RMj0oyZZR7Az89//vOe4AbwAQKq4Ib5LgBPr2itL3zhCyV7cveW6JQou3B87nXMNL4HyNSD87W8TNg5TNBhhx3WecpTntJxrympgdRAaqCugQQ/dY3k/3OrgcjlIrPvLIXzM/AT9Zl0XYSW8zPqxtz4TsRVFdwAh7Jc+85rFKBo2wiskWtXGZ+4V9+rF+B1y1veMr6e+vvPfvazUk97uG2zzTadQw45pHPggQeWLN3MYADR9ttvX0DR1CuXBaYGUgNzq4EEP3PbNFmxqgZMwFgMYguLWQpAYfJn9gIQ5BoaR9ybSbwXuMFsCLcPgOPdfmTx/yR2U8eafPKTn+xcfPHFxcG8DoBudrOblVv+3ve+NzMTpAoEANUnsD+PecxjOqecckpnv/32K+H6b3/72zsvfelLO894xjM6swbN4/SRPDc1kBpoVwMJftrVZ15tQhrgZCuJnbDmmHgnVNTAy2JSMA3yymA+mviWiEjqBW743rhegBnvslVvuummxTzFtDYuwBp4U7UDsDmSR374wx9eLruaRJB5iTBFzsr/Svlf//rXvS0Dmy233LKzdu3a4v+z4YYbdvbaa69ivhOhtt1225UQ/nJC/kkNpAZWtQYS/Kzq5l85Nx+5ZSbBcoyihdhQU72AH8AAMwXghHNxvPuOiagKbmzCaQPV8L2Zl5w5VV3YzkOdmZE+/vGPdz7xiU8U85F7AUD5P7k3rNUoG8lWyxrlM31j3wCxYHXUaeedd+68+93vLpF5gOpDH/rQjl3f3/jGNxZnaKzWLE11o9xrnpMaSA20q4EEP+3qM682IQ385je/KVcexX9lElVSH07BX/3qVwv789Of/rQAgAAz3u9973sXcONzE3ZoEvUc9Zqf+cxnCuA56KCDyn3Fth6PfvSjOx/84AcLmBP5xvdJ+oHIgD1qeaOc9+Uvf7mctv766xcgFtfg5Mxkd84553Qe+chHlq+BzRe96EWd0047rfPiF7+48/SnP71EtcU5+Z4aSA2sLg0k+Fld7b1i75aPDan7nszqhoL18P64xz2uTLJhCppVndoq90tf+lLxm5HVma+R0H5gjwOxdgB6hMALib/22muXTV9A3rSEr9F3vvOd4szdbUPbJzzhCSUz9YMf/ODiC6RegPOOO+5YwuLf8pa3dDbZZJNiCpsXQD0t3WU5qYHUwFLEaiohNbASNBATFJPLvAjGARhjHjrqqKM6X/va1+alaiPXA5P1tre9rfOc5zxn2ZT0oQ99qPPYxz62AB8Xxqw8+9nPLn5Kkj6SSy65pLBB5Z8J/5GY8dJLLy2lMB3G9hbVYiVgBHw+8IEPVL8un4E2e5cBUJyhw2n6RgfmF6mB1MDCaiDBz8I27WLdGIdgMi+bV3J0XrNmTckpw+RlL6zjjz++86Y3vWk5Km2ltQDn4de//vWdZz7zmeXe1J9Ji7P5/e9//663I9O2XEH0wVQm+m2S4vrKUSesFF+eXoKRsxFt5IeqHsfnZ5999ulsttlmBbgK7U9JDaQGVo8GEvysnrZe0XcqcR2zkmy+4fw8qxuKOmCjtt1228KAYCJe8pKXlC0fsArhFzOrOg5bLhbkuOOO6+y2224dgCbEfWB9ekWbMfthWLQNMxQWbFKmScBH6L26chDnZ9SrXuoPMGsfzs+9BGjl0M0/CPADqlJSA6mBxddAgp/Fb+OFuUORR2TWZgobqxLMg0giYEgo+0c/+tHO4x//+LL5JyDAwRYYmHcRNfWKV7yi7Iu10UYbLVfX/l22sdh4442Xv+v2QX4dYfGA0HXXXde54IILWjeB0bGtK7A4QKfymkT+PeQhDylguV87iBTTVre97W1L2zH9paQGUgOLrYHfP2xJFvsW8+6mpQEmqXXr1pVJiVNs2wJgWPVzurXFxKyEKUh4N58fUURYDxmYfc/XxL0zE6nj+9///uKfst56681lxJcEisccc0xn6623Liagqk75/vi+ia6xLBye7XbPDOgdmAhzZfW6w34WTv+pT32qmBMxPtga124i+gpw8853vrOcB6B1E9/bH8yxHLsxQExq/ZilbtfJ74bTgBQRQDb988VKSQ1MSwPJ/ExL01nO2BowCZvMsCqA0CwEA2FiJwEKsD/qxMQCMJisiSgkYdWYk2OPPbZz0kknFd+Y8uMc/GE+fOUrX9l54AMf2Hn4wx9+gxphPzBCfmsqwI/ryPkDVJ199tnFEZo/0CjiGvx7hK0D1pI9un5T4BNlAjEyYstVNEgAIOtB/k9HH330clsOOi9/Tw2kBlaWBpL5WVntNde1nTTzg2GR1I4pBgjCskxbrFKZ3TA+4WyLHbByFRLOzILtkZ3Zd+q5ZskxmplGrpwTTzyxJAj0nd9mJUDcv/zLvxT2aocddrhRNU444YTOVltt1cFYDSOYGfdGIgmhXECYMSIyKyL3yhe1PwDZt7/97eKo/PnPf74wbPQrqgyI7BbZVbtE13+xce5JeDv/sX7iHhxHR0LiOXTbLy2lfQ0k89O+TvOKzTRw02aH5VGpgfnQAGrc5Cis3LYKTfw+2qq5iRn4IRHiHdcGbsLnx2R/8sknd3bffff4uZh//vEf/7GYXt71rneVLRj8Pwuq34TDuZcPlWzIdVF/7BUAMIoAN7aWADi+8pWvdNYtmUK/+93vlpfraTN+QkAGgKg+wteB2qrDMdADSNH1uO3MP2vzJXPZ+973vs4ee+zR6LawTJy/RfDJfbTrrrsOBE6NLpwHpQZSAzPXQDI/M2+CxanApJkfmuJDwhzCr8RkiZmYFoMi0oivD7+QOvgxiXtx9n3a057WOeOMMwrDE6axaGWTvugoJhxmMGwQkDDu5B7XH/QuEotPi3ebfXbzaXn70maggIJ6jSPAzR3veMcCUrWbaC3mSkCHKYwuMXne/S+HE+Bkk1ImQ0wP/bW1lxvT16mnnlrYrqamM5m5mTWB7fe85z1FJ03PHUd3q+XcZH5WS0vP330m8zN/bZI1GqCB+9znPsXxmfMzZqEORAacPtLPfGAwTkxv973vfbteQ86Yj33sY2UXdBtq2kzT5F0HQE4WVcW/5KyzzuoceeSRxdnYjuQAwyQF4AIa7XoOrNXlmmuuKboF0NoS93S3u92tvAAgQMeLWcnkpx4ADmAIBHYDZG3URT2Y+DBvBx98cGPQrM132WWX0l6ve93rOltssUXf8P826prXSA2kBiargZssrQD/d7JF5NVXiwaEgJ977rkl6sfu2pMUDsaRmI5TbviZTKLMb37zm50LL7ywXBoo6Of/YfNPLAHwI7yameXQQw/tG/WExXIcIGf7hVHNTYPu3b5WV1xxRce2Fb18Z/gBAZeYn0UVWZ3dH7+sYQVLxQ8IcMOcMaetBDHMT4shHUYfWMDTTz+9gN/ttttumFNX3LH6jFQNfAaZdy0EUianAf3dOOcZZSGob2aczM/kdJ9XnqAGmJ5M0jYXZY6y9xQfoLZF3prYSsG2Dv2Aj7KD/RERJtyd/4zJUjbhXpMPh1obbWJdsBKim/gDtQnoMEzA2D/90z/1BD7uFbtl64pFFizOq1/96s797ne/nrrodf8i2Z73vOcVxu6II44ojNCgPEi9rjWJ702oFiEmWCZFJmIAA8Om/2GxsGvuQ3SeoIE20hFM4l4W6ZqiBznwa4uU6WqAv6E0JAJUjOHBLLfO/HjIkkxqv3GZBnpNnu2XNtoVp8n8RA11alFWhE8Hc1K/aKI4b9C7fmxrhNivi2nNg9NEAA2gB/vjOsxfdnhn1hoknh1+Q/akUt72228/dn4gyQFlagZ8+vmrAATKZNZZdJGSAACg31HFKp4ztH4HUPVi00a9/jDn8bfjP2aSxTAMI0AQs+Sd7nSnqY8xq4H50S4WaYSu+dLxJYtJeJi2ymOba8BYKkjFQtRz4X8+iNh7um8F/BgE7O4stHWeNp5srqb5PxLwQdsZoCDYWQ60vbQ1C/CjLhiLz33ucwVoWNVihOhpVGFSs0rjl+IhAaiGYZVMPoDG85///PKwMWthCUQZNY3u4hgMsABC22yzTQk7HwXUXXbZZcWx2hYOwvN7icEB+AHURimn13Xn9XttIgcT3x8T0qhi8uYIzWTJDAYITVP0NZFoxt9YdAJ1d7jDHUo0n0lWaL82xQo5Xr/GCmGH+M0B6MSx/Nn69ZO2723RwQ8dr127toBKuh1mHGlb16v5ej/60Y9Khnj9LRayY0V7eZBkXoVsrTw8XCaLfLWvAwObhtOIJnsDHAfReZJpRHt1u1+RU8xgcsmg+fnoMN8EYOzm2Fu/DtAOADBx6c/6Nh2L9LFaGEaiPOY4pi9Alc1ZlBX/pCbA1WRlx3IDpsHzwx/+cImCGmZiMiFjOJ773OcOvAeO0FZEq2Vw1gaeKazYOGYr7QRsY9RsbAtI0OE0WFp0vr4hLYHy1iylBXAv2DvmLGCGk7fxmDhGfZm5+EFwxMf4+D8i7tYtpSXgj6KfxXnD9P1hj6WvRc3wrH/xSzRuaxMRjCmz0UD0ef3bHOpZGZn54WNhM0ArKAOJgZo/xKSjVWajutmXClia3E1oBj0DmYR6Jv15kVkxP3H/dMRvho7QnYSeTEwG+5gMgBODrkEJWKJXrKXzif4sv4uJYdQJwLUPOuigZfbHdeUBQn8fcMABQ7MrTHs26BQGLjfPoASPmAAblfLfcR/9BFjk6CyjMZ+Q1SIA7yGHHFI2c23KyPXTDTYl0ghg+fqZGPtdp8lvVXMv5grI1r9HFX0f6P/yl79cng3AX+6qSfsDeU4W1eHZOI0cwEZjb0cdS0Zt0zzvxhqwIAWAjO8jMz/MAswD2AfJwKwUrCpSJqMBk7iHCINgoLLaQ6muWUKw86L3WTE/oXE6AnKsvPVLAF2drGQBHP3VRI/h8e5/30diPcACiH/AAx5QTCGuN6poEys/TJKJiagXPyIPn5XgMOL54kzNZIHNAdqYWLqBFawXMCPfUJNJXUJGjNQgkDRMfZscC4BqIzKLiQEIBlBE2tHtOO3tHpiX7DSvbbQRUDKJxYmxF8BXX8kk9dcmbKI69hLXUl8sp3FFOgTPiP/byrPUrexFZn74C1pUcVMYhrHtpqf8rh0NIGdYTkpOsVEuaUKxwjZgocoHpYsfpYw8p7cGDHgeKoOU/DP+T7leAya1NUug0EsnR3NiKE1KzFkGXMcY1PlRibYy8HcDEtdfdfhPHIf5/gBZJkETDEDC/wcQMmkNIwDVIx7xiBIKzyHaTuT/8A//UEK2Y+IGil/1qld1nvjEJzYCWIAS52zRZpMUANNKGDvIxKItgmlTrvaItgBC+axMY1xhVhRdd95557Xi6G1MtMoHOpnBMHbaoi1GHDPjmVcOoDWOb1u39sb4WMwy13humNX8Py646lbWIn9njvQsEuONBU/KZDRg3DZ26LuDxOLYWAncj2T2CsoVCzGpnCSDbmK1/46xsHGkQenxj3/8XKhj1mavuVBCrRKSHlpBc4YNESBgQ1FOyCb5UQWDhbXBnog2sl3Fy172ss6jHvWozuYN8/S88Y1vLNEnj3zkI0etRt/zAB7mFEC9LiZwoMfkUAVCjjNAWS3zkxhk4qtfd9j/AcB//ud/7sj/g11tSzitS10AXO65556FtR3n2kA0UEI3chQN64s2TNkWDYCPRRYwqj8FwB7mOoOOXTSzl37OAZ3eUqarAQAIc79madHbT+Q7swgeyU5lkiNtrzr6VTh/u6EGIFgrY74tUOw49v4bXjn/a1MDkj0COUBAAB2OpjIN218LezPqqtri44UvfGHZ+VzmYROWScqriZhMOZs+5SlPaXL4UMcY/EXgxSQA6Lh/QIapiVmyyrSpOzYIqBeBVH0BdRgaju2TECCCaVJ0HZamLdGuT33qU4vpExv36Ec/ujB3o4AIIIG/AsH0ThL4KEPbcPY/88wzC1unnzQxoTp3tQqWDzFAsMr6eVuM32rVaZP7NnYYZ7gEeEaMa8z4FlbdxFhEhgI/QI9VKzqUQLgyxqa0owGDooeFGQZ69d5PAB7gh0khwU8/Tc3uN+3JVCVaq7qhJmd1puN3vOMdhRUYp4ZC8WWW9rAz3ygTk1MFF92u/6EPfagc1+YAjcExJvBJIQAA58K7LOU26ec7oq4mCy++RyZ7TttYI+ON+7OqE6Y6Cnjodv/V77bddtsS9s73p20/HeZN/lmcoU2QTIyDnu1q3XzmK2a1GmxY/fdJ/K/tTCL6FHMbsD1pB+hJ3Mc0rqm/Az4mVtvW8PPpNflOoz6rrQz+lZhwqT0w7dphkFWqEfhB30JUVmNVsVJLaV8DqFODvgHTirfXQxSTG+SbMr8awP7w/fH8VE04sjgfddRRJWpyq622GukGmLxe+9rXlkjL3Zd2kQcUbN6JUcJiAEbdRF0M2M5pS/RDoeMWSQAKkxXAMopDPkCGaeAbBUzxc/Hu/ph8Rrlmv/tEmT/2sY8tOXtkcG5bMLWi/IDgww8/vESYCZFvIsZZTpoGdFmpJwH+etVDfxXFa0IBgIb1U+t13UX6ng+bvqldJuGHtUi6mtS90P2a3xEGotABIexov4z8A8EP4ONiKCUrN6syNuB+q7hJ3eCiXxd6teJF22EFrHzpXchpLwC06DpZhPuzgt56663LxFd1LAZe995777KxqQd3/fXXH+p2sSycaq3Gd91113IuE5HM0swU/IE8u0BQ3UyC9VGntlgfrIR93SL1hUAITuTjCh0BcNiYiy66qABIvigYmgD/45YR53NQd20si4zcbQvw8vd///cFEMoMbcLcaaedlsdSzzyfLSayag4vbUn0ker3bdev1/VEJgI/634Xpag/p1yvAYsIz6LnN11BrtfLLD5hVD27TO7A+ljg5zOf+UyZgNnbTcLZ8SffpFZbHiR0s1U082KvFfzka5MltKEBzA72B6tXDXsFVviFcDy2AeowkxuTmcXJvvvuW1iBaj2ZmjAMJnPOvJLfcYzn0KsOBoYnP/nJ1VNG/sxhmSMu4INB2XzJ56hNx2EVozM69EzwC5L52ngEULQlFhiAooSPozJWTeri2dY2ynnJS15SzJ4mTdFBFpWnnHLKcvQdZo+rAdGmsxB9Evi0KLOizmR917eCvm/7BMxD+kRdr5dZfmIxMb5h5Lx6RYH1HTl0dgOl1WECn+k2pwbjF+Khki8CA5SycjVg0SBkmNmjLhxYMSXYgHrUU/3Y+J9pixM15qiXCQgwYHI78sgjy3WZwrAz6gBItLWQkXeGOYoDPvakbeAT92wSBqzU27hkUdC2AD0cszFmkxS64gMmLB44Fbkp6gyDZgNa90eYJwGgcBKfZJ36XZvPFsEApVyvAYktASDj9aT6/fWl5acmGjDuhXtBpBvodl5fs5cQTQLRtjVQdqtEftddAwY8gw7zl7Zo6iPQ/Wr57aw1AHDI+mxiq7I/6oWVEf5+xhlndLbbbru+VZUpmslEFFkTsxU25klPelIBDtgi5gu7zLchYaI14IgOmrRDrHvh8yM3D784QKWuy3Hv6wlPeELxxeK/MelAAmXwawJ8TaQEAMb+YPQisrZtJ+xhdUTHFmKiavh2tW1yHLY+sz6eH5ZxGetDRNzKVJ0yGQ3oexYMmHJz4qDIz2DQI4Ftt1r1BD8ewHBc5OWfMhsN0L2HLFaCs6lFltqGBjy8mJiPfOQjxdRVvSbwIBcMcwizSK/ElcxYUuYDUcOuNJlWTKKcb5lcDCJ8Tvw/iljxiq4g6jtoQBqljG7nGABF1IicYtuX14j+2hITPYAlkWSbDuHd6oftwe6YTFH0xNjLj4S5K1IFtOE/1a38pt8BO9pXfZg3Z12fpvVu+zh+mUwq4ecT19dm/DVTJqcBJn4LBJYQCwauIL2e+2DDsaa9pCv48SCy7RrcXMQgk9KeBjSYiZDjuIG8n2B/iDZJWfkaYPoCXNCx9QnEauVZz3pW5zWveU2J1qr/fskll3Q4KvMd6mXH7qchpil7i3GqNZl9/OMf7xx22GHFBCYHTRMWqXp9oFwmW3WZ9tYY/E5EQMVYFWaZav3G+fy4xz2utAEAIi/TJASDYmf5buI3e7kJmSaTZqC61aH+nToAP3Re75v1Yxf1fyZJ/R4Toc+tWXJCx0b2moQXVQ/Tvi+g01jjeRQYwBLif64ho+r+BuBHzhj2+6pdF3LS2CmT0YDVlARrAXLqpQCfGhcQ9cqor7qGVtb/zELMX/xuuiUXxPqYeCVAlMAwzAsWICbDF7zgBSNPPBinzZd8ZsI0pRyDx3vf+96S42bHHXe80Q7nAJMsxXyLqn3PYBRRSFiYUQegUVtPXfjnSMFhFd42+LE4kfvHvQObkxBty5Qtuow+Q2LVaoULWBob5sHtgE6IFfhqFPOgl/bBDIZfyWrUxSzuWf8Ls5fABz6PWLhh90mMui+DH2gepc5GpnFR5Cbm6oAXJ+X7eBpAkXJgBjLRePwXOLz2sutbZZDqADleDfLsWWqgH/ujXsCRlY1QdWYXk+Bb3/rW4gNSD1lveh8ipJiIsD5V8YzbekMZJnp9Uf6hYDsAbo7FJ5544g3AGpO4sYLpbdQ6Vesxymd1BByMXe5vVPNdr7IBQw7iGDfRcpOQZz/72QXo0nFQ9J7zeNYN+AGGJlH+MNeMekQ9hzl3pR/rnsPB3mI1gc/sWtSYFX5/FmBMYAHMh6lVAT8aVnIygxlklZuVDqPC0Y+FWJkh0HgXXnhhybYbjlqjXzXPnHcNYF7C96eXT4nvhUHbcgEgAVCEcI4qnKSxPr38hJitDjnkkDIO2BFergybpqKWsQ4AgAEnzDDh6MknLcD5qHUb9TxsEwAkAaKFRNvgx/UBQbmUMDSj5jZjwmIustCJF7+Z+M67BVEIwKlserWynRTwivKavgcgm1V7N63nJI5jbuHTo4+lD+wkNDzcNZldPfthBsM+DysF/IiaiP2hJA8LhD/sxfL44TRAz1YRwGek5qb/lMXXgASDfH9kFe7m98X/Zuedd+4cd9xxZR8w2zqMKibXSy+9tEQw9buGCVdKC32Sb9HBBx9cPjvHBC4X0dFHH11AQDjgx35l/a47yd+UD/xEVFTbZQGFTJH8oyQorAtXgQA0vd6ZiaxWvZiwvPP347fks+g7pscqAIrPQBIw5H/tM0sRhk/CFDvLuky7bE7ppG3z6rTvY5HK428F/GibkcCPhwrlTaROT+Az/e5hC4uI+uiXlGn6NcsSJ6UB7M/mS0wMP5zddtvtRsWYSJmagGGml3HCyO0sD9RwzGwi6ibc21YGWCDAh5joTdJ+Y2oyGffyVWtSThvHBHAEEtoGCO5ROxhYmQSxYAF2grlxDwFs4t2KFHMW//djc0844YSSsLGXLsI/i5l81k7PkWusF3vY6x4W4XvkAJl1f18EXbZ1D8H0RtsMe92bWhWi8zygViMp09cAOt2AyZmOE9cokTzTr3WWOK4GbHjKqRn7Ew+ya5pkjj322JIU0TEcnfn88A8Z1uRgkpal3R5iw4gQdhOz1T7mgQBBzOOxypqHKBeLNQCByR446Qc04v6BJANmL6Ymvse+ATBS5vPx4F+AsYvvvAc4iWsP+y5cV7Zqom3DtBTXiQg87Thr8EMvZDWOTxHGPg+O59E3Vvu7edMzY1waZeFzUw8ViRXUalforO6f/oGfaI9Z1SPLnZ4GrKAxO/xxYqsJJhJ7O2FhAR8iCksWYMc95jGPGaqCWB+sURNQEBfmgybazOAi4AHDwzRrYjbQvOUtb5krv0DOjsAP3fmMPQ1/GhO2Z8p7fAf40H0wM/HOcTs+e6/6+Jj8mAGBIA6WbQkfKv5fcjfRcV0CXDEzWiDNSrBgWC86GaYvzaq+bZcboHTYxUfb9cjr3VADsWCI9rnhr/3/u2nYcRPR9lfUpH8N/a/WMNJJ63derx/sD1BjUnn1q19d/Ao4G4dgN+T/OeKII4rTc9M9hIAAm4FynB5GYpUbviYmPKwDFiKYFhP1vJjI1UPgAAZF3dUVeAn/GswNX434DnMxbN3d+/bbb19YOCCorUkQuMH+2BtNvYAMq9iQYFmYxQHiWfn9RPoT4K+te497zPfUwCw0cNN40Gb1UM3ipuexzND/KAh2Hu8n69RMA0xHfH/k/cFQmKBFGNXFBC7iS+SRDVD9P0g46YrcjAl00PHxO+dqoGztUuoLAAigCEAUxwAYMXbEd7N6V48wwQF6w95v03pvsskmJfIOyBIG34bIo/T2t7+9mD4BYKkIMG8YN7rXznSNrQKA+u1S3UZ9ul3DmCShJOFkmpIaWAQNzDZ8YBE0mPeQGhhTA/xITKhYWIkPAwjXL2tXbzmCmKS6mUiqx5ssXdPWD6OIbS/6pbxQfrDGo1y/zXOY4piipI4AHvptZjhuuYDpaaed1kqiP/uiiZ7TRoAP1gfAIXaX1w8wQ2Fmk8xxFoL14YfGVNj2PmqzuJ8sMzVAAwl+sh+kBmasAWHlVvdyVwwyx9iGgnlM1FU/wfpgKpowRNXrSBaIhbIDvBwz/DzqEn4fEf1T/33a/0c9mAoBCQBICOwkBPPB4ZuOxhHh7fy4dthhh84WW2xRLmVjTP5ZfKqwgfyBsD/yOzGL81sKBmacsoc5F8iVSJIwt/YC5sNcM49NDcyDBhL8zEMrZB2mogHmEeYbzrHe58FsI4mhVBP7779/ycAcETW9FMLf4mlPe1qZkOTu6SYYBFFZgFIToQ8Oty9/+cuLXxHz26677tpTP/QGrIUum5QxqWPcqwkaOADKgAY72L/yla9c3n6j7bKBLD46o+YWEjUmhYBElgAqwfjIwG3LkRBbmWCAmMCEzhO+Td0AaZzT9rusxvoHEJ05btrWbl5vlhpY3t5ilpXIslMDk9CA0GemBZEynH/9X/epQuUb2KV5sL1I01w4bdT3nHPOKWHo9o4CJqz6RWd18/mplscUstdee5UJ3jY09USDZ511VskKzH+olwAMV1xxRXGI9o7N4OfDdIR94ngPTIT4zjmE6QNLJS0D3c5yUoxki9WNNuXN0q5veMMbChCStLFN4VOEYTr11FNL+oFhrg288PF55jOf2WHGDDnllFMK8Inorvg+3jFOEqFK6CYbPJA36a2HmLsAc2yPnE/J+kRr5PsiaCCZn0VoxbyHZQ0AN1bRtoRgmpCvxv9hGjGhC4f2jkUBiPxuQ18JBwESg34dJC0X0NIHUVhMU89//vML8HFZE6qcPE3SHQh7ZjJ53etedwNnZPdp079tttmma02lUzjppJNKuWeeeWbZHJT5RTSZqKMwu2FS4hryEIl2islWxuMAXBEF1LWwKXwZ5Ud9okjZkzEnciRJEtm28NOyxceVV17Z+NLaVuLK/fbb7wbAB7vC3AjQ9JMHPvCBpe9yknatSTKXQKUyCNYpk/v1a5n8bSVqIJmfldhqWeeuGjApADthOjJZy92CqZBHCRsQE7gLmDyABROPwR4Icg0vq3uhxVVGoWuhI3xp9c9n54ADDrhBckO+PKKIsD/MHYPEsSKDMAl77rlnOfwTn/hE2ZKiOllxAAa2TGYA34Me9KASMVZNrNitLMfZx4g57HnPe17nFa94RcnzwwcF+AIYMREAJN1OW5i8mJ60KQasLr6zhQgTGEC53Xbb1Q8Z+X8gUaZr4Orwww8fyIoAYMA1QFbdwJhPD9bHtap9s1vFAFKZugF7wItpk1N6ANZu54zyHUAZ4Mr2HrGf2yjXynNSA/OqgWR+5rVlsl6NNQDEcMrE2gA+mB0sxuMf//gy0ZusmZXqkwsa3/fMNnwvHA/wMD0wk5lkgCkTVFvC3wNY2XfffbvuDI39AVSasD/qxEQGgLh3IGTtUni6yKH4zPn3pS99aQF5e+yxR/lczyjd69749IgsE/kFBNnbSmQV4IMJ8o4hc0+zkGBd1K3XflNALwDEtPeOd7yjVbZEHwOS6byfAD1YNubNKvBxjnOB0A033LDfJZZ/Y6LFENE/syMTZ4D95YNG/KCfA+bMap4pUWbuMSU1sIgaSPCziK26iu7JZMzMYwLGaohIYa6xWu01IfZSjxW0Ad/5fGCAIz4PVu2AwLgiwsfmoExMa3rkSwHG7J6O/Wki7nHvvfcuG5FiEACS97znPZ0DDzywY8NiQAhjAyQN65sDLFj5qw8RleQV2eDlA6Jz7FNTsNbknpocI1szfUab9zsHo4Zlw/ABc/pMW4Kh47QeZtX6dTF8F198cQFgobc4hiOxSD+szzCC1dtqq60K8MJ+YfuA9FETpAKwmCRmWH2GTu1ibyHgc0pqYBE1kOBnEVt1ldyTPDPYGaYPJgHbBFhBj2sGwBDd8573LNfDApk0lTMOALJKl71596UIH/4o/STYH+xTEwE8JL+zYsf48NHgx8MURh91xqvJNTESnMWrzteus8suuyzvZwWo8f8xeYo8a5Mh61dHjteXXHJJOYQumzipY0qwbXy9gEHAow1hVuUMDABVBXMCPNpxHhDtlngR8OGc7RrDCkAn51OYpIB0Pm7agZlT+YNE1Jj6YaXkhALg1BOwGtRHB107f08NzLsG0udn3lso69dVAyZa4cYmfhOBPbLa9jthjjDBYJYAEeHgmI9hwRXwxO/EHl1W1IPEBMSXw0q8FysQDqlMZNgf5hBbDwBrzh0nMkdUkZwzzEWD2DPgCrDDxPABajuyqpuuhIRrD+0OpDYV7cb0J0pLcsHnPve5JaN20/N7HcdcassL5ihmLeBMrh5ggo8P4FUXgB1YHXbrkep13A+zFEaPWY/PGod2L79hmgBUZmD/A0QWDNgipjLvIY7BmgKz4/SduF6+pwbmXQPJ/Mx7C2X9umqAbwLHZIO2Sadt4BOFVq9vgmdeGEZkWsY0YHM4EDcVOXqsxqvsj8kUA8WHx+Rt5c6EZmd4Sf3s+k7OOOOMpsXc6DiMiBBxG602yeYLHLkvEybzl0l4ksK3i7kLCzWKsy8zDkDpXP5Q/KXGFcyT/DzMjdjB17zmNQUAierqBnyUB4DpE8DJuAL4cn7XZwAY9QHA3Btmh84ARuBU4kp9BfABiLBOdMEPjIkzgc+4rZHnrxQNJPOzUloq67msAUzD1VdfXQZqg36v3CjLJ4z5gUlNDh6+FTLsWt13iy6qFwNIYHw4UzMlDCPYH6CC7w8/JAwPfwwmLY7HGI+YqJg75OfB/DB1iT6ygm/qRFut11vf+tZlf4/q9/0+Y8jUFZNhcuVTo55Rv37nNv0NawF4AlgADD8kk/6oAnjQsUi2ffbZp2RRHvVazgPAAdMjjzyyMDHMm73uHyABQCJCb5xyq+cCUtrcS98LdocvEDCkPsAqcORYeaB61bF63fycGlhEDST4WcRWXeB7Yu4K9sWEXw3pnuRtmyhN6Mr2AjSsnHsJ88Jxxx1X8rkAK8MIHxo+HFbnfFuYoYA8JhtArComtrPPPrtEEvmeKQgbhH2wRcUwofrMbMp0/rACDAJAQqRN7iZeeWnaYOQwXq7LfIjxUU49r8+w9XW86wACfLFkzdafRhW+Vvompg9r1gtUaNt3vetdJYJukElx1Lo4z4Jg0ouCceqX56YGZq2BNHvNugWy/KE0wORhMrRyDWfPoS4wxsEYGKtl5iZ+Fb3EKltUEbNRL5+dbucyU9g0k4OsRIQitzAcQvW914GPa2AbsEDAWAjWhxlmmMgmYIvjq8zD/UBdlNHtndM1BkQ9Od1irYSjjxpdBUBefvnl5TqAj8mcz9UoDsLd6us7gIcj9Nve9rbCXPU6rt/36sYMyXykTwKjvYQpkylsGr5RveqQ33cK88Y5vIljeFv68hxgrUWmyqXUzekeOPaalcy6/Gned++l64RrEQ3cK5TS771+m3DV8vIVDZi8OE7a/mEeJHLKVM0+06qX/igEnqO1evCRqPdRgynTEQDB9FH/vV5XTItQaGYtbAkTGTMMIEF89+IXv7j4h2B1qsK/hCnOvmB1YWZjGjz55JNLPeq/V/9Xhze96U2dpz71qWMzaZimRz7ykYUdM8ADL3S1Zim0H5jD1PViRdSJ/oAJbJcXIEmcz1m8lw9NOWjEP8AlwMlEiblhEmsqACufLvfMOZ4jM58sQAhbWBXtBdyGb1b1t/w8XQ1gKgFe7RH+eJNk4rDFcnFV0xF4DpgobSujXwNHQLS8VfbWIwI6LAImMf56tjxr2M9gaNXRWKR89VhkmQn4ET0jcgaFLeKCU2lV/OYYGxQOm5ukep38PL4GPHSHHHJICeflFDmJh7BpLTk4Y330lwAHTc9t6zj+PgYL9RBxVWVclIGxASae85zn9JzkDWYctg0yGBeTus0yu+2ajWliPsLK2M6iKvIP2R+qnjgvjgG+RBPJBMxs1k2ADcAHszSO2ad6bcyPyR8Q4ACNBXKfXiYY9wTIGfCBRIMwYEBvnMoD8Lgm9gzQHcZ8V61L08/akeM4AMTJXGLHQcCV344NSrWL+yWeD7r+wAc+0HnKU55yg+IxYdorx7QbqGUm/wAeMn4zD9tyRJAAECJqtBvDOk4lLSAlutT3MX581YBsCwPjgM9SSBDHVJlXKRQsAoDz6l5749QnzhUd6N4tuGzXQszJ6jCo78c1VvL71MEPRkeDEzZyg6M8GVUJKjLYoepv+Xm6GsD6eDiwHfwufJ4VCJKIjViRzPLhVD7HXvWpgh8TnoEKE2MAqYq+zGEZ4LEKNAHyOWFmGsRmSLqI/cEuBPsDQAFEQql7ietKgMipF+viVRe5ZtRNuHbbAgjIvYS9WrdkrpQ3CGgEirx6iXsE6LA94zg197p+r++VJQszHyCh6sBLdSKqngfIvfa1ry2sWj0LMpMjIOWe3QMB6pgoDzvssPJ//pm9BvjwMWVjSAFeCSmBFKZVLF48a+PW9LOf/Wy5hHETcxxiwWFvPiZ0DE/0v/h9Fu/u3Ws1yNTBj2gNSNfAbLUnDLMOflaD4lfSPcoSLJIHWPU+KxCEaSFVwDELPXK2BX6qEzggAtSYPKsrRxM+wONlMAV4sDx1k0i/+8CUbLzxxmUrg+23374cKgkh/5JB/i/qikHl/3PooYfewAnWPWBZfd/PFNWvbk1+U38vIIGfg4kGy4Pmx/IAGFa1GDUTQJ0JblJGW8fwK7LZrEzcWIG99trrRuDUip1pE3DF1tVF+2tj+37JlUTe//73FyA4LQf9ep3y/+4a0E7HHHPM8o/6JwDEnIzBs+AYtAfe8sk9PjAtkfp19HesLvCjXP8DYNhOiwapE/gIEU7y5knHfeUrXylpDapsqPMsuLbddttyvLFasIToVGOQ54+pD+AzfrqGZ58EOyuhKWLCb8zmFi8WRszy+jwAr28D9OoX4NC45xpAkzIxShgki0T6i4UgPdjEV0AEDEAfxrUqICwVmtKfqYMfuSaIlaZOpnFNIv3MKYMa0vWAKC8d1qBOwUJJvWsYnYzvgc6gIzA1mDjYOHUOg550/UKaQzS41bpzwtRiRRD20Thu0d+xP2h97A/BzE0bBCkzct6ozyxF/wEWTOAmb2BQPzLRGcDUM/x4POQAD/PuIKDS756wP0LYDSYWDiKzXLOJoNoxFSZs/iZYM2xMTODDALEm5fU7xnPm1Ua0Vr9yxvnNYI0xYxIwMcrXEwM9J1kTESdpvkK9xKpenzAZmKSMPeHH0euc/P56DXjejfuer+qr+l31cxxT/a76ud/v+n+MLVEDzCqmziLD3OGZi0k8jmn6DsxgPJnWjKPAQ+R3EiDgRZSJhfJOAI1YlPhskcD0j12u+g45lglWHUPs+YZxMm9ht4xD+iJwoz/HgsPx7isWHEzU6mDMIphh86oxj/kZAAJgHCMq1LMcPnpvX9qz0NwIXAF0jgWeMKGCRGQ8V2++ku7fvMrnysJn2sEr7m2q4Ec4KDBigqAAytQglBs2R5Wqy6CG1OgGc53CiyhDx4mG8T0lW3npKF46gMYxKXFc1NGtPPk+AFCy3JpopXp3vEYH1IQcz4tgQ9R70hMYHdNnmCTdfx0ExQMzCd3oO9rKw2VVMUuhB5OhAVP0Dru8AQVQBoSwm1gOfiN8PNow0em3QIxnwcBh4h3G70l2aVtefPSjHy0OnhIZeuZmMejMsu2alq2Nd1/ymTIGSIZoV3u+GyYwpsZBQFabW0kff/zxZUzBMFQnp6b1WA3Hmez5eAIbAVI86/MgxjiLZyzGqIDdgoUvIGARCUiN1/qQBbf5RX+rCxYHADd36T/mr35RptXzzVXGCYudGC8xkUCLeph/Xc/1ld9t/sXgmJsxNFJBRP8VzYjJ1mYSa4YwVfNdAtTMk3wJw1XBuzFcucYiAshZgKnTLMahqYIfitSZeLhrbCAD+MGwoNm6dQBKGtSQ1YRzJiV5VfhUVCcdE4XBSINbkWEu/M4xFXpVho4pQkW9NC7hFBdmFr9bwZn0Jg02SuEN/gBt6j5LCRCkLemuSse2Va9Y6cQKpa3rjnodDziQgzo2eGAIhJgDgEwl+lnbEuwP0A5sDSPOsVI74ogjCpC3OBgmqmmYshbpWBOQZ/2www4rgz+zZtP+baAHWk024RC9SLpp616Mw8F2xDV9Z9LWb72qn7t9N87vxvUwTUX53j3jgAtHaM7q3DRGEeABCDHJYzsAAYtWYNoLM7TbbrvdYL4apZzqOVWG13yFHAgzPUasiagrMb4F8PE/q4n5kcWkKvxB6Yyw5GCLsD/EeEPowALMs8EHkSP3rGSq4CccndnJdSSdwsCicfqhv2Ea0oq7Gx1th+KYkHQ2Am0CPiQAFHqQRGNZ+dl8cM0SVclUNwnH0FLgiH8AM/qcNBhja7YyA3TqArTq+Cb+SQExK0Ji4JsHYa51rwYF/Q1LEFT2pOrnebH6ZG7r5rw8qFysJrs8pooJrbo4GHTuav7dxGFQN0EbzJuCHz5NJlXnuUb6+3TvRZ5pzAPzSACbXgvh7lcY/VsL7zrwUQc+LRYbMQ+MWgIGSz8AzoAIL8IMxLcGewIIMafyfxlVjI9VgMLCYrw2bocMq9MALvWxBqghMVfG9eu6Yk4LBs+4ZbFlsWirFS/1cW3gMubkuNY03qc2kzAbRSdDddUFMOpFfQ3TkAFi6tevTkzRCaoKr08EOr5JAvrlzEqwSsDVwx72sLmZONyDVeUwJpC6bpr8z15bBz70WI3+ipVFk+sNe4zBgzRdtQx7/WGPR1kbBAxi/G+YvPgGAMoBqIe95qDjDXBYBJMpCnlY3zPnYj2F87LPH3DAAXMDJgfd+yx+19/59xgDDltifqzYmQv57mjnQcJpFgNtTOKQ2vZ2FoPKXym/G3stTCf13PTTA0YnRD34jAJhbQFVJqt3vvOdBfQwg4dgsPUhz7J+Ms7YyZ/IdWI8EDmGXXE/AIe5wf1IjYGdbyoBpuogJ+panVNdM+bVXtfnsI2EsHBct25dAX/eBQNgy6ctUwM/4ejMs9sKtiocaTlkQqn1B2DYhqyDmChnUMPEcfGuYUXJ6Fg6MFsrihJyVf9ZeahH/ab5zjbLTBhSBz3x/STfw9nQQz4Poh7oX4DCJIn14mDIro6JAwpFVkS926izfD18DzA4BsyI7GhybatPYbWYy82XHCyFaZuQn/jEJzY5fdUdA2RLgoexkboA88N/SyTYq171qrLqpcdeYsKwaLLFiPbyboxD96fMhwaYrS2siUm56uLQVg2DJTR/6EvBmsT1LZ5IONTH973ew6yElYkFb9xDnON/YxL3koiktnAKM1YcN+g96s4qQz8hcZ1e+cXiuOo7M9naJd9UAJB7gMWjMZIfIlJEfYedo6vXH+XzVMAPfw3AAZ3IQSoaMCrMdmhgQEFaPVelrYasXnPQZw1hgOPszBbLMdtLx4Weg8EadJ1F+V1UnslgFqAndBirGmAUldoL5Mbxk35nelIHuWBMkvzZhD4z5wr9BJKxKwCSPs2xMdirUepm8NIO/HYAc8kL0cX1xUKvawNlqOfI4cGBkf+PSJAYIHudu9q+BxSlBtC+IuqqANaEI6ovkiH2MoMzl2NkI4qVk6c2OPjgg6c+yK+29mt6v1gfCxXpI9YsuTVMQoxbni9mrTe/+c0FRJhHPM9YD4yx+ZBFoZvE842xxRQF4MDsYFCMKa5dFc804A1wGYvMZywrFmrEXMtdIvwn1cGCvs5m8t9ETJiD6crCC4BjqlPuMH5sxj/3gCW3aHDPyvWsYUanDXzoYSrgh7e8xsaW1IGPSvheg5hA6uCnaUO6TluiIazydBzRNVZr/JKCvQrE3VZ583wdrI8IJh19VskN6Qct7mG1UgI86pTrNHXI5IT5MSmycwMkwDITCbZQmLOX1b+BSbgoU69oLf1bnx4WvGHeDHzhzwZUYX96Tb5VfVh1GWhk6g4xqKKaTeIGn1EjWeJ6g96BZ4MvyhybG1S97w2k2tfql+8aU66FxzhgcVB9ev2uf0lyyExgu49udbAilsQwGCARLtXBW5SMseOoo45aLoY/RwRaMK2kzFYDFinSlhjnJy38mZiQjKNVBl25GBBO1fo7IECqYwP2huUBq2zMwzADJYgCY4vrYpi5lQA5RN81/vjdgol4vjHF+cFGOwAAMxZJREFUwIfxgO+Recyzz5zre+AnyvZufMMMM0sp34sY8wDG8DOtnlMO+N0fz0T85lh+VO5fMtgQi4NhN36Oc8d9nwr40VBEI3UTDUHRHL9MtjGQUFzThqyeUy0jlB/vfovP8d7tO50MwyNfixdRBn+fmIDKlwv+x2TFOTZWsLO8XZOOh1w/mSX4UT4JWljflfcFhevBFpZK1FEUo5d+rR+x/5tggSCvJkAaQPjwhz98A58RQPTII48sjqKxOiyF1v5gVSVL499TX3hwNrQ1A3MYYBQ2/tolxvoX0LGwEUUZg3v9ghZGJiOgVn05gtKp+vEDnFZbK992Ffx0AJrq+FCvM6BGp8yH/ICe8YxnlDo7DsMDlNbbRbTpcccdV0BwvS3q18//J6sBfX0awMddANAYVwtI44B+BuxjgKpmMH2+ukBxrv4vsjN8/MxBQAzAhIWxUOgG0AENOesAG+NUOCO7nkVZuJ5grv3PKkMAQq8Q4z5fNXNhmO2cG/Ntt3Pi3HpKGPePBVu3xHgZ05iDXb96rTh3Gu83WQIm/yunDbPOPPuxGDjrDWnAjIaclAJN/jqsgQw6j07UduOYUNcu2UR1hjBNRBnve9/7SmeBtqOT+k2OGTrRqZpMonG9Sb3TFbOgh83D17Z4aAAI7QBQzErQvlIMsINjcUKwGbaS0B7V/Bfxe7xjBtyHlaBBGCsACPUCmHx9HM/fpCrMbXTRa+Xk+WDakqFbnXpJJB9r0yHXYI1q1z9DDPQGa4Mn8ODeDdwGQqZx+vOseRaAphAgCNMVNH183+a7gf3YY48twITvR1MB3LB6mOEIZz7llFOKWbLbmHTCCSeUMSRynTQtZ1GP00eZCIGBYfQ+bX2oo7oCtQlcp6393uXxW8R4WcRVQSBTHUsNq03dnCe1gfHm/+Be72vPzS9QsRVZVQyesfquft/mZxNSr0mpzXLyWoM1gKJFvZogTTZBuw4+s70jTNAmZxObSbkqgDGAIikeWz+WsJugurFDXpwuARvnAAVAkNWRVRHxYGN9+OjUBftjB3G0ejdgANRY6fUDPq6JkWCiYZZpA1RykAR8wqSFKQUSezE4nm0TinvWxkT7Yow4V2L7MEIGsfoYUA4e84/2tDO7FS8/qmHEYgTrg12zIzdzaN0MVr2eNrediL4BCKakBlIDs9HAigE/s1FPljpPGjDRmPxMrkwjogWmLcrlcM1B0mq1LiZwGYBNhCb0Qbk7RD547bzzzuWeACEpFjgXOheAAIq6RQkB5XwCgBZAqCoYOIBBlNEgAT74/wBS7kt9RhFATSgtHwUyDmMD2PKR4ijJfwZb5tqAL8atG6sySp2Z45i6mBKqW9sMcy3mMb4RfIUEdvRbkLkvrOCpp57a2WeffYYpZqhjRc5is5hYrHIxVHSmrYF0QBQT15Yeh6pcHpwamAMNJPiZg0bIKjTXADu9KAYTLDaB2WdaYjLBRJjsRIn0EpOf7RD4AGFkOCgOEpNQRBUy8UqgCAiZ+IEREz/TTx1wAT1YG6xF0PF0g9oVlWSyayLqzMHXhp6Yiaaht3FtII15jjkQSMVe1ZmxOHaYd+ZmDsL0LjGatjeZc+gcd+LGutm8lJM6oDWOABvqpj1k+wZserFU2orpNNwNxim3ei4XgHVLpmGADkM5SLQT9gnQxkaOq89B5eXvqYF50sDvzVNlsi6pgUEaYE4KR0WAwIp2GmJyVx7WhylpEDgwmXCC5g/C/jyMACzYDeGvgI+khPy7ACrhsoBR3LfJC7iy3w4xCXPAffKTnzy0WQWLxERmT56IHGlSbzoRQQL4MEXz92oD+FTLBiT4wgF/GK1oi+oxw3wGPDA1nDLHBT7KFdGnzYCf3XffvTg2i3LtJkDHE57whGIq06/GFf5RgKdwZMwk4KMM4cwYQ4Em0Z8AbG2j/+pDGDUROEyrzIzDtPu49c7zUwOz1ECCn1lqP8seSQNMIcwHKP1xJ8GmFeBrZJJhMjCBNBG+LpyI5YwJU1CT8xwTvj7MMQCJfDP8goAhOT74FokcA6xMuMAPRgTYwhCZ7EaRCJ3HHDUVQMIkCrQBKNUIlqbXaHIc8x8gaGKnT+H7owgGCYjEzjRty37l8BkCILQVASJdW1twau8m2oie1i4FOYwqwAunTuk46J/Dpz4HfHIepit+UhYLWFKgXVCLSFYZ7DnKA9ieJRGIkdpjteUxG1X/ed7K1kCCn5Xdfquy9gZ5gMAkiOI3AWAfJiXyTzEnRLlNTUnqwzwWTICkZE1Fjg6r86p5zf8mNptrMk0x+cktJErJb/LOAIQiH0YVpg+ADdPUZJ82PjjAD2GKMpFOUqS+MHkT9WOKHEYwJCeffHIBj9VIvWGuUT9WxIltBLRBCJAqM7QcKcBJN+HnhTFqYqKqn6+dAd5gFTE8QDBzIxNmExMWkyxAJGxa2wH2HM35kI0KLOv1zP9TA/OqgQQ/89oyWa++GuCwyRfEII+uxwC1YUKoFop9AUKuuuqq4udjghiF1bDKF9osoWCTVTUgZ1K0x1AvwYJwnD3ssMOKOYz5iw+LyQszhI0YVUziEjcKpY+ssN2uRT9YFAKkTSt6SbJHkz09YeSaAl9JITmT20m6rdQQ+oZoNBF3dVFPfley5HJwrtfT75zah2HZlGFrAwBFW2srZWN4wuerXo9B//NhE2UHwMm5pp6i9bRtvc6DrpW/pwZWigYS/KyUlsp63kgDJlsROhggzIwJgdNnG2Jl7XqcWDE+gM84WZCxFcAKlsak1U9MOlblTU0yJkD3bxXP5CLHjnxDtsDAOlRz5vQrt/ob5gL4YrKL5IQA1dOf/vSS78SxJn3X5ofVtK7VMsb5zM+JjgABJp9BAmCIgMOatQXSgD8h7vYr0ge7CaZKmYApMFkH6ExPAHaTe3B9+mYqk3NGfxSaPwog71ZX/RxQx6paVIiqjKz23Y7P71IDK1kDCX5Wcutl3YtTJ1MQyp4JRJp2q1b+L6OISYU5xXVMrKKN+LFwYB5X1BOIwgBxTO4mVtrYiV6JC+vnmIA5KLsuJ2cTqVwyQBbzl0lV1liRZyKMhjGxyPnDaZZpjchcbJKPxIVYDwL4mDinKUyPYRLk5NtL6FP99QksDDDSlvDzwbYMcpgGDvlo0b3oMn0sRL/V1nQ7SPRpe8YBo5gazGcv0DXoWv1+x4rJQxSsapjW+p2Tv6UGVpoGEvystBbL+t5IA1a+VsDYCpMdfwXRK0LFRSDVV9v1C/gdq8F0xtxkMgUqRBjxh2Biakv4ZXDYts1BdRKM63M6NbE3CY93jvq6Z47KmACAAMNh4vJZ+nq+QMKr3RcWQpQT3XQrP+rh/umOYyyzoj2CwvyH8WG+w2CZ/IVKz0I499IVkNqNTXMP2Bb1tRVF1Sdn3PoCIqeddlrJz9TkWqLUOEEz1wKiVRC6+eabl/oPYlm0Gcdkvl5yXGnjSQl2LPJo8Xmj45TUwErTgKSjvaQ7V9vr6Px+phpg0mlz5TrTm2m5cJOgFbgJkQOucGimIC+ThOSDJp7qlgomf+YtpoQqQAIisBltgp7q7Qpzts2BPbWEw8fqHYgBZpqm+XefmADOzzERMlWZXLFV7pW4vqgeL5O2SVZoumgxZjJ+J6KAoh5RV6yRsHnmNH5EdKSOwFCYWoRNR9lx3rTesU3KZ1ICcKqAETuCERMRJUVAPT/SuHWMHcElhWwq9CSXkv3fRO6plz7me1m2ZeR2D/V2cH39GBh1H8xS02DaMEB8q7Q3RpFv0azauqmO87jUQFUDokK5AVjI6s/miZAEP6GJFfDOYdNgaYJvO4/KCrj9RlUEDvkBWVmbMIAg5jAr136rV+CIA6rJrE2GoFeld9ttt5JQ8Pjjj+8885nPLJMK0wzn014bAFev5Z7e8pa3FMfkaoSVe+C0yi8Ea1UXTA3/Iy/Aj8PwmWeeWRgS4fG21wB2AELAh9TNHvyggu1R3ixF+cCPfeVCADwbjjIp0W03MBHHjvKuH2HXbPg7ijBLajMASAoDJlUsHVOWZzz2heOzxZGZIzL2hfDJ4es0LQGOgWD9QaJJ7GpKamClaABYF5HqZXw1d8ZCN8HPSmnFpXpCrcwNXvxSchXWu/FMfNgML9Qns4jJ3med38rZKtpxJqJgSXpfsd1ftJ09oZigrPh3X0qM19TXR/0BE6Y+QKUu2B97VW2+ZE7pd19AHobIy4TO7GdTTgyjkGngCTCqSwBJOpxmhu16PfwfW0moE1bKKo9JEZDgAzWJZ0T4On+oYL+61WvQd84PE9jee+9dGBaO04cddlgJj/eZbxU2M7JaK69X1uhB5Y36O+AIjGMKmU2VPwmdjlq/PC810E8DwI4FsWcIAKqmcEjw009zc/ab3bnlikFDG+xTmmkAyDFJxkTZ7KzJH2ViMfEBKkxgJm8r+0Hyvve9r7BTGIFugklgruDg3HSjTgOE63npY/xLeiXoA8Ixa1iXaZhfut1jfKcumBC+MFg+pi5sxTi5juLa3d4Nonyfdt11124/D/UdgAl8Y6mAX2ZJDKT0AgAWkMsxXtQVCQfvoQpp4WDmgssvv7y0Od+4caIeW6hOXiI10FgDmHSA3cucCfzIDWesnZzHXOPq5YFNNWCiYZZhexc5NGuTQ9N653G9NYCZ2W+//YqfksgqD2s/4RDtxXek37EiiESs9XP461WOyQ3rw0TWzVcmfKVEws2DqIc62aCUk+6kgI97FZW1/fbb92XUhtEJQKO+QJtNaAEfA3NQ81armDj9pI2Iw2HqFsfqZ8E4MSWnpAZWogYs8Jj7BZ1YHCb4WYmtuFRnLAbfFiv1qs/HCr2dVV1tPit8uTjnxR5d3RTCr+XEE08sfj7Cp/uJiVIGY+zPsCJKir8JBijAExCEYQmTB4ai6jw4bBltHo9BY89nFgIcOIEDiBhS94Cl8v24wizIgdoA2qYAma6LVanXMxhe7Rm6b7PsptfC/hBO1/U6Nr1GHpcamAcNWCzxpUuz1zy0xhh1SOAzhvLm5FS+PvaFsro++uijS24hET1VEb3Ez0dIO/avifD9EebO92cYoMLBGdAyKQM8Vv4AkTp4D6l+ju9m8W4yxppxxuXsjC3h3wX0xDvzEcDIz4mpySs+x3t8F/9X/aXcO3OjJI/9GLdh758vjT3AXLMbqFB/0lZixmHrF8fTSZgX1Ym/UkpqYCVrIMHPnLWeQTZl9WhAuLoJW6SVCVAyvGOOOaZMNHxAQiTqM8FzTm4qVusc/rA/8vw0lTCv6IvqVhWmV3mKAIl56avqIfqMblDb3QRQ4wwdYMh7fAaWmHOqYMln55j0vegBOJF9GzgMoFR993lYdkZ0F+kGfHzPl4lg2mYtmDX1ETyQ4GfWrZHlVzVgHLX4GcSIV89J8FPVxhx8FsIsh4hJa83SCr+6+pyD6mUVWtYA1gdDE2wCgMMHSBZozAufEOyACVem5mGF74/oJzt8N2V/TPb8Z+QBElVYBTmu8cQnPrGEegMI8yBRj34+SEBJAJmmdWbyA5CYzoJ1007K4zRZBVA+A1fqAARVQZFyu33ne22KUQKCujFpAT6dP2uJOrjPlNTAPGlAJKJAhNvf/vbFn6dJ3RL8NNHSFI8xuHJw5MMgwsKKtteqcIrVyqImoAEPrIm0vj2CHE6iwESAARr2j5KhGBgaVlyLOY0fjPDqpmISF0Z/xRVXLJ/C7+dJT3pS8TfDAJmYORrPEqCbiIEzdRtFP8s31+WDa/LFki0ceBwUOec5VR9tGqxSACR5coSux/dxDF8foCLAb1QDWAvmia6HZZTiOm2+0wepguE2r5/XSg2MqgHjnHxU/Oa8mjwvCX5G1faEzuPIzBNdSK0Vp/eUxdRAsD7dHlR9QDh1MA5hihpFE8H+2K+pCfsjtPqkk04qk/LTnva04pMSpqXY8kB+H4MM36Bwhh2lbuOeE8kNJ5VvCGCREfuoo44aWFUAJhgeDF4Todf3vve9Zef3iPBynQBDMo136x9Nrt32MVGnXIy1rdm83rgakKXe8yMRJ5a8196J1XIS/FS18bvPHm4rWitbKzNKtQrzvYHISszLStOq1+c2RYI2L6tEeQn4I8TA2GY5ea3ZaQBFy3fCQ9tLZF+WrVk2YcehdEcRq6I1SybUT3/60yVFQq9rYByZYK688sqOLTjkoWGG1ff0cc6+ISZ34If5Z5bgR/mkKdiI+jd9x7pxMu9nUmt6rW7HiSBbu5SNu2ryAjLo23cYIo7G8yDGQtJ2xux5uLesw3Aa0DexnOYoQCPmS2DeeBFzpvky5kzMofnSvKlPx0KhrfnT9Y2XFo5YIMx6P1nV4IdN3+DuZeAPKlpDDrO6sZquRpJwDOR4OYzzVbdG4hPAJCJLMTQbK69ux+Z3K0sD9vCStLLXqh7gkbRP7hc+PxIh2pRU3xpF+BVJpof9qU9eBjLlYaLsFH7kkUcum5AMUCa9HXfcsZiAomyAypYLBplZmb4MukKvPRfq07YwPQOoTF6TEnu81UV7GJvk8fLy2UKsbbNevdxB/4fz9azrMaie+Xu7GgBk7Cog7YKX+RLwGWaO7FUjz66FhXEt5k0sbn2M6nV+t++NqRZkXtFnux23qsCPQRpNHnQ9sNOrAaFIDzlgA5lSqIYyMOkMJgTX84J22fS9quIazFjCVL1GjZBQD1lrUxZDA/LPiDDqlS9Gvp8zzjijc9BBB5X+B7B4iAGgAw88sDjuDquJNUvMj8EA+1ONGFOXk08+uazCgKt69l59n+9R3a/HgGViBtCwk7Pon9gzzy/gU6/fsPqpH+8ZP/XUU4vPVS+AWj9nlP/tPcbMeMEFF5RxJNgVYwfAaawy8ViczRp0qAOxKEtZbA2Yyzzb0f88D1UxF1rcWxx5D0ZHvzVmxJxpvow5M0C8OTN847zHi4mZeN6QB5huY4zPyhtF+rGmCw9+rA4p1cuEUwU7lBxoU74cDenBprBhBjyNGawRGhAyhpB9b2XsRXSSMGlxpBy1QUfpBHnO/Gign6+P/srPx75U1dwuMi77Td6eUZ2fmW8AGckxXYuvCWo4TFzdNOQ56AUshLwbILGSw4aZditrmO88Z5JDkkls+4AJs3Cp7hQ/TP2aHovZtXeWiUFiRuMIMeAr28IK+JH5eVSzZ9O69DtOPYxrxqx5CLvvV9f8bTQNaF8LL3MlQFIV86Q5K+ZLC/lh5sjqtaqfASN9PlglfV09zNVeTPDmY/OmRU6bvn0LCX6gVA3IWTjSxVO4xqoyMRqyjQY0OXjpHFXRgYJl8u5/q2QvK2fh7CJxJuVPUK1Lfp4PDZiw9YVerI+Ed/b3kvenLtttt13pQzZDtRt4E+fl6jWwP1ZSdoMHeoCgl770pT3BTfXcbp/1dwPSN77xjc6ll15azEPTAPQGTOV59wy1PRl7TkV4AZmTFuPTG9/4xjJ2SLtvTy9jEkBKAB7sHJDJ+XlWos9aOGrzYfvdrOqc5Q7WANAN8Jgrq5YL85kgC750+mCvBdDgEvofoa8DUl7GJwJoh4XGPI719gx4ISciDcy4TOhCgR+rWQrSkBqVoN8M+BrS+zQfXEyPhvIycEC1HDQ1qLoKI5acianBSi9l8TWA9THJ6Zd1sRcXRuNZz3pW/afl/3fZZZcCXl7/+td3nv3sZ3e9zvLBtQ+eDZOtVdbBBx9cVlO1Q4b+F1AzMXpZpU1jgpYCwn1MyhysjTAyxotJioSJcinxx5KGIJgsi7JgnEw+/B+0mb4xK5OTKBoyS+f2SbbFars2tgVjq12rplapVbQxhmUaC5luejdHm6+9bEMR8yaQ5hnga2jutPCqWnK6Xavfd8vgB9paqQKxYlOsQK0GCTCBVdGY0wQ8vXSoI+lQXiYMyBZIA4Ss6rxSFlsD2ls777PPPje6UcAE+Dn00EP7OvvpRzY1Zb5629ve1hGKPoi95KtRNXHxLzHRopLHFZT0Ax/4wJJHyIDkf2B/UkJPfH3oAXvW9ooUiLObPafvSYnJRnsYxCW0XPO7Fa9JxzgM4IYAPgZ5fcd9i8Cbtphw9Fv9zHi6msW4rZ1mBQzG1T1TkrmSK0YAB+Z1Zmtgv9uibNwyxz0f2+jFr1CAg7FLfwxAPur1l8EPFEgxG2ywQUFcgwbUUQts6zwNRxEa0oBFdEgd0z3MM5OinuEEzS+Iw6NB3eeUxdVARHjVIxmAE7t6CyVv0m8NUNghWZg5K/MP6iYWAhHFVTVxGUiYWjbddNO+QKvbNbt9h7m0QuOzwhxlAhdy2rZglrA+BAiYhA8MJ+dHP/rRE2NYrGL5dDHVAbpVkzdnUSbJuhjPgJ91SykvfJ42+xM6B9LGNTXU722l/O+ZNT6LvATy9W+gdB4W1oN0yA0E2DHH63/E/K49JTJt22w8qD6j/q7OAJoX5src75kI5mrY6/7+kgPlYS4qpNMFmWU8aBo6vLiHvegkj2cu0ojyYwAN7PM6ph2srQQhWKvPlSLqbhCXm0C9dVR030oUbaEz6jdYt5TrNUAvdmzH2lQXFgCKEHRsoKiupgIA8Qv66Ec/WhYtnI+rAky7LnPJXnvtVdiZAF3MKiY0fa2tlXz4gliQeBlLAPw2VpJM2NgYzztx357ztgWzIhP2HnvscYM2aqscofP8tTZf2mhW5u6mEyd2y7jHERRQ1mbTYh60pS1OtCOw3LTOTXWmD9K760/Ccb1pPQYdZzwDTrFgxjnMg2fM/9oHiJ1Wmwyqa/yuv/DtsyAx/vCdcQ8Aj7lyJYNZ9wEEGQeMp+bQYfV/Uw3HvqzjUZAG9YDpkF5QITYFRT5qqHY0xqjvOhvzkBfkGnSdDgf0UABlrGTx8LuXlMXUANZnm222uRHTwr+EyMI8rFiFc3x++ctfXgZfjEXdxNXLTCLyC9tkQmsDoKi71TAAb7Bln8fIimSyQq4Cvqb3CRgak0y+FmMmXia2SSwOlPXud7+7s9NOO92ojZrWt9dxVqYf+MAHOpJW7rvvviOZBenR6p1OrXgxQJMWuYUuvvjiUgxfripLNemy5+36+h6dAw4IAqYXfmf6p5dnUb80TwqqaeuZGkYP+rDFTsyV5s0Q87h5EuCJRVD8tpLfA7+Mcg/LZq9gT0zAzF/saXxo+NN4WSnq/FZzUBbfFaHhkxCrHCAnPL6h6xCDKDAGiavLsGgvrpPvqYFpacBzZICU06UqnN3l3Xnxi188EjhwLc+gneBtv6AcpqGqiataXvWzgdDzg8aX2LAtAXQMtJhZz7DJM3Zcxlg0YWU9/8ATpsdnYkKR5XpSYw4/KHXrFmU3jm5MRkyM2FDt7H0UMcgDfvoLMMj0NQkQGHVjulQWAGS8nwbYirLn+d38ox97YTdZSTx3gAZA5AX4mB89XxhRTGvbjBkdYc2wO/oYUGzejkAfv+sz5ko+eOqQckMNLIOf6tfhmMuOT6mQpFWHgQgoCkcjbAulYoQ8jAYmAInSvXoBE8yNRrKaQ8UBNzqSVauG9H1VADN+BRrS+yIh1+p95ufF1ADWBytTHQD1c2HtANG4jKoVqGeRz832228/cAPO0DK2SR1Q4G2uVN2P6KV1S4APGPNsc+718psJwXhhjFCuQdwz7/kHmKqLHcdhHUw2kxIT/GmnnVZYmTbLAFI4pWt7eZrGFTS/bO98Ti688MLSbm04rdfrZWwGfPRRYE3/6DWW189dTf+b7zjhegEh5knmMGSBedOL0J1jq7nk6FX/xxh5drsxo5gcIFT/9HwAWJ4lL24qnhPHVEU5+ol+YR7Pdqtq54afu4KfOMTARJFeAEs0KkZGY2uUaiPHed41pvO9e2kEg5zGivfq8dXPAaqsOLw4gXbrHNVz8nNqYB41EBT5M57xjOXq6f/YgK233rrQ6Ms/DPmhbuLynB577LElN0eTjMv8zAyQ/GmYv9oUzzt2FmixQe+6JSDkXZ29+kksdlD0FjuTHsD5TQFYymtDtC8whfUS2Ydla0vUEzjh9wgAcVnAyrSlI5MqFszEignbfMk/abU6OQ/TZkgAL+0BqJgjvQBI8yZ9VkF9/draL+ZKc6RXuHfUj43/nQNQmR8jf91qNk2GXpq+9wU/1YtQdDRwUKCYICAoGhYixeRofA9oHZVWr2cVDPl6wKBVKzwvlLn/U1IDi6AByfIe9ahH3YD1sXmovu77UcRz9clPfrKDUaqbuEy2nGo5OfNPGCTYH+yE1f0kFhiuyTzjpd4xGRgrjBGAgkWSBU88/8aZSdSlmy4wTWvXru0cccQR3X4e+jv3d/zxxxfAwMw1ibFso402KmMnVwTsElApL9E4DKK24UvERKlNTKoc8HMyHboLlLZhpfAidAtUAv3B3Jg7g9HxHAA69O5VFc9FMET1uVIbpRWkqq3hPjcGP90u68Ho9XBocI5+3r00bjBBGmxag1u3eud3q0MDBhJ2cOxk0MT1CdfkBHBjGNt2VIzwUrl4QpimvIQ5j7JaF5DQby8u9n2mNEkQOUMPMhcBSMxQfH/aZn/inuPdMx8m9fhu1u8yKjPR6QPjCjBio9KHP/zhxdQ1Svs2rYPoPiARu8TsKUeUttaevm8qzCr8q0QFhX8Vxo7LQ06sTbXY/zj9PoiDXkfGPOnd8fHqdXx+P74GxgI//YrXeFBrSmpg2hqwwmIW4IhocO8mgDmGEmtp5Wzwx0ZarTEHtTEZYn34esRzgAY/8cQTS2K7YR1f3VM1UWGvKC73ipndfffdO8cdd1xn//33L6ajbjqI70R+mbQnxf5EOfP2zlkV27HbbruNVTUT1umnn17MUPIv6T/TECZBEYTYn8gDxLyIEfAboIkNwhgAMuoJ/GMfMPYWBULZg21wLNDDUTdluhpIsDNdfSttYuBn+reSJa52DTC5yqUC9IQAMQZzEwGWh/8CBtKAH+CH6cNEYEIwiXhxGJR7Z1iQEuVyfJQqAgghQJjkdoDGmiF8S0xYvUxc5cI9/qg7fbzyla/s2K0du9NLgi3AIgBAq0WEtu+www7FrDDqPfPnkDIAcGbmYrqbpgDWTF5SlQByWBwsp1dTwXgCbPr8JNmqpvXJ41ID09BAgp9paDnLmLgGRCAyJ2F0rKJQ9wZ0q+BuYrIChPweETPYFeHVwI/IDYwQEDFK/qWPfOQjxaGZvZ68613vKo7IW2yxRbfqdP2Oieukk04qEyoAYzU/jAAyABAnaOf30oVr8v2xz5RwavpbdAH0AMtNNtlk5FsVySYj85Zbbtl5zGMeM1PgAKRjbfRXDGOAecwmkA/sAzb6vWP1BaDH3mG9XBdGVkyemBpYARpI8LMCGimr2FsDJjAbRAIshGOtSWCUAT1of6voYJBcm9+QHDNNQYGJRzhybDvBn4YZ7pBDDul9I5VfgDDbLFjJ293byn5UMTHz5cAAHXjggT31wlTm/uXnGQcQjFrPaZ6HheN0LgJvFKZDn+NsLhv0nnvuOZGtPEbVhz4K0HhVhc/lKPdavUZ+Tg0skgYWf4m3SK2V93IDDZiEhOUCPkxZAIqEfaMAn+qF+UhgTbz4SjAlyHsSvhHVY7t9NjEKY8csMX+95z3vKdFXg0KG3Y8tMIAk5jqba44DfKJudpHnIGsvMCxAL8H+qLt6LLKcddZZy8zgsPfJnPSKV7yiZMJn5prEHmbD1qnJ8Ql8mmgpj1lNGkjws5pae4Hu1UoWSwFc8HtgTmLqalNkK8acMF1xDMXgKLefMDmI+hFBBGjYfR17MygbLxPX4YcfXhgnJqpxfVHqdVQHZjP1YRrsJhgvPiu2p1hUAV7OPPPMzo477jj0LfLhEhLPR+p5z3veWKHlQxeeJ6QGUgOtaiDBT6vqzItNSwPh3ImZ2Wyzzfo69I5TJyGqgBVfCaHr8qD0ExFegA/26B3veEeZKB/84Af3PMVkzG9EbpjHPe5xnRe84AVD+/b0vHjtB1FN2Cdl9WJ31ME99Pq9dsmh/8WecRLmU4WxA/q80y1dNGXXhi74dydIPig3En+XpkIXGDF6e/rTn16c1puaQJuWkcelBlID09VA+vxMV99ZWgsaEJUlvJcwTclwOknhHCoHztqlZHjAD38K0WN1kW/FFg4ve9nLOueee25hpV70ohfVDyv/m1CrUVxMXOEc3fWEFr40YfNzkQQRMBOJVjeHyCAMuNmEkxmxDeF0LQIPS8d/qh+wYr6kW9mqMW+DTIXD1E+2bb5c2qepcBgGerBlzFz9nMabXjOPSw2kBmavgQQ/s2+DrMEQGmB2MjF7Z34wSU5DhMszC8kHxAmaT0999S/Ci5mM6euMM87ovPCFLyyMUb1+1Siugw466EbOqfXj2/wfU7b33nsXB+hTTjmls/POO9/o8sLx+SnxN6rf440O7vMFx20RUYBP1VzItOYF7EXaAdluAQ05aDiMewEq0gKEOa5PUY1+ck/bbrttAXdNTuCkLoydHxmdjKOLJuXlMamB1MD0NJDgZ3q6zpJa0ADziC0EsBM2eZymYEVM5Mw23k3MIXIFff7zn+8cfPDBJbRcpJes0VVh1pGosI0orup1h/0MdDznOc/pHHPMMZ0PfvCDJcy9eo1gf4C8fskUq+dUP2NJRLsBD0APdonPkwzEQGQkfayeE5/5SQE+nMylGpDCwGeOxeoFLI0igBQwZsuGQaLO9vs655xzOrJzKzclNZAaWCwNJPhZrPZc+LvBvBBsAD+caYqJ10TI0ZrzaxX8YH34HmEXhNrf7373W67aLExcy4X3+CAijtPu0UcfXaLjbMlQFb4/gBr2p24aqx5X/wzg2XAT0HCeTT21VdNkkYAZc5cXFghzBABpd2CI/9SwiQSBMakDdtlll4HsDfaJDxYQZguSNjJ913WU/6cGUgOz10A6PM++DbIGDTVgYsX6AD32sJqFYC/4oagLtoeoE1MccGTy3H777ZerVo3iYuJqO4pruaARPsjrw8Fa9JOUAVWxOzUggv1pKsx92BLAx7UBKuCpKfCplyMjN78j1/EZ4yYVAL+hYYSvFhZuEIOjrURzAV4HHHBAAp9hlJzHpgZWmAYS/KywBlvN1WVqIianUc0f4+qP34fyCQdawkQCLJhkbSrKrwY4qkdx1RPPlZNn/Iez+POf//yODT6Z7aqC/RHlVPXXqf5e/czZ+7zzzivbeNgfjU9UW47otuZ4xCMeUfy77E1FzwE8q3Xo9vkXv/hFuYeddtqp28/lO/f3sY99rGwGu+uuuxbwmv49PdWVP6QGFkIDCX4WohlXx01gFsi0nJx7aTXK55si8sxWCcxg/EOYSbATYTJpK1Fhr7q08T1Qtt9++5UIMGamkA033LAAOduG9BNslySQzHsYuUgO2e+cYX/D9om4w7wJh5ddGbAZJHya+C1Fm9WPZ1oT/Qb4SS4JxKakBlIDi6+BBD+L38YLcYdW58xLZJgcLZO4eaHY/FmYYfj6cL6WO4aZKBIVzpuJa5AesFmiwIR1X3PNNcuHR9bnXuwPIMLHx5YR9kgb1kdouaAGH7AxzGCSNWKAlNsvbF5iys985jMlwqvb5d2n9nI9W3+0xVR1Kyu/Sw2kBuZLAwl+5qs9sjY9NGCVb6IDNKbt6FyvEpMbPxZOseeff37J/cLsAzhEosJ5NHHV76P+v41gJfF7zWteU5IQ+v3e9753cRIWLdVNMEVAYPjnDOMc3e16g74DgOw9xmEbGBY510s4bG+zzTalbvVjbHHhPp/0pCd1mMRmZUat1yv/Tw2kBqajgQQ/09FzljKmBuSBIePu2zVmNZZPVw8RSBgR5i+ZoFeCiWv5Bnp8kD4AIHjVq15V8hU5DPvDfBTsDydopiKAlLmP2A1+WqBUqHwkYJR0UhLFumgbaRFk266KOgM9tvBg5gLuUlIDqYHVp4EEP6uvzVfkHcd+VJyJ50FMotgekV+ce+2KzgkXG7TShelKMsBjjz22+DTd5z73KazbHnvsUZyH3/CGN5QwdAADG8cPp1vG60nqQb4guYOY3ersjzq9+93vLoxOtb8ImRfNxWzKzMWROiU1kBpYnRqYj5lkdeo+73oIDYQ5JdiHIU6dyKFCuSXe40gL9AiT9u7F94f/iMnVKz7Hu3PjfiZSuRYuyoeJM7AdzAEF2bQxKXycCFCxbt268tmO8bMQoevqZG8wjsphumKKZJaUbymEE7o9y+xvttFGG8XX+Z4aSA2sUg0k+FmlDb/SbjtW8Bxr50HUg5OwTU/rmZxFPwUQ4pfixbnWdz4z0wBCAYa6vU/LhNRPlxggIfByAQXoDAYOw4V1ce/A3CyEqZHu6BQI0h7MozYvfe5zn1uq9Mtf/rJzwgknlGNk3542QzULvWSZqYHUwGANJPgZrKM8Yg40EInysBHzIFGPqFe1TrF3VTUDdPV3wCmAULzbCsIkHv/zKaqyRvE5gNKwWY6r5Tf5DNyoE/MSn6a6iLYikfOo/vu0/lc+vcn+7HPkXPLZthhMdEL299xzz8JWTateWU5qIDUw3xpI8DPf7ZO1+50G+NZwdDXp8rfpBjqmpSzsghczyygO2Fgd0WC9IsKwLLIkBxDyLscR5+L4jh4CCNWBkf+xIsGWjaIXTsHK62WeC/ADHM1Sonz6oRuJFoWvn3vuuZ3TTz+9I2lhdauRWdY1y04NpAbmRwMJfuanLbImAzTAZPGd73ynAIG73OUuA46e3M8cnUnk+2m7JIDj1re+dXn12sYDM2OyDzCE/eCAHP9H+HkAo+p7fO4HIDfffPMCfsLcVb9H3wNxQtxnKfQEhDJv2b/LxqX2V8NWMXPNOifULHWTZacGUgO9NZDgp7du8pc50wCmBPixrcQswU9sa9GLuZmG2jhVc7bulblYxBMABBSFOY1pSGh4ACQ+OwBcMEjVd/qVqVmSwABAQFl8dv1Jm96a6FGdADAmLkyVd+H6sm3Pg99Uk3vIY1IDqYHpayDBz/R1niWOqAF+HLYhkLnXSn8Uk9OIRS+fhnHhXEvUZ15FMkBgxquXMN3ZJDTAkfcvfelLy//bn8x1gKQQ/wM+nJyZIedB1AOo44wtR5HtLFJSA6mB1EA/DST46aed/G2uNIDtsGmmDU7ldplFyLJyTf4Yl1mArzYbhB+VLSm86gJIMBtVd1AHfDA/mBZh/hFaXj932v8HEN5ll11yb65pKz/LSw2sUA0k+FmhDbdaq333u9+9gJ+rr766c9e73nWqpheO1iKgyKxy20yr3e3mjvlhVsKsMCHJ/WNzUQDIxqIR9j6tOvUqx5YngPAszZC96pbfpwZSA/OpgQQ/89kuWaseGrBrOidgie1sUbD5kmMuRmLSYsJXHhMQcxen4UUVZsVIZvjgBz+4gB77foUwjxEmwHkQ5juCGUxJDaQGUgNNNJDgp4mW8pi50oC8LRyfRV1dfvnlU9mfyQaeIohMsLZ7WGTBoOy///6d9ddfv2u4fDg6S+YIFGKHZiXAKEZOHfpFr82qflluaiA1MJ8amPySeT7vO2u1gjUAgIhEMuGJ8LG1xCQFy3TFFVeUImzgycyy6MKnp1eeICYwQAPw+MlPfjJTVWChADAO2PPigzRThWThqYHUQCMNJPhppKY8aN40YFsF2y+Qyy67rIOZmYRwcGbuIvaKusMd7jCJYlbcNSO5IBPZLCXKr28xMss6ZdmpgdTA/Gsgwc/8t1HWsIcG+P5E9l7mrwsuuKBkgO5x+FBf24JCjpsvfOEL5Tymrqrfy1AXW8CD7ahO5NWZlWB8ovyoz6zqkuWmBlIDK0sD6fOzstora1vTgIgvIduXXHJJ51vf+lbxA+ITtGbNmpEcoYWxC6X/4he/WLawYPqRN2aec/rUVDKVf/kFMT/ahgP7MotIK35f/H2kHEjmZyrNnoWkBhZGAwl+FqYpV++NyFMjCgwA4gTNTMUMxmF3vfXWa5SPx07rWAS7r8empSK6Nt5445ntWj7PLSrCjl+QpIgSDE4b/GB9lEvUY5ZO1/PcTlm31EBqoLsGEvx010t+u8I0IPHelltuWQCMSVEkkonZS3QSIMMpFlvBMZazrlBtx9nuAYMR4lry+GCPclINrdz4HevGJ0oixOuuu26qW44AqZytOZ/32v/sxjXOb1IDqYHUwP9pIMFP9oSF0gCmh4nKPlbr1q0r7wCOVz8BiDgzAzzep5E7qF99VsJvor74Ql188cVl2xGbiAKOkxZANXyxOKH3ikqbdD3y+qmB1MDK1UCCn5XbdlnzHhrA1sSmn3x4MAQ2+QSAfv3rXxfWB9iRudhkzWRmD6wEPD0U2udrYNFeZ/ytzj///MK+TXLPLwkNP/3pT5c2VHa3rTn6VDd/Sg2kBlIDRQMJfrIjLLQGABomr0XOyDzrBuQQjo2xHcZ5553XedjDHlbMi23XC/BxfT5Zt7nNbZYj/douJ6+XGkgNLL4GMtR98ds47zA1MFENYHo222yzkvhQ0sFzzjnnBj5UbRSOuXNd79g6ACvNXW1oNq+RGlidGkjwszrbPe86NdCqBoSbb7XVVp1b3/rWxbx41llnlczbzI7jiPM5VZ999tnLjI9ypDdISQ2kBlIDo2ogzV6jai7PSw2kBm6gAZFXD3/4wzuf/exnS9SdzNuiskTO8c0Zxqcq8i1JWRDO6qK67N6ejM8N1J7/pAZSAyNoIMHPCErLU1IDqYHuGgBMNtlkk86d73znsu0IP6CLLrqo+ACJwrMtBv+rbsyNXEvMZpImfvOb31zeNZ6ZK7cW6a7v/DY1kBoYTQMJfkbTW57VRQOxsv/Nb37T5df8ajVpwHYTEh9KN8Bshb2xAW1sQitMvppziTNzvd8woUlgKH1B9K3VpMPVcK+2kSHZvquhtefrHhP8zFd7rOjaxGr+l7/85Yq+j6x8OxqQTkCWbS+MjpB4Gbg5LZv0YuKL0jhOAzzYIakKRHSlLLYGsH2EyTQlNTBNDST4maa2F7ysW9ziFmU1L3Myc4eJLCU1QAPyKHmF6CP1nEuYoJTVpYHvf//75YarfWN1aSDvdlYayGivWWl+AcuVXDB212buSEkN9NIAoGPbEQkmvSfw6aWpxf2eU7v99Egmq1zcdp7XO0vwM68ts0LrxcRBrr766k6av1ZoI2a1UwNT0MC1115b0hdwaL/97W8/hRKziNTA9RpI8HO9LvJTCxpAX4vq4bx6wQUXlG0IWrhsXiI1kBpYIA3Ycib2Z9twww3T4XmB2nal3EqCn5XSUiuonsKS+f9wcrUdAf+OlNRAaiA1QAM/+MEPyrjw29/+tiN3k7QIKamBaWvgJv+7JNMuNMtbfA3Y62nt2rUd0RwiOSS6sxFlJqhb/LbPO0wNdNMAM7ikldddd12Hv4+Ivk033TRZn27Kyu8mroEEPxNX8eotAPCR4E54MwF8bne72xVWKB1cV2+/yDtfPRoAcjC/0hswdVlrC4zYYIMNOve6173K59WjjbzTedJAgp95ao0Frcu3vvWtzlVXXdX58Y9/vKB3mLeVGkgNDNKAvE+iQe95z3t2bnWrWw06PH9PDUxUA/8fLvIj+zZ4yeYAAAAASUVORK5CYII=";
var Ky = Object.defineProperty, $y = Object.defineProperties, eb = Object.getOwnPropertyDescriptors, Wd = Object.getOwnPropertySymbols, tb = Object.prototype.hasOwnProperty, nb = Object.prototype.propertyIsEnumerable, Fd = (n, i, a) => i in n ? Ky(n, i, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[i] = a, pl = (n, i) => {
  for (var a in i || (i = {}))
    tb.call(i, a) && Fd(n, a, i[a]);
  if (Wd)
    for (var a of Wd(i))
      nb.call(i, a) && Fd(n, a, i[a]);
  return n;
}, Qf = (n, i) => $y(n, eb(i));
const Bf = window.Vue.defineComponent, rb = window.Vue.inject, ab = window.Vue.resolveComponent, al = window.Vue.openBlock, Sd = window.Vue.createElementBlock, Yn = window.Vue.createElementVNode, ib = window.Vue.createBlock, Ad = window.Vue.createCommentVNode, ob = window.Vue.renderSlot, lb = window.Vue.pushScopeId, sb = window.Vue.popScopeId, il = window.Vue.toRef, Ca = window.Vue.computed, cb = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var ub = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [l, c] of i)
    a[l] = c;
  return a;
};
const db = {
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
}, fb = {
  "update:modelValue": (n) => !0,
  click: (n) => !0,
  indeterminate: (n) => !0
}, hb = Bf({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: fb,
  props: db,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: rb("registerCheckbox", (i) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : Ie("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : Ie("checkbox-label");
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
      (n.keyCode === Qt.SPACE || n.keyCode === Qt.ENTER) && this.updateValue(), n.keyCode === Qt.SPACE && n.preventDefault();
    }
  },
  components: {
    FeatherRipple: jn
  }
}), pb = (n) => (lb("data-v-a7af27e2"), n = n(), sb(), n), mb = { class: "layout-container" }, Vb = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], Tb = { class: "checkbox hover focus" }, Ub = /* @__PURE__ */ pb(() => /* @__PURE__ */ Yn("div", { class: "box" }, [
  /* @__PURE__ */ Yn("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Yn("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Yn("div", { class: "indeterminate" })
], -1)), Rb = ["id", "for"];
function vb(n, i, a, l, c, f) {
  const p = ab("feather-ripple");
  return al(), Sd("div", mb, [
    Yn("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: i[0] || (i[0] = (...V) => n.click && n.click(...V)),
      onKeydown: i[1] || (i[1] = (...V) => n.keydown && n.keydown(...V)),
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
      Yn("div", Tb, [
        Ub,
        n.disabled ? Ad("", !0) : (al(), ib(p, {
          key: 0,
          center: ""
        }))
      ]),
      n.label ? Ad("", !0) : (al(), Sd("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: n.labelId,
        for: n.inputId
      }, [
        ob(n.$slots, "default", {}, void 0, !0)
      ], 8, Rb))
    ], 40, Vb)
  ]);
}
var Nb = /* @__PURE__ */ ub(hb, [["render", vb], ["__scopeId", "data-v-a7af27e2"]]);
const Mb = Qf(pl({}, vf), {
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
Bf({
  props: Mb,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(n, i) {
    Nf(n);
    const a = il(n, "error"), l = Ca(() => Ie("feather-checkbox-group")), c = Ca(() => Ie("feather-input-description")), f = Ca(() => Ie("feather-input-label")), p = Ca(() => {
      const J = JSON.parse(JSON.stringify(i.attrs));
      return J["aria-invalid"] || (J["aria-invalid"] = !!a.value), Qf(pl({}, J), {
        class: "",
        "aria-describedby": c.value
      });
    }), V = cb(l.value), { validate: v } = Uf(V, il(n, "modelValue"), n.label, n.schema, il(n, "error"));
    return pl({
      groupId: l,
      inputId: V,
      descriptionId: c,
      labelId: f,
      attrs: p,
      validate: v,
      registerCheckbox: (J) => {
        J && V.value === l.value && (V.value = J);
      }
    }, Rf(i.attrs));
  },
  components: {
    InputSubText: Tf
  }
});
const wb = window.Vue.defineComponent, Te = window.Vue.createElementVNode, ml = window.Vue.createTextVNode, _t = window.Vue.unref, gr = window.Vue.withCtx, kr = window.Vue.createVNode, Zb = window.Vue.openBlock, Jb = window.Vue.createElementBlock, gb = window.Vue.pushScopeId, kb = window.Vue.popScopeId, Rn = (n) => (gb("data-v-9a5b5f4e"), n = n(), kb(), n), yb = { class: "container" }, bb = /* @__PURE__ */ Rn(() => /* @__PURE__ */ Te("h2", null, "Configuration", -1)), Eb = /* @__PURE__ */ Rn(() => /* @__PURE__ */ Te("p", null, [
  /* @__PURE__ */ ml(" ALEC relies on correlation engines to identify related alarm groupings (situations). These engines are powered by machine learning techniques that leverage alarms data to make informed decisions. "),
  /* @__PURE__ */ Te("br"),
  /* @__PURE__ */ ml(" For detail information about proposed engines you can read "),
  /* @__PURE__ */ Te("strong", null, [
    /* @__PURE__ */ Te("a", {
      target: "_blank",
      href: "https://docs.opennms.com/alec/3.0.0-SNAPSHOT/engines/cluster.html"
    }, " here ")
  ])
], -1)), Wb = { class: "radio-content" }, Fb = /* @__PURE__ */ Rn(() => /* @__PURE__ */ Te("strong", { class: "title" }, "Clustering", -1)), Sb = /* @__PURE__ */ Rn(() => /* @__PURE__ */ Te("div", null, " Groups data points (alarms) based on a distance measure. We calculate alarms difference in time and add it to their distance within their network topology ", -1)), Ab = /* @__PURE__ */ Rn(() => /* @__PURE__ */ Te("img", {
  class: "img",
  src: _y
}, null, -1)), xb = /* @__PURE__ */ Rn(() => /* @__PURE__ */ Te("div", { class: "hellinger" }, [
  /* @__PURE__ */ Te("strong", null, "With hellinger distance"),
  /* @__PURE__ */ Te("br"),
  /* @__PURE__ */ Te("span", { class: "description" }, " (Uses the Hellinger Distance between alarms as a scaling variable. It pushes alarms further apart if its value is high and vice versa.) ")
], -1)), Qb = /* @__PURE__ */ Rn(() => /* @__PURE__ */ Te("div", { class: "radio-content" }, [
  /* @__PURE__ */ Te("strong", { class: "title" }, "Deep Learning"),
  /* @__PURE__ */ Te("div", null, " A Neural Network network is consulted to assess if alarms are related. Based on its evaluation, situations are built by association. "),
  /* @__PURE__ */ Te("img", {
    class: "img img2",
    src: qy
  })
], -1)), Bb = /* @__PURE__ */ ml(" Continue "), xd = window.Vue.ref, Db = /* @__PURE__ */ wb({
  __name: "ConfigurationPage",
  setup(n) {
    const i = Br(), a = xf(), l = xd(!1), c = xd(zn.ENGINE_DBSCAN), f = () => {
      nf(i.allowSave), ev(c.value, l.value), a.push({ name: "situations" });
    };
    return (p, V) => (Zb(), Jb("div", yb, [
      bb,
      Eb,
      Te("div", null, [
        kr(_t(Af), {
          class: "radio-group",
          label: "Currently, ALEC provides two clustering based engines, please, select one (can be changed later):",
          modelValue: c.value,
          "onUpdate:modelValue": V[1] || (V[1] = (v) => c.value = v)
        }, {
          default: gr(() => [
            kr(_t(Ka), {
              class: "radio",
              value: _t(zn).ENGINE_DBSCAN
            }, {
              default: gr(() => [
                Te("div", Wb, [
                  Fb,
                  Sb,
                  Ab,
                  kr(_t(Nb), {
                    modelValue: l.value,
                    "onUpdate:modelValue": V[0] || (V[0] = (v) => l.value = v),
                    disabled: c.value !== _t(zn).ENGINE_DBSCAN,
                    class: "checkbox"
                  }, {
                    default: gr(() => [
                      xb
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"])
                ])
              ]),
              _: 1
            }, 8, ["value"]),
            kr(_t(Ka), {
              class: "radio",
              value: _t(zn).ENGINE_DEEP_LEARNING
            }, {
              default: gr(() => [
                Qb
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }, 8, ["label", "modelValue"])
      ]),
      kr(_t(qa), {
        primary: "",
        class: "btn",
        onClick: V[2] || (V[2] = () => f())
      }, {
        default: gr(() => [
          Bb
        ]),
        _: 1
      })
    ]));
  }
});
const Ob = /* @__PURE__ */ Pe(Db, [["__scopeId", "data-v-9a5b5f4e"]]), Cb = window.VueRouter.createRouter, Gb = window.VueRouter.createWebHistory, ol = async () => {
  const n = window.VRouter || Sl, i = Br();
  i.userId || (await i.getUserRole(), await i.getAlecInfo(), n.push({ name: "home" }));
}, Df = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (n) => {
      const i = window.VRouter || Sl, a = Br();
      await a.getUserRole(), await a.getAlecInfo(), a.firstTime ? i.push({ name: "welcome", params: n.params }) : i.push({ name: "situations", params: n.params });
    },
    component: {}
  },
  {
    path: "/welcome",
    name: "welcome",
    beforeEnter: () => ol(),
    component: Ly
  },
  {
    path: "/setup",
    name: "configuration",
    beforeEnter: () => ol(),
    component: Ob
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => ol(),
    component: ek
  }
], Qd = window.VRouter;
if (Qd)
  for (const n of Df) {
    const { path: i, name: a, component: l, beforeEnter: c } = n;
    Qd.addRoute("Plugin", {
      path: i.slice(1),
      name: a,
      component: l,
      beforeEnter: c
    });
  }
const Sl = Cb({
  history: Gb(),
  routes: Df
});
window.Vue.createApp;
window.Pinia.createPinia;
window.uiextension = O0;

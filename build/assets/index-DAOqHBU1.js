(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const a of i)
      if (a.type === 'childList')
        for (const o of a.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const a = {};
    return (
      i.integrity && (a.integrity = i.integrity),
      i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (a.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const a = n(i);
    fetch(i.href, a);
  }
})();
function tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var nf = { exports: {} },
  na = {},
  rf = { exports: {} },
  R = {};
/**
 * @license advancedJS
 * advancedJS.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zr = Symbol.for('advancedJS.element'),
  qd = Symbol.for('advancedJS.portal'),
  ep = Symbol.for('advancedJS.fragment'),
  tp = Symbol.for('advancedJS.strict_mode'),
  np = Symbol.for('advancedJS.profiler'),
  rp = Symbol.for('advancedJS.provider'),
  ip = Symbol.for('advancedJS.context'),
  ap = Symbol.for('advancedJS.forward_ref'),
  op = Symbol.for('advancedJS.suspense'),
  lp = Symbol.for('advancedJS.memo'),
  up = Symbol.for('advancedJS.lazy'),
  wu = Symbol.iterator;
function sp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (wu && e[wu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var af = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  of = Object.assign,
  lf = {};
function In(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = lf), (this.updater = n || af);
}
In.prototype.isadvancedJSComponent = {};
In.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
In.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function uf() {}
uf.prototype = In.prototype;
function cl(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = lf), (this.updater = n || af);
}
var dl = (cl.prototype = new uf());
dl.constructor = cl;
of(dl, In.prototype);
dl.isPureadvancedJSComponent = !0;
var Su = Array.isArray,
  sf = Object.prototype.hasOwnProperty,
  pl = { current: null },
  ff = { key: !0, ref: !0, __self: !0, __source: !0 };
function cf(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = '' + t.key), t))
      sf.call(t, r) && !ff.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: zr, type: e, key: a, ref: o, props: i, _owner: pl.current };
}
function fp(e, t) {
  return {
    $$typeof: zr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ml(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === zr;
}
function cp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xu = /\/+/g;
function Pa(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? cp('' + e.key)
    : t.toString(36);
}
function mi(e, t, n, r, i) {
  var a = typeof e;
  (a === 'undefined' || a === 'boolean') && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (a) {
      case 'string':
      case 'number':
        o = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case zr:
          case qd:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === '' ? '.' + Pa(o, 0) : r),
      Su(i)
        ? ((n = ''),
          e != null && (n = e.replace(xu, '$&/') + '/'),
          mi(i, t, n, '', function (s) {
            return s;
          }))
        : i != null &&
          (ml(i) &&
            (i = fp(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ''
                  : ('' + i.key).replace(xu, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === '' ? '.' : r + ':'), Su(e)))
    for (var l = 0; l < e.length; l++) {
      a = e[l];
      var u = r + Pa(a, l);
      o += mi(a, t, n, u, i);
    }
  else if (((u = sp(e)), typeof u == 'function'))
    for (e = u.call(e), l = 0; !(a = e.next()).done; )
      (a = a.value), (u = r + Pa(a, l++)), (o += mi(a, t, n, u, i));
  else if (a === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a advancedJS child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return o;
}
function Wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    mi(e, r, '', '', function (a) {
      return t.call(n, a, i++);
    }),
    r
  );
}
function dp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var me = { current: null },
  vi = { transition: null },
  pp = {
    advancedJSCurrentDispatcher: me,
    advancedJSCurrentBatchConfig: vi,
    advancedJSCurrentOwner: pl,
  };
R.Children = {
  map: Wr,
  forEach: function (e, t, n) {
    Wr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ml(e))
      throw Error(
        'advancedJS.Children.only expected to receive a single advancedJS element child.'
      );
    return e;
  },
};
R.Component = In;
R.Fragment = ep;
R.Profiler = np;
R.PureComponent = cl;
R.StrictMode = tp;
R.Suspense = op;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'advancedJS.cloneElement(...): The argument must be a advancedJS element, but you passed ' +
        e +
        '.'
    );
  var r = of({}, e.props),
    i = e.key,
    a = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((a = t.ref), (o = pl.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      sf.call(t, u) &&
        !ff.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var s = 0; s < u; s++) l[s] = arguments[s + 2];
    r.children = l;
  }
  return { $$typeof: zr, type: e.type, key: i, ref: a, props: r, _owner: o };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: ip,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rp, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = cf;
R.createFactory = function (e) {
  var t = cf.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: ap, render: e };
};
R.isValidElement = ml;
R.lazy = function (e) {
  return { $$typeof: up, _payload: { _status: -1, _result: e }, _init: dp };
};
R.memo = function (e, t) {
  return { $$typeof: lp, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = vi.transition;
  vi.transition = {};
  try {
    e();
  } finally {
    vi.transition = t;
  }
};
R.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of advancedJS.');
};
R.useCallback = function (e, t) {
  return me.current.useCallback(e, t);
};
R.useContext = function (e) {
  return me.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return me.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return me.current.useEffect(e, t);
};
R.useId = function () {
  return me.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return me.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return me.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return me.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return me.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return me.current.useRef(e);
};
R.useState = function (e) {
  return me.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return me.current.useTransition();
};
R.version = '18.2.0';
rf.exports = R;
var $e = rf.exports;
const vl = tf($e);
/**
 * @license advancedJS
 * advancedJS-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mp = $e,
  vp = Symbol.for('advancedJS.element'),
  hp = Symbol.for('advancedJS.fragment'),
  gp = Object.prototype.hasOwnProperty,
  yp = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.advancedJSCurrentOwner,
  kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function df(e, t, n) {
  var r,
    i = {},
    a = null,
    o = null;
  n !== void 0 && (a = '' + n),
    t.key !== void 0 && (a = '' + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) gp.call(t, r) && !kp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: vp, type: e, key: a, ref: o, props: i, _owner: yp.current };
}
na.Fragment = hp;
na.jsx = df;
na.jsxs = df;
nf.exports = na;
var F = nf.exports,
  ro = {},
  pf = { exports: {} },
  _e = {},
  mf = { exports: {} },
  vf = {};
/**
 * @license advancedJS
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, z) {
    var L = P.length;
    P.push(z);
    e: for (; 0 < L; ) {
      var G = (L - 1) >>> 1,
        ne = P[G];
      if (0 < i(ne, z)) (P[G] = z), (P[L] = ne), (L = G);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var z = P[0],
      L = P.pop();
    if (L !== z) {
      P[0] = L;
      e: for (var G = 0, ne = P.length, $r = ne >>> 1; G < $r; ) {
        var Mt = 2 * (G + 1) - 1,
          _a = P[Mt],
          jt = Mt + 1,
          Ur = P[jt];
        if (0 > i(_a, L))
          jt < ne && 0 > i(Ur, _a)
            ? ((P[G] = Ur), (P[jt] = L), (G = jt))
            : ((P[G] = _a), (P[Mt] = L), (G = Mt));
        else if (jt < ne && 0 > i(Ur, L)) (P[G] = Ur), (P[jt] = L), (G = jt);
        else break e;
      }
    }
    return z;
  }
  function i(P, z) {
    var L = P.sortIndex - z.sortIndex;
    return L !== 0 ? L : P.id - z.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var u = [],
    s = [],
    c = 1,
    m = null,
    v = 3,
    h = !1,
    k = !1,
    w = !1,
    T = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(P) {
    for (var z = n(s); z !== null; ) {
      if (z.callback === null) r(s);
      else if (z.startTime <= P) r(s), (z.sortIndex = z.expirationTime), t(u, z);
      else break;
      z = n(s);
    }
  }
  function g(P) {
    if (((w = !1), p(P), !k))
      if (n(u) !== null) (k = !0), Ea(S);
      else {
        var z = n(s);
        z !== null && Ca(g, z.startTime - P);
      }
  }
  function S(P, z) {
    (k = !1), w && ((w = !1), d(O), (O = -1)), (h = !0);
    var L = v;
    try {
      for (p(z), m = n(u); m !== null && (!(m.expirationTime > z) || (P && !Re())); ) {
        var G = m.callback;
        if (typeof G == 'function') {
          (m.callback = null), (v = m.priorityLevel);
          var ne = G(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof ne == 'function' ? (m.callback = ne) : m === n(u) && r(u),
            p(z);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var $r = !0;
      else {
        var Mt = n(s);
        Mt !== null && Ca(g, Mt.startTime - z), ($r = !1);
      }
      return $r;
    } finally {
      (m = null), (v = L), (h = !1);
    }
  }
  var C = !1,
    _ = null,
    O = -1,
    j = 5,
    I = -1;
  function Re() {
    return !(e.unstable_now() - I < j);
  }
  function Fn() {
    if (_ !== null) {
      var P = e.unstable_now();
      I = P;
      var z = !0;
      try {
        z = _(!0, P);
      } finally {
        z ? Dn() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var Dn;
  if (typeof f == 'function')
    Dn = function () {
      f(Fn);
    };
  else if (typeof MessageChannel < 'u') {
    var ku = new MessageChannel(),
      Jd = ku.port2;
    (ku.port1.onmessage = Fn),
      (Dn = function () {
        Jd.postMessage(null);
      });
  } else
    Dn = function () {
      T(Fn, 0);
    };
  function Ea(P) {
    (_ = P), C || ((C = !0), Dn());
  }
  function Ca(P, z) {
    O = T(function () {
      P(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      k || h || ((k = !0), Ea(S));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (j = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (P) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = v;
      }
      var L = v;
      v = z;
      try {
        return P();
      } finally {
        v = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, z) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var L = v;
      v = P;
      try {
        return z();
      } finally {
        v = L;
      }
    }),
    (e.unstable_scheduleCallback = function (P, z, L) {
      var G = e.unstable_now();
      switch (
        (typeof L == 'object' && L !== null
          ? ((L = L.delay), (L = typeof L == 'number' && 0 < L ? G + L : G))
          : (L = G),
        P)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = L + ne),
        (P = {
          id: c++,
          callback: z,
          priorityLevel: P,
          startTime: L,
          expirationTime: ne,
          sortIndex: -1,
        }),
        L > G
          ? ((P.sortIndex = L),
            t(s, P),
            n(u) === null &&
              P === n(s) &&
              (w ? (d(O), (O = -1)) : (w = !0), Ca(g, L - G)))
          : ((P.sortIndex = ne), t(u, P), k || h || ((k = !0), Ea(S))),
        P
      );
    }),
    (e.unstable_shouldYield = Re),
    (e.unstable_wrapCallback = function (P) {
      var z = v;
      return function () {
        var L = v;
        v = z;
        try {
          return P.apply(this, arguments);
        } finally {
          v = L;
        }
      };
    });
})(vf);
mf.exports = vf;
var wp = mf.exports;
/**
 * @license advancedJS
 * advancedJS-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hf = $e,
  Ce = wp;
function y(e) {
  for (
    var t = 'https://advancedJSjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified advancedJS error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var gf = new Set(),
  sr = {};
function qt(e, t) {
  _n(e, t), _n(e + 'Capture', t);
}
function _n(e, t) {
  for (sr[e] = t, e = 0; e < t.length; e++) gf.add(t[e]);
}
var tt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  io = Object.prototype.hasOwnProperty,
  Sp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Eu = {},
  Cu = {};
function xp(e) {
  return io.call(Cu, e)
    ? !0
    : io.call(Eu, e)
    ? !1
    : Sp.test(e)
    ? (Cu[e] = !0)
    : ((Eu[e] = !0), !1);
}
function Ep(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Cp(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ep(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, i, a, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o);
}
var le = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    le[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  le[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  le[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
  function (e) {
    le[e] = new ve(e, 2, !1, e, null, !1, !1);
  }
);
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    le[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  le[e] = new ve(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  le[e] = new ve(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  le[e] = new ve(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  le[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hl = /[\-:]([a-z])/g;
function gl(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(hl, gl);
    le[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(hl, gl);
    le[t] = new ve(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(hl, gl);
  le[t] = new ve(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  le[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new ve(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  le[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yl(e, t, n, r) {
  var i = le.hasOwnProperty(t) ? le[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Cp(t, n, i, r) && (n = null),
    r || i === null
      ? xp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ut = hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Br = Symbol.for('advancedJS.element'),
  nn = Symbol.for('advancedJS.portal'),
  rn = Symbol.for('advancedJS.fragment'),
  kl = Symbol.for('advancedJS.strict_mode'),
  ao = Symbol.for('advancedJS.profiler'),
  yf = Symbol.for('advancedJS.provider'),
  kf = Symbol.for('advancedJS.context'),
  wl = Symbol.for('advancedJS.forward_ref'),
  oo = Symbol.for('advancedJS.suspense'),
  lo = Symbol.for('advancedJS.suspense_list'),
  Sl = Symbol.for('advancedJS.memo'),
  dt = Symbol.for('advancedJS.lazy'),
  wf = Symbol.for('advancedJS.offscreen'),
  _u = Symbol.iterator;
function bn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (_u && e[_u]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Q = Object.assign,
  Na;
function Qn(e) {
  if (Na === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Na = (t && t[1]) || '';
    }
  return (
    `
` +
    Na +
    e
  );
}
var Oa = !1;
function Ta(e, t) {
  if (!e || Oa) return '';
  Oa = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var i = s.stack.split(`
`),
          a = r.stack.split(`
`),
          o = i.length - 1,
          l = a.length - 1;
        1 <= o && 0 <= l && i[o] !== a[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== a[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== a[l])) {
                var u =
                  `
` + i[o].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Oa = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Qn(e) : '';
}
function _p(e) {
  switch (e.tag) {
    case 5:
      return Qn(e.type);
    case 16:
      return Qn('Lazy');
    case 13:
      return Qn('Suspense');
    case 19:
      return Qn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ta(e.type, !1)), e;
    case 11:
      return (e = Ta(e.type.render, !1)), e;
    case 1:
      return (e = Ta(e.type, !0)), e;
    default:
      return '';
  }
}
function uo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case rn:
      return 'Fragment';
    case nn:
      return 'Portal';
    case ao:
      return 'Profiler';
    case kl:
      return 'StrictMode';
    case oo:
      return 'Suspense';
    case lo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case kf:
        return (e.displayName || 'Context') + '.Consumer';
      case yf:
        return (e._context.displayName || 'Context') + '.Provider';
      case wl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Sl:
        return (t = e.displayName || null), t !== null ? t : uo(e.type) || 'Memo';
      case dt:
        (t = e._payload), (e = e._init);
        try {
          return uo(e(t));
        } catch {}
    }
  return null;
}
function Pp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return uo(t);
    case 8:
      return t === kl ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Nt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Sf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  );
}
function Np(e) {
  var t = Sf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      a = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = '' + o), a.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = '' + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Hr(e) {
  e._valueTracker || (e._valueTracker = Np(e));
}
function xf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Sf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Oi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function so(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Pu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Nt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Ef(e, t) {
  (t = t.checked), t != null && yl(e, 'checked', t, !1);
}
function fo(e, t) {
  Ef(e, t);
  var n = Nt(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? co(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && co(e, t.type, Nt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Nu(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null)))
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function co(e, t, n) {
  (t !== 'number' || Oi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Kn = Array.isArray;
function yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Nt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Kn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Nt(n) };
}
function Cf(e, t) {
  var n = Nt(t.value),
    r = Nt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Tu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function _f(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function mo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? _f(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Vr,
  Pf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Vr = Vr || document.createElement('div'),
          Vr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function fr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Op = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Jn).forEach(function (e) {
  Op.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]);
  });
});
function Nf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Of(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = Nf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Tp = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function vo(e, t) {
  if (t) {
    if (Tp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(y(62));
  }
}
function ho(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var go = null;
function xl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yo = null,
  kn = null,
  wn = null;
function Au(e) {
  if ((e = Rr(e))) {
    if (typeof yo != 'function') throw Error(y(280));
    var t = e.stateNode;
    t && ((t = la(t)), yo(e.stateNode, e.type, t));
  }
}
function Tf(e) {
  kn ? (wn ? wn.push(e) : (wn = [e])) : (kn = e);
}
function Af() {
  if (kn) {
    var e = kn,
      t = wn;
    if (((wn = kn = null), Au(e), t)) for (e = 0; e < t.length; e++) Au(t[e]);
  }
}
function zf(e, t) {
  return e(t);
}
function Lf() {}
var Aa = !1;
function If(e, t, n) {
  if (Aa) return e(t, n);
  Aa = !0;
  try {
    return zf(e, t, n);
  } finally {
    (Aa = !1), (kn !== null || wn !== null) && (Lf(), Af());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = la(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
  return n;
}
var ko = !1;
if (tt)
  try {
    var $n = {};
    Object.defineProperty($n, 'passive', {
      get: function () {
        ko = !0;
      },
    }),
      window.addEventListener('test', $n, $n),
      window.removeEventListener('test', $n, $n);
  } catch {
    ko = !1;
  }
function Ap(e, t, n, r, i, a, o, l, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (c) {
    this.onError(c);
  }
}
var qn = !1,
  Ti = null,
  Ai = !1,
  wo = null,
  zp = {
    onError: function (e) {
      (qn = !0), (Ti = e);
    },
  };
function Lp(e, t, n, r, i, a, o, l, u) {
  (qn = !1), (Ti = null), Ap.apply(zp, arguments);
}
function Ip(e, t, n, r, i, a, o, l, u) {
  if ((Lp.apply(this, arguments), qn)) {
    if (qn) {
      var s = Ti;
      (qn = !1), (Ti = null);
    } else throw Error(y(198));
    Ai || ((Ai = !0), (wo = s));
  }
}
function en(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Rf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zu(e) {
  if (en(e) !== e) throw Error(y(188));
}
function Rp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = en(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var a = i.alternate;
    if (a === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === a.child) {
      for (a = i.child; a; ) {
        if (a === n) return zu(i), e;
        if (a === r) return zu(i), t;
        a = a.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = i), (r = a);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = a);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = a);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = a.child; l; ) {
          if (l === n) {
            (o = !0), (n = a), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = a), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Mf(e) {
  return (e = Rp(e)), e !== null ? jf(e) : null;
}
function jf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ff = Ce.unstable_scheduleCallback,
  Lu = Ce.unstable_cancelCallback,
  Mp = Ce.unstable_shouldYield,
  jp = Ce.unstable_requestPaint,
  Z = Ce.unstable_now,
  Fp = Ce.unstable_getCurrentPriorityLevel,
  El = Ce.unstable_ImmediatePriority,
  Df = Ce.unstable_UserBlockingPriority,
  zi = Ce.unstable_NormalPriority,
  Dp = Ce.unstable_LowPriority,
  bf = Ce.unstable_IdlePriority,
  ra = null,
  Ke = null;
function bp(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == 'function')
    try {
      Ke.onCommitFiberRoot(ra, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : Wp,
  $p = Math.log,
  Up = Math.LN2;
function Wp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($p(e) / Up) | 0)) | 0;
}
var Yr = 64,
  Qr = 4194304;
function Xn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Li(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    a = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Xn(l)) : ((a &= o), a !== 0 && (r = Xn(a)));
  } else (o = n & ~i), o !== 0 ? (r = Xn(o)) : a !== 0 && (r = Xn(a));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (a = t & -t), i >= a || (i === 16 && (a & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ue(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Bp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes;
    0 < a;

  ) {
    var o = 31 - Ue(a),
      l = 1 << o,
      u = i[o];
    u === -1 ? (!(l & n) || l & r) && (i[o] = Bp(l, t)) : u <= t && (e.expiredLanes |= l),
      (a &= ~l);
  }
}
function So(e) {
  return (
    (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function $f() {
  var e = Yr;
  return (Yr <<= 1), !(Yr & 4194240) && (Yr = 64), e;
}
function za(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ue(t)),
    (e[t] = n);
}
function Vp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ue(n),
      a = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a);
  }
}
function Cl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var D = 0;
function Uf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Wf,
  _l,
  Bf,
  Hf,
  Vf,
  xo = !1,
  Kr = [],
  kt = null,
  wt = null,
  St = null,
  dr = new Map(),
  pr = new Map(),
  mt = [],
  Yp =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Iu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      kt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      wt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      St = null;
      break;
    case 'pointerover':
    case 'pointerout':
      dr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      pr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, i, a) {
  return e === null || e.nativeEvent !== a
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i],
      }),
      t !== null && ((t = Rr(t)), t !== null && _l(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Qp(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (kt = Un(kt, e, t, n, r, i)), !0;
    case 'dragenter':
      return (wt = Un(wt, e, t, n, r, i)), !0;
    case 'mouseover':
      return (St = Un(St, e, t, n, r, i)), !0;
    case 'pointerover':
      var a = i.pointerId;
      return dr.set(a, Un(dr.get(a) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (a = i.pointerId), pr.set(a, Un(pr.get(a) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function Yf(e) {
  var t = bt(e.target);
  if (t !== null) {
    var n = en(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Rf(n)), t !== null)) {
          (e.blockedOn = t),
            Vf(e.priority, function () {
              Bf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function hi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Eo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (go = r), n.target.dispatchEvent(r), (go = null);
    } else return (t = Rr(n)), t !== null && _l(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ru(e, t, n) {
  hi(e) && n.delete(t);
}
function Kp() {
  (xo = !1),
    kt !== null && hi(kt) && (kt = null),
    wt !== null && hi(wt) && (wt = null),
    St !== null && hi(St) && (St = null),
    dr.forEach(Ru),
    pr.forEach(Ru);
}
function Wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    xo || ((xo = !0), Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Kp)));
}
function mr(e) {
  function t(i) {
    return Wn(i, e);
  }
  if (0 < Kr.length) {
    Wn(Kr[0], e);
    for (var n = 1; n < Kr.length; n++) {
      var r = Kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    kt !== null && Wn(kt, e),
      wt !== null && Wn(wt, e),
      St !== null && Wn(St, e),
      dr.forEach(t),
      pr.forEach(t),
      n = 0;
    n < mt.length;
    n++
  )
    (r = mt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mt.length && ((n = mt[0]), n.blockedOn === null); )
    Yf(n), n.blockedOn === null && mt.shift();
}
var Sn = ut.advancedJSCurrentBatchConfig,
  Ii = !0;
function Xp(e, t, n, r) {
  var i = D,
    a = Sn.transition;
  Sn.transition = null;
  try {
    (D = 1), Pl(e, t, n, r);
  } finally {
    (D = i), (Sn.transition = a);
  }
}
function Gp(e, t, n, r) {
  var i = D,
    a = Sn.transition;
  Sn.transition = null;
  try {
    (D = 4), Pl(e, t, n, r);
  } finally {
    (D = i), (Sn.transition = a);
  }
}
function Pl(e, t, n, r) {
  if (Ii) {
    var i = Eo(e, t, n, r);
    if (i === null) Ua(e, t, r, Ri, n), Iu(e, r);
    else if (Qp(i, e, t, n, r)) r.stopPropagation();
    else if ((Iu(e, r), t & 4 && -1 < Yp.indexOf(e))) {
      for (; i !== null; ) {
        var a = Rr(i);
        if (
          (a !== null && Wf(a),
          (a = Eo(e, t, n, r)),
          a === null && Ua(e, t, r, Ri, n),
          a === i)
        )
          break;
        i = a;
      }
      i !== null && r.stopPropagation();
    } else Ua(e, t, r, null, n);
  }
}
var Ri = null;
function Eo(e, t, n, r) {
  if (((Ri = null), (e = xl(r)), (e = bt(e)), e !== null))
    if (((t = en(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Rf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ri = e), null;
}
function Qf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Fp()) {
        case El:
          return 1;
        case Df:
          return 4;
        case zi:
        case Dp:
          return 16;
        case bf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ht = null,
  Nl = null,
  gi = null;
function Kf() {
  if (gi) return gi;
  var e,
    t = Nl,
    n = t.length,
    r,
    i = 'value' in ht ? ht.value : ht.textContent,
    a = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
  return (gi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function yi(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Xr() {
  return !0;
}
function Mu() {
  return !1;
}
function Pe(e) {
  function t(n, r, i, a, o) {
    (this._advancedJSName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = a),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(a) : a[l]));
    return (
      (this.isDefaultPrevented = (
        a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
      )
        ? Xr
        : Mu),
      (this.isPropagationStopped = Mu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Xr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Xr));
      },
      persist: function () {},
      isPersistent: Xr,
    }),
    t
  );
}
var Rn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ol = Pe(Rn),
  Ir = Q({}, Rn, { view: 0, detail: 0 }),
  Zp = Pe(Ir),
  La,
  Ia,
  Bn,
  ia = Q({}, Ir, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Tl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Bn &&
            (Bn && e.type === 'mousemove'
              ? ((La = e.screenX - Bn.screenX), (Ia = e.screenY - Bn.screenY))
              : (Ia = La = 0),
            (Bn = e)),
          La);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ia;
    },
  }),
  ju = Pe(ia),
  Jp = Q({}, ia, { dataTransfer: 0 }),
  qp = Pe(Jp),
  em = Q({}, Ir, { relatedTarget: 0 }),
  Ra = Pe(em),
  tm = Q({}, Rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nm = Pe(tm),
  rm = Q({}, Rn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  im = Pe(rm),
  am = Q({}, Rn, { data: 0 }),
  Fu = Pe(am),
  om = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  lm = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  um = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function sm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = um[e]) ? !!t[e] : !1;
}
function Tl() {
  return sm;
}
var fm = Q({}, Ir, {
    key: function (e) {
      if (e.key) {
        var t = om[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = yi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? lm[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Tl,
    charCode: function (e) {
      return e.type === 'keypress' ? yi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? yi(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  cm = Pe(fm),
  dm = Q({}, ia, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Du = Pe(dm),
  pm = Q({}, Ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Tl,
  }),
  mm = Pe(pm),
  vm = Q({}, Rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  hm = Pe(vm),
  gm = Q({}, ia, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ym = Pe(gm),
  km = [9, 13, 27, 32],
  Al = tt && 'CompositionEvent' in window,
  er = null;
tt && 'documentMode' in document && (er = document.documentMode);
var wm = tt && 'TextEvent' in window && !er,
  Xf = tt && (!Al || (er && 8 < er && 11 >= er)),
  bu = ' ',
  $u = !1;
function Gf(e, t) {
  switch (e) {
    case 'keyup':
      return km.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Zf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var an = !1;
function Sm(e, t) {
  switch (e) {
    case 'compositionend':
      return Zf(t);
    case 'keypress':
      return t.which !== 32 ? null : (($u = !0), bu);
    case 'textInput':
      return (e = t.data), e === bu && $u ? null : e;
    default:
      return null;
  }
}
function xm(e, t) {
  if (an)
    return e === 'compositionend' || (!Al && Gf(e, t))
      ? ((e = Kf()), (gi = Nl = ht = null), (an = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Xf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Em = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Uu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Em[e.type] : t === 'textarea';
}
function Jf(e, t, n, r) {
  Tf(r),
    (t = Mi(t, 'onChange')),
    0 < t.length &&
      ((n = new Ol('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var tr = null,
  vr = null;
function Cm(e) {
  sc(e, 0);
}
function aa(e) {
  var t = un(e);
  if (xf(t)) return e;
}
function _m(e, t) {
  if (e === 'change') return t;
}
var qf = !1;
if (tt) {
  var Ma;
  if (tt) {
    var ja = 'oninput' in document;
    if (!ja) {
      var Wu = document.createElement('div');
      Wu.setAttribute('oninput', 'return;'), (ja = typeof Wu.oninput == 'function');
    }
    Ma = ja;
  } else Ma = !1;
  qf = Ma && (!document.documentMode || 9 < document.documentMode);
}
function Bu() {
  tr && (tr.detachEvent('onpropertychange', ec), (vr = tr = null));
}
function ec(e) {
  if (e.propertyName === 'value' && aa(vr)) {
    var t = [];
    Jf(t, vr, e, xl(e)), If(Cm, t);
  }
}
function Pm(e, t, n) {
  e === 'focusin'
    ? (Bu(), (tr = t), (vr = n), tr.attachEvent('onpropertychange', ec))
    : e === 'focusout' && Bu();
}
function Nm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return aa(vr);
}
function Om(e, t) {
  if (e === 'click') return aa(t);
}
function Tm(e, t) {
  if (e === 'input' || e === 'change') return aa(t);
}
function Am(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == 'function' ? Object.is : Am;
function hr(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!io.call(t, i) || !Be(e[i], t[i])) return !1;
  }
  return !0;
}
function Hu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vu(e, t) {
  var n = Hu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hu(n);
  }
}
function tc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? tc(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function nc() {
  for (var e = window, t = Oi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Oi(e.document);
  }
  return t;
}
function zl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function zm(e) {
  var t = nc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && tc(n.ownerDocument.documentElement, n)) {
    if (r !== null && zl(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          a = Math.min(r.start, i);
        (r = r.end === void 0 ? a : Math.min(r.end, i)),
          !e.extend && a > r && ((i = r), (r = a), (a = i)),
          (i = Vu(n, a));
        var o = Vu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          a > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Lm = tt && 'documentMode' in document && 11 >= document.documentMode,
  on = null,
  Co = null,
  nr = null,
  _o = !1;
function Yu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  _o ||
    on == null ||
    on !== Oi(r) ||
    ((r = on),
    'selectionStart' in r && zl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (nr && hr(nr, r)) ||
      ((nr = r),
      (r = Mi(Co, 'onSelect')),
      0 < r.length &&
        ((t = new Ol('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = on))));
}
function Gr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var ln = {
    animationend: Gr('Animation', 'AnimationEnd'),
    animationiteration: Gr('Animation', 'AnimationIteration'),
    animationstart: Gr('Animation', 'AnimationStart'),
    transitionend: Gr('Transition', 'TransitionEnd'),
  },
  Fa = {},
  rc = {};
tt &&
  ((rc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete ln.animationend.animation,
    delete ln.animationiteration.animation,
    delete ln.animationstart.animation),
  'TransitionEvent' in window || delete ln.transitionend.transition);
function oa(e) {
  if (Fa[e]) return Fa[e];
  if (!ln[e]) return e;
  var t = ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in rc) return (Fa[e] = t[n]);
  return e;
}
var ic = oa('animationend'),
  ac = oa('animationiteration'),
  oc = oa('animationstart'),
  lc = oa('transitionend'),
  uc = new Map(),
  Qu =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Lt(e, t) {
  uc.set(e, t), qt(t, [e]);
}
for (var Da = 0; Da < Qu.length; Da++) {
  var ba = Qu[Da],
    Im = ba.toLowerCase(),
    Rm = ba[0].toUpperCase() + ba.slice(1);
  Lt(Im, 'on' + Rm);
}
Lt(ic, 'onAnimationEnd');
Lt(ac, 'onAnimationIteration');
Lt(oc, 'onAnimationStart');
Lt('dblclick', 'onDoubleClick');
Lt('focusin', 'onFocus');
Lt('focusout', 'onBlur');
Lt(lc, 'onTransitionEnd');
_n('onMouseEnter', ['mouseout', 'mouseover']);
_n('onMouseLeave', ['mouseout', 'mouseover']);
_n('onPointerEnter', ['pointerout', 'pointerover']);
_n('onPointerLeave', ['pointerout', 'pointerover']);
qt(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
qt(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
qt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
qt(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
qt(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
qt(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Gn =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Mm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Gn));
function Ku(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Ip(r, t, void 0, e), (e.currentTarget = null);
}
function sc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var a = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            u = l.instance,
            s = l.currentTarget;
          if (((l = l.listener), u !== a && i.isPropagationStopped())) break e;
          Ku(i, l, s), (a = u);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (u = l.instance),
            (s = l.currentTarget),
            (l = l.listener),
            u !== a && i.isPropagationStopped())
          )
            break e;
          Ku(i, l, s), (a = u);
        }
    }
  }
  if (Ai) throw ((e = wo), (Ai = !1), (wo = null), e);
}
function $(e, t) {
  var n = t[Ao];
  n === void 0 && (n = t[Ao] = new Set());
  var r = e + '__bubble';
  n.has(r) || (fc(t, e, 2, !1), n.add(r));
}
function $a(e, t, n) {
  var r = 0;
  t && (r |= 4), fc(n, e, r, t);
}
var Zr = '_advancedJSListening' + Math.random().toString(36).slice(2);
function gr(e) {
  if (!e[Zr]) {
    (e[Zr] = !0),
      gf.forEach(function (n) {
        n !== 'selectionchange' && (Mm.has(n) || $a(n, !1, e), $a(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Zr] || ((t[Zr] = !0), $a('selectionchange', !1, t));
  }
}
function fc(e, t, n, r) {
  switch (Qf(t)) {
    case 1:
      var i = Xp;
      break;
    case 4:
      i = Gp;
      break;
    default:
      i = Pl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ko || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ua(e, t, n, r, i) {
  var a = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var u = o.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = o.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = bt(l)), o === null)) return;
          if (((u = o.tag), u === 5 || u === 6)) {
            r = a = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  If(function () {
    var s = a,
      c = xl(n),
      m = [];
    e: {
      var v = uc.get(e);
      if (v !== void 0) {
        var h = Ol,
          k = e;
        switch (e) {
          case 'keypress':
            if (yi(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            h = cm;
            break;
          case 'focusin':
            (k = 'focus'), (h = Ra);
            break;
          case 'focusout':
            (k = 'blur'), (h = Ra);
            break;
          case 'beforeblur':
          case 'afterblur':
            h = Ra;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            h = ju;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = qp;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = mm;
            break;
          case ic:
          case ac:
          case oc:
            h = nm;
            break;
          case lc:
            h = hm;
            break;
          case 'scroll':
            h = Zp;
            break;
          case 'wheel':
            h = ym;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            h = im;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = Du;
        }
        var w = (t & 4) !== 0,
          T = !w && e === 'scroll',
          d = w ? (v !== null ? v + 'Capture' : null) : v;
        w = [];
        for (var f = s, p; f !== null; ) {
          p = f;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g), d !== null && ((g = cr(f, d)), g != null && w.push(yr(f, g, p)))),
            T)
          )
            break;
          f = f.return;
        }
        0 < w.length &&
          ((v = new h(v, k, null, n, c)), m.push({ event: v, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === 'mouseover' || e === 'pointerover'),
          (h = e === 'mouseout' || e === 'pointerout'),
          v && n !== go && (k = n.relatedTarget || n.fromElement) && (bt(k) || k[nt]))
        )
          break e;
        if (
          (h || v) &&
          ((v =
            c.window === c
              ? c
              : (v = c.ownerDocument)
              ? v.defaultView || v.parentWindow
              : window),
          h
            ? ((k = n.relatedTarget || n.toElement),
              (h = s),
              (k = k ? bt(k) : null),
              k !== null &&
                ((T = en(k)), k !== T || (k.tag !== 5 && k.tag !== 6)) &&
                (k = null))
            : ((h = null), (k = s)),
          h !== k)
        ) {
          if (
            ((w = ju),
            (g = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((w = Du), (g = 'onPointerLeave'), (d = 'onPointerEnter'), (f = 'pointer')),
            (T = h == null ? v : un(h)),
            (p = k == null ? v : un(k)),
            (v = new w(g, f + 'leave', h, n, c)),
            (v.target = T),
            (v.relatedTarget = p),
            (g = null),
            bt(c) === s &&
              ((w = new w(d, f + 'enter', k, n, c)),
              (w.target = p),
              (w.relatedTarget = T),
              (g = w)),
            (T = g),
            h && k)
          )
            t: {
              for (w = h, d = k, f = 0, p = w; p; p = tn(p)) f++;
              for (p = 0, g = d; g; g = tn(g)) p++;
              for (; 0 < f - p; ) (w = tn(w)), f--;
              for (; 0 < p - f; ) (d = tn(d)), p--;
              for (; f--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = tn(w)), (d = tn(d));
              }
              w = null;
            }
          else w = null;
          h !== null && Xu(m, v, h, w, !1),
            k !== null && T !== null && Xu(m, T, k, w, !0);
        }
      }
      e: {
        if (
          ((v = s ? un(s) : window),
          (h = v.nodeName && v.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && v.type === 'file'))
        )
          var S = _m;
        else if (Uu(v))
          if (qf) S = Tm;
          else {
            S = Nm;
            var C = Pm;
          }
        else
          (h = v.nodeName) &&
            h.toLowerCase() === 'input' &&
            (v.type === 'checkbox' || v.type === 'radio') &&
            (S = Om);
        if (S && (S = S(e, s))) {
          Jf(m, S, n, c);
          break e;
        }
        C && C(e, v, s),
          e === 'focusout' &&
            (C = v._wrapperState) &&
            C.controlled &&
            v.type === 'number' &&
            co(v, 'number', v.value);
      }
      switch (((C = s ? un(s) : window), e)) {
        case 'focusin':
          (Uu(C) || C.contentEditable === 'true') && ((on = C), (Co = s), (nr = null));
          break;
        case 'focusout':
          nr = Co = on = null;
          break;
        case 'mousedown':
          _o = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (_o = !1), Yu(m, n, c);
          break;
        case 'selectionchange':
          if (Lm) break;
        case 'keydown':
        case 'keyup':
          Yu(m, n, c);
      }
      var _;
      if (Al)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart';
              break e;
            case 'compositionend':
              O = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              O = 'onCompositionUpdate';
              break e;
          }
          O = void 0;
        }
      else
        an
          ? Gf(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (Xf &&
          n.locale !== 'ko' &&
          (an || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && an && (_ = Kf())
            : ((ht = c), (Nl = 'value' in ht ? ht.value : ht.textContent), (an = !0))),
        (C = Mi(s, O)),
        0 < C.length &&
          ((O = new Fu(O, e, null, n, c)),
          m.push({ event: O, listeners: C }),
          _ ? (O.data = _) : ((_ = Zf(n)), _ !== null && (O.data = _)))),
        (_ = wm ? Sm(e, n) : xm(e, n)) &&
          ((s = Mi(s, 'onBeforeInput')),
          0 < s.length &&
            ((c = new Fu('onBeforeInput', 'beforeinput', null, n, c)),
            m.push({ event: c, listeners: s }),
            (c.data = _)));
    }
    sc(m, t);
  });
}
function yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Mi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      a = i.stateNode;
    i.tag === 5 &&
      a !== null &&
      ((i = a),
      (a = cr(e, n)),
      a != null && r.unshift(yr(e, a, i)),
      (a = cr(e, t)),
      a != null && r.push(yr(e, a, i))),
      (e = e.return);
  }
  return r;
}
function tn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Xu(e, t, n, r, i) {
  for (var a = t._advancedJSName, o = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      s = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      i
        ? ((u = cr(n, a)), u != null && o.unshift(yr(n, u, l)))
        : i || ((u = cr(n, a)), u != null && o.push(yr(n, u, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var jm = /\r\n?/g,
  Fm = /\u0000|\uFFFD/g;
function Gu(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      jm,
      `
`
    )
    .replace(Fm, '');
}
function Jr(e, t, n) {
  if (((t = Gu(t)), Gu(e) !== t && n)) throw Error(y(425));
}
function ji() {}
var Po = null,
  No = null;
function Oo(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var To = typeof setTimeout == 'function' ? setTimeout : void 0,
  Dm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Zu = typeof Promise == 'function' ? Promise : void 0,
  bm =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Zu < 'u'
      ? function (e) {
          return Zu.resolve(null).then(e).catch($m);
        }
      : To;
function $m(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wa(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), mr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  mr(t);
}
function xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Ju(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Mn = Math.random().toString(36).slice(2),
  Ye = '__advancedJSFiber$' + Mn,
  kr = '__advancedJSProps$' + Mn,
  nt = '__advancedJSContainer$' + Mn,
  Ao = '__advancedJSEvents$' + Mn,
  Um = '__advancedJSListeners$' + Mn,
  Wm = '__advancedJSHandles$' + Mn;
function bt(e) {
  var t = e[Ye];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[Ye])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Ju(e); e !== null; ) {
          if ((n = e[Ye])) return n;
          e = Ju(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rr(e) {
  return (
    (e = e[Ye] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function la(e) {
  return e[kr] || null;
}
var zo = [],
  sn = -1;
function It(e) {
  return { current: e };
}
function W(e) {
  0 > sn || ((e.current = zo[sn]), (zo[sn] = null), sn--);
}
function b(e, t) {
  sn++, (zo[sn] = e.current), (e.current = t);
}
var Ot = {},
  ce = It(Ot),
  ye = It(!1),
  Yt = Ot;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ot;
  var r = e.stateNode;
  if (r && r.__advancedJSInternalMemoizedUnmaskedChildContext === t)
    return r.__advancedJSInternalMemoizedMaskedChildContext;
  var i = {},
    a;
  for (a in n) i[a] = t[a];
  return (
    r &&
      ((e = e.stateNode),
      (e.__advancedJSInternalMemoizedUnmaskedChildContext = t),
      (e.__advancedJSInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Fi() {
  W(ye), W(ce);
}
function qu(e, t, n) {
  if (ce.current !== Ot) throw Error(y(168));
  b(ce, t), b(ye, n);
}
function cc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(y(108, Pp(e) || 'Unknown', i));
  return Q({}, n, r);
}
function Di(e) {
  return (
    (e = ((e = e.stateNode) && e.__advancedJSInternalMemoizedMergedChildContext) || Ot),
    (Yt = ce.current),
    b(ce, e),
    b(ye, ye.current),
    !0
  );
}
function es(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = cc(e, t, Yt)),
      (r.__advancedJSInternalMemoizedMergedChildContext = e),
      W(ye),
      W(ce),
      b(ce, e))
    : W(ye),
    b(ye, n);
}
var Ze = null,
  ua = !1,
  Ba = !1;
function dc(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
function Bm(e) {
  (ua = !0), dc(e);
}
function Rt() {
  if (!Ba && Ze !== null) {
    Ba = !0;
    var e = 0,
      t = D;
    try {
      var n = Ze;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ze = null), (ua = !1);
    } catch (i) {
      throw (Ze !== null && (Ze = Ze.slice(e + 1)), Ff(El, Rt), i);
    } finally {
      (D = t), (Ba = !1);
    }
  }
  return null;
}
var fn = [],
  cn = 0,
  bi = null,
  $i = 0,
  Oe = [],
  Te = 0,
  Qt = null,
  Je = 1,
  qe = '';
function Ft(e, t) {
  (fn[cn++] = $i), (fn[cn++] = bi), (bi = e), ($i = t);
}
function pc(e, t, n) {
  (Oe[Te++] = Je), (Oe[Te++] = qe), (Oe[Te++] = Qt), (Qt = e);
  var r = Je;
  e = qe;
  var i = 32 - Ue(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var a = 32 - Ue(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Je = (1 << (32 - Ue(t) + i)) | (n << i) | r),
      (qe = a + e);
  } else (Je = (1 << a) | (n << i) | r), (qe = e);
}
function Ll(e) {
  e.return !== null && (Ft(e, 1), pc(e, 1, 0));
}
function Il(e) {
  for (; e === bi; ) (bi = fn[--cn]), (fn[cn] = null), ($i = fn[--cn]), (fn[cn] = null);
  for (; e === Qt; )
    (Qt = Oe[--Te]),
      (Oe[Te] = null),
      (qe = Oe[--Te]),
      (Oe[Te] = null),
      (Je = Oe[--Te]),
      (Oe[Te] = null);
}
var Ee = null,
  xe = null,
  H = !1,
  De = null;
function mc(e, t) {
  var n = Ae(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ts(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (xe = xt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qt !== null ? { id: Je, overflow: qe } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Ae(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Lo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Io(e) {
  if (H) {
    var t = xe;
    if (t) {
      var n = t;
      if (!ts(e, t)) {
        if (Lo(e)) throw Error(y(418));
        t = xt(n.nextSibling);
        var r = Ee;
        t && ts(e, t)
          ? mc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ee = e));
      }
    } else {
      if (Lo(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Ee = e);
    }
  }
}
function ns(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function qr(e) {
  if (e !== Ee) return !1;
  if (!H) return ns(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Oo(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (Lo(e)) throw (vc(), Error(y(418)));
    for (; t; ) mc(e, t), (t = xt(t.nextSibling));
  }
  if ((ns(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              xe = xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Ee ? xt(e.stateNode.nextSibling) : null;
  return !0;
}
function vc() {
  for (var e = xe; e; ) e = xt(e.nextSibling);
}
function Nn() {
  (xe = Ee = null), (H = !1);
}
function Rl(e) {
  De === null ? (De = [e]) : De.push(e);
}
var Hm = ut.advancedJSCurrentBatchConfig;
function je(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ui = It(null),
  Wi = null,
  dn = null,
  Ml = null;
function jl() {
  Ml = dn = Wi = null;
}
function Fl(e) {
  var t = Ui.current;
  W(Ui), (e._currentValue = t);
}
function Ro(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xn(e, t) {
  (Wi = e),
    (Ml = dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function Le(e) {
  var t = e._currentValue;
  if (Ml !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), dn === null)) {
      if (Wi === null) throw Error(y(308));
      (dn = e), (Wi.dependencies = { lanes: 0, firstContext: e });
    } else dn = dn.next = e;
  return t;
}
var $t = null;
function Dl(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function hc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Dl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var pt = !1;
function bl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function gc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Et(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Dl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function ki(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cl(e, n);
  }
}
function rs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        a === null ? (i = a = o) : (a = a.next = o), (n = n.next);
      } while (n !== null);
      a === null ? (i = a = t) : (a = a.next = t);
    } else i = a = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Bi(e, t, n, r) {
  var i = e.updateQueue;
  pt = !1;
  var a = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      s = u.next;
    (u.next = null), o === null ? (a = s) : (o.next = s), (o = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = s) : (l.next = s), (c.lastBaseUpdate = u)));
  }
  if (a !== null) {
    var m = i.baseState;
    (o = 0), (c = s = u = null), (l = a);
    do {
      var v = l.lane,
        h = l.eventTime;
      if ((r & v) === v) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var k = e,
            w = l;
          switch (((v = t), (h = n), w.tag)) {
            case 1:
              if (((k = w.payload), typeof k == 'function')) {
                m = k.call(h, m, v);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = (k.flags & -65537) | 128;
            case 0:
              if (
                ((k = w.payload),
                (v = typeof k == 'function' ? k.call(h, m, v) : k),
                v == null)
              )
                break e;
              m = Q({}, m, v);
              break e;
            case 2:
              pt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (v = i.effects), v === null ? (i.effects = [l]) : v.push(l));
      } else
        (h = {
          eventTime: h,
          lane: v,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((s = c = h), (u = m)) : (c = c.next = h),
          (o |= v);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (v = l),
          (l = v.next),
          (v.next = null),
          (i.lastBaseUpdate = v),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = m),
      (i.baseState = u),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else a === null && (i.shared.lanes = 0);
    (Xt |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function is(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(y(191, i));
        i.call(r);
      }
    }
}
var yc = new hf.Component().refs;
function Mo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var sa = {
  isMounted: function (e) {
    return (e = e._advancedJSInternals) ? en(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._advancedJSInternals;
    var r = pe(),
      i = _t(e),
      a = et(r, i);
    (a.payload = t),
      n != null && (a.callback = n),
      (t = Et(e, a, i)),
      t !== null && (We(t, e, i, r), ki(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._advancedJSInternals;
    var r = pe(),
      i = _t(e),
      a = et(r, i);
    (a.tag = 1),
      (a.payload = t),
      n != null && (a.callback = n),
      (t = Et(e, a, i)),
      t !== null && (We(t, e, i, r), ki(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._advancedJSInternals;
    var n = pe(),
      r = _t(e),
      i = et(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Et(e, i, r)),
      t !== null && (We(t, e, r, n), ki(t, e, r));
  },
};
function as(e, t, n, r, i, a, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, a, o)
      : t.prototype && t.prototype.isPureadvancedJSComponent
      ? !hr(n, r) || !hr(i, a)
      : !0
  );
}
function kc(e, t, n) {
  var r = !1,
    i = Ot,
    a = t.contextType;
  return (
    typeof a == 'object' && a !== null
      ? (a = Le(a))
      : ((i = ke(t) ? Yt : ce.current),
        (r = t.contextTypes),
        (a = (r = r != null) ? Pn(e, i) : Ot)),
    (t = new t(n, a)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = sa),
    (e.stateNode = t),
    (t._advancedJSInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__advancedJSInternalMemoizedUnmaskedChildContext = i),
      (e.__advancedJSInternalMemoizedMaskedChildContext = a)),
    t
  );
}
function os(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && sa.enqueueReplaceState(t, t.state, null);
}
function jo(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = yc), bl(e);
  var a = t.contextType;
  typeof a == 'object' && a !== null
    ? (i.context = Le(a))
    : ((a = ke(t) ? Yt : ce.current), (i.context = Pn(e, a))),
    (i.state = e.memoizedState),
    (a = t.getDerivedStateFromProps),
    typeof a == 'function' && (Mo(e, t, a, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
      t !== i.state && sa.enqueueReplaceState(i, i.state, null),
      Bi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Hn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var i = r,
        a = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === a
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            l === yc && (l = i.refs = {}), o === null ? delete l[a] : (l[a] = o);
          }),
          (t._stringRef = a),
          t);
    }
    if (typeof e != 'string') throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function ei(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function ls(e) {
  var t = e._init;
  return t(e._payload);
}
function wc(e) {
  function t(d, f) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [f]), (d.flags |= 16)) : p.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function i(d, f) {
    return (d = Pt(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function a(d, f, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < f ? ((d.flags |= 2), f) : p)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, f, p, g) {
    return f === null || f.tag !== 6
      ? ((f = Ga(p, d.mode, g)), (f.return = d), f)
      : ((f = i(f, p)), (f.return = d), f);
  }
  function u(d, f, p, g) {
    var S = p.type;
    return S === rn
      ? c(d, f, p.props.children, g, p.key)
      : f !== null &&
        (f.elementType === S ||
          (typeof S == 'object' && S !== null && S.$$typeof === dt && ls(S) === f.type))
      ? ((g = i(f, p.props)), (g.ref = Hn(d, f, p)), (g.return = d), g)
      : ((g = _i(p.type, p.key, p.props, null, d.mode, g)),
        (g.ref = Hn(d, f, p)),
        (g.return = d),
        g);
  }
  function s(d, f, p, g) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== p.containerInfo ||
      f.stateNode.implementation !== p.implementation
      ? ((f = Za(p, d.mode, g)), (f.return = d), f)
      : ((f = i(f, p.children || [])), (f.return = d), f);
  }
  function c(d, f, p, g, S) {
    return f === null || f.tag !== 7
      ? ((f = Vt(p, d.mode, g, S)), (f.return = d), f)
      : ((f = i(f, p)), (f.return = d), f);
  }
  function m(d, f, p) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = Ga('' + f, d.mode, p)), (f.return = d), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Br:
          return (
            (p = _i(f.type, f.key, f.props, null, d.mode, p)),
            (p.ref = Hn(d, null, f)),
            (p.return = d),
            p
          );
        case nn:
          return (f = Za(f, d.mode, p)), (f.return = d), f;
        case dt:
          var g = f._init;
          return m(d, g(f._payload), p);
      }
      if (Kn(f) || bn(f)) return (f = Vt(f, d.mode, p, null)), (f.return = d), f;
      ei(d, f);
    }
    return null;
  }
  function v(d, f, p, g) {
    var S = f !== null ? f.key : null;
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return S !== null ? null : l(d, f, '' + p, g);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Br:
          return p.key === S ? u(d, f, p, g) : null;
        case nn:
          return p.key === S ? s(d, f, p, g) : null;
        case dt:
          return (S = p._init), v(d, f, S(p._payload), g);
      }
      if (Kn(p) || bn(p)) return S !== null ? null : c(d, f, p, g, null);
      ei(d, p);
    }
    return null;
  }
  function h(d, f, p, g, S) {
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return (d = d.get(p) || null), l(f, d, '' + g, S);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Br:
          return (d = d.get(g.key === null ? p : g.key) || null), u(f, d, g, S);
        case nn:
          return (d = d.get(g.key === null ? p : g.key) || null), s(f, d, g, S);
        case dt:
          var C = g._init;
          return h(d, f, p, C(g._payload), S);
      }
      if (Kn(g) || bn(g)) return (d = d.get(p) || null), c(f, d, g, S, null);
      ei(f, g);
    }
    return null;
  }
  function k(d, f, p, g) {
    for (
      var S = null, C = null, _ = f, O = (f = 0), j = null;
      _ !== null && O < p.length;
      O++
    ) {
      _.index > O ? ((j = _), (_ = null)) : (j = _.sibling);
      var I = v(d, _, p[O], g);
      if (I === null) {
        _ === null && (_ = j);
        break;
      }
      e && _ && I.alternate === null && t(d, _),
        (f = a(I, f, O)),
        C === null ? (S = I) : (C.sibling = I),
        (C = I),
        (_ = j);
    }
    if (O === p.length) return n(d, _), H && Ft(d, O), S;
    if (_ === null) {
      for (; O < p.length; O++)
        (_ = m(d, p[O], g)),
          _ !== null &&
            ((f = a(_, f, O)), C === null ? (S = _) : (C.sibling = _), (C = _));
      return H && Ft(d, O), S;
    }
    for (_ = r(d, _); O < p.length; O++)
      (j = h(_, d, O, p[O], g)),
        j !== null &&
          (e && j.alternate !== null && _.delete(j.key === null ? O : j.key),
          (f = a(j, f, O)),
          C === null ? (S = j) : (C.sibling = j),
          (C = j));
    return (
      e &&
        _.forEach(function (Re) {
          return t(d, Re);
        }),
      H && Ft(d, O),
      S
    );
  }
  function w(d, f, p, g) {
    var S = bn(p);
    if (typeof S != 'function') throw Error(y(150));
    if (((p = S.call(p)), p == null)) throw Error(y(151));
    for (
      var C = (S = null), _ = f, O = (f = 0), j = null, I = p.next();
      _ !== null && !I.done;
      O++, I = p.next()
    ) {
      _.index > O ? ((j = _), (_ = null)) : (j = _.sibling);
      var Re = v(d, _, I.value, g);
      if (Re === null) {
        _ === null && (_ = j);
        break;
      }
      e && _ && Re.alternate === null && t(d, _),
        (f = a(Re, f, O)),
        C === null ? (S = Re) : (C.sibling = Re),
        (C = Re),
        (_ = j);
    }
    if (I.done) return n(d, _), H && Ft(d, O), S;
    if (_ === null) {
      for (; !I.done; O++, I = p.next())
        (I = m(d, I.value, g)),
          I !== null &&
            ((f = a(I, f, O)), C === null ? (S = I) : (C.sibling = I), (C = I));
      return H && Ft(d, O), S;
    }
    for (_ = r(d, _); !I.done; O++, I = p.next())
      (I = h(_, d, O, I.value, g)),
        I !== null &&
          (e && I.alternate !== null && _.delete(I.key === null ? O : I.key),
          (f = a(I, f, O)),
          C === null ? (S = I) : (C.sibling = I),
          (C = I));
    return (
      e &&
        _.forEach(function (Fn) {
          return t(d, Fn);
        }),
      H && Ft(d, O),
      S
    );
  }
  function T(d, f, p, g) {
    if (
      (typeof p == 'object' &&
        p !== null &&
        p.type === rn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case Br:
          e: {
            for (var S = p.key, C = f; C !== null; ) {
              if (C.key === S) {
                if (((S = p.type), S === rn)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (f = i(C, p.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === dt &&
                    ls(S) === C.type)
                ) {
                  n(d, C.sibling),
                    (f = i(C, p.props)),
                    (f.ref = Hn(d, C, p)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            p.type === rn
              ? ((f = Vt(p.props.children, d.mode, g, p.key)), (f.return = d), (d = f))
              : ((g = _i(p.type, p.key, p.props, null, d.mode, g)),
                (g.ref = Hn(d, f, p)),
                (g.return = d),
                (d = g));
          }
          return o(d);
        case nn:
          e: {
            for (C = p.key; f !== null; ) {
              if (f.key === C)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === p.containerInfo &&
                  f.stateNode.implementation === p.implementation
                ) {
                  n(d, f.sibling), (f = i(f, p.children || [])), (f.return = d), (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Za(p, d.mode, g)), (f.return = d), (d = f);
          }
          return o(d);
        case dt:
          return (C = p._init), T(d, f, C(p._payload), g);
      }
      if (Kn(p)) return k(d, f, p, g);
      if (bn(p)) return w(d, f, p, g);
      ei(d, p);
    }
    return (typeof p == 'string' && p !== '') || typeof p == 'number'
      ? ((p = '' + p),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = i(f, p)), (f.return = d), (d = f))
          : (n(d, f), (f = Ga(p, d.mode, g)), (f.return = d), (d = f)),
        o(d))
      : n(d, f);
  }
  return T;
}
var On = wc(!0),
  Sc = wc(!1),
  Mr = {},
  Xe = It(Mr),
  wr = It(Mr),
  Sr = It(Mr);
function Ut(e) {
  if (e === Mr) throw Error(y(174));
  return e;
}
function $l(e, t) {
  switch ((b(Sr, t), b(wr, e), b(Xe, Mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : mo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = mo(t, e));
  }
  W(Xe), b(Xe, t);
}
function Tn() {
  W(Xe), W(wr), W(Sr);
}
function xc(e) {
  Ut(Sr.current);
  var t = Ut(Xe.current),
    n = mo(t, e.type);
  t !== n && (b(wr, e), b(Xe, n));
}
function Ul(e) {
  wr.current === e && (W(Xe), W(wr));
}
var V = It(0);
function Hi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ha = [];
function Wl() {
  for (var e = 0; e < Ha.length; e++) Ha[e]._workInProgressVersionPrimary = null;
  Ha.length = 0;
}
var wi = ut.advancedJSCurrentDispatcher,
  Va = ut.advancedJSCurrentBatchConfig,
  Kt = 0,
  Y = null,
  q = null,
  re = null,
  Vi = !1,
  rr = !1,
  xr = 0,
  Vm = 0;
function ue() {
  throw Error(y(321));
}
function Bl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Be(e[n], t[n])) return !1;
  return !0;
}
function Hl(e, t, n, r, i, a) {
  if (
    ((Kt = a),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wi.current = e === null || e.memoizedState === null ? Xm : Gm),
    (e = n(r, i)),
    rr)
  ) {
    a = 0;
    do {
      if (((rr = !1), (xr = 0), 25 <= a)) throw Error(y(301));
      (a += 1), (re = q = null), (t.updateQueue = null), (wi.current = Zm), (e = n(r, i));
    } while (rr);
  }
  if (
    ((wi.current = Yi),
    (t = q !== null && q.next !== null),
    (Kt = 0),
    (re = q = Y = null),
    (Vi = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Vl() {
  var e = xr !== 0;
  return (xr = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return re === null ? (Y.memoizedState = re = e) : (re = re.next = e), re;
}
function Ie() {
  if (q === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = re === null ? Y.memoizedState : re.next;
  if (t !== null) (re = t), (q = e);
  else {
    if (e === null) throw Error(y(310));
    (q = e),
      (e = {
        memoizedState: q.memoizedState,
        baseState: q.baseState,
        baseQueue: q.baseQueue,
        queue: q.queue,
        next: null,
      }),
      re === null ? (Y.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function Er(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ya(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = q,
    i = r.baseQueue,
    a = n.pending;
  if (a !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = a.next), (a.next = o);
    }
    (r.baseQueue = i = a), (n.pending = null);
  }
  if (i !== null) {
    (a = i.next), (r = r.baseState);
    var l = (o = null),
      u = null,
      s = a;
    do {
      var c = s.lane;
      if ((Kt & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var m = {
          lane: c,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((l = u = m), (o = r)) : (u = u.next = m), (Y.lanes |= c), (Xt |= c);
      }
      s = s.next;
    } while (s !== null && s !== a);
    u === null ? (o = r) : (u.next = l),
      Be(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (a = i.lane), (Y.lanes |= a), (Xt |= a), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Qa(e) {
  var t = Ie(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    a = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (a = e(a, o.action)), (o = o.next);
    while (o !== i);
    Be(a, t.memoizedState) || (ge = !0),
      (t.memoizedState = a),
      t.baseQueue === null && (t.baseState = a),
      (n.lastRenderedState = a);
  }
  return [a, r];
}
function Ec() {}
function Cc(e, t) {
  var n = Y,
    r = Ie(),
    i = t(),
    a = !Be(r.memoizedState, i);
  if (
    (a && ((r.memoizedState = i), (ge = !0)),
    (r = r.queue),
    Yl(Nc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || a || (re !== null && re.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Cr(9, Pc.bind(null, n, r, i, t), void 0, null), ie === null))
      throw Error(y(349));
    Kt & 30 || _c(n, t, i);
  }
  return i;
}
function _c(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Y.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Pc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Oc(t) && Tc(e);
}
function Nc(e, t, n) {
  return n(function () {
    Oc(t) && Tc(e);
  });
}
function Oc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Tc(e) {
  var t = rt(e, 1);
  t !== null && We(t, e, 1, -1);
}
function us(e) {
  var t = Ve();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Km.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function Cr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ac() {
  return Ie().memoizedState;
}
function Si(e, t, n, r) {
  var i = Ve();
  (Y.flags |= e), (i.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r));
}
function fa(e, t, n, r) {
  var i = Ie();
  r = r === void 0 ? null : r;
  var a = void 0;
  if (q !== null) {
    var o = q.memoizedState;
    if (((a = o.destroy), r !== null && Bl(r, o.deps))) {
      i.memoizedState = Cr(t, n, a, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = Cr(1 | t, n, a, r));
}
function ss(e, t) {
  return Si(8390656, 8, e, t);
}
function Yl(e, t) {
  return fa(2048, 8, e, t);
}
function zc(e, t) {
  return fa(4, 2, e, t);
}
function Lc(e, t) {
  return fa(4, 4, e, t);
}
function Ic(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Rc(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), fa(4, 4, Ic.bind(null, t, e), n);
}
function Ql() {}
function Mc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bl(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function jc(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Fc(e, t, n) {
  return Kt & 21
    ? (Be(n, t) || ((n = $f()), (Y.lanes |= n), (Xt |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function Ym(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Va.transition;
  Va.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Va.transition = r);
  }
}
function Dc() {
  return Ie().memoizedState;
}
function Qm(e, t, n) {
  var r = _t(e);
  if (
    ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), bc(e))
  )
    $c(t, n);
  else if (((n = hc(e, t, n, r)), n !== null)) {
    var i = pe();
    We(n, e, r, i), Uc(n, t, r);
  }
}
function Km(e, t, n) {
  var r = _t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bc(e)) $c(t, i);
  else {
    var a = e.alternate;
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = a(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Be(l, o))) {
          var u = t.interleaved;
          u === null ? ((i.next = i), Dl(t)) : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = hc(e, t, i, r)), n !== null && ((i = pe()), We(n, e, r, i), Uc(n, t, r));
  }
}
function bc(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function $c(e, t) {
  rr = Vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Uc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Cl(e, n);
  }
}
var Yi = {
    readContext: Le,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  Xm = {
    readContext: Le,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Le,
    useEffect: ss,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), Si(4194308, 4, Ic.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Si(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Si(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Qm.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: us,
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = us(!1),
        t = e[0];
      return (e = Ym.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = Ve();
      if (H) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(y(349));
        Kt & 30 || _c(r, t, n);
      }
      i.memoizedState = n;
      var a = { value: n, getSnapshot: t };
      return (
        (i.queue = a),
        ss(Nc.bind(null, r, a, e), [e]),
        (r.flags |= 2048),
        Cr(9, Pc.bind(null, r, a, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = ie.identifierPrefix;
      if (H) {
        var n = qe,
          r = Je;
        (n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = xr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Vm++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gm = {
    readContext: Le,
    useCallback: Mc,
    useContext: Le,
    useEffect: Yl,
    useImperativeHandle: Rc,
    useInsertionEffect: zc,
    useLayoutEffect: Lc,
    useMemo: jc,
    useReducer: Ya,
    useRef: Ac,
    useState: function () {
      return Ya(Er);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = Ie();
      return Fc(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Ya(Er)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Ec,
    useSyncExternalStore: Cc,
    useId: Dc,
    unstable_isNewReconciler: !1,
  },
  Zm = {
    readContext: Le,
    useCallback: Mc,
    useContext: Le,
    useEffect: Yl,
    useImperativeHandle: Rc,
    useInsertionEffect: zc,
    useLayoutEffect: Lc,
    useMemo: jc,
    useReducer: Qa,
    useRef: Ac,
    useState: function () {
      return Qa(Er);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = Ie();
      return q === null ? (t.memoizedState = e) : Fc(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = Qa(Er)[0],
        t = Ie().memoizedState;
      return [e, t];
    },
    useMutableSource: Ec,
    useSyncExternalStore: Cc,
    useId: Dc,
    unstable_isNewReconciler: !1,
  };
function An(e, t) {
  try {
    var n = '',
      r = t;
    do (n += _p(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (a) {
    i =
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ka(e, t, n) {
  return { value: e, source: null, stack: null, digest: t ?? null };
}
function Fo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jm = typeof WeakMap == 'function' ? WeakMap : Map;
function Wc(e, t, n) {
  (n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ki || ((Ki = !0), (Qo = r)), Fo(e, t);
    }),
    n
  );
}
function Bc(e, t, n) {
  (n = et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Fo(e, t);
      });
  }
  var a = e.stateNode;
  return (
    a !== null &&
      typeof a.componentDidCatch == 'function' &&
      (n.callback = function () {
        Fo(e, t),
          typeof r != 'function' && (Ct === null ? (Ct = new Set([this])) : Ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' });
      }),
    n
  );
}
function fs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jm();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = dv.bind(null, e, t, n)), t.then(e, e));
}
function cs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ds(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = et(-1, 1)), (t.tag = 2), Et(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var qm = ut.advancedJSCurrentOwner,
  ge = !1;
function de(e, t, n, r) {
  t.child = e === null ? Sc(t, null, n, r) : On(t, e.child, n, r);
}
function ps(e, t, n, r, i) {
  n = n.render;
  var a = t.ref;
  return (
    xn(t, i),
    (r = Hl(e, t, n, r, a, i)),
    (n = Vl()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (H && n && Ll(t), (t.flags |= 1), de(e, t, r, i), t.child)
  );
}
function ms(e, t, n, r, i) {
  if (e === null) {
    var a = n.type;
    return typeof a == 'function' &&
      !tu(a) &&
      a.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = a), Hc(e, t, a, r, i))
      : ((e = _i(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((a = e.child), !(e.lanes & i))) {
    var o = a.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : hr), n(o, r) && e.ref === t.ref))
      return it(e, t, i);
  }
  return (t.flags |= 1), (e = Pt(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Hc(e, t, n, r, i) {
  if (e !== null) {
    var a = e.memoizedProps;
    if (hr(a, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), it(e, t, i);
  }
  return Do(e, t, n, r, i);
}
function Vc(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    a = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(mn, Se),
        (Se |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = a !== null ? a.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          b(mn, Se),
          (Se |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = a !== null ? a.baseLanes : n),
        b(mn, Se),
        (Se |= r);
    }
  else
    a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(mn, Se),
      (Se |= r);
  return de(e, t, i, n), t.child;
}
function Yc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Do(e, t, n, r, i) {
  var a = ke(n) ? Yt : ce.current;
  return (
    (a = Pn(t, a)),
    xn(t, i),
    (n = Hl(e, t, n, r, a, i)),
    (r = Vl()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (H && r && Ll(t), (t.flags |= 1), de(e, t, n, i), t.child)
  );
}
function vs(e, t, n, r, i) {
  if (ke(n)) {
    var a = !0;
    Di(t);
  } else a = !1;
  if ((xn(t, i), t.stateNode === null)) xi(e, t), kc(t, n, r), jo(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var u = o.context,
      s = n.contextType;
    typeof s == 'object' && s !== null
      ? (s = Le(s))
      : ((s = ke(n) ? Yt : ce.current), (s = Pn(t, s)));
    var c = n.getDerivedStateFromProps,
      m = typeof c == 'function' || typeof o.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== r || u !== s) && os(t, o, r, s)),
      (pt = !1);
    var v = t.memoizedState;
    (o.state = v),
      Bi(t, r, o, i),
      (u = t.memoizedState),
      l !== r || v !== u || ye.current || pt
        ? (typeof c == 'function' && (Mo(t, n, c, r), (u = t.memoizedState)),
          (l = pt || as(t, n, l, r, v, u, s))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (o.props = r),
          (o.state = u),
          (o.context = s),
          (r = l))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode),
      gc(e, t),
      (l = t.memoizedProps),
      (s = t.type === t.elementType ? l : je(t.type, l)),
      (o.props = s),
      (m = t.pendingProps),
      (v = o.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = Le(u))
        : ((u = ke(n) ? Yt : ce.current), (u = Pn(t, u)));
    var h = n.getDerivedStateFromProps;
    (c = typeof h == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
      (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof o.componentWillReceiveProps != 'function') ||
      ((l !== m || v !== u) && os(t, o, r, u)),
      (pt = !1),
      (v = t.memoizedState),
      (o.state = v),
      Bi(t, r, o, i);
    var k = t.memoizedState;
    l !== m || v !== k || ye.current || pt
      ? (typeof h == 'function' && (Mo(t, n, h, r), (k = t.memoizedState)),
        (s = pt || as(t, n, s, r, v, k, u) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' &&
                o.componentWillUpdate(r, k, u),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(r, k, u)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = k)),
        (o.props = r),
        (o.state = k),
        (o.context = u),
        (r = s))
      : (typeof o.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bo(e, t, n, r, a, i);
}
function bo(e, t, n, r, i, a) {
  Yc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && es(t, n, !1), it(e, t, a);
  (r = t.stateNode), (qm.current = t);
  var l = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = On(t, e.child, null, a)), (t.child = On(t, null, l, a)))
      : de(e, t, l, a),
    (t.memoizedState = r.state),
    i && es(t, n, !0),
    t.child
  );
}
function Qc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? qu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && qu(e, t.context, !1),
    $l(e, t.containerInfo);
}
function hs(e, t, n, r, i) {
  return Nn(), Rl(i), (t.flags |= 256), de(e, t, n, r), t.child;
}
var $o = { dehydrated: null, treeContext: null, retryLane: 0 };
function Uo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kc(e, t, n) {
  var r = t.pendingProps,
    i = V.current,
    a = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((a = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    b(V, i & 1),
    e === null)
  )
    return (
      Io(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          a
            ? ((r = t.mode),
              (a = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = o))
                : (a = pa(o, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = Uo(n)),
              (t.memoizedState = $o),
              e)
            : Kl(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return ev(e, t, o, r, l, i, n);
  if (a) {
    (a = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = Pt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (a = Pt(l, a)) : ((a = Vt(a, o, n, null)), (a.flags |= 2)),
      (a.return = t),
      (r.return = t),
      (r.sibling = a),
      (t.child = r),
      (r = a),
      (a = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Uo(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (a.memoizedState = o),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = $o),
      r
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (r = Pt(a, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Kl(e, t) {
  return (
    (t = pa({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ti(e, t, n, r) {
  return (
    r !== null && Rl(r),
    On(t, e.child, null, n),
    (e = Kl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ev(e, t, n, r, i, a, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ka(Error(y(422)))), ti(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((a = r.fallback),
        (i = t.mode),
        (r = pa({ mode: 'visible', children: r.children }, i, 0, null)),
        (a = Vt(a, i, o, null)),
        (a.flags |= 2),
        (r.return = t),
        (a.return = t),
        (r.sibling = a),
        (t.child = r),
        t.mode & 1 && On(t, e.child, null, o),
        (t.child.memoizedState = Uo(o)),
        (t.memoizedState = $o),
        a);
  if (!(t.mode & 1)) return ti(e, t, o, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (a = Error(y(419))), (r = Ka(a, r)), ti(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), ge || l)) {
    if (((r = ie), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== a.retryLane && ((a.retryLane = i), rt(e, i), We(r, e, i, -1));
    }
    return eu(), (r = Ka(Error(y(421)))), ti(e, t, o, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = pv.bind(null, e)),
      (i._advancedJSRetry = t),
      null)
    : ((e = a.treeContext),
      (xe = xt(i.nextSibling)),
      (Ee = t),
      (H = !0),
      (De = null),
      e !== null &&
        ((Oe[Te++] = Je),
        (Oe[Te++] = qe),
        (Oe[Te++] = Qt),
        (Je = e.id),
        (qe = e.overflow),
        (Qt = t)),
      (t = Kl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function gs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ro(e.return, t, n);
}
function Xa(e, t, n, r, i) {
  var a = e.memoizedState;
  a === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((a.isBackwards = t),
      (a.rendering = null),
      (a.renderingStartTime = 0),
      (a.last = r),
      (a.tail = n),
      (a.tailMode = i));
}
function Xc(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    a = r.tail;
  if ((de(e, t, r.children, n), (r = V.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && gs(e, n, t);
        else if (e.tag === 19) gs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(V, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && Hi(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Xa(t, !1, i, n, a);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Hi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Xa(t, !0, n, null, a);
        break;
      case 'together':
        Xa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function tv(e, t, n) {
  switch (t.tag) {
    case 3:
      Qc(t), Nn();
      break;
    case 5:
      xc(t);
      break;
    case 1:
      ke(t.type) && Di(t);
      break;
    case 4:
      $l(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      b(Ui, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(V, V.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Kc(e, t, n)
          : (b(V, V.current & 1), (e = it(e, t, n)), e !== null ? e.sibling : null);
      b(V, V.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        b(V, V.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Vc(e, t, n);
  }
  return it(e, t, n);
}
var Gc, Wo, Zc, Jc;
Gc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Wo = function () {};
Zc = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Ut(Xe.current);
    var a = null;
    switch (n) {
      case 'input':
        (i = so(e, i)), (r = so(e, r)), (a = []);
        break;
      case 'select':
        (i = Q({}, i, { value: void 0 })), (r = Q({}, r, { value: void 0 })), (a = []);
        break;
      case 'textarea':
        (i = po(e, i)), (r = po(e, r)), (a = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ji);
    }
    vo(n, r);
    var o;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === 'style') {
          var l = i[s];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (sr.hasOwnProperty(s) ? a || (a = []) : (a = a || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((l = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && u !== l && (u != null || l != null))
      )
        if (s === 'style')
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (u && u.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ''));
            for (o in u)
              u.hasOwnProperty(o) && l[o] !== u[o] && (n || (n = {}), (n[o] = u[o]));
          } else n || (a || (a = []), a.push(s, n)), (n = u);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (a = a || []).push(s, u))
            : s === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (a = a || []).push(s, '' + u)
            : s !== 'suppressContentEditableWarning' &&
              s !== 'suppressHydrationWarning' &&
              (sr.hasOwnProperty(s)
                ? (u != null && s === 'onScroll' && $('scroll', e),
                  a || l === u || (a = []))
                : (a = a || []).push(s, u));
    }
    n && (a = a || []).push('style', n);
    var s = a;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Jc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function nv(e, t, n) {
  var r = t.pendingProps;
  switch ((Il(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return se(t), null;
    case 1:
      return ke(t.type) && Fi(), se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Tn(),
        W(ye),
        W(ce),
        Wl(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (qr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Go(De), (De = null)))),
        Wo(e, t),
        se(t),
        null
      );
    case 5:
      Ul(t);
      var i = Ut(Sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Zc(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return se(t), null;
        }
        if (((e = Ut(Xe.current)), qr(t))) {
          (r = t.stateNode), (n = t.type);
          var a = t.memoizedProps;
          switch (((r[Ye] = t), (r[kr] = a), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              $('cancel', r), $('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              $('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Gn.length; i++) $(Gn[i], r);
              break;
            case 'source':
              $('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              $('error', r), $('load', r);
              break;
            case 'details':
              $('toggle', r);
              break;
            case 'input':
              Pu(r, a), $('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!a.multiple }), $('invalid', r);
              break;
            case 'textarea':
              Ou(r, a), $('invalid', r);
          }
          vo(n, a), (i = null);
          for (var o in a)
            if (a.hasOwnProperty(o)) {
              var l = a[o];
              o === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (a.suppressHydrationWarning !== !0 && Jr(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (a.suppressHydrationWarning !== !0 && Jr(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : sr.hasOwnProperty(o) && l != null && o === 'onScroll' && $('scroll', r);
            }
          switch (n) {
            case 'input':
              Hr(r), Nu(r, a, !0);
              break;
            case 'textarea':
              Hr(r), Tu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof a.onClick == 'function' && (r.onclick = ji);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = _f(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = o.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === 'select' &&
                    ((o = e),
                    r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ye] = t),
            (e[kr] = r),
            Gc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ho(n, r)), n)) {
              case 'dialog':
                $('cancel', e), $('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                $('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Gn.length; i++) $(Gn[i], e);
                i = r;
                break;
              case 'source':
                $('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                $('error', e), $('load', e), (i = r);
                break;
              case 'details':
                $('toggle', e), (i = r);
                break;
              case 'input':
                Pu(e, r), (i = so(e, r)), $('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  $('invalid', e);
                break;
              case 'textarea':
                Ou(e, r), (i = po(e, r)), $('invalid', e);
                break;
              default:
                i = r;
            }
            vo(n, i), (l = i);
            for (a in l)
              if (l.hasOwnProperty(a)) {
                var u = l[a];
                a === 'style'
                  ? Of(e, u)
                  : a === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && Pf(e, u))
                  : a === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && fr(e, u)
                    : typeof u == 'number' && fr(e, '' + u)
                  : a !== 'suppressContentEditableWarning' &&
                    a !== 'suppressHydrationWarning' &&
                    a !== 'autoFocus' &&
                    (sr.hasOwnProperty(a)
                      ? u != null && a === 'onScroll' && $('scroll', e)
                      : u != null && yl(e, a, u, o));
              }
            switch (n) {
              case 'input':
                Hr(e), Nu(e, r, !1);
                break;
              case 'textarea':
                Hr(e), Tu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Nt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (a = r.value),
                  a != null
                    ? yn(e, !!r.multiple, a, !1)
                    : r.defaultValue != null && yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = ji);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return se(t), null;
    case 6:
      if (e && t.stateNode != null) Jc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(y(166));
        if (((n = Ut(Sr.current)), Ut(Xe.current), qr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ye] = t),
            (a = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          a && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ye] = t),
            (t.stateNode = r);
      }
      return se(t), null;
    case 13:
      if (
        (W(V),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && xe !== null && t.mode & 1 && !(t.flags & 128))
          vc(), Nn(), (t.flags |= 98560), (a = !1);
        else if (((a = qr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(y(318));
            if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
              throw Error(y(317));
            a[Ye] = t;
          } else Nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          se(t), (a = !1);
        } else De !== null && (Go(De), (De = null)), (a = !0);
        if (!a) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || V.current & 1 ? ee === 0 && (ee = 3) : eu())),
          t.updateQueue !== null && (t.flags |= 4),
          se(t),
          null);
    case 4:
      return Tn(), Wo(e, t), e === null && gr(t.stateNode.containerInfo), se(t), null;
    case 10:
      return Fl(t.type._context), se(t), null;
    case 17:
      return ke(t.type) && Fi(), se(t), null;
    case 19:
      if ((W(V), (a = t.memoizedState), a === null)) return se(t), null;
      if (((r = (t.flags & 128) !== 0), (o = a.rendering), o === null))
        if (r) Vn(a, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Hi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Vn(a, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (a = n),
                    (e = r),
                    (a.flags &= 14680066),
                    (o = a.alternate),
                    o === null
                      ? ((a.childLanes = 0),
                        (a.lanes = e),
                        (a.child = null),
                        (a.subtreeFlags = 0),
                        (a.memoizedProps = null),
                        (a.memoizedState = null),
                        (a.updateQueue = null),
                        (a.dependencies = null),
                        (a.stateNode = null))
                      : ((a.childLanes = o.childLanes),
                        (a.lanes = o.lanes),
                        (a.child = o.child),
                        (a.subtreeFlags = 0),
                        (a.deletions = null),
                        (a.memoizedProps = o.memoizedProps),
                        (a.memoizedState = o.memoizedState),
                        (a.updateQueue = o.updateQueue),
                        (a.type = o.type),
                        (e = o.dependencies),
                        (a.dependencies =
                          e === null
                            ? null
                            : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return b(V, (V.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          a.tail !== null &&
            Z() > zn &&
            ((t.flags |= 128), (r = !0), Vn(a, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Hi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vn(a, !0),
              a.tail === null && a.tailMode === 'hidden' && !o.alternate && !H)
            )
              return se(t), null;
          } else
            2 * Z() - a.renderingStartTime > zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vn(a, !1), (t.lanes = 4194304));
        a.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = a.last), n !== null ? (n.sibling = o) : (t.child = o), (a.last = o));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Z()),
          (t.sibling = null),
          (n = V.current),
          b(V, r ? (n & 1) | 2 : n & 1),
          t)
        : (se(t), null);
    case 22:
    case 23:
      return (
        ql(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Se & 1073741824 && (se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function rv(e, t) {
  switch ((Il(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && Fi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Tn(),
        W(ye),
        W(ce),
        Wl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ul(t), null;
    case 13:
      if ((W(V), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        Nn();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return W(V), null;
    case 4:
      return Tn(), null;
    case 10:
      return Fl(t.type._context), null;
    case 22:
    case 23:
      return ql(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ni = !1,
  fe = !1,
  iv = typeof WeakSet == 'function' ? WeakSet : Set,
  E = null;
function pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function Bo(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var ys = !1;
function av(e, t) {
  if (((Po = Ii), (e = nc()), zl(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            a = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, a.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            u = -1,
            s = 0,
            c = 0,
            m = e,
            v = null;
          t: for (;;) {
            for (
              var h;
              m !== n || (i !== 0 && m.nodeType !== 3) || (l = o + i),
                m !== a || (r !== 0 && m.nodeType !== 3) || (u = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (h = m.firstChild) !== null;

            )
              (v = m), (m = h);
            for (;;) {
              if (m === e) break t;
              if (
                (v === n && ++s === i && (l = o),
                v === a && ++c === r && (u = o),
                (h = m.nextSibling) !== null)
              )
                break;
              (m = v), (v = m.parentNode);
            }
            m = h;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (No = { focusedElem: e, selectionRange: n }, Ii = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (E = e);
    else
      for (; E !== null; ) {
        t = E;
        try {
          var k = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (k !== null) {
                  var w = k.memoizedProps,
                    T = k.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : je(t.type, w),
                      T
                    );
                  d.__advancedJSInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = '')
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          K(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (E = e);
          break;
        }
        E = t.return;
      }
  return (k = ys), (ys = !1), k;
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var a = i.destroy;
        (i.destroy = void 0), a !== void 0 && Bo(t, n, a);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ca(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ho(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function qc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), qc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ye], delete t[kr], delete t[Ao], delete t[Um], delete t[Wm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ed(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ks(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ed(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._advancedJSRootContainer),
          n != null || t.onclick !== null || (t.onclick = ji));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vo(e, t, n), e = e.sibling; e !== null; ) Vo(e, t, n), (e = e.sibling);
}
function Yo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yo(e, t, n), e = e.sibling; e !== null; ) Yo(e, t, n), (e = e.sibling);
}
var ae = null,
  Fe = !1;
function ft(e, t, n) {
  for (n = n.child; n !== null; ) td(e, t, n), (n = n.sibling);
}
function td(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == 'function')
    try {
      Ke.onCommitFiberUnmount(ra, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || pn(n, t);
    case 6:
      var r = ae,
        i = Fe;
      (ae = null),
        ft(e, t, n),
        (ae = r),
        (Fe = i),
        ae !== null &&
          (Fe
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Fe
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8 ? Wa(e.parentNode, n) : e.nodeType === 1 && Wa(e, n),
            mr(e))
          : Wa(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = Fe),
        (ae = n.stateNode.containerInfo),
        (Fe = !0),
        ft(e, t, n),
        (ae = r),
        (Fe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!fe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var a = i,
            o = a.destroy;
          (a = a.tag), o !== void 0 && (a & 2 || a & 4) && Bo(n, t, o), (i = i.next);
        } while (i !== r);
      }
      ft(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (pn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          K(n, t, l);
        }
      ft(e, t, n);
      break;
    case 21:
      ft(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), ft(e, t, n), (fe = r))
        : ft(e, t, n);
      break;
    default:
      ft(e, t, n);
  }
}
function ws(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new iv()),
      t.forEach(function (r) {
        var i = mv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var a = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (Fe = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(y(160));
        td(a, o, i), (ae = null), (Fe = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (s) {
        K(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) nd(t, e), (t = t.sibling);
}
function nd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), He(e), r & 4)) {
        try {
          ir(3, e, e.return), ca(3, e);
        } catch (w) {
          K(e, e.return, w);
        }
        try {
          ir(5, e, e.return);
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 1:
      Me(t, e), He(e), r & 512 && n !== null && pn(n, n.return);
      break;
    case 5:
      if ((Me(t, e), He(e), r & 512 && n !== null && pn(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          fr(i, '');
        } catch (w) {
          K(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var a = e.memoizedProps,
          o = n !== null ? n.memoizedProps : a,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === 'input' && a.type === 'radio' && a.name != null && Ef(i, a), ho(l, o);
            var s = ho(l, a);
            for (o = 0; o < u.length; o += 2) {
              var c = u[o],
                m = u[o + 1];
              c === 'style'
                ? Of(i, m)
                : c === 'dangerouslySetInnerHTML'
                ? Pf(i, m)
                : c === 'children'
                ? fr(i, m)
                : yl(i, c, m, s);
            }
            switch (l) {
              case 'input':
                fo(i, a);
                break;
              case 'textarea':
                Cf(i, a);
                break;
              case 'select':
                var v = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!a.multiple;
                var h = a.value;
                h != null
                  ? yn(i, !!a.multiple, h, !1)
                  : v !== !!a.multiple &&
                    (a.defaultValue != null
                      ? yn(i, !!a.multiple, a.defaultValue, !0)
                      : yn(i, !!a.multiple, a.multiple ? [] : '', !1));
            }
            i[kr] = a;
          } catch (w) {
            K(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Me(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (i = e.stateNode), (a = e.memoizedProps);
        try {
          i.nodeValue = a;
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((Me(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          mr(t.containerInfo);
        } catch (w) {
          K(e, e.return, w);
        }
      break;
    case 4:
      Me(t, e), He(e);
      break;
    case 13:
      Me(t, e),
        He(e),
        (i = e.child),
        i.flags & 8192 &&
          ((a = i.memoizedState !== null),
          (i.stateNode.isHidden = a),
          !a ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Zl = Z())),
        r & 4 && ws(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (s = fe) || c), Me(t, e), (fe = s)) : Me(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !c && e.mode & 1)
        )
          for (E = e, c = e.child; c !== null; ) {
            for (m = E = c; E !== null; ) {
              switch (((v = E), (h = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, v, v.return);
                  break;
                case 1:
                  pn(v, v.return);
                  var k = v.stateNode;
                  if (typeof k.componentWillUnmount == 'function') {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (k.props = t.memoizedProps),
                        (k.state = t.memoizedState),
                        k.componentWillUnmount();
                    } catch (w) {
                      K(r, n, w);
                    }
                  }
                  break;
                case 5:
                  pn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    xs(m);
                    continue;
                  }
              }
              h !== null ? ((h.return = v), (E = h)) : xs(m);
            }
            c = c.sibling;
          }
        e: for (c = null, m = e; ; ) {
          if (m.tag === 5) {
            if (c === null) {
              c = m;
              try {
                (i = m.stateNode),
                  s
                    ? ((a = i.style),
                      typeof a.setProperty == 'function'
                        ? a.setProperty('display', 'none', 'important')
                        : (a.display = 'none'))
                    : ((l = m.stateNode),
                      (u = m.memoizedProps.style),
                      (o = u != null && u.hasOwnProperty('display') ? u.display : null),
                      (l.style.display = Nf('display', o)));
              } catch (w) {
                K(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (c === null)
              try {
                m.stateNode.nodeValue = s ? '' : m.memoizedProps;
              } catch (w) {
                K(e, e.return, w);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) || m.memoizedState === null || m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            c === m && (c = null), (m = m.return);
          }
          c === m && (c = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), He(e), r & 4 && ws(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ed(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (fr(i, ''), (r.flags &= -33));
          var a = ks(e);
          Yo(e, a, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = ks(e);
          Vo(e, l, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      K(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ov(e, t, n) {
  (E = e), rd(e);
}
function rd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var i = E,
      a = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ni;
      if (!o) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || fe;
        l = ni;
        var s = fe;
        if (((ni = o), (fe = u) && !s))
          for (E = i; E !== null; )
            (o = E),
              (u = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Es(i)
                : u !== null
                ? ((u.return = o), (E = u))
                : Es(i);
        for (; a !== null; ) (E = a), rd(a), (a = a.sibling);
        (E = i), (ni = l), (fe = s);
      }
      Ss(e);
    } else i.subtreeFlags & 8772 && a !== null ? ((a.return = i), (E = a)) : Ss(e);
  }
}
function Ss(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || ca(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : je(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__advancedJSInternalSnapshotBeforeUpdate
                  );
                }
              var a = t.updateQueue;
              a !== null && is(t, a, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                is(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var c = s.memoizedState;
                  if (c !== null) {
                    var m = c.dehydrated;
                    m !== null && mr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        fe || (t.flags & 512 && Ho(t));
      } catch (v) {
        K(t, t.return, v);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function xs(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (E = n);
      break;
    }
    E = t.return;
  }
}
function Es(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ca(4, t);
          } catch (u) {
            K(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              K(t, i, u);
            }
          }
          var a = t.return;
          try {
            Ho(t);
          } catch (u) {
            K(t, a, u);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ho(t);
          } catch (u) {
            K(t, o, u);
          }
      }
    } catch (u) {
      K(t, t.return, u);
    }
    if (t === e) {
      E = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (E = l);
      break;
    }
    E = t.return;
  }
}
var lv = Math.ceil,
  Qi = ut.advancedJSCurrentDispatcher,
  Xl = ut.advancedJSCurrentOwner,
  ze = ut.advancedJSCurrentBatchConfig,
  M = 0,
  ie = null,
  J = null,
  oe = 0,
  Se = 0,
  mn = It(0),
  ee = 0,
  _r = null,
  Xt = 0,
  da = 0,
  Gl = 0,
  ar = null,
  he = null,
  Zl = 0,
  zn = 1 / 0,
  Ge = null,
  Ki = !1,
  Qo = null,
  Ct = null,
  ri = !1,
  gt = null,
  Xi = 0,
  or = 0,
  Ko = null,
  Ei = -1,
  Ci = 0;
function pe() {
  return M & 6 ? Z() : Ei !== -1 ? Ei : (Ei = Z());
}
function _t(e) {
  return e.mode & 1
    ? M & 2 && oe !== 0
      ? oe & -oe
      : Hm.transition !== null
      ? (Ci === 0 && (Ci = $f()), Ci)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Qf(e.type))),
        e)
    : 1;
}
function We(e, t, n, r) {
  if (50 < or) throw ((or = 0), (Ko = null), Error(y(185)));
  Lr(e, n, r),
    (!(M & 2) || e !== ie) &&
      (e === ie && (!(M & 2) && (da |= n), ee === 4 && vt(e, oe)),
      we(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((zn = Z() + 500), ua && Rt()));
}
function we(e, t) {
  var n = e.callbackNode;
  Hp(e, t);
  var r = Li(e, e === ie ? oe : 0);
  if (r === 0) n !== null && Lu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lu(n), t === 1))
      e.tag === 0 ? Bm(Cs.bind(null, e)) : dc(Cs.bind(null, e)),
        bm(function () {
          !(M & 6) && Rt();
        }),
        (n = null);
    else {
      switch (Uf(r)) {
        case 1:
          n = El;
          break;
        case 4:
          n = Df;
          break;
        case 16:
          n = zi;
          break;
        case 536870912:
          n = bf;
          break;
        default:
          n = zi;
      }
      n = cd(n, id.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function id(e, t) {
  if (((Ei = -1), (Ci = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (En() && e.callbackNode !== n) return null;
  var r = Li(e, e === ie ? oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Gi(e, r);
  else {
    t = r;
    var i = M;
    M |= 2;
    var a = od();
    (ie !== e || oe !== t) && ((Ge = null), (zn = Z() + 500), Ht(e, t));
    do
      try {
        fv();
        break;
      } catch (l) {
        ad(e, l);
      }
    while (!0);
    jl(),
      (Qi.current = a),
      (M = i),
      J !== null ? (t = 0) : ((ie = null), (oe = 0), (t = ee));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = So(e)), i !== 0 && ((r = i), (t = Xo(e, i)))), t === 1))
      throw ((n = _r), Ht(e, 0), vt(e, r), we(e, Z()), n);
    if (t === 6) vt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !uv(i) &&
          ((t = Gi(e, r)),
          t === 2 && ((a = So(e)), a !== 0 && ((r = a), (t = Xo(e, a)))),
          t === 1))
      )
        throw ((n = _r), Ht(e, 0), vt(e, r), we(e, Z()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Dt(e, he, Ge);
          break;
        case 3:
          if ((vt(e, r), (r & 130023424) === r && ((t = Zl + 500 - Z()), 10 < t))) {
            if (Li(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              pe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = To(Dt.bind(null, e, he, Ge), t);
            break;
          }
          Dt(e, he, Ge);
          break;
        case 4:
          if ((vt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ue(r);
            (a = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~a);
          }
          if (
            ((r = i),
            (r = Z() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * lv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = To(Dt.bind(null, e, he, Ge), r);
            break;
          }
          Dt(e, he, Ge);
          break;
        case 5:
          Dt(e, he, Ge);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return we(e, Z()), e.callbackNode === n ? id.bind(null, e) : null;
}
function Xo(e, t) {
  var n = ar;
  return (
    e.current.memoizedState.isDehydrated && (Ht(e, t).flags |= 256),
    (e = Gi(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && Go(t)),
    e
  );
}
function Go(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function uv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Be(a(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function vt(e, t) {
  for (
    t &= ~Gl, t &= ~da, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ue(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Cs(e) {
  if (M & 6) throw Error(y(327));
  En();
  var t = Li(e, 0);
  if (!(t & 1)) return we(e, Z()), null;
  var n = Gi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = So(e);
    r !== 0 && ((t = r), (n = Xo(e, r)));
  }
  if (n === 1) throw ((n = _r), Ht(e, 0), vt(e, t), we(e, Z()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dt(e, he, Ge),
    we(e, Z()),
    null
  );
}
function Jl(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((zn = Z() + 500), ua && Rt());
  }
}
function Gt(e) {
  gt !== null && gt.tag === 0 && !(M & 6) && En();
  var t = M;
  M |= 1;
  var n = ze.transition,
    r = D;
  try {
    if (((ze.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (ze.transition = n), (M = t), !(M & 6) && Rt();
  }
}
function ql() {
  (Se = mn.current), W(mn);
}
function Ht(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Dm(n)), J !== null))
    for (n = J.return; n !== null; ) {
      var r = n;
      switch ((Il(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Fi();
          break;
        case 3:
          Tn(), W(ye), W(ce), Wl();
          break;
        case 5:
          Ul(r);
          break;
        case 4:
          Tn();
          break;
        case 13:
          W(V);
          break;
        case 19:
          W(V);
          break;
        case 10:
          Fl(r.type._context);
          break;
        case 22:
        case 23:
          ql();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (J = e = Pt(e.current, null)),
    (oe = Se = t),
    (ee = 0),
    (_r = null),
    (Gl = da = Xt = 0),
    (he = ar = null),
    $t !== null)
  ) {
    for (t = 0; t < $t.length; t++)
      if (((n = $t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          a = n.pending;
        if (a !== null) {
          var o = a.next;
          (a.next = i), (r.next = o);
        }
        n.pending = r;
      }
    $t = null;
  }
  return e;
}
function ad(e, t) {
  do {
    var n = J;
    try {
      if ((jl(), (wi.current = Yi), Vi)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Vi = !1;
      }
      if (
        ((Kt = 0),
        (re = q = Y = null),
        (rr = !1),
        (xr = 0),
        (Xl.current = null),
        n === null || n.return === null)
      ) {
        (ee = 1), (_r = t), (J = null);
        break;
      }
      e: {
        var a = e,
          o = n.return,
          l = n,
          u = t;
        if (
          ((t = oe),
          (l.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var s = u,
            c = l,
            m = c.tag;
          if (!(c.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = c.alternate;
            v
              ? ((c.updateQueue = v.updateQueue),
                (c.memoizedState = v.memoizedState),
                (c.lanes = v.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = cs(o);
          if (h !== null) {
            (h.flags &= -257),
              ds(h, o, l, a, t),
              h.mode & 1 && fs(a, s, t),
              (t = h),
              (u = s);
            var k = t.updateQueue;
            if (k === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else k.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              fs(a, s, t), eu();
              break e;
            }
            u = Error(y(426));
          }
        } else if (H && l.mode & 1) {
          var T = cs(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), ds(T, o, l, a, t), Rl(An(u, l));
            break e;
          }
        }
        (a = u = An(u, l)),
          ee !== 4 && (ee = 2),
          ar === null ? (ar = [a]) : ar.push(a),
          (a = o);
        do {
          switch (a.tag) {
            case 3:
              (a.flags |= 65536), (t &= -t), (a.lanes |= t);
              var d = Wc(a, u, t);
              rs(a, d);
              break e;
            case 1:
              l = u;
              var f = a.type,
                p = a.stateNode;
              if (
                !(a.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (p !== null &&
                    typeof p.componentDidCatch == 'function' &&
                    (Ct === null || !Ct.has(p))))
              ) {
                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                var g = Bc(a, l, t);
                rs(a, g);
                break e;
              }
          }
          a = a.return;
        } while (a !== null);
      }
      ud(n);
    } catch (S) {
      (t = S), J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function od() {
  var e = Qi.current;
  return (Qi.current = Yi), e === null ? Yi : e;
}
function eu() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4),
    ie === null || (!(Xt & 268435455) && !(da & 268435455)) || vt(ie, oe);
}
function Gi(e, t) {
  var n = M;
  M |= 2;
  var r = od();
  (ie !== e || oe !== t) && ((Ge = null), Ht(e, t));
  do
    try {
      sv();
      break;
    } catch (i) {
      ad(e, i);
    }
  while (!0);
  if ((jl(), (M = n), (Qi.current = r), J !== null)) throw Error(y(261));
  return (ie = null), (oe = 0), ee;
}
function sv() {
  for (; J !== null; ) ld(J);
}
function fv() {
  for (; J !== null && !Mp(); ) ld(J);
}
function ld(e) {
  var t = fd(e.alternate, e, Se);
  (e.memoizedProps = e.pendingProps), t === null ? ud(e) : (J = t), (Xl.current = null);
}
function ud(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rv(n, t)), n !== null)) {
        (n.flags &= 32767), (J = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (J = null);
        return;
      }
    } else if (((n = nv(n, t, Se)), n !== null)) {
      J = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Dt(e, t, n) {
  var r = D,
    i = ze.transition;
  try {
    (ze.transition = null), (D = 1), cv(e, t, n, r);
  } finally {
    (ze.transition = i), (D = r);
  }
  return null;
}
function cv(e, t, n, r) {
  do En();
  while (gt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var a = n.lanes | n.childLanes;
  if (
    (Vp(e, a),
    e === ie && ((J = ie = null), (oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ri ||
      ((ri = !0),
      cd(zi, function () {
        return En(), null;
      })),
    (a = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || a)
  ) {
    (a = ze.transition), (ze.transition = null);
    var o = D;
    D = 1;
    var l = M;
    (M |= 4),
      (Xl.current = null),
      av(e, n),
      nd(n, e),
      zm(No),
      (Ii = !!Po),
      (No = Po = null),
      (e.current = n),
      ov(n),
      jp(),
      (M = l),
      (D = o),
      (ze.transition = a);
  } else e.current = n;
  if (
    (ri && ((ri = !1), (gt = e), (Xi = i)),
    (a = e.pendingLanes),
    a === 0 && (Ct = null),
    bp(n.stateNode),
    we(e, Z()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ki) throw ((Ki = !1), (e = Qo), (Qo = null), e);
  return (
    Xi & 1 && e.tag !== 0 && En(),
    (a = e.pendingLanes),
    a & 1 ? (e === Ko ? or++ : ((or = 0), (Ko = e))) : (or = 0),
    Rt(),
    null
  );
}
function En() {
  if (gt !== null) {
    var e = Uf(Xi),
      t = ze.transition,
      n = D;
    try {
      if (((ze.transition = null), (D = 16 > e ? 16 : e), gt === null)) var r = !1;
      else {
        if (((e = gt), (gt = null), (Xi = 0), M & 6)) throw Error(y(331));
        var i = M;
        for (M |= 4, E = e.current; E !== null; ) {
          var a = E,
            o = a.child;
          if (E.flags & 16) {
            var l = a.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var s = l[u];
                for (E = s; E !== null; ) {
                  var c = E;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, c, a);
                  }
                  var m = c.child;
                  if (m !== null) (m.return = c), (E = m);
                  else
                    for (; E !== null; ) {
                      c = E;
                      var v = c.sibling,
                        h = c.return;
                      if ((qc(c), c === s)) {
                        E = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = h), (E = v);
                        break;
                      }
                      E = h;
                    }
                }
              }
              var k = a.alternate;
              if (k !== null) {
                var w = k.child;
                if (w !== null) {
                  k.child = null;
                  do {
                    var T = w.sibling;
                    (w.sibling = null), (w = T);
                  } while (w !== null);
                }
              }
              E = a;
            }
          }
          if (a.subtreeFlags & 2064 && o !== null) (o.return = a), (E = o);
          else
            e: for (; E !== null; ) {
              if (((a = E), a.flags & 2048))
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ir(9, a, a.return);
                }
              var d = a.sibling;
              if (d !== null) {
                (d.return = a.return), (E = d);
                break e;
              }
              E = a.return;
            }
        }
        var f = e.current;
        for (E = f; E !== null; ) {
          o = E;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (E = p);
          else
            e: for (o = f; E !== null; ) {
              if (((l = E), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ca(9, l);
                  }
                } catch (S) {
                  K(l, l.return, S);
                }
              if (l === o) {
                E = null;
                break e;
              }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (E = g);
                break e;
              }
              E = l.return;
            }
        }
        if (((M = i), Rt(), Ke && typeof Ke.onPostCommitFiberRoot == 'function'))
          try {
            Ke.onPostCommitFiberRoot(ra, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (ze.transition = t);
    }
  }
  return !1;
}
function _s(e, t, n) {
  (t = An(n, t)),
    (t = Wc(e, t, 1)),
    (e = Et(e, t, 1)),
    (t = pe()),
    e !== null && (Lr(e, 1, t), we(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) _s(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _s(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (Ct === null || !Ct.has(r)))
        ) {
          (e = An(n, e)),
            (e = Bc(t, e, 1)),
            (t = Et(t, e, 1)),
            (e = pe()),
            t !== null && (Lr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function dv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (oe & n) === n &&
      (ee === 4 || (ee === 3 && (oe & 130023424) === oe && 500 > Z() - Zl)
        ? Ht(e, 0)
        : (Gl |= n)),
    we(e, t);
}
function sd(e, t) {
  t === 0 &&
    (e.mode & 1 ? ((t = Qr), (Qr <<= 1), !(Qr & 130023424) && (Qr = 4194304)) : (t = 1));
  var n = pe();
  (e = rt(e, t)), e !== null && (Lr(e, t, n), we(e, n));
}
function pv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), sd(e, n);
}
function mv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), sd(e, n);
}
var fd;
fd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), tv(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), H && t.flags & 1048576 && pc(t, $i, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      xi(e, t), (e = t.pendingProps);
      var i = Pn(t, ce.current);
      xn(t, n), (i = Hl(null, t, r, e, i, n));
      var a = Vl();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((a = !0), Di(t)) : (a = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            bl(t),
            (i.updater = sa),
            (t.stateNode = i),
            (i._advancedJSInternals = t),
            jo(t, r, e, n),
            (t = bo(null, t, r, !0, a, n)))
          : ((t.tag = 0), H && a && Ll(t), de(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (xi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = hv(r)),
          (e = je(r, e)),
          i)
        ) {
          case 0:
            t = Do(null, t, r, e, n);
            break e;
          case 1:
            t = vs(null, t, r, e, n);
            break e;
          case 11:
            t = ps(null, t, r, e, n);
            break e;
          case 14:
            t = ms(null, t, r, je(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        Do(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        vs(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Qc(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (a = t.memoizedState),
          (i = a.element),
          gc(e, t),
          Bi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), a.isDehydrated))
          if (
            ((a = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            (i = An(Error(y(423)), t)), (t = hs(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = An(Error(y(424)), t)), (t = hs(e, t, r, n, i));
            break e;
          } else
            for (
              xe = xt(t.stateNode.containerInfo.firstChild),
                Ee = t,
                H = !0,
                De = null,
                n = Sc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nn(), r === i)) {
            t = it(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xc(t),
        e === null && Io(t),
        (r = t.type),
        (i = t.pendingProps),
        (a = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Oo(r, i) ? (o = null) : a !== null && Oo(r, a) && (t.flags |= 32),
        Yc(e, t),
        de(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Io(t), null;
    case 13:
      return Kc(e, t, n);
    case 4:
      return (
        $l(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = On(t, null, r, n)) : de(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        ps(e, t, r, i, n)
      );
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (a = t.memoizedProps),
          (o = i.value),
          b(Ui, r._currentValue),
          (r._currentValue = o),
          a !== null)
        )
          if (Be(a.value, o)) {
            if (a.children === i.children && !ye.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (a = t.child, a !== null && (a.return = t); a !== null; ) {
              var l = a.dependencies;
              if (l !== null) {
                o = a.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (a.tag === 1) {
                      (u = et(-1, n & -n)), (u.tag = 2);
                      var s = a.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var c = s.pending;
                        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
                          (s.pending = u);
                      }
                    }
                    (a.lanes |= n),
                      (u = a.alternate),
                      u !== null && (u.lanes |= n),
                      Ro(a.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
              else if (a.tag === 18) {
                if (((o = a.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Ro(o, n, t),
                  (o = a.sibling);
              } else o = a.child;
              if (o !== null) o.return = a;
              else
                for (o = a; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((a = o.sibling), a !== null)) {
                    (a.return = o.return), (o = a);
                    break;
                  }
                  o = o.return;
                }
              a = o;
            }
        de(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        xn(t, n),
        (i = Le(i)),
        (r = r(i)),
        (t.flags |= 1),
        de(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type), (i = je(r, t.pendingProps)), (i = je(r.type, i)), ms(e, t, r, i, n)
      );
    case 15:
      return Hc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : je(r, i)),
        xi(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), Di(t)) : (e = !1),
        xn(t, n),
        kc(t, r, i),
        jo(t, r, i, n),
        bo(null, t, r, !0, e, n)
      );
    case 19:
      return Xc(e, t, n);
    case 22:
      return Vc(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function cd(e, t) {
  return Ff(e, t);
}
function vv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ae(e, t, n, r) {
  return new vv(e, t, n, r);
}
function tu(e) {
  return (e = e.prototype), !(!e || !e.isadvancedJSComponent);
}
function hv(e) {
  if (typeof e == 'function') return tu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wl)) return 11;
    if (e === Sl) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ae(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function _i(e, t, n, r, i, a) {
  var o = 2;
  if (((r = e), typeof e == 'function')) tu(e) && (o = 1);
  else if (typeof e == 'string') o = 5;
  else
    e: switch (e) {
      case rn:
        return Vt(n.children, i, a, t);
      case kl:
        (o = 8), (i |= 8);
        break;
      case ao:
        return (e = Ae(12, n, t, i | 2)), (e.elementType = ao), (e.lanes = a), e;
      case oo:
        return (e = Ae(13, n, t, i)), (e.elementType = oo), (e.lanes = a), e;
      case lo:
        return (e = Ae(19, n, t, i)), (e.elementType = lo), (e.lanes = a), e;
      case wf:
        return pa(n, i, a, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case yf:
              o = 10;
              break e;
            case kf:
              o = 9;
              break e;
            case wl:
              o = 11;
              break e;
            case Sl:
              o = 14;
              break e;
            case dt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ''));
    }
  return (t = Ae(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = a), t;
}
function Vt(e, t, n, r) {
  return (e = Ae(7, e, r, t)), (e.lanes = n), e;
}
function pa(e, t, n, r) {
  return (
    (e = Ae(22, e, r, t)),
    (e.elementType = wf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ga(e, t, n) {
  return (e = Ae(6, e, null, t)), (e.lanes = n), e;
}
function Za(e, t, n) {
  return (
    (t = Ae(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = za(0)),
    (this.expirationTimes = za(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = za(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function nu(e, t, n, r, i, a, o, l, u) {
  return (
    (e = new gv(e, t, n, l, u)),
    t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
    (a = Ae(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    bl(a),
    e
  );
}
function yv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: nn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function dd(e) {
  if (!e) return Ot;
  e = e._advancedJSInternals;
  e: {
    if (en(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__advancedJSInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return cc(e, n, t);
  }
  return t;
}
function pd(e, t, n, r, i, a, o, l, u) {
  return (
    (e = nu(n, r, !0, e, i, a, o, l, u)),
    (e.context = dd(null)),
    (n = e.current),
    (r = pe()),
    (i = _t(n)),
    (a = et(r, i)),
    (a.callback = t ?? null),
    Et(n, a, i),
    (e.current.lanes = i),
    Lr(e, i, r),
    we(e, r),
    e
  );
}
function ma(e, t, n, r) {
  var i = t.current,
    a = pe(),
    o = _t(i);
  return (
    (n = dd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = et(a, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Et(i, t, o)),
    e !== null && (We(e, i, o, a), ki(e, i, o)),
    o
  );
}
function Zi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ps(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ru(e, t) {
  Ps(e, t), (e = e.alternate) && Ps(e, t);
}
function kv() {
  return null;
}
var md =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function iu(e) {
  this._internalRoot = e;
}
va.prototype.render = iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  ma(e, t, null, null);
};
va.prototype.unmount = iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gt(function () {
      ma(null, e, null, null);
    }),
      (t[nt] = null);
  }
};
function va(e) {
  this._internalRoot = e;
}
va.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mt.length && t !== 0 && t < mt[n].priority; n++);
    mt.splice(n, 0, e), n === 0 && Yf(e);
  }
};
function au(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ha(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' advancedJS-mount-point-unstable '))
  );
}
function Ns() {}
function wv(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var a = r;
      r = function () {
        var s = Zi(o);
        a.call(s);
      };
    }
    var o = pd(t, r, e, 0, null, !1, !1, '', Ns);
    return (
      (e._advancedJSRootContainer = o),
      (e[nt] = o.current),
      gr(e.nodeType === 8 ? e.parentNode : e),
      Gt(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var s = Zi(u);
      l.call(s);
    };
  }
  var u = nu(e, 0, !1, null, null, !1, !1, '', Ns);
  return (
    (e._advancedJSRootContainer = u),
    (e[nt] = u.current),
    gr(e.nodeType === 8 ? e.parentNode : e),
    Gt(function () {
      ma(t, u, n, r);
    }),
    u
  );
}
function ga(e, t, n, r, i) {
  var a = n._advancedJSRootContainer;
  if (a) {
    var o = a;
    if (typeof i == 'function') {
      var l = i;
      i = function () {
        var u = Zi(o);
        l.call(u);
      };
    }
    ma(t, o, e, i);
  } else o = wv(n, t, e, i, r);
  return Zi(o);
}
Wf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xn(t.pendingLanes);
        n !== 0 && (Cl(t, n | 1), we(t, Z()), !(M & 6) && ((zn = Z() + 500), Rt()));
      }
      break;
    case 13:
      Gt(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var i = pe();
          We(r, e, 1, i);
        }
      }),
        ru(e, 1);
  }
};
_l = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = pe();
      We(t, e, 134217728, n);
    }
    ru(e, 134217728);
  }
};
Bf = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = rt(e, t);
    if (n !== null) {
      var r = pe();
      We(n, e, t, r);
    }
    ru(e, t);
  }
};
Hf = function () {
  return D;
};
Vf = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
yo = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((fo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = la(r);
            if (!i) throw Error(y(90));
            xf(r), fo(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Cf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && yn(e, !!n.multiple, t, !1);
  }
};
zf = Jl;
Lf = Gt;
var Sv = { usingClientEntryPoint: !1, Events: [Rr, un, la, Tf, Af, Jl] },
  Yn = {
    findFiberByHostInstance: bt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'advancedJS-dom',
  },
  xv = {
    bundleType: Yn.bundleType,
    version: Yn.version,
    rendererPackageName: Yn.rendererPackageName,
    rendererConfig: Yn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ut.advancedJSCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yn.findFiberByHostInstance || kv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __advancedJS_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ii = __advancedJS_DEVTOOLS_GLOBAL_HOOK__;
  if (!ii.isDisabled && ii.supportsFiber)
    try {
      (ra = ii.inject(xv)), (Ke = ii);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sv;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!au(t)) throw Error(y(200));
  return yv(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!au(e)) throw Error(y(299));
  var n = !1,
    r = '',
    i = md;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = nu(e, 1, !1, null, null, n, !1, r, i)),
    (e[nt] = t.current),
    gr(e.nodeType === 8 ? e.parentNode : e),
    new iu(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._advancedJSInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(y(188))
      : ((e = Object.keys(e).join(',')), Error(y(268, e)));
  return (e = Mf(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Gt(e);
};
_e.hydrate = function (e, t, n) {
  if (!ha(t)) throw Error(y(200));
  return ga(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!au(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    a = '',
    o = md;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = pd(t, null, e, 1, n ?? null, i, !1, a, o)),
    (e[nt] = t.current),
    gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new va(t);
};
_e.render = function (e, t, n) {
  if (!ha(t)) throw Error(y(200));
  return ga(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!ha(e)) throw Error(y(40));
  return e._advancedJSRootContainer
    ? (Gt(function () {
        ga(null, null, e, !1, function () {
          (e._advancedJSRootContainer = null), (e[nt] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Jl;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ha(n)) throw Error(y(200));
  if (e == null || e._advancedJSInternals === void 0) throw Error(y(38));
  return ga(e, t, n, !1, r);
};
_e.version = '18.2.0-next-9e3b772b8-20220608';
function vd() {
  if (
    !(
      typeof __advancedJS_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __advancedJS_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __advancedJS_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd);
    } catch (e) {
      console.error(e);
    }
}
vd(), (pf.exports = _e);
var Ev = pf.exports,
  Os = Ev;
(ro.createRoot = Os.createRoot), (ro.hydrateRoot = Os.hydrateRoot);
var hd = { exports: {} },
  Cv = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  _v = Cv,
  Pv = _v;
function gd() {}
function yd() {}
yd.resetWarningCache = gd;
var Nv = function () {
  function e(r, i, a, o, l, u) {
    if (u !== Pv) {
      var s = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((s.name = 'Invariant Violation'), s);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: yd,
    resetWarningCache: gd,
  };
  return (n.PropTypes = n), n;
};
hd.exports = Nv();
var Ov = hd.exports;
const A = tf(Ov),
  ya = $e.createContext();
function kd({ children: e }) {
  const [t, n] = $e.useState({}),
    [r, i] = $e.useState(!1);
  $e.useEffect(() => {
    const l = JSON.parse(localStorage.getItem('bookmarks'));
    if (l && Object.keys(l).length > 0) n(l);
    else {
      const u = {
        'https://shcoobz.github.io/': {
          name: 'Shcoobz Portfolio',
          url: 'https://shcoobz.github.io/',
        },
      };
      n(u), localStorage.setItem('bookmarks', JSON.stringify(u));
    }
  }, []);
  const a = (l, u) => {
      const s = { ...t, [u]: { name: l, url: u } };
      n(s), localStorage.setItem('bookmarks', JSON.stringify(s));
    },
    o = (l) => {
      const { [l]: u, ...s } = t;
      n(s), localStorage.setItem('bookmarks', JSON.stringify(s));
    };
  return F.jsx(ya.Provider, {
    value: {
      bookmarks: t,
      showModal: r,
      setShowModal: i,
      addBookmark: a,
      deleteBookmark: o,
    },
    children: e,
  });
}
kd.propTypes = { children: A.node.isRequired };
function wd({ isModalOpen: e, setModalOpen: t }) {
  const { addBookmark: n } = $e.useContext(ya),
    r = (i) => {
      i.preventDefault();
      const a = i.target.elements.name.value,
        o = i.target.elements.url.value;
      n(a, o), t(!1);
    };
  return e
    ? F.jsx('div', {
        className: 'modal-container show-modal',
        children: F.jsxs('div', {
          className: 'modal',
          children: [
            F.jsx('i', { className: 'fas fa-times close-icon', onClick: () => t(!1) }),
            F.jsx('div', {
              className: 'modal-header',
              children: F.jsx('h3', { children: 'Add Bookmark' }),
            }),
            F.jsx('div', {
              className: 'modal-content',
              children: F.jsxs('form', {
                onSubmit: r,
                children: [
                  F.jsxs('div', {
                    className: 'form-group',
                    children: [
                      F.jsx('label', {
                        className: 'form-label',
                        children: 'Website Name',
                      }),
                      F.jsx('input', {
                        type: 'text',
                        className: 'form-input',
                        name: 'name',
                      }),
                    ],
                  }),
                  F.jsxs('div', {
                    className: 'form-group',
                    children: [
                      F.jsx('label', {
                        className: 'form-label',
                        children: 'Website URL',
                      }),
                      F.jsx('input', {
                        type: 'text',
                        className: 'form-input',
                        name: 'url',
                      }),
                    ],
                  }),
                  F.jsx('button', { type: 'submit', children: 'Save' }),
                ],
              }),
            }),
          ],
        }),
      })
    : null;
}
wd.propTypes = { isModalOpen: A.bool.isRequired, setModalOpen: A.func.isRequired };
function Ts(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ts(Object(n), !0).forEach(function (r) {
          te(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Ts(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ji(e) {
  '@babel/helpers - typeof';
  return (
    (Ji =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ji(e)
  );
}
function Tv(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function Av(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function zv(e, t, n) {
  return (
    t && Av(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e
  );
}
function te(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function ou(e, t) {
  return Iv(e) || Mv(e, t) || Sd(e, t) || Fv();
}
function jr(e) {
  return Lv(e) || Rv(e) || Sd(e) || jv();
}
function Lv(e) {
  if (Array.isArray(e)) return Zo(e);
}
function Iv(e) {
  if (Array.isArray(e)) return e;
}
function Rv(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function Mv(e, t) {
  var n =
    e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      i = !0,
      a = !1,
      o,
      l;
    try {
      for (
        n = n.call(e);
        !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        i = !0
      );
    } catch (u) {
      (a = !0), (l = u);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a) throw l;
      }
    }
    return r;
  }
}
function Sd(e, t) {
  if (e) {
    if (typeof e == 'string') return Zo(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Zo(e, t);
  }
}
function Zo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function jv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var As = function () {},
  lu = {},
  xd = {},
  Ed = null,
  Cd = { mark: As, measure: As };
try {
  typeof window < 'u' && (lu = window),
    typeof document < 'u' && (xd = document),
    typeof MutationObserver < 'u' && (Ed = MutationObserver),
    typeof performance < 'u' && (Cd = performance);
} catch {}
var Dv = lu.navigator || {},
  zs = Dv.userAgent,
  Ls = zs === void 0 ? '' : zs,
  Tt = lu,
  B = xd,
  Is = Ed,
  ai = Cd;
Tt.document;
var st =
    !!B.documentElement &&
    !!B.head &&
    typeof B.addEventListener == 'function' &&
    typeof B.createElement == 'function',
  _d = ~Ls.indexOf('MSIE') || ~Ls.indexOf('Trident/'),
  oi,
  li,
  ui,
  si,
  fi,
  at = '___FONT_AWESOME___',
  Jo = 16,
  Pd = 'fa',
  Nd = 'svg-inline--fa',
  Zt = 'data-fa-i2svg',
  qo = 'data-fa-pseudo-element',
  bv = 'data-fa-pseudo-element-pending',
  uu = 'data-prefix',
  su = 'data-icon',
  Rs = 'fontawesome-i2svg',
  $v = 'async',
  Uv = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  Od = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  U = 'classic',
  X = 'sharp',
  fu = [U, X];
function Fr(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[U];
    },
  });
}
var Pr = Fr(
    ((oi = {}),
    te(oi, U, {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
      fak: 'kit',
      fakd: 'kit',
      'fa-kit': 'kit',
      'fa-kit-duotone': 'kit',
    }),
    te(oi, X, {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
      fasl: 'light',
      'fa-light': 'light',
      fast: 'thin',
      'fa-thin': 'thin',
    }),
    oi)
  ),
  Nr = Fr(
    ((li = {}),
    te(li, U, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak',
    }),
    te(li, X, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    li)
  ),
  Or = Fr(
    ((ui = {}),
    te(ui, U, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    te(ui, X, {
      fass: 'fa-solid',
      fasr: 'fa-regular',
      fasl: 'fa-light',
      fast: 'fa-thin',
    }),
    ui)
  ),
  Wv = Fr(
    ((si = {}),
    te(si, U, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    te(si, X, {
      'fa-solid': 'fass',
      'fa-regular': 'fasr',
      'fa-light': 'fasl',
      'fa-thin': 'fast',
    }),
    si)
  ),
  Bv = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  Td = 'fa-layers-text',
  Hv =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Vv = Fr(
    ((fi = {}),
    te(fi, U, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
    te(fi, X, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    fi)
  ),
  Ad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Yv = Ad.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Qv = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
  Wt = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  Tr = new Set();
Object.keys(Nr[U]).map(Tr.add.bind(Tr));
Object.keys(Nr[X]).map(Tr.add.bind(Tr));
var Kv = []
    .concat(fu, jr(Tr), [
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      'beat',
      'border',
      'fade',
      'beat-fade',
      'bounce',
      'flip-both',
      'flip-horizontal',
      'flip-vertical',
      'flip',
      'fw',
      'inverse',
      'layers-counter',
      'layers-text',
      'layers',
      'li',
      'pull-left',
      'pull-right',
      'pulse',
      'rotate-180',
      'rotate-270',
      'rotate-90',
      'rotate-by',
      'shake',
      'spin-pulse',
      'spin-reverse',
      'spin',
      'stack-1x',
      'stack-2x',
      'stack',
      'ul',
      Wt.GROUP,
      Wt.SWAP_OPACITY,
      Wt.PRIMARY,
      Wt.SECONDARY,
    ])
    .concat(
      Ad.map(function (e) {
        return ''.concat(e, 'x');
      })
    )
    .concat(
      Yv.map(function (e) {
        return 'w-'.concat(e);
      })
    ),
  lr = Tt.FontAwesomeConfig || {};
function Xv(e) {
  var t = B.querySelector('script[' + e + ']');
  if (t) return t.getAttribute(e);
}
function Gv(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
}
if (B && typeof B.querySelector == 'function') {
  var Zv = [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ];
  Zv.forEach(function (e) {
    var t = ou(e, 2),
      n = t[0],
      r = t[1],
      i = Gv(Xv(n));
    i != null && (lr[r] = i);
  });
}
var zd = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: Pd,
  replacementClass: Nd,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
lr.familyPrefix && (lr.cssPrefix = lr.familyPrefix);
var Ln = x(x({}, zd), lr);
Ln.autoReplaceSvg || (Ln.observeMutations = !1);
var N = {};
Object.keys(zd).forEach(function (e) {
  Object.defineProperty(N, e, {
    enumerable: !0,
    set: function (n) {
      (Ln[e] = n),
        ur.forEach(function (r) {
          return r(N);
        });
    },
    get: function () {
      return Ln[e];
    },
  });
});
Object.defineProperty(N, 'familyPrefix', {
  enumerable: !0,
  set: function (t) {
    (Ln.cssPrefix = t),
      ur.forEach(function (n) {
        return n(N);
      });
  },
  get: function () {
    return Ln.cssPrefix;
  },
});
Tt.FontAwesomeConfig = N;
var ur = [];
function Jv(e) {
  return (
    ur.push(e),
    function () {
      ur.splice(ur.indexOf(e), 1);
    }
  );
}
var ct = Jo,
  Qe = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function qv(e) {
  if (!(!e || !st)) {
    var t = B.createElement('style');
    t.setAttribute('type', 'text/css'), (t.innerHTML = e);
    for (var n = B.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i],
        o = (a.tagName || '').toUpperCase();
      ['STYLE', 'LINK'].indexOf(o) > -1 && (r = a);
    }
    return B.head.insertBefore(t, r), e;
  }
}
var eh = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function Ar() {
  for (var e = 12, t = ''; e-- > 0; ) t += eh[(Math.random() * 62) | 0];
  return t;
}
function jn(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function cu(e) {
  return e.classList
    ? jn(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (t) {
        return t;
      });
}
function Ld(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function th(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(Ld(e[n]), '" ');
    }, '')
    .trim();
}
function ka(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
  }, '');
}
function du(e) {
  return (
    e.size !== Qe.size ||
    e.x !== Qe.x ||
    e.y !== Qe.y ||
    e.rotate !== Qe.rotate ||
    e.flipX ||
    e.flipY
  );
}
function nh(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: 'translate('.concat(n / 2, ' 256)') },
    a = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
    o = 'scale('
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
    l = 'rotate('.concat(t.rotate, ' 0 0)'),
    u = { transform: ''.concat(a, ' ').concat(o, ' ').concat(l) },
    s = { transform: 'translate('.concat((r / 2) * -1, ' -256)') };
  return { outer: i, inner: u, path: s };
}
function rh(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Jo : n,
    i = e.height,
    a = i === void 0 ? Jo : i,
    o = e.startCentered,
    l = o === void 0 ? !1 : o,
    u = '';
  return (
    l && _d
      ? (u += 'translate('
          .concat(t.x / ct - r / 2, 'em, ')
          .concat(t.y / ct - a / 2, 'em) '))
      : l
      ? (u += 'translate(calc(-50% + '
          .concat(t.x / ct, 'em), calc(-50% + ')
          .concat(t.y / ct, 'em)) '))
      : (u += 'translate('.concat(t.x / ct, 'em, ').concat(t.y / ct, 'em) ')),
    (u += 'scale('
      .concat((t.size / ct) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / ct) * (t.flipY ? -1 : 1), ') ')),
    (u += 'rotate('.concat(t.rotate, 'deg) ')),
    u
  );
}
var ih = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Id() {
  var e = Pd,
    t = Nd,
    n = N.cssPrefix,
    r = N.replacementClass,
    i = ih;
  if (n !== e || r !== t) {
    var a = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      l = new RegExp('\\.'.concat(t), 'g');
    i = i
      .replace(a, '.'.concat(n, '-'))
      .replace(o, '--'.concat(n, '-'))
      .replace(l, '.'.concat(r));
  }
  return i;
}
var Ms = !1;
function Ja() {
  N.autoAddCss && !Ms && (qv(Id()), (Ms = !0));
}
var ah = {
    mixout: function () {
      return { dom: { css: Id, insertCss: Ja } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Ja();
        },
        beforeI2svg: function () {
          Ja();
        },
      };
    },
  },
  ot = Tt || {};
ot[at] || (ot[at] = {});
ot[at].styles || (ot[at].styles = {});
ot[at].hooks || (ot[at].hooks = {});
ot[at].shims || (ot[at].shims = []);
var be = ot[at],
  Rd = [],
  oh = function e() {
    B.removeEventListener('DOMContentLoaded', e),
      (qi = 1),
      Rd.map(function (t) {
        return t();
      });
  },
  qi = !1;
st &&
  ((qi = (B.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    B.readyState
  )),
  qi || B.addEventListener('DOMContentLoaded', oh));
function lh(e) {
  st && (qi ? setTimeout(e, 0) : Rd.push(e));
}
function Dr(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    a = i === void 0 ? [] : i;
  return typeof e == 'string'
    ? Ld(e)
    : '<'
        .concat(t, ' ')
        .concat(th(r), '>')
        .concat(a.map(Dr).join(''), '</')
        .concat(t, '>');
}
function js(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var qa = function (t, n, r, i) {
  var a = Object.keys(t),
    o = a.length,
    l = n,
    u,
    s,
    c;
  for (r === void 0 ? ((u = 1), (c = t[a[0]])) : ((u = 0), (c = r)); u < o; u++)
    (s = a[u]), (c = l(c, t[s], s, t));
  return c;
};
function uh(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (a & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function el(e) {
  var t = uh(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function sh(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function Fs(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function tl(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    a = Fs(t);
  typeof be.hooks.addPack == 'function' && !i
    ? be.hooks.addPack(e, Fs(t))
    : (be.styles[e] = x(x({}, be.styles[e] || {}), a)),
    e === 'fas' && tl('fa', t);
}
var ci,
  di,
  pi,
  vn = be.styles,
  fh = be.shims,
  ch = ((ci = {}), te(ci, U, Object.values(Or[U])), te(ci, X, Object.values(Or[X])), ci),
  pu = null,
  Md = {},
  jd = {},
  Fd = {},
  Dd = {},
  bd = {},
  dh = ((di = {}), te(di, U, Object.keys(Pr[U])), te(di, X, Object.keys(Pr[X])), di);
function ph(e) {
  return ~Kv.indexOf(e);
}
function mh(e, t) {
  var n = t.split('-'),
    r = n[0],
    i = n.slice(1).join('-');
  return r === e && i !== '' && !ph(i) ? i : null;
}
var $d = function () {
  var t = function (a) {
    return qa(
      vn,
      function (o, l, u) {
        return (o[u] = qa(l, a, {})), o;
      },
      {}
    );
  };
  (Md = t(function (i, a, o) {
    if ((a[3] && (i[a[3]] = o), a[2])) {
      var l = a[2].filter(function (u) {
        return typeof u == 'number';
      });
      l.forEach(function (u) {
        i[u.toString(16)] = o;
      });
    }
    return i;
  })),
    (jd = t(function (i, a, o) {
      if (((i[o] = o), a[2])) {
        var l = a[2].filter(function (u) {
          return typeof u == 'string';
        });
        l.forEach(function (u) {
          i[u] = o;
        });
      }
      return i;
    })),
    (bd = t(function (i, a, o) {
      var l = a[2];
      return (
        (i[o] = o),
        l.forEach(function (u) {
          i[u] = o;
        }),
        i
      );
    }));
  var n = 'far' in vn || N.autoFetchSvg,
    r = qa(
      fh,
      function (i, a) {
        var o = a[0],
          l = a[1],
          u = a[2];
        return (
          l === 'far' && !n && (l = 'fas'),
          typeof o == 'string' && (i.names[o] = { prefix: l, iconName: u }),
          typeof o == 'number' &&
            (i.unicodes[o.toString(16)] = { prefix: l, iconName: u }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (Fd = r.names),
    (Dd = r.unicodes),
    (pu = wa(N.styleDefault, { family: N.familyDefault }));
};
Jv(function (e) {
  pu = wa(e.styleDefault, { family: N.familyDefault });
});
$d();
function mu(e, t) {
  return (Md[e] || {})[t];
}
function vh(e, t) {
  return (jd[e] || {})[t];
}
function Bt(e, t) {
  return (bd[e] || {})[t];
}
function Ud(e) {
  return Fd[e] || { prefix: null, iconName: null };
}
function hh(e) {
  var t = Dd[e],
    n = mu('fas', e);
  return (
    t || (n ? { prefix: 'fas', iconName: n } : null) || { prefix: null, iconName: null }
  );
}
function At() {
  return pu;
}
var vu = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function wa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? U : n,
    i = Pr[r][e],
    a = Nr[r][e] || Nr[r][i],
    o = e in be.styles ? e : null;
  return a || o || null;
}
var Ds = ((pi = {}), te(pi, U, Object.keys(Or[U])), te(pi, X, Object.keys(Or[X])), pi);
function Sa(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    a =
      ((t = {}),
      te(t, U, ''.concat(N.cssPrefix, '-').concat(U)),
      te(t, X, ''.concat(N.cssPrefix, '-').concat(X)),
      t),
    o = null,
    l = U;
  (e.includes(a[U]) ||
    e.some(function (s) {
      return Ds[U].includes(s);
    })) &&
    (l = U),
    (e.includes(a[X]) ||
      e.some(function (s) {
        return Ds[X].includes(s);
      })) &&
      (l = X);
  var u = e.reduce(function (s, c) {
    var m = mh(N.cssPrefix, c);
    if (
      (vn[c]
        ? ((c = ch[l].includes(c) ? Wv[l][c] : c), (o = c), (s.prefix = c))
        : dh[l].indexOf(c) > -1
        ? ((o = c), (s.prefix = wa(c, { family: l })))
        : m
        ? (s.iconName = m)
        : c !== N.replacementClass && c !== a[U] && c !== a[X] && s.rest.push(c),
      !i && s.prefix && s.iconName)
    ) {
      var v = o === 'fa' ? Ud(s.iconName) : {},
        h = Bt(s.prefix, s.iconName);
      v.prefix && (o = null),
        (s.iconName = v.iconName || h || s.iconName),
        (s.prefix = v.prefix || s.prefix),
        s.prefix === 'far' && !vn.far && vn.fas && !N.autoFetchSvg && (s.prefix = 'fas');
    }
    return s;
  }, vu());
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (u.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (u.prefix = 'fad'),
    !u.prefix &&
      l === X &&
      (vn.fass || N.autoFetchSvg) &&
      ((u.prefix = 'fass'), (u.iconName = Bt(u.prefix, u.iconName) || u.iconName)),
    (u.prefix === 'fa' || o === 'fa') && (u.prefix = At() || 'fas'),
    u
  );
}
var gh = (function () {
    function e() {
      Tv(this, e), (this.definitions = {});
    }
    return (
      zv(e, [
        {
          key: 'add',
          value: function () {
            for (var n = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
              i[a] = arguments[a];
            var o = i.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function (l) {
              (n.definitions[l] = x(x({}, n.definitions[l] || {}), o[l])), tl(l, o[l]);
              var u = Or[U][l];
              u && tl(u, o[l]), $d();
            });
          },
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: '_pullDefinitions',
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (a) {
                var o = i[a],
                  l = o.prefix,
                  u = o.iconName,
                  s = o.icon,
                  c = s[2];
                n[l] || (n[l] = {}),
                  c.length > 0 &&
                    c.forEach(function (m) {
                      typeof m == 'string' && (n[l][m] = s);
                    }),
                  (n[l][u] = s);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  bs = [],
  hn = {},
  Cn = {},
  yh = Object.keys(Cn);
function kh(e, t) {
  var n = t.mixoutsTo;
  return (
    (bs = e),
    (hn = {}),
    Object.keys(Cn).forEach(function (r) {
      yh.indexOf(r) === -1 && delete Cn[r];
    }),
    bs.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (o) {
          typeof i[o] == 'function' && (n[o] = i[o]),
            Ji(i[o]) === 'object' &&
              Object.keys(i[o]).forEach(function (l) {
                n[o] || (n[o] = {}), (n[o][l] = i[o][l]);
              });
        }),
        r.hooks)
      ) {
        var a = r.hooks();
        Object.keys(a).forEach(function (o) {
          hn[o] || (hn[o] = []), hn[o].push(a[o]);
        });
      }
      r.provides && r.provides(Cn);
    }),
    n
  );
}
function nl(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  var a = hn[e] || [];
  return (
    a.forEach(function (o) {
      t = o.apply(null, [t].concat(r));
    }),
    t
  );
}
function Jt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = hn[e] || [];
  i.forEach(function (a) {
    a.apply(null, n);
  });
}
function lt() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Cn[e] ? Cn[e].apply(null, t) : void 0;
}
function rl(e) {
  e.prefix === 'fa' && (e.prefix = 'fas');
  var t = e.iconName,
    n = e.prefix || At();
  if (t) return (t = Bt(n, t) || t), js(Wd.definitions, n, t) || js(be.styles, n, t);
}
var Wd = new gh(),
  wh = function () {
    (N.autoReplaceSvg = !1), (N.observeMutations = !1), Jt('noAuto');
  },
  Sh = {
    i2svg: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return st
        ? (Jt('beforeI2svg', t), lt('pseudoElements2svg', t), lt('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      N.autoReplaceSvg === !1 && (N.autoReplaceSvg = !0),
        (N.observeMutations = !0),
        lh(function () {
          Eh({ autoReplaceSvgRoot: n }), Jt('watch', t);
        });
    },
  },
  xh = {
    icon: function (t) {
      if (t === null) return null;
      if (Ji(t) === 'object' && t.prefix && t.iconName)
        return { prefix: t.prefix, iconName: Bt(t.prefix, t.iconName) || t.iconName };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
          r = wa(t[0]);
        return { prefix: r, iconName: Bt(r, n) || n };
      }
      if (
        typeof t == 'string' &&
        (t.indexOf(''.concat(N.cssPrefix, '-')) > -1 || t.match(Bv))
      ) {
        var i = Sa(t.split(' '), { skipLookups: !0 });
        return {
          prefix: i.prefix || At(),
          iconName: Bt(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == 'string') {
        var a = At();
        return { prefix: a, iconName: Bt(a, t) || t };
      }
    },
  },
  Ne = {
    noAuto: wh,
    config: N,
    dom: Sh,
    parse: xh,
    library: Wd,
    findIconDefinition: rl,
    toHtml: Dr,
  },
  Eh = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? B : n;
    (Object.keys(be.styles).length > 0 || N.autoFetchSvg) &&
      st &&
      N.autoReplaceSvg &&
      Ne.dom.i2svg({ node: r });
  };
function xa(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return Dr(r);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (st) {
          var r = B.createElement('div');
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function Ch(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    a = e.styles,
    o = e.transform;
  if (du(o) && n.found && !r.found) {
    var l = n.width,
      u = n.height,
      s = { x: l / u / 2, y: 0.5 };
    i.style = ka(
      x(
        x({}, a),
        {},
        {
          'transform-origin': ''
            .concat(s.x + o.x / 16, 'em ')
            .concat(s.y + o.y / 16, 'em'),
        }
      )
    );
  }
  return [{ tag: 'svg', attributes: i, children: t }];
}
function _h(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    a = e.symbol,
    o = a === !0 ? ''.concat(t, '-').concat(N.cssPrefix, '-').concat(n) : a;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [{ tag: 'symbol', attributes: x(x({}, i), {}, { id: o }), children: r }],
    },
  ];
}
function hu(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    a = e.iconName,
    o = e.transform,
    l = e.symbol,
    u = e.title,
    s = e.maskId,
    c = e.titleId,
    m = e.extra,
    v = e.watchable,
    h = v === void 0 ? !1 : v,
    k = r.found ? r : n,
    w = k.width,
    T = k.height,
    d = i === 'fak',
    f = [N.replacementClass, a ? ''.concat(N.cssPrefix, '-').concat(a) : '']
      .filter(function (j) {
        return m.classes.indexOf(j) === -1;
      })
      .filter(function (j) {
        return j !== '' || !!j;
      })
      .concat(m.classes)
      .join(' '),
    p = {
      children: [],
      attributes: x(
        x({}, m.attributes),
        {},
        {
          'data-prefix': i,
          'data-icon': a,
          class: f,
          role: m.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(w, ' ').concat(T),
        }
      ),
    },
    g =
      d && !~m.classes.indexOf('fa-fw')
        ? { width: ''.concat((w / T) * 16 * 0.0625, 'em') }
        : {};
  h && (p.attributes[Zt] = ''),
    u &&
      (p.children.push({
        tag: 'title',
        attributes: { id: p.attributes['aria-labelledby'] || 'title-'.concat(c || Ar()) },
        children: [u],
      }),
      delete p.attributes.title);
  var S = x(
      x({}, p),
      {},
      {
        prefix: i,
        iconName: a,
        main: n,
        mask: r,
        maskId: s,
        transform: o,
        symbol: l,
        styles: x(x({}, g), m.styles),
      }
    ),
    C =
      r.found && n.found
        ? lt('generateAbstractMask', S) || { children: [], attributes: {} }
        : lt('generateAbstractIcon', S) || { children: [], attributes: {} },
    _ = C.children,
    O = C.attributes;
  return (S.children = _), (S.attributes = O), l ? _h(S) : Ch(S);
}
function $s(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    a = e.title,
    o = e.extra,
    l = e.watchable,
    u = l === void 0 ? !1 : l,
    s = x(
      x(x({}, o.attributes), a ? { title: a } : {}),
      {},
      { class: o.classes.join(' ') }
    );
  u && (s[Zt] = '');
  var c = x({}, o.styles);
  du(i) &&
    ((c.transform = rh({ transform: i, startCentered: !0, width: n, height: r })),
    (c['-webkit-transform'] = c.transform));
  var m = ka(c);
  m.length > 0 && (s.style = m);
  var v = [];
  return (
    v.push({ tag: 'span', attributes: s, children: [t] }),
    a && v.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [a] }),
    v
  );
}
function Ph(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = x(
      x(x({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(' ') }
    ),
    a = ka(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return (
    o.push({ tag: 'span', attributes: i, children: [t] }),
    n && o.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    o
  );
}
var eo = be.styles;
function il(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = ou(r, 1),
    a = i[0],
    o = null;
  return (
    Array.isArray(a)
      ? (o = {
          tag: 'g',
          attributes: { class: ''.concat(N.cssPrefix, '-').concat(Wt.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(N.cssPrefix, '-').concat(Wt.SECONDARY),
                fill: 'currentColor',
                d: a[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(N.cssPrefix, '-').concat(Wt.PRIMARY),
                fill: 'currentColor',
                d: a[1],
              },
            },
          ],
        })
      : (o = { tag: 'path', attributes: { fill: 'currentColor', d: a } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
var Nh = { found: !1, width: 512, height: 512 };
function Oh(e, t) {
  !Od &&
    !N.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function al(e, t) {
  var n = t;
  return (
    t === 'fa' && N.styleDefault !== null && (t = At()),
    new Promise(function (r, i) {
      if ((lt('missingIconAbstract'), n === 'fa')) {
        var a = Ud(e) || {};
        (e = a.iconName || e), (t = a.prefix || t);
      }
      if (e && t && eo[t] && eo[t][e]) {
        var o = eo[t][e];
        return r(il(o));
      }
      Oh(e, t),
        r(
          x(
            x({}, Nh),
            {},
            { icon: N.showMissingIcons && e ? lt('missingIconAbstract') || {} : {} }
          )
        );
    })
  );
}
var Us = function () {},
  ol =
    N.measurePerformance && ai && ai.mark && ai.measure ? ai : { mark: Us, measure: Us },
  Zn = 'FA "6.5.2"',
  Th = function (t) {
    return (
      ol.mark(''.concat(Zn, ' ').concat(t, ' begins')),
      function () {
        return Bd(t);
      }
    );
  },
  Bd = function (t) {
    ol.mark(''.concat(Zn, ' ').concat(t, ' ends')),
      ol.measure(
        ''.concat(Zn, ' ').concat(t),
        ''.concat(Zn, ' ').concat(t, ' begins'),
        ''.concat(Zn, ' ').concat(t, ' ends')
      );
  },
  gu = { begin: Th, end: Bd },
  Pi = function () {};
function Ws(e) {
  var t = e.getAttribute ? e.getAttribute(Zt) : null;
  return typeof t == 'string';
}
function Ah(e) {
  var t = e.getAttribute ? e.getAttribute(uu) : null,
    n = e.getAttribute ? e.getAttribute(su) : null;
  return t && n;
}
function zh(e) {
  return (
    e && e.classList && e.classList.contains && e.classList.contains(N.replacementClass)
  );
}
function Lh() {
  if (N.autoReplaceSvg === !0) return Ni.replace;
  var e = Ni[N.autoReplaceSvg];
  return e || Ni.replace;
}
function Ih(e) {
  return B.createElementNS('http://www.w3.org/2000/svg', e);
}
function Rh(e) {
  return B.createElement(e);
}
function Hd(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === 'svg' ? Ih : Rh) : n;
  if (typeof e == 'string') return B.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return (
    a.forEach(function (o) {
      i.appendChild(Hd(o, { ceFn: r }));
    }),
    i
  );
}
function Mh(e) {
  var t = ' '.concat(e.outerHTML, ' ');
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t;
}
var Ni = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(Hd(i), n);
        }),
        n.getAttribute(Zt) === null && N.keepOriginalSource)
      ) {
        var r = B.createComment(Mh(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~cu(n).indexOf(N.replacementClass)) return Ni.replace(t);
    var i = new RegExp(''.concat(N.cssPrefix, '-.*'));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var a = r[0].attributes.class.split(' ').reduce(
        function (l, u) {
          return (
            u === N.replacementClass || u.match(i) ? l.toSvg.push(u) : l.toNode.push(u), l
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = a.toSvg.join(' ')),
        a.toNode.length === 0
          ? n.removeAttribute('class')
          : n.setAttribute('class', a.toNode.join(' '));
    }
    var o = r.map(function (l) {
      return Dr(l);
    }).join(`
`);
    n.setAttribute(Zt, ''), (n.innerHTML = o);
  },
};
function Bs(e) {
  e();
}
function Vd(e, t) {
  var n = typeof t == 'function' ? t : Pi;
  if (e.length === 0) n();
  else {
    var r = Bs;
    N.mutateApproach === $v && (r = Tt.requestAnimationFrame || Bs),
      r(function () {
        var i = Lh(),
          a = gu.begin('mutate');
        e.map(i), a(), n();
      });
  }
}
var yu = !1;
function Yd() {
  yu = !0;
}
function ll() {
  yu = !1;
}
var ea = null;
function Hs(e) {
  if (Is && N.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? Pi : t,
      r = e.nodeCallback,
      i = r === void 0 ? Pi : r,
      a = e.pseudoElementsCallback,
      o = a === void 0 ? Pi : a,
      l = e.observeMutationsRoot,
      u = l === void 0 ? B : l;
    (ea = new Is(function (s) {
      if (!yu) {
        var c = At();
        jn(s).forEach(function (m) {
          if (
            (m.type === 'childList' &&
              m.addedNodes.length > 0 &&
              !Ws(m.addedNodes[0]) &&
              (N.searchPseudoElements && o(m.target), n(m.target)),
            m.type === 'attributes' &&
              m.target.parentNode &&
              N.searchPseudoElements &&
              o(m.target.parentNode),
            m.type === 'attributes' && Ws(m.target) && ~Qv.indexOf(m.attributeName))
          )
            if (m.attributeName === 'class' && Ah(m.target)) {
              var v = Sa(cu(m.target)),
                h = v.prefix,
                k = v.iconName;
              m.target.setAttribute(uu, h || c), k && m.target.setAttribute(su, k);
            } else zh(m.target) && i(m.target);
        });
      }
    })),
      st &&
        ea.observe(u, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
  }
}
function jh() {
  ea && ea.disconnect();
}
function Fh(e) {
  var t = e.getAttribute('style'),
    n = [];
  return (
    t &&
      (n = t.split(';').reduce(function (r, i) {
        var a = i.split(':'),
          o = a[0],
          l = a.slice(1);
        return o && l.length > 0 && (r[o] = l.join(':').trim()), r;
      }, {})),
    n
  );
}
function Dh(e) {
  var t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    i = Sa(cu(e));
  return (
    i.prefix || (i.prefix = At()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName = vh(i.prefix, e.innerText) || mu(i.prefix, el(e.innerText))),
      !i.iconName &&
        N.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function bh(e) {
  var t = jn(e.attributes).reduce(function (i, a) {
      return i.name !== 'class' && i.name !== 'style' && (i[a.name] = a.value), i;
    }, {}),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id');
  return (
    N.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''
            .concat(N.replacementClass, '-title-')
            .concat(r || Ar()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  );
}
function $h() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Qe,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Vs(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = Dh(e),
    r = n.iconName,
    i = n.prefix,
    a = n.rest,
    o = bh(e),
    l = nl('parseNodeAttributes', {}, e),
    u = t.styleParser ? Fh(e) : [];
  return x(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: Qe,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: a, styles: u, attributes: o },
    },
    l
  );
}
var Uh = be.styles;
function Qd(e) {
  var t = N.autoReplaceSvg === 'nest' ? Vs(e, { styleParser: !1 }) : Vs(e);
  return ~t.extra.classes.indexOf(Td)
    ? lt('generateLayersText', e, t)
    : lt('generateSvgReplacementMutation', e, t);
}
var zt = new Set();
fu.map(function (e) {
  zt.add('fa-'.concat(e));
});
Object.keys(Pr[U]).map(zt.add.bind(zt));
Object.keys(Pr[X]).map(zt.add.bind(zt));
zt = jr(zt);
function Ys(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!st) return Promise.resolve();
  var n = B.documentElement.classList,
    r = function (m) {
      return n.add(''.concat(Rs, '-').concat(m));
    },
    i = function (m) {
      return n.remove(''.concat(Rs, '-').concat(m));
    },
    a = N.autoFetchSvg
      ? zt
      : fu
          .map(function (c) {
            return 'fa-'.concat(c);
          })
          .concat(Object.keys(Uh));
  a.includes('fa') || a.push('fa');
  var o = ['.'.concat(Td, ':not([').concat(Zt, '])')]
    .concat(
      a.map(function (c) {
        return '.'.concat(c, ':not([').concat(Zt, '])');
      })
    )
    .join(', ');
  if (o.length === 0) return Promise.resolve();
  var l = [];
  try {
    l = jn(e.querySelectorAll(o));
  } catch {}
  if (l.length > 0) r('pending'), i('complete');
  else return Promise.resolve();
  var u = gu.begin('onTree'),
    s = l.reduce(function (c, m) {
      try {
        var v = Qd(m);
        v && c.push(v);
      } catch (h) {
        Od || (h.name === 'MissingIcon' && console.error(h));
      }
      return c;
    }, []);
  return new Promise(function (c, m) {
    Promise.all(s)
      .then(function (v) {
        Vd(v, function () {
          r('active'),
            r('complete'),
            i('pending'),
            typeof t == 'function' && t(),
            u(),
            c();
        });
      })
      .catch(function (v) {
        u(), m(v);
      });
  });
}
function Wh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Qd(e).then(function (n) {
    n && Vd([n], t);
  });
}
function Bh(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : rl(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : rl(i || {})), e(r, x(x({}, n), {}, { mask: i }))
    );
  };
}
var Hh = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? Qe : r,
      a = n.symbol,
      o = a === void 0 ? !1 : a,
      l = n.mask,
      u = l === void 0 ? null : l,
      s = n.maskId,
      c = s === void 0 ? null : s,
      m = n.title,
      v = m === void 0 ? null : m,
      h = n.titleId,
      k = h === void 0 ? null : h,
      w = n.classes,
      T = w === void 0 ? [] : w,
      d = n.attributes,
      f = d === void 0 ? {} : d,
      p = n.styles,
      g = p === void 0 ? {} : p;
    if (t) {
      var S = t.prefix,
        C = t.iconName,
        _ = t.icon;
      return xa(x({ type: 'icon' }, t), function () {
        return (
          Jt('beforeDOMElementCreation', { iconDefinition: t, params: n }),
          N.autoA11y &&
            (v
              ? (f['aria-labelledby'] = ''
                  .concat(N.replacementClass, '-title-')
                  .concat(k || Ar()))
              : ((f['aria-hidden'] = 'true'), (f.focusable = 'false'))),
          hu({
            icons: {
              main: il(_),
              mask: u ? il(u.icon) : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: S,
            iconName: C,
            transform: x(x({}, Qe), i),
            symbol: o,
            title: v,
            maskId: c,
            titleId: k,
            extra: { attributes: f, styles: g, classes: T },
          })
        );
      });
    }
  },
  Vh = {
    mixout: function () {
      return { icon: Bh(Hh) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Ys), (n.nodeCallback = Wh), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? B : r,
          a = n.callback,
          o = a === void 0 ? function () {} : a;
        return Ys(i, o);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            a = r.title,
            o = r.titleId,
            l = r.prefix,
            u = r.transform,
            s = r.symbol,
            c = r.mask,
            m = r.maskId,
            v = r.extra;
          return new Promise(function (h, k) {
            Promise.all([
              al(i, l),
              c.iconName
                ? al(c.iconName, c.prefix)
                : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} }),
            ])
              .then(function (w) {
                var T = ou(w, 2),
                  d = T[0],
                  f = T[1];
                h([
                  n,
                  hu({
                    icons: { main: d, mask: f },
                    prefix: l,
                    iconName: i,
                    transform: u,
                    symbol: s,
                    maskId: m,
                    title: a,
                    titleId: o,
                    extra: v,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(k);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            a = n.main,
            o = n.transform,
            l = n.styles,
            u = ka(l);
          u.length > 0 && (i.style = u);
          var s;
          return (
            du(o) &&
              (s = lt('generateAbstractTransformGrouping', {
                main: a,
                transform: o,
                containerWidth: a.width,
                iconWidth: a.width,
              })),
            r.push(s || a.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  Yh = {
    mixout: function () {
      return {
        layer: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.classes,
            a = i === void 0 ? [] : i;
          return xa({ type: 'layer' }, function () {
            Jt('beforeDOMElementCreation', { assembler: n, params: r });
            var o = [];
            return (
              n(function (l) {
                Array.isArray(l)
                  ? l.map(function (u) {
                      o = o.concat(u.abstract);
                    })
                  : (o = o.concat(l.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(N.cssPrefix, '-layers')].concat(jr(a)).join(' '),
                  },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  Qh = {
    mixout: function () {
      return {
        counter: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.title,
            a = i === void 0 ? null : i,
            o = r.classes,
            l = o === void 0 ? [] : o,
            u = r.attributes,
            s = u === void 0 ? {} : u,
            c = r.styles,
            m = c === void 0 ? {} : c;
          return xa({ type: 'counter', content: n }, function () {
            return (
              Jt('beforeDOMElementCreation', { content: n, params: r }),
              Ph({
                content: n.toString(),
                title: a,
                extra: {
                  attributes: s,
                  styles: m,
                  classes: [''.concat(N.cssPrefix, '-layers-counter')].concat(jr(l)),
                },
              })
            );
          });
        },
      };
    },
  },
  Kh = {
    mixout: function () {
      return {
        text: function (n) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = r.transform,
            a = i === void 0 ? Qe : i,
            o = r.title,
            l = o === void 0 ? null : o,
            u = r.classes,
            s = u === void 0 ? [] : u,
            c = r.attributes,
            m = c === void 0 ? {} : c,
            v = r.styles,
            h = v === void 0 ? {} : v;
          return xa({ type: 'text', content: n }, function () {
            return (
              Jt('beforeDOMElementCreation', { content: n, params: r }),
              $s({
                content: n,
                transform: x(x({}, Qe), a),
                title: l,
                extra: {
                  attributes: m,
                  styles: h,
                  classes: [''.concat(N.cssPrefix, '-layers-text')].concat(jr(s)),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          a = r.transform,
          o = r.extra,
          l = null,
          u = null;
        if (_d) {
          var s = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (l = c.width / s), (u = c.height / s);
        }
        return (
          N.autoA11y && !i && (o.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            n,
            $s({
              content: n.innerHTML,
              width: l,
              height: u,
              transform: a,
              title: i,
              extra: o,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  Xh = new RegExp('"', 'ug'),
  Qs = [1105920, 1112319];
function Gh(e) {
  var t = e.replace(Xh, ''),
    n = sh(t, 0),
    r = n >= Qs[0] && n <= Qs[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: el(i ? t[0] : t), isSecondary: r || i };
}
function Ks(e, t) {
  var n = ''.concat(bv).concat(t.replace(':', '-'));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var a = jn(e.children),
      o = a.filter(function (_) {
        return _.getAttribute(qo) === t;
      })[0],
      l = Tt.getComputedStyle(e, t),
      u = l.getPropertyValue('font-family').match(Hv),
      s = l.getPropertyValue('font-weight'),
      c = l.getPropertyValue('content');
    if (o && !u) return e.removeChild(o), r();
    if (u && c !== 'none' && c !== '') {
      var m = l.getPropertyValue('content'),
        v = ~['Sharp'].indexOf(u[2]) ? X : U,
        h = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(
          u[2]
        )
          ? Nr[v][u[2].toLowerCase()]
          : Vv[v][s],
        k = Gh(m),
        w = k.value,
        T = k.isSecondary,
        d = u[0].startsWith('FontAwesome'),
        f = mu(h, w),
        p = f;
      if (d) {
        var g = hh(w);
        g.iconName && g.prefix && ((f = g.iconName), (h = g.prefix));
      }
      if (f && !T && (!o || o.getAttribute(uu) !== h || o.getAttribute(su) !== p)) {
        e.setAttribute(n, p), o && e.removeChild(o);
        var S = $h(),
          C = S.extra;
        (C.attributes[qo] = t),
          al(f, h)
            .then(function (_) {
              var O = hu(
                  x(
                    x({}, S),
                    {},
                    {
                      icons: { main: _, mask: vu() },
                      prefix: h,
                      iconName: p,
                      extra: C,
                      watchable: !0,
                    }
                  )
                ),
                j = B.createElementNS('http://www.w3.org/2000/svg', 'svg');
              t === '::before' ? e.insertBefore(j, e.firstChild) : e.appendChild(j),
                (j.outerHTML = O.map(function (I) {
                  return Dr(I);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function Zh(e) {
  return Promise.all([Ks(e, '::before'), Ks(e, '::after')]);
}
function Jh(e) {
  return (
    e.parentNode !== document.head &&
    !~Uv.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(qo) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  );
}
function Xs(e) {
  if (st)
    return new Promise(function (t, n) {
      var r = jn(e.querySelectorAll('*')).filter(Jh).map(Zh),
        i = gu.begin('searchPseudoElements');
      Yd(),
        Promise.all(r)
          .then(function () {
            i(), ll(), t();
          })
          .catch(function () {
            i(), ll(), n();
          });
    });
}
var qh = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = Xs), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? B : r;
        N.searchPseudoElements && Xs(i);
      };
    },
  },
  Gs = !1,
  e0 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Yd(), (Gs = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Hs(nl('mutationObserverCallbacks', {}));
        },
        noAuto: function () {
          jh();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          Gs ? ll() : Hs(nl('mutationObserverCallbacks', { observeMutationsRoot: r }));
        },
      };
    },
  },
  Zs = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(' ')
      .reduce(function (r, i) {
        var a = i.toLowerCase().split('-'),
          o = a[0],
          l = a.slice(1).join('-');
        if (o && l === 'h') return (r.flipX = !0), r;
        if (o && l === 'v') return (r.flipY = !0), r;
        if (((l = parseFloat(l)), isNaN(l))) return r;
        switch (o) {
          case 'grow':
            r.size = r.size + l;
            break;
          case 'shrink':
            r.size = r.size - l;
            break;
          case 'left':
            r.x = r.x - l;
            break;
          case 'right':
            r.x = r.x + l;
            break;
          case 'up':
            r.y = r.y - l;
            break;
          case 'down':
            r.y = r.y + l;
            break;
          case 'rotate':
            r.rotate = r.rotate + l;
            break;
        }
        return r;
      }, n);
  },
  t0 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return Zs(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-transform');
          return i && (n.transform = Zs(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          a = n.containerWidth,
          o = n.iconWidth,
          l = { transform: 'translate('.concat(a / 2, ' 256)') },
          u = 'translate('.concat(i.x * 32, ', ').concat(i.y * 32, ') '),
          s = 'scale('
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ', ')
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ') '),
          c = 'rotate('.concat(i.rotate, ' 0 0)'),
          m = { transform: ''.concat(u, ' ').concat(s, ' ').concat(c) },
          v = { transform: 'translate('.concat((o / 2) * -1, ' -256)') },
          h = { outer: l, inner: m, path: v };
        return {
          tag: 'g',
          attributes: x({}, h.outer),
          children: [
            {
              tag: 'g',
              attributes: x({}, h.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: x(x({}, r.icon.attributes), h.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  to = { x: 0, y: 0, width: '100%', height: '100%' };
function Js(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e;
}
function n0(e) {
  return e.tag === 'g' ? e.children : [e];
}
var r0 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-mask'),
            a = i
              ? Sa(
                  i.split(' ').map(function (o) {
                    return o.trim();
                  })
                )
              : vu();
          return (
            a.prefix || (a.prefix = At()),
            (n.mask = a),
            (n.maskId = r.getAttribute('data-fa-mask-id')),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          a = n.main,
          o = n.mask,
          l = n.maskId,
          u = n.transform,
          s = a.width,
          c = a.icon,
          m = o.width,
          v = o.icon,
          h = nh({ transform: u, containerWidth: m, iconWidth: s }),
          k = { tag: 'rect', attributes: x(x({}, to), {}, { fill: 'white' }) },
          w = c.children ? { children: c.children.map(Js) } : {},
          T = {
            tag: 'g',
            attributes: x({}, h.inner),
            children: [
              Js(x({ tag: c.tag, attributes: x(x({}, c.attributes), h.path) }, w)),
            ],
          },
          d = { tag: 'g', attributes: x({}, h.outer), children: [T] },
          f = 'mask-'.concat(l || Ar()),
          p = 'clip-'.concat(l || Ar()),
          g = {
            tag: 'mask',
            attributes: x(
              x({}, to),
              {},
              { id: f, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }
            ),
            children: [k, d],
          },
          S = {
            tag: 'defs',
            children: [{ tag: 'clipPath', attributes: { id: p }, children: n0(v) }, g],
          };
        return (
          r.push(S, {
            tag: 'rect',
            attributes: x(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(p, ')'),
                mask: 'url(#'.concat(f, ')'),
              },
              to
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  i0 = {
    provides: function (t) {
      var n = !1;
      Tt.matchMedia && (n = Tt.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: 'currentColor' },
            a = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          r.push({
            tag: 'path',
            attributes: x(
              x({}, i),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              }
            ),
          });
          var o = x(x({}, a), {}, { attributeName: 'opacity' }),
            l = {
              tag: 'circle',
              attributes: x(x({}, i), {}, { cx: '256', cy: '364', r: '28' }),
              children: [],
            };
          return (
            n ||
              l.children.push(
                {
                  tag: 'animate',
                  attributes: x(
                    x({}, a),
                    {},
                    { attributeName: 'r', values: '28;14;28;28;14;28;' }
                  ),
                },
                {
                  tag: 'animate',
                  attributes: x(x({}, o), {}, { values: '1;0;1;1;0;1;' }),
                }
              ),
            r.push(l),
            r.push({
              tag: 'path',
              attributes: x(
                x({}, i),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: 'animate',
                      attributes: x(x({}, o), {}, { values: '1;0;0;0;0;1;' }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: 'path',
                attributes: x(
                  x({}, i),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                  }
                ),
                children: [
                  {
                    tag: 'animate',
                    attributes: x(x({}, o), {}, { values: '0;0;1;1;0;0;' }),
                  },
                ],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: r }
          );
        });
    },
  },
  a0 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-symbol'),
            a = i === null ? !1 : i === '' ? !0 : i;
          return (n.symbol = a), n;
        },
      };
    },
  },
  o0 = [ah, Vh, Yh, Qh, Kh, qh, e0, t0, r0, i0, a0];
kh(o0, { mixoutsTo: Ne });
Ne.noAuto;
Ne.config;
Ne.library;
Ne.dom;
var ul = Ne.parse;
Ne.findIconDefinition;
Ne.toHtml;
var l0 = Ne.icon;
Ne.layer;
Ne.text;
Ne.counter;
function qs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qs(Object(n), !0).forEach(function (r) {
          gn(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : qs(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function ta(e) {
  '@babel/helpers - typeof';
  return (
    (ta =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    ta(e)
  );
}
function gn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function u0(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    a;
  for (a = 0; a < r.length; a++) (i = r[a]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function s0(e, t) {
  if (e == null) return {};
  var n = u0(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (r = a[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function sl(e) {
  return f0(e) || c0(e) || d0(e) || p0();
}
function f0(e) {
  if (Array.isArray(e)) return fl(e);
}
function c0(e) {
  if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
    return Array.from(e);
}
function d0(e, t) {
  if (e) {
    if (typeof e == 'string') return fl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fl(e, t);
  }
}
function fl(e, t) {
  t = e.length;
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function p0() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m0(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    a = e.bounce,
    o = e.shake,
    l = e.flash,
    u = e.spin,
    s = e.spinPulse,
    c = e.spinReverse,
    m = e.pulse,
    v = e.fixedWidth,
    h = e.inverse,
    k = e.border,
    w = e.listItem,
    T = e.flip,
    d = e.size,
    f = e.rotation,
    p = e.pull,
    g =
      ((t = {
        'fa-beat': n,
        'fa-fade': r,
        'fa-beat-fade': i,
        'fa-bounce': a,
        'fa-shake': o,
        'fa-flash': l,
        'fa-spin': u,
        'fa-spin-reverse': c,
        'fa-spin-pulse': s,
        'fa-pulse': m,
        'fa-fw': v,
        'fa-inverse': h,
        'fa-border': k,
        'fa-li': w,
        'fa-flip': T === !0,
        'fa-flip-horizontal': T === 'horizontal' || T === 'both',
        'fa-flip-vertical': T === 'vertical' || T === 'both',
      }),
      gn(t, 'fa-'.concat(d), typeof d < 'u' && d !== null),
      gn(t, 'fa-rotate-'.concat(f), typeof f < 'u' && f !== null && f !== 0),
      gn(t, 'fa-pull-'.concat(p), typeof p < 'u' && p !== null),
      gn(t, 'fa-swap-opacity', e.swapOpacity),
      t);
  return Object.keys(g)
    .map(function (S) {
      return g[S] ? S : null;
    })
    .filter(function (S) {
      return S;
    });
}
function v0(e) {
  return (e = e - 0), e === e;
}
function Kd(e) {
  return v0(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : '';
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var h0 = ['style'];
function g0(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function y0(e) {
  return e
    .split(';')
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(':'),
        i = Kd(n.slice(0, r)),
        a = n.slice(r + 1).trim();
      return i.startsWith('webkit') ? (t[g0(i)] = a) : (t[i] = a), t;
    }, {});
}
function Xd(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == 'string') return t;
  var r = (t.children || []).map(function (u) {
      return Xd(e, u);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (u, s) {
        var c = t.attributes[s];
        switch (s) {
          case 'class':
            (u.attrs.className = c), delete t.attributes.class;
            break;
          case 'style':
            u.attrs.style = y0(c);
            break;
          default:
            s.indexOf('aria-') === 0 || s.indexOf('data-') === 0
              ? (u.attrs[s.toLowerCase()] = c)
              : (u.attrs[Kd(s)] = c);
        }
        return u;
      },
      { attrs: {} }
    ),
    a = n.style,
    o = a === void 0 ? {} : a,
    l = s0(n, h0);
  return (
    (i.attrs.style = yt(yt({}, i.attrs.style), o)),
    e.apply(void 0, [t.tag, yt(yt({}, i.attrs), l)].concat(sl(r)))
  );
}
var Gd = !1;
try {
  Gd = !0;
} catch {}
function k0() {
  if (!Gd && console && typeof console.error == 'function') {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ef(e) {
  if (e && ta(e) === 'object' && e.prefix && e.iconName && e.icon) return e;
  if (ul.icon) return ul.icon(e);
  if (e === null) return null;
  if (e && ta(e) === 'object' && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2) return { prefix: e[0], iconName: e[1] };
  if (typeof e == 'string') return { prefix: 'fas', iconName: e };
}
function no(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? gn({}, e, t)
    : {};
}
var br = vl.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    a = e.className,
    o = e.title,
    l = e.titleId,
    u = e.maskId,
    s = ef(n),
    c = no('classes', [].concat(sl(m0(e)), sl(a.split(' ')))),
    m = no(
      'transform',
      typeof e.transform == 'string' ? ul.transform(e.transform) : e.transform
    ),
    v = no('mask', ef(r)),
    h = l0(
      s,
      yt(yt(yt(yt({}, c), m), v), {}, { symbol: i, title: o, titleId: l, maskId: u })
    );
  if (!h) return k0('Could not find icon', s), null;
  var k = h.abstract,
    w = { ref: t };
  return (
    Object.keys(e).forEach(function (T) {
      br.defaultProps.hasOwnProperty(T) || (w[T] = e[T]);
    }),
    w0(k[0], w)
  );
});
br.displayName = 'FontAwesomeIcon';
br.propTypes = {
  beat: A.bool,
  border: A.bool,
  beatFade: A.bool,
  bounce: A.bool,
  className: A.string,
  fade: A.bool,
  flash: A.bool,
  mask: A.oneOfType([A.object, A.array, A.string]),
  maskId: A.string,
  fixedWidth: A.bool,
  inverse: A.bool,
  flip: A.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: A.oneOfType([A.object, A.array, A.string]),
  listItem: A.bool,
  pull: A.oneOf(['right', 'left']),
  pulse: A.bool,
  rotation: A.oneOf([0, 90, 180, 270]),
  shake: A.bool,
  size: A.oneOf([
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
  spin: A.bool,
  spinPulse: A.bool,
  spinReverse: A.bool,
  symbol: A.oneOfType([A.bool, A.string]),
  title: A.string,
  titleId: A.string,
  transform: A.oneOfType([A.string, A.object]),
  swapOpacity: A.bool,
};
br.defaultProps = {
  border: !1,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var w0 = Xd.bind(null, vl.createElement),
  S0 = {
    prefix: 'fas',
    iconName: 'xmark',
    icon: [
      384,
      512,
      [128473, 10005, 10006, 10060, 215, 'close', 'multiply', 'remove', 'times'],
      'f00d',
      'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z',
    ],
  },
  x0 = S0;
function Zd({ url: e, name: t }) {
  const { deleteBookmark: n } = $e.useContext(ya);
  return F.jsxs('div', {
    className: 'item',
    children: [
      F.jsxs('div', {
        className: 'name',
        children: [
          F.jsx('img', {
            src: `https://s2.googleusercontent.com/s2/favicons?domain=${e}`,
            alt: 'Favicon',
          }),
          F.jsx('a', {
            href: e,
            target: '_blank',
            rel: 'noopener noreferrer',
            children: t,
          }),
        ],
      }),
      F.jsx(br, { icon: x0, className: 'close-icon', onClick: () => n(e) }),
    ],
  });
}
Zd.propTypes = { url: A.string.isRequired, name: A.string.isRequired };
function E0() {
  const { bookmarks: e } = $e.useContext(ya);
  return F.jsx('div', {
    className: 'container',
    children: Object.entries(e).map(([t, { name: n }]) =>
      F.jsx(Zd, { url: t, name: n }, t)
    ),
  });
}
function C0() {
  const [e, t] = $e.useState(!1);
  return F.jsx(kd, {
    children: F.jsxs('div', {
      className: 'App',
      children: [
        F.jsx('header', {
          children: F.jsx('h1', { onClick: () => t(!0), children: 'ADD BOOKMARK' }),
        }),
        F.jsx(E0, {}),
        F.jsx(wd, { isModalOpen: e, setModalOpen: t }),
      ],
    }),
  });
}
ro.createRoot(document.getElementById('root')).render(
  F.jsx(vl.StrictMode, { children: F.jsx(C0, {}) })
);

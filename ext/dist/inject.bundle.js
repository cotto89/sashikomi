!function (e) {
  function t(r) {
    if (n[r])return n[r].exports;
    var i = n[r] = { exports: {}, id: r, loaded: !1 };
    return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
  }

  var n = {};
  return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { "default": e }
  }

  function i() {
    var e = window.getSelection(), t = (0, p["default"])(e.getRangeAt(0).endContainer.parentNode), n = document.querySelector(t), r = document.createElement("div"), i = _["default"].uuid();
    r.setAttribute("id", i), n.appendChild(r), c["default"].render(s["default"].createElement(u["default"], {
      url: location.href,
      targetElmPath: t,
      containerElmId: i
    }), document.getElementById(i))
  }

  function a() {
    var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0], t = [];
    e.forEach(function (e) {
      var n = document.querySelector(e.targetElmPath), r = document.createElement("div"), i = _["default"].uuid();
      try {
        r.setAttribute("id", i), n.appendChild(r), c["default"].render(s["default"].createElement(u["default"], {
          id: e.id,
          url: e.url,
          targetElmPath: e.targetElmPath,
          containerElmId: i,
          contentText: e.contentText
        }), document.getElementById(i))
      } catch (a) {
        t.push(e)
      }
    }), t.length && chrome.runtime.sendMessage({ type: "HAS_INSERTION_ERRORS", data: t })
  }

  var o = n(1), s = r(o), l = n(1), c = r(l), d = n(24), u = r(d), m = n(25), p = r(m), g = n(3), _ = r(g), b = n(23), f = r(b);
  n(28), chrome.runtime.onMessage.addListener(function (e) {
    switch (e.type) {
      case"CONTEXT_MENU":
        i();
        break;
      case"TAB_ON_UPDATED":
        a(e.data);
        break;
      default:
        console.log("Error: Unknown request. : ", e)
    }
  }), location.href.match(/chrome-extension:\/\//) && c["default"].render(s["default"].createElement(f["default"], null), document.getElementById("InsertionErrorContainer"))
}, function (e, t) {/*!
	 * react-lite.js v0.0.18
	 * (c) 2016 Jade Gu
	 * Released under the MIT License.
	 */
  "use strict";
  function n(e) {
    var t = this;
    this.instance = e, this.pendingStates = [], this.pendingCallbacks = [], this.isPending = !1, this.bindClear = function () {
      return t.clearCallbacks()
    }, this.nextProps = this.nextContext = null
  }

  function r(e, t) {
    this.$updater = new n(this), this.$cache = { isMounted: !1 }, this.props = e, this.state = {}, this.refs = {}, this.context = t || {}
  }

  function i(e) {
    P(this, e)
  }

  function a(e) {
    this.text = e
  }

  function o(e, t) {
    this.type = e, this.props = t
  }

  function s(e, t) {
    this.type = e, this.props = t
  }

  function l(e, t) {
    this.type = e, this.props = t
  }

  var c = function (e) {
    return function (t) {
      return null != t && Object.prototype.toString.call(t) === "[object " + e + "]"
    }
  }, d = c("Object"), u = c("String"), m = c("Function"), p = c("Boolean"), g = Array.isArray || c("Array"), _ = function (e) {
    return void 0 === e
  }, b = function (e) {
    return e && e.prototype && "forceUpdate" in e.prototype
  }, f = function (e) {
    return m(e) && (!e.prototype || !("forceUpdate" in e.prototype))
  }, h = function () {
  }, I = function (e) {
    return e
  }, C = function (e, t) {
    return function () {
      for (var n = arguments.length, r = Array(n), i = 0; n > i; i++)r[i] = arguments[i];
      return e.apply(this, r), t.apply(this, r)
    }
  }, v = function _t(e, t) {
    for (var n = arguments.length <= 2 || void 0 === arguments[2] ? { index: 0 } : arguments[2], r = 0, i = e.length; i > r; r++) {
      var a = e[r];
      g(a) ? _t(a, t, n) : _(a) || p(a) || (t(a, n.index), n.index += 1)
    }
  }, S = function (e, t) {
    for (var n = 0, r = e.length; r > n; n++)t(e[n], n)
  }, y = function (e, t, n) {
    for (var r = n > 0 ? n : 0, i = e.length; i > r; r++)if (e[r] === t)return r;
    return -1
  }, E = function (e, t) {
    for (var n in e)e.hasOwnProperty(n) && t(e[n], n)
  }, T = function (e, t) {
    for (var n = {}, r = void 0, i = void 0, a = 0, o = e.length; o > a; a++) {
      r = e[a];
      for (i in r)r.hasOwnProperty(i) && !n[i] && (n[i] = !0, t(i))
    }
  }, P = function (e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++)n[r - 1] = arguments[r];
    var i = function (t, n) {
      _(t) || (e[n] = t)
    };
    return S(n, function (e) {
      null != e && E(e, i)
    }), e
  }, x = 0, A = function () {
    return ++x
  }, G = function (e) {
    var t = !0;
    e:for (; t;) {
      var n = e;
      if (t = !1, n && n.length > 0) {
        if (1 === n.length && (n = n[0], g(n))) {
          e = n, t = !0;
          continue e
        }
        return n
      }
    }
  }, D = function (e, t, n) {
    var r = P({}, n, e);
    return t = G(t), _(t) || (r.children = t), r
  }, w = { onDoubleClick: "ondblclick" }, M = function (e) {
    return e = w[e] || e, e.toLowerCase()
  }, N = I, R = function (e) {
    return N = e
  }, O = function (e) {
    return e = N(e), function (t) {
      return t.stopPropagation(), t.nativeEvent = t, e.call(this, t)
    }
  }, L = function (e, t, n) {
    m(n) && (t = M(t), n = O(n), e[t] = n, "onchange" === t && (e.oninput = n))
  }, k = function (e, t) {
    t = M(t), e[t] = null, "onchange" === t && (e.oninput = null)
  }, U = { key: !0, ref: !0, children: !0 }, B = /^on/i, W = function (e) {
    return U[e]
  }, F = function (e) {
    return B.test(e)
  }, q = function (e) {
    return "dangerouslySetInnerHTML" === e
  }, V = function (e) {
    return "style" === e
  }, z = function (e) {
    return "type" === e
  }, H = function (e, t, n) {
    switch (!0) {
      case W(t) || "title" === t && null == n:
        break;
      case F(t):
        L(e, t, n);
        break;
      case V(t):
        Y(e, n);
        break;
      case q(t):
        n && null != n.__html && (e.innerHTML = n.__html);
        break;
      case t in e && !z(t):
        e[t] = n;
        break;
      default:
        e.setAttribute(t, "" + n)
    }
  }, $ = function (e, t) {
    E(t, function (t, n) {
      H(e, n, t)
    })
  }, j = function (e, t) {
    E(t, function (t, n) {
      K(e, n, t)
    })
  }, K = function (e, t, n) {
    switch (!0) {
      case W(t):
        break;
      case F(t):
        k(e, t);
        break;
      case V(t):
        X(e, n);
        break;
      case q(t):
        e.innerHTML = "";
        break;
      case!(t in e) || z(t):
        e.removeAttribute(t);
        break;
      case m(n):
        e[t] = null;
        break;
      case u(n):
        e[t] = "";
        break;
      case p(n):
        e[t] = !1;
        break;
      default:
        try {
          e[t] = void 0, delete e[t]
        } catch (r) {
        }
    }
  }, Q = { value: !0, checked: !0 }, Z = function (e, t, n) {
    return t !== n ? !t && n ? void $(e, n) : !n && t ? void j(e, t) : void T([t, n], function (r) {
      if (!W(r)) {
        var i = n[r], a = Q[r] ? e[r] : t[r];
        if (i !== a) {
          if (_(i))return void K(e, r, a);
          if (V(r))J(e, a, i); else if (q(r)) {
            var o = a && a.__html, s = i && i.__html;
            null != s && s !== o && (e.innerHTML = s)
          } else H(e, r, i)
        }
      }
    }) : void 0
  }, X = function (e, t) {
    if (d(t)) {
      var n = e.style;
      E(t, function (e, t) {
        n[t] = ""
      })
    }
  }, Y = function (e, t) {
    if (d(t)) {
      var n = e.style;
      E(t, function (e, t) {
        ae(n, t, e)
      })
    }
  }, J = function (e, t, n) {
    if (t !== n)if (!n && t)X(e, t); else if (n && !t)Y(e, n); else {
      var r = e.style;
      T([t, n], function (e) {
        var i = n[e], a = t[e];
        i !== a && ae(r, e, i)
      })
    }
  }, ee = {
    animationIterationCount: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
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
    stopOpacity: !0,
    strokeDashoffset: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, te = {}, ne = ["Webkit", "ms", "Moz", "O"], re = function (e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1)
  };
  E(ee, function (e, t) {
    S(ne, function (e) {
      return te[re(e, t)] = !0
    })
  }), E(te, function (e, t) {
    ee[t] = e
  });
  var ie = /^-?\d+(\.\d+)?$/, ae = function (e, t, n) {
    (null == n || p(n)) && (n = ""), !ee[t] && ie.test(n) ? e[t] = n + "px" : e[t] = n
  };
  Object.freeze || (Object.freeze = I);
  var oe = { ELEMENT: 1, COMPONENT: 2, STATELESS_COMPONENT: 3, TEXT: 4 }, se = {
    CREATE: 1,
    REMOVE: 2,
    REPLACE: 3,
    UPDATE: 4
  }, le = "liteid", ce = {
    updaters: [], isPending: !1, emit: function () {
      this.isPending = !1, this.batchUpdate()
    }, add: function (e) {
      this.isPending ? this.updaters.push(e) : e.update()
    }, wrapFn: function (e) {
      var t = this;
      return function () {
        t.isPending = !0;
        for (var n = arguments.length, r = Array(n), i = 0; n > i; i++)r[i] = arguments[i];
        var a = e.apply(this, r);
        return t.emit(), a
      }
    }, batchUpdate: function () {
      var e = this.updaters;
      0 !== e.length && (this.updaters = [], this.isPending = !0, S(e, de), this.emit())
    }
  }, de = function (e) {
    return e.update()
  };
  R(function (e) {
    return ce.wrapFn(e)
  }), n.prototype = {
    constructor: n, emitUpdate: function (e, t) {
      this.nextProps = e, this.nextContext = t, ce.add(this)
    }, update: function () {
      var e = this.instance, t = this.pendingStates, n = this.nextProps, r = this.nextContext;
      (n || t.length > 0) && (n = n || e.props, r = r || e.context, this.nextProps = this.nextContext = null, pe(e, n, this.getState(), r, this.bindClear))
    }, addState: function (e) {
      e && (this.pendingStates.push(e), this.isPending || this.emitUpdate())
    }, replaceState: function (e) {
      var t = this.pendingStates;
      t.pop(), t.push([e])
    }, getState: function () {
      var e = this.instance, t = this.pendingStates, n = e.state, r = e.props, i = function (t) {
        for (var i = !0; i;) {
          var a = t;
          i = !1, g(a) ? (n = null, t = a[0], i = !0) : (m(a) && (a = a.call(e, n, r)), n = P({}, n, a))
        }
      };
      return t.length && (S(t, i), t.length = 0), n
    }, clearCallbacks: function () {
      var e = this.pendingCallbacks, t = this.instance;
      e.length > 0 && (S(e, function (e) {
        return e.call(t)
      }), e.length = 0)
    }, addCallback: function (e) {
      m(e) && this.pendingCallbacks.push(e)
    }
  };
  var ue = h;
  r.prototype = {
    constructor: r,
    getChildContext: ue,
    componentWillUpdate: ue,
    componentDidUpdate: ue,
    componentWillReceiveProps: ue,
    componentWillMount: ue,
    componentDidMount: ue,
    componentWillUnmount: ue,
    shouldComponentUpdate: function (e, t) {
      return !0
    },
    forceUpdate: function (e) {
      var t = this.$updater, n = this.$cache, r = this.props, i = this.state, a = this.context, o = this.vtree, s = this.node;
      if (!t.isPending) {
        var l = n.props || r, c = n.state || i, d = n.context || {};
        n.props = n.state = n.context = null, this.componentWillUpdate(l, c, d), this.props = l, this.state = c, this.context = d, t.isPending = !0;
        var u = ye(this, n.$context);
        o.updateTree(u, s && s.parentNode), xe(), t.isPending = !1, this.vtree = u, this.node = u.node, this.componentDidUpdate(r, i, a), m(e) && e.call(this), t.emitUpdate()
      }
    },
    setState: function (e, t) {
      var n = this.$updater;
      n.addCallback(t), n.addState(e)
    },
    replaceState: function (e, t) {
      var n = this.$updater;
      n.addCallback(t), n.replaceState(e)
    },
    getDOMNode: function () {
      var e = this.vtree.node;
      return e && "NOSCRIPT" === e.tagName ? null : e
    },
    isMounted: function () {
      return this.$cache.isMounted
    }
  };
  var me = function (e, t, n, r) {
    e.state = n, e.props = t, e.context = r || {}
  }, pe = function (e, t, n, r, i) {
    var a = e.shouldComponentUpdate(t, n, r);
    return a === !1 ? void me(e, t, n, r) : (me(e.$cache, t, n, r), void e.forceUpdate(i))
  }, ge = function (e, t) {
    var n = void 0;
    switch (!0) {
      case e === t:
        return null;
      case _(t):
        n = se.REMOVE;
        break;
      case _(e):
        n = se.CREATE;
        break;
      case e.type !== t.type:
        n = se.REPLACE;
        break;
      case null !== t.key:
        n = null === e.key || t.key !== e.key ? se.REPLACE : se.UPDATE;
        break;
      case null !== e.key:
        n = se.REPLACE;
        break;
      default:
        n = se.UPDATE
    }
    return n
  }, _e = h, be = function () {
    return this
  };
  i.prototype = {
    constructor: i, attachRef: function () {
      var e = this.ref, t = this.refs, n = this.vtype;
      if (t && null != e) {
        var r = void 0;
        n === oe.ELEMENT ? (r = this.node, r.getDOMNode = be) : n === oe.COMPONENT && (r = this.component), null != r && (m(e) ? e(r) : t[e] = r)
      }
    }, detachRef: function () {
      var e = this.ref, t = this.refs;
      t && null != e && (m(e) ? e(null) : delete t[e])
    }, updateRef: function (e) {
      if (!this.refs)return void e.attachRef();
      if (!e.refs)return void this.detachRef();
      if (this.refs !== e.refs)return this.detachRef(), void e.attachRef();
      var t = this.ref, n = e.ref;
      null == n ? this.detachRef() : t !== n && (this.detachRef(), e.attachRef())
    }, updateTree: function (e, t) {
      Ae(this, e, t)
    }
  }, a.prototype = new i({
    constructor: a,
    vtype: oe.TEXT,
    attachRef: _e,
    detachRef: _e,
    updateRef: _e,
    update: function (e) {
      var t = this.node, n = this.text;
      return e.text !== n && t.replaceData(0, t.length, e.text), e.node = t, this.node = null, this
    },
    initTree: function (e) {
      this.node = Me(this.text), De(e, this.node)
    },
    destroyTree: function () {
      Ge(this.node), this.node = null
    }
  });
  var fe = function (e) {
    if (ke(e))return e.destroyTree(), !1;
    if (e.vtype === oe.ELEMENT) {
      var t = e.node, n = e.props;
      n.onLoad && k(t, "onLoad"), n.onError && k(t, "onError")
    }
    e.detachRef()
  };
  o.prototype = new i({
    constructor: o, vtype: oe.ELEMENT, eachChildren: function (e) {
      var t = this.props.children, n = this.sorted, r = void 0;
      return n ? void S(t, e) : void(g(t) ? (r = [], v(t, function (t, n) {
        t = Oe(t), e(t, n), r.push(t)
      }), this.props.children = r, this.sorted = !0) : _(t) || (t = this.props.children = Oe(t), e(t, 0)))
    }, initTree: function (e) {
      var t = this.type, n = this.props, r = this.node = Ne(t, n);
      this.eachChildren(function (e) {
        e.initTree(r)
      }), De(e, r), this.attachRef()
    }, destroyTree: function () {
      Re(this, fe), Ge(this.node), this.node = null
    }, update: function (e) {
      var t = this.node, n = this.props, r = _(n.children) ? [] : n.children, i = 0, a = void 0;
      for (g(r) || (r = [r]), Z(t, n, e.props), e.node = t, e.eachChildren(function (e, n) {
        var o = r[n];
        i += 1, o !== e && e.node && (e.destroyTree(), a = y(r, e, n + 1), -1 !== a && r.splice(a, 1)), o ? o.updateTree(e, t) : e.initTree(t)
      }); r.length > i;)r[i].destroyTree(), i += 1;
      this.updateRef(e), this.node = null
    }
  }), s.prototype = new i({
    constructor: s,
    vtype: oe.STATELESS_COMPONENT,
    attachRef: _e,
    detachRef: _e,
    updateRef: _e,
    renderTree: function () {
      var e = this.type, t = this.props, n = this.context, r = e(t, Ce(n, e.contextTypes));
      r && m(r.render) && (r = r.render()), this.vtree = Oe(r), ve(n, this.vtree)
    },
    initTree: function (e) {
      this.renderTree(), this.vtree.initTree(e), this.node = this.vtree.node
    },
    destroyTree: function () {
      this.vtree.destroyTree(), this.node = this.vtree = null
    },
    update: function (e, t) {
      e.renderTree(), this.vtree.updateTree(e.vtree, t), e.node = e.vtree.node, this.node = this.vtree = null
    }
  });
  var he = _e, Ie = function (e) {
    he(e)
  }, Ce = function (e, t) {
    var n = {};
    return d(t) && d(e) ? (E(t, function (t, r) {
      n[r] = e[r]
    }), n) : n
  }, ve = function (e, t) {
    Re(t, function (t) {
      ke(t) && (t.context ? t.context !== e && (t.context = P(t.context, e)) : t.context = e)
    })
  }, Se = function (e) {
    return function (t) {
      t.refs || (t.refs = e)
    }
  }, ye = function (e, t) {
    var n = e.getChildContext();
    n = P({}, t, n), he = Se(e.refs);
    var r = Le(e.render());
    return he = _e, ve(n, r), r
  }, Ee = function () {
    return !1
  }, Te = [], Pe = function (e) {
    return e.didMount()
  }, xe = function () {
    var e = Te;
    0 !== e.length && (Te = [], S(e, Pe))
  };
  l.prototype = new i({
    constructor: l, vtype: oe.COMPONENT, initTree: function (e) {
      var t = this.type, n = this.props, i = this.context, a = Ce(i, t.contextTypes), o = this.component = new t(n, a);
      if (!o.$cache) {
        var s = o.state;
        r.call(o, n, a), o.state = s || o.state
      }
      var l = o.$updater, c = o.$cache;
      c.$context = i, l.isPending = !0, o.props = o.props || n, o.componentWillMount(), me(o, o.props, l.getState(), o.context);
      var d = o.vtree = ye(o, i);
      d.initTree(e), c.isMounted = !0, o.node = this.node = d.node, Te.push(this)
    }, didMount: function () {
      var e = this.component, t = e.$updater;
      e.componentDidMount(), t.isPending = !1, this.attachRef(), t.emitUpdate()
    }, destroyTree: function () {
      var e = this.component;
      e && (e.shouldComponentUpdate = Ee, e.forceUpdate = e.setState = _e, this.detachRef(), e.componentWillUnmount(), e.vtree.destroyTree(), e.$cache.isMounted = !1, this.component = this.node = e.node = e.refs = e.context = null)
    }, update: function (e, t) {
      var n = this.component;
      if (n) {
        var r = e.type, i = e.props, a = e.context, o = n.$updater, s = n.$cache, l = Ce(a, r.contextTypes);
        s.$context = a, o.isPending = !0, n.componentWillReceiveProps(i, l), o.isPending = !1, o.emitUpdate(i, l), e.component = n, e.node = n.node, this.updateRef(e), this.component = this.node = null
      }
    }
  });
  var Ae = function (e, t, n) {
    var r = ge(e, t), i = void 0, a = void 0;
    switch (r) {
      case se.CREATE:
        t.initTree(n);
        break;
      case se.REMOVE:
        e.destroyTree();
        break;
      case se.REPLACE:
        a = e.node, i = Ge, Ge = _e, e.destroyTree(), Ge = i, t.initTree(function (e) {
          we(n, e, a)
        });
        break;
      case se.UPDATE:
        e.update(t, n)
    }
  }, Ge = function (e) {
    e && e.parentNode && e.parentNode.removeChild(e)
  }, De = function (e, t) {
    e && t && (m(e) ? e(t) : e.appendChild(t))
  }, we = function (e, t, n) {
    t && n && (e = e || n.parentNode, e.replaceChild(t, n))
  }, Me = function (e) {
    return document.createTextNode(e)
  }, Ne = function (e, t) {
    var n = document.createElement(e);
    return $(n, t), n
  }, Re = function (e, t) {
    for (var n = [e], r = void 0, i = void 0; n.length;)r = n.shift(), i = t(r), i !== !1 && r && r.props && !_(r.props.children) && (g(r.props.children) ? n.push.apply(n, r.props.children) : n.push(r.props.children))
  }, Oe = function (e) {
    return null === e ? e = new o("noscript", {}) : d(e) || (e = new a(e)), e
  }, Le = function (e) {
    if (_(e))throw new Error("component can not render undefined");
    return Oe(e)
  }, ke = function (e) {
    if (null == e)return !1;
    var t = e.vtype;
    return t === oe.COMPONENT || t === oe.STATELESS_COMPONENT ? !0 : !1
  }, Ue = {}, Be = function (e, t, n) {
    if (!e)throw new Error("cannot render " + e + " to container");
    var r = t[le];
    Ue.hasOwnProperty(r) ? Ue[r].updateTree(e, t) : (t[le] = r = A(), t.innerHTML = "", e.initTree(t)), Ue[r] = e, xe();
    var i = null;
    switch (e.vtype) {
      case oe.ELEMENT:
        i = e.node;
        break;
      case oe.COMPONENT:
        i = e.component
    }
    return m(n) && n.call(i), i
  }, We = function (e) {
    if (!e.nodeName)throw new Error("expect node");
    var t = e[le];
    return Ue.hasOwnProperty(t) ? (Ue[t].destroyTree(), delete Ue[t], !0) : !1
  }, Fe = function (e) {
    if (null == e)return null;
    if (e.nodeName)return e;
    var t = e;
    if (m(t.getDOMNode) && t.node)return t.getDOMNode();
    throw new Error("findDOMNode can not find Node")
  }, qe = function (e, t, n, r) {
    return Be(t, n, r)
  }, Ve = Object.freeze({
    render: Be,
    unmountComponentAtNode: We,
    findDOMNode: Fe,
    unstable_renderSubtreeIntoContainer: qe
  }), ze = function (e) {
    return null != e && !!e.vtype
  }, He = function (e, t) {
    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++)r[i - 2] = arguments[i];
    var a = e.type, o = e.key, s = e.ref;
    t = P({ key: o, ref: s }, e.props, t);
    var l = je.apply(void 0, [a, t].concat(r));
    return l.ref === e.ref && (l.refs = e.refs), l
  }, $e = function (e) {
    var t = function () {
      for (var t = arguments.length, n = Array(t), r = 0; t > r; r++)n[r] = arguments[r];
      return je.apply(void 0, [e].concat(n))
    };
    return t.type = e, t
  }, je = function (e, t) {
    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; n > i; i++)r[i - 2] = arguments[i];
    var a = void 0;
    switch (!0) {
      case u(e):
        a = o;
        break;
      case b(e):
        a = l;
        break;
      case f(e):
        a = s;
        break;
      default:
        throw new Error("React.createElement: unexpect type [ " + e + " ]")
    }
    var c = null, d = null, m = !1;
    null != t && (_(t.key) || (c = "" + t.key, delete t.key), _(t.ref) || (d = t.ref, delete t.ref, m = !0));
    var p = new a(e, D(t, r, e.defaultProps));
    return p.key = c, p.ref = d, m && a !== s && Ie(p), p
  }, Ke = "a|abbr|address|area|article|aside|audio|b|base|bdi|bdo|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|main|map|mark|menu|menuitem|meta|meter|nav|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|u|ul|var|video|wbr|circle|clipPath|defs|ellipse|g|image|line|linearGradient|mask|path|pattern|polygon|polyline|radialGradient|rect|stop|svg|text|tspan", Qe = {};
  S(Ke.split("|"), function (e) {
    Qe[e] = $e(e)
  });
  var Ze = function bt() {
    return bt
  };
  Ze.isRequired = Ze;
  var Xe = {
    array: Ze,
    bool: Ze,
    func: Ze,
    number: Ze,
    object: Ze,
    string: Ze,
    any: Ze,
    arrayOf: Ze,
    element: Ze,
    instanceOf: Ze,
    node: Ze,
    objectOf: Ze,
    oneOf: Ze,
    oneOfType: Ze,
    shape: Ze
  }, Ye = function (e) {
    if (null != e && !g(e))return e;
    throw new Error("expect only one child")
  }, Je = function (e, t, n) {
    return null == e ? e : void(g(e) ? v(e, function (e, r) {
      t.call(n, e, r)
    }) : t.call(n, e, 0))
  }, et = function (e, t, n) {
    if (null == e)return e;
    var r = [], i = {};
    Je(e, function (e, a) {
      var o = {};
      o.child = t.call(n, e, a) || e, o.isEqual = o.child === e;
      var s = o.key = rt(e, a);
      i.hasOwnProperty(s) ? i[s] = i[s] + 1 : i[s] = 0, o.index = i[s], r.push(o)
    });
    var a = [];
    return S(r, function (e) {
      var t = e.child, n = e.key, r = e.index, o = e.isEqual;
      if (null != t && !p(t)) {
        if (!ze(t) || null == n)return void a.push(t);
        0 !== i[n] && (n += ":" + r), o || (n = at(t.key || "") + "/" + n), t = He(t, { key: n }), a.push(t)
      }
    }), a
  }, tt = function ft(e) {
    var ft = 0;
    return Je(e, function () {
      ft++
    }), ft
  }, nt = function (e) {
    return et(e, I) || []
  }, rt = function (e, t) {
    var n = void 0;
    return n = ze(e) && u(e.key) ? ".$" + e.key : "." + t.toString(36)
  }, it = /\/(?!\/)/g, at = function (e) {
    return ("" + e).replace(it, "//")
  }, ot = Object.freeze({ only: Ye, forEach: Je, map: et, count: tt, toArray: nt }), st = function ht(e, t) {
    S(e, function (e) {
      g(e.mixins) && ht(e.mixins, t), t(e)
    })
  }, lt = function (e, t) {
    E(t, function (t, n) {
      if ("getInitialState" === n)return void e.$getInitialStates.push(t);
      var r = e[n];
      m(r) && m(t) ? e[n] = C(r, t) : e[n] = t
    })
  }, ct = function (e, t) {
    d(t.propTypes) && P(e.propTypes, t.propTypes), d(t.contextTypes) && P(e.contextTypes, t.contextTypes), m(t.getDefaultProps) && P(e.defaultProps, t.getDefaultProps()), d(t.statics) && P(e, t.statics)
  }, dt = function (e, t) {
    E(t, function (t, n) {
      m(t) && (e[n] = t.bind(e))
    })
  }, ut = function () {
  };
  ut.prototype = r.prototype;
  var mt = function () {
    var e = this, t = {}, n = this.setState;
    return this.setState = ut, S(this.$getInitialStates, function (n) {
      m(n) && P(t, n.call(e))
    }), this.setState = n, t
  }, pt = function (e) {
    function t(n, i) {
      r.call(this, n, i), this.constructor = t, e.autobind !== !1 && dt(this, t.prototype), this.state = this.getInitialState() || this.state
    }

    if (!m(e.render))throw new Error("createClass: spec.render is not function");
    var n = e.mixins || [], i = n.concat(e);
    e.mixins = null, t.displayName = e.displayName, t.contextTypes = {}, t.propTypes = {}, t.defaultProps = {};
    var a = t.prototype = new ut;
    return a.$getInitialStates = [], st(i, function (e) {
      lt(a, e), ct(t, e)
    }), a.getInitialState = mt, e.mixins = n, t
  }, gt = P({
    version: "0.14.4",
    cloneElement: He,
    isValidElement: ze,
    createElement: je,
    createFactory: $e,
    Component: r,
    createClass: pt,
    Children: ot,
    PropTypes: Xe,
    DOM: Qe
  }, Ve);
  gt.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ve, e.exports = gt
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { "default": e }
  }

  function i(e, t) {
    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var s = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();
  Object.defineProperty(t, "__esModule", { value: !0 });
  var l = n(1), c = r(l), d = function (e) {
    function t() {
      return i(this, t), a(this, Object.getPrototypeOf(t).apply(this, arguments))
    }

    return o(t, e), s(t, [{
      key: "_bind", value: function () {
        for (var e = this, t = arguments.length, n = Array(t), r = 0; t > r; r++)n[r] = arguments[r];
        n.forEach(function (t) {
          return e[t] = e[t].bind(e)
        })
      }
    }]), t
  }(c["default"].Component);
  t["default"] = d
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { "default": e }
  }

  Object.defineProperty(t, "__esModule", { value: !0 });
  var i = n(14), a = r(i), o = n(4), s = r(o);
  t["default"] = {
    pick: a["default"], omit: s["default"], uuid: function l() {
      var e, t, l = "";
      for (e = 0; 32 > e; e++)t = 16 * Math.random() | 0, (8 == e || 12 == e || 16 == e || 20 == e) && (l += "-"), l += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
      return l
    }
  }
}, function (e, t, n) {
  function r(e, t, n, r) {
    var i = -1, a = e.length;
    for (r && a && (n = e[++i]); ++i < a;)n = t(n, e[i], i, e);
    return n
  }

  function i(e) {
    return function (t) {
      return e(t)
    }
  }

  function a(e, t, n, r) {
    var a = -1, o = l, u = !0, p = e.length, g = [], b = t.length;
    if (!p)return g;
    n && (t = d(t, i(n))), r ? (o = c, u = !1) : t.length >= _ && (o = m, u = !1, t = new s(t));
    e:for (; ++a < p;) {
      var f = e[a], h = n ? n(f) : f;
      if (u && h === h) {
        for (var I = b; I--;)if (t[I] === h)continue e;
        g.push(f)
      } else o(t, h, r) || g.push(f)
    }
    return g
  }

  function o(e, t) {
    return e = Object(e), r(t, function (t, n) {
      return n in e && (t[n] = e[n]), t
    }, {})
  }

  var s = n(10), l = n(5), c = n(6), d = n(7), u = n(8), m = n(9), p = n(12), g = n(13), _ = 200, b = g(function (e, t) {
    return null == e ? {} : (t = d(u(t), String), o(e, a(p(e), t)))
  });
  e.exports = b
}, function (e, t) {
  function n(e, t) {
    return !!e.length && r(e, t, 0) > -1
  }

  function r(e, t, n) {
    if (t !== t)return i(e, n);
    for (var r = n - 1, a = e.length; ++r < a;)if (e[r] === t)return r;
    return -1
  }

  function i(e, t, n) {
    for (var r = e.length, i = t + (n ? 0 : -1); n ? i-- : ++i < r;) {
      var a = e[i];
      if (a !== a)return i
    }
    return -1
  }

  e.exports = n
}, function (e, t) {
  function n(e, t, n) {
    for (var r = -1, i = e.length; ++r < i;)if (n(t, e[r]))return !0;
    return !1
  }

  e.exports = n
}, function (e, t) {
  function n(e, t) {
    for (var n = -1, r = e.length, i = Array(r); ++n < r;)i[n] = t(e[n], n, e);
    return i
  }

  e.exports = n
}, function (e, t) {
  (function (t) {
    function n(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r;)e[i + n] = t[n];
      return e
    }

    function r(e, t, i, o) {
      o || (o = []);
      for (var l = -1, c = e.length; ++l < c;) {
        var d = e[l];
        s(d) && (i || v(d) || a(d)) ? t ? r(d, t, i, o) : n(o, d) : i || (o[o.length] = d)
      }
      return o
    }

    function i(e) {
      return function (t) {
        return null == t ? void 0 : t[e]
      }
    }

    function a(e) {
      return s(e) && f.call(e, "callee") && (!I.call(e, "callee") || h.call(e) == p)
    }

    function o(e) {
      return null != e && !("function" == typeof e && l(e)) && c(C(e))
    }

    function s(e) {
      return u(e) && o(e)
    }

    function l(e) {
      var t = d(e) ? h.call(e) : "";
      return t == g || t == _
    }

    function c(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && m >= e
    }

    function d(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t)
    }

    function u(e) {
      return !!e && "object" == typeof e
    }

    var m = 9007199254740991, p = "[object Arguments]", g = "[object Function]", _ = "[object GeneratorFunction]", b = t.Object.prototype, f = b.hasOwnProperty, h = b.toString, I = b.propertyIsEnumerable, C = i("length"), v = Array.isArray;
    e.exports = r
  }).call(t, function () {
    return this
  }())
}, function (e, t) {
  function n(e, t) {
    var n = e.__data__;
    if (r(t)) {
      var a = n.__data__, o = "string" == typeof t ? a.string : a.hash;
      return o[t] === i
    }
    return n.has(t)
  }

  function r(e) {
    var t = typeof e;
    return "number" == t || "boolean" == t || "string" == t && "__proto__" !== e || null == e
  }

  var i = "__lodash_hash_undefined__";
  e.exports = n
}, function (e, t, n) {
  function r(e) {
    var t = -1, n = e ? e.length : 0;
    for (this.__data__ = new o; ++t < n;)this.push(e[t])
  }

  function i(e) {
    var t = this.__data__;
    if (a(e)) {
      var n = t.__data__, r = "string" == typeof e ? n.string : n.hash;
      r[e] = s
    } else t.set(e, s)
  }

  function a(e) {
    var t = typeof e;
    return "number" == t || "boolean" == t || "string" == t && "__proto__" !== e || null == e
  }

  var o = n(11), s = "__lodash_hash_undefined__";
  r.prototype.push = i, e.exports = r
}, function (e, t) {
  (function (t) {
    function n(e) {
      var t = !1;
      if (null != e && "function" != typeof e.toString)try {
        t = !!(e + "")
      } catch (n) {
      }
      return t
    }

    function r() {
    }

    function i(e, t) {
      return o(e, t) && delete e[t]
    }

    function a(e, t) {
      if (B) {
        var n = e[t];
        return n === P ? void 0 : n
      }
      return R.call(e, t) ? e[t] : void 0
    }

    function o(e, t) {
      return B ? void 0 !== e[t] : R.call(e, t)
    }

    function s(e, t, n) {
      e[t] = B && void 0 === n ? P : n
    }

    function l(e) {
      var t = -1, n = e ? e.length : 0;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
      }
    }

    function c() {
      this.__data__ = { hash: new r, map: U ? new U : [], string: new r }
    }

    function d(e) {
      var t = this.__data__;
      return C(e) ? i("string" == typeof e ? t.string : t.hash, e) : U ? t.map["delete"](e) : g(t.map, e)
    }

    function u(e) {
      var t = this.__data__;
      return C(e) ? a("string" == typeof e ? t.string : t.hash, e) : U ? t.map.get(e) : _(t.map, e)
    }

    function m(e) {
      var t = this.__data__;
      return C(e) ? o("string" == typeof e ? t.string : t.hash, e) : U ? t.map.has(e) : b(t.map, e)
    }

    function p(e, t) {
      var n = this.__data__;
      return C(e) ? s("string" == typeof e ? n.string : n.hash, e, t) : U ? n.map.set(e, t) : h(n.map, e, t), this
    }

    function g(e, t) {
      var n = f(e, t);
      if (0 > n)return !1;
      var r = e.length - 1;
      return n == r ? e.pop() : k.call(e, n, 1), !0
    }

    function _(e, t) {
      var n = f(e, t);
      return 0 > n ? void 0 : e[n][1]
    }

    function b(e, t) {
      return f(e, t) > -1
    }

    function f(e, t) {
      for (var n = e.length; n--;)if (v(e[n][0], t))return n;
      return -1
    }

    function h(e, t, n) {
      var r = f(e, t);
      0 > r ? e.push([t, n]) : e[r][1] = n
    }

    function I(e, t) {
      var n = null == e ? void 0 : e[t];
      return T(n) ? n : void 0
    }

    function C(e) {
      var t = typeof e;
      return "number" == t || "boolean" == t || "string" == t && "__proto__" !== e || null == e
    }

    function v(e, t) {
      return e === t || e !== e && t !== t
    }

    function S(e) {
      var t = y(e) ? O.call(e) : "";
      return t == x || t == A
    }

    function y(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t)
    }

    function E(e) {
      return !!e && "object" == typeof e
    }

    function T(e) {
      return null == e ? !1 : S(e) ? L.test(N.call(e)) : E(e) && (n(e) ? L : D).test(e)
    }

    var P = "__lodash_hash_undefined__", x = "[object Function]", A = "[object GeneratorFunction]", G = /[\\^$.*+?()[\]{}|]/g, D = /^\[object .+?Constructor\]$/, w = t.Array.prototype, M = t.Object.prototype, N = t.Function.prototype.toString, R = M.hasOwnProperty, O = M.toString, L = RegExp("^" + N.call(R).replace(G, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), k = w.splice, U = I(t, "Map"), B = I(Object, "create");
    r.prototype = B ? B(null) : M, l.prototype.clear = c, l.prototype["delete"] = d, l.prototype.get = u, l.prototype.has = m, l.prototype.set = p, e.exports = l
  }).call(t, function () {
    return this
  }())
}, function (e, t) {
  (function (t) {
    function n(e, t) {
      for (var n = -1, r = Array(e); ++n < e;)r[n] = t(n);
      return r
    }

    function r(e, t) {
      return e = "number" == typeof e || y.test(e) ? +e : -1, t = null == t ? h : t, e > -1 && e % 1 == 0 && t > e
    }

    function i(e) {
      for (var t, n = []; !(t = e.next()).done;)n.push(t.value);
      return n
    }

    function a(e) {
      e = null == e ? e : Object(e);
      var t = [];
      for (var n in e)t.push(n);
      return t
    }

    function o(e) {
      return function (t) {
        return null == t ? void 0 : t[e]
      }
    }

    function s(e) {
      var t = e ? e.length : void 0;
      return p(t) && (w(e) || b(e) || c(e)) ? n(t, String) : null
    }

    function l(e) {
      var t = e && e.constructor, n = "function" == typeof t && t.prototype || E;
      return e === n
    }

    function c(e) {
      return u(e) && T.call(e, "callee") && (!G.call(e, "callee") || P.call(e) == I)
    }

    function d(e) {
      return null != e && !("function" == typeof e && m(e)) && p(D(e))
    }

    function u(e) {
      return _(e) && d(e)
    }

    function m(e) {
      var t = g(e) ? P.call(e) : "";
      return t == C || t == v
    }

    function p(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && h >= e
    }

    function g(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t)
    }

    function _(e) {
      return !!e && "object" == typeof e
    }

    function b(e) {
      return "string" == typeof e || !w(e) && _(e) && P.call(e) == S
    }

    function f(e) {
      for (var t = -1, n = l(e), i = a(e), o = i.length, c = s(e), d = !!c, u = c || [], m = u.length; ++t < o;) {
        var p = i[t];
        d && ("length" == p || r(p, m)) || "constructor" == p && (n || !T.call(e, p)) || u.push(p)
      }
      return u
    }

    var h = 9007199254740991, I = "[object Arguments]", C = "[object Function]", v = "[object GeneratorFunction]", S = "[object String]", y = /^(?:0|[1-9]\d*)$/, E = t.Object.prototype, T = E.hasOwnProperty, P = E.toString, x = t.Reflect, A = x ? x.enumerate : void 0, G = E.propertyIsEnumerable;
    A && !G.call({ valueOf: 1 }, "valueOf") && (a = function (e) {
      return i(A(e))
    });
    var D = o("length"), w = Array.isArray;
    e.exports = f
  }).call(t, function () {
    return this
  }())
}, function (e, t) {
  (function (t) {
    function n(e, t, n) {
      var r = n ? n.length : 0;
      switch (r) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2])
      }
      return e.apply(t, n)
    }

    function r(e, t) {
      if ("function" != typeof e)throw new TypeError(l);
      return t = v(void 0 === t ? e.length - 1 : o(t), 0), function () {
        for (var r = arguments, i = -1, a = v(r.length - t, 0), o = Array(a); ++i < a;)o[i] = r[t + i];
        switch (t) {
          case 0:
            return e.call(this, o);
          case 1:
            return e.call(this, r[0], o);
          case 2:
            return e.call(this, r[0], r[1], o)
        }
        var s = Array(t + 1);
        for (i = -1; ++i < t;)s[i] = r[i];
        return s[t] = o, n(e, this, s)
      }
    }

    function i(e) {
      var t = a(e) ? C.call(e) : "";
      return t == m || t == p
    }

    function a(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t)
    }

    function o(e) {
      if (!e)return 0 === e ? e : 0;
      if (e = s(e), e === c || e === -c) {
        var t = 0 > e ? -1 : 1;
        return t * d
      }
      var n = e % 1;
      return e === e ? n ? e - n : e : 0
    }

    function s(e) {
      if (a(e)) {
        var t = i(e.valueOf) ? e.valueOf() : e;
        e = a(t) ? t + "" : t
      }
      if ("string" != typeof e)return 0 === e ? e : +e;
      e = e.replace(g, "");
      var n = b.test(e);
      return n || f.test(e) ? h(e.slice(2), n ? 2 : 8) : _.test(e) ? u : +e
    }

    var l = "Expected a function", c = 1 / 0, d = 1.7976931348623157e308, u = NaN, m = "[object Function]", p = "[object GeneratorFunction]", g = /^\s+|\s+$/g, _ = /^[-+]0x[0-9a-f]+$/i, b = /^0b[01]+$/i, f = /^0o[0-7]+$/i, h = parseInt, I = t.Object.prototype, C = I.toString, v = Math.max;
    e.exports = r
  }).call(t, function () {
    return this
  }())
}, function (e, t, n) {
  function r(e, t, n, r) {
    var i = -1, a = e.length;
    for (r && a && (n = e[++i]); ++i < a;)n = t(n, e[i], i, e);
    return n
  }

  function i(e, t) {
    return e = Object(e), r(t, function (t, n) {
      return n in e && (t[n] = e[n]), t
    }, {})
  }

  var a = n(15), o = n(16), s = o(function (e, t) {
    return null == e ? {} : i(e, a(t))
  });
  e.exports = s
}, function (e, t) {
  (function (t) {
    function n(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r;)e[i + n] = t[n];
      return e
    }

    function r(e, t, i, o) {
      o || (o = []);
      for (var l = -1, c = e.length; ++l < c;) {
        var d = e[l];
        s(d) && (i || v(d) || a(d)) ? t ? r(d, t, i, o) : n(o, d) : i || (o[o.length] = d)
      }
      return o
    }

    function i(e) {
      return function (t) {
        return null == t ? void 0 : t[e]
      }
    }

    function a(e) {
      return s(e) && f.call(e, "callee") && (!I.call(e, "callee") || h.call(e) == p)
    }

    function o(e) {
      return null != e && !("function" == typeof e && l(e)) && c(C(e))
    }

    function s(e) {
      return u(e) && o(e)
    }

    function l(e) {
      var t = d(e) ? h.call(e) : "";
      return t == g || t == _
    }

    function c(e) {
      return "number" == typeof e && e > -1 && e % 1 == 0 && m >= e
    }

    function d(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t)
    }

    function u(e) {
      return !!e && "object" == typeof e
    }

    var m = 9007199254740991, p = "[object Arguments]", g = "[object Function]", _ = "[object GeneratorFunction]", b = t.Object.prototype, f = b.hasOwnProperty, h = b.toString, I = b.propertyIsEnumerable, C = i("length"), v = Array.isArray;
    e.exports = r
  }).call(t, function () {
    return this
  }())
}, function (e, t) {
  (function (t) {
    function n(e, t, n) {
      var r = n ? n.length : 0;
      switch (r) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2])
      }
      return e.apply(t, n)
    }

    function r(e, t) {
      if ("function" != typeof e)throw new TypeError(l);
      return t = v(void 0 === t ? e.length - 1 : o(t), 0), function () {
        for (var r = arguments, i = -1, a = v(r.length - t, 0), o = Array(a); ++i < a;)o[i] = r[t + i];
        switch (t) {
          case 0:
            return e.call(this, o);
          case 1:
            return e.call(this, r[0], o);
          case 2:
            return e.call(this, r[0], r[1], o)
        }
        var s = Array(t + 1);
        for (i = -1; ++i < t;)s[i] = r[i];
        return s[t] = o, n(e, this, s)
      }
    }

    function i(e) {
      var t = a(e) ? C.call(e) : "";
      return t == m || t == p
    }

    function a(e) {
      var t = typeof e;
      return !!e && ("object" == t || "function" == t)
    }

    function o(e) {
      if (!e)return 0 === e ? e : 0;
      if (e = s(e), e === c || e === -c) {
        var t = 0 > e ? -1 : 1;
        return t * d
      }
      var n = e % 1;
      return e === e ? n ? e - n : e : 0
    }

    function s(e) {
      if (a(e)) {
        var t = i(e.valueOf) ? e.valueOf() : e;
        e = a(t) ? t + "" : t
      }
      if ("string" != typeof e)return 0 === e ? e : +e;
      e = e.replace(g, "");
      var n = b.test(e);
      return n || f.test(e) ? h(e.slice(2), n ? 2 : 8) : _.test(e) ? u : +e
    }

    var l = "Expected a function", c = 1 / 0, d = 1.7976931348623157e308, u = NaN, m = "[object Function]", p = "[object GeneratorFunction]", g = /^\s+|\s+$/g, _ = /^[-+]0x[0-9a-f]+$/i, b = /^0b[01]+$/i, f = /^0o[0-7]+$/i, h = parseInt, I = t.Object.prototype, C = I.toString, v = Math.max;
    e.exports = r
  }).call(t, function () {
    return this
  }())
}, , , function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { "default": e }
  }

  Object.defineProperty(t, "__esModule", { value: !0 });
  var i = n(1), a = r(i);
  t["default"] = function (e) {
    return a["default"].createElement("button", { type: "button", onClick: e.onClick }, e.children)
  }
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { "default": e }
  }

  function i(e, t) {
    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var s = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();
  Object.defineProperty(t, "__esModule", { value: !0 });
  var l = n(1), c = r(l), d = n(2), u = r(d), m = n(19), p = r(m), g = n(177), _ = r(g), b = function (e) {
    function t(e) {
      i(this, t);
      var n = a(this, Object.getPrototypeOf(t).call(this, e));
      return n._bind("handleClose", "handleDelete", "rawMarkup", "buttons"), n
    }

    return o(t, e), s(t, [{
      key: "handleClose", value: function () {
        this.props.onClose()
      }
    }, {
      key: "handleDelete", value: function () {
        this.props.onDelete(this.props)
      }
    }, {
      key: "rawMarkup", value: function () {
        var e = (0, _["default"])(this.props.contentText.toString(), {
          sanitize: !0, breaks: !0, highlight: function (e) {
            return n(30).highlightAuto(e).value
          }
        });
        return { __html: e }
      }
    }, {
      key: "buttons", value: function () {
        return "function" == typeof this.props.onClose ? c["default"].createElement("span", null, c["default"].createElement(p["default"], {
          onClick: this.handleClose
        }, "EDIT"), c["default"].createElement(p["default"], { onClick: this.handleDelete }, "DELETE")) : c["default"].createElement(p["default"], { onClick: this.handleDelete }, "DELETE")
      }
    }, {
      key: "render", value: function () {
        return c["default"].createElement("div", { className: "p-memo" }, c["default"].createElement("div", { className: "p-memo__btn-group" }, this.buttons()), c["default"].createElement("div", {
          className: "p-memo__body",
          dangerouslySetInnerHTML: this.rawMarkup()
        }))
      }
    }]), t
  }(u["default"]);
  t["default"] = b, b.propTypes = {
    id: c["default"].PropTypes.number,
    contentText: c["default"].PropTypes.string.isRequired,
    onClose: c["default"].PropTypes.func,
    onDelete: c["default"].PropTypes.func
  }
}, , function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { "default": e }
  }

  function i(e, t) {
    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var s = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();
  Object.defineProperty(t, "__esModule", { value: !0 });
  var l = n(1), c = r(l), d = n(1), u = (r(d), n(2)), m = r(u), p = n(19), g = r(p), _ = function (e) {
    function t(e) {
      i(this, t);
      var n = a(this, Object.getPrototypeOf(t).call(this, e));
      return n.state = {
        inputContent: n.props.content,
        hasChanged: !1
      }, n._bind("handleChange", "handleCancel", "handleSubmit", "handleKeyDown"), n
    }

    return o(t, e), s(t, [{
      key: "componentDidMount", value: function () {
        this.refs._textarea.focus()
      }
    }, {
      key: "handleCancel", value: function () {
        if (this.state.hasChanged) {
          var e = chrome.i18n.getMessage("alert_cancel");
          confirm(e) && this.props.onClose()
        } else this.props.onClose()
      }
    }, {
      key: "handleSubmit", value: function (e) {
        e.preventDefault(), this.state.inputContent.trim() && (this.props.onSubmit(this.state.inputContent), this.props.onClose())
      }
    }, {
      key: "handleKeyDown", value: function (e) {
        e.ctrlKey && 13 === e.keyCode && (e.preventDefault(), this.handleSubmit(e))
      }
    }, {
      key: "handleChange", value: function (e) {
        this.setState({ inputContent: e.target.value, hasChanged: !0 })
      }
    }, {
      key: "render", value: function () {
        return c["default"].createElement("div", { className: "p-editor" }, c["default"].createElement("div", { className: "p-editor__btn-group" }, c["default"].createElement(g["default"], { onClick: this.handleSubmit }, "SUBMIT"), c["default"].createElement(g["default"], { onClick: this.handleCancel }, "CANCEL")), c["default"].createElement("div", { className: "p-editor__body" }, c["default"].createElement("textarea", {
          ref: "_textarea",
          value: this.state.inputContent,
          onChange: this.handleChange,
          onKeyDown: this.handleKeyDown
        })))
      }
    }]), t
  }(m["default"]);
  t["default"] = _, _.propTypes = {
    content: c["default"].PropTypes.string,
    onClose: c["default"].PropTypes.func.isRequired,
    onSubmit: c["default"].PropTypes.func.isRequired
  }
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { "default": e }
  }

  function i(e, t) {
    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var s = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();
  Object.defineProperty(t, "__esModule", { value: !0 });
  var l = n(1), c = r(l), d = n(1), u = (r(d), n(2)), m = r(u), p = n(20), g = r(p), _ = function (e) {
    function t(e) {
      i(this, t);
      var n = a(this, Object.getPrototypeOf(t).call(this, e));
      return n.state = {
        url: "",
        data: []
      }, n._bind("handleDelete", "handleDeleteAll", "ContentList", "DeleteAllButton"), n
    }

    return o(t, e), s(t, [{
      key: "componentWillMount", value: function () {
        var e = this;
        chrome.runtime.sendMessage({ type: "GET_INSERTION_ERRORS" }, function (t) {
          "success" === t.status && e.setState({ url: t.data.url, data: t.data.errors })
        })
      }
    }, {
      key: "handleDelete", value: function (e) {
        var t = this, n = Object.assign({}, e);
        chrome.runtime.sendMessage({ type: "DELETE", data: n }, function (e) {
          if ("error" === e.status)console.log(e.errorMessage); else if ("success" === e.status) {
            var r = t.state.data.findIndex(function (e) {
              return e.id === n.id
            }), i = t.state.data.concat();
            i.splice(r, 1), t.setState({ data: i })
          }
        })
      }
    }, {
      key: "handleDeleteAll", value: function () {
        var e = this, t = chrome.i18n.getMessage("alert_deleteAll");
        confirm(t) && this.state.data.forEach(function (t) {
          return e.handleDelete(t)
        })
      }
    }, {
      key: "DeleteAllButton", value: function () {
        return this.state.data.length ? c["default"].createElement("button", {
          type: "button",
          className: "p-operation-btn",
          onClick: this.handleDeleteAll
        }, "delete all") : void 0
      }
    }, {
      key: "ContentList", value: function () {
        var e = this;
        return this.state.data.map(function (t) {
          return c["default"].createElement(g["default"], {
            key: t.id,
            id: t.id,
            onDelete: e.handleDelete,
            contentText: t.contentText
          })
        })
      }
    }, {
      key: "render", value: function () {
        return c["default"].createElement("div", { className: "l-page-component-wrapper" }, c["default"].createElement("header", { className: "l-page-header" }, c["default"].createElement("h1", { className: "p-header__title" }, this.state.url)), c["default"].createElement("section", { className: "l-page-body" }, c["default"].createElement("div", { className: "l-page-body__inner" }, c["default"].createElement("div", { className: "p-operation-container" }, this.DeleteAllButton()), this.ContentList())))
      }
    }]), t
  }(m["default"]);
  t["default"] = _
}, function (e, t, n) {
  "use strict";
  function r(e) {
    return e && e.__esModule ? e : { "default": e }
  }

  function i(e, t) {
    if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }

  function o(e, t) {
    if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }

  var s = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();
  Object.defineProperty(t, "__esModule", { value: !0 });
  var l = n(1), c = r(l), d = n(1), u = r(d), m = n(2), p = r(m), g = n(20), _ = r(g), b = n(22), f = r(b), h = function (e) {
    function t(e) {
      i(this, t);
      var n = a(this, Object.getPrototypeOf(t).call(this, e));
      return n.state = {
        id: n.props.id,
        url: n.props.url,
        targetElmPath: n.props.targetElmPath,
        contentText: n.props.contentText || "",
        isEditing: !1
      }, n._bind("rendererChild", "handleToggleChild", "handleSubmit", "handleDelete"), n
    }

    return o(t, e), s(t, [{
      key: "componentWillMount", value: function () {
        this.state.contentText.trim() || this.setState({ isEditing: !0 })
      }
    }, {
      key: "componentDidUpdate", value: function () {
        this.state.isEditing || this.state.contentText.trim() || this.removeComponent()
      }
    }, {
      key: "handleToggleChild", value: function () {
        this.setState({ isEditing: !this.state.isEditing })
      }
    }, {
      key: "handleSubmit", value: function (e) {
        var t = this, n = Object.assign({}, this.state, { contentText: e });
        this.setState(n), chrome.runtime.sendMessage({ type: "PUT", data: n }, function (e) {
          "error" === e.status ? console.log(e.errorMessage) : "success" === e.status && t.setState(e.data)
        })
      }
    }, {
      key: "handleDelete", value: function () {
        var e = this, t = chrome.i18n.getMessage("alert_delete");
        if (confirm(t)) {
          var n = Object.assign({}, this.state);
          chrome.runtime.sendMessage({ type: "DELETE", data: n }, function (t) {
            "error" === t.status ? console.log(t.errorMessage) : "success" === t.status && e.removeComponent()
          })
        }
      }
    }, {
      key: "removeComponent", value: function () {
        var e = document.getElementById(this.props.containerElmId);
        u["default"].unmountComponentAtNode(e), e.parentNode.removeChild(e)
      }
    }, {
      key: "rendererChild", value: function () {
        return this.state.isEditing ? c["default"].createElement(f["default"], {
          content: this.state.contentText,
          onClose: this.handleToggleChild,
          onSubmit: this.handleSubmit
        }) : c["default"].createElement(_["default"], {
          contentText: this.state.contentText,
          onClose: this.handleToggleChild,
          onDelete: this.handleDelete
        })
      }
    }, {
      key: "render", value: function () {
        return c["default"].createElement("div", { className: "chrome__sashikomi" }, c["default"].createElement("div", { className: "chrome__sashikomi--ext" }, this.rendererChild()))
      }
    }]), t
  }(p["default"]);
  t["default"] = h, h.propTypes = {
    id: c["default"].PropTypes.number,
    url: c["default"].PropTypes.string.isRequired,
    contentText: c["default"].PropTypes.string,
    targetElmPath: c["default"].PropTypes.string.isRequired,
    containerElmId: c["default"].PropTypes.string.isRequired
  }
}, function (e, t, n) {
  var r = n(26), i = function (e) {
    for (var t = e.split(/\s/g), n = [], r = 0; r < t.length; ++r)t[r].length > 0 && n.push("." + t[r]);
    return n.join("")
  }, a = function (e) {
    for (var t = 0, n = e.parentNode.childNodes, r = 0; r < n.length; ++r)if (1 === n[r].nodeType && ++t, n[r] === e)return t
  }, o = function (e, t, n) {
    var s = e.tagName.toLowerCase(), l = [s], c = e.getAttribute("class"), d = e.getAttribute("id");
    return d ? (n.unshift(s + "#" + r(d)), n) : (c && l.push(i(c)), "html" !== s && "body" !== s && e.parentNode && l.push(":nth-child(" + a(e) + ")"), n.unshift(l.join("")), e.parentNode && e.parentNode !== t && e.parentNode.tagName && o(e.parentNode, t, n), n)
  };
  e.exports = function (e, t) {
    return o(e, t, []).join(" > ")
  }
}, function (e, t) {
  function n(e) {
    return e.replace(/^\s*|\s*$/g, "")
  }

  t = e.exports = n, t.left = function (e) {
    return e.replace(/^\s*/, "")
  }, t.right = function (e) {
    return e.replace(/\s*$/, "")
  }
}, , function (e, t) {
}, function (e, t, n) {
  !function (e) {
    e(t)
  }(function (e) {
    function t(e) {
      return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function n(e) {
      return e.nodeName.toLowerCase()
    }

    function r(e, t) {
      var n = e && e.exec(t);
      return n && 0 == n.index
    }

    function i(e) {
      return /^(no-?highlight|plain|text)$/i.test(e)
    }

    function a(e) {
      var t, n, r, a = e.className + " ";
      if (a += e.parentNode ? e.parentNode.className : "", n = /\blang(?:uage)?-([\w-]+)\b/i.exec(a))return C(n[1]) ? n[1] : "no-highlight";
      for (a = a.split(/\s+/), t = 0, r = a.length; r > t; t++)if (C(a[t]) || i(a[t]))return a[t]
    }

    function o(e, t) {
      var n, r = {};
      for (n in e)r[n] = e[n];
      if (t)for (n in t)r[n] = t[n];
      return r
    }

    function s(e) {
      var t = [];
      return function r(e, i) {
        for (var a = e.firstChild; a; a = a.nextSibling)3 == a.nodeType ? i += a.nodeValue.length : 1 == a.nodeType && (t.push({
          event: "start",
          offset: i,
          node: a
        }), i = r(a, i), n(a).match(/br|hr|img|input/) || t.push({ event: "stop", offset: i, node: a }));
        return i
      }(e, 0), t
    }

    function l(e, r, i) {
      function a() {
        return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
      }

      function o(e) {
        function r(e) {
          return " " + e.nodeName + '="' + t(e.value) + '"'
        }

        d += "<" + n(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
      }

      function s(e) {
        d += "</" + n(e) + ">"
      }

      function l(e) {
        ("start" == e.event ? o : s)(e.node)
      }

      for (var c = 0, d = "", u = []; e.length || r.length;) {
        var m = a();
        if (d += t(i.substr(c, m[0].offset - c)), c = m[0].offset, m == e) {
          u.reverse().forEach(s);
          do l(m.splice(0, 1)[0]), m = a(); while (m == e && m.length && m[0].offset == c);
          u.reverse().forEach(o)
        } else"start" == m[0].event ? u.push(m[0].node) : u.pop(), l(m.splice(0, 1)[0])
      }
      return d + t(i.substr(c))
    }

    function c(e) {
      function t(e) {
        return e && e.source || e
      }

      function n(n, r) {
        return new RegExp(t(n), "m" + (e.case_insensitive ? "i" : "") + (r ? "g" : ""))
      }

      function r(i, a) {
        if (!i.compiled) {
          if (i.compiled = !0, i.keywords = i.keywords || i.beginKeywords, i.keywords) {
            var s = {}, l = function (t, n) {
              e.case_insensitive && (n = n.toLowerCase()), n.split(" ").forEach(function (e) {
                var n = e.split("|");
                s[n[0]] = [t, n[1] ? Number(n[1]) : 1]
              })
            };
            "string" == typeof i.keywords ? l("keyword", i.keywords) : Object.keys(i.keywords).forEach(function (e) {
              l(e, i.keywords[e])
            }), i.keywords = s
          }
          i.lexemesRe = n(i.lexemes || /\b\w+\b/, !0), a && (i.beginKeywords && (i.begin = "\\b(" + i.beginKeywords.split(" ").join("|") + ")\\b"), i.begin || (i.begin = /\B|\b/), i.beginRe = n(i.begin), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end && (i.endRe = n(i.end)), i.terminator_end = t(i.end) || "", i.endsWithParent && a.terminator_end && (i.terminator_end += (i.end ? "|" : "") + a.terminator_end)), i.illegal && (i.illegalRe = n(i.illegal)), void 0 === i.relevance && (i.relevance = 1), i.contains || (i.contains = []);
          var c = [];
          i.contains.forEach(function (e) {
            e.variants ? e.variants.forEach(function (t) {
              c.push(o(e, t))
            }) : c.push("self" == e ? i : e)
          }), i.contains = c, i.contains.forEach(function (e) {
            r(e, i)
          }), i.starts && r(i.starts, a);
          var d = i.contains.map(function (e) {
            return e.beginKeywords ? "\\.?(" + e.begin + ")\\.?" : e.begin
          }).concat([i.terminator_end, i.illegal]).map(t).filter(Boolean);
          i.terminators = d.length ? n(d.join("|"), !0) : {
            exec: function () {
              return null
            }
          }
        }
      }

      r(e)
    }

    function d(e, n, i, a) {
      function o(e, t) {
        for (var n = 0; n < t.contains.length; n++)if (r(t.contains[n].beginRe, e))return t.contains[n]
      }

      function s(e, t) {
        if (r(e.endRe, t)) {
          for (; e.endsParent && e.parent;)e = e.parent;
          return e
        }
        return e.endsWithParent ? s(e.parent, t) : void 0
      }

      function l(e, t) {
        return !i && r(t.illegalRe, e)
      }

      function m(e, t) {
        var n = I.case_insensitive ? t[0].toLowerCase() : t[0];
        return e.keywords.hasOwnProperty(n) && e.keywords[n]
      }

      function p(e, t, n, r) {
        var i = r ? "" : v.classPrefix, a = '<span class="' + i, o = n ? "" : "</span>";
        return a += e + '">', a + t + o
      }

      function g() {
        if (!E.keywords)return t(x);
        var e = "", n = 0;
        E.lexemesRe.lastIndex = 0;
        for (var r = E.lexemesRe.exec(x); r;) {
          e += t(x.substr(n, r.index - n));
          var i = m(E, r);
          i ? (A += i[1], e += p(i[0], t(r[0]))) : e += t(r[0]), n = E.lexemesRe.lastIndex, r = E.lexemesRe.exec(x)
        }
        return e + t(x.substr(n))
      }

      function _() {
        var e = "string" == typeof E.subLanguage;
        if (e && !S[E.subLanguage])return t(x);
        var n = e ? d(E.subLanguage, x, !0, T[E.subLanguage]) : u(x, E.subLanguage.length ? E.subLanguage : void 0);
        return E.relevance > 0 && (A += n.relevance), e && (T[E.subLanguage] = n.top), p(n.language, n.value, !1, !0)
      }

      function b() {
        return void 0 !== E.subLanguage ? _() : g()
      }

      function f(e, n) {
        var r = e.className ? p(e.className, "", !0) : "";
        e.returnBegin ? (P += r, x = "") : e.excludeBegin ? (P += t(n) + r, x = "") : (P += r, x = n), E = Object.create(e, { parent: { value: E } })
      }

      function h(e, n) {
        if (x += e, void 0 === n)return P += b(), 0;
        var r = o(n, E);
        if (r)return P += b(), f(r, n), r.returnBegin ? 0 : n.length;
        var i = s(E, n);
        if (i) {
          var a = E;
          a.returnEnd || a.excludeEnd || (x += n), P += b();
          do E.className && (P += "</span>"), A += E.relevance, E = E.parent; while (E != i.parent);
          return a.excludeEnd && (P += t(n)), x = "", i.starts && f(i.starts, ""), a.returnEnd ? 0 : n.length
        }
        if (l(n, E))throw new Error('Illegal lexeme "' + n + '" for mode "' + (E.className || "<unnamed>") + '"');
        return x += n, n.length || 1
      }

      var I = C(e);
      if (!I)throw new Error('Unknown language: "' + e + '"');
      c(I);
      var y, E = a || I, T = {}, P = "";
      for (y = E; y != I; y = y.parent)y.className && (P = p(y.className, "", !0) + P);
      var x = "", A = 0;
      try {
        for (var G, D, w = 0; ;) {
          if (E.terminators.lastIndex = w, G = E.terminators.exec(n), !G)break;
          D = h(n.substr(w, G.index - w), G[0]), w = G.index + D
        }
        for (h(n.substr(w)), y = E; y.parent; y = y.parent)y.className && (P += "</span>");
        return { relevance: A, value: P, language: e, top: E }
      } catch (M) {
        if (-1 != M.message.indexOf("Illegal"))return { relevance: 0, value: t(n) };
        throw M
      }
    }

    function u(e, n) {
      n = n || v.languages || Object.keys(S);
      var r = { relevance: 0, value: t(e) }, i = r;
      return n.forEach(function (t) {
        if (C(t)) {
          var n = d(t, e, !1);
          n.language = t, n.relevance > i.relevance && (i = n), n.relevance > r.relevance && (i = r, r = n)
        }
      }), i.language && (r.second_best = i), r
    }

    function m(e) {
      return v.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, t) {
        return t.replace(/\t/g, v.tabReplace)
      })), v.useBR && (e = e.replace(/\n/g, "<br>")), e
    }

    function p(e, t, n) {
      var r = t ? y[t] : n, i = [e.trim()];
      return e.match(/\bhljs\b/) || i.push("hljs"), -1 === e.indexOf(r) && i.push(r), i.join(" ").trim()
    }

    function g(e) {
      var t = a(e);
      if (!i(t)) {
        var n;
        v.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : n = e;
        var r = n.textContent, o = t ? d(t, r, !0) : u(r), c = s(n);
        if (c.length) {
          var g = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
          g.innerHTML = o.value, o.value = l(c, s(g), r)
        }
        o.value = m(o.value), e.innerHTML = o.value, e.className = p(e.className, t, o.language), e.result = {
          language: o.language,
          re: o.relevance
        }, o.second_best && (e.second_best = { language: o.second_best.language, re: o.second_best.relevance })
      }
    }

    function _(e) {
      v = o(v, e)
    }

    function b() {
      if (!b.called) {
        b.called = !0;
        var e = document.querySelectorAll("pre code");
        Array.prototype.forEach.call(e, g)
      }
    }

    function f() {
      addEventListener("DOMContentLoaded", b, !1), addEventListener("load", b, !1)
    }

    function h(t, n) {
      var r = S[t] = n(e);
      r.aliases && r.aliases.forEach(function (e) {
        y[e] = t
      })
    }

    function I() {
      return Object.keys(S)
    }

    function C(e) {
      return e = (e || "").toLowerCase(), S[e] || S[y[e]]
    }

    var v = { classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0 }, S = {}, y = {};
    return e.highlight = d, e.highlightAuto = u, e.fixMarkup = m, e.highlightBlock = g, e.configure = _, e.initHighlighting = b, e.initHighlightingOnLoad = f, e.registerLanguage = h, e.listLanguages = I, e.getLanguage = C, e.inherit = o, e.IDENT_RE = "[a-zA-Z]\\w*", e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", e.NUMBER_RE = "\\b\\d+(\\.\\d+)?", e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BINARY_NUMBER_RE = "\\b(0b[01]+)", e.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BACKSLASH_ESCAPE = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    }, e.APOS_STRING_MODE = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [e.BACKSLASH_ESCAPE]
    }, e.QUOTE_STRING_MODE = {
      className: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [e.BACKSLASH_ESCAPE]
    }, e.PHRASAL_WORDS_MODE = { begin: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/ }, e.COMMENT = function (t, n, r) {
      var i = e.inherit({ className: "comment", begin: t, end: n, contains: [] }, r || {});
      return i.contains.push(e.PHRASAL_WORDS_MODE), i.contains.push({
        className: "doctag",
        begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
        relevance: 0
      }), i
    }, e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$"), e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/"), e.HASH_COMMENT_MODE = e.COMMENT("#", "$"), e.NUMBER_MODE = {
      className: "number",
      begin: e.NUMBER_RE,
      relevance: 0
    }, e.C_NUMBER_MODE = {
      className: "number",
      begin: e.C_NUMBER_RE,
      relevance: 0
    }, e.BINARY_NUMBER_MODE = {
      className: "number",
      begin: e.BINARY_NUMBER_RE,
      relevance: 0
    }, e.CSS_NUMBER_MODE = {
      className: "number",
      begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    }, e.REGEXP_MODE = {
      className: "regexp",
      begin: /\//,
      end: /\/[gimuy]*/,
      illegal: /\n/,
      contains: [e.BACKSLASH_ESCAPE, { begin: /\[/, end: /\]/, relevance: 0, contains: [e.BACKSLASH_ESCAPE] }]
    }, e.TITLE_MODE = {
      className: "title",
      begin: e.IDENT_RE,
      relevance: 0
    }, e.UNDERSCORE_TITLE_MODE = { className: "title", begin: e.UNDERSCORE_IDENT_RE, relevance: 0 }, e
  })
}, function (e, t, n) {
  var r = n(29);
  r.registerLanguage("1c", n(31)), r.registerLanguage("accesslog", n(32)), r.registerLanguage("actionscript", n(33)), r.registerLanguage("apache", n(34)), r.registerLanguage("applescript", n(35)), r.registerLanguage("arduino", n(36)), r.registerLanguage("armasm", n(37)), r.registerLanguage("xml", n(173)), r.registerLanguage("asciidoc", n(38)), r.registerLanguage("aspectj", n(39)), r.registerLanguage("autohotkey", n(40)), r.registerLanguage("autoit", n(41)), r.registerLanguage("avrasm", n(42)), r.registerLanguage("axapta", n(43)), r.registerLanguage("bash", n(44)), r.registerLanguage("basic", n(45)), r.registerLanguage("brainfuck", n(46)), r.registerLanguage("cal", n(47)), r.registerLanguage("capnproto", n(48)), r.registerLanguage("ceylon", n(49)), r.registerLanguage("clojure", n(51)), r.registerLanguage("clojure-repl", n(50)), r.registerLanguage("cmake", n(52)), r.registerLanguage("coffeescript", n(53)), r.registerLanguage("cos", n(54)), r.registerLanguage("cpp", n(55)), r.registerLanguage("crmsh", n(56)), r.registerLanguage("crystal", n(57)), r.registerLanguage("cs", n(58)), r.registerLanguage("css", n(59)), r.registerLanguage("d", n(60)), r.registerLanguage("markdown", n(108)), r.registerLanguage("dart", n(61)), r.registerLanguage("delphi", n(62)), r.registerLanguage("diff", n(63)), r.registerLanguage("django", n(64)), r.registerLanguage("dns", n(65)), r.registerLanguage("dockerfile", n(66)), r.registerLanguage("dos", n(67)), r.registerLanguage("dts", n(68)), r.registerLanguage("dust", n(69)), r.registerLanguage("elixir", n(70)), r.registerLanguage("elm", n(71)), r.registerLanguage("ruby", n(141)), r.registerLanguage("erb", n(72)), r.registerLanguage("erlang-repl", n(73)), r.registerLanguage("erlang", n(74)), r.registerLanguage("fix", n(75)), r.registerLanguage("fortran", n(76)), r.registerLanguage("fsharp", n(77)), r.registerLanguage("gams", n(78)), r.registerLanguage("gauss", n(79)), r.registerLanguage("gcode", n(80)), r.registerLanguage("gherkin", n(81)), r.registerLanguage("glsl", n(82)), r.registerLanguage("go", n(83)), r.registerLanguage("golo", n(84)), r.registerLanguage("gradle", n(85)), r.registerLanguage("groovy", n(86)), r.registerLanguage("haml", n(87)), r.registerLanguage("handlebars", n(88)), r.registerLanguage("haskell", n(89)), r.registerLanguage("haxe", n(90)), r.registerLanguage("hsp", n(91)), r.registerLanguage("http", n(92)), r.registerLanguage("inform7", n(93)), r.registerLanguage("ini", n(94)), r.registerLanguage("irpf90", n(95)), r.registerLanguage("java", n(96)), r.registerLanguage("javascript", n(97)), r.registerLanguage("json", n(98)), r.registerLanguage("julia", n(99)), r.registerLanguage("kotlin", n(100)), r.registerLanguage("lasso", n(101)), r.registerLanguage("less", n(102)), r.registerLanguage("lisp", n(103)), r.registerLanguage("livecodeserver", n(104)), r.registerLanguage("livescript", n(105)), r.registerLanguage("lua", n(106)), r.registerLanguage("makefile", n(107)), r.registerLanguage("mathematica", n(109)), r.registerLanguage("matlab", n(110)), r.registerLanguage("mel", n(111)), r.registerLanguage("mercury", n(112)), r.registerLanguage("mipsasm", n(113)), r.registerLanguage("mizar", n(114)), r.registerLanguage("perl", n(126)), r.registerLanguage("mojolicious", n(115)), r.registerLanguage("monkey", n(116)), r.registerLanguage("nginx", n(117)), r.registerLanguage("nimrod", n(118)), r.registerLanguage("nix", n(119)), r.registerLanguage("nsis", n(120)), r.registerLanguage("objectivec", n(121)), r.registerLanguage("ocaml", n(122)), r.registerLanguage("openscad", n(123)), r.registerLanguage("oxygene", n(124)), r.registerLanguage("parser3", n(125)), r.registerLanguage("pf", n(127)), r.registerLanguage("php", n(128)), r.registerLanguage("powershell", n(129)),r.registerLanguage("processing", n(130)),r.registerLanguage("profile", n(131)),r.registerLanguage("prolog", n(132)),r.registerLanguage("protobuf", n(133)),r.registerLanguage("puppet", n(134)),r.registerLanguage("python", n(135)),r.registerLanguage("q", n(136)),r.registerLanguage("r", n(137)),r.registerLanguage("rib", n(138)),r.registerLanguage("roboconf", n(139)),r.registerLanguage("rsl", n(140)),r.registerLanguage("ruleslanguage", n(142)),r.registerLanguage("rust", n(143)),r.registerLanguage("scala", n(144)),r.registerLanguage("scheme", n(145)),r.registerLanguage("scilab", n(146)),r.registerLanguage("scss", n(147)),r.registerLanguage("smali", n(148)),r.registerLanguage("smalltalk", n(149)),r.registerLanguage("sml", n(150)),r.registerLanguage("sqf", n(151)),r.registerLanguage("sql", n(152)),r.registerLanguage("stan", n(153)),r.registerLanguage("stata", n(154)),r.registerLanguage("step21", n(155)),r.registerLanguage("stylus", n(156)),r.registerLanguage("swift", n(157)),r.registerLanguage("tcl", n(158)),r.registerLanguage("tex", n(159)),r.registerLanguage("thrift", n(160)),r.registerLanguage("tp", n(161)),r.registerLanguage("twig", n(162)),r.registerLanguage("typescript", n(163)),r.registerLanguage("vala", n(164)),r.registerLanguage("vbnet", n(165)),r.registerLanguage("vbscript", n(167)),r.registerLanguage("vbscript-html", n(166)),r.registerLanguage("verilog", n(168)),r.registerLanguage("vhdl", n(169)),r.registerLanguage("vim", n(170)),r.registerLanguage("x86asm", n(171)),r.registerLanguage("xl", n(172)),r.registerLanguage("xquery", n(174)),r.registerLanguage("yaml", n(175)),r.registerLanguage("zephir", n(176)),e.exports = r
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-zA-Zа-яА-Я][a-zA-Z0-9_а-яА-Я]*", n = "возврат дата для если и или иначе иначеесли исключение конецесли конецпопытки конецпроцедуры конецфункции конеццикла константа не перейти перем перечисление по пока попытка прервать продолжить процедура строка тогда фс функция цикл число экспорт", r = "ansitooem oemtoansi ввестивидсубконто ввестидату ввестизначение ввестиперечисление ввестипериод ввестиплансчетов ввестистроку ввестичисло вопрос восстановитьзначение врег выбранныйплансчетов вызватьисключение датагод датамесяц датачисло добавитьмесяц завершитьработусистемы заголовоксистемы записьжурналарегистрации запуститьприложение зафиксироватьтранзакцию значениевстроку значениевстрокувнутр значениевфайл значениеизстроки значениеизстрокивнутр значениеизфайла имякомпьютера имяпользователя каталогвременныхфайлов каталогиб каталогпользователя каталогпрограммы кодсимв командасистемы конгода конецпериодаби конецрассчитанногопериодаби конецстандартногоинтервала конквартала конмесяца коннедели лев лог лог10 макс максимальноеколичествосубконто мин монопольныйрежим названиеинтерфейса названиенабораправ назначитьвид назначитьсчет найти найтипомеченныенаудаление найтиссылки началопериодаби началостандартногоинтервала начатьтранзакцию начгода начквартала начмесяца начнедели номерднягода номерднянедели номернеделигода нрег обработкаожидания окр описаниеошибки основнойжурналрасчетов основнойплансчетов основнойязык открытьформу открытьформумодально отменитьтранзакцию очиститьокносообщений периодстр полноеимяпользователя получитьвремята получитьдатута получитьдокументта получитьзначенияотбора получитьпозициюта получитьпустоезначение получитьта прав праводоступа предупреждение префиксавтонумерации пустаястрока пустоезначение рабочаядаттьпустоезначение рабочаядата разделительстраниц разделительстрок разм разобратьпозициюдокумента рассчитатьрегистрына рассчитатьрегистрыпо сигнал симв символтабуляции создатьобъект сокрл сокрлп сокрп сообщить состояние сохранитьзначение сред статусвозврата стрдлина стрзаменить стрколичествострок стрполучитьстроку  стрчисловхождений сформироватьпозициюдокумента счетпокоду текущаядата текущеевремя типзначения типзначениястр удалитьобъекты установитьтана установитьтапо фиксшаблон формат цел шаблон", i = { begin: '""' }, a = {
      className: "string",
      begin: '"',
      end: '"|$',
      contains: [i]
    }, o = { className: "string", begin: "\\|", end: '"|$', contains: [i] };
    return {
      case_insensitive: !0,
      lexemes: t,
      keywords: { keyword: n, built_in: r },
      contains: [e.C_LINE_COMMENT_MODE, e.NUMBER_MODE, a, o, {
        className: "function",
        begin: "(процедура|функция)",
        end: "$",
        lexemes: t,
        keywords: "процедура функция",
        contains: [{
          begin: "экспорт",
          endsWithParent: !0,
          lexemes: t,
          keywords: "экспорт",
          contains: [e.C_LINE_COMMENT_MODE]
        }, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          lexemes: t,
          keywords: "знач",
          contains: [a, o]
        }, e.C_LINE_COMMENT_MODE, e.inherit(e.TITLE_MODE, { begin: t })]
      }, { className: "meta", begin: "#", end: "$" }, {
        className: "number",
        begin: "'\\d{2}\\.\\d{2}\\.(\\d{2}|\\d{4})'"
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      contains: [{
        className: "number",
        begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
      }, { className: "number", begin: "\\b\\d+\\b", relevance: 0 }, {
        className: "string",
        begin: '"(GET|POST|HEAD|PUT|DELETE|CONNECT|OPTIONS|PATCH|TRACE)',
        end: '"',
        keywords: "GET POST HEAD PUT DELETE CONNECT OPTIONS PATCH TRACE",
        illegal: "\\n",
        relevance: 10
      }, { className: "string", begin: /\[/, end: /\]/, illegal: "\\n" }, {
        className: "string",
        begin: '"',
        end: '"',
        illegal: "\\n"
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-zA-Z_$][a-zA-Z0-9_$]*", n = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)", r = {
      className: "rest_arg",
      begin: "[.]{3}",
      end: t,
      relevance: 10
    };
    return {
      aliases: ["as"],
      keywords: {
        keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
        literal: "true false null undefined"
      },
      contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, {
        className: "class",
        beginKeywords: "package",
        end: "{",
        contains: [e.TITLE_MODE]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: "{",
        excludeEnd: !0,
        contains: [{ beginKeywords: "extends implements" }, e.TITLE_MODE]
      }, {
        className: "meta",
        beginKeywords: "import include",
        end: ";",
        keywords: { "meta-keyword": "import include" }
      }, {
        className: "function",
        beginKeywords: "function",
        end: "[{;]",
        excludeEnd: !0,
        illegal: "\\S",
        contains: [e.TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r]
        }, { begin: ":\\s*" + n }]
      }],
      illegal: /#/
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "number", begin: "[\\$%]\\d+" };
    return {
      aliases: ["apacheconf"],
      case_insensitive: !0,
      contains: [e.HASH_COMMENT_MODE, { className: "section", begin: "</?", end: ">" }, {
        className: "attribute",
        begin: /\w+/,
        relevance: 0,
        keywords: { nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername" },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: { literal: "on off all" },
          contains: [{ className: "meta", begin: "\\s\\[", end: "\\]$" }, {
            className: "variable",
            begin: "[\\$%]\\{",
            end: "\\}",
            contains: ["self", t]
          }, t, e.QUOTE_STRING_MODE]
        }
      }],
      illegal: /\S/
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = e.inherit(e.QUOTE_STRING_MODE, { illegal: "" }), n = {
      className: "params",
      begin: "\\(",
      end: "\\)",
      contains: ["self", e.C_NUMBER_MODE, t]
    }, r = e.COMMENT("--", "$"), i = e.COMMENT("\\(\\*", "\\*\\)", { contains: ["self", r] }), a = [r, i, e.HASH_COMMENT_MODE];
    return {
      aliases: ["osascript"],
      keywords: {
        keyword: "about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
        literal: "AppleScript false linefeed return pi quote result space tab true",
        built_in: "alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"
      },
      contains: [t, e.C_NUMBER_MODE, {
        className: "built_in",
        begin: "\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"
      }, {
        className: "literal",
        begin: "\\b(text item delimiters|current application|missing value)\\b"
      }, {
        className: "keyword",
        begin: "\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference)|POSIX file|POSIX path|(date|time) string|quoted form)\\b"
      }, { beginKeywords: "on", illegal: "[${=;\\n]", contains: [e.UNDERSCORE_TITLE_MODE, n] }].concat(a),
      illegal: "//|->|=>|\\[\\["
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "string", variants: [e.inherit(e.QUOTE_STRING_MODE, {
        begin: '((u8?|U)|L)?"'
      }), { begin: '(u8?|U)?R"', end: '"', contains: [e.BACKSLASH_ESCAPE] }, {
        begin: "'\\\\?.",
        end: "'",
        illegal: "."
      }]
    }, n = {
      className: "meta",
      begin: "#",
      end: "$",
      keywords: { "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef" },
      contains: [{ begin: /\\\n/, relevance: 0 }, {
        beginKeywords: "include",
        end: "$",
        keywords: { "meta-keyword": "include" },
        contains: [e.inherit(t, { className: "meta-string" }), {
          className: "meta-string",
          begin: "<",
          end: ">",
          illegal: "\\n"
        }]
      }, t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    };
    return {
      keywords: {
        "function": "setup loop while catch for if do goto try switch case else default break continue return",
        keyword: "boolean byte word string String array int float private char export virtual operator sizeof uint8_t uint16_t uint32_t uint64_t int8_t int16_t int32_t int64_t dynamic_cast typedef const_cast const struct static_cast union namespace unsigned long volatile static protected bool template mutable public friend auto void enum extern using class asm typeid short reinterpret_cast double register explicit signed typename this inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
        built_in: "KeyboardController MouseController SoftwareSerial EthernetServer EthernetClient LiquidCrystal RobotControl GSMVoiceCall EthernetUDP EsploraTFT HttpClient RobotMotor WiFiClient GSMScanner FileSystem Scheduler GSMServer YunClient YunServer IPAddress GSMClient GSMModem Keyboard Ethernet Console GSMBand Esplora Stepper Process WiFiUDP GSM_SMS Mailbox USBHost Firmata PImage Client Server GSMPIN FileIO Bridge Serial EEPROM Stream Mouse Audio Servo File Task GPRS WiFi Wire TFT GSM SPI SD runShellCommandAsynchronously analogWriteResolution retrieveCallingNumber printFirmwareVersion analogReadResolution sendDigitalPortPair noListenOnLocalhost readJoystickButton setFirmwareVersion readJoystickSwitch scrollDisplayRight getVoiceCallStatus scrollDisplayLeft writeMicroseconds delayMicroseconds beginTransmission getSignalStrength runAsynchronously getAsynchronously listenOnLocalhost getCurrentCarrier readAccelerometer messageAvailable sendDigitalPorts lineFollowConfig countryNameWrite runShellCommand readStringUntil rewindDirectory readTemperature setClockDivider readLightSensor endTransmission analogReference detachInterrupt countryNameRead attachInterrupt encryptionType readBytesUntil robotNameWrite readMicrophone robotNameRead cityNameWrite userNameWrite readJoystickY readJoystickX mouseReleased openNextFile scanNetworks noInterrupts digitalWrite beginSpeaker mousePressed isActionDone mouseDragged displayLogos noAutoscroll addParameter remoteNumber getModifiers keyboardRead userNameRead waitContinue processInput parseCommand printVersion readNetworks writeMessage blinkVersion cityNameRead readMessage setDataMode parsePacket isListening setBitOrder beginPacket isDirectory motorsWrite drawCompass digitalRead clearScreen serialEvent rightToLeft setTextSize leftToRight requestFrom keyReleased compassRead analogWrite interrupts WiFiServer disconnect playMelody parseFloat autoscroll getPINUsed setPINUsed setTimeout sendAnalog readSlider analogRead beginWrite createChar motorsStop keyPressed tempoWrite readButton subnetMask debugPrint macAddress writeGreen randomSeed attachGPRS readString sendString remotePort releaseAll mouseMoved background getXChange getYChange answerCall getResult voiceCall endPacket constrain getSocket writeJSON getButton available connected findUntil readBytes exitValue readGreen writeBlue startLoop IPAddress isPressed sendSysex pauseMode gatewayIP setCursor getOemKey tuneWrite noDisplay loadImage switchPIN onRequest onReceive changePIN playFile noBuffer parseInt overflow checkPIN knobRead beginTFT bitClear updateIR bitWrite position writeRGB highByte writeRed setSpeed readBlue noStroke remoteIP transfer shutdown hangCall beginSMS endWrite attached maintain noCursor checkReg checkPUK shiftOut isValid shiftIn pulseIn connect println localIP pinMode getIMEI display noBlink process getBand running beginSD drawBMP lowByte setBand release bitRead prepare pointTo readRed setMode noFill remove listen stroke detach attach noTone exists buffer height bitSet circle config cursor random IRread setDNS endSMS getKey micros millis begin print write ready flush width isPIN blink clear press mkdir rmdir close point yield image BSSID click delay read text move peek beep rect line open seek fill size turn stop home find step tone sqrt RSSI SSID end bit tan cos sin pow map abs max min get run put",
        symbol: "DIGITAL_MESSAGE FIRMATA_STRING ANALOG_MESSAGE REPORT_DIGITAL REPORT_ANALOG INPUT_PULLUP SET_PIN_MODE INTERNAL2V56 SYSTEM_RESET LED_BUILTIN INTERNAL1V1 SYSEX_START INTERNAL EXTERNAL DEFAULT OUTPUT INPUT HIGH LOW"
      },
      contains: [n, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      case_insensitive: !0,
      aliases: ["arm"],
      lexemes: "\\.?" + e.IDENT_RE,
      keywords: {
        meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ",
        built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @"
      },
      contains: [{
        className: "keyword",
        begin: "\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?",
        end: "\\s"
      }, e.COMMENT("[;@]", "$", { relevance: 0 }), e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "[^\\\\]'",
        relevance: 0
      }, { className: "title", begin: "\\|", end: "\\|", illegal: "\\n", relevance: 0 }, {
        className: "number",
        variants: [{ begin: "[#$=]?0x[0-9a-f]+" }, { begin: "[#$=]?0b[01]+" }, { begin: "[#$=]\\d+" }, { begin: "\\b\\d+" }],
        relevance: 0
      }, {
        className: "symbol",
        variants: [{ begin: "^[a-z_\\.\\$][a-z0-9_\\.\\$]+" }, { begin: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:" }, { begin: "[=#]\\w+" }],
        relevance: 0
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["adoc"],
      contains: [e.COMMENT("^/{4,}\\n", "\\n/{4,}$", { relevance: 10 }), e.COMMENT("^//", "$", { relevance: 0 }), {
        className: "title",
        begin: "^\\.\\w.*$"
      }, { begin: "^[=\\*]{4,}\\n", end: "\\n^[=\\*]{4,}$", relevance: 10 }, {
        className: "section",
        relevance: 10,
        variants: [{ begin: "^(={1,5}) .+?( \\1)?$" }, { begin: "^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$" }]
      }, { className: "meta", begin: "^:.+?:", end: "\\s", excludeEnd: !0, relevance: 10 }, {
        className: "meta",
        begin: "^\\[.+?\\]$",
        relevance: 0
      }, { className: "quote", begin: "^_{4,}\\n", end: "\\n_{4,}$", relevance: 10 }, {
        className: "code",
        begin: "^[\\-\\.]{4,}\\n",
        end: "\\n[\\-\\.]{4,}$",
        relevance: 10
      }, {
        begin: "^\\+{4,}\\n",
        end: "\\n\\+{4,}$",
        contains: [{ begin: "<", end: ">", subLanguage: "xml", relevance: 0 }],
        relevance: 10
      }, { className: "bullet", begin: "^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+" }, {
        className: "symbol",
        begin: "^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",
        relevance: 10
      }, {
        className: "strong",
        begin: "\\B\\*(?![\\*\\s])",
        end: "(\\n{2}|\\*)",
        contains: [{ begin: "\\\\*\\w", relevance: 0 }]
      }, {
        className: "emphasis",
        begin: "\\B'(?!['\\s])",
        end: "(\\n{2}|')",
        contains: [{ begin: "\\\\'\\w", relevance: 0 }],
        relevance: 0
      }, { className: "emphasis", begin: "_(?![_\\s])", end: "(\\n{2}|_)", relevance: 0 }, {
        className: "string",
        variants: [{ begin: "``.+?''" }, { begin: "`.+?'" }]
      }, { className: "code", begin: "(`.+?`|\\+.+?\\+)", relevance: 0 }, {
        className: "code",
        begin: "^[ \\t]",
        end: "$",
        relevance: 0
      }, { begin: "^'{3,}[ \\t]*$", relevance: 10 }, {
        begin: "(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]",
        returnBegin: !0,
        contains: [{ begin: "(link|image:?):", relevance: 0 }, {
          className: "link",
          begin: "\\w",
          end: "[^\\[]+",
          relevance: 0
        }, { className: "string", begin: "\\[", end: "\\]", excludeBegin: !0, excludeEnd: !0, relevance: 0 }],
        relevance: 10
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance", n = "get set args call";
    return {
      keywords: t,
      illegal: /<\/|#/,
      contains: [e.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{ begin: /\w+@/, relevance: 0 }, { className: "doctag", begin: "@[A-Za-z]+" }]
      }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
        className: "class",
        beginKeywords: "aspect",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:;"\[\]]/,
        contains: [{ beginKeywords: "extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton" }, e.UNDERSCORE_TITLE_MODE, {
          begin: /\([^\)]*/,
          end: /[)]+/,
          keywords: t + " " + n,
          excludeEnd: !1
        }]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: /[{;=]/,
        excludeEnd: !0,
        relevance: 0,
        keywords: "class interface",
        illegal: /[:"\[\]]/,
        contains: [{ beginKeywords: "extends implements" }, e.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "pointcut after before around throwing returning",
        end: /[)]/,
        excludeEnd: !1,
        illegal: /["\[\]]/,
        contains: [{ begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(", returnBegin: !0, contains: [e.UNDERSCORE_TITLE_MODE] }]
      }, {
        begin: /[:]/,
        returnBegin: !0,
        end: /[{;]/,
        relevance: 0,
        excludeEnd: !1,
        keywords: t,
        illegal: /["\[\]]/,
        contains: [{ begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(", keywords: t + " " + n }, e.QUOTE_STRING_MODE]
      }, { beginKeywords: "new throw", relevance: 0 }, {
        className: "function",
        begin: /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
        returnBegin: !0,
        end: /[{;=]/,
        keywords: t,
        excludeEnd: !0,
        contains: [{
          begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          relevance: 0,
          contains: [e.UNDERSCORE_TITLE_MODE]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          relevance: 0,
          keywords: t,
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, e.C_NUMBER_MODE, { className: "meta", begin: "@[A-Za-z]+" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { begin: /`[\s\S]/ };
    return {
      case_insensitive: !0,
      keywords: {
        keyword: "Break Continue Else Gosub If Loop Return While",
        literal: "A|0 true false NOT AND OR",
        built_in: "ComSpec Clipboard ClipboardAll ErrorLevel"
      },
      contains: [{
        className: "built_in",
        begin: "A_[a-zA-Z0-9]+"
      }, t, e.inherit(e.QUOTE_STRING_MODE, { contains: [t] }), e.COMMENT(";", "$", { relevance: 0 }), {
        className: "number",
        begin: e.NUMBER_RE,
        relevance: 0
      }, { className: "variable", begin: "%", end: "%", illegal: "\\n", contains: [t] }, {
        className: "symbol",
        contains: [t],
        variants: [{ begin: '^[^\\n";]+::(?!=)' }, { begin: '^[^\\n";]+:(?!=)', relevance: 0 }]
      }, { begin: ",\\s*," }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "ByRef Case Const ContinueCase ContinueLoop Default Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With", n = "True False And Null Not Or", r = "Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Opt Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown TCPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend UDPShutdown UDPStartup VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait WinWaitActive WinWaitClose WinWaitNotActive Array1DToHistogram ArrayAdd ArrayBinarySearch ArrayColDelete ArrayColInsert ArrayCombinations ArrayConcatenate ArrayDelete ArrayDisplay ArrayExtract ArrayFindAll ArrayInsert ArrayMax ArrayMaxIndex ArrayMin ArrayMinIndex ArrayPermute ArrayPop ArrayPush ArrayReverse ArraySearch ArrayShuffle ArraySort ArraySwap ArrayToClip ArrayToString ArrayTranspose ArrayTrim ArrayUnique Assert ChooseColor ChooseFont ClipBoard_ChangeChain ClipBoard_Close ClipBoard_CountFormats ClipBoard_Empty ClipBoard_EnumFormats ClipBoard_FormatStr ClipBoard_GetData ClipBoard_GetDataEx ClipBoard_GetFormatName ClipBoard_GetOpenWindow ClipBoard_GetOwner ClipBoard_GetPriorityFormat ClipBoard_GetSequenceNumber ClipBoard_GetViewer ClipBoard_IsFormatAvailable ClipBoard_Open ClipBoard_RegisterFormat ClipBoard_SetData ClipBoard_SetDataEx ClipBoard_SetViewer ClipPutFile ColorConvertHSLtoRGB ColorConvertRGBtoHSL ColorGetBlue ColorGetCOLORREF ColorGetGreen ColorGetRed ColorGetRGB ColorSetCOLORREF ColorSetRGB Crypt_DecryptData Crypt_DecryptFile Crypt_DeriveKey Crypt_DestroyKey Crypt_EncryptData Crypt_EncryptFile Crypt_GenRandom Crypt_HashData Crypt_HashFile Crypt_Shutdown Crypt_Startup DateAdd DateDayOfWeek DateDaysInMonth DateDiff DateIsLeapYear DateIsValid DateTimeFormat DateTimeSplit DateToDayOfWeek DateToDayOfWeekISO DateToDayValue DateToMonth Date_Time_CompareFileTime Date_Time_DOSDateTimeToArray Date_Time_DOSDateTimeToFileTime Date_Time_DOSDateTimeToStr Date_Time_DOSDateToArray Date_Time_DOSDateToStr Date_Time_DOSTimeToArray Date_Time_DOSTimeToStr Date_Time_EncodeFileTime Date_Time_EncodeSystemTime Date_Time_FileTimeToArray Date_Time_FileTimeToDOSDateTime Date_Time_FileTimeToLocalFileTime Date_Time_FileTimeToStr Date_Time_FileTimeToSystemTime Date_Time_GetFileTime Date_Time_GetLocalTime Date_Time_GetSystemTime Date_Time_GetSystemTimeAdjustment Date_Time_GetSystemTimeAsFileTime Date_Time_GetSystemTimes Date_Time_GetTickCount Date_Time_GetTimeZoneInformation Date_Time_LocalFileTimeToFileTime Date_Time_SetFileTime Date_Time_SetLocalTime Date_Time_SetSystemTime Date_Time_SetSystemTimeAdjustment Date_Time_SetTimeZoneInformation Date_Time_SystemTimeToArray Date_Time_SystemTimeToDateStr Date_Time_SystemTimeToDateTimeStr Date_Time_SystemTimeToFileTime Date_Time_SystemTimeToTimeStr Date_Time_SystemTimeToTzSpecificLocalTime Date_Time_TzSpecificLocalTimeToSystemTime DayValueToDate DebugBugReportEnv DebugCOMError DebugOut DebugReport DebugReportEx DebugReportVar DebugSetup Degree EventLog__Backup EventLog__Clear EventLog__Close EventLog__Count EventLog__DeregisterSource EventLog__Full EventLog__Notify EventLog__Oldest EventLog__Open EventLog__OpenBackup EventLog__Read EventLog__RegisterSource EventLog__Report Excel_BookAttach Excel_BookClose Excel_BookList Excel_BookNew Excel_BookOpen Excel_BookOpenText Excel_BookSave Excel_BookSaveAs Excel_Close Excel_ColumnToLetter Excel_ColumnToNumber Excel_ConvertFormula Excel_Export Excel_FilterGet Excel_FilterSet Excel_Open Excel_PictureAdd Excel_Print Excel_RangeCopyPaste Excel_RangeDelete Excel_RangeFind Excel_RangeInsert Excel_RangeLinkAddRemove Excel_RangeRead Excel_RangeReplace Excel_RangeSort Excel_RangeValidate Excel_RangeWrite Excel_SheetAdd Excel_SheetCopyMove Excel_SheetDelete Excel_SheetList FileCountLines FileCreate FileListToArray FileListToArrayRec FilePrint FileReadToArray FileWriteFromArray FileWriteLog FileWriteToLine FTP_Close FTP_Command FTP_Connect FTP_DecodeInternetStatus FTP_DirCreate FTP_DirDelete FTP_DirGetCurrent FTP_DirPutContents FTP_DirSetCurrent FTP_FileClose FTP_FileDelete FTP_FileGet FTP_FileGetSize FTP_FileOpen FTP_FilePut FTP_FileRead FTP_FileRename FTP_FileTimeLoHiToStr FTP_FindFileClose FTP_FindFileFirst FTP_FindFileNext FTP_GetLastResponseInfo FTP_ListToArray FTP_ListToArray2D FTP_ListToArrayEx FTP_Open FTP_ProgressDownload FTP_ProgressUpload FTP_SetStatusCallback GDIPlus_ArrowCapCreate GDIPlus_ArrowCapDispose GDIPlus_ArrowCapGetFillState GDIPlus_ArrowCapGetHeight GDIPlus_ArrowCapGetMiddleInset GDIPlus_ArrowCapGetWidth GDIPlus_ArrowCapSetFillState GDIPlus_ArrowCapSetHeight GDIPlus_ArrowCapSetMiddleInset GDIPlus_ArrowCapSetWidth GDIPlus_BitmapApplyEffect GDIPlus_BitmapApplyEffectEx GDIPlus_BitmapCloneArea GDIPlus_BitmapConvertFormat GDIPlus_BitmapCreateApplyEffect GDIPlus_BitmapCreateApplyEffectEx GDIPlus_BitmapCreateDIBFromBitmap GDIPlus_BitmapCreateFromFile GDIPlus_BitmapCreateFromGraphics GDIPlus_BitmapCreateFromHBITMAP GDIPlus_BitmapCreateFromHICON GDIPlus_BitmapCreateFromHICON32 GDIPlus_BitmapCreateFromMemory GDIPlus_BitmapCreateFromResource GDIPlus_BitmapCreateFromScan0 GDIPlus_BitmapCreateFromStream GDIPlus_BitmapCreateHBITMAPFromBitmap GDIPlus_BitmapDispose GDIPlus_BitmapGetHistogram GDIPlus_BitmapGetHistogramEx GDIPlus_BitmapGetHistogramSize GDIPlus_BitmapGetPixel GDIPlus_BitmapLockBits GDIPlus_BitmapSetPixel GDIPlus_BitmapUnlockBits GDIPlus_BrushClone GDIPlus_BrushCreateSolid GDIPlus_BrushDispose GDIPlus_BrushGetSolidColor GDIPlus_BrushGetType GDIPlus_BrushSetSolidColor GDIPlus_ColorMatrixCreate GDIPlus_ColorMatrixCreateGrayScale GDIPlus_ColorMatrixCreateNegative GDIPlus_ColorMatrixCreateSaturation GDIPlus_ColorMatrixCreateScale GDIPlus_ColorMatrixCreateTranslate GDIPlus_CustomLineCapClone GDIPlus_CustomLineCapCreate GDIPlus_CustomLineCapDispose GDIPlus_CustomLineCapGetStrokeCaps GDIPlus_CustomLineCapSetStrokeCaps GDIPlus_Decoders GDIPlus_DecodersGetCount GDIPlus_DecodersGetSize GDIPlus_DrawImageFX GDIPlus_DrawImageFXEx GDIPlus_DrawImagePoints GDIPlus_EffectCreate GDIPlus_EffectCreateBlur GDIPlus_EffectCreateBrightnessContrast GDIPlus_EffectCreateColorBalance GDIPlus_EffectCreateColorCurve GDIPlus_EffectCreateColorLUT GDIPlus_EffectCreateColorMatrix GDIPlus_EffectCreateHueSaturationLightness GDIPlus_EffectCreateLevels GDIPlus_EffectCreateRedEyeCorrection GDIPlus_EffectCreateSharpen GDIPlus_EffectCreateTint GDIPlus_EffectDispose GDIPlus_EffectGetParameters GDIPlus_EffectSetParameters GDIPlus_Encoders GDIPlus_EncodersGetCLSID GDIPlus_EncodersGetCount GDIPlus_EncodersGetParamList GDIPlus_EncodersGetParamListSize GDIPlus_EncodersGetSize GDIPlus_FontCreate GDIPlus_FontDispose GDIPlus_FontFamilyCreate GDIPlus_FontFamilyCreateFromCollection GDIPlus_FontFamilyDispose GDIPlus_FontFamilyGetCellAscent GDIPlus_FontFamilyGetCellDescent GDIPlus_FontFamilyGetEmHeight GDIPlus_FontFamilyGetLineSpacing GDIPlus_FontGetHeight GDIPlus_FontPrivateAddFont GDIPlus_FontPrivateAddMemoryFont GDIPlus_FontPrivateCollectionDispose GDIPlus_FontPrivateCreateCollection GDIPlus_GraphicsClear GDIPlus_GraphicsCreateFromHDC GDIPlus_GraphicsCreateFromHWND GDIPlus_GraphicsDispose GDIPlus_GraphicsDrawArc GDIPlus_GraphicsDrawBezier GDIPlus_GraphicsDrawClosedCurve GDIPlus_GraphicsDrawClosedCurve2 GDIPlus_GraphicsDrawCurve GDIPlus_GraphicsDrawCurve2 GDIPlus_GraphicsDrawEllipse GDIPlus_GraphicsDrawImage GDIPlus_GraphicsDrawImagePointsRect GDIPlus_GraphicsDrawImageRect GDIPlus_GraphicsDrawImageRectRect GDIPlus_GraphicsDrawLine GDIPlus_GraphicsDrawPath GDIPlus_GraphicsDrawPie GDIPlus_GraphicsDrawPolygon GDIPlus_GraphicsDrawRect GDIPlus_GraphicsDrawString GDIPlus_GraphicsDrawStringEx GDIPlus_GraphicsFillClosedCurve GDIPlus_GraphicsFillClosedCurve2 GDIPlus_GraphicsFillEllipse GDIPlus_GraphicsFillPath GDIPlus_GraphicsFillPie GDIPlus_GraphicsFillPolygon GDIPlus_GraphicsFillRect GDIPlus_GraphicsFillRegion GDIPlus_GraphicsGetCompositingMode GDIPlus_GraphicsGetCompositingQuality GDIPlus_GraphicsGetDC GDIPlus_GraphicsGetInterpolationMode GDIPlus_GraphicsGetSmoothingMode GDIPlus_GraphicsGetTransform GDIPlus_GraphicsMeasureCharacterRanges GDIPlus_GraphicsMeasureString GDIPlus_GraphicsReleaseDC GDIPlus_GraphicsResetClip GDIPlus_GraphicsResetTransform GDIPlus_GraphicsRestore GDIPlus_GraphicsRotateTransform GDIPlus_GraphicsSave GDIPlus_GraphicsScaleTransform GDIPlus_GraphicsSetClipPath GDIPlus_GraphicsSetClipRect GDIPlus_GraphicsSetClipRegion GDIPlus_GraphicsSetCompositingMode GDIPlus_GraphicsSetCompositingQuality GDIPlus_GraphicsSetInterpolationMode GDIPlus_GraphicsSetPixelOffsetMode GDIPlus_GraphicsSetSmoothingMode GDIPlus_GraphicsSetTextRenderingHint GDIPlus_GraphicsSetTransform GDIPlus_GraphicsTransformPoints GDIPlus_GraphicsTranslateTransform GDIPlus_HatchBrushCreate GDIPlus_HICONCreateFromBitmap GDIPlus_ImageAttributesCreate GDIPlus_ImageAttributesDispose GDIPlus_ImageAttributesSetColorKeys GDIPlus_ImageAttributesSetColorMatrix GDIPlus_ImageDispose GDIPlus_ImageGetDimension GDIPlus_ImageGetFlags GDIPlus_ImageGetGraphicsContext GDIPlus_ImageGetHeight GDIPlus_ImageGetHorizontalResolution GDIPlus_ImageGetPixelFormat GDIPlus_ImageGetRawFormat GDIPlus_ImageGetThumbnail GDIPlus_ImageGetType GDIPlus_ImageGetVerticalResolution GDIPlus_ImageGetWidth GDIPlus_ImageLoadFromFile GDIPlus_ImageLoadFromStream GDIPlus_ImageResize GDIPlus_ImageRotateFlip GDIPlus_ImageSaveToFile GDIPlus_ImageSaveToFileEx GDIPlus_ImageSaveToStream GDIPlus_ImageScale GDIPlus_LineBrushCreate GDIPlus_LineBrushCreateFromRect GDIPlus_LineBrushCreateFromRectWithAngle GDIPlus_LineBrushGetColors GDIPlus_LineBrushGetRect GDIPlus_LineBrushMultiplyTransform GDIPlus_LineBrushResetTransform GDIPlus_LineBrushSetBlend GDIPlus_LineBrushSetColors GDIPlus_LineBrushSetGammaCorrection GDIPlus_LineBrushSetLinearBlend GDIPlus_LineBrushSetPresetBlend GDIPlus_LineBrushSetSigmaBlend GDIPlus_LineBrushSetTransform GDIPlus_MatrixClone GDIPlus_MatrixCreate GDIPlus_MatrixDispose GDIPlus_MatrixGetElements GDIPlus_MatrixInvert GDIPlus_MatrixMultiply GDIPlus_MatrixRotate GDIPlus_MatrixScale GDIPlus_MatrixSetElements GDIPlus_MatrixShear GDIPlus_MatrixTransformPoints GDIPlus_MatrixTranslate GDIPlus_PaletteInitialize GDIPlus_ParamAdd GDIPlus_ParamInit GDIPlus_ParamSize GDIPlus_PathAddArc GDIPlus_PathAddBezier GDIPlus_PathAddClosedCurve GDIPlus_PathAddClosedCurve2 GDIPlus_PathAddCurve GDIPlus_PathAddCurve2 GDIPlus_PathAddCurve3 GDIPlus_PathAddEllipse GDIPlus_PathAddLine GDIPlus_PathAddLine2 GDIPlus_PathAddPath GDIPlus_PathAddPie GDIPlus_PathAddPolygon GDIPlus_PathAddRectangle GDIPlus_PathAddString GDIPlus_PathBrushCreate GDIPlus_PathBrushCreateFromPath GDIPlus_PathBrushGetCenterPoint GDIPlus_PathBrushGetFocusScales GDIPlus_PathBrushGetPointCount GDIPlus_PathBrushGetRect GDIPlus_PathBrushGetWrapMode GDIPlus_PathBrushMultiplyTransform GDIPlus_PathBrushResetTransform GDIPlus_PathBrushSetBlend GDIPlus_PathBrushSetCenterColor GDIPlus_PathBrushSetCenterPoint GDIPlus_PathBrushSetFocusScales GDIPlus_PathBrushSetGammaCorrection GDIPlus_PathBrushSetLinearBlend GDIPlus_PathBrushSetPresetBlend GDIPlus_PathBrushSetSigmaBlend GDIPlus_PathBrushSetSurroundColor GDIPlus_PathBrushSetSurroundColorsWithCount GDIPlus_PathBrushSetTransform GDIPlus_PathBrushSetWrapMode GDIPlus_PathClone GDIPlus_PathCloseFigure GDIPlus_PathCreate GDIPlus_PathCreate2 GDIPlus_PathDispose GDIPlus_PathFlatten GDIPlus_PathGetData GDIPlus_PathGetFillMode GDIPlus_PathGetLastPoint GDIPlus_PathGetPointCount GDIPlus_PathGetPoints GDIPlus_PathGetWorldBounds GDIPlus_PathIsOutlineVisiblePoint GDIPlus_PathIsVisiblePoint GDIPlus_PathIterCreate GDIPlus_PathIterDispose GDIPlus_PathIterGetSubpathCount GDIPlus_PathIterNextMarkerPath GDIPlus_PathIterNextSubpathPath GDIPlus_PathIterRewind GDIPlus_PathReset GDIPlus_PathReverse GDIPlus_PathSetFillMode GDIPlus_PathSetMarker GDIPlus_PathStartFigure GDIPlus_PathTransform GDIPlus_PathWarp GDIPlus_PathWiden GDIPlus_PathWindingModeOutline GDIPlus_PenCreate GDIPlus_PenCreate2 GDIPlus_PenDispose GDIPlus_PenGetAlignment GDIPlus_PenGetColor GDIPlus_PenGetCustomEndCap GDIPlus_PenGetDashCap GDIPlus_PenGetDashStyle GDIPlus_PenGetEndCap GDIPlus_PenGetMiterLimit GDIPlus_PenGetWidth GDIPlus_PenSetAlignment GDIPlus_PenSetColor GDIPlus_PenSetCustomEndCap GDIPlus_PenSetDashCap GDIPlus_PenSetDashStyle GDIPlus_PenSetEndCap GDIPlus_PenSetLineCap GDIPlus_PenSetLineJoin GDIPlus_PenSetMiterLimit GDIPlus_PenSetStartCap GDIPlus_PenSetWidth GDIPlus_RectFCreate GDIPlus_RegionClone GDIPlus_RegionCombinePath GDIPlus_RegionCombineRect GDIPlus_RegionCombineRegion GDIPlus_RegionCreate GDIPlus_RegionCreateFromPath GDIPlus_RegionCreateFromRect GDIPlus_RegionDispose GDIPlus_RegionGetBounds GDIPlus_RegionGetHRgn GDIPlus_RegionTransform GDIPlus_RegionTranslate GDIPlus_Shutdown GDIPlus_Startup GDIPlus_StringFormatCreate GDIPlus_StringFormatDispose GDIPlus_StringFormatGetMeasurableCharacterRangeCount GDIPlus_StringFormatSetAlign GDIPlus_StringFormatSetLineAlign GDIPlus_StringFormatSetMeasurableCharacterRanges GDIPlus_TextureCreate GDIPlus_TextureCreate2 GDIPlus_TextureCreateIA GetIP GUICtrlAVI_Close GUICtrlAVI_Create GUICtrlAVI_Destroy GUICtrlAVI_IsPlaying GUICtrlAVI_Open GUICtrlAVI_OpenEx GUICtrlAVI_Play GUICtrlAVI_Seek GUICtrlAVI_Show GUICtrlAVI_Stop GUICtrlButton_Click GUICtrlButton_Create GUICtrlButton_Destroy GUICtrlButton_Enable GUICtrlButton_GetCheck GUICtrlButton_GetFocus GUICtrlButton_GetIdealSize GUICtrlButton_GetImage GUICtrlButton_GetImageList GUICtrlButton_GetNote GUICtrlButton_GetNoteLength GUICtrlButton_GetSplitInfo GUICtrlButton_GetState GUICtrlButton_GetText GUICtrlButton_GetTextMargin GUICtrlButton_SetCheck GUICtrlButton_SetDontClick GUICtrlButton_SetFocus GUICtrlButton_SetImage GUICtrlButton_SetImageList GUICtrlButton_SetNote GUICtrlButton_SetShield GUICtrlButton_SetSize GUICtrlButton_SetSplitInfo GUICtrlButton_SetState GUICtrlButton_SetStyle GUICtrlButton_SetText GUICtrlButton_SetTextMargin GUICtrlButton_Show GUICtrlComboBoxEx_AddDir GUICtrlComboBoxEx_AddString GUICtrlComboBoxEx_BeginUpdate GUICtrlComboBoxEx_Create GUICtrlComboBoxEx_CreateSolidBitMap GUICtrlComboBoxEx_DeleteString GUICtrlComboBoxEx_Destroy GUICtrlComboBoxEx_EndUpdate GUICtrlComboBoxEx_FindStringExact GUICtrlComboBoxEx_GetComboBoxInfo GUICtrlComboBoxEx_GetComboControl GUICtrlComboBoxEx_GetCount GUICtrlComboBoxEx_GetCurSel GUICtrlComboBoxEx_GetDroppedControlRect GUICtrlComboBoxEx_GetDroppedControlRectEx GUICtrlComboBoxEx_GetDroppedState GUICtrlComboBoxEx_GetDroppedWidth GUICtrlComboBoxEx_GetEditControl GUICtrlComboBoxEx_GetEditSel GUICtrlComboBoxEx_GetEditText GUICtrlComboBoxEx_GetExtendedStyle GUICtrlComboBoxEx_GetExtendedUI GUICtrlComboBoxEx_GetImageList GUICtrlComboBoxEx_GetItem GUICtrlComboBoxEx_GetItemEx GUICtrlComboBoxEx_GetItemHeight GUICtrlComboBoxEx_GetItemImage GUICtrlComboBoxEx_GetItemIndent GUICtrlComboBoxEx_GetItemOverlayImage GUICtrlComboBoxEx_GetItemParam GUICtrlComboBoxEx_GetItemSelectedImage GUICtrlComboBoxEx_GetItemText GUICtrlComboBoxEx_GetItemTextLen GUICtrlComboBoxEx_GetList GUICtrlComboBoxEx_GetListArray GUICtrlComboBoxEx_GetLocale GUICtrlComboBoxEx_GetLocaleCountry GUICtrlComboBoxEx_GetLocaleLang GUICtrlComboBoxEx_GetLocalePrimLang GUICtrlComboBoxEx_GetLocaleSubLang GUICtrlComboBoxEx_GetMinVisible GUICtrlComboBoxEx_GetTopIndex GUICtrlComboBoxEx_GetUnicode GUICtrlComboBoxEx_InitStorage GUICtrlComboBoxEx_InsertString GUICtrlComboBoxEx_LimitText GUICtrlComboBoxEx_ReplaceEditSel GUICtrlComboBoxEx_ResetContent GUICtrlComboBoxEx_SetCurSel GUICtrlComboBoxEx_SetDroppedWidth GUICtrlComboBoxEx_SetEditSel GUICtrlComboBoxEx_SetEditText GUICtrlComboBoxEx_SetExtendedStyle GUICtrlComboBoxEx_SetExtendedUI GUICtrlComboBoxEx_SetImageList GUICtrlComboBoxEx_SetItem GUICtrlComboBoxEx_SetItemEx GUICtrlComboBoxEx_SetItemHeight GUICtrlComboBoxEx_SetItemImage GUICtrlComboBoxEx_SetItemIndent GUICtrlComboBoxEx_SetItemOverlayImage GUICtrlComboBoxEx_SetItemParam GUICtrlComboBoxEx_SetItemSelectedImage GUICtrlComboBoxEx_SetMinVisible GUICtrlComboBoxEx_SetTopIndex GUICtrlComboBoxEx_SetUnicode GUICtrlComboBoxEx_ShowDropDown GUICtrlComboBox_AddDir GUICtrlComboBox_AddString GUICtrlComboBox_AutoComplete GUICtrlComboBox_BeginUpdate GUICtrlComboBox_Create GUICtrlComboBox_DeleteString GUICtrlComboBox_Destroy GUICtrlComboBox_EndUpdate GUICtrlComboBox_FindString GUICtrlComboBox_FindStringExact GUICtrlComboBox_GetComboBoxInfo GUICtrlComboBox_GetCount GUICtrlComboBox_GetCueBanner GUICtrlComboBox_GetCurSel GUICtrlComboBox_GetDroppedControlRect GUICtrlComboBox_GetDroppedControlRectEx GUICtrlComboBox_GetDroppedState GUICtrlComboBox_GetDroppedWidth GUICtrlComboBox_GetEditSel GUICtrlComboBox_GetEditText GUICtrlComboBox_GetExtendedUI GUICtrlComboBox_GetHorizontalExtent GUICtrlComboBox_GetItemHeight GUICtrlComboBox_GetLBText GUICtrlComboBox_GetLBTextLen GUICtrlComboBox_GetList GUICtrlComboBox_GetListArray GUICtrlComboBox_GetLocale GUICtrlComboBox_GetLocaleCountry GUICtrlComboBox_GetLocaleLang GUICtrlComboBox_GetLocalePrimLang GUICtrlComboBox_GetLocaleSubLang GUICtrlComboBox_GetMinVisible GUICtrlComboBox_GetTopIndex GUICtrlComboBox_InitStorage GUICtrlComboBox_InsertString GUICtrlComboBox_LimitText GUICtrlComboBox_ReplaceEditSel GUICtrlComboBox_ResetContent GUICtrlComboBox_SelectString GUICtrlComboBox_SetCueBanner GUICtrlComboBox_SetCurSel GUICtrlComboBox_SetDroppedWidth GUICtrlComboBox_SetEditSel GUICtrlComboBox_SetEditText GUICtrlComboBox_SetExtendedUI GUICtrlComboBox_SetHorizontalExtent GUICtrlComboBox_SetItemHeight GUICtrlComboBox_SetMinVisible GUICtrlComboBox_SetTopIndex GUICtrlComboBox_ShowDropDown GUICtrlDTP_Create GUICtrlDTP_Destroy GUICtrlDTP_GetMCColor GUICtrlDTP_GetMCFont GUICtrlDTP_GetMonthCal GUICtrlDTP_GetRange GUICtrlDTP_GetRangeEx GUICtrlDTP_GetSystemTime GUICtrlDTP_GetSystemTimeEx GUICtrlDTP_SetFormat GUICtrlDTP_SetMCColor GUICtrlDTP_SetMCFont GUICtrlDTP_SetRange GUICtrlDTP_SetRangeEx GUICtrlDTP_SetSystemTime GUICtrlDTP_SetSystemTimeEx GUICtrlEdit_AppendText GUICtrlEdit_BeginUpdate GUICtrlEdit_CanUndo GUICtrlEdit_CharFromPos GUICtrlEdit_Create GUICtrlEdit_Destroy GUICtrlEdit_EmptyUndoBuffer GUICtrlEdit_EndUpdate GUICtrlEdit_Find GUICtrlEdit_FmtLines GUICtrlEdit_GetCueBanner GUICtrlEdit_GetFirstVisibleLine GUICtrlEdit_GetLimitText GUICtrlEdit_GetLine GUICtrlEdit_GetLineCount GUICtrlEdit_GetMargins GUICtrlEdit_GetModify GUICtrlEdit_GetPasswordChar GUICtrlEdit_GetRECT GUICtrlEdit_GetRECTEx GUICtrlEdit_GetSel GUICtrlEdit_GetText GUICtrlEdit_GetTextLen GUICtrlEdit_HideBalloonTip GUICtrlEdit_InsertText GUICtrlEdit_LineFromChar GUICtrlEdit_LineIndex GUICtrlEdit_LineLength GUICtrlEdit_LineScroll GUICtrlEdit_PosFromChar GUICtrlEdit_ReplaceSel GUICtrlEdit_Scroll GUICtrlEdit_SetCueBanner GUICtrlEdit_SetLimitText GUICtrlEdit_SetMargins GUICtrlEdit_SetModify GUICtrlEdit_SetPasswordChar GUICtrlEdit_SetReadOnly GUICtrlEdit_SetRECT GUICtrlEdit_SetRECTEx GUICtrlEdit_SetRECTNP GUICtrlEdit_SetRectNPEx GUICtrlEdit_SetSel GUICtrlEdit_SetTabStops GUICtrlEdit_SetText GUICtrlEdit_ShowBalloonTip GUICtrlEdit_Undo GUICtrlHeader_AddItem GUICtrlHeader_ClearFilter GUICtrlHeader_ClearFilterAll GUICtrlHeader_Create GUICtrlHeader_CreateDragImage GUICtrlHeader_DeleteItem GUICtrlHeader_Destroy GUICtrlHeader_EditFilter GUICtrlHeader_GetBitmapMargin GUICtrlHeader_GetImageList GUICtrlHeader_GetItem GUICtrlHeader_GetItemAlign GUICtrlHeader_GetItemBitmap GUICtrlHeader_GetItemCount GUICtrlHeader_GetItemDisplay GUICtrlHeader_GetItemFlags GUICtrlHeader_GetItemFormat GUICtrlHeader_GetItemImage GUICtrlHeader_GetItemOrder GUICtrlHeader_GetItemParam GUICtrlHeader_GetItemRect GUICtrlHeader_GetItemRectEx GUICtrlHeader_GetItemText GUICtrlHeader_GetItemWidth GUICtrlHeader_GetOrderArray GUICtrlHeader_GetUnicodeFormat GUICtrlHeader_HitTest GUICtrlHeader_InsertItem GUICtrlHeader_Layout GUICtrlHeader_OrderToIndex GUICtrlHeader_SetBitmapMargin GUICtrlHeader_SetFilterChangeTimeout GUICtrlHeader_SetHotDivider GUICtrlHeader_SetImageList GUICtrlHeader_SetItem GUICtrlHeader_SetItemAlign GUICtrlHeader_SetItemBitmap GUICtrlHeader_SetItemDisplay GUICtrlHeader_SetItemFlags GUICtrlHeader_SetItemFormat GUICtrlHeader_SetItemImage GUICtrlHeader_SetItemOrder GUICtrlHeader_SetItemParam GUICtrlHeader_SetItemText GUICtrlHeader_SetItemWidth GUICtrlHeader_SetOrderArray GUICtrlHeader_SetUnicodeFormat GUICtrlIpAddress_ClearAddress GUICtrlIpAddress_Create GUICtrlIpAddress_Destroy GUICtrlIpAddress_Get GUICtrlIpAddress_GetArray GUICtrlIpAddress_GetEx GUICtrlIpAddress_IsBlank GUICtrlIpAddress_Set GUICtrlIpAddress_SetArray GUICtrlIpAddress_SetEx GUICtrlIpAddress_SetFocus GUICtrlIpAddress_SetFont GUICtrlIpAddress_SetRange GUICtrlIpAddress_ShowHide GUICtrlListBox_AddFile GUICtrlListBox_AddString GUICtrlListBox_BeginUpdate GUICtrlListBox_ClickItem GUICtrlListBox_Create GUICtrlListBox_DeleteString GUICtrlListBox_Destroy GUICtrlListBox_Dir GUICtrlListBox_EndUpdate GUICtrlListBox_FindInText GUICtrlListBox_FindString GUICtrlListBox_GetAnchorIndex GUICtrlListBox_GetCaretIndex GUICtrlListBox_GetCount GUICtrlListBox_GetCurSel GUICtrlListBox_GetHorizontalExtent GUICtrlListBox_GetItemData GUICtrlListBox_GetItemHeight GUICtrlListBox_GetItemRect GUICtrlListBox_GetItemRectEx GUICtrlListBox_GetListBoxInfo GUICtrlListBox_GetLocale GUICtrlListBox_GetLocaleCountry GUICtrlListBox_GetLocaleLang GUICtrlListBox_GetLocalePrimLang GUICtrlListBox_GetLocaleSubLang GUICtrlListBox_GetSel GUICtrlListBox_GetSelCount GUICtrlListBox_GetSelItems GUICtrlListBox_GetSelItemsText GUICtrlListBox_GetText GUICtrlListBox_GetTextLen GUICtrlListBox_GetTopIndex GUICtrlListBox_InitStorage GUICtrlListBox_InsertString GUICtrlListBox_ItemFromPoint GUICtrlListBox_ReplaceString GUICtrlListBox_ResetContent GUICtrlListBox_SelectString GUICtrlListBox_SelItemRange GUICtrlListBox_SelItemRangeEx GUICtrlListBox_SetAnchorIndex GUICtrlListBox_SetCaretIndex GUICtrlListBox_SetColumnWidth GUICtrlListBox_SetCurSel GUICtrlListBox_SetHorizontalExtent GUICtrlListBox_SetItemData GUICtrlListBox_SetItemHeight GUICtrlListBox_SetLocale GUICtrlListBox_SetSel GUICtrlListBox_SetTabStops GUICtrlListBox_SetTopIndex GUICtrlListBox_Sort GUICtrlListBox_SwapString GUICtrlListBox_UpdateHScroll GUICtrlListView_AddArray GUICtrlListView_AddColumn GUICtrlListView_AddItem GUICtrlListView_AddSubItem GUICtrlListView_ApproximateViewHeight GUICtrlListView_ApproximateViewRect GUICtrlListView_ApproximateViewWidth GUICtrlListView_Arrange GUICtrlListView_BeginUpdate GUICtrlListView_CancelEditLabel GUICtrlListView_ClickItem GUICtrlListView_CopyItems GUICtrlListView_Create GUICtrlListView_CreateDragImage GUICtrlListView_CreateSolidBitMap GUICtrlListView_DeleteAllItems GUICtrlListView_DeleteColumn GUICtrlListView_DeleteItem GUICtrlListView_DeleteItemsSelected GUICtrlListView_Destroy GUICtrlListView_DrawDragImage GUICtrlListView_EditLabel GUICtrlListView_EnableGroupView GUICtrlListView_EndUpdate GUICtrlListView_EnsureVisible GUICtrlListView_FindInText GUICtrlListView_FindItem GUICtrlListView_FindNearest GUICtrlListView_FindParam GUICtrlListView_FindText GUICtrlListView_GetBkColor GUICtrlListView_GetBkImage GUICtrlListView_GetCallbackMask GUICtrlListView_GetColumn GUICtrlListView_GetColumnCount GUICtrlListView_GetColumnOrder GUICtrlListView_GetColumnOrderArray GUICtrlListView_GetColumnWidth GUICtrlListView_GetCounterPage GUICtrlListView_GetEditControl GUICtrlListView_GetExtendedListViewStyle GUICtrlListView_GetFocusedGroup GUICtrlListView_GetGroupCount GUICtrlListView_GetGroupInfo GUICtrlListView_GetGroupInfoByIndex GUICtrlListView_GetGroupRect GUICtrlListView_GetGroupViewEnabled GUICtrlListView_GetHeader GUICtrlListView_GetHotCursor GUICtrlListView_GetHotItem GUICtrlListView_GetHoverTime GUICtrlListView_GetImageList GUICtrlListView_GetISearchString GUICtrlListView_GetItem GUICtrlListView_GetItemChecked GUICtrlListView_GetItemCount GUICtrlListView_GetItemCut GUICtrlListView_GetItemDropHilited GUICtrlListView_GetItemEx GUICtrlListView_GetItemFocused GUICtrlListView_GetItemGroupID GUICtrlListView_GetItemImage GUICtrlListView_GetItemIndent GUICtrlListView_GetItemParam GUICtrlListView_GetItemPosition GUICtrlListView_GetItemPositionX GUICtrlListView_GetItemPositionY GUICtrlListView_GetItemRect GUICtrlListView_GetItemRectEx GUICtrlListView_GetItemSelected GUICtrlListView_GetItemSpacing GUICtrlListView_GetItemSpacingX GUICtrlListView_GetItemSpacingY GUICtrlListView_GetItemState GUICtrlListView_GetItemStateImage GUICtrlListView_GetItemText GUICtrlListView_GetItemTextArray GUICtrlListView_GetItemTextString GUICtrlListView_GetNextItem GUICtrlListView_GetNumberOfWorkAreas GUICtrlListView_GetOrigin GUICtrlListView_GetOriginX GUICtrlListView_GetOriginY GUICtrlListView_GetOutlineColor GUICtrlListView_GetSelectedColumn GUICtrlListView_GetSelectedCount GUICtrlListView_GetSelectedIndices GUICtrlListView_GetSelectionMark GUICtrlListView_GetStringWidth GUICtrlListView_GetSubItemRect GUICtrlListView_GetTextBkColor GUICtrlListView_GetTextColor GUICtrlListView_GetToolTips GUICtrlListView_GetTopIndex GUICtrlListView_GetUnicodeFormat GUICtrlListView_GetView GUICtrlListView_GetViewDetails GUICtrlListView_GetViewLarge GUICtrlListView_GetViewList GUICtrlListView_GetViewRect GUICtrlListView_GetViewSmall GUICtrlListView_GetViewTile GUICtrlListView_HideColumn GUICtrlListView_HitTest GUICtrlListView_InsertColumn GUICtrlListView_InsertGroup GUICtrlListView_InsertItem GUICtrlListView_JustifyColumn GUICtrlListView_MapIDToIndex GUICtrlListView_MapIndexToID GUICtrlListView_RedrawItems GUICtrlListView_RegisterSortCallBack GUICtrlListView_RemoveAllGroups GUICtrlListView_RemoveGroup GUICtrlListView_Scroll GUICtrlListView_SetBkColor GUICtrlListView_SetBkImage GUICtrlListView_SetCallBackMask GUICtrlListView_SetColumn GUICtrlListView_SetColumnOrder GUICtrlListView_SetColumnOrderArray GUICtrlListView_SetColumnWidth GUICtrlListView_SetExtendedListViewStyle GUICtrlListView_SetGroupInfo GUICtrlListView_SetHotItem GUICtrlListView_SetHoverTime GUICtrlListView_SetIconSpacing GUICtrlListView_SetImageList GUICtrlListView_SetItem GUICtrlListView_SetItemChecked GUICtrlListView_SetItemCount GUICtrlListView_SetItemCut GUICtrlListView_SetItemDropHilited GUICtrlListView_SetItemEx GUICtrlListView_SetItemFocused GUICtrlListView_SetItemGroupID GUICtrlListView_SetItemImage GUICtrlListView_SetItemIndent GUICtrlListView_SetItemParam GUICtrlListView_SetItemPosition GUICtrlListView_SetItemPosition32 GUICtrlListView_SetItemSelected GUICtrlListView_SetItemState GUICtrlListView_SetItemStateImage GUICtrlListView_SetItemText GUICtrlListView_SetOutlineColor GUICtrlListView_SetSelectedColumn GUICtrlListView_SetSelectionMark GUICtrlListView_SetTextBkColor GUICtrlListView_SetTextColor GUICtrlListView_SetToolTips GUICtrlListView_SetUnicodeFormat GUICtrlListView_SetView GUICtrlListView_SetWorkAreas GUICtrlListView_SimpleSort GUICtrlListView_SortItems GUICtrlListView_SubItemHitTest GUICtrlListView_UnRegisterSortCallBack GUICtrlMenu_AddMenuItem GUICtrlMenu_AppendMenu GUICtrlMenu_CalculatePopupWindowPosition GUICtrlMenu_CheckMenuItem GUICtrlMenu_CheckRadioItem GUICtrlMenu_CreateMenu GUICtrlMenu_CreatePopup GUICtrlMenu_DeleteMenu GUICtrlMenu_DestroyMenu GUICtrlMenu_DrawMenuBar GUICtrlMenu_EnableMenuItem GUICtrlMenu_FindItem GUICtrlMenu_FindParent GUICtrlMenu_GetItemBmp GUICtrlMenu_GetItemBmpChecked GUICtrlMenu_GetItemBmpUnchecked GUICtrlMenu_GetItemChecked GUICtrlMenu_GetItemCount GUICtrlMenu_GetItemData GUICtrlMenu_GetItemDefault GUICtrlMenu_GetItemDisabled GUICtrlMenu_GetItemEnabled GUICtrlMenu_GetItemGrayed GUICtrlMenu_GetItemHighlighted GUICtrlMenu_GetItemID GUICtrlMenu_GetItemInfo GUICtrlMenu_GetItemRect GUICtrlMenu_GetItemRectEx GUICtrlMenu_GetItemState GUICtrlMenu_GetItemStateEx GUICtrlMenu_GetItemSubMenu GUICtrlMenu_GetItemText GUICtrlMenu_GetItemType GUICtrlMenu_GetMenu GUICtrlMenu_GetMenuBackground GUICtrlMenu_GetMenuBarInfo GUICtrlMenu_GetMenuContextHelpID GUICtrlMenu_GetMenuData GUICtrlMenu_GetMenuDefaultItem GUICtrlMenu_GetMenuHeight GUICtrlMenu_GetMenuInfo GUICtrlMenu_GetMenuStyle GUICtrlMenu_GetSystemMenu GUICtrlMenu_InsertMenuItem GUICtrlMenu_InsertMenuItemEx GUICtrlMenu_IsMenu GUICtrlMenu_LoadMenu GUICtrlMenu_MapAccelerator GUICtrlMenu_MenuItemFromPoint GUICtrlMenu_RemoveMenu GUICtrlMenu_SetItemBitmaps GUICtrlMenu_SetItemBmp GUICtrlMenu_SetItemBmpChecked GUICtrlMenu_SetItemBmpUnchecked GUICtrlMenu_SetItemChecked GUICtrlMenu_SetItemData GUICtrlMenu_SetItemDefault GUICtrlMenu_SetItemDisabled GUICtrlMenu_SetItemEnabled GUICtrlMenu_SetItemGrayed GUICtrlMenu_SetItemHighlighted GUICtrlMenu_SetItemID GUICtrlMenu_SetItemInfo GUICtrlMenu_SetItemState GUICtrlMenu_SetItemSubMenu GUICtrlMenu_SetItemText GUICtrlMenu_SetItemType GUICtrlMenu_SetMenu GUICtrlMenu_SetMenuBackground GUICtrlMenu_SetMenuContextHelpID GUICtrlMenu_SetMenuData GUICtrlMenu_SetMenuDefaultItem GUICtrlMenu_SetMenuHeight GUICtrlMenu_SetMenuInfo GUICtrlMenu_SetMenuStyle GUICtrlMenu_TrackPopupMenu GUICtrlMonthCal_Create GUICtrlMonthCal_Destroy GUICtrlMonthCal_GetCalendarBorder GUICtrlMonthCal_GetCalendarCount GUICtrlMonthCal_GetColor GUICtrlMonthCal_GetColorArray GUICtrlMonthCal_GetCurSel GUICtrlMonthCal_GetCurSelStr GUICtrlMonthCal_GetFirstDOW GUICtrlMonthCal_GetFirstDOWStr GUICtrlMonthCal_GetMaxSelCount GUICtrlMonthCal_GetMaxTodayWidth GUICtrlMonthCal_GetMinReqHeight GUICtrlMonthCal_GetMinReqRect GUICtrlMonthCal_GetMinReqRectArray GUICtrlMonthCal_GetMinReqWidth GUICtrlMonthCal_GetMonthDelta GUICtrlMonthCal_GetMonthRange GUICtrlMonthCal_GetMonthRangeMax GUICtrlMonthCal_GetMonthRangeMaxStr GUICtrlMonthCal_GetMonthRangeMin GUICtrlMonthCal_GetMonthRangeMinStr GUICtrlMonthCal_GetMonthRangeSpan GUICtrlMonthCal_GetRange GUICtrlMonthCal_GetRangeMax GUICtrlMonthCal_GetRangeMaxStr GUICtrlMonthCal_GetRangeMin GUICtrlMonthCal_GetRangeMinStr GUICtrlMonthCal_GetSelRange GUICtrlMonthCal_GetSelRangeMax GUICtrlMonthCal_GetSelRangeMaxStr GUICtrlMonthCal_GetSelRangeMin GUICtrlMonthCal_GetSelRangeMinStr GUICtrlMonthCal_GetToday GUICtrlMonthCal_GetTodayStr GUICtrlMonthCal_GetUnicodeFormat GUICtrlMonthCal_HitTest GUICtrlMonthCal_SetCalendarBorder GUICtrlMonthCal_SetColor GUICtrlMonthCal_SetCurSel GUICtrlMonthCal_SetDayState GUICtrlMonthCal_SetFirstDOW GUICtrlMonthCal_SetMaxSelCount GUICtrlMonthCal_SetMonthDelta GUICtrlMonthCal_SetRange GUICtrlMonthCal_SetSelRange GUICtrlMonthCal_SetToday GUICtrlMonthCal_SetUnicodeFormat GUICtrlRebar_AddBand GUICtrlRebar_AddToolBarBand GUICtrlRebar_BeginDrag GUICtrlRebar_Create GUICtrlRebar_DeleteBand GUICtrlRebar_Destroy GUICtrlRebar_DragMove GUICtrlRebar_EndDrag GUICtrlRebar_GetBandBackColor GUICtrlRebar_GetBandBorders GUICtrlRebar_GetBandBordersEx GUICtrlRebar_GetBandChildHandle GUICtrlRebar_GetBandChildSize GUICtrlRebar_GetBandCount GUICtrlRebar_GetBandForeColor GUICtrlRebar_GetBandHeaderSize GUICtrlRebar_GetBandID GUICtrlRebar_GetBandIdealSize GUICtrlRebar_GetBandLength GUICtrlRebar_GetBandLParam GUICtrlRebar_GetBandMargins GUICtrlRebar_GetBandMarginsEx GUICtrlRebar_GetBandRect GUICtrlRebar_GetBandRectEx GUICtrlRebar_GetBandStyle GUICtrlRebar_GetBandStyleBreak GUICtrlRebar_GetBandStyleChildEdge GUICtrlRebar_GetBandStyleFixedBMP GUICtrlRebar_GetBandStyleFixedSize GUICtrlRebar_GetBandStyleGripperAlways GUICtrlRebar_GetBandStyleHidden GUICtrlRebar_GetBandStyleHideTitle GUICtrlRebar_GetBandStyleNoGripper GUICtrlRebar_GetBandStyleTopAlign GUICtrlRebar_GetBandStyleUseChevron GUICtrlRebar_GetBandStyleVariableHeight GUICtrlRebar_GetBandText GUICtrlRebar_GetBarHeight GUICtrlRebar_GetBarInfo GUICtrlRebar_GetBKColor GUICtrlRebar_GetColorScheme GUICtrlRebar_GetRowCount GUICtrlRebar_GetRowHeight GUICtrlRebar_GetTextColor GUICtrlRebar_GetToolTips GUICtrlRebar_GetUnicodeFormat GUICtrlRebar_HitTest GUICtrlRebar_IDToIndex GUICtrlRebar_MaximizeBand GUICtrlRebar_MinimizeBand GUICtrlRebar_MoveBand GUICtrlRebar_SetBandBackColor GUICtrlRebar_SetBandForeColor GUICtrlRebar_SetBandHeaderSize GUICtrlRebar_SetBandID GUICtrlRebar_SetBandIdealSize GUICtrlRebar_SetBandLength GUICtrlRebar_SetBandLParam GUICtrlRebar_SetBandStyle GUICtrlRebar_SetBandStyleBreak GUICtrlRebar_SetBandStyleChildEdge GUICtrlRebar_SetBandStyleFixedBMP GUICtrlRebar_SetBandStyleFixedSize GUICtrlRebar_SetBandStyleGripperAlways GUICtrlRebar_SetBandStyleHidden GUICtrlRebar_SetBandStyleHideTitle GUICtrlRebar_SetBandStyleNoGripper GUICtrlRebar_SetBandStyleTopAlign GUICtrlRebar_SetBandStyleUseChevron GUICtrlRebar_SetBandStyleVariableHeight GUICtrlRebar_SetBandText GUICtrlRebar_SetBarInfo GUICtrlRebar_SetBKColor GUICtrlRebar_SetColorScheme GUICtrlRebar_SetTextColor GUICtrlRebar_SetToolTips GUICtrlRebar_SetUnicodeFormat GUICtrlRebar_ShowBand GUICtrlRichEdit_AppendText GUICtrlRichEdit_AutoDetectURL GUICtrlRichEdit_CanPaste GUICtrlRichEdit_CanPasteSpecial GUICtrlRichEdit_CanRedo GUICtrlRichEdit_CanUndo GUICtrlRichEdit_ChangeFontSize GUICtrlRichEdit_Copy GUICtrlRichEdit_Create GUICtrlRichEdit_Cut GUICtrlRichEdit_Deselect GUICtrlRichEdit_Destroy GUICtrlRichEdit_EmptyUndoBuffer GUICtrlRichEdit_FindText GUICtrlRichEdit_FindTextInRange GUICtrlRichEdit_GetBkColor GUICtrlRichEdit_GetCharAttributes GUICtrlRichEdit_GetCharBkColor GUICtrlRichEdit_GetCharColor GUICtrlRichEdit_GetCharPosFromXY GUICtrlRichEdit_GetCharPosOfNextWord GUICtrlRichEdit_GetCharPosOfPreviousWord GUICtrlRichEdit_GetCharWordBreakInfo GUICtrlRichEdit_GetFirstCharPosOnLine GUICtrlRichEdit_GetFont GUICtrlRichEdit_GetLineCount GUICtrlRichEdit_GetLineLength GUICtrlRichEdit_GetLineNumberFromCharPos GUICtrlRichEdit_GetNextRedo GUICtrlRichEdit_GetNextUndo GUICtrlRichEdit_GetNumberOfFirstVisibleLine GUICtrlRichEdit_GetParaAlignment GUICtrlRichEdit_GetParaAttributes GUICtrlRichEdit_GetParaBorder GUICtrlRichEdit_GetParaIndents GUICtrlRichEdit_GetParaNumbering GUICtrlRichEdit_GetParaShading GUICtrlRichEdit_GetParaSpacing GUICtrlRichEdit_GetParaTabStops GUICtrlRichEdit_GetPasswordChar GUICtrlRichEdit_GetRECT GUICtrlRichEdit_GetScrollPos GUICtrlRichEdit_GetSel GUICtrlRichEdit_GetSelAA GUICtrlRichEdit_GetSelText GUICtrlRichEdit_GetSpaceUnit GUICtrlRichEdit_GetText GUICtrlRichEdit_GetTextInLine GUICtrlRichEdit_GetTextInRange GUICtrlRichEdit_GetTextLength GUICtrlRichEdit_GetVersion GUICtrlRichEdit_GetXYFromCharPos GUICtrlRichEdit_GetZoom GUICtrlRichEdit_GotoCharPos GUICtrlRichEdit_HideSelection GUICtrlRichEdit_InsertText GUICtrlRichEdit_IsModified GUICtrlRichEdit_IsTextSelected GUICtrlRichEdit_Paste GUICtrlRichEdit_PasteSpecial GUICtrlRichEdit_PauseRedraw GUICtrlRichEdit_Redo GUICtrlRichEdit_ReplaceText GUICtrlRichEdit_ResumeRedraw GUICtrlRichEdit_ScrollLineOrPage GUICtrlRichEdit_ScrollLines GUICtrlRichEdit_ScrollToCaret GUICtrlRichEdit_SetBkColor GUICtrlRichEdit_SetCharAttributes GUICtrlRichEdit_SetCharBkColor GUICtrlRichEdit_SetCharColor GUICtrlRichEdit_SetEventMask GUICtrlRichEdit_SetFont GUICtrlRichEdit_SetLimitOnText GUICtrlRichEdit_SetModified GUICtrlRichEdit_SetParaAlignment GUICtrlRichEdit_SetParaAttributes GUICtrlRichEdit_SetParaBorder GUICtrlRichEdit_SetParaIndents GUICtrlRichEdit_SetParaNumbering GUICtrlRichEdit_SetParaShading GUICtrlRichEdit_SetParaSpacing GUICtrlRichEdit_SetParaTabStops GUICtrlRichEdit_SetPasswordChar GUICtrlRichEdit_SetReadOnly GUICtrlRichEdit_SetRECT GUICtrlRichEdit_SetScrollPos GUICtrlRichEdit_SetSel GUICtrlRichEdit_SetSpaceUnit GUICtrlRichEdit_SetTabStops GUICtrlRichEdit_SetText GUICtrlRichEdit_SetUndoLimit GUICtrlRichEdit_SetZoom GUICtrlRichEdit_StreamFromFile GUICtrlRichEdit_StreamFromVar GUICtrlRichEdit_StreamToFile GUICtrlRichEdit_StreamToVar GUICtrlRichEdit_Undo GUICtrlSlider_ClearSel GUICtrlSlider_ClearTics GUICtrlSlider_Create GUICtrlSlider_Destroy GUICtrlSlider_GetBuddy GUICtrlSlider_GetChannelRect GUICtrlSlider_GetChannelRectEx GUICtrlSlider_GetLineSize GUICtrlSlider_GetLogicalTics GUICtrlSlider_GetNumTics GUICtrlSlider_GetPageSize GUICtrlSlider_GetPos GUICtrlSlider_GetRange GUICtrlSlider_GetRangeMax GUICtrlSlider_GetRangeMin GUICtrlSlider_GetSel GUICtrlSlider_GetSelEnd GUICtrlSlider_GetSelStart GUICtrlSlider_GetThumbLength GUICtrlSlider_GetThumbRect GUICtrlSlider_GetThumbRectEx GUICtrlSlider_GetTic GUICtrlSlider_GetTicPos GUICtrlSlider_GetToolTips GUICtrlSlider_GetUnicodeFormat GUICtrlSlider_SetBuddy GUICtrlSlider_SetLineSize GUICtrlSlider_SetPageSize GUICtrlSlider_SetPos GUICtrlSlider_SetRange GUICtrlSlider_SetRangeMax GUICtrlSlider_SetRangeMin GUICtrlSlider_SetSel GUICtrlSlider_SetSelEnd GUICtrlSlider_SetSelStart GUICtrlSlider_SetThumbLength GUICtrlSlider_SetTic GUICtrlSlider_SetTicFreq GUICtrlSlider_SetTipSide GUICtrlSlider_SetToolTips GUICtrlSlider_SetUnicodeFormat GUICtrlStatusBar_Create GUICtrlStatusBar_Destroy GUICtrlStatusBar_EmbedControl GUICtrlStatusBar_GetBorders GUICtrlStatusBar_GetBordersHorz GUICtrlStatusBar_GetBordersRect GUICtrlStatusBar_GetBordersVert GUICtrlStatusBar_GetCount GUICtrlStatusBar_GetHeight GUICtrlStatusBar_GetIcon GUICtrlStatusBar_GetParts GUICtrlStatusBar_GetRect GUICtrlStatusBar_GetRectEx GUICtrlStatusBar_GetText GUICtrlStatusBar_GetTextFlags GUICtrlStatusBar_GetTextLength GUICtrlStatusBar_GetTextLengthEx GUICtrlStatusBar_GetTipText GUICtrlStatusBar_GetUnicodeFormat GUICtrlStatusBar_GetWidth GUICtrlStatusBar_IsSimple GUICtrlStatusBar_Resize GUICtrlStatusBar_SetBkColor GUICtrlStatusBar_SetIcon GUICtrlStatusBar_SetMinHeight GUICtrlStatusBar_SetParts GUICtrlStatusBar_SetSimple GUICtrlStatusBar_SetText GUICtrlStatusBar_SetTipText GUICtrlStatusBar_SetUnicodeFormat GUICtrlStatusBar_ShowHide GUICtrlTab_ActivateTab GUICtrlTab_ClickTab GUICtrlTab_Create GUICtrlTab_DeleteAllItems GUICtrlTab_DeleteItem GUICtrlTab_DeselectAll GUICtrlTab_Destroy GUICtrlTab_FindTab GUICtrlTab_GetCurFocus GUICtrlTab_GetCurSel GUICtrlTab_GetDisplayRect GUICtrlTab_GetDisplayRectEx GUICtrlTab_GetExtendedStyle GUICtrlTab_GetImageList GUICtrlTab_GetItem GUICtrlTab_GetItemCount GUICtrlTab_GetItemImage GUICtrlTab_GetItemParam GUICtrlTab_GetItemRect GUICtrlTab_GetItemRectEx GUICtrlTab_GetItemState GUICtrlTab_GetItemText GUICtrlTab_GetRowCount GUICtrlTab_GetToolTips GUICtrlTab_GetUnicodeFormat GUICtrlTab_HighlightItem GUICtrlTab_HitTest GUICtrlTab_InsertItem GUICtrlTab_RemoveImage GUICtrlTab_SetCurFocus GUICtrlTab_SetCurSel GUICtrlTab_SetExtendedStyle GUICtrlTab_SetImageList GUICtrlTab_SetItem GUICtrlTab_SetItemImage GUICtrlTab_SetItemParam GUICtrlTab_SetItemSize GUICtrlTab_SetItemState GUICtrlTab_SetItemText GUICtrlTab_SetMinTabWidth GUICtrlTab_SetPadding GUICtrlTab_SetToolTips GUICtrlTab_SetUnicodeFormat GUICtrlToolbar_AddBitmap GUICtrlToolbar_AddButton GUICtrlToolbar_AddButtonSep GUICtrlToolbar_AddString GUICtrlToolbar_ButtonCount GUICtrlToolbar_CheckButton GUICtrlToolbar_ClickAccel GUICtrlToolbar_ClickButton GUICtrlToolbar_ClickIndex GUICtrlToolbar_CommandToIndex GUICtrlToolbar_Create GUICtrlToolbar_Customize GUICtrlToolbar_DeleteButton GUICtrlToolbar_Destroy GUICtrlToolbar_EnableButton GUICtrlToolbar_FindToolbar GUICtrlToolbar_GetAnchorHighlight GUICtrlToolbar_GetBitmapFlags GUICtrlToolbar_GetButtonBitmap GUICtrlToolbar_GetButtonInfo GUICtrlToolbar_GetButtonInfoEx GUICtrlToolbar_GetButtonParam GUICtrlToolbar_GetButtonRect GUICtrlToolbar_GetButtonRectEx GUICtrlToolbar_GetButtonSize GUICtrlToolbar_GetButtonState GUICtrlToolbar_GetButtonStyle GUICtrlToolbar_GetButtonText GUICtrlToolbar_GetColorScheme GUICtrlToolbar_GetDisabledImageList GUICtrlToolbar_GetExtendedStyle GUICtrlToolbar_GetHotImageList GUICtrlToolbar_GetHotItem GUICtrlToolbar_GetImageList GUICtrlToolbar_GetInsertMark GUICtrlToolbar_GetInsertMarkColor GUICtrlToolbar_GetMaxSize GUICtrlToolbar_GetMetrics GUICtrlToolbar_GetPadding GUICtrlToolbar_GetRows GUICtrlToolbar_GetString GUICtrlToolbar_GetStyle GUICtrlToolbar_GetStyleAltDrag GUICtrlToolbar_GetStyleCustomErase GUICtrlToolbar_GetStyleFlat GUICtrlToolbar_GetStyleList GUICtrlToolbar_GetStyleRegisterDrop GUICtrlToolbar_GetStyleToolTips GUICtrlToolbar_GetStyleTransparent GUICtrlToolbar_GetStyleWrapable GUICtrlToolbar_GetTextRows GUICtrlToolbar_GetToolTips GUICtrlToolbar_GetUnicodeFormat GUICtrlToolbar_HideButton GUICtrlToolbar_HighlightButton GUICtrlToolbar_HitTest GUICtrlToolbar_IndexToCommand GUICtrlToolbar_InsertButton GUICtrlToolbar_InsertMarkHitTest GUICtrlToolbar_IsButtonChecked GUICtrlToolbar_IsButtonEnabled GUICtrlToolbar_IsButtonHidden GUICtrlToolbar_IsButtonHighlighted GUICtrlToolbar_IsButtonIndeterminate GUICtrlToolbar_IsButtonPressed GUICtrlToolbar_LoadBitmap GUICtrlToolbar_LoadImages GUICtrlToolbar_MapAccelerator GUICtrlToolbar_MoveButton GUICtrlToolbar_PressButton GUICtrlToolbar_SetAnchorHighlight GUICtrlToolbar_SetBitmapSize GUICtrlToolbar_SetButtonBitMap GUICtrlToolbar_SetButtonInfo GUICtrlToolbar_SetButtonInfoEx GUICtrlToolbar_SetButtonParam GUICtrlToolbar_SetButtonSize GUICtrlToolbar_SetButtonState GUICtrlToolbar_SetButtonStyle GUICtrlToolbar_SetButtonText GUICtrlToolbar_SetButtonWidth GUICtrlToolbar_SetCmdID GUICtrlToolbar_SetColorScheme GUICtrlToolbar_SetDisabledImageList GUICtrlToolbar_SetDrawTextFlags GUICtrlToolbar_SetExtendedStyle GUICtrlToolbar_SetHotImageList GUICtrlToolbar_SetHotItem GUICtrlToolbar_SetImageList GUICtrlToolbar_SetIndent GUICtrlToolbar_SetIndeterminate GUICtrlToolbar_SetInsertMark GUICtrlToolbar_SetInsertMarkColor GUICtrlToolbar_SetMaxTextRows GUICtrlToolbar_SetMetrics GUICtrlToolbar_SetPadding GUICtrlToolbar_SetParent GUICtrlToolbar_SetRows GUICtrlToolbar_SetStyle GUICtrlToolbar_SetStyleAltDrag GUICtrlToolbar_SetStyleCustomErase GUICtrlToolbar_SetStyleFlat GUICtrlToolbar_SetStyleList GUICtrlToolbar_SetStyleRegisterDrop GUICtrlToolbar_SetStyleToolTips GUICtrlToolbar_SetStyleTransparent GUICtrlToolbar_SetStyleWrapable GUICtrlToolbar_SetToolTips GUICtrlToolbar_SetUnicodeFormat GUICtrlToolbar_SetWindowTheme GUICtrlTreeView_Add GUICtrlTreeView_AddChild GUICtrlTreeView_AddChildFirst GUICtrlTreeView_AddFirst GUICtrlTreeView_BeginUpdate GUICtrlTreeView_ClickItem GUICtrlTreeView_Create GUICtrlTreeView_CreateDragImage GUICtrlTreeView_CreateSolidBitMap GUICtrlTreeView_Delete GUICtrlTreeView_DeleteAll GUICtrlTreeView_DeleteChildren GUICtrlTreeView_Destroy GUICtrlTreeView_DisplayRect GUICtrlTreeView_DisplayRectEx GUICtrlTreeView_EditText GUICtrlTreeView_EndEdit GUICtrlTreeView_EndUpdate GUICtrlTreeView_EnsureVisible GUICtrlTreeView_Expand GUICtrlTreeView_ExpandedOnce GUICtrlTreeView_FindItem GUICtrlTreeView_FindItemEx GUICtrlTreeView_GetBkColor GUICtrlTreeView_GetBold GUICtrlTreeView_GetChecked GUICtrlTreeView_GetChildCount GUICtrlTreeView_GetChildren GUICtrlTreeView_GetCount GUICtrlTreeView_GetCut GUICtrlTreeView_GetDropTarget GUICtrlTreeView_GetEditControl GUICtrlTreeView_GetExpanded GUICtrlTreeView_GetFirstChild GUICtrlTreeView_GetFirstItem GUICtrlTreeView_GetFirstVisible GUICtrlTreeView_GetFocused GUICtrlTreeView_GetHeight GUICtrlTreeView_GetImageIndex GUICtrlTreeView_GetImageListIconHandle GUICtrlTreeView_GetIndent GUICtrlTreeView_GetInsertMarkColor GUICtrlTreeView_GetISearchString GUICtrlTreeView_GetItemByIndex GUICtrlTreeView_GetItemHandle GUICtrlTreeView_GetItemParam GUICtrlTreeView_GetLastChild GUICtrlTreeView_GetLineColor GUICtrlTreeView_GetNext GUICtrlTreeView_GetNextChild GUICtrlTreeView_GetNextSibling GUICtrlTreeView_GetNextVisible GUICtrlTreeView_GetNormalImageList GUICtrlTreeView_GetParentHandle GUICtrlTreeView_GetParentParam GUICtrlTreeView_GetPrev GUICtrlTreeView_GetPrevChild GUICtrlTreeView_GetPrevSibling GUICtrlTreeView_GetPrevVisible GUICtrlTreeView_GetScrollTime GUICtrlTreeView_GetSelected GUICtrlTreeView_GetSelectedImageIndex GUICtrlTreeView_GetSelection GUICtrlTreeView_GetSiblingCount GUICtrlTreeView_GetState GUICtrlTreeView_GetStateImageIndex GUICtrlTreeView_GetStateImageList GUICtrlTreeView_GetText GUICtrlTreeView_GetTextColor GUICtrlTreeView_GetToolTips GUICtrlTreeView_GetTree GUICtrlTreeView_GetUnicodeFormat GUICtrlTreeView_GetVisible GUICtrlTreeView_GetVisibleCount GUICtrlTreeView_HitTest GUICtrlTreeView_HitTestEx GUICtrlTreeView_HitTestItem GUICtrlTreeView_Index GUICtrlTreeView_InsertItem GUICtrlTreeView_IsFirstItem GUICtrlTreeView_IsParent GUICtrlTreeView_Level GUICtrlTreeView_SelectItem GUICtrlTreeView_SelectItemByIndex GUICtrlTreeView_SetBkColor GUICtrlTreeView_SetBold GUICtrlTreeView_SetChecked GUICtrlTreeView_SetCheckedByIndex GUICtrlTreeView_SetChildren GUICtrlTreeView_SetCut GUICtrlTreeView_SetDropTarget GUICtrlTreeView_SetFocused GUICtrlTreeView_SetHeight GUICtrlTreeView_SetIcon GUICtrlTreeView_SetImageIndex GUICtrlTreeView_SetIndent GUICtrlTreeView_SetInsertMark GUICtrlTreeView_SetInsertMarkColor GUICtrlTreeView_SetItemHeight GUICtrlTreeView_SetItemParam GUICtrlTreeView_SetLineColor GUICtrlTreeView_SetNormalImageList GUICtrlTreeView_SetScrollTime GUICtrlTreeView_SetSelected GUICtrlTreeView_SetSelectedImageIndex GUICtrlTreeView_SetState GUICtrlTreeView_SetStateImageIndex GUICtrlTreeView_SetStateImageList GUICtrlTreeView_SetText GUICtrlTreeView_SetTextColor GUICtrlTreeView_SetToolTips GUICtrlTreeView_SetUnicodeFormat GUICtrlTreeView_Sort GUIImageList_Add GUIImageList_AddBitmap GUIImageList_AddIcon GUIImageList_AddMasked GUIImageList_BeginDrag GUIImageList_Copy GUIImageList_Create GUIImageList_Destroy GUIImageList_DestroyIcon GUIImageList_DragEnter GUIImageList_DragLeave GUIImageList_DragMove GUIImageList_Draw GUIImageList_DrawEx GUIImageList_Duplicate GUIImageList_EndDrag GUIImageList_GetBkColor GUIImageList_GetIcon GUIImageList_GetIconHeight GUIImageList_GetIconSize GUIImageList_GetIconSizeEx GUIImageList_GetIconWidth GUIImageList_GetImageCount GUIImageList_GetImageInfoEx GUIImageList_Remove GUIImageList_ReplaceIcon GUIImageList_SetBkColor GUIImageList_SetIconSize GUIImageList_SetImageCount GUIImageList_Swap GUIScrollBars_EnableScrollBar GUIScrollBars_GetScrollBarInfoEx GUIScrollBars_GetScrollBarRect GUIScrollBars_GetScrollBarRGState GUIScrollBars_GetScrollBarXYLineButton GUIScrollBars_GetScrollBarXYThumbBottom GUIScrollBars_GetScrollBarXYThumbTop GUIScrollBars_GetScrollInfo GUIScrollBars_GetScrollInfoEx GUIScrollBars_GetScrollInfoMax GUIScrollBars_GetScrollInfoMin GUIScrollBars_GetScrollInfoPage GUIScrollBars_GetScrollInfoPos GUIScrollBars_GetScrollInfoTrackPos GUIScrollBars_GetScrollPos GUIScrollBars_GetScrollRange GUIScrollBars_Init GUIScrollBars_ScrollWindow GUIScrollBars_SetScrollInfo GUIScrollBars_SetScrollInfoMax GUIScrollBars_SetScrollInfoMin GUIScrollBars_SetScrollInfoPage GUIScrollBars_SetScrollInfoPos GUIScrollBars_SetScrollRange GUIScrollBars_ShowScrollBar GUIToolTip_Activate GUIToolTip_AddTool GUIToolTip_AdjustRect GUIToolTip_BitsToTTF GUIToolTip_Create GUIToolTip_Deactivate GUIToolTip_DelTool GUIToolTip_Destroy GUIToolTip_EnumTools GUIToolTip_GetBubbleHeight GUIToolTip_GetBubbleSize GUIToolTip_GetBubbleWidth GUIToolTip_GetCurrentTool GUIToolTip_GetDelayTime GUIToolTip_GetMargin GUIToolTip_GetMarginEx GUIToolTip_GetMaxTipWidth GUIToolTip_GetText GUIToolTip_GetTipBkColor GUIToolTip_GetTipTextColor GUIToolTip_GetTitleBitMap GUIToolTip_GetTitleText GUIToolTip_GetToolCount GUIToolTip_GetToolInfo GUIToolTip_HitTest GUIToolTip_NewToolRect GUIToolTip_Pop GUIToolTip_PopUp GUIToolTip_SetDelayTime GUIToolTip_SetMargin GUIToolTip_SetMaxTipWidth GUIToolTip_SetTipBkColor GUIToolTip_SetTipTextColor GUIToolTip_SetTitle GUIToolTip_SetToolInfo GUIToolTip_SetWindowTheme GUIToolTip_ToolExists GUIToolTip_ToolToArray GUIToolTip_TrackActivate GUIToolTip_TrackPosition GUIToolTip_Update GUIToolTip_UpdateTipText HexToString IEAction IEAttach IEBodyReadHTML IEBodyReadText IEBodyWriteHTML IECreate IECreateEmbedded IEDocGetObj IEDocInsertHTML IEDocInsertText IEDocReadHTML IEDocWriteHTML IEErrorNotify IEFormElementCheckBoxSelect IEFormElementGetCollection IEFormElementGetObjByName IEFormElementGetValue IEFormElementOptionSelect IEFormElementRadioSelect IEFormElementSetValue IEFormGetCollection IEFormGetObjByName IEFormImageClick IEFormReset IEFormSubmit IEFrameGetCollection IEFrameGetObjByName IEGetObjById IEGetObjByName IEHeadInsertEventScript IEImgClick IEImgGetCollection IEIsFrameSet IELinkClickByIndex IELinkClickByText IELinkGetCollection IELoadWait IELoadWaitTimeout IENavigate IEPropertyGet IEPropertySet IEQuit IETableGetCollection IETableWriteToArray IETagNameAllGetCollection IETagNameGetCollection IE_Example IE_Introduction IE_VersionInfo INetExplorerCapable INetGetSource INetMail INetSmtpMail IsPressed MathCheckDiv Max MemGlobalAlloc MemGlobalFree MemGlobalLock MemGlobalSize MemGlobalUnlock MemMoveMemory MemVirtualAlloc MemVirtualAllocEx MemVirtualFree MemVirtualFreeEx Min MouseTrap NamedPipes_CallNamedPipe NamedPipes_ConnectNamedPipe NamedPipes_CreateNamedPipe NamedPipes_CreatePipe NamedPipes_DisconnectNamedPipe NamedPipes_GetNamedPipeHandleState NamedPipes_GetNamedPipeInfo NamedPipes_PeekNamedPipe NamedPipes_SetNamedPipeHandleState NamedPipes_TransactNamedPipe NamedPipes_WaitNamedPipe Net_Share_ConnectionEnum Net_Share_FileClose Net_Share_FileEnum Net_Share_FileGetInfo Net_Share_PermStr Net_Share_ResourceStr Net_Share_SessionDel Net_Share_SessionEnum Net_Share_SessionGetInfo Net_Share_ShareAdd Net_Share_ShareCheck Net_Share_ShareDel Net_Share_ShareEnum Net_Share_ShareGetInfo Net_Share_ShareSetInfo Net_Share_StatisticsGetSvr Net_Share_StatisticsGetWrk Now NowCalc NowCalcDate NowDate NowTime PathFull PathGetRelative PathMake PathSplit ProcessGetName ProcessGetPriority Radian ReplaceStringInFile RunDos ScreenCapture_Capture ScreenCapture_CaptureWnd ScreenCapture_SaveImage ScreenCapture_SetBMPFormat ScreenCapture_SetJPGQuality ScreenCapture_SetTIFColorDepth ScreenCapture_SetTIFCompression Security__AdjustTokenPrivileges Security__CreateProcessWithToken Security__DuplicateTokenEx Security__GetAccountSid Security__GetLengthSid Security__GetTokenInformation Security__ImpersonateSelf Security__IsValidSid Security__LookupAccountName Security__LookupAccountSid Security__LookupPrivilegeValue Security__OpenProcessToken Security__OpenThreadToken Security__OpenThreadTokenEx Security__SetPrivilege Security__SetTokenInformation Security__SidToStringSid Security__SidTypeStr Security__StringSidToSid SendMessage SendMessageA SetDate SetTime Singleton SoundClose SoundLength SoundOpen SoundPause SoundPlay SoundPos SoundResume SoundSeek SoundStatus SoundStop SQLite_Changes SQLite_Close SQLite_Display2DResult SQLite_Encode SQLite_ErrCode SQLite_ErrMsg SQLite_Escape SQLite_Exec SQLite_FastEncode SQLite_FastEscape SQLite_FetchData SQLite_FetchNames SQLite_GetTable SQLite_GetTable2d SQLite_LastInsertRowID SQLite_LibVersion SQLite_Open SQLite_Query SQLite_QueryFinalize SQLite_QueryReset SQLite_QuerySingleRow SQLite_SafeMode SQLite_SetTimeout SQLite_Shutdown SQLite_SQLiteExe SQLite_Startup SQLite_TotalChanges StringBetween StringExplode StringInsert StringProper StringRepeat StringTitleCase StringToHex TCPIpToName TempFile TicksToTime Timer_Diff Timer_GetIdleTime Timer_GetTimerID Timer_Init Timer_KillAllTimers Timer_KillTimer Timer_SetTimer TimeToTicks VersionCompare viClose viExecCommand viFindGpib viGpibBusReset viGTL viInteractiveControl viOpen viSetAttribute viSetTimeout WeekNumberISO WinAPI_AbortPath WinAPI_ActivateKeyboardLayout WinAPI_AddClipboardFormatListener WinAPI_AddFontMemResourceEx WinAPI_AddFontResourceEx WinAPI_AddIconOverlay WinAPI_AddIconTransparency WinAPI_AddMRUString WinAPI_AdjustBitmap WinAPI_AdjustTokenPrivileges WinAPI_AdjustWindowRectEx WinAPI_AlphaBlend WinAPI_AngleArc WinAPI_AnimateWindow WinAPI_Arc WinAPI_ArcTo WinAPI_ArrayToStruct WinAPI_AssignProcessToJobObject WinAPI_AssocGetPerceivedType WinAPI_AssocQueryString WinAPI_AttachConsole WinAPI_AttachThreadInput WinAPI_BackupRead WinAPI_BackupReadAbort WinAPI_BackupSeek WinAPI_BackupWrite WinAPI_BackupWriteAbort WinAPI_Beep WinAPI_BeginBufferedPaint WinAPI_BeginDeferWindowPos WinAPI_BeginPaint WinAPI_BeginPath WinAPI_BeginUpdateResource WinAPI_BitBlt WinAPI_BringWindowToTop WinAPI_BroadcastSystemMessage WinAPI_BrowseForFolderDlg WinAPI_BufferedPaintClear WinAPI_BufferedPaintInit WinAPI_BufferedPaintSetAlpha WinAPI_BufferedPaintUnInit WinAPI_CallNextHookEx WinAPI_CallWindowProc WinAPI_CallWindowProcW WinAPI_CascadeWindows WinAPI_ChangeWindowMessageFilterEx WinAPI_CharToOem WinAPI_ChildWindowFromPointEx WinAPI_ClientToScreen WinAPI_ClipCursor WinAPI_CloseDesktop WinAPI_CloseEnhMetaFile WinAPI_CloseFigure WinAPI_CloseHandle WinAPI_CloseThemeData WinAPI_CloseWindow WinAPI_CloseWindowStation WinAPI_CLSIDFromProgID WinAPI_CoInitialize WinAPI_ColorAdjustLuma WinAPI_ColorHLSToRGB WinAPI_ColorRGBToHLS WinAPI_CombineRgn WinAPI_CombineTransform WinAPI_CommandLineToArgv WinAPI_CommDlgExtendedError WinAPI_CommDlgExtendedErrorEx WinAPI_CompareString WinAPI_CompressBitmapBits WinAPI_CompressBuffer WinAPI_ComputeCrc32 WinAPI_ConfirmCredentials WinAPI_CopyBitmap WinAPI_CopyCursor WinAPI_CopyEnhMetaFile WinAPI_CopyFileEx WinAPI_CopyIcon WinAPI_CopyImage WinAPI_CopyRect WinAPI_CopyStruct WinAPI_CoTaskMemAlloc WinAPI_CoTaskMemFree WinAPI_CoTaskMemRealloc WinAPI_CoUninitialize WinAPI_Create32BitHBITMAP WinAPI_Create32BitHICON WinAPI_CreateANDBitmap WinAPI_CreateBitmap WinAPI_CreateBitmapIndirect WinAPI_CreateBrushIndirect WinAPI_CreateBuffer WinAPI_CreateBufferFromStruct WinAPI_CreateCaret WinAPI_CreateColorAdjustment WinAPI_CreateCompatibleBitmap WinAPI_CreateCompatibleBitmapEx WinAPI_CreateCompatibleDC WinAPI_CreateDesktop WinAPI_CreateDIB WinAPI_CreateDIBColorTable WinAPI_CreateDIBitmap WinAPI_CreateDIBSection WinAPI_CreateDirectory WinAPI_CreateDirectoryEx WinAPI_CreateEllipticRgn WinAPI_CreateEmptyIcon WinAPI_CreateEnhMetaFile WinAPI_CreateEvent WinAPI_CreateFile WinAPI_CreateFileEx WinAPI_CreateFileMapping WinAPI_CreateFont WinAPI_CreateFontEx WinAPI_CreateFontIndirect WinAPI_CreateGUID WinAPI_CreateHardLink WinAPI_CreateIcon WinAPI_CreateIconFromResourceEx WinAPI_CreateIconIndirect WinAPI_CreateJobObject WinAPI_CreateMargins WinAPI_CreateMRUList WinAPI_CreateMutex WinAPI_CreateNullRgn WinAPI_CreateNumberFormatInfo WinAPI_CreateObjectID WinAPI_CreatePen WinAPI_CreatePoint WinAPI_CreatePolygonRgn WinAPI_CreateProcess WinAPI_CreateProcessWithToken WinAPI_CreateRect WinAPI_CreateRectEx WinAPI_CreateRectRgn WinAPI_CreateRectRgnIndirect WinAPI_CreateRoundRectRgn WinAPI_CreateSemaphore WinAPI_CreateSize WinAPI_CreateSolidBitmap WinAPI_CreateSolidBrush WinAPI_CreateStreamOnHGlobal WinAPI_CreateString WinAPI_CreateSymbolicLink WinAPI_CreateTransform WinAPI_CreateWindowEx WinAPI_CreateWindowStation WinAPI_DecompressBuffer WinAPI_DecryptFile WinAPI_DeferWindowPos WinAPI_DefineDosDevice WinAPI_DefRawInputProc WinAPI_DefSubclassProc WinAPI_DefWindowProc WinAPI_DefWindowProcW WinAPI_DeleteDC WinAPI_DeleteEnhMetaFile WinAPI_DeleteFile WinAPI_DeleteObject WinAPI_DeleteObjectID WinAPI_DeleteVolumeMountPoint WinAPI_DeregisterShellHookWindow WinAPI_DestroyCaret WinAPI_DestroyCursor WinAPI_DestroyIcon WinAPI_DestroyWindow WinAPI_DeviceIoControl WinAPI_DisplayStruct WinAPI_DllGetVersion WinAPI_DllInstall WinAPI_DllUninstall WinAPI_DPtoLP WinAPI_DragAcceptFiles WinAPI_DragFinish WinAPI_DragQueryFileEx WinAPI_DragQueryPoint WinAPI_DrawAnimatedRects WinAPI_DrawBitmap WinAPI_DrawEdge WinAPI_DrawFocusRect WinAPI_DrawFrameControl WinAPI_DrawIcon WinAPI_DrawIconEx WinAPI_DrawLine WinAPI_DrawShadowText WinAPI_DrawText WinAPI_DrawThemeBackground WinAPI_DrawThemeEdge WinAPI_DrawThemeIcon WinAPI_DrawThemeParentBackground WinAPI_DrawThemeText WinAPI_DrawThemeTextEx WinAPI_DuplicateEncryptionInfoFile WinAPI_DuplicateHandle WinAPI_DuplicateTokenEx WinAPI_DwmDefWindowProc WinAPI_DwmEnableBlurBehindWindow WinAPI_DwmEnableComposition WinAPI_DwmExtendFrameIntoClientArea WinAPI_DwmGetColorizationColor WinAPI_DwmGetColorizationParameters WinAPI_DwmGetWindowAttribute WinAPI_DwmInvalidateIconicBitmaps WinAPI_DwmIsCompositionEnabled WinAPI_DwmQueryThumbnailSourceSize WinAPI_DwmRegisterThumbnail WinAPI_DwmSetColorizationParameters WinAPI_DwmSetIconicLivePreviewBitmap WinAPI_DwmSetIconicThumbnail WinAPI_DwmSetWindowAttribute WinAPI_DwmUnregisterThumbnail WinAPI_DwmUpdateThumbnailProperties WinAPI_DWordToFloat WinAPI_DWordToInt WinAPI_EjectMedia WinAPI_Ellipse WinAPI_EmptyWorkingSet WinAPI_EnableWindow WinAPI_EncryptFile WinAPI_EncryptionDisable WinAPI_EndBufferedPaint WinAPI_EndDeferWindowPos WinAPI_EndPaint WinAPI_EndPath WinAPI_EndUpdateResource WinAPI_EnumChildProcess WinAPI_EnumChildWindows WinAPI_EnumDesktops WinAPI_EnumDesktopWindows WinAPI_EnumDeviceDrivers WinAPI_EnumDisplayDevices WinAPI_EnumDisplayMonitors WinAPI_EnumDisplaySettings WinAPI_EnumDllProc WinAPI_EnumFiles WinAPI_EnumFileStreams WinAPI_EnumFontFamilies WinAPI_EnumHardLinks WinAPI_EnumMRUList WinAPI_EnumPageFiles WinAPI_EnumProcessHandles WinAPI_EnumProcessModules WinAPI_EnumProcessThreads WinAPI_EnumProcessWindows WinAPI_EnumRawInputDevices WinAPI_EnumResourceLanguages WinAPI_EnumResourceNames WinAPI_EnumResourceTypes WinAPI_EnumSystemGeoID WinAPI_EnumSystemLocales WinAPI_EnumUILanguages WinAPI_EnumWindows WinAPI_EnumWindowsPopup WinAPI_EnumWindowStations WinAPI_EnumWindowsTop WinAPI_EqualMemory WinAPI_EqualRect WinAPI_EqualRgn WinAPI_ExcludeClipRect WinAPI_ExpandEnvironmentStrings WinAPI_ExtCreatePen WinAPI_ExtCreateRegion WinAPI_ExtFloodFill WinAPI_ExtractIcon WinAPI_ExtractIconEx WinAPI_ExtSelectClipRgn WinAPI_FatalAppExit WinAPI_FatalExit WinAPI_FileEncryptionStatus WinAPI_FileExists WinAPI_FileIconInit WinAPI_FileInUse WinAPI_FillMemory WinAPI_FillPath WinAPI_FillRect WinAPI_FillRgn WinAPI_FindClose WinAPI_FindCloseChangeNotification WinAPI_FindExecutable WinAPI_FindFirstChangeNotification WinAPI_FindFirstFile WinAPI_FindFirstFileName WinAPI_FindFirstStream WinAPI_FindNextChangeNotification WinAPI_FindNextFile WinAPI_FindNextFileName WinAPI_FindNextStream WinAPI_FindResource WinAPI_FindResourceEx WinAPI_FindTextDlg WinAPI_FindWindow WinAPI_FlashWindow WinAPI_FlashWindowEx WinAPI_FlattenPath WinAPI_FloatToDWord WinAPI_FloatToInt WinAPI_FlushFileBuffers WinAPI_FlushFRBuffer WinAPI_FlushViewOfFile WinAPI_FormatDriveDlg WinAPI_FormatMessage WinAPI_FrameRect WinAPI_FrameRgn WinAPI_FreeLibrary WinAPI_FreeMemory WinAPI_FreeMRUList WinAPI_FreeResource WinAPI_GdiComment WinAPI_GetActiveWindow WinAPI_GetAllUsersProfileDirectory WinAPI_GetAncestor WinAPI_GetApplicationRestartSettings WinAPI_GetArcDirection WinAPI_GetAsyncKeyState WinAPI_GetBinaryType WinAPI_GetBitmapBits WinAPI_GetBitmapDimension WinAPI_GetBitmapDimensionEx WinAPI_GetBkColor WinAPI_GetBkMode WinAPI_GetBoundsRect WinAPI_GetBrushOrg WinAPI_GetBufferedPaintBits WinAPI_GetBufferedPaintDC WinAPI_GetBufferedPaintTargetDC WinAPI_GetBufferedPaintTargetRect WinAPI_GetBValue WinAPI_GetCaretBlinkTime WinAPI_GetCaretPos WinAPI_GetCDType WinAPI_GetClassInfoEx WinAPI_GetClassLongEx WinAPI_GetClassName WinAPI_GetClientHeight WinAPI_GetClientRect WinAPI_GetClientWidth WinAPI_GetClipboardSequenceNumber WinAPI_GetClipBox WinAPI_GetClipCursor WinAPI_GetClipRgn WinAPI_GetColorAdjustment WinAPI_GetCompressedFileSize WinAPI_GetCompression WinAPI_GetConnectedDlg WinAPI_GetCurrentDirectory WinAPI_GetCurrentHwProfile WinAPI_GetCurrentObject WinAPI_GetCurrentPosition WinAPI_GetCurrentProcess WinAPI_GetCurrentProcessExplicitAppUserModelID WinAPI_GetCurrentProcessID WinAPI_GetCurrentThemeName WinAPI_GetCurrentThread WinAPI_GetCurrentThreadId WinAPI_GetCursor WinAPI_GetCursorInfo WinAPI_GetDateFormat WinAPI_GetDC WinAPI_GetDCEx WinAPI_GetDefaultPrinter WinAPI_GetDefaultUserProfileDirectory WinAPI_GetDesktopWindow WinAPI_GetDeviceCaps WinAPI_GetDeviceDriverBaseName WinAPI_GetDeviceDriverFileName WinAPI_GetDeviceGammaRamp WinAPI_GetDIBColorTable WinAPI_GetDIBits WinAPI_GetDiskFreeSpaceEx WinAPI_GetDlgCtrlID WinAPI_GetDlgItem WinAPI_GetDllDirectory WinAPI_GetDriveBusType WinAPI_GetDriveGeometryEx WinAPI_GetDriveNumber WinAPI_GetDriveType WinAPI_GetDurationFormat WinAPI_GetEffectiveClientRect WinAPI_GetEnhMetaFile WinAPI_GetEnhMetaFileBits WinAPI_GetEnhMetaFileDescription WinAPI_GetEnhMetaFileDimension WinAPI_GetEnhMetaFileHeader WinAPI_GetErrorMessage WinAPI_GetErrorMode WinAPI_GetExitCodeProcess WinAPI_GetExtended WinAPI_GetFileAttributes WinAPI_GetFileID WinAPI_GetFileInformationByHandle WinAPI_GetFileInformationByHandleEx WinAPI_GetFilePointerEx WinAPI_GetFileSizeEx WinAPI_GetFileSizeOnDisk WinAPI_GetFileTitle WinAPI_GetFileType WinAPI_GetFileVersionInfo WinAPI_GetFinalPathNameByHandle WinAPI_GetFinalPathNameByHandleEx WinAPI_GetFocus WinAPI_GetFontMemoryResourceInfo WinAPI_GetFontName WinAPI_GetFontResourceInfo WinAPI_GetForegroundWindow WinAPI_GetFRBuffer WinAPI_GetFullPathName WinAPI_GetGeoInfo WinAPI_GetGlyphOutline WinAPI_GetGraphicsMode WinAPI_GetGuiResources WinAPI_GetGUIThreadInfo WinAPI_GetGValue WinAPI_GetHandleInformation WinAPI_GetHGlobalFromStream WinAPI_GetIconDimension WinAPI_GetIconInfo WinAPI_GetIconInfoEx WinAPI_GetIdleTime WinAPI_GetKeyboardLayout WinAPI_GetKeyboardLayoutList WinAPI_GetKeyboardState WinAPI_GetKeyboardType WinAPI_GetKeyNameText WinAPI_GetKeyState WinAPI_GetLastActivePopup WinAPI_GetLastError WinAPI_GetLastErrorMessage WinAPI_GetLayeredWindowAttributes WinAPI_GetLocaleInfo WinAPI_GetLogicalDrives WinAPI_GetMapMode WinAPI_GetMemorySize WinAPI_GetMessageExtraInfo WinAPI_GetModuleFileNameEx WinAPI_GetModuleHandle WinAPI_GetModuleHandleEx WinAPI_GetModuleInformation WinAPI_GetMonitorInfo WinAPI_GetMousePos WinAPI_GetMousePosX WinAPI_GetMousePosY WinAPI_GetMUILanguage WinAPI_GetNumberFormat WinAPI_GetObject WinAPI_GetObjectID WinAPI_GetObjectInfoByHandle WinAPI_GetObjectNameByHandle WinAPI_GetObjectType WinAPI_GetOpenFileName WinAPI_GetOutlineTextMetrics WinAPI_GetOverlappedResult WinAPI_GetParent WinAPI_GetParentProcess WinAPI_GetPerformanceInfo WinAPI_GetPEType WinAPI_GetPhysicallyInstalledSystemMemory WinAPI_GetPixel WinAPI_GetPolyFillMode WinAPI_GetPosFromRect WinAPI_GetPriorityClass WinAPI_GetProcAddress WinAPI_GetProcessAffinityMask WinAPI_GetProcessCommandLine WinAPI_GetProcessFileName WinAPI_GetProcessHandleCount WinAPI_GetProcessID WinAPI_GetProcessIoCounters WinAPI_GetProcessMemoryInfo WinAPI_GetProcessName WinAPI_GetProcessShutdownParameters WinAPI_GetProcessTimes WinAPI_GetProcessUser WinAPI_GetProcessWindowStation WinAPI_GetProcessWorkingDirectory WinAPI_GetProfilesDirectory WinAPI_GetPwrCapabilities WinAPI_GetRawInputBuffer WinAPI_GetRawInputBufferLength WinAPI_GetRawInputData WinAPI_GetRawInputDeviceInfo WinAPI_GetRegionData WinAPI_GetRegisteredRawInputDevices WinAPI_GetRegKeyNameByHandle WinAPI_GetRgnBox WinAPI_GetROP2 WinAPI_GetRValue WinAPI_GetSaveFileName WinAPI_GetShellWindow WinAPI_GetStartupInfo WinAPI_GetStdHandle WinAPI_GetStockObject WinAPI_GetStretchBltMode WinAPI_GetString WinAPI_GetSysColor WinAPI_GetSysColorBrush WinAPI_GetSystemDefaultLangID WinAPI_GetSystemDefaultLCID WinAPI_GetSystemDefaultUILanguage WinAPI_GetSystemDEPPolicy WinAPI_GetSystemInfo WinAPI_GetSystemMetrics WinAPI_GetSystemPowerStatus WinAPI_GetSystemTimes WinAPI_GetSystemWow64Directory WinAPI_GetTabbedTextExtent WinAPI_GetTempFileName WinAPI_GetTextAlign WinAPI_GetTextCharacterExtra WinAPI_GetTextColor WinAPI_GetTextExtentPoint32 WinAPI_GetTextFace WinAPI_GetTextMetrics WinAPI_GetThemeAppProperties WinAPI_GetThemeBackgroundContentRect WinAPI_GetThemeBackgroundExtent WinAPI_GetThemeBackgroundRegion WinAPI_GetThemeBitmap WinAPI_GetThemeBool WinAPI_GetThemeColor WinAPI_GetThemeDocumentationProperty WinAPI_GetThemeEnumValue WinAPI_GetThemeFilename WinAPI_GetThemeFont WinAPI_GetThemeInt WinAPI_GetThemeMargins WinAPI_GetThemeMetric WinAPI_GetThemePartSize WinAPI_GetThemePosition WinAPI_GetThemePropertyOrigin WinAPI_GetThemeRect WinAPI_GetThemeString WinAPI_GetThemeSysBool WinAPI_GetThemeSysColor WinAPI_GetThemeSysColorBrush WinAPI_GetThemeSysFont WinAPI_GetThemeSysInt WinAPI_GetThemeSysSize WinAPI_GetThemeSysString WinAPI_GetThemeTextExtent WinAPI_GetThemeTextMetrics WinAPI_GetThemeTransitionDuration WinAPI_GetThreadDesktop WinAPI_GetThreadErrorMode WinAPI_GetThreadLocale WinAPI_GetThreadUILanguage WinAPI_GetTickCount WinAPI_GetTickCount64 WinAPI_GetTimeFormat WinAPI_GetTopWindow WinAPI_GetUDFColorMode WinAPI_GetUpdateRect WinAPI_GetUpdateRgn WinAPI_GetUserDefaultLangID WinAPI_GetUserDefaultLCID WinAPI_GetUserDefaultUILanguage WinAPI_GetUserGeoID WinAPI_GetUserObjectInformation WinAPI_GetVersion WinAPI_GetVersionEx WinAPI_GetVolumeInformation WinAPI_GetVolumeInformationByHandle WinAPI_GetVolumeNameForVolumeMountPoint WinAPI_GetWindow WinAPI_GetWindowDC WinAPI_GetWindowDisplayAffinity WinAPI_GetWindowExt WinAPI_GetWindowFileName WinAPI_GetWindowHeight WinAPI_GetWindowInfo WinAPI_GetWindowLong WinAPI_GetWindowOrg WinAPI_GetWindowPlacement WinAPI_GetWindowRect WinAPI_GetWindowRgn WinAPI_GetWindowRgnBox WinAPI_GetWindowSubclass WinAPI_GetWindowText WinAPI_GetWindowTheme WinAPI_GetWindowThreadProcessId WinAPI_GetWindowWidth WinAPI_GetWorkArea WinAPI_GetWorldTransform WinAPI_GetXYFromPoint WinAPI_GlobalMemoryStatus WinAPI_GradientFill WinAPI_GUIDFromString WinAPI_GUIDFromStringEx WinAPI_HashData WinAPI_HashString WinAPI_HiByte WinAPI_HideCaret WinAPI_HiDWord WinAPI_HiWord WinAPI_InflateRect WinAPI_InitMUILanguage WinAPI_InProcess WinAPI_IntersectClipRect WinAPI_IntersectRect WinAPI_IntToDWord WinAPI_IntToFloat WinAPI_InvalidateRect WinAPI_InvalidateRgn WinAPI_InvertANDBitmap WinAPI_InvertColor WinAPI_InvertRect WinAPI_InvertRgn WinAPI_IOCTL WinAPI_IsAlphaBitmap WinAPI_IsBadCodePtr WinAPI_IsBadReadPtr WinAPI_IsBadStringPtr WinAPI_IsBadWritePtr WinAPI_IsChild WinAPI_IsClassName WinAPI_IsDoorOpen WinAPI_IsElevated WinAPI_IsHungAppWindow WinAPI_IsIconic WinAPI_IsInternetConnected WinAPI_IsLoadKBLayout WinAPI_IsMemory WinAPI_IsNameInExpression WinAPI_IsNetworkAlive WinAPI_IsPathShared WinAPI_IsProcessInJob WinAPI_IsProcessorFeaturePresent WinAPI_IsRectEmpty WinAPI_IsThemeActive WinAPI_IsThemeBackgroundPartiallyTransparent WinAPI_IsThemePartDefined WinAPI_IsValidLocale WinAPI_IsWindow WinAPI_IsWindowEnabled WinAPI_IsWindowUnicode WinAPI_IsWindowVisible WinAPI_IsWow64Process WinAPI_IsWritable WinAPI_IsZoomed WinAPI_Keybd_Event WinAPI_KillTimer WinAPI_LineDDA WinAPI_LineTo WinAPI_LoadBitmap WinAPI_LoadCursor WinAPI_LoadCursorFromFile WinAPI_LoadIcon WinAPI_LoadIconMetric WinAPI_LoadIconWithScaleDown WinAPI_LoadImage WinAPI_LoadIndirectString WinAPI_LoadKeyboardLayout WinAPI_LoadLibrary WinAPI_LoadLibraryEx WinAPI_LoadMedia WinAPI_LoadResource WinAPI_LoadShell32Icon WinAPI_LoadString WinAPI_LoadStringEx WinAPI_LoByte WinAPI_LocalFree WinAPI_LockDevice WinAPI_LockFile WinAPI_LockResource WinAPI_LockWindowUpdate WinAPI_LockWorkStation WinAPI_LoDWord WinAPI_LongMid WinAPI_LookupIconIdFromDirectoryEx WinAPI_LoWord WinAPI_LPtoDP WinAPI_MAKELANGID WinAPI_MAKELCID WinAPI_MakeLong WinAPI_MakeQWord WinAPI_MakeWord WinAPI_MapViewOfFile WinAPI_MapVirtualKey WinAPI_MaskBlt WinAPI_MessageBeep WinAPI_MessageBoxCheck WinAPI_MessageBoxIndirect WinAPI_MirrorIcon WinAPI_ModifyWorldTransform WinAPI_MonitorFromPoint WinAPI_MonitorFromRect WinAPI_MonitorFromWindow WinAPI_Mouse_Event WinAPI_MoveFileEx WinAPI_MoveMemory WinAPI_MoveTo WinAPI_MoveToEx WinAPI_MoveWindow WinAPI_MsgBox WinAPI_MulDiv WinAPI_MultiByteToWideChar WinAPI_MultiByteToWideCharEx WinAPI_NtStatusToDosError WinAPI_OemToChar WinAPI_OffsetClipRgn WinAPI_OffsetPoints WinAPI_OffsetRect WinAPI_OffsetRgn WinAPI_OffsetWindowOrg WinAPI_OpenDesktop WinAPI_OpenFileById WinAPI_OpenFileDlg WinAPI_OpenFileMapping WinAPI_OpenIcon WinAPI_OpenInputDesktop WinAPI_OpenJobObject WinAPI_OpenMutex WinAPI_OpenProcess WinAPI_OpenProcessToken WinAPI_OpenSemaphore WinAPI_OpenThemeData WinAPI_OpenWindowStation WinAPI_PageSetupDlg WinAPI_PaintDesktop WinAPI_PaintRgn WinAPI_ParseURL WinAPI_ParseUserName WinAPI_PatBlt WinAPI_PathAddBackslash WinAPI_PathAddExtension WinAPI_PathAppend WinAPI_PathBuildRoot WinAPI_PathCanonicalize WinAPI_PathCommonPrefix WinAPI_PathCompactPath WinAPI_PathCompactPathEx WinAPI_PathCreateFromUrl WinAPI_PathFindExtension WinAPI_PathFindFileName WinAPI_PathFindNextComponent WinAPI_PathFindOnPath WinAPI_PathGetArgs WinAPI_PathGetCharType WinAPI_PathGetDriveNumber WinAPI_PathIsContentType WinAPI_PathIsDirectory WinAPI_PathIsDirectoryEmpty WinAPI_PathIsExe WinAPI_PathIsFileSpec WinAPI_PathIsLFNFileSpec WinAPI_PathIsRelative WinAPI_PathIsRoot WinAPI_PathIsSameRoot WinAPI_PathIsSystemFolder WinAPI_PathIsUNC WinAPI_PathIsUNCServer WinAPI_PathIsUNCServerShare WinAPI_PathMakeSystemFolder WinAPI_PathMatchSpec WinAPI_PathParseIconLocation WinAPI_PathRelativePathTo WinAPI_PathRemoveArgs WinAPI_PathRemoveBackslash WinAPI_PathRemoveExtension WinAPI_PathRemoveFileSpec WinAPI_PathRenameExtension WinAPI_PathSearchAndQualify WinAPI_PathSkipRoot WinAPI_PathStripPath WinAPI_PathStripToRoot WinAPI_PathToRegion WinAPI_PathUndecorate WinAPI_PathUnExpandEnvStrings WinAPI_PathUnmakeSystemFolder WinAPI_PathUnquoteSpaces WinAPI_PathYetAnotherMakeUniqueName WinAPI_PickIconDlg WinAPI_PlayEnhMetaFile WinAPI_PlaySound WinAPI_PlgBlt WinAPI_PointFromRect WinAPI_PolyBezier WinAPI_PolyBezierTo WinAPI_PolyDraw WinAPI_Polygon WinAPI_PostMessage WinAPI_PrimaryLangId WinAPI_PrintDlg WinAPI_PrintDlgEx WinAPI_PrintWindow WinAPI_ProgIDFromCLSID WinAPI_PtInRect WinAPI_PtInRectEx WinAPI_PtInRegion WinAPI_PtVisible WinAPI_QueryDosDevice WinAPI_QueryInformationJobObject WinAPI_QueryPerformanceCounter WinAPI_QueryPerformanceFrequency WinAPI_RadialGradientFill WinAPI_ReadDirectoryChanges WinAPI_ReadFile WinAPI_ReadProcessMemory WinAPI_Rectangle WinAPI_RectInRegion WinAPI_RectIsEmpty WinAPI_RectVisible WinAPI_RedrawWindow WinAPI_RegCloseKey WinAPI_RegConnectRegistry WinAPI_RegCopyTree WinAPI_RegCopyTreeEx WinAPI_RegCreateKey WinAPI_RegDeleteEmptyKey WinAPI_RegDeleteKey WinAPI_RegDeleteKeyValue WinAPI_RegDeleteTree WinAPI_RegDeleteTreeEx WinAPI_RegDeleteValue WinAPI_RegDisableReflectionKey WinAPI_RegDuplicateHKey WinAPI_RegEnableReflectionKey WinAPI_RegEnumKey WinAPI_RegEnumValue WinAPI_RegFlushKey WinAPI_RegisterApplicationRestart WinAPI_RegisterClass WinAPI_RegisterClassEx WinAPI_RegisterHotKey WinAPI_RegisterPowerSettingNotification WinAPI_RegisterRawInputDevices WinAPI_RegisterShellHookWindow WinAPI_RegisterWindowMessage WinAPI_RegLoadMUIString WinAPI_RegNotifyChangeKeyValue WinAPI_RegOpenKey WinAPI_RegQueryInfoKey WinAPI_RegQueryLastWriteTime WinAPI_RegQueryMultipleValues WinAPI_RegQueryReflectionKey WinAPI_RegQueryValue WinAPI_RegRestoreKey WinAPI_RegSaveKey WinAPI_RegSetValue WinAPI_ReleaseCapture WinAPI_ReleaseDC WinAPI_ReleaseMutex WinAPI_ReleaseSemaphore WinAPI_ReleaseStream WinAPI_RemoveClipboardFormatListener WinAPI_RemoveDirectory WinAPI_RemoveFontMemResourceEx WinAPI_RemoveFontResourceEx WinAPI_RemoveWindowSubclass WinAPI_ReOpenFile WinAPI_ReplaceFile WinAPI_ReplaceTextDlg WinAPI_ResetEvent WinAPI_RestartDlg WinAPI_RestoreDC WinAPI_RGB WinAPI_RotatePoints WinAPI_RoundRect WinAPI_SaveDC WinAPI_SaveFileDlg WinAPI_SaveHBITMAPToFile WinAPI_SaveHICONToFile WinAPI_ScaleWindowExt WinAPI_ScreenToClient WinAPI_SearchPath WinAPI_SelectClipPath WinAPI_SelectClipRgn WinAPI_SelectObject WinAPI_SendMessageTimeout WinAPI_SetActiveWindow WinAPI_SetArcDirection WinAPI_SetBitmapBits WinAPI_SetBitmapDimensionEx WinAPI_SetBkColor WinAPI_SetBkMode WinAPI_SetBoundsRect WinAPI_SetBrushOrg WinAPI_SetCapture WinAPI_SetCaretBlinkTime WinAPI_SetCaretPos WinAPI_SetClassLongEx WinAPI_SetColorAdjustment WinAPI_SetCompression WinAPI_SetCurrentDirectory WinAPI_SetCurrentProcessExplicitAppUserModelID WinAPI_SetCursor WinAPI_SetDCBrushColor WinAPI_SetDCPenColor WinAPI_SetDefaultPrinter WinAPI_SetDeviceGammaRamp WinAPI_SetDIBColorTable WinAPI_SetDIBits WinAPI_SetDIBitsToDevice WinAPI_SetDllDirectory WinAPI_SetEndOfFile WinAPI_SetEnhMetaFileBits WinAPI_SetErrorMode WinAPI_SetEvent WinAPI_SetFileAttributes WinAPI_SetFileInformationByHandleEx WinAPI_SetFilePointer WinAPI_SetFilePointerEx WinAPI_SetFileShortName WinAPI_SetFileValidData WinAPI_SetFocus WinAPI_SetFont WinAPI_SetForegroundWindow WinAPI_SetFRBuffer WinAPI_SetGraphicsMode WinAPI_SetHandleInformation WinAPI_SetInformationJobObject WinAPI_SetKeyboardLayout WinAPI_SetKeyboardState WinAPI_SetLastError WinAPI_SetLayeredWindowAttributes WinAPI_SetLocaleInfo WinAPI_SetMapMode WinAPI_SetMessageExtraInfo WinAPI_SetParent WinAPI_SetPixel WinAPI_SetPolyFillMode WinAPI_SetPriorityClass WinAPI_SetProcessAffinityMask WinAPI_SetProcessShutdownParameters WinAPI_SetProcessWindowStation WinAPI_SetRectRgn WinAPI_SetROP2 WinAPI_SetSearchPathMode WinAPI_SetStretchBltMode WinAPI_SetSysColors WinAPI_SetSystemCursor WinAPI_SetTextAlign WinAPI_SetTextCharacterExtra WinAPI_SetTextColor WinAPI_SetTextJustification WinAPI_SetThemeAppProperties WinAPI_SetThreadDesktop WinAPI_SetThreadErrorMode WinAPI_SetThreadExecutionState WinAPI_SetThreadLocale WinAPI_SetThreadUILanguage WinAPI_SetTimer WinAPI_SetUDFColorMode WinAPI_SetUserGeoID WinAPI_SetUserObjectInformation WinAPI_SetVolumeMountPoint WinAPI_SetWindowDisplayAffinity WinAPI_SetWindowExt WinAPI_SetWindowLong WinAPI_SetWindowOrg WinAPI_SetWindowPlacement WinAPI_SetWindowPos WinAPI_SetWindowRgn WinAPI_SetWindowsHookEx WinAPI_SetWindowSubclass WinAPI_SetWindowText WinAPI_SetWindowTheme WinAPI_SetWinEventHook WinAPI_SetWorldTransform WinAPI_SfcIsFileProtected WinAPI_SfcIsKeyProtected WinAPI_ShellAboutDlg WinAPI_ShellAddToRecentDocs WinAPI_ShellChangeNotify WinAPI_ShellChangeNotifyDeregister WinAPI_ShellChangeNotifyRegister WinAPI_ShellCreateDirectory WinAPI_ShellEmptyRecycleBin WinAPI_ShellExecute WinAPI_ShellExecuteEx WinAPI_ShellExtractAssociatedIcon WinAPI_ShellExtractIcon WinAPI_ShellFileOperation WinAPI_ShellFlushSFCache WinAPI_ShellGetFileInfo WinAPI_ShellGetIconOverlayIndex WinAPI_ShellGetImageList WinAPI_ShellGetKnownFolderIDList WinAPI_ShellGetKnownFolderPath WinAPI_ShellGetLocalizedName WinAPI_ShellGetPathFromIDList WinAPI_ShellGetSetFolderCustomSettings WinAPI_ShellGetSettings WinAPI_ShellGetSpecialFolderLocation WinAPI_ShellGetSpecialFolderPath WinAPI_ShellGetStockIconInfo WinAPI_ShellILCreateFromPath WinAPI_ShellNotifyIcon WinAPI_ShellNotifyIconGetRect WinAPI_ShellObjectProperties WinAPI_ShellOpenFolderAndSelectItems WinAPI_ShellOpenWithDlg WinAPI_ShellQueryRecycleBin WinAPI_ShellQueryUserNotificationState WinAPI_ShellRemoveLocalizedName WinAPI_ShellRestricted WinAPI_ShellSetKnownFolderPath WinAPI_ShellSetLocalizedName WinAPI_ShellSetSettings WinAPI_ShellStartNetConnectionDlg WinAPI_ShellUpdateImage WinAPI_ShellUserAuthenticationDlg WinAPI_ShellUserAuthenticationDlgEx WinAPI_ShortToWord WinAPI_ShowCaret WinAPI_ShowCursor WinAPI_ShowError WinAPI_ShowLastError WinAPI_ShowMsg WinAPI_ShowOwnedPopups WinAPI_ShowWindow WinAPI_ShutdownBlockReasonCreate WinAPI_ShutdownBlockReasonDestroy WinAPI_ShutdownBlockReasonQuery WinAPI_SizeOfResource WinAPI_StretchBlt WinAPI_StretchDIBits WinAPI_StrFormatByteSize WinAPI_StrFormatByteSizeEx WinAPI_StrFormatKBSize WinAPI_StrFromTimeInterval WinAPI_StringFromGUID WinAPI_StringLenA WinAPI_StringLenW WinAPI_StrLen WinAPI_StrokeAndFillPath WinAPI_StrokePath WinAPI_StructToArray WinAPI_SubLangId WinAPI_SubtractRect WinAPI_SwapDWord WinAPI_SwapQWord WinAPI_SwapWord WinAPI_SwitchColor WinAPI_SwitchDesktop WinAPI_SwitchToThisWindow WinAPI_SystemParametersInfo WinAPI_TabbedTextOut WinAPI_TerminateJobObject WinAPI_TerminateProcess WinAPI_TextOut WinAPI_TileWindows WinAPI_TrackMouseEvent WinAPI_TransparentBlt WinAPI_TwipsPerPixelX WinAPI_TwipsPerPixelY WinAPI_UnhookWindowsHookEx WinAPI_UnhookWinEvent WinAPI_UnionRect WinAPI_UnionStruct WinAPI_UniqueHardwareID WinAPI_UnloadKeyboardLayout WinAPI_UnlockFile WinAPI_UnmapViewOfFile WinAPI_UnregisterApplicationRestart WinAPI_UnregisterClass WinAPI_UnregisterHotKey WinAPI_UnregisterPowerSettingNotification WinAPI_UpdateLayeredWindow WinAPI_UpdateLayeredWindowEx WinAPI_UpdateLayeredWindowIndirect WinAPI_UpdateResource WinAPI_UpdateWindow WinAPI_UrlApplyScheme WinAPI_UrlCanonicalize WinAPI_UrlCombine WinAPI_UrlCompare WinAPI_UrlCreateFromPath WinAPI_UrlFixup WinAPI_UrlGetPart WinAPI_UrlHash WinAPI_UrlIs WinAPI_UserHandleGrantAccess WinAPI_ValidateRect WinAPI_ValidateRgn WinAPI_VerQueryRoot WinAPI_VerQueryValue WinAPI_VerQueryValueEx WinAPI_WaitForInputIdle WinAPI_WaitForMultipleObjects WinAPI_WaitForSingleObject WinAPI_WideCharToMultiByte WinAPI_WidenPath WinAPI_WindowFromDC WinAPI_WindowFromPoint WinAPI_WordToShort WinAPI_Wow64EnableWow64FsRedirection WinAPI_WriteConsole WinAPI_WriteFile WinAPI_WriteProcessMemory WinAPI_ZeroMemory WinNet_AddConnection WinNet_AddConnection2 WinNet_AddConnection3 WinNet_CancelConnection WinNet_CancelConnection2 WinNet_CloseEnum WinNet_ConnectionDialog WinNet_ConnectionDialog1 WinNet_DisconnectDialog WinNet_DisconnectDialog1 WinNet_EnumResource WinNet_GetConnection WinNet_GetConnectionPerformance WinNet_GetLastError WinNet_GetNetworkInformation WinNet_GetProviderName WinNet_GetResourceInformation WinNet_GetResourceParent WinNet_GetUniversalName WinNet_GetUser WinNet_OpenEnum WinNet_RestoreConnection WinNet_UseConnection Word_Create Word_DocAdd Word_DocAttach Word_DocClose Word_DocExport Word_DocFind Word_DocFindReplace Word_DocGet Word_DocLinkAdd Word_DocLinkGet Word_DocOpen Word_DocPictureAdd Word_DocPrint Word_DocRangeSet Word_DocSave Word_DocSaveAs Word_DocTableRead Word_DocTableWrite Word_Quit", i = {
      variants: [e.COMMENT(";", "$", { relevance: 0 }), e.COMMENT("#cs", "#ce"), e.COMMENT("#comments-start", "#comments-end")]
    }, a = { begin: "\\$[A-z0-9_]+" }, o = {
      className: "string",
      variants: [{ begin: /"/, end: /"/, contains: [{ begin: /""/, relevance: 0 }] }, {
        begin: /'/,
        end: /'/,
        contains: [{ begin: /''/, relevance: 0 }]
      }]
    }, s = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] }, l = {
      className: "meta",
      begin: "#",
      end: "$",
      keywords: { "meta-keyword": "include include-once NoTrayIcon OnAutoItStartRegister RequireAdmin pragma Au3Stripper_Ignore_Funcs Au3Stripper_Ignore_Variables Au3Stripper_Off Au3Stripper_On Au3Stripper_Parameters AutoIt3Wrapper_Add_Constants AutoIt3Wrapper_Au3Check_Parameters AutoIt3Wrapper_Au3Check_Stop_OnWarning AutoIt3Wrapper_Aut2Exe AutoIt3Wrapper_AutoIt3 AutoIt3Wrapper_AutoIt3Dir AutoIt3Wrapper_Change2CUI AutoIt3Wrapper_Compile_Both AutoIt3Wrapper_Compression AutoIt3Wrapper_EndIf AutoIt3Wrapper_Icon AutoIt3Wrapper_If_Compile AutoIt3Wrapper_If_Run AutoIt3Wrapper_Jump_To_First_Error AutoIt3Wrapper_OutFile AutoIt3Wrapper_OutFile_Type AutoIt3Wrapper_OutFile_X64 AutoIt3Wrapper_PlugIn_Funcs AutoIt3Wrapper_Res_Comment Autoit3Wrapper_Res_Compatibility AutoIt3Wrapper_Res_Description AutoIt3Wrapper_Res_Field AutoIt3Wrapper_Res_File_Add AutoIt3Wrapper_Res_FileVersion AutoIt3Wrapper_Res_FileVersion_AutoIncrement AutoIt3Wrapper_Res_Icon_Add AutoIt3Wrapper_Res_Language AutoIt3Wrapper_Res_LegalCopyright AutoIt3Wrapper_Res_ProductVersion AutoIt3Wrapper_Res_requestedExecutionLevel AutoIt3Wrapper_Res_SaveSource AutoIt3Wrapper_Run_After AutoIt3Wrapper_Run_Au3Check AutoIt3Wrapper_Run_Au3Stripper AutoIt3Wrapper_Run_Before AutoIt3Wrapper_Run_Debug_Mode AutoIt3Wrapper_Run_SciTE_Minimized AutoIt3Wrapper_Run_SciTE_OutputPane_Minimized AutoIt3Wrapper_Run_Tidy AutoIt3Wrapper_ShowProgress AutoIt3Wrapper_Testing AutoIt3Wrapper_Tidy_Stop_OnError AutoIt3Wrapper_UPX_Parameters AutoIt3Wrapper_UseUPX AutoIt3Wrapper_UseX64 AutoIt3Wrapper_Version AutoIt3Wrapper_Versioning AutoIt3Wrapper_Versioning_Parameters Tidy_Off Tidy_On Tidy_Parameters EndRegion Region" },
      contains: [{ begin: /\\\n/, relevance: 0 }, {
        beginKeywords: "include",
        keywords: { "meta-keyword": "include" },
        end: "$",
        contains: [o, {
          className: "meta-string",
          variants: [{ begin: "<", end: ">" }, {
            begin: /"/,
            end: /"/,
            contains: [{ begin: /""/, relevance: 0 }]
          }, { begin: /'/, end: /'/, contains: [{ begin: /''/, relevance: 0 }] }]
        }]
      }, o, i]
    }, c = { className: "symbol", begin: "@[A-z0-9_]+" }, d = {
      className: "function",
      beginKeywords: "Func",
      end: "$",
      illegal: "\\$|\\[|%",
      contains: [e.UNDERSCORE_TITLE_MODE, { className: "params", begin: "\\(", end: "\\)", contains: [a, o, s] }]
    };
    return {
      case_insensitive: !0,
      illegal: /\/\*/,
      keywords: { keyword: t, built_in: r, literal: n },
      contains: [i, a, o, s, l, c, d]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      case_insensitive: !0,
      lexemes: "\\.?" + e.IDENT_RE,
      keywords: {
        keyword: "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
        built_in: "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
        meta: ".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set"
      },
      contains: [e.C_BLOCK_COMMENT_MODE, e.COMMENT(";", "$", { relevance: 0 }), e.C_NUMBER_MODE, e.BINARY_NUMBER_MODE, {
        className: "number",
        begin: "\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)"
      }, e.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "[^\\\\]'",
        illegal: "[^\\\\][^']"
      }, { className: "symbol", begin: "^[A-Za-z0-9_.$]+:" }, {
        className: "meta",
        begin: "#",
        end: "$"
      }, { className: "subst", begin: "@[0-9]+" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: "false int abstract private char boolean static null if for true while long throw finally protected final return void enum else break new catch byte super case short default double public try this switch continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count order group by asc desc index hint like dispaly edit client server ttsbegin ttscommit str real date container anytype common div mod",
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$"
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: "{",
        excludeEnd: !0,
        illegal: ":",
        contains: [{ beginKeywords: "extends implements" }, e.UNDERSCORE_TITLE_MODE]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "variable",
      variants: [{ begin: /\$[\w\d#@][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }]
    }, n = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [e.BACKSLASH_ESCAPE, t, {
        className: "variable",
        begin: /\$\(/,
        end: /\)/,
        contains: [e.BACKSLASH_ESCAPE]
      }]
    }, r = { className: "string", begin: /'/, end: /'/ };
    return {
      aliases: ["sh", "zsh"],
      lexemes: /-?[a-z\.]+/,
      keywords: {
        keyword: "if then else elif fi for while in do done case esac function",
        literal: "true false",
        built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
        _: "-ne -eq -lt -gt -f -d -e -s -l -a"
      },
      contains: [{ className: "meta", begin: /^#![^\n]+sh\s*$/, relevance: 10 }, {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: !0,
        contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
        relevance: 0
      }, e.HASH_COMMENT_MODE, n, r, t]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      case_insensitive: !0,
      illegal: "^.",
      lexemes: "[a-zA-Z][a-zA-Z0-9_$%!#]*",
      keywords: { keyword: "ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO HEX$ IF|0 THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE WEND WIDTH WINDOW WRITE XOR" },
      contains: [e.QUOTE_STRING_MODE, e.COMMENT("REM", "$", { relevance: 10 }), e.COMMENT("'", "$", { relevance: 0 }), {
        className: "symbol",
        begin: "^[0-9]+ ",
        relevance: 10
      }, { className: "number", begin: "\\b([0-9]+[0-9edED.]*[#!]?)", relevance: 0 }, {
        className: "number",
        begin: "(&[hH][0-9a-fA-F]{1,4})"
      }, { className: "number", begin: "(&[oO][0-7]{1,6})" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "literal", begin: "[\\+\\-]", relevance: 0 };
    return {
      aliases: ["bf"],
      contains: [e.COMMENT("[^\\[\\]\\.,\\+\\-<> \r\n]", "[\\[\\]\\.,\\+\\-<> \r\n]", {
        returnEnd: !0,
        relevance: 0
      }), { className: "title", begin: "[\\[\\]]", relevance: 0 }, {
        className: "string",
        begin: "[\\.,]",
        relevance: 0
      }, { begin: /\+\+|\-\-/, returnBegin: !0, contains: [t] }, t]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to until while with var", n = "false true", r = [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, { relevance: 0 }), e.COMMENT(/\(\*/, /\*\)/, { relevance: 10 })], i = {
      className: "string",
      begin: /'/,
      end: /'/,
      contains: [{ begin: /''/ }]
    }, a = { className: "string", begin: /(#\d+)+/ }, o = {
      className: "number",
      begin: "\\b\\d+(\\.\\d+)?(DT|D|T)",
      relevance: 0
    }, s = { className: "string", begin: '"', end: '"' }, l = {
      className: "function",
      beginKeywords: "procedure",
      end: /[:;]/,
      keywords: "procedure|10",
      contains: [e.TITLE_MODE, { className: "params", begin: /\(/, end: /\)/, keywords: t, contains: [i, a] }].concat(r)
    }, c = {
      className: "class",
      begin: "OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)",
      returnBegin: !0,
      contains: [e.TITLE_MODE, l]
    };
    return {
      case_insensitive: !0,
      keywords: { keyword: t, literal: n },
      illegal: /\/\*/,
      contains: [i, a, o, s, e.NUMBER_MODE, c, l]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["capnp"],
      keywords: {
        keyword: "struct enum interface union group import using const annotation extends in of on as with from fixed",
        built_in: "Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List",
        literal: "true false"
      },
      contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.HASH_COMMENT_MODE, {
        className: "meta",
        begin: /@0x[\w\d]{16};/,
        illegal: /\n/
      }, { className: "symbol", begin: /@\d+\b/ }, {
        className: "class",
        beginKeywords: "struct enum",
        end: /\{/,
        illegal: /\n/,
        contains: [e.inherit(e.TITLE_MODE, { starts: { endsWithParent: !0, excludeEnd: !0 } })]
      }, {
        className: "class",
        beginKeywords: "interface",
        end: /\{/,
        illegal: /\n/,
        contains: [e.inherit(e.TITLE_MODE, { starts: { endsWithParent: !0, excludeEnd: !0 } })]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "assembly module package import alias class interface object given value assign void function new of extends satisfies abstracts in out return break continue throw assert dynamic if else switch case for while try catch finally then let this outer super is exists nonempty", n = "shared abstract formal default actual variable late native deprecatedfinal sealed annotation suppressWarnings small", r = "doc by license see throws tagged", i = {
      className: "subst",
      excludeBegin: !0,
      excludeEnd: !0,
      begin: /``/,
      end: /``/,
      keywords: t,
      relevance: 10
    }, a = [{ className: "string", begin: '"""', end: '"""', relevance: 10 }, {
      className: "string",
      begin: '"',
      end: '"',
      contains: [i]
    }, { className: "string", begin: "'", end: "'" }, {
      className: "number",
      begin: "#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
      relevance: 0
    }];
    return i.contains = a, {
      keywords: { keyword: t + " " + n, meta: r },
      illegal: "\\$[^01]|#[^0-9a-fA-F]",
      contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", { contains: ["self"] }), {
        className: "meta",
        begin: '@[a-z]\\w*(?:\\:"[^"]*")?'
      }].concat(a)
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      contains: [{
        className: "meta",
        begin: /^([\w.-]+|\s*#_)=>/,
        starts: { end: /$/, subLanguage: "clojure" }
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { "builtin-name": "def defonce cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize" }, n = "a-zA-Z_\\-!.?+*=<>&#'", r = "[" + n + "][" + n + "0-9/;:]*", i = "[-+]?\\d+(\\.\\d+)?", a = {
      begin: r,
      relevance: 0
    }, o = {
      className: "number",
      begin: i,
      relevance: 0
    }, s = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }), l = e.COMMENT(";", "$", { relevance: 0 }), c = {
      className: "literal",
      begin: /\b(true|false|nil)\b/
    }, d = { begin: "[\\[\\{]", end: "[\\]\\}]" }, u = {
      className: "comment",
      begin: "\\^" + r
    }, m = e.COMMENT("\\^\\{", "\\}"), p = { className: "symbol", begin: "[:]" + r }, g = {
      begin: "\\(",
      end: "\\)"
    }, _ = { endsWithParent: !0, relevance: 0 }, b = {
      keywords: t,
      lexemes: r,
      className: "name",
      begin: r,
      starts: _
    }, f = [g, s, u, m, l, p, d, o, c, a];
    return g.contains = [e.COMMENT("comment", ""), b, _], _.contains = f, d.contains = f, {
      aliases: ["clj"],
      illegal: /\S/,
      contains: [g, s, u, m, l, p, d, o, c]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["cmake.in"],
      case_insensitive: !0,
      keywords: { keyword: "add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_subdirectory add_test aux_source_directory break build_command cmake_minimum_required cmake_policy configure_file create_test_sourcelist define_property else elseif enable_language enable_testing endforeach endfunction endif endmacro endwhile execute_process export find_file find_library find_package find_path find_program fltk_wrap_ui foreach function get_cmake_property get_directory_property get_filename_component get_property get_source_file_property get_target_property get_test_property if include include_directories include_external_msproject include_regular_expression install link_directories load_cache load_command macro mark_as_advanced message option output_required_files project qt_wrap_cpp qt_wrap_ui remove_definitions return separate_arguments set set_directory_properties set_property set_source_files_properties set_target_properties set_tests_properties site_name source_group string target_link_libraries try_compile try_run unset variable_watch while build_name exec_program export_library_dependencies install_files install_programs install_targets link_libraries make_directory remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or equal less greater strless strgreater strequal matches" },
      contains: [{
        className: "variable",
        begin: "\\${",
        end: "}"
      }, e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
      literal: "true false null undefined yes no on off",
      built_in: "npm require console print module global window document"
    }, n = "[A-Za-z$_][0-9A-Za-z$_]*", r = {
      className: "subst",
      begin: /#\{/,
      end: /}/,
      keywords: t
    }, i = [e.BINARY_NUMBER_MODE, e.inherit(e.C_NUMBER_MODE, {
      starts: {
        end: "(\\s*/)?",
        relevance: 0
      }
    }), {
      className: "string",
      variants: [{ begin: /'''/, end: /'''/, contains: [e.BACKSLASH_ESCAPE] }, {
        begin: /'/,
        end: /'/,
        contains: [e.BACKSLASH_ESCAPE]
      }, { begin: /"""/, end: /"""/, contains: [e.BACKSLASH_ESCAPE, r] }, {
        begin: /"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, r]
      }]
    }, {
      className: "regexp",
      variants: [{ begin: "///", end: "///", contains: [r, e.HASH_COMMENT_MODE] }, {
        begin: "//[gim]*",
        relevance: 0
      }, { begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ }]
    }, { begin: "@" + n }, { begin: "`", end: "`", excludeBegin: !0, excludeEnd: !0, subLanguage: "javascript" }];
    r.contains = i;
    var a = e.inherit(e.TITLE_MODE, { begin: n }), o = "(\\(.*\\))?\\s*\\B[-=]>", s = {
      className: "params",
      begin: "\\([^\\(]",
      returnBegin: !0,
      contains: [{ begin: /\(/, end: /\)/, keywords: t, contains: ["self"].concat(i) }]
    };
    return {
      aliases: ["coffee", "cson", "iced"],
      keywords: t,
      illegal: /\/\*/,
      contains: i.concat([e.COMMENT("###", "###"), e.HASH_COMMENT_MODE, {
        className: "function",
        begin: "^\\s*" + n + "\\s*=\\s*" + o,
        end: "[-=]>",
        returnBegin: !0,
        contains: [a, s]
      }, {
        begin: /[:\(,=]\s*/,
        relevance: 0,
        contains: [{ className: "function", begin: o, end: "[-=]>", returnBegin: !0, contains: [s] }]
      }, {
        className: "class",
        beginKeywords: "class",
        end: "$",
        illegal: /[:="\[\]]/,
        contains: [{ beginKeywords: "extends", endsWithParent: !0, illegal: /[:="\[\]]/, contains: [a] }, a]
      }, { begin: n + ":", end: ":", returnBegin: !0, returnEnd: !0, relevance: 0 }])
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "string",
      variants: [{ begin: '"', end: '"', contains: [{ begin: '""', relevance: 0 }] }]
    }, n = {
      className: "number",
      begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)",
      relevance: 0
    }, r = { keyword: ["property", "parameter", "class", "classmethod", "clientmethod", "extends", "as", "break", "catch", "close", "continue", "do", "d", "else", "elseif", "for", "goto", "halt", "hang", "h", "if", "job", "j", "kill", "k", "lock", "l", "merge", "new", "open", "quit", "q", "read", "r", "return", "set", "s", "tcommit", "throw", "trollback", "try", "tstart", "use", "view", "while", "write", "w", "xecute", "x", "zkill", "znspace", "zn", "ztrap", "zwrite", "zw", "zzdump", "zzwrite", "print", "zbreak", "zinsert", "zload", "zprint", "zremove", "zsave", "zzprint", "mv", "mvcall", "mvcrt", "mvdim", "mvprint", "zquit", "zsync", "ascii"].join(" ") };
    return {
      case_insensitive: !0,
      aliases: ["cos", "cls"],
      keywords: r,
      contains: [n, t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "comment",
        begin: /;/,
        end: "$",
        relevance: 0
      }, { className: "built_in", begin: /(?:\$\$?|\.\.)\^?[a-zA-Z]+/ }, {
        className: "built_in",
        begin: /\$\$\$[a-zA-Z]+/
      }, { className: "built_in", begin: /%[a-z]+(?:\.[a-z]+)*/ }, {
        className: "symbol",
        begin: /\^%?[a-zA-Z][\w]*/
      }, { className: "keyword", begin: /##class|##super|#define|#dim/ }, {
        begin: /&sql\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        subLanguage: "sql"
      }, {
        begin: /&(js|jscript|javascript)</,
        end: />/,
        excludeBegin: !0,
        excludeEnd: !0,
        subLanguage: "javascript"
      }, { begin: /&html<\s*</, end: />\s*>/, subLanguage: "xml" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "keyword", begin: "\\b[a-z\\d_]*_t\\b" }, n = {
      className: "string",
      variants: [e.inherit(e.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }), {
        begin: '(u8?|U)?R"',
        end: '"',
        contains: [e.BACKSLASH_ESCAPE]
      }, { begin: "'\\\\?.", end: "'", illegal: "." }]
    }, r = {
      className: "number",
      variants: [{ begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)" }, { begin: e.C_NUMBER_RE }],
      relevance: 0
    }, i = {
      className: "meta",
      begin: "#",
      end: "$",
      keywords: { "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef" },
      contains: [{ begin: /\\\n/, relevance: 0 }, {
        beginKeywords: "include",
        end: "$",
        keywords: { "meta-keyword": "include" },
        contains: [e.inherit(n, { className: "meta-string" }), {
          className: "meta-string",
          begin: "<",
          end: ">",
          illegal: "\\n"
        }]
      }, n, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    }, a = e.IDENT_RE + "\\s*\\(", o = {
      keyword: "int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
      built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
      literal: "true false nullptr NULL"
    };
    return {
      aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
      keywords: o,
      illegal: "</",
      contains: [t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, n, i, {
        begin: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
        end: ">",
        keywords: o,
        contains: ["self", t]
      }, { begin: e.IDENT_RE + "::", keywords: o }, {
        beginKeywords: "new throw return else",
        relevance: 0
      }, {
        className: "function",
        begin: "(" + e.IDENT_RE + "[\\*&\\s]+)+" + a,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: o,
        illegal: /[^\w\s\*&]/,
        contains: [{ begin: a, returnBegin: !0, contains: [e.TITLE_MODE], relevance: 0 }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: o,
          relevance: 0,
          contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, r]
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, i]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "primitive rsc_template", n = "group clone ms master location colocation order fencing_topology rsc_ticket acl_target acl_group user role tag xml", r = "property rsc_defaults op_defaults", i = "params meta operations op rule attributes utilization", a = "read write deny defined not_defined in_range date spec in ref reference attribute type xpath version and or lt gt tag lte gte eq ne \\", o = "number string", s = "Master Started Slave Stopped start promote demote stop monitor true false";
    return {
      aliases: ["crm", "pcmk"],
      case_insensitive: !0,
      keywords: { keyword: i + " " + a + " " + o, literal: s },
      contains: [e.HASH_COMMENT_MODE, {
        beginKeywords: "node",
        starts: { end: "\\s*([\\w_-]+:)?", starts: { className: "title", end: "\\s*[\\$\\w_][\\w_-]*" } }
      }, {
        beginKeywords: t,
        starts: { className: "title", end: "\\s*[\\$\\w_][\\w_-]*", starts: { end: "\\s*@?[\\w_][\\w_\\.:-]*" } }
      }, {
        begin: "\\b(" + n.split(" ").join("|") + ")\\s+",
        keywords: n,
        starts: { className: "title", end: "[\\$\\w_][\\w_-]*" }
      }, {
        beginKeywords: r,
        starts: { className: "title", end: "\\s*([\\w_-]+:)?" }
      }, e.QUOTE_STRING_MODE, {
        className: "meta",
        begin: "(ocf|systemd|service|lsb):[\\w_:-]+",
        relevance: 0
      }, { className: "number", begin: "\\b\\d+(\\.\\d+)?(ms|s|h|m)?", relevance: 0 }, {
        className: "literal",
        begin: "[-]?(infinity|inf)",
        relevance: 0
      }, { className: "attr", begin: /([A-Za-z\$_\#][\w_-]+)=/, relevance: 0 }, {
        className: "tag",
        begin: "</?",
        end: "/?>",
        relevance: 0
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    function t(e, t) {
      var n = [{ begin: e, end: t }];
      return n[0].contains = n, n
    }

    var n = "(_[uif](8|16|32|64))?", r = "[a-zA-Z_]\\w*[!?=]?", i = "!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", a = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\][=?]?", o = {
      keyword: "abstract alias as asm begin break case class def do else elsif end ensure enum extend for fun if ifdef include instance_sizeof is_a? lib macro module next of out pointerof private protected rescue responds_to? return require self sizeof struct super then type typeof union unless until when while with yield __DIR__ __FILE__ __LINE__",
      literal: "false nil true"
    }, s = { className: "subst", begin: "#{", end: "}", keywords: o }, l = {
      className: "template-variable",
      variants: [{ begin: "\\{\\{", end: "\\}\\}" }, { begin: "\\{%", end: "%\\}" }],
      keywords: o,
      relevance: 10
    }, c = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE, s],
      variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /`/, end: /`/ }, {
        begin: "%w?\\(",
        end: "\\)",
        contains: t("\\(", "\\)")
      }, { begin: "%w?\\[", end: "\\]", contains: t("\\[", "\\]") }, {
        begin: "%w?{",
        end: "}",
        contains: t("{", "}")
      }, { begin: "%w?<", end: ">", contains: t("<", ">") }, { begin: "%w?/", end: "/" }, {
        begin: "%w?%",
        end: "%"
      }, { begin: "%w?-", end: "-" }, { begin: "%w?\\|", end: "\\|" }],
      relevance: 0
    }, d = {
      begin: "(" + i + ")\\s*",
      contains: [{
        className: "regexp",
        contains: [e.BACKSLASH_ESCAPE, s],
        variants: [{ begin: "/", end: "/[a-z]*" }, {
          begin: "%r\\(",
          end: "\\)",
          contains: t("\\(", "\\)")
        }, { begin: "%r\\[", end: "\\]", contains: t("\\[", "\\]") }, {
          begin: "%r{",
          end: "}",
          contains: t("{", "}")
        }, { begin: "%r<", end: ">", contains: t("<", ">") }, { begin: "%r/", end: "/" }, {
          begin: "%r%",
          end: "%"
        }, { begin: "%r-", end: "-" }, { begin: "%r\\|", end: "\\|" }]
      }],
      relevance: 0
    }, u = {
      className: "regexp",
      contains: [e.BACKSLASH_ESCAPE, s],
      variants: [{ begin: "%r\\(", end: "\\)", contains: t("\\(", "\\)") }, {
        begin: "%r\\[",
        end: "\\]",
        contains: t("\\[", "\\]")
      }, { begin: "%r{", end: "}", contains: t("{", "}") }, {
        begin: "%r<",
        end: ">",
        contains: t("<", ">")
      }, { begin: "%r/", end: "/" }, { begin: "%r%", end: "%" }, { begin: "%r-", end: "-" }, {
        begin: "%r\\|",
        end: "\\|"
      }],
      relevance: 0
    }, m = {
      className: "meta",
      begin: "@\\[",
      end: "\\]",
      relevance: 5
    }, p = [l, c, d, u, m, e.HASH_COMMENT_MODE, {
      className: "class",
      beginKeywords: "class module struct",
      end: "$|;",
      illegal: /=/,
      contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, { begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" }), { begin: "<" }]
    }, {
      className: "class",
      beginKeywords: "lib enum union",
      end: "$|;",
      illegal: /=/,
      contains: [e.HASH_COMMENT_MODE, e.inherit(e.TITLE_MODE, { begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" })],
      relevance: 10
    }, {
      className: "function",
      beginKeywords: "def",
      end: /\B\b/,
      contains: [e.inherit(e.TITLE_MODE, { begin: a, endsParent: !0 })]
    }, {
      className: "function",
      beginKeywords: "fun macro",
      end: /\B\b/,
      contains: [e.inherit(e.TITLE_MODE, { begin: a, endsParent: !0 })],
      relevance: 5
    }, { className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "(\\!|\\?)?:", relevance: 0 }, {
      className: "symbol",
      begin: ":",
      contains: [c, { begin: a }],
      relevance: 0
    }, {
      className: "number",
      variants: [{ begin: "\\b0b([01_]*[01])" + n }, { begin: "\\b0o([0-7_]*[0-7])" + n }, { begin: "\\b0x([A-Fa-f0-9_]*[A-Fa-f0-9])" + n }, { begin: "\\b(([0-9][0-9_]*[0-9]|[0-9])(\\.[0-9_]*[0-9])?([eE][+-]?[0-9_]*[0-9])?)" + n }],
      relevance: 0
    }];
    return s.contains = p, m.contains = p, l.contains = p.slice(1), {
      aliases: ["cr"],
      lexemes: r,
      keywords: o,
      contains: p
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield", n = e.IDENT_RE + "(<" + e.IDENT_RE + ">)?";
    return {
      aliases: ["csharp"],
      keywords: t,
      illegal: /::/,
      contains: [e.COMMENT("///", "$", {
        returnBegin: !0,
        contains: [{
          className: "doctag",
          variants: [{ begin: "///", relevance: 0 }, { begin: "<!--|-->" }, { begin: "</?", end: ">" }]
        }]
      }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: { "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum" }
      }, {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{ begin: '""' }]
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
        beginKeywords: "class interface",
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [e.TITLE_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, {
        beginKeywords: "namespace",
        end: /[{;=]/,
        illegal: /[^\s:]/,
        contains: [e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, { beginKeywords: "new return throw await", relevance: 0 }, {
        className: "function",
        begin: "(" + n + "\\s+)+" + e.IDENT_RE + "\\s*\\(",
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: t,
        contains: [{
          begin: e.IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          contains: [e.TITLE_MODE],
          relevance: 0
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: t,
          relevance: 0,
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*", n = {
      begin: /[A-Z\_\.\-]+\s*:/,
      returnBegin: !0,
      end: ";",
      endsWithParent: !0,
      contains: [{
        className: "attribute",
        begin: /\S/,
        end: ":",
        excludeEnd: !0,
        starts: {
          endsWithParent: !0,
          excludeEnd: !0,
          contains: [{
            begin: /[\w-]+\s*\(/,
            returnBegin: !0,
            contains: [{ className: "built_in", begin: /[\w-]+/ }]
          }, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE, {
            className: "number",
            begin: "#[0-9A-Fa-f]+"
          }, { className: "meta", begin: "!important" }]
        }
      }]
    };
    return {
      case_insensitive: !0,
      illegal: /[=\/|'\$]/,
      contains: [e.C_BLOCK_COMMENT_MODE, {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/
      }, { className: "selector-class", begin: /\.[A-Za-z0-9_-]+/ }, {
        className: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$"
      }, { className: "selector-pseudo", begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ }, {
        begin: "@(font-face|page)",
        lexemes: "[a-z-]+",
        keywords: "font-face page"
      }, {
        begin: "@",
        end: "[{;]",
        contains: [{ className: "keyword", begin: /\S+/ }, {
          begin: /\s/,
          endsWithParent: !0,
          excludeEnd: !0,
          relevance: 0,
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
        }]
      }, { className: "selector-tag", begin: t, relevance: 0 }, {
        begin: "{",
        end: "}",
        illegal: /\S/,
        contains: [e.C_BLOCK_COMMENT_MODE, n]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
      built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
      literal: "false null true"
    }, n = "(0|[1-9][\\d_]*)", r = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)", i = "0[bB][01_]+", a = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)", o = "0[xX]" + a, s = "([eE][+-]?" + r + ")", l = "(" + r + "(\\.\\d*|" + s + ")|\\d+\\." + r + r + "|\\." + n + s + "?)", c = "(0[xX](" + a + "\\." + a + "|\\.?" + a + ")[pP][+-]?" + r + ")", d = "(" + n + "|" + i + "|" + o + ")", u = "(" + c + "|" + l + ")", m = "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};", p = {
      className: "number", begin: "\\b" + d + "(L|u|U|Lu|LU|uL|UL)?", relevance: 0
    }, g = {
      className: "number",
      begin: "\\b(" + u + "([fF]|L|i|[fF]i|Li)?|" + d + "(i|[fF]i|Li))",
      relevance: 0
    }, _ = { className: "string", begin: "'(" + m + "|.)", end: "'", illegal: "." }, b = {
      begin: m,
      relevance: 0
    }, f = { className: "string", begin: '"', contains: [b], end: '"[cwd]?' }, h = {
      className: "string",
      begin: '[rq]"',
      end: '"[cwd]?',
      relevance: 5
    }, I = { className: "string", begin: "`", end: "`[cwd]?" }, C = {
      className: "string",
      begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
      relevance: 10
    }, v = { className: "string", begin: 'q"\\{', end: '\\}"' }, S = {
      className: "meta",
      begin: "^#!",
      end: "$",
      relevance: 5
    }, y = { className: "meta", begin: "#(line)", end: "$", relevance: 5 }, E = {
      className: "keyword",
      begin: "@[a-zA-Z_][a-zA-Z_\\d]*"
    }, T = e.COMMENT("\\/\\+", "\\+\\/", { contains: ["self"], relevance: 10 });
    return {
      lexemes: e.UNDERSCORE_IDENT_RE,
      keywords: t,
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, T, C, f, h, I, v, g, p, _, S, y, E]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "subst",
      begin: "\\$\\{",
      end: "}",
      keywords: "true false null this is new super"
    }, n = {
      className: "string",
      variants: [{ begin: "r'''", end: "'''" }, { begin: 'r"""', end: '"""' }, {
        begin: "r'",
        end: "'",
        illegal: "\\n"
      }, { begin: 'r"', end: '"', illegal: "\\n" }, {
        begin: "'''",
        end: "'''",
        contains: [e.BACKSLASH_ESCAPE, t]
      }, { begin: '"""', end: '"""', contains: [e.BACKSLASH_ESCAPE, t] }, {
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE, t]
      }, { begin: '"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE, t] }]
    };
    t.contains = [e.C_NUMBER_MODE, n];
    var r = {
      keyword: "assert break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch this throw true try var void while with abstract as dynamic export external factory get implements import library operator part set static typedef",
      built_in: "print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList"
    };
    return {
      keywords: r,
      contains: [n, e.COMMENT("/\\*\\*", "\\*/", { subLanguage: "markdown" }), e.COMMENT("///", "$", { subLanguage: "markdown" }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "class interface",
        end: "{",
        excludeEnd: !0,
        contains: [{ beginKeywords: "extends implements" }, e.UNDERSCORE_TITLE_MODE]
      }, e.C_NUMBER_MODE, { className: "meta", begin: "@[A-Za-z]+" }, { begin: "=>" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure", n = [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, { relevance: 0 }), e.COMMENT(/\(\*/, /\*\)/, { relevance: 10 })], r = {
      className: "string",
      begin: /'/,
      end: /'/,
      contains: [{ begin: /''/ }]
    }, i = { className: "string", begin: /(#\d+)+/ }, a = {
      begin: e.IDENT_RE + "\\s*=\\s*class\\s*\\(",
      returnBegin: !0,
      contains: [e.TITLE_MODE]
    }, o = {
      className: "function",
      beginKeywords: "function constructor destructor procedure",
      end: /[:;]/,
      keywords: "function constructor|10 destructor|10 procedure|10",
      contains: [e.TITLE_MODE, { className: "params", begin: /\(/, end: /\)/, keywords: t, contains: [r, i] }].concat(n)
    };
    return {
      case_insensitive: !0,
      keywords: t,
      illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
      contains: [r, i, e.NUMBER_MODE, a, o].concat(n)
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["patch"],
      contains: [{
        className: "meta",
        relevance: 10,
        variants: [{ begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ }, { begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ }, { begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ }]
      }, {
        className: "comment",
        variants: [{ begin: /Index: /, end: /$/ }, { begin: /=====/, end: /=====$/ }, {
          begin: /^\-\-\-/,
          end: /$/
        }, { begin: /^\*{3} /, end: /$/ }, { begin: /^\+\+\+/, end: /$/ }, { begin: /\*{5}/, end: /\*{5}$/ }]
      }, { className: "addition", begin: "^\\+", end: "$" }, {
        className: "deletion",
        begin: "^\\-",
        end: "$"
      }, { className: "addition", begin: "^\\!", end: "$" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      begin: /\|[A-Za-z]+:?/,
      keywords: { name: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone" },
      contains: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE]
    };
    return {
      aliases: ["jinja"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [e.COMMENT(/\{%\s*comment\s*%}/, /\{%\s*endcomment\s*%}/), e.COMMENT(/\{#/, /#}/), {
        className: "template-tag",
        begin: /\{%/,
        end: /%}/,
        contains: [{
          className: "name",
          begin: /\w+/,
          keywords: { name: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim" },
          starts: { endsWithParent: !0, keywords: "in by as", contains: [t], relevance: 0 }
        }]
      }, { className: "template-variable", begin: /\{\{/, end: /}}/, contains: [t] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["bind", "zone"],
      keywords: { keyword: "IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT" },
      contains: [e.COMMENT(";", "$"), {
        className: "meta",
        begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
      }, {
        className: "number",
        begin: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
      }, {
        className: "number",
        begin: "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
      }, e.inherit(e.NUMBER_MODE, { begin: /\b\d+[dhwm]?/ })]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["docker"],
      case_insensitive: !0,
      keywords: "from maintainer cmd expose add copy entrypoint volume user workdir onbuild run env label",
      contains: [e.HASH_COMMENT_MODE, {
        keywords: "run cmd entrypoint volume add copy workdir onbuild label",
        begin: /^ *(onbuild +)?(run|cmd|entrypoint|volume|add|copy|workdir|label) +/,
        starts: { end: /[^\\]\n/, subLanguage: "bash" }
      }, {
        keywords: "from maintainer expose env user onbuild",
        begin: /^ *(onbuild +)?(from|maintainer|expose|env|user|onbuild) +/,
        end: /[^\\]\n/,
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.HASH_COMMENT_MODE]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = e.COMMENT(/@?rem\b/, /$/, { relevance: 10 }), n = {
      className: "symbol",
      begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
      relevance: 0
    };
    return {
      aliases: ["bat", "cmd"],
      case_insensitive: !0,
      illegal: /\/\*/,
      keywords: {
        keyword: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
        built_in: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"
      },
      contains: [{ className: "variable", begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/ }, {
        className: "function",
        begin: n.begin,
        end: "goto:eof",
        contains: [e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }), t]
      }, { className: "number", begin: "\\b\\d+", relevance: 0 }, t]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "string",
      variants: [e.inherit(e.QUOTE_STRING_MODE, { begin: '((u8?|U)|L)?"' }), {
        begin: '(u8?|U)?R"',
        end: '"',
        contains: [e.BACKSLASH_ESCAPE]
      }, { begin: "'\\\\?.", end: "'", illegal: "." }]
    }, n = {
      className: "number",
      variants: [{ begin: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)" }, { begin: e.C_NUMBER_RE }],
      relevance: 0
    }, r = {
      className: "meta",
      begin: "#",
      end: "$",
      keywords: { "meta-keyword": "if else elif endif define undef ifdef ifndef" },
      contains: [{ begin: /\\\n/, relevance: 0 }, {
        beginKeywords: "include",
        end: "$",
        keywords: { "meta-keyword": "include" },
        contains: [e.inherit(t, { className: "meta-string" }), {
          className: "meta-string",
          begin: "<",
          end: ">",
          illegal: "\\n"
        }]
      }, t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    }, i = { className: "variable", begin: "\\&[a-z\\d_]*\\b" }, a = {
      className: "meta-keyword",
      begin: "/[a-z][a-z\\d-]*/"
    }, o = { className: "symbol", begin: "^\\s*[a-zA-Z_][a-zA-Z\\d_]*:" }, s = {
      className: "params",
      begin: "<",
      end: ">",
      contains: [n, i]
    }, l = {
      className: "class",
      begin: /[a-zA-Z_][a-zA-Z\d_@]*\s{/,
      end: /[{;=]/,
      returnBegin: !0,
      excludeEnd: !0
    }, c = {
      className: "class",
      begin: "/\\s*{",
      end: "};",
      relevance: 10,
      contains: [i, a, o, l, s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, t]
    };
    return {
      keywords: "",
      contains: [c, i, a, o, l, s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, t, r, {
        begin: e.IDENT_RE + "::",
        keywords: ""
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "if eq ne lt lte gt gte select default math sep";
    return {
      aliases: ["dst"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [{
        className: "template-tag",
        begin: /\{[#\/]/,
        end: /\}/,
        illegal: /;/,
        contains: [{
          className: "name",
          begin: /[a-zA-Z\.-]+/,
          starts: { endsWithParent: !0, relevance: 0, contains: [e.QUOTE_STRING_MODE] }
        }]
      }, { className: "template-variable", begin: /\{/, end: /\}/, illegal: /;/, keywords: t }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?", n = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", r = "and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote", i = {
      className: "subst",
      begin: "#\\{",
      end: "}",
      lexemes: t,
      keywords: r
    }, a = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE, i],
      variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }]
    }, o = {
      className: "function",
      beginKeywords: "def defp defmacro",
      end: /\B\b/,
      contains: [e.inherit(e.TITLE_MODE, { begin: t, endsParent: !0 })]
    }, s = e.inherit(o, {
      className: "class",
      beginKeywords: "defmodule defrecord",
      end: /\bdo\b|$|;/
    }), l = [a, e.HASH_COMMENT_MODE, s, o, {
      className: "symbol",
      begin: ":",
      contains: [a, { begin: n }],
      relevance: 0
    }, { className: "symbol", begin: t + ":", relevance: 0 }, {
      className: "number",
      begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      relevance: 0
    }, {
      className: "variable",
      begin: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, { begin: "->" }, {
      begin: "(" + e.RE_STARTERS_RE + ")\\s*",
      contains: [e.HASH_COMMENT_MODE, {
        className: "regexp",
        illegal: "\\n",
        contains: [e.BACKSLASH_ESCAPE, i],
        variants: [{ begin: "/", end: "/[a-z]*" }, { begin: "%r\\[", end: "\\][a-z]*" }]
      }],
      relevance: 0
    }];
    return i.contains = l, { lexemes: t, keywords: r, contains: l }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { variants: [e.COMMENT("--", "$"), e.COMMENT("{-", "-}", { contains: ["self"] })] }, n = {
      className: "type",
      begin: "\\b[A-Z][\\w']*",
      relevance: 0
    }, r = {
      begin: "\\(",
      end: "\\)",
      illegal: '"',
      contains: [{ className: "type", begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?" }, t]
    }, i = { begin: "{", end: "}", contains: r.contains };
    return {
      keywords: "let in if then else case of where module import exposing type alias as infix infixl infixr port",
      contains: [{
        beginKeywords: "module",
        end: "where",
        keywords: "module where",
        contains: [r, t],
        illegal: "\\W\\.|;"
      }, {
        begin: "import",
        end: "$",
        keywords: "import as exposing",
        contains: [r, t],
        illegal: "\\W\\.|;"
      }, {
        begin: "type",
        end: "$",
        keywords: "type alias",
        contains: [n, r, i, t]
      }, { beginKeywords: "infix infixl infixr", end: "$", contains: [e.C_NUMBER_MODE, t] }, {
        begin: "port",
        end: "$",
        keywords: "port",
        contains: [t]
      }, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, n, e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }), t, { begin: "->|<-" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      subLanguage: "xml",
      contains: [e.COMMENT("<%#", "%>"), {
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: {
        built_in: "spawn spawn_link self",
        keyword: "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
      },
      contains: [{ className: "meta", begin: "^[0-9]+> ", relevance: 10 }, e.COMMENT("%", "$"), {
        className: "number",
        begin: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
        relevance: 0
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, { begin: "\\?(::)?([A-Z]\\w*(::)?)+" }, { begin: "->" }, { begin: "ok" }, { begin: "!" }, {
        begin: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
        relevance: 0
      }, { begin: "[A-Z][a-zA-Z0-9_']*", relevance: 0 }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-z'][a-zA-Z0-9_']*", n = "(" + t + ":" + t + "|" + t + ")", r = {
      keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
      literal: "false true"
    }, i = e.COMMENT("%", "$"), a = {
      className: "number",
      begin: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
      relevance: 0
    }, o = { begin: "fun\\s+" + t + "/\\d+" }, s = {
      begin: n + "\\(",
      end: "\\)",
      returnBegin: !0,
      relevance: 0,
      contains: [{ begin: n, relevance: 0 }, {
        begin: "\\(",
        end: "\\)",
        endsWithParent: !0,
        returnEnd: !0,
        relevance: 0
      }]
    }, l = { begin: "{", end: "}", relevance: 0 }, c = {
      begin: "\\b_([A-Z][A-Za-z0-9_]*)?",
      relevance: 0
    }, d = { begin: "[A-Z][a-zA-Z0-9_]*", relevance: 0 }, u = {
      begin: "#" + e.UNDERSCORE_IDENT_RE,
      relevance: 0,
      returnBegin: !0,
      contains: [{ begin: "#" + e.UNDERSCORE_IDENT_RE, relevance: 0 }, { begin: "{", end: "}", relevance: 0 }]
    }, m = { beginKeywords: "fun receive if try case", end: "end", keywords: r };
    m.contains = [i, o, e.inherit(e.APOS_STRING_MODE, { className: "" }), m, s, e.QUOTE_STRING_MODE, a, l, c, d, u];
    var p = [i, o, m, s, e.QUOTE_STRING_MODE, a, l, c, d, u];
    s.contains[1].contains = p, l.contains = p, u.contains[1].contains = p;
    var g = { className: "params", begin: "\\(", end: "\\)", contains: p };
    return {
      aliases: ["erl"],
      keywords: r,
      illegal: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
      contains: [{
        className: "function",
        begin: "^" + t + "\\s*\\(",
        end: "->",
        returnBegin: !0,
        illegal: "\\(|#|//|/\\*|\\\\|:|;",
        contains: [g, e.inherit(e.TITLE_MODE, { begin: t })],
        starts: { end: ";|\\.", keywords: r, contains: p }
      }, i, {
        begin: "^-",
        end: "\\.",
        relevance: 0,
        excludeEnd: !0,
        returnBegin: !0,
        lexemes: "-" + e.IDENT_RE,
        keywords: "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",
        contains: [g]
      }, a, e.QUOTE_STRING_MODE, u, c, d, l, { begin: /\.$/ }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      contains: [{
        begin: /[^\u2401\u0001]+/,
        end: /[\u2401\u0001]/,
        excludeEnd: !0,
        returnBegin: !0,
        returnEnd: !1,
        contains: [{
          begin: /([^\u2401\u0001=]+)/,
          end: /=([^\u2401\u0001=]+)/,
          returnEnd: !0,
          returnBegin: !1,
          className: "attr"
        }, { begin: /=/, end: /([\u2401\u0001])/, excludeEnd: !0, excludeBegin: !0, className: "string" }]
      }], case_insensitive: !0
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "params", begin: "\\(", end: "\\)" }, n = {
      literal: ".False. .True.",
      keyword: "kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data",
      built_in: "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image"
    };
    return {
      case_insensitive: !0,
      aliases: ["f90", "f95"],
      keywords: n,
      illegal: /\/\*/,
      contains: [e.inherit(e.APOS_STRING_MODE, {
        className: "string",
        relevance: 0
      }), e.inherit(e.QUOTE_STRING_MODE, { className: "string", relevance: 0 }), {
        className: "function",
        beginKeywords: "subroutine function program",
        illegal: "[${=\\n]",
        contains: [e.UNDERSCORE_TITLE_MODE, t]
      }, e.COMMENT("!", "$", { relevance: 0 }), {
        className: "number",
        begin: "(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?",
        relevance: 0
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { begin: "<", end: ">", contains: [e.inherit(e.TITLE_MODE, { begin: /'[a-zA-Z0-9_]+/ })] };
    return {
      aliases: ["fs"],
      keywords: "abstract and as assert base begin class default delegate do done downcast downto elif else end exception extern false finally for fun function global if in inherit inline interface internal lazy let match member module mutable namespace new null of open or override private public rec return sig static struct then to true try type upcast use val void when while with yield",
      illegal: /\/\*/,
      contains: [{ className: "keyword", begin: /\b(yield|return|let|do)!/ }, {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{ begin: '""' }]
      }, { className: "string", begin: '"""', end: '"""' }, e.COMMENT("\\(\\*", "\\*\\)"), {
        className: "class",
        beginKeywords: "type",
        end: "\\(|=|$",
        excludeEnd: !0,
        contains: [e.UNDERSCORE_TITLE_MODE, t]
      }, { className: "meta", begin: "\\[<", end: ">\\]", relevance: 10 }, {
        className: "symbol",
        begin: "\\B('[A-Za-z])\\b",
        contains: [e.BACKSLASH_ESCAPE]
      }, e.C_LINE_COMMENT_MODE, e.inherit(e.QUOTE_STRING_MODE, { illegal: null }), e.C_NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "abort acronym acronyms alias all and assign binary card diag display else1 eps eq equation equations file files for1 free ge gt if inf integer le loop lt maximizing minimizing model models na ne negative no not option options or ord parameter parameters positive prod putpage puttl repeat sameas scalar scalars semicont semiint set1 sets smax smin solve sos1 sos2 sum system table then until using variable variables while1 xor yes";
    return {
      aliases: ["gms"],
      case_insensitive: !0,
      keywords: t,
      contains: [{
        beginKeywords: "sets parameters variables equations",
        end: ";",
        contains: [{ begin: "/", end: "/", contains: [e.NUMBER_MODE] }]
      }, { className: "string", begin: "\\*{3}", end: "\\*{3}" }, e.NUMBER_MODE, {
        className: "number",
        begin: "\\$[a-zA-Z0-9]+"
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "and bool break|0 call callexe checkinterrupt clear clearg closeall cls comlog compile continue create debug declare delete disable dlibrary|10 dllcall do|0 dos ed edit else|0 elseif enable end endfor|10 endif|10 endp|10 endo|10 errorlog|10 errorlogat expr external fn for|0 format goto gosub|0 graph if|0 keyword let lib library line load loadarray loadexe loadf|10 loadk|10 loadm|10 loadp loads loadx local locate loopnextindex lprint lpwidth lshow matrix msym ndpclex new not open or output outwidth plot plotsym pop prcsn print printdos proc|10 push retp|10 return|0 rndcon rndmod rndmult rndseed run save saveall screen scroll setarray show sparse stop string struct system trace trap|10 threadfor|10 threadendfor|10 threadbegin|10 threadjoin|10 threadstat|10 threadend|10 until use while winprint",
      built_in: "abs acf aconcat aeye amax amean AmericanBinomCall AmericanBinomCall_Greeks AmericanBinomCall_ImpVol AmericanBinomPut AmericanBinomPut_Greeks AmericanBinomPut_ImpVol AmericanBSCall AmericanBSCall_Greeks AmericanBSCall_ImpVol AmericanBSPut AmericanBSPut_Greeks AmericanBSPut_ImpVol amin amult annotationGetDefaults annotationSetBkd annotationSetFont annotationSetLineColor annotationSetLineStyle annotationSetLineThickness annualTradingDays arccos arcsin areshape arrayalloc arrayindex arrayinit arraytomat asciiload asclabel astd astds asum atan atan2 atranspose axmargin balance band bandchol bandcholsol bandltsol bandrv bandsolpd bar base10 begwind besselj bessely beta box boxcox cdfBeta cdfBetaInv cdfBinomial cdfBinomialInv cdfBvn cdfBvn2 cdfBvn2e cdfCauchy cdfCauchyInv cdfChic cdfChii cdfChinc cdfChincInv cdfExp cdfExpInv cdfFc cdfFnc cdfFncInv cdfGam cdfGenPareto cdfHyperGeo cdfLaplace cdfLaplaceInv cdfLogistic cdfLogisticInv cdfmControlCreate cdfMvn cdfMvn2e cdfMvnce cdfMvne cdfMvt2e cdfMvtce cdfMvte cdfN cdfN2 cdfNc cdfNegBinomial cdfNegBinomialInv cdfNi cdfPoisson cdfPoissonInv cdfRayleigh cdfRayleighInv cdfTc cdfTci cdfTnc cdfTvn cdfWeibull cdfWeibullInv cdir ceil ChangeDir chdir chiBarSquare chol choldn cholsol cholup chrs close code cols colsf combinate combinated complex con cond conj cons ConScore contour conv convertsatostr convertstrtosa corrm corrms corrvc corrx corrxs cos cosh counts countwts crossprd crout croutp csrcol csrlin csvReadM csvReadSA cumprodc cumsumc curve cvtos datacreate datacreatecomplex datalist dataload dataloop dataopen datasave date datestr datestring datestrymd dayinyr dayofweek dbAddDatabase|10 dbClose|10 dbCommit|10 dbCreateQuery|10 dbExecQuery|10 dbGetConnectOptions|10 dbGetDatabaseName|10 dbGetDriverName|10 dbGetDrivers|10 dbGetHostName|10 dbGetLastErrorNum|10 dbGetLastErrorText|10 dbGetNumericalPrecPolicy|10 dbGetPassword|10 dbGetPort|10 dbGetTableHeaders|10 dbGetTables|10 dbGetUserName|10 dbHasFeature|10 dbIsDriverAvailable|10 dbIsOpen|10 dbIsOpenError|10 dbOpen|10 dbQueryBindValue|10 dbQueryClear|10 dbQueryCols|10 dbQueryExecPrepared|10 dbQueryFetchAllM|10 dbQueryFetchAllSA|10 dbQueryFetchOneM|10 dbQueryFetchOneSA|10 dbQueryFinish|10 dbQueryGetBoundValue|10 dbQueryGetBoundValues|10 dbQueryGetField|10 dbQueryGetLastErrorNum|10 dbQueryGetLastErrorText|10 dbQueryGetLastInsertID|10 dbQueryGetLastQuery|10 dbQueryGetPosition|10 dbQueryIsActive|10 dbQueryIsForwardOnly|10 dbQueryIsNull|10 dbQueryIsSelect|10 dbQueryIsValid|10 dbQueryPrepare|10 dbQueryRows|10 dbQuerySeek|10 dbQuerySeekFirst|10 dbQuerySeekLast|10 dbQuerySeekNext|10 dbQuerySeekPrevious|10 dbQuerySetForwardOnly|10 dbRemoveDatabase|10 dbRollback|10 dbSetConnectOptions|10 dbSetDatabaseName|10 dbSetHostName|10 dbSetNumericalPrecPolicy|10 dbSetPort|10 dbSetUserName|10 dbTransaction|10 DeleteFile delif delrows denseToSp denseToSpRE denToZero design det detl dfft dffti diag diagrv digamma doswin DOSWinCloseall DOSWinOpen dotfeq dotfeqmt dotfge dotfgemt dotfgt dotfgtmt dotfle dotflemt dotflt dotfltmt dotfne dotfnemt draw drop dsCreate dstat dstatmt dstatmtControlCreate dtdate dtday dttime dttodtv dttostr dttoutc dtvnormal dtvtodt dtvtoutc dummy dummybr dummydn eig eigh eighv eigv elapsedTradingDays endwind envget eof eqSolve eqSolvemt eqSolvemtControlCreate eqSolvemtOutCreate eqSolveset erf erfc erfccplx erfcplx error etdays ethsec etstr EuropeanBinomCall EuropeanBinomCall_Greeks EuropeanBinomCall_ImpVol EuropeanBinomPut EuropeanBinomPut_Greeks EuropeanBinomPut_ImpVol EuropeanBSCall EuropeanBSCall_Greeks EuropeanBSCall_ImpVol EuropeanBSPut EuropeanBSPut_Greeks EuropeanBSPut_ImpVol exctsmpl exec execbg exp extern eye fcheckerr fclearerr feq feqmt fflush fft ffti fftm fftmi fftn fge fgemt fgets fgetsa fgetsat fgetst fgt fgtmt fileinfo filesa fle flemt floor flt fltmt fmod fne fnemt fonts fopen formatcv formatnv fputs fputst fseek fstrerror ftell ftocv ftos ftostrC gamma gammacplx gammaii gausset gdaAppend gdaCreate gdaDStat gdaDStatMat gdaGetIndex gdaGetName gdaGetNames gdaGetOrders gdaGetType gdaGetTypes gdaGetVarInfo gdaIsCplx gdaLoad gdaPack gdaRead gdaReadByIndex gdaReadSome gdaReadSparse gdaReadStruct gdaReportVarInfo gdaSave gdaUpdate gdaUpdateAndPack gdaVars gdaWrite gdaWrite32 gdaWriteSome getarray getdims getf getGAUSShome getmatrix getmatrix4D getname getnamef getNextTradingDay getNextWeekDay getnr getorders getpath getPreviousTradingDay getPreviousWeekDay getRow getscalar3D getscalar4D getTrRow getwind glm gradcplx gradMT gradMTm gradMTT gradMTTm gradp graphprt graphset hasimag header headermt hess hessMT hessMTg hessMTgw hessMTm hessMTmw hessMTT hessMTTg hessMTTgw hessMTTm hessMTw hessp hist histf histp hsec imag indcv indexcat indices indices2 indicesf indicesfn indnv indsav indx integrate1d integrateControlCreate intgrat2 intgrat3 inthp1 inthp2 inthp3 inthp4 inthpControlCreate intquad1 intquad2 intquad3 intrleav intrleavsa intrsect intsimp inv invpd invswp iscplx iscplxf isden isinfnanmiss ismiss key keyav keyw lag lag1 lagn lapEighb lapEighi lapEighvb lapEighvi lapgEig lapgEigh lapgEighv lapgEigv lapgSchur lapgSvdcst lapgSvds lapgSvdst lapSvdcusv lapSvds lapSvdusv ldlp ldlsol linSolve listwise ln lncdfbvn lncdfbvn2 lncdfmvn lncdfn lncdfn2 lncdfnc lnfact lngammacplx lnpdfmvn lnpdfmvt lnpdfn lnpdft loadd loadstruct loadwind loess loessmt loessmtControlCreate log loglog logx logy lower lowmat lowmat1 ltrisol lu lusol machEpsilon make makevars makewind margin matalloc matinit mattoarray maxbytes maxc maxindc maxv maxvec mbesselei mbesselei0 mbesselei1 mbesseli mbesseli0 mbesseli1 meanc median mergeby mergevar minc minindc minv miss missex missrv moment momentd movingave movingaveExpwgt movingaveWgt nextindex nextn nextnevn nextwind ntos null null1 numCombinations ols olsmt olsmtControlCreate olsqr olsqr2 olsqrmt ones optn optnevn orth outtyp pacf packedToSp packr parse pause pdfCauchy pdfChi pdfExp pdfGenPareto pdfHyperGeo pdfLaplace pdfLogistic pdfn pdfPoisson pdfRayleigh pdfWeibull pi pinv pinvmt plotAddArrow plotAddBar plotAddBox plotAddHist plotAddHistF plotAddHistP plotAddPolar plotAddScatter plotAddShape plotAddTextbox plotAddTS plotAddXY plotArea plotBar plotBox plotClearLayout plotContour plotCustomLayout plotGetDefaults plotHist plotHistF plotHistP plotLayout plotLogLog plotLogX plotLogY plotOpenWindow plotPolar plotSave plotScatter plotSetAxesPen plotSetBar plotSetBarFill plotSetBarStacked plotSetBkdColor plotSetFill plotSetGrid plotSetLegend plotSetLineColor plotSetLineStyle plotSetLineSymbol plotSetLineThickness plotSetNewWindow plotSetTitle plotSetWhichYAxis plotSetXAxisShow plotSetXLabel plotSetXRange plotSetXTicInterval plotSetXTicLabel plotSetYAxisShow plotSetYLabel plotSetYRange plotSetZAxisShow plotSetZLabel plotSurface plotTS plotXY polar polychar polyeval polygamma polyint polymake polymat polymroot polymult polyroot pqgwin previousindex princomp printfm printfmt prodc psi putarray putf putvals pvCreate pvGetIndex pvGetParNames pvGetParVector pvLength pvList pvPack pvPacki pvPackm pvPackmi pvPacks pvPacksi pvPacksm pvPacksmi pvPutParVector pvTest pvUnpack QNewton QNewtonmt QNewtonmtControlCreate QNewtonmtOutCreate QNewtonSet QProg QProgmt QProgmtInCreate qqr qqre qqrep qr qre qrep qrsol qrtsol qtyr qtyre qtyrep quantile quantiled qyr qyre qyrep qz rank rankindx readr real reclassify reclassifyCuts recode recserar recsercp recserrc rerun rescale reshape rets rev rfft rffti rfftip rfftn rfftnp rfftp rndBernoulli rndBeta rndBinomial rndCauchy rndChiSquare rndCon rndCreateState rndExp rndGamma rndGeo rndGumbel rndHyperGeo rndi rndKMbeta rndKMgam rndKMi rndKMn rndKMnb rndKMp rndKMu rndKMvm rndLaplace rndLCbeta rndLCgam rndLCi rndLCn rndLCnb rndLCp rndLCu rndLCvm rndLogNorm rndMTu rndMVn rndMVt rndn rndnb rndNegBinomial rndp rndPoisson rndRayleigh rndStateSkip rndu rndvm rndWeibull rndWishart rotater round rows rowsf rref sampleData satostrC saved saveStruct savewind scale scale3d scalerr scalinfnanmiss scalmiss schtoc schur searchsourcepath seekr select selif seqa seqm setdif setdifsa setvars setvwrmode setwind shell shiftr sin singleindex sinh sleep solpd sortc sortcc sortd sorthc sorthcc sortind sortindc sortmc sortr sortrc spBiconjGradSol spChol spConjGradSol spCreate spDenseSubmat spDiagRvMat spEigv spEye spLDL spline spLU spNumNZE spOnes spreadSheetReadM spreadSheetReadSA spreadSheetWrite spScale spSubmat spToDense spTrTDense spTScalar spZeros sqpSolve sqpSolveMT sqpSolveMTControlCreate sqpSolveMTlagrangeCreate sqpSolveMToutCreate sqpSolveSet sqrt statements stdc stdsc stocv stof strcombine strindx strlen strput strrindx strsect strsplit strsplitPad strtodt strtof strtofcplx strtriml strtrimr strtrunc strtruncl strtruncpad strtruncr submat subscat substute subvec sumc sumr surface svd svd1 svd2 svdcusv svds svdusv sysstate tab tan tanh tempname threadBegin threadEnd threadEndFor threadFor threadJoin threadStat time timedt timestr timeutc title tkf2eps tkf2ps tocart todaydt toeplitz token topolar trapchk trigamma trimr trunc type typecv typef union unionsa uniqindx uniqindxsa unique uniquesa upmat upmat1 upper utctodt utctodtv utrisol vals varCovMS varCovXS varget vargetl varmall varmares varput varputl vartypef vcm vcms vcx vcxs vec vech vecr vector vget view viewxyz vlist vnamecv volume vput vread vtypecv wait waitc walkindex where window writer xlabel xlsGetSheetCount xlsGetSheetSize xlsGetSheetTypes xlsMakeRange xlsReadM xlsReadSA xlsWrite xlsWriteM xlsWriteSA xpnd xtics xy xyz ylabel ytics zeros zeta zlabel ztics",
      literal: "DB_AFTER_LAST_ROW DB_ALL_TABLES DB_BATCH_OPERATIONS DB_BEFORE_FIRST_ROW DB_BLOB DB_EVENT_NOTIFICATIONS DB_FINISH_QUERY DB_HIGH_PRECISION DB_LAST_INSERT_ID DB_LOW_PRECISION_DOUBLE DB_LOW_PRECISION_INT32 DB_LOW_PRECISION_INT64 DB_LOW_PRECISION_NUMBERS DB_MULTIPLE_RESULT_SETS DB_NAMED_PLACEHOLDERS DB_POSITIONAL_PLACEHOLDERS DB_PREPARED_QUERIES DB_QUERY_SIZE DB_SIMPLE_LOCKING DB_SYSTEM_TABLES DB_TABLES DB_TRANSACTIONS DB_UNICODE DB_VIEWS"
    }, n = {
      className: "meta",
      begin: "#",
      end: "$",
      keywords: { "meta-keyword": "define definecs|10 undef ifdef ifndef iflight ifdllcall ifmac ifos2win ifunix else endif lineson linesoff srcfile srcline" },
      contains: [{ begin: /\\\n/, relevance: 0 }, {
        beginKeywords: "include",
        end: "$",
        keywords: { "meta-keyword": "include" },
        contains: [{ className: "meta-string", begin: '"', end: '"', illegal: "\\n" }]
      }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    }, r = e.UNDERSCORE_IDENT_RE + "\\s*\\(?", i = [{
      className: "params",
      begin: /\(/,
      end: /\)/,
      keywords: t,
      relevance: 0,
      contains: [e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    }];
    return {
      aliases: ["gss"],
      case_insensitive: !0,
      keywords: t,
      illegal: "(\\{[%#]|[%#]\\})",
      contains: [e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT("@", "@"), n, {
        className: "string",
        begin: '"',
        end: '"',
        contains: [e.BACKSLASH_ESCAPE]
      }, {
        className: "function",
        beginKeywords: "proc keyword",
        end: ";",
        excludeEnd: !0,
        keywords: t,
        contains: [{
          begin: r,
          returnBegin: !0,
          contains: [e.UNDERSCORE_TITLE_MODE],
          relevance: 0
        }, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n].concat(i)
      }, {
        className: "function",
        beginKeywords: "fn",
        end: ";",
        excludeEnd: !0,
        keywords: t,
        contains: [{
          begin: r + e.IDENT_RE + "\\)?\\s*\\=\\s*",
          returnBegin: !0,
          contains: [e.UNDERSCORE_TITLE_MODE],
          relevance: 0
        }, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE].concat(i)
      }, {
        className: "function",
        begin: "\\bexternal (proc|keyword|fn)\\s+",
        end: ";",
        excludeEnd: !0,
        keywords: t,
        contains: [{
          begin: r,
          returnBegin: !0,
          contains: [e.UNDERSCORE_TITLE_MODE],
          relevance: 0
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, {
        className: "function",
        begin: "\\bexternal (matrix|string|array|sparse matrix|struct " + e.IDENT_RE + ")\\s+",
        end: ";",
        excludeEnd: !0,
        keywords: t,
        contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[A-Z_][A-Z0-9_.]*", n = "\\%", r = "IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR", i = {
      className: "meta",
      begin: "([O])([0-9]+)"
    }, a = [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT(/\(/, /\)/), e.inherit(e.C_NUMBER_MODE, { begin: "([-+]?([0-9]*\\.?[0-9]+\\.?))|" + e.C_NUMBER_RE }), e.inherit(e.APOS_STRING_MODE, { illegal: null }), e.inherit(e.QUOTE_STRING_MODE, { illegal: null }), {
      className: "name",
      begin: "([G])([0-9]+\\.?[0-9]?)"
    }, { className: "name", begin: "([M])([0-9]+\\.?[0-9]?)" }, {
      className: "attr",
      begin: "(VC|VS|#)",
      end: "(\\d+)"
    }, { className: "attr", begin: "(VZOFX|VZOFY|VZOFZ)" }, {
      className: "built_in",
      begin: "(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",
      end: "([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])"
    }, { className: "symbol", variants: [{ begin: "N", end: "\\d+", illegal: "\\W" }] }];
    return {
      aliases: ["nc"],
      case_insensitive: !0,
      lexemes: t,
      keywords: r,
      contains: [{ className: "meta", begin: n }, i].concat(a)
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["feature"],
      keywords: "Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When",
      contains: [{ className: "keyword", begin: "\\*" }, { className: "meta", begin: "@[^@\\s]+" }, {
        begin: "\\|",
        end: "\\|\\w*$",
        contains: [{ className: "string", begin: "[^|]+" }]
      }, { className: "variable", begin: "<", end: ">" }, e.HASH_COMMENT_MODE, {
        className: "string",
        begin: '"""',
        end: '"""'
      }, e.QUOTE_STRING_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: {
        keyword: "break continue discard do else for if return whileattribute binding buffer ccw centroid centroid varying coherent column_major const cw depth_any depth_greater depth_less depth_unchanged early_fragment_tests equal_spacing flat fractional_even_spacing fractional_odd_spacing highp in index inout invariant invocations isolines layout line_strip lines lines_adjacency local_size_x local_size_y local_size_z location lowp max_vertices mediump noperspective offset origin_upper_left out packed patch pixel_center_integer point_mode points precise precision quads r11f_g11f_b10f r16 r16_snorm r16f r16i r16ui r32f r32i r32ui r8 r8_snorm r8i r8ui readonly restrict rg16 rg16_snorm rg16f rg16i rg16ui rg32f rg32i rg32ui rg8 rg8_snorm rg8i rg8ui rgb10_a2 rgb10_a2ui rgba16 rgba16_snorm rgba16f rgba16i rgba16ui rgba32f rgba32i rgba32ui rgba8 rgba8_snorm rgba8i rgba8ui row_major sample shared smooth std140 std430 stream triangle_strip triangles triangles_adjacency uniform varying vertices volatile writeonly",
        type: "atomic_uint bool bvec2 bvec3 bvec4 dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 double dvec2 dvec3 dvec4 float iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBufferiimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray int isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow image1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D samplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 vec2 vec3 vec4 void",
        built_in: "gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxComputeAtomicCounterBuffers gl_MaxComputeAtomicCounters gl_MaxComputeImageUniforms gl_MaxComputeTextureImageUnits gl_MaxComputeUniformComponents gl_MaxComputeWorkGroupCount gl_MaxComputeWorkGroupSize gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentInputVectors gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexOutputVectors gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffset gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_GlobalInvocationID gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_LocalInvocationID gl_LocalInvocationIndex gl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_NumSamples gl_NumWorkGroups gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrix gl_TextureMatrixInverse gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_WorkGroupID gl_WorkGroupSize gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicAdd atomicAnd atomicCompSwap atomicCounter atomicCounterDecrement atomicCounterIncrement atomicExchange atomicMax atomicMin atomicOr atomicXor barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual groupMemoryBarrier imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageSize imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier memoryBarrierAtomicCounter memoryBarrierBuffer memoryBarrierImage memoryBarrierShared min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLevels textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow",
        literal: "true false"
      },
      illegal: '"',
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$"
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
      literal: "true false iota nil",
      built_in: "append cap close complex copy imag len make new panic print println real recover delete"
    };
    return {
      aliases: ["golang"],
      keywords: t,
      illegal: "</",
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "[^\\\\]'"
      }, { className: "string", begin: "`", end: "`" }, {
        className: "number",
        begin: e.C_NUMBER_RE + "[dflsi]?",
        relevance: 0
      }, e.C_NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: {
        keyword: "println readln print import module function local return let var while for foreach times in case when match with break continue augment augmentation each find filter reduce if then else otherwise try catch finally raise throw orIfNull DynamicObject|10 DynamicVariable struct Observable map set vector list array",
        literal: "true false null"
      },
      contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, { className: "meta", begin: "@[A-Za-z]+" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      case_insensitive: !0,
      keywords: { keyword: "task project allprojects subprojects artifacts buildscript configurations dependencies repositories sourceSets description delete from into include exclude source classpath destinationDir includes options sourceCompatibility targetCompatibility group flatDir doLast doFirst flatten todir fromdir ant def abstract break case catch continue default do else extends final finally for if implements instanceof native new private protected public return static switch synchronized throw throws transient try volatile while strictfp package import false null super this true antlrtask checkstyle codenarc copy boolean byte char class double float int interface long short void compile runTime file fileTree abs any append asList asWritable call collect compareTo count div dump each eachByte eachFile eachLine every find findAll flatten getAt getErr getIn getOut getText grep immutable inject inspect intersect invokeMethods isCase join leftShift minus multiply newInputStream newOutputStream newPrintWriter newReader newWriter next plus pop power previous print println push putAt read readBytes readLines reverse reverseEach round size sort splitEachLine step subMap times toInteger toList tokenize upto waitForOrKill withPrintWriter withReader withStream withWriter withWriterAppend write writeLine" },
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.REGEXP_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: {
        literal: "true false null",
        keyword: "byte short char int long boolean float double void def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
      },
      contains: [e.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{ begin: /\w+@/, relevance: 0 }, { className: "doctag", begin: "@[A-Za-z]+" }]
      }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "string",
        begin: '"""',
        end: '"""'
      }, { className: "string", begin: "'''", end: "'''" }, {
        className: "string",
        begin: "\\$/",
        end: "/\\$",
        relevance: 10
      }, e.APOS_STRING_MODE, {
        className: "regexp",
        begin: /~?\/[^\/\n]+\//,
        contains: [e.BACKSLASH_ESCAPE]
      }, e.QUOTE_STRING_MODE, {
        className: "meta",
        begin: "^#!/usr/bin/env",
        end: "$",
        illegal: "\n"
      }, e.BINARY_NUMBER_MODE, {
        className: "class",
        beginKeywords: "class interface trait enum",
        end: "{",
        illegal: ":",
        contains: [{ beginKeywords: "extends implements" }, e.UNDERSCORE_TITLE_MODE]
      }, e.C_NUMBER_MODE, { className: "meta", begin: "@[A-Za-z]+" }, {
        className: "string",
        begin: /[^\?]{0}[A-Za-z0-9_$]+ *:/
      }, { begin: /\?/, end: /\:/ }, { className: "symbol", begin: "^\\s*[A-Za-z0-9_$]+:", relevance: 0 }],
      illegal: /#|<\//
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      case_insensitive: !0,
      contains: [{
        className: "meta",
        begin: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
        relevance: 10
      }, e.COMMENT("^\\s*(!=#|=#|-#|/).*$", !1, { relevance: 0 }), {
        begin: "^\\s*(-|=|!=)(?!#)",
        starts: { end: "\\n", subLanguage: "ruby" }
      }, {
        className: "tag",
        begin: "^\\s*%",
        contains: [{ className: "selector-tag", begin: "\\w+" }, {
          className: "selector-id",
          begin: "#[\\w-]+"
        }, { className: "selector-class", begin: "\\.[\\w-]+" }, {
          begin: "{\\s*",
          end: "\\s*}",
          contains: [{
            begin: ":\\w+\\s*=>",
            end: ",\\s+",
            returnBegin: !0,
            endsWithParent: !0,
            contains: [{ className: "attr", begin: ":\\w+" }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
              begin: "\\w+",
              relevance: 0
            }]
          }]
        }, {
          begin: "\\(\\s*",
          end: "\\s*\\)",
          excludeEnd: !0,
          contains: [{
            begin: "\\w+\\s*=",
            end: "\\s+",
            returnBegin: !0,
            endsWithParent: !0,
            contains: [{
              className: "attr",
              begin: "\\w+",
              relevance: 0
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, { begin: "\\w+", relevance: 0 }]
          }]
        }]
      }, { begin: "^\\s*[=~]\\s*" }, { begin: "#{", starts: { end: "}", subLanguage: "ruby" } }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { "builtin-name": "each in with if else unless bindattr action collection debugger log outlet template unbound view yield" };
    return {
      aliases: ["hbs", "html.hbs", "html.handlebars"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [e.COMMENT("{{!(--)?", "(--)?}}"), {
        className: "template-tag",
        begin: /\{\{[#\/]/,
        end: /\}\}/,
        contains: [{
          className: "name",
          begin: /[a-zA-Z\.-]+/,
          keywords: t,
          starts: { endsWithParent: !0, relevance: 0, contains: [e.QUOTE_STRING_MODE] }
        }]
      }, { className: "template-variable", begin: /\{\{/, end: /\}\}/, keywords: t }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { variants: [e.COMMENT("--", "$"), e.COMMENT("{-", "-}", { contains: ["self"] })] }, n = {
      className: "meta",
      begin: "{-#",
      end: "#-}"
    }, r = { className: "meta", begin: "^#", end: "$" }, i = {
      className: "type",
      begin: "\\b[A-Z][\\w']*",
      relevance: 0
    }, a = {
      begin: "\\(",
      end: "\\)",
      illegal: '"',
      contains: [n, r, {
        className: "type",
        begin: "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"
      }, e.inherit(e.TITLE_MODE, { begin: "[_a-z][\\w']*" }), t]
    }, o = { begin: "{", end: "}", contains: a.contains };
    return {
      aliases: ["hs"],
      keywords: "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",
      contains: [{
        beginKeywords: "module",
        end: "where",
        keywords: "module where",
        contains: [a, t],
        illegal: "\\W\\.|;"
      }, {
        begin: "\\bimport\\b",
        end: "$",
        keywords: "import qualified as hiding",
        contains: [a, t],
        illegal: "\\W\\.|;"
      }, {
        className: "class",
        begin: "^(\\s*)?(class|instance)\\b",
        end: "where",
        keywords: "class family instance where",
        contains: [i, a, t]
      }, {
        className: "class",
        begin: "\\b(data|(new)?type)\\b",
        end: "$",
        keywords: "data family type newtype deriving",
        contains: [n, i, a, o, t]
      }, { beginKeywords: "default", end: "$", contains: [i, a, t] }, {
        beginKeywords: "infix infixl infixr",
        end: "$",
        contains: [e.C_NUMBER_MODE, t]
      }, {
        begin: "\\bforeign\\b",
        end: "$",
        keywords: "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",
        contains: [i, e.QUOTE_STRING_MODE, t]
      }, {
        className: "meta",
        begin: "#!\\/usr\\/bin\\/env runhaskell",
        end: "$"
      }, n, r, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, i, e.inherit(e.TITLE_MODE, { begin: "^[_a-z][\\w']*" }), t, { begin: "->|<-" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)";
    return {
      aliases: ["hx"],
      keywords: {
        keyword: "break callback case cast catch class continue default do dynamic else enum extends extern for function here if implements import in inline interface never new override package private public return static super switch this throw trace try typedef untyped using var while",
        literal: "true false null"
      },
      contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, {
        className: "class",
        beginKeywords: "class interface",
        end: "{",
        excludeEnd: !0,
        contains: [{ beginKeywords: "extends implements" }, e.TITLE_MODE]
      }, {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: { "meta-keyword": "if else elseif end error" }
      }, {
        className: "function",
        beginKeywords: "function",
        end: "[{;]",
        excludeEnd: !0,
        illegal: "\\S",
        contains: [e.TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }, { begin: ":\\s*" + t }]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      case_insensitive: !0,
      keywords: "goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop",
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
        className: "string",
        begin: '{"',
        end: '"}',
        contains: [e.BACKSLASH_ESCAPE]
      }, e.COMMENT(";", "$"), {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: { "meta-keyword": "addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib" },
        contains: [e.inherit(e.QUOTE_STRING_MODE, { className: "meta-string" }), e.NUMBER_MODE, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, { className: "symbol", begin: "^\\*(\\w+|@)" }, e.NUMBER_MODE, e.C_NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "HTTP/[0-9\\.]+";
    return {
      aliases: ["https"],
      illegal: "\\S",
      contains: [{
        begin: "^" + t,
        end: "$",
        contains: [{ className: "number", begin: "\\b\\d{3}\\b" }]
      }, {
        begin: "^[A-Z]+ (.*?) " + t + "$",
        returnBegin: !0,
        end: "$",
        contains: [{
          className: "string",
          begin: " ",
          end: " ",
          excludeBegin: !0,
          excludeEnd: !0
        }, { begin: t }, { className: "keyword", begin: "[A-Z]+" }]
      }, {
        className: "attribute",
        begin: "^\\w",
        end: ": ",
        excludeEnd: !0,
        illegal: "\\n|\\s|=",
        starts: { end: "$", relevance: 0 }
      }, { begin: "\\n\\n", starts: { subLanguage: [], endsWithParent: !0 } }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "\\[", n = "\\]";
    return {
      aliases: ["i7"],
      case_insensitive: !0,
      keywords: { keyword: "thing room person man woman animal container supporter backdrop door scenery open closed locked inside gender is are say understand kind of rule" },
      contains: [{
        className: "string",
        begin: '"',
        end: '"',
        relevance: 0,
        contains: [{ className: "subst", begin: t, end: n }]
      }, {
        className: "section",
        begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
        end: "$"
      }, {
        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
        end: ":",
        contains: [{ begin: "\\(This", end: "\\)" }]
      }, { className: "comment", begin: t, end: n, contains: ["self"] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [{ begin: "'''", end: "'''", relevance: 10 }, { begin: '"""', end: '"""', relevance: 10 }, {
        begin: '"',
        end: '"'
      }, { begin: "'", end: "'" }]
    };
    return {
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [e.COMMENT(";", "$"), e.HASH_COMMENT_MODE, {
        className: "section",
        begin: /^\s*\[+/,
        end: /\]+/
      }, {
        begin: /^[a-z0-9\[\]_-]+\s*=\s*/,
        end: "$",
        returnBegin: !0,
        contains: [{ className: "attr", begin: /[a-z0-9\[\]_-]+/ }, {
          begin: /=/,
          endsWithParent: !0,
          relevance: 0,
          contains: [{ className: "literal", begin: /\bon|off|true|false|yes|no\b/ }, {
            className: "variable",
            variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)}/ }]
          }, t, { className: "number", begin: /([\+\-]+)?[\d]+_[\d_]+/ }, e.NUMBER_MODE]
        }]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "params", begin: "\\(", end: "\\)" }, n = {
      literal: ".False. .True.",
      keyword: "kind do while private call intrinsic where elsewhere type endtype endmodule endselect endinterface end enddo endif if forall endforall only contains default return stop then public subroutine|10 function program .and. .or. .not. .le. .eq. .ge. .gt. .lt. goto save else use module select case access blank direct exist file fmt form formatted iostat name named nextrec number opened rec recl sequential status unformatted unit continue format pause cycle exit c_null_char c_alert c_backspace c_form_feed flush wait decimal round iomsg synchronous nopass non_overridable pass protected volatile abstract extends import non_intrinsic value deferred generic final enumerator class associate bind enum c_int c_short c_long c_long_long c_signed_char c_size_t c_int8_t c_int16_t c_int32_t c_int64_t c_int_least8_t c_int_least16_t c_int_least32_t c_int_least64_t c_int_fast8_t c_int_fast16_t c_int_fast32_t c_int_fast64_t c_intmax_t C_intptr_t c_float c_double c_long_double c_float_complex c_double_complex c_long_double_complex c_bool c_char c_null_ptr c_null_funptr c_new_line c_carriage_return c_horizontal_tab c_vertical_tab iso_c_binding c_loc c_funloc c_associated  c_f_pointer c_ptr c_funptr iso_fortran_env character_storage_size error_unit file_storage_size input_unit iostat_end iostat_eor numeric_storage_size output_unit c_f_procpointer ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode newunit contiguous recursive pad position action delim readwrite eor advance nml interface procedure namelist include sequence elemental pure integer real character complex logical dimension allocatable|10 parameter external implicit|10 none double precision assign intent optional pointer target in out common equivalence data begin_provider &begin_provider end_provider begin_shell end_shell begin_template end_template subst assert touch soft_touch provide no_dep free irp_if irp_else irp_endif irp_write irp_read",
      built_in: "alog alog10 amax0 amax1 amin0 amin1 amod cabs ccos cexp clog csin csqrt dabs dacos dasin datan datan2 dcos dcosh ddim dexp dint dlog dlog10 dmax1 dmin1 dmod dnint dsign dsin dsinh dsqrt dtan dtanh float iabs idim idint idnint ifix isign max0 max1 min0 min1 sngl algama cdabs cdcos cdexp cdlog cdsin cdsqrt cqabs cqcos cqexp cqlog cqsin cqsqrt dcmplx dconjg derf derfc dfloat dgamma dimag dlgama iqint qabs qacos qasin qatan qatan2 qcmplx qconjg qcos qcosh qdim qerf qerfc qexp qgamma qimag qlgama qlog qlog10 qmax1 qmin1 qmod qnint qsign qsin qsinh qsqrt qtan qtanh abs acos aimag aint anint asin atan atan2 char cmplx conjg cos cosh exp ichar index int log log10 max min nint sign sin sinh sqrt tan tanh print write dim lge lgt lle llt mod nullify allocate deallocate adjustl adjustr all allocated any associated bit_size btest ceiling count cshift date_and_time digits dot_product eoshift epsilon exponent floor fraction huge iand ibclr ibits ibset ieor ior ishft ishftc lbound len_trim matmul maxexponent maxloc maxval merge minexponent minloc minval modulo mvbits nearest pack present product radix random_number random_seed range repeat reshape rrspacing scale scan selected_int_kind selected_real_kind set_exponent shape size spacing spread sum system_clock tiny transpose trim ubound unpack verify achar iachar transfer dble entry dprod cpu_time command_argument_count get_command get_command_argument get_environment_variable is_iostat_end ieee_arithmetic ieee_support_underflow_control ieee_get_underflow_mode ieee_set_underflow_mode is_iostat_eor move_alloc new_line selected_char_kind same_type_as extends_type_ofacosh asinh atanh bessel_j0 bessel_j1 bessel_jn bessel_y0 bessel_y1 bessel_yn erf erfc erfc_scaled gamma log_gamma hypot norm2 atomic_define atomic_ref execute_command_line leadz trailz storage_size merge_bits bge bgt ble blt dshiftl dshiftr findloc iall iany iparity image_index lcobound ucobound maskl maskr num_images parity popcnt poppar shifta shiftl shiftr this_image IRP_ALIGN irp_here"
    };
    return {
      case_insensitive: !0,
      keywords: n,
      illegal: /\/\*/,
      contains: [e.inherit(e.APOS_STRING_MODE, {
        className: "string",
        relevance: 0
      }), e.inherit(e.QUOTE_STRING_MODE, { className: "string", relevance: 0 }), {
        className: "function",
        beginKeywords: "subroutine function program",
        illegal: "[${=\\n]",
        contains: [e.UNDERSCORE_TITLE_MODE, t]
      }, e.COMMENT("!", "$", { relevance: 0 }), e.COMMENT("begin_doc", "end_doc", { relevance: 10 }), {
        className: "number",
        begin: "(?=\\b|\\+|\\-|\\.)(?=\\.\\d|\\d)(?:\\d+)?(?:\\.?\\d*)(?:[de][+-]?\\d+)?\\b\\.?",
        relevance: 0
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = e.UNDERSCORE_IDENT_RE + "(<" + e.UNDERSCORE_IDENT_RE + "(\\s*,\\s*" + e.UNDERSCORE_IDENT_RE + ")*>)?", n = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private", r = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?", i = {
      className: "number",
      begin: r,
      relevance: 0
    };
    return {
      aliases: ["jsp"],
      keywords: n,
      illegal: /<\/|#/,
      contains: [e.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{ begin: /\w+@/, relevance: 0 }, { className: "doctag", begin: "@[A-Za-z]+" }]
      }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
        className: "class",
        beginKeywords: "class interface",
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: "class interface",
        illegal: /[:"\[\]]/,
        contains: [{ beginKeywords: "extends implements" }, e.UNDERSCORE_TITLE_MODE]
      }, { beginKeywords: "new throw return else", relevance: 0 }, {
        className: "function",
        begin: "(" + t + "\\s+)+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: n,
        contains: [{
          begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          relevance: 0,
          contains: [e.UNDERSCORE_TITLE_MODE]
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: n,
          relevance: 0,
          contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE]
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, i, { className: "meta", begin: "@[A-Za-z]+" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["js"],
      keywords: {
        keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await import from as",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
      },
      contains: [{ className: "meta", relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ }, {
        className: "meta",
        begin: /^#!/,
        end: /$/
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
        className: "string",
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE, { className: "subst", begin: "\\$\\{", end: "\\}" }]
      }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "number",
        variants: [{ begin: "\\b(0[bB][01]+)" }, { begin: "\\b(0[oO][0-7]+)" }, { begin: e.C_NUMBER_RE }],
        relevance: 0
      }, {
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.REGEXP_MODE, {
          begin: /</,
          end: />\s*[);\]]/,
          relevance: 0,
          subLanguage: "xml"
        }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "function",
        end: /\{/,
        excludeEnd: !0,
        contains: [e.inherit(e.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }), {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }],
        illegal: /\[|%/
      }, { begin: /\$[(.]/ }, { begin: "\\." + e.IDENT_RE, relevance: 0 }, {
        className: "class",
        beginKeywords: "class",
        end: /[{;=]/,
        excludeEnd: !0,
        illegal: /[:"\[\]]/,
        contains: [{ beginKeywords: "extends" }, e.UNDERSCORE_TITLE_MODE]
      }, { beginKeywords: "constructor", end: /\{/, excludeEnd: !0 }],
      illegal: /#(?!!)/
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { literal: "true false null" }, n = [e.QUOTE_STRING_MODE, e.C_NUMBER_MODE], r = {
      end: ",",
      endsWithParent: !0,
      excludeEnd: !0,
      contains: n,
      keywords: t
    }, i = {
      begin: "{",
      end: "}",
      contains: [{
        className: "attr",
        begin: '\\s*"',
        end: '"\\s*:\\s*',
        excludeBegin: !0,
        excludeEnd: !0,
        contains: [e.BACKSLASH_ESCAPE],
        illegal: "\\n",
        starts: r
      }],
      illegal: "\\S"
    }, a = { begin: "\\[", end: "\\]", contains: [e.inherit(r)], illegal: "\\S" };
    return n.splice(n.length, 0, i, a), { contains: n, keywords: t, illegal: "\\S" }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "in abstract baremodule begin bitstype break catch ccall const continue do else elseif end export finally for function global if immutable import importall let local macro module quote return try type typealias using while",
      literal: "true false ARGS CPU_CORES C_NULL DL_LOAD_PATH DevNull ENDIAN_BOM ENV I|0 Inf Inf16 Inf32 InsertionSort JULIA_HOME LOAD_PATH MS_ASYNC MS_INVALIDATE MS_SYNC MergeSort NaN NaN16 NaN32 OS_NAME QuickSort RTLD_DEEPBIND RTLD_FIRST RTLD_GLOBAL RTLD_LAZY RTLD_LOCAL RTLD_NODELETE RTLD_NOLOAD RTLD_NOW RoundDown RoundFromZero RoundNearest RoundToZero RoundUp STDERR STDIN STDOUT VERSION WORD_SIZE catalan cglobal e|0 eu|0 eulergamma golden im nothing pi γ π φ Inf64 NaN64 RoundNearestTiesAway RoundNearestTiesUp ",
      built_in: "ANY ASCIIString AbstractArray AbstractRNG AbstractSparseArray Any ArgumentError Array Associative Base64Pipe Bidiagonal BigFloat BigInt BitArray BitMatrix BitVector Bool BoundsError Box CFILE Cchar Cdouble Cfloat Char CharString Cint Clong Clonglong ClusterManager Cmd Coff_t Colon Complex Complex128 Complex32 Complex64 Condition Cptrdiff_t Cshort Csize_t Cssize_t Cuchar Cuint Culong Culonglong Cushort Cwchar_t DArray DataType DenseArray Diagonal Dict DimensionMismatch DirectIndexString Display DivideError DomainError EOFError EachLine Enumerate ErrorException Exception Expr Factorization FileMonitor FileOffset Filter Float16 Float32 Float64 FloatRange FloatingPoint Function GetfieldNode GotoNode Hermitian IO IOBuffer IOStream IPv4 IPv6 InexactError Int Int128 Int16 Int32 Int64 Int8 IntSet Integer InterruptException IntrinsicFunction KeyError LabelNode LambdaStaticData LineNumberNode LoadError LocalProcess MIME MathConst MemoryError MersenneTwister Method MethodError MethodTable Module NTuple NewvarNode Nothing Number ObjectIdDict OrdinalRange OverflowError ParseError PollingFileWatcher ProcessExitedException ProcessGroup Ptr QuoteNode Range Range1 Ranges Rational RawFD Real Regex RegexMatch RemoteRef RepString RevString RopeString RoundingMode Set SharedArray Signed SparseMatrixCSC StackOverflowError Stat StatStruct StepRange String SubArray SubString SymTridiagonal Symbol SymbolNode Symmetric SystemError Task TextDisplay Timer TmStruct TopNode Triangular Tridiagonal Type TypeConstructor TypeError TypeName TypeVar UTF16String UTF32String UTF8String UdpSocket Uint Uint128 Uint16 Uint32 Uint64 Uint8 UndefRefError UndefVarError UniformScaling UnionType UnitRange Unsigned Vararg VersionNumber WString WeakKeyDict WeakRef Woodbury Zip AbstractChannel AbstractFloat AbstractString AssertionError Base64DecodePipe Base64EncodePipe BufferStream CapturedException CartesianIndex CartesianRange Channel Cintmax_t CompositeException Cstring Cuintmax_t Cwstring Date DateTime Dims Enum GenSym GlobalRef HTML InitError InvalidStateException Irrational LinSpace LowerTriangular NullException Nullable OutOfMemoryError Pair PartialQuickSort Pipe RandomDevice ReadOnlyMemoryError ReentrantLock Ref RemoteException SegmentationFault SerializationState SimpleVector TCPSocket Text Tuple UDPSocket UInt UInt128 UInt16 UInt32 UInt64 UInt8 UnicodeError Union UpperTriangular Val Void WorkerConfig AbstractMatrix AbstractSparseMatrix AbstractSparseVector AbstractVecOrMat AbstractVector DenseMatrix DenseVecOrMat DenseVector Matrix SharedMatrix SharedVector StridedArray StridedMatrix StridedVecOrMat StridedVector VecOrMat Vector "
    }, n = "[A-Za-z_\\u00A1-\\uFFFF][A-Za-z_0-9\\u00A1-\\uFFFF]*", r = {
      lexemes: n,
      keywords: t,
      illegal: /<\//
    }, i = { className: "type", begin: /::/ }, a = { className: "type", begin: /<:/ }, o = {
      className: "number",
      begin: /(\b0x[\d_]*(\.[\d_]*)?|0x\.\d[\d_]*)p[-+]?\d+|\b0[box][a-fA-F0-9][a-fA-F0-9_]*|(\b\d[\d_]*(\.[\d_]*)?|\.\d[\d_]*)([eEfF][-+]?\d+)?/,
      relevance: 0
    }, s = { className: "string", begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/ }, l = {
      className: "subst",
      begin: /\$\(/,
      end: /\)/,
      keywords: t
    }, c = { className: "variable", begin: "\\$" + n }, d = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE, l, c],
      variants: [{ begin: /\w*"""/, end: /"""\w*/, relevance: 10 }, { begin: /\w*"/, end: /"\w*/ }]
    }, u = { className: "string", contains: [e.BACKSLASH_ESCAPE, l, c], begin: "`", end: "`" }, m = {
      className: "meta",
      begin: "@" + n
    }, p = { className: "comment", variants: [{ begin: "#=", end: "=#", relevance: 10 }, { begin: "#", end: "$" }] };
    return r.contains = [o, s, i, a, d, u, m, p, e.HASH_COMMENT_MODE], l.contains = r.contains, r
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "val var get set class trait object open private protected public final enum if else do while for when break continue throw try catch finally import package is as in return fun override default companion reified inline volatile transient native Byte Short Char Int Long Boolean Float Double Void Unit Nothing";
    return {
      keywords: { keyword: t, literal: "true false null" },
      contains: [e.COMMENT("/\\*\\*", "\\*/", {
        relevance: 0,
        contains: [{ className: "doctag", begin: "@[A-Za-z]+" }]
      }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "type",
        begin: /</,
        end: />/,
        returnBegin: !0,
        excludeEnd: !1,
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "fun",
        end: "[(]|$",
        returnBegin: !0,
        excludeEnd: !0,
        keywords: t,
        illegal: /fun\s+(<.*>)?[^\s\(]+(\s+[^\s\(]+)\s*=/,
        relevance: 5,
        contains: [{
          begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          relevance: 0,
          contains: [e.UNDERSCORE_TITLE_MODE]
        }, { className: "type", begin: /</, end: />/, keywords: "reified", relevance: 0 }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          keywords: t,
          relevance: 0,
          illegal: /\([^\(,\s:]+,/,
          contains: [{
            className: "type",
            begin: /:\s*/,
            end: /\s*[=\)]/,
            excludeBegin: !0,
            returnEnd: !0,
            relevance: 0
          }]
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
      }, {
        className: "class",
        beginKeywords: "class trait",
        end: /[:\{(]|$/,
        excludeEnd: !0,
        illegal: "extends implements",
        contains: [e.UNDERSCORE_TITLE_MODE, {
          className: "type",
          begin: /</,
          end: />/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0
        }, { className: "type", begin: /[,:]\s*/, end: /[<\(,]|$/, excludeBegin: !0, returnEnd: !0 }]
      }, {
        className: "variable",
        beginKeywords: "var val",
        end: /\s*[=:$]/,
        excludeEnd: !0
      }, e.QUOTE_STRING_MODE, { className: "meta", begin: "^#!/usr/bin/env", end: "$", illegal: "\n" }, e.C_NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-zA-Z_][a-zA-Z0-9_.]*", n = "<\\?(lasso(script)?|=)", r = "\\]|\\?>", i = {
      literal: "true false none minimal full all void bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft",
      built_in: "array date decimal duration integer map pair string tag xml null boolean bytes keyword list locale queue set stack staticarray local var variable global data self inherited currentcapture givenblock",
      keyword: "error_code error_msg error_pop error_push error_reset cache database_names database_schemanames database_tablenames define_tag define_type email_batch encode_set html_comment handle handle_error header if inline iterate ljax_target link link_currentaction link_currentgroup link_currentrecord link_detail link_firstgroup link_firstrecord link_lastgroup link_lastrecord link_nextgroup link_nextrecord link_prevgroup link_prevrecord log loop namespace_using output_none portal private protect records referer referrer repeating resultset rows search_args search_arguments select sort_args sort_arguments thread_atomic value_list while abort case else if_empty if_false if_null if_true loop_abort loop_continue loop_count params params_up return return_value run_children soap_definetag soap_lastrequest soap_lastresponse tag_name ascending average by define descending do equals frozen group handle_failure import in into join let match max min on order parent protected provide public require returnhome skip split_thread sum take thread to trait type where with yield yieldhome and or not"
    }, a = e.COMMENT("<!--", "-->", { relevance: 0 }), o = {
      className: "meta",
      begin: "\\[noprocess\\]",
      starts: { end: "\\[/noprocess\\]", returnEnd: !0, contains: [a] }
    }, s = { className: "meta", begin: "\\[/noprocess|" + n }, l = {
      className: "symbol",
      begin: "'" + t + "'"
    }, c = [e.COMMENT("/\\*\\*!", "\\*/"), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.inherit(e.C_NUMBER_MODE, { begin: e.C_NUMBER_RE + "|(infinity|nan)\\b" }), e.inherit(e.APOS_STRING_MODE, { illegal: null }), e.inherit(e.QUOTE_STRING_MODE, { illegal: null }), {
      className: "string",
      begin: "`",
      end: "`"
    }, { variants: [{ begin: "[#$]" + t }, { begin: "#", end: "\\d+", illegal: "\\W" }] }, {
      className: "type",
      begin: "::\\s*",
      end: t,
      illegal: "\\W"
    }, {
      className: "attr",
      variants: [{ begin: "-(?!infinity)" + e.UNDERSCORE_IDENT_RE, relevance: 0 }, { begin: "(\\.\\.\\.)" }]
    }, { begin: /(->|\.\.?)\s*/, relevance: 0, contains: [l] }, {
      className: "class",
      beginKeywords: "define",
      returnEnd: !0,
      end: "\\(|=>",
      contains: [e.inherit(e.TITLE_MODE, { begin: e.UNDERSCORE_IDENT_RE + "(=(?!>))?" })]
    }];
    return {
      aliases: ["ls", "lassoscript"],
      case_insensitive: !0,
      lexemes: t + "|&[lg]t;",
      keywords: i,
      contains: [{
        className: "meta",
        begin: r,
        relevance: 0,
        starts: { end: "\\[|" + n, returnEnd: !0, relevance: 0, contains: [a] }
      }, o, s, {
        className: "meta",
        begin: "\\[no_square_brackets",
        starts: {
          end: "\\[/no_square_brackets\\]",
          lexemes: t + "|&[lg]t;",
          keywords: i,
          contains: [{
            className: "meta",
            begin: r,
            relevance: 0,
            starts: { end: "\\[noprocess\\]|" + n, returnEnd: !0, contains: [a] }
          }, o, s].concat(c)
        }
      }, { className: "meta", begin: "\\[", relevance: 0 }, {
        className: "meta",
        begin: "^#!.+lasso9\\b",
        relevance: 10
      }].concat(c)
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[\\w-]+", n = "(" + t + "|@{" + t + "})", r = [], i = [], a = function (e) {
      return { className: "string", begin: "~?" + e + ".*?" + e }
    }, o = function (e, t, n) {
      return { className: e, begin: t, relevance: n }
    }, s = { begin: "\\(", end: "\\)", contains: i, relevance: 0 };
    i.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, a("'"), a('"'), e.CSS_NUMBER_MODE, {
      begin: "(url|data-uri)\\(",
      starts: { className: "string", end: "[\\)\\n]", excludeEnd: !0 }
    }, o("number", "#[0-9A-Fa-f]+\\b"), s, o("variable", "@@?" + t, 10), o("variable", "@{" + t + "}"), o("built_in", "~?`[^`]*?`"), {
      className: "attribute",
      begin: t + "\\s*:",
      end: ":",
      returnBegin: !0,
      excludeEnd: !0
    }, { className: "meta", begin: "!important" });
    var l = i.concat({ begin: "{", end: "}", contains: r }), c = {
      beginKeywords: "when",
      endsWithParent: !0,
      contains: [{ beginKeywords: "and not" }].concat(i)
    }, d = {
      className: "attribute",
      begin: n,
      end: ":",
      excludeEnd: !0,
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
      illegal: /\S/,
      starts: { end: "[;}]", returnEnd: !0, contains: i, illegal: "[<=$]" }
    }, u = {
      className: "keyword",
      begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: { end: "[;{}]", returnEnd: !0, contains: i, relevance: 0 }
    }, m = {
      className: "variable",
      variants: [{ begin: "@" + t + "\\s*:", relevance: 15 }, { begin: "@" + t }],
      starts: { end: "[;}]", returnEnd: !0, contains: l }
    }, p = {
      variants: [{ begin: "[\\.#:&\\[]", end: "[;{}]" }, { begin: n + "[^;]*{", end: "{" }],
      returnBegin: !0,
      returnEnd: !0,
      illegal: "[<='$\"]",
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, c, o("keyword", "all\\b"), o("variable", "@{" + t + "}"), o("selector-tag", n + "%?", 0), o("selector-id", "#" + n), o("selector-class", "\\." + n, 0), o("selector-tag", "&", 0), {
        className: "selector-attr",
        begin: "\\[",
        end: "\\]"
      }, { begin: "\\(", end: "\\)", contains: l }, { begin: "!important" }]
    };
    return r.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, u, m, p, d), {
      case_insensitive: !0,
      illegal: "[=>'/<($\"]",
      contains: r
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#!]*", n = "\\|[^]*?\\|", r = "(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|\\-)?\\d+)?", i = {
      className: "meta",
      begin: "^#!",
      end: "$"
    }, a = { className: "literal", begin: "\\b(t{1}|nil)\\b" }, o = {
      className: "number",
      variants: [{
        begin: r,
        relevance: 0
      }, { begin: "#(b|B)[0-1]+(/[0-1]+)?" }, { begin: "#(o|O)[0-7]+(/[0-7]+)?" }, { begin: "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?" }, {
        begin: "#(c|C)\\(" + r + " +" + r,
        end: "\\)"
      }]
    }, s = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }), l = e.COMMENT(";", "$", { relevance: 0 }), c = {
      begin: "\\*",
      end: "\\*"
    }, d = { className: "symbol", begin: "[:&]" + t }, u = {
      begin: t,
      relevance: 0
    }, m = { begin: n }, p = {
      begin: "\\(",
      end: "\\)",
      contains: ["self", a, s, o, u]
    }, g = {
      contains: [o, s, c, d, p, u],
      variants: [{ begin: "['`]\\(", end: "\\)" }, {
        begin: "\\(quote ",
        end: "\\)",
        keywords: { name: "quote" }
      }, { begin: "'" + n }]
    }, _ = { variants: [{ begin: "'" + t }, { begin: "#'" + t + "(::" + t + ")*" }] }, b = {
      begin: "\\(\\s*",
      end: "\\)"
    }, f = { endsWithParent: !0, relevance: 0 };
    return b.contains = [{
      className: "name",
      variants: [{ begin: t }, { begin: n }]
    }, f], f.contains = [g, _, b, a, o, s, l, c, d, m, u], { illegal: /\S/, contains: [o, i, a, s, l, g, _, b, u] }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      begin: "\\b[gtps][A-Z]+[A-Za-z0-9_\\-]*\\b|\\$_[A-Z]+",
      relevance: 0
    }, n = [e.C_BLOCK_COMMENT_MODE, e.HASH_COMMENT_MODE, e.COMMENT("--", "$"), e.COMMENT("[^:]//", "$")], r = e.inherit(e.TITLE_MODE, { variants: [{ begin: "\\b_*rig[A-Z]+[A-Za-z0-9_\\-]*" }, { begin: "\\b_[a-z0-9\\-]+" }] }), i = e.inherit(e.TITLE_MODE, { begin: "\\b([A-Za-z0-9_\\-]+)\\b" });
    return {
      case_insensitive: !1,
      keywords: {
        keyword: "$_COOKIE $_FILES $_GET $_GET_BINARY $_GET_RAW $_POST $_POST_BINARY $_POST_RAW $_SESSION $_SERVER codepoint codepoints segment segments codeunit codeunits sentence sentences trueWord trueWords paragraph after byte bytes english the until http forever descending using line real8 with seventh for stdout finally element word words fourth before black ninth sixth characters chars stderr uInt1 uInt1s uInt2 uInt2s stdin string lines relative rel any fifth items from middle mid at else of catch then third it file milliseconds seconds second secs sec int1 int1s int4 int4s internet int2 int2s normal text item last long detailed effective uInt4 uInt4s repeat end repeat URL in try into switch to words https token binfile each tenth as ticks tick system real4 by dateItems without char character ascending eighth whole dateTime numeric short first ftp integer abbreviated abbr abbrev private case while if div mod wrap and or bitAnd bitNot bitOr bitXor among not in a an within contains ends with begins the keys of keys",
        literal: "SIX TEN FORMFEED NINE ZERO NONE SPACE FOUR FALSE COLON CRLF PI COMMA ENDOFFILE EOF EIGHT FIVE QUOTE EMPTY ONE TRUE RETURN CR LINEFEED RIGHT BACKSLASH NULL SEVEN TAB THREE TWO six ten formfeed nine zero none space four false colon crlf pi comma endoffile eof eight five quote empty one true return cr linefeed right backslash null seven tab three two RIVERSION RISTATE FILE_READ_MODE FILE_WRITE_MODE FILE_WRITE_MODE DIR_WRITE_MODE FILE_READ_UMASK FILE_WRITE_UMASK DIR_READ_UMASK DIR_WRITE_UMASK",
        built_in: "put abs acos aliasReference annuity arrayDecode arrayEncode asin atan atan2 average avg avgDev base64Decode base64Encode baseConvert binaryDecode binaryEncode byteOffset byteToNum cachedURL cachedURLs charToNum cipherNames codepointOffset codepointProperty codepointToNum codeunitOffset commandNames compound compress constantNames cos date dateFormat decompress directories diskSpace DNSServers exp exp1 exp2 exp10 extents files flushEvents folders format functionNames geometricMean global globals hasMemory harmonicMean hostAddress hostAddressToName hostName hostNameToAddress isNumber ISOToMac itemOffset keys len length libURLErrorData libUrlFormData libURLftpCommand libURLLastHTTPHeaders libURLLastRHHeaders libUrlMultipartFormAddPart libUrlMultipartFormData libURLVersion lineOffset ln ln1 localNames log log2 log10 longFilePath lower macToISO matchChunk matchText matrixMultiply max md5Digest median merge millisec millisecs millisecond milliseconds min monthNames nativeCharToNum normalizeText num number numToByte numToChar numToCodepoint numToNativeChar offset open openfiles openProcesses openProcessIDs openSockets paragraphOffset paramCount param params peerAddress pendingMessages platform popStdDev populationStandardDeviation populationVariance popVariance processID random randomBytes replaceText result revCreateXMLTree revCreateXMLTreeFromFile revCurrentRecord revCurrentRecordIsFirst revCurrentRecordIsLast revDatabaseColumnCount revDatabaseColumnIsNull revDatabaseColumnLengths revDatabaseColumnNames revDatabaseColumnNamed revDatabaseColumnNumbered revDatabaseColumnTypes revDatabaseConnectResult revDatabaseCursors revDatabaseID revDatabaseTableNames revDatabaseType revDataFromQuery revdb_closeCursor revdb_columnbynumber revdb_columncount revdb_columnisnull revdb_columnlengths revdb_columnnames revdb_columntypes revdb_commit revdb_connect revdb_connections revdb_connectionerr revdb_currentrecord revdb_cursorconnection revdb_cursorerr revdb_cursors revdb_dbtype revdb_disconnect revdb_execute revdb_iseof revdb_isbof revdb_movefirst revdb_movelast revdb_movenext revdb_moveprev revdb_query revdb_querylist revdb_recordcount revdb_rollback revdb_tablenames revGetDatabaseDriverPath revNumberOfRecords revOpenDatabase revOpenDatabases revQueryDatabase revQueryDatabaseBlob revQueryResult revQueryIsAtStart revQueryIsAtEnd revUnixFromMacPath revXMLAttribute revXMLAttributes revXMLAttributeValues revXMLChildContents revXMLChildNames revXMLCreateTreeFromFileWithNamespaces revXMLCreateTreeWithNamespaces revXMLDataFromXPathQuery revXMLEvaluateXPath revXMLFirstChild revXMLMatchingNode revXMLNextSibling revXMLNodeContents revXMLNumberOfChildren revXMLParent revXMLPreviousSibling revXMLRootNode revXMLRPC_CreateRequest revXMLRPC_Documents revXMLRPC_Error revXMLRPC_GetHost revXMLRPC_GetMethod revXMLRPC_GetParam revXMLText revXMLRPC_Execute revXMLRPC_GetParamCount revXMLRPC_GetParamNode revXMLRPC_GetParamType revXMLRPC_GetPath revXMLRPC_GetPort revXMLRPC_GetProtocol revXMLRPC_GetRequest revXMLRPC_GetResponse revXMLRPC_GetSocket revXMLTree revXMLTrees revXMLValidateDTD revZipDescribeItem revZipEnumerateItems revZipOpenArchives round sampVariance sec secs seconds sentenceOffset sha1Digest shell shortFilePath sin specialFolderPath sqrt standardDeviation statRound stdDev sum sysError systemVersion tan tempName textDecode textEncode tick ticks time to tokenOffset toLower toUpper transpose truewordOffset trunc uniDecode uniEncode upper URLDecode URLEncode URLStatus uuid value variableNames variance version waitDepth weekdayNames wordOffset xsltApplyStylesheet xsltApplyStylesheetFromFile xsltLoadStylesheet xsltLoadStylesheetFromFile add breakpoint cancel clear local variable file word line folder directory URL close socket process combine constant convert create new alias folder directory decrypt delete variable word line folder directory URL dispatch divide do encrypt filter get include intersect kill libURLDownloadToFile libURLFollowHttpRedirects libURLftpUpload libURLftpUploadFile libURLresetAll libUrlSetAuthCallback libURLSetCustomHTTPHeaders libUrlSetExpect100 libURLSetFTPListCommand libURLSetFTPMode libURLSetFTPStopTime libURLSetStatusCallback load multiply socket prepare process post seek rel relative read from process rename replace require resetAll resolve revAddXMLNode revAppendXML revCloseCursor revCloseDatabase revCommitDatabase revCopyFile revCopyFolder revCopyXMLNode revDeleteFolder revDeleteXMLNode revDeleteAllXMLTrees revDeleteXMLTree revExecuteSQL revGoURL revInsertXMLNode revMoveFolder revMoveToFirstRecord revMoveToLastRecord revMoveToNextRecord revMoveToPreviousRecord revMoveToRecord revMoveXMLNode revPutIntoXMLNode revRollBackDatabase revSetDatabaseDriverPath revSetXMLAttribute revXMLRPC_AddParam revXMLRPC_DeleteAllDocuments revXMLAddDTD revXMLRPC_Free revXMLRPC_FreeAll revXMLRPC_DeleteDocument revXMLRPC_DeleteParam revXMLRPC_SetHost revXMLRPC_SetMethod revXMLRPC_SetPort revXMLRPC_SetProtocol revXMLRPC_SetSocket revZipAddItemWithData revZipAddItemWithFile revZipAddUncompressedItemWithData revZipAddUncompressedItemWithFile revZipCancel revZipCloseArchive revZipDeleteItem revZipExtractItemToFile revZipExtractItemToVariable revZipSetProgressCallback revZipRenameItem revZipReplaceItemWithData revZipReplaceItemWithFile revZipOpenArchive send set sort split start stop subtract union unload wait write"
      },
      contains: [t, { className: "keyword", begin: "\\bend\\sif\\b" }, {
        className: "function",
        beginKeywords: "function",
        end: "$",
        contains: [t, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE, r]
      }, {
        className: "function",
        begin: "\\bend\\s+",
        end: "$",
        keywords: "end",
        contains: [i, r]
      }, {
        beginKeywords: "command on",
        end: "$",
        contains: [t, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE, r]
      }, {
        className: "meta",
        variants: [{ begin: "<\\?(rev|lc|livecode)", relevance: 10 }, { begin: "<\\?" }, { begin: "\\?>" }]
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE, r].concat(n),
      illegal: ";$|^\\[|^="
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf",
      literal: "true false null undefined yes no on off it that void",
      built_in: "npm require console print module global window document"
    }, n = "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*", r = e.inherit(e.TITLE_MODE, { begin: n }), i = {
      className: "subst",
      begin: /#\{/,
      end: /}/,
      keywords: t
    }, a = {
      className: "subst",
      begin: /#[A-Za-z$_]/,
      end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
      keywords: t
    }, o = [e.BINARY_NUMBER_MODE, {
      className: "number",
      begin: "(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",
      relevance: 0,
      starts: { end: "(\\s*/)?", relevance: 0 }
    }, {
      className: "string",
      variants: [{ begin: /'''/, end: /'''/, contains: [e.BACKSLASH_ESCAPE] }, {
        begin: /'/,
        end: /'/,
        contains: [e.BACKSLASH_ESCAPE]
      }, { begin: /"""/, end: /"""/, contains: [e.BACKSLASH_ESCAPE, i, a] }, {
        begin: /"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, i, a]
      }, { begin: /\\/, end: /(\s|$)/, excludeEnd: !0 }]
    }, {
      className: "regexp",
      variants: [{
        begin: "//",
        end: "//[gim]*",
        contains: [i, e.HASH_COMMENT_MODE]
      }, { begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ }]
    }, { begin: "@" + n }, { begin: "``", end: "``", excludeBegin: !0, excludeEnd: !0, subLanguage: "javascript" }];
    i.contains = o;
    var s = {
      className: "params",
      begin: "\\(",
      returnBegin: !0,
      contains: [{ begin: /\(/, end: /\)/, keywords: t, contains: ["self"].concat(o) }]
    };
    return {
      aliases: ["ls"],
      keywords: t,
      illegal: /\/\*/,
      contains: o.concat([e.COMMENT("\\/\\*", "\\*\\/"), e.HASH_COMMENT_MODE, {
        className: "function",
        contains: [r, s],
        returnBegin: !0,
        variants: [{
          begin: "(" + n + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",
          end: "\\->\\*?"
        }, {
          begin: "(" + n + "\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",
          end: "[-~]{1,2}>\\*?"
        }, { begin: "(" + n + "\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?", end: "!?[-~]{1,2}>\\*?" }]
      }, {
        className: "class",
        beginKeywords: "class",
        end: "$",
        illegal: /[:="\[\]]/,
        contains: [{ beginKeywords: "extends", endsWithParent: !0, illegal: /[:="\[\]]/, contains: [r] }, r]
      }, { begin: n + ":", end: ":", returnBegin: !0, returnEnd: !0, relevance: 0 }])
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "\\[=*\\[", n = "\\]=*\\]", r = {
      begin: t,
      end: n,
      contains: ["self"]
    }, i = [e.COMMENT("--(?!" + t + ")", "$"), e.COMMENT("--" + t, n, { contains: [r], relevance: 10 })];
    return {
      lexemes: e.UNDERSCORE_IDENT_RE,
      keywords: {
        keyword: "and break do else elseif end false for if in local nil not or repeat return then true until while",
        built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
      },
      contains: i.concat([{
        className: "function",
        beginKeywords: "function",
        end: "\\)",
        contains: [e.inherit(e.TITLE_MODE, { begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*" }), {
          className: "params",
          begin: "\\(",
          endsWithParent: !0,
          contains: i
        }].concat(i)
      }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
        className: "string",
        begin: t,
        end: n,
        contains: [r],
        relevance: 5
      }])
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "variable", begin: /\$\(/, end: /\)/, contains: [e.BACKSLASH_ESCAPE] };
    return {
      aliases: ["mk", "mak"],
      contains: [e.HASH_COMMENT_MODE, {
        begin: /^\w+\s*\W*=/,
        returnBegin: !0,
        relevance: 0,
        starts: { end: /\s*\W*=/, excludeEnd: !0, starts: { end: /$/, relevance: 0, contains: [t] } }
      }, { className: "section", begin: /^[\w]+:\s*$/ }, {
        className: "meta",
        begin: /^\.PHONY:/,
        end: /$/,
        keywords: { "meta-keyword": ".PHONY" },
        lexemes: /[\.\w]+/
      }, { begin: /^\t+/, end: /$/, relevance: 0, contains: [e.QUOTE_STRING_MODE, t] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["md", "mkdown", "mkd"],
      contains: [{
        className: "section",
        variants: [{ begin: "^#{1,6}", end: "$" }, { begin: "^.+?\\n[=-]{2,}$" }]
      }, { begin: "<", end: ">", subLanguage: "xml", relevance: 0 }, {
        className: "bullet",
        begin: "^([*+-]|(\\d+\\.))\\s+"
      }, { className: "strong", begin: "[*_]{2}.+?[*_]{2}" }, {
        className: "emphasis",
        variants: [{ begin: "\\*.+?\\*" }, { begin: "_.+?_", relevance: 0 }]
      }, { className: "quote", begin: "^>\\s+", end: "$" }, {
        className: "code",
        variants: [{ begin: "`.+?`" }, { begin: "^( {4}|	)", end: "$", relevance: 0 }]
      }, { begin: "^[-\\*]{3,}", end: "$" }, {
        begin: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
        returnBegin: !0,
        contains: [{
          className: "string",
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0,
          relevance: 0
        }, { className: "link", begin: "\\]\\(", end: "\\)", excludeBegin: !0, excludeEnd: !0 }, {
          className: "symbol",
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }],
        relevance: 10
      }, {
        begin: "^\\[.+\\]:",
        returnBegin: !0,
        contains: [{
          className: "symbol",
          begin: "\\[",
          end: "\\]:",
          excludeBegin: !0,
          excludeEnd: !0,
          starts: { className: "link", end: "$" }
        }]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["mma"],
      lexemes: "(\\$|\\b)" + e.IDENT_RE + "\\b",
      keywords: "AbelianGroup Abort AbortKernels AbortProtect Above Abs Absolute AbsoluteCorrelation AbsoluteCorrelationFunction AbsoluteCurrentValue AbsoluteDashing AbsoluteFileName AbsoluteOptions AbsolutePointSize AbsoluteThickness AbsoluteTime AbsoluteTiming AccountingForm Accumulate Accuracy AccuracyGoal ActionDelay ActionMenu ActionMenuBox ActionMenuBoxOptions Active ActiveItem ActiveStyle AcyclicGraphQ AddOnHelpPath AddTo AdjacencyGraph AdjacencyList AdjacencyMatrix AdjustmentBox AdjustmentBoxOptions AdjustTimeSeriesForecast AffineTransform After AiryAi AiryAiPrime AiryAiZero AiryBi AiryBiPrime AiryBiZero AlgebraicIntegerQ AlgebraicNumber AlgebraicNumberDenominator AlgebraicNumberNorm AlgebraicNumberPolynomial AlgebraicNumberTrace AlgebraicRules AlgebraicRulesData Algebraics AlgebraicUnitQ Alignment AlignmentMarker AlignmentPoint All AllowedDimensions AllowGroupClose AllowInlineCells AllowKernelInitialization AllowReverseGroupClose AllowScriptLevelChange AlphaChannel AlternatingGroup AlternativeHypothesis Alternatives AmbientLight Analytic AnchoredSearch And AndersonDarlingTest AngerJ AngleBracket AngularGauge Animate AnimationCycleOffset AnimationCycleRepetitions AnimationDirection AnimationDisplayTime AnimationRate AnimationRepetitions AnimationRunning Animator AnimatorBox AnimatorBoxOptions AnimatorElements Annotation Annuity AnnuityDue Antialiasing Antisymmetric Apart ApartSquareFree Appearance AppearanceElements AppellF1 Append AppendTo Apply ArcCos ArcCosh ArcCot ArcCoth ArcCsc ArcCsch ArcSec ArcSech ArcSin ArcSinDistribution ArcSinh ArcTan ArcTanh Arg ArgMax ArgMin ArgumentCountQ ARIMAProcess ArithmeticGeometricMean ARMAProcess ARProcess Array ArrayComponents ArrayDepth ArrayFlatten ArrayPad ArrayPlot ArrayQ ArrayReshape ArrayRules Arrays Arrow Arrow3DBox ArrowBox Arrowheads AspectRatio AspectRatioFixed Assert Assuming Assumptions AstronomicalData Asynchronous AsynchronousTaskObject AsynchronousTasks AtomQ Attributes AugmentedSymmetricPolynomial AutoAction AutoDelete AutoEvaluateEvents AutoGeneratedPackage AutoIndent AutoIndentSpacings AutoItalicWords AutoloadPath AutoMatch Automatic AutomaticImageSize AutoMultiplicationSymbol AutoNumberFormatting AutoOpenNotebooks AutoOpenPalettes AutorunSequencing AutoScaling AutoScroll AutoSpacing AutoStyleOptions AutoStyleWords Axes AxesEdge AxesLabel AxesOrigin AxesStyle Axis BabyMonsterGroupB Back Background BackgroundTasksSettings Backslash Backsubstitution Backward Band BandpassFilter BandstopFilter BarabasiAlbertGraphDistribution BarChart BarChart3D BarLegend BarlowProschanImportance BarnesG BarOrigin BarSpacing BartlettHannWindow BartlettWindow BaseForm Baseline BaselinePosition BaseStyle BatesDistribution BattleLemarieWavelet Because BeckmannDistribution Beep Before Begin BeginDialogPacket BeginFrontEndInteractionPacket BeginPackage BellB BellY Below BenfordDistribution BeniniDistribution BenktanderGibratDistribution BenktanderWeibullDistribution BernoulliB BernoulliDistribution BernoulliGraphDistribution BernoulliProcess BernsteinBasis BesselFilterModel BesselI BesselJ BesselJZero BesselK BesselY BesselYZero Beta BetaBinomialDistribution BetaDistribution BetaNegativeBinomialDistribution BetaPrimeDistribution BetaRegularized BetweennessCentrality BezierCurve BezierCurve3DBox BezierCurve3DBoxOptions BezierCurveBox BezierCurveBoxOptions BezierFunction BilateralFilter Binarize BinaryFormat BinaryImageQ BinaryRead BinaryReadList BinaryWrite BinCounts BinLists Binomial BinomialDistribution BinomialProcess BinormalDistribution BiorthogonalSplineWavelet BipartiteGraphQ BirnbaumImportance BirnbaumSaundersDistribution BitAnd BitClear BitGet BitLength BitNot BitOr BitSet BitShiftLeft BitShiftRight BitXor Black BlackmanHarrisWindow BlackmanNuttallWindow BlackmanWindow Blank BlankForm BlankNullSequence BlankSequence Blend Block BlockRandom BlomqvistBeta BlomqvistBetaTest Blue Blur BodePlot BohmanWindow Bold Bookmarks Boole BooleanConsecutiveFunction BooleanConvert BooleanCountingFunction BooleanFunction BooleanGraph BooleanMaxterms BooleanMinimize BooleanMinterms Booleans BooleanTable BooleanVariables BorderDimensions BorelTannerDistribution Bottom BottomHatTransform BoundaryStyle Bounds Box BoxBaselineShift BoxData BoxDimensions Boxed Boxes BoxForm BoxFormFormatTypes BoxFrame BoxID BoxMargins BoxMatrix BoxRatios BoxRotation BoxRotationPoint BoxStyle BoxWhiskerChart Bra BracketingBar BraKet BrayCurtisDistance BreadthFirstScan Break Brown BrownForsytheTest BrownianBridgeProcess BrowserCategory BSplineBasis BSplineCurve BSplineCurve3DBox BSplineCurveBox BSplineCurveBoxOptions BSplineFunction BSplineSurface BSplineSurface3DBox BubbleChart BubbleChart3D BubbleScale BubbleSizes BulletGauge BusinessDayQ ButterflyGraph ButterworthFilterModel Button ButtonBar ButtonBox ButtonBoxOptions ButtonCell ButtonContents ButtonData ButtonEvaluator ButtonExpandable ButtonFrame ButtonFunction ButtonMargins ButtonMinHeight ButtonNote ButtonNotebook ButtonSource ButtonStyle ButtonStyleMenuListing Byte ByteCount ByteOrdering C CachedValue CacheGraphics CalendarData CalendarType CallPacket CanberraDistance Cancel CancelButton CandlestickChart Cap CapForm CapitalDifferentialD CardinalBSplineBasis CarmichaelLambda Cases Cashflow Casoratian Catalan CatalanNumber Catch CauchyDistribution CauchyWindow CayleyGraph CDF CDFDeploy CDFInformation CDFWavelet Ceiling Cell CellAutoOverwrite CellBaseline CellBoundingBox CellBracketOptions CellChangeTimes CellContents CellContext CellDingbat CellDynamicExpression CellEditDuplicate CellElementsBoundingBox CellElementSpacings CellEpilog CellEvaluationDuplicate CellEvaluationFunction CellEventActions CellFrame CellFrameColor CellFrameLabelMargins CellFrameLabels CellFrameMargins CellGroup CellGroupData CellGrouping CellGroupingRules CellHorizontalScrolling CellID CellLabel CellLabelAutoDelete CellLabelMargins CellLabelPositioning CellMargins CellObject CellOpen CellPrint CellProlog Cells CellSize CellStyle CellTags CellularAutomaton CensoredDistribution Censoring Center CenterDot CentralMoment CentralMomentGeneratingFunction CForm ChampernowneNumber ChanVeseBinarize Character CharacterEncoding CharacterEncodingsPath CharacteristicFunction CharacteristicPolynomial CharacterRange Characters ChartBaseStyle ChartElementData ChartElementDataFunction ChartElementFunction ChartElements ChartLabels ChartLayout ChartLegends ChartStyle Chebyshev1FilterModel Chebyshev2FilterModel ChebyshevDistance ChebyshevT ChebyshevU Check CheckAbort CheckAll Checkbox CheckboxBar CheckboxBox CheckboxBoxOptions ChemicalData ChessboardDistance ChiDistribution ChineseRemainder ChiSquareDistribution ChoiceButtons ChoiceDialog CholeskyDecomposition Chop Circle CircleBox CircleDot CircleMinus CirclePlus CircleTimes CirculantGraph CityData Clear ClearAll ClearAttributes ClearSystemCache ClebschGordan ClickPane Clip ClipboardNotebook ClipFill ClippingStyle ClipPlanes ClipRange Clock ClockGauge ClockwiseContourIntegral Close Closed CloseKernels ClosenessCentrality Closing ClosingAutoSave ClosingEvent ClusteringComponents CMYKColor Coarse Coefficient CoefficientArrays CoefficientDomain CoefficientList CoefficientRules CoifletWavelet Collect Colon ColonForm ColorCombine ColorConvert ColorData ColorDataFunction ColorFunction ColorFunctionScaling Colorize ColorNegate ColorOutput ColorProfileData ColorQuantize ColorReplace ColorRules ColorSelectorSettings ColorSeparate ColorSetter ColorSetterBox ColorSetterBoxOptions ColorSlider ColorSpace Column ColumnAlignments ColumnBackgrounds ColumnForm ColumnLines ColumnsEqual ColumnSpacings ColumnWidths CommonDefaultFormatTypes Commonest CommonestFilter CommonUnits CommunityBoundaryStyle CommunityGraphPlot CommunityLabels CommunityRegionStyle CompatibleUnitQ CompilationOptions CompilationTarget Compile Compiled CompiledFunction Complement CompleteGraph CompleteGraphQ CompleteKaryTree CompletionsListPacket Complex Complexes ComplexExpand ComplexInfinity ComplexityFunction ComponentMeasurements ComponentwiseContextMenu Compose ComposeList ComposeSeries Composition CompoundExpression CompoundPoissonDistribution CompoundPoissonProcess CompoundRenewalProcess Compress CompressedData Condition ConditionalExpression Conditioned Cone ConeBox ConfidenceLevel ConfidenceRange ConfidenceTransform ConfigurationPath Congruent Conjugate ConjugateTranspose Conjunction Connect ConnectedComponents ConnectedGraphQ ConnesWindow ConoverTest ConsoleMessage ConsoleMessagePacket ConsolePrint Constant ConstantArray Constants ConstrainedMax ConstrainedMin ContentPadding ContentsBoundingBox ContentSelectable ContentSize Context ContextMenu Contexts ContextToFilename ContextToFileName Continuation Continue ContinuedFraction ContinuedFractionK ContinuousAction ContinuousMarkovProcess ContinuousTimeModelQ ContinuousWaveletData ContinuousWaveletTransform ContourDetect ContourGraphics ContourIntegral ContourLabels ContourLines ContourPlot ContourPlot3D Contours ContourShading ContourSmoothing ContourStyle ContraharmonicMean Control ControlActive ControlAlignment ControllabilityGramian ControllabilityMatrix ControllableDecomposition ControllableModelQ ControllerDuration ControllerInformation ControllerInformationData ControllerLinking ControllerManipulate ControllerMethod ControllerPath ControllerState ControlPlacement ControlsRendering ControlType Convergents ConversionOptions ConversionRules ConvertToBitmapPacket ConvertToPostScript ConvertToPostScriptPacket Convolve ConwayGroupCo1 ConwayGroupCo2 ConwayGroupCo3 CoordinateChartData CoordinatesToolOptions CoordinateTransform CoordinateTransformData CoprimeQ Coproduct CopulaDistribution Copyable CopyDirectory CopyFile CopyTag CopyToClipboard CornerFilter CornerNeighbors Correlation CorrelationDistance CorrelationFunction CorrelationTest Cos Cosh CoshIntegral CosineDistance CosineWindow CosIntegral Cot Coth Count CounterAssignments CounterBox CounterBoxOptions CounterClockwiseContourIntegral CounterEvaluator CounterFunction CounterIncrements CounterStyle CounterStyleMenuListing CountRoots CountryData Covariance CovarianceEstimatorFunction CovarianceFunction CoxianDistribution CoxIngersollRossProcess CoxModel CoxModelFit CramerVonMisesTest CreateArchive CreateDialog CreateDirectory CreateDocument CreateIntermediateDirectories CreatePalette CreatePalettePacket CreateScheduledTask CreateTemporary CreateWindow CriticalityFailureImportance CriticalitySuccessImportance CriticalSection Cross CrossingDetect CrossMatrix Csc Csch CubeRoot Cubics Cuboid CuboidBox Cumulant CumulantGeneratingFunction Cup CupCap Curl CurlyDoubleQuote CurlyQuote CurrentImage CurrentlySpeakingPacket CurrentValue CurvatureFlowFilter CurveClosed Cyan CycleGraph CycleIndexPolynomial Cycles CyclicGroup Cyclotomic Cylinder CylinderBox CylindricalDecomposition D DagumDistribution DamerauLevenshteinDistance DampingFactor Darker Dashed Dashing DataCompression DataDistribution DataRange DataReversed Date DateDelimiters DateDifference DateFunction DateList DateListLogPlot DateListPlot DatePattern DatePlus DateRange DateString DateTicksFormat DaubechiesWavelet DavisDistribution DawsonF DayCount DayCountConvention DayMatchQ DayName DayPlus DayRange DayRound DeBruijnGraph Debug DebugTag Decimal DeclareKnownSymbols DeclarePackage Decompose Decrement DedekindEta Default DefaultAxesStyle DefaultBaseStyle DefaultBoxStyle DefaultButton DefaultColor DefaultControlPlacement DefaultDuplicateCellStyle DefaultDuration DefaultElement DefaultFaceGridsStyle DefaultFieldHintStyle DefaultFont DefaultFontProperties DefaultFormatType DefaultFormatTypeForStyle DefaultFrameStyle DefaultFrameTicksStyle DefaultGridLinesStyle DefaultInlineFormatType DefaultInputFormatType DefaultLabelStyle DefaultMenuStyle DefaultNaturalLanguage DefaultNewCellStyle DefaultNewInlineCellStyle DefaultNotebook DefaultOptions DefaultOutputFormatType DefaultStyle DefaultStyleDefinitions DefaultTextFormatType DefaultTextInlineFormatType DefaultTicksStyle DefaultTooltipStyle DefaultValues Defer DefineExternal DefineInputStreamMethod DefineOutputStreamMethod Definition Degree DegreeCentrality DegreeGraphDistribution DegreeLexicographic DegreeReverseLexicographic Deinitialization Del Deletable Delete DeleteBorderComponents DeleteCases DeleteContents DeleteDirectory DeleteDuplicates DeleteFile DeleteSmallComponents DeleteWithContents DeletionWarning Delimiter DelimiterFlashTime DelimiterMatching Delimiters Denominator DensityGraphics DensityHistogram DensityPlot DependentVariables Deploy Deployed Depth DepthFirstScan Derivative DerivativeFilter DescriptorStateSpace DesignMatrix Det DGaussianWavelet DiacriticalPositioning Diagonal DiagonalMatrix Dialog DialogIndent DialogInput DialogLevel DialogNotebook DialogProlog DialogReturn DialogSymbols Diamond DiamondMatrix DiceDissimilarity DictionaryLookup DifferenceDelta DifferenceOrder DifferenceRoot DifferenceRootReduce Differences DifferentialD DifferentialRoot DifferentialRootReduce DifferentiatorFilter DigitBlock DigitBlockMinimum DigitCharacter DigitCount DigitQ DihedralGroup Dilation Dimensions DiracComb DiracDelta DirectedEdge DirectedEdges DirectedGraph DirectedGraphQ DirectedInfinity Direction Directive Directory DirectoryName DirectoryQ DirectoryStack DirichletCharacter DirichletConvolve DirichletDistribution DirichletL DirichletTransform DirichletWindow DisableConsolePrintPacket DiscreteChirpZTransform DiscreteConvolve DiscreteDelta DiscreteHadamardTransform DiscreteIndicator DiscreteLQEstimatorGains DiscreteLQRegulatorGains DiscreteLyapunovSolve DiscreteMarkovProcess DiscretePlot DiscretePlot3D DiscreteRatio DiscreteRiccatiSolve DiscreteShift DiscreteTimeModelQ DiscreteUniformDistribution DiscreteVariables DiscreteWaveletData DiscreteWaveletPacketTransform DiscreteWaveletTransform Discriminant Disjunction Disk DiskBox DiskMatrix Dispatch DispersionEstimatorFunction Display DisplayAllSteps DisplayEndPacket DisplayFlushImagePacket DisplayForm DisplayFunction DisplayPacket DisplayRules DisplaySetSizePacket DisplayString DisplayTemporary DisplayWith DisplayWithRef DisplayWithVariable DistanceFunction DistanceTransform Distribute Distributed DistributedContexts DistributeDefinitions DistributionChart DistributionDomain DistributionFitTest DistributionParameterAssumptions DistributionParameterQ Dithering Div Divergence Divide DivideBy Dividers Divisible Divisors DivisorSigma DivisorSum DMSList DMSString Do DockedCells DocumentNotebook DominantColors DOSTextFormat Dot DotDashed DotEqual Dotted DoubleBracketingBar DoubleContourIntegral DoubleDownArrow DoubleLeftArrow DoubleLeftRightArrow DoubleLeftTee DoubleLongLeftArrow DoubleLongLeftRightArrow DoubleLongRightArrow DoubleRightArrow DoubleRightTee DoubleUpArrow DoubleUpDownArrow DoubleVerticalBar DoublyInfinite Down DownArrow DownArrowBar DownArrowUpArrow DownLeftRightVector DownLeftTeeVector DownLeftVector DownLeftVectorBar DownRightTeeVector DownRightVector DownRightVectorBar Downsample DownTee DownTeeArrow DownValues DragAndDrop DrawEdges DrawFrontFaces DrawHighlighted Drop DSolve Dt DualLinearProgramming DualSystemsModel DumpGet DumpSave DuplicateFreeQ Dynamic DynamicBox DynamicBoxOptions DynamicEvaluationTimeout DynamicLocation DynamicModule DynamicModuleBox DynamicModuleBoxOptions DynamicModuleParent DynamicModuleValues DynamicName DynamicNamespace DynamicReference DynamicSetting DynamicUpdating DynamicWrapper DynamicWrapperBox DynamicWrapperBoxOptions E EccentricityCentrality EdgeAdd EdgeBetweennessCentrality EdgeCapacity EdgeCapForm EdgeColor EdgeConnectivity EdgeCost EdgeCount EdgeCoverQ EdgeDashing EdgeDelete EdgeDetect EdgeForm EdgeIndex EdgeJoinForm EdgeLabeling EdgeLabels EdgeLabelStyle EdgeList EdgeOpacity EdgeQ EdgeRenderingFunction EdgeRules EdgeShapeFunction EdgeStyle EdgeThickness EdgeWeight Editable EditButtonSettings EditCellTagsSettings EditDistance EffectiveInterest Eigensystem Eigenvalues EigenvectorCentrality Eigenvectors Element ElementData Eliminate EliminationOrder EllipticE EllipticExp EllipticExpPrime EllipticF EllipticFilterModel EllipticK EllipticLog EllipticNomeQ EllipticPi EllipticReducedHalfPeriods EllipticTheta EllipticThetaPrime EmitSound EmphasizeSyntaxErrors EmpiricalDistribution Empty EmptyGraphQ EnableConsolePrintPacket Enabled Encode End EndAdd EndDialogPacket EndFrontEndInteractionPacket EndOfFile EndOfLine EndOfString EndPackage EngineeringForm Enter EnterExpressionPacket EnterTextPacket Entropy EntropyFilter Environment Epilog Equal EqualColumns EqualRows EqualTilde EquatedTo Equilibrium EquirippleFilterKernel Equivalent Erf Erfc Erfi ErlangB ErlangC ErlangDistribution Erosion ErrorBox ErrorBoxOptions ErrorNorm ErrorPacket ErrorsDialogSettings EstimatedDistribution EstimatedProcess EstimatorGains EstimatorRegulator EuclideanDistance EulerE EulerGamma EulerianGraphQ EulerPhi Evaluatable Evaluate Evaluated EvaluatePacket EvaluationCell EvaluationCompletionAction EvaluationElements EvaluationMode EvaluationMonitor EvaluationNotebook EvaluationObject EvaluationOrder Evaluator EvaluatorNames EvenQ EventData EventEvaluator EventHandler EventHandlerTag EventLabels ExactBlackmanWindow ExactNumberQ ExactRootIsolation ExampleData Except ExcludedForms ExcludePods Exclusions ExclusionsStyle Exists Exit ExitDialog Exp Expand ExpandAll ExpandDenominator ExpandFileName ExpandNumerator Expectation ExpectationE ExpectedValue ExpGammaDistribution ExpIntegralE ExpIntegralEi Exponent ExponentFunction ExponentialDistribution ExponentialFamily ExponentialGeneratingFunction ExponentialMovingAverage ExponentialPowerDistribution ExponentPosition ExponentStep Export ExportAutoReplacements ExportPacket ExportString Expression ExpressionCell ExpressionPacket ExpToTrig ExtendedGCD Extension ExtentElementFunction ExtentMarkers ExtentSize ExternalCall ExternalDataCharacterEncoding Extract ExtractArchive ExtremeValueDistribution FaceForm FaceGrids FaceGridsStyle Factor FactorComplete Factorial Factorial2 FactorialMoment FactorialMomentGeneratingFunction FactorialPower FactorInteger FactorList FactorSquareFree FactorSquareFreeList FactorTerms FactorTermsList Fail FailureDistribution False FARIMAProcess FEDisableConsolePrintPacket FeedbackSector FeedbackSectorStyle FeedbackType FEEnableConsolePrintPacket Fibonacci FieldHint FieldHintStyle FieldMasked FieldSize File FileBaseName FileByteCount FileDate FileExistsQ FileExtension FileFormat FileHash FileInformation FileName FileNameDepth FileNameDialogSettings FileNameDrop FileNameJoin FileNames FileNameSetter FileNameSplit FileNameTake FilePrint FileType FilledCurve FilledCurveBox Filling FillingStyle FillingTransform FilterRules FinancialBond FinancialData FinancialDerivative FinancialIndicator Find FindArgMax FindArgMin FindClique FindClusters FindCurvePath FindDistributionParameters FindDivisions FindEdgeCover FindEdgeCut FindEulerianCycle FindFaces FindFile FindFit FindGeneratingFunction FindGeoLocation FindGeometricTransform FindGraphCommunities FindGraphIsomorphism FindGraphPartition FindHamiltonianCycle FindIndependentEdgeSet FindIndependentVertexSet FindInstance FindIntegerNullVector FindKClan FindKClique FindKClub FindKPlex FindLibrary FindLinearRecurrence FindList FindMaximum FindMaximumFlow FindMaxValue FindMinimum FindMinimumCostFlow FindMinimumCut FindMinValue FindPermutation FindPostmanTour FindProcessParameters FindRoot FindSequenceFunction FindSettings FindShortestPath FindShortestTour FindThreshold FindVertexCover FindVertexCut Fine FinishDynamic FiniteAbelianGroupCount FiniteGroupCount FiniteGroupData First FirstPassageTimeDistribution FischerGroupFi22 FischerGroupFi23 FischerGroupFi24Prime FisherHypergeometricDistribution FisherRatioTest FisherZDistribution Fit FitAll FittedModel FixedPoint FixedPointList FlashSelection Flat Flatten FlattenAt FlatTopWindow FlipView Floor FlushPrintOutputPacket Fold FoldList Font FontColor FontFamily FontForm FontName FontOpacity FontPostScriptName FontProperties FontReencoding FontSize FontSlant FontSubstitutions FontTracking FontVariations FontWeight For ForAll Format FormatRules FormatType FormatTypeAutoConvert FormatValues FormBox FormBoxOptions FortranForm Forward ForwardBackward Fourier FourierCoefficient FourierCosCoefficient FourierCosSeries FourierCosTransform FourierDCT FourierDCTFilter FourierDCTMatrix FourierDST FourierDSTMatrix FourierMatrix FourierParameters FourierSequenceTransform FourierSeries FourierSinCoefficient FourierSinSeries FourierSinTransform FourierTransform FourierTrigSeries FractionalBrownianMotionProcess FractionalPart FractionBox FractionBoxOptions FractionLine Frame FrameBox FrameBoxOptions Framed FrameInset FrameLabel Frameless FrameMargins FrameStyle FrameTicks FrameTicksStyle FRatioDistribution FrechetDistribution FreeQ FrequencySamplingFilterKernel FresnelC FresnelS Friday FrobeniusNumber FrobeniusSolve FromCharacterCode FromCoefficientRules FromContinuedFraction FromDate FromDigits FromDMS Front FrontEndDynamicExpression FrontEndEventActions FrontEndExecute FrontEndObject FrontEndResource FrontEndResourceString FrontEndStackSize FrontEndToken FrontEndTokenExecute FrontEndValueCache FrontEndVersion FrontFaceColor FrontFaceOpacity Full FullAxes FullDefinition FullForm FullGraphics FullOptions FullSimplify Function FunctionExpand FunctionInterpolation FunctionSpace FussellVeselyImportance GaborFilter GaborMatrix GaborWavelet GainMargins GainPhaseMargins Gamma GammaDistribution GammaRegularized GapPenalty Gather GatherBy GaugeFaceElementFunction GaugeFaceStyle GaugeFrameElementFunction GaugeFrameSize GaugeFrameStyle GaugeLabels GaugeMarkers GaugeStyle GaussianFilter GaussianIntegers GaussianMatrix GaussianWindow GCD GegenbauerC General GeneralizedLinearModelFit GenerateConditions GeneratedCell GeneratedParameters GeneratingFunction Generic GenericCylindricalDecomposition GenomeData GenomeLookup GeodesicClosing GeodesicDilation GeodesicErosion GeodesicOpening GeoDestination GeodesyData GeoDirection GeoDistance GeoGridPosition GeometricBrownianMotionProcess GeometricDistribution GeometricMean GeometricMeanFilter GeometricTransformation GeometricTransformation3DBox GeometricTransformation3DBoxOptions GeometricTransformationBox GeometricTransformationBoxOptions GeoPosition GeoPositionENU GeoPositionXYZ GeoProjectionData GestureHandler GestureHandlerTag Get GetBoundingBoxSizePacket GetContext GetEnvironment GetFileName GetFrontEndOptionsDataPacket GetLinebreakInformationPacket GetMenusPacket GetPageBreakInformationPacket Glaisher GlobalClusteringCoefficient GlobalPreferences GlobalSession Glow GoldenRatio GompertzMakehamDistribution GoodmanKruskalGamma GoodmanKruskalGammaTest Goto Grad Gradient GradientFilter GradientOrientationFilter Graph GraphAssortativity GraphCenter GraphComplement GraphData GraphDensity GraphDiameter GraphDifference GraphDisjointUnion GraphDistance GraphDistanceMatrix GraphElementData GraphEmbedding GraphHighlight GraphHighlightStyle GraphHub Graphics Graphics3D Graphics3DBox Graphics3DBoxOptions GraphicsArray GraphicsBaseline GraphicsBox GraphicsBoxOptions GraphicsColor GraphicsColumn GraphicsComplex GraphicsComplex3DBox GraphicsComplex3DBoxOptions GraphicsComplexBox GraphicsComplexBoxOptions GraphicsContents GraphicsData GraphicsGrid GraphicsGridBox GraphicsGroup GraphicsGroup3DBox GraphicsGroup3DBoxOptions GraphicsGroupBox GraphicsGroupBoxOptions GraphicsGrouping GraphicsHighlightColor GraphicsRow GraphicsSpacing GraphicsStyle GraphIntersection GraphLayout GraphLinkEfficiency GraphPeriphery GraphPlot GraphPlot3D GraphPower GraphPropertyDistribution GraphQ GraphRadius GraphReciprocity GraphRoot GraphStyle GraphUnion Gray GrayLevel GreatCircleDistance Greater GreaterEqual GreaterEqualLess GreaterFullEqual GreaterGreater GreaterLess GreaterSlantEqual GreaterTilde Green Grid GridBaseline GridBox GridBoxAlignment GridBoxBackground GridBoxDividers GridBoxFrame GridBoxItemSize GridBoxItemStyle GridBoxOptions GridBoxSpacings GridCreationSettings GridDefaultElement GridElementStyleOptions GridFrame GridFrameMargins GridGraph GridLines GridLinesStyle GroebnerBasis GroupActionBase GroupCentralizer GroupElementFromWord GroupElementPosition GroupElementQ GroupElements GroupElementToWord GroupGenerators GroupMultiplicationTable GroupOrbits GroupOrder GroupPageBreakWithin GroupSetwiseStabilizer GroupStabilizer GroupStabilizerChain Gudermannian GumbelDistribution HaarWavelet HadamardMatrix HalfNormalDistribution HamiltonianGraphQ HammingDistance HammingWindow HankelH1 HankelH2 HankelMatrix HannPoissonWindow HannWindow HaradaNortonGroupHN HararyGraph HarmonicMean HarmonicMeanFilter HarmonicNumber Hash HashTable Haversine HazardFunction Head HeadCompose Heads HeavisideLambda HeavisidePi HeavisideTheta HeldGroupHe HeldPart HelpBrowserLookup HelpBrowserNotebook HelpBrowserSettings HermiteDecomposition HermiteH HermitianMatrixQ HessenbergDecomposition Hessian HexadecimalCharacter Hexahedron HexahedronBox HexahedronBoxOptions HiddenSurface HighlightGraph HighlightImage HighpassFilter HigmanSimsGroupHS HilbertFilter HilbertMatrix Histogram Histogram3D HistogramDistribution HistogramList HistogramTransform HistogramTransformInterpolation HitMissTransform HITSCentrality HodgeDual HoeffdingD HoeffdingDTest Hold HoldAll HoldAllComplete HoldComplete HoldFirst HoldForm HoldPattern HoldRest HolidayCalendar HomeDirectory HomePage Horizontal HorizontalForm HorizontalGauge HorizontalScrollPosition HornerForm HotellingTSquareDistribution HoytDistribution HTMLSave Hue HumpDownHump HumpEqual HurwitzLerchPhi HurwitzZeta HyperbolicDistribution HypercubeGraph HyperexponentialDistribution Hyperfactorial Hypergeometric0F1 Hypergeometric0F1Regularized Hypergeometric1F1 Hypergeometric1F1Regularized Hypergeometric2F1 Hypergeometric2F1Regularized HypergeometricDistribution HypergeometricPFQ HypergeometricPFQRegularized HypergeometricU Hyperlink HyperlinkCreationSettings Hyphenation HyphenationOptions HypoexponentialDistribution HypothesisTestData I Identity IdentityMatrix If IgnoreCase Im Image Image3D Image3DSlices ImageAccumulate ImageAdd ImageAdjust ImageAlign ImageApply ImageAspectRatio ImageAssemble ImageCache ImageCacheValid ImageCapture ImageChannels ImageClip ImageColorSpace ImageCompose ImageConvolve ImageCooccurrence ImageCorners ImageCorrelate ImageCorrespondingPoints ImageCrop ImageData ImageDataPacket ImageDeconvolve ImageDemosaic ImageDifference ImageDimensions ImageDistance ImageEffect ImageFeatureTrack ImageFileApply ImageFileFilter ImageFileScan ImageFilter ImageForestingComponents ImageForwardTransformation ImageHistogram ImageKeypoints ImageLevels ImageLines ImageMargins ImageMarkers ImageMeasurements ImageMultiply ImageOffset ImagePad ImagePadding ImagePartition ImagePeriodogram ImagePerspectiveTransformation ImageQ ImageRangeCache ImageReflect ImageRegion ImageResize ImageResolution ImageRotate ImageRotated ImageScaled ImageScan ImageSize ImageSizeAction ImageSizeCache ImageSizeMultipliers ImageSizeRaw ImageSubtract ImageTake ImageTransformation ImageTrim ImageType ImageValue ImageValuePositions Implies Import ImportAutoReplacements ImportString ImprovementImportance In IncidenceGraph IncidenceList IncidenceMatrix IncludeConstantBasis IncludeFileExtension IncludePods IncludeSingularTerm Increment Indent IndentingNewlineSpacings IndentMaxFraction IndependenceTest IndependentEdgeSetQ IndependentUnit IndependentVertexSetQ Indeterminate IndexCreationOptions Indexed IndexGraph IndexTag Inequality InexactNumberQ InexactNumbers Infinity Infix Information Inherited InheritScope Initialization InitializationCell InitializationCellEvaluation InitializationCellWarning InlineCounterAssignments InlineCounterIncrements InlineRules Inner Inpaint Input InputAliases InputAssumptions InputAutoReplacements InputField InputFieldBox InputFieldBoxOptions InputForm InputGrouping InputNamePacket InputNotebook InputPacket InputSettings InputStream InputString InputStringPacket InputToBoxFormPacket Insert InsertionPointObject InsertResults Inset Inset3DBox Inset3DBoxOptions InsetBox InsetBoxOptions Install InstallService InString Integer IntegerDigits IntegerExponent IntegerLength IntegerPart IntegerPartitions IntegerQ Integers IntegerString Integral Integrate Interactive InteractiveTradingChart Interlaced Interleaving InternallyBalancedDecomposition InterpolatingFunction InterpolatingPolynomial Interpolation InterpolationOrder InterpolationPoints InterpolationPrecision Interpretation InterpretationBox InterpretationBoxOptions InterpretationFunction InterpretTemplate InterquartileRange Interrupt InterruptSettings Intersection Interval IntervalIntersection IntervalMemberQ IntervalUnion Inverse InverseBetaRegularized InverseCDF InverseChiSquareDistribution InverseContinuousWaveletTransform InverseDistanceTransform InverseEllipticNomeQ InverseErf InverseErfc InverseFourier InverseFourierCosTransform InverseFourierSequenceTransform InverseFourierSinTransform InverseFourierTransform InverseFunction InverseFunctions InverseGammaDistribution InverseGammaRegularized InverseGaussianDistribution InverseGudermannian InverseHaversine InverseJacobiCD InverseJacobiCN InverseJacobiCS InverseJacobiDC InverseJacobiDN InverseJacobiDS InverseJacobiNC InverseJacobiND InverseJacobiNS InverseJacobiSC InverseJacobiSD InverseJacobiSN InverseLaplaceTransform InversePermutation InverseRadon InverseSeries InverseSurvivalFunction InverseWaveletTransform InverseWeierstrassP InverseZTransform Invisible InvisibleApplication InvisibleTimes IrreduciblePolynomialQ IsolatingInterval IsomorphicGraphQ IsotopeData Italic Item ItemBox ItemBoxOptions ItemSize ItemStyle ItoProcess JaccardDissimilarity JacobiAmplitude Jacobian JacobiCD JacobiCN JacobiCS JacobiDC JacobiDN JacobiDS JacobiNC JacobiND JacobiNS JacobiP JacobiSC JacobiSD JacobiSN JacobiSymbol JacobiZeta JankoGroupJ1 JankoGroupJ2 JankoGroupJ3 JankoGroupJ4 JarqueBeraALMTest JohnsonDistribution Join Joined JoinedCurve JoinedCurveBox JoinForm JordanDecomposition JordanModelDecomposition K KagiChart KaiserBesselWindow KaiserWindow KalmanEstimator KalmanFilter KarhunenLoeveDecomposition KaryTree KatzCentrality KCoreComponents KDistribution KelvinBei KelvinBer KelvinKei KelvinKer KendallTau KendallTauTest KernelExecute KernelMixtureDistribution KernelObject Kernels Ket Khinchin KirchhoffGraph KirchhoffMatrix KleinInvariantJ KnightTourGraph KnotData KnownUnitQ KolmogorovSmirnovTest KroneckerDelta KroneckerModelDecomposition KroneckerProduct KroneckerSymbol KuiperTest KumaraswamyDistribution Kurtosis KuwaharaFilter Label Labeled LabeledSlider LabelingFunction LabelStyle LaguerreL LambdaComponents LambertW LanczosWindow LandauDistribution Language LanguageCategory LaplaceDistribution LaplaceTransform Laplacian LaplacianFilter LaplacianGaussianFilter Large Larger Last Latitude LatitudeLongitude LatticeData LatticeReduce Launch LaunchKernels LayeredGraphPlot LayerSizeFunction LayoutInformation LCM LeafCount LeapYearQ LeastSquares LeastSquaresFilterKernel Left LeftArrow LeftArrowBar LeftArrowRightArrow LeftDownTeeVector LeftDownVector LeftDownVectorBar LeftRightArrow LeftRightVector LeftTee LeftTeeArrow LeftTeeVector LeftTriangle LeftTriangleBar LeftTriangleEqual LeftUpDownVector LeftUpTeeVector LeftUpVector LeftUpVectorBar LeftVector LeftVectorBar LegendAppearance Legended LegendFunction LegendLabel LegendLayout LegendMargins LegendMarkers LegendMarkerSize LegendreP LegendreQ LegendreType Length LengthWhile LerchPhi Less LessEqual LessEqualGreater LessFullEqual LessGreater LessLess LessSlantEqual LessTilde LetterCharacter LetterQ Level LeveneTest LeviCivitaTensor LevyDistribution Lexicographic LibraryFunction LibraryFunctionError LibraryFunctionInformation LibraryFunctionLoad LibraryFunctionUnload LibraryLoad LibraryUnload LicenseID LiftingFilterData LiftingWaveletTransform LightBlue LightBrown LightCyan Lighter LightGray LightGreen Lighting LightingAngle LightMagenta LightOrange LightPink LightPurple LightRed LightSources LightYellow Likelihood Limit LimitsPositioning LimitsPositioningTokens LindleyDistribution Line Line3DBox LinearFilter LinearFractionalTransform LinearModelFit LinearOffsetFunction LinearProgramming LinearRecurrence LinearSolve LinearSolveFunction LineBox LineBreak LinebreakAdjustments LineBreakChart LineBreakWithin LineColor LineForm LineGraph LineIndent LineIndentMaxFraction LineIntegralConvolutionPlot LineIntegralConvolutionScale LineLegend LineOpacity LineSpacing LineWrapParts LinkActivate LinkClose LinkConnect LinkConnectedQ LinkCreate LinkError LinkFlush LinkFunction LinkHost LinkInterrupt LinkLaunch LinkMode LinkObject LinkOpen LinkOptions LinkPatterns LinkProtocol LinkRead LinkReadHeld LinkReadyQ Links LinkWrite LinkWriteHeld LiouvilleLambda List Listable ListAnimate ListContourPlot ListContourPlot3D ListConvolve ListCorrelate ListCurvePathPlot ListDeconvolve ListDensityPlot Listen ListFourierSequenceTransform ListInterpolation ListLineIntegralConvolutionPlot ListLinePlot ListLogLinearPlot ListLogLogPlot ListLogPlot ListPicker ListPickerBox ListPickerBoxBackground ListPickerBoxOptions ListPlay ListPlot ListPlot3D ListPointPlot3D ListPolarPlot ListQ ListStreamDensityPlot ListStreamPlot ListSurfacePlot3D ListVectorDensityPlot ListVectorPlot ListVectorPlot3D ListZTransform Literal LiteralSearch LocalClusteringCoefficient LocalizeVariables LocationEquivalenceTest LocationTest Locator LocatorAutoCreate LocatorBox LocatorBoxOptions LocatorCentering LocatorPane LocatorPaneBox LocatorPaneBoxOptions LocatorRegion Locked Log Log10 Log2 LogBarnesG LogGamma LogGammaDistribution LogicalExpand LogIntegral LogisticDistribution LogitModelFit LogLikelihood LogLinearPlot LogLogisticDistribution LogLogPlot LogMultinormalDistribution LogNormalDistribution LogPlot LogRankTest LogSeriesDistribution LongEqual Longest LongestAscendingSequence LongestCommonSequence LongestCommonSequencePositions LongestCommonSubsequence LongestCommonSubsequencePositions LongestMatch LongForm Longitude LongLeftArrow LongLeftRightArrow LongRightArrow Loopback LoopFreeGraphQ LowerCaseQ LowerLeftArrow LowerRightArrow LowerTriangularize LowpassFilter LQEstimatorGains LQGRegulator LQOutputRegulatorGains LQRegulatorGains LUBackSubstitution LucasL LuccioSamiComponents LUDecomposition LyapunovSolve LyonsGroupLy MachineID MachineName MachineNumberQ MachinePrecision MacintoshSystemPageSetup Magenta Magnification Magnify MainSolve MaintainDynamicCaches Majority MakeBoxes MakeExpression MakeRules MangoldtLambda ManhattanDistance Manipulate Manipulator MannWhitneyTest MantissaExponent Manual Map MapAll MapAt MapIndexed MAProcess MapThread MarcumQ MardiaCombinedTest MardiaKurtosisTest MardiaSkewnessTest MarginalDistribution MarkovProcessProperties Masking MatchingDissimilarity MatchLocalNameQ MatchLocalNames MatchQ Material MathematicaNotation MathieuC MathieuCharacteristicA MathieuCharacteristicB MathieuCharacteristicExponent MathieuCPrime MathieuGroupM11 MathieuGroupM12 MathieuGroupM22 MathieuGroupM23 MathieuGroupM24 MathieuS MathieuSPrime MathMLForm MathMLText Matrices MatrixExp MatrixForm MatrixFunction MatrixLog MatrixPlot MatrixPower MatrixQ MatrixRank Max MaxBend MaxDetect MaxExtraBandwidths MaxExtraConditions MaxFeatures MaxFilter Maximize MaxIterations MaxMemoryUsed MaxMixtureKernels MaxPlotPoints MaxPoints MaxRecursion MaxStableDistribution MaxStepFraction MaxSteps MaxStepSize MaxValue MaxwellDistribution McLaughlinGroupMcL Mean MeanClusteringCoefficient MeanDegreeConnectivity MeanDeviation MeanFilter MeanGraphDistance MeanNeighborDegree MeanShift MeanShiftFilter Median MedianDeviation MedianFilter Medium MeijerG MeixnerDistribution MemberQ MemoryConstrained MemoryInUse Menu MenuAppearance MenuCommandKey MenuEvaluator MenuItem MenuPacket MenuSortingValue MenuStyle MenuView MergeDifferences Mesh MeshFunctions MeshRange MeshShading MeshStyle Message MessageDialog MessageList MessageName MessageOptions MessagePacket Messages MessagesNotebook MetaCharacters MetaInformation Method MethodOptions MexicanHatWavelet MeyerWavelet Min MinDetect MinFilter MinimalPolynomial MinimalStateSpaceModel Minimize Minors MinRecursion MinSize MinStableDistribution Minus MinusPlus MinValue Missing MissingDataMethod MittagLefflerE MixedRadix MixedRadixQuantity MixtureDistribution Mod Modal Mode Modular ModularLambda Module Modulus MoebiusMu Moment Momentary MomentConvert MomentEvaluate MomentGeneratingFunction Monday Monitor MonomialList MonomialOrder MonsterGroupM MorletWavelet MorphologicalBinarize MorphologicalBranchPoints MorphologicalComponents MorphologicalEulerNumber MorphologicalGraph MorphologicalPerimeter MorphologicalTransform Most MouseAnnotation MouseAppearance MouseAppearanceTag MouseButtons Mouseover MousePointerNote MousePosition MovingAverage MovingMedian MoyalDistribution MultiedgeStyle MultilaunchWarning MultiLetterItalics MultiLetterStyle MultilineFunction Multinomial MultinomialDistribution MultinormalDistribution MultiplicativeOrder Multiplicity Multiselection MultivariateHypergeometricDistribution MultivariatePoissonDistribution MultivariateTDistribution N NakagamiDistribution NameQ Names NamespaceBox Nand NArgMax NArgMin NBernoulliB NCache NDSolve NDSolveValue Nearest NearestFunction NeedCurrentFrontEndPackagePacket NeedCurrentFrontEndSymbolsPacket NeedlemanWunschSimilarity Needs Negative NegativeBinomialDistribution NegativeMultinomialDistribution NeighborhoodGraph Nest NestedGreaterGreater NestedLessLess NestedScriptRules NestList NestWhile NestWhileList NevilleThetaC NevilleThetaD NevilleThetaN NevilleThetaS NewPrimitiveStyle NExpectation Next NextPrime NHoldAll NHoldFirst NHoldRest NicholsGridLines NicholsPlot NIntegrate NMaximize NMaxValue NMinimize NMinValue NominalVariables NonAssociative NoncentralBetaDistribution NoncentralChiSquareDistribution NoncentralFRatioDistribution NoncentralStudentTDistribution NonCommutativeMultiply NonConstants None NonlinearModelFit NonlocalMeansFilter NonNegative NonPositive Nor NorlundB Norm Normal NormalDistribution NormalGrouping Normalize NormalizedSquaredEuclideanDistance NormalsFunction NormFunction Not NotCongruent NotCupCap NotDoubleVerticalBar Notebook NotebookApply NotebookAutoSave NotebookClose NotebookConvertSettings NotebookCreate NotebookCreateReturnObject NotebookDefault NotebookDelete NotebookDirectory NotebookDynamicExpression NotebookEvaluate NotebookEventActions NotebookFileName NotebookFind NotebookFindReturnObject NotebookGet NotebookGetLayoutInformationPacket NotebookGetMisspellingsPacket NotebookInformation NotebookInterfaceObject NotebookLocate NotebookObject NotebookOpen NotebookOpenReturnObject NotebookPath NotebookPrint NotebookPut NotebookPutReturnObject NotebookRead NotebookResetGeneratedCells Notebooks NotebookSave NotebookSaveAs NotebookSelection NotebookSetupLayoutInformationPacket NotebooksMenu NotebookWrite NotElement NotEqualTilde NotExists NotGreater NotGreaterEqual NotGreaterFullEqual NotGreaterGreater NotGreaterLess NotGreaterSlantEqual NotGreaterTilde NotHumpDownHump NotHumpEqual NotLeftTriangle NotLeftTriangleBar NotLeftTriangleEqual NotLess NotLessEqual NotLessFullEqual NotLessGreater NotLessLess NotLessSlantEqual NotLessTilde NotNestedGreaterGreater NotNestedLessLess NotPrecedes NotPrecedesEqual NotPrecedesSlantEqual NotPrecedesTilde NotReverseElement NotRightTriangle NotRightTriangleBar NotRightTriangleEqual NotSquareSubset NotSquareSubsetEqual NotSquareSuperset NotSquareSupersetEqual NotSubset NotSubsetEqual NotSucceeds NotSucceedsEqual NotSucceedsSlantEqual NotSucceedsTilde NotSuperset NotSupersetEqual NotTilde NotTildeEqual NotTildeFullEqual NotTildeTilde NotVerticalBar NProbability NProduct NProductFactors NRoots NSolve NSum NSumTerms Null NullRecords NullSpace NullWords Number NumberFieldClassNumber NumberFieldDiscriminant NumberFieldFundamentalUnits NumberFieldIntegralBasis NumberFieldNormRepresentatives NumberFieldRegulator NumberFieldRootsOfUnity NumberFieldSignature NumberForm NumberFormat NumberMarks NumberMultiplier NumberPadding NumberPoint NumberQ NumberSeparator NumberSigns NumberString Numerator NumericFunction NumericQ NuttallWindow NValues NyquistGridLines NyquistPlot O ObservabilityGramian ObservabilityMatrix ObservableDecomposition ObservableModelQ OddQ Off Offset OLEData On ONanGroupON OneIdentity Opacity Open OpenAppend Opener OpenerBox OpenerBoxOptions OpenerView OpenFunctionInspectorPacket Opening OpenRead OpenSpecialOptions OpenTemporary OpenWrite Operate OperatingSystem OptimumFlowData Optional OptionInspectorSettings OptionQ Options OptionsPacket OptionsPattern OptionValue OptionValueBox OptionValueBoxOptions Or Orange Order OrderDistribution OrderedQ Ordering Orderless OrnsteinUhlenbeckProcess Orthogonalize Out Outer OutputAutoOverwrite OutputControllabilityMatrix OutputControllableModelQ OutputForm OutputFormData OutputGrouping OutputMathEditExpression OutputNamePacket OutputResponse OutputSizeLimit OutputStream Over OverBar OverDot Overflow OverHat Overlaps Overlay OverlayBox OverlayBoxOptions Overscript OverscriptBox OverscriptBoxOptions OverTilde OverVector OwenT OwnValues PackingMethod PaddedForm Padding PadeApproximant PadLeft PadRight PageBreakAbove PageBreakBelow PageBreakWithin PageFooterLines PageFooters PageHeaderLines PageHeaders PageHeight PageRankCentrality PageWidth PairedBarChart PairedHistogram PairedSmoothHistogram PairedTTest PairedZTest PaletteNotebook PalettePath Pane PaneBox PaneBoxOptions Panel PanelBox PanelBoxOptions Paneled PaneSelector PaneSelectorBox PaneSelectorBoxOptions PaperWidth ParabolicCylinderD ParagraphIndent ParagraphSpacing ParallelArray ParallelCombine ParallelDo ParallelEvaluate Parallelization Parallelize ParallelMap ParallelNeeds ParallelProduct ParallelSubmit ParallelSum ParallelTable ParallelTry Parameter ParameterEstimator ParameterMixtureDistribution ParameterVariables ParametricFunction ParametricNDSolve ParametricNDSolveValue ParametricPlot ParametricPlot3D ParentConnect ParentDirectory ParentForm Parenthesize ParentList ParetoDistribution Part PartialCorrelationFunction PartialD ParticleData Partition PartitionsP PartitionsQ ParzenWindow PascalDistribution PassEventsDown PassEventsUp Paste PasteBoxFormInlineCells PasteButton Path PathGraph PathGraphQ Pattern PatternSequence PatternTest PauliMatrix PaulWavelet Pause PausedTime PDF PearsonChiSquareTest PearsonCorrelationTest PearsonDistribution PerformanceGoal PeriodicInterpolation Periodogram PeriodogramArray PermutationCycles PermutationCyclesQ PermutationGroup PermutationLength PermutationList PermutationListQ PermutationMax PermutationMin PermutationOrder PermutationPower PermutationProduct PermutationReplace Permutations PermutationSupport Permute PeronaMalikFilter Perpendicular PERTDistribution PetersenGraph PhaseMargins Pi Pick PIDData PIDDerivativeFilter PIDFeedforward PIDTune Piecewise PiecewiseExpand PieChart PieChart3D PillaiTrace PillaiTraceTest Pink Pivoting PixelConstrained PixelValue PixelValuePositions Placed Placeholder PlaceholderReplace Plain PlanarGraphQ Play PlayRange Plot Plot3D Plot3Matrix PlotDivision PlotJoined PlotLabel PlotLayout PlotLegends PlotMarkers PlotPoints PlotRange PlotRangeClipping PlotRangePadding PlotRegion PlotStyle Plus PlusMinus Pochhammer PodStates PodWidth Point Point3DBox PointBox PointFigureChart PointForm PointLegend PointSize PoissonConsulDistribution PoissonDistribution PoissonProcess PoissonWindow PolarAxes PolarAxesOrigin PolarGridLines PolarPlot PolarTicks PoleZeroMarkers PolyaAeppliDistribution PolyGamma Polygon Polygon3DBox Polygon3DBoxOptions PolygonBox PolygonBoxOptions PolygonHoleScale PolygonIntersections PolygonScale PolyhedronData PolyLog PolynomialExtendedGCD PolynomialForm PolynomialGCD PolynomialLCM PolynomialMod PolynomialQ PolynomialQuotient PolynomialQuotientRemainder PolynomialReduce PolynomialRemainder Polynomials PopupMenu PopupMenuBox PopupMenuBoxOptions PopupView PopupWindow Position Positive PositiveDefiniteMatrixQ PossibleZeroQ Postfix PostScript Power PowerDistribution PowerExpand PowerMod PowerModList PowerSpectralDensity PowersRepresentations PowerSymmetricPolynomial Precedence PrecedenceForm Precedes PrecedesEqual PrecedesSlantEqual PrecedesTilde Precision PrecisionGoal PreDecrement PredictionRoot PreemptProtect PreferencesPath Prefix PreIncrement Prepend PrependTo PreserveImageOptions Previous PriceGraphDistribution PrimaryPlaceholder Prime PrimeNu PrimeOmega PrimePi PrimePowerQ PrimeQ Primes PrimeZetaP PrimitiveRoot PrincipalComponents PrincipalValue Print PrintAction PrintForm PrintingCopies PrintingOptions PrintingPageRange PrintingStartingPageNumber PrintingStyleEnvironment PrintPrecision PrintTemporary Prism PrismBox PrismBoxOptions PrivateCellOptions PrivateEvaluationOptions PrivateFontOptions PrivateFrontEndOptions PrivateNotebookOptions PrivatePaths Probability ProbabilityDistribution ProbabilityPlot ProbabilityPr ProbabilityScalePlot ProbitModelFit ProcessEstimator ProcessParameterAssumptions ProcessParameterQ ProcessStateDomain ProcessTimeDomain Product ProductDistribution ProductLog ProgressIndicator ProgressIndicatorBox ProgressIndicatorBoxOptions Projection Prolog PromptForm Properties Property PropertyList PropertyValue Proportion Proportional Protect Protected ProteinData Pruning PseudoInverse Purple Put PutAppend Pyramid PyramidBox PyramidBoxOptions QBinomial QFactorial QGamma QHypergeometricPFQ QPochhammer QPolyGamma QRDecomposition QuadraticIrrationalQ Quantile QuantilePlot Quantity QuantityForm QuantityMagnitude QuantityQ QuantityUnit Quartics QuartileDeviation Quartiles QuartileSkewness QueueingNetworkProcess QueueingProcess QueueProperties Quiet Quit Quotient QuotientRemainder RadialityCentrality RadicalBox RadicalBoxOptions RadioButton RadioButtonBar RadioButtonBox RadioButtonBoxOptions Radon RamanujanTau RamanujanTauL RamanujanTauTheta RamanujanTauZ Random RandomChoice RandomComplex RandomFunction RandomGraph RandomImage RandomInteger RandomPermutation RandomPrime RandomReal RandomSample RandomSeed RandomVariate RandomWalkProcess Range RangeFilter RangeSpecification RankedMax RankedMin Raster Raster3D Raster3DBox Raster3DBoxOptions RasterArray RasterBox RasterBoxOptions Rasterize RasterSize Rational RationalFunctions Rationalize Rationals Ratios Raw RawArray RawBoxes RawData RawMedium RayleighDistribution Re Read ReadList ReadProtected Real RealBlockDiagonalForm RealDigits RealExponent Reals Reap Record RecordLists RecordSeparators Rectangle RectangleBox RectangleBoxOptions RectangleChart RectangleChart3D RecurrenceFilter RecurrenceTable RecurringDigitsForm Red Reduce RefBox ReferenceLineStyle ReferenceMarkers ReferenceMarkerStyle Refine ReflectionMatrix ReflectionTransform Refresh RefreshRate RegionBinarize RegionFunction RegionPlot RegionPlot3D RegularExpression Regularization Reinstall Release ReleaseHold ReliabilityDistribution ReliefImage ReliefPlot Remove RemoveAlphaChannel RemoveAsynchronousTask Removed RemoveInputStreamMethod RemoveOutputStreamMethod RemoveProperty RemoveScheduledTask RenameDirectory RenameFile RenderAll RenderingOptions RenewalProcess RenkoChart Repeated RepeatedNull RepeatedString Replace ReplaceAll ReplaceHeldPart ReplaceImageValue ReplaceList ReplacePart ReplacePixelValue ReplaceRepeated Resampling Rescale RescalingTransform ResetDirectory ResetMenusPacket ResetScheduledTask Residue Resolve Rest Resultant ResumePacket Return ReturnExpressionPacket ReturnInputFormPacket ReturnPacket ReturnTextPacket Reverse ReverseBiorthogonalSplineWavelet ReverseElement ReverseEquilibrium ReverseGraph ReverseUpEquilibrium RevolutionAxis RevolutionPlot3D RGBColor RiccatiSolve RiceDistribution RidgeFilter RiemannR RiemannSiegelTheta RiemannSiegelZ Riffle Right RightArrow RightArrowBar RightArrowLeftArrow RightCosetRepresentative RightDownTeeVector RightDownVector RightDownVectorBar RightTee RightTeeArrow RightTeeVector RightTriangle RightTriangleBar RightTriangleEqual RightUpDownVector RightUpTeeVector RightUpVector RightUpVectorBar RightVector RightVectorBar RiskAchievementImportance RiskReductionImportance RogersTanimotoDissimilarity Root RootApproximant RootIntervals RootLocusPlot RootMeanSquare RootOfUnityQ RootReduce Roots RootSum Rotate RotateLabel RotateLeft RotateRight RotationAction RotationBox RotationBoxOptions RotationMatrix RotationTransform Round RoundImplies RoundingRadius Row RowAlignments RowBackgrounds RowBox RowHeights RowLines RowMinHeight RowReduce RowsEqual RowSpacings RSolve RudvalisGroupRu Rule RuleCondition RuleDelayed RuleForm RulerUnits Run RunScheduledTask RunThrough RuntimeAttributes RuntimeOptions RussellRaoDissimilarity SameQ SameTest SampleDepth SampledSoundFunction SampledSoundList SampleRate SamplingPeriod SARIMAProcess SARMAProcess SatisfiabilityCount SatisfiabilityInstances SatisfiableQ Saturday Save Saveable SaveAutoDelete SaveDefinitions SawtoothWave Scale Scaled ScaleDivisions ScaledMousePosition ScaleOrigin ScalePadding ScaleRanges ScaleRangeStyle ScalingFunctions ScalingMatrix ScalingTransform Scan ScheduledTaskActiveQ ScheduledTaskData ScheduledTaskObject ScheduledTasks SchurDecomposition ScientificForm ScreenRectangle ScreenStyleEnvironment ScriptBaselineShifts ScriptLevel ScriptMinSize ScriptRules ScriptSizeMultipliers Scrollbars ScrollingOptions ScrollPosition Sec Sech SechDistribution SectionGrouping SectorChart SectorChart3D SectorOrigin SectorSpacing SeedRandom Select Selectable SelectComponents SelectedCells SelectedNotebook Selection SelectionAnimate SelectionCell SelectionCellCreateCell SelectionCellDefaultStyle SelectionCellParentStyle SelectionCreateCell SelectionDebuggerTag SelectionDuplicateCell SelectionEvaluate SelectionEvaluateCreateCell SelectionMove SelectionPlaceholder SelectionSetStyle SelectWithContents SelfLoops SelfLoopStyle SemialgebraicComponentInstances SendMail Sequence SequenceAlignment SequenceForm SequenceHold SequenceLimit Series SeriesCoefficient SeriesData SessionTime Set SetAccuracy SetAlphaChannel SetAttributes Setbacks SetBoxFormNamesPacket SetDelayed SetDirectory SetEnvironment SetEvaluationNotebook SetFileDate SetFileLoadingContext SetNotebookStatusLine SetOptions SetOptionsPacket SetPrecision SetProperty SetSelectedNotebook SetSharedFunction SetSharedVariable SetSpeechParametersPacket SetStreamPosition SetSystemOptions Setter SetterBar SetterBox SetterBoxOptions Setting SetValue Shading Shallow ShannonWavelet ShapiroWilkTest Share Sharpen ShearingMatrix ShearingTransform ShenCastanMatrix Short ShortDownArrow Shortest ShortestMatch ShortestPathFunction ShortLeftArrow ShortRightArrow ShortUpArrow Show ShowAutoStyles ShowCellBracket ShowCellLabel ShowCellTags ShowClosedCellArea ShowContents ShowControls ShowCursorTracker ShowGroupOpenCloseIcon ShowGroupOpener ShowInvisibleCharacters ShowPageBreaks ShowPredictiveInterface ShowSelection ShowShortBoxForm ShowSpecialCharacters ShowStringCharacters ShowSyntaxStyles ShrinkingDelay ShrinkWrapBoundingBox SiegelTheta SiegelTukeyTest Sign Signature SignedRankTest SignificanceLevel SignPadding SignTest SimilarityRules SimpleGraph SimpleGraphQ Simplify Sin Sinc SinghMaddalaDistribution SingleEvaluation SingleLetterItalics SingleLetterStyle SingularValueDecomposition SingularValueList SingularValuePlot SingularValues Sinh SinhIntegral SinIntegral SixJSymbol Skeleton SkeletonTransform SkellamDistribution Skewness SkewNormalDistribution Skip SliceDistribution Slider Slider2D Slider2DBox Slider2DBoxOptions SliderBox SliderBoxOptions SlideView Slot SlotSequence Small SmallCircle Smaller SmithDelayCompensator SmithWatermanSimilarity SmoothDensityHistogram SmoothHistogram SmoothHistogram3D SmoothKernelDistribution SocialMediaData Socket SokalSneathDissimilarity Solve SolveAlways SolveDelayed Sort SortBy Sound SoundAndGraphics SoundNote SoundVolume Sow Space SpaceForm Spacer Spacings Span SpanAdjustments SpanCharacterRounding SpanFromAbove SpanFromBoth SpanFromLeft SpanLineThickness SpanMaxSize SpanMinSize SpanningCharacters SpanSymmetric SparseArray SpatialGraphDistribution Speak SpeakTextPacket SpearmanRankTest SpearmanRho Spectrogram SpectrogramArray Specularity SpellingCorrection SpellingDictionaries SpellingDictionariesPath SpellingOptions SpellingSuggestionsPacket Sphere SphereBox SphericalBesselJ SphericalBesselY SphericalHankelH1 SphericalHankelH2 SphericalHarmonicY SphericalPlot3D SphericalRegion SpheroidalEigenvalue SpheroidalJoiningFactor SpheroidalPS SpheroidalPSPrime SpheroidalQS SpheroidalQSPrime SpheroidalRadialFactor SpheroidalS1 SpheroidalS1Prime SpheroidalS2 SpheroidalS2Prime Splice SplicedDistribution SplineClosed SplineDegree SplineKnots SplineWeights Split SplitBy SpokenString Sqrt SqrtBox SqrtBoxOptions Square SquaredEuclideanDistance SquareFreeQ SquareIntersection SquaresR SquareSubset SquareSubsetEqual SquareSuperset SquareSupersetEqual SquareUnion SquareWave StabilityMargins StabilityMarginsStyle StableDistribution Stack StackBegin StackComplete StackInhibit StandardDeviation StandardDeviationFilter StandardForm Standardize StandbyDistribution Star StarGraph StartAsynchronousTask StartingStepSize StartOfLine StartOfString StartScheduledTask StartupSound StateDimensions StateFeedbackGains StateOutputEstimator StateResponse StateSpaceModel StateSpaceRealization StateSpaceTransform StationaryDistribution StationaryWaveletPacketTransform StationaryWaveletTransform StatusArea StatusCentrality StepMonitor StieltjesGamma StirlingS1 StirlingS2 StopAsynchronousTask StopScheduledTask StrataVariables StratonovichProcess StreamColorFunction StreamColorFunctionScaling StreamDensityPlot StreamPlot StreamPoints StreamPosition Streams StreamScale StreamStyle String StringBreak StringByteCount StringCases StringCount StringDrop StringExpression StringForm StringFormat StringFreeQ StringInsert StringJoin StringLength StringMatchQ StringPosition StringQ StringReplace StringReplaceList StringReplacePart StringReverse StringRotateLeft StringRotateRight StringSkeleton StringSplit StringTake StringToStream StringTrim StripBoxes StripOnInput StripWrapperBoxes StrokeForm StructuralImportance StructuredArray StructuredSelection StruveH StruveL Stub StudentTDistribution Style StyleBox StyleBoxAutoDelete StyleBoxOptions StyleData StyleDefinitions StyleForm StyleKeyMapping StyleMenuListing StyleNameDialogSettings StyleNames StylePrint StyleSheetPath Subfactorial Subgraph SubMinus SubPlus SubresultantPolynomialRemainders SubresultantPolynomials Subresultants Subscript SubscriptBox SubscriptBoxOptions Subscripted Subset SubsetEqual Subsets SubStar Subsuperscript SubsuperscriptBox SubsuperscriptBoxOptions Subtract SubtractFrom SubValues Succeeds SucceedsEqual SucceedsSlantEqual SucceedsTilde SuchThat Sum SumConvergence Sunday SuperDagger SuperMinus SuperPlus Superscript SuperscriptBox SuperscriptBoxOptions Superset SupersetEqual SuperStar Surd SurdForm SurfaceColor SurfaceGraphics SurvivalDistribution SurvivalFunction SurvivalModel SurvivalModelFit SuspendPacket SuzukiDistribution SuzukiGroupSuz SwatchLegend Switch Symbol SymbolName SymletWavelet Symmetric SymmetricGroup SymmetricMatrixQ SymmetricPolynomial SymmetricReduction Symmetrize SymmetrizedArray SymmetrizedArrayRules SymmetrizedDependentComponents SymmetrizedIndependentComponents SymmetrizedReplacePart SynchronousInitialization SynchronousUpdating Syntax SyntaxForm SyntaxInformation SyntaxLength SyntaxPacket SyntaxQ SystemDialogInput SystemException SystemHelpPath SystemInformation SystemInformationData SystemOpen SystemOptions SystemsModelDelay SystemsModelDelayApproximate SystemsModelDelete SystemsModelDimensions SystemsModelExtract SystemsModelFeedbackConnect SystemsModelLabels SystemsModelOrder SystemsModelParallelConnect SystemsModelSeriesConnect SystemsModelStateFeedbackConnect SystemStub Tab TabFilling Table TableAlignments TableDepth TableDirections TableForm TableHeadings TableSpacing TableView TableViewBox TabSpacings TabView TabViewBox TabViewBoxOptions TagBox TagBoxNote TagBoxOptions TaggingRules TagSet TagSetDelayed TagStyle TagUnset Take TakeWhile Tally Tan Tanh TargetFunctions TargetUnits TautologyQ TelegraphProcess TemplateBox TemplateBoxOptions TemplateSlotSequence TemporalData Temporary TemporaryVariable TensorContract TensorDimensions TensorExpand TensorProduct TensorQ TensorRank TensorReduce TensorSymmetry TensorTranspose TensorWedge Tetrahedron TetrahedronBox TetrahedronBoxOptions TeXForm TeXSave Text Text3DBox Text3DBoxOptions TextAlignment TextBand TextBoundingBox TextBox TextCell TextClipboardType TextData TextForm TextJustification TextLine TextPacket TextParagraph TextRecognize TextRendering TextStyle Texture TextureCoordinateFunction TextureCoordinateScaling Therefore ThermometerGauge Thick Thickness Thin Thinning ThisLink ThompsonGroupTh Thread ThreeJSymbol Threshold Through Throw Thumbnail Thursday Ticks TicksStyle Tilde TildeEqual TildeFullEqual TildeTilde TimeConstrained TimeConstraint Times TimesBy TimeSeriesForecast TimeSeriesInvertibility TimeUsed TimeValue TimeZone Timing Tiny TitleGrouping TitsGroupT ToBoxes ToCharacterCode ToColor ToContinuousTimeModel ToDate ToDiscreteTimeModel ToeplitzMatrix ToExpression ToFileName Together Toggle ToggleFalse Toggler TogglerBar TogglerBox TogglerBoxOptions ToHeldExpression ToInvertibleTimeSeries TokenWords Tolerance ToLowerCase ToNumberField TooBig Tooltip TooltipBox TooltipBoxOptions TooltipDelay TooltipStyle Top TopHatTransform TopologicalSort ToRadicals ToRules ToString Total TotalHeight TotalVariationFilter TotalWidth TouchscreenAutoZoom TouchscreenControlPlacement ToUpperCase Tr Trace TraceAbove TraceAction TraceBackward TraceDepth TraceDialog TraceForward TraceInternal TraceLevel TraceOff TraceOn TraceOriginal TracePrint TraceScan TrackedSymbols TradingChart TraditionalForm TraditionalFunctionNotation TraditionalNotation TraditionalOrder TransferFunctionCancel TransferFunctionExpand TransferFunctionFactor TransferFunctionModel TransferFunctionPoles TransferFunctionTransform TransferFunctionZeros TransformationFunction TransformationFunctions TransformationMatrix TransformedDistribution TransformedField Translate TranslationTransform TransparentColor Transpose TreeForm TreeGraph TreeGraphQ TreePlot TrendStyle TriangleWave TriangularDistribution Trig TrigExpand TrigFactor TrigFactorList Trigger TrigReduce TrigToExp TrimmedMean True TrueQ TruncatedDistribution TsallisQExponentialDistribution TsallisQGaussianDistribution TTest Tube TubeBezierCurveBox TubeBezierCurveBoxOptions TubeBox TubeBSplineCurveBox TubeBSplineCurveBoxOptions Tuesday TukeyLambdaDistribution TukeyWindow Tuples TuranGraph TuringMachine Transparent UnateQ Uncompress Undefined UnderBar Underflow Underlined Underoverscript UnderoverscriptBox UnderoverscriptBoxOptions Underscript UnderscriptBox UnderscriptBoxOptions UndirectedEdge UndirectedGraph UndirectedGraphQ UndocumentedTestFEParserPacket UndocumentedTestGetSelectionPacket Unequal Unevaluated UniformDistribution UniformGraphDistribution UniformSumDistribution Uninstall Union UnionPlus Unique UnitBox UnitConvert UnitDimensions Unitize UnitRootTest UnitSimplify UnitStep UnitTriangle UnitVector Unprotect UnsameQ UnsavedVariables Unset UnsetShared UntrackedVariables Up UpArrow UpArrowBar UpArrowDownArrow Update UpdateDynamicObjects UpdateDynamicObjectsSynchronous UpdateInterval UpDownArrow UpEquilibrium UpperCaseQ UpperLeftArrow UpperRightArrow UpperTriangularize Upsample UpSet UpSetDelayed UpTee UpTeeArrow UpValues URL URLFetch URLFetchAsynchronous URLSave URLSaveAsynchronous UseGraphicsRange Using UsingFrontEnd V2Get ValidationLength Value ValueBox ValueBoxOptions ValueForm ValueQ ValuesData Variables Variance VarianceEquivalenceTest VarianceEstimatorFunction VarianceGammaDistribution VarianceTest VectorAngle VectorColorFunction VectorColorFunctionScaling VectorDensityPlot VectorGlyphData VectorPlot VectorPlot3D VectorPoints VectorQ Vectors VectorScale VectorStyle Vee Verbatim Verbose VerboseConvertToPostScriptPacket VerifyConvergence VerifySolutions VerifyTestAssumptions Version VersionNumber VertexAdd VertexCapacity VertexColors VertexComponent VertexConnectivity VertexCoordinateRules VertexCoordinates VertexCorrelationSimilarity VertexCosineSimilarity VertexCount VertexCoverQ VertexDataCoordinates VertexDegree VertexDelete VertexDiceSimilarity VertexEccentricity VertexInComponent VertexInDegree VertexIndex VertexJaccardSimilarity VertexLabeling VertexLabels VertexLabelStyle VertexList VertexNormals VertexOutComponent VertexOutDegree VertexQ VertexRenderingFunction VertexReplace VertexShape VertexShapeFunction VertexSize VertexStyle VertexTextureCoordinates VertexWeight Vertical VerticalBar VerticalForm VerticalGauge VerticalSeparator VerticalSlider VerticalTilde ViewAngle ViewCenter ViewMatrix ViewPoint ViewPointSelectorSettings ViewPort ViewRange ViewVector ViewVertical VirtualGroupData Visible VisibleCell VoigtDistribution VonMisesDistribution WaitAll WaitAsynchronousTask WaitNext WaitUntil WakebyDistribution WalleniusHypergeometricDistribution WaringYuleDistribution WatershedComponents WatsonUSquareTest WattsStrogatzGraphDistribution WaveletBestBasis WaveletFilterCoefficients WaveletImagePlot WaveletListPlot WaveletMapIndexed WaveletMatrixPlot WaveletPhi WaveletPsi WaveletScale WaveletScalogram WaveletThreshold WeaklyConnectedComponents WeaklyConnectedGraphQ WeakStationarity WeatherData WeberE Wedge Wednesday WeibullDistribution WeierstrassHalfPeriods WeierstrassInvariants WeierstrassP WeierstrassPPrime WeierstrassSigma WeierstrassZeta WeightedAdjacencyGraph WeightedAdjacencyMatrix WeightedData WeightedGraphQ Weights WelchWindow WheelGraph WhenEvent Which While White Whitespace WhitespaceCharacter WhittakerM WhittakerW WienerFilter WienerProcess WignerD WignerSemicircleDistribution WilksW WilksWTest WindowClickSelect WindowElements WindowFloating WindowFrame WindowFrameElements WindowMargins WindowMovable WindowOpacity WindowSelected WindowSize WindowStatusArea WindowTitle WindowToolbars WindowWidth With WolframAlpha WolframAlphaDate WolframAlphaQuantity WolframAlphaResult Word WordBoundary WordCharacter WordData WordSearch WordSeparators WorkingPrecision Write WriteString Wronskian XMLElement XMLObject Xnor Xor Yellow YuleDissimilarity ZernikeR ZeroSymmetric ZeroTest ZeroWidthTimes Zeta ZetaZero ZipfDistribution ZTest ZTransform $Aborted $ActivationGroupID $ActivationKey $ActivationUserRegistered $AddOnsDirectory $AssertFunction $Assumptions $AsynchronousTask $BaseDirectory $BatchInput $BatchOutput $BoxForms $ByteOrdering $Canceled $CharacterEncoding $CharacterEncodings $CommandLine $CompilationTarget $ConditionHold $ConfiguredKernels $Context $ContextPath $ControlActiveSetting $CreationDate $CurrentLink $DateStringFormat $DefaultFont $DefaultFrontEnd $DefaultImagingDevice $DefaultPath $Display $DisplayFunction $DistributedContexts $DynamicEvaluation $Echo $Epilog $ExportFormats $Failed $FinancialDataSource $FormatType $FrontEnd $FrontEndSession $GeoLocation $HistoryLength $HomeDirectory $HTTPCookies $IgnoreEOF $ImagingDevices $ImportFormats $InitialDirectory $Input $InputFileName $InputStreamMethods $Inspector $InstallationDate $InstallationDirectory $InterfaceEnvironment $IterationLimit $KernelCount $KernelID $Language $LaunchDirectory $LibraryPath $LicenseExpirationDate $LicenseID $LicenseProcesses $LicenseServer $LicenseSubprocesses $LicenseType $Line $Linked $LinkSupported $LoadedFiles $MachineAddresses $MachineDomain $MachineDomains $MachineEpsilon $MachineID $MachineName $MachinePrecision $MachineType $MaxExtraPrecision $MaxLicenseProcesses $MaxLicenseSubprocesses $MaxMachineNumber $MaxNumber $MaxPiecewiseCases $MaxPrecision $MaxRootDegree $MessageGroups $MessageList $MessagePrePrint $Messages $MinMachineNumber $MinNumber $MinorReleaseNumber $MinPrecision $ModuleNumber $NetworkLicense $NewMessage $NewSymbol $Notebooks $NumberMarks $Off $OperatingSystem $Output $OutputForms $OutputSizeLimit $OutputStreamMethods $Packages $ParentLink $ParentProcessID $PasswordFile $PatchLevelID $Path $PathnameSeparator $PerformanceGoal $PipeSupported $Post $Pre $PreferencesDirectory $PrePrint $PreRead $PrintForms $PrintLiteral $ProcessID $ProcessorCount $ProcessorType $ProductInformation $ProgramName $RandomState $RecursionLimit $ReleaseNumber $RootDirectory $ScheduledTask $ScriptCommandLine $SessionID $SetParentLink $SharedFunctions $SharedVariables $SoundDisplay $SoundDisplayFunction $SuppressInputFormHeads $SynchronousEvaluation $SyntaxHandler $System $SystemCharacterEncoding $SystemID $SystemWordLength $TemporaryDirectory $TemporaryPrefix $TextStyle $TimedOut $TimeUnit $TimeZone $TopDirectory $TraceOff $TraceOn $TracePattern $TracePostAction $TracePreAction $Urgent $UserAddOnsDirectory $UserBaseDirectory $UserDocumentsDirectory $UserName $Version $VersionNumber",
      contains: [{
        className: "comment",
        begin: /\(\*/,
        end: /\*\)/
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, { begin: /\{/, end: /\}/, illegal: /:/ }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = [e.C_NUMBER_MODE, {
      className: "string",
      begin: "'",
      end: "'",
      contains: [e.BACKSLASH_ESCAPE, { begin: "''" }]
    }], n = { relevance: 0, contains: [{ begin: /'['\.]*/ }] };
    return {
      keywords: {
        keyword: "break case catch classdef continue else elseif end enumerated events for function global if methods otherwise parfor persistent properties return spmd switch try while",
        built_in: "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson"
      },
      illegal: '(//|"|#|/\\*|\\s+/\\w+)',
      contains: [{
        className: "function",
        beginKeywords: "function",
        end: "$",
        contains: [e.UNDERSCORE_TITLE_MODE, {
          className: "params",
          variants: [{ begin: "\\(", end: "\\)" }, { begin: "\\[", end: "\\]" }]
        }]
      }, {
        begin: /[a-zA-Z_][a-zA-Z_0-9]*'['\.]*/,
        returnBegin: !0,
        relevance: 0,
        contains: [{ begin: /[a-zA-Z_][a-zA-Z_0-9]*/, relevance: 0 }, n.contains[0]]
      }, { begin: "\\[", end: "\\]", contains: t, relevance: 0, starts: n }, {
        begin: "\\{",
        end: /}/,
        contains: t,
        relevance: 0,
        starts: n
      }, {
        begin: /\)/,
        relevance: 0,
        starts: n
      }, e.COMMENT("^\\s*\\%\\{\\s*$", "^\\s*\\%\\}\\s*$"), e.COMMENT("\\%", "$")].concat(t)
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: "int float string vector matrix if else switch case default while do for in break continue global proc return about abs addAttr addAttributeEditorNodeHelp addDynamic addNewShelfTab addPP addPanelCategory addPrefixToName advanceToNextDrivenKey affectedNet affects aimConstraint air alias aliasAttr align alignCtx alignCurve alignSurface allViewFit ambientLight angle angleBetween animCone animCurveEditor animDisplay animView annotate appendStringArray applicationName applyAttrPreset applyTake arcLenDimContext arcLengthDimension arclen arrayMapper art3dPaintCtx artAttrCtx artAttrPaintVertexCtx artAttrSkinPaintCtx artAttrTool artBuildPaintMenu artFluidAttrCtx artPuttyCtx artSelectCtx artSetPaintCtx artUserPaintCtx assignCommand assignInputDevice assignViewportFactories attachCurve attachDeviceAttr attachSurface attrColorSliderGrp attrCompatibility attrControlGrp attrEnumOptionMenu attrEnumOptionMenuGrp attrFieldGrp attrFieldSliderGrp attrNavigationControlGrp attrPresetEditWin attributeExists attributeInfo attributeMenu attributeQuery autoKeyframe autoPlace bakeClip bakeFluidShading bakePartialHistory bakeResults bakeSimulation basename basenameEx batchRender bessel bevel bevelPlus binMembership bindSkin blend2 blendShape blendShapeEditor blendShapePanel blendTwoAttr blindDataType boneLattice boundary boxDollyCtx boxZoomCtx bufferCurve buildBookmarkMenu buildKeyframeMenu button buttonManip CBG cacheFile cacheFileCombine cacheFileMerge cacheFileTrack camera cameraView canCreateManip canvas capitalizeString catch catchQuiet ceil changeSubdivComponentDisplayLevel changeSubdivRegion channelBox character characterMap characterOutlineEditor characterize chdir checkBox checkBoxGrp checkDefaultRenderGlobals choice circle circularFillet clamp clear clearCache clip clipEditor clipEditorCurrentTimeCtx clipSchedule clipSchedulerOutliner clipTrimBefore closeCurve closeSurface cluster cmdFileOutput cmdScrollFieldExecuter cmdScrollFieldReporter cmdShell coarsenSubdivSelectionList collision color colorAtPoint colorEditor colorIndex colorIndexSliderGrp colorSliderButtonGrp colorSliderGrp columnLayout commandEcho commandLine commandPort compactHairSystem componentEditor compositingInterop computePolysetVolume condition cone confirmDialog connectAttr connectControl connectDynamic connectJoint connectionInfo constrain constrainValue constructionHistory container containsMultibyte contextInfo control convertFromOldLayers convertIffToPsd convertLightmap convertSolidTx convertTessellation convertUnit copyArray copyFlexor copyKey copySkinWeights cos cpButton cpCache cpClothSet cpCollision cpConstraint cpConvClothToMesh cpForces cpGetSolverAttr cpPanel cpProperty cpRigidCollisionFilter cpSeam cpSetEdit cpSetSolverAttr cpSolver cpSolverTypes cpTool cpUpdateClothUVs createDisplayLayer createDrawCtx createEditor createLayeredPsdFile createMotionField createNewShelf createNode createRenderLayer createSubdivRegion cross crossProduct ctxAbort ctxCompletion ctxEditMode ctxTraverse currentCtx currentTime currentTimeCtx currentUnit curve curveAddPtCtx curveCVCtx curveEPCtx curveEditorCtx curveIntersect curveMoveEPCtx curveOnSurface curveSketchCtx cutKey cycleCheck cylinder dagPose date defaultLightListCheckBox defaultNavigation defineDataServer defineVirtualDevice deformer deg_to_rad delete deleteAttr deleteShadingGroupsAndMaterials deleteShelfTab deleteUI deleteUnusedBrushes delrandstr detachCurve detachDeviceAttr detachSurface deviceEditor devicePanel dgInfo dgdirty dgeval dgtimer dimWhen directKeyCtx directionalLight dirmap dirname disable disconnectAttr disconnectJoint diskCache displacementToPoly displayAffected displayColor displayCull displayLevelOfDetail displayPref displayRGBColor displaySmoothness displayStats displayString displaySurface distanceDimContext distanceDimension doBlur dolly dollyCtx dopeSheetEditor dot dotProduct doubleProfileBirailSurface drag dragAttrContext draggerContext dropoffLocator duplicate duplicateCurve duplicateSurface dynCache dynControl dynExport dynExpression dynGlobals dynPaintEditor dynParticleCtx dynPref dynRelEdPanel dynRelEditor dynamicLoad editAttrLimits editDisplayLayerGlobals editDisplayLayerMembers editRenderLayerAdjustment editRenderLayerGlobals editRenderLayerMembers editor editorTemplate effector emit emitter enableDevice encodeString endString endsWith env equivalent equivalentTol erf error eval evalDeferred evalEcho event exactWorldBoundingBox exclusiveLightCheckBox exec executeForEachObject exists exp expression expressionEditorListen extendCurve extendSurface extrude fcheck fclose feof fflush fgetline fgetword file fileBrowserDialog fileDialog fileExtension fileInfo filetest filletCurve filter filterCurve filterExpand filterStudioImport findAllIntersections findAnimCurves findKeyframe findMenuItem findRelatedSkinCluster finder firstParentOf fitBspline flexor floatEq floatField floatFieldGrp floatScrollBar floatSlider floatSlider2 floatSliderButtonGrp floatSliderGrp floor flow fluidCacheInfo fluidEmitter fluidVoxelInfo flushUndo fmod fontDialog fopen formLayout format fprint frameLayout fread freeFormFillet frewind fromNativePath fwrite gamma gauss geometryConstraint getApplicationVersionAsFloat getAttr getClassification getDefaultBrush getFileList getFluidAttr getInputDeviceRange getMayaPanelTypes getModifiers getPanel getParticleAttr getPluginResource getenv getpid glRender glRenderEditor globalStitch gmatch goal gotoBindPose grabColor gradientControl gradientControlNoAttr graphDollyCtx graphSelectContext graphTrackCtx gravity grid gridLayout group groupObjectsByName HfAddAttractorToAS HfAssignAS HfBuildEqualMap HfBuildFurFiles HfBuildFurImages HfCancelAFR HfConnectASToHF HfCreateAttractor HfDeleteAS HfEditAS HfPerformCreateAS HfRemoveAttractorFromAS HfSelectAttached HfSelectAttractors HfUnAssignAS hardenPointCurve hardware hardwareRenderPanel headsUpDisplay headsUpMessage help helpLine hermite hide hilite hitTest hotBox hotkey hotkeyCheck hsv_to_rgb hudButton hudSlider hudSliderButton hwReflectionMap hwRender hwRenderLoad hyperGraph hyperPanel hyperShade hypot iconTextButton iconTextCheckBox iconTextRadioButton iconTextRadioCollection iconTextScrollList iconTextStaticLabel ikHandle ikHandleCtx ikHandleDisplayScale ikSolver ikSplineHandleCtx ikSystem ikSystemInfo ikfkDisplayMethod illustratorCurves image imfPlugins inheritTransform insertJoint insertJointCtx insertKeyCtx insertKnotCurve insertKnotSurface instance instanceable instancer intField intFieldGrp intScrollBar intSlider intSliderGrp interToUI internalVar intersect iprEngine isAnimCurve isConnected isDirty isParentOf isSameObject isTrue isValidObjectName isValidString isValidUiName isolateSelect itemFilter itemFilterAttr itemFilterRender itemFilterType joint jointCluster jointCtx jointDisplayScale jointLattice keyTangent keyframe keyframeOutliner keyframeRegionCurrentTimeCtx keyframeRegionDirectKeyCtx keyframeRegionDollyCtx keyframeRegionInsertKeyCtx keyframeRegionMoveKeyCtx keyframeRegionScaleKeyCtx keyframeRegionSelectKeyCtx keyframeRegionSetKeyCtx keyframeRegionTrackCtx keyframeStats lassoContext lattice latticeDeformKeyCtx launch launchImageEditor layerButton layeredShaderPort layeredTexturePort layout layoutDialog lightList lightListEditor lightListPanel lightlink lineIntersection linearPrecision linstep listAnimatable listAttr listCameras listConnections listDeviceAttachments listHistory listInputDeviceAxes listInputDeviceButtons listInputDevices listMenuAnnotation listNodeTypes listPanelCategories listRelatives listSets listTransforms listUnselected listerEditor loadFluid loadNewShelf loadPlugin loadPluginLanguageResources loadPrefObjects localizedPanelLabel lockNode loft log longNameOf lookThru ls lsThroughFilter lsType lsUI Mayatomr mag makeIdentity makeLive makePaintable makeRoll makeSingleSurface makeTubeOn makebot manipMoveContext manipMoveLimitsCtx manipOptions manipRotateContext manipRotateLimitsCtx manipScaleContext manipScaleLimitsCtx marker match max memory menu menuBarLayout menuEditor menuItem menuItemToShelf menuSet menuSetPref messageLine min minimizeApp mirrorJoint modelCurrentTimeCtx modelEditor modelPanel mouse movIn movOut move moveIKtoFK moveKeyCtx moveVertexAlongDirection multiProfileBirailSurface mute nParticle nameCommand nameField namespace namespaceInfo newPanelItems newton nodeCast nodeIconButton nodeOutliner nodePreset nodeType noise nonLinear normalConstraint normalize nurbsBoolean nurbsCopyUVSet nurbsCube nurbsEditUV nurbsPlane nurbsSelect nurbsSquare nurbsToPoly nurbsToPolygonsPref nurbsToSubdiv nurbsToSubdivPref nurbsUVSet nurbsViewDirectionVector objExists objectCenter objectLayer objectType objectTypeUI obsoleteProc oceanNurbsPreviewPlane offsetCurve offsetCurveOnSurface offsetSurface openGLExtension openMayaPref optionMenu optionMenuGrp optionVar orbit orbitCtx orientConstraint outlinerEditor outlinerPanel overrideModifier paintEffectsDisplay pairBlend palettePort paneLayout panel panelConfiguration panelHistory paramDimContext paramDimension paramLocator parent parentConstraint particle particleExists particleInstancer particleRenderInfo partition pasteKey pathAnimation pause pclose percent performanceOptions pfxstrokes pickWalk picture pixelMove planarSrf plane play playbackOptions playblast plugAttr plugNode pluginInfo pluginResourceUtil pointConstraint pointCurveConstraint pointLight pointMatrixMult pointOnCurve pointOnSurface pointPosition poleVectorConstraint polyAppend polyAppendFacetCtx polyAppendVertex polyAutoProjection polyAverageNormal polyAverageVertex polyBevel polyBlendColor polyBlindData polyBoolOp polyBridgeEdge polyCacheMonitor polyCheck polyChipOff polyClipboard polyCloseBorder polyCollapseEdge polyCollapseFacet polyColorBlindData polyColorDel polyColorPerVertex polyColorSet polyCompare polyCone polyCopyUV polyCrease polyCreaseCtx polyCreateFacet polyCreateFacetCtx polyCube polyCut polyCutCtx polyCylinder polyCylindricalProjection polyDelEdge polyDelFacet polyDelVertex polyDuplicateAndConnect polyDuplicateEdge polyEditUV polyEditUVShell polyEvaluate polyExtrudeEdge polyExtrudeFacet polyExtrudeVertex polyFlipEdge polyFlipUV polyForceUV polyGeoSampler polyHelix polyInfo polyInstallAction polyLayoutUV polyListComponentConversion polyMapCut polyMapDel polyMapSew polyMapSewMove polyMergeEdge polyMergeEdgeCtx polyMergeFacet polyMergeFacetCtx polyMergeUV polyMergeVertex polyMirrorFace polyMoveEdge polyMoveFacet polyMoveFacetUV polyMoveUV polyMoveVertex polyNormal polyNormalPerVertex polyNormalizeUV polyOptUvs polyOptions polyOutput polyPipe polyPlanarProjection polyPlane polyPlatonicSolid polyPoke polyPrimitive polyPrism polyProjection polyPyramid polyQuad polyQueryBlindData polyReduce polySelect polySelectConstraint polySelectConstraintMonitor polySelectCtx polySelectEditCtx polySeparate polySetToFaceNormal polySewEdge polyShortestPathCtx polySmooth polySoftEdge polySphere polySphericalProjection polySplit polySplitCtx polySplitEdge polySplitRing polySplitVertex polyStraightenUVBorder polySubdivideEdge polySubdivideFacet polyToSubdiv polyTorus polyTransfer polyTriangulate polyUVSet polyUnite polyWedgeFace popen popupMenu pose pow preloadRefEd print progressBar progressWindow projFileViewer projectCurve projectTangent projectionContext projectionManip promptDialog propModCtx propMove psdChannelOutliner psdEditTextureFile psdExport psdTextureFile putenv pwd python querySubdiv quit rad_to_deg radial radioButton radioButtonGrp radioCollection radioMenuItemCollection rampColorPort rand randomizeFollicles randstate rangeControl readTake rebuildCurve rebuildSurface recordAttr recordDevice redo reference referenceEdit referenceQuery refineSubdivSelectionList refresh refreshAE registerPluginResource rehash reloadImage removeJoint removeMultiInstance removePanelCategory rename renameAttr renameSelectionList renameUI render renderGlobalsNode renderInfo renderLayerButton renderLayerParent renderLayerPostProcess renderLayerUnparent renderManip renderPartition renderQualityNode renderSettings renderThumbnailUpdate renderWindowEditor renderWindowSelectContext renderer reorder reorderDeformers requires reroot resampleFluid resetAE resetPfxToPolyCamera resetTool resolutionNode retarget reverseCurve reverseSurface revolve rgb_to_hsv rigidBody rigidSolver roll rollCtx rootOf rot rotate rotationInterpolation roundConstantRadius rowColumnLayout rowLayout runTimeCommand runup sampleImage saveAllShelves saveAttrPreset saveFluid saveImage saveInitialState saveMenu savePrefObjects savePrefs saveShelf saveToolSettings scale scaleBrushBrightness scaleComponents scaleConstraint scaleKey scaleKeyCtx sceneEditor sceneUIReplacement scmh scriptCtx scriptEditorInfo scriptJob scriptNode scriptTable scriptToShelf scriptedPanel scriptedPanelType scrollField scrollLayout sculpt searchPathArray seed selLoadSettings select selectContext selectCurveCV selectKey selectKeyCtx selectKeyframeRegionCtx selectMode selectPref selectPriority selectType selectedNodes selectionConnection separator setAttr setAttrEnumResource setAttrMapping setAttrNiceNameResource setConstraintRestPosition setDefaultShadingGroup setDrivenKeyframe setDynamic setEditCtx setEditor setFluidAttr setFocus setInfinity setInputDeviceMapping setKeyCtx setKeyPath setKeyframe setKeyframeBlendshapeTargetWts setMenuMode setNodeNiceNameResource setNodeTypeFlag setParent setParticleAttr setPfxToPolyCamera setPluginResource setProject setStampDensity setStartupMessage setState setToolTo setUITemplate setXformManip sets shadingConnection shadingGeometryRelCtx shadingLightRelCtx shadingNetworkCompare shadingNode shapeCompare shelfButton shelfLayout shelfTabLayout shellField shortNameOf showHelp showHidden showManipCtx showSelectionInTitle showShadingGroupAttrEditor showWindow sign simplify sin singleProfileBirailSurface size sizeBytes skinCluster skinPercent smoothCurve smoothTangentSurface smoothstep snap2to2 snapKey snapMode snapTogetherCtx snapshot soft softMod softModCtx sort sound soundControl source spaceLocator sphere sphrand spotLight spotLightPreviewPort spreadSheetEditor spring sqrt squareSurface srtContext stackTrace startString startsWith stitchAndExplodeShell stitchSurface stitchSurfacePoints strcmp stringArrayCatenate stringArrayContains stringArrayCount stringArrayInsertAtIndex stringArrayIntersector stringArrayRemove stringArrayRemoveAtIndex stringArrayRemoveDuplicates stringArrayRemoveExact stringArrayToString stringToStringArray strip stripPrefixFromName stroke subdAutoProjection subdCleanTopology subdCollapse subdDuplicateAndConnect subdEditUV subdListComponentConversion subdMapCut subdMapSewMove subdMatchTopology subdMirror subdToBlind subdToPoly subdTransferUVsToCache subdiv subdivCrease subdivDisplaySmoothness substitute substituteAllString substituteGeometry substring surface surfaceSampler surfaceShaderList swatchDisplayPort switchTable symbolButton symbolCheckBox sysFile system tabLayout tan tangentConstraint texLatticeDeformContext texManipContext texMoveContext texMoveUVShellContext texRotateContext texScaleContext texSelectContext texSelectShortestPathCtx texSmudgeUVContext texWinToolCtx text textCurves textField textFieldButtonGrp textFieldGrp textManip textScrollList textToShelf textureDisplacePlane textureHairColor texturePlacementContext textureWindow threadCount threePointArcCtx timeControl timePort timerX toNativePath toggle toggleAxis toggleWindowVisibility tokenize tokenizeList tolerance tolower toolButton toolCollection toolDropped toolHasOptions toolPropertyWindow torus toupper trace track trackCtx transferAttributes transformCompare transformLimits translator trim trunc truncateFluidCache truncateHairCache tumble tumbleCtx turbulence twoPointArcCtx uiRes uiTemplate unassignInputDevice undo undoInfo ungroup uniform unit unloadPlugin untangleUV untitledFileName untrim upAxis updateAE userCtx uvLink uvSnapshot validateShelfName vectorize view2dToolCtx viewCamera viewClipPlane viewFit viewHeadOn viewLookAt viewManip viewPlace viewSet visor volumeAxis vortex waitCursor warning webBrowser webBrowserPrefs whatIs window windowPref wire wireContext workspace wrinkle wrinkleContext writeTake xbmLangPathList xform",
      illegal: "</",
      contains: [e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
        className: "string",
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE]
      }, { begin: "[\\$\\%\\@](\\^\\w\\b|#\\w+|[^\\s\\w{]|{\\w+}|\\w+)" }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "module use_module import_module include_module end_module initialise mutable initialize finalize finalise interface implementation pred mode func type inst solver any_pred any_func is semidet det nondet multi erroneous failure cc_nondet cc_multi typeclass instance where pragma promise external trace atomic or_else require_complete_switch require_det require_semidet require_multi require_nondet require_cc_multi require_cc_nondet require_erroneous require_failure",
      meta: "inline no_inline type_spec source_file fact_table obsolete memo loop_check minimal_model terminates does_not_terminate check_termination promise_equivalent_clauses foreign_proc foreign_decl foreign_code foreign_type foreign_import_module foreign_export_enum foreign_export foreign_enum may_call_mercury will_not_call_mercury thread_safe not_thread_safe maybe_thread_safe promise_pure promise_semipure tabled_for_io local untrailed trailed attach_to_io_state can_pass_as_mercury_type stable will_not_throw_exception may_modify_trail will_not_modify_trail may_duplicate may_not_duplicate affects_liveness does_not_affect_liveness doesnt_affect_liveness no_sharing unknown_sharing sharing",
      built_in: "some all not if then else true fail false try catch catch_any semidet_true semidet_false semidet_fail impure_true impure semipure"
    }, n = e.COMMENT("%", "$"), r = {
      className: "number",
      begin: "0'.\\|0[box][0-9a-fA-F]*"
    }, i = e.inherit(e.APOS_STRING_MODE, { relevance: 0 }), a = e.inherit(e.QUOTE_STRING_MODE, { relevance: 0 }), o = {
      className: "subst",
      begin: "\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]",
      relevance: 0
    };
    a.contains.push(o);
    var s = {
      className: "built_in",
      variants: [{ begin: "<=>" }, { begin: "<=", relevance: 0 }, {
        begin: "=>",
        relevance: 0
      }, { begin: "/\\\\" }, { begin: "\\\\/" }]
    }, l = { className: "built_in", variants: [{ begin: ":-\\|-->" }, { begin: "=", relevance: 0 }] };
    return {
      aliases: ["m", "moo"],
      keywords: t,
      contains: [s, l, n, e.C_BLOCK_COMMENT_MODE, r, e.NUMBER_MODE, i, a, { begin: /:-/ }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      case_insensitive: !0,
      aliases: ["mips"],
      lexemes: "\\.?" + e.IDENT_RE,
      keywords: {
        meta: ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ",
        built_in: "$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 t0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 k0 k1 gp sp fp ra $f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 $f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt "
      },
      contains: [{
        className: "keyword",
        begin: "\\b(addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(.hb)?|jr(.hb)?|lbu?|lhu?|ll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|msubu?|mthi|mtlo|mul|multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|srlv?|subu?|sw[lr]?|xori?|wsbh|abs.[sd]|add.[sd]|alnv.ps|bc1[ft]l?|c.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et]).[sd]|(ceil|floor|round|trunc).[lw].[sd]|cfc1|cvt.d.[lsw]|cvt.l.[dsw]|cvt.ps.s|cvt.s.[dlw]|cvt.s.p[lu]|cvt.w.[dls]|div.[ds]|ldx?c1|luxc1|lwx?c1|madd.[sd]|mfc1|mov[fntz]?.[ds]|msub.[sd]|mth?c1|mul.[ds]|neg.[ds]|nmadd.[ds]|nmsub.[ds]|p[lu][lu].ps|recip.fmt|r?sqrt.[ds]|sdx?c1|sub.[ds]|suxc1|swx?c1|break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|tlti?u?|tnei?|wait|wrpgpr)",
        end: "\\s"
      }, e.COMMENT("[;#]", "$"), e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "[^\\\\]'",
        relevance: 0
      }, { className: "title", begin: "\\|", end: "\\|", illegal: "\\n", relevance: 0 }, {
        className: "number",
        variants: [{ begin: "0x[0-9a-f]+" }, { begin: "\\b-?\\d+" }],
        relevance: 0
      }, {
        className: "symbol",
        variants: [{ begin: "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:" }, { begin: "^\\s*[0-9]+:" }, { begin: "[0-9]+[bf]" }],
        relevance: 0
      }],
      illegal: "/"
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: "environ vocabularies notations constructors definitions registrations theorems schemes requirements begin end definition registration cluster existence pred func defpred deffunc theorem proof let take assume then thus hence ex for st holds consider reconsider such that and in provided of as from be being by means equals implies iff redefine define now not or attr is mode suppose per cases set thesis contradiction scheme reserve struct correctness compatibility coherence symmetry assymetry reflexivity irreflexivity connectedness uniqueness commutativity idempotence involutiveness projectivity",
      contains: [e.COMMENT("::", "$")]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      subLanguage: "xml",
      contains: [{ className: "meta", begin: "^__(END|DATA)__$" }, {
        begin: "^\\s*%{1,2}={0,2}",
        end: "$",
        subLanguage: "perl"
      }, { begin: "<%{1,2}={0,2}", end: "={0,1}%>", subLanguage: "perl", excludeBegin: !0, excludeEnd: !0 }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "number", relevance: 0, variants: [{ begin: "[$][a-fA-F0-9]+" }, e.NUMBER_MODE] };
    return {
      case_insensitive: !0,
      keywords: {
        keyword: "public private property continue exit extern new try catch eachin not abstract final select case default const local global field end if then else elseif endif while wend repeat until forever for to step next return module inline throw import",
        built_in: "DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI",
        literal: "true false null and or shl shr mod"
      },
      illegal: /\/\*/,
      contains: [e.COMMENT("#rem", "#end"), e.COMMENT("'", "$", { relevance: 0 }), {
        className: "function",
        beginKeywords: "function method",
        end: "[(=:]|$",
        illegal: /\n/,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: "$",
        contains: [{ beginKeywords: "extends implements" }, e.UNDERSCORE_TITLE_MODE]
      }, { className: "built_in", begin: "\\b(self|super)\\b" }, {
        className: "meta",
        begin: "\\s*#",
        end: "$",
        keywords: { "meta-keyword": "if else elseif endif end then" }
      }, { className: "meta", begin: "^\\s*strict\\b" }, {
        beginKeywords: "alias",
        end: "=",
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, e.QUOTE_STRING_MODE, t]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "variable",
      variants: [{ begin: /\$\d+/ }, { begin: /\$\{/, end: /}/ }, { begin: "[\\$\\@]" + e.UNDERSCORE_IDENT_RE }]
    }, n = {
      endsWithParent: !0,
      lexemes: "[a-z/_]+",
      keywords: { literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll" },
      relevance: 0,
      illegal: "=>",
      contains: [e.HASH_COMMENT_MODE, {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE, t],
        variants: [{ begin: /"/, end: /"/ }, { begin: /'/, end: /'/ }]
      }, { begin: "([a-z]+):/", end: "\\s", endsWithParent: !0, excludeEnd: !0, contains: [t] }, {
        className: "regexp",
        contains: [e.BACKSLASH_ESCAPE, t],
        variants: [{ begin: "\\s\\^", end: "\\s|{|;", returnEnd: !0 }, {
          begin: "~\\*?\\s+",
          end: "\\s|{|;",
          returnEnd: !0
        }, { begin: "\\*(\\.[a-z\\-]+)+" }, { begin: "([a-z\\-]+\\.)+\\*" }]
      }, {
        className: "number",
        begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
      }, { className: "number", begin: "\\b\\d+[kKmMgGdshdwy]*\\b", relevance: 0 }, t]
    };
    return {
      aliases: ["nginxconf"],
      contains: [e.HASH_COMMENT_MODE, {
        begin: e.UNDERSCORE_IDENT_RE + "\\s+{",
        returnBegin: !0,
        end: "{",
        contains: [{ className: "section", begin: e.UNDERSCORE_IDENT_RE }],
        relevance: 0
      }, {
        begin: e.UNDERSCORE_IDENT_RE + "\\s",
        end: ";|{",
        returnBegin: !0,
        contains: [{ className: "attribute", begin: e.UNDERSCORE_IDENT_RE, starts: n }],
        relevance: 0
      }],
      illegal: "[^\\s\\}]"
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["nim"],
      keywords: {
        keyword: "addr and as asm bind block break|0 case|0 cast const|0 continue|0 converter discard distinct|10 div do elif else|0 end|0 enum|0 except export finally for from generic if|0 import|0 in include|0 interface is isnot|10 iterator|10 let|0 macro method|10 mixin mod nil not notin|10 object|0 of or out proc|10 ptr raise ref|10 return shl shr static template try|0 tuple type|0 using|0 var|0 when while|0 with without xor yield",
        literal: "shared guarded stdin stdout stderr result|10 true false"
      },
      contains: [{ className: "meta", begin: /{\./, end: /\.}/, relevance: 10 }, {
        className: "string",
        begin: /[a-zA-Z]\w*"/,
        end: /"/,
        contains: [{ begin: /""/ }]
      }, { className: "string", begin: /([a-zA-Z]\w*)?"""/, end: /"""/ }, e.QUOTE_STRING_MODE, {
        className: "type",
        begin: /\b[A-Z]\w+\b/,
        relevance: 0
      }, {
        className: "built_in",
        begin: /\b(int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|float|float32|float64|bool|char|string|cstring|pointer|expr|stmt|void|auto|any|range|array|openarray|varargs|seq|set|clong|culong|cchar|cschar|cshort|cint|csize|clonglong|cfloat|cdouble|clongdouble|cuchar|cushort|cuint|culonglong|cstringarray|semistatic)\b/
      }, {
        className: "number",
        relevance: 0,
        variants: [{ begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/ }, { begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/ }, { begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/ }, { begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/ }]
      }, e.HASH_COMMENT_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "rec with let in inherit assert if else then",
      literal: "true false or and null",
      built_in: "import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"
    }, n = { className: "subst", begin: /\$\{/, end: /}/, keywords: t }, r = {
      begin: /[a-zA-Z0-9-_]+(\s*=)/,
      returnBegin: !0,
      relevance: 0,
      contains: [{ className: "attr", begin: /\S+/ }]
    }, i = {
      className: "string",
      contains: [n],
      variants: [{ begin: "''", end: "''" }, { begin: '"', end: '"' }]
    }, a = [e.NUMBER_MODE, e.HASH_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, i, r];
    return n.contains = a, { aliases: ["nixos"], keywords: t, contains: a }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "variable",
      begin: "\\$(ADMINTOOLS|APPDATA|CDBURN_AREA|CMDLINE|COMMONFILES32|COMMONFILES64|COMMONFILES|COOKIES|DESKTOP|DOCUMENTS|EXEDIR|EXEFILE|EXEPATH|FAVORITES|FONTS|HISTORY|HWNDPARENT|INSTDIR|INTERNET_CACHE|LANGUAGE|LOCALAPPDATA|MUSIC|NETHOOD|OUTDIR|PICTURES|PLUGINSDIR|PRINTHOOD|PROFILE|PROGRAMFILES32|PROGRAMFILES64|PROGRAMFILES|QUICKLAUNCH|RECENT|RESOURCES_LOCALIZED|RESOURCES|SENDTO|SMPROGRAMS|SMSTARTUP|STARTMENU|SYSDIR|TEMP|TEMPLATES|VIDEOS|WINDIR)"
    }, n = { className: "variable", begin: "\\$+{[a-zA-Z0-9_]+}" }, r = {
      className: "variable",
      begin: "\\$+[a-zA-Z0-9_]+",
      illegal: "\\(\\){}"
    }, i = { className: "variable", begin: "\\$+\\([a-zA-Z0-9_]+\\)" }, a = {
      className: "built_in",
      begin: "(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SYSTEM|TEMPORARY)"
    }, o = {
      className: "keyword",
      begin: "\\!(addincludedir|addplugindir|appendfile|cd|define|delfile|echo|else|endif|error|execute|finalize|getdllversionsystem|ifdef|ifmacrodef|ifmacrondef|ifndef|if|include|insertmacro|macroend|macro|makensis|packhdr|searchparse|searchreplace|tempfile|undef|verbose|warning)"
    };
    return {
      case_insensitive: !1,
      keywords: {
        keyword: "Abort AddBrandingImage AddSize AllowRootDirInstall AllowSkipFiles AutoCloseWindow BGFont BGGradient BrandingText BringToFront Call CallInstDLL Caption ChangeUI CheckBitmap ClearErrors CompletedText ComponentText CopyFiles CRCCheck CreateDirectory CreateFont CreateShortCut Delete DeleteINISec DeleteINIStr DeleteRegKey DeleteRegValue DetailPrint DetailsButtonText DirText DirVar DirVerify EnableWindow EnumRegKey EnumRegValue Exch Exec ExecShell ExecWait ExpandEnvStrings File FileBufSize FileClose FileErrorText FileOpen FileRead FileReadByte FileReadUTF16LE FileReadWord FileSeek FileWrite FileWriteByte FileWriteUTF16LE FileWriteWord FindClose FindFirst FindNext FindWindow FlushINI FunctionEnd GetCurInstType GetCurrentAddress GetDlgItem GetDLLVersion GetDLLVersionLocal GetErrorLevel GetFileTime GetFileTimeLocal GetFullPathName GetFunctionAddress GetInstDirError GetLabelAddress GetTempFileName Goto HideWindow Icon IfAbort IfErrors IfFileExists IfRebootFlag IfSilent InitPluginsDir InstallButtonText InstallColors InstallDir InstallDirRegKey InstProgressFlags InstType InstTypeGetText InstTypeSetText IntCmp IntCmpU IntFmt IntOp IsWindow LangString LicenseBkColor LicenseData LicenseForceSelection LicenseLangString LicenseText LoadLanguageFile LockWindow LogSet LogText ManifestDPIAware ManifestSupportedOS MessageBox MiscButtonText Name Nop OutFile Page PageCallbacks PageExEnd Pop Push Quit ReadEnvStr ReadINIStr ReadRegDWORD ReadRegStr Reboot RegDLL Rename RequestExecutionLevel ReserveFile Return RMDir SearchPath SectionEnd SectionGetFlags SectionGetInstTypes SectionGetSize SectionGetText SectionGroupEnd SectionIn SectionSetFlags SectionSetInstTypes SectionSetSize SectionSetText SendMessage SetAutoClose SetBrandingImage SetCompress SetCompressor SetCompressorDictSize SetCtlColors SetCurInstType SetDatablockOptimize SetDateSave SetDetailsPrint SetDetailsView SetErrorLevel SetErrors SetFileAttributes SetFont SetOutPath SetOverwrite SetPluginUnload SetRebootFlag SetRegView SetShellVarContext SetSilent ShowInstDetails ShowUninstDetails ShowWindow SilentInstall SilentUnInstall Sleep SpaceTexts StrCmp StrCmpS StrCpy StrLen SubCaption SubSectionEnd Unicode UninstallButtonText UninstallCaption UninstallIcon UninstallSubCaption UninstallText UninstPage UnRegDLL Var VIAddVersionKey VIFileVersion VIProductVersion WindowIcon WriteINIStr WriteRegBin WriteRegDWORD WriteRegExpandStr WriteRegStr WriteUninstaller XPStyle",
        literal: "admin all auto both colored current false force hide highest lastused leave listonly none normal notset off on open print show silent silentlog smooth textonly true user "
      },
      contains: [e.HASH_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [{ begin: "\\$(\\\\(n|r|t)|\\$)" }, t, n, r, i]
      }, e.COMMENT(";", "$", { relevance: 0 }), {
        className: "function",
        beginKeywords: "Function PageEx Section SectionGroup SubSection",
        end: "$"
      }, o, n, r, i, a, e.NUMBER_MODE, { begin: e.IDENT_RE + "::" + e.IDENT_RE }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "built_in",
      begin: "(AV|CA|CF|CG|CI|MK|MP|NS|UI|XC)\\w+"
    }, n = {
      keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
      literal: "false true FALSE TRUE nil YES NO NULL",
      built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    }, r = /[a-zA-Z@][a-zA-Z0-9_]*/, i = "@interface @class @protocol @implementation";
    return {
      aliases: ["mm", "objc", "obj-c"],
      keywords: n,
      lexemes: r,
      illegal: "</",
      contains: [t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, e.QUOTE_STRING_MODE, {
        className: "string",
        variants: [{ begin: '@"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE] }, {
          begin: "'",
          end: "[^\\\\]'",
          illegal: "[^\\\\][^']"
        }]
      }, {
        className: "meta",
        begin: "#",
        end: "$",
        contains: [{ className: "meta-string", variants: [{ begin: '"', end: '"' }, { begin: "<", end: ">" }] }]
      }, {
        className: "class",
        begin: "(" + i.split(" ").join("|") + ")\\b",
        end: "({|$)",
        excludeEnd: !0,
        keywords: i,
        lexemes: r,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, { begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0 }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["ml"],
      keywords: {
        keyword: "and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value",
        built_in: "array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref",
        literal: "true false"
      },
      illegal: /\/\/|>>/,
      lexemes: "[a-z_]\\w*!?",
      contains: [{
        className: "literal",
        begin: "\\[(\\|\\|)?\\]|\\(\\)",
        relevance: 0
      }, e.COMMENT("\\(\\*", "\\*\\)", { contains: ["self"] }), {
        className: "symbol",
        begin: "'[A-Za-z_](?!')[\\w']*"
      }, { className: "type", begin: "`[A-Z][\\w']*" }, {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      }, { begin: "[a-z_]\\w*'[\\w']*", relevance: 0 }, e.inherit(e.APOS_STRING_MODE, {
        className: "string",
        relevance: 0
      }), e.inherit(e.QUOTE_STRING_MODE, { illegal: null }), {
        className: "number",
        begin: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
        relevance: 0
      }, { begin: /[-=]>/ }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "keyword", begin: "\\$(f[asn]|t|vp[rtd]|children)" }, n = {
      className: "literal",
      begin: "false|true|PI|undef"
    }, r = {
      className: "number",
      begin: "\\b\\d+(\\.\\d+)?(e-?\\d+)?",
      relevance: 0
    }, i = e.inherit(e.QUOTE_STRING_MODE, { illegal: null }), a = {
      className: "meta",
      keywords: { "meta-keyword": "include use" },
      begin: "include|use <",
      end: ">"
    }, o = { className: "params", begin: "\\(", end: "\\)", contains: ["self", r, i, t, n] }, s = {
      begin: "[*!#%]",
      relevance: 0
    }, l = {
      className: "function",
      beginKeywords: "module function",
      end: "\\=|\\{",
      contains: [o, e.UNDERSCORE_TITLE_MODE]
    };
    return {
      aliases: ["scad"],
      keywords: {
        keyword: "function module include use for intersection_for if else \\%",
        literal: "false true PI undef",
        built_in: "circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"
      },
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, a, i, t, s, l]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained", n = e.COMMENT("{", "}", { relevance: 0 }), r = e.COMMENT("\\(\\*", "\\*\\)", { relevance: 10 }), i = {
      className: "string",
      begin: "'",
      end: "'",
      contains: [{ begin: "''" }]
    }, a = { className: "string", begin: "(#\\d+)+" }, o = {
      className: "function",
      beginKeywords: "function constructor destructor procedure method",
      end: "[:;]",
      keywords: "function constructor|10 destructor|10 procedure|10 method|10",
      contains: [e.TITLE_MODE, { className: "params", begin: "\\(", end: "\\)", keywords: t, contains: [i, a] }, n, r]
    };
    return {
      case_insensitive: !0,
      keywords: t,
      illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
      contains: [n, r, e.C_LINE_COMMENT_MODE, i, a, e.NUMBER_MODE, o, {
        className: "class",
        begin: "=\\bclass\\b",
        end: "end;",
        keywords: t,
        contains: [i, a, n, r, e.C_LINE_COMMENT_MODE, o]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = e.COMMENT("{", "}", { contains: ["self"] });
    return {
      subLanguage: "xml",
      relevance: 0,
      contains: [e.COMMENT("^#", "$"), e.COMMENT("\\^rem{", "}", { relevance: 10, contains: [t] }), {
        className: "meta",
        begin: "^@(?:BASE|USE|CLASS|OPTIONS)$",
        relevance: 10
      }, {
        className: "title",
        begin: "@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"
      }, { className: "variable", begin: "\\$\\{?[\\w\\-\\.\\:]+\\}?" }, {
        className: "keyword",
        begin: "\\^[\\w\\-\\.\\:]+"
      }, { className: "number", begin: "\\^#[0-9a-fA-F]+" }, e.C_NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when", n = {
      className: "subst",
      begin: "[$@]\\{",
      end: "\\}",
      keywords: t
    }, r = {
      begin: "->{",
      end: "}"
    }, i = {
      variants: [{ begin: /\$\d/ }, { begin: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ }, {
        begin: /[\$%@][^\s\w{]/,
        relevance: 0
      }]
    }, a = [e.BACKSLASH_ESCAPE, n, i], o = [i, e.HASH_COMMENT_MODE, e.COMMENT("^\\=\\w", "\\=cut", { endsWithParent: !0 }), r, {
      className: "string",
      contains: a,
      variants: [{ begin: "q[qwxr]?\\s*\\(", end: "\\)", relevance: 5 }, {
        begin: "q[qwxr]?\\s*\\[",
        end: "\\]",
        relevance: 5
      }, { begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5 }, {
        begin: "q[qwxr]?\\s*\\|",
        end: "\\|",
        relevance: 5
      }, { begin: "q[qwxr]?\\s*\\<", end: "\\>", relevance: 5 }, {
        begin: "qw\\s+q",
        end: "q",
        relevance: 5
      }, { begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE] }, { begin: '"', end: '"' }, {
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE]
      }, { begin: "{\\w+}", contains: [], relevance: 0 }, { begin: "-?\\w+\\s*\\=\\>", contains: [], relevance: 0 }]
    }, {
      className: "number",
      begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      relevance: 0
    }, {
      begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
      keywords: "split return print reverse grep",
      relevance: 0,
      contains: [e.HASH_COMMENT_MODE, {
        className: "regexp",
        begin: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
        relevance: 10
      }, { className: "regexp", begin: "(m|qr)?/", end: "/[a-z]*", contains: [e.BACKSLASH_ESCAPE], relevance: 0 }]
    }, {
      className: "function",
      beginKeywords: "sub",
      end: "(\\s*\\(.*?\\))?[;{]",
      excludeEnd: !0,
      relevance: 5,
      contains: [e.TITLE_MODE]
    }, { begin: "-\\w\\b", relevance: 0 }, {
      begin: "^__DATA__$",
      end: "^__END__$",
      subLanguage: "mojolicious",
      contains: [{ begin: "^@@.*", end: "$", className: "comment" }]
    }];
    return n.contains = o, r.contains = o, { aliases: ["pl"], keywords: t, contains: o }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "variable", begin: /\$[\w\d#@][\w\d_]*/ }, n = { className: "variable", begin: /</, end: />/ };
    return {
      aliases: ["pf.conf"],
      lexemes: /[a-z0-9_<>-]+/,
      keywords: {
        built_in: "block match pass load anchor|5 antispoof|10 set table",
        keyword: "in out log quick on rdomain inet inet6 proto from port os to routeallow-opts divert-packet divert-reply divert-to flags group icmp-typeicmp6-type label once probability recieved-on rtable prio queuetos tag tagged user keep fragment for os dropaf-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robinsource-hash static-portdup-to reply-to route-toparent bandwidth default min max qlimitblock-policy debug fingerprints hostid limit loginterface optimizationreassemble ruleset-optimization basic none profile skip state-defaultsstate-policy timeoutconst counters persistno modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppysource-track global rule max-src-nodes max-src-states max-src-connmax-src-conn-rate overload flushscrub|5 max-mss min-ttl no-df|10 random-id",
        literal: "all any no-route self urpf-failed egress|5 unknown"
      },
      contains: [e.HASH_COMMENT_MODE, e.NUMBER_MODE, e.QUOTE_STRING_MODE, t, n]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { begin: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" }, n = {
      className: "meta",
      begin: /<\?(php)?|\?>/
    }, r = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE, n],
      variants: [{ begin: 'b"', end: '"' }, {
        begin: "b'",
        end: "'"
      }, e.inherit(e.APOS_STRING_MODE, { illegal: null }), e.inherit(e.QUOTE_STRING_MODE, { illegal: null })]
    }, i = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] };
    return {
      aliases: ["php3", "php4", "php5", "php6"],
      case_insensitive: !0,
      keywords: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
      contains: [e.C_LINE_COMMENT_MODE, e.HASH_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
        contains: [{
          className: "doctag",
          begin: "@[A-Za-z]+"
        }, n]
      }), e.COMMENT("__halt_compiler.+?;", !1, {
        endsWithParent: !0,
        keywords: "__halt_compiler",
        lexemes: e.UNDERSCORE_IDENT_RE
      }), {
        className: "string",
        begin: /<<<['"]?\w+['"]?$/,
        end: /^\w+;?$/,
        contains: [e.BACKSLASH_ESCAPE, {
          className: "subst",
          variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }]
        }]
      }, n, t, { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ }, {
        className: "function",
        beginKeywords: "function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "\\$|\\[|%",
        contains: [e.UNDERSCORE_TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          contains: ["self", t, e.C_BLOCK_COMMENT_MODE, r, i]
        }]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: "{",
        excludeEnd: !0,
        illegal: /[:\(\$"]/,
        contains: [{ beginKeywords: "extends implements" }, e.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "namespace",
        end: ";",
        illegal: /[\.']/,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, { beginKeywords: "use", end: ";", contains: [e.UNDERSCORE_TITLE_MODE] }, { begin: "=>" }, r, i]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { begin: "`[\\s\\S]", relevance: 0 }, n = {
      className: "variable",
      variants: [{ begin: /\$[\w\d][\w\d_:]*/ }]
    }, r = { className: "literal", begin: /\$(null|true|false)\b/ }, i = {
      className: "string",
      begin: /"/,
      end: /"/,
      contains: [t, n, { className: "variable", begin: /\$[A-z]/, end: /[^A-z]/ }]
    }, a = { className: "string", begin: /'/, end: /'/ };
    return {
      aliases: ["ps"],
      lexemes: /-?[A-z\.\-]+/,
      case_insensitive: !0,
      keywords: {
        keyword: "if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch",
        built_in: "Add-Content Add-History Add-Member Add-PSSnapin Clear-Content Clear-Item Clear-Item Property Clear-Variable Compare-Object ConvertFrom-SecureString Convert-Path ConvertTo-Html ConvertTo-SecureString Copy-Item Copy-ItemProperty Export-Alias Export-Clixml Export-Console Export-Csv ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-Content Get-Credential Get-Culture Get-Date Get-EventLog Get-ExecutionPolicy Get-Help Get-History Get-Host Get-Item Get-ItemProperty Get-Location Get-Member Get-PfxCertificate Get-Process Get-PSDrive Get-PSProvider Get-PSSnapin Get-Service Get-TraceSource Get-UICulture Get-Unique Get-Variable Get-WmiObject Group-Object Import-Alias Import-Clixml Import-Csv Invoke-Expression Invoke-History Invoke-Item Join-Path Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Item New-ItemProperty New-Object New-PSDrive New-Service New-TimeSpan New-Variable Out-Default Out-File Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Remove-Item Remove-ItemProperty Remove-PSDrive Remove-PSSnapin Remove-Variable Rename-Item Rename-ItemProperty Resolve-Path Restart-Service Resume-Service Select-Object Select-String Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-Location Set-PSDebug Set-Service Set-TraceSource Set-Variable Sort-Object Split-Path Start-Service Start-Sleep Start-Transcript Stop-Process Stop-Service Stop-Transcript Suspend-Service Tee-Object Test-Path Trace-Command Update-FormatData Update-TypeData Where-Object Write-Debug Write-Error Write-Host Write-Output Write-Progress Write-Verbose Write-Warning",
        nomarkup: "-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace"
      },
      contains: [e.HASH_COMMENT_MODE, e.NUMBER_MODE, i, a, r, n]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: {
        keyword: "BufferedReader PVector PFont PImage PGraphics HashMap boolean byte char color double float int long String Array FloatDict FloatList IntDict IntList JSONArray JSONObject Object StringDict StringList Table TableRow XML false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
        literal: "P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI",
        title: "setup draw",
        built_in: "displayHeight displayWidth mouseY mouseX mousePressed pmouseX pmouseY key keyCode pixels focused frameCount frameRate height width size createGraphics beginDraw createShape loadShape PShape arc ellipse line point quad rect triangle bezier bezierDetail bezierPoint bezierTangent curve curveDetail curvePoint curveTangent curveTightness shape shapeMode beginContour beginShape bezierVertex curveVertex endContour endShape quadraticVertex vertex ellipseMode noSmooth rectMode smooth strokeCap strokeJoin strokeWeight mouseClicked mouseDragged mouseMoved mousePressed mouseReleased mouseWheel keyPressed keyPressedkeyReleased keyTyped print println save saveFrame day hour millis minute month second year background clear colorMode fill noFill noStroke stroke alpha blue brightness color green hue lerpColor red saturation modelX modelY modelZ screenX screenY screenZ ambient emissive shininess specular add createImage beginCamera camera endCamera frustum ortho perspective printCamera printProjection cursor frameRate noCursor exit loop noLoop popStyle pushStyle redraw binary boolean byte char float hex int str unbinary unhex join match matchAll nf nfc nfp nfs split splitTokens trim append arrayCopy concat expand reverse shorten sort splice subset box sphere sphereDetail createInput createReader loadBytes loadJSONArray loadJSONObject loadStrings loadTable loadXML open parseXML saveTable selectFolder selectInput beginRaw beginRecord createOutput createWriter endRaw endRecord PrintWritersaveBytes saveJSONArray saveJSONObject saveStream saveStrings saveXML selectOutput popMatrix printMatrix pushMatrix resetMatrix rotate rotateX rotateY rotateZ scale shearX shearY translate ambientLight directionalLight lightFalloff lights lightSpecular noLights normal pointLight spotLight image imageMode loadImage noTint requestImage tint texture textureMode textureWrap blend copy filter get loadPixels set updatePixels blendMode loadShader PShaderresetShader shader createFont loadFont text textFont textAlign textLeading textMode textSize textWidth textAscent textDescent abs ceil constrain dist exp floor lerp log mag map max min norm pow round sq sqrt acos asin atan atan2 cos degrees radians sin tan noise noiseDetail noiseSeed random randomGaussian randomSeed"
      },
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      contains: [e.C_NUMBER_MODE, {
        begin: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
        end: ":",
        excludeEnd: !0
      }, {
        begin: "(ncalls|tottime|cumtime)",
        end: "$",
        keywords: "ncalls tottime|10 cumtime|10 filename",
        relevance: 10
      }, {
        begin: "function calls",
        end: "$",
        contains: [e.C_NUMBER_MODE],
        relevance: 10
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
        className: "string",
        begin: "\\(",
        end: "\\)$",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { begin: /[a-z][A-Za-z0-9_]*/, relevance: 0 }, n = {
      className: "symbol",
      variants: [{ begin: /[A-Z][a-zA-Z0-9_]*/ }, { begin: /_[A-Za-z0-9_]*/ }],
      relevance: 0
    }, r = { begin: /\(/, end: /\)/, relevance: 0 }, i = { begin: /\[/, end: /\]/ }, a = {
      className: "comment",
      begin: /%/,
      end: /$/,
      contains: [e.PHRASAL_WORDS_MODE]
    }, o = { className: "string", begin: /`/, end: /`/, contains: [e.BACKSLASH_ESCAPE] }, s = {
      className: "string",
      begin: /0\'(\\\'|.)/
    }, l = {
      className: "string",
      begin: /0\'\\s/
    }, c = { begin: /:-/ }, d = [t, n, r, c, i, a, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, o, s, l, e.C_NUMBER_MODE];
    return r.contains = d, i.contains = d, { contains: d.concat([{ begin: /\.$/ }]) }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: {
        keyword: "package import option optional required repeated group",
        built_in: "double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes",
        literal: "true false"
      },
      contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.C_LINE_COMMENT_MODE, {
        className: "class",
        beginKeywords: "message enum service",
        end: /\{/,
        illegal: /\n/,
        contains: [e.inherit(e.TITLE_MODE, { starts: { endsWithParent: !0, excludeEnd: !0 } })]
      }, {
        className: "function",
        beginKeywords: "rpc",
        end: /;/,
        excludeEnd: !0,
        keywords: "rpc returns"
      }, { begin: /^\s*[A-Z_]+/, end: /\s*=/, excludeEnd: !0 }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "and case default else elsif false if in import enherits node or true undef unless main settings $string ",
      literal: "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
      built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
    }, n = e.COMMENT("#", "$"), r = "([A-Za-z_]|::)(\\w|::)*", i = e.inherit(e.TITLE_MODE, { begin: r }), a = {
      className: "variable",
      begin: "\\$" + r
    }, o = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE, a],
      variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }]
    };
    return {
      aliases: ["pp"],
      contains: [n, a, o, {
        beginKeywords: "class",
        end: "\\{|;",
        illegal: /=/,
        contains: [i, n]
      }, {
        beginKeywords: "define",
        end: /\{/,
        contains: [{ className: "section", begin: e.IDENT_RE, endsParent: !0 }]
      }, {
        begin: e.IDENT_RE + "\\s+\\{",
        returnBegin: !0,
        end: /\S/,
        contains: [{ className: "keyword", begin: e.IDENT_RE }, {
          begin: /\{/,
          end: /\}/,
          keywords: t,
          relevance: 0,
          contains: [o, n, {
            begin: "[a-zA-Z_]+\\s*=>",
            returnBegin: !0,
            end: "=>",
            contains: [{ className: "attr", begin: e.IDENT_RE }]
          }, {
            className: "number",
            begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance: 0
          }, a]
        }],
        relevance: 0
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "meta", begin: /^(>>>|\.\.\.) / }, n = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [{ begin: /(u|b)?r?'''/, end: /'''/, contains: [t], relevance: 10 }, {
        begin: /(u|b)?r?"""/,
        end: /"""/,
        contains: [t],
        relevance: 10
      }, { begin: /(u|r|ur)'/, end: /'/, relevance: 10 }, {
        begin: /(u|r|ur)"/,
        end: /"/,
        relevance: 10
      }, { begin: /(b|br)'/, end: /'/ }, { begin: /(b|br)"/, end: /"/ }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
    }, r = {
      className: "number",
      relevance: 0,
      variants: [{ begin: e.BINARY_NUMBER_RE + "[lLjJ]?" }, { begin: "\\b(0o[0-7]+)[lLjJ]?" }, { begin: e.C_NUMBER_RE + "[lLjJ]?" }]
    }, i = { className: "params", begin: /\(/, end: /\)/, contains: ["self", t, r, n] };
    return {
      aliases: ["py", "gyp"],
      keywords: {
        keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
        built_in: "Ellipsis NotImplemented"
      },
      illegal: /(<\/|->|\?)/,
      contains: [t, r, n, e.HASH_COMMENT_MODE, {
        variants: [{
          className: "function",
          beginKeywords: "def",
          relevance: 10
        }, { className: "class", beginKeywords: "class" }],
        end: /:/,
        illegal: /[${=;\n,]/,
        contains: [e.UNDERSCORE_TITLE_MODE, i, { begin: /->/, endsWithParent: !0, keywords: "None" }]
      }, { className: "meta", begin: /^[\t ]*@/, end: /$/ }, { begin: /\b(print|exec)\(/ }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "do while select delete by update from",
      literal: "0b 1b",
      built_in: "neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum",
      type: "`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid"
    };
    return {
      aliases: ["k", "kdb"],
      keywords: t,
      lexemes: /(`?)[A-Za-z0-9_]+\b/,
      contains: [e.C_LINE_COMMENT_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
    return {
      contains: [e.HASH_COMMENT_MODE, {
        begin: t,
        lexemes: t,
        keywords: {
          keyword: "function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",
          literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
        },
        relevance: 0
      }, { className: "number", begin: "0[xX][0-9a-fA-F]+[Li]?\\b", relevance: 0 }, {
        className: "number",
        begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
        relevance: 0
      }, { className: "number", begin: "\\d+\\.(?!\\d)(?:i\\b)?", relevance: 0 }, {
        className: "number",
        begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
        relevance: 0
      }, { className: "number", begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b", relevance: 0 }, {
        begin: "`",
        end: "`",
        relevance: 0
      }, {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [{ begin: '"', end: '"' }, { begin: "'", end: "'" }]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: "ArchiveRecord AreaLightSource Atmosphere Attribute AttributeBegin AttributeEnd Basis Begin Blobby Bound Clipping ClippingPlane Color ColorSamples ConcatTransform Cone CoordinateSystem CoordSysTransform CropWindow Curves Cylinder DepthOfField Detail DetailRange Disk Displacement Display End ErrorHandler Exposure Exterior Format FrameAspectRatio FrameBegin FrameEnd GeneralPolygon GeometricApproximation Geometry Hider Hyperboloid Identity Illuminate Imager Interior LightSource MakeCubeFaceEnvironment MakeLatLongEnvironment MakeShadow MakeTexture Matte MotionBegin MotionEnd NuPatch ObjectBegin ObjectEnd ObjectInstance Opacity Option Orientation Paraboloid Patch PatchMesh Perspective PixelFilter PixelSamples PixelVariance Points PointsGeneralPolygons PointsPolygons Polygon Procedural Projection Quantize ReadArchive RelativeDetail ReverseOrientation Rotate Scale ScreenWindow ShadingInterpolation ShadingRate Shutter Sides Skew SolidBegin SolidEnd Sphere SubdivisionMesh Surface TextureCoordinates Torus Transform TransformBegin TransformEnd TransformPoints Translate TrimCurve WorldBegin WorldEnd",
      illegal: "</",
      contains: [e.HASH_COMMENT_MODE, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-zA-Z-_][^\\n{]+\\{", n = {
      className: "attribute",
      begin: /[a-zA-Z-_]+/,
      end: /\s*:/,
      excludeEnd: !0,
      starts: {
        end: ";",
        relevance: 0,
        contains: [{ className: "variable", begin: /\.[a-zA-Z-_]+/ }, { className: "keyword", begin: /\(optional\)/ }]
      }
    };
    return {
      aliases: ["graph", "instances"],
      case_insensitive: !0,
      keywords: "import",
      contains: [{
        begin: "^facet " + t,
        end: "}",
        keywords: "facet",
        contains: [n, e.HASH_COMMENT_MODE]
      }, {
        begin: "^\\s*instance of " + t,
        end: "}",
        keywords: "name count channels instance-data instance-state instance of",
        illegal: /\S/,
        contains: ["self", n, e.HASH_COMMENT_MODE]
      }, { begin: "^" + t, end: "}", contains: [n, e.HASH_COMMENT_MODE] }, e.HASH_COMMENT_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: {
        keyword: "float color point normal vector matrix while for if do return else break extern continue",
        built_in: "abs acos ambient area asin atan atmosphere attribute calculatenormal ceil cellnoise clamp comp concat cos degrees depth Deriv diffuse distance Du Dv environment exp faceforward filterstep floor format fresnel incident length lightsource log match max min mod noise normalize ntransform opposite option phong pnoise pow printf ptlined radians random reflect refract renderinfo round setcomp setxcomp setycomp setzcomp shadow sign sin smoothstep specular specularbrdf spline sqrt step tan texture textureinfo trace transform vtransform xcomp ycomp zcomp"
      },
      illegal: "</",
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$"
      }, {
        className: "class",
        beginKeywords: "surface displacement light volume imager",
        end: "\\("
      }, { beginKeywords: "illuminate illuminance gather", end: "\\(" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", n = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor", r = {
      className: "doctag",
      begin: "@[A-Za-z]+"
    }, i = {
      begin: "#<",
      end: ">"
    }, a = [e.COMMENT("#", "$", { contains: [r] }), e.COMMENT("^\\=begin", "^\\=end", {
      contains: [r],
      relevance: 10
    }), e.COMMENT("^__END__", "\\n$")], o = { className: "subst", begin: "#\\{", end: "}", keywords: n }, s = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE, o],
      variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /`/, end: /`/ }, {
        begin: "%[qQwWx]?\\(",
        end: "\\)"
      }, { begin: "%[qQwWx]?\\[", end: "\\]" }, { begin: "%[qQwWx]?{", end: "}" }, { begin: "%[qQwWx]?<", end: ">" }, {
        begin: "%[qQwWx]?/", end: "/"
      }, { begin: "%[qQwWx]?%", end: "%" }, { begin: "%[qQwWx]?-", end: "-" }, {
        begin: "%[qQwWx]?\\|",
        end: "\\|"
      }, { begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/ }]
    }, l = {
      className: "params",
      begin: "\\(",
      end: "\\)",
      endsParent: !0,
      keywords: n
    }, c = [s, i, {
      className: "class",
      beginKeywords: "class module",
      end: "$|;",
      illegal: /=/,
      contains: [e.inherit(e.TITLE_MODE, { begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" }), {
        begin: "<\\s*",
        contains: [{ begin: "(" + e.IDENT_RE + "::)?" + e.IDENT_RE }]
      }].concat(a)
    }, {
      className: "function",
      beginKeywords: "def",
      end: "$|;",
      contains: [e.inherit(e.TITLE_MODE, { begin: t }), l].concat(a)
    }, { className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "(\\!|\\?)?:", relevance: 0 }, {
      className: "symbol",
      begin: ":",
      contains: [s, { begin: t }],
      relevance: 0
    }, {
      className: "number",
      begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      relevance: 0
    }, { begin: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" }, {
      begin: "(" + e.RE_STARTERS_RE + ")\\s*",
      contains: [i, {
        className: "regexp",
        contains: [e.BACKSLASH_ESCAPE, o],
        illegal: /\n/,
        variants: [{ begin: "/", end: "/[a-z]*" }, { begin: "%r{", end: "}[a-z]*" }, {
          begin: "%r\\(",
          end: "\\)[a-z]*"
        }, { begin: "%r!", end: "![a-z]*" }, { begin: "%r\\[", end: "\\][a-z]*" }]
      }].concat(a),
      relevance: 0
    }].concat(a);
    o.contains = c, l.contains = c;
    var d = "[>?]>", u = "[\\w#]+\\(\\w+\\):\\d+:\\d+>", m = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>", p = [{
      begin: /^\s*=>/,
      starts: { end: "$", contains: c }
    }, { className: "meta", begin: "^(" + d + "|" + u + "|" + m + ")", starts: { end: "$", contains: c } }];
    return {
      aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
      keywords: n,
      illegal: /\/\*/,
      contains: a.concat(p).concat(c)
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: {
        keyword: "BILL_PERIOD BILL_START BILL_STOP RS_EFFECTIVE_START RS_EFFECTIVE_STOP RS_JURIS_CODE RS_OPCO_CODE INTDADDATTRIBUTE|5 INTDADDVMSG|5 INTDBLOCKOP|5 INTDBLOCKOPNA|5 INTDCLOSE|5 INTDCOUNT|5 INTDCOUNTSTATUSCODE|5 INTDCREATEMASK|5 INTDCREATEDAYMASK|5 INTDCREATEFACTORMASK|5 INTDCREATEHANDLE|5 INTDCREATEOVERRIDEDAYMASK|5 INTDCREATEOVERRIDEMASK|5 INTDCREATESTATUSCODEMASK|5 INTDCREATETOUPERIOD|5 INTDDELETE|5 INTDDIPTEST|5 INTDEXPORT|5 INTDGETERRORCODE|5 INTDGETERRORMESSAGE|5 INTDISEQUAL|5 INTDJOIN|5 INTDLOAD|5 INTDLOADACTUALCUT|5 INTDLOADDATES|5 INTDLOADHIST|5 INTDLOADLIST|5 INTDLOADLISTDATES|5 INTDLOADLISTENERGY|5 INTDLOADLISTHIST|5 INTDLOADRELATEDCHANNEL|5 INTDLOADSP|5 INTDLOADSTAGING|5 INTDLOADUOM|5 INTDLOADUOMDATES|5 INTDLOADUOMHIST|5 INTDLOADVERSION|5 INTDOPEN|5 INTDREADFIRST|5 INTDREADNEXT|5 INTDRECCOUNT|5 INTDRELEASE|5 INTDREPLACE|5 INTDROLLAVG|5 INTDROLLPEAK|5 INTDSCALAROP|5 INTDSCALE|5 INTDSETATTRIBUTE|5 INTDSETDSTPARTICIPANT|5 INTDSETSTRING|5 INTDSETVALUE|5 INTDSETVALUESTATUS|5 INTDSHIFTSTARTTIME|5 INTDSMOOTH|5 INTDSORT|5 INTDSPIKETEST|5 INTDSUBSET|5 INTDTOU|5 INTDTOURELEASE|5 INTDTOUVALUE|5 INTDUPDATESTATS|5 INTDVALUE|5 STDEV INTDDELETEEX|5 INTDLOADEXACTUAL|5 INTDLOADEXCUT|5 INTDLOADEXDATES|5 INTDLOADEX|5 INTDLOADEXRELATEDCHANNEL|5 INTDSAVEEX|5 MVLOAD|5 MVLOADACCT|5 MVLOADACCTDATES|5 MVLOADACCTHIST|5 MVLOADDATES|5 MVLOADHIST|5 MVLOADLIST|5 MVLOADLISTDATES|5 MVLOADLISTHIST|5 IF FOR NEXT DONE SELECT END CALL ABORT CLEAR CHANNEL FACTOR LIST NUMBER OVERRIDE SET WEEK DISTRIBUTIONNODE ELSE WHEN THEN OTHERWISE IENUM CSV INCLUDE LEAVE RIDER SAVE DELETE NOVALUE SECTION WARN SAVE_UPDATE DETERMINANT LABEL REPORT REVENUE EACH IN FROM TOTAL CHARGE BLOCK AND OR CSV_FILE RATE_CODE AUXILIARY_DEMAND UIDACCOUNT RS BILL_PERIOD_SELECT HOURS_PER_MONTH INTD_ERROR_STOP SEASON_SCHEDULE_NAME ACCOUNTFACTOR ARRAYUPPERBOUND CALLSTOREDPROC GETADOCONNECTION GETCONNECT GETDATASOURCE GETQUALIFIER GETUSERID HASVALUE LISTCOUNT LISTOP LISTUPDATE LISTVALUE PRORATEFACTOR RSPRORATE SETBINPATH SETDBMONITOR WQ_OPEN BILLINGHOURS DATE DATEFROMFLOAT DATETIMEFROMSTRING DATETIMETOSTRING DATETOFLOAT DAY DAYDIFF DAYNAME DBDATETIME HOUR MINUTE MONTH MONTHDIFF MONTHHOURS MONTHNAME ROUNDDATE SAMEWEEKDAYLASTYEAR SECOND WEEKDAY WEEKDIFF YEAR YEARDAY YEARSTR COMPSUM HISTCOUNT HISTMAX HISTMIN HISTMINNZ HISTVALUE MAXNRANGE MAXRANGE MINRANGE COMPIKVA COMPKVA COMPKVARFROMKQKW COMPLF IDATTR FLAG LF2KW LF2KWH MAXKW POWERFACTOR READING2USAGE AVGSEASON MAXSEASON MONTHLYMERGE SEASONVALUE SUMSEASON ACCTREADDATES ACCTTABLELOAD CONFIGADD CONFIGGET CREATEOBJECT CREATEREPORT EMAILCLIENT EXPBLKMDMUSAGE EXPMDMUSAGE EXPORT_USAGE FACTORINEFFECT GETUSERSPECIFIEDSTOP INEFFECT ISHOLIDAY RUNRATE SAVE_PROFILE SETREPORTTITLE USEREXIT WATFORRUNRATE TO TABLE ACOS ASIN ATAN ATAN2 BITAND CEIL COS COSECANT COSH COTANGENT DIVQUOT DIVREM EXP FABS FLOOR FMOD FREPM FREXPN LOG LOG10 MAX MAXN MIN MINNZ MODF POW ROUND ROUND2VALUE ROUNDINT SECANT SIN SINH SQROOT TAN TANH FLOAT2STRING FLOAT2STRINGNC INSTR LEFT LEN LTRIM MID RIGHT RTRIM STRING STRINGNC TOLOWER TOUPPER TRIM NUMDAYS READ_DATE STAGING",
        built_in: "IDENTIFIER OPTIONS XML_ELEMENT XML_OP XML_ELEMENT_OF DOMDOCCREATE DOMDOCLOADFILE DOMDOCLOADXML DOMDOCSAVEFILE DOMDOCGETROOT DOMDOCADDPI DOMNODEGETNAME DOMNODEGETTYPE DOMNODEGETVALUE DOMNODEGETCHILDCT DOMNODEGETFIRSTCHILD DOMNODEGETSIBLING DOMNODECREATECHILDELEMENT DOMNODESETATTRIBUTE DOMNODEGETCHILDELEMENTCT DOMNODEGETFIRSTCHILDELEMENT DOMNODEGETSIBLINGELEMENT DOMNODEGETATTRIBUTECT DOMNODEGETATTRIBUTEI DOMNODEGETATTRIBUTEBYNAME DOMNODEGETBYNAME"
      },
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
        className: "literal",
        variants: [{ begin: "#\\s+[a-zA-Z\\ \\.]*", relevance: 0 }, { begin: "#[a-zA-Z\\ \\.]+" }]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "([uif](8|16|32|64|size))?", n = e.inherit(e.C_BLOCK_COMMENT_MODE);
    n.contains.push("self");
    var r = "Copy Send Sized Sync Drop Fn FnMut FnOnce drop Box ToOwned Clone PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator Option Result SliceConcatExt String ToString Vec assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln!";
    return {
      aliases: ["rs"],
      keywords: {
        keyword: "alignof as be box break const continue crate do else enum extern false fn for if impl in let loop match mod mut offsetof once priv proc pub pure ref return self Self sizeof static struct super trait true type typeof unsafe unsized use virtual while where yield int i8 i16 i32 i64 uint u8 u32 u64 float f32 f64 str char bool",
        literal: "true false Some None Ok Err",
        built_in: r
      },
      lexemes: e.IDENT_RE + "!?",
      illegal: "</",
      contains: [e.C_LINE_COMMENT_MODE, n, e.inherit(e.QUOTE_STRING_MODE, {
        begin: /b?"/,
        illegal: null
      }), {
        className: "string",
        variants: [{ begin: /r(#*)".*?"\1(?!#)/ }, { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }]
      }, { className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ }, {
        className: "number",
        variants: [{ begin: "\\b0b([01_]+)" + t }, { begin: "\\b0o([0-7_]+)" + t }, { begin: "\\b0x([A-Fa-f0-9_]+)" + t }, { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t }],
        relevance: 0
      }, {
        className: "function",
        beginKeywords: "fn",
        end: "(\\(|<)",
        excludeEnd: !0,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, {
        className: "meta",
        begin: "#\\!?\\[",
        end: "\\]",
        contains: [{ className: "meta-string", begin: /"/, end: /"/ }]
      }, {
        className: "class",
        beginKeywords: "type",
        end: "(=|<)",
        contains: [e.UNDERSCORE_TITLE_MODE],
        illegal: "\\S"
      }, {
        className: "class",
        beginKeywords: "trait enum struct",
        end: "{",
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { endsParent: !0 })],
        illegal: "[\\w\\d]"
      }, { begin: e.IDENT_RE + "::", keywords: { built_in: r } }, { begin: "->" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "meta", begin: "@[A-Za-z]+" }, n = {
      className: "subst",
      variants: [{ begin: "\\$[A-Za-z0-9_]+" }, { begin: "\\${", end: "}" }]
    }, r = {
      className: "string",
      variants: [{ begin: '"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE] }, {
        begin: '"""',
        end: '"""',
        relevance: 10
      }, { begin: '[a-z]+"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE, n] }, {
        className: "string",
        begin: '[a-z]+"""',
        end: '"""',
        contains: [n],
        relevance: 10
      }]
    }, i = { className: "symbol", begin: "'\\w[\\w\\d_]*(?!')" }, a = {
      className: "type",
      begin: "\\b[A-Z][A-Za-z0-9_]*",
      relevance: 0
    }, o = {
      className: "title",
      begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
      relevance: 0
    }, s = {
      className: "class",
      beginKeywords: "class object trait type",
      end: /[:={\[\n;]/,
      excludeEnd: !0,
      contains: [{ beginKeywords: "extends with", relevance: 10 }, {
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        contains: [a]
      }, {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0,
        contains: [a]
      }, o]
    }, l = { className: "function", beginKeywords: "def", end: /[:={\[(\n;]/, excludeEnd: !0, contains: [o] };
    return {
      keywords: {
        literal: "true false null",
        keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
      }, contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, i, a, l, s, e.C_NUMBER_MODE, t]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[^\\(\\)\\[\\]\\{\\}\",'`;#|\\\\\\s]+", n = "(\\-|\\+)?\\d+([./]\\d+)?", r = n + "[+\\-]" + n + "i", i = { "builtin-name": "case-lambda call/cc class define-class exit-handler field import inherit init-field interface let*-values let-values let/ec mixin opt-lambda override protect provide public rename require require-for-syntax syntax syntax-case syntax-error unit/sig unless when with-syntax and begin call-with-current-continuation call-with-input-file call-with-output-file case cond define define-syntax delay do dynamic-wind else for-each if lambda let let* let-syntax letrec letrec-syntax map or syntax-rules ' * + , ,@ - ... / ; < <= = => > >= ` abs acos angle append apply asin assoc assq assv atan boolean? caar cadr call-with-input-file call-with-output-file call-with-values car cdddar cddddr cdr ceiling char->integer char-alphabetic? char-ci<=? char-ci<? char-ci=? char-ci>=? char-ci>? char-downcase char-lower-case? char-numeric? char-ready? char-upcase char-upper-case? char-whitespace? char<=? char<? char=? char>=? char>? char? close-input-port close-output-port complex? cons cos current-input-port current-output-port denominator display eof-object? eq? equal? eqv? eval even? exact->inexact exact? exp expt floor force gcd imag-part inexact->exact inexact? input-port? integer->char integer? interaction-environment lcm length list list->string list->vector list-ref list-tail list? load log magnitude make-polar make-rectangular make-string make-vector max member memq memv min modulo negative? newline not null-environment null? number->string number? numerator odd? open-input-file open-output-file output-port? pair? peek-char port? positive? procedure? quasiquote quote quotient rational? rationalize read read-char real-part real? remainder reverse round scheme-report-environment set! set-car! set-cdr! sin sqrt string string->list string->number string->symbol string-append string-ci<=? string-ci<? string-ci=? string-ci>=? string-ci>? string-copy string-fill! string-length string-ref string-set! string<=? string<? string=? string>=? string>? string? substring symbol->string symbol? tan transcript-off transcript-on truncate values vector vector->list vector-fill! vector-length vector-ref vector-set! with-input-from-file with-output-to-file write write-char zero?" }, a = {
      className: "meta",
      begin: "^#!",
      end: "$"
    }, o = { className: "literal", begin: "(#t|#f|#\\\\" + t + "|#\\\\.)" }, s = {
      className: "number",
      variants: [{ begin: n, relevance: 0 }, {
        begin: r,
        relevance: 0
      }, { begin: "#b[0-1]+(/[0-1]+)?" }, { begin: "#o[0-7]+(/[0-7]+)?" }, { begin: "#x[0-9a-f]+(/[0-9a-f]+)?" }]
    }, l = e.QUOTE_STRING_MODE, c = [e.COMMENT(";", "$", { relevance: 0 }), e.COMMENT("#\\|", "\\|#")], d = {
      begin: t,
      relevance: 0
    }, u = { className: "symbol", begin: "'" + t }, m = {
      endsWithParent: !0,
      relevance: 0
    }, p = {
      variants: [{ begin: "\\(", end: "\\)" }, { begin: "\\[", end: "\\]" }],
      contains: [{ className: "name", begin: t, lexemes: t, keywords: i }, m]
    };
    return m.contains = [o, s, l, d, u, p].concat(c), { illegal: /\S/, contains: [a, s, l, u, p].concat(c) }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = [e.C_NUMBER_MODE, {
      className: "string",
      begin: "'|\"",
      end: "'|\"",
      contains: [e.BACKSLASH_ESCAPE, { begin: "''" }]
    }];
    return {
      aliases: ["sci"],
      lexemes: /%?\w+/,
      keywords: {
        keyword: "abort break case clear catch continue do elseif else endfunction end for function global if pause return resume select try then while",
        literal: "%f %F %t %T %pi %eps %inf %nan %e %i %z %s",
        built_in: "abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan type typename warning zeros matrix"
      },
      illegal: '("|#|/\\*|\\s+/\\w+)',
      contains: [{
        className: "function",
        beginKeywords: "function",
        end: "$",
        contains: [e.UNDERSCORE_TITLE_MODE, { className: "params", begin: "\\(", end: "\\)" }]
      }, { begin: "[a-zA-Z_][a-zA-Z_0-9]*('+[\\.']*|[\\.']+)", end: "", relevance: 0 }, {
        begin: "\\[",
        end: "\\]'*[\\.']*",
        relevance: 0,
        contains: t
      }, e.COMMENT("//", "$")].concat(t)
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*", n = {
      className: "variable",
      begin: "(\\$" + t + ")\\b"
    }, r = { className: "number", begin: "#[0-9A-Fa-f]+" };
    ({
      className: "attribute",
      begin: "[A-Z\\_\\.\\-]+",
      end: ":",
      excludeEnd: !0,
      illegal: "[^\\s]",
      starts: {
        endsWithParent: !0,
        excludeEnd: !0,
        contains: [r, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE, {
          className: "meta",
          begin: "!important"
        }]
      }
    });
    return {
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "selector-id",
        begin: "\\#[A-Za-z0-9_-]+",
        relevance: 0
      }, { className: "selector-class", begin: "\\.[A-Za-z0-9_-]+", relevance: 0 }, {
        className: "selector-attr",
        begin: "\\[",
        end: "\\]",
        illegal: "$"
      }, {
        className: "selector-tag",
        begin: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
        relevance: 0
      }, { begin: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)" }, { begin: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)" }, n, {
        className: "attribute",
        begin: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
        illegal: "[^\\s]"
      }, { begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b" }, {
        begin: ":",
        end: ";",
        contains: [n, r, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
          className: "meta",
          begin: "!important"
        }]
      }, {
        begin: "@",
        end: "[{;]",
        keywords: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
        contains: [n, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, r, e.CSS_NUMBER_MODE, {
          begin: "\\s[A-Za-z0-9_.-]+",
          relevance: 0
        }]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = ["add", "and", "cmp", "cmpg", "cmpl", "const", "div", "double", "float", "goto", "if", "int", "long", "move", "mul", "neg", "new", "nop", "not", "or", "rem", "return", "shl", "shr", "sput", "sub", "throw", "ushr", "xor"], n = ["aget", "aput", "array", "check", "execute", "fill", "filled", "goto/16", "goto/32", "iget", "instance", "invoke", "iput", "monitor", "packed", "sget", "sparse"], r = ["transient", "constructor", "abstract", "final", "synthetic", "public", "private", "protected", "static", "bridge", "system"];
    return {
      aliases: ["smali"],
      contains: [{
        className: "string",
        begin: '"',
        end: '"',
        relevance: 0
      }, e.COMMENT("#", "$", { relevance: 0 }), {
        className: "keyword",
        variants: [{ begin: "\\s*\\.end\\s[a-zA-Z0-9]*" }, {
          begin: "^[ ]*\\.[a-zA-Z]*",
          relevance: 0
        }, { begin: "\\s:[a-zA-Z_0-9]*", relevance: 0 }, { begin: "\\s(" + r.join("|") + ")" }]
      }, {
        className: "built_in",
        variants: [{ begin: "\\s(" + t.join("|") + ")\\s" }, {
          begin: "\\s(" + t.join("|") + ")((\\-|/)[a-zA-Z0-9]+)+\\s",
          relevance: 10
        }, { begin: "\\s(" + n.join("|") + ")((\\-|/)[a-zA-Z0-9]+)*\\s", relevance: 10 }]
      }, { className: "class", begin: "L[^(;:\n]*;", relevance: 0 }, { begin: "[vp][0-9]+" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[a-z][a-zA-Z0-9_]*", n = { className: "string", begin: "\\$.{1}" }, r = {
      className: "symbol",
      begin: "#" + e.UNDERSCORE_IDENT_RE
    };
    return {
      aliases: ["st"],
      keywords: "self super nil true false thisContext",
      contains: [e.COMMENT('"', '"'), e.APOS_STRING_MODE, {
        className: "type",
        begin: "\\b[A-Z][A-Za-z0-9_]*",
        relevance: 0
      }, { begin: t + ":", relevance: 0 }, e.C_NUMBER_MODE, r, n, {
        begin: "\\|[ ]*" + t + "([ ]+" + t + ")*[ ]*\\|",
        returnBegin: !0,
        end: /\|/,
        illegal: /\S/,
        contains: [{ begin: "(\\|[ ]*)?" + t }]
      }, { begin: "\\#\\(", end: "\\)", contains: [e.APOS_STRING_MODE, n, e.C_NUMBER_MODE, r] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["ml"],
      keywords: {
        keyword: "abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while",
        built_in: "array bool char exn int list option order real ref string substring vector unit word",
        literal: "true false NONE SOME LESS EQUAL GREATER nil"
      },
      illegal: /\/\/|>>/,
      lexemes: "[a-z_]\\w*!?",
      contains: [{
        className: "literal",
        begin: "\\[(\\|\\|)?\\]|\\(\\)"
      }, e.COMMENT("\\(\\*", "\\*\\)", { contains: ["self"] }), {
        className: "symbol",
        begin: "'[A-Za-z_](?!')[\\w']*"
      }, { className: "type", begin: "`[A-Z][\\w']*" }, {
        className: "type",
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      }, { begin: "[a-z_]\\w*'[\\w']*" }, e.inherit(e.APOS_STRING_MODE, {
        className: "string",
        relevance: 0
      }), e.inherit(e.QUOTE_STRING_MODE, { illegal: null }), {
        className: "number",
        begin: "\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)",
        relevance: 0
      }, { begin: /[-=]>/ }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = ["!", "-", "+", "!=", "%", "&&", "*", "/", "=", "==", ">", ">=", "<", "<=", "or", "plus", "^", ":", ">>", "abs", "accTime", "acos", "action", "actionKeys", "actionKeysImages", "actionKeysNames", "actionKeysNamesArray", "actionName", "activateAddons", "activatedAddons", "activateKey", "addAction", "addBackpack", "addBackpackCargo", "addBackpackCargoGlobal", "addBackpackGlobal", "addCamShake", "addCuratorAddons", "addCuratorCameraArea", "addCuratorEditableObjects", "addCuratorEditingArea", "addCuratorPoints", "addEditorObject", "addEventHandler", "addGoggles", "addGroupIcon", "addHandgunItem", "addHeadgear", "addItem", "addItemCargo", "addItemCargoGlobal", "addItemPool", "addItemToBackpack", "addItemToUniform", "addItemToVest", "addLiveStats", "addMagazine", "addMagazine array", "addMagazineAmmoCargo", "addMagazineCargo", "addMagazineCargoGlobal", "addMagazineGlobal", "addMagazinePool", "addMagazines", "addMagazineTurret", "addMenu", "addMenuItem", "addMissionEventHandler", "addMPEventHandler", "addMusicEventHandler", "addPrimaryWeaponItem", "addPublicVariableEventHandler", "addRating", "addResources", "addScore", "addScoreSide", "addSecondaryWeaponItem", "addSwitchableUnit", "addTeamMember", "addToRemainsCollector", "addUniform", "addVehicle", "addVest", "addWaypoint", "addWeapon", "addWeaponCargo", "addWeaponCargoGlobal", "addWeaponGlobal", "addWeaponPool", "addWeaponTurret", "agent", "agents", "AGLToASL", "aimedAtTarget", "aimPos", "airDensityRTD", "airportSide", "AISFinishHeal", "alive", "allControls", "allCurators", "allDead", "allDeadMen", "allDisplays", "allGroups", "allMapMarkers", "allMines", "allMissionObjects", "allow3DMode", "allowCrewInImmobile", "allowCuratorLogicIgnoreAreas", "allowDamage", "allowDammage", "allowFileOperations", "allowFleeing", "allowGetIn", "allPlayers", "allSites", "allTurrets", "allUnits", "allUnitsUAV", "allVariables", "ammo", "and", "animate", "animateDoor", "animationPhase", "animationState", "append", "armoryPoints", "arrayIntersect", "asin", "ASLToAGL", "ASLToATL", "assert", "assignAsCargo", "assignAsCargoIndex", "assignAsCommander", "assignAsDriver", "assignAsGunner", "assignAsTurret", "assignCurator", "assignedCargo", "assignedCommander", "assignedDriver", "assignedGunner", "assignedItems", "assignedTarget", "assignedTeam", "assignedVehicle", "assignedVehicleRole", "assignItem", "assignTeam", "assignToAirport", "atan", "atan2", "atg", "ATLToASL", "attachedObject", "attachedObjects", "attachedTo", "attachObject", "attachTo", "attackEnabled", "backpack", "backpackCargo", "backpackContainer", "backpackItems", "backpackMagazines", "backpackSpaceFor", "behaviour", "benchmark", "binocular", "blufor", "boundingBox", "boundingBoxReal", "boundingCenter", "breakOut", "breakTo", "briefingName", "buildingExit", "buildingPos", "buttonAction", "buttonSetAction", "cadetMode", "call", "callExtension", "camCommand", "camCommit", "camCommitPrepared", "camCommitted", "camConstuctionSetParams", "camCreate", "camDestroy", "cameraEffect", "cameraEffectEnableHUD", "cameraInterest", "cameraOn", "cameraView", "campaignConfigFile", "camPreload", "camPreloaded", "camPrepareBank", "camPrepareDir", "camPrepareDive", "camPrepareFocus", "camPrepareFov", "camPrepareFovRange", "camPreparePos", "camPrepareRelPos", "camPrepareTarget", "camSetBank", "camSetDir", "camSetDive", "camSetFocus", "camSetFov", "camSetFovRange", "camSetPos", "camSetRelPos", "camSetTarget", "camTarget", "camUseNVG", "canAdd", "canAddItemToBackpack", "canAddItemToUniform", "canAddItemToVest", "cancelSimpleTaskDestination", "canFire", "canMove", "canSlingLoad", "canStand", "canUnloadInCombat", "captive", "captiveNum", "case", "catch", "cbChecked", "cbSetChecked", "ceil", "cheatsEnabled", "checkAIFeature", "civilian", "className", "clearAllItemsFromBackpack", "clearBackpackCargo", "clearBackpackCargoGlobal", "clearGroupIcons", "clearItemCargo", "clearItemCargoGlobal", "clearItemPool", "clearMagazineCargo", "clearMagazineCargoGlobal", "clearMagazinePool", "clearOverlay", "clearRadio", "clearWeaponCargo", "clearWeaponCargoGlobal", "clearWeaponPool", "closeDialog", "closeDisplay", "closeOverlay", "collapseObjectTree", "combatMode", "commandArtilleryFire", "commandChat", "commander", "commandFire", "commandFollow", "commandFSM", "commandGetOut", "commandingMenu", "commandMove", "commandRadio", "commandStop", "commandTarget", "commandWatch", "comment", "commitOverlay", "compile", "compileFinal", "completedFSM", "composeText", "configClasses", "configFile", "configHierarchy", "configName", "configProperties", "configSourceMod", "configSourceModList", "connectTerminalToUAV", "controlNull", "controlsGroupCtrl", "copyFromClipboard", "copyToClipboard", "copyWaypoints", "cos", "count", "countEnemy", "countFriendly", "countSide", "countType", "countUnknown", "createAgent", "createCenter", "createDialog", "createDiaryLink", "createDiaryRecord", "createDiarySubject", "createDisplay", "createGearDialog", "createGroup", "createGuardedPoint", "createLocation", "createMarker", "createMarkerLocal", "createMenu", "createMine", "createMissionDisplay", "createSimpleTask", "createSite", "createSoundSource", "createTask", "createTeam", "createTrigger", "createUnit", "createUnit array", "createVehicle", "createVehicle array", "createVehicleCrew", "createVehicleLocal", "crew", "ctrlActivate", "ctrlAddEventHandler", "ctrlAutoScrollDelay", "ctrlAutoScrollRewind", "ctrlAutoScrollSpeed", "ctrlChecked", "ctrlClassName", "ctrlCommit", "ctrlCommitted", "ctrlCreate", "ctrlDelete", "ctrlEnable", "ctrlEnabled", "ctrlFade", "ctrlHTMLLoaded", "ctrlIDC", "ctrlIDD", "ctrlMapAnimAdd", "ctrlMapAnimClear", "ctrlMapAnimCommit", "ctrlMapAnimDone", "ctrlMapCursor", "ctrlMapMouseOver", "ctrlMapScale", "ctrlMapScreenToWorld", "ctrlMapWorldToScreen", "ctrlModel", "ctrlModelDirAndUp", "ctrlModelScale", "ctrlParent", "ctrlPosition", "ctrlRemoveAllEventHandlers", "ctrlRemoveEventHandler", "ctrlScale", "ctrlSetActiveColor", "ctrlSetAutoScrollDelay", "ctrlSetAutoScrollRewind", "ctrlSetAutoScrollSpeed", "ctrlSetBackgroundColor", "ctrlSetChecked", "ctrlSetEventHandler", "ctrlSetFade", "ctrlSetFocus", "ctrlSetFont", "ctrlSetFontH1", "ctrlSetFontH1B", "ctrlSetFontH2", "ctrlSetFontH2B", "ctrlSetFontH3", "ctrlSetFontH3B", "ctrlSetFontH4", "ctrlSetFontH4B", "ctrlSetFontH5", "ctrlSetFontH5B", "ctrlSetFontH6", "ctrlSetFontH6B", "ctrlSetFontHeight", "ctrlSetFontHeightH1", "ctrlSetFontHeightH2", "ctrlSetFontHeightH3", "ctrlSetFontHeightH4", "ctrlSetFontHeightH5", "ctrlSetFontHeightH6", "ctrlSetFontP", "ctrlSetFontPB", "ctrlSetForegroundColor", "ctrlSetModel", "ctrlSetModelDirAndUp", "ctrlSetModelScale", "ctrlSetPosition", "ctrlSetScale", "ctrlSetStructuredText", "ctrlSetText", "ctrlSetTextColor", "ctrlSetTooltip", "ctrlSetTooltipColorBox", "ctrlSetTooltipColorShade", "ctrlSetTooltipColorText", "ctrlShow", "ctrlShown", "ctrlText", "ctrlTextHeight", "ctrlType", "ctrlVisible", "curatorAddons", "curatorCamera", "curatorCameraArea", "curatorCameraAreaCeiling", "curatorCoef", "curatorEditableObjects", "curatorEditingArea", "curatorEditingAreaType", "curatorMouseOver", "curatorPoints", "curatorRegisteredObjects", "curatorSelected", "curatorWaypointCost", "currentChannel", "currentCommand", "currentMagazine", "currentMagazineDetail", "currentMagazineDetailTurret", "currentMagazineTurret", "currentMuzzle", "currentNamespace", "currentTask", "currentTasks", "currentThrowable", "currentVisionMode", "currentWaypoint", "currentWeapon", "currentWeaponMode", "currentWeaponTurret", "currentZeroing", "cursorTarget", "customChat", "customRadio", "cutFadeOut", "cutObj", "cutRsc", "cutText", "damage", "date", "dateToNumber", "daytime", "deActivateKey", "debriefingText", "debugFSM", "debugLog", "default", "deg", "deleteAt", "deleteCenter", "deleteCollection", "deleteEditorObject", "deleteGroup", "deleteIdentity", "deleteLocation", "deleteMarker", "deleteMarkerLocal", "deleteRange", "deleteResources", "deleteSite", "deleteStatus", "deleteTeam", "deleteVehicle", "deleteVehicleCrew", "deleteWaypoint", "detach", "detectedMines", "diag activeMissionFSMs", "diag activeSQFScripts", "diag activeSQSScripts", "diag captureFrame", "diag captureSlowFrame", "diag fps", "diag fpsMin", "diag frameNo", "diag log", "diag logSlowFrame", "diag tickTime", "dialog", "diarySubjectExists", "didJIP", "didJIPOwner", "difficulty", "difficultyEnabled", "difficultyEnabledRTD", "direction", "directSay", "disableAI", "disableCollisionWith", "disableConversation", "disableDebriefingStats", "disableSerialization", "disableTIEquipment", "disableUAVConnectability", "disableUserInput", "displayAddEventHandler", "displayCtrl", "displayNull", "displayRemoveAllEventHandlers", "displayRemoveEventHandler", "displaySetEventHandler", "dissolveTeam", "distance", "distance2D", "distanceSqr", "distributionRegion", "do", "doArtilleryFire", "doFire", "doFollow", "doFSM", "doGetOut", "doMove", "doorPhase", "doStop", "doTarget", "doWatch", "drawArrow", "drawEllipse", "drawIcon", "drawIcon3D", "drawLine", "drawLine3D", "drawLink", "drawLocation", "drawRectangle", "driver", "drop", "east", "echo", "editObject", "editorSetEventHandler", "effectiveCommander", "else", "emptyPositions", "enableAI", "enableAIFeature", "enableAttack", "enableCamShake", "enableCaustics", "enableCollisionWith", "enableCopilot", "enableDebriefingStats", "enableDiagLegend", "enableEndDialog", "enableEngineArtillery", "enableEnvironment", "enableFatigue", "enableGunLights", "enableIRLasers", "enableMimics", "enablePersonTurret", "enableRadio", "enableReload", "enableRopeAttach", "enableSatNormalOnDetail", "enableSaving", "enableSentences", "enableSimulation", "enableSimulationGlobal", "enableTeamSwitch", "enableUAVConnectability", "enableUAVWaypoints", "endLoadingScreen", "endMission", "engineOn", "enginesIsOnRTD", "enginesRpmRTD", "enginesTorqueRTD", "entities", "estimatedEndServerTime", "estimatedTimeLeft", "evalObjectArgument", "everyBackpack", "everyContainer", "exec", "execEditorScript", "execFSM", "execVM", "exit", "exitWith", "exp", "expectedDestination", "eyeDirection", "eyePos", "face", "faction", "fadeMusic", "fadeRadio", "fadeSound", "fadeSpeech", "failMission", "false", "fillWeaponsFromPool", "find", "findCover", "findDisplay", "findEditorObject", "findEmptyPosition", "findEmptyPositionReady", "findNearestEnemy", "finishMissionInit", "finite", "fire", "fireAtTarget", "firstBackpack", "flag", "flagOwner", "fleeing", "floor", "flyInHeight", "fog", "fogForecast", "fogParams", "for", "forceAddUniform", "forceEnd", "forceMap", "forceRespawn", "forceSpeed", "forceWalk", "forceWeaponFire", "forceWeatherChange", "forEach", "forEachMember", "forEachMemberAgent", "forEachMemberTeam", "format", "formation", "formationDirection", "formationLeader", "formationMembers", "formationPosition", "formationTask", "formatText", "formLeader", "freeLook", "from", "fromEditor", "fuel", "fullCrew", "gearSlotAmmoCount", "gearSlotData", "getAllHitPointsDamage", "getAmmoCargo", "getArray", "getArtilleryAmmo", "getArtilleryComputerSettings", "getArtilleryETA", "getAssignedCuratorLogic", "getAssignedCuratorUnit", "getBackpackCargo", "getBleedingRemaining", "getBurningValue", "getCargoIndex", "getCenterOfMass", "getClientState", "getConnectedUAV", "getDammage", "getDescription", "getDir", "getDirVisual", "getDLCs", "getEditorCamera", "getEditorMode", "getEditorObjectScope", "getElevationOffset", "getFatigue", "getFriend", "getFSMVariable", "getFuelCargo", "getGroupIcon", "getGroupIconParams", "getGroupIcons", "getHideFrom", "getHit", "getHitIndex", "getHitPointDamage", "getItemCargo", "getMagazineCargo", "getMarkerColor", "getMarkerPos", "getMarkerSize", "getMarkerType", "getMass", "getModelInfo", "getNumber", "getObjectArgument", "getObjectChildren", "getObjectDLC", "getObjectMaterials", "getObjectProxy", "getObjectTextures", "getObjectType", "getObjectViewDistance", "getOxygenRemaining", "getPersonUsedDLCs", "getPlayerChannel", "getPlayerUID", "getPos", "getPosASL", "getPosASLVisual", "getPosASLW", "getPosATL", "getPosATLVisual", "getPosVisual", "getPosWorld", "getRepairCargo", "getResolution", "getShadowDistance", "getSlingLoad", "getSpeed", "getSuppression", "getTerrainHeightASL", "getText", "getVariable", "getWeaponCargo", "getWPPos", "glanceAt", "globalChat", "globalRadio", "goggles", "goto", "group", "groupChat", "groupFromNetId", "groupIconSelectable", "groupIconsVisible", "groupId", "groupOwner", "groupRadio", "groupSelectedUnits", "groupSelectUnit", "grpNull", "gunner", "gusts", "halt", "handgunItems", "handgunMagazine", "handgunWeapon", "handsHit", "hasInterface", "hasWeapon", "hcAllGroups", "hcGroupParams", "hcLeader", "hcRemoveAllGroups", "hcRemoveGroup", "hcSelected", "hcSelectGroup", "hcSetGroup", "hcShowBar", "hcShownBar", "headgear", "hideBody", "hideObject", "hideObjectGlobal", "hint", "hintC", "hintCadet", "hintSilent", "hmd", "hostMission", "htmlLoad", "HUDMovementLevels", "humidity", "if", "image", "importAllGroups", "importance", "in", "incapacitatedState", "independent", "inflame", "inflamed", "inGameUISetEventHandler", "inheritsFrom", "initAmbientLife", "inputAction", "inRangeOfArtillery", "insertEditorObject", "intersect", "isAbleToBreathe", "isAgent", "isArray", "isAutoHoverOn", "isAutonomous", "isAutotest", "isBleeding", "isBurning", "isClass", "isCollisionLightOn", "isCopilotEnabled", "isDedicated", "isDLCAvailable", "isEngineOn", "isEqualTo", "isFlashlightOn", "isFlatEmpty", "isForcedWalk", "isFormationLeader", "isHidden", "isInRemainsCollector", "isInstructorFigureEnabled", "isIRLaserOn", "isKeyActive", "isKindOf", "isLightOn", "isLocalized", "isManualFire", "isMarkedForCollection", "isMultiplayer", "isNil", "isNull", "isNumber", "isObjectHidden", "isObjectRTD", "isOnRoad", "isPipEnabled", "isPlayer", "isRealTime", "isServer", "isShowing3DIcons", "isSteamMission", "isStreamFriendlyUIEnabled", "isText", "isTouchingGround", "isTurnedOut", "isTutHintsEnabled", "isUAVConnectable", "isUAVConnected", "isUniformAllowed", "isWalking", "isWeaponDeployed", "isWeaponRested", "itemCargo", "items", "itemsWithMagazines", "join", "joinAs", "joinAsSilent", "joinSilent", "joinString", "kbAddDatabase", "kbAddDatabaseTargets", "kbAddTopic", "kbHasTopic", "kbReact", "kbRemoveTopic", "kbTell", "kbWasSaid", "keyImage", "keyName", "knowsAbout", "land", "landAt", "landResult", "language", "laserTarget", "lbAdd", "lbClear", "lbColor", "lbCurSel", "lbData", "lbDelete", "lbIsSelected", "lbPicture", "lbSelection", "lbSetColor", "lbSetCurSel", "lbSetData", "lbSetPicture", "lbSetPictureColor", "lbSetPictureColorDisabled", "lbSetPictureColorSelected", "lbSetSelectColor", "lbSetSelectColorRight", "lbSetSelected", "lbSetTooltip", "lbSetValue", "lbSize", "lbSort", "lbSortByValue", "lbText", "lbValue", "leader", "leaderboardDeInit", "leaderboardGetRows", "leaderboardInit", "leaveVehicle", "libraryCredits", "libraryDisclaimers", "lifeState", "lightAttachObject", "lightDetachObject", "lightIsOn", "lightnings", "limitSpeed", "linearConversion", "lineBreak", "lineIntersects", "lineIntersectsObjs", "lineIntersectsSurfaces", "lineIntersectsWith", "linkItem", "list", "listObjects", "ln", "lnbAddArray", "lnbAddColumn", "lnbAddRow", "lnbClear", "lnbColor", "lnbCurSelRow", "lnbData", "lnbDeleteColumn", "lnbDeleteRow", "lnbGetColumnsPosition", "lnbPicture", "lnbSetColor", "lnbSetColumnsPos", "lnbSetCurSelRow", "lnbSetData", "lnbSetPicture", "lnbSetText", "lnbSetValue", "lnbSize", "lnbText", "lnbValue", "load", "loadAbs", "loadBackpack", "loadFile", "loadGame", "loadIdentity", "loadMagazine", "loadOverlay", "loadStatus", "loadUniform", "loadVest", "local", "localize", "locationNull", "locationPosition", "lock", "lockCameraTo", "lockCargo", "lockDriver", "locked", "lockedCargo", "lockedDriver", "lockedTurret", "lockTurret", "lockWP", "log", "logEntities", "lookAt", "lookAtPos", "magazineCargo", "magazines", "magazinesAllTurrets", "magazinesAmmo", "magazinesAmmoCargo", "magazinesAmmoFull", "magazinesDetail", "magazinesDetailBackpack", "magazinesDetailUniform", "magazinesDetailVest", "magazinesTurret", "magazineTurretAmmo", "mapAnimAdd", "mapAnimClear", "mapAnimCommit", "mapAnimDone", "mapCenterOnCamera", "mapGridPosition", "markAsFinishedOnSteam", "markerAlpha", "markerBrush", "markerColor", "markerDir", "markerPos", "markerShape", "markerSize", "markerText", "markerType", "max", "members", "min", "mineActive", "mineDetectedBy", "missionConfigFile", "missionName", "missionNamespace", "missionStart", "mod", "modelToWorld", "modelToWorldVisual", "moonIntensity", "morale", "move", "moveInAny", "moveInCargo", "moveInCommander", "moveInDriver", "moveInGunner", "moveInTurret", "moveObjectToEnd", "moveOut", "moveTime", "moveTo", "moveToCompleted", "moveToFailed", "musicVolume", "name", "name location", "nameSound", "nearEntities", "nearestBuilding", "nearestLocation", "nearestLocations", "nearestLocationWithDubbing", "nearestObject", "nearestObjects", "nearObjects", "nearObjectsReady", "nearRoads", "nearSupplies", "nearTargets", "needReload", "netId", "netObjNull", "newOverlay", "nextMenuItemIndex", "nextWeatherChange", "nil", "nMenuItems", "not", "numberToDate", "objectCurators", "objectFromNetId", "objectParent", "objNull", "objStatus", "onBriefingGroup", "onBriefingNotes", "onBriefingPlan", "onBriefingTeamSwitch", "onCommandModeChanged", "onDoubleClick", "onEachFrame", "onGroupIconClick", "onGroupIconOverEnter", "onGroupIconOverLeave", "onHCGroupSelectionChanged", "onMapSingleClick", "onPlayerConnected", "onPlayerDisconnected", "onPreloadFinished", "onPreloadStarted", "onShowNewObject", "onTeamSwitch", "openCuratorInterface", "openMap", "openYoutubeVideo", "opfor", "or", "orderGetIn", "overcast", "overcastForecast", "owner", "param", "params", "parseNumber", "parseText", "parsingNamespace", "particlesQuality", "pi", "pickWeaponPool", "pitch", "playableSlotsNumber", "playableUnits", "playAction", "playActionNow", "player", "playerRespawnTime", "playerSide", "playersNumber", "playGesture", "playMission", "playMove", "playMoveNow", "playMusic", "playScriptedMission", "playSound", "playSound3D", "position", "positionCameraToWorld", "posScreenToWorld", "posWorldToScreen", "ppEffectAdjust", "ppEffectCommit", "ppEffectCommitted", "ppEffectCreate", "ppEffectDestroy", "ppEffectEnable", "ppEffectForceInNVG", "precision", "preloadCamera", "preloadObject", "preloadSound", "preloadTitleObj", "preloadTitleRsc", "preprocessFile", "preprocessFileLineNumbers", "primaryWeapon", "primaryWeaponItems", "primaryWeaponMagazine", "priority", "private", "processDiaryLink", "productVersion", "profileName", "profileNamespace", "profileNameSteam", "progressLoadingScreen", "progressPosition", "progressSetPosition", "publicVariable", "publicVariableClient", "publicVariableServer", "pushBack", "putWeaponPool", "queryItemsPool", "queryMagazinePool", "queryWeaponPool", "rad", "radioChannelAdd", "radioChannelCreate", "radioChannelRemove", "radioChannelSetCallSign", "radioChannelSetLabel", "radioVolume", "rain", "rainbow", "random", "rank", "rankId", "rating", "rectangular", "registeredTasks", "registerTask", "reload", "reloadEnabled", "remoteControl", "remoteExec", "remoteExecCall", "removeAction", "removeAllActions", "removeAllAssignedItems", "removeAllContainers", "removeAllCuratorAddons", "removeAllCuratorCameraAreas", "removeAllCuratorEditingAreas", "removeAllEventHandlers", "removeAllHandgunItems", "removeAllItems", "removeAllItemsWithMagazines", "removeAllMissionEventHandlers", "removeAllMPEventHandlers", "removeAllMusicEventHandlers", "removeAllPrimaryWeaponItems", "removeAllWeapons", "removeBackpack", "removeBackpackGlobal", "removeCuratorAddons", "removeCuratorCameraArea", "removeCuratorEditableObjects", "removeCuratorEditingArea", "removeDrawIcon", "removeDrawLinks", "removeEventHandler", "removeFromRemainsCollector", "removeGoggles", "removeGroupIcon", "removeHandgunItem", "removeHeadgear", "removeItem", "removeItemFromBackpack", "removeItemFromUniform", "removeItemFromVest", "removeItems", "removeMagazine", "removeMagazineGlobal", "removeMagazines", "removeMagazinesTurret", "removeMagazineTurret", "removeMenuItem", "removeMissionEventHandler", "removeMPEventHandler", "removeMusicEventHandler", "removePrimaryWeaponItem", "removeSecondaryWeaponItem", "removeSimpleTask", "removeSwitchableUnit", "removeTeamMember", "removeUniform", "removeVest", "removeWeapon", "removeWeaponGlobal", "removeWeaponTurret", "requiredVersion", "resetCamShake", "resetSubgroupDirection", "resistance", "resize", "resources", "respawnVehicle", "restartEditorCamera", "reveal", "revealMine", "reverse", "reversedMouseY", "roadsConnectedTo", "roleDescription", "ropeAttachedObjects", "ropeAttachedTo", "ropeAttachEnabled", "ropeAttachTo", "ropeCreate", "ropeCut", "ropeEndPosition", "ropeLength", "ropes", "ropeUnwind", "ropeUnwound", "rotorsForcesRTD", "rotorsRpmRTD", "round", "runInitScript", "safeZoneH", "safeZoneW", "safeZoneWAbs", "safeZoneX", "safeZoneXAbs", "safeZoneY", "saveGame", "saveIdentity", "saveJoysticks", "saveOverlay", "saveProfileNamespace", "saveStatus", "saveVar", "savingEnabled", "say", "say2D", "say3D", "scopeName", "score", "scoreSide", "screenToWorld", "scriptDone", "scriptName", "scriptNull", "scudState", "secondaryWeapon", "secondaryWeaponItems", "secondaryWeaponMagazine", "select", "selectBestPlaces", "selectDiarySubject", "selectedEditorObjects", "selectEditorObject", "selectionPosition", "selectLeader", "selectNoPlayer", "selectPlayer", "selectWeapon", "selectWeaponTurret", "sendAUMessage", "sendSimpleCommand", "sendTask", "sendTaskResult", "sendUDPMessage", "serverCommand", "serverCommandAvailable", "serverCommandExecutable", "serverName", "serverTime", "set", "setAccTime", "setAirportSide", "setAmmo", "setAmmoCargo", "setAperture", "setApertureNew", "setArmoryPoints", "setAttributes", "setAutonomous", "setBehaviour", "setBleedingRemaining", "setCameraInterest", "setCamShakeDefParams", "setCamShakeParams", "setCamUseTi", "setCaptive", "setCenterOfMass", "setCollisionLight", "setCombatMode", "setCompassOscillation", "setCuratorCameraAreaCeiling", "setCuratorCoef", "setCuratorEditingAreaType", "setCuratorWaypointCost", "setCurrentChannel", "setCurrentTask", "setCurrentWaypoint", "setDamage", "setDammage", "setDate", "setDebriefingText", "setDefaultCamera", "setDestination", "setDetailMapBlendPars", "setDir", "setDirection", "setDrawIcon", "setDropInterval", "setEditorMode", "setEditorObjectScope", "setEffectCondition", "setFace", "setFaceAnimation", "setFatigue", "setFlagOwner", "setFlagSide", "setFlagTexture", "setFog", "setFog array", "setFormation", "setFormationTask", "setFormDir", "setFriend", "setFromEditor", "setFSMVariable", "setFuel", "setFuelCargo", "setGroupIcon", "setGroupIconParams", "setGroupIconsSelectable", "setGroupIconsVisible", "setGroupId", "setGroupIdGlobal", "setGroupOwner", "setGusts", "setHideBehind", "setHit", "setHitIndex", "setHitPointDamage", "setHorizonParallaxCoef", "setHUDMovementLevels", "setIdentity", "setImportance", "setLeader", "setLightAmbient", "setLightAttenuation", "setLightBrightness", "setLightColor", "setLightDayLight", "setLightFlareMaxDistance", "setLightFlareSize", "setLightIntensity", "setLightnings", "setLightUseFlare", "setLocalWindParams", "setMagazineTurretAmmo", "setMarkerAlpha", "setMarkerAlphaLocal", "setMarkerBrush", "setMarkerBrushLocal", "setMarkerColor", "setMarkerColorLocal", "setMarkerDir", "setMarkerDirLocal", "setMarkerPos", "setMarkerPosLocal", "setMarkerShape", "setMarkerShapeLocal", "setMarkerSize", "setMarkerSizeLocal", "setMarkerText", "setMarkerTextLocal", "setMarkerType", "setMarkerTypeLocal", "setMass", "setMimic", "setMousePosition", "setMusicEffect", "setMusicEventHandler", "setName", "setNameSound", "setObjectArguments", "setObjectMaterial", "setObjectProxy", "setObjectTexture", "setObjectTextureGlobal", "setObjectViewDistance", "setOvercast", "setOwner", "setOxygenRemaining", "setParticleCircle", "setParticleClass", "setParticleFire", "setParticleParams", "setParticleRandom", "setPilotLight", "setPiPEffect", "setPitch", "setPlayable", "setPlayerRespawnTime", "setPos", "setPosASL", "setPosASL2", "setPosASLW", "setPosATL", "setPosition", "setPosWorld", "setRadioMsg", "setRain", "setRainbow", "setRandomLip", "setRank", "setRectangular", "setRepairCargo", "setShadowDistance", "setSide", "setSimpleTaskDescription", "setSimpleTaskDestination", "setSimpleTaskTarget", "setSimulWeatherLayers", "setSize", "setSkill", "setSkill array", "setSlingLoad", "setSoundEffect", "setSpeaker", "setSpeech", "setSpeedMode", "setStatValue", "setSuppression", "setSystemOfUnits", "setTargetAge", "setTaskResult", "setTaskState", "setTerrainGrid", "setText", "setTimeMultiplier", "setTitleEffect", "setTriggerActivation", "setTriggerArea", "setTriggerStatements", "setTriggerText", "setTriggerTimeout", "setTriggerType", "setType", "setUnconscious", "setUnitAbility", "setUnitPos", "setUnitPosWeak", "setUnitRank", "setUnitRecoilCoefficient", "setUnloadInCombat", "setUserActionText", "setVariable", "setVectorDir", "setVectorDirAndUp", "setVectorUp", "setVehicleAmmo", "setVehicleAmmoDef", "setVehicleArmor", "setVehicleId", "setVehicleLock", "setVehiclePosition", "setVehicleTiPars", "setVehicleVarName", "setVelocity", "setVelocityTransformation", "setViewDistance", "setVisibleIfTreeCollapsed", "setWaves", "setWaypointBehaviour", "setWaypointCombatMode", "setWaypointCompletionRadius", "setWaypointDescription", "setWaypointFormation", "setWaypointHousePosition", "setWaypointLoiterRadius", "setWaypointLoiterType", "setWaypointName", "setWaypointPosition", "setWaypointScript", "setWaypointSpeed", "setWaypointStatements", "setWaypointTimeout", "setWaypointType", "setWaypointVisible", "setWeaponReloadingTime", "setWind", "setWindDir", "setWindForce", "setWindStr", "setWPPos", "show3DIcons", "showChat", "showCinemaBorder", "showCommandingMenu", "showCompass", "showCuratorCompass", "showGPS", "showHUD", "showLegend", "showMap", "shownArtilleryComputer", "shownChat", "shownCompass", "shownCuratorCompass", "showNewEditorObject", "shownGPS", "shownHUD", "shownMap", "shownPad", "shownRadio", "shownUAVFeed", "shownWarrant", "shownWatch", "showPad", "showRadio", "showSubtitles", "showUAVFeed", "showWarrant", "showWatch", "showWaypoint", "side", "sideChat", "sideEnemy", "sideFriendly", "sideLogic", "sideRadio", "sideUnknown", "simpleTasks", "simulationEnabled", "simulCloudDensity", "simulCloudOcclusion", "simulInClouds", "simulWeatherSync", "sin", "size", "sizeOf", "skill", "skillFinal", "skipTime", "sleep", "sliderPosition", "sliderRange", "sliderSetPosition", "sliderSetRange", "sliderSetSpeed", "sliderSpeed", "slingLoadAssistantShown", "soldierMagazines", "someAmmo", "sort", "soundVolume", "spawn", "speaker", "speed", "speedMode", "splitString", "sqrt", "squadParams", "stance", "startLoadingScreen", "step", "stop", "stopped", "str", "sunOrMoon", "supportInfo", "suppressFor", "surfaceIsWater", "surfaceNormal", "surfaceType", "swimInDepth", "switch", "switchableUnits", "switchAction", "switchCamera", "switchGesture", "switchLight", "switchMove", "synchronizedObjects", "synchronizedTriggers", "synchronizedWaypoints", "synchronizeObjectsAdd", "synchronizeObjectsRemove", "synchronizeTrigger", "synchronizeWaypoint", "synchronizeWaypoint trigger", "systemChat", "systemOfUnits", "tan", "targetKnowledge", "targetsAggregate", "targetsQuery", "taskChildren", "taskCompleted", "taskDescription", "taskDestination", "taskHint", "taskNull", "taskParent", "taskResult", "taskState", "teamMember", "teamMemberNull", "teamName", "teams", "teamSwitch", "teamSwitchEnabled", "teamType", "terminate", "terrainIntersect", "terrainIntersectASL", "text", "text location", "textLog", "textLogFormat", "tg", "then", "throw", "time", "timeMultiplier", "titleCut", "titleFadeOut", "titleObj", "titleRsc", "titleText", "to", "toArray", "toLower", "toString", "toUpper", "triggerActivated", "triggerActivation", "triggerArea", "triggerAttachedVehicle", "triggerAttachObject", "triggerAttachVehicle", "triggerStatements", "triggerText", "triggerTimeout", "triggerTimeoutCurrent", "triggerType", "true", "try", "turretLocal", "turretOwner", "turretUnit", "tvAdd", "tvClear", "tvCollapse", "tvCount", "tvCurSel", "tvData", "tvDelete", "tvExpand", "tvPicture", "tvSetCurSel", "tvSetData", "tvSetPicture", "tvSetPictureColor", "tvSetTooltip", "tvSetValue", "tvSort", "tvSortByValue", "tvText", "tvValue", "type", "typeName", "typeOf", "UAVControl", "uiNamespace", "uiSleep", "unassignCurator", "unassignItem", "unassignTeam", "unassignVehicle", "underwater", "uniform", "uniformContainer", "uniformItems", "uniformMagazines", "unitAddons", "unitBackpack", "unitPos", "unitReady", "unitRecoilCoefficient", "units", "unitsBelowHeight", "unlinkItem", "unlockAchievement", "unregisterTask", "updateDrawIcon", "updateMenuItem", "updateObjectTree", "useAudioTimeForMoves", "vectorAdd", "vectorCos", "vectorCrossProduct", "vectorDiff", "vectorDir", "vectorDirVisual", "vectorDistance", "vectorDistanceSqr", "vectorDotProduct", "vectorFromTo", "vectorMagnitude", "vectorMagnitudeSqr", "vectorMultiply", "vectorNormalized", "vectorUp", "vectorUpVisual", "vehicle", "vehicleChat", "vehicleRadio", "vehicles", "vehicleVarName", "velocity", "velocityModelSpace", "verifySignature", "vest", "vestContainer", "vestItems", "vestMagazines", "viewDistance", "visibleCompass", "visibleGPS", "visibleMap", "visiblePosition", "visiblePositionASL", "visibleWatch", "waitUntil", "waves", "waypointAttachedObject", "waypointAttachedVehicle", "waypointAttachObject", "waypointAttachVehicle", "waypointBehaviour", "waypointCombatMode", "waypointCompletionRadius", "waypointDescription", "waypointFormation", "waypointHousePosition", "waypointLoiterRadius", "waypointLoiterType", "waypointName", "waypointPosition", "waypoints", "waypointScript", "waypointsEnabledUAV", "waypointShow", "waypointSpeed", "waypointStatements", "waypointTimeout", "waypointTimeoutCurrent", "waypointType", "waypointVisible", "weaponAccessories", "weaponCargo", "weaponDirection", "weaponLowered", "weapons", "weaponsItems", "weaponsItemsCargo", "weaponState", "weaponsTurret", "weightRTD", "west", "WFSideText", "while", "wind", "windDir", "windStr", "wingsForcesRTD", "with", "worldName", "worldSize", "worldToModel", "worldToModelVisual", "worldToScreen"], n = ["case", "catch", "default", "do", "else", "exit", "exitWith|5", "for", "forEach", "from", "if", "switch", "then", "throw", "to", "try", "while", "with"], r = ["!", "-", "+", "!=", "%", "&&", "*", "/", "=", "==", ">", ">=", "<", "<=", "^", ":", ">>"], i = ["_forEachIndex|10", "_this|10", "_x|10"], a = ["true", "false", "nil"], o = t.filter(function (e) {
      return -1 == n.indexOf(e) && -1 == a.indexOf(e) && -1 == r.indexOf(e)
    });
    o = o.concat(i);
    var s = {
      className: "string",
      relevance: 0,
      variants: [{ begin: '"', end: '"', contains: [{ begin: '""' }] }, {
        begin: "'",
        end: "'",
        contains: [{ begin: "''" }]
      }]
    }, l = { className: "number", begin: e.NUMBER_RE, relevance: 0 }, c = {
      className: "string",
      variants: [e.QUOTE_STRING_MODE, { begin: "'\\\\?.", end: "'", illegal: "." }]
    }, d = {
      className: "meta",
      begin: "#",
      end: "$",
      keywords: { "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef" },
      contains: [{ begin: /\\\n/, relevance: 0 }, {
        beginKeywords: "include",
        end: "$",
        keywords: { "meta-keyword": "include" },
        contains: [c, { className: "meta-string", begin: "<", end: ">", illegal: "\\n" }]
      }, c, l, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    };
    return {
      aliases: ["sqf"],
      case_insensitive: !0,
      keywords: { keyword: n.join(" "), built_in: o.join(" "), literal: a.join(" ") },
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, l, s, d]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = e.COMMENT("--", "$");
    return {
      case_insensitive: !0,
      illegal: /[<>{}*]/,
      contains: [{
        beginKeywords: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
        end: /;/,
        endsWithParent: !0,
        keywords: {
          keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
          literal: "true false null",
          built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
        },
        contains: [{
          className: "string",
          begin: "'",
          end: "'",
          contains: [e.BACKSLASH_ESCAPE, { begin: "''" }]
        }, {
          className: "string",
          begin: '"',
          end: '"',
          contains: [e.BACKSLASH_ESCAPE, { begin: '""' }]
        }, {
          className: "string",
          begin: "`",
          end: "`",
          contains: [e.BACKSLASH_ESCAPE]
        }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, t]
      }, e.C_BLOCK_COMMENT_MODE, t]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      contains: [e.HASH_COMMENT_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        begin: e.UNDERSCORE_IDENT_RE,
        lexemes: e.UNDERSCORE_IDENT_RE,
        keywords: {
          name: "for in while repeat until if then else",
          symbol: "bernoulli bernoulli_logit binomial binomial_logit beta_binomial hypergeometric categorical categorical_logit ordered_logistic neg_binomial neg_binomial_2 neg_binomial_2_log poisson poisson_log multinomial normal exp_mod_normal skew_normal student_t cauchy double_exponential logistic gumbel lognormal chi_square inv_chi_square scaled_inv_chi_square exponential inv_gamma weibull frechet rayleigh wiener pareto pareto_type_2 von_mises uniform multi_normal multi_normal_prec multi_normal_cholesky multi_gp multi_gp_cholesky multi_student_t gaussian_dlm_obs dirichlet lkj_corr lkj_corr_cholesky wishart inv_wishart",
          "selector-tag": "int real vector simplex unit_vector ordered positive_ordered row_vector matrix cholesky_factor_corr cholesky_factor_cov corr_matrix cov_matrix",
          title: "functions model data parameters quantities transformed generated",
          literal: "true false"
        },
        relevance: 0
      }, { className: "number", begin: "0[xX][0-9a-fA-F]+[Li]?\\b", relevance: 0 }, {
        className: "number",
        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
        relevance: 0
      }, { className: "number", begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b", relevance: 0 }, {
        className: "number",
        begin: "\\d+\\.(?!\\d)(?:i\\b)?",
        relevance: 0
      }, { className: "number", begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b", relevance: 0 }, {
        className: "number",
        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
        relevance: 0
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["do", "ado"],
      case_insensitive: !0,
      keywords: "if else in foreach for forv forva forval forvalu forvalue forvalues by bys bysort xi quietly qui capture about ac ac_7 acprplot acprplot_7 adjust ado adopath adoupdate alpha ameans an ano anov anova anova_estat anova_terms anovadef aorder ap app appe appen append arch arch_dr arch_estat arch_p archlm areg areg_p args arima arima_dr arima_estat arima_p as asmprobit asmprobit_estat asmprobit_lf asmprobit_mfx__dlg asmprobit_p ass asse asser assert avplot avplot_7 avplots avplots_7 bcskew0 bgodfrey binreg bip0_lf biplot bipp_lf bipr_lf bipr_p biprobit bitest bitesti bitowt blogit bmemsize boot bootsamp bootstrap bootstrap_8 boxco_l boxco_p boxcox boxcox_6 boxcox_p bprobit br break brier bro brow brows browse brr brrstat bs bs_7 bsampl_w bsample bsample_7 bsqreg bstat bstat_7 bstat_8 bstrap bstrap_7 ca ca_estat ca_p cabiplot camat canon canon_8 canon_8_p canon_estat canon_p cap caprojection capt captu captur capture cat cc cchart cchart_7 cci cd censobs_table centile cf char chdir checkdlgfiles checkestimationsample checkhlpfiles checksum chelp ci cii cl class classutil clear cli clis clist clo clog clog_lf clog_p clogi clogi_sw clogit clogit_lf clogit_p clogitp clogl_sw cloglog clonevar clslistarray cluster cluster_measures cluster_stop cluster_tree cluster_tree_8 clustermat cmdlog cnr cnre cnreg cnreg_p cnreg_sw cnsreg codebook collaps4 collapse colormult_nb colormult_nw compare compress conf confi confir confirm conren cons const constr constra constrai constrain constraint continue contract copy copyright copysource cor corc corr corr2data corr_anti corr_kmo corr_smc corre correl correla correlat correlate corrgram cou coun count cox cox_p cox_sw coxbase coxhaz coxvar cprplot cprplot_7 crc cret cretu cretur creturn cross cs cscript cscript_log csi ct ct_is ctset ctst_5 ctst_st cttost cumsp cumsp_7 cumul cusum cusum_7 cutil d datasig datasign datasigna datasignat datasignatu datasignatur datasignature datetof db dbeta de dec deco decod decode deff des desc descr descri describ describe destring dfbeta dfgls dfuller di di_g dir dirstats dis discard disp disp_res disp_s displ displa display distinct do doe doed doedi doedit dotplot dotplot_7 dprobit drawnorm drop ds ds_util dstdize duplicates durbina dwstat dydx e ed edi edit egen eivreg emdef en enc enco encod encode eq erase ereg ereg_lf ereg_p ereg_sw ereghet ereghet_glf ereghet_glf_sh ereghet_gp ereghet_ilf ereghet_ilf_sh ereghet_ip eret eretu eretur ereturn err erro error est est_cfexist est_cfname est_clickable est_expand est_hold est_table est_unhold est_unholdok estat estat_default estat_summ estat_vce_only esti estimates etodow etof etomdy ex exi exit expand expandcl fac fact facto factor factor_estat factor_p factor_pca_rotated factor_rotate factormat fcast fcast_compute fcast_graph fdades fdadesc fdadescr fdadescri fdadescrib fdadescribe fdasav fdasave fdause fh_st file open file read file close file filefilter fillin find_hlp_file findfile findit findit_7 fit fl fli flis flist for5_0 form forma format fpredict frac_154 frac_adj frac_chk frac_cox frac_ddp frac_dis frac_dv frac_in frac_mun frac_pp frac_pq frac_pv frac_wgt frac_xo fracgen fracplot fracplot_7 fracpoly fracpred fron_ex fron_hn fron_p fron_tn fron_tn2 frontier ftodate ftoe ftomdy ftowdate g gamhet_glf gamhet_gp gamhet_ilf gamhet_ip gamma gamma_d2 gamma_p gamma_sw gammahet gdi_hexagon gdi_spokes ge gen gene gener genera generat generate genrank genstd genvmean gettoken gl gladder gladder_7 glim_l01 glim_l02 glim_l03 glim_l04 glim_l05 glim_l06 glim_l07 glim_l08 glim_l09 glim_l10 glim_l11 glim_l12 glim_lf glim_mu glim_nw1 glim_nw2 glim_nw3 glim_p glim_v1 glim_v2 glim_v3 glim_v4 glim_v5 glim_v6 glim_v7 glm glm_6 glm_p glm_sw glmpred glo glob globa global glogit glogit_8 glogit_p gmeans gnbre_lf gnbreg gnbreg_5 gnbreg_p gomp_lf gompe_sw gomper_p gompertz gompertzhet gomphet_glf gomphet_glf_sh gomphet_gp gomphet_ilf gomphet_ilf_sh gomphet_ip gphdot gphpen gphprint gprefs gprobi_p gprobit gprobit_8 gr gr7 gr_copy gr_current gr_db gr_describe gr_dir gr_draw gr_draw_replay gr_drop gr_edit gr_editviewopts gr_example gr_example2 gr_export gr_print gr_qscheme gr_query gr_read gr_rename gr_replay gr_save gr_set gr_setscheme gr_table gr_undo gr_use graph graph7 grebar greigen greigen_7 greigen_8 grmeanby grmeanby_7 gs_fileinfo gs_filetype gs_graphinfo gs_stat gsort gwood h hadimvo hareg hausman haver he heck_d2 heckma_p heckman heckp_lf heckpr_p heckprob hel help hereg hetpr_lf hetpr_p hetprob hettest hexdump hilite hist hist_7 histogram hlogit hlu hmeans hotel hotelling hprobit hreg hsearch icd9 icd9_ff icd9p iis impute imtest inbase include inf infi infil infile infix inp inpu input ins insheet insp inspe inspec inspect integ inten intreg intreg_7 intreg_p intrg2_ll intrg_ll intrg_ll2 ipolate iqreg ir irf irf_create irfm iri is_svy is_svysum isid istdize ivprob_1_lf ivprob_lf ivprobit ivprobit_p ivreg ivreg_footnote ivtob_1_lf ivtob_lf ivtobit ivtobit_p jackknife jacknife jknife jknife_6 jknife_8 jkstat joinby kalarma1 kap kap_3 kapmeier kappa kapwgt kdensity kdensity_7 keep ksm ksmirnov ktau kwallis l la lab labe label labelbook ladder levels levelsof leverage lfit lfit_p li lincom line linktest lis list lloghet_glf lloghet_glf_sh lloghet_gp lloghet_ilf lloghet_ilf_sh lloghet_ip llogi_sw llogis_p llogist llogistic llogistichet lnorm_lf lnorm_sw lnorma_p lnormal lnormalhet lnormhet_glf lnormhet_glf_sh lnormhet_gp lnormhet_ilf lnormhet_ilf_sh lnormhet_ip lnskew0 loadingplot loc loca local log logi logis_lf logistic logistic_p logit logit_estat logit_p loglogs logrank loneway lookfor lookup lowess lowess_7 lpredict lrecomp lroc lroc_7 lrtest ls lsens lsens_7 lsens_x lstat ltable ltable_7 ltriang lv lvr2plot lvr2plot_7 m ma mac macr macro makecns man manova manova_estat manova_p manovatest mantel mark markin markout marksample mat mat_capp mat_order mat_put_rr mat_rapp mata mata_clear mata_describe mata_drop mata_matdescribe mata_matsave mata_matuse mata_memory mata_mlib mata_mosave mata_rename mata_which matalabel matcproc matlist matname matr matri matrix matrix_input__dlg matstrik mcc mcci md0_ md1_ md1debug_ md2_ md2debug_ mds mds_estat mds_p mdsconfig mdslong mdsmat mdsshepard mdytoe mdytof me_derd mean means median memory memsize meqparse mer merg merge mfp mfx mhelp mhodds minbound mixed_ll mixed_ll_reparm mkassert mkdir mkmat mkspline ml ml_5 ml_adjs ml_bhhhs ml_c_d ml_check ml_clear ml_cnt ml_debug ml_defd ml_e0 ml_e0_bfgs ml_e0_cycle ml_e0_dfp ml_e0i ml_e1 ml_e1_bfgs ml_e1_bhhh ml_e1_cycle ml_e1_dfp ml_e2 ml_e2_cycle ml_ebfg0 ml_ebfr0 ml_ebfr1 ml_ebh0q ml_ebhh0 ml_ebhr0 ml_ebr0i ml_ecr0i ml_edfp0 ml_edfr0 ml_edfr1 ml_edr0i ml_eds ml_eer0i ml_egr0i ml_elf ml_elf_bfgs ml_elf_bhhh ml_elf_cycle ml_elf_dfp ml_elfi ml_elfs ml_enr0i ml_enrr0 ml_erdu0 ml_erdu0_bfgs ml_erdu0_bhhh ml_erdu0_bhhhq ml_erdu0_cycle ml_erdu0_dfp ml_erdu0_nrbfgs ml_exde ml_footnote ml_geqnr ml_grad0 ml_graph ml_hbhhh ml_hd0 ml_hold ml_init ml_inv ml_log ml_max ml_mlout ml_mlout_8 ml_model ml_nb0 ml_opt ml_p ml_plot ml_query ml_rdgrd ml_repor ml_s_e ml_score ml_searc ml_technique ml_unhold mleval mlf_ mlmatbysum mlmatsum mlog mlogi mlogit mlogit_footnote mlogit_p mlopts mlsum mlvecsum mnl0_ mor more mov move mprobit mprobit_lf mprobit_p mrdu0_ mrdu1_ mvdecode mvencode mvreg mvreg_estat n nbreg nbreg_al nbreg_lf nbreg_p nbreg_sw nestreg net newey newey_7 newey_p news nl nl_7 nl_9 nl_9_p nl_p nl_p_7 nlcom nlcom_p nlexp2 nlexp2_7 nlexp2a nlexp2a_7 nlexp3 nlexp3_7 nlgom3 nlgom3_7 nlgom4 nlgom4_7 nlinit nllog3 nllog3_7 nllog4 nllog4_7 nlog_rd nlogit nlogit_p nlogitgen nlogittree nlpred no nobreak noi nois noisi noisil noisily note notes notes_dlg nptrend numlabel numlist odbc old_ver olo olog ologi ologi_sw ologit ologit_p ologitp on one onew onewa oneway op_colnm op_comp op_diff op_inv op_str opr opro oprob oprob_sw oprobi oprobi_p oprobit oprobitp opts_exclusive order orthog orthpoly ou out outf outfi outfil outfile outs outsh outshe outshee outsheet ovtest pac pac_7 palette parse parse_dissim pause pca pca_8 pca_display pca_estat pca_p pca_rotate pcamat pchart pchart_7 pchi pchi_7 pcorr pctile pentium pergram pergram_7 permute permute_8 personal peto_st pkcollapse pkcross pkequiv pkexamine pkexamine_7 pkshape pksumm pksumm_7 pl plo plot plugin pnorm pnorm_7 poisgof poiss_lf poiss_sw poisso_p poisson poisson_estat post postclose postfile postutil pperron pr prais prais_e prais_e2 prais_p predict predictnl preserve print pro prob probi probit probit_estat probit_p proc_time procoverlay procrustes procrustes_estat procrustes_p profiler prog progr progra program prop proportion prtest prtesti pwcorr pwd q\\s qby qbys qchi qchi_7 qladder qladder_7 qnorm qnorm_7 qqplot qqplot_7 qreg qreg_c qreg_p qreg_sw qu quadchk quantile quantile_7 que quer query range ranksum ratio rchart rchart_7 rcof recast reclink recode reg reg3 reg3_p regdw regr regre regre_p2 regres regres_p regress regress_estat regriv_p remap ren rena renam rename renpfix repeat replace report reshape restore ret retu retur return rm rmdir robvar roccomp roccomp_7 roccomp_8 rocf_lf rocfit rocfit_8 rocgold rocplot rocplot_7 roctab roctab_7 rolling rologit rologit_p rot rota rotat rotate rotatemat rreg rreg_p ru run runtest rvfplot rvfplot_7 rvpplot rvpplot_7 sa safesum sample sampsi sav save savedresults saveold sc sca scal scala scalar scatter scm_mine sco scob_lf scob_p scobi_sw scobit scor score scoreplot scoreplot_help scree screeplot screeplot_help sdtest sdtesti se search separate seperate serrbar serrbar_7 serset set set_defaults sfrancia sh she shel shell shewhart shewhart_7 signestimationsample signrank signtest simul simul_7 simulate simulate_8 sktest sleep slogit slogit_d2 slogit_p smooth snapspan so sor sort spearman spikeplot spikeplot_7 spikeplt spline_x split sqreg sqreg_p sret sretu sretur sreturn ssc st st_ct st_hc st_hcd st_hcd_sh st_is st_issys st_note st_promo st_set st_show st_smpl st_subid stack statsby statsby_8 stbase stci stci_7 stcox stcox_estat stcox_fr stcox_fr_ll stcox_p stcox_sw stcoxkm stcoxkm_7 stcstat stcurv stcurve stcurve_7 stdes stem stepwise stereg stfill stgen stir stjoin stmc stmh stphplot stphplot_7 stphtest stphtest_7 stptime strate strate_7 streg streg_sw streset sts sts_7 stset stsplit stsum sttocc sttoct stvary stweib su suest suest_8 sum summ summa summar summari summariz summarize sunflower sureg survcurv survsum svar svar_p svmat svy svy_disp svy_dreg svy_est svy_est_7 svy_estat svy_get svy_gnbreg_p svy_head svy_header svy_heckman_p svy_heckprob_p svy_intreg_p svy_ivreg_p svy_logistic_p svy_logit_p svy_mlogit_p svy_nbreg_p svy_ologit_p svy_oprobit_p svy_poisson_p svy_probit_p svy_regress_p svy_sub svy_sub_7 svy_x svy_x_7 svy_x_p svydes svydes_8 svygen svygnbreg svyheckman svyheckprob svyintreg svyintreg_7 svyintrg svyivreg svylc svylog_p svylogit svymarkout svymarkout_8 svymean svymlog svymlogit svynbreg svyolog svyologit svyoprob svyoprobit svyopts svypois svypois_7 svypoisson svyprobit svyprobt svyprop svyprop_7 svyratio svyreg svyreg_p svyregress svyset svyset_7 svyset_8 svytab svytab_7 svytest svytotal sw sw_8 swcnreg swcox swereg swilk swlogis swlogit swologit swoprbt swpois swprobit swqreg swtobit swweib symmetry symmi symplot symplot_7 syntax sysdescribe sysdir sysuse szroeter ta tab tab1 tab2 tab_or tabd tabdi tabdis tabdisp tabi table tabodds tabodds_7 tabstat tabu tabul tabula tabulat tabulate te tempfile tempname tempvar tes test testnl testparm teststd tetrachoric time_it timer tis tob tobi tobit tobit_p tobit_sw token tokeni tokeniz tokenize tostring total translate translator transmap treat_ll treatr_p treatreg trim trnb_cons trnb_mean trpoiss_d2 trunc_ll truncr_p truncreg tsappend tset tsfill tsline tsline_ex tsreport tsrevar tsrline tsset tssmooth tsunab ttest ttesti tut_chk tut_wait tutorial tw tware_st two twoway twoway__fpfit_serset twoway__function_gen twoway__histogram_gen twoway__ipoint_serset twoway__ipoints_serset twoway__kdensity_gen twoway__lfit_serset twoway__normgen_gen twoway__pci_serset twoway__qfit_serset twoway__scatteri_serset twoway__sunflower_gen twoway_ksm_serset ty typ type typeof u unab unabbrev unabcmd update us use uselabel var var_mkcompanion var_p varbasic varfcast vargranger varirf varirf_add varirf_cgraph varirf_create varirf_ctable varirf_describe varirf_dir varirf_drop varirf_erase varirf_graph varirf_ograph varirf_rename varirf_set varirf_table varlist varlmar varnorm varsoc varstable varstable_w varstable_w2 varwle vce vec vec_fevd vec_mkphi vec_p vec_p_w vecirf_create veclmar veclmar_w vecnorm vecnorm_w vecrank vecstable verinst vers versi versio version view viewsource vif vwls wdatetof webdescribe webseek webuse weib1_lf weib2_lf weib_lf weib_lf0 weibhet_glf weibhet_glf_sh weibhet_glfa weibhet_glfa_sh weibhet_gp weibhet_ilf weibhet_ilf_sh weibhet_ilfa weibhet_ilfa_sh weibhet_ip weibu_sw weibul_p weibull weibull_c weibull_s weibullhet wh whelp whi which whil while wilc_st wilcoxon win wind windo window winexec wntestb wntestb_7 wntestq xchart xchart_7 xcorr xcorr_7 xi xi_6 xmlsav xmlsave xmluse xpose xsh xshe xshel xshell xt_iis xt_tis xtab_p xtabond xtbin_p xtclog xtcloglog xtcloglog_8 xtcloglog_d2 xtcloglog_pa_p xtcloglog_re_p xtcnt_p xtcorr xtdata xtdes xtfront_p xtfrontier xtgee xtgee_elink xtgee_estat xtgee_makeivar xtgee_p xtgee_plink xtgls xtgls_p xthaus xthausman xtht_p xthtaylor xtile xtint_p xtintreg xtintreg_8 xtintreg_d2 xtintreg_p xtivp_1 xtivp_2 xtivreg xtline xtline_ex xtlogit xtlogit_8 xtlogit_d2 xtlogit_fe_p xtlogit_pa_p xtlogit_re_p xtmixed xtmixed_estat xtmixed_p xtnb_fe xtnb_lf xtnbreg xtnbreg_pa_p xtnbreg_refe_p xtpcse xtpcse_p xtpois xtpoisson xtpoisson_d2 xtpoisson_pa_p xtpoisson_refe_p xtpred xtprobit xtprobit_8 xtprobit_d2 xtprobit_re_p xtps_fe xtps_lf xtps_ren xtps_ren_8 xtrar_p xtrc xtrc_p xtrchh xtrefe_p xtreg xtreg_be xtreg_fe xtreg_ml xtreg_pa_p xtreg_re xtregar xtrere_p xtset xtsf_ll xtsf_llti xtsum xttab xttest0 xttobit xttobit_8 xttobit_p xttrans yx yxview__barlike_draw yxview_area_draw yxview_bar_draw yxview_dot_draw yxview_dropline_draw yxview_function_draw yxview_iarrow_draw yxview_ilabels_draw yxview_normal_draw yxview_pcarrow_draw yxview_pcbarrow_draw yxview_pccapsym_draw yxview_pcscatter_draw yxview_pcspike_draw yxview_rarea_draw yxview_rbar_draw yxview_rbarm_draw yxview_rcap_draw yxview_rcapsym_draw yxview_rconnected_draw yxview_rline_draw yxview_rscatter_draw yxview_rspike_draw yxview_spike_draw yxview_sunflower_draw zap_s zinb zinb_llf zinb_plf zip zip_llf zip_p zip_plf zt_ct_5 zt_hc_5 zt_hcd_5 zt_is_5 zt_iss_5 zt_sho_5 zt_smp_5 ztbase_5 ztcox_5 ztdes_5 ztereg_5 ztfill_5 ztgen_5 ztir_5 ztjoin_5 ztnb ztnb_p ztp ztp_p zts_5 ztset_5 ztspli_5 ztsum_5 zttoct_5 ztvary_5 ztweib_5",
      contains: [{ className: "symbol", begin: /`[a-zA-Z0-9_]+'/ }, {
        className: "variable",
        begin: /\$\{?[a-zA-Z0-9_]+\}?/
      }, {
        className: "string",
        variants: [{ begin: '`"[^\r\n]*?"\'' }, { begin: '"[^\r\n"]*"' }]
      }, {
        className: "built_in",
        variants: [{ begin: "\\b(abs|acos|asin|atan|atan2|atanh|ceil|cloglog|comb|cos|digamma|exp|floor|invcloglog|invlogit|ln|lnfact|lnfactorial|lngamma|log|log10|max|min|mod|reldif|round|sign|sin|sqrt|sum|tan|tanh|trigamma|trunc|betaden|Binomial|binorm|binormal|chi2|chi2tail|dgammapda|dgammapdada|dgammapdadx|dgammapdx|dgammapdxdx|F|Fden|Ftail|gammaden|gammap|ibeta|invbinomial|invchi2|invchi2tail|invF|invFtail|invgammap|invibeta|invnchi2|invnFtail|invnibeta|invnorm|invnormal|invttail|nbetaden|nchi2|nFden|nFtail|nibeta|norm|normal|normalden|normd|npnchi2|tden|ttail|uniform|abbrev|char|index|indexnot|length|lower|ltrim|match|plural|proper|real|regexm|regexr|regexs|reverse|rtrim|string|strlen|strlower|strltrim|strmatch|strofreal|strpos|strproper|strreverse|strrtrim|strtrim|strupper|subinstr|subinword|substr|trim|upper|word|wordcount|_caller|autocode|byteorder|chop|clip|cond|e|epsdouble|epsfloat|group|inlist|inrange|irecode|matrix|maxbyte|maxdouble|maxfloat|maxint|maxlong|mi|minbyte|mindouble|minfloat|minint|minlong|missing|r|recode|replay|return|s|scalar|d|date|day|dow|doy|halfyear|mdy|month|quarter|week|year|d|daily|dofd|dofh|dofm|dofq|dofw|dofy|h|halfyearly|hofd|m|mofd|monthly|q|qofd|quarterly|tin|twithin|w|weekly|wofd|y|yearly|yh|ym|yofd|yq|yw|cholesky|colnumb|colsof|corr|det|diag|diag0cnt|el|get|hadamard|I|inv|invsym|issym|issymmetric|J|matmissing|matuniform|mreldif|nullmat|rownumb|rowsof|sweep|syminv|trace|vec|vecdiag)(?=\\(|$)" }]
      }, e.COMMENT("^[ 	]*\\*.*$", !1), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[A-Z_][A-Z0-9_.]*", n = { keyword: "HEADER ENDSEC DATA" }, r = {
      className: "meta",
      begin: "ISO-10303-21;",
      relevance: 10
    }, i = { className: "meta", begin: "END-ISO-10303-21;", relevance: 10 };
    return {
      aliases: ["p21", "step", "stp"],
      case_insensitive: !0,
      lexemes: t,
      keywords: n,
      contains: [r, i, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT("/\\*\\*!", "\\*/"), e.C_NUMBER_MODE, e.inherit(e.APOS_STRING_MODE, { illegal: null }), e.inherit(e.QUOTE_STRING_MODE, { illegal: null }), {
        className: "string",
        begin: "'",
        end: "'"
      }, { className: "symbol", variants: [{ begin: "#", end: "\\d+", illegal: "\\W" }] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "variable", begin: "\\$" + e.IDENT_RE }, n = {
      className: "number",
      begin: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"
    }, r = ["charset", "css", "debug", "extend", "font-face", "for", "import", "include", "media", "mixin", "page", "warn", "while"], i = ["after", "before", "first-letter", "first-line", "active", "first-child", "focus", "hover", "lang", "link", "visited"], a = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"], o = "[\\.\\s\\n\\[\\:,]", s = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"], l = ["\\{", "\\}", "\\?", "(\\bReturn\\b)", "(\\bEnd\\b)", "(\\bend\\b)", ";", "#\\s", "\\*\\s", "===\\s", "\\|", "%"];
    return {
      aliases: ["styl"],
      case_insensitive: !1,
      illegal: "(" + l.join("|") + ")",
      keywords: "if else for in",
      contains: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n, {
        begin: "\\.[a-zA-Z][a-zA-Z0-9_-]*" + o,
        returnBegin: !0,
        contains: [{ className: "selector-class", begin: "\\.[a-zA-Z][a-zA-Z0-9_-]*" }]
      }, {
        begin: "\\#[a-zA-Z][a-zA-Z0-9_-]*" + o,
        returnBegin: !0,
        contains: [{ className: "selector-id", begin: "\\#[a-zA-Z][a-zA-Z0-9_-]*" }]
      }, {
        begin: "\\b(" + a.join("|") + ")" + o,
        returnBegin: !0,
        contains: [{ className: "selector-tag", begin: "\\b[a-zA-Z][a-zA-Z0-9_-]*" }]
      }, { begin: "&?:?:\\b(" + i.join("|") + ")" + o }, { begin: "@(" + r.join("|") + ")\\b" }, t, e.CSS_NUMBER_MODE, e.NUMBER_MODE, {
        className: "function",
        begin: "^[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
        illegal: "[\\n]",
        returnBegin: !0,
        contains: [{ className: "title", begin: "\\b[a-zA-Z][a-zA-Z0-9_-]*" }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          contains: [n, t, e.APOS_STRING_MODE, e.CSS_NUMBER_MODE, e.NUMBER_MODE, e.QUOTE_STRING_MODE]
        }]
      }, { className: "attribute", begin: "\\b(" + s.reverse().join("|") + ")\\b" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "__COLUMN__ __FILE__ __FUNCTION__ __LINE__ as as! as? associativity break case catch class continue convenience default defer deinit didSet do dynamic dynamicType else enum extension fallthrough false final for func get guard if import in indirect infix init inout internal is lazy left let mutating nil none nonmutating operator optional override postfix precedence prefix private protocol Protocol public repeat required rethrows return right self Self set static struct subscript super switch throw throws true try try! try? Type typealias unowned var weak where while willSet",
      literal: "true false nil",
      built_in: "abs advance alignof alignofValue anyGenerator assert assertionFailure bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal fatalError filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare map max maxElement min minElement numericCast overlaps partition posix precondition preconditionFailure print println quickSort readLine reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith stride strideof strideofValue swap toString transcode underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers withUnsafePointer withUnsafePointers withVaList zip"
    }, n = {
      className: "type",
      begin: "\\b[A-Z][\\w']*",
      relevance: 0
    }, r = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }), i = {
      className: "subst",
      begin: /\\\(/,
      end: "\\)",
      keywords: t,
      contains: []
    }, a = {
      className: "number",
      begin: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
      relevance: 0
    }, o = e.inherit(e.QUOTE_STRING_MODE, { contains: [i, e.BACKSLASH_ESCAPE] });
    return i.contains = [a], {
      keywords: t,
      contains: [o, e.C_LINE_COMMENT_MODE, r, n, a, {
        className: "function",
        beginKeywords: "func",
        end: "{",
        excludeEnd: !0,
        contains: [e.inherit(e.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/, illegal: /\(/ }), {
          begin: /</,
          end: />/,
          illegal: />/
        }, {
          className: "params",
          begin: /\(/,
          end: /\)/,
          endsParent: !0,
          keywords: t,
          contains: ["self", a, o, e.C_BLOCK_COMMENT_MODE, { begin: ":" }],
          illegal: /["']/
        }],
        illegal: /\[|%/
      }, {
        className: "class",
        beginKeywords: "struct protocol class extension enum",
        keywords: t,
        end: "\\{",
        excludeEnd: !0,
        contains: [e.inherit(e.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ })]
      }, {
        className: "meta",
        begin: "(@warn_unused_result|@exported|@lazy|@noescape|@NSCopying|@NSManaged|@objc|@convention|@required|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix|@autoclosure|@testable|@available|@nonobjc|@NSApplicationMain|@UIApplicationMain)"
      }, { beginKeywords: "import", end: /$/, contains: [e.C_LINE_COMMENT_MODE, r] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["tk"],
      keywords: "after append apply array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd chan clock close concat continue dde dict encoding eof error eval exec exit expr fblocked fconfigure fcopy file fileevent filename flush for foreach format gets glob global history http if incr info interp join lappend|10 lassign|10 lindex|10 linsert|10 list llength|10 load lrange|10 lrepeat|10 lreplace|10 lreverse|10 lsearch|10 lset|10 lsort|10 mathfunc mathop memory msgcat namespace open package parray pid pkg::create pkg_mkIndex platform platform::shell proc puts pwd read refchan regexp registry regsub|10 rename return safe scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_startOfPreviousWord tcl_wordBreakAfter tcl_wordBreakBefore tcltest tclvars tell time tm trace unknown unload unset update uplevel upvar variable vwait while",
      contains: [e.COMMENT(";[ \\t]*#", "$"), e.COMMENT("^[ \\t]*#", "$"), {
        beginKeywords: "proc",
        end: "[\\{]",
        excludeEnd: !0,
        contains: [{
          className: "title",
          begin: "[ \\t\\n\\r]+(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*",
          end: "[ \\t\\n\\r]",
          endsWithParent: !0,
          excludeEnd: !0
        }]
      }, {
        excludeEnd: !0,
        variants: [{
          begin: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*\\(([a-zA-Z0-9_])*\\)",
          end: "[^a-zA-Z0-9_\\}\\$]"
        }, { begin: "\\$(\\{)?(::)?[a-zA-Z_]((::)?[a-zA-Z0-9_])*", end: "(\\))?[^a-zA-Z0-9_\\}\\$]" }]
      }, {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [e.inherit(e.APOS_STRING_MODE, { illegal: null }), e.inherit(e.QUOTE_STRING_MODE, { illegal: null })]
      }, { className: "number", variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "tag",
      begin: /\\/,
      relevance: 0,
      contains: [{
        className: "name",
        variants: [{ begin: /[a-zA-Zа-яА-я]+[*]?/ }, { begin: /[^a-zA-Zа-яА-я0-9]/ }],
        starts: {
          endsWithParent: !0,
          relevance: 0,
          contains: [{
            className: "string",
            variants: [{ begin: /\[/, end: /\]/ }, { begin: /\{/, end: /\}/ }]
          }, {
            begin: /\s*=\s*/,
            endsWithParent: !0,
            relevance: 0,
            contains: [{ className: "number", begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/ }]
          }]
        }
      }]
    };
    return {
      contains: [t, {
        className: "formula",
        contains: [t],
        relevance: 0,
        variants: [{ begin: /\$\$/, end: /\$\$/ }, { begin: /\$/, end: /\$/ }]
      }, e.COMMENT("%", "$", { relevance: 0 })]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "bool byte i16 i32 i64 double string binary";
    return {
      keywords: {
        keyword: "namespace const typedef struct enum service exception void oneway set list map required optional",
        built_in: t,
        literal: "true false"
      },
      contains: [e.QUOTE_STRING_MODE, e.NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "class",
        beginKeywords: "struct enum service exception",
        end: /\{/,
        illegal: /\n/,
        contains: [e.inherit(e.TITLE_MODE, { starts: { endsWithParent: !0, excludeEnd: !0 } })]
      }, { begin: "\\b(set|list|map)\\s*<", end: ">", keywords: t, contains: ["self"] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { className: "number", begin: "[1-9][0-9]*", relevance: 0 }, n = {
      className: "symbol",
      begin: ":[^\\]]+"
    }, r = {
      className: "built_in",
      begin: "(AR|P|PAYLOAD|PR|R|SR|RSR|LBL|VR|UALM|MESSAGE|UTOOL|UFRAME|TIMER|	    TIMER_OVERFLOW|JOINT_MAX_SPEED|RESUME_PROG|DIAG_REC)\\[",
      end: "\\]",
      contains: ["self", t, n]
    }, i = {
      className: "built_in",
      begin: "(AI|AO|DI|DO|F|RI|RO|UI|UO|GI|GO|SI|SO)\\[",
      end: "\\]",
      contains: ["self", t, e.QUOTE_STRING_MODE, n]
    };
    return {
      keywords: {
        keyword: "ABORT ACC ADJUST AND AP_LD BREAK CALL CNT COL CONDITION CONFIG DA DB DIV DETECT ELSE END ENDFOR ERR_NUM ERROR_PROG FINE FOR GP GUARD INC IF JMP LINEAR_MAX_SPEED LOCK MOD MONITOR OFFSET Offset OR OVERRIDE PAUSE PREG PTH RT_LD RUN SELECT SKIP Skip TA TB TO TOOL_OFFSET Tool_Offset UF UT UFRAME_NUM UTOOL_NUM UNLOCK WAIT X Y Z W P R STRLEN SUBSTR FINDSTR VOFFSET PROG ATTR MN POS",
        literal: "ON OFF max_speed LPOS JPOS ENABLE DISABLE START STOP RESET"
      },
      contains: [r, i, { className: "keyword", begin: "/(PROG|ATTR|MN|POS|END)\\b" }, {
        className: "keyword",
        begin: "(CALL|RUN|POINT_LOGIC|LBL)\\b"
      }, {
        className: "keyword",
        begin: "\\b(ACC|CNT|Skip|Offset|PSPD|RT_LD|AP_LD|Tool_Offset)"
      }, {
        className: "number",
        begin: "\\d+(sec|msec|mm/sec|cm/min|inch/min|deg/sec|mm|in|cm)?\\b",
        relevance: 0
      }, e.COMMENT("//", "[;$]"), e.COMMENT("!", "[;$]"), e.COMMENT("--eg:", "$"), e.QUOTE_STRING_MODE, {
        className: "string",
        begin: "'",
        end: "'"
      }, e.C_NUMBER_MODE, { className: "variable", begin: "\\$[A-Za-z0-9_]+" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "params",
      begin: "\\(",
      end: "\\)"
    }, n = "attribute block constant cycle date dump include max min parent random range source template_from_string", r = {
      beginKeywords: n,
      keywords: { name: n },
      relevance: 0,
      contains: [t]
    }, i = {
      begin: /\|[A-Za-z_]+:?/,
      keywords: "abs batch capitalize convert_encoding date date_modify default escape first format join json_encode keys last length lower merge nl2br number_format raw replace reverse round slice sort split striptags title trim upper url_encode",
      contains: [r]
    }, a = "autoescape block do embed extends filter flush for if import include macro sandbox set spaceless use verbatim";
    return a = a + " " + a.split(" ").map(function (e) {
        return "end" + e
      }).join(" "), {
      aliases: ["craftcms"],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [e.COMMENT(/\{#/, /#}/), {
        className: "template-tag",
        begin: /\{%/,
        end: /%}/,
        contains: [{
          className: "name",
          begin: /\w+/,
          keywords: a,
          starts: { endsWithParent: !0, contains: [i, r], relevance: 0 }
        }]
      }, { className: "template-variable", begin: /\{\{/, end: /}}/, contains: ["self", i, r] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract",
      literal: "true false null undefined NaN Infinity",
      built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void"
    };
    return {
      aliases: ["ts"],
      keywords: t,
      contains: [{
        className: "meta",
        begin: /^\s*['"]use strict['"]/
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
        className: "string",
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE, { className: "subst", begin: "\\$\\{", end: "\\}" }]
      }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "number",
        variants: [{ begin: "\\b(0[bB][01]+)" }, { begin: "\\b(0[oO][0-7]+)" }, { begin: e.C_NUMBER_RE }],
        relevance: 0
      }, {
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.REGEXP_MODE],
        relevance: 0
      }, {
        className: "function",
        begin: "function",
        end: /[\{;]/,
        excludeEnd: !0,
        keywords: t,
        contains: ["self", e.inherit(e.TITLE_MODE, { begin: /[A-Za-z$_][0-9A-Za-z$_]*/ }), {
          className: "params",
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: t,
          contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
          illegal: /["'\(]/
        }],
        illegal: /\[|%/,
        relevance: 0
      }, { beginKeywords: "constructor", end: /\{/, excludeEnd: !0 }, {
        beginKeywords: "module",
        end: /\{/,
        excludeEnd: !0
      }, {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: !0,
        keywords: "interface extends"
      }, { begin: /\$[(.]/ }, { begin: "\\." + e.IDENT_RE, relevance: 0 }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      keywords: {
        keyword: "char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 uint16 uint32 uint64 float double bool struct enum string void weak unowned owned async signal static abstract interface override while do for foreach else switch case break default return try catch public private protected internal using new this get set const stdout stdin stderr var",
        built_in: "DBus GLib CCode Gee Object",
        literal: "false true null"
      },
      contains: [{
        className: "class",
        beginKeywords: "class interface delegate namespace",
        end: "{",
        excludeEnd: !0,
        illegal: "[^,:\\n\\s\\.]",
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
        className: "string",
        begin: '"""',
        end: '"""',
        relevance: 5
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.C_NUMBER_MODE, {
        className: "meta",
        begin: "^#",
        end: "$",
        relevance: 2
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["vb"],
      case_insensitive: !0,
      keywords: {
        keyword: "addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass namespace narrowing new next not notinheritable notoverridable of off on operator option optional or order orelse overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim rem removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly xor",
        built_in: "boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype date decimal directcast double gettype getxmlnamespace iif integer long object sbyte short single string trycast typeof uinteger ulong ushort",
        literal: "true false nothing"
      },
      illegal: "//|{|}|endif|gosub|variant|wend",
      contains: [e.inherit(e.QUOTE_STRING_MODE, { contains: [{ begin: '""' }] }), e.COMMENT("'", "$", {
        returnBegin: !0,
        contains: [{
          className: "doctag",
          begin: "'''|<!--|-->",
          contains: [e.PHRASAL_WORDS_MODE]
        }, { className: "doctag", begin: "</?", end: ">", contains: [e.PHRASAL_WORDS_MODE] }]
      }), e.C_NUMBER_MODE, {
        className: "meta",
        begin: "#",
        end: "$",
        keywords: { "meta-keyword": "if else elseif end region externalsource" }
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return { subLanguage: "xml", contains: [{ begin: "<%", end: "%>", subLanguage: "vbscript" }] }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["vbs"],
      case_insensitive: !0,
      keywords: {
        keyword: "call class const dim do loop erase execute executeglobal exit for each next function if then else on error option explicit new private property let get public randomize redim rem select case set stop sub while wend with end to elseif is or xor and not class_initialize class_terminate default preserve in me byval byref step resume goto",
        built_in: "lcase month vartype instrrev ubound setlocale getobject rgb getref string weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency conversions csng timevalue second year space abs clng timeserial fixs len asc isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion scriptengine split scriptengineminorversion cint sin datepart ltrim sqr scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw chrw regexp server response request cstr err",
        literal: "true false null nothing empty"
      },
      illegal: "//",
      contains: [e.inherit(e.QUOTE_STRING_MODE, { contains: [{ begin: '""' }] }), e.COMMENT(/'/, /$/, { relevance: 0 }), e.C_NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      aliases: ["v"],
      case_insensitive: !1,
      keywords: { keyword: "always and assign begin buf bufif0 bufif1 case casex casez cmos deassign default defparam disable edge else end endcase endfunction endmodule endprimitive endspecify endtable endtask event for force forever fork function if ifnone initial inout input join macromodule module nand negedge nmos nor not notif0 notif1 or output parameter pmos posedge primitive pulldown pullup rcmos release repeat rnmos rpmos rtran rtranif0 rtranif1 specify specparam table task timescale tran tranif0 tranif1 wait while xnor xor highz0 highz1 integer large medium pull0 pull1 real realtime reg scalared signed small strong0 strong1 supply0 supply0 supply1 supply1 time tri tri0 tri1 triand trior trireg vectored wand weak0 weak1 wire wor" },
      contains: [e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE, e.QUOTE_STRING_MODE, {
        className: "number",
        begin: "(\\b((\\d'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+))|(\\B(('(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+))|(\\b([0-9xzXZ_])+)",
        contains: [e.BACKSLASH_ESCAPE],
        relevance: 0
      }, { className: "variable", begin: "#\\((?!parameter).+\\)" }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "\\d(_|\\d)*", n = "[eE][-+]?" + t, r = t + "(\\." + t + ")?(" + n + ")?", i = "\\w+", a = t + "#" + i + "(\\." + i + ")?#(" + n + ")?", o = "\\b(" + a + "|" + r + ")";
    return {
      case_insensitive: !0,
      keywords: {
        keyword: "abs access after alias all and architecture array assert attribute begin block body buffer bus case component configuration constant context cover disconnect downto default else elsif end entity exit fairness file for force function generate generic group guarded if impure in inertial inout is label library linkage literal loop map mod nand new next nor not null of on open or others out package port postponed procedure process property protected pure range record register reject release rem report restrict restrict_guarantee return rol ror select sequence severity shared signal sla sll sra srl strong subtype then to transport type unaffected units until use variable vmode vprop vunit wait when while with xnor xor",
        built_in: "boolean bit character severity_level integer time delay_length natural positive string bit_vector file_open_kind file_open_status std_ulogic std_ulogic_vector std_logic std_logic_vector unsigned signed boolean_vector integer_vector real_vector time_vector"
      },
      illegal: "{",
      contains: [e.C_BLOCK_COMMENT_MODE, e.COMMENT("--", "$"), e.QUOTE_STRING_MODE, {
        className: "number",
        begin: o,
        relevance: 0
      }, {
        className: "literal",
        begin: "'(U|X|0|1|Z|W|L|H|-)'",
        contains: [e.BACKSLASH_ESCAPE]
      }, { className: "symbol", begin: "'[A-Za-z](_?[A-Za-z0-9])*", contains: [e.BACKSLASH_ESCAPE] }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      lexemes: /[!#@\w]+/,
      keywords: {
        keyword: "N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope cp cpf cq cr cs cst cu cuna cunme cw d|0 delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu g|0 go gr grepa gu gv ha h|0 helpf helpg helpt hi hid his i|0 ia iabc if ij il im imapc ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs n|0 new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf q|0 quita qa r|0 rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv s|0 sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync t|0 tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up v|0 ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank",
        built_in: "abs acos add and append argc argidx argv asin atan atan2 browse browsedir bufexists buflisted bufloaded bufname bufnr bufwinnr byte2line byteidx call ceil changenr char2nr cindent clearmatches col complete complete_add complete_check confirm copy cos cosh count cscope_connection cursor deepcopy delete did_filetype diff_filler diff_hlID empty escape eval eventhandler executable exists exp expand extend feedkeys filereadable filewritable filter finddir findfile float2nr floor fmod fnameescape fnamemodify foldclosed foldclosedend foldlevel foldtext foldtextresult foreground function garbagecollect get getbufline getbufvar getchar getcharmod getcmdline getcmdpos getcmdtype getcwd getfontname getfperm getfsize getftime getftype getline getloclist getmatches getpid getpos getqflist getreg getregtype gettabvar gettabwinvar getwinposx getwinposy getwinvar glob globpath has has_key haslocaldir hasmapto histadd histdel histget histnr hlexists hlID hostname iconv indent index input inputdialog inputlist inputrestore inputsave inputsecret insert invert isdirectory islocked items join keys len libcall libcallnr line line2byte lispindent localtime log log10 luaeval map maparg mapcheck match matchadd matcharg matchdelete matchend matchlist matchstr max min mkdir mode mzeval nextnonblank nr2char or pathshorten pow prevnonblank printf pumvisible py3eval pyeval range readfile reltime reltimestr remote_expr remote_foreground remote_peek remote_read remote_send remove rename repeat resolve reverse round screenattr screenchar screencol screenrow search searchdecl searchpair searchpairpos searchpos server2client serverlist setbufvar setcmdpos setline setloclist setmatches setpos setqflist setreg settabvar settabwinvar setwinvar sha256 shellescape shiftwidth simplify sin sinh sort soundfold spellbadword spellsuggest split sqrt str2float str2nr strchars strdisplaywidth strftime stridx string strlen strpart strridx strtrans strwidth submatch substitute synconcealed synID synIDattr synIDtrans synstack system tabpagebuflist tabpagenr tabpagewinnr tagfiles taglist tan tanh tempname tolower toupper tr trunc type undofile undotree values virtcol visualmode wildmenumode winbufnr wincol winheight winline winnr winrestcmd winrestview winsaveview winwidth writefile xor"
      },
      illegal: /[{:]/,
      contains: [e.NUMBER_MODE, e.APOS_STRING_MODE, {
        className: "string",
        begin: /"((\\")|[^"\n])*("|\n)/
      }, { className: "variable", begin: /[bwtglsav]:[\w\d_]*/ }, {
        className: "function",
        beginKeywords: "function function!",
        end: "$",
        relevance: 0,
        contains: [e.TITLE_MODE, { className: "params", begin: "\\(", end: "\\)" }]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    return {
      case_insensitive: !0,
      lexemes: "[.%]?" + e.IDENT_RE,
      keywords: {
        keyword: "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63",
        built_in: "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr",
        meta: "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__"
      },
      contains: [e.COMMENT(";", "$", { relevance: 0 }), {
        className: "number",
        variants: [{
          begin: "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*\\.?[0-9_]*(?:[pP](?:[+-]?[0-9_]+)?)?)\\b",
          relevance: 0
        }, {
          begin: "\\$[0-9][0-9A-Fa-f]*",
          relevance: 0
        }, { begin: "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b" }, { begin: "\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b" }]
      }, e.QUOTE_STRING_MODE, {
        className: "string",
        variants: [{ begin: "'", end: "[^\\\\]'" }, { begin: "`", end: "[^\\\\]`" }, { begin: "\\.[A-Za-z0-9]+" }],
        relevance: 0
      }, {
        className: "symbol",
        variants: [{ begin: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)" }, { begin: "^\\s*%%[A-Za-z0-9_$#@~.?]*:" }],
        relevance: 0
      }, { className: "subst", begin: "%[0-9]+", relevance: 0 }, { className: "subst", begin: "%!S+", relevance: 0 }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts", n = {
      keyword: "if then else do while until for loop import with is as where when by data constant integer real text name boolean symbol infix prefix postfix block tree",
      literal: "true false nil",
      built_in: "in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin acos atan exp expm1 log log2 log10 log1p pi at text_length text_range text_find text_replace contains page slide basic_slide title_slide title subtitle fade_in fade_out fade_at clear_color color line_color line_width texture_wrap texture_transform texture scale_?x scale_?y scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y rotate_?z? rectangle circle ellipse sphere path line_to move_to quad_to curve_to theme background contents locally time mouse_?x mouse_?y mouse_buttons " + t
    }, r = { className: "string", begin: '"', end: '"', illegal: "\\n" }, i = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n"
    }, a = { className: "string", begin: "<<", end: ">>" }, o = {
      className: "number",
      begin: "[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?"
    }, s = { beginKeywords: "import", end: "$", keywords: n, contains: [r] }, l = {
      className: "function",
      begin: /[a-z][^\n]*->/,
      returnBegin: !0,
      end: /->/,
      contains: [e.inherit(e.TITLE_MODE, { starts: { endsWithParent: !0, keywords: n } })]
    };
    return {
      aliases: ["tao"],
      lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,
      keywords: n,
      contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, r, i, a, l, s, o, e.NUMBER_MODE]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "[A-Za-z0-9\\._:-]+", n = {
      begin: /<\?(php)?(?!\w)/,
      end: /\?>/,
      subLanguage: "php"
    }, r = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [n, { className: "attr", begin: t, relevance: 0 }, {
        begin: "=",
        relevance: 0,
        contains: [{
          className: "string",
          contains: [n],
          variants: [{ begin: /"/, end: /"/ }, { begin: /'/, end: /'/ }, { begin: /[^\s\/>]+/ }]
        }]
      }]
    };
    return {
      aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
      case_insensitive: !0,
      contains: [{
        className: "meta",
        begin: "<!DOCTYPE",
        end: ">",
        relevance: 10,
        contains: [{ begin: "\\[", end: "\\]" }]
      }, e.COMMENT("<!--", "-->", { relevance: 10 }), {
        begin: "<\\!\\[CDATA\\[",
        end: "\\]\\]>",
        relevance: 10
      }, {
        className: "tag",
        begin: "<style(?=\\s|>|$)",
        end: ">",
        keywords: { name: "style" },
        contains: [r],
        starts: { end: "</style>", returnEnd: !0, subLanguage: ["css", "xml"] }
      }, {
        className: "tag",
        begin: "<script(?=\\s|>|$)",
        end: ">",
        keywords: { name: "script" },
        contains: [r],
        starts: { end: "</script>", returnEnd: !0, subLanguage: ["actionscript", "javascript", "handlebars", "xml"] }
      }, n, { className: "meta", begin: /<\?\w+/, end: /\?>/, relevance: 10 }, {
        className: "tag",
        begin: "</?",
        end: "/?>",
        contains: [{ className: "name", begin: /[^\/><\s]+/, relevance: 0 }, r]
      }]
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = "for let if while then else return where group by xquery encoding versionmodule namespace boundary-space preserve strip default collation base-uri orderingcopy-namespaces order declare import schema namespace function option in allowing emptyat tumbling window sliding window start when only end when previous next stable ascendingdescending empty greatest least some every satisfies switch case typeswitch try catch andor to union intersect instance of treat as castable cast map array delete insert intoreplace value rename copy modify update", n = "false true xs:string xs:integer element item xs:date xs:datetime xs:float xs:double xs:decimal QName xs:anyURI xs:long xs:int xs:short xs:byte attribute", r = {
      begin: /\$[a-zA-Z0-9\-]+/,
      relevance: 5
    }, i = {
      className: "number",
      begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      relevance: 0
    }, a = {
      className: "string",
      variants: [{ begin: /"/, end: /"/, contains: [{ begin: /""/, relevance: 0 }] }, {
        begin: /'/,
        end: /'/,
        contains: [{ begin: /''/, relevance: 0 }]
      }]
    }, o = { className: "meta", begin: "%\\w+" }, s = {
      className: "comment",
      begin: "\\(:",
      end: ":\\)",
      relevance: 10,
      contains: [{ className: "doctag", begin: "@\\w+" }]
    }, l = { begin: "{", end: "}" }, c = [r, a, i, s, o, l];
    return l.contains = c, {
      aliases: ["xpath", "xq"],
      case_insensitive: !1,
      lexemes: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
      illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
      keywords: { keyword: t, literal: n },
      contains: c
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = { literal: "{ } true false yes no Yes No True False null" }, n = "^[ \\-]*", r = "[a-zA-Z_][\\w\\-]*", i = {
      className: "attr",
      variants: [{ begin: n + r + ":" }, { begin: n + '"' + r + '":' }, { begin: n + "'" + r + "':" }]
    }, a = {
      className: "template-variable",
      variants: [{ begin: "{{", end: "}}" }, { begin: "%{", end: "}" }]
    }, o = {
      className: "string",
      relevance: 0,
      variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }],
      contains: [e.BACKSLASH_ESCAPE, a]
    };
    return {
      case_insensitive: !0,
      aliases: ["yml", "YAML", "yaml"],
      contains: [i, { className: "meta", begin: "^---s*$", relevance: 10 }, {
        className: "string",
        begin: "[\\|>] *$",
        returnEnd: !0,
        contains: o.contains,
        end: i.variants[0].begin
      }, {
        begin: "<%[%=-]?",
        end: "[%-]?%>",
        subLanguage: "ruby",
        excludeBegin: !0,
        excludeEnd: !0,
        relevance: 0
      }, { className: "type", begin: "!!" + e.UNDERSCORE_IDENT_RE }, {
        className: "meta",
        begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
      }, { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" }, {
        className: "bullet",
        begin: "^ *-",
        relevance: 0
      }, o, e.HASH_COMMENT_MODE, e.C_NUMBER_MODE],
      keywords: t
    }
  }
}, function (e, t) {
  e.exports = function (e) {
    var t = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [{ begin: 'b"', end: '"' }, {
        begin: "b'",
        end: "'"
      }, e.inherit(e.APOS_STRING_MODE, { illegal: null }), e.inherit(e.QUOTE_STRING_MODE, { illegal: null })]
    }, n = { variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE] };
    return {
      aliases: ["zep"],
      case_insensitive: !0,
      keywords: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var let while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally int uint long ulong char uchar double float bool boolean stringlikely unlikely",
      contains: [e.C_LINE_COMMENT_MODE, e.HASH_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
        contains: [{
          className: "doctag",
          begin: "@[A-Za-z]+"
        }]
      }), e.COMMENT("__halt_compiler.+?;", !1, {
        endsWithParent: !0,
        keywords: "__halt_compiler",
        lexemes: e.UNDERSCORE_IDENT_RE
      }), {
        className: "string",
        begin: "<<<['\"]?\\w+['\"]?$",
        end: "^\\w+;",
        contains: [e.BACKSLASH_ESCAPE]
      }, { begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ }, {
        className: "function",
        beginKeywords: "function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "\\$|\\[|%",
        contains: [e.UNDERSCORE_TITLE_MODE, {
          className: "params",
          begin: "\\(",
          end: "\\)",
          contains: ["self", e.C_BLOCK_COMMENT_MODE, t, n]
        }]
      }, {
        className: "class",
        beginKeywords: "class interface",
        end: "{",
        excludeEnd: !0,
        illegal: /[:\(\$"]/,
        contains: [{ beginKeywords: "extends implements" }, e.UNDERSCORE_TITLE_MODE]
      }, {
        beginKeywords: "namespace",
        end: ";",
        illegal: /[\.']/,
        contains: [e.UNDERSCORE_TITLE_MODE]
      }, { beginKeywords: "use", end: ";", contains: [e.UNDERSCORE_TITLE_MODE] }, { begin: "=>" }, t, n]
    }
  }
}, function (e, t, n) {
  (function (t) {
    (function () {
      function t(e) {
        this.tokens = [], this.tokens.links = {}, this.options = e || d.defaults, this.rules = u.normal, this.options.gfm && (this.options.tables ? this.rules = u.tables : this.rules = u.gfm)
      }

      function n(e, t) {
        if (this.options = t || d.defaults, this.links = e, this.rules = m.normal, this.renderer = this.options.renderer || new r, this.renderer.options = this.options, !this.links)throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.options.breaks ? this.rules = m.breaks : this.rules = m.gfm : this.options.pedantic && (this.rules = m.pedantic)
      }

      function r(e) {
        this.options = e || {}
      }

      function i(e) {
        this.tokens = [], this.token = null, this.options = e || d.defaults, this.options.renderer = this.options.renderer || new r, this.renderer = this.options.renderer, this.renderer.options = this.options
      }

      function a(e, t) {
        return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
      }

      function o(e) {
        return e.replace(/&([#\w]+);/g, function (e, t) {
          return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""
        })
      }

      function s(e, t) {
        return e = e.source, t = t || "", function n(r, i) {
          return r ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(r, i), n) : new RegExp(e, t)
        }
      }

      function l() {
      }

      function c(e) {
        for (var t, n, r = 1; r < arguments.length; r++) {
          t = arguments[r];
          for (n in t)Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
      }

      function d(e, n, r) {
        if (r || "function" == typeof n) {
          r || (r = n, n = null), n = c({}, d.defaults, n || {});
          var o, s, l = n.highlight, u = 0;
          try {
            o = t.lex(e, n)
          } catch (m) {
            return r(m)
          }
          s = o.length;
          var p = function (e) {
            if (e)return n.highlight = l, r(e);
            var t;
            try {
              t = i.parse(o, n)
            } catch (a) {
              e = a
            }
            return n.highlight = l, e ? r(e) : r(null, t)
          };
          if (!l || l.length < 3)return p();
          if (delete n.highlight, !s)return p();
          for (; u < o.length; u++)!function (e) {
            return "code" !== e.type ? --s || p() : l(e.text, e.lang, function (t, n) {
              return t ? p(t) : null == n || n === e.text ? --s || p() : (e.text = n, e.escaped = !0, void(--s || p()))
            })
          }(o[u])
        } else try {
          return n && (n = c({}, d.defaults, n)), i.parse(t.lex(e, n), n)
        } catch (m) {
          if (m.message += "\nPlease report this to https://github.com/chjj/marked.", (n || d.defaults).silent)return "<p>An error occured:</p><pre>" + a(m.message + "", !0) + "</pre>";
          throw m
        }
      }

      var u = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: l,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: l,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: l,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
      };
      u.bullet = /(?:[*+-]|\d+\.)/, u.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, u.item = s(u.item, "gm")(/bull/g, u.bullet)(), u.list = s(u.list)(/bull/g, u.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + u.def.source + ")")(), u.blockquote = s(u.blockquote)("def", u.def)(), u._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", u.html = s(u.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, u._tag)(), u.paragraph = s(u.paragraph)("hr", u.hr)("heading", u.heading)("lheading", u.lheading)("blockquote", u.blockquote)("tag", "<" + u._tag)("def", u.def)(), u.normal = c({}, u), u.gfm = c({}, u.normal, {
        fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/,
        heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
      }), u.gfm.paragraph = s(u.paragraph)("(?!", "(?!" + u.gfm.fences.source.replace("\\1", "\\2") + "|" + u.list.source.replace("\\1", "\\3") + "|")(), u.tables = c({}, u.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
      }), t.rules = u, t.lex = function (e, n) {
        var r = new t(n);
        return r.lex(e)
      }, t.prototype.lex = function (e) {
        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0)
      }, t.prototype.token = function (e, t, n) {
        for (var r, i, a, o, s, l, c, d, m, e = e.replace(/^ +$/gm, ""); e;)if ((a = this.rules.newline.exec(e)) && (e = e.substring(a[0].length), a[0].length > 1 && this.tokens.push({ type: "space" })), a = this.rules.code.exec(e))e = e.substring(a[0].length), a = a[0].replace(/^ {4}/gm, ""), this.tokens.push({
          type: "code",
          text: this.options.pedantic ? a : a.replace(/\n+$/, "")
        }); else if (a = this.rules.fences.exec(e))e = e.substring(a[0].length), this.tokens.push({
          type: "code",
          lang: a[2],
          text: a[3] || ""
        }); else if (a = this.rules.heading.exec(e))e = e.substring(a[0].length), this.tokens.push({
          type: "heading",
          depth: a[1].length,
          text: a[2]
        }); else if (t && (a = this.rules.nptable.exec(e))) {
          for (e = e.substring(a[0].length), l = {
            type: "table",
            header: a[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
            align: a[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            cells: a[3].replace(/\n$/, "").split("\n")
          }, d = 0; d < l.align.length; d++)/^ *-+: *$/.test(l.align[d]) ? l.align[d] = "right" : /^ *:-+: *$/.test(l.align[d]) ? l.align[d] = "center" : /^ *:-+ *$/.test(l.align[d]) ? l.align[d] = "left" : l.align[d] = null;
          for (d = 0; d < l.cells.length; d++)l.cells[d] = l.cells[d].split(/ *\| */);
          this.tokens.push(l)
        } else if (a = this.rules.lheading.exec(e))e = e.substring(a[0].length), this.tokens.push({
          type: "heading",
          depth: "=" === a[2] ? 1 : 2,
          text: a[1]
        }); else if (a = this.rules.hr.exec(e))e = e.substring(a[0].length), this.tokens.push({ type: "hr" }); else if (a = this.rules.blockquote.exec(e))e = e.substring(a[0].length), this.tokens.push({ type: "blockquote_start" }), a = a[0].replace(/^ *> ?/gm, ""), this.token(a, t, !0), this.tokens.push({ type: "blockquote_end" }); else if (a = this.rules.list.exec(e)) {
          for (e = e.substring(a[0].length), o = a[2], this.tokens.push({
            type: "list_start",
            ordered: o.length > 1
          }), a = a[0].match(this.rules.item), r = !1, m = a.length, d = 0; m > d; d++)l = a[d], c = l.length, l = l.replace(/^ *([*+-]|\d+\.) +/, ""), ~l.indexOf("\n ") && (c -= l.length, l = this.options.pedantic ? l.replace(/^ {1,4}/gm, "") : l.replace(new RegExp("^ {1," + c + "}", "gm"), "")), this.options.smartLists && d !== m - 1 && (s = u.bullet.exec(a[d + 1])[0], o === s || o.length > 1 && s.length > 1 || (e = a.slice(d + 1).join("\n") + e, d = m - 1)), i = r || /\n\n(?!\s*$)/.test(l), d !== m - 1 && (r = "\n" === l.charAt(l.length - 1), i || (i = r)), this.tokens.push({ type: i ? "loose_item_start" : "list_item_start" }), this.token(l, !1, n), this.tokens.push({ type: "list_item_end" });
          this.tokens.push({ type: "list_end" })
        } else if (a = this.rules.html.exec(e))e = e.substring(a[0].length), this.tokens.push({
          type: this.options.sanitize ? "paragraph" : "html",
          pre: !this.options.sanitizer && ("pre" === a[1] || "script" === a[1] || "style" === a[1]),
          text: a[0]
        }); else if (!n && t && (a = this.rules.def.exec(e)))e = e.substring(a[0].length), this.tokens.links[a[1].toLowerCase()] = {
          href: a[2],
          title: a[3]
        }; else if (t && (a = this.rules.table.exec(e))) {
          for (e = e.substring(a[0].length), l = {
            type: "table",
            header: a[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
            align: a[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            cells: a[3].replace(/(?: *\| *)?\n$/, "").split("\n")
          }, d = 0; d < l.align.length; d++)/^ *-+: *$/.test(l.align[d]) ? l.align[d] = "right" : /^ *:-+: *$/.test(l.align[d]) ? l.align[d] = "center" : /^ *:-+ *$/.test(l.align[d]) ? l.align[d] = "left" : l.align[d] = null;
          for (d = 0; d < l.cells.length; d++)l.cells[d] = l.cells[d].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
          this.tokens.push(l)
        } else if (t && (a = this.rules.paragraph.exec(e)))e = e.substring(a[0].length), this.tokens.push({
          type: "paragraph",
          text: "\n" === a[1].charAt(a[1].length - 1) ? a[1].slice(0, -1) : a[1]
        }); else if (a = this.rules.text.exec(e))e = e.substring(a[0].length), this.tokens.push({
          type: "text",
          text: a[0]
        }); else if (e)throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
        return this.tokens
      };
      var m = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: l,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: l,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
      };
      m._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, m._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, m.link = s(m.link)("inside", m._inside)("href", m._href)(), m.reflink = s(m.reflink)("inside", m._inside)(), m.normal = c({}, m), m.pedantic = c({}, m.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
      }), m.gfm = c({}, m.normal, {
        escape: s(m.escape)("])", "~|])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: s(m.text)("]|", "~]|")("|", "|https?://|")()
      }), m.breaks = c({}, m.gfm, {
        br: s(m.br)("{2,}", "*")(),
        text: s(m.gfm.text)("{2,}", "*")()
      }), n.rules = m, n.output = function (e, t, r) {
        var i = new n(t, r);
        return i.output(e)
      }, n.prototype.output = function (e) {
        for (var t, n, r, i, o = ""; e;)if (i = this.rules.escape.exec(e))e = e.substring(i[0].length), o += i[1]; else if (i = this.rules.autolink.exec(e))e = e.substring(i[0].length), "@" === i[2] ? (n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1]), r = this.mangle("mailto:") + n) : (n = a(i[1]), r = n), o += this.renderer.link(r, null, n); else if (this.inLink || !(i = this.rules.url.exec(e))) {
          if (i = this.rules.tag.exec(e))!this.inLink && /^<a /i.test(i[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1), e = e.substring(i[0].length), o += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : a(i[0]) : i[0]; else if (i = this.rules.link.exec(e))e = e.substring(i[0].length), this.inLink = !0, o += this.outputLink(i, {
            href: i[2],
            title: i[3]
          }), this.inLink = !1; else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
            if (e = e.substring(i[0].length), t = (i[2] || i[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) {
              o += i[0].charAt(0), e = i[0].substring(1) + e;
              continue
            }
            this.inLink = !0, o += this.outputLink(i, t), this.inLink = !1
          } else if (i = this.rules.strong.exec(e))e = e.substring(i[0].length), o += this.renderer.strong(this.output(i[2] || i[1])); else if (i = this.rules.em.exec(e))e = e.substring(i[0].length), o += this.renderer.em(this.output(i[2] || i[1])); else if (i = this.rules.code.exec(e))e = e.substring(i[0].length), o += this.renderer.codespan(a(i[2], !0)); else if (i = this.rules.br.exec(e))e = e.substring(i[0].length), o += this.renderer.br(); else if (i = this.rules.del.exec(e))e = e.substring(i[0].length), o += this.renderer.del(this.output(i[1])); else if (i = this.rules.text.exec(e))e = e.substring(i[0].length), o += this.renderer.text(a(this.smartypants(i[0]))); else if (e)throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
        } else e = e.substring(i[0].length), n = a(i[1]), r = n, o += this.renderer.link(r, null, n);
        return o
      }, n.prototype.outputLink = function (e, t) {
        var n = a(t.href), r = t.title ? a(t.title) : null;
        return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, a(e[1]))
      }, n.prototype.smartypants = function (e) {
        return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e
      }, n.prototype.mangle = function (e) {
        if (!this.options.mangle)return e;
        for (var t, n = "", r = e.length, i = 0; r > i; i++)t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
        return n
      }, r.prototype.code = function (e, t, n) {
        if (this.options.highlight) {
          var r = this.options.highlight(e, t);
          null != r && r !== e && (n = !0, e = r)
        }
        return t ? '<pre><code class="' + this.options.langPrefix + a(t, !0) + '">' + (n ? e : a(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : a(e, !0)) + "\n</code></pre>"
      }, r.prototype.blockquote = function (e) {
        return "<blockquote>\n" + e + "</blockquote>\n"
      }, r.prototype.html = function (e) {
        return e
      }, r.prototype.heading = function (e, t, n) {
        return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n"
      }, r.prototype.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
      }, r.prototype.list = function (e, t) {
        var n = t ? "ol" : "ul";
        return "<" + n + ">\n" + e + "</" + n + ">\n"
      }, r.prototype.listitem = function (e) {
        return "<li>" + e + "</li>\n"
      }, r.prototype.paragraph = function (e) {
        return "<p>" + e + "</p>\n"
      }, r.prototype.table = function (e, t) {
        return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n"
      }, r.prototype.tablerow = function (e) {
        return "<tr>\n" + e + "</tr>\n"
      }, r.prototype.tablecell = function (e, t) {
        var n = t.header ? "th" : "td", r = t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">";
        return r + e + "</" + n + ">\n"
      }, r.prototype.strong = function (e) {
        return "<strong>" + e + "</strong>"
      }, r.prototype.em = function (e) {
        return "<em>" + e + "</em>"
      }, r.prototype.codespan = function (e) {
        return "<code>" + e + "</code>"
      }, r.prototype.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>"
      }, r.prototype.del = function (e) {
        return "<del>" + e + "</del>"
      }, r.prototype.link = function (e, t, n) {
        if (this.options.sanitize) {
          try {
            var r = decodeURIComponent(o(e)).replace(/[^\w:]/g, "").toLowerCase()
          } catch (i) {
            return ""
          }
          if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:"))return ""
        }
        var a = '<a href="' + e + '"';
        return t && (a += ' title="' + t + '"'), a += ">" + n + "</a>"
      }, r.prototype.image = function (e, t, n) {
        var r = '<img src="' + e + '" alt="' + n + '"';
        return t && (r += ' title="' + t + '"'), r += this.options.xhtml ? "/>" : ">"
      }, r.prototype.text = function (e) {
        return e
      }, i.parse = function (e, t, n) {
        var r = new i(t, n);
        return r.parse(e)
      }, i.prototype.parse = function (e) {
        this.inline = new n(e.links, this.options, this.renderer), this.tokens = e.reverse();
        for (var t = ""; this.next();)t += this.tok();
        return t
      }, i.prototype.next = function () {
        return this.token = this.tokens.pop()
      }, i.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0
      }, i.prototype.parseText = function () {
        for (var e = this.token.text; "text" === this.peek().type;)e += "\n" + this.next().text;
        return this.inline.output(e)
      }, i.prototype.tok = function () {
        switch (this.token.type) {
          case"space":
            return "";
          case"hr":
            return this.renderer.hr();
          case"heading":
            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
          case"code":
            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
          case"table":
            var e, t, n, r, i, a = "", o = "";
            for (n = "", e = 0; e < this.token.header.length; e++)r = {
              header: !0,
              align: this.token.align[e]
            }, n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
              header: !0,
              align: this.token.align[e]
            });
            for (a += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
              for (t = this.token.cells[e], n = "", i = 0; i < t.length; i++)n += this.renderer.tablecell(this.inline.output(t[i]), {
                header: !1,
                align: this.token.align[i]
              });
              o += this.renderer.tablerow(n)
            }
            return this.renderer.table(a, o);
          case"blockquote_start":
            for (var o = ""; "blockquote_end" !== this.next().type;)o += this.tok();
            return this.renderer.blockquote(o);
          case"list_start":
            for (var o = "", s = this.token.ordered; "list_end" !== this.next().type;)o += this.tok();
            return this.renderer.list(o, s);
          case"list_item_start":
            for (var o = ""; "list_item_end" !== this.next().type;)o += "text" === this.token.type ? this.parseText() : this.tok();
            return this.renderer.listitem(o);
          case"loose_item_start":
            for (var o = ""; "list_item_end" !== this.next().type;)o += this.tok();
            return this.renderer.listitem(o);
          case"html":
            var l = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
            return this.renderer.html(l);
          case"paragraph":
            return this.renderer.paragraph(this.inline.output(this.token.text));
          case"text":
            return this.renderer.paragraph(this.parseText())
        }
      }, l.exec = l, d.options = d.setOptions = function (e) {
        return c(d.defaults, e), d
      }, d.defaults = {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        sanitizer: null,
        mangle: !0,
        smartLists: !1,
        silent: !1,
        highlight: null,
        langPrefix: "lang-",
        smartypants: !1,
        headerPrefix: "",
        renderer: new r,
        xhtml: !1
      }, d.Parser = i, d.parser = i.parse, d.Renderer = r, d.Lexer = t, d.lexer = t.lex, d.InlineLexer = n, d.inlineLexer = n.output, d.parse = d, e.exports = d
    }).call(function () {
      return this || ("undefined" != typeof window ? window : t)
    }())
  }).call(t, function () {
    return this
  }())
}]);
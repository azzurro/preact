var n = require('preact/hooks'),
	t = require('preact');
function e(n, t) {
	for (var e in t) n[e] = t[e];
	return n;
}
function r(n, t) {
	for (var e in n) if ('__source' !== e && !(e in t)) return !0;
	for (var r in t) if ('__source' !== r && n[r] !== t[r]) return !0;
	return !1;
}
var o = (function(n) {
	var t, e;
	function o(t) {
		var e;
		return ((e = n.call(this, t) || this).isPureReactComponent = !0), e;
	}
	return (
		(e = n),
		((t = o).prototype = Object.create(e.prototype)),
		(t.prototype.constructor = t),
		(t.__proto__ = e),
		(o.prototype.shouldComponentUpdate = function(n, t) {
			return r(this.props, n) || r(this.state, t);
		}),
		o
	);
})(t.Component);
function u(n, o) {
	function u(n) {
		var t = this.props.ref,
			e = t == n.ref;
		return (
			!e && t && (t.call ? t(null) : (t.current = null)),
			o ? !o(this.props, n) || !e : r(this.props, n)
		);
	}
	function i(r) {
		return (this.shouldComponentUpdate = u), t.createElement(n, e({}, r));
	}
	return (
		(i.prototype.isReactComponent = !0),
		(i.displayName = 'Memo(' + (n.displayName || n.name) + ')'),
		(i.t = !0),
		i
	);
}
var i = t.options.__b;
function f(n) {
	function t(t) {
		var r = e({}, t);
		return delete r.ref, n(r, t.ref);
	}
	return (
		(t.prototype.isReactComponent = t.t = !0),
		(t.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
		t
	);
}
t.options.__b = function(n) {
	n.type && n.type.t && n.ref && ((n.props.ref = n.ref), (n.ref = null)),
		i && i(n);
};
var c = function(n, e) {
		return n
			? t.toChildArray(n).reduce(function(n, t, r) {
					return n.concat(e(t, r));
			  }, [])
			: null;
	},
	l = {
		map: c,
		forEach: c,
		count: function(n) {
			return n ? t.toChildArray(n).length : 0;
		},
		only: function(n) {
			if (1 !== (n = t.toChildArray(n)).length)
				throw new Error('Children.only() expects only one child.');
			return n[0];
		},
		toArray: t.toChildArray
	},
	a = t.options.__e;
function s(n) {
	return n && (((n = e({}, n)).__c = null), (n.__k = n.__k && n.__k.map(s))), n;
}
function p(n) {
	(this.__u = 0), (this.o = null), (this.__b = null);
}
function v(n) {
	var t = n.__.__c;
	return t && t.u && t.u(n);
}
function h(n) {
	var e, r, o;
	function u(u) {
		if (
			(e ||
				(e = n()).then(
					function(n) {
						r = n.default || n;
					},
					function(n) {
						o = n;
					}
				),
			o)
		)
			throw o;
		if (!r) throw e;
		return t.createElement(r, u);
	}
	return (u.displayName = 'Lazy'), (u.t = !0), u;
}
function d() {
	(this.i = null), (this.l = null);
}
(t.options.__e = function(n, t, e) {
	if (n.then)
		for (var r, o = t; (o = o.__); )
			if ((r = o.__c) && r.__c) return r.__c(n, t.__c);
	a(n, t, e);
}),
	((p.prototype = new t.Component()).__c = function(n, t) {
		var e = this;
		null == e.o && (e.o = []), e.o.push(t);
		var r = v(e.__v),
			o = !1,
			u = function() {
				o || ((o = !0), r ? r(i) : i());
			};
		(t.__c = t.componentWillUnmount),
			(t.componentWillUnmount = function() {
				u(), t.__c && t.__c();
			});
		var i = function() {
			var n;
			if (!--e.__u)
				for (
					e.__v.__k[0] = e.state.u, e.setState({ u: (e.__b = null) });
					(n = e.o.pop());

				)
					n.forceUpdate();
		};
		e.__u++ || e.setState({ u: (e.__b = e.__v.__k[0]) }), n.then(u, u);
	}),
	(p.prototype.render = function(n, e) {
		return (
			this.__b && ((this.__v.__k[0] = s(this.__b)), (this.__b = null)),
			[
				t.createElement(t.Component, null, e.u ? null : n.children),
				e.u && n.fallback
			]
		);
	});
var x = function(n, t, e) {
	if (
		(++e[1] === e[0] && n.l.delete(t),
		n.props.revealOrder && ('t' !== n.props.revealOrder[0] || !n.l.size))
	)
		for (e = n.i; e; ) {
			for (; e.length > 3; ) e.pop()();
			if (e[1] < e[0]) break;
			n.i = e = e[2];
		}
};
((d.prototype = new t.Component()).u = function(n) {
	var t = this,
		e = v(t.__v),
		r = t.l.get(n);
	return (
		r[0]++,
		function(o) {
			var u = function() {
				t.props.revealOrder ? (r.push(o), x(t, n, r)) : o();
			};
			e ? e(u) : u();
		}
	);
}),
	(d.prototype.render = function(n) {
		(this.i = null), (this.l = new Map());
		var e = t.toChildArray(n.children);
		n.revealOrder && 'b' === n.revealOrder[0] && e.reverse();
		for (var r = e.length; r--; ) this.l.set(e[r], (this.i = [1, 0, this.i]));
		return n.children;
	}),
	(d.prototype.componentDidUpdate = d.prototype.componentDidMount = function() {
		var n = this;
		n.l.forEach(function(t, e) {
			x(n, e, t);
		});
	});
var m = (function() {
	function n() {}
	var t = n.prototype;
	return (
		(t.getChildContext = function() {
			return this.props.context;
		}),
		(t.render = function(n) {
			return n.children;
		}),
		n
	);
})();
function y(n) {
	var e = this,
		r = n.container,
		o = t.createElement(m, { context: e.context }, n.vnode);
	return (
		e.s &&
			e.s !== r &&
			(e.p.parentNode && e.s.removeChild(e.p), t._e(e.v), (e.h = !1)),
		n.vnode
			? e.h
				? ((r.__k = e.__k), t.render(o, r), (e.__k = r.__k))
				: ((e.p = document.createTextNode('')),
				  t.hydrate('', r),
				  r.appendChild(e.p),
				  (e.h = !0),
				  (e.s = r),
				  t.render(o, r, e.p),
				  (e.__k = e.p.__k))
			: e.h && (e.p.parentNode && e.s.removeChild(e.p), t._e(e.v)),
		(e.v = o),
		(e.componentWillUnmount = function() {
			e.p.parentNode && e.s.removeChild(e.p), t._e(e.v);
		}),
		null
	);
}
function b(n, e) {
	return t.createElement(y, { vnode: n, container: e });
}
var g = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
t.Component.prototype.isReactComponent = {};
var w =
	('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element')) ||
	60103;
function E(n, e, r) {
	if (null == e.__k) for (; e.firstChild; ) e.removeChild(e.firstChild);
	return t.render(n, e), 'function' == typeof r && r(), n ? n.__c : null;
}
var _ = t.options.event;
function A(n, t) {
	n['UNSAFE_' + t] &&
		!n[t] &&
		Object.defineProperty(n, t, {
			configurable: !1,
			get: function() {
				return this['UNSAFE_' + t];
			},
			set: function(n) {
				this['UNSAFE_' + t] = n;
			}
		});
}
t.options.event = function(n) {
	_ && (n = _(n)), (n.persist = function() {});
	var t = !1,
		e = !1,
		r = n.stopPropagation;
	n.stopPropagation = function() {
		r.call(n), (t = !0);
	};
	var o = n.preventDefault;
	return (
		(n.preventDefault = function() {
			o.call(n), (e = !0);
		}),
		(n.isPropagationStopped = function() {
			return t;
		}),
		(n.isDefaultPrevented = function() {
			return e;
		}),
		(n.nativeEvent = n)
	);
};
var C = {
		configurable: !0,
		get: function() {
			return this.class;
		}
	},
	S = t.options.vnode;
function k(n) {
	return t.createElement.bind(null, n);
}
function N(n) {
	return !!n && n.$$typeof === w;
}
function R(n) {
	return N(n) ? t.cloneElement.apply(null, arguments) : n;
}
function U(n) {
	return !!n.__k && (t.render(null, n), !0);
}
function F(n) {
	return (n && (n.base || (1 === n.nodeType && n))) || null;
}
t.options.vnode = function(n) {
	n.$$typeof = w;
	var e = n.type,
		r = n.props;
	if (e) {
		if (
			(r.class != r.className &&
				((C.enumerable = 'className' in r),
				null != r.className && (r.class = r.className),
				Object.defineProperty(r, 'className', C)),
			'function' != typeof e)
		) {
			var o, u, i;
			for (i in (r.defaultValue &&
				void 0 !== r.value &&
				(r.value || 0 === r.value || (r.value = r.defaultValue),
				delete r.defaultValue),
			Array.isArray(r.value) &&
				r.multiple &&
				'select' === e &&
				(t.toChildArray(r.children).forEach(function(n) {
					-1 != r.value.indexOf(n.props.value) && (n.props.selected = !0);
				}),
				delete r.value),
			r))
				if ((o = g.test(i))) break;
			if (o)
				for (i in ((u = n.props = {}), r))
					u[g.test(i) ? i.replace(/[A-Z0-9]/, '-$&').toLowerCase() : i] = r[i];
		}
		!(function(t) {
			var e = n.type,
				r = n.props;
			if (r && 'string' == typeof e) {
				var o = {};
				for (var u in r)
					/^on(Ani|Tra|Tou)/.test(u) &&
						((r[u.toLowerCase()] = r[u]), delete r[u]),
						(o[u.toLowerCase()] = u);
				if (
					(o.ondoubleclick &&
						((r.ondblclick = r[o.ondoubleclick]), delete r[o.ondoubleclick]),
					o.onbeforeinput &&
						((r.onbeforeinput = r[o.onbeforeinput]), delete r[o.onbeforeinput]),
					o.onchange &&
						('textarea' === e ||
							('input' === e.toLowerCase() && !/^fil|che|ra/i.test(r.type))))
				) {
					var i = o.oninput || 'oninput';
					r[i] || ((r[i] = r[o.onchange]), delete r[o.onchange]);
				}
			}
		})(),
			'function' == typeof e &&
				!e.m &&
				e.prototype &&
				(A(e.prototype, 'componentWillMount'),
				A(e.prototype, 'componentWillReceiveProps'),
				A(e.prototype, 'componentWillUpdate'),
				(e.m = !0));
	}
	S && S(n);
};
var M = function(n, t) {
		return n(t);
	},
	O = {
		useState: n.useState,
		useReducer: n.useReducer,
		useEffect: n.useEffect,
		useLayoutEffect: n.useLayoutEffect,
		useRef: n.useRef,
		useImperativeHandle: n.useImperativeHandle,
		useMemo: n.useMemo,
		useCallback: n.useCallback,
		useContext: n.useContext,
		useDebugValue: n.useDebugValue,
		version: '16.8.0',
		Children: l,
		render: E,
		hydrate: E,
		unmountComponentAtNode: U,
		createPortal: b,
		createElement: t.createElement,
		createContext: t.createContext,
		createFactory: k,
		cloneElement: R,
		createRef: t.createRef,
		Fragment: t.Fragment,
		isValidElement: N,
		findDOMNode: F,
		Component: t.Component,
		PureComponent: o,
		memo: u,
		forwardRef: f,
		unstable_batchedUpdates: M,
		Suspense: p,
		SuspenseList: d,
		lazy: h
	};
Object.keys(n).forEach(function(t) {
	exports[t] = n[t];
}),
	(exports.createElement = t.createElement),
	(exports.createContext = t.createContext),
	(exports.createRef = t.createRef),
	(exports.Fragment = t.Fragment),
	(exports.Component = t.Component),
	(exports.version = '16.8.0'),
	(exports.Children = l),
	(exports.render = E),
	(exports.hydrate = function(n, e, r) {
		return t.hydrate(n, e), 'function' == typeof r && r(), n ? n.__c : null;
	}),
	(exports.unmountComponentAtNode = U),
	(exports.createPortal = b),
	(exports.createFactory = k),
	(exports.cloneElement = R),
	(exports.isValidElement = N),
	(exports.findDOMNode = F),
	(exports.PureComponent = o),
	(exports.memo = u),
	(exports.forwardRef = f),
	(exports.unstable_batchedUpdates = M),
	(exports.Suspense = p),
	(exports.SuspenseList = d),
	(exports.lazy = h),
	(exports.default = O);
//# sourceMappingURL=compat.js.map

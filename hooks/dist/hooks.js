var n,
	t,
	r,
	u = require('preact'),
	o = [],
	i = u.options.__r,
	e = u.options.diffed,
	c = u.options.__c,
	f = u.options.unmount;
function a(n) {
	u.options.__h && u.options.__h(t);
	var r = t.__H || (t.__H = { __: [], __h: [] });
	return n >= r.__.length && r.__.push({}), r.__[n];
}
function v(n) {
	return p(h, n);
}
function p(r, u, o) {
	var i = a(n++);
	return (
		i.__c ||
			((i.__c = t),
			(i.__ = [
				o ? o(u) : h(void 0, u),
				function(n) {
					var t = r(i.__[0], n);
					i.__[0] !== t && ((i.__[0] = t), i.__c.setState({}));
				}
			])),
		i.__
	);
}
function s(r, u) {
	var o = a(n++);
	d(o.__H, u) && ((o.__ = r), (o.__H = u), t.__h.push(o));
}
function x(t, r) {
	var u = a(n++);
	return d(u.__H, r) ? ((u.__H = r), (u.__h = t), (u.__ = t())) : u.__;
}
function l() {
	o.some(function(n) {
		if (n.__P)
			try {
				n.__H.__h.forEach(m), n.__H.__h.forEach(y), (n.__H.__h = []);
			} catch (t) {
				return u.options.__e(t, n.__v), !0;
			}
	}),
		(o = []);
}
function m(n) {
	n.t && n.t();
}
function y(n) {
	var t = n.__();
	'function' == typeof t && (n.t = t);
}
function d(n, t) {
	return (
		!n ||
		t.some(function(t, r) {
			return t !== n[r];
		})
	);
}
function h(n, t) {
	return 'function' == typeof t ? t(n) : t;
}
(u.options.__r = function(r) {
	i && i(r),
		(n = 0),
		(t = r.__c).__H &&
			(t.__H.__h.forEach(m), t.__H.__h.forEach(y), (t.__H.__h = []));
}),
	(u.options.diffed = function(n) {
		e && e(n);
		var t = n.__c;
		if (t) {
			var i = t.__H;
			i &&
				i.__h.length &&
				((1 !== o.push(t) && r === u.options.requestAnimationFrame) ||
					(
						(r = u.options.requestAnimationFrame) ||
						function(n) {
							var t,
								r = function() {
									clearTimeout(u), cancelAnimationFrame(t), setTimeout(n);
								},
								u = setTimeout(r, 100);
							'undefined' != typeof window && (t = requestAnimationFrame(r));
						}
					)(l));
		}
	}),
	(u.options.__c = function(n, t) {
		t.some(function(n) {
			try {
				n.__h.forEach(m),
					(n.__h = n.__h.filter(function(n) {
						return !n.__ || y(n);
					}));
			} catch (r) {
				t.some(function(n) {
					n.__h && (n.__h = []);
				}),
					(t = []),
					u.options.__e(r, n.__v);
			}
		}),
			c && c(n, t);
	}),
	(u.options.unmount = function(n) {
		f && f(n);
		var t = n.__c;
		if (t) {
			var r = t.__H;
			if (r)
				try {
					r.__.forEach(function(n) {
						return n.t && n.t();
					});
				} catch (n) {
					u.options.__e(n, t.__v);
				}
		}
	}),
	(exports.useState = v),
	(exports.useReducer = p),
	(exports.useEffect = function(r, u) {
		var o = a(n++);
		d(o.__H, u) && ((o.__ = r), (o.__H = u), t.__H.__h.push(o));
	}),
	(exports.useLayoutEffect = s),
	(exports.useRef = function(n) {
		return x(function() {
			return { current: n };
		}, []);
	}),
	(exports.useImperativeHandle = function(n, t, r) {
		s(
			function() {
				'function' == typeof n ? n(t()) : n && (n.current = t());
			},
			null == r ? r : r.concat(n)
		);
	}),
	(exports.useMemo = x),
	(exports.useCallback = function(n, t) {
		return x(function() {
			return n;
		}, t);
	}),
	(exports.useContext = function(r) {
		var u = t.context[r.__c];
		if (!u) return r.__;
		var o = a(n++);
		return null == o.__ && ((o.__ = !0), u.sub(t)), u.props.value;
	}),
	(exports.useDebugValue = function(n, t) {
		u.options.useDebugValue && u.options.useDebugValue(t ? t(n) : n);
	}),
	(exports.useErrorBoundary = function(r) {
		var u = a(n++),
			o = v();
		return (
			(u.__ = r),
			t.componentDidCatch ||
				(t.componentDidCatch = function(n) {
					u.__ && u.__(n), o[1](n);
				}),
			[
				o[0],
				function() {
					o[1](void 0);
				}
			]
		);
	});
//# sourceMappingURL=hooks.js.map

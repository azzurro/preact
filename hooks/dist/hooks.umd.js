!(function(n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], t)
		: t((n.preactHooks = {}), n.preact);
})(this, function(n, t) {
	var u,
		r,
		i,
		o = [],
		f = t.options.__r,
		e = t.options.diffed,
		c = t.options.__c,
		a = t.options.unmount;
	function v(n) {
		t.options.__h && t.options.__h(r);
		var u = r.__H || (r.__H = { __: [], __h: [] });
		return n >= u.__.length && u.__.push({}), u.__[n];
	}
	function p(n) {
		return d(T, n);
	}
	function d(n, t, i) {
		var o = v(u++);
		return (
			o.__c ||
				((o.__c = r),
				(o.__ = [
					i ? i(t) : T(void 0, t),
					function(t) {
						var u = n(o.__[0], t);
						o.__[0] !== u && ((o.__[0] = u), o.__c.setState({}));
					}
				])),
			o.__
		);
	}
	function y(n, t) {
		var i = v(u++);
		x(i.__H, t) && ((i.__ = n), (i.__H = t), r.__h.push(i));
	}
	function s(n, t) {
		var r = v(u++);
		return x(r.__H, t) ? ((r.__H = t), (r.__h = n), (r.__ = n())) : r.__;
	}
	function l() {
		o.some(function(n) {
			if (n.__P)
				try {
					n.__H.__h.forEach(m), n.__H.__h.forEach(h), (n.__H.__h = []);
				} catch (u) {
					return t.options.__e(u, n.__v), !0;
				}
		}),
			(o = []);
	}
	function m(n) {
		n.t && n.t();
	}
	function h(n) {
		var t = n.__();
		'function' == typeof t && (n.t = t);
	}
	function x(n, t) {
		return (
			!n ||
			t.some(function(t, u) {
				return t !== n[u];
			})
		);
	}
	function T(n, t) {
		return 'function' == typeof t ? t(n) : t;
	}
	(t.options.__r = function(n) {
		f && f(n),
			(u = 0),
			(r = n.__c).__H &&
				(r.__H.__h.forEach(m), r.__H.__h.forEach(h), (r.__H.__h = []));
	}),
		(t.options.diffed = function(n) {
			e && e(n);
			var u = n.__c;
			if (u) {
				var r = u.__H;
				r &&
					r.__h.length &&
					((1 !== o.push(u) && i === t.options.requestAnimationFrame) ||
						(
							(i = t.options.requestAnimationFrame) ||
							function(n) {
								var t,
									u = function() {
										clearTimeout(r), cancelAnimationFrame(t), setTimeout(n);
									},
									r = setTimeout(u, 100);
								'undefined' != typeof window && (t = requestAnimationFrame(u));
							}
						)(l));
			}
		}),
		(t.options.__c = function(n, u) {
			u.some(function(n) {
				try {
					n.__h.forEach(m),
						(n.__h = n.__h.filter(function(n) {
							return !n.__ || h(n);
						}));
				} catch (r) {
					u.some(function(n) {
						n.__h && (n.__h = []);
					}),
						(u = []),
						t.options.__e(r, n.__v);
				}
			}),
				c && c(n, u);
		}),
		(t.options.unmount = function(n) {
			a && a(n);
			var u = n.__c;
			if (u) {
				var r = u.__H;
				if (r)
					try {
						r.__.forEach(function(n) {
							return n.t && n.t();
						});
					} catch (n) {
						t.options.__e(n, u.__v);
					}
			}
		}),
		(n.useState = p),
		(n.useReducer = d),
		(n.useEffect = function(n, t) {
			var i = v(u++);
			x(i.__H, t) && ((i.__ = n), (i.__H = t), r.__H.__h.push(i));
		}),
		(n.useLayoutEffect = y),
		(n.useRef = function(n) {
			return s(function() {
				return { current: n };
			}, []);
		}),
		(n.useImperativeHandle = function(n, t, u) {
			y(
				function() {
					'function' == typeof n ? n(t()) : n && (n.current = t());
				},
				null == u ? u : u.concat(n)
			);
		}),
		(n.useMemo = s),
		(n.useCallback = function(n, t) {
			return s(function() {
				return n;
			}, t);
		}),
		(n.useContext = function(n) {
			var t = r.context[n.__c];
			if (!t) return n.__;
			var i = v(u++);
			return null == i.__ && ((i.__ = !0), t.sub(r)), t.props.value;
		}),
		(n.useDebugValue = function(n, u) {
			t.options.useDebugValue && t.options.useDebugValue(u ? u(n) : n);
		}),
		(n.useErrorBoundary = function(n) {
			var t = v(u++),
				i = p();
			return (
				(t.__ = n),
				r.componentDidCatch ||
					(r.componentDidCatch = function(n) {
						t.__ && t.__(n), i[1](n);
					}),
				[
					i[0],
					function() {
						i[1](void 0);
					}
				]
			);
		});
});
//# sourceMappingURL=hooks.umd.js.map

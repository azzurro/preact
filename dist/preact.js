var n,
	l,
	u,
	t,
	i,
	o,
	r,
	f,
	e = {},
	c = [],
	s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
function a(n, l) {
	for (var u in l) n[u] = l[u];
	return n;
}
function p(n) {
	var l = n.parentNode;
	l && l.removeChild(n);
}
function v(n, l, u) {
	var t,
		i = arguments,
		o = {};
	for (t in l) 'key' !== t && 'ref' !== t && (o[t] = l[t]);
	if (arguments.length > 3)
		for (u = [u], t = 3; t < arguments.length; t++) u.push(i[t]);
	if (
		(null != u && (o.children = u),
		'function' == typeof n && null != n.defaultProps)
	)
		for (t in n.defaultProps) void 0 === o[t] && (o[t] = n.defaultProps[t]);
	return h(n, o, l && l.key, l && l.ref);
}
function h(l, u, t, i) {
	var o = {
		type: l,
		props: u,
		key: t,
		ref: i,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		constructor: void 0
	};
	return n.vnode && n.vnode(o), o;
}
function y(n) {
	return n.children;
}
function d(n, l) {
	(this.props = n), (this.context = l);
}
function x(n, l) {
	if (null == l) return n.__ ? x(n.__, n.__.__k.indexOf(n) + 1) : null;
	for (var u; l < n.__k.length; l++)
		if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
	return 'function' == typeof n.type ? x(n) : null;
}
function m(n) {
	var l, u;
	if (null != (n = n.__) && null != n.__c) {
		for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
			if (null != (u = n.__k[l]) && null != u.__e) {
				n.__e = n.__c.base = u.__e;
				break;
			}
		return m(n);
	}
}
function w(l) {
	((!l.__d && (l.__d = !0) && u.push(l) && !t++) ||
		o !== n.debounceRendering) &&
		((o = n.debounceRendering) || i)(g);
}
function g() {
	for (var n; (t = u.length); )
		(n = u.sort(function(n, l) {
			return n.__v.__b - l.__v.__b;
		})),
			(u = []),
			n.some(function(n) {
				var l, u, t, i, o, r;
				n.__d &&
					((o = (i = (l = n).__v).__e),
					(r = l.__P) &&
						((u = []),
						(t = z(
							r,
							i,
							a({}, i),
							l.__n,
							void 0 !== r.ownerSVGElement,
							null,
							u,
							null == o ? x(i) : o
						)),
						A(u, i),
						t != o && m(i)));
			});
}
function k(n, l, u, t, i, o, r, f, s) {
	var a,
		v,
		h,
		y,
		d,
		m,
		w,
		g = (u && u.__k) || c,
		k = g.length;
	if (
		(f == e && (f = null != o ? o[0] : k ? x(u, 0) : null),
		(a = 0),
		(l.__k = _(l.__k, function(u) {
			if (null != u) {
				if (
					((u.__ = l),
					(u.__b = l.__b + 1),
					null === (h = g[a]) || (h && u.key == h.key && u.type === h.type))
				)
					g[a] = void 0;
				else
					for (v = 0; v < k; v++) {
						if ((h = g[v]) && u.key == h.key && u.type === h.type) {
							g[v] = void 0;
							break;
						}
						h = null;
					}
				if (
					((y = z(n, u, (h = h || e), t, i, o, r, f, s)),
					(v = u.ref) &&
						h.ref != v &&
						(w || (w = []),
						h.ref && w.push(h.ref, null, u),
						w.push(v, u.__c || y, u)),
					null != y)
				) {
					var c;
					if ((null == m && (m = y), void 0 !== u.__d))
						(c = u.__d), (u.__d = void 0);
					else if (o == h || y != f || null == y.parentNode) {
						n: if (null == f || f.parentNode !== n)
							n.appendChild(y), (c = null);
						else {
							for (d = f, v = 0; (d = d.nextSibling) && v < k; v += 2)
								if (d == y) break n;
							n.insertBefore(y, f), (c = f);
						}
						'option' == l.type && (n.value = '');
					}
					(f = void 0 !== c ? c : y.nextSibling),
						'function' == typeof l.type && (l.__d = f);
				} else f && h.__e == f && f.parentNode != n && (f = x(h));
			}
			return a++, u;
		})),
		(l.__e = m),
		null != o && 'function' != typeof l.type)
	)
		for (a = o.length; a--; ) null != o[a] && p(o[a]);
	for (a = k; a--; ) null != g[a] && j(g[a], g[a]);
	if (w) for (a = 0; a < w.length; a++) $(w[a], w[++a], w[++a]);
}
function _(n, l, u) {
	if ((null == u && (u = []), null == n || 'boolean' == typeof n))
		l && u.push(l(null));
	else if (Array.isArray(n)) for (var t = 0; t < n.length; t++) _(n[t], l, u);
	else
		u.push(
			l
				? l(
						'string' == typeof n || 'number' == typeof n
							? h(null, n, null, null)
							: null != n.__e || null != n.__c
							? h(n.type, n.props, n.key, null)
							: n
				  )
				: n
		);
	return u;
}
function b(n, l, u, t, i) {
	var o;
	for (o in u) o in l || C(n, o, null, u[o], t);
	for (o in l)
		(i && 'function' != typeof l[o]) ||
			'value' === o ||
			'checked' === o ||
			u[o] === l[o] ||
			C(n, o, l[o], u[o], t);
}
function P(n, l, u) {
	'-' === l[0]
		? n.setProperty(l, u)
		: (n[l] =
				'number' == typeof u && !1 === s.test(l)
					? u + 'px'
					: null == u
					? ''
					: u);
}
function C(n, l, u, t, i) {
	var o, r, f, e, c;
	if (
		(i
			? 'className' === l && (l = 'class')
			: 'class' === l && (l = 'className'),
		'key' === l || 'children' === l)
	);
	else if ('style' === l)
		if (((o = n.style), 'string' == typeof u)) o.cssText = u;
		else {
			if (('string' == typeof t && ((o.cssText = ''), (t = null)), t))
				for (r in t) (u && r in u) || P(o, r, '');
			if (u) for (f in u) (t && u[f] === t[f]) || P(o, f, u[f]);
		}
	else
		'o' === l[0] && 'n' === l[1]
			? ((e = l !== (l = l.replace(/Capture$/, ''))),
			  (c = l.toLowerCase()),
			  (l = (c in n ? c : l).slice(2)),
			  u
					? (t || n.addEventListener(l, N, e), ((n.l || (n.l = {}))[l] = u))
					: n.removeEventListener(l, N, e))
			: 'list' !== l &&
			  'tagName' !== l &&
			  'form' !== l &&
			  'type' !== l &&
			  'size' !== l &&
			  !i &&
			  l in n
			? (n[l] = null == u ? '' : u)
			: 'function' != typeof u &&
			  'dangerouslySetInnerHTML' !== l &&
			  (l !== (l = l.replace(/^xlink:?/, ''))
					? null == u || !1 === u
						? n.removeAttributeNS(
								'http://www.w3.org/1999/xlink',
								l.toLowerCase()
						  )
						: n.setAttributeNS(
								'http://www.w3.org/1999/xlink',
								l.toLowerCase(),
								u
						  )
					: null == u || (!1 === u && !/^ar/.test(l))
					? n.removeAttribute(l)
					: n.setAttribute(l, u));
}
function N(l) {
	this.l[l.type](n.event ? n.event(l) : l);
}
function z(l, u, t, i, o, r, f, e, c) {
	var s,
		p,
		v,
		h,
		x,
		m,
		w,
		g,
		_,
		b,
		P = u.type;
	if (void 0 !== u.constructor) return null;
	(s = n.__b) && s(u);
	try {
		n: if ('function' == typeof P) {
			if (
				((g = u.props),
				(_ = (s = P.contextType) && i[s.__c]),
				(b = s ? (_ ? _.props.value : s.__) : i),
				t.__c
					? (w = (p = u.__c = t.__c).__ = p.__E)
					: ('prototype' in P && P.prototype.render
							? (u.__c = p = new P(g, b))
							: ((u.__c = p = new d(g, b)),
							  (p.constructor = P),
							  (p.render = D)),
					  _ && _.sub(p),
					  (p.props = g),
					  p.state || (p.state = {}),
					  (p.context = b),
					  (p.__n = i),
					  (v = p.__d = !0),
					  (p.__h = [])),
				null == p.__s && (p.__s = p.state),
				null != P.getDerivedStateFromProps &&
					(p.__s == p.state && (p.__s = a({}, p.__s)),
					a(p.__s, P.getDerivedStateFromProps(g, p.__s))),
				(h = p.props),
				(x = p.state),
				v)
			)
				null == P.getDerivedStateFromProps &&
					null != p.componentWillMount &&
					p.componentWillMount(),
					null != p.componentDidMount && p.__h.push(p.componentDidMount);
			else {
				if (
					(null == P.getDerivedStateFromProps &&
						g !== h &&
						null != p.componentWillReceiveProps &&
						p.componentWillReceiveProps(g, b),
					!p.__e &&
						null != p.shouldComponentUpdate &&
						!1 === p.shouldComponentUpdate(g, p.__s, b))
				) {
					for (
						p.props = g,
							p.state = p.__s,
							p.__d = !1,
							p.__v = u,
							u.__e = t.__e,
							u.__k = t.__k,
							p.__h.length && f.push(p),
							s = 0;
						s < u.__k.length;
						s++
					)
						u.__k[s] && (u.__k[s].__ = u);
					break n;
				}
				null != p.componentWillUpdate && p.componentWillUpdate(g, p.__s, b),
					null != p.componentDidUpdate &&
						p.__h.push(function() {
							p.componentDidUpdate(h, x, m);
						});
			}
			(p.context = b),
				(p.props = g),
				(p.state = p.__s),
				(s = n.__r) && s(u),
				(p.__d = !1),
				(p.__v = u),
				(p.__P = l),
				(s = p.render(p.props, p.state, p.context)),
				(u.__k =
					null != s && s.type == y && null == s.key
						? s.props.children
						: Array.isArray(s)
						? s
						: [s]),
				null != p.getChildContext && (i = a(a({}, i), p.getChildContext())),
				v ||
					null == p.getSnapshotBeforeUpdate ||
					(m = p.getSnapshotBeforeUpdate(h, x)),
				k(l, u, t, i, o, r, f, e, c),
				(p.base = u.__e),
				p.__h.length && f.push(p),
				w && (p.__E = p.__ = null),
				(p.__e = !1);
		} else u.__e = T(t.__e, u, t, i, o, r, f, c);
		(s = n.diffed) && s(u);
	} catch (l) {
		n.__e(l, u, t);
	}
	return u.__e;
}
function A(l, u) {
	n.__c && n.__c(u, l),
		l.some(function(u) {
			try {
				(l = u.__h),
					(u.__h = []),
					l.some(function(n) {
						n.call(u);
					});
			} catch (l) {
				n.__e(l, u.__v);
			}
		});
}
function T(n, l, u, t, i, o, r, f) {
	var s,
		a,
		p,
		v,
		h,
		y = u.props,
		d = l.props;
	if (((i = 'svg' === l.type || i), null != o))
		for (s = 0; s < o.length; s++)
			if (
				null != (a = o[s]) &&
				((null === l.type ? 3 === a.nodeType : a.localName === l.type) ||
					n == a)
			) {
				(n = a), (o[s] = null);
				break;
			}
	if (null == n) {
		if (null === l.type) return document.createTextNode(d);
		(n = i
			? document.createElementNS('http://www.w3.org/2000/svg', l.type)
			: document.createElement(l.type, d.is && { is: d.is })),
			(o = null);
	}
	if (null === l.type) y !== d && n.data != d && (n.data = d);
	else if (l !== u) {
		if (
			(null != o && (o = c.slice.call(n.childNodes)),
			(p = (y = u.props || e).dangerouslySetInnerHTML),
			(v = d.dangerouslySetInnerHTML),
			!f)
		) {
			if (y === e)
				for (y = {}, h = 0; h < n.attributes.length; h++)
					y[n.attributes[h].name] = n.attributes[h].value;
			(v || p) &&
				((v && p && v.__html == p.__html) ||
					(n.innerHTML = (v && v.__html) || ''));
		}
		b(n, d, y, i, f),
			(l.__k = l.props.children),
			v || k(n, l, u, t, 'foreignObject' !== l.type && i, o, r, e, f),
			f ||
				('value' in d &&
					void 0 !== d.value &&
					d.value !== n.value &&
					(n.value = null == d.value ? '' : d.value),
				'checked' in d &&
					void 0 !== d.checked &&
					d.checked !== n.checked &&
					(n.checked = d.checked));
	}
	return n;
}
function $(l, u, t) {
	try {
		'function' == typeof l ? l(u) : (l.current = u);
	} catch (l) {
		n.__e(l, t);
	}
}
function j(l, u, t) {
	var i, o, r;
	if (
		(n.unmount && n.unmount(l),
		(i = l.ref) && ((i.current && i.current !== l.__e) || $(i, null, u)),
		t || 'function' == typeof l.type || (t = null != (o = l.__e)),
		(l.__e = l.__d = void 0),
		null != (i = l.__c))
	) {
		if (i.componentWillUnmount)
			try {
				i.componentWillUnmount();
			} catch (l) {
				n.__e(l, u);
			}
		i.base = i.__P = null;
	}
	if ((i = l.__k)) for (r = 0; r < i.length; r++) i[r] && j(i[r], u, t);
	null != o && p(o);
}
function D(n, l, u) {
	return this.constructor(n, u);
}
function E(l, u, t) {
	var i, o, f;
	n.__ && n.__(l, u),
		(o = (i = t === r) ? null : (t && t.__k) || u.__k),
		(l = v(y, null, [l])),
		(f = []),
		z(
			u,
			((i ? u : t || u).__k = l),
			o || e,
			e,
			void 0 !== u.ownerSVGElement,
			t && !i ? [t] : o ? null : c.slice.call(u.childNodes),
			f,
			t || e,
			i
		),
		A(f, l);
}
(n = {
	__e: function(n, l) {
		for (var u, t; (l = l.__); )
			if ((u = l.__c) && !u.__)
				try {
					if (
						(u.constructor &&
							null != u.constructor.getDerivedStateFromError &&
							((t = !0), u.setState(u.constructor.getDerivedStateFromError(n))),
						null != u.componentDidCatch && ((t = !0), u.componentDidCatch(n)),
						t)
					)
						return w((u.__E = u));
				} catch (l) {
					n = l;
				}
		throw n;
	}
}),
	(l = function(n) {
		return null != n && void 0 === n.constructor;
	}),
	(d.prototype.setState = function(n, l) {
		var u;
		(u = this.__s !== this.state ? this.__s : (this.__s = a({}, this.state))),
			'function' == typeof n && (n = n(u, this.props)),
			n && a(u, n),
			null != n && this.__v && (l && this.__h.push(l), w(this));
	}),
	(d.prototype.forceUpdate = function(n) {
		this.__v && ((this.__e = !0), n && this.__h.push(n), w(this));
	}),
	(d.prototype.render = y),
	(u = []),
	(t = 0),
	(i =
		'function' == typeof Promise
			? Promise.prototype.then.bind(Promise.resolve())
			: setTimeout),
	(r = e),
	(f = 0),
	(exports.render = E),
	(exports.hydrate = function(n, l) {
		E(n, l, r);
	}),
	(exports.createElement = v),
	(exports.h = v),
	(exports.Fragment = y),
	(exports.createRef = function() {
		return {};
	}),
	(exports.isValidElement = l),
	(exports.Component = d),
	(exports.cloneElement = function(n, l) {
		return (
			(l = a(a({}, n.props), l)),
			arguments.length > 2 && (l.children = c.slice.call(arguments, 2)),
			h(n.type, l, l.key || n.key, l.ref || n.ref)
		);
	}),
	(exports.createContext = function(n) {
		var l = {},
			u = {
				__c: '__cC' + f++,
				__: n,
				Consumer: function(n, l) {
					return n.children(l);
				},
				Provider: function(n) {
					var t,
						i = this;
					return (
						this.getChildContext ||
							((t = []),
							(this.getChildContext = function() {
								return (l[u.__c] = i), l;
							}),
							(this.shouldComponentUpdate = function(n) {
								i.props.value !== n.value &&
									t.some(function(l) {
										(l.context = n.value), w(l);
									});
							}),
							(this.sub = function(n) {
								t.push(n);
								var l = n.componentWillUnmount;
								n.componentWillUnmount = function() {
									t.splice(t.indexOf(n), 1), l && l.call(n);
								};
							})),
						n.children
					);
				}
			};
		return (u.Consumer.contextType = u), u;
	}),
	(exports.toChildArray = _),
	(exports._e = j),
	(exports.options = n);
//# sourceMappingURL=preact.js.map

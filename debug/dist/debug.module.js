import { options as n, Fragment as e, Component as t } from 'preact';
import 'preact/devtools';
var o = {};
function r(n) {
	return n.type === e
		? 'Fragment'
		: 'function' == typeof n.type
		? n.type.displayName || n.type.name
		: 'string' == typeof n.type
		? n.type
		: '#text';
}
var a = [],
	i = [];
function s() {
	return a.length > 0 ? a[a.length - 1] : null;
}
var c = !1;
function l(n) {
	return 'function' == typeof n.type && n.type != e;
}
function u(n) {
	for (var e = [n], t = n; null != t.__o; ) e.push(t.__o), (t = t.__o);
	return e.reduce(function(n, e) {
		n += '  in ' + r(e);
		var t = e.__source;
		return (
			t
				? (n += ' (at ' + t.fileName + ':' + t.lineNumber + ')')
				: c ||
				  ((c = !0),
				  console.warn(
						'Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.'
				  )),
			n + '\n'
		);
	}, '');
}
var f = 'function' == typeof WeakMap,
	p = t.prototype.setState;
t.prototype.setState = function(n, e) {
	return (
		null == this.__v
			? null == this.state &&
			  console.warn(
					'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
						u(s())
			  )
			: null == this.__P &&
			  console.warn(
					'Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
						u(this.__v)
			  ),
		p.call(this, n, e)
	);
};
var d = t.prototype.forceUpdate;
function h(n) {
	var e = n.props,
		t = r(n),
		o = '';
	for (var a in e)
		if (e.hasOwnProperty(a) && 'children' !== a) {
			var i = e[a];
			'function' == typeof i &&
				(i = 'function ' + (i.displayName || i.name) + '() {}'),
				(i =
					Object(i) !== i || i.toString
						? i + ''
						: Object.prototype.toString.call(i)),
				(o += ' ' + a + '=' + JSON.stringify(i));
		}
	var s = e.children;
	return '<' + t + o + (s && s.length ? '>..</' + t + '>' : ' />');
}
(t.prototype.forceUpdate = function(n) {
	return (
		null == this.__v
			? console.warn(
					'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
						u(s())
			  )
			: null == this.__P &&
			  console.warn(
					'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
						u(this.__v)
			  ),
		d.call(this, n)
	);
}),
	(function() {
		!(function() {
			var e = n.__b,
				t = n.diffed,
				o = n.__,
				r = n.vnode,
				s = n.__r;
			(n.diffed = function(n) {
				l(n) && i.pop(), a.pop(), t && t(n);
			}),
				(n.__b = function(n) {
					l(n) && a.push(n), e && e(n);
				}),
				(n.__ = function(n, e) {
					(i = []), o && o(n, e);
				}),
				(n.vnode = function(n) {
					(n.__o = i.length > 0 ? i[i.length - 1] : null), r && r(n);
				}),
				(n.__r = function(n) {
					l(n) && i.push(n), s && s(n);
				});
		})();
		var e = n.__b,
			t = n.diffed,
			s = n.vnode,
			c = n.__e,
			p = n.__,
			d = n.__h,
			y = f
				? {
						useEffect: new WeakMap(),
						useLayoutEffect: new WeakMap(),
						lazyPropTypes: new WeakMap()
				  }
				: null;
		(n.__e = function(n, e, t) {
			if (e && e.__c && 'function' == typeof n.then) {
				var o = n;
				n = new Error('Missing Suspense. The throwing component was: ' + r(e));
				for (var a = e; a; a = a.__)
					if (a.__c && a.__c.__c) {
						n = o;
						break;
					}
				if (n instanceof Error) throw n;
			}
			c(n, e, t);
		}),
			(n.__ = function(n, e) {
				if (!e)
					throw new Error(
						'Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.'
					);
				var t;
				switch (e.nodeType) {
					case 1:
					case 11:
					case 9:
						t = !0;
						break;
					default:
						t = !1;
				}
				if (!t) {
					var o = r(n);
					throw new Error(
						'Expected a valid HTML node as a second argument to render.\tReceived ' +
							e +
							' instead: render(<' +
							o +
							' />, ' +
							e +
							');'
					);
				}
				p && p(n, e);
			}),
			(n.__b = function(n) {
				var t,
					a,
					i,
					s,
					c = n.type,
					l = (function n(e) {
						return e ? ('function' == typeof e.type ? n(e.__) : e) : {};
					})(n.__);
				if (void 0 === c)
					throw new Error(
						'Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports' +
							h(n) +
							'\n\n' +
							u(n)
					);
				if (null != c && 'object' == typeof c) {
					if (void 0 !== c.__k && void 0 !== c.__e)
						throw new Error(
							'Invalid type passed to createElement(): ' +
								c +
								'\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My' +
								r(n) +
								' = ' +
								h(c) +
								';\n  let vnode = <My' +
								r(n) +
								' />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n' +
								u(n)
						);
					throw new Error(
						'Invalid type passed to createElement(): ' +
							(Array.isArray(c) ? 'array' : c)
					);
				}
				if (
					(('thead' !== c && 'tfoot' !== c && 'tbody' !== c) ||
					'table' === l.type
						? 'tr' === c &&
						  'thead' !== l.type &&
						  'tfoot' !== l.type &&
						  'tbody' !== l.type &&
						  'table' !== l.type
							? console.error(
									'Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent.' +
										h(n) +
										'\n\n' +
										u(n)
							  )
							: 'td' === c && 'tr' !== l.type
							? console.error(
									'Improper nesting of table. Your <td> should have a <tr> parent.' +
										h(n) +
										'\n\n' +
										u(n)
							  )
							: 'th' === c &&
							  'tr' !== l.type &&
							  console.error(
									'Improper nesting of table. Your <th> should have a <tr>.' +
										h(n) +
										'\n\n' +
										u(n)
							  )
						: console.error(
								'Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' +
									h(n) +
									'\n\n' +
									u(n)
						  ),
					void 0 !== n.ref &&
						'function' != typeof n.ref &&
						'object' != typeof n.ref &&
						!('$$typeof' in n))
				)
					throw new Error(
						'Component\'s "ref" property should be a function, or an object created by createRef(), but got [' +
							typeof n.ref +
							'] instead\n' +
							h(n) +
							'\n\n' +
							u(n)
					);
				if ('string' == typeof n.type)
					for (var f in n.props)
						if (
							'o' === f[0] &&
							'n' === f[1] &&
							'function' != typeof n.props[f] &&
							null != n.props[f]
						)
							throw new Error(
								'Component\'s "' +
									f +
									'" property should be a function, but got [' +
									typeof n.props[f] +
									'] instead\n' +
									h(n) +
									'\n\n' +
									u(n)
							);
				if ('function' == typeof n.type && n.type.propTypes) {
					if (
						'Lazy' === n.type.displayName &&
						y &&
						!y.lazyPropTypes.has(n.type)
					) {
						var p =
							'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
						try {
							var d = n.type();
							y.lazyPropTypes.set(n.type, !0),
								console.warn(p + 'Component wrapped in lazy() is ' + r(d));
						} catch (n) {
							console.warn(
								p +
									"We will log the wrapped component's name once it is loaded."
							);
						}
					}
					(t = n.type.propTypes),
						(a = n.props),
						(i = r(n)),
						(s = h(n)),
						Object.keys(t).forEach(function(n) {
							var e;
							try {
								e = t[n](
									a,
									n,
									s,
									i,
									null,
									'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
								);
							} catch (n) {
								e = n;
							}
							!e ||
								e.message in o ||
								((o[e.message] = !0),
								console.error('Failed ' + i + ' type: ' + e.message));
						});
				}
				e && e(n);
			}),
			(n.__h = function(n) {
				if (!n)
					throw new Error('Hook can only be invoked from render methods.');
				d && d(n);
			});
		var m = function(n, e) {
				return {
					get: function() {
						throw new Error('getting vnode.' + n + ' is deprecated, ' + e);
					},
					set: function() {
						throw new Error('setting vnode.' + n + ' is not allowed, ' + e);
					}
				};
			},
			v = {
				nodeName: m('nodeName', 'use vnode.type'),
				attributes: m('attributes', 'use vnode.props'),
				children: m('children', 'use vnode.props.children')
			},
			b = Object.create({}, v);
		(n.vnode = function(n) {
			var e = n.props;
			if (null !== n.type && null != e && ('__source' in e || '__self' in e)) {
				var t = (n.props = {});
				for (var o in e) {
					var r = e[o];
					'__source' === o
						? (n.__source = r)
						: '__self' === o
						? (n.__self = r)
						: (t[o] = r);
				}
			}
			Object.setPrototypeOf(n, b), s && s(n);
		}),
			(n.diffed = function(n) {
				n.__k &&
					n.__k.forEach(function(e) {
						if (e && void 0 === e.type) {
							delete e.__, delete e.__b;
							var t = Object.keys(e).join(',');
							throw new Error(
								'Objects are not valid as a child. Encountered an object with the keys {' +
									t +
									'}.\n\n' +
									u(n)
							);
						}
					});
				var e = n.__c;
				if (e && e.__H) {
					var o = e.__H;
					Array.isArray(o.__) &&
						o.__.forEach(function(e) {
							if (e.__h && (!e.__H || !Array.isArray(e.__H))) {
								var t = r(n);
								console.warn(
									'In ' +
										t +
										' you are calling useMemo/useCallback without passing arguments.\nThis is a noop since it will not be able to memoize, it will execute it every render.\n\n' +
										u(n)
								);
							}
						});
				}
				if ((t && t(n), null != n.__k))
					for (var a = [], i = 0; i < n.__k.length; i++) {
						var s = n.__k[i];
						if (s && null != s.key) {
							var c = s.key;
							if (-1 !== a.indexOf(c)) {
								console.error(
									'Following component has two or more children with the same key attribute: "' +
										c +
										'". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
										h(n) +
										'\n\n' +
										u(n)
								);
								break;
							}
							a.push(c);
						}
					}
			});
	})();
//# sourceMappingURL=debug.module.js.map

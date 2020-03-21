!(function(n, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(require('preact'), require('preact/devtools'))
		: 'function' == typeof define && define.amd
		? define(['preact', 'preact/devtools'], e)
		: e(n.preact);
})(this, function(n) {
	var e = {};
	function t(e) {
		return e.type === n.Fragment
			? 'Fragment'
			: 'function' == typeof e.type
			? e.type.displayName || e.type.name
			: 'string' == typeof e.type
			? e.type
			: '#text';
	}
	var o = [],
		r = [];
	function i() {
		return o.length > 0 ? o[o.length - 1] : null;
	}
	var a = !1;
	function s(e) {
		return 'function' == typeof e.type && e.type != n.Fragment;
	}
	function c(n) {
		for (var e = [n], o = n; null != o.__o; ) e.push(o.__o), (o = o.__o);
		return e.reduce(function(n, e) {
			n += '  in ' + t(e);
			var o = e.__source;
			return (
				o
					? (n += ' (at ' + o.fileName + ':' + o.lineNumber + ')')
					: a ||
					  ((a = !0),
					  console.warn(
							'Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.'
					  )),
				n + '\n'
			);
		}, '');
	}
	var l = 'function' == typeof WeakMap,
		u = n.Component.prototype.setState;
	n.Component.prototype.setState = function(n, e) {
		return (
			null == this.__v
				? null == this.state &&
				  console.warn(
						'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
							c(i())
				  )
				: null == this.__P &&
				  console.warn(
						'Can\'t call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
							c(this.__v)
				  ),
			u.call(this, n, e)
		);
	};
	var f = n.Component.prototype.forceUpdate;
	function p(n) {
		var e = n.props,
			o = t(n),
			r = '';
		for (var i in e)
			if (e.hasOwnProperty(i) && 'children' !== i) {
				var a = e[i];
				'function' == typeof a &&
					(a = 'function ' + (a.displayName || a.name) + '() {}'),
					(a =
						Object(a) !== a || a.toString
							? a + ''
							: Object.prototype.toString.call(a)),
					(r += ' ' + i + '=' + JSON.stringify(a));
			}
		var s = e.children;
		return '<' + o + r + (s && s.length ? '>..</' + o + '>' : ' />');
	}
	(n.Component.prototype.forceUpdate = function(n) {
		return (
			null == this.__v
				? console.warn(
						'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
							c(i())
				  )
				: null == this.__P &&
				  console.warn(
						'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
							c(this.__v)
				  ),
			f.call(this, n)
		);
	}),
		(function() {
			!(function() {
				var e = n.options.__b,
					t = n.options.diffed,
					i = n.options.__,
					a = n.options.vnode,
					c = n.options.__r;
				(n.options.diffed = function(n) {
					s(n) && r.pop(), o.pop(), t && t(n);
				}),
					(n.options.__b = function(n) {
						s(n) && o.push(n), e && e(n);
					}),
					(n.options.__ = function(n, e) {
						(r = []), i && i(n, e);
					}),
					(n.options.vnode = function(n) {
						(n.__o = r.length > 0 ? r[r.length - 1] : null), a && a(n);
					}),
					(n.options.__r = function(n) {
						s(n) && r.push(n), c && c(n);
					});
			})();
			var i = n.options.__b,
				a = n.options.diffed,
				u = n.options.vnode,
				f = n.options.__e,
				d = n.options.__,
				h = n.options.__h,
				y = l
					? {
							useEffect: new WeakMap(),
							useLayoutEffect: new WeakMap(),
							lazyPropTypes: new WeakMap()
					  }
					: null;
			(n.options.__e = function(n, e, o) {
				if (e && e.__c && 'function' == typeof n.then) {
					var r = n;
					n = new Error(
						'Missing Suspense. The throwing component was: ' + t(e)
					);
					for (var i = e; i; i = i.__)
						if (i.__c && i.__c.__c) {
							n = r;
							break;
						}
					if (n instanceof Error) throw n;
				}
				f(n, e, o);
			}),
				(n.options.__ = function(n, e) {
					if (!e)
						throw new Error(
							'Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.'
						);
					var o;
					switch (e.nodeType) {
						case 1:
						case 11:
						case 9:
							o = !0;
							break;
						default:
							o = !1;
					}
					if (!o) {
						var r = t(n);
						throw new Error(
							'Expected a valid HTML node as a second argument to render.\tReceived ' +
								e +
								' instead: render(<' +
								r +
								' />, ' +
								e +
								');'
						);
					}
					d && d(n, e);
				}),
				(n.options.__b = function(n) {
					var o,
						r,
						a,
						s,
						l = n.type,
						u = (function n(e) {
							return e ? ('function' == typeof e.type ? n(e.__) : e) : {};
						})(n.__);
					if (void 0 === l)
						throw new Error(
							'Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports' +
								p(n) +
								'\n\n' +
								c(n)
						);
					if (null != l && 'object' == typeof l) {
						if (void 0 !== l.__k && void 0 !== l.__e)
							throw new Error(
								'Invalid type passed to createElement(): ' +
									l +
									'\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My' +
									t(n) +
									' = ' +
									p(l) +
									';\n  let vnode = <My' +
									t(n) +
									' />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n' +
									c(n)
							);
						throw new Error(
							'Invalid type passed to createElement(): ' +
								(Array.isArray(l) ? 'array' : l)
						);
					}
					if (
						(('thead' !== l && 'tfoot' !== l && 'tbody' !== l) ||
						'table' === u.type
							? 'tr' === l &&
							  'thead' !== u.type &&
							  'tfoot' !== u.type &&
							  'tbody' !== u.type &&
							  'table' !== u.type
								? console.error(
										'Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent.' +
											p(n) +
											'\n\n' +
											c(n)
								  )
								: 'td' === l && 'tr' !== u.type
								? console.error(
										'Improper nesting of table. Your <td> should have a <tr> parent.' +
											p(n) +
											'\n\n' +
											c(n)
								  )
								: 'th' === l &&
								  'tr' !== u.type &&
								  console.error(
										'Improper nesting of table. Your <th> should have a <tr>.' +
											p(n) +
											'\n\n' +
											c(n)
								  )
							: console.error(
									'Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' +
										p(n) +
										'\n\n' +
										c(n)
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
								p(n) +
								'\n\n' +
								c(n)
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
										p(n) +
										'\n\n' +
										c(n)
								);
					if ('function' == typeof n.type && n.type.propTypes) {
						if (
							'Lazy' === n.type.displayName &&
							y &&
							!y.lazyPropTypes.has(n.type)
						) {
							var d =
								'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
							try {
								var h = n.type();
								y.lazyPropTypes.set(n.type, !0),
									console.warn(d + 'Component wrapped in lazy() is ' + t(h));
							} catch (n) {
								console.warn(
									d +
										"We will log the wrapped component's name once it is loaded."
								);
							}
						}
						(o = n.type.propTypes),
							(r = n.props),
							(a = t(n)),
							(s = p(n)),
							Object.keys(o).forEach(function(n) {
								var t;
								try {
									t = o[n](
										r,
										n,
										s,
										a,
										null,
										'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
									);
								} catch (n) {
									t = n;
								}
								!t ||
									t.message in e ||
									((e[t.message] = !0),
									console.error('Failed ' + a + ' type: ' + t.message));
							});
					}
					i && i(n);
				}),
				(n.options.__h = function(n) {
					if (!n)
						throw new Error('Hook can only be invoked from render methods.');
					h && h(n);
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
			(n.options.vnode = function(n) {
				var e = n.props;
				if (
					null !== n.type &&
					null != e &&
					('__source' in e || '__self' in e)
				) {
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
				Object.setPrototypeOf(n, b), u && u(n);
			}),
				(n.options.diffed = function(n) {
					n.__k &&
						n.__k.forEach(function(e) {
							if (e && void 0 === e.type) {
								delete e.__, delete e.__b;
								var t = Object.keys(e).join(',');
								throw new Error(
									'Objects are not valid as a child. Encountered an object with the keys {' +
										t +
										'}.\n\n' +
										c(n)
								);
							}
						});
					var e = n.__c;
					if (e && e.__H) {
						var o = e.__H;
						Array.isArray(o.__) &&
							o.__.forEach(function(e) {
								if (e.__h && (!e.__H || !Array.isArray(e.__H))) {
									var o = t(n);
									console.warn(
										'In ' +
											o +
											' you are calling useMemo/useCallback without passing arguments.\nThis is a noop since it will not be able to memoize, it will execute it every render.\n\n' +
											c(n)
									);
								}
							});
					}
					if ((a && a(n), null != n.__k))
						for (var r = [], i = 0; i < n.__k.length; i++) {
							var s = n.__k[i];
							if (s && null != s.key) {
								var l = s.key;
								if (-1 !== r.indexOf(l)) {
									console.error(
										'Following component has two or more children with the same key attribute: "' +
											l +
											'". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
											p(n) +
											'\n\n' +
											c(n)
									);
									break;
								}
								r.push(l);
							}
						}
				});
		})();
});
//# sourceMappingURL=debug.umd.js.map

var n = require('preact');
function r() {
	return (
		(n.options.t = n.options.debounceRendering),
		(n.options.debounceRendering = function(r) {
			return (n.options.u = r);
		}),
		function() {
			return n.options.u && n.options.u();
		}
	);
}
var t = function(n) {
		return null != n && 'function' == typeof n.then;
	},
	e = 0;
function u() {
	n.options.u && (n.options.u(), delete n.options.u),
		void 0 !== n.options.t
			? ((n.options.debounceRendering = n.options.t), delete n.options.t)
			: (n.options.debounceRendering = void 0);
}
(exports.setupRerender = r),
	(exports.act = function(o) {
		if (++e > 1) {
			var i = o();
			return t(i)
				? i.then(function() {
						--e;
				  })
				: (--e, Promise.resolve());
		}
		var f,
			c,
			v = n.options.requestAnimationFrame,
			a = r();
		n.options.requestAnimationFrame = function(n) {
			return (f = n);
		};
		var l = function() {
				for (a(); f; ) (c = f), (f = null), c(), a();
				u(), (n.options.requestAnimationFrame = v), --e;
			},
			p = o();
		return t(p) ? p.then(l) : (l(), Promise.resolve());
	}),
	(exports.teardown = u);
//# sourceMappingURL=testUtils.js.map

!(function(n, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports, require('preact'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact'], e)
		: e((n.preactTestUtils = {}), n.preact);
})(this, function(n, e) {
	function t() {
		return (
			(e.options.t = e.options.debounceRendering),
			(e.options.debounceRendering = function(n) {
				return (e.options.o = n);
			}),
			function() {
				return e.options.o && e.options.o();
			}
		);
	}
	var r = function(n) {
			return null != n && 'function' == typeof n.then;
		},
		o = 0;
	function u() {
		e.options.o && (e.options.o(), delete e.options.o),
			void 0 !== e.options.t
				? ((e.options.debounceRendering = e.options.t), delete e.options.t)
				: (e.options.debounceRendering = void 0);
	}
	(n.setupRerender = t),
		(n.act = function(n) {
			if (++o > 1) {
				var i = n();
				return r(i)
					? i.then(function() {
							--o;
					  })
					: (--o, Promise.resolve());
			}
			var f,
				c,
				d = e.options.requestAnimationFrame,
				p = t();
			e.options.requestAnimationFrame = function(n) {
				return (f = n);
			};
			var l = function() {
					for (p(); f; ) (c = f), (f = null), c(), p();
					u(), (e.options.requestAnimationFrame = d), --o;
				},
				a = n();
			return r(a) ? a.then(l) : (l(), Promise.resolve());
		}),
		(n.teardown = u);
});
//# sourceMappingURL=testUtils.umd.js.map

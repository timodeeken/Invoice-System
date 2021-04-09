/*! For license information please see app.js.LICENSE.txt */ ! function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(i, o, function (e) {
                return t[e]
            }.bind(null, o));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = 1)
}([function (t, e, n) {
    "use strict";
    (function (t) {
        var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            i = function () {
                for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
                    if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
                return 0
            }();
        var o = n && window.Promise ? function (t) {
            var e = !1;
            return function () {
                e || (e = !0, window.Promise.resolve().then((function () {
                    e = !1, t()
                })))
            }
        } : function (t) {
            var e = !1;
            return function () {
                e || (e = !0, setTimeout((function () {
                    e = !1, t()
                }), i))
            }
        };

        function r(t) {
            return t && "[object Function]" === {}.toString.call(t)
        }

        function s(t, e) {
            if (1 !== t.nodeType) return [];
            var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
            return e ? n[e] : n
        }

        function a(t) {
            return "HTML" === t.nodeName ? t : t.parentNode || t.host
        }

        function l(t) {
            if (!t) return document.body;
            switch (t.nodeName) {
                case "HTML":
                case "BODY":
                    return t.ownerDocument.body;
                case "#document":
                    return t.body
            }
            var e = s(t),
                n = e.overflow,
                i = e.overflowX,
                o = e.overflowY;
            return /(auto|scroll|overlay)/.test(n + o + i) ? t : l(a(t))
        }

        function c(t) {
            return t && t.referenceNode ? t.referenceNode : t
        }
        var u = n && !(!window.MSInputMethodContext || !document.documentMode),
            f = n && /MSIE 10/.test(navigator.userAgent);

        function d(t) {
            return 11 === t ? u : 10 === t ? f : u || f
        }

        function h(t) {
            if (!t) return document.documentElement;
            for (var e = d(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? h(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
        }

        function p(t) {
            return null !== t.parentNode ? p(t.parentNode) : t
        }

        function m(t, e) {
            if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
            var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? t : e,
                o = n ? e : t,
                r = document.createRange();
            r.setStart(i, 0), r.setEnd(o, 0);
            var s, a, l = r.commonAncestorContainer;
            if (t !== l && e !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;
            var c = p(t);
            return c.host ? m(c.host, e) : m(t, p(e).host)
        }

        function g(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                n = "top" === e ? "scrollTop" : "scrollLeft",
                i = t.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var o = t.ownerDocument.documentElement,
                    r = t.ownerDocument.scrollingElement || o;
                return r[n]
            }
            return t[n]
        }

        function v(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = g(e, "top"),
                o = g(e, "left"),
                r = n ? -1 : 1;
            return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t
        }

        function _(t, e) {
            var n = "x" === e ? "Left" : "Top",
                i = "Left" === n ? "Right" : "Bottom";
            return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"])
        }

        function b(t, e, n, i) {
            return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], d(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
        }

        function y(t) {
            var e = t.body,
                n = t.documentElement,
                i = d(10) && getComputedStyle(n);
            return {
                height: b("Height", e, n, i),
                width: b("Width", e, n, i)
            }
        }
        var w = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            E = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            T = function (t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            },
            L = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            };

        function k(t) {
            return L({}, t, {
                right: t.left + t.width,
                bottom: t.top + t.height
            })
        }

        function O(t) {
            var e = {};
            try {
                if (d(10)) {
                    e = t.getBoundingClientRect();
                    var n = g(t, "top"),
                        i = g(t, "left");
                    e.top += n, e.left += i, e.bottom += n, e.right += i
                } else e = t.getBoundingClientRect()
            } catch (t) {}
            var o = {
                    left: e.left,
                    top: e.top,
                    width: e.right - e.left,
                    height: e.bottom - e.top
                },
                r = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
                a = r.width || t.clientWidth || o.width,
                l = r.height || t.clientHeight || o.height,
                c = t.offsetWidth - a,
                u = t.offsetHeight - l;
            if (c || u) {
                var f = s(t);
                c -= _(f, "x"), u -= _(f, "y"), o.width -= c, o.height -= u
            }
            return k(o)
        }

        function C(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = d(10),
                o = "HTML" === e.nodeName,
                r = O(t),
                a = O(e),
                c = l(t),
                u = s(e),
                f = parseFloat(u.borderTopWidth),
                h = parseFloat(u.borderLeftWidth);
            n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var p = k({
                top: r.top - a.top - f,
                left: r.left - a.left - h,
                width: r.width,
                height: r.height
            });
            if (p.marginTop = 0, p.marginLeft = 0, !i && o) {
                var m = parseFloat(u.marginTop),
                    g = parseFloat(u.marginLeft);
                p.top -= f - m, p.bottom -= f - m, p.left -= h - g, p.right -= h - g, p.marginTop = m, p.marginLeft = g
            }
            return (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (p = v(p, e)), p
        }

        function A(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = C(t, n),
                o = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                s = e ? 0 : g(n),
                a = e ? 0 : g(n, "left"),
                l = {
                    top: s - i.top + i.marginTop,
                    left: a - i.left + i.marginLeft,
                    width: o,
                    height: r
                };
            return k(l)
        }

        function S(t) {
            var e = t.nodeName;
            if ("BODY" === e || "HTML" === e) return !1;
            if ("fixed" === s(t, "position")) return !0;
            var n = a(t);
            return !!n && S(n)
        }

        function D(t) {
            if (!t || !t.parentElement || d()) return document.documentElement;
            for (var e = t.parentElement; e && "none" === s(e, "transform");) e = e.parentElement;
            return e || document.documentElement
        }

        function x(t, e, n, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                r = {
                    top: 0,
                    left: 0
                },
                s = o ? D(t) : m(t, c(e));
            if ("viewport" === i) r = A(s, o);
            else {
                var u = void 0;
                "scrollParent" === i ? "BODY" === (u = l(a(e))).nodeName && (u = t.ownerDocument.documentElement) : u = "window" === i ? t.ownerDocument.documentElement : i;
                var f = C(u, s, o);
                if ("HTML" !== u.nodeName || S(s)) r = f;
                else {
                    var d = y(t.ownerDocument),
                        h = d.height,
                        p = d.width;
                    r.top += f.top - f.marginTop, r.bottom = h + f.top, r.left += f.left - f.marginLeft, r.right = p + f.left
                }
            }
            var g = "number" == typeof (n = n || 0);
            return r.left += g ? n : n.left || 0, r.top += g ? n : n.top || 0, r.right -= g ? n : n.right || 0, r.bottom -= g ? n : n.bottom || 0, r
        }

        function N(t) {
            return t.width * t.height
        }

        function I(t, e, n, i, o) {
            var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === t.indexOf("auto")) return t;
            var s = x(n, i, r, o),
                a = {
                    top: {
                        width: s.width,
                        height: e.top - s.top
                    },
                    right: {
                        width: s.right - e.right,
                        height: s.height
                    },
                    bottom: {
                        width: s.width,
                        height: s.bottom - e.bottom
                    },
                    left: {
                        width: e.left - s.left,
                        height: s.height
                    }
                },
                l = Object.keys(a).map((function (t) {
                    return L({
                        key: t
                    }, a[t], {
                        area: N(a[t])
                    })
                })).sort((function (t, e) {
                    return e.area - t.area
                })),
                c = l.filter((function (t) {
                    var e = t.width,
                        i = t.height;
                    return e >= n.clientWidth && i >= n.clientHeight
                })),
                u = c.length > 0 ? c[0].key : l[0].key,
                f = t.split("-")[1];
            return u + (f ? "-" + f : "")
        }

        function j(t, e, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                o = i ? D(e) : m(e, c(n));
            return C(n, o, i)
        }

        function P(t) {
            var e = t.ownerDocument.defaultView.getComputedStyle(t),
                n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
            return {
                width: t.offsetWidth + i,
                height: t.offsetHeight + n
            }
        }

        function M(t) {
            var e = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return t.replace(/left|right|bottom|top/g, (function (t) {
                return e[t]
            }))
        }

        function H(t, e, n) {
            n = n.split("-")[0];
            var i = P(t),
                o = {
                    width: i.width,
                    height: i.height
                },
                r = -1 !== ["right", "left"].indexOf(n),
                s = r ? "top" : "left",
                a = r ? "left" : "top",
                l = r ? "height" : "width",
                c = r ? "width" : "height";
            return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[M(a)], o
        }

        function B(t, e) {
            return Array.prototype.find ? t.find(e) : t.filter(e)[0]
        }

        function R(t, e, n) {
            return (void 0 === n ? t : t.slice(0, function (t, e, n) {
                if (Array.prototype.findIndex) return t.findIndex((function (t) {
                    return t[e] === n
                }));
                var i = B(t, (function (t) {
                    return t[e] === n
                }));
                return t.indexOf(i)
            }(t, "name", n))).forEach((function (t) {
                t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = t.function || t.fn;
                t.enabled && r(n) && (e.offsets.popper = k(e.offsets.popper), e.offsets.reference = k(e.offsets.reference), e = n(e, t))
            })), e
        }

        function F() {
            if (!this.state.isDestroyed) {
                var t = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {}
                };
                t.offsets.reference = j(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = I(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = H(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = R(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
            }
        }

        function W(t, e) {
            return t.some((function (t) {
                var n = t.name;
                return t.enabled && n === e
            }))
        }

        function U(t) {
            for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
                var o = e[i],
                    r = o ? "" + o + n : t;
                if (void 0 !== document.body.style[r]) return r
            }
            return null
        }

        function Q() {
            return this.state.isDestroyed = !0, W(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[U("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function V(t) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window
        }

        function q(t, e, n, i) {
            n.updateBound = i, V(t).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            var o = l(t);
            return function t(e, n, i, o) {
                var r = "BODY" === e.nodeName,
                    s = r ? e.ownerDocument.defaultView : e;
                s.addEventListener(n, i, {
                    passive: !0
                }), r || t(l(s.parentNode), n, i, o), o.push(s)
            }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
        }

        function Y() {
            this.state.eventsEnabled || (this.state = q(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function z() {
            var t, e;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, V(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function (t) {
                t.removeEventListener("scroll", e.updateBound)
            })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
        }

        function K(t) {
            return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
        }

        function X(t, e) {
            Object.keys(e).forEach((function (n) {
                var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && K(e[n]) && (i = "px"), t.style[n] = e[n] + i
            }))
        }
        var G = n && /Firefox/i.test(navigator.userAgent);

        function $(t, e, n) {
            var i = B(t, (function (t) {
                    return t.name === e
                })),
                o = !!i && t.some((function (t) {
                    return t.name === n && t.enabled && t.order < i.order
                }));
            if (!o) {
                var r = "`" + e + "`",
                    s = "`" + n + "`";
                console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
            }
            return o
        }
        var Z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            J = Z.slice(3);

        function tt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = J.indexOf(t),
                i = J.slice(n + 1).concat(J.slice(0, n));
            return e ? i.reverse() : i
        }
        var et = "flip",
            nt = "clockwise",
            it = "counterclockwise";

        function ot(t, e, n, i) {
            var o = [0, 0],
                r = -1 !== ["right", "left"].indexOf(i),
                s = t.split(/(\+|\-)/).map((function (t) {
                    return t.trim()
                })),
                a = s.indexOf(B(s, (function (t) {
                    return -1 !== t.search(/,|\s/)
                })));
            s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
            return (c = c.map((function (t, i) {
                var o = (1 === i ? !r : r) ? "height" : "width",
                    s = !1;
                return t.reduce((function (t, e) {
                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
                }), []).map((function (t) {
                    return function (t, e, n, i) {
                        var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                            r = +o[1],
                            s = o[2];
                        if (!r) return t;
                        if (0 === s.indexOf("%")) {
                            var a = void 0;
                            switch (s) {
                                case "%p":
                                    a = n;
                                    break;
                                case "%":
                                case "%r":
                                default:
                                    a = i
                            }
                            return k(a)[e] / 100 * r
                        }
                        if ("vh" === s || "vw" === s) {
                            return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
                        }
                        return r
                    }(t, o, e, n)
                }))
            }))).forEach((function (t, e) {
                t.forEach((function (n, i) {
                    K(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1))
                }))
            })), o
        }
        var rt = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (t) {
                            var e = t.placement,
                                n = e.split("-")[0],
                                i = e.split("-")[1];
                            if (i) {
                                var o = t.offsets,
                                    r = o.reference,
                                    s = o.popper,
                                    a = -1 !== ["bottom", "top"].indexOf(n),
                                    l = a ? "left" : "top",
                                    c = a ? "width" : "height",
                                    u = {
                                        start: T({}, l, r[l]),
                                        end: T({}, l, r[l] + r[c] - s[c])
                                    };
                                t.offsets.popper = L({}, s, u[i])
                            }
                            return t
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (t, e) {
                            var n = e.offset,
                                i = t.placement,
                                o = t.offsets,
                                r = o.popper,
                                s = o.reference,
                                a = i.split("-")[0],
                                l = void 0;
                            return l = K(+n) ? [+n, 0] : ot(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (t, e) {
                            var n = e.boundariesElement || h(t.instance.popper);
                            t.instance.reference === n && (n = h(n));
                            var i = U("transform"),
                                o = t.instance.popper.style,
                                r = o.top,
                                s = o.left,
                                a = o[i];
                            o.top = "", o.left = "", o[i] = "";
                            var l = x(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                            o.top = r, o.left = s, o[i] = a, e.boundaries = l;
                            var c = e.priority,
                                u = t.offsets.popper,
                                f = {
                                    primary: function (t) {
                                        var n = u[t];
                                        return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), T({}, t, n)
                                    },
                                    secondary: function (t) {
                                        var n = "right" === t ? "left" : "top",
                                            i = u[n];
                                        return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), T({}, n, i)
                                    }
                                };
                            return c.forEach((function (t) {
                                var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                                u = L({}, u, f[e](t))
                            })), t.offsets.popper = u, t
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (t) {
                            var e = t.offsets,
                                n = e.popper,
                                i = e.reference,
                                o = t.placement.split("-")[0],
                                r = Math.floor,
                                s = -1 !== ["top", "bottom"].indexOf(o),
                                a = s ? "right" : "bottom",
                                l = s ? "left" : "top",
                                c = s ? "width" : "height";
                            return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (t, e) {
                            var n;
                            if (!$(t.instance.modifiers, "arrow", "keepTogether")) return t;
                            var i = e.element;
                            if ("string" == typeof i) {
                                if (!(i = t.instance.popper.querySelector(i))) return t
                            } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                            var o = t.placement.split("-")[0],
                                r = t.offsets,
                                a = r.popper,
                                l = r.reference,
                                c = -1 !== ["left", "right"].indexOf(o),
                                u = c ? "height" : "width",
                                f = c ? "Top" : "Left",
                                d = f.toLowerCase(),
                                h = c ? "left" : "top",
                                p = c ? "bottom" : "right",
                                m = P(i)[u];
                            l[p] - m < a[d] && (t.offsets.popper[d] -= a[d] - (l[p] - m)), l[d] + m > a[p] && (t.offsets.popper[d] += l[d] + m - a[p]), t.offsets.popper = k(t.offsets.popper);
                            var g = l[d] + l[u] / 2 - m / 2,
                                v = s(t.instance.popper),
                                _ = parseFloat(v["margin" + f]),
                                b = parseFloat(v["border" + f + "Width"]),
                                y = g - t.offsets.popper[d] - _ - b;
                            return y = Math.max(Math.min(a[u] - m, y), 0), t.arrowElement = i, t.offsets.arrow = (T(n = {}, d, Math.round(y)), T(n, h, ""), n), t
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (t, e) {
                            if (W(t.instance.modifiers, "inner")) return t;
                            if (t.flipped && t.placement === t.originalPlacement) return t;
                            var n = x(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                                i = t.placement.split("-")[0],
                                o = M(i),
                                r = t.placement.split("-")[1] || "",
                                s = [];
                            switch (e.behavior) {
                                case et:
                                    s = [i, o];
                                    break;
                                case nt:
                                    s = tt(i);
                                    break;
                                case it:
                                    s = tt(i, !0);
                                    break;
                                default:
                                    s = e.behavior
                            }
                            return s.forEach((function (a, l) {
                                if (i !== a || s.length === l + 1) return t;
                                i = t.placement.split("-")[0], o = M(i);
                                var c = t.offsets.popper,
                                    u = t.offsets.reference,
                                    f = Math.floor,
                                    d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                                    h = f(c.left) < f(n.left),
                                    p = f(c.right) > f(n.right),
                                    m = f(c.top) < f(n.top),
                                    g = f(c.bottom) > f(n.bottom),
                                    v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
                                    _ = -1 !== ["top", "bottom"].indexOf(i),
                                    b = !!e.flipVariations && (_ && "start" === r && h || _ && "end" === r && p || !_ && "start" === r && m || !_ && "end" === r && g),
                                    y = !!e.flipVariationsByContent && (_ && "start" === r && p || _ && "end" === r && h || !_ && "start" === r && g || !_ && "end" === r && m),
                                    w = b || y;
                                (d || v || w) && (t.flipped = !0, (d || v) && (i = s[l + 1]), w && (r = function (t) {
                                    return "end" === t ? "start" : "start" === t ? "end" : t
                                }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = L({}, t.offsets.popper, H(t.instance.popper, t.offsets.reference, t.placement)), t = R(t.instance.modifiers, t, "flip"))
                            })), t
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (t) {
                            var e = t.placement,
                                n = e.split("-")[0],
                                i = t.offsets,
                                o = i.popper,
                                r = i.reference,
                                s = -1 !== ["left", "right"].indexOf(n),
                                a = -1 === ["top", "left"].indexOf(n);
                            return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = M(e), t.offsets.popper = k(o), t
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (t) {
                            if (!$(t.instance.modifiers, "hide", "preventOverflow")) return t;
                            var e = t.offsets.reference,
                                n = B(t.instance.modifiers, (function (t) {
                                    return "preventOverflow" === t.name
                                })).boundaries;
                            if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                                if (!0 === t.hide) return t;
                                t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === t.hide) return t;
                                t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                            }
                            return t
                        }
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (t, e) {
                            var n = e.x,
                                i = e.y,
                                o = t.offsets.popper,
                                r = B(t.instance.modifiers, (function (t) {
                                    return "applyStyle" === t.name
                                })).gpuAcceleration;
                            void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var s = void 0 !== r ? r : e.gpuAcceleration,
                                a = h(t.instance.popper),
                                l = O(a),
                                c = {
                                    position: o.position
                                },
                                u = function (t, e) {
                                    var n = t.offsets,
                                        i = n.popper,
                                        o = n.reference,
                                        r = Math.round,
                                        s = Math.floor,
                                        a = function (t) {
                                            return t
                                        },
                                        l = r(o.width),
                                        c = r(i.width),
                                        u = -1 !== ["left", "right"].indexOf(t.placement),
                                        f = -1 !== t.placement.indexOf("-"),
                                        d = e ? u || f || l % 2 == c % 2 ? r : s : a,
                                        h = e ? r : a;
                                    return {
                                        left: d(l % 2 == 1 && c % 2 == 1 && !f && e ? i.left - 1 : i.left),
                                        top: h(i.top),
                                        bottom: h(i.bottom),
                                        right: d(i.right)
                                    }
                                }(t, window.devicePixelRatio < 2 || !G),
                                f = "bottom" === n ? "top" : "bottom",
                                d = "right" === i ? "left" : "right",
                                p = U("transform"),
                                m = void 0,
                                g = void 0;
                            if (g = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, m = "right" === d ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + m + "px, " + g + "px, 0)", c[f] = 0, c[d] = 0, c.willChange = "transform";
                            else {
                                var v = "bottom" === f ? -1 : 1,
                                    _ = "right" === d ? -1 : 1;
                                c[f] = g * v, c[d] = m * _, c.willChange = f + ", " + d
                            }
                            var b = {
                                "x-placement": t.placement
                            };
                            return t.attributes = L({}, b, t.attributes), t.styles = L({}, c, t.styles), t.arrowStyles = L({}, t.offsets.arrow, t.arrowStyles), t
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (t) {
                            var e, n;
                            return X(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function (t) {
                                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                            })), t.arrowElement && Object.keys(t.arrowStyles).length && X(t.arrowElement, t.arrowStyles), t
                        },
                        onLoad: function (t, e, n, i, o) {
                            var r = j(o, e, t, n.positionFixed),
                                s = I(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return e.setAttribute("x-placement", s), X(e, {
                                position: n.positionFixed ? "fixed" : "absolute"
                            }), n
                        },
                        gpuAcceleration: void 0
                    }
                }
            },
            st = function () {
                function t(e, n) {
                    var i = this,
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    w(this, t), this.scheduleUpdate = function () {
                        return requestAnimationFrame(i.update)
                    }, this.update = o(this.update.bind(this)), this.options = L({}, t.Defaults, s), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(L({}, t.Defaults.modifiers, s.modifiers)).forEach((function (e) {
                        i.options.modifiers[e] = L({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {})
                    })), this.modifiers = Object.keys(this.options.modifiers).map((function (t) {
                        return L({
                            name: t
                        }, i.options.modifiers[t])
                    })).sort((function (t, e) {
                        return t.order - e.order
                    })), this.modifiers.forEach((function (t) {
                        t.enabled && r(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                    })), this.update();
                    var a = this.options.eventsEnabled;
                    a && this.enableEventListeners(), this.state.eventsEnabled = a
                }
                return E(t, [{
                    key: "update",
                    value: function () {
                        return F.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        return Q.call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function () {
                        return Y.call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function () {
                        return z.call(this)
                    }
                }]), t
            }();
        st.Utils = ("undefined" != typeof window ? window : t).PopperUtils, st.placements = Z, st.Defaults = rt, e.a = st
    }).call(this, n(4))
}, function (t, e, n) {
    n(2), n(10), t.exports = n(15)
}, function (t, e, n) {
    n(3)
}, function (t, e, n) {
    "use strict";
    n.r(e), n.d(e, "Alert", (function () {
        return G
    })), n.d(e, "Button", (function () {
        return J
    })), n.d(e, "Carousel", (function () {
        return ft
    })), n.d(e, "Collapse", (function () {
        return vt
    })), n.d(e, "Dropdown", (function () {
        return Lt
    })), n.d(e, "Modal", (function () {
        return St
    })), n.d(e, "Popover", (function () {
        return Zt
    })), n.d(e, "ScrollSpy", (function () {
        return oe
    })), n.d(e, "Tab", (function () {
        return ae
    })), n.d(e, "Toast", (function () {
        return de
    })), n.d(e, "Tooltip", (function () {
        return Vt
    }));
    var i = n(0);

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function r(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t
    }

    function s(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function a(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function l(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? a(Object(n), !0).forEach((function (e) {
                s(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }
    var c, u, f, d, h = function (t) {
            do {
                t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        p = function (t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : null
            }
            return e
        },
        m = function (t) {
            var e = p(t);
            return e && document.querySelector(e) ? e : null
        },
        g = function (t) {
            var e = p(t);
            return e ? document.querySelector(e) : null
        },
        v = function (t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t),
                n = e.transitionDuration,
                i = e.transitionDelay,
                o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        _ = function (t) {
            t.dispatchEvent(new Event("transitionend"))
        },
        b = function (t) {
            return (t[0] || t).nodeType
        },
        y = function (t, e) {
            var n = !1,
                i = e + 5;
            t.addEventListener("transitionend", (function e() {
                n = !0, t.removeEventListener("transitionend", e)
            })), setTimeout((function () {
                n || _(t)
            }), i)
        },
        w = function (t, e, n) {
            Object.keys(n).forEach((function (i) {
                var o, r = n[i],
                    s = e[i],
                    a = s && b(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
            }))
        },
        E = function (t) {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                var e = getComputedStyle(t),
                    n = getComputedStyle(t.parentNode);
                return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
            }
            return !1
        },
        T = function () {
            return function () {}
        },
        L = function (t) {
            return t.offsetHeight
        },
        k = function () {
            var t = window.jQuery;
            return t && !document.body.hasAttribute("data-no-jquery") ? t : null
        },
        O = (c = {}, u = 1, {
            set: function (t, e, n) {
                void 0 === t.key && (t.key = {
                    key: e,
                    id: u
                }, u++), c[t.key.id] = n
            },
            get: function (t, e) {
                if (!t || void 0 === t.key) return null;
                var n = t.key;
                return n.key === e ? c[n.id] : null
            },
            delete: function (t, e) {
                if (void 0 !== t.key) {
                    var n = t.key;
                    n.key === e && (delete c[n.id], delete t.key)
                }
            }
        }),
        C = function (t, e, n) {
            O.set(t, e, n)
        },
        A = function (t, e) {
            return O.get(t, e)
        },
        S = function (t, e) {
            O.delete(t, e)
        },
        D = Element.prototype.querySelectorAll,
        x = Element.prototype.querySelector,
        N = (f = new CustomEvent("Bootstrap", {
            cancelable: !0
        }), (d = document.createElement("div")).addEventListener("Bootstrap", (function () {
            return null
        })), f.preventDefault(), d.dispatchEvent(f), f.defaultPrevented),
        I = /:scope\b/;
    (function () {
        var t = document.createElement("div");
        try {
            t.querySelectorAll(":scope *")
        } catch (t) {
            return !1
        }
        return !0
    })() || (D = function (t) {
        if (!I.test(t)) return this.querySelectorAll(t);
        var e = Boolean(this.id);
        e || (this.id = h("scope"));
        var n = null;
        try {
            t = t.replace(I, "#" + this.id), n = this.querySelectorAll(t)
        } finally {
            e || this.removeAttribute("id")
        }
        return n
    }, x = function (t) {
        if (!I.test(t)) return this.querySelector(t);
        var e = D.call(this, t);
        return void 0 !== e[0] ? e[0] : null
    });
    var j = k(),
        P = /[^.]*(?=\..*)\.|.*/,
        M = /\..*/,
        H = /::\d+$/,
        B = {},
        R = 1,
        F = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        W = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];

    function U(t, e) {
        return e && e + "::" + R++ || t.uidEvent || R++
    }

    function Q(t) {
        var e = U(t);
        return t.uidEvent = e, B[e] = B[e] || {}, B[e]
    }

    function V(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
            var s = t[i[o]];
            if (s.originalHandler === e && s.delegationSelector === n) return s
        }
        return null
    }

    function q(t, e, n) {
        var i = "string" == typeof e,
            o = i ? n : e,
            r = t.replace(M, ""),
            s = F[r];
        return s && (r = s), W.indexOf(r) > -1 || (r = t), [i, o, r]
    }

    function Y(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || (n = i, i = null);
            var r = q(e, n, i),
                s = r[0],
                a = r[1],
                l = r[2],
                c = Q(t),
                u = c[l] || (c[l] = {}),
                f = V(u, a, s ? n : null);
            if (f) f.oneOff = f.oneOff && o;
            else {
                var d = U(a, e.replace(P, "")),
                    h = s ? function (t, e, n) {
                        return function i(o) {
                            for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode)
                                for (var a = r.length; a--;)
                                    if (r[a] === s) return i.oneOff && K.off(t, o.type, n), n.apply(s, [o]);
                            return null
                        }
                    }(t, n, i) : function (t, e) {
                        return function n(i) {
                            return n.oneOff && K.off(t, i.type, e), e.apply(t, [i])
                        }
                    }(t, n);
                h.delegationSelector = s ? n : null, h.originalHandler = a, h.oneOff = o, h.uidEvent = d, u[d] = h, t.addEventListener(l, h, s)
            }
        }
    }

    function z(t, e, n, i, o) {
        var r = V(e[n], i, o);
        r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent])
    }
    var K = {
            on: function (t, e, n, i) {
                Y(t, e, n, i, !1)
            },
            one: function (t, e, n, i) {
                Y(t, e, n, i, !0)
            },
            off: function (t, e, n, i) {
                if ("string" == typeof e && t) {
                    var o = q(e, n, i),
                        r = o[0],
                        s = o[1],
                        a = o[2],
                        l = a !== e,
                        c = Q(t),
                        u = "." === e.charAt(0);
                    if (void 0 === s) {
                        u && Object.keys(c).forEach((function (n) {
                            ! function (t, e, n, i) {
                                var o = e[n] || {};
                                Object.keys(o).forEach((function (r) {
                                    if (r.indexOf(i) > -1) {
                                        var s = o[r];
                                        z(t, e, n, s.originalHandler, s.delegationSelector)
                                    }
                                }))
                            }(t, c, n, e.slice(1))
                        }));
                        var f = c[a] || {};
                        Object.keys(f).forEach((function (n) {
                            var i = n.replace(H, "");
                            if (!l || e.indexOf(i) > -1) {
                                var o = f[n];
                                z(t, c, a, o.originalHandler, o.delegationSelector)
                            }
                        }))
                    } else {
                        if (!c || !c[a]) return;
                        z(t, c, a, s, r ? n : null)
                    }
                }
            },
            trigger: function (t, e, n) {
                if ("string" != typeof e || !t) return null;
                var i, o = e.replace(M, ""),
                    r = e !== o,
                    s = W.indexOf(o) > -1,
                    a = !0,
                    l = !0,
                    c = !1,
                    u = null;
                return r && j && (i = j.Event(e, n), j(t).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), c = i.isDefaultPrevented()), s ? (u = document.createEvent("HTMLEvents")).initEvent(o, a, !0) : u = new CustomEvent(e, {
                    bubbles: a,
                    cancelable: !0
                }), void 0 !== n && Object.keys(n).forEach((function (t) {
                    Object.defineProperty(u, t, {
                        get: function () {
                            return n[t]
                        }
                    })
                })), c && (u.preventDefault(), N || Object.defineProperty(u, "defaultPrevented", {
                    get: function () {
                        return !0
                    }
                })), l && t.dispatchEvent(u), u.defaultPrevented && void 0 !== i && i.preventDefault(), u
            }
        },
        X = "alert",
        G = function () {
            function t(t) {
                this._element = t, this._element && C(t, "bs.alert", this)
            }
            var e = t.prototype;
            return e.close = function (t) {
                var e = this._element;
                t && (e = this._getRootElement(t));
                var n = this._triggerCloseEvent(e);
                null === n || n.defaultPrevented || this._removeElement(e)
            }, e.dispose = function () {
                S(this._element, "bs.alert"), this._element = null
            }, e._getRootElement = function (t) {
                return g(t) || t.closest(".alert")
            }, e._triggerCloseEvent = function (t) {
                return K.trigger(t, "close.bs.alert")
            }, e._removeElement = function (t) {
                var e = this;
                if (t.classList.remove("show"), t.classList.contains("fade")) {
                    var n = v(t);
                    K.one(t, "transitionend", (function () {
                        return e._destroyElement(t)
                    })), y(t, n)
                } else this._destroyElement(t)
            }, e._destroyElement = function (t) {
                t.parentNode && t.parentNode.removeChild(t), K.trigger(t, "closed.bs.alert")
            }, t.jQueryInterface = function (e) {
                return this.each((function () {
                    var n = A(this, "bs.alert");
                    n || (n = new t(this)), "close" === e && n[e](this)
                }))
            }, t.handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, t.getInstance = function (t) {
                return A(t, "bs.alert")
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "5.0.0-alpha1"
                }
            }]), t
        }();
    K.on(document, "click.bs.alert.data-api", '[data-dismiss="alert"]', G.handleDismiss(new G));
    var $ = k();
    if ($) {
        var Z = $.fn[X];
        $.fn[X] = G.jQueryInterface, $.fn[X].Constructor = G, $.fn[X].noConflict = function () {
            return $.fn[X] = Z, G.jQueryInterface
        }
    }
    var J = function () {
        function t(t) {
            this._element = t, C(t, "bs.button", this)
        }
        var e = t.prototype;
        return e.toggle = function () {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }, e.dispose = function () {
            S(this._element, "bs.button"), this._element = null
        }, t.jQueryInterface = function (e) {
            return this.each((function () {
                var n = A(this, "bs.button");
                n || (n = new t(this)), "toggle" === e && n[e]()
            }))
        }, t.getInstance = function (t) {
            return A(t, "bs.button")
        }, r(t, null, [{
            key: "VERSION",
            get: function () {
                return "5.0.0-alpha1"
            }
        }]), t
    }();
    K.on(document, "click.bs.button.data-api", '[data-toggle="button"]', (function (t) {
        t.preventDefault();
        var e = t.target.closest('[data-toggle="button"]'),
            n = A(e, "bs.button");
        n || (n = new J(e)), n.toggle()
    }));
    var tt = k();
    if (tt) {
        var et = tt.fn.button;
        tt.fn.button = J.jQueryInterface, tt.fn.button.Constructor = J, tt.fn.button.noConflict = function () {
            return tt.fn.button = et, J.jQueryInterface
        }
    }

    function nt(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function it(t) {
        return t.replace(/[A-Z]/g, (function (t) {
            return "-" + t.toLowerCase()
        }))
    }
    var ot = {
            setDataAttribute: function (t, e, n) {
                t.setAttribute("data-" + it(e), n)
            },
            removeDataAttribute: function (t, e) {
                t.removeAttribute("data-" + it(e))
            },
            getDataAttributes: function (t) {
                if (!t) return {};
                var e = l({}, t.dataset);
                return Object.keys(e).forEach((function (t) {
                    e[t] = nt(e[t])
                })), e
            },
            getDataAttribute: function (t, e) {
                return nt(t.getAttribute("data-" + it(e)))
            },
            offset: function (t) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft
                }
            },
            position: function (t) {
                return {
                    top: t.offsetTop,
                    left: t.offsetLeft
                }
            },
            toggleClass: function (t, e) {
                t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e))
            }
        },
        rt = {
            matches: function (t, e) {
                return t.matches(e)
            },
            find: function (t, e) {
                var n;
                return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, D.call(e, t))
            },
            findOne: function (t, e) {
                return void 0 === e && (e = document.documentElement), x.call(e, t)
            },
            children: function (t, e) {
                var n, i = (n = []).concat.apply(n, t.children);
                return i.filter((function (t) {
                    return t.matches(e)
                }))
            },
            parents: function (t, e) {
                for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.parentNode;
                return n
            },
            prev: function (t, e) {
                for (var n = t.previousElementSibling; n;) {
                    if (n.matches(e)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next: function (t, e) {
                for (var n = t.nextElementSibling; n;) {
                    if (this.matches(n, e)) return [n];
                    n = n.nextElementSibling
                }
                return []
            }
        },
        st = "carousel",
        at = ".bs.carousel",
        lt = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        ct = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        ut = {
            TOUCH: "touch",
            PEN: "pen"
        },
        ft = function () {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = rt.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners(), C(t, "bs.carousel", this)
            }
            var e = t.prototype;
            return e.next = function () {
                this._isSliding || this._slide("next")
            }, e.nextWhenVisible = function () {
                !document.hidden && E(this._element) && this.next()
            }, e.prev = function () {
                this._isSliding || this._slide("prev")
            }, e.pause = function (t) {
                t || (this._isPaused = !0), rt.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (_(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function (t) {
                var e = this;
                this._activeElement = rt.findOne(".active.carousel-item", this._element);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) K.one(this._element, "slid.bs.carousel", (function () {
                        return e.to(t)
                    }));
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = t > n ? "next" : "prev";
                        this._slide(i, this._items[t])
                    }
            }, e.dispose = function () {
                K.off(this._element, at), S(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function (t) {
                return t = l(l({}, lt), t), w(st, t, ct), t
            }, e._handleSwipe = function () {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, e._addEventListeners = function () {
                var t = this;
                this._config.keyboard && K.on(this._element, "keydown.bs.carousel", (function (e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && (K.on(this._element, "mouseenter.bs.carousel", (function (e) {
                    return t.pause(e)
                })), K.on(this._element, "mouseleave.bs.carousel", (function (e) {
                    return t.cycle(e)
                }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
            }, e._addTouchEventListeners = function () {
                var t = this,
                    e = function (e) {
                        t._pointerEvent && ut[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
                    },
                    n = function (e) {
                        t._pointerEvent && ut[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
                            return t.cycle(e)
                        }), 500 + t._config.interval))
                    };
                rt.find(".carousel-item img", this._element).forEach((function (t) {
                    K.on(t, "dragstart.bs.carousel", (function (t) {
                        return t.preventDefault()
                    }))
                })), this._pointerEvent ? (K.on(this._element, "pointerdown.bs.carousel", (function (t) {
                    return e(t)
                })), K.on(this._element, "pointerup.bs.carousel", (function (t) {
                    return n(t)
                })), this._element.classList.add("pointer-event")) : (K.on(this._element, "touchstart.bs.carousel", (function (t) {
                    return e(t)
                })), K.on(this._element, "touchmove.bs.carousel", (function (e) {
                    return function (e) {
                        e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                    }(e)
                })), K.on(this._element, "touchend.bs.carousel", (function (t) {
                    return n(t)
                })))
            }, e._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
                    case "ArrowLeft":
                        t.preventDefault(), this.prev();
                        break;
                    case "ArrowRight":
                        t.preventDefault(), this.next()
                }
            }, e._getItemIndex = function (t) {
                return this._items = t && t.parentNode ? rt.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
            }, e._getItemByDirection = function (t, e) {
                var n = "next" === t,
                    i = "prev" === t,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function (t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(rt.findOne(".active.carousel-item", this._element));
                return K.trigger(this._element, "slide.bs.carousel", {
                    relatedTarget: t,
                    direction: e,
                    from: i,
                    to: n
                })
            }, e._setActiveIndicatorElement = function (t) {
                if (this._indicatorsElement) {
                    for (var e = rt.find(".active", this._indicatorsElement), n = 0; n < e.length; n++) e[n].classList.remove("active");
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && i.classList.add("active")
                }
            }, e._slide = function (t, e) {
                var n, i, o, r = this,
                    s = rt.findOne(".active.carousel-item", this._element),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if ("next" === t ? (n = "carousel-item-left", i = "carousel-item-next", o = "left") : (n = "carousel-item-right", i = "carousel-item-prev", o = "right"), l && l.classList.contains("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
                    if (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), this._element.classList.contains("slide")) {
                        l.classList.add(i), L(l), s.classList.add(n), l.classList.add(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var d = v(s);
                        K.one(s, "transitionend", (function () {
                            l.classList.remove(n, i), l.classList.add("active"), s.classList.remove("active", i, n), r._isSliding = !1, setTimeout((function () {
                                K.trigger(r._element, "slid.bs.carousel", {
                                    relatedTarget: l,
                                    direction: o,
                                    from: a,
                                    to: c
                                })
                            }), 0)
                        })), y(s, d)
                    } else s.classList.remove("active"), l.classList.add("active"), this._isSliding = !1, K.trigger(this._element, "slid.bs.carousel", {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    u && this.cycle()
                }
            }, t.carouselInterface = function (e, n) {
                var i = A(e, "bs.carousel"),
                    o = l(l({}, lt), ot.getDataAttributes(e));
                "object" == typeof n && (o = l(l({}, o), n));
                var r = "string" == typeof n ? n : o.slide;
                if (i || (i = new t(e, o)), "number" == typeof n) i.to(n);
                else if ("string" == typeof r) {
                    if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                    i[r]()
                } else o.interval && o.ride && (i.pause(), i.cycle())
            }, t.jQueryInterface = function (e) {
                return this.each((function () {
                    t.carouselInterface(this, e)
                }))
            }, t.dataApiClickHandler = function (e) {
                var n = g(this);
                if (n && n.classList.contains("carousel")) {
                    var i = l(l({}, ot.getDataAttributes(n)), ot.getDataAttributes(this)),
                        o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1), t.carouselInterface(n, i), o && A(n, "bs.carousel").to(o), e.preventDefault()
                }
            }, t.getInstance = function (t) {
                return A(t, "bs.carousel")
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "5.0.0-alpha1"
                }
            }, {
                key: "Default",
                get: function () {
                    return lt
                }
            }]), t
        }();
    K.on(document, "click.bs.carousel.data-api", "[data-slide], [data-slide-to]", ft.dataApiClickHandler), K.on(window, "load.bs.carousel.data-api", (function () {
        for (var t = rt.find('[data-ride="carousel"]'), e = 0, n = t.length; e < n; e++) ft.carouselInterface(t[e], A(t[e], "bs.carousel"))
    }));
    var dt = k();
    if (dt) {
        var ht = dt.fn[st];
        dt.fn[st] = ft.jQueryInterface, dt.fn[st].Constructor = ft, dt.fn[st].noConflict = function () {
            return dt.fn[st] = ht, ft.jQueryInterface
        }
    }
    var pt = "collapse",
        mt = {
            toggle: !0,
            parent: ""
        },
        gt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        vt = function () {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = rt.find('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]');
                for (var n = rt.find('[data-toggle="collapse"]'), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = m(r),
                        a = rt.find(s).filter((function (e) {
                            return e === t
                        }));
                    null !== s && a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), C(t, "bs.collapse", this)
            }
            var e = t.prototype;
            return e.toggle = function () {
                this._element.classList.contains("show") ? this.hide() : this.show()
            }, e.show = function () {
                var e = this;
                if (!this._isTransitioning && !this._element.classList.contains("show")) {
                    var n, i;
                    this._parent && 0 === (n = rt.find(".show, .collapsing", this._parent).filter((function (t) {
                        return "string" == typeof e._config.parent ? t.getAttribute("data-parent") === e._config.parent : t.classList.contains("collapse")
                    }))).length && (n = null);
                    var o = rt.findOne(this._selector);
                    if (n) {
                        var r = n.filter((function (t) {
                            return o !== t
                        }));
                        if ((i = r[0] ? A(r[0], "bs.collapse") : null) && i._isTransitioning) return
                    }
                    if (!K.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                        n && n.forEach((function (e) {
                            o !== e && t.collapseInterface(e, "hide"), i || C(e, "bs.collapse", null)
                        }));
                        var s = this._getDimension();
                        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((function (t) {
                            t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
                        })), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            l = v(this._element);
                        K.one(this._element, "transitionend", (function () {
                            e._element.classList.remove("collapsing"), e._element.classList.add("collapse", "show"), e._element.style[s] = "", e.setTransitioning(!1), K.trigger(e._element, "shown.bs.collapse")
                        })), y(this._element, l), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, e.hide = function () {
                var t = this;
                if (!this._isTransitioning && this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                    var e = this._getDimension();
                    this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", L(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                    var n = this._triggerArray.length;
                    if (n > 0)
                        for (var i = 0; i < n; i++) {
                            var o = this._triggerArray[i],
                                r = g(o);
                            r && !r.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1))
                        }
                    this.setTransitioning(!0);
                    this._element.style[e] = "";
                    var s = v(this._element);
                    K.one(this._element, "transitionend", (function () {
                        t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), K.trigger(t._element, "hidden.bs.collapse")
                    })), y(this._element, s)
                }
            }, e.setTransitioning = function (t) {
                this._isTransitioning = t
            }, e.dispose = function () {
                S(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function (t) {
                return (t = l(l({}, mt), t)).toggle = Boolean(t.toggle), w(pt, t, gt), t
            }, e._getDimension = function () {
                return this._element.classList.contains("width") ? "width" : "height"
            }, e._getParent = function () {
                var t = this,
                    e = this._config.parent;
                b(e) ? void 0 === e.jquery && void 0 === e[0] || (e = e[0]) : e = rt.findOne(e);
                var n = '[data-toggle="collapse"][data-parent="' + e + '"]';
                return rt.find(n, e).forEach((function (e) {
                    var n = g(e);
                    t._addAriaAndCollapsedClass(n, [e])
                })), e
            }, e._addAriaAndCollapsedClass = function (t, e) {
                if (t) {
                    var n = t.classList.contains("show");
                    e.length && e.forEach((function (t) {
                        n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n)
                    }))
                }
            }, t.collapseInterface = function (e, n) {
                var i = A(e, "bs.collapse"),
                    o = l(l(l({}, mt), ot.getDataAttributes(e)), "object" == typeof n && n ? n : {});
                if (!i && o.toggle && "string" == typeof n && /show|hide/.test(n) && (o.toggle = !1), i || (i = new t(e, o)), "string" == typeof n) {
                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function (e) {
                return this.each((function () {
                    t.collapseInterface(this, e)
                }))
            }, t.getInstance = function (t) {
                return A(t, "bs.collapse")
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "5.0.0-alpha1"
                }
            }, {
                key: "Default",
                get: function () {
                    return mt
                }
            }]), t
        }();
    K.on(document, "click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = ot.getDataAttributes(this),
            n = m(this);
        rt.find(n).forEach((function (t) {
            var n, i = A(t, "bs.collapse");
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, vt.collapseInterface(t, n)
        }))
    }));
    var _t = k();
    if (_t) {
        var bt = _t.fn[pt];
        _t.fn[pt] = vt.jQueryInterface, _t.fn[pt].Constructor = vt, _t.fn[pt].noConflict = function () {
            return _t.fn[pt] = bt, vt.jQueryInterface
        }
    }
    var yt = "dropdown",
        wt = new RegExp("ArrowUp|ArrowDown|Escape"),
        Et = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        Tt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        Lt = function () {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners(), C(t, "bs.dropdown", this)
            }
            var e = t.prototype;
            return e.toggle = function () {
                if (!this._element.disabled && !this._element.classList.contains("disabled")) {
                    var e = this._element.classList.contains("show");
                    t.clearMenus(), e || this.show()
                }
            }, e.show = function () {
                if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
                    var e = t.getParentFromElement(this._element),
                        n = {
                            relatedTarget: this._element
                        };
                    if (!K.trigger(this._element, "show.bs.dropdown", n).defaultPrevented) {
                        if (!this._inNavbar) {
                            if (void 0 === i.a) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = e : b(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && e.classList.add("position-static"), this._popper = new i.a(o, this._menu, this._getPopperConfig())
                        }
                        var r;
                        if ("ontouchstart" in document.documentElement && !e.closest(".navbar-nav"))(r = []).concat.apply(r, document.body.children).forEach((function (t) {
                            return K.on(t, "mouseover", null, (function () {}))
                        }));
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), ot.toggleClass(this._menu, "show"), ot.toggleClass(this._element, "show"), K.trigger(e, "shown.bs.dropdown", n)
                    }
                }
            }, e.hide = function () {
                if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
                    var e = t.getParentFromElement(this._element),
                        n = {
                            relatedTarget: this._element
                        };
                    K.trigger(e, "hide.bs.dropdown", n).defaultPrevented || (this._popper && this._popper.destroy(), ot.toggleClass(this._menu, "show"), ot.toggleClass(this._element, "show"), K.trigger(e, "hidden.bs.dropdown", n))
                }
            }, e.dispose = function () {
                S(this._element, "bs.dropdown"), K.off(this._element, ".bs.dropdown"), this._element = null, this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function () {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function () {
                var t = this;
                K.on(this._element, "click.bs.dropdown", (function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, e._getConfig = function (t) {
                return t = l(l(l({}, this.constructor.Default), ot.getDataAttributes(this._element)), t), w(yt, t, this.constructor.DefaultType), t
            }, e._getMenuElement = function () {
                return rt.next(this._element, ".dropdown-menu")[0]
            }, e._getPlacement = function () {
                var t = this._element.parentNode,
                    e = "bottom-start";
                return t.classList.contains("dropup") ? (e = "top-start", this._menu.classList.contains("dropdown-menu-right") && (e = "top-end")) : t.classList.contains("dropright") ? e = "right-start" : t.classList.contains("dropleft") ? e = "left-start" : this._menu.classList.contains("dropdown-menu-right") && (e = "bottom-end"), e
            }, e._detectNavbar = function () {
                return Boolean(this._element.closest(".navbar"))
            }, e._getOffset = function () {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = l(l({}, e.offsets), t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, e._getPopperConfig = function () {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), l(l({}, t), this._config.popperConfig)
            }, t.dropdownInterface = function (e, n) {
                var i = A(e, "bs.dropdown");
                if (i || (i = new t(e, "object" == typeof n ? n : null)), "string" == typeof n) {
                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function (e) {
                return this.each((function () {
                    t.dropdownInterface(this, e)
                }))
            }, t.clearMenus = function (e) {
                if (!e || 2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
                    for (var n = rt.find('[data-toggle="dropdown"]'), i = 0, o = n.length; i < o; i++) {
                        var r = t.getParentFromElement(n[i]),
                            s = A(n[i], "bs.dropdown"),
                            a = {
                                relatedTarget: n[i]
                            };
                        if (e && "click" === e.type && (a.clickEvent = e), s) {
                            var l = s._menu;
                            if (n[i].classList.contains("show"))
                                if (!(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && "Tab" === e.key) && l.contains(e.target)))
                                    if (!K.trigger(r, "hide.bs.dropdown", a).defaultPrevented) {
                                        var c;
                                        if ("ontouchstart" in document.documentElement)(c = []).concat.apply(c, document.body.children).forEach((function (t) {
                                            return K.off(t, "mouseover", null, (function () {}))
                                        }));
                                        n[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), l.classList.remove("show"), n[i].classList.remove("show"), K.trigger(r, "hidden.bs.dropdown", a)
                                    }
                        }
                    }
            }, t.getParentFromElement = function (t) {
                return g(t) || t.parentNode
            }, t.dataApiKeydownHandler = function (e) {
                if (!(/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !wt.test(e.key)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
                    var n = t.getParentFromElement(this),
                        i = this.classList.contains("show");
                    if ("Escape" === e.key) return (this.matches('[data-toggle="dropdown"]') ? this : rt.prev(this, '[data-toggle="dropdown"]')[0]).focus(), void t.clearMenus();
                    if (i && "Space" !== e.key) {
                        var o = rt.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", n).filter(E);
                        if (o.length) {
                            var r = o.indexOf(e.target);
                            "ArrowUp" === e.key && r > 0 && r--, "ArrowDown" === e.key && r < o.length - 1 && r++, o[r = -1 === r ? 0 : r].focus()
                        }
                    } else t.clearMenus()
                }
            }, t.getInstance = function (t) {
                return A(t, "bs.dropdown")
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "5.0.0-alpha1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Et
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Tt
                }
            }]), t
        }();
    K.on(document, "keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Lt.dataApiKeydownHandler), K.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", Lt.dataApiKeydownHandler), K.on(document, "click.bs.dropdown.data-api", Lt.clearMenus), K.on(document, "keyup.bs.dropdown.data-api", Lt.clearMenus), K.on(document, "click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (t) {
        t.preventDefault(), t.stopPropagation(), Lt.dropdownInterface(this, "toggle")
    })), K.on(document, "click.bs.dropdown.data-api", ".dropdown form", (function (t) {
        return t.stopPropagation()
    }));
    var kt = k();
    if (kt) {
        var Ot = kt.fn[yt];
        kt.fn[yt] = Lt.jQueryInterface, kt.fn[yt].Constructor = Lt, kt.fn[yt].noConflict = function () {
            return kt.fn[yt] = Ot, Lt.jQueryInterface
        }
    }
    var Ct = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        At = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        St = function () {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = rt.findOne(".modal-dialog", t), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0, C(t, "bs.modal", this)
            }
            var e = t.prototype;
            return e.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, e.show = function (t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    this._element.classList.contains("fade") && (this._isTransitioning = !0);
                    var n = K.trigger(this._element, "show.bs.modal", {
                        relatedTarget: t
                    });
                    this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), K.on(this._element, "click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (t) {
                        return e.hide(t)
                    })), K.on(this._dialog, "mousedown.dismiss.bs.modal", (function () {
                        K.one(e._element, "mouseup.dismiss.bs.modal", (function (t) {
                            t.target === e._element && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function () {
                        return e._showElement(t)
                    })))
                }
            }, e.hide = function (t) {
                var e = this;
                if ((t && t.preventDefault(), this._isShown && !this._isTransitioning) && !K.trigger(this._element, "hide.bs.modal").defaultPrevented) {
                    this._isShown = !1;
                    var n = this._element.classList.contains("fade");
                    if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), K.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.modal"), K.off(this._dialog, "mousedown.dismiss.bs.modal"), n) {
                        var i = v(this._element);
                        K.one(this._element, "transitionend", (function (t) {
                            return e._hideModal(t)
                        })), y(this._element, i)
                    } else this._hideModal()
                }
            }, e.dispose = function () {
                [window, this._element, this._dialog].forEach((function (t) {
                    return K.off(t, ".bs.modal")
                })), K.off(document, "focusin.bs.modal"), S(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, e.handleUpdate = function () {
                this._adjustDialog()
            }, e._getConfig = function (t) {
                return t = l(l({}, Ct), t), w("modal", t, At), t
            }, e._showElement = function (t) {
                var e = this,
                    n = this._element.classList.contains("fade"),
                    i = rt.findOne(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && L(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
                var o = function () {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, K.trigger(e._element, "shown.bs.modal", {
                        relatedTarget: t
                    })
                };
                if (n) {
                    var r = v(this._dialog);
                    K.one(this._dialog, "transitionend", o), y(this._dialog, r)
                } else o()
            }, e._enforceFocus = function () {
                var t = this;
                K.off(document, "focusin.bs.modal"), K.on(document, "focusin.bs.modal", (function (e) {
                    document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
                }))
            }, e._setEscapeEvent = function () {
                var t = this;
                this._isShown ? K.on(this._element, "keydown.dismiss.bs.modal", (function (e) {
                    t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
                })) : K.off(this._element, "keydown.dismiss.bs.modal")
            }, e._setResizeEvent = function () {
                var t = this;
                this._isShown ? K.on(window, "resize.bs.modal", (function () {
                    return t._adjustDialog()
                })) : K.off(window, "resize.bs.modal")
            }, e._hideModal = function () {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function () {
                    document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), K.trigger(t._element, "hidden.bs.modal")
                }))
            }, e._removeBackdrop = function () {
                this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
            }, e._showBackdrop = function (t) {
                var e = this,
                    n = this._element.classList.contains("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), K.on(this._element, "click.dismiss.bs.modal", (function (t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition()
                        })), n && L(this._backdrop), this._backdrop.classList.add("show"), !n) return void t();
                    var i = v(this._backdrop);
                    K.one(this._backdrop, "transitionend", t), y(this._backdrop, i)
                } else if (!this._isShown && this._backdrop) {
                    this._backdrop.classList.remove("show");
                    var o = function () {
                        e._removeBackdrop(), t()
                    };
                    if (this._element.classList.contains("fade")) {
                        var r = v(this._backdrop);
                        K.one(this._backdrop, "transitionend", o), y(this._backdrop, r)
                    } else o()
                } else t()
            }, e._triggerBackdropTransition = function () {
                var t = this;
                if ("static" === this._config.backdrop) {
                    if (K.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                    this._element.classList.add("modal-static");
                    var e = v(this._element);
                    K.one(this._element, "transitionend", (function () {
                        t._element.classList.remove("modal-static")
                    })), y(this._element, e), this._element.focus()
                } else this.hide()
            }, e._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function () {
                var t = this;
                if (this._isBodyOverflowing) {
                    rt.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function (e) {
                        var n = e.style.paddingRight,
                            i = window.getComputedStyle(e)["padding-right"];
                        ot.setDataAttribute(e, "padding-right", n), e.style.paddingRight = parseFloat(i) + t._scrollbarWidth + "px"
                    })), rt.find(".sticky-top").forEach((function (e) {
                        var n = e.style.marginRight,
                            i = window.getComputedStyle(e)["margin-right"];
                        ot.setDataAttribute(e, "margin-right", n), e.style.marginRight = parseFloat(i) - t._scrollbarWidth + "px"
                    }));
                    var e = document.body.style.paddingRight,
                        n = window.getComputedStyle(document.body)["padding-right"];
                    ot.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + "px"
                }
                document.body.classList.add("modal-open")
            }, e._resetScrollbar = function () {
                rt.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function (t) {
                    var e = ot.getDataAttribute(t, "padding-right");
                    void 0 !== e && (ot.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e)
                })), rt.find(".sticky-top").forEach((function (t) {
                    var e = ot.getDataAttribute(t, "margin-right");
                    void 0 !== e && (ot.removeDataAttribute(t, "margin-right"), t.style.marginRight = e)
                }));
                var t = ot.getDataAttribute(document.body, "padding-right");
                void 0 === t ? document.body.style.paddingRight = "" : (ot.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t)
            }, e._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t.jQueryInterface = function (e, n) {
                return this.each((function () {
                    var i = A(this, "bs.modal"),
                        o = l(l(l({}, Ct), ot.getDataAttributes(this)), "object" == typeof e && e ? e : {});
                    if (i || (i = new t(this, o)), "string" == typeof e) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e](n)
                    } else o.show && i.show(n)
                }))
            }, t.getInstance = function (t) {
                return A(t, "bs.modal")
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "5.0.0-alpha1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Ct
                }
            }]), t
        }();
    K.on(document, "click.bs.modal.data-api", '[data-toggle="modal"]', (function (t) {
        var e = this,
            n = g(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), K.one(n, "show.bs.modal", (function (t) {
            t.defaultPrevented || K.one(n, "hidden.bs.modal", (function () {
                E(e) && e.focus()
            }))
        }));
        var i = A(n, "bs.modal");
        if (!i) {
            var o = l(l({}, ot.getDataAttributes(n)), ot.getDataAttributes(this));
            i = new St(n, o)
        }
        i.show(this)
    }));
    var Dt = k();
    if (Dt) {
        var xt = Dt.fn.modal;
        Dt.fn.modal = St.jQueryInterface, Dt.fn.modal.Constructor = St, Dt.fn.modal.noConflict = function () {
            return Dt.fn.modal = xt, St.jQueryInterface
        }
    }
    var Nt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        It = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        jt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Pt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function Mt(t, e, n) {
        var i;
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var o = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function (t, n) {
                var i, o = s[t],
                    a = o.nodeName.toLowerCase();
                if (-1 === r.indexOf(a)) return o.parentNode.removeChild(o), "continue";
                var l = (i = []).concat.apply(i, o.attributes),
                    c = [].concat(e["*"] || [], e[a] || []);
                l.forEach((function (t) {
                    (function (t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === Nt.indexOf(n) || Boolean(t.nodeValue.match(It) || t.nodeValue.match(jt));
                        for (var i = e.filter((function (t) {
                                return t instanceof RegExp
                            })), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(t, c) || o.removeAttribute(t.nodeName)
                }))
            }, l = 0, c = s.length; l < c; l++) a(l);
        return o.body.innerHTML
    }
    var Ht = "tooltip",
        Bt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Rt = ["sanitize", "whiteList", "sanitizeFn"],
        Ft = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Wt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Ut = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Pt,
            popperConfig: null
        },
        Qt = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        Vt = function () {
            function t(t, e) {
                if (void 0 === i.a) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners(), C(t, this.constructor.DATA_KEY, this)
            }
            var e = t.prototype;
            return e.enable = function () {
                this._isEnabled = !0
            }, e.disable = function () {
                this._isEnabled = !1
            }, e.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function (t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = A(t.target, e);
                        n || (n = new this.constructor(t.target, this._getDelegateConfig()), C(t.target, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function () {
                clearTimeout(this._timeout), S(this.element, this.constructor.DATA_KEY), K.off(this.element, this.constructor.EVENT_KEY), K.off(this.element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function () {
                var t = this;
                if ("none" === this.element.style.display) throw new Error("Please use show on visible elements");
                if (this.isWithContent() && this._isEnabled) {
                    var e = K.trigger(this.element, this.constructor.Event.SHOW),
                        n = function t(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var n = e.getRootNode();
                                return n instanceof ShadowRoot ? n : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                        }(this.element),
                        o = null === n ? this.element.ownerDocument.documentElement.contains(this.element) : n.contains(this.element);
                    if (e.defaultPrevented || !o) return;
                    var r = this.getTipElement(),
                        s = h(this.constructor.NAME);
                    r.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && r.classList.add("fade");
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                        l = this._getAttachment(a);
                    this._addAttachmentClass(l);
                    var c, u = this._getContainer();
                    if (C(r, this.constructor.DATA_KEY, this), this.element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(r), K.trigger(this.element, this.constructor.Event.INSERTED), this._popper = new i.a(this.element, r, this._getPopperConfig(l)), r.classList.add("show"), "ontouchstart" in document.documentElement)(c = []).concat.apply(c, document.body.children).forEach((function (t) {
                        K.on(t, "mouseover", (function () {}))
                    }));
                    var f = function () {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, K.trigger(t.element, t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (this.tip.classList.contains("fade")) {
                        var d = v(this.tip);
                        K.one(this.tip, "transitionend", f), y(this.tip, d)
                    } else f()
                }
            }, e.hide = function () {
                var t = this,
                    e = this.getTipElement(),
                    n = function () {
                        "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), K.trigger(t.element, t.constructor.Event.HIDDEN), t._popper.destroy()
                    };
                if (!K.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
                    var i;
                    if (e.classList.remove("show"), "ontouchstart" in document.documentElement)(i = []).concat.apply(i, document.body.children).forEach((function (t) {
                        return K.off(t, "mouseover", T)
                    }));
                    if (this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
                        var o = v(e);
                        K.one(e, "transitionend", n), y(e, o)
                    } else n();
                    this._hoverState = ""
                }
            }, e.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function () {
                return Boolean(this.getTitle())
            }, e.getTipElement = function () {
                if (this.tip) return this.tip;
                var t = document.createElement("div");
                return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
            }, e.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(rt.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
            }, e.setElementContent = function (t, e) {
                if (null !== t) return "object" == typeof e && b(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = Mt(e, this.config.whiteList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
            }, e.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, e._getPopperConfig = function (t) {
                var e = this;
                return l(l({}, {
                    placement: t,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: "." + this.constructor.NAME + "-arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function (t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function (t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }), this.config.popperConfig)
            }, e._addAttachmentClass = function (t) {
                this.getTipElement().classList.add("bs-tooltip-" + t)
            }, e._getOffset = function () {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function (e) {
                    return e.offsets = l(l({}, e.offsets), t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, e._getContainer = function () {
                return !1 === this.config.container ? document.body : b(this.config.container) ? this.config.container : rt.findOne(this.config.container)
            }, e._getAttachment = function (t) {
                return Wt[t.toUpperCase()]
            }, e._setListeners = function () {
                var t = this;
                this.config.trigger.split(" ").forEach((function (e) {
                    if ("click" === e) K.on(t.element, t.constructor.Event.CLICK, t.config.selector, (function (e) {
                        return t.toggle(e)
                    }));
                    else if ("manual" !== e) {
                        var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        K.on(t.element, n, t.config.selector, (function (e) {
                            return t._enter(e)
                        })), K.on(t.element, i, t.config.selector, (function (e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function () {
                    t.element && t.hide()
                }, K.on(this.element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l(l({}, this.config), {}, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || A(t.target, n)) || (e = new this.constructor(t.target, this._getDelegateConfig()), C(t.target, n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function () {
                    "show" === e._hoverState && e.show()
                }), e.config.delay.show) : e.show())
            }, e._leave = function (t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || A(t.target, n)) || (e = new this.constructor(t.target, this._getDelegateConfig()), C(t.target, n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function () {
                    "out" === e._hoverState && e.hide()
                }), e.config.delay.hide) : e.hide())
            }, e._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, e._getConfig = function (t) {
                var e = ot.getDataAttributes(this.element);
                return Object.keys(e).forEach((function (t) {
                    -1 !== Rt.indexOf(t) && delete e[t]
                })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof (t = l(l(l({}, this.constructor.Default), e), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), w(Ht, t, this.constructor.DefaultType), t.sanitize && (t.template = Mt(t.template, t.whiteList, t.sanitizeFn)), t
            }, e._getDelegateConfig = function () {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, e._cleanTipClass = function () {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(Bt);
                null !== e && e.length > 0 && e.map((function (t) {
                    return t.trim()
                })).forEach((function (e) {
                    return t.classList.remove(e)
                }))
            }, e._handlePopperPlacementChange = function (t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement))
            }, e._fixTransition = function () {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (t.classList.remove("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t.jQueryInterface = function (e) {
                return this.each((function () {
                    var n = A(this, "bs.tooltip"),
                        i = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, t.getInstance = function (t) {
                return A(t, "bs.tooltip")
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "5.0.0-alpha1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Ut
                }
            }, {
                key: "NAME",
                get: function () {
                    return Ht
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function () {
                    return Qt
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Ft
                }
            }]), t
        }(),
        qt = k();
    if (qt) {
        var Yt = qt.fn[Ht];
        qt.fn[Ht] = Vt.jQueryInterface, qt.fn[Ht].Constructor = Vt, qt.fn[Ht].noConflict = function () {
            return qt.fn[Ht] = Yt, Vt.jQueryInterface
        }
    }
    var zt = "popover",
        Kt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Xt = l(l({}, Vt.Default), {}, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        Gt = l(l({}, Vt.DefaultType), {}, {
            content: "(string|element|function)"
        }),
        $t = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        Zt = function (t) {
            var e, n;

            function i() {
                return t.apply(this, arguments) || this
            }
            n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
            var o = i.prototype;
            return o.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, o.setContent = function () {
                var t = this.getTipElement();
                this.setElementContent(rt.findOne(".popover-header", t), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(rt.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
            }, o._addAttachmentClass = function (t) {
                this.getTipElement().classList.add("bs-popover-" + t)
            }, o._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, o._cleanTipClass = function () {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(Kt);
                null !== e && e.length > 0 && e.map((function (t) {
                    return t.trim()
                })).forEach((function (e) {
                    return t.classList.remove(e)
                }))
            }, i.jQueryInterface = function (t) {
                return this.each((function () {
                    var e = A(this, "bs.popover"),
                        n = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new i(this, n), C(this, "bs.popover", e)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, i.getInstance = function (t) {
                return A(t, "bs.popover")
            }, r(i, null, [{
                key: "VERSION",
                get: function () {
                    return "5.0.0-alpha1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Xt
                }
            }, {
                key: "NAME",
                get: function () {
                    return zt
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function () {
                    return $t
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Gt
                }
            }]), i
        }(Vt),
        Jt = k();
    if (Jt) {
        var te = Jt.fn[zt];
        Jt.fn[zt] = Zt.jQueryInterface, Jt.fn[zt].Constructor = Zt, Jt.fn[zt].noConflict = function () {
            return Jt.fn[zt] = te, Zt.jQueryInterface
        }
    }
    var ee = "scrollspy",
        ne = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ie = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        oe = function () {
            function t(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, K.on(this._scrollElement, "scroll.bs.scrollspy", (function (t) {
                    return n._process(t)
                })), this.refresh(), this._process(), C(t, "bs.scrollspy", this)
            }
            var e = t.prototype;
            return e.refresh = function () {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), rt.find(this._selector).map((function (t) {
                    var e, o = m(t);
                    if (o && (e = rt.findOne(o)), e) {
                        var r = e.getBoundingClientRect();
                        if (r.width || r.height) return [ot[n](e).top + i, o]
                    }
                    return null
                })).filter((function (t) {
                    return t
                })).sort((function (t, e) {
                    return t[0] - e[0]
                })).forEach((function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, e.dispose = function () {
                S(this._element, "bs.scrollspy"), K.off(this._scrollElement, ".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function (t) {
                if ("string" != typeof (t = l(l({}, ne), "object" == typeof t && t ? t : {})).target && b(t.target)) {
                    var e = t.target.id;
                    e || (e = h(ee), t.target.id = e), t.target = "#" + e
                }
                return w(ee, t, ie), t
            }, e._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function () {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, e._activate = function (t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function (e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })),
                    n = rt.findOne(e.join(","));
                n.classList.contains("dropdown-item") ? (rt.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), rt.parents(n, ".nav, .list-group").forEach((function (t) {
                    rt.prev(t, ".nav-link, .list-group-item").forEach((function (t) {
                        return t.classList.add("active")
                    })), rt.prev(t, ".nav-item").forEach((function (t) {
                        rt.children(t, ".nav-link").forEach((function (t) {
                            return t.classList.add("active")
                        }))
                    }))
                }))), K.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: t
                })
            }, e._clear = function () {
                rt.find(this._selector).filter((function (t) {
                    return t.classList.contains("active")
                })).forEach((function (t) {
                    return t.classList.remove("active")
                }))
            }, t.jQueryInterface = function (e) {
                return this.each((function () {
                    var n = A(this, "bs.scrollspy");
                    if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, t.getInstance = function (t) {
                return A(t, "bs.scrollspy")
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "5.0.0-alpha1"
                }
            }, {
                key: "Default",
                get: function () {
                    return ne
                }
            }]), t
        }();
    K.on(window, "load.bs.scrollspy.data-api", (function () {
        rt.find('[data-spy="scroll"]').forEach((function (t) {
            return new oe(t, ot.getDataAttributes(t))
        }))
    }));
    var re = k();
    if (re) {
        var se = re.fn[ee];
        re.fn[ee] = oe.jQueryInterface, re.fn[ee].Constructor = oe, re.fn[ee].noConflict = function () {
            return re.fn[ee] = se, oe.jQueryInterface
        }
    }
    var ae = function () {
        function t(t) {
            this._element = t, C(this._element, "bs.tab", this)
        }
        var e = t.prototype;
        return e.show = function () {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
                var e, n = g(this._element),
                    i = this._element.closest(".nav, .list-group");
                if (i) {
                    var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                    e = (e = rt.find(o, i))[e.length - 1]
                }
                var r = null;
                if (e && (r = K.trigger(e, "hide.bs.tab", {
                        relatedTarget: this._element
                    })), !(K.trigger(this._element, "show.bs.tab", {
                        relatedTarget: e
                    }).defaultPrevented || null !== r && r.defaultPrevented)) {
                    this._activate(this._element, i);
                    var s = function () {
                        K.trigger(e, "hidden.bs.tab", {
                            relatedTarget: t._element
                        }), K.trigger(t._element, "shown.bs.tab", {
                            relatedTarget: e
                        })
                    };
                    n ? this._activate(n, n.parentNode, s) : s()
                }
            }
        }, e.dispose = function () {
            S(this._element, "bs.tab"), this._element = null
        }, e._activate = function (t, e, n) {
            var i = this,
                o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? rt.children(e, ".active") : rt.find(":scope > li > .active", e))[0],
                r = n && o && o.classList.contains("fade"),
                s = function () {
                    return i._transitionComplete(t, o, n)
                };
            if (o && r) {
                var a = v(o);
                o.classList.remove("show"), K.one(o, "transitionend", s), y(o, a)
            } else s()
        }, e._transitionComplete = function (t, e, n) {
            if (e) {
                e.classList.remove("active");
                var i = rt.findOne(":scope > .dropdown-menu .active", e.parentNode);
                i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }(t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), L(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu")) && (t.closest(".dropdown") && rt.find(".dropdown-toggle").forEach((function (t) {
                return t.classList.add("active")
            })), t.setAttribute("aria-expanded", !0));
            n && n()
        }, t.jQueryInterface = function (e) {
            return this.each((function () {
                var n = A(this, "bs.tab") || new t(this);
                if ("string" == typeof e) {
                    if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }))
        }, t.getInstance = function (t) {
            return A(t, "bs.tab")
        }, r(t, null, [{
            key: "VERSION",
            get: function () {
                return "5.0.0-alpha1"
            }
        }]), t
    }();
    K.on(document, "click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (t) {
        t.preventDefault(), (A(this, "bs.tab") || new ae(this)).show()
    }));
    var le = k();
    if (le) {
        var ce = le.fn.tab;
        le.fn.tab = ae.jQueryInterface, le.fn.tab.Constructor = ae, le.fn.tab.noConflict = function () {
            return le.fn.tab = ce, ae.jQueryInterface
        }
    }
    var ue = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        fe = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        de = function () {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners(), C(t, "bs.toast", this)
            }
            var e = t.prototype;
            return e.show = function () {
                var t = this;
                if (!K.trigger(this._element, "show.bs.toast").defaultPrevented) {
                    this._config.animation && this._element.classList.add("fade");
                    var e = function () {
                        t._element.classList.remove("showing"), t._element.classList.add("show"), K.trigger(t._element, "shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function () {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove("hide"), L(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var n = v(this._element);
                        K.one(this._element, "transitionend", e), y(this._element, n)
                    } else e()
                }
            }, e.hide = function () {
                var t = this;
                if (this._element.classList.contains("show") && !K.trigger(this._element, "hide.bs.toast").defaultPrevented) {
                    var e = function () {
                        t._element.classList.add("hide"), K.trigger(t._element, "hidden.bs.toast")
                    };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var n = v(this._element);
                        K.one(this._element, "transitionend", e), y(this._element, n)
                    } else e()
                }
            }, e.dispose = function () {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), K.off(this._element, "click.dismiss.bs.toast"), S(this._element, "bs.toast"), this._element = null, this._config = null
            }, e._getConfig = function (t) {
                return t = l(l(l({}, fe), ot.getDataAttributes(this._element)), "object" == typeof t && t ? t : {}), w("toast", t, this.constructor.DefaultType), t
            }, e._setListeners = function () {
                var t = this;
                K.on(this._element, "click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
                    return t.hide()
                }))
            }, t.jQueryInterface = function (e) {
                return this.each((function () {
                    var n = A(this, "bs.toast");
                    if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e](this)
                    }
                }))
            }, t.getInstance = function (t) {
                return A(t, "bs.toast")
            }, r(t, null, [{
                key: "VERSION",
                get: function () {
                    return "5.0.0-alpha1"
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return ue
                }
            }, {
                key: "Default",
                get: function () {
                    return fe
                }
            }]), t
        }(),
        he = k();
    if (he) {
        var pe = he.fn.toast;
        he.fn.toast = de.jQueryInterface, he.fn.toast.Constructor = de, he.fn.toast.noConflict = function () {
            return he.fn.toast = pe, de.jQueryInterface
        }
    }
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, , , , , , function (t, e) {}, , , , , function (t, e) {}]);
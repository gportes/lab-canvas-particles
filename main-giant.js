var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
        var n = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            s = function(t, e, n) {
                i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
            },
            r = 1e-10,
            a = i._internals,
            o = a.isSelector,
            l = a.isArray,
            h = s.prototype = i.to({}, .1, {}),
            u = [];
        s.version = "1.13.1", h.constructor = s, h.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, h.invalidate = function() {
            return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, h.updateTo = function(t, e) {
            var n, s = this.ratio;
            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
            for (n in t) this.vars[n] = t[n];
            if (this._initted)
                if (e) this._initted = !1;
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                    var r = this._time;
                    this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1)
                } else if (this._time > 0) {
                    this._initted = !1, this._init();
                    for (var a, o = 1 / (1 - s), l = this._firstPT; l;) a = l.s + l.c, l.c *= o, l.s = a - l.c, l = l._next
                }
            return this
        }, h.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var n, s, o, l, h, c, d, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                g = this._time,
                _ = this._totalTime,
                m = this._cycle,
                v = this._duration,
                y = this._rawPrevTime;
            if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, s = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === r) && y !== t && (i = !0, y > r && (s = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === v && y > 0 && y !== r) && (s = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t : r)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / v, c = this._easeType, d = this._easePower, (1 === c || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === d ? h *= h : 2 === d ? h *= h * h : 3 === d ? h *= h * h * h : 4 === d && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : .5 > this._time / v ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / v)), g === this._time && !i && m === this._cycle) return void(_ !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)));
            if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = _, this._rawPrevTime = y, this._cycle = m, a.lazyTweens.push(this), void(this._lazy = t);
                this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
            this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== _ || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), this._cycle !== m && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || u), 0 === v && this._rawPrevTime === r && p !== r && (this._rawPrevTime = 0))
        }, s.to = function(t, e, i) {
            return new s(t, e, i)
        }, s.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
        }, s.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
        }, s.staggerTo = s.allTo = function(t, e, r, a, h, c, d) {
            a = a || 0;
            var p, f, g, _, m = r.delay || 0,
                v = [],
                y = function() {
                    r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), h.apply(d || this, c || u)
                };
            for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t))), p = t.length, g = 0; p > g; g++) {
                f = {};
                for (_ in r) f[_] = r[_];
                f.delay = m, g === p - 1 && h && (f.onComplete = y), v[g] = new s(t[g], e, f), m += a
            }
            return v
        }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, a, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, a, o)
        }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, a, o, l) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, a, o, l)
        }, s.delayedCall = function(t, e, i, n, r) {
            return new s(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: n,
                immediateRender: !1,
                useFrames: r,
                overwrite: 0
            })
        }, s.set = function(t, e) {
            return new s(t, 0, e)
        }, s.isTweening = function(t) {
            return i.getTweensOf(t, !0).length > 0
        };
        var c = function(t, e) {
                for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r : (e && (n[s++] = r), n = n.concat(c(r, e)), s = n.length), r = r._next;
                return n
            },
            d = s.getAllTweens = function(e) {
                return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
            };
        s.killAll = function(t, i, n, s) {
            null == i && (i = !0), null == n && (n = !0);
            var r, a, o, l = d(0 != s),
                h = l.length,
                u = i && n && s;
            for (o = 0; h > o; o++) a = l[o], (u || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }, s.killChildTweensOf = function(t, e) {
            if (null != t) {
                var r, h, u, c, d, p = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = n(t)), l(t))
                    for (c = t.length; --c > -1;) s.killChildTweensOf(t[c], e);
                else {
                    r = [];
                    for (u in p)
                        for (h = p[u].target.parentNode; h;) h === t && (r = r.concat(p[u].tweens)), h = h.parentNode;
                    for (d = r.length, c = 0; d > c; c++) e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1)
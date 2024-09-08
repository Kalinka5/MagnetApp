"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [783],
  {
    8273: function (e, t, n) {
      n.r(t),
        n.d(t, {
          CountUp: function () {
            return i;
          },
        });
      var s = function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var t, n = 1, s = arguments.length; n < s; n++)
                for (var i in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }).apply(this, arguments);
        },
        i = (function () {
          function e(e, t, n) {
            var i = this;
            (this.endVal = t),
              (this.options = n),
              (this.version = "2.3.2"),
              (this.defaults = {
                startVal: 0,
                decimalPlaces: 0,
                duration: 2,
                useEasing: !0,
                useGrouping: !0,
                smartEasingThreshold: 999,
                smartEasingAmount: 333,
                separator: ",",
                decimal: ".",
                prefix: "",
                suffix: "",
                enableScrollSpy: !1,
                scrollSpyDelay: 200,
                scrollSpyOnce: !1,
              }),
              (this.finalEndVal = null),
              (this.useEasing = !0),
              (this.countDown = !1),
              (this.error = ""),
              (this.startVal = 0),
              (this.paused = !0),
              (this.once = !1),
              (this.count = function (e) {
                i.startTime || (i.startTime = e);
                var t = e - i.startTime;
                (i.remaining = i.duration - t),
                  i.useEasing
                    ? i.countDown
                      ? (i.frameVal =
                          i.startVal -
                          i.easingFn(t, 0, i.startVal - i.endVal, i.duration))
                      : (i.frameVal = i.easingFn(
                          t,
                          i.startVal,
                          i.endVal - i.startVal,
                          i.duration
                        ))
                    : (i.frameVal =
                        i.startVal +
                        (i.endVal - i.startVal) * (t / i.duration));
                var n = i.countDown
                  ? i.frameVal < i.endVal
                  : i.frameVal > i.endVal;
                (i.frameVal = n ? i.endVal : i.frameVal),
                  (i.frameVal = Number(
                    i.frameVal.toFixed(i.options.decimalPlaces)
                  )),
                  i.printValue(i.frameVal),
                  t < i.duration
                    ? (i.rAF = requestAnimationFrame(i.count))
                    : null !== i.finalEndVal
                    ? i.update(i.finalEndVal)
                    : i.callback && i.callback();
              }),
              (this.formatNumber = function (e) {
                var t,
                  n,
                  s,
                  a = (Math.abs(e).toFixed(i.options.decimalPlaces) + "").split(
                    "."
                  );
                if (
                  ((t = a[0]),
                  (n = a.length > 1 ? i.options.decimal + a[1] : ""),
                  i.options.useGrouping)
                ) {
                  s = "";
                  for (var r = 0, o = t.length; r < o; ++r)
                    0 !== r && r % 3 == 0 && (s = i.options.separator + s),
                      (s = t[o - r - 1] + s);
                  t = s;
                }
                return (
                  i.options.numerals &&
                    i.options.numerals.length &&
                    ((t = t.replace(/[0-9]/g, function (e) {
                      return i.options.numerals[+e];
                    })),
                    (n = n.replace(/[0-9]/g, function (e) {
                      return i.options.numerals[+e];
                    }))),
                  (e < 0 ? "-" : "") +
                    i.options.prefix +
                    t +
                    n +
                    i.options.suffix
                );
              }),
              (this.easeOutExpo = function (e, t, n, s) {
                return (n * (1 - Math.pow(2, (-10 * e) / s)) * 1024) / 1023 + t;
              }),
              (this.options = s(s({}, this.defaults), n)),
              (this.formattingFn = this.options.formattingFn
                ? this.options.formattingFn
                : this.formatNumber),
              (this.easingFn = this.options.easingFn
                ? this.options.easingFn
                : this.easeOutExpo),
              (this.startVal = this.validateValue(this.options.startVal)),
              (this.frameVal = this.startVal),
              (this.endVal = this.validateValue(t)),
              (this.options.decimalPlaces = Math.max(
                this.options.decimalPlaces
              )),
              this.resetDuration(),
              (this.options.separator = String(this.options.separator)),
              (this.useEasing = this.options.useEasing),
              "" === this.options.separator && (this.options.useGrouping = !1),
              (this.el = "string" == typeof e ? document.getElementById(e) : e),
              this.el
                ? this.printValue(this.startVal)
                : (this.error = "[CountUp] target is null or undefined"),
              "undefined" != typeof window &&
                this.options.enableScrollSpy &&
                (this.error
                  ? console.error(this.error, e)
                  : ((window.onScrollFns = window.onScrollFns || []),
                    window.onScrollFns.push(function () {
                      return i.handleScroll(i);
                    }),
                    (window.onscroll = function () {
                      window.onScrollFns.forEach(function (e) {
                        return e();
                      });
                    }),
                    this.handleScroll(this)));
          }
          return (
            (e.prototype.handleScroll = function (e) {
              if (e && window && !e.once) {
                var t = window.innerHeight + window.scrollY,
                  n = e.el.getBoundingClientRect(),
                  s = n.top + n.height + window.pageYOffset;
                s < t && s > window.scrollY && e.paused
                  ? ((e.paused = !1),
                    setTimeout(function () {
                      return e.start();
                    }, e.options.scrollSpyDelay),
                    e.options.scrollSpyOnce && (e.once = !0))
                  : window.scrollY > s && !e.paused && e.reset();
              }
            }),
            (e.prototype.determineDirectionAndSmartEasing = function () {
              var e = this.finalEndVal ? this.finalEndVal : this.endVal;
              if (
                ((this.countDown = this.startVal > e),
                Math.abs(e - this.startVal) >
                  this.options.smartEasingThreshold && this.options.useEasing)
              ) {
                this.finalEndVal = e;
                var t = this.countDown ? 1 : -1;
                (this.endVal = e + t * this.options.smartEasingAmount),
                  (this.duration = this.duration / 2);
              } else (this.endVal = e), (this.finalEndVal = null);
              null !== this.finalEndVal
                ? (this.useEasing = !1)
                : (this.useEasing = this.options.useEasing);
            }),
            (e.prototype.start = function (e) {
              this.error ||
                ((this.callback = e),
                this.duration > 0
                  ? (this.determineDirectionAndSmartEasing(),
                    (this.paused = !1),
                    (this.rAF = requestAnimationFrame(this.count)))
                  : this.printValue(this.endVal));
            }),
            (e.prototype.pauseResume = function () {
              this.paused
                ? ((this.startTime = null),
                  (this.duration = this.remaining),
                  (this.startVal = this.frameVal),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)))
                : cancelAnimationFrame(this.rAF),
                (this.paused = !this.paused);
            }),
            (e.prototype.reset = function () {
              cancelAnimationFrame(this.rAF),
                (this.paused = !0),
                this.resetDuration(),
                (this.startVal = this.validateValue(this.options.startVal)),
                (this.frameVal = this.startVal),
                this.printValue(this.startVal);
            }),
            (e.prototype.update = function (e) {
              cancelAnimationFrame(this.rAF),
                (this.startTime = null),
                (this.endVal = this.validateValue(e)),
                this.endVal !== this.frameVal &&
                  ((this.startVal = this.frameVal),
                  null == this.finalEndVal && this.resetDuration(),
                  (this.finalEndVal = null),
                  this.determineDirectionAndSmartEasing(),
                  (this.rAF = requestAnimationFrame(this.count)));
            }),
            (e.prototype.printValue = function (e) {
              var t = this.formattingFn(e);
              "INPUT" === this.el.tagName
                ? (this.el.value = t)
                : "text" === this.el.tagName || "tspan" === this.el.tagName
                ? (this.el.textContent = t)
                : (this.el.innerHTML = t);
            }),
            (e.prototype.ensureNumber = function (e) {
              return "number" == typeof e && !isNaN(e);
            }),
            (e.prototype.validateValue = function (e) {
              var t = Number(e);
              return this.ensureNumber(t)
                ? t
                : ((this.error =
                    "[CountUp] invalid start or end value: ".concat(e)),
                  null);
            }),
            (e.prototype.resetDuration = function () {
              (this.startTime = null),
                (this.duration = 1e3 * Number(this.options.duration)),
                (this.remaining = this.duration);
            }),
            e
          );
        })();
    },
    2783: function (e, t, n) {
      n.r(t);
      var s = n(5893),
        i = n(5675),
        a = n.n(i);
      n(7294);
      var r = n(7857);
      let o = () =>
        (0, s.jsxs)("div", {
          className: "w-full ",
          children: [
            (0, s.jsxs)("div", {
              className: "w-full bg-[#14213d]",
              children: [
                (0, s.jsx)("div", {
                  children: (0, s.jsx)("svg", {
                    id: "companyintrotopsvg",
                    className: "fill-[#1b2b4d] ",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1000 100",
                    preserveAspectRatio: "none",
                    children: (0, s.jsx)("path", {
                      className: "elementor-shape-fill",
                      d: "M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9",
                    }),
                  }),
                }),
                (0, s.jsx)("h1", {
                  className:
                    "text-4xl font-bold text-center font-sans text-white",
                  children: "Magnet Recruit  Your Premier Recruitment Partner",
                }),
                (0, s.jsxs)("div", {
                  className: "md:grid md:grid-cols-2 md:w-[1000px] mx-auto",
                  children: [
                    (0, s.jsx)("div", {
                      className: "md:mt-2 p-5",
                      children: (0, s.jsx)("p", {
                        className: "text-white text-justify font-sans py-1 ",
                        children:
                          "Headquartered in the vibrant city of Manchester, we specialise in recruiting professionals at entry, middle, and senior levels for Food and FMCG enterprises. Our proven expertise spans a spectrum of functions, including Operations, Supply Chain, Technical, NPD, Engineering, and Health and Safety. At Magnet Recruit, we comprehensively grasp the complexities of recruitment in these industries, ensuring that your business is meticulously attended to.",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "w-full justify-center items-center",
                      children: [
                        (0, s.jsx)(a(), {
                          src: "/image/location.png",
                          width: 250,
                          height: 250,
                          className: "mx-auto",
                          alt: "image",
                        }),
                        (0, s.jsxs)("div", {
                          className: "md:p-2 sm:p-10 font-sans",
                          children: [
                            (0, s.jsx)("p", {
                              className: "text-white text-justify px-4 ",
                              children:
                                "Magnet Recruit takes pride in its professionalism, transparency, and a touch of enthusiasm that defines our corporate culture. As dedicated professionals, we understand the nuanced challenges of the recruitment landscape, and we are dedicated to overcoming them.",
                            }),
                            (0, s.jsx)("p", {
                              className: "text-white text-justify p-2 px-4",
                              children:
                                "We firmly believe that the foundation of a strong business lies in its people. At Magnet Recruit, we are unwaveringly committed to assisting you in building a high-calibre team. Our meticulous candidate selection process ensures not only a perfect match for your job specifications but also alignment with your organisational culture and core values.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "w-full bg-[#E5E5E5] pb-10 font-sans",
              children: [
                (0, s.jsx)("div", {
                  className: "w-full mt-[-1]",
                  children: (0, s.jsx)("svg", {
                    id: "companyintrosvg",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 1000 100",
                    preserveAspectRatio: "none",
                    className: "fill-[#13213d]",
                    children: (0, s.jsx)("path", {
                      transform: "scale(1,-1) tanslate(0, -100)",
                      className: "elementor-shape-fill",
                      d: "M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9",
                    }),
                  }),
                }),
                (0, s.jsxs)("div", {
                  className: "md:w-[1080px] md:grid md:grid-cols-2 mx-auto",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "md:grid md:grid-cols-2 pl-4 pb-10",
                      children: [
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "items-center justify-center py-4 mb-8 mx-auto",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "flex justify-center",
                                  children: (0, s.jsx)(a(), {
                                    src: "/image/bag.png",
                                    width: 80,
                                    height: 80,
                                    alt: "image",
                                  }),
                                }),
                                (0, s.jsxs)("h1", {
                                  className:
                                    "text-3xl text-center text-[#fca311] font-semibold pt-3",
                                  children: [
                                    (0, s.jsx)(r.ZP, {
                                      end: 7,
                                      enableScrollSpy: !0,
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "font-sans ml-2",
                                      children: "days",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className: "text-center text-sm",
                                  children: "Average time for a job offer",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "items-center ",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "flex justify-center",
                                  children: (0, s.jsx)(a(), {
                                    src: "/image/search.png",
                                    width: 80,
                                    height: 80,
                                    alt: "image",
                                  }),
                                }),
                                (0, s.jsxs)("h1", {
                                  className:
                                    "text-3xl text-center text-[#fca311] font-bold pt-3",
                                  children: [
                                    " ",
                                    (0, s.jsx)(r.ZP, {
                                      end: 38,
                                      enableScrollSpy: !0,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className: "text-center text-sm",
                                  children: "Average permanent offers",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsxs)("div", {
                              className: "items-center py-4 mx-auto mb-8",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "flex justify-center",
                                  children: (0, s.jsx)(a(), {
                                    src: "/image/arrow.png",
                                    width: 80,
                                    height: 80,
                                    alt: "image",
                                  }),
                                }),
                                (0, s.jsxs)("h1", {
                                  className:
                                    "text-3xl text-center text-[#fca311] font-semibold pt-3",
                                  children: [
                                    (0, s.jsx)(r.ZP, {
                                      end: 7,
                                      enableScrollSpy: !0,
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "font-sans ml-2",
                                      children: "days",
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className: "text-center text-sm",
                                  children: "Payments Processing time",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "items-center ",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "flex justify-center",
                                  children: (0, s.jsx)(a(), {
                                    src: "/image/nots.png",
                                    width: 80,
                                    height: 80,
                                    alt: "image",
                                  }),
                                }),
                                (0, s.jsxs)("h1", {
                                  className:
                                    "text-3xl text-center text-[#fca311] font-bold pt-3",
                                  children: [
                                    " ",
                                    (0, s.jsx)(r.ZP, {
                                      end: 98,
                                      enableScrollSpy: !0,
                                    }),
                                    "%",
                                  ],
                                }),
                                (0, s.jsx)("p", {
                                  className: "text-center text-sm",
                                  children: "Success rate",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "mt-28 font-sans",
                      children: [
                        (0, s.jsx)("h1", {
                          className:
                            "text-3xl text-[#fca311] tracking-wide font-bold px-4",
                          children: "Empowering Your Growth Beyond Limits",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-justify text-sm pt-3 tracking-wider px-4",
                          children:
                            "Our core objective revolves around cultivating enduring, trustworthy and authentic relationships with both our Clients and Candidates.",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-justify text-sm pt-1 tracking-wider px-4",
                          children:
                            "We recognise that true value is derived from a deep understanding of your unique requirements. Committed to delivering unparalleled service, our experts tailor their approach to meet your specific needs, ensuring a seamless integration of our recruitment solutions with your objectives.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      t.default = o;
    },
    7857: function (e, t, n) {
      var s = n(7294),
        i = n(8273);
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function r(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                var s, i;
                (s = e),
                  (i = n[t]),
                  t in s
                    ? Object.defineProperty(s, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (s[t] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var s in n)
                  Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          s,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              s,
              i = {},
              a = Object.keys(e);
            for (s = 0; s < a.length; s++)
              (n = a[s]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (s = 0; s < a.length; s++)
            (n = a[s]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]);
        }
        return i;
      }
      var c =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? s.useLayoutEffect
          : s.useEffect;
      function u(e) {
        var t = s.useRef(e);
        return (
          c(function () {
            t.current = e;
          }),
          s.useCallback(function () {
            for (var e = arguments.length, n = Array(e), s = 0; s < e; s++)
              n[s] = arguments[s];
            return t.current.apply(void 0, n);
          }, [])
        );
      }
      var d = function (e, t) {
          var n = t.decimal,
            s = t.decimals,
            a = t.duration,
            r = t.easingFn,
            o = t.end,
            l = t.formattingFn,
            c = t.numerals,
            u = t.prefix,
            d = t.separator,
            p = t.start,
            h = t.suffix,
            f = t.useEasing,
            m = t.enableScrollSpy,
            g = t.scrollSpyDelay,
            x = t.scrollSpyOnce;
          return new i.CountUp(e, o, {
            startVal: p,
            duration: a,
            decimal: n,
            decimalPlaces: s,
            easingFn: r,
            formattingFn: l,
            numerals: c,
            separator: d,
            prefix: u,
            suffix: h,
            useEasing: f,
            useGrouping: !!d,
            enableScrollSpy: m,
            scrollSpyDelay: g,
            scrollSpyOnce: x,
          });
        },
        p = [
          "ref",
          "startOnMount",
          "enableReinitialize",
          "delay",
          "onEnd",
          "onStart",
          "onPauseResume",
          "onReset",
          "onUpdate",
        ],
        h = {
          decimal: ".",
          delay: null,
          prefix: "",
          suffix: "",
          duration: 2,
          start: 0,
          startOnMount: !0,
          enableReinitialize: !0,
        },
        f = function (e) {
          var t = s.useMemo(
              function () {
                return r(r({}, h), e);
              },
              [e]
            ),
            n = t.ref,
            i = t.startOnMount,
            a = t.enableReinitialize,
            o = t.delay,
            c = t.onEnd,
            f = t.onStart,
            m = t.onPauseResume,
            g = t.onReset,
            x = t.onUpdate,
            y = l(t, p),
            v = s.useRef(),
            w = s.useRef(),
            j = s.useRef(!1),
            b = u(function () {
              return d("string" == typeof n ? n : n.current, y);
            }),
            V = u(function (e) {
              var t = v.current;
              if (t && !e) return t;
              var n = b();
              return (v.current = n), n;
            }),
            N = u(function () {
              var e = function () {
                return V(!0).start(function () {
                  null == c ||
                    c({ pauseResume: E, reset: O, start: F, update: S });
                });
              };
              o && o > 0 ? (w.current = setTimeout(e, 1e3 * o)) : e(),
                null == f || f({ pauseResume: E, reset: O, update: S });
            }),
            E = u(function () {
              V().pauseResume(),
                null == m || m({ reset: O, start: F, update: S });
            }),
            O = u(function () {
              V().el &&
                (w.current && clearTimeout(w.current),
                V().reset(),
                null == g || g({ pauseResume: E, start: F, update: S }));
            }),
            S = u(function (e) {
              V().update(e),
                null == x || x({ pauseResume: E, reset: O, start: F });
            }),
            F = u(function () {
              O(), N();
            }),
            P = u(function (e) {
              i && (e && O(), N());
            });
          return (
            s.useEffect(
              function () {
                j.current ? a && P(!0) : ((j.current = !0), P());
              },
              [
                a,
                j,
                P,
                o,
                e.start,
                e.suffix,
                e.prefix,
                e.duration,
                e.separator,
                e.decimals,
                e.decimal,
                e.formattingFn,
              ]
            ),
            s.useEffect(
              function () {
                return function () {
                  O();
                };
              },
              [O]
            ),
            { start: F, pauseResume: E, reset: O, update: S, getCountUp: V }
          );
        },
        m = ["className", "redraw", "containerProps", "children", "style"];
      t.ZP = function (e) {
        var t = e.className,
          n = e.redraw,
          i = e.containerProps,
          a = e.children,
          c = e.style,
          d = l(e, m),
          p = s.useRef(null),
          h = s.useRef(!1),
          g = f(
            r(
              r({}, d),
              {},
              {
                ref: p,
                startOnMount: "function" != typeof a || 0 === e.delay,
                enableReinitialize: !1,
              }
            )
          ),
          x = g.start,
          y = g.reset,
          v = g.update,
          w = g.pauseResume,
          j = g.getCountUp,
          b = u(function () {
            x();
          }),
          V = u(function (t) {
            e.preserveValue || y(), v(t);
          }),
          N = u(function () {
            if (
              "function" == typeof e.children &&
              !(p.current instanceof Element)
            ) {
              console.error(
                'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.'
              );
              return;
            }
            j();
          });
        return (s.useEffect(
          function () {
            N();
          },
          [N]
        ),
        s.useEffect(
          function () {
            h.current && V(e.end);
          },
          [e.end, V]
        ),
        s.useEffect(
          function () {
            n && h.current && b();
          },
          [b, n, n && e]
        ),
        s.useEffect(
          function () {
            !n && h.current && b();
          },
          [
            b,
            n,
            e.start,
            e.suffix,
            e.prefix,
            e.duration,
            e.separator,
            e.decimals,
            e.decimal,
            e.className,
            e.formattingFn,
          ]
        ),
        s.useEffect(function () {
          h.current = !0;
        }, []),
        "function" == typeof a)
          ? a({
              countUpRef: p,
              start: x,
              reset: y,
              update: v,
              pauseResume: w,
              getCountUp: j,
            })
          : s.createElement(
              "span",
              o({ className: t, ref: p, style: c }, i),
              void 0 !== e.start ? j().formattingFn(e.start) : ""
            );
      };
    },
  },
]);

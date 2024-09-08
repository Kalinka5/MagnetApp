(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [300],
  {
    3454: function (e, t, n) {
      "use strict";
      var r, o;
      e.exports =
        (null == (r = n.g.process) ? void 0 : r.env) &&
        "object" == typeof (null == (o = n.g.process) ? void 0 : o.env)
          ? n.g.process
          : n(7663);
    },
    7619: function () {},
    7663: function (e) {
      !(function () {
        var t = {
            229: function (e) {
              var t,
                n,
                r,
                o = (e.exports = {});
              function i() {
                throw Error("setTimeout has not been defined");
              }
              function a() {
                throw Error("clearTimeout has not been defined");
              }
              function s(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === i || !t) && setTimeout)
                  return (t = setTimeout), setTimeout(e, 0);
                try {
                  return t(e, 0);
                } catch (r) {
                  try {
                    return t.call(null, e, 0);
                  } catch (n) {
                    return t.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  t = "function" == typeof setTimeout ? setTimeout : i;
                } catch (e) {
                  t = i;
                }
                try {
                  n = "function" == typeof clearTimeout ? clearTimeout : a;
                } catch (r) {
                  n = a;
                }
              })();
              var l = [],
                u = !1,
                c = -1;
              function p() {
                u &&
                  r &&
                  ((u = !1),
                  r.length ? (l = r.concat(l)) : (c = -1),
                  l.length && d());
              }
              function d() {
                if (!u) {
                  var e = s(p);
                  u = !0;
                  for (var t = l.length; t; ) {
                    for (r = l, l = []; ++c < t; ) r && r[c].run();
                    (c = -1), (t = l.length);
                  }
                  (r = null),
                    (u = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === a || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (r) {
                        try {
                          return n.call(null, e);
                        } catch (t) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function f(e, t) {
                (this.fun = e), (this.array = t);
              }
              function m() {}
              (o.nextTick = function (e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                l.push(new f(e, t)), 1 !== l.length || u || s(d);
              }),
                (f.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = m),
                (o.addListener = m),
                (o.once = m),
                (o.off = m),
                (o.removeListener = m),
                (o.removeAllListeners = m),
                (o.emit = m),
                (o.prependListener = m),
                (o.prependOnceListener = m),
                (o.listeners = function (e) {
                  return [];
                }),
                (o.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function r(e) {
          var o = n[e];
          if (void 0 !== o) return o.exports;
          var i = (n[e] = { exports: {} }),
            a = !0;
          try {
            t[e](i, i.exports, r), (a = !1);
          } finally {
            a && delete n[e];
          }
          return i.exports;
        }
        r.ab = "//";
        var o = r(229);
        e.exports = o;
      })();
    },
    3545: function (e, t, n) {
      "use strict";
      n.d(t, {
        Jx: function () {
          return S;
        },
        ZP: function () {
          return L;
        },
        Sx: function () {
          return i;
        },
      });
      var r = n(7294);
      let o = r.createContext(null);
      function i() {
        var e;
        let t =
            null === (e = (0, r.useContext)(o)) || void 0 === e
              ? void 0
              : e.maps,
          n = (0, r.useContext)(x),
          i = (0, r.useMemo)(
            () => ({ ...t, current: null == n ? void 0 : n.map }),
            [t, n]
          );
        return i;
      }
      function a(e) {
        return {
          longitude: e.center.lng,
          latitude: e.center.lat,
          zoom: e.zoom,
          pitch: e.pitch,
          bearing: e.bearing,
          padding: e.padding,
        };
      }
      function s(e, t) {
        let n = t.viewState || t,
          r = !1;
        if ("longitude" in n && "latitude" in n) {
          let o = e.center;
          (e.center = new o.constructor(n.longitude, n.latitude)),
            (r = r || o !== e.center);
        }
        if ("zoom" in n) {
          let i = e.zoom;
          (e.zoom = n.zoom), (r = r || i !== e.zoom);
        }
        if ("bearing" in n) {
          let a = e.bearing;
          (e.bearing = n.bearing), (r = r || a !== e.bearing);
        }
        if ("pitch" in n) {
          let s = e.pitch;
          (e.pitch = n.pitch), (r = r || s !== e.pitch);
        }
        return (
          n.padding &&
            !e.isPaddingEqual(n.padding) &&
            ((r = !0), (e.padding = n.padding)),
          r
        );
      }
      let l = [
        "type",
        "source",
        "source-layer",
        "minzoom",
        "maxzoom",
        "filter",
        "layout",
      ];
      function u(e) {
        if (!e) return null;
        if ("string" == typeof e || ("toJS" in e && (e = e.toJS()), !e.layers))
          return e;
        let t = {};
        for (let n of e.layers) t[n.id] = n;
        let r = e.layers.map((e) => {
          let n = t[e.ref],
            r = null;
          if (("interactive" in e && delete (r = { ...e }).interactive, n))
            for (let o of (delete (r = r || { ...e }).ref, l))
              o in n && (r[o] = n[o]);
          return r || e;
        });
        return { ...e, layers: r };
      }
      function c(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        if (Array.isArray(e)) {
          if (!Array.isArray(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++) if (!c(e[n], t[n])) return !1;
          return !0;
        }
        if (Array.isArray(t)) return !1;
        if ("object" == typeof e && "object" == typeof t) {
          let r = Object.keys(e),
            o = Object.keys(t);
          if (r.length !== o.length) return !1;
          for (let i of r)
            if (!t.hasOwnProperty(i) || !c(e[i], t[i])) return !1;
          return !0;
        }
        return !1;
      }
      var p = n(3454);
      let d = {
          mousedown: "onMouseDown",
          mouseup: "onMouseUp",
          mouseover: "onMouseOver",
          mousemove: "onMouseMove",
          click: "onClick",
          dblclick: "onDblClick",
          mouseenter: "onMouseEnter",
          mouseleave: "onMouseLeave",
          mouseout: "onMouseOut",
          contextmenu: "onContextMenu",
          touchstart: "onTouchStart",
          touchend: "onTouchEnd",
          touchmove: "onTouchMove",
          touchcancel: "onTouchCancel",
        },
        f = {
          movestart: "onMoveStart",
          move: "onMove",
          moveend: "onMoveEnd",
          dragstart: "onDragStart",
          drag: "onDrag",
          dragend: "onDragEnd",
          zoomstart: "onZoomStart",
          zoom: "onZoom",
          zoomend: "onZoomEnd",
          rotatestart: "onRotateStart",
          rotate: "onRotate",
          rotateend: "onRotateEnd",
          pitchstart: "onPitchStart",
          pitch: "onPitch",
          pitchend: "onPitchEnd",
        },
        m = {
          wheel: "onWheel",
          boxzoomstart: "onBoxZoomStart",
          boxzoomend: "onBoxZoomEnd",
          boxzoomcancel: "onBoxZoomCancel",
          resize: "onResize",
          load: "onLoad",
          render: "onRender",
          idle: "onIdle",
          remove: "onRemove",
          data: "onData",
          styledata: "onStyleData",
          sourcedata: "onSourceData",
          error: "onError",
        },
        h = [
          "minZoom",
          "maxZoom",
          "minPitch",
          "maxPitch",
          "maxBounds",
          "projection",
          "renderWorldCopies",
        ],
        g = [
          "scrollZoom",
          "boxZoom",
          "dragRotate",
          "dragPan",
          "keyboard",
          "doubleClickZoom",
          "touchZoomRotate",
          "touchPitch",
        ];
      class v {
        constructor(e, t, n) {
          (this._map = null),
            (this._internalUpdate = !1),
            (this._inRender = !1),
            (this._hoveredFeatures = null),
            (this._deferredEvents = {
              move: !1,
              zoom: !1,
              pitch: !1,
              rotate: !1,
            }),
            (this._onEvent = (e) => {
              let t = this.props[m[e.type]];
              t && t(e);
            }),
            (this._onPointerEvent = (e) => {
              ("mousemove" === e.type || "mouseout" === e.type) &&
                this._updateHover(e);
              let t = this.props[d[e.type]];
              if (t) {
                if (
                  this.props.interactiveLayerIds &&
                  "mouseover" !== e.type &&
                  "mouseout" !== e.type
                ) {
                  let n =
                    this._hoveredFeatures ||
                    this._map.queryRenderedFeatures(e.point, {
                      layers: this.props.interactiveLayerIds,
                    });
                  e.features = n;
                }
                t(e), delete e.features;
              }
            }),
            (this._onCameraEvent = (e) => {
              if (!this._internalUpdate) {
                let t = this.props[f[e.type]];
                t && t(e);
              }
              e.type in this._deferredEvents &&
                (this._deferredEvents[e.type] = !1);
            }),
            (this._MapClass = e),
            (this.props = t),
            this._initialize(n);
        }
        get map() {
          return this._map;
        }
        get transform() {
          return this._renderTransform;
        }
        setProps(e) {
          let t = this.props;
          this.props = e;
          let n = this._updateSettings(e, t);
          n && this._createShadowTransform(this._map);
          let r = this._updateSize(e),
            o = this._updateViewState(e, !0);
          this._updateStyle(e, t),
            this._updateStyleComponents(e, t),
            this._updateHandlers(e, t),
            (n || r || (o && !this._map.isMoving())) && this.redraw();
        }
        static reuse(e, t) {
          let n = v.savedMaps.pop();
          if (!n) return null;
          let r = n.map,
            o = r.getContainer();
          for (t.className = o.className; o.childNodes.length > 0; )
            t.appendChild(o.childNodes[0]);
          (r._container = t),
            n.setProps({ ...e, styleDiffing: !1 }),
            r.resize();
          let { initialViewState: i } = e;
          return (
            i &&
              (i.bounds
                ? r.fitBounds(i.bounds, { ...i.fitBoundsOptions, duration: 0 })
                : n._updateViewState(i, !1)),
            r.isStyleLoaded()
              ? r.fire("load")
              : r.once("styledata", () => r.fire("load")),
            n
          );
        }
        _initialize(e) {
          let { props: t } = this,
            n = {
              ...t,
              ...t.initialViewState,
              accessToken:
                t.mapboxAccessToken ||
                (function () {
                  let e = null;
                  if ("undefined" != typeof location) {
                    let t = /access_token=([^&\/]*)/.exec(location.search);
                    e = t && t[1];
                  }
                  try {
                    e = e || p.env.MapboxAccessToken;
                  } catch (n) {}
                  try {
                    e = e || p.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
                  } catch (r) {}
                  return e;
                })() ||
                null,
              container: e,
              style: u(t.mapStyle),
            },
            r = n.initialViewState || n.viewState || n;
          if (
            (Object.assign(n, {
              center: [r.longitude || 0, r.latitude || 0],
              zoom: r.zoom || 0,
              pitch: r.pitch || 0,
              bearing: r.bearing || 0,
            }),
            t.gl)
          ) {
            let o = HTMLCanvasElement.prototype.getContext;
            HTMLCanvasElement.prototype.getContext = () => (
              (HTMLCanvasElement.prototype.getContext = o), t.gl
            );
          }
          let i = new this._MapClass(n);
          r.padding && i.setPadding(r.padding),
            t.cursor && (i.getCanvas().style.cursor = t.cursor),
            this._createShadowTransform(i);
          let a = i._render;
          i._render = (e) => {
            (this._inRender = !0), a.call(i, e), (this._inRender = !1);
          };
          let s = i._renderTaskQueue.run;
          (i._renderTaskQueue.run = (e) => {
            s.call(i._renderTaskQueue, e), this._onBeforeRepaint();
          }),
            i.on("render", () => this._onAfterRepaint());
          let l = i.fire;
          for (let c in ((i.fire = this._fireEvent.bind(this, l)),
          i.on("resize", () => {
            this._renderTransform.resize(i.transform.width, i.transform.height);
          }),
          i.on("styledata", () => this._updateStyleComponents(this.props, {})),
          i.on("sourcedata", () => this._updateStyleComponents(this.props, {})),
          d))
            i.on(c, this._onPointerEvent);
          for (let h in f) i.on(h, this._onCameraEvent);
          for (let g in m) i.on(g, this._onEvent);
          this._map = i;
        }
        recycle() {
          let e = this.map.getContainer(),
            t = e.querySelector("[mapboxgl-children]");
          null == t || t.remove(), v.savedMaps.push(this);
        }
        destroy() {
          this._map.remove();
        }
        redraw() {
          let e = this._map;
          !this._inRender &&
            e.style &&
            (e._frame && (e._frame.cancel(), (e._frame = null)), e._render());
        }
        _createShadowTransform(e) {
          let t = (function (e) {
            let t = e.clone();
            return (t.pixelsToGLUnits = e.pixelsToGLUnits), t;
          })(e.transform);
          (e.painter.transform = t), (this._renderTransform = t);
        }
        _updateSize(e) {
          let { viewState: t } = e;
          if (t) {
            let n = this._map;
            if (
              t.width !== n.transform.width ||
              t.height !== n.transform.height
            )
              return n.resize(), !0;
          }
          return !1;
        }
        _updateViewState(e, t) {
          if (this._internalUpdate) return !1;
          let n = this._map,
            r = this._renderTransform,
            { zoom: o, pitch: i, bearing: l } = r,
            u = n.isMoving();
          u && (r.cameraElevationReference = "sea");
          let c = s(r, { ...a(n.transform), ...e });
          if ((u && (r.cameraElevationReference = "ground"), c && t)) {
            let p = this._deferredEvents;
            (p.move = !0),
              p.zoom || (p.zoom = o !== r.zoom),
              p.rotate || (p.rotate = l !== r.bearing),
              p.pitch || (p.pitch = i !== r.pitch);
          }
          return u || s(n.transform, e), c;
        }
        _updateSettings(e, t) {
          let n = this._map,
            r = !1;
          for (let o of h)
            o in e &&
              !c(e[o], t[o]) &&
              ((r = !0), n[`set${o[0].toUpperCase()}${o.slice(1)}`](e[o]));
          return r;
        }
        _updateStyle(e, t) {
          if (
            (e.cursor !== t.cursor &&
              (this._map.getCanvas().style.cursor = e.cursor),
            e.mapStyle !== t.mapStyle)
          ) {
            let n = { diff: e.styleDiffing };
            return (
              "localIdeographFontFamily" in e &&
                (n.localIdeographFontFamily = e.localIdeographFontFamily),
              this._map.setStyle(u(e.mapStyle), n),
              !0
            );
          }
          return !1;
        }
        _updateStyleComponents(e, t) {
          let n = this._map,
            r = !1;
          return (
            n.style.loaded() &&
              ("light" in e &&
                !c(e.light, t.light) &&
                ((r = !0), n.setLight(e.light)),
              "fog" in e && !c(e.fog, t.fog) && ((r = !0), n.setFog(e.fog)),
              "terrain" in e &&
                !c(e.terrain, t.terrain) &&
                (!e.terrain || n.getSource(e.terrain.source)) &&
                ((r = !0), n.setTerrain(e.terrain))),
            r
          );
        }
        _updateHandlers(e, t) {
          let n = this._map,
            r = !1;
          for (let o of g) {
            let i = e[o];
            c(i, t[o]) || ((r = !0), i ? n[o].enable(i) : n[o].disable());
          }
          return r;
        }
        _updateHover(e) {
          var t;
          let { props: n } = this,
            r =
              n.interactiveLayerIds &&
              (n.onMouseMove || n.onMouseEnter || n.onMouseLeave);
          if (r) {
            let o;
            let i = e.type,
              a =
                (null === (t = this._hoveredFeatures) || void 0 === t
                  ? void 0
                  : t.length) > 0;
            if ("mousemove" === i)
              try {
                o = this._map.queryRenderedFeatures(e.point, {
                  layers: n.interactiveLayerIds,
                });
              } catch (s) {
                o = [];
              }
            else o = [];
            let l = o.length > 0;
            !l && a && ((e.type = "mouseleave"), this._onPointerEvent(e)),
              (this._hoveredFeatures = o),
              l && !a && ((e.type = "mouseenter"), this._onPointerEvent(e)),
              (e.type = i);
          } else this._hoveredFeatures = null;
        }
        _fireEvent(e, t, n) {
          let r = this._map,
            o = r.transform,
            i = "string" == typeof t ? t : t.type;
          return ("move" === i && this._updateViewState(this.props, !1),
          i in f &&
            ("object" == typeof t && (t.viewState = a(o)),
            this._map.isMoving()))
            ? ((r.transform = this._renderTransform),
              e.call(r, t, n),
              (r.transform = o),
              r)
            : (e.call(r, t, n), r);
        }
        _onBeforeRepaint() {
          let e = this._map;
          for (let t in ((this._internalUpdate = !0), this._deferredEvents))
            this._deferredEvents[t] && e.fire(t);
          this._internalUpdate = !1;
          let n = this._map.transform;
          (this._map.transform = this._renderTransform),
            (this._onAfterRepaint = () => {
              this._map.transform = n;
            });
        }
      }
      v.savedMaps = [];
      let y = [
          "setMaxBounds",
          "setMinZoom",
          "setMaxZoom",
          "setMinPitch",
          "setMaxPitch",
          "setRenderWorldCopies",
          "setProjection",
          "setStyle",
          "addSource",
          "removeSource",
          "addLayer",
          "removeLayer",
          "setLayerZoomRange",
          "setFilter",
          "setPaintProperty",
          "setLayoutProperty",
          "setLight",
          "setTerrain",
          "setFog",
          "remove",
        ],
        _ = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect,
        E = [
          "baseApiUrl",
          "maxParallelImageRequests",
          "workerClass",
          "workerCount",
          "workerUrl",
        ],
        x = r.createContext(null),
        b = (0, r.forwardRef)((e, t) => {
          let i = (0, r.useContext)(o),
            [a, s] = (0, r.useState)(null),
            l = (0, r.useRef)(),
            { current: u } = (0, r.useRef)({ mapLib: null, map: null });
          (0, r.useEffect)(() => {
            let t;
            let r = e.mapLib,
              o = !0;
            return (
              Promise.resolve(r || n.e(634).then(n.t.bind(n, 6158, 23)))
                .then((n) => {
                  if (o) {
                    if ((n.Map || (n = n.default), !n || !n.Map))
                      throw Error("Invalid mapLib");
                    if (n.supported(e))
                      (function (e, t) {
                        for (let n of E) n in t && (e[n] = t[n]);
                        t.RTLTextPlugin &&
                          e.getRTLTextPluginStatus &&
                          "unavailable" === e.getRTLTextPluginStatus() &&
                          e.setRTLTextPlugin(
                            t.RTLTextPlugin,
                            (e) => {
                              e && console.error(e);
                            },
                            !1
                          );
                      })(n, e),
                        e.reuseMaps && (t = v.reuse(e, l.current)),
                        t || (t = new v(n.Map, e, l.current)),
                        (u.map = (function (e, t) {
                          if (!e) return null;
                          let n = e.map,
                            r = {
                              getMap: () => n,
                              getCenter: () => e.transform.center,
                              getZoom: () => e.transform.zoom,
                              getBearing: () => e.transform.bearing,
                              getPitch: () => e.transform.pitch,
                              getPadding: () => e.transform.padding,
                              getBounds: () => e.transform.getBounds(),
                              project: (n) =>
                                e.transform.locationPoint(t.LngLat.convert(n)),
                              unproject: (n) =>
                                e.transform.pointLocation(t.Point.convert(n)),
                              queryTerrainElevation: (t, r) => {
                                let o = n.transform;
                                n.transform = e.transform;
                                let i = n.queryTerrainElevation(t, r);
                                return (n.transform = o), i;
                              },
                            };
                          for (let o of (function (e) {
                            let t = new Set(),
                              n = e;
                            for (; n; ) {
                              for (let r of Object.getOwnPropertyNames(n))
                                "_" !== r[0] &&
                                  "function" == typeof e[r] &&
                                  "fire" !== r &&
                                  "setEventedParent" !== r &&
                                  t.add(r);
                              n = Object.getPrototypeOf(n);
                            }
                            return Array.from(t);
                          })(n))
                            o in r || y.includes(o) || (r[o] = n[o].bind(n));
                          return r;
                        })(t, n)),
                        (u.mapLib = n),
                        s(t),
                        null == i || i.onMapMount(u.map, e.id);
                    else throw Error("Map is not supported by this browser");
                  }
                })
                .catch((t) => {
                  e.onError({
                    type: "error",
                    target: null,
                    originalEvent: null,
                    error: t,
                  });
                }),
              () => {
                (o = !1),
                  t &&
                    (null == i || i.onMapUnmount(e.id),
                    e.reuseMaps ? t.recycle() : t.destroy());
              }
            );
          }, []),
            _(() => {
              a && a.setProps(e);
            }),
            (0, r.useImperativeHandle)(t, () => u.map, [a]);
          let c = (0, r.useMemo)(
            () => ({
              position: "relative",
              width: "100%",
              height: "100%",
              ...e.style,
            }),
            [e.style]
          );
          return r.createElement(
            "div",
            { id: e.id, ref: l, style: c },
            a &&
              r.createElement(
                x.Provider,
                { value: u },
                r.createElement("div", { "mapboxgl-children": "" }, e.children)
              )
          );
        });
      (b.displayName = "Map"),
        (b.defaultProps = {
          minZoom: 0,
          maxZoom: 22,
          minPitch: 0,
          maxPitch: 60,
          scrollZoom: !0,
          boxZoom: !0,
          dragRotate: !0,
          dragPan: !0,
          keyboard: !0,
          doubleClickZoom: !0,
          touchZoomRotate: !0,
          touchPitch: !0,
          mapStyle: { version: 8, sources: {}, layers: [] },
          styleDiffing: !0,
          projection: "mercator",
          renderWorldCopies: !0,
          onError: (e) => console.error(e.error),
          RTLTextPlugin:
            "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
        });
      var L = b,
        C = n(3935);
      let T =
        /box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;
      function M(e, t) {
        if (!e || !t) return;
        let n = e.style;
        for (let r in t) {
          let o = t[r];
          Number.isFinite(o) && !T.test(r) ? (n[r] = `${o}px`) : (n[r] = o);
        }
      }
      function P(e) {
        let { map: t, mapLib: n } = (0, r.useContext)(x),
          o = (0, r.useRef)({ props: e });
        o.current.props = e;
        let i = (0, r.useMemo)(() => {
          let t = !1;
          r.Children.forEach(e.children, (e) => {
            e && (t = !0);
          });
          let a = { ...e, element: t ? document.createElement("div") : null },
            s = new n.Marker(a).setLngLat([e.longitude, e.latitude]);
          return (
            s.getElement().addEventListener("click", (e) => {
              var t, n;
              null === (n = (t = o.current.props).onClick) ||
                void 0 === n ||
                n.call(t, { type: "click", target: s, originalEvent: e });
            }),
            s.on("dragstart", (e) => {
              var t, n;
              let r = e;
              (r.lngLat = i.getLngLat()),
                null === (n = (t = o.current.props).onDragStart) ||
                  void 0 === n ||
                  n.call(t, r);
            }),
            s.on("drag", (e) => {
              var t, n;
              let r = e;
              (r.lngLat = i.getLngLat()),
                null === (n = (t = o.current.props).onDrag) ||
                  void 0 === n ||
                  n.call(t, r);
            }),
            s.on("dragend", (e) => {
              var t, n;
              let r = e;
              (r.lngLat = i.getLngLat()),
                null === (n = (t = o.current.props).onDragEnd) ||
                  void 0 === n ||
                  n.call(t, r);
            }),
            s
          );
        }, []);
        return (
          (0, r.useEffect)(
            () => (
              i.addTo(t.getMap()),
              () => {
                i.remove();
              }
            ),
            []
          ),
          (0, r.useEffect)(() => {
            M(i.getElement(), e.style);
          }, [e.style]),
          (i.getLngLat().lng !== e.longitude ||
            i.getLngLat().lat !== e.latitude) &&
            i.setLngLat([e.longitude, e.latitude]),
          e.offset &&
            !(function (e, t) {
              let n = Array.isArray(e) ? e[0] : e ? e.x : 0,
                r = Array.isArray(e) ? e[1] : e ? e.y : 0,
                o = Array.isArray(t) ? t[0] : t ? t.x : 0,
                i = Array.isArray(t) ? t[1] : t ? t.y : 0;
              return n === o && r === i;
            })(i.getOffset(), e.offset) &&
            i.setOffset(e.offset),
          i.isDraggable() !== e.draggable && i.setDraggable(e.draggable),
          i.getRotation() !== e.rotation && i.setRotation(e.rotation),
          i.getRotationAlignment() !== e.rotationAlignment &&
            i.setRotationAlignment(e.rotationAlignment),
          i.getPitchAlignment() !== e.pitchAlignment &&
            i.setPitchAlignment(e.pitchAlignment),
          i.getPopup() !== e.popup && i.setPopup(e.popup),
          (0, C.createPortal)(e.children, i.getElement())
        );
      }
      P.defaultProps = {
        draggable: !1,
        popup: null,
        rotation: 0,
        rotationAlignment: "auto",
        pitchAlignment: "auto",
      };
      var S = r.memo(P);
      function w(e) {
        return new Set(e ? e.trim().split(/\s+/) : []);
      }
      r.memo(function (e) {
        let { map: t, mapLib: n } = (0, r.useContext)(x),
          o = (0, r.useMemo)(() => document.createElement("div"), []),
          i = (0, r.useRef)({ props: e });
        i.current.props = e;
        let a = (0, r.useMemo)(() => {
          let t = { ...e },
            r = new n.Popup(t).setLngLat([e.longitude, e.latitude]);
          return (
            r.once("open", (e) => {
              var t, n;
              null === (n = (t = i.current.props).onOpen) ||
                void 0 === n ||
                n.call(t, e);
            }),
            r
          );
        }, []);
        if (
          ((0, r.useEffect)(() => {
            let e = (e) => {
              var t, n;
              null === (n = (t = i.current.props).onClose) ||
                void 0 === n ||
                n.call(t, e);
            };
            return (
              a.on("close", e),
              a.setDOMContent(o).addTo(t.getMap()),
              () => {
                a.off("close", e), a.isOpen() && a.remove();
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            M(a.getElement(), e.style);
          }, [e.style]),
          a.isOpen() &&
            ((a.getLngLat().lng !== e.longitude ||
              a.getLngLat().lat !== e.latitude) &&
              a.setLngLat([e.longitude, e.latitude]),
            e.offset && !c(a.options.offset, e.offset) && a.setOffset(e.offset),
            (a.options.anchor !== e.anchor ||
              a.options.maxWidth !== e.maxWidth) &&
              ((a.options.anchor = e.anchor), a.setMaxWidth(e.maxWidth)),
            a.options.className !== e.className))
        ) {
          let s = w(a.options.className),
            l = w(e.className);
          for (let u of s) l.has(u) || a.removeClassName(u);
          for (let p of l) s.has(p) || a.addClassName(p);
          a.options.className = e.className;
        }
        return (0, C.createPortal)(e.children, o);
      });
      var R = function (e, t, n, o) {
        let i = (0, r.useContext)(x),
          a = (0, r.useMemo)(() => e(i), []);
        return (
          (0, r.useEffect)(() => {
            let e = o || n || t,
              r = "function" == typeof t && "function" == typeof n ? t : null,
              s =
                "function" == typeof n ? n : "function" == typeof t ? t : null,
              { map: l } = i;
            return (
              !l.hasControl(a) &&
                (l.addControl(a, null == e ? void 0 : e.position), r && r(i)),
              () => {
                s && s(i), l.hasControl(a) && l.removeControl(a);
              }
            );
          }, []),
          a
        );
      };
      r.memo(function (e) {
        let t = R(({ mapLib: t }) => new t.AttributionControl(e), {
          position: e.position,
        });
        return (
          (0, r.useEffect)(() => {
            M(t._container, e.style);
          }, [e.style]),
          null
        );
      }),
        r.memo(function (e) {
          let t = R(
            ({ mapLib: t }) =>
              new t.FullscreenControl({
                container:
                  e.containerId && document.getElementById(e.containerId),
              }),
            { position: e.position }
          );
          return (
            (0, r.useEffect)(() => {
              M(t._controlContainer, e.style);
            }, [e.style]),
            null
          );
        });
      let A = (0, r.forwardRef)((e, t) => {
        let n = (0, r.useRef)({ props: e }),
          o = R(
            ({ mapLib: t }) => {
              let r = new t.GeolocateControl(e),
                o = r._setupUI;
              return (
                (r._setupUI = (e) => {
                  r._container.hasChildNodes() || o(e);
                }),
                r.on("geolocate", (e) => {
                  var t, r;
                  null === (r = (t = n.current.props).onGeolocate) ||
                    void 0 === r ||
                    r.call(t, e);
                }),
                r.on("error", (e) => {
                  var t, r;
                  null === (r = (t = n.current.props).onError) ||
                    void 0 === r ||
                    r.call(t, e);
                }),
                r.on("outofmaxbounds", (e) => {
                  var t, r;
                  null === (r = (t = n.current.props).onOutOfMaxBounds) ||
                    void 0 === r ||
                    r.call(t, e);
                }),
                r.on("trackuserlocationstart", (e) => {
                  var t, r;
                  null ===
                    (r = (t = n.current.props).onTrackUserLocationStart) ||
                    void 0 === r ||
                    r.call(t, e);
                }),
                r.on("trackuserlocationend", (e) => {
                  var t, r;
                  null === (r = (t = n.current.props).onTrackUserLocationEnd) ||
                    void 0 === r ||
                    r.call(t, e);
                }),
                r
              );
            },
            { position: e.position }
          );
        return (
          (n.current.props = e),
          (0, r.useImperativeHandle)(
            t,
            () => ({ trigger: () => o.trigger() }),
            []
          ),
          (0, r.useEffect)(() => {
            M(o._container, e.style);
          }, [e.style]),
          null
        );
      });
      function k(e) {
        let t = R(({ mapLib: t }) => new t.ScaleControl(e), {
          position: e.position,
        });
        return (
          (t.options.unit !== e.unit || t.options.maxWidth !== e.maxWidth) &&
            ((t.options.maxWidth = e.maxWidth), t.setUnit(e.unit)),
          (0, r.useEffect)(() => {
            M(t._container, e.style);
          }, [e.style]),
          null
        );
      }
      (A.displayName = "GeolocateControl"),
        r.memo(A),
        r.memo(function (e) {
          let t = R(({ mapLib: t }) => new t.NavigationControl(e), {
            position: e.position,
          });
          return (
            (0, r.useEffect)(() => {
              M(t._container, e.style);
            }, [e.style]),
            null
          );
        }),
        (k.defaultProps = { unit: "metric", maxWidth: 100 }),
        r.memo(k);
    },
  },
]);

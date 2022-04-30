// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9NA6F":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "334ef177fe23e6ab";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3DgzL":[function(require,module,exports) {
module.exports = JSON.parse("{\"format\":\"layers-model\",\"generatedBy\":\"keras v2.8.0\",\"convertedBy\":\"TensorFlow.js Converter v3.15.0\",\"modelTopology\":{\"keras_version\":\"2.8.0\",\"backend\":\"tensorflow\",\"model_config\":{\"class_name\":\"Functional\",\"config\":{\"name\":\"model_1\",\"layers\":[{\"class_name\":\"InputLayer\",\"config\":{\"batch_input_shape\":[null,32,32,3],\"dtype\":\"float32\",\"sparse\":false,\"ragged\":false,\"name\":\"input_2\"},\"name\":\"input_2\",\"inbound_nodes\":[]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_45\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":16,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_45\",\"inbound_nodes\":[[[\"input_2\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_43\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_43\",\"inbound_nodes\":[[[\"conv2d_45\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_43\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_43\",\"inbound_nodes\":[[[\"batch_normalization_43\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_46\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":16,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_46\",\"inbound_nodes\":[[[\"activation_43\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_44\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_44\",\"inbound_nodes\":[[[\"conv2d_46\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_44\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_44\",\"inbound_nodes\":[[[\"batch_normalization_44\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_47\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":16,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_47\",\"inbound_nodes\":[[[\"activation_44\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_45\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_45\",\"inbound_nodes\":[[[\"conv2d_47\",0,0,{}]]]},{\"class_name\":\"Add\",\"config\":{\"name\":\"add_21\",\"trainable\":true,\"dtype\":\"float32\"},\"name\":\"add_21\",\"inbound_nodes\":[[[\"activation_43\",0,0,{}],[\"batch_normalization_45\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_45\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_45\",\"inbound_nodes\":[[[\"add_21\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_48\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":16,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_48\",\"inbound_nodes\":[[[\"activation_45\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_46\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_46\",\"inbound_nodes\":[[[\"conv2d_48\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_46\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_46\",\"inbound_nodes\":[[[\"batch_normalization_46\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_49\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":16,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_49\",\"inbound_nodes\":[[[\"activation_46\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_47\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_47\",\"inbound_nodes\":[[[\"conv2d_49\",0,0,{}]]]},{\"class_name\":\"Add\",\"config\":{\"name\":\"add_22\",\"trainable\":true,\"dtype\":\"float32\"},\"name\":\"add_22\",\"inbound_nodes\":[[[\"activation_45\",0,0,{}],[\"batch_normalization_47\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_47\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_47\",\"inbound_nodes\":[[[\"add_22\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_50\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":16,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_50\",\"inbound_nodes\":[[[\"activation_47\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_48\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_48\",\"inbound_nodes\":[[[\"conv2d_50\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_48\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_48\",\"inbound_nodes\":[[[\"batch_normalization_48\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_51\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":16,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_51\",\"inbound_nodes\":[[[\"activation_48\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_49\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_49\",\"inbound_nodes\":[[[\"conv2d_51\",0,0,{}]]]},{\"class_name\":\"Add\",\"config\":{\"name\":\"add_23\",\"trainable\":true,\"dtype\":\"float32\"},\"name\":\"add_23\",\"inbound_nodes\":[[[\"activation_47\",0,0,{}],[\"batch_normalization_49\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_49\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_49\",\"inbound_nodes\":[[[\"add_23\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_52\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":32,\"kernel_size\":[3,3],\"strides\":[2,2],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_52\",\"inbound_nodes\":[[[\"activation_49\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_50\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_50\",\"inbound_nodes\":[[[\"conv2d_52\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_50\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_50\",\"inbound_nodes\":[[[\"batch_normalization_50\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_53\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":32,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_53\",\"inbound_nodes\":[[[\"activation_50\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_54\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":32,\"kernel_size\":[1,1],\"strides\":[2,2],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_54\",\"inbound_nodes\":[[[\"activation_49\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_51\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_51\",\"inbound_nodes\":[[[\"conv2d_53\",0,0,{}]]]},{\"class_name\":\"Add\",\"config\":{\"name\":\"add_24\",\"trainable\":true,\"dtype\":\"float32\"},\"name\":\"add_24\",\"inbound_nodes\":[[[\"conv2d_54\",0,0,{}],[\"batch_normalization_51\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_51\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_51\",\"inbound_nodes\":[[[\"add_24\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_55\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":32,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_55\",\"inbound_nodes\":[[[\"activation_51\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_52\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_52\",\"inbound_nodes\":[[[\"conv2d_55\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_52\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_52\",\"inbound_nodes\":[[[\"batch_normalization_52\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_56\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":32,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_56\",\"inbound_nodes\":[[[\"activation_52\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_53\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_53\",\"inbound_nodes\":[[[\"conv2d_56\",0,0,{}]]]},{\"class_name\":\"Add\",\"config\":{\"name\":\"add_25\",\"trainable\":true,\"dtype\":\"float32\"},\"name\":\"add_25\",\"inbound_nodes\":[[[\"activation_51\",0,0,{}],[\"batch_normalization_53\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_53\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_53\",\"inbound_nodes\":[[[\"add_25\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_57\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":32,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_57\",\"inbound_nodes\":[[[\"activation_53\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_54\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_54\",\"inbound_nodes\":[[[\"conv2d_57\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_54\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_54\",\"inbound_nodes\":[[[\"batch_normalization_54\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_58\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":32,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_58\",\"inbound_nodes\":[[[\"activation_54\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_55\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_55\",\"inbound_nodes\":[[[\"conv2d_58\",0,0,{}]]]},{\"class_name\":\"Add\",\"config\":{\"name\":\"add_26\",\"trainable\":true,\"dtype\":\"float32\"},\"name\":\"add_26\",\"inbound_nodes\":[[[\"activation_53\",0,0,{}],[\"batch_normalization_55\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_55\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_55\",\"inbound_nodes\":[[[\"add_26\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_59\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":64,\"kernel_size\":[3,3],\"strides\":[2,2],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_59\",\"inbound_nodes\":[[[\"activation_55\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_56\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_56\",\"inbound_nodes\":[[[\"conv2d_59\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_56\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_56\",\"inbound_nodes\":[[[\"batch_normalization_56\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_60\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":64,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_60\",\"inbound_nodes\":[[[\"activation_56\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_61\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":64,\"kernel_size\":[1,1],\"strides\":[2,2],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_61\",\"inbound_nodes\":[[[\"activation_55\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_57\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_57\",\"inbound_nodes\":[[[\"conv2d_60\",0,0,{}]]]},{\"class_name\":\"Add\",\"config\":{\"name\":\"add_27\",\"trainable\":true,\"dtype\":\"float32\"},\"name\":\"add_27\",\"inbound_nodes\":[[[\"conv2d_61\",0,0,{}],[\"batch_normalization_57\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_57\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_57\",\"inbound_nodes\":[[[\"add_27\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_62\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":64,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_62\",\"inbound_nodes\":[[[\"activation_57\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_58\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_58\",\"inbound_nodes\":[[[\"conv2d_62\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_58\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_58\",\"inbound_nodes\":[[[\"batch_normalization_58\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_63\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":64,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_63\",\"inbound_nodes\":[[[\"activation_58\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_59\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_59\",\"inbound_nodes\":[[[\"conv2d_63\",0,0,{}]]]},{\"class_name\":\"Add\",\"config\":{\"name\":\"add_28\",\"trainable\":true,\"dtype\":\"float32\"},\"name\":\"add_28\",\"inbound_nodes\":[[[\"activation_57\",0,0,{}],[\"batch_normalization_59\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_59\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_59\",\"inbound_nodes\":[[[\"add_28\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_64\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":64,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_64\",\"inbound_nodes\":[[[\"activation_59\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_60\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_60\",\"inbound_nodes\":[[[\"conv2d_64\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_60\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_60\",\"inbound_nodes\":[[[\"batch_normalization_60\",0,0,{}]]]},{\"class_name\":\"Conv2D\",\"config\":{\"name\":\"conv2d_65\",\"trainable\":true,\"dtype\":\"float32\",\"filters\":64,\"kernel_size\":[3,3],\"strides\":[1,1],\"padding\":\"same\",\"data_format\":\"channels_last\",\"dilation_rate\":[1,1],\"groups\":1,\"activation\":\"linear\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":{\"class_name\":\"L2\",\"config\":{\"l2\":0.00009999999747378752}},\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"conv2d_65\",\"inbound_nodes\":[[[\"activation_60\",0,0,{}]]]},{\"class_name\":\"BatchNormalization\",\"config\":{\"name\":\"batch_normalization_61\",\"trainable\":true,\"dtype\":\"float32\",\"axis\":[3],\"momentum\":0.99,\"epsilon\":0.001,\"center\":true,\"scale\":true,\"beta_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"gamma_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"moving_mean_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"moving_variance_initializer\":{\"class_name\":\"Ones\",\"config\":{}},\"beta_regularizer\":null,\"gamma_regularizer\":null,\"beta_constraint\":null,\"gamma_constraint\":null},\"name\":\"batch_normalization_61\",\"inbound_nodes\":[[[\"conv2d_65\",0,0,{}]]]},{\"class_name\":\"Add\",\"config\":{\"name\":\"add_29\",\"trainable\":true,\"dtype\":\"float32\"},\"name\":\"add_29\",\"inbound_nodes\":[[[\"activation_59\",0,0,{}],[\"batch_normalization_61\",0,0,{}]]]},{\"class_name\":\"Activation\",\"config\":{\"name\":\"activation_61\",\"trainable\":true,\"dtype\":\"float32\",\"activation\":\"relu\"},\"name\":\"activation_61\",\"inbound_nodes\":[[[\"add_29\",0,0,{}]]]},{\"class_name\":\"AveragePooling2D\",\"config\":{\"name\":\"average_pooling2d_1\",\"trainable\":true,\"dtype\":\"float32\",\"pool_size\":[8,8],\"padding\":\"valid\",\"strides\":[8,8],\"data_format\":\"channels_last\"},\"name\":\"average_pooling2d_1\",\"inbound_nodes\":[[[\"activation_61\",0,0,{}]]]},{\"class_name\":\"Flatten\",\"config\":{\"name\":\"flatten_1\",\"trainable\":true,\"dtype\":\"float32\",\"data_format\":\"channels_last\"},\"name\":\"flatten_1\",\"inbound_nodes\":[[[\"average_pooling2d_1\",0,0,{}]]]},{\"class_name\":\"Dense\",\"config\":{\"name\":\"dense_1\",\"trainable\":true,\"dtype\":\"float32\",\"units\":10,\"activation\":\"softmax\",\"use_bias\":true,\"kernel_initializer\":{\"class_name\":\"HeNormal\",\"config\":{\"seed\":null}},\"bias_initializer\":{\"class_name\":\"Zeros\",\"config\":{}},\"kernel_regularizer\":null,\"bias_regularizer\":null,\"activity_regularizer\":null,\"kernel_constraint\":null,\"bias_constraint\":null},\"name\":\"dense_1\",\"inbound_nodes\":[[[\"flatten_1\",0,0,{}]]]}],\"input_layers\":[[\"input_2\",0,0]],\"output_layers\":[[\"dense_1\",0,0]]}},\"training_config\":{\"loss\":\"categorical_crossentropy\",\"metrics\":[[{\"class_name\":\"MeanMetricWrapper\",\"config\":{\"name\":\"accuracy\",\"dtype\":\"float32\",\"fn\":\"categorical_accuracy\"}}]],\"weighted_metrics\":null,\"loss_weights\":null,\"optimizer_config\":{\"class_name\":\"SGD\",\"config\":{\"name\":\"SGD\",\"learning_rate\":0.009999999776482582,\"decay\":0,\"momentum\":0,\"nesterov\":false}}}},\"weightsManifest\":[{\"paths\":[\"group1-shard1of1.bin\"],\"weights\":[{\"name\":\"batch_normalization_43/gamma\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_43/beta\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_43/moving_mean\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_43/moving_variance\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_44/gamma\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_44/beta\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_44/moving_mean\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_44/moving_variance\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_45/gamma\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_45/beta\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_45/moving_mean\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_45/moving_variance\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_46/gamma\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_46/beta\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_46/moving_mean\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_46/moving_variance\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_47/gamma\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_47/beta\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_47/moving_mean\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_47/moving_variance\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_48/gamma\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_48/beta\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_48/moving_mean\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_48/moving_variance\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_49/gamma\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_49/beta\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_49/moving_mean\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_49/moving_variance\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_50/gamma\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_50/beta\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_50/moving_mean\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_50/moving_variance\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_51/gamma\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_51/beta\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_51/moving_mean\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_51/moving_variance\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_52/gamma\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_52/beta\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_52/moving_mean\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_52/moving_variance\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_53/gamma\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_53/beta\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_53/moving_mean\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_53/moving_variance\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_54/gamma\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_54/beta\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_54/moving_mean\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_54/moving_variance\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_55/gamma\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_55/beta\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_55/moving_mean\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_55/moving_variance\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_56/gamma\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_56/beta\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_56/moving_mean\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_56/moving_variance\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_57/gamma\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_57/beta\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_57/moving_mean\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_57/moving_variance\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_58/gamma\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_58/beta\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_58/moving_mean\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_58/moving_variance\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_59/gamma\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_59/beta\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_59/moving_mean\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_59/moving_variance\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_60/gamma\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_60/beta\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_60/moving_mean\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_60/moving_variance\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_61/gamma\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_61/beta\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_61/moving_mean\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"batch_normalization_61/moving_variance\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"conv2d_45/kernel\",\"shape\":[3,3,3,16],\"dtype\":\"float32\"},{\"name\":\"conv2d_45/bias\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"conv2d_46/kernel\",\"shape\":[3,3,16,16],\"dtype\":\"float32\"},{\"name\":\"conv2d_46/bias\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"conv2d_47/kernel\",\"shape\":[3,3,16,16],\"dtype\":\"float32\"},{\"name\":\"conv2d_47/bias\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"conv2d_48/kernel\",\"shape\":[3,3,16,16],\"dtype\":\"float32\"},{\"name\":\"conv2d_48/bias\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"conv2d_49/kernel\",\"shape\":[3,3,16,16],\"dtype\":\"float32\"},{\"name\":\"conv2d_49/bias\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"conv2d_50/kernel\",\"shape\":[3,3,16,16],\"dtype\":\"float32\"},{\"name\":\"conv2d_50/bias\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"conv2d_51/kernel\",\"shape\":[3,3,16,16],\"dtype\":\"float32\"},{\"name\":\"conv2d_51/bias\",\"shape\":[16],\"dtype\":\"float32\"},{\"name\":\"conv2d_52/kernel\",\"shape\":[3,3,16,32],\"dtype\":\"float32\"},{\"name\":\"conv2d_52/bias\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"conv2d_53/kernel\",\"shape\":[3,3,32,32],\"dtype\":\"float32\"},{\"name\":\"conv2d_53/bias\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"conv2d_54/kernel\",\"shape\":[1,1,16,32],\"dtype\":\"float32\"},{\"name\":\"conv2d_54/bias\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"conv2d_55/kernel\",\"shape\":[3,3,32,32],\"dtype\":\"float32\"},{\"name\":\"conv2d_55/bias\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"conv2d_56/kernel\",\"shape\":[3,3,32,32],\"dtype\":\"float32\"},{\"name\":\"conv2d_56/bias\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"conv2d_57/kernel\",\"shape\":[3,3,32,32],\"dtype\":\"float32\"},{\"name\":\"conv2d_57/bias\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"conv2d_58/kernel\",\"shape\":[3,3,32,32],\"dtype\":\"float32\"},{\"name\":\"conv2d_58/bias\",\"shape\":[32],\"dtype\":\"float32\"},{\"name\":\"conv2d_59/kernel\",\"shape\":[3,3,32,64],\"dtype\":\"float32\"},{\"name\":\"conv2d_59/bias\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"conv2d_60/kernel\",\"shape\":[3,3,64,64],\"dtype\":\"float32\"},{\"name\":\"conv2d_60/bias\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"conv2d_61/kernel\",\"shape\":[1,1,32,64],\"dtype\":\"float32\"},{\"name\":\"conv2d_61/bias\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"conv2d_62/kernel\",\"shape\":[3,3,64,64],\"dtype\":\"float32\"},{\"name\":\"conv2d_62/bias\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"conv2d_63/kernel\",\"shape\":[3,3,64,64],\"dtype\":\"float32\"},{\"name\":\"conv2d_63/bias\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"conv2d_64/kernel\",\"shape\":[3,3,64,64],\"dtype\":\"float32\"},{\"name\":\"conv2d_64/bias\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"conv2d_65/kernel\",\"shape\":[3,3,64,64],\"dtype\":\"float32\"},{\"name\":\"conv2d_65/bias\",\"shape\":[64],\"dtype\":\"float32\"},{\"name\":\"dense_1/kernel\",\"shape\":[64,10],\"dtype\":\"float32\"},{\"name\":\"dense_1/bias\",\"shape\":[10],\"dtype\":\"float32\"}]}]}");

},{}]},["9NA6F","3DgzL"], "3DgzL", "parcelRequired238")

//# sourceMappingURL=model.js.map

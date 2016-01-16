/* */ 
(function(process) {
  (function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId])
        return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        exports: {},
        id: moduleId,
        loaded: false
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.loaded = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
  })([function(module, exports, __webpack_require__) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {value: true});
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {'default': obj};
    }
    var _indexJs = __webpack_require__(1);
    var _indexJs2 = _interopRequireDefault(_indexJs);
    var fingerprint = __webpack_require__(2)();
    var _createCuid = (0, _indexJs2['default'])(fingerprint);
    var cuid = _createCuid.cuid;
    var slug = _createCuid.slug;
    cuid.slug = slug;
    exports['default'] = cuid;
    module.exports = exports['default'];
  }, function(module, exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {value: true});
    var c = 0;
    var blockSize = 4;
    var base = 36;
    var discreteValues = Math.pow(base, blockSize);
    var pad = function pad(str, size) {
      return ('000000000' + str).slice(-size);
    };
    var randomBlock = function randomBlock() {
      return pad((Math.random() * discreteValues << 0).toString(base), blockSize);
    };
    var safeCounter = function safeCounter() {
      c = c < discreteValues ? c : 0;
      return c++;
    };
    var createCuid = function createCuid(fingerprint) {
      var cuid = function cuid() {
        var letter = 'c';
        var timestamp = new Date().getTime().toString(base);
        var random = randomBlock() + randomBlock();
        var counter = pad(safeCounter().toString(base), blockSize);
        return letter + timestamp + counter + fingerprint + random;
      };
      var slug = function slug() {
        var date = new Date().getTime().toString(36);
        var print = fingerprint.slice(0, 1) + fingerprint.slice(-1);
        var random = randomBlock().slice(-2);
        var counter = safeCounter().toString(36).slice(-4);
        return date.slice(-2) + counter + print + random;
      };
      return {
        cuid: cuid,
        slug: slug
      };
    };
    exports['default'] = createCuid;
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    (function(process) {
      'use strict';
      Object.defineProperty(exports, '__esModule', {value: true});
      var os = __webpack_require__(4);
      var pad = function pad(str, size) {
        return ('000000000' + str).slice(-size);
      };
      var padding = 2;
      var pid = pad(process.pid.toString(36), padding);
      var hostname = os.hostname();
      hostname = hostname.split('').reduce(function(prev, char) {
        return +prev + char.charCodeAt(0);
      }, +hostname.length + 36).toString(36);
      var hostId = pad(hostname, padding);
      exports['default'] = function() {
        return pid + hostId;
      };
      module.exports = exports['default'];
    }.call(exports, __webpack_require__(3)));
  }, function(module, exports) {
    var process = module.exports = {};
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;
    function cleanUpNextTick() {
      draining = false;
      if (currentQueue.length) {
        queue = currentQueue.concat(queue);
      } else {
        queueIndex = -1;
      }
      if (queue.length) {
        drainQueue();
      }
    }
    function drainQueue() {
      if (draining) {
        return;
      }
      var timeout = setTimeout(cleanUpNextTick);
      draining = true;
      var len = queue.length;
      while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
          currentQueue[queueIndex].run();
        }
        queueIndex = -1;
        len = queue.length;
      }
      currentQueue = null;
      draining = false;
      clearTimeout(timeout);
    }
    process.nextTick = function(fun) {
      var args = new Array(arguments.length - 1);
      if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
          args[i - 1] = arguments[i];
        }
      }
      queue.push(new Item(fun, args));
      if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
      }
    };
    function Item(fun, array) {
      this.fun = fun;
      this.array = array;
    }
    Item.prototype.run = function() {
      this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = '';
    process.versions = {};
    function noop() {}
    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;
    process.binding = function(name) {
      throw new Error('process.binding is not supported');
    };
    process.cwd = function() {
      return '/';
    };
    process.chdir = function(dir) {
      throw new Error('process.chdir is not supported');
    };
    process.umask = function() {
      return 0;
    };
  }, function(module, exports) {
    exports.endianness = function() {
      return 'LE';
    };
    exports.hostname = function() {
      if (typeof location !== 'undefined') {
        return location.hostname;
      } else
        return '';
    };
    exports.loadavg = function() {
      return [];
    };
    exports.uptime = function() {
      return 0;
    };
    exports.freemem = function() {
      return Number.MAX_VALUE;
    };
    exports.totalmem = function() {
      return Number.MAX_VALUE;
    };
    exports.cpus = function() {
      return [];
    };
    exports.type = function() {
      return 'Browser';
    };
    exports.release = function() {
      if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
      }
      return '';
    };
    exports.networkInterfaces = exports.getNetworkInterfaces = function() {
      return {};
    };
    exports.arch = function() {
      return 'javascript';
    };
    exports.platform = function() {
      return 'browser';
    };
    exports.tmpdir = exports.tmpDir = function() {
      return '/tmp';
    };
    exports.EOL = '\n';
  }]);
})(require('process'));

/* */ 
(function(process) {
  (function(app) {
    'use strict';
    var namespace = 'cuid',
        c = 0,
        blockSize = 4,
        base = 36,
        discreteValues = Math.pow(base, blockSize),
        pad = function pad(num, size) {
          var s = "000000000" + num;
          return s.substr(s.length - size);
        },
        randomBlock = function randomBlock() {
          return pad((Math.random() * discreteValues << 0).toString(base), blockSize);
        },
        safeCounter = function() {
          c = (c < discreteValues) ? c : 0;
          c++;
          return c - 1;
        },
        api = function cuid() {
          var letter = 'c',
              timestamp = (new Date().getTime()).toString(base),
              counter,
              fingerprint = api.fingerprint(),
              random = randomBlock() + randomBlock();
          counter = pad(safeCounter().toString(base), blockSize);
          return (letter + timestamp + counter + fingerprint + random);
        };
    api.slug = function slug() {
      var date = new Date().getTime().toString(36),
          counter,
          print = api.fingerprint().slice(0, 1) + api.fingerprint().slice(-1),
          random = randomBlock().slice(-2);
      counter = safeCounter().toString(36).slice(-4);
      return date.slice(-2) + counter + print + random;
    };
    api.fingerprint = function nodePrint() {
      var os = require('os'),
          padding = 2,
          pid = pad((process.pid).toString(36), padding),
          hostname = os.hostname(),
          length = hostname.length,
          hostId = pad((hostname).split('').reduce(function(prev, char) {
            return +prev + char.charCodeAt(0);
          }, +length + 36).toString(36), padding);
      return pid + hostId;
    };
    if (app.register) {
      app.register(namespace, api);
    } else if (typeof module !== 'undefined') {
      module.exports = api;
    } else {
      app[namespace] = api;
    }
  }(this.applitude || this));
})(require('process'));

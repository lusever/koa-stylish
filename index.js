'use strict';

module.exports = function(options) {
  var stylish = require('stylish')(options);

  function middleware(app) {
    return function(callback) {
      var response = {
        header: app.set.bind(app),
        send: function(cssBody) {
          app.body = cssBody;
          callback(null, true);
        },
      };
      stylish(app.request, response, callback);
    };
  }

  return function *(next) {
    var resp = yield middleware(this);
    if (!resp) {
      yield *next;
    }
  };
};

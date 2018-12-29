if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-buildenv'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-buildenv'.");
}
this['appsimake-buildenv'] = function (_, Kotlin) {
  'use strict';
  var serviceWorkerFileName;
  var package$buildenv = _.buildenv || (_.buildenv = {});
  Object.defineProperty(package$buildenv, 'serviceWorkerFileName', {
    get: function () {
      return serviceWorkerFileName;
    }
  });
  serviceWorkerFileName = 'service-worker.js';
  Kotlin.defineModule('appsimake-buildenv', _);
  return _;
}(typeof this['appsimake-buildenv'] === 'undefined' ? {} : this['appsimake-buildenv'], kotlin);

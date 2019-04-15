if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-storelib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-storelib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-storelib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-storelib'.");
}
this['appsimake-storelib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var storeLib;
  var package$store = _.store || (_.store = {});
  Object.defineProperty(package$store, 'storeLib', {
    get: function () {
      return storeLib;
    }
  });
  storeLib = new Lib('store');
  Kotlin.defineModule('appsimake-storelib', _);
  return _;
}(typeof this['appsimake-storelib'] === 'undefined' ? {} : this['appsimake-storelib'], kotlin, this['appsimake-commonshr']);

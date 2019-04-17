if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-adminlib'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-adminlib'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-adminlib'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-adminlib'.");
}
this['appsimake-adminlib'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var Lib = $module$appsimake_commonshr.commonshr.Lib;
  var adminLib;
  var package$admin = _.admin || (_.admin = {});
  Object.defineProperty(package$admin, 'adminLib', {
    get: function () {
      return adminLib;
    }
  });
  adminLib = new Lib('admin');
  Kotlin.defineModule('appsimake-adminlib', _);
  return _;
}(typeof this['appsimake-adminlib'] === 'undefined' ? {} : this['appsimake-adminlib'], kotlin, this['appsimake-commonshr']);

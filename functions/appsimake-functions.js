function define(args, fn) {
    fn(
        ...args.map(function(a) {
            if (a == 'exports') {
                return module.exports;
            } else if (a.startsWith('appsimake-')) {
                return require('./' + a);
            } else {
                return require(a);
            }
        })
    );
}

define(['exports', 'kotlin'], function (_, Kotlin) {
  'use strict';
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  function admin$lambda() {
    return require('firebase-admin');
  }
  var admin;
  function get_admin() {
    return admin.value;
  }
  var package$firebaseadmin = _.firebaseadmin || (_.firebaseadmin = {});
  Object.defineProperty(package$firebaseadmin, 'admin', {
    get: get_admin
  });
  admin = lazy(admin$lambda);
  Kotlin.defineModule('appsimake-functions', _);
  return _;
});

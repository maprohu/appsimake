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

define(['exports', 'kotlin', 'appsimake-functions', 'appsimake-testappfns', 'appsimake-tictactoefns'], function (_, Kotlin, $module$appsimake_functions, $module$appsimake_testappfns, $module$appsimake_tictactoefns) {
  'use strict';
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var init = $module$appsimake_testappfns.testappfns.init_za3rmp$;
  var init_0 = $module$appsimake_tictactoefns.tictactoefns.init_za3rmp$;
  function init_1(exports) {
    firebaseadmin.admin.initializeApp();
    init(exports);
    init_0(exports);
  }
  _.init = init_1;
  Kotlin.defineModule('appsimake-mainfns', _);
  return _;
});

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

define(['exports', 'kotlin', 'appsimake-functions', 'firebase-functions', 'appsimake-testappfns', 'appsimake-tictactoefns'], function (_, Kotlin, $module$appsimake_functions, $module$firebase_functions, $module$appsimake_testappfns, $module$appsimake_tictactoefns) {
  'use strict';
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var Unit = Kotlin.kotlin.Unit;
  var onRequest = $module$firebase_functions.https.onRequest;
  var init = $module$appsimake_testappfns.testappfns.init_za3rmp$;
  var init_0 = $module$appsimake_tictactoefns.tictactoefns.init_za3rmp$;
  function init$lambda(f, response) {
    response.send('hello from kotlin');
    return Unit;
  }
  function init_1(exports) {
    firebaseadmin.admin.initializeApp();
    exports.helloWorld = onRequest(init$lambda);
    init(exports);
    init_0(exports);
  }
  _.init = init_1;
  Kotlin.defineModule('appsimake-mainfns', _);
  return _;
});

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

define(['exports', 'kotlin', 'firebase-admin', 'firebase-functions', 'appsimake-tictactoefns'], function (_, Kotlin, $module$firebase_admin, $module$firebase_functions, $module$appsimake_tictactoefns) {
  'use strict';
  var initializeApp = $module$firebase_admin.initializeApp;
  var Unit = Kotlin.kotlin.Unit;
  var onRequest = $module$firebase_functions.https.onRequest;
  var init = $module$appsimake_tictactoefns.tictactoefns.init_za3rmp$;
  function init$lambda(f, response) {
    response.send('hello from kotlin');
    return Unit;
  }
  function init_0(exports) {
    initializeApp();
    exports.helloWorld = onRequest(init$lambda);
    init(exports);
  }
  _.init = init_0;
  Kotlin.defineModule('appsimake-mainfns', _);
  return _;
});

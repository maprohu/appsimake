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

define(['exports', 'kotlin', 'firebase-functions', 'appsimake-tictactoelib'], function (_, Kotlin, $module$firebase_functions, $module$appsimake_tictactoelib) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var onCall = $module$firebase_functions.https.onCall;
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  function init$lambda(move, ctx) {
    console.log('move: ' + move.text);
    return Unit;
  }
  function init(exports) {
    exports[tictactoelib.moveFunctionName] = onCall(init$lambda);
  }
  var package$tictactoefns = _.tictactoefns || (_.tictactoefns = {});
  package$tictactoefns.init_za3rmp$ = init;
  Kotlin.defineModule('appsimake-tictactoefns', _);
  return _;
});

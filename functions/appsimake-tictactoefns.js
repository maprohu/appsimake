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

define(['exports', 'kotlin', 'firebase-admin', 'appsimake-commonshr', 'firebase-functions', 'appsimake-tictactoelib'], function (_, Kotlin, $module$firebase_admin, $module$appsimake_commonshr, $module$firebase_functions, $module$appsimake_tictactoelib) {
  'use strict';
  var messaging = $module$firebase_admin.messaging;
  var Unit = Kotlin.kotlin.Unit;
  var obj = $module$appsimake_commonshr.common.obj_7qq44f$;
  var onCall = $module$firebase_functions.https.onCall;
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  function init$lambda$lambda$lambda$lambda($receiver) {
    $receiver.body = 'hello from FCM';
    return Unit;
  }
  function init$lambda$lambda$lambda($receiver) {
    $receiver.notification = obj(init$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function init$lambda$lambda(closure$move) {
    return function ($receiver) {
      $receiver.token = closure$move.fcmToken;
      $receiver.webpush = obj(init$lambda$lambda$lambda);
      return Unit;
    };
  }
  function init$lambda(move, ctx) {
    return messaging().send(obj(init$lambda$lambda(move)));
  }
  function init(exports) {
    exports[tictactoelib.moveFunctionName] = onCall(init$lambda);
  }
  var package$tictactoefns = _.tictactoefns || (_.tictactoefns = {});
  package$tictactoefns.init_za3rmp$ = init;
  Kotlin.defineModule('appsimake-tictactoefns', _);
  return _;
});
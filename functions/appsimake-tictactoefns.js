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

define(['exports', 'kotlin', 'appsimake-functions', 'appsimake-commonshr', 'firebase-functions', 'appsimake-tictactoelib'], function (_, Kotlin, $module$appsimake_functions, $module$appsimake_commonshr, $module$firebase_functions, $module$appsimake_tictactoelib) {
  'use strict';
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var obj = $module$appsimake_commonshr.common.obj_7qq44f$;
  var onCall = $module$firebase_functions.https.onCall;
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  function init$lambda$lambda$lambda($receiver) {
    $receiver.boo = 'xyz';
    return Unit;
  }
  function init$lambda$lambda$lambda$lambda($receiver) {
    $receiver.body = 'hello from FCM';
    return Unit;
  }
  function init$lambda$lambda$lambda_0($receiver) {
    $receiver.notification = obj(init$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function init$lambda$lambda(closure$move) {
    return function ($receiver) {
      $receiver.token = closure$move.fcmToken;
      $receiver.data = obj(init$lambda$lambda$lambda);
      $receiver.webpush = obj(init$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function init$lambda(move, ctx) {
    firebaseadmin.admin.firestore().doc('/apps/tictactoe/private/' + toString(ctx.auth.uid));
    return firebaseadmin.admin.messaging().send(obj(init$lambda$lambda(move)));
  }
  function init(exports) {
    exports[tictactoelib.moveFunctionName] = onCall(init$lambda);
  }
  var package$tictactoefns = _.tictactoefns || (_.tictactoefns = {});
  package$tictactoefns.init_za3rmp$ = init;
  Kotlin.defineModule('appsimake-tictactoefns', _);
  return _;
});

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

define(['exports', 'kotlin', 'appsimake-tictactoelib', 'appsimake-commonshr', 'firebase-functions'], function (_, Kotlin, $module$appsimake_tictactoelib, $module$appsimake_commonshr, $module$firebase_functions) {
  'use strict';
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  var get_inbox = $module$appsimake_commonshr.commonshr.get_inbox_py8usb$;
  var get_public = $module$appsimake_commonshr.commonshr.get_public_csfjwe$;
  var get_moves = $module$appsimake_tictactoelib.tictactoelib.get_moves_f80bip$;
  var document = $module$firebase_functions.firestore.document;
  var Unit = Kotlin.kotlin.Unit;
  var recipientParam;
  function init$lambda(documentSnapshot, eventContext) {
    return Unit;
  }
  function init(exports) {
    exports[tictactoelib.tictactoeLib.qualified_61zpoe$('onMove')] = document(get_moves(get_public(get_inbox(tictactoelib.tictactoeLib.app).doc_61zpoe$('{recipient}'))).doc_61zpoe$('{moveId}').path).onCreate(init$lambda);
  }
  var package$tictactoefns = _.tictactoefns || (_.tictactoefns = {});
  Object.defineProperty(package$tictactoefns, 'recipientParam', {
    get: function () {
      return recipientParam;
    }
  });
  package$tictactoefns.init_za3rmp$ = init;
  recipientParam = 'recipient';
  Kotlin.defineModule('appsimake-tictactoefns', _);
  return _;
});

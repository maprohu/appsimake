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

define(['exports', 'kotlin', 'appsimake-tictactoelib', 'firebase-functions', 'kotlinx-coroutines-core', 'appsimake-functions', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_tictactoelib, $module$firebase_functions, $module$kotlinx_coroutines_core, $module$appsimake_functions, $module$appsimake_commonshr) {
  'use strict';
  var firestoreMovesRef = $module$appsimake_tictactoelib.tictactoelib.firestoreMovesRef_61zpoe$;
  var document = $module$firebase_functions.firestore.document;
  var throwCCE = Kotlin.throwCCE;
  var firestoreGameRef = $module$appsimake_tictactoelib.tictactoelib.firestoreGameRef_61zpoe$;
  var Move = $module$appsimake_tictactoelib.tictactoelib.Move;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var Unit = Kotlin.kotlin.Unit;
  var obj = $module$appsimake_commonshr.common.obj_7qq44f$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var gameIdParam;
  function init$lambda$lambda$lambda$lambda(closure$move) {
    return function ($receiver) {
      $receiver.data = closure$move.wrapped;
      return Unit;
    };
  }
  function init$lambda$lambda$lambda(closure$qds, closure$move) {
    return function ($receiver) {
      $receiver.token = closure$qds.id;
      $receiver.webpush = obj(init$lambda$lambda$lambda$lambda(closure$move));
      return Unit;
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function init$lambda$lambda(closure$gameRef_0, closure$move_0, closure$firestore_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda$lambda(closure$gameRef_0, closure$move_0, closure$firestore_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$init$lambda$lambda(closure$gameRef_0, closure$move_0, closure$firestore_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$gameRef = closure$gameRef_0;
    this.local$closure$move = closure$move_0;
    this.local$closure$firestore = closure$firestore_0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$qdss = void 0;
  }
  Coroutine$init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init$lambda$lambda.prototype.constructor = Coroutine$init$lambda$lambda;
  Coroutine$init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$closure$gameRef.get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var gameDS = this.result_0;
            if (gameDS.exists) {
              var game = Kotlin.isType(tmp$ = gameDS.data(), Object) ? tmp$ : throwCCE();
              if (game.players.length < 2) {
                tmp$_0 = toList(game.players);
              }
               else {
                var $receiver = game.players;
                var destination = ArrayList_init();
                var tmp$_1, tmp$_0_0;
                var index = 0;
                for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
                  var item = $receiver[tmp$_1];
                  var closure$move = this.local$closure$move;
                  if ((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0) !== closure$move.player)
                    destination.add_11rb$(item);
                }
                tmp$_0 = destination;
              }
              var sendTo = tmp$_0;
              this.local$tmp$_1 = sendTo.iterator();
              this.state_0 = 3;
              continue;
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 3:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 9;
              continue;
            }

            var player = this.local$tmp$_1.next();
            console.log('notifying player: ' + player);
            this.state_0 = 4;
            this.result_0 = await_0(this.local$closure$firestore.collection(tictactoelib.tictactoe.firestoreFcmTokensPath_61zpoe$(player)).get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$qdss = this.result_0.docs;
            this.local$tmp$_2 = 0;
            this.state_0 = 5;
            continue;
          case 5:
            if (this.local$tmp$_2 === this.local$qdss.length) {
              this.state_0 = 8;
              continue;
            }

            var qds = this.local$qdss[this.local$tmp$_2];
            console.log('notifying token: ' + qds.id);
            this.state_0 = 6;
            this.result_0 = await_0(firebaseadmin.admin.messaging().send(obj(init$lambda$lambda$lambda(qds, this.local$closure$move))), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            ++this.local$tmp$_2;
            this.state_0 = 5;
            continue;
          case 8:
            this.state_0 = 3;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function init$lambda(documentSnapshot, eventContext) {
    var tmp$;
    var firestore = documentSnapshot.ref.firestore;
    var gameRef = firestore.doc(firestoreGameRef(typeof (tmp$ = eventContext.params[gameIdParam]) === 'string' ? tmp$ : throwCCE()));
    var move = Move.Companion.of(documentSnapshot.data());
    return asPromise(async(coroutines.GlobalScope, void 0, void 0, init$lambda$lambda(gameRef, move, firestore)));
  }
  function init(exports) {
    exports[tictactoelib.tictactoe.qualified_61zpoe$('onMove')] = document(firestoreMovesRef('{gameId}') + '/{moveId}').onCreate(init$lambda);
  }
  var package$tictactoefns = _.tictactoefns || (_.tictactoefns = {});
  Object.defineProperty(package$tictactoefns, 'gameIdParam', {
    get: function () {
      return gameIdParam;
    }
  });
  package$tictactoefns.init_za3rmp$ = init;
  gameIdParam = 'gameId';
  Kotlin.defineModule('appsimake-tictactoefns', _);
  return _;
});

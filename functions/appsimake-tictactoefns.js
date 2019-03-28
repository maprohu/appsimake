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

define(['exports', 'kotlin', 'appsimake-tictactoelib', 'firebase-functions', 'appsimake-functions', 'kotlinx-coroutines-core', 'appsimake-commonshr'], function (_, Kotlin, $module$appsimake_tictactoelib, $module$firebase_functions, $module$appsimake_functions, $module$kotlinx_coroutines_core, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  var get_games = $module$appsimake_tictactoelib.tictactoelib.get_games_py8usb$;
  var get_moves = $module$appsimake_tictactoelib.tictactoelib.get_moves_9zet87$;
  var document = $module$firebase_functions.firestore.document;
  var throwCCE = Kotlin.throwCCE;
  var Move = $module$appsimake_tictactoelib.tictactoelib.Move;
  var commonfns = $module$appsimake_functions.commonfns;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Game = $module$appsimake_tictactoelib.tictactoelib.Game;
  var readDynamic = $module$appsimake_commonshr.commonshr.properties.readDynamic_121my8$;
  var Unit = Kotlin.kotlin.Unit;
  var get_private = $module$appsimake_commonshr.commonshr.get_private_py8usb$;
  var get_fcmtokens = $module$appsimake_commonshr.commonshr.get_fcmtokens_x4imip$;
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var gameIdParam;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  function Coroutine$init$lambda$lambda(closure$gameRef_0, closure$move_0, closure$firestore_0, closure$moveData_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$gameRef = closure$gameRef_0;
    this.local$closure$move = closure$move_0;
    this.local$closure$firestore = closure$firestore_0;
    this.local$closure$moveData = closure$moveData_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
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
              var $receiver = new Game();
              readDynamic($receiver, gameDS.data(), commonfns.FnsDynamicOps);
              var game = $receiver;
              var $receiver_0 = game.originalPlayers.now;
              var destination = ArrayList_init();
              var tmp$, tmp$_0;
              var index = 0;
              tmp$ = $receiver_0.iterator();
              while (tmp$.hasNext()) {
                var item = tmp$.next();
                var closure$move = this.local$closure$move;
                if (checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0)) !== closure$move.player.now && game.players.now.contains_11rb$(item))
                  destination.add_11rb$(item);
              }
              var sendTo = destination;
              this.local$tmp$ = sendTo.iterator();
              this.state_0 = 3;
              continue;
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 3:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 9;
              continue;
            }

            var player = this.local$tmp$.next();
            console.log('notifying player: ' + player);
            this.state_0 = 4;
            this.result_0 = await_0(this.local$closure$firestore.collection(get_fcmtokens(get_private(tictactoelib.tictactoeLib.app).doc_61zpoe$(player)).path).get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$qdss = this.result_0.docs;
            this.local$tmp$_0 = 0;
            this.state_0 = 5;
            continue;
          case 5:
            if (this.local$tmp$_0 === this.local$qdss.length) {
              this.state_0 = 8;
              continue;
            }

            var qds = this.local$qdss[this.local$tmp$_0];
            console.log('notifying token: ' + qds.id);
            var tmp$_1 = firebaseadmin.admin.messaging();
            var $receiver_1 = {};
            var closure$moveData = this.local$closure$moveData;
            $receiver_1.token = qds.id;
            var $receiver_2 = {};
            $receiver_2.json = JSON.stringify(closure$moveData);
            $receiver_1.data = $receiver_2;
            this.state_0 = 6;
            this.result_0 = await_0(tmp$_1.send($receiver_1), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            ++this.local$tmp$_0;
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
  function init$lambda$lambda(closure$gameRef_0, closure$move_0, closure$firestore_0, closure$moveData_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda$lambda(closure$gameRef_0, closure$move_0, closure$firestore_0, closure$moveData_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function init$lambda(documentSnapshot, eventContext) {
    var tmp$;
    var firestore = documentSnapshot.ref.firestore;
    var gameRef = firestore.doc(get_games(tictactoelib.tictactoeLib.app).doc_61zpoe$(typeof (tmp$ = eventContext.params[gameIdParam]) === 'string' ? tmp$ : throwCCE()).path);
    var moveData = documentSnapshot.data();
    var move = Move.Companion.of(moveData, commonfns.FnsDynamicOps);
    return asPromise(async(coroutines.GlobalScope, void 0, void 0, init$lambda$lambda(gameRef, move, firestore, moveData)));
  }
  function init(exports) {
    exports[tictactoelib.tictactoeLib.qualified_61zpoe$('onMove')] = document(get_moves(get_games(tictactoelib.tictactoeLib.app).doc_61zpoe$('{gameId}')).doc_61zpoe$('{moveId}').path).onCreate(init$lambda);
  }
  var package$tictactoefns = _.tictactoefns || (_.tictactoefns = {});
  Object.defineProperty(package$tictactoefns, 'gameIdParam', {
    get: function () {
      return gameIdParam;
    }
  });
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$tictactoefns.init_za3rmp$ = init;
  gameIdParam = 'gameId';
  Kotlin.defineModule('appsimake-tictactoefns', _);
  return _;
});

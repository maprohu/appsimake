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

define(['exports', 'kotlin', 'appsimake-tictactoelib', 'appsimake-commonshr', 'firebase-functions', 'kotlinx-coroutines-core', 'appsimake-functions'], function (_, Kotlin, $module$appsimake_tictactoelib, $module$appsimake_commonshr, $module$firebase_functions, $module$kotlinx_coroutines_core, $module$appsimake_functions) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  var get_inbox = $module$appsimake_commonshr.commonshr.get_inbox_py8usb$;
  var get_public = $module$appsimake_commonshr.commonshr.get_public_csfjwe$;
  var get_moves = $module$appsimake_tictactoelib.tictactoelib.get_moves_f80bip$;
  var document = $module$firebase_functions.firestore.document;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Move = $module$appsimake_tictactoelib.tictactoelib.Move;
  var commonfns = $module$appsimake_functions.commonfns;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var privateOf = $module$appsimake_commonshr.commonshr.privateOf_rzp46g$;
  var get_singletons = $module$appsimake_commonshr.commonshr.get_singletons_v34c5b$;
  var get_status = $module$appsimake_tictactoelib.tictactoelib.get_status_f98aja$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var GameStatus = $module$appsimake_tictactoelib.tictactoelib.GameStatus;
  var GameStatus$Waiting = $module$appsimake_tictactoelib.tictactoelib.GameStatus.Waiting;
  var GameStatus$Playing = $module$appsimake_tictactoelib.tictactoelib.GameStatus.Playing;
  var get_fcmTokens = $module$appsimake_commonshr.commonshr.get_fcmTokens_v34c5b$;
  var FcmToken = $module$appsimake_commonshr.commonshr.FcmToken;
  var readDynamic = $module$appsimake_commonshr.commonshr.properties.readDynamic_121my8$;
  var Unit = Kotlin.kotlin.Unit;
  var firebaseadmin = $module$appsimake_functions.firebaseadmin;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var recipientParam;
  function Coroutine$init$lambda$lambda(closure$documentSnapshot_0, closure$eventContext_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$documentSnapshot = closure$documentSnapshot_0;
    this.local$closure$eventContext = closure$eventContext_0;
    this.local$tmp$_0 = void 0;
    this.local$firestore = void 0;
    this.local$moveData = void 0;
    this.local$recipient = void 0;
    this.local$gameId = void 0;
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
            var tmp$;
            this.local$firestore = this.local$closure$documentSnapshot.ref.firestore;
            this.local$moveData = this.local$closure$documentSnapshot.data();
            var move = Move.Companion.of(this.local$moveData, commonfns.FnsDynamicOps);
            var from = move.from.now;
            this.local$recipient = typeof (tmp$ = this.local$closure$eventContext.params[recipientParam]) === 'string' ? tmp$ : throwCCE();
            if (!equals(from, this.local$recipient)) {
              this.local$gameId = move.game.now;
              var gameRef = this.local$firestore.doc(get_status(get_singletons(privateOf(tictactoelib.tictactoeLib, this.local$recipient))).path);
              this.state_0 = 2;
              this.result_0 = await_0(gameRef.get(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 12;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var gameDS = this.result_0;
            if (gameDS.exists) {
              var game = GameStatus.Companion.of(gameDS.data(), commonfns.FnsDynamicOps);
              if (Kotlin.isType(game, GameStatus$Waiting) && equals(game.game.now, this.local$gameId) || (Kotlin.isType(game, GameStatus$Playing) && equals(game.game.now, this.local$gameId))) {
                console.log('notifying player: ' + this.local$recipient);
                this.state_0 = 3;
                this.result_0 = await_0(this.local$firestore.collection(get_fcmTokens(privateOf(tictactoelib.tictactoeLib, this.local$recipient)).path).get(), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 10;
                continue;
              }
            }
             else {
              this.state_0 = 11;
              continue;
            }

          case 3:
            this.local$qdss = this.result_0.docs;
            this.local$tmp$_0 = 0;
            this.state_0 = 4;
            continue;
          case 4:
            if (this.local$tmp$_0 === this.local$qdss.length) {
              this.state_0 = 9;
              continue;
            }

            var qds = this.local$qdss[this.local$tmp$_0];
            var $receiver = new FcmToken();
            readDynamic($receiver, qds.data(), commonfns.FnsDynamicOps);
            var token = $receiver;
            if (token.enabled.now) {
              var t = token.token.now;
              if (t != null) {
                console.log('notifying token: ' + qds.id);
                var tmp$_0 = firebaseadmin.admin.messaging();
                var $receiver_0 = {};
                $receiver_0.token = t;
                var $receiver_1 = {};
                $receiver_1.json = JSON.stringify(this.local$moveData);
                $receiver_0.data = $receiver_1;
                this.state_0 = 5;
                this.result_0 = await_0(tmp$_0.send($receiver_0), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 6;
                continue;
              }
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            ++this.local$tmp$_0;
            this.state_0 = 4;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 12;
            continue;
          case 12:
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
  function init$lambda$lambda(closure$documentSnapshot_0, closure$eventContext_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda$lambda(closure$documentSnapshot_0, closure$eventContext_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function init$lambda(documentSnapshot, eventContext) {
    return asPromise(async(coroutines.GlobalScope, void 0, void 0, init$lambda$lambda(documentSnapshot, eventContext)));
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
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$tictactoefns.init_za3rmp$ = init;
  recipientParam = 'recipient';
  Kotlin.defineModule('appsimake-tictactoefns', _);
  return _;
});

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-tictactoelib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-tictactoelib' was not found. Please, check whether 'appsimake-tictactoelib' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-fbmessagingsw'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-fbmessagingsw' was not found. Please, check whether 'appsimake-fbmessagingsw' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-tictactoesw'.");
}
this['appsimake-tictactoesw'] = function (_, Kotlin, $module$appsimake_tictactoelib, $module$appsimake_commonshr, $module$appsimake_fbmessagingsw, $module$appsimake_firebaseshr) {
  'use strict';
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  var Move = $module$appsimake_tictactoelib.tictactoelib.Move;
  var properties = $module$appsimake_commonshr.commonshr.properties;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Move$Start = $module$appsimake_tictactoelib.tictactoelib.Move.Start;
  var Move$Leave = $module$appsimake_tictactoelib.tictactoelib.Move.Leave;
  var Move$Placement = $module$appsimake_tictactoelib.tictactoelib.Move.Placement;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var focusOrOpenClient = $module$appsimake_fbmessagingsw.fbmessagingsw.focusOrOpenClient;
  var postLibMessage = $module$appsimake_firebaseshr.firebaseshr.postLibMessage_q9pn7$;
  var equals = Kotlin.equals;
  var initMessaging = $module$appsimake_fbmessagingsw.fbmessagingsw.initMessaging_yh0c6s$;
  function main$lambda(it) {
    return Move.Companion.of(it, properties.NoDynamicOps);
  }
  function Coroutine$main$lambda($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
          case 1:
            throw this.exception_0;
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
  function main$lambda_0($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda_0($receiver_0, move_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$move = move_0;
  }
  Coroutine$main$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda_0.prototype.constructor = Coroutine$main$lambda_0;
  Coroutine$main$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (Kotlin.isType(this.local$move, Move$Start))
              tmp$ = 'game started';
            else if (Kotlin.isType(this.local$move, Move$Leave))
              tmp$ = 'opponent left';
            else if (Kotlin.isType(this.local$move, Move$Placement))
              tmp$ = 'opponent moved';
            else
              throw Error_init('unexpected move: ' + this.local$move);
            var msg = tmp$;
            this.local$$receiver.title = 'TicTacToe: ' + msg;
            var tmp$_0 = this.local$$receiver.options;
            var action = tictactoelib.GoOnline;
            var icon;
            icon = undefined;
            var o = {};
            o['action'] = action;
            o['title'] = 'Show';
            o['icon'] = icon;
            var action_0 = tictactoelib.DisableNotifications;
            var icon_0;
            icon_0 = undefined;
            var o_0 = {};
            o_0['action'] = action_0;
            o_0['title'] = 'Mute';
            o_0['icon'] = icon_0;
            return tmp$_0.actions = [o, o_0], Unit;
          case 1:
            throw this.exception_0;
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
  function main$lambda_1($receiver_0, move_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda_0($receiver_0, move_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$main$lambda_1(e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$e = e_0;
  }
  Coroutine$main$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda_1.prototype.constructor = Coroutine$main$lambda_1;
  Coroutine$main$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = focusOrOpenClient(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var cl = this.result_0;
            var tmp$;
            tmp$ = this.local$e.action;
            if (equals(tmp$, '') || equals(tmp$, tictactoelib.GoOnline))
              postLibMessage(cl, tictactoelib.tictactoeLib, tictactoelib.GoOnline);
            else if (equals(tmp$, tictactoelib.DisableNotifications))
              postLibMessage(cl, tictactoelib.tictactoeLib, tictactoelib.DisableNotifications);
            else {
              console.dir(this.local$e);
            }

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
  function main$lambda_2(e_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda_1(e_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main() {
    initMessaging(tictactoelib.tictactoeLib, main$lambda, main$lambda_0, main$lambda_2, main$lambda_1);
  }
  var package$tictactoesw = _.tictactoesw || (_.tictactoesw = {});
  package$tictactoesw.main = main;
  main();
  Kotlin.defineModule('appsimake-tictactoesw', _);
  return _;
}(typeof this['appsimake-tictactoesw'] === 'undefined' ? {} : this['appsimake-tictactoesw'], kotlin, this['appsimake-tictactoelib'], this['appsimake-commonshr'], this['appsimake-fbmessagingsw'], this['appsimake-firebaseshr']);

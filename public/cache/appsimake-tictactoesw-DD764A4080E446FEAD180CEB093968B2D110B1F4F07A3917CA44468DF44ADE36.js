if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-tictactoesw'.");
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
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-tictactoesw'.");
}
this['appsimake-tictactoesw'] = function (_, Kotlin, $module$appsimake_firebaseshr, $module$appsimake_tictactoelib, $module$appsimake_commonshr, $module$appsimake_fbmessagingsw, $module$kotlinx_coroutines_core) {
  'use strict';
  var decodeMessage = $module$appsimake_firebaseshr.firebaseshr.decodeMessage_za3rmp$;
  var Move = $module$appsimake_tictactoelib.tictactoelib.Move;
  var properties = $module$appsimake_commonshr.commonshr.properties;
  var Move$Start = $module$appsimake_tictactoelib.tictactoelib.Move.Start;
  var Move$Leave = $module$appsimake_tictactoelib.tictactoelib.Move.Leave;
  var Move$Placement = $module$appsimake_tictactoelib.tictactoelib.Move.Placement;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var fbmessagingsw = $module$appsimake_fbmessagingsw.fbmessagingsw;
  var tictactoelib = $module$appsimake_tictactoelib.tictactoelib;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var focusOrOpenClient = $module$appsimake_fbmessagingsw.fbmessagingsw.focusOrOpenClient;
  var postLibMessage = $module$appsimake_firebaseshr.firebaseshr.postLibMessage_q9pn7$;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  function main$lambda(msgIn) {
    var tmp$;
    var d = decodeMessage(msgIn);
    var move = Move.Companion.of(d, properties.NoDynamicOps);
    if (Kotlin.isType(move, Move$Start))
      tmp$ = 'game started';
    else if (Kotlin.isType(move, Move$Leave))
      tmp$ = 'opponent left';
    else if (Kotlin.isType(move, Move$Placement))
      tmp$ = 'opponent moved';
    else
      throw Error_init('unexpected move: ' + move);
    var msg = tmp$;
    return 'TicTacToe: ' + msg;
  }
  function main$lambda_0(msg) {
    var tmp$ = fbmessagingsw.sw.registration;
    var tmp$_0 = fbmessagingsw.messageTitle(msg);
    var tmp$_1 = void 0;
    var tmp$_2 = void 0;
    var tmp$_3 = void 0;
    var tmp$_4 = void 0;
    var tmp$_5 = void 0;
    var tmp$_6 = void 0;
    var tmp$_7 = void 0;
    var tmp$_8 = void 0;
    var tmp$_9 = void 0;
    var tmp$_10 = void 0;
    var tmp$_11 = void 0;
    var tmp$_12 = void 0;
    var tmp$_13 = void 0;
    var tmp$_14 = void 0;
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
    var dir = tmp$_1;
    var lang = tmp$_2;
    var body = tmp$_3;
    var tag = 'tictactoe';
    var image = tmp$_4;
    var icon_1 = tmp$_5;
    var badge = tmp$_6;
    var sound = tmp$_7;
    var vibrate = tmp$_8;
    var timestamp = tmp$_9;
    var renotify = true;
    var silent = tmp$_10;
    var noscreen = tmp$_11;
    var requireInteraction = tmp$_12;
    var sticky = tmp$_13;
    var data = tmp$_14;
    var actions = [o, o_0];
    if (dir === void 0) {
      dir = 'auto';
    }
    if (lang === void 0)
      lang = '';
    if (body === void 0)
      body = '';
    if (tag === void 0)
      tag = '';
    if (image === void 0)
      image = undefined;
    if (icon_1 === void 0)
      icon_1 = undefined;
    if (badge === void 0)
      badge = undefined;
    if (sound === void 0)
      sound = undefined;
    if (vibrate === void 0)
      vibrate = undefined;
    if (timestamp === void 0)
      timestamp = undefined;
    if (renotify === void 0)
      renotify = false;
    if (silent === void 0)
      silent = false;
    if (noscreen === void 0)
      noscreen = false;
    if (requireInteraction === void 0)
      requireInteraction = false;
    if (sticky === void 0)
      sticky = false;
    if (data === void 0)
      data = null;
    if (actions === void 0)
      actions = [];
    var o_1 = {};
    o_1['dir'] = dir;
    o_1['lang'] = lang;
    o_1['body'] = body;
    o_1['tag'] = tag;
    o_1['image'] = image;
    o_1['icon'] = icon_1;
    o_1['badge'] = badge;
    o_1['sound'] = sound;
    o_1['vibrate'] = vibrate;
    o_1['timestamp'] = timestamp;
    o_1['renotify'] = renotify;
    o_1['silent'] = silent;
    o_1['noscreen'] = noscreen;
    o_1['requireInteraction'] = requireInteraction;
    o_1['sticky'] = sticky;
    o_1['data'] = data;
    o_1['actions'] = actions;
    return tmp$.showNotification(tmp$_0, o_1);
  }
  function Coroutine$main$lambda$lambda(closure$e_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$e = closure$e_0;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
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
            var $receiver = this.result_0;
            var closure$e = this.local$closure$e;
            var tmp$;
            tmp$ = closure$e.action;
            if (equals(tmp$, '') || equals(tmp$, tictactoelib.GoOnline))
              postLibMessage($receiver, tictactoelib.tictactoeLib, tictactoelib.GoOnline);
            else if (equals(tmp$, tictactoelib.DisableNotifications))
              postLibMessage($receiver, tictactoelib.tictactoeLib, tictactoelib.DisableNotifications);
            else {
              console.dir(closure$e);
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
  function main$lambda$lambda(closure$e_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(closure$e_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main$lambda_1(e) {
    e.waitUntil(asPromise(async(coroutines.GlobalScope, void 0, void 0, main$lambda$lambda(e))));
    return Unit;
  }
  function main() {
    fbmessagingsw.messageTitle = main$lambda;
    fbmessagingsw.messageHandler = main$lambda_0;
    fbmessagingsw.sw.onnotificationclick = main$lambda_1;
  }
  var package$tictactoesw = _.tictactoesw || (_.tictactoesw = {});
  package$tictactoesw.main = main;
  main();
  Kotlin.defineModule('appsimake-tictactoesw', _);
  return _;
}(typeof this['appsimake-tictactoesw'] === 'undefined' ? {} : this['appsimake-tictactoesw'], kotlin, this['appsimake-firebaseshr'], this['appsimake-tictactoelib'], this['appsimake-commonshr'], this['appsimake-fbmessagingsw'], this['kotlinx-coroutines-core']);

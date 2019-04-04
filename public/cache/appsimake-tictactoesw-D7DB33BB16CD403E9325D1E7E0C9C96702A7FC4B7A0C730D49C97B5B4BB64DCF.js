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
this['appsimake-tictactoesw'] = function (_, Kotlin, $module$appsimake_tictactoelib, $module$appsimake_commonshr, $module$appsimake_fbmessagingsw) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var throwCCE = Kotlin.throwCCE;
  var Move = $module$appsimake_tictactoelib.tictactoelib.Move;
  var properties = $module$appsimake_commonshr.commonshr.properties;
  var Start = $module$appsimake_tictactoelib.tictactoelib.Start;
  var Leave = $module$appsimake_tictactoelib.tictactoelib.Leave;
  var Placement = $module$appsimake_tictactoelib.tictactoelib.Placement;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var fbmessagingsw = $module$appsimake_fbmessagingsw.fbmessagingsw;
  function main$lambda(msgIn) {
    var tmp$, tmp$_0;
    var d = JSON.parse(typeof (tmp$ = msgIn.data.json) === 'string' ? tmp$ : throwCCE());
    var move = Move.Companion.of(d, properties.NoDynamicOps);
    if (Kotlin.isType(move, Start))
      tmp$_0 = 'game started';
    else if (Kotlin.isType(move, Leave))
      tmp$_0 = 'opponent left';
    else if (Kotlin.isType(move, Placement))
      tmp$_0 = 'opponent moved';
    else
      throw Error_init('unexpected move: ' + move);
    var msg = tmp$_0;
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
    var $receiver = {};
    var $receiver_0 = {};
    $receiver_0.data = msg;
    var $receiver_1 = {};
    $receiver_1.click_action = fbmessagingsw.sw.registration.scope;
    $receiver_0.notification = $receiver_1;
    $receiver.FCM_MSG = $receiver_0;
    var dir = tmp$_1;
    var lang = tmp$_2;
    var body = tmp$_3;
    var tag = 'tictactoe';
    var image = tmp$_4;
    var icon = tmp$_5;
    var badge = tmp$_6;
    var sound = tmp$_7;
    var vibrate = tmp$_8;
    var timestamp = tmp$_9;
    var renotify = true;
    var silent = tmp$_10;
    var noscreen = tmp$_11;
    var requireInteraction = tmp$_12;
    var sticky = tmp$_13;
    var data = $receiver;
    var actions;
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
    if (icon === void 0)
      icon = undefined;
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
    var o = {};
    o['dir'] = dir;
    o['lang'] = lang;
    o['body'] = body;
    o['tag'] = tag;
    o['image'] = image;
    o['icon'] = icon;
    o['badge'] = badge;
    o['sound'] = sound;
    o['vibrate'] = vibrate;
    o['timestamp'] = timestamp;
    o['renotify'] = renotify;
    o['silent'] = silent;
    o['noscreen'] = noscreen;
    o['requireInteraction'] = requireInteraction;
    o['sticky'] = sticky;
    o['data'] = data;
    o['actions'] = actions;
    return tmp$.showNotification(tmp$_0, o);
  }
  function main() {
    fbmessagingsw.messageTitle = main$lambda;
    fbmessagingsw.messageHandler = main$lambda_0;
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$tictactoesw = _.tictactoesw || (_.tictactoesw = {});
  package$tictactoesw.main = main;
  main();
  Kotlin.defineModule('appsimake-tictactoesw', _);
  return _;
}(typeof this['appsimake-tictactoesw'] === 'undefined' ? {} : this['appsimake-tictactoesw'], kotlin, this['appsimake-tictactoelib'], this['appsimake-commonshr'], this['appsimake-fbmessagingsw']);

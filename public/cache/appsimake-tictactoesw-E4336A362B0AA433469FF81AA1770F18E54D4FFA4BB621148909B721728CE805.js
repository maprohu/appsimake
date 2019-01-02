if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-tictactoelib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-tictactoelib' was not found. Please, check whether 'appsimake-tictactoelib' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-fbmessagingsw'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-fbmessagingsw' was not found. Please, check whether 'appsimake-fbmessagingsw' is loaded prior to 'appsimake-tictactoesw'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-tictactoesw'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-tictactoesw'.");
}
this['appsimake-tictactoesw'] = function (_, Kotlin, $module$appsimake_tictactoelib, $module$appsimake_fbmessagingsw, $module$appsimake_commonshr) {
  'use strict';
  var Move = $module$appsimake_tictactoelib.tictactoelib.Move;
  var throwCCE = Kotlin.throwCCE;
  var Start = $module$appsimake_tictactoelib.tictactoelib.Start;
  var Leave = $module$appsimake_tictactoelib.tictactoelib.Leave;
  var Placement = $module$appsimake_tictactoelib.tictactoelib.Placement;
  var fbmessagingsw = $module$appsimake_fbmessagingsw.fbmessagingsw;
  var Unit = Kotlin.kotlin.Unit;
  var obj = $module$appsimake_commonshr.common.obj_7qq44f$;
  var Any = Object;
  function main$lambda(it) {
    var tmp$, tmp$_0;
    var move = Move.Companion.of(JSON.parse(typeof (tmp$ = it.data.json) === 'string' ? tmp$ : throwCCE()));
    if (Kotlin.isType(move, Start))
      tmp$_0 = 'game started';
    else if (Kotlin.isType(move, Leave))
      tmp$_0 = 'opponent left';
    else if (Kotlin.isType(move, Placement))
      tmp$_0 = 'opponent moved';
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    var msg = tmp$_0;
    return 'TicTacToe: ' + msg;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.click_action = $receiver.fbmessagingsw.sw.registration.scope;
    return Unit;
  }
  function main$lambda$lambda$lambda(closure$msg) {
    return function ($receiver) {
      $receiver.data = closure$msg;
      $receiver.notification = obj(main$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function main$lambda$lambda(closure$msg) {
    return function ($receiver) {
      $receiver.FCM_MSG = obj(main$lambda$lambda$lambda(closure$msg));
      return Unit;
    };
  }
  function main$lambda_0(msg) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = fbmessagingsw.sw.registration;
    tmp$ = fbmessagingsw.messageTitle(msg);
    var tag = 'tictactoe';
    var renotify = true;
    var data = Kotlin.isType(tmp$_0 = obj(main$lambda$lambda(msg)), Any) ? tmp$_0 : null;
    var dir;
    var lang;
    var body;
    var image;
    var icon;
    var badge;
    var sound;
    var vibrate;
    var timestamp;
    var silent;
    var noscreen;
    var requireInteraction;
    var sticky;
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
      image = null;
    if (icon === void 0)
      icon = null;
    if (badge === void 0)
      badge = null;
    if (sound === void 0)
      sound = null;
    if (vibrate === void 0)
      vibrate = null;
    if (timestamp === void 0)
      timestamp = null;
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
    return tmp$_1.showNotification(tmp$, o);
  }
  function main(args) {
    fbmessagingsw.messageTitle = main$lambda;
    fbmessagingsw.messageHandler = main$lambda_0;
  }
  var package$tictactoesw = _.tictactoesw || (_.tictactoesw = {});
  package$tictactoesw.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-tictactoesw', _);
  return _;
}(typeof this['appsimake-tictactoesw'] === 'undefined' ? {} : this['appsimake-tictactoesw'], kotlin, this['appsimake-tictactoelib'], this['appsimake-fbmessagingsw'], this['appsimake-commonshr']);

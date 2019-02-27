if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-testappsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-testappsw'.");
}
if (typeof this['appsimake-fbmessagingsw'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testappsw'. Its dependency 'appsimake-fbmessagingsw' was not found. Please, check whether 'appsimake-fbmessagingsw' is loaded prior to 'appsimake-testappsw'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testappsw'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-testappsw'.");
}
this['appsimake-testappsw'] = function (_, Kotlin, $module$appsimake_fbmessagingsw, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var fbmessagingsw = $module$appsimake_fbmessagingsw.fbmessagingsw;
  var throwCCE = Kotlin.throwCCE;
  function main$lambda(it) {
    console.dir(it);
    return Unit;
  }
  function main$lambda_0(it) {
    console.dir(it);
    return Unit;
  }
  function main$lambda_1(it) {
    var tmp$;
    var data = Kotlin.isType(tmp$ = it.data, Object) ? tmp$ : throwCCE();
    console.dir(it);
    console.dir(fbmessagingsw.sw);
    var tmp$_0 = fbmessagingsw.sw.registration;
    var tmp$_1 = data.message;
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
    var tmp$_15 = void 0;
    var tmp$_16 = void 0;
    var $receiver = {};
    var $receiver_0 = {};
    $receiver_0.data = data;
    var $receiver_1 = {};
    $receiver_1.click_action = fbmessagingsw.sw.registration.scope;
    $receiver_0.notification = $receiver_1;
    $receiver.FCM_MSG = $receiver_0;
    var dir = tmp$_2;
    var lang = tmp$_3;
    var body = tmp$_4;
    var tag = tmp$_5;
    var image = tmp$_6;
    var icon = tmp$_7;
    var badge = tmp$_8;
    var sound = tmp$_9;
    var vibrate = tmp$_10;
    var timestamp = tmp$_11;
    var renotify = tmp$_12;
    var silent = tmp$_13;
    var noscreen = tmp$_14;
    var requireInteraction = tmp$_15;
    var sticky = tmp$_16;
    var data_0 = $receiver;
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
    if (data_0 === void 0)
      data_0 = null;
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
    o['data'] = data_0;
    o['actions'] = actions;
    return tmp$_0.showNotification(tmp$_1, o);
  }
  function main(args) {
    fbmessagingsw.sw.onnotificationclick = main$lambda;
    fbmessagingsw.sw.addEventListener('notificationclick', main$lambda_0);
    fbmessagingsw.messaging.setBackgroundMessageHandler(main$lambda_1);
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$testappsw = _.testappsw || (_.testappsw = {});
  package$testappsw.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-testappsw', _);
  return _;
}(typeof this['appsimake-testappsw'] === 'undefined' ? {} : this['appsimake-testappsw'], kotlin, this['appsimake-fbmessagingsw'], this['appsimake-commonshr']);

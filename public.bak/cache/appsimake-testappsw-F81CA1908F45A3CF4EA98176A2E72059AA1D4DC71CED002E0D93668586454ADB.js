if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-testappsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-testappsw'.");
}
if (typeof this['appsimake-fbmessagingsw'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-testappsw'. Its dependency 'appsimake-fbmessagingsw' was not found. Please, check whether 'appsimake-fbmessagingsw' is loaded prior to 'appsimake-testappsw'.");
}
this['appsimake-testappsw'] = function (_, Kotlin, $module$appsimake_fbmessagingsw) {
  'use strict';
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
    var tmp$_17 = void 0;
    var o = {};
    o['action'] = 'show';
    o['title'] = 'Show';
    o['icon'] = null;
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
    var data_0 = tmp$_17;
    var actions = [o];
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
    if (data_0 === void 0)
      data_0 = null;
    if (actions === void 0)
      actions = [];
    var o_0 = {};
    o_0['dir'] = dir;
    o_0['lang'] = lang;
    o_0['body'] = body;
    o_0['tag'] = tag;
    o_0['image'] = image;
    o_0['icon'] = icon;
    o_0['badge'] = badge;
    o_0['sound'] = sound;
    o_0['vibrate'] = vibrate;
    o_0['timestamp'] = timestamp;
    o_0['renotify'] = renotify;
    o_0['silent'] = silent;
    o_0['noscreen'] = noscreen;
    o_0['requireInteraction'] = requireInteraction;
    o_0['sticky'] = sticky;
    o_0['data'] = data_0;
    o_0['actions'] = actions;
    return tmp$_0.showNotification(tmp$_1, o_0);
  }
  function main(args) {
    fbmessagingsw.sw.onnotificationclick = main$lambda;
    fbmessagingsw.sw.addEventListener('notificationclick', main$lambda_0);
    fbmessagingsw.messaging.setBackgroundMessageHandler(main$lambda_1);
  }
  var package$testappsw = _.testappsw || (_.testappsw = {});
  package$testappsw.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-testappsw', _);
  return _;
}(typeof this['appsimake-testappsw'] === 'undefined' ? {} : this['appsimake-testappsw'], kotlin, this['appsimake-fbmessagingsw']);

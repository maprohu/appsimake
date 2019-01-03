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
  var Unit = Kotlin.kotlin.Unit;
  var fbmessagingsw = $module$appsimake_fbmessagingsw.fbmessagingsw;
  var throwCCE = Kotlin.throwCCE;
  var obj = $module$appsimake_commonshr.common.obj_7qq44f$;
  function main$lambda(it) {
    console.dir(it);
    return Unit;
  }
  function main$lambda_0(it) {
    console.dir(it);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    $receiver.click_action = fbmessagingsw.sw.registration.scope;
    return Unit;
  }
  function main$lambda$lambda$lambda(closure$data) {
    return function ($receiver) {
      $receiver.data = closure$data;
      $receiver.notification = obj(main$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function main$lambda$lambda(closure$data) {
    return function ($receiver) {
      $receiver.FCM_MSG = obj(main$lambda$lambda$lambda(closure$data));
      return Unit;
    };
  }
  function main$lambda_1(it) {
    var tmp$;
    var data = Kotlin.isType(tmp$ = it.data, Object) ? tmp$ : throwCCE();
    console.dir(it);
    console.dir(fbmessagingsw.sw);
    var tmp$_0 = fbmessagingsw.sw.registration;
    var tmp$_1 = data.message;
    var data_0 = obj(main$lambda$lambda(data));
    var dir;
    var lang;
    var body;
    var tag;
    var image;
    var icon;
    var badge;
    var sound;
    var vibrate;
    var timestamp;
    var renotify;
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
  var package$testappsw = _.testappsw || (_.testappsw = {});
  package$testappsw.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('appsimake-testappsw', _);
  return _;
}(typeof this['appsimake-testappsw'] === 'undefined' ? {} : this['appsimake-testappsw'], kotlin, this['appsimake-fbmessagingsw'], this['appsimake-commonshr']);

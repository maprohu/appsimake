if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-fbmessagingsw'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-fbmessagingsw'.");
}
this['appsimake-fbmessagingsw'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var obj = $module$appsimake_commonshr.common.obj_7qq44f$;
  var initializeApp = firebase.initializeApp;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var Any = Object;
  var sw;
  function app$lambda$lambda($receiver) {
    $receiver.messagingSenderId = '850641545175';
    return Unit;
  }
  function app$lambda() {
    return initializeApp(obj(app$lambda$lambda));
  }
  var app;
  function get_app() {
    return app.value;
  }
  function messaging$lambda() {
    return get_app().messaging();
  }
  var messaging;
  function get_messaging() {
    return messaging.value;
  }
  var appName;
  function messageTitle$lambda(it) {
    return appName + ': message arrived';
  }
  var messageTitle;
  function messageHandler$lambda$lambda$lambda$lambda($receiver) {
    $receiver.click_action = sw.registration.scope;
    return Unit;
  }
  function messageHandler$lambda$lambda$lambda(closure$msg) {
    return function ($receiver) {
      $receiver.data = closure$msg;
      $receiver.notification = obj(messageHandler$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function messageHandler$lambda$lambda(closure$msg) {
    return function ($receiver) {
      $receiver.FCM_MSG = obj(messageHandler$lambda$lambda$lambda(closure$msg));
      return Unit;
    };
  }
  function messageHandler$lambda(msg) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = sw.registration;
    tmp$ = messageTitle(msg);
    var data = Kotlin.isType(tmp$_0 = obj(messageHandler$lambda$lambda(msg)), Any) ? tmp$_0 : null;
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
  var messageHandler;
  function main$lambda(it) {
    return messageHandler(it);
  }
  function main(args) {
    console.log('Updating service worker...');
    get_messaging().setBackgroundMessageHandler(main$lambda);
  }
  var package$fbmessagingsw = _.fbmessagingsw || (_.fbmessagingsw = {});
  Object.defineProperty(package$fbmessagingsw, 'sw', {
    get: function () {
      return sw;
    }
  });
  Object.defineProperty(package$fbmessagingsw, 'app', {
    get: get_app
  });
  Object.defineProperty(package$fbmessagingsw, 'messaging', {
    get: get_messaging
  });
  Object.defineProperty(package$fbmessagingsw, 'appName', {
    get: function () {
      return appName;
    }
  });
  Object.defineProperty(package$fbmessagingsw, 'messageTitle', {
    get: function () {
      return messageTitle;
    },
    set: function (value) {
      messageTitle = value;
    }
  });
  Object.defineProperty(package$fbmessagingsw, 'messageHandler', {
    get: function () {
      return messageHandler;
    },
    set: function (value) {
      messageHandler = value;
    }
  });
  package$fbmessagingsw.main_kand9s$ = main;
  sw = self;
  app = lazy(app$lambda);
  messaging = lazy(messaging$lambda);
  var scope = sw.registration.scope;
  appName = substringAfterLast(substringBeforeLast(scope, 47), 47);
  messageTitle = messageTitle$lambda;
  messageHandler = messageHandler$lambda;
  main([]);
  Kotlin.defineModule('appsimake-fbmessagingsw', _);
  return _;
}(typeof this['appsimake-fbmessagingsw'] === 'undefined' ? {} : this['appsimake-fbmessagingsw'], kotlin, this['appsimake-commonshr']);

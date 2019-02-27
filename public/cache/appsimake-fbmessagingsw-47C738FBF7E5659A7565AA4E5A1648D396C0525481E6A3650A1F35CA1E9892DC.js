if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-fbmessagingsw'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-fbmessagingsw'.");
}
this['appsimake-fbmessagingsw'] = function (_, Kotlin, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var initializeApp = firebase.initializeApp;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var sw;
  function app$lambda() {
    var $receiver = {};
    $receiver.messagingSenderId = '850641545175';
    return initializeApp($receiver);
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
  function appName$lambda() {
    var scope = sw.registration.scope;
    return substringAfterLast(substringBeforeLast(scope, 47), 47);
  }
  var appName;
  function get_appName() {
    return appName.value;
  }
  function messageTitle$lambda(it) {
    return get_appName() + ': message arrived';
  }
  var messageTitle;
  function messageHandler$lambda(msg) {
    var tmp$ = sw.registration;
    var tmp$_0 = messageTitle(msg);
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
    var tmp$_15 = void 0;
    var $receiver = {};
    var $receiver_0 = {};
    $receiver_0.data = msg;
    var $receiver_1 = {};
    $receiver_1.click_action = sw.registration.scope;
    $receiver_0.notification = $receiver_1;
    $receiver.FCM_MSG = $receiver_0;
    var dir = tmp$_1;
    var lang = tmp$_2;
    var body = tmp$_3;
    var tag = tmp$_4;
    var image = tmp$_5;
    var icon = tmp$_6;
    var badge = tmp$_7;
    var sound = tmp$_8;
    var vibrate = tmp$_9;
    var timestamp = tmp$_10;
    var renotify = tmp$_11;
    var silent = tmp$_12;
    var noscreen = tmp$_13;
    var requireInteraction = tmp$_14;
    var sticky = tmp$_15;
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
  var messageHandler;
  function main$lambda(it) {
    return messageHandler(it);
  }
  function main() {
    console.log('Updating service worker...');
    get_messaging().setBackgroundMessageHandler(main$lambda);
  }
  var package$fbmessagingsw = _.fbmessagingsw || (_.fbmessagingsw = {});
  Object.defineProperty(package$fbmessagingsw, 'sw', {
    get: function () {
      return sw;
    }
  });
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  Object.defineProperty(package$fbmessagingsw, 'app', {
    get: get_app
  });
  Object.defineProperty(package$fbmessagingsw, 'messaging', {
    get: get_messaging
  });
  Object.defineProperty(package$fbmessagingsw, 'appName', {
    get: get_appName
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
  package$fbmessagingsw.main = main;
  sw = self;
  app = lazy(app$lambda);
  messaging = lazy(messaging$lambda);
  appName = lazy(appName$lambda);
  messageTitle = messageTitle$lambda;
  messageHandler = messageHandler$lambda;
  main();
  Kotlin.defineModule('appsimake-fbmessagingsw', _);
  return _;
}(typeof this['appsimake-fbmessagingsw'] === 'undefined' ? {} : this['appsimake-fbmessagingsw'], kotlin, this['appsimake-commonshr']);

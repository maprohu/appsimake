if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-fbmessagingsw'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-fbmessagingsw'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-fbmessagingsw'.");
}
this['appsimake-fbmessagingsw'] = function (_, Kotlin, $module$appsimake_commonshr, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var initializeApp = firebase.initializeApp;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_8cymmc$;
  var substringAfterLast = Kotlin.kotlin.text.substringAfterLast_8cymmc$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var throwCCE = Kotlin.throwCCE;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var ensureNotNull = Kotlin.ensureNotNull;
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Coroutine$clientList(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$clientList.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$clientList.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$clientList.prototype.constructor = Coroutine$clientList;
  Coroutine$clientList.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            tmp$ = sw.clients;
            var type = 'window';
            if (type === void 0) {
              type = 'window';
            }

            var o = {};
            o['includeUncontrolled'] = true;
            o['type'] = type;
            this.state_0 = 2;
            this.result_0 = await_0(tmp$.matchAll(o), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var arr = Kotlin.isArray(tmp$_0 = this.result_0) ? tmp$_0 : throwCCE();
            var destination = ArrayList_init();
            var tmp$_1;
            for (tmp$_1 = 0; tmp$_1 !== arr.length; ++tmp$_1) {
              var element = arr[tmp$_1];
              if (startsWith(element.url, sw.registration.scope))
                destination.add_11rb$(element);
            }

            return destination;
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
  function clientList(continuation_0, suspended) {
    var instance = new Coroutine$clientList(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$firstClient(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$firstClient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$firstClient.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$firstClient.prototype.constructor = Coroutine$firstClient;
  Coroutine$firstClient.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = clientList(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return firstOrNull(this.result_0);
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
  function firstClient(continuation_0, suspended) {
    var instance = new Coroutine$firstClient(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$focusOrOpenClient(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$_1 = void 0;
  }
  Coroutine$focusOrOpenClient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$focusOrOpenClient.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$focusOrOpenClient.prototype.constructor = Coroutine$focusOrOpenClient;
  Coroutine$focusOrOpenClient.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            this.state_0 = 2;
            this.result_0 = firstClient(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$_0 = (tmp$ = this.result_0) != null ? tmp$.focus() : null) != null) {
              this.state_0 = 3;
              this.result_0 = await_0(tmp$_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$tmp$_1 = this.result_0;
            if (this.local$tmp$_1 == null) {
              this.state_0 = 5;
              this.result_0 = await_0(sw.clients.openWindow(sw.registration.scope), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 5:
            this.local$tmp$_1 = ensureNotNull(this.result_0);
            this.state_0 = 6;
            continue;
          case 6:
            return this.local$tmp$_1;
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
  function focusOrOpenClient(continuation_0, suspended) {
    var instance = new Coroutine$focusOrOpenClient(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
  package$fbmessagingsw.clientList = clientList;
  package$fbmessagingsw.firstClient = firstClient;
  package$fbmessagingsw.focusOrOpenClient = focusOrOpenClient;
  sw = self;
  app = lazy(app$lambda);
  messaging = lazy(messaging$lambda);
  appName = lazy(appName$lambda);
  messageTitle = messageTitle$lambda;
  messageHandler = messageHandler$lambda;
  main();
  Kotlin.defineModule('appsimake-fbmessagingsw', _);
  return _;
}(typeof this['appsimake-fbmessagingsw'] === 'undefined' ? {} : this['appsimake-fbmessagingsw'], kotlin, this['appsimake-commonshr'], this['kotlinx-coroutines-core']);

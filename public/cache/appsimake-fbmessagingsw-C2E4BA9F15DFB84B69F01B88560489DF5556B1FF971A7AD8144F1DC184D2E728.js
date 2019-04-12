if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-fbmessagingsw'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-fbmessagingsw'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-fbmessagingsw'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-fbmessagingsw'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-fbmessagingsw'.");
}
this['appsimake-fbmessagingsw'] = function (_, Kotlin, $module$appsimake_commonshr, $module$kotlinx_coroutines_core, $module$appsimake_firebaseshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var initializeApp = firebase.initializeApp;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var throwCCE = Kotlin.throwCCE;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var decodeMessageData = $module$appsimake_firebaseshr.firebaseshr.decodeMessageData_i92b12$;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var asPromise = $module$kotlinx_coroutines_core.kotlinx.coroutines.asPromise_ge6odz$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
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
            tmp$ = self.clients;
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
              if (startsWith(element.url, self.registration.scope))
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
              this.result_0 = await_0(self.clients.openWindow(self.registration.scope), this);
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
  function Coroutine$initMessaging$lambda($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$initMessaging$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initMessaging$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initMessaging$lambda.prototype.constructor = Coroutine$initMessaging$lambda;
  Coroutine$initMessaging$lambda.prototype.doResume = function () {
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
  function initMessaging$lambda($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$initMessaging$lambda($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$initMessaging$lambda_0(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$initMessaging$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initMessaging$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initMessaging$lambda_0.prototype.constructor = Coroutine$initMessaging$lambda_0;
  Coroutine$initMessaging$lambda_0.prototype.doResume = function () {
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
  function initMessaging$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$initMessaging$lambda_0(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$initMessaging$lambda$lambda(closure$decode_0, closure$msgData_0, closure$foreground_0, closure$lib_0, closure$background_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$decode = closure$decode_0;
    this.local$closure$msgData = closure$msgData_0;
    this.local$closure$foreground = closure$foreground_0;
    this.local$closure$lib = closure$lib_0;
    this.local$closure$background = closure$background_0;
    this.local$$receiver = void 0;
  }
  Coroutine$initMessaging$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initMessaging$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initMessaging$lambda$lambda.prototype.constructor = Coroutine$initMessaging$lambda$lambda;
  Coroutine$initMessaging$lambda$lambda.prototype.doResume = function () {
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
            var clients = this.result_0;
            var firstOrNull$result;
            firstOrNull$break: do {
              var tmp$;
              tmp$ = clients.iterator();
              while (tmp$.hasNext()) {
                var element = tmp$.next();
                if (element.focused) {
                  firstOrNull$result = element;
                  break firstOrNull$break;
                }
              }
              firstOrNull$result = null;
            }
             while (false);
            var focusedClient = firstOrNull$result;
            var data = this.local$closure$decode(decodeMessageData(this.local$closure$msgData).data);
            if (focusedClient != null) {
              this.state_0 = 5;
              this.result_0 = this.local$closure$foreground(focusedClient, data, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$$receiver = new NotificationBuilder(this.local$closure$lib);
              this.state_0 = 3;
              this.result_0 = this.local$closure$background(this.local$$receiver, data, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.show(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return Unit;
          case 5:
            return Unit;
          case 6:
            return;
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
  function initMessaging$lambda$lambda(closure$decode_0, closure$msgData_0, closure$foreground_0, closure$lib_0, closure$background_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$initMessaging$lambda$lambda(closure$decode_0, closure$msgData_0, closure$foreground_0, closure$lib_0, closure$background_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function initMessaging$lambda_1(closure$lib, closure$decode, closure$foreground, closure$background) {
    return function (e) {
      var tmp$;
      Kotlin.isType(tmp$ = e, PushEvent) ? tmp$ : throwCCE();
      var msgData = e.data.json().data;
      if (equals(msgData.appsimakeApp, closure$lib.name)) {
        e.stopImmediatePropagation();
        e.waitUntil(asPromise(async(coroutines.GlobalScope, void 0, void 0, initMessaging$lambda$lambda(closure$decode, msgData, closure$foreground, closure$lib, closure$background))));
      }
      return Unit;
    };
  }
  function Coroutine$initMessaging$lambda$lambda_0(closure$click_0, closure$e_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$click = closure$click_0;
    this.local$closure$e = closure$e_0;
  }
  Coroutine$initMessaging$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initMessaging$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initMessaging$lambda$lambda_0.prototype.constructor = Coroutine$initMessaging$lambda$lambda_0;
  Coroutine$initMessaging$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$click(this.local$closure$e, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$e.notification.close(), Unit;
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
  function initMessaging$lambda$lambda_0(closure$click_0, closure$e_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$initMessaging$lambda$lambda_0(closure$click_0, closure$e_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function initMessaging$lambda_2(closure$click) {
    return function (e) {
      var tmp$;
      Kotlin.isType(tmp$ = e, NotificationEvent) ? tmp$ : throwCCE();
      e.waitUntil(asPromise(async(coroutines.GlobalScope, void 0, void 0, initMessaging$lambda$lambda_0(closure$click, e))));
      return Unit;
    };
  }
  var commonshr = $module$appsimake_commonshr.commonshr;
  function initMessaging(lib, decode, foreground, click, background) {
    if (decode === void 0) {
      decode = commonshr.Identity;
    }
    if (foreground === void 0)
      foreground = initMessaging$lambda;
    if (click === void 0)
      click = initMessaging$lambda_0;
    self.addEventListener('push', initMessaging$lambda_1(lib, decode, foreground, background));
    self.addEventListener('notificationclick', initMessaging$lambda_2(click));
    get_messaging();
  }
  function NotificationBuilder(lib) {
    this.title = lib.name;
    var tag = lib.name;
    var renotify = true;
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
    var data;
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
    this.options = o;
  }
  function Coroutine$show($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$show.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$show.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$show.prototype.constructor = Coroutine$show;
  Coroutine$show.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(self.registration.showNotification(this.$this.title, this.$this.options), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  NotificationBuilder.prototype.show = function (continuation_0, suspended) {
    var instance = new Coroutine$show(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  NotificationBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotificationBuilder',
    interfaces: []
  };
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$fbmessagingsw = _.fbmessagingsw || (_.fbmessagingsw = {});
  Object.defineProperty(package$fbmessagingsw, 'app', {
    get: get_app
  });
  Object.defineProperty(package$fbmessagingsw, 'messaging', {
    get: get_messaging
  });
  package$fbmessagingsw.clientList = clientList;
  package$fbmessagingsw.firstClient = firstClient;
  package$fbmessagingsw.focusOrOpenClient = focusOrOpenClient;
  package$fbmessagingsw.initMessaging_yh0c6s$ = initMessaging;
  package$fbmessagingsw.NotificationBuilder = NotificationBuilder;
  app = lazy(app$lambda);
  messaging = lazy(messaging$lambda);
  Kotlin.defineModule('appsimake-fbmessagingsw', _);
  return _;
}(typeof this['appsimake-fbmessagingsw'] === 'undefined' ? {} : this['appsimake-fbmessagingsw'], kotlin, this['appsimake-commonshr'], this['kotlinx-coroutines-core'], this['appsimake-firebaseshr']);

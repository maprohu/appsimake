if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-commonfb'.");
}
this['appsimake-commonfb'] = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$appsimake_firebase, $module$appsimake_commonui, $module$appsimake_common, $module$appsimake_commonshr, $module$appsimake_bootstrap, $module$appsimake_domx) {
  'use strict';
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var AppOptions = $module$appsimake_firebase.firebase.AppOptions;
  var Unit = Kotlin.kotlin.Unit;
  var initializeApp = firebase.initializeApp;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var firestore = $module$appsimake_firebase.firebase.app.firestore_c7ogsi$;
  var withDefaultSettings = $module$appsimake_firebase.firebase.firestore.withDefaultSettings_gwf93m$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var AppCtx = $module$appsimake_commonui.commonui.AppCtx;
  var Wrap = $module$appsimake_common.common.Wrap;
  var getCallableRef = Kotlin.getCallableRef;
  var obj = $module$appsimake_commonshr.common.obj_287e2$;
  var setOptionsMerge = $module$appsimake_firebase.firebase.firestore.setOptionsMerge;
  var FieldValue$Companion = firebase.firestore.FieldValue;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var coroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.coroutineScope_awg8ri$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Killables = $module$appsimake_common.killable.Killables;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var rollback = $module$appsimake_firebase.firebase.firestore.rollback;
  var txTry = $module$appsimake_firebase.firebase.firestore.txTry_81x6o2$;
  var onRollback = $module$appsimake_firebase.firebase.firestore.onRollback_61ytec$;
  var Var = $module$appsimake_common.rx.Var;
  var btn = $module$appsimake_bootstrap.bootstrap.btn_ejp6nk$;
  var btnSecondary = $module$appsimake_bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var a = $module$appsimake_domx.domx.a_6t02fy$;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_g4155o$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_ejp6nk$;
  var div = $module$appsimake_domx.domx.div_gnmiz0$;
  var StateMachine = $module$appsimake_common.common.StateMachine;
  var Login = $module$appsimake_firebase.firebaseui.Login;
  var State = $module$appsimake_common.common.State;
  Private.prototype = Object.create(Wrap.prototype);
  Private.prototype.constructor = Private;
  LoginProcessState.prototype = Object.create(State.prototype);
  LoginProcessState.prototype.constructor = LoginProcessState;
  LoggedUnknown.prototype = Object.create(LoginProcessState.prototype);
  LoggedUnknown.prototype.constructor = LoggedUnknown;
  LoggedOut.prototype = Object.create(LoginProcessState.prototype);
  LoggedOut.prototype.constructor = LoggedOut;
  LoggedIn.prototype = Object.create(LoginProcessState.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  function FbCtx(appCtx, lib) {
    this.appCtx = appCtx;
    this.name = lib.name;
    this.app_u25537$_0 = lazy(FbCtx$app$lambda);
    this.db_qixv9q$_0 = lazy(FbCtx$db$lambda(this));
    this.auth_8g1z48$_0 = lazy(FbCtx$auth$lambda(this));
    this.messaging_c1rbb4$_0 = lazy(FbCtx$messaging$lambda(this));
    this.baseRef_trde4e$_0 = lazy(FbCtx$baseRef$lambda(this, lib));
    this.singletonsRef_jnb6ex$_0 = lazy(FbCtx$singletonsRef$lambda(this, lib));
  }
  Object.defineProperty(FbCtx.prototype, 'app', {
    get: function () {
      return this.app_u25537$_0.value;
    }
  });
  Object.defineProperty(FbCtx.prototype, 'db', {
    get: function () {
      return this.db_qixv9q$_0.value;
    }
  });
  Object.defineProperty(FbCtx.prototype, 'auth', {
    get: function () {
      return this.auth_8g1z48$_0.value;
    }
  });
  Object.defineProperty(FbCtx.prototype, 'messaging', {
    get: function () {
      return this.messaging_c1rbb4$_0.value;
    }
  });
  Object.defineProperty(FbCtx.prototype, 'baseRef', {
    get: function () {
      return this.baseRef_trde4e$_0.value;
    }
  });
  Object.defineProperty(FbCtx.prototype, 'singletonsRef', {
    get: function () {
      return this.singletonsRef_jnb6ex$_0.value;
    }
  });
  FbCtx.prototype.signOut = function () {
    this.appCtx.hourglass();
    this.auth.signOut();
  };
  FbCtx.prototype.setupMessaging_qfvnr1$ = function (setupMessagingGranted_0, continuation_0, suspended) {
    var instance = new Coroutine$setupMessaging_qfvnr1$(this, setupMessagingGranted_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$setupMessaging_qfvnr1$($this, setupMessagingGranted_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$setupMessagingGranted = setupMessagingGranted_0;
  }
  Coroutine$setupMessaging_qfvnr1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setupMessaging_qfvnr1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setupMessaging_qfvnr1$.prototype.constructor = Coroutine$setupMessaging_qfvnr1$;
  Coroutine$setupMessaging_qfvnr1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = await_0(this.result_0.requestPermission(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.$this.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var tokenPromise = ensureNotNull(this.result_0.getToken());
            this.state_0 = 5;
            this.result_0 = this.local$setupMessagingGranted(tokenPromise, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
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
  FbCtx.prototype.trySetupMessaging_qfvnr1$ = function (setupMessagingGranted_0, continuation_0, suspended) {
    var instance = new Coroutine$trySetupMessaging_qfvnr1$(this, setupMessagingGranted_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$trySetupMessaging_qfvnr1$($this, setupMessagingGranted_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$setupMessagingGranted = setupMessagingGranted_0;
  }
  Coroutine$trySetupMessaging_qfvnr1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$trySetupMessaging_qfvnr1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$trySetupMessaging_qfvnr1$.prototype.constructor = Coroutine$trySetupMessaging_qfvnr1$;
  Coroutine$trySetupMessaging_qfvnr1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tokenPromise = this.result_0.getToken();
            if (tokenPromise == null) {
              this.local$tmp$ = false;
              this.state_0 = 4;
              continue;
            }
             else {
              this.state_0 = 3;
              this.result_0 = this.local$setupMessagingGranted(tokenPromise, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            this.local$tmp$ = true;
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$tmp$;
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
  FbCtx.prototype.call_uni1ku$ = function (function_0, input) {
    return this.app.functions().httpsCallable(function_0.qualifiedName)(input);
  };
  function FbCtx$app$lambda() {
    var $receiver = AppOptions();
    $receiver.apiKey = 'AIzaSyDuHunYFDxjJVSvhk_3POXORpN8M49ubgU';
    $receiver.authDomain = 'appsimake.firebaseapp.com';
    $receiver.databaseURL = 'https://appsimake.firebaseio.com';
    $receiver.projectId = 'appsimake';
    $receiver.storageBucket = '';
    $receiver.messagingSenderId = '850641545175';
    return initializeApp($receiver);
  }
  function FbCtx$db$lambda(this$FbCtx) {
    return function () {
      return withDefaultSettings(firestore(this$FbCtx.app));
    };
  }
  function FbCtx$auth$lambda(this$FbCtx) {
    return function () {
      return this$FbCtx.app.auth();
    };
  }
  function FbCtx$messaging$lambda$lambda(this$FbCtx_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$FbCtx$messaging$lambda$lambda(this$FbCtx_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FbCtx$messaging$lambda$lambda(this$FbCtx_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FbCtx = this$FbCtx_0;
  }
  Coroutine$FbCtx$messaging$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FbCtx$messaging$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FbCtx$messaging$lambda$lambda.prototype.constructor = Coroutine$FbCtx$messaging$lambda$lambda;
  Coroutine$FbCtx$messaging$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$FbCtx.appCtx.serviceWorker, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var registration = this.result_0;
            var msg = this.local$this$FbCtx.app.messaging();
            msg.useServiceWorker(registration);
            msg.usePublicVapidKey('BOgqeELuJyp5wv-HiXzqLsxA2tqGboVZRZdrHTDnrN_DzCCJYuMA_pVBQYB0afOFvtTXSUdHi20NuNGmmtP0fvU');
            return msg;
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
  function FbCtx$messaging$lambda(this$FbCtx) {
    return function () {
      return async(coroutines.GlobalScope, void 0, void 0, FbCtx$messaging$lambda$lambda(this$FbCtx));
    };
  }
  function FbCtx$baseRef$lambda(this$FbCtx, closure$lib) {
    return function () {
      return this$FbCtx.db.doc(closure$lib.firestoreBasePath);
    };
  }
  function FbCtx$singletonsRef$lambda(this$FbCtx, closure$lib) {
    return function () {
      return this$FbCtx.db.collection(closure$lib.firestoreSingletonsPath);
    };
  }
  FbCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FbCtx',
    interfaces: []
  };
  function FbCtx_init(lib, title, $this) {
    $this = $this || Object.create(FbCtx.prototype);
    FbCtx.call($this, new AppCtx(title), lib);
    return $this;
  }
  function Private(o) {
    Wrap.call(this, o);
    this.fcmTokens_5cnsn2$_0 = this.dyn_mh5how$([]).provideDelegate_t0xcdd$(this, Private$fcmTokens_metadata);
  }
  var Private$fcmTokens_metadata = new PropertyMetadata('fcmTokens');
  Object.defineProperty(Private.prototype, 'fcmTokens', {
    get: function () {
      return this.fcmTokens_5cnsn2$_0.getValue_lrcp0p$(this, Private$fcmTokens_metadata);
    },
    set: function (fcmTokens) {
      this.fcmTokens_5cnsn2$_0.setValue_9rddgb$(this, Private$fcmTokens_metadata, fcmTokens);
    }
  });
  Private.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Private',
    interfaces: [Wrap]
  };
  function LoggedInCtx(fbCtx, user) {
    this.fbCtx = fbCtx;
    this.user = user;
    this.privateRef = this.fbCtx.baseRef.collection('private').doc(this.user.uid);
    this.killables = new Killables();
    this.privateExisting_keli9$_0 = lazy(LoggedInCtx$privateExisting$lambda(this));
    this.messaging_88hbez$_0 = lazy(LoggedInCtx$messaging$lambda(this));
    this.currentFcmToken0_0 = new Var(null);
  }
  Object.defineProperty(LoggedInCtx.prototype, 'privateExisting', {
    get: function () {
      return this.privateExisting_keli9$_0.value;
    }
  });
  Object.defineProperty(LoggedInCtx.prototype, 'messaging', {
    get: function () {
      return this.messaging_88hbez$_0.value;
    }
  });
  LoggedInCtx.prototype.setupMessaging = function (continuation_0, suspended) {
    var instance = new Coroutine$setupMessaging(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$setupMessaging($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$setupMessaging.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setupMessaging.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setupMessaging.prototype.constructor = Coroutine$setupMessaging;
  Coroutine$setupMessaging.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.fbCtx.setupMessaging_qfvnr1$(getCallableRef('setupMessagingGranted', function ($receiver, tokenPromise) {
              $receiver.setupMessagingGranted_0(tokenPromise, $this$);
              return $this$.$$coroutineResult$$;
            }.bind(null, this.$this)), this);
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
  LoggedInCtx.prototype.trySetupMessaging = function (continuation_0, suspended) {
    var instance = new Coroutine$trySetupMessaging(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$trySetupMessaging($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$trySetupMessaging.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$trySetupMessaging.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$trySetupMessaging.prototype.constructor = Coroutine$trySetupMessaging;
  Coroutine$trySetupMessaging.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.fbCtx.trySetupMessaging_qfvnr1$(getCallableRef('setupMessagingGranted', function ($receiver, tokenPromise) {
              $receiver.setupMessagingGranted_0(tokenPromise, $this$);
              return $this$.$$coroutineResult$$;
            }.bind(null, this.$this)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
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
  Object.defineProperty(LoggedInCtx.prototype, 'currentFcmToken', {
    get: function () {
      return this.currentFcmToken0_0;
    }
  });
  function LoggedInCtx$setupMessagingGranted$updateToken(this$LoggedInCtx) {
    return function (t) {
      var tmp$ = this$LoggedInCtx.privateRef;
      var $receiver = new Private(obj());
      $receiver.fcmTokens = t;
      return tmp$.set($receiver.wrapped, setOptionsMerge());
    };
  }
  function LoggedInCtx$setupMessagingGranted$addToken(closure$updateToken) {
    return function (t) {
      return closure$updateToken(FieldValue$Companion.arrayUnion(t));
    };
  }
  function LoggedInCtx$setupMessagingGranted$removeToken(closure$updateToken) {
    return function (t) {
      return closure$updateToken(FieldValue$Companion.arrayRemove(t));
    };
  }
  function LoggedInCtx$setupMessagingGranted$lambda$lambda(this$LoggedInCtx_0, closure$removeToken_0, closure$t_0, closure$addToken_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda(this$LoggedInCtx_0, closure$removeToken_0, closure$t_0, closure$addToken_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda(this$LoggedInCtx_0, closure$removeToken_0, closure$t_0, closure$addToken_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$LoggedInCtx = this$LoggedInCtx_0;
    this.local$closure$removeToken = closure$removeToken_0;
    this.local$closure$t = closure$t_0;
    this.local$closure$addToken = closure$addToken_0;
  }
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda.prototype.constructor = Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda;
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$LoggedInCtx.currentFcmToken0_0.now) != null) {
              this.local$closure$removeToken(tmp$);
            }

            var tmp$_0;
            if (this.local$closure$t != null) {
              var $receiver = this.local$closure$t;
              tmp$_0 = this.local$closure$addToken($receiver);
            }
             else
              tmp$_0 = null;
            return tmp$_0;
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
  function LoggedInCtx$setupMessagingGranted$lambda(closure$channel_0, this$LoggedInCtx_0, closure$removeToken_0, closure$addToken_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$LoggedInCtx$setupMessagingGranted$lambda(closure$channel_0, this$LoggedInCtx_0, closure$removeToken_0, closure$addToken_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoggedInCtx$setupMessagingGranted$lambda(closure$channel_0, this$LoggedInCtx_0, closure$removeToken_0, closure$addToken_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$this$LoggedInCtx = this$LoggedInCtx_0;
    this.local$closure$removeToken = closure$removeToken_0;
    this.local$closure$addToken = closure$addToken_0;
    this.local$tmp$ = void 0;
    this.local$t = void 0;
  }
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda.prototype.constructor = Coroutine$LoggedInCtx$setupMessagingGranted$lambda;
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$channel.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$t = this.result_0;
            this.state_0 = 6;
            this.result_0 = coroutineScope(LoggedInCtx$setupMessagingGranted$lambda$lambda(this.local$this$LoggedInCtx, this.local$closure$removeToken, this.local$t, this.local$closure$addToken), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$this$LoggedInCtx.currentFcmToken0_0.now = this.local$t;
            this.state_0 = 2;
            continue;
          case 7:
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
  function LoggedInCtx$setupMessagingGranted$lambda$lambda_0(this$LoggedInCtx_0, closure$channel_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda_0(this$LoggedInCtx_0, closure$channel_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda_0(this$LoggedInCtx_0, closure$channel_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$LoggedInCtx = this$LoggedInCtx_0;
    this.local$closure$channel = closure$channel_0;
  }
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda_0.prototype.constructor = Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda_0;
  Coroutine$LoggedInCtx$setupMessagingGranted$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedInCtx.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = await_0(ensureNotNull(this.result_0.getToken()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var t = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$closure$channel.send_11rb$(t, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            return this.result_0;
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
  function LoggedInCtx$setupMessagingGranted$lambda_0(this$LoggedInCtx, closure$channel) {
    return function () {
      launch(coroutines.GlobalScope, void 0, void 0, LoggedInCtx$setupMessagingGranted$lambda$lambda_0(this$LoggedInCtx, closure$channel));
      return Unit;
    };
  }
  LoggedInCtx.prototype.setupMessagingGranted_0 = function (tokenPromise_0, continuation_0, suspended) {
    var instance = new Coroutine$setupMessagingGranted_0(this, tokenPromise_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$setupMessagingGranted_0($this, tokenPromise_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$token = void 0;
    this.local$addToken = void 0;
    this.local$removeToken = void 0;
    this.local$channel = void 0;
    this.local$tmp$ = void 0;
    this.local$tokenPromise = tokenPromise_0;
  }
  Coroutine$setupMessagingGranted_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setupMessagingGranted_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setupMessagingGranted_0.prototype.constructor = Coroutine$setupMessagingGranted_0;
  Coroutine$setupMessagingGranted_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$tokenPromise, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$token = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.privateExisting.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var updateToken = LoggedInCtx$setupMessagingGranted$updateToken(this.$this);
            this.local$addToken = LoggedInCtx$setupMessagingGranted$addToken(updateToken);
            this.local$removeToken = LoggedInCtx$setupMessagingGranted$removeToken(updateToken);
            this.state_0 = 4;
            this.result_0 = await_0(this.local$addToken(this.local$token), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.$this.currentFcmToken0_0.now = this.local$token;
            this.local$channel = Channel();
            launch(coroutines.GlobalScope, void 0, void 0, LoggedInCtx$setupMessagingGranted$lambda(this.local$channel, this.$this, this.local$removeToken, this.local$addToken));
            this.local$tmp$ = this.$this.killables;
            this.state_0 = 5;
            this.result_0 = this.$this.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$.plusAssign_o14v8n$(this.result_0.onTokenRefresh(LoggedInCtx$setupMessagingGranted$lambda_0(this.$this, this.local$channel)));
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
  function LoggedInCtx$privateExisting$lambda$lambda$lambda(this$LoggedInCtx_0) {
    return function (tx_0, continuation_0, suspended) {
      var instance = new Coroutine$LoggedInCtx$privateExisting$lambda$lambda$lambda(this$LoggedInCtx_0, tx_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoggedInCtx$privateExisting$lambda$lambda$lambda(this$LoggedInCtx_0, tx_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedInCtx = this$LoggedInCtx_0;
    this.local$tx = tx_0;
  }
  Coroutine$LoggedInCtx$privateExisting$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedInCtx$privateExisting$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedInCtx$privateExisting$lambda$lambda$lambda.prototype.constructor = Coroutine$LoggedInCtx$privateExisting$lambda$lambda$lambda;
  Coroutine$LoggedInCtx$privateExisting$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$tx.get(this.local$this$LoggedInCtx.privateRef), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var pr = this.result_0;
            if (!pr.exists || ((tmp$ = (new Private(pr.data())).fcmTokens) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE()) == null) {
              var tmp$_0 = this.local$this$LoggedInCtx.privateRef;
              var $receiver = new Private(obj());
              $receiver.fcmTokens = [];
              return this.local$tx.set(tmp$_0, $receiver.wrapped, setOptionsMerge());
            }
             else {
              throw rollback();
            }

          case 3:
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
  function LoggedInCtx$privateExisting$lambda$lambda$lambda_0() {
    return Unit;
  }
  function LoggedInCtx$privateExisting$lambda$lambda(this$LoggedInCtx_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$LoggedInCtx$privateExisting$lambda$lambda(this$LoggedInCtx_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoggedInCtx$privateExisting$lambda$lambda(this$LoggedInCtx_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$LoggedInCtx = this$LoggedInCtx_0;
  }
  Coroutine$LoggedInCtx$privateExisting$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedInCtx$privateExisting$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedInCtx$privateExisting$lambda$lambda.prototype.constructor = Coroutine$LoggedInCtx$privateExisting$lambda$lambda;
  Coroutine$LoggedInCtx$privateExisting$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = txTry(this.local$this$LoggedInCtx.fbCtx.db, LoggedInCtx$privateExisting$lambda$lambda$lambda(this.local$this$LoggedInCtx), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return onRollback(this.result_0, LoggedInCtx$privateExisting$lambda$lambda$lambda_0);
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
  function LoggedInCtx$privateExisting$lambda(this$LoggedInCtx) {
    return function () {
      return async(coroutines.GlobalScope, void 0, void 0, LoggedInCtx$privateExisting$lambda$lambda(this$LoggedInCtx));
    };
  }
  function LoggedInCtx$messaging$lambda(this$LoggedInCtx) {
    return function () {
      this$LoggedInCtx.privateExisting;
      return this$LoggedInCtx.fbCtx.messaging;
    };
  }
  LoggedInCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedInCtx',
    interfaces: []
  };
  function LoggingInCtx(fbCtx) {
    this.fbCtx = fbCtx;
    this.appCtx = this.fbCtx.appCtx;
    this.login_ay5xxn$_aguoch$_0 = lazy(LoggingInCtx$login$lambda(this));
  }
  Object.defineProperty(LoggingInCtx.prototype, 'login_ay5xxn$_0', {
    get: function () {
      return this.login_ay5xxn$_aguoch$_0.value;
    }
  });
  LoggingInCtx.prototype.loggedOut = function () {
    this.login_ay5xxn$_0.loginUi_2rdptt$(this.loginDiv());
  };
  function LoggingInCtx$loginDiv$lambda$lambda$lambda$lambda($receiver) {
    btn($receiver);
    btnSecondary($receiver);
    $receiver.href = 'index.html';
    $receiver.innerText = 'Exit';
    return Unit;
  }
  function LoggingInCtx$loginDiv$lambda$lambda$lambda($receiver) {
    a($receiver, LoggingInCtx$loginDiv$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function LoggingInCtx$loginDiv$lambda$lambda$lambda_0(this$LoggingInCtx) {
    return function ($receiver) {
      $receiver.innerText = this$LoggingInCtx.appCtx.title;
      return Unit;
    };
  }
  function LoggingInCtx$loginDiv$lambda$lambda(this$LoggingInCtx) {
    return function ($receiver) {
      $receiver.left_iw61es$(LoggingInCtx$loginDiv$lambda$lambda$lambda);
      $receiver.middleTitle_ocyzvr$(LoggingInCtx$loginDiv$lambda$lambda$lambda_0(this$LoggingInCtx));
      return Unit;
    };
  }
  function LoggingInCtx$loginDiv$lambda(this$LoggingInCtx) {
    return function ($receiver) {
      $receiver.top_vesf63$(LoggingInCtx$loginDiv$lambda$lambda(this$LoggingInCtx));
      return Unit;
    };
  }
  LoggingInCtx.prototype.loginDiv = function () {
    var $receiver = screenLayout(this.appCtx.root.newRoot_iw61es$(), LoggingInCtx$loginDiv$lambda(this)).main;
    flexCenter($receiver);
    return div($receiver);
  };
  function LoggingInCtx$start$lambda(closure$stateMachine) {
    return function (user) {
      closure$stateMachine.update_11rb$(user);
      return Unit;
    };
  }
  LoggingInCtx.prototype.start = function () {
    var stateMachine = new StateMachine(new LoggedUnknown(this));
    this.fbCtx.auth.onAuthStateChanged(LoggingInCtx$start$lambda(stateMachine));
  };
  function LoggingInCtx$login$lambda(this$LoggingInCtx) {
    return function () {
      return new Login(this$LoggingInCtx.fbCtx.app);
    };
  }
  LoggingInCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggingInCtx',
    interfaces: []
  };
  function LoggingInCtx_init(lib, title, $this) {
    $this = $this || Object.create(LoggingInCtx.prototype);
    LoggingInCtx.call($this, FbCtx_init(lib, title));
    return $this;
  }
  function LoginProcessState(control) {
    State.call(this);
    this.control = control;
  }
  LoginProcessState.prototype.process_11rb$ = function (input) {
    var tmp$;
    if (input == null) {
      tmp$ = new LoggedOut(this.control);
    }
     else {
      tmp$ = new LoggedIn(this.control, input);
    }
    return tmp$;
  };
  LoginProcessState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginProcessState',
    interfaces: [State]
  };
  function LoggedUnknown(control) {
    LoginProcessState.call(this, control);
  }
  function LoggedUnknown$enter$lambda() {
    return Unit;
  }
  LoggedUnknown.prototype.enter = function () {
    this.control.appCtx.hourglass();
    return LoggedUnknown$enter$lambda;
  };
  LoggedUnknown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedUnknown',
    interfaces: [LoginProcessState]
  };
  function LoggedOut(control) {
    LoginProcessState.call(this, control);
  }
  function LoggedOut$enter$lambda() {
    return Unit;
  }
  LoggedOut.prototype.enter = function () {
    this.control.loggedOut();
    return LoggedOut$enter$lambda;
  };
  LoggedOut.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedOut',
    interfaces: [LoginProcessState]
  };
  function LoggedIn(control, user) {
    LoginProcessState.call(this, control);
    this.user_0 = user;
  }
  LoggedIn.prototype.enter = function () {
    return this.control.loggedIn_v1eir6$(this.user_0);
  };
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [LoginProcessState]
  };
  var package$commonfb = _.commonfb || (_.commonfb = {});
  package$commonfb.FbCtx_init_nruni5$ = FbCtx_init;
  package$commonfb.FbCtx = FbCtx;
  package$commonfb.Private = Private;
  package$commonfb.LoggedInCtx = LoggedInCtx;
  package$commonfb.LoggingInCtx_init_nruni5$ = LoggingInCtx_init;
  package$commonfb.LoggingInCtx = LoggingInCtx;
  package$commonfb.LoginProcessState = LoginProcessState;
  package$commonfb.LoggedUnknown = LoggedUnknown;
  package$commonfb.LoggedOut = LoggedOut;
  package$commonfb.LoggedIn = LoggedIn;
  Kotlin.defineModule('appsimake-commonfb', _);
  return _;
}(typeof this['appsimake-commonfb'] === 'undefined' ? {} : this['appsimake-commonfb'], kotlin, this['kotlinx-coroutines-core'], this['appsimake-firebase'], this['appsimake-commonui'], this['appsimake-common'], this['appsimake-commonshr'], this['appsimake-bootstrap'], this['appsimake-domx']);

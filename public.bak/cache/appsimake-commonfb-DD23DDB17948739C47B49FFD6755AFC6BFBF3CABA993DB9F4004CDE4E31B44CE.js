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
  var Var = $module$appsimake_common.rx.Var;
  var Killables = $module$appsimake_common.killable.Killables;
  var equals = Kotlin.equals;
  var KillableSeq = $module$appsimake_common.killable.KillableSeq;
  var obj = $module$appsimake_commonshr.common.obj_287e2$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var btn = $module$appsimake_bootstrap.bootstrap.btn_ejp6nk$;
  var btnSecondary = $module$appsimake_bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var a = $module$appsimake_domx.domx.a_6t02fy$;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_g4155o$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_ejp6nk$;
  var div = $module$appsimake_domx.domx.div_gnmiz0$;
  var StateMachine = $module$appsimake_common.common.StateMachine;
  var Login = $module$appsimake_firebase.firebaseui.Login;
  var State = $module$appsimake_common.common.State;
  MessagingState$NotSupported.prototype = Object.create(MessagingState.prototype);
  MessagingState$NotSupported.prototype.constructor = MessagingState$NotSupported;
  MessagingState$NotGranted.prototype = Object.create(MessagingState.prototype);
  MessagingState$NotGranted.prototype.constructor = MessagingState$NotGranted;
  MessagingState$Denied.prototype = Object.create(MessagingState.prototype);
  MessagingState$Denied.prototype.constructor = MessagingState$Denied;
  MessagingState$HasToken.prototype = Object.create(MessagingState.prototype);
  MessagingState$HasToken.prototype.constructor = MessagingState$HasToken;
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
    this.lib = lib;
    this.name = this.lib.name;
    this.app_u25537$_0 = lazy(FbCtx$app$lambda);
    this.db_qixv9q$_0 = lazy(FbCtx$db$lambda(this));
    this.auth_8g1z48$_0 = lazy(FbCtx$auth$lambda(this));
    this.messaging_c1rbb4$_0 = lazy(FbCtx$messaging$lambda(this));
    this.baseRef_trde4e$_0 = lazy(FbCtx$baseRef$lambda(this));
    this.singletonsRef_jnb6ex$_0 = lazy(FbCtx$singletonsRef$lambda(this));
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
  function FbCtx$baseRef$lambda(this$FbCtx) {
    return function () {
      return this$FbCtx.db.doc(this$FbCtx.lib.firestoreBasePath);
    };
  }
  function FbCtx$singletonsRef$lambda(this$FbCtx) {
    return function () {
      return this$FbCtx.db.collection(this$FbCtx.lib.firestoreSingletonsPath);
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
  function FcmControl(loggedInCtx) {
    this.loggedInCtx = loggedInCtx;
    this.fbCtx = this.loggedInCtx.fbCtx;
    this.isSupported = this.fbCtx.appCtx.isFcmSupported;
    this.enabled0_0 = new Var(null);
    this.toggle0_0 = FcmControl$toggle0$lambda;
    this.killables = new Killables();
    if (!this.isSupported) {
      this.enabled0_0.now = false;
      this.toggle0_0 = FcmControl_init$lambda;
    }
     else {
      if (equals(Notification.permission, 'denied')) {
        this.permissionDenied_0();
      }
       else {
        launch(coroutines.GlobalScope, void 0, void 0, FcmControl_init$lambda_0(this));
      }
    }
  }
  Object.defineProperty(FcmControl.prototype, 'enabled', {
    get: function () {
      return this.enabled0_0;
    }
  });
  function FcmControl$noReentry$lambda(this$FcmControl, closure$fn) {
    return function (alert) {
      if (this$FcmControl.enabled0_0.now != null) {
        closure$fn(alert);
        this$FcmControl.enabled0_0.now = null;
      }
      return Unit;
    };
  }
  FcmControl.prototype.noReentry_eznvfo$ = function (fn) {
    return FcmControl$noReentry$lambda(this, fn);
  };
  FcmControl.prototype.toggle_ep0k5p$ = function (alert) {
    this.toggle0_0(alert);
  };
  function FcmControl$permissionDenied$lambda(alert) {
    alert('Please allow notifications in the browser settings.');
    return Unit;
  }
  FcmControl.prototype.permissionDenied_0 = function () {
    this.enabled0_0.now = false;
    this.toggle0_0 = FcmControl$permissionDenied$lambda;
  };
  function FcmControl$toggle0$lambda(it) {
    return Unit;
  }
  function FcmControl_init$lambda(alert) {
    alert('Browser does not support notifications.');
    return Unit;
  }
  function FcmControl_init$lambda$ObjectLiteral(this$FcmControl, closure$messaging, closure$killableSeq) {
    this.this$FcmControl = this$FcmControl;
    this.closure$messaging = closure$messaging;
    this.closure$killableSeq = closure$killableSeq;
  }
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda(this$FcmControl) {
    return function (it) {
      this$FcmControl.enabled0_0.now = it.exists;
      return Unit;
    };
  }
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda(closure$en_0, this$_0, closure$ref_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda(closure$en_0, this$_0, closure$ref_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda(closure$en_0, this$_0, closure$ref_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$en = closure$en_0;
    this.local$this$ = this$_0;
    this.local$closure$ref = closure$ref_0;
  }
  Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda.prototype.constructor = Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda;
  Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.request_6taknv$(this.local$closure$en, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var newRef = this.result_0;
            if (!equals(this.local$closure$ref.id, newRef.id)) {
              return this.local$closure$ref.delete(), Unit;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
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
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda_0(this$FcmControl, this$, closure$ref) {
    return function () {
      var en = this$FcmControl.enabled.now === true;
      launch(coroutines.GlobalScope, void 0, void 0, FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda(en, this$, closure$ref));
      return Unit;
    };
  }
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda_1(closure$stopPolling, closure$stopTokenListener) {
    return function () {
      closure$stopPolling();
      closure$stopTokenListener();
      return Unit;
    };
  }
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda_2(this$FcmControl, closure$ref) {
    return function (it) {
      if (this$FcmControl.enabled0_0.now === true) {
        closure$ref.delete();
      }
       else {
        closure$ref.set(obj());
      }
      return Unit;
    };
  }
  FcmControl_init$lambda$ObjectLiteral.prototype.requested_ivxn3r$ = function (token_0, upload_0, continuation_0, suspended) {
    var instance = new Coroutine$requested_ivxn3r$(this, token_0, upload_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$requested_ivxn3r$($this, token_0, upload_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$ref = void 0;
    this.local$token = token_0;
    this.local$upload = upload_0;
  }
  Coroutine$requested_ivxn3r$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$requested_ivxn3r$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requested_ivxn3r$.prototype.constructor = Coroutine$requested_ivxn3r$;
  Coroutine$requested_ivxn3r$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$ref = this.$this.this$FcmControl.loggedInCtx.fcmTokensRef.doc(this.local$token);
            if (this.local$upload) {
              this.state_0 = 2;
              this.result_0 = await_0(this.local$ref.set(obj()), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            var stopPolling = this.local$ref.onSnapshot(FcmControl_init$lambda$ObjectLiteral$requested$lambda(this.$this.this$FcmControl));
            var stopTokenListener = this.$this.closure$messaging.onTokenRefresh(FcmControl_init$lambda$ObjectLiteral$requested$lambda_0(this.$this.this$FcmControl, this.$this, this.local$ref));
            this.$this.closure$killableSeq.set_o14v8n$(FcmControl_init$lambda$ObjectLiteral$requested$lambda_1(stopPolling, stopTokenListener));
            this.$this.this$FcmControl.toggle0_0 = this.$this.this$FcmControl.noReentry_eznvfo$(FcmControl_init$lambda$ObjectLiteral$requested$lambda_2(this.$this.this$FcmControl, this.local$ref));
            return this.local$ref;
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
  FcmControl_init$lambda$ObjectLiteral.prototype.request_6taknv$ = function (upload_0, continuation_0, suspended) {
    var instance = new Coroutine$request_6taknv$(this, upload_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$request_6taknv$($this, upload_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$upload = upload_0;
  }
  Coroutine$request_6taknv$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$request_6taknv$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$request_6taknv$.prototype.constructor = Coroutine$request_6taknv$;
  Coroutine$request_6taknv$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(ensureNotNull(this.$this.closure$messaging.getToken()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var token = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.requested_ivxn3r$(token, this.local$upload, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  FcmControl_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function FcmControl_init$lambda$lambda$lambda(closure$messaging_0, closure$tokens_0, closure$alert_0, this$FcmControl_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$FcmControl_init$lambda$lambda$lambda(closure$messaging_0, closure$tokens_0, closure$alert_0, this$FcmControl_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FcmControl_init$lambda$lambda$lambda(closure$messaging_0, closure$tokens_0, closure$alert_0, this$FcmControl_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$messaging = closure$messaging_0;
    this.local$closure$tokens = closure$tokens_0;
    this.local$closure$alert = closure$alert_0;
    this.local$this$FcmControl = this$FcmControl_0;
  }
  Coroutine$FcmControl_init$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FcmControl_init$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FcmControl_init$lambda$lambda$lambda.prototype.constructor = Coroutine$FcmControl_init$lambda$lambda$lambda;
  Coroutine$FcmControl_init$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = await_0(this.local$closure$messaging.requestPermission(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = this.local$closure$tokens.request_6taknv$(true, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            var _ = this.exception_0;
            this.local$closure$alert('Permission to show notifications has been denied.');
            return this.local$this$FcmControl.permissionDenied_0(), Unit;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
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
  function FcmControl_init$lambda$lambda(closure$messaging, closure$tokens, this$FcmControl) {
    return function (alert) {
      launch(coroutines.GlobalScope, void 0, void 0, FcmControl_init$lambda$lambda$lambda(closure$messaging, closure$tokens, alert, this$FcmControl));
      return Unit;
    };
  }
  function FcmControl_init$lambda_0(this$FcmControl_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$FcmControl_init$lambda(this$FcmControl_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FcmControl_init$lambda(this$FcmControl_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FcmControl = this$FcmControl_0;
  }
  Coroutine$FcmControl_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FcmControl_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FcmControl_init$lambda.prototype.constructor = Coroutine$FcmControl_init$lambda;
  Coroutine$FcmControl_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$FcmControl.fbCtx.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var messaging = this.result_0;
            var killableSeq = new KillableSeq();
            this.local$this$FcmControl.killables.plusAssign_wii6vi$(killableSeq);
            var tokens = new FcmControl_init$lambda$ObjectLiteral(this.local$this$FcmControl, messaging, killableSeq);
            if (!equals(Notification.permission, 'granted')) {
              this.local$this$FcmControl.enabled0_0.now = false;
              return this.local$this$FcmControl.toggle0_0 = this.local$this$FcmControl.noReentry_eznvfo$(FcmControl_init$lambda$lambda(messaging, tokens, this.local$this$FcmControl)), Unit;
            }
             else {
              this.state_0 = 3;
              this.result_0 = tokens.request_6taknv$(false, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            return this.result_0;
          case 4:
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
  FcmControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FcmControl',
    interfaces: []
  };
  function FcmCtx(fbCtx, messaging) {
    this.fbCtx = fbCtx;
    this.messaging = messaging;
    this.granted = new Var(false);
    var tokenPromise = this.messaging.getToken();
    if (tokenPromise == null) {
      this.granted.now = false;
    }
     else {
      this.granted.now = true;
    }
  }
  FcmCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FcmCtx',
    interfaces: []
  };
  function MessagingState() {
  }
  function MessagingState$NotSupported() {
    MessagingState$NotSupported_instance = this;
    MessagingState.call(this);
  }
  MessagingState$NotSupported.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NotSupported',
    interfaces: [MessagingState]
  };
  var MessagingState$NotSupported_instance = null;
  function MessagingState$NotSupported_getInstance() {
    if (MessagingState$NotSupported_instance === null) {
      new MessagingState$NotSupported();
    }
    return MessagingState$NotSupported_instance;
  }
  function MessagingState$NotGranted() {
    MessagingState$NotGranted_instance = this;
    MessagingState.call(this);
  }
  MessagingState$NotGranted.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NotGranted',
    interfaces: [MessagingState]
  };
  var MessagingState$NotGranted_instance = null;
  function MessagingState$NotGranted_getInstance() {
    if (MessagingState$NotGranted_instance === null) {
      new MessagingState$NotGranted();
    }
    return MessagingState$NotGranted_instance;
  }
  function MessagingState$Denied() {
    MessagingState$Denied_instance = this;
    MessagingState.call(this);
  }
  MessagingState$Denied.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Denied',
    interfaces: [MessagingState]
  };
  var MessagingState$Denied_instance = null;
  function MessagingState$Denied_getInstance() {
    if (MessagingState$Denied_instance === null) {
      new MessagingState$Denied();
    }
    return MessagingState$Denied_instance;
  }
  function MessagingState$HasToken(token) {
    MessagingState.call(this);
    this.token = token;
  }
  MessagingState$HasToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HasToken',
    interfaces: [MessagingState]
  };
  MessagingState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessagingState',
    interfaces: []
  };
  function LoggedInCtx(fbCtx, user) {
    this.fbCtx = fbCtx;
    this.user = user;
    this.lib = this.fbCtx.lib;
    this.privateRef = this.fbCtx.db.doc(this.lib.firestorePrivateUserPath_61zpoe$(this.user.uid));
    this.fcmTokensRef = this.fbCtx.db.collection(this.lib.firestoreFcmTokensPath_61zpoe$(this.user.uid));
    this.killables = new Killables();
    this.fcmControl_s4lbk8$_0 = lazy(LoggedInCtx$fcmControl$lambda(this));
  }
  Object.defineProperty(LoggedInCtx.prototype, 'fcmControl', {
    get: function () {
      return this.fcmControl_s4lbk8$_0.value;
    }
  });
  function LoggedInCtx$fcmControl$lambda(this$LoggedInCtx) {
    return function () {
      return new FcmControl(this$LoggedInCtx);
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
  package$commonfb.FcmControl = FcmControl;
  package$commonfb.FcmCtx = FcmCtx;
  Object.defineProperty(MessagingState, 'NotSupported', {
    get: MessagingState$NotSupported_getInstance
  });
  Object.defineProperty(MessagingState, 'NotGranted', {
    get: MessagingState$NotGranted_getInstance
  });
  Object.defineProperty(MessagingState, 'Denied', {
    get: MessagingState$Denied_getInstance
  });
  MessagingState.HasToken = MessagingState$HasToken;
  package$commonfb.MessagingState = MessagingState;
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

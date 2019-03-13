if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-commonfb'.");
}
this['appsimake-commonfb'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_firebase, $module$appsimake_commonui, $module$kotlinx_coroutines_core, $module$appsimake_fontawesome, $module$appsimake_domx, $module$appsimake_bootstrap) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var DbKillsApi = $module$appsimake_firebase.firebase.DbKillsApi;
  var HasRedisplay = $module$appsimake_commonui.commonui.HasRedisplay;
  var CsDbKillsApi = $module$appsimake_firebase.firebase.CsDbKillsApi;
  var KillsUixApi = $module$appsimake_commonui.commonui.KillsUixApi;
  var CsApiCommonui = $module$appsimake_commonui.commonui.CsApiCommonui;
  var KillsApiCommonui = $module$appsimake_commonui.commonui.KillsApiCommonui;
  var FromKillsUixApi = $module$appsimake_commonui.commonui.FromKillsUixApi;
  var HasDb = $module$appsimake_firebase.firebase.HasDb;
  var HasEdit = $module$appsimake_commonui.commonui.HasEdit;
  var HasKills = $module$appsimake_commonshr.commonshr.HasKills;
  var rx = $module$appsimake_commonshr.rx.rx_m71pkk$;
  var delete_0 = $module$appsimake_firebase.firebase.firestore.delete_xr2lrh$;
  var RefDoc = $module$appsimake_commonshr.commonshr.RefDoc;
  var save = $module$appsimake_firebase.firebase.firestore.save_xr2lrh$;
  var RxEditing_init = $module$appsimake_commonui.commonui.editing.RxEditing_init_7iyjpz$;
  var commonui = $module$appsimake_commonui.commonui;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var initializeApp = firebase.initializeApp;
  var withDefaultSettings = $module$appsimake_firebase.firebase.firestore.withDefaultSettings_gwf93m$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var CsKillsView = $module$appsimake_commonui.commonui.CsKillsView;
  var widget = $module$appsimake_commonui.commonui.widget;
  var get_chevronLeft = $module$appsimake_fontawesome.fontawesome.get_chevronLeft_xml72e$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_im8gow$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var row = $module$appsimake_bootstrap.bootstrap.row_kre7dp$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var fa = $module$appsimake_fontawesome.fontawesome.fa_i0c0g1$;
  var FaIcon = $module$appsimake_fontawesome.fontawesome.FaIcon;
  var get_google = $module$appsimake_fontawesome.fontawesome.get_google_8ab8he$;
  var get_user = $module$appsimake_fontawesome.fontawesome.get_user_xml72e$;
  var column_0 = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var HasKillKillsView = $module$appsimake_commonui.commonui.HasKillKillsView;
  var ProgressTC = $module$appsimake_commonui.commonui.topandcontent.ProgressTC;
  var throwUPAE = Kotlin.throwUPAE;
  var HoleT = $module$appsimake_commonui.commonui.widget.HoleT;
  var Throwable = Error;
  var reportd = $module$appsimake_commonshr.commonshr.reportd_za3rmp$;
  var report = $module$appsimake_commonshr.commonshr.report_s8jyv4$;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Factory = $module$appsimake_commonui.commonui.widget.Factory;
  var Var = $module$appsimake_commonshr.rx.Var;
  var mapAsync = $module$appsimake_commonshr.rx.mapAsync_ld00ug$;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_lqp1nt$;
  Login.prototype = Object.create(CsKillsView.prototype);
  Login.prototype.constructor = Login;
  UnkownUser.prototype = Object.create(ProgressTC.prototype);
  UnkownUser.prototype.constructor = UnkownUser;
  LoginBase.prototype = Object.create(CsKillsView.prototype);
  LoginBase.prototype.constructor = LoginBase;
  LoginError.prototype = Object.create(Throwable.prototype);
  LoginError.prototype.constructor = LoginError;
  LoginOnly.prototype = Object.create(LoginBase.prototype);
  LoginOnly.prototype.constructor = LoginOnly;
  UserState$Unknown.prototype = Object.create(UserState.prototype);
  UserState$Unknown.prototype.constructor = UserState$Unknown;
  UserState$NotLoggedIn.prototype = Object.create(UserState.prototype);
  UserState$NotLoggedIn.prototype.constructor = UserState$NotLoggedIn;
  UserState$LoggedIn.prototype = Object.create(UserState.prototype);
  UserState$LoggedIn.prototype.constructor = UserState$LoggedIn;
  function DbKillsApiCommonfb() {
  }
  DbKillsApiCommonfb.prototype.rxEditing_iwuu9m$$default = function (initial, delete_0, preSave) {
    return rxEditing(this, initial, delete_0, preSave);
  };
  function DbKillsApiCommonfb$rxEditing$lambda(it) {
    return Unit;
  }
  DbKillsApiCommonfb.prototype.rxEditing_iwuu9m$ = function (initial, delete_0, preSave, callback$default) {
    if (delete_0 === void 0)
      delete_0 = null;
    if (preSave === void 0)
      preSave = DbKillsApiCommonfb$rxEditing$lambda;
    return callback$default ? callback$default(initial, delete_0, preSave) : this.rxEditing_iwuu9m$$default(initial, delete_0, preSave);
  };
  DbKillsApiCommonfb.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DbKillsApiCommonfb',
    interfaces: [DbKillsApi]
  };
  function FBApi() {
  }
  FBApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FBApi',
    interfaces: [HasRedisplay, CsDbKillsUixApi]
  };
  function FBFromApi() {
  }
  FBFromApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FBFromApi',
    interfaces: [CsDbFromKillsUixApi, FBApi]
  };
  function CsDbKillsUixApi() {
  }
  CsDbKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsDbKillsUixApi',
    interfaces: [CsApiCommonui, KillsUixApi, KillsApiCommonui, DbKillsApiCommonfb, CsDbKillsApi]
  };
  function CsDbFromKillsUixApi() {
  }
  CsDbFromKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsDbFromKillsUixApi',
    interfaces: [FromKillsUixApi, CsDbKillsUixApi]
  };
  function HasDbEdit() {
  }
  HasDbEdit.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasDbEdit',
    interfaces: [HasEdit, HasDb]
  };
  function HasDbEditKills() {
  }
  HasDbEditKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasDbEditKills',
    interfaces: [HasKills, HasDbEdit]
  };
  function rxEditing$lambda(closure$initial) {
    return function ($receiver) {
      return closure$initial.id.state.invoke().exists;
    };
  }
  function rxEditing$lambda_0(closure$initial, closure$deps) {
    return function () {
      delete_0(closure$initial, closure$deps);
      return Unit;
    };
  }
  function rxEditing$lambda_1(closure$preSave, closure$initial, closure$deps) {
    return function (current) {
      closure$preSave(current);
      save(new RefDoc(closure$initial.id, current), closure$deps);
      return Unit;
    };
  }
  function rxEditing(deps, initial, delete_0, preSave) {
    if (delete_0 === void 0)
      delete_0 = null;
    return RxEditing_init(deps.kills, initial, rx(deps, rxEditing$lambda(initial)), delete_0 != null ? delete_0 : rxEditing$lambda_0(initial, deps), rxEditing$lambda_1(preSave, initial, deps));
  }
  function isFcmSupported$lambda() {
    return commonui.isServiceWorkerSupported;
  }
  var isFcmSupported;
  function get_isFcmSupported() {
    return isFcmSupported.value;
  }
  function FB() {
    FB_instance = this;
    this.app_6uzye4$_0 = lazy(FB$app$lambda);
    this.db_9dwzin$_0 = lazy(FB$db$lambda(this));
    this.messagingDeferred_9z6jwi$_0 = lazy(FB$messagingDeferred$lambda(this));
    this.functionDeferred_joqurc$_0 = lazy(FB$functionDeferred$lambda(this));
    this.storage = this.app.storage();
  }
  Object.defineProperty(FB.prototype, 'app', {
    get: function () {
      return this.app_6uzye4$_0.value;
    }
  });
  Object.defineProperty(FB.prototype, 'db', {
    get: function () {
      return this.db_9dwzin$_0.value;
    }
  });
  FB.prototype.functions = function (continuation) {
    return this.functionDeferred.await(continuation);
  };
  Object.defineProperty(FB.prototype, 'messagingDeferred_0', {
    get: function () {
      return this.messagingDeferred_9z6jwi$_0.value;
    }
  });
  FB.prototype.messaging = function (continuation) {
    return this.messagingDeferred_0.await(continuation);
  };
  Object.defineProperty(FB.prototype, 'functionDeferred', {
    get: function () {
      return this.functionDeferred_joqurc$_0.value;
    }
  });
  function FB$app$lambda() {
    var $receiver = {};
    $receiver.apiKey = 'AIzaSyDuHunYFDxjJVSvhk_3POXORpN8M49ubgU';
    $receiver.authDomain = 'appsimake.firebaseapp.com';
    $receiver.databaseURL = 'https://appsimake.firebaseio.com';
    $receiver.projectId = 'appsimake';
    $receiver.storageBucket = 'appsimake.appspot.com';
    $receiver.messagingSenderId = '850641545175';
    return initializeApp($receiver);
  }
  function FB$db$lambda(this$FB) {
    return function () {
      return withDefaultSettings(this$FB.app.firestore());
    };
  }
  function Coroutine$FB$messagingDeferred$lambda$lambda(this$FB_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FB = this$FB_0;
    this.local$msg = void 0;
  }
  Coroutine$FB$messagingDeferred$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FB$messagingDeferred$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FB$messagingDeferred$lambda$lambda.prototype.constructor = Coroutine$FB$messagingDeferred$lambda$lambda;
  Coroutine$FB$messagingDeferred$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$msg = this.local$this$FB.app.messaging();
            this.state_0 = 2;
            this.result_0 = commonui.APP.registerServiceWorker(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.local$msg.useServiceWorker(tmp$);
            }

            this.local$msg.usePublicVapidKey('BOgqeELuJyp5wv-HiXzqLsxA2tqGboVZRZdrHTDnrN_DzCCJYuMA_pVBQYB0afOFvtTXSUdHi20NuNGmmtP0fvU');
            return this.local$msg;
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
  function FB$messagingDeferred$lambda$lambda(this$FB_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FB$messagingDeferred$lambda$lambda(this$FB_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FB$messagingDeferred$lambda(this$FB) {
    return function () {
      return async(coroutines.GlobalScope, void 0, void 0, FB$messagingDeferred$lambda$lambda(this$FB));
    };
  }
  function Coroutine$FB$functionDeferred$lambda$lambda(this$FB_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FB = this$FB_0;
  }
  Coroutine$FB$functionDeferred$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FB$functionDeferred$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FB$functionDeferred$lambda$lambda.prototype.constructor = Coroutine$FB$functionDeferred$lambda$lambda;
  Coroutine$FB$functionDeferred$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (get_isFcmSupported()) {
              this.state_0 = 2;
              this.result_0 = this.local$this$FB.messagingDeferred_0.await(this);
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
            return this.local$this$FB.app.functions();
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
  function FB$functionDeferred$lambda$lambda(this$FB_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FB$functionDeferred$lambda$lambda(this$FB_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FB$functionDeferred$lambda(this$FB) {
    return function () {
      return async(coroutines.GlobalScope, void 0, void 0, FB$functionDeferred$lambda$lambda(this$FB));
    };
  }
  FB.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FB',
    interfaces: []
  };
  var FB_instance = null;
  function FB_getInstance() {
    if (FB_instance === null) {
      new FB();
    }
    return FB_instance;
  }
  function Callable() {
  }
  Callable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Callable',
    interfaces: []
  };
  function callPromise($receiver, app, input) {
    return app.httpsCallable($receiver.qualifiedName)(input);
  }
  function callable$ObjectLiteral(closure$app, this$callable) {
    this.fn = closure$app.httpsCallable(this$callable.qualifiedName);
  }
  function Coroutine$call_11rb$($this, input_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$input = input_0;
  }
  Coroutine$call_11rb$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$call_11rb$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$call_11rb$.prototype.constructor = Coroutine$call_11rb$;
  Coroutine$call_11rb$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.$this.fn(this.local$input), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.data;
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
  callable$ObjectLiteral.prototype.call_11rb$ = function (input_0, continuation_0, suspended) {
    var instance = new Coroutine$call_11rb$(this, input_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  callable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Callable]
  };
  function callable($receiver, app) {
    return new callable$ObjectLiteral(app, $receiver);
  }
  function call($receiver, app, input, continuation) {
    return callable($receiver, app).call_11rb$(input, continuation);
  }
  function Login(parent, base, auth, back, loggingIn, loginFailed, loginSucceeded) {
    if (back === void 0)
      back = null;
    if (loggingIn === void 0)
      loggingIn = Login_init$lambda;
    if (loginFailed === void 0)
      loginFailed = Login_init$lambda_0;
    if (loginSucceeded === void 0)
      loginSucceeded = Login_init$lambda_1;
    CsKillsView.call(this, parent);
    this.base = base;
    this.auth = auth;
    this.back = back;
    this.loggingIn = loggingIn;
    this.loginFailed = loginFailed;
    this.loginSucceeded = loginSucceeded;
    this.userState_stb1tx$_0 = UserState$NotLoggedIn_getInstance();
    this.rawView_fdn0e$_0 = ui(this);
  }
  Object.defineProperty(Login.prototype, 'userState', {
    get: function () {
      return this.userState_stb1tx$_0;
    }
  });
  Object.defineProperty(Login.prototype, 'rawView', {
    get: function () {
      return this.rawView_fdn0e$_0;
    }
  });
  function Coroutine$tryLogin_qzbeuz$($this, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$fn = fn_0;
  }
  Coroutine$tryLogin_qzbeuz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryLogin_qzbeuz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryLogin_qzbeuz$.prototype.constructor = Coroutine$tryLogin_qzbeuz$;
  Coroutine$tryLogin_qzbeuz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 1;
            this.result_0 = this.$this.loggingIn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.local$tmp$ = this.$this.loginSucceeded;
            this.state_0 = 2;
            this.result_0 = this.local$fn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.exceptionState_0 = 7;
            this.state_0 = 6;
            continue;
          case 4:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            this.state_0 = 5;
            this.result_0 = this.$this.loginFailed(e, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            return;
          case 7:
            throw this.exception_0;
          default:this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 7) {
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
  Login.prototype.tryLogin_qzbeuz$ = function (fn_0, continuation_0, suspended) {
    var instance = new Coroutine$tryLogin_qzbeuz$(this, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$Login$google$lambda$lambda(this$Login_0, closure$provider_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Login = this$Login_0;
    this.local$closure$provider = closure$provider_0;
  }
  Coroutine$Login$google$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login$google$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login$google$lambda$lambda.prototype.constructor = Coroutine$Login$google$lambda$lambda;
  Coroutine$Login$google$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$Login.auth.signInWithRedirect(this.local$closure$provider), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = CompletableDeferred().await(this);
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
  function Login$google$lambda$lambda(this$Login_0, closure$provider_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Login$google$lambda$lambda(this$Login_0, closure$provider_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Login$google$lambda(this$Login_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Login = this$Login_0;
  }
  Coroutine$Login$google$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login$google$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login$google$lambda.prototype.constructor = Coroutine$Login$google$lambda;
  Coroutine$Login$google$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var provider = new GoogleAuthProvider();
            this.state_0 = 2;
            this.result_0 = this.local$this$Login.tryLogin_qzbeuz$(Login$google$lambda$lambda(this.local$this$Login, provider), this);
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
  function Login$google$lambda(this$Login_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Login$google$lambda(this$Login_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Login.prototype.google = function () {
    launch(this.base, void 0, void 0, Login$google$lambda(this));
  };
  function Coroutine$Login$guest$lambda$lambda(this$Login_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Login = this$Login_0;
  }
  Coroutine$Login$guest$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login$guest$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login$guest$lambda$lambda.prototype.constructor = Coroutine$Login$guest$lambda$lambda;
  Coroutine$Login$guest$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$Login.auth.signInAnonymously(), this);
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
  function Login$guest$lambda$lambda(this$Login_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Login$guest$lambda$lambda(this$Login_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Login$guest$lambda(this$Login_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Login = this$Login_0;
  }
  Coroutine$Login$guest$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login$guest$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login$guest$lambda.prototype.constructor = Coroutine$Login$guest$lambda;
  Coroutine$Login$guest$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Login.tryLogin_qzbeuz$(Login$guest$lambda$lambda(this.local$this$Login), this);
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
  function Login$guest$lambda(this$Login_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Login$guest$lambda(this$Login_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Login.prototype.guest = function () {
    launch(this.base, void 0, void 0, Login$guest$lambda(this));
  };
  function Coroutine$Login_init$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$Login_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login_init$lambda.prototype.constructor = Coroutine$Login_init$lambda;
  Coroutine$Login_init$lambda.prototype.doResume = function () {
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
  function Login_init$lambda(continuation_0, suspended) {
    var instance = new Coroutine$Login_init$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Login_init$lambda_0(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$Login_init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login_init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login_init$lambda_0.prototype.constructor = Coroutine$Login_init$lambda_0;
  Coroutine$Login_init$lambda_0.prototype.doResume = function () {
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
  function Login_init$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$Login_init$lambda_0(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Login_init$lambda_1(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$Login_init$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login_init$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login_init$lambda_1.prototype.constructor = Coroutine$Login_init$lambda_1;
  Coroutine$Login_init$lambda_1.prototype.doResume = function () {
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
  function Login_init$lambda_1(it_0, continuation_0, suspended) {
    var instance = new Coroutine$Login_init$lambda_1(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  Login.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Login',
    interfaces: [UserStateView, CsKillsView]
  };
  function ui$lambda$lambda$lambda$lambda(closure$bck) {
    return function () {
      closure$bck();
      return Unit;
    };
  }
  function ui$lambda$lambda($receiver) {
    get_p1(get_cls($receiver));
    $receiver.innerText = 'Sign In';
    return Unit;
  }
  function ui$lambda$lambda$butt$lambda$lambda$lambda$lambda($receiver) {
    get_fw($receiver);
    return Unit;
  }
  function ui$lambda$lambda$butt$lambda$lambda(closure$faIcon) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      var closure$faIcon_0 = closure$faIcon;
      get_m1($receiver_0);
      fa($receiver_0, closure$faIcon_0, ui$lambda$lambda$butt$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function ui$lambda$lambda$butt$lambda$lambda_0(closure$label) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      $receiver.innerText = closure$label;
      return Unit;
    };
  }
  function ui$lambda$lambda$butt(this$, this$ui) {
    return function (faIcon, label, fn) {
      var $receiver = get_insert(get_widget(this$)).button;
      this$ui.click_9375ex$($receiver, fn);
      $receiver.primary;
      var $receiver_0 = $receiver.cls;
      get_m1($receiver_0);
      get_p1($receiver_0);
      row($receiver_0);
      get_alignItemsCenter($receiver_0);
      invoke($receiver.icon, ui$lambda$lambda$butt$lambda$lambda(faIcon));
      invoke($receiver.text, ui$lambda$lambda$butt$lambda$lambda_0(label));
      return $receiver;
    };
  }
  function ui$lambda$lambda$lambda($receiver) {
    get_google($receiver);
    return Unit;
  }
  function ui$lambda$lambda$lambda_0(this$ui) {
    return function () {
      this$ui.google();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_1($receiver) {
    get_user($receiver);
    return Unit;
  }
  function ui$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.guest();
      return Unit;
    };
  }
  function ui$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      var butt = ui$lambda$lambda$butt($receiver, this$ui);
      butt(FaIcon.Companion.faBrands_xqq80m$(ui$lambda$lambda$lambda), 'Sign in with Google', ui$lambda$lambda$lambda_0(this$ui));
      butt(FaIcon.Companion.fa_k1ws5a$(ui$lambda$lambda$lambda_1), 'Continue as guest', ui$lambda$lambda$lambda_2(this$ui));
      return Unit;
    };
  }
  function ui$lambda(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      get_flexGrow1($receiver_0);
      column($receiver_0);
      get_alignItemsCenter($receiver_0);
      column_0($receiver, ui$lambda$lambda_0(this$ui));
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var tmp$;
    if ((tmp$ = $receiver.back) != null) {
      var $receiver_1 = $receiver_0.left.button;
      $receiver_1.m1p2;
      $receiver_1.secondary;
      get_chevronLeft($receiver_1.fa);
      $receiver.click_9375ex$($receiver_1, ui$lambda$lambda$lambda$lambda(tmp$));
    }
    invoke($receiver_0.title, ui$lambda$lambda);
    return new TopAndContent($receiver_0.node, invoke(get_div(document), ui$lambda($receiver)));
  }
  function LoginBasePath() {
  }
  LoginBasePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoginBasePath',
    interfaces: []
  };
  function UserStateView() {
  }
  UserStateView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UserStateView',
    interfaces: [HasKillKillsView]
  };
  function UnkownUser(parent) {
    ProgressTC.call(this, parent);
    this.userState_7b6zhk$_0 = UserState$Unknown_getInstance();
  }
  Object.defineProperty(UnkownUser.prototype, 'userState', {
    get: function () {
      return this.userState_7b6zhk$_0;
    }
  });
  UnkownUser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnkownUser',
    interfaces: [UserStateView, ProgressTC]
  };
  function LoginBase(parent) {
    CsKillsView.call(this, parent);
    this.loginBase_a0jenj$_0 = this;
    this.slots = new LoginBase$Slots();
    this.rawView_sx79q4$_0 = ui_0(this);
    this.contentHole = new HoleT(LoginBase$contentHole$lambda(this), LoginBase$contentHole$lambda_0(this));
    this.hole = this.get_routing_lqv1tx$(this.contentHole).of_i6agvh$(LoginBase$hole$lambda);
  }
  Object.defineProperty(LoginBase.prototype, 'loginBase', {
    get: function () {
      return this.loginBase_a0jenj$_0;
    }
  });
  function LoginBase$Slots() {
    this.top_6sve31$_0 = this.top_6sve31$_0;
    this.main_2cen6v$_0 = this.main_2cen6v$_0;
    this.toasts_d0eltm$_0 = this.toasts_d0eltm$_0;
  }
  Object.defineProperty(LoginBase$Slots.prototype, 'top', {
    get: function () {
      if (this.top_6sve31$_0 == null)
        return throwUPAE('top');
      return this.top_6sve31$_0;
    },
    set: function (top) {
      this.top_6sve31$_0 = top;
    }
  });
  Object.defineProperty(LoginBase$Slots.prototype, 'main', {
    get: function () {
      if (this.main_2cen6v$_0 == null)
        return throwUPAE('main');
      return this.main_2cen6v$_0;
    },
    set: function (main) {
      this.main_2cen6v$_0 = main;
    }
  });
  Object.defineProperty(LoginBase$Slots.prototype, 'toasts', {
    get: function () {
      if (this.toasts_d0eltm$_0 == null)
        return throwUPAE('toasts');
      return this.toasts_d0eltm$_0;
    },
    set: function (toasts) {
      this.toasts_d0eltm$_0 = toasts;
    }
  });
  LoginBase$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(LoginBase.prototype, 'rawView', {
    get: function () {
      return this.rawView_sx79q4$_0;
    }
  });
  LoginBase.prototype.switchToUnkownUser = function (continuation) {
    this.hole.content.remAssign_11rb$(new UnkownUser(this.hole));
  };
  function LoginBase$reportError$lambda(closure$d) {
    return function ($receiver) {
      $receiver.danger_61zpoe$('Sign in failed: ' + (closure$d != null ? closure$d.message : null).toString());
      return Unit;
    };
  }
  LoginBase.prototype.reportError_za3rmp$ = function (d) {
    this.slots.toasts(LoginBase$reportError$lambda(d));
  };
  function Coroutine$LoginBase$start$lambda$lambda(closure$st_0, this$LoginBase_0, closure$loggedInView_0, closure$notLoggedInView_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$st = closure$st_0;
    this.local$this$LoginBase = this$LoginBase_0;
    this.local$closure$loggedInView = closure$loggedInView_0;
    this.local$closure$notLoggedInView = closure$notLoggedInView_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$LoginBase$start$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginBase$start$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginBase$start$lambda$lambda.prototype.constructor = Coroutine$LoginBase$start$lambda$lambda;
  Coroutine$LoginBase$start$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = this.local$closure$st;
            if (Kotlin.isType(tmp$, UserState$LoggedIn)) {
              commonui.globalStatus.remAssign_11rb$('Logged in.');
              this.local$tmp$ = this.local$this$LoginBase.hole.content;
              this.state_0 = 5;
              this.result_0 = this.local$closure$loggedInView(this.local$closure$st.user, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(tmp$, UserState$NotLoggedIn)) {
                commonui.globalStatus.remAssign_11rb$('Logged out.');
                this.local$tmp$_0 = this.local$this$LoginBase.hole.content;
                this.state_0 = 3;
                this.result_0 = this.local$closure$notLoggedInView(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 2;
                this.result_0 = this.local$this$LoginBase.switchToUnkownUser(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return this.local$tmp$_0.remAssign_11rb$(this.result_0), Unit;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            return this.local$tmp$.remAssign_11rb$(this.result_0), Unit;
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
  function LoginBase$start$lambda$lambda(closure$st_0, this$LoginBase_0, closure$loggedInView_0, closure$notLoggedInView_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$LoginBase$start$lambda$lambda(closure$st_0, this$LoginBase_0, closure$loggedInView_0, closure$notLoggedInView_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function LoginBase$start$lambda(this$LoginBase, closure$loggedInView, closure$notLoggedInView) {
    return function ($receiver, st) {
      launch(this$LoginBase, void 0, void 0, LoginBase$start$lambda$lambda(st, this$LoginBase, closure$loggedInView, closure$notLoggedInView));
      return Unit;
    };
  }
  function Coroutine$start_5wdgum$($this, $receiver_0, loggedInView_0, notLoggedInView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
    this.local$loggedInView = loggedInView_0;
    this.local$notLoggedInView = notLoggedInView_0;
  }
  Coroutine$start_5wdgum$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$start_5wdgum$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$start_5wdgum$.prototype.constructor = Coroutine$start_5wdgum$;
  Coroutine$start_5wdgum$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Checking user...');
            this.state_0 = 2;
            this.result_0 = runUserState_0(this.$this, this.local$$receiver, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.forEach_xwzbbo$(this.result_0, LoginBase$start$lambda(this.$this, this.local$loggedInView, this.local$notLoggedInView));
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
  LoginBase.prototype.start_5wdgum$ = function ($receiver_0, loggedInView_0, notLoggedInView_0, continuation_0, suspended) {
    var instance = new Coroutine$start_5wdgum$(this, $receiver_0, loggedInView_0, notLoggedInView_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function LoginBase$contentHole$lambda(this$LoginBase) {
    return function ($receiver) {
      var $receiver_0 = $receiver.topbar;
      this$LoginBase.slots.top.prepareOrNull($receiver_0);
      var $receiver_1 = $receiver.content;
      this$LoginBase.slots.main.prepareOrNull($receiver_1);
      return Unit;
    };
  }
  function LoginBase$contentHole$lambda_0(this$LoginBase) {
    return function (cv) {
      this$LoginBase.slots.top.remAssign_11rb$(cv != null ? cv.topbar : null);
      this$LoginBase.slots.main.remAssign_11rb$(cv != null ? cv.content : null);
      return Unit;
    };
  }
  function LoginBase$hole$lambda($receiver) {
    return new UnkownUser($receiver);
  }
  LoginBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginBase',
    interfaces: [LoginBasePath, CsKillsView]
  };
  function Coroutine$enablePersistenceAndWait($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$enablePersistenceAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$enablePersistenceAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$enablePersistenceAndWait.prototype.constructor = Coroutine$enablePersistenceAndWait;
  Coroutine$enablePersistenceAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Enabling persistence...');
            var $receiver = {};
            $receiver.experimentalTabSynchronization = true;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver.enablePersistence($receiver), this);
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
  function enablePersistenceAndWait($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$enablePersistenceAndWait($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$disableNetworkAndWait($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$disableNetworkAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$disableNetworkAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$disableNetworkAndWait.prototype.constructor = Coroutine$disableNetworkAndWait;
  Coroutine$disableNetworkAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Switching to offline data...');
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver.disableNetwork(), this);
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
  function disableNetworkAndWait($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$disableNetworkAndWait($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function LoginError(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    Throwable.call(this);
    this.message_i4wbvd$_0 = typeof message === 'undefined' && cause != null ? Kotlin.toString(cause) : message;
    this.cause_nihxrv$_0 = cause;
    Kotlin.captureStack(Throwable, this);
    this.name = 'LoginError';
  }
  Object.defineProperty(LoginError.prototype, 'message', {
    get: function () {
      return this.message_i4wbvd$_0;
    }
  });
  Object.defineProperty(LoginError.prototype, 'cause', {
    get: function () {
      return this.cause_nihxrv$_0;
    }
  });
  LoginError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginError',
    interfaces: [Throwable]
  };
  function loginHandler$lambda(it) {
    reportd(it);
    return Unit;
  }
  function loginHandler$lambda_0(closure$user, closure$firstUser) {
    return function (u) {
      closure$user.v = u;
      closure$firstUser.complete_11rb$(Unit);
      return Unit;
    };
  }
  function loginHandler$lambda_1(it) {
    report(it);
    return Unit;
  }
  function Coroutine$loginHandler$lambda$lambda$attempt$lambda(closure$hole_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$hole = closure$hole_0;
  }
  Coroutine$loginHandler$lambda$lambda$attempt$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loginHandler$lambda$lambda$attempt$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loginHandler$lambda$lambda$attempt$lambda.prototype.constructor = Coroutine$loginHandler$lambda$lambda$attempt$lambda;
  Coroutine$loginHandler$lambda$lambda$attempt$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Logging in...');
            return this.local$closure$hole.remAssign_looze4$(new ProgressTC(this.local$closure$hole)), Unit;
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
  function loginHandler$lambda$lambda$attempt$lambda(closure$hole_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$loginHandler$lambda$lambda$attempt$lambda(closure$hole_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$loginHandler$lambda$lambda$attempt$lambda_0(closure$reporter_0, closure$attempt_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$reporter = closure$reporter_0;
    this.local$closure$attempt = closure$attempt_0;
    this.local$e = e_0;
  }
  Coroutine$loginHandler$lambda$lambda$attempt$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loginHandler$lambda$lambda$attempt$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loginHandler$lambda$lambda$attempt$lambda_0.prototype.constructor = Coroutine$loginHandler$lambda$lambda$attempt$lambda_0;
  Coroutine$loginHandler$lambda$lambda$attempt$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$reporter(this.local$e);
            return this.local$closure$attempt(), Unit;
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
  function loginHandler$lambda$lambda$attempt$lambda_0(closure$reporter_0, closure$attempt_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$loginHandler$lambda$lambda$attempt$lambda_0(closure$reporter_0, closure$attempt_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$loginHandler$lambda$lambda$attempt$lambda_1(closure$cd_0, u_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cd = closure$cd_0;
    this.local$u = u_0;
  }
  Coroutine$loginHandler$lambda$lambda$attempt$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loginHandler$lambda$lambda$attempt$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loginHandler$lambda$lambda$attempt$lambda_1.prototype.constructor = Coroutine$loginHandler$lambda$lambda$attempt$lambda_1;
  Coroutine$loginHandler$lambda$lambda$attempt$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$cd.complete_11rb$(ensureNotNull(this.local$u.user));
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
  function loginHandler$lambda$lambda$attempt$lambda_1(closure$cd_0) {
    return function (u_0, continuation_0, suspended) {
      var instance = new Coroutine$loginHandler$lambda$lambda$attempt$lambda_1(closure$cd_0, u_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function loginHandler$lambda$lambda$attempt(closure$hole, closure$deps, closure$auth, closure$reporter, closure$cd) {
    return function closure$attempt() {
      closure$hole.remAssign_looze4$(new Login(closure$hole, closure$deps, closure$auth, void 0, loginHandler$lambda$lambda$attempt$lambda(closure$hole), loginHandler$lambda$lambda$attempt$lambda_0(closure$reporter, closure$attempt), loginHandler$lambda$lambda$attempt$lambda_1(closure$cd)));
    };
  }
  function Coroutine$loginHandler$lambda(closure$firstUser_0, closure$user_0, closure$hole_0, closure$deps_0, closure$auth_0, closure$reporter_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$firstUser = closure$firstUser_0;
    this.local$closure$user = closure$user_0;
    this.local$closure$hole = closure$hole_0;
    this.local$closure$deps = closure$deps_0;
    this.local$closure$auth = closure$auth_0;
    this.local$closure$reporter = closure$reporter_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$loginHandler$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loginHandler$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loginHandler$lambda.prototype.constructor = Coroutine$loginHandler$lambda;
  Coroutine$loginHandler$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            commonui.globalStatus.remAssign_11rb$('Checking login status...');
            this.state_0 = 2;
            this.result_0 = this.local$closure$firstUser.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.local$closure$user.v) != null) {
              this.local$tmp$ = tmp$;
              this.state_0 = 4;
              continue;
            }
             else {
              var closure$hole = this.local$closure$hole;
              var closure$deps = this.local$closure$deps;
              var closure$auth = this.local$closure$auth;
              var closure$reporter = this.local$closure$reporter;
              var cd = CompletableDeferred();
              var attempt = loginHandler$lambda$lambda$attempt(closure$hole, closure$deps, closure$auth, closure$reporter, cd);
              attempt();
              this.state_0 = 3;
              this.result_0 = cd.await(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            this.local$tmp$ = this.result_0;
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
  function loginHandler$lambda_2(closure$firstUser_0, closure$user_0, closure$hole_0, closure$deps_0, closure$auth_0, closure$reporter_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$loginHandler$lambda(closure$firstUser_0, closure$user_0, closure$hole_0, closure$deps_0, closure$auth_0, closure$reporter_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function loginHandler(deps, auth, hole, reporter) {
    if (reporter === void 0)
      reporter = loginHandler$lambda;
    var user = {v: null};
    var firstUser = CompletableDeferred();
    plusAssign(deps.kills, auth.onAuthStateChanged(loginHandler$lambda_0(user, firstUser), loginHandler$lambda_1));
    return loginHandler$lambda_2(firstUser, user, hole, deps, auth, reporter);
  }
  function LoginOnly(parent) {
    LoginBase.call(this, parent);
  }
  function Coroutine$LoginOnly$start$notLoggedInView$lambda(this$LoginOnly_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoginOnly = this$LoginOnly_0;
  }
  Coroutine$LoginOnly$start$notLoggedInView$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginOnly$start$notLoggedInView$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginOnly$start$notLoggedInView$lambda.prototype.constructor = Coroutine$LoginOnly$start$notLoggedInView$lambda;
  Coroutine$LoginOnly$start$notLoggedInView$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoginOnly.switchToUnkownUser(this);
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
  function LoginOnly$start$notLoggedInView$lambda(this$LoginOnly_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoginOnly$start$notLoggedInView$lambda(this$LoginOnly_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoginOnly$start$notLoggedInView$lambda_0(this$LoginOnly_0, closure$notLoggedInView_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoginOnly = this$LoginOnly_0;
    this.local$closure$notLoggedInView = closure$notLoggedInView_0;
    this.local$it = it_0;
  }
  Coroutine$LoginOnly$start$notLoggedInView$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginOnly$start$notLoggedInView$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginOnly$start$notLoggedInView$lambda_0.prototype.constructor = Coroutine$LoginOnly$start$notLoggedInView$lambda_0;
  Coroutine$LoginOnly$start$notLoggedInView$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$LoginOnly.reportError_za3rmp$(this.local$it);
            return this.local$this$LoginOnly.hole.remAssign_looze4$(this.local$closure$notLoggedInView()), Unit;
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
  function LoginOnly$start$notLoggedInView$lambda_0(this$LoginOnly_0, closure$notLoggedInView_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$LoginOnly$start$notLoggedInView$lambda_0(this$LoginOnly_0, closure$notLoggedInView_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function LoginOnly$start$notLoggedInView(this$LoginOnly, closure$app) {
    return function closure$notLoggedInView() {
      return new Login(this$LoginOnly.hole, this$LoginOnly, closure$app.auth(), void 0, LoginOnly$start$notLoggedInView$lambda(this$LoginOnly), LoginOnly$start$notLoggedInView$lambda_0(this$LoginOnly, closure$notLoggedInView));
    };
  }
  function Coroutine$LoginOnly$start$lambda(closure$notLoggedInView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$notLoggedInView = closure$notLoggedInView_0;
  }
  Coroutine$LoginOnly$start$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginOnly$start$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginOnly$start$lambda.prototype.constructor = Coroutine$LoginOnly$start$lambda;
  Coroutine$LoginOnly$start$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$notLoggedInView();
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
  function LoginOnly$start$lambda(closure$notLoggedInView_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoginOnly$start$lambda(closure$notLoggedInView_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$start_x9mhxj$($this, app_0, loggedInView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$app = app_0;
    this.local$loggedInView = loggedInView_0;
  }
  Coroutine$start_x9mhxj$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$start_x9mhxj$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$start_x9mhxj$.prototype.constructor = Coroutine$start_x9mhxj$;
  Coroutine$start_x9mhxj$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var notLoggedInView = LoginOnly$start$notLoggedInView(this.$this, this.local$app);
            this.state_0 = 2;
            this.result_0 = this.$this.start_5wdgum$(this.local$app.auth(), this.local$loggedInView, LoginOnly$start$lambda(notLoggedInView), this);
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
  LoginOnly.prototype.start_x9mhxj$ = function (app_0, loggedInView_0, continuation_0, suspended) {
    var instance = new Coroutine$start_x9mhxj$(this, app_0, loggedInView_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  LoginOnly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginOnly',
    interfaces: [LoginBase]
  };
  function ui$lambda$lambda$lambda$lambda_0(closure$tsts) {
    return function (fn) {
      fn(closure$tsts.toast);
      return Unit;
    };
  }
  function ui_0($receiver) {
    var boot = $receiver.slots;
    var $receiver_0 = (new Factory()).screen;
    boot.top = $receiver_0.slots.top;
    boot.main = $receiver_0.toastSlots.content;
    boot.toasts = ui$lambda$lambda$lambda$lambda_0($receiver_0.toastSlots.toasts);
    return $receiver_0.node;
  }
  function UserState() {
  }
  function UserState$Unknown() {
    UserState$Unknown_instance = this;
    UserState.call(this);
  }
  UserState$Unknown.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Unknown',
    interfaces: [UserState]
  };
  var UserState$Unknown_instance = null;
  function UserState$Unknown_getInstance() {
    if (UserState$Unknown_instance === null) {
      new UserState$Unknown();
    }
    return UserState$Unknown_instance;
  }
  function UserState$NotLoggedIn() {
    UserState$NotLoggedIn_instance = this;
    UserState.call(this);
  }
  UserState$NotLoggedIn.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NotLoggedIn',
    interfaces: [UserState]
  };
  var UserState$NotLoggedIn_instance = null;
  function UserState$NotLoggedIn_getInstance() {
    if (UserState$NotLoggedIn_instance === null) {
      new UserState$NotLoggedIn();
    }
    return UserState$NotLoggedIn_instance;
  }
  function UserState$LoggedIn(user) {
    UserState.call(this);
    this.user = user;
  }
  UserState$LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [UserState]
  };
  UserState$LoggedIn.prototype.component1 = function () {
    return this.user;
  };
  UserState$LoggedIn.prototype.copy_v1eir6$ = function (user) {
    return new UserState$LoggedIn(user === void 0 ? this.user : user);
  };
  UserState$LoggedIn.prototype.toString = function () {
    return 'LoggedIn(user=' + Kotlin.toString(this.user) + ')';
  };
  UserState$LoggedIn.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    return result;
  };
  UserState$LoggedIn.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.user, other.user))));
  };
  UserState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserState',
    interfaces: []
  };
  function Coroutine$runUserState$lambda($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$runUserState$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runUserState$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runUserState$lambda.prototype.constructor = Coroutine$runUserState$lambda;
  Coroutine$runUserState$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it;
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
  function runUserState$lambda($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$runUserState$lambda($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function runUserState($receiver, app, fn, continuation) {
    if (app === void 0)
      app = FB_getInstance().app;
    if (fn === void 0)
      fn = runUserState$lambda;
    return runUserState_0($receiver, app.auth(), fn, continuation);
  }
  function Coroutine$runUserState$lambda_0($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$runUserState$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runUserState$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runUserState$lambda_0.prototype.constructor = Coroutine$runUserState$lambda_0;
  Coroutine$runUserState$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it;
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
  function runUserState$lambda_0($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$runUserState$lambda_0($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function runUserState$lambda_1(closure$rxv) {
    return function (u) {
      var tmp$, tmp$_0;
      tmp$_0 = closure$rxv;
      if (u == null) {
        tmp$ = UserState$NotLoggedIn_getInstance();
      }
       else {
        tmp$ = new UserState$LoggedIn(u);
      }
      tmp$_0.now = tmp$;
      return Unit;
    };
  }
  function runUserState$lambda_2(closure$rxv) {
    return function (e) {
      report(e);
      closure$rxv.now = UserState$NotLoggedIn_getInstance();
      return Unit;
    };
  }
  function runUserState_0($receiver, auth, fn, continuation) {
    if (auth === void 0)
      auth = FB_getInstance().app.auth();
    if (fn === void 0)
      fn = runUserState$lambda_0;
    var rxv = new Var(UserState$Unknown_getInstance());
    plusAssign($receiver.kills, auth.onAuthStateChanged(runUserState$lambda_1(rxv), runUserState$lambda_2(rxv)));
    return mapAsync(rxv, $receiver, fn, continuation);
  }
  function toUser$lambda(this$toUser) {
    return function ($receiver) {
      var u = this$toUser.invoke();
      if (Kotlin.isType(u, UserState$LoggedIn))
        return u.user;
      else
        return null;
    };
  }
  function toUser($receiver, ks) {
    return Rx_init(ks, toUser$lambda($receiver));
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$commonfb = _.commonfb || (_.commonfb = {});
  package$commonfb.DbKillsApiCommonfb = DbKillsApiCommonfb;
  package$commonfb.FBApi = FBApi;
  package$commonfb.FBFromApi = FBFromApi;
  package$commonfb.CsDbKillsUixApi = CsDbKillsUixApi;
  package$commonfb.CsDbFromKillsUixApi = CsDbFromKillsUixApi;
  package$commonfb.HasDbEdit = HasDbEdit;
  package$commonfb.HasDbEditKills = HasDbEditKills;
  var package$editing = package$commonfb.editing || (package$commonfb.editing = {});
  package$editing.rxEditing_gyoida$ = rxEditing;
  Object.defineProperty(package$commonfb, 'isFcmSupported', {
    get: get_isFcmSupported
  });
  Object.defineProperty(package$commonfb, 'FB', {
    get: FB_getInstance
  });
  package$commonfb.Callable = Callable;
  package$commonfb.callPromise_sdkxns$ = callPromise;
  package$commonfb.callable_t9d6zm$ = callable;
  package$commonfb.call_sdkxns$ = call;
  var package$login = package$commonfb.login || (package$commonfb.login = {});
  package$login.Login = Login;
  package$login.ui_c7phaq$ = ui;
  var package$loginbase = package$commonfb.loginbase || (package$commonfb.loginbase = {});
  package$loginbase.LoginBasePath = LoginBasePath;
  package$loginbase.UserStateView = UserStateView;
  package$loginbase.UnkownUser = UnkownUser;
  LoginBase.Slots = LoginBase$Slots;
  package$loginbase.LoginBase = LoginBase;
  package$loginbase.enablePersistenceAndWait_gwf93m$ = enablePersistenceAndWait;
  package$loginbase.disableNetworkAndWait_gwf93m$ = disableNetworkAndWait;
  package$loginbase.LoginError = LoginError;
  package$loginbase.loginHandler_cb7jvs$ = loginHandler;
  package$loginbase.LoginOnly = LoginOnly;
  package$loginbase.ui_wzvor4$ = ui_0;
  Object.defineProperty(UserState, 'Unknown', {
    get: UserState$Unknown_getInstance
  });
  Object.defineProperty(UserState, 'NotLoggedIn', {
    get: UserState$NotLoggedIn_getInstance
  });
  UserState.LoggedIn = UserState$LoggedIn;
  package$commonfb.UserState = UserState;
  package$commonfb.runUserState_53d9qe$ = runUserState;
  package$commonfb.runUserState_fqlg2o$ = runUserState_0;
  package$commonfb.toUser_e06ocd$ = toUser;
  DbKillsApiCommonfb.prototype.get_oldKilled_vsdo34$ = DbKillsApi.prototype.get_oldKilled_vsdo34$;
  DbKillsApiCommonfb.prototype.get_oldKilledOpt_vsdo34$ = DbKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  DbKillsApiCommonfb.prototype.get_randomDoc_sj9vaa$ = DbKillsApi.prototype.get_randomDoc_sj9vaa$;
  DbKillsApiCommonfb.prototype.get_ref_sj9vaa$ = DbKillsApi.prototype.get_ref_sj9vaa$;
  DbKillsApiCommonfb.prototype.get_ref_aqty80$ = DbKillsApi.prototype.get_ref_aqty80$;
  DbKillsApiCommonfb.prototype.rx_y6x17j$ = DbKillsApi.prototype.rx_y6x17j$;
  DbKillsApiCommonfb.prototype.rx_46ic4w$ = DbKillsApi.prototype.rx_46ic4w$;
  DbKillsApiCommonfb.prototype.rx_wgabca$ = DbKillsApi.prototype.rx_wgabca$;
  DbKillsApiCommonfb.prototype.rx_djv61p$ = DbKillsApi.prototype.rx_djv61p$;
  DbKillsApiCommonfb.prototype.containsRx_1w65cx$ = DbKillsApi.prototype.containsRx_1w65cx$;
  DbKillsApiCommonfb.prototype.delete_73z9b6$ = DbKillsApi.prototype.delete_73z9b6$;
  DbKillsApiCommonfb.prototype.feedTo_9o5f67$ = DbKillsApi.prototype.feedTo_9o5f67$;
  DbKillsApiCommonfb.prototype.filtered_tnde95$ = DbKillsApi.prototype.filtered_tnde95$;
  DbKillsApiCommonfb.prototype.forEach_xwzbbo$ = DbKillsApi.prototype.forEach_xwzbbo$;
  DbKillsApiCommonfb.prototype.forEach_35q7bt$ = DbKillsApi.prototype.forEach_35q7bt$;
  DbKillsApiCommonfb.prototype.forEachLater_xwzbbo$ = DbKillsApi.prototype.forEachLater_xwzbbo$;
  DbKillsApiCommonfb.prototype.get_prxdpg$ = DbKillsApi.prototype.get_prxdpg$;
  DbKillsApiCommonfb.prototype.incremented_eoy9qo$ = DbKillsApi.prototype.incremented_eoy9qo$;
  DbKillsApiCommonfb.prototype.linked_n1nom7$ = DbKillsApi.prototype.linked_n1nom7$;
  DbKillsApiCommonfb.prototype.listen_ubid8w$ = DbKillsApi.prototype.listen_ubid8w$;
  DbKillsApiCommonfb.prototype.map_jtxi0h$ = DbKillsApi.prototype.map_jtxi0h$;
  DbKillsApiCommonfb.prototype.mapLive_1mq1ue$ = DbKillsApi.prototype.mapLive_1mq1ue$;
  DbKillsApiCommonfb.prototype.onChange_rlu5c6$ = DbKillsApi.prototype.onChange_rlu5c6$;
  DbKillsApiCommonfb.prototype.plusAssign_ubid8w$ = DbKillsApi.prototype.plusAssign_ubid8w$;
  DbKillsApiCommonfb.prototype.process_7xi3v7$ = DbKillsApi.prototype.process_7xi3v7$;
  DbKillsApiCommonfb.prototype.query_wzkv1r$$default = DbKillsApi.prototype.query_wzkv1r$$default;
  DbKillsApiCommonfb.prototype.remAssign_wgabca$ = DbKillsApi.prototype.remAssign_wgabca$;
  DbKillsApiCommonfb.prototype.remAssign_djv61p$ = DbKillsApi.prototype.remAssign_djv61p$;
  DbKillsApiCommonfb.prototype.remAssign_7fncnf$ = DbKillsApi.prototype.remAssign_7fncnf$;
  DbKillsApiCommonfb.prototype.rxClass_c5yvvx$ = DbKillsApi.prototype.rxClass_c5yvvx$;
  DbKillsApiCommonfb.prototype.rxClass_6sflyw$ = DbKillsApi.prototype.rxClass_6sflyw$;
  DbKillsApiCommonfb.prototype.save_73z9b6$ = DbKillsApi.prototype.save_73z9b6$;
  DbKillsApiCommonfb.prototype.toChannelLater_z5dyp2$ = DbKillsApi.prototype.toChannelLater_z5dyp2$;
  DbKillsApiCommonfb.prototype.toRandomFsDoc_xc7wmg$ = DbKillsApi.prototype.toRandomFsDoc_xc7wmg$;
  DbKillsApiCommonfb.prototype.toRxSet_jr4bl4$ = DbKillsApi.prototype.toRxSet_jr4bl4$;
  DbKillsApiCommonfb.prototype.query_wzkv1r$ = DbKillsApi.prototype.query_wzkv1r$;
  CsDbKillsUixApi.prototype.get_ids_qko62t$ = CsDbKillsApi.prototype.get_ids_qko62t$;
  CsDbKillsUixApi.prototype.get_live_73z9b6$ = CsDbKillsApi.prototype.get_live_73z9b6$;
  CsDbKillsUixApi.prototype.get_oldKilled_vsdo34$ = CsDbKillsApi.prototype.get_oldKilled_vsdo34$;
  CsDbKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = CsDbKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  CsDbKillsUixApi.prototype.get_randomDoc_sj9vaa$ = CsDbKillsApi.prototype.get_randomDoc_sj9vaa$;
  CsDbKillsUixApi.prototype.get_ref_sj9vaa$ = CsDbKillsApi.prototype.get_ref_sj9vaa$;
  CsDbKillsUixApi.prototype.get_ref_aqty80$ = CsDbKillsApi.prototype.get_ref_aqty80$;
  CsDbKillsUixApi.prototype.get_snapshots_79y88y$ = CsDbKillsApi.prototype.get_snapshots_79y88y$;
  CsDbKillsUixApi.prototype.rx_y6x17j$ = CsDbKillsApi.prototype.rx_y6x17j$;
  CsDbKillsUixApi.prototype.rx_46ic4w$ = CsDbKillsApi.prototype.rx_46ic4w$;
  CsDbKillsUixApi.prototype.rx_wgabca$ = CsDbKillsApi.prototype.rx_wgabca$;
  CsDbKillsUixApi.prototype.rx_djv61p$ = CsDbKillsApi.prototype.rx_djv61p$;
  CsDbKillsUixApi.prototype.containsRx_1w65cx$ = CsDbKillsApi.prototype.containsRx_1w65cx$;
  CsDbKillsUixApi.prototype.delete_73z9b6$ = CsDbKillsApi.prototype.delete_73z9b6$;
  CsDbKillsUixApi.prototype.docs_prxdpg$ = CsDbKillsApi.prototype.docs_prxdpg$;
  CsDbKillsUixApi.prototype.documentChanges_z2kgpb$ = CsDbKillsApi.prototype.documentChanges_z2kgpb$;
  CsDbKillsUixApi.prototype.events_9k4h2$ = CsDbKillsApi.prototype.events_9k4h2$;
  CsDbKillsUixApi.prototype.feedTo_9o5f67$ = CsDbKillsApi.prototype.feedTo_9o5f67$;
  CsDbKillsUixApi.prototype.filter_hu0si9$ = CsDbKillsApi.prototype.filter_hu0si9$;
  CsDbKillsUixApi.prototype.filtered_tnde95$ = CsDbKillsApi.prototype.filtered_tnde95$;
  CsDbKillsUixApi.prototype.forEach_xwzbbo$ = CsDbKillsApi.prototype.forEach_xwzbbo$;
  CsDbKillsUixApi.prototype.forEach_35q7bt$ = CsDbKillsApi.prototype.forEach_35q7bt$;
  CsDbKillsUixApi.prototype.forEachLater_xwzbbo$ = CsDbKillsApi.prototype.forEachLater_xwzbbo$;
  CsDbKillsUixApi.prototype.fsCache_sj6zb3$$default = CsDbKillsApi.prototype.fsCache_sj6zb3$$default;
  CsDbKillsUixApi.prototype.fsCache_aujjp8$ = CsDbKillsApi.prototype.fsCache_aujjp8$;
  CsDbKillsUixApi.prototype.get_prxdpg$ = CsDbKillsApi.prototype.get_prxdpg$;
  CsDbKillsUixApi.prototype.incremented_eoy9qo$ = CsDbKillsApi.prototype.incremented_eoy9qo$;
  CsDbKillsUixApi.prototype.linked_n1nom7$ = CsDbKillsApi.prototype.linked_n1nom7$;
  CsDbKillsUixApi.prototype.listEvents_pujjsl$$default = CsDbKillsApi.prototype.listEvents_pujjsl$$default;
  CsDbKillsUixApi.prototype.listen_ubid8w$ = CsDbKillsApi.prototype.listen_ubid8w$;
  CsDbKillsUixApi.prototype.map_jtxi0h$ = CsDbKillsApi.prototype.map_jtxi0h$;
  CsDbKillsUixApi.prototype.mapLive_1mq1ue$ = CsDbKillsApi.prototype.mapLive_1mq1ue$;
  CsDbKillsUixApi.prototype.onChange_rlu5c6$ = CsDbKillsApi.prototype.onChange_rlu5c6$;
  CsDbKillsUixApi.prototype.onChange_oeam7t$ = KillsUixApi.prototype.onChange_oeam7t$;
  CsDbKillsUixApi.prototype.plusAssign_ubid8w$ = CsDbKillsApi.prototype.plusAssign_ubid8w$;
  CsDbKillsUixApi.prototype.process_y3juat$ = CsDbKillsApi.prototype.process_y3juat$;
  CsDbKillsUixApi.prototype.process_7xi3v7$ = CsDbKillsApi.prototype.process_7xi3v7$;
  CsDbKillsUixApi.prototype.query_wzkv1r$$default = CsDbKillsApi.prototype.query_wzkv1r$$default;
  CsDbKillsUixApi.prototype.remAssign_wgabca$ = CsDbKillsApi.prototype.remAssign_wgabca$;
  CsDbKillsUixApi.prototype.remAssign_djv61p$ = CsDbKillsApi.prototype.remAssign_djv61p$;
  CsDbKillsUixApi.prototype.remAssign_7fncnf$ = CsDbKillsApi.prototype.remAssign_7fncnf$;
  CsDbKillsUixApi.prototype.rxClass_c5yvvx$ = CsDbKillsApi.prototype.rxClass_c5yvvx$;
  CsDbKillsUixApi.prototype.rxClass_6sflyw$ = CsDbKillsApi.prototype.rxClass_6sflyw$;
  CsDbKillsUixApi.prototype.rxClass_9npl0m$ = KillsUixApi.prototype.rxClass_9npl0m$;
  CsDbKillsUixApi.prototype.rxClass_62ldac$ = KillsUixApi.prototype.rxClass_62ldac$;
  CsDbKillsUixApi.prototype.save_73z9b6$ = CsDbKillsApi.prototype.save_73z9b6$;
  CsDbKillsUixApi.prototype.toChannelLater_z5dyp2$ = CsDbKillsApi.prototype.toChannelLater_z5dyp2$;
  CsDbKillsUixApi.prototype.toList_pujjsl$$default = CsDbKillsApi.prototype.toList_pujjsl$$default;
  CsDbKillsUixApi.prototype.toRandomFsDoc_xc7wmg$ = CsDbKillsApi.prototype.toRandomFsDoc_xc7wmg$;
  CsDbKillsUixApi.prototype.toRx_on0lyu$ = CsDbKillsApi.prototype.toRx_on0lyu$;
  CsDbKillsUixApi.prototype.toRxSet_jr4bl4$ = CsDbKillsApi.prototype.toRxSet_jr4bl4$;
  CsDbKillsUixApi.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsApi.prototype.toSnapshotEvents_ecp0ut$;
  CsDbKillsUixApi.prototype.rxEditing_iwuu9m$$default = DbKillsApiCommonfb.prototype.rxEditing_iwuu9m$$default;
  CsDbKillsUixApi.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  CsDbKillsUixApi.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  CsDbKillsUixApi.prototype.get_routing_lqv1tx$ = KillsUixApi.prototype.get_routing_lqv1tx$;
  CsDbKillsUixApi.prototype.bind_zfaq6f$ = KillsUixApi.prototype.bind_zfaq6f$;
  CsDbKillsUixApi.prototype.bindValue_xy1r9h$ = KillsUixApi.prototype.bindValue_xy1r9h$;
  CsDbKillsUixApi.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  CsDbKillsUixApi.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  CsDbKillsUixApi.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  CsDbKillsUixApi.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  CsDbKillsUixApi.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  CsDbKillsUixApi.prototype.enabled_hlnvpg$ = KillsUixApi.prototype.enabled_hlnvpg$;
  CsDbKillsUixApi.prototype.on_2stdkb$ = KillsUixApi.prototype.on_2stdkb$;
  CsDbKillsUixApi.prototype.on_hgi4ad$ = KillsUixApi.prototype.on_hgi4ad$;
  CsDbKillsUixApi.prototype.onClick_pofl4w$ = KillsUixApi.prototype.onClick_pofl4w$;
  CsDbKillsUixApi.prototype.onInput_clfw57$ = KillsUixApi.prototype.onInput_clfw57$;
  CsDbKillsUixApi.prototype.runView_fpu3uh$ = KillsUixApi.prototype.runView_fpu3uh$;
  CsDbKillsUixApi.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  CsDbKillsUixApi.prototype.visibility_12lt6u$ = KillsUixApi.prototype.visibility_12lt6u$;
  CsDbKillsUixApi.prototype.visible_od9jl4$ = KillsUixApi.prototype.visible_od9jl4$;
  CsDbKillsUixApi.prototype.list_qlxt6c$ = CsApiCommonui.prototype.list_qlxt6c$;
  CsDbKillsUixApi.prototype.list_u1uvxv$ = CsApiCommonui.prototype.list_u1uvxv$;
  CsDbKillsUixApi.prototype.fsCache_sj6zb3$ = CsDbKillsApi.prototype.fsCache_sj6zb3$;
  CsDbKillsUixApi.prototype.listEvents_pujjsl$ = CsDbKillsApi.prototype.listEvents_pujjsl$;
  CsDbKillsUixApi.prototype.query_wzkv1r$ = CsDbKillsApi.prototype.query_wzkv1r$;
  CsDbKillsUixApi.prototype.toList_pujjsl$ = CsDbKillsApi.prototype.toList_pujjsl$;
  CsDbKillsUixApi.prototype.rxEditing_iwuu9m$ = DbKillsApiCommonfb.prototype.rxEditing_iwuu9m$;
  FBApi.prototype.get_ids_qko62t$ = CsDbKillsUixApi.prototype.get_ids_qko62t$;
  FBApi.prototype.get_live_73z9b6$ = CsDbKillsUixApi.prototype.get_live_73z9b6$;
  FBApi.prototype.get_oldKilled_vsdo34$ = CsDbKillsUixApi.prototype.get_oldKilled_vsdo34$;
  FBApi.prototype.get_oldKilledOpt_vsdo34$ = CsDbKillsUixApi.prototype.get_oldKilledOpt_vsdo34$;
  FBApi.prototype.get_randomDoc_sj9vaa$ = CsDbKillsUixApi.prototype.get_randomDoc_sj9vaa$;
  FBApi.prototype.get_ref_sj9vaa$ = CsDbKillsUixApi.prototype.get_ref_sj9vaa$;
  FBApi.prototype.get_ref_aqty80$ = CsDbKillsUixApi.prototype.get_ref_aqty80$;
  FBApi.prototype.get_snapshots_79y88y$ = CsDbKillsUixApi.prototype.get_snapshots_79y88y$;
  FBApi.prototype.rx_y6x17j$ = CsDbKillsUixApi.prototype.rx_y6x17j$;
  FBApi.prototype.rx_46ic4w$ = CsDbKillsUixApi.prototype.rx_46ic4w$;
  FBApi.prototype.rx_wgabca$ = CsDbKillsUixApi.prototype.rx_wgabca$;
  FBApi.prototype.rx_djv61p$ = CsDbKillsUixApi.prototype.rx_djv61p$;
  FBApi.prototype.containsRx_1w65cx$ = CsDbKillsUixApi.prototype.containsRx_1w65cx$;
  FBApi.prototype.delete_73z9b6$ = CsDbKillsUixApi.prototype.delete_73z9b6$;
  FBApi.prototype.docs_prxdpg$ = CsDbKillsUixApi.prototype.docs_prxdpg$;
  FBApi.prototype.documentChanges_z2kgpb$ = CsDbKillsUixApi.prototype.documentChanges_z2kgpb$;
  FBApi.prototype.events_9k4h2$ = CsDbKillsUixApi.prototype.events_9k4h2$;
  FBApi.prototype.feedTo_9o5f67$ = CsDbKillsUixApi.prototype.feedTo_9o5f67$;
  FBApi.prototype.filter_hu0si9$ = CsDbKillsUixApi.prototype.filter_hu0si9$;
  FBApi.prototype.filtered_tnde95$ = CsDbKillsUixApi.prototype.filtered_tnde95$;
  FBApi.prototype.forEach_xwzbbo$ = CsDbKillsUixApi.prototype.forEach_xwzbbo$;
  FBApi.prototype.forEach_35q7bt$ = CsDbKillsUixApi.prototype.forEach_35q7bt$;
  FBApi.prototype.forEachLater_xwzbbo$ = CsDbKillsUixApi.prototype.forEachLater_xwzbbo$;
  FBApi.prototype.fsCache_sj6zb3$$default = CsDbKillsUixApi.prototype.fsCache_sj6zb3$$default;
  FBApi.prototype.fsCache_aujjp8$ = CsDbKillsUixApi.prototype.fsCache_aujjp8$;
  FBApi.prototype.get_prxdpg$ = CsDbKillsUixApi.prototype.get_prxdpg$;
  FBApi.prototype.incremented_eoy9qo$ = CsDbKillsUixApi.prototype.incremented_eoy9qo$;
  FBApi.prototype.linked_n1nom7$ = CsDbKillsUixApi.prototype.linked_n1nom7$;
  FBApi.prototype.listEvents_pujjsl$$default = CsDbKillsUixApi.prototype.listEvents_pujjsl$$default;
  FBApi.prototype.listen_ubid8w$ = CsDbKillsUixApi.prototype.listen_ubid8w$;
  FBApi.prototype.map_jtxi0h$ = CsDbKillsUixApi.prototype.map_jtxi0h$;
  FBApi.prototype.mapLive_1mq1ue$ = CsDbKillsUixApi.prototype.mapLive_1mq1ue$;
  FBApi.prototype.onChange_rlu5c6$ = CsDbKillsUixApi.prototype.onChange_rlu5c6$;
  FBApi.prototype.onChange_oeam7t$ = CsDbKillsUixApi.prototype.onChange_oeam7t$;
  FBApi.prototype.plusAssign_ubid8w$ = CsDbKillsUixApi.prototype.plusAssign_ubid8w$;
  FBApi.prototype.process_y3juat$ = CsDbKillsUixApi.prototype.process_y3juat$;
  FBApi.prototype.process_7xi3v7$ = CsDbKillsUixApi.prototype.process_7xi3v7$;
  FBApi.prototype.query_wzkv1r$$default = CsDbKillsUixApi.prototype.query_wzkv1r$$default;
  FBApi.prototype.remAssign_wgabca$ = CsDbKillsUixApi.prototype.remAssign_wgabca$;
  FBApi.prototype.remAssign_djv61p$ = CsDbKillsUixApi.prototype.remAssign_djv61p$;
  FBApi.prototype.remAssign_7fncnf$ = CsDbKillsUixApi.prototype.remAssign_7fncnf$;
  FBApi.prototype.rxClass_c5yvvx$ = CsDbKillsUixApi.prototype.rxClass_c5yvvx$;
  FBApi.prototype.rxClass_6sflyw$ = CsDbKillsUixApi.prototype.rxClass_6sflyw$;
  FBApi.prototype.rxClass_9npl0m$ = CsDbKillsUixApi.prototype.rxClass_9npl0m$;
  FBApi.prototype.rxClass_62ldac$ = CsDbKillsUixApi.prototype.rxClass_62ldac$;
  FBApi.prototype.save_73z9b6$ = CsDbKillsUixApi.prototype.save_73z9b6$;
  FBApi.prototype.toChannelLater_z5dyp2$ = CsDbKillsUixApi.prototype.toChannelLater_z5dyp2$;
  FBApi.prototype.toList_pujjsl$$default = CsDbKillsUixApi.prototype.toList_pujjsl$$default;
  FBApi.prototype.toRandomFsDoc_xc7wmg$ = CsDbKillsUixApi.prototype.toRandomFsDoc_xc7wmg$;
  FBApi.prototype.toRx_on0lyu$ = CsDbKillsUixApi.prototype.toRx_on0lyu$;
  FBApi.prototype.toRxSet_jr4bl4$ = CsDbKillsUixApi.prototype.toRxSet_jr4bl4$;
  FBApi.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsUixApi.prototype.toSnapshotEvents_ecp0ut$;
  FBApi.prototype.rxEditing_iwuu9m$$default = CsDbKillsUixApi.prototype.rxEditing_iwuu9m$$default;
  FBApi.prototype.get_clickActivate_tvm2vp$ = CsDbKillsUixApi.prototype.get_clickActivate_tvm2vp$;
  FBApi.prototype.get_clickToggle_tvm2vp$ = CsDbKillsUixApi.prototype.get_clickToggle_tvm2vp$;
  FBApi.prototype.get_routing_lqv1tx$ = CsDbKillsUixApi.prototype.get_routing_lqv1tx$;
  FBApi.prototype.bind_zfaq6f$ = CsDbKillsUixApi.prototype.bind_zfaq6f$;
  FBApi.prototype.bindValue_xy1r9h$ = CsDbKillsUixApi.prototype.bindValue_xy1r9h$;
  FBApi.prototype.click_4eku4n$ = CsDbKillsUixApi.prototype.click_4eku4n$;
  FBApi.prototype.click_9375ex$ = CsDbKillsUixApi.prototype.click_9375ex$;
  FBApi.prototype.click_512jbc$ = CsDbKillsUixApi.prototype.click_512jbc$;
  FBApi.prototype.click_3zaxtq$ = CsDbKillsUixApi.prototype.click_3zaxtq$;
  FBApi.prototype.click_ts68bh$ = CsDbKillsUixApi.prototype.click_ts68bh$;
  FBApi.prototype.enabled_hlnvpg$ = CsDbKillsUixApi.prototype.enabled_hlnvpg$;
  FBApi.prototype.on_2stdkb$ = CsDbKillsUixApi.prototype.on_2stdkb$;
  FBApi.prototype.on_hgi4ad$ = CsDbKillsUixApi.prototype.on_hgi4ad$;
  FBApi.prototype.onClick_pofl4w$ = CsDbKillsUixApi.prototype.onClick_pofl4w$;
  FBApi.prototype.onInput_clfw57$ = CsDbKillsUixApi.prototype.onInput_clfw57$;
  FBApi.prototype.runView_fpu3uh$ = CsDbKillsUixApi.prototype.runView_fpu3uh$;
  FBApi.prototype.signOut_tstgz9$ = CsDbKillsUixApi.prototype.signOut_tstgz9$;
  FBApi.prototype.visibility_12lt6u$ = CsDbKillsUixApi.prototype.visibility_12lt6u$;
  FBApi.prototype.visible_od9jl4$ = CsDbKillsUixApi.prototype.visible_od9jl4$;
  FBApi.prototype.list_qlxt6c$ = CsDbKillsUixApi.prototype.list_qlxt6c$;
  FBApi.prototype.list_u1uvxv$ = CsDbKillsUixApi.prototype.list_u1uvxv$;
  FBApi.prototype.fsCache_sj6zb3$ = CsDbKillsUixApi.prototype.fsCache_sj6zb3$;
  FBApi.prototype.listEvents_pujjsl$ = CsDbKillsUixApi.prototype.listEvents_pujjsl$;
  FBApi.prototype.query_wzkv1r$ = CsDbKillsUixApi.prototype.query_wzkv1r$;
  FBApi.prototype.toList_pujjsl$ = CsDbKillsUixApi.prototype.toList_pujjsl$;
  FBApi.prototype.rxEditing_iwuu9m$ = CsDbKillsUixApi.prototype.rxEditing_iwuu9m$;
  CsDbFromKillsUixApi.prototype.get_ids_qko62t$ = CsDbKillsUixApi.prototype.get_ids_qko62t$;
  CsDbFromKillsUixApi.prototype.get_live_73z9b6$ = CsDbKillsUixApi.prototype.get_live_73z9b6$;
  CsDbFromKillsUixApi.prototype.get_oldKilled_vsdo34$ = CsDbKillsUixApi.prototype.get_oldKilled_vsdo34$;
  CsDbFromKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = CsDbKillsUixApi.prototype.get_oldKilledOpt_vsdo34$;
  CsDbFromKillsUixApi.prototype.get_randomDoc_sj9vaa$ = CsDbKillsUixApi.prototype.get_randomDoc_sj9vaa$;
  CsDbFromKillsUixApi.prototype.get_ref_sj9vaa$ = CsDbKillsUixApi.prototype.get_ref_sj9vaa$;
  CsDbFromKillsUixApi.prototype.get_ref_aqty80$ = CsDbKillsUixApi.prototype.get_ref_aqty80$;
  CsDbFromKillsUixApi.prototype.get_snapshots_79y88y$ = CsDbKillsUixApi.prototype.get_snapshots_79y88y$;
  CsDbFromKillsUixApi.prototype.rx_y6x17j$ = CsDbKillsUixApi.prototype.rx_y6x17j$;
  CsDbFromKillsUixApi.prototype.rx_46ic4w$ = CsDbKillsUixApi.prototype.rx_46ic4w$;
  CsDbFromKillsUixApi.prototype.rx_wgabca$ = CsDbKillsUixApi.prototype.rx_wgabca$;
  CsDbFromKillsUixApi.prototype.rx_djv61p$ = CsDbKillsUixApi.prototype.rx_djv61p$;
  CsDbFromKillsUixApi.prototype.containsRx_1w65cx$ = CsDbKillsUixApi.prototype.containsRx_1w65cx$;
  CsDbFromKillsUixApi.prototype.delete_73z9b6$ = CsDbKillsUixApi.prototype.delete_73z9b6$;
  CsDbFromKillsUixApi.prototype.docs_prxdpg$ = CsDbKillsUixApi.prototype.docs_prxdpg$;
  CsDbFromKillsUixApi.prototype.documentChanges_z2kgpb$ = CsDbKillsUixApi.prototype.documentChanges_z2kgpb$;
  CsDbFromKillsUixApi.prototype.events_9k4h2$ = CsDbKillsUixApi.prototype.events_9k4h2$;
  CsDbFromKillsUixApi.prototype.feedTo_9o5f67$ = CsDbKillsUixApi.prototype.feedTo_9o5f67$;
  CsDbFromKillsUixApi.prototype.filter_hu0si9$ = CsDbKillsUixApi.prototype.filter_hu0si9$;
  CsDbFromKillsUixApi.prototype.filtered_tnde95$ = CsDbKillsUixApi.prototype.filtered_tnde95$;
  CsDbFromKillsUixApi.prototype.forEach_xwzbbo$ = CsDbKillsUixApi.prototype.forEach_xwzbbo$;
  CsDbFromKillsUixApi.prototype.forEach_35q7bt$ = CsDbKillsUixApi.prototype.forEach_35q7bt$;
  CsDbFromKillsUixApi.prototype.forEachLater_xwzbbo$ = CsDbKillsUixApi.prototype.forEachLater_xwzbbo$;
  CsDbFromKillsUixApi.prototype.fsCache_sj6zb3$$default = CsDbKillsUixApi.prototype.fsCache_sj6zb3$$default;
  CsDbFromKillsUixApi.prototype.fsCache_aujjp8$ = CsDbKillsUixApi.prototype.fsCache_aujjp8$;
  CsDbFromKillsUixApi.prototype.get_prxdpg$ = CsDbKillsUixApi.prototype.get_prxdpg$;
  CsDbFromKillsUixApi.prototype.incremented_eoy9qo$ = CsDbKillsUixApi.prototype.incremented_eoy9qo$;
  CsDbFromKillsUixApi.prototype.linked_n1nom7$ = CsDbKillsUixApi.prototype.linked_n1nom7$;
  CsDbFromKillsUixApi.prototype.listEvents_pujjsl$$default = CsDbKillsUixApi.prototype.listEvents_pujjsl$$default;
  CsDbFromKillsUixApi.prototype.listen_ubid8w$ = CsDbKillsUixApi.prototype.listen_ubid8w$;
  CsDbFromKillsUixApi.prototype.map_jtxi0h$ = CsDbKillsUixApi.prototype.map_jtxi0h$;
  CsDbFromKillsUixApi.prototype.mapLive_1mq1ue$ = CsDbKillsUixApi.prototype.mapLive_1mq1ue$;
  CsDbFromKillsUixApi.prototype.onChange_rlu5c6$ = CsDbKillsUixApi.prototype.onChange_rlu5c6$;
  CsDbFromKillsUixApi.prototype.onChange_oeam7t$ = CsDbKillsUixApi.prototype.onChange_oeam7t$;
  CsDbFromKillsUixApi.prototype.plusAssign_ubid8w$ = CsDbKillsUixApi.prototype.plusAssign_ubid8w$;
  CsDbFromKillsUixApi.prototype.process_y3juat$ = CsDbKillsUixApi.prototype.process_y3juat$;
  CsDbFromKillsUixApi.prototype.process_7xi3v7$ = CsDbKillsUixApi.prototype.process_7xi3v7$;
  CsDbFromKillsUixApi.prototype.query_wzkv1r$$default = CsDbKillsUixApi.prototype.query_wzkv1r$$default;
  CsDbFromKillsUixApi.prototype.remAssign_wgabca$ = CsDbKillsUixApi.prototype.remAssign_wgabca$;
  CsDbFromKillsUixApi.prototype.remAssign_djv61p$ = CsDbKillsUixApi.prototype.remAssign_djv61p$;
  CsDbFromKillsUixApi.prototype.remAssign_7fncnf$ = CsDbKillsUixApi.prototype.remAssign_7fncnf$;
  CsDbFromKillsUixApi.prototype.rxClass_c5yvvx$ = CsDbKillsUixApi.prototype.rxClass_c5yvvx$;
  CsDbFromKillsUixApi.prototype.rxClass_6sflyw$ = CsDbKillsUixApi.prototype.rxClass_6sflyw$;
  CsDbFromKillsUixApi.prototype.rxClass_9npl0m$ = CsDbKillsUixApi.prototype.rxClass_9npl0m$;
  CsDbFromKillsUixApi.prototype.rxClass_62ldac$ = CsDbKillsUixApi.prototype.rxClass_62ldac$;
  CsDbFromKillsUixApi.prototype.save_73z9b6$ = CsDbKillsUixApi.prototype.save_73z9b6$;
  CsDbFromKillsUixApi.prototype.toChannelLater_z5dyp2$ = CsDbKillsUixApi.prototype.toChannelLater_z5dyp2$;
  CsDbFromKillsUixApi.prototype.toList_pujjsl$$default = CsDbKillsUixApi.prototype.toList_pujjsl$$default;
  CsDbFromKillsUixApi.prototype.toRandomFsDoc_xc7wmg$ = CsDbKillsUixApi.prototype.toRandomFsDoc_xc7wmg$;
  CsDbFromKillsUixApi.prototype.toRx_on0lyu$ = CsDbKillsUixApi.prototype.toRx_on0lyu$;
  CsDbFromKillsUixApi.prototype.toRxSet_jr4bl4$ = CsDbKillsUixApi.prototype.toRxSet_jr4bl4$;
  CsDbFromKillsUixApi.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsUixApi.prototype.toSnapshotEvents_ecp0ut$;
  CsDbFromKillsUixApi.prototype.rxEditing_iwuu9m$$default = CsDbKillsUixApi.prototype.rxEditing_iwuu9m$$default;
  CsDbFromKillsUixApi.prototype.get_clickActivate_tvm2vp$ = CsDbKillsUixApi.prototype.get_clickActivate_tvm2vp$;
  CsDbFromKillsUixApi.prototype.get_clickToggle_tvm2vp$ = CsDbKillsUixApi.prototype.get_clickToggle_tvm2vp$;
  CsDbFromKillsUixApi.prototype.get_routing_lqv1tx$ = CsDbKillsUixApi.prototype.get_routing_lqv1tx$;
  CsDbFromKillsUixApi.prototype.bind_zfaq6f$ = CsDbKillsUixApi.prototype.bind_zfaq6f$;
  CsDbFromKillsUixApi.prototype.bindValue_xy1r9h$ = CsDbKillsUixApi.prototype.bindValue_xy1r9h$;
  CsDbFromKillsUixApi.prototype.click_4eku4n$ = CsDbKillsUixApi.prototype.click_4eku4n$;
  CsDbFromKillsUixApi.prototype.click_9375ex$ = CsDbKillsUixApi.prototype.click_9375ex$;
  CsDbFromKillsUixApi.prototype.click_512jbc$ = CsDbKillsUixApi.prototype.click_512jbc$;
  CsDbFromKillsUixApi.prototype.click_3zaxtq$ = CsDbKillsUixApi.prototype.click_3zaxtq$;
  CsDbFromKillsUixApi.prototype.click_ts68bh$ = CsDbKillsUixApi.prototype.click_ts68bh$;
  CsDbFromKillsUixApi.prototype.enabled_hlnvpg$ = CsDbKillsUixApi.prototype.enabled_hlnvpg$;
  CsDbFromKillsUixApi.prototype.on_2stdkb$ = CsDbKillsUixApi.prototype.on_2stdkb$;
  CsDbFromKillsUixApi.prototype.on_hgi4ad$ = CsDbKillsUixApi.prototype.on_hgi4ad$;
  CsDbFromKillsUixApi.prototype.onClick_pofl4w$ = CsDbKillsUixApi.prototype.onClick_pofl4w$;
  CsDbFromKillsUixApi.prototype.onInput_clfw57$ = CsDbKillsUixApi.prototype.onInput_clfw57$;
  CsDbFromKillsUixApi.prototype.runView_fpu3uh$ = CsDbKillsUixApi.prototype.runView_fpu3uh$;
  CsDbFromKillsUixApi.prototype.signOut_tstgz9$ = CsDbKillsUixApi.prototype.signOut_tstgz9$;
  CsDbFromKillsUixApi.prototype.visibility_12lt6u$ = CsDbKillsUixApi.prototype.visibility_12lt6u$;
  CsDbFromKillsUixApi.prototype.visible_od9jl4$ = CsDbKillsUixApi.prototype.visible_od9jl4$;
  CsDbFromKillsUixApi.prototype.list_qlxt6c$ = CsDbKillsUixApi.prototype.list_qlxt6c$;
  CsDbFromKillsUixApi.prototype.list_u1uvxv$ = CsDbKillsUixApi.prototype.list_u1uvxv$;
  CsDbFromKillsUixApi.prototype.get_backButton_tdhe4g$ = FromKillsUixApi.prototype.get_backButton_tdhe4g$;
  CsDbFromKillsUixApi.prototype.get_backButton_ihoiae$ = FromKillsUixApi.prototype.get_backButton_ihoiae$;
  CsDbFromKillsUixApi.prototype.fsCache_sj6zb3$ = CsDbKillsUixApi.prototype.fsCache_sj6zb3$;
  CsDbFromKillsUixApi.prototype.listEvents_pujjsl$ = CsDbKillsUixApi.prototype.listEvents_pujjsl$;
  CsDbFromKillsUixApi.prototype.query_wzkv1r$ = CsDbKillsUixApi.prototype.query_wzkv1r$;
  CsDbFromKillsUixApi.prototype.toList_pujjsl$ = CsDbKillsUixApi.prototype.toList_pujjsl$;
  CsDbFromKillsUixApi.prototype.rxEditing_iwuu9m$ = CsDbKillsUixApi.prototype.rxEditing_iwuu9m$;
  FBFromApi.prototype.get_ids_qko62t$ = FBApi.prototype.get_ids_qko62t$;
  FBFromApi.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  FBFromApi.prototype.get_oldKilled_vsdo34$ = FBApi.prototype.get_oldKilled_vsdo34$;
  FBFromApi.prototype.get_oldKilledOpt_vsdo34$ = FBApi.prototype.get_oldKilledOpt_vsdo34$;
  FBFromApi.prototype.get_randomDoc_sj9vaa$ = FBApi.prototype.get_randomDoc_sj9vaa$;
  FBFromApi.prototype.get_ref_sj9vaa$ = FBApi.prototype.get_ref_sj9vaa$;
  FBFromApi.prototype.get_ref_aqty80$ = FBApi.prototype.get_ref_aqty80$;
  FBFromApi.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  FBFromApi.prototype.rx_y6x17j$ = FBApi.prototype.rx_y6x17j$;
  FBFromApi.prototype.rx_46ic4w$ = FBApi.prototype.rx_46ic4w$;
  FBFromApi.prototype.rx_wgabca$ = FBApi.prototype.rx_wgabca$;
  FBFromApi.prototype.rx_djv61p$ = FBApi.prototype.rx_djv61p$;
  FBFromApi.prototype.containsRx_1w65cx$ = FBApi.prototype.containsRx_1w65cx$;
  FBFromApi.prototype.delete_73z9b6$ = FBApi.prototype.delete_73z9b6$;
  FBFromApi.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  FBFromApi.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  FBFromApi.prototype.events_9k4h2$ = FBApi.prototype.events_9k4h2$;
  FBFromApi.prototype.feedTo_9o5f67$ = FBApi.prototype.feedTo_9o5f67$;
  FBFromApi.prototype.filter_hu0si9$ = FBApi.prototype.filter_hu0si9$;
  FBFromApi.prototype.filtered_tnde95$ = FBApi.prototype.filtered_tnde95$;
  FBFromApi.prototype.forEach_xwzbbo$ = FBApi.prototype.forEach_xwzbbo$;
  FBFromApi.prototype.forEach_35q7bt$ = FBApi.prototype.forEach_35q7bt$;
  FBFromApi.prototype.forEachLater_xwzbbo$ = FBApi.prototype.forEachLater_xwzbbo$;
  FBFromApi.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  FBFromApi.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  FBFromApi.prototype.get_prxdpg$ = FBApi.prototype.get_prxdpg$;
  FBFromApi.prototype.incremented_eoy9qo$ = FBApi.prototype.incremented_eoy9qo$;
  FBFromApi.prototype.linked_n1nom7$ = FBApi.prototype.linked_n1nom7$;
  FBFromApi.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  FBFromApi.prototype.listen_ubid8w$ = FBApi.prototype.listen_ubid8w$;
  FBFromApi.prototype.map_jtxi0h$ = FBApi.prototype.map_jtxi0h$;
  FBFromApi.prototype.mapLive_1mq1ue$ = FBApi.prototype.mapLive_1mq1ue$;
  FBFromApi.prototype.onChange_rlu5c6$ = FBApi.prototype.onChange_rlu5c6$;
  FBFromApi.prototype.onChange_oeam7t$ = FBApi.prototype.onChange_oeam7t$;
  FBFromApi.prototype.plusAssign_ubid8w$ = FBApi.prototype.plusAssign_ubid8w$;
  FBFromApi.prototype.process_y3juat$ = FBApi.prototype.process_y3juat$;
  FBFromApi.prototype.process_7xi3v7$ = FBApi.prototype.process_7xi3v7$;
  FBFromApi.prototype.query_wzkv1r$$default = FBApi.prototype.query_wzkv1r$$default;
  FBFromApi.prototype.remAssign_wgabca$ = FBApi.prototype.remAssign_wgabca$;
  FBFromApi.prototype.remAssign_djv61p$ = FBApi.prototype.remAssign_djv61p$;
  FBFromApi.prototype.remAssign_7fncnf$ = FBApi.prototype.remAssign_7fncnf$;
  FBFromApi.prototype.rxClass_c5yvvx$ = FBApi.prototype.rxClass_c5yvvx$;
  FBFromApi.prototype.rxClass_6sflyw$ = FBApi.prototype.rxClass_6sflyw$;
  FBFromApi.prototype.rxClass_9npl0m$ = FBApi.prototype.rxClass_9npl0m$;
  FBFromApi.prototype.rxClass_62ldac$ = FBApi.prototype.rxClass_62ldac$;
  FBFromApi.prototype.save_73z9b6$ = FBApi.prototype.save_73z9b6$;
  FBFromApi.prototype.toChannelLater_z5dyp2$ = FBApi.prototype.toChannelLater_z5dyp2$;
  FBFromApi.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  FBFromApi.prototype.toRandomFsDoc_xc7wmg$ = FBApi.prototype.toRandomFsDoc_xc7wmg$;
  FBFromApi.prototype.toRx_on0lyu$ = FBApi.prototype.toRx_on0lyu$;
  FBFromApi.prototype.toRxSet_jr4bl4$ = FBApi.prototype.toRxSet_jr4bl4$;
  FBFromApi.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  FBFromApi.prototype.rxEditing_iwuu9m$$default = FBApi.prototype.rxEditing_iwuu9m$$default;
  FBFromApi.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  FBFromApi.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  FBFromApi.prototype.get_routing_lqv1tx$ = FBApi.prototype.get_routing_lqv1tx$;
  FBFromApi.prototype.bind_zfaq6f$ = FBApi.prototype.bind_zfaq6f$;
  FBFromApi.prototype.bindValue_xy1r9h$ = FBApi.prototype.bindValue_xy1r9h$;
  FBFromApi.prototype.click_4eku4n$ = FBApi.prototype.click_4eku4n$;
  FBFromApi.prototype.click_9375ex$ = FBApi.prototype.click_9375ex$;
  FBFromApi.prototype.click_512jbc$ = FBApi.prototype.click_512jbc$;
  FBFromApi.prototype.click_3zaxtq$ = FBApi.prototype.click_3zaxtq$;
  FBFromApi.prototype.click_ts68bh$ = FBApi.prototype.click_ts68bh$;
  FBFromApi.prototype.enabled_hlnvpg$ = FBApi.prototype.enabled_hlnvpg$;
  FBFromApi.prototype.on_2stdkb$ = FBApi.prototype.on_2stdkb$;
  FBFromApi.prototype.on_hgi4ad$ = FBApi.prototype.on_hgi4ad$;
  FBFromApi.prototype.onClick_pofl4w$ = FBApi.prototype.onClick_pofl4w$;
  FBFromApi.prototype.onInput_clfw57$ = FBApi.prototype.onInput_clfw57$;
  FBFromApi.prototype.runView_fpu3uh$ = FBApi.prototype.runView_fpu3uh$;
  FBFromApi.prototype.signOut_tstgz9$ = FBApi.prototype.signOut_tstgz9$;
  FBFromApi.prototype.visibility_12lt6u$ = FBApi.prototype.visibility_12lt6u$;
  FBFromApi.prototype.visible_od9jl4$ = FBApi.prototype.visible_od9jl4$;
  FBFromApi.prototype.list_qlxt6c$ = FBApi.prototype.list_qlxt6c$;
  FBFromApi.prototype.list_u1uvxv$ = FBApi.prototype.list_u1uvxv$;
  FBFromApi.prototype.get_backButton_tdhe4g$ = CsDbFromKillsUixApi.prototype.get_backButton_tdhe4g$;
  FBFromApi.prototype.get_backButton_ihoiae$ = CsDbFromKillsUixApi.prototype.get_backButton_ihoiae$;
  FBFromApi.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  FBFromApi.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  FBFromApi.prototype.query_wzkv1r$ = FBApi.prototype.query_wzkv1r$;
  FBFromApi.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  FBFromApi.prototype.rxEditing_iwuu9m$ = FBApi.prototype.rxEditing_iwuu9m$;
  isFcmSupported = lazy(isFcmSupported$lambda);
  Kotlin.defineModule('appsimake-commonfb', _);
  return _;
}(typeof this['appsimake-commonfb'] === 'undefined' ? {} : this['appsimake-commonfb'], kotlin, this['appsimake-commonshr'], this['appsimake-firebase'], this['appsimake-commonui'], this['kotlinx-coroutines-core'], this['appsimake-fontawesome'], this['appsimake-domx'], this['appsimake-bootstrap']);

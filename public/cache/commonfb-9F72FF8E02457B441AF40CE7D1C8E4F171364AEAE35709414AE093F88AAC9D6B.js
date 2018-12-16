if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'commonfb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'commonfb'.");
}
if (typeof firebase === 'undefined') {
  throw new Error("Error loading module 'commonfb'. Its dependency 'firebase' was not found. Please, check whether 'firebase' is loaded prior to 'commonfb'.");
}
if (typeof commonui === 'undefined') {
  throw new Error("Error loading module 'commonfb'. Its dependency 'commonui' was not found. Please, check whether 'commonui' is loaded prior to 'commonfb'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'commonfb'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'commonfb'.");
}
var commonfb = function (_, Kotlin, $module$firebase, $module$commonui, $module$common) {
  'use strict';
  var AppOptions = $module$firebase.firebase.AppOptions;
  var Unit = Kotlin.kotlin.Unit;
  var initializeApp = firebase.initializeApp;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var firestore = $module$firebase.firebase.app.firestore_c7ogsi$;
  var withDefaultSettings = $module$firebase.firebase.firestore.withDefaultSettings_gwf93m$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var AppCtx = $module$commonui.commonui.AppCtx;
  var StateMachine = $module$common.common.StateMachine;
  var Login = $module$firebase.firebaseui.Login;
  var State = $module$common.common.State;
  LoginProcessState.prototype = Object.create(State.prototype);
  LoginProcessState.prototype.constructor = LoginProcessState;
  LoggedUnknown.prototype = Object.create(LoginProcessState.prototype);
  LoggedUnknown.prototype.constructor = LoggedUnknown;
  LoggedOut.prototype = Object.create(LoginProcessState.prototype);
  LoggedOut.prototype.constructor = LoggedOut;
  LoggedIn.prototype = Object.create(LoginProcessState.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  function FbCtx(appCtx, name) {
    this.appCtx = appCtx;
    this.app_u25537$_0 = lazy(FbCtx$app$lambda);
    this.db_qixv9q$_0 = lazy(FbCtx$db$lambda(this));
    this.auth_8g1z48$_0 = lazy(FbCtx$auth$lambda(this));
    this.baseRef_trde4e$_0 = lazy(FbCtx$baseRef$lambda(this, name));
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
  function FbCtx$baseRef$lambda(this$FbCtx, closure$name) {
    return function () {
      return this$FbCtx.db.collection('apps').doc(closure$name);
    };
  }
  function FbCtx$singletonsRef$lambda(this$FbCtx) {
    return function () {
      return this$FbCtx.baseRef.collection('singletons');
    };
  }
  FbCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FbCtx',
    interfaces: []
  };
  function FbCtx_init(name, $this) {
    $this = $this || Object.create(FbCtx.prototype);
    FbCtx.call($this, new AppCtx(), name);
    return $this;
  }
  function LoggedInCtx(fbCtx, user) {
    this.fbCtx = fbCtx;
    this.user = user;
    this.privateRef = this.fbCtx.baseRef.collection('private').doc(this.user.uid);
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
    this.login_ay5xxn$_0.loginUi_2rdptt$(this.appCtx.root.newRoot_iw61es$());
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
  function LoggingInCtx_init(name, $this) {
    $this = $this || Object.create(LoggingInCtx.prototype);
    LoggingInCtx.call($this, FbCtx_init(name));
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
  package$commonfb.FbCtx_init_61zpoe$ = FbCtx_init;
  package$commonfb.FbCtx = FbCtx;
  package$commonfb.LoggedInCtx = LoggedInCtx;
  package$commonfb.LoggingInCtx_init_61zpoe$ = LoggingInCtx_init;
  package$commonfb.LoggingInCtx = LoggingInCtx;
  package$commonfb.LoginProcessState = LoginProcessState;
  package$commonfb.LoggedUnknown = LoggedUnknown;
  package$commonfb.LoggedOut = LoggedOut;
  package$commonfb.LoggedIn = LoggedIn;
  Kotlin.defineModule('commonfb', _);
  return _;
}(typeof commonfb === 'undefined' ? {} : commonfb, kotlin, firebase, commonui, common);

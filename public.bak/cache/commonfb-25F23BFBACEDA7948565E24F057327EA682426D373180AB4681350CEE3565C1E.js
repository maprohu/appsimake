if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'commonfb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'commonfb'.");
}
if (typeof firebase === 'undefined') {
  throw new Error("Error loading module 'commonfb'. Its dependency 'firebase' was not found. Please, check whether 'firebase' is loaded prior to 'commonfb'.");
}
if (typeof bootstrap === 'undefined') {
  throw new Error("Error loading module 'commonfb'. Its dependency 'bootstrap' was not found. Please, check whether 'bootstrap' is loaded prior to 'commonfb'.");
}
if (typeof common === 'undefined') {
  throw new Error("Error loading module 'commonfb'. Its dependency 'common' was not found. Please, check whether 'common' is loaded prior to 'commonfb'.");
}
if (typeof fontawesome === 'undefined') {
  throw new Error("Error loading module 'commonfb'. Its dependency 'fontawesome' was not found. Please, check whether 'fontawesome' is loaded prior to 'commonfb'.");
}
var commonfb = function (_, Kotlin, $module$firebase, $module$bootstrap, $module$common, $module$fontawesome) {
  'use strict';
  var AppOptions = $module$firebase.firebase.AppOptions;
  var Unit = Kotlin.kotlin.Unit;
  var initializeApp = firebase.initializeApp;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var setupFullScreen = $module$bootstrap.bootstrap.setupFullScreen;
  var Login = $module$firebase.firebaseui.Login;
  var firestore = $module$firebase.firebase.app.firestore_c7ogsi$;
  var withDefaultSettings = $module$firebase.firebase.firestore.withDefaultSettings_gwf93m$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var getCallableRef = Kotlin.getCallableRef;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var setTo = $module$common.killable.setTo_q8k02p$;
  var flexGrow1 = $module$bootstrap.bootstrap.flexGrow1_ejp6nk$;
  var column = $module$bootstrap.bootstrap.column_gnmiz0$;
  var flexCenter = $module$bootstrap.bootstrap.flexCenter_ejp6nk$;
  var spinner = $module$fontawesome.fontawesome.spinner_asww5s$;
  var KillableSeq = $module$common.killable.KillableSeq;
  function app$lambda() {
    var $receiver = AppOptions();
    $receiver.apiKey = 'AIzaSyCk4evdCJvWCYS8GpodbBotuYfebdwbqHE';
    $receiver.authDomain = 'pullanapp.firebaseapp.com';
    $receiver.databaseURL = 'https://pullanapp.firebaseio.com';
    $receiver.projectId = 'pullanapp';
    $receiver.storageBucket = 'pullanapp.appspot.com';
    $receiver.messagingSenderId = '778902419215';
    return initializeApp($receiver);
  }
  var app;
  function get_app() {
    return app.value;
  }
  function CommonApp(name) {
    this.db = withDefaultSettings(firestore(get_app()));
    this.baseRef = this.db.collection('apps').doc(name);
    this.root = new RootPanel(ensureNotNull(document.body));
    this.newRoot = getCallableRef('newRoot', function ($receiver, fn) {
      return $receiver.newRoot_iw61es$(fn);
    }.bind(null, this.root));
  }
  CommonApp.prototype.signOut = function () {
    this.root.setHourglass();
    get_app().auth().signOut();
  };
  function CommonApp$start$lambda() {
    return new Login();
  }
  function CommonApp$start$lambda$lambda($receiver) {
    return Unit;
  }
  function CommonApp$start$lambda_0(closure$login, this$CommonApp) {
    return function (user) {
      if (user == null) {
        closure$login.value.loginUi_2rdptt$(this$CommonApp.newRoot(CommonApp$start$lambda$lambda));
      }
       else {
        this$CommonApp.loggedIn_v1eir6$(user);
      }
      return Unit;
    };
  }
  CommonApp.prototype.start = function () {
    setupFullScreen();
    this.root.setHourglass();
    var login = lazy(CommonApp$start$lambda);
    get_app().auth().onAuthStateChanged(CommonApp$start$lambda_0(login, this));
  };
  CommonApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonApp',
    interfaces: []
  };
  function RootPanel(container) {
    this.container_0 = container;
    this.currentRoot_0 = new KillableSeq();
  }
  RootPanel.prototype.setAsRoot_0 = function ($receiver) {
    this.setRoot_b3w3xb$($receiver);
  };
  RootPanel.prototype.setRoot_b3w3xb$ = function (node) {
    setTo(node, this.currentRoot_0);
    this.container_0.appendChild(node);
  };
  function RootPanel$newRoot$lambda($receiver) {
    return Unit;
  }
  function RootPanel$newRoot$lambda_0(this$RootPanel, closure$fn) {
    return function ($receiver) {
      this$RootPanel.setAsRoot_0($receiver);
      flexGrow1($receiver);
      closure$fn($receiver);
      return Unit;
    };
  }
  RootPanel.prototype.newRoot_iw61es$ = function (fn) {
    if (fn === void 0)
      fn = RootPanel$newRoot$lambda;
    return column(document, RootPanel$newRoot$lambda_0(this, fn));
  };
  function RootPanel$setHourglass$lambda($receiver) {
    flexCenter($receiver);
    spinner($receiver);
    return Unit;
  }
  RootPanel.prototype.setHourglass = function () {
    this.newRoot_iw61es$(RootPanel$setHourglass$lambda);
  };
  RootPanel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootPanel',
    interfaces: []
  };
  function setToRoot($receiver, panel) {
    panel.setRoot_b3w3xb$($receiver);
  }
  var package$commonui = _.commonui || (_.commonui = {});
  Object.defineProperty(package$commonui, 'app', {
    get: get_app
  });
  package$commonui.CommonApp = CommonApp;
  var package$commonfb = _.commonfb || (_.commonfb = {});
  package$commonfb.RootPanel = RootPanel;
  package$commonfb.setToRoot_kkdnud$ = setToRoot;
  app = lazy(app$lambda);
  Kotlin.defineModule('commonfb', _);
  return _;
}(typeof commonfb === 'undefined' ? {} : commonfb, kotlin, firebase, bootstrap, common, fontawesome);

//# sourceMappingURL=commonfb.js.map

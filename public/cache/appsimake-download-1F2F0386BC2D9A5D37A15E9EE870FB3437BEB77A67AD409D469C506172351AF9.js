if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-download'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-downloadlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-downloadlib' was not found. Please, check whether 'appsimake-downloadlib' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-download'.");
}
this['appsimake-download'] = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$appsimake_commonfb, $module$appsimake_commonui, $module$appsimake_firebase, $module$appsimake_common, $module$appsimake_downloadlib, $module$appsimake_commonshr, $module$appsimake_fontawesome, $module$appsimake_domx, $module$appsimake_bootstrap) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var commonfb = $module$appsimake_commonfb.commonfb;
  var enablePersistenceAndWait = $module$appsimake_commonfb.commonfb.loginbase.enablePersistenceAndWait_gwf93m$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var BodyPath = $module$appsimake_commonui.commonui.widget.BodyPath;
  var HasDb = $module$appsimake_firebase.firebase.HasDb;
  var LoginOnly = $module$appsimake_commonfb.commonfb.loginbase.LoginOnly;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_escape = $module$appsimake_common.common.get_escape_pdl1vz$;
  var DownloadItem = $module$appsimake_downloadlib.download.DownloadItem;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_e53g6m$;
  var CsKillsView = $module$appsimake_commonui.commonui.CsKillsView;
  var UserState$LoggedIn = $module$appsimake_commonfb.commonfb.UserState.LoggedIn;
  var download = $module$appsimake_downloadlib.download;
  var get_private = $module$appsimake_commonshr.commonshr.get_private_py8usb$;
  var get_items = $module$appsimake_downloadlib.download.get_items_x4imip$;
  var get_process = $module$appsimake_downloadlib.download.get_process_x4imip$;
  var commonui = $module$appsimake_commonui.commonui;
  var UserStateView = $module$appsimake_commonfb.commonfb.loginbase.UserStateView;
  var FBApi = $module$appsimake_commonfb.commonfb.FBApi;
  var widget = $module$appsimake_commonui.commonui.widget;
  var get_signOutAlt = $module$appsimake_fontawesome.fontawesome.get_signOutAlt_xml72e$;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var get_form = $module$appsimake_domx.domx.get_form_asww5s$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_inputGroup = $module$appsimake_bootstrap.bootstrap.get_inputGroup_kre7dp$;
  var get_widthAuto = $module$appsimake_domx.styles.get_widthAuto_kre7dp$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_inputGroupAppend = $module$appsimake_bootstrap.bootstrap.get_inputGroupAppend_kre7dp$;
  var get_btnOutlineSecondary = $module$appsimake_bootstrap.bootstrap.get_btnOutlineSecondary_kre7dp$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var get_button = $module$appsimake_domx.domx.get_button_asww5s$;
  var get_borderTop = $module$appsimake_bootstrap.bootstrap.get_borderTop_kre7dp$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_h6 = $module$appsimake_domx.domx.get_h6_asww5s$;
  var get_listGroupItem = $module$appsimake_bootstrap.bootstrap.get_listGroupItem_kre7dp$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_alignSelfCenter = $module$appsimake_bootstrap.bootstrap.get_alignSelfCenter_kre7dp$;
  var get_fontItalic = $module$appsimake_bootstrap.bootstrap.get_fontItalic_kre7dp$;
  var column_0 = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_trashAlt = $module$appsimake_fontawesome.fontawesome.get_trashAlt_xml72e$;
  var row = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var DownloadProcess = $module$appsimake_downloadlib.download.DownloadProcess;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  Home.prototype = Object.create(LoginOnly.prototype);
  Home.prototype.constructor = Home;
  LoggedIn.prototype = Object.create(CsKillsView.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  var Loading_init = $module$appsimake_commonui.commonui.widget.Loading;
  var Body_init = $module$appsimake_commonui.commonui.widget.Body;
  var CancellationException = $module$appsimake_commonui.$$importsForInline$$['kotlinx-coroutines-core'].kotlinx.coroutines.CancellationException;
  var reportd = $module$appsimake_commonui.$$importsForInline$$['appsimake-commonshr'].commonshr.reportd_za3rmp$;
  function Coroutine$main$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$$receiver = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$app = void 0;
    this.local$db = void 0;
  }
  Coroutine$main$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda.prototype.constructor = Coroutine$main$lambda;
  Coroutine$main$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            var loading = new Loading_init();
            commonui.APP.startRegisteringServiceWorker();
            this.local$$receiver = new Body_init(loading.target);
            this.local$tmp$ = this.local$$receiver.hole;
            this.local$tmp$_0 = this.local$tmp$.remAssign_looze4$;
            this.local$app = commonfb.FB.app;
            this.local$db = commonfb.FB.db;
            this.state_0 = 1;
            this.result_0 = enablePersistenceAndWait(this.local$db, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$tmp$_0.call(this.local$tmp$, new Home(this.local$$receiver, this.local$app, this.local$db));
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e_0 = this.exception_0;
            if (Kotlin.isType(e_0, CancellationException)) {
              throw e_0;
            }
             else {
              commonui.globalStatus.remAssign_11rb$('Error: ' + e_0.toString());
              reportd(e_0);
              throw e_0;
            }

          case 3:
            return Unit;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  function main$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main() {
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda);
  }
  function HomePath() {
  }
  HomePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HomePath',
    interfaces: [HasDb, BodyPath]
  };
  function Home(body, app, db) {
    LoginOnly.call(this, body);
    this.app = app;
    this.db_nxnkiy$_0 = db;
    this.$delegate_rb58so$_0 = body;
    this.home_corfrp$_0 = this;
    this.auth = this.app.auth();
    launch(this, void 0, void 0, Home_init$lambda(this));
  }
  Object.defineProperty(Home.prototype, 'db', {
    get: function () {
      return this.db_nxnkiy$_0;
    }
  });
  Object.defineProperty(Home.prototype, 'home', {
    get: function () {
      return this.home_corfrp$_0;
    }
  });
  Home.prototype.signOut = function () {
    this.auth.signOut();
  };
  Object.defineProperty(Home.prototype, 'body', {
    get: function () {
      return this.$delegate_rb58so$_0.body;
    }
  });
  function Coroutine$Home_init$lambda$lambda(this$Home_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Home = this$Home_0;
    this.local$it = it_0;
  }
  Coroutine$Home_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Home_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Home_init$lambda$lambda.prototype.constructor = Coroutine$Home_init$lambda$lambda;
  Coroutine$Home_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new LoggedIn(this.local$this$Home, this.local$it);
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
  function Home_init$lambda$lambda(this$Home_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Home_init$lambda$lambda(this$Home_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Home_init$lambda(this$Home_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Home = this$Home_0;
  }
  Coroutine$Home_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Home_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Home_init$lambda.prototype.constructor = Coroutine$Home_init$lambda;
  Coroutine$Home_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Home.start_x9mhxj$(this.local$this$Home.app, Home_init$lambda$lambda(this.local$this$Home), this);
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
  function Home_init$lambda(this$Home_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Home_init$lambda(this$Home_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Home.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Home',
    interfaces: [HomePath, BodyPath, LoginOnly]
  };
  function LoggedInPath() {
  }
  LoggedInPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggedInPath',
    interfaces: [HomePath]
  };
  function LoggedIn(home, user) {
    CsKillsView.call(this, home.hole);
    this.$delegate_blx57c$_0 = home;
    this.userState_y5oabq$_0 = new UserState$LoggedIn(user);
    this.loggedIn_8jqypf$_0 = this;
    this.privatedoc = get_private(download.downloadLib.app).doc_61zpoe$(user.uid);
    this.items = get_items(this.privatedoc);
    this.process = get_process(this.privatedoc);
    this.urlValue = LoggedIn$urlValue$lambda;
    this.resetForm = LoggedIn$resetForm$lambda;
    this.rawView_4vwifh$_0 = ui(this);
    commonui.globalStatus.remAssign_11rb$('Logged in.');
  }
  Object.defineProperty(LoggedIn.prototype, 'userState', {
    get: function () {
      return this.userState_y5oabq$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_8jqypf$_0;
    }
  });
  LoggedIn.prototype.addUrl = function () {
    var tmp$;
    if ((tmp$ = this.urlValue()) != null) {
      var id = get_escape(tmp$);
      var $receiver = new DownloadItem();
      $receiver.url.now = tmp$;
      this.save_73z9b6$(toFsDoc($receiver, this.items, id));
      this.resetForm();
    }
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_4vwifh$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'body', {
    get: function () {
      return this.$delegate_blx57c$_0.body;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_blx57c$_0.db;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'home', {
    get: function () {
      return this.$delegate_blx57c$_0.home;
    }
  });
  function LoggedIn$urlValue$lambda() {
    return null;
  }
  function LoggedIn$resetForm$lambda() {
    return Unit;
  }
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [FBApi, LoggedInPath, HomePath, UserStateView, CsKillsView]
  };
  function ui$lambda$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.home.signOut();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda(this$) {
    return function () {
      this$.reset();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.type = 'url';
    $receiver.placeholder = 'paste url here...';
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda_1(this$) {
    return function () {
      return this$.node.value;
    };
  }
  function ui$lambda$lambda$lambda$lambda($receiver) {
    get_inputGroupAppend(get_cls($receiver));
    var $receiver_0 = get_insert($receiver).button;
    $receiver_0.node.type = 'submit';
    var $receiver_1 = $receiver_0.cls;
    get_btnOutlineSecondary($receiver_1);
    get_plus(get_fa($receiver_1));
    return Unit;
  }
  function ui$lambda$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_inputGroup($receiver_0);
      get_widthAuto($receiver_0);
      get_m1($receiver_0);
      var $receiver_1 = get_insert($receiver).input;
      var this$ui_0 = this$ui;
      invoke($receiver_1.node, ui$lambda$lambda$lambda$lambda$lambda_0);
      this$ui_0.urlValue = ui$lambda$lambda$lambda$lambda$lambda_1($receiver_1);
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_1($receiver) {
    $receiver.type = 'submit';
    $receiver.hidden = true;
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda_0(this$ui) {
    return function () {
      this$ui.addUrl();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_2(this$ui) {
    return function (it) {
      this$ui.uix(ui$lambda$lambda$lambda$lambda_0(this$ui));
      it.preventDefault();
      return Unit;
    };
  }
  function ui$lambda$lambda(this$ui) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      this$ui.resetForm = ui$lambda$lambda$lambda($receiver);
      var $receiver_0 = get_cls($receiver);
      flexFixedSize($receiver_0);
      column($receiver_0);
      invoke(get_div($receiver), ui$lambda$lambda$lambda_0(this$ui));
      invoke(get_button($receiver), ui$lambda$lambda$lambda_1);
      $receiver.onsubmit = ui$lambda$lambda$lambda_2(this$ui);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_1($receiver) {
    get_m1(get_cls($receiver));
    remAssign($receiver, 'New');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i) {
    return function () {
      return closure$i.invoke().url.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i, this$) {
    return function ($receiver) {
      this$.remAssign_7fncnf$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i) {
    return function () {
      return closure$i.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i, this$) {
    return function ($receiver) {
      get_fontItalic(get_cls($receiver));
      this$.remAssign_7fncnf$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i, this$) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexGrow1($receiver_0);
      get_alignSelfCenter($receiver_0);
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i, this$));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i, this$));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$i, this$ui) {
    return function () {
      this$ui.delete_73z9b6$(closure$i);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda(closure$i, this$, this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_listGroupItem($receiver_0);
      get_p1($receiver_0);
      column_0($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i, this$));
      var $receiver_1 = get_insert($receiver).buttonGroup;
      var closure$i_0 = closure$i;
      var this$ui_0 = this$ui;
      var $receiver_2 = $receiver_1.cls;
      flexFixedSize($receiver_2);
      get_m1($receiver_2);
      var $receiver_3 = $receiver_1.button;
      get_p2($receiver_3.cls);
      $receiver_3.secondary;
      get_trashAlt($receiver_3.fa);
      this$ui_0.click_9375ex$($receiver_3, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$i_0, this$ui_0));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, i_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$i = i_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return row(document, ui$lambda$lambda$lambda$lambda$lambda$lambda(this.local$i, this.local$$receiver, this.local$this$ui));
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
  function ui$lambda$lambda$lambda$lambda$lambda_3(this$ui_0) {
    return function ($receiver_0, i_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, i_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_2($receiver) {
    get_m1(get_cls($receiver));
    remAssign($receiver, 'Started');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.get_desc_5eq60p$(DownloadProcess.Companion.ts);
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$i) {
    return function () {
      return closure$i.invoke().title.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i, this$) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_flexGrow1($receiver_0);
      get_alignSelfCenter($receiver_0);
      this$.remAssign_7fncnf$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$i));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$i) {
    return function () {
      return closure$i.invoke().progress.invoke().toString();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$i, this$) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      flexFixedSize($receiver_0);
      get_alignSelfCenter($receiver_0);
      this$.remAssign_7fncnf$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$i));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$i, this$ui) {
    return function () {
      this$ui.delete_73z9b6$(closure$i);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i, this$, this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_listGroupItem($receiver_0);
      get_p1($receiver_0);
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i, this$));
      invoke(get_div($receiver), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$i, this$));
      var $receiver_1 = get_insert($receiver).buttonGroup;
      var closure$i_0 = closure$i;
      var this$ui_0 = this$ui;
      var $receiver_2 = $receiver_1.cls;
      flexFixedSize($receiver_2);
      get_m1($receiver_2);
      var $receiver_3 = $receiver_1.button;
      get_p2($receiver_3.cls);
      $receiver_3.secondary;
      get_trashAlt($receiver_3.fa);
      this$ui_0.click_9375ex$($receiver_3, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$i_0, this$ui_0));
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_0, i_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$i = i_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return row(document, ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$i, this.local$$receiver, this.local$this$ui));
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
  function ui$lambda$lambda$lambda$lambda$lambda_5(this$ui_0) {
    return function ($receiver_0, i_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_0, i_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_3(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      invoke(get_h6($receiver), ui$lambda$lambda$lambda$lambda_1);
      var $receiver_0 = get_insert($receiver).listGroup;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      this$ui_0.list_u1uvxv$($receiver_0.node, this$ui_0.mapLive_1mq1ue$(this$ui_0.listEvents_pujjsl$(this$ui_0.items, ui$lambda$lambda$lambda$lambda$lambda_2), ui$lambda$lambda$lambda$lambda$lambda_3(this$ui_0)));
      invoke(get_h6($receiver), ui$lambda$lambda$lambda$lambda_2);
      var $receiver_1 = get_insert($receiver).listGroup;
      var this$ui_1 = this$ui;
      get_m1($receiver_1.cls);
      this$ui_1.list_u1uvxv$($receiver_1.node, this$ui_1.mapLive_1mq1ue$(this$ui_1.listEvents_pujjsl$(this$ui_1.process, ui$lambda$lambda$lambda$lambda$lambda_4), ui$lambda$lambda$lambda$lambda$lambda_5(this$ui_1)));
      return Unit;
    };
  }
  function ui$lambda(this$ui) {
    return function ($receiver) {
      column(get_cls($receiver));
      invoke(get_form($receiver), ui$lambda$lambda(this$ui));
      var $receiver_0 = get_insert($receiver).scrollPane;
      var this$ui_0 = this$ui;
      get_borderTop($receiver_0.cls);
      invoke($receiver_0.pane, ui$lambda$lambda$lambda_3(this$ui_0));
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    var $receiver_2 = $receiver_1.menu.item;
    get_signOutAlt($receiver_2.icon.fa);
    $receiver_2.text.remAssign_61zpoe$('Sign Out');
    $receiver.click_512jbc$($receiver_2, ui$lambda$lambda$lambda$lambda$lambda($receiver));
    remAssign($receiver_0.title, 'Download');
    return new TopAndContent($receiver_0.node, widget.factory.wraps.div_iw61es$(ui$lambda($receiver)).node);
  }
  $$importsForInline$$['appsimake-commonui'] = $module$appsimake_commonui;
  var package$download = _.download || (_.download = {});
  package$download.main = main;
  var package$home = package$download.home || (package$download.home = {});
  package$home.HomePath = HomePath;
  package$home.Home = Home;
  var package$loggedin = package$download.loggedin || (package$download.loggedin = {});
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$loggedin.ui_4pz7eh$ = ui;
  LoggedIn.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  LoggedIn.prototype.get_randomDoc_sj9vaa$ = FBApi.prototype.get_randomDoc_sj9vaa$;
  LoggedIn.prototype.get_ref_sj9vaa$ = FBApi.prototype.get_ref_sj9vaa$;
  LoggedIn.prototype.get_ref_aqty80$ = FBApi.prototype.get_ref_aqty80$;
  LoggedIn.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  LoggedIn.prototype.rxEditing_iwuu9m$$default = FBApi.prototype.rxEditing_iwuu9m$$default;
  LoggedIn.prototype.delete_73z9b6$ = FBApi.prototype.delete_73z9b6$;
  LoggedIn.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  LoggedIn.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  LoggedIn.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  LoggedIn.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  LoggedIn.prototype.get_prxdpg$ = FBApi.prototype.get_prxdpg$;
  LoggedIn.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  LoggedIn.prototype.query_wzkv1r$$default = FBApi.prototype.query_wzkv1r$$default;
  LoggedIn.prototype.save_73z9b6$ = FBApi.prototype.save_73z9b6$;
  LoggedIn.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = FBApi.prototype.toRandomFsDoc_xc7wmg$;
  LoggedIn.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  LoggedIn.prototype.rxEditing_iwuu9m$ = FBApi.prototype.rxEditing_iwuu9m$;
  LoggedIn.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  LoggedIn.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  LoggedIn.prototype.query_wzkv1r$ = FBApi.prototype.query_wzkv1r$;
  LoggedIn.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  main();
  Kotlin.defineModule('appsimake-download', _);
  return _;
}(typeof this['appsimake-download'] === 'undefined' ? {} : this['appsimake-download'], kotlin, this['kotlinx-coroutines-core'], this['appsimake-commonfb'], this['appsimake-commonui'], this['appsimake-firebase'], this['appsimake-common'], this['appsimake-downloadlib'], this['appsimake-commonshr'], this['appsimake-fontawesome'], this['appsimake-domx'], this['appsimake-bootstrap']);

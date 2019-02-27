if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-download'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-download'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-download'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-download'.");
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
this['appsimake-download'] = function (_, Kotlin, $module$appsimake_commonui, $module$kotlinx_coroutines_core, $module$appsimake_commonfb, $module$appsimake_common, $module$appsimake_downloadlib, $module$appsimake_commonshr, $module$appsimake_fontawesome, $module$appsimake_domx, $module$appsimake_bootstrap) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Loading = $module$appsimake_commonui.commonui.widget.Loading;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var commonui = $module$appsimake_commonui.commonui;
  var Body = $module$appsimake_commonui.commonui.widget.Body;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var BodyPath = $module$appsimake_commonui.commonui.widget.BodyPath;
  var LoginOnly = $module$appsimake_commonfb.commonfb.loginbase.LoginOnly;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_escape = $module$appsimake_common.common.get_escape_pdl1vz$;
  var DownloadItem = $module$appsimake_downloadlib.download.DownloadItem;
  var save = $module$appsimake_commonfb.commonfb.save_t7bci5$;
  var UIBase_init = $module$appsimake_commonui.commonui.widget.UIBase_init_kgemh3$;
  var UserState$LoggedIn = $module$appsimake_commonfb.commonfb.UserState.LoggedIn;
  var download = $module$appsimake_downloadlib.download;
  var get_private = $module$appsimake_commonshr.commonlib.get_private_6l3wi3$;
  var get_items = $module$appsimake_downloadlib.download.get_items_13xn5r$;
  var UIBase = $module$appsimake_commonui.commonui.widget.UIBase;
  var UserStateView = $module$appsimake_commonfb.commonfb.loginbase.UserStateView;
  var widget = $module$appsimake_commonui.commonui.widget;
  var get_signOutAlt = $module$appsimake_fontawesome.fontawesome.get_signOutAlt_xml72e$;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var get_form = $module$appsimake_domx.domx.get_form_asww5s$;
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
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  Home.prototype = Object.create(LoginOnly.prototype);
  Home.prototype.constructor = Home;
  LoggedIn.prototype = Object.create(UIBase.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  function Coroutine$main$lambda(closure$loading_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$loading = closure$loading_0;
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
            this.local$closure$loading.remAssign_61zpoe$('Registering service worker...');
            commonui.APP.startRegisteringServiceWorker();
            return new Body(this.local$closure$loading.target);
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
  function main$lambda(closure$loading_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$main$lambda(closure$loading_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main() {
    var loading = new Loading();
    launch(coroutines.GlobalScope, void 0, void 0, main$lambda(loading));
  }
  function HomePath() {
  }
  HomePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HomePath',
    interfaces: [BodyPath]
  };
  function Home(body, app, db) {
    LoginOnly.call(this, body);
    this.app = app;
    this.db = db;
    this.$delegate_rb58so$_0 = body;
    this.home_corfrp$_0 = this;
    this.auth = this.app.auth();
    launch(this, void 0, void 0, Home_init$lambda(this));
  }
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
    UIBase_init(home, this);
    this.$delegate_blx57c$_0 = home;
    this.userState_y5oabq$_0 = new UserState$LoggedIn(user);
    this.loggedIn_8jqypf$_0 = this;
    this.privatedoc = get_private(download.downloadLib.app).doc_61zpoe$(user.uid);
    this.items = get_items(this.privatedoc);
    this.urlValue = LoggedIn$urlValue$lambda;
    this.resetForm = LoggedIn$resetForm$lambda;
    this.rawView_4vwifh$_0 = ui(this);
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
      $receiver.props.persisted_11rd$(this.items.doc_61zpoe$(id));
      $receiver.url.cv = tmp$;
      save($receiver, this.home.db);
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
    interfaces: [LoggedInPath, HomePath, UserStateView, UIBase]
  };
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
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
            return this.local$this$ui.home.signOut(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
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
  function Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.addUrl(), Unit;
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
  function ui$lambda$lambda$lambda$lambda_0(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
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
  function ui$lambda(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      column($receiver_0);
      get_p1($receiver_0);
      invoke(get_form($receiver), ui$lambda$lambda(this$ui));
      get_insert($receiver).scrollPane;
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
    $receiver.click_ka8ib0$($receiver_2, ui$lambda$lambda$lambda$lambda$lambda($receiver));
    remAssign($receiver_0.title, 'Download');
    return new TopAndContent($receiver_0.node, widget.factory.wraps.div_iw61es$(ui$lambda($receiver)).node);
  }
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
  main();
  Kotlin.defineModule('appsimake-download', _);
  return _;
}(typeof this['appsimake-download'] === 'undefined' ? {} : this['appsimake-download'], kotlin, this['appsimake-commonui'], this['kotlinx-coroutines-core'], this['appsimake-commonfb'], this['appsimake-common'], this['appsimake-downloadlib'], this['appsimake-commonshr'], this['appsimake-fontawesome'], this['appsimake-domx'], this['appsimake-bootstrap']);

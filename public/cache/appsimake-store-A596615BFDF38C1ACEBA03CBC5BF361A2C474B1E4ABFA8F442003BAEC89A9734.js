if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-store'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-store'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-store'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-store'.");
}
if (typeof this['appsimake-storelib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-store'. Its dependency 'appsimake-storelib' was not found. Please, check whether 'appsimake-storelib' is loaded prior to 'appsimake-store'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-store'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-store'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-store'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-store'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-store'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-store'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-store'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-store'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-store'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-store'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-store'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-store'.");
}
this['appsimake-store'] = function (_, Kotlin, $module$appsimake_commonfb, $module$appsimake_storelib, $module$appsimake_firebase, $module$appsimake_commonui, $module$kotlinx_coroutines_core, $module$appsimake_domx, $module$appsimake_commonshr, $module$appsimake_bootstrap) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var FbLinksFactory = $module$appsimake_commonfb.commonfb.FbLinksFactory;
  var store = $module$appsimake_storelib.store;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var DbApi = $module$appsimake_firebase.firebase.DbApi;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var BaseTC = $module$appsimake_commonui.commonui.links.BaseTC;
  var LinkApi = $module$appsimake_commonui.commonui.links.LinkApi;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var ForwardBase = $module$appsimake_commonui.commonui.view.ForwardBase;
  var FBApi = $module$appsimake_commonfb.commonfb.FBApi;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var Unit = Kotlin.kotlin.Unit;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var get_input = $module$appsimake_domx.domx.get_input_asww5s$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  Links.prototype = Object.create(FbLinksFactory.prototype);
  Links.prototype.constructor = Links;
  LoggedIn.prototype = Object.create(ForwardBase.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  function Coroutine$main$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
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
            return new Links(this.local$it);
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
  function main$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$main$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main() {
    FbLinksFactory.Companion.start_gwo7fm$(store.storeLib, void 0, void 0, main$lambda);
  }
  function LinksPath() {
  }
  LinksPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinksPath',
    interfaces: [DbApi]
  };
  function Links(deps) {
    FbLinksFactory.call(this, deps);
    this.links_atid8d$_0 = this;
    this.home_6gsxzt$_0 = this.root_7o50g$(Links$home$lambda(this, deps));
  }
  Object.defineProperty(Links.prototype, 'links', {
    get: function () {
      return this.links_atid8d$_0;
    }
  });
  Object.defineProperty(Links.prototype, 'home', {
    get: function () {
      return this.home_6gsxzt$_0;
    }
  });
  function Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$closure$deps = closure$deps_0;
    this.local$tmp$ = void 0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$home$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$home$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$home$lambda.prototype.constructor = Coroutine$Links$home$lambda;
  Coroutine$Links$home$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = this.local$closure$deps.hole;
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.requestUser(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.result_0;
            var $receiver = new LoggedIn(this.local$this$Links, this.local$lnk, this.local$tmp$, tmp$);
            this.local$closure$deps.hole.remAssign_9i7ztu$($receiver);
            return $receiver;
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
  function Links$home$lambda(this$Links_0, closure$deps_0) {
    return function (lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Links.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Links',
    interfaces: [LinksPath, FbLinksFactory]
  };
  function LoggedInTC() {
  }
  LoggedInTC.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggedInTC',
    interfaces: [LinkApi, LoggedInPath, BaseTC]
  };
  function LoggedInPath() {
  }
  LoggedInPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggedInPath',
    interfaces: [LinksPath]
  };
  function LoggedIn(links, linkage, hole, user) {
    ForwardBase.call(this, hole);
    this.linkage_5wpafy$_0 = linkage;
    this.$delegate_z06vsx$_0 = links;
    this.loggedIn_r9d7dy$_0 = this;
    this.rawView_hh8rwm$_0 = ui(this);
  }
  Object.defineProperty(LoggedIn.prototype, 'linkage', {
    get: function () {
      return this.linkage_5wpafy$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_r9d7dy$_0;
    }
  });
  function Coroutine$LoggedIn$signOut$lambda(this$LoggedIn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$signOut$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$signOut$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$signOut$lambda.prototype.constructor = Coroutine$LoggedIn$signOut$lambda;
  Coroutine$LoggedIn$signOut$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.links.signOut(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$LoggedIn.links.home.load(this);
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
  function LoggedIn$signOut$lambda(this$LoggedIn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$signOut$lambda(this$LoggedIn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.signOut = function () {
    return launch(this.links, void 0, void 0, LoggedIn$signOut$lambda(this));
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_hh8rwm$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_z06vsx$_0.db;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'links', {
    get: function () {
      return this.$delegate_z06vsx$_0.links;
    }
  });
  LoggedIn.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.$delegate_z06vsx$_0.get_randomDoc_lsue4w$($receiver);
  };
  LoggedIn.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_z06vsx$_0.get_randomDoc_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_z06vsx$_0.get_ref_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_z06vsx$_0.get_ref_aqty80$($receiver);
  };
  LoggedIn.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_z06vsx$_0.delete_73z9b6$($receiver);
  };
  LoggedIn.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_z06vsx$_0.delete_ihdkly$($receiver);
  };
  LoggedIn.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_z06vsx$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  LoggedIn.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_z06vsx$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  LoggedIn.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_z06vsx$_0.query_wzkv1r$$default($receiver, query);
  };
  LoggedIn.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_z06vsx$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  LoggedIn.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_z06vsx$_0.save_73z9b6$($receiver);
  };
  LoggedIn.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_z06vsx$_0.save_biv66q$($receiver);
  };
  LoggedIn.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.$delegate_z06vsx$_0.set_o9yh22$$default($receiver, data, options);
  };
  LoggedIn.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.$delegate_z06vsx$_0.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_z06vsx$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [FBApi, LoggedInTC, LoggedInPath, LinksPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.signOut();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda($receiver) {
    $receiver.type = 'file';
    $receiver.accept = 'image/*';
    return Unit;
  }
  function ui$lambda$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_p1($receiver_0);
    column($receiver_0);
    invoke(get_input($receiver), ui$lambda$lambda$lambda);
    return Unit;
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, 'Store');
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signOut_tstgz9$($receiver_1.menu, ui$lambda$lambda$lambda$lambda($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_2 = widget.factory.scrollPane;
    invoke($receiver_2.pane, ui$lambda$lambda);
    return new TopAndContent(tmp$, $receiver_2.node);
  }
  var package$store = _.store || (_.store = {});
  package$store.main = main;
  package$store.LinksPath = LinksPath;
  package$store.Links = Links;
  var package$loggedin = package$store.loggedin || (package$store.loggedin = {});
  package$loggedin.LoggedInTC = LoggedInTC;
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$loggedin.ui_jp8kb2$ = ui;
  LinksPath.prototype.get_randomDoc_lsue4w$ = DbApi.prototype.get_randomDoc_lsue4w$;
  LinksPath.prototype.get_randomDoc_sj9vaa$ = DbApi.prototype.get_randomDoc_sj9vaa$;
  LinksPath.prototype.get_ref_sj9vaa$ = DbApi.prototype.get_ref_sj9vaa$;
  LinksPath.prototype.get_ref_aqty80$ = DbApi.prototype.get_ref_aqty80$;
  LinksPath.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  LinksPath.prototype.delete_ihdkly$ = DbApi.prototype.delete_ihdkly$;
  LinksPath.prototype.getCachedOrServer_prxdpg$ = DbApi.prototype.getCachedOrServer_prxdpg$;
  LinksPath.prototype.getOrNull_m1hph$$default = DbApi.prototype.getOrNull_m1hph$$default;
  LinksPath.prototype.query_wzkv1r$$default = DbApi.prototype.query_wzkv1r$$default;
  LinksPath.prototype.randomEditable_mx4g9l$$default = DbApi.prototype.randomEditable_mx4g9l$$default;
  LinksPath.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  LinksPath.prototype.save_biv66q$ = DbApi.prototype.save_biv66q$;
  LinksPath.prototype.set_o9yh22$$default = DbApi.prototype.set_o9yh22$$default;
  LinksPath.prototype.toFsDoc_bo0woj$$default = DbApi.prototype.toFsDoc_bo0woj$$default;
  LinksPath.prototype.toRandomFsDoc_xc7wmg$ = DbApi.prototype.toRandomFsDoc_xc7wmg$;
  LinksPath.prototype.getOrNull_m1hph$ = DbApi.prototype.getOrNull_m1hph$;
  LinksPath.prototype.query_wzkv1r$ = DbApi.prototype.query_wzkv1r$;
  LinksPath.prototype.randomEditable_mx4g9l$ = DbApi.prototype.randomEditable_mx4g9l$;
  LinksPath.prototype.set_o9yh22$ = DbApi.prototype.set_o9yh22$;
  LinksPath.prototype.toFsDoc_bo0woj$ = DbApi.prototype.toFsDoc_bo0woj$;
  Links.prototype.get_randomDoc_lsue4w$ = LinksPath.prototype.get_randomDoc_lsue4w$;
  Links.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  Links.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  Links.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  Links.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  Links.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  Links.prototype.getCachedOrServer_prxdpg$ = LinksPath.prototype.getCachedOrServer_prxdpg$;
  Links.prototype.getOrNull_m1hph$$default = LinksPath.prototype.getOrNull_m1hph$$default;
  Links.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  Links.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  Links.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  Links.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  Links.prototype.set_o9yh22$$default = LinksPath.prototype.set_o9yh22$$default;
  Links.prototype.toFsDoc_bo0woj$$default = LinksPath.prototype.toFsDoc_bo0woj$$default;
  Links.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  Links.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  Links.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  Links.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  Links.prototype.set_o9yh22$ = LinksPath.prototype.set_o9yh22$;
  Links.prototype.toFsDoc_bo0woj$ = LinksPath.prototype.toFsDoc_bo0woj$;
  LoggedInPath.prototype.get_randomDoc_lsue4w$ = LinksPath.prototype.get_randomDoc_lsue4w$;
  LoggedInPath.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInPath.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  LoggedInPath.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  LoggedInPath.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  LoggedInPath.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  LoggedInPath.prototype.getCachedOrServer_prxdpg$ = LinksPath.prototype.getCachedOrServer_prxdpg$;
  LoggedInPath.prototype.getOrNull_m1hph$$default = LinksPath.prototype.getOrNull_m1hph$$default;
  LoggedInPath.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  LoggedInPath.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  LoggedInPath.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  LoggedInPath.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  LoggedInPath.prototype.set_o9yh22$$default = LinksPath.prototype.set_o9yh22$$default;
  LoggedInPath.prototype.toFsDoc_bo0woj$$default = LinksPath.prototype.toFsDoc_bo0woj$$default;
  LoggedInPath.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInPath.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  LoggedInPath.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  LoggedInPath.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  LoggedInPath.prototype.set_o9yh22$ = LinksPath.prototype.set_o9yh22$;
  LoggedInPath.prototype.toFsDoc_bo0woj$ = LinksPath.prototype.toFsDoc_bo0woj$;
  LoggedInTC.prototype.get_randomDoc_lsue4w$ = LoggedInPath.prototype.get_randomDoc_lsue4w$;
  LoggedInTC.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInTC.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  LoggedInTC.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  LoggedInTC.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  LoggedInTC.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  LoggedInTC.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  LoggedInTC.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  LoggedInTC.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  LoggedInTC.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  LoggedInTC.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  LoggedInTC.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  LoggedInTC.prototype.set_o9yh22$$default = LoggedInPath.prototype.set_o9yh22$$default;
  LoggedInTC.prototype.toFsDoc_bo0woj$$default = LoggedInPath.prototype.toFsDoc_bo0woj$$default;
  LoggedInTC.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInTC.prototype.fwd_e1fa5e$$default = LinkApi.prototype.fwd_e1fa5e$$default;
  LoggedInTC.prototype.fwd_nnhkmr$$default = LinkApi.prototype.fwd_nnhkmr$$default;
  LoggedInTC.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  LoggedInTC.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  LoggedInTC.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  LoggedInTC.prototype.set_o9yh22$ = LoggedInPath.prototype.set_o9yh22$;
  LoggedInTC.prototype.toFsDoc_bo0woj$ = LoggedInPath.prototype.toFsDoc_bo0woj$;
  LoggedInTC.prototype.fwd_e1fa5e$ = LinkApi.prototype.fwd_e1fa5e$;
  LoggedInTC.prototype.fwd_nnhkmr$ = LinkApi.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.signOut_tstgz9$ = FBApi.prototype.signOut_tstgz9$;
  LoggedIn.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  LoggedIn.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  LoggedIn.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  LoggedIn.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  LoggedIn.prototype.get_docsOrNull_g2zw3r$ = FBApi.prototype.get_docsOrNull_g2zw3r$;
  LoggedIn.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  LoggedIn.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  LoggedIn.prototype.rxCreating_8ctbwl$$default = FBApi.prototype.rxCreating_8ctbwl$$default;
  LoggedIn.prototype.rxEditing_6l8l9j$$default = FBApi.prototype.rxEditing_6l8l9j$$default;
  LoggedIn.prototype.click_4eku4n$ = FBApi.prototype.click_4eku4n$;
  LoggedIn.prototype.click_9375ex$ = FBApi.prototype.click_9375ex$;
  LoggedIn.prototype.click_512jbc$ = FBApi.prototype.click_512jbc$;
  LoggedIn.prototype.click_3zaxtq$ = FBApi.prototype.click_3zaxtq$;
  LoggedIn.prototype.click_ts68bh$ = FBApi.prototype.click_ts68bh$;
  LoggedIn.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  LoggedIn.prototype.documentChanges_pujjsl$$default = FBApi.prototype.documentChanges_pujjsl$$default;
  LoggedIn.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  LoggedIn.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  LoggedIn.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  LoggedIn.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  LoggedIn.prototype.onSnapshotNext_po64up$ = FBApi.prototype.onSnapshotNext_po64up$;
  LoggedIn.prototype.signIn_tstgz9$ = FBApi.prototype.signIn_tstgz9$;
  LoggedIn.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  LoggedIn.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  LoggedIn.prototype.getOrNull_m1hph$ = LoggedInTC.prototype.getOrNull_m1hph$;
  LoggedIn.prototype.query_wzkv1r$ = LoggedInTC.prototype.query_wzkv1r$;
  LoggedIn.prototype.randomEditable_mx4g9l$ = LoggedInTC.prototype.randomEditable_mx4g9l$;
  LoggedIn.prototype.set_o9yh22$ = LoggedInTC.prototype.set_o9yh22$;
  LoggedIn.prototype.toFsDoc_bo0woj$ = LoggedInTC.prototype.toFsDoc_bo0woj$;
  LoggedIn.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  LoggedIn.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.rxCreating_8ctbwl$ = FBApi.prototype.rxCreating_8ctbwl$;
  LoggedIn.prototype.rxEditing_6l8l9j$ = FBApi.prototype.rxEditing_6l8l9j$;
  LoggedIn.prototype.documentChanges_pujjsl$ = FBApi.prototype.documentChanges_pujjsl$;
  LoggedIn.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  LoggedIn.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  LoggedIn.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  main();
  Kotlin.defineModule('appsimake-store', _);
  return _;
}(typeof this['appsimake-store'] === 'undefined' ? {} : this['appsimake-store'], kotlin, this['appsimake-commonfb'], this['appsimake-storelib'], this['appsimake-firebase'], this['appsimake-commonui'], this['kotlinx-coroutines-core'], this['appsimake-domx'], this['appsimake-commonshr'], this['appsimake-bootstrap']);

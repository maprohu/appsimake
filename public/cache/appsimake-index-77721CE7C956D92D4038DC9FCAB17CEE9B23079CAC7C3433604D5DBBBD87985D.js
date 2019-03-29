if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-index'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-index'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-index'.");
}
this['appsimake-index'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_commonfb, $module$appsimake_domx, $module$appsimake_commonshr, $module$appsimake_bootstrap, $module$appsimake_fontawesome) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CsKillsView = $module$appsimake_commonui.commonui.view.CsKillsView;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var FBBackApi = $module$appsimake_commonfb.commonfb.FBBackApi;
  var HasBack = $module$appsimake_commonui.commonui.HasBack;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var Unit = Kotlin.kotlin.Unit;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_h3 = $module$appsimake_domx.domx.get_h3_asww5s$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_p = $module$appsimake_domx.domx.get_p_asww5s$;
  var get_textJustify = $module$appsimake_bootstrap.bootstrap.get_textJustify_kre7dp$;
  var plusAssign = $module$appsimake_domx.domx.plusAssign_46n0ku$;
  var get_a = $module$appsimake_domx.domx.get_a_asww5s$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var get_listGroupItemAction = $module$appsimake_bootstrap.bootstrap.get_listGroupItemAction_kre7dp$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var getCallableRef = Kotlin.getCallableRef;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var advance = $module$appsimake_commonui.commonui.view.advance_zadjfr$;
  var MultiForward = $module$appsimake_commonui.commonui.view.MultiForward;
  var plus = $module$appsimake_commonui.commonui.view.plus_qexz28$;
  var ProgressTC = $module$appsimake_commonui.commonui.topandcontent.ProgressTC;
  var UserState = $module$appsimake_commonfb.commonfb.UserState;
  var equals = Kotlin.equals;
  var UserState$LoggedIn = $module$appsimake_commonfb.commonfb.UserState.LoggedIn;
  var BaseTC = $module$appsimake_commonui.commonui.links.BaseTC;
  var HasCsToast = $module$appsimake_commonui.commonui.HasCsToast;
  var LinkApi = $module$appsimake_commonui.commonui.links.LinkApi;
  var get_listGroupItem = $module$appsimake_bootstrap.bootstrap.get_listGroupItem_kre7dp$;
  var get_info = $module$appsimake_fontawesome.fontawesome.get_info_xml72e$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var KillsLoginUixApi = $module$appsimake_commonfb.commonfb.KillsLoginUixApi;
  var get_m2 = $module$appsimake_bootstrap.bootstrap.get_m2_kre7dp$;
  var get_fontWeightBold = $module$appsimake_bootstrap.bootstrap.get_fontWeightBold_kre7dp$;
  var FbLinksFactory = $module$appsimake_commonfb.commonfb.FbLinksFactory;
  var FbLinksApi = $module$appsimake_commonfb.commonfb.FbLinksApi;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var forwarding = $module$appsimake_commonui.commonui.view.forwarding_caeb5u$;
  About.prototype = Object.create(CsKillsView.prototype);
  About.prototype.constructor = About;
  Home.prototype = Object.create(MultiForward.prototype);
  Home.prototype.constructor = Home;
  LoggedIn.prototype = Object.create(CsKillsView.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  NotLoggedIn.prototype = Object.create(CsKillsView.prototype);
  NotLoggedIn.prototype.constructor = NotLoggedIn;
  Links.prototype = Object.create(FbLinksFactory.prototype);
  Links.prototype.constructor = Links;
  function AboutPath() {
  }
  AboutPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AboutPath',
    interfaces: [HomePath]
  };
  function About(parent, linkage) {
    CsKillsView.call(this, parent);
    this.$delegate_rz6dv4$_0 = parent;
    this.$delegate_rz6dv4$_1 = linkage;
    this.about_rp1sqd$_0 = this;
    this.rawView_2at9pn$_0 = ui(this);
  }
  Object.defineProperty(About.prototype, 'about', {
    get: function () {
      return this.about_rp1sqd$_0;
    }
  });
  Object.defineProperty(About.prototype, 'rawView', {
    get: function () {
      return this.rawView_2at9pn$_0;
    }
  });
  Object.defineProperty(About.prototype, 'db', {
    get: function () {
      return this.$delegate_rz6dv4$_0.db;
    }
  });
  Object.defineProperty(About.prototype, 'home', {
    get: function () {
      return this.$delegate_rz6dv4$_0.home;
    }
  });
  Object.defineProperty(About.prototype, 'links', {
    get: function () {
      return this.$delegate_rz6dv4$_0.links;
    }
  });
  Object.defineProperty(About.prototype, 'toaster', {
    get: function () {
      return this.$delegate_rz6dv4$_0.toaster;
    }
  });
  Object.defineProperty(About.prototype, 'userState', {
    get: function () {
      return this.$delegate_rz6dv4$_0.userState;
    }
  });
  About.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_rz6dv4$_0.get_randomDoc_sj9vaa$($receiver);
  };
  About.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_rz6dv4$_0.get_ref_sj9vaa$($receiver);
  };
  About.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_rz6dv4$_0.get_ref_aqty80$($receiver);
  };
  About.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_rz6dv4$_0.delete_73z9b6$($receiver);
  };
  About.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_rz6dv4$_0.delete_ihdkly$($receiver);
  };
  About.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_rz6dv4$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  About.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_rz6dv4$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  About.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_rz6dv4$_0.query_wzkv1r$$default($receiver, query);
  };
  About.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_rz6dv4$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  About.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_rz6dv4$_0.save_73z9b6$($receiver);
  };
  About.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_rz6dv4$_0.save_biv66q$($receiver);
  };
  About.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_rz6dv4$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(About.prototype, 'back', {
    get: function () {
      return this.$delegate_rz6dv4$_1.back;
    }
  });
  About.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'About',
    interfaces: [FBBackApi, HasBack, AboutPath, HomePath, CsKillsView]
  };
  function ui$lambda$lambda$lambda($receiver) {
    remAssign($receiver, 'Dear Visitor!');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda($receiver) {
    $receiver.href = 'https://github.com/maprohu/appsimake';
    remAssign($receiver, 'GitHub');
    return Unit;
  }
  function ui$lambda$lambda$lambda_0($receiver) {
    get_textJustify(get_cls($receiver));
    plusAssign($receiver, '\n                    Welcome to my collection of mobile web apps. Here you will\n                    find a (currently) small collection of apps that I am developing\n                    in my free time. Feel free to use them as you wish. They are completely\n                    free and the source code for all of these apps is available on\n                ');
    invoke(get_a($receiver), ui$lambda$lambda$lambda$lambda);
    plusAssign($receiver, '.\n                    Please reference the GitHub repository or the apps themselves\n                    if you decide to use any part of the code base.\n                ');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.href = 'https://github.com/maprohu/appsimake/issues';
    remAssign($receiver, 'issue tracker on GitHub');
    return Unit;
  }
  function ui$lambda$lambda$lambda_1($receiver) {
    get_textJustify(get_cls($receiver));
    plusAssign($receiver, "\n                    Be warned that this effort is a work in progress, in its very early phase.\n                    Most of the source code and the user interface is undocumented,\n                    under continuous development,\n                    with the possibility of breaking without warning.\n                    Also note that the apps are mostly tested on Android, Windows, Google Chrome and Firefox.\n                    Testing on Apple devices is limited simply because I don't own any (donations welcome).\n                    I would be happy\n                    for any feedback about the apps, suggestions, ideas for improvements\n                    or even completely new projects. For the time being please use the\n                ");
    invoke(get_a($receiver), ui$lambda$lambda$lambda$lambda_0);
    plusAssign($receiver, '\n                    for this purpose.\n                ');
    return Unit;
  }
  function ui$lambda$lambda$lambda_2($receiver) {
    get_textJustify(get_cls($receiver));
    plusAssign($receiver, '\n                    Even though the apps are for free, there is a certain cost associated\n                    with hosting such apps on the internet. This cost is more or less\n                    proportional to the\n                    number of regular users that are accessing the apps. As of now this is\n                    insignificant, however I cannot yet foresee how that will\n                    change in the future. In any case I would like to keep the apps available\n                    for free as long as I can, and figure out how to support it financially\n                    once (if ever) it gets to that point.\n                ');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda_1($receiver) {
    remAssign($receiver, 'References');
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda(it) {
    return it.title.toLowerCase();
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$ref) {
    return function ($receiver) {
      get_listGroupItemAction(get_cls($receiver));
      remAssign($receiver, closure$ref.title);
      $receiver.href = closure$ref.url;
      return Unit;
    };
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function ui$lambda$lambda($receiver) {
    get_p2(get_cls($receiver));
    invoke(get_h3($receiver), ui$lambda$lambda$lambda);
    invoke(get_p($receiver), ui$lambda$lambda$lambda_0);
    invoke(get_p($receiver), ui$lambda$lambda$lambda_1);
    invoke(get_p($receiver), ui$lambda$lambda$lambda_2);
    var $receiver_0 = get_insert($receiver).card;
    invoke($receiver_0.header, ui$lambda$lambda$lambda$lambda_1);
    var $receiver_1 = $receiver_0.listGroup;
    var tmp$;
    tmp$ = sortedWith(references, new Comparator$ObjectLiteral(compareBy$lambda(ui$lambda$lambda$lambda$lambda$lambda))).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver_1.item.get_applied_gzcdlp$(invoke(get_a(document), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(element)));
    }
    return Unit;
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_tdhe4g$($receiver_0.left);
    remAssign($receiver_0.title, 'About');
    var tmp$ = $receiver_0.node;
    var $receiver_1 = widget.factory.scrollPane;
    invoke($receiver_1.pane, ui$lambda$lambda);
    return new TopAndContent(tmp$, $receiver_1.node);
  }
  function Reference(title, url) {
    this.title = title;
    this.url = url;
  }
  Reference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reference',
    interfaces: []
  };
  var ref;
  var references;
  function HomePath() {
  }
  HomePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HomePath',
    interfaces: [LinksPath]
  };
  function Home(links, linkage, hole) {
    MultiForward.call(this, hole);
    this.linkage_mix52p$_0 = linkage;
    this.$delegate_k3lhg2$_0 = links;
    this.home_9p657j$_0 = this;
    this.currentView_d6zfs$_0 = this.rx_y6x17j$(Home$currentView$lambda(this, links));
  }
  Object.defineProperty(Home.prototype, 'linkage', {
    get: function () {
      return this.linkage_mix52p$_0;
    }
  });
  Object.defineProperty(Home.prototype, 'home', {
    get: function () {
      return this.home_9p657j$_0;
    }
  });
  Object.defineProperty(Home.prototype, 'currentView', {
    get: function () {
      return this.currentView_d6zfs$_0;
    }
  });
  function Coroutine$Home$signIn$lambda(this$Home_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Home = this$Home_0;
  }
  Coroutine$Home$signIn$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Home$signIn$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Home$signIn$lambda.prototype.constructor = Coroutine$Home$signIn$lambda;
  Coroutine$Home$signIn$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Home.fwd_nnhkmr$(this.local$this$Home.links.login, void 0, this);
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
  function Home$signIn$lambda(this$Home_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Home$signIn$lambda(this$Home_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Home.prototype.signIn = function () {
    advance(this, Home$signIn$lambda(this));
  };
  function Coroutine$Home$about$lambda(this$Home_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Home = this$Home_0;
  }
  Coroutine$Home$about$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Home$about$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Home$about$lambda.prototype.constructor = Coroutine$Home$about$lambda;
  Coroutine$Home$about$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Home.fwd_nnhkmr$(this.local$this$Home.links.about, void 0, this);
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
  function Home$about$lambda(this$Home_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Home$about$lambda(this$Home_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Home.prototype.about = function () {
    advance(this, Home$about$lambda(this));
  };
  Object.defineProperty(Home.prototype, 'db', {
    get: function () {
      return this.$delegate_k3lhg2$_0.db;
    }
  });
  Object.defineProperty(Home.prototype, 'links', {
    get: function () {
      return this.$delegate_k3lhg2$_0.links;
    }
  });
  Object.defineProperty(Home.prototype, 'toaster', {
    get: function () {
      return this.$delegate_k3lhg2$_0.toaster;
    }
  });
  Object.defineProperty(Home.prototype, 'userState', {
    get: function () {
      return this.$delegate_k3lhg2$_0.userState;
    }
  });
  Home.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_k3lhg2$_0.get_randomDoc_sj9vaa$($receiver);
  };
  Home.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_k3lhg2$_0.get_ref_sj9vaa$($receiver);
  };
  Home.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_k3lhg2$_0.get_ref_aqty80$($receiver);
  };
  Home.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_k3lhg2$_0.delete_73z9b6$($receiver);
  };
  Home.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_k3lhg2$_0.delete_ihdkly$($receiver);
  };
  Home.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_k3lhg2$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  Home.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_k3lhg2$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  Home.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_k3lhg2$_0.query_wzkv1r$$default($receiver, query);
  };
  Home.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_k3lhg2$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  Home.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_k3lhg2$_0.save_73z9b6$($receiver);
  };
  Home.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_k3lhg2$_0.save_biv66q$($receiver);
  };
  Home.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_k3lhg2$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  function Home$currentView$lambda(this$Home, closure$links) {
    return function ($receiver) {
      var killsRouting = plus($receiver, this$Home.home);
      var $receiver_0 = closure$links.userState.invoke();
      var this$Home_0 = this$Home;
      var block$result;
      if (equals($receiver_0, UserState.Unknown)) {
        block$result = new ProgressTC(killsRouting);
      }
       else if (equals($receiver_0, UserState.NotLoggedIn)) {
        block$result = new NotLoggedIn(killsRouting, this$Home_0.home);
      }
       else if (Kotlin.isType($receiver_0, UserState$LoggedIn)) {
        block$result = new LoggedIn(killsRouting, this$Home_0.home);
      }
       else {
        block$result = Kotlin.noWhenBranchMatched();
      }
      return block$result;
    };
  }
  Home.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Home',
    interfaces: [LinkApi, HasCsToast, HomePath, LinksPath, BaseTC, MultiForward]
  };
  function LoggedInPath() {
  }
  LoggedInPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggedInPath',
    interfaces: [HomePath]
  };
  function LoggedIn(parent, home) {
    CsKillsView.call(this, parent);
    this.$delegate_4vwecb$_0 = home;
    this.loggedIn_4vfghs$_0 = this;
    this.rawView_vy604g$_0 = ui_0(this);
  }
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_4vfghs$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_vy604g$_0;
    }
  });
  LoggedIn.prototype.signOut = function () {
    this.links.signOutNow();
  };
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_4vwecb$_0.db;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'home', {
    get: function () {
      return this.$delegate_4vwecb$_0.home;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'links', {
    get: function () {
      return this.$delegate_4vwecb$_0.links;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'toaster', {
    get: function () {
      return this.$delegate_4vwecb$_0.toaster;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'userState', {
    get: function () {
      return this.$delegate_4vwecb$_0.userState;
    }
  });
  LoggedIn.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_4vwecb$_0.get_randomDoc_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_4vwecb$_0.get_ref_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_4vwecb$_0.get_ref_aqty80$($receiver);
  };
  LoggedIn.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_4vwecb$_0.delete_73z9b6$($receiver);
  };
  LoggedIn.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_4vwecb$_0.delete_ihdkly$($receiver);
  };
  LoggedIn.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_4vwecb$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  LoggedIn.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_4vwecb$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  LoggedIn.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_4vwecb$_0.query_wzkv1r$$default($receiver, query);
  };
  LoggedIn.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_4vwecb$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  LoggedIn.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_4vwecb$_0.save_73z9b6$($receiver);
  };
  LoggedIn.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_4vwecb$_0.save_biv66q$($receiver);
  };
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_4vwecb$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [HomeApi, LoggedInPath, HomePath, CsKillsView]
  };
  function ui$lambda$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.signOut();
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signOut_tstgz9$($receiver_1.menu, ui$lambda$lambda$lambda$lambda_2($receiver));
    $receiver.topbarUi_ihoiae$($receiver_0);
    return new TopAndContent($receiver_0.node, appListUi());
  }
  function NotLoggedInPath() {
  }
  NotLoggedInPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NotLoggedInPath',
    interfaces: [HomePath]
  };
  function NotLoggedIn(parent, home) {
    CsKillsView.call(this, parent);
    this.$delegate_aqqi0j$_0 = home;
    this.notLoggedIn_8ryzqd$_0 = this;
    this.rawView_p3ajp4$_0 = ui_1(this);
  }
  Object.defineProperty(NotLoggedIn.prototype, 'notLoggedIn', {
    get: function () {
      return this.notLoggedIn_8ryzqd$_0;
    }
  });
  Object.defineProperty(NotLoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_p3ajp4$_0;
    }
  });
  Object.defineProperty(NotLoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_aqqi0j$_0.db;
    }
  });
  Object.defineProperty(NotLoggedIn.prototype, 'home', {
    get: function () {
      return this.$delegate_aqqi0j$_0.home;
    }
  });
  Object.defineProperty(NotLoggedIn.prototype, 'links', {
    get: function () {
      return this.$delegate_aqqi0j$_0.links;
    }
  });
  Object.defineProperty(NotLoggedIn.prototype, 'toaster', {
    get: function () {
      return this.$delegate_aqqi0j$_0.toaster;
    }
  });
  Object.defineProperty(NotLoggedIn.prototype, 'userState', {
    get: function () {
      return this.$delegate_aqqi0j$_0.userState;
    }
  });
  NotLoggedIn.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_aqqi0j$_0.get_randomDoc_sj9vaa$($receiver);
  };
  NotLoggedIn.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_aqqi0j$_0.get_ref_sj9vaa$($receiver);
  };
  NotLoggedIn.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_aqqi0j$_0.get_ref_aqty80$($receiver);
  };
  NotLoggedIn.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_aqqi0j$_0.delete_73z9b6$($receiver);
  };
  NotLoggedIn.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_aqqi0j$_0.delete_ihdkly$($receiver);
  };
  NotLoggedIn.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_aqqi0j$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  NotLoggedIn.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_aqqi0j$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  NotLoggedIn.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_aqqi0j$_0.query_wzkv1r$$default($receiver, query);
  };
  NotLoggedIn.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_aqqi0j$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  NotLoggedIn.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_aqqi0j$_0.save_73z9b6$($receiver);
  };
  NotLoggedIn.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_aqqi0j$_0.save_biv66q$($receiver);
  };
  NotLoggedIn.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_aqqi0j$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  NotLoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotLoggedIn',
    interfaces: [HomeApi, NotLoggedInPath, HomePath, CsKillsView]
  };
  function ui$lambda$lambda$lambda$lambda_3(this$ui) {
    return function () {
      this$ui.home.signIn();
      return Unit;
    };
  }
  function ui_1($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signIn_tstgz9$($receiver_1.menu, ui$lambda$lambda$lambda$lambda_3($receiver));
    $receiver.topbarUi_ihoiae$($receiver_0);
    return new TopAndContent($receiver_0.node, appListUi());
  }
  function app$lambda(closure$id, closure$title) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_listGroupItem($receiver_0);
      get_listGroupItemAction($receiver_0);
      $receiver.href = '../' + closure$id + '/';
      $receiver.innerText = closure$title;
      return Unit;
    };
  }
  function app($receiver, id, title) {
    invoke(get_a($receiver.node), app$lambda(id, title));
  }
  function HomeApi() {
  }
  function HomeApi$topbarUi$lambda$lambda(this$HomeApi) {
    return function () {
      this$HomeApi.home.about();
      return Unit;
    };
  }
  HomeApi.prototype.topbarUi_ihoiae$ = function ($receiver) {
    remAssign($receiver.title, 'Apps I Make');
    var $receiver_0 = $receiver.right.button;
    $receiver_0.m1p2;
    $receiver_0.secondary;
    get_info($receiver_0.fa);
    this.click_9375ex$($receiver_0, HomeApi$topbarUi$lambda$lambda(this));
    get_m1(this.get_userIcon_tdhe4g$($receiver.right).cls);
  };
  HomeApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HomeApi',
    interfaces: [KillsLoginUixApi, HomePath]
  };
  function appListUi$lambda$lambda($receiver) {
    var $receiver_0 = get_insert($receiver).card;
    get_m2($receiver_0.cls);
    remAssign($receiver_0.header, 'Work In Progress');
    get_fontWeightBold(get_cls($receiver_0.header));
    var $receiver_1 = $receiver_0.listGroup;
    app($receiver_1, 'tasks', 'Tasks');
    app($receiver_1, 'gymclock', 'Gym Clock');
    app($receiver_1, 'checklist', 'Checklist');
    var $receiver_2 = get_insert($receiver).card;
    get_m2($receiver_2.cls);
    remAssign($receiver_2.header, 'More Work In Progress');
    get_fontWeightBold(get_cls($receiver_2.header));
    var $receiver_3 = $receiver_2.listGroup;
    app($receiver_3, 'tictactoe', 'Tic Tac Toe');
    app($receiver_3, 'music', 'Music Player');
    app($receiver_3, 'download', 'Download');
    return Unit;
  }
  function appListUi() {
    var $receiver = widget.factory.scrollPane;
    invoke($receiver.pane, appListUi$lambda$lambda);
    return $receiver.node;
  }
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
    FbLinksFactory.Companion.start_avsawv$(false, void 0, main$lambda);
  }
  function LinksPath() {
  }
  LinksPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinksPath',
    interfaces: [FbLinksApi]
  };
  function Links(deps) {
    FbLinksFactory.call(this, deps);
    this.links_f5mfgu$_0 = this;
    this.home_1qsjuy$_0 = this.root_7o50g$(Links$home$lambda(this, deps));
    this.about_kgxzj6$_0 = this.home.child_b2q6wh$(Links$about$lambda).provideDelegate_n5byny$(this, Links$about_metadata);
  }
  Object.defineProperty(Links.prototype, 'links', {
    get: function () {
      return this.links_f5mfgu$_0;
    }
  });
  Object.defineProperty(Links.prototype, 'home', {
    get: function () {
      return this.home_1qsjuy$_0;
    }
  });
  var Links$about_metadata = new PropertyMetadata('about');
  Object.defineProperty(Links.prototype, 'about', {
    get: function () {
      return this.about_kgxzj6$_0.getValue_lrcp0p$(this, Links$about_metadata);
    }
  });
  function Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$closure$deps = closure$deps_0;
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
            var $receiver = new Home(this.local$this$Links, this.local$lnk, this.local$closure$deps.hole);
            this.local$closure$deps.hole.remAssign_9i7ztu$($receiver);
            return $receiver;
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
  function Links$home$lambda(this$Links_0, closure$deps_0) {
    return function (lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$home$lambda(this$Links_0, closure$deps_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$about$lambda(home_0, linkage_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$home = home_0;
    this.local$linkage = linkage_0;
  }
  Coroutine$Links$about$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$about$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$about$lambda.prototype.constructor = Coroutine$Links$about$lambda;
  Coroutine$Links$about$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new About(this.local$home, this.local$linkage), this.local$home);
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
  function Links$about$lambda(home_0, linkage_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$about$lambda(home_0, linkage_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  Links.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Links',
    interfaces: [LinksPath, FbLinksFactory]
  };
  var package$index = _.index || (_.index = {});
  var package$about = package$index.about || (package$index.about = {});
  package$about.AboutPath = AboutPath;
  package$about.About = About;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$about.ui_ex5a4f$ = ui;
  var package$home = package$index.home || (package$index.home = {});
  package$home.HomePath = HomePath;
  package$home.Home = Home;
  var package$loggedin = package$home.loggedin || (package$home.loggedin = {});
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.ui_9eo8ok$ = ui_0;
  var package$notloggedin = package$home.notloggedin || (package$home.notloggedin = {});
  package$notloggedin.NotLoggedInPath = NotLoggedInPath;
  package$notloggedin.NotLoggedIn = NotLoggedIn;
  package$notloggedin.ui_m4qrdw$ = ui_1;
  package$home.HomeApi = HomeApi;
  package$home.appListUi = appListUi;
  package$index.main = main;
  package$index.LinksPath = LinksPath;
  package$index.Links = Links;
  LinksPath.prototype.get_randomDoc_sj9vaa$ = FbLinksApi.prototype.get_randomDoc_sj9vaa$;
  LinksPath.prototype.get_ref_sj9vaa$ = FbLinksApi.prototype.get_ref_sj9vaa$;
  LinksPath.prototype.get_ref_aqty80$ = FbLinksApi.prototype.get_ref_aqty80$;
  LinksPath.prototype.delete_73z9b6$ = FbLinksApi.prototype.delete_73z9b6$;
  LinksPath.prototype.delete_ihdkly$ = FbLinksApi.prototype.delete_ihdkly$;
  LinksPath.prototype.getCachedOrServer_prxdpg$ = FbLinksApi.prototype.getCachedOrServer_prxdpg$;
  LinksPath.prototype.getOrNull_m1hph$$default = FbLinksApi.prototype.getOrNull_m1hph$$default;
  LinksPath.prototype.query_wzkv1r$$default = FbLinksApi.prototype.query_wzkv1r$$default;
  LinksPath.prototype.randomEditable_mx4g9l$$default = FbLinksApi.prototype.randomEditable_mx4g9l$$default;
  LinksPath.prototype.save_73z9b6$ = FbLinksApi.prototype.save_73z9b6$;
  LinksPath.prototype.save_biv66q$ = FbLinksApi.prototype.save_biv66q$;
  LinksPath.prototype.toRandomFsDoc_xc7wmg$ = FbLinksApi.prototype.toRandomFsDoc_xc7wmg$;
  LinksPath.prototype.getOrNull_m1hph$ = FbLinksApi.prototype.getOrNull_m1hph$;
  LinksPath.prototype.query_wzkv1r$ = FbLinksApi.prototype.query_wzkv1r$;
  LinksPath.prototype.randomEditable_mx4g9l$ = FbLinksApi.prototype.randomEditable_mx4g9l$;
  HomePath.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  HomePath.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  HomePath.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  HomePath.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  HomePath.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  HomePath.prototype.getCachedOrServer_prxdpg$ = LinksPath.prototype.getCachedOrServer_prxdpg$;
  HomePath.prototype.getOrNull_m1hph$$default = LinksPath.prototype.getOrNull_m1hph$$default;
  HomePath.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  HomePath.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  HomePath.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  HomePath.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  HomePath.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  HomePath.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  HomePath.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  HomePath.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  AboutPath.prototype.get_randomDoc_sj9vaa$ = HomePath.prototype.get_randomDoc_sj9vaa$;
  AboutPath.prototype.get_ref_sj9vaa$ = HomePath.prototype.get_ref_sj9vaa$;
  AboutPath.prototype.get_ref_aqty80$ = HomePath.prototype.get_ref_aqty80$;
  AboutPath.prototype.delete_73z9b6$ = HomePath.prototype.delete_73z9b6$;
  AboutPath.prototype.delete_ihdkly$ = HomePath.prototype.delete_ihdkly$;
  AboutPath.prototype.getCachedOrServer_prxdpg$ = HomePath.prototype.getCachedOrServer_prxdpg$;
  AboutPath.prototype.getOrNull_m1hph$$default = HomePath.prototype.getOrNull_m1hph$$default;
  AboutPath.prototype.query_wzkv1r$$default = HomePath.prototype.query_wzkv1r$$default;
  AboutPath.prototype.randomEditable_mx4g9l$$default = HomePath.prototype.randomEditable_mx4g9l$$default;
  AboutPath.prototype.save_73z9b6$ = HomePath.prototype.save_73z9b6$;
  AboutPath.prototype.save_biv66q$ = HomePath.prototype.save_biv66q$;
  AboutPath.prototype.toRandomFsDoc_xc7wmg$ = HomePath.prototype.toRandomFsDoc_xc7wmg$;
  AboutPath.prototype.getOrNull_m1hph$ = HomePath.prototype.getOrNull_m1hph$;
  AboutPath.prototype.query_wzkv1r$ = HomePath.prototype.query_wzkv1r$;
  AboutPath.prototype.randomEditable_mx4g9l$ = HomePath.prototype.randomEditable_mx4g9l$;
  About.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  About.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  About.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  About.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  About.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  About.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  About.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  About.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  About.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  About.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  About.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  About.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  About.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  About.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  About.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  About.prototype.getOrNull_m1hph$ = AboutPath.prototype.getOrNull_m1hph$;
  About.prototype.query_wzkv1r$ = AboutPath.prototype.query_wzkv1r$;
  About.prototype.randomEditable_mx4g9l$ = AboutPath.prototype.randomEditable_mx4g9l$;
  About.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  About.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  About.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  About.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  About.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  Home.prototype.fwd_e1fa5e$$default = LinkApi.prototype.fwd_e1fa5e$$default;
  Home.prototype.fwd_nnhkmr$$default = LinkApi.prototype.fwd_nnhkmr$$default;
  Home.prototype.getOrNull_m1hph$ = HomePath.prototype.getOrNull_m1hph$;
  Home.prototype.query_wzkv1r$ = HomePath.prototype.query_wzkv1r$;
  Home.prototype.randomEditable_mx4g9l$ = HomePath.prototype.randomEditable_mx4g9l$;
  Home.prototype.fwd_e1fa5e$ = LinkApi.prototype.fwd_e1fa5e$;
  Home.prototype.fwd_nnhkmr$ = LinkApi.prototype.fwd_nnhkmr$;
  LoggedInPath.prototype.get_randomDoc_sj9vaa$ = HomePath.prototype.get_randomDoc_sj9vaa$;
  LoggedInPath.prototype.get_ref_sj9vaa$ = HomePath.prototype.get_ref_sj9vaa$;
  LoggedInPath.prototype.get_ref_aqty80$ = HomePath.prototype.get_ref_aqty80$;
  LoggedInPath.prototype.delete_73z9b6$ = HomePath.prototype.delete_73z9b6$;
  LoggedInPath.prototype.delete_ihdkly$ = HomePath.prototype.delete_ihdkly$;
  LoggedInPath.prototype.getCachedOrServer_prxdpg$ = HomePath.prototype.getCachedOrServer_prxdpg$;
  LoggedInPath.prototype.getOrNull_m1hph$$default = HomePath.prototype.getOrNull_m1hph$$default;
  LoggedInPath.prototype.query_wzkv1r$$default = HomePath.prototype.query_wzkv1r$$default;
  LoggedInPath.prototype.randomEditable_mx4g9l$$default = HomePath.prototype.randomEditable_mx4g9l$$default;
  LoggedInPath.prototype.save_73z9b6$ = HomePath.prototype.save_73z9b6$;
  LoggedInPath.prototype.save_biv66q$ = HomePath.prototype.save_biv66q$;
  LoggedInPath.prototype.toRandomFsDoc_xc7wmg$ = HomePath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInPath.prototype.getOrNull_m1hph$ = HomePath.prototype.getOrNull_m1hph$;
  LoggedInPath.prototype.query_wzkv1r$ = HomePath.prototype.query_wzkv1r$;
  LoggedInPath.prototype.randomEditable_mx4g9l$ = HomePath.prototype.randomEditable_mx4g9l$;
  HomeApi.prototype.get_randomDoc_sj9vaa$ = HomePath.prototype.get_randomDoc_sj9vaa$;
  HomeApi.prototype.get_ref_sj9vaa$ = HomePath.prototype.get_ref_sj9vaa$;
  HomeApi.prototype.get_ref_aqty80$ = HomePath.prototype.get_ref_aqty80$;
  HomeApi.prototype.delete_73z9b6$ = HomePath.prototype.delete_73z9b6$;
  HomeApi.prototype.delete_ihdkly$ = HomePath.prototype.delete_ihdkly$;
  HomeApi.prototype.getCachedOrServer_prxdpg$ = HomePath.prototype.getCachedOrServer_prxdpg$;
  HomeApi.prototype.getOrNull_m1hph$$default = HomePath.prototype.getOrNull_m1hph$$default;
  HomeApi.prototype.query_wzkv1r$$default = HomePath.prototype.query_wzkv1r$$default;
  HomeApi.prototype.randomEditable_mx4g9l$$default = HomePath.prototype.randomEditable_mx4g9l$$default;
  HomeApi.prototype.save_73z9b6$ = HomePath.prototype.save_73z9b6$;
  HomeApi.prototype.save_biv66q$ = HomePath.prototype.save_biv66q$;
  HomeApi.prototype.toRandomFsDoc_xc7wmg$ = HomePath.prototype.toRandomFsDoc_xc7wmg$;
  HomeApi.prototype.get_clickActivate_tvm2vp$ = KillsLoginUixApi.prototype.get_clickActivate_tvm2vp$;
  HomeApi.prototype.get_clickToggle_tvm2vp$ = KillsLoginUixApi.prototype.get_clickToggle_tvm2vp$;
  HomeApi.prototype.get_oldKilled_vsdo34$ = KillsLoginUixApi.prototype.get_oldKilled_vsdo34$;
  HomeApi.prototype.get_oldKilledOpt_vsdo34$ = KillsLoginUixApi.prototype.get_oldKilledOpt_vsdo34$;
  HomeApi.prototype.get_routing_lqv1tx$ = KillsLoginUixApi.prototype.get_routing_lqv1tx$;
  HomeApi.prototype.get_userIcon_tdhe4g$ = KillsLoginUixApi.prototype.get_userIcon_tdhe4g$;
  HomeApi.prototype.rx_y6x17j$ = KillsLoginUixApi.prototype.rx_y6x17j$;
  HomeApi.prototype.rx_46ic4w$ = KillsLoginUixApi.prototype.rx_46ic4w$;
  HomeApi.prototype.rx_wgabca$ = KillsLoginUixApi.prototype.rx_wgabca$;
  HomeApi.prototype.rx_djv61p$ = KillsLoginUixApi.prototype.rx_djv61p$;
  HomeApi.prototype.addDirty_3529di$ = KillsLoginUixApi.prototype.addDirty_3529di$;
  HomeApi.prototype.bind_zfaq6f$ = KillsLoginUixApi.prototype.bind_zfaq6f$;
  HomeApi.prototype.bindValue_xy1r9h$ = KillsLoginUixApi.prototype.bindValue_xy1r9h$;
  HomeApi.prototype.click_4eku4n$ = KillsLoginUixApi.prototype.click_4eku4n$;
  HomeApi.prototype.click_9375ex$ = KillsLoginUixApi.prototype.click_9375ex$;
  HomeApi.prototype.click_512jbc$ = KillsLoginUixApi.prototype.click_512jbc$;
  HomeApi.prototype.click_3zaxtq$ = KillsLoginUixApi.prototype.click_3zaxtq$;
  HomeApi.prototype.click_ts68bh$ = KillsLoginUixApi.prototype.click_ts68bh$;
  HomeApi.prototype.containsRx_1w65cx$ = KillsLoginUixApi.prototype.containsRx_1w65cx$;
  HomeApi.prototype.enabled_hlnvpg$ = KillsLoginUixApi.prototype.enabled_hlnvpg$;
  HomeApi.prototype.feedTo_9o5f67$ = KillsLoginUixApi.prototype.feedTo_9o5f67$;
  HomeApi.prototype.filtered_tnde95$ = KillsLoginUixApi.prototype.filtered_tnde95$;
  HomeApi.prototype.forEach_xwzbbo$ = KillsLoginUixApi.prototype.forEach_xwzbbo$;
  HomeApi.prototype.forEach_35q7bt$ = KillsLoginUixApi.prototype.forEach_35q7bt$;
  HomeApi.prototype.forEachLater_xwzbbo$ = KillsLoginUixApi.prototype.forEachLater_xwzbbo$;
  HomeApi.prototype.incremented_eoy9qo$ = KillsLoginUixApi.prototype.incremented_eoy9qo$;
  HomeApi.prototype.keepScreenAwake_ipfk82$ = KillsLoginUixApi.prototype.keepScreenAwake_ipfk82$;
  HomeApi.prototype.linked_n1nom7$ = KillsLoginUixApi.prototype.linked_n1nom7$;
  HomeApi.prototype.listen_ubid8w$ = KillsLoginUixApi.prototype.listen_ubid8w$;
  HomeApi.prototype.map_jtxi0h$ = KillsLoginUixApi.prototype.map_jtxi0h$;
  HomeApi.prototype.mapLive_1mq1ue$ = KillsLoginUixApi.prototype.mapLive_1mq1ue$;
  HomeApi.prototype.on_2stdkb$ = KillsLoginUixApi.prototype.on_2stdkb$;
  HomeApi.prototype.on_hgi4ad$ = KillsLoginUixApi.prototype.on_hgi4ad$;
  HomeApi.prototype.onChange_rlu5c6$ = KillsLoginUixApi.prototype.onChange_rlu5c6$;
  HomeApi.prototype.onChange_oeam7t$ = KillsLoginUixApi.prototype.onChange_oeam7t$;
  HomeApi.prototype.onClick_pofl4w$ = KillsLoginUixApi.prototype.onClick_pofl4w$;
  HomeApi.prototype.onInput_clfw57$ = KillsLoginUixApi.prototype.onInput_clfw57$;
  HomeApi.prototype.plusAssign_ubid8w$ = KillsLoginUixApi.prototype.plusAssign_ubid8w$;
  HomeApi.prototype.process_7xi3v7$ = KillsLoginUixApi.prototype.process_7xi3v7$;
  HomeApi.prototype.remAssign_wgabca$ = KillsLoginUixApi.prototype.remAssign_wgabca$;
  HomeApi.prototype.remAssign_djv61p$ = KillsLoginUixApi.prototype.remAssign_djv61p$;
  HomeApi.prototype.remAssign_7fncnf$ = KillsLoginUixApi.prototype.remAssign_7fncnf$;
  HomeApi.prototype.runView_n76bhm$ = KillsLoginUixApi.prototype.runView_n76bhm$;
  HomeApi.prototype.rxClass_c5yvvx$ = KillsLoginUixApi.prototype.rxClass_c5yvvx$;
  HomeApi.prototype.rxClass_6sflyw$ = KillsLoginUixApi.prototype.rxClass_6sflyw$;
  HomeApi.prototype.rxClass_9npl0m$ = KillsLoginUixApi.prototype.rxClass_9npl0m$;
  HomeApi.prototype.rxClass_62ldac$ = KillsLoginUixApi.prototype.rxClass_62ldac$;
  HomeApi.prototype.signIn_tstgz9$ = KillsLoginUixApi.prototype.signIn_tstgz9$;
  HomeApi.prototype.signOut_tstgz9$ = KillsLoginUixApi.prototype.signOut_tstgz9$;
  HomeApi.prototype.toChannelLater_z5dyp2$ = KillsLoginUixApi.prototype.toChannelLater_z5dyp2$;
  HomeApi.prototype.toRxSet_jr4bl4$ = KillsLoginUixApi.prototype.toRxSet_jr4bl4$;
  HomeApi.prototype.visibility_12lt6u$ = KillsLoginUixApi.prototype.visibility_12lt6u$;
  HomeApi.prototype.visible_od9jl4$ = KillsLoginUixApi.prototype.visible_od9jl4$;
  HomeApi.prototype.getOrNull_m1hph$ = HomePath.prototype.getOrNull_m1hph$;
  HomeApi.prototype.query_wzkv1r$ = HomePath.prototype.query_wzkv1r$;
  HomeApi.prototype.randomEditable_mx4g9l$ = HomePath.prototype.randomEditable_mx4g9l$;
  LoggedIn.prototype.topbarUi_ihoiae$ = HomeApi.prototype.topbarUi_ihoiae$;
  LoggedIn.prototype.get_userIcon_tdhe4g$ = HomeApi.prototype.get_userIcon_tdhe4g$;
  LoggedIn.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  LoggedIn.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  LoggedIn.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  NotLoggedInPath.prototype.get_randomDoc_sj9vaa$ = HomePath.prototype.get_randomDoc_sj9vaa$;
  NotLoggedInPath.prototype.get_ref_sj9vaa$ = HomePath.prototype.get_ref_sj9vaa$;
  NotLoggedInPath.prototype.get_ref_aqty80$ = HomePath.prototype.get_ref_aqty80$;
  NotLoggedInPath.prototype.delete_73z9b6$ = HomePath.prototype.delete_73z9b6$;
  NotLoggedInPath.prototype.delete_ihdkly$ = HomePath.prototype.delete_ihdkly$;
  NotLoggedInPath.prototype.getCachedOrServer_prxdpg$ = HomePath.prototype.getCachedOrServer_prxdpg$;
  NotLoggedInPath.prototype.getOrNull_m1hph$$default = HomePath.prototype.getOrNull_m1hph$$default;
  NotLoggedInPath.prototype.query_wzkv1r$$default = HomePath.prototype.query_wzkv1r$$default;
  NotLoggedInPath.prototype.randomEditable_mx4g9l$$default = HomePath.prototype.randomEditable_mx4g9l$$default;
  NotLoggedInPath.prototype.save_73z9b6$ = HomePath.prototype.save_73z9b6$;
  NotLoggedInPath.prototype.save_biv66q$ = HomePath.prototype.save_biv66q$;
  NotLoggedInPath.prototype.toRandomFsDoc_xc7wmg$ = HomePath.prototype.toRandomFsDoc_xc7wmg$;
  NotLoggedInPath.prototype.getOrNull_m1hph$ = HomePath.prototype.getOrNull_m1hph$;
  NotLoggedInPath.prototype.query_wzkv1r$ = HomePath.prototype.query_wzkv1r$;
  NotLoggedInPath.prototype.randomEditable_mx4g9l$ = HomePath.prototype.randomEditable_mx4g9l$;
  NotLoggedIn.prototype.topbarUi_ihoiae$ = HomeApi.prototype.topbarUi_ihoiae$;
  NotLoggedIn.prototype.get_userIcon_tdhe4g$ = HomeApi.prototype.get_userIcon_tdhe4g$;
  NotLoggedIn.prototype.getOrNull_m1hph$ = NotLoggedInPath.prototype.getOrNull_m1hph$;
  NotLoggedIn.prototype.query_wzkv1r$ = NotLoggedInPath.prototype.query_wzkv1r$;
  NotLoggedIn.prototype.randomEditable_mx4g9l$ = NotLoggedInPath.prototype.randomEditable_mx4g9l$;
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
  Links.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  Links.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  Links.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  Links.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  ref = getCallableRef('Reference', function (title, url) {
    return new Reference(title, url);
  });
  references = listOf([ref('Bootstrap', 'https://getbootstrap.com/'), ref('Kotlin Programming Language', 'https://kotlinlang.org/'), ref('web-animations', 'https://github.com/web-animations/web-animations-js'), ref('jQuery', 'https://jquery.com/'), ref('Firebase', 'https://firebase.google.com/'), ref('Font Awesome', 'https://fontawesome.com/'), ref('Cloud9', 'https://c9.io/'), ref('GitHub', 'https://github.com/'), ref('FA2PNG', 'http://fa2png.io/'), ref('Progressive Web Apps', 'https://developers.google.com/web/progressive-web-apps/'), ref('IntelliJ IDEA', 'https://www.jetbrains.com/idea/')]);
  main();
  Kotlin.defineModule('appsimake-index', _);
  return _;
}(typeof this['appsimake-index'] === 'undefined' ? {} : this['appsimake-index'], kotlin, this['appsimake-commonui'], this['appsimake-commonfb'], this['appsimake-domx'], this['appsimake-commonshr'], this['appsimake-bootstrap'], this['appsimake-fontawesome']);

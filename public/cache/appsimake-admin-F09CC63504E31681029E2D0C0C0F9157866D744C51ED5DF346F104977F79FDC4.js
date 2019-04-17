if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-adminlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-adminlib' was not found. Please, check whether 'appsimake-adminlib' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-indexlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-indexlib' was not found. Please, check whether 'appsimake-indexlib' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['appsimake-commonlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'appsimake-commonlib' was not found. Please, check whether 'appsimake-commonlib' is loaded prior to 'appsimake-admin'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-admin'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-admin'.");
}
this['appsimake-admin'] = function (_, Kotlin, $module$appsimake_commonfb, $module$appsimake_adminlib, $module$appsimake_commonui, $module$appsimake_commonshr, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_fontawesome, $module$appsimake_indexlib, $module$appsimake_firebase, $module$appsimake_commonlib, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var FbLinksFactory = $module$appsimake_commonfb.commonfb.FbLinksFactory;
  var admin = $module$appsimake_adminlib.admin;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CsKillsView = $module$appsimake_commonui.commonui.view.CsKillsView;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var FBBackApi = $module$appsimake_commonfb.commonfb.FBBackApi;
  var BackEditKillsUixApi = $module$appsimake_commonui.commonui.BackEditKillsUixApi;
  var HasBack = $module$appsimake_commonui.commonui.HasBack;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var Unit = Kotlin.kotlin.Unit;
  var getCallableRef = Kotlin.getCallableRef;
  var get_textarea = $module$appsimake_domx.domx.get_textarea_asww5s$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_scrollVertical = $module$appsimake_domx.styles.get_scrollVertical_kre7dp$;
  var get_resizeNone = $module$appsimake_domx.styles.get_resizeNone_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_edit = $module$appsimake_fontawesome.fontawesome.get_edit_xml72e$;
  var get_code = $module$appsimake_fontawesome.fontawesome.get_code_xml72e$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var index = $module$appsimake_indexlib.index;
  var get_meta = $module$appsimake_commonshr.commonshr.get_meta_py8usb$;
  var get_about = $module$appsimake_indexlib.index.get_about_e59bpv$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var advance = $module$appsimake_commonui.commonui.view.advance_zadjfr$;
  var ForwardBase = $module$appsimake_commonui.commonui.view.ForwardBase;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var DbApi = $module$appsimake_firebase.firebase.DbApi;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var forwarding = $module$appsimake_commonui.commonui.view.forwarding_caeb5u$;
  var links = $module$appsimake_commonui.commonui.links;
  var wrap = $module$appsimake_firebase.firebase.firestore.wrap_ty25rn$;
  var HtmlPage = $module$appsimake_commonlib.commonlib.HtmlPage;
  var toSource = $module$appsimake_commonshr.commonshr.toSource_6l9r10$;
  var BaseTC = $module$appsimake_commonui.commonui.links.BaseTC;
  var LinkApi = $module$appsimake_commonui.commonui.links.LinkApi;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var MultiForward = $module$appsimake_commonui.commonui.view.MultiForward;
  var ProgressTC = $module$appsimake_commonui.commonui.topandcontent.ProgressTC;
  var commonui = $module$appsimake_commonui.commonui;
  var TokenDeveloperClaims = $module$appsimake_commonlib.commonlib.commonlib.TokenDeveloperClaims;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var firestore = $module$appsimake_firebase.firebase.firestore;
  var readDynamic = $module$appsimake_commonshr.commonshr.properties.readDynamic_121my8$;
  var launchReport = $module$appsimake_commonui.commonui.launchReport_hilpzi$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var get_textMuted = $module$appsimake_bootstrap.bootstrap.get_textMuted_kre7dp$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var column_0 = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  EditHtml.prototype = Object.create(CsKillsView.prototype);
  EditHtml.prototype.constructor = EditHtml;
  Index.prototype = Object.create(ForwardBase.prototype);
  Index.prototype.constructor = Index;
  Links.prototype = Object.create(FbLinksFactory.prototype);
  Links.prototype.constructor = Links;
  LoggedIn.prototype = Object.create(MultiForward.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  LoggedInAdmin.prototype = Object.create(CsKillsView.prototype);
  LoggedInAdmin.prototype.constructor = LoggedInAdmin;
  LoggedInNoAdmin.prototype = Object.create(CsKillsView.prototype);
  LoggedInNoAdmin.prototype.constructor = LoggedInNoAdmin;
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
    FbLinksFactory.Companion.start_gwo7fm$(admin.adminLib, void 0, void 0, main$lambda);
  }
  function EditHtmlPath() {
  }
  EditHtmlPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditHtmlPath',
    interfaces: [LoggedInPath]
  };
  function EditHtml(parent, linkage, editable) {
    CsKillsView.call(this, parent);
    this.linkage = linkage;
    this.$delegate_jdp13l$_0 = parent;
    this.edit_qsbz0v$_0 = this;
    this.editing_k9gjgh$_0 = this.rxEditing_6l8l9j$(editable);
    this.rawView_1xya4s$_0 = ui(this);
  }
  Object.defineProperty(EditHtml.prototype, 'edit', {
    get: function () {
      return this.edit_qsbz0v$_0;
    }
  });
  Object.defineProperty(EditHtml.prototype, 'editing', {
    get: function () {
      return this.editing_k9gjgh$_0;
    }
  });
  Object.defineProperty(EditHtml.prototype, 'rawView', {
    get: function () {
      return this.rawView_1xya4s$_0;
    }
  });
  Object.defineProperty(EditHtml.prototype, 'db', {
    get: function () {
      return this.$delegate_jdp13l$_0.db;
    }
  });
  Object.defineProperty(EditHtml.prototype, 'links', {
    get: function () {
      return this.$delegate_jdp13l$_0.links;
    }
  });
  Object.defineProperty(EditHtml.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_jdp13l$_0.loggedIn;
    }
  });
  EditHtml.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.$delegate_jdp13l$_0.get_randomDoc_lsue4w$($receiver);
  };
  EditHtml.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_jdp13l$_0.get_randomDoc_sj9vaa$($receiver);
  };
  EditHtml.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_jdp13l$_0.get_ref_sj9vaa$($receiver);
  };
  EditHtml.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_jdp13l$_0.get_ref_aqty80$($receiver);
  };
  EditHtml.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_jdp13l$_0.delete_73z9b6$($receiver);
  };
  EditHtml.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_jdp13l$_0.delete_ihdkly$($receiver);
  };
  EditHtml.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_jdp13l$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  EditHtml.prototype.getOrDefault_bo0woj$$default = function ($receiver, source, fn, continuation) {
    return this.$delegate_jdp13l$_0.getOrDefault_bo0woj$$default($receiver, source, fn, continuation);
  };
  EditHtml.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_jdp13l$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  EditHtml.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_jdp13l$_0.query_wzkv1r$$default($receiver, query);
  };
  EditHtml.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_jdp13l$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  EditHtml.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_jdp13l$_0.save_73z9b6$($receiver);
  };
  EditHtml.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_jdp13l$_0.save_biv66q$($receiver);
  };
  EditHtml.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.$delegate_jdp13l$_0.set_o9yh22$$default($receiver, data, options);
  };
  EditHtml.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.$delegate_jdp13l$_0.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  EditHtml.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_jdp13l$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(EditHtml.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  EditHtml.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditHtml',
    interfaces: [BackEditKillsUixApi, FBBackApi, HasBack, EditHtmlPath, LoggedInPath, CsKillsView]
  };
  function ui$updateEditing(this$ui) {
    return function (html) {
      this$ui.editing.current.html.remAssign_11rc$(html);
    };
  }
  function ui$lambda$lambda(this$) {
    return function (html) {
      this$.value = html;
      return Unit;
    };
  }
  function ui$lambda$lambda_0(closure$codeChange, this$) {
    return function (it) {
      closure$codeChange.emit_11rb$(this$.value);
      return Unit;
    };
  }
  function ui$lambda(closure$pellChange, closure$codeChange, this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexGrow1($receiver_0);
      get_scrollVertical($receiver_0);
      get_resizeNone($receiver_0);
      closure$pellChange.plusAssign_qlkmfe$(ui$lambda$lambda($receiver));
      $receiver.oninput = ui$lambda$lambda_0(closure$codeChange, $receiver);
      $receiver.value = this$ui.editing.current.html.now;
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda(closure$pellChange) {
    return function (html) {
      closure$pellChange.emit_11rb$(html);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda() {
    pell.exec('formatBlock', '<h3>');
    return Unit;
  }
  function ui$lambda$lambda$lambda_0(this$) {
    return function (html) {
      this$.content.innerHTML = html;
      return Unit;
    };
  }
  function ui$lambda_0(closure$pellChange, this$ui, closure$codeChange) {
    return function ($receiver) {
      var tmp$ = pell;
      var $receiver_0 = {};
      var closure$pellChange_0 = closure$pellChange;
      $receiver_0.element = $receiver;
      $receiver_0.onChange = ui$lambda$lambda$lambda(closure$pellChange_0);
      $receiver_0.styleWithCSS = true;
      var $receiver_1 = {};
      $receiver_1.name = 'heading3';
      $receiver_1.icon = '<b>H<sub>3<\/sub><\/b>';
      $receiver_1.title = 'Heading 3';
      $receiver_1.result = ui$lambda$lambda$lambda$lambda;
      $receiver_0.actions = ['bold', 'italic', 'underline', 'strikethrough', 'heading1', 'heading2', $receiver_1, 'paragraph', 'quote', 'olist', 'ulist', 'code', 'line', 'link', 'image'];
      var $receiver_2 = tmp$.init($receiver_0);
      var this$ui_0 = this$ui;
      var closure$codeChange_0 = closure$codeChange;
      $receiver_2.content.innerHTML = this$ui_0.editing.current.html.now;
      closure$codeChange_0.plusAssign_qlkmfe$(ui$lambda$lambda$lambda_0($receiver_2));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_0(closure$activeNode, closure$editorNode) {
    return function () {
      closure$activeNode.remAssign_11rb$(closure$editorNode);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_1(closure$activeNode, closure$htmlNode) {
    return function () {
      closure$activeNode.remAssign_11rb$(closure$htmlNode);
      return Unit;
    };
  }
  function ui$lambda_1(closure$activeNode, this$ui) {
    return function ($receiver) {
      this$ui.remAssign_djv61p$(get_widget($receiver), closure$activeNode);
      return Unit;
    };
  }
  function ui($receiver) {
    var activeNode = new Var(null);
    var updateEditing = ui$updateEditing($receiver);
    var pellChange = new Emitter();
    var codeChange = new Emitter();
    pellChange.plusAssign_qlkmfe$(getCallableRef('updateEditing', function (html) {
      return updateEditing(html), Unit;
    }));
    codeChange.plusAssign_qlkmfe$(getCallableRef('updateEditing', function (html) {
      return updateEditing(html), Unit;
    }));
    var htmlNode = invoke(get_textarea(document), ui$lambda(pellChange, codeChange, $receiver));
    var editorNode = invoke(get_div(document), ui$lambda_0(pellChange, $receiver, codeChange));
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backSaveDiscard_e1rmy3$($receiver_0.slots.left);
    remAssign($receiver_0.title, 'Edit Html');
    var $receiver_1 = $receiver_0.tabs;
    var $receiver_2 = $receiver_1.tab;
    get_edit($receiver_2.icon.fa);
    $receiver.get_clickActivate_tvm2vp$($receiver_2);
    $receiver_2.onActivate.invoke_11rb$(ui$lambda$lambda$lambda$lambda_0(activeNode, editorNode));
    $receiver_2.activate();
    var $receiver_3 = $receiver_1.tab;
    get_code($receiver_3.icon.fa);
    $receiver.get_clickActivate_tvm2vp$($receiver_3);
    $receiver_3.onActivate.invoke_11rb$(ui$lambda$lambda$lambda$lambda_1(activeNode, htmlNode));
    $receiver.get_saveButton_tdhe4g$($receiver_0.right);
    return new TopAndContent($receiver_0.node, column(document, ui$lambda_1(activeNode, $receiver)));
  }
  function IndexPath() {
  }
  IndexPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IndexPath',
    interfaces: [LoggedInPath]
  };
  function Index(parent, linkage) {
    ForwardBase.call(this, parent);
    this.linkage_56atgs$_0 = linkage;
    this.$delegate_zdd095$_0 = parent;
    this.index_ds45d$_0 = this;
    this.rawView_6e8nzw$_0 = ui_0(this);
  }
  Object.defineProperty(Index.prototype, 'linkage', {
    get: function () {
      return this.linkage_56atgs$_0;
    }
  });
  Object.defineProperty(Index.prototype, 'index', {
    get: function () {
      return this.index_ds45d$_0;
    }
  });
  Object.defineProperty(Index.prototype, 'rawView', {
    get: function () {
      return this.rawView_6e8nzw$_0;
    }
  });
  function Coroutine$Index$about$lambda(this$Index_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Index = this$Index_0;
  }
  Coroutine$Index$about$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Index$about$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Index$about$lambda.prototype.constructor = Coroutine$Index$about$lambda;
  Coroutine$Index$about$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Index.fwd_e1fa5e$(this.local$this$Index.links.editHtml, get_about(get_meta(index.indexLib.app)).path, void 0, this);
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
  function Index$about$lambda(this$Index_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Index$about$lambda(this$Index_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Index.prototype.about = function () {
    advance(this, Index$about$lambda(this));
  };
  Object.defineProperty(Index.prototype, 'db', {
    get: function () {
      return this.$delegate_zdd095$_0.db;
    }
  });
  Object.defineProperty(Index.prototype, 'links', {
    get: function () {
      return this.$delegate_zdd095$_0.links;
    }
  });
  Object.defineProperty(Index.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_zdd095$_0.loggedIn;
    }
  });
  Index.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.$delegate_zdd095$_0.get_randomDoc_lsue4w$($receiver);
  };
  Index.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_zdd095$_0.get_randomDoc_sj9vaa$($receiver);
  };
  Index.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_zdd095$_0.get_ref_sj9vaa$($receiver);
  };
  Index.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_zdd095$_0.get_ref_aqty80$($receiver);
  };
  Index.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_zdd095$_0.delete_73z9b6$($receiver);
  };
  Index.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_zdd095$_0.delete_ihdkly$($receiver);
  };
  Index.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_zdd095$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  Index.prototype.getOrDefault_bo0woj$$default = function ($receiver, source, fn, continuation) {
    return this.$delegate_zdd095$_0.getOrDefault_bo0woj$$default($receiver, source, fn, continuation);
  };
  Index.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_zdd095$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  Index.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_zdd095$_0.query_wzkv1r$$default($receiver, query);
  };
  Index.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_zdd095$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  Index.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_zdd095$_0.save_73z9b6$($receiver);
  };
  Index.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_zdd095$_0.save_biv66q$($receiver);
  };
  Index.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.$delegate_zdd095$_0.set_o9yh22$$default($receiver, data, options);
  };
  Index.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.$delegate_zdd095$_0.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  Index.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_zdd095$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(Index.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  Index.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Index',
    interfaces: [FBBackApi, HasBack, IndexPath, LoggedInTC, LoggedInPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.about();
      return Unit;
    };
  }
  function ui$lambda$lambda_1(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_insert($receiver).listGroup;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      var $receiver_1 = $receiver_0.item.listGroupButton;
      remAssign($receiver_1.text, 'About');
      this$ui_0.click_3zaxtq$($receiver_1, ui$lambda$lambda$lambda$lambda$lambda(this$ui_0));
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_tdhe4g$($receiver_0.left);
    remAssign($receiver_0.title, 'Index - Admin');
    var tmp$ = $receiver_0.node;
    var $receiver_1 = widget.factory.scrollPane;
    invoke($receiver_1.pane, ui$lambda$lambda_1($receiver));
    return new TopAndContent(tmp$, $receiver_1.node);
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
    this.links_aqggl$_0 = this;
    this.home_4j870n$_0 = this.root_7o50g$(Links$home$lambda(this, deps));
    this.index_11txyc$_0 = this.home.child_b2q6wh$(Links$index$lambda).provideDelegate_n5byny$(this, Links$index_metadata);
    this.editHtml_1g1wv$_0 = this.base_sj7hg3$().param_kchx42$(links.StringHasher).child_jgcrpc$(Links$editHtml$lambda(this)).provideDelegate_n5byny$(this, Links$editHtml_metadata);
  }
  Object.defineProperty(Links.prototype, 'links', {
    get: function () {
      return this.links_aqggl$_0;
    }
  });
  Object.defineProperty(Links.prototype, 'home', {
    get: function () {
      return this.home_4j870n$_0;
    }
  });
  var Links$index_metadata = new PropertyMetadata('index');
  Object.defineProperty(Links.prototype, 'index', {
    get: function () {
      return this.index_11txyc$_0.getValue_lrcp0p$(this, Links$index_metadata);
    }
  });
  var Links$editHtml_metadata = new PropertyMetadata('editHtml');
  Object.defineProperty(Links.prototype, 'editHtml', {
    get: function () {
      return this.editHtml_1g1wv$_0.getValue_lrcp0p$(this, Links$editHtml_metadata);
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
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.requestUser(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$Links.requestCustomToken_v1eir6$(tmp$, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var user = this.result_0;
            var $receiver = new LoggedIn(this.local$this$Links, this.local$lnk, this.local$closure$deps.hole, user);
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
  function Coroutine$Links$index$lambda(loggedIn_0, linkage_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$loggedIn = loggedIn_0;
    this.local$linkage = linkage_0;
  }
  Coroutine$Links$index$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$index$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$index$lambda.prototype.constructor = Coroutine$Links$index$lambda;
  Coroutine$Links$index$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new Index(this.local$loggedIn, this.local$linkage), this.local$loggedIn);
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
  function Links$index$lambda(loggedIn_0, linkage_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$index$lambda(loggedIn_0, linkage_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Links$editHtml$lambda$lambda() {
    return new HtmlPage();
  }
  function Links$editHtml$lambda$lambda_0() {
    return new HtmlPage();
  }
  function Coroutine$Links$editHtml$lambda(this$Links_0, base_0, param_0, link_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$base = base_0;
    this.local$param = param_0;
    this.local$link = link_0;
  }
  Coroutine$Links$editHtml$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$editHtml$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$editHtml$lambda.prototype.constructor = Coroutine$Links$editHtml$lambda;
  Coroutine$Links$editHtml$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.getOrDefault_bo0woj$(toSource(wrap(this.local$this$Links.db.doc(this.local$param)), Links$editHtml$lambda$lambda), void 0, Links$editHtml$lambda$lambda_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return forwarding(new EditHtml(this.local$base, this.local$link, this.result_0), this.local$base);
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
  function Links$editHtml$lambda(this$Links_0) {
    return function (base_0, param_0, link_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$editHtml$lambda(this$Links_0, base_0, param_0, link_0, continuation_0);
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
    MultiForward.call(this, hole);
    this.linkage_31ffzo$_0 = linkage;
    this.user = user;
    this.$delegate_a5dgnl$_0 = links;
    this.loggedIn_kizqxg$_0 = this;
    this.currentView_7z2en9$_0 = this.get_oldKilled_vsdo34$(new Var(new ProgressTC(this)));
    commonui.globalStatus.remAssign_11rb$('Checking admin status...');
    launchReport(this, LoggedIn_init$lambda(this));
  }
  Object.defineProperty(LoggedIn.prototype, 'linkage', {
    get: function () {
      return this.linkage_31ffzo$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_kizqxg$_0;
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
  function Coroutine$LoggedIn$index$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$index$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$index$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$index$lambda.prototype.constructor = Coroutine$LoggedIn$index$lambda;
  Coroutine$LoggedIn$index$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.fwd_nnhkmr$(this.local$this$LoggedIn.links.index, void 0, this);
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
  function LoggedIn$index$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$index$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.index = function () {
    advance(this, LoggedIn$index$lambda(this));
  };
  Object.defineProperty(LoggedIn.prototype, 'currentView', {
    get: function () {
      return this.currentView_7z2en9$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_a5dgnl$_0.db;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'links', {
    get: function () {
      return this.$delegate_a5dgnl$_0.links;
    }
  });
  LoggedIn.prototype.get_randomDoc_lsue4w$ = function ($receiver) {
    return this.$delegate_a5dgnl$_0.get_randomDoc_lsue4w$($receiver);
  };
  LoggedIn.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_a5dgnl$_0.get_randomDoc_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_a5dgnl$_0.get_ref_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_a5dgnl$_0.get_ref_aqty80$($receiver);
  };
  LoggedIn.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_a5dgnl$_0.delete_73z9b6$($receiver);
  };
  LoggedIn.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_a5dgnl$_0.delete_ihdkly$($receiver);
  };
  LoggedIn.prototype.getCachedOrServer_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_a5dgnl$_0.getCachedOrServer_prxdpg$($receiver, continuation);
  };
  LoggedIn.prototype.getOrDefault_bo0woj$$default = function ($receiver, source, fn, continuation) {
    return this.$delegate_a5dgnl$_0.getOrDefault_bo0woj$$default($receiver, source, fn, continuation);
  };
  LoggedIn.prototype.getOrNull_m1hph$$default = function ($receiver, source, continuation) {
    return this.$delegate_a5dgnl$_0.getOrNull_m1hph$$default($receiver, source, continuation);
  };
  LoggedIn.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_a5dgnl$_0.query_wzkv1r$$default($receiver, query);
  };
  LoggedIn.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_a5dgnl$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  LoggedIn.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_a5dgnl$_0.save_73z9b6$($receiver);
  };
  LoggedIn.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_a5dgnl$_0.save_biv66q$($receiver);
  };
  LoggedIn.prototype.set_o9yh22$$default = function ($receiver, data, options) {
    return this.$delegate_a5dgnl$_0.set_o9yh22$$default($receiver, data, options);
  };
  LoggedIn.prototype.toFsDoc_bo0woj$$default = function ($receiver, source, default_0, continuation) {
    return this.$delegate_a5dgnl$_0.toFsDoc_bo0woj$$default($receiver, source, default_0, continuation);
  };
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_a5dgnl$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  function Coroutine$LoggedIn_init$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
    this.local$$receiver = void 0;
  }
  Coroutine$LoggedIn_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn_init$lambda.prototype.constructor = Coroutine$LoggedIn_init$lambda;
  Coroutine$LoggedIn_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = new TokenDeveloperClaims();
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$LoggedIn.user.getIdTokenResult(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            readDynamic(this.local$$receiver, this.result_0.claims, firestore.FsDynamicOps);
            var this$LoggedIn = this.local$this$LoggedIn;
            var tmp$;
            tmp$ = this$LoggedIn.currentView;
            var tmp$_0;
            if (this.local$$receiver.adminRight.now) {
              tmp$_0 = new LoggedInAdmin(this$LoggedIn);
            }
             else {
              tmp$_0 = new LoggedInNoAdmin(this$LoggedIn);
            }

            tmp$.remAssign_11rb$(tmp$_0);
            return this.local$$receiver;
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
  function LoggedIn_init$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn_init$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [LoggedInTC, LoggedInPath, LinksPath, MultiForward]
  };
  function LoggedInAdmin(loggedIn) {
    CsKillsView.call(this, loggedIn);
    this.loggedIn = loggedIn;
    this.rawView_1aq3gl$_0 = ui_2(this);
  }
  Object.defineProperty(LoggedInAdmin.prototype, 'rawView', {
    get: function () {
      return this.rawView_1aq3gl$_0;
    }
  });
  LoggedInAdmin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedInAdmin',
    interfaces: [CsKillsView]
  };
  function LoggedInNoAdmin(loggedIn) {
    CsKillsView.call(this, loggedIn);
    this.loggedIn = loggedIn;
    this.rawView_wkqfms$_0 = ui_1(this);
  }
  Object.defineProperty(LoggedInNoAdmin.prototype, 'rawView', {
    get: function () {
      return this.rawView_wkqfms$_0;
    }
  });
  LoggedInNoAdmin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedInNoAdmin',
    interfaces: [CsKillsView]
  };
  function ui$lambda$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.loggedIn.signOut();
      return Unit;
    };
  }
  function ui$lambda$lambda_2($receiver) {
    get_textMuted(get_cls($receiver));
    remAssign($receiver, 'You need admin privileges to run this app.');
    return Unit;
  }
  function ui$lambda_2($receiver) {
    flexCenter(get_cls($receiver));
    invoke(get_div($receiver), ui$lambda$lambda_2);
    return Unit;
  }
  function ui_1($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, 'Admin');
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signOut_tstgz9$($receiver_1.menu, ui$lambda$lambda$lambda$lambda_2($receiver));
    return new TopAndContent($receiver_0.node, invoke(get_div(document), ui$lambda_2));
  }
  function ui$lambda$lambda$lambda$lambda_3(this$ui) {
    return function () {
      this$ui.loggedIn.signOut();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda_0(this$ui) {
    return function () {
      this$ui.loggedIn.index();
      return Unit;
    };
  }
  function ui$lambda$lambda_3(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      column_0($receiver_0);
      var $receiver_1 = get_insert($receiver).listGroup;
      var this$ui_0 = this$ui;
      get_m1($receiver_1.cls);
      var $receiver_2 = $receiver_1.item.listGroupButton;
      remAssign($receiver_2.text, 'Index');
      this$ui_0.click_3zaxtq$($receiver_2, ui$lambda$lambda$lambda$lambda$lambda_0(this$ui_0));
      return Unit;
    };
  }
  function ui_2($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, 'Admin');
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signOut_tstgz9$($receiver_1.menu, ui$lambda$lambda$lambda$lambda_3($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_2 = widget.factory.scrollPane;
    invoke($receiver_2.pane, ui$lambda$lambda_3($receiver));
    return new TopAndContent(tmp$, $receiver_2.node);
  }
  var package$admin = _.admin || (_.admin = {});
  package$admin.main = main;
  var package$edithtml = package$admin.edithtml || (package$admin.edithtml = {});
  package$edithtml.EditHtmlPath = EditHtmlPath;
  package$edithtml.EditHtml = EditHtml;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$edithtml.ui_wjni8w$ = ui;
  var package$index = package$admin.index || (package$admin.index = {});
  package$index.IndexPath = IndexPath;
  package$index.Index = Index;
  package$index.ui_v1ie7c$ = ui_0;
  package$admin.LinksPath = LinksPath;
  package$admin.Links = Links;
  var package$loggedin = package$admin.loggedin || (package$admin.loggedin = {});
  package$loggedin.LoggedInTC = LoggedInTC;
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.LoggedInAdmin = LoggedInAdmin;
  package$loggedin.LoggedInNoAdmin = LoggedInNoAdmin;
  package$loggedin.ui_o59jtc$ = ui_1;
  package$loggedin.ui_y6wr1t$ = ui_2;
  LinksPath.prototype.get_randomDoc_lsue4w$ = DbApi.prototype.get_randomDoc_lsue4w$;
  LinksPath.prototype.get_randomDoc_sj9vaa$ = DbApi.prototype.get_randomDoc_sj9vaa$;
  LinksPath.prototype.get_ref_sj9vaa$ = DbApi.prototype.get_ref_sj9vaa$;
  LinksPath.prototype.get_ref_aqty80$ = DbApi.prototype.get_ref_aqty80$;
  LinksPath.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  LinksPath.prototype.delete_ihdkly$ = DbApi.prototype.delete_ihdkly$;
  LinksPath.prototype.getCachedOrServer_prxdpg$ = DbApi.prototype.getCachedOrServer_prxdpg$;
  LinksPath.prototype.getOrDefault_bo0woj$$default = DbApi.prototype.getOrDefault_bo0woj$$default;
  LinksPath.prototype.getOrNull_m1hph$$default = DbApi.prototype.getOrNull_m1hph$$default;
  LinksPath.prototype.query_wzkv1r$$default = DbApi.prototype.query_wzkv1r$$default;
  LinksPath.prototype.randomEditable_mx4g9l$$default = DbApi.prototype.randomEditable_mx4g9l$$default;
  LinksPath.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  LinksPath.prototype.save_biv66q$ = DbApi.prototype.save_biv66q$;
  LinksPath.prototype.set_o9yh22$$default = DbApi.prototype.set_o9yh22$$default;
  LinksPath.prototype.toFsDoc_bo0woj$$default = DbApi.prototype.toFsDoc_bo0woj$$default;
  LinksPath.prototype.toRandomFsDoc_xc7wmg$ = DbApi.prototype.toRandomFsDoc_xc7wmg$;
  LinksPath.prototype.getOrDefault_bo0woj$ = DbApi.prototype.getOrDefault_bo0woj$;
  LinksPath.prototype.getOrNull_m1hph$ = DbApi.prototype.getOrNull_m1hph$;
  LinksPath.prototype.query_wzkv1r$ = DbApi.prototype.query_wzkv1r$;
  LinksPath.prototype.randomEditable_mx4g9l$ = DbApi.prototype.randomEditable_mx4g9l$;
  LinksPath.prototype.set_o9yh22$ = DbApi.prototype.set_o9yh22$;
  LinksPath.prototype.toFsDoc_bo0woj$ = DbApi.prototype.toFsDoc_bo0woj$;
  LoggedInPath.prototype.get_randomDoc_lsue4w$ = LinksPath.prototype.get_randomDoc_lsue4w$;
  LoggedInPath.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInPath.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  LoggedInPath.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  LoggedInPath.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  LoggedInPath.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  LoggedInPath.prototype.getCachedOrServer_prxdpg$ = LinksPath.prototype.getCachedOrServer_prxdpg$;
  LoggedInPath.prototype.getOrDefault_bo0woj$$default = LinksPath.prototype.getOrDefault_bo0woj$$default;
  LoggedInPath.prototype.getOrNull_m1hph$$default = LinksPath.prototype.getOrNull_m1hph$$default;
  LoggedInPath.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  LoggedInPath.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  LoggedInPath.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  LoggedInPath.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  LoggedInPath.prototype.set_o9yh22$$default = LinksPath.prototype.set_o9yh22$$default;
  LoggedInPath.prototype.toFsDoc_bo0woj$$default = LinksPath.prototype.toFsDoc_bo0woj$$default;
  LoggedInPath.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInPath.prototype.getOrDefault_bo0woj$ = LinksPath.prototype.getOrDefault_bo0woj$;
  LoggedInPath.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  LoggedInPath.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  LoggedInPath.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  LoggedInPath.prototype.set_o9yh22$ = LinksPath.prototype.set_o9yh22$;
  LoggedInPath.prototype.toFsDoc_bo0woj$ = LinksPath.prototype.toFsDoc_bo0woj$;
  EditHtmlPath.prototype.get_randomDoc_lsue4w$ = LoggedInPath.prototype.get_randomDoc_lsue4w$;
  EditHtmlPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  EditHtmlPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  EditHtmlPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  EditHtmlPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  EditHtmlPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  EditHtmlPath.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  EditHtmlPath.prototype.getOrDefault_bo0woj$$default = LoggedInPath.prototype.getOrDefault_bo0woj$$default;
  EditHtmlPath.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  EditHtmlPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  EditHtmlPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  EditHtmlPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  EditHtmlPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  EditHtmlPath.prototype.set_o9yh22$$default = LoggedInPath.prototype.set_o9yh22$$default;
  EditHtmlPath.prototype.toFsDoc_bo0woj$$default = LoggedInPath.prototype.toFsDoc_bo0woj$$default;
  EditHtmlPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  EditHtmlPath.prototype.getOrDefault_bo0woj$ = LoggedInPath.prototype.getOrDefault_bo0woj$;
  EditHtmlPath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  EditHtmlPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  EditHtmlPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  EditHtmlPath.prototype.set_o9yh22$ = LoggedInPath.prototype.set_o9yh22$;
  EditHtmlPath.prototype.toFsDoc_bo0woj$ = LoggedInPath.prototype.toFsDoc_bo0woj$;
  EditHtml.prototype.bind_8y93tj$ = BackEditKillsUixApi.prototype.bind_8y93tj$;
  EditHtml.prototype.bind_4dd4yj$ = BackEditKillsUixApi.prototype.bind_4dd4yj$;
  EditHtml.prototype.bind_igb9j9$ = BackEditKillsUixApi.prototype.bind_igb9j9$;
  EditHtml.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  EditHtml.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  EditHtml.prototype.get_docsOrNull_g2zw3r$ = FBBackApi.prototype.get_docsOrNull_g2zw3r$;
  EditHtml.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  EditHtml.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  EditHtml.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  EditHtml.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  EditHtml.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  EditHtml.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  EditHtml.prototype.documentChanges_pujjsl$$default = FBBackApi.prototype.documentChanges_pujjsl$$default;
  EditHtml.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  EditHtml.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  EditHtml.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  EditHtml.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  EditHtml.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  EditHtml.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  EditHtml.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Object.defineProperty(EditHtml.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackEditKillsUixApi.prototype, 'bindings'));
  EditHtml.prototype.get_backSaveDiscard_e1rmy3$ = BackEditKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  EditHtml.prototype.get_saveButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditHtml.prototype.get_saveDeleteButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  EditHtml.prototype.getOrDefault_bo0woj$ = EditHtmlPath.prototype.getOrDefault_bo0woj$;
  EditHtml.prototype.getOrNull_m1hph$ = EditHtmlPath.prototype.getOrNull_m1hph$;
  EditHtml.prototype.query_wzkv1r$ = EditHtmlPath.prototype.query_wzkv1r$;
  EditHtml.prototype.randomEditable_mx4g9l$ = EditHtmlPath.prototype.randomEditable_mx4g9l$;
  EditHtml.prototype.set_o9yh22$ = EditHtmlPath.prototype.set_o9yh22$;
  EditHtml.prototype.toFsDoc_bo0woj$ = EditHtmlPath.prototype.toFsDoc_bo0woj$;
  EditHtml.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  EditHtml.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  EditHtml.prototype.documentChanges_pujjsl$ = FBBackApi.prototype.documentChanges_pujjsl$;
  EditHtml.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  EditHtml.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  EditHtml.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  IndexPath.prototype.get_randomDoc_lsue4w$ = LoggedInPath.prototype.get_randomDoc_lsue4w$;
  IndexPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  IndexPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  IndexPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  IndexPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  IndexPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  IndexPath.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  IndexPath.prototype.getOrDefault_bo0woj$$default = LoggedInPath.prototype.getOrDefault_bo0woj$$default;
  IndexPath.prototype.getOrNull_m1hph$$default = LoggedInPath.prototype.getOrNull_m1hph$$default;
  IndexPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  IndexPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  IndexPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  IndexPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  IndexPath.prototype.set_o9yh22$$default = LoggedInPath.prototype.set_o9yh22$$default;
  IndexPath.prototype.toFsDoc_bo0woj$$default = LoggedInPath.prototype.toFsDoc_bo0woj$$default;
  IndexPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  IndexPath.prototype.getOrDefault_bo0woj$ = LoggedInPath.prototype.getOrDefault_bo0woj$;
  IndexPath.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  IndexPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  IndexPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  IndexPath.prototype.set_o9yh22$ = LoggedInPath.prototype.set_o9yh22$;
  IndexPath.prototype.toFsDoc_bo0woj$ = LoggedInPath.prototype.toFsDoc_bo0woj$;
  LoggedInTC.prototype.get_randomDoc_lsue4w$ = LoggedInPath.prototype.get_randomDoc_lsue4w$;
  LoggedInTC.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInTC.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  LoggedInTC.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  LoggedInTC.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  LoggedInTC.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  LoggedInTC.prototype.getCachedOrServer_prxdpg$ = LoggedInPath.prototype.getCachedOrServer_prxdpg$;
  LoggedInTC.prototype.getOrDefault_bo0woj$$default = LoggedInPath.prototype.getOrDefault_bo0woj$$default;
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
  LoggedInTC.prototype.getOrDefault_bo0woj$ = LoggedInPath.prototype.getOrDefault_bo0woj$;
  LoggedInTC.prototype.getOrNull_m1hph$ = LoggedInPath.prototype.getOrNull_m1hph$;
  LoggedInTC.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  LoggedInTC.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  LoggedInTC.prototype.set_o9yh22$ = LoggedInPath.prototype.set_o9yh22$;
  LoggedInTC.prototype.toFsDoc_bo0woj$ = LoggedInPath.prototype.toFsDoc_bo0woj$;
  LoggedInTC.prototype.fwd_e1fa5e$ = LinkApi.prototype.fwd_e1fa5e$;
  LoggedInTC.prototype.fwd_nnhkmr$ = LinkApi.prototype.fwd_nnhkmr$;
  Index.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  Index.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  Index.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  Index.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  Index.prototype.get_clickActivate_tvm2vp$ = FBBackApi.prototype.get_clickActivate_tvm2vp$;
  Index.prototype.get_clickToggle_tvm2vp$ = FBBackApi.prototype.get_clickToggle_tvm2vp$;
  Index.prototype.get_docsOrNull_g2zw3r$ = FBBackApi.prototype.get_docsOrNull_g2zw3r$;
  Index.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  Index.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  Index.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  Index.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  Index.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  Index.prototype.click_4eku4n$ = FBBackApi.prototype.click_4eku4n$;
  Index.prototype.click_9375ex$ = FBBackApi.prototype.click_9375ex$;
  Index.prototype.click_512jbc$ = FBBackApi.prototype.click_512jbc$;
  Index.prototype.click_3zaxtq$ = FBBackApi.prototype.click_3zaxtq$;
  Index.prototype.click_ts68bh$ = FBBackApi.prototype.click_ts68bh$;
  Index.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  Index.prototype.documentChanges_pujjsl$$default = FBBackApi.prototype.documentChanges_pujjsl$$default;
  Index.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  Index.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  Index.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  Index.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  Index.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  Index.prototype.signIn_tstgz9$ = FBBackApi.prototype.signIn_tstgz9$;
  Index.prototype.signOut_tstgz9$ = FBBackApi.prototype.signOut_tstgz9$;
  Index.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  Index.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  Index.prototype.getOrDefault_bo0woj$ = LoggedInTC.prototype.getOrDefault_bo0woj$;
  Index.prototype.getOrNull_m1hph$ = LoggedInTC.prototype.getOrNull_m1hph$;
  Index.prototype.query_wzkv1r$ = LoggedInTC.prototype.query_wzkv1r$;
  Index.prototype.randomEditable_mx4g9l$ = LoggedInTC.prototype.randomEditable_mx4g9l$;
  Index.prototype.set_o9yh22$ = LoggedInTC.prototype.set_o9yh22$;
  Index.prototype.toFsDoc_bo0woj$ = LoggedInTC.prototype.toFsDoc_bo0woj$;
  Index.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  Index.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  Index.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  Index.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  Index.prototype.documentChanges_pujjsl$ = FBBackApi.prototype.documentChanges_pujjsl$;
  Index.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  Index.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  Index.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  Links.prototype.get_randomDoc_lsue4w$ = LinksPath.prototype.get_randomDoc_lsue4w$;
  Links.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  Links.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  Links.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  Links.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  Links.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  Links.prototype.getCachedOrServer_prxdpg$ = LinksPath.prototype.getCachedOrServer_prxdpg$;
  Links.prototype.getOrDefault_bo0woj$$default = LinksPath.prototype.getOrDefault_bo0woj$$default;
  Links.prototype.getOrNull_m1hph$$default = LinksPath.prototype.getOrNull_m1hph$$default;
  Links.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  Links.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  Links.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  Links.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  Links.prototype.set_o9yh22$$default = LinksPath.prototype.set_o9yh22$$default;
  Links.prototype.toFsDoc_bo0woj$$default = LinksPath.prototype.toFsDoc_bo0woj$$default;
  Links.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  Links.prototype.getOrDefault_bo0woj$ = LinksPath.prototype.getOrDefault_bo0woj$;
  Links.prototype.getOrNull_m1hph$ = LinksPath.prototype.getOrNull_m1hph$;
  Links.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  Links.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  Links.prototype.set_o9yh22$ = LinksPath.prototype.set_o9yh22$;
  Links.prototype.toFsDoc_bo0woj$ = LinksPath.prototype.toFsDoc_bo0woj$;
  LoggedIn.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  LoggedIn.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  LoggedIn.prototype.getOrDefault_bo0woj$ = LoggedInTC.prototype.getOrDefault_bo0woj$;
  LoggedIn.prototype.getOrNull_m1hph$ = LoggedInTC.prototype.getOrNull_m1hph$;
  LoggedIn.prototype.query_wzkv1r$ = LoggedInTC.prototype.query_wzkv1r$;
  LoggedIn.prototype.randomEditable_mx4g9l$ = LoggedInTC.prototype.randomEditable_mx4g9l$;
  LoggedIn.prototype.set_o9yh22$ = LoggedInTC.prototype.set_o9yh22$;
  LoggedIn.prototype.toFsDoc_bo0woj$ = LoggedInTC.prototype.toFsDoc_bo0woj$;
  LoggedIn.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  LoggedIn.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  main();
  Kotlin.defineModule('appsimake-admin', _);
  return _;
}(typeof this['appsimake-admin'] === 'undefined' ? {} : this['appsimake-admin'], kotlin, this['appsimake-commonfb'], this['appsimake-adminlib'], this['appsimake-commonui'], this['appsimake-commonshr'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-fontawesome'], this['appsimake-indexlib'], this['appsimake-firebase'], this['appsimake-commonlib'], this['kotlinx-coroutines-core']);

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-checklistlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-checklistlib' was not found. Please, check whether 'appsimake-checklistlib' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-checklist'.");
}
this['appsimake-checklist'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_checklistlib, $module$appsimake_commonshr, $module$appsimake_commonfb, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_fontawesome, $module$kotlinx_coroutines_core, $module$appsimake_firebase) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var show = $module$appsimake_commonui.commonui.show_9rbu8d$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launchGlobal = $module$appsimake_commonui.commonui.launchGlobal_g2bo5h$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ChecklistItem = $module$appsimake_checklistlib.checklist.ChecklistItem;
  var commonui = $module$appsimake_commonui.commonui;
  var CsKillsView = $module$appsimake_commonui.commonui.CsKillsView;
  var RxMutableList_init = $module$appsimake_commonshr.rx.RxMutableList_init_287e2$;
  var eventsEmitter = $module$appsimake_commonshr.rx.eventsEmitter_2us9mn$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var FBFromApi = $module$appsimake_commonfb.commonfb.FBFromApi;
  var EditExitFromKillsUixApi = $module$appsimake_commonui.commonui.EditExitFromKillsUixApi;
  var HasFrom = $module$appsimake_commonui.commonui.HasFrom;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var required = $module$appsimake_commonui.commonui.editing.required_dvq9sy$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var bindValue = $module$appsimake_commonui.commonui.widget.bindValue_tl168a$;
  var get_btnOutlineSecondary = $module$appsimake_bootstrap.bootstrap.get_btnOutlineSecondary_kre7dp$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var plus_0 = $module$appsimake_commonui.commonui.plus_938iip$;
  var bind = $module$appsimake_commonui.commonui.editing.bind_xr5ias$;
  var get_trashAlt = $module$appsimake_fontawesome.fontawesome.get_trashAlt_xml72e$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var HourglassView = $module$appsimake_commonui.commonui.widget.HourglassView;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var LinksBase = $module$appsimake_commonui.commonui.LinksBase;
  var commonfb = $module$appsimake_commonfb.commonfb;
  var withDefaultSettings = $module$appsimake_firebase.firebase.firestore.withDefaultSettings_gwf93m$;
  var enablePersistenceAndWait = $module$appsimake_commonfb.commonfb.loginbase.enablePersistenceAndWait_gwf93m$;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var loginHandler = $module$appsimake_commonfb.commonfb.loginbase.loginHandler_cb7jvs$;
  var get = $module$appsimake_commonui.commonui.get_58e4tk$;
  var hourglass = $module$appsimake_commonui.commonui.hourglass_x1wd7h$;
  var DbDeps = $module$appsimake_firebase.firebase.DbDeps;
  var get_0 = $module$appsimake_firebase.firebase.firestore.get_1uroz$;
  var ErrorTC = $module$appsimake_commonui.commonui.error.ErrorTC;
  var HasCsKills = $module$appsimake_commonshr.commonshr.HasCsKills;
  var HasKills = $module$appsimake_commonshr.commonshr.HasKills;
  var BodyTC = $module$appsimake_commonui.commonui.widget.BodyTC;
  var HasDb = $module$appsimake_firebase.firebase.HasDb;
  var Checklist = $module$appsimake_checklistlib.checklist.Checklist;
  var fwd = $module$appsimake_commonui.commonui.fwd_9rbu8d$;
  var get_idOrFail = $module$appsimake_commonshr.commonshr.get_idOrFail_2s00w$;
  var ForwardBase = $module$appsimake_commonui.commonui.ForwardBase;
  var checklist = $module$appsimake_checklistlib.checklist;
  var get_private = $module$appsimake_commonshr.commonshr.get_private_py8usb$;
  var get_checklists = $module$appsimake_checklistlib.checklist.get_checklists_x4imip$;
  var FBApi = $module$appsimake_commonfb.commonfb.FBApi;
  var compareValuesBy = Kotlin.kotlin.comparisons.compareValuesBy_d999kh$;
  var Comparable = Kotlin.kotlin.Comparable;
  var get_pen = $module$appsimake_fontawesome.fontawesome.get_pen_xml72e$;
  var get_eraser = $module$appsimake_fontawesome.fontawesome.get_eraser_xml72e$;
  var get_dropdownToggle = $module$appsimake_bootstrap.bootstrap.get_dropdownToggle_kre7dp$;
  var dataToggleDropdown = $module$appsimake_bootstrap.bootstrap.dataToggleDropdown_v3gdir$;
  var get_textDanger = $module$appsimake_bootstrap.bootstrap.get_textDanger_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var RxMutableList = $module$appsimake_commonshr.rx.RxMutableList;
  var sorted = $module$appsimake_commonshr.rx.sorted_ev4lgc$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_insert_0 = $module$appsimake_commonui.commonui.widget.get_insert_im8gow$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_check = $module$appsimake_fontawesome.fontawesome.get_check_xml72e$;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_ved7zl$;
  var launchNonCancellable = $module$appsimake_commonshr.commonshr.launchNonCancellable_hilpzi$;
  Edit.prototype = Object.create(CsKillsView.prototype);
  Edit.prototype.constructor = Edit;
  Links.prototype = Object.create(LinksBase.prototype);
  Links.prototype.constructor = Links;
  LoggedIn.prototype = Object.create(ForwardBase.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  ViewChecklist.prototype = Object.create(ForwardBase.prototype);
  ViewChecklist.prototype.constructor = ViewChecklist;
  function Coroutine$main$lambda$lambda$lambda(this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$main$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda$lambda;
  Coroutine$main$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = show(this.local$this$.loggedIn, this);
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
  function main$lambda$lambda$lambda(this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda$lambda(this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$main$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = void 0;
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
            this.local$$receiver = Links_init();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.load_g2bo5h$(main$lambda$lambda$lambda(this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function main$lambda(continuation_0, suspended) {
    var instance = new Coroutine$main$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function main() {
    launchGlobal(main$lambda);
  }
  function EditPath() {
  }
  EditPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditPath',
    interfaces: [LoggedInPath]
  };
  function Edit(loggedIn, parent, initial, exit) {
    if (exit === void 0)
      exit = commonui.GoBackRedisplay;
    CsKillsView.call(this, parent);
    this.initial = initial;
    this.exit_4vn45o$_0 = exit;
    this.$delegate_z0sh1i$_0 = loggedIn;
    this.$delegate_z0sh1i$_1 = commonui.SimpleFrom;
    this.edit_4vzvw8$_0 = this;
    this.editing_svu7xy$_0 = this.rxEditing_iwuu9m$(this.initial, void 0, Edit$editing$lambda(this));
    var $receiver = RxMutableList_init();
    $receiver.addAll_brywnq$(this.editing.current.items.now);
    eventsEmitter($receiver, false)(Edit$items$lambda$lambda(this, $receiver));
    this.items = $receiver;
    var $receiver_0 = new Var('');
    this.editing.extraDirty.transform_ru8m0w$(Edit$adder$lambda$lambda($receiver_0, this));
    this.adder = $receiver_0;
    this.performAdd = Edit$performAdd$lambda;
    this.rawView_ntrkph$_0 = ui(this);
  }
  Object.defineProperty(Edit.prototype, 'exit', {
    get: function () {
      return this.exit_4vn45o$_0;
    }
  });
  Object.defineProperty(Edit.prototype, 'edit', {
    get: function () {
      return this.edit_4vzvw8$_0;
    }
  });
  Object.defineProperty(Edit.prototype, 'editing', {
    get: function () {
      return this.editing_svu7xy$_0;
    }
  });
  Edit.prototype.addItem_61zpoe$ = function (name) {
    var tmp$ = this.items;
    var $receiver = new ChecklistItem();
    $receiver.name.remAssign_11rc$(name);
    tmp$.add_wxm5ur$(0, $receiver);
  };
  Object.defineProperty(Edit.prototype, 'rawView', {
    get: function () {
      return this.rawView_ntrkph$_0;
    }
  });
  Object.defineProperty(Edit.prototype, 'db', {
    get: function () {
      return this.$delegate_z0sh1i$_0.db;
    }
  });
  Object.defineProperty(Edit.prototype, 'links', {
    get: function () {
      return this.$delegate_z0sh1i$_0.links;
    }
  });
  Object.defineProperty(Edit.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_z0sh1i$_0.loggedIn;
    }
  });
  Object.defineProperty(Edit.prototype, 'from', {
    get: function () {
      return this.$delegate_z0sh1i$_1.from;
    }
  });
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function Edit$editing$lambda(this$Edit) {
    return function (it) {
      if (!isBlank(this$Edit.adder.now)) {
        this$Edit.performAdd();
      }
      return Unit;
    };
  }
  function Edit$items$lambda$lambda(this$Edit, this$) {
    return function (it) {
      this$Edit.editing.current.items.remAssign_11rc$(toList(this$));
      return Unit;
    };
  }
  function Edit$adder$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      return !isBlank(closure$it.invoke());
    };
  }
  function Edit$adder$lambda$lambda(closure$it, this$Edit) {
    return function (d) {
      return plus(d, this$Edit.rx_y6x17j$(Edit$adder$lambda$lambda$lambda(closure$it)));
    };
  }
  function Edit$performAdd$lambda() {
    return Unit;
  }
  Edit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Edit',
    interfaces: [EditExitFromKillsUixApi, FBFromApi, HasFrom, EditPath, LoggedInPath, CsKillsView]
  };
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$, this$ui) {
    return function () {
      this$ui.addItem_61zpoe$(this$.value);
      this$ui.adder.remAssign_11rb$('');
      this$.value = '';
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui, this$) {
    return function (it) {
      this$ui.performAdd();
      this$.node.focus();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui, closure$cl) {
    return function () {
      this$ui.items.remove_11rb$(closure$cl);
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, cl_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$cl = cl_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = widget.factory.inputGroup;
            var this$ui = this.local$this$ui;
            get_m1($receiver.cls);
            required(bind($receiver.input, plus_0(this$ui.editing, this.local$$receiver.kills), this.local$cl.name.rxv));
            var $receiver_0 = $receiver.append.insert.button;
            var $receiver_1 = $receiver_0.cls;
            get_btnOutlineSecondary($receiver_1);
            get_trashAlt(get_fa($receiver_1));
            this$ui.click_9375ex$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui, this.local$cl));
            return $receiver.node;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0) {
    return function ($receiver_0, cl_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, cl_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda(this$ui) {
    return function ($receiver) {
      this$ui.list_u1uvxv$($receiver, this$ui.mapLive_1mq1ue$(this$ui.events_9k4h2$(this$ui.items), ui$lambda$lambda$lambda$lambda$lambda$lambda(this$ui)));
      return Unit;
    };
  }
  function ui$lambda$lambda(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      column($receiver_0);
      var $receiver_1 = get_insert($receiver).form;
      var this$ui_0 = this$ui;
      var $receiver_2 = $receiver_1.insert.formGroup;
      flexFixedSize($receiver_2.cls);
      remAssign($receiver_2.label, 'Title');
      required(this$ui_0.bind_igb9j9$($receiver_2.input, this$ui_0.editing.current.name.rxv));
      var $receiver_3 = $receiver_1.insert.formGroup;
      flexFixedSize($receiver_3.cls);
      remAssign($receiver_3.label, 'Items');
      var $receiver_4 = $receiver_3.insert.form;
      get_m1($receiver_4.cls);
      $receiver_4.column;
      var $receiver_5 = $receiver_4.insert.inputGroup;
      var $receiver_6 = $receiver_5.input;
      $receiver_6.required;
      bindValue($receiver_6, this$ui_0, this$ui_0.adder);
      this$ui_0.performAdd = ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver_6, this$ui_0);
      $receiver_4.onsubmit_gbr1zf$(ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_6));
      var $receiver_7 = $receiver_5.append.insert.button;
      $receiver_7.submit;
      var $receiver_8 = $receiver_7.cls;
      get_btnOutlineSecondary($receiver_8);
      get_plus(get_fa($receiver_8));
      invoke(get_div($receiver_3.node), ui$lambda$lambda$lambda$lambda$lambda(this$ui_0));
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backSaveDiscard_e1rmy3$($receiver_0.slots.left);
    remAssign($receiver_0.title, $receiver.shouldPreserve ? 'Edit Checklist' : 'New Checklist');
    $receiver.get_saveDeleteButton_tdhe4g$($receiver_0.right);
    var tmp$ = $receiver_0.node;
    var $receiver_1 = widget.factory.scrollPane;
    invoke($receiver_1.pane, ui$lambda$lambda($receiver));
    return new TopAndContent(tmp$, $receiver_1.node);
  }
  function LinksPath() {
  }
  LinksPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinksPath',
    interfaces: []
  };
  function Links(deps, hole) {
    LinksBase.call(this, deps);
    this.hole = hole;
    this.$delegate_p5mjsf$_0 = deps;
    this.links_wf0o4i$_0 = this;
    this.app = commonfb.FB.app;
    this.db_268k0v$_0 = lazy(Links$db$lambda(this));
    this.login = loginHandler(this, this.app.auth(), this.hole);
    this.loggedIn_71eidm$_0 = this.link_ogal70$(true, Links$loggedIn$lambda(this)).provideDelegate_n5byny$(this, Links$loggedIn_metadata);
    this.viewChecklist_1ps6p6$_0 = this.param_bkqud8$().link_medpg0$(Links$viewChecklist$lambda(this)).provideDelegate_n5byny$(this, Links$viewChecklist_metadata);
    this.editChecklist_lqvtfp$_0 = this.param_bkqud8$().link_medpg0$(Links$editChecklist$lambda(this)).provideDelegate_n5byny$(this, Links$editChecklist_metadata);
    this.newChecklist_want1l$_0 = this.link_ogal70$(void 0, Links$newChecklist$lambda(this)).provideDelegate_n5byny$(this, Links$newChecklist_metadata);
  }
  Object.defineProperty(Links.prototype, 'links', {
    get: function () {
      return this.links_wf0o4i$_0;
    }
  });
  Object.defineProperty(Links.prototype, 'db', {
    get: function () {
      return this.db_268k0v$_0.value;
    }
  });
  function Coroutine$Links$signOut$lambda(this$Links_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
  }
  Coroutine$Links$signOut$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$signOut$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$signOut$lambda.prototype.constructor = Coroutine$Links$signOut$lambda;
  Coroutine$Links$signOut$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Signing out...');
            this.local$this$Links.hole.remAssign_looze4$(new HourglassView(this.local$this$Links.hole));
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$Links.app.auth().signOut(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = show(this.local$this$Links.loggedIn, this);
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
  function Links$signOut$lambda(this$Links_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$signOut$lambda(this$Links_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Links.prototype.signOut = function () {
    return launch(this, void 0, void 0, Links$signOut$lambda(this));
  };
  var Links$loggedIn_metadata = new PropertyMetadata('loggedIn');
  Object.defineProperty(Links.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_71eidm$_0.getValue_lrcp0p$(this, Links$loggedIn_metadata);
    }
  });
  var Links$viewChecklist_metadata = new PropertyMetadata('viewChecklist');
  Object.defineProperty(Links.prototype, 'viewChecklist', {
    get: function () {
      return this.viewChecklist_1ps6p6$_0.getValue_lrcp0p$(this, Links$viewChecklist_metadata);
    }
  });
  var Links$editChecklist_metadata = new PropertyMetadata('editChecklist');
  Object.defineProperty(Links.prototype, 'editChecklist', {
    get: function () {
      return this.editChecklist_lqvtfp$_0.getValue_lrcp0p$(this, Links$editChecklist_metadata);
    }
  });
  var Links$newChecklist_metadata = new PropertyMetadata('newChecklist');
  Object.defineProperty(Links.prototype, 'newChecklist', {
    get: function () {
      return this.newChecklist_want1l$_0.getValue_lrcp0p$(this, Links$newChecklist_metadata);
    }
  });
  Object.defineProperty(Links.prototype, 'kills', {
    get: function () {
      return this.$delegate_p5mjsf$_0.kills;
    }
  });
  function Coroutine$Links$db$lambda$lambda(this$Links_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$$receiver = void 0;
  }
  Coroutine$Links$db$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$db$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$db$lambda$lambda.prototype.constructor = Coroutine$Links$db$lambda$lambda;
  Coroutine$Links$db$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = withDefaultSettings(this.local$this$Links.app.firestore());
            this.state_0 = 2;
            this.result_0 = enablePersistenceAndWait(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function Links$db$lambda$lambda(this$Links_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$db$lambda$lambda(this$Links_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Links$db$lambda(this$Links) {
    return function () {
      return async(this$Links, void 0, void 0, Links$db$lambda$lambda(this$Links));
    };
  }
  function Links$loggedIn$lambda$lambda$lambda(this$Links, this$) {
    return function () {
      this$Links.hole.remAssign_looze4$(this$);
      return Unit;
    };
  }
  function Coroutine$Links$loggedIn$lambda(this$Links_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$Links$loggedIn$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$loggedIn$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$loggedIn$lambda.prototype.constructor = Coroutine$Links$loggedIn$lambda;
  Coroutine$Links$loggedIn$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$tmp$ = this.local$this$Links.hole;
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.login(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$this$Links.db.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            tmp$ = this.result_0;
            var $receiver = new LoggedIn(this.local$this$Links, this.local$tmp$, this.local$tmp$_0, tmp$);
            $receiver.displayRoute = Links$loggedIn$lambda$lambda$lambda(this.local$this$Links, $receiver);
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
  function Links$loggedIn$lambda(this$Links_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Links$loggedIn$lambda(this$Links_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$viewChecklist$lambda(this$Links_0, p_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$this$Links = this$Links_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$this$Links_0 = void 0;
    this.local$block$result = void 0;
    this.local$tmp$_1 = void 0;
    this.local$p = p_0;
  }
  Coroutine$Links$viewChecklist$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$viewChecklist$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$viewChecklist$lambda.prototype.constructor = Coroutine$Links$viewChecklist$lambda;
  Coroutine$Links$viewChecklist$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 1;
            this.result_0 = get(this.local$this$Links.loggedIn, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            if ((this.local$tmp$ = this.result_0) != null) {
              this.local$this$Links_0 = this.local$this$Links;
              this.state_0 = 2;
              continue;
            }
             else {
              this.local$tmp$_0 = null;
              this.state_0 = 8;
              continue;
            }

          case 2:
            hourglass(this.local$tmp$);
            this.exceptionState_0 = 5;
            this.local$tmp$_1 = this.local$tmp$.checklists.doc_61zpoe$(this.local$p);
            this.state_0 = 3;
            this.result_0 = this.local$this$Links_0.db.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = get_0(this.local$tmp$_1, new DbDeps(this.result_0), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $receiver = new ViewChecklist(this.local$tmp$, this.result_0);
            this.local$tmp$.remAssign_z26nd2$($receiver);
            $receiver.get_live_73z9b6$($receiver.chklist);
            this.local$block$result = $receiver;
            this.exceptionState_0 = 9;
            this.state_0 = 6;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            var e_0 = this.exception_0;
            this.local$tmp$.remAssign_z26nd2$(new ErrorTC(this.local$tmp$, e_0));
            this.local$block$result = null;
            this.exceptionState_0 = 5;
            this.state_0 = 7;
            continue;
          case 6:
            if (!false) {
              this.state_0 = 7;
              continue;
            }

            this.state_0 = 2;
            continue;
          case 7:
            this.local$tmp$_0 = this.local$block$result;
            this.state_0 = 8;
            continue;
          case 8:
            return this.local$tmp$_0;
          case 9:
            throw this.exception_0;
          default:this.state_0 = 9;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 9) {
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
  function Links$viewChecklist$lambda(this$Links_0) {
    return function (p_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$viewChecklist$lambda(this$Links_0, p_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$editChecklist$lambda(this$Links_0, p_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$p = p_0;
  }
  Coroutine$Links$editChecklist$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$editChecklist$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$editChecklist$lambda.prototype.constructor = Coroutine$Links$editChecklist$lambda;
  Coroutine$Links$editChecklist$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.viewChecklist.get_iuyhfk$(this.local$p, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            if ((tmp$ = this.result_0) != null) {
              var $receiver = new Edit(tmp$.loggedIn, tmp$, tmp$.chklist, commonui.GoBack2Redisplay);
              tmp$.remAssign_z26nd2$($receiver);
              tmp$_0 = $receiver;
            }
             else
              tmp$_0 = null;
            return tmp$_0;
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
  function Links$editChecklist$lambda(this$Links_0) {
    return function (p_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$editChecklist$lambda(this$Links_0, p_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$newChecklist$lambda(this$Links_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
  }
  Coroutine$Links$newChecklist$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$newChecklist$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$newChecklist$lambda.prototype.constructor = Coroutine$Links$newChecklist$lambda;
  Coroutine$Links$newChecklist$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = get(this.local$this$Links.loggedIn, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            if ((tmp$ = this.result_0) != null) {
              var $receiver = new Edit(tmp$, tmp$, tmp$.createNewChecklistDoc());
              $receiver.get_live_73z9b6$($receiver.initial);
              tmp$.remAssign_z26nd2$($receiver);
              tmp$_0 = $receiver;
            }
             else
              tmp$_0 = null;
            return tmp$_0;
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
  function Links$newChecklist$lambda(this$Links_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Links$newChecklist$lambda(this$Links_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Links.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Links',
    interfaces: [LinksPath, HasCsKills, HasKills, LinksBase]
  };
  function Links_init(body, $this) {
    if (body === void 0)
      body = new BodyTC();
    $this = $this || Object.create(Links.prototype);
    Links.call($this, body, body.hole);
    return $this;
  }
  function LoggedInPath() {
  }
  LoggedInPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoggedInPath',
    interfaces: [HasDb, LinksPath]
  };
  function LoggedIn(links, hole, user, db) {
    ForwardBase.call(this, hole);
    this.db_24cewc$_0 = db;
    this.$delegate_b157uu$_0 = links;
    this.loggedIn_c0bqi3$_0 = this;
    this.checklists = get_checklists(get_private(checklist.checklistLib.app).doc_61zpoe$(user.uid));
    this.rawView_r4wkkr$_0 = ui_0(this);
  }
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.db_24cewc$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_c0bqi3$_0;
    }
  });
  LoggedIn.prototype.createNewChecklistDoc = function () {
    var $receiver = new Checklist();
    $receiver.name.remAssign_11rc$('<unknown>');
    return this.toRandomFsDoc_xc7wmg$($receiver, this.checklists);
  };
  LoggedIn.prototype.signOut = function () {
    this.links.signOut();
  };
  function Coroutine$LoggedIn$newChecklist$lambda(this$LoggedIn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$newChecklist$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$newChecklist$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$newChecklist$lambda.prototype.constructor = Coroutine$LoggedIn$newChecklist$lambda;
  Coroutine$LoggedIn$newChecklist$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = fwd(this.local$this$LoggedIn.links.newChecklist, this);
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
  function LoggedIn$newChecklist$lambda(this$LoggedIn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$newChecklist$lambda(this$LoggedIn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.newChecklist = function () {
    return launch(this, void 0, void 0, LoggedIn$newChecklist$lambda(this));
  };
  function Coroutine$LoggedIn$viewChecklist$lambda(this$LoggedIn_0, closure$cl_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
    this.local$closure$cl = closure$cl_0;
  }
  Coroutine$LoggedIn$viewChecklist$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$viewChecklist$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$viewChecklist$lambda.prototype.constructor = Coroutine$LoggedIn$viewChecklist$lambda;
  Coroutine$LoggedIn$viewChecklist$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.links.viewChecklist.fwd_11rb$(get_idOrFail(this.local$closure$cl), this);
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
  function LoggedIn$viewChecklist$lambda(this$LoggedIn_0, closure$cl_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$viewChecklist$lambda(this$LoggedIn_0, closure$cl_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.viewChecklist_umagvj$ = function (cl) {
    return launch(this, void 0, void 0, LoggedIn$viewChecklist$lambda(this, cl));
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_r4wkkr$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'links', {
    get: function () {
      return this.$delegate_b157uu$_0.links;
    }
  });
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [FBApi, LoggedInPath, LinksPath, ForwardBase]
  };
  function ui$lambda$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.signOut();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda(this$ui) {
    return function () {
      this$ui.newChecklist();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.get_desc_5eq60p$(Checklist.Companion.ts);
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl) {
    return function () {
      return closure$cl.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$cl, this$ui) {
    return function () {
      this$ui.viewChecklist_umagvj$(closure$cl);
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, cl_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$cl = cl_0;
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
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            this.local$$receiver.remAssign_7fncnf$($receiver.middle, ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$cl));
            this$ui.click_3zaxtq$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this.local$cl, this$ui));
            return $receiver.node;
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
  function ui$lambda$lambda$lambda$lambda_1(this$ui_0) {
    return function ($receiver_0, cl_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, $receiver_0, cl_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      var $receiver_0 = get_insert($receiver).listGroup;
      var this$ui_0 = this$ui;
      get_m1($receiver_0.cls);
      this$ui_0.list_u1uvxv$($receiver_0.node, this$ui_0.mapLive_1mq1ue$(this$ui_0.listEvents_pujjsl$(this$ui_0.checklists, ui$lambda$lambda$lambda$lambda_0), ui$lambda$lambda$lambda$lambda_1(this$ui_0)));
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign($receiver_0.title, 'Checklists');
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signOut_tstgz9$($receiver_1.menu, ui$lambda$lambda$lambda$lambda($receiver));
    var $receiver_2 = $receiver_0.right.button;
    $receiver_2.m1p2;
    get_plus($receiver_2.fa);
    $receiver_2.primary;
    $receiver.click_9375ex$($receiver_2, ui$lambda$lambda$lambda($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_3 = widget.factory.scrollPane;
    invoke($receiver_3.pane, ui$lambda$lambda_0($receiver));
    return new TopAndContent(tmp$, $receiver_3.node);
  }
  function ItemOrder(checked, name) {
    this.checked = checked;
    this.name = name;
  }
  function ItemOrder$compareTo$lambda(it) {
    return it.checked;
  }
  function ItemOrder$compareTo$lambda_0(it) {
    return it.name;
  }
  ItemOrder.prototype.compareTo_11rb$ = function (other) {
    return compareValuesBy(this, other, [ItemOrder$compareTo$lambda, ItemOrder$compareTo$lambda_0]);
  };
  ItemOrder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ItemOrder',
    interfaces: [Comparable]
  };
  function ui$lambda$lambda_1(this$ui) {
    return function () {
      return this$ui.chklist.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.editChecklist();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda_3(this$ui) {
    return function () {
      this$ui.clear_uyyhtd$(this$ui.chklist.rxv.now);
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.deleteChecklist();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver, i) {
    return new ItemOrder(i.checked.invoke(), i.name.invoke());
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i) {
    return function () {
      return closure$i.name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i, this$) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      this$.remAssign_7fncnf$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$i));
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i) {
    return function ($receiver) {
      return closure$i.checked.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl, closure$i, this$ui) {
    return function (it) {
      this$ui.toggle_w1aco0$(closure$cl, closure$i);
      return Unit;
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$cl_0, $receiver_0, i_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$closure$cl = closure$cl_0;
    this.local$$receiver = $receiver_0;
    this.local$i = i_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            var closure$cl = this.local$closure$cl;
            var $receiver_0 = $receiver.cls;
            get_p1($receiver_0);
            get_alignItemsCenter($receiver_0);
            invoke($receiver.middle, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this.local$i, this.local$$receiver));
            var $receiver_1 = get_insert_0($receiver.left).wraps.span;
            var $receiver_2 = $receiver_1.cls;
            get_m1($receiver_2);
            get_fw(get_fa($receiver_2));
            this$ui.rxClass_9npl0m$($receiver_1, get_check(Fa.Companion), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this.local$i));
            this$ui.on_hgi4ad$($receiver.node, 'mousedown', ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl, this.local$i, this$ui));
            return $receiver.node;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, closure$cl_0) {
    return function ($receiver_0, i_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$cl_0, $receiver_0, i_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_0(this$ui) {
    return function () {
      var $receiver = widget.factory.listGroup;
      var this$ui_0 = this$ui;
      get_m1($receiver.cls);
      var tmp$ = $receiver.node;
      var $receiver_0 = this$ui_0.chklist.invoke();
      this$ui_0.list_u1uvxv$(tmp$, this$ui_0.mapLive_1mq1ue$(this$ui_0.events_9k4h2$(sorted(new RxMutableList($receiver_0.items.invoke()), this$ui_0.kills, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda)), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_0)));
      return $receiver.node;
    };
  }
  function ui$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      this$ui.remAssign_wgabca$(get_widget($receiver), ui$lambda$lambda$lambda_0(this$ui));
      return Unit;
    };
  }
  function ui_1($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_tdhe4g$($receiver_0.left);
    $receiver.remAssign_7fncnf$($receiver_0.title, ui$lambda$lambda_1($receiver));
    var $receiver_1 = $receiver_0.right.buttonGroup;
    get_m1($receiver_1.cls);
    var $receiver_2 = $receiver_1.button;
    $receiver_2.p2;
    $receiver_2.primary;
    get_pen($receiver_2.fa);
    $receiver.click_9375ex$($receiver_2, ui$lambda$lambda$lambda$lambda_2($receiver));
    var $receiver_3 = $receiver_1.button;
    $receiver_3.p2;
    $receiver_3.primary;
    get_eraser($receiver_3.fa);
    $receiver.click_9375ex$($receiver_3, ui$lambda$lambda$lambda$lambda_3($receiver));
    var $receiver_4 = $receiver_1.insert.buttonGroup;
    var $receiver_5 = $receiver_4.button;
    $receiver_5.p2;
    $receiver_5.primary;
    get_dropdownToggle($receiver_5.cls);
    dataToggleDropdown($receiver_5.node);
    var $receiver_6 = $receiver_4.menu;
    $receiver_6.right;
    var $receiver_7 = $receiver_6.item;
    get_textDanger(get_cls($receiver_7.node));
    get_trashAlt($receiver_7.fa);
    $receiver_7.text.remAssign_61zpoe$('Delete');
    $receiver.click_512jbc$($receiver_7, ui$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_8 = widget.factory.scrollPane;
    invoke($receiver_8.pane, ui$lambda$lambda_2($receiver));
    return new TopAndContent(tmp$, $receiver_8.node);
  }
  function ViewPath() {
  }
  ViewPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewPath',
    interfaces: [LoggedInPath]
  };
  function ViewChecklist(from, chklist) {
    ForwardBase.call(this, from);
    this.chklist = chklist;
    this.$delegate_cqpqsg$_0 = from;
    this.$delegate_cqpqsg$_1 = commonui.SimpleFrom;
    this.viewChecklist_u2r8nt$_0 = this;
    this.rawView_sw6xvp$_0 = ui_1(this);
  }
  Object.defineProperty(ViewChecklist.prototype, 'viewChecklist', {
    get: function () {
      return this.viewChecklist_u2r8nt$_0;
    }
  });
  ViewChecklist.prototype.get_fsDoc_uyyhtd$ = function ($receiver) {
    return toFsDoc($receiver, this.chklist.id);
  };
  function ViewChecklist$toggle$lambda(it) {
    return !it;
  }
  ViewChecklist.prototype.toggle_w1aco0$ = function ($receiver, item) {
    item.checked.rxv.transform_ru8m0w$(ViewChecklist$toggle$lambda);
    this.save_73z9b6$(this.get_fsDoc_uyyhtd$($receiver));
  };
  ViewChecklist.prototype.clear_uyyhtd$ = function ($receiver) {
    var tmp$;
    tmp$ = $receiver.items.now.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.checked.now = false;
    }
    this.save_73z9b6$(this.get_fsDoc_uyyhtd$($receiver));
  };
  function Coroutine$ViewChecklist$deleteChecklist$lambda(this$ViewChecklist_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewChecklist = this$ViewChecklist_0;
  }
  Coroutine$ViewChecklist$deleteChecklist$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewChecklist$deleteChecklist$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewChecklist$deleteChecklist$lambda.prototype.constructor = Coroutine$ViewChecklist$deleteChecklist$lambda;
  Coroutine$ViewChecklist$deleteChecklist$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ViewChecklist.delete_73z9b6$(this.local$this$ViewChecklist.chklist);
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
  function ViewChecklist$deleteChecklist$lambda(this$ViewChecklist_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewChecklist$deleteChecklist$lambda(this$ViewChecklist_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewChecklist.prototype.deleteChecklist = function () {
    launchNonCancellable(this.loggedIn, ViewChecklist$deleteChecklist$lambda(this));
    this.from.redisplay();
  };
  function Coroutine$ViewChecklist$editChecklist$lambda(this$ViewChecklist_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ViewChecklist = this$ViewChecklist_0;
  }
  Coroutine$ViewChecklist$editChecklist$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewChecklist$editChecklist$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewChecklist$editChecklist$lambda.prototype.constructor = Coroutine$ViewChecklist$editChecklist$lambda;
  Coroutine$ViewChecklist$editChecklist$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ViewChecklist.links.editChecklist.fwd_11rb$(get_idOrFail(this.local$this$ViewChecklist.chklist), this);
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
  function ViewChecklist$editChecklist$lambda(this$ViewChecklist_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ViewChecklist$editChecklist$lambda(this$ViewChecklist_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewChecklist.prototype.editChecklist = function () {
    return launch(this, void 0, void 0, ViewChecklist$editChecklist$lambda(this));
  };
  Object.defineProperty(ViewChecklist.prototype, 'rawView', {
    get: function () {
      return this.rawView_sw6xvp$_0;
    }
  });
  Object.defineProperty(ViewChecklist.prototype, 'db', {
    get: function () {
      return this.$delegate_cqpqsg$_0.db;
    }
  });
  Object.defineProperty(ViewChecklist.prototype, 'links', {
    get: function () {
      return this.$delegate_cqpqsg$_0.links;
    }
  });
  Object.defineProperty(ViewChecklist.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_cqpqsg$_0.loggedIn;
    }
  });
  Object.defineProperty(ViewChecklist.prototype, 'from', {
    get: function () {
      return this.$delegate_cqpqsg$_1.from;
    }
  });
  ViewChecklist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewChecklist',
    interfaces: [FBFromApi, HasFrom, ViewPath, LoggedInPath, ForwardBase]
  };
  var package$checklist = _.checklist || (_.checklist = {});
  package$checklist.main = main;
  var package$edit = package$checklist.edit || (package$checklist.edit = {});
  package$edit.EditPath = EditPath;
  package$edit.Edit = Edit;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$edit.ui_k7tup5$ = ui;
  package$checklist.LinksPath = LinksPath;
  package$checklist.Links_init_83vi5o$ = Links_init;
  package$checklist.Links = Links;
  var package$loggedin = package$checklist.loggedin || (package$checklist.loggedin = {});
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.ui_d62iaf$ = ui_0;
  var package$view = package$checklist.view || (package$checklist.view = {});
  package$view.ItemOrder = ItemOrder;
  package$view.ui_v6i9e7$ = ui_1;
  package$view.ViewPath = ViewPath;
  package$view.ViewChecklist = ViewChecklist;
  Edit.prototype.bind_8y93tj$ = EditExitFromKillsUixApi.prototype.bind_8y93tj$;
  Edit.prototype.bind_4dd4yj$ = EditExitFromKillsUixApi.prototype.bind_4dd4yj$;
  Edit.prototype.bind_igb9j9$ = EditExitFromKillsUixApi.prototype.bind_igb9j9$;
  Edit.prototype.get_backButton_tdhe4g$ = FBFromApi.prototype.get_backButton_tdhe4g$;
  Edit.prototype.get_backButton_ihoiae$ = FBFromApi.prototype.get_backButton_ihoiae$;
  Edit.prototype.get_live_73z9b6$ = FBFromApi.prototype.get_live_73z9b6$;
  Edit.prototype.get_randomDoc_sj9vaa$ = FBFromApi.prototype.get_randomDoc_sj9vaa$;
  Edit.prototype.get_ref_sj9vaa$ = FBFromApi.prototype.get_ref_sj9vaa$;
  Edit.prototype.get_ref_aqty80$ = FBFromApi.prototype.get_ref_aqty80$;
  Edit.prototype.get_snapshots_79y88y$ = FBFromApi.prototype.get_snapshots_79y88y$;
  Edit.prototype.rxEditing_iwuu9m$$default = FBFromApi.prototype.rxEditing_iwuu9m$$default;
  Edit.prototype.delete_73z9b6$ = FBFromApi.prototype.delete_73z9b6$;
  Edit.prototype.docs_prxdpg$ = FBFromApi.prototype.docs_prxdpg$;
  Edit.prototype.documentChanges_z2kgpb$ = FBFromApi.prototype.documentChanges_z2kgpb$;
  Edit.prototype.fsCache_sj6zb3$$default = FBFromApi.prototype.fsCache_sj6zb3$$default;
  Edit.prototype.fsCache_aujjp8$ = FBFromApi.prototype.fsCache_aujjp8$;
  Edit.prototype.get_prxdpg$ = FBFromApi.prototype.get_prxdpg$;
  Edit.prototype.listEvents_pujjsl$$default = FBFromApi.prototype.listEvents_pujjsl$$default;
  Edit.prototype.query_wzkv1r$$default = FBFromApi.prototype.query_wzkv1r$$default;
  Edit.prototype.save_73z9b6$ = FBFromApi.prototype.save_73z9b6$;
  Edit.prototype.toList_pujjsl$$default = FBFromApi.prototype.toList_pujjsl$$default;
  Edit.prototype.toRandomFsDoc_xc7wmg$ = FBFromApi.prototype.toRandomFsDoc_xc7wmg$;
  Edit.prototype.toSnapshotEvents_ecp0ut$ = FBFromApi.prototype.toSnapshotEvents_ecp0ut$;
  Edit.prototype.get_backSaveDiscard_e1rmy3$ = EditExitFromKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  Edit.prototype.get_saveButton_tdhe4g$ = EditExitFromKillsUixApi.prototype.get_saveButton_tdhe4g$;
  Edit.prototype.get_saveDeleteButton_tdhe4g$ = EditExitFromKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  Edit.prototype.rxEditing_iwuu9m$ = FBFromApi.prototype.rxEditing_iwuu9m$;
  Edit.prototype.fsCache_sj6zb3$ = FBFromApi.prototype.fsCache_sj6zb3$;
  Edit.prototype.listEvents_pujjsl$ = FBFromApi.prototype.listEvents_pujjsl$;
  Edit.prototype.query_wzkv1r$ = FBFromApi.prototype.query_wzkv1r$;
  Edit.prototype.toList_pujjsl$ = FBFromApi.prototype.toList_pujjsl$;
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
  ViewChecklist.prototype.get_backButton_tdhe4g$ = FBFromApi.prototype.get_backButton_tdhe4g$;
  ViewChecklist.prototype.get_backButton_ihoiae$ = FBFromApi.prototype.get_backButton_ihoiae$;
  ViewChecklist.prototype.get_live_73z9b6$ = FBFromApi.prototype.get_live_73z9b6$;
  ViewChecklist.prototype.get_randomDoc_sj9vaa$ = FBFromApi.prototype.get_randomDoc_sj9vaa$;
  ViewChecklist.prototype.get_ref_sj9vaa$ = FBFromApi.prototype.get_ref_sj9vaa$;
  ViewChecklist.prototype.get_ref_aqty80$ = FBFromApi.prototype.get_ref_aqty80$;
  ViewChecklist.prototype.get_snapshots_79y88y$ = FBFromApi.prototype.get_snapshots_79y88y$;
  ViewChecklist.prototype.rxEditing_iwuu9m$$default = FBFromApi.prototype.rxEditing_iwuu9m$$default;
  ViewChecklist.prototype.delete_73z9b6$ = FBFromApi.prototype.delete_73z9b6$;
  ViewChecklist.prototype.docs_prxdpg$ = FBFromApi.prototype.docs_prxdpg$;
  ViewChecklist.prototype.documentChanges_z2kgpb$ = FBFromApi.prototype.documentChanges_z2kgpb$;
  ViewChecklist.prototype.fsCache_sj6zb3$$default = FBFromApi.prototype.fsCache_sj6zb3$$default;
  ViewChecklist.prototype.fsCache_aujjp8$ = FBFromApi.prototype.fsCache_aujjp8$;
  ViewChecklist.prototype.get_prxdpg$ = FBFromApi.prototype.get_prxdpg$;
  ViewChecklist.prototype.listEvents_pujjsl$$default = FBFromApi.prototype.listEvents_pujjsl$$default;
  ViewChecklist.prototype.query_wzkv1r$$default = FBFromApi.prototype.query_wzkv1r$$default;
  ViewChecklist.prototype.save_73z9b6$ = FBFromApi.prototype.save_73z9b6$;
  ViewChecklist.prototype.toList_pujjsl$$default = FBFromApi.prototype.toList_pujjsl$$default;
  ViewChecklist.prototype.toRandomFsDoc_xc7wmg$ = FBFromApi.prototype.toRandomFsDoc_xc7wmg$;
  ViewChecklist.prototype.toSnapshotEvents_ecp0ut$ = FBFromApi.prototype.toSnapshotEvents_ecp0ut$;
  ViewChecklist.prototype.rxEditing_iwuu9m$ = FBFromApi.prototype.rxEditing_iwuu9m$;
  ViewChecklist.prototype.fsCache_sj6zb3$ = FBFromApi.prototype.fsCache_sj6zb3$;
  ViewChecklist.prototype.listEvents_pujjsl$ = FBFromApi.prototype.listEvents_pujjsl$;
  ViewChecklist.prototype.query_wzkv1r$ = FBFromApi.prototype.query_wzkv1r$;
  ViewChecklist.prototype.toList_pujjsl$ = FBFromApi.prototype.toList_pujjsl$;
  main();
  Kotlin.defineModule('appsimake-checklist', _);
  return _;
}(typeof this['appsimake-checklist'] === 'undefined' ? {} : this['appsimake-checklist'], kotlin, this['appsimake-commonui'], this['appsimake-checklistlib'], this['appsimake-commonshr'], this['appsimake-commonfb'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-fontawesome'], this['kotlinx-coroutines-core'], this['appsimake-firebase']);

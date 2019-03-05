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
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-checklist'.");
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
this['appsimake-checklist'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_checklistlib, $module$appsimake_commonshr, $module$appsimake_common, $module$appsimake_commonfb, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_fontawesome, $module$kotlinx_coroutines_core, $module$appsimake_firebase) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Loading = $module$appsimake_commonui.commonui.widget.Loading;
  var commonui = $module$appsimake_commonui.commonui;
  var Body = $module$appsimake_commonui.commonui.widget.Body;
  var switchToView = $module$appsimake_commonui.commonui.widget.switchToView_pgpq8v$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launchGlobal = $module$appsimake_commonui.commonui.launchGlobal_g2bo5h$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ChecklistItem = $module$appsimake_checklistlib.checklist.ChecklistItem;
  var remAssign = $module$appsimake_commonshr.commonshr.properties.remAssign_rwr88g$;
  var UIBase_init = $module$appsimake_commonui.commonui.widget.UIBase_init_rq3hmi$;
  var ListenableMutableList_init = $module$appsimake_common.common.ListenableMutableList_init_287e2$;
  var get_now = $module$appsimake_commonshr.commonshr.properties.get_now_onaa3k$;
  var eventsEmitter = $module$appsimake_common.common.eventsEmitter_gg3m39$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var UIBase = $module$appsimake_commonui.commonui.widget.UIBase;
  var CsDbKillsApiCommonfb = $module$appsimake_commonfb.commonfb.CsDbKillsApiCommonfb;
  var EditFromKillsUixApi = $module$appsimake_commonui.commonui.EditFromKillsUixApi;
  var widget = $module$appsimake_commonui.commonui.widget;
  var remAssign_0 = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_asww5s$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var required = $module$appsimake_commonui.commonui.editing.required_dvq9sy$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_btnOutlineSecondary = $module$appsimake_bootstrap.bootstrap.get_btnOutlineSecondary_kre7dp$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var plus_0 = $module$appsimake_commonui.commonui.plus_938iip$;
  var bind = $module$appsimake_commonui.commonui.editing.bind_r7wuz3$;
  var get_trashAlt = $module$appsimake_fontawesome.fontawesome.get_trashAlt_xml72e$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var BodyPath = $module$appsimake_commonui.commonui.widget.BodyPath;
  var LoginOnly = $module$appsimake_commonfb.commonfb.loginbase.LoginOnly;
  var commonfb = $module$appsimake_commonfb.commonfb;
  var enablePersistenceAndWait = $module$appsimake_commonfb.commonfb.loginbase.enablePersistenceAndWait_gwf93m$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var HasDb = $module$appsimake_firebase.firebase.HasDb;
  var Checklist = $module$appsimake_checklistlib.checklist.Checklist;
  var ForwardBase_init = $module$appsimake_commonui.commonui.widget.ForwardBase_init_rq3hmi$;
  var UserState$LoggedIn = $module$appsimake_commonfb.commonfb.UserState.LoggedIn;
  var checklist = $module$appsimake_checklistlib.checklist;
  var get_private = $module$appsimake_commonshr.commonlib.get_private_6l3wi3$;
  var get_checklists = $module$appsimake_checklistlib.checklist.get_checklists_13xn5r$;
  var ForwardBase = $module$appsimake_commonui.commonui.widget.ForwardBase;
  var UserStateView = $module$appsimake_commonfb.commonfb.loginbase.UserStateView;
  var compareValuesBy = Kotlin.kotlin.comparisons.compareValuesBy_d999kh$;
  var Comparable = Kotlin.kotlin.Comparable;
  var get_pen = $module$appsimake_fontawesome.fontawesome.get_pen_xml72e$;
  var get_eraser = $module$appsimake_fontawesome.fontawesome.get_eraser_xml72e$;
  var get_dropdownToggle = $module$appsimake_bootstrap.bootstrap.get_dropdownToggle_kre7dp$;
  var dataToggleDropdown = $module$appsimake_bootstrap.bootstrap.dataToggleDropdown_v3gdir$;
  var get_textDanger = $module$appsimake_bootstrap.bootstrap.get_textDanger_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var sorted = $module$appsimake_common.common.sorted_dqxdvy$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_insert_0 = $module$appsimake_commonui.commonui.widget.get_insert_im8gow$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_check = $module$appsimake_fontawesome.fontawesome.get_check_xml72e$;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_9d6cjt$;
  var set_now = $module$appsimake_commonshr.commonshr.properties.set_now_6z2sje$;
  var get_docWrap = $module$appsimake_commonshr.commonshr.get_docWrap_2s00w$;
  var copy = $module$appsimake_commonshr.commonshr.properties.copy_szlj5h$;
  Edit.prototype = Object.create(UIBase.prototype);
  Edit.prototype.constructor = Edit;
  Home.prototype = Object.create(LoginOnly.prototype);
  Home.prototype.constructor = Home;
  LoggedIn.prototype = Object.create(ForwardBase.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  ViewChecklist.prototype = Object.create(ForwardBase.prototype);
  ViewChecklist.prototype.constructor = ViewChecklist;
  function Coroutine$main$lambda$lambda(this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$main$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$main$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$main$lambda$lambda.prototype.constructor = Coroutine$main$lambda$lambda;
  Coroutine$main$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = switchToView(this.local$this$.content, new Home(this.local$this$), this);
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
  function main$lambda$lambda(this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$main$lambda$lambda(this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function main() {
    var loading = new Loading();
    commonui.APP.startRegisteringServiceWorker();
    launchGlobal(main$lambda$lambda(new Body(loading.target)));
  }
  function EditPath() {
  }
  EditPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditPath',
    interfaces: [LoggedInPath]
  };
  function Edit(loggedIn, from, initial) {
    UIBase_init(from, this);
    this.from_4v717c$_0 = from;
    this.$delegate_z0sh1i$_0 = loggedIn;
    this.edit_4vzvw8$_0 = this;
    this.editing_svu7xy$_0 = this.rxEditing_pc5ddi$(initial, Edit$editing$lambda(this));
    var $receiver = ListenableMutableList_init();
    $receiver.addAll_brywnq$(get_now(this.editing.current.items));
    eventsEmitter($receiver, false)(Edit$items$lambda$lambda(this, $receiver));
    this.items = $receiver;
    var $receiver_0 = new Var('');
    this.editing.extraDirty.transform_ru8m0w$(Edit$adder$lambda$lambda($receiver_0, this));
    this.adder = $receiver_0;
    this.performAdd = Edit$performAdd$lambda;
    this.rawView_ntrkph$_0 = ui(this);
  }
  Object.defineProperty(Edit.prototype, 'from', {
    get: function () {
      return this.from_4v717c$_0;
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
    remAssign($receiver.name, name);
    tmp$.add_wxm5ur$(0, $receiver);
  };
  Object.defineProperty(Edit.prototype, 'rawView', {
    get: function () {
      return this.rawView_ntrkph$_0;
    }
  });
  Object.defineProperty(Edit.prototype, 'body', {
    get: function () {
      return this.$delegate_z0sh1i$_0.body;
    }
  });
  Object.defineProperty(Edit.prototype, 'db', {
    get: function () {
      return this.$delegate_z0sh1i$_0.db;
    }
  });
  Object.defineProperty(Edit.prototype, 'home', {
    get: function () {
      return this.$delegate_z0sh1i$_0.home;
    }
  });
  Object.defineProperty(Edit.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_z0sh1i$_0.loggedIn;
    }
  });
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function Coroutine$Edit$editing$lambda(this$Edit_0, current_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Edit = this$Edit_0;
  }
  Coroutine$Edit$editing$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Edit$editing$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Edit$editing$lambda.prototype.constructor = Coroutine$Edit$editing$lambda;
  Coroutine$Edit$editing$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!isBlank(this.local$this$Edit.adder.now)) {
              return this.local$this$Edit.performAdd(), Unit;
            }

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
  function Edit$editing$lambda(this$Edit_0) {
    return function (current_0, continuation_0, suspended) {
      var instance = new Coroutine$Edit$editing$lambda(this$Edit_0, current_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Edit$items$lambda$lambda(this$Edit, this$) {
    return function (it) {
      remAssign(this$Edit.editing.current.items, toList(this$));
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
    interfaces: [EditFromKillsUixApi, CsDbKillsApiCommonfb, EditPath, LoggedInPath, UIBase]
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
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$cl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$closure$cl = closure$cl_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.items.remove_11rb$(this.local$closure$cl);
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$cl_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui_0, closure$cl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
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
            this$ui.click_3xepc3$($receiver_0, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$ui, this.local$cl));
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
      this$ui.list_u1uvxv$($receiver, this$ui.map_1mq1ue$(this$ui.events_9fvrrk$(this$ui.items), ui$lambda$lambda$lambda$lambda$lambda$lambda(this$ui)));
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
      remAssign_0($receiver_2.label, 'Title');
      required(this$ui_0.bind_eam54t$($receiver_2.input, this$ui_0.editing.current.name.rxv));
      var $receiver_3 = $receiver_1.insert.formGroup;
      flexFixedSize($receiver_3.cls);
      remAssign_0($receiver_3.label, 'Items');
      var $receiver_4 = $receiver_3.insert.form;
      get_m1($receiver_4.cls);
      $receiver_4.column;
      var $receiver_5 = $receiver_4.insert.inputGroup;
      var $receiver_6 = $receiver_5.input;
      $receiver_6.required;
      $receiver_6.bindTo_cwklo1$(this$ui_0, this$ui_0.adder);
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
    remAssign_0($receiver_0.title, 'Edit Checklist');
    $receiver.get_saveButton_tdhe4g$($receiver_0.right);
    var tmp$ = $receiver_0.node;
    var $receiver_1 = widget.factory.scrollPane;
    invoke($receiver_1.pane, ui$lambda$lambda($receiver));
    return new TopAndContent(tmp$, $receiver_1.node);
  }
  function HomePath() {
  }
  HomePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HomePath',
    interfaces: [BodyPath]
  };
  function Home(body) {
    LoginOnly.call(this, body);
    this.$delegate_tvucme$_0 = body;
    this.home_jnuwct$_0 = this;
    var app = commonfb.FB.app;
    launch(this, void 0, void 0, Home_init$lambda(app, this));
  }
  Object.defineProperty(Home.prototype, 'home', {
    get: function () {
      return this.home_jnuwct$_0;
    }
  });
  Object.defineProperty(Home.prototype, 'body', {
    get: function () {
      return this.$delegate_tvucme$_0.body;
    }
  });
  function Coroutine$Home_init$lambda$lambda(this$Home_0, closure$app_0, closure$db_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Home = this$Home_0;
    this.local$closure$app = closure$app_0;
    this.local$closure$db = closure$db_0;
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
            return new LoggedIn(this.local$this$Home, this.local$it, this.local$closure$app, this.local$closure$db);
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
  function Home_init$lambda$lambda(this$Home_0, closure$app_0, closure$db_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$Home_init$lambda$lambda(this$Home_0, closure$app_0, closure$db_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Home_init$lambda(closure$app_0, this$Home_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$app = closure$app_0;
    this.local$this$Home = this$Home_0;
    this.local$$receiver = void 0;
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
            this.local$$receiver = commonfb.FB.db;
            this.state_0 = 2;
            this.result_0 = enablePersistenceAndWait(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var db = this.local$$receiver;
            this.state_0 = 3;
            this.result_0 = this.local$this$Home.start_x9mhxj$(this.local$closure$app, Home_init$lambda$lambda(this.local$this$Home, this.local$closure$app, db), this);
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
  function Home_init$lambda(closure$app_0, this$Home_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Home_init$lambda(closure$app_0, this$Home_0, $receiver_0, this, continuation_0);
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
    interfaces: [HasDb, HomePath]
  };
  function LoggedIn(home, user, app, db) {
    ForwardBase_init(home, this);
    this.app = app;
    this.db_24cewc$_0 = db;
    this.$delegate_b157uu$_0 = home;
    this.userState_yvqzbw$_0 = new UserState$LoggedIn(user);
    this.loggedIn_c0bqi3$_0 = this;
    this.checklists = get_checklists(get_private(checklist.checklistLib.app).doc_61zpoe$(user.uid));
    this.rawView_r4wkkr$_0 = ui_0(this);
  }
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.db_24cewc$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'userState', {
    get: function () {
      return this.userState_yvqzbw$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'loggedIn', {
    get: function () {
      return this.loggedIn_c0bqi3$_0;
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
            return this.local$this$LoggedIn.app.auth().signOut();
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
    launch(this, void 0, void 0, LoggedIn$signOut$lambda(this));
  };
  function Coroutine$LoggedIn$new$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoggedIn = this$LoggedIn_0;
  }
  Coroutine$LoggedIn$new$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoggedIn$new$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoggedIn$new$lambda.prototype.constructor = Coroutine$LoggedIn$new$lambda;
  Coroutine$LoggedIn$new$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$ = this.local$this$LoggedIn;
            var $receiver = new Checklist();
            remAssign($receiver.name, '<unknown>');
            var item = tmp$.toRandomFsDoc_t7liao$($receiver, this.local$this$LoggedIn.checklists);
            var $receiver_0 = new Edit(this.local$this$LoggedIn, this.local$this$LoggedIn, item);
            $receiver_0.get_live_73z9b6$(item);
            return $receiver_0;
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
  function LoggedIn$new$lambda(this$LoggedIn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$new$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$new($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$new.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$new.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$new.prototype.constructor = Coroutine$new;
  Coroutine$new.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.forward.switchTo_cbny1b$(LoggedIn$new$lambda(this.$this), this);
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
  LoggedIn.prototype.new = function (continuation_0, suspended) {
    var instance = new Coroutine$new(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$LoggedIn$viewChecklist$lambda(this$LoggedIn_0, closure$cl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
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
            return new ViewChecklist(this.local$this$LoggedIn, this.local$closure$cl);
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
  function LoggedIn$viewChecklist$lambda(this$LoggedIn_0, closure$cl_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$viewChecklist$lambda(this$LoggedIn_0, closure$cl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$viewChecklist_umagvj$($this, cl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$cl = cl_0;
  }
  Coroutine$viewChecklist_umagvj$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$viewChecklist_umagvj$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$viewChecklist_umagvj$.prototype.constructor = Coroutine$viewChecklist_umagvj$;
  Coroutine$viewChecklist_umagvj$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.forward.switchTo_cbny1b$(LoggedIn$viewChecklist$lambda(this.$this, this.local$cl), this);
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
  LoggedIn.prototype.viewChecklist_umagvj$ = function (cl_0, continuation_0, suspended) {
    var instance = new Coroutine$viewChecklist_umagvj$(this, cl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_r4wkkr$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'body', {
    get: function () {
      return this.$delegate_b157uu$_0.body;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'home', {
    get: function () {
      return this.$delegate_b157uu$_0.home;
    }
  });
  LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [CsDbKillsApiCommonfb, LoggedInPath, HomePath, UserStateView, ForwardBase]
  };
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
            return this.local$this$ui.signOut(), Unit;
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
  function ui$lambda$lambda$lambda$lambda(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda.prototype.constructor = Coroutine$ui$lambda$lambda$lambda;
  Coroutine$ui$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.new(this);
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
  function ui$lambda$lambda$lambda(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_0() {
    return new Checklist();
  }
  function ui$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.get_desc_5eq60p$(Checklist.Companion.ts);
    return Unit;
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl) {
    return function () {
      return closure$cl.doc.name.rxv.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl_0, this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cl = closure$cl_0;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.viewChecklist_umagvj$(this.local$closure$cl, this);
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$cl_0, this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl_0, this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_0, cl_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
    this.local$$receiver = $receiver_0;
    this.local$cl = cl_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = widget.factory.listGroupButton;
            var this$ui = this.local$this$ui;
            this.local$$receiver.remAssign_7fncnf$($receiver.middle, ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$cl));
            this$ui.click_b0jn9q$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this.local$cl, this$ui));
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
  function ui$lambda$lambda$lambda$lambda_2(this$ui_0) {
    return function ($receiver_0, cl_0, continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_0, cl_0, this, continuation_0);
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
      this$ui_0.list_u1uvxv$($receiver_0.node, this$ui_0.map_1mq1ue$(this$ui_0.listEvents_e847ux$(this$ui_0.checklists, ui$lambda$lambda$lambda$lambda_0, ui$lambda$lambda$lambda$lambda_1), ui$lambda$lambda$lambda$lambda_2(this$ui_0)));
      return Unit;
    };
  }
  function ui_0($receiver) {
    var $receiver_0 = widget.factory.topbar;
    remAssign_0($receiver_0.title, 'Checklists');
    var $receiver_1 = $receiver_0.left.dropdown;
    $receiver_1.bars;
    $receiver.signOut_7wq8x$($receiver_1.menu, ui$lambda$lambda$lambda$lambda($receiver));
    var $receiver_2 = $receiver_0.right.button;
    $receiver_2.m1p2;
    get_plus($receiver_2.fa);
    $receiver_2.primary;
    $receiver.click_3xepc3$($receiver_2, ui$lambda$lambda$lambda($receiver));
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
  function Coroutine$ui$lambda$lambda$lambda_0(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda_0.prototype.constructor = Coroutine$ui$lambda$lambda$lambda_0;
  Coroutine$ui$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.loggedIn.redisplay();
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
  function ui$lambda$lambda$lambda_0(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_0(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_1(this$ui) {
    return function () {
      return this$ui.chklist.doc.name.invoke();
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_1;
  Coroutine$ui$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.editChecklist(), Unit;
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
  function ui$lambda$lambda$lambda$lambda_3(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda_2.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda_2;
  Coroutine$ui$lambda$lambda$lambda$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.clear_uyyhtd$(this.local$this$ui.docs.now), Unit;
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
  function ui$lambda$lambda$lambda$lambda_4(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda_2(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ui = this$ui_0;
  }
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.constructor = Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1;
  Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ui.deleteChecklist(), Unit;
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_2(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
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
      console.dir(it);
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
  function ui$lambda$lambda$lambda_1(this$ui) {
    return function () {
      var $receiver = widget.factory.listGroup;
      var this$ui_0 = this$ui;
      get_m1($receiver.cls);
      var tmp$ = $receiver.node;
      var $receiver_0 = this$ui_0.docs.invoke();
      console.dir($receiver_0);
      this$ui_0.list_u1uvxv$(tmp$, this$ui_0.map_1mq1ue$(this$ui_0.events_9fvrrk$(sorted(new ListenableMutableList($receiver_0.items.invoke()), this$ui_0.kills, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda)), ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$ui_0, $receiver_0)));
      return $receiver.node;
    };
  }
  function ui$lambda$lambda_2(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      this$ui.remAssign_ah7wag$(get_widget($receiver), ui$lambda$lambda$lambda_1(this$ui));
      return Unit;
    };
  }
  function ui_1($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var $receiver_1 = $receiver_0.left.button;
    $receiver_1.back;
    $receiver.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda_0($receiver));
    $receiver.remAssign_7fncnf$($receiver_0.title, ui$lambda$lambda_1($receiver));
    var $receiver_2 = $receiver_0.right.buttonGroup;
    get_m1($receiver_2.cls);
    var $receiver_3 = $receiver_2.button;
    $receiver_3.p2;
    $receiver_3.primary;
    get_pen($receiver_3.fa);
    $receiver.click_3xepc3$($receiver_3, ui$lambda$lambda$lambda$lambda_3($receiver));
    var $receiver_4 = $receiver_2.button;
    $receiver_4.p2;
    $receiver_4.primary;
    get_eraser($receiver_4.fa);
    $receiver.click_3xepc3$($receiver_4, ui$lambda$lambda$lambda$lambda_4($receiver));
    var $receiver_5 = $receiver_2.insert.buttonGroup;
    var $receiver_6 = $receiver_5.button;
    $receiver_6.p2;
    $receiver_6.primary;
    get_dropdownToggle($receiver_6.cls);
    dataToggleDropdown($receiver_6.node);
    var $receiver_7 = $receiver_5.menu;
    $receiver_7.right;
    var $receiver_8 = $receiver_7.item;
    get_textDanger(get_cls($receiver_8.node));
    get_trashAlt($receiver_8.fa);
    $receiver_8.text.remAssign_61zpoe$('Delete');
    $receiver.click_ka8ib0$($receiver_8, ui$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_9 = widget.factory.scrollPane;
    invoke($receiver_9.pane, ui$lambda$lambda_2($receiver));
    return new TopAndContent(tmp$, $receiver_9.node);
  }
  function ViewPath() {
  }
  ViewPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewPath',
    interfaces: [LoggedInPath]
  };
  function ViewChecklist(from, chklist) {
    ForwardBase_init(from, this);
    this.chklist = chklist;
    this.$delegate_cqpqsg$_0 = from;
    this.viewChecklist_u2r8nt$_0 = this;
    this.docs = this.toRx_on0lyu$(this.docs_om34f8$(get_docWrap(this.chklist)), copy(this.chklist.doc));
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
    tmp$ = get_now($receiver.items).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      set_now(element.checked, false);
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
            this.local$this$ViewChecklist.delete_73z9b6$(this.local$this$ViewChecklist.chklist);
            return this.local$this$ViewChecklist.loggedIn.redisplay();
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
    this.loggedIn.exec(ViewChecklist$deleteChecklist$lambda(this));
  };
  function Coroutine$ViewChecklist$editChecklist$lambda$lambda(this$ViewChecklist_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewChecklist = this$ViewChecklist_0;
  }
  Coroutine$ViewChecklist$editChecklist$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewChecklist$editChecklist$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewChecklist$editChecklist$lambda$lambda.prototype.constructor = Coroutine$ViewChecklist$editChecklist$lambda$lambda;
  Coroutine$ViewChecklist$editChecklist$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Edit(this.local$this$ViewChecklist.loggedIn, this.local$this$ViewChecklist, this.local$this$ViewChecklist.chklist);
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
  function ViewChecklist$editChecklist$lambda$lambda(this$ViewChecklist_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewChecklist$editChecklist$lambda$lambda(this$ViewChecklist_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewChecklist$editChecklist$lambda(this$ViewChecklist_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
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
            this.result_0 = this.local$this$ViewChecklist.forward.switchTo_cbny1b$(ViewChecklist$editChecklist$lambda$lambda(this.local$this$ViewChecklist), this);
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
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewChecklist$editChecklist$lambda(this$ViewChecklist_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ViewChecklist.prototype.editChecklist = function () {
    this.exec(ViewChecklist$editChecklist$lambda(this));
  };
  Object.defineProperty(ViewChecklist.prototype, 'rawView', {
    get: function () {
      return this.rawView_sw6xvp$_0;
    }
  });
  Object.defineProperty(ViewChecklist.prototype, 'body', {
    get: function () {
      return this.$delegate_cqpqsg$_0.body;
    }
  });
  Object.defineProperty(ViewChecklist.prototype, 'db', {
    get: function () {
      return this.$delegate_cqpqsg$_0.db;
    }
  });
  Object.defineProperty(ViewChecklist.prototype, 'home', {
    get: function () {
      return this.$delegate_cqpqsg$_0.home;
    }
  });
  Object.defineProperty(ViewChecklist.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_cqpqsg$_0.loggedIn;
    }
  });
  ViewChecklist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewChecklist',
    interfaces: [CsDbKillsApiCommonfb, ViewPath, LoggedInPath, ForwardBase]
  };
  var package$checklist = _.checklist || (_.checklist = {});
  package$checklist.main = main;
  var package$edit = package$checklist.edit || (package$checklist.edit = {});
  package$edit.EditPath = EditPath;
  package$edit.Edit = Edit;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$edit.ui_k7tup5$ = ui;
  var package$home = package$checklist.home || (package$checklist.home = {});
  package$home.HomePath = HomePath;
  package$home.Home = Home;
  var package$loggedin = package$checklist.loggedin || (package$checklist.loggedin = {});
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.ui_d62iaf$ = ui_0;
  var package$view = package$checklist.view || (package$checklist.view = {});
  package$view.ItemOrder = ItemOrder;
  package$view.ui_v6i9e7$ = ui_1;
  package$view.ViewPath = ViewPath;
  package$view.ViewChecklist = ViewChecklist;
  Edit.prototype.remAssign_ah7wag$ = CsDbKillsApiCommonfb.prototype.remAssign_ah7wag$;
  Edit.prototype.rxClass_9npl0m$ = CsDbKillsApiCommonfb.prototype.rxClass_9npl0m$;
  Edit.prototype.get_live_73z9b6$ = CsDbKillsApiCommonfb.prototype.get_live_73z9b6$;
  Edit.prototype.get_randomDoc_9jwep6$ = CsDbKillsApiCommonfb.prototype.get_randomDoc_9jwep6$;
  Edit.prototype.get_ref_9jwep6$ = CsDbKillsApiCommonfb.prototype.get_ref_9jwep6$;
  Edit.prototype.get_ref_lysoy0$ = CsDbKillsApiCommonfb.prototype.get_ref_lysoy0$;
  Edit.prototype.get_snapshots_5bfeyi$ = CsDbKillsApiCommonfb.prototype.get_snapshots_5bfeyi$;
  Edit.prototype.rxEditing_pc5ddi$ = CsDbKillsApiCommonfb.prototype.rxEditing_pc5ddi$;
  Edit.prototype.delete_73z9b6$ = CsDbKillsApiCommonfb.prototype.delete_73z9b6$;
  Edit.prototype.docs_om34f8$ = CsDbKillsApiCommonfb.prototype.docs_om34f8$;
  Edit.prototype.documentChanges_z2kgpb$ = CsDbKillsApiCommonfb.prototype.documentChanges_z2kgpb$;
  Edit.prototype.enabled_y5ufnr$ = CsDbKillsApiCommonfb.prototype.enabled_y5ufnr$;
  Edit.prototype.events_9fvrrk$ = CsDbKillsApiCommonfb.prototype.events_9fvrrk$;
  Edit.prototype.list_u1uvxv$ = CsDbKillsApiCommonfb.prototype.list_u1uvxv$;
  Edit.prototype.listEvents_e847ux$$default = CsDbKillsApiCommonfb.prototype.listEvents_e847ux$$default;
  Edit.prototype.listEvents_ghesau$ = CsDbKillsApiCommonfb.prototype.listEvents_ghesau$;
  Edit.prototype.listEvents_1nmm22$ = CsDbKillsApiCommonfb.prototype.listEvents_1nmm22$;
  Edit.prototype.on_2stdkb$ = CsDbKillsApiCommonfb.prototype.on_2stdkb$;
  Edit.prototype.on_hgi4ad$ = CsDbKillsApiCommonfb.prototype.on_hgi4ad$;
  Edit.prototype.query_mixq7r$$default = CsDbKillsApiCommonfb.prototype.query_mixq7r$$default;
  Edit.prototype.save_73z9b6$ = CsDbKillsApiCommonfb.prototype.save_73z9b6$;
  Edit.prototype.toRandomFsDoc_t7liao$ = CsDbKillsApiCommonfb.prototype.toRandomFsDoc_t7liao$;
  Edit.prototype.toRx_on0lyu$ = CsDbKillsApiCommonfb.prototype.toRx_on0lyu$;
  Edit.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsApiCommonfb.prototype.toSnapshotEvents_ecp0ut$;
  Edit.prototype.visibility_dakdiv$ = CsDbKillsApiCommonfb.prototype.visibility_dakdiv$;
  Edit.prototype.get_backSaveDiscard_e1rmy3$ = EditFromKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  Edit.prototype.get_saveButton_tdhe4g$ = EditFromKillsUixApi.prototype.get_saveButton_tdhe4g$;
  Edit.prototype.bind_85m6xz$ = EditFromKillsUixApi.prototype.bind_85m6xz$;
  Edit.prototype.bind_eam54t$ = EditFromKillsUixApi.prototype.bind_eam54t$;
  Edit.prototype.listEvents_e847ux$ = CsDbKillsApiCommonfb.prototype.listEvents_e847ux$;
  Edit.prototype.query_mixq7r$ = CsDbKillsApiCommonfb.prototype.query_mixq7r$;
  LoggedIn.prototype.signOut_7wq8x$ = CsDbKillsApiCommonfb.prototype.signOut_7wq8x$;
  LoggedIn.prototype.remAssign_ah7wag$ = CsDbKillsApiCommonfb.prototype.remAssign_ah7wag$;
  LoggedIn.prototype.rxClass_9npl0m$ = CsDbKillsApiCommonfb.prototype.rxClass_9npl0m$;
  LoggedIn.prototype.get_live_73z9b6$ = CsDbKillsApiCommonfb.prototype.get_live_73z9b6$;
  LoggedIn.prototype.get_randomDoc_9jwep6$ = CsDbKillsApiCommonfb.prototype.get_randomDoc_9jwep6$;
  LoggedIn.prototype.get_ref_9jwep6$ = CsDbKillsApiCommonfb.prototype.get_ref_9jwep6$;
  LoggedIn.prototype.get_ref_lysoy0$ = CsDbKillsApiCommonfb.prototype.get_ref_lysoy0$;
  LoggedIn.prototype.get_snapshots_5bfeyi$ = CsDbKillsApiCommonfb.prototype.get_snapshots_5bfeyi$;
  LoggedIn.prototype.rxEditing_pc5ddi$ = CsDbKillsApiCommonfb.prototype.rxEditing_pc5ddi$;
  LoggedIn.prototype.click_3xepc3$ = CsDbKillsApiCommonfb.prototype.click_3xepc3$;
  LoggedIn.prototype.click_ka8ib0$ = CsDbKillsApiCommonfb.prototype.click_ka8ib0$;
  LoggedIn.prototype.click_b0jn9q$ = CsDbKillsApiCommonfb.prototype.click_b0jn9q$;
  LoggedIn.prototype.click_htd9kn$ = CsDbKillsApiCommonfb.prototype.click_htd9kn$;
  LoggedIn.prototype.delete_73z9b6$ = CsDbKillsApiCommonfb.prototype.delete_73z9b6$;
  LoggedIn.prototype.docs_om34f8$ = CsDbKillsApiCommonfb.prototype.docs_om34f8$;
  LoggedIn.prototype.documentChanges_z2kgpb$ = CsDbKillsApiCommonfb.prototype.documentChanges_z2kgpb$;
  LoggedIn.prototype.enabled_y5ufnr$ = CsDbKillsApiCommonfb.prototype.enabled_y5ufnr$;
  LoggedIn.prototype.events_9fvrrk$ = CsDbKillsApiCommonfb.prototype.events_9fvrrk$;
  LoggedIn.prototype.list_u1uvxv$ = CsDbKillsApiCommonfb.prototype.list_u1uvxv$;
  LoggedIn.prototype.listEvents_e847ux$$default = CsDbKillsApiCommonfb.prototype.listEvents_e847ux$$default;
  LoggedIn.prototype.listEvents_ghesau$ = CsDbKillsApiCommonfb.prototype.listEvents_ghesau$;
  LoggedIn.prototype.listEvents_1nmm22$ = CsDbKillsApiCommonfb.prototype.listEvents_1nmm22$;
  LoggedIn.prototype.on_2stdkb$ = CsDbKillsApiCommonfb.prototype.on_2stdkb$;
  LoggedIn.prototype.on_hgi4ad$ = CsDbKillsApiCommonfb.prototype.on_hgi4ad$;
  LoggedIn.prototype.query_mixq7r$$default = CsDbKillsApiCommonfb.prototype.query_mixq7r$$default;
  LoggedIn.prototype.save_73z9b6$ = CsDbKillsApiCommonfb.prototype.save_73z9b6$;
  LoggedIn.prototype.toRandomFsDoc_t7liao$ = CsDbKillsApiCommonfb.prototype.toRandomFsDoc_t7liao$;
  LoggedIn.prototype.toRx_on0lyu$ = CsDbKillsApiCommonfb.prototype.toRx_on0lyu$;
  LoggedIn.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsApiCommonfb.prototype.toSnapshotEvents_ecp0ut$;
  LoggedIn.prototype.visibility_dakdiv$ = CsDbKillsApiCommonfb.prototype.visibility_dakdiv$;
  LoggedIn.prototype.listEvents_e847ux$ = CsDbKillsApiCommonfb.prototype.listEvents_e847ux$;
  LoggedIn.prototype.query_mixq7r$ = CsDbKillsApiCommonfb.prototype.query_mixq7r$;
  ViewChecklist.prototype.remAssign_ah7wag$ = CsDbKillsApiCommonfb.prototype.remAssign_ah7wag$;
  ViewChecklist.prototype.rxClass_9npl0m$ = CsDbKillsApiCommonfb.prototype.rxClass_9npl0m$;
  ViewChecklist.prototype.get_live_73z9b6$ = CsDbKillsApiCommonfb.prototype.get_live_73z9b6$;
  ViewChecklist.prototype.get_randomDoc_9jwep6$ = CsDbKillsApiCommonfb.prototype.get_randomDoc_9jwep6$;
  ViewChecklist.prototype.get_ref_9jwep6$ = CsDbKillsApiCommonfb.prototype.get_ref_9jwep6$;
  ViewChecklist.prototype.get_ref_lysoy0$ = CsDbKillsApiCommonfb.prototype.get_ref_lysoy0$;
  ViewChecklist.prototype.get_snapshots_5bfeyi$ = CsDbKillsApiCommonfb.prototype.get_snapshots_5bfeyi$;
  ViewChecklist.prototype.rxEditing_pc5ddi$ = CsDbKillsApiCommonfb.prototype.rxEditing_pc5ddi$;
  ViewChecklist.prototype.click_3xepc3$ = CsDbKillsApiCommonfb.prototype.click_3xepc3$;
  ViewChecklist.prototype.click_ka8ib0$ = CsDbKillsApiCommonfb.prototype.click_ka8ib0$;
  ViewChecklist.prototype.click_b0jn9q$ = CsDbKillsApiCommonfb.prototype.click_b0jn9q$;
  ViewChecklist.prototype.click_htd9kn$ = CsDbKillsApiCommonfb.prototype.click_htd9kn$;
  ViewChecklist.prototype.delete_73z9b6$ = CsDbKillsApiCommonfb.prototype.delete_73z9b6$;
  ViewChecklist.prototype.docs_om34f8$ = CsDbKillsApiCommonfb.prototype.docs_om34f8$;
  ViewChecklist.prototype.documentChanges_z2kgpb$ = CsDbKillsApiCommonfb.prototype.documentChanges_z2kgpb$;
  ViewChecklist.prototype.enabled_y5ufnr$ = CsDbKillsApiCommonfb.prototype.enabled_y5ufnr$;
  ViewChecklist.prototype.events_9fvrrk$ = CsDbKillsApiCommonfb.prototype.events_9fvrrk$;
  ViewChecklist.prototype.list_u1uvxv$ = CsDbKillsApiCommonfb.prototype.list_u1uvxv$;
  ViewChecklist.prototype.listEvents_e847ux$$default = CsDbKillsApiCommonfb.prototype.listEvents_e847ux$$default;
  ViewChecklist.prototype.listEvents_ghesau$ = CsDbKillsApiCommonfb.prototype.listEvents_ghesau$;
  ViewChecklist.prototype.listEvents_1nmm22$ = CsDbKillsApiCommonfb.prototype.listEvents_1nmm22$;
  ViewChecklist.prototype.on_2stdkb$ = CsDbKillsApiCommonfb.prototype.on_2stdkb$;
  ViewChecklist.prototype.on_hgi4ad$ = CsDbKillsApiCommonfb.prototype.on_hgi4ad$;
  ViewChecklist.prototype.query_mixq7r$$default = CsDbKillsApiCommonfb.prototype.query_mixq7r$$default;
  ViewChecklist.prototype.save_73z9b6$ = CsDbKillsApiCommonfb.prototype.save_73z9b6$;
  ViewChecklist.prototype.signOut_7wq8x$ = CsDbKillsApiCommonfb.prototype.signOut_7wq8x$;
  ViewChecklist.prototype.toRandomFsDoc_t7liao$ = CsDbKillsApiCommonfb.prototype.toRandomFsDoc_t7liao$;
  ViewChecklist.prototype.toRx_on0lyu$ = CsDbKillsApiCommonfb.prototype.toRx_on0lyu$;
  ViewChecklist.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsApiCommonfb.prototype.toSnapshotEvents_ecp0ut$;
  ViewChecklist.prototype.visibility_dakdiv$ = CsDbKillsApiCommonfb.prototype.visibility_dakdiv$;
  ViewChecklist.prototype.listEvents_e847ux$ = CsDbKillsApiCommonfb.prototype.listEvents_e847ux$;
  ViewChecklist.prototype.query_mixq7r$ = CsDbKillsApiCommonfb.prototype.query_mixq7r$;
  main();
  Kotlin.defineModule('appsimake-checklist', _);
  return _;
}(typeof this['appsimake-checklist'] === 'undefined' ? {} : this['appsimake-checklist'], kotlin, this['appsimake-commonui'], this['appsimake-checklistlib'], this['appsimake-commonshr'], this['appsimake-common'], this['appsimake-commonfb'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-fontawesome'], this['kotlinx-coroutines-core'], this['appsimake-firebase']);

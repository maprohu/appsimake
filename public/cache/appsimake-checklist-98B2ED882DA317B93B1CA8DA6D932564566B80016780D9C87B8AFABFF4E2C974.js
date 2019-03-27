if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-commonfb'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-commonfb' was not found. Please, check whether 'appsimake-commonfb' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-checklistlib'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-checklistlib' was not found. Please, check whether 'appsimake-checklistlib' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-checklist'.");
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
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-checklist'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-checklist'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-checklist'.");
}
this['appsimake-checklist'] = function (_, Kotlin, $module$appsimake_commonfb, $module$appsimake_checklistlib, $module$appsimake_commonshr, $module$appsimake_commonui, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_fontawesome, $module$appsimake_firebase, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var FbLinksFactory = $module$appsimake_commonfb.commonfb.FbLinksFactory;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ChecklistItem = $module$appsimake_checklistlib.checklist.ChecklistItem;
  var Unit = Kotlin.kotlin.Unit;
  var RxMutableList_init = $module$appsimake_commonshr.rx.RxMutableList_init_287e2$;
  var eventsEmitter = $module$appsimake_commonshr.rx.eventsEmitter_2us9mn$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Var = $module$appsimake_commonshr.rx.Var;
  var killable = $module$appsimake_commonshr.killable;
  var addDirty = $module$appsimake_commonui.commonui.editing.addDirty_6eronh$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var BindKillsApi = $module$appsimake_commonui.commonui.BindKillsApi;
  var CsApiCommonui = $module$appsimake_commonui.commonui.CsApiCommonui;
  var CsKillsApi = $module$appsimake_commonshr.commonshr.CsKillsApi;
  var KillsUixApi = $module$appsimake_commonui.commonui.KillsUixApi;
  var CsKillsView = $module$appsimake_commonui.commonui.CsKillsView;
  var FBBackApi = $module$appsimake_commonfb.commonfb.FBBackApi;
  var BackEditKillsUixApi = $module$appsimake_commonui.commonui.BackEditKillsUixApi;
  var HasBack = $module$appsimake_commonui.commonui.HasBack;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var widget = $module$appsimake_commonui.commonui.widget;
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
  var plus = $module$appsimake_commonui.commonui.plus_4gjbuw$;
  var bind = $module$appsimake_commonui.commonui.editing.bind_xr5ias$;
  var get_trashAlt = $module$appsimake_fontawesome.fontawesome.get_trashAlt_xml72e$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var DbApi = $module$appsimake_firebase.firebase.DbApi;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var links = $module$appsimake_commonui.commonui.links;
  var forwarding = $module$appsimake_commonui.commonui.forwarding_34i6n3$;
  var toFsEditable = $module$appsimake_commonshr.commonshr.toFsEditable_fvyl56$;
  var backOnRedisplay = $module$appsimake_commonui.commonui.backOnRedisplay_hq6gga$;
  var BaseTC = $module$appsimake_commonui.commonui.links.BaseTC;
  var LinkApi = $module$appsimake_commonui.commonui.links.LinkApi;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var advance = $module$appsimake_commonui.commonui.advance_i6d3n$;
  var get_idOrFail = $module$appsimake_commonshr.commonshr.get_idOrFail_2s00w$;
  var ForwardBase = $module$appsimake_commonui.commonui.ForwardBase;
  var checklist = $module$appsimake_checklistlib.checklist;
  var get_private = $module$appsimake_commonshr.commonshr.get_private_py8usb$;
  var get_checklists = $module$appsimake_checklistlib.checklist.get_checklists_x4imip$;
  var FBApi = $module$appsimake_commonfb.commonfb.FBApi;
  var Checklist = $module$appsimake_checklistlib.checklist.Checklist;
  var BackCreateKillsUixApi = $module$appsimake_commonui.commonui.BackCreateKillsUixApi;
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
  var toFsId = $module$appsimake_commonshr.commonshr.toFsId_d81mk7$;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_ved7zl$;
  var launchNonCancellable = $module$appsimake_commonshr.commonshr.launchNonCancellable_hilpzi$;
  var toFsDoc_0 = $module$appsimake_commonshr.commonshr.toFsDoc_ihdkly$;
  EditChecklist.prototype = Object.create(CsKillsView.prototype);
  EditChecklist.prototype.constructor = EditChecklist;
  Links.prototype = Object.create(FbLinksFactory.prototype);
  Links.prototype.constructor = Links;
  LoggedIn.prototype = Object.create(ForwardBase.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  NewChecklist.prototype = Object.create(CsKillsView.prototype);
  NewChecklist.prototype.constructor = NewChecklist;
  ViewChecklist.prototype = Object.create(ForwardBase.prototype);
  ViewChecklist.prototype.constructor = ViewChecklist;
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
    FbLinksFactory.Companion.start_vfsueo$(void 0, main$lambda);
  }
  function EditChecklistPath() {
  }
  EditChecklistPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditChecklistPath',
    interfaces: [LoggedInPath]
  };
  function EditChecklistControl(item, bindings) {
    this.item = item;
    this.bindings = bindings;
    var $receiver = RxMutableList_init();
    $receiver.addAll_brywnq$(this.item.items.now);
    eventsEmitter($receiver, false)(EditChecklistControl$items$lambda$lambda(this, $receiver));
    this.items = $receiver;
    var $receiver_0 = new Var('');
    addDirty(this.bindings, killable.HasNoKill, EditChecklistControl$adder$lambda$lambda($receiver_0));
    this.adder = $receiver_0;
    this.performAdd = EditChecklistControl$performAdd$lambda;
  }
  EditChecklistControl.prototype.addItem_61zpoe$ = function (name) {
    var tmp$ = this.items;
    var $receiver = new ChecklistItem();
    $receiver.name.remAssign_11rc$(name);
    tmp$.add_wxm5ur$(0, $receiver);
  };
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  EditChecklistControl.prototype.preSave = function () {
    if (!isBlank(this.adder.now)) {
      this.performAdd();
    }
  };
  function EditChecklistControl$items$lambda$lambda(this$EditChecklistControl, this$) {
    return function (it) {
      this$EditChecklistControl.item.items.remAssign_11rc$(toList(this$));
      return Unit;
    };
  }
  function EditChecklistControl$adder$lambda$lambda(closure$it) {
    return function ($receiver) {
      return !isBlank(closure$it.invoke());
    };
  }
  function EditChecklistControl$performAdd$lambda() {
    return Unit;
  }
  EditChecklistControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditChecklistControl',
    interfaces: []
  };
  function EditChecklistLike() {
  }
  EditChecklistLike.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditChecklistLike',
    interfaces: [KillsUixApi, CsKillsApi, CsApiCommonui, BindKillsApi]
  };
  function EditChecklist(parent, linkage, editable, deleteTrigger) {
    if (deleteTrigger === void 0)
      deleteTrigger = killable.Noop;
    CsKillsView.call(this, parent);
    this.linkage = linkage;
    this.$delegate_d3by9q$_0 = parent;
    this.edit_n8bgp0$_0 = this;
    this.editing_mn1v7y$_0 = this.rxEditing_6l8l9j$(editable, EditChecklist$editing$lambda(this, deleteTrigger));
    this.control = new EditChecklistControl(this.editing.current, this.bindings);
    this.rawView_4bjlw9$_0 = ui(this);
  }
  Object.defineProperty(EditChecklist.prototype, 'edit', {
    get: function () {
      return this.edit_n8bgp0$_0;
    }
  });
  Object.defineProperty(EditChecklist.prototype, 'editing', {
    get: function () {
      return this.editing_mn1v7y$_0;
    }
  });
  Object.defineProperty(EditChecklist.prototype, 'rawView', {
    get: function () {
      return this.rawView_4bjlw9$_0;
    }
  });
  Object.defineProperty(EditChecklist.prototype, 'db', {
    get: function () {
      return this.$delegate_d3by9q$_0.db;
    }
  });
  Object.defineProperty(EditChecklist.prototype, 'links', {
    get: function () {
      return this.$delegate_d3by9q$_0.links;
    }
  });
  Object.defineProperty(EditChecklist.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_d3by9q$_0.loggedIn;
    }
  });
  EditChecklist.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_d3by9q$_0.get_randomDoc_sj9vaa$($receiver);
  };
  EditChecklist.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_d3by9q$_0.get_ref_sj9vaa$($receiver);
  };
  EditChecklist.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_d3by9q$_0.get_ref_aqty80$($receiver);
  };
  EditChecklist.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_d3by9q$_0.delete_73z9b6$($receiver);
  };
  EditChecklist.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_d3by9q$_0.delete_ihdkly$($receiver);
  };
  EditChecklist.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_d3by9q$_0.get_prxdpg$($receiver, continuation);
  };
  EditChecklist.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_d3by9q$_0.query_wzkv1r$$default($receiver, query);
  };
  EditChecklist.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_d3by9q$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  EditChecklist.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_d3by9q$_0.save_73z9b6$($receiver);
  };
  EditChecklist.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_d3by9q$_0.save_biv66q$($receiver);
  };
  EditChecklist.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_d3by9q$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(EditChecklist.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  function EditChecklist$editing$lambda$lambda(this$EditChecklist, closure$tr) {
    return function (current) {
      this$EditChecklist.control.preSave();
      closure$tr.save(current);
      return Unit;
    };
  }
  function EditChecklist$editing$lambda$lambda_0(closure$tr, closure$deleteTrigger) {
    return function () {
      closure$tr.delete();
      closure$deleteTrigger();
      return Unit;
    };
  }
  function EditChecklist$editing$lambda(this$EditChecklist, closure$deleteTrigger) {
    return function (tr) {
      var tmp$;
      tmp$ = EditChecklist$editing$lambda$lambda(this$EditChecklist, tr);
      return tr.copy_yrs701$(EditChecklist$editing$lambda$lambda_0(tr, closure$deleteTrigger), tmp$);
    };
  }
  EditChecklist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditChecklist',
    interfaces: [BackEditKillsUixApi, FBBackApi, HasBack, EditChecklistPath, LoggedInPath, EditChecklistLike, CsKillsView]
  };
  function ui$lambda(this$ui) {
    return function ($receiver) {
      this$ui.get_backSaveDiscard_e1rmy3$($receiver.slots.left);
      remAssign($receiver.title, 'Edit Checklist');
      this$ui.get_saveDeleteButton_tdhe4g$($receiver.right);
      return Unit;
    };
  }
  function ui($receiver) {
    return editChecklistUi($receiver, $receiver.editing.current, $receiver.control, ui$lambda($receiver));
  }
  function editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(this$, this$_0) {
    return function () {
      this$_0.addItem_61zpoe$(this$.value);
      this$_0.adder.remAssign_11rb$('');
      this$.value = '';
      return Unit;
    };
  }
  function editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(this$, this$_0) {
    return function (it) {
      this$.performAdd();
      this$_0.node.focus();
      return Unit;
    };
  }
  function editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$control, closure$cl) {
    return function () {
      closure$control.items.remove_11rb$(closure$cl);
      return Unit;
    };
  }
  function Coroutine$editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda(this$editChecklistUi_0, closure$control_0, $receiver_0, cl_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$editChecklistUi = this$editChecklistUi_0;
    this.local$closure$control = closure$control_0;
    this.local$$receiver = $receiver_0;
    this.local$cl = cl_0;
  }
  Coroutine$editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = widget.factory.inputGroup;
            var this$editChecklistUi = this.local$this$editChecklistUi;
            var closure$control = this.local$closure$control;
            get_m1($receiver.cls);
            required(bind($receiver.input, plus(this$editChecklistUi.bindings, this.local$$receiver.kills), this.local$cl.name.rxv));
            var $receiver_0 = $receiver.append.insert.button;
            var $receiver_1 = $receiver_0.cls;
            get_btnOutlineSecondary($receiver_1);
            get_trashAlt(get_fa($receiver_1));
            this$editChecklistUi.click_9375ex$($receiver_0, editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$control, this.local$cl));
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
  function editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda(this$editChecklistUi_0, closure$control_0) {
    return function ($receiver_0, cl_0, continuation_0, suspended) {
      var instance = new Coroutine$editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda(this$editChecklistUi_0, closure$control_0, $receiver_0, cl_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function editChecklistUi$lambda$lambda$lambda$lambda$lambda(closure$control, this$editChecklistUi) {
    return function ($receiver) {
      this$editChecklistUi.list_u1uvxv$($receiver, this$editChecklistUi.mapLive_1mq1ue$(this$editChecklistUi.events_9k4h2$(closure$control.items), editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda(this$editChecklistUi, closure$control)));
      return Unit;
    };
  }
  function editChecklistUi$lambda$lambda(closure$item, this$editChecklistUi, closure$control) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      column($receiver_0);
      var $receiver_1 = get_insert($receiver).form;
      var closure$item_0 = closure$item;
      var this$editChecklistUi_0 = this$editChecklistUi;
      var closure$control_0 = closure$control;
      var $receiver_2 = $receiver_1.insert.formGroup;
      flexFixedSize($receiver_2.cls);
      remAssign($receiver_2.label, 'Title');
      required(this$editChecklistUi_0.bind_igb9j9$($receiver_2.input, closure$item_0.name.rxv));
      var $receiver_3 = $receiver_1.insert.formGroup;
      flexFixedSize($receiver_3.cls);
      remAssign($receiver_3.label, 'Items');
      var $receiver_4 = $receiver_3.insert.form;
      get_m1($receiver_4.cls);
      $receiver_4.column;
      var $receiver_5 = $receiver_4.insert.inputGroup;
      var $receiver_6 = $receiver_5.input;
      $receiver_6.required;
      bindValue($receiver_6, this$editChecklistUi_0, closure$control_0.adder);
      closure$control_0.performAdd = editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver_6, closure$control_0);
      $receiver_4.onsubmit_gbr1zf$(editChecklistUi$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$control_0, $receiver_6));
      var $receiver_7 = $receiver_5.append.insert.button;
      $receiver_7.submit;
      var $receiver_8 = $receiver_7.cls;
      get_btnOutlineSecondary($receiver_8);
      get_plus(get_fa($receiver_8));
      invoke(get_div($receiver_3.node), editChecklistUi$lambda$lambda$lambda$lambda$lambda(closure$control_0, this$editChecklistUi_0));
      return Unit;
    };
  }
  function editChecklistUi($receiver, item, control, topbarCustomizer) {
    var $receiver_0 = widget.factory.topbar;
    topbarCustomizer($receiver_0);
    var tmp$ = $receiver_0.node;
    var $receiver_1 = widget.factory.scrollPane;
    invoke($receiver_1.pane, editChecklistUi$lambda$lambda(item, $receiver, control));
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
    this.links_wf0o4i$_0 = this;
    this.home_solj6m$_0 = this.root_7o50g$(Links$home$lambda(this, deps));
    this.viewChecklist_1ps6p6$_0 = this.home.param_kchx42$(links.StringHasher).child_jgcrpc$(Links$viewChecklist$lambda(this)).provideDelegate_n5byny$(this, Links$viewChecklist_metadata);
    this.editViewChecklist_mi53r4$_0 = this.viewChecklist.child_b2q6wh$(Links$editViewChecklist$lambda).provideDelegate_n5byny$(this, Links$editViewChecklist_metadata);
    this.editChecklist_lqvtfp$_0 = this.base_sj7hg3$().param_kchx42$(links.StringHasher).child_jgcrpc$(Links$editChecklist$lambda(this)).provideDelegate_n5byny$(this, Links$editChecklist_metadata);
    this.newChecklist_want1l$_0 = this.base_sj7hg3$().child_b2q6wh$(Links$newChecklist$lambda).provideDelegate_n5byny$(this, Links$newChecklist_metadata);
  }
  Object.defineProperty(Links.prototype, 'links', {
    get: function () {
      return this.links_wf0o4i$_0;
    }
  });
  Object.defineProperty(Links.prototype, 'home', {
    get: function () {
      return this.home_solj6m$_0;
    }
  });
  var Links$viewChecklist_metadata = new PropertyMetadata('viewChecklist');
  Object.defineProperty(Links.prototype, 'viewChecklist', {
    get: function () {
      return this.viewChecklist_1ps6p6$_0.getValue_lrcp0p$(this, Links$viewChecklist_metadata);
    }
  });
  var Links$editViewChecklist_metadata = new PropertyMetadata('editViewChecklist');
  Object.defineProperty(Links.prototype, 'editViewChecklist', {
    get: function () {
      return this.editViewChecklist_mi53r4$_0.getValue_lrcp0p$(this, Links$editViewChecklist_metadata);
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
            this.local$closure$deps.hole.remAssign_looze4$($receiver);
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
  function Coroutine$Links$viewChecklist$lambda(this$Links_0, parent_0, id_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$parent = parent_0;
    this.local$id = id_0;
    this.local$lnk = lnk_0;
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
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.get_prxdpg$(this.local$parent.checklists.doc_61zpoe$(this.local$id), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return forwarding(new ViewChecklist(this.local$parent, this.local$lnk, this.result_0), this.local$parent);
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
  function Links$viewChecklist$lambda(this$Links_0) {
    return function (parent_0, id_0, lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$viewChecklist$lambda(this$Links_0, parent_0, id_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Links$editViewChecklist$lambda$lambda(closure$parent) {
    return function () {
      backOnRedisplay(closure$parent);
      return Unit;
    };
  }
  function Coroutine$Links$editViewChecklist$lambda(parent_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$parent = parent_0;
    this.local$lnk = lnk_0;
  }
  Coroutine$Links$editViewChecklist$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Links$editViewChecklist$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Links$editViewChecklist$lambda.prototype.constructor = Coroutine$Links$editViewChecklist$lambda;
  Coroutine$Links$editViewChecklist$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new EditChecklist(this.local$parent, this.local$lnk, toFsEditable(this.local$parent.chklist), Links$editViewChecklist$lambda$lambda(this.local$parent)), this.local$parent);
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
  function Links$editViewChecklist$lambda(parent_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$editViewChecklist$lambda(parent_0, lnk_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Links$editChecklist$lambda(this$Links_0, parent_0, id_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Links = this$Links_0;
    this.local$parent = parent_0;
    this.local$id = id_0;
    this.local$lnk = lnk_0;
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
            this.state_0 = 2;
            this.result_0 = this.local$this$Links.get_prxdpg$(this.local$parent.loggedIn.checklists.doc_61zpoe$(this.local$id), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return forwarding(new EditChecklist(this.local$parent, this.local$lnk, this.result_0), this.local$parent);
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
    return function (parent_0, id_0, lnk_0, continuation_0, suspended) {
      var instance = new Coroutine$Links$editChecklist$lambda(this$Links_0, parent_0, id_0, lnk_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Links$newChecklist$lambda(parent_0, lnk_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$parent = parent_0;
    this.local$lnk = lnk_0;
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
            return forwarding(new NewChecklist(this.local$parent, this.local$lnk), this.local$parent);
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
  function Links$newChecklist$lambda(parent_0, lnk_0, continuation_0, suspended) {
    var instance = new Coroutine$Links$newChecklist$lambda(parent_0, lnk_0, continuation_0);
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
    this.linkage_fkd343$_0 = linkage;
    this.$delegate_b157uu$_0 = links;
    this.loggedIn_c0bqi3$_0 = this;
    this.checklists = get_checklists(get_private(checklist.checklistLib.app).doc_61zpoe$(user.uid));
    this.rawView_r4wkkr$_0 = ui_0(this);
  }
  Object.defineProperty(LoggedIn.prototype, 'linkage', {
    get: function () {
      return this.linkage_fkd343$_0;
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
  function Coroutine$LoggedIn$newChecklist$lambda(this$LoggedIn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
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
            this.result_0 = this.local$this$LoggedIn.fwd_nnhkmr$(this.local$this$LoggedIn.links.newChecklist, void 0, this);
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
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$newChecklist$lambda(this$LoggedIn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.newChecklist = function () {
    advance(this, LoggedIn$newChecklist$lambda(this));
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
            this.state_0 = 2;
            this.result_0 = this.local$this$LoggedIn.fwd_e1fa5e$(this.local$this$LoggedIn.links.viewChecklist, get_idOrFail(this.local$closure$cl), void 0, this);
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
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoggedIn$viewChecklist$lambda(this$LoggedIn_0, closure$cl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  LoggedIn.prototype.viewChecklist_umagvj$ = function (cl) {
    advance(this, LoggedIn$viewChecklist$lambda(this, cl));
  };
  Object.defineProperty(LoggedIn.prototype, 'rawView', {
    get: function () {
      return this.rawView_r4wkkr$_0;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'db', {
    get: function () {
      return this.$delegate_b157uu$_0.db;
    }
  });
  Object.defineProperty(LoggedIn.prototype, 'links', {
    get: function () {
      return this.$delegate_b157uu$_0.links;
    }
  });
  LoggedIn.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_b157uu$_0.get_randomDoc_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_b157uu$_0.get_ref_sj9vaa$($receiver);
  };
  LoggedIn.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_b157uu$_0.get_ref_aqty80$($receiver);
  };
  LoggedIn.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_b157uu$_0.delete_73z9b6$($receiver);
  };
  LoggedIn.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_b157uu$_0.delete_ihdkly$($receiver);
  };
  LoggedIn.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_b157uu$_0.get_prxdpg$($receiver, continuation);
  };
  LoggedIn.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_b157uu$_0.query_wzkv1r$$default($receiver, query);
  };
  LoggedIn.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_b157uu$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  LoggedIn.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_b157uu$_0.save_73z9b6$($receiver);
  };
  LoggedIn.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_b157uu$_0.save_biv66q$($receiver);
  };
  LoggedIn.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_b157uu$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda(closure$cl) {
    return function () {
      return closure$cl.invoke().name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$cl, this$ui) {
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
            this.local$$receiver.remAssign_7fncnf$($receiver.middle, ui$lambda$lambda$lambda$lambda$lambda$lambda(this.local$cl));
            this$ui.click_3zaxtq$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda_0(this.local$cl, this$ui));
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
  function ui$lambda$lambda(this$ui) {
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
    invoke($receiver_3.pane, ui$lambda$lambda($receiver));
    return new TopAndContent(tmp$, $receiver_3.node);
  }
  function NewChecklistPath() {
  }
  NewChecklistPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'NewChecklistPath',
    interfaces: [LoggedInPath]
  };
  function NewChecklist(parent, linkage) {
    CsKillsView.call(this, parent);
    this.linkage = linkage;
    this.$delegate_qnotay$_0 = parent;
    this.edit_dkydrc$_0 = this;
    var $receiver = this.randomEditable_mx4g9l$(this.loggedIn.checklists);
    $receiver.doc.name.remAssign_11rc$('<unknown>');
    this.item = $receiver;
    this.creating_ycjpeh$_0 = this.rxCreating_8ctbwl$(this.item, NewChecklist$creating$lambda(this, parent));
    this.control = new EditChecklistControl(this.creating.current, this.bindings);
    this.rawView_dk1pv9$_0 = ui_1(this);
  }
  Object.defineProperty(NewChecklist.prototype, 'edit', {
    get: function () {
      return this.edit_dkydrc$_0;
    }
  });
  Object.defineProperty(NewChecklist.prototype, 'creating', {
    get: function () {
      return this.creating_ycjpeh$_0;
    }
  });
  Object.defineProperty(NewChecklist.prototype, 'rawView', {
    get: function () {
      return this.rawView_dk1pv9$_0;
    }
  });
  Object.defineProperty(NewChecklist.prototype, 'db', {
    get: function () {
      return this.$delegate_qnotay$_0.db;
    }
  });
  Object.defineProperty(NewChecklist.prototype, 'links', {
    get: function () {
      return this.$delegate_qnotay$_0.links;
    }
  });
  Object.defineProperty(NewChecklist.prototype, 'loggedIn', {
    get: function () {
      return this.$delegate_qnotay$_0.loggedIn;
    }
  });
  NewChecklist.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_qnotay$_0.get_randomDoc_sj9vaa$($receiver);
  };
  NewChecklist.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_qnotay$_0.get_ref_sj9vaa$($receiver);
  };
  NewChecklist.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_qnotay$_0.get_ref_aqty80$($receiver);
  };
  NewChecklist.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_qnotay$_0.delete_73z9b6$($receiver);
  };
  NewChecklist.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_qnotay$_0.delete_ihdkly$($receiver);
  };
  NewChecklist.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_qnotay$_0.get_prxdpg$($receiver, continuation);
  };
  NewChecklist.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_qnotay$_0.query_wzkv1r$$default($receiver, query);
  };
  NewChecklist.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_qnotay$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  NewChecklist.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_qnotay$_0.save_73z9b6$($receiver);
  };
  NewChecklist.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_qnotay$_0.save_biv66q$($receiver);
  };
  NewChecklist.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_qnotay$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(NewChecklist.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  function NewChecklist$creating$lambda$lambda(this$NewChecklist, closure$tr) {
    return function (current) {
      this$NewChecklist.control.preSave();
      closure$tr.persist(current);
      return Unit;
    };
  }
  function Coroutine$NewChecklist$creating$lambda$lambda$lambda$lambda(this$_0, this$NewChecklist_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$this$NewChecklist = this$NewChecklist_0;
  }
  Coroutine$NewChecklist$creating$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NewChecklist$creating$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NewChecklist$creating$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$NewChecklist$creating$lambda$lambda$lambda$lambda;
  Coroutine$NewChecklist$creating$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.fwd_e1fa5e$(this.local$this$.links.editChecklist, this.local$this$NewChecklist.item.id.id, true, this);
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
  function NewChecklist$creating$lambda$lambda$lambda$lambda(this$_0, this$NewChecklist_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NewChecklist$creating$lambda$lambda$lambda$lambda(this$_0, this$NewChecklist_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function NewChecklist$creating$lambda$lambda_0(closure$parent, this$NewChecklist) {
    return function () {
      var receiver = closure$parent;
      advance(receiver, NewChecklist$creating$lambda$lambda$lambda$lambda(receiver, this$NewChecklist));
      return Unit;
    };
  }
  function NewChecklist$creating$lambda(this$NewChecklist, closure$parent) {
    return function (tr) {
      return tr.copy_ucykgt$(NewChecklist$creating$lambda$lambda(this$NewChecklist, tr), NewChecklist$creating$lambda$lambda_0(closure$parent, this$NewChecklist));
    };
  }
  NewChecklist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewChecklist',
    interfaces: [BackCreateKillsUixApi, FBBackApi, HasBack, NewChecklistPath, LoggedInPath, EditChecklistLike, CsKillsView]
  };
  function ui$lambda_0(this$ui) {
    return function ($receiver) {
      this$ui.get_backPersistDiscard_e1rmy3$($receiver.slots.left);
      remAssign($receiver.title, 'New Checklist');
      this$ui.get_persistButton_tdhe4g$($receiver.right);
      return Unit;
    };
  }
  function ui_1($receiver) {
    return editChecklistUi($receiver, $receiver.creating.current, $receiver.control, ui$lambda_0($receiver));
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
  function ui$lambda$lambda_0(this$ui) {
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
  function ui$lambda$lambda$lambda$lambda$lambda$lambda_1(this$ui) {
    return function () {
      this$ui.deleteChecklist();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver, i) {
    return new ItemOrder(i.checked.invoke(), i.name.invoke());
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i) {
    return function () {
      return closure$i.name.invoke();
    };
  }
  function ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i, this$) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      this$.remAssign_7fncnf$($receiver, ui$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$i));
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
  function ui$lambda$lambda_1(this$ui) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      this$ui.remAssign_wgabca$(get_widget($receiver), ui$lambda$lambda$lambda_0(this$ui));
      return Unit;
    };
  }
  function ui_2($receiver) {
    var $receiver_0 = widget.factory.topbar;
    $receiver.get_backButton_tdhe4g$($receiver_0.left);
    $receiver.remAssign_7fncnf$($receiver_0.title, ui$lambda$lambda_0($receiver));
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
    $receiver.click_512jbc$($receiver_7, ui$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver));
    var tmp$ = $receiver_0.node;
    var $receiver_8 = widget.factory.scrollPane;
    invoke($receiver_8.pane, ui$lambda$lambda_1($receiver));
    return new TopAndContent(tmp$, $receiver_8.node);
  }
  function ViewPath() {
  }
  ViewPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewPath',
    interfaces: [LoggedInPath]
  };
  function ViewChecklist(from, linkage, editable) {
    ForwardBase.call(this, from);
    this.linkage_hbngf1$_0 = linkage;
    this.editable = editable;
    this.$delegate_cqpqsg$_0 = from;
    this.viewChecklist_u2r8nt$_0 = this;
    this.chklist = this.get_live_73z9b6$(toFsDoc_0(this.editable));
    this.rawView_sw6xvp$_0 = ui_2(this);
  }
  Object.defineProperty(ViewChecklist.prototype, 'linkage', {
    get: function () {
      return this.linkage_hbngf1$_0;
    }
  });
  Object.defineProperty(ViewChecklist.prototype, 'viewChecklist', {
    get: function () {
      return this.viewChecklist_u2r8nt$_0;
    }
  });
  ViewChecklist.prototype.get_fsDoc_uyyhtd$ = function ($receiver) {
    return toFsDoc($receiver, toFsId(this.editable.id, true));
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
    this.back();
  };
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
            this.result_0 = this.local$this$ViewChecklist.fwd_nnhkmr$(this.local$this$ViewChecklist.links.editViewChecklist, void 0, this);
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
    advance(this, ViewChecklist$editChecklist$lambda(this));
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
  ViewChecklist.prototype.get_randomDoc_sj9vaa$ = function ($receiver) {
    return this.$delegate_cqpqsg$_0.get_randomDoc_sj9vaa$($receiver);
  };
  ViewChecklist.prototype.get_ref_sj9vaa$ = function ($receiver) {
    return this.$delegate_cqpqsg$_0.get_ref_sj9vaa$($receiver);
  };
  ViewChecklist.prototype.get_ref_aqty80$ = function ($receiver) {
    return this.$delegate_cqpqsg$_0.get_ref_aqty80$($receiver);
  };
  ViewChecklist.prototype.delete_73z9b6$ = function ($receiver) {
    return this.$delegate_cqpqsg$_0.delete_73z9b6$($receiver);
  };
  ViewChecklist.prototype.delete_ihdkly$ = function ($receiver) {
    return this.$delegate_cqpqsg$_0.delete_ihdkly$($receiver);
  };
  ViewChecklist.prototype.get_prxdpg$ = function ($receiver, continuation) {
    return this.$delegate_cqpqsg$_0.get_prxdpg$($receiver, continuation);
  };
  ViewChecklist.prototype.query_wzkv1r$$default = function ($receiver, query) {
    return this.$delegate_cqpqsg$_0.query_wzkv1r$$default($receiver, query);
  };
  ViewChecklist.prototype.randomEditable_mx4g9l$$default = function ($receiver, d) {
    return this.$delegate_cqpqsg$_0.randomEditable_mx4g9l$$default($receiver, d);
  };
  ViewChecklist.prototype.save_73z9b6$ = function ($receiver) {
    return this.$delegate_cqpqsg$_0.save_73z9b6$($receiver);
  };
  ViewChecklist.prototype.save_biv66q$ = function ($receiver) {
    return this.$delegate_cqpqsg$_0.save_biv66q$($receiver);
  };
  ViewChecklist.prototype.toRandomFsDoc_xc7wmg$ = function ($receiver, cw) {
    return this.$delegate_cqpqsg$_0.toRandomFsDoc_xc7wmg$($receiver, cw);
  };
  Object.defineProperty(ViewChecklist.prototype, 'back', {
    get: function () {
      return this.linkage.back;
    }
  });
  ViewChecklist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewChecklist',
    interfaces: [FBBackApi, HasBack, ViewPath, LoggedInTC, LoggedInPath, ForwardBase]
  };
  var package$checklist = _.checklist || (_.checklist = {});
  package$checklist.main = main;
  var package$editchecklist = package$checklist.editchecklist || (package$checklist.editchecklist = {});
  package$editchecklist.EditChecklistPath = EditChecklistPath;
  package$editchecklist.EditChecklistControl = EditChecklistControl;
  package$editchecklist.EditChecklistLike = EditChecklistLike;
  package$editchecklist.EditChecklist = EditChecklist;
  package$editchecklist.ui_kbdtil$ = ui;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$editchecklist.editChecklistUi_esozjj$ = editChecklistUi;
  package$checklist.LinksPath = LinksPath;
  package$checklist.Links = Links;
  var package$loggedin = package$checklist.loggedin || (package$checklist.loggedin = {});
  package$loggedin.LoggedInTC = LoggedInTC;
  package$loggedin.LoggedInPath = LoggedInPath;
  package$loggedin.LoggedIn = LoggedIn;
  package$loggedin.ui_d62iaf$ = ui_0;
  var package$newchecklist = package$checklist.newchecklist || (package$checklist.newchecklist = {});
  package$newchecklist.NewChecklistPath = NewChecklistPath;
  package$newchecklist.NewChecklist = NewChecklist;
  package$newchecklist.ui_pyzfbd$ = ui_1;
  var package$view = package$checklist.view || (package$checklist.view = {});
  package$view.ItemOrder = ItemOrder;
  package$view.ui_v6i9e7$ = ui_2;
  package$view.ViewPath = ViewPath;
  package$view.ViewChecklist = ViewChecklist;
  LinksPath.prototype.get_randomDoc_sj9vaa$ = DbApi.prototype.get_randomDoc_sj9vaa$;
  LinksPath.prototype.get_ref_sj9vaa$ = DbApi.prototype.get_ref_sj9vaa$;
  LinksPath.prototype.get_ref_aqty80$ = DbApi.prototype.get_ref_aqty80$;
  LinksPath.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  LinksPath.prototype.delete_ihdkly$ = DbApi.prototype.delete_ihdkly$;
  LinksPath.prototype.get_prxdpg$ = DbApi.prototype.get_prxdpg$;
  LinksPath.prototype.query_wzkv1r$$default = DbApi.prototype.query_wzkv1r$$default;
  LinksPath.prototype.randomEditable_mx4g9l$$default = DbApi.prototype.randomEditable_mx4g9l$$default;
  LinksPath.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  LinksPath.prototype.save_biv66q$ = DbApi.prototype.save_biv66q$;
  LinksPath.prototype.toRandomFsDoc_xc7wmg$ = DbApi.prototype.toRandomFsDoc_xc7wmg$;
  LinksPath.prototype.query_wzkv1r$ = DbApi.prototype.query_wzkv1r$;
  LinksPath.prototype.randomEditable_mx4g9l$ = DbApi.prototype.randomEditable_mx4g9l$;
  LoggedInPath.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInPath.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  LoggedInPath.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  LoggedInPath.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  LoggedInPath.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  LoggedInPath.prototype.get_prxdpg$ = LinksPath.prototype.get_prxdpg$;
  LoggedInPath.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  LoggedInPath.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  LoggedInPath.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  LoggedInPath.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  LoggedInPath.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInPath.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  LoggedInPath.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  EditChecklistPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  EditChecklistPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  EditChecklistPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  EditChecklistPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  EditChecklistPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  EditChecklistPath.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  EditChecklistPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  EditChecklistPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  EditChecklistPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  EditChecklistPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  EditChecklistPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  EditChecklistPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  EditChecklistPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  EditChecklistLike.prototype.get_oldKilled_vsdo34$ = BindKillsApi.prototype.get_oldKilled_vsdo34$;
  EditChecklistLike.prototype.get_oldKilledOpt_vsdo34$ = BindKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  EditChecklistLike.prototype.get_routing_lqv1tx$ = BindKillsApi.prototype.get_routing_lqv1tx$;
  EditChecklistLike.prototype.rx_y6x17j$ = BindKillsApi.prototype.rx_y6x17j$;
  EditChecklistLike.prototype.rx_46ic4w$ = BindKillsApi.prototype.rx_46ic4w$;
  EditChecklistLike.prototype.rx_wgabca$ = BindKillsApi.prototype.rx_wgabca$;
  EditChecklistLike.prototype.rx_djv61p$ = BindKillsApi.prototype.rx_djv61p$;
  EditChecklistLike.prototype.addDirty_3529di$ = BindKillsApi.prototype.addDirty_3529di$;
  EditChecklistLike.prototype.bind_8y93tj$ = BindKillsApi.prototype.bind_8y93tj$;
  EditChecklistLike.prototype.bind_4dd4yj$ = BindKillsApi.prototype.bind_4dd4yj$;
  EditChecklistLike.prototype.bind_igb9j9$ = BindKillsApi.prototype.bind_igb9j9$;
  EditChecklistLike.prototype.bind_zfaq6f$ = BindKillsApi.prototype.bind_zfaq6f$;
  EditChecklistLike.prototype.bindValue_xy1r9h$ = BindKillsApi.prototype.bindValue_xy1r9h$;
  EditChecklistLike.prototype.containsRx_1w65cx$ = BindKillsApi.prototype.containsRx_1w65cx$;
  EditChecklistLike.prototype.enabled_hlnvpg$ = BindKillsApi.prototype.enabled_hlnvpg$;
  EditChecklistLike.prototype.feedTo_9o5f67$ = BindKillsApi.prototype.feedTo_9o5f67$;
  EditChecklistLike.prototype.filtered_tnde95$ = BindKillsApi.prototype.filtered_tnde95$;
  EditChecklistLike.prototype.forEach_xwzbbo$ = BindKillsApi.prototype.forEach_xwzbbo$;
  EditChecklistLike.prototype.forEach_35q7bt$ = BindKillsApi.prototype.forEach_35q7bt$;
  EditChecklistLike.prototype.forEachLater_xwzbbo$ = BindKillsApi.prototype.forEachLater_xwzbbo$;
  EditChecklistLike.prototype.incremented_eoy9qo$ = BindKillsApi.prototype.incremented_eoy9qo$;
  EditChecklistLike.prototype.keepScreenAwake_ipfk82$ = BindKillsApi.prototype.keepScreenAwake_ipfk82$;
  EditChecklistLike.prototype.linked_n1nom7$ = BindKillsApi.prototype.linked_n1nom7$;
  EditChecklistLike.prototype.listen_ubid8w$ = BindKillsApi.prototype.listen_ubid8w$;
  EditChecklistLike.prototype.map_jtxi0h$ = BindKillsApi.prototype.map_jtxi0h$;
  EditChecklistLike.prototype.mapLive_1mq1ue$ = BindKillsApi.prototype.mapLive_1mq1ue$;
  EditChecklistLike.prototype.on_2stdkb$ = BindKillsApi.prototype.on_2stdkb$;
  EditChecklistLike.prototype.on_hgi4ad$ = BindKillsApi.prototype.on_hgi4ad$;
  EditChecklistLike.prototype.onChange_oeam7t$ = BindKillsApi.prototype.onChange_oeam7t$;
  EditChecklistLike.prototype.onChange_rlu5c6$ = BindKillsApi.prototype.onChange_rlu5c6$;
  EditChecklistLike.prototype.onClick_pofl4w$ = BindKillsApi.prototype.onClick_pofl4w$;
  EditChecklistLike.prototype.onInput_clfw57$ = BindKillsApi.prototype.onInput_clfw57$;
  EditChecklistLike.prototype.plusAssign_ubid8w$ = BindKillsApi.prototype.plusAssign_ubid8w$;
  EditChecklistLike.prototype.process_7xi3v7$ = BindKillsApi.prototype.process_7xi3v7$;
  EditChecklistLike.prototype.process_y3juat$ = CsKillsApi.prototype.process_y3juat$;
  EditChecklistLike.prototype.remAssign_wgabca$ = BindKillsApi.prototype.remAssign_wgabca$;
  EditChecklistLike.prototype.remAssign_djv61p$ = BindKillsApi.prototype.remAssign_djv61p$;
  EditChecklistLike.prototype.remAssign_7fncnf$ = BindKillsApi.prototype.remAssign_7fncnf$;
  EditChecklistLike.prototype.runView_fpu3uh$ = BindKillsApi.prototype.runView_fpu3uh$;
  EditChecklistLike.prototype.rxClass_9npl0m$ = BindKillsApi.prototype.rxClass_9npl0m$;
  EditChecklistLike.prototype.rxClass_62ldac$ = BindKillsApi.prototype.rxClass_62ldac$;
  EditChecklistLike.prototype.rxClass_c5yvvx$ = BindKillsApi.prototype.rxClass_c5yvvx$;
  EditChecklistLike.prototype.rxClass_6sflyw$ = BindKillsApi.prototype.rxClass_6sflyw$;
  EditChecklistLike.prototype.toChannelLater_z5dyp2$ = BindKillsApi.prototype.toChannelLater_z5dyp2$;
  EditChecklistLike.prototype.toRxSet_jr4bl4$ = BindKillsApi.prototype.toRxSet_jr4bl4$;
  EditChecklistLike.prototype.visibility_12lt6u$ = BindKillsApi.prototype.visibility_12lt6u$;
  EditChecklistLike.prototype.visible_od9jl4$ = BindKillsApi.prototype.visible_od9jl4$;
  EditChecklistLike.prototype.list_qlxt6c$ = CsApiCommonui.prototype.list_qlxt6c$;
  EditChecklistLike.prototype.list_u1uvxv$ = CsApiCommonui.prototype.list_u1uvxv$;
  EditChecklistLike.prototype.toRx_on0lyu$ = CsApiCommonui.prototype.toRx_on0lyu$;
  EditChecklistLike.prototype.get_ids_qko62t$ = CsKillsApi.prototype.get_ids_qko62t$;
  EditChecklistLike.prototype.events_9k4h2$ = CsKillsApi.prototype.events_9k4h2$;
  EditChecklistLike.prototype.filter_hu0si9$ = CsKillsApi.prototype.filter_hu0si9$;
  EditChecklistLike.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  EditChecklistLike.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  EditChecklistLike.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  EditChecklistLike.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  EditChecklistLike.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  EditChecklistLike.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  EditChecklistLike.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  EditChecklistLike.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  EditChecklist.prototype.bind_8y93tj$ = EditChecklistLike.prototype.bind_8y93tj$;
  EditChecklist.prototype.bind_4dd4yj$ = EditChecklistLike.prototype.bind_4dd4yj$;
  EditChecklist.prototype.bind_igb9j9$ = EditChecklistLike.prototype.bind_igb9j9$;
  Object.defineProperty(EditChecklist.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackEditKillsUixApi.prototype, 'bindings'));
  EditChecklist.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  EditChecklist.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  EditChecklist.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  EditChecklist.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  EditChecklist.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  EditChecklist.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  EditChecklist.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  EditChecklist.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  EditChecklist.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  EditChecklist.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  EditChecklist.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  EditChecklist.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  EditChecklist.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  EditChecklist.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  EditChecklist.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  EditChecklist.prototype.get_backSaveDiscard_e1rmy3$ = BackEditKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$;
  EditChecklist.prototype.get_saveButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditChecklist.prototype.get_saveDeleteButton_tdhe4g$ = BackEditKillsUixApi.prototype.get_saveDeleteButton_tdhe4g$;
  EditChecklist.prototype.query_wzkv1r$ = EditChecklistPath.prototype.query_wzkv1r$;
  EditChecklist.prototype.randomEditable_mx4g9l$ = EditChecklistPath.prototype.randomEditable_mx4g9l$;
  EditChecklist.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  EditChecklist.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  EditChecklist.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  EditChecklist.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  EditChecklist.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  Links.prototype.get_randomDoc_sj9vaa$ = LinksPath.prototype.get_randomDoc_sj9vaa$;
  Links.prototype.get_ref_sj9vaa$ = LinksPath.prototype.get_ref_sj9vaa$;
  Links.prototype.get_ref_aqty80$ = LinksPath.prototype.get_ref_aqty80$;
  Links.prototype.delete_73z9b6$ = LinksPath.prototype.delete_73z9b6$;
  Links.prototype.delete_ihdkly$ = LinksPath.prototype.delete_ihdkly$;
  Links.prototype.get_prxdpg$ = LinksPath.prototype.get_prxdpg$;
  Links.prototype.query_wzkv1r$$default = LinksPath.prototype.query_wzkv1r$$default;
  Links.prototype.randomEditable_mx4g9l$$default = LinksPath.prototype.randomEditable_mx4g9l$$default;
  Links.prototype.save_73z9b6$ = LinksPath.prototype.save_73z9b6$;
  Links.prototype.save_biv66q$ = LinksPath.prototype.save_biv66q$;
  Links.prototype.toRandomFsDoc_xc7wmg$ = LinksPath.prototype.toRandomFsDoc_xc7wmg$;
  Links.prototype.query_wzkv1r$ = LinksPath.prototype.query_wzkv1r$;
  Links.prototype.randomEditable_mx4g9l$ = LinksPath.prototype.randomEditable_mx4g9l$;
  LoggedInTC.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  LoggedInTC.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  LoggedInTC.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  LoggedInTC.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  LoggedInTC.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  LoggedInTC.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  LoggedInTC.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  LoggedInTC.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  LoggedInTC.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  LoggedInTC.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  LoggedInTC.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  LoggedInTC.prototype.fwd_e1fa5e$$default = LinkApi.prototype.fwd_e1fa5e$$default;
  LoggedInTC.prototype.fwd_nnhkmr$$default = LinkApi.prototype.fwd_nnhkmr$$default;
  LoggedInTC.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  LoggedInTC.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  LoggedInTC.prototype.fwd_e1fa5e$ = LinkApi.prototype.fwd_e1fa5e$;
  LoggedInTC.prototype.fwd_nnhkmr$ = LinkApi.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  LoggedIn.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  LoggedIn.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  LoggedIn.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  LoggedIn.prototype.rxCreating_8ctbwl$$default = FBApi.prototype.rxCreating_8ctbwl$$default;
  LoggedIn.prototype.rxEditing_6l8l9j$$default = FBApi.prototype.rxEditing_6l8l9j$$default;
  LoggedIn.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  LoggedIn.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  LoggedIn.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  LoggedIn.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  LoggedIn.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  LoggedIn.prototype.onSnapshotNext_po64up$ = FBApi.prototype.onSnapshotNext_po64up$;
  LoggedIn.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  LoggedIn.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  LoggedIn.prototype.query_wzkv1r$ = LoggedInTC.prototype.query_wzkv1r$;
  LoggedIn.prototype.randomEditable_mx4g9l$ = LoggedInTC.prototype.randomEditable_mx4g9l$;
  LoggedIn.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  LoggedIn.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  LoggedIn.prototype.rxCreating_8ctbwl$ = FBApi.prototype.rxCreating_8ctbwl$;
  LoggedIn.prototype.rxEditing_6l8l9j$ = FBApi.prototype.rxEditing_6l8l9j$;
  LoggedIn.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  LoggedIn.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  LoggedIn.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  NewChecklistPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  NewChecklistPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  NewChecklistPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  NewChecklistPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  NewChecklistPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  NewChecklistPath.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  NewChecklistPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  NewChecklistPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  NewChecklistPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  NewChecklistPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  NewChecklistPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  NewChecklistPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  NewChecklistPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  NewChecklist.prototype.bind_8y93tj$ = EditChecklistLike.prototype.bind_8y93tj$;
  NewChecklist.prototype.bind_4dd4yj$ = EditChecklistLike.prototype.bind_4dd4yj$;
  NewChecklist.prototype.bind_igb9j9$ = EditChecklistLike.prototype.bind_igb9j9$;
  Object.defineProperty(NewChecklist.prototype, 'bindings', Object.getOwnPropertyDescriptor(BackCreateKillsUixApi.prototype, 'bindings'));
  NewChecklist.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  NewChecklist.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  NewChecklist.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  NewChecklist.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  NewChecklist.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  NewChecklist.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  NewChecklist.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  NewChecklist.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  NewChecklist.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  NewChecklist.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  NewChecklist.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  NewChecklist.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  NewChecklist.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  NewChecklist.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  NewChecklist.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  NewChecklist.prototype.get_backPersistDiscard_e1rmy3$ = BackCreateKillsUixApi.prototype.get_backPersistDiscard_e1rmy3$;
  NewChecklist.prototype.get_persistButton_tdhe4g$ = BackCreateKillsUixApi.prototype.get_persistButton_tdhe4g$;
  NewChecklist.prototype.query_wzkv1r$ = NewChecklistPath.prototype.query_wzkv1r$;
  NewChecklist.prototype.randomEditable_mx4g9l$ = NewChecklistPath.prototype.randomEditable_mx4g9l$;
  NewChecklist.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  NewChecklist.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  NewChecklist.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  NewChecklist.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  NewChecklist.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  ViewPath.prototype.get_randomDoc_sj9vaa$ = LoggedInPath.prototype.get_randomDoc_sj9vaa$;
  ViewPath.prototype.get_ref_sj9vaa$ = LoggedInPath.prototype.get_ref_sj9vaa$;
  ViewPath.prototype.get_ref_aqty80$ = LoggedInPath.prototype.get_ref_aqty80$;
  ViewPath.prototype.delete_73z9b6$ = LoggedInPath.prototype.delete_73z9b6$;
  ViewPath.prototype.delete_ihdkly$ = LoggedInPath.prototype.delete_ihdkly$;
  ViewPath.prototype.get_prxdpg$ = LoggedInPath.prototype.get_prxdpg$;
  ViewPath.prototype.query_wzkv1r$$default = LoggedInPath.prototype.query_wzkv1r$$default;
  ViewPath.prototype.randomEditable_mx4g9l$$default = LoggedInPath.prototype.randomEditable_mx4g9l$$default;
  ViewPath.prototype.save_73z9b6$ = LoggedInPath.prototype.save_73z9b6$;
  ViewPath.prototype.save_biv66q$ = LoggedInPath.prototype.save_biv66q$;
  ViewPath.prototype.toRandomFsDoc_xc7wmg$ = LoggedInPath.prototype.toRandomFsDoc_xc7wmg$;
  ViewPath.prototype.query_wzkv1r$ = LoggedInPath.prototype.query_wzkv1r$;
  ViewPath.prototype.randomEditable_mx4g9l$ = LoggedInPath.prototype.randomEditable_mx4g9l$;
  ViewChecklist.prototype.fwd_e1fa5e$$default = LoggedInTC.prototype.fwd_e1fa5e$$default;
  ViewChecklist.prototype.fwd_nnhkmr$$default = LoggedInTC.prototype.fwd_nnhkmr$$default;
  ViewChecklist.prototype.get_backButton_tdhe4g$ = FBBackApi.prototype.get_backButton_tdhe4g$;
  ViewChecklist.prototype.get_backButton_ihoiae$ = FBBackApi.prototype.get_backButton_ihoiae$;
  ViewChecklist.prototype.get_live_73z9b6$ = FBBackApi.prototype.get_live_73z9b6$;
  ViewChecklist.prototype.get_snapshots_79y88y$ = FBBackApi.prototype.get_snapshots_79y88y$;
  ViewChecklist.prototype.backOnDelete_287e2$ = FBBackApi.prototype.backOnDelete_287e2$;
  ViewChecklist.prototype.rxCreating_8ctbwl$$default = FBBackApi.prototype.rxCreating_8ctbwl$$default;
  ViewChecklist.prototype.rxEditing_6l8l9j$$default = FBBackApi.prototype.rxEditing_6l8l9j$$default;
  ViewChecklist.prototype.docs_prxdpg$ = FBBackApi.prototype.docs_prxdpg$;
  ViewChecklist.prototype.documentChanges_z2kgpb$ = FBBackApi.prototype.documentChanges_z2kgpb$;
  ViewChecklist.prototype.fsCache_sj6zb3$$default = FBBackApi.prototype.fsCache_sj6zb3$$default;
  ViewChecklist.prototype.fsCache_aujjp8$ = FBBackApi.prototype.fsCache_aujjp8$;
  ViewChecklist.prototype.listEvents_pujjsl$$default = FBBackApi.prototype.listEvents_pujjsl$$default;
  ViewChecklist.prototype.onSnapshotNext_po64up$ = FBBackApi.prototype.onSnapshotNext_po64up$;
  ViewChecklist.prototype.toList_pujjsl$$default = FBBackApi.prototype.toList_pujjsl$$default;
  ViewChecklist.prototype.toSnapshotEvents_ecp0ut$ = FBBackApi.prototype.toSnapshotEvents_ecp0ut$;
  ViewChecklist.prototype.query_wzkv1r$ = LoggedInTC.prototype.query_wzkv1r$;
  ViewChecklist.prototype.randomEditable_mx4g9l$ = LoggedInTC.prototype.randomEditable_mx4g9l$;
  ViewChecklist.prototype.fwd_e1fa5e$ = LoggedInTC.prototype.fwd_e1fa5e$;
  ViewChecklist.prototype.fwd_nnhkmr$ = LoggedInTC.prototype.fwd_nnhkmr$;
  ViewChecklist.prototype.rxCreating_8ctbwl$ = FBBackApi.prototype.rxCreating_8ctbwl$;
  ViewChecklist.prototype.rxEditing_6l8l9j$ = FBBackApi.prototype.rxEditing_6l8l9j$;
  ViewChecklist.prototype.fsCache_sj6zb3$ = FBBackApi.prototype.fsCache_sj6zb3$;
  ViewChecklist.prototype.listEvents_pujjsl$ = FBBackApi.prototype.listEvents_pujjsl$;
  ViewChecklist.prototype.toList_pujjsl$ = FBBackApi.prototype.toList_pujjsl$;
  main();
  Kotlin.defineModule('appsimake-checklist', _);
  return _;
}(typeof this['appsimake-checklist'] === 'undefined' ? {} : this['appsimake-checklist'], kotlin, this['appsimake-commonfb'], this['appsimake-checklistlib'], this['appsimake-commonshr'], this['appsimake-commonui'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-fontawesome'], this['appsimake-firebase'], this['kotlinx-coroutines-core']);

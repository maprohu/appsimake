if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-commonfb'.");
}
this['appsimake-commonfb'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_domx, $module$appsimake_commonui, $module$appsimake_firebaseshr, $module$appsimake_firebase, $module$kotlinx_coroutines_core, $module$appsimake_bootstrap, $module$appsimake_fontawesome, $module$appsimake_common) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Var = $module$appsimake_commonshr.rx.Var;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_klfg04$;
  var Unit = Kotlin.kotlin.Unit;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_bvfv80$;
  var faTab = $module$appsimake_commonui.commonui.faTab_mg509s$;
  var RootPanel = $module$appsimake_commonui.commonui.RootPanel;
  var IdState$Persisted = $module$appsimake_firebaseshr.firebaseshr.IdState.Persisted;
  var docRef = $module$appsimake_firebase.firebase.firestore.docRef_bi4pki$;
  var addedTo = $module$appsimake_commonshr.killable.addedTo_60he60$;
  var setOptionsMerge = $module$appsimake_firebase.firebase.firestore.setOptionsMerge;
  var collectionRef = $module$appsimake_firebase.firebase.firestore.collectionRef_nabv8k$;
  var listen = $module$appsimake_firebase.firebase.firestore.listen_p3kk2v$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_btnGroup = $module$appsimake_bootstrap.bootstrap.get_btnGroup_kre7dp$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_chevronLeft = $module$appsimake_fontawesome.fontawesome.get_chevronLeft_xml72e$;
  var get_btnSecondary = $module$appsimake_bootstrap.bootstrap.get_btnSecondary_kre7dp$;
  var rxDisplayed = $module$appsimake_domx.domx.rxDisplayed_ux9tev$;
  var faButton = $module$appsimake_commonui.commonui.faButton_jous2b$;
  var get_btnSuccess = $module$appsimake_bootstrap.bootstrap.get_btnSuccess_kre7dp$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_save = $module$appsimake_fontawesome.fontawesome.get_save_xml72e$;
  var get_ml1 = $module$appsimake_bootstrap.bootstrap.get_ml1_kre7dp$;
  var rxDisplayed_0 = $module$appsimake_domx.domx.rxDisplayed_29v9re$;
  var get_backspace = $module$appsimake_fontawesome.fontawesome.get_backspace_xml72e$;
  var get_btnDanger = $module$appsimake_bootstrap.bootstrap.get_btnDanger_kre7dp$;
  var get_dropdownSplit = $module$appsimake_bootstrap.bootstrap.get_dropdownSplit_asww5s$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_dropdownMenu = $module$appsimake_bootstrap.bootstrap.get_dropdownMenu_kre7dp$;
  var get_textDanger = $module$appsimake_bootstrap.bootstrap.get_textDanger_kre7dp$;
  var dropdownItemAnchor = $module$appsimake_bootstrap.bootstrap.dropdownItemAnchor_fahyz6$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_flexRow = $module$appsimake_bootstrap.bootstrap.get_flexRow_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_btnPrimary = $module$appsimake_bootstrap.bootstrap.get_btnPrimary_kre7dp$;
  var rxEnabled = $module$appsimake_domx.domx.rxEnabled_v5m6ih$;
  var Cls = $module$appsimake_domx.domx.Cls;
  var get_dropdownMenuRight = $module$appsimake_bootstrap.bootstrap.get_dropdownMenuRight_kre7dp$;
  var rxAnchorClick = $module$appsimake_bootstrap.bootstrap.rxAnchorClick_qit41n$;
  var get_trashAlt = $module$appsimake_fontawesome.fontawesome.get_trashAlt_xml72e$;
  var dropdownGroup = $module$appsimake_bootstrap.bootstrap.dropdownGroup_ju7q0d$;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_yc4v25$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var get_scrollVertical = $module$appsimake_domx.styles.get_scrollVertical_kre7dp$;
  var get_form = $module$appsimake_domx.domx.get_form_asww5s$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var set = $module$appsimake_commonshr.rx.set_atqor6$;
  var listenInput = $module$appsimake_domx.domx.listenInput_5kmoko$;
  var listenInput_0 = $module$appsimake_domx.domx.listenInput_bouo3s$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var get_isInvalid = $module$appsimake_bootstrap.bootstrap.get_isInvalid_kre7dp$;
  var rxClass = $module$appsimake_commonshr.rx.rxClass_4ic22z$;
  var get_formGroup = $module$appsimake_bootstrap.bootstrap.get_formGroup_kre7dp$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_label = $module$appsimake_domx.domx.get_label_asww5s$;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ensureNotNull = Kotlin.ensureNotNull;
  var AppOptions = $module$appsimake_firebase.firebase.AppOptions;
  var initializeApp = firebase.initializeApp;
  var firestore = $module$appsimake_firebase.firebase.app.firestore_c7ogsi$;
  var withDefaultSettings = $module$appsimake_firebase.firebase.firestore.withDefaultSettings_gwf93m$;
  var initBinder = $module$appsimake_firebase.firebase.firestore.initBinder_8mbn6p$;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var AppCtx = $module$appsimake_commonui.commonui.AppCtx;
  var equals = Kotlin.equals;
  var KillableSeq_init = $module$appsimake_commonshr.killable.KillableSeq_init_wii6vi$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getCallableRef = Kotlin.getCallableRef;
  var get_h5 = $module$appsimake_domx.domx.get_h5_asww5s$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_m2 = $module$appsimake_bootstrap.bootstrap.get_m2_kre7dp$;
  var get_filter = $module$appsimake_fontawesome.fontawesome.get_filter_xml72e$;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var clickEventSeq = $module$appsimake_domx.domx.clickEventSeq_er8ueh$;
  var get_borderBottom = $module$appsimake_bootstrap.bootstrap.get_borderBottom_kre7dp$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var get_dBlock = $module$appsimake_bootstrap.bootstrap.get_dBlock_kre7dp$;
  var rxText = $module$appsimake_bootstrap.bootstrap.rxText_7fncnf$;
  var listAction = $module$appsimake_bootstrap.bootstrap.listAction_6t02fy$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var Killable = $module$appsimake_commonshr.killable.Killable;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var listenableList = $module$appsimake_domx.domx.listenableList_fgftfw$;
  var listGroup = $module$appsimake_bootstrap.bootstrap.listGroup_t7sdcm$;
  var ListenConfig = $module$appsimake_firebase.firebase.firestore.ListenConfig;
  var listen_0 = $module$appsimake_firebase.firebase.firestore.listen_wkiigx$;
  var showClosable = $module$appsimake_commonui.commonui.showClosable_l02s0b$;
  var map = $module$appsimake_common.common.map_193nbn$;
  var get_private = $module$appsimake_commonshr.commonlib.get_private_6l3wi3$;
  var get_fcmtokens = $module$appsimake_commonshr.commonlib.get_fcmtokens_z8qup$;
  var get_a = $module$appsimake_domx.domx.get_a_asww5s$;
  var btn = $module$appsimake_bootstrap.bootstrap.btn_ejp6nk$;
  var btnSecondary = $module$appsimake_bootstrap.bootstrap.btnSecondary_ejp6nk$;
  var flexCenter_0 = $module$appsimake_bootstrap.bootstrap.flexCenter_ejp6nk$;
  var StateMachine = $module$appsimake_common.common.StateMachine;
  var Login = $module$appsimake_firebase.firebaseui.Login;
  var State = $module$appsimake_common.common.State;
  var get_pen = $module$appsimake_fontawesome.fontawesome.get_pen_xml72e$;
  var get_fontWeightBold = $module$appsimake_bootstrap.bootstrap.get_fontWeightBold_kre7dp$;
  var rxTextOrEmpty = $module$appsimake_bootstrap.bootstrap.rxTextOrEmpty_elhwo1$;
  MessagingState$NotSupported.prototype = Object.create(MessagingState.prototype);
  MessagingState$NotSupported.prototype.constructor = MessagingState$NotSupported;
  MessagingState$NotGranted.prototype = Object.create(MessagingState.prototype);
  MessagingState$NotGranted.prototype.constructor = MessagingState$NotGranted;
  MessagingState$Denied.prototype = Object.create(MessagingState.prototype);
  MessagingState$Denied.prototype.constructor = MessagingState$Denied;
  MessagingState$HasToken.prototype = Object.create(MessagingState.prototype);
  MessagingState$HasToken.prototype.constructor = MessagingState$HasToken;
  LoginProcessState.prototype = Object.create(State.prototype);
  LoginProcessState.prototype.constructor = LoginProcessState;
  LoggedUnknown.prototype = Object.create(LoginProcessState.prototype);
  LoggedUnknown.prototype.constructor = LoggedUnknown;
  LoggedOut.prototype = Object.create(LoginProcessState.prototype);
  LoggedOut.prototype.constructor = LoggedOut;
  LoggedIn.prototype = Object.create(LoginProcessState.prototype);
  LoggedIn.prototype.constructor = LoggedIn;
  function TabConfig(icon, node) {
    this.icon = icon;
    this.node = node;
  }
  TabConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TabConfig',
    interfaces: []
  };
  TabConfig.prototype.component1 = function () {
    return this.icon;
  };
  TabConfig.prototype.component2 = function () {
    return this.node;
  };
  TabConfig.prototype.copy_8whvio$ = function (icon, node) {
    return new TabConfig(icon === void 0 ? this.icon : icon, node === void 0 ? this.node : node);
  };
  TabConfig.prototype.toString = function () {
    return 'TabConfig(icon=' + Kotlin.toString(this.icon) + (', node=' + Kotlin.toString(this.node)) + ')';
  };
  TabConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    result = result * 31 + Kotlin.hashCode(this.node) | 0;
    return result;
  };
  TabConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.icon, other.icon) && Kotlin.equals(this.node, other.node)))));
  };
  function tabsConfig$lambda$lambda(closure$tc, closure$ks) {
    return function () {
      return closure$tc.node(closure$ks);
    };
  }
  function tabsConfig$lambda$lambda$lambda(closure$active, closure$idx) {
    return function () {
      return closure$active.invoke() === closure$idx;
    };
  }
  function tabsConfig$lambda$lambda$lambda$lambda(closure$idx, closure$active) {
    return function (it) {
      closure$active.now = closure$idx;
      return Unit;
    };
  }
  function tabsConfig$lambda$lambda$lambda_0(closure$idx, closure$active) {
    return function ($receiver) {
      clickEvent($receiver, tabsConfig$lambda$lambda$lambda$lambda(closure$idx, closure$active));
      return Unit;
    };
  }
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  function tabsConfig$lambda(closure$ts, closure$active) {
    return function ($receiver) {
      var $receiver_0 = closure$ts;
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var closure$active_0 = closure$active;
        var idx = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        faTab($receiver, item.icon, Rx_init(tabsConfig$lambda$lambda$lambda(closure$active_0, idx)), tabsConfig$lambda$lambda$lambda_0(idx, closure$active_0));
      }
      return Unit;
    };
  }
  function tabsConfig$lambda$lambda_0(closure$root, closure$nodes) {
    return function (idx) {
      closure$root.setRoot_b3w3xb$(closure$nodes.get_za3lpa$(idx).value);
      return Unit;
    };
  }
  function tabsConfig$lambda_0(closure$active, closure$nodes) {
    return function ($receiver) {
      var root = new RootPanel($receiver);
      closure$active.forEach_qlkmfe$(tabsConfig$lambda$lambda_0(root, closure$nodes));
      return Unit;
    };
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function tabsConfig(ks, ts) {
    var active = new Var(0);
    var destination = ArrayList_init(collectionSizeOrDefault(ts, 10));
    var tmp$;
    tmp$ = ts.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(lazy(tabsConfig$lambda$lambda(item, ks)));
    }
    var nodes = destination;
    return new FormConfig(tabsConfig$lambda(ts, active), tabsConfig$lambda_0(active, nodes));
  }
  function FormConfig(tabs, form) {
    if (tabs === void 0)
      tabs = FormConfig_init$lambda;
    this.tabs = tabs;
    this.form = form;
  }
  function FormConfig_init$lambda($receiver) {
    return Unit;
  }
  FormConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormConfig',
    interfaces: []
  };
  FormConfig.prototype.component1 = function () {
    return this.tabs;
  };
  FormConfig.prototype.component2 = function () {
    return this.form;
  };
  FormConfig.prototype.copy_q9fuc4$ = function (tabs, form) {
    return new FormConfig(tabs === void 0 ? this.tabs : tabs, form === void 0 ? this.form : form);
  };
  FormConfig.prototype.toString = function () {
    return 'FormConfig(tabs=' + Kotlin.toString(this.tabs) + (', form=' + Kotlin.toString(this.form)) + ')';
  };
  FormConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tabs) | 0;
    result = result * 31 + Kotlin.hashCode(this.form) | 0;
    return result;
  };
  FormConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tabs, other.tabs) && Kotlin.equals(this.form, other.form)))));
  };
  function EditScreenConfig(title, form) {
    this.title = title;
    this.form = form;
  }
  EditScreenConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditScreenConfig',
    interfaces: []
  };
  EditScreenConfig.prototype.component1 = function () {
    return this.title;
  };
  EditScreenConfig.prototype.component2 = function () {
    return this.form;
  };
  EditScreenConfig.prototype.copy_ezcw64$ = function (title, form) {
    return new EditScreenConfig(title === void 0 ? this.title : title, form === void 0 ? this.form : form);
  };
  EditScreenConfig.prototype.toString = function () {
    return 'EditScreenConfig(title=' + Kotlin.toString(this.title) + (', form=' + Kotlin.toString(this.form)) + ')';
  };
  EditScreenConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.form) | 0;
    return result;
  };
  EditScreenConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.form, other.form)))));
  };
  function build$lambda(closure$item) {
    return function () {
      return closure$item.props.dirty.invoke() && closure$item.props.isValid.invoke();
    };
  }
  function build$lambda_0(closure$item) {
    return function () {
      return closure$item.props.isPersisted.invoke();
    };
  }
  function build$lambda_1(closure$showDelete) {
    return function () {
      return closure$showDelete.invoke();
    };
  }
  function build$lambda_2(closure$item, closure$isSaving) {
    return function () {
      return closure$item.props.isPersisted.invoke() && !closure$isSaving.invoke();
    };
  }
  function build$lambda_3(closure$item, closure$db) {
    return function () {
      var $receiver = closure$item.props.id.invoke();
      var closure$db_0 = closure$db;
      return Kotlin.isType($receiver, IdState$Persisted) ? docRef($receiver.id, closure$db_0) : null;
    };
  }
  function build$lambda$lambda(closure$isSaving) {
    return function (it) {
      closure$isSaving.now = false;
      return Unit;
    };
  }
  function build$lambda_4(closure$idListenerSeq, closure$isSaving) {
    return function (dr) {
      if (dr != null) {
        closure$idListenerSeq.plusAssign_o14v8n$(dr.onSnapshot(build$lambda$lambda(closure$isSaving)));
      }
       else {
        closure$idListenerSeq.clear();
      }
      return Unit;
    };
  }
  function build$save(closure$canSave, closure$isSaving, closure$docRefOpt, closure$item, closure$db, closure$killables, this$build) {
    return function () {
      var tmp$;
      if (closure$canSave.now) {
        closure$isSaving.now = true;
        var tmp$_0;
        tmp$_0 = (tmp$ = closure$docRefOpt.now) != null ? tmp$.set(closure$item.props.merge(), setOptionsMerge()) : null;
        if (tmp$_0 == null) {
          var closure$item_0 = closure$item;
          var closure$db_0 = closure$db;
          var closure$killables_0 = closure$killables;
          var ref = collectionRef(closure$item_0.props.collection, closure$db_0).doc();
          closure$item_0.props.persistedFB_61zpoe$(ref.id);
          ref.set(closure$item_0.props.write());
          closure$killables_0.plusAssign_wii6vi$(listen(ref, closure$item_0));
        }
      }
    };
  }
  function build$back(closure$close) {
    return function () {
      closure$close();
    };
  }
  function Coroutine$build$delete$lambda(closure$item_0, closure$db_0, closure$isSaving_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
    this.local$closure$db = closure$db_0;
    this.local$closure$isSaving = closure$isSaving_0;
  }
  Coroutine$build$delete$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$build$delete$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$build$delete$lambda.prototype.constructor = Coroutine$build$delete$lambda;
  Coroutine$build$delete$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(docRef(this.local$closure$item.props.docWrapOrFail, this.local$closure$db).delete(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$isSaving.now = false, Unit;
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
  function build$delete$lambda(closure$item_0, closure$db_0, closure$isSaving_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$build$delete$lambda(closure$item_0, closure$db_0, closure$isSaving_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function build$delete(closure$isSaving, closure$item, closure$db) {
    return function () {
      closure$isSaving.now = true;
      launch(coroutines.GlobalScope, void 0, void 0, build$delete$lambda(closure$item, closure$db, closure$isSaving));
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_btnGroup($receiver);
    get_m1($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item) {
    return function () {
      return !closure$item.props.dirty.invoke();
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$back) {
    return function (it) {
      closure$back();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$killables, closure$back) {
    return function ($receiver) {
      get_btnSecondary(get_cls($receiver));
      addedTo(rxDisplayed($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item)), closure$killables);
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$back));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    get_save(get_fa($receiver));
    get_ml1($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$item, closure$back) {
    return function (it) {
      closure$item.props.save();
      closure$back();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$canSave, closure$item, closure$back) {
    return function ($receiver) {
      get_btnSuccess(get_cls($receiver));
      get_cls(get_span($receiver)).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1);
      rxDisplayed_0($receiver, closure$canSave);
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$item, closure$back));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$item, closure$canSave) {
    return function () {
      return closure$item.props.dirty.invoke() && !closure$canSave.invoke();
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$back) {
    return function (it) {
      closure$back();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$item, closure$canSave, closure$killables, closure$back) {
    return function ($receiver) {
      get_btnDanger(get_cls($receiver));
      addedTo(rxDisplayed($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$item, closure$canSave)), closure$killables);
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$back));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$canSave) {
    return function ($receiver) {
      get_btnSuccess(get_cls($receiver));
      rxDisplayed_0($receiver, closure$canSave);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_textDanger($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Discard';
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$back) {
    return function (it) {
      closure$back();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$back, this$) {
    return function ($receiver) {
      invoke($receiver.anchor, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      get_backspace(get_fa(get_cls($receiver.icon)));
      invoke($receiver.text, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      clickEvent(this$, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$back));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$canSave, closure$back) {
    return function ($receiver) {
      rxDisplayed_0($receiver, closure$canSave);
      get_dropdownMenu(get_cls($receiver));
      dropdownItemAnchor($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$back, $receiver));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda(closure$item, closure$killables, closure$back, closure$canSave) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda);
      faButton($receiver, get_chevronLeft(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$item, closure$killables, closure$back));
      faButton($receiver, get_chevronLeft(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$canSave, closure$item, closure$back));
      faButton($receiver, get_backspace(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$item, closure$canSave, closure$killables, closure$back));
      invoke(get_dropdownSplit($receiver), build$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$canSave));
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$canSave, closure$back));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_0(this$build) {
    return function ($receiver) {
      $receiver.innerText = this$build.title;
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_1(closure$fc) {
    return function ($receiver) {
      closure$fc.tabs($receiver);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_5($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
    get_alignItemsCenter($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6($receiver) {
    get_m1($receiver);
    get_btnGroup($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$save) {
    return function (it) {
      closure$save();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$canSave, closure$save) {
    return function ($receiver) {
      get_btnPrimary(get_cls($receiver));
      rxEnabled($receiver, closure$canSave);
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$save));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_textDanger($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$delete) {
    return function (it) {
      closure$delete();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      rxDisplayed_0($receiver, closure$showDelete);
      rxAnchorClick($receiver, closure$canDelete, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Delete';
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      invoke($receiver.anchor, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$showDelete, closure$canDelete, closure$delete));
      get_trashAlt(get_fa(get_cls($receiver.icon)));
      invoke($receiver.text, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      get_dropdownMenuRight(get_cls($receiver));
      dropdownItemAnchor($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      rxDisplayed_0($receiver.element, closure$showDropDown);
      invoke($receiver.menu, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$canSave, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6);
      faButton($receiver, get_save(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(closure$canSave, closure$save));
      dropdownGroup($receiver, get_btnPrimary(Cls.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_2(closure$canSave, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda_5);
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$canSave, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda(closure$item, closure$killables, closure$back, closure$canSave, this$build, this$, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda$lambda(closure$item, closure$killables, closure$back, closure$canSave));
      this$.middleTitle_9f50g3$(build$lambda$lambda$lambda$lambda$lambda_0(this$build));
      this$.tabs.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda$lambda_1(closure$fc));
      this$.right.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda$lambda_2(closure$canSave, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda(closure$isSaving, closure$item, closure$killables, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      $receiver.spinner.visibility.now = closure$isSaving;
      $receiver.left.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda(closure$item, closure$killables, closure$back, closure$canSave, this$build, $receiver, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda_0(closure$fc) {
    return function ($receiver) {
      closure$fc.form($receiver);
      return Unit;
    };
  }
  function build$lambda$lambda_0(closure$isSaving, closure$item, closure$killables, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      $receiver.top_vesf63$(build$lambda$lambda$lambda(closure$isSaving, closure$item, closure$killables, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      invoke($receiver.main, build$lambda$lambda$lambda_0(closure$fc));
      return Unit;
    };
  }
  function build$lambda_5(closure$killables, closure$isSaving, closure$item, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      screenLayout($receiver, closure$killables, build$lambda$lambda_0(closure$isSaving, closure$item, closure$killables, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build($receiver, killables, panel, item, close, db) {
    item.props.rollback();
    killables.plusAssign_o14v8n$(item.props.onDeleted.add_o14v8n$(close));
    var isSaving = new Var(false);
    var canSave = Rx_init(build$lambda(item));
    var showDelete = Rx_init(build$lambda_0(item));
    var showDropDown = Rx_init(build$lambda_1(showDelete));
    var canDelete = Rx_init(build$lambda_2(item, isSaving));
    var idListenerSeq = killables.seq();
    var docRefOpt = addedTo(Rx_init(build$lambda_3(item, db)), killables);
    docRefOpt.forEach_qlkmfe$(build$lambda_4(idListenerSeq, isSaving));
    var save = build$save(canSave, isSaving, docRefOpt, item, db, killables, $receiver);
    var back = build$back(close);
    var delete_0 = build$delete(isSaving, item, db);
    var fc = $receiver.form(item, killables);
    panel.newRoot_iw61es$(build$lambda_5(killables, isSaving, item, back, canSave, $receiver, fc, save, showDropDown, showDelete, canDelete, delete_0));
  }
  function scrollForm$lambda($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    get_scrollVertical($receiver);
    return Unit;
  }
  function scrollForm$lambda$lambda($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  function scrollForm$lambda$lambda_0(closure$fn) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      closure$fn($receiver);
      return Unit;
    };
  }
  function scrollForm$lambda_0(closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(scrollForm$lambda$lambda);
      invoke(get_form($receiver), scrollForm$lambda$lambda_0(closure$fn));
      return Unit;
    };
  }
  function scrollForm($receiver, fn) {
    get_cls($receiver).invoke_cr52h1$(scrollForm$lambda);
    invoke(get_div($receiver), scrollForm$lambda_0(fn));
  }
  function textProp$lambda(closure$prop) {
    return function (it) {
      set(closure$prop.current, it);
      return Unit;
    };
  }
  function textProp($receiver, prop) {
    $receiver.value = prop.current.now.getOrDefault_11rb$('');
    listenInput($receiver, textProp$lambda(prop));
    return validProp($receiver, prop);
  }
  function textProp$lambda_0(closure$prop) {
    return function (it) {
      set(closure$prop.current, it);
      return Unit;
    };
  }
  function textProp_0($receiver, prop) {
    $receiver.value = prop.current.now.getOrDefault_11rb$('');
    listenInput_0($receiver, textProp$lambda_0(prop));
    return validProp($receiver, prop);
  }
  var enumProp = defineInlineFunction('appsimake-commonfb.commonfb.enumProp_hsjcuy$', wrapFunction(function () {
    var get_option = _.$$importsForInline$$['appsimake-domx'].domx.get_option_asww5s$;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var invoke = _.$$importsForInline$$['appsimake-domx'].domx.invoke_inodcj$;
    var orEmpty = _.$$importsForInline$$['appsimake-commonshr'].common.orEmpty_rw3ye5$;
    var common = _.$$importsForInline$$['appsimake-commonshr'].common;
    var Some_init = _.$$importsForInline$$['appsimake-commonshr'].common.Some;
    var changeEvent = _.$$importsForInline$$['appsimake-domx'].domx.changeEvent_e6qnhl$;
    var validProp = _.commonfb.validProp_zh45ff$;
    function enumProp$lambda($receiver) {
      $receiver.value = '';
      $receiver.innerText = '<please select>';
      return Unit;
    }
    function enumProp$lambda$lambda(closure$s) {
      return function ($receiver) {
        $receiver.value = closure$s.name;
        $receiver.innerText = closure$s.name;
        return Unit;
      };
    }
    function enumProp$lambda_0(it) {
      return it.name;
    }
    var enumProp$lambda_1 = wrapFunction(function () {
      var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
      return function (this$enumProp, typeClosure$E, isE, closure$prop) {
        return function (it) {
          var tmp$ = closure$prop.current;
          var $receiver = this$enumProp.value;
          tmp$.now = $receiver == null || isBlank($receiver) ? common.None : new Some_init(typeClosure$E.valueOf_61zpoe$(this$enumProp.value));
          return Unit;
        };
      };
    });
    return function (E_0, isE, $receiver, prop) {
      invoke(get_option($receiver), enumProp$lambda);
      var $receiver_0 = E_0.values();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        invoke(get_option($receiver), enumProp$lambda$lambda(element));
      }
      $receiver.value = orEmpty(prop.current.now.map_2o04qz$(enumProp$lambda_0));
      changeEvent($receiver, enumProp$lambda_1($receiver, E_0, isE, prop));
      return validProp($receiver, prop);
    };
  }));
  function validProp$lambda(closure$prop) {
    return function () {
      return !closure$prop.isValid.invoke();
    };
  }
  function validProp($receiver, prop) {
    var killables = new Killables();
    rxClass($receiver, get_isInvalid(Cls.Companion), validProp$lambda(prop));
    return killables;
  }
  function formGroup$lambda$lambda($receiver) {
    get_formGroup($receiver);
    get_dFlex($receiver);
    get_flexColumn($receiver);
    flexFixedSize($receiver);
    return Unit;
  }
  function formGroup$lambda$lambda$lambda($receiver) {
    flexFixedSize($receiver);
    get_m1($receiver);
    return Unit;
  }
  function formGroup$lambda$lambda_0(closure$lbl) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(formGroup$lambda$lambda$lambda);
      $receiver.innerText = closure$lbl;
      return Unit;
    };
  }
  function formGroup$lambda$lambda_1(closure$l) {
    return function ($receiver) {
      closure$l.htmlFor = get_ref($receiver);
      return Unit;
    };
  }
  function formGroup$lambda(closure$lbl, closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(formGroup$lambda$lambda);
      var l = invoke(get_label($receiver), formGroup$lambda$lambda_0(closure$lbl));
      closure$fn($receiver, formGroup$lambda$lambda_1(l));
      return Unit;
    };
  }
  function formGroup($receiver, lbl, fn) {
    invoke(get_div($receiver), formGroup$lambda(lbl, fn));
  }
  function HasDB() {
  }
  HasDB.prototype.get_ref_3a60a5$ = function ($receiver) {
    return docRef($receiver, this.db);
  };
  HasDB.prototype.get_ref_lg3h4r$ = function ($receiver) {
    return collectionRef($receiver, this.db);
  };
  HasDB.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasDB',
    interfaces: []
  };
  function FbCtx(appCtx, lib) {
    this.appCtx = appCtx;
    this.lib = lib;
    this.name = this.lib.name;
    this.app_u25537$_0 = lazy(FbCtx$app$lambda);
    this.db_qixv9q$_0 = lazy(FbCtx$db$lambda(this));
    this.auth_8g1z48$_0 = lazy(FbCtx$auth$lambda(this));
    this.messaging_c1rbb4$_0 = lazy(FbCtx$messaging$lambda(this));
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
  Object.defineProperty(FbCtx.prototype, 'messaging', {
    get: function () {
      return this.messaging_c1rbb4$_0.value;
    }
  });
  FbCtx.prototype.signOut = function () {
    this.appCtx.hourglass();
    this.auth.signOut();
  };
  function Coroutine$setupMessaging_qfvnr1$($this, setupMessagingGranted_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$setupMessagingGranted = setupMessagingGranted_0;
  }
  Coroutine$setupMessaging_qfvnr1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setupMessaging_qfvnr1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setupMessaging_qfvnr1$.prototype.constructor = Coroutine$setupMessaging_qfvnr1$;
  Coroutine$setupMessaging_qfvnr1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = await_0(this.result_0.requestPermission(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.$this.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var tokenPromise = ensureNotNull(this.result_0.getToken());
            this.state_0 = 5;
            this.result_0 = this.local$setupMessagingGranted(tokenPromise, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
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
  FbCtx.prototype.setupMessaging_qfvnr1$ = function (setupMessagingGranted_0, continuation_0, suspended) {
    var instance = new Coroutine$setupMessaging_qfvnr1$(this, setupMessagingGranted_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$trySetupMessaging_qfvnr1$($this, setupMessagingGranted_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$setupMessagingGranted = setupMessagingGranted_0;
  }
  Coroutine$trySetupMessaging_qfvnr1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$trySetupMessaging_qfvnr1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$trySetupMessaging_qfvnr1$.prototype.constructor = Coroutine$trySetupMessaging_qfvnr1$;
  Coroutine$trySetupMessaging_qfvnr1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tokenPromise = this.result_0.getToken();
            if (tokenPromise == null) {
              this.local$tmp$ = false;
              this.state_0 = 4;
              continue;
            }
             else {
              this.state_0 = 3;
              this.result_0 = this.local$setupMessagingGranted(tokenPromise, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            this.local$tmp$ = true;
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$tmp$;
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
  FbCtx.prototype.trySetupMessaging_qfvnr1$ = function (setupMessagingGranted_0, continuation_0, suspended) {
    var instance = new Coroutine$trySetupMessaging_qfvnr1$(this, setupMessagingGranted_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  FbCtx.prototype.call_uni1ku$ = function (function_0, input, continuation) {
    return call(function_0, this.app, input, continuation);
  };
  function FbCtx$app$lambda() {
    var $receiver = AppOptions();
    $receiver.apiKey = 'AIzaSyDuHunYFDxjJVSvhk_3POXORpN8M49ubgU';
    $receiver.authDomain = 'appsimake.firebaseapp.com';
    $receiver.databaseURL = 'https://appsimake.firebaseio.com';
    $receiver.projectId = 'appsimake';
    $receiver.storageBucket = 'appsimake.appspot.com';
    $receiver.messagingSenderId = '850641545175';
    return initializeApp($receiver);
  }
  function FbCtx$db$lambda(this$FbCtx) {
    return function () {
      var $receiver = withDefaultSettings(firestore(this$FbCtx.app));
      initBinder($receiver);
      return $receiver;
    };
  }
  function FbCtx$auth$lambda(this$FbCtx) {
    return function () {
      return this$FbCtx.app.auth();
    };
  }
  function Coroutine$FbCtx$messaging$lambda$lambda(this$FbCtx_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FbCtx = this$FbCtx_0;
  }
  Coroutine$FbCtx$messaging$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FbCtx$messaging$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FbCtx$messaging$lambda$lambda.prototype.constructor = Coroutine$FbCtx$messaging$lambda$lambda;
  Coroutine$FbCtx$messaging$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$FbCtx.appCtx.serviceWorker, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var registration = this.result_0;
            var msg = this.local$this$FbCtx.app.messaging();
            msg.useServiceWorker(registration);
            msg.usePublicVapidKey('BOgqeELuJyp5wv-HiXzqLsxA2tqGboVZRZdrHTDnrN_DzCCJYuMA_pVBQYB0afOFvtTXSUdHi20NuNGmmtP0fvU');
            return msg;
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
  function FbCtx$messaging$lambda$lambda(this$FbCtx_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FbCtx$messaging$lambda$lambda(this$FbCtx_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FbCtx$messaging$lambda(this$FbCtx) {
    return function () {
      return async(coroutines.GlobalScope, void 0, void 0, FbCtx$messaging$lambda$lambda(this$FbCtx));
    };
  }
  FbCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FbCtx',
    interfaces: [HasDB]
  };
  function FbCtx_init(lib, title, $this) {
    $this = $this || Object.create(FbCtx.prototype);
    FbCtx.call($this, new AppCtx(title), lib);
    return $this;
  }
  function Callable() {
  }
  Callable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Callable',
    interfaces: []
  };
  function callPromise($receiver, app, input) {
    return app.functions().httpsCallable($receiver.qualifiedName)(input);
  }
  function callable$ObjectLiteral(closure$app, this$callable) {
    this.closure$app = closure$app;
    this.this$callable = this$callable;
  }
  function Coroutine$call_11rb$($this, input_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$input = input_0;
  }
  Coroutine$call_11rb$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$call_11rb$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$call_11rb$.prototype.constructor = Coroutine$call_11rb$;
  Coroutine$call_11rb$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(callPromise(this.$this.this$callable, this.$this.closure$app, this.local$input), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.data;
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
  callable$ObjectLiteral.prototype.call_11rb$ = function (input_0, continuation_0, suspended) {
    var instance = new Coroutine$call_11rb$(this, input_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  callable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Callable]
  };
  function callable($receiver, app, continuation) {
    return new callable$ObjectLiteral(app, $receiver);
  }
  function Coroutine$call($receiver_0, app_0, input_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$app = app_0;
    this.local$input = input_0;
  }
  Coroutine$call.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$call.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$call.prototype.constructor = Coroutine$call;
  Coroutine$call.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = callable(this.local$$receiver, this.local$app, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.call_11rb$(this.local$input, this);
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
  function call($receiver_0, app_0, input_0, continuation_0, suspended) {
    var instance = new Coroutine$call($receiver_0, app_0, input_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function FcmControl(loggedInCtx) {
    this.loggedInCtx = loggedInCtx;
    this.fbCtx = this.loggedInCtx.fbCtx;
    this.isSupported = this.fbCtx.appCtx.isFcmSupported;
    this.enabled0_0 = new Var(null);
    this.toggle0_0 = FcmControl$toggle0$lambda;
    this.killables = new Killables();
    if (!this.isSupported) {
      this.enabled0_0.now = false;
      this.toggle0_0 = FcmControl_init$lambda;
    }
     else {
      if (equals(Notification.permission, 'denied')) {
        this.permissionDenied_0();
      }
       else {
        launch(coroutines.GlobalScope, void 0, void 0, FcmControl_init$lambda_0(this));
      }
    }
  }
  Object.defineProperty(FcmControl.prototype, 'enabled', {
    get: function () {
      return this.enabled0_0;
    }
  });
  function FcmControl$noReentry$lambda(this$FcmControl, closure$fn) {
    return function (alert) {
      if (this$FcmControl.enabled0_0.now != null) {
        closure$fn(alert);
        this$FcmControl.enabled0_0.now = null;
      }
      return Unit;
    };
  }
  FcmControl.prototype.noReentry_eznvfo$ = function (fn) {
    return FcmControl$noReentry$lambda(this, fn);
  };
  FcmControl.prototype.toggle_ep0k5p$ = function (alert) {
    this.toggle0_0(alert);
  };
  function FcmControl$permissionDenied$lambda(alert) {
    alert('Please allow notifications in the browser settings.');
    return Unit;
  }
  FcmControl.prototype.permissionDenied_0 = function () {
    this.enabled0_0.now = false;
    this.toggle0_0 = FcmControl$permissionDenied$lambda;
  };
  function FcmControl$toggle0$lambda(it) {
    return Unit;
  }
  function FcmControl_init$lambda(alert) {
    alert('Browser does not support notifications.');
    return Unit;
  }
  function FcmControl_init$lambda$ObjectLiteral(this$FcmControl, closure$messaging, closure$killableSeq) {
    this.this$FcmControl = this$FcmControl;
    this.closure$messaging = closure$messaging;
    this.closure$killableSeq = closure$killableSeq;
  }
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda(this$FcmControl) {
    return function (it) {
      this$FcmControl.enabled0_0.now = it.exists;
      return Unit;
    };
  }
  function Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda(closure$en_0, this$_0, closure$ref_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$en = closure$en_0;
    this.local$this$ = this$_0;
    this.local$closure$ref = closure$ref_0;
  }
  Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda.prototype.constructor = Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda;
  Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.request_6taknv$(this.local$closure$en, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var newRef = this.result_0;
            if (!equals(this.local$closure$ref.id, newRef.id)) {
              return this.local$closure$ref.delete(), Unit;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            return Unit;
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
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda(closure$en_0, this$_0, closure$ref_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda(closure$en_0, this$_0, closure$ref_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda_0(this$FcmControl, this$, closure$ref) {
    return function () {
      var en = this$FcmControl.enabled.now === true;
      launch(coroutines.GlobalScope, void 0, void 0, FcmControl_init$lambda$ObjectLiteral$requested$lambda$lambda(en, this$, closure$ref));
      return Unit;
    };
  }
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda_1(closure$stopPolling, closure$stopTokenListener) {
    return function () {
      closure$stopPolling();
      closure$stopTokenListener();
      return Unit;
    };
  }
  function FcmControl_init$lambda$ObjectLiteral$requested$lambda_2(this$FcmControl, closure$ref) {
    return function (it) {
      if (this$FcmControl.enabled0_0.now === true) {
        closure$ref.delete();
      }
       else {
        closure$ref.set({});
      }
      return Unit;
    };
  }
  function Coroutine$requested_ivxn3r$($this, token_0, upload_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$ref = void 0;
    this.local$token = token_0;
    this.local$upload = upload_0;
  }
  Coroutine$requested_ivxn3r$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$requested_ivxn3r$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requested_ivxn3r$.prototype.constructor = Coroutine$requested_ivxn3r$;
  Coroutine$requested_ivxn3r$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$ref = this.$this.this$FcmControl.loggedInCtx.fcmTokensRef.doc(this.local$token);
            if (this.local$upload) {
              this.state_0 = 2;
              this.result_0 = await_0(this.local$ref.set({}), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            var stopPolling = this.local$ref.onSnapshot(FcmControl_init$lambda$ObjectLiteral$requested$lambda(this.$this.this$FcmControl));
            var stopTokenListener = this.$this.closure$messaging.onTokenRefresh(FcmControl_init$lambda$ObjectLiteral$requested$lambda_0(this.$this.this$FcmControl, this.$this, this.local$ref));
            this.$this.closure$killableSeq.set_o14v8n$(FcmControl_init$lambda$ObjectLiteral$requested$lambda_1(stopPolling, stopTokenListener));
            this.$this.this$FcmControl.toggle0_0 = this.$this.this$FcmControl.noReentry_eznvfo$(FcmControl_init$lambda$ObjectLiteral$requested$lambda_2(this.$this.this$FcmControl, this.local$ref));
            return this.local$ref;
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
  FcmControl_init$lambda$ObjectLiteral.prototype.requested_ivxn3r$ = function (token_0, upload_0, continuation_0, suspended) {
    var instance = new Coroutine$requested_ivxn3r$(this, token_0, upload_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$request_6taknv$($this, upload_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$upload = upload_0;
  }
  Coroutine$request_6taknv$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$request_6taknv$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$request_6taknv$.prototype.constructor = Coroutine$request_6taknv$;
  Coroutine$request_6taknv$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(ensureNotNull(this.$this.closure$messaging.getToken()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var token = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.$this.requested_ivxn3r$(token, this.local$upload, this);
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
  FcmControl_init$lambda$ObjectLiteral.prototype.request_6taknv$ = function (upload_0, continuation_0, suspended) {
    var instance = new Coroutine$request_6taknv$(this, upload_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  FcmControl_init$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Coroutine$FcmControl_init$lambda$lambda$lambda(closure$messaging_0, closure$tokens_0, closure$alert_0, this$FcmControl_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 5;
    this.local$closure$messaging = closure$messaging_0;
    this.local$closure$tokens = closure$tokens_0;
    this.local$closure$alert = closure$alert_0;
    this.local$this$FcmControl = this$FcmControl_0;
  }
  Coroutine$FcmControl_init$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FcmControl_init$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FcmControl_init$lambda$lambda$lambda.prototype.constructor = Coroutine$FcmControl_init$lambda$lambda$lambda;
  Coroutine$FcmControl_init$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = await_0(this.local$closure$messaging.requestPermission(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.state_0 = 2;
            this.result_0 = this.local$closure$tokens.request_6taknv$(true, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            var _ = this.exception_0;
            this.local$closure$alert('Permission to show notifications has been denied.');
            return this.local$this$FcmControl.permissionDenied_0(), Unit;
          case 4:
            return;
          case 5:
            throw this.exception_0;
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
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
  function FcmControl_init$lambda$lambda$lambda(closure$messaging_0, closure$tokens_0, closure$alert_0, this$FcmControl_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FcmControl_init$lambda$lambda$lambda(closure$messaging_0, closure$tokens_0, closure$alert_0, this$FcmControl_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FcmControl_init$lambda$lambda(closure$messaging, closure$tokens, this$FcmControl) {
    return function (alert) {
      launch(coroutines.GlobalScope, void 0, void 0, FcmControl_init$lambda$lambda$lambda(closure$messaging, closure$tokens, alert, this$FcmControl));
      return Unit;
    };
  }
  function Coroutine$FcmControl_init$lambda(this$FcmControl_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FcmControl = this$FcmControl_0;
  }
  Coroutine$FcmControl_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FcmControl_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FcmControl_init$lambda.prototype.constructor = Coroutine$FcmControl_init$lambda;
  Coroutine$FcmControl_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$FcmControl.fbCtx.messaging.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var messaging = this.result_0;
            var killableSeq = KillableSeq_init();
            this.local$this$FcmControl.killables.plusAssign_wii6vi$(killableSeq);
            var tokens = new FcmControl_init$lambda$ObjectLiteral(this.local$this$FcmControl, messaging, killableSeq);
            if (!equals(Notification.permission, 'granted')) {
              this.local$this$FcmControl.enabled0_0.now = false;
              return this.local$this$FcmControl.toggle0_0 = this.local$this$FcmControl.noReentry_eznvfo$(FcmControl_init$lambda$lambda(messaging, tokens, this.local$this$FcmControl)), Unit;
            }
             else {
              this.state_0 = 3;
              this.result_0 = tokens.request_6taknv$(false, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 3:
            return this.result_0;
          case 4:
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
  function FcmControl_init$lambda_0(this$FcmControl_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FcmControl_init$lambda(this$FcmControl_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  FcmControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FcmControl',
    interfaces: []
  };
  function FcmCtx(fbCtx, messaging) {
    this.fbCtx = fbCtx;
    this.messaging = messaging;
    this.granted = new Var(false);
    var tokenPromise = this.messaging.getToken();
    if (tokenPromise == null) {
      this.granted.now = false;
    }
     else {
      this.granted.now = true;
    }
  }
  FcmCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FcmCtx',
    interfaces: []
  };
  function MessagingState() {
  }
  function MessagingState$NotSupported() {
    MessagingState$NotSupported_instance = this;
    MessagingState.call(this);
  }
  MessagingState$NotSupported.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NotSupported',
    interfaces: [MessagingState]
  };
  var MessagingState$NotSupported_instance = null;
  function MessagingState$NotSupported_getInstance() {
    if (MessagingState$NotSupported_instance === null) {
      new MessagingState$NotSupported();
    }
    return MessagingState$NotSupported_instance;
  }
  function MessagingState$NotGranted() {
    MessagingState$NotGranted_instance = this;
    MessagingState.call(this);
  }
  MessagingState$NotGranted.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NotGranted',
    interfaces: [MessagingState]
  };
  var MessagingState$NotGranted_instance = null;
  function MessagingState$NotGranted_getInstance() {
    if (MessagingState$NotGranted_instance === null) {
      new MessagingState$NotGranted();
    }
    return MessagingState$NotGranted_instance;
  }
  function MessagingState$Denied() {
    MessagingState$Denied_instance = this;
    MessagingState.call(this);
  }
  MessagingState$Denied.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Denied',
    interfaces: [MessagingState]
  };
  var MessagingState$Denied_instance = null;
  function MessagingState$Denied_getInstance() {
    if (MessagingState$Denied_instance === null) {
      new MessagingState$Denied();
    }
    return MessagingState$Denied_instance;
  }
  function MessagingState$HasToken(token) {
    MessagingState.call(this);
    this.token = token;
  }
  MessagingState$HasToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HasToken',
    interfaces: [MessagingState]
  };
  MessagingState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessagingState',
    interfaces: []
  };
  function FilterConfig(query, filter, panel) {
    FilterConfig$Companion_getInstance();
    if (filter === void 0)
      filter = true;
    this.query = query;
    this.filter = filter;
    this.panel = panel;
  }
  function FilterConfig$Companion() {
    FilterConfig$Companion_instance = this;
  }
  function FilterConfig$Companion$of$lambda$lambda($receiver) {
    return Unit;
  }
  function FilterConfig$Companion$of$lambda(closure$queryWrap) {
    return function (f, f_0) {
      return new FilterConfig(new Var(closure$queryWrap), false, FilterConfig$Companion$of$lambda$lambda);
    };
  }
  FilterConfig$Companion.prototype.of_nrtlcr$ = function (queryWrap) {
    return FilterConfig$Companion$of$lambda(queryWrap);
  };
  FilterConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FilterConfig$Companion_instance = null;
  function FilterConfig$Companion_getInstance() {
    if (FilterConfig$Companion_instance === null) {
      new FilterConfig$Companion();
    }
    return FilterConfig$Companion_instance;
  }
  FilterConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FilterConfig',
    interfaces: []
  };
  function ListScreenConfig(title, collectionWrap, create, view, edit, itemText, filter) {
    this.title = title;
    this.collectionWrap = collectionWrap;
    this.create = create;
    this.view = view;
    this.edit = edit;
    this.itemText = itemText;
    this.filter = filter;
  }
  ListScreenConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListScreenConfig',
    interfaces: []
  };
  ListScreenConfig.prototype.component1 = function () {
    return this.title;
  };
  ListScreenConfig.prototype.component2 = function () {
    return this.collectionWrap;
  };
  ListScreenConfig.prototype.component3 = function () {
    return this.create;
  };
  ListScreenConfig.prototype.component4 = function () {
    return this.view;
  };
  ListScreenConfig.prototype.component5 = function () {
    return this.edit;
  };
  ListScreenConfig.prototype.component6 = function () {
    return this.itemText;
  };
  ListScreenConfig.prototype.component7 = function () {
    return this.filter;
  };
  ListScreenConfig.prototype.copy_1vkzt9$ = function (title, collectionWrap, create, view, edit, itemText, filter) {
    return new ListScreenConfig(title === void 0 ? this.title : title, collectionWrap === void 0 ? this.collectionWrap : collectionWrap, create === void 0 ? this.create : create, view === void 0 ? this.view : view, edit === void 0 ? this.edit : edit, itemText === void 0 ? this.itemText : itemText, filter === void 0 ? this.filter : filter);
  };
  ListScreenConfig.prototype.toString = function () {
    return 'ListScreenConfig(title=' + Kotlin.toString(this.title) + (', collectionWrap=' + Kotlin.toString(this.collectionWrap)) + (', create=' + Kotlin.toString(this.create)) + (', view=' + Kotlin.toString(this.view)) + (', edit=' + Kotlin.toString(this.edit)) + (', itemText=' + Kotlin.toString(this.itemText)) + (', filter=' + Kotlin.toString(this.filter)) + ')';
  };
  ListScreenConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.collectionWrap) | 0;
    result = result * 31 + Kotlin.hashCode(this.create) | 0;
    result = result * 31 + Kotlin.hashCode(this.view) | 0;
    result = result * 31 + Kotlin.hashCode(this.edit) | 0;
    result = result * 31 + Kotlin.hashCode(this.itemText) | 0;
    result = result * 31 + Kotlin.hashCode(this.filter) | 0;
    return result;
  };
  ListScreenConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.collectionWrap, other.collectionWrap) && Kotlin.equals(this.create, other.create) && Kotlin.equals(this.view, other.view) && Kotlin.equals(this.edit, other.edit) && Kotlin.equals(this.itemText, other.itemText) && Kotlin.equals(this.filter, other.filter)))));
  };
  function build$lambda$displayList(closure$panel, this$) {
    return function () {
      closure$panel.setRoot_b3w3xb$(this$);
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_3($receiver) {
    get_flexRow($receiver);
    get_alignItemsCenter($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    get_flexGrow1($receiver);
    get_m2($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda_4(this$build) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda_7);
      $receiver.innerText = this$build.title;
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda_0(this$build) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda_3);
      invoke(get_h5($receiver), build$lambda$lambda$lambda$lambda$lambda_4(this$build));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9(act) {
    return !act;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$filterOpen) {
    return function (it) {
      closure$filterOpen.transform_ru8m0w$(build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_9);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_5(closure$filterOpen) {
    return function ($receiver) {
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda_8(closure$filterOpen));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda_1(closure$filterOpen) {
    return function ($receiver) {
      faTab($receiver, get_filter(Fa.Companion), closure$filterOpen, build$lambda$lambda$lambda$lambda$lambda_5(closure$filterOpen));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    get_m1($receiver);
    get_btnPrimary($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_10(this$build, closure$panel, closure$displayList) {
    return function (ks, f) {
      this$build.edit(ks, closure$panel.sub(), this$build.create(), getCallableRef('displayList', function () {
        return closure$displayList(), Unit;
      }));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_6(closure$killables, this$build, closure$panel, closure$displayList) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda_9);
      closure$killables.plusAssign_wii6vi$(clickEventSeq($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda_10(this$build, closure$panel, closure$displayList)));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda_2(closure$killables, this$build, closure$panel, closure$displayList) {
    return function ($receiver) {
      faButton($receiver, get_plus(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda_6(closure$killables, this$build, closure$panel, closure$displayList));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda_1(closure$isBusy, closure$close, this$build, closure$filterConfig, closure$filterOpen, closure$killables, closure$panel, closure$displayList) {
    return function ($receiver) {
      $receiver.spinner.visibility.now = closure$isBusy;
      $receiver.backButton_o14v8n$(closure$close);
      $receiver.middle.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda_0(this$build));
      if (closure$filterConfig.filter) {
        $receiver.tabs.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda_1(closure$filterOpen));
      }
      $receiver.right.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda_2(closure$killables, this$build, closure$panel, closure$displayList));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda_3($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    flexFixedSize($receiver);
    get_scrollVertical($receiver);
    get_borderBottom($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    get_p2($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda_8(closure$filterConfig) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda_11);
      closure$filterConfig.panel($receiver);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda_4(closure$filterOpen, closure$filterConfig) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda_7);
      rxDisplayed_0($receiver, closure$filterOpen);
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda$lambda_8(closure$filterConfig));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_9($receiver) {
    get_flexGrow1($receiver);
    get_dFlex($receiver);
    get_flexColumn($receiver);
    get_bgLight($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda_10(closure$displayList) {
    return function () {
      closure$displayList();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_11(closure$db, this$build, closure$panel) {
    return function (ks, item, close) {
      keepAlive(item, ks, closure$db);
      this$build.view(ks, closure$panel.sub(), item, close);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10($receiver) {
    get_scrollVertical($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_12($receiver) {
    get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_10);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11($receiver) {
    get_m2($receiver);
    get_dBlock($receiver);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_13($receiver) {
    get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_11);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda_12(closure$listRoot, closure$filterConfig, this$build) {
    return function (show) {
      return new ListUIConfig(closure$listRoot, closure$filterConfig.query, this$build.collectionWrap, this$build.create, void 0, void 0, void 0, build$lambda$lambda$lambda$lambda$lambda$lambda_12, build$lambda$lambda$lambda$lambda$lambda$lambda_13, stringListClick(this$build.itemText, show));
    };
  }
  function build$lambda$lambda$lambda$lambda_5(closure$killables, closure$displayList, closure$db, this$build, closure$panel, closure$filterConfig) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda$lambda_9);
      var listRoot = new RootPanel($receiver);
      showClosableList(closure$killables, build$lambda$lambda$lambda$lambda$lambda_10(closure$displayList), build$lambda$lambda$lambda$lambda$lambda_11(closure$db, this$build, closure$panel), build$lambda$lambda$lambda$lambda$lambda_12(listRoot, closure$filterConfig, this$build));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda_2(closure$filterConfig, closure$filterOpen, closure$killables, closure$displayList, closure$db, this$build, closure$panel) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(build$lambda$lambda$lambda$lambda_3);
      if (closure$filterConfig.filter) {
        invoke(get_div($receiver), build$lambda$lambda$lambda$lambda_4(closure$filterOpen, closure$filterConfig));
      }
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda_5(closure$killables, closure$displayList, closure$db, this$build, closure$panel, closure$filterConfig));
      return Unit;
    };
  }
  function build$lambda$lambda_1(closure$isBusy, closure$close, this$build, closure$filterConfig, closure$killables, closure$panel, closure$displayList, closure$db) {
    return function ($receiver) {
      var filterOpen = new Var(false);
      $receiver.top_vesf63$(build$lambda$lambda$lambda_1(closure$isBusy, closure$close, this$build, closure$filterConfig, filterOpen, closure$killables, closure$panel, closure$displayList));
      invoke($receiver.main, build$lambda$lambda$lambda_2(closure$filterConfig, filterOpen, closure$killables, closure$displayList, closure$db, this$build, closure$panel));
      return Unit;
    };
  }
  function build$lambda_6(closure$panel, this$build, closure$killables, closure$isBusy, closure$close, closure$db) {
    return function ($receiver) {
      var displayList = build$lambda$displayList(closure$panel, $receiver);
      var filterConfig = this$build.filter(closure$killables, getCallableRef('displayList', function () {
        return displayList(), Unit;
      }));
      screenLayout($receiver, closure$killables, build$lambda$lambda_1(closure$isBusy, closure$close, this$build, filterConfig, closure$killables, closure$panel, displayList, closure$db));
      return Unit;
    };
  }
  function build_0($receiver, killables, panel, db, close) {
    var isBusy = new Var(false);
    panel.newRoot_iw61es$(build$lambda_6(panel, $receiver, killables, isBusy, close, db));
  }
  function stringListClick$lambda$lambda$lambda(closure$itemText, closure$item) {
    return function () {
      return closure$itemText(closure$item);
    };
  }
  function stringListClick$lambda$lambda$lambda_0(closure$onClick, closure$item) {
    return function (it) {
      closure$onClick(closure$item);
      return Unit;
    };
  }
  function stringListClick$lambda$lambda(closure$itemText, closure$item, closure$onClick) {
    return function ($receiver) {
      rxText($receiver, stringListClick$lambda$lambda$lambda(closure$itemText, closure$item));
      clickEvent($receiver, stringListClick$lambda$lambda$lambda_0(closure$onClick, closure$item));
      return Unit;
    };
  }
  function stringListClick$lambda(closure$itemText, closure$onClick) {
    return function (item) {
      return listAction(document, stringListClick$lambda$lambda(closure$itemText, item, closure$onClick));
    };
  }
  function stringListClick(itemText, onClick) {
    return stringListClick$lambda(itemText, onClick);
  }
  function ListUIConfig(root, query, collectionWrap, create, filter, hourglassDecor, emptyDivDecor, listDivDecor, ulDecor, itemFactory) {
    ListUIConfig$Companion_getInstance();
    if (filter === void 0)
      filter = ListUIConfig_init$lambda;
    if (hourglassDecor === void 0)
      hourglassDecor = ListUIConfig_init$lambda_0;
    if (emptyDivDecor === void 0)
      emptyDivDecor = ListUIConfig$Companion_getInstance().standardEmptyDiv;
    if (listDivDecor === void 0)
      listDivDecor = ListUIConfig_init$lambda_1;
    if (ulDecor === void 0)
      ulDecor = ListUIConfig_init$lambda_2;
    this.root = root;
    this.query = query;
    this.collectionWrap = collectionWrap;
    this.create = create;
    this.filter = filter;
    this.hourglassDecor = hourglassDecor;
    this.emptyDivDecor = emptyDivDecor;
    this.listDivDecor = listDivDecor;
    this.ulDecor = ulDecor;
    this.itemFactory = itemFactory;
  }
  function ListUIConfig$Companion() {
    ListUIConfig$Companion_instance = this;
    this.standardEmptyDiv = ListUIConfig$Companion$standardEmptyDiv$lambda;
  }
  function ListUIConfig$Companion$standardEmptyDiv$lambda$lambda($receiver) {
    flexCenter($receiver);
    get_flexGrow1($receiver);
    get_p1($receiver);
    return Unit;
  }
  function ListUIConfig$Companion$standardEmptyDiv$lambda$lambda_0($receiver) {
    $receiver.innerText = 'The list is empty';
    return Unit;
  }
  function ListUIConfig$Companion$standardEmptyDiv$lambda($receiver) {
    get_cls($receiver).invoke_cr52h1$(ListUIConfig$Companion$standardEmptyDiv$lambda$lambda);
    invoke(get_span($receiver), ListUIConfig$Companion$standardEmptyDiv$lambda$lambda_0);
    return Unit;
  }
  ListUIConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ListUIConfig$Companion_instance = null;
  function ListUIConfig$Companion_getInstance() {
    if (ListUIConfig$Companion_instance === null) {
      new ListUIConfig$Companion();
    }
    return ListUIConfig$Companion_instance;
  }
  function ListUIConfig_init$lambda(it) {
    return it;
  }
  function ListUIConfig_init$lambda_0($receiver) {
    get_m2(get_cls($receiver));
    return Unit;
  }
  function ListUIConfig_init$lambda_1($receiver) {
    get_scrollVertical(get_cls($receiver));
    get_flexGrow1(get_cls($receiver));
    return Unit;
  }
  function ListUIConfig_init$lambda_2($receiver) {
    return Unit;
  }
  ListUIConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListUIConfig',
    interfaces: []
  };
  ListUIConfig.prototype.component1 = function () {
    return this.root;
  };
  ListUIConfig.prototype.component2 = function () {
    return this.query;
  };
  ListUIConfig.prototype.component3 = function () {
    return this.collectionWrap;
  };
  ListUIConfig.prototype.component4 = function () {
    return this.create;
  };
  ListUIConfig.prototype.component5 = function () {
    return this.filter;
  };
  ListUIConfig.prototype.component6 = function () {
    return this.hourglassDecor;
  };
  ListUIConfig.prototype.component7 = function () {
    return this.emptyDivDecor;
  };
  ListUIConfig.prototype.component8 = function () {
    return this.listDivDecor;
  };
  ListUIConfig.prototype.component9 = function () {
    return this.ulDecor;
  };
  ListUIConfig.prototype.component10 = function () {
    return this.itemFactory;
  };
  ListUIConfig.prototype.copy_u7wsv4$ = function (root, query, collectionWrap, create, filter, hourglassDecor, emptyDivDecor, listDivDecor, ulDecor, itemFactory) {
    return new ListUIConfig(root === void 0 ? this.root : root, query === void 0 ? this.query : query, collectionWrap === void 0 ? this.collectionWrap : collectionWrap, create === void 0 ? this.create : create, filter === void 0 ? this.filter : filter, hourglassDecor === void 0 ? this.hourglassDecor : hourglassDecor, emptyDivDecor === void 0 ? this.emptyDivDecor : emptyDivDecor, listDivDecor === void 0 ? this.listDivDecor : listDivDecor, ulDecor === void 0 ? this.ulDecor : ulDecor, itemFactory === void 0 ? this.itemFactory : itemFactory);
  };
  ListUIConfig.prototype.toString = function () {
    return 'ListUIConfig(root=' + Kotlin.toString(this.root) + (', query=' + Kotlin.toString(this.query)) + (', collectionWrap=' + Kotlin.toString(this.collectionWrap)) + (', create=' + Kotlin.toString(this.create)) + (', filter=' + Kotlin.toString(this.filter)) + (', hourglassDecor=' + Kotlin.toString(this.hourglassDecor)) + (', emptyDivDecor=' + Kotlin.toString(this.emptyDivDecor)) + (', listDivDecor=' + Kotlin.toString(this.listDivDecor)) + (', ulDecor=' + Kotlin.toString(this.ulDecor)) + (', itemFactory=' + Kotlin.toString(this.itemFactory)) + ')';
  };
  ListUIConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.root) | 0;
    result = result * 31 + Kotlin.hashCode(this.query) | 0;
    result = result * 31 + Kotlin.hashCode(this.collectionWrap) | 0;
    result = result * 31 + Kotlin.hashCode(this.create) | 0;
    result = result * 31 + Kotlin.hashCode(this.filter) | 0;
    result = result * 31 + Kotlin.hashCode(this.hourglassDecor) | 0;
    result = result * 31 + Kotlin.hashCode(this.emptyDivDecor) | 0;
    result = result * 31 + Kotlin.hashCode(this.listDivDecor) | 0;
    result = result * 31 + Kotlin.hashCode(this.ulDecor) | 0;
    result = result * 31 + Kotlin.hashCode(this.itemFactory) | 0;
    return result;
  };
  ListUIConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.root, other.root) && Kotlin.equals(this.query, other.query) && Kotlin.equals(this.collectionWrap, other.collectionWrap) && Kotlin.equals(this.create, other.create) && Kotlin.equals(this.filter, other.filter) && Kotlin.equals(this.hourglassDecor, other.hourglassDecor) && Kotlin.equals(this.emptyDivDecor, other.emptyDivDecor) && Kotlin.equals(this.listDivDecor, other.listDivDecor) && Kotlin.equals(this.ulDecor, other.ulDecor) && Kotlin.equals(this.itemFactory, other.itemFactory)))));
  };
  function listUI$lambda$lambda(this$) {
    return function ($receiver) {
      this$.emptyDivDecor($receiver);
      return Unit;
    };
  }
  function listUI$lambda$lambda$lambda$lambda(this$, closure$filtered) {
    return function ($receiver) {
      this$.ulDecor($receiver);
      listenableList($receiver, closure$filtered, this$.itemFactory);
      return Unit;
    };
  }
  function listUI$lambda$lambda$lambda(this$, closure$filtered) {
    return function ($receiver) {
      this$.listDivDecor($receiver);
      listGroup($receiver, listUI$lambda$lambda$lambda$lambda(this$, closure$filtered));
      return Unit;
    };
  }
  function listUI$lambda$lambda$lambda$lambda_0(closure$queryRoot, closure$emptyDiv, closure$listDiv) {
    return function (empty) {
      closure$queryRoot.setRoot_b3w3xb$(empty ? closure$emptyDiv : closure$listDiv);
      return Unit;
    };
  }
  function listUI$lambda$lambda$lambda_0(closure$ks, closure$filtered, closure$queryRoot, closure$emptyDiv, closure$listDiv) {
    return function () {
      closure$ks.plusAssign_wii6vi$(closure$filtered.isEmptyRx.forEach_qlkmfe$(listUI$lambda$lambda$lambda$lambda_0(closure$queryRoot, closure$emptyDiv, closure$listDiv)));
      return Unit;
    };
  }
  function listUI$lambda$lambda_0(this$, closure$killables, closure$emptyDiv) {
    return function (old, q) {
      old.kill();
      var queryRoot = this$.root.sub();
      var $receiver = queryRoot.setHourglass();
      this$.hourglassDecor($receiver);
      var ks = closure$killables.killables();
      var list = new ListenableMutableList();
      var filtered = this$.filter(list);
      var listDiv = column(document, listUI$lambda$lambda$lambda(this$, filtered));
      listen_0(q.query, ks, ListenConfig.Companion.hasProps_4r7uln$(list, this$.collectionWrap, this$.create).copy_4cbyqc$(void 0, void 0, void 0, void 0, listUI$lambda$lambda$lambda_0(ks, filtered, queryRoot, closure$emptyDiv, listDiv)));
      return ks;
    };
  }
  function listUI(killables, config) {
    var emptyDiv = column(document, listUI$lambda$lambda(config));
    killables.plusAssign_wii6vi$(config.query.fold_b8xf17$(Killable.Companion.empty, listUI$lambda$lambda_0(config, killables, emptyDiv)));
  }
  function showClosableList$lambda$close(closure$redisplay, closure$viewKills) {
    return function () {
      closure$redisplay();
      closure$viewKills.kill();
    };
  }
  function showClosableList$lambda$lambda(closure$page, closure$dit) {
    return function (ks, close) {
      closure$page(ks, closure$dit, close);
      return Unit;
    };
  }
  function showClosableList$lambda$lambda_0(closure$close) {
    return function () {
      closure$close();
      return Unit;
    };
  }
  function showClosableList$lambda(closure$viewSeq, closure$redisplay, closure$page) {
    return function (dit) {
      var viewKills = closure$viewSeq.killables();
      var close = showClosableList$lambda$close(closure$redisplay, viewKills);
      showClosable(viewKills, showClosableList$lambda$lambda(closure$page, dit), getCallableRef('close', function () {
        return close(), Unit;
      }));
      viewKills.plusAssign_o14v8n$(dit.props.onDeleted.add_o14v8n$(showClosableList$lambda$lambda_0(close)));
      return Unit;
    };
  }
  function showClosableList(killables, redisplay, page, config) {
    var viewSeq = killables.seq();
    var onClick = showClosableList$lambda(viewSeq, redisplay, page);
    listUI(killables, config(onClick));
  }
  function keepAlive$lambda(closure$killListen, this$keepAlive, closure$db) {
    return function (alive) {
      if (!alive) {
        closure$killListen.plusAssign_wii6vi$(listen(docRef(this$keepAlive.props.docWrapOrFail, closure$db), this$keepAlive));
      }
      return Unit;
    };
  }
  function keepAlive$lambda_0(closure$killForeach, closure$killListen) {
    return function () {
      closure$killForeach.kill();
      closure$killListen.kill();
      return Unit;
    };
  }
  function keepAlive($receiver, killables, db) {
    var killListen = new Killables();
    var killForeach = $receiver.props.live.forEach_qlkmfe$(keepAlive$lambda(killListen, $receiver, db));
    killables.plusAssign_o14v8n$(keepAlive$lambda_0(killForeach, killListen));
  }
  function listNodes$Holder(node, killable) {
    this.node = node;
    this.$delegate_mne5u$_0 = killable;
  }
  listNodes$Holder.prototype.kill = function () {
    return this.$delegate_mne5u$_0.kill();
  };
  listNodes$Holder.prototype.plus_wii6vi$ = function (k) {
    return this.$delegate_mne5u$_0.plus_wii6vi$(k);
  };
  listNodes$Holder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Holder',
    interfaces: [Killable]
  };
  function listNodes$lambda(closure$fn) {
    return function (t) {
      var nks = new Killables();
      return new listNodes$Holder(closure$fn(t, nks), nks);
    };
  }
  function listNodes$lambda_0(it) {
    return it.node;
  }
  function listNodes($receiver, list, fn) {
    var ks = new Killables();
    var ns = map(list, ks, listNodes$lambda(fn));
    ks.plusAssign_wii6vi$(listenableList($receiver, ns, listNodes$lambda_0));
    return ks;
  }
  function LoggedInCtx(fbCtx, user) {
    this.fbCtx = fbCtx;
    this.user = user;
    this.db = this.fbCtx.db;
    this.lib = this.fbCtx.lib;
    this.appCtx = this.fbCtx.appCtx;
    this.privateWrap = get_private(this.lib.app).doc_61zpoe$(this.user.uid);
    this.fcmTokensRef = collectionRef(get_fcmtokens(this.privateWrap), this.db);
    this.killables = new Killables();
    this.fcmControl_s4lbk8$_0 = lazy(LoggedInCtx$fcmControl$lambda(this));
  }
  Object.defineProperty(LoggedInCtx.prototype, 'fcmControl', {
    get: function () {
      return this.fcmControl_s4lbk8$_0.value;
    }
  });
  function LoggedInCtx$fcmControl$lambda(this$LoggedInCtx) {
    return function () {
      return new FcmControl(this$LoggedInCtx);
    };
  }
  LoggedInCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedInCtx',
    interfaces: []
  };
  function LoggingInCtx(fbCtx) {
    this.fbCtx = fbCtx;
    this.appCtx = this.fbCtx.appCtx;
    this.app = this.fbCtx.app;
    this.login_ay5xxn$_aguoch$_0 = lazy(LoggingInCtx$login$lambda(this));
  }
  Object.defineProperty(LoggingInCtx.prototype, 'login_ay5xxn$_0', {
    get: function () {
      return this.login_ay5xxn$_aguoch$_0.value;
    }
  });
  LoggingInCtx.prototype.loggedOut_di35k5$ = function (killables) {
    this.login_ay5xxn$_0.loginUi_2rdptt$(this.loginDiv_di35k5$(killables));
  };
  function LoggingInCtx$loginDiv$lambda$lambda$lambda$lambda($receiver) {
    btn($receiver);
    btnSecondary($receiver);
    $receiver.href = 'index.html';
    $receiver.innerText = 'Exit';
    return Unit;
  }
  function LoggingInCtx$loginDiv$lambda$lambda$lambda($receiver) {
    invoke(get_a($receiver), LoggingInCtx$loginDiv$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function LoggingInCtx$loginDiv$lambda$lambda$lambda_0(this$LoggingInCtx) {
    return function ($receiver) {
      $receiver.innerText = this$LoggingInCtx.appCtx.title;
      return Unit;
    };
  }
  function LoggingInCtx$loginDiv$lambda$lambda(this$LoggingInCtx) {
    return function ($receiver) {
      $receiver.left.invoke_gk6m2q$(LoggingInCtx$loginDiv$lambda$lambda$lambda);
      $receiver.middleTitle_9f50g3$(LoggingInCtx$loginDiv$lambda$lambda$lambda_0(this$LoggingInCtx));
      return Unit;
    };
  }
  function LoggingInCtx$loginDiv$lambda(this$LoggingInCtx) {
    return function ($receiver) {
      $receiver.top_vesf63$(LoggingInCtx$loginDiv$lambda$lambda(this$LoggingInCtx));
      return Unit;
    };
  }
  LoggingInCtx.prototype.loginDiv_di35k5$ = function (killables) {
    var $receiver = screenLayout(this.appCtx.root.newRoot_iw61es$(), killables, LoggingInCtx$loginDiv$lambda(this)).main;
    flexCenter_0($receiver);
    return get_div($receiver);
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
  function LoggingInCtx_init(lib, title, $this) {
    $this = $this || Object.create(LoggingInCtx.prototype);
    LoggingInCtx.call($this, FbCtx_init(lib, title));
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
  LoggedUnknown.prototype.enter = function () {
    this.control.appCtx.hourglass();
    return Killable.Companion.empty;
  };
  LoggedUnknown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedUnknown',
    interfaces: [LoginProcessState]
  };
  function LoggedOut(control) {
    LoginProcessState.call(this, control);
  }
  LoggedOut.prototype.enter = function () {
    var killables = new Killables();
    this.control.loggedOut_di35k5$(killables);
    return killables;
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
  function ViewScreenConfig(title, edit, top, view) {
    ViewScreenConfig$Companion_getInstance();
    if (top === void 0)
      top = ViewScreenConfig$Companion_getInstance().standardToolbar;
    this.title = title;
    this.edit = edit;
    this.top = top;
    this.view = view;
  }
  function ViewScreenConfig$Companion() {
    ViewScreenConfig$Companion_instance = this;
    this.standardToolbar = ViewScreenConfig$Companion$standardToolbar$lambda(this);
  }
  function ViewScreenConfig$Companion$editButton$lambda$lambda($receiver) {
    get_btnPrimary($receiver);
    return Unit;
  }
  function ViewScreenConfig$Companion$editButton$lambda$lambda_0(closure$edit) {
    return function (ks, f) {
      closure$edit(ks);
      return Unit;
    };
  }
  function ViewScreenConfig$Companion$editButton$lambda(closure$killables, closure$edit) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(ViewScreenConfig$Companion$editButton$lambda$lambda);
      closure$killables.plusAssign_wii6vi$(clickEventSeq($receiver, ViewScreenConfig$Companion$editButton$lambda$lambda_0(closure$edit)));
      return Unit;
    };
  }
  ViewScreenConfig$Companion.prototype.editButton_rqaarp$ = function ($receiver, killables, edit) {
    return faButton($receiver, get_pen(Fa.Companion), ViewScreenConfig$Companion$editButton$lambda(killables, edit));
  };
  function ViewScreenConfig$Companion$leftMiddle$lambda(closure$title) {
    return function ($receiver) {
      $receiver.innerText = closure$title;
      return Unit;
    };
  }
  ViewScreenConfig$Companion.prototype.leftMiddle_exslxk$ = function ($receiver, title, close) {
    $receiver.backButton_o14v8n$(close);
    $receiver.middleTitle_9f50g3$(ViewScreenConfig$Companion$leftMiddle$lambda(title));
  };
  function ViewScreenConfig$Companion$ToolbarConfig(state, title, edit) {
    this.state = state;
    this.title = title;
    this.edit = edit;
  }
  ViewScreenConfig$Companion$ToolbarConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToolbarConfig',
    interfaces: []
  };
  ViewScreenConfig$Companion$ToolbarConfig.prototype.component1 = function () {
    return this.state;
  };
  ViewScreenConfig$Companion$ToolbarConfig.prototype.component2 = function () {
    return this.title;
  };
  ViewScreenConfig$Companion$ToolbarConfig.prototype.component3 = function () {
    return this.edit;
  };
  ViewScreenConfig$Companion$ToolbarConfig.prototype.copy_akq2k1$ = function (state, title, edit) {
    return new ViewScreenConfig$Companion$ToolbarConfig(state === void 0 ? this.state : state, title === void 0 ? this.title : title, edit === void 0 ? this.edit : edit);
  };
  ViewScreenConfig$Companion$ToolbarConfig.prototype.toString = function () {
    return 'ToolbarConfig(state=' + Kotlin.toString(this.state) + (', title=' + Kotlin.toString(this.title)) + (', edit=' + Kotlin.toString(this.edit)) + ')';
  };
  ViewScreenConfig$Companion$ToolbarConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.edit) | 0;
    return result;
  };
  ViewScreenConfig$Companion$ToolbarConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.state, other.state) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.edit, other.edit)))));
  };
  function ViewScreenConfig$Companion$standardToolbar$lambda$lambda$lambda(this$, this$ViewScreenConfig$) {
    return function ($receiver) {
      get_m1(get_cls(this$ViewScreenConfig$.editButton_rqaarp$($receiver, this$.state.killables, this$.edit)));
      return Unit;
    };
  }
  function ViewScreenConfig$Companion$standardToolbar$lambda(this$ViewScreenConfig$) {
    return function ($receiver, it) {
      var this$ViewScreenConfig$_0 = this$ViewScreenConfig$;
      this$ViewScreenConfig$_0.leftMiddle_exslxk$($receiver, it.title, it.state.close);
      $receiver.right.invoke_gk6m2q$(ViewScreenConfig$Companion$standardToolbar$lambda$lambda$lambda(it, this$ViewScreenConfig$_0));
      return Unit;
    };
  }
  ViewScreenConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ViewScreenConfig$Companion_instance = null;
  function ViewScreenConfig$Companion_getInstance() {
    if (ViewScreenConfig$Companion_instance === null) {
      new ViewScreenConfig$Companion();
    }
    return ViewScreenConfig$Companion_instance;
  }
  ViewScreenConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewScreenConfig',
    interfaces: []
  };
  ViewScreenConfig.prototype.component1 = function () {
    return this.title;
  };
  ViewScreenConfig.prototype.component2 = function () {
    return this.edit;
  };
  ViewScreenConfig.prototype.component3 = function () {
    return this.top;
  };
  ViewScreenConfig.prototype.component4 = function () {
    return this.view;
  };
  ViewScreenConfig.prototype.copy_4utlp0$ = function (title, edit, top, view) {
    return new ViewScreenConfig(title === void 0 ? this.title : title, edit === void 0 ? this.edit : edit, top === void 0 ? this.top : top, view === void 0 ? this.view : view);
  };
  ViewScreenConfig.prototype.toString = function () {
    return 'ViewScreenConfig(title=' + Kotlin.toString(this.title) + (', edit=' + Kotlin.toString(this.edit)) + (', top=' + Kotlin.toString(this.top)) + (', view=' + Kotlin.toString(this.view)) + ')';
  };
  ViewScreenConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.edit) | 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.view) | 0;
    return result;
  };
  ViewScreenConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.edit, other.edit) && Kotlin.equals(this.top, other.top) && Kotlin.equals(this.view, other.view)))));
  };
  function ViewScreenState(killables, panel, redisplay, close) {
    this.killables = killables;
    this.panel = panel;
    this.redisplay = redisplay;
    this.close = close;
  }
  ViewScreenState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewScreenState',
    interfaces: []
  };
  ViewScreenState.prototype.component1 = function () {
    return this.killables;
  };
  ViewScreenState.prototype.component2 = function () {
    return this.panel;
  };
  ViewScreenState.prototype.component3 = function () {
    return this.redisplay;
  };
  ViewScreenState.prototype.component4 = function () {
    return this.close;
  };
  ViewScreenState.prototype.copy_pq3s3q$ = function (killables, panel, redisplay, close) {
    return new ViewScreenState(killables === void 0 ? this.killables : killables, panel === void 0 ? this.panel : panel, redisplay === void 0 ? this.redisplay : redisplay, close === void 0 ? this.close : close);
  };
  ViewScreenState.prototype.toString = function () {
    return 'ViewScreenState(killables=' + Kotlin.toString(this.killables) + (', panel=' + Kotlin.toString(this.panel)) + (', redisplay=' + Kotlin.toString(this.redisplay)) + (', close=' + Kotlin.toString(this.close)) + ')';
  };
  ViewScreenState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.killables) | 0;
    result = result * 31 + Kotlin.hashCode(this.panel) | 0;
    result = result * 31 + Kotlin.hashCode(this.redisplay) | 0;
    result = result * 31 + Kotlin.hashCode(this.close) | 0;
    return result;
  };
  ViewScreenState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.killables, other.killables) && Kotlin.equals(this.panel, other.panel) && Kotlin.equals(this.redisplay, other.redisplay) && Kotlin.equals(this.close, other.close)))));
  };
  function build$lambda$displayViewer(closure$panel, this$) {
    return function () {
      closure$panel.setRoot_b3w3xb$(this$);
    };
  }
  function build$lambda$lambda$lambda$lambda_6(this$build, closure$panel, closure$item, closure$displayViewer) {
    return function (eks) {
      this$build.edit(eks, closure$panel.sub(), closure$item, getCallableRef('displayViewer', function () {
        return closure$displayViewer(), Unit;
      }));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda_3(this$build, closure$state, closure$panel, closure$item, closure$displayViewer) {
    return function ($receiver) {
      this$build.top($receiver, new ViewScreenConfig$Companion$ToolbarConfig(closure$state, this$build.title, build$lambda$lambda$lambda$lambda_6(this$build, closure$panel, closure$item, closure$displayViewer)));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda_4(this$build, closure$state, closure$item) {
    return function ($receiver) {
      this$build.view($receiver, closure$state, closure$item);
      return Unit;
    };
  }
  function build$lambda$lambda_2(this$build, closure$state, closure$panel, closure$item, closure$displayViewer) {
    return function ($receiver) {
      $receiver.top_vesf63$(build$lambda$lambda$lambda_3(this$build, closure$state, closure$panel, closure$item, closure$displayViewer));
      invoke($receiver.main, build$lambda$lambda$lambda_4(this$build, closure$state, closure$item));
      return Unit;
    };
  }
  function build$lambda_7(closure$panel, closure$killables, closure$close, this$build, closure$item) {
    return function ($receiver) {
      var displayViewer = build$lambda$displayViewer(closure$panel, $receiver);
      var state = new ViewScreenState(closure$killables, closure$panel, getCallableRef('displayViewer', function () {
        return displayViewer(), Unit;
      }), closure$close);
      screenLayout($receiver, closure$killables, build$lambda$lambda_2(this$build, state, closure$panel, closure$item, displayViewer));
      return Unit;
    };
  }
  function build_1($receiver, killables, panel, item, close) {
    panel.newRoot_iw61es$(build$lambda_7(panel, killables, close, $receiver, item));
  }
  function scrollPanel$lambda($receiver) {
    get_scrollVertical($receiver);
    return Unit;
  }
  function scrollPanel$lambda$lambda($receiver) {
    get_p1($receiver);
    return Unit;
  }
  function scrollPanel$lambda_0(closure$fn) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(scrollPanel$lambda$lambda);
      closure$fn($receiver);
      return Unit;
    };
  }
  function scrollPanel($receiver, fn) {
    get_cls($receiver).invoke_cr52h1$(scrollPanel$lambda);
    return invoke(get_div($receiver), scrollPanel$lambda_0(fn));
  }
  function viewFieldLabel$lambda$lambda($receiver) {
    get_m1($receiver);
    get_fontWeightBold($receiver);
    return Unit;
  }
  function viewFieldLabel$lambda(closure$title) {
    return function ($receiver) {
      get_cls($receiver).invoke_cr52h1$(viewFieldLabel$lambda$lambda);
      $receiver.innerText = closure$title;
      return Unit;
    };
  }
  function viewFieldLabel($receiver, title) {
    invoke(get_span($receiver), viewFieldLabel$lambda(title));
  }
  function viewTextField$lambda($receiver) {
    get_m1(get_cls($receiver));
    return Unit;
  }
  function viewTextField($receiver, label, fn) {
    viewFieldLabel($receiver, label);
    return rxTextOrEmpty(invoke(get_span($receiver), viewTextField$lambda), fn);
  }
  var package$commonfb = _.commonfb || (_.commonfb = {});
  package$commonfb.TabConfig = TabConfig;
  package$commonfb.tabsConfig_yye9s2$ = tabsConfig;
  package$commonfb.FormConfig = FormConfig;
  package$commonfb.EditScreenConfig = EditScreenConfig;
  package$commonfb.build_54sbj2$ = build;
  package$commonfb.scrollForm_q3s9yp$ = scrollForm;
  package$commonfb.textProp_kk2tdu$ = textProp;
  package$commonfb.textProp_7aqtlq$ = textProp_0;
  $$importsForInline$$['appsimake-domx'] = $module$appsimake_domx;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$commonfb.validProp_zh45ff$ = validProp;
  package$commonfb.formGroup_9svwsq$ = formGroup;
  package$commonfb.HasDB = HasDB;
  package$commonfb.FbCtx_init_nruni5$ = FbCtx_init;
  package$commonfb.FbCtx = FbCtx;
  package$commonfb.Callable = Callable;
  package$commonfb.callPromise_wyg8o4$ = callPromise;
  package$commonfb.callable_1p69k2$ = callable;
  package$commonfb.call_wyg8o4$ = call;
  package$commonfb.FcmControl = FcmControl;
  package$commonfb.FcmCtx = FcmCtx;
  Object.defineProperty(MessagingState, 'NotSupported', {
    get: MessagingState$NotSupported_getInstance
  });
  Object.defineProperty(MessagingState, 'NotGranted', {
    get: MessagingState$NotGranted_getInstance
  });
  Object.defineProperty(MessagingState, 'Denied', {
    get: MessagingState$Denied_getInstance
  });
  MessagingState.HasToken = MessagingState$HasToken;
  package$commonfb.MessagingState = MessagingState;
  Object.defineProperty(FilterConfig, 'Companion', {
    get: FilterConfig$Companion_getInstance
  });
  package$commonfb.FilterConfig = FilterConfig;
  package$commonfb.ListScreenConfig = ListScreenConfig;
  package$commonfb.build_u50ezg$ = build_0;
  package$commonfb.stringListClick_cvv88r$ = stringListClick;
  Object.defineProperty(ListUIConfig, 'Companion', {
    get: ListUIConfig$Companion_getInstance
  });
  package$commonfb.ListUIConfig = ListUIConfig;
  package$commonfb.listUI_1us4ga$ = listUI;
  package$commonfb.showClosableList_y6f49f$ = showClosableList;
  package$commonfb.keepAlive_so67rd$ = keepAlive;
  package$commonfb.listNodes_fhengv$ = listNodes;
  package$commonfb.LoggedInCtx = LoggedInCtx;
  package$commonfb.LoggingInCtx_init_nruni5$ = LoggingInCtx_init;
  package$commonfb.LoggingInCtx = LoggingInCtx;
  package$commonfb.LoginProcessState = LoginProcessState;
  package$commonfb.LoggedUnknown = LoggedUnknown;
  package$commonfb.LoggedOut = LoggedOut;
  package$commonfb.LoggedIn = LoggedIn;
  ViewScreenConfig$Companion.prototype.ToolbarConfig = ViewScreenConfig$Companion$ToolbarConfig;
  Object.defineProperty(ViewScreenConfig, 'Companion', {
    get: ViewScreenConfig$Companion_getInstance
  });
  package$commonfb.ViewScreenConfig = ViewScreenConfig;
  package$commonfb.ViewScreenState = ViewScreenState;
  package$commonfb.build_tsg3i$ = build_1;
  package$commonfb.scrollPanel_kohbvw$ = scrollPanel;
  package$commonfb.viewFieldLabel_uy78um$ = viewFieldLabel;
  package$commonfb.viewTextField_5hmubo$ = viewTextField;
  FbCtx.prototype.get_ref_3a60a5$ = HasDB.prototype.get_ref_3a60a5$;
  FbCtx.prototype.get_ref_lg3h4r$ = HasDB.prototype.get_ref_lg3h4r$;
  Kotlin.defineModule('appsimake-commonfb', _);
  return _;
}(typeof this['appsimake-commonfb'] === 'undefined' ? {} : this['appsimake-commonfb'], kotlin, this['appsimake-commonshr'], this['appsimake-domx'], this['appsimake-commonui'], this['appsimake-firebaseshr'], this['appsimake-firebase'], this['kotlinx-coroutines-core'], this['appsimake-bootstrap'], this['appsimake-fontawesome'], this['appsimake-common']);

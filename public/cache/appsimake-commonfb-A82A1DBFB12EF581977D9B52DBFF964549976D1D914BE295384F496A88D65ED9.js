if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-firebaseshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-firebaseshr' was not found. Please, check whether 'appsimake-firebaseshr' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-commonfb'.");
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
this['appsimake-commonfb'] = function (_, Kotlin, $module$appsimake_commonui, $module$appsimake_firebase, $module$appsimake_commonshr, $module$kotlinx_coroutines_core, $module$appsimake_firebaseshr, $module$appsimake_domx, $module$appsimake_bootstrap, $module$appsimake_fontawesome, $module$appsimake_common) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var HasUIX = $module$appsimake_commonui.commonui.widget.HasUIX;
  var UiApi = $module$appsimake_commonui.commonui.UiApi;
  var FBApi = $module$appsimake_firebase.firebase.FBApi;
  var HasKillSet = $module$appsimake_commonshr.killable.HasKillSet;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var HasKillSetAndUIX = $module$appsimake_commonui.commonui.widget.HasKillSetAndUIX;
  var docRef = $module$appsimake_firebase.firebase.firestore.docRef_bi4pki$;
  var setOptionsMerge = $module$appsimake_firebase.firebase.firestore.setOptionsMerge;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var initFrom = $module$appsimake_firebaseshr.firebaseshr.initFrom_bruz9y$;
  var common = $module$appsimake_commonshr.common;
  var Var = $module$appsimake_commonshr.rx.Var;
  var Unit = Kotlin.kotlin.Unit;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var listen = $module$appsimake_firebase.firebase.firestore.listen_7dd08w$;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var Some = $module$appsimake_commonshr.common.Some;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_3k3t3o$;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_pofl4w$;
  var faTab = $module$appsimake_commonui.commonui.faTab_fyxq5k$;
  var RootPanel = $module$appsimake_commonui.commonui.RootPanel;
  var seq = $module$appsimake_commonshr.killable.seq_yzxo1x$;
  var IdState$Persisted = $module$appsimake_firebaseshr.firebaseshr.IdState.Persisted;
  var collectionRef = $module$appsimake_firebase.firebase.firestore.collectionRef_nabv8k$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_btnGroup = $module$appsimake_bootstrap.bootstrap.get_btnGroup_kre7dp$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var get_chevronLeft = $module$appsimake_fontawesome.fontawesome.get_chevronLeft_xml72e$;
  var get_btnSecondary = $module$appsimake_bootstrap.bootstrap.get_btnSecondary_kre7dp$;
  var rxDisplayed = $module$appsimake_domx.domx.rxDisplayed_y8cljz$;
  var faButton = $module$appsimake_commonui.commonui.faButton_jous2b$;
  var get_btnSuccess = $module$appsimake_bootstrap.bootstrap.get_btnSuccess_kre7dp$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_save = $module$appsimake_fontawesome.fontawesome.get_save_xml72e$;
  var get_ml1 = $module$appsimake_bootstrap.bootstrap.get_ml1_kre7dp$;
  var rxDisplayed_0 = $module$appsimake_domx.domx.rxDisplayed_4g3vmm$;
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
  var rxEnabled = $module$appsimake_domx.domx.rxEnabled_biqke9$;
  var Cls = $module$appsimake_domx.domx.Cls;
  var get_dropdownMenuRight = $module$appsimake_bootstrap.bootstrap.get_dropdownMenuRight_kre7dp$;
  var rxAnchorClick = $module$appsimake_bootstrap.bootstrap.rxAnchorClick_6ml6df$;
  var get_trashAlt = $module$appsimake_fontawesome.fontawesome.get_trashAlt_xml72e$;
  var dropdownGroup = $module$appsimake_bootstrap.bootstrap.dropdownGroup_ju7q0d$;
  var screenLayout = $module$appsimake_commonui.commonui.screenLayout_a48jtg$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var get_scrollVertical = $module$appsimake_domx.styles.get_scrollVertical_kre7dp$;
  var get_form = $module$appsimake_domx.domx.get_form_asww5s$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var set = $module$appsimake_commonshr.rx.set_atqor6$;
  var listenInput = $module$appsimake_domx.domx.listenInput_5kmoko$;
  var listenInput_0 = $module$appsimake_domx.domx.listenInput_bouo3s$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var get_isInvalid = $module$appsimake_bootstrap.bootstrap.get_isInvalid_kre7dp$;
  var rxClass = $module$appsimake_commonshr.rx.rxClass_mgxxwp$;
  var get_formGroup = $module$appsimake_bootstrap.bootstrap.get_formGroup_kre7dp$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_label = $module$appsimake_domx.domx.get_label_asww5s$;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var AppOptions = $module$appsimake_firebase.firebase.AppOptions;
  var initializeApp = firebase.initializeApp;
  var withDefaultSettings = $module$appsimake_firebase.firebase.firestore.withDefaultSettings_gwf93m$;
  var initBinder = $module$appsimake_firebase.firebase.firestore.initBinder_8mbn6p$;
  var commonui = $module$appsimake_commonui.commonui;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var getCallableRef = Kotlin.getCallableRef;
  var get_h5 = $module$appsimake_domx.domx.get_h5_asww5s$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var get_m2 = $module$appsimake_bootstrap.bootstrap.get_m2_kre7dp$;
  var get_filter = $module$appsimake_fontawesome.fontawesome.get_filter_xml72e$;
  var get_plus = $module$appsimake_fontawesome.fontawesome.get_plus_xml72e$;
  var clickEventSeq = $module$appsimake_domx.domx.clickEventSeq_af1ohy$;
  var get_borderBottom = $module$appsimake_bootstrap.bootstrap.get_borderBottom_kre7dp$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var get_dBlock = $module$appsimake_bootstrap.bootstrap.get_dBlock_kre7dp$;
  var rxText = $module$appsimake_bootstrap.bootstrap.rxText_jae58v$;
  var listAction = $module$appsimake_bootstrap.bootstrap.listAction_6t02fy$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var killable = $module$appsimake_commonshr.killable;
  var killables = $module$appsimake_commonshr.killable.killables_yzxo1x$;
  var ListenableMutableList = $module$appsimake_common.common.ListenableMutableList;
  var listenableList = $module$appsimake_domx.domx.listenableList_hqlnvw$;
  var listGroup = $module$appsimake_bootstrap.bootstrap.listGroup_t7sdcm$;
  var ListenConfig = $module$appsimake_firebase.firebase.firestore.ListenConfig;
  var listen_0 = $module$appsimake_firebase.firebase.firestore.listen_wkiigx$;
  var showClosable = $module$appsimake_commonui.commonui.showClosable_1qbaip$;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var KillableValue = $module$appsimake_commonshr.killable.KillableValue;
  var map = $module$appsimake_common.common.map_4ee665$;
  var GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
  var UIBase_init = $module$appsimake_commonui.commonui.widget.UIBase_init_kgemh3$;
  var UIBase = $module$appsimake_commonui.commonui.widget.UIBase;
  var widget = $module$appsimake_commonui.commonui.widget;
  var column_0 = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_im8gow$;
  var row = $module$appsimake_bootstrap.bootstrap.row_kre7dp$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var fa = $module$appsimake_fontawesome.fontawesome.fa_i0c0g1$;
  var FaIcon = $module$appsimake_fontawesome.fontawesome.FaIcon;
  var get_google = $module$appsimake_fontawesome.fontawesome.get_google_8ab8he$;
  var get_user = $module$appsimake_fontawesome.fontawesome.get_user_xml72e$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var JobScopeWithView = $module$appsimake_commonui.commonui.widget.JobScopeWithView;
  var UIWrap_init = $module$appsimake_commonui.commonui.widget.UIWrap_init_i8ai6l$;
  var UIWrap = $module$appsimake_commonui.commonui.widget.UIWrap;
  var throwUPAE = Kotlin.throwUPAE;
  var switchToView = $module$appsimake_commonui.commonui.widget.switchToView_ogke4d$;
  var HoleT = $module$appsimake_commonui.commonui.widget.HoleT;
  var Factory = $module$appsimake_commonui.commonui.widget.Factory;
  var report = $module$appsimake_commonshr.commonshr.report_s8jyv4$;
  var get_pen = $module$appsimake_fontawesome.fontawesome.get_pen_xml72e$;
  var get_fontWeightBold = $module$appsimake_bootstrap.bootstrap.get_fontWeightBold_kre7dp$;
  var rxTextOrEmpty = $module$appsimake_bootstrap.bootstrap.rxTextOrEmpty_3absgp$;
  Login.prototype = Object.create(UIBase.prototype);
  Login.prototype.constructor = Login;
  UnkownUser.prototype = Object.create(UIWrap.prototype);
  UnkownUser.prototype.constructor = UnkownUser;
  LoginBase.prototype = Object.create(UIBase.prototype);
  LoginBase.prototype.constructor = LoginBase;
  UserState$Unknown.prototype = Object.create(UserState.prototype);
  UserState$Unknown.prototype.constructor = UserState$Unknown;
  UserState$NotLoggedIn.prototype = Object.create(UserState.prototype);
  UserState$NotLoggedIn.prototype.constructor = UserState$NotLoggedIn;
  UserState$LoggedIn.prototype = Object.create(UserState.prototype);
  UserState$LoggedIn.prototype.constructor = UserState$LoggedIn;
  function CommonFbApi() {
  }
  CommonFbApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CommonFbApi',
    interfaces: [FBApi, UiApi, HasKillSet, HasUIX]
  };
  function get_fbapi$ObjectLiteral(this$fbapi) {
    this.this$fbapi = this$fbapi;
    this.$delegate_jvhtsl$_0 = this$fbapi;
  }
  Object.defineProperty(get_fbapi$ObjectLiteral.prototype, 'kills', {
    get: function () {
      return this.$delegate_jvhtsl$_0.kills;
    }
  });
  Object.defineProperty(get_fbapi$ObjectLiteral.prototype, 'uix', {
    get: function () {
      return this.$delegate_jvhtsl$_0.uix;
    }
  });
  get_fbapi$ObjectLiteral.prototype.rx_pn7ch0$ = function (fn) {
    return this.$delegate_jvhtsl$_0.rx_pn7ch0$(fn);
  };
  get_fbapi$ObjectLiteral.prototype.rx_rf89m5$ = function (killFirst, fn) {
    return this.$delegate_jvhtsl$_0.rx_rf89m5$(killFirst, fn);
  };
  get_fbapi$ObjectLiteral.prototype.click_3xepc3$ = function ($receiver, action) {
    return this.$delegate_jvhtsl$_0.click_3xepc3$($receiver, action);
  };
  get_fbapi$ObjectLiteral.prototype.click_ka8ib0$ = function ($receiver, action) {
    return this.$delegate_jvhtsl$_0.click_ka8ib0$($receiver, action);
  };
  get_fbapi$ObjectLiteral.prototype.click_htd9kn$ = function ($receiver, action) {
    return this.$delegate_jvhtsl$_0.click_htd9kn$($receiver, action);
  };
  get_fbapi$ObjectLiteral.prototype.containsRx_1w65cx$ = function ($receiver, value) {
    return this.$delegate_jvhtsl$_0.containsRx_1w65cx$($receiver, value);
  };
  get_fbapi$ObjectLiteral.prototype.filtered_49l5s4$ = function ($receiver, fn) {
    return this.$delegate_jvhtsl$_0.filtered_49l5s4$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.forEach_5mel8p$ = function ($receiver, fn) {
    return this.$delegate_jvhtsl$_0.forEach_5mel8p$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.forEach_igkruk$ = function ($receiver, killOrder, fn) {
    return this.$delegate_jvhtsl$_0.forEach_igkruk$($receiver, killOrder, fn);
  };
  get_fbapi$ObjectLiteral.prototype.map_i8ud5a$ = function ($receiver, fn) {
    return this.$delegate_jvhtsl$_0.map_i8ud5a$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.onChange_ocsf2x$ = function ($receiver, fn) {
    return this.$delegate_jvhtsl$_0.onChange_ocsf2x$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.process_ttzep4$ = function ($receiver, fn) {
    return this.$delegate_jvhtsl$_0.process_ttzep4$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.remAssign_7fncnf$ = function ($receiver, fn) {
    return this.$delegate_jvhtsl$_0.remAssign_7fncnf$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.rxClass_wqb4ha$ = function ($receiver, fn) {
    return this.$delegate_jvhtsl$_0.rxClass_wqb4ha$($receiver, fn);
  };
  get_fbapi$ObjectLiteral.prototype.rxClass_mjd6u9$ = function ($receiver, stl, fn) {
    return this.$delegate_jvhtsl$_0.rxClass_mjd6u9$($receiver, stl, fn);
  };
  get_fbapi$ObjectLiteral.prototype.toChannelLater_z5dyp2$ = function ($receiver) {
    return this.$delegate_jvhtsl$_0.toChannelLater_z5dyp2$($receiver);
  };
  get_fbapi$ObjectLiteral.prototype.toRxSet_jr4bl4$ = function ($receiver) {
    return this.$delegate_jvhtsl$_0.toRxSet_jr4bl4$($receiver);
  };
  get_fbapi$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [HasKillSetAndUIX, CommonFbApi]
  };
  function get_fbapi($receiver) {
    return new get_fbapi$ObjectLiteral($receiver);
  }
  function save($receiver, db) {
    return docRef($receiver.props.docWrapOrFail, db).set($receiver.props.write());
  }
  function merge($receiver, db) {
    return docRef($receiver.props.docWrapOrFail, db).set($receiver.props.merge(), setOptionsMerge());
  }
  function Coroutine$initFrom($receiver_0, dw_0, db_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$dw = dw_0;
    this.local$db = db_0;
  }
  Coroutine$initFrom.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initFrom.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initFrom.prototype.constructor = Coroutine$initFrom;
  Coroutine$initFrom.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$db === void 0)
              this.local$db = FB_getInstance().db;
            this.local$$receiver.props.persisted_11rd$(this.local$dw);
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(docRef(this.local$dw, this.local$db).get(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var s = this.result_0;
            if (s.exists) {
              initFrom(this.local$$receiver, s.data());
              this.local$tmp$ = true;
            }
             else {
              this.local$tmp$ = false;
            }

            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            console.dir(e);
            this.local$tmp$ = false;
            this.state_0 = 3;
            continue;
          case 3:
            return this.local$tmp$;
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
  function initFrom_0($receiver_0, dw_0, db_0, continuation_0, suspended) {
    var instance = new Coroutine$initFrom($receiver_0, dw_0, db_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function lazy$lambda$lambda$lambda(closure$cd, closure$rxv) {
    return function () {
      closure$cd.complete_11rb$(closure$rxv);
      return Unit;
    };
  }
  function lazy$lambda$lambda$lambda_0(closure$t, closure$rxv) {
    return function ($receiver, d) {
      closure$rxv.now = d ? common.None : new Some(closure$t);
      return Unit;
    };
  }
  function Coroutine$lazy$lambda(closure$map_0, this$lazy_0, closure$create_0, closure$kills_0, closure$db_0, id_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$map = closure$map_0;
    this.local$this$lazy = this$lazy_0;
    this.local$closure$create = closure$create_0;
    this.local$closure$kills = closure$kills_0;
    this.local$closure$db = closure$db_0;
    this.local$id = id_0;
  }
  Coroutine$lazy$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$lazy$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$lazy$lambda.prototype.constructor = Coroutine$lazy$lambda;
  Coroutine$lazy$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.local$closure$map;
            var tmp$;
            var value = $receiver.get_11rb$(this.local$id);
            if (value == null) {
              var this$lazy = this.local$this$lazy;
              var closure$create = this.local$closure$create;
              var closure$kills = this.local$closure$kills;
              var closure$db = this.local$closure$db;
              var rxv = new Var(common.None);
              var dw = this$lazy.doc_61zpoe$(this.local$id);
              var $receiver_0 = closure$create();
              $receiver_0.props;
              $receiver_0.props.persisted_11rd$(dw);
              $receiver_0.props.deleted = true;
              var t = $receiver_0;
              var cd = CompletableDeferred();
              plusAssign(closure$kills, listen(docRef(dw, closure$db), t, lazy$lambda$lambda$lambda(cd, rxv)));
              t.props.isDeleted.forEach_yk5nc8$(closure$kills, lazy$lambda$lambda$lambda_0(t, rxv));
              var answer = cd;
              $receiver.put_xwzc9p$(this.local$id, answer);
              tmp$ = answer;
            }
             else {
              tmp$ = value;
            }

            this.state_0 = 2;
            this.result_0 = tmp$.await(this);
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
  function lazy$lambda(closure$map_0, this$lazy_0, closure$create_0, closure$kills_0, closure$db_0) {
    return function (id_0, continuation_0, suspended) {
      var instance = new Coroutine$lazy$lambda(closure$map_0, this$lazy_0, closure$create_0, closure$kills_0, closure$db_0, id_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function lazy_0($receiver, kills, db, create) {
    if (db === void 0)
      db = FB_getInstance().db;
    var map = LinkedHashMap_init();
    return lazy$lambda(map, $receiver, create, kills, db);
  }
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
  TabConfig.prototype.copy_dv8t49$ = function (icon, node) {
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
    return function ($receiver) {
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
  function tabsConfig$lambda(closure$ts, closure$ks, closure$active) {
    return function ($receiver) {
      var $receiver_0 = closure$ts;
      var tmp$, tmp$_0;
      var index = 0;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var closure$ks_0 = closure$ks;
        var closure$active_0 = closure$active;
        var idx = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
        faTab($receiver, closure$ks_0, item.icon, Rx_init(closure$ks_0, tabsConfig$lambda$lambda$lambda(closure$active_0, idx)), tabsConfig$lambda$lambda$lambda_0(idx, closure$active_0));
      }
      return Unit;
    };
  }
  function tabsConfig$lambda$lambda_0(closure$root, closure$nodes) {
    return function ($receiver, idx) {
      closure$root.setRoot_b3w3xb$(closure$nodes.get_za3lpa$(idx).value);
      return Unit;
    };
  }
  function tabsConfig$lambda_0(closure$active, closure$ks, closure$nodes) {
    return function ($receiver) {
      var root = new RootPanel($receiver);
      closure$active.forEach_yk5nc8$(closure$ks, tabsConfig$lambda$lambda_0(root, closure$nodes));
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
    return new FormConfig(tabsConfig$lambda(ts, ks, active), tabsConfig$lambda_0(active, ks, nodes));
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
  EditScreenConfig.prototype.copy_pbuh8z$ = function (title, form) {
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
    return function ($receiver) {
      return closure$item.props.dirty.invoke() && closure$item.props.isValid.invoke();
    };
  }
  function build$lambda_0(closure$item) {
    return function ($receiver) {
      return closure$item.props.isPersisted.invoke();
    };
  }
  function build$lambda_1(closure$showDelete) {
    return function ($receiver) {
      return closure$showDelete.invoke();
    };
  }
  function build$lambda_2(closure$item, closure$isSaving) {
    return function ($receiver) {
      return closure$item.props.isPersisted.invoke() && !closure$isSaving.invoke();
    };
  }
  function build$lambda_3(closure$item, closure$db) {
    return function ($receiver) {
      var $receiver_0 = closure$item.props.id.invoke();
      var closure$db_0 = closure$db;
      return Kotlin.isType($receiver_0, IdState$Persisted) ? docRef($receiver_0.id, closure$db_0) : null;
    };
  }
  function build$lambda$lambda(closure$isSaving) {
    return function (it) {
      closure$isSaving.now = false;
      return Unit;
    };
  }
  function build$lambda_4(closure$idListenerSeq, closure$isSaving) {
    return function ($receiver, dr) {
      if (dr != null) {
        closure$idListenerSeq.remAssign_o14v8n$(dr.onSnapshot(build$lambda$lambda(closure$isSaving)));
      }
       else {
        closure$idListenerSeq.clear();
      }
      return Unit;
    };
  }
  function build$save(closure$canSave, closure$isSaving, closure$docRefOpt, closure$item, closure$db, closure$ks, this$build) {
    return function () {
      var tmp$;
      if (closure$canSave.now) {
        closure$isSaving.now = true;
        var tmp$_0;
        tmp$_0 = (tmp$ = closure$docRefOpt.now) != null ? tmp$.set(closure$item.props.merge(), setOptionsMerge()) : null;
        if (tmp$_0 == null) {
          var closure$item_0 = closure$item;
          var closure$db_0 = closure$db;
          var closure$ks_0 = closure$ks;
          var ref = collectionRef(closure$item_0.props.collection, closure$db_0).doc();
          closure$item_0.props.persistedFB_61zpoe$(ref.id);
          ref.set(closure$item_0.props.write());
          plusAssign(closure$ks_0, listen(ref, closure$item_0));
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
  function build$lambda$lambda$lambda$lambda$lambda$lambda(closure$ks, closure$item, closure$back) {
    return function ($receiver) {
      get_btnSecondary(get_cls($receiver));
      rxDisplayed($receiver, closure$ks, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$item));
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$back));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$item, closure$back) {
    return function (it) {
      closure$item.props.save();
      closure$back();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$ks, closure$canSave, closure$item, closure$back) {
    return function ($receiver) {
      get_btnSuccess(get_cls($receiver));
      var $receiver_0 = get_cls(get_span($receiver));
      get_save(get_fa($receiver_0));
      get_ml1($receiver_0);
      rxDisplayed_0($receiver, closure$ks, closure$canSave);
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$item, closure$back));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$item, closure$canSave) {
    return function () {
      return closure$item.props.dirty.invoke() && !closure$canSave.invoke();
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$back) {
    return function (it) {
      closure$back();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$ks, closure$item, closure$canSave, closure$back) {
    return function ($receiver) {
      get_btnDanger(get_cls($receiver));
      rxDisplayed($receiver, closure$ks, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$item, closure$canSave));
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$back));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$ks, closure$canSave) {
    return function ($receiver) {
      get_btnSuccess(get_cls($receiver));
      rxDisplayed_0($receiver, closure$ks, closure$canSave);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    get_textDanger(get_cls($receiver));
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
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$back, this$) {
    return function ($receiver) {
      invoke($receiver.anchor, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      get_backspace(get_fa(get_cls($receiver.icon)));
      invoke($receiver.text, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      clickEvent(this$, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$back));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$ks, closure$canSave, closure$back) {
    return function ($receiver) {
      rxDisplayed_0($receiver, closure$ks, closure$canSave);
      get_dropdownMenu(get_cls($receiver));
      dropdownItemAnchor($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$back, $receiver));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda(closure$ks, closure$item, closure$back, closure$canSave) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_btnGroup($receiver_0);
      get_m1($receiver_0);
      faButton($receiver, get_chevronLeft(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda(closure$ks, closure$item, closure$back));
      faButton($receiver, get_chevronLeft(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$ks, closure$canSave, closure$item, closure$back));
      faButton($receiver, get_backspace(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$ks, closure$item, closure$canSave, closure$back));
      invoke(get_dropdownSplit($receiver), build$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$ks, closure$canSave));
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$ks, closure$canSave, closure$back));
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
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$save) {
    return function (it) {
      closure$save();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$ks, closure$canSave, closure$save) {
    return function ($receiver) {
      get_btnPrimary(get_cls($receiver));
      rxEnabled($receiver, closure$ks, closure$canSave);
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_2(closure$save));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$delete) {
    return function (it) {
      closure$delete();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$ks, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      get_textDanger(get_cls($receiver));
      rxDisplayed_0($receiver, closure$ks, closure$showDelete);
      rxAnchorClick($receiver, closure$ks, closure$canDelete, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.innerText = 'Delete';
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$ks, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      invoke($receiver.anchor, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$ks, closure$showDelete, closure$canDelete, closure$delete));
      get_trashAlt(get_fa(get_cls($receiver.icon)));
      invoke($receiver.text, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$ks, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      get_dropdownMenuRight(get_cls($receiver));
      dropdownItemAnchor($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$ks, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$ks, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      rxDisplayed_0($receiver.element, closure$ks, closure$showDropDown);
      invoke($receiver.menu, build$lambda$lambda$lambda$lambda$lambda$lambda$lambda$lambda_3(closure$ks, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$ks, closure$canSave, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_btnGroup($receiver_0);
      faButton($receiver, get_save(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$ks, closure$canSave, closure$save));
      dropdownGroup($receiver, get_btnPrimary(Cls.Companion), build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_6(closure$ks, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_2(closure$ks, closure$canSave, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dFlex($receiver_0);
      get_flexRow($receiver_0);
      get_alignItemsCenter($receiver_0);
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda$lambda$lambda_4(closure$ks, closure$canSave, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda(closure$ks, closure$item, closure$back, closure$canSave, this$build, this$, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda$lambda(closure$ks, closure$item, closure$back, closure$canSave));
      this$.middleTitle_9f50g3$(build$lambda$lambda$lambda$lambda$lambda_0(this$build));
      this$.tabs.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda$lambda_1(closure$fc));
      this$.right.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda$lambda_2(closure$ks, closure$canSave, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda(closure$isSaving, closure$ks, closure$item, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      $receiver.spinner.visibility.now = closure$isSaving;
      $receiver.left.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda(closure$ks, closure$item, closure$back, closure$canSave, this$build, $receiver, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda_0(closure$fc) {
    return function ($receiver) {
      closure$fc.form($receiver);
      return Unit;
    };
  }
  function build$lambda$lambda_0(closure$isSaving, closure$ks, closure$item, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      $receiver.top_vesf63$(build$lambda$lambda$lambda(closure$isSaving, closure$ks, closure$item, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      invoke($receiver.main, build$lambda$lambda$lambda_0(closure$fc));
      return Unit;
    };
  }
  function build$lambda_5(closure$ks, closure$isSaving, closure$item, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete) {
    return function ($receiver) {
      screenLayout($receiver, closure$ks, build$lambda$lambda_0(closure$isSaving, closure$ks, closure$item, closure$back, closure$canSave, this$build, closure$fc, closure$save, closure$showDropDown, closure$showDelete, closure$canDelete, closure$delete));
      return Unit;
    };
  }
  function build($receiver, ks, panel, item, close, db) {
    item.props.rollback();
    plusAssign(ks, item.props.onDeleted.add_o14v8n$(close));
    var isSaving = new Var(false);
    var canSave = Rx_init(ks, build$lambda(item));
    var showDelete = Rx_init(ks, build$lambda_0(item));
    var showDropDown = Rx_init(ks, build$lambda_1(showDelete));
    var canDelete = Rx_init(ks, build$lambda_2(item, isSaving));
    var idListenerSeq = seq(ks);
    var docRefOpt = Rx_init(ks, build$lambda_3(item, db));
    docRefOpt.forEach_yk5nc8$(ks, build$lambda_4(idListenerSeq, isSaving));
    var save = build$save(canSave, isSaving, docRefOpt, item, db, ks, $receiver);
    var back = build$back(close);
    var delete_0 = build$delete(isSaving, item, db);
    var fc = $receiver.form(item, ks);
    panel.newRoot_iw61es$(build$lambda_5(ks, isSaving, item, back, canSave, $receiver, fc, save, showDropDown, showDelete, canDelete, delete_0));
  }
  function scrollForm$lambda$lambda(closure$fn) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      closure$fn($receiver);
      return Unit;
    };
  }
  function scrollForm$lambda(closure$fn) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dFlex($receiver_0);
      get_flexColumn($receiver_0);
      invoke(get_form($receiver), scrollForm$lambda$lambda(closure$fn));
      return Unit;
    };
  }
  function scrollForm($receiver, fn) {
    var $receiver_0 = get_cls($receiver);
    get_dFlex($receiver_0);
    get_flexColumn($receiver_0);
    get_scrollVertical($receiver_0);
    invoke(get_div($receiver), scrollForm$lambda(fn));
  }
  function textProp$lambda(closure$prop) {
    return function (it) {
      set(closure$prop.current, it);
      return Unit;
    };
  }
  function textProp($receiver, ks, prop) {
    $receiver.value = prop.current.now.getOrDefault_11rb$('');
    listenInput($receiver, textProp$lambda(prop));
    validProp($receiver, ks, prop);
  }
  function textProp$lambda_0(closure$prop) {
    return function (it) {
      set(closure$prop.current, it);
      return Unit;
    };
  }
  function textProp_0($receiver, ks, prop) {
    $receiver.value = prop.current.now.getOrDefault_11rb$('');
    listenInput_0($receiver, textProp$lambda_0(prop));
    return validProp($receiver, ks, prop);
  }
  var enumProp = defineInlineFunction('appsimake-commonfb.commonfb.enumProp_lqkmm$', wrapFunction(function () {
    var get_option = _.$$importsForInline$$['appsimake-domx'].domx.get_option_asww5s$;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var invoke = _.$$importsForInline$$['appsimake-domx'].domx.invoke_inodcj$;
    var orEmpty = _.$$importsForInline$$['appsimake-commonshr'].common.orEmpty_rw3ye5$;
    var common = _.$$importsForInline$$['appsimake-commonshr'].common;
    var Some_init = _.$$importsForInline$$['appsimake-commonshr'].common.Some;
    var changeEvent = _.$$importsForInline$$['appsimake-domx'].domx.changeEvent_e6qnhl$;
    var validProp = _.commonfb.validProp_9bxfub$;
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
    return function (E_0, isE, $receiver, ks, prop) {
      invoke(get_option($receiver), enumProp$lambda);
      var $receiver_0 = E_0.values();
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
        var element = $receiver_0[tmp$];
        invoke(get_option($receiver), enumProp$lambda$lambda(element));
      }
      $receiver.value = orEmpty(prop.current.now.map_2o04qz$(enumProp$lambda_0));
      changeEvent($receiver, enumProp$lambda_1($receiver, E_0, isE, prop));
      return validProp($receiver, ks, prop);
    };
  }));
  function validProp$lambda(closure$prop) {
    return function ($receiver) {
      return !closure$prop.isValid.invoke();
    };
  }
  function validProp($receiver, ks, prop) {
    rxClass($receiver, ks, get_isInvalid(Cls.Companion), validProp$lambda(prop));
  }
  function formGroup$lambda$lambda(closure$lbl) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      flexFixedSize($receiver_0);
      get_m1($receiver_0);
      $receiver.innerText = closure$lbl;
      return Unit;
    };
  }
  function formGroup$lambda$lambda_0(closure$l) {
    return function ($receiver) {
      closure$l.htmlFor = get_ref($receiver);
      return Unit;
    };
  }
  function formGroup$lambda(closure$lbl, closure$fn) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_formGroup($receiver_0);
      get_dFlex($receiver_0);
      get_flexColumn($receiver_0);
      flexFixedSize($receiver_0);
      var l = invoke(get_label($receiver), formGroup$lambda$lambda(closure$lbl));
      closure$fn($receiver, formGroup$lambda$lambda_0(l));
      return Unit;
    };
  }
  function formGroup($receiver, lbl, fn) {
    invoke(get_div($receiver), formGroup$lambda(lbl, fn));
  }
  function FB() {
    FB_instance = this;
    this.app_6uzye4$_0 = lazy(FB$app$lambda);
    this.db_9dwzin$_0 = lazy(FB$db$lambda(this));
    this.messagingDeferred_9z6jwi$_0 = lazy(FB$messagingDeferred$lambda(this));
    this.functionDeferred_joqurc$_0 = lazy(FB$functionDeferred$lambda(this));
    this.storage = this.app.storage();
  }
  Object.defineProperty(FB.prototype, 'app', {
    get: function () {
      return this.app_6uzye4$_0.value;
    }
  });
  Object.defineProperty(FB.prototype, 'db', {
    get: function () {
      return this.db_9dwzin$_0.value;
    }
  });
  FB.prototype.functions = function (continuation) {
    return this.functionDeferred.await(continuation);
  };
  Object.defineProperty(FB.prototype, 'messagingDeferred_0', {
    get: function () {
      return this.messagingDeferred_9z6jwi$_0.value;
    }
  });
  FB.prototype.messaging = function (continuation) {
    return this.messagingDeferred_0.await(continuation);
  };
  Object.defineProperty(FB.prototype, 'functionDeferred', {
    get: function () {
      return this.functionDeferred_joqurc$_0.value;
    }
  });
  function FB$app$lambda() {
    var $receiver = AppOptions();
    $receiver.apiKey = 'AIzaSyDuHunYFDxjJVSvhk_3POXORpN8M49ubgU';
    $receiver.authDomain = 'appsimake.firebaseapp.com';
    $receiver.databaseURL = 'https://appsimake.firebaseio.com';
    $receiver.projectId = 'appsimake';
    $receiver.storageBucket = 'appsimake.appspot.com';
    $receiver.messagingSenderId = '850641545175';
    return initializeApp($receiver);
  }
  function FB$db$lambda(this$FB) {
    return function () {
      var $receiver = withDefaultSettings(this$FB.app.firestore());
      initBinder($receiver);
      return $receiver;
    };
  }
  function Coroutine$FB$messagingDeferred$lambda$lambda(this$FB_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FB = this$FB_0;
    this.local$msg = void 0;
  }
  Coroutine$FB$messagingDeferred$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FB$messagingDeferred$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FB$messagingDeferred$lambda$lambda.prototype.constructor = Coroutine$FB$messagingDeferred$lambda$lambda;
  Coroutine$FB$messagingDeferred$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$msg = this.local$this$FB.app.messaging();
            this.state_0 = 2;
            this.result_0 = commonui.APP.registerServiceWorker(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.local$msg.useServiceWorker(tmp$);
            }

            this.local$msg.usePublicVapidKey('BOgqeELuJyp5wv-HiXzqLsxA2tqGboVZRZdrHTDnrN_DzCCJYuMA_pVBQYB0afOFvtTXSUdHi20NuNGmmtP0fvU');
            return this.local$msg;
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
  function FB$messagingDeferred$lambda$lambda(this$FB_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FB$messagingDeferred$lambda$lambda(this$FB_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FB$messagingDeferred$lambda(this$FB) {
    return function () {
      return async(coroutines.GlobalScope, void 0, void 0, FB$messagingDeferred$lambda$lambda(this$FB));
    };
  }
  function Coroutine$FB$functionDeferred$lambda$lambda(this$FB_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FB = this$FB_0;
  }
  Coroutine$FB$functionDeferred$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FB$functionDeferred$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FB$functionDeferred$lambda$lambda.prototype.constructor = Coroutine$FB$functionDeferred$lambda$lambda;
  Coroutine$FB$functionDeferred$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$FB.messagingDeferred_0.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$FB.app.functions();
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
  function FB$functionDeferred$lambda$lambda(this$FB_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FB$functionDeferred$lambda$lambda(this$FB_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FB$functionDeferred$lambda(this$FB) {
    return function () {
      return async(coroutines.GlobalScope, void 0, void 0, FB$functionDeferred$lambda$lambda(this$FB));
    };
  }
  FB.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FB',
    interfaces: []
  };
  var FB_instance = null;
  function FB_getInstance() {
    if (FB_instance === null) {
      new FB();
    }
    return FB_instance;
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
  function Callable() {
  }
  Callable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Callable',
    interfaces: []
  };
  function callPromise($receiver, app, input) {
    return app.httpsCallable($receiver.qualifiedName)(input);
  }
  function callable$ObjectLiteral(closure$app, this$callable) {
    this.fn = closure$app.httpsCallable(this$callable.qualifiedName);
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
            this.result_0 = await_0(this.$this.fn(this.local$input), this);
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
  function callable($receiver, app) {
    return new callable$ObjectLiteral(app, $receiver);
  }
  function call($receiver, app, input, continuation) {
    return callable($receiver, app).call_11rb$(input, continuation);
  }
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
  ListScreenConfig.prototype.copy_n4xrk2$ = function (title, collectionWrap, create, view, edit, itemText, filter) {
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
  function build$lambda$lambda$lambda$lambda$lambda_3(this$build) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexGrow1($receiver_0);
      get_m2($receiver_0);
      $receiver.innerText = this$build.title;
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda_0(this$build) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexRow($receiver_0);
      get_alignItemsCenter($receiver_0);
      invoke(get_h5($receiver), build$lambda$lambda$lambda$lambda$lambda_3(this$build));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7(act) {
    return !act;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$filterOpen) {
    return function (it) {
      closure$filterOpen.transform_ru8m0w$(build$lambda$lambda$lambda$lambda$lambda$lambda$lambda_7);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_4(closure$filterOpen) {
    return function ($receiver) {
      clickEvent($receiver, build$lambda$lambda$lambda$lambda$lambda$lambda_5(closure$filterOpen));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda_1(closure$killables, closure$filterOpen) {
    return function ($receiver) {
      faTab($receiver, closure$killables, get_filter(Fa.Companion), closure$filterOpen, build$lambda$lambda$lambda$lambda$lambda_4(closure$filterOpen));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_6(this$build, closure$panel, closure$displayList) {
    return function (ks, f) {
      this$build.edit(ks, closure$panel.sub(), this$build.create(), getCallableRef('displayList', function () {
        return closure$displayList(), Unit;
      }));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_5(closure$killables, this$build, closure$panel, closure$displayList) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_btnPrimary($receiver_0);
      clickEventSeq($receiver, closure$killables, build$lambda$lambda$lambda$lambda$lambda$lambda_6(this$build, closure$panel, closure$displayList));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda_2(closure$killables, this$build, closure$panel, closure$displayList) {
    return function ($receiver) {
      faButton($receiver, get_plus(Fa.Companion), build$lambda$lambda$lambda$lambda$lambda_5(closure$killables, this$build, closure$panel, closure$displayList));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda_1(closure$isBusy, closure$close, this$build, closure$filterConfig, closure$killables, closure$filterOpen, closure$panel, closure$displayList) {
    return function ($receiver) {
      $receiver.spinner.visibility.now = closure$isBusy;
      $receiver.backButton_o14v8n$(closure$close);
      $receiver.middle.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda_0(this$build));
      if (closure$filterConfig.filter) {
        $receiver.tabs.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda_1(closure$killables, closure$filterOpen));
      }
      $receiver.right.invoke_gk6m2q$(build$lambda$lambda$lambda$lambda_2(closure$killables, this$build, closure$panel, closure$displayList));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_6(closure$filterConfig) {
    return function ($receiver) {
      get_p2(get_cls($receiver));
      closure$filterConfig.panel($receiver);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda_3(closure$killables, closure$filterOpen, closure$filterConfig) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      flexFixedSize($receiver_0);
      get_scrollVertical($receiver_0);
      get_borderBottom($receiver_0);
      rxDisplayed_0($receiver, closure$killables, closure$filterOpen);
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda$lambda_6(closure$filterConfig));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_7(closure$displayList) {
    return function () {
      closure$displayList();
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda_8(closure$db, this$build, closure$panel) {
    return function (ks, item, close) {
      keepAlive(item, ks, closure$db);
      this$build.view(ks, closure$panel.sub(), item, close);
      return Unit;
    };
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_7($receiver) {
    get_scrollVertical(get_cls($receiver));
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda$lambda_8($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m2($receiver_0);
    get_dBlock($receiver_0);
    return Unit;
  }
  function build$lambda$lambda$lambda$lambda$lambda_9(closure$listRoot, closure$filterConfig, this$build, closure$killables) {
    return function (show) {
      return new ListUIConfig(closure$listRoot, closure$filterConfig.query, this$build.collectionWrap, this$build.create, void 0, void 0, void 0, build$lambda$lambda$lambda$lambda$lambda$lambda_7, build$lambda$lambda$lambda$lambda$lambda$lambda_8, stringListClick(closure$killables, this$build.itemText, show));
    };
  }
  function build$lambda$lambda$lambda$lambda_4(closure$killables, closure$displayList, closure$db, this$build, closure$panel, closure$filterConfig) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexGrow1($receiver_0);
      get_dFlex($receiver_0);
      get_flexColumn($receiver_0);
      get_bgLight($receiver_0);
      var listRoot = new RootPanel($receiver);
      showClosableList(closure$killables, build$lambda$lambda$lambda$lambda$lambda_7(closure$displayList), build$lambda$lambda$lambda$lambda$lambda_8(closure$db, this$build, closure$panel), build$lambda$lambda$lambda$lambda$lambda_9(listRoot, closure$filterConfig, this$build, closure$killables));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda_2(closure$filterConfig, closure$killables, closure$filterOpen, closure$displayList, closure$db, this$build, closure$panel) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_dFlex($receiver_0);
      get_flexColumn($receiver_0);
      if (closure$filterConfig.filter) {
        invoke(get_div($receiver), build$lambda$lambda$lambda$lambda_3(closure$killables, closure$filterOpen, closure$filterConfig));
      }
      invoke(get_div($receiver), build$lambda$lambda$lambda$lambda_4(closure$killables, closure$displayList, closure$db, this$build, closure$panel, closure$filterConfig));
      return Unit;
    };
  }
  function build$lambda$lambda_1(closure$isBusy, closure$close, this$build, closure$filterConfig, closure$killables, closure$panel, closure$displayList, closure$db) {
    return function ($receiver) {
      var filterOpen = new Var(false);
      $receiver.top_vesf63$(build$lambda$lambda$lambda_1(closure$isBusy, closure$close, this$build, closure$filterConfig, closure$killables, filterOpen, closure$panel, closure$displayList));
      invoke($receiver.main, build$lambda$lambda$lambda_2(closure$filterConfig, closure$killables, filterOpen, closure$displayList, closure$db, this$build, closure$panel));
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
    return function ($receiver) {
      return closure$itemText(closure$item);
    };
  }
  function stringListClick$lambda$lambda$lambda_0(closure$onClick, closure$item) {
    return function (it) {
      closure$onClick(closure$item);
      return Unit;
    };
  }
  function stringListClick$lambda$lambda(closure$ks, closure$itemText, closure$item, closure$onClick) {
    return function ($receiver) {
      rxText($receiver, closure$ks, stringListClick$lambda$lambda$lambda(closure$itemText, closure$item));
      clickEvent($receiver, stringListClick$lambda$lambda$lambda_0(closure$onClick, closure$item));
      return Unit;
    };
  }
  function stringListClick$lambda(closure$ks, closure$itemText, closure$onClick) {
    return function (item) {
      return listAction(document, stringListClick$lambda$lambda(closure$ks, closure$itemText, item, closure$onClick));
    };
  }
  function stringListClick(ks, itemText, onClick) {
    return stringListClick$lambda(ks, itemText, onClick);
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
    $receiver.innerText = 'The list is empty';
    return Unit;
  }
  function ListUIConfig$Companion$standardEmptyDiv$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    flexCenter($receiver_0);
    get_flexGrow1($receiver_0);
    get_p1($receiver_0);
    invoke(get_span($receiver), ListUIConfig$Companion$standardEmptyDiv$lambda$lambda);
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
  function listUI$lambda$lambda$lambda$lambda(this$, closure$ks, closure$filtered) {
    return function ($receiver) {
      this$.ulDecor($receiver);
      listenableList($receiver, closure$ks.killSet, closure$filtered, this$.itemFactory);
      return Unit;
    };
  }
  function listUI$lambda$lambda$lambda(this$, closure$ks, closure$filtered) {
    return function ($receiver) {
      this$.listDivDecor($receiver);
      listGroup($receiver, listUI$lambda$lambda$lambda$lambda(this$, closure$ks, closure$filtered));
      return Unit;
    };
  }
  function listUI$lambda$lambda$lambda$lambda_0(closure$queryRoot, closure$emptyDiv, closure$listDiv) {
    return function ($receiver, empty) {
      closure$queryRoot.setRoot_b3w3xb$(empty ? closure$emptyDiv : closure$listDiv);
      return Unit;
    };
  }
  function listUI$lambda$lambda$lambda_0(closure$filtered, closure$ks, closure$queryRoot, closure$emptyDiv, closure$listDiv) {
    return function () {
      closure$filtered.isEmptyRx.forEach_yk5nc8$(closure$ks.killSet, listUI$lambda$lambda$lambda$lambda_0(closure$queryRoot, closure$emptyDiv, closure$listDiv));
      return Unit;
    };
  }
  function listUI$lambda$lambda_0(this$, closure$killables, closure$emptyDiv) {
    return function (old, q) {
      old();
      var queryRoot = this$.root.sub();
      var $receiver = queryRoot.setHourglass();
      this$.hourglassDecor($receiver);
      var ks = killables(closure$killables);
      var list = new ListenableMutableList();
      var filtered = this$.filter(list);
      var listDiv = column(document, listUI$lambda$lambda$lambda(this$, ks, filtered));
      listen_0(q.query, ks, ListenConfig.Companion.hasProps_4r7uln$(list, this$.collectionWrap, this$.create).copy_1yl3qd$(void 0, void 0, void 0, void 0, listUI$lambda$lambda$lambda_0(filtered, ks, queryRoot, closure$emptyDiv, listDiv)));
      return ks.kill;
    };
  }
  function listUI(killables, config) {
    var emptyDiv = column(document, listUI$lambda$lambda(config));
    config.query.fold_h2yxzx$(killables, killable.Noop, listUI$lambda$lambda_0(config, killables, emptyDiv));
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
      showClosable(viewKills.killSet, showClosableList$lambda$lambda(closure$page, dit), getCallableRef('close', function () {
        return close(), Unit;
      }));
      viewKills.plusAssign_o14v8n$(dit.props.onDeleted.add_o14v8n$(showClosableList$lambda$lambda_0(close)));
      return Unit;
    };
  }
  function showClosableList(killables, redisplay, page, config) {
    var viewSeq = seq(killables);
    var onClick = showClosableList$lambda(viewSeq, redisplay, page);
    listUI(killables, config(onClick));
  }
  function listenToSnapshots$lambda() {
    return Unit;
  }
  function listenToSnapshots($receiver, killables, db, onFirst) {
    if (onFirst === void 0)
      onFirst = listenToSnapshots$lambda;
    listen(docRef($receiver.props.docWrapOrFail, db), $receiver, onFirst);
  }
  function keepAlive$lambda(closure$killListen, this$keepAlive, closure$db) {
    return function ($receiver, alive) {
      if (!alive) {
        closure$killListen.plusAssign_o14v8n$(listen(docRef(this$keepAlive.props.docWrapOrFail, closure$db), this$keepAlive));
      }
      return Unit;
    };
  }
  function keepAlive$lambda_0(closure$killListen) {
    return function () {
      closure$killListen.kill();
      return Unit;
    };
  }
  function keepAlive($receiver, killables, db) {
    var killListen = new Killables();
    $receiver.props.live.forEach_yk5nc8$(killables, keepAlive$lambda(killListen, $receiver, db));
    plusAssign(killables, keepAlive$lambda_0(killListen));
  }
  function listNodes$lambda(closure$fn) {
    return function (t) {
      var nks = new Killables();
      return new KillableValue(closure$fn(t, nks.killSet), nks.kill);
    };
  }
  function listNodes$lambda_0(kv) {
    return kv.value;
  }
  function listNodes($receiver, ks, list, fn) {
    var ns = map(list, ks, listNodes$lambda(fn));
    listenableList($receiver, ks, ns, listNodes$lambda_0);
  }
  function Login(parent, base, app, back, loggingIn, loginFailed, loginSucceeded) {
    if (back === void 0)
      back = null;
    if (loggingIn === void 0)
      loggingIn = Login_init$lambda;
    if (loginFailed === void 0)
      loginFailed = Login_init$lambda_0;
    if (loginSucceeded === void 0)
      loginSucceeded = Login_init$lambda_1;
    UIBase_init(parent, this);
    this.base = base;
    this.app = app;
    this.back = back;
    this.loggingIn = loggingIn;
    this.loginFailed = loginFailed;
    this.loginSucceeded = loginSucceeded;
    this.userState_stb1tx$_0 = UserState$NotLoggedIn_getInstance();
    this.rawView_fdn0e$_0 = ui(this);
  }
  Object.defineProperty(Login.prototype, 'userState', {
    get: function () {
      return this.userState_stb1tx$_0;
    }
  });
  Object.defineProperty(Login.prototype, 'rawView', {
    get: function () {
      return this.rawView_fdn0e$_0;
    }
  });
  function Coroutine$tryLogin_qzbeuz$($this, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$fn = fn_0;
  }
  Coroutine$tryLogin_qzbeuz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryLogin_qzbeuz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryLogin_qzbeuz$.prototype.constructor = Coroutine$tryLogin_qzbeuz$;
  Coroutine$tryLogin_qzbeuz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 1;
            this.result_0 = this.$this.loggingIn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 4;
            this.local$tmp$ = this.$this.loginSucceeded;
            this.state_0 = 2;
            this.result_0 = this.local$fn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.exceptionState_0 = 7;
            this.state_0 = 6;
            continue;
          case 4:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            this.state_0 = 5;
            this.result_0 = this.$this.loginFailed(e, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            return;
          case 7:
            throw this.exception_0;
          default:this.state_0 = 7;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 7) {
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
  Login.prototype.tryLogin_qzbeuz$ = function (fn_0, continuation_0, suspended) {
    var instance = new Coroutine$tryLogin_qzbeuz$(this, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$Login$google$lambda$lambda(this$Login_0, closure$provider_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Login = this$Login_0;
    this.local$closure$provider = closure$provider_0;
  }
  Coroutine$Login$google$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login$google$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login$google$lambda$lambda.prototype.constructor = Coroutine$Login$google$lambda$lambda;
  Coroutine$Login$google$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$Login.app.auth().signInWithPopup(this.local$closure$provider), this);
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
  function Login$google$lambda$lambda(this$Login_0, closure$provider_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Login$google$lambda$lambda(this$Login_0, closure$provider_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Login$google$lambda(this$Login_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Login = this$Login_0;
  }
  Coroutine$Login$google$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login$google$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login$google$lambda.prototype.constructor = Coroutine$Login$google$lambda;
  Coroutine$Login$google$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var provider = new GoogleAuthProvider();
            this.state_0 = 2;
            this.result_0 = this.local$this$Login.tryLogin_qzbeuz$(Login$google$lambda$lambda(this.local$this$Login, provider), this);
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
  function Login$google$lambda(this$Login_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Login$google$lambda(this$Login_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Login.prototype.google = function (continuation) {
    launch(this.base, void 0, void 0, Login$google$lambda(this));
  };
  function Coroutine$Login$guest$lambda$lambda(this$Login_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Login = this$Login_0;
  }
  Coroutine$Login$guest$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login$guest$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login$guest$lambda$lambda.prototype.constructor = Coroutine$Login$guest$lambda$lambda;
  Coroutine$Login$guest$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(this.local$this$Login.app.auth().signInAnonymously(), this);
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
  function Login$guest$lambda$lambda(this$Login_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Login$guest$lambda$lambda(this$Login_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Login$guest$lambda(this$Login_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Login = this$Login_0;
  }
  Coroutine$Login$guest$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login$guest$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login$guest$lambda.prototype.constructor = Coroutine$Login$guest$lambda;
  Coroutine$Login$guest$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$Login.tryLogin_qzbeuz$(Login$guest$lambda$lambda(this.local$this$Login), this);
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
  function Login$guest$lambda(this$Login_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Login$guest$lambda(this$Login_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Login.prototype.guest = function (continuation) {
    launch(this.base, void 0, void 0, Login$guest$lambda(this));
  };
  function Coroutine$Login_init$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$Login_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login_init$lambda.prototype.constructor = Coroutine$Login_init$lambda;
  Coroutine$Login_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
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
  function Login_init$lambda(continuation_0, suspended) {
    var instance = new Coroutine$Login_init$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Login_init$lambda_0(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$Login_init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login_init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login_init$lambda_0.prototype.constructor = Coroutine$Login_init$lambda_0;
  Coroutine$Login_init$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
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
  function Login_init$lambda_0(it_0, continuation_0, suspended) {
    var instance = new Coroutine$Login_init$lambda_0(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Login_init$lambda_1(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$Login_init$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Login_init$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Login_init$lambda_1.prototype.constructor = Coroutine$Login_init$lambda_1;
  Coroutine$Login_init$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
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
  function Login_init$lambda_1(it_0, continuation_0, suspended) {
    var instance = new Coroutine$Login_init$lambda_1(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  Login.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Login',
    interfaces: [UserStateView, UIBase]
  };
  function Coroutine$ui$lambda$lambda$lambda$lambda(closure$bck_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$bck = closure$bck_0;
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
            return this.local$closure$bck();
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
  function ui$lambda$lambda$lambda$lambda(closure$bck_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda(closure$bck_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda($receiver) {
    get_m1(get_cls($receiver));
    $receiver.innerText = 'Signing In';
    return Unit;
  }
  function ui$lambda$lambda($receiver) {
    invoke(get_h5($receiver), ui$lambda$lambda$lambda);
    return Unit;
  }
  function ui$lambda$lambda$butt$lambda$lambda$lambda$lambda($receiver) {
    get_fw($receiver);
    return Unit;
  }
  function ui$lambda$lambda$butt$lambda$lambda(closure$faIcon) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      var closure$faIcon_0 = closure$faIcon;
      get_m1($receiver_0);
      fa($receiver_0, closure$faIcon_0, ui$lambda$lambda$butt$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function ui$lambda$lambda$butt$lambda$lambda_0(closure$label) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      $receiver.innerText = closure$label;
      return Unit;
    };
  }
  function ui$lambda$lambda$butt(this$, this$ui) {
    return function (faIcon, label, fn) {
      var $receiver = get_insert(get_widget(this$)).button;
      this$ui.click_3xepc3$($receiver, fn);
      $receiver.primary;
      var $receiver_0 = $receiver.cls;
      get_m1($receiver_0);
      get_p1($receiver_0);
      row($receiver_0);
      get_alignItemsCenter($receiver_0);
      invoke($receiver.icon, ui$lambda$lambda$butt$lambda$lambda(faIcon));
      invoke($receiver.text, ui$lambda$lambda$butt$lambda$lambda_0(label));
      return $receiver;
    };
  }
  function ui$lambda$lambda$lambda_0($receiver) {
    get_google($receiver);
    return Unit;
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
            this.result_0 = this.local$this$ui.google(this);
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
  function ui$lambda$lambda$lambda_1(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda_2($receiver) {
    get_user($receiver);
    return Unit;
  }
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
            this.state_0 = 2;
            this.result_0 = this.local$this$ui.guest(this);
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
  function ui$lambda$lambda$lambda_3(this$ui_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda_0(this$ui_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      var butt = ui$lambda$lambda$butt($receiver, this$ui);
      butt(FaIcon.Companion.faBrands_xqq80m$(ui$lambda$lambda$lambda_0), 'Sign in with Google', ui$lambda$lambda$lambda_1(this$ui));
      butt(FaIcon.Companion.fa_k1ws5a$(ui$lambda$lambda$lambda_2), 'Continue as guest', ui$lambda$lambda$lambda_3(this$ui));
      return Unit;
    };
  }
  function ui$lambda(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      get_flexGrow1($receiver_0);
      column_0($receiver_0);
      get_alignItemsCenter($receiver_0);
      column($receiver, ui$lambda$lambda_0(this$ui));
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var tmp$;
    $receiver_0.alignItemsCenter;
    if ((tmp$ = $receiver.back) != null) {
      var $receiver_1 = $receiver_0.left.button;
      $receiver_1.m1p2;
      $receiver_1.secondary;
      get_chevronLeft($receiver_1.fa);
      $receiver.click_3xepc3$($receiver_1, ui$lambda$lambda$lambda$lambda(tmp$));
    }
    invoke($receiver_0.middle, ui$lambda$lambda);
    return new TopAndContent($receiver_0.node, invoke(get_div(document), ui$lambda($receiver)));
  }
  function LoginBasePath() {
  }
  LoginBasePath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LoginBasePath',
    interfaces: []
  };
  function UserStateView() {
  }
  UserStateView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UserStateView',
    interfaces: [JobScopeWithView]
  };
  function UnkownUser(parent) {
    UIWrap_init(parent, TopAndContent.Companion.hourglass, this);
    this.userState_7b6zhk$_0 = UserState$Unknown_getInstance();
  }
  Object.defineProperty(UnkownUser.prototype, 'userState', {
    get: function () {
      return this.userState_7b6zhk$_0;
    }
  });
  UnkownUser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnkownUser',
    interfaces: [UserStateView, UIWrap]
  };
  function LoginBase(parent) {
    UIBase_init(parent, this);
    this.loginBase_a0jenj$_0 = this;
    this.slots = new LoginBase$Slots();
    this.rawView_sx79q4$_0 = ui_0(this);
    this.contentHole = new HoleT(LoginBase$contentHole$lambda(this), LoginBase$contentHole$lambda_0(this));
    var initial = new UnkownUser(this);
    var fn = this.contentHole;
    this.content = this.views_3ys1gp$(initial, fn);
  }
  Object.defineProperty(LoginBase.prototype, 'loginBase', {
    get: function () {
      return this.loginBase_a0jenj$_0;
    }
  });
  function LoginBase$Slots() {
    this.top_6sve31$_0 = this.top_6sve31$_0;
    this.main_2cen6v$_0 = this.main_2cen6v$_0;
    this.toasts_d0eltm$_0 = this.toasts_d0eltm$_0;
  }
  Object.defineProperty(LoginBase$Slots.prototype, 'top', {
    get: function () {
      if (this.top_6sve31$_0 == null)
        return throwUPAE('top');
      return this.top_6sve31$_0;
    },
    set: function (top) {
      this.top_6sve31$_0 = top;
    }
  });
  Object.defineProperty(LoginBase$Slots.prototype, 'main', {
    get: function () {
      if (this.main_2cen6v$_0 == null)
        return throwUPAE('main');
      return this.main_2cen6v$_0;
    },
    set: function (main) {
      this.main_2cen6v$_0 = main;
    }
  });
  Object.defineProperty(LoginBase$Slots.prototype, 'toasts', {
    get: function () {
      if (this.toasts_d0eltm$_0 == null)
        return throwUPAE('toasts');
      return this.toasts_d0eltm$_0;
    },
    set: function (toasts) {
      this.toasts_d0eltm$_0 = toasts;
    }
  });
  LoginBase$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(LoginBase.prototype, 'rawView', {
    get: function () {
      return this.rawView_sx79q4$_0;
    }
  });
  function Coroutine$enablePersistenceAndWait_gwf93m$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$enablePersistenceAndWait_gwf93m$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$enablePersistenceAndWait_gwf93m$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$enablePersistenceAndWait_gwf93m$.prototype.constructor = Coroutine$enablePersistenceAndWait_gwf93m$;
  Coroutine$enablePersistenceAndWait_gwf93m$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Enabling persistence...');
            var $receiver = {};
            $receiver.experimentalTabSynchronization = true;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver.enablePersistence($receiver), this);
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
  LoginBase.prototype.enablePersistenceAndWait_gwf93m$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$enablePersistenceAndWait_gwf93m$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$disableNetworkAndWait_gwf93m$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$disableNetworkAndWait_gwf93m$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$disableNetworkAndWait_gwf93m$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$disableNetworkAndWait_gwf93m$.prototype.constructor = Coroutine$disableNetworkAndWait_gwf93m$;
  Coroutine$disableNetworkAndWait_gwf93m$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Switching to offline data...');
            this.state_0 = 2;
            this.result_0 = await_0(this.local$$receiver.disableNetwork(), this);
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
  LoginBase.prototype.disableNetworkAndWait_gwf93m$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$disableNetworkAndWait_gwf93m$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$LoginBase$switchToUnkownUser$lambda(this$LoginBase_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$LoginBase = this$LoginBase_0;
  }
  Coroutine$LoginBase$switchToUnkownUser$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginBase$switchToUnkownUser$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginBase$switchToUnkownUser$lambda.prototype.constructor = Coroutine$LoginBase$switchToUnkownUser$lambda;
  Coroutine$LoginBase$switchToUnkownUser$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new UnkownUser(this.local$this$LoginBase);
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
  function LoginBase$switchToUnkownUser$lambda(this$LoginBase_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoginBase$switchToUnkownUser$lambda(this$LoginBase_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$switchToUnkownUser($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$switchToUnkownUser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchToUnkownUser.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchToUnkownUser.prototype.constructor = Coroutine$switchToUnkownUser;
  Coroutine$switchToUnkownUser.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = switchToView(this.$this.content, LoginBase$switchToUnkownUser$lambda(this.$this), this);
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
  LoginBase.prototype.switchToUnkownUser = function (continuation_0, suspended) {
    var instance = new Coroutine$switchToUnkownUser(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function LoginBase$reportError$lambda(closure$d) {
    return function ($receiver) {
      $receiver.danger_61zpoe$('Sign in failed: ' + (closure$d != null ? closure$d.message : null).toString());
      return Unit;
    };
  }
  LoginBase.prototype.reportError_za3rmp$ = function (d) {
    this.slots.toasts(LoginBase$reportError$lambda(d));
  };
  function Coroutine$LoginBase$start$lambda$lambda$lambda(closure$loggedInView_0, closure$st_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$loggedInView = closure$loggedInView_0;
    this.local$closure$st = closure$st_0;
  }
  Coroutine$LoginBase$start$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginBase$start$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginBase$start$lambda$lambda$lambda.prototype.constructor = Coroutine$LoginBase$start$lambda$lambda$lambda;
  Coroutine$LoginBase$start$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$loggedInView(this.local$closure$st.user, this);
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
  function LoginBase$start$lambda$lambda$lambda(closure$loggedInView_0, closure$st_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoginBase$start$lambda$lambda$lambda(closure$loggedInView_0, closure$st_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoginBase$start$lambda$lambda$lambda_0(closure$notLoggedInView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$notLoggedInView = closure$notLoggedInView_0;
  }
  Coroutine$LoginBase$start$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginBase$start$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginBase$start$lambda$lambda$lambda_0.prototype.constructor = Coroutine$LoginBase$start$lambda$lambda$lambda_0;
  Coroutine$LoginBase$start$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$notLoggedInView(this);
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
  function LoginBase$start$lambda$lambda$lambda_0(closure$notLoggedInView_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoginBase$start$lambda$lambda$lambda_0(closure$notLoggedInView_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LoginBase$start$lambda$lambda(closure$st_0, this$LoginBase_0, closure$loggedInView_0, closure$notLoggedInView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$st = closure$st_0;
    this.local$this$LoginBase = this$LoginBase_0;
    this.local$closure$loggedInView = closure$loggedInView_0;
    this.local$closure$notLoggedInView = closure$notLoggedInView_0;
  }
  Coroutine$LoginBase$start$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LoginBase$start$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LoginBase$start$lambda$lambda.prototype.constructor = Coroutine$LoginBase$start$lambda$lambda;
  Coroutine$LoginBase$start$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            tmp$ = this.local$closure$st;
            if (Kotlin.isType(tmp$, UserState$LoggedIn)) {
              commonui.globalStatus.remAssign_11rb$('Logging in...');
              this.state_0 = 5;
              this.result_0 = switchToView(this.local$this$LoginBase.content, LoginBase$start$lambda$lambda$lambda(this.local$closure$loggedInView, this.local$closure$st), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(tmp$, UserState$NotLoggedIn)) {
                commonui.globalStatus.remAssign_11rb$('Logging out...');
                this.state_0 = 3;
                this.result_0 = switchToView(this.local$this$LoginBase.content, LoginBase$start$lambda$lambda$lambda_0(this.local$closure$notLoggedInView), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.state_0 = 2;
                this.result_0 = this.local$this$LoginBase.switchToUnkownUser(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            return Unit;
          case 6:
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
  function LoginBase$start$lambda$lambda(closure$st_0, this$LoginBase_0, closure$loggedInView_0, closure$notLoggedInView_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LoginBase$start$lambda$lambda(closure$st_0, this$LoginBase_0, closure$loggedInView_0, closure$notLoggedInView_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function LoginBase$start$lambda(this$LoginBase, closure$loggedInView, closure$notLoggedInView) {
    return function ($receiver, st) {
      this$LoginBase.exec(LoginBase$start$lambda$lambda(st, this$LoginBase, closure$loggedInView, closure$notLoggedInView));
      return Unit;
    };
  }
  function Coroutine$start_5wdgum$($this, $receiver_0, loggedInView_0, notLoggedInView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
    this.local$loggedInView = loggedInView_0;
    this.local$notLoggedInView = notLoggedInView_0;
  }
  Coroutine$start_5wdgum$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$start_5wdgum$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$start_5wdgum$.prototype.constructor = Coroutine$start_5wdgum$;
  Coroutine$start_5wdgum$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Checking user...');
            this.state_0 = 2;
            this.result_0 = runUserState_0(this.$this, this.local$$receiver, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.forEach_5mel8p$(this.result_0, LoginBase$start$lambda(this.$this, this.local$loggedInView, this.local$notLoggedInView));
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
  LoginBase.prototype.start_5wdgum$ = function ($receiver_0, loggedInView_0, notLoggedInView_0, continuation_0, suspended) {
    var instance = new Coroutine$start_5wdgum$(this, $receiver_0, loggedInView_0, notLoggedInView_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function LoginBase$contentHole$lambda(this$LoginBase) {
    return function ($receiver) {
      var $receiver_0 = $receiver.topbar;
      this$LoginBase.slots.top.prepareOrNull($receiver_0);
      var $receiver_1 = $receiver.content;
      this$LoginBase.slots.main.prepareOrNull($receiver_1);
      return Unit;
    };
  }
  function LoginBase$contentHole$lambda_0(this$LoginBase) {
    return function (cv) {
      this$LoginBase.slots.top.remAssign_11rb$(cv != null ? cv.topbar : null);
      this$LoginBase.slots.main.remAssign_11rb$(cv != null ? cv.content : null);
      return Unit;
    };
  }
  LoginBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginBase',
    interfaces: [LoginBasePath, UIBase]
  };
  function Coroutine$ui$lambda$lambda$lambda$lambda$lambda(closure$tsts_0, closure$fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$tsts = closure$tsts_0;
    this.local$closure$fn = closure$fn_0;
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
            var $receiver = this.local$closure$tsts.toast;
            this.local$closure$fn($receiver);
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
  function ui$lambda$lambda$lambda$lambda$lambda(closure$tsts_0, closure$fn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ui$lambda$lambda$lambda$lambda$lambda(closure$tsts_0, closure$fn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ui$lambda$lambda$lambda$lambda_0(this$ui, closure$tsts) {
    return function (fn) {
      this$ui.exec(ui$lambda$lambda$lambda$lambda$lambda(closure$tsts, fn));
      return Unit;
    };
  }
  function ui_0($receiver) {
    var boot = $receiver.slots;
    var $receiver_0 = (new Factory()).screen;
    boot.top = $receiver_0.slots.top;
    boot.main = $receiver_0.toastSlots.content;
    boot.toasts = ui$lambda$lambda$lambda$lambda_0($receiver, $receiver_0.toastSlots.toasts);
    return $receiver_0.node;
  }
  function HasUserState() {
  }
  HasUserState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasUserState',
    interfaces: []
  };
  function UserState() {
  }
  function UserState$Unknown() {
    UserState$Unknown_instance = this;
    UserState.call(this);
  }
  UserState$Unknown.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Unknown',
    interfaces: [UserState]
  };
  var UserState$Unknown_instance = null;
  function UserState$Unknown_getInstance() {
    if (UserState$Unknown_instance === null) {
      new UserState$Unknown();
    }
    return UserState$Unknown_instance;
  }
  function UserState$NotLoggedIn() {
    UserState$NotLoggedIn_instance = this;
    UserState.call(this);
  }
  UserState$NotLoggedIn.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NotLoggedIn',
    interfaces: [UserState]
  };
  var UserState$NotLoggedIn_instance = null;
  function UserState$NotLoggedIn_getInstance() {
    if (UserState$NotLoggedIn_instance === null) {
      new UserState$NotLoggedIn();
    }
    return UserState$NotLoggedIn_instance;
  }
  function UserState$LoggedIn(user) {
    UserState.call(this);
    this.user = user;
  }
  UserState$LoggedIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoggedIn',
    interfaces: [UserState]
  };
  UserState$LoggedIn.prototype.component1 = function () {
    return this.user;
  };
  UserState$LoggedIn.prototype.copy_v1eir6$ = function (user) {
    return new UserState$LoggedIn(user === void 0 ? this.user : user);
  };
  UserState$LoggedIn.prototype.toString = function () {
    return 'LoggedIn(user=' + Kotlin.toString(this.user) + ')';
  };
  UserState$LoggedIn.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.user) | 0;
    return result;
  };
  UserState$LoggedIn.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.user, other.user))));
  };
  UserState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserState',
    interfaces: []
  };
  function Coroutine$runUserState$lambda($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$runUserState$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runUserState$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runUserState$lambda.prototype.constructor = Coroutine$runUserState$lambda;
  Coroutine$runUserState$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it;
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
  function runUserState$lambda($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$runUserState$lambda($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function runUserState($receiver, app, fn, continuation) {
    if (app === void 0)
      app = FB_getInstance().app;
    if (fn === void 0)
      fn = runUserState$lambda;
    return runUserState_0($receiver, app.auth(), fn, continuation);
  }
  function Coroutine$runUserState$lambda_0($receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$runUserState$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runUserState$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runUserState$lambda_0.prototype.constructor = Coroutine$runUserState$lambda_0;
  Coroutine$runUserState$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$it;
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
  function runUserState$lambda_0($receiver_0, it_0, continuation_0, suspended) {
    var instance = new Coroutine$runUserState$lambda_0($receiver_0, it_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function runUserState$lambda_1(closure$rxv) {
    return function (u) {
      var tmp$, tmp$_0;
      tmp$_0 = closure$rxv;
      if (u == null) {
        tmp$ = UserState$NotLoggedIn_getInstance();
      }
       else {
        tmp$ = new UserState$LoggedIn(u);
      }
      tmp$_0.now = tmp$;
      return Unit;
    };
  }
  function runUserState$lambda_2(closure$rxv) {
    return function (e) {
      report(e);
      closure$rxv.now = UserState$NotLoggedIn_getInstance();
      return Unit;
    };
  }
  function runUserState_0($receiver, auth, fn, continuation) {
    if (auth === void 0)
      auth = FB_getInstance().app.auth();
    if (fn === void 0)
      fn = runUserState$lambda_0;
    var rxv = new Var(UserState$Unknown_getInstance());
    plusAssign($receiver.kills, auth.onAuthStateChanged(runUserState$lambda_1(rxv), runUserState$lambda_2(rxv)));
    return $receiver.mapAsync_qco7w4$(rxv, fn, continuation);
  }
  function toUser$lambda(this$toUser) {
    return function ($receiver) {
      var u = this$toUser.invoke();
      if (Kotlin.isType(u, UserState$LoggedIn))
        return u.user;
      else
        return null;
    };
  }
  function toUser($receiver, ks) {
    return Rx_init(ks, toUser$lambda($receiver));
  }
  function toUid$lambda(this$toUid) {
    return function ($receiver) {
      var tmp$;
      return (tmp$ = this$toUid.invoke()) != null ? tmp$.uid : null;
    };
  }
  function toUid($receiver, ks) {
    return Rx_init(ks, toUid$lambda($receiver));
  }
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
  function ViewScreenConfig$Companion$editButton$lambda$lambda(closure$edit) {
    return function (ks, f) {
      closure$edit(ks);
      return Unit;
    };
  }
  function ViewScreenConfig$Companion$editButton$lambda(closure$killables, closure$edit) {
    return function ($receiver) {
      get_btnPrimary(get_cls($receiver));
      clickEventSeq($receiver, closure$killables, ViewScreenConfig$Companion$editButton$lambda$lambda(closure$edit));
      return Unit;
    };
  }
  ViewScreenConfig$Companion.prototype.editButton_lh95ph$ = function ($receiver, killables, edit) {
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
  ViewScreenConfig$Companion$ToolbarConfig.prototype.copy_jg9i76$ = function (state, title, edit) {
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
      get_m1(get_cls(this$ViewScreenConfig$.editButton_lh95ph$($receiver, this$.state.killables, this$.edit)));
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
  ViewScreenConfig.prototype.copy_1oy0dd$ = function (title, edit, top, view) {
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
  ViewScreenState.prototype.copy_3yyxhn$ = function (killables, panel, redisplay, close) {
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
  function build$lambda$lambda$lambda$lambda_5(this$build, closure$panel, closure$item, closure$displayViewer) {
    return function (eks) {
      this$build.edit(eks, closure$panel.sub(), closure$item, getCallableRef('displayViewer', function () {
        return closure$displayViewer(), Unit;
      }));
      return Unit;
    };
  }
  function build$lambda$lambda$lambda_3(this$build, closure$state, closure$panel, closure$item, closure$displayViewer) {
    return function ($receiver) {
      this$build.top($receiver, new ViewScreenConfig$Companion$ToolbarConfig(closure$state, this$build.title, build$lambda$lambda$lambda$lambda_5(this$build, closure$panel, closure$item, closure$displayViewer)));
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
  function scrollPanel$lambda(closure$fn) {
    return function ($receiver) {
      get_p1(get_cls($receiver));
      closure$fn($receiver);
      return Unit;
    };
  }
  function scrollPanel($receiver, fn) {
    get_scrollVertical(get_cls($receiver));
    return invoke(get_div($receiver), scrollPanel$lambda(fn));
  }
  function viewFieldLabel$lambda(closure$title) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_m1($receiver_0);
      get_fontWeightBold($receiver_0);
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
  function viewTextField($receiver, ks, label, fn) {
    viewFieldLabel($receiver, label);
    rxTextOrEmpty(invoke(get_span($receiver), viewTextField$lambda), ks, fn);
  }
  var package$commonfb = _.commonfb || (_.commonfb = {});
  package$commonfb.CommonFbApi = CommonFbApi;
  package$commonfb.get_fbapi_qehkn7$ = get_fbapi;
  package$commonfb.save_t7bci5$ = save;
  package$commonfb.merge_t7bci5$ = merge;
  package$commonfb.initFrom_ljircy$ = initFrom_0;
  package$commonfb.lazy_muuc72$ = lazy_0;
  package$commonfb.TabConfig = TabConfig;
  package$commonfb.tabsConfig_fe1mfn$ = tabsConfig;
  package$commonfb.FormConfig = FormConfig;
  package$commonfb.EditScreenConfig = EditScreenConfig;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$commonfb.build_5d4dkt$ = build;
  package$commonfb.scrollForm_q3s9yp$ = scrollForm;
  package$commonfb.textProp_isgl86$ = textProp;
  package$commonfb.textProp_ocddd6$ = textProp_0;
  $$importsForInline$$['appsimake-domx'] = $module$appsimake_domx;
  package$commonfb.validProp_9bxfub$ = validProp;
  package$commonfb.formGroup_9svwsq$ = formGroup;
  Object.defineProperty(package$commonfb, 'FB', {
    get: FB_getInstance
  });
  package$commonfb.HasDB = HasDB;
  package$commonfb.Callable = Callable;
  package$commonfb.callPromise_c06vjk$ = callPromise;
  package$commonfb.callable_mnr2wa$ = callable;
  package$commonfb.call_c06vjk$ = call;
  Object.defineProperty(FilterConfig, 'Companion', {
    get: FilterConfig$Companion_getInstance
  });
  package$commonfb.FilterConfig = FilterConfig;
  package$commonfb.ListScreenConfig = ListScreenConfig;
  package$commonfb.build_lvrjmf$ = build_0;
  package$commonfb.stringListClick_l484g3$ = stringListClick;
  Object.defineProperty(ListUIConfig, 'Companion', {
    get: ListUIConfig$Companion_getInstance
  });
  package$commonfb.ListUIConfig = ListUIConfig;
  package$commonfb.listUI_efqa2t$ = listUI;
  package$commonfb.showClosableList_og1j2l$ = showClosableList;
  package$commonfb.listenToSnapshots_5meen9$ = listenToSnapshots;
  package$commonfb.keepAlive_k6jxlg$ = keepAlive;
  package$commonfb.listNodes_6zj3dg$ = listNodes;
  var package$login = package$commonfb.login || (package$commonfb.login = {});
  package$login.Login = Login;
  package$login.ui_c7phaq$ = ui;
  var package$loginbase = package$commonfb.loginbase || (package$commonfb.loginbase = {});
  package$loginbase.LoginBasePath = LoginBasePath;
  package$loginbase.UserStateView = UserStateView;
  package$loginbase.UnkownUser = UnkownUser;
  LoginBase.Slots = LoginBase$Slots;
  $$importsForInline$$['appsimake-commonui'] = $module$appsimake_commonui;
  package$loginbase.LoginBase = LoginBase;
  package$loginbase.ui_wzvor4$ = ui_0;
  package$commonfb.HasUserState = HasUserState;
  Object.defineProperty(UserState, 'Unknown', {
    get: UserState$Unknown_getInstance
  });
  Object.defineProperty(UserState, 'NotLoggedIn', {
    get: UserState$NotLoggedIn_getInstance
  });
  UserState.LoggedIn = UserState$LoggedIn;
  package$commonfb.UserState = UserState;
  package$commonfb.runUserState_201dsr$ = runUserState;
  package$commonfb.runUserState_6d92gv$ = runUserState_0;
  package$commonfb.toUser_e06ocd$ = toUser;
  package$commonfb.toUid_i2s2hb$ = toUid;
  ViewScreenConfig$Companion.prototype.ToolbarConfig = ViewScreenConfig$Companion$ToolbarConfig;
  Object.defineProperty(ViewScreenConfig, 'Companion', {
    get: ViewScreenConfig$Companion_getInstance
  });
  package$commonfb.ViewScreenConfig = ViewScreenConfig;
  package$commonfb.ViewScreenState = ViewScreenState;
  package$commonfb.build_uz0q77$ = build_1;
  package$commonfb.scrollPanel_kohbvw$ = scrollPanel;
  package$commonfb.viewFieldLabel_uy78um$ = viewFieldLabel;
  package$commonfb.viewTextField_woqy2s$ = viewTextField;
  CommonFbApi.prototype.click_3xepc3$ = HasUIX.prototype.click_3xepc3$;
  CommonFbApi.prototype.click_ka8ib0$ = HasUIX.prototype.click_ka8ib0$;
  CommonFbApi.prototype.click_htd9kn$ = HasUIX.prototype.click_htd9kn$;
  CommonFbApi.prototype.rx_pn7ch0$ = UiApi.prototype.rx_pn7ch0$;
  CommonFbApi.prototype.rx_rf89m5$ = UiApi.prototype.rx_rf89m5$;
  CommonFbApi.prototype.containsRx_1w65cx$ = UiApi.prototype.containsRx_1w65cx$;
  CommonFbApi.prototype.filtered_49l5s4$ = UiApi.prototype.filtered_49l5s4$;
  CommonFbApi.prototype.forEach_5mel8p$ = UiApi.prototype.forEach_5mel8p$;
  CommonFbApi.prototype.forEach_igkruk$ = UiApi.prototype.forEach_igkruk$;
  CommonFbApi.prototype.map_i8ud5a$ = UiApi.prototype.map_i8ud5a$;
  CommonFbApi.prototype.onChange_ocsf2x$ = UiApi.prototype.onChange_ocsf2x$;
  CommonFbApi.prototype.process_ttzep4$ = UiApi.prototype.process_ttzep4$;
  CommonFbApi.prototype.remAssign_ah7wag$ = UiApi.prototype.remAssign_ah7wag$;
  CommonFbApi.prototype.remAssign_7fncnf$ = UiApi.prototype.remAssign_7fncnf$;
  CommonFbApi.prototype.rxClass_wqb4ha$ = UiApi.prototype.rxClass_wqb4ha$;
  CommonFbApi.prototype.rxClass_mjd6u9$ = UiApi.prototype.rxClass_mjd6u9$;
  CommonFbApi.prototype.rxEnabled_y5ufnr$ = UiApi.prototype.rxEnabled_y5ufnr$;
  CommonFbApi.prototype.toChannelLater_z5dyp2$ = UiApi.prototype.toChannelLater_z5dyp2$;
  CommonFbApi.prototype.toRxSet_jr4bl4$ = UiApi.prototype.toRxSet_jr4bl4$;
  CommonFbApi.prototype.visibility_dakdiv$ = UiApi.prototype.visibility_dakdiv$;
  CommonFbApi.prototype.get_ids_wjz35z$ = FBApi.prototype.get_ids_wjz35z$;
  get_fbapi$ObjectLiteral.prototype.remAssign_ah7wag$ = CommonFbApi.prototype.remAssign_ah7wag$;
  get_fbapi$ObjectLiteral.prototype.rxEnabled_y5ufnr$ = CommonFbApi.prototype.rxEnabled_y5ufnr$;
  get_fbapi$ObjectLiteral.prototype.visibility_dakdiv$ = CommonFbApi.prototype.visibility_dakdiv$;
  get_fbapi$ObjectLiteral.prototype.get_ids_wjz35z$ = CommonFbApi.prototype.get_ids_wjz35z$;
  UserStateView.prototype.get_childUIWrap_irb06o$ = JobScopeWithView.prototype.get_childUIWrap_irb06o$;
  UserStateView.prototype.withChild_p3so7j$ = JobScopeWithView.prototype.withChild_p3so7j$;
  UserStateView.prototype.switchToWrap_t6rg6d$ = JobScopeWithView.prototype.switchToWrap_t6rg6d$;
  Kotlin.defineModule('appsimake-commonfb', _);
  return _;
}(typeof this['appsimake-commonfb'] === 'undefined' ? {} : this['appsimake-commonfb'], kotlin, this['appsimake-commonui'], this['appsimake-firebase'], this['appsimake-commonshr'], this['kotlinx-coroutines-core'], this['appsimake-firebaseshr'], this['appsimake-domx'], this['appsimake-bootstrap'], this['appsimake-fontawesome'], this['appsimake-common']);

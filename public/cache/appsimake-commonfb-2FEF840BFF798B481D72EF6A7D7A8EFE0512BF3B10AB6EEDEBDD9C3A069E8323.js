if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-firebase'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-firebase' was not found. Please, check whether 'appsimake-firebase' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-commonui'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-commonui' was not found. Please, check whether 'appsimake-commonui' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-commonfb'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonfb'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-commonfb'.");
}
this['appsimake-commonfb'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_firebase, $module$appsimake_commonui, $module$kotlinx_coroutines_core, $module$appsimake_fontawesome, $module$appsimake_domx, $module$appsimake_bootstrap) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var DbKillsApi = $module$appsimake_firebase.firebase.DbKillsApi;
  var HasRedisplay = $module$appsimake_commonui.commonui.HasRedisplay;
  var HasBackRedisplay = $module$appsimake_commonui.commonui.HasBackRedisplay;
  var CsDbKillsApi = $module$appsimake_firebase.firebase.CsDbKillsApi;
  var KillsUixApi = $module$appsimake_commonui.commonui.KillsUixApi;
  var CsApiCommonui = $module$appsimake_commonui.commonui.CsApiCommonui;
  var KillsApiCommonui = $module$appsimake_commonui.commonui.KillsApiCommonui;
  var BackKillsUixApi = $module$appsimake_commonui.commonui.BackKillsUixApi;
  var Api = $module$appsimake_commonshr.commonshr.Api;
  var KillsApi = $module$appsimake_commonshr.commonshr.KillsApi;
  var KillsApiFirebase = $module$appsimake_firebase.firebase.KillsApiFirebase;
  var HasDb = $module$appsimake_firebase.firebase.HasDb;
  var HasEdit = $module$appsimake_commonui.commonui.HasEdit;
  var HasKills = $module$appsimake_commonshr.commonshr.HasKills;
  var HasCsDbKills = $module$appsimake_firebase.firebase.HasCsDbKills;
  var HasCsToast = $module$appsimake_commonui.commonui.HasCsToast;
  var HasUix = $module$appsimake_commonui.commonui.HasUix;
  var HasKillsUix = $module$appsimake_commonui.commonui.HasKillsUix;
  var HasDbFcmKillsLibUser = $module$appsimake_firebase.firebase.HasDbFcmKillsLibUser;
  var toFsDoc = $module$appsimake_commonshr.commonshr.toFsDoc_ihdkly$;
  var live = $module$appsimake_firebase.firebase.firestore.live_no8iyu$;
  var delete_0 = $module$appsimake_firebase.firebase.firestore.delete_xr2lrh$;
  var Unit = Kotlin.kotlin.Unit;
  var RefDoc = $module$appsimake_commonshr.commonshr.RefDoc;
  var save = $module$appsimake_firebase.firebase.firestore.save_xr2lrh$;
  var EditingTriggers = $module$appsimake_commonui.commonui.editing.EditingTriggers;
  var RxEditing = $module$appsimake_commonui.commonui.editing.RxEditing;
  var toFsId = $module$appsimake_commonshr.commonshr.toFsId_d81mk7$;
  var CreatingTriggers = $module$appsimake_commonui.commonui.editing.CreatingTriggers;
  var RxCreating = $module$appsimake_commonui.commonui.editing.RxCreating;
  var commonui = $module$appsimake_commonui.commonui;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var reportd = $module$appsimake_commonshr.commonshr.reportd_za3rmp$;
  var initializeApp = firebase.initializeApp;
  var withDefaultSettings = $module$appsimake_firebase.firebase.firestore.withDefaultSettings_gwf93m$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var DbApi = $module$appsimake_firebase.firebase.DbApi;
  var HasToast = $module$appsimake_commonui.commonui.HasToast;
  var BodyTC = $module$appsimake_commonui.commonui.widget.BodyTC;
  var LinksHandle = $module$appsimake_commonui.commonui.links.LinksHandle;
  var popStateChannel = $module$appsimake_commonui.commonui.links.popStateChannel_94o6bb$;
  var runLinks = $module$appsimake_commonui.commonui.links.runLinks_h2eir9$;
  var launchGlobal = $module$appsimake_commonui.commonui.launchGlobal_g2bo5h$;
  var hourglass = $module$appsimake_commonui.commonui.view.hourglass_ssnal3$;
  var LinksFactory = $module$appsimake_commonui.commonui.links.LinksFactory;
  var toast = $module$appsimake_commonui.commonui.widget.toast_ybvz94$;
  var forwarding = $module$appsimake_commonui.commonui.view.forwarding_caeb5u$;
  var MultiView = $module$appsimake_commonui.commonui.view.MultiView;
  var Var = $module$appsimake_commonshr.rx.Var;
  var backOnRedisplay = $module$appsimake_commonui.commonui.view.backOnRedisplay_omrxsi$;
  var plus = $module$appsimake_commonui.commonui.view.plus_qexz28$;
  var ProgressTC = $module$appsimake_commonui.commonui.topandcontent.ProgressTC;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var HasKillsRedisplay = $module$appsimake_commonui.commonui.HasKillsRedisplay;
  var HasBack = $module$appsimake_commonui.commonui.HasBack;
  var GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var CsKillsView = $module$appsimake_commonui.commonui.view.CsKillsView;
  var widget = $module$appsimake_commonui.commonui.widget;
  var get_chevronLeft = $module$appsimake_fontawesome.fontawesome.get_chevronLeft_xml72e$;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_widget = $module$appsimake_commonui.commonui.widget.get_widget_asww5s$;
  var get_insert = $module$appsimake_commonui.commonui.widget.get_insert_im8gow$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var row = $module$appsimake_bootstrap.bootstrap.row_kre7dp$;
  var get_google = $module$appsimake_fontawesome.fontawesome.get_google_8ab8he$;
  var get_user = $module$appsimake_fontawesome.fontawesome.get_user_xml72e$;
  var column_0 = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var TopAndContent = $module$appsimake_commonui.commonui.widget.TopAndContent;
  var userIcon = $module$appsimake_commonui.commonui.user.userIcon_nnyrgh$;
  var HasKillKillsView = $module$appsimake_commonui.commonui.view.HasKillKillsView;
  var throwUPAE = Kotlin.throwUPAE;
  var HoleT = $module$appsimake_commonui.commonui.widget.HoleT;
  var remAssign = $module$appsimake_commonui.commonui.view.remAssign_6pdc7g$;
  var launchReport = $module$appsimake_commonui.commonui.launchReport_hilpzi$;
  var ForwardBase = $module$appsimake_commonui.commonui.view.ForwardBase;
  var Factory = $module$appsimake_commonui.commonui.widget.Factory;
  var report = $module$appsimake_commonshr.commonshr.report_s8jyv4$;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var mapAsync = $module$appsimake_commonshr.rx.mapAsync_ld00ug$;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_lqp1nt$;
  var LocalStorageValue = $module$appsimake_domx.domx.LocalStorageValue;
  var FcmToken = $module$appsimake_commonshr.commonshr.FcmToken;
  var txTry = $module$appsimake_firebase.firebase.firestore.txTry_4q5zrj$;
  var get_docWrap = $module$appsimake_commonshr.commonshr.get_docWrap_2s00w$;
  var CsKills_init = $module$appsimake_commonshr.commonshr.CsKills_init_94o6bb$;
  var get_fcmTokensColl = $module$appsimake_firebase.firebase.firestore.get_fcmTokensColl_sc9572$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var CsKills = $module$appsimake_commonshr.commonshr.CsKills;
  var HasDbLibUser = $module$appsimake_firebase.firebase.HasDbLibUser;
  var visible = $module$appsimake_commonui.commonui.widget.visible_1sdldb$;
  var get_comment = $module$appsimake_fontawesome.fontawesome.get_comment_xml72e$;
  var click = $module$appsimake_commonui.commonui.widget.click_xgfbvs$;
  var get_commentSlash = $module$appsimake_fontawesome.fontawesome.get_commentSlash_xml72e$;
  var get_ban = $module$appsimake_fontawesome.fontawesome.get_ban_xml72e$;
  var get_textMuted = $module$appsimake_bootstrap.bootstrap.get_textMuted_kre7dp$;
  var get_textJustify = $module$appsimake_bootstrap.bootstrap.get_textJustify_kre7dp$;
  var remAssign_0 = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var click_0 = $module$appsimake_commonui.commonui.widget.click_n7x5hz$;
  var rx = $module$appsimake_commonshr.rx.rx_drrr49$;
  FbLinksFactory.prototype = Object.create(LinksFactory.prototype);
  FbLinksFactory.prototype.constructor = FbLinksFactory;
  FwdLogin.prototype = Object.create(MultiView.prototype);
  FwdLogin.prototype.constructor = FwdLogin;
  Login.prototype = Object.create(CsKillsView.prototype);
  Login.prototype.constructor = Login;
  UnkownUser.prototype = Object.create(ProgressTC.prototype);
  UnkownUser.prototype.constructor = UnkownUser;
  LoginBase.prototype = Object.create(CsKillsView.prototype);
  LoginBase.prototype.constructor = LoginBase;
  LoginOnly.prototype = Object.create(ForwardBase.prototype);
  LoginOnly.prototype.constructor = LoginOnly;
  UserState$Unknown.prototype = Object.create(UserState.prototype);
  UserState$Unknown.prototype.constructor = UserState$Unknown;
  UserState$NotLoggedIn.prototype = Object.create(UserState.prototype);
  UserState$NotLoggedIn.prototype.constructor = UserState$NotLoggedIn;
  UserState$LoggedIn.prototype = Object.create(UserState.prototype);
  UserState$LoggedIn.prototype.constructor = UserState$LoggedIn;
  MessagingControl$GrantState$Unknown.prototype = Object.create(MessagingControl$GrantState.prototype);
  MessagingControl$GrantState$Unknown.prototype.constructor = MessagingControl$GrantState$Unknown;
  MessagingControl$GrantState$Ask.prototype = Object.create(MessagingControl$GrantState.prototype);
  MessagingControl$GrantState$Ask.prototype.constructor = MessagingControl$GrantState$Ask;
  MessagingControl$GrantState$Granted.prototype = Object.create(MessagingControl$GrantState.prototype);
  MessagingControl$GrantState$Granted.prototype.constructor = MessagingControl$GrantState$Granted;
  MessagingControl$GrantState$Denied.prototype = Object.create(MessagingControl$GrantState.prototype);
  MessagingControl$GrantState$Denied.prototype.constructor = MessagingControl$GrantState$Denied;
  MessagingControl$GrantState$Error.prototype = Object.create(MessagingControl$GrantState.prototype);
  MessagingControl$GrantState$Error.prototype.constructor = MessagingControl$GrantState$Error;
  MessagingControl$State$Unsupported.prototype = Object.create(MessagingControl$State.prototype);
  MessagingControl$State$Unsupported.prototype.constructor = MessagingControl$State$Unsupported;
  MessagingControl$State$Denied.prototype = Object.create(MessagingControl$State.prototype);
  MessagingControl$State$Denied.prototype.constructor = MessagingControl$State$Denied;
  MessagingControl$State$Disabled.prototype = Object.create(MessagingControl$State.prototype);
  MessagingControl$State$Disabled.prototype.constructor = MessagingControl$State$Disabled;
  MessagingControl$State$Enabled.prototype = Object.create(MessagingControl$State.prototype);
  MessagingControl$State$Enabled.prototype.constructor = MessagingControl$State$Enabled;
  MessagingControl.prototype = Object.create(CsKills.prototype);
  MessagingControl.prototype.constructor = MessagingControl;
  function DbKillsApiCommonfb() {
  }
  DbKillsApiCommonfb.prototype.rxEditing_6l8l9j$$default = function (initial, triggers) {
    return rxEditing(this, initial, triggers);
  };
  var commonshr = $module$appsimake_commonshr.commonshr;
  DbKillsApiCommonfb.prototype.rxEditing_6l8l9j$ = function (initial, triggers, callback$default) {
    if (triggers === void 0) {
      triggers = commonshr.Identity;
    }
    return callback$default ? callback$default(initial, triggers) : this.rxEditing_6l8l9j$$default(initial, triggers);
  };
  DbKillsApiCommonfb.prototype.rxCreating_8ctbwl$$default = function (initial, triggers) {
    return rxCreating(this, initial, triggers);
  };
  DbKillsApiCommonfb.prototype.rxCreating_8ctbwl$ = function (initial, triggers, callback$default) {
    if (triggers === void 0) {
      triggers = commonshr.Identity;
    }
    return callback$default ? callback$default(initial, triggers) : this.rxCreating_8ctbwl$$default(initial, triggers);
  };
  DbKillsApiCommonfb.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DbKillsApiCommonfb',
    interfaces: [DbKillsApi]
  };
  function FBApi() {
  }
  FBApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FBApi',
    interfaces: [HasRedisplay, CsDbKillsUixApi]
  };
  function FBBackApi() {
  }
  FBBackApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FBBackApi',
    interfaces: [HasBackRedisplay, BackCsDbKillsUixApi, FBApi]
  };
  function CsDbKillsUixApi() {
  }
  CsDbKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsDbKillsUixApi',
    interfaces: [CsApiCommonui, KillsUixApi, KillsApiCommonui, DbKillsApiCommonfb, CsDbKillsApi]
  };
  function BackCsDbKillsUixApi() {
  }
  BackCsDbKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BackCsDbKillsUixApi',
    interfaces: [BackKillsUixApi, CsDbKillsUixApi]
  };
  function KillsLoginApi() {
  }
  KillsLoginApi.prototype.get_userIcon_tdhe4g$ = function ($receiver) {
    return userIcon_0($receiver, this);
  };
  KillsLoginApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsLoginApi',
    interfaces: [HasKillsLogin, KillsApi, Api]
  };
  function KillsLoginUixApi() {
  }
  KillsLoginUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsLoginUixApi',
    interfaces: [KillsUixApi, KillsLoginApi]
  };
  function KillsMessagingUixApi() {
  }
  KillsMessagingUixApi.prototype.get_messagingMenu_rp0x24$ = function ($receiver) {
    messagingMenu($receiver, this);
  };
  KillsMessagingUixApi.prototype.get_messagingButton_asww5s$ = function ($receiver) {
    messagingButton($receiver, this);
  };
  KillsMessagingUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsMessagingUixApi',
    interfaces: [KillsApiFirebase, KillsUixApi, KillsApiCommonui, HasKillsMessagingUix, Api]
  };
  function HasDbEdit() {
  }
  HasDbEdit.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasDbEdit',
    interfaces: [HasEdit, HasDb]
  };
  function HasDbEditKills() {
  }
  HasDbEditKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasDbEditKills',
    interfaces: [HasKills, HasDbEdit]
  };
  function HasCsDbKillsToast() {
  }
  HasCsDbKillsToast.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasCsDbKillsToast',
    interfaces: [HasCsToast, HasCsDbKills]
  };
  function HasLogin() {
  }
  HasLogin.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasLogin',
    interfaces: []
  };
  function HasKillsLogin() {
  }
  HasKillsLogin.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillsLogin',
    interfaces: [HasLogin, HasKills]
  };
  function HasMessaging() {
  }
  HasMessaging.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasMessaging',
    interfaces: []
  };
  function HasMessagingUix() {
  }
  HasMessagingUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasMessagingUix',
    interfaces: [HasUix, HasMessaging]
  };
  function HasKillsMessagingUix() {
  }
  HasKillsMessagingUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillsMessagingUix',
    interfaces: [HasKillsUix, HasMessagingUix]
  };
  function HasDbFcmLibMessagingUser() {
  }
  HasDbFcmLibMessagingUser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasDbFcmLibMessagingUser',
    interfaces: [HasMessaging, HasDbFcmKillsLibUser]
  };
  function rxEditing$lambda(closure$initial, closure$deps) {
    return function () {
      delete_0(closure$initial, closure$deps);
      return Unit;
    };
  }
  function rxEditing$lambda_0(closure$initial, closure$deps) {
    return function (current) {
      save(new RefDoc(closure$initial.id, current), closure$deps);
      return Unit;
    };
  }
  function rxEditing(deps, editable, triggers) {
    if (triggers === void 0) {
      triggers = commonshr.Identity;
    }
    var initial = live(toFsDoc(editable), deps);
    return new RxEditing(deps.kills, initial, triggers(new EditingTriggers(rxEditing$lambda(initial, deps), rxEditing$lambda_0(initial, deps))));
  }
  function rxCreating$lambda(closure$initial, closure$deps) {
    return function (current) {
      save(new RefDoc(toFsId(closure$initial.id, false), current), closure$deps);
      return Unit;
    };
  }
  function rxCreating(deps, initial, triggers) {
    if (triggers === void 0) {
      triggers = commonshr.Identity;
    }
    return new RxCreating(deps.kills, initial, triggers(new CreatingTriggers(rxCreating$lambda(initial, deps))));
  }
  function isFcmSupported$lambda() {
    return commonui.isServiceWorkerSupported;
  }
  var isFcmSupported;
  function get_isFcmSupported() {
    return isFcmSupported.value;
  }
  function Coroutine$createMessagingDeferred(app_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$tmp$ = void 0;
    this.local$msg = void 0;
    this.local$app = app_0;
  }
  Coroutine$createMessagingDeferred.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createMessagingDeferred.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createMessagingDeferred.prototype.constructor = Coroutine$createMessagingDeferred;
  Coroutine$createMessagingDeferred.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.local$msg = this.local$app.messaging();
            var tmp$;
            this.state_0 = 1;
            this.result_0 = commonui.APP.registerServiceWorker(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            if ((tmp$ = this.result_0) != null) {
              this.local$msg.useServiceWorker(tmp$);
            }

            this.local$msg.usePublicVapidKey('BOgqeELuJyp5wv-HiXzqLsxA2tqGboVZRZdrHTDnrN_DzCCJYuMA_pVBQYB0afOFvtTXSUdHi20NuNGmmtP0fvU');
            this.local$tmp$ = this.local$msg;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            reportd(e);
            this.local$tmp$ = null;
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
  function createMessagingDeferred(app_0, continuation_0, suspended) {
    var instance = new Coroutine$createMessagingDeferred(app_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
    var $receiver = {};
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
      return withDefaultSettings(this$FB.app.firestore());
    };
  }
  function Coroutine$FB$messagingDeferred$lambda$lambda(this$FB_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FB = this$FB_0;
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
            this.state_0 = 2;
            this.result_0 = createMessagingDeferred(this.local$this$FB.app, this);
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
            if (get_isFcmSupported()) {
              this.state_0 = 2;
              this.result_0 = this.local$this$FB.messagingDeferred_0.await(this);
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
  function FbLinksDeps(homeName, kills, coroutineContext, app, db, hole, toaster) {
    this.homeName = homeName;
    this.kills_y3ds13$_0 = kills;
    this.coroutineContext_iq0h69$_0 = coroutineContext;
    this.app = app;
    this.db_jkhryw$_0 = db;
    this.hole = hole;
    this.toaster_vu1xty$_0 = toaster;
    this.auth = this.app.auth();
  }
  Object.defineProperty(FbLinksDeps.prototype, 'kills', {
    get: function () {
      return this.kills_y3ds13$_0;
    }
  });
  Object.defineProperty(FbLinksDeps.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_iq0h69$_0;
    }
  });
  Object.defineProperty(FbLinksDeps.prototype, 'db', {
    get: function () {
      return this.db_jkhryw$_0;
    }
  });
  Object.defineProperty(FbLinksDeps.prototype, 'toaster', {
    get: function () {
      return this.toaster_vu1xty$_0;
    }
  });
  FbLinksDeps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FbLinksDeps',
    interfaces: [HasCsDbKillsToast]
  };
  FbLinksDeps.prototype.component1 = function () {
    return this.homeName;
  };
  FbLinksDeps.prototype.component2 = function () {
    return this.kills;
  };
  FbLinksDeps.prototype.component3 = function () {
    return this.coroutineContext;
  };
  FbLinksDeps.prototype.component4 = function () {
    return this.app;
  };
  FbLinksDeps.prototype.component5 = function () {
    return this.db;
  };
  FbLinksDeps.prototype.component6 = function () {
    return this.hole;
  };
  FbLinksDeps.prototype.component7 = function () {
    return this.toaster;
  };
  FbLinksDeps.prototype.copy_7r9xjf$ = function (homeName, kills, coroutineContext, app, db, hole, toaster) {
    return new FbLinksDeps(homeName === void 0 ? this.homeName : homeName, kills === void 0 ? this.kills : kills, coroutineContext === void 0 ? this.coroutineContext : coroutineContext, app === void 0 ? this.app : app, db === void 0 ? this.db : db, hole === void 0 ? this.hole : hole, toaster === void 0 ? this.toaster : toaster);
  };
  FbLinksDeps.prototype.toString = function () {
    return 'FbLinksDeps(homeName=' + Kotlin.toString(this.homeName) + (', kills=' + Kotlin.toString(this.kills)) + (', coroutineContext=' + Kotlin.toString(this.coroutineContext)) + (', app=' + Kotlin.toString(this.app)) + (', db=' + Kotlin.toString(this.db)) + (', hole=' + Kotlin.toString(this.hole)) + (', toaster=' + Kotlin.toString(this.toaster)) + ')';
  };
  FbLinksDeps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.homeName) | 0;
    result = result * 31 + Kotlin.hashCode(this.kills) | 0;
    result = result * 31 + Kotlin.hashCode(this.coroutineContext) | 0;
    result = result * 31 + Kotlin.hashCode(this.app) | 0;
    result = result * 31 + Kotlin.hashCode(this.db) | 0;
    result = result * 31 + Kotlin.hashCode(this.hole) | 0;
    result = result * 31 + Kotlin.hashCode(this.toaster) | 0;
    return result;
  };
  FbLinksDeps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.homeName, other.homeName) && Kotlin.equals(this.kills, other.kills) && Kotlin.equals(this.coroutineContext, other.coroutineContext) && Kotlin.equals(this.app, other.app) && Kotlin.equals(this.db, other.db) && Kotlin.equals(this.hole, other.hole) && Kotlin.equals(this.toaster, other.toaster)))));
  };
  function Coroutine$db($receiver_0, persistent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$persistent = persistent_0;
  }
  Coroutine$db.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$db.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$db.prototype.constructor = Coroutine$db;
  Coroutine$db.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$persistent === void 0)
              this.local$persistent = true;
            this.local$$receiver_0 = withDefaultSettings(this.local$$receiver.firestore());
            if (this.local$persistent) {
              this.state_0 = 2;
              this.result_0 = enablePersistenceAndWait(this.local$$receiver_0, this);
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
            return this.local$$receiver_0;
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
  function db($receiver_0, persistent_0, continuation_0, suspended) {
    var instance = new Coroutine$db($receiver_0, persistent_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function FbLinksApi() {
  }
  FbLinksApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FbLinksApi',
    interfaces: [HasLogin, HasToast, DbApi]
  };
  function FbLinksFactory(deps) {
    FbLinksFactory$Companion_getInstance();
    LinksFactory.call(this, deps.homeName);
    this.deps = deps;
    this.userProvider = new RequireUser(this, this.deps.auth, FbLinksFactory$userProvider$lambda(this));
    this.userState_2jadsi$_0 = this.userProvider.state;
    this.login_n50n2t$_0 = this.base_sj7hg3$().child_b2q6wh$(FbLinksFactory$login$lambda(this)).provideDelegate_n5byny$(this, FbLinksFactory$login_metadata);
    this.fcmDeferred_pyi7b9$_0 = lazy(FbLinksFactory$fcmDeferred$lambda(this));
  }
  function FbLinksFactory$Companion() {
    FbLinksFactory$Companion_instance = this;
  }
  function Coroutine$FbLinksFactory$Companion$start$lambda(closure$fn_0, closure$homeName_0, closure$persistentDb_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$homeName = closure$homeName_0;
    this.local$closure$persistentDb = closure$persistentDb_0;
    this.local$$receiver = void 0;
    this.local$closure$fn_0 = void 0;
    this.local$closure$homeName_0 = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$app = void 0;
  }
  Coroutine$FbLinksFactory$Companion$start$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FbLinksFactory$Companion$start$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FbLinksFactory$Companion$start$lambda.prototype.constructor = Coroutine$FbLinksFactory$Companion$start$lambda;
  Coroutine$FbLinksFactory$Companion$start$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.APP.startRegisteringServiceWorker();
            this.local$$receiver = new BodyTC();
            this.local$closure$fn_0 = this.local$closure$fn;
            this.local$closure$homeName_0 = this.local$closure$homeName;
            var closure$persistentDb = this.local$closure$persistentDb;
            this.local$app = FB_getInstance().app;
            this.local$tmp$ = this.local$$receiver.kills;
            this.local$tmp$_0 = this.local$$receiver.coroutineContext;
            this.state_0 = 2;
            this.result_0 = db(this.local$app, closure$persistentDb, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$closure$fn_0(new FbLinksDeps(this.local$closure$homeName_0, this.local$tmp$, this.local$tmp$_0, this.local$app, this.result_0, this.local$$receiver.hole, this.local$$receiver.toaster), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var links = this.result_0;
            runLinks(this.local$$receiver, new LinksHandle(links.map, links.home), popStateChannel(links));
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
  function FbLinksFactory$Companion$start$lambda(closure$fn_0, closure$homeName_0, closure$persistentDb_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$FbLinksFactory$Companion$start$lambda(closure$fn_0, closure$homeName_0, closure$persistentDb_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  FbLinksFactory$Companion.prototype.start_avsawv$ = function (persistentDb, homeName, fn) {
    if (persistentDb === void 0)
      persistentDb = true;
    if (homeName === void 0)
      homeName = 'home';
    return launchGlobal(FbLinksFactory$Companion$start$lambda(fn, homeName, persistentDb));
  };
  FbLinksFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FbLinksFactory$Companion_instance = null;
  function FbLinksFactory$Companion_getInstance() {
    if (FbLinksFactory$Companion_instance === null) {
      new FbLinksFactory$Companion();
    }
    return FbLinksFactory$Companion_instance;
  }
  Object.defineProperty(FbLinksFactory.prototype, 'userState', {
    get: function () {
      return this.userState_2jadsi$_0;
    }
  });
  FbLinksFactory.prototype.requestUser = function (continuation) {
    return this.userProvider.requireUser_8w4ee4$(void 0, continuation);
  };
  function Coroutine$signOut($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$signOut.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signOut.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signOut.prototype.constructor = Coroutine$signOut;
  Coroutine$signOut.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Signing out...');
            hourglass(this.$this.deps.hole);
            this.state_0 = 2;
            this.result_0 = await_0(this.$this.deps.auth.signOut(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.userProvider.signOut();
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
  FbLinksFactory.prototype.signOut = function (continuation_0, suspended) {
    var instance = new Coroutine$signOut(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  FbLinksFactory.prototype.signOutNow = function () {
    this.userProvider.signOut();
    this.deps.auth.signOut();
  };
  var FbLinksFactory$login_metadata = new PropertyMetadata('login');
  Object.defineProperty(FbLinksFactory.prototype, 'login', {
    get: function () {
      return this.login_n50n2t$_0.getValue_lrcp0p$(this, FbLinksFactory$login_metadata);
    }
  });
  Object.defineProperty(FbLinksFactory.prototype, 'fcmDeferred', {
    get: function () {
      return this.fcmDeferred_pyi7b9$_0.value;
    }
  });
  Object.defineProperty(FbLinksFactory.prototype, 'coroutineContext', {
    get: function () {
      return this.deps.coroutineContext;
    }
  });
  Object.defineProperty(FbLinksFactory.prototype, 'db', {
    get: function () {
      return this.deps.db;
    }
  });
  Object.defineProperty(FbLinksFactory.prototype, 'kills', {
    get: function () {
      return this.deps.kills;
    }
  });
  Object.defineProperty(FbLinksFactory.prototype, 'toaster', {
    get: function () {
      return this.deps.toaster;
    }
  });
  function FbLinksFactory$userProvider$lambda$lambda(this$FbLinksFactory) {
    return function (it) {
      this$FbLinksFactory.deps.hole.remAssign_9i7ztu$(it);
      return Unit;
    };
  }
  function Coroutine$FbLinksFactory$userProvider$lambda(this$FbLinksFactory_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$FbLinksFactory = this$FbLinksFactory_0;
  }
  Coroutine$FbLinksFactory$userProvider$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FbLinksFactory$userProvider$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FbLinksFactory$userProvider$lambda.prototype.constructor = Coroutine$FbLinksFactory$userProvider$lambda;
  Coroutine$FbLinksFactory$userProvider$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = performLogin_0(this.local$this$FbLinksFactory.deps, this.local$this$FbLinksFactory.deps.hole, this.local$this$FbLinksFactory.deps.auth, FbLinksFactory$userProvider$lambda$lambda(this.local$this$FbLinksFactory), void 0, void 0, this);
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
  function FbLinksFactory$userProvider$lambda(this$FbLinksFactory_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$FbLinksFactory$userProvider$lambda(this$FbLinksFactory_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FbLinksFactory$login$lambda$lambda$lambda(closure$e) {
    return function ($receiver) {
      $receiver.danger_61zpoe$(closure$e);
      return Unit;
    };
  }
  function FbLinksFactory$login$lambda$lambda(this$FbLinksFactory) {
    return function (e) {
      toast(this$FbLinksFactory.deps, FbLinksFactory$login$lambda$lambda$lambda(e));
      return Unit;
    };
  }
  function Coroutine$FbLinksFactory$login$lambda(this$FbLinksFactory_0, baseTC_0, linkage_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$FbLinksFactory = this$FbLinksFactory_0;
    this.local$baseTC = baseTC_0;
    this.local$linkage = linkage_0;
  }
  Coroutine$FbLinksFactory$login$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FbLinksFactory$login$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FbLinksFactory$login$lambda.prototype.constructor = Coroutine$FbLinksFactory$login$lambda;
  Coroutine$FbLinksFactory$login$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return forwarding(new FwdLogin(this.local$baseTC, this.local$linkage, this.local$this$FbLinksFactory.userProvider.state, this.local$this$FbLinksFactory.deps.auth, FbLinksFactory$login$lambda$lambda(this.local$this$FbLinksFactory)), this.local$baseTC);
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
  function FbLinksFactory$login$lambda(this$FbLinksFactory_0) {
    return function (baseTC_0, linkage_0, continuation_0, suspended) {
      var instance = new Coroutine$FbLinksFactory$login$lambda(this$FbLinksFactory_0, baseTC_0, linkage_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FbLinksFactory$fcmDeferred$lambda$lambda(this$FbLinksFactory_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$FbLinksFactory = this$FbLinksFactory_0;
  }
  Coroutine$FbLinksFactory$fcmDeferred$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FbLinksFactory$fcmDeferred$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FbLinksFactory$fcmDeferred$lambda$lambda.prototype.constructor = Coroutine$FbLinksFactory$fcmDeferred$lambda$lambda;
  Coroutine$FbLinksFactory$fcmDeferred$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = createMessagingDeferred(this.local$this$FbLinksFactory.deps.app, this);
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
  function FbLinksFactory$fcmDeferred$lambda$lambda(this$FbLinksFactory_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$FbLinksFactory$fcmDeferred$lambda$lambda(this$FbLinksFactory_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FbLinksFactory$fcmDeferred$lambda(this$FbLinksFactory) {
    return function () {
      return async(this$FbLinksFactory, void 0, void 0, FbLinksFactory$fcmDeferred$lambda$lambda(this$FbLinksFactory));
    };
  }
  FbLinksFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FbLinksFactory',
    interfaces: [HasLogin, HasCsDbKillsToast, LinksFactory]
  };
  function FwdLogin(parent, linkage, userState, auth, reporter) {
    if (reporter === void 0)
      reporter = FwdLogin_init$lambda;
    MultiView.call(this, parent);
    this.$delegate_i8hw2v$_0 = linkage;
    this.loggingIn = new Var(false);
    this.forEach_xwzbbo$(userState, FwdLogin_init$lambda_0(this));
    this.currentView_wgwowz$_0 = this.get_oldKilled_vsdo34$(this.rx_y6x17j$(FwdLogin$currentView$lambda(parent, this, userState, auth, reporter)));
  }
  Object.defineProperty(FwdLogin.prototype, 'currentView', {
    get: function () {
      return this.currentView_wgwowz$_0;
    }
  });
  Object.defineProperty(FwdLogin.prototype, 'back', {
    get: function () {
      return this.$delegate_i8hw2v$_0.back;
    }
  });
  function FwdLogin_init$lambda(it) {
    reportd(it);
    return Unit;
  }
  function FwdLogin_init$lambda_0(this$FwdLogin) {
    return function ($receiver, s) {
      if (Kotlin.isType(s, UserState$LoggedIn)) {
        backOnRedisplay(this$FwdLogin);
      }
      return Unit;
    };
  }
  function Coroutine$FwdLogin$currentView$lambda$lambda$lambda(this$FwdLogin_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$FwdLogin = this$FwdLogin_0;
  }
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda.prototype.constructor = Coroutine$FwdLogin$currentView$lambda$lambda$lambda;
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$FwdLogin.loggingIn.remAssign_11rb$(true), Unit;
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
  function FwdLogin$currentView$lambda$lambda$lambda(this$FwdLogin_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$FwdLogin$currentView$lambda$lambda$lambda(this$FwdLogin_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FwdLogin$currentView$lambda$lambda$lambda_0(this$FwdLogin_0, closure$reporter_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$FwdLogin = this$FwdLogin_0;
    this.local$closure$reporter = closure$reporter_0;
    this.local$it = it_0;
  }
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda_0.prototype.constructor = Coroutine$FwdLogin$currentView$lambda$lambda$lambda_0;
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$FwdLogin.loggingIn.remAssign_11rb$(false);
            return this.local$closure$reporter(this.local$it);
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
  function FwdLogin$currentView$lambda$lambda$lambda_0(this$FwdLogin_0, closure$reporter_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$FwdLogin$currentView$lambda$lambda$lambda_0(this$FwdLogin_0, closure$reporter_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FwdLogin$currentView$lambda$lambda$lambda_1(this$FwdLogin_0, closure$userState_0, u_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$FwdLogin = this$FwdLogin_0;
    this.local$closure$userState = closure$userState_0;
    this.local$u = u_0;
  }
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda_1.prototype.constructor = Coroutine$FwdLogin$currentView$lambda$lambda$lambda_1;
  Coroutine$FwdLogin$currentView$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$FwdLogin.loggingIn.remAssign_11rb$(false);
            this.local$closure$userState.remAssign_11rb$(new UserState$LoggedIn(ensureNotNull(this.local$u.user)));
            return this.local$this$FwdLogin.back();
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
  function FwdLogin$currentView$lambda$lambda$lambda_1(this$FwdLogin_0, closure$userState_0) {
    return function (u_0, continuation_0, suspended) {
      var instance = new Coroutine$FwdLogin$currentView$lambda$lambda$lambda_1(this$FwdLogin_0, closure$userState_0, u_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function FwdLogin$currentView$lambda(closure$parent, this$FwdLogin, closure$userState, closure$auth, closure$reporter) {
    return function ($receiver) {
      var killsRouting = plus($receiver, closure$parent);
      if (this$FwdLogin.loggingIn.invoke()) {
        commonui.globalStatus.remAssign_11rb$('Logging in...');
        return new ProgressTC(killsRouting);
      }
       else {
        var $receiver_0 = closure$userState.invoke();
        var this$FwdLogin_0 = this$FwdLogin;
        var closure$parent_0 = closure$parent;
        var closure$auth_0 = closure$auth;
        var closure$reporter_0 = closure$reporter;
        var closure$userState_0 = closure$userState;
        var block$result;
        if (equals($receiver_0, UserState$Unknown_getInstance())) {
          commonui.globalStatus.remAssign_11rb$('Checking login state...');
          block$result = new ProgressTC(killsRouting);
        }
         else if (Kotlin.isType($receiver_0, UserState$LoggedIn)) {
          commonui.globalStatus.remAssign_11rb$('User logged in.');
          this$FwdLogin_0.back();
          block$result = new ProgressTC(killsRouting);
        }
         else if (equals($receiver_0, UserState$NotLoggedIn_getInstance())) {
          block$result = new Login(killsRouting, closure$parent_0, closure$auth_0, this$FwdLogin_0.back, FwdLogin$currentView$lambda$lambda$lambda(this$FwdLogin_0), FwdLogin$currentView$lambda$lambda$lambda_0(this$FwdLogin_0, closure$reporter_0), FwdLogin$currentView$lambda$lambda$lambda_1(this$FwdLogin_0, closure$userState_0));
        }
         else {
          block$result = Kotlin.noWhenBranchMatched();
        }
        return block$result;
      }
    };
  }
  FwdLogin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FwdLogin',
    interfaces: [HasBackRedisplay, HasBack, HasKillsRedisplay, MultiView]
  };
  function Login(parent, base, auth, back, loggingIn, loginFailed, loginSucceeded) {
    if (back === void 0)
      back = null;
    if (loggingIn === void 0)
      loggingIn = Login_init$lambda;
    if (loginFailed === void 0)
      loginFailed = Login_init$lambda_0;
    if (loginSucceeded === void 0)
      loginSucceeded = Login_init$lambda_1;
    CsKillsView.call(this, parent);
    this.base = base;
    this.auth = auth;
    this.back = back;
    this.loggingIn = loggingIn;
    this.loginFailed = loginFailed;
    this.loginSucceeded = loginSucceeded;
    this.rawView_fdn0e$_0 = ui(this);
  }
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
            this.result_0 = await_0(this.local$this$Login.auth.signInWithRedirect(this.local$closure$provider), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = CompletableDeferred().await(this);
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
  Login.prototype.google = function () {
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
            this.result_0 = await_0(this.local$this$Login.auth.signInAnonymously(), this);
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
  Login.prototype.guest = function () {
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
    interfaces: [CsKillsView]
  };
  function ui$lambda$lambda$lambda$lambda(closure$bck) {
    return function () {
      closure$bck();
      return Unit;
    };
  }
  function ui$lambda$lambda($receiver) {
    get_p1(get_cls($receiver));
    $receiver.innerText = 'Sign In';
    return Unit;
  }
  function ui$lambda$lambda$butt$lambda$lambda(closure$label) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      $receiver.innerText = closure$label;
      return Unit;
    };
  }
  function ui$lambda$lambda$butt(this$, this$ui) {
    return function (faIcon, label, fn) {
      var $receiver = get_insert(get_widget(this$)).button;
      this$ui.click_9375ex$($receiver, fn);
      $receiver.primary;
      var $receiver_0 = $receiver.cls;
      get_m1($receiver_0);
      get_p1($receiver_0);
      row($receiver_0);
      get_alignItemsCenter($receiver_0);
      var $receiver_1 = $receiver.icon;
      get_m1($receiver_1.cls);
      faIcon($receiver_1);
      invoke($receiver.text, ui$lambda$lambda$butt$lambda$lambda(label));
      return $receiver;
    };
  }
  function ui$lambda$lambda$lambda($receiver) {
    get_google($receiver.brands);
    return Unit;
  }
  function ui$lambda$lambda$lambda_0(this$ui) {
    return function () {
      this$ui.google();
      return Unit;
    };
  }
  function ui$lambda$lambda$lambda_1($receiver) {
    get_user($receiver.fa);
    return Unit;
  }
  function ui$lambda$lambda$lambda_2(this$ui) {
    return function () {
      this$ui.guest();
      return Unit;
    };
  }
  function ui$lambda$lambda_0(this$ui) {
    return function ($receiver) {
      var butt = ui$lambda$lambda$butt($receiver, this$ui);
      butt(ui$lambda$lambda$lambda, 'Sign in with Google', ui$lambda$lambda$lambda_0(this$ui));
      butt(ui$lambda$lambda$lambda_1, 'Continue as guest', ui$lambda$lambda$lambda_2(this$ui));
      return Unit;
    };
  }
  function ui$lambda(this$ui) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p1($receiver_0);
      get_flexGrow1($receiver_0);
      column($receiver_0);
      get_alignItemsCenter($receiver_0);
      column_0($receiver, ui$lambda$lambda_0(this$ui));
      return Unit;
    };
  }
  function ui($receiver) {
    var $receiver_0 = widget.factory.topbar;
    var tmp$;
    if ((tmp$ = $receiver.back) != null) {
      var $receiver_1 = $receiver_0.left.button;
      $receiver_1.m1p2;
      $receiver_1.secondary;
      get_chevronLeft($receiver_1.fa);
      $receiver.click_9375ex$($receiver_1, ui$lambda$lambda$lambda$lambda(tmp$));
    }
    invoke($receiver_0.title, ui$lambda$lambda);
    return new TopAndContent($receiver_0.node, invoke(get_div(document), ui$lambda($receiver)));
  }
  function imageUrl$lambda($receiver, st) {
    if (Kotlin.isType(st, UserState$LoggedIn))
      return st.user.photoURL;
    else
      return null;
  }
  function imageUrl($receiver, deps) {
    return $receiver.map_bb8mwd$(deps, imageUrl$lambda);
  }
  function userIcon_0($receiver, deps) {
    return userIcon($receiver, deps, imageUrl(deps.userState, deps));
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
    interfaces: [HasKillKillsView]
  };
  function UnkownUser(parent) {
    ProgressTC.call(this, parent);
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
    interfaces: [UserStateView, ProgressTC]
  };
  function LoginBase(parent) {
    CsKillsView.call(this, parent);
    this.loginBase_a0jenj$_0 = this;
    this.slots = new LoginBase$Slots();
    this.rawView_sx79q4$_0 = ui_0(this);
    this.contentHole = new HoleT(LoginBase$contentHole$lambda(this), LoginBase$contentHole$lambda_0(this));
    this.hole = this.get_routing_lqv1tx$(this.contentHole).of_4hplsh$(LoginBase$hole$lambda);
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
  LoginBase.prototype.switchToUnkownUser = function (continuation) {
    this.hole.content.remAssign_11rb$(new UnkownUser(this.hole));
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
  function Coroutine$LoginBase$start$lambda$lambda(closure$st_0, this$LoginBase_0, closure$loggedInView_0, closure$notLoggedInView_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$st = closure$st_0;
    this.local$this$LoginBase = this$LoginBase_0;
    this.local$closure$loggedInView = closure$loggedInView_0;
    this.local$closure$notLoggedInView = closure$notLoggedInView_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
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
              commonui.globalStatus.remAssign_11rb$('Logged in.');
              this.local$tmp$ = this.local$this$LoginBase.hole.content;
              this.state_0 = 5;
              this.result_0 = this.local$closure$loggedInView(this.local$closure$st.user, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(tmp$, UserState$NotLoggedIn)) {
                commonui.globalStatus.remAssign_11rb$('Logged out.');
                this.local$tmp$_0 = this.local$this$LoginBase.hole.content;
                this.state_0 = 3;
                this.result_0 = this.local$closure$notLoggedInView(this);
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
            return this.local$tmp$_0.remAssign_11rb$(this.result_0), Unit;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            return this.local$tmp$.remAssign_11rb$(this.result_0), Unit;
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
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$LoginBase$start$lambda$lambda(closure$st_0, this$LoginBase_0, closure$loggedInView_0, closure$notLoggedInView_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function LoginBase$start$lambda(this$LoginBase, closure$loggedInView, closure$notLoggedInView) {
    return function ($receiver, st) {
      launch(this$LoginBase, void 0, void 0, LoginBase$start$lambda$lambda(st, this$LoginBase, closure$loggedInView, closure$notLoggedInView));
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
            this.$this.forEach_xwzbbo$(this.result_0, LoginBase$start$lambda(this.$this, this.local$loggedInView, this.local$notLoggedInView));
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
  function LoginBase$hole$lambda($receiver) {
    return new UnkownUser($receiver);
  }
  LoginBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginBase',
    interfaces: [LoginBasePath, CsKillsView]
  };
  function Coroutine$enablePersistenceAndWait($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$enablePersistenceAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$enablePersistenceAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$enablePersistenceAndWait.prototype.constructor = Coroutine$enablePersistenceAndWait;
  Coroutine$enablePersistenceAndWait.prototype.doResume = function () {
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
  function enablePersistenceAndWait($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$enablePersistenceAndWait($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$disableNetworkAndWait($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$disableNetworkAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$disableNetworkAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$disableNetworkAndWait.prototype.constructor = Coroutine$disableNetworkAndWait;
  Coroutine$disableNetworkAndWait.prototype.doResume = function () {
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
  function disableNetworkAndWait($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$disableNetworkAndWait($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function performLogin$lambda(it) {
    reportd(it);
    return Unit;
  }
  function performLogin$lambda_0(closure$parent) {
    return function (it) {
      remAssign(closure$parent, it);
      return Unit;
    };
  }
  function performLogin$lambda_1(closure$parent) {
    return function () {
      remAssign(closure$parent, null);
      return Unit;
    };
  }
  function performLogin(parent, auth, reporter, continuation) {
    if (reporter === void 0)
      reporter = performLogin$lambda;
    return performLogin_0(parent, parent, auth, performLogin$lambda_0(parent), performLogin$lambda_1(parent), reporter, continuation);
  }
  function performLogin$lambda_2(it) {
    reportd(it);
    return Unit;
  }
  function Coroutine$performLogin$attempt$lambda(closure$hole_0, closure$parent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$hole = closure$hole_0;
    this.local$closure$parent = closure$parent_0;
  }
  Coroutine$performLogin$attempt$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$performLogin$attempt$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$performLogin$attempt$lambda.prototype.constructor = Coroutine$performLogin$attempt$lambda;
  Coroutine$performLogin$attempt$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Logging in...');
            this.local$closure$hole(new ProgressTC(this.local$closure$parent));
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
  function performLogin$attempt$lambda(closure$hole_0, closure$parent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$performLogin$attempt$lambda(closure$hole_0, closure$parent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$performLogin$attempt$lambda_0(closure$reporter_0, closure$attempt_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$reporter = closure$reporter_0;
    this.local$closure$attempt = closure$attempt_0;
    this.local$e = e_0;
  }
  Coroutine$performLogin$attempt$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$performLogin$attempt$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$performLogin$attempt$lambda_0.prototype.constructor = Coroutine$performLogin$attempt$lambda_0;
  Coroutine$performLogin$attempt$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            console.log('loginfailed');
            this.local$closure$reporter(this.local$e);
            return this.local$closure$attempt(), Unit;
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
  function performLogin$attempt$lambda_0(closure$reporter_0, closure$attempt_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$performLogin$attempt$lambda_0(closure$reporter_0, closure$attempt_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$performLogin$attempt$lambda_1(closure$cd_0, u_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cd = closure$cd_0;
    this.local$u = u_0;
  }
  Coroutine$performLogin$attempt$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$performLogin$attempt$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$performLogin$attempt$lambda_1.prototype.constructor = Coroutine$performLogin$attempt$lambda_1;
  Coroutine$performLogin$attempt$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$cd.complete_11rb$(ensureNotNull(this.local$u.user));
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
  function performLogin$attempt$lambda_1(closure$cd_0) {
    return function (u_0, continuation_0, suspended) {
      var instance = new Coroutine$performLogin$attempt$lambda_1(closure$cd_0, u_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function performLogin$attempt(closure$hole, closure$parent, closure$deps, closure$auth, closure$back, closure$reporter, closure$cd) {
    return function closure$attempt() {
      closure$hole(new Login(closure$parent, closure$deps, closure$auth, closure$back, performLogin$attempt$lambda(closure$hole, closure$parent), performLogin$attempt$lambda_0(closure$reporter, closure$attempt), performLogin$attempt$lambda_1(closure$cd)));
    };
  }
  function performLogin_0(deps, parent, auth, hole, back, reporter, continuation) {
    if (back === void 0)
      back = null;
    if (reporter === void 0)
      reporter = performLogin$lambda_2;
    var cd = CompletableDeferred();
    var attempt = performLogin$attempt(hole, parent, deps, auth, back, reporter, cd);
    attempt();
    return cd.await(continuation);
  }
  function firstUser$lambda(closure$cd) {
    return function (u) {
      closure$cd.complete_11rb$(u);
      return Unit;
    };
  }
  function firstUser$lambda_0(closure$cd) {
    return function (e) {
      closure$cd.completeExceptionally_tcv7n7$(e);
      return Unit;
    };
  }
  function Coroutine$firstUser($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$stopListening = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$firstUser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$firstUser.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$firstUser.prototype.constructor = Coroutine$firstUser;
  Coroutine$firstUser.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            commonui.globalStatus.remAssign_11rb$('Checking login status...');
            var cd = CompletableDeferred();
            this.local$stopListening = this.local$$receiver.onAuthStateChanged(firstUser$lambda(cd), firstUser$lambda_0(cd));
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = cd.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            this.exceptionState_0 = 6;
            this.local$stopListening();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function firstUser($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$firstUser($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function RequireUser(deps, auth, signIn) {
    this.deps_0 = deps;
    this.signIn = signIn;
    this.state = new Var(UserState$Unknown_getInstance());
    var cd = CompletableDeferred();
    launchReport(this.deps_0, RequireUser$latest$lambda$lambda(cd, auth, this));
    this.latest_0 = RequireUser$latest$lambda$lambda_0(cd, this);
  }
  function Coroutine$RequireUser$startSignIn$lambda(closure$cd_0, closure$performLogin_0, this$RequireUser_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cd = closure$cd_0;
    this.local$closure$performLogin = closure$performLogin_0;
    this.local$this$RequireUser = this$RequireUser_0;
  }
  Coroutine$RequireUser$startSignIn$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RequireUser$startSignIn$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RequireUser$startSignIn$lambda.prototype.constructor = Coroutine$RequireUser$startSignIn$lambda;
  Coroutine$RequireUser$startSignIn$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$performLogin(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            this.local$this$RequireUser.state.remAssign_11rb$(new UserState$LoggedIn($receiver));
            return this.local$closure$cd.complete_11rb$($receiver);
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
  function RequireUser$startSignIn$lambda(closure$cd_0, closure$performLogin_0, this$RequireUser_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RequireUser$startSignIn$lambda(closure$cd_0, closure$performLogin_0, this$RequireUser_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RequireUser$startSignIn$lambda_0(closure$cd_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cd = closure$cd_0;
  }
  Coroutine$RequireUser$startSignIn$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RequireUser$startSignIn$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RequireUser$startSignIn$lambda_0.prototype.constructor = Coroutine$RequireUser$startSignIn$lambda_0;
  Coroutine$RequireUser$startSignIn$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$cd.await(this);
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
  function RequireUser$startSignIn$lambda_0(closure$cd_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RequireUser$startSignIn$lambda_0(closure$cd_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RequireUser.prototype.startSignIn_8w4ee4$ = function (performLogin, continuation) {
    if (performLogin === void 0)
      performLogin = this.signIn;
    var cd = CompletableDeferred();
    launchReport(this.deps_0, RequireUser$startSignIn$lambda(cd, performLogin, this));
    this.latest_0 = RequireUser$startSignIn$lambda_0(cd);
    return RequireUser$startSignIn$lambda_0(cd);
  };
  function Coroutine$requireUser_8w4ee4$($this, performLogin_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$performLogin = performLogin_0;
  }
  Coroutine$requireUser_8w4ee4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$requireUser_8w4ee4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$requireUser_8w4ee4$.prototype.constructor = Coroutine$requireUser_8w4ee4$;
  Coroutine$requireUser_8w4ee4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$performLogin === void 0)
              this.local$performLogin = this.$this.signIn;
            this.local$tmp$ = this.$this.latest_0;
            if (this.local$tmp$ == null) {
              this.state_0 = 2;
              this.result_0 = this.$this.startSignIn_8w4ee4$(this.local$performLogin, this);
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
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  RequireUser.prototype.requireUser_8w4ee4$ = function (performLogin_0, continuation_0, suspended) {
    var instance = new Coroutine$requireUser_8w4ee4$(this, performLogin_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  RequireUser.prototype.signOut = function () {
    this.state.remAssign_11rb$(UserState$NotLoggedIn_getInstance());
    this.latest_0 = null;
  };
  function Coroutine$RequireUser$latest$lambda$lambda(closure$cd_0, closure$auth_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cd = closure$cd_0;
    this.local$closure$auth = closure$auth_0;
    this.local$this$ = this$_0;
  }
  Coroutine$RequireUser$latest$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RequireUser$latest$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RequireUser$latest$lambda$lambda.prototype.constructor = Coroutine$RequireUser$latest$lambda$lambda;
  Coroutine$RequireUser$latest$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = firstUser(this.local$closure$auth, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            this.local$this$.state.remAssign_11rb$(UserState$Companion_getInstance().of_w82m7n$($receiver));
            return this.local$closure$cd.complete_11rb$($receiver);
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
  function RequireUser$latest$lambda$lambda(closure$cd_0, closure$auth_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RequireUser$latest$lambda$lambda(closure$cd_0, closure$auth_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RequireUser$latest$lambda$lambda$lambda$lambda(closure$u_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$u = closure$u_0;
  }
  Coroutine$RequireUser$latest$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RequireUser$latest$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RequireUser$latest$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$RequireUser$latest$lambda$lambda$lambda$lambda;
  Coroutine$RequireUser$latest$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$u;
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
  function RequireUser$latest$lambda$lambda$lambda$lambda(closure$u_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RequireUser$latest$lambda$lambda$lambda$lambda(closure$u_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$RequireUser$latest$lambda$lambda_0(closure$cd_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$cd = closure$cd_0;
    this.local$this$ = this$_0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$RequireUser$latest$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RequireUser$latest$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RequireUser$latest$lambda$lambda_0.prototype.constructor = Coroutine$RequireUser$latest$lambda$lambda_0;
  Coroutine$RequireUser$latest$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$closure$cd.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tmp$_0;
            if ((tmp$ = this.result_0) != null) {
              this.local$this$.latest_0 = RequireUser$latest$lambda$lambda$lambda$lambda(tmp$);
              tmp$_0 = tmp$;
            }
             else
              tmp$_0 = null;
            this.local$tmp$_0 = tmp$_0;
            if (this.local$tmp$_0 == null) {
              this.state_0 = 3;
              this.result_0 = this.local$this$.startSignIn_8w4ee4$(void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 3:
            this.state_0 = 4;
            this.result_0 = this.result_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            return this.local$tmp$_0;
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
  function RequireUser$latest$lambda$lambda_0(closure$cd_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RequireUser$latest$lambda$lambda_0(closure$cd_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  RequireUser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RequireUser',
    interfaces: []
  };
  function LoginOnly(parent, auth) {
    ForwardBase.call(this, parent);
    this.auth_0 = auth;
    this.rawView_5ft8qn$_0 = TopAndContent.Companion.hourglass;
    this.hourglass_0();
  }
  Object.defineProperty(LoginOnly.prototype, 'rawView', {
    get: function () {
      return this.rawView_5ft8qn$_0;
    }
  });
  LoginOnly.prototype.signIn = function (continuation) {
    return performLogin(this, this.auth_0, void 0, continuation);
  };
  function Coroutine$signOut_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$signOut_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$signOut_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$signOut_0.prototype.constructor = Coroutine$signOut_0;
  Coroutine$signOut_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.hourglass_0();
            this.state_0 = 2;
            this.result_0 = await_0(this.$this.auth_0.signOut(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.signIn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  LoginOnly.prototype.signOut = function (continuation_0, suspended) {
    var instance = new Coroutine$signOut_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  LoginOnly.prototype.hourglass_0 = function () {
    this.remAssign_9i7ztu$(new ProgressTC(this));
  };
  LoginOnly.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoginOnly',
    interfaces: [ForwardBase, HasKillsRedisplay]
  };
  function User() {
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  function ui$lambda$lambda$lambda$lambda_0(closure$tsts) {
    return function (fn) {
      fn(closure$tsts.toast);
      return Unit;
    };
  }
  function ui_0($receiver) {
    var boot = $receiver.slots;
    var $receiver_0 = (new Factory()).screen;
    boot.top = $receiver_0.slots.top;
    boot.main = $receiver_0.toastSlots.content;
    boot.toasts = ui$lambda$lambda$lambda$lambda_0($receiver_0.toastSlots.toasts);
    return $receiver_0.node;
  }
  function UserState() {
    UserState$Companion_getInstance();
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
  function UserState$Companion() {
    UserState$Companion_instance = this;
  }
  UserState$Companion.prototype.of_w82m7n$ = function (user) {
    if (user == null) {
      return UserState$NotLoggedIn_getInstance();
    }
     else {
      return new UserState$LoggedIn(user);
    }
  };
  UserState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UserState$Companion_instance = null;
  function UserState$Companion_getInstance() {
    if (UserState$Companion_instance === null) {
      new UserState$Companion();
    }
    return UserState$Companion_instance;
  }
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
      closure$rxv.now = UserState$Companion_getInstance().of_w82m7n$(u);
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
    return mapAsync(rxv, $receiver, fn, continuation);
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
  var deviceIdLocalStorageValue;
  function MessagingControl(deps, fcm) {
    CsKills_init(deps, this);
    this.fcm = fcm;
    this.$delegate_oaiyom$_0 = deps;
    this.fcmSupported = this.fcm != null;
    var tmp$;
    var tmp$_0;
    if ((tmp$ = deviceIdLocalStorageValue.value) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = this.get_randomDoc_lsue4w$(get_fcmTokensColl(this)).id;
      deviceIdLocalStorageValue.value = $receiver;
      tmp$_0 = $receiver;
    }
    this.deviceId = tmp$_0;
    this.grantState = new Var(MessagingControl$GrantState$Unknown_getInstance());
    this.buttonState = this.rx_y6x17j$(MessagingControl$buttonState$lambda(this));
    this.ownFcmTokenDoc = get_fcmTokensColl(this).doc_61zpoe$(this.deviceId);
    this.ownFcmToken = this.toRx_on0lyu$(this.docs_prxdpg$(this.ownFcmTokenDoc), new FcmToken());
    this.fcmTokens = this.toList_pujjsl$(get_fcmTokensColl(this)).allRx;
    this.enabledTokens = this.rx_y6x17j$(MessagingControl$enabledTokens$lambda(this));
    this.hasEnabledTokens = this.rx_y6x17j$(MessagingControl$hasEnabledTokens$lambda(this));
    this.enabledLocalToken = this.rx_y6x17j$(MessagingControl$enabledLocalToken$lambda(this));
    this.isGranted = this.rx_y6x17j$(MessagingControl$isGranted$lambda(this));
    this.canEnable = this.rx_y6x17j$(MessagingControl$canEnable$lambda(this));
    this.canDisable = this.rx_y6x17j$(MessagingControl$canDisable$lambda(this));
    this.hasVisibleMenuItems = this.rx_y6x17j$(MessagingControl$hasVisibleMenuItems$lambda(this));
    if (this.fcm != null) {
      var tokenPromise = this.fcm.getToken();
      if (tokenPromise == null) {
        this.grantState.remAssign_11rb$(MessagingControl$GrantState$Ask_getInstance());
      }
       else {
        launchReport(this, MessagingControl_init$lambda$lambda(this, tokenPromise));
      }
      this.forEachTrue_aq5y71$(this.isGranted, MessagingControl_init$lambda(this));
    }
     else {
      this.forEachTrue_aq5y71$(this.rx_y6x17j$(MessagingControl_init$lambda_0(this)), MessagingControl_init$lambda_1(this));
    }
  }
  function MessagingControl$GrantState() {
  }
  function MessagingControl$GrantState$Unknown() {
    MessagingControl$GrantState$Unknown_instance = this;
    MessagingControl$GrantState.call(this);
  }
  MessagingControl$GrantState$Unknown.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Unknown',
    interfaces: [MessagingControl$GrantState]
  };
  var MessagingControl$GrantState$Unknown_instance = null;
  function MessagingControl$GrantState$Unknown_getInstance() {
    if (MessagingControl$GrantState$Unknown_instance === null) {
      new MessagingControl$GrantState$Unknown();
    }
    return MessagingControl$GrantState$Unknown_instance;
  }
  function MessagingControl$GrantState$Ask() {
    MessagingControl$GrantState$Ask_instance = this;
    MessagingControl$GrantState.call(this);
  }
  MessagingControl$GrantState$Ask.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Ask',
    interfaces: [MessagingControl$GrantState]
  };
  var MessagingControl$GrantState$Ask_instance = null;
  function MessagingControl$GrantState$Ask_getInstance() {
    if (MessagingControl$GrantState$Ask_instance === null) {
      new MessagingControl$GrantState$Ask();
    }
    return MessagingControl$GrantState$Ask_instance;
  }
  function MessagingControl$GrantState$Granted() {
    MessagingControl$GrantState$Granted_instance = this;
    MessagingControl$GrantState.call(this);
  }
  MessagingControl$GrantState$Granted.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Granted',
    interfaces: [MessagingControl$GrantState]
  };
  var MessagingControl$GrantState$Granted_instance = null;
  function MessagingControl$GrantState$Granted_getInstance() {
    if (MessagingControl$GrantState$Granted_instance === null) {
      new MessagingControl$GrantState$Granted();
    }
    return MessagingControl$GrantState$Granted_instance;
  }
  function MessagingControl$GrantState$Denied() {
    MessagingControl$GrantState$Denied_instance = this;
    MessagingControl$GrantState.call(this);
  }
  MessagingControl$GrantState$Denied.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Denied',
    interfaces: [MessagingControl$GrantState]
  };
  var MessagingControl$GrantState$Denied_instance = null;
  function MessagingControl$GrantState$Denied_getInstance() {
    if (MessagingControl$GrantState$Denied_instance === null) {
      new MessagingControl$GrantState$Denied();
    }
    return MessagingControl$GrantState$Denied_instance;
  }
  function MessagingControl$GrantState$Error() {
    MessagingControl$GrantState$Error_instance = this;
    MessagingControl$GrantState.call(this);
  }
  MessagingControl$GrantState$Error.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Error',
    interfaces: [MessagingControl$GrantState]
  };
  var MessagingControl$GrantState$Error_instance = null;
  function MessagingControl$GrantState$Error_getInstance() {
    if (MessagingControl$GrantState$Error_instance === null) {
      new MessagingControl$GrantState$Error();
    }
    return MessagingControl$GrantState$Error_instance;
  }
  MessagingControl$GrantState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GrantState',
    interfaces: []
  };
  function MessagingControl$State() {
  }
  function MessagingControl$State$Unsupported() {
    MessagingControl$State$Unsupported_instance = this;
    MessagingControl$State.call(this);
  }
  MessagingControl$State$Unsupported.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Unsupported',
    interfaces: [MessagingControl$State]
  };
  var MessagingControl$State$Unsupported_instance = null;
  function MessagingControl$State$Unsupported_getInstance() {
    if (MessagingControl$State$Unsupported_instance === null) {
      new MessagingControl$State$Unsupported();
    }
    return MessagingControl$State$Unsupported_instance;
  }
  function MessagingControl$State$Denied() {
    MessagingControl$State$Denied_instance = this;
    MessagingControl$State.call(this);
  }
  MessagingControl$State$Denied.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Denied',
    interfaces: [MessagingControl$State]
  };
  var MessagingControl$State$Denied_instance = null;
  function MessagingControl$State$Denied_getInstance() {
    if (MessagingControl$State$Denied_instance === null) {
      new MessagingControl$State$Denied();
    }
    return MessagingControl$State$Denied_instance;
  }
  function MessagingControl$State$Disabled() {
    MessagingControl$State$Disabled_instance = this;
    MessagingControl$State.call(this);
  }
  MessagingControl$State$Disabled.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Disabled',
    interfaces: [MessagingControl$State]
  };
  var MessagingControl$State$Disabled_instance = null;
  function MessagingControl$State$Disabled_getInstance() {
    if (MessagingControl$State$Disabled_instance === null) {
      new MessagingControl$State$Disabled();
    }
    return MessagingControl$State$Disabled_instance;
  }
  function MessagingControl$State$Enabled() {
    MessagingControl$State$Enabled_instance = this;
    MessagingControl$State.call(this);
  }
  MessagingControl$State$Enabled.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Enabled',
    interfaces: [MessagingControl$State]
  };
  var MessagingControl$State$Enabled_instance = null;
  function MessagingControl$State$Enabled_getInstance() {
    if (MessagingControl$State$Enabled_instance === null) {
      new MessagingControl$State$Enabled();
    }
    return MessagingControl$State$Enabled_instance;
  }
  MessagingControl$State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function MessagingControl$disableNotifications$lambda$lambda$lambda() {
    return new FcmToken();
  }
  function Coroutine$MessagingControl$disableNotifications$lambda$lambda(closure$doc_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$doc = closure$doc_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$MessagingControl$disableNotifications$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MessagingControl$disableNotifications$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MessagingControl$disableNotifications$lambda$lambda.prototype.constructor = Coroutine$MessagingControl$disableNotifications$lambda$lambda;
  Coroutine$MessagingControl$disableNotifications$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrDefault_we3fe6$(this.local$closure$doc, MessagingControl$disableNotifications$lambda$lambda$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.doc;
            $receiver.enabled.remAssign_11rc$(false);
            return this.local$$receiver.txSet_y1t3au$(this.local$closure$doc, $receiver);
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
  function MessagingControl$disableNotifications$lambda$lambda(closure$doc_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MessagingControl$disableNotifications$lambda$lambda(closure$doc_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MessagingControl$disableNotifications$lambda(closure$doc_0, this$MessagingControl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$doc = closure$doc_0;
    this.local$this$MessagingControl = this$MessagingControl_0;
  }
  Coroutine$MessagingControl$disableNotifications$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MessagingControl$disableNotifications$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MessagingControl$disableNotifications$lambda.prototype.constructor = Coroutine$MessagingControl$disableNotifications$lambda;
  Coroutine$MessagingControl$disableNotifications$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = txTry(this.local$this$MessagingControl, MessagingControl$disableNotifications$lambda$lambda(this.local$closure$doc), this);
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
  function MessagingControl$disableNotifications$lambda(closure$doc_0, this$MessagingControl_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MessagingControl$disableNotifications$lambda(closure$doc_0, this$MessagingControl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MessagingControl.prototype.disableNotifications_0 = function (doc) {
    return launchReport(this, MessagingControl$disableNotifications$lambda(doc, this));
  };
  function MessagingControl$enableNotifications$lambda$lambda() {
    return new FcmToken();
  }
  function Coroutine$MessagingControl$enableNotifications$lambda(this$MessagingControl_0, closure$token_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MessagingControl = this$MessagingControl_0;
    this.local$closure$token = closure$token_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$MessagingControl$enableNotifications$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MessagingControl$enableNotifications$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MessagingControl$enableNotifications$lambda.prototype.constructor = Coroutine$MessagingControl$enableNotifications$lambda;
  Coroutine$MessagingControl$enableNotifications$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$MessagingControl.ownFcmTokenDoc;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrDefault_we3fe6$(this.local$this$MessagingControl.ownFcmTokenDoc, MessagingControl$enableNotifications$lambda$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.doc;
            var closure$token = this.local$closure$token;
            $receiver.enabled.remAssign_11rc$(true);
            $receiver.token.remAssign_11rc$(closure$token);
            return this.local$$receiver.txSet_y1t3au$(this.local$tmp$, $receiver);
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
  function MessagingControl$enableNotifications$lambda(this$MessagingControl_0, closure$token_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MessagingControl$enableNotifications$lambda(this$MessagingControl_0, closure$token_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$enableNotifications_0($this, token_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$token = token_0;
  }
  Coroutine$enableNotifications_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$enableNotifications_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$enableNotifications_0.prototype.constructor = Coroutine$enableNotifications_0;
  Coroutine$enableNotifications_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = txTry(this.$this, MessagingControl$enableNotifications$lambda(this.$this, this.local$token), this);
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
  MessagingControl.prototype.enableNotifications_0 = function (token_0, continuation_0, suspended) {
    var instance = new Coroutine$enableNotifications_0(this, token_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  MessagingControl.prototype.disableNotifications = function () {
    this.disableNotifications_0(this.ownFcmTokenDoc);
  };
  function MessagingControl$publishOnlineToken$lambda$lambda$lambda() {
    return new FcmToken();
  }
  function Coroutine$MessagingControl$publishOnlineToken$lambda$lambda(this$MessagingControl_0, closure$token_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$MessagingControl = this$MessagingControl_0;
    this.local$closure$token = closure$token_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$MessagingControl$publishOnlineToken$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MessagingControl$publishOnlineToken$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MessagingControl$publishOnlineToken$lambda$lambda.prototype.constructor = Coroutine$MessagingControl$publishOnlineToken$lambda$lambda;
  Coroutine$MessagingControl$publishOnlineToken$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$MessagingControl.ownFcmTokenDoc;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.getOrDefault_we3fe6$(this.local$this$MessagingControl.ownFcmTokenDoc, MessagingControl$publishOnlineToken$lambda$lambda$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.doc;
            var closure$token = this.local$closure$token;
            $receiver.token.remAssign_11rc$(closure$token);
            return this.local$$receiver.txSet_y1t3au$(this.local$tmp$, $receiver);
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
  function MessagingControl$publishOnlineToken$lambda$lambda(this$MessagingControl_0, closure$token_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$MessagingControl$publishOnlineToken$lambda$lambda(this$MessagingControl_0, closure$token_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MessagingControl$publishOnlineToken$lambda(this$MessagingControl_0, closure$token_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MessagingControl = this$MessagingControl_0;
    this.local$closure$token = closure$token_0;
  }
  Coroutine$MessagingControl$publishOnlineToken$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MessagingControl$publishOnlineToken$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MessagingControl$publishOnlineToken$lambda.prototype.constructor = Coroutine$MessagingControl$publishOnlineToken$lambda;
  Coroutine$MessagingControl$publishOnlineToken$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = txTry(this.local$this$MessagingControl, MessagingControl$publishOnlineToken$lambda$lambda(this.local$this$MessagingControl, this.local$closure$token), this);
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
  function MessagingControl$publishOnlineToken$lambda(this$MessagingControl_0, closure$token_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MessagingControl$publishOnlineToken$lambda(this$MessagingControl_0, closure$token_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MessagingControl.prototype.publishOnlineToken_0 = function (token) {
    return launchReport(this, MessagingControl$publishOnlineToken$lambda(this, token));
  };
  MessagingControl.prototype.disableAllNotifications = function () {
    var tmp$;
    tmp$ = this.fcmTokens.now.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.disableNotifications_0(get_docWrap(element));
    }
  };
  function Coroutine$MessagingControl$enableNotifications$lambda_0(this$MessagingControl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$this$MessagingControl = this$MessagingControl_0;
  }
  Coroutine$MessagingControl$enableNotifications$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MessagingControl$enableNotifications$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MessagingControl$enableNotifications$lambda_0.prototype.constructor = Coroutine$MessagingControl$enableNotifications$lambda_0;
  Coroutine$MessagingControl$enableNotifications$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = await_0(this.local$this$MessagingControl.fcm.requestPermission(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$this$MessagingControl.grantState.remAssign_11rb$(MessagingControl$GrantState$Granted_getInstance());
            this.state_0 = 2;
            this.result_0 = await_0(ensureNotNull(this.local$this$MessagingControl.fcm.getToken()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            tmp$ = ensureNotNull(this.result_0);
            this.state_0 = 3;
            this.result_0 = this.local$this$MessagingControl.enableNotifications_0(tmp$, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0;
          case 4:
            this.exceptionState_0 = 6;
            var e = this.exception_0;
            var tmp$_0;
            tmp$_0 = this.local$this$MessagingControl.grantState;
            var tmp$_1;
            if (e.code == 'messaging/permission-blocked') {
              tmp$_1 = MessagingControl$GrantState$Denied_getInstance();
            }
             else {
              reportd(e);
              tmp$_1 = MessagingControl$GrantState$Error_getInstance();
            }

            return tmp$_0.remAssign_11rb$(tmp$_1), Unit;
          case 5:
            return;
          case 6:
            throw this.exception_0;
          default:this.state_0 = 6;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function MessagingControl$enableNotifications$lambda_0(this$MessagingControl_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MessagingControl$enableNotifications$lambda_0(this$MessagingControl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  MessagingControl.prototype.enableNotifications = function () {
    if (this.fcm != null) {
      launchReport(this, MessagingControl$enableNotifications$lambda_0(this));
    }
  };
  Object.defineProperty(MessagingControl.prototype, 'db', {
    get: function () {
      return this.$delegate_oaiyom$_0.db;
    }
  });
  Object.defineProperty(MessagingControl.prototype, 'lib', {
    get: function () {
      return this.$delegate_oaiyom$_0.lib;
    }
  });
  Object.defineProperty(MessagingControl.prototype, 'user', {
    get: function () {
      return this.$delegate_oaiyom$_0.user;
    }
  });
  function MessagingControl$buttonState$lambda(this$MessagingControl) {
    return function ($receiver) {
      var tmp$;
      if (!this$MessagingControl.fcmSupported) {
        return MessagingControl$State$Unsupported_getInstance();
      }
       else {
        tmp$ = this$MessagingControl.grantState.invoke();
        if (equals(tmp$, MessagingControl$GrantState$Denied_getInstance()))
          return MessagingControl$State$Denied_getInstance();
        else if (equals(tmp$, MessagingControl$GrantState$Granted_getInstance()))
          return this$MessagingControl.enabledLocalToken.invoke() ? MessagingControl$State$Enabled_getInstance() : MessagingControl$State$Disabled_getInstance();
        else
          return MessagingControl$State$Disabled_getInstance();
      }
    };
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function MessagingControl$enabledTokens$lambda(this$MessagingControl) {
    return function ($receiver) {
      var $receiver_0 = this$MessagingControl.fcmTokens.invoke();
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.invoke().enabled.invoke())
          destination.add_11rb$(element);
      }
      return destination;
    };
  }
  function MessagingControl$hasEnabledTokens$lambda(this$MessagingControl) {
    return function ($receiver) {
      return !this$MessagingControl.enabledTokens.invoke().isEmpty();
    };
  }
  function MessagingControl$enabledLocalToken$lambda(this$MessagingControl) {
    return function ($receiver) {
      return this$MessagingControl.ownFcmToken.invoke().enabled.invoke();
    };
  }
  function MessagingControl$isGranted$lambda(this$MessagingControl) {
    return function ($receiver) {
      return equals(this$MessagingControl.grantState.invoke(), MessagingControl$GrantState$Granted_getInstance());
    };
  }
  function MessagingControl$canEnable$lambda(this$MessagingControl) {
    return function ($receiver) {
      return equals(this$MessagingControl.buttonState.invoke(), MessagingControl$State$Disabled_getInstance());
    };
  }
  function MessagingControl$canDisable$lambda(this$MessagingControl) {
    return function ($receiver) {
      return this$MessagingControl.enabledLocalToken.invoke();
    };
  }
  function MessagingControl$hasVisibleMenuItems$lambda(this$MessagingControl) {
    return function ($receiver) {
      return this$MessagingControl.canEnable.invoke() || this$MessagingControl.canDisable.invoke() || this$MessagingControl.hasEnabledTokens.invoke();
    };
  }
  function Coroutine$MessagingControl_init$lambda$lambda(this$MessagingControl_0, closure$tokenPromise_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.local$this$MessagingControl = this$MessagingControl_0;
    this.local$closure$tokenPromise = closure$tokenPromise_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$MessagingControl_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MessagingControl_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MessagingControl_init$lambda$lambda.prototype.constructor = Coroutine$MessagingControl_init$lambda$lambda;
  Coroutine$MessagingControl_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$MessagingControl.grantState;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = await_0(this.local$closure$tokenPromise, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var firstToken = this.result_0;
            if (firstToken != null) {
              this.local$tmp$_0 = MessagingControl$GrantState$Granted_getInstance();
            }
             else {
              this.local$tmp$_0 = MessagingControl$GrantState$Ask_getInstance();
            }

            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (e.code == 'messaging/notifications-blocked') {
              this.local$tmp$_0 = MessagingControl$GrantState$Denied_getInstance();
            }
             else {
              reportd(e);
              this.local$tmp$_0 = MessagingControl$GrantState$Error_getInstance();
            }

            this.state_0 = 3;
            continue;
          case 3:
            return this.local$tmp$.remAssign_11rb$(this.local$tmp$_0), Unit;
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
  function MessagingControl_init$lambda$lambda(this$MessagingControl_0, closure$tokenPromise_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MessagingControl_init$lambda$lambda(this$MessagingControl_0, closure$tokenPromise_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MessagingControl_init$lambda$lambda$lambda(closure$revalidate) {
    return function () {
      closure$revalidate.offer_11rb$(Unit);
      return Unit;
    };
  }
  function MessagingControl_init$lambda$lambda$lambda_0(closure$revalidate) {
    return function (it) {
      reportd(it);
      closure$revalidate.close_dbl4no$(it);
      return Unit;
    };
  }
  function MessagingControl_init$lambda$lambda$lambda_1(closure$revalidate) {
    return function () {
      closure$revalidate.close_dbl4no$();
      return Unit;
    };
  }
  function Coroutine$MessagingControl_init$lambda$lambda_0(this$MessagingControl_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MessagingControl = this$MessagingControl_0;
    this.local$this$ = this$_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$MessagingControl_init$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MessagingControl_init$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MessagingControl_init$lambda$lambda_0.prototype.constructor = Coroutine$MessagingControl_init$lambda$lambda_0;
  Coroutine$MessagingControl_init$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = await_0(ensureNotNull(this.local$this$MessagingControl.fcm.getToken()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var token = ensureNotNull(this.result_0);
            this.local$this$MessagingControl.publishOnlineToken_0(token);
            var revalidate = Channel(2147483647);
            plusAssign(this.local$this$.kills, this.local$this$MessagingControl.fcm.onTokenRefresh(MessagingControl_init$lambda$lambda$lambda(revalidate), MessagingControl_init$lambda$lambda$lambda_0(revalidate), MessagingControl_init$lambda$lambda$lambda_1(revalidate)));
            this.local$tmp$ = revalidate.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            if (!this.result_0) {
              this.state_0 = 8;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 6;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var e_0 = this.result_0;
            this.state_0 = 7;
            this.result_0 = await_0(ensureNotNull(this.local$this$MessagingControl.fcm.getToken()), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            var newToken = ensureNotNull(this.result_0);
            this.local$this$MessagingControl.publishOnlineToken_0(newToken);
            this.state_0 = 3;
            continue;
          case 8:
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
  function MessagingControl_init$lambda$lambda_0(this$MessagingControl_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MessagingControl_init$lambda$lambda_0(this$MessagingControl_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function MessagingControl_init$lambda(this$MessagingControl) {
    return function ($receiver) {
      launchReport(CsKills_init($receiver), MessagingControl_init$lambda$lambda_0(this$MessagingControl, $receiver));
      return Unit;
    };
  }
  function MessagingControl_init$lambda_0(this$MessagingControl) {
    return function ($receiver) {
      return this$MessagingControl.enabledLocalToken.invoke();
    };
  }
  function MessagingControl_init$lambda_1(this$MessagingControl) {
    return function ($receiver) {
      this$MessagingControl.disableNotifications();
      return Unit;
    };
  }
  MessagingControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessagingControl',
    interfaces: [CsDbKillsApi, HasDbLibUser, CsKills]
  };
  function messagingMenu$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      return this$.messaging.canEnable.invoke();
    };
  }
  function messagingMenu$lambda$lambda$lambda_0(this$) {
    return function () {
      this$.messaging.enableNotifications();
      return Unit;
    };
  }
  function messagingMenu$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      return this$.messaging.canDisable.invoke();
    };
  }
  function messagingMenu$lambda$lambda$lambda_2(this$) {
    return function () {
      this$.messaging.disableNotifications();
      return Unit;
    };
  }
  function messagingMenu$lambda$lambda$lambda_3(this$) {
    return function ($receiver) {
      return this$.messaging.hasEnabledTokens.invoke();
    };
  }
  function messagingMenu$lambda$lambda$lambda_4(this$) {
    return function () {
      this$.messaging.disableAllNotifications();
      return Unit;
    };
  }
  function messagingMenu($receiver, deps) {
    var $receiver_0 = $receiver.item;
    visible($receiver_0, deps, messagingMenu$lambda$lambda$lambda(deps));
    $receiver_0.text.remAssign_61zpoe$('Enable Notifications');
    get_comment($receiver_0.icon.fa);
    click($receiver_0, deps, messagingMenu$lambda$lambda$lambda_0(deps));
    var $receiver_1 = $receiver.item;
    visible($receiver_1, deps, messagingMenu$lambda$lambda$lambda_1(deps));
    $receiver_1.text.remAssign_61zpoe$('Disable Notifications');
    get_commentSlash($receiver_1.icon.fa);
    click($receiver_1, deps, messagingMenu$lambda$lambda$lambda_2(deps));
    var $receiver_2 = $receiver.item;
    visible($receiver_2, deps, messagingMenu$lambda$lambda$lambda_3(deps));
    $receiver_2.text.remAssign_61zpoe$('Disable Notifications on All Devices');
    get_ban($receiver_2.icon.fa);
    click($receiver_2, deps, messagingMenu$lambda$lambda$lambda_4(deps));
  }
  function messagingButton$lambda$lambda$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    get_textMuted($receiver_0);
    get_textJustify($receiver_0);
    remAssign_0($receiver, 'Notifications are not supported by your browser.');
    return Unit;
  }
  function messagingButton$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    get_textMuted($receiver_0);
    get_textJustify($receiver_0);
    remAssign_0($receiver, 'Notifications have been disabled by the user.');
    return Unit;
  }
  function messagingButton$lambda$lambda$lambda$lambda(this$) {
    return function () {
      this$.messaging.disableNotifications();
      return Unit;
    };
  }
  function messagingButton$lambda$lambda$lambda$lambda_0(this$) {
    return function () {
      this$.messaging.enableNotifications();
      return Unit;
    };
  }
  function messagingButton$lambda$lambda(this$, closure$deps) {
    return function () {
      var tmp$;
      tmp$ = this$.messaging.buttonState.invoke();
      if (equals(tmp$, MessagingControl$State$Unsupported_getInstance()))
        return invoke(get_div(document), messagingButton$lambda$lambda$lambda);
      else if (equals(tmp$, MessagingControl$State$Denied_getInstance()))
        return invoke(get_div(document), messagingButton$lambda$lambda$lambda_0);
      else if (equals(tmp$, MessagingControl$State$Enabled_getInstance())) {
        var $receiver = widget.factory.button;
        var closure$deps_0 = closure$deps;
        var this$_0 = this$;
        $receiver.m1p2;
        $receiver.secondary;
        remAssign_0($receiver.text, 'Notifications Enabled');
        get_comment($receiver.icon.fa);
        $receiver.iconAndText;
        click_0($receiver, closure$deps_0, messagingButton$lambda$lambda$lambda$lambda(this$_0));
        return $receiver.node;
      }
       else if (equals(tmp$, MessagingControl$State$Disabled_getInstance())) {
        var $receiver_0 = widget.factory.button;
        var closure$deps_1 = closure$deps;
        var this$_1 = this$;
        $receiver_0.m1p2;
        $receiver_0.secondary;
        remAssign_0($receiver_0.text, 'Notifications Disabled');
        get_commentSlash($receiver_0.icon.fa);
        $receiver_0.iconAndText;
        click_0($receiver_0, closure$deps_1, messagingButton$lambda$lambda$lambda$lambda_0(this$_1));
        return $receiver_0.node;
      }
       else
        return Kotlin.noWhenBranchMatched();
    };
  }
  function messagingButton($receiver, deps) {
    rx(get_widget($receiver), deps, messagingButton$lambda$lambda(deps, deps));
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$commonfb = _.commonfb || (_.commonfb = {});
  package$commonfb.DbKillsApiCommonfb = DbKillsApiCommonfb;
  package$commonfb.FBApi = FBApi;
  package$commonfb.FBBackApi = FBBackApi;
  package$commonfb.CsDbKillsUixApi = CsDbKillsUixApi;
  package$commonfb.BackCsDbKillsUixApi = BackCsDbKillsUixApi;
  package$commonfb.KillsLoginApi = KillsLoginApi;
  package$commonfb.KillsLoginUixApi = KillsLoginUixApi;
  package$commonfb.KillsMessagingUixApi = KillsMessagingUixApi;
  package$commonfb.HasDbEdit = HasDbEdit;
  package$commonfb.HasDbEditKills = HasDbEditKills;
  package$commonfb.HasCsDbKillsToast = HasCsDbKillsToast;
  package$commonfb.HasLogin = HasLogin;
  package$commonfb.HasKillsLogin = HasKillsLogin;
  package$commonfb.HasMessaging = HasMessaging;
  package$commonfb.HasMessagingUix = HasMessagingUix;
  package$commonfb.HasKillsMessagingUix = HasKillsMessagingUix;
  package$commonfb.HasDbFcmLibMessagingUser = HasDbFcmLibMessagingUser;
  var package$editing = package$commonfb.editing || (package$commonfb.editing = {});
  package$editing.rxEditing_ehcefl$ = rxEditing;
  package$editing.rxCreating_ei2m9p$ = rxCreating;
  Object.defineProperty(package$commonfb, 'isFcmSupported', {
    get: get_isFcmSupported
  });
  package$commonfb.createMessagingDeferred_yrhuj1$ = createMessagingDeferred;
  Object.defineProperty(package$commonfb, 'FB', {
    get: FB_getInstance
  });
  package$commonfb.Callable = Callable;
  package$commonfb.callPromise_sdkxns$ = callPromise;
  package$commonfb.callable_t9d6zm$ = callable;
  package$commonfb.call_sdkxns$ = call;
  package$commonfb.FbLinksDeps = FbLinksDeps;
  package$commonfb.db_3oaftp$ = db;
  package$commonfb.FbLinksApi = FbLinksApi;
  Object.defineProperty(FbLinksFactory, 'Companion', {
    get: FbLinksFactory$Companion_getInstance
  });
  package$commonfb.FbLinksFactory = FbLinksFactory;
  var package$fwdlogin = package$commonfb.fwdlogin || (package$commonfb.fwdlogin = {});
  package$fwdlogin.FwdLogin = FwdLogin;
  var package$login = package$commonfb.login || (package$commonfb.login = {});
  package$login.Login = Login;
  package$login.ui_c7phaq$ = ui;
  package$login.imageUrl_m1064u$ = imageUrl;
  package$login.userIcon_t3cq7b$ = userIcon_0;
  var package$loginbase = package$commonfb.loginbase || (package$commonfb.loginbase = {});
  package$loginbase.LoginBasePath = LoginBasePath;
  package$loginbase.UserStateView = UserStateView;
  package$loginbase.UnkownUser = UnkownUser;
  LoginBase.Slots = LoginBase$Slots;
  package$loginbase.LoginBase = LoginBase;
  package$loginbase.enablePersistenceAndWait_gwf93m$ = enablePersistenceAndWait;
  package$loginbase.disableNetworkAndWait_gwf93m$ = disableNetworkAndWait;
  package$loginbase.performLogin_45a7ks$ = performLogin;
  package$loginbase.performLogin_igbwa$ = performLogin_0;
  package$loginbase.firstUser_s1fod4$ = firstUser;
  package$loginbase.RequireUser = RequireUser;
  package$loginbase.LoginOnly = LoginOnly;
  package$loginbase.User = User;
  package$loginbase.ui_wzvor4$ = ui_0;
  Object.defineProperty(UserState, 'Unknown', {
    get: UserState$Unknown_getInstance
  });
  Object.defineProperty(UserState, 'NotLoggedIn', {
    get: UserState$NotLoggedIn_getInstance
  });
  UserState.LoggedIn = UserState$LoggedIn;
  Object.defineProperty(UserState, 'Companion', {
    get: UserState$Companion_getInstance
  });
  package$commonfb.UserState = UserState;
  package$commonfb.runUserState_53d9qe$ = runUserState;
  package$commonfb.runUserState_fqlg2o$ = runUserState_0;
  package$commonfb.toUser_e06ocd$ = toUser;
  var package$messaging = package$commonfb.messaging || (package$commonfb.messaging = {});
  Object.defineProperty(package$messaging, 'deviceIdLocalStorageValue', {
    get: function () {
      return deviceIdLocalStorageValue;
    }
  });
  Object.defineProperty(MessagingControl$GrantState, 'Unknown', {
    get: MessagingControl$GrantState$Unknown_getInstance
  });
  Object.defineProperty(MessagingControl$GrantState, 'Ask', {
    get: MessagingControl$GrantState$Ask_getInstance
  });
  Object.defineProperty(MessagingControl$GrantState, 'Granted', {
    get: MessagingControl$GrantState$Granted_getInstance
  });
  Object.defineProperty(MessagingControl$GrantState, 'Denied', {
    get: MessagingControl$GrantState$Denied_getInstance
  });
  Object.defineProperty(MessagingControl$GrantState, 'Error', {
    get: MessagingControl$GrantState$Error_getInstance
  });
  MessagingControl.GrantState = MessagingControl$GrantState;
  Object.defineProperty(MessagingControl$State, 'Unsupported', {
    get: MessagingControl$State$Unsupported_getInstance
  });
  Object.defineProperty(MessagingControl$State, 'Denied', {
    get: MessagingControl$State$Denied_getInstance
  });
  Object.defineProperty(MessagingControl$State, 'Disabled', {
    get: MessagingControl$State$Disabled_getInstance
  });
  Object.defineProperty(MessagingControl$State, 'Enabled', {
    get: MessagingControl$State$Enabled_getInstance
  });
  MessagingControl.State = MessagingControl$State;
  package$messaging.MessagingControl = MessagingControl;
  package$messaging.messagingMenu_31gnmq$ = messagingMenu;
  package$messaging.messagingButton_u7nxym$ = messagingButton;
  DbKillsApiCommonfb.prototype.get_live_73z9b6$ = DbKillsApi.prototype.get_live_73z9b6$;
  DbKillsApiCommonfb.prototype.get_oldKilled_vsdo34$ = DbKillsApi.prototype.get_oldKilled_vsdo34$;
  DbKillsApiCommonfb.prototype.get_oldKilledOpt_vsdo34$ = DbKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  DbKillsApiCommonfb.prototype.get_randomDoc_lsue4w$ = DbKillsApi.prototype.get_randomDoc_lsue4w$;
  DbKillsApiCommonfb.prototype.get_randomDoc_sj9vaa$ = DbKillsApi.prototype.get_randomDoc_sj9vaa$;
  DbKillsApiCommonfb.prototype.get_ref_sj9vaa$ = DbKillsApi.prototype.get_ref_sj9vaa$;
  DbKillsApiCommonfb.prototype.get_ref_aqty80$ = DbKillsApi.prototype.get_ref_aqty80$;
  DbKillsApiCommonfb.prototype.rx_y6x17j$ = DbKillsApi.prototype.rx_y6x17j$;
  DbKillsApiCommonfb.prototype.rx_46ic4w$ = DbKillsApi.prototype.rx_46ic4w$;
  DbKillsApiCommonfb.prototype.rx_wgabca$ = DbKillsApi.prototype.rx_wgabca$;
  DbKillsApiCommonfb.prototype.rx_djv61p$ = DbKillsApi.prototype.rx_djv61p$;
  DbKillsApiCommonfb.prototype.anyRx_tnde95$ = DbKillsApi.prototype.anyRx_tnde95$;
  DbKillsApiCommonfb.prototype.containsRx_1w65cx$ = DbKillsApi.prototype.containsRx_1w65cx$;
  DbKillsApiCommonfb.prototype.delete_73z9b6$ = DbKillsApi.prototype.delete_73z9b6$;
  DbKillsApiCommonfb.prototype.delete_ihdkly$ = DbKillsApi.prototype.delete_ihdkly$;
  DbKillsApiCommonfb.prototype.feedTo_9o5f67$ = DbKillsApi.prototype.feedTo_9o5f67$;
  DbKillsApiCommonfb.prototype.filtered_tnde95$ = DbKillsApi.prototype.filtered_tnde95$;
  DbKillsApiCommonfb.prototype.forEach_xwzbbo$ = DbKillsApi.prototype.forEach_xwzbbo$;
  DbKillsApiCommonfb.prototype.forEach_35q7bt$ = DbKillsApi.prototype.forEach_35q7bt$;
  DbKillsApiCommonfb.prototype.forEachLater_xwzbbo$ = DbKillsApi.prototype.forEachLater_xwzbbo$;
  DbKillsApiCommonfb.prototype.forEachNonNull_cjboeh$ = DbKillsApi.prototype.forEachNonNull_cjboeh$;
  DbKillsApiCommonfb.prototype.forEachTrue_aq5y71$ = DbKillsApi.prototype.forEachTrue_aq5y71$;
  DbKillsApiCommonfb.prototype.getCachedOrServer_prxdpg$ = DbKillsApi.prototype.getCachedOrServer_prxdpg$;
  DbKillsApiCommonfb.prototype.getOrNull_m1hph$$default = DbKillsApi.prototype.getOrNull_m1hph$$default;
  DbKillsApiCommonfb.prototype.incremented_eoy9qo$ = DbKillsApi.prototype.incremented_eoy9qo$;
  DbKillsApiCommonfb.prototype.linked_n1nom7$ = DbKillsApi.prototype.linked_n1nom7$;
  DbKillsApiCommonfb.prototype.listen_ubid8w$ = DbKillsApi.prototype.listen_ubid8w$;
  DbKillsApiCommonfb.prototype.map_jtxi0h$ = DbKillsApi.prototype.map_jtxi0h$;
  DbKillsApiCommonfb.prototype.mapLive_1mq1ue$ = DbKillsApi.prototype.mapLive_1mq1ue$;
  DbKillsApiCommonfb.prototype.onChange_rlu5c6$ = DbKillsApi.prototype.onChange_rlu5c6$;
  DbKillsApiCommonfb.prototype.onSnapshotNext_po64up$ = DbKillsApi.prototype.onSnapshotNext_po64up$;
  DbKillsApiCommonfb.prototype.plusAssign_ubid8w$ = DbKillsApi.prototype.plusAssign_ubid8w$;
  DbKillsApiCommonfb.prototype.process_7xi3v7$ = DbKillsApi.prototype.process_7xi3v7$;
  DbKillsApiCommonfb.prototype.query_wzkv1r$$default = DbKillsApi.prototype.query_wzkv1r$$default;
  DbKillsApiCommonfb.prototype.randomEditable_mx4g9l$$default = DbKillsApi.prototype.randomEditable_mx4g9l$$default;
  DbKillsApiCommonfb.prototype.remAssign_wgabca$ = DbKillsApi.prototype.remAssign_wgabca$;
  DbKillsApiCommonfb.prototype.remAssign_djv61p$ = DbKillsApi.prototype.remAssign_djv61p$;
  DbKillsApiCommonfb.prototype.remAssign_7fncnf$ = DbKillsApi.prototype.remAssign_7fncnf$;
  DbKillsApiCommonfb.prototype.rxClass_c5yvvx$ = DbKillsApi.prototype.rxClass_c5yvvx$;
  DbKillsApiCommonfb.prototype.rxClass_6sflyw$ = DbKillsApi.prototype.rxClass_6sflyw$;
  DbKillsApiCommonfb.prototype.save_73z9b6$ = DbKillsApi.prototype.save_73z9b6$;
  DbKillsApiCommonfb.prototype.save_biv66q$ = DbKillsApi.prototype.save_biv66q$;
  DbKillsApiCommonfb.prototype.set_o9yh22$$default = DbKillsApi.prototype.set_o9yh22$$default;
  DbKillsApiCommonfb.prototype.toChannel_z5dyp2$ = DbKillsApi.prototype.toChannel_z5dyp2$;
  DbKillsApiCommonfb.prototype.toChannelLater_z5dyp2$ = DbKillsApi.prototype.toChannelLater_z5dyp2$;
  DbKillsApiCommonfb.prototype.toFsDoc_bo0woj$$default = DbKillsApi.prototype.toFsDoc_bo0woj$$default;
  DbKillsApiCommonfb.prototype.toRandomFsDoc_xc7wmg$ = DbKillsApi.prototype.toRandomFsDoc_xc7wmg$;
  DbKillsApiCommonfb.prototype.toRxSet_jr4bl4$ = DbKillsApi.prototype.toRxSet_jr4bl4$;
  DbKillsApiCommonfb.prototype.getOrNull_m1hph$ = DbKillsApi.prototype.getOrNull_m1hph$;
  DbKillsApiCommonfb.prototype.query_wzkv1r$ = DbKillsApi.prototype.query_wzkv1r$;
  DbKillsApiCommonfb.prototype.randomEditable_mx4g9l$ = DbKillsApi.prototype.randomEditable_mx4g9l$;
  DbKillsApiCommonfb.prototype.set_o9yh22$ = DbKillsApi.prototype.set_o9yh22$;
  DbKillsApiCommonfb.prototype.toFsDoc_bo0woj$ = DbKillsApi.prototype.toFsDoc_bo0woj$;
  CsDbKillsUixApi.prototype.get_docsOrNull_g2zw3r$ = CsDbKillsApi.prototype.get_docsOrNull_g2zw3r$;
  CsDbKillsUixApi.prototype.get_ids_qko62t$ = CsDbKillsApi.prototype.get_ids_qko62t$;
  CsDbKillsUixApi.prototype.get_live_73z9b6$ = CsDbKillsApi.prototype.get_live_73z9b6$;
  CsDbKillsUixApi.prototype.get_oldKilled_vsdo34$ = CsDbKillsApi.prototype.get_oldKilled_vsdo34$;
  CsDbKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = CsDbKillsApi.prototype.get_oldKilledOpt_vsdo34$;
  CsDbKillsUixApi.prototype.get_randomDoc_lsue4w$ = CsDbKillsApi.prototype.get_randomDoc_lsue4w$;
  CsDbKillsUixApi.prototype.get_randomDoc_sj9vaa$ = CsDbKillsApi.prototype.get_randomDoc_sj9vaa$;
  CsDbKillsUixApi.prototype.get_ref_sj9vaa$ = CsDbKillsApi.prototype.get_ref_sj9vaa$;
  CsDbKillsUixApi.prototype.get_ref_aqty80$ = CsDbKillsApi.prototype.get_ref_aqty80$;
  CsDbKillsUixApi.prototype.get_snapshots_79y88y$ = CsDbKillsApi.prototype.get_snapshots_79y88y$;
  CsDbKillsUixApi.prototype.rx_y6x17j$ = CsDbKillsApi.prototype.rx_y6x17j$;
  CsDbKillsUixApi.prototype.rx_46ic4w$ = CsDbKillsApi.prototype.rx_46ic4w$;
  CsDbKillsUixApi.prototype.rx_wgabca$ = CsDbKillsApi.prototype.rx_wgabca$;
  CsDbKillsUixApi.prototype.rx_djv61p$ = CsDbKillsApi.prototype.rx_djv61p$;
  CsDbKillsUixApi.prototype.anyRx_tnde95$ = CsDbKillsApi.prototype.anyRx_tnde95$;
  CsDbKillsUixApi.prototype.containsRx_1w65cx$ = CsDbKillsApi.prototype.containsRx_1w65cx$;
  CsDbKillsUixApi.prototype.delete_73z9b6$ = CsDbKillsApi.prototype.delete_73z9b6$;
  CsDbKillsUixApi.prototype.delete_ihdkly$ = CsDbKillsApi.prototype.delete_ihdkly$;
  CsDbKillsUixApi.prototype.docs_prxdpg$ = CsDbKillsApi.prototype.docs_prxdpg$;
  CsDbKillsUixApi.prototype.documentChanges_pujjsl$$default = CsDbKillsApi.prototype.documentChanges_pujjsl$$default;
  CsDbKillsUixApi.prototype.documentChanges_z2kgpb$ = CsDbKillsApi.prototype.documentChanges_z2kgpb$;
  CsDbKillsUixApi.prototype.events_9k4h2$ = CsDbKillsApi.prototype.events_9k4h2$;
  CsDbKillsUixApi.prototype.feedTo_9o5f67$ = CsDbKillsApi.prototype.feedTo_9o5f67$;
  CsDbKillsUixApi.prototype.filter_hu0si9$ = CsDbKillsApi.prototype.filter_hu0si9$;
  CsDbKillsUixApi.prototype.filtered_tnde95$ = CsDbKillsApi.prototype.filtered_tnde95$;
  CsDbKillsUixApi.prototype.forEach_xwzbbo$ = CsDbKillsApi.prototype.forEach_xwzbbo$;
  CsDbKillsUixApi.prototype.forEach_35q7bt$ = CsDbKillsApi.prototype.forEach_35q7bt$;
  CsDbKillsUixApi.prototype.forEachLater_xwzbbo$ = CsDbKillsApi.prototype.forEachLater_xwzbbo$;
  CsDbKillsUixApi.prototype.forEachNonNull_cjboeh$ = CsDbKillsApi.prototype.forEachNonNull_cjboeh$;
  CsDbKillsUixApi.prototype.forEachTrue_aq5y71$ = CsDbKillsApi.prototype.forEachTrue_aq5y71$;
  CsDbKillsUixApi.prototype.fsCache_sj6zb3$$default = CsDbKillsApi.prototype.fsCache_sj6zb3$$default;
  CsDbKillsUixApi.prototype.fsCache_aujjp8$ = CsDbKillsApi.prototype.fsCache_aujjp8$;
  CsDbKillsUixApi.prototype.getCachedOrServer_prxdpg$ = CsDbKillsApi.prototype.getCachedOrServer_prxdpg$;
  CsDbKillsUixApi.prototype.getOrNull_m1hph$$default = CsDbKillsApi.prototype.getOrNull_m1hph$$default;
  CsDbKillsUixApi.prototype.incremented_eoy9qo$ = CsDbKillsApi.prototype.incremented_eoy9qo$;
  CsDbKillsUixApi.prototype.linked_n1nom7$ = CsDbKillsApi.prototype.linked_n1nom7$;
  CsDbKillsUixApi.prototype.listEvents_pujjsl$$default = CsDbKillsApi.prototype.listEvents_pujjsl$$default;
  CsDbKillsUixApi.prototype.listen_ubid8w$ = CsDbKillsApi.prototype.listen_ubid8w$;
  CsDbKillsUixApi.prototype.map_jtxi0h$ = CsDbKillsApi.prototype.map_jtxi0h$;
  CsDbKillsUixApi.prototype.mapLive_1mq1ue$ = CsDbKillsApi.prototype.mapLive_1mq1ue$;
  CsDbKillsUixApi.prototype.onChange_rlu5c6$ = CsDbKillsApi.prototype.onChange_rlu5c6$;
  CsDbKillsUixApi.prototype.onChange_oeam7t$ = KillsUixApi.prototype.onChange_oeam7t$;
  CsDbKillsUixApi.prototype.onSnapshotNext_po64up$ = CsDbKillsApi.prototype.onSnapshotNext_po64up$;
  CsDbKillsUixApi.prototype.plusAssign_ubid8w$ = CsDbKillsApi.prototype.plusAssign_ubid8w$;
  CsDbKillsUixApi.prototype.process_y3juat$ = CsDbKillsApi.prototype.process_y3juat$;
  CsDbKillsUixApi.prototype.process_7xi3v7$ = CsDbKillsApi.prototype.process_7xi3v7$;
  CsDbKillsUixApi.prototype.query_wzkv1r$$default = CsDbKillsApi.prototype.query_wzkv1r$$default;
  CsDbKillsUixApi.prototype.randomEditable_mx4g9l$$default = CsDbKillsApi.prototype.randomEditable_mx4g9l$$default;
  CsDbKillsUixApi.prototype.remAssign_wgabca$ = CsDbKillsApi.prototype.remAssign_wgabca$;
  CsDbKillsUixApi.prototype.remAssign_djv61p$ = CsDbKillsApi.prototype.remAssign_djv61p$;
  CsDbKillsUixApi.prototype.remAssign_7fncnf$ = CsDbKillsApi.prototype.remAssign_7fncnf$;
  CsDbKillsUixApi.prototype.rxClass_c5yvvx$ = CsDbKillsApi.prototype.rxClass_c5yvvx$;
  CsDbKillsUixApi.prototype.rxClass_6sflyw$ = CsDbKillsApi.prototype.rxClass_6sflyw$;
  CsDbKillsUixApi.prototype.rxClass_9npl0m$ = KillsUixApi.prototype.rxClass_9npl0m$;
  CsDbKillsUixApi.prototype.rxClass_62ldac$ = KillsUixApi.prototype.rxClass_62ldac$;
  CsDbKillsUixApi.prototype.save_73z9b6$ = CsDbKillsApi.prototype.save_73z9b6$;
  CsDbKillsUixApi.prototype.save_biv66q$ = CsDbKillsApi.prototype.save_biv66q$;
  CsDbKillsUixApi.prototype.set_o9yh22$$default = CsDbKillsApi.prototype.set_o9yh22$$default;
  CsDbKillsUixApi.prototype.toChannel_z5dyp2$ = CsDbKillsApi.prototype.toChannel_z5dyp2$;
  CsDbKillsUixApi.prototype.toChannelLater_z5dyp2$ = CsDbKillsApi.prototype.toChannelLater_z5dyp2$;
  CsDbKillsUixApi.prototype.toFsDoc_bo0woj$$default = CsDbKillsApi.prototype.toFsDoc_bo0woj$$default;
  CsDbKillsUixApi.prototype.toList_pujjsl$$default = CsDbKillsApi.prototype.toList_pujjsl$$default;
  CsDbKillsUixApi.prototype.toRandomFsDoc_xc7wmg$ = CsDbKillsApi.prototype.toRandomFsDoc_xc7wmg$;
  CsDbKillsUixApi.prototype.toRx_on0lyu$ = CsDbKillsApi.prototype.toRx_on0lyu$;
  CsDbKillsUixApi.prototype.toRxSet_vzwksx$ = CsDbKillsApi.prototype.toRxSet_vzwksx$;
  CsDbKillsUixApi.prototype.toRxSet_jr4bl4$ = CsDbKillsApi.prototype.toRxSet_jr4bl4$;
  CsDbKillsUixApi.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsApi.prototype.toSnapshotEvents_ecp0ut$;
  CsDbKillsUixApi.prototype.rxEditing_6l8l9j$$default = DbKillsApiCommonfb.prototype.rxEditing_6l8l9j$$default;
  CsDbKillsUixApi.prototype.rxCreating_8ctbwl$$default = DbKillsApiCommonfb.prototype.rxCreating_8ctbwl$$default;
  CsDbKillsUixApi.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  CsDbKillsUixApi.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  CsDbKillsUixApi.prototype.get_routing_lqv1tx$ = KillsUixApi.prototype.get_routing_lqv1tx$;
  CsDbKillsUixApi.prototype.addDirty_3529di$ = KillsUixApi.prototype.addDirty_3529di$;
  CsDbKillsUixApi.prototype.attached_ux9tev$ = KillsUixApi.prototype.attached_ux9tev$;
  CsDbKillsUixApi.prototype.bind_zfaq6f$ = KillsUixApi.prototype.bind_zfaq6f$;
  CsDbKillsUixApi.prototype.bindValue_xy1r9h$ = KillsUixApi.prototype.bindValue_xy1r9h$;
  CsDbKillsUixApi.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  CsDbKillsUixApi.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  CsDbKillsUixApi.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  CsDbKillsUixApi.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  CsDbKillsUixApi.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  CsDbKillsUixApi.prototype.enabled_hlnvpg$ = KillsUixApi.prototype.enabled_hlnvpg$;
  CsDbKillsUixApi.prototype.keepScreenAwake_ipfk82$ = KillsUixApi.prototype.keepScreenAwake_ipfk82$;
  CsDbKillsUixApi.prototype.on_2stdkb$ = KillsUixApi.prototype.on_2stdkb$;
  CsDbKillsUixApi.prototype.on_hgi4ad$ = KillsUixApi.prototype.on_hgi4ad$;
  CsDbKillsUixApi.prototype.onClick_pofl4w$ = KillsUixApi.prototype.onClick_pofl4w$;
  CsDbKillsUixApi.prototype.onInput_clfw57$ = KillsUixApi.prototype.onInput_clfw57$;
  CsDbKillsUixApi.prototype.runView_n76bhm$ = KillsUixApi.prototype.runView_n76bhm$;
  CsDbKillsUixApi.prototype.signIn_tstgz9$ = KillsUixApi.prototype.signIn_tstgz9$;
  CsDbKillsUixApi.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  CsDbKillsUixApi.prototype.visibility_12lt6u$ = KillsUixApi.prototype.visibility_12lt6u$;
  CsDbKillsUixApi.prototype.visible_od9jl4$ = KillsUixApi.prototype.visible_od9jl4$;
  CsDbKillsUixApi.prototype.list_qlxt6c$ = CsApiCommonui.prototype.list_qlxt6c$;
  CsDbKillsUixApi.prototype.list_u1uvxv$ = CsApiCommonui.prototype.list_u1uvxv$;
  CsDbKillsUixApi.prototype.documentChanges_pujjsl$ = CsDbKillsApi.prototype.documentChanges_pujjsl$;
  CsDbKillsUixApi.prototype.fsCache_sj6zb3$ = CsDbKillsApi.prototype.fsCache_sj6zb3$;
  CsDbKillsUixApi.prototype.getOrNull_m1hph$ = CsDbKillsApi.prototype.getOrNull_m1hph$;
  CsDbKillsUixApi.prototype.listEvents_pujjsl$ = CsDbKillsApi.prototype.listEvents_pujjsl$;
  CsDbKillsUixApi.prototype.query_wzkv1r$ = CsDbKillsApi.prototype.query_wzkv1r$;
  CsDbKillsUixApi.prototype.randomEditable_mx4g9l$ = CsDbKillsApi.prototype.randomEditable_mx4g9l$;
  CsDbKillsUixApi.prototype.set_o9yh22$ = CsDbKillsApi.prototype.set_o9yh22$;
  CsDbKillsUixApi.prototype.toFsDoc_bo0woj$ = CsDbKillsApi.prototype.toFsDoc_bo0woj$;
  CsDbKillsUixApi.prototype.toList_pujjsl$ = CsDbKillsApi.prototype.toList_pujjsl$;
  CsDbKillsUixApi.prototype.rxEditing_6l8l9j$ = DbKillsApiCommonfb.prototype.rxEditing_6l8l9j$;
  CsDbKillsUixApi.prototype.rxCreating_8ctbwl$ = DbKillsApiCommonfb.prototype.rxCreating_8ctbwl$;
  FBApi.prototype.get_docsOrNull_g2zw3r$ = CsDbKillsUixApi.prototype.get_docsOrNull_g2zw3r$;
  FBApi.prototype.get_ids_qko62t$ = CsDbKillsUixApi.prototype.get_ids_qko62t$;
  FBApi.prototype.get_live_73z9b6$ = CsDbKillsUixApi.prototype.get_live_73z9b6$;
  FBApi.prototype.get_oldKilled_vsdo34$ = CsDbKillsUixApi.prototype.get_oldKilled_vsdo34$;
  FBApi.prototype.get_oldKilledOpt_vsdo34$ = CsDbKillsUixApi.prototype.get_oldKilledOpt_vsdo34$;
  FBApi.prototype.get_randomDoc_lsue4w$ = CsDbKillsUixApi.prototype.get_randomDoc_lsue4w$;
  FBApi.prototype.get_randomDoc_sj9vaa$ = CsDbKillsUixApi.prototype.get_randomDoc_sj9vaa$;
  FBApi.prototype.get_ref_sj9vaa$ = CsDbKillsUixApi.prototype.get_ref_sj9vaa$;
  FBApi.prototype.get_ref_aqty80$ = CsDbKillsUixApi.prototype.get_ref_aqty80$;
  FBApi.prototype.get_snapshots_79y88y$ = CsDbKillsUixApi.prototype.get_snapshots_79y88y$;
  FBApi.prototype.rx_y6x17j$ = CsDbKillsUixApi.prototype.rx_y6x17j$;
  FBApi.prototype.rx_46ic4w$ = CsDbKillsUixApi.prototype.rx_46ic4w$;
  FBApi.prototype.rx_wgabca$ = CsDbKillsUixApi.prototype.rx_wgabca$;
  FBApi.prototype.rx_djv61p$ = CsDbKillsUixApi.prototype.rx_djv61p$;
  FBApi.prototype.anyRx_tnde95$ = CsDbKillsUixApi.prototype.anyRx_tnde95$;
  FBApi.prototype.containsRx_1w65cx$ = CsDbKillsUixApi.prototype.containsRx_1w65cx$;
  FBApi.prototype.delete_73z9b6$ = CsDbKillsUixApi.prototype.delete_73z9b6$;
  FBApi.prototype.delete_ihdkly$ = CsDbKillsUixApi.prototype.delete_ihdkly$;
  FBApi.prototype.docs_prxdpg$ = CsDbKillsUixApi.prototype.docs_prxdpg$;
  FBApi.prototype.documentChanges_pujjsl$$default = CsDbKillsUixApi.prototype.documentChanges_pujjsl$$default;
  FBApi.prototype.documentChanges_z2kgpb$ = CsDbKillsUixApi.prototype.documentChanges_z2kgpb$;
  FBApi.prototype.events_9k4h2$ = CsDbKillsUixApi.prototype.events_9k4h2$;
  FBApi.prototype.feedTo_9o5f67$ = CsDbKillsUixApi.prototype.feedTo_9o5f67$;
  FBApi.prototype.filter_hu0si9$ = CsDbKillsUixApi.prototype.filter_hu0si9$;
  FBApi.prototype.filtered_tnde95$ = CsDbKillsUixApi.prototype.filtered_tnde95$;
  FBApi.prototype.forEach_xwzbbo$ = CsDbKillsUixApi.prototype.forEach_xwzbbo$;
  FBApi.prototype.forEach_35q7bt$ = CsDbKillsUixApi.prototype.forEach_35q7bt$;
  FBApi.prototype.forEachLater_xwzbbo$ = CsDbKillsUixApi.prototype.forEachLater_xwzbbo$;
  FBApi.prototype.forEachNonNull_cjboeh$ = CsDbKillsUixApi.prototype.forEachNonNull_cjboeh$;
  FBApi.prototype.forEachTrue_aq5y71$ = CsDbKillsUixApi.prototype.forEachTrue_aq5y71$;
  FBApi.prototype.fsCache_sj6zb3$$default = CsDbKillsUixApi.prototype.fsCache_sj6zb3$$default;
  FBApi.prototype.fsCache_aujjp8$ = CsDbKillsUixApi.prototype.fsCache_aujjp8$;
  FBApi.prototype.getCachedOrServer_prxdpg$ = CsDbKillsUixApi.prototype.getCachedOrServer_prxdpg$;
  FBApi.prototype.getOrNull_m1hph$$default = CsDbKillsUixApi.prototype.getOrNull_m1hph$$default;
  FBApi.prototype.incremented_eoy9qo$ = CsDbKillsUixApi.prototype.incremented_eoy9qo$;
  FBApi.prototype.linked_n1nom7$ = CsDbKillsUixApi.prototype.linked_n1nom7$;
  FBApi.prototype.listEvents_pujjsl$$default = CsDbKillsUixApi.prototype.listEvents_pujjsl$$default;
  FBApi.prototype.listen_ubid8w$ = CsDbKillsUixApi.prototype.listen_ubid8w$;
  FBApi.prototype.map_jtxi0h$ = CsDbKillsUixApi.prototype.map_jtxi0h$;
  FBApi.prototype.mapLive_1mq1ue$ = CsDbKillsUixApi.prototype.mapLive_1mq1ue$;
  FBApi.prototype.onChange_rlu5c6$ = CsDbKillsUixApi.prototype.onChange_rlu5c6$;
  FBApi.prototype.onChange_oeam7t$ = CsDbKillsUixApi.prototype.onChange_oeam7t$;
  FBApi.prototype.onSnapshotNext_po64up$ = CsDbKillsUixApi.prototype.onSnapshotNext_po64up$;
  FBApi.prototype.plusAssign_ubid8w$ = CsDbKillsUixApi.prototype.plusAssign_ubid8w$;
  FBApi.prototype.process_y3juat$ = CsDbKillsUixApi.prototype.process_y3juat$;
  FBApi.prototype.process_7xi3v7$ = CsDbKillsUixApi.prototype.process_7xi3v7$;
  FBApi.prototype.query_wzkv1r$$default = CsDbKillsUixApi.prototype.query_wzkv1r$$default;
  FBApi.prototype.randomEditable_mx4g9l$$default = CsDbKillsUixApi.prototype.randomEditable_mx4g9l$$default;
  FBApi.prototype.remAssign_wgabca$ = CsDbKillsUixApi.prototype.remAssign_wgabca$;
  FBApi.prototype.remAssign_djv61p$ = CsDbKillsUixApi.prototype.remAssign_djv61p$;
  FBApi.prototype.remAssign_7fncnf$ = CsDbKillsUixApi.prototype.remAssign_7fncnf$;
  FBApi.prototype.rxClass_c5yvvx$ = CsDbKillsUixApi.prototype.rxClass_c5yvvx$;
  FBApi.prototype.rxClass_6sflyw$ = CsDbKillsUixApi.prototype.rxClass_6sflyw$;
  FBApi.prototype.rxClass_9npl0m$ = CsDbKillsUixApi.prototype.rxClass_9npl0m$;
  FBApi.prototype.rxClass_62ldac$ = CsDbKillsUixApi.prototype.rxClass_62ldac$;
  FBApi.prototype.save_73z9b6$ = CsDbKillsUixApi.prototype.save_73z9b6$;
  FBApi.prototype.save_biv66q$ = CsDbKillsUixApi.prototype.save_biv66q$;
  FBApi.prototype.set_o9yh22$$default = CsDbKillsUixApi.prototype.set_o9yh22$$default;
  FBApi.prototype.toChannel_z5dyp2$ = CsDbKillsUixApi.prototype.toChannel_z5dyp2$;
  FBApi.prototype.toChannelLater_z5dyp2$ = CsDbKillsUixApi.prototype.toChannelLater_z5dyp2$;
  FBApi.prototype.toFsDoc_bo0woj$$default = CsDbKillsUixApi.prototype.toFsDoc_bo0woj$$default;
  FBApi.prototype.toList_pujjsl$$default = CsDbKillsUixApi.prototype.toList_pujjsl$$default;
  FBApi.prototype.toRandomFsDoc_xc7wmg$ = CsDbKillsUixApi.prototype.toRandomFsDoc_xc7wmg$;
  FBApi.prototype.toRx_on0lyu$ = CsDbKillsUixApi.prototype.toRx_on0lyu$;
  FBApi.prototype.toRxSet_vzwksx$ = CsDbKillsUixApi.prototype.toRxSet_vzwksx$;
  FBApi.prototype.toRxSet_jr4bl4$ = CsDbKillsUixApi.prototype.toRxSet_jr4bl4$;
  FBApi.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsUixApi.prototype.toSnapshotEvents_ecp0ut$;
  FBApi.prototype.rxEditing_6l8l9j$$default = CsDbKillsUixApi.prototype.rxEditing_6l8l9j$$default;
  FBApi.prototype.rxCreating_8ctbwl$$default = CsDbKillsUixApi.prototype.rxCreating_8ctbwl$$default;
  FBApi.prototype.get_clickActivate_tvm2vp$ = CsDbKillsUixApi.prototype.get_clickActivate_tvm2vp$;
  FBApi.prototype.get_clickToggle_tvm2vp$ = CsDbKillsUixApi.prototype.get_clickToggle_tvm2vp$;
  FBApi.prototype.get_routing_lqv1tx$ = CsDbKillsUixApi.prototype.get_routing_lqv1tx$;
  FBApi.prototype.addDirty_3529di$ = CsDbKillsUixApi.prototype.addDirty_3529di$;
  FBApi.prototype.attached_ux9tev$ = CsDbKillsUixApi.prototype.attached_ux9tev$;
  FBApi.prototype.bind_zfaq6f$ = CsDbKillsUixApi.prototype.bind_zfaq6f$;
  FBApi.prototype.bindValue_xy1r9h$ = CsDbKillsUixApi.prototype.bindValue_xy1r9h$;
  FBApi.prototype.click_4eku4n$ = CsDbKillsUixApi.prototype.click_4eku4n$;
  FBApi.prototype.click_9375ex$ = CsDbKillsUixApi.prototype.click_9375ex$;
  FBApi.prototype.click_512jbc$ = CsDbKillsUixApi.prototype.click_512jbc$;
  FBApi.prototype.click_3zaxtq$ = CsDbKillsUixApi.prototype.click_3zaxtq$;
  FBApi.prototype.click_ts68bh$ = CsDbKillsUixApi.prototype.click_ts68bh$;
  FBApi.prototype.enabled_hlnvpg$ = CsDbKillsUixApi.prototype.enabled_hlnvpg$;
  FBApi.prototype.keepScreenAwake_ipfk82$ = CsDbKillsUixApi.prototype.keepScreenAwake_ipfk82$;
  FBApi.prototype.on_2stdkb$ = CsDbKillsUixApi.prototype.on_2stdkb$;
  FBApi.prototype.on_hgi4ad$ = CsDbKillsUixApi.prototype.on_hgi4ad$;
  FBApi.prototype.onClick_pofl4w$ = CsDbKillsUixApi.prototype.onClick_pofl4w$;
  FBApi.prototype.onInput_clfw57$ = CsDbKillsUixApi.prototype.onInput_clfw57$;
  FBApi.prototype.runView_n76bhm$ = CsDbKillsUixApi.prototype.runView_n76bhm$;
  FBApi.prototype.signIn_tstgz9$ = CsDbKillsUixApi.prototype.signIn_tstgz9$;
  FBApi.prototype.signOut_tstgz9$ = CsDbKillsUixApi.prototype.signOut_tstgz9$;
  FBApi.prototype.visibility_12lt6u$ = CsDbKillsUixApi.prototype.visibility_12lt6u$;
  FBApi.prototype.visible_od9jl4$ = CsDbKillsUixApi.prototype.visible_od9jl4$;
  FBApi.prototype.list_qlxt6c$ = CsDbKillsUixApi.prototype.list_qlxt6c$;
  FBApi.prototype.list_u1uvxv$ = CsDbKillsUixApi.prototype.list_u1uvxv$;
  FBApi.prototype.documentChanges_pujjsl$ = CsDbKillsUixApi.prototype.documentChanges_pujjsl$;
  FBApi.prototype.fsCache_sj6zb3$ = CsDbKillsUixApi.prototype.fsCache_sj6zb3$;
  FBApi.prototype.getOrNull_m1hph$ = CsDbKillsUixApi.prototype.getOrNull_m1hph$;
  FBApi.prototype.listEvents_pujjsl$ = CsDbKillsUixApi.prototype.listEvents_pujjsl$;
  FBApi.prototype.query_wzkv1r$ = CsDbKillsUixApi.prototype.query_wzkv1r$;
  FBApi.prototype.randomEditable_mx4g9l$ = CsDbKillsUixApi.prototype.randomEditable_mx4g9l$;
  FBApi.prototype.set_o9yh22$ = CsDbKillsUixApi.prototype.set_o9yh22$;
  FBApi.prototype.toFsDoc_bo0woj$ = CsDbKillsUixApi.prototype.toFsDoc_bo0woj$;
  FBApi.prototype.toList_pujjsl$ = CsDbKillsUixApi.prototype.toList_pujjsl$;
  FBApi.prototype.rxEditing_6l8l9j$ = CsDbKillsUixApi.prototype.rxEditing_6l8l9j$;
  FBApi.prototype.rxCreating_8ctbwl$ = CsDbKillsUixApi.prototype.rxCreating_8ctbwl$;
  BackCsDbKillsUixApi.prototype.get_docsOrNull_g2zw3r$ = CsDbKillsUixApi.prototype.get_docsOrNull_g2zw3r$;
  BackCsDbKillsUixApi.prototype.get_ids_qko62t$ = CsDbKillsUixApi.prototype.get_ids_qko62t$;
  BackCsDbKillsUixApi.prototype.get_live_73z9b6$ = CsDbKillsUixApi.prototype.get_live_73z9b6$;
  BackCsDbKillsUixApi.prototype.get_oldKilled_vsdo34$ = CsDbKillsUixApi.prototype.get_oldKilled_vsdo34$;
  BackCsDbKillsUixApi.prototype.get_oldKilledOpt_vsdo34$ = CsDbKillsUixApi.prototype.get_oldKilledOpt_vsdo34$;
  BackCsDbKillsUixApi.prototype.get_randomDoc_lsue4w$ = CsDbKillsUixApi.prototype.get_randomDoc_lsue4w$;
  BackCsDbKillsUixApi.prototype.get_randomDoc_sj9vaa$ = CsDbKillsUixApi.prototype.get_randomDoc_sj9vaa$;
  BackCsDbKillsUixApi.prototype.get_ref_sj9vaa$ = CsDbKillsUixApi.prototype.get_ref_sj9vaa$;
  BackCsDbKillsUixApi.prototype.get_ref_aqty80$ = CsDbKillsUixApi.prototype.get_ref_aqty80$;
  BackCsDbKillsUixApi.prototype.get_snapshots_79y88y$ = CsDbKillsUixApi.prototype.get_snapshots_79y88y$;
  BackCsDbKillsUixApi.prototype.rx_y6x17j$ = CsDbKillsUixApi.prototype.rx_y6x17j$;
  BackCsDbKillsUixApi.prototype.rx_46ic4w$ = CsDbKillsUixApi.prototype.rx_46ic4w$;
  BackCsDbKillsUixApi.prototype.rx_wgabca$ = CsDbKillsUixApi.prototype.rx_wgabca$;
  BackCsDbKillsUixApi.prototype.rx_djv61p$ = CsDbKillsUixApi.prototype.rx_djv61p$;
  BackCsDbKillsUixApi.prototype.anyRx_tnde95$ = CsDbKillsUixApi.prototype.anyRx_tnde95$;
  BackCsDbKillsUixApi.prototype.containsRx_1w65cx$ = CsDbKillsUixApi.prototype.containsRx_1w65cx$;
  BackCsDbKillsUixApi.prototype.delete_73z9b6$ = CsDbKillsUixApi.prototype.delete_73z9b6$;
  BackCsDbKillsUixApi.prototype.delete_ihdkly$ = CsDbKillsUixApi.prototype.delete_ihdkly$;
  BackCsDbKillsUixApi.prototype.docs_prxdpg$ = CsDbKillsUixApi.prototype.docs_prxdpg$;
  BackCsDbKillsUixApi.prototype.documentChanges_pujjsl$$default = CsDbKillsUixApi.prototype.documentChanges_pujjsl$$default;
  BackCsDbKillsUixApi.prototype.documentChanges_z2kgpb$ = CsDbKillsUixApi.prototype.documentChanges_z2kgpb$;
  BackCsDbKillsUixApi.prototype.events_9k4h2$ = CsDbKillsUixApi.prototype.events_9k4h2$;
  BackCsDbKillsUixApi.prototype.feedTo_9o5f67$ = CsDbKillsUixApi.prototype.feedTo_9o5f67$;
  BackCsDbKillsUixApi.prototype.filter_hu0si9$ = CsDbKillsUixApi.prototype.filter_hu0si9$;
  BackCsDbKillsUixApi.prototype.filtered_tnde95$ = CsDbKillsUixApi.prototype.filtered_tnde95$;
  BackCsDbKillsUixApi.prototype.forEach_xwzbbo$ = CsDbKillsUixApi.prototype.forEach_xwzbbo$;
  BackCsDbKillsUixApi.prototype.forEach_35q7bt$ = CsDbKillsUixApi.prototype.forEach_35q7bt$;
  BackCsDbKillsUixApi.prototype.forEachLater_xwzbbo$ = CsDbKillsUixApi.prototype.forEachLater_xwzbbo$;
  BackCsDbKillsUixApi.prototype.forEachNonNull_cjboeh$ = CsDbKillsUixApi.prototype.forEachNonNull_cjboeh$;
  BackCsDbKillsUixApi.prototype.forEachTrue_aq5y71$ = CsDbKillsUixApi.prototype.forEachTrue_aq5y71$;
  BackCsDbKillsUixApi.prototype.fsCache_sj6zb3$$default = CsDbKillsUixApi.prototype.fsCache_sj6zb3$$default;
  BackCsDbKillsUixApi.prototype.fsCache_aujjp8$ = CsDbKillsUixApi.prototype.fsCache_aujjp8$;
  BackCsDbKillsUixApi.prototype.getCachedOrServer_prxdpg$ = CsDbKillsUixApi.prototype.getCachedOrServer_prxdpg$;
  BackCsDbKillsUixApi.prototype.getOrNull_m1hph$$default = CsDbKillsUixApi.prototype.getOrNull_m1hph$$default;
  BackCsDbKillsUixApi.prototype.incremented_eoy9qo$ = CsDbKillsUixApi.prototype.incremented_eoy9qo$;
  BackCsDbKillsUixApi.prototype.linked_n1nom7$ = CsDbKillsUixApi.prototype.linked_n1nom7$;
  BackCsDbKillsUixApi.prototype.listEvents_pujjsl$$default = CsDbKillsUixApi.prototype.listEvents_pujjsl$$default;
  BackCsDbKillsUixApi.prototype.listen_ubid8w$ = CsDbKillsUixApi.prototype.listen_ubid8w$;
  BackCsDbKillsUixApi.prototype.map_jtxi0h$ = CsDbKillsUixApi.prototype.map_jtxi0h$;
  BackCsDbKillsUixApi.prototype.mapLive_1mq1ue$ = CsDbKillsUixApi.prototype.mapLive_1mq1ue$;
  BackCsDbKillsUixApi.prototype.onChange_rlu5c6$ = CsDbKillsUixApi.prototype.onChange_rlu5c6$;
  BackCsDbKillsUixApi.prototype.onChange_oeam7t$ = CsDbKillsUixApi.prototype.onChange_oeam7t$;
  BackCsDbKillsUixApi.prototype.onSnapshotNext_po64up$ = CsDbKillsUixApi.prototype.onSnapshotNext_po64up$;
  BackCsDbKillsUixApi.prototype.plusAssign_ubid8w$ = CsDbKillsUixApi.prototype.plusAssign_ubid8w$;
  BackCsDbKillsUixApi.prototype.process_y3juat$ = CsDbKillsUixApi.prototype.process_y3juat$;
  BackCsDbKillsUixApi.prototype.process_7xi3v7$ = CsDbKillsUixApi.prototype.process_7xi3v7$;
  BackCsDbKillsUixApi.prototype.query_wzkv1r$$default = CsDbKillsUixApi.prototype.query_wzkv1r$$default;
  BackCsDbKillsUixApi.prototype.randomEditable_mx4g9l$$default = CsDbKillsUixApi.prototype.randomEditable_mx4g9l$$default;
  BackCsDbKillsUixApi.prototype.remAssign_wgabca$ = CsDbKillsUixApi.prototype.remAssign_wgabca$;
  BackCsDbKillsUixApi.prototype.remAssign_djv61p$ = CsDbKillsUixApi.prototype.remAssign_djv61p$;
  BackCsDbKillsUixApi.prototype.remAssign_7fncnf$ = CsDbKillsUixApi.prototype.remAssign_7fncnf$;
  BackCsDbKillsUixApi.prototype.rxClass_c5yvvx$ = CsDbKillsUixApi.prototype.rxClass_c5yvvx$;
  BackCsDbKillsUixApi.prototype.rxClass_6sflyw$ = CsDbKillsUixApi.prototype.rxClass_6sflyw$;
  BackCsDbKillsUixApi.prototype.rxClass_9npl0m$ = CsDbKillsUixApi.prototype.rxClass_9npl0m$;
  BackCsDbKillsUixApi.prototype.rxClass_62ldac$ = CsDbKillsUixApi.prototype.rxClass_62ldac$;
  BackCsDbKillsUixApi.prototype.save_73z9b6$ = CsDbKillsUixApi.prototype.save_73z9b6$;
  BackCsDbKillsUixApi.prototype.save_biv66q$ = CsDbKillsUixApi.prototype.save_biv66q$;
  BackCsDbKillsUixApi.prototype.set_o9yh22$$default = CsDbKillsUixApi.prototype.set_o9yh22$$default;
  BackCsDbKillsUixApi.prototype.toChannel_z5dyp2$ = CsDbKillsUixApi.prototype.toChannel_z5dyp2$;
  BackCsDbKillsUixApi.prototype.toChannelLater_z5dyp2$ = CsDbKillsUixApi.prototype.toChannelLater_z5dyp2$;
  BackCsDbKillsUixApi.prototype.toFsDoc_bo0woj$$default = CsDbKillsUixApi.prototype.toFsDoc_bo0woj$$default;
  BackCsDbKillsUixApi.prototype.toList_pujjsl$$default = CsDbKillsUixApi.prototype.toList_pujjsl$$default;
  BackCsDbKillsUixApi.prototype.toRandomFsDoc_xc7wmg$ = CsDbKillsUixApi.prototype.toRandomFsDoc_xc7wmg$;
  BackCsDbKillsUixApi.prototype.toRx_on0lyu$ = CsDbKillsUixApi.prototype.toRx_on0lyu$;
  BackCsDbKillsUixApi.prototype.toRxSet_vzwksx$ = CsDbKillsUixApi.prototype.toRxSet_vzwksx$;
  BackCsDbKillsUixApi.prototype.toRxSet_jr4bl4$ = CsDbKillsUixApi.prototype.toRxSet_jr4bl4$;
  BackCsDbKillsUixApi.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsUixApi.prototype.toSnapshotEvents_ecp0ut$;
  BackCsDbKillsUixApi.prototype.rxEditing_6l8l9j$$default = CsDbKillsUixApi.prototype.rxEditing_6l8l9j$$default;
  BackCsDbKillsUixApi.prototype.rxCreating_8ctbwl$$default = CsDbKillsUixApi.prototype.rxCreating_8ctbwl$$default;
  BackCsDbKillsUixApi.prototype.get_clickActivate_tvm2vp$ = CsDbKillsUixApi.prototype.get_clickActivate_tvm2vp$;
  BackCsDbKillsUixApi.prototype.get_clickToggle_tvm2vp$ = CsDbKillsUixApi.prototype.get_clickToggle_tvm2vp$;
  BackCsDbKillsUixApi.prototype.get_routing_lqv1tx$ = CsDbKillsUixApi.prototype.get_routing_lqv1tx$;
  BackCsDbKillsUixApi.prototype.addDirty_3529di$ = CsDbKillsUixApi.prototype.addDirty_3529di$;
  BackCsDbKillsUixApi.prototype.attached_ux9tev$ = CsDbKillsUixApi.prototype.attached_ux9tev$;
  BackCsDbKillsUixApi.prototype.bind_zfaq6f$ = CsDbKillsUixApi.prototype.bind_zfaq6f$;
  BackCsDbKillsUixApi.prototype.bindValue_xy1r9h$ = CsDbKillsUixApi.prototype.bindValue_xy1r9h$;
  BackCsDbKillsUixApi.prototype.click_4eku4n$ = CsDbKillsUixApi.prototype.click_4eku4n$;
  BackCsDbKillsUixApi.prototype.click_9375ex$ = CsDbKillsUixApi.prototype.click_9375ex$;
  BackCsDbKillsUixApi.prototype.click_512jbc$ = CsDbKillsUixApi.prototype.click_512jbc$;
  BackCsDbKillsUixApi.prototype.click_3zaxtq$ = CsDbKillsUixApi.prototype.click_3zaxtq$;
  BackCsDbKillsUixApi.prototype.click_ts68bh$ = CsDbKillsUixApi.prototype.click_ts68bh$;
  BackCsDbKillsUixApi.prototype.enabled_hlnvpg$ = CsDbKillsUixApi.prototype.enabled_hlnvpg$;
  BackCsDbKillsUixApi.prototype.keepScreenAwake_ipfk82$ = CsDbKillsUixApi.prototype.keepScreenAwake_ipfk82$;
  BackCsDbKillsUixApi.prototype.on_2stdkb$ = CsDbKillsUixApi.prototype.on_2stdkb$;
  BackCsDbKillsUixApi.prototype.on_hgi4ad$ = CsDbKillsUixApi.prototype.on_hgi4ad$;
  BackCsDbKillsUixApi.prototype.onClick_pofl4w$ = CsDbKillsUixApi.prototype.onClick_pofl4w$;
  BackCsDbKillsUixApi.prototype.onInput_clfw57$ = CsDbKillsUixApi.prototype.onInput_clfw57$;
  BackCsDbKillsUixApi.prototype.runView_n76bhm$ = CsDbKillsUixApi.prototype.runView_n76bhm$;
  BackCsDbKillsUixApi.prototype.signIn_tstgz9$ = CsDbKillsUixApi.prototype.signIn_tstgz9$;
  BackCsDbKillsUixApi.prototype.signOut_tstgz9$ = CsDbKillsUixApi.prototype.signOut_tstgz9$;
  BackCsDbKillsUixApi.prototype.visibility_12lt6u$ = CsDbKillsUixApi.prototype.visibility_12lt6u$;
  BackCsDbKillsUixApi.prototype.visible_od9jl4$ = CsDbKillsUixApi.prototype.visible_od9jl4$;
  BackCsDbKillsUixApi.prototype.list_qlxt6c$ = CsDbKillsUixApi.prototype.list_qlxt6c$;
  BackCsDbKillsUixApi.prototype.list_u1uvxv$ = CsDbKillsUixApi.prototype.list_u1uvxv$;
  BackCsDbKillsUixApi.prototype.get_backButton_tdhe4g$ = BackKillsUixApi.prototype.get_backButton_tdhe4g$;
  BackCsDbKillsUixApi.prototype.get_backButton_ihoiae$ = BackKillsUixApi.prototype.get_backButton_ihoiae$;
  BackCsDbKillsUixApi.prototype.backOnDelete_287e2$ = BackKillsUixApi.prototype.backOnDelete_287e2$;
  BackCsDbKillsUixApi.prototype.documentChanges_pujjsl$ = CsDbKillsUixApi.prototype.documentChanges_pujjsl$;
  BackCsDbKillsUixApi.prototype.fsCache_sj6zb3$ = CsDbKillsUixApi.prototype.fsCache_sj6zb3$;
  BackCsDbKillsUixApi.prototype.getOrNull_m1hph$ = CsDbKillsUixApi.prototype.getOrNull_m1hph$;
  BackCsDbKillsUixApi.prototype.listEvents_pujjsl$ = CsDbKillsUixApi.prototype.listEvents_pujjsl$;
  BackCsDbKillsUixApi.prototype.query_wzkv1r$ = CsDbKillsUixApi.prototype.query_wzkv1r$;
  BackCsDbKillsUixApi.prototype.randomEditable_mx4g9l$ = CsDbKillsUixApi.prototype.randomEditable_mx4g9l$;
  BackCsDbKillsUixApi.prototype.set_o9yh22$ = CsDbKillsUixApi.prototype.set_o9yh22$;
  BackCsDbKillsUixApi.prototype.toFsDoc_bo0woj$ = CsDbKillsUixApi.prototype.toFsDoc_bo0woj$;
  BackCsDbKillsUixApi.prototype.toList_pujjsl$ = CsDbKillsUixApi.prototype.toList_pujjsl$;
  BackCsDbKillsUixApi.prototype.rxEditing_6l8l9j$ = CsDbKillsUixApi.prototype.rxEditing_6l8l9j$;
  BackCsDbKillsUixApi.prototype.rxCreating_8ctbwl$ = CsDbKillsUixApi.prototype.rxCreating_8ctbwl$;
  FBBackApi.prototype.get_docsOrNull_g2zw3r$ = FBApi.prototype.get_docsOrNull_g2zw3r$;
  FBBackApi.prototype.get_ids_qko62t$ = FBApi.prototype.get_ids_qko62t$;
  FBBackApi.prototype.get_live_73z9b6$ = FBApi.prototype.get_live_73z9b6$;
  FBBackApi.prototype.get_oldKilled_vsdo34$ = FBApi.prototype.get_oldKilled_vsdo34$;
  FBBackApi.prototype.get_oldKilledOpt_vsdo34$ = FBApi.prototype.get_oldKilledOpt_vsdo34$;
  FBBackApi.prototype.get_randomDoc_lsue4w$ = FBApi.prototype.get_randomDoc_lsue4w$;
  FBBackApi.prototype.get_randomDoc_sj9vaa$ = FBApi.prototype.get_randomDoc_sj9vaa$;
  FBBackApi.prototype.get_ref_sj9vaa$ = FBApi.prototype.get_ref_sj9vaa$;
  FBBackApi.prototype.get_ref_aqty80$ = FBApi.prototype.get_ref_aqty80$;
  FBBackApi.prototype.get_snapshots_79y88y$ = FBApi.prototype.get_snapshots_79y88y$;
  FBBackApi.prototype.rx_y6x17j$ = FBApi.prototype.rx_y6x17j$;
  FBBackApi.prototype.rx_46ic4w$ = FBApi.prototype.rx_46ic4w$;
  FBBackApi.prototype.rx_wgabca$ = FBApi.prototype.rx_wgabca$;
  FBBackApi.prototype.rx_djv61p$ = FBApi.prototype.rx_djv61p$;
  FBBackApi.prototype.anyRx_tnde95$ = FBApi.prototype.anyRx_tnde95$;
  FBBackApi.prototype.containsRx_1w65cx$ = FBApi.prototype.containsRx_1w65cx$;
  FBBackApi.prototype.delete_73z9b6$ = FBApi.prototype.delete_73z9b6$;
  FBBackApi.prototype.delete_ihdkly$ = FBApi.prototype.delete_ihdkly$;
  FBBackApi.prototype.docs_prxdpg$ = FBApi.prototype.docs_prxdpg$;
  FBBackApi.prototype.documentChanges_pujjsl$$default = FBApi.prototype.documentChanges_pujjsl$$default;
  FBBackApi.prototype.documentChanges_z2kgpb$ = FBApi.prototype.documentChanges_z2kgpb$;
  FBBackApi.prototype.events_9k4h2$ = FBApi.prototype.events_9k4h2$;
  FBBackApi.prototype.feedTo_9o5f67$ = FBApi.prototype.feedTo_9o5f67$;
  FBBackApi.prototype.filter_hu0si9$ = FBApi.prototype.filter_hu0si9$;
  FBBackApi.prototype.filtered_tnde95$ = FBApi.prototype.filtered_tnde95$;
  FBBackApi.prototype.forEach_xwzbbo$ = FBApi.prototype.forEach_xwzbbo$;
  FBBackApi.prototype.forEach_35q7bt$ = FBApi.prototype.forEach_35q7bt$;
  FBBackApi.prototype.forEachLater_xwzbbo$ = FBApi.prototype.forEachLater_xwzbbo$;
  FBBackApi.prototype.forEachNonNull_cjboeh$ = FBApi.prototype.forEachNonNull_cjboeh$;
  FBBackApi.prototype.forEachTrue_aq5y71$ = FBApi.prototype.forEachTrue_aq5y71$;
  FBBackApi.prototype.fsCache_sj6zb3$$default = FBApi.prototype.fsCache_sj6zb3$$default;
  FBBackApi.prototype.fsCache_aujjp8$ = FBApi.prototype.fsCache_aujjp8$;
  FBBackApi.prototype.getCachedOrServer_prxdpg$ = FBApi.prototype.getCachedOrServer_prxdpg$;
  FBBackApi.prototype.getOrNull_m1hph$$default = FBApi.prototype.getOrNull_m1hph$$default;
  FBBackApi.prototype.incremented_eoy9qo$ = FBApi.prototype.incremented_eoy9qo$;
  FBBackApi.prototype.linked_n1nom7$ = FBApi.prototype.linked_n1nom7$;
  FBBackApi.prototype.listEvents_pujjsl$$default = FBApi.prototype.listEvents_pujjsl$$default;
  FBBackApi.prototype.listen_ubid8w$ = FBApi.prototype.listen_ubid8w$;
  FBBackApi.prototype.map_jtxi0h$ = FBApi.prototype.map_jtxi0h$;
  FBBackApi.prototype.mapLive_1mq1ue$ = FBApi.prototype.mapLive_1mq1ue$;
  FBBackApi.prototype.onChange_rlu5c6$ = FBApi.prototype.onChange_rlu5c6$;
  FBBackApi.prototype.onChange_oeam7t$ = FBApi.prototype.onChange_oeam7t$;
  FBBackApi.prototype.onSnapshotNext_po64up$ = FBApi.prototype.onSnapshotNext_po64up$;
  FBBackApi.prototype.plusAssign_ubid8w$ = FBApi.prototype.plusAssign_ubid8w$;
  FBBackApi.prototype.process_y3juat$ = FBApi.prototype.process_y3juat$;
  FBBackApi.prototype.process_7xi3v7$ = FBApi.prototype.process_7xi3v7$;
  FBBackApi.prototype.query_wzkv1r$$default = FBApi.prototype.query_wzkv1r$$default;
  FBBackApi.prototype.randomEditable_mx4g9l$$default = FBApi.prototype.randomEditable_mx4g9l$$default;
  FBBackApi.prototype.remAssign_wgabca$ = FBApi.prototype.remAssign_wgabca$;
  FBBackApi.prototype.remAssign_djv61p$ = FBApi.prototype.remAssign_djv61p$;
  FBBackApi.prototype.remAssign_7fncnf$ = FBApi.prototype.remAssign_7fncnf$;
  FBBackApi.prototype.rxClass_c5yvvx$ = FBApi.prototype.rxClass_c5yvvx$;
  FBBackApi.prototype.rxClass_6sflyw$ = FBApi.prototype.rxClass_6sflyw$;
  FBBackApi.prototype.rxClass_9npl0m$ = FBApi.prototype.rxClass_9npl0m$;
  FBBackApi.prototype.rxClass_62ldac$ = FBApi.prototype.rxClass_62ldac$;
  FBBackApi.prototype.save_73z9b6$ = FBApi.prototype.save_73z9b6$;
  FBBackApi.prototype.save_biv66q$ = FBApi.prototype.save_biv66q$;
  FBBackApi.prototype.set_o9yh22$$default = FBApi.prototype.set_o9yh22$$default;
  FBBackApi.prototype.toChannel_z5dyp2$ = FBApi.prototype.toChannel_z5dyp2$;
  FBBackApi.prototype.toChannelLater_z5dyp2$ = FBApi.prototype.toChannelLater_z5dyp2$;
  FBBackApi.prototype.toFsDoc_bo0woj$$default = FBApi.prototype.toFsDoc_bo0woj$$default;
  FBBackApi.prototype.toList_pujjsl$$default = FBApi.prototype.toList_pujjsl$$default;
  FBBackApi.prototype.toRandomFsDoc_xc7wmg$ = FBApi.prototype.toRandomFsDoc_xc7wmg$;
  FBBackApi.prototype.toRx_on0lyu$ = FBApi.prototype.toRx_on0lyu$;
  FBBackApi.prototype.toRxSet_vzwksx$ = FBApi.prototype.toRxSet_vzwksx$;
  FBBackApi.prototype.toRxSet_jr4bl4$ = FBApi.prototype.toRxSet_jr4bl4$;
  FBBackApi.prototype.toSnapshotEvents_ecp0ut$ = FBApi.prototype.toSnapshotEvents_ecp0ut$;
  FBBackApi.prototype.rxEditing_6l8l9j$$default = FBApi.prototype.rxEditing_6l8l9j$$default;
  FBBackApi.prototype.rxCreating_8ctbwl$$default = FBApi.prototype.rxCreating_8ctbwl$$default;
  FBBackApi.prototype.get_clickActivate_tvm2vp$ = FBApi.prototype.get_clickActivate_tvm2vp$;
  FBBackApi.prototype.get_clickToggle_tvm2vp$ = FBApi.prototype.get_clickToggle_tvm2vp$;
  FBBackApi.prototype.get_routing_lqv1tx$ = FBApi.prototype.get_routing_lqv1tx$;
  FBBackApi.prototype.addDirty_3529di$ = FBApi.prototype.addDirty_3529di$;
  FBBackApi.prototype.attached_ux9tev$ = FBApi.prototype.attached_ux9tev$;
  FBBackApi.prototype.bind_zfaq6f$ = FBApi.prototype.bind_zfaq6f$;
  FBBackApi.prototype.bindValue_xy1r9h$ = FBApi.prototype.bindValue_xy1r9h$;
  FBBackApi.prototype.click_4eku4n$ = FBApi.prototype.click_4eku4n$;
  FBBackApi.prototype.click_9375ex$ = FBApi.prototype.click_9375ex$;
  FBBackApi.prototype.click_512jbc$ = FBApi.prototype.click_512jbc$;
  FBBackApi.prototype.click_3zaxtq$ = FBApi.prototype.click_3zaxtq$;
  FBBackApi.prototype.click_ts68bh$ = FBApi.prototype.click_ts68bh$;
  FBBackApi.prototype.enabled_hlnvpg$ = FBApi.prototype.enabled_hlnvpg$;
  FBBackApi.prototype.keepScreenAwake_ipfk82$ = FBApi.prototype.keepScreenAwake_ipfk82$;
  FBBackApi.prototype.on_2stdkb$ = FBApi.prototype.on_2stdkb$;
  FBBackApi.prototype.on_hgi4ad$ = FBApi.prototype.on_hgi4ad$;
  FBBackApi.prototype.onClick_pofl4w$ = FBApi.prototype.onClick_pofl4w$;
  FBBackApi.prototype.onInput_clfw57$ = FBApi.prototype.onInput_clfw57$;
  FBBackApi.prototype.runView_n76bhm$ = FBApi.prototype.runView_n76bhm$;
  FBBackApi.prototype.signIn_tstgz9$ = FBApi.prototype.signIn_tstgz9$;
  FBBackApi.prototype.signOut_tstgz9$ = FBApi.prototype.signOut_tstgz9$;
  FBBackApi.prototype.visibility_12lt6u$ = FBApi.prototype.visibility_12lt6u$;
  FBBackApi.prototype.visible_od9jl4$ = FBApi.prototype.visible_od9jl4$;
  FBBackApi.prototype.list_qlxt6c$ = FBApi.prototype.list_qlxt6c$;
  FBBackApi.prototype.list_u1uvxv$ = FBApi.prototype.list_u1uvxv$;
  FBBackApi.prototype.get_backButton_tdhe4g$ = BackCsDbKillsUixApi.prototype.get_backButton_tdhe4g$;
  FBBackApi.prototype.get_backButton_ihoiae$ = BackCsDbKillsUixApi.prototype.get_backButton_ihoiae$;
  FBBackApi.prototype.backOnDelete_287e2$ = BackCsDbKillsUixApi.prototype.backOnDelete_287e2$;
  FBBackApi.prototype.documentChanges_pujjsl$ = FBApi.prototype.documentChanges_pujjsl$;
  FBBackApi.prototype.fsCache_sj6zb3$ = FBApi.prototype.fsCache_sj6zb3$;
  FBBackApi.prototype.getOrNull_m1hph$ = FBApi.prototype.getOrNull_m1hph$;
  FBBackApi.prototype.listEvents_pujjsl$ = FBApi.prototype.listEvents_pujjsl$;
  FBBackApi.prototype.query_wzkv1r$ = FBApi.prototype.query_wzkv1r$;
  FBBackApi.prototype.randomEditable_mx4g9l$ = FBApi.prototype.randomEditable_mx4g9l$;
  FBBackApi.prototype.set_o9yh22$ = FBApi.prototype.set_o9yh22$;
  FBBackApi.prototype.toFsDoc_bo0woj$ = FBApi.prototype.toFsDoc_bo0woj$;
  FBBackApi.prototype.toList_pujjsl$ = FBApi.prototype.toList_pujjsl$;
  FBBackApi.prototype.rxEditing_6l8l9j$ = FBApi.prototype.rxEditing_6l8l9j$;
  FBBackApi.prototype.rxCreating_8ctbwl$ = FBApi.prototype.rxCreating_8ctbwl$;
  KillsLoginApi.prototype.get_oldKilled_vsdo34$ = KillsApi.prototype.get_oldKilled_vsdo34$;
  KillsLoginApi.prototype.get_oldKilledOpt_vsdo34$ = KillsApi.prototype.get_oldKilledOpt_vsdo34$;
  KillsLoginApi.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  KillsLoginApi.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  KillsLoginApi.prototype.rx_wgabca$ = KillsApi.prototype.rx_wgabca$;
  KillsLoginApi.prototype.rx_djv61p$ = KillsApi.prototype.rx_djv61p$;
  KillsLoginApi.prototype.anyRx_tnde95$ = KillsApi.prototype.anyRx_tnde95$;
  KillsLoginApi.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  KillsLoginApi.prototype.feedTo_9o5f67$ = KillsApi.prototype.feedTo_9o5f67$;
  KillsLoginApi.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  KillsLoginApi.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  KillsLoginApi.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  KillsLoginApi.prototype.forEachLater_xwzbbo$ = KillsApi.prototype.forEachLater_xwzbbo$;
  KillsLoginApi.prototype.forEachNonNull_cjboeh$ = KillsApi.prototype.forEachNonNull_cjboeh$;
  KillsLoginApi.prototype.forEachTrue_aq5y71$ = KillsApi.prototype.forEachTrue_aq5y71$;
  KillsLoginApi.prototype.incremented_eoy9qo$ = KillsApi.prototype.incremented_eoy9qo$;
  KillsLoginApi.prototype.linked_n1nom7$ = KillsApi.prototype.linked_n1nom7$;
  KillsLoginApi.prototype.listen_ubid8w$ = KillsApi.prototype.listen_ubid8w$;
  KillsLoginApi.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  KillsLoginApi.prototype.mapLive_1mq1ue$ = KillsApi.prototype.mapLive_1mq1ue$;
  KillsLoginApi.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  KillsLoginApi.prototype.plusAssign_ubid8w$ = KillsApi.prototype.plusAssign_ubid8w$;
  KillsLoginApi.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  KillsLoginApi.prototype.remAssign_wgabca$ = KillsApi.prototype.remAssign_wgabca$;
  KillsLoginApi.prototype.remAssign_djv61p$ = KillsApi.prototype.remAssign_djv61p$;
  KillsLoginApi.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  KillsLoginApi.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  KillsLoginApi.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  KillsLoginApi.prototype.toChannel_z5dyp2$ = KillsApi.prototype.toChannel_z5dyp2$;
  KillsLoginApi.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  KillsLoginApi.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  KillsLoginUixApi.prototype.get_userIcon_tdhe4g$ = KillsLoginApi.prototype.get_userIcon_tdhe4g$;
  KillsLoginUixApi.prototype.get_oldKilled_vsdo34$ = KillsLoginApi.prototype.get_oldKilled_vsdo34$;
  KillsLoginUixApi.prototype.get_oldKilledOpt_vsdo34$ = KillsLoginApi.prototype.get_oldKilledOpt_vsdo34$;
  KillsLoginUixApi.prototype.rx_y6x17j$ = KillsLoginApi.prototype.rx_y6x17j$;
  KillsLoginUixApi.prototype.rx_46ic4w$ = KillsLoginApi.prototype.rx_46ic4w$;
  KillsLoginUixApi.prototype.rx_wgabca$ = KillsLoginApi.prototype.rx_wgabca$;
  KillsLoginUixApi.prototype.rx_djv61p$ = KillsLoginApi.prototype.rx_djv61p$;
  KillsLoginUixApi.prototype.anyRx_tnde95$ = KillsLoginApi.prototype.anyRx_tnde95$;
  KillsLoginUixApi.prototype.containsRx_1w65cx$ = KillsLoginApi.prototype.containsRx_1w65cx$;
  KillsLoginUixApi.prototype.feedTo_9o5f67$ = KillsLoginApi.prototype.feedTo_9o5f67$;
  KillsLoginUixApi.prototype.filtered_tnde95$ = KillsLoginApi.prototype.filtered_tnde95$;
  KillsLoginUixApi.prototype.forEach_xwzbbo$ = KillsLoginApi.prototype.forEach_xwzbbo$;
  KillsLoginUixApi.prototype.forEach_35q7bt$ = KillsLoginApi.prototype.forEach_35q7bt$;
  KillsLoginUixApi.prototype.forEachLater_xwzbbo$ = KillsLoginApi.prototype.forEachLater_xwzbbo$;
  KillsLoginUixApi.prototype.forEachNonNull_cjboeh$ = KillsLoginApi.prototype.forEachNonNull_cjboeh$;
  KillsLoginUixApi.prototype.forEachTrue_aq5y71$ = KillsLoginApi.prototype.forEachTrue_aq5y71$;
  KillsLoginUixApi.prototype.incremented_eoy9qo$ = KillsLoginApi.prototype.incremented_eoy9qo$;
  KillsLoginUixApi.prototype.linked_n1nom7$ = KillsLoginApi.prototype.linked_n1nom7$;
  KillsLoginUixApi.prototype.listen_ubid8w$ = KillsLoginApi.prototype.listen_ubid8w$;
  KillsLoginUixApi.prototype.map_jtxi0h$ = KillsLoginApi.prototype.map_jtxi0h$;
  KillsLoginUixApi.prototype.mapLive_1mq1ue$ = KillsLoginApi.prototype.mapLive_1mq1ue$;
  KillsLoginUixApi.prototype.onChange_rlu5c6$ = KillsLoginApi.prototype.onChange_rlu5c6$;
  KillsLoginUixApi.prototype.onChange_oeam7t$ = KillsUixApi.prototype.onChange_oeam7t$;
  KillsLoginUixApi.prototype.plusAssign_ubid8w$ = KillsLoginApi.prototype.plusAssign_ubid8w$;
  KillsLoginUixApi.prototype.process_7xi3v7$ = KillsLoginApi.prototype.process_7xi3v7$;
  KillsLoginUixApi.prototype.remAssign_wgabca$ = KillsLoginApi.prototype.remAssign_wgabca$;
  KillsLoginUixApi.prototype.remAssign_djv61p$ = KillsLoginApi.prototype.remAssign_djv61p$;
  KillsLoginUixApi.prototype.remAssign_7fncnf$ = KillsLoginApi.prototype.remAssign_7fncnf$;
  KillsLoginUixApi.prototype.rxClass_c5yvvx$ = KillsLoginApi.prototype.rxClass_c5yvvx$;
  KillsLoginUixApi.prototype.rxClass_6sflyw$ = KillsLoginApi.prototype.rxClass_6sflyw$;
  KillsLoginUixApi.prototype.rxClass_9npl0m$ = KillsUixApi.prototype.rxClass_9npl0m$;
  KillsLoginUixApi.prototype.rxClass_62ldac$ = KillsUixApi.prototype.rxClass_62ldac$;
  KillsLoginUixApi.prototype.toChannel_z5dyp2$ = KillsLoginApi.prototype.toChannel_z5dyp2$;
  KillsLoginUixApi.prototype.toChannelLater_z5dyp2$ = KillsLoginApi.prototype.toChannelLater_z5dyp2$;
  KillsLoginUixApi.prototype.toRxSet_jr4bl4$ = KillsLoginApi.prototype.toRxSet_jr4bl4$;
  KillsLoginUixApi.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  KillsLoginUixApi.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  KillsLoginUixApi.prototype.get_routing_lqv1tx$ = KillsUixApi.prototype.get_routing_lqv1tx$;
  KillsLoginUixApi.prototype.addDirty_3529di$ = KillsUixApi.prototype.addDirty_3529di$;
  KillsLoginUixApi.prototype.attached_ux9tev$ = KillsUixApi.prototype.attached_ux9tev$;
  KillsLoginUixApi.prototype.bind_zfaq6f$ = KillsUixApi.prototype.bind_zfaq6f$;
  KillsLoginUixApi.prototype.bindValue_xy1r9h$ = KillsUixApi.prototype.bindValue_xy1r9h$;
  KillsLoginUixApi.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  KillsLoginUixApi.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  KillsLoginUixApi.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  KillsLoginUixApi.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  KillsLoginUixApi.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  KillsLoginUixApi.prototype.enabled_hlnvpg$ = KillsUixApi.prototype.enabled_hlnvpg$;
  KillsLoginUixApi.prototype.keepScreenAwake_ipfk82$ = KillsUixApi.prototype.keepScreenAwake_ipfk82$;
  KillsLoginUixApi.prototype.on_2stdkb$ = KillsUixApi.prototype.on_2stdkb$;
  KillsLoginUixApi.prototype.on_hgi4ad$ = KillsUixApi.prototype.on_hgi4ad$;
  KillsLoginUixApi.prototype.onClick_pofl4w$ = KillsUixApi.prototype.onClick_pofl4w$;
  KillsLoginUixApi.prototype.onInput_clfw57$ = KillsUixApi.prototype.onInput_clfw57$;
  KillsLoginUixApi.prototype.runView_n76bhm$ = KillsUixApi.prototype.runView_n76bhm$;
  KillsLoginUixApi.prototype.signIn_tstgz9$ = KillsUixApi.prototype.signIn_tstgz9$;
  KillsLoginUixApi.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  KillsLoginUixApi.prototype.visibility_12lt6u$ = KillsUixApi.prototype.visibility_12lt6u$;
  KillsLoginUixApi.prototype.visible_od9jl4$ = KillsUixApi.prototype.visible_od9jl4$;
  KillsMessagingUixApi.prototype.get_clickActivate_tvm2vp$ = KillsUixApi.prototype.get_clickActivate_tvm2vp$;
  KillsMessagingUixApi.prototype.get_clickToggle_tvm2vp$ = KillsUixApi.prototype.get_clickToggle_tvm2vp$;
  KillsMessagingUixApi.prototype.get_oldKilled_vsdo34$ = KillsUixApi.prototype.get_oldKilled_vsdo34$;
  KillsMessagingUixApi.prototype.get_oldKilledOpt_vsdo34$ = KillsUixApi.prototype.get_oldKilledOpt_vsdo34$;
  KillsMessagingUixApi.prototype.get_routing_lqv1tx$ = KillsUixApi.prototype.get_routing_lqv1tx$;
  KillsMessagingUixApi.prototype.rx_y6x17j$ = KillsUixApi.prototype.rx_y6x17j$;
  KillsMessagingUixApi.prototype.rx_46ic4w$ = KillsUixApi.prototype.rx_46ic4w$;
  KillsMessagingUixApi.prototype.rx_wgabca$ = KillsUixApi.prototype.rx_wgabca$;
  KillsMessagingUixApi.prototype.rx_djv61p$ = KillsUixApi.prototype.rx_djv61p$;
  KillsMessagingUixApi.prototype.addDirty_3529di$ = KillsUixApi.prototype.addDirty_3529di$;
  KillsMessagingUixApi.prototype.anyRx_tnde95$ = KillsUixApi.prototype.anyRx_tnde95$;
  KillsMessagingUixApi.prototype.attached_ux9tev$ = KillsUixApi.prototype.attached_ux9tev$;
  KillsMessagingUixApi.prototype.bind_zfaq6f$ = KillsUixApi.prototype.bind_zfaq6f$;
  KillsMessagingUixApi.prototype.bindValue_xy1r9h$ = KillsUixApi.prototype.bindValue_xy1r9h$;
  KillsMessagingUixApi.prototype.click_4eku4n$ = KillsUixApi.prototype.click_4eku4n$;
  KillsMessagingUixApi.prototype.click_9375ex$ = KillsUixApi.prototype.click_9375ex$;
  KillsMessagingUixApi.prototype.click_512jbc$ = KillsUixApi.prototype.click_512jbc$;
  KillsMessagingUixApi.prototype.click_3zaxtq$ = KillsUixApi.prototype.click_3zaxtq$;
  KillsMessagingUixApi.prototype.click_ts68bh$ = KillsUixApi.prototype.click_ts68bh$;
  KillsMessagingUixApi.prototype.containsRx_1w65cx$ = KillsUixApi.prototype.containsRx_1w65cx$;
  KillsMessagingUixApi.prototype.enabled_hlnvpg$ = KillsUixApi.prototype.enabled_hlnvpg$;
  KillsMessagingUixApi.prototype.feedTo_9o5f67$ = KillsUixApi.prototype.feedTo_9o5f67$;
  KillsMessagingUixApi.prototype.filtered_tnde95$ = KillsUixApi.prototype.filtered_tnde95$;
  KillsMessagingUixApi.prototype.forEach_xwzbbo$ = KillsUixApi.prototype.forEach_xwzbbo$;
  KillsMessagingUixApi.prototype.forEach_35q7bt$ = KillsUixApi.prototype.forEach_35q7bt$;
  KillsMessagingUixApi.prototype.forEachLater_xwzbbo$ = KillsUixApi.prototype.forEachLater_xwzbbo$;
  KillsMessagingUixApi.prototype.forEachNonNull_cjboeh$ = KillsUixApi.prototype.forEachNonNull_cjboeh$;
  KillsMessagingUixApi.prototype.forEachTrue_aq5y71$ = KillsUixApi.prototype.forEachTrue_aq5y71$;
  KillsMessagingUixApi.prototype.incremented_eoy9qo$ = KillsUixApi.prototype.incremented_eoy9qo$;
  KillsMessagingUixApi.prototype.keepScreenAwake_ipfk82$ = KillsUixApi.prototype.keepScreenAwake_ipfk82$;
  KillsMessagingUixApi.prototype.linked_n1nom7$ = KillsUixApi.prototype.linked_n1nom7$;
  KillsMessagingUixApi.prototype.listen_ubid8w$ = KillsUixApi.prototype.listen_ubid8w$;
  KillsMessagingUixApi.prototype.map_jtxi0h$ = KillsUixApi.prototype.map_jtxi0h$;
  KillsMessagingUixApi.prototype.mapLive_1mq1ue$ = KillsUixApi.prototype.mapLive_1mq1ue$;
  KillsMessagingUixApi.prototype.on_2stdkb$ = KillsUixApi.prototype.on_2stdkb$;
  KillsMessagingUixApi.prototype.on_hgi4ad$ = KillsUixApi.prototype.on_hgi4ad$;
  KillsMessagingUixApi.prototype.onChange_oeam7t$ = KillsUixApi.prototype.onChange_oeam7t$;
  KillsMessagingUixApi.prototype.onChange_rlu5c6$ = KillsUixApi.prototype.onChange_rlu5c6$;
  KillsMessagingUixApi.prototype.onClick_pofl4w$ = KillsUixApi.prototype.onClick_pofl4w$;
  KillsMessagingUixApi.prototype.onInput_clfw57$ = KillsUixApi.prototype.onInput_clfw57$;
  KillsMessagingUixApi.prototype.plusAssign_ubid8w$ = KillsUixApi.prototype.plusAssign_ubid8w$;
  KillsMessagingUixApi.prototype.process_7xi3v7$ = KillsUixApi.prototype.process_7xi3v7$;
  KillsMessagingUixApi.prototype.remAssign_wgabca$ = KillsUixApi.prototype.remAssign_wgabca$;
  KillsMessagingUixApi.prototype.remAssign_djv61p$ = KillsUixApi.prototype.remAssign_djv61p$;
  KillsMessagingUixApi.prototype.remAssign_7fncnf$ = KillsUixApi.prototype.remAssign_7fncnf$;
  KillsMessagingUixApi.prototype.runView_n76bhm$ = KillsUixApi.prototype.runView_n76bhm$;
  KillsMessagingUixApi.prototype.rxClass_9npl0m$ = KillsUixApi.prototype.rxClass_9npl0m$;
  KillsMessagingUixApi.prototype.rxClass_62ldac$ = KillsUixApi.prototype.rxClass_62ldac$;
  KillsMessagingUixApi.prototype.rxClass_c5yvvx$ = KillsUixApi.prototype.rxClass_c5yvvx$;
  KillsMessagingUixApi.prototype.rxClass_6sflyw$ = KillsUixApi.prototype.rxClass_6sflyw$;
  KillsMessagingUixApi.prototype.signIn_tstgz9$ = KillsUixApi.prototype.signIn_tstgz9$;
  KillsMessagingUixApi.prototype.signOut_tstgz9$ = KillsUixApi.prototype.signOut_tstgz9$;
  KillsMessagingUixApi.prototype.toChannel_z5dyp2$ = KillsUixApi.prototype.toChannel_z5dyp2$;
  KillsMessagingUixApi.prototype.toChannelLater_z5dyp2$ = KillsUixApi.prototype.toChannelLater_z5dyp2$;
  KillsMessagingUixApi.prototype.toRxSet_jr4bl4$ = KillsUixApi.prototype.toRxSet_jr4bl4$;
  KillsMessagingUixApi.prototype.visibility_12lt6u$ = KillsUixApi.prototype.visibility_12lt6u$;
  KillsMessagingUixApi.prototype.visible_od9jl4$ = KillsUixApi.prototype.visible_od9jl4$;
  KillsMessagingUixApi.prototype.onSnapshotNext_po64up$ = KillsApiFirebase.prototype.onSnapshotNext_po64up$;
  Object.defineProperty(HasDbEdit.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasEdit.prototype, 'bindings'));
  Object.defineProperty(HasDbEditKills.prototype, 'bindings', Object.getOwnPropertyDescriptor(HasDbEdit.prototype, 'bindings'));
  FbLinksApi.prototype.get_randomDoc_lsue4w$ = DbApi.prototype.get_randomDoc_lsue4w$;
  FbLinksApi.prototype.get_randomDoc_sj9vaa$ = DbApi.prototype.get_randomDoc_sj9vaa$;
  FbLinksApi.prototype.get_ref_sj9vaa$ = DbApi.prototype.get_ref_sj9vaa$;
  FbLinksApi.prototype.get_ref_aqty80$ = DbApi.prototype.get_ref_aqty80$;
  FbLinksApi.prototype.delete_73z9b6$ = DbApi.prototype.delete_73z9b6$;
  FbLinksApi.prototype.delete_ihdkly$ = DbApi.prototype.delete_ihdkly$;
  FbLinksApi.prototype.getCachedOrServer_prxdpg$ = DbApi.prototype.getCachedOrServer_prxdpg$;
  FbLinksApi.prototype.getOrNull_m1hph$$default = DbApi.prototype.getOrNull_m1hph$$default;
  FbLinksApi.prototype.query_wzkv1r$$default = DbApi.prototype.query_wzkv1r$$default;
  FbLinksApi.prototype.randomEditable_mx4g9l$$default = DbApi.prototype.randomEditable_mx4g9l$$default;
  FbLinksApi.prototype.save_73z9b6$ = DbApi.prototype.save_73z9b6$;
  FbLinksApi.prototype.save_biv66q$ = DbApi.prototype.save_biv66q$;
  FbLinksApi.prototype.set_o9yh22$$default = DbApi.prototype.set_o9yh22$$default;
  FbLinksApi.prototype.toFsDoc_bo0woj$$default = DbApi.prototype.toFsDoc_bo0woj$$default;
  FbLinksApi.prototype.toRandomFsDoc_xc7wmg$ = DbApi.prototype.toRandomFsDoc_xc7wmg$;
  FbLinksApi.prototype.getOrNull_m1hph$ = DbApi.prototype.getOrNull_m1hph$;
  FbLinksApi.prototype.query_wzkv1r$ = DbApi.prototype.query_wzkv1r$;
  FbLinksApi.prototype.randomEditable_mx4g9l$ = DbApi.prototype.randomEditable_mx4g9l$;
  FbLinksApi.prototype.set_o9yh22$ = DbApi.prototype.set_o9yh22$;
  FbLinksApi.prototype.toFsDoc_bo0woj$ = DbApi.prototype.toFsDoc_bo0woj$;
  MessagingControl.prototype.get_docsOrNull_g2zw3r$ = CsDbKillsApi.prototype.get_docsOrNull_g2zw3r$;
  MessagingControl.prototype.get_live_73z9b6$ = CsDbKillsApi.prototype.get_live_73z9b6$;
  MessagingControl.prototype.get_randomDoc_lsue4w$ = CsDbKillsApi.prototype.get_randomDoc_lsue4w$;
  MessagingControl.prototype.get_randomDoc_sj9vaa$ = CsDbKillsApi.prototype.get_randomDoc_sj9vaa$;
  MessagingControl.prototype.get_ref_sj9vaa$ = CsDbKillsApi.prototype.get_ref_sj9vaa$;
  MessagingControl.prototype.get_ref_aqty80$ = CsDbKillsApi.prototype.get_ref_aqty80$;
  MessagingControl.prototype.get_snapshots_79y88y$ = CsDbKillsApi.prototype.get_snapshots_79y88y$;
  MessagingControl.prototype.delete_73z9b6$ = CsDbKillsApi.prototype.delete_73z9b6$;
  MessagingControl.prototype.delete_ihdkly$ = CsDbKillsApi.prototype.delete_ihdkly$;
  MessagingControl.prototype.docs_prxdpg$ = CsDbKillsApi.prototype.docs_prxdpg$;
  MessagingControl.prototype.documentChanges_pujjsl$$default = CsDbKillsApi.prototype.documentChanges_pujjsl$$default;
  MessagingControl.prototype.documentChanges_z2kgpb$ = CsDbKillsApi.prototype.documentChanges_z2kgpb$;
  MessagingControl.prototype.fsCache_sj6zb3$$default = CsDbKillsApi.prototype.fsCache_sj6zb3$$default;
  MessagingControl.prototype.fsCache_aujjp8$ = CsDbKillsApi.prototype.fsCache_aujjp8$;
  MessagingControl.prototype.getCachedOrServer_prxdpg$ = CsDbKillsApi.prototype.getCachedOrServer_prxdpg$;
  MessagingControl.prototype.getOrNull_m1hph$$default = CsDbKillsApi.prototype.getOrNull_m1hph$$default;
  MessagingControl.prototype.listEvents_pujjsl$$default = CsDbKillsApi.prototype.listEvents_pujjsl$$default;
  MessagingControl.prototype.onSnapshotNext_po64up$ = CsDbKillsApi.prototype.onSnapshotNext_po64up$;
  MessagingControl.prototype.query_wzkv1r$$default = CsDbKillsApi.prototype.query_wzkv1r$$default;
  MessagingControl.prototype.randomEditable_mx4g9l$$default = CsDbKillsApi.prototype.randomEditable_mx4g9l$$default;
  MessagingControl.prototype.save_73z9b6$ = CsDbKillsApi.prototype.save_73z9b6$;
  MessagingControl.prototype.save_biv66q$ = CsDbKillsApi.prototype.save_biv66q$;
  MessagingControl.prototype.set_o9yh22$$default = CsDbKillsApi.prototype.set_o9yh22$$default;
  MessagingControl.prototype.toFsDoc_bo0woj$$default = CsDbKillsApi.prototype.toFsDoc_bo0woj$$default;
  MessagingControl.prototype.toList_pujjsl$$default = CsDbKillsApi.prototype.toList_pujjsl$$default;
  MessagingControl.prototype.toRandomFsDoc_xc7wmg$ = CsDbKillsApi.prototype.toRandomFsDoc_xc7wmg$;
  MessagingControl.prototype.toSnapshotEvents_ecp0ut$ = CsDbKillsApi.prototype.toSnapshotEvents_ecp0ut$;
  MessagingControl.prototype.documentChanges_pujjsl$ = CsDbKillsApi.prototype.documentChanges_pujjsl$;
  MessagingControl.prototype.fsCache_sj6zb3$ = CsDbKillsApi.prototype.fsCache_sj6zb3$;
  MessagingControl.prototype.getOrNull_m1hph$ = CsDbKillsApi.prototype.getOrNull_m1hph$;
  MessagingControl.prototype.listEvents_pujjsl$ = CsDbKillsApi.prototype.listEvents_pujjsl$;
  MessagingControl.prototype.query_wzkv1r$ = CsDbKillsApi.prototype.query_wzkv1r$;
  MessagingControl.prototype.randomEditable_mx4g9l$ = CsDbKillsApi.prototype.randomEditable_mx4g9l$;
  MessagingControl.prototype.set_o9yh22$ = CsDbKillsApi.prototype.set_o9yh22$;
  MessagingControl.prototype.toFsDoc_bo0woj$ = CsDbKillsApi.prototype.toFsDoc_bo0woj$;
  MessagingControl.prototype.toList_pujjsl$ = CsDbKillsApi.prototype.toList_pujjsl$;
  isFcmSupported = lazy(isFcmSupported$lambda);
  deviceIdLocalStorageValue = LocalStorageValue.Companion.stringOpt_61zpoe$('appsimake-device-id');
  Kotlin.defineModule('appsimake-commonfb', _);
  return _;
}(typeof this['appsimake-commonfb'] === 'undefined' ? {} : this['appsimake-commonfb'], kotlin, this['appsimake-commonshr'], this['appsimake-firebase'], this['appsimake-commonui'], this['kotlinx-coroutines-core'], this['appsimake-fontawesome'], this['appsimake-domx'], this['appsimake-bootstrap']);

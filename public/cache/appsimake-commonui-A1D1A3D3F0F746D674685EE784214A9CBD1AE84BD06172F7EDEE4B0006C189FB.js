if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-buildenv'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-buildenv' was not found. Please, check whether 'appsimake-buildenv' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-bootstrap'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-bootstrap' was not found. Please, check whether 'appsimake-bootstrap' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-common'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-common' was not found. Please, check whether 'appsimake-common' is loaded prior to 'appsimake-commonui'.");
}
if (typeof this['appsimake-fontawesome'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-commonui'. Its dependency 'appsimake-fontawesome' was not found. Please, check whether 'appsimake-fontawesome' is loaded prior to 'appsimake-commonui'.");
}
this['appsimake-commonui'] = function (_, Kotlin, $module$appsimake_commonshr, $module$appsimake_domx, $module$kotlinx_coroutines_core, $module$appsimake_buildenv, $module$appsimake_bootstrap, $module$appsimake_common, $module$appsimake_fontawesome) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var KillsApiDomx = $module$appsimake_domx.domx.KillsApiDomx;
  var Api = $module$appsimake_commonshr.commonshr.Api;
  var CsApi = $module$appsimake_commonshr.commonshr.CsApi;
  var Any = Object;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var buildenv = $module$appsimake_buildenv.buildenv;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Killables = $module$appsimake_commonshr.killable.Killables;
  var ensureNotNull = Kotlin.ensureNotNull;
  var setupFullScreen = $module$appsimake_bootstrap.bootstrap.setupFullScreen;
  var Var = $module$appsimake_commonshr.rx.Var;
  var get_connection = $module$appsimake_common.common.get_connection_yi0el1$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var named = $module$appsimake_commonshr.common.named_cq6yhu$;
  var killable = $module$appsimake_commonshr.killable;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_lqp1nt$;
  var get_source = $module$appsimake_domx.domx.get_source_asww5s$;
  var base64 = $module$appsimake_domx.domx.base64_mf97a2$;
  var video = $module$appsimake_domx.domx.video_2l7o0u$;
  var plusAssign = $module$appsimake_commonshr.commonshr.plusAssign_aeyq4w$;
  var get_input = $module$appsimake_domx.domx.get_input_asww5s$;
  var equals = Kotlin.equals;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var row = $module$appsimake_bootstrap.bootstrap.row_kre7dp$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var get_flexGrow1 = $module$appsimake_bootstrap.bootstrap.get_flexGrow1_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_fa = $module$appsimake_fontawesome.fontawesome.get_fa_kre7dp$;
  var get_chevronRight = $module$appsimake_fontawesome.fontawesome.get_chevronRight_xml72e$;
  var listButton = $module$appsimake_bootstrap.bootstrap.listButton_juq4uf$;
  var get_spinnerBorder = $module$appsimake_bootstrap.bootstrap.get_spinnerBorder_kre7dp$;
  var centerDiv = $module$appsimake_bootstrap.bootstrap.centerDiv_gnmiz0$;
  var killables = $module$appsimake_commonshr.killable.killables_yzxo1x$;
  var get_p2 = $module$appsimake_bootstrap.bootstrap.get_p2_kre7dp$;
  var get_span = $module$appsimake_domx.domx.get_span_asww5s$;
  var get_fw = $module$appsimake_fontawesome.fontawesome.get_fw_xml72e$;
  var get_classes = $module$appsimake_domx.domx.get_classes_ejp6nk$;
  var get_button = $module$appsimake_domx.domx.get_button_asww5s$;
  var get_btn = $module$appsimake_bootstrap.bootstrap.get_btn_kre7dp$;
  var HasKills = $module$appsimake_commonshr.commonshr.HasKills;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var KillsApi = $module$appsimake_commonshr.commonshr.KillsApi;
  var copy = $module$appsimake_commonshr.commonshr.properties.copy_szlj5h$;
  var rxCompare = $module$appsimake_commonshr.commonshr.properties.rxCompare_kagv6q$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var Throwable = Error;
  var get_save = $module$appsimake_fontawesome.fontawesome.get_save_xml72e$;
  var get_backspace = $module$appsimake_fontawesome.fontawesome.get_backspace_xml72e$;
  var get_m1 = $module$appsimake_bootstrap.bootstrap.get_m1_kre7dp$;
  var get_btnSuccess = $module$appsimake_bootstrap.bootstrap.get_btnSuccess_kre7dp$;
  var get_chevronLeft = $module$appsimake_fontawesome.fontawesome.get_chevronLeft_xml72e$;
  var get_textDanger = $module$appsimake_bootstrap.bootstrap.get_textDanger_kre7dp$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var insertAt = $module$appsimake_common.common.insertAt_y55kqv$;
  var ListEvent$Add = $module$appsimake_commonshr.commonshr.ListEvent.Add;
  var removeAt = $module$appsimake_common.common.removeAt_jeu5im$;
  var ListEvent$Move = $module$appsimake_commonshr.commonshr.ListEvent.Move;
  var ListEvent$Remove = $module$appsimake_commonshr.commonshr.ListEvent.Remove;
  var column = $module$appsimake_bootstrap.bootstrap.column_kre7dp$;
  var flexCenter = $module$appsimake_bootstrap.bootstrap.flexCenter_kre7dp$;
  var flexFixedSize = $module$appsimake_bootstrap.bootstrap.flexFixedSize_kre7dp$;
  var get_textMuted = $module$appsimake_bootstrap.bootstrap.get_textMuted_kre7dp$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var removeFromParent = $module$appsimake_common.common.removeFromParent_asww5s$;
  var column_0 = $module$appsimake_bootstrap.bootstrap.column_gnmiz0$;
  var getCallableRef = Kotlin.getCallableRef;
  var KillableSeq_init = $module$appsimake_commonshr.killable.KillableSeq_init_o14v8n$;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var reportd = $module$appsimake_commonshr.commonshr.reportd_za3rmp$;
  var get_btnSecondary = $module$appsimake_bootstrap.bootstrap.get_btnSecondary_kre7dp$;
  var btnButton = $module$appsimake_bootstrap.bootstrap.btnButton_9ztatb$;
  var clickEvent = $module$appsimake_domx.domx.clickEvent_pofl4w$;
  var Fa = $module$appsimake_fontawesome.fontawesome.Fa;
  var flexAlignItemsCenter = $module$appsimake_bootstrap.bootstrap.flexAlignItemsCenter_ejp6nk$;
  var get_h5 = $module$appsimake_domx.domx.get_h5_asww5s$;
  var get_m2 = $module$appsimake_bootstrap.bootstrap.get_m2_kre7dp$;
  var get_dFlex = $module$appsimake_bootstrap.bootstrap.get_dFlex_kre7dp$;
  var get_flexRow = $module$appsimake_bootstrap.bootstrap.get_flexRow_kre7dp$;
  var get_alignItemsCenter = $module$appsimake_bootstrap.bootstrap.get_alignItemsCenter_kre7dp$;
  var get_spinnerBorderSm = $module$appsimake_bootstrap.bootstrap.get_spinnerBorderSm_kre7dp$;
  var get_navTabs = $module$appsimake_bootstrap.bootstrap.get_navTabs_kre7dp$;
  var get_bgLight = $module$appsimake_bootstrap.bootstrap.get_bgLight_kre7dp$;
  var row_0 = $module$appsimake_bootstrap.bootstrap.row_gnmiz0$;
  var lazyOf = Kotlin.kotlin.lazyOf_mh5how$;
  var get_p1 = $module$appsimake_bootstrap.bootstrap.get_p1_kre7dp$;
  var borderBottom = $module$appsimake_bootstrap.bootstrap.borderBottom_ejp6nk$;
  var get_flexColumn = $module$appsimake_bootstrap.bootstrap.get_flexColumn_kre7dp$;
  var insertAt_0 = $module$appsimake_common.common.insertAt_tevjyx$;
  var get_mt1 = $module$appsimake_bootstrap.bootstrap.get_mt1_kre7dp$;
  var get_navItem = $module$appsimake_bootstrap.bootstrap.get_navItem_kre7dp$;
  var get_a = $module$appsimake_domx.domx.get_a_asww5s$;
  var get_navLink = $module$appsimake_bootstrap.bootstrap.get_navLink_kre7dp$;
  var get_px2 = $module$appsimake_bootstrap.bootstrap.get_px2_kre7dp$;
  var get_active = $module$appsimake_bootstrap.bootstrap.get_active_kre7dp$;
  var rxClass = $module$appsimake_commonshr.rx.rxClass_4zvhqy$;
  var get_positionRelative = $module$appsimake_bootstrap.bootstrap.get_positionRelative_kre7dp$;
  var get_positionAbsolute = $module$appsimake_bootstrap.bootstrap.get_positionAbsolute_kre7dp$;
  var get_leftRightTopBottom0 = $module$appsimake_domx.styles.get_leftRightTopBottom0_kre7dp$;
  var get_img = $module$appsimake_domx.domx.get_img_asww5s$;
  var get_border = $module$appsimake_bootstrap.bootstrap.get_border_kre7dp$;
  var get_rounded = $module$appsimake_bootstrap.bootstrap.get_rounded_kre7dp$;
  var get_w100 = $module$appsimake_bootstrap.bootstrap.get_w100_kre7dp$;
  var get_h100 = $module$appsimake_bootstrap.bootstrap.get_h100_kre7dp$;
  var get_objectFitCover = $module$appsimake_domx.styles.get_objectFitCover_kre7dp$;
  var get_badge = $module$appsimake_bootstrap.bootstrap.get_badge_kre7dp$;
  var get_badgePrimary = $module$appsimake_bootstrap.bootstrap.get_badgePrimary_kre7dp$;
  var get_badgeWarning = $module$appsimake_bootstrap.bootstrap.get_badgeWarning_kre7dp$;
  var get_badgePill = $module$appsimake_bootstrap.bootstrap.get_badgePill_kre7dp$;
  var rxEnabled = $module$appsimake_domx.domx.rxEnabled_n1x8kh$;
  var get_btnPrimary = $module$appsimake_bootstrap.bootstrap.get_btnPrimary_kre7dp$;
  var get_btnWarning = $module$appsimake_bootstrap.bootstrap.get_btnWarning_kre7dp$;
  var get_btnDanger = $module$appsimake_bootstrap.bootstrap.get_btnDanger_kre7dp$;
  var get_btnGroup = $module$appsimake_bootstrap.bootstrap.get_btnGroup_kre7dp$;
  var dataToggleDropdown = $module$appsimake_bootstrap.bootstrap.dataToggleDropdown_v3gdir$;
  var dataReferenceParent = $module$appsimake_bootstrap.bootstrap.dataReferenceParent_v3gdir$;
  var get_dropdownToggle = $module$appsimake_bootstrap.bootstrap.get_dropdownToggle_kre7dp$;
  var get_dropdownToggleSplit = $module$appsimake_bootstrap.bootstrap.get_dropdownToggleSplit_kre7dp$;
  var remAssign = $module$appsimake_domx.domx.remAssign_9bm2zh$;
  var InvokeApply = $module$appsimake_commonshr.commonshr.InvokeApply;
  var get_dropdownItem = $module$appsimake_bootstrap.bootstrap.get_dropdownItem_kre7dp$;
  var get_dropdownDivider = $module$appsimake_bootstrap.bootstrap.get_dropdownDivider_kre7dp$;
  var get_signOutAlt = $module$appsimake_fontawesome.fontawesome.get_signOutAlt_xml72e$;
  var get_dropdownMenu = $module$appsimake_bootstrap.bootstrap.get_dropdownMenu_kre7dp$;
  var get_dropdownMenuRight = $module$appsimake_bootstrap.bootstrap.get_dropdownMenuRight_kre7dp$;
  var get_dropdown = $module$appsimake_bootstrap.bootstrap.get_dropdown_kre7dp$;
  var get_bars = $module$appsimake_fontawesome.fontawesome.get_bars_xml72e$;
  var listen = $module$appsimake_common.common.listen_hgi4ad$;
  var get_form = $module$appsimake_domx.domx.get_form_asww5s$;
  var get_formGroup = $module$appsimake_bootstrap.bootstrap.get_formGroup_kre7dp$;
  var Emitter = $module$appsimake_commonshr.common.Emitter;
  var get_label = $module$appsimake_domx.domx.get_label_asww5s$;
  var get_ref = $module$appsimake_domx.domx.get_ref_ejp6nk$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var discardExecutor = $module$appsimake_commonshr.commonshr.discardExecutor_e9pf1l$;
  var get_formControl = $module$appsimake_bootstrap.bootstrap.get_formControl_kre7dp$;
  var get_widthAuto = $module$appsimake_domx.styles.get_widthAuto_kre7dp$;
  var Cls = $module$appsimake_domx.domx.Cls;
  var get_isInvalid = $module$appsimake_bootstrap.bootstrap.get_isInvalid_kre7dp$;
  var rxClass_0 = $module$appsimake_commonshr.rx.rxClass_6yki6o$;
  var Listeners = $module$appsimake_commonshr.common.Listeners;
  var get_inputGroupAppend = $module$appsimake_bootstrap.bootstrap.get_inputGroupAppend_kre7dp$;
  var get_inputGroup = $module$appsimake_bootstrap.bootstrap.get_inputGroup_kre7dp$;
  var seq = $module$appsimake_commonshr.killable.seq_yzxo1x$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var get_listGroup = $module$appsimake_bootstrap.bootstrap.get_listGroup_kre7dp$;
  var get_listGroupItem = $module$appsimake_bootstrap.bootstrap.get_listGroupItem_kre7dp$;
  var get_listGroupItemAction = $module$appsimake_bootstrap.bootstrap.get_listGroupItemAction_kre7dp$;
  var common = $module$appsimake_commonshr.common;
  var Some = $module$appsimake_commonshr.common.Some;
  var plusAssign_0 = $module$appsimake_commonshr.commonshr.plusAssign_rmur43$;
  var addedTo = $module$appsimake_commonshr.killable.addedTo_tjw9ba$;
  var get_height0 = $module$appsimake_domx.styles.get_height0_kre7dp$;
  var get_scrollVertical = $module$appsimake_domx.styles.get_scrollVertical_kre7dp$;
  var JobScope = $module$appsimake_commonshr.commonshr.JobScope;
  var executor = $module$appsimake_commonshr.commonshr.executor_e9pf1l$;
  var HasExec = $module$appsimake_commonshr.commonshr.HasExec;
  var cancelAndJoin = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancelAndJoin_5dx9u$;
  var RxIface = $module$appsimake_commonshr.rx.RxIface;
  var get_justifyContentEnd = $module$appsimake_bootstrap.bootstrap.get_justifyContentEnd_kre7dp$;
  var get_alignItemsEnd = $module$appsimake_bootstrap.bootstrap.get_alignItemsEnd_kre7dp$;
  var get_justifyContentStart = $module$appsimake_bootstrap.bootstrap.get_justifyContentStart_kre7dp$;
  var get_pointerEventsNone = $module$appsimake_domx.styles.get_pointerEventsNone_kre7dp$;
  var get_alert = $module$appsimake_bootstrap.bootstrap.get_alert_kre7dp$;
  var get_pointerEventsAll = $module$appsimake_domx.styles.get_pointerEventsAll_kre7dp$;
  var get_textDecorationNone = $module$appsimake_domx.styles.get_textDecorationNone_kre7dp$;
  var get_hoverColorInherit = $module$appsimake_domx.styles.get_hoverColorInherit_kre7dp$;
  var get_alertWarning = $module$appsimake_bootstrap.bootstrap.get_alertWarning_kre7dp$;
  var get_alertDanger = $module$appsimake_bootstrap.bootstrap.get_alertDanger_kre7dp$;
  var get_sm = $module$appsimake_fontawesome.fontawesome.get_sm_xml72e$;
  var get_times = $module$appsimake_fontawesome.fontawesome.get_times_xml72e$;
  var get_borderBottom = $module$appsimake_bootstrap.bootstrap.get_borderBottom_kre7dp$;
  var get_alignSelfCenter = $module$appsimake_bootstrap.bootstrap.get_alignSelfCenter_kre7dp$;
  var get_px1 = $module$appsimake_bootstrap.bootstrap.get_px1_kre7dp$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var replaceWith = $module$appsimake_common.common.replaceWith_fga9sf$;
  RxEditing.prototype = Object.create(DefaultEditing.prototype);
  RxEditing.prototype.constructor = RxEditing;
  JobKillsImpl.prototype = Object.create(JobScopeImpl.prototype);
  JobKillsImpl.prototype.constructor = JobKillsImpl;
  ExecImpl.prototype = Object.create(JobKillsImpl.prototype);
  ExecImpl.prototype.constructor = ExecImpl;
  ViewImplBase.prototype = Object.create(ExecImpl.prototype);
  ViewImplBase.prototype.constructor = ViewImplBase;
  ViewImpl.prototype = Object.create(ViewImplBase.prototype);
  ViewImpl.prototype.constructor = ViewImpl;
  UIBase.prototype = Object.create(ViewImpl.prototype);
  UIBase.prototype.constructor = UIBase;
  Progress.prototype = Object.create(UIBase.prototype);
  Progress.prototype.constructor = Progress;
  Orientation.prototype = Object.create(Enum.prototype);
  Orientation.prototype.constructor = Orientation;
  ToolBar.prototype = Object.create(NodesFactory.prototype);
  ToolBar.prototype.constructor = ToolBar;
  ProgressTC.prototype = Object.create(UIBase.prototype);
  ProgressTC.prototype.constructor = ProgressTC;
  Bind.prototype = Object.create(InboxWrap.prototype);
  Bind.prototype.constructor = Bind;
  Badge.prototype = Object.create(ScreenWrap.prototype);
  Badge.prototype.constructor = Badge;
  Body.prototype = Object.create(JobKillsImpl.prototype);
  Body.prototype.constructor = Body;
  Button.prototype = Object.create(ScreenWrap.prototype);
  Button.prototype.constructor = Button;
  ButtonGroup.prototype = Object.create(ScreenWrap.prototype);
  ButtonGroup.prototype.constructor = ButtonGroup;
  DropdownMenuItem.prototype = Object.create(ScreenWrap.prototype);
  DropdownMenuItem.prototype.constructor = DropdownMenuItem;
  DropdownMenu.prototype = Object.create(ScreenWrap.prototype);
  DropdownMenu.prototype.constructor = DropdownMenu;
  Dropdown.prototype = Object.create(ScreenWrap.prototype);
  Dropdown.prototype.constructor = Dropdown;
  HTMLElementWrap.prototype = Object.create(ScreenWrap.prototype);
  HTMLElementWrap.prototype.constructor = HTMLElementWrap;
  Form.prototype = Object.create(ScreenWrap.prototype);
  Form.prototype.constructor = Form;
  FormGroup.prototype = Object.create(ScreenWrap.prototype);
  FormGroup.prototype.constructor = FormGroup;
  ForwardImpl.prototype = Object.create(ViewImplBase.prototype);
  ForwardImpl.prototype.constructor = ForwardImpl;
  ForwardBase.prototype = Object.create(ForwardImpl.prototype);
  ForwardBase.prototype.constructor = ForwardBase;
  Hourglass.prototype = Object.create(ScreenWrap.prototype);
  Hourglass.prototype.constructor = Hourglass;
  Input.prototype = Object.create(ScreenWrap.prototype);
  Input.prototype.constructor = Input;
  InputGroup.prototype = Object.create(ScreenWrap.prototype);
  InputGroup.prototype.constructor = InputGroup;
  ListGroup.prototype = Object.create(ScreenWrap.prototype);
  ListGroup.prototype.constructor = ListGroup;
  ListGroupButton.prototype = Object.create(ScreenWrap.prototype);
  ListGroupButton.prototype.constructor = ListGroupButton;
  Screen.prototype = Object.create(ScreenWrap.prototype);
  Screen.prototype.constructor = Screen;
  ScrollPane.prototype = Object.create(ScreenWrap.prototype);
  ScrollPane.prototype.constructor = ScrollPane;
  Stack.prototype = Object.create(ScreenWrap.prototype);
  Stack.prototype.constructor = Stack;
  UIWrap.prototype = Object.create(UIBase.prototype);
  UIWrap.prototype.constructor = UIWrap;
  Status.prototype = Object.create(ScreenWrap.prototype);
  Status.prototype.constructor = Status;
  Toasts.prototype = Object.create(ScreenWrap.prototype);
  Toasts.prototype.constructor = Toasts;
  Toast.prototype = Object.create(ScreenWrap.prototype);
  Toast.prototype.constructor = Toast;
  HourglassView.prototype = Object.create(ViewImpl.prototype);
  HourglassView.prototype.constructor = HourglassView;
  Topbar.prototype = Object.create(ScreenWrap.prototype);
  Topbar.prototype.constructor = Topbar;
  Tabs.prototype = Object.create(ScreenWrap.prototype);
  Tabs.prototype.constructor = Tabs;
  Tab.prototype = Object.create(ScreenWrap.prototype);
  Tab.prototype.constructor = Tab;
  SlotsOwner$NodeRef.prototype = Object.create(SlotsOwner.prototype);
  SlotsOwner$NodeRef.prototype.constructor = SlotsOwner$NodeRef;
  SlotsOwner$SlotsRef.prototype = Object.create(SlotsOwner.prototype);
  SlotsOwner$SlotsRef.prototype.constructor = SlotsOwner$SlotsRef;
  PrevRef$First.prototype = Object.create(PrevRef.prototype);
  PrevRef$First.prototype.constructor = PrevRef$First;
  PrevRef$NodeRef.prototype = Object.create(PrevRef.prototype);
  PrevRef$NodeRef.prototype.constructor = PrevRef$NodeRef;
  SlotsElement.prototype = Object.create(PrevRef.prototype);
  SlotsElement.prototype.constructor = SlotsElement;
  Slots$SlotItem.prototype = Object.create(SlotsElement.prototype);
  Slots$SlotItem.prototype.constructor = Slots$SlotItem;
  Slots.prototype = Object.create(SlotsElement.prototype);
  Slots.prototype.constructor = Slots;
  function KillsApiCommonui() {
  }
  KillsApiCommonui.prototype.visibility_dakdiv$ = function ($receiver, fn) {
    return visibility($receiver, this, fn);
  };
  KillsApiCommonui.prototype.enabled_y5ufnr$ = function ($receiver, fn) {
    $receiver.enabled_lcj72s$(this, fn);
  };
  function KillsApiCommonui$remAssign$lambda(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function KillsApiCommonui$remAssign$lambda_0(this$remAssign) {
    return function ($receiver, it) {
      this$remAssign(it);
      return Unit;
    };
  }
  KillsApiCommonui.prototype.remAssign_ah7wag$ = function ($receiver, fn) {
    this.forEach_xwzbbo$(this.rx_y6x17j$(KillsApiCommonui$remAssign$lambda(fn)), KillsApiCommonui$remAssign$lambda_0($receiver));
  };
  KillsApiCommonui.prototype.rxClass_9npl0m$ = function ($receiver, stl, fn) {
    this.rxClass_6sflyw$($receiver.node, stl, fn);
  };
  KillsApiCommonui.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KillsApiCommonui',
    interfaces: [KillsApiDomx]
  };
  function UixApi() {
  }
  UixApi.prototype.click_htd9kn$ = function ($receiver, action) {
    click($receiver, this, action);
  };
  UixApi.prototype.click_3xepc3$ = function ($receiver, action) {
    click_0($receiver, this, action);
  };
  UixApi.prototype.click_ka8ib0$ = function ($receiver, action) {
    click_1($receiver, this, action);
  };
  UixApi.prototype.click_b0jn9q$ = function ($receiver, action) {
    click_2($receiver, this, action);
  };
  UixApi.prototype.signOut_7wq8x$ = function ($receiver, action) {
    return $receiver.signOut_4mlwwe$(this, action);
  };
  UixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UixApi',
    interfaces: [HasUix, Api]
  };
  function CsApiCommonui() {
  }
  CsApiCommonui.prototype.list_u1uvxv$ = function ($receiver, nodes) {
    nodeList($receiver, this, nodes);
  };
  CsApiCommonui.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CsApiCommonui',
    interfaces: [CsApi]
  };
  function EditKillsApi() {
  }
  EditKillsApi.prototype.bind_eam54t$ = function ($receiver, rxv) {
    return bind($receiver, this, rxv);
  };
  EditKillsApi.prototype.bind_85m6xz$ = function ($receiver, modelValue, initial, extract) {
    return bind_0($receiver, this, modelValue, initial, extract);
  };
  EditKillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditKillsApi',
    interfaces: [KillsApiCommonui, HasEditKills]
  };
  function EditKillsUixApi() {
  }
  EditKillsUixApi.prototype.get_saveButton_tdhe4g$ = function ($receiver) {
    return saveButton($receiver, this);
  };
  EditKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditKillsUixApi',
    interfaces: [HasEditKillsUix, EditKillsApi]
  };
  function EditFromKillsUixApi() {
  }
  EditFromKillsUixApi.prototype.get_backSaveDiscard_e1rmy3$ = function ($receiver) {
    return new BackSaveDiscard(this, $receiver);
  };
  EditFromKillsUixApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditFromKillsUixApi',
    interfaces: [HasEditFromKillsUix, EditKillsUixApi]
  };
  function isServiceWorkerSupported$lambda() {
    var tmp$;
    return (Kotlin.isType(tmp$ = window.navigator.serviceWorker, Any) ? tmp$ : null) != null;
  }
  var isServiceWorkerSupported;
  function get_isServiceWorkerSupported() {
    return isServiceWorkerSupported.value;
  }
  function isFcmSupported$lambda() {
    return get_isServiceWorkerSupported();
  }
  var isFcmSupported;
  function get_isFcmSupported() {
    return isFcmSupported.value;
  }
  function APP() {
    APP_instance = this;
    this.registerServiceWorkerPromise_33ivn7$_0 = lazy(APP$registerServiceWorkerPromise$lambda);
  }
  Object.defineProperty(APP.prototype, 'registerServiceWorkerPromise_0', {
    get: function () {
      return this.registerServiceWorkerPromise_33ivn7$_0.value;
    }
  });
  APP.prototype.startRegisteringServiceWorker = function () {
    return this.registerServiceWorkerPromise_0;
  };
  function Coroutine$registerServiceWorker($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$registerServiceWorker.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$registerServiceWorker.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$registerServiceWorker.prototype.constructor = Coroutine$registerServiceWorker;
  Coroutine$registerServiceWorker.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.$this.startRegisteringServiceWorker()) != null) {
              this.state_0 = 2;
              this.result_0 = await_0(tmp$, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
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
  APP.prototype.registerServiceWorker = function (continuation_0, suspended) {
    var instance = new Coroutine$registerServiceWorker(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function APP$registerServiceWorkerPromise$lambda() {
    if (get_isServiceWorkerSupported()) {
      globalStatus.remAssign_11rb$('Registering service worker...');
      return window.navigator.serviceWorker.register(buildenv.serviceWorkerFileName);
    }
     else {
      globalStatus.remAssign_11rb$('Service worker not supported.');
      return null;
    }
  }
  APP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'APP',
    interfaces: []
  };
  var APP_instance = null;
  function APP_getInstance() {
    if (APP_instance === null) {
      new APP();
    }
    return APP_instance;
  }
  function AppCtx(title) {
    this.title = title;
    this.killables = new Killables();
    this.root_mbqan$_0 = lazy(AppCtx$root$lambda);
    setupFullScreen();
    this.isServiceWorkerSupported_c1ctq4$_0 = lazy(AppCtx$isServiceWorkerSupported$lambda);
    this.isFcmSupported_iuxhhj$_0 = lazy(AppCtx$isFcmSupported$lambda(this));
    this.serviceWorker_ghxie8$_0 = lazy(AppCtx$serviceWorker$lambda);
    this.networkType_we8u4r$_0 = lazy(AppCtx$networkType$lambda(this));
    this.networkEffectiveType_nd1mum$_0 = lazy(AppCtx$networkEffectiveType$lambda(this));
  }
  Object.defineProperty(AppCtx.prototype, 'root', {
    get: function () {
      return this.root_mbqan$_0.value;
    }
  });
  AppCtx.prototype.hourglass = function () {
    this.root.setHourglass();
  };
  Object.defineProperty(AppCtx.prototype, 'isServiceWorkerSupported', {
    get: function () {
      return this.isServiceWorkerSupported_c1ctq4$_0.value;
    }
  });
  Object.defineProperty(AppCtx.prototype, 'isFcmSupported', {
    get: function () {
      return this.isFcmSupported_iuxhhj$_0.value;
    }
  });
  Object.defineProperty(AppCtx.prototype, 'serviceWorker', {
    get: function () {
      return this.serviceWorker_ghxie8$_0.value;
    }
  });
  AppCtx.prototype.registerServiceWorker = function () {
    if (this.isServiceWorkerSupported) {
      this.serviceWorker;
    }
  };
  Object.defineProperty(AppCtx.prototype, 'networkType', {
    get: function () {
      return this.networkType_we8u4r$_0.value;
    }
  });
  Object.defineProperty(AppCtx.prototype, 'networkEffectiveType', {
    get: function () {
      return this.networkEffectiveType_nd1mum$_0.value;
    }
  });
  function AppCtx$root$lambda() {
    var $receiver = new RootPanel(ensureNotNull(document.body));
    $receiver.setHourglass();
    return $receiver;
  }
  function AppCtx$isServiceWorkerSupported$lambda() {
    var tmp$;
    return (Kotlin.isType(tmp$ = window.navigator.serviceWorker, Any) ? tmp$ : null) != null;
  }
  function AppCtx$isFcmSupported$lambda(this$AppCtx) {
    return function () {
      return this$AppCtx.isServiceWorkerSupported;
    };
  }
  function AppCtx$serviceWorker$lambda() {
    return window.navigator.serviceWorker.register(buildenv.serviceWorkerFileName);
  }
  function AppCtx$networkType$lambda$update(closure$connection, closure$rxv) {
    return function () {
      closure$rxv.now = closure$connection.type;
    };
  }
  function AppCtx$networkType$lambda$lambda(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function AppCtx$networkType$lambda$lambda_0(closure$connection, closure$listener) {
    return function () {
      closure$connection.removeEventListener('change', closure$listener);
      return Unit;
    };
  }
  function Coroutine$AppCtx$networkType$lambda$lambda(closure$update_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$update = closure$update_0;
  }
  Coroutine$AppCtx$networkType$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AppCtx$networkType$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AppCtx$networkType$lambda$lambda.prototype.constructor = Coroutine$AppCtx$networkType$lambda$lambda;
  Coroutine$AppCtx$networkType$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$update(), Unit;
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
  function AppCtx$networkType$lambda$lambda_1(closure$update_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$AppCtx$networkType$lambda$lambda(closure$update_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function AppCtx$networkType$lambda(this$AppCtx) {
    return function () {
      var rxv = new Var('unknown');
      var connection = get_connection(window.navigator);
      var update = AppCtx$networkType$lambda$update(connection, rxv);
      var listener = AppCtx$networkType$lambda$lambda(update);
      connection.addEventListener('change', listener);
      this$AppCtx.killables.plusAssign_o14v8n$(AppCtx$networkType$lambda$lambda_0(connection, listener));
      launch(coroutines.GlobalScope, void 0, void 0, AppCtx$networkType$lambda$lambda_1(update));
      return rxv;
    };
  }
  function AppCtx$networkEffectiveType$lambda$update(closure$connection, closure$rxv) {
    return function () {
      closure$rxv.now = closure$connection.effectiveType;
    };
  }
  function AppCtx$networkEffectiveType$lambda$lambda(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function AppCtx$networkEffectiveType$lambda$lambda_0(closure$connection, closure$listener) {
    return function () {
      closure$connection.removeEventListener('change', closure$listener);
      return Unit;
    };
  }
  function Coroutine$AppCtx$networkEffectiveType$lambda$lambda(closure$update_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$update = closure$update_0;
  }
  Coroutine$AppCtx$networkEffectiveType$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AppCtx$networkEffectiveType$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AppCtx$networkEffectiveType$lambda$lambda.prototype.constructor = Coroutine$AppCtx$networkEffectiveType$lambda$lambda;
  Coroutine$AppCtx$networkEffectiveType$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$update(), Unit;
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
  function AppCtx$networkEffectiveType$lambda$lambda_1(closure$update_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$AppCtx$networkEffectiveType$lambda$lambda(closure$update_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function AppCtx$networkEffectiveType$lambda(this$AppCtx) {
    return function () {
      var connection = get_connection(window.navigator);
      var rxv = new Var(connection.effectiveType);
      var update = AppCtx$networkEffectiveType$lambda$update(connection, rxv);
      var listener = AppCtx$networkEffectiveType$lambda$lambda(update);
      connection.addEventListener('change', listener);
      this$AppCtx.killables.plusAssign_o14v8n$(AppCtx$networkEffectiveType$lambda$lambda_0(connection, listener));
      launch(coroutines.GlobalScope, void 0, void 0, AppCtx$networkEffectiveType$lambda$lambda_1(update));
      return rxv;
    };
  }
  AppCtx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AppCtx',
    interfaces: []
  };
  function browserVisible$lambda$lambda(it) {
    return it;
  }
  var browserVisible$lambda$hidden_metadata = new PropertyMetadata('hidden');
  function browserVisible$lambda$lambda_0(it) {
    return it;
  }
  var browserVisible$lambda$visible_metadata = new PropertyMetadata('visible');
  function browserVisible$lambda$lambda_1(it) {
    return it;
  }
  var browserVisible$lambda$visibilitychange_metadata = new PropertyMetadata('visibilitychange');
  function browserVisible$lambda$lambda_2(it) {
    return it;
  }
  var browserVisible$lambda$visibilityState_metadata = new PropertyMetadata('visibilityState');
  function browserVisible$lambda$isVisible(closure$hidden, closure$visibilityState, closure$visible) {
    return function () {
      var dd = document;
      return dd[closure$hidden.getValue_lrcp0p$(null, browserVisible$lambda$hidden_metadata)] == false || dd[closure$visibilityState.getValue_lrcp0p$(null, browserVisible$lambda$visibilityState_metadata)] == closure$visible.getValue_lrcp0p$(null, browserVisible$lambda$visible_metadata);
    };
  }
  function browserVisible$lambda$lambda_3(closure$isVisible, closure$rxv) {
    return function (it) {
      closure$rxv.now = closure$isVisible();
      return Unit;
    };
  }
  function browserVisible$lambda() {
    var hidden = named(browserVisible$lambda$lambda).provideDelegate_n5byny$(this, browserVisible$lambda$hidden_metadata);
    var visible = named(browserVisible$lambda$lambda_0).provideDelegate_n5byny$(this, browserVisible$lambda$visible_metadata);
    var visibilitychange = named(browserVisible$lambda$lambda_1).provideDelegate_n5byny$(this, browserVisible$lambda$visibilitychange_metadata);
    var visibilityState = named(browserVisible$lambda$lambda_2).provideDelegate_n5byny$(this, browserVisible$lambda$visibilityState_metadata);
    var isVisible = browserVisible$lambda$isVisible(hidden, visibilityState, visible);
    var rxv = new Var(isVisible());
    var callback = browserVisible$lambda$lambda_3(isVisible, rxv);
    document.addEventListener(visibilitychange.getValue_lrcp0p$(null, browserVisible$lambda$visibilitychange_metadata), callback);
    return rxv;
  }
  var browserVisible;
  function get_browserVisible() {
    return browserVisible.value;
  }
  function windowHasFocus$lambda$lambda(closure$rxv) {
    return function (it) {
      closure$rxv.now = true;
      return Unit;
    };
  }
  function windowHasFocus$lambda$lambda_0(closure$rxv) {
    return function (it) {
      closure$rxv.now = false;
      return Unit;
    };
  }
  function windowHasFocus$lambda() {
    var rxv = new Var(document.hasFocus());
    var target = window;
    var focusEvent = 'focus';
    var blurEvent = 'blur';
    var focusCallback = windowHasFocus$lambda$lambda(rxv);
    var blurCallback = windowHasFocus$lambda$lambda_0(rxv);
    target.addEventListener(focusEvent, focusCallback);
    target.addEventListener(blurEvent, blurCallback);
    return rxv;
  }
  var windowHasFocus;
  function get_windowHasFocus() {
    return windowHasFocus.value;
  }
  function windowActive$lambda$lambda($receiver) {
    return get_browserVisible().invoke() && get_windowHasFocus().invoke();
  }
  function windowActive$lambda() {
    return Rx_init(killable.NoKill, windowActive$lambda$lambda);
  }
  var windowActive;
  function get_windowActive() {
    return windowActive.value;
  }
  function keepAwakeVideo$lambda$lambda($receiver) {
    $receiver.loop = true;
    base64(get_source($receiver), 'video/webm', 'GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA');
    base64(get_source($receiver), 'video/mp4', 'AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9');
    return Unit;
  }
  function keepAwakeVideo$lambda() {
    return video(document, keepAwakeVideo$lambda$lambda);
  }
  var keepAwakeVideo;
  function get_keepAwakeVideo() {
    return keepAwakeVideo.value;
  }
  var keepAwakeCounter;
  function keepScreenAwake$lambda() {
    keepAwakeCounter = keepAwakeCounter - 1 | 0;
    if (keepAwakeCounter === 0) {
      get_keepAwakeVideo().pause();
    }
    return Unit;
  }
  function keepScreenAwake($receiver) {
    if (keepAwakeCounter === 0) {
      get_keepAwakeVideo().play();
    }
    keepAwakeCounter = keepAwakeCounter + 1 | 0;
    plusAssign($receiver.kills, keepScreenAwake$lambda);
  }
  function nextButton$lambda(closure$label) {
    return function ($receiver) {
      $receiver.innerText = closure$label;
      return Unit;
    };
  }
  function nextButton($receiver, label, fn) {
    return nextButton_0($receiver, nextButton$lambda(label), fn);
  }
  function webkitdirectorySupported$lambda() {
    return equals(typeof get_input(document).webkitdirectory, 'boolean');
  }
  var webkitdirectorySupported;
  function get_webkitdirectorySupported() {
    return webkitdirectorySupported.value;
  }
  function nextButton$lambda$lambda(closure$label) {
    return function ($receiver) {
      get_flexGrow1(get_cls($receiver));
      closure$label($receiver);
      return Unit;
    };
  }
  function nextButton$lambda_0(closure$label) {
    return function ($receiver) {
      row(get_cls($receiver));
      invoke(get_div($receiver), nextButton$lambda$lambda(closure$label));
      get_chevronRight(get_fa(get_cls($receiver)));
      return Unit;
    };
  }
  function nextButton_0($receiver, label, fn) {
    return listButton($receiver, fn, nextButton$lambda_0(label));
  }
  function get_hourglass$lambda$lambda($receiver) {
    get_spinnerBorder(get_cls($receiver));
    return Unit;
  }
  function get_hourglass$lambda($receiver) {
    invoke(get_div($receiver), get_hourglass$lambda$lambda);
    return Unit;
  }
  function get_hourglass($receiver) {
    return centerDiv($receiver, get_hourglass$lambda);
  }
  function showClosable$lambda(closure$back, closure$ks) {
    return function () {
      closure$back();
      closure$ks.kill();
      return Unit;
    };
  }
  function showClosable(killables_0, page, back) {
    var ks = killables(killables_0);
    page(ks.killSet, showClosable$lambda(back, ks));
  }
  function faButtonSpan$lambda($receiver) {
    return Unit;
  }
  function faButtonSpan$lambda_0(closure$faIconClass, closure$fn) {
    return function ($receiver) {
      get_fw(get_fa(get_cls($receiver)));
      if (closure$faIconClass != null) {
        var it = closure$faIconClass;
        get_classes($receiver).plusAssign_pdl1vj$(it);
      }
      closure$fn($receiver);
      return Unit;
    };
  }
  function faButtonSpan($receiver, faIconClass, fn) {
    if (faIconClass === void 0)
      faIconClass = null;
    if (fn === void 0)
      fn = faButtonSpan$lambda;
    get_p2(get_cls($receiver));
    return invoke(get_span($receiver), faButtonSpan$lambda_0(faIconClass, fn));
  }
  function faButton$lambda(closure$faIconClass, closure$fn) {
    return function ($receiver) {
      get_btn(get_cls($receiver));
      faButtonSpan($receiver, closure$faIconClass);
      closure$fn($receiver);
      return Unit;
    };
  }
  function faButton($receiver, faIconClass, fn) {
    return invoke(get_button($receiver), faButton$lambda(faIconClass, fn));
  }
  function HasEdit() {
  }
  HasEdit.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasEdit',
    interfaces: []
  };
  function HasEditKills() {
  }
  HasEditKills.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasEditKills',
    interfaces: [HasKills, HasEdit]
  };
  function EditKillsDeps(editing, kills) {
    this.editing_8z40sw$_0 = editing;
    this.kills_yhlq0j$_0 = kills;
  }
  Object.defineProperty(EditKillsDeps.prototype, 'editing', {
    get: function () {
      return this.editing_8z40sw$_0;
    }
  });
  Object.defineProperty(EditKillsDeps.prototype, 'kills', {
    get: function () {
      return this.kills_yhlq0j$_0;
    }
  });
  EditKillsDeps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditKillsDeps',
    interfaces: [HasEditKills]
  };
  function plus_0($receiver, kills) {
    return new EditKillsDeps($receiver, kills);
  }
  function HasEditFromKillsUix() {
  }
  HasEditFromKillsUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasEditFromKillsUix',
    interfaces: [HasUix, HasKills, HasFrom, HasEdit]
  };
  function HasFrom() {
  }
  HasFrom.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasFrom',
    interfaces: []
  };
  function HasEditFrom() {
  }
  HasEditFrom.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasEditFrom',
    interfaces: [HasFrom, HasEdit]
  };
  function HasUix() {
  }
  HasUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasUix',
    interfaces: []
  };
  function HasKillsUix() {
  }
  HasKillsUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasKillsUix',
    interfaces: [HasUix, HasKills]
  };
  function HasEditKillsUix() {
  }
  HasEditKillsUix.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasEditKillsUix',
    interfaces: [HasEditKills, HasKillsUix, HasUix, HasKills, HasEdit]
  };
  function Editing() {
  }
  Editing.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Editing',
    interfaces: []
  };
  function DefaultEditing(kills) {
    this.kills_k8kbop$_0 = kills;
    this.extraDirty = new Var(emptyList());
    this.validations = new Var(emptyList());
    this.canSave_ljrhrz$_0 = this.rx_y6x17j$(DefaultEditing$canSave$lambda(this));
  }
  Object.defineProperty(DefaultEditing.prototype, 'kills', {
    get: function () {
      return this.kills_k8kbop$_0;
    }
  });
  Object.defineProperty(DefaultEditing.prototype, 'canSave', {
    get: function () {
      return this.canSave_ljrhrz$_0;
    }
  });
  var Collection = Kotlin.kotlin.collections.Collection;
  function DefaultEditing$canSave$lambda(this$DefaultEditing) {
    return function ($receiver) {
      var $receiver_0 = this$DefaultEditing.validations.invoke();
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!element.invoke()) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    };
  }
  DefaultEditing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultEditing',
    interfaces: [KillsApi, Editing]
  };
  function RxEditing(initial, kills, saveCurrent) {
    DefaultEditing.call(this, kills);
    this.initial = initial;
    this.current = copy(this.initial);
    this.save_xplr5w$_0 = RxEditing$save$lambda(saveCurrent, this);
    this.dirty_dfm949$_0 = this.rx_y6x17j$(RxEditing$dirty$lambda(this));
  }
  Object.defineProperty(RxEditing.prototype, 'save', {
    get: function () {
      return this.save_xplr5w$_0;
    }
  });
  Object.defineProperty(RxEditing.prototype, 'dirty', {
    get: function () {
      return this.dirty_dfm949$_0;
    }
  });
  function Coroutine$RxEditing$save$lambda(closure$saveCurrent_0, this$RxEditing_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$saveCurrent = closure$saveCurrent_0;
    this.local$this$RxEditing = this$RxEditing_0;
  }
  Coroutine$RxEditing$save$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$RxEditing$save$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$RxEditing$save$lambda.prototype.constructor = Coroutine$RxEditing$save$lambda;
  Coroutine$RxEditing$save$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$saveCurrent(this.local$this$RxEditing.current, this);
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
  function RxEditing$save$lambda(closure$saveCurrent_0, this$RxEditing_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$RxEditing$save$lambda(closure$saveCurrent_0, this$RxEditing_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function RxEditing$dirty$lambda(this$RxEditing) {
    return function ($receiver) {
      var $receiver_0 = this$RxEditing.extraDirty.invoke();
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.invoke()) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result || !rxCompare(this$RxEditing.initial, this$RxEditing.current);
    };
  }
  RxEditing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RxEditing',
    interfaces: [DefaultEditing, KillsApi]
  };
  function Binder(rawValue, parsedValue, kills) {
    this.rawValue = rawValue;
    this.parsedValue = parsedValue;
    this.kills_blym78$_0 = kills;
    this.validations = new Var(emptyList());
    this.valid = Rx_init(killable.NoKill, Binder$valid$lambda(this));
    this.dirties = new Var(emptyList());
    this.dirty = Rx_init(killable.NoKill, Binder$dirty$lambda(this));
  }
  Object.defineProperty(Binder.prototype, 'kills', {
    get: function () {
      return this.kills_blym78$_0;
    }
  });
  function Binder$valid$lambda(this$Binder) {
    return function ($receiver) {
      var $receiver_0 = this$Binder.validations.invoke();
      var all$result;
      all$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (!element.invoke()) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      return all$result;
    };
  }
  function Binder$dirty$lambda(this$Binder) {
    return function ($receiver) {
      var $receiver_0 = this$Binder.dirties.invoke();
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.invoke()) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }
  Binder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Binder',
    interfaces: [KillsApi]
  };
  function validate$lambda(closure$fn) {
    return function ($receiver) {
      return closure$fn($receiver);
    };
  }
  function validate$lambda_0(closure$rxv) {
    return function (it) {
      return plus(it, closure$rxv);
    };
  }
  function validate$lambda$lambda(closure$rxv) {
    return function (it) {
      return minus(it, closure$rxv);
    };
  }
  function validate$lambda_1(this$validate, closure$rxv) {
    return function () {
      this$validate.validations.transform_ru8m0w$(validate$lambda$lambda(closure$rxv));
      return Unit;
    };
  }
  function validate($receiver, fn) {
    var rxv = $receiver.rx_y6x17j$(validate$lambda(fn));
    $receiver.validations.transform_ru8m0w$(validate$lambda_0(rxv));
    plusAssign($receiver.kills, validate$lambda_1($receiver, rxv));
  }
  function raw$lambda(closure$fn, this$raw) {
    return function ($receiver) {
      return closure$fn($receiver, this$raw.rawValue.invoke());
    };
  }
  function raw($receiver, fn) {
    validate($receiver, raw$lambda(fn, $receiver));
  }
  function parsed$lambda(closure$fn, this$parsed) {
    return function ($receiver) {
      return closure$fn($receiver, this$parsed.parsedValue.invoke());
    };
  }
  function parsed($receiver, fn) {
    validate($receiver, parsed$lambda(fn, $receiver));
  }
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  function required$lambda($receiver, it) {
    return !isBlank(it);
  }
  function required($receiver) {
    parsed($receiver, required$lambda);
  }
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function bind$lambda(it) {
    var tmp$;
    return trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
  }
  var properties = $module$appsimake_commonshr.commonshr.properties;
  function bind($receiver, deps, rxv) {
    return bind_0($receiver, deps, rxv, properties.Identity, bind$lambda);
  }
  function bind$lambda_0(closure$modelValue, closure$extract, closure$extractValid) {
    return function ($receiver, s) {
      try {
        closure$modelValue.remAssign_11rb$(closure$extract(s));
        closure$extractValid.remAssign_11rb$(true);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          closure$extractValid.remAssign_11rb$(false);
        }
         else
          throw e;
      }
      return Unit;
    };
  }
  function bind$lambda$lambda(closure$extractValid) {
    return function (it) {
      return plus(it, closure$extractValid);
    };
  }
  function bind$lambda$lambda$lambda(closure$extractValid) {
    return function ($receiver) {
      return !closure$extractValid.invoke();
    };
  }
  function bind$lambda$lambda_0(closure$deps, closure$extractValid) {
    return function (it) {
      return plus(it, Rx_init(closure$deps.kills, bind$lambda$lambda$lambda(closure$extractValid)));
    };
  }
  function bind$lambda$lambda_1(closure$b) {
    return function (it) {
      return plus(it, closure$b.valid);
    };
  }
  function bind$lambda$lambda$lambda_0(closure$b) {
    return function (it) {
      return minus(it, closure$b.valid);
    };
  }
  function bind$lambda$lambda_2(closure$deps, closure$b) {
    return function () {
      closure$deps.editing.validations.transform_ru8m0w$(bind$lambda$lambda$lambda_0(closure$b));
      return Unit;
    };
  }
  function bind$lambda$lambda_3(closure$b) {
    return function (it) {
      return plus(it, closure$b.dirty);
    };
  }
  function bind$lambda$lambda$lambda_1(closure$b) {
    return function (it) {
      return minus(it, closure$b.dirty);
    };
  }
  function bind$lambda$lambda_4(closure$deps, closure$b) {
    return function () {
      closure$deps.editing.extraDirty.transform_ru8m0w$(bind$lambda$lambda$lambda_1(closure$b));
      return Unit;
    };
  }
  function bind$lambda$lambda_5(this$bind) {
    return function ($receiver, it) {
      this$bind.valid.remAssign_11rb$(it);
      return Unit;
    };
  }
  function bind_0($receiver, deps, modelValue, initial, extract) {
    $receiver.value = initial(modelValue.now);
    var extractValid = new Var(true);
    $receiver.rxv.forEach_aaomyj$(deps.kills, bind$lambda_0(modelValue, extract, extractValid));
    var $receiver_0 = new Binder($receiver.rxv, modelValue, deps.kills);
    $receiver_0.validations.transform_ru8m0w$(bind$lambda$lambda(extractValid));
    $receiver_0.dirties.transform_ru8m0w$(bind$lambda$lambda_0(deps, extractValid));
    deps.editing.validations.transform_ru8m0w$(bind$lambda$lambda_1($receiver_0));
    plusAssign(deps.kills, bind$lambda$lambda_2(deps, $receiver_0));
    deps.editing.extraDirty.transform_ru8m0w$(bind$lambda$lambda_3($receiver_0));
    plusAssign(deps.kills, bind$lambda$lambda_4(deps, $receiver_0));
    $receiver_0.valid.forEach_aaomyj$(deps.kills, bind$lambda$lambda_5($receiver));
    return $receiver_0;
  }
  function EditingApi() {
  }
  EditingApi.prototype.rxEditing_ughfa7$ = function (initial, saveCurrent) {
    return new RxEditing(initial, this.kills, saveCurrent);
  };
  EditingApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EditingApi',
    interfaces: [KillsApiCommonui, HasUix, HasFrom, KillsApi, HasEdit]
  };
  function saveButton$lambda$lambda(closure$deps) {
    return function () {
      return closure$deps.editing.dirty.invoke() && closure$deps.editing.canSave.invoke();
    };
  }
  function Coroutine$saveButton$lambda$lambda(closure$deps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$deps = closure$deps_0;
  }
  Coroutine$saveButton$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$saveButton$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$saveButton$lambda$lambda.prototype.constructor = Coroutine$saveButton$lambda$lambda;
  Coroutine$saveButton$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$deps.editing.save(this);
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
  function saveButton$lambda$lambda_0(closure$deps_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$saveButton$lambda$lambda(closure$deps_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function saveButton($receiver, deps) {
    var $receiver_0 = $receiver.button;
    $receiver_0.m1p2;
    $receiver_0.primary;
    get_save($receiver_0.fa);
    $receiver_0.enabled_lcj72s$(deps, saveButton$lambda$lambda(deps));
    click_0($receiver_0, deps, saveButton$lambda$lambda_0(deps));
    return $receiver_0;
  }
  function BackSaveDiscard(deps, holes) {
    this.$delegate_7uc9t7$_0 = deps;
    var $receiver = get_insert_0(holes.slot).button;
    $receiver.visible_kyamjc$(this, BackSaveDiscard$discard$lambda$lambda(this));
    $receiver.m1p2;
    get_backspace($receiver.fa);
    $receiver.danger;
    this.click_3xepc3$($receiver, BackSaveDiscard$discard$lambda$lambda_0(this));
    this.discard = $receiver;
    var $receiver_0 = get_insert_0(holes.slot).button;
    $receiver_0.visible_kyamjc$(this, BackSaveDiscard$back$lambda$lambda(this));
    $receiver_0.back;
    this.click_3xepc3$($receiver_0, BackSaveDiscard$back$lambda$lambda_0(this));
    this.back = $receiver_0;
    var $receiver_1 = get_insert_0(holes.slot).buttonGroup;
    $receiver_1.visible_kyamjc$(this, BackSaveDiscard$save$lambda$lambda(this));
    get_m1($receiver_1.cls);
    var $receiver_2 = $receiver_1.button;
    var $receiver_3 = $receiver_2.cls;
    get_p2($receiver_3);
    get_btnSuccess($receiver_3);
    invoke(get_span($receiver_2.node), BackSaveDiscard$save$lambda$lambda$lambda);
    invoke(get_span($receiver_2.node), BackSaveDiscard$save$lambda$lambda$lambda_0);
    this.click_3xepc3$($receiver_2, BackSaveDiscard$save$lambda$lambda$lambda_1(this));
    get_btnSuccess($receiver_1.dropdownSplit.cls);
    var $receiver_4 = $receiver_1.menu.item;
    get_textDanger($receiver_4.cls);
    get_backspace($receiver_4.fa);
    $receiver_4.text.remAssign_61zpoe$('Discard');
    this.click_ka8ib0$($receiver_4, BackSaveDiscard$save$lambda$lambda$lambda$lambda(this));
    this.save = $receiver_1;
  }
  Object.defineProperty(BackSaveDiscard.prototype, 'editing', {
    get: function () {
      return this.$delegate_7uc9t7$_0.editing;
    }
  });
  Object.defineProperty(BackSaveDiscard.prototype, 'from', {
    get: function () {
      return this.$delegate_7uc9t7$_0.from;
    }
  });
  Object.defineProperty(BackSaveDiscard.prototype, 'kills', {
    get: function () {
      return this.$delegate_7uc9t7$_0.kills;
    }
  });
  Object.defineProperty(BackSaveDiscard.prototype, 'uix', {
    get: function () {
      return this.$delegate_7uc9t7$_0.uix;
    }
  });
  function BackSaveDiscard$discard$lambda$lambda(this$BackSaveDiscard) {
    return function ($receiver) {
      return this$BackSaveDiscard.editing.dirty.invoke() && !this$BackSaveDiscard.editing.canSave.invoke();
    };
  }
  function Coroutine$BackSaveDiscard$discard$lambda$lambda(this$BackSaveDiscard_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BackSaveDiscard = this$BackSaveDiscard_0;
  }
  Coroutine$BackSaveDiscard$discard$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BackSaveDiscard$discard$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BackSaveDiscard$discard$lambda$lambda.prototype.constructor = Coroutine$BackSaveDiscard$discard$lambda$lambda;
  Coroutine$BackSaveDiscard$discard$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$BackSaveDiscard.from.redisplay();
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
  function BackSaveDiscard$discard$lambda$lambda_0(this$BackSaveDiscard_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BackSaveDiscard$discard$lambda$lambda(this$BackSaveDiscard_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function BackSaveDiscard$back$lambda$lambda(this$BackSaveDiscard) {
    return function ($receiver) {
      return !this$BackSaveDiscard.editing.dirty.invoke();
    };
  }
  function Coroutine$BackSaveDiscard$back$lambda$lambda(this$BackSaveDiscard_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BackSaveDiscard = this$BackSaveDiscard_0;
  }
  Coroutine$BackSaveDiscard$back$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BackSaveDiscard$back$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BackSaveDiscard$back$lambda$lambda.prototype.constructor = Coroutine$BackSaveDiscard$back$lambda$lambda;
  Coroutine$BackSaveDiscard$back$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$BackSaveDiscard.from.redisplay();
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
  function BackSaveDiscard$back$lambda$lambda_0(this$BackSaveDiscard_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BackSaveDiscard$back$lambda$lambda(this$BackSaveDiscard_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function BackSaveDiscard$save$lambda$lambda(this$BackSaveDiscard) {
    return function ($receiver) {
      return this$BackSaveDiscard.editing.dirty.invoke() && this$BackSaveDiscard.editing.canSave.invoke();
    };
  }
  function BackSaveDiscard$save$lambda$lambda$lambda($receiver) {
    var $receiver_0 = get_fa(get_cls($receiver));
    get_fw($receiver_0);
    get_chevronLeft($receiver_0);
    return Unit;
  }
  function BackSaveDiscard$save$lambda$lambda$lambda_0($receiver) {
    var $receiver_0 = get_fa(get_cls($receiver));
    get_fw($receiver_0);
    get_save($receiver_0);
    return Unit;
  }
  function Coroutine$BackSaveDiscard$save$lambda$lambda$lambda(this$BackSaveDiscard_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BackSaveDiscard = this$BackSaveDiscard_0;
  }
  Coroutine$BackSaveDiscard$save$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BackSaveDiscard$save$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BackSaveDiscard$save$lambda$lambda$lambda.prototype.constructor = Coroutine$BackSaveDiscard$save$lambda$lambda$lambda;
  Coroutine$BackSaveDiscard$save$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$BackSaveDiscard.editing.save(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$BackSaveDiscard.from.redisplay();
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
  function BackSaveDiscard$save$lambda$lambda$lambda_1(this$BackSaveDiscard_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BackSaveDiscard$save$lambda$lambda$lambda(this$BackSaveDiscard_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$BackSaveDiscard$save$lambda$lambda$lambda$lambda(this$BackSaveDiscard_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$BackSaveDiscard = this$BackSaveDiscard_0;
  }
  Coroutine$BackSaveDiscard$save$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$BackSaveDiscard$save$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$BackSaveDiscard$save$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$BackSaveDiscard$save$lambda$lambda$lambda$lambda;
  Coroutine$BackSaveDiscard$save$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$BackSaveDiscard.from.redisplay();
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
  function BackSaveDiscard$save$lambda$lambda$lambda$lambda(this$BackSaveDiscard_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$BackSaveDiscard$save$lambda$lambda$lambda$lambda(this$BackSaveDiscard_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  BackSaveDiscard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BackSaveDiscard',
    interfaces: [UixApi, KillsApi, HasEditFromKillsUix]
  };
  function mediaSessionSupported$lambda() {
    return 'mediaSession' in navigator;
  }
  var mediaSessionSupported;
  function get_mediaSessionSupported() {
    return mediaSessionSupported.value;
  }
  var get_mediaSession = defineInlineFunction('appsimake-commonui.mediasession.get_mediaSession_yi0el1$', function ($receiver) {
    return $receiver.mediaSession;
  });
  var get_none = defineInlineFunction('appsimake-commonui.mediasession.get_none_dhxii3$', function ($receiver) {
    return 'none';
  });
  var get_paused = defineInlineFunction('appsimake-commonui.mediasession.get_paused_dhxii3$', function ($receiver) {
    return 'paused';
  });
  var get_playing = defineInlineFunction('appsimake-commonui.mediasession.get_playing_dhxii3$', function ($receiver) {
    return 'playing';
  });
  function Coroutine$nodeList$lambda(closure$nodes_0, this$nodeList_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$nodes = closure$nodes_0;
    this.local$this$nodeList = this$nodeList_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$nodeList$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$nodeList$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$nodeList$lambda.prototype.constructor = Coroutine$nodeList$lambda;
  Coroutine$nodeList$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$nodes.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var e_0 = this.result_0;
            if (Kotlin.isType(e_0, ListEvent$Add))
              insertAt(this.local$this$nodeList, e_0.index, e_0.item);
            else if (Kotlin.isType(e_0, ListEvent$Move))
              insertAt(this.local$this$nodeList, e_0.to, removeAt(this.local$this$nodeList, e_0.from));
            else if (Kotlin.isType(e_0, ListEvent$Remove))
              removeAt(this.local$this$nodeList, e_0.index);
            else
              Kotlin.noWhenBranchMatched();
            this.state_0 = 2;
            continue;
          case 6:
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
  function nodeList$lambda(closure$nodes_0, this$nodeList_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$nodeList$lambda(closure$nodes_0, this$nodeList_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  function nodeList($receiver, deps, nodes) {
    if (!!$receiver.hasChildNodes()) {
      var message = 'List container node must be empty!';
      throw IllegalArgumentException_init(message.toString());
    }
    launch(deps, void 0, void 0, nodeList$lambda(nodes, $receiver));
  }
  function Coroutine$currentOrAsk($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
  }
  Coroutine$currentOrAsk.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$currentOrAsk.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$currentOrAsk.prototype.constructor = Coroutine$currentOrAsk;
  Coroutine$currentOrAsk.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var permission = Notification.permission;
            if (equals(permission, 'default')) {
              this.state_0 = 2;
              this.result_0 = await_0(Notification.requestPermission(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$ = permission;
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
  function currentOrAsk($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$currentOrAsk($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$isGrantedOrAsk($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$isGrantedOrAsk.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$isGrantedOrAsk.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$isGrantedOrAsk.prototype.constructor = Coroutine$isGrantedOrAsk;
  Coroutine$isGrantedOrAsk.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = currentOrAsk(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return equals(this.result_0, 'granted');
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
  function isGrantedOrAsk($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$isGrantedOrAsk($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function isSupported($receiver) {
    return window.Notification != null;
  }
  function notDenied($receiver) {
    return !equals(Notification.permission, 'denied');
  }
  function notGranted($receiver) {
    return !equals(Notification.permission, 'granted');
  }
  function shouldRequest($receiver) {
    return isSupported($receiver) && notDenied($receiver) && notGranted($receiver);
  }
  function PageOut(node, kill, proc) {
    if (kill === void 0)
      kill = PageOut_init$lambda;
    if (proc === void 0)
      proc = procOrElse();
    this.node = node;
    this.kill = kill;
    this.proc = proc;
  }
  function PageOut_init$lambda() {
    return Unit;
  }
  PageOut.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageOut',
    interfaces: []
  };
  function PageIn(inbox, back) {
    this.inbox = inbox;
    this.back = back;
  }
  PageIn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PageIn',
    interfaces: []
  };
  function NodeSlot(node) {
    this.node = node;
  }
  NodeSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeSlot',
    interfaces: []
  };
  function Progress(parent) {
    UIBase_init(parent, this);
    this.rawView_kudx1g$_0 = ui(this);
  }
  Object.defineProperty(Progress.prototype, 'rawView', {
    get: function () {
      return this.rawView_kudx1g$_0;
    }
  });
  Progress.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Progress',
    interfaces: [UIBase]
  };
  function ui($receiver) {
    return progressUI($receiver);
  }
  function progressUI$lambda$lambda($receiver) {
    flexCenter(get_cls($receiver));
    return Unit;
  }
  function progressUI$lambda$lambda$lambda() {
    return globalStatus.invoke();
  }
  function progressUI$lambda$lambda_0(this$progressUI) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      flexFixedSize($receiver_0);
      get_m1($receiver_0);
      get_textMuted($receiver_0);
      this$progressUI.remAssign_7fncnf$($receiver, progressUI$lambda$lambda$lambda);
      return Unit;
    };
  }
  function progressUI$lambda(this$progressUI) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_flexGrow1($receiver_0);
      column($receiver_0);
      get_insert($receiver).hourglass;
      invoke(get_div(get_insert($receiver).wraps.div_iw61es$(progressUI$lambda$lambda).node), progressUI$lambda$lambda_0(this$progressUI));
      return Unit;
    };
  }
  function progressUI($receiver) {
    return factory.wraps.div_iw61es$(progressUI$lambda($receiver)).node;
  }
  function Orientation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Orientation_initFields() {
    Orientation_initFields = function () {
    };
    Orientation$Horizontal_instance = new Orientation('Horizontal', 0);
    Orientation$Vertical_instance = new Orientation('Vertical', 1);
  }
  var Orientation$Horizontal_instance;
  function Orientation$Horizontal_getInstance() {
    Orientation_initFields();
    return Orientation$Horizontal_instance;
  }
  var Orientation$Vertical_instance;
  function Orientation$Vertical_getInstance() {
    Orientation_initFields();
    return Orientation$Vertical_instance;
  }
  Orientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Orientation',
    interfaces: [Enum]
  };
  function Orientation$values() {
    return [Orientation$Horizontal_getInstance(), Orientation$Vertical_getInstance()];
  }
  Orientation.values = Orientation$values;
  function Orientation$valueOf(name) {
    switch (name) {
      case 'Horizontal':
        return Orientation$Horizontal_getInstance();
      case 'Vertical':
        return Orientation$Vertical_getInstance();
      default:throwISE('No enum constant commonui.Orientation.' + name);
    }
  }
  Orientation.valueOf_61zpoe$ = Orientation$valueOf;
  function Size(width, height) {
    this.width = width;
    this.height = height;
    this.orientation = this.width >= this.height ? Orientation$Horizontal_getInstance() : Orientation$Vertical_getInstance();
    this.ratio = this.height === 0 ? 1.0 : this.width / this.height;
  }
  Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: []
  };
  Size.prototype.component1 = function () {
    return this.width;
  };
  Size.prototype.component2 = function () {
    return this.height;
  };
  Size.prototype.copy_vux9f0$ = function (width, height) {
    return new Size(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Size.prototype.toString = function () {
    return 'Size(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Size.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Size.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function RootPanel(container, currentRoot) {
    if (currentRoot === void 0)
      currentRoot = KillableSeq_init();
    this.container_8be2vx$ = container;
    this.currentRoot_0 = currentRoot;
    this.subs_0 = emptyList();
    this.killed_0 = false;
    this.kill = RootPanel$kill$lambda(this);
  }
  RootPanel.prototype.killSubs_0 = function () {
    var s = this.subs_0;
    this.subs_0 = emptyList();
    var tmp$;
    tmp$ = s.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element();
    }
  };
  function RootPanel$setRoot$lambda(closure$node) {
    return function () {
      removeFromParent(closure$node);
      return Unit;
    };
  }
  RootPanel.prototype.setRoot_b3w3xb$ = function (node) {
    if (!this.killed_0) {
      this.killSubs_0();
      this.currentRoot_0.set_o14v8n$(RootPanel$setRoot$lambda(node));
      this.container_8be2vx$.appendChild(node);
    }
  };
  function RootPanel$newRoot$lambda($receiver) {
    return Unit;
  }
  function RootPanel$newRoot$lambda_0(this$RootPanel, closure$fn) {
    return function ($receiver) {
      this$RootPanel.setRoot_b3w3xb$($receiver);
      get_flexGrow1(get_cls($receiver));
      closure$fn($receiver);
      return Unit;
    };
  }
  RootPanel.prototype.newRoot_iw61es$ = function (fn) {
    if (fn === void 0)
      fn = RootPanel$newRoot$lambda;
    return column_0(document, RootPanel$newRoot$lambda_0(this, fn));
  };
  RootPanel.prototype.setHourglass = function () {
    var $receiver = get_hourglass(document);
    getCallableRef('setRoot', function ($receiver, node) {
      return $receiver.setRoot_b3w3xb$(node), Unit;
    }.bind(null, this))($receiver);
    return $receiver;
  };
  RootPanel.prototype.sub = function () {
    var s = new RootPanel(this.container_8be2vx$, this.currentRoot_0);
    if (this.killed_0) {
      s.kill();
    }
     else {
      this.subs_0 = plus(this.subs_0, s.kill);
    }
    return s;
  };
  function RootPanel$kill$lambda(this$RootPanel) {
    return function () {
      if (!this$RootPanel.killed_0) {
        this$RootPanel.killed_0 = true;
        this$RootPanel.killSubs_0();
      }
      return Unit;
    };
  }
  RootPanel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RootPanel',
    interfaces: []
  };
  function rxPanel$lambda(closure$rxv, closure$map, closure$fn) {
    return function ($receiver) {
      var $receiver_0 = closure$rxv.invoke();
      var closure$map_0 = closure$map;
      var closure$fn_0 = closure$fn;
      var tmp$;
      var value = closure$map_0.get_11rb$($receiver_0);
      if (value == null) {
        var answer = closure$fn_0($receiver_0);
        closure$map_0.put_xwzc9p$($receiver_0, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function rxPanel$lambda_0(closure$root) {
    return function ($receiver, it) {
      closure$root.setRoot_b3w3xb$(it);
      return Unit;
    };
  }
  function rxPanel$lambda_1(closure$ks) {
    return function () {
      closure$ks.kill();
      return Unit;
    };
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function rxPanel($receiver, rxv, fn) {
    var map = LinkedHashMap_init();
    var ks = new Killables();
    var node = Rx_init(ks.killSet, rxPanel$lambda(rxv, map, fn));
    var root = new RootPanel($receiver);
    node.forEach_aaomyj$(killable.NoKill, rxPanel$lambda_0(root));
    return rxPanel$lambda_1(ks);
  }
  function globalStatus$lambda$lambda($receiver, msg) {
    if (!isBlank(msg))
      console.log(msg);
    return Unit;
  }
  var globalStatus;
  function Coroutine$launchGlobal$lambda(closure$action_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 4;
    this.local$closure$action = closure$action_0;
  }
  Coroutine$launchGlobal$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$launchGlobal$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$launchGlobal$lambda.prototype.constructor = Coroutine$launchGlobal$lambda;
  Coroutine$launchGlobal$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$closure$action(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (Kotlin.isType(e, CancellationException)) {
              throw e;
            }
             else {
              globalStatus.remAssign_11rb$('Error: ' + e.toString());
              reportd(e);
              throw e;
            }

          case 3:
            return;
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
  function launchGlobal$lambda(closure$action_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$launchGlobal$lambda(closure$action_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function launchGlobal(action) {
    launch(coroutines.GlobalScope, void 0, void 0, launchGlobal$lambda(action));
  }
  function ToolBar(element, killables) {
    NodesFactory.call(this, element, killables);
    this.element = element;
    this.left = this.opt_ibb6lz$(invoke(get_div(document), ToolBar$left$lambda));
    this.middle = this.opt_ibb6lz$(invoke(get_div(this.element), ToolBar$middle$lambda));
    this.spinner = this.opt_ibb6lz$(invoke(get_div(this.element), ToolBar$spinner$lambda));
    this.tabs = this.opt_ibb6lz$(invoke(get_div(this.element), ToolBar$tabs$lambda));
    this.right = this.opt_ibb6lz$(invoke(get_div(this.element), ToolBar$right$lambda), ToolBar$right$lambda_0(this));
  }
  function ToolBar$leftButton$lambda(closure$fn) {
    return function ($receiver) {
      get_btnSecondary(get_cls($receiver));
      closure$fn($receiver);
      return Unit;
    };
  }
  ToolBar.prototype.leftButton_3uqggf$ = function (fn) {
    return btnButton(this.left.node, ToolBar$leftButton$lambda(fn));
  };
  function ToolBar$backButton$lambda$lambda(closure$fn) {
    return function (it) {
      closure$fn();
      return Unit;
    };
  }
  function ToolBar$backButton$lambda(closure$fn) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      clickEvent($receiver, ToolBar$backButton$lambda$lambda(closure$fn));
      faButtonSpan($receiver, get_chevronLeft(Fa.Companion));
      return Unit;
    };
  }
  ToolBar.prototype.backButton_o14v8n$ = function (fn) {
    return this.leftButton_3uqggf$(ToolBar$backButton$lambda(fn));
  };
  function ToolBar$middleTitle$lambda($receiver) {
    flexAlignItemsCenter($receiver);
    return Unit;
  }
  function ToolBar$middleTitle$lambda_0(closure$fn) {
    return function ($receiver) {
      get_m2(get_cls($receiver));
      closure$fn($receiver);
      return Unit;
    };
  }
  ToolBar.prototype.middleTitle_9f50g3$ = function (fn) {
    return invoke(get_h5(this.middle.invoke_gk6m2q$(ToolBar$middleTitle$lambda)), ToolBar$middleTitle$lambda_0(fn));
  };
  function ToolBar$left$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_dFlex($receiver_0);
    flexFixedSize($receiver_0);
    return Unit;
  }
  function ToolBar$middle$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_dFlex($receiver_0);
    get_flexGrow1($receiver_0);
    return Unit;
  }
  function ToolBar$spinner$lambda$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    get_spinnerBorder($receiver_0);
    get_spinnerBorderSm($receiver_0);
    return Unit;
  }
  function ToolBar$spinner$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_dFlex($receiver_0);
    get_flexRow($receiver_0);
    get_alignItemsCenter($receiver_0);
    invoke(get_div($receiver), ToolBar$spinner$lambda$lambda);
    return Unit;
  }
  function ToolBar$tabs$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_dFlex($receiver_0);
    get_flexRow($receiver_0);
    return Unit;
  }
  function ToolBar$right$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_dFlex($receiver_0);
    flexFixedSize($receiver_0);
    return Unit;
  }
  function ToolBar$right$lambda_0(this$ToolBar) {
    return function () {
      this$ToolBar.middle.node;
      return Unit;
    };
  }
  ToolBar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToolBar',
    interfaces: [NodesFactory]
  };
  function ToolBar_init(node, killables, $this) {
    $this = $this || Object.create(ToolBar.prototype);
    ToolBar.call($this, row_0(node, ToolBar_init$lambda), killables);
    return $this;
  }
  function ToolBar_init$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_navTabs($receiver_0);
    flexFixedSize($receiver_0);
    get_bgLight($receiver_0);
    return Unit;
  }
  function NodesFactory(parent, killables) {
    this.parent_4xa7e$_0 = parent;
    this.killables_b2mpvp$_0 = killables;
    this.latest_chjw6l$_0 = null;
  }
  function NodesFactory$vis$lambda() {
    return Unit;
  }
  NodesFactory.prototype.vis_xxs8av$ = function ($receiver, rxv, first) {
    if (first === void 0)
      first = NodesFactory$vis$lambda;
    var $receiver_0 = new NodeHolder($receiver, this.parent_4xa7e$_0, this.latest_chjw6l$_0, new Var(rxv), first, this.killables_b2mpvp$_0);
    this.latest_chjw6l$_0 = $receiver_0;
    return $receiver_0;
  };
  function NodesFactory$vis$lambda_0() {
    return true;
  }
  function NodesFactory$vis$lambda_1(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  NodesFactory.prototype.vis_e7p61z$ = function ($receiver, fn) {
    if (fn === void 0)
      fn = NodesFactory$vis$lambda_0;
    return this.vis_xxs8av$($receiver, Rx_init(this.killables_b2mpvp$_0, NodesFactory$vis$lambda_1(fn)));
  };
  function NodesFactory$opt$lambda() {
    return Unit;
  }
  function NodesFactory$opt$lambda_0(closure$first, closure$rxv) {
    return function () {
      closure$first();
      closure$rxv.now = true;
      return Unit;
    };
  }
  NodesFactory.prototype.opt_ibb6lz$ = function ($receiver, first) {
    if (first === void 0)
      first = NodesFactory$opt$lambda;
    var rxv = new Var(false);
    return this.vis_xxs8av$($receiver, rxv, NodesFactory$opt$lambda_0(first, rxv));
  };
  NodesFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodesFactory',
    interfaces: []
  };
  function insertAfter($receiver, what, afterWhat) {
    $receiver.insertBefore(what, afterWhat == null ? $receiver.firstChild : afterWhat.nextSibling);
  }
  function NodeHolder(wrapped, parent, previous, visibility, first, killables) {
    NodeHolder$Companion_getInstance();
    this.wrapped_8be2vx$ = wrapped;
    this.parent_0 = parent;
    this.previous_0 = previous;
    this.visibility = visibility;
    this.node_3i5zg9$_0 = lazy(NodeHolder$node$lambda(first, this));
    this.visible = Rx_init(killables, NodeHolder$visible$lambda(this));
    this.lastVisible_0 = NodeHolder$Companion_getInstance().NullNode_0;
    var tmp$, tmp$_0;
    if (this.previous_0 == null) {
      tmp$ = NodeHolder$insertAfterProvider$lambda;
    }
     else {
      tmp$ = NodeHolder$insertAfterProvider$lambda_0(this);
    }
    this.insertAfterProvider_0 = tmp$;
    this.visibleInsertBefore_0 = lazyOf(this.wrapped_8be2vx$);
    if (this.previous_0 == null) {
      tmp$_0 = NodeHolder$previousLastVisible$lambda;
    }
     else {
      tmp$_0 = NodeHolder$previousLastVisible$lambda_0(this);
    }
    this.previousLastVisible_0 = tmp$_0;
    this.visible.forEach_aaomyj$(killable.NoKill, NodeHolder_init$lambda(this));
  }
  Object.defineProperty(NodeHolder.prototype, 'node', {
    get: function () {
      return this.node_3i5zg9$_0.value;
    }
  });
  NodeHolder.prototype.invoke_gk6m2q$ = function (fn) {
    var $receiver = this.node;
    fn($receiver);
    return $receiver;
  };
  function NodeHolder$Companion() {
    NodeHolder$Companion_instance = this;
    this.NullNode_0 = lazyOf(null);
  }
  NodeHolder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NodeHolder$Companion_instance = null;
  function NodeHolder$Companion_getInstance() {
    if (NodeHolder$Companion_instance === null) {
      new NodeHolder$Companion();
    }
    return NodeHolder$Companion_instance;
  }
  NodeHolder.prototype.insert_0 = function () {
    insertAfter(this.parent_0, this.wrapped_8be2vx$, this.insertAfterProvider_0());
  };
  function NodeHolder$node$lambda(closure$first, this$NodeHolder) {
    return function () {
      closure$first();
      return this$NodeHolder.wrapped_8be2vx$;
    };
  }
  function NodeHolder$visible$lambda(this$NodeHolder) {
    return function ($receiver) {
      return this$NodeHolder.visibility.invoke().invoke();
    };
  }
  function NodeHolder$insertAfterProvider$lambda() {
    return null;
  }
  function NodeHolder$insertAfterProvider$lambda_0(this$NodeHolder) {
    return function () {
      return this$NodeHolder.previous_0.lastVisible_0.value;
    };
  }
  function NodeHolder$previousLastVisible$lambda() {
    return NodeHolder$Companion_getInstance().NullNode_0;
  }
  function NodeHolder$previousLastVisible$lambda$lambda(this$NodeHolder) {
    return function () {
      return this$NodeHolder.previous_0.lastVisible_0.value;
    };
  }
  function NodeHolder$previousLastVisible$lambda_0(this$NodeHolder) {
    return function () {
      return lazy(NodeHolder$previousLastVisible$lambda$lambda(this$NodeHolder));
    };
  }
  function NodeHolder_init$lambda(this$NodeHolder) {
    return function ($receiver, v) {
      var tmp$;
      if (v) {
        this$NodeHolder.insert_0();
        tmp$ = this$NodeHolder.visibleInsertBefore_0;
      }
       else {
        removeFromParent(this$NodeHolder.wrapped_8be2vx$);
        tmp$ = this$NodeHolder.previousLastVisible_0();
      }
      this$NodeHolder.lastVisible_0 = tmp$;
      return Unit;
    };
  }
  NodeHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeHolder',
    interfaces: []
  };
  function nodes($receiver, killables, fn) {
    fn(new NodesFactory($receiver, killables));
  }
  function get_topbarP1$lambda($receiver) {
    get_p1(get_cls($receiver));
    return Unit;
  }
  function get_topbarP1($receiver) {
    return invoke(get_topbar($receiver), get_topbarP1$lambda);
  }
  function get_topbar$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_navTabs($receiver_0);
    flexFixedSize($receiver_0);
    get_bgLight($receiver_0);
    return Unit;
  }
  function get_topbar($receiver) {
    return row_0($receiver, get_topbar$lambda);
  }
  function toolbar$lambda($receiver) {
    return Unit;
  }
  function toolbar($receiver, killables, fn) {
    if (fn === void 0)
      fn = toolbar$lambda;
    var $receiver_0 = ToolBar_init($receiver, killables);
    fn($receiver_0);
    return $receiver_0;
  }
  function topbar$lambda($receiver) {
    return Unit;
  }
  function topbar($receiver, killables, fn) {
    if (fn === void 0)
      fn = topbar$lambda;
    var $receiver_0 = toolbar($receiver, killables, fn);
    borderBottom($receiver_0.element);
    return $receiver_0;
  }
  function ScreenLayout(element, killables) {
    this.element = element;
    invoke(this.element, ScreenLayout_init$lambda);
    this.top_2j5p02$_0 = lazy(ScreenLayout$top$lambda(killables, this));
    this.main_7kw2y0$_0 = lazy(ScreenLayout$main$lambda(this));
  }
  Object.defineProperty(ScreenLayout.prototype, 'top', {
    get: function () {
      return this.top_2j5p02$_0.value;
    }
  });
  ScreenLayout.prototype.top_vesf63$ = function (fn) {
    var $receiver = this.top;
    fn($receiver);
    return $receiver;
  };
  Object.defineProperty(ScreenLayout.prototype, 'main', {
    get: function () {
      return this.main_7kw2y0$_0.value;
    }
  });
  function ScreenLayout_init$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_dFlex($receiver_0);
    get_flexColumn($receiver_0);
    return Unit;
  }
  function ScreenLayout$top$lambda(closure$killables, this$ScreenLayout) {
    return function () {
      var $receiver = topbar(document, closure$killables);
      insertAt_0(this$ScreenLayout.element, 0, $receiver.element);
      return $receiver;
    };
  }
  function ScreenLayout$main$lambda$lambda($receiver) {
    get_flexGrow1(get_cls($receiver));
    return Unit;
  }
  function ScreenLayout$main$lambda(this$ScreenLayout) {
    return function () {
      return invoke(get_div(this$ScreenLayout.element), ScreenLayout$main$lambda$lambda);
    };
  }
  ScreenLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenLayout',
    interfaces: []
  };
  function screenLayout$lambda($receiver) {
    return Unit;
  }
  function screenLayout($receiver, killables, fn) {
    if (fn === void 0)
      fn = screenLayout$lambda;
    var $receiver_0 = new ScreenLayout($receiver, killables);
    fn($receiver_0);
    return $receiver_0;
  }
  function faTab$lambda$lambda$lambda(closure$faIcon) {
    return function ($receiver) {
      get_fw(get_fa(get_cls($receiver)));
      get_classes($receiver).plusAssign_pdl1vj$(closure$faIcon);
      return Unit;
    };
  }
  function faTab$lambda$lambda(closure$ks, closure$act, closure$faIcon, closure$fn) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      var closure$ks_0 = closure$ks;
      var closure$act_0 = closure$act;
      get_navLink($receiver_0);
      get_px2($receiver_0);
      rxClass($receiver, closure$ks_0, get_active($receiver_0), closure$act_0);
      invoke(get_span($receiver), faTab$lambda$lambda$lambda(closure$faIcon));
      $receiver.href = '#';
      closure$fn($receiver);
      return Unit;
    };
  }
  function faTab$lambda(closure$ks, closure$act, closure$faIcon, closure$fn) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_mt1($receiver_0);
      get_navItem($receiver_0);
      get_dFlex($receiver_0);
      invoke(get_a($receiver), faTab$lambda$lambda(closure$ks, closure$act, closure$faIcon, closure$fn));
      return Unit;
    };
  }
  function faTab($receiver, ks, faIcon, act, fn) {
    invoke(get_div($receiver), faTab$lambda(ks, act, faIcon, fn));
  }
  function ProgressTC(parent) {
    UIBase_init(parent, this);
    this.rawView_5taeav$_0 = new TopAndContent(null, progressUI(this));
  }
  Object.defineProperty(ProgressTC.prototype, 'rawView', {
    get: function () {
      return this.rawView_5taeav$_0;
    }
  });
  ProgressTC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgressTC',
    interfaces: [UIBase]
  };
  var UnknownUserSrc;
  function Bind(inbox) {
    InboxWrap.call(this, inbox);
    this.imageUrl = new Var(UnknownUserSrc);
  }
  Bind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bind',
    interfaces: [InboxWrap]
  };
  function UI(kills, slot, bind) {
    return userIcon(slot, kills, bind.imageUrl);
  }
  function userIcon$lambda$lambda($receiver) {
    get_fw(get_fa(get_cls($receiver)));
    return Unit;
  }
  function userIcon$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver, it) {
      this$.src = it;
      return Unit;
    };
  }
  function userIcon$lambda$lambda$lambda(closure$imageUrl, closure$kills) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_border($receiver_0);
      get_rounded($receiver_0);
      get_w100($receiver_0);
      get_h100($receiver_0);
      get_objectFitCover($receiver_0);
      closure$imageUrl.forEach_aaomyj$(closure$kills, userIcon$lambda$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function userIcon$lambda$lambda_0(closure$imageUrl, closure$kills) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_positionAbsolute($receiver_0);
      get_leftRightTopBottom0($receiver_0);
      invoke(get_img($receiver), userIcon$lambda$lambda$lambda(closure$imageUrl, closure$kills));
      return Unit;
    };
  }
  function userIcon$lambda(closure$imageUrl, closure$kills) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      get_p2($receiver_0);
      get_positionRelative($receiver_0);
      invoke(get_span($receiver), userIcon$lambda$lambda);
      invoke(get_div($receiver), userIcon$lambda$lambda_0(closure$imageUrl, closure$kills));
      return Unit;
    };
  }
  function userIcon($receiver, kills, imageUrl) {
    return $receiver.wraps.div_iw61es$(userIcon$lambda(imageUrl, kills));
  }
  function Badge() {
    ScreenWrap.call(this);
    this.node_sa2hpu$_0 = invoke(get_span(document), Badge$node$lambda);
    this.primary_g52j5q$_0 = lazy(Badge$primary$lambda(this));
    this.warning_rc7kkc$_0 = lazy(Badge$warning$lambda(this));
    this.pill_sb2f2z$_0 = lazy(Badge$pill$lambda(this));
  }
  Object.defineProperty(Badge.prototype, 'node', {
    get: function () {
      return this.node_sa2hpu$_0;
    }
  });
  Object.defineProperty(Badge.prototype, 'primary', {
    get: function () {
      return this.primary_g52j5q$_0.value;
    }
  });
  Object.defineProperty(Badge.prototype, 'warning', {
    get: function () {
      return this.warning_rc7kkc$_0.value;
    }
  });
  Object.defineProperty(Badge.prototype, 'pill', {
    get: function () {
      return this.pill_sb2f2z$_0.value;
    }
  });
  function Badge$node$lambda($receiver) {
    get_badge(get_cls($receiver));
    return Unit;
  }
  function Badge$primary$lambda(this$Badge) {
    return function () {
      return get_badgePrimary(this$Badge.cls);
    };
  }
  function Badge$warning$lambda(this$Badge) {
    return function () {
      return get_badgeWarning(this$Badge.cls);
    };
  }
  function Badge$pill$lambda(this$Badge) {
    return function () {
      return get_badgePill(this$Badge.cls);
    };
  }
  Badge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Badge',
    interfaces: [ScreenWrap]
  };
  function BodyPath() {
  }
  BodyPath.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BodyPath',
    interfaces: []
  };
  function Body(slot) {
    if (slot === void 0) {
      setupFullScreen();
      slot = get_hole(ensureNotNull(document.body));
    }
    JobKillsImpl.call(this);
    this.body_kitg49$_0 = this;
    this.content = JobSwitch$Companion_getInstance().jobWithView_nnsuum$(ItemWithViewRx$Companion_getInstance().hasView_tmlb55$(new Progress(this)));
    runView(this.content, this, slot);
  }
  Object.defineProperty(Body.prototype, 'body', {
    get: function () {
      return this.body_kitg49$_0;
    }
  });
  Body.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Body',
    interfaces: [BodyPath, JobKillsImpl]
  };
  function Button() {
    ScreenWrap.call(this);
    this.node_qgr1wp$_0 = invoke(get_button(document), Button$node$lambda);
    this.slots_0 = new Button$slots$ObjectLiteral(this);
    this.p2_5qk2vr$_0 = lazy(Button$p2$lambda(this));
    this.m1_5qk0mt$_0 = lazy(Button$m1$lambda(this));
    this.m1p2_qie80d$_0 = lazy(Button$m1p2$lambda(this));
    this.primary_n49j47$_0 = lazy(Button$primary$lambda(this));
    this.secondary_r3md15$_0 = lazy(Button$secondary$lambda(this));
    this.warning_4fkf4v$_0 = lazy(Button$warning$lambda(this));
    this.danger_fanju2$_0 = lazy(Button$danger$lambda(this));
    this.icon_qjpgcg$_0 = lazy(Button$icon$lambda(this));
    this.fa_5qjwla$_0 = lazy(Button$fa$lambda(this));
    this.text_qdm910$_0 = lazy(Button$text$lambda(this));
    this.back_qnljfy$_0 = lazy(Button$back$lambda(this));
  }
  Object.defineProperty(Button.prototype, 'node', {
    get: function () {
      return this.node_qgr1wp$_0;
    }
  });
  Object.defineProperty(Button.prototype, 'p2', {
    get: function () {
      return this.p2_5qk2vr$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'm1', {
    get: function () {
      return this.m1_5qk0mt$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'm1p2', {
    get: function () {
      return this.m1p2_qie80d$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'primary', {
    get: function () {
      return this.primary_n49j47$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'secondary', {
    get: function () {
      return this.secondary_r3md15$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'warning', {
    get: function () {
      return this.warning_4fkf4v$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'danger', {
    get: function () {
      return this.danger_fanju2$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'submit', {
    get: function () {
      this.node.type = 'submit';
    }
  });
  Object.defineProperty(Button.prototype, 'icon', {
    get: function () {
      return this.icon_qjpgcg$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'fa', {
    get: function () {
      return this.fa_5qjwla$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'text', {
    get: function () {
      return this.text_qdm910$_0.value;
    }
  });
  Object.defineProperty(Button.prototype, 'back', {
    get: function () {
      return this.back_qnljfy$_0.value;
    }
  });
  Button.prototype.enabled_lcj72s$ = function (deps, fn) {
    rxEnabled(this.node, deps, fn);
  };
  function Button$node$lambda($receiver) {
    get_btn(get_cls($receiver));
    return Unit;
  }
  function Button$slots$ObjectLiteral(this$Button) {
    this.icon = this$Button.slot;
    this.text = this$Button.slot;
  }
  Button$slots$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Button$p2$lambda(this$Button) {
    return function () {
      return get_p2(this$Button.cls);
    };
  }
  function Button$m1$lambda(this$Button) {
    return function () {
      return get_m1(this$Button.cls);
    };
  }
  function Button$m1p2$lambda(this$Button) {
    return function () {
      this$Button.m1;
      return this$Button.p2;
    };
  }
  function Button$primary$lambda(this$Button) {
    return function () {
      return get_btnPrimary(this$Button.cls);
    };
  }
  function Button$secondary$lambda(this$Button) {
    return function () {
      return get_btnSecondary(this$Button.cls);
    };
  }
  function Button$warning$lambda(this$Button) {
    return function () {
      return get_btnWarning(this$Button.cls);
    };
  }
  function Button$danger$lambda(this$Button) {
    return function () {
      return get_btnDanger(this$Button.cls);
    };
  }
  function Button$icon$lambda(this$Button) {
    return function () {
      return setTo_1(get_span(document), this$Button.slots_0.icon);
    };
  }
  function Button$fa$lambda(this$Button) {
    return function () {
      var $receiver = get_fa(get_cls(this$Button.icon));
      get_fw($receiver);
      return $receiver;
    };
  }
  function Button$text$lambda(this$Button) {
    return function () {
      return setTo_1(get_span(document), this$Button.slots_0.text);
    };
  }
  function Button$back$lambda(this$Button) {
    return function () {
      this$Button.m1p2;
      get_chevronLeft(this$Button.fa);
      return this$Button.secondary;
    };
  }
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [ScreenWrap]
  };
  function ButtonGroup() {
    ScreenWrap.call(this);
    this.node_5v6t30$_0 = invoke(get_div(document), ButtonGroup$node$lambda);
    this.m1_u8ir2y$_0 = lazy(ButtonGroup$m1$lambda(this));
    this.slots = new ButtonGroup$Slots(this);
    this.dropdownSplit_rkil1p$_0 = lazy(ButtonGroup$dropdownSplit$lambda(this));
    this.menu_5uguf3$_0 = lazy(ButtonGroup$menu$lambda(this));
  }
  Object.defineProperty(ButtonGroup.prototype, 'node', {
    get: function () {
      return this.node_5v6t30$_0;
    }
  });
  Object.defineProperty(ButtonGroup.prototype, 'm1', {
    get: function () {
      return this.m1_u8ir2y$_0.value;
    }
  });
  function ButtonGroup$Slots($outer) {
    this.$outer = $outer;
    this.buttons = get_slots(this.$outer.node);
    this.split = this.$outer.slot;
    this.menu = this.$outer.slot;
  }
  ButtonGroup$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(ButtonGroup.prototype, 'button', {
    get: function () {
      return get_insert_0(this.slots.buttons.slot).button;
    }
  });
  Object.defineProperty(ButtonGroup.prototype, 'dropdownSplit', {
    get: function () {
      return this.dropdownSplit_rkil1p$_0.value;
    }
  });
  Object.defineProperty(ButtonGroup.prototype, 'menu', {
    get: function () {
      return this.menu_5uguf3$_0.value;
    }
  });
  function ButtonGroup$node$lambda($receiver) {
    get_btnGroup(get_cls($receiver));
    return Unit;
  }
  function ButtonGroup$m1$lambda(this$ButtonGroup) {
    return function () {
      return get_m1(this$ButtonGroup.cls);
    };
  }
  function ButtonGroup$dropdownSplit$lambda$lambda$lambda($receiver) {
    dataToggleDropdown($receiver);
    dataReferenceParent($receiver);
    return Unit;
  }
  function ButtonGroup$dropdownSplit$lambda(this$ButtonGroup) {
    return function () {
      var $receiver = get_insert_0(this$ButtonGroup.slots.split).button;
      invoke($receiver.node, ButtonGroup$dropdownSplit$lambda$lambda$lambda);
      var $receiver_0 = $receiver.cls;
      get_dropdownToggle($receiver_0);
      get_dropdownToggleSplit($receiver_0);
      return $receiver;
    };
  }
  function ButtonGroup$menu$lambda(this$ButtonGroup) {
    return function () {
      return get_insert_0(this$ButtonGroup.slots.menu).dropdownMenu;
    };
  }
  ButtonGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ButtonGroup',
    interfaces: [ScreenWrap]
  };
  function Text(parent) {
    this.node = get_span(parent);
    this.cls = get_cls(this.node);
  }
  Text.prototype.remAssign_61zpoe$ = function (v) {
    remAssign(this.node, v);
  };
  Text.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Text',
    interfaces: [InvokeApply]
  };
  function Icon(parent) {
    this.node = get_span(parent);
    this.fa_8p07d1$_0 = lazy(Icon$fa$lambda(this));
    this.fw_8p07vz$_0 = lazy(Icon$fw$lambda(this));
  }
  Object.defineProperty(Icon.prototype, 'fa', {
    get: function () {
      return this.fa_8p07d1$_0.value;
    }
  });
  Object.defineProperty(Icon.prototype, 'fw', {
    get: function () {
      return this.fw_8p07vz$_0.value;
    }
  });
  function Icon$fa$lambda(this$Icon) {
    return function () {
      return get_fa(get_cls(this$Icon.node));
    };
  }
  function Icon$fw$lambda(this$Icon) {
    return function () {
      return get_fw(this$Icon.fa);
    };
  }
  Icon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Icon',
    interfaces: [InvokeApply]
  };
  function DropdownMenuItem() {
    ScreenWrap.call(this);
    this.node_eadcrc$_0 = invoke(get_a(document), DropdownMenuItem$node$lambda);
    var $receiver = new Icon(this.node);
    get_m1(get_cls($receiver.node));
    get_fw($receiver.fa);
    this.icon = $receiver;
    this.fa = this.icon.fa;
    var $receiver_0 = new Text(this.node);
    get_m1(get_cls($receiver_0.node));
    this.text = $receiver_0;
  }
  Object.defineProperty(DropdownMenuItem.prototype, 'node', {
    get: function () {
      return this.node_eadcrc$_0;
    }
  });
  function DropdownMenuItem$node$lambda($receiver) {
    $receiver.href = '#';
    var $receiver_0 = get_cls($receiver);
    get_dropdownItem($receiver_0);
    get_p1($receiver_0);
    return Unit;
  }
  DropdownMenuItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DropdownMenuItem',
    interfaces: [ScreenWrap]
  };
  function DropdownMenu() {
    ScreenWrap.call(this);
    this.node_st4qlx$_0 = invoke(get_div(document), DropdownMenu$node$lambda);
    this.right_sig267$_0 = lazy(DropdownMenu$right$lambda(this));
  }
  Object.defineProperty(DropdownMenu.prototype, 'node', {
    get: function () {
      return this.node_st4qlx$_0;
    }
  });
  Object.defineProperty(DropdownMenu.prototype, 'right', {
    get: function () {
      return this.right_sig267$_0.value;
    }
  });
  Object.defineProperty(DropdownMenu.prototype, 'item', {
    get: function () {
      return this.get_append_eqx477$(new DropdownMenuItem());
    }
  });
  function DropdownMenu$get_DropdownMenu$divider$lambda($receiver) {
    get_dropdownDivider(get_cls($receiver));
    return Unit;
  }
  Object.defineProperty(DropdownMenu.prototype, 'divider', {
    get: function () {
      return invoke(get_div(this.node), DropdownMenu$get_DropdownMenu$divider$lambda);
    }
  });
  DropdownMenu.prototype.signOut_4mlwwe$ = function (deps, action) {
    var $receiver = this.item;
    $receiver.text.remAssign_61zpoe$('Sign Out');
    get_signOutAlt($receiver.fa);
    click_1($receiver, deps, action);
    return $receiver;
  };
  function DropdownMenu$node$lambda($receiver) {
    get_dropdownMenu(get_cls($receiver));
    return Unit;
  }
  function DropdownMenu$right$lambda(this$DropdownMenu) {
    return function () {
      return get_dropdownMenuRight(this$DropdownMenu.cls);
    };
  }
  DropdownMenu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DropdownMenu',
    interfaces: [ScreenWrap]
  };
  function Dropdown() {
    ScreenWrap.call(this);
    this.node_kpvma2$_0 = invoke(get_div(document), Dropdown$node$lambda);
    var $receiver = get_insert_1(this.hole).button;
    dataToggleDropdown($receiver.node);
    this.button = $receiver;
    this.bars_kwpsi0$_0 = lazy(Dropdown$bars$lambda(this));
    this.right_179y8w$_0 = lazy(Dropdown$right$lambda(this));
    this.menu = this.get_append_eqx477$(new DropdownMenu());
  }
  Object.defineProperty(Dropdown.prototype, 'node', {
    get: function () {
      return this.node_kpvma2$_0;
    }
  });
  Object.defineProperty(Dropdown.prototype, 'bars', {
    get: function () {
      return this.bars_kwpsi0$_0.value;
    }
  });
  Object.defineProperty(Dropdown.prototype, 'right', {
    get: function () {
      return this.right_179y8w$_0.value;
    }
  });
  function Dropdown$node$lambda($receiver) {
    get_dropdown(get_cls($receiver));
    return Unit;
  }
  function Dropdown$bars$lambda(this$Dropdown) {
    return function () {
      var $receiver = this$Dropdown.button;
      $receiver.m1p2;
      $receiver.secondary;
      get_bars($receiver.fa);
      return $receiver;
    };
  }
  function Dropdown$right$lambda(this$Dropdown) {
    return function () {
      return this$Dropdown.menu.right;
    };
  }
  Dropdown.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Dropdown',
    interfaces: [ScreenWrap]
  };
  function FactoryAfter(element, wrap) {
    if (element === void 0)
      element = FactoryAfter_init$lambda;
    if (wrap === void 0)
      wrap = FactoryAfter_init$lambda_0;
    this.element = element;
    this.wrap = wrap;
  }
  function FactoryAfter$withElement$lambda(this$FactoryAfter, closure$fn) {
    return function ($receiver) {
      this$FactoryAfter.element($receiver);
      closure$fn($receiver);
      return Unit;
    };
  }
  FactoryAfter.prototype.withElement_lx79ro$ = function (fn) {
    return this.copy_pxeck2$(FactoryAfter$withElement$lambda(this, fn));
  };
  function FactoryAfter$withWrap$lambda(this$FactoryAfter, closure$fn) {
    return function ($receiver) {
      this$FactoryAfter.wrap($receiver);
      closure$fn($receiver);
      return Unit;
    };
  }
  FactoryAfter.prototype.withWrap_65fazq$ = function (fn) {
    return this.copy_pxeck2$(void 0, FactoryAfter$withWrap$lambda(this, fn));
  };
  function FactoryAfter_init$lambda($receiver) {
    return Unit;
  }
  function FactoryAfter_init$lambda_0($receiver) {
    return Unit;
  }
  FactoryAfter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FactoryAfter',
    interfaces: []
  };
  FactoryAfter.prototype.component1 = function () {
    return this.element;
  };
  FactoryAfter.prototype.component2 = function () {
    return this.wrap;
  };
  FactoryAfter.prototype.copy_pxeck2$ = function (element, wrap) {
    return new FactoryAfter(element === void 0 ? this.element : element, wrap === void 0 ? this.wrap : wrap);
  };
  FactoryAfter.prototype.toString = function () {
    return 'FactoryAfter(element=' + Kotlin.toString(this.element) + (', wrap=' + Kotlin.toString(this.wrap)) + ')';
  };
  FactoryAfter.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.element) | 0;
    result = result * 31 + Kotlin.hashCode(this.wrap) | 0;
    return result;
  };
  FactoryAfter.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.element, other.element) && Kotlin.equals(this.wrap, other.wrap)))));
  };
  var factory;
  function Factory(after) {
    if (after === void 0)
      after = new FactoryAfter();
    this.after_0 = after;
    this.wraps = new Factory$Wraps(this);
  }
  Factory.prototype.with_lx79ro$ = function (fn) {
    return new Factory(this.after_0.withElement_lx79ro$(fn));
  };
  function Factory$with$lambda(this$Factory, closure$fn) {
    return function ($receiver) {
      this$Factory.after_0.element($receiver);
      if ($receiver != null)
        closure$fn($receiver);
      return Unit;
    };
  }
  Factory.prototype.with_9f50g3$ = function (fn) {
    return new Factory(this.after_0.withElement_lx79ro$(Factory$with$lambda(this, fn)));
  };
  Factory.prototype.withWrap_65fazq$ = function (fn) {
    return new Factory(this.after_0.withWrap_65fazq$(fn));
  };
  Factory.prototype.get_wrapped_gzcdlp$ = function ($receiver) {
    return new HTMLElementWrap($receiver);
  };
  Factory.prototype.get_applied_fyb8v2$ = function ($receiver) {
    this.after_0.element($receiver.node);
    this.after_0.wrap($receiver);
    return $receiver;
  };
  Factory.prototype.get_applied_gzcdlp$ = function ($receiver) {
    this.get_applied_fyb8v2$(this.get_wrapped_gzcdlp$($receiver));
    return $receiver;
  };
  function Factory$Wraps($outer) {
    this.$outer = $outer;
  }
  Object.defineProperty(Factory$Wraps.prototype, 'div', {
    get: function () {
      return this.$outer.get_applied_gzcdlp$(get_div(document));
    }
  });
  Factory$Wraps.prototype.div_iw61es$ = function (fn) {
    var tmp$ = this.$outer;
    var tmp$_0 = this.$outer;
    var $receiver = get_div(document);
    fn($receiver);
    return tmp$.get_applied_fyb8v2$(tmp$_0.get_wrapped_gzcdlp$($receiver));
  };
  Object.defineProperty(Factory$Wraps.prototype, 'span', {
    get: function () {
      return this.$outer.get_applied_fyb8v2$(this.$outer.get_wrapped_gzcdlp$(get_span(document)));
    }
  });
  Factory$Wraps.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wraps',
    interfaces: []
  };
  Object.defineProperty(Factory.prototype, 'screen', {
    get: function () {
      return this.get_applied_fyb8v2$(new Screen());
    }
  });
  Object.defineProperty(Factory.prototype, 'dropdown', {
    get: function () {
      return this.get_applied_fyb8v2$(new Dropdown());
    }
  });
  Object.defineProperty(Factory.prototype, 'dropdownMenu', {
    get: function () {
      return this.get_applied_fyb8v2$(new DropdownMenu());
    }
  });
  Object.defineProperty(Factory.prototype, 'topbar', {
    get: function () {
      return this.get_applied_fyb8v2$(new Topbar());
    }
  });
  Object.defineProperty(Factory.prototype, 'button', {
    get: function () {
      return this.get_applied_fyb8v2$(new Button());
    }
  });
  Object.defineProperty(Factory.prototype, 'buttonGroup', {
    get: function () {
      return this.get_applied_fyb8v2$(new ButtonGroup());
    }
  });
  Object.defineProperty(Factory.prototype, 'scrollPane', {
    get: function () {
      return this.get_applied_fyb8v2$(new ScrollPane());
    }
  });
  Object.defineProperty(Factory.prototype, 'hourglass', {
    get: function () {
      return this.get_applied_fyb8v2$(new Hourglass());
    }
  });
  Object.defineProperty(Factory.prototype, 'stack', {
    get: function () {
      return this.get_applied_fyb8v2$(new Stack());
    }
  });
  Object.defineProperty(Factory.prototype, 'toasts', {
    get: function () {
      return this.get_applied_fyb8v2$(new Toasts());
    }
  });
  Object.defineProperty(Factory.prototype, 'badge', {
    get: function () {
      return this.get_applied_fyb8v2$(new Badge());
    }
  });
  Object.defineProperty(Factory.prototype, 'status', {
    get: function () {
      return this.get_applied_fyb8v2$(new Status());
    }
  });
  Object.defineProperty(Factory.prototype, 'input', {
    get: function () {
      return this.get_applied_fyb8v2$(new Input());
    }
  });
  Object.defineProperty(Factory.prototype, 'formGroup', {
    get: function () {
      return this.get_applied_fyb8v2$(new FormGroup());
    }
  });
  Object.defineProperty(Factory.prototype, 'form', {
    get: function () {
      return this.get_applied_fyb8v2$(new Form());
    }
  });
  Object.defineProperty(Factory.prototype, 'inputGroup', {
    get: function () {
      return this.get_applied_fyb8v2$(new InputGroup());
    }
  });
  Object.defineProperty(Factory.prototype, 'listGroup', {
    get: function () {
      return this.get_applied_fyb8v2$(new ListGroup());
    }
  });
  Object.defineProperty(Factory.prototype, 'listGroupButton', {
    get: function () {
      return this.get_applied_fyb8v2$(new ListGroupButton());
    }
  });
  Factory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Factory',
    interfaces: [InvokeApply]
  };
  function HTMLElementWrap(node) {
    ScreenWrap.call(this);
    this.node_fw7geu$_0 = node;
  }
  Object.defineProperty(HTMLElementWrap.prototype, 'node', {
    get: function () {
      return this.node_fw7geu$_0;
    }
  });
  HTMLElementWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HTMLElementWrap',
    interfaces: [ScreenWrap]
  };
  function SlotVar(node) {
    if (node === void 0)
      node = null;
    this.node = node;
    this.slot = SlotVar$slot$lambda(this);
  }
  function SlotVar$slot$lambda(this$SlotVar) {
    return function (it) {
      this$SlotVar.node = it;
      return Unit;
    };
  }
  SlotVar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotVar',
    interfaces: []
  };
  function ScreenWrap() {
    this.target = new Var(null);
  }
  function ScreenWrap$visible$lambda$lambda$lambda(closure$fn, this$, this$ScreenWrap) {
    return function () {
      return closure$fn(this$) ? this$ScreenWrap.node : null;
    };
  }
  function ScreenWrap$visible$lambda(this$ScreenWrap, closure$fn) {
    return function ($receiver) {
      var tmp$;
      var tmp$_0;
      if ((tmp$ = this$ScreenWrap.target.invoke()) != null) {
        rx_1(tmp$, $receiver, ScreenWrap$visible$lambda$lambda$lambda(closure$fn, $receiver, this$ScreenWrap));
        tmp$_0 = Unit;
      }
       else
        tmp$_0 = null;
      return tmp$_0;
    };
  }
  ScreenWrap.prototype.visible_kyamjc$ = function ($receiver, fn) {
    $receiver.rx_y6x17j$(ScreenWrap$visible$lambda(this, fn));
  };
  ScreenWrap.prototype.get_append_eqx477$ = function ($receiver) {
    get_widget(this.node)($receiver.node);
    return $receiver;
  };
  ScreenWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScreenWrap',
    interfaces: [InvokeApply, HasHTMLElement]
  };
  function setTo($receiver, slot) {
    slot($receiver.node);
    $receiver.target.remAssign_11rb$(slot);
    return $receiver;
  }
  function Form() {
    ScreenWrap.call(this);
    this.node_j1kqdz$_0 = invoke(get_form(document), Form$node$lambda);
    this.column_5n6f6d$_0 = lazy(Form$column$lambda(this));
    this.hiddenSubmit_u2m48n$_0 = lazy(Form$hiddenSubmit$lambda(this));
    this.elements = new Var(emptyList());
    this.isDirty = Rx_init(killable.NoKill, Form$isDirty$lambda(this));
    this.onsubmit_gbr1zf$(Form_init$lambda);
  }
  Object.defineProperty(Form.prototype, 'node', {
    get: function () {
      return this.node_j1kqdz$_0;
    }
  });
  Object.defineProperty(Form.prototype, 'column', {
    get: function () {
      return this.column_5n6f6d$_0.value;
    }
  });
  Object.defineProperty(Form.prototype, 'hiddenSubmit', {
    get: function () {
      return this.hiddenSubmit_u2m48n$_0.value;
    }
  });
  Form.prototype.onsubmit_gbr1zf$ = function (action) {
    this.hiddenSubmit;
    listen(this.node, 'submit', action);
  };
  function Form$node$lambda($receiver) {
    return Unit;
  }
  function Form$column$lambda(this$Form) {
    return function () {
      column(this$Form.cls);
      return Unit;
    };
  }
  function Form$hiddenSubmit$lambda$lambda$lambda($receiver) {
    $receiver.type = 'submit';
    $receiver.hidden = true;
    return Unit;
  }
  function Form$hiddenSubmit$lambda(this$Form) {
    return function () {
      var $receiver = this$Form.insert.button;
      invoke($receiver.node, Form$hiddenSubmit$lambda$lambda$lambda);
      return $receiver;
    };
  }
  function Form$isDirty$lambda(this$Form) {
    return function ($receiver) {
      var $receiver_0 = this$Form.elements.invoke();
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver_0.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element()) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }
  function Form_init$lambda(it) {
    it.preventDefault();
    return Unit;
  }
  Form.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Form',
    interfaces: [ScreenWrap]
  };
  function FormGroup() {
    ScreenWrap.call(this);
    this.node_9dsaay$_0 = invoke(get_div(document), FormGroup$node$lambda);
    this.slots = new FormGroup$Slots(this);
    this.inputEmitter_0 = new Emitter();
    this.label_5l31p0$_0 = lazy(FormGroup$label$lambda(this));
    this.input_4dcs3i$_0 = lazy(FormGroup$input$lambda(this));
  }
  Object.defineProperty(FormGroup.prototype, 'node', {
    get: function () {
      return this.node_9dsaay$_0;
    }
  });
  function FormGroup$Slots($outer) {
    this.$outer = $outer;
    this.label = this.$outer.slot;
    this.input = this.$outer.slot;
  }
  FormGroup$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(FormGroup.prototype, 'label', {
    get: function () {
      return this.label_5l31p0$_0.value;
    }
  });
  Object.defineProperty(FormGroup.prototype, 'input', {
    get: function () {
      return this.input_4dcs3i$_0.value;
    }
  });
  function FormGroup$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_formGroup($receiver_0);
    column($receiver_0);
    return Unit;
  }
  function FormGroup$label$lambda$lambda$lambda(this$) {
    return function (e) {
      this$.htmlFor = get_ref(e);
      return Unit;
    };
  }
  function FormGroup$label$lambda$lambda(this$FormGroup) {
    return function ($receiver) {
      get_m1(get_cls($receiver));
      this$FormGroup.inputEmitter_0.add_qlkmfe$(FormGroup$label$lambda$lambda$lambda($receiver));
      return Unit;
    };
  }
  function FormGroup$label$lambda(this$FormGroup) {
    return function () {
      return setTo_1(invoke(get_label(document), FormGroup$label$lambda$lambda(this$FormGroup)), this$FormGroup.slots.label);
    };
  }
  function FormGroup$input$lambda(this$FormGroup) {
    return function () {
      var $receiver = get_insert_0(this$FormGroup.slots.input).input;
      var this$FormGroup_0 = this$FormGroup;
      get_m1($receiver.cls);
      this$FormGroup_0.inputEmitter_0.emit_11rb$($receiver.node);
      return $receiver;
    };
  }
  FormGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormGroup',
    interfaces: [ScreenWrap]
  };
  function ViewWithForward(base, forward) {
    ViewWithForward$Companion_getInstance();
    this.base = base;
    this.forward = forward;
  }
  ViewWithForward.prototype.view_qlkmfe$ = function (prepare) {
    var tmp$;
    return ((tmp$ = this.forward()) != null ? tmp$ : this.base).view_qlkmfe$(prepare);
  };
  function ViewWithForward$Companion() {
    ViewWithForward$Companion_instance = this;
  }
  function ViewWithForward$Companion$invoke$lambda(closure$current, closure$view) {
    return function () {
      var tmp$;
      return (tmp$ = closure$current.invoke()) != null ? closure$view(tmp$) : null;
    };
  }
  ViewWithForward$Companion.prototype.invoke_1f34vw$ = function (base, current, view) {
    return new ViewWithForward(base, ViewWithForward$Companion$invoke$lambda(current, view));
  };
  function ViewWithForward$Companion$of$lambda($receiver) {
    return $receiver;
  }
  ViewWithForward$Companion.prototype.of_xdlxgs$ = function (base, switch_0) {
    return this.invoke_1f34vw$(base, switch_0, ViewWithForward$Companion$of$lambda);
  };
  ViewWithForward$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ViewWithForward$Companion_instance = null;
  function ViewWithForward$Companion_getInstance() {
    if (ViewWithForward$Companion_instance === null) {
      new ViewWithForward$Companion();
    }
    return ViewWithForward$Companion_instance;
  }
  ViewWithForward.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewWithForward',
    interfaces: [HasView]
  };
  function ForwardBase(coroutineContext) {
    ForwardImpl.call(this, coroutineContext);
  }
  ForwardBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ForwardBase',
    interfaces: [ForwardImpl]
  };
  function ForwardBase_init(parent, $this) {
    $this = $this || Object.create(ForwardBase.prototype);
    ForwardBase.call($this, Job(parent.coroutineContext));
    return $this;
  }
  function HasRedisplay() {
  }
  HasRedisplay.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasRedisplay',
    interfaces: []
  };
  function ForwardImpl(coroutineContext) {
    ViewImplBase.call(this, coroutineContext);
    this.forward = JobSwitch$Companion_getInstance().optional_u16duj$();
    var ex = discardExecutor(this);
    this.uix_rxokg6$_0 = ForwardImpl$uix$lambda$lambda(ex, this);
    this.redisplay_i43jsh$_0 = ForwardImpl$redisplay$lambda(this);
    this.baseView_l502tc$_0 = new ForwardImpl$baseView$ObjectLiteral(this);
    this.forwardView_6hlyss$_0 = ViewWithForward$Companion_getInstance().of_xdlxgs$(this.baseView_l502tc$_0, this.forward);
  }
  Object.defineProperty(ForwardImpl.prototype, 'uix', {
    get: function () {
      return this.uix_rxokg6$_0;
    }
  });
  Object.defineProperty(ForwardImpl.prototype, 'redisplay', {
    get: function () {
      return this.redisplay_i43jsh$_0;
    }
  });
  ForwardImpl.prototype.view_qlkmfe$ = function (prepare) {
    return this.forwardView_6hlyss$_0.view_qlkmfe$(prepare);
  };
  function Coroutine$ForwardImpl$uix$lambda$lambda$lambda(this$_0, closure$action_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$action = closure$action_0;
  }
  Coroutine$ForwardImpl$uix$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ForwardImpl$uix$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ForwardImpl$uix$lambda$lambda$lambda.prototype.constructor = Coroutine$ForwardImpl$uix$lambda$lambda$lambda;
  Coroutine$ForwardImpl$uix$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$this$.forward.now == null) {
              this.state_0 = 2;
              this.result_0 = this.local$closure$action(this);
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
            return Unit;
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
  function ForwardImpl$uix$lambda$lambda$lambda(this$_0, closure$action_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ForwardImpl$uix$lambda$lambda$lambda(this$_0, closure$action_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ForwardImpl$uix$lambda$lambda(closure$ex, this$) {
    return function (action) {
      closure$ex(ForwardImpl$uix$lambda$lambda$lambda(this$, action));
      return Unit;
    };
  }
  function Coroutine$ForwardImpl$redisplay$lambda$lambda(this$ForwardImpl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ForwardImpl = this$ForwardImpl_0;
  }
  Coroutine$ForwardImpl$redisplay$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ForwardImpl$redisplay$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ForwardImpl$redisplay$lambda$lambda.prototype.constructor = Coroutine$ForwardImpl$redisplay$lambda$lambda;
  Coroutine$ForwardImpl$redisplay$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ForwardImpl.forward.switchTo_11rb$(null, this);
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
  function ForwardImpl$redisplay$lambda$lambda(this$ForwardImpl_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ForwardImpl$redisplay$lambda$lambda(this$ForwardImpl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ForwardImpl$redisplay$lambda(this$ForwardImpl) {
    return function () {
      this$ForwardImpl.exec(ForwardImpl$redisplay$lambda$lambda(this$ForwardImpl));
      return Unit;
    };
  }
  function ForwardImpl$baseView$ObjectLiteral(this$ForwardImpl) {
    this.this$ForwardImpl = this$ForwardImpl;
  }
  ForwardImpl$baseView$ObjectLiteral.prototype.view_qlkmfe$ = function (prepare) {
    return this.this$ForwardImpl.preparedView_oh3mgy$(prepare);
  };
  ForwardImpl$baseView$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [HasView]
  };
  ForwardImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ForwardImpl',
    interfaces: [HasRedisplay, HasKillsUix, ViewImplBase]
  };
  function ForwardImpl_init(parent, $this) {
    $this = $this || Object.create(ForwardImpl.prototype);
    ForwardImpl.call($this, Job(parent.coroutineContext));
    return $this;
  }
  function click$lambda(closure$deps, closure$action) {
    return function (it) {
      closure$deps.uix(closure$action);
      return Unit;
    };
  }
  function click($receiver, deps, action) {
    clickEvent($receiver, click$lambda(deps, action));
  }
  function click_0($receiver, deps, action) {
    click($receiver.node, deps, action);
  }
  function click_1($receiver, deps, action) {
    click($receiver.node, deps, action);
  }
  function click_2($receiver, deps, action) {
    click($receiver.node, deps, action);
  }
  function Hourglass() {
    ScreenWrap.call(this);
    this.node_pyxenb$_0 = invoke(get_div(document), Hourglass$node$lambda);
  }
  Object.defineProperty(Hourglass.prototype, 'node', {
    get: function () {
      return this.node_pyxenb$_0;
    }
  });
  function Hourglass$node$lambda$lambda($receiver) {
    get_spinnerBorder(get_cls($receiver));
    return Unit;
  }
  function Hourglass$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_flexGrow1($receiver_0);
    flexCenter($receiver_0);
    invoke(get_div($receiver), Hourglass$node$lambda$lambda);
    return Unit;
  }
  Hourglass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hourglass',
    interfaces: [ScreenWrap]
  };
  function Input() {
    ScreenWrap.call(this);
    this.node_s1otlz$_0 = invoke(get_input(document), Input$node$lambda);
    this.rxv_m0dpjd$_0 = lazy(Input$rxv$lambda(this));
    this.valid_di7rgj$_0 = lazy(Input$valid$lambda(this));
    var $receiver = new Listeners();
    listen(this.node, 'input', Input$changeListeners$lambda$lambda($receiver));
    this.changeListeners = $receiver;
    this.required_7z3v50$_0 = lazy(Input$required$lambda(this));
  }
  Object.defineProperty(Input.prototype, 'node', {
    get: function () {
      return this.node_s1otlz$_0;
    }
  });
  Object.defineProperty(Input.prototype, 'rxv', {
    get: function () {
      return this.rxv_m0dpjd$_0.value;
    }
  });
  Object.defineProperty(Input.prototype, 'valid', {
    get: function () {
      return this.valid_di7rgj$_0.value;
    }
  });
  Object.defineProperty(Input.prototype, 'value', {
    get: function () {
      return this.node.value;
    },
    set: function (v) {
      this.node.value = v;
      this.changeListeners.fire();
    }
  });
  Object.defineProperty(Input.prototype, 'required', {
    get: function () {
      return this.required_7z3v50$_0.value;
    }
  });
  function Input$bindTo$lambda(this$Input, closure$rxv) {
    return function () {
      closure$rxv.now = this$Input.value;
      return Unit;
    };
  }
  Input.prototype.bindTo_cwklo1$ = function ($receiver, rxv) {
    this.value = rxv.now;
    plusAssign($receiver.kills, this.changeListeners.add_o14v8n$(Input$bindTo$lambda(this, rxv)));
  };
  function Input$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_formControl($receiver_0);
    get_widthAuto($receiver_0);
    return Unit;
  }
  function Input$rxv$lambda$lambda(closure$rxv, this$Input) {
    return function () {
      closure$rxv.remAssign_11rb$(this$Input.value);
      return Unit;
    };
  }
  function Input$rxv$lambda(this$Input) {
    return function () {
      var rxv = new Var(this$Input.value);
      this$Input.changeListeners.plusAssign_o14v8n$(Input$rxv$lambda$lambda(rxv, this$Input));
      return rxv;
    };
  }
  function Input$valid$lambda$lambda$lambda(closure$v) {
    return function ($receiver) {
      return !closure$v.invoke();
    };
  }
  function Input$valid$lambda(this$Input) {
    return function () {
      var $receiver = new Var(true);
      rxClass_0(this$Input.node, killable.NoKill, get_isInvalid(Cls.Companion), Input$valid$lambda$lambda$lambda($receiver));
      return $receiver;
    };
  }
  function Input$changeListeners$lambda$lambda(this$) {
    return function (it) {
      this$.fire();
      return Unit;
    };
  }
  function Input$required$lambda(this$Input) {
    return function () {
      this$Input.node.required = true;
      return Unit;
    };
  }
  Input.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Input',
    interfaces: [ScreenWrap]
  };
  function InputGroup() {
    ScreenWrap.call(this);
    this.node_3cyd8a$_0 = invoke(get_div(document), InputGroup$node$lambda);
    this.slots = new InputGroup$Slots(this);
    this.input = get_insert_0(this.slots.input).input;
  }
  Object.defineProperty(InputGroup.prototype, 'node', {
    get: function () {
      return this.node_3cyd8a$_0;
    }
  });
  function InputGroup$Slots($outer) {
    this.$outer = $outer;
    this.prepend = get_slots(this.$outer.node);
    this.input = this.$outer.slot;
    this.append = get_slots(this.$outer.node);
    this.submit = this.$outer.slot;
  }
  InputGroup$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  function InputGroup$get_InputGroup$append$lambda($receiver) {
    get_inputGroupAppend(get_cls($receiver));
    return Unit;
  }
  Object.defineProperty(InputGroup.prototype, 'append', {
    get: function () {
      return get_insert_0(this.slots.append.slot).wraps.div_iw61es$(InputGroup$get_InputGroup$append$lambda);
    }
  });
  function InputGroup$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_inputGroup($receiver_0);
    get_widthAuto($receiver_0);
    return Unit;
  }
  InputGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputGroup',
    interfaces: [ScreenWrap]
  };
  function JobKillsApi() {
  }
  function Coroutine$JobKillsApi$mapAsync$calc(closure$kseq_0, closure$fn_0, t_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$kseq = closure$kseq_0;
    this.local$closure$fn = closure$fn_0;
    this.local$t = t_0;
  }
  Coroutine$JobKillsApi$mapAsync$calc.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JobKillsApi$mapAsync$calc.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JobKillsApi$mapAsync$calc.prototype.constructor = Coroutine$JobKillsApi$mapAsync$calc;
  Coroutine$JobKillsApi$mapAsync$calc.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$closure$kseq.killables(), this.local$t, this);
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
  function JobKillsApi$mapAsync$calc(closure$kseq_0, closure$fn_0) {
    return function (t_0, continuation_0, suspended) {
      var instance = new Coroutine$JobKillsApi$mapAsync$calc(closure$kseq_0, closure$fn_0, t_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JobKillsApi$mapAsync$lambda(closure$ch_0, closure$calc_0, closure$rxv_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$ch = closure$ch_0;
    this.local$closure$calc = closure$calc_0;
    this.local$closure$rxv = closure$rxv_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$JobKillsApi$mapAsync$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JobKillsApi$mapAsync$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JobKillsApi$mapAsync$lambda.prototype.constructor = Coroutine$JobKillsApi$mapAsync$lambda;
  Coroutine$JobKillsApi$mapAsync$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$ch.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var t = this.result_0;
            this.local$tmp$_0 = this.local$closure$rxv;
            this.state_0 = 6;
            this.result_0 = this.local$closure$calc(t, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_0.now = this.result_0;
            this.state_0 = 2;
            continue;
          case 7:
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
  function JobKillsApi$mapAsync$lambda(closure$ch_0, closure$calc_0, closure$rxv_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JobKillsApi$mapAsync$lambda(closure$ch_0, closure$calc_0, closure$rxv_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$mapAsync_ie512r$($this, $receiver_0, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$calc = void 0;
    this.local$$receiver = $receiver_0;
    this.local$fn = fn_0;
  }
  Coroutine$mapAsync_ie512r$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapAsync_ie512r$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapAsync_ie512r$.prototype.constructor = Coroutine$mapAsync_ie512r$;
  Coroutine$mapAsync_ie512r$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var kseq = seq(this.$this.kills);
            this.local$calc = JobKillsApi$mapAsync$calc(kseq, this.local$fn);
            this.state_0 = 2;
            this.result_0 = this.local$calc(this.local$$receiver.now, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var rxv = new Var(this.result_0);
            var ch = this.$this.toChannelLater_z5dyp2$(this.local$$receiver);
            launch(this.$this, void 0, void 0, JobKillsApi$mapAsync$lambda(ch, this.local$calc, rxv));
            return rxv;
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
  JobKillsApi.prototype.mapAsync_ie512r$ = function ($receiver_0, fn_0, continuation_0, suspended) {
    var instance = new Coroutine$mapAsync_ie512r$(this, $receiver_0, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JobKillsApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JobKillsApi',
    interfaces: [KillsApi, CoroutineScope]
  };
  function ListGroup() {
    ScreenWrap.call(this);
    this.node_651yxc$_0 = invoke(get_div(document), ListGroup$node$lambda);
    this.item = this.insert.with_lx79ro$(ListGroup$item$lambda(this));
  }
  Object.defineProperty(ListGroup.prototype, 'node', {
    get: function () {
      return this.node_651yxc$_0;
    }
  });
  function ListGroup$node$lambda($receiver) {
    get_listGroup(get_cls($receiver));
    return Unit;
  }
  function ListGroup$item$lambda(this$ListGroup) {
    return function ($receiver) {
      get_listGroupItem(this$ListGroup.cls);
      return Unit;
    };
  }
  ListGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListGroup',
    interfaces: [ScreenWrap]
  };
  function ListGroupButton() {
    ScreenWrap.call(this);
    this.node_lxudlu$_0 = invoke(get_button(document), ListGroupButton$node$lambda);
    this.slots_ru6qdh$_0 = lazy(ListGroupButton$slots$lambda(this));
    this.middle_t96mvl$_0 = lazy(ListGroupButton$middle$lambda(this));
    this.left_lwkge5$_0 = lazy(ListGroupButton$left$lambda(this));
    this.right_sd13bg$_0 = lazy(ListGroupButton$right$lambda(this));
  }
  Object.defineProperty(ListGroupButton.prototype, 'node', {
    get: function () {
      return this.node_lxudlu$_0;
    }
  });
  function ListGroupButton$Slots($outer) {
    this.$outer = $outer;
    this.left = this.$outer.slot;
    this.middle = this.$outer.slot;
    this.right = this.$outer.slot;
  }
  ListGroupButton$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(ListGroupButton.prototype, 'slots', {
    get: function () {
      return this.slots_ru6qdh$_0.value;
    }
  });
  Object.defineProperty(ListGroupButton.prototype, 'middle', {
    get: function () {
      return this.middle_t96mvl$_0.value;
    }
  });
  Object.defineProperty(ListGroupButton.prototype, 'left', {
    get: function () {
      return this.left_lwkge5$_0.value;
    }
  });
  Object.defineProperty(ListGroupButton.prototype, 'right', {
    get: function () {
      return this.right_sd13bg$_0.value;
    }
  });
  function ListGroupButton$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_listGroupItem($receiver_0);
    get_listGroupItemAction($receiver_0);
    return Unit;
  }
  function ListGroupButton$slots$lambda(this$ListGroupButton) {
    return function () {
      var $receiver = this$ListGroupButton.cls;
      get_dFlex($receiver);
      get_flexRow($receiver);
      return new ListGroupButton$Slots(this$ListGroupButton);
    };
  }
  function ListGroupButton$middle$lambda$lambda($receiver) {
    get_flexGrow1(get_cls($receiver));
    return Unit;
  }
  function ListGroupButton$middle$lambda(this$ListGroupButton) {
    return function () {
      return setTo_1(row_0(document, ListGroupButton$middle$lambda$lambda), this$ListGroupButton.slots.middle);
    };
  }
  function ListGroupButton$left$lambda(this$ListGroupButton) {
    return function () {
      return this$ListGroupButton.slots.left;
    };
  }
  function ListGroupButton$right$lambda(this$ListGroupButton) {
    return function () {
      this$ListGroupButton.middle;
      return this$ListGroupButton.slots.right;
    };
  }
  ListGroupButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListGroupButton',
    interfaces: [ScreenWrap]
  };
  function Loading() {
    this.ks = new Killables();
    this.hole_0 = get_hole(ensureNotNull(document.body));
    this.content_0 = get_insert_1(this.hole_0).wraps.div_iw61es$(Loading$content$lambda);
    this.status_0 = invoke(get_div(this.content_0.insert.wraps.div_iw61es$(Loading$status$lambda).node), Loading$status$lambda_0);
    this.target = this.hole_0.with_qlkmfe$(Loading$target$lambda(this));
    setupFullScreen();
    globalStatus.forEach_aaomyj$(this.ks.killSet, Loading_init$lambda(this));
  }
  Loading.prototype.status_61zpoe$ = function (msg) {
    remAssign(this.status_0, msg);
  };
  Loading.prototype.remAssign_61zpoe$ = function (msg) {
    this.status_61zpoe$(msg);
  };
  function Loading$content$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_p1($receiver_0);
    get_flexGrow1($receiver_0);
    get_dFlex($receiver_0);
    get_flexColumn($receiver_0);
    get_insert($receiver).hourglass;
    return Unit;
  }
  function Loading$status$lambda($receiver) {
    flexCenter(get_cls($receiver));
    return Unit;
  }
  function Loading$status$lambda_0($receiver) {
    var $receiver_0 = get_cls($receiver);
    flexFixedSize($receiver_0);
    get_m1($receiver_0);
    get_textMuted($receiver_0);
    return Unit;
  }
  function Loading$target$lambda(this$Loading) {
    return function ($receiver) {
      this$Loading.ks.kill();
      return Unit;
    };
  }
  function Loading_init$lambda(this$Loading) {
    return function ($receiver, msg) {
      this$Loading.status_61zpoe$(msg);
      return Unit;
    };
  }
  Loading.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Loading',
    interfaces: []
  };
  function Coroutine$proc$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$proc$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$proc$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$proc$lambda.prototype.constructor = Coroutine$proc$lambda;
  Coroutine$proc$lambda.prototype.doResume = function () {
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
  function proc$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$proc$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function proc() {
    return proc$lambda;
  }
  function Coroutine$procOrElse$lambda(e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$procOrElse$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$procOrElse$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$procOrElse$lambda.prototype.constructor = Coroutine$procOrElse$lambda;
  Coroutine$procOrElse$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$els(this.local$e, this);
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
  function procOrElse$lambda(e_0, els_0, continuation_0, suspended) {
    var instance = new Coroutine$procOrElse$lambda(e_0, els_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function procOrElse() {
    return procOrElse$lambda;
  }
  function Coroutine$procOrElse$lambda_0(closure$fn_0, closure$msg_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$msg = closure$msg_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$procOrElse$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$procOrElse$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$procOrElse$lambda_0.prototype.constructor = Coroutine$procOrElse$lambda_0;
  Coroutine$procOrElse$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (equals(this.local$e, this.local$closure$msg)) {
              this.state_0 = 3;
              this.result_0 = this.local$closure$fn(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$els(this.local$e, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
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
  function procOrElse$lambda_0(closure$fn_0, closure$msg_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$procOrElse$lambda_0(closure$fn_0, closure$msg_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function procOrElse_0(msg, fn) {
    return procOrElse$lambda_0(fn, msg);
  }
  function Coroutine$with$lambda(this$with_0, closure$proc_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$with = this$with_0;
    this.local$closure$proc = closure$proc_0;
    this.local$e = e_0;
  }
  Coroutine$with$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$with$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$with$lambda.prototype.constructor = Coroutine$with$lambda;
  Coroutine$with$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$with(this.local$e, this.local$closure$proc, this);
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
  function with$lambda(this$with_0, closure$proc_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$with$lambda(this$with_0, closure$proc_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function with_0($receiver, proc) {
    return with$lambda($receiver, proc);
  }
  function Coroutine$with$lambda$lambda(closure$procOrElse_0, closure$els_0, e2_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$procOrElse = closure$procOrElse_0;
    this.local$closure$els = closure$els_0;
    this.local$e2 = e2_0;
  }
  Coroutine$with$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$with$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$with$lambda$lambda.prototype.constructor = Coroutine$with$lambda$lambda;
  Coroutine$with$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$procOrElse(this.local$e2, this.local$closure$els, this);
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
  function with$lambda$lambda(closure$procOrElse_0, closure$els_0) {
    return function (e2_0, continuation_0, suspended) {
      var instance = new Coroutine$with$lambda$lambda(closure$procOrElse_0, closure$els_0, e2_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$with$lambda_0(this$with_0, closure$procOrElse_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$with = this$with_0;
    this.local$closure$procOrElse = closure$procOrElse_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$with$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$with$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$with$lambda_0.prototype.constructor = Coroutine$with$lambda_0;
  Coroutine$with$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$with(this.local$e, with$lambda$lambda(this.local$closure$procOrElse, this.local$els), this);
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
  function with$lambda_0(this$with_0, closure$procOrElse_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$with$lambda_0(this$with_0, closure$procOrElse_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function with_1($receiver, procOrElse) {
    return with$lambda_0($receiver, procOrElse);
  }
  function toSetProcOrElse$lambda(this$toSetProcOrElse, closure$default) {
    return function (p) {
      this$toSetProcOrElse(with_0(p, closure$default));
      return Unit;
    };
  }
  function toSetProcOrElse($receiver, default_0) {
    if (default_0 === void 0)
      default_0 = proc();
    return toSetProcOrElse$lambda($receiver, default_0);
  }
  function process($receiver, msg, fn) {
    return $receiver(procOrElse_0(msg, fn));
  }
  function Coroutine$envelope$lambda(closure$marker_0, closure$fn_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$marker = closure$marker_0;
    this.local$closure$fn = closure$fn_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$envelope$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$envelope$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$envelope$lambda.prototype.constructor = Coroutine$envelope$lambda;
  Coroutine$envelope$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$e, Envelope) && equals(this.local$e.marker, this.local$closure$marker)) {
              this.state_0 = 3;
              this.result_0 = this.local$closure$fn(this.local$e.msg, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$els(this.local$e, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
            return Unit;
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
  function envelope$lambda(closure$marker_0, closure$fn_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$envelope$lambda(closure$marker_0, closure$fn_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function envelope($receiver, marker, fn) {
    return $receiver(envelope$lambda(marker, fn));
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function ProcOrElseList() {
    this.procs_0 = ArrayList_init();
    this.proc = ProcOrElseList$proc$lambda(this);
    this.add = ProcOrElseList$add$lambda(this);
  }
  function Coroutine$ProcOrElseList$next$lambda(closure$iter_0, closure$e_0, closure$els_0, this$ProcOrElseList_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$iter = closure$iter_0;
    this.local$closure$e = closure$e_0;
    this.local$closure$els = closure$els_0;
    this.local$this$ProcOrElseList = this$ProcOrElseList_0;
  }
  Coroutine$ProcOrElseList$next$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ProcOrElseList$next$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ProcOrElseList$next$lambda.prototype.constructor = Coroutine$ProcOrElseList$next$lambda;
  Coroutine$ProcOrElseList$next$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ProcOrElseList.next_0(this.local$closure$iter, this.local$closure$e, this.local$closure$els, this);
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
  function ProcOrElseList$next$lambda(closure$iter_0, closure$e_0, closure$els_0, this$ProcOrElseList_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$ProcOrElseList$next$lambda(closure$iter_0, closure$e_0, closure$els_0, this$ProcOrElseList_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$next_0($this, iter_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$iter = iter_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$next_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$next_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$next_0.prototype.constructor = Coroutine$next_0;
  Coroutine$next_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$iter.hasNext()) {
              var n = this.local$iter.next();
              this.state_0 = 3;
              this.result_0 = n(this.local$e, ProcOrElseList$next$lambda(this.local$iter, this.local$e, this.local$els, this.$this), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$els(this.local$e, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 4;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
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
  ProcOrElseList.prototype.next_0 = function (iter_0, e_0, els_0, continuation_0, suspended) {
    var instance = new Coroutine$next_0(this, iter_0, e_0, els_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ProcOrElseList.prototype.plusAssign_bmtija$ = function (proc) {
    this.add(proc);
  };
  function Coroutine$ProcOrElseList$proc$lambda(this$ProcOrElseList_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ProcOrElseList = this$ProcOrElseList_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$ProcOrElseList$proc$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ProcOrElseList$proc$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ProcOrElseList$proc$lambda.prototype.constructor = Coroutine$ProcOrElseList$proc$lambda;
  Coroutine$ProcOrElseList$proc$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var it = this.local$this$ProcOrElseList.procs_0.iterator();
            this.state_0 = 2;
            this.result_0 = this.local$this$ProcOrElseList.next_0(it, this.local$e, this.local$els, this);
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
  function ProcOrElseList$proc$lambda(this$ProcOrElseList_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$ProcOrElseList$proc$lambda(this$ProcOrElseList_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ProcOrElseList$add$lambda$lambda(this$ProcOrElseList, closure$proc) {
    return function () {
      var $receiver = this$ProcOrElseList.procs_0;
      var element = closure$proc;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  function ProcOrElseList$add$lambda(this$ProcOrElseList) {
    return function (proc) {
      this$ProcOrElseList.procs_0.add_11rb$(proc);
      return ProcOrElseList$add$lambda$lambda(this$ProcOrElseList, proc);
    };
  }
  ProcOrElseList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcOrElseList',
    interfaces: []
  };
  function ProcVar(proc) {
    if (proc === void 0)
      proc = ProcVar_init$lambda;
    this.proc = proc;
    this.setter = ProcVar$setter$lambda(this);
  }
  function Coroutine$ProcVar_init$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$ProcVar_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ProcVar_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ProcVar_init$lambda.prototype.constructor = Coroutine$ProcVar_init$lambda;
  Coroutine$ProcVar_init$lambda.prototype.doResume = function () {
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
  function ProcVar_init$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$ProcVar_init$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function ProcVar$setter$lambda(this$ProcVar) {
    return function (p) {
      this$ProcVar.proc = p;
      return Unit;
    };
  }
  ProcVar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcVar',
    interfaces: []
  };
  function Coroutine$runLoop$lambda(closure$procVar_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$procVar = closure$procVar_0;
    this.local$e = e_0;
  }
  Coroutine$runLoop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runLoop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runLoop$lambda.prototype.constructor = Coroutine$runLoop$lambda;
  Coroutine$runLoop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$procVar.proc(this.local$e, this);
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
  function runLoop$lambda(closure$procVar_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$runLoop$lambda(closure$procVar_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function runLoop(channel) {
    var procVar = new ProcVar();
    runLoop_0(channel, runLoop$lambda(procVar));
    return procVar.setter;
  }
  function Coroutine$runLoop$lambda_0(closure$channel_0, closure$proc_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$proc = closure$proc_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$runLoop$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$runLoop$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$runLoop$lambda_0.prototype.constructor = Coroutine$runLoop$lambda_0;
  Coroutine$runLoop$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$channel.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 7;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var e_0 = this.result_0;
            this.state_0 = 6;
            this.result_0 = this.local$closure$proc(e_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 2;
            continue;
          case 7:
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
  function runLoop$lambda_0(closure$channel_0, closure$proc_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$runLoop$lambda_0(closure$channel_0, closure$proc_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function runLoop_0(channel, proc) {
    launch(coroutines.GlobalScope, void 0, void 0, runLoop$lambda_0(channel, proc));
  }
  function ProcOrElseVar(proc, assign) {
    ProcOrElseVar$Companion_getInstance();
    this.proc = proc;
    this.assign = assign;
  }
  function ProcOrElseVar$Companion() {
    ProcOrElseVar$Companion_instance = this;
  }
  function Coroutine$ProcOrElseVar$Companion$invoke$lambda(closure$proc_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$proc = closure$proc_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$ProcOrElseVar$Companion$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ProcOrElseVar$Companion$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ProcOrElseVar$Companion$invoke$lambda.prototype.constructor = Coroutine$ProcOrElseVar$Companion$invoke$lambda;
  Coroutine$ProcOrElseVar$Companion$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$proc.v(this.local$e, this.local$els, this);
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
  function ProcOrElseVar$Companion$invoke$lambda(closure$proc_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$ProcOrElseVar$Companion$invoke$lambda(closure$proc_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ProcOrElseVar$Companion$invoke$lambda_0(closure$proc) {
    return function (p) {
      closure$proc.v = p;
      return Unit;
    };
  }
  ProcOrElseVar$Companion.prototype.invoke_bmtija$ = function (initial) {
    if (initial === void 0)
      initial = procOrElse();
    var proc = {v: initial};
    return new ProcOrElseVar(ProcOrElseVar$Companion$invoke$lambda(proc), ProcOrElseVar$Companion$invoke$lambda_0(proc));
  };
  ProcOrElseVar$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ProcOrElseVar$Companion_instance = null;
  function ProcOrElseVar$Companion_getInstance() {
    if (ProcOrElseVar$Companion_instance === null) {
      new ProcOrElseVar$Companion();
    }
    return ProcOrElseVar$Companion_instance;
  }
  ProcOrElseVar.prototype.remAssign_bmtija$ = function (proc) {
    this.assign(proc);
  };
  ProcOrElseVar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcOrElseVar',
    interfaces: []
  };
  function procVar() {
    return ProcOrElseVar$Companion_getInstance().invoke_bmtija$();
  }
  function procOrElses() {
    return new ProcOrElseList();
  }
  function assignedTo($receiver, pvar) {
    pvar($receiver.proc);
    return $receiver;
  }
  function assignedTo_0($receiver, pvar) {
    pvar.remAssign_bmtija$($receiver.proc);
    return $receiver;
  }
  function addedTo_0($receiver, pset) {
    pset.plusAssign_bmtija$($receiver.proc);
    return $receiver;
  }
  function addedTo_1($receiver, pset) {
    plusAssign(pset, $receiver.proc);
    return $receiver;
  }
  function addProcAssign($receiver) {
    return addedTo_1(procVar(), $receiver).assign;
  }
  function addProcAssign_0($receiver) {
    return addProcAssign($receiver.add);
  }
  function assignProcAdd($receiver) {
    return assignedTo(procOrElses(), $receiver).add;
  }
  function rxProc$lambda(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function Coroutine$rxProc$lambda(closure$rxv_0, e_0, els_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$rxv = closure$rxv_0;
    this.local$e = e_0;
    this.local$els = els_0;
  }
  Coroutine$rxProc$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$rxProc$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$rxProc$lambda.prototype.constructor = Coroutine$rxProc$lambda;
  Coroutine$rxProc$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$rxv.now(this.local$e, this.local$els, this);
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
  function rxProc$lambda_0(closure$rxv_0) {
    return function (e_0, els_0, continuation_0, suspended) {
      var instance = new Coroutine$rxProc$lambda(closure$rxv_0, e_0, els_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function rxProc(ks, fn) {
    var rxv = Rx_init(ks, rxProc$lambda(fn));
    return rxProc$lambda_0(rxv);
  }
  function rxProcIf$lambda(closure$rxv, closure$fn) {
    return function () {
      var $receiver = closure$rxv.invoke();
      var closure$fn_0 = closure$fn;
      var block$result;
      if ($receiver == null) {
        block$result = procOrElse();
      }
       else {
        block$result = closure$fn_0($receiver);
      }
      return block$result;
    };
  }
  function rxProcIf(ks, rxv, fn) {
    return rxProc(ks, rxProcIf$lambda(rxv, fn));
  }
  function AsyncHolder(initial) {
    if (initial === void 0)
      initial = common.None;
    this.opt_8be2vx$ = initial;
  }
  Object.defineProperty(AsyncHolder.prototype, 'value', {
    get: function () {
      return this.opt_8be2vx$.get();
    }
  });
  AsyncHolder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AsyncHolder',
    interfaces: []
  };
  function AsyncHolder_init(initial, $this) {
    $this = $this || Object.create(AsyncHolder.prototype);
    AsyncHolder.call($this, new Some(initial));
    return $this;
  }
  function Coroutine$async$lambda(closure$fn_0, closure$msg_0, this$async_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$msg = closure$msg_0;
    this.local$this$async = this$async_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$async$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$async$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$async$lambda.prototype.constructor = Coroutine$async$lambda;
  Coroutine$async$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$msg;
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$.opt_8be2vx$ = new Some(this.result_0);
            return plusAssign_0(this.local$this$async, this.local$closure$msg), Unit;
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
  function async$lambda(closure$fn_0, closure$msg_0, this$async_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$async$lambda(closure$fn_0, closure$msg_0, this$async_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function async($receiver, ks, fn) {
    var msg = new AsyncHolder();
    addedTo(launch(coroutines.GlobalScope, void 0, void 0, async$lambda(fn, msg, $receiver)), ks);
    return msg;
  }
  function Coroutine$processedBy$lambda(closure$fn_0, this$processedBy_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$this$processedBy = this$processedBy_0;
  }
  Coroutine$processedBy$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$processedBy$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$processedBy$lambda.prototype.constructor = Coroutine$processedBy$lambda;
  Coroutine$processedBy$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$this$processedBy.value, this);
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
  function processedBy$lambda(closure$fn_0, this$processedBy_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$processedBy$lambda(closure$fn_0, this$processedBy_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function processedBy($receiver, fn) {
    return procOrElse_0($receiver, processedBy$lambda(fn, $receiver));
  }
  function Coroutine$processOnce$lambda(closure$fn_0, closure$tks_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$tks = closure$tks_0;
    this.local$it = it_0;
  }
  Coroutine$processOnce$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$processOnce$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$processOnce$lambda.prototype.constructor = Coroutine$processOnce$lambda;
  Coroutine$processOnce$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$it, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$tks.kill();
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
  function processOnce$lambda(closure$fn_0, closure$tks_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$processOnce$lambda(closure$fn_0, closure$tks_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function processOnce($receiver, kills, msg, inbox, fn) {
    var tks = killables(kills);
    var $receiver_0 = AsyncHolder_init(msg);
    plusAssign_0(inbox, $receiver_0);
    tks.plusAssign_o14v8n$($receiver(processedBy($receiver_0, processOnce$lambda(fn, tks))));
  }
  function Coroutine$channel$lambda(closure$ch_0, closure$procs_0, closure$ks_0, this$channel_0, closure$fn_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$ch = closure$ch_0;
    this.local$closure$procs = closure$procs_0;
    this.local$closure$ks = closure$ks_0;
    this.local$this$channel = this$channel_0;
    this.local$closure$fn = closure$fn_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$channel$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$channel$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$channel$lambda.prototype.constructor = Coroutine$channel$lambda;
  Coroutine$channel$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$ch.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var t = this.result_0;
            processOnce(this.local$closure$procs.add, this.local$closure$ks, t, this.local$this$channel, this.local$closure$fn);
            this.state_0 = 2;
            continue;
          case 6:
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
  function channel$lambda(closure$ch_0, closure$procs_0, closure$ks_0, this$channel_0, closure$fn_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$channel$lambda(closure$ch_0, closure$procs_0, closure$ks_0, this$channel_0, closure$fn_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function channel($receiver, ks, ch, fn) {
    var procs = new ProcOrElseList();
    launch(coroutines.GlobalScope, void 0, void 0, channel$lambda(ch, procs, ks, $receiver, fn));
    return procs.proc;
  }
  function rx$lambda(closure$fnx) {
    return function ($receiver) {
      return closure$fnx();
    };
  }
  function rx($receiver, ks, fnx, fn) {
    return rx_0($receiver, ks, Rx_init(ks, rx$lambda(fnx)), fn);
  }
  function rx$lambda_0(closure$procs, closure$ks, this$rx, closure$fn) {
    return function ($receiver, t) {
      processOnce(closure$procs.add, closure$ks, t, this$rx, closure$fn);
      return Unit;
    };
  }
  function rx_0($receiver, ks, ch, fn) {
    var procs = new ProcOrElseList();
    ch.forEach_aaomyj$(ks, rx$lambda_0(procs, ks, $receiver, fn));
    return procs.proc;
  }
  function Screen() {
    ScreenWrap.call(this);
    this.node_13hxld$_0 = column_0(document, Screen$node$lambda);
    this.slots = new Screen$Slots(this);
    this.main = this.slots.main;
    this.topbar_64v2t1$_0 = lazy(Screen$topbar$lambda(this));
    this.toastSlots_tyjlxh$_0 = lazy(Screen$toastSlots$lambda(this));
  }
  Object.defineProperty(Screen.prototype, 'node', {
    get: function () {
      return this.node_13hxld$_0;
    }
  });
  function Screen$Slots($outer) {
    this.$outer = $outer;
    this.top = this.$outer.hole;
    this.main = this.$outer.hole;
    this.bottom = this.$outer.hole;
  }
  Screen$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(Screen.prototype, 'topbar', {
    get: function () {
      return this.topbar_64v2t1$_0.value;
    }
  });
  function Screen$ToastsSlots($outer) {
    this.$outer = $outer;
    var $receiver = get_insert_1(this.$outer.slots.main).stack;
    get_flexGrow1($receiver.cls);
    this.stack_0 = $receiver;
    this.content = this.stack_0.fill;
    this.toasts = get_insert_1(this.stack_0.fill).toasts;
  }
  Screen$ToastsSlots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToastsSlots',
    interfaces: []
  };
  Object.defineProperty(Screen.prototype, 'toastSlots', {
    get: function () {
      return this.toastSlots_tyjlxh$_0.value;
    }
  });
  function Screen$node$lambda($receiver) {
    get_flexGrow1(get_cls($receiver));
    return Unit;
  }
  function Screen$topbar$lambda(this$Screen) {
    return function () {
      return get_insert_1(this$Screen.slots.top).topbar;
    };
  }
  function Screen$toastSlots$lambda(this$Screen) {
    return function () {
      return new Screen$ToastsSlots(this$Screen);
    };
  }
  Screen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Screen',
    interfaces: [ScreenWrap]
  };
  function ScrollPane() {
    ScreenWrap.call(this);
    this.node_f9ephi$_0 = invoke(get_div(document), ScrollPane$node$lambda);
    this.pane = invoke(get_div(this.node), ScrollPane$pane$lambda);
  }
  Object.defineProperty(ScrollPane.prototype, 'node', {
    get: function () {
      return this.node_f9ephi$_0;
    }
  });
  function ScrollPane$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_flexGrow1($receiver_0);
    get_dFlex($receiver_0);
    get_flexColumn($receiver_0);
    return Unit;
  }
  function ScrollPane$pane$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_flexGrow1($receiver_0);
    get_height0($receiver_0);
    get_scrollVertical($receiver_0);
    return Unit;
  }
  ScrollPane.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScrollPane',
    interfaces: [ScreenWrap]
  };
  function Stack() {
    ScreenWrap.call(this);
    this.node_kzi0rb$_0 = invoke(get_div(document), Stack$node$lambda);
    this.zIndex_0 = 0;
  }
  Object.defineProperty(Stack.prototype, 'node', {
    get: function () {
      return this.node_kzi0rb$_0;
    }
  });
  function Stack$get_Stack$layer$lambda(closure$idx) {
    return function ($receiver) {
      $receiver.style.zIndex = closure$idx;
      return Unit;
    };
  }
  Object.defineProperty(Stack.prototype, 'layer', {
    get: function () {
      var tmp$;
      var idx = (tmp$ = this.zIndex_0, this.zIndex_0 = tmp$ + 1 | 0, tmp$).toString();
      return get_hole_0(this.slot).with_qlkmfe$(Stack$get_Stack$layer$lambda(idx));
    }
  });
  function Stack$get_Stack$fill$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_positionAbsolute($receiver_0);
    get_leftRightTopBottom0($receiver_0);
    return Unit;
  }
  Object.defineProperty(Stack.prototype, 'fill', {
    get: function () {
      return this.layer.with_qlkmfe$(Stack$get_Stack$fill$lambda);
    }
  });
  function Stack$node$lambda($receiver) {
    get_positionRelative(get_cls($receiver));
    return Unit;
  }
  Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stack',
    interfaces: [ScreenWrap]
  };
  function JobScopeApi() {
  }
  function Coroutine$JobScopeApi$switchToWrap$lambda$lambda(this$_0, closure$fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$closure$fn = closure$fn_0;
  }
  Coroutine$JobScopeApi$switchToWrap$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JobScopeApi$switchToWrap$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JobScopeApi$switchToWrap$lambda$lambda.prototype.constructor = Coroutine$JobScopeApi$switchToWrap$lambda$lambda;
  Coroutine$JobScopeApi$switchToWrap$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$this$, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            tmp$ = this.result_0;
            return new JobScopeWithItem(this.local$this$, tmp$);
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
  function JobScopeApi$switchToWrap$lambda$lambda(this$_0, closure$fn_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JobScopeApi$switchToWrap$lambda$lambda(this$_0, closure$fn_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JobScopeApi$switchToWrap$lambda(closure$fn_0, this$switchToWrap_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$this$switchToWrap = this$switchToWrap_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$JobScopeApi$switchToWrap$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JobScopeApi$switchToWrap$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JobScopeApi$switchToWrap$lambda.prototype.constructor = Coroutine$JobScopeApi$switchToWrap$lambda;
  Coroutine$JobScopeApi$switchToWrap$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$switchToWrap.switchTo_cbny1b$(JobScopeApi$switchToWrap$lambda$lambda(this.local$$receiver, this.local$closure$fn), this);
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
  function JobScopeApi$switchToWrap$lambda(closure$fn_0, this$switchToWrap_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JobScopeApi$switchToWrap$lambda(closure$fn_0, this$switchToWrap_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$switchToWrap_t6rg6d$($this, $receiver_0, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
    this.local$fn = fn_0;
  }
  Coroutine$switchToWrap_t6rg6d$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchToWrap_t6rg6d$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchToWrap_t6rg6d$.prototype.constructor = Coroutine$switchToWrap_t6rg6d$;
  Coroutine$switchToWrap_t6rg6d$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.withChild_p3so7j$(JobScopeApi$switchToWrap$lambda(this.local$fn, this.local$$receiver), this);
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
  JobScopeApi.prototype.switchToWrap_t6rg6d$ = function ($receiver_0, fn_0, continuation_0, suspended) {
    var instance = new Coroutine$switchToWrap_t6rg6d$(this, $receiver_0, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  JobScopeApi.prototype.withChild_p3so7j$ = function (fn, continuation) {
    return fn(JobKillsImpl$Companion_getInstance().childOf_jsg3wt$(this), continuation);
  };
  JobScopeApi.prototype.get_childUIWrap_irb06o$ = function ($receiver) {
    return childUIWrap(this, $receiver);
  };
  JobScopeApi.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JobScopeApi',
    interfaces: [JobScope]
  };
  function JobScopeImpl(coroutineContext) {
    JobScopeImpl$Companion_getInstance();
    if (coroutineContext === void 0)
      coroutineContext = Job();
    this.coroutineContext_7ghsnt$_0 = coroutineContext;
  }
  Object.defineProperty(JobScopeImpl.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_7ghsnt$_0;
    }
  });
  function JobScopeImpl$Companion() {
    JobScopeImpl$Companion_instance = this;
  }
  JobScopeImpl$Companion.prototype.childOf_jsg3wt$ = function (parent) {
    return JobScopeImpl_init(parent);
  };
  JobScopeImpl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JobScopeImpl$Companion_instance = null;
  function JobScopeImpl$Companion_getInstance() {
    if (JobScopeImpl$Companion_instance === null) {
      new JobScopeImpl$Companion();
    }
    return JobScopeImpl$Companion_instance;
  }
  JobScopeImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobScopeImpl',
    interfaces: [JobScopeApi]
  };
  function JobScopeImpl_init(parent, $this) {
    $this = $this || Object.create(JobScopeImpl.prototype);
    JobScopeImpl.call($this, Job(parent.coroutineContext));
    return $this;
  }
  function get_createKills$lambda$lambda(this$) {
    return function (it) {
      this$.kill();
      return Unit;
    };
  }
  function get_createKills($receiver) {
    var $receiver_0 = new Killables();
    $receiver.coroutineContext.invokeOnCompletion_f05bi3$(get_createKills$lambda$lambda($receiver_0));
    return $receiver_0.killSet;
  }
  function JobKillsImpl(coroutineContext) {
    JobKillsImpl$Companion_getInstance();
    if (coroutineContext === void 0)
      coroutineContext = Job();
    JobScopeImpl.call(this, coroutineContext);
    this.kills_dsvzmo$_0 = get_createKills(this);
  }
  Object.defineProperty(JobKillsImpl.prototype, 'kills', {
    get: function () {
      return this.kills_dsvzmo$_0;
    }
  });
  function JobKillsImpl$Companion() {
    JobKillsImpl$Companion_instance = this;
  }
  JobKillsImpl$Companion.prototype.childOf_jsg3wt$ = function (parent) {
    return JobKillsImpl_init(parent);
  };
  JobKillsImpl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JobKillsImpl$Companion_instance = null;
  function JobKillsImpl$Companion_getInstance() {
    if (JobKillsImpl$Companion_instance === null) {
      new JobKillsImpl$Companion();
    }
    return JobKillsImpl$Companion_instance;
  }
  JobKillsImpl.prototype.viewsAny_lqv1tx$ = function ($receiver) {
    return this.viewsAny_47k15q$($receiver);
  };
  JobKillsImpl.prototype.viewsAny_47k15q$ = function (fn) {
    return JobSwitch$Companion_getInstance().viewsOpt_kdyq44$(this, null, fn);
  };
  JobKillsImpl.prototype.viewsAny_ce24rb$ = function (initial, fn) {
    return JobSwitch$Companion_getInstance().views_kdyq44$(this, initial, fn);
  };
  JobKillsImpl.prototype.views_3ys1gp$ = function (initial, fn) {
    return JobSwitch$Companion_getInstance().views_kdyq44$(this, initial, fn);
  };
  JobKillsImpl.prototype.viewsOpt_3ys1gp$ = function (initial, fn) {
    return JobSwitch$Companion_getInstance().viewsOpt_kdyq44$(this, initial, fn);
  };
  JobKillsImpl.prototype.viewsOpt_b34i5g$ = function (fn) {
    return this.viewsOpt_3ys1gp$(null, fn);
  };
  JobKillsImpl.prototype.switch_qk988x$ = function (initial) {
    return JobSwitch$Companion_getInstance().of_qk988x$(initial);
  };
  JobKillsImpl.prototype.switchOpt_u16duj$ = function () {
    return JobSwitch$Companion_getInstance().optional_u16duj$();
  };
  JobKillsImpl.prototype.views_whgvbp$ = defineInlineFunction('appsimake-commonui.commonui.widget.JobKillsImpl.views_whgvbp$', function () {
    return this;
  });
  JobKillsImpl.prototype.wrap_mh5how$ = function (initial) {
    return JobSwitch$Companion_getInstance().wrap_mh5how$(initial);
  };
  JobKillsImpl.prototype.wrap_30y1fr$ = function () {
    return JobSwitch$Companion_getInstance().wrap_30y1fr$();
  };
  JobKillsImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobKillsImpl',
    interfaces: [JobKillsApi, KillsApi, JobScopeImpl]
  };
  function JobKillsImpl_init(parent, $this) {
    $this = $this || Object.create(JobKillsImpl.prototype);
    JobKillsImpl.call($this, Job(parent.coroutineContext));
    return $this;
  }
  function Views() {
  }
  Views.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Views',
    interfaces: []
  };
  var opt = defineInlineFunction('appsimake-commonui.commonui.widget.opt_935yjx$', function ($receiver, fn) {
    return $receiver.viewsOpt_b34i5g$(fn);
  });
  var of = defineInlineFunction('appsimake-commonui.commonui.widget.of_uujay0$', function ($receiver, initial, fn) {
    return $receiver.views_3ys1gp$(initial, fn);
  });
  function ExecImpl(coroutineContext) {
    JobKillsImpl.call(this, coroutineContext);
    this.exec_9zk6pz$_0 = executor(this);
  }
  Object.defineProperty(ExecImpl.prototype, 'exec', {
    get: function () {
      return this.exec_9zk6pz$_0;
    }
  });
  ExecImpl.prototype.fromRx_ua1iwv$ = function ($receiver, source, fn) {
    $receiver.fromRx_opq78r$(this, this.exec, source, fn);
    return $receiver;
  };
  ExecImpl.prototype.viewFromRx_ahf225$ = function ($receiver, source, fn) {
    fromRx_0($receiver, this, this.exec, source, fn);
    return $receiver;
  };
  ExecImpl.prototype.wrapFromRx_m95o2z$ = function ($receiver, source, fn) {
    fromRx($receiver, this, this, this.exec, source, fn);
    return $receiver;
  };
  function Coroutine$ExecImpl$mapAsync$lambda$lambda$lambda(closure$fn_0, closure$t_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$t = closure$t_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ExecImpl$mapAsync$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ExecImpl$mapAsync$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ExecImpl$mapAsync$lambda$lambda$lambda.prototype.constructor = Coroutine$ExecImpl$mapAsync$lambda$lambda$lambda;
  Coroutine$ExecImpl$mapAsync$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$$receiver, this.local$closure$t, this);
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
  function ExecImpl$mapAsync$lambda$lambda$lambda(closure$fn_0, closure$t_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ExecImpl$mapAsync$lambda$lambda$lambda(closure$fn_0, closure$t_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ExecImpl$mapAsync$lambda$lambda(closure$switch_0, closure$fn_0, closure$t_0, this$ExecImpl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$switch = closure$switch_0;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$t = closure$t_0;
    this.local$this$ExecImpl = this$ExecImpl_0;
  }
  Coroutine$ExecImpl$mapAsync$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ExecImpl$mapAsync$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ExecImpl$mapAsync$lambda$lambda.prototype.constructor = Coroutine$ExecImpl$mapAsync$lambda$lambda;
  Coroutine$ExecImpl$mapAsync$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ExecImpl.switchToWrap_t6rg6d$(this.local$closure$switch, ExecImpl$mapAsync$lambda$lambda$lambda(this.local$closure$fn, this.local$closure$t), this);
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
  function ExecImpl$mapAsync$lambda$lambda(closure$switch_0, closure$fn_0, closure$t_0, this$ExecImpl_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ExecImpl$mapAsync$lambda$lambda(closure$switch_0, closure$fn_0, closure$t_0, this$ExecImpl_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function ExecImpl$mapAsync$lambda(this$ExecImpl, closure$switch, closure$fn) {
    return function ($receiver, t) {
      this$ExecImpl.exec(ExecImpl$mapAsync$lambda$lambda(closure$switch, closure$fn, t, this$ExecImpl));
      return Unit;
    };
  }
  function ExecImpl$mapAsync$lambda_0(closure$switch) {
    return function ($receiver) {
      return closure$switch.invoke().item;
    };
  }
  ExecImpl.prototype.mapAsync_m547eu$ = function ($receiver, initial, fn) {
    var switch_0 = this.wrap_mh5how$(initial);
    this.forEach_xwzbbo$($receiver, ExecImpl$mapAsync$lambda(this, switch_0, fn));
    return this.rx_y6x17j$(ExecImpl$mapAsync$lambda_0(switch_0));
  };
  ExecImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExecImpl',
    interfaces: [HasExec, JobKillsImpl]
  };
  function ExecImpl_init(parent, $this) {
    $this = $this || Object.create(ExecImpl.prototype);
    ExecImpl.call($this, Job(parent.coroutineContext));
    return $this;
  }
  function HasView() {
  }
  HasView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasView',
    interfaces: []
  };
  function JobScopeWithView() {
  }
  JobScopeWithView.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'JobScopeWithView',
    interfaces: [HasView, JobScope]
  };
  function ViewImplBase(coroutineContext) {
    ExecImpl.call(this, coroutineContext);
    this.prepared_w2sy8w$_0 = false;
  }
  ViewImplBase.prototype.preparedView_oh3mgy$ = function (prepare) {
    var v = this.rawView;
    if (!this.prepared_w2sy8w$_0) {
      this.prepared_w2sy8w$_0 = true;
      prepare(v);
    }
    return v;
  };
  ViewImplBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewImplBase',
    interfaces: [JobScopeWithView, ExecImpl]
  };
  function ViewImplBase_init(parent, $this) {
    $this = $this || Object.create(ViewImplBase.prototype);
    ViewImplBase.call($this, Job(parent.coroutineContext));
    return $this;
  }
  function ViewImpl(coroutineContext) {
    ViewImplBase.call(this, coroutineContext);
  }
  ViewImpl.prototype.view_qlkmfe$ = function (prepare) {
    return this.preparedView_oh3mgy$(prepare);
  };
  ViewImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewImpl',
    interfaces: [ViewImplBase]
  };
  function ViewImpl_init(parent, $this) {
    $this = $this || Object.create(ViewImpl.prototype);
    ViewImpl.call($this, Job(parent.coroutineContext));
    return $this;
  }
  function UIBase(coroutineContext) {
    ViewImpl.call(this, coroutineContext);
    this.uix_np9rzw$_0 = discardExecutor(this);
  }
  Object.defineProperty(UIBase.prototype, 'uix', {
    get: function () {
      return this.uix_np9rzw$_0;
    }
  });
  UIBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UIBase',
    interfaces: [UixApi, ViewImpl]
  };
  function UIBase_init(parent, $this) {
    $this = $this || Object.create(UIBase.prototype);
    UIBase.call($this, Job(parent.coroutineContext));
    return $this;
  }
  function UIWrap(coroutineContext, rawView) {
    UIBase.call(this, coroutineContext);
    this.rawView_smy7jy$_0 = rawView;
  }
  Object.defineProperty(UIWrap.prototype, 'rawView', {
    get: function () {
      return this.rawView_smy7jy$_0;
    }
  });
  UIWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UIWrap',
    interfaces: [UIBase]
  };
  function UIWrap_init(parent, rawView, $this) {
    $this = $this || Object.create(UIWrap.prototype);
    UIWrap.call($this, Job(parent.coroutineContext), rawView);
    return $this;
  }
  function childUIWrap($receiver, rawView) {
    return UIWrap_init($receiver, rawView);
  }
  function JobSwitch(current, job) {
    JobSwitch$Companion_getInstance();
    this.current_0 = current;
    this.job_0 = job;
  }
  function Coroutine$switchTo_11rb$($this, item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$item = item_0;
  }
  Coroutine$switchTo_11rb$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchTo_11rb$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchTo_11rb$.prototype.constructor = Coroutine$switchTo_11rb$;
  Coroutine$switchTo_11rb$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var it = this.$this.job_0(this.$this.current_0.now);
            this.$this.current_0.now = this.local$item;
            if (it != null) {
              this.state_0 = 2;
              this.result_0 = cancelAndJoin(it, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  JobSwitch.prototype.switchTo_11rb$ = function (item_0, continuation_0, suspended) {
    var instance = new Coroutine$switchTo_11rb$(this, item_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$switchTo_cbny1b$($this, fn_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_0 = void 0;
    this.local$fn = fn_0;
  }
  Coroutine$switchTo_cbny1b$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchTo_cbny1b$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchTo_cbny1b$.prototype.constructor = Coroutine$switchTo_cbny1b$;
  Coroutine$switchTo_cbny1b$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.$this.job_0(this.$this.current_0.now)) != null) {
              this.state_0 = 2;
              this.result_0 = cancelAndJoin(tmp$, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
            continue;
          case 3:
            this.local$tmp$_0 = this.$this.current_0;
            this.state_0 = 4;
            this.result_0 = this.local$fn(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_0.now = this.result_0;
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
  JobSwitch.prototype.switchTo_cbny1b$ = function (fn_0, continuation_0, suspended) {
    var instance = new Coroutine$switchTo_cbny1b$(this, fn_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$JobSwitch$fromRx$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$s = closure$s_0;
  }
  Coroutine$JobSwitch$fromRx$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JobSwitch$fromRx$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JobSwitch$fromRx$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$JobSwitch$fromRx$lambda$lambda$lambda$lambda;
  Coroutine$JobSwitch$fromRx$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$closure$s, this);
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
  function JobSwitch$fromRx$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JobSwitch$fromRx$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JobSwitch$fromRx$lambda$lambda$lambda(closure$fn_0, closure$s_0, this$JobSwitch_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$s = closure$s_0;
    this.local$this$JobSwitch = this$JobSwitch_0;
  }
  Coroutine$JobSwitch$fromRx$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JobSwitch$fromRx$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JobSwitch$fromRx$lambda$lambda$lambda.prototype.constructor = Coroutine$JobSwitch$fromRx$lambda$lambda$lambda;
  Coroutine$JobSwitch$fromRx$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$JobSwitch.switchTo_cbny1b$(JobSwitch$fromRx$lambda$lambda$lambda$lambda(this.local$closure$fn, this.local$closure$s), this);
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
  function JobSwitch$fromRx$lambda$lambda$lambda(closure$fn_0, closure$s_0, this$JobSwitch_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$JobSwitch$fromRx$lambda$lambda$lambda(closure$fn_0, closure$s_0, this$JobSwitch_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function JobSwitch$fromRx$lambda$lambda(closure$exec, closure$fn, this$JobSwitch) {
    return function ($receiver, s) {
      closure$exec(JobSwitch$fromRx$lambda$lambda$lambda(closure$fn, s, this$JobSwitch));
      return Unit;
    };
  }
  JobSwitch.prototype.fromRx_opq78r$ = function (kills, exec, source, fn) {
    kills.forEach_xwzbbo$(source, JobSwitch$fromRx$lambda$lambda(exec, fn, this));
  };
  function Coroutine$remAssign_11rb$($this, item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$item = item_0;
  }
  Coroutine$remAssign_11rb$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$remAssign_11rb$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$remAssign_11rb$.prototype.constructor = Coroutine$remAssign_11rb$;
  Coroutine$remAssign_11rb$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.switchTo_11rb$(this.local$item, this);
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
  JobSwitch.prototype.remAssign_11rb$ = function (item_0, continuation_0, suspended) {
    var instance = new Coroutine$remAssign_11rb$(this, item_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$remAssign_cbny1b$($this, item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$item = item_0;
  }
  Coroutine$remAssign_cbny1b$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$remAssign_cbny1b$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$remAssign_cbny1b$.prototype.constructor = Coroutine$remAssign_cbny1b$;
  Coroutine$remAssign_cbny1b$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.switchTo_cbny1b$(this.local$item, this);
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
  JobSwitch.prototype.remAssign_cbny1b$ = function (item_0, continuation_0, suspended) {
    var instance = new Coroutine$remAssign_cbny1b$(this, item_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function JobSwitch$Companion() {
    JobSwitch$Companion_instance = this;
  }
  function JobSwitch$Companion$of$lambda($receiver) {
    return $receiver.coroutineContext;
  }
  JobSwitch$Companion.prototype.of_qk988x$ = function (initial) {
    return JobSwitch_init(initial, JobSwitch$Companion$of$lambda);
  };
  function JobSwitch$Companion$optional$lambda($receiver) {
    return $receiver != null ? $receiver.coroutineContext : null;
  }
  JobSwitch$Companion.prototype.optional_u16duj$ = function () {
    return JobSwitch_init(null, JobSwitch$Companion$optional$lambda);
  };
  function JobSwitch$Companion$jobWithView$lambda($receiver) {
    return $receiver != null ? $receiver.item.coroutineContext : null;
  }
  JobSwitch$Companion.prototype.jobWithView_nnsuum$ = function (initial) {
    return JobSwitch_init(initial, JobSwitch$Companion$jobWithView$lambda);
  };
  function JobSwitch$Companion$views$wrap$lambda(this$wrap) {
    return function (it) {
      return this$wrap.view_qlkmfe$(it);
    };
  }
  function JobSwitch$Companion$views$wrap($receiver) {
    return new ItemWithViewRx($receiver, JobSwitch$Companion$views$wrap$lambda($receiver));
  }
  JobSwitch$Companion.prototype.views_kdyq44$ = function (kills, initial, fn) {
    var wrap = JobSwitch$Companion$views$wrap;
    var $receiver = this.jobWithView_nnsuum$(wrap(initial));
    runView($receiver, kills, fn);
    return $receiver;
  };
  function JobSwitch$Companion$viewsOpt$wrap$lambda$lambda(this$wrap) {
    return function (it) {
      return this$wrap.view_qlkmfe$(it);
    };
  }
  function JobSwitch$Companion$viewsOpt$wrap($receiver) {
    return $receiver != null ? new ItemWithViewRx($receiver, JobSwitch$Companion$viewsOpt$wrap$lambda$lambda($receiver)) : null;
  }
  JobSwitch$Companion.prototype.viewsOpt_kdyq44$ = function (kills, initial, fn) {
    var wrap = JobSwitch$Companion$viewsOpt$wrap;
    var $receiver = this.jobWithView_nnsuum$(wrap(initial));
    runViewOpt($receiver, kills, fn);
    return $receiver;
  };
  JobSwitch$Companion.prototype.wrap_mh5how$ = function (initial) {
    return this.wrap_2tcjfx$(new JobScopeWithItem(new JobScopeImpl(), initial));
  };
  JobSwitch$Companion.prototype.wrap_30y1fr$ = function () {
    return this.wrap_2tcjfx$(new JobScopeWithItem(new JobScopeImpl(), null));
  };
  function JobSwitch$Companion$wrap$lambda($receiver) {
    return $receiver.job.coroutineContext;
  }
  JobSwitch$Companion.prototype.wrap_2tcjfx$ = function (initial) {
    return JobSwitch_init(initial, JobSwitch$Companion$wrap$lambda);
  };
  JobSwitch$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JobSwitch$Companion_instance = null;
  function JobSwitch$Companion_getInstance() {
    if (JobSwitch$Companion_instance === null) {
      new JobSwitch$Companion();
    }
    return JobSwitch$Companion_instance;
  }
  Object.defineProperty(JobSwitch.prototype, 'now', {
    get: function () {
      return this.current_0.now;
    }
  });
  JobSwitch.prototype.fold_h2yxzx$ = function (ks, z0, fn) {
    return this.current_0.fold_h2yxzx$(ks, z0, fn);
  };
  JobSwitch.prototype.foldKills_ooixq2$ = function (ks, fn) {
    return this.current_0.foldKills_ooixq2$(ks, fn);
  };
  JobSwitch.prototype.foldKills_h4yiec$ = function (ks, z0, fn) {
    return this.current_0.foldKills_h4yiec$(ks, z0, fn);
  };
  JobSwitch.prototype.foldKillsTrigger_ooixq2$ = function (ks, fn) {
    return this.current_0.foldKillsTrigger_ooixq2$(ks, fn);
  };
  JobSwitch.prototype.foldLater_94stmo$ = function (ks, z0, fn) {
    return this.current_0.foldLater_94stmo$(ks, z0, fn);
  };
  JobSwitch.prototype.forEach_aaomyj$ = function (ks, fn) {
    return this.current_0.forEach_aaomyj$(ks, fn);
  };
  JobSwitch.prototype.forEach_vlp88o$ = function (ks, killOrder, fn) {
    return this.current_0.forEach_vlp88o$(ks, killOrder, fn);
  };
  JobSwitch.prototype.forEachLater_cksb0z$$default = function (ks, killStart, killOrder, fn) {
    return this.current_0.forEachLater_cksb0z$$default(ks, killStart, killOrder, fn);
  };
  JobSwitch.prototype.invoke = function () {
    return this.current_0.invoke();
  };
  JobSwitch.prototype.map_492dlc$ = function (ks, fn) {
    return this.current_0.map_492dlc$(ks, fn);
  };
  JobSwitch.prototype.off_sysl1e$ = function (ks, offFn) {
    return this.current_0.off_sysl1e$(ks, offFn);
  };
  JobSwitch.prototype.onChange_naxq84$ = function (ks, fn) {
    return this.current_0.onChange_naxq84$(ks, fn);
  };
  JobSwitch.prototype.onOff_nf0d6g$ = function (ks, on, off) {
    return this.current_0.onOff_nf0d6g$(ks, on, off);
  };
  JobSwitch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobSwitch',
    interfaces: [RxIface]
  };
  function JobSwitch_init(initial, job, $this) {
    $this = $this || Object.create(JobSwitch.prototype);
    JobSwitch.call($this, new Var(initial), job);
    return $this;
  }
  function Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$s = closure$s_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$$receiver, this.local$closure$s, this);
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
  function fromRx$lambda$lambda$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0, this$_1, this$_2, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$s = closure$s_0;
    this.local$this$ = this$_1;
    this.local$this$_0 = this$_2;
  }
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda;
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.switchToWrap_t6rg6d$(this.local$this$_0, fromRx$lambda$lambda$lambda$lambda$lambda$lambda(this.local$closure$fn, this.local$closure$s), this);
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
  function fromRx$lambda$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0, this$_1, this$_2) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0, this$_1, this$_2, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function fromRx$lambda$lambda$lambda$lambda(closure$exec, closure$fn, this$, this$_0) {
    return function ($receiver, s) {
      closure$exec(fromRx$lambda$lambda$lambda$lambda$lambda(closure$fn, s, this$, this$_0));
      return Unit;
    };
  }
  function fromRx($receiver, job, kills, exec, source, fn) {
    kills.forEach_xwzbbo$(source, fromRx$lambda$lambda$lambda$lambda(exec, fn, job, $receiver));
    return $receiver;
  }
  function switchTo($receiver, item, continuation) {
    return $receiver.switchTo_11rb$(item != null ? ItemWithViewRx$Companion_getInstance().hasView_tmlb55$(item) : null, continuation);
  }
  function Coroutine$switchTo$lambda(closure$item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
  }
  Coroutine$switchTo$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchTo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchTo$lambda.prototype.constructor = Coroutine$switchTo$lambda;
  Coroutine$switchTo$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$closure$item(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) != null ? ItemWithViewRx$Companion_getInstance().hasView_tmlb55$(tmp$) : null;
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
  function switchTo$lambda(closure$item_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$switchTo$lambda(closure$item_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function switchTo_0($receiver, item, continuation) {
    return $receiver.switchTo_cbny1b$(switchTo$lambda(item), continuation);
  }
  function Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda_0(closure$fn_0, closure$s_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$s = closure$s_0;
  }
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda_0.prototype.constructor = Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda_0;
  Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$closure$fn(this.local$closure$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) != null ? ItemWithViewRx$Companion_getInstance().hasView_tmlb55$(tmp$) : null;
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
  function fromRx$lambda$lambda$lambda$lambda$lambda_0(closure$fn_0, closure$s_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$fromRx$lambda$lambda$lambda$lambda$lambda_0(closure$fn_0, closure$s_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$fromRx$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0, this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$fn = closure$fn_0;
    this.local$closure$s = closure$s_0;
    this.local$this$ = this$_0;
  }
  Coroutine$fromRx$lambda$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$fromRx$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$fromRx$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$fromRx$lambda$lambda$lambda$lambda;
  Coroutine$fromRx$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.switchTo_cbny1b$(fromRx$lambda$lambda$lambda$lambda$lambda_0(this.local$closure$fn, this.local$closure$s), this);
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
  function fromRx$lambda$lambda$lambda$lambda_0(closure$fn_0, closure$s_0, this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$fromRx$lambda$lambda$lambda$lambda(closure$fn_0, closure$s_0, this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function fromRx$lambda$lambda$lambda(closure$exec, closure$fn, this$) {
    return function ($receiver, s) {
      closure$exec(fromRx$lambda$lambda$lambda$lambda_0(closure$fn, s, this$));
      return Unit;
    };
  }
  function fromRx_0($receiver, kills, exec, source, fn) {
    kills.forEach_xwzbbo$(source, fromRx$lambda$lambda$lambda(exec, fn, $receiver));
    return $receiver;
  }
  function JobScopeWithItem(job, item) {
    this.job = job;
    this.item = item;
  }
  JobScopeWithItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JobScopeWithItem',
    interfaces: []
  };
  function switchToView$lambda(closure$item) {
    return function (it) {
      return closure$item.view_qlkmfe$(it);
    };
  }
  function Coroutine$switchToView($receiver_0, item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$item = item_0;
  }
  Coroutine$switchToView.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchToView.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchToView.prototype.constructor = Coroutine$switchToView;
  Coroutine$switchToView.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.switchTo_11rb$(new ItemWithViewRx(this.local$item, switchToView$lambda(this.local$item)), this);
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
  function switchToView($receiver_0, item_0, continuation_0, suspended) {
    var instance = new Coroutine$switchToView($receiver_0, item_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function switchToView$lambda$lambda$lambda(closure$i) {
    return function (it) {
      return closure$i.view_qlkmfe$(it);
    };
  }
  function Coroutine$switchToView$lambda(closure$item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
  }
  Coroutine$switchToView$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchToView$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchToView$lambda.prototype.constructor = Coroutine$switchToView$lambda;
  Coroutine$switchToView$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$item(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var i = this.result_0;
            return new ItemWithViewRx(i, switchToView$lambda$lambda$lambda(i));
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
  function switchToView$lambda_0(closure$item_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$switchToView$lambda(closure$item_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$switchToView_0($receiver_0, item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$item = item_0;
  }
  Coroutine$switchToView_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchToView_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchToView_0.prototype.constructor = Coroutine$switchToView_0;
  Coroutine$switchToView_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.switchTo_cbny1b$(switchToView$lambda_0(this.local$item), this);
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
  function switchToView_0($receiver_0, item_0, continuation_0, suspended) {
    var instance = new Coroutine$switchToView_0($receiver_0, item_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function switchToView$lambda$lambda$lambda_0(closure$i) {
    return function (it) {
      return closure$i.view_qlkmfe$(it);
    };
  }
  function Coroutine$switchToView$lambda_0(closure$item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$item = closure$item_0;
  }
  Coroutine$switchToView$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchToView$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchToView$lambda_0.prototype.constructor = Coroutine$switchToView$lambda_0;
  Coroutine$switchToView$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$item(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var i = this.result_0;
            return new ItemWithViewRx(i, switchToView$lambda$lambda$lambda_0(i));
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
  function switchToView$lambda_1(closure$item_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$switchToView$lambda_0(closure$item_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$switchToView_1($receiver_0, item_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$item = item_0;
  }
  Coroutine$switchToView_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$switchToView_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$switchToView_1.prototype.constructor = Coroutine$switchToView_1;
  Coroutine$switchToView_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.switchTo_cbny1b$(switchToView$lambda_1(this.local$item), this);
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
  function switchToView_1($receiver_0, item_0, continuation_0, suspended) {
    var instance = new Coroutine$switchToView_1($receiver_0, item_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function runViewOpt$lambda$lambda(this$runViewOpt, closure$fn) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this$runViewOpt.invoke()) != null ? tmp$.view : null) != null ? tmp$_0(closure$fn.prepareOrNull) : null;
    };
  }
  function get_ignoreThis$lambda(this$ignoreThis) {
    return function ($receiver, i) {
      return this$ignoreThis(i);
    };
  }
  function runViewOpt($receiver, kills, fn) {
    kills.forEach_xwzbbo$(kills.rx_y6x17j$(runViewOpt$lambda$lambda($receiver, fn)), get_ignoreThis$lambda(fn.assign));
  }
  function runView$lambda$lambda(this$runView, closure$hole) {
    return function ($receiver) {
      return this$runView.invoke().view(closure$hole.prepareOrNull);
    };
  }
  function runView($receiver, kills, hole) {
    kills.forEach_xwzbbo$(kills.rx_y6x17j$(runView$lambda$lambda($receiver, hole)), get_ignoreThis$lambda(hole.assign));
  }
  function ItemWithViewRx(item, view) {
    ItemWithViewRx$Companion_getInstance();
    this.item = item;
    this.view = view;
  }
  function ItemWithViewRx$Companion() {
    ItemWithViewRx$Companion_instance = this;
  }
  function ItemWithViewRx$Companion$hasView$lambda(closure$view) {
    return function (it) {
      return closure$view.view_qlkmfe$(it);
    };
  }
  ItemWithViewRx$Companion.prototype.hasView_38vkk7$ = function (item, view) {
    return new ItemWithViewRx(item, ItemWithViewRx$Companion$hasView$lambda(view));
  };
  function ItemWithViewRx$Companion$hasView$lambda_0(closure$item) {
    return function (it) {
      return closure$item.view_qlkmfe$(it);
    };
  }
  ItemWithViewRx$Companion.prototype.hasView_tmlb55$ = function (item) {
    return new ItemWithViewRx(item, ItemWithViewRx$Companion$hasView$lambda_0(item));
  };
  ItemWithViewRx$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ItemWithViewRx$Companion_instance = null;
  function ItemWithViewRx$Companion_getInstance() {
    if (ItemWithViewRx$Companion_instance === null) {
      new ItemWithViewRx$Companion();
    }
    return ItemWithViewRx$Companion_instance;
  }
  ItemWithViewRx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ItemWithViewRx',
    interfaces: []
  };
  function Status() {
    ScreenWrap.call(this);
    this.node_7j9221$_0 = invoke(get_div(document), Status$node$lambda);
    this.text = invoke(get_div(this.node), Status$text$lambda);
  }
  Object.defineProperty(Status.prototype, 'node', {
    get: function () {
      return this.node_7j9221$_0;
    }
  });
  function Status$get_Status$global$lambda() {
    return globalStatus.invoke();
  }
  Status.prototype.get_global_i7n0b6$ = function ($receiver) {
    $receiver.remAssign_7fncnf$(this.text, Status$get_Status$global$lambda);
  };
  function Status$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_dFlex($receiver_0);
    get_flexColumn($receiver_0);
    get_justifyContentEnd($receiver_0);
    get_alignItemsCenter($receiver_0);
    return Unit;
  }
  function Status$text$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    get_textMuted($receiver_0);
    return Unit;
  }
  Status.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Status',
    interfaces: [ScreenWrap]
  };
  function Toasts() {
    ScreenWrap.call(this);
    this.node_275lap$_0 = invoke(get_div(document), Toasts$node$lambda);
  }
  Object.defineProperty(Toasts.prototype, 'node', {
    get: function () {
      return this.node_275lap$_0;
    }
  });
  Object.defineProperty(Toasts.prototype, 'toast', {
    get: function () {
      return this.get_append_eqx477$(new Toast());
    }
  });
  function Toasts$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_dFlex($receiver_0);
    get_flexColumn($receiver_0);
    get_alignItemsEnd($receiver_0);
    get_justifyContentStart($receiver_0);
    get_pointerEventsNone($receiver_0);
    get_p1($receiver_0);
    return Unit;
  }
  Toasts.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Toasts',
    interfaces: [ScreenWrap]
  };
  function Toast() {
    ScreenWrap.call(this);
    this.node_wjancm$_0 = invoke(get_a(document), Toast$node$lambda);
    this.slots_0 = new Toast$slots$ObjectLiteral(this);
    this.warning_i9ka8w$_0 = lazy(Toast$warning$lambda(this));
    this.danger_2avx9x$_0 = lazy(Toast$danger$lambda(this));
    this.text_wmfg8b$_0 = lazy(Toast$text$lambda(this));
    this.close_8xngec$_0 = lazy(Toast$close$lambda(this));
  }
  Object.defineProperty(Toast.prototype, 'node', {
    get: function () {
      return this.node_wjancm$_0;
    }
  });
  Object.defineProperty(Toast.prototype, 'warning', {
    get: function () {
      return this.warning_i9ka8w$_0.value;
    }
  });
  Object.defineProperty(Toast.prototype, 'danger', {
    get: function () {
      return this.danger_2avx9x$_0.value;
    }
  });
  Object.defineProperty(Toast.prototype, 'text', {
    get: function () {
      return this.text_wmfg8b$_0.value;
    }
  });
  Object.defineProperty(Toast.prototype, 'close', {
    get: function () {
      return this.close_8xngec$_0.value;
    }
  });
  Toast.prototype.warning_61zpoe$ = function (txt) {
    this.warning;
    this.close;
    remAssign(this.text, txt);
  };
  Toast.prototype.danger_61zpoe$ = function (txt) {
    this.danger;
    this.close;
    remAssign(this.text, txt);
  };
  function Toast$node$lambda$lambda(this$) {
    return function (it) {
      removeFromParent(this$);
      return Unit;
    };
  }
  function Toast$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_alert($receiver_0);
    get_pointerEventsAll($receiver_0);
    get_textDecorationNone($receiver_0);
    get_hoverColorInherit($receiver_0);
    get_m1($receiver_0);
    get_p1($receiver_0);
    $receiver.href = '#';
    clickEvent($receiver, Toast$node$lambda$lambda($receiver));
    return Unit;
  }
  function Toast$slots$ObjectLiteral(this$Toast) {
    this.text = this$Toast.slot;
    this.close = this$Toast.slot;
  }
  Toast$slots$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  function Toast$warning$lambda(this$Toast) {
    return function () {
      return get_alertWarning(this$Toast.cls);
    };
  }
  function Toast$danger$lambda(this$Toast) {
    return function () {
      return get_alertDanger(this$Toast.cls);
    };
  }
  function Toast$text$lambda$lambda($receiver) {
    get_m1(get_cls($receiver));
    return Unit;
  }
  function Toast$text$lambda(this$Toast) {
    return function () {
      return setTo_1(invoke(get_span(document), Toast$text$lambda$lambda), this$Toast.slots_0.text);
    };
  }
  function Toast$close$lambda$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_m1($receiver_0);
    var $receiver_1 = get_fa($receiver_0);
    get_sm($receiver_1);
    get_times($receiver_1);
    return Unit;
  }
  function Toast$close$lambda(this$Toast) {
    return function () {
      return setTo_1(invoke(get_span(document), Toast$close$lambda$lambda), this$Toast.slots_0.close);
    };
  }
  Toast.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Toast',
    interfaces: [ScreenWrap]
  };
  function TopAndContent(topbar, content) {
    TopAndContent$Companion_getInstance();
    this.topbar = topbar;
    this.content = content;
  }
  function TopAndContent$Companion() {
    TopAndContent$Companion_instance = this;
  }
  Object.defineProperty(TopAndContent$Companion.prototype, 'hourglass', {
    get: function () {
      return new TopAndContent(null, factory.hourglass.node);
    }
  });
  TopAndContent$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TopAndContent$Companion_instance = null;
  function TopAndContent$Companion_getInstance() {
    if (TopAndContent$Companion_instance === null) {
      new TopAndContent$Companion();
    }
    return TopAndContent$Companion_instance;
  }
  TopAndContent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TopAndContent',
    interfaces: []
  };
  function HourglassView(parent) {
    ViewImpl_init(parent, this);
    this.rawView_h9pcs9$_0 = TopAndContent$Companion_getInstance().hourglass;
  }
  Object.defineProperty(HourglassView.prototype, 'rawView', {
    get: function () {
      return this.rawView_h9pcs9$_0;
    }
  });
  HourglassView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HourglassView',
    interfaces: [ViewImpl]
  };
  function Topbar() {
    ScreenWrap.call(this);
    this.node_to2rjx$_0 = row_0(document, Topbar$node$lambda);
    this.beforeSlot_0 = this.slot;
    this.tabsSlot_0 = this.slot;
    this.afterSlot_0 = this.slot;
    this.before_0 = setTo_1(row_0(document, Topbar$before$lambda), this.beforeSlot_0);
    this.after_2m5zrh$_0 = lazy(Topbar$after$lambda(this));
    this.slots = new Topbar$Slots(this);
    this.left_tpcorm$_0 = lazy(Topbar$left$lambda(this));
    this.middle = setTo_1(row_0(document, Topbar$middle$lambda), this.slots.middle);
    this.title_6fccdz$_0 = lazy(Topbar$title$lambda(this));
    this.tabs_tl0yyh$_0 = lazy(Topbar$tabs$lambda(this));
  }
  Object.defineProperty(Topbar.prototype, 'node', {
    get: function () {
      return this.node_to2rjx$_0;
    }
  });
  Object.defineProperty(Topbar.prototype, 'after_0', {
    get: function () {
      return this.after_2m5zrh$_0.value;
    }
  });
  function Topbar$Slots($outer) {
    this.$outer = $outer;
    this.left = get_slots(this.$outer.before_0);
    this.middle = get_widget(this.$outer.before_0);
    this.tabs = this.$outer.slot;
    this.right = get_slotholes(this.$outer.after_0);
  }
  Topbar$Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: []
  };
  Object.defineProperty(Topbar.prototype, 'left', {
    get: function () {
      return this.left_tpcorm$_0.value;
    }
  });
  Object.defineProperty(Topbar.prototype, 'title', {
    get: function () {
      return this.title_6fccdz$_0.value;
    }
  });
  Object.defineProperty(Topbar.prototype, 'tabs', {
    get: function () {
      return this.tabs_tl0yyh$_0.value;
    }
  });
  Object.defineProperty(Topbar.prototype, 'right', {
    get: function () {
      return get_insert_0(this.slots.right.slot);
    }
  });
  function Topbar$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    flexFixedSize($receiver_0);
    get_bgLight($receiver_0);
    return Unit;
  }
  function Topbar$before$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_flexGrow1($receiver_0);
    get_borderBottom($receiver_0);
    return Unit;
  }
  function Topbar$after$lambda$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    flexFixedSize($receiver_0);
    get_borderBottom($receiver_0);
    return Unit;
  }
  function Topbar$after$lambda(this$Topbar) {
    return function () {
      return row_0(this$Topbar.node, Topbar$after$lambda$lambda);
    };
  }
  function Topbar$left$lambda(this$Topbar) {
    return function () {
      return get_insert_0(this$Topbar.slots.left.slot);
    };
  }
  function Topbar$middle$lambda($receiver) {
    get_flexGrow1(get_cls($receiver));
    return Unit;
  }
  function Topbar$title$lambda$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_alignSelfCenter($receiver_0);
    get_m1($receiver_0);
    return Unit;
  }
  function Topbar$title$lambda(this$Topbar) {
    return function () {
      return invoke(get_h5(this$Topbar.middle), Topbar$title$lambda$lambda);
    };
  }
  function Topbar$tabs$lambda(this$Topbar) {
    return function () {
      return setTo(new Tabs(), this$Topbar.slots.tabs);
    };
  }
  Topbar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Topbar',
    interfaces: [ScreenWrap]
  };
  function Tabs() {
    ScreenWrap.call(this);
    this.node_j5lu1p$_0 = invoke(get_div(document), Tabs$node$lambda);
    this.active = new Var(null);
  }
  Object.defineProperty(Tabs.prototype, 'node', {
    get: function () {
      return this.node_j5lu1p$_0;
    }
  });
  Object.defineProperty(Tabs.prototype, 'tab', {
    get: function () {
      return setTo(new Tab(this), this.slot);
    }
  });
  function Tabs$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_navTabs($receiver_0);
    row($receiver_0);
    get_px1($receiver_0);
    return Unit;
  }
  Tabs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tabs',
    interfaces: [ScreenWrap]
  };
  function Tab(owner) {
    ScreenWrap.call(this);
    this.owner = owner;
    this.$delegate_yp3kq$_0 = killable.HasNoKill;
    this.isActive = this.rx_y6x17j$(Tab$isActive$lambda(this));
    this.node_i3klb8$_0 = invoke(get_div(document), Tab$node$lambda);
    this.anchor = invoke(get_a(this.node), Tab$anchor$lambda(this));
    var $receiver = new Icon(this.anchor);
    $receiver.fw;
    this.icon = $receiver;
  }
  Object.defineProperty(Tab.prototype, 'node', {
    get: function () {
      return this.node_i3klb8$_0;
    }
  });
  Tab.prototype.activate = function () {
    this.owner.active.remAssign_11rb$(this);
  };
  Tab.prototype.click_4mlwwe$ = function (deps, action) {
    click(this.anchor, deps, action);
  };
  function Coroutine$Tab$clickActivate$lambda(this$Tab_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Tab = this$Tab_0;
  }
  Coroutine$Tab$clickActivate$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Tab$clickActivate$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Tab$clickActivate$lambda.prototype.constructor = Coroutine$Tab$clickActivate$lambda;
  Coroutine$Tab$clickActivate$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$Tab.activate(), Unit;
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
  function Tab$clickActivate$lambda(this$Tab_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Tab$clickActivate$lambda(this$Tab_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  Tab.prototype.clickActivate_tkkuc9$ = function (deps) {
    this.click_4mlwwe$(deps, Tab$clickActivate$lambda(this));
  };
  Object.defineProperty(Tab.prototype, 'kills', {
    get: function () {
      return this.$delegate_yp3kq$_0.kills;
    }
  });
  Tab.prototype.rx_y6x17j$ = function (fn) {
    return this.$delegate_yp3kq$_0.rx_y6x17j$(fn);
  };
  Tab.prototype.rx_46ic4w$ = function (killFirst, fn) {
    return this.$delegate_yp3kq$_0.rx_46ic4w$(killFirst, fn);
  };
  Tab.prototype.containsRx_1w65cx$ = function ($receiver, value) {
    return this.$delegate_yp3kq$_0.containsRx_1w65cx$($receiver, value);
  };
  Tab.prototype.filtered_tnde95$ = function ($receiver, fn) {
    return this.$delegate_yp3kq$_0.filtered_tnde95$($receiver, fn);
  };
  Tab.prototype.forEach_xwzbbo$ = function ($receiver, fn) {
    return this.$delegate_yp3kq$_0.forEach_xwzbbo$($receiver, fn);
  };
  Tab.prototype.forEach_35q7bt$ = function ($receiver, killOrder, fn) {
    return this.$delegate_yp3kq$_0.forEach_35q7bt$($receiver, killOrder, fn);
  };
  Tab.prototype.map_1mq1ue$ = function ($receiver, fn) {
    return this.$delegate_yp3kq$_0.map_1mq1ue$($receiver, fn);
  };
  Tab.prototype.map_jtxi0h$ = function ($receiver, fn) {
    return this.$delegate_yp3kq$_0.map_jtxi0h$($receiver, fn);
  };
  Tab.prototype.onChange_rlu5c6$ = function ($receiver, fn) {
    return this.$delegate_yp3kq$_0.onChange_rlu5c6$($receiver, fn);
  };
  Tab.prototype.process_7xi3v7$ = function ($receiver, fn) {
    return this.$delegate_yp3kq$_0.process_7xi3v7$($receiver, fn);
  };
  Tab.prototype.remAssign_7fncnf$ = function ($receiver, fn) {
    return this.$delegate_yp3kq$_0.remAssign_7fncnf$($receiver, fn);
  };
  Tab.prototype.rxClass_c5yvvx$ = function ($receiver, fn) {
    return this.$delegate_yp3kq$_0.rxClass_c5yvvx$($receiver, fn);
  };
  Tab.prototype.rxClass_6sflyw$ = function ($receiver, stl, fn) {
    return this.$delegate_yp3kq$_0.rxClass_6sflyw$($receiver, stl, fn);
  };
  Tab.prototype.toChannelLater_z5dyp2$ = function ($receiver) {
    return this.$delegate_yp3kq$_0.toChannelLater_z5dyp2$($receiver);
  };
  Tab.prototype.toRxSet_jr4bl4$ = function ($receiver) {
    return this.$delegate_yp3kq$_0.toRxSet_jr4bl4$($receiver);
  };
  function Tab$isActive$lambda(this$Tab) {
    return function ($receiver) {
      return equals(this$Tab.owner.active.invoke(), this$Tab);
    };
  }
  function Tab$node$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_mt1($receiver_0);
    get_navItem($receiver_0);
    get_dFlex($receiver_0);
    return Unit;
  }
  function Tab$anchor$lambda$lambda$lambda(this$Tab) {
    return function ($receiver) {
      return this$Tab.isActive.invoke();
    };
  }
  function Tab$anchor$lambda(this$Tab) {
    return function ($receiver) {
      var $receiver_0 = get_cls($receiver);
      var this$Tab_0 = this$Tab;
      get_navLink($receiver_0);
      get_px2($receiver_0);
      this$Tab_0.rxClass_6sflyw$($receiver, get_active($receiver_0), Tab$anchor$lambda$lambda$lambda(this$Tab_0));
      $receiver.href = '#';
      return Unit;
    };
  }
  Tab.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tab',
    interfaces: [KillsApi, ScreenWrap]
  };
  function HasInbox() {
  }
  HasInbox.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasInbox',
    interfaces: []
  };
  function InboxWrap(inbox) {
    this.inbox_akyefh$_0 = inbox;
  }
  Object.defineProperty(InboxWrap.prototype, 'inbox', {
    get: function () {
      return this.inbox_akyefh$_0;
    }
  });
  InboxWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InboxWrap',
    interfaces: [HasInbox]
  };
  function Msg() {
  }
  Msg.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Msg',
    interfaces: []
  };
  function Envelope(marker, msg) {
    this.marker = marker;
    this.msg = msg;
  }
  Envelope.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Envelope',
    interfaces: []
  };
  function wrap($receiver, msg) {
    return new Envelope($receiver, msg);
  }
  function invoke_0($receiver, msg) {
    return wrap($receiver, msg);
  }
  var SlotsAttribute;
  function get_slotholes($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver[SlotsAttribute]) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = new Slots(new SlotsOwner$NodeRef($receiver), PrevRef$Companion_getInstance().of_asww5c$($receiver.lastChild));
      $receiver[SlotsAttribute] = $receiver_0;
      tmp$_0 = $receiver_0;
    }
    return tmp$_0;
  }
  function rx$lambda_1(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function rx$lambda_2(this$rx) {
    return function ($receiver, it) {
      this$rx(it);
      return Unit;
    };
  }
  function rx_1($receiver, deps, fn) {
    Rx_init(deps.kills, rx$lambda_1(fn)).forEach_aaomyj$(deps.kills, rx$lambda_2($receiver));
  }
  function get_append$lambda(closure$n, this$append) {
    return function (it) {
      var tmp$;
      if (it == null) {
        (tmp$ = closure$n.v) != null ? (removeFromParent(tmp$), Unit) : null;
        closure$n.v = null;
      }
       else {
        this$append.appendChild(it);
        closure$n.v = it;
      }
      return Unit;
    };
  }
  function get_append($receiver) {
    var n = {v: null};
    return get_append$lambda(n, $receiver);
  }
  function SlotsOwner(node) {
    this.node = node;
  }
  function SlotsOwner$NodeRef(node) {
    SlotsOwner.call(this, node);
  }
  SlotsOwner$NodeRef.prototype.lastRef_2t7b96$ = function (slots) {
    var tmp$;
    var lc = this.node.lastChild;
    if (lc == null || equals(lc, slots.lastNode))
      tmp$ = lastOrNull(slots.list_8be2vx$);
    else
      tmp$ = null;
    return tmp$ != null ? tmp$ : PrevRef$Companion_getInstance().of_asww5c$(lc);
  };
  SlotsOwner$NodeRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeRef',
    interfaces: [SlotsOwner]
  };
  function SlotsOwner$SlotsRef(slots) {
    SlotsOwner.call(this, slots.owner_8be2vx$.node);
    this.slots = slots;
  }
  SlotsOwner$SlotsRef.prototype.lastRef_2t7b96$ = function (slots) {
    var tmp$;
    return (tmp$ = lastOrNull(slots.list_8be2vx$)) != null ? tmp$ : slots.prev;
  };
  SlotsOwner$SlotsRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotsRef',
    interfaces: [SlotsOwner]
  };
  SlotsOwner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotsOwner',
    interfaces: []
  };
  function SlotHoles() {
  }
  SlotHoles.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SlotHoles',
    interfaces: [InvokeApply]
  };
  function PrevRef() {
    PrevRef$Companion_getInstance();
  }
  function PrevRef$First() {
    PrevRef$First_instance = this;
    PrevRef.call(this);
    this.lastNode_k2t9r9$_0 = null;
  }
  Object.defineProperty(PrevRef$First.prototype, 'lastNode', {
    get: function () {
      return this.lastNode_k2t9r9$_0;
    }
  });
  PrevRef$First.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'First',
    interfaces: [PrevRef]
  };
  var PrevRef$First_instance = null;
  function PrevRef$First_getInstance() {
    if (PrevRef$First_instance === null) {
      new PrevRef$First();
    }
    return PrevRef$First_instance;
  }
  function PrevRef$NodeRef(lastNode) {
    PrevRef.call(this);
    this.lastNode_qgkppg$_0 = lastNode;
  }
  Object.defineProperty(PrevRef$NodeRef.prototype, 'lastNode', {
    get: function () {
      return this.lastNode_qgkppg$_0;
    }
  });
  PrevRef$NodeRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeRef',
    interfaces: [PrevRef]
  };
  function PrevRef$Companion() {
    PrevRef$Companion_instance = this;
  }
  PrevRef$Companion.prototype.of_asww5c$ = function (node) {
    var tmp$;
    return (tmp$ = node != null ? new PrevRef$NodeRef(node) : null) != null ? tmp$ : PrevRef$First_getInstance();
  };
  PrevRef$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PrevRef$Companion_instance = null;
  function PrevRef$Companion_getInstance() {
    if (PrevRef$Companion_instance === null) {
      new PrevRef$Companion();
    }
    return PrevRef$Companion_instance;
  }
  PrevRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrevRef',
    interfaces: []
  };
  function SlotsElement() {
    PrevRef.call(this);
  }
  Object.defineProperty(SlotsElement.prototype, 'prevNode', {
    get: function () {
      return this.prev.lastNode;
    }
  });
  SlotsElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotsElement',
    interfaces: [PrevRef]
  };
  function Slots(owner, prev) {
    SlotsElement.call(this);
    this.owner_8be2vx$ = owner;
    this.prev_muj583$_0 = prev;
    this.list_8be2vx$ = ArrayList_init();
  }
  Object.defineProperty(Slots.prototype, 'prev', {
    get: function () {
      return this.prev_muj583$_0;
    }
  });
  Object.defineProperty(Slots.prototype, 'lastRef', {
    get: function () {
      return this.owner_8be2vx$.lastRef_2t7b96$(this);
    }
  });
  Object.defineProperty(Slots.prototype, 'lastNode', {
    get: function () {
      var tmp$;
      return ((tmp$ = lastOrNull(this.list_8be2vx$)) != null ? tmp$ : this.prev).lastNode;
    }
  });
  function Slots$SlotItem(slots, prev) {
    SlotsElement.call(this);
    this.slots = slots;
    this.prev_6xvwvy$_0 = prev;
    this.current = null;
    this.setter = Slots$SlotItem$setter$lambda(this);
  }
  Object.defineProperty(Slots$SlotItem.prototype, 'prev', {
    get: function () {
      return this.prev_6xvwvy$_0;
    }
  });
  Object.defineProperty(Slots$SlotItem.prototype, 'lastNode', {
    get: function () {
      var tmp$;
      return (tmp$ = this.current) != null ? tmp$ : this.prev.lastNode;
    }
  });
  function Slots$SlotItem$setter$lambda(this$SlotItem) {
    return function (n) {
      var curr = this$SlotItem.current;
      if (!equals(curr, n))
        if (curr == null && n != null)
          insertAfter(this$SlotItem.slots.owner_8be2vx$.node, n, this$SlotItem.prevNode);
        else if (curr != null && n == null)
          removeFromParent(curr);
        else if (curr != null && n != null)
          replaceWith(curr, n);
      this$SlotItem.current = n;
      return Unit;
    };
  }
  Slots$SlotItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotItem',
    interfaces: [SlotsElement]
  };
  Object.defineProperty(Slots.prototype, 'slot', {
    get: function () {
      var $receiver = new Slots$SlotItem(this, this.lastRef);
      this.list_8be2vx$.add_11rb$($receiver);
      return $receiver.setter;
    }
  });
  Object.defineProperty(Slots.prototype, 'slots', {
    get: function () {
      var $receiver = new Slots(new SlotsOwner$SlotsRef(this), this.lastRef);
      this.list_8be2vx$.add_11rb$($receiver);
      return $receiver;
    }
  });
  Slots.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slots',
    interfaces: [SlotHoles, SlotsElement]
  };
  function get_widget($receiver) {
    return get_slotholes($receiver).slot;
  }
  function get_hole($receiver) {
    return get_hole_0(get_slotholes($receiver).slot);
  }
  function get_slots($receiver) {
    return get_slotholes($receiver).slots;
  }
  function get_insert$lambda(this$insert) {
    return function ($receiver) {
      if ($receiver != null) {
        this$insert.appendChild($receiver);
      }
      return Unit;
    };
  }
  function get_insert($receiver) {
    return (new Factory()).with_lx79ro$(get_insert$lambda($receiver));
  }
  function widget($receiver, ps) {
    ps.slot(get_widget($receiver));
  }
  function Widget(node, slot) {
    this.node = node;
    this.slot = slot;
  }
  Widget.prototype.remAssign_asww5c$ = function (n) {
    this.node(n);
  };
  Widget.prototype.remAssign_m66ltr$ = function (n) {
    this.node(n.node);
  };
  Widget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Widget',
    interfaces: []
  };
  function widget$lambda(closure$slot, closure$current) {
    return function (n) {
      var s = closure$slot.v;
      if (s == null) {
        closure$current.v = n;
      }
       else {
        s(n);
      }
      return Unit;
    };
  }
  function widget$lambda_0(closure$slot, closure$current) {
    return function (s) {
      if (!(closure$slot.v == null)) {
        var message = 'Widget already initialized!';
        throw IllegalArgumentException_init(message.toString());
      }
      closure$slot.v = s;
      s(closure$current.v);
      closure$current.v = null;
      return Unit;
    };
  }
  function widget_0(initial) {
    if (initial === void 0)
      initial = null;
    var slot = {v: null};
    var current = {v: initial};
    return new Widget(widget$lambda(slot, current), widget$lambda_0(slot, current));
  }
  function HasNode() {
  }
  Object.defineProperty(HasNode.prototype, 'slot', {
    get: function () {
      return get_widget(this.node);
    }
  });
  Object.defineProperty(HasNode.prototype, 'hole', {
    get: function () {
      return get_hole(this.node);
    }
  });
  Object.defineProperty(HasNode.prototype, 'insert', {
    get: function () {
      return get_insert_0(this.slot);
    }
  });
  HasNode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasNode',
    interfaces: []
  };
  function NodeWrap(node) {
    this.node_ccc4mn$_0 = node;
  }
  Object.defineProperty(NodeWrap.prototype, 'node', {
    get: function () {
      return this.node_ccc4mn$_0;
    }
  });
  NodeWrap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeWrap',
    interfaces: [HasNode]
  };
  function HasElement() {
  }
  Object.defineProperty(HasElement.prototype, 'cls', {
    get: function () {
      return get_cls(this.node);
    }
  });
  HasElement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasElement',
    interfaces: [HasNode]
  };
  function HasHTMLElement() {
  }
  HasHTMLElement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'HasHTMLElement',
    interfaces: [HasElement]
  };
  function appendTo($receiver, parent) {
    parent.appendChild($receiver.node);
    return $receiver;
  }
  function setTo_0($receiver, parent) {
    parent($receiver.node);
    return $receiver;
  }
  function setTo_1($receiver, parent) {
    parent($receiver);
    return $receiver;
  }
  function HoleT(prepare, assign) {
    this.prepare = prepare;
    this.assign = assign;
    this.prepareOrNull = HoleT$prepareOrNull$lambda(this);
  }
  function HoleT$with$lambda(this$HoleT, closure$pr) {
    return function ($receiver) {
      this$HoleT.prepare($receiver);
      closure$pr($receiver);
      return Unit;
    };
  }
  HoleT.prototype.with_qlkmfe$ = function (pr) {
    return new HoleT(HoleT$with$lambda(this, pr), this.assign);
  };
  HoleT.prototype.remAssign_11rb$ = function (node) {
    this.assign(node);
  };
  function HoleT$prepareOrNull$lambda(this$HoleT) {
    return function ($receiver) {
      if ($receiver != null) {
        this$HoleT.prepare($receiver);
      }
      return Unit;
    };
  }
  HoleT.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HoleT',
    interfaces: []
  };
  function get_insert$lambda_0(this$insert) {
    return function ($receiver) {
      this$insert($receiver);
      return Unit;
    };
  }
  function get_insert$lambda_1(this$insert) {
    return function ($receiver) {
      $receiver.target.now = this$insert;
      return Unit;
    };
  }
  function get_insert_0($receiver) {
    return (new Factory()).with_lx79ro$(get_insert$lambda_0($receiver)).withWrap_65fazq$(get_insert$lambda_1($receiver));
  }
  function get_factory($receiver) {
    return (new Factory()).with_9f50g3$($receiver.prepare);
  }
  function get_insert$lambda_2(this$insert) {
    return function ($receiver) {
      this$insert.assign($receiver);
      return Unit;
    };
  }
  function get_insert_1($receiver) {
    return get_factory($receiver).with_lx79ro$(get_insert$lambda_2($receiver));
  }
  function toHole$lambda($receiver) {
    return Unit;
  }
  function toHole($receiver, prepare) {
    if (prepare === void 0)
      prepare = toHole$lambda;
    return new HoleT(prepare, $receiver);
  }
  function get_hole_0($receiver) {
    return toHole($receiver);
  }
  function visibility$lambda$lambda(closure$fn) {
    return function ($receiver) {
      return closure$fn();
    };
  }
  function visibility$lambda$lambda_0(this$visibility, closure$element) {
    return function ($receiver, v) {
      this$visibility(v ? closure$element : null);
      return Unit;
    };
  }
  function visibility$lambda(closure$deps, closure$fn, this$visibility) {
    return function ($receiver) {
      var element = $receiver;
      Rx_init(closure$deps.kills, visibility$lambda$lambda(closure$fn)).forEach_aaomyj$(closure$deps.kills, visibility$lambda$lambda_0(this$visibility, element));
      return Unit;
    };
  }
  function visibility($receiver, deps, fn) {
    return (new Factory()).with_lx79ro$(visibility$lambda(deps, fn, $receiver));
  }
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  var package$commonui = _.commonui || (_.commonui = {});
  package$commonui.KillsApiCommonui = KillsApiCommonui;
  package$commonui.UixApi = UixApi;
  package$commonui.CsApiCommonui = CsApiCommonui;
  package$commonui.EditKillsApi = EditKillsApi;
  package$commonui.EditKillsUixApi = EditKillsUixApi;
  package$commonui.EditFromKillsUixApi = EditFromKillsUixApi;
  Object.defineProperty(package$commonui, 'isServiceWorkerSupported', {
    get: get_isServiceWorkerSupported
  });
  Object.defineProperty(package$commonui, 'isFcmSupported', {
    get: get_isFcmSupported
  });
  Object.defineProperty(package$commonui, 'APP', {
    get: APP_getInstance
  });
  $$importsForInline$$['appsimake-common'] = $module$appsimake_common;
  package$commonui.AppCtx = AppCtx;
  Object.defineProperty(package$commonui, 'browserVisible', {
    get: get_browserVisible
  });
  Object.defineProperty(package$commonui, 'windowHasFocus', {
    get: get_windowHasFocus
  });
  Object.defineProperty(package$commonui, 'windowActive', {
    get: get_windowActive
  });
  package$commonui.keepScreenAwake_i7n0b6$ = keepScreenAwake;
  package$commonui.nextButton_t3i1hh$ = nextButton;
  Object.defineProperty(package$commonui, 'webkitdirectorySupported', {
    get: get_webkitdirectorySupported
  });
  package$commonui.nextButton_rqshq1$ = nextButton_0;
  package$commonui.get_hourglass_asww5s$ = get_hourglass;
  package$commonui.showClosable_1qbaip$ = showClosable;
  package$commonui.faButtonSpan_hq6cqm$ = faButtonSpan;
  package$commonui.faButton_jous2b$ = faButton;
  package$commonui.HasEdit = HasEdit;
  package$commonui.HasEditKills = HasEditKills;
  package$commonui.EditKillsDeps = EditKillsDeps;
  package$commonui.plus_938iip$ = plus_0;
  package$commonui.HasEditFromKillsUix = HasEditFromKillsUix;
  package$commonui.HasFrom = HasFrom;
  package$commonui.HasEditFrom = HasEditFrom;
  package$commonui.HasUix = HasUix;
  package$commonui.HasKillsUix = HasKillsUix;
  package$commonui.HasEditKillsUix = HasEditKillsUix;
  var package$editing = package$commonui.editing || (package$commonui.editing = {});
  package$editing.Editing = Editing;
  package$editing.DefaultEditing = DefaultEditing;
  package$editing.RxEditing = RxEditing;
  package$editing.Binder = Binder;
  package$editing.validate_aw630o$ = validate;
  package$editing.raw_fr8638$ = raw;
  package$editing.parsed_q2cz2q$ = parsed;
  package$editing.required_dvq9sy$ = required;
  package$editing.bind_r7wuz3$ = bind;
  package$editing.bind_vfa4yt$ = bind_0;
  package$editing.EditingApi = EditingApi;
  package$editing.saveButton_h4xye4$ = saveButton;
  package$editing.BackSaveDiscard = BackSaveDiscard;
  var package$mediasession = _.mediasession || (_.mediasession = {});
  Object.defineProperty(package$mediasession, 'mediaSessionSupported', {
    get: get_mediaSessionSupported
  });
  package$mediasession.get_mediaSession_yi0el1$ = get_mediaSession;
  package$mediasession.get_none_dhxii3$ = get_none;
  package$mediasession.get_paused_dhxii3$ = get_paused;
  package$mediasession.get_playing_dhxii3$ = get_playing;
  package$commonui.nodeList_5jbqdj$ = nodeList;
  package$commonui.currentOrAsk_iyaa7$ = currentOrAsk;
  package$commonui.isGrantedOrAsk_iyaa7$ = isGrantedOrAsk;
  package$commonui.isSupported_iyaa7$ = isSupported;
  package$commonui.notDenied_iyaa7$ = notDenied;
  package$commonui.notGranted_iyaa7$ = notGranted;
  package$commonui.shouldRequest_iyaa7$ = shouldRequest;
  package$commonui.PageOut = PageOut;
  package$commonui.PageIn = PageIn;
  package$commonui.NodeSlot = NodeSlot;
  var package$progress = package$commonui.progress || (package$commonui.progress = {});
  package$progress.Progress = Progress;
  package$progress.ui_juxths$ = ui;
  package$progress.progressUI_i7n0b6$ = progressUI;
  Object.defineProperty(Orientation, 'Horizontal', {
    get: Orientation$Horizontal_getInstance
  });
  Object.defineProperty(Orientation, 'Vertical', {
    get: Orientation$Vertical_getInstance
  });
  package$commonui.Orientation = Orientation;
  package$commonui.Size = Size;
  package$commonui.RootPanel = RootPanel;
  package$commonui.rxPanel_83qqjo$ = rxPanel;
  Object.defineProperty(package$commonui, 'globalStatus', {
    get: function () {
      return globalStatus;
    }
  });
  package$commonui.launchGlobal_g2bo5h$ = launchGlobal;
  package$commonui.ToolBar_init_s6zsbr$ = ToolBar_init;
  package$commonui.ToolBar = ToolBar;
  package$commonui.NodesFactory = NodesFactory;
  package$commonui.insertAfter_5a54o3$ = insertAfter;
  Object.defineProperty(NodeHolder, 'Companion', {
    get: NodeHolder$Companion_getInstance
  });
  package$commonui.NodeHolder = NodeHolder;
  package$commonui.nodes_xrpmen$ = nodes;
  package$commonui.get_topbarP1_asww5s$ = get_topbarP1;
  package$commonui.get_topbar_asww5s$ = get_topbar;
  package$commonui.toolbar_1l9eu5$ = toolbar;
  package$commonui.topbar_1l9eu5$ = topbar;
  package$commonui.ScreenLayout = ScreenLayout;
  package$commonui.screenLayout_a48jtg$ = screenLayout;
  package$commonui.faTab_fyxq5k$ = faTab;
  var package$topandcontent = package$commonui.topandcontent || (package$commonui.topandcontent = {});
  package$topandcontent.ProgressTC = ProgressTC;
  var package$usericon = package$commonui.usericon || (package$commonui.usericon = {});
  Object.defineProperty(package$usericon, 'UnknownUserSrc', {
    get: function () {
      return UnknownUserSrc;
    }
  });
  package$usericon.Bind = Bind;
  package$usericon.UI_7i6303$ = UI;
  package$usericon.userIcon_vkyhhb$ = userIcon;
  var package$widget = package$commonui.widget || (package$commonui.widget = {});
  package$widget.Badge = Badge;
  package$widget.BodyPath = BodyPath;
  package$widget.Body = Body;
  package$widget.Button = Button;
  ButtonGroup.Slots = ButtonGroup$Slots;
  package$widget.ButtonGroup = ButtonGroup;
  package$widget.Text = Text;
  package$widget.Icon = Icon;
  package$widget.DropdownMenuItem = DropdownMenuItem;
  package$widget.DropdownMenu = DropdownMenu;
  package$widget.Dropdown = Dropdown;
  package$widget.FactoryAfter = FactoryAfter;
  Object.defineProperty(package$widget, 'factory', {
    get: function () {
      return factory;
    }
  });
  Factory.Wraps = Factory$Wraps;
  package$widget.Factory = Factory;
  package$widget.HTMLElementWrap = HTMLElementWrap;
  package$widget.SlotVar = SlotVar;
  package$widget.ScreenWrap = ScreenWrap;
  package$widget.setTo_u8b85b$ = setTo;
  package$widget.Form = Form;
  FormGroup.Slots = FormGroup$Slots;
  package$widget.FormGroup = FormGroup;
  Object.defineProperty(ViewWithForward, 'Companion', {
    get: ViewWithForward$Companion_getInstance
  });
  package$widget.ViewWithForward = ViewWithForward;
  package$widget.ForwardBase_init_rq3hmi$ = ForwardBase_init;
  package$widget.ForwardBase = ForwardBase;
  package$widget.HasRedisplay = HasRedisplay;
  package$widget.ForwardImpl_init_6yy1mk$ = ForwardImpl_init;
  package$widget.ForwardImpl = ForwardImpl;
  package$widget.click_87tkl2$ = click;
  package$widget.click_49j7yo$ = click_0;
  package$widget.click_ui5lz5$ = click_1;
  package$widget.click_lad1a3$ = click_2;
  package$widget.Hourglass = Hourglass;
  package$widget.Input = Input;
  InputGroup.Slots = InputGroup$Slots;
  package$widget.InputGroup = InputGroup;
  package$widget.JobKillsApi = JobKillsApi;
  package$widget.ListGroup = ListGroup;
  ListGroupButton.Slots = ListGroupButton$Slots;
  package$widget.ListGroupButton = ListGroupButton;
  package$widget.Loading = Loading;
  package$widget.proc = proc;
  package$widget.procOrElse = procOrElse;
  package$widget.procOrElse_hrb794$ = procOrElse_0;
  package$widget.with_iud8od$ = with_0;
  package$widget.with_m7lysv$ = with_1;
  package$widget.toSetProcOrElse_lf6aks$ = toSetProcOrElse;
  package$widget.process_y3in6q$ = process;
  package$widget.envelope_7hrtth$ = envelope;
  package$widget.ProcOrElseList = ProcOrElseList;
  package$widget.ProcVar = ProcVar;
  package$widget.runLoop_5s2xlo$ = runLoop;
  package$widget.runLoop_pi6h9k$ = runLoop_0;
  Object.defineProperty(ProcOrElseVar, 'Companion', {
    get: ProcOrElseVar$Companion_getInstance
  });
  package$widget.ProcOrElseVar = ProcOrElseVar;
  package$widget.procVar = procVar;
  package$widget.procOrElses = procOrElses;
  package$widget.assignedTo_u3ozb1$ = assignedTo;
  package$widget.assignedTo_nv1ey2$ = assignedTo_0;
  package$widget.addedTo_65g674$ = addedTo_0;
  package$widget.addedTo_g26nm8$ = addedTo_1;
  package$widget.addProcAssign_5pyr9y$ = addProcAssign;
  package$widget.addProcAssign_arphq4$ = addProcAssign_0;
  package$widget.assignProcAdd_ohglao$ = assignProcAdd;
  package$widget.rxProc_ll0nau$ = rxProc;
  package$widget.rxProcIf_acq064$ = rxProcIf;
  package$widget.AsyncHolder_init_mh5how$ = AsyncHolder_init;
  package$widget.AsyncHolder = AsyncHolder;
  package$widget.async_k2h1w8$ = async;
  package$widget.processedBy_bkei6v$ = processedBy;
  package$widget.processOnce_wfkocw$ = processOnce;
  package$widget.channel_x76zy$ = channel;
  package$widget.rx_2uuqvr$ = rx;
  package$widget.rx_2pjl1g$ = rx_0;
  Screen.Slots = Screen$Slots;
  Screen.ToastsSlots = Screen$ToastsSlots;
  package$widget.Screen = Screen;
  package$widget.ScrollPane = ScrollPane;
  package$widget.Stack = Stack;
  package$widget.JobScopeApi = JobScopeApi;
  Object.defineProperty(JobScopeImpl, 'Companion', {
    get: JobScopeImpl$Companion_getInstance
  });
  package$widget.JobScopeImpl_init_jsg3wt$ = JobScopeImpl_init;
  package$widget.JobScopeImpl = JobScopeImpl;
  package$widget.get_createKills_ps54kc$ = get_createKills;
  Object.defineProperty(JobKillsImpl, 'Companion', {
    get: JobKillsImpl$Companion_getInstance
  });
  package$widget.JobKillsImpl_init_jsg3wt$ = JobKillsImpl_init;
  package$widget.JobKillsImpl = JobKillsImpl;
  package$widget.Views = Views;
  package$widget.opt_935yjx$ = opt;
  package$widget.of_uujay0$ = of;
  package$widget.ExecImpl_init_jsg3wt$ = ExecImpl_init;
  package$widget.ExecImpl = ExecImpl;
  package$widget.HasView = HasView;
  package$widget.JobScopeWithView = JobScopeWithView;
  package$widget.ViewImplBase_init_rq3hmi$ = ViewImplBase_init;
  package$widget.ViewImplBase = ViewImplBase;
  package$widget.ViewImpl_init_rq3hmi$ = ViewImpl_init;
  package$widget.ViewImpl = ViewImpl;
  package$widget.UIBase_init_rq3hmi$ = UIBase_init;
  package$widget.UIBase = UIBase;
  package$widget.UIWrap_init_1zhk98$ = UIWrap_init;
  package$widget.UIWrap = UIWrap;
  package$widget.childUIWrap_m9p4mn$ = childUIWrap;
  Object.defineProperty(JobSwitch, 'Companion', {
    get: JobSwitch$Companion_getInstance
  });
  package$widget.JobSwitch_init_9coo8k$ = JobSwitch_init;
  package$widget.JobSwitch = JobSwitch;
  package$widget.fromRx_9v2d82$ = fromRx;
  package$widget.switchTo_tsq42y$ = switchTo;
  package$widget.switchTo_c5r5si$ = switchTo_0;
  package$widget.fromRx_iycnw6$ = fromRx_0;
  package$widget.JobScopeWithItem = JobScopeWithItem;
  package$widget.switchToView_pgpq8v$ = switchToView;
  package$widget.switchToView_c5r5si$ = switchToView_0;
  package$widget.switchToView_ogke4d$ = switchToView_1;
  package$widget.runViewOpt_lyqh6t$ = runViewOpt;
  package$widget.runView_k5l2ug$ = runView;
  Object.defineProperty(ItemWithViewRx, 'Companion', {
    get: ItemWithViewRx$Companion_getInstance
  });
  package$widget.ItemWithViewRx = ItemWithViewRx;
  package$widget.Status = Status;
  package$widget.Toasts = Toasts;
  package$widget.Toast = Toast;
  Object.defineProperty(TopAndContent, 'Companion', {
    get: TopAndContent$Companion_getInstance
  });
  package$widget.TopAndContent = TopAndContent;
  package$widget.HourglassView = HourglassView;
  Topbar.Slots = Topbar$Slots;
  package$widget.Topbar = Topbar;
  package$widget.Tabs = Tabs;
  package$widget.Tab = Tab;
  package$widget.HasInbox = HasInbox;
  package$widget.InboxWrap = InboxWrap;
  package$widget.Msg = Msg;
  package$widget.Envelope = Envelope;
  package$widget.wrap_hj1l2p$ = wrap;
  package$widget.invoke_hj1l2p$ = invoke_0;
  package$widget.get_slotholes_asww5s$ = get_slotholes;
  package$widget.rx_vr65sd$ = rx_1;
  package$widget.get_append_asww5s$ = get_append;
  SlotsOwner.NodeRef = SlotsOwner$NodeRef;
  SlotsOwner.SlotsRef = SlotsOwner$SlotsRef;
  package$widget.SlotsOwner = SlotsOwner;
  package$widget.SlotHoles = SlotHoles;
  Object.defineProperty(PrevRef, 'First', {
    get: PrevRef$First_getInstance
  });
  PrevRef.NodeRef = PrevRef$NodeRef;
  Object.defineProperty(PrevRef, 'Companion', {
    get: PrevRef$Companion_getInstance
  });
  package$widget.PrevRef = PrevRef;
  package$widget.SlotsElement = SlotsElement;
  Slots.SlotItem = Slots$SlotItem;
  package$widget.Slots = Slots;
  package$widget.get_widget_asww5s$ = get_widget;
  package$widget.get_hole_asww5s$ = get_hole;
  package$widget.get_slots_asww5s$ = get_slots;
  package$widget.get_insert_asww5s$ = get_insert;
  package$widget.widget_4qwho1$ = widget;
  package$widget.Widget = Widget;
  package$widget.widget_asww5c$ = widget_0;
  package$widget.HasNode = HasNode;
  package$widget.NodeWrap = NodeWrap;
  package$widget.HasElement = HasElement;
  package$widget.HasHTMLElement = HasHTMLElement;
  package$widget.appendTo_ri7iup$ = appendTo;
  package$widget.setTo_bbl4j7$ = setTo_0;
  package$widget.setTo_qfr76b$ = setTo_1;
  package$widget.HoleT = HoleT;
  package$widget.get_insert_im8gow$ = get_insert_0;
  package$widget.get_factory_c1yg1q$ = get_factory;
  package$widget.get_insert_c1yg1q$ = get_insert_1;
  package$widget.toHole_thfif7$ = toHole;
  package$widget.get_hole_im8gow$ = get_hole_0;
  package$widget.visibility_4dlpf0$ = visibility;
  KillsApiCommonui.prototype.remAssign_7fncnf$ = KillsApiDomx.prototype.remAssign_7fncnf$;
  KillsApiCommonui.prototype.rxClass_c5yvvx$ = KillsApiDomx.prototype.rxClass_c5yvvx$;
  KillsApiCommonui.prototype.rxClass_6sflyw$ = KillsApiDomx.prototype.rxClass_6sflyw$;
  KillsApiCommonui.prototype.rx_y6x17j$ = KillsApiDomx.prototype.rx_y6x17j$;
  KillsApiCommonui.prototype.rx_46ic4w$ = KillsApiDomx.prototype.rx_46ic4w$;
  KillsApiCommonui.prototype.containsRx_1w65cx$ = KillsApiDomx.prototype.containsRx_1w65cx$;
  KillsApiCommonui.prototype.filtered_tnde95$ = KillsApiDomx.prototype.filtered_tnde95$;
  KillsApiCommonui.prototype.forEach_xwzbbo$ = KillsApiDomx.prototype.forEach_xwzbbo$;
  KillsApiCommonui.prototype.forEach_35q7bt$ = KillsApiDomx.prototype.forEach_35q7bt$;
  KillsApiCommonui.prototype.map_1mq1ue$ = KillsApiDomx.prototype.map_1mq1ue$;
  KillsApiCommonui.prototype.map_jtxi0h$ = KillsApiDomx.prototype.map_jtxi0h$;
  KillsApiCommonui.prototype.on_2stdkb$ = KillsApiDomx.prototype.on_2stdkb$;
  KillsApiCommonui.prototype.on_hgi4ad$ = KillsApiDomx.prototype.on_hgi4ad$;
  KillsApiCommonui.prototype.onChange_rlu5c6$ = KillsApiDomx.prototype.onChange_rlu5c6$;
  KillsApiCommonui.prototype.process_7xi3v7$ = KillsApiDomx.prototype.process_7xi3v7$;
  KillsApiCommonui.prototype.toChannelLater_z5dyp2$ = KillsApiDomx.prototype.toChannelLater_z5dyp2$;
  KillsApiCommonui.prototype.toRxSet_jr4bl4$ = KillsApiDomx.prototype.toRxSet_jr4bl4$;
  CsApiCommonui.prototype.toRx_on0lyu$ = CsApi.prototype.toRx_on0lyu$;
  EditKillsApi.prototype.visibility_dakdiv$ = KillsApiCommonui.prototype.visibility_dakdiv$;
  EditKillsApi.prototype.enabled_y5ufnr$ = KillsApiCommonui.prototype.enabled_y5ufnr$;
  EditKillsApi.prototype.remAssign_ah7wag$ = KillsApiCommonui.prototype.remAssign_ah7wag$;
  EditKillsApi.prototype.remAssign_7fncnf$ = KillsApiCommonui.prototype.remAssign_7fncnf$;
  EditKillsApi.prototype.rxClass_9npl0m$ = KillsApiCommonui.prototype.rxClass_9npl0m$;
  EditKillsApi.prototype.rxClass_c5yvvx$ = KillsApiCommonui.prototype.rxClass_c5yvvx$;
  EditKillsApi.prototype.rxClass_6sflyw$ = KillsApiCommonui.prototype.rxClass_6sflyw$;
  EditKillsApi.prototype.rx_y6x17j$ = KillsApiCommonui.prototype.rx_y6x17j$;
  EditKillsApi.prototype.rx_46ic4w$ = KillsApiCommonui.prototype.rx_46ic4w$;
  EditKillsApi.prototype.containsRx_1w65cx$ = KillsApiCommonui.prototype.containsRx_1w65cx$;
  EditKillsApi.prototype.filtered_tnde95$ = KillsApiCommonui.prototype.filtered_tnde95$;
  EditKillsApi.prototype.forEach_xwzbbo$ = KillsApiCommonui.prototype.forEach_xwzbbo$;
  EditKillsApi.prototype.forEach_35q7bt$ = KillsApiCommonui.prototype.forEach_35q7bt$;
  EditKillsApi.prototype.map_1mq1ue$ = KillsApiCommonui.prototype.map_1mq1ue$;
  EditKillsApi.prototype.map_jtxi0h$ = KillsApiCommonui.prototype.map_jtxi0h$;
  EditKillsApi.prototype.on_2stdkb$ = KillsApiCommonui.prototype.on_2stdkb$;
  EditKillsApi.prototype.on_hgi4ad$ = KillsApiCommonui.prototype.on_hgi4ad$;
  EditKillsApi.prototype.onChange_rlu5c6$ = KillsApiCommonui.prototype.onChange_rlu5c6$;
  EditKillsApi.prototype.process_7xi3v7$ = KillsApiCommonui.prototype.process_7xi3v7$;
  EditKillsApi.prototype.toChannelLater_z5dyp2$ = KillsApiCommonui.prototype.toChannelLater_z5dyp2$;
  EditKillsApi.prototype.toRxSet_jr4bl4$ = KillsApiCommonui.prototype.toRxSet_jr4bl4$;
  EditKillsUixApi.prototype.bind_eam54t$ = EditKillsApi.prototype.bind_eam54t$;
  EditKillsUixApi.prototype.bind_85m6xz$ = EditKillsApi.prototype.bind_85m6xz$;
  EditKillsUixApi.prototype.visibility_dakdiv$ = EditKillsApi.prototype.visibility_dakdiv$;
  EditKillsUixApi.prototype.enabled_y5ufnr$ = EditKillsApi.prototype.enabled_y5ufnr$;
  EditKillsUixApi.prototype.remAssign_ah7wag$ = EditKillsApi.prototype.remAssign_ah7wag$;
  EditKillsUixApi.prototype.remAssign_7fncnf$ = EditKillsApi.prototype.remAssign_7fncnf$;
  EditKillsUixApi.prototype.rxClass_9npl0m$ = EditKillsApi.prototype.rxClass_9npl0m$;
  EditKillsUixApi.prototype.rxClass_c5yvvx$ = EditKillsApi.prototype.rxClass_c5yvvx$;
  EditKillsUixApi.prototype.rxClass_6sflyw$ = EditKillsApi.prototype.rxClass_6sflyw$;
  EditKillsUixApi.prototype.rx_y6x17j$ = EditKillsApi.prototype.rx_y6x17j$;
  EditKillsUixApi.prototype.rx_46ic4w$ = EditKillsApi.prototype.rx_46ic4w$;
  EditKillsUixApi.prototype.containsRx_1w65cx$ = EditKillsApi.prototype.containsRx_1w65cx$;
  EditKillsUixApi.prototype.filtered_tnde95$ = EditKillsApi.prototype.filtered_tnde95$;
  EditKillsUixApi.prototype.forEach_xwzbbo$ = EditKillsApi.prototype.forEach_xwzbbo$;
  EditKillsUixApi.prototype.forEach_35q7bt$ = EditKillsApi.prototype.forEach_35q7bt$;
  EditKillsUixApi.prototype.map_1mq1ue$ = EditKillsApi.prototype.map_1mq1ue$;
  EditKillsUixApi.prototype.map_jtxi0h$ = EditKillsApi.prototype.map_jtxi0h$;
  EditKillsUixApi.prototype.on_2stdkb$ = EditKillsApi.prototype.on_2stdkb$;
  EditKillsUixApi.prototype.on_hgi4ad$ = EditKillsApi.prototype.on_hgi4ad$;
  EditKillsUixApi.prototype.onChange_rlu5c6$ = EditKillsApi.prototype.onChange_rlu5c6$;
  EditKillsUixApi.prototype.process_7xi3v7$ = EditKillsApi.prototype.process_7xi3v7$;
  EditKillsUixApi.prototype.toChannelLater_z5dyp2$ = EditKillsApi.prototype.toChannelLater_z5dyp2$;
  EditKillsUixApi.prototype.toRxSet_jr4bl4$ = EditKillsApi.prototype.toRxSet_jr4bl4$;
  EditFromKillsUixApi.prototype.get_saveButton_tdhe4g$ = EditKillsUixApi.prototype.get_saveButton_tdhe4g$;
  EditFromKillsUixApi.prototype.bind_eam54t$ = EditKillsUixApi.prototype.bind_eam54t$;
  EditFromKillsUixApi.prototype.bind_85m6xz$ = EditKillsUixApi.prototype.bind_85m6xz$;
  EditFromKillsUixApi.prototype.visibility_dakdiv$ = EditKillsUixApi.prototype.visibility_dakdiv$;
  EditFromKillsUixApi.prototype.enabled_y5ufnr$ = EditKillsUixApi.prototype.enabled_y5ufnr$;
  EditFromKillsUixApi.prototype.remAssign_ah7wag$ = EditKillsUixApi.prototype.remAssign_ah7wag$;
  EditFromKillsUixApi.prototype.remAssign_7fncnf$ = EditKillsUixApi.prototype.remAssign_7fncnf$;
  EditFromKillsUixApi.prototype.rxClass_9npl0m$ = EditKillsUixApi.prototype.rxClass_9npl0m$;
  EditFromKillsUixApi.prototype.rxClass_c5yvvx$ = EditKillsUixApi.prototype.rxClass_c5yvvx$;
  EditFromKillsUixApi.prototype.rxClass_6sflyw$ = EditKillsUixApi.prototype.rxClass_6sflyw$;
  EditFromKillsUixApi.prototype.rx_y6x17j$ = EditKillsUixApi.prototype.rx_y6x17j$;
  EditFromKillsUixApi.prototype.rx_46ic4w$ = EditKillsUixApi.prototype.rx_46ic4w$;
  EditFromKillsUixApi.prototype.containsRx_1w65cx$ = EditKillsUixApi.prototype.containsRx_1w65cx$;
  EditFromKillsUixApi.prototype.filtered_tnde95$ = EditKillsUixApi.prototype.filtered_tnde95$;
  EditFromKillsUixApi.prototype.forEach_xwzbbo$ = EditKillsUixApi.prototype.forEach_xwzbbo$;
  EditFromKillsUixApi.prototype.forEach_35q7bt$ = EditKillsUixApi.prototype.forEach_35q7bt$;
  EditFromKillsUixApi.prototype.map_1mq1ue$ = EditKillsUixApi.prototype.map_1mq1ue$;
  EditFromKillsUixApi.prototype.map_jtxi0h$ = EditKillsUixApi.prototype.map_jtxi0h$;
  EditFromKillsUixApi.prototype.on_2stdkb$ = EditKillsUixApi.prototype.on_2stdkb$;
  EditFromKillsUixApi.prototype.on_hgi4ad$ = EditKillsUixApi.prototype.on_hgi4ad$;
  EditFromKillsUixApi.prototype.onChange_rlu5c6$ = EditKillsUixApi.prototype.onChange_rlu5c6$;
  EditFromKillsUixApi.prototype.process_7xi3v7$ = EditKillsUixApi.prototype.process_7xi3v7$;
  EditFromKillsUixApi.prototype.toChannelLater_z5dyp2$ = EditKillsUixApi.prototype.toChannelLater_z5dyp2$;
  EditFromKillsUixApi.prototype.toRxSet_jr4bl4$ = EditKillsUixApi.prototype.toRxSet_jr4bl4$;
  DefaultEditing.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  DefaultEditing.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  DefaultEditing.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  DefaultEditing.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  DefaultEditing.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  DefaultEditing.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  DefaultEditing.prototype.map_1mq1ue$ = KillsApi.prototype.map_1mq1ue$;
  DefaultEditing.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  DefaultEditing.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  DefaultEditing.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  DefaultEditing.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  DefaultEditing.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  DefaultEditing.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  DefaultEditing.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  DefaultEditing.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  Binder.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  Binder.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  Binder.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  Binder.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  Binder.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  Binder.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  Binder.prototype.map_1mq1ue$ = KillsApi.prototype.map_1mq1ue$;
  Binder.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  Binder.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  Binder.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  Binder.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  Binder.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  Binder.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  Binder.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  Binder.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  EditingApi.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  EditingApi.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  EditingApi.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  EditingApi.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  EditingApi.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  EditingApi.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  EditingApi.prototype.map_1mq1ue$ = KillsApi.prototype.map_1mq1ue$;
  EditingApi.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  EditingApi.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  EditingApi.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  EditingApi.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  EditingApi.prototype.remAssign_ah7wag$ = KillsApiCommonui.prototype.remAssign_ah7wag$;
  EditingApi.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  EditingApi.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  EditingApi.prototype.rxClass_9npl0m$ = KillsApiCommonui.prototype.rxClass_9npl0m$;
  EditingApi.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  EditingApi.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  EditingApi.prototype.visibility_dakdiv$ = KillsApiCommonui.prototype.visibility_dakdiv$;
  EditingApi.prototype.enabled_y5ufnr$ = KillsApiCommonui.prototype.enabled_y5ufnr$;
  EditingApi.prototype.on_2stdkb$ = KillsApiCommonui.prototype.on_2stdkb$;
  EditingApi.prototype.on_hgi4ad$ = KillsApiCommonui.prototype.on_hgi4ad$;
  BackSaveDiscard.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  BackSaveDiscard.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  BackSaveDiscard.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  BackSaveDiscard.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  BackSaveDiscard.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  BackSaveDiscard.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  BackSaveDiscard.prototype.map_1mq1ue$ = KillsApi.prototype.map_1mq1ue$;
  BackSaveDiscard.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  BackSaveDiscard.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  BackSaveDiscard.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  BackSaveDiscard.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  BackSaveDiscard.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  BackSaveDiscard.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  BackSaveDiscard.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  BackSaveDiscard.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  BackSaveDiscard.prototype.click_htd9kn$ = UixApi.prototype.click_htd9kn$;
  BackSaveDiscard.prototype.click_3xepc3$ = UixApi.prototype.click_3xepc3$;
  BackSaveDiscard.prototype.click_ka8ib0$ = UixApi.prototype.click_ka8ib0$;
  BackSaveDiscard.prototype.click_b0jn9q$ = UixApi.prototype.click_b0jn9q$;
  BackSaveDiscard.prototype.signOut_7wq8x$ = UixApi.prototype.signOut_7wq8x$;
  JobScopeImpl.prototype.switchToWrap_t6rg6d$ = JobScopeApi.prototype.switchToWrap_t6rg6d$;
  JobScopeImpl.prototype.withChild_p3so7j$ = JobScopeApi.prototype.withChild_p3so7j$;
  JobScopeImpl.prototype.get_childUIWrap_irb06o$ = JobScopeApi.prototype.get_childUIWrap_irb06o$;
  JobKillsApi.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  JobKillsApi.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  JobKillsApi.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  JobKillsApi.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  JobKillsApi.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  JobKillsApi.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  JobKillsApi.prototype.map_1mq1ue$ = KillsApi.prototype.map_1mq1ue$;
  JobKillsApi.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  JobKillsApi.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  JobKillsApi.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  JobKillsApi.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  JobKillsApi.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  JobKillsApi.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  JobKillsApi.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  JobKillsApi.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  JobKillsImpl.prototype.rx_y6x17j$ = KillsApi.prototype.rx_y6x17j$;
  JobKillsImpl.prototype.rx_46ic4w$ = KillsApi.prototype.rx_46ic4w$;
  JobKillsImpl.prototype.containsRx_1w65cx$ = KillsApi.prototype.containsRx_1w65cx$;
  JobKillsImpl.prototype.filtered_tnde95$ = KillsApi.prototype.filtered_tnde95$;
  JobKillsImpl.prototype.forEach_xwzbbo$ = KillsApi.prototype.forEach_xwzbbo$;
  JobKillsImpl.prototype.forEach_35q7bt$ = KillsApi.prototype.forEach_35q7bt$;
  JobKillsImpl.prototype.map_1mq1ue$ = KillsApi.prototype.map_1mq1ue$;
  JobKillsImpl.prototype.map_jtxi0h$ = KillsApi.prototype.map_jtxi0h$;
  JobKillsImpl.prototype.onChange_rlu5c6$ = KillsApi.prototype.onChange_rlu5c6$;
  JobKillsImpl.prototype.process_7xi3v7$ = KillsApi.prototype.process_7xi3v7$;
  JobKillsImpl.prototype.remAssign_7fncnf$ = KillsApi.prototype.remAssign_7fncnf$;
  JobKillsImpl.prototype.rxClass_c5yvvx$ = KillsApi.prototype.rxClass_c5yvvx$;
  JobKillsImpl.prototype.rxClass_6sflyw$ = KillsApi.prototype.rxClass_6sflyw$;
  JobKillsImpl.prototype.toChannelLater_z5dyp2$ = KillsApi.prototype.toChannelLater_z5dyp2$;
  JobKillsImpl.prototype.toRxSet_jr4bl4$ = KillsApi.prototype.toRxSet_jr4bl4$;
  JobKillsImpl.prototype.mapAsync_ie512r$ = JobKillsApi.prototype.mapAsync_ie512r$;
  UIBase.prototype.click_htd9kn$ = UixApi.prototype.click_htd9kn$;
  UIBase.prototype.click_3xepc3$ = UixApi.prototype.click_3xepc3$;
  UIBase.prototype.click_ka8ib0$ = UixApi.prototype.click_ka8ib0$;
  UIBase.prototype.click_b0jn9q$ = UixApi.prototype.click_b0jn9q$;
  UIBase.prototype.signOut_7wq8x$ = UixApi.prototype.signOut_7wq8x$;
  Object.defineProperty(HasElement.prototype, 'slot', Object.getOwnPropertyDescriptor(HasNode.prototype, 'slot'));
  Object.defineProperty(HasElement.prototype, 'hole', Object.getOwnPropertyDescriptor(HasNode.prototype, 'hole'));
  Object.defineProperty(HasElement.prototype, 'insert', Object.getOwnPropertyDescriptor(HasNode.prototype, 'insert'));
  Object.defineProperty(HasHTMLElement.prototype, 'cls', Object.getOwnPropertyDescriptor(HasElement.prototype, 'cls'));
  Object.defineProperty(HasHTMLElement.prototype, 'slot', Object.getOwnPropertyDescriptor(HasElement.prototype, 'slot'));
  Object.defineProperty(HasHTMLElement.prototype, 'hole', Object.getOwnPropertyDescriptor(HasElement.prototype, 'hole'));
  Object.defineProperty(HasHTMLElement.prototype, 'insert', Object.getOwnPropertyDescriptor(HasElement.prototype, 'insert'));
  Object.defineProperty(ScreenWrap.prototype, 'cls', Object.getOwnPropertyDescriptor(HasHTMLElement.prototype, 'cls'));
  Object.defineProperty(ScreenWrap.prototype, 'slot', Object.getOwnPropertyDescriptor(HasHTMLElement.prototype, 'slot'));
  Object.defineProperty(ScreenWrap.prototype, 'hole', Object.getOwnPropertyDescriptor(HasHTMLElement.prototype, 'hole'));
  Object.defineProperty(ScreenWrap.prototype, 'insert', Object.getOwnPropertyDescriptor(HasHTMLElement.prototype, 'insert'));
  JobSwitch.prototype.forEachLater_cksb0z$ = RxIface.prototype.forEachLater_cksb0z$;
  Object.defineProperty(NodeWrap.prototype, 'slot', Object.getOwnPropertyDescriptor(HasNode.prototype, 'slot'));
  Object.defineProperty(NodeWrap.prototype, 'hole', Object.getOwnPropertyDescriptor(HasNode.prototype, 'hole'));
  Object.defineProperty(NodeWrap.prototype, 'insert', Object.getOwnPropertyDescriptor(HasNode.prototype, 'insert'));
  isServiceWorkerSupported = lazy(isServiceWorkerSupported$lambda);
  isFcmSupported = lazy(isFcmSupported$lambda);
  browserVisible = lazy(browserVisible$lambda);
  windowHasFocus = lazy(windowHasFocus$lambda);
  windowActive = lazy(windowActive$lambda);
  keepAwakeVideo = lazy(keepAwakeVideo$lambda);
  keepAwakeCounter = 0;
  webkitdirectorySupported = lazy(webkitdirectorySupported$lambda);
  mediaSessionSupported = lazy(mediaSessionSupported$lambda);
  var $receiver = new Var('Please wait...');
  $receiver.forEach_aaomyj$(killable.NoKill, globalStatus$lambda$lambda);
  globalStatus = $receiver;
  UnknownUserSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAz1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACZY6YEAAAARHRSTlMAAQIEBQcKCwwODxITGBkkLzM1OEpLTFJXXWJnaGlrfH6IiYuMjo+Xo6Wtr7Cyur7Aw8XHyMrM0dPc4uTo6e/x8/n7/fpxHuUAAAFVSURBVBgZ5cHpMgNBFAbQj2kSy5CNIIIIEVsS+zZNTH/v/0xUSaXouXGv387BP+aqnaH3w07V4S+SVs6JvJXALM34TZbCqBL4Q16BSRoYyVMYJBkLsgS6XQpaULlAQe6gqVFUheaQog40I4qG0HiKPDSeIg/NiKIhNF2KOtDUKKpC4wIFuYOqTUELusSzIEtgsBYYCSlMKoE/hAqM1jy/yVLoFprnvjePpB04EXYTzPf8WXMBv2gEfrpaBFytO/J+dFhzQOman0IDMx3xS2g7TLm9wC9dzLDDqfeT+pID3FL95J1TOxCtUrUCSZ+qPgRlGpRRtEWDLRTd0+AOBY4mDrF1mqwjtkmTDcQOaLKP2ClN+ojd0uQGsReaPCP2RpNXxHKa5Ii90OQZsUuaXCC2TZNtxJZpsoyCHg2OUeSeqHpyEJQeqXhYhGiuMRhzpvGgMYf/5QNf4mAOhjK3vQAAAABJRU5ErkJggg==';
  factory = new Factory();
  SlotsAttribute = 'appsimakeSlots';
  Kotlin.defineModule('appsimake-commonui', _);
  return _;
}(typeof this['appsimake-commonui'] === 'undefined' ? {} : this['appsimake-commonui'], kotlin, this['appsimake-commonshr'], this['appsimake-domx'], this['kotlinx-coroutines-core'], this['appsimake-buildenv'], this['appsimake-bootstrap'], this['appsimake-common'], this['appsimake-fontawesome']);
